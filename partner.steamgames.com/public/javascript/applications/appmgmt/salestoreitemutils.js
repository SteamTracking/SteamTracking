/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  A as t,
  At as n,
  C as r,
  S as i,
  U as a,
  W as o,
  en as s,
  j as c,
  sn as l,
  tn as u,
  vt as d,
  z as f,
} from "./chunk~de7f2df91c.js";
import { Pt as p, ct as m } from "./chunk~25a6634263.js";
import {
  Fn as h,
  Mr as g,
  Va as _,
  Yi as ee,
  Zi as v,
  Zr as y,
  f as te,
  ua as b,
} from "./chunk~1fa4b8f2ff.js";
import { S as ne, d as x, h as S, i as C, o as w } from "./chunk~0a99e05c44.js";
import {
  Bt as T,
  Cn as E,
  En as D,
  Ht as O,
  Mt as k,
  Pn as re,
  St as ie,
  Ut as A,
  Vt as ae,
  Wt as j,
  Xt as oe,
  Z as se,
  bn as ce,
  jt as le,
  ot as ue,
  qt as de,
  ut as fe,
  zt as pe,
} from "./chunk~6b8ddcaac8.js";
import "./chunk~44f252525d.js";
import { i as M } from "./chunk~8fb30ea08b.js";
import { t as me } from "./chunk~ede3e357a2.js";
import { r as he } from "./chunk~8681f5c764.js";
import { f as ge } from "./chunk~2201b8cb3d.js";
import { s as N } from "./chunk~8ceeb46076.js";
var P = l(n()),
  F = d(),
  I = `Og4Odc3VLI8-`;
function L(e, t, n, r) {
  P.useEffect(() => {
    let i = (i) => {
      i.key === e && (t(i), n && i.preventDefault(), r && i.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, i),
      () => document.removeEventListener(`keydown`, i)
    );
  }, [e, t, n, r]);
}
var _e = `oliNocjo3ok-`,
  ve = `x3qY8Eev7UU-`,
  ye = `_3lYhLNSBOpE-`,
  be = `tyYNnQMYYyw-`,
  xe = `-WD8g17w7iA-`;
function Se() {
  let [e, t] = P.useState(void 0),
    n = P.useCallback(() => t(void 0), []);
  return [
    t,
    (0, F.jsx)(he, {
      active: e !== void 0,
      children: (0, F.jsx)(Ce, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function Ce(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = P.useState(0),
    a = n?.length ?? 0,
    o = P.useCallback(() => {
      i(r == 0 ? a - 1 : r - 1);
    }, [r, a]),
    s = P.useCallback(() => {
      n && r + 1 >= a ? i(0) : i(r + 1);
    }, [r, n, a]);
  return (0, F.jsxs)(te, {
    title: b(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: _e,
    children: [
      (0, F.jsx)(we, {
        index: r,
        numElements: n?.length || 0,
        fnForward: s,
        fnBackwards: o,
        fnClose: t,
        bCircular: !0,
      }),
      (0, F.jsx)(`div`, {
        className: ve,
        children: (0, F.jsx)(`img`, { className: ye, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function we(e) {
  let {
    index: t,
    numElements: n,
    fnForward: r,
    fnBackwards: i,
    fnClose: a,
    bCircular: o,
  } = e;
  (L(`ArrowLeft`, () => i?.(), !0, !0),
    L(`Left`, () => i?.(), !0, !0),
    L(`ArrowRight`, () => r?.(), !0, !0),
    L(`Right`, () => r?.(), !0, !0),
    L(`Escape`, () => a && a(), !0, !0),
    L(`Esc`, () => a && a(), !0, !0));
  let s = n > 1;
  return (0, F.jsxs)(`div`, {
    className: be,
    children: [
      s &&
        (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(`button`, {
              type: `button`,
              className: c(
                `-WD8g17w7iA-`,
                t === 0 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": b(`#Carousel_Prev`),
              children: (0, F.jsx)(g, { angle: 270 }),
            }),
            (0, F.jsx)(`button`, {
              type: `button`,
              className: c(
                `-WD8g17w7iA-`,
                t === n - 1 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: r,
              "aria-label": b(`#Carousel_Next`),
              children: (0, F.jsx)(g, { angle: 90 }),
            }),
          ],
        }),
      (0, F.jsx)(`button`, {
        type: `button`,
        className: xe,
        onClick: a,
        "aria-label": b(`#Button_Close`),
        children: (0, F.jsx)(v, {}),
      }),
    ],
  });
}
var Te = `xq-I5249Blg-`,
  Ee = `_-8Ur6QivGZk-`,
  R = 1.3,
  De = 3,
  Oe = 256;
function z(e) {
  let [t, n] = (0, P.useState)(!1),
    [r, i] = (0, P.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    a = (0, P.useRef)(null),
    [o, s] = Se();
  return (
    (0, P.useEffect)(() => {
      r.naturalWidth > r.displayWidth * R &&
        r.naturalHeight > r.displayHeight * R &&
        r.naturalWidth > Oe &&
        r.naturalWidth / r.naturalHeight < De &&
        n(!0);
    }, [r]),
    t
      ? (0, F.jsxs)(`span`, {
          className: Te,
          children: [
            s,
            (0, F.jsx)(`span`, { className: Ee, children: (0, F.jsx)(y, {}) }),
            (0, F.jsx)(`img`, {
              ...e,
              className: c({ ...(e.className && { [e.className]: !0 }) }),
              onClick: (t) => {
                e.src && o([e.src]);
              },
            }),
          ],
        })
      : (0, F.jsx)(`img`, {
          ...e,
          ref: a,
          onLoad: (e) => {
            if (!e.currentTarget.closest(`a`) && !E()) {
              let {
                naturalWidth: t,
                naturalHeight: n,
                width: r,
                height: a,
              } = e.currentTarget;
              i({
                naturalWidth: t,
                naturalHeight: n,
                displayWidth: r,
                displayHeight: a,
              });
            }
          },
        })
  );
}
function B(e) {
  let {
      className: t,
      srcs: n,
      lazyLoad: r,
      width: i,
      height: a,
      alt: o,
      crossOrigin: s,
    } = e,
    [c, l] = P.useState(n.length),
    [u, d] = P.useState(0);
  P.useEffect(() => {
    c != n.length && (l(n.length), d(0));
  }, [c, n.length]);
  let f = P.useCallback(() => {
    (e.onImageError && e.onImageError(e.srcs[u]),
      u + 1 < e.srcs.length && d(u + 1));
  }, [u, e]);
  return n.length == 0
    ? null
    : (0, F.jsx)(`img`, {
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
function ke(e) {
  let [t, n] = P.useState(!1),
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
    ? (0, F.jsxs)(`div`, {
        className: I,
        children: [
          (0, F.jsx)(`p`, { children: b(`#Image_ErrorTitle`, i) }),
          (0, F.jsx)(`ul`, {
            children: (0, F.jsx)(`li`, { children: b(`#Image_Error_msg1`) }),
          }),
          (0, F.jsx)(`p`, { children: b(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, F.jsx)(z, {
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
function Ae(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = $(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, F.jsx)(At, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let l = ``;
  switch (n) {
    case `main`:
      l = de;
      break;
    default:
      l = O;
  }
  if (o === void 0 || !s)
    return (0, F.jsx)(`div`, { className: c(l, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let u = H(o, n === `header`);
  return (0, F.jsx)(`div`, {
    className: c(l, `CapsuleImageCtn`, i),
    children: (0, F.jsx)(B, {
      lazyLoad: !0,
      srcs: u,
      className: c(k),
      alt: s.name,
    }),
  });
}
var V = l(p(), 1);
function H(e, t) {
  let n = [];
  return (e && Me(n, e, t), n.filter((e) => !!e));
}
function je(e, t) {
  return {
    strStoreVerticalURL: D(e, `hero_capsule`),
    strLibraryVerticalURL: D(e, `library_capsule`),
  };
}
function Me(e, t, n) {
  let r = D(t, `header_2x`) ?? D(t, `header`),
    i = D(t, `main_capsule_2x`) ?? D(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var Ne = `K2BGbCx37Cg-`,
  Pe = `wnVw5QEjvtw-`,
  Fe = `-a-3HG4gESE-`,
  U = `-OQDE-IeSKo-`,
  Ie = `iVqIvGU08cQ-`,
  Le = `vO3l7X14-dI-`,
  Re = `n1QMIymiV0w-`,
  ze = `ebRw2SGSkSY-`,
  W = `qN5ejX3iSmI-`,
  G = `_7Xd-p6v3h-U-`,
  Be = `_6uN5TDmIPak-`,
  Ve = `_4UX-whX3nGs-`,
  He = `f0EapRMh-PI-`,
  Ue = `q4JwMxF0b-8-`,
  We = `otywAXtYosA-`;
function Ge(e) {
  let { id: t, ...n } = e,
    { data: r } = ne(t);
  return (0, F.jsx)(Ke, { ...n, platforms: r });
}
P.memo(function (e) {
  let { platforms: t } = e;
  if (!t) return null;
  let { windows: n, mac: r, steamos_linux: i, vr_support: a } = t;
  return (0, F.jsxs)(`span`, {
    className: Fe,
    children: [
      n && (0, F.jsx)(qe, {}),
      r && (0, F.jsx)(Je, {}),
      i && (0, F.jsx)(Ye, {}),
      a?.vrhmd && (0, F.jsx)(Xe, {}),
    ],
  });
});
var Ke = P.memo(function (e) {
  let { platforms: t, eHWCompat: n, size: r = `small` } = e,
    i;
  if (n == 0)
    return (
      s(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (n == 2) {
    let e = t?.steam_os_compat_category;
    if (e === void 0) return null;
    switch (e) {
      case 2:
        i = ot;
        break;
      case 1:
        i = K;
        break;
      case 0:
        i = q;
        break;
      default:
        return (u(e, `Unhandled steam os category: ${e}`), null);
    }
  } else {
    let e;
    if (
      ((e =
        n == 3
          ? t?.steam_machine_compat_category
          : n == 4
            ? t?.steam_frame_compat_category
            : t?.steam_deck_compat_category),
      e === void 0)
    )
      return null;
    switch (e) {
      case 3:
        i = it;
        break;
      case 2:
        i = at;
        break;
      case 1:
        i = K;
        break;
      case 0:
        i = q;
        break;
      default:
        return (u(e, `Unhandled deck compat category: ${e}`), null);
    }
  }
  return (0, F.jsxs)(`span`, {
    className: (0, V.default)(
      ze,
      r == `small` && void 0,
      r == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      n == 1 && (0, F.jsx)(tt, {}),
      n == 3 && (0, F.jsx)(nt, {}),
      n == 4 && (0, F.jsx)(rt, {}),
      (0, F.jsx)(i, {}),
    ],
  });
});
function qe() {
  return (0, F.jsx)(`span`, {
    className: (0, V.default)(U, Ie),
    title: _.Localize(`#Platform_Windows`),
    children: (0, F.jsx)(Ze, {}),
  });
}
function Je() {
  return (0, F.jsx)(`span`, {
    className: (0, V.default)(U, Re),
    title: _.Localize(`#Platform_Mac`),
    children: (0, F.jsx)(Qe, {}),
  });
}
function Ye() {
  return (0, F.jsx)(`span`, {
    className: (0, V.default)(U, Le),
    title: _.Localize(`#Platform_Linux`),
    children: (0, F.jsx)($e, {}),
  });
}
function Xe() {
  return (0, F.jsx)(`span`, {
    className: U,
    title: _.Localize(`#Platform_VR`),
    children: (0, F.jsx)(et, {}),
  });
}
function Ze() {
  return (0, F.jsxs)(`svg`, {
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
      (0, F.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, F.jsx)(`rect`, {
        x: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, F.jsx)(`rect`, {
        y: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, F.jsx)(`rect`, {
        x: `67.165`,
        y: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function Qe() {
  return (0, F.jsxs)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, F.jsx)(`path`, {
        d: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, F.jsx)(`path`, {
        d: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function $e() {
  return (0, F.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    x: `0px`,
    y: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        d: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        d: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        d: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function et() {
  return (0, F.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, F.jsx)(`path`, {
        d: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, F.jsx)(`path`, {
        d: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function tt() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, V.default)(W),
    children: (0, F.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function nt() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, V.default)(W),
    children: (0, F.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, F.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, F.jsx)(`path`, {
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
function rt() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, V.default)(W),
    children: (0, F.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, F.jsx)(`path`, {
          opacity: `0.84`,
          d: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, F.jsx)(`path`, {
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
function it() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Verified`),
    className: G,
    children: (0, F.jsx)(`svg`, {
      className: (0, V.default)(Be),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function at() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Playable`),
    className: G,
    children: (0, F.jsx)(`svg`, {
      className: (0, V.default)(Ve),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function K() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: G,
    children: (0, F.jsx)(`svg`, {
      className: (0, V.default)(He),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function q() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: G,
    children: (0, F.jsx)(`svg`, {
      className: (0, V.default)(Ue),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function ot() {
  return (0, F.jsx)(`span`, {
    title: _.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: G,
    children: (0, F.jsx)(`svg`, {
      className: (0, V.default)(We),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, F.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function st(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !f() && !t ? null : (0, F.jsx)(ct, { ...e });
}
function ct(e) {
  let { className: t, id: n } = e,
    [r, i] = ge(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = Pe),
    (0, F.jsx)(`div`, {
      className: c(Ne, o, t),
      children: (0, F.jsx)(Ge, { id: n, eHWCompat: a }),
    })
  );
}
function lt(e) {
  return (0, P.useMemo)(() => pt(e), [e?.id, e?.type]);
}
function ut(e, t) {
  return (0, P.useMemo)(() => mt(e, t), [e, t]);
}
function dt(e, t) {
  return (0, P.useMemo)(() => J(e, t), [e, t]);
}
function ft(e, t) {
  let n = `app`;
  return (
    t == 2 ? (n = `bundle`) : t == 1 && (n = `sub`),
    (0, P.useMemo)(() => J(e, n), [e, n])
  );
}
function pt(e) {
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
function J(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function mt(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
async function ht() {
  let t = e(`broadcast_available_for_page`, `application_config`);
  if (X(t)) {
    let e = new Set();
    return (
      t.filtered.forEach((t) => {
        t.appid && e.add(t.appid);
      }),
      Array.from(e)
    );
  }
  return [];
}
var Y = class {
  constructor() {
    i(this);
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
(t([r], Y.prototype, `title`, void 0),
  t([r], Y.prototype, `viewer_count`, void 0),
  t([r], Y.prototype, `gamedata_subtitle`, void 0),
  t([r], Y.prototype, `current_selection_priority`, void 0));
var gt = `primary`,
  _t = `featured`,
  vt = `default_featured`,
  yt = `general`,
  bt = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function xt(e) {
  switch (e) {
    case gt:
      return 3;
    case _t:
      return 2;
    case vt:
      return 1;
    case yt:
    default:
      return 0;
  }
}
function X(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function St() {
  return me(wt());
}
function Ct(e) {
  let { data: t } = St(),
    [n, r] = (0, P.useState)(!1),
    i = M(),
    a = C();
  return (
    (0, P.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(w(a, { appid: e }))),
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
function wt() {
  return {
    queryKey: Tt(),
    queryFn: async () => {
      let e = await ht();
      return new Set(e);
    },
  };
}
function Tt() {
  return [`BroadcastApps`];
}
var Et = `hRwhHwwKlgI-`;
function Z() {
  return (0, F.jsx)(`div`, {
    className: Et,
    children: b(`#home_page_live_broadcast`),
  });
}
function Q(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = re(),
    { data: o } = fe(),
    s = t.length > 0 && t.every((e) => i && i.has(e)),
    l = t.length > 0 && t.every((e) => o && o.has(e)),
    u = Ct(t),
    d = s && !n,
    f = l && !n,
    p = !n && r;
  return (0, F.jsxs)(`div`, {
    className: c(le, `CapsuleDecorators`),
    children: [
      d &&
        (0, F.jsxs)(`span`, {
          className: c(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, F.jsx)(`img`, {
              src: a(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: _.Localize(`#Sale_InLibrary`),
            }),
            _.Localize(`#Sale_InLibrary`),
          ],
        }),
      f &&
        (0, F.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, F.jsx)(ee, { className: `ppO76q5Y-Zg-` }),
            _.Localize(`#Sale_OnWishlist`),
          ],
        }),
      p && !d && !f && (0, F.jsx)(Dt, { appids: t }),
      u && (0, F.jsx)(Z, {}),
    ],
  });
}
function Dt(e) {
  let { appids: t } = e;
  return Ot(t)
    ? (0, F.jsx)(`span`, {
        className: c(ie, pe),
        children: _.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function Ot(e) {
  let [t, n] = (0, P.useState)(!1),
    r = M(),
    i = C();
  return (
    (0, P.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(w(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
    t
  );
}
function kt(e, t, n, r, i, a) {
  if (!n) return;
  if (!ue(e.item_type)) {
    s(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let o = N(`${se(e, r)}${i ? `?${i}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = m(e) || window;
      a ? a(e) : o.startsWith(`steam://`) || (t.location.href = h(o));
    },
    onOKActionDescription: _.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function At(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? oe : ``,
    { storeItemDefaultInfo: s, storeItemAsset: l } = $(t, `vertical`, r),
    [u, d] = P.useState(0);
  if (!s || !l) return (0, F.jsx)(`div`, { className: A });
  let { strStoreVerticalURL: f, strLibraryVerticalURL: p } = je(l, s);
  if (f && (!n || !p))
    return (0, F.jsxs)(`div`, {
      className: c(A, `HeroCapsuleImageContainer`),
      children: [
        (0, F.jsx)(`img`, { src: f, className: k, alt: s.name }),
        s.type == 4 &&
          (0, F.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${o.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (p)
    return (0, F.jsxs)(`div`, {
      className: c(j, ce, n ? ae : ``, a),
      children: [
        (0, F.jsx)(`div`, {
          className: T,
          style: { backgroundImage: `url(${p})` },
        }),
        (0, F.jsx)(`img`, { src: p, className: k, alt: s.name }),
      ],
    });
  let m = H(l, !0),
    h = m.length - 1,
    g = (e) => {
      let t = m.indexOf(e);
      t >= h && t < m.length - 1 && d(t + 1);
    };
  if (u < m.length) {
    let e = m[u];
    return (0, F.jsxs)(`div`, {
      className: c(j, a),
      children: [
        (0, F.jsx)(`div`, {
          className: T,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, F.jsx)(B, {
          lazyLoad: !0,
          srcs: m,
          className: k,
          alt: s.name,
          onImageError: g,
        }),
      ],
    });
  }
  return (0, F.jsx)(`div`, { className: A });
}
function $(e, t, n = !1) {
  let { data: r } = S(e),
    { data: i } = x(e, n),
    a = jt(r, i, t),
    { data: o } = S(a),
    { data: s } = x(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function jt(e, t, n) {
  if (
    e &&
    e.included_appids?.length == 1 &&
    !Mt(t, n) &&
    e.item_type &&
    [1, 2].includes(e.item_type)
  )
    return { appid: e.included_appids[0] };
}
function Mt(e, t) {
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
      return (u(t, `Unhandled imageType: ${t}`), !1);
  }
}
export {
  I as _,
  bt as a,
  ft as c,
  dt as d,
  st as f,
  z as g,
  B as h,
  xt as i,
  ut as l,
  ke as m,
  Q as n,
  Y as o,
  Ae as p,
  Z as r,
  X as s,
  kt as t,
  lt as u,
};
