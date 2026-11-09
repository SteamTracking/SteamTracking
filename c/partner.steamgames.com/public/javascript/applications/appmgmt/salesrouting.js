import { _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./promotionoperationowner.js";
import { _, _ } from "./react-router.js";
import { _, _, _, _ } from "./react-router-dom.js";
import { _ } from "./throbber.js";
import { _ } from "./importexportdialog.js";
import { _, _ } from "./configdatadiag.js";
import { _ } from "./unknownroute.js";
_();
var _ = class _ {
    static s_PageStore;
    m_mapSalePage = new Map();
    m_rgUnmigratedSalesPage = [];
    GetUnmigratedSalesPages() {
      return this.m_rgUnmigratedSalesPage;
    }
    GetAllSalePages() {
      return Array.from(this.m_mapSalePage.values());
    }
    GetPageByID(_) {
      return this.m_mapSalePage.get(_);
    }
    static Get() {
      return (
        _.s_PageStore || ((_.s_PageStore = new _()), _.s_PageStore.Init()),
        _.s_PageStore
      );
    }
    Init() {
      let _ = _(`old_sale_pages`, `application_config`);
      this.ValidateStoreDefault(_) &&
        _.forEach((_) => {
          (this.m_mapSalePage.set(_.pageid, _),
            _.migrated_clan_account_id || this.m_rgUnmigratedSalesPage.push(_));
        });
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
        ? typeof _[0].pageid == `string`
        : !1;
    }
  },
  _ = _();
function _(_) {
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`h2`, {
        children: `Unmigrated Sales Pages`,
      }),
      (0, _.jsx)(`hr`, {}),
      _.Get()
        .GetUnmigratedSalesPages()
        .map((_) =>
          (0, _.jsx)(
            _,
            {
              pageid: _.pageid,
            },
            _.pageid,
          ),
        ),
    ],
  });
}
function _(_) {
  let _ = _.Get().GetPageByID(_.pageid);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        children: _.pageid,
      }),
      (0, _.jsx)(_, {
        _: _.SaleMigrationPageDebug(_.pageid),
        children: `Debug Data`,
      }),
    ],
  });
}
function _(_) {
  let { pageid: _ } = _,
    _ = _.Get().GetPageByID(_),
    _ = _(_.accountid);
  return _
    ? (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            _: _.SaleMigrationTool(),
            children: `< Return to Migration Toolset`,
          }),
          (0, _.jsxs)(`h2`, {
            children: [`Debug: `, _.pageid],
          }),
          (0, _.jsx)(`hr`, {}),
          (0, _.jsxs)(`div`, {
            children: [`Name: `, _.display_name],
          }),
          (0, _.jsxs)(`div`, {
            children: [`Creator: `, _.accountid, ` - `, _.persona],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              `Last Modified: `,
              _.last_modified,
              _.last_modified != 0 &&
                (0, _.jsx)(_, {
                  dateAndTime: _.last_modified,
                  bSingleLine: !0,
                }),
            ],
          }),
          (0, _.jsx)(`h1`, {
            children: `Sale Page Body Raw`,
          }),
          (0, _.jsx)(_, {
            data: _,
          }),
        ],
      })
    : (0, _.jsx)(_, {
        string: `Loading User Info`,
      });
}
var _ = {
  SaleDashboardView: () => `/(dashboard)?/`,
  SaleMigrationTool: () => `/migration/`,
  SaleMigrationPageDebug: (_) => `/migration/debug/${_}/`,
};
function _(_) {
  return (0, _.jsx)(_, {
    basename: _() + `sales/`,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          exact: !0,
          path: _.DiagData(),
          render: (_) =>
            (0, _.jsx)(_, {
              ..._,
              strConfigID: `application_config`,
            }),
        }),
        (0, _.jsx)(_, {
          exact: !0,
          path: _.SaleDashboardView(),
          component: _,
        }),
        (0, _.jsx)(_, {
          exact: !0,
          path: _.SaleMigrationTool(),
          component: _,
        }),
        (0, _.jsx)(_, {
          exact: !0,
          path: _.SaleMigrationPageDebug(`:pageid`),
          render: (_) =>
            (0, _.jsx)(_, {
              pageid: _.match.params.pageid,
            }),
        }),
        (0, _.jsx)(_, {
          component: _,
        }),
      ],
    }),
  });
}
export { _ as SaleRoutes, _ as default };
