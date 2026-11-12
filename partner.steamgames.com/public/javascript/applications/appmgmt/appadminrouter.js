/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  Bt as n,
  C as r,
  Gt as i,
  Jt as a,
  Kt as o,
  Q as s,
  S as c,
  Ut as l,
  W as u,
  Wt as d,
  X as f,
  Xt as p,
  Yt as m,
  Zt as h,
  _t as g,
  a as _,
  bt as v,
  c as y,
  en as b,
  it as ee,
  j as x,
  q as te,
  qt as S,
  rt as C,
  sn as w,
  vt as T,
  yt as E,
} from "./chunk~de7f2df91c.js";
import {
  Ft as D,
  Ht as ne,
  It as O,
  r as re,
  u as k,
} from "./chunk~25a6634263.js";
import {
  i as ie,
  l as ae,
  n as oe,
  o as se,
  r as A,
  s as ce,
} from "./chunk~b4171a8747.js";
import {
  $a as j,
  Ea as le,
  Nt as ue,
  Pt as de,
  Vt as fe,
  Wt as M,
  da as N,
  la as pe,
  mn as me,
  rn as he,
  ua as P,
} from "./chunk~1fa4b8f2ff.js";
import { h as ge, r as _e } from "./chunk~0a99e05c44.js";
import { a as ve, r as F } from "./chunk~44f252525d.js";
import { n as I } from "./chunk~f8b6a4beb3.js";
import { t as L } from "./chunk~ede3e357a2.js";
import { t as ye } from "./chunk~9aa05d2c7d.js";
import { a as be, l as R, o as xe } from "./chunk~428594b857.js";
import { r as Se } from "./chunk~b390ee0f78.js";
import { n as Ce } from "./chunk~b0a84aab1b.js";
import { t as we } from "./chunk~726542bc75.js";
import { n as Te } from "./chunk~a6402cc243.js";
import { t as Ee } from "./chunk~8681f5c764.js";
import { t as De } from "./chunk~f4e4ed5c17.js";
import { t as Oe } from "./chunk~c55709d290.js";
import {
  J as ke,
  T as Ae,
  i as je,
  n as Me,
  r as Ne,
  u as Pe,
} from "./chunk~b00bc5ccc1.js";
import {
  C as Fe,
  E as z,
  O as B,
  S as Ie,
  a as Le,
  b as Re,
  c as ze,
  d as Be,
  k as Ve,
  l as He,
  m as Ue,
  n as We,
  o as Ge,
  p as Ke,
  s as qe,
  t as Je,
  u as Ye,
  v as Xe,
  x as Ze,
  y as V,
} from "./chunk~bd435de487.js";
import { t as Qe } from "./chunk~eefd71512b.js";
import "./chunk~ca0c999570.js";
import { n as $e } from "./chunk~a7c5e71e12.js";
import { l as et, n as tt, u as nt, v as rt } from "./chunk~d6693aba87.js";
import { t as H } from "./chunk~234d4d786c.js";
import { c as it, l as at, t as ot } from "./chunk~eae65d56a7.js";
import { n as st } from "./chunk~9b35b2d482.js";
var U = w(t()),
  ct = `fHxyDThw2SA-`,
  lt = `bXQSJ5DkbKo-`,
  ut = `iVSnrcCn4Yo-`,
  dt = `C0Gk8LNsNT4-`,
  ft = `HmCtrHg-GeE-`,
  pt = `VRt6OsaWSFQ-`,
  mt = `tqnF2eX4-Y8-`,
  ht = `b0mgbqlTptQ-`,
  W = T();
function gt(e, t) {
  let n = Se(t),
    r = _e();
  b(
    r?.bUsePartnerAPI,
    `useIsDemoVisibleOnSomewhere must run under PartnerStoreBrowseUnpublishedRoot, or the answer depends on the viewer's country`,
  );
  let { data: i, isLoading: a } = ge(n);
  if (!a)
    return i && i.related_items
      ? (i.related_items.demo_appid &&
          i.related_items.demo_appid.includes(e)) ||
          (i.related_items.standalone_demo_appid &&
            i.related_items.standalone_demo_appid.includes(e))
      : !1;
}
function _t(e) {
  let { parentAppId: t } = e;
  return (0, W.jsxs)(`div`, {
    className: x(mt, ht),
    children: [
      (0, W.jsx)(`p`, {
        children: P(`#App_Landing_DemoWishlist_Demo_NotVisible`),
      }),
      (0, W.jsx)(`p`, {
        children: N(
          `#App_Landing_DemoWishlist_Demo_NotVisible_Publish`,
          (0, W.jsx)(`a`, {
            href: `${u.PARTNER_BASE_URL}admin/game/editbyappid/${t}?activetab=tab_specialsettings#associated_demos`,
            target: `_blank`,
          }),
        ),
      }),
    ],
  });
}
var vt = 7,
  yt = 7;
function bt(e) {
  let { demoAppID: t, parentAppId: n } = e,
    [r, i] = U.useState(!1),
    [a, o] = U.useState(void 0),
    s = gt(t, n),
    [c, l] = U.useState(void 0),
    [u, d] = U.useState(0),
    f = U.useCallback(() => d((e) => e + 1), []),
    p = I();
  (U.useEffect(() => {
    let e = new AbortController();
    return (
      (async () => {
        (i(!1), o(void 0));
        let r = E.Init(be);
        (r.Body().set_demo_appid(t), r.Body().set_appid(n));
        let a = await R.GetWishlistDemoEmailStatus(p, r);
        e.signal.aborted ||
          (a.BSuccess() && (i(a.Body().can_fire()), o(a.Body().time_staged())));
      })(),
      () => e.abort()
    );
  }, [p, t, n, u]),
    U.useEffect(() => {
      let e = window.AppLandingRefreshCallbacks;
      e || ((e = new D()), (window.AppLandingRefreshCallbacks = e));
      let t = e.Register(f);
      return () => t.Unregister();
    }, [f]));
  let m = r || c !== void 0,
    h = a + vt * j.PerDay,
    g = !r && a && new Date(h * 1e3) > new Date();
  if (m || g) {
    let e = `${C.PARTNER_BASE_URL}doc/marketing/wishlist`;
    return (0, W.jsxs)(`div`, {
      className: ut,
      children: [
        (0, W.jsxs)(`div`, {
          className: ct,
          children: [
            (0, W.jsx)(`h2`, {
              children: P(`#App_Landing_DemoWishlist_Title`),
            }),
            (0, W.jsx)(`a`, {
              className: lt,
              href: e,
              children: P(`#App_Landing_DemoWishlist_Link`),
            }),
          ],
        }),
        m &&
          (0, W.jsx)(xt, {
            demoAppID: t,
            parentAppId: n,
            bSendEmailsSucceeded: c,
            setSendEmailsSucceeded: l,
            bIsDemoVisible: s,
          }),
        m && s === !1 && (0, W.jsx)(_t, { demoAppID: t, parentAppId: n }),
        m && g && (0, W.jsx)(`hr`, { className: `kJKQ7pq9uBQ-` }),
        g &&
          (0, W.jsx)(Ct, {
            parentAppId: n,
            timeStaged: a,
            noticeVisibleToDate: h,
          }),
      ],
    });
  }
}
function xt(e) {
  let {
      demoAppID: t,
      parentAppId: n,
      bIsDemoVisible: r,
      bSendEmailsSucceeded: i,
      setSendEmailsSucceeded: a,
    } = e,
    [o, s] = U.useState(!1),
    [c, l] = U.useState(!1),
    u = I(),
    d = U.useCallback(async () => {
      (l(!1), s(!0));
      try {
        let e = E.Init(xe);
        (e.Body().set_demo_appid(t), e.Body().set_appid(n));
        let r = await R.QueueWishlistDemoEmailToFire(u, e);
        a(r.BSuccess());
      } finally {
        s(!1);
      }
    }, [t, n, u, a]),
    { bLoading: f, rgWarnings: p } = St(n, t),
    m = p.every((e) => !e.bCritical);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`div`, {
        className: dt,
        children: P(`#App_Landing_DemoWishlist_SubTitle`),
      }),
      (0, W.jsx)(`div`, {
        className: ft,
        children: (0, W.jsx)(`p`, {
          children: P(`#App_Landing_DemoWishlist_Desc`),
        }),
      }),
      f
        ? (0, W.jsx)(Qe, {})
        : (0, W.jsxs)(W.Fragment, {
            children: [
              p.map((e) =>
                (0, W.jsx)(
                  `div`,
                  {
                    className: x(mt, e.bCritical && `b0mgbqlTptQ-`),
                    children: (0, W.jsx)(`p`, { children: e.sText }),
                  },
                  e.sText,
                ),
              ),
              i === void 0 &&
                (0, W.jsx)(W.Fragment, {
                  children: (0, W.jsxs)(`div`, {
                    className: `GB5htOj-H3w-`,
                    children: [
                      (0, W.jsx)(M, {
                        className: x(
                          `btn_green_steamui btn_border_2px btn_medium`,
                          `I-mdGc7U3CQ-`,
                        ),
                        disabled: o || !m || !r,
                        onClick: () => l(!0),
                        children: (0, W.jsx)(`span`, {
                          children: P(
                            `#App_Landing_DemoWishlist_SendEmailsButton`,
                          ),
                        }),
                      }),
                      o &&
                        (0, W.jsx)(Qe, {
                          className: `pfOBfU1XYpw-`,
                          size: `small`,
                        }),
                    ],
                  }),
                }),
              i !== void 0 &&
                (0, W.jsxs)(`div`, {
                  className: `GB5htOj-H3w-`,
                  children: [
                    i &&
                      (0, W.jsx)(`div`, {
                        className: `l4AqU3s0T-0-`,
                        children: P(
                          `#App_Landing_DemoWishlist_SendEmails_Succeeded`,
                        ),
                      }),
                    !i &&
                      (0, W.jsx)(`div`, {
                        className: `PbPeHd0P-uM-`,
                        children: P(
                          `#App_Landing_DemoWishlist_SendEmails_Failed`,
                        ),
                      }),
                  ],
                }),
            ],
          }),
      c &&
        (0, W.jsxs)(Ee, {
          active: !0,
          className: void 0,
          children: [
            (0, W.jsx)(`h1`, {
              children: P(`#App_Landing_DemoWishlist_Dialog_Header`),
            }),
            (0, W.jsxs)(fe, {
              className: void 0,
              children: [
                (0, W.jsx)(`div`, {
                  children: P(`#App_Landing_DemoWishlist_Dialog_Desc`),
                }),
                (0, W.jsx)(`h2`, {
                  children: P(`#App_Landing_DemoWishlist_Dialog_ListTitle`),
                }),
                (0, W.jsx)(`ul`, {
                  children: N(
                    `#App_Landing_DemoWishlist_Dialog_List`,
                    (0, W.jsx)(`li`, {}),
                    (0, W.jsx)(`b`, {}),
                  ),
                }),
              ],
            }),
            (0, W.jsx)(he, {
              onOK: d,
              strOKText: P(`#App_Landing_DemoWishlist_Dialog_Confirm`),
              onCancel: () => l(!1),
              strCancelText: P(`#App_Landing_DemoWishlist_Dialog_Cancel`),
            }),
          ],
        }),
    ],
  });
}
function St(e, t) {
  let n = B({ appid: e }),
    r = B({ appid: t }),
    [i] = $e(e, { include_release: !0 }),
    a = n.isLoading || r.isLoading,
    o = n.isSuccess && r.isSuccess,
    [s, c, l, u] = U.useMemo(() => {
      if (!o) return [];
      let e = (e) =>
        ne(
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
    f < new Date().getTime() / 1e3 + 14 * j.PerDay &&
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
function Ct(e) {
  let { parentAppId: t, timeStaged: n, noticeVisibleToDate: r } = e,
    i = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`,
    a = i(new Date((n - yt * j.PerDay) * 1e3)),
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
    l = `${C.STATS_BASE_URL}app/wishlist/${t}/?dateStart=${a}&dateEnd=${o}`;
  return (0, W.jsxs)(`div`, {
    className: ft,
    children: [
      (0, W.jsx)(`p`, {
        children: P(`#App_Landing_DemoWishlist_SentRecently_Desc`, s),
      }),
      (0, W.jsx)(`p`, {
        children: (0, W.jsx)(`a`, {
          href: l,
          children: P(`#App_Landing_DemoWishlist_SentRecently_ViewStats`),
        }),
      }),
      (0, W.jsx)(`p`, {
        className: pt,
        children: P(`#App_Landing_DemoWishlist_SentRecently_Notice`, c),
      }),
    ],
  });
}
var wt = w(De());
function Tt(e, t, n) {
  let { isLoading: r, data: i } = L({
    queryKey: [`usePartnerFinancialDailySummary`, e, t, n],
    queryFn: async () => {
      let r = { partnerid: e, pastdays: t, appid: n },
        i = `${C.PARTNER_BASE_URL}financial/ajaxgetpartnersummary`,
        a = await wt.default.get(i, { params: r, withCredentials: !0 });
      return a?.data?.success == 1
        ? a.data.data
        : { daily_sales: [], summary_sales: {} };
    },
    enabled: !!e && t >= 1,
  });
  return r ? null : i;
}
function Et(e) {
  let { nPartnerID: t, nAppID: n } = e;
  return ee.is_support ? (0, W.jsx)(Dt, { nPartnerID: t, nAppID: n }) : null;
}
function Dt(e) {
  let { nPartnerID: t, nAppID: n } = e,
    [r, i] = (0, U.useState)(90),
    a = Tt(t, r, n);
  return !a || a.daily_sales?.length == 0
    ? null
    : (0, W.jsxs)(`div`, {
        className: x(Je, `valveOutline padded`),
        children: [
          (0, W.jsx)(`p`, { className: `valveh2`, children: `Valve Only:` }),
          (0, W.jsx)(kt, { nDaysInThePast: r, fnUpdateDaysInPast: i }),
          (0, W.jsx)(Mt, { stats: a }),
          (0, W.jsx)(Nt, { stats: a }),
        ],
      });
}
var Ot = [
  { label: P(`#PartnerStats_DayWeek`), data: 7 },
  { label: P(`#PartnerStats_DayMonth`), data: 30 },
  { label: P(`#PartnerStats_DayPeriod`), data: 90 },
];
function kt(e) {
  let { nDaysInThePast: t, fnUpdateDaysInPast: n } = e;
  return (0, W.jsxs)(`div`, {
    className: Ye,
    children: [
      (0, W.jsxs)(`div`, {
        className: ze,
        children: [
          (0, W.jsx)(`div`, {
            className: Be,
            children: P(`#PartnerStats_DayLabel`),
          }),
          (0, W.jsx)(de, {
            layout: `inline`,
            label: null,
            rgOptions: Ot,
            selectedOption: t,
            onChange: (e) => n(e.data),
          }),
        ],
      }),
      (0, W.jsx)(`div`, {
        className: Fe,
        children: (0, W.jsx)(`a`, {
          href: `#`,
          children: P(`#PartnerStats_ViewDetail`),
        }),
      }),
    ],
  });
}
var At = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});
function jt(...e) {
  let t = 0;
  return (
    e.forEach((e) => {
      t += Number.parseInt(e || `0`) / 1e4;
    }),
    At.format(t)
  );
}
function Mt(e) {
  let { stats: t } = e;
  return (0, W.jsxs)(`div`, {
    className: qe,
    children: [
      (0, W.jsxs)(`div`, {
        className: Ue,
        children: [
          (0, W.jsx)(`div`, {
            className: Ge,
            children: P(`#PartnerStats_Header_Revenue`),
          }),
          (0, W.jsx)(`div`, {
            className: Ke,
            children: jt(t.summary_sales.total_gross_sales_usdx100),
          }),
        ],
      }),
      (0, W.jsxs)(`div`, {
        className: Ue,
        children: [
          (0, W.jsx)(`div`, {
            className: Ge,
            children: P(`#PartnerStats_Header_Units`),
          }),
          (0, W.jsx)(`div`, {
            className: Ke,
            children: we(
              Number.parseInt(t.summary_sales.steam_gross_units_sold || `0`),
            ),
          }),
        ],
      }),
    ],
  });
}
function Nt(e) {
  let { stats: t } = e,
    n = `total_gross_sales_usdx100`,
    [r, i, a] = (0, U.useMemo)(() => {
      if (!t || t.daily_sales?.length == 0) return [0, 0, []];
      let e = Ft(t.daily_sales, n),
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
    : (0, W.jsx)(`div`, {
        className: Le,
        children: (0, W.jsx)(`div`, {
          className: We,
          children: (0, W.jsx)(re, {
            children: (0, W.jsx)(It, { Data: a, nPeak: r }),
          }),
        }),
      });
}
function Pt(e, t) {
  return e[t];
}
function Ft(e, t) {
  let n = new Map();
  return (
    e.forEach((e) => {
      let r = e.rtime_date,
        i = Number.parseInt(Pt(e.daily_summary_sales, t));
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
var It = U.memo((e) => {
  let { Data: t, nPeak: n } = e,
    r = (0, U.useCallback)(
      (e, n) =>
        t.length > 20
          ? t[n]?.partner_stats_value && n % 7 == 0
            ? new Date(t[n].rtime * 1e3).toLocaleDateString(
                pe.GetPreferredLocales(),
                { month: `short`, day: `numeric` },
              )
            : ``
          : t[n]?.partner_stats_value
            ? new Date(t[n].rtime * 1e3).toLocaleDateString(
                pe.GetPreferredLocales(),
                { month: `short`, day: `numeric` },
              )
            : ``,
      [t],
    );
  return (0, W.jsx)(ke, {
    width: `100%`,
    height: `100%`,
    children: (0, W.jsxs)(Ve, {
      accessibilityLayer: !1,
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 10,
      children: [
        (0, W.jsx)(`defs`, {
          children: (0, W.jsxs)(`linearGradient`, {
            id: `bar_linear`,
            x1: `0`,
            x2: `0`,
            y1: `0`,
            y2: `1`,
            children: [
              (0, W.jsx)(`stop`, { stopColor: `#1A9FFF` }),
              (0, W.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#1A9FFF`,
                stopOpacity: `1`,
              }),
            ],
          }),
        }),
        (0, W.jsx)(je, { vertical: !1, stroke: `#a0aab6` }),
        (0, W.jsx)(Me, {
          tickFormatter: z,
          tick: { fill: `white` },
          axisLine: !1,
          orientation: `right`,
        }),
        (0, W.jsx)(Ae, { content: (0, W.jsx)(Rt, {}) }),
        (0, W.jsx)(Pe, {
          dataKey: `partner_stats_value`,
          fill: `url( #bar_linear )`,
        }),
        (0, W.jsx)(Ne, {
          interval: 0,
          tick: (0, W.jsx)(Lt, {}),
          tickFormatter: r,
        }),
      ],
    }),
  });
});
function Lt(e) {
  let { x: t, y: n, payload: r } = e,
    i = e.tickFormatter(r.value, r.index);
  return (0, W.jsx)(`g`, {
    transform: `translate(${t},${n})`,
    children: (0, W.jsx)(`text`, {
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
function Rt({ active: e, payload: t }) {
  if (e && t && t.length) {
    let e = t[0].payload,
      n = e.partner_stats_value,
      r = n;
    return (
      e.top_app_sales.forEach((e) => {
        r -=
          Number.parseInt(e.app_summary_sales.total_gross_sales_usdx100) / 1e4;
      }),
      (0, W.jsxs)(me, {
        className: Ze,
        children: [
          (0, W.jsx)(`div`, {
            children: P(`#PartnerStats_Tooltip_Date`, le(e.rtime)),
          }),
          (0, W.jsx)(`div`, {
            className: He,
            children: (0, W.jsxs)(`div`, {
              className: Xe,
              children: [
                e.top_app_sales.map((e) => {
                  let t =
                    (Number.parseInt(
                      e.app_summary_sales.total_gross_sales_usdx100,
                    ) /
                      1e4 /
                      n) *
                    100;
                  return (0, W.jsx)(
                    zt,
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
                  (0, W.jsxs)(`div`, {
                    className: `OMu8YgzmezU-`,
                    children: [
                      (0, W.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: P(`#PartnerStats_Tooltip_Remaining`),
                      }),
                      (0, W.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: z(r),
                      }),
                      (0, W.jsxs)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: [Math.round((r / n) * 100), `%`],
                      }),
                    ],
                  }),
                (0, W.jsxs)(`div`, {
                  className: x(Re, Ie),
                  children: [
                    (0, W.jsx)(`div`, {
                      className: V,
                      children: P(`#PartnerStats_Tooltip_Total`),
                    }),
                    (0, W.jsx)(`div`, { className: V, children: z(n) }),
                    (0, W.jsx)(`div`, { className: V }),
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
function zt(e) {
  let { appid: t, usdRevenue: n, nPercentage: r } = e,
    [i] = $e(t, {});
  return (0, W.jsxs)(`div`, {
    className: Re,
    children: [
      (0, W.jsx)(`div`, { className: V, children: i?.GetName() || t }),
      (0, W.jsx)(`div`, { className: V, children: z(n) }),
      (0, W.jsxs)(`div`, { className: V, children: [Math.round(r), `%`] }),
    ],
  });
}
function Bt(e) {
  let { nAppId: t, strAppType: n } = e,
    r = Ce();
  return (
    (n == `Game` || n == `Application` || n == `DLC` || n == `Music`) &&
    (0, W.jsx)(Et, { nPartnerID: r, nAppID: t })
  );
}
function Vt(e) {
  let { nAppId: t, nParentAppId: n, strAppType: r } = e;
  return (
    r == `Demo` &&
    (0, W.jsx)(st, {
      children: (0, W.jsx)(bt, { demoAppID: t, parentAppId: n }),
    })
  );
}
var Ht = `tPLTOu9ePPk-`,
  Ut = `-Q1V6OzMJYQ-`,
  Wt = `Yd5hCSNUAy4-`,
  Gt = `_4rW9U0LKR7k-`,
  Kt = `GnGbfQ9iTVU-`,
  qt = `_0aChvQftTzc-`,
  Jt = `MBmJikXJxtw-`,
  Yt = `_2vHaP5ZDZ6A-`,
  Xt = `nc8h1C7mz7w-`,
  Zt = `JVr5LOg2d6c-`,
  G = w(h(), 1),
  Qt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: o.readString, bw: p.writeString },
            value: { n: 2, br: o.readString, bw: p.writeString },
            color: { n: 3, br: o.readString, bw: p.writeString },
            label: { n: 4, br: o.readString, bw: p.writeString },
            name: { n: 5, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  $t = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: o.readString, bw: p.writeString },
            name: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  en = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            category: { n: 2, br: o.readString, bw: p.writeString },
            internal_name: { n: 3, br: o.readString, bw: p.writeString },
            localized_category_name: {
              n: 4,
              br: o.readString,
              bw: p.writeString,
            },
            localized_tag_name: { n: 5, br: o.readString, bw: p.writeString },
            color: { n: 6, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  tn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contained_items || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: nn, r: !0, q: !0 },
            search_tags: { n: 2, c: en, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  K = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(
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
            appid: { n: 1, br: o.readInt32, bw: p.writeInt32 },
            classid: { n: 2, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            currency: { n: 4, br: o.readBool, bw: p.writeBool },
            background_color: { n: 5, br: o.readString, bw: p.writeString },
            icon_url: { n: 6, br: o.readString, bw: p.writeString },
            icon_url_large: { n: 7, br: o.readString, bw: p.writeString },
            descriptions: { n: 8, c: Qt, r: !0, q: !0 },
            tradable: { n: 9, br: o.readBool, bw: p.writeBool },
            actions: { n: 10, c: $t, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: Qt, r: !0, q: !0 },
            owner_actions: { n: 12, c: $t, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: o.readString,
              bw: p.writeRepeatedString,
            },
            name: { n: 14, br: o.readString, bw: p.writeString },
            name_color: { n: 15, br: o.readString, bw: p.writeString },
            type: { n: 16, br: o.readString, bw: p.writeString },
            market_name: { n: 17, br: o.readString, bw: p.writeString },
            market_hash_name: { n: 18, br: o.readString, bw: p.writeString },
            market_fee: { n: 19, br: o.readString, bw: p.writeString },
            market_fee_app: { n: 28, br: o.readInt32, bw: p.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: $t, r: !0, q: !0 },
            commodity: { n: 22, br: o.readBool, bw: p.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: o.readInt32,
              bw: p.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: o.readInt32,
              bw: p.writeInt32,
            },
            marketable: { n: 25, br: o.readBool, bw: p.writeBool },
            tags: { n: 26, c: en, r: !0, q: !0 },
            item_expiration: { n: 27, br: o.readString, bw: p.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: o.readString,
              bw: p.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: o.readString,
              bw: p.writeString,
            },
            sealed: { n: 32, br: o.readBool, bw: p.writeBool },
            container_properties: { n: 33, c: tn },
            market_bucket_group_name: {
              n: 34,
              br: o.readString,
              bw: p.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: o.readString,
              bw: p.writeString,
            },
            sealed_type: { n: 37, br: o.readUint32, bw: p.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: o.readString,
              bw: p.writeString,
            },
            market_bucket_id: { n: 39, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  rn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.propertyid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            int_value: { n: 2, br: o.readInt64String, bw: p.writeInt64String },
            float_value: { n: 3, br: o.readFloat, bw: p.writeFloat },
            string_value: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  an = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            standalone_properties: { n: 3, c: rn, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: rn, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  on = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: o.readUint64String, bw: p.writeUint64String },
            asset_properties: { n: 4, c: rn, r: !0, q: !0 },
            asset_accessories: { n: 5, c: an, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            name: { n: 2, br: o.readString, bw: p.writeString },
            type: { n: 3, br: o.readEnum, bw: p.writeEnum },
            float_min: { n: 4, br: o.readFloat, bw: p.writeFloat },
            float_max: { n: 5, br: o.readFloat, bw: p.writeFloat },
            int_min: { n: 6, br: o.readInt64String, bw: p.writeInt64String },
            int_max: { n: 7, br: o.readInt64String, bw: p.writeInt64String },
            localized_label: { n: 8, br: o.readString, bw: p.writeString },
            hide_from_description: { n: 9, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  cn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  ln = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_schemas || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  q = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: o.readUint64String, bw: p.writeUint64String },
            classid: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            currencyid: { n: 6, br: o.readUint32, bw: p.writeUint32 },
            amount: { n: 7, br: o.readInt64String, bw: p.writeInt64String },
            missing: { n: 8, br: o.readBool, bw: p.writeBool },
            est_usd: { n: 9, br: o.readInt64String, bw: p.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  un = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            get_descriptions: { n: 4, br: o.readBool, bw: p.writeBool },
            get_asset_properties: { n: 11, br: o.readBool, bw: p.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: o.readBool,
              bw: p.writeBool,
            },
            language: { n: 5, br: o.readString, bw: p.writeString },
            filters: { n: 6, c: dn },
            start_assetid: {
              n: 8,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            count: { n: 9, br: o.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  dn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetids || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: o.readUint64String,
              pbr: o.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: o.readBool, bw: p.writeBool },
            marketable_only: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: q, r: !0, q: !0 },
            descriptions: { n: 2, c: K, r: !0, q: !0 },
            missing_assets: { n: 3, c: q, r: !0, q: !0 },
            asset_properties: { n: 7, c: on, r: !0, q: !0 },
            more_items: { n: 4, br: o.readBool, bw: p.writeBool },
            last_assetid: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: o.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new_token || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offer_access_token || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.return_url || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  gn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  _n = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: o.readString, bw: p.writeString },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            classes: { n: 3, c: nn, r: !0, q: !0 },
            high_pri: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  vn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptions || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
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
      v(un, t, n),
      fn,
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
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, v(pn, t, n), mn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      v(hn, t, n),
      gn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, v(_n, t, n), vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, v(cn, t, n), ln, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = a;
})((yn ||= {}));
var bn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Generic_Response`;
    }
  },
  xn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            force_context_list_refresh: {
              n: 2,
              br: o.readBool,
              bw: p.writeBool,
            },
            add_app_if_doesnt_exist: { n: 3, br: o.readBool, bw: p.writeBool },
            num_new_items: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            num_removed_items: { n: 5, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Request`;
    }
  },
  Sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_receive || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_receive: { n: 1, br: o.readBool, bw: p.writeBool },
            can_send: { n: 2, br: o.readBool, bw: p.writeBool },
            exceeded_max_asset_count: { n: 3, br: o.readBool, bw: p.writeBool },
            app_missing: { n: 4, br: o.readBool, bw: p.writeBool },
            disabled_in_region: { n: 5, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Response`;
    }
  },
  Cn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            show_private: { n: 2, br: o.readBool, bw: p.writeBool },
            cached_asset_count_only: { n: 3, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconSummary_Request`;
    }
  },
  wn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            name: { n: 2, br: o.readString, bw: p.writeString },
            asset_count: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSummary`;
    }
  },
  Tn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: wn, r: !0, q: !0 },
            num_trades: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            time_last_trade: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            steamid_last_trade_partner: {
              n: 4,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_market_listings: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            num_market_transactions: {
              n: 6,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            time_last_market_sale: {
              n: 7,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            steamid_last_market_sale: {
              n: 8,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_last_market_purchase: {
              n: 9,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            steamid_last_market_purchase: {
              n: 10,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_trades_in_escrow: {
              n: 11,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            time_all_escrow_end: { n: 12, br: o.readUint32, bw: p.writeUint32 },
            cached_data_needs_updating: {
              n: 13,
              br: o.readBool,
              bw: p.writeBool,
            },
            num_trade_partners: { n: 14, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconSummary_Response`;
    }
  },
  En = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Request`;
    }
  },
  Dn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_trades: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            time_first_trade: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            time_last_trade: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TopTradePartner`;
    }
  },
  On = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partners || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Response`;
    }
  },
  kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_banned_until: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            time_probation_until: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SetTradeBanTime_Request`;
    }
  },
  An = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_force_trusted_until: {
              n: 2,
              br: o.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SetForceTradeTrustedTime_Request`;
    }
  },
  jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2, 3], null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            items_to_give: { n: 2, c: q, r: !0, q: !0 },
            items_to_receive: { n: 3, c: q, r: !0, q: !0 },
            message: { n: 4, br: o.readString, bw: p.writeString },
            tradeofferid_countered: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            webcookie: { n: 6, br: o.readString, bw: p.writeString },
            trading_topic: { n: 7, c: Mn },
            trade_offer_access_token: {
              n: 8,
              br: o.readString,
              bw: p.writeString,
            },
            from_realtime_trade: { n: 9, br: o.readBool, bw: p.writeBool },
            ip_sender: { n: 10, br: o.readString, bw: p.writeString },
            machine_authid_sender: {
              n: 11,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            ip_target: { n: 12, br: o.readString, bw: p.writeString },
            machine_authid_target: {
              n: 13,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request`;
    }
  },
  Mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_owner || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            forumtype: { n: 2, br: o.readString, bw: p.writeString },
            gidfeature: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            gidtopic: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request_ForumTopicIdentifier`;
    }
  },
  Nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            trade_response: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Response`;
    }
  },
  Pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            item_to_give: { n: 3, c: q },
            webcookie: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SendGift_Request`;
    }
  },
  Fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            trade_response: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SendGift_Response`;
    }
  },
  In = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.get_sent_offers || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            get_sent_offers: { n: 1, br: o.readBool, bw: p.writeBool },
            get_received_offers: { n: 2, br: o.readBool, bw: p.writeBool },
            get_descriptions: { n: 3, br: o.readBool, bw: p.writeBool },
            language: { n: 4, br: o.readString, bw: p.writeString },
            active_only: { n: 6, br: o.readBool, bw: p.writeBool },
            historical_only: { n: 7, br: o.readBool, bw: p.writeBool },
            time_historical_cutoff: {
              n: 8,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            cursor: { n: 9, d: 0, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Request`;
    }
  },
  J = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [6, 7], null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            accountid_other: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            message: { n: 3, br: o.readString, bw: p.writeString },
            expiration_time: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            trade_offer_state: { n: 5, br: o.readEnum, bw: p.writeEnum },
            items_to_give: { n: 6, c: q, r: !0, q: !0 },
            items_to_receive: { n: 7, c: q, r: !0, q: !0 },
            is_our_offer: { n: 8, br: o.readBool, bw: p.writeBool },
            time_created: { n: 9, br: o.readUint32, bw: p.writeUint32 },
            time_updated: { n: 10, br: o.readUint32, bw: p.writeUint32 },
            tradeid: {
              n: 11,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            from_real_time_trade: { n: 12, br: o.readBool, bw: p.writeBool },
            escrow_end_date: { n: 13, br: o.readUint32, bw: p.writeUint32 },
            confirmation_method: { n: 14, br: o.readEnum, bw: p.writeEnum },
            partner_confirmation_method: {
              n: 15,
              br: o.readEnum,
              bw: p.writeEnum,
            },
            eresult: { n: 16, d: 1, br: o.readUint32, bw: p.writeUint32 },
            delay_settlement: { n: 17, br: o.readBool, bw: p.writeBool },
            settlement_date: { n: 18, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeOffer`;
    }
  },
  Ln = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offers_sent || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
            descriptions: { n: 3, c: K, r: !0, q: !0 },
            next_cursor: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Response`;
    }
  },
  Rn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeid: { n: 2, br: o.readUint64String, bw: p.writeUint64String },
            trade_status: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Request`;
    }
  },
  zn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Response`;
    }
  },
  Bn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            trade_offer_access_token: {
              n: 2,
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Request`;
    }
  },
  Vn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.my_escrow || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response`;
    }
  },
  Hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.escrow_end_duration_seconds || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint32,
              bw: p.writeUint32,
            },
            escrow_end_date: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            escrow_end_date_rfc3339: {
              n: 3,
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response_Scenario`;
    }
  },
  Un = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 2, br: o.readString, bw: p.writeString },
            get_descriptions: { n: 3, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Request`;
    }
  },
  Wn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForAnyUser_Request`;
    }
  },
  Gn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.offer || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: J },
            descriptions: { n: 2, c: K, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Response`;
    }
  },
  Kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 3, br: o.readString, bw: p.writeString },
            confirmation_code: {
              n: 4,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Request`;
    }
  },
  qn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.offer || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: J },
            descriptions: { n: 2, c: K, r: !0, q: !0 },
            asset_properties: { n: 3, c: on, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Response`;
    }
  },
  Jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            webcookie: { n: 2, br: o.readString, bw: p.writeString },
            ip: { n: 3, br: o.readString, bw: p.writeString },
            machine_authid: {
              n: 4,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Request`;
    }
  },
  Yn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            trade_response: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Response`;
    }
  },
  Xn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            confirmation_code: {
              n: 3,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            mid: { n: 4, br: o.readString, bw: p.writeString },
            cancel_offer: { n: 5, br: o.readBool, bw: p.writeBool },
            already_authed: { n: 6, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Request`;
    }
  },
  Zn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            trade_response: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Response`;
    }
  },
  Qn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Request`;
    }
  },
  $n = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Response`;
    }
  },
  er = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Request`;
    }
  },
  tr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Response`;
    }
  },
  nr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: o.readBool, bw: p.writeBool },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            escrow_only: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Request`;
    }
  },
  rr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_cancelled || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_cancelled: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            num_escrow_cancelled: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            num_failures: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            num_escrow_failures: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Response`;
    }
  },
  ir = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: o.readBool, bw: p.writeBool },
            appid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            escrow_only: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Notification`;
    }
  },
  ar = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_partya || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid_partyb: {
              n: 2,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            involved_apps: {
              n: 3,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_IsSafeToCommitTrade_Request`;
    }
  },
  or = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time_last_visit || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_last_visit: { n: 1, br: o.readFixed32, bw: p.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Request`;
    }
  },
  sr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pending_received_count || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint32,
              bw: p.writeUint32,
            },
            new_received_count: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            updated_received_count: {
              n: 3,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            historical_received_count: {
              n: 4,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            pending_sent_count: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            newly_accepted_sent_count: {
              n: 6,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            updated_sent_count: { n: 7, br: o.readUint32, bw: p.writeUint32 },
            historical_sent_count: {
              n: 8,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            escrow_received_count: {
              n: 9,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            escrow_sent_count: { n: 10, br: o.readUint32, bw: p.writeUint32 },
            provisional: { n: 11, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Response`;
    }
  },
  cr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.max_trades || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            max_trades: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            start_after_time: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            start_after_tradeid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            navigating_back: { n: 4, br: o.readBool, bw: p.writeBool },
            get_descriptions: { n: 5, br: o.readBool, bw: p.writeBool },
            language: { n: 6, br: o.readString, bw: p.writeString },
            include_failed: { n: 7, br: o.readBool, bw: p.writeBool },
            include_total: { n: 8, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Request`;
    }
  },
  lr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_trades || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_trades: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            more: { n: 2, br: o.readBool, bw: p.writeBool },
            trades: { n: 3, c: ur, r: !0, q: !0 },
            descriptions: { n: 4, c: K, r: !0, q: !0 },
            devices: { n: 5, c: mr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response`;
    }
  },
  ur = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [6, 7, 8, 9], null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid_other: {
              n: 2,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_init: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            time_escrow_end: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            status: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            assets_received: { n: 6, c: dr, r: !0, q: !0 },
            assets_given: { n: 7, c: dr, r: !0, q: !0 },
            currency_received: { n: 8, c: fr, r: !0, q: !0 },
            currency_given: { n: 9, c: fr, r: !0, q: !0 },
            time_settlement: { n: 10, br: o.readUint32, bw: p.writeUint32 },
            time_mod: { n: 11, br: o.readUint32, bw: p.writeUint32 },
            rollback_trade: {
              n: 12,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            trade_auth: { n: 13, c: pr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade`;
    }
  },
  dr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: o.readUint64String, bw: p.writeUint64String },
            amount: { n: 4, br: o.readInt64String, bw: p.writeInt64String },
            classid: { n: 5, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 6,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            new_assetid: {
              n: 7,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            new_contextid: {
              n: 8,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_assetid: {
              n: 9,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_contextid: {
              n: 10,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedAsset`;
    }
  },
  fr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            currencyid: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            amount: { n: 4, br: o.readInt64String, bw: p.writeInt64String },
            fee_amount: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            classid: { n: 6, br: o.readUint64String, bw: p.writeUint64String },
            new_currencyid: { n: 7, br: o.readUint32, bw: p.writeUint32 },
            new_contextid: {
              n: 8,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_currencyid: {
              n: 9,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            rollback_new_contextid: {
              n: 10,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedCurrency`;
    }
  },
  pr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_sender || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_sender: { n: 1, br: o.readBool, bw: p.writeBool },
            confirm_type: { n: 2, br: o.readInt32, bw: p.writeInt32 },
            time_confirmed: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            country: { n: 4, br: o.readString, bw: p.writeString },
            state: { n: 5, br: o.readString, bw: p.writeString },
            city: { n: 6, br: o.readString, bw: p.writeString },
            token_id: {
              n: 7,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_Authorization`;
    }
  },
  mr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            first_authed: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            current_device: { n: 3, br: o.readBool, bw: p.writeBool },
            platform_type: { n: 4, br: o.readInt32, bw: p.writeInt32 },
            guard_type: { n: 5, br: o.readInt32, bw: p.writeInt32 },
            authentication_type: { n: 6, br: o.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_DeviceDetails`;
    }
  },
  hr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetProvisionalTradeHistory_Request`;
    }
  },
  gr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            get_descriptions: { n: 2, br: o.readBool, bw: p.writeBool },
            language: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeStatus_Request`;
    }
  },
  _r = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Request`;
    }
  },
  vr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_response || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            allowed_to_trade: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            probation_default_time: {
              n: 3,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            probation_remaining: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Response`;
    }
  },
  yr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Request`;
    }
  },
  br = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_response || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            allowed_to_trade: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            steamguard_required_days: {
              n: 3,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            new_device_cooldown_days: {
              n: 4,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            default_password_reset_probation_days: {
              n: 5,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            password_reset_probation_days: {
              n: 6,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            default_email_change_probation_days: {
              n: 7,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            email_change_probation_days: {
              n: 8,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            time_allowed_to_trade: {
              n: 9,
              br: o.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Response`;
    }
  },
  xr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetUserTradeEligibility_Request`;
    }
  },
  Sr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Request`;
    }
  },
  Cr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.abuse_score || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            abuse_score: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            trade_abuse_score: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            keyword_abuse_score: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Response`;
    }
  },
  wr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            trade_offer_access_token: {
              n: 2,
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Request`;
    }
  },
  Tr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Response`;
    }
  },
  Er = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Request`;
    }
  },
  Dr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: o.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Response`;
    }
  },
  Or = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Request`;
    }
  },
  kr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Response`;
    }
  },
  Ar = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Request`;
    }
  },
  jr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Response`;
    }
  },
  Mr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushContextCache_Request`;
    }
  },
  Nr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushContextCache_Response`;
    }
  },
  Pr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Request`;
    }
  },
  Fr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            asset_class_version: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            context_version: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Response`;
    }
  },
  Ir = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Request`;
    }
  },
  Lr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Response`;
    }
  },
  Rr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            currency: { n: 2, br: o.readString, bw: p.writeString },
            language: { n: 3, br: o.readString, bw: p.writeString },
            asset_class_properties: { n: 4, c: zr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request`;
    }
  },
  zr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: o.readString, bw: p.writeString },
            value: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request_AssetClassProperty`;
    }
  },
  Br = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { assets: { n: 1, c: Hr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response`;
    }
  },
  Vr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.currency || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            currency: { n: 1, br: o.readString, bw: p.writeString },
            amount: { n: 2, br: o.readInt64String, bw: p.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Price`;
    }
  },
  Hr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2, 3, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: o.readString, bw: p.writeString },
            prices: { n: 2, c: Vr, r: !0, q: !0 },
            original_prices: { n: 3, c: Vr, r: !0, q: !0 },
            classid: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: o.readString,
              bw: p.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Asset`;
    }
  },
  Ur = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: o.readString, bw: p.writeString },
            country_code: { n: 3, br: o.readString, bw: p.writeString },
            show_featured: { n: 4, br: o.readBool, bw: p.writeBool },
            count: { n: 5, d: 5, br: o.readUint32, bw: p.writeUint32 },
            realm: { n: 6, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Request`;
    }
  },
  Wr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.items || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            items: { n: 1, c: Gr, r: !0, q: !0 },
            total_count: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response`;
    }
  },
  Gr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.itemdefid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            name: { n: 2, br: o.readString, bw: p.writeString },
            formatted_price: { n: 3, br: o.readString, bw: p.writeString },
            icon_url: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response_Item`;
    }
  },
  Kr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            data: { n: 2, br: o.readString, bw: p.writeString },
            hmac: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Request`;
    }
  },
  qr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ok || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ok: { n: 1, br: o.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Response`;
    }
  },
  Jr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: o.readString, bw: p.writeString },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            cart: { n: 3, br: o.readString, bw: p.writeString },
            currency: { n: 4, br: o.readString, bw: p.writeString },
            total: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            sandbox: { n: 6, br: o.readBool, bw: p.writeBool },
            referrer: { n: 7, br: o.readString, bw: p.writeString },
            language: { n: 8, br: o.readString, bw: p.writeString },
            itemshop_auth: { n: 9, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Request`;
    }
  },
  Yr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.orderid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            orderid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            url: { n: 2, br: o.readString, bw: p.writeString },
            displaytext: { n: 3, br: o.readString, bw: p.writeString },
            transid: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Response`;
    }
  },
  Xr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: o.readString, bw: p.writeString },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            sandbox: { n: 3, br: o.readBool, bw: p.writeBool },
            orderid: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Request`;
    }
  },
  Zr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.state || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { state: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Response`;
    }
  },
  Qr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: o.readString, bw: p.writeString },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            sandbox: { n: 3, br: o.readBool, bw: p.writeBool },
            orderid: { n: 4, br: o.readUint64String, bw: p.writeUint64String },
            language: { n: 5, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Request`;
    }
  },
  $r = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Response`;
    }
  },
  ei = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: o.readString, bw: p.writeString },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            url: { n: 3, br: o.readString, bw: p.writeString },
            itemshop_auth: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Request`;
    }
  },
  ti = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Response`;
    }
  },
  ni = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            gameitemid: {
              n: 2,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Request`;
    }
  },
  ri = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.supports_refunds || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            supports_refunds: { n: 1, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Response`;
    }
  },
  ii = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            transactionid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Request`;
    }
  },
  ai = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: o.readBool, bw: p.writeBool },
            assets: { n: 2, c: oi, r: !0, q: !0 },
            descriptions: { n: 3, c: K, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response`;
    }
  },
  oi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: o.readBool, bw: p.writeBool },
            in_inventory: { n: 2, br: o.readBool, bw: p.writeBool },
            bundle: { n: 3, br: o.readBool, bw: p.writeBool },
            gameid: { n: 4, br: o.readInt32, bw: p.writeInt32 },
            asset: { n: 5, c: q },
            current_state: { n: 6, br: o.readString, bw: p.writeString },
            item_name: { n: 7, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response_Asset`;
    }
  },
  si = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            transactionid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            force: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RefundPurchase_Request`;
    }
  },
  ci = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RefundPurchase_Response`;
    }
  },
  li = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            language: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Request`;
    }
  },
  ui = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: o.readBool, bw: p.writeBool },
            allow_ticket: { n: 2, br: o.readBool, bw: p.writeBool },
            assets: { n: 3, c: di, r: !0, q: !0 },
            descriptions: { n: 4, c: K, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response`;
    }
  },
  di = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refundid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refundid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            parent_refundid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            allow_refund: { n: 3, br: o.readBool, bw: p.writeBool },
            refund_removes_item_from_inventory: {
              n: 4,
              br: o.readBool,
              bw: p.writeBool,
            },
            refund_returns_item_to_inventory: {
              n: 5,
              br: o.readBool,
              bw: p.writeBool,
            },
            refund_amount: {
              n: 6,
              br: o.readInt64String,
              bw: p.writeInt64String,
            },
            refund_ecurrencycode: { n: 7, br: o.readInt32, bw: p.writeInt32 },
            related_microtxn_id: {
              n: 8,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            related_market_purchase_id: {
              n: 9,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            related_trade_id: {
              n: 10,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            asset: { n: 11, c: q },
            current_state: { n: 12, br: o.readString, bw: p.writeString },
            item_name: { n: 13, br: o.readString, bw: p.writeString },
            allow_ticket: { n: 14, br: o.readBool, bw: p.writeBool },
            refund_complete: { n: 15, br: o.readBool, bw: p.writeBool },
            refund_desired: { n: 16, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response_Asset`;
    }
  },
  fi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            refundid: { n: 3, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Request`;
    }
  },
  pi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Response`;
    }
  },
  mi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Request`;
    }
  },
  hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.properties || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { properties: { n: 1, c: gi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response`;
    }
  },
  gi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property: { n: 1, br: o.readString, bw: p.writeString },
            value: { n: 2, br: o.readString, bw: p.writeString },
            instance: { n: 3, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response_Property`;
    }
  },
  _i = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            force: { n: 2, br: o.readBool, bw: p.writeBool },
            in_recovery: { n: 3, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertTrade_Request`;
    }
  },
  vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertTrade_Response`;
    }
  },
  yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            force: { n: 2, br: o.readBool, bw: p.writeBool },
            account_recovery: { n: 3, br: o.readBool, bw: p.writeBool },
            deauth_all_devices: {
              n: 4,
              d: !1,
              br: o.readBool,
              bw: p.writeBool,
            },
            apply_cooldown: { n: 5, d: !1, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Request`;
    }
  },
  bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trades || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trades: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            errors: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            trade_offers: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            escrowed_trades: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Response`;
    }
  },
  xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ack_type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ack_type: { n: 1, br: o.readInt32, bw: p.writeInt32 },
            acknowledge: { n: 2, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Request`;
    }
  },
  Si = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Response`;
    }
  },
  Ci = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Request`;
    }
  },
  wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.needed_types || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
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
              br: o.readInt32,
              pbr: o.readPackedInt32,
              bw: p.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Response`;
    }
  },
  Ti = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            duration_seconds: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            cooldown_type: { n: 3, br: o.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Request`;
    }
  },
  Ei = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Response`;
    }
  },
  Di;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Econ.GetTradePermissionsForApp#1`, v(xn, t, n), Sn, {
      ePrivilege: 1,
    });
  }
  e.GetTradePermissionsForApp = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetEconSummary#1`, v(Cn, t, n), Tn, {
      ePrivilege: 0,
    });
  }
  e.GetEconSummary = n;
  function r(e, t, n) {
    return e.SendMsg(`Econ.GetTopTradePartners#1`, v(En, t, n), On, {
      ePrivilege: 0,
    });
  }
  e.GetTopTradePartners = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.SetTradeBanTime#1`, v(kn, t, n), bn, {
      ePrivilege: 2,
    });
  }
  e.SetTradeBanTime = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.SetForceTradeTrustedTime#1`, v(An, t, n), bn, {
      ePrivilege: 0,
    });
  }
  e.SetForceTradeTrustedTime = a;
  function o(e, t, n) {
    return e.SendMsg(`Econ.CreateTradeOffer#1`, v(jn, t, n), Nn, {
      ePrivilege: 1,
    });
  }
  e.CreateTradeOffer = o;
  function s(e, t, n) {
    return e.SendMsg(`Econ.SendGift#1`, v(Pn, t, n), Fn, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.SendGift = s;
  function c(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffers#1`, v(In, t, n), Ln, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffers = c;
  function l(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffer#1`, v(Un, t, n), Gn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffer = l;
  function u(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForAnyUser#1`, v(Wn, t, n), Gn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForAnyUser = u;
  function d(e, t, n) {
    return e.SendMsg(`Econ.TradeLeftEscrow#1`, v(Rn, t, n), zn, {
      ePrivilege: 0,
    });
  }
  e.TradeLeftEscrow = d;
  function f(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHoldDurations#1`, v(Bn, t, n), Vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHoldDurations = f;
  function p(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForConfirmation#1`, v(Kn, t, n), qn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForConfirmation = p;
  function m(e, t, n) {
    return e.SendMsg(`Econ.AcceptTradeOffer#1`, v(Jn, t, n), Yn, {
      ePrivilege: 1,
    });
  }
  e.AcceptTradeOffer = m;
  function h(e, t, n) {
    return e.SendMsg(`Econ.ConfirmTradeOffer#1`, v(Xn, t, n), Zn, {
      ePrivilege: 0,
    });
  }
  e.ConfirmTradeOffer = h;
  function g(e, t, n) {
    return e.SendMsg(`Econ.DeclineTradeOffer#1`, v(Qn, t, n), $n, {
      ePrivilege: 1,
    });
  }
  e.DeclineTradeOffer = g;
  function _(e, t, n) {
    return e.SendMsg(`Econ.CancelTradeOffer#1`, v(er, t, n), tr, {
      ePrivilege: 1,
    });
  }
  e.CancelTradeOffer = _;
  function y(e, t, n) {
    return e.SendMsg(`Econ.CancelAllTradeOffers#1`, v(nr, t, n), rr, {
      ePrivilege: 2,
    });
  }
  e.CancelAllTradeOffers = y;
  function b(e, t) {
    return e.SendNotification(`Econ.NotifyCancelAllTradeOffers#1`, v(ir, t), {
      ePrivilege: 2,
    });
  }
  e.NotifyCancelAllTradeOffers = b;
  function ee(e, t, n) {
    return e.SendMsg(`Econ.IsSafeToCommitTrade#1`, v(ar, t, n), bn, {
      ePrivilege: 0,
    });
  }
  e.IsSafeToCommitTrade = ee;
  function x(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffersSummary#1`, v(or, t, n), sr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffersSummary = x;
  function te(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHistory#1`, v(cr, t, n), lr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHistory = te;
  function S(e, t, n) {
    return e.SendMsg(`Econ.GetTradeStatus#1`, v(gr, t, n), lr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeStatus = S;
  function C(e, t, n) {
    return e.SendMsg(`Econ.GetProvisionalTradeHistory#1`, v(hr, t, n), lr, {
      ePrivilege: 1,
    });
  }
  e.GetProvisionalTradeHistory = C;
  function w(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      v(un, t, n),
      fn,
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
    return e.SendMsg(`Econ.CanUserTradeWithAnyone#1`, v(_r, t, n), vr, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithAnyone = T;
  function E(e, t, n) {
    return e.SendMsg(`Econ.CanUserTradeWithPartner#1`, v(yr, t, n), br, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithPartner = E;
  function D(e, t, n) {
    return e.SendMsg(`Econ.GetUserTradeEligibility#1`, v(xr, t, n), vr, {
      ePrivilege: 0,
    });
  }
  e.GetUserTradeEligibility = D;
  function ne(e, t, n) {
    return e.SendMsg(
      `Econ.CheckTradePartnerTrustworthiness#1`,
      v(Sr, t, n),
      Cr,
      { ePrivilege: 1 },
    );
  }
  e.CheckTradePartnerTrustworthiness = ne;
  function O(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, v(pn, t, n), mn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = O;
  function re(e, t, n) {
    return e.SendMsg(`Econ.CheckTradeOfferAccessToken#1`, v(wr, t, n), Tr, {
      ePrivilege: 0,
    });
  }
  e.CheckTradeOfferAccessToken = re;
  function k(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryCache#1`, v(Er, t, n), Dr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushInventoryCache = k;
  function ie(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryServiceDBOs#1`, v(Or, t, n), kr, {
      ePrivilege: 0,
    });
  }
  e.FlushInventoryServiceDBOs = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Econ.FlushAssetAppearanceCache#1`, v(Ar, t, n), jr, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushAssetAppearanceCache = ae;
  function oe(e, t, n) {
    return e.SendMsg(`Econ.FlushContextCache#1`, v(Mr, t, n), Nr, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushContextCache = oe;
  function se(e, t, n) {
    return e.SendMsg(`Econ.GetEconAppSettings#1`, v(Pr, t, n), Fr, {
      ePrivilege: 7,
    });
  }
  e.GetEconAppSettings = se;
  function A(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopPartnerToken#1`, v(Ir, t, n), Lr, {
      ePrivilege: 0,
    });
  }
  e.GetItemShopPartnerToken = A;
  function ce(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      v(hn, t, n),
      gn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = ce;
  function j(e, t, n) {
    return e.SendMsg(`Econ.CheckItemShopPartnerHMAC#1`, v(Kr, t, n), qr, {
      ePrivilege: 0,
    });
  }
  e.CheckItemShopPartnerHMAC = j;
  function le(e, t, n) {
    return e.SendMsg(`Econ.StartItemShopTxn#1`, v(Jr, t, n), Yr, {
      ePrivilege: 2,
    });
  }
  e.StartItemShopTxn = le;
  function ue(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopTxnState#1`, v(Xr, t, n), Zr, {
      ePrivilege: 2,
    });
  }
  e.GetItemShopTxnState = ue;
  function de(e, t, n) {
    return e.SendMsg(`Econ.FinishItemShopTxn#1`, v(Qr, t, n), $r, {
      ePrivilege: 2,
    });
  }
  e.FinishItemShopTxn = de;
  function fe(e, t, n) {
    return e.SendMsg(`Econ.BuildItemShopReturnURL#1`, v(ei, t, n), ti, {
      ePrivilege: 2,
    });
  }
  e.BuildItemShopReturnURL = fe;
  function M(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPrices#1`, v(Rr, t, n), Br, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetAssetPrices = M;
  function N(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopItems#1`, v(Ur, t, n), Wr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetItemShopItems = N;
  function pe(e, t, n) {
    return e.SendMsg(`Econ.AppSupportsRefund#1`, v(ni, t, n), ri, {
      ePrivilege: 0,
    });
  }
  e.AppSupportsRefund = pe;
  function me(e, t, n) {
    return e.SendMsg(`Econ.QueryRefundAllowed#1`, v(ii, t, n), ai, {
      ePrivilege: 0,
    });
  }
  e.QueryRefundAllowed = me;
  function he(e, t, n) {
    return e.SendMsg(`Econ.RefundPurchase#1`, v(si, t, n), ci, {
      ePrivilege: 0,
    });
  }
  e.RefundPurchase = he;
  function P(e, t, n) {
    return e.SendMsg(`Econ.GetEligibleOneOffRefunds#1`, v(li, t, n), ui, {
      ePrivilege: 0,
    });
  }
  e.GetEligibleOneOffRefunds = P;
  function ge(e, t, n) {
    return e.SendMsg(`Econ.ProcessOneOffRefund#1`, v(fi, t, n), pi, {
      ePrivilege: 0,
    });
  }
  e.ProcessOneOffRefund = ge;
  function _e(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, v(_n, t, n), vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = _e;
  function ve(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfoInternal#1`, v(_n, t, n), vn, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassInfoInternal = ve;
  function F(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassProperties#1`, v(mi, t, n), hi, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassProperties = F;
  function I(e, t, n) {
    return e.SendMsg(`Econ.RevertTrade#1`, v(_i, t, n), vi, { ePrivilege: 1 });
  }
  e.RevertTrade = I;
  function L(e, t, n) {
    return e.SendMsg(`Econ.RevertAllTrades#1`, v(yi, t, n), bi, {
      ePrivilege: 1,
    });
  }
  e.RevertAllTrades = L;
  function ye(e, t, n) {
    return e.SendMsg(`Econ.ApplyTradeCooldown#1`, v(Ti, t, n), Ei, {
      ePrivilege: 1,
    });
  }
  e.ApplyTradeCooldown = ye;
  function be(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, v(cn, t, n), ln, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = be;
  function R(e, t, n) {
    return e.SendMsg(`Econ.AcknowledgeTradeUI#1`, v(xi, t, n), Si, {
      ePrivilege: 1,
    });
  }
  e.AcknowledgeTradeUI = R;
  function xe(e, t, n) {
    return e.SendMsg(`Econ.NeedTradeUI#1`, v(Ci, t, n), wi, { ePrivilege: 1 });
  }
  e.NeedTradeUI = xe;
})((Di ||= {}));
function Oi(e) {
  let { rgAssetProperties: t, appid: n } = e,
    [r, i] = (0, U.useState)(``),
    [a, o] = (0, U.useState)(ki(t)),
    s = (e, t) => {
      let n = a.map((n, r) => (r === e ? t : n));
      o(n);
    },
    c = () => {
      let e = a.slice();
      (e.push({
        id: 0,
        name: ``,
        type: 0,
        min: null,
        max: null,
        hide_from_description: !1,
      }),
        o(e));
    },
    l = (e) => {
      let t = a.slice();
      (t.splice(e, 1), o(t));
    };
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsx)(`div`, {
        children: a.map((e, t) =>
          (0, W.jsx)(
            Ai,
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
      (0, W.jsx)(`div`, {
        className: Yt,
        children: (0, W.jsx)(M, { onClick: c, children: `Add Property` }),
      }),
      (0, W.jsx)(`div`, {
        className: Xt,
        children: (0, W.jsx)(M, {
          onClick: async () => {
            i(``);
            let e = new FormData();
            (e.append(`sessionid`, f()),
              e.append(`asset_properties`, JSON.stringify(a)));
            let t = await fetch(
              `${C.PARTNER_BASE_URL}apps/setassetpropertyschema/${n}`,
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
      (0, W.jsx)(`div`, { className: Zt, children: r }),
    ],
  });
}
function ki(e) {
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
function Ai(e) {
  let { schema: t, index: n, onUpdate: r, onRemove: i } = e;
  return (0, W.jsxs)(`div`, {
    className: Ht,
    children: [
      (0, W.jsx)(`div`, { children: `ID` }),
      (0, W.jsx)(k, {
        className: Ut,
        type: `number`,
        value: t.id === 0 ? `` : t.id,
        placeholder: `Property id`,
        onChange: (e) => {
          r({ ...t, id: e.target.valueAsNumber });
        },
      }),
      (0, W.jsx)(`div`, { children: `Name` }),
      (0, W.jsx)(k, {
        className: Wt,
        type: `text`,
        value: t.name,
        placeholder: `Property name`,
        onChange: (e) => {
          r({ ...t, name: e.target.value });
        },
      }),
      (0, W.jsx)(`div`, { children: `Type` }),
      (0, W.jsx)(ji, {
        propertyType: t.type,
        onUpdateType: (e) => {
          r({ ...t, type: e });
        },
      }),
      (0, W.jsx)(`div`, { children: `Min` }),
      (0, W.jsx)(k, {
        className: Kt,
        type: `number`,
        value: t.min ?? ``,
        placeholder: `Min value`,
        onChange: (e) => {
          r({ ...t, min: e.target.valueAsNumber });
        },
      }),
      (0, W.jsx)(`div`, { children: `Max` }),
      (0, W.jsx)(k, {
        className: Kt,
        type: `number`,
        value: t.max ?? ``,
        placeholder: `Max value`,
        onChange: (e) => {
          r({ ...t, max: e.target.valueAsNumber });
        },
      }),
      (0, W.jsx)(`div`, { children: `Hide` }),
      (0, W.jsx)(k, {
        className: qt,
        type: `checkbox`,
        checked: t.hide_from_description,
        onChange: (e) => {
          r({ ...t, hide_from_description: e.target.checked });
        },
      }),
      (0, W.jsx)(M, { className: Jt, onClick: () => i(n), children: `Remove` }),
    ],
  });
}
function ji(e) {
  let { propertyType: t, onUpdateType: n } = e;
  return (0, W.jsx)(`div`, {
    className: Gt,
    children: (0, W.jsx)(ue, {
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
var Mi = `_9aFW9QMcz4s-`,
  Ni = `glqnESzfZ-w-`,
  Pi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [13, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: o.readString, bw: p.writeString },
            source_id: { n: 2, br: o.readInt32, bw: p.writeInt32 },
            cell_id: { n: 3, br: o.readInt32, bw: p.writeInt32 },
            load: { n: 4, br: o.readInt32, bw: p.writeInt32 },
            weighted_load: { n: 5, br: o.readFloat, bw: p.writeFloat },
            num_entries_in_client_list: {
              n: 6,
              br: o.readInt32,
              bw: p.writeInt32,
            },
            steam_china_only: { n: 7, br: o.readBool, bw: p.writeBool },
            host: { n: 8, br: o.readString, bw: p.writeString },
            vhost: { n: 9, br: o.readString, bw: p.writeString },
            use_as_proxy: { n: 10, br: o.readBool, bw: p.writeBool },
            proxy_request_path_template: {
              n: 11,
              br: o.readString,
              bw: p.writeString,
            },
            https_support: { n: 12, br: o.readString, bw: p.writeString },
            allowed_app_ids: {
              n: 13,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            priority_class: { n: 15, br: o.readUint32, bw: p.writeUint32 },
            bypass_proxies_of_type: {
              n: 16,
              r: !0,
              q: !0,
              br: o.readString,
              bw: p.writeRepeatedString,
            },
            group: { n: 17, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_ServerInfo`;
    }
  },
  Fi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: o.readString, bw: p.writeString },
            source_id: { n: 2, br: o.readInt32, bw: p.writeInt32 },
            hostname: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_ConnectedSteamPipeServerInfo`;
    }
  },
  Ii = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cell_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cell_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            max_servers: { n: 2, d: 20, br: o.readUint32, bw: p.writeUint32 },
            ip_override: { n: 3, d: ``, br: o.readString, bw: p.writeString },
            launcher_type: { n: 4, d: 0, br: o.readInt32, bw: p.writeInt32 },
            ipv6_public: { n: 5, d: ``, br: o.readString, bw: p.writeString },
            current_connections: { n: 6, c: Fi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Request`;
    }
  },
  Li = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.servers || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            servers: { n: 1, c: Pi, r: !0, q: !0 },
            no_change: { n: 2, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Response`;
    }
  },
  Ri = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depotid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            source_manifestid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            target_manifestid: {
              n: 4,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Request`;
    }
  },
  zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_available || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_available: { n: 1, br: o.readBool, bw: p.writeBool },
            patch_size: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            patched_chunks_size: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Response`;
    }
  },
  Bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cached_signature || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cached_signature: { n: 1, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Request`;
    }
  },
  Vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hosts_kv || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hosts_kv: { n: 1, br: o.readString, bw: p.writeString },
            valid_until_time: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            ip_country: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Response`;
    }
  },
  Hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            app_branch: { n: 4, br: o.readString, bw: p.writeString },
            branch_password_hash: { n: 5, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Request`;
    }
  },
  Ui = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_request_code || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Response`;
    }
  },
  Wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            host_name: { n: 2, br: o.readString, bw: p.writeString },
            app_id: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Request`;
    }
  },
  Gi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: o.readString, bw: p.writeString },
            expiration_time: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Response`;
    }
  },
  Ki = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: { n: 2, br: o.readUint64String, bw: p.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            app_id: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            current_build_id: { n: 5, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Request`;
    }
  },
  qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.server_port || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_port: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            installed_depots: {
              n: 2,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            access_token: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Response`;
    }
  },
  Ji = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: { n: 2, br: o.readUint64String, bw: p.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Request`;
    }
  },
  Yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
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
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            ip_public: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Response`;
    }
  },
  Xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detection_type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { detection_type: { n: 1, br: o.readEnum, bw: p.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetAllDetectedAppContent_Request`;
    }
  },
  Zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            detected_content: { n: 3, br: o.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `DetectedAppContent`;
    }
  },
  Qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detected_app_content || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { detected_app_content: { n: 1, c: Zi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetAllDetectedAppContent_Response`;
    }
  },
  $i;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetServersForSteamPipe#1`,
      v(Ii, t, n),
      Li,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      v(Ri, t, n),
      zi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      v(Bi, t, n),
      Vi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      v(Hi, t, n),
      Ui,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      v(Wi, t, n),
      Gi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      v(Ki, t, n),
      qi,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      v(Ji, t, n),
      Yi,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = s;
})(($i ||= {}));
var ea;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      v(Xi, t, n),
      Qi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
})((ea ||= {}));
var ta = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ReloadOriginStorageInfo_Notification`;
    }
  },
  na = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: o.readBytes, bw: p.writeBytes },
            origin_id: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            eresult: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_CSFailedToReadChunkFromStorage_Notification`;
    }
  },
  ra = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Request`;
    }
  },
  ia = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Response`;
    }
  },
  aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Request`;
    }
  },
  oa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            status: { n: 2, br: o.readEnum, bw: p.writeEnum },
            accountid_requester: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            accountid_confirmer: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            time_requested: {
              n: 5,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            time_confirmed: {
              n: 6,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            time_ended: {
              n: 7,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Response`;
    }
  },
  sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_CSPurgeDepot_Notification`;
    }
  },
  ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: o.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_NewChunkAnnouncement_Notification`;
    }
  },
  la = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushDepotCache_Notification`;
    }
  },
  ua = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            manifestid: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushManifestVersion_Notification`;
    }
  },
  da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.location_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            host: { n: 2, br: o.readString, bw: p.writeString },
            path: { n: 3, br: o.readString, bw: p.writeString },
            headers_for_put: { n: 4, c: n },
            virtual_host: { n: 5, br: o.readString, bw: p.writeString },
            use_https: { n: 6, br: o.readBool, bw: p.writeBool },
            storage_provider: { n: 7, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ChunkStorageLocation`;
    }
  },
  fa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: o.readBytes, bw: p.writeBytes },
            compressed_size: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            need_encryption_key: { n: 6, br: o.readBool, bw: p.writeBool },
            compressed_md5: { n: 7, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Request`;
    }
  },
  pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.original_size || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            original_size: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            encryption_key: { n: 2, br: o.readBytes, bw: p.writeBytes },
            storage_locations: { n: 3, c: da, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Response`;
    }
  },
  ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: o.readBytes, bw: p.writeBytes },
            compressed_crc: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            storage_locations: { n: 7, c: da, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Request`;
    }
  },
  ha = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Response`;
    }
  },
  ga = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: o.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: o.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStorageFailure_Notification`;
    }
  },
  _a = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: va, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request`;
    }
  },
  va = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: o.readString, bw: p.writeString },
            timestamp: { n: 2, br: o.readFixed32, bw: p.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request_CDNInfoRequest`;
    }
  },
  ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: o.readString, bw: p.writeString },
            timestamp: { n: 2, br: o.readFixed32, bw: p.writeFixed32 },
            config: { n: 3, br: o.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CDNConfigInfo`;
    }
  },
  ba = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.responses || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { responses: { n: 1, c: ya, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Response`;
    }
  },
  xa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: o.readString, bw: p.writeString },
            config_file: { n: 2, br: o.readString, bw: p.writeString },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Request`;
    }
  },
  Sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Response`;
    }
  },
  Ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: o.readString, bw: p.writeString },
            mbps_sent: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            mbps_recv: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            cpu_percent: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            cache_hit_percent: { n: 5, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Request`;
    }
  },
  wa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { message: { n: 1, br: o.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Response`;
    }
  },
  Ta = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: Ea, r: !0, q: !0 },
            cdn_stats: { n: 2, c: Da, r: !0, q: !0 },
            steamcache_stats: { n: 3, c: Oa, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification`;
    }
  },
  Ea = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_Stats`;
    }
  },
  Da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: o.readString, bw: p.writeString },
            current_load: { n: 2, br: o.readInt32, bw: p.writeInt32 },
            rtime_last_updated: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_CDNStats`;
    }
  },
  Oa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            load_adjustment: { n: 4, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_SteamCacheStats`;
    }
  },
  ka = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: Aa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification`;
    }
  },
  Aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sysid_cm || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sysid_cm: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification_Stats`;
    }
  },
  ja = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.anon_session_allowed_depots || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
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
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AnonymousDepots_Notification`;
    }
  },
  Ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            manifest_request_code: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Request`;
    }
  },
  Na = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_valid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_valid: { n: 1, br: o.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Response`;
    }
  },
  Pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 2,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Request`;
    }
  },
  Fa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_request_code || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Response`;
    }
  },
  Ia = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Request`;
    }
  },
  La = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_allowed || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_allowed: { n: 1, br: o.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Response`;
    }
  },
  Ra = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depotid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            sysid_sender: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            manifestid: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_InvalidateDepotMetadata_Notification`;
    }
  },
  za = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: o.readBool, bw: p.writeBool },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            provider: { n: 4, br: o.readString, bw: p.writeString },
            cell_id: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            config_json: { n: 8, br: o.readString, bw: p.writeString },
            name: { n: 9, br: o.readString, bw: p.writeString },
            ip_filter_list: { n: 10, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfig`;
    }
  },
  Ba = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Request`;
    }
  },
  Va = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: za } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Response`;
    }
  },
  Ha = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            ip_ranges: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Request`;
    }
  },
  Ua = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Request`;
    }
  },
  Wa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: Ga, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response`;
    }
  },
  Ga = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response_HistoryEntry`;
    }
  },
  Ka = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: o.readString, bw: p.writeString },
            config: { n: 3, c: za },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Request`;
    }
  },
  qa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Response`;
    }
  },
  Ja = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: za } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfigUpdate_Notification`;
    }
  },
  Ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Response`;
    }
  },
  Xa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Request`;
    }
  },
  Za = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: Qa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response`;
    }
  },
  Qa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: o.readString, bw: p.writeString },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            is_enabled: { n: 4, br: o.readBool, bw: p.writeBool },
            name: { n: 5, br: o.readString, bw: p.writeString },
            cell_id: { n: 6, br: o.readUint32, bw: p.writeUint32 },
            max_mbps: { n: 7, br: o.readUint32, bw: p.writeUint32 },
            serve_steampipe: { n: 8, br: o.readBool, bw: p.writeBool },
            serve_broadcast: { n: 9, br: o.readBool, bw: p.writeBool },
            serve_chat: { n: 10, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response_ConfigNames`;
    }
  },
  $a = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.provider || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: o.readString, bw: p.writeString },
            host_name: { n: 2, br: o.readString, bw: p.writeString },
            name: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Request`;
    }
  },
  eo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Response`;
    }
  },
  to = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: o.readBool, bw: p.writeBool },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            provider: { n: 4, br: o.readString, bw: p.writeString },
            cell_id: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            api_key_primary: { n: 6, br: o.readString, bw: p.writeString },
            api_key_secondary: { n: 7, br: o.readString, bw: p.writeString },
            config_json: { n: 8, br: o.readString, bw: p.writeString },
            name: { n: 9, br: o.readString, bw: p.writeString },
            ip_filter_list: { n: 10, br: o.readString, bw: p.writeString },
            timestamp: { n: 11, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfig`;
    }
  },
  no = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Request`;
    }
  },
  ro = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: io, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response`;
    }
  },
  io = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: o.readString, bw: p.writeString },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            is_enabled: { n: 4, br: o.readBool, bw: p.writeBool },
            name: { n: 5, br: o.readString, bw: p.writeString },
            cell_id: { n: 6, br: o.readUint32, bw: p.writeUint32 },
            max_mbps: { n: 7, br: o.readUint32, bw: p.writeUint32 },
            serve_steampipe: { n: 8, br: o.readBool, bw: p.writeBool },
            serve_broadcast: { n: 9, br: o.readBool, bw: p.writeBool },
            serve_chat: { n: 10, br: o.readBool, bw: p.writeBool },
            https_support: { n: 11, br: o.readString, bw: p.writeString },
            cache_group: { n: 12, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response_ConfigNames`;
    }
  },
  ao = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Request`;
    }
  },
  oo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: to } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Response`;
    }
  },
  so = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Request`;
    }
  },
  co = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: lo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response`;
    }
  },
  lo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  uo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: o.readString, bw: p.writeString },
            config: { n: 3, c: to },
            omit_history_entry: { n: 4, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Request`;
    }
  },
  fo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Response`;
    }
  },
  po = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: to } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfigUpdate_Notification`;
    }
  },
  mo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            primary_key: { n: 2, br: o.readBool, bw: p.writeBool },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Request`;
    }
  },
  ho = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Response`;
    }
  },
  go = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.provider || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: o.readString, bw: p.writeString },
            host_name: { n: 2, br: o.readString, bw: p.writeString },
            name: { n: 3, br: o.readString, bw: p.writeString },
            serve_steampipe: { n: 4, br: o.readBool, bw: p.writeBool },
            serve_broadcast: { n: 5, br: o.readBool, bw: p.writeBool },
            serve_broadcastchat: { n: 6, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Request`;
    }
  },
  _o = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Response`;
    }
  },
  vo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: o.readBool, bw: p.writeBool },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            provider: { n: 4, br: o.readString, bw: p.writeString },
            cell_id: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            config_json: { n: 6, br: o.readString, bw: p.writeString },
            name: { n: 7, br: o.readString, bw: p.writeString },
            ip_filter_list: { n: 8, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfig`;
    }
  },
  yo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Request`;
    }
  },
  bo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: xo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response`;
    }
  },
  xo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: o.readString, bw: p.writeString },
            host_name: { n: 3, br: o.readString, bw: p.writeString },
            is_enabled: { n: 4, br: o.readBool, bw: p.writeBool },
            name: { n: 5, br: o.readString, bw: p.writeString },
            serve_steampipe: { n: 6, br: o.readBool, bw: p.writeBool },
            serve_broadcast: { n: 7, br: o.readBool, bw: p.writeBool },
            serve_chat: { n: 8, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response_ConfigNames`;
    }
  },
  So = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Request`;
    }
  },
  Co = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: vo } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Response`;
    }
  },
  wo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Request`;
    }
  },
  To = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: Eo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response`;
    }
  },
  Eo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  Do = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: o.readString, bw: p.writeString },
            config: { n: 3, c: vo },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Request`;
    }
  },
  Oo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Response`;
    }
  },
  ko = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: vo } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfigUpdate_Notification`;
    }
  },
  Ao = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: o.readString, bw: p.writeString },
            change_notes: { n: 3, br: o.readString, bw: p.writeString },
            allowed_ip_blocks: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Request`;
    }
  },
  jo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Response`;
    }
  },
  Mo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: o.readString, bw: p.writeString },
            mbps_sent: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            mbps_recv: { n: 4, br: o.readUint32, bw: p.writeUint32 },
            cpu_percent: { n: 5, br: o.readUint32, bw: p.writeUint32 },
            cache_hit_percent: { n: 6, br: o.readUint32, bw: p.writeUint32 },
            num_connected_ips: { n: 7, br: o.readUint32, bw: p.writeUint32 },
            upstream_egress_utilization: {
              n: 8,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            upstream_peering_utilization: {
              n: 9,
              br: o.readUint32,
              bw: p.writeUint32,
            },
            upstream_transit_utilization: {
              n: 10,
              br: o.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Request`;
    }
  },
  No = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.load_calc_percent || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            load_calc_percent: { n: 3, br: o.readUint32, bw: p.writeUint32 },
            config_json: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Response`;
    }
  },
  Po = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Request`;
    }
  },
  Fo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.params_json || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            params_json: { n: 1, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Response`;
    }
  },
  Io = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depotid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            parentappid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            oslist: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotDownloadBytesInfo`;
    }
  },
  Lo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depots || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depots: { n: 1, c: Io, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Request`;
    }
  },
  Ro = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.windows || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            windows: { n: 1, br: o.readUint64String, bw: p.writeUint64String },
            macos: { n: 2, br: o.readUint64String, bw: p.writeUint64String },
            linux: { n: 3, br: o.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Response`;
    }
  },
  zo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            allow_creating_new_migration: {
              n: 2,
              br: o.readBool,
              bw: p.writeBool,
            },
            restart_migration: { n: 3, br: o.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Request`;
    }
  },
  Bo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Response`;
    }
  },
  Vo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: o.readBytes, bw: p.writeBytes },
            storage_provider_preference: {
              n: 3,
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Request`;
    }
  },
  Ho = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cub_chunk || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cub_chunk: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            crc_chunk: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            url_host: { n: 3, br: o.readString, bw: p.writeString },
            url_path: { n: 4, br: o.readString, bw: p.writeString },
            use_https: { n: 5, br: o.readBool, bw: p.writeBool },
            origin_id: { n: 6, br: o.readUint32, bw: p.writeUint32 },
            storage_provider: { n: 7, br: o.readString, bw: p.writeString },
            request_headers: { n: 8, c: n },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Response`;
    }
  },
  Uo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            betakeys: {
              n: 2,
              r: !0,
              q: !0,
              br: o.readString,
              bw: p.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Request`;
    }
  },
  Wo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Response`;
    }
  },
  Go = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
            branch: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Request`;
    }
  },
  Ko = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_part_of_app_branch || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readBool,
              bw: p.writeBool,
            },
            app_was_released_or_is_current_build: {
              n: 2,
              br: o.readBool,
              bw: p.writeBool,
            },
            time_most_recent_release: {
              n: 3,
              br: o.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Response`;
    }
  },
  qo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            buildid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppBuildUpdated_Notification`;
    }
  },
  Jo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: p.writeUint32 },
            buildid: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            betakey: { n: 3, br: o.readString, bw: p.writeString },
            desc: { n: 4, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Request`;
    }
  },
  Yo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Response`;
    }
  },
  Xo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: o.readInt32, bw: p.writeInt32 },
            client_ip: { n: 2, br: o.readString, bw: p.writeString },
            client_region: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Request`;
    }
  },
  Zo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_hostname || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_hostname: { n: 1, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Response`;
    }
  },
  Qo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_type || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: o.readInt32, bw: p.writeInt32 },
            cell_id: { n: 2, br: o.readUint32, bw: p.writeUint32 },
            client_ip: { n: 3, br: o.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Request`;
    }
  },
  $o = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hostname || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hostname: { n: 1, br: o.readString, bw: p.writeString },
            caching_proxy_host_and_prefix: {
              n: 2,
              br: o.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Response`;
    }
  },
  es = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetDetectedContentSingleApp_Request`;
    }
  },
  ts = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detected_anticheat || l(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            detected_anticheat: { n: 1, br: o.readEnum, bw: p.writeEnum },
            detected_gameengine: { n: 2, br: o.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return m(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetDetectedContentSingleApp_Response`;
    }
  },
  ns;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `BuildManagement.SetAppBuildLiveConfirmed#1`,
      v(Jo, t, n),
      Yo,
      { ePrivilege: 1 },
    );
  }
  e.SetAppBuildLiveConfirmed = t;
})((ns ||= {}));
var rs;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`MDSAdmin.ReloadOriginStorageInfo#1`, v(ta, t), {
      ePrivilege: 1,
    });
  }
  e.ReloadOriginStorageInfo = t;
  function n(e, t) {
    return e.SendNotification(
      `MDSAdmin.CSFailedToReadChunkFromStorage#1`,
      v(na, t),
      { ePrivilege: 1 },
    );
  }
  e.CSFailedToReadChunkFromStorage = n;
  function r(e, t) {
    return e.SendNotification(`MDSAdmin.InvalidateDepotMetadata#1`, v(Ra, t), {
      ePrivilege: 1,
    });
  }
  e.InvalidateDepotMetadata = r;
  function i(e, t, n) {
    return e.SendMsg(`MDSAdmin.RequestAppContentPurge#1`, v(ra, t, n), ia, {
      ePrivilege: 5,
    });
  }
  e.RequestAppContentPurge = i;
  function a(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetAppContentPurgeStatus#1`, v(aa, t, n), oa, {
      ePrivilege: 1,
    });
  }
  e.GetAppContentPurgeStatus = a;
  function o(e, t) {
    return e.SendNotification(`MDSAdmin.CSPurgeDepot#1`, v(sa, t), {
      ePrivilege: 1,
    });
  }
  e.CSPurgeDepot = o;
  function s(e, t) {
    return e.SendNotification(`MDSAdmin.NewChunkAnnouncement#1`, v(ca, t), {
      ePrivilege: 1,
    });
  }
  e.NewChunkAnnouncement = s;
  function c(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushDepotCache#1`, v(la, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushDepotCache = c;
  function l(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushManifestVersion#1`, v(ua, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushManifestVersion = l;
  function u(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotDownloadBytes#1`, v(Lo, t, n), Ro, {
      ePrivilege: 1,
    });
  }
  e.GetDepotDownloadBytes = u;
  function d(e, t, n) {
    return e.SendMsg(`MDSAdmin.BeginOriginMigrationJob#1`, v(zo, t, n), Bo, {
      ePrivilege: 1,
    });
  }
  e.BeginOriginMigrationJob = d;
  function f(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotChunkLocation#1`, v(Vo, t, n), Ho, {
      ePrivilege: 1,
    });
  }
  e.GetDepotChunkLocation = f;
  function p(e, t, n) {
    return e.SendMsg(`MDSAdmin.SetAppBuildSortOrder#1`, v(Uo, t, n), Wo, {
      ePrivilege: 1,
    });
  }
  e.SetAppBuildSortOrder = p;
  function m(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetManifestAppBranchInfo#1`, v(Go, t, n), Ko, {
      ePrivilege: 1,
    });
  }
  e.GetManifestAppBranchInfo = m;
  function h(e, t) {
    return e.SendNotification(`MDSAdmin.AppBuildUpdated#1`, v(qo, t), {
      ePrivilege: 1,
    });
  }
  e.AppBuildUpdated = h;
  function g(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkReceived#1`, v(fa, t, n), pa, {
      ePrivilege: 1,
    });
  }
  e.ChunkReceived = g;
  function _(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkStored#1`, v(ma, t, n), ha, {
      ePrivilege: 1,
    });
  }
  e.ChunkStored = _;
  function y(e, t) {
    return e.SendNotification(`MDSAdmin.ChunkStorageFailure#1`, v(ga, t), {
      ePrivilege: 1,
    });
  }
  e.ChunkStorageFailure = y;
})((rs ||= {}));
var is;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetCDNConfigurations#1`,
      v(_a, t, n),
      ba,
      { ePrivilege: 1 },
    );
  }
  e.GetCDNConfigurations = t;
  function n(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNConfig#1`, v(xa, t, n), Sa, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNConfig = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNStats#1`, v(Ca, t, n), wa, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNStats = r;
  function i(e, t) {
    return e.SendNotification(
      `ContentServerConfig.ContentServerStatsBroadcast#1`,
      v(Ta, t),
      { ePrivilege: 1 },
    );
  }
  e.ContentServerStatsBroadcast = i;
  function a(e, t) {
    return e.SendNotification(
      `ContentServerConfig.CMLoadBroadcast#1`,
      v(ka, t),
      { ePrivilege: 1 },
    );
  }
  e.CMLoadBroadcast = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfig#1`,
      v(Ba, t, n),
      Va,
      { ePrivilege: 1 },
    );
  }
  e.GetSteamCSConfig = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCSConfig#1`,
      v(Ka, t, n),
      qa,
      { ePrivilege: 4 },
    );
  }
  e.UpdateSteamCSConfig = s;
  function c(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCSConfigUpdateNotification#1`,
      v(Ja, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCSConfigUpdateNotification = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfigHistory#1`,
      v(Ua, t, n),
      Wa,
      { ePrivilege: 4 },
    );
  }
  e.GetSteamCSConfigHistory = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateCSIPFilterRanges#1`,
      v(Ha, t, n),
      Ya,
      { ePrivilege: 1 },
    );
  }
  e.UpdateCSIPFilterRanges = u;
  function d(e, t) {
    return e.SendNotification(
      `ContentServerConfig.AnonymousDepotsBroadcast#1`,
      v(ja, t),
      { ePrivilege: 1 },
    );
  }
  e.AnonymousDepotsBroadcast = d;
  function f(e, t, n) {
    return e.SendMsg(`ContentServerConfig.GetSteamCSNames#1`, v(Xa, t, n), Za, {
      ePrivilege: 1,
    });
  }
  e.GetSteamCSNames = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateSteamCacheNode#1`,
      v($a, t, n),
      eo,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.AllocateSteamCacheNode = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfig#1`,
      v(ao, t, n),
      oo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfig = m;
  function h(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCacheConfig#1`,
      v(uo, t, n),
      fo,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.UpdateSteamCacheConfig = h;
  function g(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCacheConfigUpdateNotification#1`,
      v(po, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCacheConfigUpdateNotification = g;
  function _(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.RevSteamCacheAPIKey#1`,
      v(mo, t, n),
      ho,
      { ePrivilege: 4 },
    );
  }
  e.RevSteamCacheAPIKey = _;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfigHistory#1`,
      v(so, t, n),
      co,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfigHistory = y;
  function b(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNames#1`,
      v(no, t, n),
      ro,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheNames = b;
  function ee(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateOpenCacheNode#1`,
      v(go, t, n),
      _o,
      { ePrivilege: 1 },
    );
  }
  e.AllocateOpenCacheNode = ee;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfig#1`,
      v(So, t, n),
      Co,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheConfig = x;
  function te(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateOpenCacheConfig#1`,
      v(Do, t, n),
      Oo,
      { ePrivilege: 4 },
    );
  }
  e.UpdateOpenCacheConfig = te;
  function S(e, t) {
    return e.SendNotification(
      `ContentServerConfig.OpenCacheConfigUpdateNotification#1`,
      v(ko, t),
      { ePrivilege: 1 },
    );
  }
  e.OpenCacheConfigUpdateNotification = S;
  function C(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfigHistory#1`,
      v(wo, t, n),
      To,
      { ePrivilege: 4 },
    );
  }
  e.GetOpenCacheConfigHistory = C;
  function w(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheNames#1`,
      v(yo, t, n),
      bo,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheNames = w;
  function T(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCacheClientFilters#1`,
      v(Ao, t, n),
      jo,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCacheClientFilters = T;
  function E(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCachePerformanceStats#1`,
      v(Mo, t, n),
      No,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCachePerformanceStats = E;
  function D(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNodeParams#1`,
      v(Po, t, n),
      Fo,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetSteamCacheNodeParams = D;
  function ne(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.CheckManifestRequestCode#1`,
      v(Ma, t, n),
      Na,
      { ePrivilege: 1 },
    );
  }
  e.CheckManifestRequestCode = ne;
  function O(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetManifestRequestCode#1`,
      v(Pa, t, n),
      Fa,
      { ePrivilege: 1 },
    );
  }
  e.GetManifestRequestCode = O;
  function re(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.IsDepotAllowedSteamChina#1`,
      v(Ia, t, n),
      La,
      { ePrivilege: 1 },
    );
  }
  e.IsDepotAllowedSteamChina = re;
})((is ||= {}));
var as;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNForVideo#1`,
      v(Xo, t, n),
      Zo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetCDNForVideo = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.PickSingleContentServer#1`,
      v(Qo, t, n),
      $o,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.PickSingleContentServer = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetServersForSteamPipe#1`,
      v(Ii, t, n),
      Li,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      v(Ri, t, n),
      zi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      v(Bi, t, n),
      Vi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      v(Hi, t, n),
      Ui,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      v(Wi, t, n),
      Gi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      v(Ki, t, n),
      qi,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      v(Ji, t, n),
      Yi,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = l;
})((as ||= {}));
var os;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      v(Xi, t, n),
      Qi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
  function n(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetDetectedContentSingleApp#1`,
      v(es, t, n),
      ts,
      { bConstMethod: !0, ePrivilege: 7 },
    );
  }
  e.GetDetectedContentSingleApp = n;
})((os ||= {}));
function ss(e, t, n) {
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
function cs(e) {
  let {
      rgCommonRedistAllPlatforms: t,
      rgCommonRedistWindows: n,
      rgCheckedDepots: r,
      nDetectedGameEngine: i,
      bNoCommonRedistsNeeded: a,
    } = e,
    o = (0, U.useMemo)(() => new Map(t), [t]),
    s = (0, U.useMemo)(() => new Map(n), [n]),
    [c, l] = (0, U.useState)(ss(o, s, new Map(r))),
    [u, d] = (0, U.useState)(a),
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
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsxs)(`div`, {
        className: Ni,
        children: [
          (0, W.jsx)(`input`, {
            id: `noredistsneeded`,
            type: `checkbox`,
            checked: u,
            disabled: _ && !u,
            onChange: (e) => m(e.currentTarget.checked),
          }),
          (0, W.jsx)(`label`, {
            htmlFor: `noredistsneeded`,
            children: P(`#StoreAdmin_Redist_NoneNeeded`),
          }),
        ],
      }),
      h &&
        (0, W.jsx)(us, {
          name: P(`#StoreAdmin_Platform_AllPlatforms`),
          categories: o,
          checkedState: c,
          disabled: u,
          setChecked: p,
        }),
      g && (0, W.jsx)(ls, {}),
      (0, W.jsx)(us, {
        name: P(`#StoreAdmin_Platform_Windows`),
        categories: s,
        checkedState: c,
        disabled: u,
        setChecked: p,
      }),
    ],
  });
}
function ls() {
  return (0, W.jsx)(`div`, {
    className: Mi,
    children: P(`#StoreAdmin_Redist_Unreal_Notice`),
  });
}
function us(e) {
  let {
      name: t,
      categories: n,
      checkedState: r,
      disabled: i,
      setChecked: a,
    } = e,
    o = (0, U.useMemo)(() => {
      let e = [];
      return (
        n.forEach((t, n) =>
          e.push(
            (0, W.jsx)(
              ds,
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
  return (0, W.jsxs)(`div`, {
    className: `section`,
    children: [
      (0, W.jsx)(`h2`, { children: t }),
      (0, W.jsx)(`div`, { className: `grayRule` }),
      ...o,
    ],
  });
}
function ds(e) {
  let { name: t, category: n, checkedState: r, disabled: i, setChecked: a } = e,
    o = Object.entries(n.components).map(([e, t]) =>
      (0, W.jsx)(
        `li`,
        {
          children: (0, W.jsx)(fs, {
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
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsx)(`div`, { children: t }),
      (0, W.jsx)(`ul`, { children: [...o] }),
    ],
  });
}
function fs(e) {
  let { name: t, depotID: n, checked: r, disabled: i, setChecked: a } = e,
    o = i || ((n == 228987 || n == 228986) && !r);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`input`, {
        id: n.toString(),
        type: `checkbox`,
        checked: r,
        disabled: o,
        onChange: (e) => a(n, e.currentTarget.checked),
      }),
      (0, W.jsx)(`label`, { htmlFor: n.toString(), children: t }),
    ],
  });
}
function ps(e, t) {
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
function ms(e, t) {
  return [`InProgressItemDefinition_${e}_${t}`];
}
function hs(e, t) {
  let n = L({
    queryKey: ms(e, t),
    queryFn: async () => {
      let n = `${C.PARTNER_BASE_URL}communityitems/ajaxgetcommunityitemdef/${e}/${t}`,
        r = new FormData();
      r.append(`sessionid`, f());
      let i = await wt.default.post(n, r, { withCredentials: !0 });
      return i?.status == 200 && i.data?.success == 1
        ? i.data.def
        : (console.error(
            `useGetInProgressCommunityItemDefinition: `,
            i?.data.error,
          ),
          null);
    },
    staleTime: 1 / 0,
    initialData: s(`item_def`, `application_config`),
  });
  return n.isLoading ? null : n.data;
}
function gs(e, t) {
  ye.invalidateQueries({ queryKey: ms(e, t) });
}
var Y = class extends nt {
  m_currentImageOptionKey = void 0;
  m_fnGetImageOptions;
  constructor(e, t, n, r) {
    let i = ae(n);
    (super(e, e.name, t, n.src, i), c(this), (this.m_fnGetImageOptions = r));
  }
  IsValidAssetType(e, t) {
    let n = t && t != this.fileType,
      r = this.IsFileTypeSupported(this.fileType),
      i = this.GetCurrentImageOption(),
      a = ``;
    return (
      r
        ? n && (a = P(`#ImageUpload_InvalidFormat`, se(t)))
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
    return rt.includes(this.fileType);
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
(e([r], Y.prototype, `m_currentImageOptionKey`, void 0),
  e([y], Y.prototype, `ImageOptions`, null),
  e([_], Y.prototype, `SetCurrentImageOption`, null));
var X = class extends tt {
  m_filesToUpload = r.array();
  m_strUploadPath = null;
  m_bSynchronousUpload = !1;
  m_rgAssetRequirements = [];
  constructor(e, t, n) {
    (super(),
      c(this),
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
    this.m_filesToUpload = r.array();
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
    if (oe(e.type) || A(e.type)) {
      let n = await ce(e, A(e.type));
      if (n) {
        let r = new Y(e, t, n, () => this.GetImageOptions());
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
      (e) => e.status == `pending` || et(e.status),
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
    (a.append(`assetfile`, e.file, t), a.append(`sessionid`, f()));
    let o = e.GetCurrentImageOption();
    if ((a.append(`strAssetType`, o.asset_type), !ie(t)))
      return {
        bSuccess: !1,
        elErrorMessage: `Invalid file extension, cannot determine mimetype`,
      };
    try {
      i = await wt.default.post(this.m_strUploadPath, a, {
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
        cancelToken: r,
      });
    } catch (e) {
      console.error(Oe(e)?.strErrorMsg);
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
(e([r], X.prototype, `m_filesToUpload`, void 0),
  e([O], X.prototype, `GetUploadImages`, null),
  e([O], X.prototype, `ClearImages`, null),
  e([O], X.prototype, `DeleteUploadImage`, null),
  e([O], X.prototype, `AddImageForLanguage`, null));
function _s(e) {
  let { appID: t, unItemType: n, rgAssetDefinitions: r } = e,
    i = U.useMemo(
      () =>
        new X(
          u.PARTNER_BASE_URL + `communityitems/ajaxuploadasset/${t}/${n}`,
          !0,
          r,
        ),
      [t, n, r],
    );
  return (0, W.jsx)(`div`, {
    children: (0, W.jsx)(Te, {
      elOverrideDragAndDropText: P(`#CommunityItems_Upload_Instructions`),
      imageUploader: i,
      rgRealmList: [g.k_ESteamRealmGlobal],
      fnUploadComplete: (e) => {
        e.some((e) => e.bSuccess) && gs(t, n);
      },
    }),
  });
}
var vs = `b5Vyx9E4PYk-`,
  ys = `EXiBUMcoJqk-`,
  bs = `TpQ5LCQeO6A-`,
  xs = `cBr5V9MVo4Q-`,
  Ss = `q08dLy5oCdk-`,
  Cs = `wprlkpQX5G0-`,
  ws = `_8ydM55RAy1k-`,
  Ts = `jeLDBTnpKys-`,
  Es = `Qcp4i2FD2Iw-`,
  Z = class {
    m_ItemDefinition = {};
    m_ItemKV = {};
    constructor(e) {
      c(this);
      let { itemDef: t, communityItemDef: n } = e;
      (b(
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
          : (b(
              !!n,
              `Managed to get into LoadItemDefinition with neither itemDef nor communityItemDef`,
            ),
            (this.m_ItemDefinition = n)),
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
(e([r], Z.prototype, `m_ItemDefinition`, void 0),
  e([r], Z.prototype, `m_ItemKV`, void 0));
function Ds(e, t) {
  return `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
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
  Q = U.createContext(null),
  Ms = ({ communityItem: e, assetDefs: t, children: n }) =>
    (0, W.jsx)(Q.Provider, {
      value: { communityItem: e, assetDefs: t },
      children: n,
    });
function Ns(e) {
  let { appID: t, unItemType: n } = e,
    r = hs(t, n);
  if (!r) return null;
  let i = new Z({ itemDef: r }),
    a = As(i.ItemClass, !1, !1);
  if (!a) return null;
  let o = (!i.BIsActive || te.is_support) && !i.BIsDeleted;
  return (0, W.jsx)(Ms, {
    communityItem: i,
    assetDefs: a,
    children: (0, W.jsxs)(`div`, {
      className: vs,
      children: [o && (0, W.jsx)(Ps, {}), (0, W.jsx)(Ls, {})],
    }),
  });
}
function Ps() {
  let { communityItem: e, assetDefs: t } = U.useContext(Q),
    n = t
      .flatMap((e) => e.guidelines)
      .map((e, t) => (0, W.jsx)(Fs, { guideline: e }, `guideline_${t}`));
  return (0, W.jsxs)(`div`, {
    className: ys,
    children: [
      (0, W.jsx)(`div`, { className: ws, children: n }),
      (0, W.jsx)(_s, {
        appID: e.AppID,
        unItemType: e.ItemID,
        rgAssetDefinitions: t,
      }),
    ],
  });
}
function Fs(e) {
  let { guideline: t } = e;
  return (0, W.jsxs)(`div`, {
    className: Es,
    children: [
      (0, W.jsx)(`div`, { className: Ts, children: t.strHeader }),
      (0, W.jsx)(`div`, { className: void 0, children: t.strIntro }),
      t.rgBulletPoints?.length > 0 &&
        (0, W.jsx)(Is, { rgBulletPoints: t.rgBulletPoints }),
    ],
  });
}
function Is(e) {
  let { rgBulletPoints: t } = e,
    n = t.map((e, t) => (0, W.jsx)(`li`, { children: e }, `bulletpoint_${t}`));
  return (0, W.jsx)(`ul`, { children: n });
}
function Ls() {
  let { communityItem: e, assetDefs: t } = U.useContext(Q),
    n = t.map((e) => (0, W.jsx)(Rs, { assetDef: e }, e.asset_type));
  return (0, W.jsx)(`div`, { className: bs, children: n });
}
function Rs(e) {
  let { assetDef: t } = e,
    { communityItem: n, assetDefs: r } = U.useContext(Q);
  return (0, W.jsxs)(`div`, {
    className: xs,
    children: [
      (0, W.jsxs)(`div`, { className: void 0, children: [`*`, t.label] }),
      (0, W.jsx)(`div`, {
        className: void 0,
        children: t.is_video
          ? (0, W.jsx)(Vs, {
              rgSources: ps(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            })
          : (0, W.jsx)(Bs, {
              rgSources: ps(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            }),
      }),
    ],
  });
}
function zs() {
  return (0, W.jsx)(`div`, {
    className: Cs,
    children: (0, W.jsx)(`div`, {
      children: P(`#CommunityItems_PlaceholderAsset_Missing`),
    }),
  });
}
function Bs(e) {
  let { rgSources: t, unAppID: n } = e;
  return t.length
    ? (0, W.jsx)(`img`, { className: Ss, src: Ds(n, t[0]) })
    : (0, W.jsx)(zs, {});
}
function Vs(e) {
  let { rgSources: t, unAppID: n } = e,
    r = U.useRef(void 0);
  if (
    (U.useEffect(() => {
      r.current && r.current.load();
    }, [t]),
    !t.length)
  )
    return (0, W.jsx)(zs, {});
  let i = t.map((e, t) =>
    (0, W.jsx)(`source`, { src: Ds(n, e), type: ie(e) }, `video_${t}`),
  );
  return (0, W.jsx)(`video`, {
    ref: r,
    className: Ss,
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
    a = B({ appid: t }),
    [o, s, c] = U.useMemo(() => {
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
    ? (0, W.jsx)(`div`, { children: P(`#AppLanding_RegionRestrictions_None`) })
    : (0, W.jsxs)(W.Fragment, {
        children: [
          s.length > 0 &&
            (0, W.jsx)(`div`, {
              children: P(`#AppLanding_RegionRestrictions_Allowed`, s),
            }),
          o.length > 0 &&
            (0, W.jsx)(`div`, {
              children: P(`#AppLanding_RegionRestrictions_Blocked`, o),
            }),
          c &&
            (0, W.jsx)(`div`, {
              children: N(
                `#AppLanding_RegionRestrictions_ContentSurvey`,
                (0, W.jsx)(`a`, { href: i }),
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
  return (0, W.jsxs)(ve, {
    children: [
      (0, W.jsx)(F, {
        path: $.CommunityItem(`:appid`, `:itemtype`),
        render: (e) =>
          (0, W.jsx)(H, {
            config: {
              "appadmin-profilecolors": (e) => (0, W.jsx)(at, { ...e }),
              "appadmin-communityitemassets": () =>
                (0, W.jsx)(Ns, {
                  appID: Number.parseInt(e.match.params.appid),
                  unItemType: Number.parseInt(e.match.params.itemtype),
                }),
            },
          }),
      }),
      (0, W.jsx)(F, {
        path: $.AppLanding(`:appid`),
        render: (e) =>
          (0, W.jsx)(H, {
            config: {
              "storeadmin-releasedateinfo": (e) => (0, W.jsx)(ot, { ...e }),
              "storeadmin-applanding-statsrollup": (e) =>
                (0, W.jsx)(Bt, { ...e }),
              "storeadmin-applanding-demowishlistemails": (e) =>
                (0, W.jsx)(Vt, { ...e }),
              "storeadmin-editions-editor": (e) => (0, W.jsx)(it, { ...e }),
              "appadmin-restrictedcountries": (e) => (0, W.jsx)(Hs, { ...e }),
            },
          }),
      }),
      (0, W.jsx)(F, {
        path: $.AppInstaller(`:appid`),
        render: (e) =>
          (0, W.jsx)(H, {
            config: {
              "storeadmin-steamworksredist-edit": (e) =>
                (0, W.jsx)(cs, { ...e }),
            },
          }),
      }),
      (0, W.jsx)(F, {
        path: $.AppEconomy(`:appid`),
        render: (e) =>
          (0, W.jsx)(H, {
            config: {
              "storeadmin-steamworkseconomy-propertyedit": (e) =>
                (0, W.jsx)(Oi, { ...e }),
            },
          }),
      }),
    ],
  });
}
export { Us as default };
