/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { en as e, kt as t, on as n } from "./mobx.esm.js";
var r = n(t(), 1),
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
  l = () => o().useActiveSteamInterface().GetAnonymousServiceTransport(),
  u = () => o().useStorage(),
  d = () => o().useActiveSteamInterface();
export { d as a, o as i, l as n, u as o, c as r, s as t };
