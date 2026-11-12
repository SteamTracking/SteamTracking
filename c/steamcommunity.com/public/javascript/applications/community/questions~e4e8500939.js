import "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./main.js";
import { _, _ } from "./chunk~eb66d0e2b2.js";
_();
var _ = _(),
  _ = {
    Dashboard: (_) => `/questions/${_}/dashboard`,
    FullPageView: (_, _) => `/questions/${_}/view/${_}`,
  };
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        path: _.Dashboard(`:vanity_str`),
        render: (_) =>
          (0, _.jsx)(_, {
            config: {
              "qanda-root": () => {
                let { vanity_str: _ } = _.match.params;
                return (0, _.jsx)(_, {
                  vanity_str: _,
                });
              },
            },
          }),
      }),
      (0, _.jsx)(_, {
        path: _.FullPageView(`:vanity_str`, `:session_gid`),
        render: (_) =>
          (0, _.jsx)(_, {
            config: {
              "qanda-root": () => {
                let { vanity_str: _, session_gid: _ } = _.match.params;
                return (0, _.jsx)(_, {
                  gidSession: _,
                });
              },
            },
          }),
      }),
      (0, _.jsx)(_, {
        component: _,
      }),
    ],
  });
}
export { _ as QAndARoutes, _ as default };
