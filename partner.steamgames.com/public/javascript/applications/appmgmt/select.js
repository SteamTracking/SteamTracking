/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import { Pt as r } from "./src.js";
import { t as i } from "./flex.js";
import { n as a } from "./variantdefaults.js";
import { n as o } from "./text.js";
import {
  a as s,
  c,
  i as l,
  l as u,
  n as d,
  s as f,
  t as p,
} from "./localization.js";
import { t as m } from "./render.js";
import { t as h } from "./src2.js";
var g = n(t(), 1),
  _ = e();
function v(e) {
  let {
      children: t,
      state: n,
      placement: r = `bottom-end`,
      popoverWidth: i = `dropdown`,
      popoverMaxHeight: a,
      popoverPresentation: o,
      popoverLabel: s,
      ...l
    } = e,
    [u, d] = (0, g.useState)(null),
    [p, m] = (0, g.useState)(null),
    h = (0, g.useMemo)(
      () =>
        n.rgOptions.findIndex((e) =>
          n.multiselect ? n.selectedValue.includes(e) : e === n.selectedValue,
        ),
      [n.selectedValue, n.rgOptions, n.multiselect],
    ),
    v = (0, g.useRef)(null),
    y = {
      ...n,
      ...l,
      focusedValue: u,
      onFocusChange: d,
      refPopover: v,
      popoverLabel: s,
      setOpen: (e) => {
        (e && d(n.multiselect ? n.selectedValue[0] : n.selectedValue),
          n.setOpen(e));
      },
      focusedIndex: p,
      onFocusedIndexChange: m,
    },
    b = c({
      open: n.bOpen,
      onOpenChange: n.setOpen,
      width: i,
      maxHeight: a,
      placement: r,
      presentation: o,
      selectedIndex: h,
      setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
      activeIndex: p,
      setActiveIndex: m,
      gutter: `4`,
      interactions: { click: !0, typeahead: !0 },
      role: `select`,
      scroll: !0,
    });
  return (0, _.jsx)(P.Provider, {
    value: y,
    children: (0, _.jsx)(f.Root, { state: b, children: t }),
  });
}
function y(e) {
  let { refPopover: t, popoverLabel: n } = F(`<Select.Options>`);
  return (0, _.jsx)(f.Positioner, { ref: t, label: n, children: e.children });
}
function b(e) {
  let { value: t, children: n, disabled: r, ...a } = e,
    {
      onItemSelectionChange: o,
      multiselect: s,
      selectedValue: c,
      maxSelected: l,
    } = F(`<Select.Option>`),
    u = typeof t == `string` ? t : void 0,
    p = !1,
    m = !1;
  s
    ? ((p = Array.isArray(c) && c.includes(t)),
      (m = !!l && Array.isArray(c) && c.length >= l))
    : (p = t === c);
  let h = r || (m && !p);
  return (0, _.jsxs)(f.Item, {
    label: u,
    onSelect: () => o(t),
    selected: p,
    disabled: h,
    ...a,
    children: [
      s &&
        (0, _.jsxs)(i, {
          gap: `2`,
          align: `center`,
          children: [(0, _.jsx)(d, { checked: p, variant: `dark` }), n],
        }),
      !s && n,
    ],
  });
}
function x(e) {
  let { children: t, render: n } = e,
    {
      bOpen: i,
      setOpen: o,
      selectedValue: c,
      variant: d,
      size: h,
      radius: g,
      status: v,
      color: y,
      rgOptions: b,
      multiselect: x,
      onClear: S,
      focusedValue: C,
      onFocusChange: w,
      onSelectionChange: T,
      clearable: E,
      focusedIndex: D,
      onItemSelectionChange: O,
      onFocusedIndexChange: k,
      refPopover: A,
      popoverLabel: j,
      placeholder: M,
      maxSelected: N,
      ...P
    } = F(`<SelectTrigger>`),
    I = { tabIndex: 0, role: `combobox`, onClick: () => o(!i), children: t },
    L = x ? Array.isArray(c) && c.length > 0 : c != null,
    R = L && E,
    z = R
      ? (0, _.jsx)(u, { onClick: S, cursor: `pointer`, hitSlop: !0 })
      : (0, _.jsx)(l, {}),
    B = R
      ? {
          onSecondaryButton: S,
          actionDescriptionMap: { [r.SECONDARY]: p.Localize(`#Clear`) },
        }
      : void 0,
    V = a(`Select`, d),
    H = (0, _.jsx)(s, {
      afterContent: z,
      variant: V,
      size: h,
      radius: g,
      status: v,
      color: y,
      hasValue: L,
      tabIndex: 0,
      cursor: `pointer`,
      navProps: B,
      ...P,
    }),
    U = m(n, H, I, void 0);
  return (0, _.jsx)(f.Anchor, { children: U });
}
function S(e) {
  return (0, _.jsx)(o, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ...e,
  });
}
function C(e) {
  return (0, _.jsx)(o, { contrast: `description`, truncate: !0, ...e });
}
function w(e) {
  return T(e, !1);
}
function T(e, t) {
  let { onSelectionChange: n, selectedValue: r, ...i } = e,
    [a, o] = (0, g.useState)(!1),
    s = (0, g.useCallback)(
      (e) => {
        (n(e), t || o(!1));
      },
      [n, t],
    ),
    c = (0, g.useCallback)(
      (e) => {
        (s(t ? [] : null), e?.stopPropagation(), e?.preventDefault());
      },
      [s, t],
    );
  return {
    onSelectionChange: s,
    onItemSelectionChange: (0, g.useCallback)(
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
var E = {
  Root: v,
  Option: b,
  Options: y,
  Trigger: x,
  Value: S,
  Placeholder: C,
};
function D(e) {
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
function O(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      placeholder: i,
      getOptionLabel: a = D,
      ...o
    } = e,
    s = w({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      placeholder: i,
    }),
    c = t != null,
    l = c ? a(t) : ``;
  return (0, _.jsxs)(k.Root, {
    state: s,
    ...o,
    children: [
      (0, _.jsxs)(k.Trigger, {
        children: [
          c && (0, _.jsx)(k.Value, { children: l }),
          !c && (0, _.jsx)(k.Placeholder, { children: i }),
        ],
      }),
      (0, _.jsx)(k.Options, {
        children: s.rgOptions.map((e, t) =>
          (0, _.jsx)(k.Option, { value: e, children: a(e) }, t),
        ),
      }),
    ],
  });
}
var k = Object.assign(O, E);
function A(e) {
  return T(e, !0);
}
var j = E;
function M(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      placeholder: i,
      getOptionLabel: a = D,
      maxSelected: o,
      ...s
    } = e,
    c = A({
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
        ? new Intl.ListFormat(h().strISOCode).format(e)
        : e.join(`, `);
  }
  return (0, _.jsxs)(N.Root, {
    state: c,
    ...s,
    children: [
      (0, _.jsxs)(N.Trigger, {
        children: [
          l && (0, _.jsx)(N.Value, { children: u }),
          !l && (0, _.jsx)(N.Placeholder, { children: i }),
        ],
      }),
      (0, _.jsx)(N.Options, {
        children: c.rgOptions.map((e, t) =>
          (0, _.jsx)(N.Option, { value: e, children: a(e) }, t),
        ),
      }),
    ],
  });
}
var N = Object.assign(M, j),
  P = (0, g.createContext)(null);
function F(e) {
  let t = (0, g.useContext)(P);
  return (t || console.error(`${e} must be used within a <Select>!`), t);
}
export { k as n, w as r, N as t };
