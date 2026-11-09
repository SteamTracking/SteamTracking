/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./broadcastplayer2.js",
      "./broadcastplayer.js",
      "./mobx.esm.js",
      "./src.js",
      "./dialogs.js",
      "./react-router.js",
      "../../../css/applications/appmgmt/dialogs.css",
      "./reactqueryroot.js",
      "./utils.js",
      "./useQuery.js",
      "./mutation.js",
      "./eventimageurlwithfallback.js",
      "./storebrowsequerycontext.js",
      "./servicetransportprovider.js",
      "./dataloader.js",
      "./saletags.js",
      "./usedataloader.client.js",
      "./storenaveventcontext.js",
      "./useMutation.js",
      "./steammessages_store_pb.js",
      "./cookies.client.js",
      "./storeitem.js",
      "./steammessages_clan_pb.js",
      "./appidutils.js",
      "./csstransitionwrapper.js",
      "./getpreferredlocales.js",
      "./modals.js",
      "./deckverified.js",
      "./axios.js",
      "./axiosutils.js",
      "./historyutils.js",
      "./throbber.js",
      "../../../css/applications/appmgmt/throbber.css",
      "./stringutils.js",
      "../../../css/applications/appmgmt/deckverified.css",
      "./ajaxhooks.js",
      "./currencyutils.js",
      "./localization2.js",
      "./partnereventshared.module.js",
      "../../../css/applications/appmgmt/partnereventshared.css",
      "./steamid.js",
      "./personautils.js",
      "./loadingspinner.js",
      "../../../css/applications/appmgmt/loadingspinner.css",
      "../../../css/applications/appmgmt/saletags.css",
      "./salestoreitemutils.js",
      "../../../css/applications/appmgmt/salestoreitemutils.css",
      "./partnereventutils.js",
      "./uploadutils.js",
      "./steammessages_community_pb.js",
      "./eventtime.js",
      "../../../css/applications/appmgmt/eventimageurlwithfallback.css",
      "./assertThisInitialized.js",
      "./partnereventstore.js",
      "./appinfo.js",
      "./debugglobal.js",
      "./numberformats.js",
      "./dashplayer.js",
      "./browserapi.js",
      "./base64-js.js",
      "./storeitemcache.js",
      "./linkregionbox.js",
      "../../../css/applications/appmgmt/linkregionbox.css",
      "./crosspromotesalelayouts.js",
      "./creatorhomestore.js",
      "../../../css/applications/appmgmt/crosspromotesalelayouts.css",
      "./vodquery.js",
      "./canvas.js",
      "../../../css/applications/appmgmt/broadcastplayer.css",
    ]),
) => i.map((i) => d[i]);

import {
  $t as e,
  A as t,
  Gt as n,
  Ht as r,
  J as i,
  Jt as a,
  K as o,
  Kt as s,
  N as c,
  Q as l,
  S as u,
  T as d,
  U as f,
  Ut as p,
  Wt as m,
  Xt as h,
  Y as g,
  Yt as _,
  _t as v,
  b as y,
  ct as b,
  dt as x,
  ft as S,
  gt as C,
  i as w,
  kt as T,
  nt as E,
  on as D,
  qt as O,
  rn as k,
  x as ee,
  yt as A,
} from "./mobx.esm.js";
import {
  It as te,
  R as j,
  Wt as ne,
  l as re,
  r as ie,
  t as ae,
  u as oe,
} from "./src.js";
import {
  $i as M,
  Bt as se,
  Ga as ce,
  Hr as le,
  Ht as ue,
  In as de,
  It as N,
  Ji as fe,
  Na as pe,
  Pn as me,
  Qt as he,
  Rt as ge,
  Sa as _e,
  Ta as ve,
  Va as ye,
  Vi as be,
  Vt as P,
  Wn as xe,
  Xt as Se,
  Ya as Ce,
  Yn as we,
  Zt as Te,
  aa as Ee,
  c as De,
  da as Oe,
  ea as ke,
  fa as Ae,
  fn as je,
  gr as Me,
  in as Ne,
  jt as Pe,
  l as Fe,
  mn as Ie,
  nn as F,
  oa as I,
  p as Le,
  pn as Re,
  qa as ze,
  s as Be,
  sn as Ve,
  sr as He,
  ta as Ue,
  u as We,
  x as Ge,
} from "./dialogs.js";
import { h as Ke } from "./storebrowsequerycontext.js";
import { W as qe, Yn as Je, q as Ye } from "./saletags.js";
import { C as Xe, k as Ze, w as L } from "./react-router.js";
import { r as Qe } from "./servicetransportprovider.js";
import { i as R } from "./utils.js";
import { t as z } from "./useQuery.js";
import { t as B } from "./useMutation.js";
import { p as $e } from "./eventimageurlwithfallback.js";
import { i as et, r as tt } from "./appidutils.js";
import { c as nt, o as rt } from "./partnereventstore.js";
import { t as it } from "./getpreferredlocales.js";
import { t as at } from "./formatnumber.js";
import { t as ot } from "./src2.js";
import { n as st } from "./textlink.js";
import { r as V } from "./modals.js";
import { t as ct } from "./axios.js";
import { t as lt } from "./axiosutils.js";
import { t as H } from "./throbber.js";
import { n as ut } from "./eventdevfeaturestore.js";
import { n as dt } from "./eventtime.js";
import { t as ft } from "./moment-timezone.js";
import { c as pt } from "./partnereventshared.module.js";
import { g as U } from "./emoticonbutton.js";
import { D as mt, O as ht } from "./partnereventutils.js";
import "./steamid.js";
import {
  _ as gt,
  a as _t,
  c as vt,
  f as yt,
  l as bt,
  m as xt,
  s as St,
  v as Ct,
} from "./bbcodeeditor.js";
import { i as wt, l as Tt } from "./partnereventdialog.module.js";
import { t as Et } from "./meetsteamclanid.js";
import { r as Dt, t as Ot } from "./browserapi.js";
import { n as kt, t as At } from "./simplesuccesserror.js";
import { n as jt } from "./storeitemcache.js";
import {
  n as Mt,
  t as Nt,
} from "./steammessages_experiments_pb.js"; /* empty css                                  */
import "./steammessages_player_pb.js";
import { r as Pt } from "./genericimageupload.js";
import { n as Ft, t as W } from "./importexport.js";
import {
  a as It,
  c as Lt,
  i as Rt,
  l as zt,
  n as Bt,
  o as Vt,
  s as Ht,
  t as Ut,
  u as Wt,
} from "./meetsteamregistrationhooks.js";
import { n as Gt } from "./vodquery.js";
var G = D(h(), 1),
  K = D(T(), 1),
  q = v(),
  Kt = D(te(), 1),
  J = k({
    ActiveEvent: () => Xt,
    ActiveEventCallOut: () => Zt,
    At: () => Yt,
    DateAndTime: () => qt,
    DateAndTimeInline: () => Jt,
    DateToolTip: () => $t,
    RightSideTitles: () => Qt,
    ShortDateAndTime: () => en,
    ShortDateRange: () => tn,
    default: () => nn,
  }),
  qt = `pWmENeJ0-44-`,
  Jt = `FyNXXMXFmw0-`,
  Yt = `_9CQfpCiPrSo-`,
  Xt = `_2XvsAfXG3pE-`,
  Zt = `NXUU0ns18S4-`,
  Qt = `Z-QZHH73ytw-`,
  $t = `OxCNfwcporA-`,
  en = `wTXCXrhlyX8-`,
  tn = `AKCBA7goWOo-`,
  nn = {
    DateAndTime: qt,
    DateAndTimeInline: Jt,
    At: Yt,
    ActiveEvent: Xt,
    ActiveEventCallOut: Zt,
    RightSideTitles: Qt,
    DateToolTip: $t,
    ShortDateAndTime: en,
    ShortDateRange: tn,
  },
  rn = K.createContext(void 0);
function Y() {
  return K.useContext(rn) ?? dt();
}
var X = D(ft());
function an(e, t) {
  let n = t ?? X.default.tz.guess(),
    r = X.default.unix(e).tz(n),
    i = Ue();
  return i && r.locale(i), r.format(`LT`);
}
function on(e, t, n) {
  let r = n ?? X.default.tz.guess(),
    i = X.default.unix(e).tz(r),
    a = Ue();
  return (
    a && i.locale(a),
    (0, q.jsxs)(K.Fragment, {
      children: [
        i.format(`LT`),
        t
          ? (0, q.jsx)(je, {
              toolTipContent: i.format(`Z`) + `, ` + r,
              children: (0, q.jsxs)(`span`, {
                children: [`\xA0`, i.zoneAbbr()],
              }),
            })
          : null,
      ],
    })
  );
}
function sn(e, t, n) {
  return _e(e, { weekday: `short`, year: n ? void 0 : `numeric`, timeZone: t });
}
function cn(e, t, n, r) {
  return (
    (n ||= X.default.tz.guess()),
    X.default.unix(e).tz(n).isSame(X.default.unix(t).tz(n), r)
  );
}
var Z = Xe((e) => {
    let { dateAndTime: t, bSingleLine: n, bOnlyTime: r, bOnlyDate: i } = e,
      a = nt(),
      o = !r && !!t,
      s = !i && !!t,
      c = o && sn(t, a),
      l = e.stylesmodule ? { ...J, ...e.stylesmodule } : J;
    return n
      ? (0, q.jsxs)(`span`, {
          className: r || i ? l.DateAndTimeInline : l.DateAndTime,
          children: [
            o && c,
            o && s ? (0, q.jsx)(`span`, { children: `\xA0` }) : void 0,
            !!(t && s) && on(t, s, a),
          ],
        })
      : (0, q.jsxs)(`div`, {
          className: l.DateAndTime,
          children: [
            o &&
              (0, q.jsxs)(q.Fragment, {
                children: [
                  (0, q.jsx)(`div`, {
                    className: l.LocalizedDate,
                    children: c,
                  }),
                  ` `,
                  (0, q.jsx)(`span`, {
                    className: l.At,
                    children: I(`#EventDisplay_DateAndTimeCombiner`),
                  }),
                ],
              }),
            (0, q.jsx)(`div`, {
              className: l.LocalizedTime,
              children: !!(t && s) && on(t, s, a),
            }),
          ],
        });
  }),
  ln = (e) => {
    let t = (0, q.jsx)(`div`, {
      className: e.stylesmodule?.DateToolTip,
      children: (0, q.jsx)(Z, {
        dateAndTime: e.rtFullDate,
        bSingleLine: !0,
        stylesmodule: e.stylesmodule,
      }),
    });
    return (0, q.jsx)(Ie, {
      toolTipContent: t,
      direction: `top`,
      className: e.className,
      bTopmost: !0,
      children: e.children,
    });
  },
  un = Xe((e) => {
    let { startDateAndTime: n, endDateAndTime: r = 0 } = e,
      i = e.stylesmodule ? { ...J, ...e.stylesmodule } : J,
      a = nt(),
      o = Y(),
      s = e.bHideEndTime || e.endDateAndTime == null || e.endDateAndTime < 1;
    if (n == null || n == 0)
      return (0, q.jsxs)(`div`, {
        className: i.DateAndTime,
        children: [
          (0, q.jsx)(`span`, {
            className: i.RightSideTitles,
            children: I(`#EventDisplay_TimeRange`),
          }),
          I(`#EventDisplay_TimeDisplayNone`),
        ],
      });
    if (s)
      return (0, q.jsxs)(`div`, {
        className: i.StartDate,
        children: [
          (0, q.jsxs)(`div`, {
            className: i.RightSideTitles,
            children: [
              I(
                n < o
                  ? `#EventDisplay_TimeInPast`
                  : `#EventDisplay_TimeUpcoming`,
              ),
              `\xA0`,
            ],
          }),
          (0, q.jsx)(Z, { stylesmodule: i, dateAndTime: n }),
        ],
      });
    let c = n <= o && o <= r,
      l = cn(n, r, a, `day`);
    return (0, q.jsxs)(`div`, {
      className: i.MultiDateAndTime,
      children: [
        (0, q.jsxs)(`div`, {
          className: i.StartDate,
          children: [
            (0, q.jsx)(`span`, {
              className: i.RightSideTitles,
              children: I(
                n >= o
                  ? `#EventDisplay_TimeBeginsOn`
                  : r >= o
                    ? `#EventDisplay_TimeBeginsOn_Past`
                    : `#EventDisplay_TimeBeginsOn_StartAndEnd_Past`,
              ),
            }),
            (0, q.jsx)(Z, { stylesmodule: i, bSingleLine: !0, dateAndTime: n }),
          ],
        }),
        (0, q.jsxs)(`div`, {
          className: i.EndDate,
          children: [
            (0, q.jsx)(`span`, {
              className: i.RightSideTitles,
              children: I(
                r < o
                  ? `#EventDisplay_TimeEndsOn_Past`
                  : `#EventDisplay_TimeEndsOn`,
              ),
            }),
            (0, q.jsx)(Z, {
              stylesmodule: i,
              bSingleLine: !0,
              bOnlyTime: l,
              dateAndTime: r,
            }),
          ],
        }),
        c &&
          (0, q.jsx)(`span`, {
            className: i.ActiveEvent,
            children: (0, q.jsx)(`span`, {
              className: t(i.RightSideTitles, i.ActiveEventCallOut),
              children: I(`#Time_Now`),
            }),
          }),
      ],
    });
  }),
  dn = Xe((e) => {
    let { startDateAndTime: t, endDateAndTime: n, bHideEndTime: r } = e,
      i = e.stylesmodule ? { ...J, ...e.stylesmodule } : J,
      a = nt(),
      o = Y();
    if (t == null || t == 0)
      return (0, q.jsxs)(`div`, {
        className: i.DateAndTime,
        children: [
          (0, q.jsx)(`span`, {
            className: i.RightSideTitles,
            children: I(`#EventDisplay_TimeRange`),
          }),
          I(`#EventDisplay_TimeDisplayNone`),
        ],
      });
    let s = cn(t, o, a, `year`),
      c = (0, q.jsx)(`div`, {
        className: i.ShortDateAndTime,
        children: sn(t, a, s),
      }),
      l = (0, q.jsxs)(ln, {
        rtFullDate: t,
        stylesmodule: i,
        children: [
          (0, q.jsx)(`div`, {
            className: i.RightSideTitles,
            children: I(
              t < o ? `#EventDisplay_TimeInPast` : `#EventDisplay_TimeUpcoming`,
            ),
          }),
          c,
        ],
      });
    if (
      (o < t &&
        t < o + Ce.PerWeek &&
        (l = (0, q.jsx)(ln, {
          rtFullDate: t,
          stylesmodule: i,
          children: (0, q.jsx)(`div`, {
            className: i.RightSideTitles,
            children: Ae(
              `#EventDisplay_EventUpcoming_WithDateAndTime`,
              c,
              (0, q.jsxs)(`div`, {
                className: i.ShortDateAndTime,
                children: [on(t, !1, a), ` `],
              }),
            ),
          }),
        })),
      r || n == null || n < 1)
    )
      return l;
    let u = t <= o && o <= n;
    u &&
      (l = (0, q.jsx)(ln, {
        rtFullDate: t,
        className: i.ActiveEvent,
        stylesmodule: i,
        children: (0, q.jsx)(`span`, {
          className: i.ActiveEventCallOut,
          children: I(`#Time_Now`),
        }),
      }));
    let d = null,
      f = u ? n - o : n - t;
    if (f <= Ce.PerDay) {
      let e = (0, q.jsx)(`div`, {
        className: i.ShortDateAndTime,
        children: pe(f, !0),
      });
      d =
        n < o
          ? (0, q.jsxs)(`div`, {
              className: i.RightSideTitles,
              children: [I(`#EventDisplay_TimeEndsOn_Ran`), e],
            })
          : (0, q.jsx)(`div`, {
              className: i.RightSideTitles,
              children: Ae(
                u ? `#EventDisplay_TimeLeft` : `#EventDisplay_RunsForDuration`,
                e,
              ),
            });
    } else {
      let e = cn(n, o, a, `year`);
      d = (0, q.jsxs)(K.Fragment, {
        children: [
          (0, q.jsx)(`div`, {
            className: i.RightSideTitles,
            children: I(
              n < o
                ? `#EventDisplay_TimeEndsOn_Past`
                : `#EventDisplay_TimeEndsOn`,
            ),
          }),
          (0, q.jsx)(`div`, {
            className: i.ShortDateAndTime,
            children: sn(n, a, e),
          }),
        ],
      });
    }
    let p = (0, q.jsx)(ln, { rtFullDate: n, stylesmodule: i, children: d });
    return (0, q.jsxs)(`div`, {
      className: i.ShortDateRange,
      children: [l, p],
    });
  });
function fn(e, t, n) {
  let r = ut.GetTimeNowWithOverrideAsDate(),
    i = new Date(e * 1e3),
    a = new Date(t * 1e3),
    o = r.getFullYear() == i.getFullYear(),
    s = r.getFullYear() == a.getFullYear(),
    c = i.getFullYear() == a.getFullYear(),
    l = c && i.getMonth() == a.getMonth(),
    u = l && i.getDate() == a.getDate(),
    d = { day: `numeric`, month: n ?? `long`, year: o ? void 0 : `numeric` },
    f = i.toLocaleDateString(Ee.GetPreferredLocales(), d);
  if (u) return f;
  {
    let e = {
        day: `numeric`,
        month: l && s ? void 0 : (n ?? `long`),
        year: c ? void 0 : `numeric`,
      },
      t = a.toLocaleDateString(Ee.GetPreferredLocales(), e);
    return f + ` - ` + t;
  }
}
function pn(e) {
  let { rtStartDate: t, rtEndDate: n, strMonthFormat: r, className: i } = e;
  return (0, q.jsxs)(`div`, { className: i, children: [fn(t, n, r), ` `] });
}
function mn(e, t) {
  return {
    clanid: e,
    appid: t,
    can_edit: !1,
    owns_app: !1,
    event_followed: [],
    event_followed_flags: [],
    event_ignored: [],
    follows_app: !1,
    valve_admin: !1,
    support_user: !1,
    limited_user: !0,
  };
}
function hn(e, t) {
  return !t || !(e.support_user || e.valve_admin)
    ? e
    : { ...e, can_edit: !0, support_user: !1, valve_admin: !1 };
}
async function gn(e, t, n) {
  let r = i(),
    a = l(`partnereventpermissions`, `application_config`);
  if (_n(a)) {
    let t = a.find((t) => t.clanid == e);
    if (t) {
      let { success: e, warn_msg: n, err_msg: i, ...a } = t;
      return hn(a, r);
    }
  }
  if (o.logged_in) {
    let t = ae.InitFromClanID(e, f.EUNIVERSE),
      n = `${f.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
    c() == `partner`
      ? (n = `${f.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${e}`)
      : c() == `store` &&
        (n = `${f.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${e}`);
    let i = await fetch(n, { method: `GET`, credentials: `include` });
    if (i.status == 200) {
      let e = await i.json();
      if (e) {
        let { success: t, warn_msg: n, err_msg: i, ...a } = e;
        return hn(a, r);
      }
    }
  }
  return mn(e, void 0);
}
function _n(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanid == `number` && typeof t[0].appid == `number`
    : !1;
}
function vn(e) {
  let t = R(),
    n = Qe();
  return z(yn(e, t, n));
}
function yn(e, t, n) {
  return {
    queryKey: bn(e),
    queryFn: async () => await gn(e, t, n),
    enabled: !!e,
  };
}
function bn(e) {
  return [`useEventUserPermissions`, o.accountid, e];
}
var xn = { eLocation: 0 },
  Sn = K.createContext(xn);
function Cn(e) {
  let { children: t, location: n } = e;
  return (0, q.jsx)(Sn.Provider, {
    value: { ...xn, eLocation: n ?? 0 },
    children: t,
  });
}
function wn() {
  return K.useContext(Sn);
}
function Tn() {
  return wn().eLocation == 2;
}
function En() {
  let e = wn();
  return e.eLocation == 2 || e.eLocation == 1;
}
function Dn() {
  let e = window;
  e.g_wapitRefreshEnabled = !1;
  let t = typeof e.g_wapitRefresh == `function`,
    n;
  return (
    !f.IN_CLIENT &&
      t &&
      (n = () =>
        new Promise((t, n) => {
          e.g_wapitRefresh((e) => {
            t(e);
          }),
            window.setTimeout(() => n(`Refresh Timeout`), 1e4);
        })),
    new Dt(f.WEBAPI_BASE_URL, e.g_wapit, !1, n)
  );
}
var On = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            item_type: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: _.writeUint32 },
            owner: { n: 4, br: n.readUint32, bw: _.writeUint32 },
            attributes: { n: 5, c: kn, r: !0, q: !0 },
            used: { n: 6, br: n.readBool, bw: _.writeBool },
            owner_origin: { n: 7, br: n.readUint32, bw: _.writeUint32 },
            amount: { n: 8, br: n.readInt64String, bw: _.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_CommunityItem`;
    }
  },
  kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.attributeid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            attributeid: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            value: { n: 2, br: n.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_CommunityItem_Attribute`;
    }
  },
  An = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.filter_appids || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filter_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetCommunityInventory_Request`;
    }
  },
  jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { items: { n: 1, c: On, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetCommunityInventory_Response`;
    }
  },
  Mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            item_type: { n: 3, br: n.readUint32, bw: _.writeUint32 },
            language: { n: 4, br: n.readString, bw: _.writeString },
            broadcast_channel_id: {
              n: 5,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            keyvalues_as_json: { n: 6, br: n.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Request`;
    }
  },
  Nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_definitions || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_definitions: { n: 1, c: Pn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Response`;
    }
  },
  Pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_type || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_type: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            appid: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            item_name: { n: 3, br: n.readString, bw: _.writeString },
            item_title: { n: 4, br: n.readString, bw: _.writeString },
            item_description: { n: 5, br: n.readString, bw: _.writeString },
            item_image_small: { n: 6, br: n.readString, bw: _.writeString },
            item_image_large: { n: 7, br: n.readString, bw: _.writeString },
            item_key_values: { n: 8, br: n.readString, bw: _.writeString },
            item_series: { n: 9, br: n.readUint32, bw: _.writeUint32 },
            item_class: { n: 10, br: n.readUint32, bw: _.writeUint32 },
            editor_accountid: { n: 11, br: n.readUint32, bw: _.writeUint32 },
            active: { n: 12, br: n.readBool, bw: _.writeBool },
            item_image_composed: { n: 13, br: n.readString, bw: _.writeString },
            item_image_composed_foil: {
              n: 14,
              br: n.readString,
              bw: _.writeString,
            },
            deleted: { n: 15, br: n.readBool, bw: _.writeBool },
            item_last_changed: { n: 16, br: n.readUint32, bw: _.writeUint32 },
            broadcast_channel_id: {
              n: 17,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            item_movie_webm: { n: 18, br: n.readString, bw: _.writeString },
            item_movie_mp4: { n: 19, br: n.readString, bw: _.writeString },
            item_movie_webm_small: {
              n: 20,
              br: n.readString,
              bw: _.writeString,
            },
            item_movie_mp4_small: {
              n: 21,
              br: n.readString,
              bw: _.writeString,
            },
            item_internal_name: { n: 22, br: n.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Response_ItemDefinition`;
    }
  },
  Fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            communityitemid: {
              n: 2,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            activate: { n: 3, br: n.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_ActivateProfileModifierItem_Request`;
    }
  },
  In = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_ActivateProfileModifierItem_Response`;
    }
  },
  Ln = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp_start || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_start: {
              n: 1,
              d: 0,
              br: n.readUint32,
              bw: _.writeUint32,
            },
            timestamp_end: {
              n: 2,
              d: 4294967295,
              br: n.readUint32,
              bw: _.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetNumTradingCardsEarned_Request`;
    }
  },
  Rn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_trading_cards || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_trading_cards: { n: 1, br: n.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_GetNumTradingCardsEarned_Response`;
    }
  },
  zn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.eventid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: n.readEnum, bw: _.writeEnum },
            include_inactive: { n: 2, br: n.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_VirtualItemRewardDefinition_Request`;
    }
  },
  Bn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.eventid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: n.readEnum, bw: _.writeEnum },
            item_bucket: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: _.writeUint32 },
            active: { n: 4, br: n.readBool, bw: _.writeBool },
            rarity: { n: 5, br: n.readUint32, bw: _.writeUint32 },
            package_to_grant: { n: 6, br: n.readUint32, bw: _.writeUint32 },
            game_item_id: {
              n: 7,
              br: n.readFixed64String,
              bw: _.writeFixed64String,
            },
            community_item_class: { n: 8, br: n.readInt32, bw: _.writeInt32 },
            community_item_type: { n: 9, br: n.readUint32, bw: _.writeUint32 },
            loyalty_point_type: { n: 10, br: n.readUint32, bw: _.writeUint32 },
            amount: { n: 11, br: n.readInt64String, bw: _.writeInt64String },
            rtime_time_active: { n: 12, br: n.readUint32, bw: _.writeUint32 },
            loyalty_reward_defid: {
              n: 13,
              br: n.readUint32,
              bw: _.writeUint32,
            },
            user_badge_to_grant: { n: 14, br: n.readUint32, bw: _.writeUint32 },
            user_badge_level: { n: 15, br: n.readUint32, bw: _.writeUint32 },
            virtual_item_def_id: { n: 16, br: n.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CVirtualItemRewardDefinition`;
    }
  },
  Vn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rewards || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rewards: { n: 1, c: Bn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_VirtualItemRewardDefinition_Response`;
    }
  },
  Hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.eventid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: n.readEnum, bw: _.writeEnum },
            itemsdefs: { n: 2, c: Bn, r: !0, q: !0 },
            action: { n: 3, br: n.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_SetVirtualItemRewardDefinition_Request`;
    }
  },
  Un = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CQuest_SetVirtualItemRewardDefinition_Response`;
    }
  },
  Wn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Quest.GetCommunityInventory#1`, A(An, t, n), jn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommunityInventory = t;
  function n(e, t, n) {
    return e.SendMsg(`Quest.GetCommunityItemDefinitions#1`, A(Mn, t, n), Nn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 4,
    });
  }
  e.GetCommunityItemDefinitions = n;
  function r(e, t, n) {
    return e.SendMsg(`Quest.ActivateProfileModifierItem#1`, A(Fn, t, n), In, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ActivateProfileModifierItem = r;
  function i(e, t, n) {
    return e.SendMsg(`Quest.GetNumTradingCardsEarned#1`, A(Ln, t, n), Rn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNumTradingCardsEarned = i;
  function a(e, t, n) {
    return e.SendMsg(
      `Quest.GetVirtualItemRewardDefinition#1`,
      A(zn, t, n),
      Vn,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetVirtualItemRewardDefinition = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Quest.SetVirtualItemRewardDefinition#1`,
      A(Hn, t, n),
      Un,
      { ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetVirtualItemRewardDefinition = o;
})((Wn ||= {}));
async function Gn(e, t) {
  let n = await Wn.GetCommunityInventory(e, { filter_appids: [t] });
  if (n.GetEResult() != 1)
    throw Error(
      `Quest.GetCommunityInventory on app ` + t + ` answered ` + n.GetEResult(),
    );
  return n.Body().toObject().items ?? [];
}
var Kn;
function qn() {
  let e = jt();
  if (e) return e.GetServiceTransport();
  if (!Kn) {
    let e = l(`read_inventory_token`, `application_config`);
    Kn = Ot(e ? new Dt(f.WEBAPI_BASE_URL, e) : Dn());
  }
  return Kn.GetServiceTransport();
}
async function Jn(e) {
  return Gn(qn(), e);
}
function Yn(e) {
  return [`QuestCommunityInventory`, e];
}
function Xn(e) {
  return {
    queryKey: Yn(e),
    queryFn: () => Jn(e),
    enabled: !!e,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function Zn(e) {
  let { data: t } = z(Xn(e));
  return t;
}
var Qn = `minigamev2/itemdefs`,
  $n = `appid`,
  er = `editor`;
function tr() {
  return (typeof self < `u` ? self.origin + `/` : ``) === f.STORE_BASE_URL
    ? f.STORE_BASE_URL
    : f.COMMUNITY_BASE_URL;
}
async function nr(e, t) {
  if (!e) return [];
  let n = new URLSearchParams({ [$n]: String(e), l: f.LANGUAGE });
  t && n.set(er, `1`);
  let r = `${tr()}${Qn}?${n}`,
    i = await fetch(r, { credentials: t ? `include` : `same-origin` });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  if (a?.success == 1 && a.item_definitions) return a.item_definitions;
  throw Error(
    `Community item definitions for app ` + e + ` answered ` + a?.success,
  );
}
function rr(e, t) {
  return [`MinigameCommunityItemDefs`, e, !!t];
}
function ir(e, t) {
  return {
    queryKey: rr(e, t),
    queryFn: () => nr(e, t),
    enabled: !!e,
    retry: !1,
  };
}
function ar(e, t) {
  let { data: n } = z(ir(e, t));
  return n;
}
function or(e, t, n) {
  let r = ar(e, n);
  return (0, K.useMemo)(
    () => r?.find((r) => (n || r.active) && r.appid == e && r.item_type == t),
    [r, e, t, n],
  );
}
function sr(e) {
  let {
    appid: t,
    item_image_small: n,
    item_image_large: r,
    item_movie_mp4: i,
    item_movie_webm: a,
    item_title: o,
  } = e;
  if (i && a) {
    let r = `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n}`,
      o = `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`,
      s = `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${i}`;
    return (0, q.jsx)(q.Fragment, {
      children: (0, q.jsxs)(`video`, {
        muted: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        poster: r,
        playsInline: !0,
        className: e.videoClassName,
        children: [
          (0, q.jsx)(`source`, { src: o, type: `video/webm` }),
          !f.IN_CLIENT && (0, q.jsx)(`source`, { src: s, type: `video/mp4` }),
        ],
      }),
    });
  }
  {
    let i = `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n || r}`;
    return (0, q.jsx)(`img`, { className: e.className, src: i, alt: o });
  }
}
function cr(e) {
  let { appid: t, community_item_type: n, bForEdit: r } = e,
    i = or(t, n, r),
    a =
      i && !i.active
        ? (0, q.jsx)(`div`, {
            className: Tt,
            children: I(`#Sale_Section_RewardShelf_ItemInActiveWarning`),
          })
        : void 0;
  return i
    ? (0, q.jsxs)(q.Fragment, { children: [(0, q.jsx)(sr, { ...i }), a] })
    : (0, q.jsx)(H, { size: `small`, string: I(`#Loading`) });
}
var lr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_type || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_type: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            appid: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            item_name: { n: 3, br: n.readString, bw: _.writeString },
            item_title: { n: 4, br: n.readString, bw: _.writeString },
            item_description: { n: 5, br: n.readString, bw: _.writeString },
            item_image_small: { n: 6, br: n.readString, bw: _.writeString },
            item_image_large: { n: 7, br: n.readString, bw: _.writeString },
            item_key_values: { n: 8, br: n.readString, bw: _.writeString },
            item_series: { n: 9, br: n.readUint32, bw: _.writeUint32 },
            item_class: { n: 10, br: n.readUint32, bw: _.writeUint32 },
            editor_accountid: { n: 11, br: n.readUint32, bw: _.writeUint32 },
            active: { n: 12, br: n.readBool, bw: _.writeBool },
            item_image_composed: { n: 13, br: n.readString, bw: _.writeString },
            item_image_composed_foil: {
              n: 14,
              br: n.readString,
              bw: _.writeString,
            },
            deleted: { n: 15, br: n.readBool, bw: _.writeBool },
            item_last_changed: { n: 16, br: n.readUint32, bw: _.writeUint32 },
            broadcast_channel_id: {
              n: 17,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            item_movie_webm: { n: 18, br: n.readString, bw: _.writeString },
            item_movie_mp4: { n: 19, br: n.readString, bw: _.writeString },
            item_movie_webm_small: {
              n: 20,
              br: n.readString,
              bw: _.writeString,
            },
            item_movie_mp4_small: {
              n: 21,
              br: n.readString,
              bw: _.writeString,
            },
            item_internal_name: { n: 22, br: n.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CommunityItemDefinition`;
    }
  },
  ur = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            community_item_type: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            community_item_class: { n: 3, br: n.readUint32, bw: _.writeUint32 },
            community_definition: { n: 4, c: lr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SaleReward_ItemDefinition`;
    }
  },
  dr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            time_granted: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            item_definition: { n: 3, c: ur },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SaleItemRewardGrant`;
    }
  },
  fr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: n.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Request`;
    }
  },
  pr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: n.readUint64String,
              bw: _.writeUint64String,
            },
            next_claim_time: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            reward_item: { n: 3, c: _t },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Response`;
    }
  },
  mr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: n.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Request`;
    }
  },
  hr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.can_claim || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_claim: { n: 1, br: n.readBool, bw: _.writeBool },
            next_claim_time: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            reward_item: { n: 3, c: _t },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Response`;
    }
  },
  gr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_reward_def_id || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_reward_def_id: { n: 1, br: n.readUint32, bw: _.writeUint32 },
            appid: { n: 2, br: n.readUint32, bw: _.writeUint32 },
            virtual_item_reward_event_id: {
              n: 3,
              br: n.readUint32,
              bw: _.writeUint32,
            },
            rtime_start_time: { n: 4, br: n.readUint32, bw: _.writeUint32 },
            rtime_end_time: { n: 5, br: n.readUint32, bw: _.writeUint32 },
            num_items_per_def: { n: 6, br: n.readUint32, bw: _.writeUint32 },
            reward_def_type: { n: 7, br: n.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamItemRewardDefinition`;
    }
  },
  _r = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.virtual_item_reward_event_id || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            virtual_item_reward_event_id: {
              n: 1,
              br: n.readUint32,
              bw: _.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Request`;
    }
  },
  vr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: gr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Response`;
    }
  },
  yr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: gr, r: !0, q: !0 },
            action: { n: 2, br: n.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Request`;
    }
  },
  br = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: gr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Response`;
    }
  },
  xr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_def_type || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: n.readEnum, bw: _.writeEnum },
            language: { n: 2, br: n.readString, bw: _.writeString },
            include_community_item_def: {
              n: 3,
              br: n.readBool,
              bw: _.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Request`;
    }
  },
  Sr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_items_granted || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_items_granted: { n: 1, br: n.readInt32, bw: _.writeInt32 },
            num_items_earned: { n: 2, br: n.readInt32, bw: _.writeInt32 },
            current_def: { n: 3, c: gr },
            reward_items: { n: 4, c: dr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Response`;
    }
  },
  Cr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_def_type || r(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: n.readEnum, bw: _.writeEnum },
            language: { n: 2, br: n.readString, bw: _.writeString },
            include_community_item_def: {
              n: 3,
              br: n.readBool,
              bw: _.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Request`;
    }
  },
  wr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definition || r(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definition: { n: 1, c: gr },
            reward_items: { n: 2, c: ur, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Response`;
    }
  },
  Tr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleItemRewards.ClaimItem#1`, A(fr, t, n), pr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ClaimItem = t;
  function n(e, t, n) {
    return e.SendMsg(`SaleItemRewards.CanClaimItem#1`, A(mr, t, n), hr, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CanClaimItem = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetRewardDefinitions#1`,
      A(_r, t, n),
      vr,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetRewardDefinitions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.SetRewardDefinitions#1`,
      A(yr, t, n),
      br,
      { ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetRewardDefinitions = i;
  function a(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetClaimedSaleRewards#1`,
      A(xr, t, n),
      Sr,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClaimedSaleRewards = a;
  function o(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetCurrentDefinition#1`,
      A(Cr, t, n),
      wr,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetCurrentDefinition = o;
})((Tr ||= {}));
var Er = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
async function Dr(e, t) {
  let n = await Tr.CanClaimItem(e, { language: t });
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject(),
    i = r.reward_item?.defid ? r.reward_item : void 0;
  return {
    bCanClaimNewItem: !!r.can_claim,
    bAlreadyClaimedCurrentItem: !!i,
    appid: i?.appid,
    community_item_type: i?.community_item_type,
    community_item_class: i?.community_item_class,
    rtNextClaimTime: (r.next_claim_time ?? 0) > 0 ? r.next_claim_time : void 0,
  };
}
async function Or(e, t) {
  let n = await Tr.ClaimItem(e, { language: t });
  if (n.GetEResult() == 29) return Dr(e, t);
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: r?.appid,
    community_item_type: r?.community_item_type,
    community_item_class: r?.community_item_class,
    rtNextClaimTime:
      (n.Body().next_claim_time() ?? 0) > 0
        ? n.Body().next_claim_time()
        : void 0,
  };
}
async function kr(e, t) {
  let n = await Wn.ActivateProfileModifierItem(e, {
    communityitemid: t.communityitemid,
    appid: t.appid,
    activate: !0,
  });
  if (n.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + n.GetEResult());
  return n.GetEResult();
}
var Ar;
function jr() {
  let e = jt();
  if (e) return e.GetServiceTransport();
  if (!Ar) {
    let e = l(`loyalty_webapi_token`, `application_config`);
    Ar = Ot(e ? new Dt(f.WEBAPI_BASE_URL, e) : Dn());
  }
  return Ar.GetServiceTransport();
}
async function Mr(e) {
  return Dr(jr(), e);
}
async function Nr(e) {
  return Or(jr(), e);
}
async function Pr(e) {
  return kr(jr(), e);
}
var Fr = 3e5,
  Ir = null;
function Lr(e) {
  return [`SaleItemCanClaim`, e];
}
function Rr(e) {
  return {
    queryKey: Lr(e),
    queryFn: () => Mr(e),
    enabled: !0,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function zr() {
  let e = f.LANGUAGE,
    t = R(),
    { data: n, isLoading: r } = z(Rr(e)),
    i = n?.rtNextClaimTime;
  return (
    (0, K.useEffect)(() => {
      let n = 0;
      if (i) {
        let r = () => {
          let a = i * 1e3 - Date.now();
          a <= 0
            ? t.invalidateQueries({ queryKey: Lr(e) })
            : (n = window.setTimeout(r, a > Fr ? a / 2 : a));
        };
        r();
      }
      return () => window.clearTimeout(n);
    }, [i, e, t]),
    { ...(n ?? Er), bLoading: r }
  );
}
function Br() {
  let e = R(),
    { mutateAsync: t } = B({
      mutationFn: () => {
        if (Ir) {
          let e = Ir;
          return (Ir = null), Promise.resolve(e);
        }
        return Nr(f.LANGUAGE);
      },
      onSuccess: (t) => e.setQueryData(Lr(f.LANGUAGE), t),
    });
  return { fnClaimItem: (0, K.useCallback)(() => t(), [t]) };
}
function Vr() {
  return B({ mutationFn: (e) => Pr(e) });
}
var Hr = `sQ3oyZUR-zg-`,
  Ur = `xlE3GjrXwxc-`,
  Wr = `-kwnh0mPXe8-`;
function Gr(e) {
  let n = zr(),
    { bLoading: r } = n,
    { className: i, bPreviewMode: a, rewardType: o } = e,
    [s, c, l] = j();
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(P, {
        className: t(`CSSClaimItemButton`, i),
        onClick: () => {
          n.bCanClaimNewItem
            ? c()
            : a &&
              (c(),
              console.log(
                `Show dialog for debugging, since already claimed: `,
                n,
              ));
        },
        disabled: r,
        children: r
          ? (0, q.jsx)(H, { string: I(`#Loading`), size: `small` })
          : (0, q.jsx)(Kr, { claimState: n }),
      }),
      (0, q.jsx)(V, {
        active: s,
        children: (0, q.jsx)(qr, { rewardType: o, closeModal: l }),
      }),
    ],
  });
}
function Kr(e) {
  let { claimState: n, strButtonOverride: r, rewardType: i } = e;
  if (n.bAlreadyClaimedCurrentItem)
    return (0, q.jsxs)(`div`, {
      className: t(Hr, `CSSClaimedState`),
      children: [
        (0, q.jsx)(He, {}),
        (0, q.jsxs)(`span`, {
          children: [` `, r || I(`#Sale_ClaimableReward_AlreadyClaimed`)],
        }),
      ],
    });
  let a = I(`#Sale_ClaimableReward_generic`);
  switch (n?.community_item_class || i) {
    case 11:
      a = I(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      a = I(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      a = I(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, q.jsx)(`span`, { className: `CSSUnclaimedState`, children: a });
}
function qr(e) {
  let { closeModal: t, rewardType: n } = e,
    { fnClaimItem: r } = Br(),
    i = kt(),
    [a, o] = K.useState(null);
  K.useEffect(() => {
    i.bLoading ||
      (i.fnSetLoading(!0),
      r()
        .then((e) => {
          if ((o(e), e.appid)) {
            let t = I(`#Sale_ClaimableReward_completed_generic`),
              r = a?.community_item_class || n;
            switch (r) {
              case 11:
                t = I(`#Sale_ClaimableReward_completed_sticker`);
                break;
              case 8:
                t = I(`#Sale_ClaimableReward_completed_profilemodifier`);
                break;
              case 15:
                t = I(`#Sale_ClaimableReward_completed_animatedavatar`);
            }
            i.fnSetStrSuccess(`   `),
              i.fnSetElSuccess(
                (0, q.jsxs)(`div`, {
                  className: Ur,
                  children: [
                    (0, q.jsx)(`span`, { children: t }),
                    (0, q.jsx)(Jr, {
                      appid: e.appid,
                      community_item_type: e.community_item_type,
                      rewardType: r,
                    }),
                  ],
                }),
              );
          } else i.fnSetStrError(I(`#Sale_ClaimableReward_Busy`));
        })
        .catch(() => i.fnSetStrError(I(`#Sale_ClaimableReward_Busy`))));
  }, [a?.community_item_class, i, r, n]);
  let s = I(`#Sale_ClaimableReward_generic`);
  switch (a?.community_item_class || n) {
    case 11:
      s = I(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      s = I(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      s = I(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, q.jsx)(At, { state: i, strDialogTitle: s, closeModal: t });
}
function Jr(e) {
  let { appid: t, community_item_type: n, rewardType: r } = e;
  return !t || !n
    ? null
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)(cr, { appid: t, community_item_type: n }),
          r == 8 && (0, q.jsx)(Yr, { appid: t, community_item_type: n }),
        ],
      });
}
function Yr(e) {
  let { appid: t, community_item_type: n } = e,
    r = Zn(t),
    { mutate: i, isSuccess: a } = Vr();
  if (!r) return null;
  let s = r.find((e) => e.item_type == n);
  return s
    ? (0, q.jsxs)(`div`, {
        className: Wr,
        children: [
          a
            ? (0, q.jsx)(`div`, {
                children: I(
                  `#Sale_ClaimableReward_profilemodifier_apply_success`,
                ),
              })
            : (0, q.jsx)(P, {
                onClick: () => i(s),
                children: I(`#Sale_ClaimableReward_profilemodifier_apply`),
              }),
          (0, q.jsx)(re, {
            href: `${f.COMMUNITY_BASE_URL}profiles/${o.steamid}`,
            children: I(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      })
    : (0, q.jsxs)(`div`, {
        children: [
          (0, q.jsx)(re, {
            href: `${f.COMMUNITY_BASE_URL}profiles/${o.steamid}/edit/goldenprofile`,
            children: I(`#Sale_ClaimableReward_profilemodifier_choose`),
          }),
          (0, q.jsx)(re, {
            href: `${f.COMMUNITY_BASE_URL}profiles/${o.steamid}`,
            children: I(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      });
}
async function Xr(e, t) {
  let n = new URLSearchParams();
  n.append(`page_action`, String(e)),
    n.append(`snr`, E.SNR),
    n.append(`uint_data`, String(t)),
    n.append(`str_data`, Zr());
  try {
    await fetch(E.STORE_BASE_URL + `events/ajaxreportnewshubstats/`, {
      method: `POST`,
      body: n,
    });
  } catch {}
}
function Zr() {
  if (E.IN_CLIENT) return `steam`;
  let e = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(e) ||
    (/Macintosh/i.test(e) && /Safari/i.test(e))
    ? `ios`
    : /Android/i.test(e)
      ? `android`
      : ``;
}
var Q = (function (e) {
    return (
      (e[(e.k_eDiscussions = 0)] = `k_eDiscussions`),
      (e[(e.k_eThumbsUp = 1)] = `k_eThumbsUp`),
      (e[(e.k_eClickThrough = 2)] = `k_eClickThrough`),
      (e[(e.k_eMuted = 3)] = `k_eMuted`),
      (e[(e.k_ePlayedVideo = 4)] = `k_ePlayedVideo`),
      (e[(e.k_eReminder_Opened = 5)] = `k_eReminder_Opened`),
      (e[(e.k_eReminder_MobilePush = 6)] = `k_eReminder_MobilePush`),
      (e[(e.k_eReminder_Email = 7)] = `k_eReminder_Email`),
      (e[(e.k_eReminder_CalendarApple = 8)] = `k_eReminder_CalendarApple`),
      (e[(e.k_eReminder_CalendarGoogle = 9)] = `k_eReminder_CalendarGoogle`),
      (e[(e.k_eReminder_CalendarOutlook = 10)] = `k_eReminder_CalendarOutlook`),
      (e[(e.k_eReminder_EmailUnverified = 11)] = `k_eReminder_EmailUnverified`),
      (e[(e.k_eReminder_MobilePushMissing = 12)] =
        `k_eReminder_MobilePushMissing`),
      e
    );
  })({}),
  Qr = { nFutureViewedIndex: 0, nPastViewedIndex: 0, nLastRecordedFilter: 0 };
function $r() {
  return [`EventCalendarTrackingProgress`];
}
function ei(e) {
  return e.getQueryData($r()) ?? Qr;
}
function ti(e, t) {
  e.setQueryDefaults($r(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
    e.setQueryData($r(), (e) => ({ ...(e ?? Qr), ...t }));
}
function ni(e, t, n) {
  return clearTimeout(e), setTimeout(n, t);
}
function ri(e) {
  Xr(19, e);
}
function ii(e, t) {
  ti(e, {
    schFilter: ni(ei(e).schFilter, 1e3, () => {
      t != ei(e).nLastRecordedFilter &&
        (ti(e, { nLastRecordedFilter: t }), Xr(16, t));
    }),
  });
}
function ai(e, t, n, r) {
  let i = 0,
    a = 0,
    o,
    s;
  for (let e of n) {
    let n = e.start_time > r;
    if ((e.unique_id == t && ((o = a), (s = e)), n)) i++;
    else if (o !== void 0) break;
    a++;
  }
  if (o === void 0 || !s) return;
  let c = ei(e);
  if (o < i) {
    let t = i - o;
    if (c.nFutureViewedIndex >= t) return;
    ti(e, {
      nFutureViewedIndex: t,
      schFuture: ni(c.schFuture, 500, () => {
        Xr(
          18,
          Math.min(t, 4095) |
            (Math.min(i, 255) << 12) |
            (Math.min(oi(r), 2047) << 20),
        );
      }),
    });
    return;
  }
  let l = o - i;
  if (c.nPastViewedIndex >= l) return;
  let u = Math.floor((r - s.start_time) / 86400);
  ti(e, {
    nPastViewedIndex: l,
    schPast: ni(c.schPast, 500, () => {
      Xr(
        17,
        Math.min(l, 4095) |
          (Math.min(u, 255) << 12) |
          (Math.min(oi(r), 2047) << 20),
      );
    }),
  });
}
function oi(e) {
  return Math.max(0, Math.floor(Date.now() / 1e3 - e));
}
function si() {
  let e = R(),
    { mutate: t } = B({
      mutationFn: async (t) => {
        switch (t.type) {
          case `interaction`:
            ri(t.interaction);
            break;
          case `filter-change`:
            ii(e, t.nFilterBitMask);
            break;
          case `event-viewed`:
            ai(e, t.gidEvent, t.rgItemsInView, t.rtCalendarInit);
        }
      },
    });
  return K.useMemo(
    () => ({
      RecordInteraction: (e) => t({ type: `interaction`, interaction: e }),
      RecordFilterChange: (e) =>
        t({ type: `filter-change`, nFilterBitMask: e }),
      RecordEventViewed: (e, n, r) =>
        t({
          type: `event-viewed`,
          gidEvent: e,
          rgItemsInView: n,
          rtCalendarInit: r,
        }),
    }),
    [t],
  );
}
var ci = `notificationaction/usercontactmethods`;
async function li() {
  let e = f.STORE_BASE_URL + ci,
    t = await fetch(e, { credentials: `include` });
  if (!t.ok) throw Error(`${e} answered ${t.status}`);
  return await t.json();
}
var ui = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
function di() {
  let { data: e } = z(pi());
  return e ?? ui;
}
function fi(e) {
  return [`useUserContactMethods`, e];
}
function pi() {
  return {
    queryKey: fi(o.accountid),
    queryFn: li,
    enabled: !!o.logged_in,
    initialData: () => {
      let e = l(`notificationstore`, `application_config`);
      return hi(e) ? mi(e) : void 0;
    },
  };
}
function mi(e) {
  return {
    bHasValidatedEmail: !!e.email_validated,
    bHasPushNotification: (e.mobile_device_count ?? 0) > 0,
  };
}
function hi(e) {
  let t = e;
  return (
    !!t && typeof t == `object` && typeof t.mobile_device_count == `number`
  );
}
var gi = `_5AgZEgYk43o-`,
  _i = `_8D33ZtA7ymg-`,
  vi = `KtGRAufC8Rg-`,
  yi = `Kd1BYtvJHJU-`,
  bi = `N7OtL5zwQl8-`,
  xi = `s1rk-Hqt8Vo-`,
  Si = `LQdMT5i8LTs-`,
  Ci = `Es2eMo59RY8-`,
  wi = `QcOIba5EbY0-`,
  Ti = `Rudc0MPiyKA-`,
  Ei = `cVnNrHICBDo-`,
  Di = `NOqR9p4DLhY-`,
  Oi = `kuZjNUoyxrA-`;
function ki(e) {
  return (
    (e.bHasVerifiedEmail && e.bFollowsByEmail) ||
    (e.bHasPushNotification && e.bFollowsByPush)
  );
}
function Ai(e) {
  let {
      eventModel: n,
      rtNow: r,
      notifyState: i,
      bOnlyShowIcon: a,
      renderPanel: o,
      onRequestSignIn: s,
      bSignedIn: c,
      onTrack: l,
    } = e,
    [u, d] = K.useState(!1),
    f = K.useRef(null),
    p = K.useRef(null),
    m = K.useCallback(() => {
      p.current?.Hide(), d(!1);
    }, []),
    h = () => {
      let e = {
        bOverlapHorizontal: !0,
        bOverlapVertical: !0,
        bDisablePopTop: !0,
        bMatchWidth: !0,
        strClassName: t(_i, vi, xe),
      };
      (p.current = de(o(m), f.current, e)),
        p.current.SetOnHideCallback(m),
        d(!0),
        l?.(`opened`);
    },
    g = (e) => {
      c ? (u ? m() : h(), e.stopPropagation(), e.preventDefault()) : s?.();
    },
    _ = a && !u,
    v = ki(i);
  return (n.startTime !== void 0 && n.startTime < r) || n.BIsUnlistedEvent()
    ? null
    : (0, q.jsxs)(`div`, {
        className: t({
          [Si]: !0,
          [$e]: !0,
          [Ci]: _,
          [Ti]: !_,
          ReminderSet: v,
          RemindMeWidget: !0,
        }),
        role: `button`,
        tabIndex: 0,
        "aria-expanded": u,
        onClick: g,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && g(e);
        },
        ref: f,
        children: [
          v &&
            (0, q.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, q.jsx)(He, {}),
            }),
          _ &&
            (0, q.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, q.jsx)(we, {}),
            }),
          (0, q.jsx)(`div`, {
            className: wi,
            children: I(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, q.jsx)(`div`, { className: vi }),
        ],
      });
}
function ji(e) {
  let {
      eventModel: n,
      lang: r,
      rtNow: i,
      notifyState: a,
      bShowStartTime: o,
      bExpandLeft: s,
      bOnlyShowIcon: c,
      strCalendarEventTitle: l,
      onChangeNotify: u,
      onTrack: d,
      fnHidePanel: p,
    } = e,
    [m, h] = K.useState(!1),
    [g, _] = K.useState(void 0),
    [v, y, x] = j(),
    S = async (e, t) => {
      if (n.GID && n.GID != `18446744073709551615`) {
        h(!0);
        try {
          await u(e, t),
            e && d?.(t == `email` ? `notify-email` : `notify-push`);
        } catch (e) {
          _(e instanceof Error ? e.message : String(e)), y();
        }
        h(!1);
      }
    },
    C = n.jsondata.bSaleEnabled ? xt.k_eStoreSalePage : xt.k_eStoreView,
    w = Ct(n, C, `forceAbsolute`),
    T = () => {
      let e = n.GetSubTitleWithLanguageFallback(r);
      e = e ? `${e}\n\n\n` : ``;
      let t = n.GetSummaryWithFallback(r);
      return `${e}${t}\n\n${w}`;
    },
    E = () => {
      let e = encodeURIComponent(l),
        t = encodeURIComponent(T()),
        r = n.GetStartTimeAndDateUnixSeconds(),
        i = Mi(r),
        a = Mi(n.GetEndTimeAndDateUnixSeconds() || r + Ce.PerHour),
        o =
          (f.IN_CLIENT ? `steam://openurl_external/` : ``) +
          `https://calendar.google.com/calendar/r/eventedit?text=${e}&details=${t}&dates=${i}/${a}`;
      return me(o);
    },
    D = (e) => {
      let t = n.appid
          ? `app/` + n.appid
          : `group/` + n.clanSteamID.GetAccountID(),
        i = `l=` + b(r);
      return `${f.STORE_BASE_URL}${gt()}/download/${t}/${e}/${n.GID}?${i}`;
    },
    {
      bHasVerifiedEmail: O,
      bHasPushNotification: k,
      bFollowsByEmail: ee,
      bFollowsByPush: A,
    } = a,
    te = o && n.GetStartTimeAndDateUnixSeconds();
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsxs)(`div`, {
        className: t(Si, c ? Ci : Ti, `RemindMeWidget`),
        role: `button`,
        tabIndex: 0,
        onClick: p,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), p());
        },
        children: [
          ki(a) &&
            (0, q.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, q.jsx)(He, {}),
            }),
          c &&
            (0, q.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, q.jsx)(we, {}),
            }),
          (0, q.jsx)(`div`, {
            className: wi,
            children: I(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, q.jsx)(`div`, { className: Ei }),
        ],
      }),
      (0, q.jsxs)(`div`, {
        className: t(gi, yi, s && `_4kHkgBu8y8A-`),
        children: [
          m &&
            (0, q.jsx)(H, {
              className: `xPjWHd9Ig14-`,
              size: `xlarge`,
              position: `center`,
            }),
          te &&
            (0, q.jsx)(`div`, {
              className: `QivD6fzvu-Q-`,
              children: Ae(
                `#EventDisplay_EventUpcoming_WithDateAndTime`,
                _e(te, ze(new Date(te * 1e3), new Date(i * 1e3))),
                on(te, !0),
              ),
            }),
          (0, q.jsx)(`div`, {
            className: Di,
            children: I(`#EventDisplay_Reminder_GetNotification_Via`),
          }),
          (0, q.jsxs)(`div`, {
            className: t(bi, !O && `jtgpkfFhOJ8-`),
            children: [
              (0, q.jsx)(Re, {
                className: xi,
                bTopmost: !0,
                toolTipContent: I(
                  O
                    ? `#EventReminder_NotifyByEmail_ttip`
                    : `#EventReminder_NotifyByEmail_Missing`,
                ),
                children: (0, q.jsx)(ue, {
                  label: I(`#EventDisplay_Reminder_ViaEmail`),
                  disabled: !O,
                  checked: ee,
                  onChange: (e) => S(e, `email`),
                }),
              }),
              !O &&
                (0, q.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, q.jsx)(`a`, {
                    href: f.STORE_BASE_URL + `account/`,
                    target: f.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => d?.(`email-unverified`),
                    rel: `noreferrer`,
                    children: I(`#EventReminder_NotifyByEmail_Missing_Add`),
                  }),
                }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: t(bi, !k && `jtgpkfFhOJ8-`),
            children: [
              (0, q.jsx)(Re, {
                className: xi,
                bTopmost: !0,
                toolTipContent: I(
                  k
                    ? `#EventReminder_NotifyByMobile_ttip`
                    : `#EventReminder_NotifyByMobile_Missing`,
                ),
                children: (0, q.jsx)(ue, {
                  label: I(`#EventDisplay_Reminder_ViaMobileApp`),
                  disabled: !k,
                  checked: A,
                  onChange: (e) => S(e, `push`),
                }),
              }),
              !k &&
                (0, q.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, q.jsx)(`a`, {
                    href: f.STORE_BASE_URL + `mobile/?show=steamapp`,
                    target: f.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => d?.(`push-missing`),
                    rel: `noreferrer`,
                    children: I(`#EventReminder_NotifyByMobile_Install`),
                  }),
                }),
            ],
          }),
          (0, q.jsxs)(K.Fragment, {
            children: [
              (0, q.jsx)(`div`, {
                className: Di,
                children: I(`#EventDisplay_Reminder_AddToCalendar`),
              }),
              (0, q.jsxs)(`div`, {
                className: Oi,
                children: [
                  (0, q.jsx)(`a`, {
                    className: bi,
                    href: D(`ics`),
                    onClick: () => d?.(`calendar-apple`),
                    children: I(`#EventDisplay_Reminder_AppleCalendar_Short`),
                  }),
                  (0, q.jsx)(`a`, {
                    className: bi,
                    target: f.IN_CLIENT ? void 0 : `_blank`,
                    href: E(),
                    onClick: () => d?.(`calendar-google`),
                    rel: `noreferrer`,
                    children: I(`#EventDisplay_Reminder_GoogleCalendar_Short`),
                  }),
                  (0, q.jsx)(`a`, {
                    className: bi,
                    href: D(`outlook`),
                    onClick: () => d?.(`calendar-outlook`),
                    children: I(`#EventDisplay_Reminder_OutlookCalendar_Short`),
                  }),
                ],
              }),
            ],
          }),
          !1,
        ],
      }),
      (0, q.jsx)(V, {
        active: v,
        children: (0, q.jsx)(De, {
          strTitle: I(`#EventDisplay_Reminder_FollowEvent_Error`),
          strDescription: I(`#EventDisplay_Reminder_FollowEvent_ErrorDesc`),
          closeModal: x,
          children: g,
        }),
      }),
    ],
  });
}
function Mi(e) {
  return new Date(e * 1e3)
    .toISOString()
    .replace(/[-:]/g, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
var Ni = (function (e) {
  return (
    (e[(e.k_ENotifyFlagNone = 0)] = `k_ENotifyFlagNone`),
    (e[(e.k_ENotifyFlagByEmail = 1)] = `k_ENotifyFlagByEmail`),
    (e[(e.k_ENotifyFlagByPush = 2)] = `k_ENotifyFlagByPush`),
    e
  );
})({});
function Pi(e, t) {
  let n = R(),
    r = Qe(),
    { data: i } = z(yn(e, n, r)),
    a = di(),
    o = Ii(i, t);
  return {
    bHasVerifiedEmail: a.bHasValidatedEmail,
    bHasPushNotification: a.bHasPushNotification,
    bFollowsByEmail: (o & Ni.k_ENotifyFlagByEmail) != 0,
    bFollowsByPush: (o & Ni.k_ENotifyFlagByPush) != 0,
  };
}
function Fi(e, t) {
  let n = R(),
    r = yn(e, n, Qe());
  return async (i, a) => {
    if (!t) return;
    let o = n.getQueryData(r.queryKey),
      s = a == `email` ? Ni.k_ENotifyFlagByEmail : Ni.k_ENotifyFlagByPush,
      c = Ii(o, t);
    await Li(e, t, i ? c | s : c & ~s),
      await n.invalidateQueries({ queryKey: r.queryKey });
  };
}
function Ii(e, t) {
  let n = t ? (e?.event_followed?.indexOf(t) ?? -1) : -1;
  return n == -1 ? 0 : (e?.event_followed_flags?.[n] ?? 0);
}
async function Li(e, t, n) {
  let r = n == 0,
    i = `${`${f.COMMUNITY_BASE_URL}gid/${ae.InitFromClanID(e, f.EUNIVERSE).ConvertTo64BitString()}/`}${r ? `unfolloworunignoreevent` : `followorignoreevent`}`,
    a = new URLSearchParams();
  a.append(`sessionid`, g()),
    a.append(`ignore`, `false`),
    a.append(`gid`, t),
    a.append(`notification_flag`, `` + n),
    a.append(`clan_accountid`, `` + e);
  let o = await fetch(i, { method: `POST`, body: a, credentials: `include` });
  if (!o.ok) throw Error(`${i} answered ${o.status}`);
}
function Ri(e) {
  let { eventModel: t, bOnlyShowIcon: n, onTrack: r } = e,
    i = Y(),
    a = Pi(t.clanSteamID.GetAccountID(), t.GID),
    { elDialogElement: s, fnShowLogonDialog: c } = Ye();
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(Ai, {
        eventModel: t,
        rtNow: i,
        notifyState: a,
        bOnlyShowIcon: n,
        bSignedIn: !!o.logged_in || f.IN_CLIENT,
        onRequestSignIn: c,
        onTrack: r,
        renderPanel: (t) => (0, q.jsx)(zi, { ...e, rtNow: i, fnHidePanel: t }),
      }),
      s,
    ],
  });
}
function zi(e) {
  let {
      eventModel: t,
      lang: n,
      strHubName: r,
      bShowStartTime: i,
      bExpandLeft: a,
      bOnlyShowIcon: o,
      onTrack: s,
      rtNow: c,
      fnHidePanel: l,
    } = e,
    u = t.clanSteamID.GetAccountID(),
    d = Pi(u, t.GID),
    f = Fi(u, t.GID),
    p = t.GetNameWithFallback(n) ?? ``,
    m = r ? `${r}: ${p}` : p;
  return (0, q.jsx)(ji, {
    eventModel: t,
    lang: n,
    rtNow: c,
    notifyState: d,
    strCalendarEventTitle: m,
    bShowStartTime: i,
    bExpandLeft: a,
    bOnlyShowIcon: o,
    onChangeNotify: f,
    onTrack: s,
    fnHidePanel: l,
  });
}
function Bi(e) {
  let {
      eventModel: t,
      lang: n,
      bShowStartTime: r,
      bExpandLeft: i,
      bOnlyShowIcon: a,
    } = e,
    o = si(),
    s = Vi(t);
  return (0, q.jsx)(Ri, {
    eventModel: t,
    lang: n,
    strHubName: s,
    bShowStartTime: r,
    bExpandLeft: i,
    bOnlyShowIcon: a,
    onTrack: (e) => o.RecordInteraction(Hi[e]),
  });
}
function Vi(e) {
  let t = e.appid || void 0,
    n = tt(t),
    { data: r } = Ke(n),
    { data: i } = qe(t ? void 0 : e.clanSteamID.GetAccountID());
  return (t ? r?.name : i?.group_name) || void 0;
}
var Hi = {
  opened: Q.k_eReminder_Opened,
  "notify-email": Q.k_eReminder_Email,
  "notify-push": Q.k_eReminder_MobilePush,
  "email-unverified": Q.k_eReminder_EmailUnverified,
  "push-missing": Q.k_eReminder_MobilePushMissing,
  "calendar-apple": Q.k_eReminder_CalendarApple,
  "calendar-google": Q.k_eReminder_CalendarGoogle,
  "calendar-outlook": Q.k_eReminder_CalendarOutlook,
};
function Ui(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${f.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var Wi = /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
  Gi = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
function Ki(e) {
  let t = [];
  for (let n of e.matchAll(Wi))
    t.push({
      strTag: n[1].toLowerCase(),
      nID: Number(Gi.exec(n[2])?.[1] ?? 0),
    });
  return t;
}
function qi(e, t) {
  return (
    e === void 0 ||
    Ki(e).find((e) => e.strTag == `meetsteamsessiongroup`)?.nID == t
  );
}
function Ji(e, t, n) {
  if (e === void 0) return !0;
  let r = Ki(e),
    i = r[r.length - 1];
  return i?.strTag == t && i.nID == n;
}
var Yi = K.createContext(null);
function Xi() {
  return K.useContext(Yi);
}
var Zi = `m7T1AR0hEMQ-`;
function Qi(e) {
  let { MissingEventFallback: t } = e,
    { event: n, showErrorInfo: r } = e.context,
    i = U(e.args),
    a = !!i && i != n?.GID,
    { data: o, isPending: s } = yt(
      a && n
        ? { clanAccountID: n.clanSteamID.GetAccountID(), eventGID: i }
        : void 0,
    );
  if (!a) return n ? (0, q.jsx)(Bi, { eventModel: n, lang: e.language }) : null;
  if (n) {
    if (o) return (0, q.jsx)(Bi, { eventModel: o, lang: e.language });
    if (s) return null;
  }
  return t
    ? (0, q.jsx)(t, { eventGID: i, lang: e.language, bShowErrorInfo: !!r })
    : r
      ? (0, q.jsx)($i, { eventGID: i })
      : null;
}
function $i({ eventGID: e }) {
  return (0, q.jsx)(`div`, {
    className: Zi,
    children: I(`#EventDidplay_Reminder_EventNotVisible`, e),
  });
}
var ea = D(ct()),
  ta = new Map([[`remindme`, { Constructor: na, autocloses: !1 }]]);
function na(e) {
  return (0, q.jsx)(Qi, { ...e, MissingEventFallback: ra });
}
function ra({ eventGID: e, lang: t, bShowErrorInfo: n }) {
  let r = rt(e);
  return r
    ? (0, q.jsx)(Bi, { eventModel: r, lang: t })
    : n
      ? (0, q.jsx)($i, { eventGID: e })
      : null;
}
function ia(e) {
  if (e === `GameAwardDrop2022`) {
    let t = Mt(e),
      n = Nt();
    return t
      ? t.registered
        ? {
            bInitialState: !1,
            bSuccessState: t.eligible,
            bFailedState: !t.eligible,
            fnAction: t.eligible
              ? void 0
              : async () => {
                  await n.fnCreateRegistration(e);
                },
          }
        : {
            bInitialState: !0,
            fnAction: async () => {
              await n.fnCreateRegistration(e);
            },
          }
      : { bInitialState: !0 };
  }
  return { bInitialState: !0 };
}
function aa(e) {
  let t = U(e.args, `action`),
    n = U(e.args, `initialToken`),
    r = U(e.args, `successToken`),
    i = U(e.args, `failToken`),
    a = ia(t),
    { elDialogElement: s, fnShowLogonDialog: c } = Ye(),
    [l, u, d] = j();
  return !t || !n || !r || !i
    ? e.context.showErrorInfo
      ? (0, q.jsx)(`div`, {
          children: `Failed to provide all tokens. Dialog will not appear`,
        })
      : null
    : !o.logged_in && t != `test` && t != `nologinrequired`
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(P, {
              className: `CSSActionDialogButton`,
              onClick: c,
              children: I(`#Login_SignIn`),
            }),
            s,
          ],
        })
      : (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsxs)(P, {
              className: `CSSActionDialogButton`,
              onClick: u,
              children: [
                !!a.bInitialState && I(n),
                !!a.bSuccessState && I(r),
                !!a.bFailedState && I(i),
              ],
            }),
            (0, q.jsx)(V, {
              active: l,
              children: (0, q.jsx)(oa, {
                strAction: t,
                strInitialToken: n,
                strSuccessToken: r,
                strFailToken: i,
                closeModal: d,
                children: e.children,
              }),
            }),
          ],
        });
}
function oa(e) {
  let {
      strAction: t,
      children: n,
      closeModal: r,
      strInitialToken: i,
      strSuccessToken: a,
      strFailToken: o,
    } = e,
    s = ia(t),
    [c, l] = K.useState(!!s.fnAction),
    u = K.useRef(!1);
  K.useEffect(() => {
    s.fnAction &&
      !u.current &&
      ((u.current = !0), l(!0), s.fnAction().finally(() => l(!1)));
  }, [s]);
  let d = K.useId();
  return (0, q.jsxs)(We, {
    bDisableBackgroundDismiss: !0,
    closeModal: r,
    onCancel: r,
    className: `CSSActionDialogDialog`,
    "aria-labelledby": d,
    children: [
      (0, q.jsxs)(Te, {
        id: d,
        children: [
          !!s.bInitialState && I(i),
          !!s.bSuccessState && I(a),
          !!s.bFailedState && I(o),
        ],
      }),
      (0, q.jsx)(ge, {
        children: (0, q.jsx)(se, {
          children: c
            ? (0, q.jsx)(H, {
                size: `medium`,
                position: `center`,
                string: I(`#Loading`),
              })
            : n,
        }),
      }),
    ],
  });
}
function sa(e) {
  let t = !!e.context.showErrorInfo,
    { elDialogElement: n, fnShowLogonDialog: r } = Ye();
  if (!o.logged_in)
    return (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(P, {
          onClick: r,
          className: `CSSClaimItemLoginButton`,
          children: I(`#Sale_ClaimableReward_Login`),
        }),
        n,
      ],
    });
  let i = U(e.args, `type`),
    a;
  if (i)
    switch (i) {
      case `profilemodifier`:
        a = 8;
        break;
      case `sticker`:
        a = 11;
    }
  return (0, q.jsx)(Gr, { bPreviewMode: t, rewardType: a });
}
function ca(e) {
  let t = U(e.args, `name`),
    n = (U(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = Mt(t);
  return t
    ? !r || !r.registered
      ? null
      : (r.eligible && n) || (!r.eligible && !n)
        ? (0, q.jsx)(q.Fragment, { children: e.children })
        : null
    : e.context.showErrorInfo
      ? (0, q.jsx)(`div`, { children: `Failed to provide giveaway name` })
      : null;
}
function la(e, t) {
  let n = K.useCallback(
    (e) => {
      e.preventDefault(), (e.returnValue = t);
    },
    [t],
  );
  ye(window, `beforeunload`, e ? n : void 0),
    K.useEffect(() => {
      if (!e || !window.navigation) return;
      let n = (e) => {
        (e.navigationType != `push` && e.navigationType != `traverse`) ||
          e.hashChange ||
          e.downloadRequest !== null ||
          !e.cancelable ||
          window.confirm(t) ||
          e.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, n),
        () => window.navigation.removeEventListener(`navigate`, n)
      );
    }, [e, t]);
}
var ua = `UsXiB1C-X8I-`;
function da(e) {
  let { bExpanded: t, setExpanded: n } = e;
  return (0, q.jsx)(Ne, {
    className: (0, Kt.default)(ua, t && `kQONFOetCiQ-`),
    onClick: () => n(!t),
    children: (0, q.jsx)(Me, { direction: `down` }),
  });
}
var fa = new Map(),
  pa = ``,
  ma = 0;
function ha(e, t) {
  return [`MeetSteamRegistrations`, e, t];
}
function ga(e, t) {
  return [`MeetSteamSelections`, e, t];
}
function _a(e) {
  return {
    queryKey: ha(e?.gidClanEvent ?? pa, e?.userAccountID ?? ma),
    queryFn: async () => {
      if (!e) return fa;
      let t = await zt(e.gidClanEvent),
        n = new Map();
      return (
        t.forEach((e) => {
          let t = {
            ...e,
            regmodel: e.jsondata ? JSON.parse(e.jsondata) : void 0,
          };
          t.group_id !== void 0 &&
            t.session_id !== void 0 &&
            n.set(t.group_id, t);
        }),
        n
      );
    },
    enabled: !!e && Et() == e?.clanAccountID && !!e?.userAccountID,
  };
}
function va(e, t) {
  return {
    queryKey: ga(e, t),
    queryFn: () => null,
    initialData: null,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  };
}
var ya = K.createContext(void 0);
function ba(e) {
  let { clanAccountID: t, gidClanEvent: n, userAccountID: r, children: i } = e,
    a = K.useMemo(
      () => ({ clanAccountID: t, gidClanEvent: n, userAccountID: r }),
      [t, n, r],
    );
  return (0, q.jsx)(ya.Provider, { value: a, children: i });
}
function $() {
  let e = K.useContext(ya),
    t = z(_a(e)),
    n = z(va(e?.gidClanEvent ?? pa, e?.userAccountID ?? ma)),
    r = t.data ?? fa;
  return K.useMemo(
    () => ({
      registrations: r,
      selections: n.data ?? xa(r),
      bLoading: t.isFetching,
    }),
    [r, n.data, t.isFetching],
  );
}
function xa(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      e.session_id !== void 0 && t.set(n, e.session_id);
    }),
    t
  );
}
function Sa(e, t) {
  return t === void 0 ? void 0 : e.selections.get(t);
}
function Ca(e) {
  return Array.from(e.selections.keys());
}
function wa(e, t, n) {
  if (t === void 0 || n === void 0) return 0;
  let r = e.registrations.get(t)?.session_id == n,
    i = e.selections.get(t) == n;
  return r && i ? 1 : !r && i ? 2 : r && !i ? 3 : 0;
}
function Ta(e, t, n) {
  if (t === void 0 || n === void 0) return !1;
  let r = !!e.registrations.get(t),
    i = e.selections.get(t) == n,
    a = e.registrations.get(t)?.session_id == e.selections.get(t);
  return r && !i && a;
}
function Ea(e, t) {
  return t === void 0 ? void 0 : e.registrations.get(t)?.session_id;
}
function Da(e) {
  return e.selections.size == 0 && e.registrations.size == 0
    ? !1
    : e.selections.size != e.registrations.size ||
        !Array.from(e.selections.entries()).every(
          (t) => e.registrations.get(t[0])?.session_id == t[1],
        );
}
function Oa(e) {
  return Array.from(e.selections.entries()).some((t) => {
    let n = e.registrations.get(t[0]);
    return !n || n.session_id != t[1];
  });
}
function ka(e) {
  return e.registrations.size > 0;
}
function Aa() {
  return $().bLoading;
}
function ja() {
  return Da($());
}
function Ma() {
  return ka($());
}
function Na(e, t) {
  return Pa(
    $(),
    e.filter((e) => !!e.ask_registration_question),
    t,
  );
}
function Pa(e, t, n) {
  return t
    .filter((t) => t.sessions.some((r) => wa(e, t.group_id, r.id) == n))
    .map((e) => e.group_id)
    .filter((e) => e !== void 0);
}
function Fa(e, t, n, r) {
  n !== void 0 &&
    e.setQueryData(ga(t.gidClanEvent, t.userAccountID), (i) => {
      let a = e.getQueryData(ha(t.gidClanEvent, t.userAccountID)) ?? fa,
        o = new Map(i ?? xa(a));
      return r !== void 0 && r > 0 ? o.set(n, r) : o.delete(n), o;
    });
}
function Ia() {
  let e = K.useContext(ya),
    t = R(),
    n = $();
  return K.useCallback(
    (r, i) => {
      if (!e) return;
      let a = Sa(n, r) == i;
      Fa(t, e, r, a ? void 0 : i);
    },
    [e, t, n],
  );
}
function La() {
  let e = K.useContext(ya),
    t = R(),
    n = $(),
    { mutateAsync: r } = B({
      mutationFn: async (r) => {
        if (!e) return !1;
        let i = Object.fromEntries(
            Object.entries(r).filter(
              ([e]) => !e.startsWith(`registration_emailed_`),
            ),
          ),
          a = [];
        for (let [t, o] of n.selections)
          a.push({
            gid: e.gidClanEvent,
            group_id: t,
            session_id: o,
            guest_count: r.guests_registered ?? 1,
            jsondata: JSON.stringify(i),
            skip_email: !1,
          });
        for (let t of n.registrations.keys())
          n.selections.has(t) ||
            a.push({
              gid: e.gidClanEvent,
              group_id: t,
              session_id: 0,
              guest_count: 0,
              jsondata: JSON.stringify({}),
              skip_email: !1,
            });
        let o = !0;
        for (let e = 0; e < a.length; e++) {
          let t = await Wt({ ...a[e], skip_email: e != a.length - 1 });
          o &&= t == 1;
        }
        return (
          t.setQueryData(ga(e.gidClanEvent, e.userAccountID), null),
          await t.invalidateQueries({
            queryKey: ha(e.gidClanEvent, e.userAccountID),
          }),
          o
        );
      },
    });
  return r;
}
var Ra = `W-F7GLCqlcg-`,
  za = `bilOH9M934k-`,
  Ba = `agQ2BkMSeCM-`,
  Va = `_9pkUjSUWRSQ-`,
  Ha = `BCyPVJOGhgM-`,
  Ua = `JpmP7DWHpp0-`,
  Wa = `q8jAq4KzxAM-`,
  Ga = `deh5s-2tc5M-`,
  Ka = `mQfwtw56WrA-`,
  qa = `S1RYAnxBfII-`,
  Ja = `B3xO2i-k6cM-`,
  Ya = `nZIJPOo7vBM-`,
  Xa = `nbc1xcxJWEU-`,
  Za = `lC5ou-9b3nc-`,
  Qa = `OUTrt07mRK4-`,
  $a = `kZyobSpKcm8-`,
  eo = `Q2G049jKL5A-`,
  to = `FvT0LzOkuOg-`,
  no = `R5xCQ-5jSoc-`,
  ro = `RRmxXSqY2J4-`,
  io = `OEZsEKTEoHM-`,
  ao = `pZUqA-PH2Go-`,
  oo = `_5FwT-TqGtrc-`,
  so = `wO3Xgsj1Sm0-`,
  co = `gBWKuzZ3gZU-`,
  lo = `AmH6OYf5Hbw-`,
  uo = [];
function fo(e) {
  let {
      eventModel: t,
      fnConfirm: n,
      fnHideModal: r,
      nMaxPerTeam: i,
      bAddingOrChangingSessions: a,
    } = e,
    s = S(f.LANGUAGE),
    [c, l] = K.useState({}),
    [u, d] = K.useState(!1),
    p = K.useCallback(
      (e) => {
        l({ ...c, ...e });
      },
      [c],
    ),
    m = It(t.clanSteamID.GetAccountID(), t.GID ?? ``, o.accountid),
    { data: h } = Ht(o.accountid),
    g = h?.realname ?? ``,
    _ = h?.email ?? ``,
    v = h?.partners ?? uo,
    [y, b] = K.useState(void 0),
    [x, C] = K.useState(void 0),
    w = K.useMemo(() => {
      let e = [];
      return (
        x ?? e.push({ data: void 0, label: I(`#MeetSteam_ChoosePartner`) }),
        e.push(
          ...v.map((e, t) => ({ data: e.partnerid, label: e.partner_name })),
        ),
        e.push({ data: 0, label: I(`#MeetSteam_ChoosePartnerOther`) }),
        e
      );
    }, [v, x]);
  K.useEffect(() => {
    if (!m.isSuccess) return;
    let e = v.find((e) => e.partnerid == m.data.partner_id),
      t = m.data.partner_id === 0 ? 0 : e?.partnerid;
    C(t), b(t), l(m.data);
  }, [m.isSuccess, m.data, v]);
  let T = v?.length > 0,
    E = !T || x != null,
    D = E && x === 0;
  K.useEffect(() => {
    if (x == y || (b(x), !T || !E)) return;
    let e,
      t = v.find((e) => e.partnerid == x);
    (e =
      D || !t
        ? {
            name: _?.length > 0 ? g : void 0,
            email_override: _?.length > 0 ? _ : void 0,
            partner_id: 0,
          }
        : {
            name:
              t.partneruserrealname?.length > 0
                ? t.partneruserrealname
                : void 0,
            company: t.partner_name?.length > 0 ? t.partner_name : void 0,
            email_override:
              t.partneruseremail?.length > 0 ? t.partneruseremail : void 0,
            partner_id: t.partnerid,
          }),
      Object.values(e).some((e) => e != null) && p(po(e));
  }, [E, D, T, x, y, v, _, g, p]);
  let O = m.isLoading || u,
    k = a
      ? I(`#MeetSteam_Register_title`, t.GetNameWithFallback(s) ?? ``)
      : I(`#MeetSteam_Unregister_title`),
    ee =
      !a ||
      (E &&
        !!c.name &&
        (!c.guest_names || c.guest_names.every((e) => e.length > 0)) &&
        !!c.email_override &&
        !!c.company);
  return (0, q.jsxs)(V, {
    active: !0,
    children: [
      O &&
        (0, q.jsx)(We, {
          "aria-label": I(u ? `#Saving` : `#Loading`),
          bOKDisabled: !0,
          bHideCloseIcon: !0,
          onCancel: () => !1,
          children: (0, q.jsx)(H, {
            size: `medium`,
            position: `center`,
            string: I(u ? `#Saving` : `#Loading`),
          }),
        }),
      !O &&
        (0, q.jsx)(Be, {
          strTitle: k,
          onCancel: r,
          bOKDisabled: !ee,
          onOK: async () => {
            d(!0), await n(c), d(!1), m.refetch(), r();
          },
          children:
            a &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`div`, { children: I(`#MeetSteam_Reg_Intro`) }),
                (0, q.jsx)(`br`, {}),
                T &&
                  (0, q.jsx)(Pe, {
                    label: I(`#MeetSteam_Reg_Preset`),
                    tooltip: I(`#MeetSteam_Reg_Preset_ttip`),
                    rgOptions: w,
                    selectedOption: x,
                    onChange: (e) => C(e.data),
                  }),
                E &&
                  (0, q.jsxs)(q.Fragment, {
                    children: [
                      (0, q.jsx)(N, {
                        type: `text`,
                        label: I(`#MeetSteam_Reg_Name`),
                        value: c.name || ``,
                        onChange: (e) => p({ name: e.currentTarget.value }),
                      }),
                      (0, q.jsx)(N, {
                        type: `text`,
                        label: I(`#MeetSteam_Reg_Email`),
                        value: c.email_override || ``,
                        mustBeEmail: !0,
                        onChange: (e) =>
                          p({ email_override: e.currentTarget.value }),
                      }),
                      (0, q.jsx)(N, {
                        type: `text`,
                        label: I(`#MeetSteam_Reg_Company`),
                        value: c.company || ``,
                        onChange: (e) => p({ company: e.currentTarget.value }),
                      }),
                      (0, q.jsx)(N, {
                        type: `text`,
                        label: I(`#MeetSteam_Reg_Game`),
                        value: c.game || ``,
                        onChange: (e) => p({ game: e.currentTarget.value }),
                      }),
                      i > 0 &&
                        (0, q.jsx)(Pe, {
                          label: I(`#MeetSteam_Reg_GuestCount`),
                          tooltip: I(`#MeetSteam_Reg_GuestCount_ttip`),
                          rgOptions: Array.from({ length: i + 1 }).map(
                            (e, t) => ({ data: t, label: t }),
                          ),
                          selectedOption: (c.guests_registered ?? 1) - 1,
                          onChange: (e) => {
                            let t = c.guest_names ?? [];
                            p({
                              guests_registered: e.data + 1,
                              guest_names:
                                t.length > e.data
                                  ? t.slice(0, e.data)
                                  : ne(t, e.data, ``),
                            });
                          },
                        }),
                      (c.guests_registered ?? 0) > 1 &&
                        (0, q.jsxs)(`div`, {
                          children: [
                            (0, q.jsx)(`div`, {
                              children: I(`#MeetSteam_Reg_Others`),
                            }),
                            (0, q.jsx)(`br`, {}),
                            (c.guest_names ?? []).map((e, t) =>
                              (0, q.jsx)(
                                N,
                                {
                                  type: `text`,
                                  label: I(`#MeetSteam_Reg_Others_name`),
                                  value: e,
                                  onChange: (e) => {
                                    let n = [...(c.guest_names ?? [])];
                                    (n[t] = e.currentTarget.value),
                                      p({ guest_names: n });
                                  },
                                },
                                `guesname_` + t,
                              ),
                            ),
                          ],
                        }),
                      (0, q.jsx)(mo, {
                        eventModel: t,
                        oReg: c,
                        fnUpdateRegistration: p,
                      }),
                    ],
                  }),
              ],
            }),
        }),
    ],
  });
}
function po(e) {
  return Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0));
}
function mo(e) {
  let { eventModel: t, oReg: n, fnUpdateRegistration: r } = e,
    i = Na(t.jsondata.meet_steam_groups ?? [], 2);
  return !i || i.length == 0
    ? null
    : (0, q.jsxs)(`div`, {
        children: [
          (0, q.jsx)(`h3`, { children: I(`#MeetSteam_Reg_Question_title`) }),
          (0, q.jsx)(`p`, { children: I(`#MeetSteam_Reg_Question_desc`) }),
          i.map((e) => {
            let i = t.jsondata.meet_steam_groups?.find((t) => t.group_id == e);
            return i
              ? (0, q.jsx)(
                  ho,
                  {
                    groupInfo: i,
                    oReg: n,
                    fnUpdateText: (t) => {
                      let i = n.pre_event_partner_questions
                          ? [...n.pre_event_partner_questions]
                          : [],
                        a = i.findIndex((t) => t.group_id == e);
                      a < 0
                        ? i.push({ group_id: e, question: t })
                        : (i[a] = { group_id: e, question: t }),
                        r({ pre_event_partner_questions: i });
                    },
                  },
                  `groupquestion` + e,
                )
              : null;
          }),
        ],
      });
}
function ho(e) {
  let { fnUpdateText: n, groupInfo: r, oReg: i } = e,
    a = S(f.LANGUAGE),
    [o, s] = L(() => [
      M.GetWithFallback(r.localized_session_title, a) ?? ``,
      i.pre_event_partner_questions?.find((e) => e.group_id == r.group_id)
        ?.question || ``,
    ]);
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsx)(he, { children: o }),
      (0, q.jsx)(`div`, {
        className: `DialogInput_Wrapper`,
        children: (0, q.jsx)(`textarea`, {
          value: s,
          className: t(`DialogTextInputBase`, `_DialogInputContainer`),
          cols: 80,
          rows: 3,
          placeholder: I(`#MeetSteam_Reg_Question_placeholder`),
          onChange: (e) => n(e.currentTarget.value),
        }),
      }),
    ],
  });
}
function go(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = U(e.args, `group_id`),
    i = Number.parseInt(r),
    a = L(() => Eo(t, i));
  if (!a || !t)
    return n
      ? (0, q.jsxs)(`div`, {
          children: [`Failed to find session group id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != Et())
    return n
      ? (0, q.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let s = qi(e.context.bbcode, i),
    c = Ji(e.context.bbcode, `meetsteamsessiongroup`, i);
  return (0, q.jsxs)(ba, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: o.accountid,
    children: [
      s && (0, q.jsx)(_o, { eventModel: t }),
      (0, q.jsx)(yo, { groupData: a, eventModel: t }),
      (0, q.jsx)(To, { eventModel: t, bIsLast: c }),
    ],
  });
}
function _o(e) {
  let { eventModel: t } = e;
  return Ma()
    ? (0, q.jsx)(vo, { eventModel: t, accountID: o.accountid })
    : null;
}
function vo(e) {
  let { eventModel: t, accountID: n } = e,
    r = Vt(t.GID ?? ``, n);
  return (0, q.jsx)(`div`, {
    children:
      !!r &&
      (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)(`div`, { children: I(`#MeetSteam_QR_CheckIn`) }),
          (0, q.jsx)(`img`, { src: r, alt: `` }),
        ],
      }),
  });
}
function yo(e) {
  let { groupData: t, eventModel: n } = e,
    r = Tn(),
    i = Xi(),
    a = Aa(),
    s = Rt(n.clanSteamID.GetAccountID(), n.GID ?? ``),
    c = (0, K.useMemo)(
      () =>
        t?.sessions &&
        [...t.sessions].sort(
          (e, t) => (e.rtime_start ?? 0) - (t.rtime_start ?? 0),
        ),
      [t?.sessions],
    ),
    { elLogInDialog: l, fnRequireLogIn: u } = Oo(),
    d = $(),
    f = L(() =>
      c?.reduce((e, n) => e.set(n.id ?? 0, wa(d, t.group_id, n.id)), new Map()),
    ),
    p = Ia(),
    m = It(n.clanSteamID.GetAccountID(), n.GID ?? ``, o.accountid),
    h = m.isSuccess && !!m.data.allow_registration_if_full,
    g = s.data;
  if (s.isError)
    return (0, q.jsx)(`div`, {
      children: I(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (!g || (a && o.accountid))
    return (0, q.jsx)(H, {
      size: `medium`,
      position: `center`,
      string: I(`#Loading`),
    });
  let _ = (e) => p(t.group_id, e),
    v = t.group_visibility_tokens ?? [],
    y = i !== null && v.includes(i);
  return v.length > 0 && !y && !r
    ? null
    : (0, q.jsxs)(bo, {
        groupData: t,
        children: [
          c?.map((e, n) => {
            let r = g.find(
                (n) => n.group_id === t.group_id && n.session_id === e.id,
              ),
              i = f?.get(e.id ?? 0),
              a = n + 1 < c.length;
            return (0, q.jsxs)(
              K.Fragment,
              {
                children: [
                  (0, q.jsx)(`div`, {
                    className: Ga,
                    children: (0, q.jsx)(So, {
                      sessionData: e,
                      onClick: () => u(() => _(e.id)),
                      nGuestReservations: r?.guest_count || 0,
                      eRegistrationStatus: i,
                      bAllowedToRegisterIfFull: h,
                    }),
                  }),
                  a && (0, q.jsx)(wo, {}),
                ],
              },
              `timecol_` + t.group_id + `_` + e.id,
            );
          }),
          l,
        ],
      });
}
function bo(e) {
  let { groupData: n, children: r } = e,
    i = S(f.LANGUAGE),
    a = M.GetWithFallback(n?.localized_session_title, i),
    o = M.GetWithFallback(n?.localized_session_description, i),
    s = M.GetWithFallback(n?.localized_intended_audience, i),
    c = M.GetWithFallback(n?.localized_sesssion_faq, i),
    l = Tn(),
    [u, d] = (0, K.useState)(!1);
  return n
    ? (0, q.jsxs)(`div`, {
        className: t({
          [Ra]: !0,
          [Ba]: !1,
          [za]: l && (n.group_visibility_tokens?.length ?? 0) > 0,
        }),
        children: [
          !!a && (0, q.jsx)(`div`, { className: `_9pkUjSUWRSQ-`, children: a }),
          !!o && (0, q.jsx)(`div`, { className: `_44vexuSzOpI-`, children: o }),
          !!s &&
            (0, q.jsx)(`div`, {
              className: `Z3-m6-rkasQ-`,
              children: I(`#MeetSteam_Session_Audience`, s ?? ``),
            }),
          (0, q.jsx)(`div`, { className: Ua, children: r }),
          !!c &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsxs)(`div`, {
                  className: `kWmpNwJ92-k-`,
                  children: [
                    (0, q.jsx)(da, { bExpanded: u, setExpanded: d }),
                    (0, q.jsx)(`div`, { children: I(`#MeetSteam_FAQ`) }),
                  ],
                }),
                u &&
                  (0, q.jsx)(`div`, {
                    className: `jvyIIEyjFZw-`,
                    children: (0, q.jsx)(vt, { text: c ?? `` }),
                  }),
              ],
            }),
        ],
      })
    : null;
}
function xo(e, t, n, r) {
  let i = n || (e === 0 && t > 0) || e === 1 || e === 2 || e === 3,
    a = null,
    o = null;
  return (
    e == 1
      ? ((a = I(`#MeetSteam_Registered`)), (o = Qa))
      : e == 2
        ? ((a = I(`#MeetSteam_Registering`)), (o = Za))
        : e == 3
          ? ((a = I(`#MeetSteam_Unegistering`)), (o = eo))
          : r && ((a = I(`#MeetSteam_Already`)), (o = $a)),
    { bEnabled: i, strStatusClass: o, strStatusToken: a }
  );
}
function So(e) {
  let {
      sessionData: n,
      onClick: r,
      nGuestReservations: i,
      eRegistrationStatus: a = 0,
      bAllowedToRegisterIfFull: o,
    } = e,
    s = L(() => n.max_capacity ?? 0),
    c = Math.max(0, s - (i || 0)),
    { strStatusClass: l, strStatusToken: u, bEnabled: d } = xo(a, c, !!o),
    { sDisplayTimeZone: f, rtime_start: p, rtime_end: m } = Lt(n),
    h = Ut(p ?? 0, f),
    g = Bt(p ?? 0, m ?? 0, f);
  return (0, q.jsx)(q.Fragment, {
    children: (0, q.jsxs)(`div`, {
      className: t(Ka, l),
      children: [
        (0, q.jsx)(`div`, {
          className: to,
          children: (0, q.jsx)(`span`, { children: u }),
        }),
        (0, q.jsxs)(`button`, {
          className: t(Ja, qa),
          disabled: !d,
          onClick: r,
          children: [
            (0, q.jsx)(`div`, { className: Ya, children: h }),
            (0, q.jsx)(`div`, { className: Xa, children: g }),
          ],
        }),
        (0, q.jsx)(Co, { nAvailableSpace: c, bAllowedToRegisterIfFull: o }),
      ],
    }),
  });
}
function Co(e) {
  let { nAvailableSpace: t, bAllowedToRegisterIfFull: n } = e;
  return (0, q.jsx)(q.Fragment, {
    children:
      n ||
      (0, q.jsxs)(q.Fragment, {
        children: [
          ` `,
          t < 1
            ? (0, q.jsx)(`div`, {
                className: `oojf8t--dHM-`,
                children: I(`#MeetSteam_SoldOut`),
              })
            : (0, q.jsx)(`div`, {
                className: `LG2AAuUnr-g-`,
                children: Oe(`#MeetSteam_Spot`, t.toLocaleString(it())),
              }),
          ` `,
        ],
      }),
  });
}
function wo() {
  return (0, q.jsx)(`div`, { className: Wa, children: `◆` });
}
function To(e) {
  let { eventModel: n, bIsLast: r } = e,
    [i, a] = K.useState(!1),
    [o, s] = K.useState(!1),
    c = Rt(n.clanSteamID.GetAccountID(), n.GID ?? ``),
    [l, u, d] = j(),
    { elLogInDialog: f, fnRequireLogIn: p } = Oo(),
    m = La(),
    h = async (e) => {
      a(!0), (await m(e)) || u(), c.refetch(), a(!1);
    },
    g = Aa(),
    _ = i || g,
    v = ja(),
    y = $(),
    b = Oa(y),
    x = ka(y),
    S = L(() =>
      Ca(y).reduce((e, t) => {
        let r = Eo(n, t),
          i = Sa(y, r?.group_id),
          a = r?.sessions?.find((e) => e.id == i)?.max_per_team ?? 0;
        return Math.max(e, a);
      }, 1),
    );
  return (
    la(v, I(`#EventEditor_UnsavedChanges`)),
    (0, q.jsxs)(`div`, {
      className: t(no, r && v && `_1Uk08Y71bw4-`),
      children: [
        (0, q.jsx)(`p`, {
          children: I(
            x
              ? `#MeetSteam_UpdateRegistration_Desc`
              : `#MeetSteam_CompleteRegistration_Desc`,
          ),
        }),
        r &&
          (0, q.jsxs)(q.Fragment, {
            children: [
              !_ &&
                (0, q.jsx)(F, {
                  disabled: !v,
                  onClick: () => p(() => s(!0)),
                  children: I(
                    x
                      ? `#MeetSteam_UpdateRegistration`
                      : `#MeetSteam_CompleteRegistration`,
                  ),
                }),
              _ &&
                (0, q.jsx)(H, {
                  size: `small`,
                  position: `center`,
                  string: I(`#Saving`),
                }),
              o &&
                (0, q.jsx)(fo, {
                  eventModel: n,
                  fnConfirm: h,
                  fnHideModal: () => s(!1),
                  nMaxPerTeam: S,
                  bAddingOrChangingSessions: b,
                }),
              l &&
                (0, q.jsx)(V, {
                  active: !0,
                  children: (0, q.jsx)(Fe, {
                    strTitle: I(`#Error_Generic`),
                    strDescription: I(`#MeetSteam_RegistrationFailed`),
                    closeModal: d,
                  }),
                }),
              f,
            ],
          }),
      ],
    })
  );
}
function Eo(e, t) {
  return (e?.jsondata?.meet_steam_groups || [])?.find((e) => e.group_id == t);
}
function Do(e, t) {
  return (e?.jsondata?.meet_steam_schedules || [])?.find(
    (e) => e.schedule_id == t,
  );
}
function Oo() {
  let { elDialogElement: e, fnShowLogonDialog: t } = Ye(
    I(`#EventDisplay_Share_NotLoggedIn_Description`),
  );
  return {
    elLogInDialog: e,
    fnRequireLogIn: (e) => {
      o.logged_in ? e() : t();
    },
  };
}
function ko(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = U(e.args, `schedule_id`),
    i = Number.parseInt(r),
    a = L(() => Do(t, i));
  if (!a || !t)
    return n
      ? (0, q.jsxs)(`div`, {
          children: [`Failed to find session schedule id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != Et())
    return n
      ? (0, q.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let s = Ji(e.context.bbcode, `meetsteamscheduleview`, i);
  return (0, q.jsxs)(ba, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: o.accountid,
    children: [
      (0, q.jsx)(Ao, { scheduleData: a, eventModel: t }),
      (0, q.jsx)(To, { eventModel: t, bIsLast: s }),
    ],
  });
}
function Ao(e) {
  let { eventModel: t } = e,
    n = Ia(),
    r = Aa(),
    i = Rt(t.clanSteamID.GetAccountID(), t.GID ?? ``),
    a = It(t.clanSteamID.GetAccountID(), t.GID ?? ``, o.accountid),
    s = i.data;
  return i.isError
    ? (0, q.jsx)(`div`, { children: I(`#Error_ErrorCommunicatingWithNetwork`) })
    : !s || (r && o.accountid)
      ? (0, q.jsx)(H, {
          size: `medium`,
          position: `center`,
          string: I(`#Loading`),
        })
      : (0, q.jsx)(jo, {
          ...e,
          fnOnClick: n,
          rgAvailability: s,
          bAllowedToRegisterIfFull: a.data?.allow_registration_if_full,
        });
}
function jo(e) {
  let {
      eventModel: t,
      scheduleData: n,
      bAllowedToRegisterIfFull: r,
      fnOnClick: i,
      rgAvailability: a,
    } = e,
    o = En(),
    s = Xi(),
    c = nt(),
    [l, u, d] = L(() => [
      t.jsondata.meet_steam_groups,
      n.in_person_time_zone ?? `America/Los_Angeles`,
      n.location_type,
    ]),
    [f, p, m] = (0, K.useMemo)(() => {
      if (!l) return [new Map(), new Map(), []];
      let e = new Map(),
        t = new Map();
      for (let t of l) {
        let n = t.group_visibility_tokens ?? [],
          r = s !== null && n.includes(s);
        if (!(n.length > 0 && !r && !o))
          for (let n of t.sessions) {
            let r = (
                d == `in_person`
                  ? X.default.unix(n.rtime_start ?? 0).tz(u)
                  : X.default.unix(n.rtime_start ?? 0).tz(c)
              ).format(`YYYY-MM-DD`),
              i = e.get(r);
            i || ((i = []), e.set(r, i)), i.push({ group: t, session: n });
          }
      }
      for (let e of n.session_breaks || []) {
        let n = (
            d == `in_person`
              ? X.default.unix(e.rtime_start ?? 0).tz(u)
              : X.default.unix(e.rtime_start ?? 0).tz(c)
          ).format(`YYYY-MM-DD`),
          r = t.get(n);
        r || ((r = []), t.set(n, r)), r.push(e);
      }
      for (let t of e.values())
        t.sort(
          (e, t) => (e.session.rtime_start ?? 0) - (t.session.rtime_start ?? 0),
        );
      return [e, t, Array.from(e.keys()).sort()];
    }, [l, s, o, d, u, c, n.session_breaks]);
  return l
    ? (0, q.jsx)(q.Fragment, {
        children: m.map((e) => {
          let t = f.get(e);
          return (0, q.jsx)(
            `div`,
            {
              className: ro,
              children: (0, q.jsx)(Mo, {
                scheduleData: n,
                bAllowedToRegisterIfFull: !!r,
                fnOnClick: i,
                rgDayGroupSessions: t ?? [],
                rgBreakSessions: p.get(e) || [],
                rgAvailability: a ?? [],
              }),
            },
            `day_` + e,
          );
        }),
      })
    : (0, q.jsx)(`div`, {
        children: `No Meet Steam Events; please create some first.`,
      });
}
function Mo(e) {
  let {
      scheduleData: t,
      rgDayGroupSessions: n,
      rgBreakSessions: r,
      bAllowedToRegisterIfFull: i,
      fnOnClick: a,
      rgAvailability: o,
    } = e,
    s = (0, K.useMemo)(() => {
      let e = [];
      for (let t of n)
        e.length == 0 ||
        e[e.length - 1][0].session.rtime_start != t.session.rtime_start
          ? e.push([t])
          : e[e.length - 1].push(t);
      return e;
    }, [n]),
    { sDisplayTimeZone: c, rtime_start: l } = Lt(n[0].session),
    u = Ut(l ?? 0, c);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(`h2`, { className: io, children: u }),
      r
        .filter((e) => (e.rtime_end ?? 0) <= (s[0][0].session.rtime_start ?? 0))
        .map((e) =>
          (0, q.jsx)(
            No,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
      s.map((e, n) => {
        let c = [];
        if (n + 1 < s.length) {
          let t = e[0].session.rtime_start ?? 0,
            i = s[n + 1][0].session.rtime_end ?? 0;
          c = r.filter(
            (e) => t < (e.rtime_start ?? 0) && (e.rtime_end ?? 0) < i,
          );
        }
        return (0, q.jsxs)(
          K.Fragment,
          {
            children: [
              (0, q.jsx)(Po, {
                bAllowedToRegisterIfFull: i,
                fnOnClick: a,
                scheduleData: t,
                rgSlotSessions: e,
                rgAvailability: o,
              }),
              c.map((e) =>
                (0, q.jsx)(
                  No,
                  { scheduleData: t, breakSession: e },
                  `breaks_${t.schedule_id}_${e.break_id}`,
                ),
              ),
            ],
          },
          `start_` + e[0].session.rtime_start,
        );
      }),
      r
        .filter(
          (e) =>
            (e.rtime_start ?? 0) >= (s[s.length - 1][0].session.rtime_end ?? 0),
        )
        .map((e) =>
          (0, q.jsx)(
            No,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
    ],
  });
}
function No(e) {
  let { scheduleData: t, breakSession: n } = e,
    r = S(f.LANGUAGE),
    i = L(() => M.GetWithFallback(n.localized_break_description, r) ?? ``),
    a = L(() => ({
      rtime_start: n.rtime_start,
      rtime_end: n.rtime_end,
      location_type: t.location_type,
      in_person_time_zone: t.in_person_time_zone,
    }));
  return (0, q.jsxs)(`div`, {
    className: ao,
    children: [
      (0, q.jsx)(Fo, { session: a }),
      (0, q.jsx)(`div`, { children: i }),
    ],
  });
}
function Po(e) {
  let {
    scheduleData: t,
    rgSlotSessions: n,
    bAllowedToRegisterIfFull: r,
    fnOnClick: i,
    rgAvailability: a,
  } = e;
  return (0, q.jsxs)(`div`, {
    className: ao,
    children: [
      (0, q.jsx)(Fo, { session: n[0].session }),
      (0, q.jsx)(`div`, {
        className: co,
        children: n.map((e) =>
          (0, q.jsx)(
            Io,
            {
              bAllowedToRegisterIfFull: r,
              fnOnClick: i,
              session: e,
              rgAvailability: a,
            },
            `entry_${e.group.group_id}_${e.session.id}`,
          ),
        ),
      }),
    ],
  });
}
function Fo(e) {
  let { session: t } = e,
    { sDisplayTimeZone: n, rtime_start: r, rtime_end: i } = Lt(t),
    a = Ut(r ?? 0, n),
    o = Bt(r ?? 0, i ?? 0, n);
  return (0, q.jsxs)(`div`, {
    className: oo,
    children: [
      (0, q.jsx)(`div`, { children: o }),
      (0, q.jsx)(`div`, { className: so, children: a }),
    ],
  });
}
function Io(e) {
  let {
      session: n,
      bAllowedToRegisterIfFull: r,
      fnOnClick: i,
      rgAvailability: a,
    } = e,
    o = S(f.LANGUAGE),
    [s, c, l, u] = L(() => [
      M.GetWithFallback(n.group.localized_session_title, o) ?? ``,
      M.GetWithFallback(n.group.localized_intended_audience, o) ?? ``,
      M.GetWithFallback(n.group.localized_sesssion_faq, o) ?? ``,
      M.GetWithFallback(n.group.localized_session_description, o) ?? ``,
    ]),
    [d, p, m] = j(!1),
    h = $(),
    [g, _, v] = L(() => [
      wa(h, n.group.group_id, n.session.id),
      Ta(h, n.group.group_id, n.session.id),
      Ea(h, n.group.group_id),
    ]),
    y = a?.find(
      (e) => e.group_id === n.group.group_id && e.session_id === n.session.id,
    )?.guest_count,
    b = Math.max(0, (n.session.max_capacity ?? 0) - (y || 0)),
    { strStatusClass: x, strStatusToken: C, bEnabled: w } = xo(g, b, r, _),
    T = _ && v ? n.group.sessions.find((e) => e.id == v)?.rtime_start : void 0;
  return (0, q.jsx)(je, {
    toolTipContent: T ? I(`#MeetSteam_AlreadyReg`, _e(T), ve(T)) : void 0,
    children: (0, q.jsxs)(`div`, {
      className: t(Ka, x),
      children: [
        (0, q.jsx)(`div`, {
          className: to,
          children: (0, q.jsx)(`span`, { children: C }),
        }),
        (0, q.jsxs)(`div`, {
          className: qa,
          children: [
            (0, q.jsx)(`div`, { className: Va, children: s }),
            c &&
              (0, q.jsx)(`div`, {
                className: `Z3-m6-rkasQ-`,
                children: I(`#MeetSteam_Session_Audience`, c),
              }),
            (0, q.jsx)(`button`, {
              type: `button`,
              className: Ha,
              onClick: p,
              children: I(`#MeetSteam_Session_Details`),
            }),
            (0, q.jsx)(`div`, {
              className: lo,
              children: (0, q.jsx)(P, {
                onClick: () => {
                  i && i(n.group.group_id, n.session.id);
                },
                disabled: !w,
                children: I(g == 1 ? `#Button_Unselect` : `#Button_Select`),
              }),
            }),
          ],
        }),
        (0, q.jsx)(Co, { nAvailableSpace: b, bAllowedToRegisterIfFull: r }),
        (0, q.jsx)(V, {
          active: d,
          children: (0, q.jsxs)(Be, {
            strTitle: s,
            bAlertDialog: !0,
            bAllowFullSize: !0,
            closeModal: m,
            children: [
              (0, q.jsx)(`div`, { children: c }),
              (0, q.jsx)(`div`, { children: u }),
              !!l &&
                (0, q.jsxs)(q.Fragment, {
                  children: [
                    (0, q.jsx)(`div`, { children: I(`#MeetSteam_FAQ`) }),
                    (0, q.jsx)(vt, { text: l }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Lo(e) {
  let t = Number.parseInt(U(e.args, `id`)) || 0,
    n = (U(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = e.context.showErrorInfo,
    i = et(t),
    { data: a, isPending: o } = Ke(i);
  if (!t)
    return r
      ? (0, q.jsx)(`div`, { children: `Error: PackageID Not Set` })
      : null;
  if (o) return null;
  let s =
    a?.success == 1
      ? !!(a.visible && a.best_purchase_option)
      : !a?.unvailable_for_country_restriction;
  return (!s && !n) || (s && n)
    ? (0, q.jsx)(q.Fragment, { children: e.children })
    : null;
}
function Ro() {
  return y(
    {
      exportFn: void 0,
      file: void 0,
      dataURL: void 0,
      uploadFileName: ``,
      displayFileName: void 0,
      sha1: ``,
      hmac: ``,
      timestamp: 0,
      imageWidth: 0,
      imageHeight: 0,
      fileInfo: void 0,
      uploadInfo: void 0,
      eUploadState: 0,
      uploadProgress: 0,
      strErrorDescription: void 0,
    },
    {
      exportFn: !1,
      file: u.ref,
      uploadFileName: !1,
      displayFileName: !1,
      sha1: !1,
      hmac: !1,
      timestamp: !1,
      fileInfo: !1,
      uploadInfo: !1,
    },
  );
}
var zo = class {
  m_Callbacks;
  m_fileUploadProps = Ro();
  m_onComplete;
  constructor(e) {
    ee(this, {
      SetUploadFileError: w,
      StartFileExportToUpload: w,
      SetImageFileToUpload: w,
      SetOtherFileToUpload: w,
      SetFileToUpload: w,
      RetryFileUpload: w,
      BeginFileUpload: w,
      DoFileUpload: w,
      CommitFileUpload: w,
      ClearFileUploadError: w,
      Reset: w,
    }),
      (this.m_Callbacks = e);
  }
  get file_upload_props() {
    return this.m_fileUploadProps;
  }
  get file_upload_data_url() {
    return this.m_fileUploadProps.dataURL;
  }
  get file() {
    return this.m_fileUploadProps.file;
  }
  LogFileUploadMessage(e) {
    this.m_Callbacks.LogFileUploadMessage &&
      this.m_Callbacks.LogFileUploadMessage(e);
  }
  SetUploadFileError(e, t) {
    (this.m_fileUploadProps.eUploadState = e),
      (this.m_fileUploadProps.strErrorDescription = t),
      (this.m_fileUploadProps.displayFileName = void 0);
  }
  async StartFileExportToUpload(e, t = {}) {
    let { displayFilename: n, info: r, onComplete: i } = t;
    (this.m_fileUploadProps.eUploadState = 7),
      (this.m_fileUploadProps.uploadProgress = 0),
      (this.m_onComplete = i),
      (this.m_fileUploadProps.fileInfo = r),
      this.SetFileToUpload(e),
      (this.m_fileUploadProps.displayFileName = n);
  }
  async SetImageFileToUpload(e, t = {}) {
    let { processor: n = Bo, info: r } = t;
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = r;
    let i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        I(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          i,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let a = [
        `jpg`,
        `jpeg`,
        `png`,
        `gif`,
        `webm`,
        `mpg`,
        `mp4`,
        `mpeg`,
        `ogv`,
        `webp`,
        `avif`,
      ],
      o = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (a.indexOf(o) == -1) {
      let e = o || i;
      this.SetUploadFileError(
        5,
        I(`#Chat_Settings_Error_ChatUploadFileTypeNotSupported`, e),
      );
      return;
    }
    let s = await n(e);
    this.SetFileToUpload(s.file),
      (this.m_fileUploadProps.imageHeight = s.height),
      (this.m_fileUploadProps.imageWidth = s.width);
  }
  async SetOtherFileToUpload(e, t = {}) {
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = t.info;
    let n = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        I(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          n,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let r = [`zip`],
      i = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (r.indexOf(i) == -1) {
      let e = i || n;
      this.SetUploadFileError(5, I(`#Chat_Settings_Error_FileTypeNotZip`, e));
    } else this.SetFileToUpload(e);
  }
  SetFileToUpload(e) {
    if (
      ((this.m_fileUploadProps.file = void 0),
      (this.m_fileUploadProps.dataURL = void 0),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.sha1 = ``),
      (this.m_fileUploadProps.imageWidth = 0),
      (this.m_fileUploadProps.imageHeight = 0),
      (this.m_fileUploadProps.displayFileName = void 0),
      !e)
    ) {
      this.m_fileUploadProps.eUploadState = 0;
      return;
    }
    let t = ``;
    if (typeof e == `function`)
      (this.m_fileUploadProps.file = void 0),
        (this.m_fileUploadProps.exportFn = e);
    else {
      (this.m_fileUploadProps.file = e),
        (this.m_fileUploadProps.exportFn = void 0);
      try {
        t = URL.createObjectURL(e);
      } catch (e) {
        console.error(`Failed to created object URL from file: ${e}`);
      }
      (this.m_fileUploadProps.displayFileName =
        this.m_fileUploadProps.file.name),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + this.m_fileUploadProps.file.name);
    }
    this.m_fileUploadProps.eUploadState = 1;
    let n = ``;
    for (; n.length < 40; ) n += Math.floor(Math.random() * 16).toString(16);
    (this.m_fileUploadProps.dataURL = t),
      (this.m_fileUploadProps.sha1 = n),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.timestamp = 0);
  }
  async RetryFileUpload() {
    return this.BeginFileUpload();
  }
  async BeginFileUpload(t) {
    if (
      ((this.m_fileUploadProps.uploadProgress = 0),
      this.m_fileUploadProps.exportFn)
    ) {
      this.m_fileUploadProps.eUploadState = 7;
      let { eResult: e, file: t } = await this.m_fileUploadProps.exportFn(
        (e) => {
          d(() => {
            this.m_fileUploadProps.uploadProgress = e * 0.5;
          });
        },
      );
      if (e != 1 || !t)
        return (
          this.SetUploadFileError(3, I(`#Chat_Settings_Error_ExportFailed`)),
          new Response()
        );
      (this.m_fileUploadProps.file = t),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + t.name);
    }
    let n = this.m_fileUploadProps.file;
    if (!n)
      throw (
        (e(!1, `Must SetImageFileToUpload before calling BeginFileUpload`),
        Error(`Invalid State`))
      );
    (this.m_fileUploadProps.eUploadState = 2),
      (this.m_fileUploadProps.uploadInfo = t);
    let r = new FormData();
    r.append(`sessionid`, g()),
      r.append(`l`, f.LANGUAGE),
      r.append(`file_size`, n.size.toString()),
      r.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      r.append(`file_sha`, this.m_fileUploadProps.sha1),
      r.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      r.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      r.append(`file_type`, n.type),
      this.m_Callbacks.PopulateBeginFileUploadFormData &&
        this.m_Callbacks.PopulateBeginFileUploadFormData(
          r,
          this.file_upload_props.uploadInfo,
          this.file_upload_props.fileInfo,
        );
    try {
      let e = await fetch(
          this.m_Callbacks.GetBeginFileUploadURL() + `?l=${f.LANGUAGE}`,
          { method: `POST`, body: r, credentials: `include` },
        ),
        t;
      try {
        t = await e.json();
      } catch {}
      if (!e.ok) {
        let n = ``;
        throw (
          (d(() => {
            (this.m_fileUploadProps.eUploadState = 3),
              this.LogFileUploadMessage(e),
              (n = t?.message
                ? t?.message
                : I(`#Chat_Settings_Error_ServerError`)),
              (this.m_fileUploadProps.strErrorDescription = I(
                `#Chat_Upload_ErrorStart`,
                n,
              ));
          }),
          n)
        );
      }
      if (!t || !t.result) throw Error();
      return (
        (this.m_fileUploadProps.timestamp = t.timestamp),
        (this.m_fileUploadProps.hmac = t.hmac),
        this.DoFileUpload(t.result, n)
      );
    } catch (e) {
      let t = e || I(`#ConnectionTrouble_FailedToConnect`);
      throw (
        (d(() => {
          (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.strErrorDescription = I(
              `#Chat_Upload_ErrorStart`,
              t,
            ));
        }),
        t)
      );
    }
  }
  async DoFileUpload(e, t) {
    let n = e.use_https ? `https://` : `http://`;
    n += e.url_host + e.url_path;
    let r = {};
    for (let t of e.request_headers) {
      if (
        t.name.toLowerCase() == `content-length` ||
        t.name.toLowerCase() == `host`
      )
        continue;
      let e = t.name;
      e.toLowerCase() === `content-type` && (e = `Content-Type`),
        (r[e] = t.value);
    }
    let i = {
      onUploadProgress: (e) => {
        let t = !!this.m_fileUploadProps.exportFn,
          n = t ? 50 : 0,
          r = t ? 50 : 100,
          i = n + (e.loaded / e.total) * r;
        i > this.m_fileUploadProps.uploadProgress &&
          d(() => {
            this.m_fileUploadProps.uploadProgress = i;
          });
      },
      headers: r,
      transformRequest: [(e) => e],
    };
    try {
      return (
        await ea.default.put(n, t, i), this.CommitFileUpload(!0, e.ugcid, t)
      );
    } catch (n) {
      throw (
        (this.LogFileUploadMessage(n.response),
        d(() => {
          (this.m_fileUploadProps.strErrorDescription = I(
            `#Chat_Upload_ErrorCloud`,
          )),
            (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.uploadProgress = 0);
        }),
        this.CommitFileUpload(!1, e.ugcid, t),
        this.m_fileUploadProps.strErrorDescription)
      );
    }
  }
  async CommitFileUpload(e, t, n) {
    let r = this.m_fileUploadProps.sha1,
      i = new FormData();
    i.append(`sessionid`, g()),
      i.append(`l`, f.LANGUAGE),
      i.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      i.append(`file_sha`, r),
      i.append(`success`, e ? `1` : `0`),
      i.append(`ugcid`, t),
      i.append(`file_type`, n.type),
      i.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      i.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      i.append(`timestamp`, this.m_fileUploadProps.timestamp.toString()),
      i.append(`hmac`, this.m_fileUploadProps.hmac),
      this.m_Callbacks.PopulateCommitFileUploadFormData(
        i,
        this.file_upload_props.uploadInfo,
        this.file_upload_props.fileInfo,
      );
    try {
      let t = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      return (
        e
          ? ((this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 6),
            this.m_onComplete && this.m_onComplete(1, n.size))
          : ((this.m_fileUploadProps.eUploadState = 3),
            this.m_onComplete && this.m_onComplete(2, n.size)),
        t
      );
    } catch (t) {
      if (!e) return;
      let r = ``;
      throw (
        (d(() => {
          if (
            (this.LogFileUploadMessage(t),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 3),
            t.response)
          ) {
            let e = t.response.data;
            t.response.status,
              e && e.success,
              (r = e.message
                ? e.message
                : I(`#Chat_Settings_Error_ServerError`));
          } else r = I(`#ConnectionTrouble_FailedToConnect`);
          (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${r}`),
            this.m_onComplete && this.m_onComplete(2, n.size);
        }),
        r)
      );
    }
  }
  ClearFileUploadError() {
    (this.m_fileUploadProps.eUploadState == 3 ||
      this.m_fileUploadProps.eUploadState == 4 ||
      this.m_fileUploadProps.eUploadState == 5) &&
      this.Reset();
  }
  Reset() {
    this.SetFileToUpload(void 0);
  }
};
function Bo(e) {
  return new Promise((t) => {
    let n = new FileReader();
    (n.onload = () => {
      let r = e,
        i = n.result,
        a = Vo(i),
        o = new Blob([a], { type: e.type });
      if (o) {
        let t = o;
        (t.lastModifiedDate = new Date(e.lastModified)),
          (t.name = e.name),
          (r = t);
      }
      if (e.type.indexOf(`image`) == 0) {
        let n = new Image();
        (n.src = URL.createObjectURL(e)),
          (n.onload = (e) => {
            t({ file: r, width: n.width, height: n.height });
          });
      } else t({ file: r, width: 0, height: 0 });
    }),
      n.readAsArrayBuffer(e);
  });
}
function Vo(e) {
  let t = new DataView(e),
    n = 0,
    r = 0,
    i = [],
    a = 0;
  if (t.getUint16(n) == 65496) {
    n += 2;
    let o = t.getUint16(n);
    for (n += 2; n < t.byteLength && n < 131072; ) {
      if (o == 65505)
        (i[a] = { recess: r, offset: n - 2 }), (r = n + t.getUint16(n)), a++;
      else if (o == 65498) break;
      (n += t.getUint16(n)), (o = t.getUint16(n)), (n += 2);
    }
    let s = e.byteLength - r;
    if (
      (i.forEach((e) => {
        s += e.offset - e.recess;
      }),
      s === e.byteLength)
    )
      return e;
    let c = new Uint8Array(s);
    if (i.length > 0) {
      let t = 0;
      i.forEach((n) => {
        let r = n.offset - n.recess;
        c.set(new Uint8Array(e.slice(n.recess, n.offset)), t), (t += r);
      }),
        c.set(new Uint8Array(e.slice(r)), t);
    }
    return c.buffer;
  }
  return e;
}
var Ho = `PA1GbfX4Jak-`;
function Uo(e) {
  let { fileUploadManager: t } = e,
    n = (0, K.useRef)(null);
  return (0, q.jsxs)(`div`, {
    className: Ho,
    children: [
      (0, q.jsx)(`input`, {
        type: `file`,
        accept: `.jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4`,
        style: { display: `none` },
        name: `fileupload`,
        ref: n,
        onChange: (e) => {
          let n = e.currentTarget.files;
          n?.length &&
            (t.SetImageFileToUpload(n[0]), (e.currentTarget.value = ``));
        },
      }),
      (0, q.jsx)(oe, {
        type: `button`,
        title: I(`#Button_Upload`),
        onOKActionDescription: I(`#Button_Upload`),
        onClick: () => n.current?.click(),
        children: (0, q.jsx)(le, {}),
      }),
    ],
  });
}
var Wo = `lcuTEjXO8Io-`,
  Go = `YEGC6ugnl7c-`,
  Ko = `_2B1-NsNzm7s-`,
  qo = `EP9i3QuHHYI-`,
  Jo = `PIibQBztc3I-`,
  Yo = `_5bCd1bDYPEM-`,
  Xo = `_80jOlfR7esU-`;
function Zo(e) {
  let { fileUploadManager: t } = e,
    n = L(() => t.file_upload_props.eUploadState);
  return n == 1
    ? (0, q.jsx)(Qo, { fileUploadManager: t })
    : n == 3 || n == 5 || n == 4
      ? (0, q.jsx)(es, { fileUploadManager: t })
      : n == 0
        ? null
        : (0, q.jsx)($o, { fileUploadManager: t });
}
function Qo(e) {
  let { fileUploadManager: t } = e,
    n = t.file;
  return n
    ? (0, q.jsxs)(`div`, {
        className: Wo,
        children: [
          n.type.indexOf(`image`) != -1 &&
            (0, q.jsx)(`img`, {
              className: `e8e5WRBahao-`,
              src: t.file_upload_data_url,
            }),
          n.type.indexOf(`video`) != -1 && (0, q.jsx)(be, {}),
          (0, q.jsxs)(`div`, { className: Go, children: [`'`, n.name, `'`] }),
          (0, q.jsx)(`div`, {
            className: Ko,
            onClick: () => t.Reset(),
            children: (0, q.jsx)(fe, {}),
          }),
          (0, q.jsx)(F, {
            className: qo,
            onClick: async () => {
              await t.BeginFileUpload(), t.Reset();
            },
            children: I(`#Button_Upload`),
          }),
        ],
      })
    : null;
}
function $o(e) {
  let { fileUploadManager: n } = e,
    [r, i, a] = L(() => [
      n.file_upload_props.file,
      n.file_upload_props.displayFileName,
      n.file_upload_props.uploadProgress,
    ]),
    o = r ? I(`#Uploading_Item`, i ?? ``) : ``,
    s = { width: a + `%` };
  return (0, q.jsxs)(`div`, {
    className: Jo,
    children: [
      (0, q.jsx)(`div`, { className: Xo, children: o }),
      (0, q.jsx)(`div`, {
        className: t(Yo, `DialogProgressBar_ProgressBarContainer`),
        children: (0, q.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: s,
        }),
      }),
    ],
  });
}
function es(e) {
  let { fileUploadManager: t } = e,
    [n, r, i] = L(() => [
      t.file_upload_props.strErrorDescription,
      t.file_upload_props.displayFileName,
      t.file_upload_props.eUploadState,
    ]),
    a = r ? I(`#Uploading_Item`, r) : ``,
    o = n || I(`#Chat_Upload_ErrorCloud`);
  return (0, q.jsxs)(`div`, {
    className: Jo,
    children: [
      (0, q.jsx)(`div`, { className: Xo, children: a }),
      (0, q.jsx)(`div`, { className: void 0, children: o }),
      (0, q.jsx)(`div`, {
        className: void 0,
        children: (0, q.jsxs)(Ve, {
          className: `DialogLayout_NoMinWidth`,
          children: [
            i == 3 &&
              (0, q.jsx)(F, {
                onClick: async () => {
                  await t.RetryFileUpload(), t.Reset();
                },
                children: I(`#Chat_Upload_ErrorAction_Retry`),
              }),
            (0, q.jsx)(P, {
              onClick: () => t.ClearFileUploadError(),
              children: I(`#Chat_Upload_ErrorAction_Close`),
            }),
          ],
        }),
      }),
    ],
  });
}
function ts(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = n?.clanSteamID.GetAccountID() ?? 0;
  return r == 39049601 ||
    r == 41316928 ||
    (f.EUNIVERSE == 2 && r == 20) ||
    (f.EUNIVERSE == 1 && r == 4)
    ? (0, q.jsx)(ie, { children: (0, q.jsx)(ns, { clanAccountID: r }) })
    : t
      ? (0, q.jsx)(`div`, { children: I(`#CloudUpload_NotSupport`) })
      : null;
}
function ns(e) {
  let { clanAccountID: t } = e,
    [n] = K.useState(() => new zo(rs(t)));
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsx)(Uo, { fileUploadManager: n }),
      (0, q.jsx)(Zo, { fileUploadManager: n }),
    ],
  });
}
function rs(e) {
  return {
    PopulateBeginFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    PopulateCommitFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    GetBeginFileUploadURL: () =>
      f.STORE_BASE_URL + `saleaction/ajaxbeginfileupload`,
    GetCommitFileUploadURL: () =>
      f.STORE_BASE_URL + `saleaction/ajaxcommitfileupload`,
    LogFileUploadMessage: (e) => {
      console.log(`UploadFileButton: `, e);
    },
    GetMaxFileSizeMB: () => 100,
  };
}
function is(e, t, n) {
  let r = as(e, t);
  return (0, K.useMemo)(() => {
    let e = r.results.find((e) => n == e.unique_id);
    return {
      bLoading: r.bLoading,
      success: r.success,
      userPollData: e,
      error_message: r.error_message,
      userPollSubmitData: r.userPollSubmitData,
    };
  }, [r, n]);
}
function as(e, t) {
  let n = z({
    queryKey: cs(e, t),
    queryFn: async () =>
      ss(
        await (
          await fetch(us(e, t, !1), { method: `GET`, credentials: `include` })
        ).json(),
      ),
    placeholderData: {
      results: [],
      success: 10,
      bLoading: !0,
      userPollSubmitData: { user_poll_option_votes: [] },
    },
  });
  return n.data
    ? n.data
    : {
        results: [],
        success: 10,
        bLoading: !0,
        userPollSubmitData: { user_poll_option_votes: [] },
      };
}
function os(e, t) {
  let n = R();
  return B({
    mutationKey: [`useSetPartnerEventCastVoteUserPoll`, e.GetAccountID(), t],
    mutationFn: async (n) => {
      let r = { votes: n.votes },
        i = await fetch(us(e, t, !0), {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(r),
          credentials: `include`,
        });
      if (!i.ok) throw Error(`Server returned ${i.status}`);
      return await i.json();
    },
    onSuccess: (r, i) => {
      if (r.success == 1) n.setQueryData(cs(e, t), () => ss(r));
      else {
        let i = n.getQueryData(cs(e, t));
        if (i) {
          let a = { ...i, success: r.success, error_message: r.error_message };
          n.setQueryData(cs(e, t), () => a);
        }
      }
    },
  });
}
function ss(e) {
  return {
    ...e,
    bLoading: !1,
    userPollSubmitData: {
      user_poll_option_votes: e.results
        .map((e) => e.voted_option_id)
        .reduce((e, t) => e.concat(t), []),
    },
  };
}
function cs(e, t) {
  return ls(e.ConvertTo64BitString(), t);
}
function ls(e, t) {
  return [`usePartnerEventUserPoll`, e, t];
}
function us(e, t, n) {
  return `${f.COMMUNITY_BASE_URL}partnerevents/${e.ConvertTo64BitString()}/userpoll/${t}/${n ? `ajaxcastvote` : `ajaxloaddata`}/?origin=${encodeURIComponent(location.origin)}`;
}
var ds = 86400;
function fs(e, t) {
  let n = 0;
  return (
    (n = t.poll_end_time
      ? t.poll_end_time
      : (e.rtime32_visibility_start ?? e.rtime32_start_time ?? 0) +
        (t.poll_end_days_since_start || ds)),
    n
  );
}
function ps(e, t) {
  return fs(e, t) < Math.floor(Date.now() / 1e3);
}
var ms = (function (e) {
    return (
      (e.k_EPollResult_NotVisible = `not_visible`),
      (e.k_EPollResult_Visible_After_Vote = `after_vote`),
      (e.k_EPollResult_Visible_After_End = `after_end`),
      (e.k_EPollResult_Visible_After_Vote_Or_End = `after_vote_or_end`),
      (e.k_EPollResult_Visible_On_Demand = `on_demand`),
      e
    );
  })({}),
  hs = `UfoLzSTxTuA-`,
  gs = `YhWjKAr35yQ-`,
  _s = `PP2xaI-f6Ek-`,
  vs = `vcEow-tUZwo-`,
  ys = `_2kvsAdIW-7M-`,
  bs = `_8aI8-jd1icQ-`,
  xs = `dNzBZMJItoE-`,
  Ss = `w0JrdYGNpkE-`,
  Cs = `wsXRKtszMHI-`,
  ws = `_0xYjduHFIA0-`,
  Ts = `ia46etUoIVc-`,
  Es = `YZZ1ufCMojA-`,
  Ds = `ppFEAMbJ96c-`;
function Os(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = U(e.args, `poll_id`),
    i = Number.parseInt(r),
    a = L(() => ks(t, i));
  if (!a || !t)
    return n
      ? (0, q.jsx)(`div`, {
          className: wt,
          children: I(`#UserPolls_Editor_FailToFindModel`, i),
        })
      : null;
  let o = S(f.LANGUAGE);
  return (0, q.jsx)(ie, {
    children: (0, q.jsx)(As, { userPollDef: a, lang: o, eventModel: t }),
  });
}
function ks(e, t) {
  return (e?.jsondata?.user_polls || [])?.find((e) => e.poll_id == t) || null;
}
function As(e) {
  let { eventModel: t, userPollDef: n, lang: r } = e,
    { userPollData: i, ...a } = is(t.clanSteamID, t.GID || `0`, n.poll_id),
    o = !!(a.error_message && a.error_message?.length > 0),
    s = os(t.clanSteamID, t.GID || `0`),
    [c, l] = (0, K.useState)(void 0),
    [u, d] = (0, K.useState)(!1),
    [f, p] = (0, K.useState)(!1),
    m = i?.option_results && i?.option_results.length > 0,
    h = ((i && i.voted_option_id?.length) || 0) > 0;
  return (
    (0, K.useEffect)(() => {
      !f &&
        n.results_visibility_settings != ms.k_EPollResult_NotVisible &&
        m &&
        (ps(
          {
            rtime32_visibility_start:
              t.GetVisibilityStartTimeAndDateUnixSeconds(),
            rtime32_start_time: t.GetStartTimeAndDateUnixSeconds(),
          },
          n,
        ) ||
          h) &&
        p(!0);
    }, [m, h, f, t, n]),
    (0, q.jsxs)(js, {
      ...e,
      children: [
        n.options?.map((e) => {
          let t = i?.option_results.find((t) => t.unique_id == e.option_id),
            n =
              i?.voted_option_id.includes(e.option_id || 0) ||
              c === e.option_id;
          return (0, q.jsx)(
            Ms,
            {
              lang: r,
              pollOptionDef: e,
              bSelected: n,
              nPercentage: f ? t?.percent : void 0,
              onClick: () => l(e.option_id),
              bDisableSelection:
                a.bLoading || !i?.vote_permitted || o || u || h,
            },
            `polloption` + e.option_id,
          );
        }),
        !!c &&
          (0, q.jsx)(P, {
            onClick: async () => {
              if (!a.userPollSubmitData.user_poll_option_votes.includes(c)) {
                d(!0);
                let e = {
                  user_poll_option_votes: [
                    ...a.userPollSubmitData.user_poll_option_votes,
                  ],
                };
                e.user_poll_option_votes.push(c),
                  await s.mutateAsync({ votes: e }),
                  l(void 0),
                  d(!1);
              }
            },
            children: I(`#Button_Submit`),
          }),
        (u || a.bLoading) &&
          (0, q.jsx)(H, {
            size: `small`,
            position: `center`,
            string: a.bLoading ? I(`#Loading`) : void 0,
          }),
        m &&
          !h &&
          !f &&
          (0, q.jsx)(st, {
            onClick: () => p(!0),
            children: I(`#UserPolls_JustSeeResults`),
          }),
        o &&
          (0, q.jsx)(`div`, {
            className: `wizbFzhGtBc-`,
            children: a.error_message,
          }),
      ],
    })
  );
}
function js(e) {
  let { userPollDef: t, lang: n, eventModel: r, children: i } = e,
    a = Y(),
    [o, s] = L(() => [
      M.GetWithFallback(t.localized_poll_description, n),
      t.user_poll_background,
    ]),
    c,
    l = r.clanSteamID.GetAccountID();
  s &&
    (c = {
      backgroundImage: `url('${Ui(l, s)}')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    });
  let { userPollData: u } = is(
      (0, K.useMemo)(() => ae.InitFromClanID(l, f.EUNIVERSE), [l]),
      r.GID || `0`,
      t.poll_id,
    ),
    d = fs(
      {
        rtime32_visibility_start: r.GetVisibilityStartTimeAndDateUnixSeconds(),
        rtime32_start_time: r.GetStartTimeAndDateUnixSeconds(),
      },
      t,
    );
  return (0, q.jsx)(`div`, {
    className: hs,
    style: c,
    children: (0, q.jsxs)(`div`, {
      className: gs,
      children: [
        (0, q.jsx)(`div`, { className: _s, children: o }),
        (0, q.jsx)(`div`, { className: vs, children: i }),
        (0, q.jsxs)(`div`, {
          className: Ds,
          children: [
            (0, q.jsx)(`div`, {
              children: Oe(
                `#UserPolls_status_N_Votes`,
                at(u?.total_votes || 0),
              ),
            }),
            u?.display_message
              ? (0, q.jsx)(`div`, { children: u?.display_message })
              : (0, q.jsx)(`div`, {
                  children: Ae(`#UserPolls_status_N_TimeRemaining`, Je(d - a)),
                }),
          ],
        }),
      ],
    }),
  });
}
function Ms(e) {
  let {
      pollOptionDef: n,
      onClick: r,
      lang: i,
      bDisableSelection: a,
      bSelected: o,
      nPercentage: s,
    } = e,
    [c] = L(() => [M.GetWithFallback(n.localized_option, i)]),
    l = Math.round((s ?? 0) * 100),
    u = !a && !!r;
  return (0, q.jsxs)(`div`, {
    className: t({ [ys]: !0, [bs]: o, [Ss]: a }),
    role: `button`,
    "aria-pressed": !!o,
    "aria-disabled": !!a,
    tabIndex: u ? 0 : void 0,
    onClick: u ? r : void 0,
    onKeyDown: u
      ? (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), r?.());
        }
      : void 0,
    children: [
      (0, q.jsx)(`div`, { className: ws }),
      (0, q.jsx)(`div`, { className: Ts, style: { width: `${l}%` } }),
      (0, q.jsxs)(`div`, {
        className: Cs,
        children: [
          (0, q.jsx)(`div`, { className: xs }),
          s !== void 0 &&
            (0, q.jsxs)(`div`, {
              className: `PTiNIjMkeqY-`,
              children: [l, `%`],
            }),
          (0, q.jsx)(`span`, { className: Es, children: c }),
        ],
      }),
    ],
  });
}
function Ns(e) {
  let { dynamicImport: t, fallback: n, ...r } = e,
    [i] = (0, K.useState)(() =>
      K.lazy(async () => {
        let e = await t();
        return await Ze(), { default: e };
      }),
    );
  return (0, q.jsx)(Ge, {
    fallback: n,
    children: (0, q.jsx)(K.Suspense, {
      fallback: n,
      children: (0, q.jsx)(i, { ...r }),
    }),
  });
}
var Ps = `_8eEm0FMiv8s-`,
  Fs = (e) => {
    let { vodInfo: t, bLoading: n } = Gt(e.appid);
    return !t && e.bPreviewMode
      ? (0, q.jsx)(`div`, {
          children: I(
            n ? `#VODPlayer_Loading` : `#VODPlayer_ErrorLoading`,
            e.appid,
          ),
        })
      : (0, q.jsx)(`div`, {
          className: Ps,
          children: (0, q.jsx)(ie, {
            children: (0, q.jsx)(Ns, {
              dynamicImport: async () =>
                (
                  await ce(
                    async () => {
                      let { default: e } = await import(
                        `./broadcastplayer2.js`
                      );
                      return { default: e };
                    },
                    __vite__mapDeps([
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                      31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                      45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
                      59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
                    ]),
                    import.meta.url,
                  )
                ).default,
              nAppIDVOD: e.appid,
              watchLocation: 9,
              bStartPaused: !0,
            }),
          }),
        });
  };
function Is(e) {
  let t = bt(e.args, `appid`, 0);
  return (0, q.jsx)(Fs, { appid: t, bPreviewMode: !!e.context.showErrorInfo });
}
var Ls = null;
function Rs() {
  return (
    (Ls ??= new Map([
      [`remindme`, { Constructor: Qi, autocloses: !1 }],
      [`vod`, { Constructor: Is, autocloses: !1 }],
      [`giveawayeligible`, { Constructor: ca, autocloses: !1 }],
      [`claimitem`, { Constructor: sa, autocloses: !0 }],
      [`packagepurchaseable`, { Constructor: Lo, autocloses: !1 }],
      [`actiondialog`, { Constructor: aa, autocloses: !1 }],
      [`uploadfilebutton`, { Constructor: ts, autocloses: !0 }],
      [`userpolls`, { Constructor: Os, autocloses: !1 }],
      [`meetsteamsessiongroup`, { Constructor: go, autocloses: !1 }],
      [`meetsteamscheduleview`, { Constructor: ko, autocloses: !1 }],
    ])),
    Ls
  );
}
var zs = null;
function Bs() {
  return (
    (zs ??= new Map([
      ...Array.from(Rs().entries()),
      ...Array.from(ta.entries()),
    ])),
    zs
  );
}
function Vs(e) {
  return (0, q.jsx)(Hs, { children: (0, q.jsx)(vt, { ...e }) });
}
function Hs(e) {
  return (0, q.jsx)(St, { dictionary: Bs(), children: e.children });
}
function Us(e) {
  return [`StoreSales.GetVoteDefinitions`, e ?? 0];
}
function Ws(e, t) {
  return {
    queryKey: Us(t),
    queryFn: async () => {
      let n = await ht.GetVoteDefinitions(e, {
        sale_appid: t,
        language: ot().strLanguage,
      });
      return n.BSuccess() ? n.Body().toObject() : null;
    },
    enabled: !!t,
    staleTime: 1 / 0,
  };
}
function Gs(e) {
  return z(Ws(Qe(), e));
}
async function Ks(e) {
  let t = await mt.GetUserNominations(e, {});
  return t.BSuccess() ? (t.Body().toObject().nominations ?? []) : [];
}
async function qs(e, t) {
  let n = await ht.GetUserVotes(e, { sale_appid: t });
  return n.BSuccess() ? (n.Body().toObject().user_votes ?? []) : [];
}
async function Js(e, t, n, r) {
  let i = await mt.Nominate(e, { category_id: n, nominated_id: t, source: r });
  return (
    i.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().nominations ?? []]
  );
}
async function Ys(e, t, n, r) {
  let i = await ht.SetVote(e, { voteid: n, appid: t, sale_appid: r });
  return (
    i.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().user_votes ?? []]
  );
}
var Xs = D(Ft()),
  Zs = class {
    m_mapTokens = new Map();
    GetLocalization(e, t) {
      let n = this.m_mapTokens.get(e);
      if (n && n[t]) return n[t];
    }
    SetLocalization(e, t, n) {
      let r = this.m_mapTokens.get(e);
      r || ((r = ne([], 32, null)), this.m_mapTokens.set(e, r)), (r[t] = n);
    }
    GetSortedTokenList() {
      let e = [];
      return (
        this.m_mapTokens.forEach((t, n) => e.push(n)),
        e.sort((e, t) => e.localeCompare(t)),
        e
      );
    }
    GetLanguagesWithTokens() {
      let e = new Map();
      this.m_mapTokens.forEach((t) => {
        for (let n = 0; n < t.length; ++n)
          !e.has(n) &&
            t[n] !== null &&
            t[n] !== void 0 &&
            t[n].trim().length > 0 &&
            e.set(n, !0);
      });
      let t = [];
      return (
        e.forEach((e, n) => {
          e && t.push(n);
        }),
        t
      );
    }
    ClearLanguagesTokens(e) {
      e.forEach((e) => {
        this.m_mapTokens.forEach((t, n) => {
          e < t.length && t[e] !== null && (t[e] = null);
        });
      });
    }
    DebugPrintData() {
      let e = [];
      return (
        this.m_mapTokens.forEach((t, n) => e.push(`${n}=${t.join(`,`)}`)),
        e.join(`
`)
      );
    }
  },
  Qs = class {
    DetectAndFormatCSV(e) {
      let t = null;
      return (
        e?.meta?.fields?.length >= 3 &&
        e.meta.fields[0] === `field` &&
        e.meta.fields[1] === `language` &&
        e.meta.fields[2] === `value`
          ? (t = this.ReadLocalizationData_CSV_TokenLanguageList(e))
          : e?.meta?.fields?.length >= 2 &&
              e.meta.fields[0] === `field` &&
              S(e.meta.fields[1], -1) != -1
            ? (t = this.ReadLocalizationData_CSV_LanguageColumns(e))
            : e?.meta?.fields?.length >= 2 &&
              e.meta.fields[0] === `language` &&
              (t = this.ReadLocalizationData_CSV_LanguageRows(e)),
        t
      );
    }
    async ReadLocalizationData_XML_SingleLanguage(e, t) {
      let n = new Zs(),
        r = new DOMParser(),
        i = await W.ReadFile(e),
        a = r.parseFromString(i.toString(), `application/xml`);
      for (let e = 0; e < a.documentElement.children.length; ++e) {
        let r = a.documentElement.children.item(e);
        if (!r.getAttribute(`id`))
          throw `Can not find id for element. Probably malformed XML`;
        let i = r.getAttribute(`id`).toLocaleLowerCase(),
          o = r.textContent;
        n.SetLocalization(i, t, o);
      }
      return n;
    }
    ReadLocalizationData_CSV_TokenLanguageList(e) {
      let t = new Zs();
      return (
        e.data.forEach((e) => {
          let n = e.field,
            r = S(e.language);
          t.SetLocalization(n, r, e.value);
        }),
        t
      );
    }
    ReadLocalizationData_CSV_LanguageColumns(e) {
      let t = new Zs();
      return (
        e.data.forEach((e) => {
          let n = e.field;
          for (let r = 0; r < 32; ++r) {
            let i = x(b(r));
            t.SetLocalization(n, r, e[i]);
          }
        }),
        t
      );
    }
    ReadLocalizationData_CSV_LanguageRows(e) {
      let t = new Zs();
      return (
        e.data.forEach((e) => {
          let n = S(e.language, 32);
          if (n !== 32)
            for (let [r, i] of Object.entries(e))
              r !== `language` &&
                typeof i == `string` &&
                t.SetLocalization(r, n, i);
        }),
        t
      );
    }
    GetExportLanguages() {
      return ke.GetLanguageListForRealms([C.k_ESteamRealmGlobal]);
    }
    WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
      let n = [];
      e.GetSortedTokenList().forEach((t) => {
        for (let r of this.GetExportLanguages()) {
          let i = { field: t };
          (i.language = x(b(r))),
            (i.value = e.GetLocalization(t, r)),
            n.push(i);
        }
      }),
        W.WriteCSVToFile(n, t);
    }
    WriteLocalizationData_CSV_LanguageColumns(e, t) {
      let n = [];
      e.GetSortedTokenList().forEach((t) => {
        let r = { field: t };
        for (let n of this.GetExportLanguages())
          r[x(b(n))] = e.GetLocalization(t, n);
        n.push(r);
      }),
        W.WriteCSVToFile(n, t);
    }
    WriteLocalizationData_CSV_LanguageRows(e, t) {
      let n = [];
      for (let e of this.GetExportLanguages())
        n.length <= e - 1 && n.push({ language: `` }),
          n.push({ language: x(b(e)) });
      e.GetSortedTokenList().forEach((t) => {
        for (let r of this.GetExportLanguages()) {
          let i = e.GetLocalization(t, r);
          n[r][t] = i;
        }
      }),
        W.WriteCSVToFile(n, t);
    }
    WriteLocalizationData_XML_SingleLanguage(e, t, n) {
      let r = document.implementation.createDocument(null, `content`, null);
      e.GetSortedTokenList().forEach((n) => {
        let i = r.createElement(`string`);
        i.setAttribute(`id`, n),
          i.appendChild(r.createTextNode(e.GetLocalization(n, t) || ``)),
          r.documentElement.append(i);
      }),
        W.WriteXMLToFile(r, n);
    }
  },
  $s = `QKQ8f-Zg3Cs-`,
  ec = `unETu-ibhHc-`,
  tc = `uOP1EmIy8ak-`,
  nc = `mMC5PbET8Y4-`,
  rc = (e) => {
    let t = (t, n) => {
      t.preventDefault();
      let { fnGetLocData: r, closeModal: i, strFileNamePrefix: a, lang: o } = e,
        s = r(),
        c = new Qs(),
        l = a ? a + `_localization` : `localization`;
      switch (n) {
        case `csv_row`:
          c.WriteLocalizationData_CSV_LanguageRows(s, l + `.csv`);
          break;
        case `csv_column`:
          c.WriteLocalizationData_CSV_LanguageColumns(s, l + `.csv`);
          break;
        case `csv_token`:
          c.WriteLocalizationData_CSV_TokenAndLanguageColumns(s, l + `.csv`);
          break;
        case `xml`:
          c.WriteLocalizationData_XML_SingleLanguage(
            s,
            o,
            l + `_` + x(b(o)) + `.xml`,
          );
      }
      i && i();
    };
    return (0, q.jsxs)(q.Fragment, {
      children: [
        !!e.bShowCSV &&
          (0, q.jsxs)(K.Fragment, {
            children: [
              (0, q.jsx)(F, {
                onClick: (e) => t(e, `csv_row`),
                children: I(`#Localization_Export_Btn_RowLanguages`),
              }),
              (0, q.jsx)(F, {
                onClick: (e) => t(e, `csv_column`),
                children: I(`#Localization_Export_Btn_ColumnLanguages`),
              }),
              (0, q.jsx)(F, {
                onClick: (e) => t(e, `csv_token`),
                children: I(`#Localization_Export_Btn_TokenLanguages`),
              }),
            ],
          }),
        !!e.bShowXML &&
          (0, q.jsx)(F, {
            onClick: (e) => t(e, `xml`),
            children: I(`#Localization_Export_Btn_XML`),
          }),
      ],
    });
  },
  ic = (e) => {
    let [n, r] = (0, K.useState)(!1),
      i = (e, t) => {
        r(!1),
          console.log(
            `ImportLocalizationAction: On Handle Parse error: ` + e.message,
            e,
          ),
          Le(
            (0, q.jsx)(De, {
              children: (0, q.jsxs)(`div`, {
                children: [
                  (0, q.jsx)(`p`, { children: I(`#Localization_Error_Input`) }),
                  (0, q.jsx)(`p`, { children: e.message }),
                ],
              }),
            }),
            window,
          );
      },
      a = (e) => {
        r(!1);
        let t = ``;
        e.forEach((e) => {
          t.length > 0 && (t += `, `), (t += I(`#Language_` + b(e)));
        }),
          Le(
            (0, q.jsx)(Be, {
              strTitle: I(`#EventDisplay_Share_Success`),
              bAlertDialog: !0,
              children: (0, q.jsx)(`div`, {
                children:
                  t.length == 0
                    ? I(`#Localization_Success_ImportComplete_NoChange`)
                    : I(`#Localization_Success_ImportComplete`, t),
              }),
            }),
            window,
          );
      },
      o = async (t) => {
        let n = t.target.files;
        if (n && n.length > 0) {
          r(!0);
          let t = [],
            o = new Qs();
          for (let r = 0; r < n.length; ++r)
            if (n[r]) {
              if (n[r].name.toLocaleLowerCase().endsWith(`.csv`)) {
                Xs.default.parse(n[0], {
                  header: !0,
                  complete: (t) => {
                    let n = new Qs().DetectAndFormatCSV(t);
                    if (!n) {
                      i({
                        code: ``,
                        message: ``,
                        row: 0,
                        type: `filenameerror`,
                      });
                      return;
                    }
                    let r = ke.GetLanguageListForRealms([
                        C.k_ESteamRealmGlobal,
                      ]),
                      o = e.fnOnImportLocData(n, r);
                    a(o);
                  },
                  error: i,
                });
                return;
              }
              if (n[r].name.toLocaleLowerCase().endsWith(`.xml`)) {
                let { language: a } = Pt(n[r].name, -1);
                if (a == null || a == -1) {
                  i({
                    code: ``,
                    message: I(`#Localization_Error_FileLangauage`, n[r].name),
                    row: 0,
                    type: `filenameerror`,
                  });
                  return;
                }
                try {
                  let i = await o.ReadLocalizationData_XML_SingleLanguage(
                    n[r],
                    a,
                  );
                  e.fnOnImportLocData(i, [a]).forEach((e) => {
                    t.indexOf(e) == -1 && t.push(e);
                  });
                } catch (e) {
                  let t = lt(e);
                  i({
                    code: ``,
                    message: I(
                      `#Localization_Error_XMLParseError`,
                      t.strErrorMsg,
                    ),
                    row: 0,
                    type: `parseerror`,
                  });
                  return;
                }
              } else
                i({
                  code: ``,
                  message: I(`#Localization_Error_FileExtention`, n[r].name),
                  row: 0,
                  type: `filenameerror`,
                });
            }
          a(t);
        }
      };
    return (0, q.jsx)(Re, {
      className: t(e.className ? e.className : pt),
      toolTipContent: e.strToolTip,
      children: (0, q.jsxs)(`label`, {
        className: nc,
        htmlFor: `importlocalization`,
        children: [
          n && (0, q.jsx)(H, { size: `small` }),
          (0, q.jsx)(`div`, {
            className: $s,
            children: I(e.strLabel ? e.strLabel : `#Localization_Import_Btn`),
          }),
          (0, q.jsx)(`input`, {
            id: `importlocalization`,
            className: nc,
            style: { display: `none` },
            type: `file`,
            onSubmit: o,
            onChange: o,
            multiple: !0,
          }),
        ],
      }),
    });
  },
  ac = (e) => {
    let {
        fnOnImportLocData: t,
        closeModal: n,
        sampleLocData: r,
        sampleFilename: i,
      } = e,
      a = (e, r) => {
        let i = t(e, r);
        return n(), i;
      },
      o = new Qs();
    return (0, q.jsxs)(We, {
      title: I(`#ImportLoc_Title`),
      onCancel: n,
      closeModal: n,
      children: [
        (0, q.jsxs)(ge, {
          children: [
            (0, q.jsx)(`div`, { children: I(`#ImportLoc_Description`) }),
            (0, q.jsxs)(`div`, {
              className: ec,
              children: [
                (0, q.jsx)(`div`, {
                  className: tc,
                  children: I(`#ImportLoc_SampleTitle`),
                }),
                (0, q.jsx)(P, {
                  onClick: () =>
                    o.WriteLocalizationData_CSV_LanguageRows(r, i + `_row.csv`),
                  children: I(`#ImportLoc_CSVLangPerRow`),
                }),
                (0, q.jsx)(P, {
                  onClick: () =>
                    o.WriteLocalizationData_CSV_LanguageColumns(
                      r,
                      i + `_col.csv`,
                    ),
                  children: I(`#ImportLoc_CSVLangPerCol`),
                }),
                (0, q.jsx)(P, {
                  onClick: () =>
                    o.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                      r,
                      i + `_token.csv`,
                    ),
                  children: I(`#ImportLoc_CSVTokenLang`),
                }),
                (0, q.jsx)(P, {
                  onClick: () =>
                    o.WriteLocalizationData_XML_SingleLanguage(r, 0, i + `xml`),
                  children: I(`#ImportLoc_XML`),
                }),
              ],
            }),
          ],
        }),
        (0, q.jsx)(Se, {
          children: (0, q.jsx)(ic, {
            strLabel: I(`#BuildNotes_ImportLocalization`),
            fnOnImportLocData: a,
          }),
        }),
      ],
    });
  };
export {
  ln as C,
  fn as S,
  Z as _,
  Ks as a,
  dn as b,
  Ys as c,
  Vs as d,
  Bi as f,
  vn as g,
  wn as h,
  Zs as i,
  Gs as l,
  Cn as m,
  ic as n,
  qs as o,
  Sn as p,
  ac as r,
  Js as s,
  rc as t,
  Hs as u,
  un as v,
  Y as w,
  an as x,
  pn as y,
};
