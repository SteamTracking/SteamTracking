/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  Z as n,
  _t as r,
  ft as i,
  k as a,
  kt as o,
  nt as s,
  on as c,
  rt as l,
  vt as u,
} from "./mobx.esm.js";
import {
  F as d,
  Lt as f,
  P as p,
  Rt as m,
  Yt as h,
  r as g,
  t as _,
} from "./src.js";
import {
  B as v,
  D as y,
  Dt as b,
  Et as x,
  F as S,
  G as C,
  H as w,
  I as T,
  J as E,
  K as D,
  L as O,
  M as k,
  N as ee,
  Nt as A,
  O as j,
  P as te,
  R as M,
  S as ne,
  St as re,
  T as ie,
  Tt as ae,
  U as N,
  V as P,
  Vt as oe,
  W as F,
  Y as I,
  _t as se,
  a as ce,
  b as le,
  bt as ue,
  c as de,
  dt as fe,
  ft as pe,
  h as me,
  ht as he,
  i as ge,
  j as _e,
  k as ve,
  l as ye,
  lt as be,
  m as xe,
  mt as Se,
  n as Ce,
  o as we,
  p as Te,
  pt as Ee,
  q as L,
  r as De,
  s as Oe,
  t as ke,
  u as Ae,
  ut as je,
  vt as Me,
  w as Ne,
  wt as Pe,
  z as Fe,
} from "./promotionoperationowner.js";
import {
  Sa as Ie,
  Ta as Le,
  Ya as R,
  aa as Re,
  ea as ze,
  fa as Be,
  ka as Ve,
  la as He,
  mn as Ue,
  oa as z,
  pa as We,
  pn as Ge,
  sa as Ke,
  sr as qe,
  ta as Je,
  un as B,
} from "./dialogs.js";
import "./react-router.js";
import { t as Ye } from "./useQuery.js";
import "./storeitem.js";
import { n as Xe } from "./primarypartnercontext.js";
import { a as V, n as Ze } from "./partnereventstore.js";
import {
  a as Qe,
  i as $e,
  n as et,
  o as tt,
  r as nt,
  s as rt,
  t as it,
} from "./dashboardutilities.js";
import { a as at } from "./historyutils.js";
import { t as ot } from "./throbber.js";
import { n as st } from "./eventdevfeaturestore.js";
import { S as H, a as ct, n as lt } from "./partnereventutils.js";
import "./steamid.js";
import { m as ut, p as dt, v as ft } from "./bbcodeeditor.js";
import { n as pt } from "./numberformats.js";
import { t as mt } from "./meetsteamclanid.js";
import { a as ht } from "./creatorhomestore.js";
import { n as gt, t as U } from "./storeitemhooks.js";
import { n as _t, r as vt } from "./recentapps.js";
import { t as yt } from "./storebrowsesetup.js";
import {
  g as bt,
  h as xt,
  m as W,
  p as G,
} from "./partnervalvecontactstore.js";
import {
  a as St,
  i as Ct,
  n as wt,
  r as Tt,
  t as Et,
} from "./steammessages_partnerdeadline_pb.js";
import { i as Dt } from "./adminaccount.js";
import { vt as Ot } from "./profilestore.js";
import { t as kt } from "./seasonpasshooks.js";
var K = c(o()),
  At = `-bcJANy5VMA-`,
  jt = `RovZ0LsFtt8-`,
  Mt = `_7lNY35dQfo4-`,
  Nt = `Sb1tlgmh6Y8-`,
  Pt = `ni2dNmXBX1k-`,
  Ft = `ERoEwjtja6E-`,
  It = `_0tXgdz8uE6Y-`,
  Lt = `b8JzMfOLVi8-`,
  q = r();
function Rt(e) {
  let { viewDate: t } = e,
    n = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `short`,
    }).format(t);
  return (0, q.jsx)(`div`, {
    className: At,
    children: (0, q.jsx)(`div`, { className: jt, children: n }),
  });
}
function zt(e) {
  let {
      now: n,
      viewDate: r,
      events: i,
      filterVisibleEventIds: a,
      bShowPreceedingWeeks: o,
      bShowFollowingWeeks: s,
      fnScrollToDay: c,
      hoverEvent: l,
      compareEvents: u,
      colorPriority: d,
    } = e,
    f = W(n),
    p = bt(i, (e) => W(e.startDate)),
    m = G(r, -r.getDay()),
    h = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate(),
    g =
      (h +
        r.getDay() +
        ((r.getDay() + h) % 7 == 0 ? 0 : 7 - ((r.getDay() + h) % 7))) /
      7,
    _ = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    }),
    v = K.useMemo(
      () => Array.from({ length: g * 7 }, (e, t) => t).map(() => K.createRef()),
      [g],
    );
  K.useEffect(() => {
    for (let e = 0; e < g; e++) {
      let t = G(m, e * 7);
      for (let n = 0; n < 7; n++) {
        let r = G(t, n),
          i = W(r),
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
        o
          ? v[e * 7 + n].current?.style.setProperty(`--note-color`, o)
          : v[e * 7 + n].current?.style.removeProperty(`--note-color`),
          s
            ? v[e * 7 + n].current?.style.setProperty(`--day-color1`, s)
            : v[e * 7 + n].current?.style.removeProperty(`--day-color1`),
          (c ?? s)
            ? v[e * 7 + n].current?.style.setProperty(`--day-color2`, c ?? s)
            : v[e * 7 + n].current?.style.removeProperty(`--day-color2`);
      }
    }
  }, [d, p, m, g, v]);
  let y = [];
  for (let e = 0; e < g; e++) {
    let n = [],
      i = G(m, e * 7);
    for (let d = 0; d < 7; d++) {
      let m = G(i, d),
        h = W(m),
        g = r.getMonth() === m.getMonth(),
        y = r.getMonth() === m.getMonth() || (o && m <= r) || (s && m >= r),
        b = h.getTime() === f.getTime(),
        x = p.get(Math.floor(h.getTime() / 1e3))?.sort(u),
        S = x?.every((e) => a.has(e.id)),
        C = x?.some((e) => e.note),
        w =
          l &&
          h.getTime() >= W(l.startDate).getTime() &&
          h.getTime() <= W(l.endDate).getTime(),
        T = t(
          Pt,
          !g && !w && `_1CVPS7mLrfw-`,
          !y && `KOVhvGxr6og-`,
          b && `_7H1LYjC8bPE-`,
          C && S && `DqfqRgwcIR8-`,
          !C && S && `MQT5hyfOB2Q-`,
          w && y && `_9VpjQYOBKgg-`,
        );
      n.push(
        (0, q.jsx)(
          Bt,
          {
            date: m,
            daysEvents: x,
            tooltipDateFormat: _,
            children: (0, q.jsx)(`div`, {
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
    y.push((0, q.jsx)(`div`, { className: Mt, children: n }, e));
  }
  return (0, q.jsx)(q.Fragment, { children: y });
}
function Bt(e) {
  let { date: t, daysEvents: n, tooltipDateFormat: r, children: i } = e;
  if (!n) return (0, q.jsx)(q.Fragment, { children: i });
  let a = (0, q.jsxs)(`div`, {
    className: Ft,
    children: [
      (0, q.jsx)(`div`, { className: It, children: r.format(t) }),
      n.map((e) => (0, q.jsx)(Vt, { event: e }, e.id)),
    ],
  });
  return (0, q.jsx)(Ue, { toolTipContent: a, children: i });
}
function Vt(e) {
  let { event: t } = e;
  Ut(t);
  let n = K.useRef(void 0);
  return (
    K.useEffect(() => {
      n.current?.style.setProperty(`--event-color`, t.color);
    }, [t.color]),
    (0, q.jsxs)(`div`, {
      className: Lt,
      ref: n,
      children: [
        t.title,
        t.valveOnly &&
          (0, q.jsx)(`span`, { className: void 0, children: ` (VO)` }),
      ],
    })
  );
}
function Ht(e) {
  let t = new Intl.DateTimeFormat(navigator.language, { weekday: `short` }),
    n = [...Array(7).keys()].map((e) => t.format(new Date(2024, 0, e + 7)));
  return (0, q.jsx)(`div`, {
    className: Mt,
    children: n.map((e) =>
      (0, q.jsx)(`div`, { className: Nt, children: e }, e),
    ),
  });
}
function Ut(e) {
  let t = d();
  K.useEffect(() => {
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
    t ? this.m_rgHiddenIds.add(e) : this.m_rgHiddenIds.delete(e),
      this.m_eventsChanged.Dispatch();
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
    this.m_rgAdditionalEvents.delete(e), this.m_eventsChanged.Dispatch();
  }
};
function Gt(e) {
  let [t, n] = K.useState([]),
    [r, i] = K.useState(0);
  return (
    p(e.EventsChanged(), () => {
      n(e.GetAdditionalEvents()), i((e) => e + 1);
    }),
    t
  );
}
function Kt(e) {
  let [t, n] = K.useState(new Set()),
    [r, i] = K.useState(0);
  return (
    p(e.EventsChanged(), () => {
      n(e.GetHiddenIds()), i((e) => e + 1);
    }),
    t
  );
}
var J = class t {
  m_accountId;
  m_partnerId;
  m_serviceTransport;
  m_eventsChanged = new f();
  m_rgDismisses = new Map();
  m_setDismisses = new Set();
  static s_Singleton;
  static Get() {
    return (t.s_Singleton ||= new t()), t.s_Singleton;
  }
  async Init(e, t) {
    (this.m_accountId = e),
      (this.m_partnerId = t),
      (this.m_serviceTransport = Dt.Get()
        .GetPromotionTransport()
        .GetServiceTransport());
    let n = u.Init(Ct);
    n.Body().set_accountid(this.m_accountId),
      n.Body().set_partnerid(this.m_partnerId),
      n
        .Body()
        .set_rtime_after(
          Math.floor(new Date().getTime() / 1e3 - 14 * R.PerDay),
        );
    let r = await St.GetDismissTimeRange(this.m_serviceTransport, n);
    if (r.BSuccess()) {
      for (let e of r.Body().dismiss_list())
        if (e.state() == 1) {
          let t = this.m_rgDismisses.get(e.key_json()) ?? [];
          t.push(e.dismiss_id()), this.m_rgDismisses.set(e.key_json(), t);
        }
      this.DismissesUpdated();
    }
  }
  DismissesUpdated() {
    (this.m_setDismisses = new Set(
      Array.from(this.m_rgDismisses).map(([e, t]) => e),
    )),
      this.m_eventsChanged.Dispatch();
  }
  EventsChanged() {
    return this.m_eventsChanged;
  }
  GetDismissedEvents() {
    return (
      e(this.m_serviceTransport, `Must call Init first`), this.m_setDismisses
    );
  }
  GetDismissState(e) {
    return this.m_rgDismisses.get(e)?.length > 0;
  }
  async SetDismiss(t, n) {
    e(this.m_serviceTransport, `Must call Init first`);
    let r = this.m_rgDismisses.get(t) ?? [];
    r.push(null), this.m_rgDismisses.set(t, r), this.DismissesUpdated();
    let i = u.Init(wt),
      a = new Et();
    a.set_accountid(this.m_accountId),
      a.set_partnerid(this.m_partnerId),
      a.set_key_json(t),
      a.set_state(1),
      a.set_rtime_create(Math.floor(new Date().getTime() / 1e3)),
      a.set_rtime_validity(Math.floor(n.getTime() / 1e3)),
      i.Body().add_dismiss_list(a);
    let o = await St.CreateDismiss(this.m_serviceTransport, i);
    if (o.BSuccess() && o.Body().dismiss_list().length > 0) {
      let e = (this.m_rgDismisses.get(t) ?? []).filter((e) => e !== null);
      e.push(o.Body().dismiss_list()[0].dismiss_id()),
        this.m_rgDismisses.set(t, e);
    }
  }
  async ClearDismiss(t) {
    e(this.m_serviceTransport, `Must call Init first`);
    let n = this.m_rgDismisses.get(t);
    if ((this.m_rgDismisses.delete(t), this.DismissesUpdated(), n))
      for (let e of n) {
        let t = u.Init(Tt);
        t.Body().set_dismiss_id(e),
          await St.DeleteDismiss(this.m_serviceTransport, t);
      }
  }
};
function qt() {
  let [e, t] = K.useState(J.Get().GetDismissedEvents()),
    [n, r] = K.useState(0);
  return (
    p(J.Get().EventsChanged(), () => {
      t(J.Get().GetDismissedEvents()), r((e) => e + 1);
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
  return K.useMemo(
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
          getElement: () => (0, q.jsx)(en, { app: e }),
          passesFilter: (e) => e == 2,
        };
      }) ?? [],
    [],
  );
}
function en(e) {
  let { app: t } = e,
    [n] = U(t.appid, 0, { include_assets: !0, include_release: !0 }),
    r = !!n?.GetName();
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(tn, { app: t, storeItem: n, hasStoreItem: r }),
      (0, q.jsx)(rn, { app: t, hasStoreItem: r }),
    ],
  });
}
function tn(e) {
  let { app: n, storeItem: r, hasStoreItem: i } = e,
    a = s.PARTNER_BASE_URL + `apps/landing/` + n.appid,
    o = i ? r.GetName() : n.name,
    c = r?.GetAssets().GetHeaderURL();
  return (0, q.jsxs)(N, {
    hasImage: !!c,
    children: [
      (0, q.jsx)(F, { imageUrl: c, url: a }),
      (0, q.jsxs)(L, {
        hasImage: !!c,
        children: [
          (0, q.jsx)(D, { text: o, url: a }),
          (0, q.jsxs)(`div`, {
            className: Jt,
            children: [
              n.releaserequest &&
                (0, q.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: z(`#App_Landing_SpecifiedReleaseDate`),
                    }),
                    (0, q.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: nn(n.releaserequest.release_date),
                    }),
                  ],
                }),
              i &&
                (0, q.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: z(`#App_Landing_CustomersSeeReleaseDate`),
                    }),
                    (0, q.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: r.GetFormattedSteamReleaseDate(),
                    }),
                  ],
                }),
              n.earliestadvancedaccessdate > 0 &&
                (0, q.jsxs)(`div`, {
                  className: t(`iSMHkhZtJis-`, `RcifCC6jW3A-`),
                  children: [
                    (0, q.jsxs)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: [
                        z(`#App_Landing_AdvancedAccessDate`),
                        (0, q.jsx)(B, {
                          tooltip: z(`#App_Landing_AdvancedAccessDate_ttip`),
                        }),
                      ],
                    }),
                    (0, q.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: nn(n.earliestadvancedaccessdate),
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
    ? `${Ve(e)} ${Le(e, {}, { timeZoneName: `short` })}`
    : z(`#App_Landing_UnsetReleaseDate`);
}
function rn(e) {
  let { app: n, hasStoreItem: r } = e,
    i = nt(n.releasestate, r),
    a = t(
      Qt,
      n.releasestate == `prerelease` && `-PegX2P-Uso-`,
      n.releasestate == `released` && `_0SILAZhIcgo-`,
    );
  return (0, q.jsx)(`div`, {
    className: Yt,
    children: (0, q.jsxs)(`div`, {
      className: Xt,
      children: [
        (0, q.jsx)(`div`, {
          className: Zt,
          children: z(`#Dashboard_UpcomingEvents_ReleaseStatusLabel`),
        }),
        (0, q.jsxs)(`div`, {
          children: [
            (0, q.jsx)(`span`, { className: a, children: i.sText }),
            i.sTooltip && (0, q.jsx)(B, { tooltip: i.sTooltip }),
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
  mn = class e {
    m_rgOptIns;
    m_rgOptInComputed = new Map();
    static async Construct() {
      let t = new e();
      return await t.Init(), t;
    }
    async Init() {
      let t = await fetch(`${s.PARTNER_BASE_URL}/optin/ajaxoptinsfordashboard`);
      try {
        (this.m_rgOptIns = await t.json()),
          this.m_rgOptIns && e.ExtractOptInDefinitions(this.m_rgOptIns);
      } catch {
        this.m_rgOptIns = {};
      }
    }
    static ExtractOptInDefinitions(e) {
      for (let t of Object.keys(e)) {
        let n = e[t].description,
          r = $e(n?.jsondata);
        delete n?.jsondata, r && (e[t].description.definition = r);
      }
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
        };
      return this.m_rgOptInComputed.set(e, i), i;
    }
  };
function hn() {
  return Ye({
    queryKey: [`DashboardOptInStore`],
    queryFn: () => mn.Construct(),
    staleTime: 1 / 0,
  }).data;
}
function gn(e) {
  return hn()?.GetInfo(e);
}
function _n() {
  return K.useMemo(() => {
    let e = n(`rgPartnerDashboardAssets`, `application_config`);
    return e
      ? Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map())
      : new Map();
  }, []);
}
function vn(e) {
  let t = $(),
    r = hn(),
    i = K.useMemo(() => {
      let i = n(`rgPartnerPromotions`, `application_config`),
        a = i?.rgPlans
          ?.map((e) => $e(e.partner_readonly_jsondata))
          .filter((e) => e && e.id),
        o = i?.rgPlans
          ?.map((e) => ({ plan: e, input: $e(e.input_jsondata) }))
          .filter((e) => !!e.input)
          .reduce((e, t) => e.set(t.plan.promotion_id, t.input), new Map()),
        s = new Set(i?.rgHiddenPlanIDs ?? []);
      return (
        a
          ?.map((n) => {
            if (!n.start_date || (new Date(n.end_date * 1e3) < t && !Y(t, n)))
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
            return new yn(
              n.id,
              e,
              l,
              n,
              i,
              a,
              new Date(n.start_date * 1e3),
              new Date(n.end_date * 1e3),
              `event`,
              bn(t, n),
              u,
              d,
              xn,
              Sn,
            );
          })
          .filter((e) => !!e) ?? []
      );
    }, [t, r, e]),
    a = Hn(e);
  return K.useMemo(() => [...i, ...a], [i, a]);
}
var yn = class {
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
  constructor(e, t, n, r, i, a, o, c, l, u, d, f, p, m) {
    (this.m_partnerId = t),
      (this.valveOnly = n),
      (this.m_plan = r),
      (this.m_assetInput = i),
      (this.m_optIn = a),
      (this.id = e),
      (this.title = Vn(r.name, r.type, a, r.start_date)),
      (this.startDate = o),
      (this.endDate = c),
      (this.eventType = l),
      (this.eventTypeName = u),
      (this.editURL = `${s.PARTNER_BASE_URL}promotion/planning/edit/${this.m_plan.id}`),
      (this.loading = d),
      (this.dimmed = f),
      (this.getElement = () => p({ eventData: this })),
      (this.getCapsuleElement = () => m?.({ eventData: this }));
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
a([m], yn.prototype, `dataChanged`, null);
function bn(e, t) {
  if (Y(e, t))
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
function Y(e, t) {
  return (
    t.type == `nextfest` && new Date(t.end_date * 1e3).getTime() < e.getTime()
  );
}
function xn(e) {
  let { eventData: t } = e;
  return Y($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, q.jsx)(kn, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, q.jsx)(Tn, { eventData: t })
      : (0, q.jsx)(Cn, { eventData: t });
}
function Sn(e) {
  let { eventData: t } = e;
  return Y($(), t.m_plan) && t.m_plan.type == `nextfest`
    ? (0, q.jsx)(jn, { eventData: t })
    : t.m_plan.type == `nextfest` || t.m_plan.type === `themesale`
      ? (0, q.jsx)(En, { eventData: t })
      : (0, q.jsx)(wn, { eventData: t });
}
function Cn(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = U(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [a] = U(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    o = r ?? a,
    c = t.m_plan.type == `seasonalsale`;
  On(t);
  let l =
      n.type == `seasonalsale`
        ? `${s.PARTNER_BASE_URL}doc/marketing/discounts/seasonalsales`
        : void 0,
    u = o?.GetAssets().GetHeaderURL();
  l ??= o ? s.PARTNER_BASE_URL + `apps/landing/` + o.GetAppID() : null;
  let d = i(s.LANGUAGE),
    { eventModel: f, bLoading: p } = V(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  (u ??= !p && f?.GetImageURL(`capsule`, d, H.capsule_main)),
    (l ??= !p && ht(f));
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
    g = (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(E, {
          url: h,
          children: z(
            `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
          ),
        }),
        c &&
          (0, q.jsx)(E, {
            url: l,
            children: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
        (0, q.jsx)(E, {
          url: n.asset_kit_url,
          children: z(`#Dashboard_UpcomingEvents_Events_OptIn_Button_AssetKit`),
        }),
      ],
    }),
    _ = rt(n);
  return (0, q.jsxs)(N, {
    dimmed: t.dimmed,
    backgroundColor: _,
    hasImage: !!u,
    children: [
      (0, q.jsx)(Mn, {
        warnings: m,
        eventName: t.title,
        startTime: n.start_date,
        endTime: n.end_date,
        eventUrl: l,
        imageUrl: u,
        additionalButtons: g,
        bigName: c,
      }),
      (0, q.jsx)(Nn, { eventData: t }),
    ],
  });
}
function wn(e) {
  let { eventData: t } = e,
    n = t.m_plan,
    [r] = U(n.store_item_id, n.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [a] = U(n.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    o = (r ?? a)?.GetAssets().GetHeaderURL(),
    c = i(s.LANGUAGE),
    { eventModel: l, bLoading: u } = V(
      n.sale_clan_account,
      n.sale_clan_event_gid,
    );
  return (
    (o ??= !u && l?.GetImageURL(`capsule`, c, H.capsule_main)),
    (0, q.jsx)(M, { imageUrl: o })
  );
}
function Tn(e) {
  let { eventData: t } = e,
    n = i(s.LANGUAGE),
    r = t.m_plan,
    a = t.m_optIn,
    o = r.opt_in_id
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
    l = (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(`div`, {
          className: an,
          children: z(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses`,
            e,
          ),
        }),
        (0, q.jsx)(`div`, {
          children: z(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses_Description`,
          ),
        }),
      ],
    });
  }
  Dn(t), On(t);
  let u = a?.description.start_date ?? r.start_date,
    d = a?.description.end_date ?? r.end_date,
    f = a?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    p = a?.description.opt_in_name && f && ee(a?.description.opt_in_name, n, f),
    m = _n().get(`optin_placeholder_banner`),
    h = p ?? m,
    g = p ? void 0 : et(r.id),
    _ = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    v = K.useMemo(
      () => Qe(_(a?.rgEligibleApps, !1), _(a?.rgRegisteredApps, !0)),
      [a?.rgEligibleApps, a?.rgRegisteredApps],
    ),
    y = v?.length > 0;
  return (0, q.jsxs)(N, {
    buttonPosition: y ? `bottom` : void 0,
    backgroundImageUrl: h,
    backgroundColor: g,
    dimmed: t.dimmed,
    children: [
      (0, q.jsx)(Mn, {
        warnings: c,
        eventName: t.title,
        eventDescription: l,
        startTime: u,
        endTime: d,
        eventUrl: o,
        inlineDate: !0,
      }),
      a &&
        (0, q.jsx)(Pn, {
          eventData: t,
          eventUrl: o,
          optIn: a,
          invitedAndRegisteredApps: v,
        }),
    ],
  });
}
function En(e) {
  let { eventData: t } = e,
    n = i(s.LANGUAGE),
    r = t.m_optIn,
    a = r?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    o = r?.description.opt_in_name && a && ee(r?.description.opt_in_name, n, a);
  return (0, q.jsx)(M, { imageUrl: o });
}
function Dn(e) {
  let t = $(),
    n = ci();
  K.useEffect(() => {
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
        (t.getElement = () => (0, q.jsx)(Tn, { eventData: t })),
          (r = n.AddAdditionalEvent(t));
      }
    }
    return r;
  }, [t, n, e]);
}
function On(e) {
  let t = ci(),
    n =
      (e.m_plan.type == `seasonalsale` || e.m_plan.type == `themesale`) &&
      e.eventType != `deadline` &&
      e.eventType != `deadline-urgent` &&
      e.m_optIn?.description?.opt_in_name &&
      e.m_optIn.rgEligibleApps &&
      e.m_optIn.rgRegisteredApps &&
      e.m_optIn.rgFeaturedApps &&
      e.m_optIn.description.definition.additional_featuring_section_enabled,
    r = K.useMemo(
      () =>
        e.m_optIn?.rgRegisteredApps?.map((e) => ({
          appid: e.appid,
          appName: e.app_name,
        })) ?? [],
      [e.m_optIn?.rgRegisteredApps],
    ),
    i = Bn(e.m_partnerId, r, e.m_plan.start_date, e.m_plan.end_date),
    a = Q(),
    o = $(),
    s = a.setManageDiscountsAppIDs;
  K.useEffect(() => {
    if (!n || !(e.m_optIn?.rgFeaturedApps?.length > 0)) return;
    let r = [];
    for (let n of Qe(e.m_optIn.rgEligibleApps, e.m_optIn.rgRegisteredApps)) {
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
            (a.getElement = () =>
              (0, q.jsx)(Rn, {
                eventData: a,
                appId: n.appid,
                registerByDate: i,
                registrationType:
                  e.m_plan.type == `seasonalsale`
                    ? `trailer-seasonalsale`
                    : `trailer-themesale`,
              })),
              r.push(t.AddAdditionalEvent(a));
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
            (a.getElement = () =>
              (0, q.jsx)(Rn, {
                eventData: a,
                appId: n.appid,
                registerByDate: i,
                registrationType: `registration`,
              })),
              r.push(t.AddAdditionalEvent(a));
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
          (o.getElement = () =>
            (0, q.jsx)(Rn, {
              eventData: o,
              appId: n.appid,
              registerByDate: i,
              registrationType: `discount`,
            })),
            r.push(t.AddAdditionalEvent(o));
        }
      }
    }
    return r.length > 0 ? () => r.forEach((e) => e()) : void 0;
  }, [o, t, n, e, e.m_optIn?.rgFeaturedApps, i, s]);
}
function kn(e) {
  let { eventData: n } = e,
    r = i(s.LANGUAGE),
    a = n.m_plan,
    { eventModel: o, bLoading: c } = V(
      a.sale_clan_account,
      a.sale_clan_event_gid,
    ),
    u = k(a.opt_in_id, n.m_partnerId),
    d = !c && o?.GetImageURL(`capsule`, r, H.capsule_main),
    f = !c && ht(o),
    p = a.opt_in_id?.startsWith(`sale_nextfest_`)
      ? `${s.PARTNER_BASE_URL}recap/nextfest/${a.opt_in_id.substring(14)}/${n.m_partnerId}`
      : void 0,
    m = ci(),
    g = gn(a.opt_in_id),
    _ = K.useMemo(
      () => h(u.data?.appIdsWithoutPermissions ?? []),
      [u.data?.appIdsWithoutPermissions],
    ),
    v = K.useMemo(() => {
      if (u.isLoading || !u.isSuccess) return null;
      let e = u.data.stats?.reduce(
        (e, t) => (t.rt_last_update_time > e ? t.rt_last_update_time : e),
        0,
      );
      if (!(e && e > a.end_date)) return null;
      let t =
          u.data.stats?.filter((t) => e != 0 && t.rt_last_update_time == e) ??
          [],
        n = t.reduce((e, t) => e + t.demo_player_count, 0),
        r = t.reduce((e, t) => e + t.wishlist_count, 0),
        i = t.reduce((e, t) => e + t.player_wishlist_count, 0),
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
        nConversions: i,
        nMostPopularAppId: o,
      };
    }, [a.end_date, u.data, u.isLoading, u.isSuccess]),
    y =
      v?.nMostPopularAppId > 0
        ? v.nMostPopularAppId
        : _.length > 0
          ? Math.max(..._)
          : 0,
    b = g?.rgRegisteredApps?.find((e) => e.appid == y)?.jsondata,
    x = b && JSON.parse(b),
    S = x && !x.survey_response?.some((e) => e.accountid == l.accountid),
    C = (v?.nGamesWithStatsCount ?? 0) + _.length;
  if (
    (K.useEffect(() => {
      u.isLoading ||
        a.id.startsWith(`fakerecap_`) ||
        (u.isSuccess
          ? C == 0 && !S && m.SetHidden(a.id, !0)
          : m.SetHidden(a.id, !0));
    }, [m, S, C, a.id, u.isLoading, u.isSuccess]),
    u.isLoading)
  )
    return (0, q.jsx)(ot, {});
  if (C == 0 && !S && !a.id.startsWith(`fakerecap_`)) return;
  let w = `${s.PARTNER_BASE_URL}optin/survey/${a.opt_in_id}/${y}`,
    T = new Intl.NumberFormat(Je()),
    E = (0, q.jsx)(`a`, {
      href: `${s.PARTNER_BASE_URL}doc/gettingstarted/managing_users`,
      target: `_blank`,
      children: z(
        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_ViewFinancials`,
      ),
    });
  return (0, q.jsxs)(`div`, {
    className: fn,
    children: [
      v &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            d &&
              (0, q.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, q.jsx)(it, {
                  href: f,
                  target: `_blank`,
                  children: (0, q.jsx)(`img`, { src: d }),
                }),
              }),
            (0, q.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, q.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_RecapNextFest_TextHeader`,
                  ),
                }),
                (0, q.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: He(
                            `#Dashboard_UpcomingEvents_RecapNextFest_TextGameCount`,
                            C,
                            (0, q.jsx)(`b`, {}),
                          ),
                        }),
                        _.length > 0 &&
                          (0, q.jsx)(`div`, {
                            className: `vQDiNX1PMEc-`,
                            children: We(
                              `#Dashboard_UpcomingEvents_RecapNextFest_PartialStats_TextGameCount`,
                              _.length,
                              E,
                            ),
                          }),
                      ],
                    }),
                    p && (0, q.jsx)(An, { summaryURL: p }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nDemoPlayers),
                }),
                (0, q.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalPlayers`),
                    (0, q.jsx)(B, {
                      tooltip: z(`#Recap_NextFest_TotalPlayers_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `t245vD54MCk-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nConversions),
                }),
                (0, q.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_PlayerWishlist`),
                    (0, q.jsx)(B, {
                      tooltip: z(`#Recap_NextFest_PlayerWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(v.nWishlists),
                }),
                (0, q.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalWishlist`),
                    (0, q.jsx)(B, {
                      tooltip: z(`#Recap_NextFest_TotalWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      !v &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            d &&
              (0, q.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, q.jsx)(it, {
                  href: f,
                  target: `_blank`,
                  children: (0, q.jsx)(`img`, { src: d }),
                }),
              }),
            (0, q.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, q.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextHeader`,
                  ),
                }),
                (0, q.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: He(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextGameCount`,
                            C,
                            (0, q.jsx)(`b`, {}),
                          ),
                        }),
                        (0, q.jsx)(`div`, {
                          className: `vQDiNX1PMEc-`,
                          children: Be(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_NeedPermission`,
                            E,
                          ),
                        }),
                      ],
                    }),
                    p && (0, q.jsx)(An, { summaryURL: p }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: T.format(C),
                }),
                (0, q.jsx)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: z(`#Recap_NextFest_Apps`),
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `t245vD54MCk-`, `_8cesVkktgoE-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, q.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_PlayerWishlist`),
                    (0, q.jsx)(B, {
                      tooltip: z(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: t(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`, `_8cesVkktgoE-`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, q.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    z(`#Recap_NextFest_TotalWishlist`),
                    (0, q.jsx)(B, {
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
        (0, q.jsxs)(`div`, {
          className: `mk9nXNBQ26s-`,
          children: [
            (0, q.jsx)(`div`, {
              className: `cGkFh39raGs-`,
              children: z(`#Dashboard_UpcomingEvents_RecapNextFest_SurveyText`),
            }),
            (0, q.jsx)(`button`, {
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
function An(e) {
  return (0, q.jsx)(`button`, {
    className: pn,
    onClick: () => window.open(e.summaryURL, `_blank`),
    children: z(`#Dashboard_UpcomingEvents_RecapNextFest_TextFullSummary`),
  });
}
function jn(e) {
  let { eventData: t } = e,
    n = i(s.LANGUAGE),
    r = t.m_plan,
    { eventModel: a, bLoading: o } = V(
      r.sale_clan_account,
      r.sale_clan_event_gid,
    ),
    c = !o && a?.GetImageURL(`capsule`, n, H.capsule_main);
  return (0, q.jsx)(M, { imageUrl: c });
}
function Mn(e) {
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
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(F, { imageUrl: s, url: r }),
      (0, q.jsxs)(L, {
        hasImage: !!s,
        children: [
          (0, q.jsxs)(C, {
            inlineDate: l,
            children: [
              (0, q.jsx)(D, { text: t, url: r, large: u }),
              (0, q.jsx)(w, {
                startTimestamp: i,
                endTimestamp: a,
                largeDate: l,
              }),
            ],
          }),
          n,
          o?.length > 0 &&
            (0, q.jsx)(`div`, {
              className: `uwc0Vnfl-mQ-`,
              children: o.join(`, `),
            }),
        ],
      }),
      c && (0, q.jsx)(I, { children: c }),
    ],
  });
}
function Nn(e) {
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
      r.format(O(void 0, t.m_plan.start_date, `partner`) * 1e3),
    a = t.m_plan,
    [o] = U(a.store_item_id, a.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    c = K.useMemo(
      () => (o ? [{ appid: o.GetAppID(), appName: o.GetName() }] : void 0),
      [o],
    ),
    l = Bn(t.m_partnerId, c, a.start_date, a.end_date),
    u = o && a.discount_event_id,
    d = a.discount_event_id
      ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${a.discount_event_id}`
      : void 0,
    f = Ot(a.discount_event_id),
    p = Ce(t.m_plan, t.m_assetInput) > ke.k_AwaitingPartner,
    m = !u || l?.length > 0 || f?.length > 0;
  if (t.m_assetInput?.enable_input)
    return (0, q.jsxs)(v, {
      children: [
        (0, q.jsx)(Fe, { complete: p && m, urgent: !0 }),
        (0, q.jsx)(P, {
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
          (0, q.jsx)(P, {
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
function Pn(e) {
  let { eventData: t, eventUrl: n, optIn: r, invitedAndRegisteredApps: i } = e,
    a = t.m_plan,
    o = (e, t) => e?.map((e) => ({ details: e, bRegistered: t })) ?? [],
    c = K.useMemo(
      () =>
        r?.rgRegisteredApps?.map((e) => ({
          appid: e.appid,
          appName: e.app_name,
        })) ?? [],
      [r?.rgRegisteredApps],
    ),
    l = Bn(t.m_partnerId, c, a.start_date, a.end_date),
    u = K.useMemo(
      () =>
        l?.length &&
        (0, q.jsx)(`div`, {
          className: `-rKdDl3YL68-`,
          children: l
            .sort((e, t) => e.appName.localeCompare(t.appName))
            .map((e) =>
              (0, q.jsx)(
                `div`,
                { children: `${e.appName} (${zn(e.discountsDuring)})` },
                e.appid,
              ),
            ),
        }),
      [l],
    ),
    d = i?.length > 0,
    f = Q().setManageDiscountsAppIDs,
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
        R.PerDay &&
      g.format(r.description.definition.optin_deadline_date * 1e3);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      d &&
        (0, q.jsxs)(v, {
          children: [
            (0, q.jsx)(In, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_EligibleGames`),
              count: i.length,
              tooltip: (0, q.jsx)(Ln, { apps: i }),
            }),
            (0, q.jsx)(In, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_RegisteredGames`),
              count: r.rgRegisteredApps?.length ?? 0,
              tooltip: (0, q.jsx)(Ln, { apps: o(r.rgRegisteredApps, !1) }),
            }),
            (0, q.jsx)(In, {
              text: z(`#Dashboard_UpcomingEvents_Events_OptIn_Discounted`),
              count: l?.length ?? 0,
              tooltip: u,
              hidden: !h,
            }),
            (0, q.jsx)(Fn, { optIn: r }),
          ],
        }),
      (0, q.jsxs)(I, {
        children: [
          _ &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`div`, {
                  className: `_9XfxKPtGXL4-`,
                  children: z(
                    `#Dashboard_UpcomingEvents_Events_OptIn_Deadline`,
                  ),
                }),
                (0, q.jsx)(`div`, { className: `l-kYUyPKii4-`, children: _ }),
              ],
            }),
          (0, q.jsx)(E, {
            url: n,
            children: z(
              d
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_EligibleGames`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
          (0, q.jsx)(E, {
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
function Fn(e) {
  let { optIn: t } = e,
    n = $(),
    r =
      t.rgRegisteredApps?.filter((e) => e.demo_build_review_requested === !1) ??
      [];
  if (!r.length) return null;
  let i = t.description.definition,
    a =
      (i.event_start_date ?? t.description.start_date) * 1e3 - n.getTime() <
      14 * R.PerDay * 1e3,
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
    (0, q.jsx)(`div`, {
      className: dn,
      children: r.map((e) =>
        (0, q.jsx)(
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
function In(e) {
  let { text: n, count: r, tooltip: i, hidden: a } = e;
  return (0, q.jsx)(Ue, {
    toolTipContent: i,
    children: (0, q.jsxs)(`div`, {
      className: t(on, a && `itI76HUd-GU-`),
      children: [
        (0, q.jsx)(`div`, { className: sn, children: n }),
        (0, q.jsx)(`div`, { className: cn, children: r }),
      ],
    }),
  });
}
function Ln(e) {
  let { apps: t } = e;
  if (!t?.length) return;
  let n = t.sort((e, t) =>
    e.details.app_name.localeCompare(t.details.app_name),
  );
  return (0, q.jsx)(`div`, {
    className: ln,
    children: n.map((e) =>
      (0, q.jsx)(
        `div`,
        {
          children: e.bRegistered
            ? Be(
                `#Dashboard_UpcomingEvents_Events_OptIn_GameRegistered`,
                e.details.app_name,
                (0, q.jsx)(`span`, {
                  className: un,
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
function Rn(e) {
  let { eventData: n, appId: r, registerByDate: a, registrationType: o } = e,
    c = i(s.LANGUAGE),
    l = n.m_plan,
    u = n.m_optIn,
    [d] = U(r, 0, { include_basic_info: !0, include_assets: !0 }),
    f = d?.GetAssets().GetHeaderURL(),
    p = d ? s.PARTNER_BASE_URL + `apps/landing/` + d.GetAppID() : null,
    m = `${s.PARTNER_BASE_URL}optin/sale/${l.opt_in_id?.replace(`sale_`, ``)}`,
    h = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }),
    g = h.format(a),
    _ =
      o == `trailer-seasonalsale` || o == `trailer-themesale`
        ? g
        : h.format(new Date(u?.description.start_date * 1e3)),
    y = K.useMemo(() => {
      let e = n.m_optIn.rgRegisteredApps.find((e) => e.appid == r);
      return e ? [e] : [];
    }, [n.m_optIn.rgRegisteredApps, r]),
    b = y?.length > 0,
    x = l.discount_event_id
      ? `${s.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${l.discount_event_id}`
      : void 0,
    S = K.useMemo(
      () => y?.map((e) => ({ appid: e.appid, appName: e.app_name })) ?? [],
      [y],
    ),
    C = Bn(n.m_partnerId, S, l.start_date, l.end_date)?.length > 0,
    w = u?.description?.definition?.localized_optin_banner?.[s.LANGUAGE],
    T = u?.description.opt_in_name && w && ee(u?.description.opt_in_name, c, w),
    E = b && C,
    O = n.eventType == `deadline-urgent`,
    k = null,
    A = null,
    j = null;
  switch (o) {
    case `trailer-seasonalsale`:
      (k = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Title`),
        (A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Body`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Action`);
      break;
    case `trailer-themesale`:
      (k = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Title`),
        (A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Body`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Action`);
      break;
    case `registration`:
      (k = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Title`),
        (A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Body`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`);
      break;
    case `discount`:
      (k = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Title`),
        (A = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Body`),
        (j = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`);
  }
  return (0, q.jsxs)(N, {
    hasImage: !!f,
    backgroundImageUrl: T,
    dimmed: !0,
    children: [
      (0, q.jsx)(F, { imageUrl: f, url: p }),
      (0, q.jsxs)(L, {
        hasImage: !!f,
        children: [
          (0, q.jsx)(D, { text: z(k, n.title), light: !0 }),
          (0, q.jsx)(`div`, {
            className: t(an, O && `OSBBoP9InyI-`),
            children: z(A, g),
          }),
        ],
      }),
      (0, q.jsxs)(v, {
        children: [
          (0, q.jsx)(Fe, { complete: E, urgent: O }),
          (0, q.jsx)(P, {
            complete: b,
            urgent: O,
            label: z(j),
            status: g,
            actionStatus: z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeatured_Register_Button`,
            ),
            actionUrl: m,
          }),
          (0, q.jsx)(P, {
            complete: C,
            urgent: O,
            label: z(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: _,
            actionStatus: z(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: x,
          }),
        ],
      }),
    ],
  });
}
function zn(e) {
  let t = new Intl.DateTimeFormat(navigator.language, {
    month: `numeric`,
    day: `numeric`,
    year: `2-digit`,
  });
  return tt(e, (e) => `${e.rtStartDate}_${e.rtEndDate}`)
    .map(
      (e) =>
        `${t.format(new Date(e.rtStartDate * 1e3))} - ${t.format(new Date(e.rtEndDate * 1e3))}`,
    )
    .join(`, `);
}
function Bn(e, t, n, r) {
  let i = K.useMemo(
      () =>
        t?.map((e) => ({
          appid: e.appid,
          appName: e.appName,
          startDate: n,
          endDate: r,
        })) ?? [],
      [t, n, r],
    ),
    a = K.useMemo(() => t?.map((e) => e.appid) ?? [], [t]),
    o = T(a, { nPartnerID: e });
  return K.useMemo(() => {
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
function Vn(e, t, n, r) {
  let i = e;
  if (t == `seasonalsale`) i = S(te(r));
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
function Hn(t) {
  let n = $(),
    [r] = at(`recap`),
    i = K.useCallback(
      (r, i) => {
        let a = new Date(n.getTime() - 5 * R.PerDay * 1e3),
          o = {
            id: `fakerecap_${i}`,
            name: i,
            opt_in_id: r,
            type: `nextfest`,
            sale_clan_account: 39049601,
            sale_clan_event_gid: `4148451028995460854`,
            start_date: a.getTime() / 1e3,
            end_date: a.getTime() / 1e3 + 3 * R.PerDay,
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
          c = new yn(
            o.id,
            t,
            !1,
            o,
            null,
            s,
            new Date(s.description.start_date * 1e3),
            new Date(s.description.end_date * 1e3),
            `event`,
            bn(n, o),
            !1,
            !1,
            xn,
            void 0,
          );
        return e(Y(n, o), ``), c;
      },
      [n, t],
    );
  return K.useMemo(
    () => (r ? Array.from({ length: 1 }, (e, t) => i(r, `${r}_${t}`)) : []),
    [i, r],
  );
}
function Un() {
  return K.useMemo(() => {
    let e = new Date();
    e.setHours(0, 0, 0, 0);
    let t = (t) => {
        let n = new Date();
        return n.setDate(e.getDate() + t), n;
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
        eventTypeName: Wn(e.eventType),
        getElement: () =>
          (0, q.jsx)(`div`, {
            style: { color: `white`, backgroundColor: Gn(e.title, 0.4) },
            children: e.title,
          }),
        getCapsuleElement: () =>
          (0, q.jsx)(`div`, {
            style: {
              color: `white`,
              backgroundColor: Gn(e.title, 0.4),
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
        eventTypeName: Wn(i),
        getElement: () =>
          (0, q.jsx)(`div`, { children: `Generated event` + e }),
        dimmed: Math.random() > 0.9,
      };
      n.push(a);
    }
    return n;
  }, []);
}
function Wn(e) {
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
function Gn(e, t) {
  let n = 0;
  for (let t = 0; t < e.length; t++) n = e.charCodeAt(t) + ((n << 5) - n);
  let r = `#`;
  for (let e = 0; e < 3; e++) {
    let i = Math.floor(((n >> (e * 8)) & 255) * t);
    r += (`00` + i.toString(16)).slice(-2);
  }
  return r;
}
var Kn = `s0RrLjURphI-`,
  qn = `dCyO0rviUmw-`,
  Jn = `v150DClwlAY-`;
function Yn() {
  let e = $(),
    t = hn();
  return K.useMemo(() => {
    if (!t) return [];
    let r = Xn(n(`rgDeadlines`, `application_config`)),
      i = (r ? Array.from(r.entries()) : [])
        .filter(([t, n]) => new Date(n.due_date * 1e3) >= e || Zn(n))
        .reduce((e, [t, n]) => {
          let r = W(new Date(n.due_date * 1e3)),
            i = Qn(n.type),
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
          i ? o.push(er(t, a)) : o.push(...a.map((e) => $n(t, e))),
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
function Xn(e) {
  if (e) return Object.keys(e).reduce((t, n) => t.set(n, e[n]), new Map());
}
function Zn(e) {
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
function Qn(e) {
  return e === 4;
}
function $n(e, t) {
  let n = t.description_jsondata ? JSON.parse(t.description_jsondata) : void 0;
  switch (t.type) {
    case 1:
      return {
        sHeader: `Action Required`,
        sTitle: `Test 1`,
        bUrgent: !0,
        element: (0, q.jsx)(tr, { deadline: t, json: n }),
      };
    case 3:
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: z(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
        bUrgent: !0,
        element: (0, q.jsx)(nr, { deadline: t, json: n }),
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
            element: (0, q.jsx)(or, { deadline: t, json: n }),
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
            element: (0, q.jsx)(sr, { deadline: t, json: n }),
          }
        : void 0;
    }
    case 6: {
      let e = ir(t);
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: z(
          e
            ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
            : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
        ),
        bUrgent: !e,
        element: (0, q.jsx)(ar, { deadline: t, json: n }),
      };
    }
    case 9:
      return {
        sHeader: z(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        sTitle: z(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        bUrgent: t.due_date < st.GetTimeNowWithOverride() - 604800,
        element: (0, q.jsx)(lr, { deadline: t, json: n }),
      };
    case 10:
      return {
        sHeader: dr(n?.TemplateName),
        sTitle: fr(n),
        bUrgent: t.due_date < st.GetTimeNowWithOverride() + 2678400,
        element: (0, q.jsx)(ur, { deadline: t, json: n }),
        capsuleElement: (0, q.jsx)(`div`, { className: Jn, children: fr(n) }),
      };
  }
}
function er(e, t) {
  if (t[0].type === 4) return $n(e, t[0]);
}
function tr(e) {
  let { deadline: t, json: n } = e,
    r = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(t.due_date * 1e3));
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsxs)(`div`, { children: [`Name: `, n.name] }),
      (0, q.jsxs)(`div`, { children: [`Due date: `, r] }),
    ],
  });
}
function nr(e) {
  let { deadline: t } = e,
    [n] = U(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${s.PARTNER_BASE_URL}promotion/dailydeals/invite/${t.gid}`,
    i = le(t?.due_date);
  return (0, q.jsx)(X, {
    urgent: !0,
    imageUrl: n?.GetAssets().GetHeaderURL(),
    title: z(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
    body: z(`#PartnerDeadline_InviteExpiring_Body`, i),
    url: r,
    imageTooltip: n?.GetName(),
    rightCol: (0, q.jsx)(E, { url: r, children: z(`#DailyDeals_PickDate`) }),
  });
}
var rr = 604800;
function ir(e) {
  return e.due_date > st.GetTimeNowWithOverride() + rr;
}
function ar(e) {
  let { deadline: t } = e,
    [n] = U(t?.store_item_id, t?.store_item_type, { include_assets: !0 }),
    r = `${s.PARTNER_BASE_URL}promotion/assetportal/request/${t.gid}`,
    i = le(t?.due_date, !0, !0),
    a = ir(t);
  return (0, q.jsx)(X, {
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
    rightCol: (0, q.jsx)(E, {
      url: r,
      children: z(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
      ),
    }),
  });
}
function or(e) {
  let { deadline: t, json: n } = e,
    r = gn(n.opt_in_name),
    i = `${s.PARTNER_BASE_URL}optin/sale/${n.opt_in_name.replace(`sale_`, ``)}`;
  return r
    ? (0, q.jsx)(X, {
        title: r.description.definition.event_title[s.LANGUAGE],
        body: z(`#PartnerDeadline_NextFest_PressPreview_Body`),
        rightCol: (0, q.jsx)(E, {
          url: i,
          children: z(`#PartnerDeadline_NextFest_View_Registration`),
        }),
      })
    : null;
}
function sr(e) {
  let { deadline: t, json: n } = e,
    r = gn(n.opt_in_name),
    [i] = U(t?.store_item_id, t?.store_item_type, { include_assets: !0 });
  if (!r || !t?.store_item_id) return null;
  let a = `${s.PARTNER_BASE_URL}apps/demo/${t.store_item_id}`,
    o = `${s.PARTNER_BASE_URL}doc/store/review_process`;
  return (0, q.jsx)(X, {
    imageUrl: i?.GetAssets().GetHeaderURL(),
    title: r.description.definition.event_title[s.LANGUAGE],
    body: Ke(
      z(
        `#PartnerDeadline_NextFest_DemoBuildReview_Body`,
        i?.GetName() || `(` + t.store_item_id + `)`,
      ),
      (0, q.jsx)(`a`, { href: o }),
    ),
    rightCol: (0, q.jsx)(E, {
      url: a,
      children: z(`#PartnerDeadline_NextFest_View_Registration`),
    }),
  });
}
var cr = { include_assets: !0 };
function lr(e) {
  let { deadline: t, json: n } = e,
    [r] = gt(t.store_item_id, cr),
    i = kt(t.store_item_id)?.find(
      (e) => e.milestone_id == Number.parseInt(t.gid),
    ),
    a = ze.GetTokenWithFallback(i?.title),
    o = `${s.PARTNER_BASE_URL}admin/game/editbyappid/${t.store_item_id}?activetab=tab_specialsettings#seasonpass`,
    c = `${s.PARTNER_BASE_URL}apps/landing/${t.store_item_id}`;
  return (0, q.jsx)(X, {
    imageUrl: r?.GetAssets().GetSmallCapsuleURL(),
    title: z(
      `#PartnerDeadline_SeasonPass_DLC`,
      r?.GetName() || `(` + t.store_item_id + `)`,
    ),
    body: z(`#PartnerDeadline_SeasonPass_Desc`, a || t.gid),
    rightCol: (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(E, {
          url: o,
          children: z(`#PartnerDeadline_SeasonPass_OpenEditor`),
        }),
        (0, q.jsx)(E, {
          url: c,
          children: z(`#DiscountDashboard_VisitAppLanding_Tooltip`),
        }),
      ],
    }),
  });
}
function ur(e) {
  let { deadline: t, json: n } = e,
    r = le(t?.due_date, !0, !0),
    i = `${s.PARTNER_BASE_URL}taxrequirement/view/${t.partnerid}/${t.gid}`,
    a = mr(),
    o = pr(n, r);
  return (
    a ||
      (o += ` ` + z(`#PartnerDeadline_TaxRequirement_ActualAuthorityRequired`)),
    (0, q.jsx)(X, {
      title: fr(n),
      body: o,
      rightCol: (0, q.jsx)(E, {
        url: i,
        children: z(`#PartnerDeadline_TaxRequirement_ButtonViewDetails`),
      }),
    })
  );
}
function X(e) {
  let {
    imageUrl: t,
    title: n,
    body: r,
    imageTooltip: i,
    url: a,
    rightCol: o,
    urgent: s,
  } = e;
  return (0, q.jsxs)(N, {
    hasImage: !!t,
    children: [
      (0, q.jsx)(F, { imageUrl: t, url: a, tooltip: i }),
      (0, q.jsxs)(L, {
        hasImage: !!t,
        children: [
          (0, q.jsx)(D, { text: n }),
          (0, q.jsx)(`div`, { className: s ? qn : Kn, children: r }),
        ],
      }),
      o && (0, q.jsx)(I, { children: o }),
    ],
  });
}
function dr(e) {
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
function fr(e) {
  switch (e?.TemplateName) {
    case `Freeform`:
    case `Freeform-FR`:
      return hr(e)
        ? z(`#PartnerDeadline_TaxRequirement_Title_FileReceived`)
        : z(`#PartnerDeadline_TaxRequirement_Title_Freeform`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return z(`#PartnerDeadline_TaxRequirement_Title_NoAction`);
    default:
      return z(`#PartnerDeadline_TaxRequirement_Title`);
  }
}
function pr(e, t) {
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
        hr(e)
          ? (n = z(`#PartnerDeadline_TaxRequirement_FileReceived`))
          : ((n = e?.Parameters?.CustomMessageBody?.trim() || ``),
            n.length > 64 && (n = n.substring(0, 64) + `...`)),
        n
      );
    default:
      return ``;
  }
}
function mr() {
  let [e] = K.useState(n(`bActualAuthority`, `application_config`));
  return e;
}
function hr(e) {
  return e?.Parameters?.UploadOriginalFileName !== void 0;
}
var gr = `pb980aEPJP8-`,
  _r = `_2MqhtXa-78o-`,
  vr = `MoxPAoUOBOw-`,
  yr = `htHZFzndVNk-`,
  br = `tr0CRxLt8vY-`,
  xr = `EIZlbjeaXAE-`,
  Sr = `-maRlit2vz0-`,
  Cr = `KLjlBgtboDk-`,
  wr = `OAd-OQpsrlA-`,
  Tr = `kzM7eb4lVuw-`,
  Er = `HoRGBGHaxs4-`;
function Dr(e) {
  let t = K.useMemo(() => n(`rgDailyDeals`, `application_config`) ?? [], []),
    r = $();
  return K.useMemo(
    () =>
      t
        .filter(
          (e) =>
            !e.cancelled &&
            new Date((e.rtime32_start_time + 7 * R.PerDay) * 1e3) > r,
        )
        .flatMap((t) => {
          let n = new Date((t.rtime32_start_time + R.PerDay) * 1e3);
          return {
            title: t.store_item_name,
            startDate: new Date(t.rtime32_start_time * 1e3),
            endDate: n,
            eventType: `event`,
            id: t.gid,
            eventTypeName: Or(t),
            getElement: () => (0, q.jsx)(Ar, { deal: t, partnerId: e }),
            getCapsuleElement: () => (0, q.jsx)(Mr, { deal: t }),
            passesFilter: (e) => e == 1,
            editURL: `${s.PARTNER_BASE_URL}promotion/dailydeals/edit/${t.gid}`,
          };
        }) ?? [],
    [r, e, t],
  );
}
function Or(e) {
  return kr(new Date(), e)
    ? z(`#Dashboard_UpcomingEvents_EventType_DailyDealRecap`)
    : z(`#Dashboard_UpcomingEvents_EventType_DailyDeal`);
}
function kr(e, t) {
  return (
    new Date((t.rtime32_start_time + R.PerDay) * 1e3).getTime() < e.getTime()
  );
}
function Ar(e) {
  let { deal: t, partnerId: n } = e;
  return kr(new Date(), t)
    ? (0, q.jsx)(Nr, { deal: t, partnerId: n })
    : (0, q.jsx)(jr, { partnerId: n, deal: t });
}
function jr(e) {
  let { partnerId: t, deal: n } = e,
    r = ye(n.store_item_type),
    [i] = U(n.store_item_id, r, { include_assets: !0 }),
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
    { nDiscountPercentHigh: l, dtDiscountStart: u, dtDiscountEnd: d } = Oe(n),
    f = K.useMemo(() => ce(n, l), [n, l]),
    p = we(n),
    m = l > 0,
    h = f >= De.DealReady,
    g = h ? z(`#Dashboard_UpcomingEvents_DailyDeal_ReadyToGo`) : ``,
    _ = Ae(t?.toString(), n.discount_event_id?.toString()),
    y = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(n.rtime32_start_time * 1e3)),
    b = de(n);
  return (0, q.jsxs)(N, {
    hasImage: !!a,
    children: [
      (0, q.jsx)(F, { imageUrl: a, url: o, tooltip: n.store_item_name }),
      (0, q.jsxs)(L, {
        hasImage: !!a,
        children: [
          (0, q.jsx)(D, { text: n.store_item_name }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, {
                className: gr,
                children: z(`#Dashboard_UpcomingEvents_DailyDeal_Dates`),
              }),
              (0, q.jsx)(w, {
                startTimestamp: n.rtime32_start_time,
                endTimestamp: c,
              }),
            ],
          }),
          m &&
            (0, q.jsxs)(`div`, {
              children: [
                (0, q.jsx)(`span`, {
                  className: `pb980aEPJP8-`,
                  children: z(`#Dashboard_UpcomingEvents_DailyDeal_Discounted`),
                }),
                (0, q.jsx)(w, { startTimestamp: u, endTimestamp: d }),
              ],
            }),
        ],
      }),
      (0, q.jsxs)(v, {
        children: [
          (0, q.jsx)(Fe, { complete: h, urgent: !0, overrideText: g }),
          m &&
            (0, q.jsx)(P, {
              complete: m,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: (0, q.jsx)(ne, { oDailyDeal: n }),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_EditDiscount`,
              ),
              actionUrl: _,
            }),
          !m &&
            (0, q.jsx)(P, {
              complete: !1,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: z(`#Dashboard_UpcomingEvents_DailyDeal_DueBy`, y),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_EnterDiscount`,
              ),
              actionUrl: _,
            }),
          p == ge.SetUp &&
            (0, q.jsx)(P, {
              complete: !0,
              urgent: !0,
              label: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageSetUp`,
              ),
              actionStatus: z(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageView`,
              ),
              actionUrl: b,
            }),
          p == ge.NotSetUp &&
            (0, q.jsx)(P, {
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
function Mr(e) {
  let { deal: t } = e,
    n = ye(t.store_item_type),
    [r] = U(t.store_item_id, n, { include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL();
  return (
    n == 0 && r
      ? s.PARTNER_BASE_URL + `` + r.GetAppID()
      : ((n == 2 && r) || (n == 1 && r)) && s.PARTNER_BASE_URL + `` + r.GetID(),
    (0, q.jsx)(M, {
      imageUrl: i,
      title: z(`#Dashboard_UpcomingEvents_EventType_DailyDeal`),
    })
  );
}
function Nr(e) {
  let { deal: n, partnerId: r } = e,
    [i, a] = U(n?.store_item_id, ye(n?.store_item_type), {
      include_assets: !0,
    }),
    o = xe(r, n?.gid ? [n.gid] : [])?.get(n.gid),
    c = !n || !o || a == 1;
  if (n.cancelled || n.deleted) return null;
  let l = `${s.PARTNER_BASE_URL}promotion/dailydeals/dashboard/${r}`,
    u;
  return (
    (u = i?.GetAssets().GetHeaderURL()
      ? (0, q.jsx)(`img`, { src: i.GetAssets().GetHeaderURL() })
      : z(i ? `#DailyDeals_HeaderArtMissing` : `#DailyDeals_StoreItem_Hidden`)),
    (0, q.jsx)(`div`, {
      className: t(vr),
      children: c
        ? (0, q.jsx)(Pr, {})
        : (0, q.jsx)(q.Fragment, {
            children: (0, q.jsxs)(`div`, {
              className: t(xr),
              children: [
                (0, q.jsx)(`div`, {
                  className: Sr,
                  children: (0, q.jsx)(`div`, { className: _r, children: u }),
                }),
                (0, q.jsxs)(`div`, {
                  className: t(Sr),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: yr,
                      children: [
                        (0, q.jsx)(`span`, {
                          className: br,
                          children: Ie(n.rtime32_start_time),
                        }),
                        i?.GetName() || n?.store_item_name,
                      ],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: wr,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: Tr,
                          children:
                            o?.gross_sales &&
                            (0, q.jsxs)(q.Fragment, {
                              children: [
                                (0, q.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: z(`#DailyDeals_Report_Revenue`),
                                }),
                                (0, q.jsx)(`div`, {
                                  className: t(`ZCETFj0EJbk-`, void 0),
                                  children: o.gross_sales
                                    ? me(o.gross_sales)
                                    : `?`,
                                }),
                              ],
                            }),
                        }),
                        (0, q.jsx)(`div`, {
                          className: Tr,
                          children:
                            o?.impressions &&
                            (0, q.jsxs)(q.Fragment, {
                              children: [
                                (0, q.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: z(`#DailyDeals_Report_Impressions`),
                                }),
                                (0, q.jsx)(`div`, {
                                  className: t(`ZCETFj0EJbk-`, void 0),
                                  children: pt(o.impressions),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, q.jsx)(`div`, {
                  className: t(Sr, Cr),
                  children:
                    o?.marketing?.length > 1 &&
                    (0, q.jsx)(Te, { nGames: o.marketing.length }),
                }),
                (0, q.jsx)(`div`, {
                  className: Sr,
                  children: (0, q.jsx)(`div`, {
                    className: Er,
                    children: (0, q.jsx)(An, { summaryURL: l }),
                  }),
                }),
              ],
            }),
          }),
    })
  );
}
function Pr() {
  return (0, q.jsx)(`div`, {
    className: void 0,
    children: (0, q.jsx)(ot, {
      size: `medium`,
      position: `center`,
      className: void 0,
    }),
  });
}
function Fr() {
  return K.useMemo(() => {
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
        getElement: () => (0, q.jsx)(Ir, { saleDesc: e }),
        getCapsuleElement: () => (0, q.jsx)(Lr, { saleDesc: e }),
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
function Ir(e) {
  let { saleDesc: t } = e;
  return Ze.GetClanEventModel(t.clanEventGID)
    ? (0, q.jsx)(Ne, {
        saleDesc: t,
        bShowAppBrowse: !0,
        bHidePartnerStats: !0,
        bShowWhyAmISeeingThis: !0,
      })
    : (0, q.jsx)(ie, {
        saleDesc: t,
        message: z(`#Dashboard_UpcomingEvents_PartnerEvents_NoAccess`),
      });
}
function Lr(e) {
  let { saleDesc: t } = e,
    n = i(s.LANGUAGE),
    r = Ze.GetClanEventModel(t.clanEventGID),
    a = dt(r, `capsule`, n, H.capsule_main);
  return r ? (0, q.jsx)(M, { imageUrls: a }) : void 0;
}
function Rr() {
  return K.useMemo(
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
          getElement: () => (0, q.jsx)(Br, { marketingMessage: e }),
          getCapsuleElement: () => (0, q.jsx)(Hr, { marketingMessage: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? [],
    [],
  );
}
function zr(e) {
  let t = -1;
  return e == 1 ? (t = 0) : e == 2 ? (t = 1) : e == 5 && (t = 2), t;
}
function Br(e) {
  let { marketingMessage: t } = e,
    n = Q(),
    r = t.visibility === 2,
    i = t.visibility === 3,
    a = zr(t.association_type),
    [o] = U(t.associated_id, a, { include_basic_info: !0, include_assets: !0 }),
    c = o,
    l = c?.GetAssets().GetHeaderURL() || null,
    u = c ? s.PARTNER_BASE_URL + `apps/landing/` + c.GetAppID() : null,
    d =
      r || i
        ? s.PARTNER_BASE_URL +
          `promotion/marketingmessages/partnerpreview/` +
          t.gid
        : void 0,
    { bReady: f, bReadyExceptLiveEvent: p } = ve(null, t, !0),
    m = n.bShowWarnings ? _e.GetMarketingMesssageEditURL(t.gid) : void 0,
    h = $(),
    g,
    _,
    y,
    b,
    x = 0;
  r && t.start_date > h.getTime() / 1e3
    ? ((_ = z(
        `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusVisibleOn`,
        Ve(t.start_date),
      )),
      (b = z(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
      (x = 1))
    : r
      ? ((_ = z(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusPublic`,
        )),
        (b = z(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
        (x = 1))
      : i
        ? ((g = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusReadyToPublish`,
          )),
          (_ = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusApproved`,
          )),
          (b = z(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_PreviewPublishButton`,
          )))
        : f || p
          ? ((g = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_Overall`,
            )),
            (_ = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview`,
            )),
            (y = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_ttip`,
            )),
            (x = 2))
          : ((_ = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady`,
            )),
            (y = z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady_ttip`,
            )));
  let S = x === 2 ? 1 : x,
    T = Vr(t);
  return (0, q.jsxs)(N, {
    hasImage: !!l,
    buttonPosition: `top`,
    children: [
      (0, q.jsx)(F, { imageUrl: l, url: u }),
      (0, q.jsx)(L, {
        hasImage: !!l,
        children: (0, q.jsxs)(C, {
          children: [
            (0, q.jsx)(D, { text: t.title, url: u }),
            (0, q.jsx)(`div`, {
              children: (0, q.jsx)(w, {
                startTimestamp: t.start_date,
                endTimestamp: t.end_date,
              }),
            }),
          ],
        }),
      }),
      (0, q.jsxs)(v, {
        children: [
          (0, q.jsx)(Fe, { complete: S, overrideText: g }),
          (0, q.jsx)(P, {
            complete: x,
            label: z(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_Status`,
            ),
            status: _,
            tooltip: y,
            actionStatus: b,
            actionUrl: d,
          }),
          T,
        ],
      }),
      m &&
        (0, q.jsx)(I, {
          children: (0, q.jsx)(E, { url: m, children: `Edit MM (VO)...` }),
        }),
    ],
  });
}
function Vr(e) {
  let t =
      e.template_vars_json?.length > 0
        ? JSON.parse(e.template_vars_json)
        : void 0,
    n = t?.custom_display == `partner_event` && t?.update_event_gid,
    { eventModel: r } = V(
      t.update_event_clan_accountid,
      t.update_event_gid,
      !0,
    ),
    i = y(t.update_event_clan_accountid, t.update_event_gid),
    a = r?.visibility_state == ct.k_EEventStateVisible,
    o = ft(r, ut.k_eCommunityEdit, `allowRelative`);
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
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(P, {
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
      (0, q.jsx)(P, {
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
function Hr(e) {
  let { marketingMessage: t } = e,
    n = zr(t.association_type),
    [r] = U(t.associated_id, n, { include_basic_info: !0, include_assets: !0 }),
    i = r?.GetAssets().GetHeaderURL() || null;
  return (0, q.jsx)(M, { imageUrl: i });
}
var Ur = `gMHBCK--7U8-`,
  Wr = `jwZcGjRfZHc-`,
  Gr = `thE2MxiJxqA-`,
  Kr = `cxhAKGBxdLk-`,
  qr = `pAPaN6Fq9nA-`,
  Jr = `_0VhAVxt3Fjo-`,
  Yr = new Date(Date.UTC(2024, 10, 15, 17, 0, 0));
function Xr(e) {
  return K.useMemo(() => {
    let t = n(`rgGermanRatingMissingApps`, `application_config`);
    return t?.length > 0
      ? [
          {
            title: z(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
            startDate: Yr,
            endDate: Yr,
            eventType: `deadline-urgent`,
            id: `storelinkdeprecationnotice`,
            eventTypeName: z(
              `#Dashboard_UpcomingEvents_EventType_GermanRatingMissing`,
            ),
            getElement: () => (0, q.jsx)(Zr, { apps: t, partnerId: e }),
            passesFilter: (e) => e == 1,
          },
        ]
      : [];
  }, [e]);
}
function Zr(e) {
  let { apps: n, partnerId: r } = e,
    i = `${s.PARTNER_BASE_URL}doc/gettingstarted/contentsurvey/germany`,
    a = `${s.PARTNER_BASE_URL}recommended_actions/missingratingforgermany/?partnerid=${r}`,
    o = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }).format(Yr),
    c = n
      .sort((e, t) => e.name.localeCompare(t.name))
      .slice(0, 30)
      .map((e) => (0, q.jsx)(`div`, { children: e.name }, e.appid)),
    l = (0, q.jsxs)(`div`, {
      className: Jr,
      children: [
        c,
        n.length > 30 ? (0, q.jsx)(`div`, { children: `...` }) : void 0,
      ],
    });
  return (0, q.jsxs)(N, {
    children: [
      (0, q.jsx)(L, {
        children: (0, q.jsxs)(C, {
          children: [
            (0, q.jsx)(D, {
              text: z(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
              url: a,
            }),
            (0, q.jsx)(`div`, {
              className: t(Ur),
              children: z(
                n.length == 1
                  ? `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc`
                  : `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc_Plural`,
                o,
              ),
            }),
            (0, q.jsx)(Ue, {
              className: Wr,
              toolTipContent: l,
              children: (0, q.jsx)(`a`, {
                className: qr,
                href: a,
                children: (0, q.jsxs)(`div`, {
                  className: Gr,
                  children: [
                    (0, q.jsx)(`div`, {
                      className: Kr,
                      children: z(
                        `#Dashboard_UpcomingEvents_GermanRatingMissing_Count`,
                      ),
                    }),
                    (0, q.jsx)(`div`, { className: qr, children: n.length }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      (0, q.jsxs)(I, {
        children: [
          (0, q.jsx)(E, {
            url: i,
            children: z(`#Dashboard_UpcomingEvents_General_ReadDocumentation`),
          }),
          (0, q.jsx)(E, {
            url: a,
            children: z(`#Dashboard_UpcomingEvents_General_AffectedApps`),
          }),
        ],
      }),
    ],
  });
}
function Qr() {
  let e = K.useMemo(() => ti(), []);
  return K.useMemo(() => {
    if (!e) return [];
    let { setRegistrations: t, mapEvents: n } = e,
      r = i(s.LANGUAGE);
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
          getElement: () => (0, q.jsx)($r, { eventModel: e, registered: n }),
          getCapsuleElement: () => (0, q.jsx)(ei, { eventModel: e }),
          passesFilter: (e) => e == 1,
        };
      }) ?? []
    );
  }, [e]);
}
function $r(e) {
  let { eventModel: t, registered: n } = e,
    r = i(s.LANGUAGE),
    a = n
      ? t.GetNameWithFallback(r)
      : z(
          `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Title`,
          t.GetNameWithFallback(r),
        ),
    o = ft(t, ut.k_eView, `allowRelative`),
    c = t.GetImageURL(`capsule`, r, H.capsule_main);
  return (0, q.jsxs)(N, {
    hasImage: !!c,
    buttonPosition: `top`,
    children: [
      (0, q.jsx)(F, { imageUrl: c, url: o }),
      (0, q.jsx)(L, {
        hasImage: !!c,
        children: (0, q.jsxs)(C, {
          children: [
            (0, q.jsx)(D, { text: a, url: o }),
            (0, q.jsx)(w, {
              startTimestamp: t.startTime,
              endTimestamp: t.endTime,
              showTime: !0,
            }),
            (0, q.jsx)(`div`, { children: t.GetSummaryWithFallback(r) }),
            n &&
              (0, q.jsxs)(`div`, {
                className: `cNktljFYRzg-`,
                children: [
                  (0, q.jsx)(qe, {}),
                  z(
                    `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_YoureRegistered`,
                  ),
                ],
              }),
          ],
        }),
      }),
      (0, q.jsx)(I, {
        children: (0, q.jsx)(E, {
          url: o,
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
function ei(e) {
  let { eventModel: t } = e,
    n = i(s.LANGUAGE);
  return (
    !!t &&
    (0, q.jsx)(M, { imageUrl: t.GetImageURL(`capsule`, n, H.capsule_main) })
  );
}
function ti() {
  let e = n(`rgMeetSteam`, `application_config`);
  if (!e?.rgEvents) return null;
  let t = new Map();
  for (let n in e.rgEvents)
    try {
      let r = _.InitFromAccountID(mt(), s.EUNIVERSE),
        i = lt(r, e.rgEvents[n]);
      t.set(n, i);
    } catch {}
  return {
    setInvitations: new Set(e.rgInvitations),
    setRegistrations: new Set(e.rgRegistrations),
    mapEvents: t,
  };
}
var ni = 7;
function ri(e) {
  let t = $();
  return K.useMemo(() => {
    let r = n(`rgPartnerAddressRequests`, `application_config`) ?? [],
      i = Math.floor(t.getTime() / 1e3);
    return (
      e && !r.length
        ? [
            {
              opt_in_name: `sale_test`,
              partnerid: 0,
              rtime_target: i + 3 * R.PerDay,
              title: `Sample Request`,
            },
          ]
        : r
    ).map((e) => {
      let n = e.rtime_target > 0,
        r = n && e.rtime_target < i,
        a = n && i >= e.rtime_target - ni * R.PerDay,
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
          (0, q.jsx)(ii, { request: e, strTitle: s, bOverdue: r, bUrgent: a }),
        passesFilter: (e) => e == 1,
      };
    });
  }, [t, e]);
}
function ii(e) {
  let { request: t, strTitle: n, bOverdue: r, bUrgent: i } = e,
    a = new Date(t.rtime_target * 1e3).toLocaleDateString(
      Re.GetPreferredLocales(),
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
    (0, q.jsx)(X, {
      title: n,
      body: o,
      urgent: i,
      rightCol: (0, q.jsx)(E, {
        url: `${s.PARTNER_BASE_URL}optin/address/${t.opt_in_name}/${t.partnerid}`,
        children: z(`#Dashboard_UpcomingEvents_AddressRequest_Action`),
      }),
    })
  );
}
function ai(e, t, r, i) {
  let a = K.useMemo(() => n(`sEventIds`, `application_config`)?.split(`,`), []),
    o = e.now,
    s = e.bShowWarnings,
    c = Un(),
    l = vn(t),
    u = Rr(),
    d = $t(),
    f = Yn(),
    p = Dr(t),
    m = Fr(),
    h = Xr(t),
    g = Qr(),
    _ = ri(i),
    v = Gt(e.additionalEventStore),
    y = Kt(e.additionalEventStore),
    b = qt();
  return K.useMemo(() => {
    let e = l
        .concat(d, u, f, p, m, h, g, _, v, i ? c : [])
        .filter((e) => oi(o, e, a, y, s)),
      t = e.length;
    return {
      rgShownEvents: e.filter((e) => (r == 3) == b.has(si(e))),
      nShouldBeShownCount: t,
    };
  }, [l, d, u, f, p, m, h, g, _, v, i, c, o, a, y, b, r, s]);
}
function oi(e, t, n, r, i) {
  return !(
    (t.valveOnly && !i) ||
    (n?.length > 0 && !n.includes(t.id)) ||
    r.has(t.id) ||
    (t.dimmed && e >= t.startDate) ||
    new Date(t.startDate.getTime() + 21 * R.PerDay * 1e3) < e
  );
}
function si(e) {
  return JSON.stringify({ usage: `dashboard`, eventId: e.id });
}
var Z = K.createContext({
  now: new Date(),
  bShowWarnings: !1,
  additionalEventStore: void 0,
  setManageDiscountsAppIDs: void 0,
});
function Q() {
  return K.useContext(Z);
}
function $() {
  return K.useContext(Z).now;
}
function ci() {
  return K.useContext(Z).additionalEventStore;
}
function li(e) {
  let { showWarnings: t } = e,
    r = K.useMemo(
      () =>
        new Set(
          n(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    i = K.useMemo(() => new Wt(), []),
    a = K.useMemo(() => new Date(), []),
    o = K.useMemo(
      () => ({
        now: a,
        bShowWarnings: t,
        additionalEventStore: i,
        setManageDiscountsAppIDs: r,
      }),
      [a, t, i, r],
    );
  return (0, q.jsx)(Z.Provider, {
    value: o,
    children: (0, q.jsx)(ui, { ...e }),
  });
}
function ui(e) {
  let { partnerId: t, testData: n } = e,
    [r] = at(`expanded`, !1),
    [i, a] = K.useState(!!r),
    o = K.useCallback((e) => {
      a(e), !e && D.current.scrollIntoView();
    }, []),
    [s, c] = K.useState(!1),
    l = K.useCallback(
      (e) => {
        c(e), e && a(!0);
      },
      [a, c],
    ),
    [u, d] = K.useState(!1),
    f = K.useCallback(
      (e) => {
        d(e), e && a(!0);
      },
      [a, d],
    ),
    [p, m] = K.useState(``),
    h = K.useCallback(
      (e) => {
        e && (a(!0), l(!0), f(!0)), m(e);
      },
      [l, f],
    ),
    [g, _] = K.useState(0),
    v = () => {
      _(0), m(``);
    },
    y = Q(),
    { rgShownEvents: b, nShouldBeShownCount: x } = ai(y, t, g, n),
    S = pi(b, g, s, l, u, f),
    C = K.useMemo(() => S.filter((e) => ji(y.now, e, p, g)), [y.now, S, p, g]),
    w = Mi(b, C),
    T = g != 0 || (p && p.trim().length > 0),
    E = K.useMemo(() => new Map(), []),
    D = K.useRef(void 0),
    O = ki(i, a),
    k = K.useCallback(
      (e) => {
        if (W(e).getTime() == W(y.now).getTime()) {
          D.current.scrollIntoView();
          return;
        }
        let t = E?.get(W(e).getTime() / 1e3);
        t && O(t.element);
      },
      [y.now, E, O],
    ),
    [ee, A] = K.useState();
  K.useEffect(() => A(void 0), [b]);
  let j = K.useMemo(
      () =>
        (0, q.jsxs)(`div`, {
          className: be,
          children: [
            (0, q.jsx)(hi, { filterType: g, setFilterType: _ }),
            (0, q.jsx)(mi, { filterText: p, setFilterText: h }),
          ],
        }),
      [p, g, h],
    ),
    te = x > 0 || g != 0,
    M = g == 0 && C != null && C?.length == 0;
  return (0, q.jsx)(q.Fragment, {
    children:
      te &&
      (0, q.jsx)(vt, {
        title: z(`#Dashboard_UpcomingEvents_Title`),
        ref: D,
        headerElement: j,
        children: (0, q.jsx)(`div`, {
          className: `XCgSZWm6N7w-`,
          children: (0, q.jsxs)(`div`, {
            className: `Xpe0MYEePcY-`,
            children: [
              M &&
                (0, q.jsx)(`div`, {
                  className: `mhJoiRoACzY-`,
                  children: Be(
                    `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed`,
                    (0, q.jsx)(`a`, {
                      onClick: () => {
                        _(3), m(``);
                      },
                      children: z(
                        `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed_LinkText`,
                      ),
                    }),
                  ),
                }),
              !M &&
                (0, q.jsx)(_i, {
                  events: C,
                  filterVisibleEventIds: w,
                  dayRefsToScrollTo: E,
                  fnScrollToDay: k,
                  isExpanded: i,
                  fnSetExpanded: o,
                  filterEnabled: T,
                  filterType: g,
                  clearAllFilters: v,
                  hoverEvent: ee,
                  setHoverEvent: A,
                }),
            ],
          }),
        }),
      }),
  });
}
function di(e, t) {
  return t.startDate != t.endDate && e >= t.startDate && e <= t.endDate;
}
function fi(e, t) {
  return e > t.endDate;
}
function pi(t, n, r, i, a, o) {
  let s = $();
  return (
    K.useMemo(
      () =>
        t.forEach((t) =>
          e(!di(s, t) || !fi(s, t), `An event can't be both live and a recap`),
        ),
      [s, t],
    ),
    K.useMemo(() => {
      let e = t;
      if (n == 0) {
        let t = (e, t, n) => {
          let r = e.filter((e) => t(e));
          return r.length > 1 ? e.filter((e) => !t(e)).concat(n(r)) : e;
        };
        r ||
          (e = t(
            e,
            (e) => di(s, e),
            (e) => ({
              title: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
              startDate: e[0].startDate,
              endDate: e[0].endDate,
              eventType: `event`,
              id: `live_placeholder`,
              eventTypeName: ``,
              getElement: () =>
                (0, q.jsx)(wi, {
                  text: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
                  events: e,
                  expanded: r,
                  setExpanded: i,
                }),
            }),
          )),
          a ||
            (e = t(
              e,
              (e) => fi(s, e),
              (e) => ({
                title: z(`#Dashboard_UpcomingEvents_Events_Placeholder_Recap`),
                startDate: e[0].startDate,
                endDate: e[0].endDate,
                eventType: `event`,
                id: `recap_placeholder`,
                eventTypeName: ``,
                getElement: () =>
                  (0, q.jsx)(wi, {
                    text: z(
                      `#Dashboard_UpcomingEvents_Events_Placeholder_Recap`,
                    ),
                    events: e,
                    expanded: a,
                    setExpanded: o,
                  }),
              }),
            ));
      }
      return e;
    }, [s, t, n, r, i, a, o])
  );
}
function mi(e) {
  let { filterText: t, setFilterText: n } = e;
  return (0, q.jsxs)(`div`, {
    className: pe,
    children: [
      (0, q.jsx)(`input`, {
        className: he,
        type: `text`,
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: z(`#Dashboard_UpcomingEvents_Events_FilterEmpty`),
      }),
      (0, q.jsx)(`button`, {
        className: Ee,
        onClick: () => n(``),
        children: `✖`,
      }),
      (0, q.jsx)(`span`, { className: Se, children: `🔍` }),
    ],
  });
}
function hi(e) {
  let { filterType: n, setFilterType: r } = e,
    i = K.useMemo(
      () => [
        { type: 0, text: z(`#Dashboard_UpcomingEvents_Filter_All`) },
        { type: 1, text: z(`#Dashboard_UpcomingEvents_Filter_Events`) },
        { type: 2, text: z(`#Dashboard_UpcomingEvents_Filter_Releases`) },
        { type: 3, text: z(`#Dashboard_UpcomingEvents_Filter_Dismissed`) },
      ],
      [],
    );
  return (0, q.jsx)(`div`, {
    className: fe,
    children: i.map((e) =>
      (0, q.jsx)(
        `div`,
        {
          className: t(je, n == e.type && `VSt5dZb4mv0-`),
          onClick: () => r(e.type),
          children: e.text,
        },
        e.type,
      ),
    ),
  });
}
function gi(e) {
  let { partnerId: t, showWarnings: r, testData: i } = e,
    a = K.useMemo(() => new Date(), []),
    o = K.useMemo(() => new Wt(), []),
    s = K.useMemo(
      () =>
        new Set(
          n(`rgManageDiscountsAppIDs`, `application_config`)?.map((e) =>
            Number(e),
          ) ?? [],
        ),
      [],
    ),
    c = K.useMemo(
      () => ({
        now: a,
        bShowWarnings: r,
        bExpanded: !0,
        additionalEventStore: o,
        setManageDiscountsAppIDs: s,
      }),
      [a, r, o, s],
    ),
    { rgShownEvents: l } = ai(c, t, 0, i),
    u = K.useMemo(
      () =>
        l.map((e) =>
          (0, q.jsx)(
            Si,
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
  return (0, q.jsx)(Z.Provider, {
    value: c,
    children: (0, q.jsx)(`div`, { className: x, children: u }),
  });
}
function _i(e) {
  let {
      events: n,
      filterVisibleEventIds: r,
      dayRefsToScrollTo: i,
      fnScrollToDay: a,
      filterEnabled: o,
      filterType: s,
      clearAllFilters: c,
      isExpanded: l,
      fnSetExpanded: u,
      hoverEvent: d,
      setHoverEvent: f,
    } = e,
    p = $(),
    m = K.useMemo(() => n.filter((e) => fi(p, e)), [n, p]),
    h = K.useMemo(() => n.filter((e) => di(p, e)), [n, p]),
    g = K.useMemo(
      () =>
        Array.from(
          Oi(
            bt(
              n.filter((e) => !fi(p, e) && !di(p, e)),
              (e) => xt(e.startDate),
            ),
          ),
        ).sort(Ti),
      [n, p],
    ),
    [_, v] = K.useState(!1),
    y = K.useRef(void 0);
  K.useLayoutEffect(() => {
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
  let b = K.useCallback(
      (e, t, n, o, s) =>
        t.length > 0
          ? (0, q.jsx)(
              vi,
              {
                date: new Date(e * 1e3),
                events: t,
                filterVisibleEventIds: r,
                dayRefsToScrollTo: i,
                fnScrollToDay: a,
                firstMonth: n == 0,
                lastMonth: n == g.length - 1,
                hoverEvent: d,
                setHoverEvent: f,
                eventTimeGroup: o,
                showHeader: s,
              },
              `${o == `normal` ? `` : o + `_`}${e}`,
            )
          : void 0,
      [i, g.length, r, a, d, f],
    ),
    x = K.useCallback(
      (e, t, n) => e.map(([e, r], i) => b(e, r, i, t, n)).filter((e) => !!e),
      [b],
    ),
    S = K.useMemo(
      () => b(0, m, 0, `recap`, m.length != 1 || m[0].eventTypeName.length > 0),
      [b, m],
    ),
    C = K.useMemo(
      () => b(0, h, 0, `live`, h.length != 1 || h[0].eventTypeName.length > 0),
      [b, h],
    ),
    w = K.useMemo(() => x(g, `normal`, !0), [g, x]);
  return (0, q.jsxs)(`div`, {
    className: Pe,
    children: [
      (0, q.jsxs)(`div`, {
        className: t(re, l && `VnoIh0BbNTk-`, _ && `qAzXCetKhDY-`),
        ref: y,
        children: [
          S,
          C,
          w,
          o &&
            n.length == 0 &&
            (0, q.jsx)(`div`, {
              className: `mhJoiRoACzY-`,
              children: Be(
                s == 3
                  ? `#Dashboard_UpcomingEvents_Filter_DismissedNoEvents`
                  : `#Dashboard_UpcomingEvents_Filter_NoEvents`,
                (0, q.jsx)(`a`, {
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
        n.length > 0 &&
        (0, q.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!0),
          children: z(`#Dashboard_UpcomingEvents_ShowMore`),
        }),
      l &&
        n.length > 0 &&
        (0, q.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => u(!1),
          children: z(`#Dashboard_UpcomingEvents_ShowLess`),
        }),
    ],
  });
}
function vi(e) {
  let {
      date: n,
      events: r,
      eventTimeGroup: i,
      filterVisibleEventIds: a,
      dayRefsToScrollTo: o,
      fnScrollToDay: s,
      firstMonth: c,
      lastMonth: l,
      hoverEvent: u,
      setHoverEvent: d,
      showHeader: f,
    } = e,
    p = $(),
    m = K.useMemo(
      () =>
        p.getFullYear() == n.getFullYear()
          ? new Intl.DateTimeFormat(navigator.language, {
              month: `long`,
            }).format(n)
          : new Intl.DateTimeFormat(navigator.language, {
              year: `numeric`,
              month: `long`,
            }).format(n),
      [p, n],
    ),
    h = K.useMemo(() => Array.from(bt(r, (e) => W(e.startDate))).sort(Ti), [r]),
    g = K.useRef(void 0),
    _ = K.useMemo(
      () =>
        h.reduce(
          (e, [t]) =>
            e.set(t, (e) => o.set(t, { element: e, header: g.current })),
          new Map(),
        ),
      [h, o],
    ),
    v = K.useMemo(
      () =>
        h.map(([e, t]) =>
          (0, q.jsx)(
            bi,
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
    y = K.useMemo(() => r.map((e) => [e, yi(e)]), [r]),
    b = K.useMemo(() => y.reduce((e, t) => e.set(t[1], t[0]), new Map()), [y]),
    x = K.useMemo(() => y.map((e) => e[1]), [y]),
    S = K.useCallback((e, t) => Ei(b.get(e), b.get(t)), [b]),
    C = K.useCallback((e, t) => Di(b.get(e), b.get(t)), [b]);
  return (0, q.jsxs)(`div`, {
    className: oe,
    children: [
      r.length > 0 &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsxs)(`div`, {
              className: `tjsar3R67bg-`,
              children: [
                i == `normal` &&
                  (0, q.jsxs)(`div`, {
                    className: `_0KwEcSKsYOI-`,
                    children: [
                      (0, q.jsx)(Rt, { viewDate: n }),
                      (0, q.jsx)(Ht, {}),
                      (0, q.jsx)(zt, {
                        now: p,
                        viewDate: n,
                        events: x,
                        filterVisibleEventIds: a,
                        fnScrollToDay: s,
                        hoverEvent: yi(u),
                        bShowPreceedingWeeks: c,
                        bShowFollowingWeeks: l,
                        compareEvents: S,
                        colorPriority: C,
                      }),
                    ],
                  }),
                i == `live` &&
                  (0, q.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, q.jsx)(`div`, {
                      className: t(`R9qMCNp8MZc-`, `u9X-GE-Ixi4-`),
                      children: (0, q.jsx)(`div`, {
                        className: `CRh4Y0YKsSc-`,
                        children: z(`#Dashboard_UpcomingEvents_EventIsLive`),
                      }),
                    }),
                  }),
                i == `recap` &&
                  (0, q.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, q.jsx)(`div`, {
                      className: t(`R9qMCNp8MZc-`, `_91lVTBaZFYA-`),
                      children: (0, q.jsx)(`div`, {
                        className: `_0srcByIPSwg-`,
                        children: z(`#Dashboard_UpcomingEvents_EventIsRecap`),
                      }),
                    }),
                  }),
              ],
            }),
            (0, q.jsx)(`div`, { className: `_5CcFPj3DS7I-`, children: v }),
          ],
        }),
      r.length == 0 &&
        (0, q.jsx)(`div`, {
          className: `oUtOtwTHBIo-`,
          children: z(`#Dashboard_UpcomingEvents_NoEventsInMonth`, m),
        }),
    ],
  });
}
function yi(e) {
  if (!e) return;
  let t,
    n = !1;
  switch (e.eventType) {
    case `deadline`:
      (t = `#cf980c`), (n = !0);
      break;
    case `deadline-urgent`:
      (t = `#cf520c`), (n = !0);
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
function bi(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = K.useMemo(() => {
      let e = t.reduce((e, t) => {
        let n = `${t.eventType}_${t.eventTypeName}`,
          r = e.get(n) || [];
        return e.set(n, [...r, t]), e;
      }, new Map());
      for (let t of e.values()) t.sort(Ei);
      return Array.from(e).sort(([e, t], [n, r]) =>
        (t[0].eventTypeSortWeight ?? 0) == (r[0].eventTypeSortWeight ?? 0)
          ? e.localeCompare(n)
          : (t[0].eventTypeSortWeight ?? 0) - (r[0].eventTypeSortWeight ?? 0),
      );
    }, [t]),
    s = K.useMemo(
      () =>
        o.map(([e, t]) =>
          (0, q.jsx)(
            xi,
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
  return (0, q.jsx)(`div`, { ref: i, className: ae, children: s });
}
function xi(e) {
  let {
      events: t,
      showHeader: n,
      showDateInHeader: r,
      refScrollTo: i,
      setHoverEvent: a,
    } = e,
    o = K.useMemo(
      () =>
        t.map((e, t) =>
          (0, q.jsx)(
            Si,
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
  return (0, q.jsx)(`div`, { ref: i, className: x, children: o });
}
function Si(e) {
  let { event: n, showHeader: r, showDateInHeader: i, setHoverEvent: a } = e,
    o = Q();
  Ai(n);
  let s = n.eventType == `deadline`,
    c = n.eventType == `deadline-urgent`,
    l = n.eventType == `release-game`,
    u = n.eventType == `release-dlc`,
    d = n.eventType == `event`,
    f = t(
      b,
      s && `_3C1k9qRvbdA-`,
      c && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    p = t(
      A,
      s && `_3C1k9qRvbdA-`,
      c && `YuJdkBechnU-`,
      l && `gQsf3C23sME-`,
      u && `SHJ-hn37ylI-`,
      d && `dzpT-RzTvHk-`,
    ),
    m = n.getElement(),
    h = si(n),
    _ = J.Get().GetDismissState(h),
    v = K.useCallback(
      (e) => (e ? J.Get().SetDismiss(h, n.endDate) : J.Get().ClearDismiss(h)),
      [n.endDate, h],
    ),
    y = Ci(n.id);
  return (
    m &&
    (0, q.jsxs)(`div`, {
      className: t(
        `DhGBJeASLLw-`,
        c && `YuJdkBechnU-`,
        n.dimmed && `_6Nj-6kVdKm0-`,
      ),
      onPointerEnter: () => a(n),
      onPointerLeave: () => a(void 0),
      children: [
        r &&
          (0, q.jsxs)(`div`, {
            className: `RgKUFbhH4Z8-`,
            children: [
              i &&
                (0, q.jsx)(Ge, {
                  className: f,
                  toolTipContent: new Intl.DateTimeFormat(navigator.language, {
                    month: `numeric`,
                    day: `numeric`,
                    year: `2-digit`,
                  }).format(n.startDate),
                  children: i ? n.startDate.getDate() : ``,
                }),
              (0, q.jsxs)(`div`, {
                className: p,
                children: [
                  (0, q.jsx)(`span`, {
                    className: t(!i && void 0),
                    children: n.eventTypeName,
                  }),
                  n.valveOnly &&
                    (0, q.jsx)(`span`, {
                      className: `_9jEXghBXAdI-`,
                      children: `(VO)`,
                    }),
                  (0, q.jsx)(`span`, { className: `eLvHWGPkrPY-` }),
                  y &&
                    (0, q.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, q.jsx)(`a`, {
                          href: y,
                          target: `_blank`,
                          children: `isolate`,
                        }),
                        `\xA0(dev)`,
                      ],
                    }),
                  o.bShowWarnings &&
                    n.editURL &&
                    (0, q.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, q.jsx)(`a`, {
                          href: n.editURL,
                          target: `_blank`,
                          children: `edit`,
                        }),
                        `\xA0(VO)`,
                      ],
                    }),
                  !_ &&
                    (0, q.jsxs)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!0),
                      children: [
                        z(`#Dashboard_UpcomingEvents_Dismiss`),
                        (0, q.jsx)(B, {
                          tooltip: z(`#Dashboard_UpcomingEvents_Dismiss_ttip`),
                        }),
                      ],
                    }),
                  _ &&
                    (0, q.jsx)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => v(!1),
                      children: z(`#Dashboard_UpcomingEvents_Undismiss`),
                    }),
                ],
              }),
            ],
          }),
        (0, q.jsxs)(`div`, {
          className: t(`_4Qsmx4g89QU-`, `QH6w-cg8K-I-`),
          children: [
            (0, q.jsx)(`div`, {
              className: t(`_1TsAMPF7hS0-`, n.loading && `Y0fsODLAA9E-`),
              children: (0, q.jsx)(ot, { size: `small` }),
            }),
            (0, q.jsx)(`div`, {
              className: `dKTIVgFsruk-`,
              children: (0, q.jsx)(g, { children: m }),
            }),
          ],
        }),
      ],
    })
  );
}
function Ci(e) {
  return null;
}
function wi(e) {
  let { text: t, events: n, expanded: r, setExpanded: i } = e,
    a = n
      .slice(0, 4)
      .map((e) => ({ event: e, element: e.getCapsuleElement?.() }));
  return (0, q.jsxs)(`div`, {
    className: se,
    children: [
      !r &&
        (0, q.jsx)(`div`, {
          className: `rb79huJ8qFw-`,
          children: (0, q.jsx)(`button`, {
            className: `_8pE5hC3-T3Y-`,
            onClick: () => i(!0),
            children: t,
          }),
        }),
      (0, q.jsx)(`div`, {
        className: ue,
        children: a.map((e) =>
          (0, q.jsx)(
            g,
            {
              children: (0, q.jsx)(`div`, {
                className: Me,
                children:
                  e.element ||
                  (0, q.jsx)(`div`, {
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
function Ti(e, t) {
  return e[0] - t[0];
}
function Ei(e, t) {
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
function Di(e, t) {
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
function Oi(e) {
  let t = Math.min(...e.keys()),
    n = Math.max(...e.keys()),
    r = new Date(t);
  for (r.setMonth(r.getMonth() + 1); r.getTime() < n; )
    e.has(r.getTime()) || e.set(r.getTime(), []),
      (r = new Date(r)),
      r.setMonth(r.getMonth() + 1);
  return e;
}
function ki(e, t) {
  let n = K.useRef(void 0),
    r = K.useCallback(
      (r) => {
        e ? r.scrollIntoView() : (t(!0), (n.current = r));
      },
      [e, t],
    );
  return (
    K.useEffect(() => {
      e && n.current && (n.current.scrollIntoView(), (n.current = void 0));
    }, [e]),
    r
  );
}
function Ai(e) {
  let t = d();
  K.useEffect(() => {
    let n = e.registerForChange?.(() => t());
    return () => n?.Unregister();
  }, [e, t]);
}
function ji(e, t, n, r) {
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
function Mi(e, t) {
  return K.useMemo(() => {
    let n = new Set(t.map((e) => e.id));
    return new Set(e.filter((e) => n.has(e.id)).map((e) => e.id));
  }, [e, t]);
}
var Ni = `g31b3nBKzAo-`,
  Pi = `XwuHu386DZc-`,
  Fi = `IhE0In-8-D8-`,
  Ii = `s-F6pJ3AneU-`,
  Li = `_1gJzmUa0F58-`,
  Ri = `EobOPLhq6ME-`,
  zi = `qTOvIUzXQXA-`,
  Bi = `zN1ZNI7AxHc-`;
function Vi(e) {
  return (0, q.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 60 39`,
    fill: `none`,
    ...e,
    children: [
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M20.2544 28.0733H21.8805C22.6505 28.0733 23.3893 27.7674 23.9338 27.2226C24.4782 26.6782 24.7841 25.9397 24.7841 25.1697V22.5369C24.7841 21.9376 24.5491 21.3626 24.1288 20.9351C23.7088 20.5079 23.1379 20.2628 22.5386 20.2527H20.2544V28.0733Z`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M53.0371 23.7372C53.0371 24.5497 52.3783 25.2085 51.5658 25.2085C50.7535 25.2085 50.0947 24.5497 50.0947 23.7372C50.0947 22.9246 50.7535 22.2661 51.5658 22.2661C52.3783 22.2661 53.0371 22.9246 53.0371 23.7372Z`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M13.7505 13.4774V16.0812C13.7635 16.6785 14.0095 17.2472 14.4364 17.665C14.8637 18.0831 15.4374 18.3169 16.0348 18.3169H18.319V10.4963H16.6835C15.8946 10.4881 15.1365 10.8012 14.5832 11.3636C14.0303 11.9257 13.7297 12.6889 13.7505 13.4774Z`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M32.421 17.4362C32.421 17.1362 32.4985 16.8265 32.5467 16.5263C32.5952 16.2263 32.6242 16.168 32.6724 15.9938C32.721 15.8196 32.7887 15.4613 32.8659 15.1904C32.9434 14.9194 32.9821 14.8227 33.0401 14.6387C33.0981 14.4547 33.2046 14.1355 33.3013 13.8935C33.398 13.6516 33.4563 13.5259 33.5335 13.3419C33.611 13.1579 33.7367 12.8771 33.853 12.6449C33.9693 12.4127 34.0464 12.2867 34.1435 12.1125C34.2402 11.9382 34.3952 11.6673 34.521 11.4543C34.6467 11.2413 34.7437 11.1058 34.8596 10.9413C34.9759 10.7769 35.1501 10.5251 35.2951 10.3317L35.6921 9.83797L35.9243 9.54747L35.9249 9.5481C33.7871 5.89204 30.5051 3.0416 26.5855 1.43715C22.666 -0.167213 18.327 -0.436528 14.2392 0.670589C10.1512 1.77802 6.54175 4.20066 3.96828 7.56433C1.39449 10.9277 0 15.0453 0 19.2807C0 23.5159 1.39449 27.6328 3.96828 30.9962C6.54175 34.3599 10.1512 36.7824 14.2392 37.89C18.327 38.9974 22.6656 38.7281 26.5855 37.1234C30.505 35.519 33.7871 32.6687 35.9249 29.0124L35.6927 28.722L35.3055 28.2282C35.1505 28.025 35.0055 27.8218 34.8603 27.6088L34.5216 27.0959C34.3861 26.8829 34.2604 26.6605 34.1344 26.4377C34.0086 26.2149 33.9409 26.0892 33.8536 25.9052C33.7667 25.7212 33.6309 25.4405 33.5341 25.1985C33.4374 24.9566 33.3697 24.8403 33.3019 24.6566C33.2342 24.4726 33.1277 24.1629 33.0407 23.9115C32.9538 23.6597 32.915 23.5532 32.8665 23.3598C32.818 23.1663 32.731 22.8273 32.6731 22.5564C32.6151 22.2854 32.5861 22.2079 32.5568 22.0239C32.5278 21.8399 32.4601 21.4237 32.4213 21.114C32.4213 20.959 32.4213 20.814 32.3633 20.659C32.3633 20.2041 32.2956 19.6911 32.2956 19.2749C32.2956 18.8587 32.2956 18.307 32.3633 17.8908C32.3728 17.7462 32.4018 17.5912 32.421 17.4362ZM22.5388 18.3171C23.6573 18.3196 24.7292 18.7651 25.52 19.5559C26.3108 20.3468 26.7563 21.4186 26.7588 22.5371V25.0924C26.7588 26.3759 26.2491 27.6069 25.3414 28.5143C24.434 29.4221 23.2029 29.9318 21.9194 29.9318H20.2545V32.2161C20.2545 32.7507 19.8213 33.1839 19.2866 33.1839C18.7523 33.1839 18.3187 32.7507 18.3187 32.2161V30.0093H16.0345C14.9154 30.0093 13.8419 29.5648 13.0505 28.7733C12.2593 27.9819 11.8145 26.9084 11.8145 25.7893C11.8145 25.2547 12.248 24.8214 12.7824 24.8214C13.317 24.8214 13.7503 25.2547 13.7503 25.7893C13.7503 26.3952 13.991 26.9762 14.4195 27.4043C14.8477 27.8328 15.429 28.0735 16.0345 28.0735H18.3187V20.2529H16.0345C14.9154 20.2529 13.8419 19.8083 13.0505 19.0169C12.2593 18.2254 11.8145 17.152 11.8145 16.0329V13.4776C11.8145 12.194 12.3246 10.963 13.2319 10.0556C14.1397 9.14792 15.3707 8.63816 16.6539 8.63816H18.2898V6.27642C18.2898 5.74206 18.723 5.30853 19.2576 5.30853C19.7923 5.30853 20.2255 5.74206 20.2255 6.27642V8.56065H22.5098C23.6283 8.56317 24.7001 9.00868 25.491 9.79948C26.2818 10.5903 26.7273 11.6622 26.7298 12.7807C26.7298 13.3153 26.2966 13.7486 25.7619 13.7486C25.2272 13.7486 24.794 13.3153 24.794 12.7807C24.794 12.1748 24.5533 11.5938 24.1248 11.1657C23.6966 10.7372 23.1156 10.4964 22.5098 10.4964H20.2545V18.3171H22.5388Z`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M44.1421 14.8326C44.1421 15.6451 43.4836 16.3036 42.6711 16.3036C41.8585 16.3036 41.1997 15.6451 41.1997 14.8326C41.1997 14.02 41.8585 13.3612 42.6711 13.3612C43.4836 13.3612 44.1421 14.02 44.1421 14.8326Z`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M47.1135 32.1772C51.1064 32.1754 54.873 30.3237 57.3127 27.1629C59.7526 24.0024 60.5903 19.8898 59.5812 16.0265C58.572 12.1634 55.8299 8.98595 52.1562 7.42192C48.4822 5.8582 44.2911 6.08509 40.8077 8.0363C37.324 9.98725 34.9411 13.4422 34.3547 17.3918C33.7684 21.3415 35.0453 25.3397 37.8119 28.2185C40.2456 30.7473 43.6039 32.1764 47.1134 32.177L47.1135 32.1772ZM51.5657 27.1538C50.6624 27.1538 49.7957 26.7949 49.1567 26.156C48.5177 25.517 48.1589 24.6506 48.1589 23.747C48.1589 22.8434 48.5178 21.9769 49.1567 21.338C49.7957 20.699 50.6624 20.3398 51.5657 20.3398C52.4693 20.3398 53.3361 20.699 53.975 21.338C54.614 21.9769 54.9729 22.8434 54.9729 23.747C54.9678 24.6481 54.6067 25.5107 53.9688 26.1469C53.3307 26.7833 52.4671 27.1419 51.5657 27.1444V27.1538ZM42.6708 11.4255C43.5744 11.4255 44.4408 11.7847 45.0798 12.4237C45.7187 13.0623 46.0776 13.9291 46.0776 14.8327C46.0776 15.7363 45.7187 16.6027 45.0798 17.2417C44.4408 17.8806 43.5744 18.2395 42.6708 18.2395C41.7672 18.2395 40.9004 17.8806 40.2618 17.2417C39.6228 16.6027 39.2636 15.7363 39.2636 14.8327C39.2661 13.9297 39.626 13.0648 40.2643 12.4262C40.9029 11.7878 41.7678 11.428 42.6708 11.4255ZM39.5443 25.489L53.3271 11.7159C53.7112 11.387 54.2836 11.409 54.6413 11.7666C54.9989 12.1242 55.0209 12.6967 54.692 13.0805L40.9189 26.8536C40.5351 27.1825 39.9627 27.1605 39.605 26.8028C39.2474 26.4452 39.2254 25.8728 39.5543 25.489H39.5443Z`,
      }),
    ],
  });
}
function Hi(e) {
  return (0, q.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 55 37`,
    fill: `none`,
    ...e,
    children: (0, q.jsx)(`path`, {
      fill: `currentColor`,
      d: `M33.6009 7.90708H50.8782C52.0142 7.90708 53.0449 8.3717 53.791 9.12055C54.5374 9.86976 55 10.9044 55 12.0447V25.672C55 27.9496 53.1458 29.8097 50.8783 29.8097H48.12C47.3373 31.81 45.8447 33.5566 43.8136 34.8285C41.6511 36.1828 38.8737 37 35.704 37C34.988 37 34.4074 36.4171 34.4074 35.6983C34.4074 35.1888 34.699 34.7479 35.1234 34.534C36.2956 33.8138 36.9901 33.0738 37.3857 32.1952C37.6859 31.5282 37.8413 30.7449 37.9168 29.8096H25.5205C23.2519 29.8096 21.3991 27.9482 21.3991 25.6719V21.9028H17.0836C17.1592 22.8378 17.3146 23.6212 17.6148 24.2881C18.0105 25.167 18.7048 25.9068 19.8768 26.6272C20.3014 26.8411 20.5928 27.2819 20.5928 27.7913C20.5928 28.5101 20.0122 29.093 19.2961 29.093C16.1265 29.093 13.3488 28.2756 11.1865 26.9217C9.15546 25.6497 7.66267 23.9032 6.88002 21.9029H4.12174C1.854 21.9029 0 20.0436 0 17.7653V4.13753C0 1.86138 1.85313 0 4.12174 0H29.4796C31.7473 0 33.6011 1.85943 33.6011 4.13753L33.6009 7.90708ZM23.9921 21.9028V25.6719C23.9921 26.5196 24.676 27.2063 25.5202 27.2063C30.1078 27.2063 34.7063 27.2113 39.2871 27.2113C40.0005 27.2225 40.5695 27.8123 40.5584 28.5282C40.5267 30.4189 40.346 31.9294 39.7456 33.2629C39.6428 33.4912 39.529 33.7121 39.4031 33.9267C40.5378 33.6214 41.5597 33.1767 42.4457 32.6218C44.2148 31.5141 45.4374 29.9682 45.9188 28.231C46.0452 27.6452 46.5644 27.2064 47.1859 27.2064H50.8781C51.7206 27.2064 52.4066 26.5198 52.4066 25.6721V12.0448C52.4066 11.623 52.2346 11.2396 51.9574 10.9613C51.6804 10.6832 51.2983 10.5106 50.8781 10.5106H33.6009V17.7653C33.6009 18.9021 33.138 19.9352 32.3921 20.6842L32.387 20.6892C31.6407 21.4382 30.6117 21.9027 29.4793 21.9027H23.992L23.9921 21.9028ZM9.08081 20.3238C9.56237 22.061 10.7848 23.607 12.5541 24.7148C13.4403 25.2696 14.4621 25.7144 15.5971 26.0197C15.4712 25.8051 15.3572 25.584 15.2544 25.3557C14.654 24.0223 14.473 22.5121 14.4412 20.6215C14.4301 19.9054 14.9992 19.3156 15.7125 19.3046C18.0317 19.3046 20.3694 19.2996 22.6953 19.2996H29.479C29.9011 19.2996 30.284 19.128 30.5608 18.8512C30.8365 18.5733 31.0074 18.1891 31.0074 17.7654V4.13759C31.0074 3.29058 30.3211 2.60342 29.4792 2.60342H4.12137C3.27726 2.60342 2.59295 3.29187 2.59295 4.13759V17.7654C2.59295 18.6124 3.27947 19.2995 4.12137 19.2995H7.81361C8.43495 19.2995 8.95412 19.7383 9.08072 20.3239L9.08081 20.3238Z`,
    }),
  });
}
function Ui(e) {
  return (0, q.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 42 35`,
    fill: `none`,
    ...e,
    children: (0, q.jsx)(`path`, {
      fill: `currentColor`,
      d: `M2.86369 0C1.57321 0 0.471511 0.88952 0.119285 2.09452L20.185 19.8661C20.6574 20.2845 21.3421 20.2845 21.8145 19.8661L41.8802 2.09452C41.528 0.88952 40.4264 0 39.136 0H2.86369ZM0 4.5631V30.4371L14.6054 17.5003L0 4.5631ZM42 4.5631L27.3946 17.4999L42 30.4367V4.5631ZM16.0615 18.7892L0.119413 32.9055C0.471605 34.1103 1.57316 35 2.86382 35H39.1363C40.4268 35 41.5284 34.1105 41.8807 32.9055L25.9386 18.7892L23.0675 21.3318C21.8876 22.3767 20.1122 22.3767 18.9324 21.3318L16.0615 18.7892Z`,
    }),
  });
}
function Wi(e) {
  let t = n(`rgDailyDealInvitations`, `application_config`);
  if (!e && (!t || t.length == 0)) return [];
  let r = [],
    i = t.some(
      (e) => new Date().getTime() / 1e3 >= e.rtexpiretime - 14 * R.PerDay,
    );
  return (
    r.push({
      id: `dailydeal`,
      title: z(`#Dashboard_ImportantActions_DailyDeals_Title`),
      image: (0, q.jsx)(Vi, {}),
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
function Gi(e) {
  let t = n(`publisherid`, `application_config`),
    r = n(`rgImportantActionData`, `application_config`);
  if (!e && !r) return [];
  let i = [];
  if (
    ((e || !r.bHasCommunicationRightUser) &&
      i.push({
        id: `communicationrights`,
        title: z(`#Dashboard_ImportantActions_CommRights_Title`),
        image: (0, q.jsx)(Hi, {}),
        description: z(`#Dashboard_ImportantActions_CommRights_Desc`),
        details: z(`#Dashboard_ImportantActions_CommRights_Details`),
        actionDescription: z(`#Dashboard_ImportantActions_CommRights_Action`),
        action: `${s.PARTNER_BASE_URL}doc/gettingstarted/managing_users/communication`,
      }),
    (e || r.bRemindAddMailingAddress) &&
      i.push({
        id: `mailingaddr`,
        title: z(`#Dashboard_ImportantActions_MailingAddr_Title`),
        image: (0, q.jsx)(Ui, {}),
        description: z(`#Dashboard_ImportantActions_MailingAddr_Desc`),
        details: z(`#Dashboard_ImportantActions_MailingAddr_Details`),
        actionDescription: z(`#Dashboard_ImportantActions_MailingAddr_Action`),
        action: `${s.PARTNER_BASE_URL}pub/mailingaddresses/${t}`,
      }),
    (e || r.bRemindAddPhoneNumber) &&
      i.push({
        id: `phonenumber`,
        title: z(`#Dashboard_ImportantActions_PhoneNumber_Title`),
        image: (0, q.jsx)(Hi, {}),
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
            ? new Date().getTime() / 1e3 + R.PerDay * 7
            : 0,
      n = new Date(t * 1e3).toLocaleDateString(Re.GetPreferredLocales(), {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
      });
    i.push({
      id: `bankingexpiration`,
      title: z(`#Dashboard_ImportantActions_BankingExpiring_Title`),
      image: (0, q.jsx)(Vi, {}),
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
function Ki(e) {
  let t = Wi(e),
    n = Gi(e);
  return K.useMemo(() => {
    let e = t.concat(n);
    return (
      e.sort((e, t) => {
        let n = qi(e.priority),
          r = qi(t.priority);
        return n === r ? 0 : r - n;
      }),
      e
    );
  }, [t, n]);
}
function qi(e) {
  switch (e) {
    case 1:
      return 1;
    default:
      return 0;
  }
}
function Ji(e) {
  let [t] = at(`testactions`, !1),
    n = Ki(t);
  return n.length == 0
    ? null
    : (0, q.jsx)(vt, {
        title: z(`#Dashboard_ImportantActions_Title`),
        count: n.length,
        children: (0, q.jsx)(`div`, {
          className: Ni,
          children: n.map((e) => (0, q.jsx)(Yi, { ...e }, e.id)),
        }),
      });
}
function Yi(e) {
  let {
    title: n,
    image: r,
    description: i,
    details: a,
    priority: o,
    actionDescription: s,
    action: c,
  } = e;
  return (0, q.jsxs)(`div`, {
    className: t(Pi, o == 1 && `YTdkEl1dRZY-`),
    children: [
      (0, q.jsxs)(`div`, {
        className: Fi,
        children: [
          (0, q.jsx)(`div`, { className: Ii, children: r }),
          (0, q.jsxs)(`div`, {
            className: Li,
            children: [
              (0, q.jsx)(`div`, { className: Ri, children: n }),
              (0, q.jsxs)(`div`, {
                className: zi,
                children: [i, a && (0, q.jsx)(B, { tooltip: a })],
              }),
            ],
          }),
        ],
      }),
      (0, q.jsx)(`button`, {
        className: t(Bi),
        onClick: () => {
          typeof c == `function` && c(), window.open(c, `_blank`);
        },
        children: s,
      }),
    ],
  });
}
function Xi(e) {
  let t = Xe(),
    r = n(`bShowWarnings`, `application_config`),
    i = n(`bTestData`, `application_config`),
    a = n(`bPartnerOnboarding`, `application_config`);
  return Zi(t)
    ? null
    : a
      ? (0, q.jsx)(yt, {
          children: (0, q.jsx)(gi, {
            partnerId: t,
            showWarnings: r,
            testData: i,
          }),
        })
      : (0, q.jsxs)(yt, {
          children: [
            (0, q.jsx)(Ji, {}),
            (0, q.jsx)(_t, {}),
            (0, q.jsx)(li, { partnerId: t, showWarnings: r, testData: i }),
          ],
        });
}
function Zi(e) {
  let [t, n] = K.useState(!0);
  return (
    K.useEffect(() => {
      Ze.Init(),
        j.Get(),
        (async () => {
          await J.Get().Init(l.accountid, Number.isNaN(e) ? 0 : e), n(!1);
        })();
    }, [e]),
    t
  );
}
export { Xi as default };
