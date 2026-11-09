import { _, _, _ } from "./mobx.esm.js";
var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
    render() {
      return null;
    }
  },
  _ = class extends _.Component {
    render() {
      return (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`pre`, {
          children: JSON.stringify(this.props.data, null, 2),
        }),
      });
    }
  };
export { _, _ };
