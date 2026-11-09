/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Z as e, _t as t, kt as n } from "./mobx.esm.js";
import { C as r, E as i } from "./promotionoperationowner.js";
import { a, r as o } from "./react-router.js";
import { i as s, n as c, r as l, t as u } from "./react-router-dom.js";
import { t as d } from "./throbber.js";
import { _ as f } from "./importexportdialog.js";
import { n as p, t as m } from "./configdatadiag.js";
import { t as h } from "./unknownroute.js";
n();
var g = class t {
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
        t.s_PageStore || ((t.s_PageStore = new t()), t.s_PageStore.Init()),
        t.s_PageStore
      );
    }
    Init() {
      let t = e(`old_sale_pages`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((e) => {
          this.m_mapSalePage.set(e.pageid, e),
            e.migrated_clan_account_id || this.m_rgUnmigratedSalesPage.push(e);
        });
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].pageid == `string`
        : !1;
    }
  },
  _ = t();
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
