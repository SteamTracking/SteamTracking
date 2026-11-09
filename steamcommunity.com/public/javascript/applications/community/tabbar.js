/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Ct as t, Pt as n, ot as r, wt as i } from "./libraries.js";
import { i as a, t as o } from "./historyutils.js";
import {
  Cu as s,
  Ss as c,
  Zd as l,
  gs as u,
  xu as d,
  zu as f,
} from "./main.js";
var p = e(n()),
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
  w = r();
function T(e) {
  let {
      tabs: n,
      bDisableRouting: r,
      startingTab: c,
      controlledTab: l,
      OnTabChanged: u,
      classNameCtn: h,
      classNameTab: _,
      focusRingHasBorderRadius: v,
      classNameTabContent: y,
      preferredFocus: b,
      bVerticalTabs: x,
      bSticky: S,
      bChecklistMode: C,
    } = e,
    T = i(),
    E = t(),
    [O, k] = (0, p.useState)(
      () => c || (!r && o(T, `tab`) ? (o(T, `tab`) ?? ``) : ``),
    );
  (0, p.useEffect)(() => {
    if (!e.bDisableRouting && T) {
      let e = o(T, `tab`);
      e && k(e);
    }
  }, [T, T.key, e.bDisableRouting, k]);
  let A = p.useCallback(
      (e) => {
        k(e.key),
          r || a(E, `tab`, e.key),
          u?.(e.key),
          e.onClick && e.onClick(e);
      },
      [r, E, u],
    ),
    j = n.filter((e) => !e.hidden);
  if (!j.length) return null;
  let M = l ?? O,
    N = j.find((e) => e.key === M) || j[0],
    P = b ? (c ?? j[0].key) : void 0,
    F = (0, w.jsxs)(w.Fragment, {
      children: [
        (0, w.jsx)(s, {
          className: d(
            m,
            x && `iBLrw-7gAIM-`,
            C && `dLhmGXBhTkM-`,
            S && `ShXw34CXvuE-`,
            h,
          ),
          navEntryPreferPosition: b ? f.PREFERRED_CHILD : f.FIRST,
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
        N && (0, w.jsx)(s, { className: y, children: N.contents }),
      ],
    });
  return x ? (0, w.jsx)(s, { className: d(g), children: F }) : F;
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
    (0, w.jsx)(`div`, { className: d(_, i, n ? v : ``), children: r })
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
  return (0, w.jsx)(c, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, w.jsx)(u, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, w.jsxs)(s, {
      className: d(h, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, w.jsx)(u, {
            toolTipContent: t.vo_warning,
            children: (0, w.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: l(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
export { E as n, T as t };
