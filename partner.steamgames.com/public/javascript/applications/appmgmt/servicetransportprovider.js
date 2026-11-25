/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ot as e, Pt as t, nt as n } from "./chunk~de7f2df91c.js";
var r = t(n(), 1),
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
function s(t) {
  let { useStorage: n, children: i } = t,
    o,
    s;
  if (`useActiveCMInterface` in t) s = o = t.useActiveCMInterface;
  else if (`useActiveSteamInterface` in t) s = t.useActiveSteamInterface;
  else
    return (
      e(
        t,
        `neither useActiveCMInterface nor useActiveSteamInterface were provided`,
      ),
      i
    );
  let c = r.useMemo(
    () => ({
      useActiveSteamInterface: s,
      useActiveCMInterface: o,
      useStorage: n,
    }),
    [s, o, n],
  );
  return r.createElement(a, { value: c }, i);
}
var c = () => o().useActiveSteamInterface()?.GetServiceTransport(),
  l = () => o().useStorage(),
  u = () => o().useActiveSteamInterface();
export { l as a, u as i, c as n, o as r, s as t };
