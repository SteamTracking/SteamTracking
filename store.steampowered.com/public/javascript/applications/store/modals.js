/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import {
  $n as r,
  Ba as i,
  Gn as a,
  Hr as o,
  Ir as s,
  Kn as c,
  Pc as l,
  Ql as u,
  Qn as d,
  Un as f,
  Vi as p,
  Xn as m,
  Yn as h,
  Yu as g,
  cl as _,
  ex as v,
  hr as y,
  ml as b,
  mr as x,
  yn as S,
  za as C,
} from "./main.js";
var w = e(t()),
  T = n();
function E(e) {
  let { popup: t, className: n, ...r } = e,
    i = m(t),
    a = w.useRef(null);
  return (
    w.useEffect(() => {
      let e = a.current;
      if (e && g(t, `Window.SetResizeGrip`)) {
        let n = 0,
          r = 0,
          a = e.getBoundingClientRect(),
          o = e.ownerDocument.defaultView;
        (a &&
          o &&
          !i &&
          ((n = Math.ceil(o.innerWidth - a.left)),
          (r = Math.ceil(o.innerHeight - a.top))),
          t.SteamClient.Window.SetResizeGrip(n, r));
      }
      return () => {
        g(t, `Window.SetResizeGrip`) &&
          t.SteamClient.Window.SetResizeGrip(0, 0);
      };
    }, [t, i]),
    i
      ? null
      : (0, T.jsx)(`div`, {
          className: l(`window_resize_grip`, n),
          ref: a,
          ...r,
        })
  );
}
var D = (e) => O({ modal: !0, ...e });
function O(e) {
  let t = i().ownerWindow,
    n = v(),
    [r, a] = w.useState(() =>
      n ||
      (e.onlyPopoutIfNeeded === !0 &&
        e.popupHeight < t.innerHeight * 0.9 &&
        e.popupWidth < t.innerWidth * 0.9 &&
        t.document.visibilityState == `visible`)
        ? `inline`
        : `popout`,
    );
  return r === `inline`
    ? (0, T.jsx)(S, { active: !0, children: e.children })
    : r === `popout`
      ? (0, T.jsx)(A, { ...e })
      : null;
}
function k(e) {
  let { popup: t, children: n, bFitToContent: r, className: i, ...a } = e,
    o = w.useCallback(
      (e) => {
        let n = Math.ceil(e.borderBoxSize[0].inlineSize),
          r = Math.ceil(e.borderBoxSize[0].blockSize);
        t?.SteamClient.Window.ResizeTo(n, r, !0);
      },
      [t],
    ),
    s = b(o);
  return (0, T.jsx)(`div`, {
    className: l(`PopupFullWindow`, r && `FitToContent`, i),
    ref: r ? s : void 0,
    ...a,
    children: n,
  });
}
function A(e) {
  let {
      strName: t,
      strTitle: n,
      popupWidth: l,
      popupHeight: f,
      browserType: m,
      onDismiss: g,
      bFitToContent: v,
      refPopup: y,
      children: b,
      titleBarClassName: x,
      saveDimensionsKey: S,
    } = e,
    D = i()?.ownerWindow,
    O = c(),
    A = { ...r(S), onClose: g },
    M = 0;
  (e.resizable && (M |= s.Resizable),
    (e.minWidth || e.minHeight) && (M |= s.ApplyBrowserScaleToDimensions),
    e.fullscreen && (M |= s.FullScreen));
  let N = `PopupWindow_` + (t ? `${t}_` : ``) + w.useId(),
    { popup: P, element: F } = d(
      N,
      {
        title: n,
        dimensions: { width: l, height: f },
        html_class: `client_chat_frame fullheight ModalDialogPopup`,
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight`,
        browserType: m,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        replace_existing_popup: !0,
        center_on_window: O?.BCenterPopupsOnWindow() ? D : void 0,
        eCreationFlags: M,
        target_browser: O?.GetBrowserInfo(),
      },
      A,
    );
  if (
    (w.useEffect(() => (u(y, P), () => u(y, void 0)), [y, P]),
    w.useEffect(() => {
      P && (P.document.title = n ?? t);
    }, [P, n, t]),
    !F)
  )
    return null;
  let I = e.modal ?? e.onlyPopoutIfNeeded,
    L = !e.resizable;
  return (0, T.jsxs)(T.Fragment, {
    children: [
      I && (0, T.jsx)(j, { popup: P }),
      _(
        (0, T.jsx)(C, {
          ownerWindow: P,
          children: (0, T.jsxs)(p, {
            children: [
              (0, T.jsxs)(k, {
                popup: P,
                bFitToContent: v,
                onContextMenu: o,
                children: [
                  (0, T.jsx)(h, {
                    className: x,
                    hideMin: L,
                    hideMax: L,
                    popup: P,
                    hideActions: !g,
                  }),
                  (0, T.jsx)(a, {
                    bCenterPopupsOnWindow: O?.BCenterPopupsOnWindow(),
                    browserInfo: O?.GetBrowserInfo(),
                    children: (0, T.jsx)(w.Suspense, {
                      fallback: null,
                      children: b,
                    }),
                  }),
                ],
              }),
              e.resizable && !v && (0, T.jsx)(E, { popup: P }),
            ],
          }),
        }),
        F,
      ),
    ],
  });
}
function j(e) {
  let { popup: t } = e,
    n = w.useCallback(() => {
      t?.SteamClient.Window.BringToFront();
    }, [t]);
  return (
    w.useEffect(n, [n]),
    (0, T.jsx)(S, {
      active: !0,
      children: (0, T.jsx)(`div`, {
        style: { position: `fixed`, left: 0, top: 0, right: 0, bottom: 0 },
        onClick: n,
      }),
    })
  );
}
function M(e) {
  let { labelledBy: t } = e || {},
    [n, r] = w.useState(void 0),
    i = w.useMemo(() => ({ setHeaderId: r }), []);
  return { headerId: t || n, context: i };
}
function N(e) {
  let {
      active: t,
      onDismiss: n,
      className: r,
      modalClassName: i,
      bGamepadUIScrollWithin: a,
      children: o,
      ...s
    } = e,
    { headerId: c, context: l } = M({ labelledBy: e[`aria-labelledby`] });
  return (0, T.jsx)(y.Provider, {
    value: l,
    children: (0, T.jsx)(S, {
      active: t,
      children: (0, T.jsx)(f, {
        onEscKeypress: n,
        className: i,
        bGamepadUIScrollWithin: a,
        children: (0, T.jsx)(x, {
          role: `dialog`,
          "aria-labelledby": c,
          className: r,
          ...s,
          children: o,
        }),
      }),
    }),
  });
}
function P(e) {
  let { className: t, children: n } = e;
  return (0, T.jsx)(S, {
    active: !0,
    children: (0, T.jsx)(`div`, { className: t, children: n }),
  });
}
export { P as n, D as r, N as t };
