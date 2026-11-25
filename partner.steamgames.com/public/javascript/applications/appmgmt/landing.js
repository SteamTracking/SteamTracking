/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Dt as t,
  G as n,
  Pt as r,
  W as i,
  k as a,
  n as o,
  nt as s,
  r as c,
  w as l,
  z as u,
} from "./chunk~de7f2df91c.js";
import {
  A as d,
  Nt as f,
  Pt as p,
  Wt as m,
  j as h,
  t as g,
} from "./chunk~bd90a5fce7.js";
import {
  B as _,
  Ct as v,
  D as y,
  Dt as b,
  Et as x,
  F as S,
  G as C,
  H as w,
  Ht as T,
  I as E,
  J as D,
  K as O,
  L as k,
  M as A,
  N as ee,
  O as j,
  Ot as M,
  P as te,
  Pt as ne,
  R as re,
  S as ie,
  T as ae,
  Tt as oe,
  U as N,
  V as P,
  W as F,
  X as I,
  Y as L,
  a as se,
  b as ce,
  c as le,
  dt as ue,
  ft as de,
  gt as fe,
  h as pe,
  ht as me,
  i as he,
  j as ge,
  k as _e,
  l as ve,
  m as ye,
  mt as be,
  n as xe,
  o as Se,
  p as Ce,
  pt as we,
  q as R,
  r as Te,
  s as Ee,
  t as De,
  u as Oe,
  ut as ke,
  vt as Ae,
  w as je,
  xt as Me,
  yt as Ne,
  z,
} from "./chunk~54f70c90c1.js";
import {
  Aa as Pe,
  Da as Fe,
  Pa as Ie,
  _a as Le,
  _n as Re,
  aa as ze,
  da as B,
  eo as V,
  fa as Be,
  gr as Ve,
  ma as He,
  mn as H,
  oa as Ue,
  ua as We,
  va as Ge,
  vn as Ke,
} from "./chunk~1fa4b8f2ff.js";
import { _ as qe } from "./chunk~0a99e05c44.js";
import { G as Je, H as Ye, ir as Xe, rt as U } from "./chunk~6b8ddcaac8.js";
import "./chunk~44f252525d.js";
import { t as Ze } from "./chunk~ede3e357a2.js";
import "./chunk~a825a84845.js";
import { i as Qe } from "./chunk~7b4b9eb713.js";
import { n as $e } from "./chunk~b0a84aab1b.js";
import { t as et } from "./chunk~25a6634263.js";
import { a as W, n as tt } from "./chunk~fc8a9e4879.js";
import { n as nt } from "./chunk~9d71b14b50.js";
import {
  a as rt,
  i as it,
  n as at,
  o as ot,
  r as st,
  t as ct,
} from "./chunk~0aa5028ef4.js";
import { r as lt } from "./chunk~af36c62e9f.js";
import { t as ut } from "./chunk~eefd71512b.js";
import "./chunk~a6b9ae1345.js";
import { l as dt, m as ft, u as pt } from "./chunk~3f2c78281d.js";
import { n as mt } from "./chunk~0111fcd096.js";
import { t as ht } from "./chunk~93fc7377c2.js";
import { n as gt, t as G } from "./chunk~a7c5e71e12.js";
import { n as _t, r as vt } from "./chunk~7e6646f5a7.js";
import { t as yt } from "./chunk~9b35b2d482.js";
import { _ as bt, g as xt, h as K, m as q } from "./chunk~87cd89c815.js";
import {
  a as St,
  i as Ct,
  n as wt,
  r as Tt,
  t as Et,
} from "./chunk~8e34816c9e.js";
import { i as Dt } from "./chunk~8255136f90.js";
import { vt as Ot } from "./chunk~cb393b4e7b.js";
import { t as kt } from "./chunk~80765d41ae.js";
var J = r(s()),
  At = `-bcJANy5VMA-`,
  jt = `RovZ0LsFtt8-`,
  Mt = `_7lNY35dQfo4-`,
  Nt = `Sb1tlgmh6Y8-`,
  Pt = `ni2dNmXBX1k-`,
  Ft = `ERoEwjtja6E-`,
  It = `_0tXgdz8uE6Y-`,
  Lt = `b8JzMfOLVi8-`,
  Y = i();
function Rt(e) {
  let { viewDate: t } = e,
    n = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `short`,
    }).format(t);
  return (0, Y.jsx)(`div`, {
    className: At,
    children: (0, Y.jsx)(`div`, { className: jt, children: n }),
  });
}
function zt(e) {
  let {
      now: t,
      viewDate: n,
      events: r,
      filterVisibleEventIds: i,
      bShowPreceedingWeeks: a,
      bShowFollowingWeeks: o,
      fnScrollToDay: s,
      hoverEvent: l,
      compareEvents: u,
      colorPriority: d,
    } = e,
    f = K(t),
    p = bt(r, (e) => K(e.startDate)),
    m = q(n, -n.getDay()),
    h = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(),
    g =
      (h +
        n.getDay() +
        ((n.getDay() + h) % 7 == 0 ? 0 : 7 - ((n.getDay() + h) % 7))) /
      7,
    _ = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    }),
    v = J.useMemo(
      () => Array.from({ length: g * 7 }, (e, t) => t).map(() => J.createRef()),
      [g],
    );
  J.useEffect(() => {
    for (let e = 0; e < g; e++) {
      let t = q(m, e * 7);
      for (let n = 0; n < 7; n++) {
        let r = q(t, n),
          i = K(r),
          a = p.get(Math.floor(i.getTime() / 1e3))?.sort(d),
          o,
          s,
          c;
        if (a) {
          let e = a.find((e) => e.note);
          o = e ? e.color : void 0;
          let t = a.filter((e) => !e.note);
          s = t.length > 0 ? t[0].color : void 0;
          let n = t.filter((e) => e.color != s);
          c = n.length > 0 ? n[0].color : void 0;
        }
        (o
          ? v[e * 7 + n].current?.style.setProperty(`--note-color`, o)
          : v[e * 7 + n].current?.style.removeProperty(`--note-color`),
          s
            ? v[e * 7 + n].current?.style.setProperty(`--day-color1`, s)
            : v[e * 7 + n].current?.style.removeProperty(`--day-color1`),
          (c ?? s)
            ? v[e * 7 + n].current?.style.setProperty(`--day-color2`, c ?? s)
            : v[e * 7 + n].current?.style.removeProperty(`--day-color2`));
      }
    }
  }, [d, p, m, g, v]);
  let y = [];
  for (let e = 0; e < g; e++) {
    let t = [],
      r = q(m, e * 7);
    for (let d = 0; d < 7; d++) {
      let m = q(r, d),
        h = K(m),
        g = n.getMonth() === m.getMonth(),
        y = n.getMonth() === m.getMonth() || (a && m <= n) || (o && m >= n),
        b = h.getTime() === f.getTime(),
        x = p.get(Math.floor(h.getTime() / 1e3))?.sort(u),
        S = x?.every((e) => i.has(e.id)),
        C = x?.some((e) => e.note),
        w =
          l &&
          h.getTime() >= K(l.startDate).getTime() &&
          h.getTime() <= K(l.endDate).getTime(),
        T = c(
          Pt,
          !g && !w && `_1CVPS7mLrfw-`,
          !y && `KOVhvGxr6og-`,
          b && `_7H1LYjC8bPE-`,
          C && S && `DqfqRgwcIR8-`,
          !C && S && `MQT5hyfOB2Q-`,
          w && y && `_9VpjQYOBKgg-`,
        );
      t.push(
        (0, Y.jsx)(
          Bt,
          {
            date: m,
            daysEvents: x,
            tooltipDateFormat: _,
            children: (0, Y.jsx)(`div`, {
              className: T,
              onClick: () => s(m),
              ref: v[e * 7 + d],
              children: m.getDate(),
            }),
          },
          d,
        ),
      );
    }
    y.push((0, Y.jsx)(`div`, { className: Mt, children: t }, e));
  }
  return (0, Y.jsx)(Y.Fragment, { children: y });
}
function Bt(e) {
  let { date: t, daysEvents: n, tooltipDateFormat: r, children: i } = e;
  if (!n) return (0, Y.jsx)(Y.Fragment, { children: i });
  let a = (0, Y.jsxs)(`div`, {
    className: Ft,
    children: [
      (0, Y.jsx)(`div`, { className: It, children: r.format(t) }),
      n.map((e) => (0, Y.jsx)(Vt, { event: e }, e.id)),
    ],
  });
  return (0, Y.jsx)(Ke, { toolTipContent: a, children: i });
}
function Vt(e) {
  let { event: t } = e;
  Ut(t);
  let n = J.useRef(void 0);
  return (
    J.useEffect(() => {
      n.current?.style.setProperty(`--event-color`, t.color);
    }, [t.color]),
    (0, Y.jsxs)(`div`, {
      className: Lt,
      ref: n,
      children: [
        t.title,
        t.valveOnly &&
          (0, Y.jsx)(`span`, { className: void 0, children: ` (VO)` }),
      ],
    })
  );
}
function Ht(e) {
  let t = new Intl.DateTimeFormat(navigator.language, { weekday: `short` }),
    n = [...Array(7).keys()].map((e) => t.format(new Date(2024, 0, e + 7)));
  return (0, Y.jsx)(`div`, {
    className: Mt,
    children: n.map((e) =>
      (0, Y.jsx)(`div`, { className: Nt, children: e }, e),
    ),
  });
}
function Ut(e) {
  let t = h();
  J.useEffect(() => {
    let n = e.registerForChange?.(() => t());
    return () => n?.Unregister();
  }, [e, t]);
}
var Wt = class {
  m_eventsChanged = new f();
  m_rgHiddenIds = new Set();
  m_rgAdditionalEvents = new Map();
  EventsChanged() {
    return this.m_eventsChanged;
  }
  GetHiddenIds() {
    return this.m_rgHiddenIds;
  }
  SetHidden(e, t) {
    (t ? this.m_rgHiddenIds.add(e) : this.m_rgHiddenIds.delete(e),
      this.m_eventsChanged.Dispatch());
  }
  GetAdditionalEvents() {
    return Array.from(this.m_rgAdditionalEvents.values());
  }
  AddAdditionalEvent(e) {
    return (
      this.m_rgAdditionalEvents.set(e.id, e),
      this.m_eventsChanged.Dispatch(),
      () => this.RemoveAdditionalEvent(e.id)
    );
  }
  RemoveAdditionalEvent(e) {
    (this.m_rgAdditionalEvents.delete(e), this.m_eventsChanged.Dispatch());
  }
};
function Gt(e) {
  let [t, n] = J.useState([]),
    [r, i] = J.useState(0);
  return (
    d(e.EventsChanged(), () => {
      (n(e.GetAdditionalEvents()), i((e) => e + 1));
    }),
    t
  );
}
function Kt(e) {
  let [t, n] = J.useState(new Set()),
    [r, i] = J.useState(0);
  return (
    d(e.EventsChanged(), () => {
      (n(e.GetHiddenIds()), i((e) => e + 1));
    }),
    t
  );
}
var X = class e {
  m_accountId;
  m_partnerId;
  m_serviceTransport;
  m_eventsChanged = new f();
  m_rgDismisses = new Map();
  m_setDismisses = new Set();
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  async Init(e, t) {
    ((this.m_accountId = e),
      (this.m_partnerId = t),
      (this.m_serviceTransport = Dt.Get()
        .GetPromotionTransport()
        .GetServiceTransport()));
    let r = n.Init(Ct);
    (r.Body().set_accountid(this.m_accountId),
      r.Body().set_partnerid(this.m_partnerId),
      r
        .Body()
        .set_rtime_after(
          Math.floor(new Date().getTime() / 1e3 - 14 * V.PerDay),
        ));
    let i = await St.GetDismissTimeRange(this.m_serviceTransport, r);
    if (i.BSuccess()) {
      for (let e of i.Body().dismiss_list())
        if (e.state() == 1) {
          let t = this.m_rgDismisses.get(e.key_json()) ?? [];
          (t.push(e.dismiss_id()), this.m_rgDismisses.set(e.key_json(), t));
        }
      this.DismissesUpdated();
    }
  }
  DismissesUpdated() {
    ((this.m_setDismisses = new Set(
      Array.from(this.m_rgDismisses).map(([e, t]) => e),
    )),
      this.m_eventsChanged.Dispatch());
  }
  EventsChanged() {
    return this.m_eventsChanged;
  }
  GetDismissedEvents() {
    return (
      t(this.m_serviceTransport, `Must call Init first`), this.m_setDismisses
    );
  }
  GetDismissState(e) {
    return this.m_rgDismisses.get(e)?.length > 0;
  }
  async SetDismiss(e, r) {
    t(this.m_serviceTransport, `Must call Init first`);
    let i = this.m_rgDismisses.get(e) ?? [];
    (i.push(null), this.m_rgDismisses.set(e, i), this.DismissesUpdated());
    let a = n.Init(wt),
      o = new Et();
    (o.set_accountid(this.m_accountId),
      o.set_partnerid(this.m_partnerId),
      o.set_key_json(e),
      o.set_state(1),
      o.set_rtime_create(Math.floor(new Date().getTime() / 1e3)),
      o.set_rtime_validity(Math.floor(r.getTime() / 1e3)),
      a.Body().add_dismiss_list(o));
    let s = await St.CreateDismiss(this.m_serviceTransport, a);
    if (s.BSuccess() && s.Body().dismiss_list().length > 0) {
      let t = (this.m_rgDismisses.get(e) ?? []).filter((e) => e !== null);
      (t.push(s.Body().dismiss_list()[0].dismiss_id()),
        this.m_rgDismisses.set(e, t));
    }
  }
  async ClearDismiss(e) {
    t(this.m_serviceTransport, `Must call Init first`);
    let r = this.m_rgDismisses.get(e);
    if ((this.m_rgDismisses.delete(e), this.DismissesUpdated(), r))
      for (let e of r) {
        let t = n.Init(Tt);
        (t.Body().set_dismiss_id(e),
          await St.DeleteDismiss(this.m_serviceTransport, t));
      }
  }
};
function qt() {
  let [e, t] = J.useState(X.Get().GetDismissedEvents()),
    [n, r] = J.useState(0);
  return (
    d(X.Get().EventsChanged(), () => {
      (t(X.Get().GetDismissedEvents()), r((e) => e + 1));
    }),
    e
  );
}
var Jt = `tVHOfgHRybk-`,
  Yt = `KIGqyEThJKk-`,
  Xt = `gMBAaE-Jr5Q-`,
  Zt = `EZNV3Nld6Hc-`,
  Qt = `_8DiCl1vDkY8-`;
function $t() {
  return J.useMemo(
    () =>
      l(`rgUpcomingReleaseApps`, `application_config`)?.map((e) => {
        let t = new Date(e.releaserequest.release_date * 1e3),
          n = e.type == `DLC`,
          r = n ? `release-dlc` : `release-game`;
        return {
          title: e.name,
          startDate: t,
          endDate: t,
          eventType: r,
          id: e.appid.toString(),
          eventTypeName: B(
            n
              ? `#Dashboard_UpcomingEvents_EventType_Release_DLC`
              : `#Dashboard_UpcomingEvents_EventType_Release`,
          ),
          eventTypeSortWeight: n ? 10 : 0,
          getElement: () => (0, Y.jsx)(en, { app: e }),
          passesFilter: (e) => e == 2,
        };
      }) ?? [],
    [],
  );
}
function en(e) {
  let { app: t } = e,
    [n] = G(t.appid, 0, { include_assets: !0, include_release: !0 }),
    r = !!n?.GetName();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(tn, { app: t, storeItem: n, hasStoreItem: r }),
      (0, Y.jsx)(rn, { app: t, hasStoreItem: r }),
    ],
  });
}
function tn(e) {
  let { app: t, storeItem: n, hasStoreItem: r } = e,
    i = a.PARTNER_BASE_URL + `apps/landing/` + t.appid,
    o = r ? n.GetName() : t.name,
    s = n?.GetAssets().GetHeaderURL();
  return (0, Y.jsxs)(F, {
    hasImage: !!s,
    children: [
      (0, Y.jsx)(C, { imageUrl: s, url: i }),
      (0, Y.jsxs)(D, {
        hasImage: !!s,
        children: [
          (0, Y.jsx)(R, { text: o, url: i }),
          (0, Y.jsxs)(`div`, {
            className: Jt,
            children: [
              t.releaserequest &&
                (0, Y.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: B(`#App_Landing_SpecifiedReleaseDate`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: nn(t.releaserequest.release_date),
                    }),
                  ],
                }),
              r &&
                (0, Y.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: B(`#App_Landing_CustomersSeeReleaseDate`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: n.GetFormattedSteamReleaseDate(),
                    }),
                  ],
                }),
              t.earliestadvancedaccessdate > 0 &&
                (0, Y.jsxs)(`div`, {
                  className: c(`iSMHkhZtJis-`, `RcifCC6jW3A-`),
                  children: [
                    (0, Y.jsxs)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: [
                        B(`#App_Landing_AdvancedAccessDate`),
                        (0, Y.jsx)(H, {
                          tooltip: B(`#App_Landing_AdvancedAccessDate_ttip`),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: nn(t.earliestadvancedaccessdate),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function nn(e) {
  return e
    ? `${Ie(e)} ${Pe(e, {}, { timeZoneName: `short` })}`
    : B(`#App_Landing_UnsetReleaseDate`);
}
function rn(e) {
  let { app: t, hasStoreItem: n } = e,
    r = st(t.releasestate, n),
    i = c(
      Qt,
      t.releasestate == `prerelease` && `-PegX2P-Uso-`,
      t.releasestate == `released` && `_0SILAZhIcgo-`,
    );
  return (0, Y.jsx)(`div`, {
    className: Yt,
    children: (0, Y.jsxs)(`div`, {
      className: Xt,
      children: [
        (0, Y.jsx)(`div`, {
          className: Zt,
          children: B(`#Dashboard_UpcomingEvents_ReleaseStatusLabel`),
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`span`, { className: i, children: r.sText }),
            r.sTooltip && (0, Y.jsx)(H, { tooltip: r.sTooltip }),
          ],
        }),
      ],
    }),
  });
}
var an = `j-KLJ7Mtr80-`,
  on = `IvgNTZF5PaM-`,
  sn = `s-5fYfwRBqo-`,
  cn = `RazA3zDRLMM-`,
  ln = `-rKdDl3YL68-`,
  un = `t0jMkZAhUvc-`,
  dn = `_87cPEnGNg-A-`,
  fn = `Rulq0q4y6GY-`,
  pn = `lfrlL7fm77Q-`,
  mn = 100;
async function hn(e, t, n, r) {
  let i = [];
  for (let t = 0; t < e.length; t += mn) i.push(e.slice(t, t + mn));
  return (
    await Promise.all(
      i.map(async (e) => {
        let i = new URLSearchParams({
          appids: e.join(`,`),
          start: String(t),
          end: String(n),
        });
        r && i.set(`mindiscountpct`, String(r));
        let o = `${a.PARTNER_BASE_URL}discounts/ajaxgetappsdiscountforevent?${i.toString()}`,
          s = await fetch(o, { credentials: `include` });
        if (!s.ok) throw Error(`${o} answered ${s.status}`);
        let c = await s.json();
        if (c.success != 1)
          throw Error(c.msg || `${o} answered EResult ${c.success}`);
        return c.apps ?? [];
      }),
    )
  ).flat();
}
function gn(e, t, n, r) {
  let i = Array.from(new Set(e))
      .filter((e) => e > 0)
      .sort((e, t) => e - t),
    { data: a } = Ze({
      queryKey: [`useAppsDiscountForEvent`, i, t, n, r ?? 0],
      queryFn: () => hn(i, t, n, r),
      enabled: t > 0 && n > t && i.length > 0,
    });
  return J.useMemo(() => a && new Map(a.map((e) => [e.appid, e])), [a]);
}
var _n = class e {
  m_rgOptIns;
  m_rgOptInComputed = new Map();
  static async Construct() {
    let t = new e();
    return (await t.Init(), t);
  }
  async Init() {
    let t = l(`publisherid`, `application_config`),
      n = t > 0 ? `?publisherid=${t}` : ``,
      r = await fetch(`${a.PARTNER_BASE_URL}/optin/ajaxoptinsfordashboard${n}`);
    try {
      ((this.m_rgOptIns = await r.json()),
        this.m_rgOptIns && e.ExtractOptInDefinitions(this.m_rgOptIns));
    } catch {
      this.m_rgOptIns = {};
    }
  }
  static ExtractOptInDefinitions(e) {
    for (let t of Object.keys(e)) {
      let n = e[t].description,
        r = it(n?.jsondata);
      (delete n?.jsondata, r && (e[t].description.definition = r));
    }
  }
  GetOptInNames() {
    return Object.keys(this.m_rgOptIns ?? {});
  }
  GetInfo(e) {
    if (!e) return;
    if (this.m_rgOptInComputed.has(e)) return this.m_rgOptInComputed.get(e);
    let t = this.m_rgOptIns?.[e];
    if (!t) {
      this.m_rgOptInComputed.set(e, void 0);
      return;
    }
    let n = new Set(t.invited_appids),
      r = t.description.definition.invitation_only
        ? t.summary?.apps_eligible.filter((e) => n.has(e.appid))
        : t.summary?.apps_eligible,
      i = {
        description: t.description,
        rgEligibleApps: r,
        rgRegisteredApps: t.summary?.apps_in,
        rgFeaturedApps: t.featured_appids,
        rgInvitedAppIDs: t.invited_appids ?? [],
        mapDiscountStatus: t.discount_status
          ? new Map(
              Object.entries(t.discount_status).map(([e, t]) => [Number(e), t]),
            )
          : void 0,
      };
    return (this.m_rgOptInComputed.set(e, i), i);
  }
};
function vn() {
  return Ze({
    queryKey: [`DashboardOptInStore`],
    queryFn: () => _n.Construct(),
    staleTime: 1 / 0,
  }).data;
}
function yn(e) {
  return vn()?.GetInfo(e);
}
function bn() {
  return J.useMemo(() => {
    let e = l(`rgPartnerDashboardAssets`, `application_config`);
    return e
      ? Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map())
      : new Map();
  }, []);
}
function xn(e) {
  let t = $(),
    n = vn(),
    r = J.useMemo(() => {
      let r = l(`rgPartnerPromotions`, `application_config`),
        i = r?.rgPlans
          ?.map((e) => it(e.partner_readonly_jsondata))
          .filter((e) => e && e.id),
        a = r?.rgPlans
          ?.map((e) => ({ plan: e, input: it(e.input_jsondata) }))
          .filter((e) => !!e.input)
          .reduce((e, t) => e.set(t.plan.promotion_id, t.input), new Map()),
        o = new Set(r?.rgHiddenPlanIDs ?? []);
      return (
        i
          ?.map((r) => {
            if (!r.start_date || (new Date(r.end_date * 1e3) < t && !Z(t, r)))
              return null;
            let i = a.get(r.id);
            if (
              (r.type == `assetrequest` &&
                new Date(r.start_date * 1e3) < t &&
                i?.enable_input &&
                i.submitting_accountid) ||
              (r.type == `launchtracking` && !i?.enable_input)
            )
              return null;
            let s = n?.GetInfo(r.opt_in_id),
              c = r.type == `assetrequest` && i && !i.enable_input,
              l =
                o.has(r.id) ||
                ((r.type == `nextfest` || r.type == `themesale`) && n && !s) ||
                c,
              u = (r.type == `nextfest` || r.type == `themesale`) && !n,
              d =
                r.type != `seasonalsale` &&
                s &&
                s.rgEligibleApps &&
                s.rgEligibleApps.length == 0 &&
                s.rgRegisteredApps &&
                s.rgRegisteredApps.length == 0;
            return new Sn(
              r.id,
              e,
              l,
              r,
              i,
              s,
              new Date(r.start_date * 1e3),
              new Date(r.end_date * 1e3),
              `event`,
              Cn(t, r),
              u,
              d,
              wn,
              Tn,
            );
          })
          .filter((e) => !!e) ?? []
      );
    }, [t, n, e]),
    i = Kn(e);
  return J.useMemo(() => [...r, ...i], [r, i]);
}
var Sn = class {
  m_changedCallbacks = new f();
  m_partnerId;
  m_plan;
  m_assetInput;
  m_optIn;
  id;
  title;
  startDate;
  endDate;
  eventType;
  eventTypeName;
  valveOnly;
  editURL;
  loading = !1;
  dimmed = !1;
  getElement;
  getCapsuleElement;
  constructor(e, t, n, r, i, o, s, c, l, u, d, f, p, m) {
    ((this.m_partnerId = t),
      (this.valveOnly = n),
      (this.m_plan = r),
      (this.m_assetInput = i),
      (this.m_optIn = o),
      (this.id = e),
      (this.title = Gn(r.name, r.type, o, r.start_date)),
      (this.startDate = s),
      (this.endDate = c),
      (this.eventType = l),
      (this.eventTypeName = u),
      (this.editURL = `${a.PARTNER_BASE_URL}promotion/planning/edit/${this.m_plan.id}`),
      (this.loading = d),
      (this.dimmed = f),
      (this.getElement = () => p({ eventData: this })),
      (this.getCapsuleElement = () => m?.({ eventData: this })));
  }
  passesFilter = (e) => e == 1;
  dataChanged() {
    this.m_changedCallbacks.Dispatch();
  }
  registerForChange(e) {
    return this.m_changedCallbacks.Register(e);
  }
  clone(e, t, n, r, i) {
    let a = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return (
      (a.m_changedCallbacks = new f()),
      (a.id = e),
      (a.startDate = t),
      (a.endDate = n),
      (a.eventType = r),
      (a.eventTypeName = i),
      a
    );
  }
};
o([p], Sn.prototype, `dataChanged`, null);
function Cn(e, t) {
  if (Z(e, t))
    return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_recap`);
  switch (t.type) {
    case `midweek`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_midweek`);
    case `weekenddeal`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_weekenddeal`);
    case `saleevent`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_saleevent`);
    case `themesale`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_themesale`);
    case `nextfest`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_nextfest`);
    case `seasonalsale`:
      return B(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_seasonalsale`,
      );
    case `informational`:
      return B(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_informational`,
      );
    case `launchtracking`:
      return B(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_launchtracking`,
      );
    case `dailydeal`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_dailydeal`);
    case `vacation`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_vacation`);
    case `important`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_important`);
    case `preload`:
      return B(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_preload`);
    case `assetrequest`:
      return B(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest`,
      );
  }
}
function Z(e, t) {
  return (
    t.type == `nextfest` && new Date(t.end_date * 1e3).getTime() < e.getTime()
  );
}
function wn(e) {
  let { eventData: t } = e;
  return Z($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, Y.jsx)(Mn, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, Y.jsx)(On, { eventData: t })
      : (0, Y.jsx)(En, { eventData: t });
}
function Tn(e) {
  let { eventData: t } = e;
  return Z($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, Y.jsx)(Pn, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, Y.jsx)(kn, { eventData: t })
      : (0, Y.jsx)(Dn, { eventData: t });
}
function En(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = G(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [i] = G(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    o = r ?? i,
    s = t.m_plan.type == `seasonalsale`;
  jn(t);
  let c =
      n.type == `seasonalsale`
        ? `${a.PARTNER_BASE_URL}doc/marketing/discounts/seasonalsales`
        : void 0,
    l = o?.GetAssets().GetHeaderURL();
  c ??= o ? a.PARTNER_BASE_URL + `apps/landing/` + o.GetAppID() : null;
  let d = u(a.LANGUAGE),
    { eventModel: f, bLoading: p } = W(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  ((l ??= !p && f?.GetImageURL(`capsule`, d, U.capsule_main)),
    (c ??= !p && Qe(f)));
  let m = [];
  t.valveOnly &&
    (n.type != `seasonalsale` &&
      t.m_partnerId &&
      !t.m_plan.store_item_id &&
      !t.m_plan.discount_event_id &&
      m.push(
        `In order to be visible to partners, plans must have access through a linked store item or a discount event.`,
      ),
    n.type == `assetrequest` &&
      t.m_assetInput &&
      !t.m_assetInput.enable_input &&
      m.push(
        `Asset request with "Enable requesting featuring assets from partner" disabled.`,
      ));
  let h =
      n.discount_event_id && !t.m_assetInput?.enable_input
        ? `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${n.discount_event_id}`
        : void 0,
    g = (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(L, {
          url: h,
          children: B(
            `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
          ),
        }),
        s &&
          (0, Y.jsx)(L, {
            url: c,
            children: B(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
        (0, Y.jsx)(L, {
          url: n.asset_kit_url,
          children: B(`#Dashboard_UpcomingEvents_Events_OptIn_Button_AssetKit`),
        }),
      ],
    }),
    _ = ot(n);
  return (0, Y.jsxs)(F, {
    dimmed: t.dimmed,
    backgroundColor: _,
    hasImage: !!l,
    children: [
      (0, Y.jsx)(Fn, {
        warnings: m,
        eventName: t.title,
        startTime: n.start_date,
        endTime: n.end_date,
        eventUrl: c,
        imageUrl: l,
        additionalButtons: g,
        bigName: s,
      }),
      (0, Y.jsx)(In, { eventData: t }),
    ],
  });
}
function Dn(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = G(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [i] = G(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    o = (r ?? i)?.GetAssets().GetHeaderURL(),
    s = u(a.LANGUAGE),
    { eventModel: c, bLoading: l } = W(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  return (
    (o ??= !l && c?.GetImageURL(`capsule`, s, U.capsule_main)),
    (0, Y.jsx)(z, { imageUrl: o })
  );
}
function On(e) {
  let { eventData: t } = e,
    n = u(a.LANGUAGE),
    r = t.m_plan,
    i = t.m_optIn,
    o = r.opt_in_id
      ? `${a.PARTNER_BASE_URL}optin/sale/${r.opt_in_id?.replace(`sale_`, ``)}`
      : void 0,
    s = [];
  t.valveOnly &&
    ((r.sale_clan_account && r.sale_clan_event_gid) || s.push(`no sale event`),
    r.opt_in_id || s.push(`no opt-in`));
  let c;
  if (r.type == `nextfest` && t.eventType == `deadline`) {
    let e = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(
      new Date(t.m_optIn.description.definition.optin_deadline_date * 1e3),
    );
    c = (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`div`, {
          className: an,
          children: B(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses`,
            e,
          ),
        }),
        (0, Y.jsx)(`div`, {
          children: B(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses_Description`,
          ),
        }),
      ],
    });
  }
  (An(t), jn(t));
  let l = i?.description.start_date ?? r.start_date,
    d = i?.description.end_date ?? r.end_date,
    f = i?.description?.definition?.localized_optin_banner?.[a.LANGUAGE],
    p = i?.description.opt_in_name && f && ee(i?.description.opt_in_name, n, f),
    m = bn().get(`optin_placeholder_banner`),
    h = p ?? m,
    g = p ? void 0 : at(r.id),
    _ = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    v = J.useMemo(
      () => rt(_(i?.rgEligibleApps, !1), _(i?.rgRegisteredApps, !0)),
      [i?.rgEligibleApps, i?.rgRegisteredApps],
    ),
    y = v?.length > 0;
  return (0, Y.jsxs)(F, {
    buttonPosition: y ? `bottom` : void 0,
    backgroundImageUrl: h,
    backgroundColor: g,
    dimmed: t.dimmed,
    children: [
      (0, Y.jsx)(Fn, {
        warnings: s,
        eventName: t.title,
        eventDescription: c,
        startTime: l,
        endTime: d,
        eventUrl: o,
        inlineDate: !0,
      }),
      i &&
        (0, Y.jsx)(Ln, {
          eventData: t,
          eventUrl: o,
          optIn: i,
          invitedAndRegisteredApps: v,
        }),
    ],
  });
}
function kn(e) {
  let { eventData: t } = e,
    n = u(a.LANGUAGE),
    r = t.m_optIn,
    i = r?.description?.definition?.localized_optin_banner?.[a.LANGUAGE],
    o = r?.description.opt_in_name && i && ee(r?.description.opt_in_name, n, i);
  return (0, Y.jsx)(z, { imageUrl: o });
}
function An(e) {
  let t = $(),
    n = Di();
  J.useEffect(() => {
    let r;
    if (
      !e.id.endsWith(`_nextfestDeadline`) &&
      e.m_plan.type == `nextfest` &&
      e.m_optIn?.description.definition.optin_deadline_date &&
      e.m_optIn.rgEligibleApps?.length > 0 &&
      e.m_optIn.rgRegisteredApps
    ) {
      let i = new Date(
        e.m_optIn.description.definition.optin_deadline_date * 1e3,
      );
      if (i && i > t) {
        let t = e.clone(
          e.id + `_nextfestDeadline`,
          i,
          i,
          `deadline`,
          B(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_registration_reminder`,
          ),
        );
        ((t.getElement = () => (0, Y.jsx)(On, { eventData: t })),
          (r = n.AddAdditionalEvent(t)));
      }
    }
    return r;
  }, [t, n, e]);
}
function jn(e) {
  let t = Di(),
    n =
      (e.m_plan.type == `seasonalsale` || e.m_plan.type == `themesale`) &&
      e.eventType != `deadline` &&
      e.eventType != `deadline-urgent` &&
      e.m_optIn?.description?.opt_in_name &&
      e.m_optIn.rgEligibleApps &&
      e.m_optIn.rgRegisteredApps &&
      e.m_optIn.rgFeaturedApps &&
      e.m_optIn.description.definition.additional_featuring_section_enabled,
    r = Wn(
      J.useMemo(
        () =>
          e.m_optIn?.rgRegisteredApps?.map((e) => ({
            appid: e.appid,
            appName: e.app_name,
          })) ?? [],
        [e.m_optIn?.rgRegisteredApps],
      ),
      e.m_plan.start_date,
      e.m_plan.end_date,
    ),
    i = Ei(),
    a = $(),
    o = i.setManageDiscountsAppIDs;
  J.useEffect(() => {
    if (!n || !(e.m_optIn?.rgFeaturedApps?.length > 0)) return;
    let i = [];
    for (let n of rt(e.m_optIn.rgEligibleApps, e.m_optIn.rgRegisteredApps)) {
      if (!e.m_optIn?.rgFeaturedApps.includes(n.appid) || !o?.has(n.appid))
        continue;
      let s = e.m_optIn.rgRegisteredApps?.some((e) => e.appid == n.appid),
        c = r?.some((e) => e.appid == n.appid);
      if (!s) {
        if (e.m_optIn.description.definition.collect_trailer_permissions) {
          let r = new Date(
            e.m_optIn.description.definition.collect_demo_deadline * 1e3,
          );
          if (r > a) {
            let a = e.clone(
              e.m_plan.id + `_featuredTrailerDeadline_` + n.appid,
              r,
              r,
              `deadline`,
              B(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailer_Header`,
              ),
            );
            ((a.getElement = () =>
              (0, Y.jsx)(Vn, {
                eventData: a,
                appId: n.appid,
                registerByDate: r,
                registrationType:
                  e.m_plan.type == `seasonalsale`
                    ? `trailer-seasonalsale`
                    : `trailer-themesale`,
              })),
              i.push(t.AddAdditionalEvent(a)));
          }
        }
        if (e.m_plan.type == `seasonalsale`) {
          let r = new Date(
            e.m_optIn.description.definition.optin_deadline_date * 1e3,
          );
          if (r > a) {
            let a = e.clone(
              e.m_plan.id + `_featuredRegistrationDeadline_` + n.appid,
              r,
              r,
              `deadline-urgent`,
              B(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Header`,
              ),
            );
            ((a.getElement = () =>
              (0, Y.jsx)(Vn, {
                eventData: a,
                appId: n.appid,
                registerByDate: r,
                registrationType: `registration`,
              })),
              i.push(t.AddAdditionalEvent(a)));
          }
        }
      } else if (!c && e.m_plan.type == `seasonalsale`) {
        let r = new Date(
            e.m_optIn.description.definition.optin_deadline_date * 1e3,
          ),
          o = new Date(e.m_plan.start_date * 1e3);
        if (r > a && o > a) {
          let a = e.clone(
            e.m_plan.id + `_featuredDiscountDeadline_` + n.appid,
            o,
            o,
            `deadline-urgent`,
            B(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Header`,
            ),
          );
          ((a.getElement = () =>
            (0, Y.jsx)(Vn, {
              eventData: a,
              appId: n.appid,
              registerByDate: r,
              registrationType: `discount`,
            })),
            i.push(t.AddAdditionalEvent(a)));
        }
      }
    }
    return i.length > 0 ? () => i.forEach((e) => e()) : void 0;
  }, [a, t, n, e, e.m_optIn?.rgFeaturedApps, r, o]);
}
function Mn(t) {
  let { eventData: n } = t,
    r = u(a.LANGUAGE),
    i = n.m_plan,
    { eventModel: o, bLoading: s } = W(
      i.sale_clan_account,
      i.sale_clan_event_gid,
    ),
    l = A(i.opt_in_id, n.m_partnerId),
    d = !s && o?.GetImageURL(`capsule`, r, U.capsule_main),
    f = !s && Qe(o),
    p = i.opt_in_id?.startsWith(`sale_nextfest_`)
      ? `${a.PARTNER_BASE_URL}recap/nextfest/${i.opt_in_id.substring(14)}/${n.m_partnerId}`
      : void 0,
    h = Di(),
    g = yn(i.opt_in_id),
    _ = J.useMemo(
      () => m(l.data?.appIdsWithoutPermissions ?? []),
      [l.data?.appIdsWithoutPermissions],
    ),
    v = J.useMemo(() => {
      if (l.isLoading || !l.isSuccess) return null;
      let e = l.data.stats?.reduce(
        (e, t) => (t.rt_last_update_time > e ? t.rt_last_update_time : e),
        0,
      );
      if (!(e && e > i.end_date)) return null;
      let t =
          l.data.stats?.filter((t) => e != 0 && t.rt_last_update_time == e) ??
          [],
        n = t.reduce((e, t) => e + t.demo_player_count, 0),
        r = t.reduce((e, t) => e + t.wishlist_count, 0),
        a = t.reduce((e, t) => e + t.player_wishlist_count, 0),
        o = t.reduce(
          (e, t) =>
            t.demo_player_count >= e.count
              ? { count: t.demo_player_count, appId: t.appid }
              : e,
          { count: 0, appId: 0 },
        ).appId;
      return {
        nGamesWithStatsCount: t.length,
        nDemoPlayers: n,
        nWishlists: r,
        nConversions: a,
        nMostPopularAppId: o,
      };
    }, [i.end_date, l.data, l.isLoading, l.isSuccess]),
    y =
      v?.nMostPopularAppId > 0
        ? v.nMostPopularAppId
        : _.length > 0
          ? Math.max(..._)
          : 0,
    b = g?.rgRegisteredApps?.find((e) => e.appid == y)?.jsondata,
    x = b && JSON.parse(b),
    S = x && !x.survey_response?.some((t) => t.accountid == e.accountid),
    C = (v?.nGamesWithStatsCount ?? 0) + _.length;
  if (
    (J.useEffect(() => {
      l.isLoading ||
        i.id.startsWith(`fakerecap_`) ||
        (l.isSuccess
          ? C == 0 && !S && h.SetHidden(i.id, !0)
          : h.SetHidden(i.id, !0));
    }, [h, S, C, i.id, l.isLoading, l.isSuccess]),
    l.isLoading)
  )
    return (0, Y.jsx)(ut, {});
  if (C == 0 && !S && !i.id.startsWith(`fakerecap_`)) return;
  let w = `${a.PARTNER_BASE_URL}optin/survey/${i.opt_in_id}/${y}`,
    T = new Intl.NumberFormat(Ue()),
    E = (0, Y.jsx)(`a`, {
      href: `${a.PARTNER_BASE_URL}doc/gettingstarted/managing_users`,
      target: `_blank`,
      children: B(
        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_ViewFinancials`,
      ),
    });
  return (0, Y.jsxs)(`div`, {
    className: fn,
    children: [
      v &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            d &&
              (0, Y.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, Y.jsx)(ct, {
                  href: f,
                  target: `_blank`,
                  children: (0, Y.jsx)(`img`, { src: d }),
                }),
              }),
            (0, Y.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: B(
                    `#Dashboard_UpcomingEvents_RecapNextFest_TextHeader`,
                  ),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: He(
                            `#Dashboard_UpcomingEvents_RecapNextFest_TextGameCount`,
                            C,
                            (0, Y.jsx)(`b`, {}),
                          ),
                        }),
                        _.length > 0 &&
                          (0, Y.jsx)(`div`, {
                            className: `vQDiNX1PMEc-`,
                            children: Ge(
                              `#Dashboard_UpcomingEvents_RecapNextFest_PartialStats_TextGameCount`,
                              _.length,
                              E,
                            ),
                          }),
                      ],
                    }),
                    p && (0, Y.jsx)(Nn, { summaryURL: p }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nDemoPlayers),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    B(`#Recap_NextFest_TotalPlayers`),
                    (0, Y.jsx)(H, {
                      tooltip: B(`#Recap_NextFest_TotalPlayers_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `t245vD54MCk-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nConversions),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    B(`#Recap_NextFest_PlayerWishlist`),
                    (0, Y.jsx)(H, {
                      tooltip: B(`#Recap_NextFest_PlayerWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nWishlists),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    B(`#Recap_NextFest_TotalWishlist`),
                    (0, Y.jsx)(H, {
                      tooltip: B(`#Recap_NextFest_TotalWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      !v &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            d &&
              (0, Y.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, Y.jsx)(ct, {
                  href: f,
                  target: `_blank`,
                  children: (0, Y.jsx)(`img`, { src: d }),
                }),
              }),
            (0, Y.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: B(
                    `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextHeader`,
                  ),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: He(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextGameCount`,
                            C,
                            (0, Y.jsx)(`b`, {}),
                          ),
                        }),
                        (0, Y.jsx)(`div`, {
                          className: `vQDiNX1PMEc-`,
                          children: Le(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_NeedPermission`,
                            E,
                          ),
                        }),
                      ],
                    }),
                    p && (0, Y.jsx)(Nn, { summaryURL: p }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(C),
                }),
                (0, Y.jsx)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: B(`#Recap_NextFest_Apps`),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `t245vD54MCk-`, `_8cesVkktgoE-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    B(`#Recap_NextFest_PlayerWishlist`),
                    (0, Y.jsx)(H, {
                      tooltip: B(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: c(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`, `_8cesVkktgoE-`),
              children: [
                (0, Y.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    B(`#Recap_NextFest_TotalWishlist`),
                    (0, Y.jsx)(H, {
                      tooltip: B(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      S &&
        (0, Y.jsxs)(`div`, {
          className: `mk9nXNBQ26s-`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `cGkFh39raGs-`,
              children: B(`#Dashboard_UpcomingEvents_RecapNextFest_SurveyText`),
            }),
            (0, Y.jsx)(`button`, {
              className: `C-YKebzP5wE-`,
              onClick: () => window.open(w, `_blank`),
              children: B(
                `#Dashboard_UpcomingEvents_RecapNextFest_SurveyButton`,
              ),
            }),
          ],
        }),
    ],
  });
}
function Nn(e) {
  return (0, Y.jsx)(`button`, {
    className: pn,
    onClick: () => window.open(e.summaryURL, `_blank`),
    children: B(`#Dashboard_UpcomingEvents_RecapNextFest_TextFullSummary`),
  });
}
function Pn(e) {
  let { eventData: t } = e,
    n = u(a.LANGUAGE),
    r = t.m_plan,
    { eventModel: i, bLoading: o } = W(
      r.sale_clan_account,
      r.sale_clan_event_gid,
    ),
    s = !o && i?.GetImageURL(`capsule`, n, U.capsule_main);
  return (0, Y.jsx)(z, { imageUrl: s });
}
function Fn(e) {
  let {
    eventName: t,
    eventDescription: n,
    eventUrl: r,
    startTime: i,
    endTime: a,
    warnings: o,
    imageUrl: s,
    additionalButtons: c,
    inlineDate: l,
    bigName: u,
  } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(C, { imageUrl: s, url: r }),
      (0, Y.jsxs)(D, {
        hasImage: !!s,
        children: [
          (0, Y.jsxs)(O, {
            inlineDate: l,
            children: [
              (0, Y.jsx)(R, { text: t, url: r, large: u }),
              (0, Y.jsx)(N, {
                startTimestamp: i,
                endTimestamp: a,
                largeDate: l,
              }),
            ],
          }),
          n,
          o?.length > 0 &&
            (0, Y.jsx)(`div`, {
              className: `uwc0Vnfl-mQ-`,
              children: o.join(`, `),
            }),
        ],
      }),
      c && (0, Y.jsx)(I, { children: c }),
    ],
  });
}
function In(e) {
  let { eventData: t } = e,
    n = t.m_plan.id
      ? `${a.PARTNER_BASE_URL}promotion/assetportal/request/${t.m_plan.id}`
      : void 0,
    r = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    i =
      t.m_plan.start_date &&
      r.format(re(void 0, t.m_plan.start_date, `partner`) * 1e3),
    o = t.m_plan,
    [s] = G(o.store_item_id, o.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    c = Wn(
      J.useMemo(
        () => (s ? [{ appid: s.GetAppID(), appName: s.GetName() }] : void 0),
        [s],
      ),
      o.start_date,
      o.end_date,
    ),
    l = s && o.discount_event_id,
    u = o.discount_event_id
      ? `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${o.discount_event_id}`
      : void 0,
    d = Ot(o.discount_event_id),
    f = xe(t.m_plan, t.m_assetInput) > De.k_AwaitingPartner,
    p = !l || c?.length > 0 || d?.length > 0;
  if (t.m_assetInput?.enable_input)
    return (0, Y.jsxs)(P, {
      children: [
        (0, Y.jsx)(_, { complete: f && p, urgent: !0 }),
        (0, Y.jsx)(w, {
          complete: f,
          urgent: !0,
          label: B(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_duedate`,
          ),
          status: i,
          actionStatus: B(
            f
              ? `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button_submitted`
              : `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
          ),
          actionUrl: n,
        }),
        l &&
          (0, Y.jsx)(w, {
            complete: p,
            urgent: !0,
            label: B(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: i,
            actionStatus: B(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: u,
          }),
      ],
    });
}
function Ln(e) {
  let { eventData: t, eventUrl: n, optIn: r, invitedAndRegisteredApps: i } = e,
    o = t.m_plan,
    s = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    c = Wn(
      J.useMemo(
        () =>
          r?.rgRegisteredApps?.map((e) => ({
            appid: e.appid,
            appName: e.app_name,
          })) ?? [],
        [r?.rgRegisteredApps],
      ),
      o.start_date,
      o.end_date,
    ),
    l = J.useMemo(
      () =>
        c?.length &&
        (0, Y.jsx)(`div`, {
          className: `-rKdDl3YL68-`,
          children: c
            .sort((e, t) => e.appName.localeCompare(t.appName))
            .map((e) =>
              (0, Y.jsx)(
                `div`,
                { children: `${e.appName} (${Hn(e.discount)})` },
                e.appid,
              ),
            ),
        }),
      [c],
    ),
    u = i?.length > 0,
    d = Ei().setManageDiscountsAppIDs,
    f = i?.some((e) => d.has(e.details.appid)),
    p =
      o.discount_event_id && f
        ? `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${o.discount_event_id}`
        : void 0,
    m = p && c,
    h = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    g =
      t.eventType != `deadline` &&
      r.description.definition.optin_deadline_date &&
      r.description.definition.event_start_date -
        r.description.definition.optin_deadline_date >
        V.PerDay &&
      h.format(r.description.definition.optin_deadline_date * 1e3);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      u &&
        (0, Y.jsxs)(P, {
          children: [
            (0, Y.jsx)(zn, {
              text: B(`#Dashboard_UpcomingEvents_Events_OptIn_EligibleGames`),
              count: i.length,
              tooltip: (0, Y.jsx)(Bn, { apps: i }),
            }),
            (0, Y.jsx)(zn, {
              text: B(`#Dashboard_UpcomingEvents_Events_OptIn_RegisteredGames`),
              count: r.rgRegisteredApps?.length ?? 0,
              tooltip: (0, Y.jsx)(Bn, { apps: s(r.rgRegisteredApps, !1) }),
            }),
            (0, Y.jsx)(zn, {
              text: B(`#Dashboard_UpcomingEvents_Events_OptIn_Discounted`),
              count: c?.length ?? 0,
              tooltip: l,
              hidden: !m,
            }),
            (0, Y.jsx)(Rn, { optIn: r }),
          ],
        }),
      (0, Y.jsxs)(I, {
        children: [
          g &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(`div`, {
                  className: `_9XfxKPtGXL4-`,
                  children: B(
                    `#Dashboard_UpcomingEvents_Events_OptIn_Deadline`,
                  ),
                }),
                (0, Y.jsx)(`div`, { className: `l-kYUyPKii4-`, children: g }),
              ],
            }),
          (0, Y.jsx)(L, {
            url: n,
            children: B(
              u
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_EligibleGames`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
          (0, Y.jsx)(L, {
            url: p,
            children: B(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
          }),
        ],
      }),
    ],
  });
}
function Rn(e) {
  let { optIn: t } = e,
    n = $(),
    r =
      t.rgRegisteredApps?.filter((e) => e.demo_build_review_requested === !1) ??
      [];
  if (!r.length) return null;
  let i = t.description.definition,
    o =
      (i.event_start_date ?? t.description.start_date) * 1e3 - n.getTime() <
      14 * V.PerDay * 1e3,
    s = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    c =
      i.rtime_nextfest_press_preview_submit &&
      s.format(i.rtime_nextfest_press_preview_submit * 1e3),
    l =
      i.rtime_nextfest_all_items_submit &&
      s.format(i.rtime_nextfest_all_items_submit * 1e3),
    u;
  return (
    c && l
      ? (u = B(
          `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadlines_Both`,
          c,
          l,
        ))
      : c
        ? (u = B(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_PressPreview`,
            c,
          ))
        : l &&
          (u = B(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_AllItems`,
            l,
          )),
    (0, Y.jsx)(`div`, {
      className: dn,
      children: r.map((e) =>
        (0, Y.jsx)(
          w,
          {
            complete: !1,
            urgent: o,
            label: B(
              e.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NotSubmitted`
                : `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NoDemo`,
              e.app_name,
            ),
            status: u,
            tooltip: B(
              `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Tooltip`,
            ),
            actionStatus: B(
              e.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_SubmitBuild`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_CreateDemo`,
            ),
            actionUrl: `${a.PARTNER_BASE_URL}apps/demo/${e.appid}`,
          },
          e.appid,
        ),
      ),
    })
  );
}
function zn(e) {
  let { text: t, count: n, tooltip: r, hidden: i } = e;
  return (0, Y.jsx)(Ke, {
    toolTipContent: r,
    children: (0, Y.jsxs)(`div`, {
      className: c(on, i && `itI76HUd-GU-`),
      children: [
        (0, Y.jsx)(`div`, { className: sn, children: t }),
        (0, Y.jsx)(`div`, { className: cn, children: n }),
      ],
    }),
  });
}
function Bn(e) {
  let { apps: t } = e;
  if (!t?.length) return;
  let n = t.sort((e, t) =>
    e.details.app_name.localeCompare(t.details.app_name),
  );
  return (0, Y.jsx)(`div`, {
    className: ln,
    children: n.map((e) =>
      (0, Y.jsx)(
        `div`,
        {
          children: e.bRegistered
            ? Le(
                `#Dashboard_UpcomingEvents_Events_OptIn_GameRegistered`,
                e.details.app_name,
                (0, Y.jsx)(`span`, {
                  className: un,
                  children: B(
                    `#Dashboard_UpcomingEvents_Events_OptIn_GameRegisteredText`,
                  ),
                }),
              )
            : e.details.app_name,
        },
        e.details.appid,
      ),
    ),
  });
}
function Vn(e) {
  let { eventData: t, appId: n, registerByDate: r, registrationType: i } = e,
    o = u(a.LANGUAGE),
    s = t.m_plan,
    l = t.m_optIn,
    [d] = G(n, 0, { include_basic_info: !0, include_assets: !0 }),
    f = d?.GetAssets().GetHeaderURL(),
    p = d ? a.PARTNER_BASE_URL + `apps/landing/` + d.GetAppID() : null,
    m = `${a.PARTNER_BASE_URL}optin/sale/${s.opt_in_id?.replace(`sale_`, ``)}`,
    h = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }),
    g = h.format(r),
    v =
      i == `trailer-seasonalsale` || i == `trailer-themesale`
        ? g
        : h.format(new Date(l?.description.start_date * 1e3)),
    y = J.useMemo(() => {
      let e = t.m_optIn.rgRegisteredApps.find((e) => e.appid == n);
      return e ? [e] : [];
    }, [t.m_optIn.rgRegisteredApps, n]),
    b = y?.length > 0,
    x = s.discount_event_id
      ? `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${s.discount_event_id}`
      : void 0,
    S =
      Wn(
        J.useMemo(
          () => y?.map((e) => ({ appid: e.appid, appName: e.app_name })) ?? [],
          [y],
        ),
        s.start_date,
        s.end_date,
      )?.length > 0,
    T = l?.description?.definition?.localized_optin_banner?.[a.LANGUAGE],
    E = l?.description.opt_in_name && T && ee(l?.description.opt_in_name, o, T),
    O = b && S,
    k = t.eventType == `deadline-urgent`,
    A = null,
    j = null,
    M = null;
  switch (i) {
    case `trailer-seasonalsale`:
      ((A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Title`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Body`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Action`));
      break;
    case `trailer-themesale`:
      ((A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Title`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Body`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Action`));
      break;
    case `registration`:
      ((A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Title`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Body`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`));
      break;
    case `discount`:
      ((A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Title`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Body`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`));
  }
  return (0, Y.jsxs)(F, {
    hasImage: !!f,
    backgroundImageUrl: E,
    dimmed: !0,
    children: [
      (0, Y.jsx)(C, { imageUrl: f, url: p }),
      (0, Y.jsxs)(D, {
        hasImage: !!f,
        children: [
          (0, Y.jsx)(R, { text: B(A, t.title), light: !0 }),
          (0, Y.jsx)(`div`, {
            className: c(an, k && `OSBBoP9InyI-`),
            children: B(j, g),
          }),
        ],
      }),
      (0, Y.jsxs)(P, {
        children: [
          (0, Y.jsx)(_, { complete: O, urgent: k }),
          (0, Y.jsx)(w, {
            complete: b,
            urgent: k,
            label: B(M),
            status: g,
            actionStatus: B(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeatured_Register_Button`,
            ),
            actionUrl: m,
          }),
          (0, Y.jsx)(w, {
            complete: S,
            urgent: k,
            label: B(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: v,
            actionStatus: B(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: x,
          }),
        ],
      }),
    ],
  });
}
function Hn(e) {
  let t = new Intl.DateTimeFormat(navigator.language, {
    month: `numeric`,
    day: `numeric`,
    year: `2-digit`,
  });
  return `${t.format(new Date(e.start_date * 1e3))} - ${t.format(new Date(e.end_date * 1e3))}`;
}
var Un = new Set([1, 7, 8, 9]);
function Wn(e, t, n) {
  let r = gn(
    J.useMemo(() => e?.map((e) => e.appid) ?? [], [e]),
    t,
    n,
  );
  return J.useMemo(
    () =>
      (e ?? [])
        .map((e) => ({
          appid: e.appid,
          appName: e.appName,
          discount: r?.get(e.appid),
        }))
        .filter((e) => e.discount && Un.has(e.discount.status)),
    [e, r],
  );
}
function Gn(e, t, n, r) {
  let i = e;
  if (t == `seasonalsale`) i = k(E(r));
  else {
    let e = n?.description?.definition?.event_title?.[a.LANGUAGE];
    if (e) i = e;
    else
      for (let e of [
        `takeover`,
        `takeunder`,
        `midweek`,
        `midweek deal`,
        `weekend deal`,
      ])
        i = i.replace(RegExp(`^` + e + `\\s*[:-]\\s*`, `i`), ``);
  }
  return i;
}
function Kn(e) {
  let n = $(),
    [r] = lt(`recap`),
    i = J.useCallback(
      (r, i) => {
        let a = new Date(n.getTime() - 5 * V.PerDay * 1e3),
          o = {
            id: `fakerecap_${i}`,
            name: i,
            opt_in_id: r,
            type: `nextfest`,
            sale_clan_account: 39049601,
            sale_clan_event_gid: `4148451028995460854`,
            start_date: a.getTime() / 1e3,
            end_date: a.getTime() / 1e3 + 3 * V.PerDay,
          },
          s = {
            description: {
              opt_in_name: r,
              type: 0,
              active: !0,
              start_date: o.start_date,
              end_date: o.end_date,
              definition: {},
            },
            rgEligibleApps: [],
            rgRegisteredApps: [],
            rgFeaturedApps: [],
          },
          c = new Sn(
            o.id,
            e,
            !1,
            o,
            null,
            s,
            new Date(s.description.start_date * 1e3),
            new Date(s.description.end_date * 1e3),
            `event`,
            Cn(n, o),
            !1,
            !1,
            wn,
            void 0,
          );
        return (t(Z(n, o), ``), c);
      },
      [n, e],
    );
  return J.useMemo(
    () => (r ? Array.from({ length: 1 }, (e, t) => i(r, `${r}_${t}`)) : []),
    [i, r],
  );
}
function qn() {
  return J.useMemo(() => {
    let e = new Date();
    e.setHours(0, 0, 0, 0);
    let t = (t) => {
        let n = new Date();
        return (n.setDate(e.getDate() + t), n);
      },
      n = [
        { title: `Event Recap Foo`, startDate: t(-10), eventType: `event` },
        { title: `Event Recap Bar`, startDate: t(-6), eventType: `event` },
        {
          title: `Live Event Foo`,
          startDate: t(-8),
          endDate: t(2),
          eventType: `event`,
        },
        {
          title: `Live Event Bar`,
          startDate: t(-6),
          endDate: t(4),
          eventType: `event`,
        },
        {
          title: `Team Fortress 2`,
          startDate: t(-1),
          eventType: `release-game`,
        },
        { title: `Dota 2`, startDate: t(0), eventType: `event` },
        {
          title: `Weekend Deal - Portal 2`,
          startDate: t(0),
          eventType: `deadline`,
        },
        {
          title: `Half Life 2 - Episode One`,
          startDate: t(0),
          eventType: `release-dlc`,
        },
        {
          title: `Capitalism and Economy Fest`,
          startDate: t(1),
          eventType: `deadline`,
        },
        {
          title: `Dota Underlords`,
          startDate: t(9),
          eventType: `release-game`,
        },
        { title: `Counter Strike 2`, startDate: t(36), eventType: `event` },
        {
          title: `Steam Next Fest June Edition`,
          startDate: t(36),
          eventType: `event`,
        },
        { title: `The Lab`, startDate: t(36), eventType: `event` },
      ].map((e) => ({
        ...e,
        id: `fake_` + e.title,
        endDate: e.endDate ?? e.startDate,
        eventTypeName: Jn(e.eventType),
        getElement: () =>
          (0, Y.jsx)(`div`, {
            style: { color: `white`, backgroundColor: Yn(e.title, 0.4) },
            children: e.title,
          }),
        getCapsuleElement: () =>
          (0, Y.jsx)(`div`, {
            style: {
              color: `white`,
              backgroundColor: Yn(e.title, 0.4),
              flex: 1,
            },
            children: e.title,
          }),
      })),
      r = 40;
    for (let e = 0; e < 50; e++) {
      let i;
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          i = `deadline`;
          break;
        case 1:
          i = `deadline-urgent`;
          break;
        case 2:
          i = `release-game`;
          break;
        case 3:
          i = `release-dlc`;
          break;
        case 4:
          i = `event`;
      }
      r += Math.random() * 3;
      let a = {
        title: `Generated event` + e,
        startDate: t(r),
        endDate: t(r),
        eventType: i,
        id: `fake_` + e.toString(),
        eventTypeName: Jn(i),
        getElement: () =>
          (0, Y.jsx)(`div`, { children: `Generated event` + e }),
        dimmed: Math.random() > 0.9,
      };
      n.push(a);
    }
    return n;
  }, []);
}
function Jn(e) {
  switch (e) {
    case `deadline`:
      return B(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `deadline-urgent`:
      return B(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `release-game`:
      return B(`#Dashboard_UpcomingEvents_EventType_Release`) + ` (Generated)`;
    case `release-dlc`:
      return (
        B(`#Dashboard_UpcomingEvents_EventType_Release_DLC`) + ` (Generated)`
      );
    case `event`:
      return (
        B(`#Dashboard_UpcomingEvents_EventType_Event_Unknown`) + ` (Generated)`
      );
  }
}
function Yn(e, t) {
  let n = 0;
  for (let t = 0; t < e.length; t++) n = e.charCodeAt(t) + ((n << 5) - n);
  let r = `#`;
  for (let e = 0; e < 3; e++) {
    let i = Math.floor(((n >> (e * 8)) & 255) * t);
    r += (`00` + i.toString(16)).slice(-2);
  }
  return r;
}
var Xn = `s0RrLjURphI-`,
  Zn = `dCyO0rviUmw-`,
  Qn = `v150DClwlAY-`;
function $n() {
  let e = $(),
    t = vn();
  return J.useMemo(() => {
    if (!t) return [];
    let n = er(l(`rgDeadlines`, `application_config`)),
      r = (n ? Array.from(n.entries()) : [])
        .filter(([t, n]) => new Date(n.due_date * 1e3) >= e || tr(n))
        .reduce((e, [t, n]) => {
          let r = K(new Date(n.due_date * 1e3)),
            i = nr(n.type),
            a = i ? `group` : t,
            o = `${r.getTime()}_${n.type}_${a}`,
            s = e.has(o) ? e.get(o).deadlines : [];
          return (
            e.set(o, {
              dueDate: r,
              bSupportsGrouping: i,
              deadlines: [...s, n],
            }),
            e
          );
        }, new Map());
    return (
      Array.from(r.entries()).flatMap(([e, n]) => {
        let { dueDate: r, bSupportsGrouping: i, deadlines: a } = n,
          o = [];
        return (
          i ? o.push(ir(t, a)) : o.push(...a.map((e) => rr(t, e))),
          o
            .filter((e) => !!e)
            .map((t) => ({
              title: t.sTitle,
              startDate: r,
              endDate: r,
              eventType: t.bUrgent ? `deadline-urgent` : `deadline`,
              id: e,
              eventTypeName: t.sHeader,
              getElement: () => t.element,
              getCapsuleElement: () => t.capsuleElement,
              passesFilter: (e) => e == 1,
            }))
        );
      }) ?? []
    );
  }, [e, t]);
}
function er(e) {
  if (e) return Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map());
}
function tr(e) {
  switch (e.type) {
    case 11:
    case 9:
      return !0;
    case 10: {
      let t = e.description_jsondata
        ? JSON.parse(e.description_jsondata)
        : void 0;
      return (
        t?.TemplateName != `F1099MISC-ConsentYes` &&
        t?.TemplateName != `F1042-Consent`
      );
    }
  }
  return !1;
}
function nr(e) {
  return e === 4;
}
function rr(e, t) {
  let n = t.description_jsondata ? JSON.parse(t.description_jsondata) : void 0;
  switch (t.type) {
    case 1:
      return {
        sHeader: `Action Required`,
        sTitle: `Test 1`,
        bUrgent: !0,
        element: (0, Y.jsx)(ar, { deadline: t, json: n }),
      };
    case 3:
      return {
        sHeader: B(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: B(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
        bUrgent: !0,
        element: (0, Y.jsx)(or, { deadline: t, json: n }),
      };
    case 4: {
      let r = e.GetInfo(n?.opt_in_name)?.description.definition.event_title[
        a.LANGUAGE
      ];
      return r
        ? {
            sHeader: B(`#PartnerDeadline_NextFest_PressPreview_Title`),
            sTitle: B(
              `#Deadlines_CombinedTitle`,
              B(`#PartnerDeadline_NextFest_PressPreview_Title`),
              r,
            ),
            element: (0, Y.jsx)(ur, { deadline: t, json: n }),
          }
        : void 0;
    }
    case 5: {
      let r = e.GetInfo(n?.opt_in_name)?.description.definition.event_title[
        a.LANGUAGE
      ];
      return r
        ? {
            sHeader: B(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
            sTitle: B(
              `#Deadlines_CombinedTitle`,
              B(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
              r,
            ),
            bUrgent: !1,
            element: (0, Y.jsx)(dr, { deadline: t, json: n }),
          }
        : void 0;
    }
    case 6: {
      let e = cr(t);
      return {
        sHeader: B(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: B(
          e
            ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
            : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
        ),
        bUrgent: !e,
        element: (0, Y.jsx)(lr, { deadline: t, json: n }),
      };
    }
    case 9:
      return {
        sHeader: B(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        sTitle: B(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        bUrgent: t.due_date < mt.GetTimeNowWithOverride() - 604800,
        element: (0, Y.jsx)(pr, { deadline: t, json: n }),
      };
    case 11:
      return {
        sHeader: ``,
        sTitle: ``,
        bUrgent: !1,
        element: (0, Y.jsx)(hr, { deadline: t, json: n }),
      };
    case 10:
      return {
        sHeader: gr(n?.TemplateName),
        sTitle: _r(n),
        bUrgent: t.due_date < mt.GetTimeNowWithOverride() + 2678400,
        element: (0, Y.jsx)(mr, { deadline: t, json: n }),
        capsuleElement: (0, Y.jsx)(`div`, { className: Qn, children: _r(n) }),
      };
  }
}
function ir(e, t) {
  if (t[0].type === 4) return rr(e, t[0]);
}
function ar(e) {
  let { deadline: t, json: n } = e,
    r = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(t.due_date * 1e3));
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(`div`, { children: [`Name: `, n.name] }),
      (0, Y.jsxs)(`div`, { children: [`Due date: `, r] }),
    ],
  });
}
function or(e) {
  let { deadline: t } = e,
    [n] = G(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${a.PARTNER_BASE_URL}promotion/dailydeals/invite/${t.gid}`,
    i = ce(t?.due_date);
  return (0, Y.jsx)(Q, {
    urgent: !0,
    imageUrl: n?.GetAssets().GetHeaderURL(),
    title: B(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
    body: B(`#PartnerDeadline_InviteExpiring_Body`, i),
    url: r,
    imageTooltip: n?.GetName(),
    rightCol: (0, Y.jsx)(L, { url: r, children: B(`#DailyDeals_PickDate`) }),
  });
}
var sr = 604800;
function cr(e) {
  return e.due_date > mt.GetTimeNowWithOverride() + sr;
}
function lr(e) {
  let { deadline: t } = e,
    [n] = G(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${a.PARTNER_BASE_URL}promotion/assetportal/request/${t.gid}`,
    i = ce(t?.due_date, !0, !0),
    o = cr(t);
  return (0, Y.jsx)(Q, {
    urgent: !o,
    imageUrl: n?.GetAssets().GetHeaderURL(),
    title: B(
      o
        ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
        : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
    ),
    body: B(
      o
        ? `#PartnerDeadline_InviteExpiring_Body_Soft`
        : `#PartnerDeadline_InviteExpiring_Body`,
      i,
    ),
    url: r,
    imageTooltip: n?.GetName(),
    rightCol: (0, Y.jsx)(L, {
      url: r,
      children: B(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
      ),
    }),
  });
}
function ur(e) {
  let { deadline: t, json: n } = e,
    r = yn(n.opt_in_name),
    i = `${a.PARTNER_BASE_URL}optin/sale/${n.opt_in_name.replace(`sale_`, ``)}`;
  return r
    ? (0, Y.jsx)(Q, {
        title: r.description.definition.event_title[a.LANGUAGE],
        body: B(`#PartnerDeadline_NextFest_PressPreview_Body`),
        rightCol: (0, Y.jsx)(L, {
          url: i,
          children: B(`#PartnerDeadline_NextFest_View_Registration`),
        }),
      })
    : null;
}
function dr(e) {
  let { deadline: t, json: n } = e,
    r = yn(n.opt_in_name),
    [i] = G(t?.store_item_id, t?.store_item_type, { include_assets: !0 });
  if (!r || !t?.store_item_id) return null;
  let o = `${a.PARTNER_BASE_URL}apps/demo/${t.store_item_id}`,
    s = `${a.PARTNER_BASE_URL}doc/store/review_process`;
  return (0, Y.jsx)(Q, {
    imageUrl: i?.GetAssets().GetHeaderURL(),
    title: r.description.definition.event_title[a.LANGUAGE],
    body: Be(
      B(
        `#PartnerDeadline_NextFest_DemoBuildReview_Body`,
        i?.GetName() || `(` + t.store_item_id + `)`,
      ),
      (0, Y.jsx)(`a`, { href: s }),
    ),
    rightCol: (0, Y.jsx)(L, {
      url: o,
      children: B(`#PartnerDeadline_NextFest_View_Registration`),
    }),
  });
}
var fr = { include_assets: !0 };
function pr(e) {
  let { deadline: t, json: n } = e,
    [r] = gt(t.store_item_id, fr),
    i = kt(t.store_item_id)?.find(
      (e) => e.milestone_id == Number.parseInt(t.gid),
    ),
    o = ze.GetTokenWithFallback(i?.title),
    s = `${a.PARTNER_BASE_URL}admin/game/editbyappid/${t.store_item_id}?activetab=tab_specialsettings#seasonpass`,
    c = `${a.PARTNER_BASE_URL}apps/landing/${t.store_item_id}`;
  return (0, Y.jsx)(Q, {
    imageUrl: r?.GetAssets().GetSmallCapsuleURL(),
    title: B(
      `#PartnerDeadline_SeasonPass_DLC`,
      r?.GetName() || `(` + t.store_item_id + `)`,
    ),
    body: B(`#PartnerDeadline_SeasonPass_Desc`, o || t.gid),
    rightCol: (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(L, {
          url: s,
          children: B(`#PartnerDeadline_SeasonPass_OpenEditor`),
        }),
        (0, Y.jsx)(L, {
          url: c,
          children: B(`#DiscountDashboard_VisitAppLanding_Tooltip`),
        }),
      ],
    }),
  });
}
function mr(e) {
  let { deadline: t, json: n } = e,
    r = ce(t?.due_date, !0, !0),
    i = `${a.PARTNER_BASE_URL}taxrequirement/view/${t.partnerid}/${t.gid}`,
    o = yr(),
    s = vr(n, r);
  return (
    o ||
      (s += ` ` + B(`#PartnerDeadline_TaxRequirement_ActualAuthorityRequired`)),
    (0, Y.jsx)(Q, {
      title: _r(n),
      body: s,
      rightCol: (0, Y.jsx)(L, {
        url: i,
        children: B(`#PartnerDeadline_TaxRequirement_ButtonViewDetails`),
      }),
    })
  );
}
function hr(e) {
  let { deadline: t, json: n } = e,
    r = `${a.PARTNER_BASE_URL}kycrequirement/view/${t.partnerid}/${t.gid}`,
    i = yr(),
    o = `You have a KYC requirement`;
  return (
    i ||
      (o += ` ` + B(`#PartnerDeadline_TaxRequirement_ActualAuthorityRequired`)),
    (0, Y.jsx)(Q, {
      title: `KYC Requirement`,
      body: o,
      rightCol: (0, Y.jsx)(L, {
        url: r,
        children: B(`#PartnerDeadline_TaxRequirement_ButtonViewDetails`),
      }),
    })
  );
}
function Q(e) {
  let {
    imageUrl: t,
    title: n,
    body: r,
    imageTooltip: i,
    url: a,
    rightCol: o,
    urgent: s,
  } = e;
  return (0, Y.jsxs)(F, {
    hasImage: !!t,
    children: [
      (0, Y.jsx)(C, { imageUrl: t, url: a, tooltip: i }),
      (0, Y.jsxs)(D, {
        hasImage: !!t,
        children: [
          (0, Y.jsx)(R, { text: n }),
          (0, Y.jsx)(`div`, { className: s ? Zn : Xn, children: r }),
        ],
      }),
      o && (0, Y.jsx)(I, { children: o }),
    ],
  });
}
function gr(e) {
  switch (e) {
    case `Freeform`:
    case `Freeform-FR`:
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return B(`#PartnerDeadline_TaxRequirement_Header_NoAction`);
    default:
      return B(`#Dashboard_UpcomingEvents_EventType_Deadline`);
  }
}
function _r(e) {
  switch (e?.TemplateName) {
    case `Freeform`:
    case `Freeform-FR`:
      return br(e)
        ? B(`#PartnerDeadline_TaxRequirement_Title_FileReceived`)
        : B(`#PartnerDeadline_TaxRequirement_Title_Freeform`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return B(`#PartnerDeadline_TaxRequirement_Title_NoAction`);
    default:
      return B(`#PartnerDeadline_TaxRequirement_Title`);
  }
}
function vr(e, t) {
  switch (e?.TemplateName) {
    case `Renewal-W8-Initial`:
      return B(`#PartnerDeadline_TaxRequirement_Renewal-W8-Initial`, t);
    case `Renewal-W8-Partner-Urgent`:
      return B(`#PartnerDeadline_TaxRequirement_Renewal-W8-Partner-Urgent`);
    case `DocReq-KYC-FR`:
    case `DocReq-KYC-Entity-FR-CERT`:
    case `DocReq-KYC-Entity-FR`:
      return B(`#PartnerDeadline_TaxRequirement_AdditionalKYCDocuments`);
    case `DocReq-Selfie-FR`:
    case `DocReq-TreatyClaimOthCty-FR`:
    case `DocReq-TreatyClaimUSAddress-FR`:
    case `DocReq-W8USAddress-FR`:
    case `DocReq-W8USParent-FR`:
    case `DocReq-PhotoId-10Years`:
    case `DocReq-PhotoId-FrontBack`:
    case `DocRec-NameTranslation`:
    case `DocReq-Entity-CN-NECIPS`:
    case `DocReq-ProofOfAddress`:
    case `DocReq-TaxResidency`:
    case `DocReq-Entity-TR-Gazetesi`:
    case `DocReq-ValveUse-FR`:
      return B(`#PartnerDeadline_TaxRequirement_AdditionalDocuments`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return B(`#PartnerDeadline_TaxRequirement_NewDocuments`);
    case `FailureToComply`:
    case `FailureToComply-KYC`:
      return B(`#PartnerDeadline_TaxRequirement_Expired`);
    case `AddressCorrection`:
    case `InvalidAddress`:
    case `InvalidTaxInfo-Partner`:
    case `InvalidTIN`:
    case `InvalidTINAudit-Partner`:
    case `NameMismatch-Partner`:
    case `Notify-FailedTIN`:
    case `Notify-FailedTIN-SingLLC`:
    case `Notify-Mismatch`:
      return B(`#PartnerDeadline_TaxRequirement_Invalid`);
    case `Notify-NoTINTreaty-Partner`:
      return B(`#PartnerDeadline_TaxRequirement_NoTINTreaty`);
    case `Freeform`:
    case `Freeform-FR`:
      let n = ``;
      return (
        br(e)
          ? (n = B(`#PartnerDeadline_TaxRequirement_FileReceived`))
          : ((n = e?.Parameters?.CustomMessageBody?.trim() || ``),
            n.length > 64 && (n = n.substring(0, 64) + `...`)),
        n
      );
    default:
      return ``;
  }
}
function yr() {
  let [e] = J.useState(l(`bActualAuthority`, `application_config`));
  return e;
}
function br(e) {
  return e?.Parameters?.UploadOriginalFileName !== void 0;
}
var xr = `pb980aEPJP8-`,
  Sr = `_2MqhtXa-78o-`,
  Cr = `MoxPAoUOBOw-`,
  wr = `htHZFzndVNk-`,
  Tr = `tr0CRxLt8vY-`,
  Er = `EIZlbjeaXAE-`,
  Dr = `-maRlit2vz0-`,
  Or = `KLjlBgtboDk-`,
  kr = `OAd-OQpsrlA-`,
  Ar = `kzM7eb4lVuw-`,
  jr = `HoRGBGHaxs4-`;
function Mr(e) {
  let t = J.useMemo(() => l(`rgDailyDeals`, `application_config`) ?? [], []),
    n = $();
  return J.useMemo(
    () =>
      t
        .filter(
          (e) =>
            !e.cancelled &&
            new Date((e.rtime32_start_time + 7 * V.PerDay) * 1e3) > n,
        )
        .flatMap((t) => {
          let n = new Date((t.rtime32_start_time + V.PerDay) * 1e3);
          return {
            title: t.store_item_name,
            startDate: new Date(t.rtime32_start_time * 1e3),
            endDate: n,
            eventType: `event`,
            id: t.gid,
            eventTypeName: Nr(t),
            getElement: () => (0, Y.jsx)(Fr, { deal: t, partnerId: e }),
            getCapsuleElement: () => (0, Y.jsx)(Lr, { deal: t }),
            passesFilter: (e) => e == 1,
            editURL: `${a.PARTNER_BASE_URL}promotion/dailydeals/edit/${t.gid}`,
          };
        }) ?? [],
    [n, e, t],
  );
}
function Nr(e) {
  return Pr(new Date(), e)
    ? B(`#Dashboard_UpcomingEvents_EventType_DailyDealRecap`)
    : B(`#Dashboard_UpcomingEvents_EventType_DailyDeal`);
}
function Pr(e, t) {
  return (
    new Date((t.rtime32_start_time + V.PerDay) * 1e3).getTime() < e.getTime()
  );
}
function Fr(e) {
  let { deal: t, partnerId: n } = e;
  return Pr(new Date(), t)
    ? (0, Y.jsx)(Rr, { deal: t, partnerId: n })
    : (0, Y.jsx)(Ir, { partnerId: n, deal: t });
}
function Ir(e) {
  let { partnerId: t, deal: n } = e,
    r = ve(n.store_item_type),
    [i] = G(n.store_item_id, r, { include_assets: !0 }),
    o = i?.GetAssets().GetHeaderURL(),
    s = null;
  r == 0 && i
    ? (s = a.PARTNER_BASE_URL + `apps/landing/` + i.GetAppID())
    : r == 2 && i
      ? (s = a.PARTNER_BASE_URL + `bundles/view/` + i.GetID())
      : r == 1 &&
        i &&
        (s = a.PARTNER_BASE_URL + `store/packagelanding/` + i.GetID());
  let c = n.rtime32_start_time + 82800,
    { nDiscountPercentHigh: l, dtDiscountStart: u, dtDiscountEnd: d } = Ee(n),
    f = J.useMemo(() => se(n, l), [n, l]),
    p = Se(n),
    m = l > 0,
    h = f >= Te.DealReady,
    g = h ? B(`#Dashboard_UpcomingEvents_DailyDeal_ReadyToGo`) : ``,
    v = Oe(t?.toString(), n.discount_event_id?.toString()),
    y = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(n.rtime32_start_time * 1e3)),
    b = le(n);
  return (0, Y.jsxs)(F, {
    hasImage: !!o,
    children: [
      (0, Y.jsx)(C, { imageUrl: o, url: s, tooltip: n.store_item_name }),
      (0, Y.jsxs)(D, {
        hasImage: !!o,
        children: [
          (0, Y.jsx)(R, { text: n.store_item_name }),
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`span`, {
                className: xr,
                children: B(`#Dashboard_UpcomingEvents_DailyDeal_Dates`),
              }),
              (0, Y.jsx)(N, {
                startTimestamp: n.rtime32_start_time,
                endTimestamp: c,
              }),
            ],
          }),
          m &&
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(`span`, {
                  className: `pb980aEPJP8-`,
                  children: B(`#Dashboard_UpcomingEvents_DailyDeal_Discounted`),
                }),
                (0, Y.jsx)(N, { startTimestamp: u, endTimestamp: d }),
              ],
            }),
        ],
      }),
      (0, Y.jsxs)(P, {
        children: [
          (0, Y.jsx)(_, { complete: h, urgent: !0, overrideText: g }),
          m &&
            (0, Y.jsx)(w, {
              complete: m,
              urgent: !0,
              label: B(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: (0, Y.jsx)(ie, { oDailyDeal: n }),
              actionStatus: B(
                `#Dashboard_UpcomingEvents_DailyDeal_EditDiscount`,
              ),
              actionUrl: v,
            }),
          !m &&
            (0, Y.jsx)(w, {
              complete: !1,
              urgent: !0,
              label: B(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: B(`#Dashboard_UpcomingEvents_DailyDeal_DueBy`, y),
              actionStatus: B(
                `#Dashboard_UpcomingEvents_DailyDeal_EnterDiscount`,
              ),
              actionUrl: v,
            }),
          p == he.SetUp &&
            (0, Y.jsx)(w, {
              complete: !0,
              urgent: !0,
              label: B(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageSetUp`,
              ),
              actionStatus: B(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageView`,
              ),
              actionUrl: b,
            }),
          p == he.NotSetUp &&
            (0, Y.jsx)(w, {
              complete: !1,
              urgent: !0,
              label: B(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageNeeded`,
              ),
            }),
        ],
      }),
    ],
  });
}
function Lr(e) {
  let { deal: t } = e,
    n = ve(t.store_item_type),
    [r] = G(t.store_item_id, n, { include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL();
  return (
    n == 0 && r
      ? a.PARTNER_BASE_URL + `` + r.GetAppID()
      : ((n == 2 && r) || (n == 1 && r)) && a.PARTNER_BASE_URL + `` + r.GetID(),
    (0, Y.jsx)(z, {
      imageUrl: i,
      title: B(`#Dashboard_UpcomingEvents_EventType_DailyDeal`),
    })
  );
}
function Rr(e) {
  let { deal: t, partnerId: n } = e,
    [r, i] = G(t?.store_item_id, ve(t?.store_item_type), {
      include_assets: !0,
    }),
    o = ye(n, t?.gid ? [t.gid] : [])?.get(t.gid),
    s = !t || !o || i == 1;
  if (t.cancelled || t.deleted) return null;
  let l = `${a.PARTNER_BASE_URL}promotion/dailydeals/dashboard/${n}`,
    u;
  return (
    (u = r?.GetAssets().GetHeaderURL()
      ? (0, Y.jsx)(`img`, { src: r.GetAssets().GetHeaderURL() })
      : B(r ? `#DailyDeals_HeaderArtMissing` : `#DailyDeals_StoreItem_Hidden`)),
    (0, Y.jsx)(`div`, {
      className: c(Cr),
      children: s
        ? (0, Y.jsx)(zr, {})
        : (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsxs)(`div`, {
              className: c(Er),
              children: [
                (0, Y.jsx)(`div`, {
                  className: Dr,
                  children: (0, Y.jsx)(`div`, { className: Sr, children: u }),
                }),
                (0, Y.jsxs)(`div`, {
                  className: c(Dr),
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: wr,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: Tr,
                          children: Fe(t.rtime32_start_time),
                        }),
                        r?.GetName() || t?.store_item_name,
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: kr,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: Ar,
                          children:
                            o?.gross_sales &&
                            (0, Y.jsxs)(Y.Fragment, {
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: B(`#DailyDeals_Report_Revenue`),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: c(`ZCETFj0EJbk-`, void 0),
                                  children: o.gross_sales
                                    ? pe(o.gross_sales)
                                    : `?`,
                                }),
                              ],
                            }),
                        }),
                        (0, Y.jsx)(`div`, {
                          className: Ar,
                          children:
                            o?.impressions &&
                            (0, Y.jsxs)(Y.Fragment, {
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: B(`#DailyDeals_Report_Impressions`),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: c(`ZCETFj0EJbk-`, void 0),
                                  children: nt(o.impressions),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: c(Dr, Or),
                  children:
                    o?.marketing?.length > 1 &&
                    (0, Y.jsx)(Ce, { nGames: o.marketing.length }),
                }),
                (0, Y.jsx)(`div`, {
                  className: Dr,
                  children: (0, Y.jsx)(`div`, {
                    className: jr,
                    children: (0, Y.jsx)(Nn, { summaryURL: l }),
                  }),
                }),
              ],
            }),
          }),
    })
  );
}
function zr() {
  return (0, Y.jsx)(`div`, {
    className: void 0,
    children: (0, Y.jsx)(ut, {
      size: `medium`,
      position: `center`,
      className: void 0,
    }),
  });
}
function Br() {
  return J.useMemo(() => {
    let e = j.Get().GetActiveEvents(),
      t = j.Get().GetUpcomingEvents(),
      n = j.Get().GetDraftEvents(),
      r = (e, t) => ({
        title: e.strEventName,
        startDate: new Date(e.rtStartTime * 1e3),
        endDate: new Date(e.rtEndTime * 1e3),
        eventType: `event`,
        id: e.clanEventGID,
        eventTypeName: t,
        getElement: () => (0, Y.jsx)(Vr, { saleDesc: e }),
        getCapsuleElement: () => (0, Y.jsx)(Hr, { saleDesc: e }),
        passesFilter: (e) => e == 1,
      }),
      i = (e) => e.eEventType != 36;
    return [
      ...e
        .filter(i)
        .map((e) => r(e, B(`#Dashboard_UpcomingEvents_PartnerEvents_Active`))),
      ...t
        .filter(i)
        .map((e) =>
          r(e, B(`#Dashboard_UpcomingEvents_PartnerEvents_Upcoming`)),
        ),
      ...n
        .filter(i)
        .map((e) => r(e, B(`#Dashboard_UpcomingEvents_PartnerEvents_Draft`))),
    ].filter((e) => !!e);
  }, []);
}
function Vr(e) {
  let { saleDesc: t } = e;
  return tt.GetClanEventModel(t.clanEventGID)
    ? (0, Y.jsx)(je, {
        saleDesc: t,
        bShowAppBrowse: !0,
        bHidePartnerStats: !0,
        bShowWhyAmISeeingThis: !0,
      })
    : (0, Y.jsx)(ae, {
        saleDesc: t,
        message: B(`#Dashboard_UpcomingEvents_PartnerEvents_NoAccess`),
      });
}
function Hr(e) {
  let { saleDesc: t } = e,
    n = u(a.LANGUAGE),
    r = tt.GetClanEventModel(t.clanEventGID),
    i = dt(r, `capsule`, n, U.capsule_main);
  return r ? (0, Y.jsx)(z, { imageUrls: i }) : void 0;
}
function Ur() {
  return J.useMemo(
    () =>
      l(`rgMarketingMessagePreviews`, `application_config`)?.map((e) => {
        let t = new Date(e.start_date * 1e3),
          n = new Date(e.end_date * 1e3);
        return {
          title: e.title,
          startDate: t,
          endDate: n,
          eventType: `event`,
          id: e.gid,
          eventTypeName: B(
            `#Dashboard_UpcomingEvents_EventType_MarketingMessagePreview`,
          ),
          getElement: () => (0, Y.jsx)(Gr, { marketingMessage: e }),
          getCapsuleElement: () => (0, Y.jsx)(qr, { marketingMessage: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? [],
    [],
  );
}
function Wr(e) {
  let t = -1;
  return (e == 1 ? (t = 0) : e == 2 ? (t = 1) : e == 5 && (t = 2), t);
}
function Gr(e) {
  let { marketingMessage: t } = e,
    n = Ei(),
    r = t.visibility === 2,
    i = t.visibility === 3,
    o = Wr(t.association_type),
    [s] = G(t.associated_id, o, { include_basic_info: !0, include_assets: !0 }),
    c = s,
    l = c?.GetAssets().GetHeaderURL() || null,
    u = c ? a.PARTNER_BASE_URL + `apps/landing/` + c.GetAppID() : null,
    d =
      r || i
        ? a.PARTNER_BASE_URL +
          `promotion/marketingmessages/partnerpreview/` +
          t.gid
        : void 0,
    { bReady: f, bReadyExceptLiveEvent: p } = _e(null, t, !0),
    m = n.bShowWarnings ? ge.GetMarketingMesssageEditURL(t.gid) : void 0,
    h = $(),
    g,
    v,
    y,
    b,
    x = 0;
  r && t.start_date > h.getTime() / 1e3
    ? ((v = B(
        `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusVisibleOn`,
        Ie(t.start_date),
      )),
      (b = B(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
      (x = 1))
    : r
      ? ((v = B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusPublic`,
        )),
        (b = B(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
        (x = 1))
      : i
        ? ((g = B(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusReadyToPublish`,
          )),
          (v = B(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusApproved`,
          )),
          (b = B(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_PreviewPublishButton`,
          )))
        : f || p
          ? ((g = B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_Overall`,
            )),
            (v = B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview`,
            )),
            (y = B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_ttip`,
            )),
            (x = 2))
          : ((v = B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady`,
            )),
            (y = B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady_ttip`,
            )));
  let S = x === 2 ? 1 : x,
    T = Kr(t);
  return (0, Y.jsxs)(F, {
    hasImage: !!l,
    buttonPosition: `top`,
    children: [
      (0, Y.jsx)(C, { imageUrl: l, url: u }),
      (0, Y.jsx)(D, {
        hasImage: !!l,
        children: (0, Y.jsxs)(O, {
          children: [
            (0, Y.jsx)(R, { text: t.title, url: u }),
            (0, Y.jsx)(`div`, {
              children: (0, Y.jsx)(N, {
                startTimestamp: t.start_date,
                endTimestamp: t.end_date,
              }),
            }),
          ],
        }),
      }),
      (0, Y.jsxs)(P, {
        children: [
          (0, Y.jsx)(_, { complete: S, overrideText: g }),
          (0, Y.jsx)(w, {
            complete: x,
            label: B(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_Status`,
            ),
            status: v,
            tooltip: y,
            actionStatus: b,
            actionUrl: d,
          }),
          T,
        ],
      }),
      m &&
        (0, Y.jsx)(I, {
          children: (0, Y.jsx)(L, { url: m, children: `Edit MM (VO)...` }),
        }),
    ],
  });
}
function Kr(e) {
  let t =
      e.template_vars_json?.length > 0
        ? JSON.parse(e.template_vars_json)
        : void 0,
    n = t?.custom_display == `partner_event` && t?.update_event_gid,
    { eventModel: r } = W(
      t.update_event_clan_accountid,
      t.update_event_gid,
      !0,
    ),
    i = y(t.update_event_clan_accountid, t.update_event_gid),
    o = r?.visibility_state == Je.k_EEventStateVisible,
    s = ft(r, pt.k_eCommunityEdit, `allowRelative`);
  if (!n) return;
  let c =
      r && r.BIsVisibleEvent()
        ? B(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusPublic`,
          )
        : B(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusNotLive`,
          ),
    l =
      i?.oPrivateData?.jsonData
        ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
    u = !!l,
    d = B(
      u
        ? `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Created`
        : `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ReviewNotSubmitted`,
    );
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(w, {
        complete: o,
        label: B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_Status`,
        ),
        status: c,
        actionStatus: B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_ViewButton`,
        ),
        actionUrl: s,
      }),
      (0, Y.jsx)(w, {
        complete: u,
        label: B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Status`,
        ),
        tooltip: B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ttip`,
        ),
        status: d,
        actionStatus: B(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ViewButton`,
        ),
        actionUrl: u ? `${a.HELP_BASE_URL}en/wizard/HelpRequest/${l}` : void 0,
      }),
    ],
  });
}
function qr(e) {
  let { marketingMessage: t } = e,
    n = Wr(t.association_type),
    [r] = G(t.associated_id, n, { include_basic_info: !0, include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL() || null;
  return (0, Y.jsx)(z, { imageUrl: i });
}
var Jr = `gMHBCK--7U8-`,
  Yr = `jwZcGjRfZHc-`,
  Xr = `thE2MxiJxqA-`,
  Zr = `cxhAKGBxdLk-`,
  Qr = `pAPaN6Fq9nA-`,
  $r = `_0VhAVxt3Fjo-`,
  ei = new Date(Date.UTC(2024, 10, 15, 17, 0, 0));
function ti(e) {
  return J.useMemo(() => {
    let t = l(`rgGermanRatingMissingApps`, `application_config`);
    return t?.length > 0
      ? [
          {
            title: B(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
            startDate: ei,
            endDate: ei,
            eventType: `deadline-urgent`,
            id: `storelinkdeprecationnotice`,
            eventTypeName: B(
              `#Dashboard_UpcomingEvents_EventType_GermanRatingMissing`,
            ),
            getElement: () => (0, Y.jsx)(ni, { apps: t, partnerId: e }),
            passesFilter: (e) => e == 1,
          },
        ]
      : [];
  }, [e]);
}
function ni(e) {
  let { apps: t, partnerId: n } = e,
    r = `${a.PARTNER_BASE_URL}doc/gettingstarted/contentsurvey/germany`,
    i = `${a.PARTNER_BASE_URL}recommended_actions/missingratingforgermany/?partnerid=${n}`,
    o = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }).format(ei),
    s = t
      .sort((e, t) => e.name.localeCompare(t.name))
      .slice(0, 30)
      .map((e) => (0, Y.jsx)(`div`, { children: e.name }, e.appid)),
    l = (0, Y.jsxs)(`div`, {
      className: $r,
      children: [
        s,
        t.length > 30 ? (0, Y.jsx)(`div`, { children: `...` }) : void 0,
      ],
    });
  return (0, Y.jsxs)(F, {
    children: [
      (0, Y.jsx)(D, {
        children: (0, Y.jsxs)(O, {
          children: [
            (0, Y.jsx)(R, {
              text: B(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
              url: i,
            }),
            (0, Y.jsx)(`div`, {
              className: c(Jr),
              children: B(
                t.length == 1
                  ? `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc`
                  : `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc_Plural`,
                o,
              ),
            }),
            (0, Y.jsx)(Ke, {
              className: Yr,
              toolTipContent: l,
              children: (0, Y.jsx)(`a`, {
                className: Qr,
                href: i,
                children: (0, Y.jsxs)(`div`, {
                  className: Xr,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: Zr,
                      children: B(
                        `#Dashboard_UpcomingEvents_GermanRatingMissing_Count`,
                      ),
                    }),
                    (0, Y.jsx)(`div`, { className: Qr, children: t.length }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      (0, Y.jsxs)(I, {
        children: [
          (0, Y.jsx)(L, {
            url: r,
            children: B(`#Dashboard_UpcomingEvents_General_ReadDocumentation`),
          }),
          (0, Y.jsx)(L, {
            url: i,
            children: B(`#Dashboard_UpcomingEvents_General_AffectedApps`),
          }),
        ],
      }),
    ],
  });
}
function ri() {
  let e = J.useMemo(() => oi(), []);
  return J.useMemo(() => {
    if (!e) return [];
    let { setRegistrations: t, mapEvents: n } = e,
      r = u(a.LANGUAGE);
    return (
      Array.from(n.values()).map((e) => {
        let n = t.has(e.GID);
        return {
          title: e.GetNameWithFallback(r),
          startDate: new Date(e.startTime * 1e3),
          endDate: new Date(e.endTime * 1e3),
          eventType: `event`,
          id: e.GID,
          eventTypeName: B(`#Dashboard_UpcomingEvents_EventType_MeetSteam`),
          getElement: () => (0, Y.jsx)(ii, { eventModel: e, registered: n }),
          getCapsuleElement: () => (0, Y.jsx)(ai, { eventModel: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? []
    );
  }, [e]);
}
function ii(e) {
  let { eventModel: t, registered: n } = e,
    r = u(a.LANGUAGE),
    i = n
      ? t.GetNameWithFallback(r)
      : B(
          `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Title`,
          t.GetNameWithFallback(r),
        ),
    o = ft(t, pt.k_eView, `allowRelative`),
    s = t.GetImageURL(`capsule`, r, U.capsule_main);
  return (0, Y.jsxs)(F, {
    hasImage: !!s,
    buttonPosition: `top`,
    children: [
      (0, Y.jsx)(C, { imageUrl: s, url: o }),
      (0, Y.jsx)(D, {
        hasImage: !!s,
        children: (0, Y.jsxs)(O, {
          children: [
            (0, Y.jsx)(R, { text: i, url: o }),
            (0, Y.jsx)(N, {
              startTimestamp: t.startTime,
              endTimestamp: t.endTime,
              showTime: !0,
            }),
            (0, Y.jsx)(`div`, { children: t.GetSummaryWithFallback(r) }),
            n &&
              (0, Y.jsxs)(`div`, {
                className: `cNktljFYRzg-`,
                children: [
                  (0, Y.jsx)(Ve, {}),
                  B(
                    `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_YoureRegistered`,
                  ),
                ],
              }),
          ],
        }),
      }),
      (0, Y.jsx)(I, {
        children: (0, Y.jsx)(L, {
          url: o,
          children: B(
            n
              ? `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_EditRegistration`
              : `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_Register`,
          ),
        }),
      }),
    ],
  });
}
function ai(e) {
  let { eventModel: t } = e,
    n = u(a.LANGUAGE);
  return (
    !!t &&
    (0, Y.jsx)(z, { imageUrl: t.GetImageURL(`capsule`, n, U.capsule_main) })
  );
}
function oi() {
  let e = l(`rgMeetSteam`, `application_config`);
  if (!e?.rgEvents) return null;
  let t = new Map();
  for (let n in e.rgEvents)
    try {
      let r = et.InitFromAccountID(ht(), a.EUNIVERSE),
        i = Ye(r, e.rgEvents[n]);
      t.set(n, i);
    } catch {}
  return {
    setInvitations: new Set(e.rgInvitations),
    setRegistrations: new Set(e.rgRegistrations),
    mapEvents: t,
  };
}
var si = 7;
function ci(e) {
  let t = $();
  return J.useMemo(() => {
    let n = l(`rgPartnerAddressRequests`, `application_config`) ?? [],
      r = Math.floor(t.getTime() / 1e3);
    return (
      e && !n.length
        ? [
            {
              opt_in_name: `sale_test`,
              partnerid: 0,
              rtime_target: r + 3 * V.PerDay,
              title: `Sample Request`,
            },
          ]
        : n
    ).map((e) => {
      let n = e.rtime_target > 0,
        i = n && e.rtime_target < r,
        a = n && r >= e.rtime_target - si * V.PerDay,
        o = n && !i ? new Date(e.rtime_target * 1e3) : t,
        s =
          e.title || B(`#Dashboard_UpcomingEvents_AddressRequest_DefaultTitle`);
      return {
        id: `addressrequest_${e.opt_in_name}_${e.partnerid}`,
        title: s,
        startDate: o,
        endDate: o,
        eventType: a ? `deadline-urgent` : `deadline`,
        eventTypeName: B(`#Dashboard_UpcomingEvents_AddressRequest_Header`),
        getElement: () =>
          (0, Y.jsx)(li, { request: e, strTitle: s, bOverdue: i, bUrgent: a }),
        passesFilter: (e) => e == 1,
      };
    });
  }, [t, e]);
}
function li(e) {
  let { request: t, strTitle: n, bOverdue: r, bUrgent: i } = e,
    o = new Date(t.rtime_target * 1e3).toLocaleDateString(
      We.GetPreferredLocales(),
      { month: `short`, day: `numeric`, year: `numeric` },
    ),
    s;
  return (
    (s = t.rtime_target
      ? B(
          r
            ? `#Dashboard_UpcomingEvents_AddressRequest_Desc_Overdue`
            : `#Dashboard_UpcomingEvents_AddressRequest_Desc`,
          o,
        )
      : B(`#Dashboard_UpcomingEvents_AddressRequest_Desc_NoDate`)),
    (0, Y.jsx)(Q, {
      title: n,
      body: s,
      urgent: i,
      rightCol: (0, Y.jsx)(L, {
        url: `${a.PARTNER_BASE_URL}optin/address/${t.opt_in_name}/${t.partnerid}`,
        children: B(`#Dashboard_UpcomingEvents_AddressRequest_Action`),
      }),
    })
  );
}
var ui = `qLJQMv2BRm8-`,
  di = `WPmn4BD-cnk-`,
  fi = `tosx4mmDBDA-`,
  pi = `-Pqt9C8D2zg-`,
  mi = `ZHqFiLwZ8SY-`,
  hi = 604800;
function gi(e) {
  let t = $(),
    n = vn(),
    r = J.useMemo(
      () =>
        new Set(
          l(`rgOptInContactAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    i = !!l(`bOptInPublisherContact`, `application_config`);
  return J.useMemo(() => {
    if (!n) return [];
    let a = Math.floor(t.getTime() / 1e3);
    return n
      .GetOptInNames()
      .map((t) => _i(t, n.GetInfo(t), i, r, e ?? new Set(), a))
      .filter((e) => !!e)
      .map((e) => yi(e, a));
  }, [t, n, i, r, e]);
}
function _i(e, t, n, r, i, a) {
  let o = t?.description?.definition;
  if (!o || o.optin_kind !== te.DeepestDiscount) return;
  let s = o.optin_deadline_date || 0,
    c = o.deepest_discount?.rtime_discount_deadline || 0;
  if (!s || !c || a > Math.max(s, c)) return;
  let l = new Set((t.rgRegisteredApps ?? []).map((e) => e.appid)),
    u = Array.from(new Set([...(t.rgInvitedAppIDs ?? []), ...l])).filter(
      (e) => n || r.has(e),
    );
  if (u.length != 0)
    return {
      strOptInName: e,
      optIn: t,
      rtDecisionDeadline: s,
      rtDiscountDeadline: c,
      rgGames: u.map((e) => ({
        appid: e,
        bAnswered: l.has(e),
        eDiscount: vi(t.mapDiscountStatus?.get(e)),
      })),
      setOptInAppIDs: r,
      setManageDiscountsAppIDs: i,
    };
}
function vi(e) {
  switch (e) {
    case 1:
      return 1;
    case 5:
    case 6:
    case 4:
      return 2;
    default:
      return 0;
  }
}
function yi(e, t) {
  let {
      strOptInName: n,
      optIn: r,
      rtDecisionDeadline: i,
      rtDiscountDeadline: a,
      rgGames: o,
    } = e,
    s = t <= i ? i : a,
    c = new Date(s * 1e3),
    l = !o.every((e) => e.bAnswered && e.eDiscount != 0) && s - t < hi,
    u = k(S(r.description.definition).sale),
    d = B(`#Dashboard_DeepestDiscount_Title`, u),
    f = !r.description.active;
  return {
    id: `deepestdiscount_${n}`,
    title: d,
    startDate: c,
    endDate: c,
    dismissUntil: new Date(Math.max(i, a) * 1e3),
    eventType: l ? `deadline-urgent` : `deadline`,
    eventTypeName: B(`#Dashboard_DeepestDiscount_Header`),
    valveOnly: f,
    getElement: () =>
      (0, Y.jsx)(bi, { rowData: e, strTitle: d, bUrgent: l, bHidden: f }),
    passesFilter: (e) => e == 1,
  };
}
function bi(e) {
  let { rowData: t, strTitle: n, bUrgent: r, bHidden: i } = e,
    a = t.optIn.description.definition,
    o = S(a).nMinDiscountPct;
  return (0, Y.jsxs)(`div`, {
    className: i ? ui : void 0,
    children: [
      i &&
        (0, Y.jsx)(`div`, {
          className: `JfhhJkBlyGI-`,
          children: `Hidden: this opt-in is not enabled, so partners do not see it. (VO)`,
        }),
      (0, Y.jsx)(F, {
        children: (0, Y.jsxs)(D, {
          children: [
            (0, Y.jsx)(R, { text: n }),
            (0, Y.jsx)(`div`, {
              children: B(`#Dashboard_DeepestDiscount_Body`, o),
            }),
            t.rgGames.map((e) =>
              (0, Y.jsx)(
                xi,
                { game: e, rowData: t, nMinDiscountPct: o, bUrgent: r },
                e.appid,
              ),
            ),
          ],
        }),
      }),
    ],
  });
}
function xi(e) {
  let { game: t, rowData: n, nMinDiscountPct: r, bUrgent: i } = e,
    o = { appid: t.appid },
    { data: s } = qe(o),
    c = Xe(o, `header`),
    l = n.optIn.description.definition,
    u = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    d = B(
      `#Dashboard_DeepestDiscount_DueDate`,
      u.format(new Date(n.rtDecisionDeadline * 1e3)),
    ),
    f =
      t.eDiscount == 2
        ? B(`#Dashboard_DeepestDiscount_NoDiscountNeeded`)
        : B(
            `#Dashboard_DeepestDiscount_DueDate`,
            u.format(new Date(n.rtDiscountDeadline * 1e3)),
          ),
    p = `${a.PARTNER_BASE_URL}optin/sale/${n.strOptInName.replace(`sale_`, ``)}/${t.appid}`,
    m = l.do_anytime?.discount_event_id,
    h = m
      ? `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${m}`
      : `${a.PARTNER_BASE_URL}promotion/discounts/dashboard/`,
    g = !t.bAnswered && n.setOptInAppIDs.has(t.appid),
    _ = t.eDiscount == 0 && n.setManageDiscountsAppIDs.has(t.appid);
  return (0, Y.jsxs)(`div`, {
    className: di,
    children: [
      (0, Y.jsx)(`div`, {
        className: fi,
        children: c && (0, Y.jsx)(`img`, { src: c, alt: `` }),
      }),
      (0, Y.jsxs)(`div`, {
        className: pi,
        children: [
          (0, Y.jsx)(`div`, {
            className: mi,
            children: s?.name || `(${t.appid})`,
          }),
          (0, Y.jsx)(w, {
            complete: t.bAnswered,
            urgent: i,
            label: B(
              t.bAnswered
                ? `#Dashboard_DeepestDiscount_Answer_Done`
                : `#Dashboard_DeepestDiscount_Answer`,
            ),
            status: d,
            actionStatus: g
              ? B(`#Dashboard_DeepestDiscount_Answer_Button`)
              : void 0,
            actionUrl: g ? p : void 0,
          }),
          (0, Y.jsx)(w, {
            complete: t.eDiscount,
            urgent: i,
            label: B(
              t.eDiscount == 1
                ? `#Dashboard_DeepestDiscount_Discount_Done`
                : `#Dashboard_DeepestDiscount_Discount`,
              r,
            ),
            status: f,
            actionStatus: _
              ? B(`#Dashboard_DeepestDiscount_Discount_Button`)
              : void 0,
            actionUrl: _ ? h : void 0,
          }),
        ],
      }),
    ],
  });
}
function Si(e, t, n, r) {
  let i = J.useMemo(() => l(`sEventIds`, `application_config`)?.split(`,`), []),
    a = e.now,
    o = e.bShowWarnings,
    s = qn(),
    c = xn(t),
    u = Ur(),
    d = $t(),
    f = $n(),
    p = Mr(t),
    m = Br(),
    h = ti(t),
    g = ri(),
    _ = ci(r),
    v = gi(e.setManageDiscountsAppIDs),
    y = Gt(e.additionalEventStore),
    b = Kt(e.additionalEventStore),
    x = qt();
  return J.useMemo(() => {
    let e = c
        .concat(d, u, f, p, m, h, g, _, v, y, r ? s : [])
        .filter((e) => Ci(a, e, i, b, o)),
      t = e.length;
    return {
      rgShownEvents: e.filter((e) => (n == 3) == x.has(wi(e))),
      nShouldBeShownCount: t,
    };
  }, [c, d, u, f, p, m, h, g, _, v, y, r, s, a, i, b, x, n, o]);
}
function Ci(e, t, n, r, i) {
  return !(
    (t.valveOnly && !i) ||
    (n?.length > 0 && !n.includes(t.id)) ||
    r.has(t.id) ||
    (t.dimmed && e >= t.startDate) ||
    new Date(t.startDate.getTime() + 21 * V.PerDay * 1e3) < e
  );
}
function wi(e) {
  return JSON.stringify({ usage: `dashboard`, eventId: e.id });
}
var Ti = J.createContext({
  now: new Date(),
  bShowWarnings: !1,
  additionalEventStore: void 0,
  setManageDiscountsAppIDs: void 0,
});
function Ei() {
  return J.useContext(Ti);
}
function $() {
  return J.useContext(Ti).now;
}
function Di() {
  return J.useContext(Ti).additionalEventStore;
}
function Oi(e) {
  let { showWarnings: t } = e,
    n = J.useMemo(
      () =>
        new Set(
          l(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    r = J.useMemo(() => new Wt(), []),
    i = J.useMemo(() => new Date(), []),
    a = J.useMemo(
      () => ({
        now: i,
        bShowWarnings: t,
        additionalEventStore: r,
        setManageDiscountsAppIDs: n,
      }),
      [i, t, r, n],
    );
  return (0, Y.jsx)(Ti.Provider, {
    value: a,
    children: (0, Y.jsx)(ki, { ...e }),
  });
}
function ki(e) {
  let { partnerId: t, testData: n } = e,
    [r] = lt(`expanded`, !1),
    [i, a] = J.useState(!!r),
    o = J.useCallback((e) => {
      (a(e), !e && D.current.scrollIntoView());
    }, []),
    [s, c] = J.useState(!1),
    l = J.useCallback(
      (e) => {
        (c(e), e && a(!0));
      },
      [a, c],
    ),
    [u, d] = J.useState(!1),
    f = J.useCallback(
      (e) => {
        (d(e), e && a(!0));
      },
      [a, d],
    ),
    [p, m] = J.useState(``),
    h = J.useCallback(
      (e) => {
        (e && (a(!0), l(!0), f(!0)), m(e));
      },
      [l, f],
    ),
    [g, _] = J.useState(0),
    v = () => {
      (_(0), m(``));
    },
    y = Ei(),
    { rgShownEvents: b, nShouldBeShownCount: x } = Si(y, t, g, n),
    S = Mi(b, g, s, l, u, f),
    C = J.useMemo(() => S.filter((e) => Xi(y.now, e, p, g)), [y.now, S, p, g]),
    w = Zi(b, C),
    T = g != 0 || (p && p.trim().length > 0),
    E = J.useMemo(() => new Map(), []),
    D = J.useRef(void 0),
    O = Ji(i, a),
    k = J.useCallback(
      (e) => {
        if (K(e).getTime() == K(y.now).getTime()) {
          D.current.scrollIntoView();
          return;
        }
        let t = E?.get(K(e).getTime() / 1e3);
        t && O(t.element);
      },
      [y.now, E, O],
    ),
    [A, ee] = J.useState();
  J.useEffect(() => ee(void 0), [b]);
  let j = J.useMemo(
      () =>
        (0, Y.jsxs)(`div`, {
          className: ke,
          children: [
            (0, Y.jsx)(Pi, { filterType: g, setFilterType: _ }),
            (0, Y.jsx)(Ni, { filterText: p, setFilterText: h }),
          ],
        }),
      [p, g, h],
    ),
    M = x > 0 || g != 0,
    te = g == 0 && C != null && C?.length == 0;
  return (0, Y.jsx)(Y.Fragment, {
    children:
      M &&
      (0, Y.jsx)(vt, {
        title: B(`#Dashboard_UpcomingEvents_Title`),
        ref: D,
        headerElement: j,
        children: (0, Y.jsx)(`div`, {
          className: `XCgSZWm6N7w-`,
          children: (0, Y.jsxs)(`div`, {
            className: `Xpe0MYEePcY-`,
            children: [
              te &&
                (0, Y.jsx)(`div`, {
                  className: `mhJoiRoACzY-`,
                  children: Le(
                    `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed`,
                    (0, Y.jsx)(`a`, {
                      onClick: () => {
                        (_(3), m(``));
                      },
                      children: B(
                        `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed_LinkText`,
                      ),
                    }),
                  ),
                }),
              !te &&
                (0, Y.jsx)(Ii, {
                  events: C,
                  filterVisibleEventIds: w,
                  dayRefsToScrollTo: E,
                  fnScrollToDay: k,
                  isExpanded: i,
                  fnSetExpanded: o,
                  filterEnabled: T,
                  filterType: g,
                  clearAllFilters: v,
                  hoverEvent: A,
                  setHoverEvent: ee,
                }),
            ],
          }),
        }),
      }),
  });
}
function Ai(e, t) {
  return t.startDate != t.endDate && e >= t.startDate && e <= t.endDate;
}
function ji(e, t) {
  return e > t.endDate;
}
function Mi(e, n, r, i, a, o) {
  let s = $();
  return (
    J.useMemo(
      () =>
        e.forEach((e) =>
          t(!Ai(s, e) || !ji(s, e), `An event can't be both live and a recap`),
        ),
      [s, e],
    ),
    J.useMemo(() => {
      let t = e;
      if (n == 0) {
        let e = (e, t, n) => {
          let r = e.filter((e) => t(e));
          return r.length > 1 ? e.filter((e) => !t(e)).concat(n(r)) : e;
        };
        (r ||
          (t = e(
            t,
            (e) => Ai(s, e),
            (e) => ({
              title: B(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
              startDate: e[0].startDate,
              endDate: e[0].endDate,
              eventType: `event`,
              id: `live_placeholder`,
              eventTypeName: ``,
              getElement: () =>
                (0, Y.jsx)(Ui, {
                  text: B(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
                  events: e,
                  expanded: r,
                  setExpanded: i,
                }),
            }),
          )),
          a ||
            (t = e(
              t,
              (e) => ji(s, e),
              (e) => ({
                title: B(`#Dashboard_UpcomingEvents_Events_Placeholder_Recap`),
                startDate: e[0].startDate,
                endDate: e[0].endDate,
                eventType: `event`,
                id: `recap_placeholder`,
                eventTypeName: ``,
                getElement: () =>
                  (0, Y.jsx)(Ui, {
                    text: B(
                      `#Dashboard_UpcomingEvents_Events_Placeholder_Recap`,
                    ),
                    events: e,
                    expanded: a,
                    setExpanded: o,
                  }),
              }),
            )));
      }
      return t;
    }, [s, e, n, r, i, a, o])
  );
}
function Ni(e) {
  let { filterText: t, setFilterText: n } = e;
  return (0, Y.jsxs)(`div`, {
    className: we,
    children: [
      (0, Y.jsx)(`input`, {
        className: fe,
        type: `text`,
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: B(`#Dashboard_UpcomingEvents_Events_FilterEmpty`),
      }),
      (0, Y.jsx)(`button`, {
        className: be,
        onClick: () => n(``),
        children: `✖`,
      }),
      (0, Y.jsx)(`span`, { className: me, children: `🔍` }),
    ],
  });
}
function Pi(e) {
  let { filterType: t, setFilterType: n } = e,
    r = J.useMemo(
      () => [
        { type: 0, text: B(`#Dashboard_UpcomingEvents_Filter_All`) },
        { type: 1, text: B(`#Dashboard_UpcomingEvents_Filter_Events`) },
        { type: 2, text: B(`#Dashboard_UpcomingEvents_Filter_Releases`) },
        { type: 3, text: B(`#Dashboard_UpcomingEvents_Filter_Dismissed`) },
      ],
      [],
    );
  return (0, Y.jsx)(`div`, {
    className: de,
    children: r.map((e) =>
      (0, Y.jsx)(
        `div`,
        {
          className: c(ue, t == e.type && `VSt5dZb4mv0-`),
          onClick: () => n(e.type),
          children: e.text,
        },
        e.type,
      ),
    ),
  });
}
function Fi(e) {
  let { partnerId: t, showWarnings: n, testData: r } = e,
    i = J.useMemo(() => new Date(), []),
    a = J.useMemo(() => new Wt(), []),
    o = J.useMemo(
      () =>
        new Set(
          l(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    s = J.useMemo(
      () => ({
        now: i,
        bShowWarnings: n,
        bExpanded: !0,
        additionalEventStore: a,
        setManageDiscountsAppIDs: o,
      }),
      [i, n, a, o],
    ),
    { rgShownEvents: c } = Si(s, t, 0, r),
    u = J.useMemo(
      () =>
        c.map((e) =>
          (0, Y.jsx)(
            Vi,
            {
              event: e,
              setHoverEvent: () => {},
              showHeader: !1,
              showDateInHeader: !1,
            },
            e.id,
          ),
        ),
      [c],
    );
  return (0, Y.jsx)(Ti.Provider, {
    value: s,
    children: (0, Y.jsx)(`div`, { className: b, children: u }),
  });
}
function Ii(e) {
  let {
      events: t,
      filterVisibleEventIds: n,
      dayRefsToScrollTo: r,
      fnScrollToDay: i,
      filterEnabled: a,
      filterType: o,
      clearAllFilters: s,
      isExpanded: l,
      fnSetExpanded: u,
      hoverEvent: d,
      setHoverEvent: f,
    } = e,
    p = $(),
    m = J.useMemo(() => t.filter((e) => ji(p, e)), [t, p]),
    h = J.useMemo(() => t.filter((e) => Ai(p, e)), [t, p]),
    g = J.useMemo(
      () =>
        Array.from(
          qi(
            bt(
              t.filter((e) => !ji(p, e) && !Ai(p, e)),
              (e) => xt(e.startDate),
            ),
          ),
        ).sort(Wi),
      [t, p],
    ),
    [_, y] = J.useState(!1),
    b = J.useRef(void 0);
  J.useLayoutEffect(() => {
    let e = () => {
      if (b.current) {
        let e = b.current.scrollHeight > b.current.offsetHeight;
        y(e);
      }
    };
    return (
      e(),
      window.addEventListener(`resize`, e),
      () => window.removeEventListener(`resize`, e)
    );
  });
  let x = J.useCallback(
      (e, t, a, o, s) =>
        t.length > 0
          ? (0, Y.jsx)(
              Li,
              {
                date: new Date(e * 1e3),
                events: t,
                filterVisibleEventIds: n,
                dayRefsToScrollTo: r,
                fnScrollToDay: i,
                firstMonth: a == 0,
                lastMonth: a == g.length - 1,
                hoverEvent: d,
                setHoverEvent: f,
                eventTimeGroup: o,
                showHeader: s,
              },
              `${o == `normal` ? `` : o + `_`}${e}`,
            )
          : void 0,
      [r, g.length, n, i, d, f],
    ),
    S = J.useCallback(
      (e, t, n) => e.map(([e, r], i) => x(e, r, i, t, n)).filter((e) => !!e),
      [x],
    ),
    C = J.useMemo(
      () => x(0, m, 0, `recap`, m.length != 1 || m[0].eventTypeName.length > 0),
      [x, m],
    ),
    w = J.useMemo(
      () => x(0, h, 0, `live`, h.length != 1 || h[0].eventTypeName.length > 0),
      [x, h],
    ),
    T = J.useMemo(() => S(g, `normal`, !0), [g, S]);
  return (0, Y.jsxs)(`div`, {
    className: oe,
    children: [
      (0, Y.jsxs)(`div`, {
        className: c(v, l && `VnoIh0BbNTk-`, _ && `qAzXCetKhDY-`),
        ref: b,
        children: [
          C,
          w,
          T,
          a &&
            t.length == 0 &&
            (0, Y.jsx)(`div`, {
              className: `mhJoiRoACzY-`,
              children: Le(
                o == 3
                  ? `#Dashboard_UpcomingEvents_Filter_DismissedNoEvents`
                  : `#Dashboard_UpcomingEvents_Filter_NoEvents`,
                (0, Y.jsx)(`a`, {
                  onClick: () => s(),
                  children: B(
                    `#Dashboard_UpcomingEvents_Filter_NoEvents_LinkText`,
                  ),
                }),
              ),
            }),
        ],
      }),
      _ &&
        !l &&
        t.length > 0 &&
        (0, Y.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!0),
          children: B(`#Dashboard_UpcomingEvents_ShowMore`),
        }),
      l &&
        t.length > 0 &&
        (0, Y.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!1),
          children: B(`#Dashboard_UpcomingEvents_ShowLess`),
        }),
    ],
  });
}
function Li(e) {
  let {
      date: t,
      events: n,
      eventTimeGroup: r,
      filterVisibleEventIds: i,
      dayRefsToScrollTo: a,
      fnScrollToDay: o,
      firstMonth: s,
      lastMonth: l,
      hoverEvent: u,
      setHoverEvent: d,
      showHeader: f,
    } = e,
    p = $(),
    m = J.useMemo(
      () =>
        p.getFullYear() == t.getFullYear()
          ? new Intl.DateTimeFormat(navigator.language, {
              month: `long`,
            }).format(t)
          : new Intl.DateTimeFormat(navigator.language, {
              year: `numeric`,
              month: `long`,
            }).format(t),
      [p, t],
    ),
    h = J.useMemo(() => Array.from(bt(n, (e) => K(e.startDate))).sort(Wi), [n]),
    g = J.useRef(void 0),
    _ = J.useMemo(
      () =>
        h.reduce(
          (e, [t]) =>
            e.set(t, (e) => a.set(t, { element: e, header: g.current })),
          new Map(),
        ),
      [h, a],
    ),
    v = J.useMemo(
      () =>
        h.map(([e, t]) =>
          (0, Y.jsx)(
            zi,
            {
              events: t,
              showHeader: f,
              showDateInHeader: !0,
              refScrollTo: _.get(e),
              setHoverEvent: d,
            },
            e,
          ),
        ),
      [h, _, d, f],
    ),
    y = J.useMemo(() => n.map((e) => [e, Ri(e)]), [n]),
    b = J.useMemo(() => y.reduce((e, t) => e.set(t[1], t[0]), new Map()), [y]),
    x = J.useMemo(() => y.map((e) => e[1]), [y]),
    S = J.useCallback((e, t) => Gi(b.get(e), b.get(t)), [b]),
    C = J.useCallback((e, t) => Ki(b.get(e), b.get(t)), [b]);
  return (0, Y.jsxs)(`div`, {
    className: T,
    children: [
      n.length > 0 &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsxs)(`div`, {
              className: `tjsar3R67bg-`,
              children: [
                r == `normal` &&
                  (0, Y.jsxs)(`div`, {
                    className: `_0KwEcSKsYOI-`,
                    children: [
                      (0, Y.jsx)(Rt, { viewDate: t }),
                      (0, Y.jsx)(Ht, {}),
                      (0, Y.jsx)(zt, {
                        now: p,
                        viewDate: t,
                        events: x,
                        filterVisibleEventIds: i,
                        fnScrollToDay: o,
                        hoverEvent: Ri(u),
                        bShowPreceedingWeeks: s,
                        bShowFollowingWeeks: l,
                        compareEvents: S,
                        colorPriority: C,
                      }),
                    ],
                  }),
                r == `live` &&
                  (0, Y.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, Y.jsx)(`div`, {
                      className: c(`R9qMCNp8MZc-`, `u9X-GE-Ixi4-`),
                      children: (0, Y.jsx)(`div`, {
                        className: `CRh4Y0YKsSc-`,
                        children: B(`#Dashboard_UpcomingEvents_EventIsLive`),
                      }),
                    }),
                  }),
                r == `recap` &&
                  (0, Y.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, Y.jsx)(`div`, {
                      className: c(`R9qMCNp8MZc-`, `_91lVTBaZFYA-`),
                      children: (0, Y.jsx)(`div`, {
                        className: `_0srcByIPSwg-`,
                        children: B(`#Dashboard_UpcomingEvents_EventIsRecap`),
                      }),
                    }),
                  }),
              ],
            }),
            (0, Y.jsx)(`div`, { className: `_5CcFPj3DS7I-`, children: v }),
          ],
        }),
      n.length == 0 &&
        (0, Y.jsx)(`div`, {
          className: `oUtOtwTHBIo-`,
          children: B(`#Dashboard_UpcomingEvents_NoEventsInMonth`, m),
        }),
    ],
  });
}
function Ri(e) {
  if (!e) return;
  let t,
    n = !1;
  switch (e.eventType) {
    case `deadline`:
      ((t = `#cf980c`), (n = !0));
      break;
    case `deadline-urgent`:
      ((t = `#cf520c`), (n = !0));
      break;
    case `release-game`:
      t = `#426283`;
      break;
    case `release-dlc`:
      t = `#a655b2`;
      break;
    case `event`:
      t = `#657f2d`;
  }
  return { ...e, note: n, color: t };
}
function zi(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = J.useMemo(() => {
      let e = t.reduce((e, t) => {
        let n = `${t.eventType}_${t.eventTypeName}`,
          r = e.get(n) || [];
        return (e.set(n, [...r, t]), e);
      }, new Map());
      for (let t of e.values()) t.sort(Gi);
      return Array.from(e).sort(([e, t], [n, r]) =>
        (t[0].eventTypeSortWeight ?? 0) == (r[0].eventTypeSortWeight ?? 0)
          ? e.localeCompare(n)
          : (t[0].eventTypeSortWeight ?? 0) - (r[0].eventTypeSortWeight ?? 0),
      );
    }, [t]),
    s = J.useMemo(
      () =>
        o.map(([e, t]) =>
          (0, Y.jsx)(
            Bi,
            {
              events: t,
              showHeader: n,
              showDateInHeader: r,
              refScrollTo: i,
              setHoverEvent: a,
            },
            e,
          ),
        ),
      [o, i, a, n, r],
    );
  return (0, Y.jsx)(`div`, { ref: i, className: x, children: s });
}
function Bi(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = J.useMemo(
      () =>
        t.map((e, t) =>
          (0, Y.jsx)(
            Vi,
            {
              event: e,
              setHoverEvent: a,
              showHeader: n && t == 0,
              showDateInHeader: r,
            },
            e.id,
          ),
        ),
      [t, a, n, r],
    );
  return (0, Y.jsx)(`div`, { ref: i, className: b, children: o });
}
function Vi(e) {
  let { event: t, showHeader: n, showDateInHeader: r, setHoverEvent: i } = e,
    a = Ei();
  Yi(t);
  let o = t.eventType == `deadline`,
    s = t.eventType == `deadline-urgent`,
    l = t.eventType == `release-game`,
    u = t.eventType == `release-dlc`,
    d = t.eventType == `event`,
    f = c(
      M,
      o && `_3C1k9qRvbdA-`,
      s && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    p = c(
      ne,
      o && `_3C1k9qRvbdA-`,
      s && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    m = t.getElement(),
    h = wi(t),
    _ = X.Get().GetDismissState(h),
    v = J.useCallback(
      (e) =>
        e
          ? X.Get().SetDismiss(h, t.dismissUntil ?? t.endDate)
          : X.Get().ClearDismiss(h),
      [t.dismissUntil, t.endDate, h],
    ),
    y = Hi(t.id);
  return (
    m &&
    (0, Y.jsxs)(`div`, {
      className: c(
        `DhGBJeASLLw-`,
        s && `YuJdkBechnU-`,
        t.dimmed && `_6Nj-6kVdKm0-`,
      ),
      onPointerEnter: () => i(t),
      onPointerLeave: () => i(void 0),
      children: [
        n &&
          (0, Y.jsxs)(`div`, {
            className: `RgKUFbhH4Z8-`,
            children: [
              r &&
                (0, Y.jsx)(Re, {
                  className: f,
                  toolTipContent: new Intl.DateTimeFormat(navigator.language, {
                    month: `numeric`,
                    day: `numeric`,
                    year: `2-digit`,
                  }).format(t.startDate),
                  children: r ? t.startDate.getDate() : ``,
                }),
              (0, Y.jsxs)(`div`, {
                className: p,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: c(!r && void 0),
                    children: t.eventTypeName,
                  }),
                  t.valveOnly &&
                    (0, Y.jsx)(`span`, {
                      className: `_9jEXghBXAdI-`,
                      children: `(VO)`,
                    }),
                  (0, Y.jsx)(`span`, { className: `eLvHWGPkrPY-` }),
                  y &&
                    (0, Y.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, Y.jsx)(`a`, {
                          href: y,
                          target: `_blank`,
                          children: `isolate`,
                        }),
                        `\xA0(dev)`,
                      ],
                    }),
                  a.bShowWarnings &&
                    t.editURL &&
                    (0, Y.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, Y.jsx)(`a`, {
                          href: t.editURL,
                          target: `_blank`,
                          children: `edit`,
                        }),
                        `\xA0(VO)`,
                      ],
                    }),
                  !_ &&
                    (0, Y.jsxs)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!0),
                      children: [
                        B(`#Dashboard_UpcomingEvents_Dismiss`),
                        (0, Y.jsx)(H, {
                          tooltip: B(`#Dashboard_UpcomingEvents_Dismiss_ttip`),
                        }),
                      ],
                    }),
                  _ &&
                    (0, Y.jsx)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!1),
                      children: B(`#Dashboard_UpcomingEvents_Undismiss`),
                    }),
                ],
              }),
            ],
          }),
        (0, Y.jsxs)(`div`, {
          className: c(`_4Qsmx4g89QU-`, `QH6w-cg8K-I-`),
          children: [
            (0, Y.jsx)(`div`, {
              className: c(`_1TsAMPF7hS0-`, t.loading && `Y0fsODLAA9E-`),
              children: (0, Y.jsx)(ut, { size: `small` }),
            }),
            (0, Y.jsx)(`div`, {
              className: `dKTIVgFsruk-`,
              children: (0, Y.jsx)(g, { children: m }),
            }),
          ],
        }),
      ],
    })
  );
}
function Hi(e) {
  return null;
}
function Ui(e) {
  let { text: t, events: n, expanded: r, setExpanded: i } = e,
    a = n
      .slice(0, 4)
      .map((e) => ({ event: e, element: e.getCapsuleElement?.() }));
  return (0, Y.jsxs)(`div`, {
    className: Ae,
    children: [
      !r &&
        (0, Y.jsx)(`div`, {
          className: `rb79huJ8qFw-`,
          children: (0, Y.jsx)(`button`, {
            className: `_8pE5hC3-T3Y-`,
            onClick: () => i(!0),
            children: t,
          }),
        }),
      (0, Y.jsx)(`div`, {
        className: Me,
        children: a.map((e) =>
          (0, Y.jsx)(
            g,
            {
              children: (0, Y.jsx)(`div`, {
                className: Ne,
                children:
                  e.element ||
                  (0, Y.jsx)(`div`, {
                    className: `oV1UvkuDMaA-`,
                    children: e.event.title,
                  }),
              }),
            },
            e.event.id,
          ),
        ),
      }),
    ],
  });
}
function Wi(e, t) {
  return e[0] - t[0];
}
function Gi(e, t) {
  return e.startDate.getTime() < t.startDate.getTime()
    ? -1
    : e.startDate.getTime() > t.startDate.getTime()
      ? 1
      : e.eventType < t.eventType
        ? -1
        : e.eventType > t.eventType
          ? 1
          : e?.id < t?.id
            ? -1
            : +(e?.id > t?.id);
}
function Ki(e, t) {
  let n = (e) => {
    switch (e) {
      case `deadline`:
        return 4;
      case `deadline-urgent`:
        return 3;
      case `release-game`:
        return 0;
      case `release-dlc`:
        return 1;
      case `event`:
        return 2;
    }
  };
  return n(e.eventType) < n(t.eventType)
    ? -1
    : n(e.eventType) > n(t.eventType)
      ? 1
      : e.id < t.id
        ? -1
        : +(e.id > t.id);
}
function qi(e) {
  let t = Math.min(...e.keys()),
    n = Math.max(...e.keys()),
    r = new Date(t);
  for (r.setMonth(r.getMonth() + 1); r.getTime() < n;)
    (e.has(r.getTime()) || e.set(r.getTime(), []),
      (r = new Date(r)),
      r.setMonth(r.getMonth() + 1));
  return e;
}
function Ji(e, t) {
  let n = J.useRef(void 0),
    r = J.useCallback(
      (r) => {
        e ? r.scrollIntoView() : (t(!0), (n.current = r));
      },
      [e, t],
    );
  return (
    J.useEffect(() => {
      e && n.current && (n.current.scrollIntoView(), (n.current = void 0));
    }, [e]),
    r
  );
}
function Yi(e) {
  let t = h();
  J.useEffect(() => {
    let n = e.registerForChange?.(() => t());
    return () => n?.Unregister();
  }, [e, t]);
}
function Xi(e, t, n, r) {
  return !(
    (n &&
      n.trim().length > 0 &&
      ((n = n.trim()),
      !t.title.toLocaleLowerCase().includes(n.toLocaleLowerCase()) &&
        !t.eventTypeName
          .toLocaleLowerCase()
          .includes(n.toLocaleLowerCase()))) ||
    (r != 0 && r != 3 && (!t.passesFilter || !t.passesFilter(r)))
  );
}
function Zi(e, t) {
  return J.useMemo(() => {
    let n = new Set(t.map((e) => e.id));
    return new Set(e.filter((e) => n.has(e.id)).map((e) => e.id));
  }, [e, t]);
}
var Qi = `g31b3nBKzAo-`,
  $i = `XwuHu386DZc-`,
  ea = `IhE0In-8-D8-`,
  ta = `s-F6pJ3AneU-`,
  na = `_1gJzmUa0F58-`,
  ra = `EobOPLhq6ME-`,
  ia = `qTOvIUzXQXA-`,
  aa = `zN1ZNI7AxHc-`;
function oa(e) {
  return (0, Y.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 60 39`,
    fill: `none`,
    ...e,
    children: [
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M20.2544 28.0733H21.8805C22.6505 28.0733 23.3893 27.7674 23.9338 27.2226C24.4782 26.6782 24.7841 25.9397 24.7841 25.1697V22.5369C24.7841 21.9376 24.5491 21.3626 24.1288 20.9351C23.7088 20.5079 23.1379 20.2628 22.5386 20.2527H20.2544V28.0733Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M53.0371 23.7372C53.0371 24.5497 52.3783 25.2085 51.5658 25.2085C50.7535 25.2085 50.0947 24.5497 50.0947 23.7372C50.0947 22.9246 50.7535 22.2661 51.5658 22.2661C52.3783 22.2661 53.0371 22.9246 53.0371 23.7372Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M13.7505 13.4774V16.0812C13.7635 16.6785 14.0095 17.2472 14.4364 17.665C14.8637 18.0831 15.4374 18.3169 16.0348 18.3169H18.319V10.4963H16.6835C15.8946 10.4881 15.1365 10.8012 14.5832 11.3636C14.0303 11.9257 13.7297 12.6889 13.7505 13.4774Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M32.421 17.4362C32.421 17.1362 32.4985 16.8265 32.5467 16.5263C32.5952 16.2263 32.6242 16.168 32.6724 15.9938C32.721 15.8196 32.7887 15.4613 32.8659 15.1904C32.9434 14.9194 32.9821 14.8227 33.0401 14.6387C33.0981 14.4547 33.2046 14.1355 33.3013 13.8935C33.398 13.6516 33.4563 13.5259 33.5335 13.3419C33.611 13.1579 33.7367 12.8771 33.853 12.6449C33.9693 12.4127 34.0464 12.2867 34.1435 12.1125C34.2402 11.9382 34.3952 11.6673 34.521 11.4543C34.6467 11.2413 34.7437 11.1058 34.8596 10.9413C34.9759 10.7769 35.1501 10.5251 35.2951 10.3317L35.6921 9.83797L35.9243 9.54747L35.9249 9.5481C33.7871 5.89204 30.5051 3.0416 26.5855 1.43715C22.666 -0.167213 18.327 -0.436528 14.2392 0.670589C10.1512 1.77802 6.54175 4.20066 3.96828 7.56433C1.39449 10.9277 0 15.0453 0 19.2807C0 23.5159 1.39449 27.6328 3.96828 30.9962C6.54175 34.3599 10.1512 36.7824 14.2392 37.89C18.327 38.9974 22.6656 38.7281 26.5855 37.1234C30.505 35.519 33.7871 32.6687 35.9249 29.0124L35.6927 28.722L35.3055 28.2282C35.1505 28.025 35.0055 27.8218 34.8603 27.6088L34.5216 27.0959C34.3861 26.8829 34.2604 26.6605 34.1344 26.4377C34.0086 26.2149 33.9409 26.0892 33.8536 25.9052C33.7667 25.7212 33.6309 25.4405 33.5341 25.1985C33.4374 24.9566 33.3697 24.8403 33.3019 24.6566C33.2342 24.4726 33.1277 24.1629 33.0407 23.9115C32.9538 23.6597 32.915 23.5532 32.8665 23.3598C32.818 23.1663 32.731 22.8273 32.6731 22.5564C32.6151 22.2854 32.5861 22.2079 32.5568 22.0239C32.5278 21.8399 32.4601 21.4237 32.4213 21.114C32.4213 20.959 32.4213 20.814 32.3633 20.659C32.3633 20.2041 32.2956 19.6911 32.2956 19.2749C32.2956 18.8587 32.2956 18.307 32.3633 17.8908C32.3728 17.7462 32.4018 17.5912 32.421 17.4362ZM22.5388 18.3171C23.6573 18.3196 24.7292 18.7651 25.52 19.5559C26.3108 20.3468 26.7563 21.4186 26.7588 22.5371V25.0924C26.7588 26.3759 26.2491 27.6069 25.3414 28.5143C24.434 29.4221 23.2029 29.9318 21.9194 29.9318H20.2545V32.2161C20.2545 32.7507 19.8213 33.1839 19.2866 33.1839C18.7523 33.1839 18.3187 32.7507 18.3187 32.2161V30.0093H16.0345C14.9154 30.0093 13.8419 29.5648 13.0505 28.7733C12.2593 27.9819 11.8145 26.9084 11.8145 25.7893C11.8145 25.2547 12.248 24.8214 12.7824 24.8214C13.317 24.8214 13.7503 25.2547 13.7503 25.7893C13.7503 26.3952 13.991 26.9762 14.4195 27.4043C14.8477 27.8328 15.429 28.0735 16.0345 28.0735H18.3187V20.2529H16.0345C14.9154 20.2529 13.8419 19.8083 13.0505 19.0169C12.2593 18.2254 11.8145 17.152 11.8145 16.0329V13.4776C11.8145 12.194 12.3246 10.963 13.2319 10.0556C14.1397 9.14792 15.3707 8.63816 16.6539 8.63816H18.2898V6.27642C18.2898 5.74206 18.723 5.30853 19.2576 5.30853C19.7923 5.30853 20.2255 5.74206 20.2255 6.27642V8.56065H22.5098C23.6283 8.56317 24.7001 9.00868 25.491 9.79948C26.2818 10.5903 26.7273 11.6622 26.7298 12.7807C26.7298 13.3153 26.2966 13.7486 25.7619 13.7486C25.2272 13.7486 24.794 13.3153 24.794 12.7807C24.794 12.1748 24.5533 11.5938 24.1248 11.1657C23.6966 10.7372 23.1156 10.4964 22.5098 10.4964H20.2545V18.3171H22.5388Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M44.1421 14.8326C44.1421 15.6451 43.4836 16.3036 42.6711 16.3036C41.8585 16.3036 41.1997 15.6451 41.1997 14.8326C41.1997 14.02 41.8585 13.3612 42.6711 13.3612C43.4836 13.3612 44.1421 14.02 44.1421 14.8326Z`,
      }),
      (0, Y.jsx)(`path`, {
        fill: `currentColor`,
        d: `M47.1135 32.1772C51.1064 32.1754 54.873 30.3237 57.3127 27.1629C59.7526 24.0024 60.5903 19.8898 59.5812 16.0265C58.572 12.1634 55.8299 8.98595 52.1562 7.42192C48.4822 5.8582 44.2911 6.08509 40.8077 8.0363C37.324 9.98725 34.9411 13.4422 34.3547 17.3918C33.7684 21.3415 35.0453 25.3397 37.8119 28.2185C40.2456 30.7473 43.6039 32.1764 47.1134 32.177L47.1135 32.1772ZM51.5657 27.1538C50.6624 27.1538 49.7957 26.7949 49.1567 26.156C48.5177 25.517 48.1589 24.6506 48.1589 23.747C48.1589 22.8434 48.5178 21.9769 49.1567 21.338C49.7957 20.699 50.6624 20.3398 51.5657 20.3398C52.4693 20.3398 53.3361 20.699 53.975 21.338C54.614 21.9769 54.9729 22.8434 54.9729 23.747C54.9678 24.6481 54.6067 25.5107 53.9688 26.1469C53.3307 26.7833 52.4671 27.1419 51.5657 27.1444V27.1538ZM42.6708 11.4255C43.5744 11.4255 44.4408 11.7847 45.0798 12.4237C45.7187 13.0623 46.0776 13.9291 46.0776 14.8327C46.0776 15.7363 45.7187 16.6027 45.0798 17.2417C44.4408 17.8806 43.5744 18.2395 42.6708 18.2395C41.7672 18.2395 40.9004 17.8806 40.2618 17.2417C39.6228 16.6027 39.2636 15.7363 39.2636 14.8327C39.2661 13.9297 39.626 13.0648 40.2643 12.4262C40.9029 11.7878 41.7678 11.428 42.6708 11.4255ZM39.5443 25.489L53.3271 11.7159C53.7112 11.387 54.2836 11.409 54.6413 11.7666C54.9989 12.1242 55.0209 12.6967 54.692 13.0805L40.9189 26.8536C40.5351 27.1825 39.9627 27.1605 39.605 26.8028C39.2474 26.4452 39.2254 25.8728 39.5543 25.489H39.5443Z`,
      }),
    ],
  });
}
function sa(e) {
  return (0, Y.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 55 37`,
    fill: `none`,
    ...e,
    children: (0, Y.jsx)(`path`, {
      fill: `currentColor`,
      d: `M33.6009 7.90708H50.8782C52.0142 7.90708 53.0449 8.3717 53.791 9.12055C54.5374 9.86976 55 10.9044 55 12.0447V25.672C55 27.9496 53.1458 29.8097 50.8783 29.8097H48.12C47.3373 31.81 45.8447 33.5566 43.8136 34.8285C41.6511 36.1828 38.8737 37 35.704 37C34.988 37 34.4074 36.4171 34.4074 35.6983C34.4074 35.1888 34.699 34.7479 35.1234 34.534C36.2956 33.8138 36.9901 33.0738 37.3857 32.1952C37.6859 31.5282 37.8413 30.7449 37.9168 29.8096H25.5205C23.2519 29.8096 21.3991 27.9482 21.3991 25.6719V21.9028H17.0836C17.1592 22.8378 17.3146 23.6212 17.6148 24.2881C18.0105 25.167 18.7048 25.9068 19.8768 26.6272C20.3014 26.8411 20.5928 27.2819 20.5928 27.7913C20.5928 28.5101 20.0122 29.093 19.2961 29.093C16.1265 29.093 13.3488 28.2756 11.1865 26.9217C9.15546 25.6497 7.66267 23.9032 6.88002 21.9029H4.12174C1.854 21.9029 0 20.0436 0 17.7653V4.13753C0 1.86138 1.85313 0 4.12174 0H29.4796C31.7473 0 33.6011 1.85943 33.6011 4.13753L33.6009 7.90708ZM23.9921 21.9028V25.6719C23.9921 26.5196 24.676 27.2063 25.5202 27.2063C30.1078 27.2063 34.7063 27.2113 39.2871 27.2113C40.0005 27.2225 40.5695 27.8123 40.5584 28.5282C40.5267 30.4189 40.346 31.9294 39.7456 33.2629C39.6428 33.4912 39.529 33.7121 39.4031 33.9267C40.5378 33.6214 41.5597 33.1767 42.4457 32.6218C44.2148 31.5141 45.4374 29.9682 45.9188 28.231C46.0452 27.6452 46.5644 27.2064 47.1859 27.2064H50.8781C51.7206 27.2064 52.4066 26.5198 52.4066 25.6721V12.0448C52.4066 11.623 52.2346 11.2396 51.9574 10.9613C51.6804 10.6832 51.2983 10.5106 50.8781 10.5106H33.6009V17.7653C33.6009 18.9021 33.138 19.9352 32.3921 20.6842L32.387 20.6892C31.6407 21.4382 30.6117 21.9027 29.4793 21.9027H23.992L23.9921 21.9028ZM9.08081 20.3238C9.56237 22.061 10.7848 23.607 12.5541 24.7148C13.4403 25.2696 14.4621 25.7144 15.5971 26.0197C15.4712 25.8051 15.3572 25.584 15.2544 25.3557C14.654 24.0223 14.473 22.5121 14.4412 20.6215C14.4301 19.9054 14.9992 19.3156 15.7125 19.3046C18.0317 19.3046 20.3694 19.2996 22.6953 19.2996H29.479C29.9011 19.2996 30.284 19.128 30.5608 18.8512C30.8365 18.5733 31.0074 18.1891 31.0074 17.7654V4.13759C31.0074 3.29058 30.3211 2.60342 29.4792 2.60342H4.12137C3.27726 2.60342 2.59295 3.29187 2.59295 4.13759V17.7654C2.59295 18.6124 3.27947 19.2995 4.12137 19.2995H7.81361C8.43495 19.2995 8.95412 19.7383 9.08072 20.3239L9.08081 20.3238Z`,
    }),
  });
}
function ca(e) {
  return (0, Y.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 42 35`,
    fill: `none`,
    ...e,
    children: (0, Y.jsx)(`path`, {
      fill: `currentColor`,
      d: `M2.86369 0C1.57321 0 0.471511 0.88952 0.119285 2.09452L20.185 19.8661C20.6574 20.2845 21.3421 20.2845 21.8145 19.8661L41.8802 2.09452C41.528 0.88952 40.4264 0 39.136 0H2.86369ZM0 4.5631V30.4371L14.6054 17.5003L0 4.5631ZM42 4.5631L27.3946 17.4999L42 30.4367V4.5631ZM16.0615 18.7892L0.119413 32.9055C0.471605 34.1103 1.57316 35 2.86382 35H39.1363C40.4268 35 41.5284 34.1105 41.8807 32.9055L25.9386 18.7892L23.0675 21.3318C21.8876 22.3767 20.1122 22.3767 18.9324 21.3318L16.0615 18.7892Z`,
    }),
  });
}
function la(e) {
  let t = l(`rgDailyDealInvitations`, `application_config`);
  if (!e && (!t || t.length == 0)) return [];
  let n = [],
    r = t.some(
      (e) => new Date().getTime() / 1e3 >= e.rtexpiretime - 14 * V.PerDay,
    );
  return (
    n.push({
      id: `dailydeal`,
      title: B(`#Dashboard_ImportantActions_DailyDeals_Title`),
      image: (0, Y.jsx)(oa, {}),
      description: B(
        r
          ? `#Dashboard_ImportantActions_DailyDeals_Desc_Expiring`
          : `#Dashboard_ImportantActions_DailyDeals_Desc`,
      ),
      priority: +!!r,
      actionDescription: B(`#DailyDeals_Dashboard`),
      action: `${a.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
    }),
    n
  );
}
function ua(e) {
  let t = l(`publisherid`, `application_config`),
    n = l(`rgImportantActionData`, `application_config`);
  if (!e && !n) return [];
  let r = [];
  if (
    ((e || !n.bHasCommunicationRightUser) &&
      r.push({
        id: `communicationrights`,
        title: B(`#Dashboard_ImportantActions_CommRights_Title`),
        image: (0, Y.jsx)(sa, {}),
        description: B(`#Dashboard_ImportantActions_CommRights_Desc`),
        details: B(`#Dashboard_ImportantActions_CommRights_Details`),
        actionDescription: B(`#Dashboard_ImportantActions_CommRights_Action`),
        action: `${a.PARTNER_BASE_URL}doc/gettingstarted/managing_users/communication`,
      }),
    (e || n.bRemindAddMailingAddress) &&
      r.push({
        id: `mailingaddr`,
        title: B(`#Dashboard_ImportantActions_MailingAddr_Title`),
        image: (0, Y.jsx)(ca, {}),
        description: B(`#Dashboard_ImportantActions_MailingAddr_Desc`),
        details: B(`#Dashboard_ImportantActions_MailingAddr_Details`),
        actionDescription: B(`#Dashboard_ImportantActions_MailingAddr_Action`),
        action: `${a.PARTNER_BASE_URL}pub/mailingaddresses/${t}`,
      }),
    (e || n.bRemindAddPhoneNumber) &&
      r.push({
        id: `phonenumber`,
        title: B(`#Dashboard_ImportantActions_PhoneNumber_Title`),
        image: (0, Y.jsx)(sa, {}),
        description: B(`#Dashboard_ImportantActions_PhoneNumber_Desc`),
        actionDescription: B(`#Dashboard_ImportantActions_PhoneNumber_Action`),
        action: `${a.STORE_BASE_URL}phone/add`,
      }),
    e || n.bNeedToVerifyPaymentInfo)
  ) {
    let t =
        n.rtPaymentInfoExpires > 0
          ? n.rtPaymentInfoExpires
          : e
            ? new Date().getTime() / 1e3 + V.PerDay * 7
            : 0,
      i = new Date(t * 1e3).toLocaleDateString(We.GetPreferredLocales(), {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
      });
    r.push({
      id: `bankingexpiration`,
      title: B(`#Dashboard_ImportantActions_BankingExpiring_Title`),
      image: (0, Y.jsx)(oa, {}),
      description: B(`#Dashboard_ImportantActions_BankingExpiring_Desc`, i),
      details: B(`#Dashboard_ImportantActions_BankingExpiring_Details`, i),
      priority: 1,
      actionDescription: B(
        `#Dashboard_ImportantActions_BankingExpiring_Action`,
      ),
      action: `${a.PARTNER_BASE_URL}pub/view`,
    });
  }
  return r;
}
function da(e) {
  let t = la(e),
    n = ua(e);
  return J.useMemo(() => {
    let e = t.concat(n);
    return (
      e.sort((e, t) => {
        let n = fa(e.priority),
          r = fa(t.priority);
        return n === r ? 0 : r - n;
      }),
      e
    );
  }, [t, n]);
}
function fa(e) {
  switch (e) {
    case 1:
      return 1;
    default:
      return 0;
  }
}
function pa(e) {
  let [t] = lt(`testactions`, !1),
    n = da(t);
  return n.length == 0
    ? null
    : (0, Y.jsx)(vt, {
        title: B(`#Dashboard_ImportantActions_Title`),
        count: n.length,
        children: (0, Y.jsx)(`div`, {
          className: Qi,
          children: n.map((e) => (0, Y.jsx)(ma, { ...e }, e.id)),
        }),
      });
}
function ma(e) {
  let {
    title: t,
    image: n,
    description: r,
    details: i,
    priority: a,
    actionDescription: o,
    action: s,
  } = e;
  return (0, Y.jsxs)(`div`, {
    className: c($i, a == 1 && `YTdkEl1dRZY-`),
    children: [
      (0, Y.jsxs)(`div`, {
        className: ea,
        children: [
          (0, Y.jsx)(`div`, { className: ta, children: n }),
          (0, Y.jsxs)(`div`, {
            className: na,
            children: [
              (0, Y.jsx)(`div`, { className: ra, children: t }),
              (0, Y.jsxs)(`div`, {
                className: ia,
                children: [r, i && (0, Y.jsx)(H, { tooltip: i })],
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`button`, {
        className: c(aa),
        onClick: () => {
          (typeof s == `function` && s(), window.open(s, `_blank`));
        },
        children: o,
      }),
    ],
  });
}
function ha(e) {
  let t = $e(),
    n = l(`bShowWarnings`, `application_config`),
    r = l(`bTestData`, `application_config`),
    i = l(`bPartnerOnboarding`, `application_config`);
  return ga(t)
    ? null
    : i
      ? (0, Y.jsx)(yt, {
          children: (0, Y.jsx)(Fi, {
            partnerId: t,
            showWarnings: n,
            testData: r,
          }),
        })
      : (0, Y.jsxs)(yt, {
          children: [
            (0, Y.jsx)(pa, {}),
            (0, Y.jsx)(_t, {}),
            (0, Y.jsx)(Oi, { partnerId: t, showWarnings: n, testData: r }),
          ],
        });
}
function ga(t) {
  let [n, r] = J.useState(!0);
  return (
    J.useEffect(() => {
      (tt.Init(),
        j.Get(),
        (async () => {
          (await X.Get().Init(e.accountid, Number.isNaN(t) ? 0 : t), r(!1));
        })());
    }, [t]),
    n
  );
}
export { ha as default };
