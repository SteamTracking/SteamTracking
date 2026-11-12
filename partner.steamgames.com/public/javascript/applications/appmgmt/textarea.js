/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  en as t,
  j as n,
  sn as r,
  vt as i,
  z as a,
} from "./chunk~de7f2df91c.js";
import {
  Mt as o,
  Pt as s,
  S as c,
  d as l,
  p as u,
} from "./chunk~25a6634263.js";
import { Ua as d } from "./chunk~1fa4b8f2ff.js";
import { t as f } from "./chunk~25a66342632.js";
import { n as p, t as m } from "./chunk~971d501580.js";
import { a as h, i as g } from "./chunk~a292304e38.js";
import { n as _ } from "./chunk~a58194c5d9.js";
import {
  a as v,
  c as y,
  d as b,
  f as ee,
  i as te,
  l as x,
  s as ne,
  u as S,
} from "./chunk~c12081e677.js";
import { t as re } from "./chunk~0c46413ed4.js";
import { c as ie, l as C } from "./chunk~0aa5028ef4.js";
import { a as w, t as T } from "./chunk~5ab42519dc.js";
var E = r(e(), 1),
  D = r(s(), 1),
  ae = `YAxuZ29pC9k-`,
  O = `u0AMI7eXw6w-`,
  k = i(),
  A = Object.assign(j, { Root: M, Content: P });
function j(e) {
  let { children: t, className: n, ...r } = e;
  return (0, k.jsx)(A.Root, {
    ...r,
    children: (0, k.jsx)(A.Content, { className: n, children: t }),
  });
}
function M(e) {
  let {
      onClose: t,
      className: n,
      navID: r,
      children: i,
      allowScrollBehind: a,
      onPointerDown: o,
      onPointerUp: s,
      ...c
    } = e,
    [l, u] = E.useState(!1),
    f = E.useCallback((e) => {
      e &&
        (e.showModal(),
        e.ownerDocument.defaultView &&
          u(
            e.ownerDocument.body.scrollHeight >
              e.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    p = E.useRef(!1),
    m = E.useCallback(
      (e) => {
        ((p.current = e.target == e.currentTarget), o?.(e));
      },
      [o],
    ),
    h = E.useCallback(
      (e) => {
        (e.target != e.currentTarget && (p.current = !1), s?.(e));
      },
      [s],
    ),
    g = E.useCallback(
      (e) => {
        e.target == e.currentTarget && p.current && t(`backdropclick`);
      },
      [t],
    );
  return (0, k.jsx)(N, {
    navID: r ?? `ModalDialog`,
    onClose: t,
    children: (0, k.jsx)(`dialog`, {
      ref: f,
      className: (0, D.default)(ae, !a && l && `egtbEvvs2Oc-`, n),
      onClose: () => t(`onclose`),
      onClick: g,
      ...c,
      onPointerDown: m,
      onPointerUp: h,
      children: (0, k.jsx)(d, { children: i }),
    }),
  });
}
function N(e) {
  let { navID: t, onClose: n, children: r } = e,
    i = E.useCallback(() => n(`cancelbutton`), [n]),
    o = E.useRef(void 0);
  return (
    u(o, !0, !0),
    a()
      ? (0, k.jsx)(c, {
          navID: t ?? `ModalDialog`,
          onCancelButton: i,
          modal: !0,
          navTreeRef: o,
          children: r,
        })
      : (0, k.jsx)(k.Fragment, { children: r })
  );
}
function P(e) {
  let { className: t, children: n } = e;
  return (0, k.jsx)(`div`, {
    className: (0, D.default)(O, t),
    onClick: (e) => e.stopPropagation(),
    children: n,
  });
}
var F = `fS9t6DH7Z-U-`,
  I = `nu0EdzsNfaM-`,
  L = `Ti-54apdb-E-`;
function R(e) {
  let {
      children: t,
      state: n,
      placement: r = `bottom-end`,
      popoverWidth: i = `dropdown`,
      popoverMaxHeight: o,
      popoverPresentation: s,
      popoverLabel: c,
      ...l
    } = e,
    [u, d] = (0, E.useState)(void 0);
  (0, E.useEffect)(() => d(void 0), [n.bOpen]);
  let f = a(),
    p = (0, E.useRef)(null),
    m = (0, E.useRef)(null),
    h = (0, E.useMemo)(
      () => n.rgFilteredOptions.findIndex((e) => e === n.selectedValue),
      [n.selectedValue, n.rgFilteredOptions],
    ),
    g = b({
      open: n.bOpen,
      onOpenChange: n.setOpen,
      width: i,
      maxHeight: o,
      placement: r,
      presentation: s,
      gutter: `4`,
      activeIndex: n.activeIndex,
      setActiveIndex: n.setActiveIndex,
      selectedIndex: h,
      setSelectedIndex: (e) => n.onItemSelectionChange(n.rgFilteredOptions[e]),
      interactions: { click: !0, virtualItemFocus: !f },
      role: `combobox`,
      scroll: !1,
    }),
    _ = {
      ...n,
      ...l,
      focusedValue: u,
      onFocusChange: d,
      refPopover: p,
      refScrollElement: m,
      setOpen: (e) => {
        if (e) {
          let e = null;
          ((e = n.multiselect
            ? Array.isArray(n.selectedValue)
              ? n.selectedValue[0]
              : null
            : n.selectedValue),
            d(e),
            n.onInputChange(``));
        }
        n.setOpen(e);
      },
      onIndexSelected: (e) => {
        let t = g.elementsRef.current;
        t && t[e] && t[e].click();
      },
      popoverPlacement: g.floating.placement,
      popoverPresentation: g.presentation,
      popoverLabel: c,
    };
  return (0, k.jsx)(Q.Provider, {
    value: _,
    children: (0, k.jsx)(S.Root, { state: g, children: t }),
  });
}
function z(e) {
  let {
      refPopover: t,
      inputValue: r,
      onInputChange: i,
      activeIndex: a,
      popoverPlacement: o,
      popoverPresentation: s,
      popoverLabel: c,
      multiselect: l,
      setActiveIndex: u,
      setOpen: d,
      filterPlaceholder: f,
      onIndexSelected: h,
      refScrollElement: g,
    } = $(`<Combobox.Options>`),
    _ = (0, E.useCallback)((e) => {
      e && e.focus({ preventScroll: !0 });
    }, []),
    v = (e) => {
      e.key === `Enter` &&
        a !== null &&
        (h(a), l || (u(null), d(!1)), e.preventDefault(), e.stopPropagation());
    },
    y = s === `anchor` && o.startsWith(`top`),
    b = (0, k.jsx)(p, {
      overflow: `auto`,
      ref: g,
      style: { overscrollBehavior: `contain` },
      children: e.children,
    });
  return (0, k.jsx)(S.Positioner, {
    ref: t,
    label: c,
    children: (0, k.jsxs)(m, {
      direction: `column`,
      maxHeight: `var(--popover-max-height)`,
      children: [
        y && b,
        (0, k.jsx)(p, {
          flexShrink: `0`,
          className: n(F, y ? I : L),
          children: (0, k.jsx)(ie, {
            margin: `3`,
            variant: `inset`,
            radius: `sm`,
            value: r,
            onTextChange: i,
            onKeyDown: v,
            onKeyDownCapture: (e) => {
              (e.key === `Home` || e.key === `End`) && e.stopPropagation();
            },
            placeholder: f,
            inputRef: _,
            autoComplete: `off`,
          }),
        }),
        !y && b,
      ],
    }),
  });
}
var B = (0, E.createContext)(null);
function oe(e) {
  let { items: t, renderItem: n, overscan: r = 5, ...i } = e,
    {
      bOpen: a,
      refPopover: o,
      refScrollElement: s,
    } = $(`<ComboboxVirtualizedOptions>`),
    [c, l] = (0, E.useState)(!1),
    u = a && !!o.current && !!s.current;
  (0, E.useEffect)(() => {
    u !== c && l(u);
  }, [u, c]);
  let d = T({
    count: c ? t.length : Math.min(t.length, 3),
    getScrollElement: () => s.current,
    enabled: a,
    measureElement: w,
    ...i,
  });
  return (0, k.jsx)(z, {
    children: (0, k.jsx)(B, {
      value: d,
      children: (0, k.jsx)(p, {
        height: `${d.getTotalSize()}px`,
        position: `relative`,
        width: `100%`,
        children: d.getVirtualItems().map((e) => n(t[e.index], e, d)),
      }),
    }),
  });
}
function V(e) {
  let { virtualItem: n, children: r } = e,
    i = (0, E.useContext)(B);
  return (
    t(i, `Virtual item rendered outside of a virtualizer!`),
    (0, k.jsx)(p, {
      position: `absolute`,
      width: `100%`,
      style: { top: 0, left: 0, transform: `translateY(${n.start}px)` },
      ref: i.measureElement,
      "data-index": n.index,
      children: r,
    })
  );
}
function H(e) {
  let { virtualItem: t, ...n } = e;
  return (0, k.jsx)(V, { virtualItem: t, children: (0, k.jsx)(W, { ...n }) });
}
function U(e) {
  let { virtualItem: t, children: n } = e;
  return (0, k.jsx)(V, { virtualItem: t, children: n });
}
function W(e) {
  let { value: t, children: n, disabled: r } = e,
    {
      onItemSelectionChange: i,
      selectedValue: a,
      multiselect: o,
      maxSelected: s,
    } = $(`<Combobox.Option>`),
    c = !1,
    l = !1;
  o
    ? ((c = Array.isArray(a) && a.includes(t)),
      (l = !!s && Array.isArray(a) && a.length >= s))
    : (c = t === a);
  let u = r || (l && !c);
  return (0, k.jsxs)(S.Item, {
    onSelect: () => i(t),
    selected: c,
    disabled: u,
    children: [
      o &&
        (0, k.jsxs)(m, {
          gap: `2`,
          align: `center`,
          children: [(0, k.jsx)(v, { checked: c, variant: `dark` }), n],
        }),
      !o && n,
    ],
  });
}
function G(e) {
  let { children: t, beforeContent: n, render: r } = e,
    {
      bOpen: i,
      setOpen: a,
      inputValue: s,
      onInputChange: c,
      selectedValue: l,
      focusedValue: u,
      refScrollElement: d,
      onItemSelectionChange: f,
      activeIndex: p,
      setActiveIndex: m,
      onFocusChange: h,
      rgFilteredOptions: _,
      onSelectionChange: v,
      multiselect: b,
      onClear: x,
      refPopover: ie,
      clearable: C,
      filterPlaceholder: w,
      onIndexSelected: T,
      popoverPlacement: E,
      popoverPresentation: D,
      popoverLabel: ae,
      maxSelected: O,
      variant: A,
      ...j
    } = $(`<ComboboxTrigger>`),
    M = { tabIndex: 0, children: t },
    N = b ? Array.isArray(l) && l.length > 0 : l != null,
    P = N && C,
    F = P
      ? (0, k.jsx)(ee, { onClick: x, cursor: `pointer`, hitSlop: !0 })
      : (0, k.jsx)(ne, {}),
    I = P
      ? {
          onSecondaryButton: x,
          actionDescriptionMap: { [o.SECONDARY]: te.Localize(`#Clear`) },
        }
      : void 0,
    L = g(`Combobox`, A),
    R = (0, k.jsx)(y, {
      beforeContent: n,
      afterContent: F,
      hasValue: N,
      cursor: `pointer`,
      tabIndex: 0,
      variant: L,
      navProps: I,
      ...j,
    }),
    z = re(r, R, M, void 0);
  return (0, k.jsx)(S.Anchor, { children: z });
}
function K(e) {
  return (0, k.jsx)(_, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ...e,
  });
}
function se(e) {
  return (0, k.jsx)(_, { contrast: `description`, truncate: !0, ...e });
}
function q(e, t) {
  if (typeof t == `string`)
    return t.toLocaleLowerCase().includes(e.toLocaleLowerCase());
  try {
    return JSON.stringify(t)
      .toLocaleLowerCase()
      .includes(e.toLocaleLowerCase());
  } catch {}
  return (
    console.error(
      `Could not use default option filter on provided Comboxbox option. Custom filter function required.`,
    ),
    !1
  );
}
function ce(e) {
  return J(e, !1);
}
function J(e, t) {
  let {
      rgOptions: n,
      filter: r = q,
      filterPlaceholder: i,
      selectedValue: a,
      onSelectionChange: o,
      maxSelected: s,
    } = e,
    [c, l] = (0, E.useState)(``),
    [u, d] = (0, E.useState)(!1),
    [f, p] = (0, E.useState)(null),
    m = (0, E.useMemo)(() => n.filter((e) => r(c, e)), [c, n, r]),
    h = typeof f == `number`,
    g = m.length > 0,
    _ = (0, E.useCallback)(
      (e) => {
        (e && !h && g && p(0), l(e));
      },
      [h, g],
    ),
    v = (0, E.useCallback)(
      (e) => {
        (e || _(``), d(e));
      },
      [_],
    ),
    y = (0, E.useCallback)(
      (e) => {
        (o(e), t || v(!1));
      },
      [t, o, v],
    );
  return {
    activeIndex: f,
    setActiveIndex: p,
    rgFilteredOptions: m,
    selectedValue: a,
    onSelectionChange: y,
    onItemSelectionChange: (0, E.useCallback)(
      (e) => {
        if (!t) y(e);
        else if (!a) y([e]);
        else {
          let t = a,
            n = t.indexOf(e);
          if (n === -1) y(t.concat(e));
          else return y(t.slice(0, n).concat(t.slice(n + 1)));
        }
      },
      [y, a, t],
    ),
    onClear: (e) => {
      (y(t ? [] : null), e?.stopPropagation(), e?.preventDefault());
    },
    inputValue: c,
    onInputChange: _,
    bOpen: u,
    setOpen: v,
    filterPlaceholder: i,
    multiselect: t,
    maxSelected: s,
  };
}
var Y = {
  Root: R,
  Option: W,
  Options: z,
  VirtualizedOptions: oe,
  VirtualizedOption: H,
  VirtualizedContent: U,
  Trigger: G,
  DefaultOptionFilter: q,
  Value: K,
  Placeholder: se,
};
function X(e) {
  return e
    ? typeof e == `string`
      ? e
      : typeof e == `number`
        ? e.toString()
        : (console.error(
            `Could not use default option labeler on Combobox option value. Custom labeler requried`,
            e,
          ),
          ``)
    : ``;
}
function le(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = X,
      ...c
    } = e,
    l = ce({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, E.useCallback)((e, t) => (i ? i(e, t) : q(e, s(t))), [i, s]),
      filterPlaceholder: a,
    }),
    u = t != null;
  return (0, k.jsxs)(Z.Root, {
    state: l,
    ...c,
    children: [
      (0, k.jsxs)(Z.Trigger, {
        children: [
          u && (0, k.jsx)(Z.Value, { children: s(t) }),
          !u && (0, k.jsx)(Z.Placeholder, { children: o }),
        ],
      }),
      (0, k.jsx)(Z.Options, {
        children: l.rgFilteredOptions.map((e) =>
          (0, k.jsx)(W, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var Z = Object.assign(le, Y);
function ue(e) {
  return J(e, !0);
}
function de(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = X,
      maxSelected: c,
      ...l
    } = e,
    u = ue({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, E.useCallback)((e, t) => (i ? i(e, t) : q(e, s(t))), [i, s]),
      filterPlaceholder: a,
      maxSelected: c,
    }),
    d = Array.isArray(t) && t.length > 0,
    p = ``;
  if (d) {
    let e = t.map((e) => s(e));
    p =
      `ListFormat` in Intl
        ? new Intl.ListFormat(f().strISOCode).format(e)
        : e.join(`, `);
  }
  return (0, k.jsxs)(Z.Root, {
    state: u,
    ...l,
    children: [
      (0, k.jsxs)(Z.Trigger, {
        children: [
          d && (0, k.jsx)(Z.Value, { children: p }),
          !d && (0, k.jsx)(Z.Placeholder, { children: o }),
        ],
      }),
      (0, k.jsx)(Z.Options, {
        children: u.rgFilteredOptions.map((e) =>
          (0, k.jsx)(Z.Option, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var fe = Object.assign(de, Y),
  Q = (0, E.createContext)(null);
function $(e) {
  let t = (0, E.useContext)(Q);
  return (t || console.error(`${e} must be used within a <Combobox>!`), t);
}
function pe(e) {
  let {
      rows: t = 3,
      sizing: n = `content`,
      resize: r = `none`,
      ref: i,
      value: o,
      onTextChange: s,
      onChange: c,
      disabled: l,
      variant: u,
      ...d
    } = e,
    f = (e) => {
      l || (s(e.target.value), c && c(e));
    },
    p = g(`TextArea`, u),
    m = a(),
    [_, v] = he(t),
    y = { resize: r, fieldSizing: n, minHeight: _, maxHeight: v },
    b = x({
      ...d,
      className: (0, D.default)(h(), C()),
      style: y,
      cursor: `text`,
      disabled: l,
      variant: p,
    });
  return (0, k.jsx)(m ? me : `textarea`, {
    ref: i,
    ...b,
    value: o || ``,
    onChange: f,
    readOnly: l,
    "aria-disabled": l,
  });
}
function me(e) {
  return (0, k.jsx)(l, { noFocusRing: !0, ...e });
}
function he(e) {
  let t = typeof e == `number` ? e : e.min,
    n = typeof e == `number` ? void 0 : e.max;
  return [
    typeof t == `number` ? `calc( ${t}lh + 2 * var(--spacing-1) )` : void 0,
    typeof n == `number` ? `calc( ${n}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
export { A as i, Z as n, fe as r, pe as t };
