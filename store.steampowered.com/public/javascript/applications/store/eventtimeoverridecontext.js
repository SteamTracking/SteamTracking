/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { n as r } from "./eventtime.js";
var i = e(t(), 1);
n();
var a = i.createContext(void 0);
function o() {
  return i.useContext(a) ?? r();
}
export { o as t };
