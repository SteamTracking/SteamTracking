/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, Q as t, vt as n } from "./chunk~de7f2df91c.js";
import { C as r, E as i } from "./chunk~54f70c90c1.js";
import { a, r as o } from "./chunk~44f252525d.js";
import { i as s, n as c, r as l, t as u } from "./chunk~9fc22a4638.js";
import { t as d } from "./chunk~eefd71512b.js";
import { h as f } from "./chunk~fd80c4b5eb.js";
import { n as p, t as m } from "./chunk~59af5622dd.js";
import { t as h } from "./chunk~58c6c52d52.js";
e();
var g = class e {
    static s_PageStore;
    m_mapSalePage = new Map();
    m_rgUnmigratedSalesPage = [];
    GetUnmigratedSalesPages() {
      return this.m_rgUnmigratedSalesPage;
    }
    GetAllSalePages() {
      return Array.from(this.m_mapSalePage.values());
    }
    GetPageByID(e) {
      return this.m_mapSalePage.get(e);
    }
    static Get() {
      return (
        e.s_PageStore || ((e.s_PageStore = new e()), e.s_PageStore.Init()),
        e.s_PageStore
      );
    }
    Init() {
      let e = t(`old_sale_pages`, `application_config`);
      this.ValidateStoreDefault(e) &&
        e.forEach((e) => {
          (this.m_mapSalePage.set(e.pageid, e),
            e.migrated_clan_account_id || this.m_rgUnmigratedSalesPage.push(e));
        });
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].pageid == `string`
        : !1;
    }
  },
  _ = n();
function v(e) {
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`h2`, { children: `Unmigrated Sales Pages` }),
      (0, _.jsx)(`hr`, {}),
      g
        .Get()
        .GetUnmigratedSalesPages()
        .map((e) => (0, _.jsx)(y, { pageid: e.pageid }, e.pageid)),
    ],
  });
}
function y(e) {
  let t = g.Get().GetPageByID(e.pageid);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, { children: t.pageid }),
      (0, _.jsx)(c, {
        to: x.SaleMigrationPageDebug(t.pageid),
        children: `Debug Data`,
      }),
    ],
  });
}
function b(e) {
  let { pageid: t } = e,
    n = g.Get().GetPageByID(t),
    r = i(n.accountid);
  return r
    ? (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(c, {
            to: x.SaleMigrationTool(),
            children: `< Return to Migration Toolset`,
          }),
          (0, _.jsxs)(`h2`, { children: [`Debug: `, e.pageid] }),
          (0, _.jsx)(`hr`, {}),
          (0, _.jsxs)(`div`, { children: [`Name: `, n.display_name] }),
          (0, _.jsxs)(`div`, {
            children: [`Creator: `, n.accountid, ` - `, r.persona],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              `Last Modified: `,
              n.last_modified,
              n.last_modified != 0 &&
                (0, _.jsx)(f, {
                  dateAndTime: n.last_modified,
                  bSingleLine: !0,
                }),
            ],
          }),
          (0, _.jsx)(`h1`, { children: `Sale Page Body Raw` }),
          (0, _.jsx)(p, { data: n }),
        ],
      })
    : (0, _.jsx)(d, { string: `Loading User Info` });
}
var x = {
  SaleDashboardView: () => `/(dashboard)?/`,
  SaleMigrationTool: () => `/migration/`,
  SaleMigrationPageDebug: (e) => `/migration/debug/${e}/`,
};
function S(e) {
  return (0, _.jsx)(u, {
    basename: l() + `sales/`,
    children: (0, _.jsxs)(a, {
      children: [
        (0, _.jsx)(o, {
          exact: !0,
          path: s.DiagData(),
          render: (e) =>
            (0, _.jsx)(m, { ...e, strConfigID: `application_config` }),
        }),
        (0, _.jsx)(o, { exact: !0, path: x.SaleDashboardView(), component: r }),
        (0, _.jsx)(o, { exact: !0, path: x.SaleMigrationTool(), component: v }),
        (0, _.jsx)(o, {
          exact: !0,
          path: x.SaleMigrationPageDebug(`:pageid`),
          render: (e) => (0, _.jsx)(b, { pageid: e.match.params.pageid }),
        }),
        (0, _.jsx)(o, { component: h }),
      ],
    }),
  });
}
export { x as SaleRoutes, S as default };
