/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  H as n,
  Q as r,
  R as i,
  S as a,
  U as o,
  _t as s,
  en as c,
  k as l,
  kt as u,
  on as d,
  x as f,
} from "./mobx.esm.js";
import { It as p, ut as m } from "./src.js";
import {
  Gi as h,
  Gr as g,
  La as _,
  Mn as ee,
  Tr as v,
  oa as y,
  qi as te,
  u as ne,
} from "./dialogs.js";
import {
  S as re,
  d as b,
  h as x,
  i as S,
  o as C,
} from "./storebrowsequerycontext.js";
import {
  $t as w,
  Ct as ie,
  Fi as ae,
  Gn as oe,
  Gt as T,
  Hn as E,
  It as se,
  Jt as D,
  Lt as O,
  Q as ce,
  Qn as k,
  Xt as le,
  Yt as ue,
  Zt as A,
  an as de,
  dt as fe,
  nn as pe,
  st as me,
} from "./saletags.js";
import "./react-router.js";
import { i as j } from "./utils.js";
import { t as he } from "./useQuery.js";
import { r as ge } from "./modals.js";
import { f as _e } from "./deckverified.js";
import { s as ve } from "./localization2.js";
var M = d(u()),
  N = s(),
  P = `Og4Odc3VLI8-`;
function F(e, t, n, r) {
  M.useEffect(() => {
    let i = (i) => {
      i.key === e && (t(i), n && i.preventDefault(), r && i.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, i),
      () => document.removeEventListener(`keydown`, i)
    );
  }, [e, t, n, r]);
}
var ye = `oliNocjo3ok-`,
  be = `x3qY8Eev7UU-`,
  xe = `_3lYhLNSBOpE-`,
  Se = `tyYNnQMYYyw-`,
  Ce = `-WD8g17w7iA-`;
function I() {
  let [e, t] = M.useState(void 0),
    n = M.useCallback(() => t(void 0), []);
  return [
    t,
    (0, N.jsx)(ge, {
      active: e !== void 0,
      children: (0, N.jsx)(we, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function we(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = M.useState(0),
    a = n?.length ?? 0,
    o = M.useCallback(() => {
      i(r == 0 ? a - 1 : r - 1);
    }, [r, a]),
    s = M.useCallback(() => {
      n && r + 1 >= a ? i(0) : i(r + 1);
    }, [r, n, a]);
  return (0, N.jsxs)(ne, {
    title: y(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: ye,
    children: [
      (0, N.jsx)(Te, {
        index: r,
        numElements: n?.length || 0,
        fnForward: s,
        fnBackwards: o,
        fnClose: t,
        bCircular: !0,
      }),
      (0, N.jsx)(`div`, {
        className: be,
        children: (0, N.jsx)(`img`, { className: xe, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function Te(e) {
  let {
    index: n,
    numElements: r,
    fnForward: i,
    fnBackwards: a,
    fnClose: o,
    bCircular: s,
  } = e;
  F(`ArrowLeft`, () => a?.(), !0, !0),
    F(`Left`, () => a?.(), !0, !0),
    F(`ArrowRight`, () => i?.(), !0, !0),
    F(`Right`, () => i?.(), !0, !0),
    F(`Escape`, () => o && o(), !0, !0),
    F(`Esc`, () => o && o(), !0, !0);
  let c = r > 1;
  return (0, N.jsxs)(`div`, {
    className: Se,
    children: [
      c &&
        (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(`button`, {
              type: `button`,
              className: t(
                `-WD8g17w7iA-`,
                n === 0 && !s ? `apJ9YvEIT9k-` : null,
              ),
              onClick: a,
              "aria-label": y(`#Carousel_Prev`),
              children: (0, N.jsx)(v, { angle: 270 }),
            }),
            (0, N.jsx)(`button`, {
              type: `button`,
              className: t(
                `-WD8g17w7iA-`,
                n === r - 1 && !s ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": y(`#Carousel_Next`),
              children: (0, N.jsx)(v, { angle: 90 }),
            }),
          ],
        }),
      (0, N.jsx)(`button`, {
        type: `button`,
        className: Ce,
        onClick: o,
        "aria-label": y(`#Button_Close`),
        children: (0, N.jsx)(te, {}),
      }),
    ],
  });
}
var Ee = `xq-I5249Blg-`,
  De = `_-8Ur6QivGZk-`,
  L = 1.3,
  Oe = 3,
  ke = 256;
function R(e) {
  let [n, r] = (0, M.useState)(!1),
    [i, a] = (0, M.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    o = (0, M.useRef)(null),
    [s, c] = I();
  return (
    (0, M.useEffect)(() => {
      i.naturalWidth > i.displayWidth * L &&
        i.naturalHeight > i.displayHeight * L &&
        i.naturalWidth > ke &&
        i.naturalWidth / i.naturalHeight < Oe &&
        r(!0);
    }, [i]),
    n
      ? (0, N.jsxs)(`span`, {
          className: Ee,
          children: [
            c,
            (0, N.jsx)(`span`, { className: De, children: (0, N.jsx)(g, {}) }),
            (0, N.jsx)(`img`, {
              ...e,
              className: t({ ...(e.className && { [e.className]: !0 }) }),
              onClick: (t) => {
                e.src && s([e.src]);
              },
            }),
          ],
        })
      : (0, N.jsx)(`img`, {
          ...e,
          ref: o,
          onLoad: (e) => {
            if (!e.currentTarget.closest(`a`) && !oe()) {
              let {
                naturalWidth: t,
                naturalHeight: n,
                width: r,
                height: i,
              } = e.currentTarget;
              a({
                naturalWidth: t,
                naturalHeight: n,
                displayWidth: r,
                displayHeight: i,
              });
            }
          },
        })
  );
}
function z(e) {
  let {
      className: t,
      srcs: n,
      lazyLoad: r,
      width: i,
      height: a,
      alt: o,
      crossOrigin: s,
    } = e,
    [c, l] = M.useState(n.length),
    [u, d] = M.useState(0);
  M.useEffect(() => {
    c != n.length && (l(n.length), d(0));
  }, [c, n.length]);
  let f = M.useCallback(() => {
    e.onImageError && e.onImageError(e.srcs[u]),
      u + 1 < e.srcs.length && d(u + 1);
  }, [u, e]);
  return n.length == 0
    ? null
    : (0, N.jsx)(`img`, {
        className: t,
        src: n[u],
        crossOrigin: s,
        onError: f,
        loading: r ? `lazy` : void 0,
        width: i,
        height: a,
        alt: o,
      });
}
function Ae(e) {
  let [t, n] = M.useState(!1),
    {
      className: r,
      src: i,
      lazyLoad: a,
      width: o,
      height: s,
      alt: c,
      crossOrigin: l,
    } = e;
  return t
    ? (0, N.jsxs)(`div`, {
        className: P,
        children: [
          (0, N.jsx)(`p`, { children: y(`#Image_ErrorTitle`, i) }),
          (0, N.jsx)(`ul`, {
            children: (0, N.jsx)(`li`, { children: y(`#Image_Error_msg1`) }),
          }),
          (0, N.jsx)(`p`, { children: y(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, N.jsx)(R, {
        className: r,
        src: i,
        onError: () => n(!0),
        crossOrigin: l,
        loading: a ? `lazy` : void 0,
        width: o,
        height: s,
        alt: c,
      });
}
function je(e) {
  let {
      id: n,
      imageType: r,
      bPreferAssetWithoutOverride: i,
      strAdditionalClassName: a,
      bNoShadow: o,
    } = e,
    { storeItemAsset: s, storeItemDefaultInfo: c } = $(n, r, i);
  if (r === `library` || r == `vertical`)
    return (0, N.jsx)(Q, {
      id: n,
      bPreferAssetWithoutOverride: i,
      bNoShadow: o,
    });
  let l = ``;
  switch (r) {
    case `main`:
      l = pe;
      break;
    default:
      l = le;
  }
  if (s === void 0 || !c)
    return (0, N.jsx)(`div`, { className: t(l, `CapsuleImageCtn`, a) });
  if (s == null) return null;
  let u = V(s, r === `header`);
  return (0, N.jsx)(`div`, {
    className: t(l, `CapsuleImageCtn`, a),
    children: (0, N.jsx)(z, {
      lazyLoad: !0,
      srcs: u,
      className: t(O),
      alt: c.name,
    }),
  });
}
var B = d(p(), 1);
function V(e, t) {
  let n = [];
  return e && Ne(n, e, t), n.filter((e) => !!e);
}
function Me(e, t) {
  return {
    strStoreVerticalURL: k(e, `hero_capsule`),
    strLibraryVerticalURL: k(e, `library_capsule`),
  };
}
function Ne(e, t, n) {
  let r = k(t, `header_2x`) ?? k(t, `header`),
    i = k(t, `main_capsule_2x`) ?? k(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var Pe = `K2BGbCx37Cg-`,
  Fe = `wnVw5QEjvtw-`,
  Ie = `-a-3HG4gESE-`,
  H = `-OQDE-IeSKo-`,
  Le = `iVqIvGU08cQ-`,
  Re = `vO3l7X14-dI-`,
  ze = `n1QMIymiV0w-`,
  Be = `ebRw2SGSkSY-`,
  U = `qN5ejX3iSmI-`,
  W = `_7Xd-p6v3h-U-`,
  Ve = `_6uN5TDmIPak-`,
  He = `_4UX-whX3nGs-`,
  Ue = `f0EapRMh-PI-`,
  We = `q4JwMxF0b-8-`,
  Ge = `otywAXtYosA-`;
function Ke(e) {
  let { id: t, ...n } = e,
    { data: r } = re(t);
  return (0, N.jsx)(qe, { ...n, platforms: r });
}
M.memo(function (e) {
  let { platforms: t } = e;
  if (!t) return null;
  let { windows: n, mac: r, steamos_linux: i, vr_support: a } = t;
  return (0, N.jsxs)(`span`, {
    className: Ie,
    children: [
      n && (0, N.jsx)(Je, {}),
      r && (0, N.jsx)(Ye, {}),
      i && (0, N.jsx)(Xe, {}),
      a?.vrhmd && (0, N.jsx)(Ze, {}),
    ],
  });
});
var qe = M.memo(function (t) {
  let { platforms: n, eHWCompat: r, size: i = `small` } = t,
    a;
  if (r == 0)
    return (
      e(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (r == 2) {
    let e = n?.steam_os_compat_category;
    if (e === void 0) return null;
    switch (e) {
      case 2:
        a = st;
        break;
      case 1:
        a = G;
        break;
      case 0:
        a = K;
        break;
      default:
        return c(e, `Unhandled steam os category: ${e}`), null;
    }
  } else {
    let e;
    if (
      ((e =
        r == 3
          ? n?.steam_machine_compat_category
          : r == 4
            ? n?.steam_frame_compat_category
            : n?.steam_deck_compat_category),
      e === void 0)
    )
      return null;
    switch (e) {
      case 3:
        a = at;
        break;
      case 2:
        a = ot;
        break;
      case 1:
        a = G;
        break;
      case 0:
        a = K;
        break;
      default:
        return c(e, `Unhandled deck compat category: ${e}`), null;
    }
  }
  return (0, N.jsxs)(`span`, {
    className: (0, B.default)(
      Be,
      i == `small` && void 0,
      i == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      r == 1 && (0, N.jsx)(nt, {}),
      r == 3 && (0, N.jsx)(rt, {}),
      r == 4 && (0, N.jsx)(it, {}),
      (0, N.jsx)(a, {}),
    ],
  });
});
function Je() {
  return (0, N.jsx)(`span`, {
    className: (0, B.default)(H, Le),
    title: _.Localize(`#Platform_Windows`),
    children: (0, N.jsx)(Qe, {}),
  });
}
function Ye() {
  return (0, N.jsx)(`span`, {
    className: (0, B.default)(H, ze),
    title: _.Localize(`#Platform_Mac`),
    children: (0, N.jsx)($e, {}),
  });
}
function Xe() {
  return (0, N.jsx)(`span`, {
    className: (0, B.default)(H, Re),
    title: _.Localize(`#Platform_Linux`),
    children: (0, N.jsx)(et, {}),
  });
}
function Ze() {
  return (0, N.jsx)(`span`, {
    className: H,
    title: _.Localize(`#Platform_VR`),
    children: (0, N.jsx)(tt, {}),
  });
}
function Qe() {
  return (0, N.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    className: `SVGIcon_Button SVGIcon_WindowsLogo`,
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 128 128`,
    enableBackground: `new 0 0 128 128`,
    children: [
      (0, N.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, N.jsx)(`rect`, {
        x: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, N.jsx)(`rect`, {
        y: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, N.jsx)(`rect`, {
        x: `67.165`,
        y: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function $e() {
  return (0, N.jsxs)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, N.jsx)(`path`, {
        d: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, N.jsx)(`path`, {
        d: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function et() {
  return (0, N.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    x: `0px`,
    y: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function tt() {
  return (0, N.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, N.jsx)(`path`, {
        d: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, N.jsx)(`path`, {
        d: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function nt() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, B.default)(U),
    children: (0, N.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function rt() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, B.default)(U),
    children: (0, N.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, N.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, N.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function it() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, B.default)(U),
    children: (0, N.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, N.jsx)(`path`, {
          opacity: `0.84`,
          d: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, N.jsx)(`path`, {
          opacity: `0.84`,
          "fill-rule": `evenodd`,
          "clip-rule": `evenodd`,
          d: `M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function at() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Verified`),
    className: W,
    children: (0, N.jsx)(`svg`, {
      className: (0, B.default)(Ve),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function ot() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Playable`),
    className: W,
    children: (0, N.jsx)(`svg`, {
      className: (0, B.default)(He),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function G() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: W,
    children: (0, N.jsx)(`svg`, {
      className: (0, B.default)(Ue),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function K() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: W,
    children: (0, N.jsx)(`svg`, {
      className: (0, B.default)(We),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function st() {
  return (0, N.jsx)(`span`, {
    title: _.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: W,
    children: (0, N.jsx)(`svg`, {
      className: (0, B.default)(Ge),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, N.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function ct(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !i() && !t ? null : (0, N.jsx)(lt, { ...e });
}
function lt(e) {
  let { className: n, id: r } = e,
    [i, a] = _e(),
    o = a;
  if ((a == 0 && (o = 1), !r)) return null;
  let s;
  return (
    a == 4 && (s = Fe),
    (0, N.jsx)(`div`, {
      className: t(Pe, s, n),
      children: (0, N.jsx)(Ke, { id: r, eHWCompat: o }),
    })
  );
}
function ut(e) {
  return (0, M.useMemo)(() => mt(e), [e?.id, e?.type]);
}
function dt(e, t) {
  return (0, M.useMemo)(() => ht(e, t), [e, t]);
}
function ft(e, t) {
  return (0, M.useMemo)(() => q(e, t), [e, t]);
}
function pt(e, t) {
  let n = `app`;
  return (
    t == 2 ? (n = `bundle`) : t == 1 && (n = `sub`),
    (0, M.useMemo)(() => q(e, n), [e, n])
  );
}
function mt(e) {
  if (e && e.id) {
    if (!e.type) return { appid: e.id };
    switch (e.type) {
      case `sub`:
        return { packageid: e.id };
      case `bundle`:
        return { bundleid: e.id };
      default:
        return { appid: e.id };
    }
  }
}
function q(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function ht(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
async function gt() {
  let e = r(`broadcast_available_for_page`, `application_config`);
  if (Y(e)) {
    let t = new Set();
    return (
      e.filtered.forEach((e) => {
        e.appid && t.add(e.appid);
      }),
      Array.from(t)
    );
  }
  return [];
}
var J = class {
  constructor() {
    f(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
l([a], J.prototype, `title`, void 0),
  l([a], J.prototype, `viewer_count`, void 0),
  l([a], J.prototype, `gamedata_subtitle`, void 0),
  l([a], J.prototype, `current_selection_priority`, void 0);
var _t = `primary`,
  vt = `featured`,
  yt = `default_featured`,
  bt = `general`,
  xt = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function St(e) {
  switch (e) {
    case _t:
      return 3;
    case vt:
      return 2;
    case yt:
      return 1;
    case bt:
    default:
      return 0;
  }
}
function Y(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function Ct() {
  return he(Tt());
}
function wt(e) {
  let { data: t } = Ct(),
    [n, r] = (0, M.useState)(!1),
    i = j(),
    a = S();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(C(a, { appid: e }))),
        );
        r(
          n.some(
            (e) =>
              (e && e.appid && t.has(e.appid)) ||
              (e?.related_items?.parent_appid &&
                t.has(e.related_items.parent_appid)),
          ),
        );
      })();
    }, [e, a, i, t]),
    n
  );
}
function Tt() {
  return {
    queryKey: Et(),
    queryFn: async () => {
      let e = await gt();
      return new Set(e);
    },
  };
}
function Et() {
  return [`BroadcastApps`];
}
var Dt = `hRwhHwwKlgI-`;
function X() {
  return (0, N.jsx)(`div`, {
    className: Dt,
    children: y(`#home_page_live_broadcast`),
  });
}
function Z(e) {
  let { appids: r, hide_status_banners: i, show_early_access: a } = e,
    { data: o } = ae(),
    { data: s } = fe(),
    c = r.length > 0 && r.every((e) => o && o.has(e)),
    l = r.length > 0 && r.every((e) => s && s.has(e)),
    u = wt(r),
    d = c && !i,
    f = l && !i,
    p = !i && a;
  return (0, N.jsxs)(`div`, {
    className: t(se, `CapsuleDecorators`),
    children: [
      d &&
        (0, N.jsxs)(`span`, {
          className: t(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, N.jsx)(`img`, {
              src: n(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: _.Localize(`#Sale_InLibrary`),
            }),
            _.Localize(`#Sale_InLibrary`),
          ],
        }),
      f &&
        (0, N.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, N.jsx)(h, { className: `ppO76q5Y-Zg-` }),
            _.Localize(`#Sale_OnWishlist`),
          ],
        }),
      p && !d && !f && (0, N.jsx)(Ot, { appids: r }),
      u && (0, N.jsx)(X, {}),
    ],
  });
}
function Ot(e) {
  let { appids: n } = e;
  return kt(n)
    ? (0, N.jsx)(`span`, {
        className: t(ie, T),
        children: _.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function kt(e) {
  let [t, n] = (0, M.useState)(!1),
    r = j(),
    i = S();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(C(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
    t
  );
}
function At(t, n, r, i, a, o) {
  if (!r) return;
  if (!me(t.item_type)) {
    e(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + t.item_type);
    return;
  }
  let s = ve(`${ce(t, i)}${a ? `?${a}` : ``}`, n);
  return {
    onClick: (e) => {
      let t = m(e) || window;
      o ? o(e) : s.startsWith(`steam://`) || (t.location.href = ee(s));
    },
    onOKActionDescription: _.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function Q(e) {
  let {
      id: n,
      bPreferLibrary: r,
      bPreferAssetWithoutOverride: i,
      bNoShadow: a,
    } = e,
    s = a ? de : ``,
    { storeItemDefaultInfo: c, storeItemAsset: l } = $(n, `vertical`, i),
    [u, d] = M.useState(0);
  if (!c || !l) return (0, N.jsx)(`div`, { className: A });
  let { strStoreVerticalURL: f, strLibraryVerticalURL: p } = Me(l, c);
  if (f && (!r || !p))
    return (0, N.jsxs)(`div`, {
      className: t(A, `HeroCapsuleImageContainer`),
      children: [
        (0, N.jsx)(`img`, { src: f, className: O, alt: c.name }),
        c.type == 4 &&
          (0, N.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${o.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (p)
    return (0, N.jsxs)(`div`, {
      className: t(w, E, r ? ue : ``, s),
      children: [
        (0, N.jsx)(`div`, {
          className: D,
          style: { backgroundImage: `url(${p})` },
        }),
        (0, N.jsx)(`img`, { src: p, className: O, alt: c.name }),
      ],
    });
  let m = V(l, !0),
    h = m.length - 1,
    g = (e) => {
      let t = m.indexOf(e);
      t >= h && t < m.length - 1 && d(t + 1);
    };
  if (u < m.length) {
    let e = m[u];
    return (0, N.jsxs)(`div`, {
      className: t(w, s),
      children: [
        (0, N.jsx)(`div`, {
          className: D,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, N.jsx)(z, {
          lazyLoad: !0,
          srcs: m,
          className: O,
          alt: c.name,
          onImageError: g,
        }),
      ],
    });
  }
  return (0, N.jsx)(`div`, { className: A });
}
function $(e, t, n = !1) {
  let { data: r } = x(e),
    { data: i } = b(e, n),
    a;
  r &&
    r.included_appids?.length == 1 &&
    !jt(i, t) &&
    r.item_type &&
    [1, 2].includes(r.item_type) &&
    (a = { appid: r.included_appids[0] });
  let { data: o } = x(a),
    { data: s } = b(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function jt(e, t) {
  if (!e) return !1;
  switch (t) {
    case `header`:
      return !!e.header;
    case `main`:
      return !!e.main_capsule;
    case `vertical`:
    case `library`:
      return !!e.hero_capsule || !!e.library_capsule;
    default:
      return c(t, `Unhandled imageType: ${t}`), !1;
  }
}
export {
  R as _,
  St as a,
  Y as c,
  ut as d,
  ft as f,
  z as g,
  Ae as h,
  X as i,
  pt as l,
  je as m,
  At as n,
  xt as o,
  ct as p,
  Z as r,
  J as s,
  Q as t,
  dt as u,
  I as v,
  P as y,
};
