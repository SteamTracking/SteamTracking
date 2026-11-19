import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { Pn as t, eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  Vu as r,
  c as i,
  ji as a,
  n as o,
  o as s,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as c } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { a as l, vt as u } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { t as d } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { t as f } from "./chunk~726542bc75.js?contenthash=CwUW-8V9";
import { n as p, t as m } from "./chunk~971d501580.js?contenthash=CxRXdK1L";
import {
  Bt as h,
  Fn as g,
  Ft as _,
  Gt as v,
  Ht as y,
  Jt as b,
  Kt as x,
  Nt as S,
  Qt as C,
  Rt as w,
  Ut as T,
  Vt as E,
  Wt as D,
  Xt as O,
  Yt as k,
  Zt as A,
  qt as j,
  zt as M,
} from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var N = e(n(), 1),
  P = `hBLCLdn2tcs-`,
  F = `bN6u4xtOHtc-`,
  I = `U5fKIgoCxiI-`,
  L = `QVhrOAytWng-`,
  R = `OKiuZfoJJfo-`,
  z = `_07VYh0-d89M-`,
  B = `cHbz0FG1fVI-`,
  V = d(),
  H = 4;
function U(e) {
  let { appid: t, showGlobalRate: n } = w(),
    { isPinned: r } = h(),
    i = M(),
    a = E(),
    { data: o } = b(t),
    s = (0, N.useMemo)(() => {
      let e = new Map();
      for (let t of o?.groups ?? [])
        for (let n of t.achievements) e.set(n.api_name, n);
      return e;
    }, [o]),
    [l, u] = (0, N.useState)();
  l && l.basis !== a?.pinnedAchievements && u(void 0);
  let d = l?.names ?? a?.pinnedAchievements,
    p = a?.setPinnedAchievements,
    v = a?.pinnedAchievements,
    y = (0, N.useMemo)(
      () =>
        v &&
        p &&
        ((e) => {
          (u({ basis: v, names: e }), p(e));
        }),
      [v, p],
    ),
    x = (0, N.useMemo)(
      () => (d ?? []).map((e) => s.get(e)).filter((e) => e !== void 0),
      [d, s],
    );
  return !d || !y
    ? null
    : (0, V.jsxs)(m, {
        direction: `column`,
        gap: x.length > 0 ? `0` : `2`,
        paddingTop: { initial: `2`, sm: `4` },
        className: c(P, r && `Y7YR2ymN-Rk-`, _, n && `eEtCL8zfSBU-`),
        navProps: { focusableIfEmpty: !0 },
        children: [
          (0, V.jsx)(g, {
            contrast: `description`,
            weight: `heavy`,
            marginX: i,
            style: { lineHeight: `20px` },
            className: r ? z : void 0,
            children: C.Localize(
              `#Achievements_Table_PinnedTitle`,
              f(x.length),
            ),
          }),
          x.length > 0
            ? (0, V.jsx)(K, {
                ...e,
                pinned: x,
                pinnedNames: d,
                setPinnedNames: y,
              })
            : (0, V.jsx)(g, {
                contrast: `description`,
                marginX: i,
                marginBottom: { initial: `2`, sm: `4` },
                children: C.Localize(`#Achievements_Pin_Empty`),
              }),
        ],
      });
}
function W(e) {
  let t = null;
  for (
    let n = e.closest(`[data-accent-color]`);
    n;
    n = n.parentElement?.closest(`[data-accent-color]`) ?? null
  )
    t = n;
  return {
    className: c(
      B,
      `noOpinionatedGlobalStyles`,
      _,
      e.closest(`.eEtCL8zfSBU-`) && `eEtCL8zfSBU-`,
    ),
    "data-accent-color": t?.getAttribute(`data-accent-color`) ?? void 0,
    "data-dull-color": t?.getAttribute(`data-dull-color`) ?? void 0,
    "data-body-text-color": t?.getAttribute(`data-body-text-color`) ?? void 0,
    style: {
      "--icon-size": window.getComputedStyle(e).getPropertyValue(`--icon-size`),
    },
  };
}
function G(e) {
  let {
      provided: n,
      snapshot: r,
      index: d,
      isLast: f,
      achievement: g,
      cloneRootProps: _,
      compareTo: v,
      compareProgress: b,
      globalPercentages: x,
      moveTo: T,
      moveBy: E,
      autoFocus: D,
    } = e,
    { appid: k, targetsteamid: A } = w(),
    { data: j } = O(k, A ?? ``),
    P = j?.achievements[g.internal_key],
    F = t(),
    { isPinned: I } = h(),
    z = M(),
    B = (e) => {
      o(
        (0, V.jsxs)(s, {
          children: [
            (0, V.jsx)(i, {
              onSelected: () => T(g.api_name, `top`),
              children: C.Localize(`#Achievements_Pin_MoveToTop`),
            }),
            (0, V.jsx)(i, {
              onSelected: () => T(g.api_name, `bottom`),
              children: C.Localize(`#Achievements_Pin_MoveToBottom`),
            }),
          ],
        }),
        e,
      );
    },
    U = r.isDropAnimating,
    W = n.draggableProps.onTransitionEnd;
  (0, N.useLayoutEffect)(() => {
    U && W?.({ propertyName: `transform` });
  }, [U, W]);
  let G = (0, N.useId)(),
    K = F
      ? {
          focusRingSizeElementID: G,
          onButtonDown: (e) => {
            let t =
              e.detail?.button == u.BUMPER_LEFT
                ? -1
                : +(e.detail?.button == u.BUMPER_RIGHT);
            t == 0 ||
              (t < 0 && d == 0) ||
              (t > 0 && f) ||
              (e.stopPropagation(), e.preventDefault(), E(g.api_name, t));
          },
          actionDescriptionMap: {
            [u.BUMPER_LEFT]:
              d > 0 ? C.Localize(`#Achievements_Pin_MoveUp`) : null,
            [u.BUMPER_RIGHT]: f
              ? null
              : C.Localize(`#Achievements_Pin_MoveDown`),
          },
        }
      : void 0,
    q = { ...y(n.draggableProps.style ?? {}), marginBottom: H },
    J = (0, V.jsx)(`div`, {
      className: c(
        L,
        I && `kcFDYe0O-0k-`,
        r.isDragging && `lLrSidtylZE-`,
        r.isDragging && !r.draggingOver && `SUzEIytDHSo-`,
        D && `gRleWv2icIA-`,
      ),
      id: F ? G : void 0,
      ref: n.innerRef,
      ...n.draggableProps,
      ...n.dragHandleProps,
      style: q,
      onContextMenu: B,
      children: (0, V.jsx)(p, {
        paddingX: z,
        className: R,
        children: (0, V.jsx)(S, {
          appid: k,
          achievement: g,
          progress: P,
          unlockedForSelf: P?.unlocked ?? !1,
          globalUnlockPercentage: x?.percentages[g.internal_key] ?? void 0,
          showProgress: !0,
          compareTo: v,
          compareProgress: b,
          tableindex: d,
          alwaysPinnable: !0,
          isLast: f || I,
          navProps: K,
          autoFocus: D,
          dragHandle:
            !F &&
            (0, V.jsx)(m, {
              align: `center`,
              flexShrink: `0`,
              alignSelf: `start`,
              height: `var(--icon-size, 48px)`,
              className: `RdF7WIlWeKA-`,
              children: (0, V.jsx)(l, {
                direction: `top`,
                toolTipContent: C.Localize(`#Achievements_Pin_DragToReorder`),
                style: { cursor: `inherit` },
                children: (0, V.jsx)(a, {
                  className: c(`ETIQ7fGYNMw-`, I && `_07VYh0-d89M-`),
                }),
              }),
            }),
        }),
      }),
    });
  return _ ? (0, V.jsx)(`div`, { ..._, children: J }) : J;
}
function K(e) {
  let { pinned: n, pinnedNames: i, setPinnedNames: a, compareTo: o } = e,
    { isPanel: s, appid: c } = w(),
    l = t(),
    { data: u } = k(c),
    d = A(c, o ?? []),
    f = r(),
    p = (0, N.useRef)(null),
    [m, h] = (0, N.useState)(56);
  (0, N.useEffect)(() => {
    if (!p.current) return;
    let e = parseInt(
      window.getComputedStyle(p.current).getPropertyValue(`--icon-size`),
    );
    isNaN(e) || h(e + (l ? 25 : 2));
  }, [l]);
  let g = (0, N.useRef)(0),
    _ = (0, N.useCallback)((e) => {
      let t = p.current?.querySelector(
        `[data-rfd-draggable-id="${CSS.escape(e.draggableId)}"]`,
      );
      g.current = t?.getBoundingClientRect().height ?? 0;
    }, []),
    y = (0, N.useCallback)(
      (e) => {
        e.destination &&
          e.destination.index != e.source.index &&
          a(T(i, e.source.index, e.destination.index));
      },
      [i, a],
    ),
    b = (0, N.useCallback)(
      (e, t) => {
        let n = i.filter((t) => t !== e);
        a(t == `top` ? [e, ...n] : [...n, e]);
      },
      [i, a],
    ),
    [S, C] = (0, N.useState)(),
    E = (0, N.useCallback)(
      (e, t) => {
        let n = i.indexOf(e);
        (a(T(i, n, n + t)), C(e));
      },
      [i, a],
    ),
    O = (0, N.useCallback)(
      (e, t, r) =>
        (0, V.jsx)(G, {
          provided: e,
          snapshot: t,
          index: r.source.index,
          isLast: !0,
          achievement: n[r.source.index],
          cloneRootProps: p.current ? W(p.current) : void 0,
          compareTo: o,
          compareProgress: d,
          globalPercentages: u,
          moveTo: b,
          moveBy: E,
        }),
      [n, o, d, u, b, E],
    ),
    M = (0, N.useCallback)(
      () => f?.ownerWindow?.document.body ?? window.document.body,
      [f],
    ),
    P = (0, N.useCallback)(
      (e, t) => {
        let r = n[e];
        return (0, V.jsxs)(`div`, {
          className: I,
          children: [
            (0, V.jsx)(
              x,
              {
                draggableId: r.api_name,
                index: e,
                children: (t, i) =>
                  (0, V.jsx)(G, {
                    provided: t,
                    snapshot: i,
                    index: e,
                    isLast: e == n.length - 1,
                    achievement: r,
                    compareTo: o,
                    compareProgress: d,
                    globalPercentages: u,
                    moveTo: b,
                    moveBy: E,
                    autoFocus: r.api_name == S,
                  }),
              },
              r.api_name,
            ),
            t == r.api_name &&
              (0, V.jsx)(`div`, { style: { height: g.current + H } }),
          ],
        });
      },
      [n, o, d, u, b, E, S],
    );
  return (0, V.jsx)(v, {
    onBeforeCapture: _,
    onDragEnd: y,
    stylesInsertionPoint: f?.ownerWindow?.document?.head,
    children: (0, V.jsx)(D, {
      droppableId: `pinned-achievements`,
      mode: `virtual`,
      direction: `vertical`,
      isCombineEnabled: !1,
      renderClone: O,
      getContainerForClone: M,
      children: (e, t) =>
        (0, V.jsx)(`div`, {
          className: F,
          style: { marginBottom: -4 },
          ref: (t) => {
            (e.innerRef(t), (p.current = t));
          },
          ...e.droppableProps,
          children: (0, V.jsx)(j, {
            navKey: `PinnedAchievementsList`,
            hintVirtualizeType: s ? `element` : `window`,
            bNativeScrollIntoView: !0,
            bBrowserScrollAnchoring: !0,
            nRows: n.length,
            nItemHeight: m + H,
            nRowGap: 0,
            overscan: 5,
            bDynamic: !0,
            renderItem: (e) => P(e, t.draggingFromThisWith ?? null),
          }),
        }),
    }),
  });
}
export { U as PinnedAchievementsList };
