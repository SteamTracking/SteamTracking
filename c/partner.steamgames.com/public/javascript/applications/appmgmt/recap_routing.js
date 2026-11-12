import { _, _ } from "./chunk~de7f2df91c.js";
import { _, _ } from "./chunk~54f70c90c1.js";
import { _, _ } from "./chunk~44f252525d.js";
import { _, _ } from "./chunk~9fc22a4638.js";
import { _ } from "./chunk~58c6c52d52.js";
_();
var _ = _(),
  _ = {
    NextFestRecapListPartner: (_) => `/nextfest/${_}`,
    NextFestRecapList: () => `/nextfest`,
    NextFestRecap: (_, _) => `/nextfest/${_}/${_}`,
  };
function _(_) {
  return (0, _.jsx)(_, {
    basename: _() + `recap/`,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: _.NextFestRecap(`:postfix`, `:partnerid(\\d+)`),
          render: (_) =>
            (0, _.jsx)(_, {
              pagePostFix: _.match.params.postfix,
              nPartnerID: Number.parseInt(_.match.params.partnerid),
            }),
        }),
        (0, _.jsx)(_, {
          path: _.NextFestRecapListPartner(`:partnerid(\\d+)`),
          render: (_) =>
            (0, _.jsx)(_, {
              nPartnerID: Number.parseInt(_.match.params.partnerid),
            }),
        }),
        (0, _.jsx)(_, {
          path: _.NextFestRecapList(),
          render: (_) =>
            (0, _.jsx)(_, {
              nPartnerID: void 0,
            }),
        }),
        (0, _.jsx)(_, {
          component: _,
        }),
      ],
    }),
  });
}
export { _ as RecapHubRoutes, _ as default };
