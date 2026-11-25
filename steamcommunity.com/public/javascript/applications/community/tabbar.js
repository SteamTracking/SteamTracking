/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import { i as r, t as i } from "./chunk~af36c62e9f.js";
import {
  Bu as a,
  Fi as o,
  Ii as s,
  Qd as c,
  Su as l,
  bu as u,
  hs as d,
  xs as f,
} from "./main.js";
var p = e(t()),
  m = `_5YxPcG58GcM-`,
  h = `AYShSUpazpQ-`,
  g = `HjTriTNInOs-`,
  _ = `jWG83h6aX0o-`,
  v = `hIkabJ6m7Iw-`,
  y = `ruViLASsnaU-`,
  b = `_2u1btMDPW24-`,
  x = `Ps-gpwoy9Is-`,
  S = `L44OviB8cOM-`,
  C = `K1CYINTJapk-`,
  w = n();
function T(e) {
  let {
      tabs: t,
      bDisableRouting: n,
      startingTab: c,
      controlledTab: d,
      OnTabChanged: f,
      classNameCtn: h,
      classNameTab: _,
      focusRingHasBorderRadius: v,
      classNameTabContent: y,
      preferredFocus: b,
      bVerticalTabs: x,
      bSticky: S,
      bChecklistMode: C,
    } = e,
    T = s(),
    E = o(),
    [O, k] = (0, p.useState)(
      () => c || (!n && i(T, `tab`) ? (i(T, `tab`) ?? ``) : ``),
    );
  (0, p.useEffect)(() => {
    if (!e.bDisableRouting && T) {
      let e = i(T, `tab`);
      e && k(e);
    }
  }, [T, e.bDisableRouting, k]);
  let A = p.useCallback(
      (e) => {
        (k(e.key),
          n || r(E, `tab`, e.key),
          f?.(e.key),
          e.onClick && e.onClick(e));
      },
      [n, E, f],
    ),
    j = t.filter((e) => !e.hidden);
  if (!j.length) return null;
  let M = d ?? O,
    N = j.find((e) => e.key === M) || j[0],
    P = b ? (c ?? j[0].key) : void 0,
    F = (0, w.jsxs)(w.Fragment, {
      children: [
        (0, w.jsx)(l, {
          className: u(
            m,
            x && `iBLrw-7gAIM-`,
            C && `dLhmGXBhTkM-`,
            S && `ShXw34CXvuE-`,
            h,
          ),
          navEntryPreferPosition: b ? a.PREFERRED_CHILD : a.FIRST,
          children: j.map((e, t) =>
            (0, w.jsx)(
              D,
              {
                tab: e,
                OnTabClick: A,
                classNameTab: _,
                focusRingHasBorderRadius: v,
                active: e.key === N.key,
                preferredFocus: P === e.key,
              },
              e.key,
            ),
          ),
        }),
        N && (0, w.jsx)(l, { className: y, children: N.contents }),
      ],
    });
  return x ? (0, w.jsx)(l, { className: u(g), children: F }) : F;
}
function E(e) {
  let { statusType: t = `success`, bShowStatusBox: n, children: r } = e,
    i = ``;
  return (
    t === `success`
      ? (i = y)
      : t === `danger`
        ? (i = b)
        : t === `caution`
          ? (i = x)
          : t === `info`
            ? (i = S)
            : t === `incomplete` && (i = C),
    (0, w.jsx)(`div`, { className: u(_, i, n ? v : ``), children: r })
  );
}
function D(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, w.jsx)(f, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, w.jsx)(d, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, w.jsxs)(l, {
      className: u(h, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, w.jsx)(d, {
            toolTipContent: t.vo_warning,
            children: (0, w.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: c(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
export { E as n, T as t };
