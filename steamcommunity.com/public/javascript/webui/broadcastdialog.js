/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import { Cr as t, N as n } from "./chunk~d3515eca4e.js";
import { g as r } from "./chunk~8ef2f32a67.js";
import { i, n as a } from "./chunk~0ef0cd2c00.js";
import { BroadcastTab as o } from "./chunk~a9aae670bb.js";
var s = e(t()),
  c = a(),
  l = class extends s.Component {
    render() {
      let e = this.props.broadcastView;
      if (!e || !(e instanceof r)) return null;
      let t = {};
      return (
        this.props.isActive || (t.display = `none`),
        (0, c.jsx)(o, { style: t, broadcastView: e, popup: this.props.popup })
      );
    }
  };
l = n([i], l);
var u = l;
export { u as default };
