/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  $t as e,
  A as t,
  R as n,
  _t as r,
  kt as i,
  on as a,
  tn as o,
} from "./mobx.esm.js";
import { It as s, Pt as c, h as l, p as u, w as d } from "./src.js";
import { za as f } from "./dialogs.js";
import { n as p, t as m } from "./flex.js";
import { n as h, r as g } from "./variantdefaults.js";
import { n as _ } from "./text.js";
import {
  a as v,
  c as y,
  i as b,
  l as x,
  n as S,
  o as C,
  s as w,
  t as ee,
} from "./localization.js";
import { t as te } from "./render.js";
import { t as ne } from "./src2.js";
import { c as T, l as re } from "./dashboardutilities.js";
import { a as E, t as ie } from "./esm.js";
var D = a(i(), 1),
  O = a(s(), 1),
  ae = `YAxuZ29pC9k-`,
  k = `u0AMI7eXw6w-`,
  A = r(),
  j = Object.assign(M, { Root: N, Content: F });
function M(e) {
  let { children: t, className: n, ...r } = e;
  return (0, A.jsx)(j.Root, {
    ...r,
    children: (0, A.jsx)(j.Content, { className: n, children: t }),
  });
}
function N(e) {
  let {
      onClose: t,
      className: n,
      navID: r,
      children: i,
      allowScrollBehind: a,
      ...o
    } = e,
    [s, c] = D.useState(!1),
    l = D.useCallback((e) => {
      e &&
        (e.showModal(),
        e.ownerDocument.defaultView &&
          c(
            e.ownerDocument.body.scrollHeight >
              e.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    u = D.useCallback(
      (e) => {
        e.target == e.currentTarget && t(`backdropclick`);
      },
      [t],
    );
  return (0, A.jsx)(P, {
    navID: r ?? `ModalDialog`,
    onClose: t,
    children: (0, A.jsx)(`dialog`, {
      ref: l,
      className: (0, O.default)(ae, !a && s && `egtbEvvs2Oc-`, n),
      onClose: () => t(`onclose`),
      onClick: u,
      ...o,
      children: (0, A.jsx)(f, { children: i }),
    }),
  });
}
function P(e) {
  let { navID: t, onClose: r, children: i } = e,
    a = D.useCallback(() => r(`cancelbutton`), [r]),
    o = D.useRef(void 0);
  return (
    l(o, !0, !0),
    n()
      ? (0, A.jsx)(d, {
          navID: t ?? `ModalDialog`,
          onCancelButton: a,
          modal: !0,
          navTreeRef: o,
          children: i,
        })
      : (0, A.jsx)(A.Fragment, { children: i })
  );
}
function F(e) {
  let { className: t, children: n } = e;
  return (0, A.jsx)(`div`, {
    className: (0, O.default)(k, t),
    onClick: (e) => e.stopPropagation(),
    children: n,
  });
}
var I = `fS9t6DH7Z-U-`,
  L = `nu0EdzsNfaM-`,
  R = `Ti-54apdb-E-`;
function z(e) {
  let {
      children: t,
      state: r,
      placement: i = `bottom-end`,
      popoverWidth: a = `dropdown`,
      popoverMaxHeight: o,
      popoverPresentation: s,
      popoverLabel: c,
      ...l
    } = e,
    [u, d] = (0, D.useState)(void 0);
  (0, D.useEffect)(() => d(void 0), [r.bOpen]);
  let f = n(),
    p = (0, D.useRef)(null),
    m = (0, D.useRef)(null),
    h = (0, D.useMemo)(
      () => r.rgFilteredOptions.findIndex((e) => e === r.selectedValue),
      [r.selectedValue, r.rgFilteredOptions],
    ),
    g = y({
      open: r.bOpen,
      onOpenChange: r.setOpen,
      width: a,
      maxHeight: o,
      placement: i,
      presentation: s,
      gutter: `4`,
      activeIndex: r.activeIndex,
      setActiveIndex: r.setActiveIndex,
      selectedIndex: h,
      setSelectedIndex: (e) => r.onItemSelectionChange(r.rgFilteredOptions[e]),
      interactions: { click: !0, virtualItemFocus: !f },
      role: `combobox`,
      scroll: !1,
    }),
    _ = {
      ...r,
      ...l,
      focusedValue: u,
      onFocusChange: d,
      refPopover: p,
      refScrollElement: m,
      setOpen: (e) => {
        if (e) {
          let e = null;
          (e = r.multiselect
            ? Array.isArray(r.selectedValue)
              ? r.selectedValue[0]
              : null
            : r.selectedValue),
            d(e),
            r.onInputChange(``);
        }
        r.setOpen(e);
      },
      onIndexSelected: (e) => {
        let t = g.elementsRef.current;
        t && t[e] && t[e].click();
      },
      popoverPlacement: g.floating.placement,
      popoverPresentation: g.presentation,
      popoverLabel: c,
    };
  return (0, A.jsx)(Q.Provider, {
    value: _,
    children: (0, A.jsx)(w.Root, { state: g, children: t }),
  });
}
function B(e) {
  let {
      refPopover: n,
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
    _ = (0, D.useCallback)((e) => {
      e && e.focus({ preventScroll: !0 });
    }, []),
    v = (e) => {
      e.key === `Enter` &&
        a !== null &&
        (h(a), l || (u(null), d(!1)), e.preventDefault(), e.stopPropagation());
    },
    y = s === `anchor` && o.startsWith(`top`),
    b = (0, A.jsx)(p, {
      overflow: `auto`,
      ref: g,
      style: { overscrollBehavior: `contain` },
      children: e.children,
    });
  return (0, A.jsx)(w.Positioner, {
    ref: n,
    label: c,
    children: (0, A.jsxs)(m, {
      direction: `column`,
      maxHeight: `var(--popover-max-height)`,
      children: [
        y && b,
        (0, A.jsx)(p, {
          flexShrink: `0`,
          className: t(I, y ? L : R),
          children: (0, A.jsx)(T, {
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
var V = (0, D.createContext)(null);
function oe(e) {
  let { items: t, renderItem: n, overscan: r = 5, ...i } = e,
    {
      bOpen: a,
      refPopover: o,
      refScrollElement: s,
    } = $(`<ComboboxVirtualizedOptions>`),
    [c, l] = (0, D.useState)(!1),
    u = a && !!o.current && !!s.current;
  (0, D.useEffect)(() => {
    u !== c && l(u);
  }, [u, c]);
  let d = ie({
    count: c ? t.length : Math.min(t.length, 3),
    getScrollElement: () => s.current,
    enabled: a,
    measureElement: E,
    ...i,
  });
  return (0, A.jsx)(B, {
    children: (0, A.jsx)(V, {
      value: d,
      children: (0, A.jsx)(p, {
        height: `${d.getTotalSize()}px`,
        position: `relative`,
        width: `100%`,
        children: d.getVirtualItems().map((e) => n(t[e.index], e, d)),
      }),
    }),
  });
}
function H(t) {
  let { virtualItem: n, children: r } = t,
    i = (0, D.useContext)(V);
  return (
    e(i, `Virtual item rendered outside of a virtualizer!`),
    (0, A.jsx)(p, {
      position: `absolute`,
      width: `100%`,
      style: { top: 0, left: 0, transform: `translateY(${n.start}px)` },
      ref: i.measureElement,
      "data-index": n.index,
      children: r,
    })
  );
}
function se(e) {
  let { virtualItem: t, ...n } = e;
  return (0, A.jsx)(H, { virtualItem: t, children: (0, A.jsx)(W, { ...n }) });
}
function U(e) {
  let { virtualItem: t, children: n } = e;
  return (0, A.jsx)(H, { virtualItem: t, children: n });
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
  return (0, A.jsxs)(w.Item, {
    onSelect: () => i(t),
    selected: c,
    disabled: u,
    children: [
      o &&
        (0, A.jsxs)(m, {
          gap: `2`,
          align: `center`,
          children: [(0, A.jsx)(S, { checked: c, variant: `dark` }), n],
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
      inputValue: o,
      onInputChange: s,
      selectedValue: l,
      focusedValue: u,
      refScrollElement: d,
      onItemSelectionChange: f,
      activeIndex: p,
      setActiveIndex: m,
      onFocusChange: g,
      rgFilteredOptions: _,
      onSelectionChange: y,
      multiselect: S,
      onClear: C,
      refPopover: ne,
      clearable: T,
      filterPlaceholder: re,
      onIndexSelected: E,
      popoverPlacement: ie,
      popoverPresentation: D,
      popoverLabel: O,
      maxSelected: ae,
      variant: k,
      ...j
    } = $(`<ComboboxTrigger>`),
    M = { tabIndex: 0, children: t },
    N = S ? Array.isArray(l) && l.length > 0 : l != null,
    P = N && T,
    F = P
      ? (0, A.jsx)(x, { onClick: C, cursor: `pointer`, hitSlop: !0 })
      : (0, A.jsx)(b, {}),
    I = P
      ? {
          onSecondaryButton: C,
          actionDescriptionMap: { [c.SECONDARY]: ee.Localize(`#Clear`) },
        }
      : void 0,
    L = h(`Combobox`, k),
    R = (0, A.jsx)(v, {
      beforeContent: n,
      afterContent: F,
      hasValue: N,
      cursor: `pointer`,
      tabIndex: 0,
      variant: L,
      navProps: I,
      ...j,
    }),
    z = te(r, R, M, void 0);
  return (0, A.jsx)(w.Anchor, { children: z });
}
function ce(e) {
  return (0, A.jsx)(_, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ...e,
  });
}
function le(e) {
  return (0, A.jsx)(_, { contrast: `description`, truncate: !0, ...e });
}
function K(e, t) {
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
function ue(e) {
  return q(e, !1);
}
function q(e, t) {
  let {
      rgOptions: n,
      filter: r = K,
      filterPlaceholder: i,
      selectedValue: a,
      onSelectionChange: o,
      maxSelected: s,
    } = e,
    [c, l] = (0, D.useState)(``),
    [u, d] = (0, D.useState)(!1),
    [f, p] = (0, D.useState)(null),
    m = (0, D.useMemo)(() => n.filter((e) => r(c, e)), [c, n, r]),
    h = typeof f == `number`,
    g = m.length > 0,
    _ = (0, D.useCallback)(
      (e) => {
        e && !h && g && p(0), l(e);
      },
      [h, g],
    ),
    v = (0, D.useCallback)(
      (e) => {
        e || _(``), d(e);
      },
      [_],
    ),
    y = (0, D.useCallback)(
      (e) => {
        o(e), t || v(!1);
      },
      [t, o, v],
    );
  return {
    activeIndex: f,
    setActiveIndex: p,
    rgFilteredOptions: m,
    selectedValue: a,
    onSelectionChange: y,
    onItemSelectionChange: (0, D.useCallback)(
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
      y(t ? [] : null), e?.stopPropagation(), e?.preventDefault();
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
var J = {
  Root: z,
  Option: W,
  Options: B,
  VirtualizedOptions: oe,
  VirtualizedOption: se,
  VirtualizedContent: U,
  Trigger: G,
  DefaultOptionFilter: K,
  Value: ce,
  Placeholder: le,
};
function Y(e) {
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
function de(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = Y,
      ...c
    } = e,
    l = ue({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, D.useCallback)((e, t) => (i ? i(e, t) : K(e, s(t))), [i, s]),
      filterPlaceholder: a,
    }),
    u = t != null;
  return (0, A.jsxs)(X.Root, {
    state: l,
    ...c,
    children: [
      (0, A.jsxs)(X.Trigger, {
        children: [
          u && (0, A.jsx)(X.Value, { children: s(t) }),
          !u && (0, A.jsx)(X.Placeholder, { children: o }),
        ],
      }),
      (0, A.jsx)(X.Options, {
        children: l.rgFilteredOptions.map((e) =>
          (0, A.jsx)(W, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var X = Object.assign(de, J);
function fe(e) {
  return q(e, !0);
}
function Z(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = Y,
      maxSelected: c,
      ...l
    } = e,
    u = fe({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, D.useCallback)((e, t) => (i ? i(e, t) : K(e, s(t))), [i, s]),
      filterPlaceholder: a,
      maxSelected: c,
    }),
    d = Array.isArray(t) && t.length > 0,
    f = ``;
  if (d) {
    let e = t.map((e) => s(e));
    f =
      `ListFormat` in Intl
        ? new Intl.ListFormat(ne().strISOCode).format(e)
        : e.join(`, `);
  }
  return (0, A.jsxs)(X.Root, {
    state: u,
    ...l,
    children: [
      (0, A.jsxs)(X.Trigger, {
        children: [
          d && (0, A.jsx)(X.Value, { children: f }),
          !d && (0, A.jsx)(X.Placeholder, { children: o }),
        ],
      }),
      (0, A.jsx)(X.Options, {
        children: u.rgFilteredOptions.map((e) =>
          (0, A.jsx)(X.Option, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var pe = Object.assign(Z, J),
  Q = (0, D.createContext)(null);
function $(e) {
  let t = (0, D.useContext)(Q);
  return t || console.error(`${e} must be used within a <Combobox>!`), t;
}
function me(e) {
  let {
      rows: t = 3,
      sizing: r = `content`,
      resize: i = `none`,
      ref: a,
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
    p = h(`TextArea`, u),
    m = n(),
    [_, v] = ge(t),
    y = { resize: i, fieldSizing: r, minHeight: _, maxHeight: v },
    b = C({
      ...d,
      className: (0, O.default)(g(), re()),
      style: y,
      cursor: `text`,
      disabled: l,
      variant: p,
    });
  return (0, A.jsx)(m ? he : `textarea`, {
    ref: a,
    ...b,
    value: o || ``,
    onChange: f,
    readOnly: l,
    "aria-disabled": l,
  });
}
function he(e) {
  return (0, A.jsx)(u, { noFocusRing: !0, ...e });
}
function ge(e) {
  let t = typeof e == `number` ? e : e.min,
    n = typeof e == `number` ? void 0 : e.max;
  return [
    typeof t == `number` ? `calc( ${t}lh + 2 * var(--spacing-1) )` : void 0,
    typeof n == `number` ? `calc( ${n}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
var _e = o((e, t) => {
  t.exports = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == `object` && typeof n == `object`) {
      if (t.constructor !== n.constructor) return !1;
      var r, i, a;
      if (Array.isArray(t)) {
        if (((r = t.length), r != n.length)) return !1;
        for (i = r; i-- !== 0; ) if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp)
        return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf)
        return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString)
        return t.toString() === n.toString();
      if (((a = Object.keys(t)), (r = a.length), r !== Object.keys(n).length))
        return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var o = a[i];
        if (!e(t[o], n[o])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  };
});
export { j as a, pe as i, me as n, X as r, _e as t };
