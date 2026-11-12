/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { i as r, t as i } from "./chunk~af36c62e9f.js";
import {
  Cs as a,
  Hi as o,
  Hu as s,
  Su as c,
  Vi as l,
  _s as u,
  ef as d,
  wu as f,
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
      startingTab: a,
      controlledTab: u,
      OnTabChanged: d,
      classNameCtn: h,
      classNameTab: _,
      focusRingHasBorderRadius: v,
      classNameTabContent: y,
      preferredFocus: b,
      bVerticalTabs: x,
      bSticky: S,
      bChecklistMode: C,
    } = e,
    T = o(),
    E = l(),
    [O, k] = (0, p.useState)(
      () => a || (!n && i(T, `tab`) ? (i(T, `tab`) ?? ``) : ``),
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
          d?.(e.key),
          e.onClick && e.onClick(e));
      },
      [n, E, d],
    ),
    j = t.filter((e) => !e.hidden);
  if (!j.length) return null;
  let M = u ?? O,
    N = j.find((e) => e.key === M) || j[0],
    P = b ? (a ?? j[0].key) : void 0,
    F = (0, w.jsxs)(w.Fragment, {
      children: [
        (0, w.jsx)(f, {
          className: c(
            m,
            x && `iBLrw-7gAIM-`,
            C && `dLhmGXBhTkM-`,
            S && `ShXw34CXvuE-`,
            h,
          ),
          navEntryPreferPosition: b ? s.PREFERRED_CHILD : s.FIRST,
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
        N && (0, w.jsx)(f, { className: y, children: N.contents }),
      ],
    });
  return x ? (0, w.jsx)(f, { className: c(g), children: F }) : F;
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
    (0, w.jsx)(`div`, { className: c(_, i, n ? v : ``), children: r })
  );
}
function D(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: o,
    preferredFocus: s,
  } = e;
  return (0, w.jsx)(a, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, w.jsx)(u, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, w.jsxs)(f, {
      className: c(h, o && `Tw-TchJW1T8-`, o && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: s,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, w.jsx)(u, {
            toolTipContent: t.vo_warning,
            children: (0, w.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: d(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
export { E as n, T as t };
