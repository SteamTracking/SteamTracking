/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  in as t,
  sn as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import { Mt as a, Pt as o, S as s, p as c } from "./chunk~25a6634263.js";
import { Ya as l } from "./chunk~1fa4b8f2ff.js";
import { E as u } from "./chunk~44f252525d.js";
import { t as d } from "./chunk~25a66342632.js";
import { n as f, t as p } from "./chunk~971d501580.js";
import { a as m, n as h, o as g, t as _ } from "./chunk~5f339e9a5f.js";
import { i as v, r as y } from "./chunk~a292304e38.js";
import { n as b } from "./chunk~a58194c5d9.js";
import {
  _ as x,
  a as ee,
  b as S,
  c as C,
  d as w,
  f as te,
  g as T,
  h as ne,
  i as E,
  l as D,
  m as O,
  n as k,
  o as A,
  p as j,
  r as re,
  s as ie,
  u as ae,
  v as oe,
  x as se,
  y as ce,
} from "./chunk~ecf04667fe.js";
import { t as M } from "./chunk~0c46413ed4.js";
var N = n(e(), 1),
  P = r(),
  F = n(o(), 1),
  le = t({
    Color: () => I,
    HitSlop: () => R,
    "IconSize-1": () => ue,
    "IconSize-2": () => de,
    "IconSize-3": () => fe,
    "IconSize-4": () => pe,
    "IconSize-5": () => me,
    "IconSize-6": () => he,
    "IconSize-7": () => ge,
    "IconSize-8": () => _e,
    "IconSize-9": () => ve,
    IconSizeDefault: () => L,
    default: () => ye,
  }),
  I = `Py4CKUGbeYs-`,
  L = `CcnpuN34m4k-`,
  ue = `_42i2I16T4iU-`,
  de = `ZMI1sXEbQLE-`,
  fe = `CJFGcwfGWVs-`,
  pe = `EK1eBcIytP0-`,
  me = `UK-YwUaPj-w-`,
  he = `dUpX0I6s3ls-`,
  ge = `_4e235KgOqgQ-`,
  _e = `MFsWRuG-oYE-`,
  ve = `neq5gxHejKE-`,
  R = `f4EiHXJjIDM-`,
  ye = {
    Color: I,
    IconSizeDefault: L,
    "IconSize-1": `_42i2I16T4iU-`,
    "IconSize-2": `ZMI1sXEbQLE-`,
    "IconSize-3": `CJFGcwfGWVs-`,
    "IconSize-4": `EK1eBcIytP0-`,
    "IconSize-5": `UK-YwUaPj-w-`,
    "IconSize-6": `dUpX0I6s3ls-`,
    "IconSize-7": `_4e235KgOqgQ-`,
    "IconSize-8": `MFsWRuG-oYE-`,
    "IconSize-9": `neq5gxHejKE-`,
    HitSlop: R,
  };
function z(e) {
  return (0, P.jsx)(`svg`, { ...Se(e) });
}
var be = [
  ...h,
  { prop: `size`, responsive: !0, className: (e) => le[`IconSize-${e}`] },
  { prop: `color`, className: I, cssProperty: (e) => [`--icon-color`, xe(e)] },
  {
    prop: `hitSlop`,
    className: R,
    cssProperty: (e) => [`--hit-slop-custom`, typeof e == `string` ? e : ``],
  },
  _.find(({ prop: e }) => e === `cursor`),
];
function xe(e) {
  return !e || e[0] === `#` ? e : m(e);
}
function Se(e) {
  let { viewBox: t, ...n } = e,
    r = { className: n.size ? void 0 : L, ...n };
  return (t && (r.viewBox = Ce(t)), g(r, be));
}
function Ce(e) {
  if (e)
    return typeof e == `number`
      ? `0 0 ${e} ${e}`
      : typeof e == `string`
        ? e
        : `0 0 ${e.width} ${e.height}`;
}
function B(e) {
  return (0, P.jsx)(z, {
    ...e,
    viewBox: 12,
    children: (0, P.jsx)(`path`, {
      d: `M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z`,
      fill: `currentColor`,
    }),
  });
}
var we = `_3jpwJsAoUYI-`,
  Te = `_1ogKYNGwSuc-`;
function Ee(e) {
  let { render: t, ...n } = e;
  return M(
    t,
    (0, P.jsx)(f, { radius: `sm`, background: `dull-8`, className: we }),
    { role: `listbox`, ...n },
  );
}
function De(e) {
  let {
    selected: t,
    focused: n,
    label: r = null,
    render: i,
    disabled: a,
    ...o
  } = e;
  return M(
    i,
    (0, P.jsx)(f, {
      focusable: !0,
      "data-selected": t ? `true` : `false`,
      "data-focused": n ? `true` : void 0,
      "aria-disabled": a,
      className: Te,
      paddingY: `2`,
      paddingX: `3`,
    }),
    { role: `option`, ...o },
    { selected: t, focused: n, disabled: a },
  );
}
var V = Object.assign(Ee, { Option: De });
(0, N.createContext)(null);
function Oe(e, t, n) {
  let { onOpenChange: r, placement: i } = e,
    a = n === `anchor`;
  return C({
    open: t,
    onOpenChange: r,
    middleware: a ? ke(e) : [],
    whileElementsMounted: a ? S : void 0,
    placement: i && typeof i == `object` ? i.initial : i,
    strategy: `fixed`,
    platform: {
      ...se,
      getOffsetParent: (e) => e?.ownerDocument?.defaultView ?? window,
    },
  });
}
function ke(e) {
  let { gutter: t = 0, placement: n } = e,
    r = [],
    i = n && typeof n == `object`;
  return (
    i && n.offset
      ? r.push(x(n.offset))
      : (i && n.offset !== void 0) || r.push(x(2)),
    i && n.flip ? r.push(T(n.flip)) : (i && n.flip !== void 0) || r.push(T()),
    i && n.shift
      ? r.push(oe(n.shift))
      : (i && n.shift !== void 0) || r.push(oe()),
    r.push(
      ce({
        apply: (n) => {
          let { rects: r, elements: i, availableHeight: a } = n,
            o = {
              boxSizing: `border-box`,
              zIndex: `1`,
              "-webkit-app-region": `no-drag`,
            };
          switch ((e.scroll && (o.overflowY = `auto`), e.width)) {
            case `target`:
              o.width = `${r.reference.width}px`;
              break;
            case `content`:
              o.width = `${r.floating.width}px`;
              break;
            case `dropdown`: {
              let e = r.reference.width;
              (r.floating.width > e && e < 200 && (e = r.floating.width),
                (o.width = `${e}px`));
            }
          }
          typeof e.width == `function` &&
            (o.width = e.width({
              unContentWidth: r.floating.width,
              unTargetWidth: r.reference.width,
            }));
          let s = typeof t == `number` ? `${t}px` : `var(--spacing-${t})`;
          ((o.maxHeight =
            typeof e.maxHeight == `function`
              ? e.maxHeight({ unAvailableHeight: a, gutter: s })
              : typeof e.maxHeight == `number`
                ? `min( calc( ${a}px - ${s} ), ${e.maxHeight}px )`
                : typeof t == `number`
                  ? `${a - t}px`
                  : `calc( ${a}px - var(--spacing-${t}) )`),
            Object.assign(i.floating.style, o),
            i.floating.style.setProperty(`--popover-max-height`, o.maxHeight));
        },
      }),
    ),
    r
  );
}
var H = (0, N.createContext)(null);
function Ae(e) {
  let { children: t, state: n } = e;
  return (0, P.jsx)(H.Provider, { value: n, children: t });
}
function je(e) {
  let { children: t } = e,
    n = N.Children.only(t),
    r = (0, N.useContext)(H),
    i = j([r?.floating.refs.setReference, n?.props.ref]);
  if (!n) return null;
  if (!r)
    return (
      console.error(
        `<PopoverListAnchor> must be a child of <PopoverListRoot>.`,
      ),
      null
    );
  let { ref: a, ...o } = n.props;
  return (0, N.cloneElement)(n, { ref: i, ...r.getReferenceProps(o) });
}
function Me(e) {
  let { children: t, render: n, ref: r, label: i } = e,
    a = (0, N.useContext)(H),
    o = j([r, a?.floating.refs.setFloating]);
  return a
    ? a.open
      ? (0, P.jsx)(Ne, {
          state: a,
          children: (0, P.jsx)(k, {
            presentation: a.presentation,
            sizing: a.sizing,
            floatingRef: o,
            floatingProps: a.getFloatingProps(),
            floatingStyles: a.floating.floatingStyles,
            referenceElement: a.floating.elements.domReference,
            label: i,
            children: (0, P.jsx)(V, {
              render: n,
              children: (0, P.jsx)(ee, {
                elementsRef: a.elementsRef,
                labelsRef: a.labelsRef,
                children: t,
              }),
            }),
          }),
        })
      : null
    : (console.error(
        `<PopoverListPositioner> must be a child of <PopoverListRoot>.`,
      ),
      null);
}
function Ne(e) {
  return i() ? (0, P.jsx)(Pe, { ...e }) : (0, P.jsx)(Fe, { ...e });
}
function Pe(e) {
  let { state: t, children: n } = e,
    r = () => t.floating.context.onOpenChange(!1),
    i = N.useRef(void 0);
  return (
    c(i, !0, !0),
    (0, P.jsx)(s, {
      navID: `PopoverList`,
      onCancelButton: r,
      modal: !0,
      navTreeRef: i,
      children: n,
    })
  );
}
function Fe(e) {
  let { state: t, children: n } = e;
  return (0, P.jsx)(E, {
    context: t.floating.context,
    initialFocus: t.initialFocus,
    returnFocus: !1,
    children: n,
  });
}
function Ie(e) {
  let {
      children: t,
      label: n,
      selected: r,
      onSelect: i,
      ref: a,
      disabled: o,
      ...s
    } = e,
    c = (0, N.useContext)(H),
    { ref: l, index: u } = w({ label: n }),
    d = j([a, l]);
  if (!c)
    return (
      console.error(`<PopoverListItem> must be a child of <PopoverListRoot>.`),
      null
    );
  let f = u === c.activeIndex,
    p = u === c.selectedIndex || !!r;
  return (0, P.jsx)(V.Option, {
    ref: d,
    selected: p,
    focused: f,
    role: `option`,
    tabIndex: 0,
    ...c.getItemProps({
      onClick: o ? void 0 : i,
      onKeyDown: (e) => {
        !o &&
          (e.key === `Enter` || (e.key === ` ` && !c.typingRef.current)) &&
          (i(e), e.preventDefault(), e.stopPropagation());
      },
      active: f,
      selected: p,
      disabled: o,
      ...s,
    }),
    children: t,
  });
}
function U(e) {
  let {
      open: t,
      activeIndex: n,
      setActiveIndex: r,
      selectedIndex: i,
      setSelectedIndex: a,
      interactions: o = {},
      role: s,
      width: c,
      maxHeight: l,
      gutter: u,
      scroll: d,
    } = e,
    f = t,
    p = re(e.presentation),
    m = Oe(e, f, p),
    h = A(m.context, { enabled: !!o.click }),
    g = D(m.context, { enabled: !!o.focus }),
    _ = ie(m.context),
    v = (0, N.useRef)([]),
    y = te(m.context, {
      listRef: v,
      activeIndex: n,
      selectedIndex: i,
      onNavigate: r,
      virtual: !!o.virtualItemFocus,
      loop: !0,
      focusItemOnOpen: !1,
    }),
    b = (0, N.useRef)([]),
    x = (0, N.useRef)(!1),
    ee = ne(m.context, {
      enabled: !!o.typeahead,
      listRef: b,
      activeIndex: n,
      selectedIndex: i,
      onMatch: f ? r : a,
      onTypingChange: (e) => (x.current = e),
    }),
    S = O(m.context, { role: s }),
    {
      getFloatingProps: C,
      getReferenceProps: w,
      getItemProps: T,
    } = ae([S, h, g, _, y, ee]);
  return {
    floating: m,
    getFloatingProps: C,
    getReferenceProps: w,
    getItemProps: T,
    open: f,
    activeIndex: n,
    selectedIndex: i,
    setSelectedIndex: a,
    elementsRef: v,
    labelsRef: b,
    typingRef: x,
    initialFocus: o.virtualItemFocus ? -1 : void 0,
    presentation: p,
    sizing: { width: c, maxHeight: l, gutter: u, scroll: d },
  };
}
var W = { Root: Ae, Anchor: je, Positioner: Me, Item: Ie },
  G = t({
    Clickable: () => Je,
    ControlBox: () => K,
    Disabled: () => Ye,
    Focusable: () => Ve,
    Hoverable: () => qe,
    "Size-1": () => Xe,
    "Size-2": () => Ze,
    "Size-3": () => Re,
    "Variant-bare": () => Ke,
    "Variant-basic": () => Le,
    "Variant-dim": () => We,
    "Variant-highlight": () => Ge,
    "Variant-inset": () => ze,
    "Variant-inset-focus": () => Be,
    "Variant-inset-glass": () => He,
    "Variant-underline": () => Ue,
    default: () => Qe,
  }),
  Le = `WvP1Y18EUvo-`,
  Re = `jwWjaxXPsDM-`,
  ze = `cD3sooLYRIw-`,
  Be = `D6wVVV-X5y0-`,
  Ve = `DNP-2w2VuQY-`,
  He = `_9bvc1oT8XTs-`,
  Ue = `_5saG3OpKKtQ-`,
  We = `cnHW45U8yJQ-`,
  Ge = `rVesyBhAePM-`,
  Ke = `k9-hKA0sTXo-`,
  K = `SPBgilcrPoU-`,
  qe = `CUrvQemWr-k-`,
  Je = `ab1HL9HJUk8-`,
  Ye = `Ln--Xddyrmk-`,
  Xe = `tV5yUd0n1-I-`,
  Ze = `_0OUc2St8owc-`,
  Qe = {
    "Variant-basic": `WvP1Y18EUvo-`,
    "Size-3": `jwWjaxXPsDM-`,
    "Variant-inset": `cD3sooLYRIw-`,
    "Variant-inset-focus": `D6wVVV-X5y0-`,
    Focusable: Ve,
    "Variant-inset-glass": `_9bvc1oT8XTs-`,
    "Variant-underline": `_5saG3OpKKtQ-`,
    "Variant-dim": `cnHW45U8yJQ-`,
    "Variant-highlight": `rVesyBhAePM-`,
    "Variant-bare": `k9-hKA0sTXo-`,
    ControlBox: K,
    Hoverable: qe,
    Clickable: Je,
    Disabled: Ye,
    "Size-1": `tV5yUd0n1-I-`,
    "Size-2": `_0OUc2St8owc-`,
  };
function $e(e) {
  let { children: t, beforeContent: n, afterContent: r, hasValue: i, ...a } = e,
    o = et(a);
  return (0, P.jsxs)(p, {
    ...o,
    align: `center`,
    "data-has-value": !!i,
    minWidth: `0`,
    children: [
      n && (0, P.jsx)(p, { paddingRight: `2`, children: n }),
      (0, P.jsx)(f, { flexGrow: `1`, minWidth: `0`, children: t }),
      r && (0, P.jsx)(p, { paddingLeft: `2`, children: r }),
    ],
  });
}
function et(e) {
  let {
      variant: t = `basic`,
      size: n,
      radius: r,
      focusable: i = !0,
      hoverable: a = !0,
      clickable: o = !0,
      disabled: s,
      className: c,
      status: l,
      color: u,
      ...d
    } = e,
    f = y(n),
    p = t === `underline` ? `none` : r;
  return g(
    {
      ...d,
      radius: p,
      "data-status": l,
      "data-dull-color": u && u !== `dull` ? u : void 0,
      className: (0, F.default)(
        K,
        i && !s && `DNP-2w2VuQY-`,
        a && !s && `CUrvQemWr-k-`,
        o && !s && `ab1HL9HJUk8-`,
        s && `Ln--Xddyrmk-`,
        G[`Variant-${t}`],
        G[`Size-${f}`],
        c,
      ),
    },
    _,
  );
}
var tt = {
  up: `rotate( 180, 10, 10 )`,
  left: `rotate( 90, 10, 10 )`,
  right: `rotate( 270, 10, 10 )`,
};
function nt(e) {
  let { direction: t = `down` } = e,
    n = tt[t];
  return (0, P.jsx)(z, {
    ...e,
    viewBox: 20,
    children: (0, P.jsx)(`path`, {
      transform: n,
      d: `M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z`,
      fill: `currentColor`,
    }),
  });
}
function rt(e) {
  return (0, P.jsx)(z, {
    ...e,
    viewBox: 16,
    children: (0, P.jsx)(`path`, {
      d: `M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z`,
      fill: `currentColor`,
    }),
  });
}
var it = t({
    Checkbox: () => J,
    Disabled: () => ct,
    Icon: () => lt,
    Root: () => q,
    "Variant-dark": () => ot,
    "Variant-light": () => at,
    "Variant-outline": () => st,
    default: () => ut,
  }),
  q = `rSf9Bk02W2U-`,
  at = `cOnQpHU2Y6g-`,
  ot = `nF9VRIidlqs-`,
  st = `UmL2HbEtBt4-`,
  ct = `W-krBS4he0U-`,
  J = `iOKN2zGTVXQ-`,
  lt = `JYjG3daoLWk-`,
  ut = {
    Root: q,
    "Variant-light": `cOnQpHU2Y6g-`,
    "Variant-dark": `nF9VRIidlqs-`,
    "Variant-outline": `UmL2HbEtBt4-`,
    Disabled: ct,
    Checkbox: J,
    Icon: lt,
  };
function dt(e) {
  let {
      checked: t,
      onChange: n,
      disabled: r,
      children: i,
      ref: a,
      variant: o,
      color: s,
      align: c = `center`,
      icon: l,
      ...u
    } = e,
    d = t === `indeterminate`,
    f = l ?? (d ? pt : rt),
    m = () => {
      r || (n && n(d ? !0 : !t));
    },
    h = (e) => {
      r || (e.key === ` ` && (m(), e.preventDefault(), e.stopPropagation()));
    },
    g = v(`Checkbox`, o);
  return (0, P.jsxs)(p, {
    align: c,
    ref: a,
    role: `checkbox`,
    "aria-checked": d ? `mixed` : t,
    "data-state": ft(t),
    className: (0, F.default)(q, it[`Variant-${g}`], r && `W-krBS4he0U-`),
    onClick: m,
    tabIndex: 0,
    onKeyDown: h,
    cursor: `default`,
    "aria-disabled": r,
    "data-accent-color": s,
    ...u,
    children: [
      (0, P.jsx)(`div`, {
        className: J,
        children: t && (0, P.jsx)(f, { className: `JYjG3daoLWk-` }),
      }),
      i,
    ],
  });
}
function ft(e) {
  return e === `indeterminate` ? e : e ? `checked` : `unchecked`;
}
function pt(e) {
  return (0, P.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, P.jsx)(`path`, {
      d: `M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z`,
      fill: `currentColor`,
    }),
  });
}
var Y = {};
((Y.arabic = () =>
  l(() => import(`./chunk~771cf66f24.js`), [], import.meta.url)),
  (Y.brazilian = () =>
    l(() => import(`./chunk~1330e2f002.js`), [], import.meta.url)),
  (Y.bulgarian = () =>
    l(() => import(`./chunk~49231d77ec.js`), [], import.meta.url)),
  (Y.czech = () =>
    l(() => import(`./chunk~44db72c5a4.js`), [], import.meta.url)),
  (Y.danish = () =>
    l(() => import(`./chunk~2777feae50.js`), [], import.meta.url)),
  (Y.dutch = () =>
    l(() => import(`./chunk~2e10adb49e.js`), [], import.meta.url)),
  (Y.english = () =>
    l(() => import(`./chunk~df81c6c5fc.js`), [], import.meta.url)),
  (Y.finnish = () =>
    l(() => import(`./chunk~45ecfc97ea.js`), [], import.meta.url)),
  (Y.french = () =>
    l(() => import(`./chunk~59ec2dd130.js`), [], import.meta.url)),
  (Y.german = () =>
    l(() => import(`./chunk~89428c5240.js`), [], import.meta.url)),
  (Y.greek = () =>
    l(() => import(`./chunk~21c9ff9591.js`), [], import.meta.url)),
  (Y.hungarian = () =>
    l(() => import(`./chunk~14d758cb29.js`), [], import.meta.url)),
  (Y.indonesian = () =>
    l(() => import(`./chunk~d48f37f295.js`), [], import.meta.url)),
  (Y.italian = () =>
    l(() => import(`./chunk~5dfbf4d6cd.js`), [], import.meta.url)),
  (Y.japanese = () =>
    l(() => import(`./chunk~4339dde4bc.js`), [], import.meta.url)),
  (Y.koreana = () =>
    l(() => import(`./chunk~2c0a4e6b9e.js`), [], import.meta.url)),
  (Y.latam = () =>
    l(() => import(`./chunk~846c762b61.js`), [], import.meta.url)),
  (Y.malay = () =>
    l(() => import(`./chunk~273d0a3c6d.js`), [], import.meta.url)),
  (Y.norwegian = () =>
    l(() => import(`./chunk~b98fc44e6c.js`), [], import.meta.url)),
  (Y.polish = () =>
    l(() => import(`./chunk~ce234124b9.js`), [], import.meta.url)),
  (Y.portuguese = () =>
    l(() => import(`./chunk~e51df7f1a8.js`), [], import.meta.url)),
  (Y.romanian = () =>
    l(() => import(`./chunk~01c42398bb.js`), [], import.meta.url)),
  (Y.russian = () =>
    l(() => import(`./chunk~e1be9be6db.js`), [], import.meta.url)),
  (Y.sc_schinese = () =>
    l(() => import(`./chunk~79314b6b7e.js`), [], import.meta.url)),
  (Y.schinese = () =>
    l(() => import(`./chunk~942a8cfb44.js`), [], import.meta.url)),
  (Y.spanish = () =>
    l(() => import(`./chunk~78512764a7.js`), [], import.meta.url)),
  (Y.swedish = () =>
    l(() => import(`./chunk~63cd4ce11c.js`), [], import.meta.url)),
  (Y.tchinese = () =>
    l(() => import(`./chunk~50ba23d991.js`), [], import.meta.url)),
  (Y.thai = () =>
    l(() => import(`./chunk~809fd3f292.js`), [], import.meta.url)),
  (Y.turkish = () =>
    l(() => import(`./chunk~d56ce600a7.js`), [], import.meta.url)),
  (Y.ukrainian = () =>
    l(() => import(`./chunk~0c06f02b2f.js`), [], import.meta.url)),
  (Y.vietnamese = () =>
    l(() => import(`./chunk~b7b0d5907a.js`), [], import.meta.url)));
async function mt(e) {
  if (Y[e]) return await Y[e]();
}
var X = u(mt);
function ht(e) {
  let {
      children: t,
      state: n,
      placement: r = `bottom-end`,
      popoverWidth: i = `dropdown`,
      popoverMaxHeight: a,
      popoverPresentation: o,
      popoverLabel: s,
      ...c
    } = e,
    [l, u] = (0, N.useState)(null),
    [d, f] = (0, N.useState)(null),
    p = (0, N.useMemo)(
      () =>
        n.rgOptions.findIndex((e) =>
          n.multiselect ? n.selectedValue.includes(e) : e === n.selectedValue,
        ),
      [n.selectedValue, n.rgOptions, n.multiselect],
    ),
    m = (0, N.useRef)(null),
    h = {
      ...n,
      ...c,
      focusedValue: l,
      onFocusChange: u,
      refPopover: m,
      popoverLabel: s,
      setOpen: (e) => {
        (e && u(n.multiselect ? n.selectedValue[0] : n.selectedValue),
          n.setOpen(e));
      },
      focusedIndex: d,
      onFocusedIndexChange: f,
    },
    g = U({
      open: n.bOpen,
      onOpenChange: n.setOpen,
      width: i,
      maxHeight: a,
      placement: r,
      presentation: o,
      selectedIndex: p,
      setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
      activeIndex: d,
      setActiveIndex: f,
      gutter: `4`,
      interactions: { click: !0, typeahead: !0 },
      role: `select`,
      scroll: !0,
    });
  return (0, P.jsx)(kt.Provider, {
    value: h,
    children: (0, P.jsx)(W.Root, { state: g, children: t }),
  });
}
function gt(e) {
  let { refPopover: t, popoverLabel: n } = $(`<Select.Options>`);
  return (0, P.jsx)(W.Positioner, { ref: t, label: n, children: e.children });
}
function _t(e) {
  let { value: t, children: n, disabled: r, ...i } = e,
    {
      onItemSelectionChange: a,
      multiselect: o,
      selectedValue: s,
      maxSelected: c,
    } = $(`<Select.Option>`),
    l = typeof t == `string` ? t : void 0,
    u = !1,
    d = !1;
  o
    ? ((u = Array.isArray(s) && s.includes(t)),
      (d = !!c && Array.isArray(s) && s.length >= c))
    : (u = t === s);
  let f = r || (d && !u);
  return (0, P.jsxs)(W.Item, {
    label: l,
    onSelect: () => a(t),
    selected: u,
    disabled: f,
    ...i,
    children: [
      o &&
        (0, P.jsxs)(p, {
          gap: `2`,
          align: `center`,
          children: [(0, P.jsx)(dt, { checked: u, variant: `dark` }), n],
        }),
      !o && n,
    ],
  });
}
function vt(e) {
  let { children: t, render: n } = e,
    {
      bOpen: r,
      setOpen: i,
      selectedValue: o,
      variant: s,
      size: c,
      radius: l,
      status: u,
      color: d,
      rgOptions: f,
      multiselect: p,
      onClear: m,
      focusedValue: h,
      onFocusChange: g,
      onSelectionChange: _,
      clearable: y,
      focusedIndex: b,
      onItemSelectionChange: x,
      onFocusedIndexChange: ee,
      refPopover: S,
      popoverLabel: C,
      placeholder: w,
      maxSelected: te,
      ...T
    } = $(`<SelectTrigger>`),
    ne = { tabIndex: 0, role: `combobox`, onClick: () => i(!r), children: t },
    E = p ? Array.isArray(o) && o.length > 0 : o != null,
    D = E && y,
    O = D
      ? (0, P.jsx)(B, { onClick: m, cursor: `pointer`, hitSlop: !0 })
      : (0, P.jsx)(nt, {}),
    k = D
      ? {
          onSecondaryButton: m,
          actionDescriptionMap: { [a.SECONDARY]: X.Localize(`#Clear`) },
        }
      : void 0,
    A = v(`Select`, s),
    j = (0, P.jsx)($e, {
      afterContent: O,
      variant: A,
      size: c,
      radius: l,
      status: u,
      color: d,
      hasValue: E,
      tabIndex: 0,
      cursor: `pointer`,
      navProps: k,
      ...T,
    }),
    re = M(n, j, ne, void 0);
  return (0, P.jsx)(W.Anchor, { children: re });
}
function yt(e) {
  return (0, P.jsx)(b, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ...e,
  });
}
function bt(e) {
  return (0, P.jsx)(b, { contrast: `description`, truncate: !0, ...e });
}
function xt(e) {
  return St(e, !1);
}
function St(e, t) {
  let { onSelectionChange: n, selectedValue: r, ...i } = e,
    [a, o] = (0, N.useState)(!1),
    s = (0, N.useCallback)(
      (e) => {
        (n(e), t || o(!1));
      },
      [n, t],
    ),
    c = (0, N.useCallback)(
      (e) => {
        (s(t ? [] : null), e?.stopPropagation(), e?.preventDefault());
      },
      [s, t],
    );
  return {
    onSelectionChange: s,
    onItemSelectionChange: (0, N.useCallback)(
      (e) => {
        if (!t) s(e);
        else {
          let t = r,
            n = t.indexOf(e);
          if (n === -1) s(t.concat(e));
          else return s(t.slice(0, n).concat(t.slice(n + 1)));
        }
      },
      [s, r, t],
    ),
    onClear: c,
    bOpen: a,
    setOpen: o,
    multiselect: t,
    selectedValue: r,
    ...i,
  };
}
var Ct = {
  Root: ht,
  Option: _t,
  Options: gt,
  Trigger: vt,
  Value: yt,
  Placeholder: bt,
};
function wt(e) {
  return typeof e == `string`
    ? e
    : typeof e == `number`
      ? e.toString()
      : (console.error(
          `Could not use default option labeler on Select option value. Custom labeler requried`,
          e,
        ),
        ``);
}
function Tt(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      placeholder: i,
      getOptionLabel: a = wt,
      ...o
    } = e,
    s = xt({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      placeholder: i,
    }),
    c = t != null,
    l = c ? a(t) : ``;
  return (0, P.jsxs)(Z.Root, {
    state: s,
    ...o,
    children: [
      (0, P.jsxs)(Z.Trigger, {
        children: [
          c && (0, P.jsx)(Z.Value, { children: l }),
          !c && (0, P.jsx)(Z.Placeholder, { children: i }),
        ],
      }),
      (0, P.jsx)(Z.Options, {
        children: s.rgOptions.map((e, t) =>
          (0, P.jsx)(Z.Option, { value: e, children: a(e) }, t),
        ),
      }),
    ],
  });
}
var Z = Object.assign(Tt, Ct);
function Et(e) {
  return St(e, !0);
}
var Dt = Ct;
function Ot(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      placeholder: i,
      getOptionLabel: a = wt,
      maxSelected: o,
      ...s
    } = e,
    c = Et({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      placeholder: i,
      maxSelected: o,
    }),
    l = Array.isArray(t) && t.length > 0,
    u = ``;
  if (l) {
    let e = t.map((e) => a(e));
    u =
      `ListFormat` in Intl
        ? new Intl.ListFormat(d().strISOCode).format(e)
        : e.join(`, `);
  }
  return (0, P.jsxs)(Q.Root, {
    state: c,
    ...s,
    children: [
      (0, P.jsxs)(Q.Trigger, {
        children: [
          l && (0, P.jsx)(Q.Value, { children: u }),
          !l && (0, P.jsx)(Q.Placeholder, { children: i }),
        ],
      }),
      (0, P.jsx)(Q.Options, {
        children: c.rgOptions.map((e, t) =>
          (0, P.jsx)(Q.Option, { value: e, children: a(e) }, t),
        ),
      }),
    ],
  });
}
var Q = Object.assign(Ot, Dt),
  kt = (0, N.createContext)(null);
function $(e) {
  let t = (0, N.useContext)(kt);
  return (t || console.error(`${e} must be used within a <Select>!`), t);
}
export {
  dt as a,
  $e as c,
  U as d,
  B as f,
  X as i,
  et as l,
  Z as n,
  rt as o,
  xt as r,
  nt as s,
  Q as t,
  W as u,
};
