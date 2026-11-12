import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./main.js";
import { _, _ } from "./chunk~5d95ff6b7f.js";
var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
    state = {
      bIsLoading: !0,
    };
    componentDidMount() {
      (_.Get(),
        this.setState({
          bIsLoading: !1,
        }));
    }
    render() {
      return this.state.bIsLoading
        ? null
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  exact: !0,
                  path: `/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss`,
                  component: _,
                }),
                (0, _.jsx)(_, {
                  children: !1,
                }),
              ],
            }),
          });
    }
  };
export { _ as default };
