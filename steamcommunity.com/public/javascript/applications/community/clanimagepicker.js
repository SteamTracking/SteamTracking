/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./rolldown-runtime.js";
import {
  A as n,
  B as r,
  C as i,
  K as a,
  L as o,
  Pt as s,
  R as c,
  W as l,
  ot as u,
  w as d,
} from "./libraries.js";
import {
  $r as f,
  Ao as p,
  Di as m,
  Qa as h,
  So as g,
  bn as _,
  br as v,
  do as y,
  lo as b,
  mn as x,
  uo as S,
  vo as C,
} from "./vodquery.js";
import { t as w } from "./throbber.js";
import { a as T, i as E, r as D } from "./filehandling.js";
import { dt as O } from "./emoticonbutton.js";
import { n as k, on as A, un as j, yt as M } from "./apppartnereventspage.js";
import { G as N, W as P, k as ee } from "./carouselarrows.js";
import { t as F } from "./storeassets.js";
import { a as I } from "./rewarditemdisplay.js";
import { l as L, t as R } from "./localdateandtime.js";
import {
  B as te,
  L as z,
  R as ne,
  V as B,
  _ as re,
  c as ie,
  g as ae,
  h as oe,
  i as se,
  l as ce,
  o as le,
  p as ue,
  r as de,
  t as fe,
  u as pe,
  v as me,
  z as he,
} from "./languagepicker.js";
import "./partnereventdialog.module.js";
import { n as ge } from "./storeitemhooks.js";
import {
  Bf as _e,
  Cp as ve,
  Cu as ye,
  Ef as be,
  Gd as xe,
  Hm as Se,
  If as V,
  Jc as Ce,
  Jo as we,
  Jt as Te,
  Kn as Ee,
  Ko as De,
  Lm as Oe,
  Ls as ke,
  Ni as Ae,
  Ph as je,
  Qf as Me,
  Qm as Ne,
  Rr as Pe,
  Sm as H,
  Tp as Fe,
  Uf as Ie,
  Uh as Le,
  Ui as U,
  Wi as W,
  Xi as G,
  Xo as Re,
  Yh as ze,
  Yi as Be,
  Yo as K,
  Zd as q,
  _f as Ve,
  ai as He,
  dm as J,
  em as Ue,
  fm as We,
  fu as Ge,
  gs as Ke,
  ir as qe,
  mn as Je,
  ms as Ye,
  nl as Xe,
  nr as Ze,
  os as Qe,
  pd as $e,
  qi as et,
  qm as tt,
  qn as nt,
  qp as rt,
  s as it,
  td as at,
  tf as ot,
  ud as st,
  ul as ct,
  wu as lt,
  xp as ut,
  xu as Y,
  yi as dt,
  zc as ft,
  zo as pt,
  zr as mt,
} from "./main.js";
var X = e(s(), 1),
  Z = u(),
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
  Dt = `XfQfXm4a0JE-`,
  Ot = `_5IGBtrxnWJ0-`,
  kt = `bVbljBZi-wU-`,
  At = `v2ki0uInhRU-`,
  jt = `_7R6l0Of6MJ0-`,
  Mt = `mjoUDFuJ0D8-`,
  Nt = `_4cqzz9ahZPc-`,
  Pt = `_4MdgvcokN4Y-`,
  Ft = `oO24eF-LkHU-`,
  It = `_6X7TrhHGdHU-`,
  Lt = `_6tosRWogfkw-`,
  Rt = `czSq3Y-Vo18-`,
  zt = `geYaW-yNkbE-`,
  Bt = `lhECTe0HdME-`,
  Vt = `_27-voxUdjLY-`,
  Ht = `yTHSTjHKUiU-`;
function Ut(e) {
  let t = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
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
        ? (0, Z.jsx)(`img`, { src: e.prevSrc, alt: `` })
        : e.prevSrc,
    i =
      typeof e.mainSrc == `string`
        ? (0, Z.jsx)(`img`, { src: e.mainSrc, alt: n })
        : e.mainSrc,
    a =
      typeof e.nextSrc == `string`
        ? (0, Z.jsx)(`img`, { src: e.nextSrc, alt: `` })
        : e.nextSrc,
    o = [It, ...(e.backgroundClassName ? [e.backgroundClassName] : [])];
  return (0, Z.jsxs)(`dialog`, {
    ref: t,
    className: Y(...o),
    onClose: (t) => e.onCloseRequest(t),
    onKeyDown: (t) => {
      t.key === `ArrowRight` && e.nextSrc
        ? e.onMoveNextRequest(t)
        : t.key === `ArrowLeft` && e.prevSrc && e.onMovePrevRequest(t);
    },
    children: [
      e.prevSrc &&
        (0, Z.jsx)(`div`, {
          className: Y(`_6tosRWogfkw-`, `_3pkZtcu2gT0-`),
          children: r,
        }),
      (0, Z.jsx)(`div`, {
        className: Y(Lt, Rt),
        role: `presentation`,
        onClick: (t) => {
          t.target.nodeName !== `IMG` && e.onCloseRequest(t);
        },
        children: i,
      }),
      e.nextSrc &&
        (0, Z.jsx)(`div`, {
          className: Y(`_6tosRWogfkw-`, `_9o7P2rSt6LQ-`),
          children: a,
        }),
      (0, Z.jsxs)(`div`, {
        className: zt,
        children: [
          (0, Z.jsx)(`span`, { className: Bt, children: e.imageTitle }),
          (0, Z.jsxs)(`div`, {
            className: Vt,
            children: [
              e.toolbarButtons,
              (0, Z.jsx)(`button`, {
                className: Ht,
                onClick: e.onCloseRequest,
                "aria-label": Ve.Localize(`#Button_Close`),
              }),
            ],
          }),
        ],
      }),
      e.prevSrc &&
        (0, Z.jsx)(`button`, {
          className: `wTPZkg9t8hE-`,
          onClick: e.onMovePrevRequest,
          "aria-label": Ve.Localize(`#Carousel_Prev`),
        }),
      e.nextSrc &&
        (0, Z.jsx)(`button`, {
          className: `M1P5xCXwbro-`,
          onClick: e.onMoveNextRequest,
          "aria-label": Ve.Localize(`#Carousel_Next`),
        }),
    ],
  });
}
var Wt = 30;
function Gt(e) {
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
    l = Me(t.appid),
    u = L(),
    f = i || tt(Ue.LANGUAGE),
    m = _(n === void 0 ? t : void 0, `capsule`, f, b.capsule_main) ?? n,
    h = _(n === void 0 ? t : void 0, `capsule`, f, b.full) ?? n,
    [g, y, x, S] = d(() => [
      t.GetNameWithFallback(f) || ``,
      t.GetCategoryAsString(),
      t.GetSummaryWithFallback(f, c),
      t.GetSubTitleWithLanguageFallback(f) || ``,
    ]),
    C = p(t.appid),
    { data: w } = ut(C),
    T = [];
  if ((m && T.push(m), h && h !== m && T.push(h), w)) {
    let e = F(w, `main_capsule`);
    e && T.push(e);
  }
  let [E, D] = (0, X.useState)(m),
    k = (e, t, n) => {
      n >= T.length && D(void 0), D(T[n + 1]);
    };
  if (!t) return (0, Z.jsx)(`div`, { className: yt });
  let A = t ? t.GetStartTimeAndDateUnixSeconds() : 0,
    j = S;
  return (
    S && (S.length > Wt || g.length > Wt) && (j = void 0),
    (0, Z.jsxs)(`div`, {
      className: vt,
      children: [
        (0, Z.jsxs)(N, {
          className: Y(yt, `OtherEvents_EventCtn`, Tt),
          eventModel: t,
          route: o || P.k_eView,
          onClick: a,
          preferredFocus: !0,
          children: [
            (0, Z.jsxs)(`div`, {
              className: Y(St, Ct),
              children: [
                (0, Z.jsx)(`div`, { className: Ot, children: y }),
                (0, Z.jsx)(`div`, { className: bt, children: x }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: kt,
              style: {
                backgroundColor: `#ffffff`,
                backgroundImage: E ? `url(${v(E)})` : `none`,
              },
            }),
            (0, Z.jsxs)(`div`, {
              className: wt,
              children: [
                (0, Z.jsx)(`div`, {
                  className: Y(gt, l && `olyf0KJqJlE-`),
                  children: (0, Z.jsx)(O, {
                    rgSources: T,
                    onIncrementalError: k,
                    className: Dt,
                    alt: ``,
                  }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: At,
                  children: [
                    (0, Z.jsx)(`div`, { className: Et, children: g }),
                    !!j &&
                      (0, Z.jsx)(`div`, {
                        className: `AYD-9JVfXTU-`,
                        children: j,
                      }),
                    (0, Z.jsxs)(Te, {
                      direction: `row`,
                      gap: `3`,
                      align: `center`,
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: Y(Mt, xt),
                          children: y,
                        }),
                        A > u
                          ? (0, Z.jsx)(`div`, {
                              className: Y(jt, `UpcomingCtn`),
                              children: (0, Z.jsx)(R, {
                                bSingleLine: !0,
                                dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                              }),
                            })
                          : (0, Z.jsx)(R, {
                              bSingleLine: !0,
                              bOnlyDate: !0,
                              dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                            }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, { className: Y(bt, xt), children: x }),
                  ],
                }),
              ],
            }),
          ],
        }),
        !!(r && t.appid) && (0, Z.jsx)(Kt, { appid: t.appid, bHidePrice: s }),
      ],
    })
  );
}
function Kt(e) {
  let { appid: t, bHidePrice: n } = e,
    r = p(t),
    { data: i } = Fe(r),
    { data: a } = ut(r),
    { data: o } = ve(r),
    s = He(),
    c = Ie();
  if (!a || !i) return null;
  let l = o && o.hide_discount_pct_for_compliance;
  return (0, Z.jsx)(I, {
    appID: t,
    children: (0, Z.jsxs)(ye, {
      className: Y(Ft, `AppCapsuleCtn`),
      ...f(i, s, c, !1),
      children: [
        (0, Z.jsx)(m, {
          id: r,
          hoverProps: { direction: `overlay`, style: { minWidth: `320px` } },
          children: (0, Z.jsx)(`img`, {
            className: Y(Nt, Pt),
            src: F(a, `small_capsule`),
            alt: i.name,
          }),
        }),
        !n &&
          !i.is_free &&
          (0, Z.jsxs)(`span`, {
            className: Y(`KTGJoQErGog-`, o?.discount_pct ? `PON8X0ze5G8-` : ``),
            children: [
              !!(o?.discount_pct && l) &&
                (0, Z.jsx)(`div`, {
                  className: `NqZ9uMSo13A-`,
                  children: (0, Z.jsx)(ft, {}),
                }),
              !(!o?.discount_pct || l) &&
                (0, Z.jsx)(`span`, {
                  className: `kjiBcsaqA8o-`,
                  children: `-${o?.discount_pct}%`,
                }),
              o &&
                o.final_price_in_cents &&
                (0, Z.jsx)(`span`, {
                  className: `OySWwOLLxFc-`,
                  children: o.formatted_final_price,
                }),
            ],
          }),
      ],
    }),
  });
}
var qt = e(l()),
  Q = e(n()),
  $ = (function (e) {
    return (
      (e[(e.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (e[(e.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (e[(e.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (e[(e.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      e
    );
  })({});
function Jt(e, t = !1) {
  return t
    ? `${g}/${e.clanAccountID}/${y.GetThumbHashAndExt(e)}`
    : `${g}/${e.clanAccountID}/${y.GetHashAndExt(e)}`;
}
function Yt(e, t, n) {
  let r = ``,
    i = Jt(t);
  if (n == 4)
    (r = `[video webm=`),
      t.file_type == 5 && (r += i),
      (r += ` mp4=`),
      t.file_type == 4 && (r += i),
      (r += ` autoplay=true controls=false][/video]`);
  else if (n == 2) r = `[img]` + i + `[/img]`;
  else {
    let e = Jt(t, !0);
    r = `[url=` + i + `][img]` + e + `[/img][/url]`;
  }
  e.InsertText(r);
}
var Xt = `MBOGLVBsJno-`,
  Zt = `W-3Dq3-54Lg-`,
  Qt = `quLSuE3pc1o-`,
  $t = `lnTEZ3RD-vc-`,
  en = `kpa9FPV-AL0-`,
  tn = `n8uggtUd8lI-`,
  nn = `PNoxLvZvnxs-`,
  rn = `iGpmTErZND8-`,
  an = `hAZUPjOGGxE-`,
  on = `PThjtnwdrZw-`,
  sn = `KrfJsIy2eiY-`,
  cn = `vp8ylQevKMI-`,
  ln = `zCecNDxgRwE-`,
  un = `wxWVRBKbQ6Y-`,
  dn = `_1hQVgn9Glyw-`,
  fn = `OQ-ETv0yIhg-`,
  pn = `wVGLukava5E-`,
  mn = `crDJadcMi8A-`,
  hn = `AmP7BU2J8Pw-`;
function gn(e) {
  let { fnSetImageSearch: t } = e,
    n = (0, X.useRef)(null);
  return (0, Z.jsx)(`div`, {
    className: hn,
    children: (0, Z.jsx)(`input`, {
      ref: n,
      className: mn,
      type: `text`,
      placeholder: q(`#ImagePicker_Search`),
      onChange: (e) => t(e.currentTarget.value),
      onKeyDown: (e) => {
        e.key == `Escape` && (t(``), n.current && (n.current.value = ``));
      },
    }),
  });
}
var _n = X.memo(function (e) {
  let {
    fileNameSearch: t,
    clanAccountID: n,
    imageInsertCallBack: r,
    fnOnExpandImage: i,
    showImageActions: a = !0,
    InternalOpenLocalizeImageGroup: o,
  } = e;
  return (0, Z.jsx)(vn, {
    clanAccountID: n,
    fileNameSearch: t,
    children: (e, t) =>
      e.map((e) =>
        (0, Z.jsx)(
          bn,
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
function vn(e) {
  let { clanAccountID: t, fileNameSearch: n, children: r } = e,
    i = ne(t),
    a = n.trim().toLowerCase() || ``,
    o = z.GetFilteredClanImagesList(i, a);
  if (o.length == 0) {
    let e = H.InitFromClanID(t, J.EUNIVERSE),
      n = z.GetLoadState(e);
    return n && n.loaded
      ? (0, Z.jsx)(
          `div`,
          {
            className: en,
            children:
              a.length > 0
                ? q(`#ImagePicker_EmptySearch`)
                : q(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : n && n.errMsg
        ? (0, Z.jsx)(
            `div`,
            { className: tn, children: q(`#ImagePicker_Error`, n.errMsg) },
            `ImagePicker_Result`,
          )
        : (0, Z.jsx)(
            `div`,
            { className: en, children: q(`#Loading`) },
            `ImagePicker_Result`,
          );
  }
  return r(o, a);
}
function yn(e) {
  let {
    clanAccountID: t,
    fileNameSearch: n,
    onImageSelected: r,
    selectedItem: i,
  } = e;
  return (0, Z.jsx)(vn, {
    clanAccountID: t,
    fileNameSearch: n,
    children: (e) =>
      (0, Z.jsx)(`div`, {
        className: on,
        children: e.map((e) =>
          (0, Z.jsx)(
            Cn,
            { clanImage: e, selected: e == i, onImageSelected: r },
            e.imageid,
          ),
        ),
      }),
  });
}
function bn(e) {
  let {
      clanImage: t,
      searchStringHilight: n,
      imageInsertCallBack: r,
      OnImageClick: i,
      showImageActions: a,
      fnOnOpenLocalizedImageGroup: o,
    } = e,
    [s, c] = X.useState(!1),
    l = () => r(t, $.k_eInsertFullImage),
    u = () => r(t, $.k_eInsertVideo),
    d = () => r(t, $.k_eInsertThumbnail),
    f = (e) => {
      t.url &&
        (e.dataTransfer.setData(`text`, t.url),
        z.GetClanImageDragListener().forEach((e) => {
          e(H.InitFromClanID(t.clanAccountID, J.EUNIVERSE), !0);
        }));
    },
    p = (e) => {
      t.url &&
        z.GetClanImageDragListener().forEach((e) => {
          e(H.InitFromClanID(t.clanAccountID, J.EUNIVERSE), !1);
        });
    },
    m = (e) => {
      G(
        (0, Z.jsx)(U, {
          strTitle: q(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: g,
          onCancel: _,
          closeModal: _,
          children: (0, Z.jsxs)(X.Fragment, {
            children: [
              (0, Z.jsx)(`div`, {
                children: q(`#ImagePicker_DeleteAreYouSure`, t.file_name ?? ``),
              }),
              (0, Z.jsx)(`br`, {}),
              (0, Z.jsx)(`br`, {}),
              (0, Z.jsx)(`div`, { children: q(`#ImagePicker_DeleteWarning`) }),
            ],
          }),
        }),
        at(e) ?? window,
      );
    },
    h = (e) => {
      console.log(`ClanImageWrapper on delete error: ` + e),
        G(
          (0, Z.jsx)(W, {
            strTitle: q(`#Error_FailureNotice`),
            strDescription: q(`#EventDisplay_DeleteEvent_Error`),
            children: (0, Z.jsx)(`p`, { children: e }),
          }),
          window,
        );
    },
    g = () => {
      c(!0);
      let e = H.InitFromClanID(t.clanAccountID, J.EUNIVERSE);
      z.DeleteClanImage(e, t)
        .then((e) => {
          e.success != 1 && h(V(e).strErrorMsg), c(!1);
        })
        .catch((e) => {
          h(V(e).strErrorMsg), c(!1);
        });
    },
    _ = () => {},
    v = () => {
      i && i(t);
    },
    b = t.file_name ? t.file_name : ``,
    S = oe(n, b, String(t.imageid), nn),
    C = y.BIsClanImageVideo(t),
    T = a && !s && !C,
    E = a && !s && !C,
    D = a && !s && C,
    O = a && !s && !C;
  return (0, Z.jsx)(x, {
    placeholderHeight: `100vh`,
    className: Xt,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, Z.jsxs)(`div`, {
      className: rn,
      children: [
        (0, Z.jsx)(`div`, {
          className: Zt,
          style: { backgroundImage: C ? `` : `url( '${t.thumb_url}' )` },
          draggable: !0,
          onDragStart: f,
          onDragEnd: p,
          onDoubleClick: l,
          onClick: v,
          children: (0, Z.jsx)(Sn, { clanImage: t, className: Qt }),
        }),
        T &&
          (0, Z.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: l,
            children: q(`#ImagePicker_FullSize`),
          }),
        s && (0, Z.jsx)(w, { size: `medium`, className: `_9dVXPw6twXc-` }),
        E &&
          (0, Z.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: d,
            children: q(`#ImagePicker_Thumbnail`),
          }),
        O &&
          o &&
          (0, Z.jsx)(xn, {
            bDeleting: s,
            clanImage: t,
            fnOnOpenLocalizedImageGroup: o,
          }),
        D &&
          (0, Z.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: u,
            children: q(`#ImagePicker_Video`),
          }),
        !s &&
          (0, Z.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: m,
            children: (0, Z.jsx)(`img`, {}),
          }),
        (0, Z.jsx)(`div`, { className: $t, title: b, children: S }),
      ],
    }),
  });
}
function xn(e) {
  let { clanImage: t, fnOnOpenLocalizedImageGroup: n, bDeleting: r } = e,
    { data: i } = j(t.clanAccountID);
  return r || !i?.valve_admin
    ? null
    : (0, Z.jsx)(`span`, {
        className: Y(an, mt),
        onClick: () => n?.(t),
        children: `(VO) ` + q(`#ImagePicker_Localized`),
      });
}
function Sn(e) {
  let { clanImage: t, className: n } = e;
  return y.BIsClanImageVideo(t)
    ? (0, Z.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: n,
        children: (0, Z.jsx)(`source`, {
          src: t.url,
          type: `video/` + (t.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function Cn(e) {
  let { clanImage: t, onImageSelected: n, selected: r } = e;
  return (0, Z.jsxs)(`div`, {
    className: Y(sn, r && `l3B7r5zxFCQ-`),
    onClick: () => n(t, !1),
    onDoubleClick: () => n(t, !0),
    title: t.file_name,
    children: [
      (0, Z.jsx)(`div`, {
        className: cn,
        children: y.BIsClanImageVideo(t)
          ? (0, Z.jsx)(Sn, { clanImage: t })
          : (0, Z.jsx)(`img`, { src: t.url, loading: `lazy` }),
      }),
      (0, Z.jsx)(`div`, { className: ln, children: t.file_name }),
    ],
  });
}
function wn(e) {
  let { clanSteamID: t, closeModal: n, OnClanImageSelected: r } = e,
    i = X.useCallback(
      (e, t) => {
        r?.(e, t), n?.();
      },
      [r, n],
    ),
    [a, o] = X.useState(``);
  return (0, Z.jsxs)(U, {
    strTitle: q(`#ImagePicker_Images`),
    strDescription: q(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: n,
    onCancel: n,
    children: [
      (0, Z.jsx)(gn, { fnSetImageSearch: o }),
      (0, Z.jsx)(_n, {
        clanAccountID: t.GetAccountID(),
        fileNameSearch: a,
        imageInsertCallBack: i,
        showImageActions: !1,
      }),
    ],
  });
}
function Tn(e) {
  let { clanSteamID: t, OnClanImageSelected: n } = e;
  return (0, Z.jsxs)(`div`, {
    className: fn,
    children: [
      (0, Z.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, Z.jsxs)(`span`, {
            children: [q(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, Z.jsx)(`span`, {
            className: pn,
            children: q(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, Z.jsx)(`input`, {
        style: { display: `none` },
        id: `clanimagedialog`,
        type: `button`,
        onClick: (e) => {
          G(
            (0, Z.jsx)(wn, { clanSteamID: t, OnClanImageSelected: n }),
            at(e) ?? window,
          );
        },
      }),
    ],
  });
}
var En = class e {
  m_curLocImageGroup = null;
  m_curLocImageGroupType = null;
  constructor() {
    o(this);
  }
  static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, n, r) {
    let i =
        J.COMMUNITY_BASE_URL +
        `gid/` +
        t.ConvertTo64BitString() +
        `/hasclanimagefile`,
      a = { image_hash_and_ext: n, lang: `` + r };
    return (
      (await Q.default.get(i, { params: a, cancelToken: e && e.token })).data
        .success == 1
    );
  }
  SetPrimaryImageForImageGroup(e, t) {
    (this.m_curLocImageGroup &&
      this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
      t == this.m_curLocImageGroupType) ||
      ((this.m_curLocImageGroup = { primaryImage: e, localized_images: [] }),
      (this.m_curLocImageGroupType = t),
      (this.m_curLocImageGroup.localized_images = Le(
        this.m_curLocImageGroup.localized_images,
        32,
        null,
      )));
  }
  GetPrimaryImageForImageGroup() {
    return this.m_curLocImageGroup?.primaryImage;
  }
  ClearImageGroup() {
    (this.m_curLocImageGroup = null), (this.m_curLocImageGroupType = null);
  }
  GetLocalizedImageGroupForEdit() {
    return this.m_curLocImageGroup;
  }
  GetLocalizedImageGroupForEditAsURL(e, t) {
    if (this.m_curLocImageGroup) {
      let n = this.m_curLocImageGroup.primaryImage;
      return this.m_curLocImageGroup.localized_images[t]
        ? this.m_curLocImageGroup.localized_images[t]
        : y.GenerateURLFromHashAndExt(e, y.GetHashAndExt(n) ?? ``);
    }
    return null;
  }
  async DetermineAvailableLocalizationForGroup(t) {
    if (!this.m_curLocImageGroup) return;
    let n = this.m_curLocImageGroup.primaryImage,
      i = H.InitFromClanID(n.clanAccountID, J.EUNIVERSE),
      a = y.GetHashAndExt(n) ?? ``,
      o = [];
    for (let n = 0; n < 32; ++n)
      o.push(e.BDoesClanImageFileExistsOnCDNOrOrigin(t, i, a, n));
    let s = await Promise.all(o);
    r(() => {
      for (let e = 0; e < 32; ++e)
        s[e] &&
          (this.m_curLocImageGroup.localized_images[e] =
            y.GenerateURLFromHashAndExtAndLang(
              i,
              a,
              b.full,
              e,
              this.m_curLocImageGroupType ?? void 0,
            ));
    });
  }
  SetLocalizedImageGroupAtLang(e, t, n) {
    this.m_curLocImageGroup &&
      (this.m_curLocImageGroup.localized_images[e] = n
        ? y.GenerateURLFromHashAndExtAndLang(
            t,
            n,
            b.full,
            e,
            this.m_curLocImageGroupType ?? void 0,
          )
        : null);
  }
  AddLocalizeImageUploaded(e, t) {
    if (!this.m_curLocImageGroup) return;
    let n = this.m_curLocImageGroup.primaryImage;
    if (n?.image_hash == e) {
      let e = H.InitFromClanID(n.clanAccountID, J.EUNIVERSE),
        r = y.GetHashAndExt(n);
      r &&
        (this.m_curLocImageGroup.localized_images[t] =
          y.GenerateURLFromHashAndExtAndLang(
            e,
            r,
            b.full,
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
      .map((e) => y.GetHashAndExtFromURL(e));
  }
};
be([c], En.prototype, `m_curLocImageGroup`, void 0);
var Dn = new En(),
  On = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`;
function kn(e, t) {
  return e ? (t ? !!e.valve_admin : !!(e.valve_admin || e.support_user)) : !1;
}
function An(e, t) {
  let n = !!(e && e.BIsClanAccount()),
    { data: r } = j(n ? e.GetAccountID() : 0);
  return n && kn(r, t);
}
function jn(e) {
  let { clanSteamID: t, id: n } = e;
  return An(t, e.requireAdmin)
    ? (0, Z.jsx)(`div`, {
        id: n,
        className: Y(e.className, e.requireAdmin ? Pe : mt),
        children: e.children,
      })
    : null;
}
var Mn = { editModel: null, bClanImagesV2: !1, setClanImagesV2: void 0 },
  Nn = X.createContext(Mn);
function Pn(e) {
  return {
    fnSnapshot: () => {
      let t = e.GetChangeState();
      return () => e.RestoreChangeState(t);
    },
  };
}
function Fn(e) {
  let { children: t, editModel: n } = e,
    { bClanImagesV2: r, setClanImagesV2: i } = Rn(),
    a = X.useMemo(() => n && Pn(n), [n]);
  return (0, Z.jsx)(Nn.Provider, {
    value: { ...Mn, editModel: n, bClanImagesV2: r, setClanImagesV2: i },
    children: (0, Z.jsx)(T.Provider, {
      value: a,
      children: (0, Z.jsx)(A, { location: 1, children: t }),
    }),
  });
}
function In() {
  return X.useContext(Nn);
}
function Ln() {
  return In().editModel;
}
function Rn() {
  let e = `storeUseClanImagesV2`,
    [t, n] = X.useState(() => !!localStorage.getItem(e));
  return {
    bClanImagesV2: t,
    setClanImagesV2: X.useCallback((t) => {
      t ? localStorage.setItem(e, `1`) : localStorage.removeItem(e), n(t);
    }, []),
  };
}
function zn() {
  let e = X.useContext(Nn);
  return {
    bClanImagesV2: e.bClanImagesV2 && !1,
    bClanImagesV2Allowed: !1,
    setClanImagesV2: e.setClanImagesV2,
  };
}
var Bn = `nicknames`;
function Vn(e) {
  let t = rt(),
    { data: n, isLoading: r } = a({
      queryKey: [Bn],
      queryFn: async () => {
        let e = new Map();
        if (We.logged_in) {
          let n = Ne.Init(dt),
            r = (await Ae.GetNicknameList(t, n)).Body().toObject();
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
async function Hn(e) {
  if (!e || e.length == 0) return [];
  let t = _e() == `community` ? J.COMMUNITY_BASE_URL : J.STORE_BASE_URL;
  if (e.length == 1) {
    let n = { accountid: e[0], origin: self.origin },
      r = await Q.default.get(`${t}actions/ajaxgetavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${V(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let n = { accountids: e.join(`,`), origin: self.origin },
      r = await Q.default.get(`${t}actions/ajaxgetmultiavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${V(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new H(e.steamid).GetAccountID(), e),
      ),
      e.map((e) => i.get(e))
    );
  }
}
var Un = new qt.default((e) => Hn(e), { cache: !1 }),
  Wn = `avatarandpersonas`;
function Gn(e) {
  return [Wn, e];
}
function Kn(e) {
  let { data: t, isLoading: n } = a({
    queryKey: Gn(e),
    queryFn: () => Un.load(e),
  });
  return [t, n];
}
var qn = `w1edBej-iT4-`;
function Jn(e) {
  let {
      accountID: t,
      bHideWhenNotAvailable: n,
      bHideName: r,
      bLink: i = !0,
    } = e,
    [a] = Kn(t),
    o = Vn(t),
    s = X.useMemo(() => H.InitFromAccountID(t, J.EUNIVERSE), [t]),
    c = `${J.COMMUNITY_BASE_URL}profiles/${s.ConvertTo64BitString()}`;
  return (0, Z.jsx)(Z.Fragment, {
    children: a
      ? (0, Z.jsxs)(i ? `a` : `span`, {
          href: i ? c : void 0,
          children: [
            (0, Z.jsx)(`img`, {
              className: qn,
              src: a.avatar_url,
              "data-miniprofile": `s` + s.ConvertTo64BitString(),
            }),
            !r &&
              (0, Z.jsx)(`span`, {
                children: o ? `${o} (${a.persona_name})` : a.persona_name,
              }),
          ],
        })
      : (0, Z.jsx)(Z.Fragment, {
          children: !n && (0, Z.jsx)(`span`, { children: t }),
        }),
  });
}
var Yn = t((e, t, n) => {
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
        (this._handle = null),
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
            (t.chunkSize = parseInt(t.chunkSize)),
              e.step || e.chunk || (t.chunkSize = null),
              (this._handle = new p(t)),
              ((this._handle.streamer = this)._config = t);
          }.call(this, e),
          (this.parseChunk = function (e, n) {
            var r = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < r) {
              let t = this._config.newline;
              (t ||=
                ((a = this._config.quoteChar || `"`),
                this._handle.guessLineEndings(e, a))),
                (e = [...e.split(t).slice(r)].join(t));
            }
            this.isFirstChunk &&
              x(this._config.beforeFirstChunk) &&
              (a = this._config.beforeFirstChunk(e)) !== void 0 &&
              (e = a),
              (this.isFirstChunk = !1),
              (this._halted = !1);
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
          });
      }
      function l(e) {
        var t;
        (e ||= {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
          c.call(this, e),
          (this._nextChunk = r
            ? function () {
                this._readChunk(), this._chunkLoaded();
              }
            : function () {
                this._readChunk();
              }),
          (this.stream = function (e) {
            (this._input = e), this._nextChunk();
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
            (e = t.statusText || e), this._sendError(Error(e));
          });
      }
      function u(e) {
        (e ||= {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
          c.call(this, e);
        var t,
          n,
          r = typeof FileReader < `u`;
        (this.stream = function (e) {
          (this._input = e),
            (n = e.slice || e.webkitSlice || e.mozSlice),
            r
              ? (((t = new FileReader()).onload = b(this._chunkLoaded, this)),
                (t.onerror = b(this._chunkError, this)))
              : (t = new FileReaderSync()),
            this._nextChunk();
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
            (this._start += this._config.chunkSize),
              (this._finished =
                !this._config.chunkSize || this._start >= this._input.size),
              this.parseChunk(e.target.result);
          }),
          (this._chunkError = function () {
            this._sendError(t.error);
          });
      }
      function d(e) {
        var t;
        c.call(this, (e ||= {})),
          (this.stream = function (e) {
            return (t = e), this._nextChunk();
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
          });
      }
      function f(e) {
        c.call(this, (e ||= {}));
        var t = [],
          n = !0,
          r = !1;
        (this.pause = function () {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }),
          (this.resume = function () {
            c.prototype.resume.apply(this, arguments), this._input.resume();
          }),
          (this.stream = function (e) {
            (this._input = e),
              this._input.on(`data`, this._streamData),
              this._input.on(`end`, this._streamEnd),
              this._input.on(`error`, this._streamError);
          }),
          (this._checkIsFinished = function () {
            r && t.length === 1 && (this._finished = !0);
          }),
          (this._nextChunk = function () {
            this._checkIsFinished(),
              t.length ? this.parseChunk(t.shift()) : (n = !0);
          }),
          (this._streamData = b(function (e) {
            try {
              t.push(
                typeof e == `string` ? e : e.toString(this._config.encoding),
              ),
                n &&
                  ((n = !1),
                  this._checkIsFinished(),
                  this.parseChunk(t.shift()));
            } catch (e) {
              this._streamError(e);
            }
          }, this)),
          (this._streamError = b(function (e) {
            this._streamCleanUp(), this._sendError(e);
          }, this)),
          (this._streamEnd = b(function () {
            this._streamCleanUp(), (r = !0), this._streamData(``);
          }, this)),
          (this._streamCleanUp = b(function () {
            this._input.removeListener(`data`, this._streamData),
              this._input.removeListener(`end`, this._streamEnd),
              this._input.removeListener(`error`, this._streamError);
          }, this));
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
              x(e.transformHeader) && (t = e.transformHeader(t, n)), _.push(t);
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
          (e = { type: e, code: t, message: n }),
            r !== void 0 && (e.row = r),
            v.errors.push(e);
        }
        x(e.step) &&
          ((i = e.step),
          (e.step = function (t) {
            (v = t),
              C()
                ? S()
                : (S(),
                  v.data.length !== 0 &&
                    ((d += t.data.length),
                    e.preview && d > e.preview
                      ? n.abort()
                      : ((v.data = v.data[0]), i(v, u))));
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
                        0 < v.data.length && (g /= v.data.length - _),
                          (c === void 0 || m <= c) &&
                            (u === void 0 || u < g) &&
                            1.99 < g &&
                            ((c = m), (o = p), (u = g));
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
            (p = !0),
              n.abort(),
              (t = x(e.chunk) ? `` : t.substring(n.getCharIndex()));
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
            (g = !0),
              n.abort(),
              (v.meta.aborted = !0),
              x(e.complete) && e.complete(v),
              (t = ``);
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
          });
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
        !0 === r
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
`);
        var f = 0,
          p = !1;
        (this.parse = function (s, h, g) {
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
          if (!s) return L();
          if (o || (!1 !== o && s.indexOf(u) === -1)) {
            for (var D = s.split(n), O = 0; O < D.length; O++) {
              if (((T = D[O]), (f += T.length), O !== D.length - 1))
                f += n.length;
              else if (g) return L();
              if (!r || T.substring(0, b) !== r) {
                if (S) {
                  if (((C = []), P(T.split(t)), R(), p)) return L();
                } else P(T.split(t));
                if (a && a <= O) return (C = C.slice(0, a)), L(!0);
              }
            }
            return L();
          }
          for (
            var k = s.indexOf(t, f),
              A = s.indexOf(n, f),
              j = new RegExp(m(d) + m(u), `g`),
              M = s.indexOf(u, f);
            ;
          )
            if (s[f] === u)
              for (M = f, f++; ; ) {
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
                    T.push(s.substring(f, M).replace(j, u)),
                      s[(f = M + 1 + N + v)] !== u && (M = s.indexOf(u, f)),
                      (k = s.indexOf(t, f)),
                      (A = s.indexOf(n, f));
                    break;
                  }
                  if (
                    ((N = ee(A)), s.substring(M + 1 + N, M + 1 + N + y) === n)
                  ) {
                    if (
                      (T.push(s.substring(f, M).replace(j, u)),
                      I(M + 1 + N + y),
                      (k = s.indexOf(t, f)),
                      (M = s.indexOf(u, f)),
                      S && (R(), p))
                    )
                      return L();
                    if (a && C.length >= a) return L(!0);
                    break;
                  }
                  w.push({
                    type: `Quotes`,
                    code: `InvalidQuotes`,
                    message: `Trailing quote on quoted field is malformed`,
                    row: C.length,
                    index: f,
                  }),
                    M++;
                }
              }
            else if (r && T.length === 0 && s.substring(f, f + b) === r) {
              if (A === -1) return L();
              (f = A + y), (A = s.indexOf(n, f)), (k = s.indexOf(t, f));
            } else if (k !== -1 && (k < A || A === -1))
              T.push(s.substring(f, k)), (f = k + v), (k = s.indexOf(t, f));
            else {
              if (A === -1) break;
              if ((T.push(s.substring(f, A)), I(A + y), S && (R(), p)))
                return L();
              if (a && C.length >= a) return L(!0);
            }
          return F();
          function P(e) {
            C.push(e), (E = f);
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
                S && R()),
              L()
            );
          }
          function I(e) {
            (f = e), P(T), (T = []), (A = s.indexOf(n, f));
          }
          function L(r) {
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
                  for (; (e = r + `_` + s), s++, o.has(e); );
                  o.add(e),
                    (i[n] = e),
                    a[r]++,
                    (t = !0),
                    ((c = c === null ? {} : c)[e] = r);
                } else (a[r] = 1), (i[n] = r);
                o.add(r);
              }
              t && console.warn(`Duplicate headers found and renamed.`),
                (l = !0);
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
          function R() {
            i(L()), (C = []), (w = []);
          }
        }),
          (this.abort = function () {
            p = !0;
          }),
          (this.getCharIndex = function () {
            return f;
          });
      }
      function g(e) {
        var t = e.data,
          n = a[t.workerId],
          r = !1;
        if (t.error) n.userError(t.error, t.file);
        else if (t.results && t.results.data) {
          var i = {
            abort: function () {
              (r = !0),
                _(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
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
        x(n.userComplete) && n.userComplete(t), n.terminate(), delete a[e];
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
          ((i = (() => {
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
            i.postMessage({ input: n, config: r, workerId: i.id });
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
                  t.escapeChar !== void 0 && (c = t.escapeChar + o),
                    t.escapeFormulae instanceof RegExp
                      ? (d = t.escapeFormulae)
                      : typeof t.escapeFormulae == `boolean` &&
                        t.escapeFormulae &&
                        (d = /^[=+\-@\t\r].*$/);
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
                0 < l && (o += i), (o += h(e[l], l));
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
                (l.instanceConfig.complete = function (e) {
                  x(d) && d(e, l.file, l.inputElem), o();
                }),
                  s.parse(l.file, l.instanceConfig);
              }
            }
            function o() {
              i.splice(0, 1), a();
            }
          }),
        i &&
          (t.onmessage = function (e) {
            (e = e.data),
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
                  });
          }),
        ((l.prototype = Object.create(c.prototype)).constructor = l),
        ((u.prototype = Object.create(c.prototype)).constructor = u),
        ((d.prototype = Object.create(d.prototype)).constructor = d),
        ((f.prototype = Object.create(c.prototype)).constructor = f),
        s
      );
    });
  }),
  Xn = e(Yn()),
  Zn = class e {
    static ParseCSVFile(e, t) {
      return new Promise((n, r) => {
        let i = {
          header: !0,
          skipEmptyLines: `greedy`,
          complete: n,
          error: (e) => r({ errors: [e] }),
          transformHeader: t,
        };
        Xn.default.parse(e, i);
      });
    }
    static ReadFile(e) {
      return new Promise((t, n) => {
        let r = new FileReader();
        (r.onload = () => t(r.result ?? ``)), r.readAsText(e);
      });
    }
    static WriteFile(e, t) {
      let n = document.createElement(`a`);
      navigator.msSaveBlob
        ? navigator.msSaveBlob(e, t)
        : (n.href = window.URL.createObjectURL(e)),
        n.setAttribute(`download`, t),
        n.click();
      try {
        document.removeChild(n);
      } catch {}
    }
    static WriteCSVToFile(t, n, r, i) {
      let a = i
          ? Xn.default.unparse({ fields: i, data: t }, { header: !0 })
          : Xn.default.unparse(t, { header: !0 }),
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
      (i += new XMLSerializer().serializeToString(t)),
        e.WriteFile(
          new Blob([i], { type: `application/xml:charset=utf-8;` }),
          n,
        );
    }
  };
function Qn(e) {
  let {
      onDropFiles: t,
      renderDesciption: n,
      elAdditonalButtons: r,
      elOverrideDragAndDropText: i,
    } = e,
    [a, o] = D(t),
    [s, c] = E(t, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, Z.jsxs)(`div`, {
    ...a,
    className: Y(o ? dn : un, `DragAndDropContainer`),
    children: [
      !!n && n(),
      (0, Z.jsx)(`div`, { children: i || q(`#ImagePicker_DragAndDrop`) }),
      (0, Z.jsxs)(`div`, {
        className: fn,
        children: [
          s,
          (0, Z.jsxs)(`label`, {
            onClick: c,
            children: [
              (0, Z.jsxs)(`span`, {
                children: [q(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, Z.jsx)(`span`, {
                className: pn,
                children: q(`#selectimage_select_file`),
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
var $n = `_5RINCHFuy0Y-`,
  er = `GWe0Hc-fT2A-`,
  tr = `Wmeqy6nXS1Y-`,
  nr = `_698Kbr-wNSM-`,
  rr = `_4l0OY5qTFkk-`,
  ir = `_4StKqHsfdjg-`,
  ar = `dp7SyRphVOo-`,
  or = `OoUlU8pBBN4-`;
function sr(e) {
  let {
      imageUploader: t,
      fnUploadComplete: n,
      elOverrideDragAndDropText: r,
      forceResolution: i,
      elAdditonalButtons: a,
      rgRealmList: o,
    } = e,
    [s, c] = d(() => [t.GetUploadImages(), te.Get().GetCurEditLanguage()]),
    l = X.useCallback(
      async (e) => {
        let n = Array.from(e),
          r = !0;
        for (let e = 0; e < n.length; e++) {
          let i = n[e],
            { language: a } = ie(i?.name, c);
          try {
            let n = ce(a, c, o);
            (r = await t.AddImageForLanguage(i, n)),
              r ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    i.name,
                ),
                G(
                  (0, Z.jsx)(W, {
                    strDescription: q(`#ImagePicker_Error`, i.name),
                  }),
                  window,
                ));
          } catch (e) {
            let t = V(e);
            console.error(
              `ImageUploaderPanel.OnDropFiles: ` + t.strErrorMsg,
              t,
            ),
              G(
                (0, Z.jsx)(W, {
                  strDescription: q(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              );
          }
        }
        return r;
      },
      [c, t, o],
    ),
    u = X.useMemo(
      () =>
        a instanceof Array
          ? a
          : [(0, Z.jsx)(X.Fragment, { children: a }, `elAdditonalButtons`)],
      [a],
    );
  return (
    d(() => s.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language }))),
    (0, Z.jsxs)(Qn, {
      onDropFiles: l,
      elAdditonalButtons: u,
      elOverrideDragAndDropText: r,
      children: [
        (0, Z.jsx)(X.Fragment, {
          children: (0, Z.jsx)(`div`, {
            className: er,
            children: s.map((e) =>
              (0, Z.jsx)(
                ur,
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
        (0, Z.jsx)(cr, {
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
function cr(e) {
  let { imageUploader: t, fnOnUploadImageRequested: n } = e,
    [r] = d(() => [t.GetUploadImages()]),
    i = r.some((e) => e.status == `pending`),
    a = r.some(
      (e) =>
        e.status == `waiting` ||
        e.status == `uploading` ||
        e.status == `processing`,
    );
  return (0, Z.jsxs)(`div`, {
    style: { display: `flex` },
    className: tr,
    children: [
      !!r.length &&
        (0, Z.jsx)(K, {
          style: { margin: `8px` },
          onClick: n,
          disabled: !i,
          children: q(`#ImageUpload_Upload`),
        }),
      !!r.length &&
        (0, Z.jsx)(K, {
          style: { margin: `8px` },
          onClick: t.ClearImages,
          disabled: a,
          children: q(`#ImageUpload_Clear`),
        }),
    ],
  });
}
function lr(e, t, n, r, i) {
  let a = [];
  return (
    e.GetUploadImages().forEach((o) => {
      a.push(
        (0, Z.jsx)(
          ur,
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
var ur = i(dr);
function dr(e) {
  let t = (t) => {
      if (t instanceof pe) {
        t.ResetImage();
        let n = window,
          r = (0, Z.jsx)(ae, {
            ownerWin: n,
            uploadFile: t,
            forceResolution: e.forceResolution,
            fileType: e.forceFileType || 3,
          });
        Be(r, n, `CropModal`, { strTitle: q(`#ImageUpload_CropModalTitle`) });
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
      e.bEnforceDimensions && (t += ` - ${e.width}x${e.height}`),
        e.bDeprecated &&
          ((t += ` ${q(`#ImageUpload_Deprecated`)}`),
          (r = q(`#ImageUpload_Deprecated_ttip`)));
      let i;
      return (
        (n.BIsOriginalMinimumDimensions(e) && n.FileTypeMatchesImageTypes(e)) ||
          (i = $n),
        { label: t, data: e, strOptionClass: i, tooltip: r }
      );
    }).filter((e) => !e.data.bHiddenFromDropdown),
    o = {
      pending: q(`#ImageUpload_Pending`),
      waiting: q(`#ImageUpload_Waiting`),
      uploading: q(`#ImageUpload_Uploading`),
      processing: q(`#ImageUpload_Processing`),
      success: q(`#ImageUpload_SuccessCard`),
      failed: q(`#ImageUpload_Failed`),
    },
    s = n.BSupportsLanguages()
      ? mr(xe.GetLanguageListForRealms(i ?? [Oe.k_ESteamRealmGlobal]))
      : null,
    c = n.IsValidAssetType(e.forceResolution, e.forceFileType),
    l = n.status == `pending`,
    u = o[n.status];
  n.status == `pending` &&
    (c.needsCrop
      ? (u = q(`#ImageUpload_NeedsCrop`))
      : c.error && (u = q(`#ImageUpload_Invalid`)));
  let d,
    f = n.GetCurrentImageOption();
  return (
    f && (d = a?.find((e) => e.data.sKey == f.sKey)?.data),
    (d ||= a?.[0]?.data),
    (0, Z.jsxs)(`div`, {
      className: ir,
      children: [
        (0, Z.jsx)(`div`, {
          className: nr,
          onClick: () => r(n),
          children: (0, Z.jsx)(Ge, {}),
        }),
        (0, Z.jsx)(fr, { asset: n }),
        s &&
          (0, Z.jsx)(pt, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: s,
            selectedOption: n.language,
            onChange: (e) => (n.language = e.data),
            disabled: !l,
          }),
        a &&
          a?.length > 1 &&
          (0, Z.jsx)(pt, {
            label: n.GetImageOptionLabel(),
            rgOptions: a,
            selectedOption: d,
            onChange: (e) => n.SetCurrentImageOption(e.data),
            disabled: !l,
          }),
        l &&
          c.warnings?.map((e, t) =>
            (0, Z.jsx)(
              `div`,
              { className: `hb0m5mPiE2A-`, children: e },
              `warning${t}`,
            ),
          ),
        l &&
          c.messages?.map((e, t) =>
            (0, Z.jsx)(
              `div`,
              { className: `CGM5a4V3nBU-`, children: e },
              `message${t}`,
            ),
          ),
        (0, Z.jsxs)(`div`, {
          className: Y({ [Ze]: !0, [rr]: n.status == `failed` }),
          children: [
            u,
            ue(n.status) &&
              (0, Z.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, Z.jsx)(w, { size: `small` }),
              }),
          ],
        }),
        (0, Z.jsx)(`div`, { className: rr, children: n.message }),
        l &&
          c.error &&
          (0, Z.jsx)(`div`, { className: `_4l0OY5qTFkk-`, children: c.error }),
        l &&
          c.needsCrop &&
          (0, Z.jsx)(Qe, {
            onClick: () => t(n),
            children: q(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function fr(e) {
  let { asset: t } = e;
  return t.BIsVideo()
    ? (0, Z.jsxs)(`div`, {
        className: ar,
        onClick: (e) => G((0, Z.jsx)(pr, { asset: t }), at(e)),
        children: [
          (0, Z.jsxs)(`span`, {
            className: or,
            children: [t.width, ` x `, t.height],
          }),
          (0, Z.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, Z.jsx)(`source`, { src: t.dataUrl }),
          }),
        ],
      })
    : (0, Z.jsx)(`div`, {
        className: ar,
        style: { backgroundImage: `url(${t.dataUrl})` },
        children: (0, Z.jsxs)(`span`, {
          className: or,
          children: [t.width, ` x `, t.height],
        }),
      });
}
function pr(e) {
  let { asset: t, closeModal: n } = e;
  return (0, Z.jsx)(U, {
    bAlertDialog: !0,
    closeModal: n,
    bAllowFullSize: !0,
    children: (0, Z.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, Z.jsx)(`source`, { src: t.dataUrl }),
    }),
  });
}
function mr(e) {
  let t = [],
    n = [];
  for (let t of e) {
    if (t == 25) continue;
    let e = q(`#Language_` + Se(t));
    n.push({ label: e, data: t });
  }
  return (
    n.sort((e, t) => e.label.localeCompare(t.label)),
    n.forEach((e) => t.push({ label: e.label, data: e.data })),
    n
  );
}
function hr(e) {
  let {
      clanSteamID: t,
      rgSupportArtwork: n,
      localizedPrimaryImage: r,
      bAllowPreviousClanImageSelection: i,
      fnSetImageURL: a,
      rgRealmList: o,
    } = e,
    [s] = d(() => [te.Get().GetCurEditLanguage()]),
    c = le(t, n, r),
    l = e.uploaderOverride || c,
    [u, f] = X.useState(!1),
    p = X.useCallback(
      async (e, t) => {
        if (!u) {
          f(!0);
          try {
            let { language: t } = ie(e.file_name ?? ``, s),
              n = ce(t, s, o);
            await l.AddExistingClanImage(e, n);
          } catch (e) {
            let t = V(e);
            console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
              G(
                (0, Z.jsx)(W, {
                  strDescription: q(`#EventError_Code`, t.strErrorMsg ?? ``),
                }),
                window,
              );
          }
          f(!1);
        }
      },
      [u, l, s, o],
    ),
    m = X.useMemo(
      () =>
        i
          ? [
              [
                (0, Z.jsx)(
                  Tn,
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
          let t = ce(e.language, s, o);
          Dn.AddLocalizeImageUploaded(e.origimagehash, t);
        } else {
          let r = z.GetClanImageByImageHash(t, e?.image_hash ?? ``),
            i = n.image.GetCurrentImageOption();
          if (r && i) {
            let e = ce(n.image.language, s, o);
            a(i.artworkType, r, e);
          }
        }
      }
    };
  return (0, Z.jsx)(sr, {
    ...e,
    imageUploader: l,
    rgRealmList: o,
    elAdditonalButtons: u
      ? [
          (0, Z.jsx)(
            w,
            { position: `center`, size: `medium`, string: q(`#Loading`) },
            `throbbing`,
          ),
        ]
      : m,
    fnUploadComplete: h,
  });
}
var gr = `x0kXRDaNEsY-`,
  _r = `tggLx72V-Ck-`,
  vr = `DVwf02s2GtI-`,
  yr = `zREkqfL42-U-`,
  br = `_7zBg1-UuADM-`,
  xr = `TMQhyilc41c-`,
  Sr = `t2inDYSKOto-`,
  Cr = `-FHzhwwvQvA-`,
  wr = `ZUy8iSsvilc-`,
  Tr = `XRZj1OeBHRk-`,
  Er = `_2lViMA09hm4-`,
  Dr = `hvd5bQPy4pQ-`,
  Or = `BTC1IyUleCA-`,
  kr = `lEWE2I7Rsj8-`,
  Ar = `_12sYjoMc9wE-`,
  jr = `Y63LZFKwGXE-`,
  Mr = `Ymr3nNqG0aU-`,
  Nr = `c4t3b8o-GC8-`,
  Pr = `_8hs8sf5-YPQ-`,
  Fr = `wFigUYm29Qk-`,
  Ir = `_8R-vFXPq55U-`,
  Lr = `_6Wouy9o4gBY-`,
  Rr = `dWdTSpaG0Wo-`,
  zr = `_0OoyXZePW7I-`,
  Br = `w0qNWg-lQUo-`,
  Vr = `Hy2GxVyZVDA-`;
function Hr(e) {
  let {
      clanImage: t,
      closeModal: n,
      lang: r,
      fnOnArtworkLangChange: i,
      realms: a,
      fnLangHasData: o,
    } = e,
    [s, c] = (0, X.useState)(r),
    l = H.InitFromClanID(t.clanAccountID, J.EUNIVERSE),
    u = d(() => y.GenerateURLFromHashAndExt(l, y.GetHashAndExt(t) ?? ``));
  return (0, Z.jsx)(U, {
    strTitle: q(`#selectimage_change_artwork_lang_title`),
    strDescription: q(`#selectimage_change_artworl_lang_desc`),
    onOK: () => i?.(t, r, s),
    onCancel: n,
    closeModal: n,
    children: (0, Z.jsxs)(`div`, {
      className: Y(Ze, _r),
      children: [
        (0, Z.jsx)(`div`, {
          className: vr,
          children: (0, Z.jsx)(`img`, { className: gr, src: u }),
        }),
        (0, Z.jsx)(fe, {
          selectedLang: s,
          fnLangHasData: o,
          fnOnLanguageChanged: c,
          realms: a,
        }),
      ],
    }),
  });
}
function Ur(e) {
  if (!e) return e;
  let t = e.lastIndexOf(`.`);
  return t === -1 ? e : e.substring(0, t);
}
var Wr = `fHmTl9jH1EQ-`,
  Gr = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function Kr(e) {
  let {
    clanSteamID: t,
    fnGetImageHash: n,
    fnLangHasData: r,
    fnOnRemoveImage: i,
  } = e;
  he(t.GetAccountID());
  let a = X.useMemo(() => {
      let e = [],
        t = xe.GetLanguageListForRealms([
          Oe.k_ESteamRealmGlobal,
          Oe.k_ESteamRealmChina,
        ]);
      for (let r of t) {
        let t = n(r);
        if (t) {
          let n = Se(r),
            i = q(`#Language_` + n);
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
    [o, s, c] = st();
  return (0, Z.jsxs)(`div`, {
    className: Or,
    children: [
      (0, Z.jsx)(`div`, {
        className: kr,
        children: q(`#selectimage_uploaded_languages`),
      }),
      (0, Z.jsx)(`div`, {
        className: wr,
        children: a.map((n) =>
          (0, Z.jsx)(
            qr,
            { langData: n, ...e },
            `lang_select_` + t.GetAccountID() + ` ` + n.strLang,
          ),
        ),
      }),
      !!i &&
        (0, Z.jsxs)(K, {
          onClick: s,
          children: [
            q(`#Sale_RemoveAll`),
            (0, Z.jsx)(Ye, { tooltip: q(`#Sale_RemoveAll_Tooltip`) }),
          ],
        }),
      (0, Z.jsx)(ke, {
        active: o,
        children: (0, Z.jsx)(U, {
          strTitle: q(`#Dialog_AreYouSure`),
          strDescription: q(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: c,
          onOK: () => {
            for (let e = 0; e < 32; e++) r && i && r(e) && i(e);
          },
        }),
      }),
    ],
  });
}
function qr(e) {
  let {
      clanSteamID: t,
      langData: n,
      langOverride: r,
      fnOnLanguagePreviewChange: i,
      fnOnArtworkLangChange: a,
      fnOnRemoveImage: o,
    } = e,
    [s, c] = d(() => {
      let e = z.GetClanImageByImageHash(t, n.imgHash),
        i = ``;
      e &&
        (i = y.GenerateURLFromHashAndExtAndLang(
          t,
          y.GetHashAndExt(e),
          b.full,
          n.lang,
        ));
      let a = br;
      return r != n.lang && (a = n.imgHash ? yr : xr), [i, a];
    });
  return (0, Z.jsxs)(`div`, {
    id: n.strLang,
    className: Sr,
    onClick: (e) => {
      let t = tt(e.currentTarget.id);
      i(t);
    },
    children: [
      (0, Z.jsx)(`div`, { className: c, children: n.locLang }),
      (0, Z.jsxs)(`span`, {
        className: Cr,
        children: [
          !!s &&
            (0, Z.jsx)(`a`, {
              href: s,
              target: `_blank`,
              children: (0, Z.jsx)(Ke, {
                toolTipContent: q(`#selectimage_viewimage_ttip`),
                children: ct(),
              }),
            }),
          !!a && (0, Z.jsx)(Jr, { ...e }),
          !!o && (0, Z.jsx)(Yr, { fnOnRemoveImage: o, langData: n }),
        ],
      }),
    ],
  });
}
function Jr(e) {
  let {
      clanSteamID: t,
      langData: n,
      fnOnArtworkLangChange: r,
      fnGetImageHash: i,
      fnLangHasData: a,
      realms: o,
    } = e,
    [s, c, l] = st(),
    u = d(() => {
      let e = i(n.lang);
      return (
        ze(
          !e || !e.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + e,
        ),
        z.GetClanImageByImageHash(t, e)
      );
    });
  if (!u) console.error(`image does not exists on server`);
  else
    return (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(Ke, {
          toolTipContent: q(`#selectimage_reassign_image_ttip`),
          children: (0, Z.jsx)(`img`, {
            "data-lang": n.lang,
            src: Gr,
            onClick: () => c(),
          }),
        }),
        (0, Z.jsx)(lt, {
          children: (0, Z.jsx)(ke, {
            active: s,
            children: (0, Z.jsx)(Hr, {
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
function Yr(e) {
  let { fnOnRemoveImage: t, langData: n } = e,
    [r, i, a] = st();
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(Ke, {
        toolTipContent: q(`#selectimage_delete_image_ttip`),
        children: (0, Z.jsx)(`img`, {
          "data-lang": n.lang,
          src: On,
          onClick: i,
        }),
      }),
      (0, Z.jsx)(lt, {
        children: (0, Z.jsx)(ke, {
          active: r,
          children: (0, Z.jsx)(U, {
            strTitle: q(`#selectimage_remove_image`),
            strDescription: q(
              `#selectimage_remove_details`,
              q(`#Language_` + Se(n.lang)),
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
var Xr = `dGiOZKKuxfQ-`,
  Zr = `h7-04bl97uc-`,
  Qr = `MhIotXf5RFA-`,
  $r = `mSMnUkR7SZM-`,
  ei = `aWAciZoU3Zo-`,
  ti = `_8AV36Rh-Ve4-`,
  ni = `lxYifi3D8mU-`,
  ri = `MwNTpeRZ8FM-`,
  ii = `RdR4GEnIG5Q-`,
  ai = `epGy6XXAGPQ-`;
function oi(e) {
  let {
      event: t,
      spotlightURLOverride: n,
      fnHandleOpenEvent: r,
      fnImageFailureCallback: i,
      fnFilterImageURLsForKnownFailures: a,
      langOverride: o,
    } = e,
    s = h(),
    c = X.useCallback(
      (e) => {
        e.preventDefault(), r && r(t);
      },
      [t, r],
    ),
    l = o || tt(J.LANGUAGE),
    [u, f, p] = d(() => [
      t.GetSummaryWithFallback(l),
      t.GetNameWithFallback(l),
      t.BShowLibrarySpotlightText(),
    ]),
    m = `spotlight`,
    g = b.spotlight_main;
  (t.appid == 2434320 || J.EUNIVERSE == 2) &&
    ((m = s
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (g = b.full));
  let _ = ee(n === void 0 ? t : void 0, m, l, g) ?? (n === void 0 ? [] : [n]);
  a && _ && (_ = a(_));
  let v = u.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, Z.jsx)(X.Fragment, {
    children: (0, Z.jsx)(`div`, {
      className: ii,
      ref: e.containerRef,
      children: (0, Z.jsxs)(ye, {
        className: Y(ai, Xr),
        onActivate: c,
        focusable: !0,
        children: [
          (0, Z.jsx)(`div`, {
            className: ni,
            children: (0, Z.jsx)(O, {
              className: ri,
              rgSources: _,
              onIncrementalError: (e, t, n) => i && i(t),
            }),
          }),
          (0, Z.jsxs)(`div`, {
            className: Zr,
            children: [
              (0, Z.jsx)(O, {
                className: Qr,
                rgSources: _,
                onIncrementalError: (e, t, n) => i && i(t),
              }),
              (0, Z.jsx)(`div`, { className: ti }),
              (0, Z.jsx)(`div`, {
                className: ei,
                children:
                  p &&
                  (0, Z.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, Z.jsx)(O, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
                        onIncrementalError: (e, t, n) => i && i(t),
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: f,
                          }),
                          (0, Z.jsx)(`div`, {
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
          (0, Z.jsx)(`div`, { className: $r }),
        ],
      }),
    }),
  });
}
var si = `JMbtQkd0K8E-`,
  ci = `snS7KDov-nE-`,
  li = `nvWdGclp6FI-`,
  ui = `xK18jc4N1cw-`,
  di = `IQEedJq4bc8-`,
  fi = `fCimlPrmscM-`,
  pi = `e6k9OpDXG-Q-`,
  mi = `seprbrMSMhI-`,
  hi = `_4CNssq7QFLI-`,
  gi = `yzbYtn5vgZU-`,
  _i = `idlQxtNGVBg-`,
  vi = `mELVvJo8G3c-`,
  yi = `fF5tI3UN-YY-`;
function bi(e) {
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
      fnGetImageHashAndExt: f,
    } = e,
    p = f(n, t),
    m = p ? y.GenerateURLFromHashAndExtAndLang(i, p, b.full, t) : ``,
    [h] = d(() => [Ai(n, f)]);
  return h == 0
    ? (0, Z.jsxs)(`div`, {
        className: vr,
        children: [
          n === `capsule` &&
            (0, Z.jsx)(Ci, {
              imgURL: J.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: a,
            }),
          n === `background` &&
            (0, Z.jsx)(wi, {
              imgURL: J.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(n) &&
            (0, Z.jsx)(xi, { langOverride: t, artworkType: n, eventModel: a }),
          (0, Z.jsx)(`div`, { children: q(`#EventEditor_ArtworkMissing`) }),
        ],
      })
    : (0, Z.jsxs)(`div`, {
        className: vr,
        children: [
          n === `capsule` &&
            (0, Z.jsx)(Ci, { imgURL: m, eventModel: a, langOverride: t }),
          n === `background` &&
            (0, Z.jsx)(wi, {
              imgURL: m,
              lang: t,
              eventModel: a,
              partnerEventStore: o,
            }),
          n === `spotlight` && (0, Z.jsx)(Ti, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight` &&
            (0, Z.jsx)(Ti, { imgURL: m, event: a, lang: t }),
          n === `localized_store_app_spotlight_mobile` &&
            (0, Z.jsx)(Ti, { imgURL: m, event: a, lang: t }),
          (n === `broadcast_left` || n === `broadcast_right`) &&
            (0, Z.jsx)(Ei, {
              imgURL: m,
              side: n === `broadcast_right` ? `right` : `left`,
            }),
          n === `sale_header` && (0, Z.jsx)(Di, { imgURL: m }),
          n === `sale_overlay` && (0, Z.jsx)(Oi, { imgURL: m }),
          S.includes(n) &&
            (0, Z.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: Dn.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
            }),
          n === `product_banner` && (0, Z.jsx)(ki, { imgURL: m }),
          n === `product_mobile_banner` && (0, Z.jsx)(ki, { imgURL: m }),
          n === `sale_logo` && (0, Z.jsx)(ki, { imgURL: m }),
          n === `bestofyear_banner` && (0, Z.jsx)(ki, { imgURL: m }),
          n === `bestofyear_banner_mobile` && (0, Z.jsx)(ki, { imgURL: m }),
          (0, Z.jsx)(Kr, {
            langOverride: t,
            clanSteamID: i,
            fnOnLanguagePreviewChange: r,
            fnOnRemoveImage: s,
            fnOnArtworkLangChange: c,
            realms: l,
            fnLangHasData: u,
            fnGetImageHash: (e) => Ur(f(n, e) ?? ``),
          }),
        ],
      });
}
function xi(e) {
  let { artworkType: t, langOverride: n, eventModel: r } = e,
    i = re[t],
    a = X.useMemo(
      () => Si(q(`#EventEditor_ArtworkType_` + t), `${i.width} X ${i.height}`),
      [i.height, i.width, t],
    );
  return (0, Z.jsx)(Ti, { lang: n, imgURL: a, event: r });
}
function Si(e, t) {
  let n = document.createElement(`canvas`);
  (n.width = 780), (n.height = 200);
  let r = n.getContext(`2d`);
  for (let e = 0; e < 200; e += 20)
    for (let t = 0; t < 780; t += 20)
      (r.fillStyle = (t / 20 + e / 20) % 2 == 0 ? `#a405e3ff` : `#000000`),
        r.fillRect(t, e, 20, 20);
  let i = r.createLinearGradient(0, 0, 780, 0);
  i.addColorStop(0, `rgba(32,32,32,0.8)`),
    i.addColorStop(1, `rgba(60,60,60,0.8)`),
    (r.fillStyle = i),
    r.fillRect(0, 0, 780, 200);
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
function Ci(e) {
  let { imgURL: t, eventModel: n, langOverride: r } = e,
    i = B();
  return (0, Z.jsx)(`div`, {
    style: { display: `flex`, width: `304px` },
    children: (0, Z.jsx)(Gt, {
      event: n,
      imageURLOverride: t,
      langOverride: r ?? i,
    }),
  });
}
function wi(e) {
  let { lang: t, eventModel: n, partnerEventStore: r } = e,
    i = it(),
    [a, o, s, c, l] = d(() => [
      n.GetNameWithFallback(t),
      n.GetDescriptionWithFallback(t),
      n.GetSubTitleWithLanguageFallback(t),
      n.type,
      n.AnnouncementGID,
    ]),
    u = o
      ? (0, Z.jsx)(M, {
          text: o || ``,
          showErrorInfo: !1,
          event: n,
          languageOverride: te.Get().GetCurEditLanguage(),
        })
      : q(`#selectimage_display_event_body`);
  return (0, Z.jsxs)(`div`, {
    className: si,
    children: [
      (0, Z.jsx)(`div`, {
        className: ci,
        children: q(`#selectimage_preview_title_1`),
      }),
      (0, Z.jsx)(`div`, {
        className: Y(li, `DetailPageExample`),
        children: (0, Z.jsxs)(`div`, {
          className: ui,
          children: [
            (0, Z.jsx)(`div`, {
              className: di,
              children: (0, Z.jsx)(`img`, { src: e.imgURL }),
            }),
            (0, Z.jsx)(`div`, {
              className: fi,
              children: (0, Z.jsxs)(`div`, {
                className: pi,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: mi,
                    children: a || q(`#selectimage_display_event_title`),
                  }),
                  (0, Z.jsx)(`div`, {
                    className: hi,
                    children: s || q(`#selectimage_display_event_subtitle`),
                  }),
                  (0, Z.jsx)(`div`, { className: gi, children: u }),
                ],
              }),
            }),
          ],
        }),
      }),
      c != 12 &&
        (0, Z.jsxs)(X.Fragment, {
          children: [
            (0, Z.jsx)(`div`, { className: `y-gExtn9yi8-` }),
            (0, Z.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: q(`#selectimage_preview_title_2`),
            }),
            (0, Z.jsx)(`div`, {
              className: Y(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, Z.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, Z.jsx)(
                  k,
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
var Ti = (e) => {
    let [t] = ge(e.event.appid, { include_assets: !0 });
    if (!t) return null;
    let n = t.GetName(),
      r = t.GetAssets()?.GetCommunityIconURL();
    return (0, Z.jsx)(`div`, {
      className: _i,
      children: (0, Z.jsx)(oi, {
        event: e.event,
        strDisplayName: n ?? ``,
        gameIconUrl: r,
        spotlightURLOverride: e.imgURL,
        langOverride: e.lang,
      }),
    });
  },
  Ei = (e) => {
    let t = [
      (0, Z.jsx)(`img`, { src: e.imgURL }, `img`),
      (0, Z.jsx)(`div`, { className: Pr }, `video`),
    ];
    return (
      e.side === `right` && t.reverse(),
      (0, Z.jsx)(`div`, { className: vi, children: t })
    );
  },
  Di = (e) =>
    (0, Z.jsx)(`div`, {
      className: yi,
      children: (0, Z.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  Oi = (e) =>
    (0, Z.jsx)(`div`, {
      className: yi,
      children: (0, Z.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    }),
  ki = (e) =>
    (0, Z.jsx)(`div`, {
      className: yi,
      children: (0, Z.jsx)(`img`, { style: { width: `100%` }, src: e.imgURL }),
    });
function Ai(e, t) {
  let n = 0;
  for (let r = 0; r < 32; ++r) (t(e, r)?.length ?? 0) > 0 && (n += 1);
  return n;
}
var ji = `https://partner.steamgames.com/doc/store/localization#supported_languages`,
  Mi = (function (e) {
    return (
      (e[(e.k_None = 0)] = `k_None`),
      (e[(e.k_Suggested = 1)] = `k_Suggested`),
      (e[(e.k_Required = 2)] = `k_Required`),
      (e[(e.k_Requested = 3)] = `k_Requested`),
      e
    );
  })({});
function Ni(e) {
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
    [f] = ge(r, { include_assets: !0 }),
    [p, m] = d(() => [o?.GetEventType(), o?.BHasTag(`vo_marketing_message`)]),
    h = p == 36,
    g = null;
  n === 2
    ? (g = (0, Z.jsx)(`span`, {
        style: { color: `#C6512B` },
        children: q(`#EventEditor_Required`),
      }))
    : n === 1
      ? (g = (0, Z.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: q(`#EventEditor_Suggested`),
        }))
      : n === 3 &&
        (g = (0, Z.jsx)(`span`, {
          style: { color: `#D7BC86` },
          children: q(`#EventEditor_Requested`),
        }));
  let _ = null;
  t === `capsule`
    ? (_ = h
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`strong`, {
                    children: q(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  q(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`strong`, {
                    children: q(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  q(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              !!m &&
                (0, Z.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, Z.jsx)(`p`, {
                      children: q(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, Z.jsx)(`p`, {
                      children: (0, Z.jsx)(`a`, {
                        href: `${J.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: q(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`strong`, {
                    children: q(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  q(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`strong`, {
                    children: q(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  q(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : t === `background`
      ? (_ = (0, Z.jsx)(Z.Fragment, {
          children: (0, Z.jsxs)(`p`, {
            children: [
              (0, Z.jsx)(`strong`, {
                children: q(`#selectimage_tip_design_title`),
              }),
              `: `,
              q(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : t === `spotlight` || t === `localized_store_app_spotlight`
        ? (_ = (0, Z.jsx)(Z.Fragment, {
            children: (0, Z.jsxs)(`p`, {
              children: [
                (0, Z.jsx)(`strong`, {
                  children: q(`#selectimage_tip_usage_title`),
                }),
                `: `,
                q(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : t === `localized_store_app_spotlight_mobile`
          ? (_ = (0, Z.jsx)(Z.Fragment, {
              children: (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`strong`, {
                    children: q(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  q(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : t === `broadcast_left` || t === `broadcast_right`
            ? (_ = (0, Z.jsx)(Z.Fragment, {
                children: (0, Z.jsx)(`p`, {
                  children: q(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : t === `sale_header`
              ? (_ = (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: nt,
                      children: q(`#selectimage_tip_required_title`),
                    }),
                    (0, Z.jsxs)(`p`, {
                      children: [
                        (0, Z.jsx)(`b`, {
                          children: q(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        q(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, Z.jsxs)(`p`, {
                      children: [
                        (0, Z.jsx)(`b`, {
                          children: q(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        q(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, Z.jsx)(`p`, {
                      children: q(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, Z.jsxs)(`p`, {
                      children: [
                        (0, Z.jsx)(`b`, {
                          children: q(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, Z.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: q(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`br`, {}),
                  ],
                }))
              : t === `hero`
                ? f &&
                  (_ = (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`p`, {
                        children: q(`#selectimage_tip_hero_1`),
                      }),
                      !f.GetAssets()?.GetLibraryHeroURL() &&
                        (0, Z.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: q(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : (_ =
                    t === `localized_image_group` ||
                    t === `link_capsule` ||
                    t === `sale_section_title` ||
                    t === `schedule_track_art` ||
                    t === `localized_background_art`
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(`p`, {
                              children: q(`#ImagePickerLoc_Desc`),
                            }),
                            (0, Z.jsx)(`p`, {
                              children: ot(
                                `#ImagePickerLoc_Files`,
                                (0, Z.jsx)(`a`, {
                                  href: ji,
                                  target: J.IN_CLIENT ? void 0 : `_blank`,
                                  children: q(`#ImagePickerLoc_URL`),
                                }),
                              ),
                            }),
                          ],
                        })
                      : t === `product_banner`
                        ? (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(`div`, {
                                className: Ee,
                                children: q(`#selectimage_tip_optional_title`),
                              }),
                              (0, Z.jsxs)(`p`, {
                                children: [
                                  (0, Z.jsx)(`b`, {
                                    children: q(`#selectimage_tip_usage_title`),
                                  }),
                                  `: `,
                                  q(`#selectimage_tip_sale_product_banner`),
                                ],
                              }),
                            ],
                          })
                        : t === `product_mobile_banner` ||
                            t === `product_banner_override` ||
                            t === `product_mobile_banner_override`
                          ? (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(`div`, {
                                  className: Ee,
                                  children: q(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, Z.jsxs)(`p`, {
                                  children: [
                                    (0, Z.jsx)(`b`, {
                                      children: q(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    q(`#selectimage_tip_sale_product_banner`),
                                    t === `product_mobile_banner` &&
                                      (0, Z.jsxs)(`span`, {
                                        children: [
                                          `  `,
                                          q(
                                            `#selectimage_tip_sale_product_banner_mobile`,
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : t === `tab_bar_background`
                            ? (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  (0, Z.jsxs)(`p`, {
                                    children: [
                                      (0, Z.jsx)(`strong`, {
                                        children: q(
                                          `#selectimage_tip_design_title`,
                                        ),
                                      }),
                                      `:`,
                                      q(`#Sale_Tabs_Background_Design`),
                                    ],
                                  }),
                                  (0, Z.jsxs)(`p`, {
                                    children: [
                                      (0, Z.jsx)(`strong`, {
                                        children: q(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `:`,
                                      q(`#Sale_Tabs_Background_Usage`),
                                    ],
                                  }),
                                ],
                              })
                            : t === `sale_logo`
                              ? (0, Z.jsxs)(Z.Fragment, {
                                  children: [
                                    (0, Z.jsx)(`div`, {
                                      className: Ee,
                                      children: q(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, Z.jsxs)(`p`, {
                                      children: [
                                        (0, Z.jsx)(`b`, {
                                          children: q(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        q(`#selectimage_tip_pageLogo`),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, Z.jsxs)(Z.Fragment, {
                                  children: [
                                    (0, Z.jsx)(`div`, {
                                      className: nt,
                                      children: q(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, Z.jsxs)(`p`, {
                                      children: [
                                        (0, Z.jsx)(`b`, {
                                          children: q(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        q(`#selectimage_tip_bestofyear`),
                                      ],
                                    }),
                                  ],
                                }));
  let v = re[e.artworkType].width,
    y = re[e.artworkType].height;
  return (0, Z.jsxs)(`div`, {
    id: e.id,
    className: Ar,
    children: [
      !!e.title &&
        (0, Z.jsxs)(`div`, {
          className: `Y63LZFKwGXE-`,
          onDoubleClick: i,
          children: [
            e.title,
            (0, Z.jsx)(`span`, { children: `\xA0` }),
            g,
            i &&
              (0, Z.jsx)(K, {
                onClick: i,
                children: (0, Z.jsx)(Ke, {
                  toolTipContent: q(
                    e.bIsMinimized
                      ? `#Sale_Section_Maximize_Tooltip`
                      : `#Sale_Section_Minimize_Tooltip`,
                  ),
                  children: e.bIsMinimized
                    ? (0, Z.jsx)(Ce, {})
                    : (0, Z.jsx)(Xe, {}),
                }),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, Z.jsxs)(`div`, {
          className: Y(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(v && y) &&
              (0, Z.jsxs)(`p`, {
                children: [
                  (0, Z.jsx)(`b`, {
                    children: q(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  ot(`#selectimage_tip1`, me(v), me(y)),
                ],
              }),
            !!e.strWarning &&
              (0, Z.jsx)(`div`, {
                children: (0, Z.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: e.strWarning,
                }),
              }),
            e.elEventArtworkExample,
            `\xA0`,
            (0, Z.jsx)(`br`, {}),
            e.elAdditionalControls,
            !!e.fnRemoveAllArtwork &&
              (0, Z.jsx)(K, {
                onClick: (t) => {
                  G(
                    (0, Z.jsx)(Pi, {
                      fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                    }),
                    at(t) ?? window,
                  );
                },
                children: q(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !e.bIsMinimized &&
        (0, Z.jsx)(Fi, {
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
function Pi(e) {
  let { fnRemoveAllArtwork: t, closeModal: n } = e;
  return (0, Z.jsx)(U, {
    strTitle: q(`#Sale_RemoveAll`),
    strDescription: q(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      t?.(), n?.();
    },
    onCancel: n,
  });
}
function Fi(e) {
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
    [f, p] = X.useState(B()),
    [m, h] = X.useState([]),
    g = X.useCallback(
      (e, t, n) => {
        let r = [];
        m.find((t) => t.clanImage.imageid == e.imageid)
          ? (r = m.map((n) =>
              n.clanImage.imageid == e.imageid ? { clanImage: e, lang: t } : n,
            ))
          : n && (r = m.concat({ clanImage: e, lang: t })),
          h(r);
      },
      [m],
    ),
    _ = X.useCallback(
      (e, n, i) => {
        r(() => {
          Ur(o(t, n) ?? ``) == e.image_hash && s(t, null, n),
            s(t, e, i),
            g(e, i, !1);
        });
      },
      [o, t, s, g],
    );
  return t === `hero`
    ? (0, Z.jsx)(`div`, {
        style: { padding: `16px` },
        children: (0, Z.jsx)(K, {
          style: { textTransform: `uppercase`, width: `200px` },
          onClick: () =>
            window.open(
              `${J.PARTNER_BASE_URL}admin/game/editbyappid/${l}?activetab=tab_graphicalassets`,
            ),
          children: q(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(Ii, {
            list: m,
            fnOnArtworkLanguageChange: _,
            realms: n,
            fnLangHasData: a,
          }),
          (0, Z.jsx)(`div`, {
            children: (0, Z.jsx)(`div`, {
              className: Y(Tr, Er),
              children: (0, Z.jsx)(bi, {
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
var Ii = class extends X.Component {
  ShowLangChangeDialog(e, t) {
    let {
      fnOnArtworkLanguageChange: n,
      realms: r,
      fnLangHasData: i,
    } = this.props;
    G(
      (0, Z.jsx)(Hr, {
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
          i = q(`#Language_` + Se(r));
        e.push(
          (0, Z.jsxs)(
            `div`,
            {
              className: qe,
              children: [
                (0, Z.jsx)(`span`, {
                  children: q(
                    `#ImageUpload_Success_Mapping`,
                    n.file_name ?? ``,
                    i,
                  ),
                }),
                (0, Z.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(n, r),
                  children: q(`#ImageUpload_Success_Mapping_Change`),
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
    if (!e || e.length == 0) return (0, Z.jsx)(`div`, {});
    let t = this.GenerateImageMappings();
    return (0, Z.jsx)(`div`, { className: Vr, children: t });
  }
};
be([je], Ii.prototype, `ShowLangChangeDialog`, null), (Ii = be([i], Ii));
var Li = `_0K9D8c3MMwY-`,
  Ri = `b19PwxErdL4-`,
  zi = `YHd3rTa2Hms-`,
  Bi = i((e) => {
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
      [u, d] = X.useState(),
      [f, p] = X.useState(!0),
      [m, h] = X.useState(),
      g = $e(() => Q.default.CancelToken.source());
    X.useEffect(
      () => () => g.cancel(`LocalizedImageDialog component unmounted`),
      [g],
    );
    let _ = X.useCallback(async () => {
        try {
          let e = H.InitFromClanID(i.clanAccountID, J.EUNIVERSE),
            t = await y.AsyncGetImageResolution(
              e,
              i.image_hash,
              i.file_type,
              g,
              !1,
            );
          if (g.token.reason) return;
          if (t.success != 1 || !t.width || !t.height) {
            console.error(
              `LocalizedImageDialog : failed to determine the primary image resolution. ` +
                (t.err_msg ?? ``),
            ),
              h({ strMsg: t.err_msg });
            return;
          }
          h(void 0), d(t);
        } catch (e) {
          let t = V(e);
          console.error(`LocalizedImageDialog : ` + t.strErrorMsg, t),
            h({ strMsg: t.strErrorMsg });
        }
      }, [g, i.clanAccountID, i.file_type, i.image_hash]),
      v = X.useCallback(async () => {
        try {
          await Dn.DetermineAvailableLocalizationForGroup(g),
            g.token.reason || p(!1);
        } catch (e) {
          let t = V(e);
          console.error(`LocalizedImageDialog : ` + t.strErrorMsg, t);
        }
      }, [g]),
      b = X.useCallback(() => _().then(v), [v, _]),
      x = X.useCallback(() => {
        h(void 0), b();
      }, [b]);
    X.useEffect(() => {
      t && (Dn.SetPrimaryImageForImageGroup(i, `localized_image_group`), b());
    }, [t, b, i]);
    let S = !f && u,
      T = u ? ` - ${u.width}x${u.height}` : ``,
      E = C(i.file_type).slice(1),
      D = u?.width && u?.height ? { width: u.width, height: u.height } : void 0,
      O = y.GenerateURLFromHashAndExt(a, y.GetHashAndExt(i));
    return (0, Z.jsx)(et, {
      bAllowFullSize: !0,
      title: q(`#ImagePickerLoc_Title`),
      onCancel: t,
      closeModal: t,
      children: (0, Z.jsx)(De, {
        children: (0, Z.jsxs)(we, {
          children: [
            (0, Z.jsx)(`div`, {
              className: qe,
              children: (0, Z.jsxs)(`span`, {
                className: Ze,
                children: [
                  (0, Z.jsxs)(`div`, {
                    children: [
                      q(`#ImagePickerLoc_Default`),
                      (0, Z.jsx)(Ye, {
                        tooltip: q(`#ImagePickerLoc_Default_Hint`),
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`img`, { className: Wr, src: O }),
                  (0, Z.jsx)(`div`, { children: i.file_name + T + ` - ` + E }),
                ],
              }),
            }),
            !!m &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`div`, { children: q(`#Error_Message`) }),
                  !!m?.strMsg && (0, Z.jsx)(`div`, { children: m.strMsg }),
                  (0, Z.jsx)(`div`, {
                    className: `yYL-OrX9PtQ-`,
                    onClick: x,
                    children: q(`#Button_Retry`),
                  }),
                ],
              }),
            !S &&
              !m &&
              (0, Z.jsx)(w, { position: `center`, string: q(`#Loading`) }),
            S &&
              (0, Z.jsxs)(X.Fragment, {
                children: [
                  (0, Z.jsx)(hr, {
                    clanSteamID: a,
                    rgSupportArtwork: [],
                    localizedPrimaryImage: i,
                    forceResolution: D,
                    bAllowPreviousClanImageSelection: !0,
                    fnSetImageURL: o,
                    rgRealmList: s,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `D-rfVSNga3g-`,
                    children: (0, Z.jsx)(Ni, {
                      clanSteamID: a,
                      eventModel: void 0,
                      artworkType: `localized_image_group`,
                      title: q(`#ImagePickerLoc_Title`),
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
  Vi = 1,
  Hi = i((e) => {
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
      [d, f] = X.useState(``),
      [p, m] = X.useState(0),
      [h, g] = X.useState(),
      [_, v] = X.useState(void 0),
      [y, b] = X.useState(!z.BHasLoadedClanImages(t)),
      [x, S] = X.useState(void 0),
      C = $e(() => Q.default.CancelToken.source());
    X.useEffect(
      () => () => C.cancel(`ClanImagePicker component unmounted`),
      [C],
    );
    let T = $e(() => new Map()),
      [E, D] = (0, X.useState)(null),
      { bClanImagesV2: O } = zn(),
      k = t.GetAccountID(),
      A = X.useCallback(() => z.LoadClanImages(t, !1, C.token), [C, k]),
      j = X.useCallback(async () => {
        if (!T.has(t.GetAccountID()))
          try {
            await A(), C.token.reason || b(!1);
          } catch (e) {
            let n = V(e);
            console.error(
              `ClanImagePicker Failed: ` +
                n.strErrorMsg +
                ` errCode: ` +
                n.strErrorMsg,
            ),
              T.set(t.GetAccountID(), n.strErrorMsg),
              C.token.reason || (b(!1), S(n.strErrorMsg));
          }
      }, [C, t, T, A]);
    X.useEffect(() => {
      y && j();
    }, [j, y]);
    let M = X.useCallback(() => {
      b(!0), j();
    }, [j]);
    X.useEffect(() => {
      M();
    }, [k, M]);
    let N = z.BHasLoadedClanImages(t);
    X.useEffect(() => {
      N || M();
    }, [N, M]);
    let P = () => {
        f(d), m(null);
      },
      ee = async (e) => {
        if (e && e.length > 0) {
          let n = O ? new se(t, null) : new de(t, null);
          D(n);
          let r = !0,
            i = Array.from(e);
          for (let e = 0; r && e < i.length; e++) {
            let t = i[e];
            (r = await n.AddImage(t, 0)),
              r ||
                (console.error(
                  `ClanImagePicker.OnDropFiles: failed on i=` +
                    e +
                    ` file=` +
                    t.name,
                ),
                G(
                  (0, Z.jsx)(W, {
                    strDescription: q(`#ImagePicker_Error`, t.name),
                  }),
                  window,
                ));
          }
          return r && (f(``), m(++Vi), n.UploadAllImages()), r;
        }
        return !1;
      },
      F = (e) => {
        if (e && o) {
          let n = z.GetFilteredClanImages(t, d.trim().toLowerCase()),
            r = n.findIndex((t, n, r) => e.imageid == t.imageid);
          r >= 0 && (g(r), v(n));
        }
      },
      I = () => {
        g(void 0), v(void 0);
      },
      L = (e) => {
        if (h != null) {
          let t = _[h];
          I(),
            requestAnimationFrame(() => {
              r(t, e);
            });
        }
      },
      R = () => {
        L($.k_eInsertFullImage);
      },
      te = () => {
        L($.k_eInsertThumbnail);
      },
      ne = (e) => {
        G(
          (0, Z.jsx)(Bi, {
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
      return (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { children: q(`#Error_Message`) }),
          (0, Z.jsx)(`div`, { children: x }),
          (0, Z.jsx)(`div`, {
            className: Y(Je),
            onClick: j,
            children: q(`#Button_Retry`),
          }),
        ],
      });
    if (y) return (0, Z.jsx)(w, { position: `center`, string: q(`#Loading`) });
    let B = _;
    return (0, Z.jsxs)(`div`, {
      className: Y(Li),
      children: [
        (0, Z.jsx)(gn, { fnSetImageSearch: (e) => f(e) }),
        (0, Z.jsx)(`div`, {
          className: Ri,
          children: (0, Z.jsx)(_n, {
            clanAccountID: t.GetAccountID(),
            fileNameSearch: d,
            imageInsertCallBack: r,
            fnOnExpandImage: F,
            InternalOpenLocalizeImageGroup: ne,
          }),
        }),
        p > 0 &&
          (0, Z.jsx)(
            Wi,
            { uploader: E, onDismiss: P },
            `clanimageuploaderview` + p,
          ),
        !a && (0, Z.jsx)(Qn, { onDropFiles: ee }),
        h != null &&
          (0, Z.jsx)(Ut, {
            mainSrc: B[h].url,
            imageTitle: B[h].file_name,
            nextSrc: h < B.length - 1 ? B[h + 1].url : void 0,
            prevSrc: h > 0 ? B[h - 1].url : void 0,
            onMoveNextRequest: () => g(h + 1),
            onMovePrevRequest: () => g(h - 1),
            onCloseRequest: I,
            toolbarButtons: [
              (0, Z.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: R,
                  children: q(`#ImagePicker_FullSize`),
                },
                `fullsize`,
              ),
              (0, Z.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: te,
                  children: q(`#ImagePicker_Thumbnail`),
                },
                `thumbnail`,
              ),
            ],
          }),
        (0, Z.jsx)(Ui, {}),
      ],
    });
  });
function Ui(e) {
  let { bClanImagesV2: t, bClanImagesV2Allowed: n, setClanImagesV2: r } = zn();
  return (0, Z.jsx)(Z.Fragment, {
    children:
      n &&
      r &&
      (0, Z.jsx)(Re, {
        className: `_0Ja-rgK4nrE-`,
        label: `New media conversion`,
        checked: t,
        onChange: (e) => r(e),
      }),
  });
}
function Wi(e) {
  let { uploader: t, onDismiss: n } = e,
    [r, i] = d(() => [t.BAllDone(), !t.BAllDone() && !t.BHasError()]),
    a = t.GetLastErrorFile();
  return (0, Z.jsxs)(`div`, {
    className: zi,
    children: [
      i &&
        (0, Z.jsxs)(`div`, {
          className: `zUOcF2T681w-`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `_8o2e76PWsg4-`,
              children: q(
                `#ImageUpload_Desc`,
                t.GetCompletedFiles(),
                t.GetTotalFiles(),
              ),
            }),
            (0, Z.jsx)(`button`, {
              className: `DialogButton`,
              onClick: () => {
                t.CancelAllUploads(), n();
              },
              children: q(`#Button_Cancel`),
            }),
          ],
        }),
      t.BHasError() &&
        a &&
        (0, Z.jsxs)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `c62o1ZlOdck-`,
              children: q(
                `#ImageUpload_Error`,
                a.file.name,
                a.status,
                a.message,
              ),
            }),
            (0, Z.jsx)(`button`, {
              className: void 0,
              onClick: n,
              children: q(`#Button_Cancel`),
            }),
            (0, Z.jsx)(`button`, {
              className: void 0,
              onClick: () => t.RetryAllFailedUploads(),
              children: q(`#Button_Retry`),
            }),
          ],
        }),
      !!r &&
        (0, Z.jsx)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: (0, Z.jsx)(`div`, {
            className: `nulT7BBB8Xc-`,
            children: q(`#ImageUpload_Success`),
          }),
        }),
    ],
  });
}
export {
  Ln as A,
  Jt as B,
  er as C,
  Jn as D,
  Yn as E,
  Tn as F,
  _t as G,
  Kt as H,
  yn as I,
  ht as K,
  gn as L,
  An as M,
  On as N,
  Pn as O,
  Dn as P,
  pn as R,
  sr as S,
  Zn as T,
  Gt as U,
  Yt as V,
  Nt as W,
  Dr as _,
  Kr as a,
  lr as b,
  Fr as c,
  Ir as d,
  Rr as f,
  Tr as g,
  Mr as h,
  Ni as i,
  jn as j,
  Fn as k,
  zr as l,
  Nr as m,
  Bi as n,
  Ur as o,
  Lr as p,
  Mi as r,
  Ar as s,
  Hi as t,
  Br as u,
  jr as v,
  Qn as w,
  cr as x,
  hr as y,
  $ as z,
};
