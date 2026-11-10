/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { It as t, Lt as n, ft as r } from "./libraries.js";
import {
  Ai as i,
  Bb as a,
  Bn as o,
  Cc as s,
  Dr as c,
  Fu as l,
  In as u,
  Ln as d,
  Mr as f,
  Oa as p,
  Pn as m,
  Un as h,
  Vn as g,
  Wn as _,
  ar as v,
  ji as y,
  ka as b,
  mn as x,
  or as S,
  zl as C,
} from "./main.js";
var w = e(t()),
  T = e(n()),
  E = r();
function D(e) {
  let { popup: t, className: n, ...r } = e,
    i = g(t),
    a = T.useRef(null);
  return (
    T.useEffect(() => {
      let e = a.current;
      if (e && l(t, `Window.SetResizeGrip`)) {
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
        l(t, `Window.SetResizeGrip`) &&
          t.SteamClient.Window.SetResizeGrip(0, 0);
      };
    }, [t, i]),
    i
      ? null
      : (0, E.jsx)(`div`, {
          className: s(`window_resize_grip`, n),
          ref: a,
          ...r,
        })
  );
}
var O = (e) => k({ modal: !0, ...e });
function k(e) {
  let t = b().ownerWindow,
    n = a(),
    [r, i] = T.useState(() =>
      n ||
      (e.onlyPopoutIfNeeded === !0 &&
        e.popupHeight < t.innerHeight * 0.9 &&
        e.popupWidth < t.innerWidth * 0.9 &&
        t.document.visibilityState == `visible`)
        ? `inline`
        : `popout`,
    );
  return r === `inline`
    ? (0, E.jsx)(x, { active: !0, children: e.children })
    : r === `popout`
      ? (0, E.jsx)(j, { ...e })
      : null;
}
function A(e) {
  let { popup: t, children: n, bFitToContent: r, className: a, ...o } = e,
    c = T.useCallback(
      (e) => {
        let n = Math.ceil(e.borderBoxSize[0].inlineSize),
          r = Math.ceil(e.borderBoxSize[0].blockSize);
        t?.SteamClient.Window.ResizeTo(n, r, !0);
      },
      [t],
    ),
    l = i(c);
  return (0, E.jsx)(`div`, {
    className: s(`PopupFullWindow`, r && `FitToContent`, a),
    ref: r ? l : void 0,
    ...o,
    children: n,
  });
}
function j(e) {
  let {
      strName: t,
      strTitle: n,
      popupWidth: r,
      popupHeight: i,
      browserType: a,
      onDismiss: s,
      bFitToContent: l,
      refPopup: m,
      children: g,
      titleBarClassName: v,
      saveDimensionsKey: x,
    } = e,
    S = b()?.ownerWindow,
    O = d(),
    k = { ..._(x), onClose: s },
    j = 0;
  (e.resizable && (j |= c.Resizable),
    (e.minWidth || e.minHeight) && (j |= c.ApplyBrowserScaleToDimensions),
    e.fullscreen && (j |= c.FullScreen));
  let N = `PopupWindow_` + (t ? `${t}_` : ``) + T.useId(),
    { popup: P, element: F } = h(
      N,
      {
        title: n,
        dimensions: { width: r, height: i },
        html_class: `client_chat_frame fullheight ModalDialogPopup`,
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight`,
        browserType: a,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        replace_existing_popup: !0,
        center_on_window: O?.BCenterPopupsOnWindow() ? S : void 0,
        eCreationFlags: j,
        target_browser: O?.GetBrowserInfo(),
      },
      k,
    );
  if (
    (T.useEffect(() => (C(m, P), () => C(m, void 0)), [m, P]),
    T.useEffect(() => {
      P && (P.document.title = n ?? t);
    }, [P, n, t]),
    !F)
  )
    return null;
  let I = e.modal ?? e.onlyPopoutIfNeeded,
    L = !e.resizable;
  return (0, E.jsxs)(E.Fragment, {
    children: [
      I && (0, E.jsx)(M, { popup: P }),
      w.createPortal(
        (0, E.jsx)(p, {
          ownerWindow: P,
          children: (0, E.jsxs)(y, {
            children: [
              (0, E.jsxs)(A, {
                popup: P,
                bFitToContent: l,
                onContextMenu: f,
                children: [
                  (0, E.jsx)(o, {
                    className: v,
                    hideMin: L,
                    hideMax: L,
                    popup: P,
                    hideActions: !s,
                  }),
                  (0, E.jsx)(u, {
                    bCenterPopupsOnWindow: O?.BCenterPopupsOnWindow(),
                    browserInfo: O?.GetBrowserInfo(),
                    children: g,
                  }),
                ],
              }),
              e.resizable && !l && (0, E.jsx)(D, { popup: P }),
            ],
          }),
        }),
        F,
      ),
    ],
  });
}
function M(e) {
  let { popup: t } = e,
    n = T.useCallback(() => {
      t?.SteamClient.Window.BringToFront();
    }, [t]);
  return (
    T.useEffect(n, [n]),
    (0, E.jsx)(x, {
      active: !0,
      children: (0, E.jsx)(`div`, {
        style: { position: `fixed`, left: 0, top: 0, right: 0, bottom: 0 },
        onClick: n,
      }),
    })
  );
}
function N(e) {
  let { labelledBy: t } = e || {},
    [n, r] = T.useState(void 0),
    i = T.useMemo(() => ({ setHeaderId: r }), []);
  return { headerId: t || n, context: i };
}
function P(e) {
  let {
      active: t,
      onDismiss: n,
      className: r,
      modalClassName: i,
      bGamepadUIScrollWithin: a,
      children: o,
      ...s
    } = e,
    { headerId: c, context: l } = N({ labelledBy: e[`aria-labelledby`] });
  return (0, E.jsx)(S.Provider, {
    value: l,
    children: (0, E.jsx)(x, {
      active: t,
      children: (0, E.jsx)(m, {
        onEscKeypress: n,
        className: i,
        bGamepadUIScrollWithin: a,
        children: (0, E.jsx)(v, {
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
function F(e) {
  let { className: t, children: n } = e;
  return (0, E.jsx)(x, {
    active: !0,
    children: (0, E.jsx)(`div`, { className: t, children: n }),
  });
}
export { F as n, O as r, P as t };
