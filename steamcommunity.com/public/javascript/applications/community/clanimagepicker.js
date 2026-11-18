/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./chunk~f025431ab0.js";
import {
  A as n,
  B as r,
  C as i,
  Ft as a,
  K as o,
  L as s,
  R as c,
  W as l,
  ot as u,
  w as d,
} from "./chunk~01cfc309bf.js";
import {
  Ao as f,
  Bn as p,
  Mo as m,
  Pn as h,
  Uo as g,
  Vr as _,
  Yi as v,
  Zo as y,
  bi as b,
  jo as x,
  yo as S,
  zo as C,
} from "./chunk~3f4314f3b4.js";
import { t as w } from "./chunk~eefd71512b.js";
import { i as T, n as E, r as D } from "./chunk~018ae802ee.js";
import { dt as O } from "./chunk~05a38bc848.js";
import { en as k, in as A, n as j, yt as M } from "./chunk~77ea210942.js";
import { G as N, K as P, k as ee } from "./chunk~21cdc464a1.js";
import { t as F } from "./chunk~2e61cac879.js";
import { a as te } from "./chunk~79ae1444d5.js";
import { f as I, i as L, t as ne } from "./chunk~ec644f97c6.js";
import {
  B as re,
  L as R,
  R as z,
  V as ie,
  _ as ae,
  c as oe,
  g as se,
  h as ce,
  i as le,
  l as ue,
  o as de,
  p as fe,
  r as pe,
  t as me,
  u as he,
  v as ge,
  z as _e,
} from "./chunk~91ae5e1167.js";
import "./chunk~739842ca30.js";
import { n as ve } from "./chunk~a7c5e71e12.js";
import {
  $i as ye,
  $o as be,
  Ap as xe,
  Eu as B,
  Gn as Se,
  Hs as Ce,
  Ji as V,
  Km as we,
  Kn as Te,
  Kt as Ee,
  Lr as De,
  Mi as Oe,
  Mp as ke,
  Nf as Ae,
  Ou as je,
  Pp as Me,
  Qd as Ne,
  Qh as Pe,
  Rr as Fe,
  Uf as H,
  Uh as Ie,
  Wc as Le,
  Wo as Re,
  Xf as ze,
  Zi as Be,
  Zm as Ve,
  Zo as He,
  _d as Ue,
  _u as We,
  ap as Ge,
  bd as Ke,
  bm as U,
  cd as qe,
  cf as Je,
  ds as Ye,
  ea as W,
  es as G,
  fn as Xe,
  hl as Ze,
  if as K,
  ig as Qe,
  ii as $e,
  jm as q,
  ku as et,
  lm as tt,
  nh as nt,
  nm as rt,
  qf as it,
  qi as J,
  rr as at,
  s as ot,
  sh as st,
  tr as ct,
  ts as lt,
  vi as ut,
  wf as dt,
  xm as ft,
  xs as pt,
  ys as mt,
} from "./main.js";
var Y = e(a(), 1),
  X = u(),
  ht = `KPyQrAYKerM-`,
  gt = `wGsVN7BCL-8-`,
  _t = `_3k6zW2BR0Ec-`,
  vt = `ALwt1eWVvf0-`,
  yt = `_630lLH8fjII-`,
  bt = `_6lXwKbKQRZM-`,
  xt = `O2ZRoYfc1Qk-`,
  St = `WVCDoL13yGg-`,
  Ct = `pBwTyvQh7iI-`,
  wt = `lWa9AGKkKhU-`,
  Tt = `_2w1L-tFibuk-`,
  Et = `FNsnxK3tYRI-`,
  Dt = `AYD-9JVfXTU-`,
  Ot = `R-OtVF8pTAw-`,
  kt = `XfQfXm4a0JE-`,
  At = `_5IGBtrxnWJ0-`,
  jt = `bVbljBZi-wU-`,
  Mt = `v2ki0uInhRU-`,
  Nt = `_7R6l0Of6MJ0-`,
  Pt = `mjoUDFuJ0D8-`,
  Ft = `_4cqzz9ahZPc-`,
  It = `_4MdgvcokN4Y-`,
  Lt = `oO24eF-LkHU-`,
  Rt = `_6X7TrhHGdHU-`,
  zt = `_6tosRWogfkw-`,
  Bt = `czSq3Y-Vo18-`,
  Vt = `geYaW-yNkbE-`,
  Ht = `lhECTe0HdME-`,
  Ut = `_27-voxUdjLY-`,
  Wt = `yTHSTjHKUiU-`;
function Gt(e) {
  let t = (0, Y.useRef)(null);
  (0, Y.useEffect)(() => {
    t.current?.showModal();
    let e = document.body.style.overflow;
    return (
      (document.body.style.overflow = `hidden`),
      () => {
        document.body.style.overflow = e;
      }
    );
  }, []);
  let n = ``;
  typeof e.imageTitle == `string` && (n = e.imageTitle);
  let r =
      typeof e.prevSrc == `string`
        ? (0, X.jsx)(`img`, { src: e.prevSrc, alt: `` })
        : e.prevSrc,
    i =
      typeof e.mainSrc == `string`
        ? (0, X.jsx)(`img`, { src: e.mainSrc, alt: n })
        : e.mainSrc,
    a =
      typeof e.nextSrc == `string`
        ? (0, X.jsx)(`img`, { src: e.nextSrc, alt: `` })
        : e.nextSrc,
    o = [Rt, ...(e.backgroundClassName ? [e.backgroundClassName] : [])];
  return (0, X.jsxs)(`dialog`, {
    ref: t,
    className: B(...o),
    onClose: (t) => e.onCloseRequest(t),
    onKeyDown: (t) => {
      t.key === `ArrowRight` && e.nextSrc
        ? e.onMoveNextRequest(t)
        : t.key === `ArrowLeft` && e.prevSrc && e.onMovePrevRequest(t);
    },
    children: [
      e.prevSrc &&
        (0, X.jsx)(`div`, {
          className: B(`_6tosRWogfkw-`, `_3pkZtcu2gT0-`),
          children: r,
        }),
      (0, X.jsx)(`div`, {
        className: B(zt, Bt),
        role: `presentation`,
        onClick: (t) => {
          t.target.nodeName !== `IMG` && e.onCloseRequest(t);
        },
        children: i,
      }),
      e.nextSrc &&
        (0, X.jsx)(`div`, {
          className: B(`_6tosRWogfkw-`, `_9o7P2rSt6LQ-`),
          children: a,
        }),
      (0, X.jsxs)(`div`, {
        className: Vt,
        children: [
          (0, X.jsx)(`span`, { className: Ht, children: e.imageTitle }),
          (0, X.jsxs)(`div`, {
            className: Ut,
            children: [
              e.toolbarButtons,
              (0, X.jsx)(`button`, {
                className: Wt,
                onClick: e.onCloseRequest,
                "aria-label": dt.Localize(`#Button_Close`),
              }),
            ],
          }),
        ],
      }),
      e.prevSrc &&
        (0, X.jsx)(`button`, {
          className: `wTPZkg9t8hE-`,
          onClick: e.onMovePrevRequest,
          "aria-label": dt.Localize(`#Carousel_Prev`),
        }),
      e.nextSrc &&
        (0, X.jsx)(`button`, {
          className: `M1P5xCXwbro-`,
          onClick: e.onMoveNextRequest,
          "aria-label": dt.Localize(`#Carousel_Next`),
        }),
    ],
  });
}
var Kt = 30;
function qt(e) {
  let {
      event: t,
      imageURLOverride: n,
      bShowAssociatedApp: r,
      langOverride: i,
      onClick: a,
      eEventRount: o,
      bHidePrices: s,
      nSummaryMaxLength: c,
    } = e,
    l = Ge(t.appid),
    u = I(),
    m = i || nt(tt.LANGUAGE),
    h = p(n === void 0 ? t : void 0, `capsule`, m, f.capsule_main) ?? n,
    g = p(n === void 0 ? t : void 0, `capsule`, m, f.full) ?? n,
    [v, b, x, S] = d(() => [
      t.GetNameWithFallback(m) || ``,
      t.GetCategoryAsString(),
      t.GetSummaryWithFallback(m, c),
      t.GetSubTitleWithLanguageFallback(m) || ``,
    ]),
    C = y(t.appid),
    { data: w } = xe(C),
    T = [];
  if ((h && T.push(h), g && g !== h && T.push(g), w)) {
    let e = F(w, `main_capsule`);
    e && T.push(e);
  }
  let [E, D] = (0, Y.useState)(h),
    k = (e, t, n) => {
      (n >= T.length && D(void 0), D(T[n + 1]));
    };
  if (!t) return (0, X.jsx)(`div`, { className: yt });
  let A = t ? t.GetStartTimeAndDateUnixSeconds() : 0,
    j = S;
  return (
    S && (S.length > Kt || v.length > Kt) && (j = void 0),
    (0, X.jsxs)(`div`, {
      className: vt,
      children: [
        (0, X.jsxs)(P, {
          className: B(yt, `OtherEvents_EventCtn`, Tt),
          eventModel: t,
          route: o || N.k_eView,
          onClick: a,
          preferredFocus: !0,
          children: [
            (0, X.jsxs)(`div`, {
              className: B(St, Ct),
              children: [
                (0, X.jsx)(`div`, { className: At, children: b }),
                (0, X.jsx)(`div`, { className: bt, children: x }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: jt,
              style: {
                backgroundColor: `#ffffff`,
                backgroundImage: E ? `url(${_(E)})` : `none`,
              },
            }),
            (0, X.jsxs)(`div`, {
              className: wt,
              children: [
                (0, X.jsx)(`div`, {
                  className: B(gt, l && `olyf0KJqJlE-`),
                  children: (0, X.jsx)(O, {
                    rgSources: T,
                    onIncrementalError: k,
                    className: kt,
                    alt: ``,
                  }),
                }),
                (0, X.jsxs)(`div`, {
                  className: Mt,
                  children: [
                    (0, X.jsx)(`div`, { className: Et, children: v }),
                    (0, X.jsx)(`div`, {
                      className: B(Dt, !j && `R-OtVF8pTAw-`),
                      children: j,
                    }),
                    (0, X.jsxs)(Ee, {
                      direction: `row`,
                      gap: `3`,
                      align: `center`,
                      children: [
                        (0, X.jsx)(`div`, {
                          className: B(Pt, xt),
                          children: b,
                        }),
                        A > u
                          ? (0, X.jsx)(`div`, {
                              className: B(Nt, `UpcomingCtn`),
                              children: (0, X.jsx)(L, {
                                bSingleLine: !0,
                                dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                              }),
                            })
                          : (0, X.jsx)(L, {
                              bSingleLine: !0,
                              bOnlyDate: !0,
                              dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                            }),
                      ],
                    }),
                    (0, X.jsx)(`div`, { className: B(bt, xt), children: x }),
                  ],
                }),
              ],
            }),
          ],
        }),
        !!(r && t.appid) && (0, X.jsx)(Jt, { appid: t.appid, bHidePrice: s }),
      ],
    })
  );
}
function Jt(e) {
  let { appid: t, bHidePrice: n } = e,
    r = y(t),
    { data: i } = Me(r),
    { data: a } = xe(r),
    { data: o } = ke(r),
    s = $e(),
    c = ze();
  if (!a || !i) return null;
  let l = o && o.hide_discount_pct_for_compliance;
  return (0, X.jsx)(te, {
    appID: t,
    children: (0, X.jsxs)(je, {
      className: B(Lt, `AppCapsuleCtn`),
      ...b(i, s, c, !1),
      children: [
        (0, X.jsx)(v, {
          id: r,
          hoverProps: { direction: `overlay`, style: { minWidth: `320px` } },
          children: (0, X.jsx)(`img`, {
            className: B(Ft, It),
            src: F(a, `small_capsule`),
            alt: i.name,
          }),
        }),
        !n &&
          !i.is_free &&
          (0, X.jsxs)(`span`, {
            className: B(`KTGJoQErGog-`, o?.discount_pct ? `PON8X0ze5G8-` : ``),
            children: [
              !!(o?.discount_pct && l) &&
                (0, X.jsx)(`div`, {
                  className: `NqZ9uMSo13A-`,
                  children: (0, X.jsx)(Le, {}),
                }),
              !(!o?.discount_pct || l) &&
                (0, X.jsx)(`span`, {
                  className: `kjiBcsaqA8o-`,
                  children: `-${o?.discount_pct}%`,
                }),
              o &&
                o.final_price_in_cents &&
                (0, X.jsx)(`span`, {
                  className: `OySWwOLLxFc-`,
                  children: o.formatted_final_price,
                }),
            ],
          }),
      ],
    }),
  });
}
var Yt = e(l()),
  Z = e(n()),
  Q = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({});
function Xt(e, t = !1) {
  return t
    ? `${g}/${e.clanAccountID}/${m.GetThumbHashAndExt(e)}`
    : `${g}/${e.clanAccountID}/${m.GetHashAndExt(e)}`;
}
function Zt(e, t, n) {
  let r = ``,
    i = Xt(t);
  if (n == 4)
    ((r = `[video webm=`),
      t.file_type == 5 && (r += i),
      (r += ` mp4=`),
      t.file_type == 4 && (r += i),
      (r += ` autoplay=true controls=false][/video]`));
  else if (n == 2) r = `[img]` + i + `[/img]`;
  else {
    let e = Xt(t, !0);
    r = `[url=` + i + `][img]` + e + `[/img][/url]`;
  }
  e.InsertText(r);
}
var Qt = `MBOGLVBsJno-`,
  $t = `W-3Dq3-54Lg-`,
  en = `quLSuE3pc1o-`,
  tn = `lnTEZ3RD-vc-`,
  nn = `kpa9FPV-AL0-`,
  rn = `n8uggtUd8lI-`,
  an = `PNoxLvZvnxs-`,
  on = `iGpmTErZND8-`,
  sn = `hAZUPjOGGxE-`,
  cn = `PThjtnwdrZw-`,
  ln = `KrfJsIy2eiY-`,
  un = `vp8ylQevKMI-`,
  dn = `zCecNDxgRwE-`,
  fn = `wxWVRBKbQ6Y-`,
  pn = `_1hQVgn9Glyw-`,
  mn = `OQ-ETv0yIhg-`,
  hn = `wVGLukava5E-`,
  gn = `crDJadcMi8A-`,
  _n = `AmP7BU2J8Pw-`;
function vn(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, Y.useRef)(null);
  return (0, X.jsx)(`div`, {
    className: _n,
    children: (0, X.jsx)(`input`, {
      ref: n,
      className: gn,
      type: `text`,
      placeholder: K(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var yn = Y.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, X.jsx)(bn, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, X.jsx)(
          Sn,
          {
            clanImage: e,
            searchStringHilight: t,
            imageInsertCallBack: r,
            showImageActions: a,
            fnOnOpenLocalizedImageGroup: o,
            OnImageClick: i,
          },
          e.imageid,
        ),
      ),
  });
});
function bn(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = z(t),
    a = n.trim().toLowerCase() || ``,
    o = R.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = q.InitFromClanID(t, U.EUNIVERSE),
      n = R.GetLoadState(e);
    return n && n.loaded
      ? (0, X.jsx)(
          `div`,
          {
            className: nn,
            children:
              a.length > 0
                ? K(`#ImagePicker_EmptySearch`)
                : K(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, X.jsx)(
            `div`,
            { className: rn, children: K(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, X.jsx)(
            `div`,
            { className: nn, children: K(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function xn(e) {
  let {
    clanAccountID: t,
    fileNameSearch: n,
    onImageSelected: r,
    selectedItem: i,
  } = e;
  return (0, X.jsx)(bn, {
    clanAccountID: t,
    fileNameSearch: n,
    children: (e) =>
      (0, X.jsx)(`div`, {
        className: cn,
        children: e.map((e) =>
          (0, X.jsx)(
            Tn,
            { clanImage: e, selected: e == i, onImageSelected: r },
            e.imageid,
          ),
        ),
      }),
  });
}
function Sn(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = Y.useState(!1),
    l = () => r(t, Q.k_eInsertFullImage),
    u = () => r(t, Q.k_eInsertVideo),
    d = () => r(t, Q.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        R.GetClanImageDragListener().forEach((e) => {
          e(q.InitFromClanID(t.clanAccountID, U.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        R.GetClanImageDragListener().forEach((e) => {
          e(q.InitFromClanID(t.clanAccountID, U.EUNIVERSE), !1);
        });
    },
    g = (e) => {
      W(
        (0, X.jsx)(J, {
          strTitle: K(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: v,
          onCancel: y,
          closeModal: y,
          children: (0, X.jsxs)(Y.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                children: K(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`div`, { children: K(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        qe(e) ?? window,
      );
    },
    _ = (e) => {
      (console.log(`ClanImageWrapper on delete error: ` + e),
        W(
          (0, X.jsx)(V, {
            strTitle: K(`#Error_FailureNotice`),
            strDescription: K(`#EventDisplay_DeleteEvent_Error`),
            children: (0, X.jsx)(`p`, { children: e }),
          }),
          window,
        ));
    },
    v = () => {
      c(!0);
      let e = q.InitFromClanID(t.clanAccountID, U.EUNIVERSE);
      R.DeleteClanImage(e, t)
        .then((e) => {
          (e.success != 1 && _(H(e).strErrorMsg), c(!1));
        })
        .catch((e) => {
          (_(H(e).strErrorMsg), c(!1));
        });
    },
    y = () => {},
    b = () => {
      i && i(t);
    },
    x = t.file_name ? t.file_name : ``,
    S = ce(n, x, String(t.imageid), an),
    C = m.BIsClanImageVideo(t),
    T = a && !s && !C,
    E = a && !s && !C,
    D = a && !s && C,
    O = a && !s && !C;
  return (0, X.jsx)(h, {
    placeholderHeight: `100vh`,
    className: Qt,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, X.jsxs)(`div`, {
      className: on,
      children: [
        (0, X.jsx)(`div`, {
          className: $t,
          style: { backgroundImage: C ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: b,
          children: (0, X.jsx)(wn, { clanImage: t, className: en }),
        }),
        T &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: K(`#ImagePicker_FullSize`),
          }),
        s && (0, X.jsx)(w, { size: `medium`, className: `_9dVXPw6twXc-` }),
        E &&
          (0, X.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: K(`#ImagePicker_Thumbnail`),
          }),
        O &&
          o &&
          (0, X.jsx)(Cn, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        D &&
          (0, X.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: K(`#ImagePicker_Video`),
          }),
        !s &&
          (0, X.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: g,
            children: (0, X.jsx)(`img`, {}),
          }),
        (0, X.jsx)(`div`, { className: tn, title: x, children: S }),
      ],
    }),
  });
}
function Cn(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = A(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, X.jsx)(`span`, {
        className: B(sn, Fe),
        onClick: () => n?.(t),
        children: `(VO) ` + K(`#ImagePicker_Localized`),
      });
}
function wn(e) {
  let { clanImage: t, className: n } = e;
  return m.BIsClanImageVideo(t)
    ? (0, X.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: n,
        children: (0, X.jsx)(`source`, {
          src: t.url,
          type: `video/` + (t.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function Tn(e) {
  let { clanImage: t, onImageSelected: n, selected: r } = e;
  return (0, X.jsxs)(`div`, {
    className: B(ln, r && `l3B7r5zxFCQ-`),
    onClick: () => n(t, !1),
    onDoubleClick: () => n(t, !0),
    title: t.file_name,
    children: [
      (0, X.jsx)(`div`, {
        className: un,
        children: m.BIsClanImageVideo(t)
          ? (0, X.jsx)(wn, { clanImage: t })
          : (0, X.jsx)(`img`, { src: t.url, loading: `lazy` }),
      }),
      (0, X.jsx)(`div`, { className: dn, children: t.file_name }),
    ],
  });
}
function En(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = Y.useCallback(
      (e, t) => {
        (r?.(e, t), n?.());
      },
      [r, n],
    ),
    [a, o] = Y.useState(``);
  return (0, X.jsxs)(J, {
    strTitle: K(`#ImagePicker_Images`),
    strDescription: K(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, X.jsx)(vn, { fnSetImageSearch: o }),
      (0, X.jsx)(yn, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function Dn(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, X.jsxs)(`div`, {
    className: mn,
    children: [
      (0, X.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, X.jsxs)(`span`, {
            children: [K(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, X.jsx)(`span`, {
            className: hn,
            children: K(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, X.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          W(
            (0, X.jsx)(En, { clanSteamID: t, OnClanImageSelected: n }),
            qe(e) ?? window,
          );
        },
      }),
    ],
  });
}
var On = class e {
  m_curLocImageGroup = null;
  m_curLocImageGroupType = null;
  constructor() {
    s(this);
  }
  static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
    let i =
        U.COMMUNITY_BASE_URL +
        `gid/` +
        t.ConvertTo64BitString() +
        `/hasclanimagefile`,
      a = { image_hash_and_ext: n, lang: `` + r };
    return (
      (await Z.default.get(i, { params: a, cancelToken: e && e.token })).data
        .success == 1
    );
  }
  SetPrimaryImageForImageGroup(e, t) {
    (this.m_curLocImageGroup &&
      this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
      t == this.m_curLocImageGroupType) ||
      ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
      (this.m_curLocImageGroupType = t),
      (this.m_curLocImageGroup.localized_images = Pe(
        this.m_curLocImageGroup.localized_images,
        32,
        null,
      )));
  }
  GetPrimaryImageForImageGroup() {
    return this.m_curLocImageGroup?.primaryImage;
  }
  ClearImageGroup() {
    ((this.m_curLocImageGroup = null), (this.m_curLocImageGroupType = null));
  }
  GetLocalizedImageGroupForEdit() {
    return this.m_curLocImageGroup;
  }
  GetLocalizedImageGroupForEditAsURL(e, t) {
    if (this.m_curLocImageGroup) {
      let n = this.m_curLocImageGroup.primaryImage;
      return this.m_curLocImageGroup.localized_images[t]
        ? this.m_curLocImageGroup.localized_images[t]
        : m.GenerateURLFromHashAndExt(e, m.GetHashAndExt(n) ?? ``);
    }
    return null;
  }
  async DetermineAvailableLocalizationForGroup(t) {
    if (!this.m_curLocImageGroup) return;
    let n = this.m_curLocImageGroup.primaryImage,
      i = q.InitFromClanID(n.clanAccountID, U.EUNIVERSE),
      a = m.GetHashAndExt(n) ?? ``,
      o = [];
    for (let n = 0; n < 32; ++n)
      o.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(t, i, a, n));
    let s = await Promise.all(o);
    r(() => {
      for (let e = 0; e < 32; ++e)
        s[e] &&
          (this.m_curLocImageGroup.localized_images[e] =
            m.GenerateURLFromHashAndExtAndLang(
              i,
              a,
              f.full,
              e,
              this.m_curLocImageGroupType ?? void 0,
            ));
    });
  }
  SetLocalizedImageGroupAtLang(e, t, n) {
    this.m_curLocImageGroup &&
      (this.m_curLocImageGroup.localized_images[e] = n
        ? m.GenerateURLFromHashAndExtAndLang(
            t,
            n,
            f.full,
            e,
            this.m_curLocImageGroupType ?? void 0,
          )
        : null);
  }
  AddLocalizeImageUploaded(e, t) {
    if (!this.m_curLocImageGroup) return;
    let n = this.m_curLocImageGroup.primaryImage;
    if (n?.image_hash == e) {
      let e = q.InitFromClanID(n.clanAccountID, U.EUNIVERSE),
        r = m.GetHashAndExt(n);
      r &&
        (this.m_curLocImageGroup.localized_images[t] =
          m.GenerateURLFromHashAndExtAndLang(
            e,
            r,
            f.full,
            t,
            this.m_curLocImageGroupType ?? void 0,
          ));
    }
  }
  GetAllLocalizedGroupImages() {
    return (
      (this.m_curLocImageGroup && this.m_curLocImageGroup.localized_images) ||
      []
    );
  }
  GetAllLocalizedGroupImageHashAndExts() {
    return this.GetAllLocalizedGroupImages()
      .filter(Boolean)
      .map((e) => m.GetHashAndExtFromURL(e));
  }
};
Ae([c], On.prototype, `m_curLocImageGroup`, void 0);
var kn = new On(),
  An = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`;
function jn(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function Mn(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = A(n ? e.GetAccountID() : 0);
  return n && jn(r, t);
}
function Nn(e) {
  let { clanSteamID: t, id: n } = e;
  return Mn(t, e.requireAdmin)
    ? (0, X.jsx)(`div`, {
        id: n,
        className: B(e.className, e.requireAdmin ? De : Fe),
        children: e.children,
      })
    : null;
}
var Pn = { editModel: null, bClanImagesV2: !1, setClanImagesV2: void 0 },
  Fn = Y.createContext(Pn);
function In(e) {
  return {
    fnSnapshot: () => {
      let t = e.GetChangeState();
      return () => e.RestoreChangeState(t);
    },
  };
}
function Ln(e) {
  let { children: t, editModel: n } = e,
    { bClanImagesV2: r, setClanImagesV2: i } = Bn(),
    a = Y.useMemo(() => n && In(n), [n]);
  return (0, X.jsx)(Fn.Provider, {
    value: { ...Pn, editModel: n, bClanImagesV2: r, setClanImagesV2: i },
    children: (0, X.jsx)(T.Provider, {
      value: a,
      children: (0, X.jsx)(k, { location: 1, children: t }),
    }),
  });
}
function Rn() {
  return Y.useContext(Fn);
}
function zn() {
  return Rn().editModel;
}
function Bn() {
  let e = `storeUseClanImagesV2`,
    [t, n] = Y.useState(() => !!localStorage.getItem(e));
  return {
    bClanImagesV2: t,
    setClanImagesV2: Y.useCallback((t) => {
      (t ? localStorage.setItem(e, `1`) : localStorage.removeItem(e), n(t));
    }, []),
  };
}
function Vn() {
  let e = Y.useContext(Fn);
  return {
    bClanImagesV2: e.bClanImagesV2 && !1,
    bClanImagesV2Allowed: !1,
    setClanImagesV2: e.setClanImagesV2,
  };
}
var Hn = `nicknames`;
function Un(e) {
  let t = rt(),
    { data: n, isLoading: r } = o({
      queryKey: [Hn],
      queryFn: async () => {
        let e = new Map();
        if (ft.logged_in) {
          let n = st.Init(ut),
            r = (await Oe.GetNicknameList(t, n)).Body().toObject();
          r?.nicknames &&
            r.nicknames.length > 0 &&
            r.nicknames.forEach((t) => {
              t.accountid && t.nickname && e.set(t.accountid, t.nickname);
            });
        }
        return e;
      },
    });
  return n ? n.get(e) : null;
}
async function Wn(e) {
  if (!e || e.length == 0) return [];
  let t = it() == `community` ? U.COMMUNITY_BASE_URL : U.STORE_BASE_URL;
  if (e.length == 1) {
    let n = { accountid: e[0], origin: self.origin },
      r = await Z.default.get(`${t}actions/ajaxgetavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${H(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let n = { accountids: e.join(`,`), origin: self.origin },
      r = await Z.default.get(`${t}actions/ajaxgetmultiavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${H(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new q(e.steamid).GetAccountID(), e),
      ),
      e.map((e) => i.get(e))
    );
  }
}
var Gn = new Yt.default((e) => Wn(e), { cache: !1 }),
  Kn = `avatarandpersonas`;
function qn(e) {
  return [Kn, e];
}
function Jn(e) {
  let { data: t, isLoading: n } = o({
    queryKey: qn(e),
    queryFn: () => Gn.load(e),
  });
  return [t, n];
}
var Yn = `w1edBej-iT4-`;
function Xn(e) {
  let {
      accountID: t,
      bHideWhenNotAvailable: n,
      bHideName: r,
      bLink: i = !0,
    } = e,
    [a] = Jn(t),
    o = Un(t),
    s = Y.useMemo(() => q.InitFromAccountID(t, U.EUNIVERSE), [t]),
    c = `${U.COMMUNITY_BASE_URL}profiles/${s.ConvertTo64BitString()}`;
  return (0, X.jsx)(X.Fragment, {
    children: a
      ? (0, X.jsxs)(i ? `a` : `span`, {
          href: i ? c : void 0,
          children: [
            (0, X.jsx)(`img`, {
              className: Yn,
              src: a.avatar_url,
              "data-miniprofile": `s` + s.ConvertTo64BitString(),
            }),
            !r &&
              (0, X.jsx)(`span`, {
                children: o ? `${o} (${a.persona_name})` : a.persona_name,
              }),
          ],
        })
      : (0, X.jsx)(X.Fragment, {
          children: !n && (0, X.jsx)(`span`, { children: t }),
        }),
  });
}
var Zn = t((e, t, n) => {
    ((n, r) => {
      typeof define == `function` && define.amd
        ? define([], r)
        : typeof t == `object` && e !== void 0
          ? (t.exports = r())
          : (n.Papa = r());
    })(n, function e() {
      var t =
          typeof self < `u`
            ? self
            : typeof window < `u`
              ? window
              : t === void 0
                ? {}
                : t,
        n,
        r = !t.document && !!t.postMessage,
        i = t.IS_PAPA_WORKER || !1,
        a = {},
        o = 0,
        s = {};
      function c(e) {
        ((this._handle = null),
          (this._finished = !1),
          (this._completed = !1),
          (this._halted = !1),
          (this._input = null),
          (this._baseIndex = 0),
          (this._partialLine = ``),
          (this._rowCount = 0),
          (this._start = 0),
          (this._nextChunk = null),
          (this.isFirstChunk = !0),
          (this._completeResults = { data: [], errors: [], meta: {} }),
          function (e) {
            var t = y(e);
            ((t.chunkSize = parseInt(t.chunkSize)),
              e.step || e.chunk || (t.chunkSize = null),
              (this._handle = new p(t)),
              ((this._handle.streamer = this)._config = t));
          }.call(this, e),
          (this.parseChunk = function (e, n) {
            var r = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < r) {
              let t = this._config.newline;
              ((t ||=
                ((a = this._config.quoteChar || `"`),
                this._handle.guessLineEndings(e, a))),
                (e = [...e.split(t).slice(r)].join(t)));
            }
            (this.isFirstChunk &&
              x(this._config.beforeFirstChunk) &&
              (a = this._config.beforeFirstChunk(e)) !== void 0 &&
              (e = a),
              (this.isFirstChunk = !1),
              (this._halted = !1));
            var r = this._partialLine + e,
              a =
                ((this._partialLine = ``),
                this._handle.parse(r, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
              if (
                ((e = a.meta.cursor),
                (r =
                  (this._finished ||
                    ((this._partialLine = r.substring(e - this._baseIndex)),
                    (this._baseIndex = e)),
                  a && a.data && (this._rowCount += a.data.length),
                  this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview))),
                i)
              )
                t.postMessage({
                  results: a,
                  workerId: s.WORKER_ID,
                  finished: r,
                });
              else if (x(this._config.chunk) && !n) {
                if (
                  (this._config.chunk(a, this._handle),
                  this._handle.paused() || this._handle.aborted())
                )
                  return void (this._halted = !0);
                this._completeResults = a = void 0;
              }
              return (
                this._config.step ||
                  this._config.chunk ||
                  ((this._completeResults.data =
                    this._completeResults.data.concat(a.data)),
                  (this._completeResults.errors =
                    this._completeResults.errors.concat(a.errors)),
                  (this._completeResults.meta = a.meta)),
                this._completed ||
                  !r ||
                  !x(this._config.complete) ||
                  (a && a.meta.aborted) ||
                  (this._config.complete(this._completeResults, this._input),
                  (this._completed = !0)),
                r || (a && a.meta.paused) || this._nextChunk(),
                a
              );
            }
            this._halted = !0;
          }),
          (this._sendError = function (e) {
            x(this._config.error)
              ? this._config.error(e)
              : i &&
                this._config.error &&
                t.postMessage({
                  workerId: s.WORKER_ID,
                  error: e,
                  finished: !1,
                });
          }));
      }
      function l(e) {
        var t;
        ((e ||= {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
          c.call(this, e),
          (this._nextChunk = r
            ? function () {
                (this._readChunk(), this._chunkLoaded());
              }
            : function () {
                this._readChunk();
              }),
          (this.stream = function (e) {
            ((this._input = e), this._nextChunk());
          }),
          (this._readChunk = function () {
            if (this._finished) this._chunkLoaded();
            else {
              if (
                ((t = new XMLHttpRequest()),
                this._config.withCredentials &&
                  (t.withCredentials = this._config.withCredentials),
                r ||
                  ((t.onload = b(this._chunkLoaded, this)),
                  (t.onerror = b(this._chunkError, this))),
                t.open(
                  this._config.downloadRequestBody ? `POST` : `GET`,
                  this._input,
                  !r,
                ),
                this._config.downloadRequestHeaders)
              ) {
                var e,
                  n = this._config.downloadRequestHeaders;
                for (e in n) t.setRequestHeader(e, n[e]);
              }
              var i;
              this._config.chunkSize &&
                ((i = this._start + this._config.chunkSize - 1),
                t.setRequestHeader(`Range`, `bytes=` + this._start + `-` + i));
              try {
                t.send(this._config.downloadRequestBody);
              } catch (e) {
                this._chunkError(e.message);
              }
              r && t.status === 0 && this._chunkError();
            }
          }),
          (this._chunkLoaded = function () {
            t.readyState === 4 &&
              (t.status < 200 || 400 <= t.status
                ? this._chunkError()
                : ((this._start +=
                    this._config.chunkSize || t.responseText.length),
                  (this._finished =
                    !this._config.chunkSize ||
                    this._start >=
                      ((e) =>
                        (e = e.getResponseHeader(`Content-Range`)) === null
                          ? -1
                          : parseInt(e.substring(e.lastIndexOf(`/`) + 1)))(t)),
                  this.parseChunk(t.responseText)));
          }),
          (this._chunkError = function (e) {
            ((e = t.statusText || e), this._sendError(Error(e)));
          }));
      }
      function u(e) {
        ((e ||= {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
          c.call(this, e));
        var t,
          n,
          r = typeof FileReader < `u`;
        ((this.stream = function (e) {
          ((this._input = e),
            (n = e.slice || e.webkitSlice || e.mozSlice),
            r
              ? (((t = new FileReader()).onload = b(this._chunkLoaded, this)),
                (t.onerror = b(this._chunkError, this)))
              : (t = new FileReaderSync()),
            this._nextChunk());
        }),
          (this._nextChunk = function () {
            this._finished ||
              (this._config.preview &&
                !(this._rowCount < this._config.preview)) ||
              this._readChunk();
          }),
          (this._readChunk = function () {
            var e = this._input,
              i =
                (this._config.chunkSize &&
                  ((i = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  )),
                  (e = n.call(e, this._start, i))),
                t.readAsText(e, this._config.encoding));
            r || this._chunkLoaded({ target: { result: i } });
          }),
          (this._chunkLoaded = function (e) {
            ((this._start += this._config.chunkSize),
              (this._finished =
                !this._config.chunkSize || this._start >= this._input.size),
              this.parseChunk(e.target.result));
          }),
          (this._chunkError = function () {
            this._sendError(t.error);
          }));
      }
      function d(e) {
        var t;
        (c.call(this, (e ||= {})),
          (this.stream = function (e) {
            return ((t = e), this._nextChunk());
          }),
          (this._nextChunk = function () {
            var e, n;
            if (!this._finished)
              return (
                (e = this._config.chunkSize),
                (t = e
                  ? ((n = t.substring(0, e)), t.substring(e))
                  : ((n = t), ``)),
                (this._finished = !t),
                this.parseChunk(n)
              );
          }));
      }
      function f(e) {
        c.call(this, (e ||= {}));
        var t = [],
          n = !0,
          r = !1;
        ((this.pause = function () {
          (c.prototype.pause.apply(this, arguments), this._input.pause());
        }),
          (this.resume = function () {
            (c.prototype.resume.apply(this, arguments), this._input.resume());
          }),
          (this.stream = function (e) {
            ((this._input = e),
              this._input.on(`data`, this._streamData),
              this._input.on(`end`, this._streamEnd),
              this._input.on(`error`, this._streamError));
          }),
          (this._checkIsFinished = function () {
            r && t.length === 1 && (this._finished = !0);
          }),
          (this._nextChunk = function () {
            (this._checkIsFinished(),
              t.length ? this.parseChunk(t.shift()) : (n = !0));
          }),
          (this._streamData = b(function (e) {
            try {
              (t.push(
                typeof e == `string` ? e : e.toString(this._config.encoding),
              ),
                n &&
                  ((n = !1),
                  this._checkIsFinished(),
                  this.parseChunk(t.shift())));
            } catch (e) {
              this._streamError(e);
            }
          }, this)),
          (this._streamError = b(function (e) {
            (this._streamCleanUp(), this._sendError(e));
          }, this)),
          (this._streamEnd = b(function () {
            (this._streamCleanUp(), (r = !0), this._streamData(``));
          }, this)),
          (this._streamCleanUp = b(function () {
            (this._input.removeListener(`data`, this._streamData),
              this._input.removeListener(`end`, this._streamEnd),
              this._input.removeListener(`error`, this._streamError));
          }, this)));
      }
      function p(e) {
        var t,
          n,
          r,
          i,
          a = 2 ** 53,
          o = -a,
          c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
          l =
            /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
          u = this,
          d = 0,
          f = 0,
          p = !1,
          g = !1,
          _ = [],
          v = { data: [], errors: [], meta: {} };
        function b(t) {
          return e.skipEmptyLines === `greedy`
            ? t.join(``).trim() === ``
            : t.length === 1 && t[0].length === 0;
        }
        function S() {
          if (
            (v &&
              r &&
              (w(
                `Delimiter`,
                `UndetectableDelimiter`,
                `Unable to auto-detect delimiting character; defaulted to '` +
                  s.DefaultDelimiter +
                  `'`,
              ),
              (r = !1)),
            e.skipEmptyLines &&
              (v.data = v.data.filter(function (e) {
                return !b(e);
              })),
            C())
          ) {
            if (v) {
              if (Array.isArray(v.data[0])) {
                for (var t = 0; C() && t < v.data.length; t++)
                  v.data[t].forEach(n);
                v.data.splice(0, 1);
              } else v.data.forEach(n);
            }
            function n(t, n) {
              (x(e.transformHeader) && (t = e.transformHeader(t, n)),
                _.push(t));
            }
          }
          function n(t, n) {
            for (var r = e.header ? {} : [], i = 0; i < t.length; i++) {
              var s = i,
                u = t[i],
                u = ((t, n) =>
                  ((t) => (
                    e.dynamicTypingFunction &&
                      e.dynamicTyping[t] === void 0 &&
                      (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                    !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                  ))(t)
                    ? n === `true` ||
                      n === `TRUE` ||
                      (n !== `false` &&
                        n !== `FALSE` &&
                        (((e) => {
                          if (
                            c.test(e) &&
                            ((e = parseFloat(e)), o < e && e < a)
                          )
                            return 1;
                        })(n)
                          ? parseFloat(n)
                          : l.test(n)
                            ? new Date(n)
                            : n === ``
                              ? null
                              : n))
                    : n)(
                  (s = e.header
                    ? i >= _.length
                      ? `__parsed_extra`
                      : _[i]
                    : s),
                  (u = e.transform ? e.transform(u, s) : u),
                );
              s === `__parsed_extra`
                ? ((r[s] = r[s] || []), r[s].push(u))
                : (r[s] = u);
            }
            return (
              e.header &&
                (i > _.length
                  ? w(
                      `FieldMismatch`,
                      `TooManyFields`,
                      `Too many fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        i,
                      f + n,
                    )
                  : i < _.length &&
                    w(
                      `FieldMismatch`,
                      `TooFewFields`,
                      `Too few fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        i,
                      f + n,
                    )),
              r
            );
          }
          var i;
          v &&
            (e.header || e.dynamicTyping || e.transform) &&
            ((i = 1),
            !v.data.length || Array.isArray(v.data[0])
              ? ((v.data = v.data.map(n)), (i = v.data.length))
              : (v.data = n(v.data, 0)),
            e.header && v.meta && (v.meta.fields = _),
            (f += i));
        }
        function C() {
          return e.header && _.length === 0;
        }
        function w(e, t, n, r) {
          ((e = { type: e, code: t, message: n }),
            r !== void 0 && (e.row = r),
            v.errors.push(e));
        }
        (x(e.step) &&
          ((i = e.step),
          (e.step = function (t) {
            ((v = t),
              C()
                ? S()
                : (S(),
                  v.data.length !== 0 &&
                    ((d += t.data.length),
                    e.preview && d > e.preview
                      ? n.abort()
                      : ((v.data = v.data[0]), i(v, u)))));
          })),
          (this.parse = function (i, a, o) {
            var c = e.quoteChar || `"`,
              c =
                ((e.newline ||= this.guessLineEndings(i, c)),
                (r = !1),
                e.delimiter
                  ? x(e.delimiter) &&
                    ((e.delimiter = e.delimiter(i)),
                    (v.meta.delimiter = e.delimiter))
                  : ((c = ((t, n, r, i, a) => {
                      var o, c, l, u;
                      a ||= [`,`, `	`, `|`, `;`, s.RECORD_SEP, s.UNIT_SEP];
                      for (var d = 0; d < a.length; d++) {
                        for (
                          var f,
                            p = a[d],
                            m = 0,
                            g = 0,
                            _ = 0,
                            v =
                              ((l = void 0),
                              new h({
                                comments: i,
                                delimiter: p,
                                newline: n,
                                preview: 10,
                              }).parse(t)),
                            y = 0;
                          y < v.data.length;
                          y++
                        )
                          r && b(v.data[y])
                            ? _++
                            : ((f = v.data[y].length),
                              (g += f),
                              l === void 0
                                ? (l = f)
                                : 0 < f && ((m += Math.abs(f - l)), (l = f)));
                        (0 < v.data.length && (g /= v.data.length - _),
                          (c === void 0 || m <= c) &&
                            (u === void 0 || u < g) &&
                            1.99 < g &&
                            ((c = m), (o = p), (u = g)));
                      }
                      return {
                        successful: !!(e.delimiter = o),
                        bestDelimiter: o,
                      };
                    })(
                      i,
                      e.newline,
                      e.skipEmptyLines,
                      e.comments,
                      e.delimitersToGuess,
                    )).successful
                      ? (e.delimiter = c.bestDelimiter)
                      : ((r = !0), (e.delimiter = s.DefaultDelimiter)),
                    (v.meta.delimiter = e.delimiter)),
                y(e));
            return (
              e.preview && e.header && c.preview++,
              (t = i),
              (n = new h(c)),
              (v = n.parse(t, a, o)),
              S(),
              p ? { meta: { paused: !0 } } : v || { meta: { paused: !1 } }
            );
          }),
          (this.paused = function () {
            return p;
          }),
          (this.pause = function () {
            ((p = !0),
              n.abort(),
              (t = x(e.chunk) ? `` : t.substring(n.getCharIndex())));
          }),
          (this.resume = function () {
            u.streamer._halted
              ? ((p = !1), u.streamer.parseChunk(t, !0))
              : setTimeout(u.resume, 3);
          }),
          (this.aborted = function () {
            return g;
          }),
          (this.abort = function () {
            ((g = !0),
              n.abort(),
              (v.meta.aborted = !0),
              x(e.complete) && e.complete(v),
              (t = ``));
          }),
          (this.guessLineEndings = function (e, t) {
            e = e.substring(0, 1048576);
            var t = RegExp(m(t) + `([^]*?)` + m(t), `gm`),
              n = (e = e.replace(t, ``)).split(`\r`),
              t = e.split(`
`),
              e = 1 < t.length && t[0].length < n[0].length;
            if (n.length === 1 || e)
              return `
`;
            for (var r = 0, i = 0; i < n.length; i++)
              n[i][0] ===
                `
` && r++;
            return r >= n.length / 2
              ? `\r
`
              : `\r`;
          }));
      }
      function m(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      }
      function h(e) {
        var t = (e ||= {}).delimiter,
          n = e.newline,
          r = e.comments,
          i = e.step,
          a = e.preview,
          o = e.fastMode,
          c = null,
          l = !1,
          u = e.quoteChar == null ? `"` : e.quoteChar,
          d = u;
        if (
          (e.escapeChar !== void 0 && (d = e.escapeChar),
          (typeof t != `string` || -1 < s.BAD_DELIMITERS.indexOf(t)) &&
            (t = `,`),
          r === t)
        )
          throw Error(`Comment character same as delimiter`);
        (!0 === r
          ? (r = `#`)
          : (typeof r != `string` || -1 < s.BAD_DELIMITERS.indexOf(r)) &&
            (r = !1),
          n !==
            `
` &&
            n !== `\r` &&
            n !==
              `\r
` &&
            (n = `
`));
        var f = 0,
          p = !1;
        ((this.parse = function (s, h, g) {
          if (typeof s != `string`) throw Error(`Input must be a string`);
          var _ = s.length,
            v = t.length,
            y = n.length,
            b = r.length,
            S = x(i),
            C = [],
            w = [],
            T = [],
            E = (f = 0);
          if (!s) return I();
          if (o || (!1 !== o && s.indexOf(u) === -1)) {
            for (var D = s.split(n), O = 0; O < D.length; O++) {
              if (((T = D[O]), (f += T.length), O !== D.length - 1))
                f += n.length;
              else if (g) return I();
              if (!r || T.substring(0, b) !== r) {
                if (S) {
                  if (((C = []), P(T.split(t)), L(), p)) return I();
                } else P(T.split(t));
                if (a && a <= O) return ((C = C.slice(0, a)), I(!0));
              }
            }
            return I();
          }
          for (
            var k = s.indexOf(t, f),
              A = s.indexOf(n, f),
              j = new RegExp(m(d) + m(u), `g`),
              M = s.indexOf(u, f);
            ;
          )
            if (s[f] === u)
              for (M = f, f++; ;) {
                if ((M = s.indexOf(u, M + 1)) === -1)
                  return (
                    g ||
                      w.push({
                        type: `Quotes`,
                        code: `MissingQuotes`,
                        message: `Quoted field unterminated`,
                        row: C.length,
                        index: f,
                      }),
                    F()
                  );
                if (M === _ - 1) return F(s.substring(f, M).replace(j, u));
                if (u === d && s[M + 1] === d) M++;
                else if (u === d || M === 0 || s[M - 1] !== d) {
                  k !== -1 && k < M + 1 && (k = s.indexOf(t, M + 1));
                  var N = ee(
                    (A = A !== -1 && A < M + 1 ? s.indexOf(n, M + 1) : A) === -1
                      ? k
                      : Math.min(k, A),
                  );
                  if (s.substr(M + 1 + N, v) === t) {
                    (T.push(s.substring(f, M).replace(j, u)),
                      s[(f = M + 1 + N + v)] !== u && (M = s.indexOf(u, f)),
                      (k = s.indexOf(t, f)),
                      (A = s.indexOf(n, f)));
                    break;
                  }
                  if (
                    ((N = ee(A)), s.substring(M + 1 + N, M + 1 + N + y) === n)
                  ) {
                    if (
                      (T.push(s.substring(f, M).replace(j, u)),
                      te(M + 1 + N + y),
                      (k = s.indexOf(t, f)),
                      (M = s.indexOf(u, f)),
                      S && (L(), p))
                    )
                      return I();
                    if (a && C.length >= a) return I(!0);
                    break;
                  }
                  (w.push({
                    type: `Quotes`,
                    code: `InvalidQuotes`,
                    message: `Trailing quote on quoted field is malformed`,
                    row: C.length,
                    index: f,
                  }),
                    M++);
                }
              }
            else if (r && T.length === 0 && s.substring(f, f + b) === r) {
              if (A === -1) return I();
              ((f = A + y), (A = s.indexOf(n, f)), (k = s.indexOf(t, f)));
            } else if (k !== -1 && (k < A || A === -1))
              (T.push(s.substring(f, k)), (f = k + v), (k = s.indexOf(t, f)));
            else {
              if (A === -1) break;
              if ((T.push(s.substring(f, A)), te(A + y), S && (L(), p)))
                return I();
              if (a && C.length >= a) return I(!0);
            }
          return F();
          function P(e) {
            (C.push(e), (E = f));
          }
          function ee(e) {
            var t = 0;
            return (t =
              e !== -1 && (e = s.substring(M + 1, e)) && e.trim() === ``
                ? e.length
                : t);
          }
          function F(e) {
            return (
              g ||
                (e === void 0 && (e = s.substring(f)),
                T.push(e),
                (f = _),
                P(T),
                S && L()),
              I()
            );
          }
          function te(e) {
            ((f = e), P(T), (T = []), (A = s.indexOf(n, f)));
          }
          function I(r) {
            if (e.header && !h && C.length && !l) {
              var i = C[0],
                a = Object.create(null),
                o = new Set(i);
              let t = !1;
              for (let n = 0; n < i.length; n++) {
                let r = i[n];
                if (
                  a[(r = x(e.transformHeader) ? e.transformHeader(r, n) : r)]
                ) {
                  let e,
                    s = a[r];
                  for (; (e = r + `_` + s), s++, o.has(e););
                  (o.add(e),
                    (i[n] = e),
                    a[r]++,
                    (t = !0),
                    ((c = c === null ? {} : c)[e] = r));
                } else ((a[r] = 1), (i[n] = r));
                o.add(r);
              }
              (t && console.warn(`Duplicate headers found and renamed.`),
                (l = !0));
            }
            return {
              data: C,
              errors: w,
              meta: {
                delimiter: t,
                linebreak: n,
                aborted: p,
                truncated: !!r,
                cursor: E + (h || 0),
                renamedHeaders: c,
              },
            };
          }
          function L() {
            (i(I()), (C = []), (w = []));
          }
        }),
          (this.abort = function () {
            p = !0;
          }),
          (this.getCharIndex = function () {
            return f;
          }));
      }
      function g(e) {
        var t = e.data,
          n = a[t.workerId],
          r = !1;
        if (t.error) n.userError(t.error, t.file);
        else if (t.results && t.results.data) {
          var i = {
            abort: function () {
              ((r = !0),
                _(t.workerId, { data: [], errors: [], meta: { aborted: !0 } }));
            },
            pause: v,
            resume: v,
          };
          if (x(n.userStep)) {
            for (
              var o = 0;
              o < t.results.data.length &&
              (n.userStep(
                {
                  data: t.results.data[o],
                  errors: t.results.errors,
                  meta: t.results.meta,
                },
                i,
              ),
              !r);
              o++
            );
            delete t.results;
          } else
            x(n.userChunk) &&
              (n.userChunk(t.results, i, t.file), delete t.results);
        }
        t.finished && !r && _(t.workerId, t.results);
      }
      function _(e, t) {
        var n = a[e];
        (x(n.userComplete) && n.userComplete(t), n.terminate(), delete a[e]);
      }
      function v() {
        throw Error(`Not implemented.`);
      }
      function y(e) {
        if (typeof e != `object` || !e) return e;
        var t,
          n = Array.isArray(e) ? [] : {};
        for (t in e) n[t] = y(e[t]);
        return n;
      }
      function b(e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }
      function x(e) {
        return typeof e == `function`;
      }
      return (
        (s.parse = function (n, r) {
          var i = (r ||= {}).dynamicTyping || !1;
          if (
            (x(i) && ((r.dynamicTypingFunction = i), (i = {})),
            (r.dynamicTyping = i),
            (r.transform = !!x(r.transform) && r.transform),
            !r.worker || !s.WORKERS_SUPPORTED)
          )
            return (
              (i = null),
              s.NODE_STREAM_INPUT,
              typeof n == `string`
                ? ((n = ((e) => (e.charCodeAt(0) === 65279 ? e.slice(1) : e))(
                    n,
                  )),
                  (i = new (r.download ? l : d)(r)))
                : !0 === n.readable && x(n.read) && x(n.on)
                  ? (i = new f(r))
                  : ((t.File && n instanceof File) || n instanceof Object) &&
                    (i = new u(r)),
              i.stream(n)
            );
          (((i = (() => {
            var n;
            return (
              !!s.WORKERS_SUPPORTED &&
              ((n = (() => {
                var n = t.URL || t.webkitURL || null,
                  r = e.toString();
                return (s.BLOB_URL ||= n.createObjectURL(
                  new Blob(
                    [
                      `var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,
                      `(`,
                      r,
                      `)();`,
                    ],
                    { type: `text/javascript` },
                  ),
                ));
              })()),
              ((n = new t.Worker(n)).onmessage = g),
              (n.id = o++),
              (a[n.id] = n))
            );
          })()).userStep = r.step),
            (i.userChunk = r.chunk),
            (i.userComplete = r.complete),
            (i.userError = r.error),
            (r.step = x(r.step)),
            (r.chunk = x(r.chunk)),
            (r.complete = x(r.complete)),
            (r.error = x(r.error)),
            delete r.worker,
            i.postMessage({ input: n, config: r, workerId: i.id }));
        }),
        (s.unparse = function (e, t) {
          var n = !1,
            r = !0,
            i = `,`,
            a = `\r
`,
            o = `"`,
            c = o + o,
            l = !1,
            u = null,
            d = !1,
            f =
              ((() => {
                if (typeof t == `object`) {
                  if (
                    (typeof t.delimiter != `string` ||
                      s.BAD_DELIMITERS.filter(function (e) {
                        return t.delimiter.indexOf(e) !== -1;
                      }).length ||
                      (i = t.delimiter),
                    (typeof t.quotes != `boolean` &&
                      typeof t.quotes != `function` &&
                      !Array.isArray(t.quotes)) ||
                      (n = t.quotes),
                    (typeof t.skipEmptyLines != `boolean` &&
                      typeof t.skipEmptyLines != `string`) ||
                      (l = t.skipEmptyLines),
                    typeof t.newline == `string` && (a = t.newline),
                    typeof t.quoteChar == `string` && (o = t.quoteChar),
                    typeof t.header == `boolean` && (r = t.header),
                    Array.isArray(t.columns))
                  ) {
                    if (t.columns.length === 0)
                      throw Error(`Option columns is empty`);
                    u = t.columns;
                  }
                  (t.escapeChar !== void 0 && (c = t.escapeChar + o),
                    t.escapeFormulae instanceof RegExp
                      ? (d = t.escapeFormulae)
                      : typeof t.escapeFormulae == `boolean` &&
                        t.escapeFormulae &&
                        (d = /^[=+\-@\t\r].*$/));
                }
              })(),
              new RegExp(m(o), `g`));
          if ((typeof e == `string` && (e = JSON.parse(e)), Array.isArray(e))) {
            if (!e.length || Array.isArray(e[0])) return p(null, e, l);
            if (typeof e[0] == `object`) return p(u || Object.keys(e[0]), e, l);
          } else if (typeof e == `object`)
            return (
              typeof e.data == `string` && (e.data = JSON.parse(e.data)),
              Array.isArray(e.data) &&
                (e.fields || (e.fields = (e.meta && e.meta.fields) || u),
                e.fields ||
                  (e.fields = Array.isArray(e.data[0])
                    ? e.fields
                    : typeof e.data[0] == `object`
                      ? Object.keys(e.data[0])
                      : []),
                Array.isArray(e.data[0]) ||
                  typeof e.data[0] == `object` ||
                  (e.data = [e.data])),
              p(e.fields || [], e.data || [], l)
            );
          throw Error(`Unable to serialize unrecognized input`);
          function p(e, t, n) {
            var o = ``,
              s =
                (typeof e == `string` && (e = JSON.parse(e)),
                typeof t == `string` && (t = JSON.parse(t)),
                Array.isArray(e) && 0 < e.length),
              c = !Array.isArray(t[0]);
            if (s && r) {
              for (var l = 0; l < e.length; l++)
                (0 < l && (o += i), (o += h(e[l], l)));
              0 < t.length && (o += a);
            }
            for (var u = 0; u < t.length; u++) {
              var d = (s ? e : t[u]).length,
                f = !1,
                p = s ? Object.keys(t[u]).length === 0 : t[u].length === 0;
              if (
                (n &&
                  !s &&
                  (f =
                    n === `greedy`
                      ? t[u].join(``).trim() === ``
                      : t[u].length === 1 && t[u][0].length === 0),
                n === `greedy` && s)
              ) {
                for (var m = [], g = 0; g < d; g++) {
                  var _ = c ? e[g] : g;
                  m.push(t[u][_]);
                }
                f = m.join(``).trim() === ``;
              }
              if (!f) {
                for (var v = 0; v < d; v++) {
                  0 < v && !p && (o += i);
                  var y = s && c ? e[v] : v;
                  o += h(t[u][y], v);
                }
                u < t.length - 1 && (!n || (0 < d && !p)) && (o += a);
              }
            }
            return o;
          }
          function h(e, t) {
            var r, a;
            return e == null
              ? ``
              : e.constructor === Date
                ? JSON.stringify(e).slice(1, 25)
                : ((a = !1),
                  d &&
                    typeof e == `string` &&
                    d.test(e) &&
                    ((e = `'` + e), (a = !0)),
                  (r = e.toString().replace(f, c)),
                  (a =
                    a ||
                    !0 === n ||
                    (typeof n == `function` && n(e, t)) ||
                    (Array.isArray(n) && n[t]) ||
                    ((e, t) => {
                      for (var n = 0; n < t.length; n++)
                        if (-1 < e.indexOf(t[n])) return !0;
                      return !1;
                    })(r, s.BAD_DELIMITERS) ||
                    -1 < r.indexOf(i) ||
                    r.charAt(0) === ` ` ||
                    r.charAt(r.length - 1) === ` `)
                    ? o + r + o
                    : r);
          }
        }),
        (s.RECORD_SEP = ``),
        (s.UNIT_SEP = ``),
        (s.BYTE_ORDER_MARK = `﻿`),
        (s.BAD_DELIMITERS = [
          `\r`,
          `
`,
          `"`,
          s.BYTE_ORDER_MARK,
        ]),
        (s.WORKERS_SUPPORTED = !r && !!t.Worker),
        (s.NODE_STREAM_INPUT = 1),
        (s.LocalChunkSize = 10485760),
        (s.RemoteChunkSize = 5242880),
        (s.DefaultDelimiter = `,`),
        (s.Parser = h),
        (s.ParserHandle = p),
        (s.NetworkStreamer = l),
        (s.FileStreamer = u),
        (s.StringStreamer = d),
        (s.ReadableStreamStreamer = f),
        t.jQuery &&
          ((n = t.jQuery).fn.parse = function (e) {
            var r = e.config || {},
              i = [];
            return (
              this.each(function (e) {
                if (
                  !(
                    n(this).prop(`tagName`).toUpperCase() === `INPUT` &&
                    n(this).attr(`type`).toLowerCase() === `file` &&
                    t.FileReader
                  ) ||
                  !this.files ||
                  this.files.length === 0
                )
                  return !0;
                for (var a = 0; a < this.files.length; a++)
                  i.push({
                    file: this.files[a],
                    inputElem: this,
                    instanceConfig: n.extend({}, r),
                  });
              }),
              a(),
              this
            );
            function a() {
              if (i.length === 0) x(e.complete) && e.complete();
              else {
                var t,
                  r,
                  a,
                  c,
                  l = i[0];
                if (x(e.before)) {
                  var u = e.before(l.file, l.inputElem);
                  if (typeof u == `object`) {
                    if (u.action === `abort`)
                      return (
                        (t = `AbortError`),
                        (r = l.file),
                        (a = l.inputElem),
                        (c = u.reason),
                        void (x(e.error) && e.error({ name: t }, r, a, c))
                      );
                    if (u.action === `skip`) return void o();
                    typeof u.config == `object` &&
                      (l.instanceConfig = n.extend(l.instanceConfig, u.config));
                  } else if (u === `skip`) return void o();
                }
                var d = l.instanceConfig.complete;
                ((l.instanceConfig.complete = function (e) {
                  (x(d) && d(e, l.file, l.inputElem), o());
                }),
                  s.parse(l.file, l.instanceConfig));
              }
            }
            function o() {
              (i.splice(0, 1), a());
            }
          }),
        i &&
          (t.onmessage = function (e) {
            ((e = e.data),
              s.WORKER_ID === void 0 && e && (s.WORKER_ID = e.workerId),
              typeof e.input == `string`
                ? t.postMessage({
                    workerId: s.WORKER_ID,
                    results: s.parse(e.input, e.config),
                    finished: !0,
                  })
                : ((t.File && e.input instanceof File) ||
                    e.input instanceof Object) &&
                  (e = s.parse(e.input, e.config)) &&
                  t.postMessage({
                    workerId: s.WORKER_ID,
                    results: e,
                    finished: !0,
                  }));
          }),
        ((l.prototype = Object.create(c.prototype)).constructor = l),
        ((u.prototype = Object.create(c.prototype)).constructor = u),
        ((d.prototype = Object.create(d.prototype)).constructor = d),
        ((f.prototype = Object.create(c.prototype)).constructor = f),
        s
      );
    });
  }),
  Qn = e(Zn()),
  $n = class e {
    static ParseCSVFile(e, t) {
      return new Promise((n, r) => {
        let i = {
          header: !0,
          skipEmptyLines: `greedy`,
          complete: n,
          error: (e) => r({ errors: [e] }),
          transformHeader: t,
        };
        Qn.default.parse(e, i);
      });
    }
    static ReadFile(e) {
      return new Promise((t, n) => {
        let r = new FileReader();
        ((r.onload = () => t(r.result ?? ``)), r.readAsText(e));
      });
    }
    static WriteFile(e, t) {
      let n = document.createElement(`a`);
      (navigator.msSaveBlob
        ? navigator.msSaveBlob(e, t)
        : (n.href = window.URL.createObjectURL(e)),
        n.setAttribute(`download`, t),
        n.click());
      try {
        document.removeChild(n);
      } catch {}
    }
    static WriteCSVToFile(t, n, r, i) {
      let a = i
          ? Qn.default.unparse({ fields: i, data: t }, { header: !0 })
          : Qn.default.unparse(t, { header: !0 }),
        o = r == 1 ? [`﻿` + a] : [a];
      e.WriteFile(new Blob(o, { type: `text/csv:charset=utf-8;` }), n);
    }
    static m_DummyValueForQuestionHack = 0;
    static WriteXMLToFile(t, n) {
      let r = () => (this.m_DummyValueForQuestionHack ? `never returned` : `?`),
        i =
          `<` +
          r() +
          `xml version="1.0" encoding="UTF-8" ` +
          r() +
          `>
`;
      ((i += new XMLSerializer().serializeToString(t)),
        e.WriteFile(
          new Blob([i], { type: `application/xml:charset=utf-8;` }),
          n,
        ));
    }
  };
function er(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = E(t),
    [s, c] = D(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, X.jsxs)(`div`, {
    ...a,
    className: B(o ? pn : fn, `DragAndDropContainer`),
    children: [
      n?.(),
      (0, X.jsx)(`div`, { children: i || K(`#ImagePicker_DragAndDrop`) }),
      (0, X.jsxs)(`div`, {
        className: mn,
        children: [
          s,
          (0, X.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, X.jsxs)(`span`, {
                children: [K(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, X.jsx)(`span`, {
                className: hn,
                children: K(`#selectimage_select_file`),
              }),
            ],
          }),
        ],
      }),
      r,
      e.children,
    ],
  });
}
var tr = `_5RINCHFuy0Y-`,
  nr = `GWe0Hc-fT2A-`,
  rr = `Wmeqy6nXS1Y-`,
  ir = `_698Kbr-wNSM-`,
  ar = `_4l0OY5qTFkk-`,
  or = `_4StKqHsfdjg-`,
  sr = `dp7SyRphVOo-`,
  cr = `OoUlU8pBBN4-`;
function lr(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = d(() => [t.GetUploadImages(), re.Get().GetCurEditLanguage()]),
    l = Y.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = oe(i?.name, c);
          try {
            let n = ue(a, c, o);
            ((r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                W(
                  (0, X.jsx)(V, {
                    strDescription: K(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                )));
          } catch (e) {
            let t = H(e);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              W(
                (0, X.jsx)(V, {
                  strDescription: K(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
        }
        return r;
      },
      [c, t, o],
    ),
    u = Y.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, X.jsx)(Y.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    d(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, X.jsxs)(er, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, X.jsx)(Y.Fragment, {
          children: (0, X.jsx)(`div`, {
            className: nr,
            children: s.map((e) =>
              (0, X.jsx)(
                fr,
                {
                  asset: e,
                  forceResolution: i,
                  fnOnRemove: () => t.DeleteUploadImage(e),
                  languageRealms: o,
                },
                `arttabupload_` + e.filename + `_` + e.uploadTime,
              ),
            ),
          }),
        }),
        (0, X.jsx)(ur, {
          imageUploader: t,
          fnOnUploadImageRequested: async () => {
            let e = await t.UploadAllImages(i);
            n?.(e);
          },
        }),
      ],
    })
  );
}
function ur(e) {
  let { imageUploader: t, fnOnUploadImageRequested: n } = e,
    [r] = d(() => [t.GetUploadImages()]),
    i = r.some((e) => e.status == `pending`),
    a = r.some(
      (e) =>
        e.status == `waiting` ||
        e.status == `uploading` ||
        e.status == `processing`,
    );
  return (0, X.jsxs)(`div`, {
    style: { display: `flex` },
    className: rr,
    children: [
      !!r.length &&
        (0, X.jsx)(G, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: K(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, X.jsx)(G, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: K(`#ImageUpload_Clear`),
        }),
    ],
  });
}
function dr(e, t, n, r, i) {
  let a = [];
  return (
    e.GetUploadImages().forEach((o) => {
      a.push(
        (0, X.jsx)(
          fr,
          {
            asset: o,
            forceResolution: n,
            forceFileType: r,
            fnOnRemove: () => e.DeleteUploadImage(o),
            languageRealms: i,
          },
          t + o.file + `_` + o.uploadTime,
        ),
      );
    }),
    a
  );
}
var fr = i(pr);
function pr(e) {
  let t = (t) => {
      if (t instanceof he) {
        t.ResetImage();
        let n = window,
          r = (0, X.jsx)(se, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        ye(r, n, `CropModal`, { strTitle: K(`#ImageUpload_CropModalTitle`) });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          t.fileType,
          JSON.stringify(t.GetCurrentImageOption()),
        );
    },
    { asset: n, fnOnRemove: r, languageRealms: i } = e,
    a = n.ImageOptions?.map((e) => {
      let t = e?.fnGetLabelText(),
        r;
      (e.bEnforceDimensions && (t += ` - ${e.width}x${e.height}`),
        e.bDeprecated &&
          ((t += ` ${K(`#ImageUpload_Deprecated`)}`),
          (r = K(`#ImageUpload_Deprecated_ttip`))));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = tr),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: K(`#ImageUpload_Pending`),
      waiting: K(`#ImageUpload_Waiting`),
      uploading: K(`#ImageUpload_Uploading`),
      processing: K(`#ImageUpload_Processing`),
      success: K(`#ImageUpload_SuccessCard`),
      failed: K(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? gr(Ne.GetLanguageListForRealms(i ?? [we.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = K(`#ImageUpload_NeedsCrop`))
      : c.error && (u = K(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, X.jsxs)(`div`, {
      className: or,
      children: [
        (0, X.jsx)(`div`, {
          className: ir,
          onClick: () => r(n),
          children: (0, X.jsx)(We, {}),
        }),
        (0, X.jsx)(mr, { asset: n }),
        s &&
          (0, X.jsx)(Re, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, X.jsx)(Re, {
            label: n.GetImageOptionLabel(),
            rgOptions: a,
            selectedOption: d,
            onChange: (e) => n.SetCurrentImageOption(e.data),
            disabled: !l,
          }),
        l &&
          c.warnings?.map((e, t) =>
            (0, X.jsx)(
              `div`,
              { className: `hb0m5mPiE2A-`, children: e },
              `warning${t}`,
            ),
          ),
        l &&
          c.messages?.map((e, t) =>
            (0, X.jsx)(
              `div`,
              { className: `CGM5a4V3nBU-`, children: e },
              `message${t}`,
            ),
          ),
        (0, X.jsxs)(`div`, {
          className: B({ [ct]: !0, [ar]: n.status == `failed` }),
          children: [
            u,
            fe(n.status) &&
              (0, X.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, X.jsx)(w, { size: `small` }),
              }),
          ],
        }),
        (0, X.jsx)(`div`, { className: ar, children: n.message }),
        l &&
          c.error &&
          (0, X.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, X.jsx)(Ye, {
            onClick: () => t(n),
            children: K(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function mr(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, X.jsxs)(`div`, {
        className: sr,
        onClick: (e) => W((0, X.jsx)(hr, { asset: t }), qe(e)),
        children: [
          (0, X.jsxs)(`span`, {
            className: cr,
            children: [t.width, ` x `, t.height],
          }),
          (0, X.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, X.jsx)(`source`, { src: t.dataUrl }),
          }),
        ],
      })
    : (0, X.jsx)(`div`, {
        className: sr,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, X.jsxs)(`span`, {
          className: cr,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function hr(e) {
  let { asset: t, closeModal: n } = e;
  return (0, X.jsx)(J, {
    bAlertDialog: !0,
    closeModal: n,
    bAllowFullSize: !0,
    children: (0, X.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, X.jsx)(`source`, { src: t.dataUrl }),
    }),
  });
}
function gr(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = K(`#Language_` + Ve(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
function _r(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = d(() => [re.Get().GetCurEditLanguage()]),
    c = de(t, n, r),
    l = e.uploaderOverride || c,
    [u, f] = Y.useState(!1),
    p = Y.useCallback(
      async (e, t) => {
        if (!u) {
          f(!0);
          try {
            let { language: t } = oe(e.file_name ?? ``, s),
              n = ue(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = H(e);
            (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              W(
                (0, X.jsx)(V, {
                  strDescription: K(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          f(!1);
        }
      },
      [u, l, s, o],
    ),
    m = Y.useMemo(
      () =>
        i
          ? [
              [
                (0, X.jsx)(
                  Dn,
                  { clanSteamID: t, OnClanImageSelected: p },
                  `clanartworkpicker`,
                ),
              ],
            ]
          : null,
      [p, i, t],
    ),
    h = (e) => {
      for (let n of e) {
        let e = n.uploadResult;
        if (e?.origimagehash) {
          let t = ue(e.language, s, o);
          kn.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = R.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = ue(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, X.jsx)(lr, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, X.jsx)(
            w,
            { position: `center`, size: `medium`, string: K(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var vr = `x0kXRDaNEsY-`,
  yr = `tggLx72V-Ck-`,
  br = `DVwf02s2GtI-`,
  xr = `zREkqfL42-U-`,
  Sr = `_7zBg1-UuADM-`,
  Cr = `TMQhyilc41c-`,
  wr = `t2inDYSKOto-`,
  Tr = `-FHzhwwvQvA-`,
  Er = `ZUy8iSsvilc-`,
  Dr = `XRZj1OeBHRk-`,
  Or = `_2lViMA09hm4-`,
  kr = `hvd5bQPy4pQ-`,
  Ar = `BTC1IyUleCA-`,
  jr = `lEWE2I7Rsj8-`,
  Mr = `_12sYjoMc9wE-`,
  Nr = `Y63LZFKwGXE-`,
  Pr = `tU9SaxlQ-9k-`,
  Fr = `Ymr3nNqG0aU-`,
  Ir = `c4t3b8o-GC8-`,
  Lr = `_8hs8sf5-YPQ-`,
  Rr = `wFigUYm29Qk-`,
  zr = `_8R-vFXPq55U-`,
  Br = `_6Wouy9o4gBY-`,
  Vr = `dWdTSpaG0Wo-`,
  Hr = `_0OoyXZePW7I-`,
  Ur = `w0qNWg-lQUo-`,
  Wr = `Hy2GxVyZVDA-`;
function Gr(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, Y.useState)(r),
    l = q.InitFromClanID(t.clanAccountID, U.EUNIVERSE),
    u = d(() => m.GenerateURLFromHashAndExt(l, m.GetHashAndExt(t) ?? ``));
  return (0, X.jsx)(J, {
    strTitle: K(`#selectimage_change_artwork_lang_title`),
    strDescription: K(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, X.jsxs)(`div`, {
      className: B(ct, yr),
      children: [
        (0, X.jsx)(`div`, {
          className: br,
          children: (0, X.jsx)(`img`, { className: vr, src: u }),
        }),
        (0, X.jsx)(me, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Kr(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var qr = `fHmTl9jH1EQ-`,
  Jr = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Yr(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  _e(t.GetAccountID());
  let a = Y.useMemo(() => {
      let e = [],
        t = Ne.GetLanguageListForRealms([
          we.k_ESteamRealmGlobal,
          we.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = Ve(r),
            i = K(`#Language_` + n);
          e.push({ lang: r, strLang: n, locLang: i, imgHash: t });
        }
      }
      return (
        (e = e.sort((e, t) =>
          e.locLang > t.locLang ? 1 : e.locLang < t.locLang ? -1 : 0,
        )),
        e
      );
    }, [n]),
    [o, s, c] = Ue();
  return (0, X.jsxs)(`div`, {
    className: Ar,
    children: [
      (0, X.jsx)(`div`, {
        className: jr,
        children: K(`#selectimage_uploaded_languages`),
      }),
      (0, X.jsx)(`div`, {
        className: Er,
        children: a.map((n) =>
          (0, X.jsx)(
            Xr,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, X.jsxs)(G, {
          className: `_1k0t2Q-C2OU-`,
          onClick: s,
          children: [
            K(`#Sale_RemoveAll`),
            (0, X.jsx)(mt, { tooltip: K(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, X.jsx)(Ce, {
        active: o,
        children: (0, X.jsx)(J, {
          strTitle: K(`#Dialog_AreYouSure`),
          strDescription: K(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function Xr(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = d(() => {
      let e = R.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = m.GenerateURLFromHashAndExtAndLang(
          t,
          m.GetHashAndExt(e),
          f.full,
          n.lang,
        ));
      let a = Sr;
      return (r != n.lang && (a = n.imgHash ? xr : Cr), [i, a]);
    });
  return (0, X.jsxs)(`div`, {
    id: n.strLang,
    className: wr,
    onClick: (e) => {
      let t = nt(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, X.jsx)(`div`, { className: c, children: n.locLang }),
      (0, X.jsxs)(`span`, {
        className: Tr,
        children: [
          !!s &&
            (0, X.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, X.jsx)(pt, {
                toolTipContent: K(`#selectimage_viewimage_ttip`),
                children: Ze(),
              }),
            }),
          !!a && (0, X.jsx)(Zr, { ...e }),
          !!o && (0, X.jsx)(Qr, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function Zr(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = Ue(),
    u = d(() => {
      let e = i(n.lang);
      return (
        Qe(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        R.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(pt, {
          toolTipContent: K(`#selectimage_reassign_image_ttip`),
          children: (0, X.jsx)(`img`, {
            "data-lang": n.lang,
            src: Jr,
            onClick: () => c(),
          }),
        }),
        (0, X.jsx)(et, {
          children: (0, X.jsx)(Ce, {
            active: s,
            children: (0, X.jsx)(Gr, {
              clanImage: u,
              lang: n.lang,
              fnOnArtworkLangChange: r,
              fnLangHasData: a,
              realms: o,
              closeModal: l,
            }),
          }),
        }),
      ],
    });
}
function Qr(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = Ue();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(pt, {
        toolTipContent: K(`#selectimage_delete_image_ttip`),
        children: (0, X.jsx)(`img`, {
          "data-lang": n.lang,
          src: An,
          onClick: i,
        }),
      }),
      (0, X.jsx)(et, {
        children: (0, X.jsx)(Ce, {
          active: r,
          children: (0, X.jsx)(J, {
            strTitle: K(`#selectimage_remove_image`),
            strDescription: K(
              `#selectimage_remove_details`,
              K(`#Language_` + Ve(n.lang)),
            ),
            onOK: () => {
              t(n.lang);
            },
            closeModal: a,
          }),
        }),
      }),
    ],
  });
}
var $r = `dGiOZKKuxfQ-`,
  ei = `h7-04bl97uc-`,
  ti = `MhIotXf5RFA-`,
  ni = `mSMnUkR7SZM-`,
  ri = `aWAciZoU3Zo-`,
  ii = `_8AV36Rh-Ve4-`,
  ai = `lxYifi3D8mU-`,
  oi = `MwNTpeRZ8FM-`,
  si = `RdR4GEnIG5Q-`,
  ci = `epGy6XXAGPQ-`;
function li(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = S(),
    c = Y.useCallback(
      (e) => {
        (e.preventDefault(), r && r(t));
      },
      [t, r],
    ),
    l = o || nt(U.LANGUAGE),
    [u, p, m] = d(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    h = `spotlight`,
    g = f.spotlight_main;
  (t.appid == 2434320 || U.EUNIVERSE == 2) &&
    ((h = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (g = f.full));
  let _ = ee(n === void 0 ? t : void 0, h, l, g) ?? (n === void 0 ? [] : [n]);
  a && _ && (_ = a(_));
  let v = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, X.jsx)(Y.Fragment, {
    children: (0, X.jsx)(`div`, {
      className: si,
      ref: e.containerRef,
      children: (0, X.jsxs)(je, {
        className: B(ci, $r),
        onActivate: c,
        focusable: !0,
        children: [
          (0, X.jsx)(`div`, {
            className: ai,
            children: (0, X.jsx)(O, {
              className: oi,
              rgSources: _,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: ei,
            children: [
              (0, X.jsx)(O, {
                className: ti,
                rgSources: _,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, X.jsx)(`div`, { className: ii }),
              (0, X.jsx)(`div`, {
                className: ri,
                children:
                  m &&
                  (0, X.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, X.jsx)(O, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
                        onIncrementalError: (e, t, n) => i && i(t),
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: p,
                          }),
                          (0, X.jsx)(`div`, {
                            className: `_9RjQ-a9Uc6o-`,
                            children: v,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, X.jsx)(`div`, { className: ni }),
        ],
      }),
    }),
  });
}
var ui = `JMbtQkd0K8E-`,
  di = `snS7KDov-nE-`,
  fi = `nvWdGclp6FI-`,
  pi = `xK18jc4N1cw-`,
  mi = `IQEedJq4bc8-`,
  hi = `fCimlPrmscM-`,
  gi = `e6k9OpDXG-Q-`,
  _i = `seprbrMSMhI-`,
  vi = `_4CNssq7QFLI-`,
  yi = `yzbYtn5vgZU-`,
  bi = `idlQxtNGVBg-`,
  xi = `mELVvJo8G3c-`,
  Si = `fF5tI3UN-YY-`;
function Ci(e) {
  let {
      langOverride: t,
      artworkType: n,
      fnOnLanguagePreviewChange: r,
      clanSteamID: i,
      eventModel: a,
      partnerEventStore: o,
      fnOnRemoveImage: s,
      fnOnArtworkLangChange: c,
      realms: l,
      fnLangHasData: u,
      fnGetImageHashAndExt: p,
    } = e,
    h = p(n, t),
    g = h ? m.GenerateURLFromHashAndExtAndLang(i, h, f.full, t) : ``,
    [_] = d(() => [Mi(n, p)]);
  return _ == 0
    ? (0, X.jsxs)(`div`, {
        className: br,
        children: [
          n === `capsule` &&
            (0, X.jsx)(Ei, {
              imgURL: U.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, X.jsx)(Di, {
              imgURL: U.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, X.jsx)(wi, { langOverride: t, artworkType: n, eventModel: a }),
          (0, X.jsx)(`div`, { children: K(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: br,
        children: [
          n === `capsule` &&
            (0, X.jsx)(Ei, { imgURL: g, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, X.jsx)(Di, {
              imgURL: g,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, X.jsx)(Oi, { imgURL: g, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, X.jsx)(Oi, { imgURL: g, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, X.jsx)(Oi, { imgURL: g, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, X.jsx)(ki, {
              imgURL: g,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, X.jsx)(Ai, { imgURL: g }),
          n === `sale_overlay` && (0, X.jsx)(ji, { imgURL: g }),
          x.includes(n) &&
            (0, X.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: kn.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
            }),
          n === `product_banner` && (0, X.jsx)($, { imgURL: g }),
          n === `product_mobile_banner` && (0, X.jsx)($, { imgURL: g }),
          n === `sale_logo` && (0, X.jsx)($, { imgURL: g }),
          n === `sale_cross_promo_logo` && (0, X.jsx)($, { imgURL: g }),
          n === `bestofyear_banner` && (0, X.jsx)($, { imgURL: g }),
          n === `bestofyear_banner_mobile` && (0, X.jsx)($, { imgURL: g }),
          (0, X.jsx)(Yr, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Kr(p(n, e) ?? ``),
          }),
        ],
      });
}
function wi(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = ae[t],
    a = Y.useMemo(
      () => Ti(K(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, X.jsx)(Oi, { lang: n, imgURL: a, event: r });
}
function Ti(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 780), (n.height = 200));
  let r = n.getContext(`2d`);
  for (let e = 0; e < 200; e += 20)
    for (let t = 0; t < 780; t += 20)
      ((r.fillStyle = (t / 20 + e / 20) % 2 == 0 ? `#a405e3ff` : `#000000`),
        r.fillRect(t, e, 20, 20));
  let i = r.createLinearGradient(0, 0, 780, 0);
  (i.addColorStop(0, `rgba(32,32,32,0.8)`),
    i.addColorStop(1, `rgba(60,60,60,0.8)`),
    (r.fillStyle = i),
    r.fillRect(0, 0, 780, 200));
  let a = r.createRadialGradient(390, 100, 0, 390, 100, 650);
  return (
    a.addColorStop(0, `rgba(0,0,0,0)`),
    a.addColorStop(1, `rgba(0,0,0,0.6)`),
    (r.fillStyle = a),
    r.fillRect(0, 0, 780, 200),
    (r.fillStyle = `#fff`),
    (r.font = `32px Arial`),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    r.fillText(e, 390, 80),
    t && ((r.font = `18px Arial`), r.fillText(t, 390, 125)),
    n.toDataURL(`image/png`)
  );
}
function Ei(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = ie();
  return (0, X.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, X.jsx)(qt, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function Di(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = ot(),
    [a, o, s, c, l] = d(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, X.jsx)(M, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: re.Get().GetCurEditLanguage(),
        })
      : K(`#selectimage_display_event_body`);
  return (0, X.jsxs)(`div`, {
    className: ui,
    children: [
      (0, X.jsx)(`div`, {
        className: di,
        children: K(`#selectimage_preview_title_1`),
      }),
      (0, X.jsx)(`div`, {
        className: B(fi, `DetailPageExample`),
        children: (0, X.jsxs)(`div`, {
          className: pi,
          children: [
            (0, X.jsx)(`div`, {
              className: mi,
              children: (0, X.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, X.jsx)(`div`, {
              className: hi,
              children: (0, X.jsxs)(`div`, {
                className: gi,
                children: [
                  (0, X.jsx)(`div`, {
                    className: _i,
                    children: a || K(`#selectimage_display_event_title`),
                  }),
                  (0, X.jsx)(`div`, {
                    className: vi,
                    children: s || K(`#selectimage_display_event_subtitle`),
                  }),
                  (0, X.jsx)(`div`, { className: yi, children: u }),
                ],
              }),
            }),
          ],
        }),
      }),
      c != 12 &&
        (0, X.jsxs)(Y.Fragment, {
          children: [
            (0, X.jsx)(`div`, { className: `y-gExtn9yi8-` }),
            (0, X.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: K(`#selectimage_preview_title_2`),
            }),
            (0, X.jsx)(`div`, {
              className: B(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, X.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, X.jsx)(
                  j,
                  {
                    event: n,
                    emoticonStore: i,
                    partnerEventStore: r,
                    headerClassnames: `editor`,
                    langOverride: t,
                    bDisableBroadcastPlayer: !0,
                  },
                  l,
                ),
              }),
            }),
          ],
        }),
    ],
  });
}
var Oi = (e) => {
    let [t] = ve(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, X.jsx)(`div`, {
      className: bi,
      children: (0, X.jsx)(li, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  ki = (e) => {
    let t = [
      (0, X.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, X.jsx)(`div`, { className: Lr }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, X.jsx)(`div`, { className: xi, children: t })
    );
  },
  Ai = (e) =>
    (0, X.jsx)(`div`, {
      className: Si,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  ji = (e) =>
    (0, X.jsx)(`div`, {
      className: Si,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  $ = (e) =>
    (0, X.jsx)(`div`, {
      className: Si,
      children: (0, X.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function Mi(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var Ni = `https://partner.steamgames.com/doc/store/localization#supported_languages`,
  Pi = (function (e) {
    return (
      (e[(e.k_None = 0)] = `k_None`),
      (e[(e.k_Suggested = 1)] = `k_Suggested`),
      (e[(e.k_Required = 2)] = `k_Required`),
      (e[(e.k_Requested = 3)] = `k_Requested`),
      e
    );
  })({});
function Fi(e) {
  let {
      artworkType: t,
      headerHint: n,
      appid: r,
      fnToggleMinimize: i,
      realms: a,
      eventModel: o,
      fnLangHasData: s,
      fnGetImageHashAndExt: c,
      fnSetImageURL: l,
      partnerEventStore: u,
    } = e,
    [f] = ve(r, { include_assets: !0 }),
    [p, m] = d(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, X.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: K(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: K(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, X.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: K(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: K(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  K(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: K(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  K(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              !!m &&
                (0, X.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, X.jsx)(`p`, {
                      children: K(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, X.jsx)(`p`, {
                      children: (0, X.jsx)(`a`, {
                        href: `${U.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: K(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: K(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  K(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: K(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  K(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`strong`, {
                children: K(`#selectimage_tip_design_title`),
              }),
              `: `,
              K(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, X.jsx)(X.Fragment, {
            children: (0, X.jsxs)(`p`, {
              children: [
                (0, X.jsx)(`strong`, {
                  children: K(`#selectimage_tip_usage_title`),
                }),
                `: `,
                K(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, X.jsx)(X.Fragment, {
              children: (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: K(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  K(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(`p`, {
                  children: K(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: Te,
                      children: K(`#selectimage_tip_required_title`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: K(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        K(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: K(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        K(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, X.jsx)(`p`, {
                      children: K(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsx)(`b`, {
                          children: K(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, X.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: K(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, X.jsx)(`br`, {}),
                  ],
                }))
              : t === `hero`
                ? f &&
                  (_ = (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`p`, {
                        children: K(`#selectimage_tip_hero_1`),
                      }),
                      !f.GetAssets()?.GetLibraryHeroURL() &&
                        (0, X.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: K(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : t === `localized_image_group` ||
                    t === `link_capsule` ||
                    t === `sale_section_title` ||
                    t === `schedule_track_art` ||
                    t === `localized_background_art`
                  ? (_ = (0, X.jsxs)(X.Fragment, {
                      children: [
                        (0, X.jsx)(`p`, {
                          children: K(`#ImagePickerLoc_Desc`),
                        }),
                        (0, X.jsx)(`p`, {
                          children: Je(
                            `#ImagePickerLoc_Files`,
                            (0, X.jsx)(`a`, {
                              href: Ni,
                              target: U.IN_CLIENT ? void 0 : `_blank`,
                              children: K(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : t === `product_banner`
                    ? (_ = (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: Se,
                            children: K(`#selectimage_tip_optional_title`),
                          }),
                          (0, X.jsxs)(`p`, {
                            children: [
                              (0, X.jsx)(`b`, {
                                children: K(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              K(`#selectimage_tip_sale_product_banner`),
                            ],
                          }),
                        ],
                      }))
                    : t === `product_mobile_banner` ||
                        t === `product_banner_override` ||
                        t === `product_mobile_banner_override`
                      ? (_ = (0, X.jsxs)(X.Fragment, {
                          children: [
                            (0, X.jsx)(`div`, {
                              className: Se,
                              children: K(`#selectimage_tip_optional_title`),
                            }),
                            (0, X.jsxs)(`p`, {
                              children: [
                                (0, X.jsx)(`b`, {
                                  children: K(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                K(`#selectimage_tip_sale_product_banner`),
                                t === `product_mobile_banner` &&
                                  (0, X.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      K(
                                        `#selectimage_tip_sale_product_banner_mobile`,
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }))
                      : t === `tab_bar_background`
                        ? (_ = (0, X.jsxs)(X.Fragment, {
                            children: [
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: K(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  K(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                children: [
                                  (0, X.jsx)(`strong`, {
                                    children: K(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  K(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : t === `sale_logo`
                          ? (_ = (0, X.jsxs)(X.Fragment, {
                              children: [
                                (0, X.jsx)(`div`, {
                                  className: Se,
                                  children: K(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, X.jsxs)(`p`, {
                                  children: [
                                    (0, X.jsx)(`b`, {
                                      children: K(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    K(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : t === `sale_cross_promo_logo`
                            ? (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: Se,
                                    children: K(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: K(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      K(
                                        `#selectimage_tip_sale_cross_promo_logo`,
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : (t === `bestofyear_banner` ||
                                t === `bestofyear_banner_mobile`) &&
                              (_ = (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: Te,
                                    children: K(
                                      `#selectimage_tip_required_title`,
                                    ),
                                  }),
                                  (0, X.jsxs)(`p`, {
                                    children: [
                                      (0, X.jsx)(`b`, {
                                        children: K(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      K(`#selectimage_tip_bestofyear`),
                                    ],
                                  }),
                                ],
                              }));
  let v = ae[e.artworkType].width,
    y = ae[e.artworkType].height;
  return (0, X.jsxs)(`div`, {
    id: e.id,
    className: Mr,
    children: [
      !!e.title &&
        (0, X.jsxs)(`div`, {
          className: B(`Y63LZFKwGXE-`, i && `tU9SaxlQ-9k-`),
          onClick: i,
          children: [
            e.title,
            (0, X.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, X.jsx)(ne, {
                bIsMinimized: !!e.bIsMinimized,
                fnToggleMinimize: i,
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsxs)(`div`, {
          className: B(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`b`, {
                    children: K(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  Je(`#selectimage_tip1`, ge(v), ge(y)),
                ],
              }),
            !!e.strWarning &&
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: e.strWarning,
                }),
              }),
            e.elEventArtworkExample,
            `\xA0`,
            (0, X.jsx)(`br`, {}),
            e.elAdditionalControls,
            !!e.fnRemoveAllArtwork &&
              (0, X.jsx)(G, {
                className: `_1k0t2Q-C2OU-`,
                onClick: (t) => {
                  W(
                    (0, X.jsx)(Ii, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    qe(t) ?? window,
                  );
                },
                children: K(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, X.jsx)(Li, {
          clanSteamID: e.clanSteamID,
          title: e.title ?? ``,
          eventModel: o,
          artworkType: e.artworkType,
          realms: a,
          appid: r,
          fnGetImageHashAndExt: c,
          fnSetImageURL: l,
          fnLangHasData: s,
          partnerEventStore: u,
        }),
    ],
  });
}
function Ii(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, X.jsx)(J, {
    strTitle: K(`#Sale_RemoveAll`),
    strDescription: K(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (t?.(), n?.());
    },
    onCancel: n,
  });
}
function Li(e) {
  let {
      artworkType: t,
      realms: n,
      clanSteamID: i,
      fnLangHasData: a,
      fnGetImageHashAndExt: o,
      fnSetImageURL: s,
      eventModel: c,
      appid: l,
      partnerEventStore: u,
    } = e,
    d = t === `localized_image_group`,
    [f, p] = Y.useState(ie()),
    [m, h] = Y.useState([]),
    g = Y.useCallback(
      (e, t, n) => {
        let r = [];
        (m.find((t) => t.clanImage.imageid == e.imageid)
          ? (r = m.map((n) =>
              n.clanImage.imageid == e.imageid ? { clanImage: e, lang: t } : n,
            ))
          : n && (r = m.concat({ clanImage: e, lang: t })),
          h(r));
      },
      [m],
    ),
    _ = Y.useCallback(
      (e, n, i) => {
        r(() => {
          (Kr(o(t, n) ?? ``) == e.image_hash && s(t, null, n),
            s(t, e, i),
            g(e, i, !1));
        });
      },
      [o, t, s, g],
    );
  return t === `hero`
    ? (0, X.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, X.jsx)(G, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${U.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: K(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(Ri, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: a,
          }),
          (0, X.jsx)(`div`, {
            children: (0, X.jsx)(`div`, {
              className: B(Dr, Or),
              children: (0, X.jsx)(Ci, {
                eventModel: c,
                clanSteamID: i,
                fnOnLanguagePreviewChange: (e) => {
                  e != f && p(e);
                },
                langOverride: f,
                fnOnArtworkLangChange: d ? null : _,
                artworkType: t,
                fnOnRemoveImage: d ? null : (e) => s(t, null, e),
                realms: n,
                fnLangHasData: a,
                fnGetImageHashAndExt: o,
                partnerEventStore: u,
              }),
            }),
          }),
        ],
      });
}
var Ri = class extends Y.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    W(
      (0, X.jsx)(Gr, {
        clanImage: e,
        lang: t,
        fnOnArtworkLangChange: n,
        fnLangHasData: i,
        realms: r,
      }),
      window,
    );
  }
  GenerateImageMappings() {
    let e = [],
      { list: t } = this.props;
    return (
      t.forEach((t) => {
        let { clanImage: n, lang: r } = t,
          i = K(`#Language_` + Ve(r));
        e.push(
          (0, X.jsxs)(
            `div`,
            {
              className: at,
              children: [
                (0, X.jsx)(`span`, {
                  children: K(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, X.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: K(`#ImageUpload_Success_Mapping_Change`),
                }),
              ],
            },
            `img_lang_` + t.clanImage.imageid + `_` + r,
          ),
        );
      }),
      e
    );
  }
  render() {
    let { list: e } = this.props;
    if (!e || e.length == 0) return (0, X.jsx)(`div`, {});
    let t = this.GenerateImageMappings();
    return (0, X.jsx)(`div`, { className: Wr, children: t });
  }
};
(Ae([Ie], Ri.prototype, `ShowLangChangeDialog`, null), (Ri = Ae([i], Ri)));
var zi = `_0K9D8c3MMwY-`,
  Bi = `b19PwxErdL4-`,
  Vi = `YHd3rTa2Hms-`,
  Hi = i((e) => {
    let {
        closeModal: t,
        appid: n,
        partnerEventStore: r,
        primaryLocalizedImage: i,
        clanSteamID: a,
        fnSetImageURL: o,
        rgRealmList: s,
        fnLangHasData: c,
        fnGetImageHash: l,
      } = e,
      [u, d] = Y.useState(),
      [f, p] = Y.useState(!0),
      [h, g] = Y.useState(),
      _ = Ke(() => Z.default.CancelToken.source());
    Y.useEffect(
      () => () => _.cancel(`LocalizedImageDialog component unmounted`),
      [_],
    );
    let v = Y.useCallback(async () => {
        try {
          let e = q.InitFromClanID(i.clanAccountID, U.EUNIVERSE),
            t = await m.AsyncGetImageResolution(
              e,
              i.image_hash,
              i.file_type,
              _,
              !1,
            );
          if (_.token.reason) return;
          if (t.success != 1 || !t.width || !t.height) {
            (console.error(
              `LocalizedImageDialog : failed to determine the primary image resolution. ` +
                (t.err_msg ?? ``),
            ),
              g({ strMsg: t.err_msg }));
            return;
          }
          (g(void 0), d(t));
        } catch (e) {
          let t = H(e);
          (console.error(`LocalizedImageDialog : ` + t.strErrorMsg, t),
            g({ strMsg: t.strErrorMsg }));
        }
      }, [_, i.clanAccountID, i.file_type, i.image_hash]),
      y = Y.useCallback(async () => {
        try {
          (await kn.DetermineAvailableLocalizationForGroup(_),
            _.token.reason || p(!1));
        } catch (e) {
          let t = H(e);
          console.error(`LocalizedImageDialog : ` + t.strErrorMsg, t);
        }
      }, [_]),
      b = Y.useCallback(() => v().then(y), [y, v]),
      x = Y.useCallback(() => {
        (g(void 0), b());
      }, [b]);
    Y.useEffect(() => {
      t && (kn.SetPrimaryImageForImageGroup(i, `localized_image_group`), b());
    }, [t, b, i]);
    let S = !f && u,
      T = u ? ` - ${u.width}x${u.height}` : ``,
      E = C(i.file_type).slice(1),
      D = u?.width && u?.height ? { width: u.width, height: u.height } : void 0,
      O = m.GenerateURLFromHashAndExt(a, m.GetHashAndExt(i));
    return (0, X.jsx)(Be, {
      bAllowFullSize: !0,
      title: K(`#ImagePickerLoc_Title`),
      onCancel: t,
      closeModal: t,
      children: (0, X.jsx)(He, {
        children: (0, X.jsxs)(be, {
          children: [
            (0, X.jsx)(`div`, {
              className: at,
              children: (0, X.jsxs)(`span`, {
                className: ct,
                children: [
                  (0, X.jsxs)(`div`, {
                    children: [
                      K(`#ImagePickerLoc_Default`),
                      (0, X.jsx)(mt, {
                        tooltip: K(`#ImagePickerLoc_Default_Hint`),
                      }),
                    ],
                  }),
                  (0, X.jsx)(`img`, { className: qr, src: O }),
                  (0, X.jsx)(`div`, { children: i.file_name + T + ` - ` + E }),
                ],
              }),
            }),
            !!h &&
              (0, X.jsxs)(`div`, {
                children: [
                  (0, X.jsx)(`div`, { children: K(`#Error_Message`) }),
                  !!h?.strMsg && (0, X.jsx)(`div`, { children: h.strMsg }),
                  (0, X.jsx)(`div`, {
                    className: `yYL-OrX9PtQ-`,
                    onClick: x,
                    children: K(`#Button_Retry`),
                  }),
                ],
              }),
            !S &&
              !h &&
              (0, X.jsx)(w, { position: `center`, string: K(`#Loading`) }),
            S &&
              (0, X.jsxs)(Y.Fragment, {
                children: [
                  (0, X.jsx)(_r, {
                    clanSteamID: a,
                    rgSupportArtwork: [],
                    localizedPrimaryImage: i,
                    forceResolution: D,
                    bAllowPreviousClanImageSelection: !0,
                    fnSetImageURL: o,
                    rgRealmList: s,
                  }),
                  (0, X.jsx)(`div`, {
                    className: `D-rfVSNga3g-`,
                    children: (0, X.jsx)(Fi, {
                      clanSteamID: a,
                      eventModel: void 0,
                      artworkType: `localized_image_group`,
                      title: K(`#ImagePickerLoc_Title`),
                      realms: s,
                      fnLangHasData: c,
                      appid: n,
                      fnGetImageHashAndExt: l,
                      fnSetImageURL: o,
                      partnerEventStore: r,
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
    });
  }),
  Ui = 1,
  Wi = i((e) => {
    let {
        clanSteamID: t,
        appid: n,
        imageInsertCallBack: r,
        partnerEventStore: i,
        bHideDragAndDrop: a,
        bShowLightBox: o,
        fnSetImageURL: s,
        rgRealmList: c,
        fnLangHasData: l,
        fnGetImageHash: u,
      } = e,
      [d, f] = Y.useState(``),
      [p, m] = Y.useState(0),
      [h, g] = Y.useState(),
      [_, v] = Y.useState(void 0),
      [y, b] = Y.useState(!R.BHasLoadedClanImages(t)),
      [x, S] = Y.useState(void 0),
      C = Ke(() => Z.default.CancelToken.source());
    Y.useEffect(
      () => () => C.cancel(`ClanImagePicker component unmounted`),
      [C],
    );
    let T = Ke(() => new Map()),
      [E, D] = (0, Y.useState)(null),
      { bClanImagesV2: O } = Vn(),
      k = t.GetAccountID(),
      A = Y.useCallback(() => R.LoadClanImages(t, !1, C.token), [C, k]),
      j = Y.useCallback(async () => {
        if (!T.has(t.GetAccountID()))
          try {
            (await A(), C.token.reason || b(!1));
          } catch (e) {
            let n = H(e);
            (console.error(
              `ClanImagePicker Failed: ` +
                n.strErrorMsg +
                ` errCode: ` +
                n.strErrorMsg,
            ),
              T.set(t.GetAccountID(), n.strErrorMsg),
              C.token.reason || (b(!1), S(n.strErrorMsg)));
          }
      }, [C, t, T, A]);
    Y.useEffect(() => {
      y && j();
    }, [j, y]);
    let M = Y.useCallback(() => {
      (b(!0), j());
    }, [j]);
    Y.useEffect(() => {
      M();
    }, [k, M]);
    let N = R.BHasLoadedClanImages(t);
    Y.useEffect(() => {
      N || M();
    }, [N, M]);
    let P = () => {
        (f(d), m(null));
      },
      ee = async (e) => {
        if (e && e.length > 0) {
          let n = O ? new le(t, null) : new pe(t, null);
          D(n);
          let r = !0,
            i = Array.from(e);
          for (let e = 0; r && e < i.length; e++) {
            let t = i[e];
            ((r = await n.AddImage(t, 0)),
              r ||
                (console.error(
                  `ClanImagePicker.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    t.name,
                ),
                W(
                  (0, X.jsx)(V, {
                    strDescription: K(`#ImagePicker_Error`, t.name),
                  }),
                  window,
                )));
          }
          return (r && (f(``), m(++Ui), n.UploadAllImages()), r);
        }
        return !1;
      },
      F = (e) => {
        if (e && o) {
          let n = R.GetFilteredClanImages(t, d.trim().toLowerCase()),
            r = n.findIndex((t, n, r) => e.imageid == t.imageid);
          r >= 0 && (g(r), v(n));
        }
      },
      te = () => {
        (g(void 0), v(void 0));
      },
      I = (e) => {
        if (h != null) {
          let t = _[h];
          (te(),
            requestAnimationFrame(() => {
              r(t, e);
            }));
        }
      },
      L = () => {
        I(Q.k_eInsertFullImage);
      },
      ne = () => {
        I(Q.k_eInsertThumbnail);
      },
      re = (e) => {
        W(
          (0, X.jsx)(Hi, {
            primaryLocalizedImage: e,
            appid: n,
            clanSteamID: t,
            fnSetImageURL: s,
            rgRealmList: c,
            fnLangHasData: l,
            fnGetImageHash: u,
            partnerEventStore: i,
          }),
          window,
        );
      };
    if (x)
      return (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`div`, { children: K(`#Error_Message`) }),
          (0, X.jsx)(`div`, { children: x }),
          (0, X.jsx)(`div`, {
            className: B(Xe),
            onClick: j,
            children: K(`#Button_Retry`),
          }),
        ],
      });
    if (y) return (0, X.jsx)(w, { position: `center`, string: K(`#Loading`) });
    let z = _;
    return (0, X.jsxs)(`div`, {
      className: B(zi),
      children: [
        (0, X.jsx)(vn, { fnSetImageSearch: (e) => f(e) }),
        (0, X.jsx)(`div`, {
          className: Bi,
          children: (0, X.jsx)(yn, {
            clanAccountID: t.GetAccountID(),
            fileNameSearch: d,
            imageInsertCallBack: r,
            fnOnExpandImage: F,
            InternalOpenLocalizeImageGroup: re,
          }),
        }),
        p > 0 &&
          (0, X.jsx)(
            Ki,
            { uploader: E, onDismiss: P },
            `clanimageuploaderview` + p,
          ),
        !a && (0, X.jsx)(er, { onDropFiles: ee }),
        h != null &&
          (0, X.jsx)(Gt, {
            mainSrc: z[h].url,
            imageTitle: z[h].file_name,
            nextSrc: h < z.length - 1 ? z[h + 1].url : void 0,
            prevSrc: h > 0 ? z[h - 1].url : void 0,
            onMoveNextRequest: () => g(h + 1),
            onMovePrevRequest: () => g(h - 1),
            onCloseRequest: te,
            toolbarButtons: [
              (0, X.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: L,
                  children: K(`#ImagePicker_FullSize`),
                },
                `fullsize`,
              ),
              (0, X.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: ne,
                  children: K(`#ImagePicker_Thumbnail`),
                },
                `thumbnail`,
              ),
            ],
          }),
        (0, X.jsx)(Gi, {}),
      ],
    });
  });
function Gi(e) {
  let { bClanImagesV2: t, bClanImagesV2Allowed: n, setClanImagesV2: r } = Vn();
  return (0, X.jsx)(X.Fragment, {
    children:
      n &&
      r &&
      (0, X.jsx)(lt, {
        className: `_0Ja-rgK4nrE-`,
        label: `New media conversion`,
        checked: t,
        onChange: (e) => r(e),
      }),
  });
}
function Ki(e) {
  let { uploader: t, onDismiss: n } = e,
    [r, i] = d(() => [t.BAllDone(), !t.BAllDone() && !t.BHasError()]),
    a = t.GetLastErrorFile();
  return (0, X.jsxs)(`div`, {
    className: Vi,
    children: [
      i &&
        (0, X.jsxs)(`div`, {
          className: `zUOcF2T681w-`,
          children: [
            (0, X.jsx)(`div`, {
              className: `_8o2e76PWsg4-`,
              children: K(
                `#ImageUpload_Desc`,
                t.GetCompletedFiles(),
                t.GetTotalFiles(),
              ),
            }),
            (0, X.jsx)(`button`, {
              className: `DialogButton`,
              onClick: () => {
                (t.CancelAllUploads(), n());
              },
              children: K(`#Button_Cancel`),
            }),
          ],
        }),
      t.BHasError() &&
        a &&
        (0, X.jsxs)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: [
            (0, X.jsx)(`div`, {
              className: `c62o1ZlOdck-`,
              children: K(
                `#ImageUpload_Error`,
                a.file.name,
                a.status,
                a.message,
              ),
            }),
            (0, X.jsx)(`button`, {
              className: void 0,
              onClick: n,
              children: K(`#Button_Cancel`),
            }),
            (0, X.jsx)(`button`, {
              className: void 0,
              onClick: () => t.RetryAllFailedUploads(),
              children: K(`#Button_Retry`),
            }),
          ],
        }),
      !!r &&
        (0, X.jsx)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: (0, X.jsx)(`div`, {
            className: `nulT7BBB8Xc-`,
            children: K(`#ImageUpload_Success`),
          }),
        }),
    ],
  });
}
export {
  Tt as $,
  Ln as A,
  Q as B,
  lr as C,
  Zn as D,
  $n as E,
  kn as F,
  Ft as G,
  Zt as H,
  Dn as I,
  St as J,
  Ot as K,
  xn as L,
  Nn as M,
  Mn as N,
  Xn as O,
  An as P,
  Ct as Q,
  vn as R,
  ur as S,
  er as T,
  Jt as U,
  Xt as V,
  qt as W,
  At as X,
  bt as Y,
  Pt as Z,
  Dr as _,
  Yr as a,
  kt as at,
  _r as b,
  Rr as c,
  Mt as ct,
  zr as d,
  Nt as dt,
  _t as et,
  Vr as f,
  Fr as g,
  Ir as h,
  Fi as i,
  yt as it,
  zn as j,
  In as k,
  Hr as l,
  Et as lt,
  Br as m,
  Hi as n,
  jt as nt,
  Kr as o,
  gt as ot,
  Pr as p,
  vt as q,
  Pi as r,
  wt as rt,
  Mr as s,
  Dt as st,
  Wi as t,
  ht as tt,
  Ur as u,
  xt as ut,
  kr as v,
  nr as w,
  dr as x,
  Nr as y,
  hn as z,
};
