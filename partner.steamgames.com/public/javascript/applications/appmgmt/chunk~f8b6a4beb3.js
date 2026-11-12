/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, tn as n } from "./chunk~de7f2df91c.js";
var r = t(e(), 1),
  i = r.createContext(void 0),
  a = i.Provider,
  o = () => {
    let e = r.useContext(i);
    if (!e)
      throw Error(
        `called useActiveServiceTransportContext outside of ServiceTransportProvider`,
      );
    return e;
  };
function s(e) {
  let { useStorage: t, children: i } = e,
    o,
    s;
  if (`useActiveCMInterface` in e) s = o = e.useActiveCMInterface;
  else if (`useActiveSteamInterface` in e) s = e.useActiveSteamInterface;
  else
    return (
      n(
        e,
        `neither useActiveCMInterface nor useActiveSteamInterface were provided`,
      ),
      i
    );
  let c = r.useMemo(
    () => ({
      useActiveSteamInterface: s,
      useActiveCMInterface: o,
      useStorage: t,
    }),
    [s, o, t],
  );
  return r.createElement(a, { value: c }, i);
}
var c = () => o().useActiveSteamInterface()?.GetServiceTransport(),
  l = () => o().useStorage(),
  u = () => o().useActiveSteamInterface();
export { l as a, u as i, c as n, o as r, s as t };
