/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { E as t, Ft as n, ot as r } from "./chunk~01cfc309bf.js";
var i = e(n()),
  a = e(t()),
  o = r();
function s(e) {
  let {
      id: t,
      role: n,
      visible: r = !0,
      className: i,
      keepMounted: a = !1,
      expandDirection: s = `height`,
      msAnimationDuration: l = 250,
      children: u,
    } = e,
    { style: d, active: f, refDiv: p } = c(r, s, l);
  return !r && !f && !a
    ? null
    : (0, o.jsx)(`div`, {
        id: t,
        role: n,
        className: i,
        ref: p,
        style: d,
        inert: !r,
        children: u,
      });
}
function c(e, t = `height`, n = 250) {
  let r = i.useRef(null),
    o = i.useRef(!0),
    [s, c] = i.useState(`idle`),
    [l, u] = i.useState(e ? {} : { [t]: `0px`, overflow: `hidden` }),
    [d, f] = i.useState(e);
  return (
    i.useLayoutEffect(() => {
      (o.current || c(`start`), e && f(e));
    }, [e]),
    i.useLayoutEffect(
      () => (
        (o.current = !1),
        () => {
          o.current = !0;
        }
      ),
      [],
    ),
    i.useLayoutEffect(() => {
      let n = r.current,
        i = t == `height` ? `scrollHeight` : `scrollWidth`,
        o = () => {
          a.unstable_batchedUpdates(() => {
            (u(e ? {} : { [t]: `0px`, overflow: `hidden` }), c(`idle`), f(e));
          });
        };
      if (s == `start`) {
        let r = n[i];
        r == 0
          ? o()
          : (u((n) => ({
              [t]: e ? `0px` : `${r}px`,
              ...n,
              overflow: `hidden`,
            })),
            c(`active`));
      } else if (s == `active`) {
        n.scrollTop;
        let r = n[i];
        return (
          u({ overflow: `hidden`, [t]: e ? `${r}px` : `0px` }),
          n.addEventListener(`transitionend`, o),
          () => {
            n.removeEventListener(`transitionend`, o);
          }
        );
      }
    }, [s, e]),
    { style: { ...l, transition: `${t} ${n}ms` }, active: d, refDiv: r }
  );
}
export { s as t };
