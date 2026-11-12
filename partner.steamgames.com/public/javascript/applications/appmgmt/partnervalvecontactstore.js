/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  At as t,
  P as n,
  X as r,
  rt as i,
  sn as a,
  vt as o,
} from "./chunk~de7f2df91c.js";
import { Kt as s, t as c } from "./chunk~25a6634263.js";
import { i as l } from "./chunk~8fb30ea08b.js";
import { t as u } from "./chunk~ede3e357a2.js";
import { t as d } from "./chunk~726542bc75.js";
import { t as f } from "./chunk~f4e4ed5c17.js";
import { t as p } from "./chunk~c55709d290.js";
import { t as m } from "./chunk~f8f9713b0c.js";
function h(e) {
  let t = new Date(e.getTime());
  return (t.setHours(0, 0, 0, 0), t);
}
function g(e) {
  let t = new Date(e.getTime());
  return (t.setDate(1), t.setHours(0, 0, 0, 0), t);
}
function _(e, t) {
  let n = new Date(e);
  return (n.setDate(e.getDate() + t), n);
}
function v(e, t) {
  return e.reduce((e, n) => {
    let r = t(n),
      i = Math.floor(r.getTime() / 1e3),
      a = e.get(i) || [];
    return (e.set(i, [...a, n]), e);
  }, new Map());
}
var y = a(f());
async function b(e) {
  let t = { accountid: e, origin: self.origin },
    r = `${i.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
  n() == `partner` &&
    (r = `${i.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
  let a = await y.default.get(r, { params: t, withCredentials: !0 });
  if (!a || a.status != 200 || a.data?.success != 1 || !a.data?.partners)
    throw `Load single user partner info failed ${p(a).strErrorMsg}`;
  return a.data.partners;
}
function x(e) {
  let { data: t, isLoading: n } = u({
    queryKey: [`PartnerInfoList`, e],
    queryFn: () => b(e),
  });
  return n ? null : t;
}
function S(e, t) {
  return x(e)?.find((e) => e.partnerid === t);
}
var C = a(t()),
  w = `_0vUrwCDzuXw-`,
  T = o();
function E(e) {
  let t = e.getValue();
  return t?.length > 0 ? (0, T.jsx)(D, { text: t, regExp: /\r\n|\r|\n/ }) : ``;
}
function D(e) {
  let { text: t, regExp: n } = e;
  if (!t) return (0, T.jsx)(T.Fragment, {});
  let r = t.split(n);
  return (0, T.jsx)(`div`, {
    className: w,
    children: r.map((e, t) =>
      (0, T.jsxs)(
        `span`,
        { children: [e, t < r.length - 1 && (0, T.jsx)(`br`, {})] },
        t,
      ),
    ),
  });
}
function O(e) {
  return Number.parseInt(e.getValue()) ? `yes` : `no`;
}
function k(e) {
  let t = Number.parseInt(e.getValue());
  return d(t);
}
function A(e, t, n) {
  let r = [],
    i = n.map((e) => e.header);
  r.push(i);
  for (let e of t) {
    let t = [];
    for (let r of n) {
      let n = e[r.accessorKey];
      t.push(n == null ? `` : n.toString());
    }
    r.push(t);
  }
  m.WriteCSVToFile(r, e);
}
var j = class t {
  m_mapPartnerToContactInfo = new Map();
  m_mapPromisePartnerLoading = new Map();
  async FetchValvePartnerContacts(e) {
    let t = i.PARTNER_BASE_URL + `actions/ajaxgetpartnervalvecontacts`,
      n = { sessionid: r(), strPartnerIDs: e.join(`,`) },
      a = await y.default.get(t, { params: n, withCredentials: !0 });
    return a?.status == 200 && a?.data.success == 1
      ? (a.data.contacts.forEach((e) => {
          (this.m_mapPartnerToContactInfo.has(e.partnerid) ||
            this.m_mapPartnerToContactInfo.set(e.partnerid, []),
            this.m_mapPartnerToContactInfo.get(e.partnerid).push(e));
        }),
        a.data.contacts)
      : [];
  }
  async LoadValvePartnerContact(e) {
    return e
      ? this.m_mapPartnerToContactInfo.has(e)
        ? this.m_mapPartnerToContactInfo.get(e)
        : (this.m_mapPromisePartnerLoading.has(e) ||
            this.m_mapPromisePartnerLoading.set(
              e,
              this.InternalLoadValvePartnerContact(e),
            ),
          this.m_mapPromisePartnerLoading.get(e))
      : [];
  }
  async InternalLoadValvePartnerContact(e) {
    return this.FetchValvePartnerContacts([e]);
  }
  async InternalLoadMultiplePartnerContact(e) {
    return this.FetchValvePartnerContacts(e);
  }
  GetPartnerContact(e) {
    return this.m_mapPartnerToContactInfo.get(e);
  }
  GetPartnerContactAccountsByFilter(e, t, n) {
    let r = this.m_mapPartnerToContactInfo.get(e);
    if (r?.length > 0) {
      let e = r
        .filter((e) => !e.appid || e.appid == t)
        .filter(
          (e) =>
            !n ||
            n == `any` ||
            (n == `business` && e.is_business_contact) ||
            (n == `tech` && e.is_tech_contact),
        )
        .map((e) => new c(e.steamid).GetAccountID());
      return s(e);
    }
    return [];
  }
  static s_Singleton;
  static Get() {
    return (
      t.s_Singleton || ((t.s_Singleton = new t()), t.s_Singleton.Init()),
      t.s_Singleton
    );
  }
  Init() {
    let t = e(`partner_valve_contact_list`, `application_config`);
    t &&
      t.forEach((e) => {
        this.m_mapPartnerToContactInfo.has(e.partnerid)
          ? this.m_mapPartnerToContactInfo.get(e.partnerid).push(e)
          : this.m_mapPartnerToContactInfo.set(e.partnerid, [e]);
      });
  }
};
function M(e) {
  return [`PartnerValveContactByPartnerID`, e];
}
function N(e) {
  let { data: t, isLoading: n } = u({
    queryKey: M(e),
    queryFn: async () => j.Get().LoadValvePartnerContact(e),
  });
  return n ? null : t;
}
function P(e, t) {
  return e.prefetchQuery({
    queryKey: M(t),
    queryFn: async () => j.Get().LoadValvePartnerContact(t),
  });
}
function F(e) {
  return j.Get().GetPartnerContact(e);
}
function I(e, t, n) {
  return j.Get().GetPartnerContactAccountsByFilter(e, t, n);
}
function L(e, t, n) {
  let [r, i] = (0, C.useState)(null),
    a = N(e);
  return (
    (0, C.useEffect)(() => {
      a && i(j.Get().GetPartnerContactAccountsByFilter(e, t, n));
    }, [a, t, n, e]),
    r
  );
}
function R(e) {
  let t = l();
  return u({
    queryKey: [`multiloadpartnerconatact`, ...(e || [])],
    queryFn: async () => {
      let n = await j.Get().InternalLoadMultiplePartnerContact(e);
      return (
        e.forEach((e) => {
          let r = n.filter((t) => t.partnerid == e);
          t.setQueryData(M(e), r);
        }),
        n
      );
    },
    enabled: !!(e && e.length > 0),
  });
}
export {
  L as a,
  k as c,
  x as d,
  S as f,
  v as g,
  g as h,
  R as i,
  O as l,
  h as m,
  I as n,
  A as o,
  _ as p,
  P as r,
  E as s,
  F as t,
  D as u,
};
