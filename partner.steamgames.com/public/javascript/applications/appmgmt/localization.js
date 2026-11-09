/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { R as e, _t as t, kt as n, on as r, rn as i } from "./mobx.esm.js";
import { It as a, h as o, w as s } from "./src.js";
import { Ga as c } from "./dialogs.js";
import { D as l } from "./react-router.js";
import { n as u, t as d } from "./flex.js";
import { a as f, n as p, o as m, t as h } from "./layout.js";
import { n as g } from "./variantdefaults.js";
import {
  _,
  a as v,
  b as y,
  c as b,
  d as x,
  f as ee,
  g as S,
  h as te,
  i as C,
  l as ne,
  m as re,
  n as w,
  o as ie,
  p as T,
  r as ae,
  s as E,
  u as D,
  v as O,
  x as oe,
  y as se,
} from "./popoversurface.js";
import { t as k } from "./render.js";
var A = r(n(), 1),
  ce = i({
    Color: () => j,
    HitSlop: () => N,
    "IconSize-1": () => le,
    "IconSize-2": () => ue,
    "IconSize-3": () => de,
    "IconSize-4": () => fe,
    "IconSize-5": () => pe,
    "IconSize-6": () => me,
    "IconSize-7": () => he,
    "IconSize-8": () => ge,
    "IconSize-9": () => _e,
    IconSizeDefault: () => M,
    default: () => P,
  }),
  j = `Py4CKUGbeYs-`,
  M = `CcnpuN34m4k-`,
  le = `_42i2I16T4iU-`,
  ue = `ZMI1sXEbQLE-`,
  de = `CJFGcwfGWVs-`,
  fe = `EK1eBcIytP0-`,
  pe = `UK-YwUaPj-w-`,
  me = `dUpX0I6s3ls-`,
  he = `_4e235KgOqgQ-`,
  ge = `MFsWRuG-oYE-`,
  _e = `neq5gxHejKE-`,
  N = `f4EiHXJjIDM-`,
  P = {
    Color: j,
    IconSizeDefault: M,
    "IconSize-1": `_42i2I16T4iU-`,
    "IconSize-2": `ZMI1sXEbQLE-`,
    "IconSize-3": `CJFGcwfGWVs-`,
    "IconSize-4": `EK1eBcIytP0-`,
    "IconSize-5": `UK-YwUaPj-w-`,
    "IconSize-6": `dUpX0I6s3ls-`,
    "IconSize-7": `_4e235KgOqgQ-`,
    "IconSize-8": `MFsWRuG-oYE-`,
    "IconSize-9": `neq5gxHejKE-`,
    HitSlop: N,
  },
  F = t();
function I(e) {
  return (0, F.jsx)(`svg`, { ...be(e) });
}
var ve = [
  ...p,
  { prop: `size`, responsive: !0, className: (e) => ce[`IconSize-${e}`] },
  { prop: `color`, className: j, cssProperty: (e) => [`--icon-color`, ye(e)] },
  {
    prop: `hitSlop`,
    className: N,
    cssProperty: (e) => [`--hit-slop-custom`, typeof e == `string` ? e : ``],
  },
  h.find(({ prop: e }) => e === `cursor`),
];
function ye(e) {
  return !e || e[0] === `#` ? e : f(e);
}
function be(e) {
  let { viewBox: t, ...n } = e,
    r = { className: n.size ? void 0 : M, ...n };
  return (t && (r.viewBox = xe(t)), m(r, ve));
}
function xe(e) {
  if (e)
    return typeof e == `number`
      ? `0 0 ${e} ${e}`
      : typeof e == `string`
        ? e
        : `0 0 ${e.width} ${e.height}`;
}
function Se(e) {
  return (0, F.jsx)(I, {
    ...e,
    viewBox: 12,
    children: (0, F.jsx)(`path`, {
      d: `M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z`,
      fill: `currentColor`,
    }),
  });
}
var Ce = `_3jpwJsAoUYI-`,
  we = `_1ogKYNGwSuc-`;
function Te(e) {
  let { render: t, ...n } = e;
  return k(
    t,
    (0, F.jsx)(u, { radius: `sm`, background: `dull-8`, className: Ce }),
    { role: `listbox`, ...n },
  );
}
function Ee(e) {
  let {
    selected: t,
    focused: n,
    label: r = null,
    render: i,
    disabled: a,
    ...o
  } = e;
  return k(
    i,
    (0, F.jsx)(u, {
      focusable: !0,
      "data-selected": t ? `true` : `false`,
      "data-focused": n ? `true` : void 0,
      "aria-disabled": a,
      className: we,
      paddingY: `2`,
      paddingX: `3`,
    }),
    { role: `option`, ...o },
    { selected: t, focused: n, disabled: a },
  );
}
var L = Object.assign(Te, { Option: Ee }),
  R = r(a(), 1);
(0, A.createContext)(null);
function De(e, t, n) {
  let { onOpenChange: r, placement: i } = e,
    a = n === `anchor`;
  return b({
    open: t,
    onOpenChange: r,
    middleware: a ? Oe(e) : [],
    whileElementsMounted: a ? y : void 0,
    placement: i && typeof i == `object` ? i.initial : i,
    strategy: `fixed`,
    platform: {
      ...oe,
      getOffsetParent: (e) => e?.ownerDocument?.defaultView ?? window,
    },
  });
}
function Oe(e) {
  let { gutter: t = 0, placement: n } = e,
    r = [],
    i = n && typeof n == `object`;
  return (
    i && n.offset
      ? r.push(_(n.offset))
      : (i && n.offset !== void 0) || r.push(_(2)),
    i && n.flip ? r.push(S(n.flip)) : (i && n.flip !== void 0) || r.push(S()),
    i && n.shift
      ? r.push(O(n.shift))
      : (i && n.shift !== void 0) || r.push(O()),
    r.push(
      se({
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
var z = (0, A.createContext)(null);
function ke(e) {
  let { children: t, state: n } = e;
  return (0, F.jsx)(z.Provider, { value: n, children: t });
}
function Ae(e) {
  let { children: t } = e,
    n = A.Children.only(t),
    r = (0, A.useContext)(z),
    i = T([r?.floating.refs.setReference, n?.props.ref]);
  if (!n) return null;
  if (!r)
    return (
      console.error(
        `<PopoverListAnchor> must be a child of <PopoverListRoot>.`,
      ),
      null
    );
  let { ref: a, ...o } = n.props;
  return (0, A.cloneElement)(n, { ref: i, ...r.getReferenceProps(o) });
}
function je(e) {
  let { children: t, render: n, ref: r, label: i } = e,
    a = (0, A.useContext)(z),
    o = T([r, a?.floating.refs.setFloating]);
  return a
    ? a.open
      ? (0, F.jsx)(Me, {
          state: a,
          children: (0, F.jsx)(w, {
            presentation: a.presentation,
            sizing: a.sizing,
            floatingRef: o,
            floatingProps: a.getFloatingProps(),
            floatingStyles: a.floating.floatingStyles,
            referenceElement: a.floating.elements.domReference,
            label: i,
            children: (0, F.jsx)(L, {
              render: n,
              children: (0, F.jsx)(v, {
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
function Me(t) {
  return e() ? (0, F.jsx)(Ne, { ...t }) : (0, F.jsx)(Pe, { ...t });
}
function Ne(e) {
  let { state: t, children: n } = e,
    r = () => t.floating.context.onOpenChange(!1),
    i = A.useRef(void 0);
  return (
    o(i, !0, !0),
    (0, F.jsx)(s, {
      navID: `PopoverList`,
      onCancelButton: r,
      modal: !0,
      navTreeRef: i,
      children: n,
    })
  );
}
function Pe(e) {
  let { state: t, children: n } = e;
  return (0, F.jsx)(C, {
    context: t.floating.context,
    initialFocus: t.initialFocus,
    returnFocus: !1,
    children: n,
  });
}
function Fe(e) {
  let {
      children: t,
      label: n,
      selected: r,
      onSelect: i,
      ref: a,
      disabled: o,
      ...s
    } = e,
    c = (0, A.useContext)(z),
    { ref: l, index: u } = x({ label: n }),
    d = T([a, l]);
  if (!c)
    return (
      console.error(`<PopoverListItem> must be a child of <PopoverListRoot>.`),
      null
    );
  let f = u === c.activeIndex,
    p = u === c.selectedIndex || !!r;
  return (0, F.jsx)(L.Option, {
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
function Ie(e) {
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
    p = ae(e.presentation),
    m = De(e, f, p),
    h = ie(m.context, { enabled: !!o.click }),
    g = ne(m.context, { enabled: !!o.focus }),
    _ = E(m.context),
    v = (0, A.useRef)([]),
    y = ee(m.context, {
      listRef: v,
      activeIndex: n,
      selectedIndex: i,
      onNavigate: r,
      virtual: !!o.virtualItemFocus,
      loop: !0,
      focusItemOnOpen: !1,
    }),
    b = (0, A.useRef)([]),
    x = (0, A.useRef)(!1),
    S = te(m.context, {
      enabled: !!o.typeahead,
      listRef: b,
      activeIndex: n,
      selectedIndex: i,
      onMatch: f ? r : a,
      onTypingChange: (e) => (x.current = e),
    }),
    C = re(m.context, { role: s }),
    {
      getFloatingProps: w,
      getReferenceProps: T,
      getItemProps: O,
    } = D([C, h, g, _, y, S]);
  return {
    floating: m,
    getFloatingProps: w,
    getReferenceProps: T,
    getItemProps: O,
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
var Le = { Root: ke, Anchor: Ae, Positioner: je, Item: Fe },
  B = i({
    Clickable: () => W,
    ControlBox: () => H,
    Disabled: () => G,
    Focusable: () => V,
    Hoverable: () => U,
    "Size-1": () => qe,
    "Size-2": () => Je,
    "Size-3": () => ze,
    "Variant-bare": () => Ke,
    "Variant-basic": () => Re,
    "Variant-dim": () => We,
    "Variant-highlight": () => Ge,
    "Variant-inset": () => Be,
    "Variant-inset-focus": () => Ve,
    "Variant-inset-glass": () => He,
    "Variant-underline": () => Ue,
    default: () => Ye,
  }),
  Re = `WvP1Y18EUvo-`,
  ze = `jwWjaxXPsDM-`,
  Be = `cD3sooLYRIw-`,
  Ve = `D6wVVV-X5y0-`,
  V = `DNP-2w2VuQY-`,
  He = `_9bvc1oT8XTs-`,
  Ue = `_5saG3OpKKtQ-`,
  We = `cnHW45U8yJQ-`,
  Ge = `rVesyBhAePM-`,
  Ke = `k9-hKA0sTXo-`,
  H = `SPBgilcrPoU-`,
  U = `CUrvQemWr-k-`,
  W = `ab1HL9HJUk8-`,
  G = `Ln--Xddyrmk-`,
  qe = `tV5yUd0n1-I-`,
  Je = `_0OUc2St8owc-`,
  Ye = {
    "Variant-basic": `WvP1Y18EUvo-`,
    "Size-3": `jwWjaxXPsDM-`,
    "Variant-inset": `cD3sooLYRIw-`,
    "Variant-inset-focus": `D6wVVV-X5y0-`,
    Focusable: V,
    "Variant-inset-glass": `_9bvc1oT8XTs-`,
    "Variant-underline": `_5saG3OpKKtQ-`,
    "Variant-dim": `cnHW45U8yJQ-`,
    "Variant-highlight": `rVesyBhAePM-`,
    "Variant-bare": `k9-hKA0sTXo-`,
    ControlBox: H,
    Hoverable: U,
    Clickable: W,
    Disabled: G,
    "Size-1": `tV5yUd0n1-I-`,
    "Size-2": `_0OUc2St8owc-`,
  };
function Xe(e) {
  let { children: t, beforeContent: n, afterContent: r, hasValue: i, ...a } = e,
    o = K(a);
  return (0, F.jsxs)(d, {
    ...o,
    align: `center`,
    "data-has-value": !!i,
    minWidth: `0`,
    children: [
      n && (0, F.jsx)(d, { paddingRight: `2`, children: n }),
      (0, F.jsx)(u, { flexGrow: `1`, minWidth: `0`, children: t }),
      r && (0, F.jsx)(d, { paddingLeft: `2`, children: r }),
    ],
  });
}
function K(e) {
  let {
      variant: t = `basic`,
      size: n = `2`,
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
    f = t === `underline` ? `none` : r;
  return m(
    {
      ...d,
      radius: f,
      "data-status": l,
      "data-dull-color": u && u !== `dull` ? u : void 0,
      className: (0, R.default)(
        H,
        i && !s && `DNP-2w2VuQY-`,
        a && !s && `CUrvQemWr-k-`,
        o && !s && `ab1HL9HJUk8-`,
        s && `Ln--Xddyrmk-`,
        B[`Variant-${t}`],
        B[`Size-${n}`],
        c,
      ),
    },
    h,
  );
}
var Ze = {
  up: `rotate( 180, 10, 10 )`,
  left: `rotate( 90, 10, 10 )`,
  right: `rotate( 270, 10, 10 )`,
};
function Qe(e) {
  let { direction: t = `down` } = e,
    n = Ze[t];
  return (0, F.jsx)(I, {
    ...e,
    viewBox: 20,
    children: (0, F.jsx)(`path`, {
      transform: n,
      d: `M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z`,
      fill: `currentColor`,
    }),
  });
}
function q(e) {
  return (0, F.jsx)(I, {
    ...e,
    viewBox: 16,
    children: (0, F.jsx)(`path`, {
      d: `M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z`,
      fill: `currentColor`,
    }),
  });
}
var $e = i({
    Checkbox: () => Z,
    Disabled: () => X,
    Icon: () => Q,
    Root: () => J,
    "Variant-dark": () => tt,
    "Variant-light": () => et,
    "Variant-outline": () => Y,
    default: () => nt,
  }),
  J = `rSf9Bk02W2U-`,
  et = `cOnQpHU2Y6g-`,
  tt = `nF9VRIidlqs-`,
  Y = `UmL2HbEtBt4-`,
  X = `W-krBS4he0U-`,
  Z = `iOKN2zGTVXQ-`,
  Q = `JYjG3daoLWk-`,
  nt = {
    Root: J,
    "Variant-light": `cOnQpHU2Y6g-`,
    "Variant-dark": `nF9VRIidlqs-`,
    "Variant-outline": `UmL2HbEtBt4-`,
    Disabled: X,
    Checkbox: Z,
    Icon: Q,
  };
function rt(e) {
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
    f = t === `indeterminate`,
    p = l ?? (f ? at : q),
    m = () => {
      r || (n && n(f ? !0 : !t));
    },
    h = (e) => {
      r || (e.key === ` ` && (m(), e.preventDefault(), e.stopPropagation()));
    },
    _ = g(`Checkbox`, o);
  return (0, F.jsxs)(d, {
    align: c,
    ref: a,
    role: `checkbox`,
    "aria-checked": f ? `mixed` : t,
    "data-state": it(t),
    className: (0, R.default)(J, $e[`Variant-${_}`], r && `W-krBS4he0U-`),
    onClick: m,
    tabIndex: 0,
    onKeyDown: h,
    cursor: `default`,
    "aria-disabled": r,
    "data-accent-color": s,
    ...u,
    children: [
      (0, F.jsx)(`div`, {
        className: Z,
        children: t && (0, F.jsx)(p, { className: `JYjG3daoLWk-` }),
      }),
      i,
    ],
  });
}
function it(e) {
  return e === `indeterminate` ? e : e ? `checked` : `unchecked`;
}
function at(e) {
  return (0, F.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, F.jsx)(`path`, {
      d: `M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z`,
      fill: `currentColor`,
    }),
  });
}
var $ = {};
(($.arabic = () => c(() => import(`./baseui_arabic.js`), [], import.meta.url)),
  ($.brazilian = () =>
    c(() => import(`./baseui_brazilian.js`), [], import.meta.url)),
  ($.bulgarian = () =>
    c(() => import(`./baseui_bulgarian.js`), [], import.meta.url)),
  ($.czech = () => c(() => import(`./baseui_czech.js`), [], import.meta.url)),
  ($.danish = () => c(() => import(`./baseui_danish.js`), [], import.meta.url)),
  ($.dutch = () => c(() => import(`./baseui_dutch.js`), [], import.meta.url)),
  ($.english = () =>
    c(() => import(`./baseui_english.js`), [], import.meta.url)),
  ($.finnish = () =>
    c(() => import(`./baseui_finnish.js`), [], import.meta.url)),
  ($.french = () => c(() => import(`./baseui_french.js`), [], import.meta.url)),
  ($.german = () => c(() => import(`./baseui_german.js`), [], import.meta.url)),
  ($.greek = () => c(() => import(`./baseui_greek.js`), [], import.meta.url)),
  ($.hungarian = () =>
    c(() => import(`./baseui_hungarian.js`), [], import.meta.url)),
  ($.indonesian = () =>
    c(() => import(`./baseui_indonesian.js`), [], import.meta.url)),
  ($.italian = () =>
    c(() => import(`./baseui_italian.js`), [], import.meta.url)),
  ($.japanese = () =>
    c(() => import(`./baseui_japanese.js`), [], import.meta.url)),
  ($.koreana = () =>
    c(() => import(`./baseui_koreana.js`), [], import.meta.url)),
  ($.latam = () => c(() => import(`./baseui_latam.js`), [], import.meta.url)),
  ($.malay = () => c(() => import(`./baseui_malay.js`), [], import.meta.url)),
  ($.norwegian = () =>
    c(() => import(`./baseui_norwegian.js`), [], import.meta.url)),
  ($.polish = () => c(() => import(`./baseui_polish.js`), [], import.meta.url)),
  ($.portuguese = () =>
    c(() => import(`./baseui_portuguese.js`), [], import.meta.url)),
  ($.romanian = () =>
    c(() => import(`./baseui_romanian.js`), [], import.meta.url)),
  ($.russian = () =>
    c(() => import(`./baseui_russian.js`), [], import.meta.url)),
  ($.sc_schinese = () =>
    c(() => import(`./baseui_sc_schinese.js`), [], import.meta.url)),
  ($.schinese = () =>
    c(() => import(`./baseui_schinese.js`), [], import.meta.url)),
  ($.spanish = () =>
    c(() => import(`./baseui_spanish.js`), [], import.meta.url)),
  ($.swedish = () =>
    c(() => import(`./baseui_swedish.js`), [], import.meta.url)),
  ($.tchinese = () =>
    c(() => import(`./baseui_tchinese.js`), [], import.meta.url)),
  ($.thai = () => c(() => import(`./baseui_thai.js`), [], import.meta.url)),
  ($.turkish = () =>
    c(() => import(`./baseui_turkish.js`), [], import.meta.url)),
  ($.ukrainian = () =>
    c(() => import(`./baseui_ukrainian.js`), [], import.meta.url)),
  ($.vietnamese = () =>
    c(() => import(`./baseui_vietnamese.js`), [], import.meta.url)));
async function ot(e) {
  if ($[e]) return await $[e]();
}
var st = l(ot);
export {
  Xe as a,
  Ie as c,
  Qe as i,
  Se as l,
  rt as n,
  K as o,
  q as r,
  Le as s,
  st as t,
};
