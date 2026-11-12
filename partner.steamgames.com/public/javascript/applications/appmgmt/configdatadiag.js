/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
var r = t(e()),
  i = n(),
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
