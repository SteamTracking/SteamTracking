/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
var r = n(t()),
  i = e(),
  a = class extends r.Component {
    render() {
      return null;
    }
  },
  o = class extends r.Component {
    render() {
      return (0, i.jsx)(`div`, {
        children: (0, i.jsx)(`pre`, {
          children: JSON.stringify(this.props.data, null, 2),
        }),
      });
    }
  };
export { o as n, a as t };
