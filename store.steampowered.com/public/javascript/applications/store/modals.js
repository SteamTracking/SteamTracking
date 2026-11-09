/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { It as t, Lt as n, ft as r } from "./libraries.js";
import {
  Ai as i,
  Bn as a,
  Da as o,
  Er as s,
  Fn as c,
  Hn as l,
  In as u,
  Nn as d,
  Oa as f,
  Pu as p,
  Rl as m,
  Sc as h,
  Un as g,
  ar as _,
  ir as v,
  jr as y,
  ki as b,
  pn as x,
  zb as S,
  zn as C,
} from "./main.js";
var w = e(t()),
  T = e(n()),
  E = r();
function D(e) {
  let { popup: t, className: n, ...r } = e,
    i = a(t),
    o = T.useRef(null);
  return (
    T.useEffect(() => {
      let e = o.current;
      if (e && p(t, `Window.SetResizeGrip`)) {
        let n = 0,
          r = 0,
          a = e.getBoundingClientRect(),
          o = e.ownerDocument.defaultView;
        a &&
          o &&
          !i &&
          ((n = Math.ceil(o.innerWidth - a.left)),
          (r = Math.ceil(o.innerHeight - a.top))),
          t.SteamClient.Window.SetResizeGrip(n, r);
      }
      return () => {
        p(t, `Window.SetResizeGrip`) &&
          t.SteamClient.Window.SetResizeGrip(0, 0);
      };
    }, [t, i]),
    i
      ? null
      : (0, E.jsx)(`div`, {
          className: h(`window_resize_grip`, n),
          ref: o,
          ...r,
        })
  );
}
var O = (e) => k({ modal: !0, ...e });
function k(e) {
  let t = f().ownerWindow,
    n = S(),
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
  let { popup: t, children: n, bFitToContent: r, className: i, ...a } = e,
    o = T.useCallback(
      (e) => {
        let n = Math.ceil(e.borderBoxSize[0].inlineSize),
          r = Math.ceil(e.borderBoxSize[0].blockSize);
        t?.SteamClient.Window.ResizeTo(n, r, !0);
      },
      [t],
    ),
    s = b(o);
  return (0, E.jsx)(`div`, {
    className: h(`PopupFullWindow`, r && `FitToContent`, i),
    ref: r ? s : void 0,
    ...a,
    children: n,
  });
}
function j(e) {
  let {
      strName: t,
      strTitle: n,
      popupWidth: r,
      popupHeight: a,
      browserType: d,
      onDismiss: p,
      bFitToContent: h,
      refPopup: _,
      children: v,
      titleBarClassName: b,
      saveDimensionsKey: x,
    } = e,
    S = f()?.ownerWindow,
    O = u(),
    k = { ...g(x), onClose: p },
    j = 0;
  e.resizable && (j |= s.Resizable),
    (e.minWidth || e.minHeight) && (j |= s.ApplyBrowserScaleToDimensions),
    e.fullscreen && (j |= s.FullScreen);
  let N = `PopupWindow_` + (t ? `${t}_` : ``) + T.useId(),
    { popup: P, element: F } = l(
      N,
      {
        title: n,
        dimensions: { width: r, height: a },
        html_class: `client_chat_frame fullheight ModalDialogPopup`,
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight`,
        browserType: d,
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
    (T.useEffect(() => (m(_, P), () => m(_, void 0)), [_, P]),
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
        (0, E.jsx)(o, {
          ownerWindow: P,
          children: (0, E.jsxs)(i, {
            children: [
              (0, E.jsxs)(A, {
                popup: P,
                bFitToContent: h,
                onContextMenu: y,
                children: [
                  (0, E.jsx)(C, {
                    className: b,
                    hideMin: L,
                    hideMax: L,
                    popup: P,
                    hideActions: !p,
                  }),
                  (0, E.jsx)(c, {
                    bCenterPopupsOnWindow: O?.BCenterPopupsOnWindow(),
                    browserInfo: O?.GetBrowserInfo(),
                    children: v,
                  }),
                ],
              }),
              e.resizable && !h && (0, E.jsx)(D, { popup: P }),
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
  return (0, E.jsx)(_.Provider, {
    value: l,
    children: (0, E.jsx)(x, {
      active: t,
      children: (0, E.jsx)(d, {
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
