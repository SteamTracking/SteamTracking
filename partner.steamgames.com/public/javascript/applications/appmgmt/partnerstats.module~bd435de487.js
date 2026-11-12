/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { At as e, rt as t, sn as n, yt as r } from "./chunk~de7f2df91c.js";
import { j as i, k as a } from "./chunk~0a99e05c44.js";
import { z as o } from "./chunk~44f252525d.js";
import { t as s } from "./chunk~ede3e357a2.js";
import { t as c } from "./chunk~9aa05d2c7d.js";
import { t as l } from "./chunk~4406a7b793.js";
import { x as u } from "./chunk~a825a84845.js";
import { E as d, t as f } from "./chunk~b00bc5ccc1.js";
import { r as p, t as m } from "./chunk~70c16cc80c.js";
var h = n(e()),
  g = [`axis`],
  _ = (0, h.forwardRef)((e, t) =>
    h.createElement(f, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: g,
      tooltipPayloadSearcher: d,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  v = n(l()),
  y = class e {
    m_steamInterface;
    GetPromotionTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      this.m_steamInterface = m(new p(t.WEBAPI_BASE_URL));
    }
  };
function b() {
  return y.Get().GetPromotionTransport().GetServiceTransport();
}
function x(e) {
  let t = b(),
    n = h.useContext(C);
  return s(w(n, t, e));
}
function S(e) {
  return c.getQueryData([`StoreItemCountryRestriction`, u(e)]);
}
var C = h.createContext({
  loadStoreItemCountryRestriction: async (e, t) => await E(t).load(e),
});
function w(e, t, n) {
  return {
    queryKey: [`StoreItemCountryRestriction`, u(n)],
    queryFn: () => e.loadStoreItemCountryRestriction(n, t),
    enabled: !!n,
  };
}
var T;
function E(e) {
  return (
    (T ||= new v.default(
      async (t) => {
        let n = r.Init(a);
        n.Body().set_ids(t.map((e) => o.fromObject(e)));
        let s = await i.GetCountryRestrictions(e, n);
        if (!s.BSuccess())
          throw `Failed to call store Item Country Restriction with details: ${s.GetErrorMessage()}`;
        let c = new Map();
        return (
          s
            .Body()
            .results()
            .forEach((e) => {
              let t = e.toObject();
              c.set(u(t.id), t);
            }),
          t.map((e) => c.get(u(e)) ?? null)
        );
      },
      { maxBatchSize: 100, cache: !1 },
    )),
    T
  );
}
function D(e, t) {
  let n = new Date(e * 1e3),
    r = t ? new Date(t * 1e3) : new Date(n);
  t || r.setDate(n.getDate() + 6);
  let i = n.toLocaleString(`en-US`, { month: `short` }),
    a = n.getDate(),
    o = r.toLocaleString(`en-US`, { month: `short` }),
    s = r.getDate();
  return i === o ? `${i} ${a} - ${s}` : `${i} ${a} - ${o} ${s}`;
}
function O(e) {
  let t = k(e);
  return t.endsWith(`M`) || t.endsWith(`K`)
    ? `$${t}`
    : new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: `USD`,
      }).format(Number(t));
}
function k(e) {
  let t;
  return (
    (t =
      Math.abs(e) >= 1e6
        ? (e / 1e6).toFixed(1) + `M`
        : Math.abs(e) >= 1e3
          ? (e / 1e3).toFixed(1) + `K`
          : e.toFixed(2)),
    t
  );
}
var A = `_7FQdtBvoXrk-`,
  j = `liWV2kXLNXs-`,
  M = `_9GZqUtz3ZYo-`,
  N = `YwlJRL8zo70-`,
  P = `NPZ9l-DM5gY-`,
  F = `WLpp1N1Ds-o-`,
  I = `cvVmT5yJexA-`,
  L = `W1xCyDqwgmQ-`,
  R = `K0zODM-isrk-`,
  z = `KeyfsZAhLmk-`,
  B = `H5V46OnRrg0-`,
  V = `amUB9WH9CcY-`,
  H = `rnzT6bsO-Xo-`,
  U = `wrTT8gAV7a8-`,
  W = `OMu8YgzmezU-`,
  G = `OkBJ9lnHzW4-`,
  K = `BbxClrMpUdY-`,
  q = `awoPIVALX4Y-`,
  J = `OKv0fNZ2-3M-`,
  Y = `V8TussbOeig-`,
  X = `kOrWeMzNg6w-`,
  Z = `ry4i3BWpvYc-`,
  Q = `TkQowTDAabk-`;
export {
  Y as C,
  S as D,
  O as E,
  x as O,
  G as S,
  k as T,
  I as _,
  N as a,
  W as b,
  q as c,
  J as d,
  z as f,
  F as g,
  L as h,
  B as i,
  _ as k,
  H as l,
  X as m,
  P as n,
  Z as o,
  Q as p,
  R as r,
  M as s,
  A as t,
  j as u,
  U as v,
  D as w,
  V as x,
  K as y,
};
