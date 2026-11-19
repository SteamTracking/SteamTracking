/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  Q as n,
  en as r,
  it as i,
  j as a,
  pt as o,
  rt as s,
  sn as c,
  vt as l,
  yt as u,
} from "./chunk~de7f2df91c.js";
import {
  Ft as d,
  It as f,
  Kt as p,
  M as m,
  N as h,
  r as g,
  t as _,
} from "./chunk~25a6634263.js";
import {
  B as v,
  D as y,
  Dt as b,
  Et as x,
  F as S,
  Ft as C,
  G as w,
  H as T,
  I as E,
  J as D,
  K as O,
  L as ee,
  M as k,
  N as A,
  O as j,
  Ot as M,
  P as N,
  R as te,
  S as ne,
  St as re,
  T as ie,
  U as P,
  Ut as ae,
  V as oe,
  W as F,
  X as I,
  Y as L,
  Z as R,
  _t as se,
  a as ce,
  b as le,
  bt as ue,
  c as de,
  dt as fe,
  ft as pe,
  gt as me,
  h as he,
  ht as ge,
  i as _e,
  j as ve,
  k as ye,
  kt as be,
  l as xe,
  m as Se,
  mt as Ce,
  n as we,
  o as Te,
  p as Ee,
  pt as De,
  q as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
  w as Ne,
  wt as Pe,
  yt as Fe,
  z as Ie,
} from "./chunk~54f70c90c1.js";
import {
  Aa as Le,
  Da as Re,
  Pa as ze,
  _a as Be,
  _n as Ve,
  aa as He,
  da as z,
  eo as B,
  fa as Ue,
  gr as We,
  ma as Ge,
  mn as V,
  oa as Ke,
  ua as qe,
  va as Je,
  vn as Ye,
} from "./chunk~1fa4b8f2ff.js";
import "./chunk~44f252525d.js";
import { t as Xe } from "./chunk~ede3e357a2.js";
import "./chunk~a825a84845.js";
import { n as Ze } from "./chunk~b0a84aab1b.js";
import { a as H, n as Qe } from "./chunk~fc8a9e4879.js";
import { n as $e } from "./chunk~9d71b14b50.js";
import {
  a as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from "./chunk~0aa5028ef4.js";
import { r as st } from "./chunk~af36c62e9f.js";
import { t as ct } from "./chunk~eefd71512b.js";
import { n as lt } from "./chunk~0111fcd096.js";
import { a as ut, n as dt, v as U } from "./chunk~2bee5a7d08.js";
import "./chunk~a6b9ae1345.js";
import { d as ft, f as pt, g as mt } from "./chunk~3f2c78281d.js";
import { t as ht } from "./chunk~93fc7377c2.js";
import { i as gt } from "./chunk~7b4b9eb713.js";
import { n as _t, t as W } from "./chunk~a7c5e71e12.js";
import { n as vt, r as yt } from "./chunk~7e6646f5a7.js";
import { t as bt } from "./chunk~9b35b2d482.js";
import { g as xt, h as St, m as G, p as K } from "./chunk~87cd89c815.js";
import {
  a as Ct,
  i as wt,
  n as Tt,
  r as Et,
  t as Dt,
} from "./chunk~8e34816c9e.js";
import { i as Ot } from "./chunk~8255136f90.js";
import { vt as kt } from "./chunk~cb393b4e7b.js";
import { t as At } from "./chunk~80765d41ae.js";
var q = c(t()),
  jt = `-bcJANy5VMA-`,
  Mt = `RovZ0LsFtt8-`,
  Nt = `_7lNY35dQfo4-`,
  Pt = `Sb1tlgmh6Y8-`,
  Ft = `ni2dNmXBX1k-`,
  It = `ERoEwjtja6E-`,
  Lt = `_0tXgdz8uE6Y-`,
  Rt = `b8JzMfOLVi8-`,
  J = l();
function zt(e) {
  let { viewDate: t } = e,
    n = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `short`,
    }).format(t);
  return (0, J.jsx)(`div`, {
    className: jt,
    children: (0, J.jsx)(`div`, { className: Mt, children: n }),
  });
}
function Bt(e) {
  let {
      now: t,
      viewDate: n,
      events: r,
      filterVisibleEventIds: i,
      bShowPreceedingWeeks: o,
      bShowFollowingWeeks: s,
      fnScrollToDay: c,
      hoverEvent: l,
      compareEvents: u,
      colorPriority: d,
    } = e,
    f = G(t),
    p = xt(r, (e) => G(e.startDate)),
    m = K(n, -n.getDay()),
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
    v = q.useMemo(
      () => Array.from({ length: g * 7 }, (e, t) => t).map(() => q.createRef()),
      [g],
    );
  q.useEffect(() => {
    for (let e = 0; e < g; e++) {
      let t = K(m, e * 7);
      for (let n = 0; n < 7; n++) {
        let r = K(t, n),
          i = G(r),
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
      r = K(m, e * 7);
    for (let d = 0; d < 7; d++) {
      let m = K(r, d),
        h = G(m),
        g = n.getMonth() === m.getMonth(),
        y = n.getMonth() === m.getMonth() || (o && m <= n) || (s && m >= n),
        b = h.getTime() === f.getTime(),
        x = p.get(Math.floor(h.getTime() / 1e3))?.sort(u),
        S = x?.every((e) => i.has(e.id)),
        C = x?.some((e) => e.note),
        w =
          l &&
          h.getTime() >= G(l.startDate).getTime() &&
          h.getTime() <= G(l.endDate).getTime(),
        T = a(
          Ft,
          !g && !w && `_1CVPS7mLrfw-`,
          !y && `KOVhvGxr6og-`,
          b && `_7H1LYjC8bPE-`,
          C && S && `DqfqRgwcIR8-`,
          !C && S && `MQT5hyfOB2Q-`,
          w && y && `_9VpjQYOBKgg-`,
        );
      t.push(
        (0, J.jsx)(
          Vt,
          {
            date: m,
            daysEvents: x,
            tooltipDateFormat: _,
            children: (0, J.jsx)(`div`, {
              className: T,
              onClick: () => c(m),
              ref: v[e * 7 + d],
              children: m.getDate(),
            }),
          },
          d,
        ),
      );
    }
    y.push((0, J.jsx)(`div`, { className: Nt, children: t }, e));
  }
  return (0, J.jsx)(J.Fragment, { children: y });
}
function Vt(e) {
  let { date: t, daysEvents: n, tooltipDateFormat: r, children: i } = e;
  if (!n) return (0, J.jsx)(J.Fragment, { children: i });
  let a = (0, J.jsxs)(`div`, {
    className: It,
    children: [
      (0, J.jsx)(`div`, { className: Lt, children: r.format(t) }),
      n.map((e) => (0, J.jsx)(Ht, { event: e }, e.id)),
    ],
  });
  return (0, J.jsx)(Ye, { toolTipContent: a, children: i });
}
function Ht(e) {
  let { event: t } = e;
  Wt(t);
  let n = q.useRef(void 0);
  return (
    q.useEffect(() => {
      n.current?.style.setProperty(`--event-color`, t.color);
    }, [t.color]),
    (0, J.jsxs)(`div`, {
      className: Rt,
      ref: n,
      children: [
        t.title,
        t.valveOnly &&
          (0, J.jsx)(`span`, { className: void 0, children: ` (VO)` }),
      ],
    })
  );
}
function Ut(e) {
  let t = new Intl.DateTimeFormat(navigator.language, { weekday: `short` }),
    n = [...Array(7).keys()].map((e) => t.format(new Date(2024, 0, e + 7)));
  return (0, J.jsx)(`div`, {
    className: Nt,
    children: n.map((e) =>
      (0, J.jsx)(`div`, { className: Pt, children: e }, e),
    ),
  });
}
function Wt(e) {
  let t = h();
  q.useEffect(() => {
    let n = e.registerForChange?.(() => t());
    return () => n?.Unregister();
  }, [e, t]);
}
var Gt = class {
  m_eventsChanged = new d();
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
function Kt(e) {
  let [t, n] = q.useState([]),
    [r, i] = q.useState(0);
  return (
    m(e.EventsChanged(), () => {
      (n(e.GetAdditionalEvents()), i((e) => e + 1));
    }),
    t
  );
}
function qt(e) {
  let [t, n] = q.useState(new Set()),
    [r, i] = q.useState(0);
  return (
    m(e.EventsChanged(), () => {
      (n(e.GetHiddenIds()), i((e) => e + 1));
    }),
    t
  );
}
var Y = class e {
  m_accountId;
  m_partnerId;
  m_serviceTransport;
  m_eventsChanged = new d();
  m_rgDismisses = new Map();
  m_setDismisses = new Set();
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  async Init(e, t) {
    ((this.m_accountId = e),
      (this.m_partnerId = t),
      (this.m_serviceTransport = Ot.Get()
        .GetPromotionTransport()
        .GetServiceTransport()));
    let n = u.Init(wt);
    (n.Body().set_accountid(this.m_accountId),
      n.Body().set_partnerid(this.m_partnerId),
      n
        .Body()
        .set_rtime_after(
          Math.floor(new Date().getTime() / 1e3 - 14 * B.PerDay),
        ));
    let r = await Ct.GetDismissTimeRange(this.m_serviceTransport, n);
    if (r.BSuccess()) {
      for (let e of r.Body().dismiss_list())
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
      r(this.m_serviceTransport, `Must call Init first`), this.m_setDismisses
    );
  }
  GetDismissState(e) {
    return this.m_rgDismisses.get(e)?.length > 0;
  }
  async SetDismiss(e, t) {
    r(this.m_serviceTransport, `Must call Init first`);
    let n = this.m_rgDismisses.get(e) ?? [];
    (n.push(null), this.m_rgDismisses.set(e, n), this.DismissesUpdated());
    let i = u.Init(Tt),
      a = new Dt();
    (a.set_accountid(this.m_accountId),
      a.set_partnerid(this.m_partnerId),
      a.set_key_json(e),
      a.set_state(1),
      a.set_rtime_create(Math.floor(new Date().getTime() / 1e3)),
      a.set_rtime_validity(Math.floor(t.getTime() / 1e3)),
      i.Body().add_dismiss_list(a));
    let o = await Ct.CreateDismiss(this.m_serviceTransport, i);
    if (o.BSuccess() && o.Body().dismiss_list().length > 0) {
      let t = (this.m_rgDismisses.get(e) ?? []).filter((e) => e !== null);
      (t.push(o.Body().dismiss_list()[0].dismiss_id()),
        this.m_rgDismisses.set(e, t));
    }
  }
  async ClearDismiss(e) {
    r(this.m_serviceTransport, `Must call Init first`);
    let t = this.m_rgDismisses.get(e);
    if ((this.m_rgDismisses.delete(e), this.DismissesUpdated(), t))
      for (let e of t) {
        let t = u.Init(Et);
        (t.Body().set_dismiss_id(e),
          await Ct.DeleteDismiss(this.m_serviceTransport, t));
      }
  }
};
function Jt() {
  let [e, t] = q.useState(Y.Get().GetDismissedEvents()),
    [n, r] = q.useState(0);
  return (
    m(Y.Get().EventsChanged(), () => {
      (t(Y.Get().GetDismissedEvents()), r((e) => e + 1));
    }),
    e
  );
}
var Yt = `tVHOfgHRybk-`,
  Xt = `KIGqyEThJKk-`,
  Zt = `gMBAaE-Jr5Q-`,
  Qt = `EZNV3Nld6Hc-`,
  $t = `_8DiCl1vDkY8-`;
function en() {
  return q.useMemo(
    () =>
      n(`rgUpcomingReleaseApps`, `application_config`)?.map((e) => {
        let t = new Date(e.releaserequest.release_date * 1e3),
          n = e.type == `DLC`,
          r = n ? `release-dlc` : `release-game`;
        return {
          title: e.name,
          startDate: t,
          endDate: t,
          eventType: r,
          id: e.appid.toString(),
          eventTypeName: z(
            n
              ? `#Dashboard_UpcomingEvents_EventType_Release_DLC`
              : `#Dashboard_UpcomingEvents_EventType_Release`,
          ),
          eventTypeSortWeight: n ? 10 : 0,
          getElement: () => (0, J.jsx)(tn, { app: e }),
          passesFilter: (e) => e == 2,
        };
      }) ?? [],
    [],
  );
}
function tn(e) {
  let { app: t } = e,
    [n] = W(t.appid, 0, { include_assets: !0, include_release: !0 }),
    r = !!n?.GetName();
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(nn, { app: t, storeItem: n, hasStoreItem: r }),
      (0, J.jsx)(an, { app: t, hasStoreItem: r }),
    ],
  });
}
function nn(e) {
  let { app: t, storeItem: n, hasStoreItem: r } = e,
    i = s.PARTNER_BASE_URL + `apps/landing/` + t.appid,
    o = r ? n.GetName() : t.name,
    c = n?.GetAssets().GetHeaderURL();
  return (0, J.jsxs)(w, {
    hasImage: !!c,
    children: [
      (0, J.jsx)(O, { imageUrl: c, url: i }),
      (0, J.jsxs)(L, {
        hasImage: !!c,
        children: [
          (0, J.jsx)(D, { text: o, url: i }),
          (0, J.jsxs)(`div`, {
            className: Yt,
            children: [
              t.releaserequest &&
                (0, J.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: z(`#App_Landing_SpecifiedReleaseDate`),
                    }),
                    (0, J.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: rn(t.releaserequest.release_date),
                    }),
                  ],
                }),
              r &&
                (0, J.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: z(`#App_Landing_CustomersSeeReleaseDate`),
                    }),
                    (0, J.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: n.GetFormattedSteamReleaseDate(),
                    }),
                  ],
                }),
              t.earliestadvancedaccessdate > 0 &&
                (0, J.jsxs)(`div`, {
                  className: a(`iSMHkhZtJis-`, `RcifCC6jW3A-`),
                  children: [
                    (0, J.jsxs)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: [
                        z(`#App_Landing_AdvancedAccessDate`),
                        (0, J.jsx)(V, {
                          tooltip: z(`#App_Landing_AdvancedAccessDate_ttip`),
                        }),
                      ],
                    }),
                    (0, J.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: rn(t.earliestadvancedaccessdate),
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
function rn(e) {
  return e
    ? `${ze(e)} ${Le(e, {}, { timeZoneName: `short` })}`
    : z(`#App_Landing_UnsetReleaseDate`);
}
function an(e) {
  let { app: t, hasStoreItem: n } = e,
    r = it(t.releasestate, n),
    i = a(
      $t,
      t.releasestate == `prerelease` && `-PegX2P-Uso-`,
      t.releasestate == `released` && `_0SILAZhIcgo-`,
    );
  return (0, J.jsx)(`div`, {
    className: Xt,
    children: (0, J.jsxs)(`div`, {
      className: Zt,
      children: [
        (0, J.jsx)(`div`, {
          className: Qt,
          children: z(`#Dashboard_UpcomingEvents_ReleaseStatusLabel`),
        }),
        (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsx)(`span`, { className: i, children: r.sText }),
            r.sTooltip && (0, J.jsx)(V, { tooltip: r.sTooltip }),
          ],
        }),
      ],
    }),
  });
}
var on = `j-KLJ7Mtr80-`,
  sn = `IvgNTZF5PaM-`,
  cn = `s-5fYfwRBqo-`,
  ln = `RazA3zDRLMM-`,
  un = `-rKdDl3YL68-`,
  dn = `t0jMkZAhUvc-`,
  fn = `_87cPEnGNg-A-`,
  pn = `Rulq0q4y6GY-`,
  mn = `lfrlL7fm77Q-`,
  hn = class e {
    m_rgOptIns;
    m_rgOptInComputed = new Map();
    static async Construct() {
      let t = new e();
      return (await t.Init(), t);
    }
    async Init() {
      let t = n(`publisherid`, `application_config`),
        r = t > 0 ? `?publisherid=${t}` : ``,
        i = await fetch(
          `${s.PARTNER_BASE_URL}/optin/ajaxoptinsfordashboard${r}`,
        );
      try {
        ((this.m_rgOptIns = await i.json()),
          this.m_rgOptIns && e.ExtractOptInDefinitions(this.m_rgOptIns));
      } catch {
        this.m_rgOptIns = {};
      }
    }
    static ExtractOptInDefinitions(e) {
      for (let t of Object.keys(e)) {
        let n = e[t].description,
          r = tt(n?.jsondata);
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
                Object.entries(t.discount_status).map(([e, t]) => [
                  Number(e),
                  t,
                ]),
              )
            : void 0,
        };
      return (this.m_rgOptInComputed.set(e, i), i);
    }
  };
function gn() {
  return Xe({
    queryKey: [`DashboardOptInStore`],
    queryFn: () => hn.Construct(),
    staleTime: 1 / 0,
  }).data;
}
function _n(e) {
  return gn()?.GetInfo(e);
}
function vn() {
  return q.useMemo(() => {
    let e = n(`rgPartnerDashboardAssets`, `application_config`);
    return e
      ? Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map())
      : new Map();
  }, []);
}
function yn(e) {
  let t = $(),
    r = gn(),
    i = q.useMemo(() => {
      let i = n(`rgPartnerPromotions`, `application_config`),
        a = i?.rgPlans
          ?.map((e) => tt(e.partner_readonly_jsondata))
          .filter((e) => e && e.id),
        o = i?.rgPlans
          ?.map((e) => ({ plan: e, input: tt(e.input_jsondata) }))
          .filter((e) => !!e.input)
          .reduce((e, t) => e.set(t.plan.promotion_id, t.input), new Map()),
        s = new Set(i?.rgHiddenPlanIDs ?? []);
      return (
        a
          ?.map((n) => {
            if (!n.start_date || (new Date(n.end_date * 1e3) < t && !X(t, n)))
              return null;
            let i = o.get(n.id);
            if (
              (n.type == `assetrequest` &&
                new Date(n.start_date * 1e3) < t &&
                i?.enable_input &&
                i.submitting_accountid) ||
              (n.type == `launchtracking` && !i?.enable_input)
            )
              return null;
            let a = r?.GetInfo(n.opt_in_id),
              c = n.type == `assetrequest` && i && !i.enable_input,
              l =
                s.has(n.id) ||
                ((n.type == `nextfest` || n.type == `themesale`) && r && !a) ||
                c,
              u = (n.type == `nextfest` || n.type == `themesale`) && !r,
              d =
                n.type != `seasonalsale` &&
                a &&
                a.rgEligibleApps &&
                a.rgEligibleApps.length == 0 &&
                a.rgRegisteredApps &&
                a.rgRegisteredApps.length == 0;
            return new bn(
              n.id,
              e,
              l,
              n,
              i,
              a,
              new Date(n.start_date * 1e3),
              new Date(n.end_date * 1e3),
              `event`,
              xn(t, n),
              u,
              d,
              Sn,
              Cn,
            );
          })
          .filter((e) => !!e) ?? []
      );
    }, [t, r, e]),
    a = Un(e);
  return q.useMemo(() => [...i, ...a], [i, a]);
}
var bn = class {
  m_changedCallbacks = new d();
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
  constructor(e, t, n, r, i, a, o, c, l, u, d, f, p, m) {
    ((this.m_partnerId = t),
      (this.valveOnly = n),
      (this.m_plan = r),
      (this.m_assetInput = i),
      (this.m_optIn = a),
      (this.id = e),
      (this.title = Hn(r.name, r.type, a, r.start_date)),
      (this.startDate = o),
      (this.endDate = c),
      (this.eventType = l),
      (this.eventTypeName = u),
      (this.editURL = `${s.PARTNER_BASE_URL}promotion/planning/edit/${this.m_plan.id}`),
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
      (a.m_changedCallbacks = new d()),
      (a.id = e),
      (a.startDate = t),
      (a.endDate = n),
      (a.eventType = r),
      (a.eventTypeName = i),
      a
    );
  }
};
e([f], bn.prototype, `dataChanged`, null);
function xn(e, t) {
  if (X(e, t))
    return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_recap`);
  switch (t.type) {
    case `midweek`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_midweek`);
    case `weekenddeal`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_weekenddeal`);
    case `saleevent`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_saleevent`);
    case `themesale`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_themesale`);
    case `nextfest`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_nextfest`);
    case `seasonalsale`:
      return z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_seasonalsale`,
      );
    case `informational`:
      return z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_informational`,
      );
    case `launchtracking`:
      return z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_launchtracking`,
      );
    case `dailydeal`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_dailydeal`);
    case `vacation`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_vacation`);
    case `important`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_important`);
    case `preload`:
      return z(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_preload`);
    case `assetrequest`:
      return z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest`,
      );
  }
}
function X(e, t) {
  return (
    t.type == `nextfest` && new Date(t.end_date * 1e3).getTime() < e.getTime()
  );
}
function Sn(e) {
  let { eventData: t } = e;
  return X($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, J.jsx)(An, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, J.jsx)(En, { eventData: t })
      : (0, J.jsx)(wn, { eventData: t });
}
function Cn(e) {
  let { eventData: t } = e;
  return X($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, J.jsx)(Mn, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, J.jsx)(Dn, { eventData: t })
      : (0, J.jsx)(Tn, { eventData: t });
}
function wn(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = W(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [i] = W(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    a = r ?? i,
    c = t.m_plan.type == `seasonalsale`;
  kn(t);
  let l =
      n.type == `seasonalsale`
        ? `${s.PARTNER_BASE_URL}doc/marketing/discounts/seasonalsales`
        : void 0,
    u = a?.GetAssets().GetHeaderURL();
  l ??= a ? s.PARTNER_BASE_URL + `apps/landing/` + a.GetAppID() : null;
  let d = o(s.LANGUAGE),
    { eventModel: f, bLoading: p } = H(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  ((u ??= !p && f?.GetImageURL(`capsule`, d, U.capsule_main)),
    (l ??= !p && gt(f)));
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
        ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${n.discount_event_id}`
        : void 0,
    g = (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(I, {
          url: h,
          children: z(
            `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
          ),
        }),
        c &&
          (0, J.jsx)(I, {
            url: l,
            children: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
        (0, J.jsx)(I, {
          url: n.asset_kit_url,
          children: z(`#Dashboard_UpcomingEvents_Events_OptIn_Button_AssetKit`),
        }),
      ],
    }),
    _ = at(n);
  return (0, J.jsxs)(w, {
    dimmed: t.dimmed,
    backgroundColor: _,
    hasImage: !!u,
    children: [
      (0, J.jsx)(Nn, {
        warnings: m,
        eventName: t.title,
        startTime: n.start_date,
        endTime: n.end_date,
        eventUrl: l,
        imageUrl: u,
        additionalButtons: g,
        bigName: c,
      }),
      (0, J.jsx)(Pn, { eventData: t }),
    ],
  });
}
function Tn(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = W(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [i] = W(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    a = (r ?? i)?.GetAssets().GetHeaderURL(),
    c = o(s.LANGUAGE),
    { eventModel: l, bLoading: u } = H(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  return (
    (a ??= !u && l?.GetImageURL(`capsule`, c, U.capsule_main)),
    (0, J.jsx)(v, { imageUrl: a })
  );
}
function En(e) {
  let { eventData: t } = e,
    n = o(s.LANGUAGE),
    r = t.m_plan,
    i = t.m_optIn,
    a = r.opt_in_id
      ? `${s.PARTNER_BASE_URL}optin/sale/${r.opt_in_id?.replace(`sale_`, ``)}`
      : void 0,
    c = [];
  t.valveOnly &&
    ((r.sale_clan_account && r.sale_clan_event_gid) || c.push(`no sale event`),
    r.opt_in_id || c.push(`no opt-in`));
  let l;
  if (r.type == `nextfest` && t.eventType == `deadline`) {
    let e = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(
      new Date(t.m_optIn.description.definition.optin_deadline_date * 1e3),
    );
    l = (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          className: on,
          children: z(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses`,
            e,
          ),
        }),
        (0, J.jsx)(`div`, {
          children: z(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses_Description`,
          ),
        }),
      ],
    });
  }
  (On(t), kn(t));
  let u = i?.description.start_date ?? r.start_date,
    d = i?.description.end_date ?? r.end_date,
    f = i?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    p = i?.description.opt_in_name && f && A(i?.description.opt_in_name, n, f),
    m = vn().get(`optin_placeholder_banner`),
    h = p ?? m,
    g = p ? void 0 : nt(r.id),
    _ = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    v = q.useMemo(
      () => et(_(i?.rgEligibleApps, !1), _(i?.rgRegisteredApps, !0)),
      [i?.rgEligibleApps, i?.rgRegisteredApps],
    ),
    y = v?.length > 0;
  return (0, J.jsxs)(w, {
    buttonPosition: y ? `bottom` : void 0,
    backgroundImageUrl: h,
    backgroundColor: g,
    dimmed: t.dimmed,
    children: [
      (0, J.jsx)(Nn, {
        warnings: c,
        eventName: t.title,
        eventDescription: l,
        startTime: u,
        endTime: d,
        eventUrl: a,
        inlineDate: !0,
      }),
      i &&
        (0, J.jsx)(Fn, {
          eventData: t,
          eventUrl: a,
          optIn: i,
          invitedAndRegisteredApps: v,
        }),
    ],
  });
}
function Dn(e) {
  let { eventData: t } = e,
    n = o(s.LANGUAGE),
    r = t.m_optIn,
    i = r?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    a = r?.description.opt_in_name && i && A(r?.description.opt_in_name, n, i);
  return (0, J.jsx)(v, { imageUrl: a });
}
function On(e) {
  let t = $(),
    n = xi();
  q.useEffect(() => {
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
          z(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_registration_reminder`,
          ),
        );
        ((t.getElement = () => (0, J.jsx)(En, { eventData: t })),
          (r = n.AddAdditionalEvent(t)));
      }
    }
    return r;
  }, [t, n, e]);
}
function kn(e) {
  let t = xi(),
    n =
      (e.m_plan.type == `seasonalsale` || e.m_plan.type == `themesale`) &&
      e.eventType != `deadline` &&
      e.eventType != `deadline-urgent` &&
      e.m_optIn?.description?.opt_in_name &&
      e.m_optIn.rgEligibleApps &&
      e.m_optIn.rgRegisteredApps &&
      e.m_optIn.rgFeaturedApps &&
      e.m_optIn.description.definition.additional_featuring_section_enabled,
    r = q.useMemo(
      () =>
        e.m_optIn?.rgRegisteredApps?.map((e) => ({
          appid: e.appid,
          appName: e.app_name,
        })) ?? [],
      [e.m_optIn?.rgRegisteredApps],
    ),
    i = Vn(e.m_partnerId, r, e.m_plan.start_date, e.m_plan.end_date),
    a = bi(),
    o = $(),
    s = a.setManageDiscountsAppIDs;
  q.useEffect(() => {
    if (!n || !(e.m_optIn?.rgFeaturedApps?.length > 0)) return;
    let r = [];
    for (let n of et(e.m_optIn.rgEligibleApps, e.m_optIn.rgRegisteredApps)) {
      if (!e.m_optIn?.rgFeaturedApps.includes(n.appid) || !s?.has(n.appid))
        continue;
      let a = e.m_optIn.rgRegisteredApps?.some((e) => e.appid == n.appid),
        c = i?.some((e) => e.appid == n.appid);
      if (!a) {
        if (e.m_optIn.description.definition.collect_trailer_permissions) {
          let i = new Date(
            e.m_optIn.description.definition.collect_demo_deadline * 1e3,
          );
          if (i > o) {
            let a = e.clone(
              e.m_plan.id + `_featuredTrailerDeadline_` + n.appid,
              i,
              i,
              `deadline`,
              z(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailer_Header`,
              ),
            );
            ((a.getElement = () =>
              (0, J.jsx)(zn, {
                eventData: a,
                appId: n.appid,
                registerByDate: i,
                registrationType:
                  e.m_plan.type == `seasonalsale`
                    ? `trailer-seasonalsale`
                    : `trailer-themesale`,
              })),
              r.push(t.AddAdditionalEvent(a)));
          }
        }
        if (e.m_plan.type == `seasonalsale`) {
          let i = new Date(
            e.m_optIn.description.definition.optin_deadline_date * 1e3,
          );
          if (i > o) {
            let a = e.clone(
              e.m_plan.id + `_featuredRegistrationDeadline_` + n.appid,
              i,
              i,
              `deadline-urgent`,
              z(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Header`,
              ),
            );
            ((a.getElement = () =>
              (0, J.jsx)(zn, {
                eventData: a,
                appId: n.appid,
                registerByDate: i,
                registrationType: `registration`,
              })),
              r.push(t.AddAdditionalEvent(a)));
          }
        }
      } else if (!c && e.m_plan.type == `seasonalsale`) {
        let i = new Date(
            e.m_optIn.description.definition.optin_deadline_date * 1e3,
          ),
          a = new Date(e.m_plan.start_date * 1e3);
        if (i > o && a > o) {
          let o = e.clone(
            e.m_plan.id + `_featuredDiscountDeadline_` + n.appid,
            a,
            a,
            `deadline-urgent`,
            z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Header`,
            ),
          );
          ((o.getElement = () =>
            (0, J.jsx)(zn, {
              eventData: o,
              appId: n.appid,
              registerByDate: i,
              registrationType: `discount`,
            })),
            r.push(t.AddAdditionalEvent(o)));
        }
      }
    }
    return r.length > 0 ? () => r.forEach((e) => e()) : void 0;
  }, [o, t, n, e, e.m_optIn?.rgFeaturedApps, i, s]);
}
function An(e) {
  let { eventData: t } = e,
    n = o(s.LANGUAGE),
    r = t.m_plan,
    { eventModel: c, bLoading: l } = H(
      r.sale_clan_account,
      r.sale_clan_event_gid,
    ),
    u = k(r.opt_in_id, t.m_partnerId),
    d = !l && c?.GetImageURL(`capsule`, n, U.capsule_main),
    f = !l && gt(c),
    m = r.opt_in_id?.startsWith(`sale_nextfest_`)
      ? `${s.PARTNER_BASE_URL}recap/nextfest/${r.opt_in_id.substring(14)}/${t.m_partnerId}`
      : void 0,
    h = xi(),
    g = _n(r.opt_in_id),
    _ = q.useMemo(
      () => p(u.data?.appIdsWithoutPermissions ?? []),
      [u.data?.appIdsWithoutPermissions],
    ),
    v = q.useMemo(() => {
      if (u.isLoading || !u.isSuccess) return null;
      let e = u.data.stats?.reduce(
        (e, t) => (t.rt_last_update_time > e ? t.rt_last_update_time : e),
        0,
      );
      if (!(e && e > r.end_date)) return null;
      let t =
          u.data.stats?.filter((t) => e != 0 && t.rt_last_update_time == e) ??
          [],
        n = t.reduce((e, t) => e + t.demo_player_count, 0),
        i = t.reduce((e, t) => e + t.wishlist_count, 0),
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
        nWishlists: i,
        nConversions: a,
        nMostPopularAppId: o,
      };
    }, [r.end_date, u.data, u.isLoading, u.isSuccess]),
    y =
      v?.nMostPopularAppId > 0
        ? v.nMostPopularAppId
        : _.length > 0
          ? Math.max(..._)
          : 0,
    b = g?.rgRegisteredApps?.find((e) => e.appid == y)?.jsondata,
    x = b && JSON.parse(b),
    S = x && !x.survey_response?.some((e) => e.accountid == i.accountid),
    C = (v?.nGamesWithStatsCount ?? 0) + _.length;
  if (
    (q.useEffect(() => {
      u.isLoading ||
        r.id.startsWith(`fakerecap_`) ||
        (u.isSuccess
          ? C == 0 && !S && h.SetHidden(r.id, !0)
          : h.SetHidden(r.id, !0));
    }, [h, S, C, r.id, u.isLoading, u.isSuccess]),
    u.isLoading)
  )
    return (0, J.jsx)(ct, {});
  if (C == 0 && !S && !r.id.startsWith(`fakerecap_`)) return;
  let w = `${s.PARTNER_BASE_URL}optin/survey/${r.opt_in_id}/${y}`,
    T = new Intl.NumberFormat(Ke()),
    E = (0, J.jsx)(`a`, {
      href: `${s.PARTNER_BASE_URL}doc/gettingstarted/managing_users`,
      target: `_blank`,
      children: z(
        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_ViewFinancials`,
      ),
    });
  return (0, J.jsxs)(`div`, {
    className: pn,
    children: [
      v &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            d &&
              (0, J.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, J.jsx)(ot, {
                  href: f,
                  target: `_blank`,
                  children: (0, J.jsx)(`img`, { src: d }),
                }),
              }),
            (0, J.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, J.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_RecapNextFest_TextHeader`,
                  ),
                }),
                (0, J.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, J.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: Ge(
                            `#Dashboard_UpcomingEvents_RecapNextFest_TextGameCount`,
                            C,
                            (0, J.jsx)(`b`, {}),
                          ),
                        }),
                        _.length > 0 &&
                          (0, J.jsx)(`div`, {
                            className: `vQDiNX1PMEc-`,
                            children: Je(
                              `#Dashboard_UpcomingEvents_RecapNextFest_PartialStats_TextGameCount`,
                              _.length,
                              E,
                            ),
                          }),
                      ],
                    }),
                    m && (0, J.jsx)(jn, { summaryURL: m }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nDemoPlayers),
                }),
                (0, J.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalPlayers`),
                    (0, J.jsx)(V, {
                      tooltip: z(`#Recap_NextFest_TotalPlayers_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `t245vD54MCk-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nConversions),
                }),
                (0, J.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_PlayerWishlist`),
                    (0, J.jsx)(V, {
                      tooltip: z(`#Recap_NextFest_PlayerWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nWishlists),
                }),
                (0, J.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalWishlist`),
                    (0, J.jsx)(V, {
                      tooltip: z(`#Recap_NextFest_TotalWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      !v &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            d &&
              (0, J.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, J.jsx)(ot, {
                  href: f,
                  target: `_blank`,
                  children: (0, J.jsx)(`img`, { src: d }),
                }),
              }),
            (0, J.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, J.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextHeader`,
                  ),
                }),
                (0, J.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, J.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: Ge(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextGameCount`,
                            C,
                            (0, J.jsx)(`b`, {}),
                          ),
                        }),
                        (0, J.jsx)(`div`, {
                          className: `vQDiNX1PMEc-`,
                          children: Be(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_NeedPermission`,
                            E,
                          ),
                        }),
                      ],
                    }),
                    m && (0, J.jsx)(jn, { summaryURL: m }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(C),
                }),
                (0, J.jsx)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: z(`#Recap_NextFest_Apps`),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `t245vD54MCk-`, `_8cesVkktgoE-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, J.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_PlayerWishlist`),
                    (0, J.jsx)(V, {
                      tooltip: z(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: a(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`, `_8cesVkktgoE-`),
              children: [
                (0, J.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, J.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalWishlist`),
                    (0, J.jsx)(V, {
                      tooltip: z(
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
        (0, J.jsxs)(`div`, {
          className: `mk9nXNBQ26s-`,
          children: [
            (0, J.jsx)(`div`, {
              className: `cGkFh39raGs-`,
              children: z(`#Dashboard_UpcomingEvents_RecapNextFest_SurveyText`),
            }),
            (0, J.jsx)(`button`, {
              className: `C-YKebzP5wE-`,
              onClick: () => window.open(w, `_blank`),
              children: z(
                `#Dashboard_UpcomingEvents_RecapNextFest_SurveyButton`,
              ),
            }),
          ],
        }),
    ],
  });
}
function jn(e) {
  return (0, J.jsx)(`button`, {
    className: mn,
    onClick: () => window.open(e.summaryURL, `_blank`),
    children: z(`#Dashboard_UpcomingEvents_RecapNextFest_TextFullSummary`),
  });
}
function Mn(e) {
  let { eventData: t } = e,
    n = o(s.LANGUAGE),
    r = t.m_plan,
    { eventModel: i, bLoading: a } = H(
      r.sale_clan_account,
      r.sale_clan_event_gid,
    ),
    c = !a && i?.GetImageURL(`capsule`, n, U.capsule_main);
  return (0, J.jsx)(v, { imageUrl: c });
}
function Nn(e) {
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
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(O, { imageUrl: s, url: r }),
      (0, J.jsxs)(L, {
        hasImage: !!s,
        children: [
          (0, J.jsxs)(Oe, {
            inlineDate: l,
            children: [
              (0, J.jsx)(D, { text: t, url: r, large: u }),
              (0, J.jsx)(F, {
                startTimestamp: i,
                endTimestamp: a,
                largeDate: l,
              }),
            ],
          }),
          n,
          o?.length > 0 &&
            (0, J.jsx)(`div`, {
              className: `uwc0Vnfl-mQ-`,
              children: o.join(`, `),
            }),
        ],
      }),
      c && (0, J.jsx)(R, { children: c }),
    ],
  });
}
function Pn(e) {
  let { eventData: t } = e,
    n = t.m_plan.id
      ? `${s.PARTNER_BASE_URL}promotion/assetportal/request/${t.m_plan.id}`
      : void 0,
    r = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    i =
      t.m_plan.start_date &&
      r.format(Ie(void 0, t.m_plan.start_date, `partner`) * 1e3),
    a = t.m_plan,
    [o] = W(a.store_item_id, a.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    c = q.useMemo(
      () => (o ? [{ appid: o.GetAppID(), appName: o.GetName() }] : void 0),
      [o],
    ),
    l = Vn(t.m_partnerId, c, a.start_date, a.end_date),
    u = o && a.discount_event_id,
    d = a.discount_event_id
      ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${a.discount_event_id}`
      : void 0,
    f = kt(a.discount_event_id),
    p = we(t.m_plan, t.m_assetInput) > je.k_AwaitingPartner,
    m = !u || l?.length > 0 || f?.length > 0;
  if (t.m_assetInput?.enable_input)
    return (0, J.jsxs)(T, {
      children: [
        (0, J.jsx)(oe, { complete: p && m, urgent: !0 }),
        (0, J.jsx)(P, {
          complete: p,
          urgent: !0,
          label: z(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_duedate`,
          ),
          status: i,
          actionStatus: z(
            p
              ? `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button_submitted`
              : `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
          ),
          actionUrl: n,
        }),
        u &&
          (0, J.jsx)(P, {
            complete: m,
            urgent: !0,
            label: z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: i,
            actionStatus: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: d,
          }),
      ],
    });
}
function Fn(e) {
  let { eventData: t, eventUrl: n, optIn: r, invitedAndRegisteredApps: i } = e,
    a = t.m_plan,
    o = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    c = q.useMemo(
      () =>
        r?.rgRegisteredApps?.map((e) => ({
          appid: e.appid,
          appName: e.app_name,
        })) ?? [],
      [r?.rgRegisteredApps],
    ),
    l = Vn(t.m_partnerId, c, a.start_date, a.end_date),
    u = q.useMemo(
      () =>
        l?.length &&
        (0, J.jsx)(`div`, {
          className: `-rKdDl3YL68-`,
          children: l
            .sort((e, t) => e.appName.localeCompare(t.appName))
            .map((e) =>
              (0, J.jsx)(
                `div`,
                { children: `${e.appName} (${Bn(e.discountsDuring)})` },
                e.appid,
              ),
            ),
        }),
      [l],
    ),
    d = i?.length > 0,
    f = bi().setManageDiscountsAppIDs,
    p = i?.some((e) => f.has(e.details.appid)),
    m =
      a.discount_event_id && p
        ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${a.discount_event_id}`
        : void 0,
    h = m && l,
    g = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    _ =
      t.eventType != `deadline` &&
      r.description.definition.optin_deadline_date &&
      r.description.definition.event_start_date -
        r.description.definition.optin_deadline_date >
        B.PerDay &&
      g.format(r.description.definition.optin_deadline_date * 1e3);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      d &&
        (0, J.jsxs)(T, {
          children: [
            (0, J.jsx)(Ln, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_EligibleGames`),
              count: i.length,
              tooltip: (0, J.jsx)(Rn, { apps: i }),
            }),
            (0, J.jsx)(Ln, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_RegisteredGames`),
              count: r.rgRegisteredApps?.length ?? 0,
              tooltip: (0, J.jsx)(Rn, { apps: o(r.rgRegisteredApps, !1) }),
            }),
            (0, J.jsx)(Ln, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_Discounted`),
              count: l?.length ?? 0,
              tooltip: u,
              hidden: !h,
            }),
            (0, J.jsx)(In, { optIn: r }),
          ],
        }),
      (0, J.jsxs)(R, {
        children: [
          _ &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`div`, {
                  className: `_9XfxKPtGXL4-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_Events_OptIn_Deadline`,
                  ),
                }),
                (0, J.jsx)(`div`, { className: `l-kYUyPKii4-`, children: _ }),
              ],
            }),
          (0, J.jsx)(I, {
            url: n,
            children: z(
              d
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_EligibleGames`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
          (0, J.jsx)(I, {
            url: m,
            children: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
          }),
        ],
      }),
    ],
  });
}
function In(e) {
  let { optIn: t } = e,
    n = $(),
    r =
      t.rgRegisteredApps?.filter((e) => e.demo_build_review_requested === !1) ??
      [];
  if (!r.length) return null;
  let i = t.description.definition,
    a =
      (i.event_start_date ?? t.description.start_date) * 1e3 - n.getTime() <
      14 * B.PerDay * 1e3,
    o = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    c =
      i.rtime_nextfest_press_preview_submit &&
      o.format(i.rtime_nextfest_press_preview_submit * 1e3),
    l =
      i.rtime_nextfest_all_items_submit &&
      o.format(i.rtime_nextfest_all_items_submit * 1e3),
    u;
  return (
    c && l
      ? (u = z(
          `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadlines_Both`,
          c,
          l,
        ))
      : c
        ? (u = z(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_PressPreview`,
            c,
          ))
        : l &&
          (u = z(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_AllItems`,
            l,
          )),
    (0, J.jsx)(`div`, {
      className: fn,
      children: r.map((e) =>
        (0, J.jsx)(
          P,
          {
            complete: !1,
            urgent: a,
            label: z(
              e.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NotSubmitted`
                : `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NoDemo`,
              e.app_name,
            ),
            status: u,
            tooltip: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Tooltip`,
            ),
            actionStatus: z(
              e.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_SubmitBuild`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_CreateDemo`,
            ),
            actionUrl: `${s.PARTNER_BASE_URL}apps/demo/${e.appid}`,
          },
          e.appid,
        ),
      ),
    })
  );
}
function Ln(e) {
  let { text: t, count: n, tooltip: r, hidden: i } = e;
  return (0, J.jsx)(Ye, {
    toolTipContent: r,
    children: (0, J.jsxs)(`div`, {
      className: a(sn, i && `itI76HUd-GU-`),
      children: [
        (0, J.jsx)(`div`, { className: cn, children: t }),
        (0, J.jsx)(`div`, { className: ln, children: n }),
      ],
    }),
  });
}
function Rn(e) {
  let { apps: t } = e;
  if (!t?.length) return;
  let n = t.sort((e, t) =>
    e.details.app_name.localeCompare(t.details.app_name),
  );
  return (0, J.jsx)(`div`, {
    className: un,
    children: n.map((e) =>
      (0, J.jsx)(
        `div`,
        {
          children: e.bRegistered
            ? Be(
                `#Dashboard_UpcomingEvents_Events_OptIn_GameRegistered`,
                e.details.app_name,
                (0, J.jsx)(`span`, {
                  className: dn,
                  children: z(
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
function zn(e) {
  let { eventData: t, appId: n, registerByDate: r, registrationType: i } = e,
    c = o(s.LANGUAGE),
    l = t.m_plan,
    u = t.m_optIn,
    [d] = W(n, 0, { include_basic_info: !0, include_assets: !0 }),
    f = d?.GetAssets().GetHeaderURL(),
    p = d ? s.PARTNER_BASE_URL + `apps/landing/` + d.GetAppID() : null,
    m = `${s.PARTNER_BASE_URL}optin/sale/${l.opt_in_id?.replace(`sale_`, ``)}`,
    h = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }),
    g = h.format(r),
    _ =
      i == `trailer-seasonalsale` || i == `trailer-themesale`
        ? g
        : h.format(new Date(u?.description.start_date * 1e3)),
    v = q.useMemo(() => {
      let e = t.m_optIn.rgRegisteredApps.find((e) => e.appid == n);
      return e ? [e] : [];
    }, [t.m_optIn.rgRegisteredApps, n]),
    y = v?.length > 0,
    b = l.discount_event_id
      ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${l.discount_event_id}`
      : void 0,
    x = q.useMemo(
      () => v?.map((e) => ({ appid: e.appid, appName: e.app_name })) ?? [],
      [v],
    ),
    S = Vn(t.m_partnerId, x, l.start_date, l.end_date)?.length > 0,
    C = u?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    E = u?.description.opt_in_name && C && A(u?.description.opt_in_name, c, C),
    ee = y && S,
    k = t.eventType == `deadline-urgent`,
    j = null,
    M = null,
    N = null;
  switch (i) {
    case `trailer-seasonalsale`:
      ((j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Title`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Body`),
        (N = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Action`));
      break;
    case `trailer-themesale`:
      ((j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Title`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Body`),
        (N = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Action`));
      break;
    case `registration`:
      ((j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Title`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Body`),
        (N = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`));
      break;
    case `discount`:
      ((j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Title`),
        (M = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Body`),
        (N = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`));
  }
  return (0, J.jsxs)(w, {
    hasImage: !!f,
    backgroundImageUrl: E,
    dimmed: !0,
    children: [
      (0, J.jsx)(O, { imageUrl: f, url: p }),
      (0, J.jsxs)(L, {
        hasImage: !!f,
        children: [
          (0, J.jsx)(D, { text: z(j, t.title), light: !0 }),
          (0, J.jsx)(`div`, {
            className: a(on, k && `OSBBoP9InyI-`),
            children: z(M, g),
          }),
        ],
      }),
      (0, J.jsxs)(T, {
        children: [
          (0, J.jsx)(oe, { complete: ee, urgent: k }),
          (0, J.jsx)(P, {
            complete: y,
            urgent: k,
            label: z(N),
            status: g,
            actionStatus: z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeatured_Register_Button`,
            ),
            actionUrl: m,
          }),
          (0, J.jsx)(P, {
            complete: S,
            urgent: k,
            label: z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: _,
            actionStatus: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: b,
          }),
        ],
      }),
    ],
  });
}
function Bn(e) {
  let t = new Intl.DateTimeFormat(navigator.language, {
    month: `numeric`,
    day: `numeric`,
    year: `2-digit`,
  });
  return rt(e, (e) => `${e.rtStartDate}_${e.rtEndDate}`)
    .map(
      (e) =>
        `${t.format(new Date(e.rtStartDate * 1e3))} - ${t.format(new Date(e.rtEndDate * 1e3))}`,
    )
    .join(`, `);
}
function Vn(e, t, n, r) {
  let i = q.useMemo(
      () =>
        t?.map((e) => ({
          appid: e.appid,
          appName: e.appName,
          startDate: n,
          endDate: r,
        })) ?? [],
      [t, n, r],
    ),
    a = q.useMemo(() => t?.map((e) => e.appid) ?? [], [t]),
    o = te(a, { nPartnerID: e });
  return q.useMemo(() => {
    let e = i?.reduce((e, t) => e.set(t.appid, t), new Map());
    return (
      o && e
        ? Array.from(o)
            .map(([t, n]) => ({
              appid: t,
              discountsDuring: n?.discounts?.filter(
                (n) =>
                  e.get(t).startDate &&
                  e.get(t).startDate <= n.rtEndDate &&
                  e.get(t).endDate &&
                  n.rtStartDate <= e.get(t).endDate,
              ),
            }))
            .filter((e) => e.discountsDuring?.length)
        : void 0
    )?.map(({ appid: t, discountsDuring: n }) => ({
      appid: t,
      appName: e?.get(t).appName,
      discountsDuring: n,
    }));
  }, [i, o]);
}
function Hn(e, t, n, r) {
  let i = e;
  if (t == `seasonalsale`) i = ee(E(r));
  else {
    let e = n?.description?.definition?.event_title?.[s.LANGUAGE];
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
function Un(e) {
  let t = $(),
    [n] = st(`recap`),
    i = q.useCallback(
      (n, i) => {
        let a = new Date(t.getTime() - 5 * B.PerDay * 1e3),
          o = {
            id: `fakerecap_${i}`,
            name: i,
            opt_in_id: n,
            type: `nextfest`,
            sale_clan_account: 39049601,
            sale_clan_event_gid: `4148451028995460854`,
            start_date: a.getTime() / 1e3,
            end_date: a.getTime() / 1e3 + 3 * B.PerDay,
          },
          s = {
            description: {
              opt_in_name: n,
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
          c = new bn(
            o.id,
            e,
            !1,
            o,
            null,
            s,
            new Date(s.description.start_date * 1e3),
            new Date(s.description.end_date * 1e3),
            `event`,
            xn(t, o),
            !1,
            !1,
            Sn,
            void 0,
          );
        return (r(X(t, o), ``), c);
      },
      [t, e],
    );
  return q.useMemo(
    () => (n ? Array.from({ length: 1 }, (e, t) => i(n, `${n}_${t}`)) : []),
    [i, n],
  );
}
function Wn() {
  return q.useMemo(() => {
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
        eventTypeName: Gn(e.eventType),
        getElement: () =>
          (0, J.jsx)(`div`, {
            style: { color: `white`, backgroundColor: Kn(e.title, 0.4) },
            children: e.title,
          }),
        getCapsuleElement: () =>
          (0, J.jsx)(`div`, {
            style: {
              color: `white`,
              backgroundColor: Kn(e.title, 0.4),
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
        eventTypeName: Gn(i),
        getElement: () =>
          (0, J.jsx)(`div`, { children: `Generated event` + e }),
        dimmed: Math.random() > 0.9,
      };
      n.push(a);
    }
    return n;
  }, []);
}
function Gn(e) {
  switch (e) {
    case `deadline`:
      return z(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `deadline-urgent`:
      return z(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `release-game`:
      return z(`#Dashboard_UpcomingEvents_EventType_Release`) + ` (Generated)`;
    case `release-dlc`:
      return (
        z(`#Dashboard_UpcomingEvents_EventType_Release_DLC`) + ` (Generated)`
      );
    case `event`:
      return (
        z(`#Dashboard_UpcomingEvents_EventType_Event_Unknown`) + ` (Generated)`
      );
  }
}
function Kn(e, t) {
  let n = 0;
  for (let t = 0; t < e.length; t++) n = e.charCodeAt(t) + ((n << 5) - n);
  let r = `#`;
  for (let e = 0; e < 3; e++) {
    let i = Math.floor(((n >> (e * 8)) & 255) * t);
    r += (`00` + i.toString(16)).slice(-2);
  }
  return r;
}
var qn = `s0RrLjURphI-`,
  Jn = `dCyO0rviUmw-`,
  Yn = `v150DClwlAY-`;
function Xn() {
  let e = $(),
    t = gn();
  return q.useMemo(() => {
    if (!t) return [];
    let r = Zn(n(`rgDeadlines`, `application_config`)),
      i = (r ? Array.from(r.entries()) : [])
        .filter(([t, n]) => new Date(n.due_date * 1e3) >= e || Qn(n))
        .reduce((e, [t, n]) => {
          let r = G(new Date(n.due_date * 1e3)),
            i = $n(n.type),
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
      Array.from(i.entries()).flatMap(([e, n]) => {
        let { dueDate: r, bSupportsGrouping: i, deadlines: a } = n,
          o = [];
        return (
          i ? o.push(tr(t, a)) : o.push(...a.map((e) => er(t, e))),
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
function Zn(e) {
  if (e) return Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map());
}
function Qn(e) {
  switch (e.type) {
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
function $n(e) {
  return e === 4;
}
function er(e, t) {
  let n = t.description_jsondata ? JSON.parse(t.description_jsondata) : void 0;
  switch (t.type) {
    case 1:
      return {
        sHeader: `Action Required`,
        sTitle: `Test 1`,
        bUrgent: !0,
        element: (0, J.jsx)(nr, { deadline: t, json: n }),
      };
    case 3:
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: z(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
        bUrgent: !0,
        element: (0, J.jsx)(rr, { deadline: t, json: n }),
      };
    case 4: {
      let r = e.GetInfo(n?.opt_in_name)?.description.definition.event_title[
        s.LANGUAGE
      ];
      return r
        ? {
            sHeader: z(`#PartnerDeadline_NextFest_PressPreview_Title`),
            sTitle: z(
              `#Deadlines_CombinedTitle`,
              z(`#PartnerDeadline_NextFest_PressPreview_Title`),
              r,
            ),
            element: (0, J.jsx)(sr, { deadline: t, json: n }),
          }
        : void 0;
    }
    case 5: {
      let r = e.GetInfo(n?.opt_in_name)?.description.definition.event_title[
        s.LANGUAGE
      ];
      return r
        ? {
            sHeader: z(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
            sTitle: z(
              `#Deadlines_CombinedTitle`,
              z(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
              r,
            ),
            bUrgent: !1,
            element: (0, J.jsx)(cr, { deadline: t, json: n }),
          }
        : void 0;
    }
    case 6: {
      let e = ar(t);
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: z(
          e
            ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
            : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
        ),
        bUrgent: !e,
        element: (0, J.jsx)(or, { deadline: t, json: n }),
      };
    }
    case 9:
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        sTitle: z(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        bUrgent: t.due_date < lt.GetTimeNowWithOverride() - 604800,
        element: (0, J.jsx)(ur, { deadline: t, json: n }),
      };
    case 10:
      return {
        sHeader: fr(n?.TemplateName),
        sTitle: pr(n),
        bUrgent: t.due_date < lt.GetTimeNowWithOverride() + 2678400,
        element: (0, J.jsx)(dr, { deadline: t, json: n }),
        capsuleElement: (0, J.jsx)(`div`, { className: Yn, children: pr(n) }),
      };
  }
}
function tr(e, t) {
  if (t[0].type === 4) return er(e, t[0]);
}
function nr(e) {
  let { deadline: t, json: n } = e,
    r = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(t.due_date * 1e3));
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(`div`, { children: [`Name: `, n.name] }),
      (0, J.jsxs)(`div`, { children: [`Due date: `, r] }),
    ],
  });
}
function rr(e) {
  let { deadline: t } = e,
    [n] = W(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${s.PARTNER_BASE_URL}promotion/dailydeals/invite/${t.gid}`,
    i = le(t?.due_date);
  return (0, J.jsx)(Z, {
    urgent: !0,
    imageUrl: n?.GetAssets().GetHeaderURL(),
    title: z(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
    body: z(`#PartnerDeadline_InviteExpiring_Body`, i),
    url: r,
    imageTooltip: n?.GetName(),
    rightCol: (0, J.jsx)(I, { url: r, children: z(`#DailyDeals_PickDate`) }),
  });
}
var ir = 604800;
function ar(e) {
  return e.due_date > lt.GetTimeNowWithOverride() + ir;
}
function or(e) {
  let { deadline: t } = e,
    [n] = W(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${s.PARTNER_BASE_URL}promotion/assetportal/request/${t.gid}`,
    i = le(t?.due_date, !0, !0),
    a = ar(t);
  return (0, J.jsx)(Z, {
    urgent: !a,
    imageUrl: n?.GetAssets().GetHeaderURL(),
    title: z(
      a
        ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
        : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
    ),
    body: z(
      a
        ? `#PartnerDeadline_InviteExpiring_Body_Soft`
        : `#PartnerDeadline_InviteExpiring_Body`,
      i,
    ),
    url: r,
    imageTooltip: n?.GetName(),
    rightCol: (0, J.jsx)(I, {
      url: r,
      children: z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
      ),
    }),
  });
}
function sr(e) {
  let { deadline: t, json: n } = e,
    r = _n(n.opt_in_name),
    i = `${s.PARTNER_BASE_URL}optin/sale/${n.opt_in_name.replace(`sale_`, ``)}`;
  return r
    ? (0, J.jsx)(Z, {
        title: r.description.definition.event_title[s.LANGUAGE],
        body: z(`#PartnerDeadline_NextFest_PressPreview_Body`),
        rightCol: (0, J.jsx)(I, {
          url: i,
          children: z(`#PartnerDeadline_NextFest_View_Registration`),
        }),
      })
    : null;
}
function cr(e) {
  let { deadline: t, json: n } = e,
    r = _n(n.opt_in_name),
    [i] = W(t?.store_item_id, t?.store_item_type, { include_assets: !0 });
  if (!r || !t?.store_item_id) return null;
  let a = `${s.PARTNER_BASE_URL}apps/demo/${t.store_item_id}`,
    o = `${s.PARTNER_BASE_URL}doc/store/review_process`;
  return (0, J.jsx)(Z, {
    imageUrl: i?.GetAssets().GetHeaderURL(),
    title: r.description.definition.event_title[s.LANGUAGE],
    body: Ue(
      z(
        `#PartnerDeadline_NextFest_DemoBuildReview_Body`,
        i?.GetName() || `(` + t.store_item_id + `)`,
      ),
      (0, J.jsx)(`a`, { href: o }),
    ),
    rightCol: (0, J.jsx)(I, {
      url: a,
      children: z(`#PartnerDeadline_NextFest_View_Registration`),
    }),
  });
}
var lr = { include_assets: !0 };
function ur(e) {
  let { deadline: t, json: n } = e,
    [r] = _t(t.store_item_id, lr),
    i = At(t.store_item_id)?.find(
      (e) => e.milestone_id == Number.parseInt(t.gid),
    ),
    a = He.GetTokenWithFallback(i?.title),
    o = `${s.PARTNER_BASE_URL}admin/game/editbyappid/${t.store_item_id}?activetab=tab_specialsettings#seasonpass`,
    c = `${s.PARTNER_BASE_URL}apps/landing/${t.store_item_id}`;
  return (0, J.jsx)(Z, {
    imageUrl: r?.GetAssets().GetSmallCapsuleURL(),
    title: z(
      `#PartnerDeadline_SeasonPass_DLC`,
      r?.GetName() || `(` + t.store_item_id + `)`,
    ),
    body: z(`#PartnerDeadline_SeasonPass_Desc`, a || t.gid),
    rightCol: (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(I, {
          url: o,
          children: z(`#PartnerDeadline_SeasonPass_OpenEditor`),
        }),
        (0, J.jsx)(I, {
          url: c,
          children: z(`#DiscountDashboard_VisitAppLanding_Tooltip`),
        }),
      ],
    }),
  });
}
function dr(e) {
  let { deadline: t, json: n } = e,
    r = le(t?.due_date, !0, !0),
    i = `${s.PARTNER_BASE_URL}taxrequirement/view/${t.partnerid}/${t.gid}`,
    a = hr(),
    o = mr(n, r);
  return (
    a ||
      (o += ` ` + z(`#PartnerDeadline_TaxRequirement_ActualAuthorityRequired`)),
    (0, J.jsx)(Z, {
      title: pr(n),
      body: o,
      rightCol: (0, J.jsx)(I, {
        url: i,
        children: z(`#PartnerDeadline_TaxRequirement_ButtonViewDetails`),
      }),
    })
  );
}
function Z(e) {
  let {
    imageUrl: t,
    title: n,
    body: r,
    imageTooltip: i,
    url: a,
    rightCol: o,
    urgent: s,
  } = e;
  return (0, J.jsxs)(w, {
    hasImage: !!t,
    children: [
      (0, J.jsx)(O, { imageUrl: t, url: a, tooltip: i }),
      (0, J.jsxs)(L, {
        hasImage: !!t,
        children: [
          (0, J.jsx)(D, { text: n }),
          (0, J.jsx)(`div`, { className: s ? Jn : qn, children: r }),
        ],
      }),
      o && (0, J.jsx)(R, { children: o }),
    ],
  });
}
function fr(e) {
  switch (e) {
    case `Freeform`:
    case `Freeform-FR`:
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return z(`#PartnerDeadline_TaxRequirement_Header_NoAction`);
    default:
      return z(`#Dashboard_UpcomingEvents_EventType_Deadline`);
  }
}
function pr(e) {
  switch (e?.TemplateName) {
    case `Freeform`:
    case `Freeform-FR`:
      return gr(e)
        ? z(`#PartnerDeadline_TaxRequirement_Title_FileReceived`)
        : z(`#PartnerDeadline_TaxRequirement_Title_Freeform`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return z(`#PartnerDeadline_TaxRequirement_Title_NoAction`);
    default:
      return z(`#PartnerDeadline_TaxRequirement_Title`);
  }
}
function mr(e, t) {
  switch (e?.TemplateName) {
    case `Renewal-W8-Initial`:
      return z(`#PartnerDeadline_TaxRequirement_Renewal-W8-Initial`, t);
    case `Renewal-W8-Partner-Urgent`:
      return z(`#PartnerDeadline_TaxRequirement_Renewal-W8-Partner-Urgent`);
    case `DocReq-KYC-FR`:
    case `DocReq-KYC-Entity-FR-CERT`:
    case `DocReq-KYC-Entity-FR`:
      return z(`#PartnerDeadline_TaxRequirement_AdditionalKYCDocuments`);
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
      return z(`#PartnerDeadline_TaxRequirement_AdditionalDocuments`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return z(`#PartnerDeadline_TaxRequirement_NewDocuments`);
    case `FailureToComply`:
    case `FailureToComply-KYC`:
      return z(`#PartnerDeadline_TaxRequirement_Expired`);
    case `AddressCorrection`:
    case `InvalidAddress`:
    case `InvalidTaxInfo-Partner`:
    case `InvalidTIN`:
    case `InvalidTINAudit-Partner`:
    case `NameMismatch-Partner`:
    case `Notify-FailedTIN`:
    case `Notify-FailedTIN-SingLLC`:
    case `Notify-Mismatch`:
      return z(`#PartnerDeadline_TaxRequirement_Invalid`);
    case `Notify-NoTINTreaty-Partner`:
      return z(`#PartnerDeadline_TaxRequirement_NoTINTreaty`);
    case `Freeform`:
    case `Freeform-FR`:
      let n = ``;
      return (
        gr(e)
          ? (n = z(`#PartnerDeadline_TaxRequirement_FileReceived`))
          : ((n = e?.Parameters?.CustomMessageBody?.trim() || ``),
            n.length > 64 && (n = n.substring(0, 64) + `...`)),
        n
      );
    default:
      return ``;
  }
}
function hr() {
  let [e] = q.useState(n(`bActualAuthority`, `application_config`));
  return e;
}
function gr(e) {
  return e?.Parameters?.UploadOriginalFileName !== void 0;
}
var _r = `pb980aEPJP8-`,
  vr = `_2MqhtXa-78o-`,
  yr = `MoxPAoUOBOw-`,
  br = `htHZFzndVNk-`,
  xr = `tr0CRxLt8vY-`,
  Sr = `EIZlbjeaXAE-`,
  Cr = `-maRlit2vz0-`,
  wr = `KLjlBgtboDk-`,
  Tr = `OAd-OQpsrlA-`,
  Er = `kzM7eb4lVuw-`,
  Dr = `HoRGBGHaxs4-`;
function Or(e) {
  let t = q.useMemo(() => n(`rgDailyDeals`, `application_config`) ?? [], []),
    r = $();
  return q.useMemo(
    () =>
      t
        .filter(
          (e) =>
            !e.cancelled &&
            new Date((e.rtime32_start_time + 7 * B.PerDay) * 1e3) > r,
        )
        .flatMap((t) => {
          let n = new Date((t.rtime32_start_time + B.PerDay) * 1e3);
          return {
            title: t.store_item_name,
            startDate: new Date(t.rtime32_start_time * 1e3),
            endDate: n,
            eventType: `event`,
            id: t.gid,
            eventTypeName: kr(t),
            getElement: () => (0, J.jsx)(jr, { deal: t, partnerId: e }),
            getCapsuleElement: () => (0, J.jsx)(Nr, { deal: t }),
            passesFilter: (e) => e == 1,
            editURL: `${s.PARTNER_BASE_URL}promotion/dailydeals/edit/${t.gid}`,
          };
        }) ?? [],
    [r, e, t],
  );
}
function kr(e) {
  return Ar(new Date(), e)
    ? z(`#Dashboard_UpcomingEvents_EventType_DailyDealRecap`)
    : z(`#Dashboard_UpcomingEvents_EventType_DailyDeal`);
}
function Ar(e, t) {
  return (
    new Date((t.rtime32_start_time + B.PerDay) * 1e3).getTime() < e.getTime()
  );
}
function jr(e) {
  let { deal: t, partnerId: n } = e;
  return Ar(new Date(), t)
    ? (0, J.jsx)(Pr, { deal: t, partnerId: n })
    : (0, J.jsx)(Mr, { partnerId: n, deal: t });
}
function Mr(e) {
  let { partnerId: t, deal: n } = e,
    r = xe(n.store_item_type),
    [i] = W(n.store_item_id, r, { include_assets: !0 }),
    a = i?.GetAssets().GetHeaderURL(),
    o = null;
  r == 0 && i
    ? (o = s.PARTNER_BASE_URL + `apps/landing/` + i.GetAppID())
    : r == 2 && i
      ? (o = s.PARTNER_BASE_URL + `bundles/view/` + i.GetID())
      : r == 1 &&
        i &&
        (o = s.PARTNER_BASE_URL + `store/packagelanding/` + i.GetID());
  let c = n.rtime32_start_time + 82800,
    { nDiscountPercentHigh: l, dtDiscountStart: u, dtDiscountEnd: d } = Ae(n),
    f = q.useMemo(() => ce(n, l), [n, l]),
    p = Te(n),
    m = l > 0,
    h = f >= ke.DealReady,
    g = h ? z(`#Dashboard_UpcomingEvents_DailyDeal_ReadyToGo`) : ``,
    _ = Me(t?.toString(), n.discount_event_id?.toString()),
    v = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(n.rtime32_start_time * 1e3)),
    y = de(n);
  return (0, J.jsxs)(w, {
    hasImage: !!a,
    children: [
      (0, J.jsx)(O, { imageUrl: a, url: o, tooltip: n.store_item_name }),
      (0, J.jsxs)(L, {
        hasImage: !!a,
        children: [
          (0, J.jsx)(D, { text: n.store_item_name }),
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`span`, {
                className: _r,
                children: z(`#Dashboard_UpcomingEvents_DailyDeal_Dates`),
              }),
              (0, J.jsx)(F, {
                startTimestamp: n.rtime32_start_time,
                endTimestamp: c,
              }),
            ],
          }),
          m &&
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`span`, {
                  className: `pb980aEPJP8-`,
                  children: z(`#Dashboard_UpcomingEvents_DailyDeal_Discounted`),
                }),
                (0, J.jsx)(F, { startTimestamp: u, endTimestamp: d }),
              ],
            }),
        ],
      }),
      (0, J.jsxs)(T, {
        children: [
          (0, J.jsx)(oe, { complete: h, urgent: !0, overrideText: g }),
          m &&
            (0, J.jsx)(P, {
              complete: m,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: (0, J.jsx)(ne, { oDailyDeal: n }),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_EditDiscount`,
              ),
              actionUrl: _,
            }),
          !m &&
            (0, J.jsx)(P, {
              complete: !1,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: z(`#Dashboard_UpcomingEvents_DailyDeal_DueBy`, v),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_EnterDiscount`,
              ),
              actionUrl: _,
            }),
          p == _e.SetUp &&
            (0, J.jsx)(P, {
              complete: !0,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageSetUp`,
              ),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageView`,
              ),
              actionUrl: y,
            }),
          p == _e.NotSetUp &&
            (0, J.jsx)(P, {
              complete: !1,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageNeeded`,
              ),
            }),
        ],
      }),
    ],
  });
}
function Nr(e) {
  let { deal: t } = e,
    n = xe(t.store_item_type),
    [r] = W(t.store_item_id, n, { include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL();
  return (
    n == 0 && r
      ? s.PARTNER_BASE_URL + `` + r.GetAppID()
      : ((n == 2 && r) || (n == 1 && r)) && s.PARTNER_BASE_URL + `` + r.GetID(),
    (0, J.jsx)(v, {
      imageUrl: i,
      title: z(`#Dashboard_UpcomingEvents_EventType_DailyDeal`),
    })
  );
}
function Pr(e) {
  let { deal: t, partnerId: n } = e,
    [r, i] = W(t?.store_item_id, xe(t?.store_item_type), {
      include_assets: !0,
    }),
    o = Se(n, t?.gid ? [t.gid] : [])?.get(t.gid),
    c = !t || !o || i == 1;
  if (t.cancelled || t.deleted) return null;
  let l = `${s.PARTNER_BASE_URL}promotion/dailydeals/dashboard/${n}`,
    u;
  return (
    (u = r?.GetAssets().GetHeaderURL()
      ? (0, J.jsx)(`img`, { src: r.GetAssets().GetHeaderURL() })
      : z(r ? `#DailyDeals_HeaderArtMissing` : `#DailyDeals_StoreItem_Hidden`)),
    (0, J.jsx)(`div`, {
      className: a(yr),
      children: c
        ? (0, J.jsx)(Fr, {})
        : (0, J.jsx)(J.Fragment, {
            children: (0, J.jsxs)(`div`, {
              className: a(Sr),
              children: [
                (0, J.jsx)(`div`, {
                  className: Cr,
                  children: (0, J.jsx)(`div`, { className: vr, children: u }),
                }),
                (0, J.jsxs)(`div`, {
                  className: a(Cr),
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: br,
                      children: [
                        (0, J.jsx)(`span`, {
                          className: xr,
                          children: Re(t.rtime32_start_time),
                        }),
                        r?.GetName() || t?.store_item_name,
                      ],
                    }),
                    (0, J.jsxs)(`div`, {
                      className: Tr,
                      children: [
                        (0, J.jsx)(`div`, {
                          className: Er,
                          children:
                            o?.gross_sales &&
                            (0, J.jsxs)(J.Fragment, {
                              children: [
                                (0, J.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: z(`#DailyDeals_Report_Revenue`),
                                }),
                                (0, J.jsx)(`div`, {
                                  className: a(`ZCETFj0EJbk-`, void 0),
                                  children: o.gross_sales
                                    ? he(o.gross_sales)
                                    : `?`,
                                }),
                              ],
                            }),
                        }),
                        (0, J.jsx)(`div`, {
                          className: Er,
                          children:
                            o?.impressions &&
                            (0, J.jsxs)(J.Fragment, {
                              children: [
                                (0, J.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: z(`#DailyDeals_Report_Impressions`),
                                }),
                                (0, J.jsx)(`div`, {
                                  className: a(`ZCETFj0EJbk-`, void 0),
                                  children: $e(o.impressions),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, J.jsx)(`div`, {
                  className: a(Cr, wr),
                  children:
                    o?.marketing?.length > 1 &&
                    (0, J.jsx)(Ee, { nGames: o.marketing.length }),
                }),
                (0, J.jsx)(`div`, {
                  className: Cr,
                  children: (0, J.jsx)(`div`, {
                    className: Dr,
                    children: (0, J.jsx)(jn, { summaryURL: l }),
                  }),
                }),
              ],
            }),
          }),
    })
  );
}
function Fr() {
  return (0, J.jsx)(`div`, {
    className: void 0,
    children: (0, J.jsx)(ct, {
      size: `medium`,
      position: `center`,
      className: void 0,
    }),
  });
}
function Ir() {
  return q.useMemo(() => {
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
        getElement: () => (0, J.jsx)(Lr, { saleDesc: e }),
        getCapsuleElement: () => (0, J.jsx)(Rr, { saleDesc: e }),
        passesFilter: (e) => e == 1,
      }),
      i = (e) => e.eEventType != 36;
    return [
      ...e
        .filter(i)
        .map((e) => r(e, z(`#Dashboard_UpcomingEvents_PartnerEvents_Active`))),
      ...t
        .filter(i)
        .map((e) =>
          r(e, z(`#Dashboard_UpcomingEvents_PartnerEvents_Upcoming`)),
        ),
      ...n
        .filter(i)
        .map((e) => r(e, z(`#Dashboard_UpcomingEvents_PartnerEvents_Draft`))),
    ].filter((e) => !!e);
  }, []);
}
function Lr(e) {
  let { saleDesc: t } = e;
  return Qe.GetClanEventModel(t.clanEventGID)
    ? (0, J.jsx)(Ne, {
        saleDesc: t,
        bShowAppBrowse: !0,
        bHidePartnerStats: !0,
        bShowWhyAmISeeingThis: !0,
      })
    : (0, J.jsx)(ie, {
        saleDesc: t,
        message: z(`#Dashboard_UpcomingEvents_PartnerEvents_NoAccess`),
      });
}
function Rr(e) {
  let { saleDesc: t } = e,
    n = o(s.LANGUAGE),
    r = Qe.GetClanEventModel(t.clanEventGID),
    i = ft(r, `capsule`, n, U.capsule_main);
  return r ? (0, J.jsx)(v, { imageUrls: i }) : void 0;
}
function zr() {
  return q.useMemo(
    () =>
      n(`rgMarketingMessagePreviews`, `application_config`)?.map((e) => {
        let t = new Date(e.start_date * 1e3),
          n = new Date(e.end_date * 1e3);
        return {
          title: e.title,
          startDate: t,
          endDate: n,
          eventType: `event`,
          id: e.gid,
          eventTypeName: z(
            `#Dashboard_UpcomingEvents_EventType_MarketingMessagePreview`,
          ),
          getElement: () => (0, J.jsx)(Vr, { marketingMessage: e }),
          getCapsuleElement: () => (0, J.jsx)(Ur, { marketingMessage: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? [],
    [],
  );
}
function Br(e) {
  let t = -1;
  return (e == 1 ? (t = 0) : e == 2 ? (t = 1) : e == 5 && (t = 2), t);
}
function Vr(e) {
  let { marketingMessage: t } = e,
    n = bi(),
    r = t.visibility === 2,
    i = t.visibility === 3,
    a = Br(t.association_type),
    [o] = W(t.associated_id, a, { include_basic_info: !0, include_assets: !0 }),
    c = o,
    l = c?.GetAssets().GetHeaderURL() || null,
    u = c ? s.PARTNER_BASE_URL + `apps/landing/` + c.GetAppID() : null,
    d =
      r || i
        ? s.PARTNER_BASE_URL +
          `promotion/marketingmessages/partnerpreview/` +
          t.gid
        : void 0,
    { bReady: f, bReadyExceptLiveEvent: p } = ye(null, t, !0),
    m = n.bShowWarnings ? ve.GetMarketingMesssageEditURL(t.gid) : void 0,
    h = $(),
    g,
    _,
    v,
    y,
    b = 0;
  r && t.start_date > h.getTime() / 1e3
    ? ((_ = z(
        `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusVisibleOn`,
        ze(t.start_date),
      )),
      (y = z(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
      (b = 1))
    : r
      ? ((_ = z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusPublic`,
        )),
        (y = z(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
        (b = 1))
      : i
        ? ((g = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusReadyToPublish`,
          )),
          (_ = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusApproved`,
          )),
          (y = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_PreviewPublishButton`,
          )))
        : f || p
          ? ((g = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_Overall`,
            )),
            (_ = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview`,
            )),
            (v = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_ttip`,
            )),
            (b = 2))
          : ((_ = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady`,
            )),
            (v = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady_ttip`,
            )));
  let x = b === 2 ? 1 : b,
    S = Hr(t);
  return (0, J.jsxs)(w, {
    hasImage: !!l,
    buttonPosition: `top`,
    children: [
      (0, J.jsx)(O, { imageUrl: l, url: u }),
      (0, J.jsx)(L, {
        hasImage: !!l,
        children: (0, J.jsxs)(Oe, {
          children: [
            (0, J.jsx)(D, { text: t.title, url: u }),
            (0, J.jsx)(`div`, {
              children: (0, J.jsx)(F, {
                startTimestamp: t.start_date,
                endTimestamp: t.end_date,
              }),
            }),
          ],
        }),
      }),
      (0, J.jsxs)(T, {
        children: [
          (0, J.jsx)(oe, { complete: x, overrideText: g }),
          (0, J.jsx)(P, {
            complete: b,
            label: z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_Status`,
            ),
            status: _,
            tooltip: v,
            actionStatus: y,
            actionUrl: d,
          }),
          S,
        ],
      }),
      m &&
        (0, J.jsx)(R, {
          children: (0, J.jsx)(I, { url: m, children: `Edit MM (VO)...` }),
        }),
    ],
  });
}
function Hr(e) {
  let t =
      e.template_vars_json?.length > 0
        ? JSON.parse(e.template_vars_json)
        : void 0,
    n = t?.custom_display == `partner_event` && t?.update_event_gid,
    { eventModel: r } = H(
      t.update_event_clan_accountid,
      t.update_event_gid,
      !0,
    ),
    i = y(t.update_event_clan_accountid, t.update_event_gid),
    a = r?.visibility_state == ut.k_EEventStateVisible,
    o = mt(r, pt.k_eCommunityEdit, `allowRelative`);
  if (!n) return;
  let c =
      r && r.BIsVisibleEvent()
        ? z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusPublic`,
          )
        : z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusNotLive`,
          ),
    l =
      i?.oPrivateData?.jsonData
        ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
    u = !!l,
    d = z(
      u
        ? `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Created`
        : `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ReviewNotSubmitted`,
    );
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(P, {
        complete: a,
        label: z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_Status`,
        ),
        status: c,
        actionStatus: z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_ViewButton`,
        ),
        actionUrl: o,
      }),
      (0, J.jsx)(P, {
        complete: u,
        label: z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Status`,
        ),
        tooltip: z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ttip`,
        ),
        status: d,
        actionStatus: z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ViewButton`,
        ),
        actionUrl: u ? `${s.HELP_BASE_URL}en/wizard/HelpRequest/${l}` : void 0,
      }),
    ],
  });
}
function Ur(e) {
  let { marketingMessage: t } = e,
    n = Br(t.association_type),
    [r] = W(t.associated_id, n, { include_basic_info: !0, include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL() || null;
  return (0, J.jsx)(v, { imageUrl: i });
}
var Wr = `gMHBCK--7U8-`,
  Gr = `jwZcGjRfZHc-`,
  Kr = `thE2MxiJxqA-`,
  qr = `cxhAKGBxdLk-`,
  Jr = `pAPaN6Fq9nA-`,
  Yr = `_0VhAVxt3Fjo-`,
  Xr = new Date(Date.UTC(2024, 10, 15, 17, 0, 0));
function Zr(e) {
  return q.useMemo(() => {
    let t = n(`rgGermanRatingMissingApps`, `application_config`);
    return t?.length > 0
      ? [
          {
            title: z(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
            startDate: Xr,
            endDate: Xr,
            eventType: `deadline-urgent`,
            id: `storelinkdeprecationnotice`,
            eventTypeName: z(
              `#Dashboard_UpcomingEvents_EventType_GermanRatingMissing`,
            ),
            getElement: () => (0, J.jsx)(Qr, { apps: t, partnerId: e }),
            passesFilter: (e) => e == 1,
          },
        ]
      : [];
  }, [e]);
}
function Qr(e) {
  let { apps: t, partnerId: n } = e,
    r = `${s.PARTNER_BASE_URL}doc/gettingstarted/contentsurvey/germany`,
    i = `${s.PARTNER_BASE_URL}recommended_actions/missingratingforgermany/?partnerid=${n}`,
    o = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }).format(Xr),
    c = t
      .sort((e, t) => e.name.localeCompare(t.name))
      .slice(0, 30)
      .map((e) => (0, J.jsx)(`div`, { children: e.name }, e.appid)),
    l = (0, J.jsxs)(`div`, {
      className: Yr,
      children: [
        c,
        t.length > 30 ? (0, J.jsx)(`div`, { children: `...` }) : void 0,
      ],
    });
  return (0, J.jsxs)(w, {
    children: [
      (0, J.jsx)(L, {
        children: (0, J.jsxs)(Oe, {
          children: [
            (0, J.jsx)(D, {
              text: z(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
              url: i,
            }),
            (0, J.jsx)(`div`, {
              className: a(Wr),
              children: z(
                t.length == 1
                  ? `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc`
                  : `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc_Plural`,
                o,
              ),
            }),
            (0, J.jsx)(Ye, {
              className: Gr,
              toolTipContent: l,
              children: (0, J.jsx)(`a`, {
                className: Jr,
                href: i,
                children: (0, J.jsxs)(`div`, {
                  className: Kr,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: qr,
                      children: z(
                        `#Dashboard_UpcomingEvents_GermanRatingMissing_Count`,
                      ),
                    }),
                    (0, J.jsx)(`div`, { className: Jr, children: t.length }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      (0, J.jsxs)(R, {
        children: [
          (0, J.jsx)(I, {
            url: r,
            children: z(`#Dashboard_UpcomingEvents_General_ReadDocumentation`),
          }),
          (0, J.jsx)(I, {
            url: i,
            children: z(`#Dashboard_UpcomingEvents_General_AffectedApps`),
          }),
        ],
      }),
    ],
  });
}
function $r() {
  let e = q.useMemo(() => ni(), []);
  return q.useMemo(() => {
    if (!e) return [];
    let { setRegistrations: t, mapEvents: n } = e,
      r = o(s.LANGUAGE);
    return (
      Array.from(n.values()).map((e) => {
        let n = t.has(e.GID);
        return {
          title: e.GetNameWithFallback(r),
          startDate: new Date(e.startTime * 1e3),
          endDate: new Date(e.endTime * 1e3),
          eventType: `event`,
          id: e.GID,
          eventTypeName: z(`#Dashboard_UpcomingEvents_EventType_MeetSteam`),
          getElement: () => (0, J.jsx)(ei, { eventModel: e, registered: n }),
          getCapsuleElement: () => (0, J.jsx)(ti, { eventModel: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? []
    );
  }, [e]);
}
function ei(e) {
  let { eventModel: t, registered: n } = e,
    r = o(s.LANGUAGE),
    i = n
      ? t.GetNameWithFallback(r)
      : z(
          `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Title`,
          t.GetNameWithFallback(r),
        ),
    a = mt(t, pt.k_eView, `allowRelative`),
    c = t.GetImageURL(`capsule`, r, U.capsule_main);
  return (0, J.jsxs)(w, {
    hasImage: !!c,
    buttonPosition: `top`,
    children: [
      (0, J.jsx)(O, { imageUrl: c, url: a }),
      (0, J.jsx)(L, {
        hasImage: !!c,
        children: (0, J.jsxs)(Oe, {
          children: [
            (0, J.jsx)(D, { text: i, url: a }),
            (0, J.jsx)(F, {
              startTimestamp: t.startTime,
              endTimestamp: t.endTime,
              showTime: !0,
            }),
            (0, J.jsx)(`div`, { children: t.GetSummaryWithFallback(r) }),
            n &&
              (0, J.jsxs)(`div`, {
                className: `cNktljFYRzg-`,
                children: [
                  (0, J.jsx)(We, {}),
                  z(
                    `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_YoureRegistered`,
                  ),
                ],
              }),
          ],
        }),
      }),
      (0, J.jsx)(R, {
        children: (0, J.jsx)(I, {
          url: a,
          children: z(
            n
              ? `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_EditRegistration`
              : `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_Register`,
          ),
        }),
      }),
    ],
  });
}
function ti(e) {
  let { eventModel: t } = e,
    n = o(s.LANGUAGE);
  return (
    !!t &&
    (0, J.jsx)(v, { imageUrl: t.GetImageURL(`capsule`, n, U.capsule_main) })
  );
}
function ni() {
  let e = n(`rgMeetSteam`, `application_config`);
  if (!e?.rgEvents) return null;
  let t = new Map();
  for (let n in e.rgEvents)
    try {
      let r = _.InitFromAccountID(ht(), s.EUNIVERSE),
        i = dt(r, e.rgEvents[n]);
      t.set(n, i);
    } catch {}
  return {
    setInvitations: new Set(e.rgInvitations),
    setRegistrations: new Set(e.rgRegistrations),
    mapEvents: t,
  };
}
var ri = 7;
function ii(e) {
  let t = $();
  return q.useMemo(() => {
    let r = n(`rgPartnerAddressRequests`, `application_config`) ?? [],
      i = Math.floor(t.getTime() / 1e3);
    return (
      e && !r.length
        ? [
            {
              opt_in_name: `sale_test`,
              partnerid: 0,
              rtime_target: i + 3 * B.PerDay,
              title: `Sample Request`,
            },
          ]
        : r
    ).map((e) => {
      let n = e.rtime_target > 0,
        r = n && e.rtime_target < i,
        a = n && i >= e.rtime_target - ri * B.PerDay,
        o = n && !r ? new Date(e.rtime_target * 1e3) : t,
        s =
          e.title || z(`#Dashboard_UpcomingEvents_AddressRequest_DefaultTitle`);
      return {
        id: `addressrequest_${e.opt_in_name}_${e.partnerid}`,
        title: s,
        startDate: o,
        endDate: o,
        eventType: a ? `deadline-urgent` : `deadline`,
        eventTypeName: z(`#Dashboard_UpcomingEvents_AddressRequest_Header`),
        getElement: () =>
          (0, J.jsx)(ai, { request: e, strTitle: s, bOverdue: r, bUrgent: a }),
        passesFilter: (e) => e == 1,
      };
    });
  }, [t, e]);
}
function ai(e) {
  let { request: t, strTitle: n, bOverdue: r, bUrgent: i } = e,
    a = new Date(t.rtime_target * 1e3).toLocaleDateString(
      qe.GetPreferredLocales(),
      { month: `short`, day: `numeric`, year: `numeric` },
    ),
    o;
  return (
    (o = t.rtime_target
      ? z(
          r
            ? `#Dashboard_UpcomingEvents_AddressRequest_Desc_Overdue`
            : `#Dashboard_UpcomingEvents_AddressRequest_Desc`,
          a,
        )
      : z(`#Dashboard_UpcomingEvents_AddressRequest_Desc_NoDate`)),
    (0, J.jsx)(Z, {
      title: n,
      body: o,
      urgent: i,
      rightCol: (0, J.jsx)(I, {
        url: `${s.PARTNER_BASE_URL}optin/address/${t.opt_in_name}/${t.partnerid}`,
        children: z(`#Dashboard_UpcomingEvents_AddressRequest_Action`),
      }),
    })
  );
}
var oi = `qLJQMv2BRm8-`,
  si = `WPmn4BD-cnk-`,
  ci = `ZHqFiLwZ8SY-`,
  li = 604800,
  ui = { include_assets: !0 };
function di(e) {
  let t = $(),
    r = gn(),
    i = q.useMemo(
      () =>
        new Set(
          n(`rgOptInContactAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    a = !!n(`bOptInPublisherContact`, `application_config`);
  return q.useMemo(() => {
    if (!r) return [];
    let n = Math.floor(t.getTime() / 1e3);
    return r
      .GetOptInNames()
      .map((t) => fi(t, r.GetInfo(t), a, i, e ?? new Set(), n))
      .filter((e) => !!e)
      .map((e) => mi(e, n));
  }, [t, r, a, i, e]);
}
function fi(e, t, n, r, i, a) {
  let o = t?.description?.definition;
  if (!o || o.optin_kind !== N.DeepestDiscount) return;
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
        eDiscount: pi(t.mapDiscountStatus?.get(e)),
      })),
      setOptInAppIDs: r,
      setManageDiscountsAppIDs: i,
    };
}
function pi(e) {
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
function mi(e, t) {
  let {
      strOptInName: n,
      optIn: r,
      rtDecisionDeadline: i,
      rtDiscountDeadline: a,
      rgGames: o,
    } = e,
    s = t <= i ? i : a,
    c = new Date(s * 1e3),
    l = !o.every((e) => e.bAnswered && e.eDiscount != 0) && s - t < li,
    u = ee(S(r.description.definition).sale),
    d = z(`#Dashboard_DeepestDiscount_Title`, u),
    f = !r.description.active;
  return {
    id: `deepestdiscount_${n}`,
    title: d,
    startDate: c,
    endDate: c,
    dismissUntil: new Date(Math.max(i, a) * 1e3),
    eventType: l ? `deadline-urgent` : `deadline`,
    eventTypeName: z(`#Dashboard_DeepestDiscount_Header`),
    valveOnly: f,
    getElement: () =>
      (0, J.jsx)(hi, { rowData: e, strTitle: d, bUrgent: l, bHidden: f }),
    passesFilter: (e) => e == 1,
  };
}
function hi(e) {
  let { rowData: t, strTitle: n, bUrgent: r, bHidden: i } = e,
    a = t.optIn.description.definition,
    o = S(a).nMinDiscountPct;
  return (0, J.jsxs)(`div`, {
    className: i ? oi : void 0,
    children: [
      i &&
        (0, J.jsx)(`div`, {
          className: `JfhhJkBlyGI-`,
          children: `Hidden: this opt-in is not enabled, so partners do not see it. (VO)`,
        }),
      (0, J.jsx)(w, {
        children: (0, J.jsxs)(L, {
          children: [
            (0, J.jsx)(D, { text: n }),
            (0, J.jsx)(`div`, {
              children: z(`#Dashboard_DeepestDiscount_Body`, o),
            }),
            t.rgGames.map((e) =>
              (0, J.jsx)(
                gi,
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
function gi(e) {
  let { game: t, rowData: n, nMinDiscountPct: r, bUrgent: i } = e,
    [a] = _t(t.appid, ui),
    o = n.optIn.description.definition,
    c = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    l = z(
      `#Dashboard_DeepestDiscount_DueDate`,
      c.format(new Date(n.rtDecisionDeadline * 1e3)),
    ),
    u =
      t.eDiscount == 2
        ? z(`#Dashboard_DeepestDiscount_NoDiscountNeeded`)
        : z(
            `#Dashboard_DeepestDiscount_DueDate`,
            c.format(new Date(n.rtDiscountDeadline * 1e3)),
          ),
    d = `${s.PARTNER_BASE_URL}optin/sale/${n.strOptInName.replace(`sale_`, ``)}/${t.appid}`,
    f = o.do_anytime?.discount_event_id,
    p = f
      ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${f}`
      : `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/`,
    m = !t.bAnswered && n.setOptInAppIDs.has(t.appid),
    h = t.eDiscount == 0 && n.setManageDiscountsAppIDs.has(t.appid);
  return (0, J.jsxs)(`div`, {
    className: si,
    children: [
      (0, J.jsx)(`div`, {
        className: ci,
        children: a?.GetName() || `(${t.appid})`,
      }),
      (0, J.jsx)(P, {
        complete: t.bAnswered,
        urgent: i,
        label: z(`#Dashboard_DeepestDiscount_Answer`),
        status: l,
        actionStatus: m
          ? z(`#Dashboard_DeepestDiscount_Answer_Button`)
          : void 0,
        actionUrl: m ? d : void 0,
      }),
      (0, J.jsx)(P, {
        complete: t.eDiscount,
        urgent: i,
        label: z(`#Dashboard_DeepestDiscount_Discount`, r),
        status: u,
        actionStatus: h
          ? z(`#Dashboard_DeepestDiscount_Discount_Button`)
          : void 0,
        actionUrl: h ? p : void 0,
      }),
    ],
  });
}
function _i(e, t, r, i) {
  let a = q.useMemo(() => n(`sEventIds`, `application_config`)?.split(`,`), []),
    o = e.now,
    s = e.bShowWarnings,
    c = Wn(),
    l = yn(t),
    u = zr(),
    d = en(),
    f = Xn(),
    p = Or(t),
    m = Ir(),
    h = Zr(t),
    g = $r(),
    _ = ii(i),
    v = di(e.setManageDiscountsAppIDs),
    y = Kt(e.additionalEventStore),
    b = qt(e.additionalEventStore),
    x = Jt();
  return q.useMemo(() => {
    let e = l
        .concat(d, u, f, p, m, h, g, _, v, y, i ? c : [])
        .filter((e) => vi(o, e, a, b, s)),
      t = e.length;
    return {
      rgShownEvents: e.filter((e) => (r == 3) == x.has(yi(e))),
      nShouldBeShownCount: t,
    };
  }, [l, d, u, f, p, m, h, g, _, v, y, i, c, o, a, b, x, r, s]);
}
function vi(e, t, n, r, i) {
  return !(
    (t.valveOnly && !i) ||
    (n?.length > 0 && !n.includes(t.id)) ||
    r.has(t.id) ||
    (t.dimmed && e >= t.startDate) ||
    new Date(t.startDate.getTime() + 21 * B.PerDay * 1e3) < e
  );
}
function yi(e) {
  return JSON.stringify({ usage: `dashboard`, eventId: e.id });
}
var Q = q.createContext({
  now: new Date(),
  bShowWarnings: !1,
  additionalEventStore: void 0,
  setManageDiscountsAppIDs: void 0,
});
function bi() {
  return q.useContext(Q);
}
function $() {
  return q.useContext(Q).now;
}
function xi() {
  return q.useContext(Q).additionalEventStore;
}
function Si(e) {
  let { showWarnings: t } = e,
    r = q.useMemo(
      () =>
        new Set(
          n(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    i = q.useMemo(() => new Gt(), []),
    a = q.useMemo(() => new Date(), []),
    o = q.useMemo(
      () => ({
        now: a,
        bShowWarnings: t,
        additionalEventStore: i,
        setManageDiscountsAppIDs: r,
      }),
      [a, t, i, r],
    );
  return (0, J.jsx)(Q.Provider, {
    value: o,
    children: (0, J.jsx)(Ci, { ...e }),
  });
}
function Ci(e) {
  let { partnerId: t, testData: n } = e,
    [r] = st(`expanded`, !1),
    [i, a] = q.useState(!!r),
    o = q.useCallback((e) => {
      (a(e), !e && D.current.scrollIntoView());
    }, []),
    [s, c] = q.useState(!1),
    l = q.useCallback(
      (e) => {
        (c(e), e && a(!0));
      },
      [a, c],
    ),
    [u, d] = q.useState(!1),
    f = q.useCallback(
      (e) => {
        (d(e), e && a(!0));
      },
      [a, d],
    ),
    [p, m] = q.useState(``),
    h = q.useCallback(
      (e) => {
        (e && (a(!0), l(!0), f(!0)), m(e));
      },
      [l, f],
    ),
    [g, _] = q.useState(0),
    v = () => {
      (_(0), m(``));
    },
    y = bi(),
    { rgShownEvents: b, nShouldBeShownCount: x } = _i(y, t, g, n),
    S = Ei(b, g, s, l, u, f),
    C = q.useMemo(() => S.filter((e) => Wi(y.now, e, p, g)), [y.now, S, p, g]),
    w = Gi(b, C),
    T = g != 0 || (p && p.trim().length > 0),
    E = q.useMemo(() => new Map(), []),
    D = q.useRef(void 0),
    O = Hi(i, a),
    ee = q.useCallback(
      (e) => {
        if (G(e).getTime() == G(y.now).getTime()) {
          D.current.scrollIntoView();
          return;
        }
        let t = E?.get(G(e).getTime() / 1e3);
        t && O(t.element);
      },
      [y.now, E, O],
    ),
    [k, A] = q.useState();
  q.useEffect(() => A(void 0), [b]);
  let j = q.useMemo(
      () =>
        (0, J.jsxs)(`div`, {
          className: fe,
          children: [
            (0, J.jsx)(Oi, { filterType: g, setFilterType: _ }),
            (0, J.jsx)(Di, { filterText: p, setFilterText: h }),
          ],
        }),
      [p, g, h],
    ),
    M = x > 0 || g != 0,
    N = g == 0 && C != null && C?.length == 0;
  return (0, J.jsx)(J.Fragment, {
    children:
      M &&
      (0, J.jsx)(yt, {
        title: z(`#Dashboard_UpcomingEvents_Title`),
        ref: D,
        headerElement: j,
        children: (0, J.jsx)(`div`, {
          className: `XCgSZWm6N7w-`,
          children: (0, J.jsxs)(`div`, {
            className: `Xpe0MYEePcY-`,
            children: [
              N &&
                (0, J.jsx)(`div`, {
                  className: `mhJoiRoACzY-`,
                  children: Be(
                    `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed`,
                    (0, J.jsx)(`a`, {
                      onClick: () => {
                        (_(3), m(``));
                      },
                      children: z(
                        `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed_LinkText`,
                      ),
                    }),
                  ),
                }),
              !N &&
                (0, J.jsx)(Ai, {
                  events: C,
                  filterVisibleEventIds: w,
                  dayRefsToScrollTo: E,
                  fnScrollToDay: ee,
                  isExpanded: i,
                  fnSetExpanded: o,
                  filterEnabled: T,
                  filterType: g,
                  clearAllFilters: v,
                  hoverEvent: k,
                  setHoverEvent: A,
                }),
            ],
          }),
        }),
      }),
  });
}
function wi(e, t) {
  return t.startDate != t.endDate && e >= t.startDate && e <= t.endDate;
}
function Ti(e, t) {
  return e > t.endDate;
}
function Ei(e, t, n, i, a, o) {
  let s = $();
  return (
    q.useMemo(
      () =>
        e.forEach((e) =>
          r(!wi(s, e) || !Ti(s, e), `An event can't be both live and a recap`),
        ),
      [s, e],
    ),
    q.useMemo(() => {
      let r = e;
      if (t == 0) {
        let e = (e, t, n) => {
          let r = e.filter((e) => t(e));
          return r.length > 1 ? e.filter((e) => !t(e)).concat(n(r)) : e;
        };
        (n ||
          (r = e(
            r,
            (e) => wi(s, e),
            (e) => ({
              title: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
              startDate: e[0].startDate,
              endDate: e[0].endDate,
              eventType: `event`,
              id: `live_placeholder`,
              eventTypeName: ``,
              getElement: () =>
                (0, J.jsx)(Li, {
                  text: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
                  events: e,
                  expanded: n,
                  setExpanded: i,
                }),
            }),
          )),
          a ||
            (r = e(
              r,
              (e) => Ti(s, e),
              (e) => ({
                title: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Recap`),
                startDate: e[0].startDate,
                endDate: e[0].endDate,
                eventType: `event`,
                id: `recap_placeholder`,
                eventTypeName: ``,
                getElement: () =>
                  (0, J.jsx)(Li, {
                    text: z(
                      `#Dashboard_UpcomingEvents_Events_Placeholder_Recap`,
                    ),
                    events: e,
                    expanded: a,
                    setExpanded: o,
                  }),
              }),
            )));
      }
      return r;
    }, [s, e, t, n, i, a, o])
  );
}
function Di(e) {
  let { filterText: t, setFilterText: n } = e;
  return (0, J.jsxs)(`div`, {
    className: Ce,
    children: [
      (0, J.jsx)(`input`, {
        className: se,
        type: `text`,
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: z(`#Dashboard_UpcomingEvents_Events_FilterEmpty`),
      }),
      (0, J.jsx)(`button`, {
        className: ge,
        onClick: () => n(``),
        children: `✖`,
      }),
      (0, J.jsx)(`span`, { className: me, children: `🔍` }),
    ],
  });
}
function Oi(e) {
  let { filterType: t, setFilterType: n } = e,
    r = q.useMemo(
      () => [
        { type: 0, text: z(`#Dashboard_UpcomingEvents_Filter_All`) },
        { type: 1, text: z(`#Dashboard_UpcomingEvents_Filter_Events`) },
        { type: 2, text: z(`#Dashboard_UpcomingEvents_Filter_Releases`) },
        { type: 3, text: z(`#Dashboard_UpcomingEvents_Filter_Dismissed`) },
      ],
      [],
    );
  return (0, J.jsx)(`div`, {
    className: De,
    children: r.map((e) =>
      (0, J.jsx)(
        `div`,
        {
          className: a(pe, t == e.type && `VSt5dZb4mv0-`),
          onClick: () => n(e.type),
          children: e.text,
        },
        e.type,
      ),
    ),
  });
}
function ki(e) {
  let { partnerId: t, showWarnings: r, testData: i } = e,
    a = q.useMemo(() => new Date(), []),
    o = q.useMemo(() => new Gt(), []),
    s = q.useMemo(
      () =>
        new Set(
          n(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    c = q.useMemo(
      () => ({
        now: a,
        bShowWarnings: r,
        bExpanded: !0,
        additionalEventStore: o,
        setManageDiscountsAppIDs: s,
      }),
      [a, r, o, s],
    ),
    { rgShownEvents: l } = _i(c, t, 0, i),
    u = q.useMemo(
      () =>
        l.map((e) =>
          (0, J.jsx)(
            Fi,
            {
              event: e,
              setHoverEvent: () => {},
              showHeader: !1,
              showDateInHeader: !1,
            },
            e.id,
          ),
        ),
      [l],
    );
  return (0, J.jsx)(Q.Provider, {
    value: c,
    children: (0, J.jsx)(`div`, { className: M, children: u }),
  });
}
function Ai(e) {
  let {
      events: t,
      filterVisibleEventIds: n,
      dayRefsToScrollTo: r,
      fnScrollToDay: i,
      filterEnabled: o,
      filterType: s,
      clearAllFilters: c,
      isExpanded: l,
      fnSetExpanded: u,
      hoverEvent: d,
      setHoverEvent: f,
    } = e,
    p = $(),
    m = q.useMemo(() => t.filter((e) => Ti(p, e)), [t, p]),
    h = q.useMemo(() => t.filter((e) => wi(p, e)), [t, p]),
    g = q.useMemo(
      () =>
        Array.from(
          Vi(
            xt(
              t.filter((e) => !Ti(p, e) && !wi(p, e)),
              (e) => St(e.startDate),
            ),
          ),
        ).sort(Ri),
      [t, p],
    ),
    [_, v] = q.useState(!1),
    y = q.useRef(void 0);
  q.useLayoutEffect(() => {
    let e = () => {
      if (y.current) {
        let e = y.current.scrollHeight > y.current.offsetHeight;
        v(e);
      }
    };
    return (
      e(),
      window.addEventListener(`resize`, e),
      () => window.removeEventListener(`resize`, e)
    );
  });
  let b = q.useCallback(
      (e, t, a, o, s) =>
        t.length > 0
          ? (0, J.jsx)(
              ji,
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
    S = q.useCallback(
      (e, t, n) => e.map(([e, r], i) => b(e, r, i, t, n)).filter((e) => !!e),
      [b],
    ),
    C = q.useMemo(
      () => b(0, m, 0, `recap`, m.length != 1 || m[0].eventTypeName.length > 0),
      [b, m],
    ),
    w = q.useMemo(
      () => b(0, h, 0, `live`, h.length != 1 || h[0].eventTypeName.length > 0),
      [b, h],
    ),
    T = q.useMemo(() => S(g, `normal`, !0), [g, S]);
  return (0, J.jsxs)(`div`, {
    className: x,
    children: [
      (0, J.jsxs)(`div`, {
        className: a(Pe, l && `VnoIh0BbNTk-`, _ && `qAzXCetKhDY-`),
        ref: y,
        children: [
          C,
          w,
          T,
          o &&
            t.length == 0 &&
            (0, J.jsx)(`div`, {
              className: `mhJoiRoACzY-`,
              children: Be(
                s == 3
                  ? `#Dashboard_UpcomingEvents_Filter_DismissedNoEvents`
                  : `#Dashboard_UpcomingEvents_Filter_NoEvents`,
                (0, J.jsx)(`a`, {
                  onClick: () => c(),
                  children: z(
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
        (0, J.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!0),
          children: z(`#Dashboard_UpcomingEvents_ShowMore`),
        }),
      l &&
        t.length > 0 &&
        (0, J.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!1),
          children: z(`#Dashboard_UpcomingEvents_ShowLess`),
        }),
    ],
  });
}
function ji(e) {
  let {
      date: t,
      events: n,
      eventTimeGroup: r,
      filterVisibleEventIds: i,
      dayRefsToScrollTo: o,
      fnScrollToDay: s,
      firstMonth: c,
      lastMonth: l,
      hoverEvent: u,
      setHoverEvent: d,
      showHeader: f,
    } = e,
    p = $(),
    m = q.useMemo(
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
    h = q.useMemo(() => Array.from(xt(n, (e) => G(e.startDate))).sort(Ri), [n]),
    g = q.useRef(void 0),
    _ = q.useMemo(
      () =>
        h.reduce(
          (e, [t]) =>
            e.set(t, (e) => o.set(t, { element: e, header: g.current })),
          new Map(),
        ),
      [h, o],
    ),
    v = q.useMemo(
      () =>
        h.map(([e, t]) =>
          (0, J.jsx)(
            Ni,
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
    y = q.useMemo(() => n.map((e) => [e, Mi(e)]), [n]),
    b = q.useMemo(() => y.reduce((e, t) => e.set(t[1], t[0]), new Map()), [y]),
    x = q.useMemo(() => y.map((e) => e[1]), [y]),
    S = q.useCallback((e, t) => zi(b.get(e), b.get(t)), [b]),
    C = q.useCallback((e, t) => Bi(b.get(e), b.get(t)), [b]);
  return (0, J.jsxs)(`div`, {
    className: ae,
    children: [
      n.length > 0 &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(`div`, {
              className: `tjsar3R67bg-`,
              children: [
                r == `normal` &&
                  (0, J.jsxs)(`div`, {
                    className: `_0KwEcSKsYOI-`,
                    children: [
                      (0, J.jsx)(zt, { viewDate: t }),
                      (0, J.jsx)(Ut, {}),
                      (0, J.jsx)(Bt, {
                        now: p,
                        viewDate: t,
                        events: x,
                        filterVisibleEventIds: i,
                        fnScrollToDay: s,
                        hoverEvent: Mi(u),
                        bShowPreceedingWeeks: c,
                        bShowFollowingWeeks: l,
                        compareEvents: S,
                        colorPriority: C,
                      }),
                    ],
                  }),
                r == `live` &&
                  (0, J.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, J.jsx)(`div`, {
                      className: a(`R9qMCNp8MZc-`, `u9X-GE-Ixi4-`),
                      children: (0, J.jsx)(`div`, {
                        className: `CRh4Y0YKsSc-`,
                        children: z(`#Dashboard_UpcomingEvents_EventIsLive`),
                      }),
                    }),
                  }),
                r == `recap` &&
                  (0, J.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, J.jsx)(`div`, {
                      className: a(`R9qMCNp8MZc-`, `_91lVTBaZFYA-`),
                      children: (0, J.jsx)(`div`, {
                        className: `_0srcByIPSwg-`,
                        children: z(`#Dashboard_UpcomingEvents_EventIsRecap`),
                      }),
                    }),
                  }),
              ],
            }),
            (0, J.jsx)(`div`, { className: `_5CcFPj3DS7I-`, children: v }),
          ],
        }),
      n.length == 0 &&
        (0, J.jsx)(`div`, {
          className: `oUtOtwTHBIo-`,
          children: z(`#Dashboard_UpcomingEvents_NoEventsInMonth`, m),
        }),
    ],
  });
}
function Mi(e) {
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
function Ni(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = q.useMemo(() => {
      let e = t.reduce((e, t) => {
        let n = `${t.eventType}_${t.eventTypeName}`,
          r = e.get(n) || [];
        return (e.set(n, [...r, t]), e);
      }, new Map());
      for (let t of e.values()) t.sort(zi);
      return Array.from(e).sort(([e, t], [n, r]) =>
        (t[0].eventTypeSortWeight ?? 0) == (r[0].eventTypeSortWeight ?? 0)
          ? e.localeCompare(n)
          : (t[0].eventTypeSortWeight ?? 0) - (r[0].eventTypeSortWeight ?? 0),
      );
    }, [t]),
    s = q.useMemo(
      () =>
        o.map(([e, t]) =>
          (0, J.jsx)(
            Pi,
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
  return (0, J.jsx)(`div`, { ref: i, className: b, children: s });
}
function Pi(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = q.useMemo(
      () =>
        t.map((e, t) =>
          (0, J.jsx)(
            Fi,
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
  return (0, J.jsx)(`div`, { ref: i, className: M, children: o });
}
function Fi(e) {
  let { event: t, showHeader: n, showDateInHeader: r, setHoverEvent: i } = e,
    o = bi();
  Ui(t);
  let s = t.eventType == `deadline`,
    c = t.eventType == `deadline-urgent`,
    l = t.eventType == `release-game`,
    u = t.eventType == `release-dlc`,
    d = t.eventType == `event`,
    f = a(
      be,
      s && `_3C1k9qRvbdA-`,
      c && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    p = a(
      C,
      s && `_3C1k9qRvbdA-`,
      c && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    m = t.getElement(),
    h = yi(t),
    _ = Y.Get().GetDismissState(h),
    v = q.useCallback(
      (e) =>
        e
          ? Y.Get().SetDismiss(h, t.dismissUntil ?? t.endDate)
          : Y.Get().ClearDismiss(h),
      [t.dismissUntil, t.endDate, h],
    ),
    y = Ii(t.id);
  return (
    m &&
    (0, J.jsxs)(`div`, {
      className: a(
        `DhGBJeASLLw-`,
        c && `YuJdkBechnU-`,
        t.dimmed && `_6Nj-6kVdKm0-`,
      ),
      onPointerEnter: () => i(t),
      onPointerLeave: () => i(void 0),
      children: [
        n &&
          (0, J.jsxs)(`div`, {
            className: `RgKUFbhH4Z8-`,
            children: [
              r &&
                (0, J.jsx)(Ve, {
                  className: f,
                  toolTipContent: new Intl.DateTimeFormat(navigator.language, {
                    month: `numeric`,
                    day: `numeric`,
                    year: `2-digit`,
                  }).format(t.startDate),
                  children: r ? t.startDate.getDate() : ``,
                }),
              (0, J.jsxs)(`div`, {
                className: p,
                children: [
                  (0, J.jsx)(`span`, {
                    className: a(!r && void 0),
                    children: t.eventTypeName,
                  }),
                  t.valveOnly &&
                    (0, J.jsx)(`span`, {
                      className: `_9jEXghBXAdI-`,
                      children: `(VO)`,
                    }),
                  (0, J.jsx)(`span`, { className: `eLvHWGPkrPY-` }),
                  y &&
                    (0, J.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, J.jsx)(`a`, {
                          href: y,
                          target: `_blank`,
                          children: `isolate`,
                        }),
                        `\xA0(dev)`,
                      ],
                    }),
                  o.bShowWarnings &&
                    t.editURL &&
                    (0, J.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, J.jsx)(`a`, {
                          href: t.editURL,
                          target: `_blank`,
                          children: `edit`,
                        }),
                        `\xA0(VO)`,
                      ],
                    }),
                  !_ &&
                    (0, J.jsxs)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!0),
                      children: [
                        z(`#Dashboard_UpcomingEvents_Dismiss`),
                        (0, J.jsx)(V, {
                          tooltip: z(`#Dashboard_UpcomingEvents_Dismiss_ttip`),
                        }),
                      ],
                    }),
                  _ &&
                    (0, J.jsx)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!1),
                      children: z(`#Dashboard_UpcomingEvents_Undismiss`),
                    }),
                ],
              }),
            ],
          }),
        (0, J.jsxs)(`div`, {
          className: a(`_4Qsmx4g89QU-`, `QH6w-cg8K-I-`),
          children: [
            (0, J.jsx)(`div`, {
              className: a(`_1TsAMPF7hS0-`, t.loading && `Y0fsODLAA9E-`),
              children: (0, J.jsx)(ct, { size: `small` }),
            }),
            (0, J.jsx)(`div`, {
              className: `dKTIVgFsruk-`,
              children: (0, J.jsx)(g, { children: m }),
            }),
          ],
        }),
      ],
    })
  );
}
function Ii(e) {
  return null;
}
function Li(e) {
  let { text: t, events: n, expanded: r, setExpanded: i } = e,
    a = n
      .slice(0, 4)
      .map((e) => ({ event: e, element: e.getCapsuleElement?.() }));
  return (0, J.jsxs)(`div`, {
    className: Fe,
    children: [
      !r &&
        (0, J.jsx)(`div`, {
          className: `rb79huJ8qFw-`,
          children: (0, J.jsx)(`button`, {
            className: `_8pE5hC3-T3Y-`,
            onClick: () => i(!0),
            children: t,
          }),
        }),
      (0, J.jsx)(`div`, {
        className: re,
        children: a.map((e) =>
          (0, J.jsx)(
            g,
            {
              children: (0, J.jsx)(`div`, {
                className: ue,
                children:
                  e.element ||
                  (0, J.jsx)(`div`, {
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
function Ri(e, t) {
  return e[0] - t[0];
}
function zi(e, t) {
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
function Bi(e, t) {
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
function Vi(e) {
  let t = Math.min(...e.keys()),
    n = Math.max(...e.keys()),
    r = new Date(t);
  for (r.setMonth(r.getMonth() + 1); r.getTime() < n;)
    (e.has(r.getTime()) || e.set(r.getTime(), []),
      (r = new Date(r)),
      r.setMonth(r.getMonth() + 1));
  return e;
}
function Hi(e, t) {
  let n = q.useRef(void 0),
    r = q.useCallback(
      (r) => {
        e ? r.scrollIntoView() : (t(!0), (n.current = r));
      },
      [e, t],
    );
  return (
    q.useEffect(() => {
      e && n.current && (n.current.scrollIntoView(), (n.current = void 0));
    }, [e]),
    r
  );
}
function Ui(e) {
  let t = h();
  q.useEffect(() => {
    let n = e.registerForChange?.(() => t());
    return () => n?.Unregister();
  }, [e, t]);
}
function Wi(e, t, n, r) {
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
function Gi(e, t) {
  return q.useMemo(() => {
    let n = new Set(t.map((e) => e.id));
    return new Set(e.filter((e) => n.has(e.id)).map((e) => e.id));
  }, [e, t]);
}
var Ki = `g31b3nBKzAo-`,
  qi = `XwuHu386DZc-`,
  Ji = `IhE0In-8-D8-`,
  Yi = `s-F6pJ3AneU-`,
  Xi = `_1gJzmUa0F58-`,
  Zi = `EobOPLhq6ME-`,
  Qi = `qTOvIUzXQXA-`,
  $i = `zN1ZNI7AxHc-`;
function ea(e) {
  return (0, J.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 60 39`,
    fill: `none`,
    ...e,
    children: [
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M20.2544 28.0733H21.8805C22.6505 28.0733 23.3893 27.7674 23.9338 27.2226C24.4782 26.6782 24.7841 25.9397 24.7841 25.1697V22.5369C24.7841 21.9376 24.5491 21.3626 24.1288 20.9351C23.7088 20.5079 23.1379 20.2628 22.5386 20.2527H20.2544V28.0733Z`,
      }),
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M53.0371 23.7372C53.0371 24.5497 52.3783 25.2085 51.5658 25.2085C50.7535 25.2085 50.0947 24.5497 50.0947 23.7372C50.0947 22.9246 50.7535 22.2661 51.5658 22.2661C52.3783 22.2661 53.0371 22.9246 53.0371 23.7372Z`,
      }),
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M13.7505 13.4774V16.0812C13.7635 16.6785 14.0095 17.2472 14.4364 17.665C14.8637 18.0831 15.4374 18.3169 16.0348 18.3169H18.319V10.4963H16.6835C15.8946 10.4881 15.1365 10.8012 14.5832 11.3636C14.0303 11.9257 13.7297 12.6889 13.7505 13.4774Z`,
      }),
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M32.421 17.4362C32.421 17.1362 32.4985 16.8265 32.5467 16.5263C32.5952 16.2263 32.6242 16.168 32.6724 15.9938C32.721 15.8196 32.7887 15.4613 32.8659 15.1904C32.9434 14.9194 32.9821 14.8227 33.0401 14.6387C33.0981 14.4547 33.2046 14.1355 33.3013 13.8935C33.398 13.6516 33.4563 13.5259 33.5335 13.3419C33.611 13.1579 33.7367 12.8771 33.853 12.6449C33.9693 12.4127 34.0464 12.2867 34.1435 12.1125C34.2402 11.9382 34.3952 11.6673 34.521 11.4543C34.6467 11.2413 34.7437 11.1058 34.8596 10.9413C34.9759 10.7769 35.1501 10.5251 35.2951 10.3317L35.6921 9.83797L35.9243 9.54747L35.9249 9.5481C33.7871 5.89204 30.5051 3.0416 26.5855 1.43715C22.666 -0.167213 18.327 -0.436528 14.2392 0.670589C10.1512 1.77802 6.54175 4.20066 3.96828 7.56433C1.39449 10.9277 0 15.0453 0 19.2807C0 23.5159 1.39449 27.6328 3.96828 30.9962C6.54175 34.3599 10.1512 36.7824 14.2392 37.89C18.327 38.9974 22.6656 38.7281 26.5855 37.1234C30.505 35.519 33.7871 32.6687 35.9249 29.0124L35.6927 28.722L35.3055 28.2282C35.1505 28.025 35.0055 27.8218 34.8603 27.6088L34.5216 27.0959C34.3861 26.8829 34.2604 26.6605 34.1344 26.4377C34.0086 26.2149 33.9409 26.0892 33.8536 25.9052C33.7667 25.7212 33.6309 25.4405 33.5341 25.1985C33.4374 24.9566 33.3697 24.8403 33.3019 24.6566C33.2342 24.4726 33.1277 24.1629 33.0407 23.9115C32.9538 23.6597 32.915 23.5532 32.8665 23.3598C32.818 23.1663 32.731 22.8273 32.6731 22.5564C32.6151 22.2854 32.5861 22.2079 32.5568 22.0239C32.5278 21.8399 32.4601 21.4237 32.4213 21.114C32.4213 20.959 32.4213 20.814 32.3633 20.659C32.3633 20.2041 32.2956 19.6911 32.2956 19.2749C32.2956 18.8587 32.2956 18.307 32.3633 17.8908C32.3728 17.7462 32.4018 17.5912 32.421 17.4362ZM22.5388 18.3171C23.6573 18.3196 24.7292 18.7651 25.52 19.5559C26.3108 20.3468 26.7563 21.4186 26.7588 22.5371V25.0924C26.7588 26.3759 26.2491 27.6069 25.3414 28.5143C24.434 29.4221 23.2029 29.9318 21.9194 29.9318H20.2545V32.2161C20.2545 32.7507 19.8213 33.1839 19.2866 33.1839C18.7523 33.1839 18.3187 32.7507 18.3187 32.2161V30.0093H16.0345C14.9154 30.0093 13.8419 29.5648 13.0505 28.7733C12.2593 27.9819 11.8145 26.9084 11.8145 25.7893C11.8145 25.2547 12.248 24.8214 12.7824 24.8214C13.317 24.8214 13.7503 25.2547 13.7503 25.7893C13.7503 26.3952 13.991 26.9762 14.4195 27.4043C14.8477 27.8328 15.429 28.0735 16.0345 28.0735H18.3187V20.2529H16.0345C14.9154 20.2529 13.8419 19.8083 13.0505 19.0169C12.2593 18.2254 11.8145 17.152 11.8145 16.0329V13.4776C11.8145 12.194 12.3246 10.963 13.2319 10.0556C14.1397 9.14792 15.3707 8.63816 16.6539 8.63816H18.2898V6.27642C18.2898 5.74206 18.723 5.30853 19.2576 5.30853C19.7923 5.30853 20.2255 5.74206 20.2255 6.27642V8.56065H22.5098C23.6283 8.56317 24.7001 9.00868 25.491 9.79948C26.2818 10.5903 26.7273 11.6622 26.7298 12.7807C26.7298 13.3153 26.2966 13.7486 25.7619 13.7486C25.2272 13.7486 24.794 13.3153 24.794 12.7807C24.794 12.1748 24.5533 11.5938 24.1248 11.1657C23.6966 10.7372 23.1156 10.4964 22.5098 10.4964H20.2545V18.3171H22.5388Z`,
      }),
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M44.1421 14.8326C44.1421 15.6451 43.4836 16.3036 42.6711 16.3036C41.8585 16.3036 41.1997 15.6451 41.1997 14.8326C41.1997 14.02 41.8585 13.3612 42.6711 13.3612C43.4836 13.3612 44.1421 14.02 44.1421 14.8326Z`,
      }),
      (0, J.jsx)(`path`, {
        fill: `currentColor`,
        d: `M47.1135 32.1772C51.1064 32.1754 54.873 30.3237 57.3127 27.1629C59.7526 24.0024 60.5903 19.8898 59.5812 16.0265C58.572 12.1634 55.8299 8.98595 52.1562 7.42192C48.4822 5.8582 44.2911 6.08509 40.8077 8.0363C37.324 9.98725 34.9411 13.4422 34.3547 17.3918C33.7684 21.3415 35.0453 25.3397 37.8119 28.2185C40.2456 30.7473 43.6039 32.1764 47.1134 32.177L47.1135 32.1772ZM51.5657 27.1538C50.6624 27.1538 49.7957 26.7949 49.1567 26.156C48.5177 25.517 48.1589 24.6506 48.1589 23.747C48.1589 22.8434 48.5178 21.9769 49.1567 21.338C49.7957 20.699 50.6624 20.3398 51.5657 20.3398C52.4693 20.3398 53.3361 20.699 53.975 21.338C54.614 21.9769 54.9729 22.8434 54.9729 23.747C54.9678 24.6481 54.6067 25.5107 53.9688 26.1469C53.3307 26.7833 52.4671 27.1419 51.5657 27.1444V27.1538ZM42.6708 11.4255C43.5744 11.4255 44.4408 11.7847 45.0798 12.4237C45.7187 13.0623 46.0776 13.9291 46.0776 14.8327C46.0776 15.7363 45.7187 16.6027 45.0798 17.2417C44.4408 17.8806 43.5744 18.2395 42.6708 18.2395C41.7672 18.2395 40.9004 17.8806 40.2618 17.2417C39.6228 16.6027 39.2636 15.7363 39.2636 14.8327C39.2661 13.9297 39.626 13.0648 40.2643 12.4262C40.9029 11.7878 41.7678 11.428 42.6708 11.4255ZM39.5443 25.489L53.3271 11.7159C53.7112 11.387 54.2836 11.409 54.6413 11.7666C54.9989 12.1242 55.0209 12.6967 54.692 13.0805L40.9189 26.8536C40.5351 27.1825 39.9627 27.1605 39.605 26.8028C39.2474 26.4452 39.2254 25.8728 39.5543 25.489H39.5443Z`,
      }),
    ],
  });
}
function ta(e) {
  return (0, J.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 55 37`,
    fill: `none`,
    ...e,
    children: (0, J.jsx)(`path`, {
      fill: `currentColor`,
      d: `M33.6009 7.90708H50.8782C52.0142 7.90708 53.0449 8.3717 53.791 9.12055C54.5374 9.86976 55 10.9044 55 12.0447V25.672C55 27.9496 53.1458 29.8097 50.8783 29.8097H48.12C47.3373 31.81 45.8447 33.5566 43.8136 34.8285C41.6511 36.1828 38.8737 37 35.704 37C34.988 37 34.4074 36.4171 34.4074 35.6983C34.4074 35.1888 34.699 34.7479 35.1234 34.534C36.2956 33.8138 36.9901 33.0738 37.3857 32.1952C37.6859 31.5282 37.8413 30.7449 37.9168 29.8096H25.5205C23.2519 29.8096 21.3991 27.9482 21.3991 25.6719V21.9028H17.0836C17.1592 22.8378 17.3146 23.6212 17.6148 24.2881C18.0105 25.167 18.7048 25.9068 19.8768 26.6272C20.3014 26.8411 20.5928 27.2819 20.5928 27.7913C20.5928 28.5101 20.0122 29.093 19.2961 29.093C16.1265 29.093 13.3488 28.2756 11.1865 26.9217C9.15546 25.6497 7.66267 23.9032 6.88002 21.9029H4.12174C1.854 21.9029 0 20.0436 0 17.7653V4.13753C0 1.86138 1.85313 0 4.12174 0H29.4796C31.7473 0 33.6011 1.85943 33.6011 4.13753L33.6009 7.90708ZM23.9921 21.9028V25.6719C23.9921 26.5196 24.676 27.2063 25.5202 27.2063C30.1078 27.2063 34.7063 27.2113 39.2871 27.2113C40.0005 27.2225 40.5695 27.8123 40.5584 28.5282C40.5267 30.4189 40.346 31.9294 39.7456 33.2629C39.6428 33.4912 39.529 33.7121 39.4031 33.9267C40.5378 33.6214 41.5597 33.1767 42.4457 32.6218C44.2148 31.5141 45.4374 29.9682 45.9188 28.231C46.0452 27.6452 46.5644 27.2064 47.1859 27.2064H50.8781C51.7206 27.2064 52.4066 26.5198 52.4066 25.6721V12.0448C52.4066 11.623 52.2346 11.2396 51.9574 10.9613C51.6804 10.6832 51.2983 10.5106 50.8781 10.5106H33.6009V17.7653C33.6009 18.9021 33.138 19.9352 32.3921 20.6842L32.387 20.6892C31.6407 21.4382 30.6117 21.9027 29.4793 21.9027H23.992L23.9921 21.9028ZM9.08081 20.3238C9.56237 22.061 10.7848 23.607 12.5541 24.7148C13.4403 25.2696 14.4621 25.7144 15.5971 26.0197C15.4712 25.8051 15.3572 25.584 15.2544 25.3557C14.654 24.0223 14.473 22.5121 14.4412 20.6215C14.4301 19.9054 14.9992 19.3156 15.7125 19.3046C18.0317 19.3046 20.3694 19.2996 22.6953 19.2996H29.479C29.9011 19.2996 30.284 19.128 30.5608 18.8512C30.8365 18.5733 31.0074 18.1891 31.0074 17.7654V4.13759C31.0074 3.29058 30.3211 2.60342 29.4792 2.60342H4.12137C3.27726 2.60342 2.59295 3.29187 2.59295 4.13759V17.7654C2.59295 18.6124 3.27947 19.2995 4.12137 19.2995H7.81361C8.43495 19.2995 8.95412 19.7383 9.08072 20.3239L9.08081 20.3238Z`,
    }),
  });
}
function na(e) {
  return (0, J.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 42 35`,
    fill: `none`,
    ...e,
    children: (0, J.jsx)(`path`, {
      fill: `currentColor`,
      d: `M2.86369 0C1.57321 0 0.471511 0.88952 0.119285 2.09452L20.185 19.8661C20.6574 20.2845 21.3421 20.2845 21.8145 19.8661L41.8802 2.09452C41.528 0.88952 40.4264 0 39.136 0H2.86369ZM0 4.5631V30.4371L14.6054 17.5003L0 4.5631ZM42 4.5631L27.3946 17.4999L42 30.4367V4.5631ZM16.0615 18.7892L0.119413 32.9055C0.471605 34.1103 1.57316 35 2.86382 35H39.1363C40.4268 35 41.5284 34.1105 41.8807 32.9055L25.9386 18.7892L23.0675 21.3318C21.8876 22.3767 20.1122 22.3767 18.9324 21.3318L16.0615 18.7892Z`,
    }),
  });
}
function ra(e) {
  let t = n(`rgDailyDealInvitations`, `application_config`);
  if (!e && (!t || t.length == 0)) return [];
  let r = [],
    i = t.some(
      (e) => new Date().getTime() / 1e3 >= e.rtexpiretime - 14 * B.PerDay,
    );
  return (
    r.push({
      id: `dailydeal`,
      title: z(`#Dashboard_ImportantActions_DailyDeals_Title`),
      image: (0, J.jsx)(ea, {}),
      description: z(
        i
          ? `#Dashboard_ImportantActions_DailyDeals_Desc_Expiring`
          : `#Dashboard_ImportantActions_DailyDeals_Desc`,
      ),
      priority: +!!i,
      actionDescription: z(`#DailyDeals_Dashboard`),
      action: `${s.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
    }),
    r
  );
}
function ia(e) {
  let t = n(`publisherid`, `application_config`),
    r = n(`rgImportantActionData`, `application_config`);
  if (!e && !r) return [];
  let i = [];
  if (
    ((e || !r.bHasCommunicationRightUser) &&
      i.push({
        id: `communicationrights`,
        title: z(`#Dashboard_ImportantActions_CommRights_Title`),
        image: (0, J.jsx)(ta, {}),
        description: z(`#Dashboard_ImportantActions_CommRights_Desc`),
        details: z(`#Dashboard_ImportantActions_CommRights_Details`),
        actionDescription: z(`#Dashboard_ImportantActions_CommRights_Action`),
        action: `${s.PARTNER_BASE_URL}doc/gettingstarted/managing_users/communication`,
      }),
    (e || r.bRemindAddMailingAddress) &&
      i.push({
        id: `mailingaddr`,
        title: z(`#Dashboard_ImportantActions_MailingAddr_Title`),
        image: (0, J.jsx)(na, {}),
        description: z(`#Dashboard_ImportantActions_MailingAddr_Desc`),
        details: z(`#Dashboard_ImportantActions_MailingAddr_Details`),
        actionDescription: z(`#Dashboard_ImportantActions_MailingAddr_Action`),
        action: `${s.PARTNER_BASE_URL}pub/mailingaddresses/${t}`,
      }),
    (e || r.bRemindAddPhoneNumber) &&
      i.push({
        id: `phonenumber`,
        title: z(`#Dashboard_ImportantActions_PhoneNumber_Title`),
        image: (0, J.jsx)(ta, {}),
        description: z(`#Dashboard_ImportantActions_PhoneNumber_Desc`),
        actionDescription: z(`#Dashboard_ImportantActions_PhoneNumber_Action`),
        action: `${s.STORE_BASE_URL}phone/add`,
      }),
    e || r.bNeedToVerifyPaymentInfo)
  ) {
    let t =
        r.rtPaymentInfoExpires > 0
          ? r.rtPaymentInfoExpires
          : e
            ? new Date().getTime() / 1e3 + B.PerDay * 7
            : 0,
      n = new Date(t * 1e3).toLocaleDateString(qe.GetPreferredLocales(), {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
      });
    i.push({
      id: `bankingexpiration`,
      title: z(`#Dashboard_ImportantActions_BankingExpiring_Title`),
      image: (0, J.jsx)(ea, {}),
      description: z(`#Dashboard_ImportantActions_BankingExpiring_Desc`, n),
      details: z(`#Dashboard_ImportantActions_BankingExpiring_Details`, n),
      priority: 1,
      actionDescription: z(
        `#Dashboard_ImportantActions_BankingExpiring_Action`,
      ),
      action: `${s.PARTNER_BASE_URL}pub/view`,
    });
  }
  return i;
}
function aa(e) {
  let t = ra(e),
    n = ia(e);
  return q.useMemo(() => {
    let e = t.concat(n);
    return (
      e.sort((e, t) => {
        let n = oa(e.priority),
          r = oa(t.priority);
        return n === r ? 0 : r - n;
      }),
      e
    );
  }, [t, n]);
}
function oa(e) {
  switch (e) {
    case 1:
      return 1;
    default:
      return 0;
  }
}
function sa(e) {
  let [t] = st(`testactions`, !1),
    n = aa(t);
  return n.length == 0
    ? null
    : (0, J.jsx)(yt, {
        title: z(`#Dashboard_ImportantActions_Title`),
        count: n.length,
        children: (0, J.jsx)(`div`, {
          className: Ki,
          children: n.map((e) => (0, J.jsx)(ca, { ...e }, e.id)),
        }),
      });
}
function ca(e) {
  let {
    title: t,
    image: n,
    description: r,
    details: i,
    priority: o,
    actionDescription: s,
    action: c,
  } = e;
  return (0, J.jsxs)(`div`, {
    className: a(qi, o == 1 && `YTdkEl1dRZY-`),
    children: [
      (0, J.jsxs)(`div`, {
        className: Ji,
        children: [
          (0, J.jsx)(`div`, { className: Yi, children: n }),
          (0, J.jsxs)(`div`, {
            className: Xi,
            children: [
              (0, J.jsx)(`div`, { className: Zi, children: t }),
              (0, J.jsxs)(`div`, {
                className: Qi,
                children: [r, i && (0, J.jsx)(V, { tooltip: i })],
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(`button`, {
        className: a($i),
        onClick: () => {
          (typeof c == `function` && c(), window.open(c, `_blank`));
        },
        children: s,
      }),
    ],
  });
}
function la(e) {
  let t = Ze(),
    r = n(`bShowWarnings`, `application_config`),
    i = n(`bTestData`, `application_config`),
    a = n(`bPartnerOnboarding`, `application_config`);
  return ua(t)
    ? null
    : a
      ? (0, J.jsx)(bt, {
          children: (0, J.jsx)(ki, {
            partnerId: t,
            showWarnings: r,
            testData: i,
          }),
        })
      : (0, J.jsxs)(bt, {
          children: [
            (0, J.jsx)(sa, {}),
            (0, J.jsx)(vt, {}),
            (0, J.jsx)(Si, { partnerId: t, showWarnings: r, testData: i }),
          ],
        });
}
function ua(e) {
  let [t, n] = q.useState(!0);
  return (
    q.useEffect(() => {
      (Qe.Init(),
        j.Get(),
        (async () => {
          (await Y.Get().Init(i.accountid, Number.isNaN(e) ? 0 : e), n(!1));
        })());
    }, [e]),
    t
  );
}
export { la as default };
