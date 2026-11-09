/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./rolldown-runtime.js";
import {
  F as r,
  It as i,
  L as a,
  Lt as o,
  N as s,
  Pt as c,
  Z as l,
  dt as u,
  f as d,
  ft as f,
  lt as p,
  nt as m,
  ot as h,
  st as g,
} from "./libraries.js";
import { V as _ } from "./storelink.js";
import { Et as v, Ot as y, kr as b, tt as x } from "./saletags.js";
import { t as S } from "./storeurl.js";
import { a as C, i as w } from "./image.js";
import { t as T } from "./usehotkeys.js";
import "./modals.js";
import { t as E } from "./throbber.js";
import { t as D } from "./languagepicker.js";
import { N as ee } from "./partnereventshared.module.js";
import { n as te } from "./lazyrenderchildren.js";
import { t as ne } from "./sharewithfriends.js";
import { n as re } from "./getprofileurl.js";
import {
  $_ as ie,
  $d as O,
  $f as ae,
  $g as oe,
  $h as se,
  $m as ce,
  $p as le,
  $x as k,
  A_ as ue,
  Ad as de,
  Af as fe,
  Ag as pe,
  Ah as me,
  Am as he,
  Ap as ge,
  B_ as _e,
  Bd as ve,
  Bf as ye,
  Bg as be,
  Bh as xe,
  Bi as Se,
  Bm as Ce,
  Bp as we,
  C_ as Te,
  Cb as Ee,
  Cc as De,
  Cd as Oe,
  Cf as ke,
  Cg as Ae,
  Cm as je,
  Cp as Me,
  D_ as Ne,
  Dd as Pe,
  Df as Fe,
  Dg as Ie,
  Dh as Le,
  Dm as Re,
  Do as ze,
  Dp as Be,
  E_ as Ve,
  Ed as He,
  Ef as Ue,
  Eh as We,
  Em as Ge,
  En as Ke,
  Ep as qe,
  Ex as Je,
  F_ as Ye,
  Fd as Xe,
  Ff as Ze,
  Fg as Qe,
  Fh as $e,
  Fm as et,
  Fp as tt,
  G_ as nt,
  Gb as rt,
  Gd as it,
  Gf as at,
  Gg as ot,
  Gh as st,
  Gi as ct,
  Gm as lt,
  Gp as ut,
  H_ as dt,
  Hb as ft,
  Hd as pt,
  Hf as mt,
  Hg as ht,
  Hh as gt,
  Hm as _t,
  Hp as vt,
  I_ as yt,
  Id as bt,
  If as xt,
  Ig as St,
  Ih as Ct,
  Ii as wt,
  Im as Tt,
  Ip as Et,
  Ir as Dt,
  Iu as Ot,
  Iy as kt,
  J_ as At,
  Jc as jt,
  Jd as Mt,
  Jf as Nt,
  Jg as Pt,
  Jh as Ft,
  Jm as It,
  Jp as Lt,
  Ju as Rt,
  K_ as zt,
  Kd as Bt,
  Kf as Vt,
  Kg as Ht,
  Kh as Ut,
  Km as Wt,
  Kn as Gt,
  Kp as Kt,
  L_ as qt,
  Ld as Jt,
  Lf as Yt,
  Lg as Xt,
  Lh as Zt,
  Lm as Qt,
  Lp as $t,
  M_ as en,
  Md as tn,
  Mf as nn,
  Mg as rn,
  Mh as an,
  Mm as on,
  Mn as sn,
  Mp as cn,
  N_ as ln,
  Nd as un,
  Nf as dn,
  Ng as fn,
  Nh as pn,
  Nm as mn,
  Np as hn,
  O_ as gn,
  Od as _n,
  Of as vn,
  Og as yn,
  Oh as bn,
  Om as xn,
  Op as Sn,
  P_ as Cn,
  Pd as wn,
  Pf as Tn,
  Pg as En,
  Ph as Dn,
  Pm as On,
  Pp as kn,
  Q_ as An,
  Qb as jn,
  Qd as Mn,
  Qf as Nn,
  Qg as Pn,
  Qh as Fn,
  Qi as In,
  Qm as Ln,
  Qp as Rn,
  Qx as A,
  R_ as zn,
  Ra as Bn,
  Rb as Vn,
  Rd as Hn,
  Rf as Un,
  Rg as Wn,
  Rh as Gn,
  Rp as Kn,
  Rr as qn,
  Rv as Jn,
  S_ as Yn,
  Sb as j,
  Sc as Xn,
  Sd as Zn,
  Sf as Qn,
  Sg as $n,
  Sh as er,
  Sm as tr,
  Sp as nr,
  St as rr,
  T_ as ir,
  Tc as ar,
  Td as or,
  Tf as sr,
  Tg as cr,
  Th as lr,
  Tm as ur,
  Tp as dr,
  Tv as fr,
  U_ as pr,
  Ud as mr,
  Uf as hr,
  Ug as gr,
  Uh as _r,
  Um as vr,
  Up as yr,
  Uu as br,
  V_ as xr,
  Vd as Sr,
  Vf as Cr,
  Vg as wr,
  Vh as Tr,
  Vm as Er,
  Vp as Dr,
  Vr as Or,
  Vs as kr,
  W_ as Ar,
  Wd as jr,
  Wf as Mr,
  Wg as Nr,
  Wh as Pr,
  Wm as Fr,
  Wp as Ir,
  Wu as Lr,
  X_ as Rr,
  Xd as zr,
  Xf as Br,
  Xg as Vr,
  Xh as Hr,
  Xi as Ur,
  Xm as Wr,
  Xp as Gr,
  Xx as M,
  Y_ as Kr,
  Yb as qr,
  Yd as Jr,
  Yf as Yr,
  Yg as Xr,
  Yh as Zr,
  Yi as Qr,
  Ym as $r,
  Yp as ei,
  Yx as N,
  Z_ as ti,
  Zd as ni,
  Zf as ri,
  Zg as ii,
  Zh as ai,
  Zm as oi,
  Zp as si,
  Zx as P,
  __ as ci,
  _c as li,
  _f as ui,
  _g as di,
  _h as fi,
  _m as pi,
  _p as mi,
  _t as hi,
  _v as gi,
  a_ as _i,
  af as vi,
  ag as yi,
  ah as bi,
  am as xi,
  ao as Si,
  ap as Ci,
  av as wi,
  b_ as Ti,
  bf as Ei,
  bg as Di,
  bh as Oi,
  bm as ki,
  bp as Ai,
  bt as ji,
  c_ as Mi,
  cf as Ni,
  cg as Pi,
  ch as Fi,
  cm as Ii,
  cp as Li,
  d_ as Ri,
  df as zi,
  dg as Bi,
  dh as Vi,
  dm as Hi,
  dp as Ui,
  dv as Wi,
  eS as F,
  e_ as Gi,
  ef as Ki,
  eg as qi,
  eh as Ji,
  em as Yi,
  ep as Xi,
  es as Zi,
  f_ as Qi,
  fd as $i,
  ff as ea,
  fg as ta,
  fh as na,
  fm as ra,
  fp as ia,
  g_ as aa,
  gc as oa,
  gf as sa,
  gg as ca,
  gh as la,
  gm as ua,
  gp as da,
  gr as fa,
  h_ as pa,
  hf as ma,
  hg as ha,
  hh as ga,
  hm as _a,
  hp as va,
  ht as ya,
  hx as ba,
  i_ as xa,
  if as Sa,
  ig as Ca,
  ih as wa,
  im as Ta,
  ip as Ea,
  iy as Da,
  j_ as Oa,
  jd as ka,
  jg as Aa,
  jh as ja,
  jm as Ma,
  jp as Na,
  k_ as Pa,
  kc as Fa,
  kd as Ia,
  kf as La,
  kg as Ra,
  kh as za,
  ki as Ba,
  km as Va,
  kp as Ha,
  kv as Ua,
  lS as Wa,
  l_ as Ga,
  lf as Ka,
  lg as qa,
  lh as Ja,
  lm as Ya,
  lp as Xa,
  ls as Za,
  lv as Qa,
  mS as $a,
  m_ as eo,
  mf as to,
  mg as no,
  mh as ro,
  ml as io,
  mm as ao,
  mp as oo,
  nS as I,
  n_ as so,
  nf as co,
  ng as lo,
  nh as uo,
  nl as fo,
  nm as po,
  np as mo,
  o_ as ho,
  of as go,
  og as _o,
  oh as vo,
  om as yo,
  op as bo,
  p_ as xo,
  pd as So,
  pg as Co,
  ph as wo,
  pl as To,
  pp as Eo,
  q_ as Do,
  qd as Oo,
  qf as ko,
  qg as Ao,
  qh as jo,
  qm as Mo,
  qp as No,
  qu as Po,
  qx as Fo,
  r_ as Io,
  rf as Lo,
  rg as Ro,
  rh as zo,
  rm as Bo,
  rp as Vo,
  s_ as Ho,
  sc as Uo,
  sf as Wo,
  sg as Go,
  sh as Ko,
  sm as qo,
  sp as Jo,
  tS as L,
  t_ as Yo,
  tg as Xo,
  th as Zo,
  tm as Qo,
  tp as $o,
  u_ as es,
  uf as ts,
  ug as ns,
  uh as rs,
  um as is,
  up as as,
  ut as os,
  v_ as ss,
  vf as cs,
  vg as ls,
  vh as us,
  vm as ds,
  vp as fs,
  w_ as ps,
  wd as ms,
  wf as hs,
  wg as gs,
  wh as _s,
  wm as vs,
  wp as ys,
  x_ as bs,
  xb as xs,
  xf as Ss,
  xg as Cs,
  xh as ws,
  xm as Ts,
  xp as Es,
  y_ as Ds,
  yc as Os,
  yd as ks,
  yf as As,
  yg as js,
  yh as Ms,
  ym as Ns,
  yp as Ps,
  z_ as Fs,
  zb as Is,
  zd as Ls,
  zf as Rs,
  zg as zs,
  zh as Bs,
  zm as Vs,
  zp as Hs,
  zr as Us,
} from "./main.js";
import { y as Ws } from "./steammessages_familygroups_pb.js";
import { t as Gs } from "./steamavatar.js";
import { t as Ks } from "./videoautopauseonblur.js";
import { i as qs, n as Js } from "./achievementiconbase.js";
import { r as Ys, t as Xs } from "./useavatarandpersona.js";
import { n as R, r as Zs, t as Qs } from "./localization.js";
import { t as $s } from "./userprofile.js";
function ec(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ec(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function z() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ec(e)) && (r && (r += ` `), (r += t));
  return r;
}
var tc =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function nc(e) {
  return typeof e == `string` && tc.includes(e);
}
var B = e(o()),
  rc =
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    );
function ic(e) {
  return typeof e == `string` && rc.includes(e);
}
function ac(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function oc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return ic(t) || ac(t);
  });
  return Object.fromEntries(t);
}
function sc(e) {
  if (e == null) return null;
  if (
    (0, B.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return oc(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? oc(e) : null;
}
function cc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return ic(t) || ac(t) || nc(t);
  });
  return Object.fromEntries(t);
}
function lc(e) {
  return e == null
    ? null
    : (0, B.isValidElement)(e)
      ? cc(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? cc(e)
        : null;
}
var uc = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function dc() {
  return (
    (dc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dc.apply(null, arguments)
  );
}
function fc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = pc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function pc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var mc = (0, B.forwardRef)((e, t) => {
    var {
        children: n,
        width: r,
        height: i,
        viewBox: a,
        className: o,
        style: s,
        title: c,
        desc: l,
      } = e,
      u = fc(e, uc),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = z(`recharts-surface`, o);
    return B.createElement(
      `svg`,
      dc({}, cc(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      B.createElement(`title`, null, c),
      B.createElement(`desc`, null, l),
      n,
    );
  }),
  hc = [`children`, `className`];
function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gc.apply(null, arguments)
  );
}
function _c(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function vc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var yc = B.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = _c(e, hc),
      a = z(`recharts-layer`, r);
    return B.createElement(`g`, gc({ className: a }, cc(i), { ref: t }), n);
  }),
  bc = (0, B.createContext)(null),
  xc = () => (0, B.useContext)(bc);
function Sc(e) {
  return function () {
    return e;
  };
}
var Cc = Math.cos,
  wc = Math.sin,
  Tc = Math.sqrt,
  Ec = Math.PI;
Ec / 2;
var Dc = 2 * Ec,
  Oc = Math.PI,
  kc = 2 * Oc,
  Ac = 1e-6,
  jc = kc - Ac;
function Mc(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Nc(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Mc;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Pc = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Mc : Nc(e)));
  }
  moveTo(e, t) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
  }
  quadraticCurveTo(e, t, n, r) {
    this._append`Q${+e},${+t},${(this._x1 = +n)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    this._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(e, t, n, r, i) {
    if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i), i < 0))
      throw Error(`negative radius: ${i}`);
    let a = this._x1,
      o = this._y1,
      s = n - e,
      c = r - t,
      l = a - e,
      u = o - t,
      d = l * l + u * u;
    if (this._x1 === null) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
    else if (d > Ac) {
      if (!(Math.abs(u * s - c * l) > Ac) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((Oc - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > Ac && this._append`L${e + y * l},${t + y * u}`,
          this._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`);
      }
    }
  }
  arc(e, t, n, r, i, a) {
    if (((e = +e), (t = +t), (n = +n), (a = !!a), n < 0))
      throw Error(`negative radius: ${n}`);
    let o = n * Math.cos(r),
      s = n * Math.sin(r),
      c = e + o,
      l = t + s,
      u = 1 ^ a,
      d = a ? r - i : i - r;
    (this._x1 === null
      ? this._append`M${c},${l}`
      : (Math.abs(this._x1 - c) > Ac || Math.abs(this._y1 - l) > Ac) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % kc) + kc),
        d > jc
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > Ac &&
            this._append`A${n},${n},0,${+(d >= Oc)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
Pc.prototype;
function Fc(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        let e = Math.floor(n);
        if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
        t = e;
      }
      return e;
    }),
    () => new Pc(t)
  );
}
Array.prototype.slice;
function Ic(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Lc(e) {
  this._context = e;
}
Lc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
    }
  },
};
function Rc(e) {
  return new Lc(e);
}
function zc(e) {
  return e[0];
}
function Bc(e) {
  return e[1];
}
function Vc(e, t) {
  var n = Sc(!0),
    r = null,
    i = Rc,
    a = null,
    o = Fc(s);
  ((e = typeof e == `function` ? e : e === void 0 ? zc : Sc(e)),
    (t = typeof t == `function` ? t : t === void 0 ? Bc : Sc(t)));
  function s(s) {
    var c,
      l = (s = Ic(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      (!(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s)));
    if (f) return ((a = null), f + `` || null);
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Sc(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Sc(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : Sc(!!e)), s)
        : n;
    }),
    (s.curve = function (e) {
      return arguments.length ? ((i = e), r != null && (a = i(r)), s) : i;
    }),
    (s.context = function (e) {
      return arguments.length
        ? (e == null ? (r = a = null) : (a = i((r = e))), s)
        : r;
    }),
    s
  );
}
function Hc(e, t, n) {
  var r = null,
    i = Sc(!0),
    a = null,
    o = Rc,
    s = null,
    c = Fc(l);
  ((e = typeof e == `function` ? e : e === void 0 ? zc : Sc(+e)),
    (t = typeof t == `function` ? t : Sc(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? Bc : Sc(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = Ic(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h) {
        if ((h = !h)) ((d = u), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          (s.lineEnd(), s.areaEnd());
        }
      }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return ((s = null), g + `` || null);
  }
  function u() {
    return Vc().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Sc(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Sc(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : Sc(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Sc(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Sc(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : Sc(+e)), l)
        : n;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return u().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return u().x(e).y(n);
    }),
    (l.lineX1 = function () {
      return u().x(r).y(t);
    }),
    (l.defined = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : Sc(!!e)), l)
        : i;
    }),
    (l.curve = function (e) {
      return arguments.length ? ((o = e), a != null && (s = o(a)), l) : o;
    }),
    (l.context = function (e) {
      return arguments.length
        ? (e == null ? (a = s = null) : (s = o((a = e))), l)
        : a;
    }),
    l
  );
}
var Uc = class {
  constructor(e, t) {
    ((this._context = e), (this._x = t));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e) / 2),
              this._y0,
              this._x0,
              t,
              e,
              t,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t) / 2),
              e,
              this._y0,
              e,
              t,
            );
    }
    ((this._x0 = e), (this._y0 = t));
  }
};
function Wc(e) {
  return new Uc(e, !0);
}
function Gc(e) {
  return new Uc(e, !1);
}
var Kc = {
    draw(e, t) {
      let n = Tc(t / Ec);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Dc));
    },
  },
  qc = {
    draw(e, t) {
      let n = Tc(t / 5) / 2;
      (e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath());
    },
  },
  Jc = Tc(1 / 3),
  Yc = Jc * 2,
  Xc = {
    draw(e, t) {
      let n = Tc(t / Yc),
        r = n * Jc;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  Zc = {
    draw(e, t) {
      let n = Tc(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Qc = 0.8908130915292852,
  $c = wc(Ec / 10) / wc((7 * Ec) / 10),
  el = wc(Dc / 10) * $c,
  tl = -Cc(Dc / 10) * $c,
  nl = {
    draw(e, t) {
      let n = Tc(t * Qc),
        r = el * n,
        i = tl * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Dc * t) / 5,
          o = Cc(a),
          s = wc(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  rl = Tc(3),
  il = {
    draw(e, t) {
      let n = -Tc(t / (rl * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-rl * n, -n),
        e.lineTo(rl * n, -n),
        e.closePath());
    },
  },
  al = -0.5,
  ol = Tc(3) / 2,
  sl = 1 / Tc(12),
  cl = (sl / 2 + 1) * 3,
  ll = {
    draw(e, t) {
      let n = Tc(t / cl),
        r = n / 2,
        i = n * sl,
        a = r,
        o = n * sl + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(al * r - ol * i, ol * r + al * i),
        e.lineTo(al * a - ol * o, ol * a + al * o),
        e.lineTo(al * s - ol * c, ol * s + al * c),
        e.lineTo(al * r + ol * i, al * i - ol * r),
        e.lineTo(al * a + ol * o, al * o - ol * a),
        e.lineTo(al * s + ol * c, al * c - ol * s),
        e.closePath());
    },
  };
function ul(e, t) {
  let n = null,
    r = Fc(i);
  ((e = typeof e == `function` ? e : Sc(e || Kc)),
    (t = typeof t == `function` ? t : Sc(t === void 0 ? 64 : +t)));
  function i() {
    let i;
    if (
      ((n ||= i = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      i)
    )
      return ((n = null), i + `` || null);
  }
  return (
    (i.type = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Sc(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Sc(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function dl() {}
function fl(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function pl(e) {
  this._context = e;
}
pl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        fl(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        fl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function ml(e) {
  return new pl(e);
}
function hl(e) {
  this._context = e;
}
hl.prototype = {
  areaStart: dl,
  areaEnd: dl,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      case 2:
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      case 3:
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        fl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function gl(e) {
  return new hl(e);
}
function _l(e) {
  this._context = e;
}
_l.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        fl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function vl(e) {
  return new _l(e);
}
function yl(e) {
  this._context = e;
}
yl.prototype = {
  areaStart: dl,
  areaEnd: dl,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function bl(e) {
  return new yl(e);
}
function xl(e) {
  return e < 0 ? -1 : 1;
}
function Sl(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (xl(a) + xl(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function Cl(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function wl(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Tl(e) {
  this._context = e;
}
Tl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        wl(this, this._t0, Cl(this, this._t0));
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), e !== this._x1 || t !== this._y1)) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), wl(this, Cl(this, (n = Sl(this, e, t))), n));
          break;
        default:
          wl(this, this._t0, (n = Sl(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function El(e) {
  this._context = new Dl(e);
}
(El.prototype = Object.create(Tl.prototype)).point = function (e, t) {
  Tl.prototype.point.call(this, t, e);
};
function Dl(e) {
  this._context = e;
}
Dl.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this._context.bezierCurveTo(t, e, r, n, a, i);
  },
};
function Ol(e) {
  return new Tl(e);
}
function kl(e) {
  return new El(e);
}
function Al(e) {
  this._context = e;
}
Al.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n) {
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = jl(e), i = jl(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    }
    ((this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function jl(e) {
  var t,
    n = e.length - 1,
    r,
    i = Array(n),
    a = Array(n),
    o = Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Ml(e) {
  return new Al(e);
}
function Nl(e, t) {
  ((this._context = e), (this._t = t));
}
Nl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
        }
    }
    ((this._x = e), (this._y = t));
  },
};
function Pl(e) {
  return new Nl(e, 0.5);
}
function Fl(e) {
  return new Nl(e, 0);
}
function Il(e) {
  return new Nl(e, 1);
}
function Ll(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Rl(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function zl(e, t) {
  return e[t];
}
function Bl(e) {
  let t = [];
  return ((t.key = e), t);
}
function Vl() {
  var e = Sc([]),
    t = Rl,
    n = Ll,
    r = zl;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), Bl),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = Ic(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Sc(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : Sc(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t =
            e == null ? Rl : typeof e == `function` ? e : Sc(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Ll), i) : n;
    }),
    i
  );
}
function Hl(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Ll(e, t);
  }
}
function Ul(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Ll(e, t);
  }
}
function Wl(e, t) {
  if ((o = e.length) > 0 && (a = (i = e[t[0]]).length) > 0) {
    for (var n = 0, r = 1, i, a, o; r < a; ++r) {
      for (var s = 0, c = 0, l = 0; s < o; ++s) {
        for (
          var u = e[t[s]],
            d = u[r][1] || 0,
            f = (d - (u[r - 1][1] || 0)) / 2,
            p = 0;
          p < s;
          ++p
        ) {
          var m = e[t[p]],
            h = m[r][1] || 0,
            g = m[r - 1][1] || 0;
          f += h - g;
        }
        ((c += d), (l += f * d));
      }
      ((i[r - 1][1] += i[r - 1][0] = n), c && (n -= l / c));
    }
    ((i[r - 1][1] += i[r - 1][0] = n), Ll(e, t));
  }
}
var Gl = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  Kl = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      switch (typeof e) {
        case `number`:
        case `symbol`:
          return !1;
        case `string`:
          return e.includes(`.`) || e.includes(`[`) || e.includes(`]`);
      }
    }
    e.isDeepKey = t;
  }),
  ql = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `string` || typeof e == `symbol`
        ? e
        : Object.is(e?.valueOf?.(), -0)
          ? `-0`
          : String(e);
    }
    e.toKey = t;
  }),
  Jl = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      let t = [],
        n = e.length;
      if (n === 0) return t;
      let r = 0,
        i = ``,
        a = ``,
        o = !1;
      for (e.charCodeAt(0) === 46 && (t.push(``), r++); r < n;) {
        let s = e[r];
        (a
          ? s === `\\` && r + 1 < n
            ? (r++, (i += e[r]))
            : s === a
              ? (a = ``)
              : (i += s)
          : o
            ? s === `"` || s === `'`
              ? (a = s)
              : s === `]`
                ? ((o = !1), t.push(i), (i = ``))
                : (i += s)
            : s === `[`
              ? ((o = !0), (i &&= (t.push(i), ``)))
              : s === `.`
                ? (i &&= (t.push(i), ``))
                : (i += s),
          r++);
      }
      return (i && t.push(i), t);
    }
    e.toPath = t;
  }),
  Yl = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Gl(),
      n = Kl(),
      r = ql(),
      i = Jl();
    function a(e, s, c) {
      if (e == null) return c;
      switch (typeof s) {
        case `string`: {
          if (t.isUnsafeProperty(s)) return c;
          let r = e[s];
          return r === void 0 ? (n.isDeepKey(s) ? a(e, i.toPath(s), c) : c) : r;
        }
        case `number`:
        case `symbol`: {
          typeof s == `number` && (s = r.toKey(s));
          let t = e[s];
          return t === void 0 ? c : t;
        }
        default: {
          if (Array.isArray(s)) return o(e, s, c);
          if (
            ((s = Object.is(s?.valueOf(), -0) ? `-0` : String(s)),
            t.isUnsafeProperty(s))
          )
            return c;
          let n = e[s];
          return n === void 0 ? c : n;
        }
      }
    }
    function o(e, n, r) {
      if (n.length === 0) return r;
      let i = e;
      for (let e = 0; e < n.length; e++) {
        if (i == null || t.isUnsafeProperty(n[e])) return r;
        i = i[n[e]];
      }
      return i === void 0 ? r : i;
    }
    e.get = a;
  }),
  Xl = e(
    n((e, t) => {
      t.exports = Yl().get;
    })(),
  ),
  Zl = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Ql = (e) => typeof e == `number` && e != +e,
  $l = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  V = (e) => (typeof e == `number` || e instanceof Number) && !Ql(e),
  eu = (e) => V(e) || typeof e == `string`,
  tu = 0,
  nu = (e) => {
    var t = ++tu;
    return `${e || ``}${t}`;
  },
  ru = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!V(e) && typeof e != `string`) return n;
    var i;
    if ($l(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (Ql(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  iu = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function au(e, t, n) {
  return V(e) && V(t) ? e + n * (t - e) : t;
}
function ou(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Xl.default)(e, t)) === n,
    );
}
var su = (e) => e == null,
  cu = (e) => (su(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  lu = [`type`, `size`, `sizeType`];
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uu.apply(null, arguments)
  );
}
function du(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? du(Object(n), !0).forEach(function (t) {
          pu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : du(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pu(e, t, n) {
  return (
    (t = mu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mu(e) {
  var t = hu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = _u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function _u(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var vu = {
    symbolCircle: Kc,
    symbolCross: qc,
    symbolDiamond: Xc,
    symbolSquare: Zc,
    symbolStar: nl,
    symbolTriangle: il,
    symbolWye: ll,
  },
  yu = Math.PI / 180,
  bu = (e) => vu[`symbol${cu(e)}`] || Kc,
  xu = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * yu;
        return (
          1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2)
        );
      case `triangle`:
        return (Math.sqrt(3) * e * e) / 4;
      case `wye`:
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  Su = (e, t) => {
    vu[`symbol${cu(e)}`] = t;
  },
  Cu = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = fu(fu({}, gu(e, lu)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = bu(a),
          t = ul()
            .type(e)
            .size(xu(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = cc(i);
    return c === +c && l === +l && n === +n
      ? B.createElement(
          `path`,
          uu({}, u, {
            className: z(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
Cu.registerSymbol = Su;
var wu = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, B.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        nc(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  Tu = (e, t, n) => (r) => (e(t, n, r), null),
  Eu = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        nc(i) && typeof a == `function` && ((r ||= {}), (r[i] = Tu(a, t, n)));
      }),
      r
    );
  };
function Du() {
  return (
    (Du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Du.apply(null, arguments)
  );
}
function Ou(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ou(Object(n), !0).forEach(function (t) {
          Au(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ou(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Au(e, t, n) {
  return (
    (t = ju(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ju(e) {
  var t = Mu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Mu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Nu = 32,
  Pu = class extends B.PureComponent {
    renderIcon(e, t) {
      var { inactiveColor: n } = this.props,
        r = Nu / 2,
        i = Nu / 6,
        a = Nu / 3,
        o = e.inactive ? n : e.color,
        s = t ?? e.type;
      if (s === `none`) return null;
      if (s === `plainline`)
        return B.createElement(`line`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          strokeDasharray: e.payload.strokeDasharray,
          x1: 0,
          y1: r,
          x2: Nu,
          y2: r,
          className: `recharts-legend-icon`,
        });
      if (s === `line`)
        return B.createElement(`path`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          d: `M0,${r}h${a}
            A${i},${i},0,1,1,${2 * a},${r}
            H${Nu}M${2 * a},${r}
            A${i},${i},0,1,1,${a},${r}`,
          className: `recharts-legend-icon`,
        });
      if (s === `rect`)
        return B.createElement(`path`, {
          stroke: `none`,
          fill: o,
          d: `M0,${Nu / 8}h${Nu}v${(Nu * 3) / 4}h${-Nu}z`,
          className: `recharts-legend-icon`,
        });
      if (B.isValidElement(e.legendIcon)) {
        var c = ku({}, e);
        return (delete c.legendIcon, B.cloneElement(e.legendIcon, c));
      }
      return B.createElement(Cu, {
        fill: o,
        cx: r,
        cy: r,
        size: Nu,
        sizeType: `diameter`,
        type: s,
      });
    }
    renderItems() {
      var {
          payload: e,
          iconSize: t,
          layout: n,
          formatter: r,
          inactiveColor: i,
          iconType: a,
        } = this.props,
        o = { x: 0, y: 0, width: Nu, height: Nu },
        s = {
          display: n === `horizontal` ? `inline-block` : `block`,
          marginRight: 10,
        },
        c = {
          display: `inline-block`,
          verticalAlign: `middle`,
          marginRight: 4,
        };
      return e.map((e, n) => {
        var l = e.formatter || r,
          u = z({
            "recharts-legend-item": !0,
            [`legend-item-${n}`]: !0,
            inactive: e.inactive,
          });
        if (e.type === `none`) return null;
        var d = e.inactive ? i : e.color,
          f = l ? l(e.value, e, n) : e.value;
        return B.createElement(
          `li`,
          Du(
            { className: u, style: s, key: `legend-item-${n}` },
            Eu(this.props, e, n),
          ),
          B.createElement(
            mc,
            {
              width: t,
              height: t,
              viewBox: o,
              style: c,
              "aria-label": `${f} legend icon`,
            },
            this.renderIcon(e, a),
          ),
          B.createElement(
            `span`,
            { className: `recharts-legend-item-text`, style: { color: d } },
            f,
          ),
        );
      });
    }
    render() {
      var { payload: e, layout: t, align: n } = this.props;
      if (!e || !e.length) return null;
      var r = {
        padding: 0,
        margin: 0,
        textAlign: t === `horizontal` ? n : `left`,
      };
      return B.createElement(
        `ul`,
        { className: `recharts-default-legend`, style: r },
        this.renderItems(),
      );
    }
  };
(Au(Pu, `displayName`, `Legend`),
  Au(Pu, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
  }));
var Fu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      let n = new Map();
      for (let r = 0; r < e.length; r++) {
        let i = e[r],
          a = t(i);
        n.has(a) || n.set(a, i);
      }
      return Array.from(n.values());
    }
    e.uniqBy = t;
  }),
  Iu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  Lu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  Ru = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Lu();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  Bu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ru(),
      n = zu();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  Vu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yl();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Hu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  Uu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  Wu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  Gu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ku(),
      n = Hu(),
      r = Uu(),
      i = Wu();
    function a(e, n, r) {
      return typeof r == `function`
        ? o(
            e,
            n,
            function e(t, n, i, a, s, c) {
              let l = r(t, n, i, a, s, c);
              return l === void 0 ? o(t, n, e, c) : !!l;
            },
            new Map(),
          )
        : t.isMatch(e, n);
    }
    function o(e, t, r, a) {
      if (t === e) return !0;
      switch (typeof t) {
        case `object`:
          return s(e, t, r, a);
        case `function`:
          return Object.keys(t).length > 0 ? o(e, { ...t }, r, a) : i.eq(e, t);
        default:
          return n.isObject(e) ? typeof t != `string` || t === `` : i.eq(e, t);
      }
    }
    function s(e, t, n, i) {
      if (t == null) return !0;
      if (Array.isArray(t)) return l(e, t, n, i);
      if (t instanceof Map) return c(e, t, n, i);
      if (t instanceof Set) return u(e, t, n, i);
      let a = Object.keys(t);
      if (e == null) return a.length === 0;
      if (a.length === 0) return !0;
      if (i && i.has(t)) return i.get(t) === e;
      i && i.set(t, e);
      try {
        for (let o = 0; o < a.length; o++) {
          let s = a[o];
          if (
            (!r.isPrimitive(e) && !(s in e)) ||
            (t[s] === void 0 && e[s] !== void 0) ||
            (t[s] === null && e[s] !== null) ||
            !n(e[s], t[s], s, e, t, i)
          )
            return !1;
        }
        return !0;
      } finally {
        i && i.delete(t);
      }
    }
    function c(e, t, n, r) {
      if (t.size === 0) return !0;
      if (!(e instanceof Map)) return !1;
      for (let [i, a] of t.entries())
        if (n(e.get(i), a, i, e, t, r) === !1) return !1;
      return !0;
    }
    function l(e, t, n, r) {
      if (t.length === 0) return !0;
      if (!Array.isArray(e)) return !1;
      let i = new Set();
      for (let a = 0; a < t.length; a++) {
        let o = t[a],
          s = !1;
        for (let c = 0; c < e.length; c++) {
          if (i.has(c)) continue;
          let l = e[c],
            u = !1;
          if ((n(l, o, a, e, t, r) && (u = !0), u)) {
            (i.add(c), (s = !0));
            break;
          }
        }
        if (!s) return !1;
      }
      return !0;
    }
    function u(e, t, n, r) {
      return t.size === 0 || (e instanceof Set && l([...e], [...t], n, r));
    }
    ((e.isMatchWith = a), (e.isSetMatch = u));
  }),
  Ku = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Gu();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  qu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  Ju = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null
        ? e === void 0
          ? `[object Undefined]`
          : `[object Null]`
        : Object.prototype.toString.call(e);
    }
    e.getTag = t;
  }),
  Yu = n((e) => {
    (Object.defineProperty(e, Symbol.toStringTag, { value: `Module` }),
      (e.argumentsTag = `[object Arguments]`),
      (e.arrayBufferTag = `[object ArrayBuffer]`),
      (e.arrayTag = `[object Array]`),
      (e.bigInt64ArrayTag = `[object BigInt64Array]`),
      (e.bigUint64ArrayTag = `[object BigUint64Array]`),
      (e.booleanTag = `[object Boolean]`),
      (e.dataViewTag = `[object DataView]`),
      (e.dateTag = `[object Date]`),
      (e.errorTag = `[object Error]`),
      (e.float32ArrayTag = `[object Float32Array]`),
      (e.float64ArrayTag = `[object Float64Array]`),
      (e.functionTag = `[object Function]`),
      (e.int16ArrayTag = `[object Int16Array]`),
      (e.int32ArrayTag = `[object Int32Array]`),
      (e.int8ArrayTag = `[object Int8Array]`),
      (e.mapTag = `[object Map]`),
      (e.numberTag = `[object Number]`),
      (e.objectTag = `[object Object]`),
      (e.regexpTag = `[object RegExp]`),
      (e.setTag = `[object Set]`),
      (e.stringTag = `[object String]`),
      (e.symbolTag = `[object Symbol]`),
      (e.uint16ArrayTag = `[object Uint16Array]`),
      (e.uint32ArrayTag = `[object Uint32Array]`),
      (e.uint8ArrayTag = `[object Uint8Array]`),
      (e.uint8ClampedArrayTag = `[object Uint8ClampedArray]`));
  }),
  Xu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  Zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qu(),
      n = Ju(),
      r = Yu(),
      i = Uu(),
      a = Xu();
    function o(e, t) {
      return s(e, void 0, e, new Map(), t);
    }
    function s(e, t, n, r = new Map(), o = void 0) {
      let u = o?.(e, t, n, r);
      if (u !== void 0) return u;
      if (i.isPrimitive(e)) return e;
      if (r.has(e)) return r.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        r.set(e, t);
        for (let i = 0; i < e.length; i++) t[i] = s(e[i], i, n, r, o);
        return (
          Object.hasOwn(e, `index`) && (t.index = e.index),
          Object.hasOwn(e, `input`) && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
      }
      if (e instanceof Map) {
        let t = new Map();
        r.set(e, t);
        for (let [i, a] of e) t.set(i, s(a, i, n, r, o));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        r.set(e, t);
        for (let i of e) t.add(s(i, void 0, n, r, o));
        return t;
      }
      if (typeof Buffer < `u` && Buffer.isBuffer(e)) return e.subarray();
      if (a.isTypedArray(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        r.set(e, t);
        for (let i = 0; i < e.length; i++) t[i] = s(e[i], i, n, r, o);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (e instanceof Error) {
        let t = new e.constructor();
        return (
          r.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          c(t, e, n, r, o),
          t
        );
      }
      if (typeof e == `object` && l(e)) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      return e;
    }
    function c(e, n, r = e, i, a) {
      let o = [...Object.keys(n), ...t.getSymbols(n)];
      for (let t = 0; t < o.length; t++) {
        let c = o[t],
          l = Object.getOwnPropertyDescriptor(e, c);
        (l == null || l.writable) && (e[c] = s(n[c], c, r, i, a));
      }
    }
    function l(e) {
      switch (n.getTag(e)) {
        case r.argumentsTag:
        case r.arrayTag:
        case r.arrayBufferTag:
        case r.dataViewTag:
        case r.booleanTag:
        case r.dateTag:
        case r.float32ArrayTag:
        case r.float64ArrayTag:
        case r.int8ArrayTag:
        case r.int16ArrayTag:
        case r.int32ArrayTag:
        case r.mapTag:
        case r.numberTag:
        case r.objectTag:
        case r.regexpTag:
        case r.setTag:
        case r.stringTag:
        case r.symbolTag:
        case r.uint8ArrayTag:
        case r.uint8ClampedArrayTag:
        case r.uint16ArrayTag:
        case r.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    ((e.cloneDeepWith = o), (e.cloneDeepWithImpl = s), (e.copyProperties = c));
  }),
  Qu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Zu();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  $u = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ku(),
      n = Qu();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  ed = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Zu(),
      n = Yu();
    function r(e, r) {
      return t.cloneDeepWith(e, (i, a, o, s) => {
        let c = r?.(i, a, o, s);
        if (c !== void 0) return c;
        if (typeof e == `object`)
          switch (Object.prototype.toString.call(e)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              let n = new e.constructor(e?.valueOf());
              return (t.copyProperties(n, e), n);
            }
            case n.argumentsTag: {
              let n = {};
              return (
                t.copyProperties(n, e),
                (n.length = e.length),
                (n[Symbol.iterator] = e[Symbol.iterator]),
                n
              );
            }
            default:
              return;
          }
      });
    }
    e.cloneDeepWith = r;
  }),
  td = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ed();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  nd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = /^(?:0|[1-9]\d*)$/;
    function n(e, n = 2 ** 53 - 1) {
      switch (typeof e) {
        case `number`:
          return Number.isInteger(e) && e >= 0 && e < n;
        case `symbol`:
          return !1;
        case `string`:
          return t.test(e);
      }
    }
    e.isIndex = n;
  }),
  rd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ju();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  id = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Kl(),
      n = nd(),
      r = rd(),
      i = Jl();
    function a(e, a) {
      let o;
      if (
        ((o = Array.isArray(a)
          ? a
          : typeof a == `string` && t.isDeepKey(a) && e?.[a] == null
            ? i.toPath(a)
            : [a]),
        o.length === 0)
      )
        return !1;
      let s = e;
      for (let e = 0; e < o.length; e++) {
        let t = o[e];
        if (
          (s == null || !Object.hasOwn(s, t)) &&
          !(
            (Array.isArray(s) || r.isArguments(s)) &&
            n.isIndex(t) &&
            t < s.length
          )
        )
          return !1;
        s = s[t];
      }
      return !0;
    }
    e.has = a;
  }),
  ad = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ku(),
      n = ql(),
      r = td(),
      i = Yl(),
      a = id();
    function o(e, o) {
      switch (typeof e) {
        case `object`:
          Object.is(e?.valueOf(), -0) && (e = `-0`);
          break;
        case `number`:
          e = n.toKey(e);
      }
      return (
        (o = r.cloneDeep(o)),
        function (n) {
          let r = i.get(n, e);
          return r === void 0
            ? a.has(n, e)
            : o === void 0
              ? r === void 0
              : t.isMatch(r, o);
        }
      );
    }
    e.matchesProperty = o;
  }),
  od = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Iu(),
      n = Vu(),
      r = $u(),
      i = ad();
    function a(e) {
      if (e == null) return t.identity;
      switch (typeof e) {
        case `function`:
          return e;
        case `object`:
          return Array.isArray(e) && e.length === 2
            ? i.matchesProperty(e[0], e[1])
            : r.matches(e);
        case `string`:
        case `symbol`:
        case `number`:
          return n.property(e);
      }
    }
    e.iteratee = a;
  }),
  sd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Fu(),
      n = Iu(),
      r = Bu(),
      i = od();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  cd = e(
    n((e, t) => {
      t.exports = sd().uniqBy;
    })(),
  );
function ld(e, t, n) {
  return t === !0
    ? (0, cd.default)(e, n)
    : typeof t == `function`
      ? (0, cd.default)(e, t)
      : e;
}
var ud = n((e) => {
    var t = o(),
      n = d();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
      var d = s(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = l(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (s = e), (e = r(e)), o !== void 0 && f.hasValue)) {
                var t = f.value;
                if (o(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), i(s, e))) return t;
            var n = r(e);
            return o !== void 0 && o(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var a = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, o],
      );
      var p = a(e, d[0], d[1]);
      return (
        c(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        u(p),
        p
      );
    };
  }),
  dd = n((e, t) => {
    t.exports = ud();
  }),
  fd = (0, B.createContext)(null),
  pd = dd(),
  md = (e) => e,
  hd = () => {
    var e = (0, B.useContext)(fd);
    return e ? e.store.dispatch : md;
  },
  gd = () => {},
  _d = () => gd,
  vd = (e, t) => e === t;
function H(e) {
  var t = (0, B.useContext)(fd);
  return (0, pd.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : _d,
    t ? t.store.getState : gd,
    t ? t.store.getState : gd,
    t ? e : gd,
    vd,
  );
}
function yd(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function bd(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function xd(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var Sd = (e) => (Array.isArray(e) ? e : [e]);
function Cd(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    xd(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function wd(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Td = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Ed = typeof WeakRef < `u` ? WeakRef : Td,
  Dd = 0,
  Od = 1;
function kd() {
  return { s: Dd, v: void 0, o: null, p: null };
}
function Ad(e, t = {}) {
  let n = kd(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = kd()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = kd()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Od) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Ed(c)
            : c));
    }
    return ((s.s = Od), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = kd()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function jd(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        yd(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Ad,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Sd(c),
        p = Sd(u),
        m = Cd(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = wd(m, arguments);
            return ((i = h.apply(null, e)), i);
          },
          ...p,
        );
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: h,
        dependencies: m,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var U = jd(Ad),
  Md = Object.assign(
    (e, t = U) => {
      bd(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Md },
  ),
  Nd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol`
        ? 1
        : e === null
          ? 2
          : e === void 0
            ? 3
            : e === e
              ? 0
              : 4;
    }
    e.compareValues = (e, n, r) => {
      if (e !== n) {
        let i = t(e),
          a = t(n);
        if (i === a && i === 0) {
          if (e < n) return r === `desc` ? 1 : -1;
          if (e > n) return r === `desc` ? -1 : 1;
        }
        return r === `desc` ? a - i : i - a;
      }
      return 0;
    };
  }),
  Pd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  Fd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Pd(),
      n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      r = /^\w*$/;
    function i(e, i) {
      return Array.isArray(e)
        ? !1
        : typeof e == `number` ||
            typeof e == `boolean` ||
            e == null ||
            t.isSymbol(e)
          ? !0
          : (typeof e == `string` && (r.test(e) || !n.test(e))) ||
            (i != null && Object.hasOwn(i, e));
    }
    e.isKey = i;
  }),
  Id = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Nd(),
      n = Fd(),
      r = Jl();
    function i(e, i, a, o) {
      if (e == null) return [];
      ((a = o ? void 0 : a),
        Array.isArray(e) || (e = Object.values(e)),
        Array.isArray(i) || (i = i == null ? [null] : [i]),
        i.length === 0 && (i = [null]),
        Array.isArray(a) || (a = a == null ? [] : [a]),
        (a = a.map((e) => String(e))));
      let s = (e, t) => {
          let n = e;
          for (let e = 0; e < t.length && n != null; ++e) n = n[t[e]];
          return n;
        },
        c = (e, t) =>
          t == null || e == null
            ? t
            : typeof e == `object` && `key` in e
              ? Object.hasOwn(t, e.key)
                ? t[e.key]
                : s(t, e.path)
              : typeof e == `function`
                ? e(t)
                : Array.isArray(e)
                  ? s(t, e)
                  : typeof t == `object`
                    ? t[e]
                    : t,
        l = i.map(
          (e) => (
            Array.isArray(e) && e.length === 1 && (e = e[0]),
            e == null ||
            typeof e == `function` ||
            Array.isArray(e) ||
            n.isKey(e)
              ? e
              : { key: e, path: r.toPath(e) }
          ),
        );
      return e
        .map((e) => ({ original: e, criteria: l.map((t) => c(t, e)) }))
        .slice()
        .sort((e, n) => {
          for (let r = 0; r < l.length; r++) {
            let i = t.compareValues(e.criteria[r], n.criteria[r], a[r]);
            if (i !== 0) return i;
          }
          return 0;
        })
        .map((e) => e.original);
    }
    e.orderBy = i;
  }),
  Ld = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t = 1) {
      let n = [],
        r = Math.floor(t),
        i = (e, t) => {
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
          }
        };
      return (i(e, 0), n);
    }
    e.flatten = t;
  }),
  Rd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = nd(),
      n = Ru(),
      r = Hu(),
      i = Wu();
    function a(e, a, o) {
      return r.isObject(o) &&
        ((typeof a == `number` &&
          n.isArrayLike(o) &&
          t.isIndex(a) &&
          a < o.length) ||
          (typeof a == `string` && a in o))
        ? i.eq(o[a], e)
        : !1;
    }
    e.isIterateeCall = a;
  }),
  zd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Id(),
      n = Ld(),
      r = Rd();
    function i(e, ...i) {
      let a = i.length;
      return (
        a > 1 && r.isIterateeCall(e, i[0], i[1])
          ? (i = [])
          : a > 2 && r.isIterateeCall(i[0], i[1], i[2]) && (i = [i[0]]),
        t.orderBy(e, n.flatten(i), [`asc`])
      );
    }
    e.sortBy = i;
  }),
  Bd = e(
    n((e, t) => {
      t.exports = zd().sortBy;
    })(),
  ),
  Vd = (e) => e.legend.settings,
  Hd = (e) => e.legend.size,
  Ud = U([(e) => e.legend.payload, Vd], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, Bd.default)(r, n) : r;
  });
function Wd() {
  return H(Ud);
}
var Gd = 1;
function Kd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, B.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, B.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Gd ||
            Math.abs(i.left - t.left) > Gd ||
            Math.abs(i.top - t.top) > Gd ||
            Math.abs(i.width - t.width) > Gd) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function qd(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Jd = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Yd = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  Xd = {
    INIT: `@@redux/INIT${Yd()}`,
    REPLACE: `@@redux/REPLACE${Yd()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Yd()}`,
  };
function Zd(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Qd(e, t, n) {
  if (typeof e != `function`) throw Error(qd(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(qd(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(qd(1));
    return n(Qd)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    c = !1;
  function l() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function u() {
    if (c) throw Error(qd(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(qd(4));
    if (c) throw Error(qd(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(qd(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Zd(e)) throw Error(qd(7));
    if (e.type === void 0) throw Error(qd(8));
    if (typeof e.type != `string`) throw Error(qd(17));
    if (c) throw Error(qd(9));
    try {
      ((c = !0), (i = r(i, e)));
    } finally {
      c = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function p(e) {
    if (typeof e != `function`) throw Error(qd(10));
    ((r = e), f({ type: Xd.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(qd(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Jd]() {
        return this;
      },
    };
  }
  return (
    f({ type: Xd.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Jd]: m }
  );
}
function $d(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: Xd.INIT }) === void 0) throw Error(qd(12));
    if (n(void 0, { type: Xd.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(qd(13));
  });
}
function ef(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    $d(n);
  } catch (e) {
    i = e;
  }
  return function (e = {}, t) {
    if (i) throw i;
    let a = !1,
      o = {};
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        c = n[s],
        l = e[s],
        u = c(l, t);
      if (u === void 0) throw (t && t.type, Error(qd(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function tf(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function nf(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(qd(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = tf(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function rf(e) {
  return Zd(e) && `type` in e && typeof e.type == `string`;
}
var af = Symbol.for(`immer-nothing`),
  of = Symbol.for(`immer-draftable`),
  sf = Symbol.for(`immer-state`);
function cf(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var lf = Object.getPrototypeOf;
function uf(e) {
  return !!e && !!e[sf];
}
function df(e) {
  return e
    ? mf(e) ||
        Array.isArray(e) ||
        !!e[of] ||
        !!e.constructor?.[of] ||
        bf(e) ||
        xf(e)
    : !1;
}
var ff = Object.prototype.constructor.toString(),
  pf = new WeakMap();
function mf(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = pf.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), pf.set(n, r)), r === ff
  );
}
function hf(e, t, n = !0) {
  gf(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function gf(e) {
  let t = e[sf];
  return t ? t.type_ : Array.isArray(e) ? 1 : bf(e) ? 2 : xf(e) ? 3 : 0;
}
function _f(e, t) {
  return gf(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function vf(e, t, n) {
  let r = gf(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function yf(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function bf(e) {
  return e instanceof Map;
}
function xf(e) {
  return e instanceof Set;
}
function Sf(e) {
  return e.copy_ || e.base_;
}
function Cf(e, t) {
  if (bf(e)) return new Map(e);
  if (xf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = mf(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[sf];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      (a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i],
          }));
    }
    return Object.create(lf(e), t);
  }
  {
    let t = lf(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function wf(e, t = !1) {
  return (
    Df(e) ||
      uf(e) ||
      !df(e) ||
      (gf(e) > 1 &&
        Object.defineProperties(e, { set: Ef, add: Ef, clear: Ef, delete: Ef }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => wf(e, !0))),
    e
  );
}
function Tf() {
  cf(2);
}
var Ef = { value: Tf };
function Df(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var Of = {};
function kf(e) {
  let t = Of[e];
  return (t || cf(0, e), t);
}
var Af;
function jf() {
  return Af;
}
function Mf(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Nf(e, t) {
  t &&
    (kf(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Pf(e) {
  (Ff(e), e.drafts_.forEach(Lf), (e.drafts_ = null));
}
function Ff(e) {
  e === Af && (Af = e.parent_);
}
function If(e) {
  return (Af = Mf(Af, e));
}
function Lf(e) {
  let t = e[sf];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Rf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[sf].modified_ && (Pf(t), cf(4)),
        df(e) && ((e = zf(t, e)), t.parent_ || Vf(t, e)),
        t.patches_ &&
          kf(`Patches`).generateReplacementPatches_(
            n[sf].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = zf(t, n, [])),
    Pf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === af ? void 0 : e
  );
}
function zf(e, t, n) {
  if (Df(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[sf];
  if (!i) return (hf(t, (r, a) => Bf(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (Vf(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      hf(a, (r, a) => Bf(e, i, t, r, a, n, o), r),
      Vf(e, t, !1),
      n &&
        e.patches_ &&
        kf(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function Bf(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = Df(i);
  if (!s || o) {
    if (uf(i)) {
      let o = zf(
        e,
        i,
        a && t && t.type_ !== 3 && !_f(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((vf(n, r, o), uf(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (df(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (zf(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (bf(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          Vf(e, i));
    }
  }
}
function Vf(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && wf(t, n);
}
function Hf(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : jf(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    },
    i = r,
    a = Uf;
  n && ((i = [r]), (a = Wf));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var Uf = {
    get(e, t) {
      if (t === sf) return e;
      let n = Sf(e);
      if (!_f(n, t)) return Kf(e, n, t);
      let r = n[t];
      return e.finalized_ || !df(r)
        ? r
        : r === Gf(e.base_, t)
          ? (Yf(e), (e.copy_[t] = Zf(r, e)))
          : r;
    },
    has(e, t) {
      return t in Sf(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Sf(e));
    },
    set(e, t, n) {
      let r = qf(Sf(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Gf(Sf(e), t),
          i = r?.[sf];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (yf(n, r) && (n !== void 0 || _f(e.base_, t))) return !0;
        (Yf(e), Jf(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Gf(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Yf(e), Jf(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Sf(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== `length`,
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      cf(11);
    },
    getPrototypeOf(e) {
      return lf(e.base_);
    },
    setPrototypeOf() {
      cf(12);
    },
  },
  Wf = {};
(hf(Uf, (e, t) => {
  Wf[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (Wf.deleteProperty = function (e, t) {
    return Wf.set.call(this, e, t, void 0);
  }),
  (Wf.set = function (e, t, n) {
    return Uf.set.call(this, e[0], t, n, e[0]);
  }));
function Gf(e, t) {
  let n = e[sf];
  return (n ? Sf(n) : e)[t];
}
function Kf(e, t, n) {
  let r = qf(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function qf(e, t) {
  if (!(t in e)) return;
  let n = lf(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = lf(n);
  }
}
function Jf(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Jf(e.parent_));
}
function Yf(e) {
  e.copy_ ||= Cf(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var Xf = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (e, t, n) => {
        if (typeof e == `function` && typeof t != `function`) {
          let n = t;
          t = e;
          let r = this;
          return function (e = n, ...i) {
            return r.produce(e, (e) => t.call(this, e, ...i));
          };
        }
        (typeof t != `function` && cf(6),
          n !== void 0 && typeof n != `function` && cf(7));
        let r;
        if (df(e)) {
          let i = If(this),
            a = Zf(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Pf(i) : Ff(i);
          }
          return (Nf(i, n), Rf(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === af && (r = void 0),
            this.autoFreeze_ && wf(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (kf(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        cf(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (typeof e == `function`)
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            ((n = e), (r = t));
          }),
          n,
          r,
        ];
      }),
      typeof e?.autoFreeze == `boolean` && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == `boolean` &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      typeof e?.useStrictIteration == `boolean` &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (df(e) || cf(8), uf(e) && (e = Qf(e)));
    let t = If(this),
      n = Zf(e, void 0);
    return ((n[sf].isManual_ = !0), Ff(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[sf];
    (n && n.isManual_) || cf(9);
    let { scope_: r } = n;
    return (Nf(r, t), Rf(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.path.length === 0 && r.op === `replace`) {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    let r = kf(`Patches`).applyPatches_;
    return uf(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function Zf(e, t) {
  let n = bf(e)
    ? kf(`MapSet`).proxyMap_(e, t)
    : xf(e)
      ? kf(`MapSet`).proxySet_(e, t)
      : Hf(e, t);
  return ((t ? t.scope_ : jf()).drafts_.push(n), n);
}
function Qf(e) {
  return (uf(e) || cf(10, e), $f(e));
}
function $f(e) {
  if (!df(e) || Df(e)) return e;
  let t = e[sf],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = Cf(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = Cf(e, !0);
  return (
    hf(
      n,
      (e, t) => {
        vf(n, e, $f(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var ep = new Xf(),
  tp = ep.produce,
  np = ep.setUseStrictIteration.bind(ep);
function rp(e) {
  return e;
}
function ip(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function ap(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function op(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var sp = (e) => (Array.isArray(e) ? e : [e]);
function cp(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    op(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function lp(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var up = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  dp = typeof WeakRef < `u` ? WeakRef : up,
  fp = 0,
  pp = 1;
function mp() {
  return { s: fp, v: void 0, o: null, p: null };
}
function hp(e, t = {}) {
  let n = mp(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = mp()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = mp()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === pp) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new dp(c)
            : c));
    }
    return ((s.s = pp), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = mp()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function gp(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        ip(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = hp,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = sp(c),
        p = sp(u),
        m = cp(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = lp(m, arguments);
            return ((i = h.apply(null, e)), i);
          },
          ...p,
        );
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: h,
        dependencies: m,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var _p = gp(hp),
  vp = Object.assign(
    (e, t = _p) => {
      ap(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => vp },
  );
function yp(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var bp = yp(),
  xp = yp;
((...e) => {
  let t = gp(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(uf(e) ? Qf(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(hp);
var Sp =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? tf
            : tf.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var Cp = (e) => e && typeof e.match == `function`;
function wp(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(Um(0));
      return {
        type: e,
        payload: r.payload,
        ...(`meta` in r && { meta: r.meta }),
        ...(`error` in r && { error: r.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) => rf(t) && t.type === e),
    n
  );
}
var Tp = class e extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, e.prototype));
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function Ep(e) {
  return df(e) ? tp(e, () => {}) : e;
}
function Dp(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Op(e) {
  return typeof e == `boolean`;
}
var kp = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new Tp();
      return (t && (Op(t) ? a.push(bp) : a.push(xp(t.extraArgument))), a);
    },
  Ap = `RTK_autoBatch`,
  jp = () => (e) => ({ payload: e, meta: { [Ap]: !0 } }),
  Mp = (e) => (t) => {
    setTimeout(t, e);
  },
  Np =
    (e = { type: `raf` }) =>
    (t) =>
    (...n) => {
      let r = t(...n),
        i = !0,
        a = !1,
        o = !1,
        s = new Set(),
        c =
          e.type === `tick`
            ? queueMicrotask
            : e.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Mp(10)
              : e.type === `callback`
                ? e.queueNotification
                : Mp(e.timeout),
        l = () => {
          ((o = !1), a && ((a = !1), s.forEach((e) => e())));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              (t(), s.delete(e));
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[Ap]),
              (a = !i),
              a && (o || ((o = !0), c(l))),
              r.dispatch(e)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Pp = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new Tp(e);
      return (n && r.push(Np(typeof n == `object` ? n : void 0)), r);
    };
function Fp(e) {
  let t = kp(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {},
    c;
  if (typeof n == `function`) c = n;
  else if (Zd(n)) c = ef(n);
  else throw Error(Um(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = tf;
  i && (u = Sp({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Pp(nf(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Qd(c, o, p);
}
function Ip(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(Um(28));
        if (r in t) throw Error(Um(29));
        return ((t[r] = n), i);
      },
      addAsyncThunk(e, r) {
        return (
          r.pending && (t[e.pending.type] = r.pending),
          r.rejected && (t[e.rejected.type] = r.rejected),
          r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
          r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
          i
        );
      },
      addMatcher(e, t) {
        return (n.push({ matcher: e, reducer: t }), i);
      },
      addDefaultCase(e) {
        return ((r = e), i);
      },
    };
  return (e(i), [t, n, r]);
}
np(!1);
function Lp(e) {
  return typeof e == `function`;
}
function Rp(e, t) {
  let [n, r, i] = Ip(t),
    a;
  if (Lp(e)) a = () => Ep(e());
  else {
    let t = Ep(e);
    a = () => t;
  }
  function o(e = a(), t) {
    let o = [
      n[t.type],
      ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
    ];
    return (
      o.filter((e) => !!e).length === 0 && (o = [i]),
      o.reduce((e, n) => {
        if (n) {
          if (uf(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (df(e)) return tp(e, (e) => n(e, t));
          {
            let r = n(e, t);
            if (r === void 0) {
              if (e === null) return e;
              throw Error(
                `A case reducer on a non-draftable value must not return undefined`,
              );
            }
            return r;
          }
        }
        return e;
      }, e)
    );
  }
  return ((o.getInitialState = a), o);
}
var zp = (e, t) => (Cp(e) ? e.match(t) : e(t));
function Bp(...e) {
  return (t) => e.some((e) => zp(e, t));
}
var Vp = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  Hp = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += Vp[(Math.random() * 64) | 0];
    return t;
  },
  Up = [`name`, `message`, `stack`, `code`],
  Wp = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Gp = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Kp = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of Up) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  qp = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = wp(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = wp(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = wp(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || Kp)(e || `Rejected`),
        meta: {
          ...(a || {}),
          arg: r,
          requestId: t,
          rejectedWithValue: !!i,
          requestStatus: `rejected`,
          aborted: e?.name === `AbortError`,
          condition: e?.name === `ConditionError`,
        },
      }));
    function o(e, { signal: o } = {}) {
      return (s, c, l) => {
        let u = n?.idGenerator ? n.idGenerator(e) : Hp(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(qp)
            : o.addEventListener(`abort`, () => m(qp), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((Yp(a) && (a = await a), a === !1 || d.signal.aborted))
              throw {
                name: `ConditionError`,
                message: `Aborted due to condition callback returning false.`,
              };
            let h = new Promise((e, t) => {
              ((f = () => {
                t({ name: `AbortError`, message: p || `Aborted` });
              }),
                d.signal.addEventListener(`abort`, f));
            });
            (s(
              i(
                u,
                e,
                n?.getPendingMeta?.(
                  { requestId: u, arg: e },
                  { getState: c, extra: l },
                ),
              ),
            ),
              (o = await Promise.race([
                h,
                Promise.resolve(
                  t(e, {
                    dispatch: s,
                    getState: c,
                    extra: l,
                    requestId: u,
                    signal: d.signal,
                    abort: m,
                    rejectWithValue: (e, t) => new Wp(e, t),
                    fulfillWithValue: (e, t) => new Gp(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof Wp) throw t;
                  return t instanceof Gp
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof Wp ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
          } finally {
            f && d.signal.removeEventListener(`abort`, f);
          }
          return (
            (n &&
              !n.dispatchConditionRejection &&
              a.match(o) &&
              o.meta.condition) ||
              s(o),
            o
          );
        })();
        return Object.assign(h, {
          abort: m,
          requestId: u,
          arg: e,
          unwrap() {
            return h.then(Jp);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: Bp(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function Jp(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Yp(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var Xp = Symbol.for(`rtk-slice-createasyncthunk`),
  Zp = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(Zp || {});
function Qp(e, t) {
  return `${e}/${t}`;
}
function $p({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Xp];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(Um(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(nm()) : e.reducers) || {},
      a = Object.keys(i),
      o = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(e, t) {
          let n = typeof e == `string` ? e : e.type;
          if (!n) throw Error(Um(12));
          if (n in o.sliceCaseReducersByType) throw Error(Um(13));
          return ((o.sliceCaseReducersByType[n] = t), s);
        },
        addMatcher(e, t) {
          return (o.sliceMatchers.push({ matcher: e, reducer: t }), s);
        },
        exposeAction(e, t) {
          return ((o.actionCreators[e] = t), s);
        },
        exposeCaseReducer(e, t) {
          return ((o.sliceCaseReducersByName[e] = t), s);
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: Qp(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      im(a) ? om(o, a, s, t) : rm(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Ip(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Rp(e.initialState, (e) => {
        for (let t in i) e.addCase(t, i[t]);
        for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
        for (let t of n) e.addMatcher(t.matcher, t.reducer);
        r && e.addDefaultCase(r);
      });
    }
    let l = (e) => e,
      u = new Map(),
      d = new WeakMap(),
      f;
    function p(e, t) {
      return ((f ||= c()), f(e, t));
    }
    function m() {
      return ((f ||= c()), f.getInitialState());
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return (typeof i > `u` && n && (i = Dp(d, r, m)), i);
      }
      function i(t = l) {
        return Dp(
          Dp(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = em(a, t, () => Dp(d, t, m), n);
            return r;
          },
        );
      }
      return {
        reducerPath: t,
        getSelectors: i,
        get selectors() {
          return i(r);
        },
        selectSlice: r,
      };
    }
    let g = {
      name: n,
      reducer: p,
      actions: o.actionCreators,
      caseReducers: o.sliceCaseReducersByName,
      getInitialState: m,
      ...h(r),
      injectInto(e, { reducerPath: t, ...n } = {}) {
        let i = t ?? r;
        return (
          e.inject({ reducerPath: i, reducer: p }, n), { ...g, ...h(i, !0) }
        );
      },
    };
    return g;
  };
}
function em(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var tm = $p();
function nm() {
  function e(e, t) {
    return { _reducerDefinitionType: `asyncThunk`, payloadCreator: e, ...t };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...t) {
              return e(...t);
            },
          }[e.name],
          { _reducerDefinitionType: `reducer` },
        );
      },
      preparedReducer(e, t) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: e,
          reducer: t,
        };
      },
      asyncThunk: e,
    }
  );
}
function rm({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !am(r)) throw Error(Um(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? wp(e, o) : wp(e));
}
function im(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function am(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function om({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(Um(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  (r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || sm,
      pending: s || sm,
      rejected: c || sm,
      settled: l || sm,
    }));
}
function sm() {}
var cm = `task`,
  lm = `listener`,
  um = `completed`,
  dm = `cancelled`,
  fm = `task-${dm}`,
  pm = `task-${um}`,
  mm = `${lm}-${dm}`,
  hm = `${lm}-${um}`,
  gm = class {
    constructor(e) {
      ((this.code = e), (this.message = `${cm} ${dm} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  _m = (e, t) => {
    if (typeof e != `function`) throw TypeError(Um(32));
  },
  vm = () => {},
  ym = (e, t = vm) => (e.catch(t), e),
  bm = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  xm = (e, t) => {
    let n = e.signal;
    n.aborted ||
      (`reason` in n ||
        Object.defineProperty(n, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  Sm = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new gm(t);
    }
  };
function Cm(e, t) {
  let n = vm;
  return new Promise((r, i) => {
    let a = () => i(new gm(e.reason));
    e.aborted ? a() : ((n = bm(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = vm;
  });
}
var wm = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof gm ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Tm = (e) => (t) => ym(Cm(e, t).then((t) => (Sm(e), t))),
  Em = (e) => {
    let t = Tm(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: Dm } = Object,
  Om = {},
  km = `listenerMiddleware`,
  Am = (e, t) => {
    let n = (t) => bm(e, () => xm(t, e.reason));
    return (r, i) => {
      _m(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = wm(
        async () => {
          (Sm(e), Sm(a.signal));
          let t = await r({
            pause: Tm(a.signal),
            delay: Em(a.signal),
            signal: a.signal,
          });
          return (Sm(a.signal), t);
        },
        () => xm(a, pm),
      );
      return (
        i?.autoJoin && t.push(o.catch(vm)),
        {
          result: Tm(e)(o),
          cancel() {
            xm(a, fm);
          },
        }
      );
    };
  },
  jm = (e, t) => {
    let n = async (n, r) => {
      Sm(t);
      let i = () => {},
        a = [
          new Promise((t, r) => {
            let a = e({
              predicate: n,
              effect: (e, n) => {
                (n.unsubscribe(), t([e, n.getState(), n.getOriginalState()]));
              },
            });
            i = () => {
              (a(), r());
            };
          }),
        ];
      r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
      try {
        let e = await Cm(t, Promise.race(a));
        return (Sm(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => ym(n(e, t));
  },
  Mm = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = wp(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(Um(21));
    return (_m(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Nm = Dm(
    (e) => {
      let { type: t, predicate: n, effect: r } = Mm(e);
      return {
        id: Hp(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(Um(22));
        },
      };
    },
    { withTypes: () => Nm },
  ),
  Pm = (e, t) => {
    let { type: n, effect: r, predicate: i } = Mm(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  Fm = (e) => {
    e.pending.forEach((e) => {
      xm(e, mm);
    });
  },
  Im = (e, t) => () => {
    for (let e of t.keys()) Fm(e);
    e.clear();
  },
  Lm = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  Rm = Dm(wp(`${km}/add`), { withTypes: () => Rm }),
  zm = wp(`${km}/removeAll`),
  Bm = Dm(wp(`${km}/remove`), { withTypes: () => Bm }),
  Vm = (...e) => {
    console.error(`${km}/error`, ...e);
  },
  Hm = (e = {}) => {
    let t = new Map(),
      n = new Map(),
      r = (e) => {
        let t = n.get(e) ?? 0;
        n.set(e, t + 1);
      },
      i = (e) => {
        let t = n.get(e) ?? 1;
        t === 1 ? n.delete(e) : n.set(e, t - 1);
      },
      { extra: a, onError: o = Vm } = e;
    _m(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && Fm(e));
        }
      ),
      c = (e) => {
        let n = Pm(t, e) ?? Nm(e);
        return s(n);
      };
    Dm(c, { withTypes: () => c });
    let l = (e) => {
      let n = Pm(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && Fm(n)), !!n);
    };
    Dm(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = jm(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                Dm({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: Em(u.signal),
                  pause: Tm(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Am(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (xm(e, mm), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (xm(u, mm), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Sm(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof gm || Lm(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), xm(u, hm), i(e), e.pending.delete(u));
        }
      },
      d = Im(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!rf(r)) return n(r);
        if (Rm.match(r)) return c(r.payload);
        if (zm.match(r)) {
          d();
          return;
        }
        if (Bm.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === Om) throw Error(Um(23));
            return i;
          },
          s;
        try {
          if (((s = n(r)), t.size > 0)) {
            let n = e.getState(),
              s = Array.from(t.values());
            for (let t of s) {
              let s = !1;
              try {
                s = t.predicate(r, n, i);
              } catch (e) {
                ((s = !1), Lm(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = Om;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function Um(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Wm = tm({
    name: `chartLayout`,
    initialState: {
      layoutType: `horizontal`,
      width: 0,
      height: 0,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      scale: 1,
    },
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        ((e.margin.top = t.payload.top ?? 0),
          (e.margin.right = t.payload.right ?? 0),
          (e.margin.bottom = t.payload.bottom ?? 0),
          (e.margin.left = t.payload.left ?? 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: Gm, setLayout: Km, setChartSize: qm, setScale: Jm } = Wm.actions,
  Ym = Wm.reducer;
function Xm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xm(Object(n), !0).forEach(function (t) {
          Qm(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Qm(e, t, n) {
  return (
    (t = $m(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $m(e) {
  var t = eh(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function eh(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var th = Math.PI / 180,
  nh = (e) => (e * Math.PI) / 180,
  rh = (e) => (e * 180) / Math.PI,
  ih = (e, t, n, r) => ({
    x: e + Math.cos(-th * r) * n,
    y: t + Math.sin(-th * r) * n,
  }),
  ah = function (e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(t - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  oh = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  sh = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = oh({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: rh(c), angleInRadian: c }
    );
  },
  ch = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  lh = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  uh = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = sh({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = ch(t),
      u = a,
      d;
    if (c <= l) {
      for (; u > l;) u -= 360;
      for (; u < c;) u += 360;
      d = u >= c && u <= l;
    } else {
      for (; u > c;) u -= 360;
      for (; u < l;) u += 360;
      d = u >= l && u <= c;
    }
    return d ? Zm(Zm({}, t), {}, { radius: i, angle: lh(u, t) }) : null;
  },
  dh = (e) =>
    !(0, B.isValidElement)(e) &&
    typeof e != `function` &&
    typeof e != `boolean` &&
    e != null
      ? e.className
      : ``;
function fh(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function ph(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ph(Object(n), !0).forEach(function (t) {
          hh(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ph(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hh(e, t, n) {
  return (
    (t = gh(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gh(e) {
  var t = _h(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _h(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vh(e, t, n) {
  return su(e) || su(t)
    ? n
    : eu(t)
      ? (0, Xl.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var yh = (e, t, n, r, i) => {
    var a = -1,
      o = t?.length ?? 0;
    if (o <= 1 || e == null) return 0;
    if (
      r === `angleAxis` &&
      i != null &&
      Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6
    )
      for (var s = 0; s < o; s++) {
        var c = s > 0 ? n[s - 1].coordinate : n[o - 1].coordinate,
          l = n[s].coordinate,
          u = s >= o - 1 ? n[0].coordinate : n[s + 1].coordinate,
          d = void 0;
        if (Zl(l - c) !== Zl(u - l)) {
          var f = [];
          if (Zl(u - l) === Zl(i[1] - i[0])) {
            d = u;
            var p = l + i[1] - i[0];
            ((f[0] = Math.min(p, (p + c) / 2)),
              (f[1] = Math.max(p, (p + c) / 2)));
          } else {
            d = c;
            var m = u + i[1] - i[0];
            ((f[0] = Math.min(l, (m + l) / 2)),
              (f[1] = Math.max(l, (m + l) / 2)));
          }
          var h = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
          if ((e > h[0] && e <= h[1]) || (e >= f[0] && e <= f[1])) {
            ({ index: a } = n[s]);
            break;
          }
        } else {
          var g = Math.min(c, u),
            _ = Math.max(c, u);
          if (e > (g + l) / 2 && e <= (_ + l) / 2) {
            ({ index: a } = n[s]);
            break;
          }
        }
      }
    else if (t) {
      for (var v = 0; v < o; v++)
        if (
          (v === 0 && e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v > 0 &&
            v < o - 1 &&
            e > (t[v].coordinate + t[v - 1].coordinate) / 2 &&
            e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v === o - 1 && e > (t[v].coordinate + t[v - 1].coordinate) / 2)
        ) {
          ({ index: a } = t[v]);
          break;
        }
    }
    return a;
  },
  bh = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        V(e[a])
      )
        return mh(mh({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        V(e[o])
      )
        return mh(mh({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  xh = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Sh = (e, t, n, r) => {
    if (r) return e.map((e) => e.coordinate);
    var i,
      a,
      o = e.map(
        (e) => (
          e.coordinate === t && (i = !0),
          e.coordinate === n && (a = !0),
          e.coordinate
        ),
      );
    return (i || o.push(t), a || o.push(n), o);
  },
  Ch = (e, t, n) => {
    if (!e) return null;
    var {
      duplicateDomain: r,
      type: i,
      range: a,
      scale: o,
      realScaleType: s,
      isCategorical: c,
      categoricalDomain: l,
      tickCount: u,
      ticks: d,
      niceTicks: f,
      axisType: p,
    } = e;
    if (!o) return null;
    var m = s === `scaleBand` && o.bandwidth ? o.bandwidth() / 2 : 2,
      h = (t || n) && i === `category` && o.bandwidth ? o.bandwidth() / m : 0;
    return (
      (h =
        p === `angleAxis` && a && a.length >= 2 ? Zl(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !Ql(e.coordinate))
        : c && l
          ? l.map((e, t) => ({
              coordinate: o(e) + h,
              value: e,
              index: t,
              offset: h,
            }))
          : o.ticks && !n && u != null
            ? o
                .ticks(u)
                .map((e, t) => ({
                  coordinate: o(e) + h,
                  value: e,
                  offset: h,
                  index: t,
                }))
            : o
                .domain()
                .map((e, t) => ({
                  coordinate: o(e) + h,
                  value: r ? r[e] : e,
                  index: t,
                  offset: h,
                }))
    );
  },
  wh = 1e-4,
  Th = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - wh,
        a = Math.max(r[0], r[1]) + wh,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Eh = (e, t) => {
    if (!t || t.length !== 2 || !V(t[0]) || !V(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!V(e[0]) || e[0] < n) && (i[0] = n),
      (!V(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  Dh = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = Ql(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: Hl,
    none: Ll,
    silhouette: Ul,
    wiggle: Wl,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = Ql(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  Oh = (e, t, n) => {
    var r = Dh[n];
    return Vl()
      .keys(t)
      .value((e, t) => +vh(e, t, 0))
      .order(Rl)
      .offset(r)(e);
  };
function kh(e) {
  return e == null ? void 0 : String(e);
}
var Ah = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = vh(a, t.dataKey, t.scale.domain()[o]);
    return su(s) ? null : t.scale(s) - i / 2 + r;
  },
  jh = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Mh = (e) => {
    var t = e.flat(2).filter(V);
    return [Math.min(...t), Math.max(...t)];
  },
  Nh = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Ph = (e, t, n) => {
    if (e != null)
      return Nh(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Mh(fh(r, t, n));
                  return [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  Fh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Ih = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Lh = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, Bd.default)(t, (e) => e.coordinate),
          a = 1 / 0,
          o = 1,
          s = i.length;
        o < s;
        o++
      ) {
        var c = i[o],
          l = i[o - 1];
        a = Math.min((c.coordinate || 0) - (l.coordinate || 0), a);
      }
      return a === 1 / 0 ? 0 : a;
    }
    return n ? void 0 : 0;
  };
function Rh(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return mh(mh({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function zh(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function Bh(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? uh({ x: e, y: t }, r)
      : null;
}
var Vh = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return mh(
          mh(mh({}, r), ih(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return mh(
        mh(mh({}, r), ih(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  Hh = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  Uh = (e) => e.layout.width,
  Wh = (e) => e.layout.height,
  Gh = (e) => e.layout.scale,
  Kh = (e) => e.layout.margin,
  qh = U(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Jh = U(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Yh = `data-recharts-item-index`,
  Xh = `data-recharts-item-data-key`;
function Zh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zh(Object(n), !0).forEach(function (t) {
          $h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zh(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $h(e, t, n) {
  return (
    (t = eg(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function eg(e) {
  var t = tg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ng = (e) => e.brush.height;
function rg(e) {
  return Jh(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function ig(e) {
  return Jh(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function ag(e) {
  return qh(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function og(e) {
  return qh(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var sg = U(
    [Uh, Wh, Kh, ng, rg, ig, ag, og, Vd, Hd],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = Qh(
          Qh({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = bh(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return Qh(
        Qh({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  cg = U(sg, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  lg = U(Uh, Wh, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  ug = (0, B.createContext)(null),
  dg = () => (0, B.useContext)(ug) != null,
  fg = (e) => e.brush,
  pg = U([fg, sg, Kh], (e, t, n) => ({
    height: e.height,
    x: V(e.x) ? e.x : t.left,
    y: V(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: V(e.width) ? e.width : t.width,
  }));
function mg(e) {
  return Number.isFinite(e);
}
function hg(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
var gg = (0, B.createContext)({ width: -1, height: -1 }),
  _g = () => (0, B.useContext)(gg),
  vg = () => {
    var e = dg(),
      t = H(cg),
      n = H(pg),
      r = H(fg)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  yg = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  bg = () => H(sg) ?? yg,
  xg = () => H(Uh),
  Sg = () => H(Wh),
  Cg = () => H((e) => e.layout.margin),
  W = (e) => e.layout.layoutType,
  wg = () => H(W),
  Tg = (e) => {
    var t = hd(),
      n = dg(),
      { width: r, height: i } = e,
      a = _g(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, B.useEffect)(() => {
        !n && hg(o) && hg(s) && t(qm({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  Eg = tm({
    name: `legend`,
    initialState: {
      settings: {
        layout: `horizontal`,
        align: `center`,
        verticalAlign: `middle`,
        itemSorter: `value`,
      },
      size: { width: 0, height: 0 },
      payload: [],
    },
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(rp(t.payload));
        },
        prepare: jp(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Qf(e).payload.indexOf(rp(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: jp(),
      },
    },
  }),
  {
    setLegendSize: Dg,
    setLegendSettings: Og,
    addLegendPayload: kg,
    removeLegendPayload: Ag,
  } = Eg.actions,
  jg = Eg.reducer,
  Mg = e(i()),
  Ng = [`contextPayload`];
function Pg() {
  return (
    (Pg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pg.apply(null, arguments)
  );
}
function Fg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ig(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fg(Object(n), !0).forEach(function (t) {
          Lg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Lg(e, t, n) {
  return (
    (t = Rg(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Rg(e) {
  var t = zg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Bg(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Vg(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Vg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Hg(e) {
  return e.value;
}
function Ug(e) {
  var { contextPayload: t } = e,
    n = Bg(e, Ng),
    r = ld(t, e.payloadUniqBy, Hg),
    i = Ig(Ig({}, n), {}, { payload: r });
  return B.isValidElement(e.content)
    ? B.cloneElement(e.content, i)
    : typeof e.content == `function`
      ? B.createElement(e.content, i)
      : B.createElement(Pu, i);
}
function Wg(e, t, n, r, i, a) {
  var { layout: o, align: s, verticalAlign: c } = t,
    l,
    u;
  return (
    (e &&
      ((e.left !== void 0 && e.left !== null) ||
        (e.right !== void 0 && e.right !== null))) ||
      (l =
        s === `center` && o === `vertical`
          ? { left: ((r || 0) - a.width) / 2 }
          : s === `right`
            ? { right: (n && n.right) || 0 }
            : { left: (n && n.left) || 0 }),
    (e &&
      ((e.top !== void 0 && e.top !== null) ||
        (e.bottom !== void 0 && e.bottom !== null))) ||
      (u =
        c === `middle`
          ? { top: ((i || 0) - a.height) / 2 }
          : c === `bottom`
            ? { bottom: (n && n.bottom) || 0 }
            : { top: (n && n.top) || 0 }),
    Ig(Ig({}, l), u)
  );
}
function Gg(e) {
  var t = hd();
  return (
    (0, B.useEffect)(() => {
      t(Og(e));
    }, [t, e]),
    null
  );
}
function Kg(e) {
  var t = hd();
  return (
    (0, B.useEffect)(
      () => (
        t(Dg(e)),
        () => {
          t(Dg({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function qg(e) {
  var t = Wd(),
    n = xc(),
    r = Cg(),
    { width: i, height: a, wrapperStyle: o, portal: s } = e,
    [c, l] = Kd([t]),
    u = xg(),
    d = Sg();
  if (u == null || d == null) return null;
  var f = u - (r.left || 0) - (r.right || 0),
    p = Jg.getWidthOrHeight(e.layout, a, i, f),
    m = s
      ? o
      : Ig(
          Ig(
            {
              position: `absolute`,
              width: p?.width || i || `auto`,
              height: p?.height || a || `auto`,
            },
            Wg(o, e, r, u, d, c),
          ),
          o,
        ),
    h = s ?? n;
  if (h == null) return null;
  var g = B.createElement(
    `div`,
    { className: `recharts-legend-wrapper`, style: m, ref: l },
    B.createElement(Gg, {
      layout: e.layout,
      align: e.align,
      verticalAlign: e.verticalAlign,
      itemSorter: e.itemSorter,
    }),
    B.createElement(Kg, { width: c.width, height: c.height }),
    B.createElement(
      Ug,
      Pg({}, e, p, {
        margin: r,
        chartWidth: u,
        chartHeight: d,
        contextPayload: t,
      }),
    ),
  );
  return (0, Mg.createPortal)(g, h);
}
var Jg = class extends B.PureComponent {
  static getWidthOrHeight(e, t, n, r) {
    return e === `vertical` && V(t)
      ? { height: t }
      : e === `horizontal`
        ? { width: n || r }
        : null;
  }
  render() {
    return B.createElement(qg, this.props);
  }
};
(Lg(Jg, `displayName`, `Legend`),
  Lg(Jg, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    itemSorter: `value`,
    layout: `horizontal`,
    verticalAlign: `bottom`,
  }));
function Yg() {
  return (
    (Yg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yg.apply(null, arguments)
  );
}
function Xg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xg(Object(n), !0).forEach(function (t) {
          Qg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Qg(e, t, n) {
  return (
    (t = $g(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $g(e) {
  var t = e_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function e_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function t_(e) {
  return Array.isArray(e) && eu(e[0]) && eu(e[1]) ? e.join(` ~ `) : e;
}
var n_ = (e) => {
    var {
        separator: t = ` : `,
        contentStyle: n = {},
        itemStyle: r = {},
        labelStyle: i = {},
        payload: a,
        formatter: o,
        itemSorter: s,
        wrapperClassName: c,
        labelClassName: l,
        label: u,
        labelFormatter: d,
        accessibilityLayer: f = !1,
      } = e,
      p = () => {
        if (a && a.length) {
          var e = { padding: 0, margin: 0 },
            n = (s ? (0, Bd.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || t_,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = Zg(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return B.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: f,
                },
                eu(u)
                  ? B.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                eu(u)
                  ? B.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                B.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                B.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return B.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      m = Zg(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = Zg({ margin: 0 }, i),
      g = !su(u),
      _ = g ? u : ``,
      v = z(`recharts-default-tooltip`, c),
      y = z(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return B.createElement(
      `div`,
      Yg({ className: v, style: m }, b),
      B.createElement(
        `p`,
        { className: y, style: h },
        B.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  r_ = `recharts-tooltip-wrapper`,
  i_ = { visibility: `hidden` };
function a_(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return z(r_, {
    [`${r_}-right`]: V(n) && t && V(t.x) && n >= t.x,
    [`${r_}-left`]: V(n) && t && V(t.x) && n < t.x,
    [`${r_}-bottom`]: V(r) && t && V(t.y) && r >= t.y,
    [`${r_}-top`]: V(r) && t && V(t.y) && r < t.y,
  });
}
function o_(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: n,
    key: r,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: s,
    viewBox: c,
    viewBoxDimension: l,
  } = e;
  if (a && V(a[r])) return a[r];
  var u = n[r] - s - (i > 0 ? i : 0),
    d = n[r] + i;
  if (t[r]) return o[r] ? u : d;
  var f = c[r];
  return f == null
    ? 0
    : o[r]
      ? Math.max(u < f ? d : u, f)
      : l == null
        ? 0
        : d + s > f + l
          ? Math.max(u, f)
          : Math.max(d, f);
}
function s_(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function c_(e) {
  var {
      allowEscapeViewBox: t,
      coordinate: n,
      offsetTopLeft: r,
      position: i,
      reverseDirection: a,
      tooltipBox: o,
      useTranslate3d: s,
      viewBox: c,
    } = e,
    l,
    u,
    d;
  return (
    o.height > 0 && o.width > 0 && n
      ? ((u = o_({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `x`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (d = o_({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `y`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (l = s_({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = i_),
    {
      cssProperties: l,
      cssClasses: a_({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function l_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function u_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? l_(Object(n), !0).forEach(function (t) {
          d_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : l_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function d_(e, t, n) {
  return (
    (t = f_(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function f_(e) {
  var t = p_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function p_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var m_ = class extends B.PureComponent {
    constructor() {
      (super(...arguments),
        d_(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        d_(this, `handleKeyDown`, (e) => {
          e.key === `Escape` &&
            this.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: this.props.coordinate?.x ?? 0,
                y: this.props.coordinate?.y ?? 0,
              },
            });
        }));
    }
    componentDidMount() {
      document.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleKeyDown);
    }
    componentDidUpdate() {
      this.state.dismissed &&
        (this.props.coordinate?.x !== this.state.dismissedAtCoordinate.x ||
          this.props.coordinate?.y !== this.state.dismissedAtCoordinate.y) &&
        (this.state.dismissed = !1);
    }
    render() {
      var {
          active: e,
          allowEscapeViewBox: t,
          animationDuration: n,
          animationEasing: r,
          children: i,
          coordinate: a,
          hasPayload: o,
          isAnimationActive: s,
          offset: c,
          position: l,
          reverseDirection: u,
          useTranslate3d: d,
          viewBox: f,
          wrapperStyle: p,
          lastBoundingBox: m,
          innerRef: h,
          hasPortalFromProps: g,
        } = this.props,
        { cssClasses: _, cssProperties: v } = c_({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = u_(
          u_(
            {},
            g
              ? {}
              : u_(
                  u_(
                    { transition: s && e ? `transform ${n}ms ${r}` : void 0 },
                    v,
                  ),
                  {},
                  {
                    pointerEvents: `none`,
                    visibility:
                      !this.state.dismissed && e && o ? `visible` : `hidden`,
                    position: `absolute`,
                    top: 0,
                    left: 0,
                  },
                ),
          ),
          {},
          {
            visibility: !this.state.dismissed && e && o ? `visible` : `hidden`,
          },
          p,
        );
      return B.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: _,
          style: y,
          ref: h,
        },
        i,
      );
    }
  },
  h_ = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  g_ = () => H((e) => e.rootProps.accessibilityLayer);
function __() {
  return (
    (__ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    __.apply(null, arguments)
  );
}
function v_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function y_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? v_(Object(n), !0).forEach(function (t) {
          b_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : v_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function b_(e, t, n) {
  return (
    (t = x_(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function x_(e) {
  var t = S_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function S_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var C_ = {
    curveBasisClosed: gl,
    curveBasisOpen: vl,
    curveBasis: ml,
    curveBumpX: Wc,
    curveBumpY: Gc,
    curveLinearClosed: bl,
    curveLinear: Rc,
    curveMonotoneX: Ol,
    curveMonotoneY: kl,
    curveNatural: Ml,
    curveStep: Pl,
    curveStepAfter: Il,
    curveStepBefore: Fl,
  },
  w_ = (e) => mg(e.x) && mg(e.y),
  T_ = (e) => e.x,
  E_ = (e) => e.y,
  D_ = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${cu(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? C_[`${n}${t === `vertical` ? `Y` : `X`}`]
      : C_[n] || Rc;
  },
  O_ = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = D_(t, i),
      s = a ? n.filter(w_) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => w_(e)) : r,
        u = s.map((e, t) => y_(y_({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? Hc()
                .y(E_)
                .x1(T_)
                .x0((e) => e.base.x)
            : Hc()
                .x(T_)
                .y1(E_)
                .y0((e) => e.base.y)),
        c.defined(w_).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && V(r)
          ? Hc().y(E_).x1(T_).x0(r)
          : V(r)
            ? Hc().x(T_).y1(E_).y0(r)
            : Vc().x(T_).y(E_)),
      c.defined(w_).curve(o),
      c(s)
    );
  },
  k_ = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? O_(e) : r;
    return B.createElement(
      `path`,
      __({}, oc(e), wu(e), {
        className: z(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  A_ = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function j_() {
  return (
    (j_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    j_.apply(null, arguments)
  );
}
function M_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function N_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? M_(Object(n), !0).forEach(function (t) {
          P_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : M_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function P_(e, t, n) {
  return (
    (t = F_(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function F_(e) {
  var t = I_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function I_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function L_(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = R_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function R_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var z_ = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  B_ = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = L_(e, A_),
      l = N_({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !V(t) || !V(n) || !V(a) || !V(o) || !V(r) || !V(i)
      ? null
      : B.createElement(
          `path`,
          j_({}, cc(l), {
            className: z(`recharts-cross`, s),
            d: z_(t, n, a, o, r, i),
          }),
        );
  };
function V_(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    x: e === `horizontal` ? t.x - i : n.left + 0.5,
    y: e === `horizontal` ? n.top + 0.5 : t.y - i,
    width: e === `horizontal` ? r : n.width - 1,
    height: e === `horizontal` ? n.height - 1 : r,
  };
}
function H_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function U_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? H_(Object(n), !0).forEach(function (t) {
          W_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : H_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function W_(e, t, n) {
  return (
    (t = G_(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function G_(e) {
  var t = K_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function K_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function q_(e, t) {
  var n = U_({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function J_() {}
function Y_(e) {
  return e != null;
}
function X_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Z_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? X_(Object(n), !0).forEach(function (t) {
          Q_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : X_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Q_(e, t, n) {
  return (
    (t = $_(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $_(e) {
  var t = ev(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ev(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var tv = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  nv = (e, t, n) => e.map((e) => `${tv(e)} ${t}ms ${n}`).join(`,`),
  rv = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  iv = (e, t) =>
    Object.keys(t).reduce((n, r) => Z_(Z_({}, n), {}, { [r]: e(r, t[r]) }), {});
function av(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? av(Object(n), !0).forEach(function (t) {
          sv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : av(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sv(e, t, n) {
  return (
    (t = cv(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cv(e) {
  var t = lv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var uv = (e, t, n) => e + (t - e) * n,
  dv = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  fv = (e, t, n) => {
    var r = iv((t, n) => {
      if (dv(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return ov(ov({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? iv(
          (e, t) =>
            dv(t)
              ? ov(
                  ov({}, t),
                  {},
                  {
                    velocity: uv(t.velocity, r[e].velocity, n),
                    from: uv(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : fv(e, r, n - 1);
  };
function pv(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        ov(ov({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => iv((e, t) => t.from, s),
    l = () => !Object.values(s).filter(dv).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = fv(n, s, f)),
        i(ov(ov(ov({}, e), t), c())),
        (o = r),
        l() || (u = a.setTimeout(d)));
    };
  return () => (
    (u = a.setTimeout(d)),
    () => {
      u();
    }
  );
}
function mv(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => ov(ov({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = iv((e, t) => uv(...t, n(d)), c);
      if ((a(ov(ov(ov({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = iv((e, t) => uv(...t, n(1)), c);
        a(ov(ov(ov({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var hv = (e, t, n, r, i, a) => {
    var o = rv(e, t);
    return n.isStepper === !0 ? pv(e, t, n, o, i, a) : mv(e, t, n, r, o, i, a);
  },
  gv = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  _v = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  vv = (e, t) => (n) => _v(gv(e, t), n),
  yv = (e, t) => (n) =>
    _v(
      [
        ...gv(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  bv = function () {
    var e,
      t,
      n,
      r,
      i = [...arguments];
    if (i.length === 1)
      switch (i[0]) {
        case `linear`:
          [e, n, t, r] = [0, 0, 1, 1];
          break;
        case `ease`:
          [e, n, t, r] = [0.25, 0.1, 0.25, 1];
          break;
        case `ease-in`:
          [e, n, t, r] = [0.42, 0, 1, 1];
          break;
        case `ease-out`:
          [e, n, t, r] = [0.42, 0, 0.58, 1];
          break;
        case `ease-in-out`:
          [e, n, t, r] = [0, 0, 0.58, 1];
          break;
        default:
          var a = i[0].split(`(`);
          a[0] === `cubic-bezier` &&
            a[1].split(`)`)[0].split(`,`).length === 4 &&
            ([e, n, t, r] = a[1]
              .split(`)`)[0]
              .split(`,`)
              .map((e) => parseFloat(e)));
      }
    else i.length === 4 && ([e, n, t, r] = i);
    var o = vv(e, t),
      s = vv(n, r),
      c = yv(e, t),
      l = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
      u = (e) => {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var i = o(n) - t,
            a = c(n);
          if (Math.abs(i - t) < 1e-4 || a < 1e-4) return s(n);
          n = l(n - i / a);
        }
        return s(n);
      };
    return ((u.isStepper = !1), u);
  },
  xv = function () {
    var {
        stiff: e = 100,
        damping: t = 8,
        dt: n = 17,
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = (r, i, a) => {
        var o = a + ((-(r - i) * e - a * t) * n) / 1e3,
          s = (a * n) / 1e3 + r;
        return Math.abs(s - i) < 1e-4 && Math.abs(o) < 1e-4 ? [i, 0] : [s, o];
      };
    return ((r.isStepper = !0), (r.dt = n), r);
  },
  Sv = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return bv(e);
        case `spring`:
          return xv();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return bv(e);
      }
    return typeof e == `function` ? e : null;
  };
function Cv(e) {
  var t,
    n = () => null,
    r = !1,
    i = null,
    a = (o) => {
      if (!r) {
        if (Array.isArray(o)) {
          if (!o.length) return;
          var [s, ...c] = o;
          if (typeof s == `number`) {
            i = e.setTimeout(a.bind(null, c), s);
            return;
          }
          (a(s), (i = e.setTimeout(a.bind(null, c))));
        } else
          (typeof o == `string` && ((t = o), n(t)),
            typeof o == `object` && ((t = o), n(t)),
            typeof o == `function` && o());
      }
    };
  return {
    stop: () => {
      r = !0;
    },
    start: (e) => {
      ((r = !1), (i &&= (i(), null)), a(e));
    },
    subscribe: (e) => (
      (n = e),
      () => {
        n = () => null;
      }
    ),
    getTimeoutController: () => e,
  };
}
var wv = class {
  setTimeout(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      n = performance.now(),
      r = null,
      i = (a) => {
        a - n >= t
          ? e(a)
          : typeof requestAnimationFrame == `function` &&
            (r = requestAnimationFrame(i));
      };
    return (
      (r = requestAnimationFrame(i)),
      () => {
        cancelAnimationFrame(r);
      }
    );
  }
};
function Tv() {
  return Cv(new wv());
}
var Ev = (0, B.createContext)(Tv);
function Dv(e, t) {
  var n = (0, B.useContext)(Ev);
  return (0, B.useMemo)(() => t ?? n(e), [e, t, n]);
}
var Ov = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  kv = { t: 0 },
  Av = { t: 1 };
function jv(e) {
  var t = q_(e, Ov),
    {
      isActive: n,
      canBegin: r,
      duration: i,
      easing: a,
      begin: o,
      onAnimationEnd: s,
      onAnimationStart: c,
      children: l,
    } = t,
    u = Dv(t.animationId, t.animationManager),
    [d, f] = (0, B.useState)(n ? kv : Av),
    p = (0, B.useRef)(null);
  return (
    (0, B.useEffect)(() => {
      n || f(Av);
    }, [n]),
    (0, B.useEffect)(() => {
      if (!n || !r) return J_;
      var e = hv(kv, Av, Sv(a), i, f, u.getTimeoutController());
      return (
        u.start([
          c,
          o,
          () => {
            p.current = e();
          },
          i,
          s,
        ]),
        () => {
          (u.stop(), p.current && p.current(), s());
        }
      );
    }, [n, r, i, a, o, c, s, u]),
    l(d.t)
  );
}
function Mv(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, B.useRef)(nu(t)),
    r = (0, B.useRef)(e);
  return (r.current !== e && ((n.current = nu(t)), (r.current = e)), n.current);
}
var Nv = [`radius`],
  Pv = [`radius`];
function Fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fv(Object(n), !0).forEach(function (t) {
          Lv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Lv(e, t, n) {
  return (
    (t = Rv(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Rv(e) {
  var t = zv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Bv() {
  return (
    (Bv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bv.apply(null, arguments)
  );
}
function Vv(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Hv(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Hv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Uv = (e, t, n, r, i) => {
    var a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
      o = r >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = +((r >= 0 && n >= 0) || (r < 0 && n < 0)),
      l;
    if (a > 0 && i instanceof Array) {
      for (var u = [0, 0, 0, 0], d = 0, f = 4; d < f; d++)
        u[d] = i[d] > a ? a : i[d];
      ((l = `M${e},${t + o * u[0]}`),
        u[0] > 0 && (l += `A ${u[0]},${u[0]},0,0,${c},${e + s * u[0]},${t}`),
        (l += `L ${e + n - s * u[1]},${t}`),
        u[1] > 0 &&
          (l += `A ${u[1]},${u[1]},0,0,${c},
        ${e + n},${t + o * u[1]}`),
        (l += `L ${e + n},${t + r - o * u[2]}`),
        u[2] > 0 &&
          (l += `A ${u[2]},${u[2]},0,0,${c},
        ${e + n - s * u[2]},${t + r}`),
        (l += `L ${e + s * u[3]},${t + r}`),
        u[3] > 0 &&
          (l += `A ${u[3]},${u[3]},0,0,${c},
        ${e},${t + r - o * u[3]}`),
        (l += `Z`));
    } else if (a > 0 && i === +i && i > 0) {
      var p = Math.min(a, i);
      l = `M ${e},${t + o * p}
            A ${p},${p},0,0,${c},${e + s * p},${t}
            L ${e + n - s * p},${t}
            A ${p},${p},0,0,${c},${e + n},${t + o * p}
            L ${e + n},${t + r - o * p}
            A ${p},${p},0,0,${c},${e + n - s * p},${t + r}
            L ${e + s * p},${t + r}
            A ${p},${p},0,0,${c},${e},${t + r - o * p} Z`;
    } else l = `M ${e},${t} h ${n} v ${r} h ${-n} Z`;
    return l;
  },
  Wv = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  Gv = (e) => {
    var t = q_(e, Wv),
      n = (0, B.useRef)(null),
      [r, i] = (0, B.useState)(-1);
    (0, B.useEffect)(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && i(e);
        } catch {}
    }, []);
    var { x: a, y: o, width: s, height: c, radius: l, className: u } = t,
      {
        animationEasing: d,
        animationDuration: f,
        animationBegin: p,
        isAnimationActive: m,
        isUpdateAnimationActive: h,
      } = t,
      g = (0, B.useRef)(s),
      _ = (0, B.useRef)(c),
      v = (0, B.useRef)(a),
      y = (0, B.useRef)(o),
      b = Mv(
        (0, B.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var x = z(`recharts-rectangle`, u);
    if (!h) {
      var S = cc(t),
        { radius: C } = S,
        w = Vv(S, Nv);
      return B.createElement(
        `path`,
        Bv({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: Uv(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      ee = y.current,
      te = `0px ${r === -1 ? 1 : r}px`,
      ne = `${r}px 0px`,
      re = nv([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return B.createElement(
      jv,
      {
        animationId: b,
        key: b,
        canBegin: r > 0,
        duration: f,
        easing: d,
        isActive: h,
        begin: p,
      },
      (e) => {
        var r = au(T, s, e),
          i = au(E, c, e),
          u = au(D, a, e),
          d = au(ee, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: re, strokeDasharray: ne }
              : { strokeDasharray: te }
            : { strokeDasharray: ne },
          p = cc(t),
          { radius: h } = p,
          b = Vv(p, Pv);
        return B.createElement(
          `path`,
          Bv({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: Uv(u, d, r, i, l),
            ref: n,
            style: Iv(Iv({}, f), t.style),
          }),
        );
      },
    );
  };
function Kv(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [ih(t, n, r, i), ih(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function qv() {
  return (
    (qv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qv.apply(null, arguments)
  );
}
var Jv = (e, t) => Zl(t - e) * Math.min(Math.abs(t - e), 359.999),
  Yv = (e) => {
    var {
        cx: t,
        cy: n,
        radius: r,
        angle: i,
        sign: a,
        isExternal: o,
        cornerRadius: s,
        cornerIsExternal: c,
      } = e,
      l = s * (o ? 1 : -1) + r,
      u = Math.asin(s / l) / th,
      d = c ? i : i + a * u,
      f = ih(t, n, l, d),
      p = ih(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: ih(t, n, l * Math.cos(u * th), m),
      theta: u,
    };
  },
  Xv = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = Jv(a, o),
      c = a + s,
      l = ih(t, n, i, a),
      u = ih(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = ih(t, n, r, a),
        p = ih(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  Zv = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        cornerRadius: a,
        forceCornerRadius: o,
        cornerIsExternal: s,
        startAngle: c,
        endAngle: l,
      } = e,
      u = Zl(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Yv({
        cx: t,
        cy: n,
        radius: i,
        angle: c,
        sign: u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      {
        circleTangency: m,
        lineTangency: h,
        theta: g,
      } = Yv({
        cx: t,
        cy: n,
        radius: i,
        angle: l,
        sign: -u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      _ = s ? Math.abs(c - l) : Math.abs(c - l) - p - g;
    if (_ < 0)
      return o
        ? `M ${f.x},${f.y}
        a${a},${a},0,0,1,${a * 2},0
        a${a},${a},0,0,1,${-a * 2},0
      `
        : Xv({
            cx: t,
            cy: n,
            innerRadius: r,
            outerRadius: i,
            startAngle: c,
            endAngle: l,
          });
    var v = `M ${f.x},${f.y}
    A${a},${a},0,0,${+(u < 0)},${d.x},${d.y}
    A${i},${i},0,${+(_ > 180)},${+(u < 0)},${m.x},${m.y}
    A${a},${a},0,0,${+(u < 0)},${h.x},${h.y}
  `;
    if (r > 0) {
      var {
          circleTangency: y,
          lineTangency: b,
          theta: x,
        } = Yv({
          cx: t,
          cy: n,
          radius: r,
          angle: c,
          sign: u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        {
          circleTangency: S,
          lineTangency: C,
          theta: w,
        } = Yv({
          cx: t,
          cy: n,
          radius: r,
          angle: l,
          sign: -u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        T = s ? Math.abs(c - l) : Math.abs(c - l) - x - w;
      if (T < 0 && a === 0) return `${v}L${t},${n}Z`;
      v += `L${C.x},${C.y}
      A${a},${a},0,0,${+(u < 0)},${S.x},${S.y}
      A${r},${r},0,${+(T > 180)},${+(u > 0)},${y.x},${y.y}
      A${a},${a},0,0,${+(u < 0)},${b.x},${b.y}Z`;
    } else v += `L${t},${n}Z`;
    return v;
  },
  Qv = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  $v = (e) => {
    var t = q_(e, Qv),
      {
        cx: n,
        cy: r,
        innerRadius: i,
        outerRadius: a,
        cornerRadius: o,
        forceCornerRadius: s,
        cornerIsExternal: c,
        startAngle: l,
        endAngle: u,
        className: d,
      } = t;
    if (a < i || l === u) return null;
    var f = z(`recharts-sector`, d),
      p = a - i,
      m = ru(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? Zv({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(m, p / 2),
              forceCornerRadius: s,
              cornerIsExternal: c,
              startAngle: l,
              endAngle: u,
            })
          : Xv({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return B.createElement(`path`, qv({}, cc(t), { className: f, d: h }));
  };
function ey(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = ih(s, c, l, d),
        p = ih(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return Kv(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var ty = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Pd();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  ny = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ty();
    function n(e) {
      return e
        ? ((e = t.toNumber(e)),
          e === 1 / 0 || e === -1 / 0
            ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
            : e === e
              ? e
              : 0)
        : e === 0
          ? e
          : 0;
    }
    e.toFinite = n;
  }),
  ry = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Rd(),
      n = ny();
    function r(e, r, i) {
      (i &&
        typeof i != `number` &&
        t.isIterateeCall(e, r, i) &&
        (r = i = void 0),
        (e = n.toFinite(e)),
        r === void 0 ? ((r = e), (e = 0)) : (r = n.toFinite(r)),
        (i = i === void 0 ? (e < r ? 1 : -1) : n.toFinite(i)));
      let a = Math.max(Math.ceil((r - e) / (i || 1)), 0),
        o = Array(a);
      for (let t = 0; t < a; t++) ((o[t] = e), (e += i));
      return o;
    }
    e.range = r;
  }),
  iy = n((e, t) => {
    t.exports = ry().range;
  });
function ay(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function oy(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function sy(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === ay || e === oy ? e : cy), (n = e), (r = e))
    : ((t = ay), (n = (t, n) => ay(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function cy() {
  return 0;
}
function ly(e) {
  return e === null ? NaN : +e;
}
function* uy(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var dy = sy(ay),
  fy = dy.right;
(dy.left, sy(ly).center);
var py = class extends Map {
  constructor(e, t = _y) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: t },
      }),
      e != null)
    )
      for (let [t, n] of e) this.set(t, n);
  }
  get(e) {
    return super.get(my(this, e));
  }
  has(e) {
    return super.has(my(this, e));
  }
  set(e, t) {
    return super.set(hy(this, e), t);
  }
  delete(e) {
    return super.delete(gy(this, e));
  }
};
function my({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function hy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function gy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function _y(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function vy(e = ay) {
  if (e === ay) return yy;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function yy(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var by = Math.sqrt(50),
  xy = Math.sqrt(10),
  Sy = Math.sqrt(2);
function Cy(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= by ? 10 : a >= xy ? 5 : a >= Sy ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? Cy(e, t, n * 2) : [s, c, l]
  );
}
function wy(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? Cy(t, e, n) : Cy(e, t, n);
  if (!(a >= i)) return [];
  let s = a - i + 1,
    c = Array(s);
  if (r) {
    if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
    else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
  } else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
  else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
  return c;
}
function Ty(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), Cy(e, t, n)[2]);
}
function Ey(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? Ty(t, e, n) : Ty(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Dy(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n < t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function Oy(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n > t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function ky(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? yy : vy(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      ky(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Ay(e, n, t), i(e[r], a) > 0 && Ay(e, n, r); o < s;) {
      for (Ay(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? Ay(e, n, s) : (++s, Ay(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Ay(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function jy(e, t, n) {
  if (((e = Float64Array.from(uy(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return Oy(e);
    if (t >= 1) return Dy(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = Dy(ky(e, a).subarray(0, a + 1));
    return o + (Oy(e.subarray(a + 1)) - o) * (i - a);
  }
}
function My(e, t, n = ly) {
  if ((r = e.length) && !isNaN((t = +t))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e);
    return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
  }
}
function Ny(e, t, n) {
  ((e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n));
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i);
    ++r < i;
  )
    a[r] = e + r * n;
  return a;
}
function Py(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
  }
  return this;
}
function Fy(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      (this.domain(e),
        typeof t == `function` ? this.interpolator(t) : this.range(t));
  }
  return this;
}
var Iy = Symbol(`implicit`);
function Ly() {
  var e = new py(),
    t = [],
    n = [],
    r = Iy;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== Iy) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new py()));
      for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
      return i;
    }),
    (i.range = function (e) {
      return arguments.length ? ((n = Array.from(e)), i) : n.slice();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return Ly(t, n).unknown(r);
    }),
    Py.apply(i, arguments),
    i
  );
}
function Ry() {
  var e = Ly().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    s = !1,
    c = 0,
    l = 0,
    u = 0.5;
  delete e.unknown;
  function d() {
    var e = t().length,
      d = i < r,
      f = d ? i : r,
      p = d ? r : i;
    ((a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o))));
    var m = Ny(e).map(function (e) {
      return f + a * e;
    });
    return n(d ? m.reverse() : m);
  }
  return (
    (e.domain = function (e) {
      return arguments.length ? (t(e), d()) : t();
    }),
    (e.range = function (e) {
      return arguments.length
        ? (([r, i] = e), (r = +r), (i = +i), d())
        : [r, i];
    }),
    (e.rangeRound = function (e) {
      return (([r, i] = e), (r = +r), (i = +i), (s = !0), d());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (e) {
      return arguments.length ? ((s = !!e), d()) : s;
    }),
    (e.padding = function (e) {
      return arguments.length ? ((c = Math.min(1, (l = +e))), d()) : c;
    }),
    (e.paddingInner = function (e) {
      return arguments.length ? ((c = Math.min(1, e)), d()) : c;
    }),
    (e.paddingOuter = function (e) {
      return arguments.length ? ((l = +e), d()) : l;
    }),
    (e.align = function (e) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, e))), d()) : u;
    }),
    (e.copy = function () {
      return Ry(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    Py.apply(d(), arguments)
  );
}
function zy(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return zy(t());
    }),
    e
  );
}
function By() {
  return zy(Ry.apply(null, arguments).paddingInner(1));
}
function Vy(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Hy(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Uy() {}
var Wy = 0.7,
  Gy = 1 / Wy,
  Ky = `\\s*([+-]?\\d+)\\s*`,
  qy = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  Jy = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Yy = /^#([0-9a-f]{3,8})$/,
  Xy = RegExp(`^rgb\\(${Ky},${Ky},${Ky}\\)$`),
  Zy = RegExp(`^rgb\\(${Jy},${Jy},${Jy}\\)$`),
  Qy = RegExp(`^rgba\\(${Ky},${Ky},${Ky},${qy}\\)$`),
  $y = RegExp(`^rgba\\(${Jy},${Jy},${Jy},${qy}\\)$`),
  eb = RegExp(`^hsl\\(${qy},${Jy},${Jy}\\)$`),
  tb = RegExp(`^hsla\\(${qy},${Jy},${Jy},${qy}\\)$`),
  nb = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Vy(Uy, sb, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: rb,
  formatHex: rb,
  formatHex8: ib,
  formatHsl: ab,
  formatRgb: ob,
  toString: ob,
});
function rb() {
  return this.rgb().formatHex();
}
function ib() {
  return this.rgb().formatHex8();
}
function ab() {
  return bb(this).formatHsl();
}
function ob() {
  return this.rgb().formatRgb();
}
function sb(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Yy.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? cb(t)
          : n === 3
            ? new fb(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? lb(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? lb(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Xy.exec(e))
        ? new fb(t[1], t[2], t[3], 1)
        : (t = Zy.exec(e))
          ? new fb(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Qy.exec(e))
            ? lb(t[1], t[2], t[3], t[4])
            : (t = $y.exec(e))
              ? lb(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = eb.exec(e))
                ? yb(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = tb.exec(e))
                  ? yb(t[1], t[2] / 100, t[3] / 100, t[4])
                  : nb.hasOwnProperty(e)
                    ? cb(nb[e])
                    : e === `transparent`
                      ? new fb(NaN, NaN, NaN, 0)
                      : null
  );
}
function cb(e) {
  return new fb((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function lb(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new fb(e, t, n, r));
}
function ub(e) {
  return (
    e instanceof Uy || (e = sb(e)),
    e ? ((e = e.rgb()), new fb(e.r, e.g, e.b, e.opacity)) : new fb()
  );
}
function db(e, t, n, r) {
  return arguments.length === 1 ? ub(e) : new fb(e, t, n, r ?? 1);
}
function fb(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Vy(
  fb,
  db,
  Hy(Uy, {
    brighter(e) {
      return (
        (e = e == null ? Gy : Gy ** +e),
        new fb(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Wy : Wy ** +e),
        new fb(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new fb(_b(this.r), _b(this.g), _b(this.b), gb(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: pb,
    formatHex: pb,
    formatHex8: mb,
    formatRgb: hb,
    toString: hb,
  }),
);
function pb() {
  return `#${vb(this.r)}${vb(this.g)}${vb(this.b)}`;
}
function mb() {
  return `#${vb(this.r)}${vb(this.g)}${vb(this.b)}${vb((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function hb() {
  let e = gb(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${_b(this.r)}, ${_b(this.g)}, ${_b(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function gb(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _b(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vb(e) {
  return ((e = _b(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function yb(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Sb(e, t, n, r)
  );
}
function bb(e) {
  if (e instanceof Sb) return new Sb(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Uy || (e = sb(e)), !e)) return new Sb();
  if (e instanceof Sb) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    s = a - i,
    c = (a + i) / 2;
  return (
    s
      ? ((o =
          t === a
            ? (n - r) / s + (n < r) * 6
            : n === a
              ? (r - t) / s + 2
              : (t - n) / s + 4),
        (s /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (s = c > 0 && c < 1 ? 0 : o),
    new Sb(o, s, c, e.opacity)
  );
}
function xb(e, t, n, r) {
  return arguments.length === 1 ? bb(e) : new Sb(e, t, n, r ?? 1);
}
function Sb(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Vy(
  Sb,
  xb,
  Hy(Uy, {
    brighter(e) {
      return (
        (e = e == null ? Gy : Gy ** +e),
        new Sb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Wy : Wy ** +e),
        new Sb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new fb(
        Tb(e >= 240 ? e - 240 : e + 120, i, r),
        Tb(e, i, r),
        Tb(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new Sb(Cb(this.h), wb(this.s), wb(this.l), gb(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let e = gb(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${Cb(this.h)}, ${wb(this.s) * 100}%, ${wb(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function Cb(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function wb(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Tb(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
var Eb = (e) => () => e;
function Db(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Ob(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function kb(e) {
  return (e = +e) == 1
    ? Ab
    : function (t, n) {
        return n - t ? Ob(t, n, e) : Eb(isNaN(t) ? n : t);
      };
}
function Ab(e, t) {
  var n = t - e;
  return n ? Db(e, n) : Eb(isNaN(e) ? t : e);
}
var jb = (function e(t) {
  var n = kb(t);
  function r(e, t) {
    var r = n((e = db(e)).r, (t = db(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Ab(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function Mb(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function Nb(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Pb(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = Ub(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function Fb(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Ib(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Lb(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = Ub(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var Rb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  zb = new RegExp(Rb.source, `g`);
function Bb(e) {
  return function () {
    return e;
  };
}
function Vb(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function Hb(e, t) {
  var n = (Rb.lastIndex = zb.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = Rb.exec(e)) && (i = zb.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Ib(r, i) })),
      (n = zb.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? Vb(c[0].x)
        : Bb(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function Ub(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Eb(t)
    : (n === `number`
        ? Ib
        : n === `string`
          ? (r = sb(t))
            ? ((t = r), jb)
            : Hb
          : t instanceof sb
            ? jb
            : t instanceof Date
              ? Fb
              : Nb(t)
                ? Mb
                : Array.isArray(t)
                  ? Pb
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? Lb
                    : Ib)(e, t);
}
function Wb(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function Gb(e, t) {
  t === void 0 && ((t = e), (e = Ub));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function Kb(e) {
  return function () {
    return e;
  };
}
function qb(e) {
  return +e;
}
var Jb = [0, 1];
function Yb(e) {
  return e;
}
function Xb(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Kb(isNaN(t) ? NaN : 0.5);
}
function Zb(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Qb(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = Xb(i, r)), (a = n(o, a))) : ((r = Xb(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function $b(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = Xb(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = fy(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function ex(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function tx() {
  var e = Jb,
    t = Jb,
    n = Ub,
    r,
    i,
    a,
    o = Yb,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== Yb && (o = Zb(e[0], e[n - 1])),
      (s = n > 2 ? $b : Qb),
      (c = l = null),
      d
    );
  }
  function d(i) {
    return i == null || isNaN((i = +i))
      ? a
      : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), Ib))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, qb)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = Wb), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : Yb), u()) : o !== Yb;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function nx() {
  return tx()(Yb, Yb);
}
function rx(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function ix(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function ax(e) {
  return ((e = ix(Math.abs(e))), e ? e[1] : NaN);
}
function ox(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function sx(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var cx =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function lx(e) {
  if (!(t = cx.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new ux({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
lx.prototype = ux.prototype;
function ux(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
ux.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function dx(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var fx;
function px(e, t) {
  var n = ix(e, t);
  if (!n) return ((fx = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (fx = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + ix(e, Math.max(0, t + a - 1))[0];
}
function mx(e, t) {
  var n = ix(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var hx = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: rx,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => mx(e * 100, t),
  r: mx,
  s: px,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function gx(e) {
  return e;
}
var _x = Array.prototype.map,
  vx = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
function yx(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? gx
        : ox(_x.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? gx : sx(_x.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = lx(e);
    var u = e.fill,
      d = e.align,
      f = e.sign,
      p = e.symbol,
      m = e.zero,
      h = e.width,
      g = e.comma,
      _ = e.precision,
      v = e.trim,
      y = e.type;
    (y === `n`
      ? ((g = !0), (y = `g`))
      : hx[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`)));
    var b =
        (l && l.prefix !== void 0 ? l.prefix : ``) +
        (p === `$`
          ? n
          : p === `#` && /[boxX]/.test(y)
            ? `0` + y.toLowerCase()
            : ``),
      x =
        (p === `$` ? r : /[%p]/.test(y) ? o : ``) +
        (l && l.suffix !== void 0 ? l.suffix : ``),
      S = hx[y],
      C = /[defgprs%]/.test(y);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(y)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function w(e) {
      var n = b,
        r = x,
        o,
        l,
        p;
      if (y === `c`) ((r = S(e) + r), (e = ``));
      else {
        e = +e;
        var w = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : S(Math.abs(e), _)),
          v && (e = dx(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && fx !== void 0 ? vx[8 + fx / 3] : ``) +
            r +
            (w && f === `(` ? `)` : ``)),
          C)
        ) {
          for (o = -1, l = e.length; ++o < l;)
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              ((r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r),
                (e = e.slice(0, o)));
              break;
            }
        }
      }
      g && !m && (e = t(e, 1 / 0));
      var T = n.length + e.length + r.length,
        E = T < h ? Array(h - T + 1).join(u) : ``;
      switch (
        (g && m && ((e = t(E + e, E.length ? h - r.length : 1 / 0)), (E = ``)),
        d)
      ) {
        case `<`:
          e = n + e + r + E;
          break;
        case `=`:
          e = n + E + e + r;
          break;
        case `^`:
          e = E.slice(0, (T = E.length >> 1)) + n + e + r + E.slice(T);
          break;
        default:
          e = E + n + e + r;
      }
      return a(e);
    }
    return (
      (w.toString = function () {
        return e + ``;
      }),
      w
    );
  }
  function u(e, t) {
    var n = Math.max(-8, Math.min(8, Math.floor(ax(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = lx(e)), (e.type = `f`), e), { suffix: vx[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var bx, xx, Sx;
Cx({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function Cx(e) {
  return ((bx = yx(e)), (xx = bx.format), (Sx = bx.formatPrefix), bx);
}
function wx(e) {
  return Math.max(0, -ax(Math.abs(e)));
}
function Tx(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(ax(t) / 3))) * 3 - ax(Math.abs(e)),
  );
}
function Ex(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, ax(t) - ax(e)) + 1
  );
}
function Dx(e, t, n, r) {
  var i = Ey(e, t, n),
    a;
  switch (((r = lx(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = Tx(i, o))) && (r.precision = a),
        Sx(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Ex(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = wx(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return xx(r);
}
function Ox(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return wy(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Dx(r[0], r[r.length - 1], e ?? 10, n);
    }),
    (e.nice = function (n) {
      n ??= 10;
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        s = r[a],
        c,
        l,
        u = 10;
      for (
        s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l));
        u-- > 0;
      ) {
        if (((l = Ty(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
        if (l > 0) ((o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l));
        else if (l < 0)
          ((o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function kx() {
  var e = nx();
  return (
    (e.copy = function () {
      return ex(e, kx());
    }),
    Py.apply(e, arguments),
    Ox(e)
  );
}
function Ax(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, qb)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return Ax(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, qb) : [0, 1]),
    Ox(n)
  );
}
function jx(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
function Mx(e) {
  return Math.log(e);
}
function Nx(e) {
  return Math.exp(e);
}
function Px(e) {
  return -Math.log(-e);
}
function Fx(e) {
  return -Math.exp(-e);
}
function Ix(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Lx(e) {
  return e === 10 ? Ix : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Rx(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function zx(e) {
  return (t, n) => -e(-t, n);
}
function Bx(e) {
  let t = e(Mx, Nx),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Rx(r)),
      (a = Lx(r)),
      n()[0] < 0 ? ((i = zx(i)), (a = zx(a)), e(Px, Fx)) : e(Mx, Nx),
      t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = wy(o, s, p));
      } else m = wy(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = lx(n)).precision == null && (n.trim = !0),
          (n = xx(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(
        jx(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function Vx() {
  let e = Bx(tx()).domain([1, 10]);
  return (
    (e.copy = () => ex(e, Vx()).base(e.base())), Py.apply(e, arguments), e
  );
}
function Hx(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Ux(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Wx(e) {
  var t = 1,
    n = e(Hx(t), Ux(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Hx((t = +n)), Ux(t)) : t;
    }),
    Ox(n)
  );
}
function Gx() {
  var e = Wx(tx());
  return (
    (e.copy = function () {
      return ex(e, Gx()).constant(e.constant());
    }),
    Py.apply(e, arguments)
  );
}
function Kx(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function qx(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Jx(e) {
  return e < 0 ? -e * e : e * e;
}
function Yx(e) {
  var t = e(Yb, Yb),
    n = 1;
  function r() {
    return n === 1 ? e(Yb, Yb) : n === 0.5 ? e(qx, Jx) : e(Kx(n), Kx(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    Ox(t)
  );
}
function Xx() {
  var e = Yx(tx());
  return (
    (e.copy = function () {
      return ex(e, Xx()).exponent(e.exponent());
    }),
    Py.apply(e, arguments),
    e
  );
}
function Zx() {
  return Xx.apply(null, arguments).exponent(0.5);
}
function Qx(e) {
  return Math.sign(e) * e * e;
}
function $x(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function eS() {
  var e = nx(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = $x(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Qx(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, qb)).map(Qx)), i)
        : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return eS(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Py.apply(i, arguments),
    Ox(i)
  );
}
function tS() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = My(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[fy(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0
        ? [NaN, NaN]
        : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(ay), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return tS().domain(e).range(t).unknown(r);
    }),
    Py.apply(a, arguments)
  );
}
function nS() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[fy(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length
        ? (([e, t] = n), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length
        ? ((n = (i = Array.from(e)).length - 1), s())
        : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [e, r[0]]
          : o >= n
            ? [r[n - 1], t]
            : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return nS().domain([e, t]).range(i).unknown(a);
    }),
    Py.apply(Ox(o), arguments)
  );
}
function rS() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[fy(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return rS().domain(e).range(t).unknown(n);
    }),
    Py.apply(i, arguments)
  );
}
var iS = new Date(),
  aS = new Date();
function oS(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)),
      e
    )),
    (i.range = (n, r, a) => {
      let o = [];
      if (
        ((n = i.ceil(n)),
        (a = a == null ? 1 : Math.floor(a)),
        !(n < r) || !(a > 0))
      )
        return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      oS(
        (t) => {
          if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e) {
            if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
            else for (; --r >= 0;) for (; t(e, 1), !n(e););
          }
        },
      )),
    n &&
      ((i.count = (t, r) => (
        iS.setTime(+t),
        aS.setTime(+r),
        e(iS),
        e(aS),
        Math.floor(n(iS, aS))
      )),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(
                r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0,
              )
            : i
      ))),
    i
  );
}
var sS = oS(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((sS.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? oS(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : sS
)),
  sS.range);
var cS = 1e3,
  lS = cS * 60,
  uS = lS * 60,
  dS = uS * 24,
  fS = dS * 7,
  pS = dS * 30,
  mS = dS * 365,
  hS = oS(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * cS);
    },
    (e, t) => (t - e) / cS,
    (e) => e.getUTCSeconds(),
  );
hS.range;
var gS = oS(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * cS);
  },
  (e, t) => {
    e.setTime(+e + t * lS);
  },
  (e, t) => (t - e) / lS,
  (e) => e.getMinutes(),
);
gS.range;
var _S = oS(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * lS);
  },
  (e, t) => (t - e) / lS,
  (e) => e.getUTCMinutes(),
);
_S.range;
var vS = oS(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * cS - e.getMinutes() * lS,
    );
  },
  (e, t) => {
    e.setTime(+e + t * uS);
  },
  (e, t) => (t - e) / uS,
  (e) => e.getHours(),
);
vS.range;
var yS = oS(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * uS);
  },
  (e, t) => (t - e) / uS,
  (e) => e.getUTCHours(),
);
yS.range;
var bS = oS(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * lS) / dS,
  (e) => e.getDate() - 1,
);
bS.range;
var xS = oS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dS,
  (e) => e.getUTCDate() - 1,
);
xS.range;
var SS = oS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dS,
  (e) => Math.floor(e / dS),
);
SS.range;
function CS(e) {
  return oS(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * lS) / fS,
  );
}
var wS = CS(0),
  TS = CS(1),
  ES = CS(2),
  DS = CS(3),
  OS = CS(4),
  kS = CS(5),
  AS = CS(6);
(wS.range, TS.range, ES.range, DS.range, OS.range, kS.range, AS.range);
function jS(e) {
  return oS(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / fS,
  );
}
var MS = jS(0),
  NS = jS(1),
  PS = jS(2),
  FS = jS(3),
  IS = jS(4),
  LS = jS(5),
  RS = jS(6);
(MS.range, NS.range, PS.range, FS.range, IS.range, LS.range, RS.range);
var zS = oS(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
zS.range;
var BS = oS(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
BS.range;
var VS = oS(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((VS.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : oS(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  VS.range);
var HS = oS(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((HS.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : oS(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  HS.range);
function US(e, t, n, r, i, a) {
  let o = [
    [hS, 1, cS],
    [hS, 5, 5 * cS],
    [hS, 15, 15 * cS],
    [hS, 30, 30 * cS],
    [a, 1, lS],
    [a, 5, 5 * lS],
    [a, 15, 15 * lS],
    [a, 30, 30 * lS],
    [i, 1, uS],
    [i, 3, 3 * uS],
    [i, 6, 6 * uS],
    [i, 12, 12 * uS],
    [r, 1, dS],
    [r, 2, 2 * dS],
    [n, 1, fS],
    [t, 1, pS],
    [t, 3, 3 * pS],
    [e, 1, mS],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = sy(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Ey(t / mS, n / mS, r));
    if (a === 0) return sS.every(Math.max(Ey(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [WS, GS] = US(HS, BS, MS, SS, yS, _S),
  [KS, qS] = US(VS, zS, wS, bS, vS, gS);
function JS(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function YS(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function XS(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ZS(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = rC(i),
    u = iC(i),
    d = rC(a),
    f = iC(a),
    p = rC(o),
    m = iC(o),
    h = rC(s),
    g = iC(s),
    _ = rC(c),
    v = iC(c),
    y = {
      a: O,
      A: ae,
      b: oe,
      B: se,
      c: null,
      d: TC,
      e: TC,
      f: AC,
      g: VC,
      G: UC,
      H: EC,
      I: DC,
      j: OC,
      L: kC,
      m: jC,
      M: MC,
      p: ce,
      q: le,
      Q: fw,
      s: pw,
      S: NC,
      u: PC,
      U: FC,
      V: LC,
      w: RC,
      W: zC,
      x: null,
      X: null,
      y: BC,
      Y: HC,
      Z: WC,
      "%": dw,
    },
    b = {
      a: k,
      A: ue,
      b: de,
      B: fe,
      c: null,
      d: GC,
      e: GC,
      f: XC,
      g: sw,
      G: lw,
      H: KC,
      I: qC,
      j: JC,
      L: YC,
      m: ZC,
      M: QC,
      p: pe,
      q: me,
      Q: fw,
      s: pw,
      S: $C,
      u: ew,
      U: tw,
      V: rw,
      w: iw,
      W: aw,
      x: null,
      X: null,
      y: ow,
      Y: cw,
      Z: uw,
      "%": dw,
    },
    x = {
      a: E,
      A: D,
      b: ee,
      B: te,
      c: ne,
      d: hC,
      e: hC,
      f: xC,
      g: dC,
      G: uC,
      H: _C,
      I: _C,
      j: gC,
      L: bC,
      m: mC,
      M: vC,
      p: T,
      q: pC,
      Q: CC,
      s: wC,
      S: yC,
      u: oC,
      U: sC,
      V: cC,
      w: aC,
      W: lC,
      x: re,
      X: ie,
      y: dC,
      Y: uC,
      Z: fC,
      "%": SC,
    };
  ((y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b)));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o;)
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = QS[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function C(e, t) {
    return function (n) {
      var r = XS(1900, void 0, 1),
        i = w(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = YS(XS(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? NS.ceil(a) : NS(a)),
              (a = xS.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = JS(XS(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? TS.ceil(a) : TS(a)),
              (a = bS.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? YS(XS(r.y, 0, 1)).getUTCDay()
              : JS(XS(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), YS(r))
        : JS(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in QS ? t.charAt(i++) : s]),
          !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function T(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function E(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function D(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function ee(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function te(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function ne(e, n, r) {
    return w(e, t, n, r);
  }
  function re(e, t, r) {
    return w(e, n, t, r);
  }
  function ie(e, t, n) {
    return w(e, r, t, n);
  }
  function O(e) {
    return o[e.getDay()];
  }
  function ae(e) {
    return a[e.getDay()];
  }
  function oe(e) {
    return c[e.getMonth()];
  }
  function se(e) {
    return s[e.getMonth()];
  }
  function ce(e) {
    return i[+(e.getHours() >= 12)];
  }
  function le(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function k(e) {
    return o[e.getUTCDay()];
  }
  function ue(e) {
    return a[e.getUTCDay()];
  }
  function de(e) {
    return c[e.getUTCMonth()];
  }
  function fe(e) {
    return s[e.getUTCMonth()];
  }
  function pe(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function me(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = S((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = C((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = S((e += ``), b);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = C((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
var QS = { "-": ``, _: ` `, 0: `0` },
  $S = /^\s*\d+/,
  eC = /^%/,
  tC = /[\\^$*+?|[\]().{}]/g;
function G(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function nC(e) {
  return e.replace(tC, `\\$&`);
}
function rC(e) {
  return RegExp(`^(?:` + e.map(nC).join(`|`) + `)`, `i`);
}
function iC(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function aC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function oC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function sC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function cC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function lC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function uC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function dC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function fC(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function pC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function mC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function hC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function gC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function _C(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function vC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function yC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function bC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function xC(e, t, n) {
  var r = $S.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function SC(e, t, n) {
  var r = eC.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function CC(e, t, n) {
  var r = $S.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function wC(e, t, n) {
  var r = $S.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function TC(e, t) {
  return G(e.getDate(), t, 2);
}
function EC(e, t) {
  return G(e.getHours(), t, 2);
}
function DC(e, t) {
  return G(e.getHours() % 12 || 12, t, 2);
}
function OC(e, t) {
  return G(1 + bS.count(VS(e), e), t, 3);
}
function kC(e, t) {
  return G(e.getMilliseconds(), t, 3);
}
function AC(e, t) {
  return kC(e, t) + `000`;
}
function jC(e, t) {
  return G(e.getMonth() + 1, t, 2);
}
function MC(e, t) {
  return G(e.getMinutes(), t, 2);
}
function NC(e, t) {
  return G(e.getSeconds(), t, 2);
}
function PC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function FC(e, t) {
  return G(wS.count(VS(e) - 1, e), t, 2);
}
function IC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? OS(e) : OS.ceil(e);
}
function LC(e, t) {
  return ((e = IC(e)), G(OS.count(VS(e), e) + (VS(e).getDay() === 4), t, 2));
}
function RC(e) {
  return e.getDay();
}
function zC(e, t) {
  return G(TS.count(VS(e) - 1, e), t, 2);
}
function BC(e, t) {
  return G(e.getFullYear() % 100, t, 2);
}
function VC(e, t) {
  return ((e = IC(e)), G(e.getFullYear() % 100, t, 2));
}
function HC(e, t) {
  return G(e.getFullYear() % 1e4, t, 4);
}
function UC(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? OS(e) : OS.ceil(e)), G(e.getFullYear() % 1e4, t, 4)
  );
}
function WC(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    G((t / 60) | 0, `0`, 2) +
    G(t % 60, `0`, 2)
  );
}
function GC(e, t) {
  return G(e.getUTCDate(), t, 2);
}
function KC(e, t) {
  return G(e.getUTCHours(), t, 2);
}
function qC(e, t) {
  return G(e.getUTCHours() % 12 || 12, t, 2);
}
function JC(e, t) {
  return G(1 + xS.count(HS(e), e), t, 3);
}
function YC(e, t) {
  return G(e.getUTCMilliseconds(), t, 3);
}
function XC(e, t) {
  return YC(e, t) + `000`;
}
function ZC(e, t) {
  return G(e.getUTCMonth() + 1, t, 2);
}
function QC(e, t) {
  return G(e.getUTCMinutes(), t, 2);
}
function $C(e, t) {
  return G(e.getUTCSeconds(), t, 2);
}
function ew(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function tw(e, t) {
  return G(MS.count(HS(e) - 1, e), t, 2);
}
function nw(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? IS(e) : IS.ceil(e);
}
function rw(e, t) {
  return ((e = nw(e)), G(IS.count(HS(e), e) + (HS(e).getUTCDay() === 4), t, 2));
}
function iw(e) {
  return e.getUTCDay();
}
function aw(e, t) {
  return G(NS.count(HS(e) - 1, e), t, 2);
}
function ow(e, t) {
  return G(e.getUTCFullYear() % 100, t, 2);
}
function sw(e, t) {
  return ((e = nw(e)), G(e.getUTCFullYear() % 100, t, 2));
}
function cw(e, t) {
  return G(e.getUTCFullYear() % 1e4, t, 4);
}
function lw(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? IS(e) : IS.ceil(e)),
    G(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function uw() {
  return `+0000`;
}
function dw() {
  return `%`;
}
function fw(e) {
  return +e;
}
function pw(e) {
  return Math.floor(e / 1e3);
}
var mw, hw, gw;
_w({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function _w(e) {
  return (
    (mw = ZS(e)),
    (hw = mw.format),
    mw.parse,
    (gw = mw.utcFormat),
    mw.utcParse,
    mw
  );
}
function vw(e) {
  return new Date(e);
}
function yw(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function bw(e, t, n, r, i, a, o, s, c, l) {
  var u = nx(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    g = l(`%I %p`),
    _ = l(`%a %d`),
    v = l(`%b %d`),
    y = l(`%B`),
    b = l(`%Y`);
  function x(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? g
              : r(e) < e
                ? i(e) < e
                  ? _
                  : v
                : n(e) < e
                  ? y
                  : b
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(d(e));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, yw)) : f().map(vw);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? x : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (e && typeof e.range == `function`) ||
          (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(jx(n, e)) : u
      );
    }),
    (u.copy = function () {
      return ex(u, bw(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function xw() {
  return Py.apply(
    bw(KS, qS, VS, zS, wS, bS, vS, gS, hS, hw).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Sw() {
  return Py.apply(
    bw(WS, GS, HS, BS, MS, xS, yS, _S, hS, gw).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Cw() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Yb,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(Ub)),
    (l.rangeRound = u(Wb)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return (
        (a = o), (n = o(e)), (r = o(t)), (i = n === r ? 0 : 1 / (r - n)), l
      );
    }
  );
}
function ww(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Tw() {
  var e = Ox(Cw()(Yb));
  return (
    (e.copy = function () {
      return ww(e, Tw());
    }),
    Fy.apply(e, arguments)
  );
}
function Ew() {
  var e = Bx(Cw()).domain([1, 10]);
  return (
    (e.copy = function () {
      return ww(e, Ew()).base(e.base());
    }),
    Fy.apply(e, arguments)
  );
}
function Dw() {
  var e = Wx(Cw());
  return (
    (e.copy = function () {
      return ww(e, Dw()).constant(e.constant());
    }),
    Fy.apply(e, arguments)
  );
}
function Ow() {
  var e = Yx(Cw());
  return (
    (e.copy = function () {
      return ww(e, Ow()).exponent(e.exponent());
    }),
    Fy.apply(e, arguments)
  );
}
function kw() {
  return Ow.apply(null, arguments).exponent(0.5);
}
function Aw() {
  var e = [],
    t = Yb;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((fy(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(ay), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => jy(e, r / t));
    }),
    (n.copy = function () {
      return Aw(t).domain(e);
    }),
    Fy.apply(n, arguments)
  );
}
function jw() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = Yb,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = Gb(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(Ub)),
    (p.rangeRound = m(Wb)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function Mw() {
  var e = Ox(jw()(Yb));
  return (
    (e.copy = function () {
      return ww(e, Mw());
    }),
    Fy.apply(e, arguments)
  );
}
function Nw() {
  var e = Bx(jw()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return ww(e, Nw()).base(e.base());
    }),
    Fy.apply(e, arguments)
  );
}
function Pw() {
  var e = Wx(jw());
  return (
    (e.copy = function () {
      return ww(e, Pw()).constant(e.constant());
    }),
    Fy.apply(e, arguments)
  );
}
function Fw() {
  var e = Yx(jw());
  return (
    (e.copy = function () {
      return ww(e, Fw()).exponent(e.exponent());
    }),
    Fy.apply(e, arguments)
  );
}
function Iw() {
  return Fw.apply(null, arguments).exponent(0.5);
}
var Lw = t({
    scaleBand: () => Ry,
    scaleDiverging: () => Mw,
    scaleDivergingLog: () => Nw,
    scaleDivergingPow: () => Fw,
    scaleDivergingSqrt: () => Iw,
    scaleDivergingSymlog: () => Pw,
    scaleIdentity: () => Ax,
    scaleImplicit: () => Iy,
    scaleLinear: () => kx,
    scaleLog: () => Vx,
    scaleOrdinal: () => Ly,
    scalePoint: () => By,
    scalePow: () => Xx,
    scaleQuantile: () => tS,
    scaleQuantize: () => nS,
    scaleRadial: () => eS,
    scaleSequential: () => Tw,
    scaleSequentialLog: () => Ew,
    scaleSequentialPow: () => Ow,
    scaleSequentialQuantile: () => Aw,
    scaleSequentialSqrt: () => kw,
    scaleSequentialSymlog: () => Dw,
    scaleSqrt: () => Zx,
    scaleSymlog: () => Gx,
    scaleThreshold: () => rS,
    scaleTime: () => xw,
    scaleUtc: () => Sw,
    tickFormat: () => Dx,
  }),
  Rw = (e) => e.chartData,
  zw = U([Rw], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Bw = (e, t, n, r) => (r ? zw(e) : Rw(e));
function Vw(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (mg(t) && mg(n)) return !0;
  }
  return !1;
}
function Hw(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Uw(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (mg(n)) i = n;
    else if (typeof n == `function`) return;
    if (mg(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (Vw(o)) return o;
  }
}
function Ww(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (Vw(r)) return Hw(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (V(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && Fh.test(i)) {
        var c = Fh.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (V(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && Ih.test(a)) {
        var u = Ih.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (Vw(f)) return t == null ? f : Hw(f, t, n);
    }
  }
}
var Gw = n((e, t, n) => {
    (function (e) {
      var n = 1e9,
        r = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: `2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`,
        },
        i = !0,
        a = `[DecimalError] `,
        o = a + `Invalid argument: `,
        s = a + `Exponent out of range: `,
        c = Math.floor,
        l = Math.pow,
        u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d,
        f = 1e7,
        p = 7,
        m = 9007199254740991,
        h = c(m / p),
        g = {};
      ((g.absoluteValue = g.abs =
        function () {
          var e = new this.constructor(this);
          return ((e.s &&= 1), e);
        }),
        (g.comparedTo = g.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              a = this;
            if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
            if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
            for (
              r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i;
              t < n;
              ++t
            )
              if (a.d[t] !== e.d[t])
                return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
          }),
        (g.decimalPlaces = g.dp =
          function () {
            var e = this,
              t = e.d.length - 1,
              n = (t - e.e) * p;
            if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
            return n < 0 ? 0 : n;
          }),
        (g.dividedBy = g.div =
          function (e) {
            return b(this, new this.constructor(e));
          }),
        (g.dividedToIntegerBy = g.idiv =
          function (e) {
            var t = this,
              n = t.constructor;
            return D(b(t, new n(e), 0, 1), n.precision);
          }),
        (g.equals = g.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (g.exponent = function () {
          return S(this);
        }),
        (g.greaterThan = g.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (g.greaterThanOrEqualTo = g.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (g.isInteger = g.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (g.isNegative = g.isneg =
          function () {
            return this.s < 0;
          }),
        (g.isPositive = g.ispos =
          function () {
            return this.s > 0;
          }),
        (g.isZero = function () {
          return this.s === 0;
        }),
        (g.lessThan = g.lt =
          function (e) {
            return this.cmp(e) < 0;
          }),
        (g.lessThanOrEqualTo = g.lte =
          function (e) {
            return this.cmp(e) < 1;
          }),
        (g.logarithm = g.log =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision,
              s = o + 5;
            if (e === void 0) e = new r(10);
            else if (((e = new r(e)), e.s < 1 || e.eq(d)))
              throw Error(a + `NaN`);
            if (n.s < 1) throw Error(a + (n.s ? `NaN` : `-Infinity`));
            return n.eq(d)
              ? new r(0)
              : ((i = !1), (t = b(T(n, s), T(e, s), s)), (i = !0), D(t, o));
          }),
        (g.minus = g.sub =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? ee(t, e) : _(t, ((e.s = -e.s), e))
            );
          }),
        (g.modulo = g.mod =
          function (e) {
            var t,
              n = this,
              r = n.constructor,
              o = r.precision;
            if (((e = new r(e)), !e.s)) throw Error(a + `NaN`);
            return n.s
              ? ((i = !1), (t = b(n, e, 0, 1).times(e)), (i = !0), n.minus(t))
              : D(new r(n), o);
          }),
        (g.naturalExponential = g.exp =
          function () {
            return x(this);
          }),
        (g.naturalLogarithm = g.ln =
          function () {
            return T(this);
          }),
        (g.negated = g.neg =
          function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s || 0), e);
          }),
        (g.plus = g.add =
          function (e) {
            var t = this;
            return (
              (e = new t.constructor(e)),
              t.s == e.s ? _(t, e) : ee(t, ((e.s = -e.s), e))
            );
          }),
        (g.precision = g.sd =
          function (e) {
            var t,
              n,
              r,
              i = this;
            if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
              throw Error(o + e);
            if (
              ((t = S(i) + 1),
              (r = i.d.length - 1),
              (n = r * p + 1),
              (r = i.d[r]),
              r)
            ) {
              for (; r % 10 == 0; r /= 10) n--;
              for (r = i.d[0]; r >= 10; r /= 10) n++;
            }
            return e && t > n ? t : n;
          }),
        (g.squareRoot = g.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              d = u.constructor;
            if (u.s < 1) {
              if (!u.s) return new d(0);
              throw Error(a + `NaN`);
            }
            for (
              e = S(u),
                i = !1,
                o = Math.sqrt(+u),
                o == 0 || o == 1 / 0
                  ? ((t = y(u.d)),
                    (t.length + e) % 2 == 0 && (t += `0`),
                    (o = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    o == 1 / 0
                      ? (t = `5e` + e)
                      : ((t = o.toExponential()),
                        (t = t.slice(0, t.indexOf(`e`) + 1) + e)),
                    (r = new d(t)))
                  : (r = new d(o.toString())),
                n = d.precision,
                o = l = n + 3;
              ;
            )
              if (
                ((s = r),
                (r = s.plus(b(u, s, l + 2)).times(0.5)),
                y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l))
              ) {
                if (((t = t.slice(l - 3, l + 1)), o == l && t == `4999`)) {
                  if ((D(s, n + 1, 0), s.times(s).eq(u))) {
                    r = s;
                    break;
                  }
                } else if (t != `9999`) break;
                l += 4;
              }
            return ((i = !0), D(r, n));
          }),
        (g.times = g.mul =
          function (e) {
            var t,
              n,
              r,
              a,
              o,
              s,
              c,
              l,
              u,
              d = this,
              p = d.constructor,
              m = d.d,
              h = (e = new p(e)).d;
            if (!d.s || !e.s) return new p(0);
            for (
              e.s *= d.s,
                n = d.e + e.e,
                l = m.length,
                u = h.length,
                l < u && ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
                o = [],
                s = l + u,
                r = s;
              r--;
            )
              o.push(0);
            for (r = u; --r >= 0;) {
              for (t = 0, a = l + r; a > r;)
                ((c = o[a] + h[r] * m[a - r - 1] + t),
                  (o[a--] = (c % f) | 0),
                  (t = (c / f) | 0));
              o[a] = ((o[a] + t) % f) | 0;
            }
            for (; !o[--s];) o.pop();
            return (
              t ? ++n : o.shift(),
              (e.d = o),
              (e.e = n),
              i ? D(e, p.precision) : e
            );
          }),
        (g.toDecimalPlaces = g.todp =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              (r = new i(r)),
              e === void 0
                ? r
                : (v(e, 0, n),
                  t === void 0 ? (t = i.rounding) : v(t, 0, 8),
                  D(r, e + S(r) + 1, t))
            );
          }),
        (g.toExponential = function (e, t) {
          var r,
            i = this,
            a = i.constructor;
          return (
            e === void 0
              ? (r = te(i, !0))
              : (v(e, 0, n),
                t === void 0 ? (t = a.rounding) : v(t, 0, 8),
                (i = D(new a(i), e + 1, t)),
                (r = te(i, !0, e + 1))),
            r
          );
        }),
        (g.toFixed = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return e === void 0
            ? te(a)
            : (v(e, 0, n),
              t === void 0 ? (t = o.rounding) : v(t, 0, 8),
              (i = D(new o(a), e + S(a) + 1, t)),
              (r = te(i.abs(), !1, e + S(i) + 1)),
              a.isneg() && !a.isZero() ? `-` + r : r);
        }),
        (g.toInteger = g.toint =
          function () {
            var e = this,
              t = e.constructor;
            return D(new t(e), S(e) + 1, t.rounding);
          }),
        (g.toNumber = function () {
          return +this;
        }),
        (g.toPower = g.pow =
          function (e) {
            var t,
              n,
              r,
              o,
              s,
              l,
              u = this,
              f = u.constructor,
              h = 12,
              g = +(e = new f(e));
            if (!e.s) return new f(d);
            if (((u = new f(u)), !u.s)) {
              if (e.s < 1) throw Error(a + `Infinity`);
              return u;
            }
            if (u.eq(d)) return u;
            if (((r = f.precision), e.eq(d))) return D(u, r);
            if (
              ((t = e.e), (n = e.d.length - 1), (l = t >= n), (s = u.s), !l)
            ) {
              if (s < 0) throw Error(a + `NaN`);
            } else if ((n = g < 0 ? -g : g) <= m) {
              for (
                o = new f(d), t = Math.ceil(r / p + 4), i = !1;
                n % 2 && ((o = o.times(u)), ne(o.d, t)),
                  (n = c(n / 2)),
                  n !== 0;
              )
                ((u = u.times(u)), ne(u.d, t));
              return ((i = !0), e.s < 0 ? new f(d).div(o) : D(o, r));
            }
            return (
              (s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
              (u.s = 1),
              (i = !1),
              (o = e.times(T(u, r + h))),
              (i = !0),
              (o = x(o)),
              (o.s = s),
              o
            );
          }),
        (g.toPrecision = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return (
            e === void 0
              ? ((r = S(a)), (i = te(a, r <= o.toExpNeg || r >= o.toExpPos)))
              : (v(e, 1, n),
                t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                (a = D(new o(a), e, t)),
                (r = S(a)),
                (i = te(a, e <= r || r <= o.toExpNeg, e))),
            i
          );
        }),
        (g.toSignificantDigits = g.tosd =
          function (e, t) {
            var r = this,
              i = r.constructor;
            return (
              e === void 0
                ? ((e = i.precision), (t = i.rounding))
                : (v(e, 1, n), t === void 0 ? (t = i.rounding) : v(t, 0, 8)),
              D(new i(r), e, t)
            );
          }),
        (g.toString =
          g.valueOf =
          g.val =
          g.toJSON =
            function () {
              var e = this,
                t = S(e),
                n = e.constructor;
              return te(e, t <= n.toExpNeg || t >= n.toExpPos);
            }));
      function _(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d = e.constructor,
          m = d.precision;
        if (!e.s || !t.s) return (t.s || (t = new d(e)), i ? D(t, m) : t);
        if (
          ((l = e.d),
          (u = t.d),
          (s = e.e),
          (a = t.e),
          (l = l.slice()),
          (o = s - a),
          o)
        ) {
          for (
            o < 0
              ? ((r = l), (o = -o), (c = u.length))
              : ((r = u), (a = s), (c = l.length)),
              s = Math.ceil(m / p),
              c = s > c ? s + 1 : c + 1,
              o > c && ((o = c), (r.length = 1)),
              r.reverse();
            o--;
          )
            r.push(0);
          r.reverse();
        }
        for (
          c = l.length,
            o = u.length,
            c - o < 0 && ((o = c), (r = u), (u = l), (l = r)),
            n = 0;
          o;
        )
          ((n = ((l[--o] = l[o] + u[o] + n) / f) | 0), (l[o] %= f));
        for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0;) l.pop();
        return ((t.d = l), (t.e = a), i ? D(t, m) : t);
      }
      function v(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(o + e);
      }
      function y(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          a = ``,
          o = e[0];
        if (i > 0) {
          for (a += o, t = 1; t < i; t++)
            ((r = e[t] + ``), (n = p - r.length), n && (a += w(n)), (a += r));
          ((o = e[t]), (r = o + ``), (n = p - r.length), n && (a += w(n)));
        } else if (o === 0) return `0`;
        for (; o % 10 == 0;) o /= 10;
        return a + o;
      }
      var b = (function () {
        function e(e, t) {
          var n,
            r = 0,
            i = e.length;
          for (e = e.slice(); i--;)
            ((n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0));
          return (r && e.unshift(r), e);
        }
        function t(e, t, n, r) {
          var i, a;
          if (n != r) a = n > r ? 1 : -1;
          else
            for (i = a = 0; i < n; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function n(e, t, n) {
          for (var r = 0; n--;)
            ((e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]));
          for (; !e[0] && e.length > 1;) e.shift();
        }
        return function (r, i, o, s) {
          var c,
            l,
            u,
            d,
            m,
            h,
            g,
            _,
            v,
            y,
            b,
            x,
            C,
            w,
            T,
            E,
            ee,
            te,
            ne = r.constructor,
            re = r.s == i.s ? 1 : -1,
            ie = r.d,
            O = i.d;
          if (!r.s) return new ne(r);
          if (!i.s) throw Error(a + `Division by zero`);
          for (
            l = r.e - i.e,
              ee = O.length,
              T = ie.length,
              g = new ne(re),
              _ = g.d = [],
              u = 0;
            O[u] == (ie[u] || 0);
          )
            ++u;
          if (
            (O[u] > (ie[u] || 0) && --l,
            (x =
              o == null ? (o = ne.precision) : s ? o + (S(r) - S(i)) + 1 : o),
            x < 0)
          )
            return new ne(0);
          if (((x = (x / p + 2) | 0), (u = 0), ee == 1))
            for (d = 0, O = O[0], x++; (u < T || d) && x--; u++)
              ((C = d * f + (ie[u] || 0)),
                (_[u] = (C / O) | 0),
                (d = (C % O) | 0));
          else {
            for (
              d = (f / (O[0] + 1)) | 0,
                d > 1 &&
                  ((O = e(O, d)),
                  (ie = e(ie, d)),
                  (ee = O.length),
                  (T = ie.length)),
                w = ee,
                v = ie.slice(0, ee),
                y = v.length;
              y < ee;
            )
              v[y++] = 0;
            ((te = O.slice()), te.unshift(0), (E = O[0]), O[1] >= f / 2 && ++E);
            do
              ((d = 0),
                (c = t(O, v, ee, y)),
                c < 0
                  ? ((b = v[0]),
                    ee != y && (b = b * f + (v[1] || 0)),
                    (d = (b / E) | 0),
                    d > 1
                      ? (d >= f && (d = f - 1),
                        (m = e(O, d)),
                        (h = m.length),
                        (y = v.length),
                        (c = t(m, v, h, y)),
                        c == 1 && (d--, n(m, ee < h ? te : O, h)))
                      : (d == 0 && (c = d = 1), (m = O.slice())),
                    (h = m.length),
                    h < y && m.unshift(0),
                    n(v, m, y),
                    c == -1 &&
                      ((y = v.length),
                      (c = t(O, v, ee, y)),
                      c < 1 && (d++, n(v, ee < y ? te : O, y))),
                    (y = v.length))
                  : c === 0 && (d++, (v = [0])),
                (_[u++] = d),
                c && v[0] ? (v[y++] = ie[w] || 0) : ((v = [ie[w]]), (y = 1)));
            while ((w++ < T || v[0] !== void 0) && x--);
          }
          return (_[0] || _.shift(), (g.e = l), D(g, s ? o + S(g) + 1 : o));
        };
      })();
      function x(e, t) {
        var n,
          r,
          a,
          o,
          c,
          u,
          f = 0,
          p = 0,
          m = e.constructor,
          h = m.precision;
        if (S(e) > 16) throw Error(s + S(e));
        if (!e.s) return new m(d);
        for (
          t == null ? ((i = !1), (u = h)) : (u = t), c = new m(0.03125);
          e.abs().gte(0.1);
        )
          ((e = e.times(c)), (p += 5));
        for (
          r = ((Math.log(l(2, p)) / Math.LN10) * 2 + 5) | 0,
            u += r,
            n = a = o = new m(d),
            m.precision = u;
          ;
        ) {
          if (
            ((a = D(a.times(e), u)),
            (n = n.times(++f)),
            (c = o.plus(b(a, n, u))),
            y(c.d).slice(0, u) === y(o.d).slice(0, u))
          ) {
            for (; p--;) o = D(o.times(o), u);
            return ((m.precision = h), t == null ? ((i = !0), D(o, h)) : o);
          }
          o = c;
        }
      }
      function S(e) {
        for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
        return t;
      }
      function C(e, t, n) {
        if (t > e.LN10.sd())
          throw (
            (i = !0),
            n && (e.precision = n),
            Error(a + `LN10 precision limit exceeded`)
          );
        return D(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ``; e--;) t += `0`;
        return t;
      }
      function T(e, t) {
        var n,
          r,
          o,
          s,
          c,
          l,
          u,
          f,
          p,
          m = 1,
          h = 10,
          g = e,
          _ = g.d,
          v = g.constructor,
          x = v.precision;
        if (g.s < 1) throw Error(a + (g.s ? `NaN` : `-Infinity`));
        if (g.eq(d)) return new v(0);
        if ((t == null ? ((i = !1), (f = x)) : (f = t), g.eq(10)))
          return (t ?? (i = !0), C(v, f));
        if (
          ((f += h),
          (v.precision = f),
          (n = y(_)),
          (r = n.charAt(0)),
          (s = S(g)),
          Math.abs(s) < 0x5543df729c000)
        ) {
          for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3);)
            ((g = g.times(e)), (n = y(g.d)), (r = n.charAt(0)), m++);
          ((s = S(g)),
            r > 1
              ? ((g = new v(`0.` + n)), s++)
              : (g = new v(r + `.` + n.slice(1))));
        } else
          return (
            (u = C(v, f + 2, x).times(s + ``)),
            (g = T(new v(r + `.` + n.slice(1)), f - h).plus(u)),
            (v.precision = x),
            t == null ? ((i = !0), D(g, x)) : g
          );
        for (
          l = c = g = b(g.minus(d), g.plus(d), f), p = D(g.times(g), f), o = 3;
          ;
        ) {
          if (
            ((c = D(c.times(p), f)),
            (u = l.plus(b(c, new v(o), f))),
            y(u.d).slice(0, f) === y(l.d).slice(0, f))
          )
            return (
              (l = l.times(2)),
              s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ``))),
              (l = b(l, new v(m), f)),
              (v.precision = x),
              t == null ? ((i = !0), D(l, x)) : l
            );
          ((l = u), (o += 2));
        }
      }
      function E(e, t) {
        var n, r, a;
        for (
          (n = t.indexOf(`.`)) > -1 && (t = t.replace(`.`, ``)),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          t.charCodeAt(r) === 48;
        )
          ++r;
        for (a = t.length; t.charCodeAt(a - 1) === 48;) --a;
        if (((t = t.slice(r, a)), t)) {
          if (
            ((a -= r),
            (n = n - r - 1),
            (e.e = c(n / p)),
            (e.d = []),
            (r = (n + 1) % p),
            n < 0 && (r += p),
            r < a)
          ) {
            for (r && e.d.push(+t.slice(0, r)), a -= p; r < a;)
              e.d.push(+t.slice(r, (r += p)));
            ((t = t.slice(r)), (r = p - t.length));
          } else r -= a;
          for (; r--;) t += `0`;
          if ((e.d.push(+t), i && (e.e > h || e.e < -h))) throw Error(s + n);
        } else ((e.s = 0), (e.e = 0), (e.d = [0]));
        return e;
      }
      function D(e, t, n) {
        var r,
          a,
          o,
          u,
          d,
          m,
          g,
          _,
          v = e.d;
        for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
        if (((r = t - u), r < 0)) ((r += p), (a = t), (g = v[(_ = 0)]));
        else {
          if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o)) return e;
          for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
          ((r %= p), (a = r - p + u));
        }
        if (
          (n !== void 0 &&
            ((o = l(10, u - a - 1)),
            (d = ((g / o) % 10) | 0),
            (m = t < 0 || v[_ + 1] !== void 0 || g % o),
            (m =
              n < 4
                ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2))
                : d > 5 ||
                  (d == 5 &&
                    (n == 4 ||
                      m ||
                      (n == 6 &&
                        ((r > 0 ? (a > 0 ? g / l(10, u - a) : 0) : v[_ - 1]) %
                          10) &
                          1) ||
                      n == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            m
              ? ((o = S(e)),
                (v.length = 1),
                (t = t - o - 1),
                (v[0] = l(10, (p - (t % p)) % p)),
                (e.e = c(-t / p) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (r == 0
            ? ((v.length = _), (o = 1), _--)
            : ((v.length = _ + 1),
              (o = l(10, p - r)),
              (v[_] = a > 0 ? (((g / l(10, u - a)) % l(10, a)) | 0) * o : 0)),
          m)
        )
          for (;;)
            if (_ == 0) {
              (v[0] += o) == f && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[_] += o), v[_] != f)) break;
              ((v[_--] = 0), (o = 1));
            }
        for (r = v.length; v[--r] === 0;) v.pop();
        if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
        return e;
      }
      function ee(e, t) {
        var n,
          r,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          m,
          h = e.constructor,
          g = h.precision;
        if (!e.s || !t.s)
          return (t.s ? (t.s = -t.s) : (t = new h(e)), i ? D(t, g) : t);
        if (
          ((l = e.d),
          (m = t.d),
          (r = t.e),
          (u = e.e),
          (l = l.slice()),
          (s = u - r),
          s)
        ) {
          for (
            d = s < 0,
              d
                ? ((n = l), (s = -s), (c = m.length))
                : ((n = m), (r = u), (c = l.length)),
              a = Math.max(Math.ceil(g / p), c) + 2,
              s > a && ((s = a), (n.length = 1)),
              n.reverse(),
              a = s;
            a--;
          )
            n.push(0);
          n.reverse();
        } else {
          for (
            a = l.length, c = m.length, d = a < c, d && (c = a), a = 0;
            a < c;
            a++
          )
            if (l[a] != m[a]) {
              d = l[a] < m[a];
              break;
            }
          s = 0;
        }
        for (
          d && ((n = l), (l = m), (m = n), (t.s = -t.s)),
            c = l.length,
            a = m.length - c;
          a > 0;
          --a
        )
          l[c++] = 0;
        for (a = m.length; a > s;) {
          if (l[--a] < m[a]) {
            for (o = a; o && l[--o] === 0;) l[o] = f - 1;
            (--l[o], (l[a] += f));
          }
          l[a] -= m[a];
        }
        for (; l[--c] === 0;) l.pop();
        for (; l[0] === 0; l.shift()) --r;
        return l[0] ? ((t.d = l), (t.e = r), i ? D(t, g) : t) : new h(0);
      }
      function te(e, t, n) {
        var r,
          i = S(e),
          a = y(e.d),
          o = a.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (a = a.charAt(0) + `.` + a.slice(1) + w(r))
                : o > 1 && (a = a.charAt(0) + `.` + a.slice(1)),
              (a = a + (i < 0 ? `e` : `e+`) + i))
            : i < 0
              ? ((a = `0.` + w(-i - 1) + a),
                n && (r = n - o) > 0 && (a += w(r)))
              : i >= o
                ? ((a += w(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (a = a + `.` + w(r)))
                : ((r = i + 1) < o && (a = a.slice(0, r) + `.` + a.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (a += `.`), (a += w(r)))),
          e.s < 0 ? `-` + a : a
        );
      }
      function ne(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function re(e) {
        var t, n, r;
        function i(e) {
          var t = this;
          if (!(t instanceof i)) return new i(e);
          if (((t.constructor = i), e instanceof i))
            ((t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e));
          else {
            if (typeof e == `number`) {
              if (e * 0 != 0) throw Error(o + e);
              if (e > 0) t.s = 1;
              else if (e < 0) ((e = -e), (t.s = -1));
              else {
                ((t.s = 0), (t.e = 0), (t.d = [0]));
                return;
              }
              if (e === ~~e && e < 1e7) {
                ((t.e = 0), (t.d = [e]));
                return;
              }
              return E(t, e.toString());
            }
            if (typeof e != `string`) throw Error(o + e);
            if (
              (e.charCodeAt(0) === 45
                ? ((e = e.slice(1)), (t.s = -1))
                : (t.s = 1),
              u.test(e))
            )
              E(t, e);
            else throw Error(o + e);
          }
        }
        if (
          ((i.prototype = g),
          (i.ROUND_UP = 0),
          (i.ROUND_DOWN = 1),
          (i.ROUND_CEIL = 2),
          (i.ROUND_FLOOR = 3),
          (i.ROUND_HALF_UP = 4),
          (i.ROUND_HALF_DOWN = 5),
          (i.ROUND_HALF_EVEN = 6),
          (i.ROUND_HALF_CEIL = 7),
          (i.ROUND_HALF_FLOOR = 8),
          (i.clone = re),
          (i.config = i.set = ie),
          e === void 0 && (e = {}),
          e)
        )
          for (
            r = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
              t = 0;
            t < r.length;
          )
            e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
        return (i.config(e), i);
      }
      function ie(e) {
        if (!e || typeof e != `object`) throw Error(a + `Object expected`);
        var t,
          r,
          i,
          s = [
            `precision`,
            1,
            n,
            `rounding`,
            0,
            8,
            `toExpNeg`,
            -1 / 0,
            0,
            `toExpPos`,
            0,
            1 / 0,
          ];
        for (t = 0; t < s.length; t += 3)
          if ((i = e[(r = s[t])]) !== void 0) {
            if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
            else throw Error(o + r + `: ` + i);
          }
        if ((i = e[(r = `LN10`)]) !== void 0) {
          if (i == Math.LN10) this[r] = new this(i);
          else throw Error(o + r + `: ` + i);
        }
        return this;
      }
      ((r = re(r)),
        (r.default = r.Decimal = r),
        (d = new r(1)),
        typeof define == `function` && define.amd
          ? define(function () {
              return r;
            })
          : t !== void 0 && t.exports
            ? (t.exports = r)
            : ((e ||=
                typeof self < `u` && self && self.self == self
                  ? self
                  : Function(`return this`)()),
              (e.Decimal = r)));
    })(n);
  }),
  Kw = (e) => e,
  qw = { "@@functional/placeholder": !0 },
  Jw = (e) => e === qw,
  Yw = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Jw(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  Xw = (e, t) =>
    e === 1
      ? t
      : Yw(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== qw).length;
          return r >= e
            ? t(...n)
            : Xw(
                e - r,
                Yw(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (Jw(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  Zw = (e) => Xw(e.length, e),
  Qw = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  $w = Zw((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  eT = function () {
    var e = [...arguments];
    if (!e.length) return Kw;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  tT = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  nT = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  },
  rT = e(Gw());
function iT(e) {
  return e === 0
    ? 1
    : Math.floor(new rT.default(e).abs().log(10).toNumber()) + 1;
}
function aT(e, t, n) {
  for (var r = new rT.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(Zw((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  Zw((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  Zw((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var oT = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  sT = (e, t, n) => {
    if (e.lte(0)) return new rT.default(0);
    var r = iT(e.toNumber()),
      i = new rT.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new rT.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new rT.default(s.toNumber())
      : new rT.default(Math.ceil(s.toNumber()));
  },
  cT = (e, t, n) => {
    var r = new rT.default(1),
      i = new rT.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new rT.default(10).pow(iT(e) - 1)),
          (i = new rT.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new rT.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new rT.default(Math.floor((t - 1) / 2)))
        : n || (i = new rT.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return eT(
      $w((e) => i.add(new rT.default(e - o).mul(r)).toNumber()),
      Qw,
    )(0, t);
  },
  lT = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new rT.default(0),
        tickMin: new rT.default(0),
        tickMax: new rT.default(0),
      };
    var a = sT(new rT.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new rT.default(0))
      : ((o = new rT.default(e).add(t).div(2)),
        (o = o.sub(new rT.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new rT.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? lT(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new rT.default(s).mul(a)),
          tickMax: o.add(new rT.default(c).mul(a)),
        });
  };
function uT(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = oT([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...Qw(0, r - 1).map(() => 1 / 0)]
        : [...Qw(0, r - 1).map(() => -1 / 0), s];
    return t > n ? tT(c) : c;
  }
  if (o === s) return cT(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = lT(o, s, a, i, 0),
    f = aT(u, d.add(new rT.default(0.1).mul(l)), l);
  return t > n ? tT(f) : f;
}
function dT(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = oT([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = sT(new rT.default(o).sub(a).div(s - 1), i, 0),
    l = [...aT(new rT.default(a), new rT.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? tT(l) : l);
}
var fT = nT(uT),
  pT = nT(dT),
  mT = (e) => e.rootProps.maxBarSize,
  hT = (e) => e.rootProps.barGap,
  gT = (e) => e.rootProps.barCategoryGap,
  _T = (e) => e.rootProps.barSize,
  vT = (e) => e.rootProps.stackOffset,
  yT = (e) => e.options.chartName,
  bT = (e) => e.rootProps.syncId,
  xT = (e) => e.rootProps.syncMethod,
  ST = (e) => e.options.eventEmitter,
  CT = {
    allowDuplicatedCategory: !0,
    angleAxisId: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: `outer`,
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: `category`,
  },
  wT = {
    allowDataOverflow: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: `right`,
    radiusAxisId: 0,
    scale: `auto`,
    stroke: `#ccc`,
    tick: !0,
    tickCount: 5,
    type: `number`,
  },
  TT = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  ET = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: CT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: CT.reversed,
    scale: CT.scale,
    tick: CT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: CT.type,
    unit: void 0,
  },
  DT = {
    allowDataOverflow: wT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: wT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: wT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: wT.scale,
    tick: wT.tick,
    tickCount: wT.tickCount,
    ticks: void 0,
    type: wT.type,
    unit: void 0,
  },
  OT = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: CT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: CT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: CT.scale,
    tick: CT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  kT = {
    allowDataOverflow: wT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: wT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: wT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: wT.scale,
    tick: wT.tick,
    tickCount: wT.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  AT = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? OT
        : ET
      : e.polarAxis.angleAxis[t],
  jT = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? kT
        : DT
      : e.polarAxis.radiusAxis[t],
  MT = (e) => e.polarOptions,
  NT = U([Uh, Wh, sg], ah),
  PT = U([MT, NT], (e, t) => {
    if (e != null) return ru(e.innerRadius, t, 0);
  }),
  FT = U([MT, NT], (e, t) => {
    if (e != null) return ru(e.outerRadius, t, t * 0.8);
  }),
  IT = U([MT], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  }),
  LT = U([AT, IT], TT),
  RT = U([NT, PT, FT], (e, t, n) => {
    if (e != null && t != null && n != null) return [t, n];
  }),
  zT = U([jT, RT], TT),
  BT = U([W, MT, PT, FT, Uh, Wh], (e, t, n, r, i, a) => {
    if (
      !(
        (e !== `centric` && e !== `radial`) ||
        t == null ||
        n == null ||
        r == null
      )
    ) {
      var { cx: o, cy: s, startAngle: c, endAngle: l } = t;
      return {
        cx: ru(o, i, i / 2),
        cy: ru(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  VT = (e, t) => t,
  HT = (e, t, n) => n;
function UT(e) {
  return e?.id;
}
var WT = (e) => {
    var t = W(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  GT = (e) => e.tooltip.settings.axisId,
  KT = (e) => hE(e, WT(e), GT(e)),
  qT = U([KT], (e) => e?.dataKey);
function JT(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = UT(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(vh(t, a, null)),
            c = vh(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function YT(e) {
  return e.stackId != null && e.dataKey != null;
}
var XT = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function ZT(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
var QT = e(iy());
function $T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function eE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $T(Object(n), !0).forEach(function (t) {
          tE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $T(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tE(e, t, n) {
  return (
    (t = nE(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nE(e) {
  var t = rE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var iE = [0, `auto`],
  aE = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `bottom`,
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  oE = (e, t) => e.cartesianAxis.xAxis[t],
  sE = (e, t) => oE(e, t) ?? aE,
  cE = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: iE,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `left`,
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
    width: 60,
  },
  lE = (e, t) => e.cartesianAxis.yAxis[t],
  uE = (e, t) => lE(e, t) ?? cE,
  dE = {
    domain: [0, `auto`],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: ``,
    range: [64, 64],
    scale: `auto`,
    type: `number`,
    unit: ``,
  },
  fE = (e, t) => e.cartesianAxis.zAxis[t] ?? dE,
  pE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return sE(e, n);
      case `yAxis`:
        return uE(e, n);
      case `zAxis`:
        return fE(e, n);
      case `angleAxis`:
        return AT(e, n);
      case `radiusAxis`:
        return jT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  mE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return sE(e, n);
      case `yAxis`:
        return uE(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  hE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return sE(e, n);
      case `yAxis`:
        return uE(e, n);
      case `angleAxis`:
        return AT(e, n);
      case `radiusAxis`:
        return jT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  gE = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function _E(e, t) {
  return (n) => {
    switch (e) {
      case `xAxis`:
        return `xAxisId` in n && n.xAxisId === t;
      case `yAxis`:
        return `yAxisId` in n && n.yAxisId === t;
      case `zAxis`:
        return `zAxisId` in n && n.zAxisId === t;
      case `angleAxis`:
        return `angleAxisId` in n && n.angleAxisId === t;
      case `radiusAxis`:
        return `radiusAxisId` in n && n.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var vE = (e) => e.graphicalItems.cartesianItems,
  yE = U([VT, HT], _E),
  bE = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  xE = U([vE, pE, yE], bE, { memoizeOptions: { resultEqualityCheck: ZT } }),
  SE = U([xE], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(YT),
  ),
  CE = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  wE = U([xE], CE),
  TE = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  EE = U([xE], TE, { memoizeOptions: { resultEqualityCheck: ZT } }),
  DE = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  OE = U([EE, Bw], DE),
  kE = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: vh(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: vh(e, t.dataKey) })),
  AE = U([OE, pE, xE], kE);
function jE(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function ME(e) {
  if (eu(e) || e instanceof Date) {
    var t = Number(e);
    if (mg(t)) return t;
  }
}
function NE(e) {
  if (Array.isArray(e)) {
    var t = [ME(e[0]), ME(e[1])];
    return Vw(t) ? t : void 0;
  }
  var n = ME(e);
  if (n != null) return [n, n];
}
function PE(e) {
  return e.map(ME).filter(Y_);
}
function FE(e, t, n) {
  return !n || typeof t != `number` || Ql(t) || !n.length
    ? []
    : PE(
        n.flatMap((n) => {
          var r = vh(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), mg(i) && mg(a)))
            return [t - i, t + a];
        }),
      );
}
var IE = U([SE, Bw, KT], JT),
  LE = (e, t, n) => {
    var r = t.reduce(
      (e, t) => (
        t.stackId == null ||
          (e[t.stackId] ?? (e[t.stackId] = []), e[t.stackId].push(t)),
        e
      ),
      {},
    );
    return Object.fromEntries(
      Object.entries(r).map((t) => {
        var [r, i] = t;
        return [r, { stackedData: Oh(e, i.map(UT), n), graphicalItems: i }];
      }),
    );
  },
  RE = U([IE, SE, vT], LE),
  zE = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Ph(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  BE = U([pE], (e) => e.allowDataOverflow),
  VE = (e) => {
    if (e == null || !(`domain` in e)) return iE;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = PE(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? iE;
  },
  HE = U([pE], VE),
  UE = U([HE, BE], Uw),
  WE = U([RE, Rw, VT, UE], zE, { memoizeOptions: { resultEqualityCheck: XT } }),
  GE = (e) => e.errorBars,
  KE = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => jE(n, e)),
  qE = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  JE = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => jE(i, e)),
              c = vh(e, t.dataKey ?? n.dataKey),
              l = FE(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = NE(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = NE(vh(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      mg(a) && mg(o))
    )
      return [a, o];
  },
  YE = U([OE, pE, wE, GE, VT], JE, {
    memoizeOptions: { resultEqualityCheck: XT },
  });
function XE(e) {
  var { value: t } = e;
  if (eu(t) || t instanceof Date) return t;
}
var ZE = (e, t, n) => {
    var r = e.map(XE).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && iu(r)))
      ? (0, QT.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  QE = (e) => e.referenceElements.dots,
  $E = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  eD = U([QE, VT, HT], $E),
  tD = (e) => e.referenceElements.areas,
  nD = U([tD, VT, HT], $E),
  rD = (e) => e.referenceElements.lines,
  iD = U([rD, VT, HT], $E),
  aD = (e, t) => {
    var n = PE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  oD = U(eD, VT, aD),
  sD = (e, t) => {
    var n = PE(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  cD = U([nD, VT], sD),
  lD = (e, t) => {
    var n = PE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  uD = U(oD, U(iD, VT, lD), cD, (e, t, n) => qE(e, n, t)),
  dD = (e, t, n, r, i, a, o, s) =>
    n ??
    Ww(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? qE(r, a, i)
        : qE(a, i),
      e.allowDataOverflow,
    ),
  fD = U([pE, HE, UE, WE, YE, uD, W, VT], dD, {
    memoizeOptions: { resultEqualityCheck: XT },
  }),
  pD = [0, 1],
  mD = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = xh(t, a);
      return l && s == null
        ? (0, QT.default)(0, n.length)
        : c === `category`
          ? ZE(r, e, l)
          : i === `expand`
            ? pD
            : o;
    }
  },
  hD = U([pE, W, OE, AE, vT, VT, fD], mD),
  gD = (e, t, n, r, i) => {
    if (e != null) {
      var { scale: a, type: o } = e;
      if (a === `auto`)
        return t === `radial` && i === `radiusAxis`
          ? `band`
          : t === `radial` && i === `angleAxis`
            ? `linear`
            : o === `category` &&
                r &&
                (r.indexOf(`LineChart`) >= 0 ||
                  r.indexOf(`AreaChart`) >= 0 ||
                  (r.indexOf(`ComposedChart`) >= 0 && !n))
              ? `point`
              : o === `category`
                ? `band`
                : `linear`;
      if (typeof a == `string`) {
        var s = `scale${cu(a)}`;
        return s in Lw ? s : `point`;
      }
    }
  },
  _D = U([pE, W, gE, yT, VT], gD);
function vD(e) {
  if (e != null) {
    if (e in Lw) return Lw[e]();
    var t = `scale${cu(e)}`;
    if (t in Lw) return Lw[t]();
  }
}
function yD(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = vD(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (Th(a), a);
    }
  }
}
var bD = (e, t, n) => {
    var r = VE(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        Vw(e)
      )
        return fT(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && Vw(e))
        return pT(e, t.tickCount, t.allowDecimals);
    }
  },
  xD = U([hD, hE, _D], bD),
  SD = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      Vw(t) &&
      Array.isArray(n) &&
      n.length > 0
    ) {
      var i = t[0],
        a = n[0],
        o = t[1],
        s = n[n.length - 1];
      return [Math.min(i, a), Math.max(o, s)];
    }
    return t;
  },
  CD = U([pE, hD, xD, VT], SD),
  wD = U(
    U(AE, pE, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(PE(e.map((e) => e.value))).sort((e, t) => e - t);
        if (r.length < 2) return 1 / 0;
        var i = r[r.length - 1] - r[0];
        if (i === 0) return 1 / 0;
        for (var a = 0; a < r.length - 1; a++) {
          var o = r[a + 1] - r[a];
          n = Math.min(n, o);
        }
        return n / i;
      }
    }),
    W,
    gT,
    sg,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!mg(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = ru(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  TD = (e, t) => {
    var n = sE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : wD(e, `xAxis`, t, n.padding);
  },
  ED = (e, t) => {
    var n = uE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : wD(e, `yAxis`, t, n.padding);
  },
  DD = U(sE, TD, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  OD = U(uE, ED, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  kD = U([sg, DD, pg, fg, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  AD = U([sg, W, OD, pg, fg, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  jD = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return kD(e, n, r);
      case `yAxis`:
        return AD(e, n, r);
      case `zAxis`:
        return fE(e, n)?.range;
      case `angleAxis`:
        return IT(e);
      case `radiusAxis`:
        return RT(e, n);
      default:
        return;
    }
  },
  MD = U([pE, jD], TT),
  ND = U([pE, _D, CD, MD], yD);
U([xE, GE, VT], KE);
function PD(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var FD = (e, t) => t,
  ID = (e, t, n) => n,
  LD = U(qh, FD, ID, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(PD),
  ),
  RD = U(Jh, FD, ID, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(PD),
  ),
  zD = (e, t) => ({ width: e.width, height: t.height }),
  BD = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  VD = U(sg, sE, zD),
  HD = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  UD = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  WD = U(Wh, sg, LD, FD, ID, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = zD(t, n);
        o ??= HD(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  GD = U(Uh, sg, RD, FD, ID, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = BD(t, n);
        o ??= UD(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  KD = U(
    [
      sg,
      sE,
      (e, t) => {
        var n = sE(e, t);
        if (n != null) return WD(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: e.left, y: 0 } : { x: e.left, y: i };
      }
    },
  ),
  qD = U(
    [
      sg,
      uE,
      (e, t) => {
        var n = uE(e, t);
        if (n != null) return GD(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: 0, y: e.top } : { x: i, y: e.top };
      }
    },
  ),
  JD = U(sg, uE, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  YD = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return VD(e, n).width;
      case `yAxis`:
        return JD(e, n).height;
      default:
        return;
    }
  },
  XD = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = xh(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && iu(c)) return c;
    }
  },
  ZD = U([W, AE, pE, VT], XD),
  QD = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (xh(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  $D = U([W, AE, hE, VT], QD),
  eO = U([W, mE, _D, ND, ZD, $D, jD, xD, VT], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = xh(e, c);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: c,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: l,
      niceTicks: s,
      range: o,
      realScaleType: n,
      scale: r,
    };
  }),
  tO = (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = xh(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Zl(a[0] - a[1]) * 2 * m
          : m;
      var h = d || i;
      return h
        ? h
            .map((e, t) => ({
              index: t,
              coordinate: r(o ? o.indexOf(e) : e) + m,
              value: e,
              offset: m,
            }))
            .filter((e) => !Ql(e.coordinate))
        : l && s
          ? s.map((e, t) => ({
              coordinate: r(e) + m,
              value: e,
              index: t,
              offset: m,
            }))
          : r.ticks
            ? r
                .ticks(f)
                .map((e) => ({ coordinate: r(e) + m, value: e, offset: m }))
            : r
                .domain()
                .map((e, t) => ({
                  coordinate: r(e) + m,
                  value: o ? o[e] : e,
                  index: t,
                  offset: m,
                }));
    }
  },
  nO = U([W, hE, _D, ND, xD, jD, ZD, $D, VT], tO),
  rO = (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = xh(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Zl(r[0] - r[1]) * 2 * l : l),
        s && a
          ? a.map((e, t) => ({
              coordinate: n(e) + l,
              value: e,
              index: t,
              offset: l,
            }))
          : n.ticks
            ? n
                .ticks(c)
                .map((e) => ({ coordinate: n(e) + l, value: e, offset: l }))
            : n
                .domain()
                .map((e, t) => ({
                  coordinate: n(e) + l,
                  value: i ? i[e] : e,
                  index: t,
                  offset: l,
                }))
      );
    }
  },
  iO = U([W, hE, ND, jD, ZD, $D, VT], rO),
  aO = U(pE, ND, (e, t) => {
    if (e != null && t != null) return eE(eE({}, e), {}, { scale: t });
  });
U(
  (e, t, n) => fE(e, n),
  U([pE, _D, hD, MD], yD),
  (e, t) => {
    if (e != null && t != null) return eE(eE({}, e), {}, { scale: t });
  },
);
var oO = U([W, qh, Jh], (e, t, n) => {
    switch (e) {
      case `horizontal`:
        return t.some((e) => e.reversed) ? `right-to-left` : `left-to-right`;
      case `vertical`:
        return n.some((e) => e.reversed) ? `bottom-to-top` : `top-to-bottom`;
      case `centric`:
      case `radial`:
        return `left-to-right`;
      default:
        return;
    }
  }),
  sO = (e) => e.options.defaultTooltipEventType,
  cO = (e) => e.options.validateTooltipEventTypes;
function lO(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function uO(e, t) {
  return lO(t, sO(e), cO(e));
}
function dO(e) {
  return H((t) => uO(t, e));
}
var fO = (e, t) => {
    var n,
      r = Number(t);
    if (!(Ql(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  pO = (e) => e.tooltip.settings,
  mO = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  hO = tm({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: mO, hover: mO },
      axisInteraction: { click: mO, hover: mO },
      keyboardInteraction: mO,
      syncInteraction: {
        active: !1,
        index: null,
        dataKey: void 0,
        label: void 0,
        coordinate: void 0,
        sourceViewBox: void 0,
      },
      tooltipItemPayloads: [],
      settings: {
        shared: void 0,
        trigger: `hover`,
        axisId: 0,
        active: !1,
        defaultIndex: void 0,
      },
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(rp(t.payload));
        },
        prepare: jp(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Qf(e).tooltipItemPayloads.indexOf(rp(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: jp(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate),
          (e.keyboardInteraction.dataKey = t.payload.activeDataKey));
      },
    },
  }),
  {
    addTooltipEntrySettings: gO,
    removeTooltipEntrySettings: _O,
    setTooltipSettingsState: vO,
    setActiveMouseOverItemIndex: yO,
    mouseLeaveItem: bO,
    mouseLeaveChart: xO,
    setActiveClickItemIndex: SO,
    setMouseOverAxisIndex: CO,
    setMouseClickAxisIndex: wO,
    setSyncInteraction: TO,
    setKeyboardInteraction: EO,
  } = hO.actions,
  DO = hO.reducer;
function OO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function kO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? OO(Object(n), !0).forEach(function (t) {
          AO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : OO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AO(e, t, n) {
  return (
    (t = jO(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jO(e) {
  var t = MO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function MO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function NO(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function PO(e) {
  return e.index != null;
}
var FO = (e, t, n, r) => {
    if (t == null) return mO;
    var i = NO(e, t, n);
    if (i == null) return mO;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (PO(i)) {
      if (a) return kO(kO({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return kO(kO({}, mO), {}, { coordinate: i.coordinate });
  },
  IO = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!mg(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  LO = (e, t, n, r, i, a, o, s) => {
    if (a != null && s != null) {
      var c = o[0],
        l = c == null ? void 0 : s(c.positions, a);
      if (l != null) return l;
      var u = i?.[Number(a)];
      if (u)
        switch (n) {
          case `horizontal`:
            return { x: u.coordinate, y: (r.top + t) / 2 };
          default:
            return { x: (r.left + e) / 2, y: u.coordinate };
        }
    }
  },
  RO = (e, t, n, r) => {
    if (t === `axis`) return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var i =
      n === `hover`
        ? e.itemInteraction.hover.dataKey
        : e.itemInteraction.click.dataKey;
    return i == null && r != null
      ? [e.tooltipItemPayloads[0]]
      : e.tooltipItemPayloads.filter((e) => e.settings?.dataKey === i);
  },
  zO = (e) => e.options.tooltipPayloadSearcher,
  BO = (e) => e.tooltip;
function VO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function HO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? VO(Object(n), !0).forEach(function (t) {
          UO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : VO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function UO(e, t, n) {
  return (
    (t = WO(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function WO(e) {
  var t = GO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function GO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function KO(e, t) {
  return e ?? t;
}
var qO = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = KO(d, s),
          m = Array.isArray(p) ? fh(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? ou(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = HO(
                  HO({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  Rh({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: vh(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                Rh({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: vh(_, h),
                  name: vh(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  JO = U([KT, W, gE, yT, WT], gD),
  YO = U(
    [
      U(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      KT,
      U([WT, GT], _E),
    ],
    bE,
    { memoizeOptions: { resultEqualityCheck: ZT } },
  ),
  XO = U([YO], (e) => e.filter(YT)),
  ZO = U(
    [U([YO], TE, { memoizeOptions: { resultEqualityCheck: ZT } }), Rw],
    DE,
  ),
  QO = U([XO, Rw, KT], JT),
  $O = U([ZO, KT, YO], kE),
  ek = U([KT], VE),
  tk = U([ek, U([KT], (e) => e.allowDataOverflow)], Uw),
  nk = U([U([QO, U([YO], (e) => e.filter(YT)), vT], LE), Rw, WT, tk], zE),
  rk = U([ZO, KT, U([YO], CE), GE, WT], JE, {
    memoizeOptions: { resultEqualityCheck: XT },
  }),
  ik = U([U([QE, WT, GT], $E), WT], aD),
  ak = U([U([tD, WT, GT], $E), WT], sD),
  ok = U(
    [
      KT,
      W,
      ZO,
      $O,
      vT,
      WT,
      U(
        [
          KT,
          ek,
          tk,
          nk,
          rk,
          U([ik, U([U([rD, WT, GT], $E), WT], lD), ak], qE),
          W,
          WT,
        ],
        dD,
      ),
    ],
    mD,
  ),
  sk = U([KT, ok, U([ok, KT, JO], bD), WT], SD),
  ck = (e) => jD(e, WT(e), GT(e), !1),
  lk = U([KT, ck], TT),
  uk = U([KT, JO, sk, lk], yD),
  dk = U(
    [W, KT, JO, uk, ck, U([W, $O, KT, WT], XD), U([W, $O, KT, WT], QD), WT],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = xh(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Zl(i[0] - i[1]) * 2 * d
                : d),
            l && o
              ? o.map((e, t) => ({
                  coordinate: r(e) + d,
                  value: e,
                  index: t,
                  offset: d,
                }))
              : r
                  .domain()
                  .map((e, t) => ({
                    coordinate: r(e) + d,
                    value: a ? a[e] : e,
                    index: t,
                    offset: d,
                  }))
          );
        }
      }
    },
  ),
  fk = U([sO, cO, pO], (e, t, n) => lO(n.shared, e, t)),
  pk = (e) => e.tooltip.settings.trigger,
  mk = (e) => e.tooltip.settings.defaultIndex,
  hk = U([BO, fk, pk, mk], FO),
  gk = U([hk, ZO], IO),
  _k = U([dk, gk], fO),
  vk = U([hk], (e) => {
    if (e) return e.dataKey;
  }),
  yk = U([BO, fk, pk, mk], RO),
  bk = U([hk, U([Uh, Wh, W, sg, dk, mk, yk, zO], LO)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  xk = U([hk], (e) => e.active),
  Sk = U([U([yk, gk, Rw, qT, _k, zO, fk], qO)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function Ck(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function wk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ck(Object(n), !0).forEach(function (t) {
          Tk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ck(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Tk(e, t, n) {
  return (
    (t = Ek(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ek(e) {
  var t = Dk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Dk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ok = () => H(KT),
  kk = () => {
    var e = Ok(),
      t = H(dk),
      n = H(uk);
    return Lh(wk(wk({}, e), {}, { scale: n }), t);
  },
  Ak = () => H(yT),
  jk = (e, t) => t,
  Mk = (e, t, n) => n,
  Nk = (e, t, n, r) => r,
  Pk = U(dk, (e) => (0, Bd.default)(e, (e) => e.coordinate)),
  Fk = U([BO, jk, Mk, Nk], FO),
  Ik = U([Fk, ZO], IO),
  Lk = (e, t, n) => {
    if (t != null) {
      var r = BO(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Rk = U([BO, jk, Mk, Nk], RO),
  zk = U([Uh, Wh, W, sg, dk, Nk, Rk, zO], LO),
  Bk = U([Fk, zk], (e, t) => e.coordinate ?? t),
  Vk = U(dk, Ik, fO),
  Hk = U([Rk, Ik, Rw, qT, Vk, zO, jk], qO),
  Uk = U([Fk], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Wk = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = Bh(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = yh(Hh(c, t), o, a, r, i),
          u = Vh(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function Gk() {
  return (
    (Gk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gk.apply(null, arguments)
  );
}
function Kk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function qk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Kk(Object(n), !0).forEach(function (t) {
          Jk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Jk(e, t, n) {
  return (
    (t = Yk(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yk(e) {
  var t = Xk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Xk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Zk(e) {
  var {
      coordinate: t,
      payload: n,
      index: r,
      offset: i,
      tooltipAxisBandSize: a,
      layout: o,
      cursor: s,
      tooltipEventType: c,
      chartName: l,
    } = e,
    u = t,
    d = n,
    f = r;
  if (!s || !u || (l !== `ScatterChart` && c !== `axis`)) return null;
  var p, m;
  if (l === `ScatterChart`) ((p = u), (m = B_));
  else if (l === `BarChart`) ((p = V_(o, u, i, a)), (m = Gv));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = Kv(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = $v));
  } else ((p = { points: ey(o, u, i) }), (m = k_));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = qk(
      qk(qk(qk({ stroke: `#ccc`, pointerEvents: `none` }, i), p), sc(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: z(`recharts-tooltip-cursor`, b),
      },
    );
  return (0, B.isValidElement)(s)
    ? (0, B.cloneElement)(s, x)
    : (0, B.createElement)(m, x);
}
function Qk(e) {
  var t = kk(),
    n = bg(),
    r = wg(),
    i = Ak();
  return B.createElement(
    Zk,
    Gk({}, e, {
      coordinate: e.coordinate,
      index: e.index,
      payload: e.payload,
      offset: n,
      layout: r,
      tooltipAxisBandSize: t,
      chartName: i,
    }),
  );
}
var $k = (0, B.createContext)(null),
  eA = () => (0, B.useContext)($k),
  tA = e(
    n((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`)
          throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events))
          n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                      u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn)
            o.fn !== t ||
              (i && !o.once) ||
              (n && o.context !== n) ||
              s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (i && !o[c].once) ||
                (n && o[c].context !== n)) &&
                l.push(o[c]);
            l.length
              ? (this._events[a] = l.length === 1 ? l[0] : l)
              : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
    1,
  ).default,
  nA = new tA(),
  rA = `recharts.syncEvent.tooltip`,
  iA = `recharts.syncEvent.brush`;
function aA(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!Ql(n)) return e?.[n];
  }
}
var oA = tm({
    name: `options`,
    initialState: {
      chartName: ``,
      tooltipPayloadSearcher: void 0,
      eventEmitter: void 0,
      defaultTooltipEventType: `axis`,
    },
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter ??= Symbol(`rechartsEventEmitter`);
      },
    },
  }),
  sA = oA.reducer,
  { createEventEmitter: cA } = oA.actions;
function lA(e) {
  return e.tooltip.syncInteraction;
}
var uA = tm({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(e, t) {
        ((e.chartData = t.payload),
          t.payload == null
            ? ((e.dataStartIndex = 0), (e.dataEndIndex = 0))
            : t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1));
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: n, endIndex: r } = t.payload;
        (n != null && (e.dataStartIndex = n),
          r != null && (e.dataEndIndex = r));
      },
    },
  }),
  {
    setChartData: dA,
    setDataStartEndIndexes: fA,
    setComputedData: pA,
  } = uA.actions,
  mA = uA.reducer,
  hA = [`x`, `y`];
function gA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gA(Object(n), !0).forEach(function (t) {
          vA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vA(e, t, n) {
  return (
    (t = yA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yA(e) {
  var t = bA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function xA(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = SA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function SA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var CA = () => {};
function wA() {
  var e = H(bT),
    t = H(ST),
    n = hd(),
    r = H(xT),
    i = H(dk),
    a = wg(),
    o = vg(),
    s = H((e) => e.rootProps.className);
  (0, B.useEffect)(() => {
    if (e == null) return CA;
    var s = (s, c, l) => {
      if (t !== l && e === s) {
        if (r === `index`) {
          var u;
          if (
            o &&
            c != null &&
            (u = c.payload) != null &&
            u.coordinate &&
            c.payload.sourceViewBox
          ) {
            var d = c.payload.coordinate,
              { x: f, y: p } = d,
              m = xA(d, hA),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = _A(
                _A({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              _A(
                _A({}, c),
                {},
                { payload: _A(_A({}, c.payload), {}, { coordinate: y }) },
              ),
            );
          } else n(c);
        } else if (i != null) {
          var b;
          typeof r == `function`
            ? (b =
                i[
                  r(i, {
                    activeTooltipIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    isTooltipActive: c.payload.active,
                    activeIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    activeLabel: c.payload.label,
                    activeDataKey: c.payload.dataKey,
                    activeCoordinate: c.payload.coordinate,
                  })
                ])
            : r === `value` &&
              (b = i.find((e) => String(e.value) === c.payload.label));
          var { coordinate: x } = c.payload;
          if (b == null || c.payload.active === !1 || x == null || o == null)
            n(
              TO({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
              }),
            );
          else {
            var { x: S, y: C } = x,
              w = Math.min(S, o.x + o.width),
              T = Math.min(C, o.y + o.height),
              E = {
                x: a === `horizontal` ? b.coordinate : w,
                y: a === `horizontal` ? T : b.coordinate,
              };
            n(
              TO({
                active: c.payload.active,
                coordinate: E,
                dataKey: c.payload.dataKey,
                index: String(b.index),
                label: c.payload.label,
                sourceViewBox: c.payload.sourceViewBox,
              }),
            );
          }
        }
      }
    };
    return (
      nA.on(rA, s),
      () => {
        nA.off(rA, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function TA() {
  var e = H(bT),
    t = H(ST),
    n = hd();
  (0, B.useEffect)(() => {
    if (e == null) return CA;
    var r = (r, i, a) => {
      t !== a && e === r && n(fA(i));
    };
    return (
      nA.on(iA, r),
      () => {
        nA.off(iA, r);
      }
    );
  }, [n, t, e]);
}
function EA() {
  var e = hd();
  ((0, B.useEffect)(() => {
    e(cA());
  }, [e]),
    wA(),
    TA());
}
function DA(e, t, n, r, i, a) {
  var o = H((n) => Lk(n, e, t)),
    s = H(ST),
    c = H(bT),
    l = H(xT),
    u = H(lA)?.active,
    d = vg();
  (0, B.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = TO({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      nA.emit(rA, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function OA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function kA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? OA(Object(n), !0).forEach(function (t) {
          AA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : OA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AA(e, t, n) {
  return (
    (t = jA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jA(e) {
  var t = MA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function MA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function NA(e) {
  return e.dataKey;
}
function PA(e, t) {
  return B.isValidElement(e)
    ? B.cloneElement(e, t)
    : typeof e == `function`
      ? B.createElement(e, t)
      : B.createElement(n_, t);
}
var FA = [],
  IA = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !h_.isSsr,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function LA(e) {
  var t = q_(e, IA),
    {
      active: n,
      allowEscapeViewBox: r,
      animationDuration: i,
      animationEasing: a,
      content: o,
      filterNull: s,
      isAnimationActive: c,
      offset: l,
      payloadUniqBy: u,
      position: d,
      reverseDirection: f,
      useTranslate3d: p,
      wrapperStyle: m,
      cursor: h,
      shared: g,
      trigger: _,
      defaultIndex: v,
      portal: y,
      axisId: b,
    } = t,
    x = hd(),
    S = typeof v == `number` ? String(v) : v;
  (0, B.useEffect)(() => {
    x(vO({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = vg(),
    w = g_(),
    T = dO(g),
    { activeIndex: E, isActive: D } = H((e) => Uk(e, T, _, S)),
    ee = H((e) => Hk(e, T, _, S)),
    te = H((e) => Vk(e, T, _, S)),
    ne = H((e) => Bk(e, T, _, S)),
    re = ee,
    ie = eA(),
    O = n ?? D,
    [ae, oe] = Kd([re, O]),
    se = T === `axis` ? te : void 0;
  DA(T, _, ne, se, E, O);
  var ce = y ?? ie;
  if (ce == null) return null;
  var le = re ?? FA;
  (O || (le = FA),
    s &&
      le.length &&
      (le = ld(
        re.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        NA,
      )));
  var k = le.length > 0,
    ue = B.createElement(
      m_,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: O,
        coordinate: ne,
        hasPayload: k,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: ae,
        innerRef: oe,
        hasPortalFromProps: !!y,
      },
      PA(
        o,
        kA(
          kA({}, t),
          {},
          {
            payload: le,
            label: se,
            active: O,
            coordinate: ne,
            accessibilityLayer: w,
          },
        ),
      ),
    );
  return B.createElement(
    B.Fragment,
    null,
    (0, Mg.createPortal)(ue, ce),
    O &&
      B.createElement(Qk, {
        cursor: h,
        tooltipEventType: T,
        coordinate: ne,
        payload: re,
        index: E,
      }),
  );
}
var RA = (e) => null;
RA.displayName = `Cell`;
function zA(e, t, n) {
  return (
    (t = BA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function BA(e) {
  var t = VA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var HA = class {
  constructor(e) {
    (zA(this, `cache`, new Map()), (this.maxSize = e));
  }
  get(e) {
    var t = this.cache.get(e);
    return (t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t);
  }
  set(e, t) {
    if (this.cache.has(e)) this.cache.delete(e);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      this.cache.delete(n);
    }
    this.cache.set(e, t);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function UA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function WA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? UA(Object(n), !0).forEach(function (t) {
          GA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : UA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function GA(e, t, n) {
  return (
    (t = KA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function KA(e) {
  var t = qA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var JA = WA({}, { cacheSize: 2e3, enableCache: !0 }),
  YA = new HA(JA.cacheSize),
  XA = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  ZA = `recharts_measurement_span`;
function QA(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var $A = (e, t) => {
    try {
      var n = document.getElementById(ZA);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, ZA),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, XA, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  ej = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || h_.isSsr) return { width: 0, height: 0 };
    var n = JA.measureText || $A;
    if (!JA.enableCache) return n(e, t);
    var r = QA(e, t),
      i = YA.get(r);
    if (i) return i;
    var a = n(e, t);
    return (YA.set(r, a), a);
  },
  tj = (e) => {
    var t = WA(WA({}, JA), e);
    (t.cacheSize !== JA.cacheSize && (YA = new HA(t.cacheSize)), (JA = t));
  },
  nj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  rj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ij = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  aj = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  oj = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  sj = Object.keys(oj),
  cj = `NaN`;
function lj(e, t) {
  return e * oj[t];
}
var uj = class e {
  static parse(t) {
    var [, n, r] = aj.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      Ql(e) && (this.unit = ``),
      t !== `` && !ij.test(t) && ((this.num = NaN), (this.unit = ``)),
      sj.includes(t) && ((this.num = lj(e, t)), (this.unit = `px`)));
  }
  add(t) {
    return this.unit === t.unit
      ? new e(this.num + t.num, this.unit)
      : new e(NaN, ``);
  }
  subtract(t) {
    return this.unit === t.unit
      ? new e(this.num - t.num, this.unit)
      : new e(NaN, ``);
  }
  multiply(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return `${this.num}${this.unit}`;
  }
  isNaN() {
    return Ql(this.num);
  }
};
function dj(e) {
  if (e.includes(cj)) return cj;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = nj.exec(t) ?? [],
      a = uj.parse(n ?? ``),
      o = uj.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return cj;
    t = t.replace(nj, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = rj.exec(t) ?? [],
      d = uj.parse(c ?? ``),
      f = uj.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return cj;
    t = t.replace(rj, p.toString());
  }
  return t;
}
var fj = /\(([^()]*)\)/;
function pj(e) {
  for (var t = e, n; (n = fj.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(fj, dj(r));
  }
  return t;
}
function mj(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = pj(t)), (t = dj(t)), t);
}
function hj(e) {
  try {
    return mj(e);
  } catch {
    return cj;
  }
}
function gj(e) {
  var t = hj(e.slice(5, -1));
  return t === cj ? `` : t;
}
var _j = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  vj = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function yj() {
  return (
    (yj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yj.apply(null, arguments)
  );
}
function bj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function xj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Sj = /[ \f\n\r\t\v\u2028\u2029]+/,
  Cj = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        su(t) || (i = n ? t.toString().split(``) : t.toString().split(Sj)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: ej(e, r).width,
          })),
          spaceWidth: n ? 0 : ej(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  wj = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = V(a),
      u = o,
      d = function () {
        return (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        ).reduce((e, t) => {
          var { word: a, width: o } = t,
            s = e[e.length - 1];
          if (s && (r == null || i || s.width + o + n < Number(r)))
            (s.words.push(a), (s.width += o + n));
          else {
            var c = { words: [a], width: o };
            e.push(c);
          }
          return e;
        }, []);
      },
      f = d(t),
      p = (e) => e.reduce((e, t) => (e.width > t.width ? e : t));
    if (!l || i || !(f.length > a || p(f).width > Number(r))) return f;
    for (
      var m = `…`,
        h = (e) => {
          var t = Cj({
              breakAll: c,
              style: s,
              children: u.slice(0, e) + m,
            }).wordsWithComputedWidth,
            n = d(t);
          return [n.length > a || p(n).width > Number(r), n];
        },
        g = 0,
        _ = u.length - 1,
        v = 0,
        y;
      g <= _ && v <= u.length - 1;
    ) {
      var b = Math.floor((g + _) / 2),
        [x, S] = h(b - 1),
        [C] = h(b);
      if ((!x && !C && (g = b + 1), x && C && (_ = b - 1), !x && C)) {
        y = S;
        break;
      }
      v++;
    }
    return y || f;
  },
  Tj = (e) => [{ words: su(e) ? [] : e.toString().split(Sj) }],
  Ej = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !h_.isSsr) {
      var s,
        c,
        l = Cj({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return Tj(r);
      return wj(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return Tj(r);
  },
  Dj = `#808080`,
  Oj = (0, B.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = Dj,
      } = e,
      u = bj(e, _j),
      d = (0, B.useMemo)(
        () =>
          Ej({
            breakAll: u.breakAll,
            children: u.children,
            maxLines: u.maxLines,
            scaleToFit: o,
            style: u.style,
            width: u.width,
          }),
        [u.breakAll, u.children, u.maxLines, o, u.style, u.width],
      ),
      { dx: f, dy: p, angle: m, className: h, breakAll: g } = u,
      _ = bj(u, vj);
    if (!eu(n) || !eu(r) || d.length === 0) return null;
    var v = n + (V(f) ? f : 0),
      y = r + (V(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = gj(`calc(${a})`);
        break;
      case `middle`:
        b = gj(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = gj(`calc(${d.length - 1} * -${i})`);
    }
    var x = [];
    if (o) {
      var S = d[0].width,
        { width: C } = u;
      x.push(`scale(${V(C) ? C / S : 1})`);
    }
    return (
      m && x.push(`rotate(${m}, ${v}, ${y})`),
      x.length && (_.transform = x.join(` `)),
      B.createElement(
        `text`,
        yj({}, cc(_), {
          ref: t,
          x: v,
          y,
          className: z(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? Dj : l,
        }),
        d.map((e, t) => {
          var n = e.words.join(g ? `` : ` `);
          return B.createElement(
            `tspan`,
            { x: v, dy: t === 0 ? b : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
Oj.displayName = `Text`;
var kj = [`labelRef`];
function Aj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = jj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function jj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Mj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mj(Object(n), !0).forEach(function (t) {
          Pj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pj(e, t, n) {
  return (
    (t = Fj(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Fj(e) {
  var t = Ij(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ij(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Lj() {
  return (
    (Lj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lj.apply(null, arguments)
  );
}
var Rj = (0, B.createContext)(null),
  zj = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, B.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return B.createElement(Rj.Provider, { value: o }, a);
  },
  Bj = () => {
    var e = (0, B.useContext)(Rj),
      t = vg();
    return e || t;
  },
  Vj = (0, B.createContext)(null),
  Hj = () => {
    var e = (0, B.useContext)(Vj),
      t = H(BT);
    return e || t;
  },
  Uj = (e) => {
    var { value: t, formatter: n } = e,
      r = su(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  Wj = (e) => e != null && typeof e == `function`,
  Gj = (e, t) => Zl(t - e) * Math.min(Math.abs(t - e), 360),
  Kj = (e, t, n, r, i) => {
    var { offset: a, className: o } = e,
      {
        cx: s,
        cy: c,
        innerRadius: l,
        outerRadius: u,
        startAngle: d,
        endAngle: f,
        clockWise: p,
      } = i,
      m = (l + u) / 2,
      h = Gj(d, f),
      g = h >= 0 ? 1 : -1,
      _,
      v;
    switch (t) {
      case `insideStart`:
        ((_ = d + g * a), (v = p));
        break;
      case `insideEnd`:
        ((_ = f - g * a), (v = !p));
        break;
      case `end`:
        ((_ = f + g * a), (v = p));
        break;
      default:
        throw Error(`Unsupported position ${t}`);
    }
    v = h <= 0 ? v : !v;
    var y = ih(s, c, m, _),
      b = ih(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = su(e.id) ? nu(`recharts-radial-line-`) : e.id;
    return B.createElement(
      `text`,
      Lj({}, r, {
        dominantBaseline: `central`,
        className: z(`recharts-radial-bar-label`, o),
      }),
      B.createElement(`defs`, null, B.createElement(`path`, { id: S, d: x })),
      B.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  qj = (e, t, n) => {
    var {
        cx: r,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        startAngle: s,
        endAngle: c,
      } = e,
      l = (s + c) / 2;
    if (n === `outside`) {
      var { x: u, y: d } = ih(r, i, o + t, l);
      return {
        x: u,
        y: d,
        textAnchor: u >= r ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (n === `center`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `middle` };
    if (n === `centerTop`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `start` };
    if (n === `centerBottom`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `end` };
    var { x: f, y: p } = ih(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  Jj = (e) => `cx` in e && V(e.cx),
  Yj = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !Jj(n) && (a = n);
    var { x: o, y: s, width: c, height: l } = t,
      u = l >= 0 ? 1 : -1,
      d = u * r,
      f = u > 0 ? `end` : `start`,
      p = u > 0 ? `start` : `end`,
      m = c >= 0 ? 1 : -1,
      h = m * r,
      g = m > 0 ? `end` : `start`,
      _ = m > 0 ? `start` : `end`;
    if (i === `top`)
      return Nj(
        Nj(
          {},
          {
            x: o + c / 2,
            y: s - u * r,
            textAnchor: `middle`,
            verticalAnchor: f,
          },
        ),
        a ? { height: Math.max(s - a.y, 0), width: c } : {},
      );
    if (i === `bottom`)
      return Nj(
        Nj(
          {},
          {
            x: o + c / 2,
            y: s + l + d,
            textAnchor: `middle`,
            verticalAnchor: p,
          },
        ),
        a ? { height: Math.max(a.y + a.height - (s + l), 0), width: c } : {},
      );
    if (i === `left`) {
      var v = {
        x: o - h,
        y: s + l / 2,
        textAnchor: g,
        verticalAnchor: `middle`,
      };
      return Nj(
        Nj({}, v),
        a ? { width: Math.max(v.x - a.x, 0), height: l } : {},
      );
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return Nj(
        Nj({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? Nj(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? Nj(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? Nj(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? Nj(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? Nj({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? Nj(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? Nj(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? Nj(
                        {
                          x: o + c - h,
                          y: s + l - d,
                          textAnchor: g,
                          verticalAnchor: f,
                        },
                        b,
                      )
                    : i &&
                        typeof i == `object` &&
                        (V(i.x) || $l(i.x)) &&
                        (V(i.y) || $l(i.y))
                      ? Nj(
                          {
                            x: o + ru(i.x, c),
                            y: s + ru(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : Nj(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  Xj = { offset: 5 };
function Zj(e) {
  var t = q_(e, Xj),
    {
      viewBox: n,
      position: r,
      value: i,
      children: a,
      content: o,
      className: s = ``,
      textBreakAll: c,
      labelRef: l,
    } = t,
    u = Hj(),
    d = Bj(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (su(i) && su(a) && !(0, B.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = Nj(Nj({}, t), {}, { viewBox: f });
  if ((0, B.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = Aj(p, kj);
    return (0, B.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, B.createElement)(o, p)), (0, B.isValidElement)(g))) return g;
  } else g = Uj(t);
  var _ = Jj(f),
    v = cc(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return Kj(t, r, g, v, f);
  var y = _ ? qj(f, t.offset, t.position) : Yj(t, f);
  return B.createElement(
    Oj,
    Lj({ ref: l, className: z(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
Zj.displayName = `Label`;
var Qj = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? B.createElement(Zj, Lj({ key: `label-implicit` }, r))
    : eu(e)
      ? B.createElement(Zj, Lj({ key: `label-implicit`, value: e }, r))
      : (0, B.isValidElement)(e)
        ? e.type === Zj
          ? (0, B.cloneElement)(e, Nj({ key: `label-implicit` }, r))
          : B.createElement(Zj, Lj({ key: `label-implicit`, content: e }, r))
        : Wj(e)
          ? B.createElement(Zj, Lj({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? B.createElement(Zj, Lj({}, e, { key: `label-implicit` }, r))
            : null;
};
function $j(e) {
  var { label: t, labelRef: n } = e;
  return Qj(t, Bj(), n) || null;
}
var eM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  tM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  nM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = eM(),
      n = tM(),
      r = Ru();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  rM = e(
    n((e, t) => {
      t.exports = nM().last;
    })(),
  ),
  iM = [`valueAccessor`],
  aM = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function oM() {
  return (
    (oM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oM.apply(null, arguments)
  );
}
function sM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = cM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function cM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var lM = (e) => (Array.isArray(e.value) ? (0, rM.default)(e.value) : e.value),
  uM = (0, B.createContext)(void 0),
  dM = uM.Provider,
  fM = (0, B.createContext)(void 0),
  pM = fM.Provider;
function mM() {
  return (0, B.useContext)(uM);
}
function hM() {
  return (0, B.useContext)(fM);
}
function gM(e) {
  var { valueAccessor: t = lM } = e,
    n = sM(e, iM),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = sM(n, aM),
    c = mM(),
    l = hM(),
    u = c || l;
  return !u || !u.length
    ? null
    : B.createElement(
        yc,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = su(r) ? t(e, i) : vh(e && e.payload, r),
            l = su(a) ? {} : { id: `${a}-${i}` };
          return B.createElement(
            Zj,
            oM({ key: `label-${i}` }, cc(e), s, l, {
              fill: n.fill ?? e.fill,
              parentViewBox: e.parentViewBox,
              value: c,
              textBreakAll: o,
              viewBox: e.viewBox,
              index: i,
            }),
          );
        }),
      );
}
gM.displayName = `LabelList`;
function _M(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? B.createElement(gM, { key: `labelList-implicit` })
      : B.isValidElement(t) || Wj(t)
        ? B.createElement(gM, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? B.createElement(
              gM,
              oM({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var vM = [`points`, `className`, `baseLinePoints`, `connectNulls`];
function yM() {
  return (
    (yM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yM.apply(null, arguments)
  );
}
function bM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function xM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var SM = (e) => e && e.x === +e.x && e.y === +e.y,
  CM = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach((e) => {
        SM(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      SM(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  wM = (e, t) => {
    var n = CM(e);
    t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
    var r = n
      .map((e) =>
        e.reduce((e, t, n) => `${e}${n === 0 ? `M` : `L`}${t.x},${t.y}`, ``),
      )
      .join(``);
    return n.length === 1 ? `${r}Z` : r;
  },
  TM = (e, t, n) => {
    var r = wM(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${wM(Array.from(t).reverse(), n).slice(1)}`;
  },
  EM = (e) => {
    var { points: t, className: n, baseLinePoints: r, connectNulls: i } = e,
      a = bM(e, vM);
    if (!t || !t.length) return null;
    var o = z(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = TM(t, r, i);
      return B.createElement(
        `g`,
        { className: o },
        B.createElement(
          `path`,
          yM({}, cc(a), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? B.createElement(
              `path`,
              yM({}, cc(a), { fill: `none`, d: wM(t, i) }),
            )
          : null,
        s
          ? B.createElement(
              `path`,
              yM({}, cc(a), { fill: `none`, d: wM(r, i) }),
            )
          : null,
      );
    }
    var l = wM(t, i);
    return B.createElement(
      `path`,
      yM({}, cc(a), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function DM() {
  return (
    (DM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    DM.apply(null, arguments)
  );
}
var OM = (e) => {
    var { cx: t, cy: n, r, className: i } = e,
      a = z(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? B.createElement(
          `circle`,
          DM({}, oc(e), wu(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  kM = (e) => e.graphicalItems.polarItems,
  AM = U([kM, pE, U([VT, HT], _E)], bE),
  jM = U([U([AM], TE), zw], DE),
  MM = U([jM, pE, AM], kE);
U([jM, pE, AM], (e, t, n) =>
  n.length > 0
    ? e
        .flatMap((e) =>
          n.flatMap((n) => ({
            value: vh(e, t.dataKey ?? n.dataKey),
            errorDomain: [],
          })),
        )
        .filter(Boolean)
    : t?.dataKey == null
      ? e.map((e) => ({ value: e, errorDomain: [] }))
      : e.map((e) => ({ value: vh(e, t.dataKey), errorDomain: [] })),
);
var NM = () => void 0,
  PM = U(
    [
      pE,
      W,
      jM,
      MM,
      vT,
      VT,
      U([pE, HE, UE, NM, U([jM, pE, AM, GE, VT], JE), NM, W, VT], dD),
    ],
    mD,
  ),
  FM = U([PM, pE, _D], bD),
  IM = U([pE, PM, FM, VT], SD),
  LM = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return AT(e, n);
      case `radiusAxis`:
        return jT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  RM = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return LT(e, n);
      case `radiusAxis`:
        return zT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  zM = U([LM, _D, IM, RM], yD),
  BM = U([W, MM, hE, VT], QD),
  VM = U([W, LM, _D, zM, FM, RM, ZD, BM, VT], tO);
U([W, LM, zM, RM, ZD, BM, VT], rO);
var HM = U([(e, t) => VM(e, `angleAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  UM = U([(e, t) => VM(e, `radiusAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  WM = [
    `gridType`,
    `radialLines`,
    `angleAxisId`,
    `radiusAxisId`,
    `cx`,
    `cy`,
    `innerRadius`,
    `outerRadius`,
  ];
function GM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = KM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function KM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function qM() {
  return (
    (qM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qM.apply(null, arguments)
  );
}
function JM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function YM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? JM(Object(n), !0).forEach(function (t) {
          XM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : JM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function XM(e, t, n) {
  return (
    (t = ZM(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ZM(e) {
  var t = QM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function QM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var $M = (e, t, n, r) => {
    var i = ``;
    return (
      r.forEach((r, a) => {
        var o = ih(t, n, e, r);
        i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
      }),
      (i += `Z`),
      i
    );
  },
  eN = (e) => {
    var {
      cx: t,
      cy: n,
      innerRadius: r,
      outerRadius: i,
      polarAngles: a,
      radialLines: o,
    } = e;
    if (!a || !a.length || !o) return null;
    var s = YM({ stroke: `#ccc` }, oc(e));
    return B.createElement(
      `g`,
      { className: `recharts-polar-grid-angle` },
      a.map((e) => {
        var a = ih(t, n, r, e),
          o = ih(t, n, i, e);
        return B.createElement(
          `line`,
          qM({ key: `line-${e}` }, s, { x1: a.x, y1: a.y, x2: o.x, y2: o.y }),
        );
      }),
    );
  },
  tN = (e) => {
    var { cx: t, cy: n, radius: r } = e,
      i = YM({ stroke: `#ccc`, fill: `none` }, oc(e));
    return B.createElement(
      `circle`,
      qM({}, i, {
        className: z(`recharts-polar-grid-concentric-circle`, e.className),
        cx: t,
        cy: n,
        r,
      }),
    );
  },
  nN = (e) => {
    var { radius: t } = e,
      n = YM({ stroke: `#ccc`, fill: `none` }, oc(e));
    return B.createElement(
      `path`,
      qM({}, n, {
        className: z(`recharts-polar-grid-concentric-polygon`, e.className),
        d: $M(t, e.cx, e.cy, e.polarAngles),
      }),
    );
  },
  rN = (e) => {
    var { polarRadius: t, gridType: n } = e;
    if (!t || !t.length) return null;
    var r = Math.max(...t),
      i = e.fill && e.fill !== `none`;
    return B.createElement(
      `g`,
      { className: `recharts-polar-grid-concentric` },
      i && n === `circle` && B.createElement(tN, qM({}, e, { radius: r })),
      i && n !== `circle` && B.createElement(nN, qM({}, e, { radius: r })),
      t.map((t, r) => {
        var i = r;
        return n === `circle`
          ? B.createElement(tN, qM({ key: i }, e, { fill: `none`, radius: t }))
          : B.createElement(nN, qM({ key: i }, e, { fill: `none`, radius: t }));
      }),
    );
  },
  iN = (e) => {
    var {
        gridType: t = `polygon`,
        radialLines: n = !0,
        angleAxisId: r = 0,
        radiusAxisId: i = 0,
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: c,
      } = e,
      l = GM(e, WM),
      u = H(BT),
      d = YM(
        {
          cx: u?.cx ?? a ?? 0,
          cy: u?.cy ?? o ?? 0,
          innerRadius: u?.innerRadius ?? s ?? 0,
          outerRadius: u?.outerRadius ?? c ?? 0,
        },
        l,
      ),
      { polarAngles: f, polarRadius: p, outerRadius: m } = d,
      h = H((e) => HM(e, r)),
      g = H((e) => UM(e, i)),
      _ = Array.isArray(f) ? f : h,
      v = Array.isArray(p) ? p : g;
    return m <= 0 || _ == null || v == null
      ? null
      : B.createElement(
          `g`,
          { className: `recharts-polar-grid` },
          B.createElement(
            rN,
            qM({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
          B.createElement(
            eN,
            qM({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
        );
  };
iN.displayName = `PolarGrid`;
var aN = tm({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = rp(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = rp(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: oN,
    removeRadiusAxis: sN,
    addAngleAxis: cN,
    removeAngleAxis: lN,
  } = aN.actions,
  uN = aN.reducer,
  dN = [`children`];
function fN() {
  return (
    (fN = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fN.apply(null, arguments)
  );
}
function pN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function mN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pN(Object(n), !0).forEach(function (t) {
          hN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hN(e, t, n) {
  return (
    (t = gN(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gN(e) {
  var t = _N(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _N(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = yN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function yN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var bN = 1e-5,
  xN = Math.cos(nh(45)),
  SN = `angleAxis`;
function CN(e) {
  var t = hd(),
    n = (0, B.useMemo)(() => {
      var { children: t } = e;
      return vN(e, dN);
    }, [e]),
    r = n === H((e) => AT(e, n.id));
  return (
    (0, B.useEffect)(
      () => (
        t(cN(n)),
        () => {
          t(lN(n));
        }
      ),
      [t, n],
    ),
    r ? e.children : null
  );
}
var wN = (e, t) => {
    var { cx: n, cy: r, radius: i, orientation: a, tickSize: o } = t,
      s = o || 8,
      c = ih(n, r, i, e.coordinate),
      l = ih(n, r, i + (a === `inner` ? -1 : 1) * s, e.coordinate);
    return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
  },
  TN = (e, t) => {
    var n = Math.cos(nh(-e.coordinate));
    return n > bN
      ? t === `outer`
        ? `start`
        : `end`
      : n < -bN
        ? t === `outer`
          ? `end`
          : `start`
        : `middle`;
  },
  EN = (e) => {
    var t = Math.cos(nh(-e.coordinate)),
      n = Math.sin(nh(-e.coordinate));
    return Math.abs(t) <= xN ? (n > 0 ? `start` : `end`) : `middle`;
  },
  DN = (e) => {
    var { cx: t, cy: n, radius: r, axisLineType: i, axisLine: a, ticks: o } = e;
    if (!a) return null;
    var s = mN(mN({}, oc(e)), {}, { fill: `none` }, oc(a));
    if (i === `circle`)
      return B.createElement(
        OM,
        fN({ className: `recharts-polar-angle-axis-line` }, s, {
          cx: t,
          cy: n,
          r,
        }),
      );
    var c = o.map((e) => ih(t, n, r, e.coordinate));
    return B.createElement(
      EM,
      fN({ className: `recharts-polar-angle-axis-line` }, s, { points: c }),
    );
  },
  ON = (e) => {
    var { tick: t, tickProps: n, value: r } = e;
    return t
      ? B.isValidElement(t)
        ? B.cloneElement(t, n)
        : typeof t == `function`
          ? t(n)
          : B.createElement(
              Oj,
              fN({}, n, { className: `recharts-polar-angle-axis-tick-value` }),
              r,
            )
      : null;
  },
  kN = (e) => {
    var { tick: t, tickLine: n, tickFormatter: r, stroke: i, ticks: a } = e,
      o = oc(e),
      s = sc(t),
      c = mN(mN({}, o), {}, { fill: `none` }, oc(n)),
      l = a.map((a, l) => {
        var u = wN(a, e),
          d = TN(a, e.orientation),
          f = EN(a),
          p = mN(
            mN(
              mN({}, o),
              {},
              { textAnchor: d, verticalAnchor: f, stroke: `none`, fill: i },
              s,
            ),
            {},
            { index: l, payload: a, x: u.x2, y: u.y2 },
          );
        return B.createElement(
          yc,
          fN(
            {
              className: z(`recharts-polar-angle-axis-tick`, dh(t)),
              key: `tick-${a.coordinate}`,
            },
            Eu(e, a, l),
          ),
          n &&
            B.createElement(
              `line`,
              fN({ className: `recharts-polar-angle-axis-tick-line` }, c, u),
            ),
          B.createElement(ON, {
            tick: t,
            tickProps: p,
            value: r ? r(a.value, l) : a.value,
          }),
        );
      });
    return B.createElement(
      yc,
      { className: `recharts-polar-angle-axis-ticks` },
      l,
    );
  },
  AN = (e) => {
    var { angleAxisId: t } = e,
      n = H(BT),
      r = H((e) => zM(e, `angleAxis`, t)),
      i = dg(),
      a = H((e) => VM(e, `angleAxis`, t, i));
    if (n == null || !a || !a.length) return null;
    var o = mN(
      mN(mN({}, e), {}, { scale: r }, n),
      {},
      { radius: n.outerRadius },
    );
    return B.createElement(
      yc,
      { className: z(`recharts-polar-angle-axis`, SN, o.className) },
      B.createElement(DN, fN({}, o, { ticks: a })),
      B.createElement(kN, fN({}, o, { ticks: a })),
    );
  },
  jN = class extends B.PureComponent {
    render() {
      return this.props.radius <= 0
        ? null
        : B.createElement(
            CN,
            {
              id: this.props.angleAxisId,
              scale: this.props.scale,
              type: this.props.type,
              dataKey: this.props.dataKey,
              unit: void 0,
              name: this.props.name,
              allowDuplicatedCategory: !1,
              allowDataOverflow: !1,
              reversed: this.props.reversed,
              includeHidden: !1,
              allowDecimals: this.props.allowDecimals,
              tickCount: this.props.tickCount,
              ticks: this.props.ticks,
              tick: this.props.tick,
              domain: this.props.domain,
            },
            B.createElement(AN, this.props),
          );
    }
  };
(hN(jN, `displayName`, `PolarAngleAxis`),
  hN(jN, `axisType`, SN),
  hN(jN, `defaultProps`, CT));
function MN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function NN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? MN(Object(n), !0).forEach(function (t) {
          PN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function PN(e, t, n) {
  return (
    (t = FN(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function FN(e) {
  var t = IN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function IN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var LN = U([kM, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `pie`).find((e) => e.id === t),
  ),
  RN = [],
  zN = (e, t, n) => (n?.length === 0 ? RN : n),
  BN = U([zw, LN, zN], (e, t, n) => {
    var { chartData: r } = e;
    if (t != null) {
      var i = t?.data != null && t.data.length > 0 ? t.data : r;
      if (
        ((i && i.length) ||
          n == null ||
          (i = n.map((e) => NN(NN({}, t.presentationProps), e.props))),
        i != null)
      )
        return i;
    }
  }),
  VN = U([BN, LN, zN], (e, t, n) => {
    if (e != null && t != null)
      return e.map((e, r) => {
        var i,
          a = vh(e, t.nameKey, t.name),
          o =
            n != null && (i = n[r]) != null && (i = i.props) != null && i.fill
              ? n[r].props.fill
              : typeof e == `object` && e && `fill` in e
                ? e.fill
                : t.fill;
        return {
          value: zh(a, t.dataKey),
          color: o,
          payload: e,
          type: t.legendType,
        };
      });
  }),
  HN = U([BN, LN, zN, sg], (e, t, n, r) => {
    if (t != null && e != null)
      return uF({ offset: r, pieSettings: t, displayedData: e, cells: n });
  }),
  UN = n((e) => {
    var t = Symbol.for(`react.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.provider`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.server_context`),
      l = Symbol.for(`react.forward_ref`),
      u = Symbol.for(`react.suspense`),
      d = Symbol.for(`react.suspense_list`),
      f = Symbol.for(`react.memo`),
      p = Symbol.for(`react.lazy`);
    function m(e) {
      if (typeof e == `object` && e) {
        var m = e.$$typeof;
        switch (m) {
          case t:
            switch (((e = e.type), e)) {
              case r:
              case a:
              case i:
              case u:
              case d:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case s:
                  case l:
                  case p:
                  case f:
                  case o:
                    return e;
                  default:
                    return m;
                }
            }
          case n:
            return m;
        }
      }
    }
    e.isFragment = function (e) {
      return m(e) === r;
    };
  }),
  WN = n((e, t) => {
    t.exports = UN();
  })(),
  GN = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  KN = null,
  qN = null,
  JN = (e) => {
    if (e === KN && Array.isArray(qN)) return qN;
    var t = [];
    return (
      B.Children.forEach(e, (e) => {
        su(e) ||
          ((0, WN.isFragment)(e)
            ? (t = t.concat(JN(e.props.children)))
            : t.push(e));
      }),
      (qN = t),
      (KN = e),
      t
    );
  };
function YN(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => GN(e)) : [GN(t)]),
    JN(e).forEach((e) => {
      var t =
        (0, Xl.default)(e, `type.displayName`) ||
        (0, Xl.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var XN = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      if (typeof e != `object` || !e) return !1;
      if (Object.getPrototypeOf(e) === null) return !0;
      if (Object.prototype.toString.call(e) !== `[object Object]`) {
        let t = e[Symbol.toStringTag];
        return t == null ||
          !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
          ? !1
          : e.toString() === `[object ${t}]`;
      }
      let t = e;
      for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    e.isPlainObject = t;
  }),
  ZN = n((e, t) => {
    t.exports = XN().isPlainObject;
  });
function QN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? QN(Object(n), !0).forEach(function (t) {
          eP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : QN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function eP(e, t, n) {
  return (
    (t = tP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tP(e) {
  var t = nP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function nP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rP() {
  return (
    (rP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rP.apply(null, arguments)
  );
}
var iP = (e, t, n, r, i) => {
    var a = n - r,
      o = `M ${e},${t}`;
    return (
      (o += `L ${e + n},${t}`),
      (o += `L ${e + n - a / 2},${t + i}`),
      (o += `L ${e + n - a / 2 - r},${t + i}`),
      (o += `L ${e},${t} Z`),
      o
    );
  },
  aP = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  oP = (e) => {
    var t = q_(e, aP),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: c,
        animationDuration: l,
        animationBegin: u,
        isUpdateAnimationActive: d,
      } = t,
      f = (0, B.useRef)(null),
      [p, m] = (0, B.useState)(-1),
      h = (0, B.useRef)(i),
      g = (0, B.useRef)(a),
      _ = (0, B.useRef)(o),
      v = (0, B.useRef)(n),
      y = (0, B.useRef)(r),
      b = Mv(e, `trapezoid-`);
    if (
      ((0, B.useEffect)(() => {
        if (f.current && f.current.getTotalLength)
          try {
            var e = f.current.getTotalLength();
            e && m(e);
          } catch {}
      }, []),
      n !== +n ||
        r !== +r ||
        i !== +i ||
        a !== +a ||
        o !== +o ||
        (i === 0 && a === 0) ||
        o === 0)
    )
      return null;
    var x = z(`recharts-trapezoid`, s);
    if (!d)
      return B.createElement(
        `g`,
        null,
        B.createElement(
          `path`,
          rP({}, cc(t), { className: x, d: iP(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      ee = `${p}px 0px`,
      te = nv([`strokeDasharray`], l, c);
    return B.createElement(
      jv,
      {
        animationId: b,
        key: b,
        canBegin: p > 0,
        duration: l,
        easing: c,
        isActive: d,
        begin: u,
      },
      (e) => {
        var s = au(S, i, e),
          c = au(C, a, e),
          l = au(w, o, e),
          u = au(T, n, e),
          d = au(E, r, e);
        f.current &&
          ((h.current = s),
          (g.current = c),
          (_.current = l),
          (v.current = u),
          (y.current = d));
        var p =
          e > 0
            ? { transition: te, strokeDasharray: ee }
            : { strokeDasharray: D };
        return B.createElement(
          `path`,
          rP({}, cc(t), {
            className: x,
            d: iP(u, d, s, c, l),
            ref: f,
            style: $N($N({}, p), t.style),
          }),
        );
      },
    );
  },
  sP = e(ZN()),
  cP = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function lP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = uP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function uP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function dP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dP(Object(n), !0).forEach(function (t) {
          pP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pP(e, t, n) {
  return (
    (t = mP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mP(e) {
  var t = hP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gP(e, t) {
  return fP(fP({}, t), e);
}
function _P(e, t) {
  return e === `symbols`;
}
function vP(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return B.createElement(Gv, n);
    case `trapezoid`:
      return B.createElement(oP, n);
    case `sector`:
      return B.createElement($v, n);
    case `symbols`:
      if (_P(t, n)) return B.createElement(Cu, n);
      break;
    default:
      return null;
  }
}
function yP(e) {
  return (0, B.isValidElement)(e) ? e.props : e;
}
function bP(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = gP,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = lP(e, cP),
    s;
  if ((0, B.isValidElement)(t))
    s = (0, B.cloneElement)(t, fP(fP({}, o), yP(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, sP.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = B.createElement(vP, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = B.createElement(vP, { shapeType: n, elementProps: l });
  }
  return a ? B.createElement(yc, { className: i }, s) : s;
}
var xP = (e, t) => {
    var n = hd();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          yO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  SP = (e) => {
    var t = hd();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(bO()));
    };
  },
  CP = (e, t) => {
    var n = hd();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          SO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function wP(e) {
  var { fn: t, args: n } = e,
    r = hd(),
    i = dg();
  return (
    (0, B.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(gO(e)),
          () => {
            r(_O(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var TP = () => {};
function EP(e) {
  var { legendPayload: t } = e,
    n = hd(),
    r = dg();
  return (
    (0, B.useLayoutEffect)(
      () =>
        r
          ? TP
          : (n(kg(t)),
            () => {
              n(Ag(t));
            }),
      [n, r, t],
    ),
    null
  );
}
function DP(e) {
  var { legendPayload: t } = e,
    n = hd(),
    r = H(W);
  return (
    (0, B.useLayoutEffect)(
      () =>
        r !== `centric` && r !== `radial`
          ? TP
          : (n(kg(t)),
            () => {
              n(Ag(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var OP =
  B.useId ??
  (() => {
    var [e] = B.useState(() => nu(`uid-`));
    return e;
  });
function kP(e, t) {
  var n = OP();
  return t || (e ? `${e}-${n}` : n);
}
var AP = (0, B.createContext)(void 0),
  jP = (e) => {
    var { id: t, type: n, children: r } = e,
      i = kP(`recharts-${n}`, t);
    return B.createElement(AP.Provider, { value: i }, r(i));
  },
  MP = tm({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(rp(t.payload));
        },
        prepare: jp(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = Qf(e).cartesianItems.indexOf(rp(n));
          i > -1 && (e.cartesianItems[i] = rp(r));
        },
        prepare: jp(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Qf(e).cartesianItems.indexOf(rp(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: jp(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(rp(t.payload));
        },
        prepare: jp(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Qf(e).polarItems.indexOf(rp(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: jp(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: NP,
    replaceCartesianGraphicalItem: PP,
    removeCartesianGraphicalItem: FP,
    addPolarGraphicalItem: IP,
    removePolarGraphicalItem: LP,
  } = MP.actions,
  RP = MP.reducer;
function zP(e) {
  var t = hd(),
    n = (0, B.useRef)(null);
  return (
    (0, B.useLayoutEffect)(() => {
      (n.current === null
        ? t(NP(e))
        : n.current !== e && t(PP({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, B.useLayoutEffect)(
      () => () => {
        n.current &&= (t(FP(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function BP(e) {
  var t = hd();
  return (
    (0, B.useLayoutEffect)(
      () => (
        t(IP(e)),
        () => {
          t(LP(e));
        }
      ),
      [t, e],
    ),
    null
  );
}
var VP = [`onMouseEnter`, `onClick`, `onMouseLeave`],
  HP = [`id`],
  UP = [`id`];
function WP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = GP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function GP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function KP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function qP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? KP(Object(n), !0).forEach(function (t) {
          JP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function JP(e, t, n) {
  return (
    (t = YP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function YP(e) {
  var t = XP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function XP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ZP() {
  return (
    (ZP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZP.apply(null, arguments)
  );
}
function QP(e) {
  var t = (0, B.useMemo)(() => YN(e.children, RA), [e.children]),
    n = H((n) => VN(n, e.id, t));
  return n == null ? null : B.createElement(DP, { legendPayload: n });
}
function $P(e) {
  var {
    dataKey: t,
    nameKey: n,
    sectors: r,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: s,
    hide: c,
    tooltipType: l,
  } = e;
  return {
    dataDefinedOnItem: r.map((e) => e.tooltipPayload),
    positions: r.map((e) => e.tooltipPosition),
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: n,
      name: zh(s, t),
      hide: c,
      type: l,
      color: o,
      unit: ``,
    },
  };
}
var eF = (e, t) => (e > t ? `start` : e < t ? `end` : `middle`),
  tF = (e, t, n) => ru(typeof t == `function` ? t(e) : t, n, n * 0.8),
  nF = (e, t, n) => {
    var { top: r, left: i, width: a, height: o } = t,
      s = ah(a, o);
    return {
      cx: i + ru(e.cx, a, a / 2),
      cy: r + ru(e.cy, o, o / 2),
      innerRadius: ru(e.innerRadius, s, 0),
      outerRadius: tF(n, e.outerRadius, s),
      maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2,
    };
  },
  rF = (e, t) => Zl(t - e) * Math.min(Math.abs(t - e), 360);
function iF(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var aF = (e, t) => {
    if (B.isValidElement(e)) return B.cloneElement(e, t);
    if (typeof e == `function`) return e(t);
    var n = z(
      `recharts-pie-label-line`,
      typeof e == `boolean` ? `` : e.className,
    );
    return B.createElement(k_, ZP({}, t, { type: `linear`, className: n }));
  },
  oF = (e, t, n) => {
    if (B.isValidElement(e)) return B.cloneElement(e, t);
    var r = n;
    if (typeof e == `function` && ((r = e(t)), B.isValidElement(r))) return r;
    var i = z(`recharts-pie-label-text`, iF(e));
    return B.createElement(
      Oj,
      ZP({}, t, { alignmentBaseline: `middle`, className: i }),
      r,
    );
  };
function sF(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i, labelLine: a, dataKey: o } = n;
  if (!r || !i || !t) return null;
  var s = oc(n),
    c = sc(i),
    l = sc(a),
    u =
      (typeof i == `object` &&
        `offsetRadius` in i &&
        typeof i.offsetRadius == `number` &&
        i.offsetRadius) ||
      20,
    d = t.map((e, t) => {
      var n = (e.startAngle + e.endAngle) / 2,
        r = ih(e.cx, e.cy, e.outerRadius + u, n),
        d = qP(
          qP(qP(qP({}, s), e), {}, { stroke: `none` }, c),
          {},
          { index: t, textAnchor: eF(r.x, e.cx) },
          r,
        ),
        f = qP(
          qP(qP(qP({}, s), e), {}, { fill: `none`, stroke: e.fill }, l),
          {},
          {
            index: t,
            points: [ih(e.cx, e.cy, e.outerRadius, n), r],
            key: `line`,
          },
        );
      return B.createElement(
        yc,
        { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}` },
        a && aF(a, f),
        oF(i, d, vh(e, o)),
      );
    });
  return B.createElement(yc, { className: `recharts-pie-labels` }, d);
}
function cF(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i } = n;
  return typeof i == `object` && i && `position` in i
    ? B.createElement(_M, { label: i })
    : B.createElement(sF, { sectors: t, props: n, showLabels: r });
}
function lF(e) {
  var { sectors: t, activeShape: n, inactiveShape: r, allOtherPieProps: i } = e,
    a = H(gk),
    { onMouseEnter: o, onClick: s, onMouseLeave: c } = i,
    l = WP(i, VP),
    u = xP(o, i.dataKey),
    d = SP(c),
    f = CP(s, i.dataKey);
  return t == null || t.length === 0
    ? null
    : B.createElement(
        B.Fragment,
        null,
        t.map((e, o) => {
          if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1)
            return null;
          var s = n && String(o) === a,
            c = s ? n : a ? r : null,
            p = qP(
              qP({}, e),
              {},
              { stroke: e.stroke, tabIndex: -1, [Yh]: o, [Xh]: i.dataKey },
            );
          return B.createElement(
            yc,
            ZP(
              {
                key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${o}`,
                tabIndex: -1,
                className: `recharts-pie-sector`,
              },
              Eu(l, e, o),
              {
                onMouseEnter: u(e, o),
                onMouseLeave: d(e, o),
                onClick: f(e, o),
              },
            ),
            B.createElement(
              bP,
              ZP({ option: c, isActive: s, shapeType: `sector` }, p),
            ),
          );
        }),
      );
}
function uF(e) {
  var { pieSettings: t, displayedData: n, cells: r, offset: i } = e,
    {
      cornerRadius: a,
      startAngle: o,
      endAngle: s,
      dataKey: c,
      nameKey: l,
      tooltipType: u,
    } = t,
    d = Math.abs(t.minAngle),
    f = rF(o, s),
    p = Math.abs(f),
    m = n.length <= 1 ? 0 : (t.paddingAngle ?? 0),
    h = n.filter((e) => vh(e, c, 0) !== 0).length,
    g = (p >= 360 ? h : h - 1) * m,
    _ = p - h * d - g,
    v = n.reduce((e, t) => {
      var n = vh(t, c, 0);
      return e + (V(n) ? n : 0);
    }, 0),
    y;
  if (v > 0) {
    var b;
    y = n.map((e, n) => {
      var s = vh(e, c, 0),
        p = vh(e, l, n),
        h = nF(t, i, e),
        g = (V(s) ? s : 0) / v,
        y,
        x = qP(qP({}, e), r && r[n] && r[n].props);
      y = n ? b.endAngle + Zl(f) * m * (s === 0 ? 0 : 1) : o;
      var S = y + Zl(f) * ((s === 0 ? 0 : d) + g * _),
        C = (y + S) / 2,
        w = (h.innerRadius + h.outerRadius) / 2,
        T = [{ name: p, value: s, payload: x, dataKey: c, type: u }],
        E = ih(h.cx, h.cy, w, C);
      return (
        (b = qP(
          qP(
            qP(
              qP({}, t.presentationProps),
              {},
              {
                percent: g,
                cornerRadius: a,
                name: p,
                tooltipPayload: T,
                midAngle: C,
                middleRadius: w,
                tooltipPosition: E,
              },
              x,
            ),
            h,
          ),
          {},
          {
            value: s,
            startAngle: y,
            endAngle: S,
            payload: x,
            paddingAngle: Zl(f) * m,
          },
        )),
        b
      );
    });
  }
  return y;
}
function dF(e) {
  var { showLabels: t, sectors: n, children: r } = e,
    i = (0, B.useMemo)(
      () =>
        !t || !n
          ? []
          : n.map((e) => ({
              value: e.value,
              payload: e.payload,
              clockWise: !1,
              parentViewBox: void 0,
              viewBox: {
                cx: e.cx,
                cy: e.cy,
                innerRadius: e.innerRadius,
                outerRadius: e.outerRadius,
                startAngle: e.startAngle,
                endAngle: e.endAngle,
                clockWise: !1,
              },
              fill: e.fill,
            })),
      [n, t],
    );
  return B.createElement(pM, { value: t ? i : void 0 }, r);
}
function fF(e) {
  var { props: t, previousSectorsRef: n } = e,
    {
      sectors: r,
      isAnimationActive: i,
      animationBegin: a,
      animationDuration: o,
      animationEasing: s,
      activeShape: c,
      inactiveShape: l,
      onAnimationStart: u,
      onAnimationEnd: d,
    } = t,
    f = Mv(t, `recharts-pie-`),
    p = n.current,
    [m, h] = (0, B.useState)(!1),
    g = (0, B.useCallback)(() => {
      (typeof d == `function` && d(), h(!1));
    }, [d]),
    _ = (0, B.useCallback)(() => {
      (typeof u == `function` && u(), h(!0));
    }, [u]);
  return B.createElement(
    dF,
    { showLabels: !m, sectors: r },
    B.createElement(
      jv,
      {
        animationId: f,
        begin: a,
        duration: o,
        isActive: i,
        easing: s,
        onAnimationStart: _,
        onAnimationEnd: g,
        key: f,
      },
      (e) => {
        var i = [],
          a = (r && r[0])?.startAngle;
        return (
          r?.forEach((t, n) => {
            var r = p && p[n],
              o = n > 0 ? (0, Xl.default)(t, `paddingAngle`, 0) : 0;
            if (r) {
              var s = au(
                  r.endAngle - r.startAngle,
                  t.endAngle - t.startAngle,
                  e,
                ),
                c = qP(
                  qP({}, t),
                  {},
                  { startAngle: a + o, endAngle: a + s + o },
                );
              (i.push(c), (a = c.endAngle));
            } else {
              var { endAngle: l, startAngle: u } = t,
                d = au(0, l - u, e),
                f = qP(
                  qP({}, t),
                  {},
                  { startAngle: a + o, endAngle: a + d + o },
                );
              (i.push(f), (a = f.endAngle));
            }
          }),
          (n.current = i),
          B.createElement(
            yc,
            null,
            B.createElement(lF, {
              sectors: i,
              activeShape: c,
              inactiveShape: l,
              allOtherPieProps: t,
            }),
          )
        );
      },
    ),
    B.createElement(cF, { showLabels: !m, sectors: r, props: t }),
    t.children,
  );
}
var pF = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: `ease`,
  cx: `50%`,
  cy: `50%`,
  dataKey: `value`,
  endAngle: 360,
  fill: `#808080`,
  hide: !1,
  innerRadius: 0,
  isAnimationActive: !h_.isSsr,
  labelLine: !0,
  legendType: `rect`,
  minAngle: 0,
  nameKey: `name`,
  outerRadius: `80%`,
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: `#fff`,
};
function mF(e) {
  var { id: t } = e,
    n = WP(e, HP),
    { hide: r, className: i, rootTabIndex: a } = e,
    o = (0, B.useMemo)(() => YN(e.children, RA), [e.children]),
    s = H((e) => HN(e, t, o)),
    c = (0, B.useRef)(null),
    l = z(`recharts-pie`, i);
  return r || s == null
    ? ((c.current = null), B.createElement(yc, { tabIndex: a, className: l }))
    : B.createElement(
        B.Fragment,
        null,
        B.createElement(wP, {
          fn: $P,
          args: qP(qP({}, e), {}, { sectors: s }),
        }),
        B.createElement(
          yc,
          { tabIndex: a, className: l },
          B.createElement(fF, {
            props: qP(qP({}, n), {}, { sectors: s }),
            previousSectorsRef: c,
          }),
        ),
      );
}
function hF(e) {
  var t = q_(e, pF),
    { id: n } = t,
    r = WP(t, UP),
    i = oc(r);
  return B.createElement(jP, { id: n, type: `pie` }, (e) =>
    B.createElement(
      B.Fragment,
      null,
      B.createElement(BP, {
        type: `pie`,
        id: e,
        data: r.data,
        dataKey: r.dataKey,
        hide: r.hide,
        angleAxisId: 0,
        radiusAxisId: 0,
        name: r.name,
        nameKey: r.nameKey,
        tooltipType: r.tooltipType,
        legendType: r.legendType,
        fill: r.fill,
        cx: r.cx,
        cy: r.cy,
        startAngle: r.startAngle,
        endAngle: r.endAngle,
        paddingAngle: r.paddingAngle,
        minAngle: r.minAngle,
        innerRadius: r.innerRadius,
        outerRadius: r.outerRadius,
        cornerRadius: r.cornerRadius,
        presentationProps: i,
        maxRadius: t.maxRadius,
      }),
      B.createElement(QP, ZP({}, r, { id: e })),
      B.createElement(mF, ZP({}, r, { id: e })),
    ),
  );
}
hF.displayName = `Pie`;
function gF(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gF(Object(n), !0).forEach(function (t) {
          vF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vF(e, t, n) {
  return (
    (t = yF(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yF(e) {
  var t = bF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var xF = tm({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = rp(t.payload);
        },
        prepare: jp(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: jp(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = rp(t.payload);
        },
        prepare: jp(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: jp(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = rp(t.payload);
        },
        prepare: jp(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: jp(),
      },
      updateYAxisWidth(e, t) {
        var { id: n, width: r } = t.payload,
          i = e.yAxis[n];
        if (i) {
          var a = i.widthHistory || [];
          if (
            a.length === 3 &&
            a[0] === a[2] &&
            r === a[1] &&
            r !== i.width &&
            Math.abs(r - a[0]) <= 1
          )
            return;
          var o = [...a, r].slice(-3);
          e.yAxis[n] = _F(
            _F({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: SF,
    removeXAxis: CF,
    addYAxis: wF,
    removeYAxis: TF,
    addZAxis: EF,
    removeZAxis: DF,
    updateYAxisWidth: OF,
  } = xF.actions,
  kF = xF.reducer,
  AF = U(
    [
      U([sg], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      Uh,
      Wh,
    ],
    (e, t, n) => {
      if (e && t != null && n != null)
        return {
          x: e.left,
          y: e.top,
          width: Math.max(0, t - e.left - e.right),
          height: Math.max(0, n - e.top - e.bottom),
        };
    },
  ),
  jF = () => H(AF),
  MF = () => H(Sk);
function NF(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function PF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? NF(Object(n), !0).forEach(function (t) {
          FF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : NF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function FF(e, t, n) {
  return (
    (t = IF(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function IF(e) {
  var t = LF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function LF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var RF = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = PF(
      PF(
        {
          index: n,
          dataKey: a,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: r ?? `none`,
          strokeWidth: 2,
          stroke: `#fff`,
          payload: t.payload,
          value: t.value,
        },
        sc(i),
      ),
      wu(i),
    ),
    s = (0, B.isValidElement)(i)
      ? (0, B.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : B.createElement(OM, o);
  return B.createElement(yc, { className: `recharts-active-dot` }, s);
};
function zF(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = H(gk),
    o = MF();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return su(s)
    ? null
    : RF({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function BF(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function VF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? BF(Object(n), !0).forEach(function (t) {
          HF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : BF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function HF(e, t, n) {
  return (
    (t = UF(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function UF(e) {
  var t = WF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function WF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var GF = (e, t) => zM(e, `radiusAxis`, t),
  KF = U([GF], (e) => {
    if (e != null) return { scale: e };
  }),
  qF = U([jT, GF], (e, t) => {
    if (e != null && t != null) return VF(VF({}, e), {}, { scale: t });
  }),
  JF = (e, t, n, r) => VM(e, `radiusAxis`, t, r),
  YF = (e, t, n) => AT(e, n),
  XF = (e, t, n) => zM(e, `angleAxis`, n),
  ZF = U([YF, XF], (e, t) => {
    if (e != null && t != null) return VF(VF({}, e), {}, { scale: t });
  }),
  QF = (e, t, n, r) => VM(e, `angleAxis`, n, r),
  $F = U([YF, XF, BT], (e, t, n) => {
    if (n != null && t != null)
      return { scale: t, type: e.type, dataKey: e.dataKey, cx: n.cx, cy: n.cy };
  }),
  eI = (e, t, n, r, i) => i,
  tI = U([W, qF, JF, ZF, QF], (e, t, n, r, i) =>
    xh(e, `radiusAxis`) ? Lh(t, n, !1) : Lh(r, i, !1),
  ),
  nI = U(
    [
      KF,
      $F,
      zw,
      U([kM, eI], (e, t) => {
        if (e != null)
          return e.find((e) => e.type === `radar` && t === e.id)?.dataKey;
      }),
      tI,
    ],
    (e, t, n, r, i) => {
      var { chartData: a, dataStartIndex: o, dataEndIndex: s } = n;
      if (e != null && t != null && a != null && i != null && r != null)
        return gI({
          radiusAxis: e,
          angleAxis: t,
          displayedData: a.slice(o, s + 1),
          dataKey: r,
          bandSize: i,
        });
    },
  ),
  rI = [`id`];
function iI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = aI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function aI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function oI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function sI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? oI(Object(n), !0).forEach(function (t) {
          cI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : oI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cI(e, t, n) {
  return (
    (t = lI(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function lI(e) {
  var t = uI(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function uI(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function dI() {
  return (
    (dI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dI.apply(null, arguments)
  );
}
function fI(e, t) {
  return e && e !== `none` ? e : t;
}
var pI = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: fI(r, i),
      value: zh(n, t),
      payload: e,
    },
  ];
};
function mI(e) {
  var {
    dataKey: t,
    stroke: n,
    strokeWidth: r,
    fill: i,
    name: a,
    hide: o,
    tooltipType: s,
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: r,
      fill: i,
      nameKey: void 0,
      dataKey: t,
      name: zh(a, t),
      hide: o,
      type: s,
      color: fI(n, i),
      unit: ``,
    },
  };
}
function hI(e, t) {
  return B.isValidElement(e)
    ? B.cloneElement(e, t)
    : typeof e == `function`
      ? e(t)
      : B.createElement(
          OM,
          dI({}, t, {
            className: z(
              `recharts-radar-dot`,
              typeof e == `boolean` ? `` : e.className,
            ),
          }),
        );
}
function gI(e) {
  var {
      radiusAxis: t,
      angleAxis: n,
      displayedData: r,
      dataKey: i,
      bandSize: a,
    } = e,
    { cx: o, cy: s } = n,
    c = !1,
    l = [],
    u = n.type === `number` ? 0 : (a ?? 0);
  r.forEach((e, r) => {
    var a = vh(e, n.dataKey, r),
      d = vh(e, i),
      f = n.scale(a) + u,
      p = Array.isArray(d) ? (0, rM.default)(d) : d,
      m = su(p) ? void 0 : t.scale(p);
    (Array.isArray(d) && d.length >= 2 && (c = !0),
      l.push(
        sI(
          sI({}, ih(o, s, m, f)),
          {},
          { name: a, value: d, cx: o, cy: s, radius: m, angle: f, payload: e },
        ),
      ));
  });
  var d = [];
  return (
    c &&
      l.forEach((e) => {
        if (Array.isArray(e.value)) {
          var n = e.value[0],
            r = su(n) ? void 0 : t.scale(n);
          d.push(sI(sI({}, e), {}, { radius: r }, ih(o, s, r, e.angle)));
        } else d.push(e);
      }),
    { points: l, isRange: c, baseLinePoints: d }
  );
}
function _I(e) {
  var { points: t, props: n } = e,
    { dot: r, dataKey: i } = n;
  if (!r) return null;
  var { id: a } = n,
    o = oc(iI(n, rI)),
    s = lc(r),
    c = t.map((e, t) =>
      hI(
        r,
        sI(
          sI(sI({ key: `dot-${t}`, r: 3 }, o), s),
          {},
          { dataKey: i, cx: e.x, cy: e.y, index: t, payload: e },
        ),
      ),
    );
  return B.createElement(yc, { className: `recharts-radar-dots` }, c);
}
function vI(e) {
  var { showLabels: t, points: n, children: r } = e,
    i = n.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return sI(
        sI({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: void 0,
          viewBox: t,
          fill: void 0,
        },
      );
    });
  return B.createElement(dM, { value: t ? i : null }, r);
}
function yI(e) {
  var { points: t, baseLinePoints: n, props: r } = e;
  if (t == null) return null;
  var { shape: i, isRange: a, connectNulls: o } = r,
    s = B.isValidElement(i)
      ? B.cloneElement(i, sI(sI({}, r), {}, { points: t }))
      : typeof i == `function`
        ? i(sI(sI({}, r), {}, { points: t }))
        : B.createElement(
            EM,
            dI({}, cc(r), {
              onMouseEnter: (e) => {
                var { onMouseEnter: t } = r;
                t && t(r, e);
              },
              onMouseLeave: (e) => {
                var { onMouseLeave: t } = r;
                t && t(r, e);
              },
              points: t,
              baseLinePoints: a ? n : void 0,
              connectNulls: o,
            }),
          );
  return B.createElement(
    yc,
    { className: `recharts-radar-polygon` },
    s,
    B.createElement(_I, { props: r, points: t }),
  );
}
var bI = (e, t, n) => (r, i) => {
  var a = e && e[Math.floor(i * t)];
  return a
    ? sI(sI({}, r), {}, { x: au(a.x, r.x, n), y: au(a.y, r.y, n) })
    : sI(sI({}, r), {}, { x: au(r.cx, r.x, n), y: au(r.cy, r.y, n) });
};
function xI(e) {
  var { props: t, previousPointsRef: n, previousBaseLinePointsRef: r } = e,
    {
      points: i,
      baseLinePoints: a,
      isAnimationActive: o,
      animationBegin: s,
      animationDuration: c,
      animationEasing: l,
      onAnimationEnd: u,
      onAnimationStart: d,
    } = t,
    f = n.current,
    p = r.current,
    m = f && f.length / i.length,
    h = p && p.length / a.length,
    g = Mv(t, `recharts-radar-`),
    [_, v] = (0, B.useState)(!1),
    y = !_,
    b = (0, B.useCallback)(() => {
      (typeof u == `function` && u(), v(!1));
    }, [u]),
    x = (0, B.useCallback)(() => {
      (typeof d == `function` && d(), v(!0));
    }, [d]);
  return B.createElement(
    vI,
    { showLabels: y, points: i },
    B.createElement(
      jv,
      {
        animationId: g,
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        key: `radar-${g}`,
        onAnimationEnd: b,
        onAnimationStart: x,
      },
      (e) => {
        var o = e === 1 ? i : i.map(bI(f, m, e)),
          s = e === 1 ? a : a?.map(bI(p, h, e));
        return (
          e > 0 && ((n.current = o), (r.current = s)),
          B.createElement(yI, { points: o, baseLinePoints: s, props: t })
        );
      },
    ),
    B.createElement(_M, { label: t.label }),
    t.children,
  );
}
function SI(e) {
  var t = (0, B.useRef)(void 0),
    n = (0, B.useRef)(void 0);
  return B.createElement(xI, {
    props: e,
    previousPointsRef: t,
    previousBaseLinePointsRef: n,
  });
}
var CI = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: !1,
    activeDot: !0,
    dot: !1,
    legendType: `rect`,
    isAnimationActive: !h_.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  wI = class extends B.PureComponent {
    render() {
      var { hide: e, className: t, points: n } = this.props;
      if (e || n == null) return null;
      var r = z(`recharts-radar`, t);
      return B.createElement(
        B.Fragment,
        null,
        B.createElement(yc, { className: r }, B.createElement(SI, this.props)),
        B.createElement(zF, {
          points: n,
          mainColor: fI(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
      );
    }
  };
function TI(e) {
  var t = dg(),
    n = H((n) => nI(n, e.radiusAxisId, e.angleAxisId, t, e.id));
  return B.createElement(
    wI,
    dI({}, e, {
      points: n?.points,
      baseLinePoints: n?.baseLinePoints,
      isRange: n?.isRange,
    }),
  );
}
var EI = class extends B.PureComponent {
  render() {
    return B.createElement(jP, { id: this.props.id, type: `radar` }, (e) =>
      B.createElement(
        B.Fragment,
        null,
        B.createElement(BP, {
          type: `radar`,
          id: e,
          data: void 0,
          dataKey: this.props.dataKey,
          hide: this.props.hide,
          angleAxisId: this.props.angleAxisId,
          radiusAxisId: this.props.radiusAxisId,
        }),
        B.createElement(DP, { legendPayload: pI(this.props) }),
        B.createElement(wP, { fn: mI, args: this.props }),
        B.createElement(TI, dI({}, this.props, { id: e })),
      ),
    );
  }
};
(cI(EI, `displayName`, `Radar`), cI(EI, `defaultProps`, CI));
var DI = [`x`, `y`];
function OI() {
  return (
    (OI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    OI.apply(null, arguments)
  );
}
function kI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function AI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kI(Object(n), !0).forEach(function (t) {
          jI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jI(e, t, n) {
  return (
    (t = MI(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function MI(e) {
  var t = NI(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function NI(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function PI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = FI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function FI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function II(e, t) {
  var { x: n, y: r } = e,
    i = PI(e, DI),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return AI(
    AI(AI(AI(AI({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function LI(e) {
  return B.createElement(
    bP,
    OI(
      {
        shapeType: `rectangle`,
        propTransformer: II,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var RI = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (V(e)) return e;
      var i = V(n) || su(n);
      return i ? e(n, r) : (!i && l(!1), t);
    };
  },
  zI = tm({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        (e[n] || (e[n] = []), e[n].push(r));
      },
      replaceErrorBar: (e, t) => {
        var { itemId: n, prev: r, next: i } = t.payload;
        e[n] &&
          (e[n] = e[n].map((e) =>
            e.dataKey === r.dataKey && e.direction === r.direction ? i : e,
          ));
      },
      removeErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        e[n] &&
          (e[n] = e[n].filter(
            (e) => e.dataKey !== r.dataKey || e.direction !== r.direction,
          ));
      },
    },
  }),
  { addErrorBar: BI, replaceErrorBar: VI, removeErrorBar: HI } = zI.actions,
  UI = zI.reducer,
  WI = [`children`];
function GI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = KI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function KI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var qI = (0, B.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function JI(e) {
  var { children: t } = e,
    n = GI(e, WI);
  return B.createElement(qI.Provider, { value: n }, t);
}
function YI(e, t) {
  var n = H((t) => sE(t, e)),
    r = H((e) => uE(e, t)),
    i = n?.allowDataOverflow ?? aE.allowDataOverflow,
    a = r?.allowDataOverflow ?? cE.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function XI(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = jF(),
    { needClipX: a, needClipY: o, needClip: s } = YI(t, n);
  if (!s) return null;
  var { x: c, y: l, width: u, height: d } = i;
  return B.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    B.createElement(`rect`, {
      x: a ? c : c - u / 2,
      y: o ? l : l - d / 2,
      width: a ? u : u * 2,
      height: o ? d : d * 2,
    }),
  );
}
var ZI = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  QI = [`value`, `background`, `tooltipPosition`],
  $I = [`id`],
  eL = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function tL() {
  return (
    (tL = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tL.apply(null, arguments)
  );
}
function nL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function rL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nL(Object(n), !0).forEach(function (t) {
          iL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function iL(e, t, n) {
  return (
    (t = aL(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function aL(e) {
  var t = oL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function oL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function sL(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = cL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function cL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var lL = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: zh(n, t), payload: e },
  ];
};
function uL(e) {
  var {
    dataKey: t,
    stroke: n,
    strokeWidth: r,
    fill: i,
    name: a,
    hide: o,
    unit: s,
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: r,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: zh(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function dL(e) {
  var t = H(gk),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = sL(a, ZI),
    u = xP(o, r),
    d = SP(s),
    f = CP(c, r);
  if (!i || n == null) return null;
  var p = sc(i);
  return B.createElement(
    B.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = sL(e, QI);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = rL(
          rL(
            rL(
              rL(
                rL({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            Eu(l, e, n),
          ),
          {},
          {
            onMouseEnter: m,
            onMouseLeave: h,
            onClick: g,
            dataKey: r,
            index: n,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return B.createElement(LI, tL({ key: `background-bar-${n}` }, _));
    }),
  );
}
function fL(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return rL(
        rL({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: e.parentViewBox,
          viewBox: t,
          fill: e.fill,
        },
      );
    });
  return B.createElement(dM, { value: t ? i : void 0 }, n);
}
function pL(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = H(gk),
    c = H(vk),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return B.createElement(
    LI,
    tL({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function mL(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return B.createElement(
    LI,
    tL({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function hL(e) {
  var { data: t, props: n } = e,
    r = oc(n),
    { id: i } = r,
    a = sL(r, $I),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = sL(n, eL),
    p = xP(l, s),
    m = SP(d),
    h = CP(u, s);
  return t
    ? B.createElement(
        B.Fragment,
        null,
        t.map((e, t) =>
          B.createElement(
            yc,
            tL(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              Eu(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? B.createElement(pL, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : B.createElement(mL, {
                  shape: o,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                }),
          ),
        ),
      )
    : null;
}
function gL(e) {
  var { props: t, previousRectanglesRef: n } = e,
    {
      data: r,
      layout: i,
      isAnimationActive: a,
      animationBegin: o,
      animationDuration: s,
      animationEasing: c,
      onAnimationEnd: l,
      onAnimationStart: u,
    } = t,
    d = n.current,
    f = Mv(t, `recharts-bar-`),
    [p, m] = (0, B.useState)(!1),
    h = !p,
    g = (0, B.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, B.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return B.createElement(
    fL,
    { showLabels: h, rects: r },
    B.createElement(
      jv,
      {
        animationId: f,
        begin: o,
        duration: s,
        isActive: a,
        easing: c,
        onAnimationEnd: g,
        onAnimationStart: _,
        key: f,
      },
      (e) => {
        var a =
          e === 1
            ? r
            : r?.map((t, n) => {
                var r = d && d[n];
                if (r)
                  return rL(
                    rL({}, t),
                    {},
                    {
                      x: au(r.x, t.x, e),
                      y: au(r.y, t.y, e),
                      width: au(r.width, t.width, e),
                      height: au(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = au(0, t.height, e);
                  return rL(
                    rL({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = au(0, t.width, e);
                return rL(rL({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : B.createElement(
                yc,
                null,
                B.createElement(hL, { props: t, data: a }),
              )
        );
      },
    ),
    B.createElement(_M, { label: t.label }),
    t.children,
  );
}
function _L(e) {
  var t = (0, B.useRef)(null);
  return B.createElement(gL, { previousRectanglesRef: t, props: e });
}
var vL = 0,
  yL = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: vh(e, t) };
  },
  bL = class extends B.PureComponent {
    render() {
      var {
        hide: e,
        data: t,
        dataKey: n,
        className: r,
        xAxisId: i,
        yAxisId: a,
        needClip: o,
        background: s,
        id: c,
      } = this.props;
      if (e || t == null) return null;
      var l = z(`recharts-bar`, r),
        u = c;
      return B.createElement(
        yc,
        { className: l, id: c },
        o &&
          B.createElement(
            `defs`,
            null,
            B.createElement(XI, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        B.createElement(
          yc,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          B.createElement(dL, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          B.createElement(_L, this.props),
        ),
      );
    }
  },
  xL = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !h_.isSsr,
    legendType: `rect`,
    minPointSize: vL,
    xAxisId: 0,
    yAxisId: 0,
  };
function SL(e) {
  var {
      xAxisId: t,
      yAxisId: n,
      hide: r,
      legendType: i,
      minPointSize: a,
      activeBar: o,
      animationBegin: s,
      animationDuration: c,
      animationEasing: l,
      isAnimationActive: u,
    } = e,
    { needClip: d } = YI(t, n),
    f = wg(),
    p = dg(),
    m = YN(e.children, RA),
    h = H((r) => WL(r, t, n, p, e.id, m));
  if (f !== `vertical` && f !== `horizontal`) return null;
  var g,
    _ = h?.[0];
  return (
    (g =
      _ == null || _.height == null || _.width == null
        ? 0
        : f === `vertical`
          ? _.height / 2
          : _.width / 2),
    B.createElement(
      JI,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: yL,
        errorBarOffset: g,
      },
      B.createElement(
        bL,
        tL({}, e, {
          layout: f,
          needClip: d,
          data: h,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: s,
          animationDuration: c,
          animationEasing: l,
          isAnimationActive: u,
        }),
      ),
    )
  );
}
function CL(e) {
  var {
      layout: t,
      barSettings: { dataKey: n, minPointSize: r },
      pos: i,
      bandSize: a,
      xAxis: o,
      yAxis: s,
      xAxisTicks: c,
      yAxisTicks: l,
      stackedData: u,
      displayedData: d,
      offset: f,
      cells: p,
      parentViewBox: m,
    } = e,
    h = t === `horizontal` ? s : o,
    g = u ? h.scale.domain() : null,
    _ = jh({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u
        ? (h = Eh(u[d], g))
        : ((h = vh(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = RI(r, vL)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Ah({
          axis: o,
          ticks: c,
          bandSize: a,
          offset: i.offset,
          entry: e,
          index: d,
        })),
          (y = T ?? w ?? void 0),
          (b = i.size));
        var E = w - T;
        if (
          ((x = Ql(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = Zl(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [ee, te] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = ee),
          (y = Ah({
            axis: s,
            ticks: l,
            bandSize: a,
            offset: i.offset,
            entry: e,
            index: d,
          })),
          (b = te - ee),
          (x = i.size),
          (S = { x: f.left, y, width: f.width, height: x }),
          Math.abs(C) > 0 && Math.abs(b) < Math.abs(C))
        ) {
          var ne = Zl(b || C) * (Math.abs(C) - Math.abs(b));
          b += ne;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : rL(
            rL({}, e),
            {},
            {
              x: v,
              y,
              width: b,
              height: x,
              value: u ? h : h[1],
              payload: e,
              background: S,
              tooltipPosition: { x: v + b / 2, y: y + x / 2 },
              parentViewBox: m,
            },
            p && p[d] && p[d].props,
          );
    })
    .filter(Boolean);
}
function wL(e) {
  var t = q_(e, xL),
    n = dg();
  return B.createElement(jP, { id: t.id, type: `bar` }, (e) =>
    B.createElement(
      B.Fragment,
      null,
      B.createElement(EP, { legendPayload: lL(t) }),
      B.createElement(wP, { fn: uL, args: t }),
      B.createElement(zP, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: kh(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      B.createElement(SL, tL({}, t, { id: e })),
    ),
  );
}
var TL = B.memo(wL);
TL.displayName = `Bar`;
function EL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function DL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? EL(Object(n), !0).forEach(function (t) {
          OL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : EL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function OL(e, t, n) {
  return (
    (t = kL(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function kL(e) {
  var t = AL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function AL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var jL = (e, t) => t,
  ML = (e, t, n) => n,
  NL = (e, t, n, r) => r,
  PL = U([vE, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  FL = U([PL], (e) => e?.maxBarSize),
  IL = (e, t, n, r, i, a) => a,
  LL = (e, t, n) => {
    var r = n ?? e;
    if (!su(r)) return ru(r, t, 0);
  },
  RL = U([W, vE, jL, ML, NL], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  zL = (e, t, n, r) =>
    W(e) === `horizontal` ? RE(e, `yAxis`, n, r) : RE(e, `xAxis`, t, r),
  BL = U(
    [
      RL,
      _T,
      (e, t, n) =>
        W(e) === `horizontal` ? YD(e, `xAxis`, t) : YD(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(YT),
        a = e.filter((e) => e.stackId == null),
        o = i.reduce(
          (e, t) => (
            e[t.stackId] || (e[t.stackId] = []),
            e[t.stackId].push(t),
            e
          ),
          r,
        ),
        s = Object.entries(o).map((e) => {
          var [r, i] = e;
          return {
            stackId: r,
            dataKeys: i.map((e) => e.dataKey),
            barSize: LL(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: LL(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  VL = (e, t, n, r, i) => {
    var a = PL(e, t, n, r, i);
    if (a != null) {
      var o = W(e),
        s = mT(e),
        { maxBarSize: c } = a,
        l = su(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = aO(e, `xAxis`, t, r)), (d = iO(e, `xAxis`, t, r)))
          : ((u = aO(e, `yAxis`, n, r)), (d = iO(e, `yAxis`, n, r))),
        Lh(u, d, !0) ?? l ?? 0
      );
    }
  },
  HL = (e, t, n, r) => {
    var i = W(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = aO(e, `xAxis`, t, r)), (o = iO(e, `xAxis`, t, r)))
        : ((a = aO(e, `yAxis`, n, r)), (o = iO(e, `yAxis`, n, r))),
      Lh(a, o)
    );
  };
function UL(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = ru(e, n, 0, !0),
      s,
      c = [];
    if (mg(r[0].barSize)) {
      var l = !1,
        u = n / a,
        d = r.reduce((e, t) => e + (t.barSize || 0), 0);
      ((d += (a - 1) * o),
        d >= n && ((d -= (a - 1) * o), (o = 0)),
        d >= n && u > 0 && ((l = !0), (u *= 0.9), (d = a * u)));
      var f = { offset: (((n - d) / 2) | 0) - o, size: 0 };
      s = r.reduce((e, t) => {
        var n = {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: {
              offset: f.offset + f.size + o,
              size: l ? u : (t.barSize ?? 0),
            },
          },
          r = [...e, n];
        return ((f = r[r.length - 1].position), r);
      }, c);
    } else {
      var p = ru(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = mg(i) ? Math.min(m, i) : m;
      s = r.reduce(
        (e, t, n) => [
          ...e,
          {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: { offset: p + (m + o) * n + (m - h) / 2, size: h },
          },
        ],
        c,
      );
    }
    return s;
  }
}
var WL = U(
    [
      sg,
      lg,
      (e, t, n, r) => aO(e, `xAxis`, t, r),
      (e, t, n, r) => aO(e, `yAxis`, n, r),
      (e, t, n, r) => iO(e, `xAxis`, t, r),
      (e, t, n, r) => iO(e, `yAxis`, n, r),
      U(
        [
          U([BL, mT, hT, gT, VL, HL, FL], (e, t, n, r, i, a, o) => {
            var s = su(o) ? t : o,
              c = UL(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  DL(
                    DL({}, e),
                    {},
                    {
                      position: DL(
                        DL({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          PL,
        ],
        (e, t) => {
          if (e != null && t != null) {
            var n = e.find(
              (e) =>
                e.stackId === t.stackId &&
                t.dataKey != null &&
                e.dataKeys.includes(t.dataKey),
            );
            if (n != null) return n.position;
          }
        },
      ),
      W,
      Bw,
      HL,
      U([zL, PL], (e, t) => {
        var n = UT(t);
        if (e && n != null && t != null) {
          var { stackId: r } = t;
          if (r != null) {
            var i = e[r];
            if (i) {
              var { stackedData: a } = i;
              if (a) return a.find((e) => e.key === n);
            }
          }
        }
      }),
      PL,
      IL,
    ],
    (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
      var { chartData: p, dataStartIndex: m, dataEndIndex: h } = c;
      if (
        !(
          d == null ||
          o == null ||
          t == null ||
          (s !== `horizontal` && s !== `vertical`) ||
          n == null ||
          r == null ||
          i == null ||
          a == null ||
          l == null
        )
      ) {
        var { data: g } = d,
          _ = g != null && g.length > 0 ? g : p?.slice(m, h + 1);
        if (_ != null)
          return CL({
            layout: s,
            barSettings: d,
            pos: o,
            parentViewBox: t,
            bandSize: l,
            xAxis: n,
            yAxis: r,
            xAxisTicks: i,
            yAxisTicks: a,
            stackedData: u,
            displayedData: _,
            offset: e,
            cells: f,
          });
      }
    },
  ),
  GL = (e) => {
    var { chartData: t } = e,
      n = hd(),
      r = dg();
    return (
      (0, B.useEffect)(
        () =>
          r
            ? () => {}
            : (n(dA(t)),
              () => {
                n(dA(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  KL = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  qL = tm({
    name: `brush`,
    initialState: KL,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? KL : t.payload;
      },
    },
  }),
  { setBrushSettings: JL } = qL.actions,
  YL = qL.reducer;
function XL(e, t, n) {
  return (
    (t = ZL(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ZL(e) {
  var t = QL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function QL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
XL(
  class e {
    static create(t) {
      return new e(t);
    }
    constructor(e) {
      this.scale = e;
    }
    get domain() {
      return this.scale.domain;
    }
    get range() {
      return this.scale.range;
    }
    get rangeMin() {
      return this.range()[0];
    }
    get rangeMax() {
      return this.range()[1];
    }
    get bandwidth() {
      return this.scale.bandwidth;
    }
    apply(e) {
      var { bandAware: t, position: n } =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e !== void 0) {
        if (n)
          switch (n) {
            case `start`:
              return this.scale(e);
            case `middle`:
              var r = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(e) + r;
            case `end`:
              var i = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(e) + i;
            default:
              return this.scale(e);
          }
        if (t) {
          var a = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(e) + a;
        }
        return this.scale(e);
      }
    }
    isInRange(e) {
      var t = this.range(),
        n = t[0],
        r = t[t.length - 1];
      return n <= r ? e >= n && e <= r : e >= r && e <= n;
    }
  },
  `EPS`,
  1e-4,
);
function $L(e) {
  return ((e % 180) + 180) % 180;
}
var eR = function (e) {
    var { width: t, height: n } = e,
      r =
        ($L(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  tR = tm({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Qf(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Qf(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = Qf(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: nR,
    removeDot: rR,
    addArea: iR,
    removeArea: aR,
    addLine: oR,
    removeLine: sR,
  } = tR.actions,
  cR = tR.reducer,
  lR = (0, B.createContext)(void 0),
  uR = (e) => {
    var { children: t } = e,
      [n] = (0, B.useState)(`${nu(`recharts`)}-clip`),
      r = jF();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return B.createElement(
      lR.Provider,
      { value: n },
      B.createElement(
        `defs`,
        null,
        B.createElement(
          `clipPath`,
          { id: n },
          B.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  };
function dR(e, t) {
  for (var n in e)
    if (
      {}.hasOwnProperty.call(e, n) &&
      (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n])
    )
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
function fR(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function pR(e, t, n) {
  return eR({ width: e.width + t.width, height: e.height + t.height }, n);
}
function mR(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function hR(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function gR(e, t) {
  return fR(e, t + 1);
}
function _R(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: fR(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || hR(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function vR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function yR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vR(Object(n), !0).forEach(function (t) {
          bR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bR(e, t, n) {
  return (
    (t = xR(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xR(e) {
  var t = SR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function SR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function CR(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = a.length,
      { start: s } = t,
      { end: c } = t,
      l = function (t) {
        var r = a[t],
          l,
          u = () => (l === void 0 && (l = n(r, t)), l);
        if (t === o - 1) {
          var d = e * (r.coordinate + (e * u()) / 2 - c);
          a[t] = r = yR(
            yR({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = yR(yR({}, r), {}, { tickCoord: r.coordinate });
        hR(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = yR(yR({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function wR(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      yR(
        yR({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      hR(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = yR(yR({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = yR(
            yR({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = yR(yR({}, r), {}, { tickCoord: r.coordinate });
        hR(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = yR(yR({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function TR(e, t, n) {
  var {
    tick: r,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: s,
    interval: c,
    tickFormatter: l,
    unit: u,
    angle: d,
  } = e;
  if (!i || !i.length || !r) return [];
  if (V(c) || h_.isSsr) return gR(i, V(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? ej(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? pR(ej(i, { fontSize: t, letterSpacing: n }), m, d)
        : ej(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? Zl(i[1].coordinate - i[0].coordinate) : 1,
    _ = mR(a, g, p);
  return c === `equidistantPreserveStart`
    ? _R(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? wR(g, _, h, i, o, c === `preserveStartEnd`)
          : CR(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var ER = (e) => {
    var {
        ticks: t,
        label: n,
        labelGapWithTick: r = 5,
        tickSize: i = 0,
        tickMargin: a = 0,
      } = e,
      o = 0;
    if (t) {
      Array.from(t).forEach((e) => {
        if (e) {
          var t = e.getBoundingClientRect();
          t.width > o && (o = t.width);
        }
      });
      var s = n ? n.getBoundingClientRect().width : 0,
        c = i + a,
        l = o + c + s + (n ? r : 0);
      return Math.round(l);
    }
    return 0;
  },
  DR = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  OR = [`viewBox`],
  kR = [`viewBox`];
function AR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = jR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function jR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function MR() {
  return (
    (MR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    MR.apply(null, arguments)
  );
}
function NR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function PR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? NR(Object(n), !0).forEach(function (t) {
          FR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : NR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function FR(e, t, n) {
  return (
    (t = IR(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function IR(e) {
  var t = LR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function LR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var RR = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: `bottom`,
  ticks: [],
  stroke: `#666`,
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: `preserveEnd`,
};
function zR(e) {
  var {
    x: t,
    y: n,
    width: r,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: s,
    otherSvgProps: c,
  } = e;
  if (!s) return null;
  var l = PR(PR(PR({}, c), oc(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = PR(PR({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = PR(PR({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return B.createElement(
    `line`,
    MR({}, l, {
      className: z(
        `recharts-cartesian-axis-line`,
        (0, Xl.default)(s, `className`),
      ),
    }),
  );
}
function BR(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = V(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case `top`:
      ((l = u = e.coordinate),
        (f = n + +!s * i),
        (d = f - h * g),
        (m = d - h * c),
        (p = _));
      break;
    case `left`:
      ((d = f = e.coordinate),
        (u = t + +!s * r),
        (l = u - h * g),
        (p = l - h * c),
        (m = _));
      break;
    case `right`:
      ((d = f = e.coordinate),
        (u = t + +s * r),
        (l = u + h * g),
        (p = l + h * c),
        (m = _));
      break;
    default:
      ((l = u = e.coordinate),
        (f = n + +s * i),
        (d = f + h * g),
        (m = d + h * c),
        (p = _));
  }
  return { line: { x1: l, y1: d, x2: u, y2: f }, tick: { x: p, y: m } };
}
function VR(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function HR(e, t) {
  switch (e) {
    case `left`:
    case `right`:
      return `middle`;
    case `top`:
      return t ? `start` : `end`;
    default:
      return t ? `end` : `start`;
  }
}
function UR(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = z(n.className, `recharts-cartesian-axis-tick-value`);
  if (B.isValidElement(t))
    i = B.cloneElement(t, PR(PR({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(PR(PR({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = z(o, t?.className)),
      (i = B.createElement(Oj, MR({}, n, { className: o }), r)));
  }
  return i;
}
function WR(e) {
  var {
      ticks: t = [],
      tick: n,
      tickLine: r,
      stroke: i,
      tickFormatter: a,
      unit: o,
      padding: s,
      tickTextProps: c,
      orientation: l,
      mirror: u,
      x: d,
      y: f,
      width: p,
      height: m,
      tickSize: h,
      tickMargin: g,
      fontSize: _,
      letterSpacing: v,
      getTicksConfig: y,
      events: b,
    } = e,
    x = TR(PR(PR({}, y), {}, { ticks: t }), _, v),
    S = VR(l, u),
    C = HR(l, u),
    w = oc(y),
    T = sc(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = PR(PR({}, w), {}, { fill: `none` }, E),
    ee = x.map((e, t) => {
      var { line: _, tick: v } = BR(e, d, f, p, m, l, h, u, g),
        y = PR(
          PR(
            PR(
              PR({ textAnchor: S, verticalAnchor: C }, w),
              {},
              { stroke: `none`, fill: i },
              T,
            ),
            v,
          ),
          {},
          {
            index: t,
            payload: e,
            visibleTicksCount: x.length,
            tickFormatter: a,
            padding: s,
          },
          c,
        );
      return B.createElement(
        yc,
        MR(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          Eu(b, e, t),
        ),
        r &&
          B.createElement(
            `line`,
            MR({}, D, _, {
              className: z(
                `recharts-cartesian-axis-tick-line`,
                (0, Xl.default)(r, `className`),
              ),
            }),
          ),
        n &&
          B.createElement(UR, {
            option: n,
            tickProps: y,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return ee.length > 0
    ? B.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, ee)
    : null;
}
var GR = (0, B.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = AR(e, DR),
      [l, u] = (0, B.useState)(``),
      [d, f] = (0, B.useState)(``),
      p = (0, B.useRef)(null);
    (0, B.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        ER({
          ticks: p.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var m = (0, B.useCallback)(
      (e) => {
        if (e) {
          var t = e.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          p.current = t;
          var n = t[0];
          if (n) {
            var r = window.getComputedStyle(n),
              i = r.fontSize,
              a = r.letterSpacing;
            (i !== l || a !== d) && (u(i), f(a));
          }
        }
      },
      [l, d],
    );
    return o || (r != null && r <= 0) || (i != null && i <= 0)
      ? null
      : B.createElement(
          yc,
          { className: z(`recharts-cartesian-axis`, a), ref: m },
          B.createElement(zR, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: oc(e),
          }),
          B.createElement(WR, {
            ticks: s,
            tick: e.tick,
            tickLine: e.tickLine,
            stroke: e.stroke,
            tickFormatter: e.tickFormatter,
            unit: e.unit,
            padding: e.padding,
            tickTextProps: e.tickTextProps,
            orientation: e.orientation,
            mirror: e.mirror,
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            tickSize: e.tickSize,
            tickMargin: e.tickMargin,
            fontSize: l,
            letterSpacing: d,
            getTicksConfig: e,
            events: c,
          }),
          B.createElement(
            zj,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            B.createElement($j, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  KR = B.memo(GR, (e, t) => {
    var { viewBox: n } = e,
      r = AR(e, OR),
      { viewBox: i } = t,
      a = AR(t, kR);
    return dR(n, i) && dR(r, a);
  }),
  qR = B.forwardRef((e, t) => {
    var n = q_(e, RR);
    return B.createElement(KR, MR({}, n, { ref: t }));
  });
qR.displayName = `CartesianAxis`;
var JR = [`x1`, `y1`, `x2`, `y2`, `key`],
  YR = [`offset`],
  XR = [`xAxisId`, `yAxisId`],
  ZR = [`xAxisId`, `yAxisId`];
function QR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? QR(Object(n), !0).forEach(function (t) {
          ez(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : QR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ez(e, t, n) {
  return (
    (t = tz(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tz(e) {
  var t = nz(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function nz(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rz() {
  return (
    (rz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rz.apply(null, arguments)
  );
}
function iz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = az(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function az(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var oz = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return B.createElement(`rect`, {
    x: r,
    y: i,
    ry: s,
    width: a,
    height: o,
    stroke: `none`,
    fill: t,
    fillOpacity: n,
    className: `recharts-cartesian-grid-bg`,
  });
};
function sz(e, t) {
  var n;
  if (B.isValidElement(e)) n = B.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = oc(iz(t, JR)),
      { offset: l } = c,
      u = iz(c, YR);
    n = B.createElement(
      `line`,
      rz({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function cz(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = iz(e, XR),
    c = i.map((e, i) =>
      sz(
        r,
        $R(
          $R({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return B.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    c,
  );
}
function lz(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = iz(e, ZR),
    c = i.map((e, i) =>
      sz(
        r,
        $R(
          $R({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return B.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    c,
  );
}
function uz(e) {
  var {
    horizontalFill: t,
    fillOpacity: n,
    x: r,
    y: i,
    width: a,
    height: o,
    horizontalPoints: s,
    horizontal: c = !0,
  } = e;
  if (!c || !t || !t.length) return null;
  var l = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== l[0] && l.unshift(0);
  var u = l.map((e, s) => {
    var c = l[s + 1] ? l[s + 1] - e : i + o - e;
    if (c <= 0) return null;
    var u = s % t.length;
    return B.createElement(`rect`, {
      key: `react-${s}`,
      y: e,
      x: r,
      height: c,
      width: a,
      stroke: `none`,
      fill: t[u],
      fillOpacity: n,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return B.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function dz(e) {
  var {
    vertical: t = !0,
    verticalFill: n,
    fillOpacity: r,
    x: i,
    y: a,
    width: o,
    height: s,
    verticalPoints: c,
  } = e;
  if (!t || !n || !n.length) return null;
  var l = c.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== l[0] && l.unshift(0);
  var u = l.map((e, t) => {
    var c = l[t + 1] ? l[t + 1] - e : i + o - e;
    if (c <= 0) return null;
    var u = t % n.length;
    return B.createElement(`rect`, {
      key: `react-${t}`,
      x: e,
      y: a,
      width: c,
      height: s,
      stroke: `none`,
      fill: n[u],
      fillOpacity: r,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return B.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    u,
  );
}
var fz = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return Sh(
      TR(
        $R(
          $R($R({}, RR), n),
          {},
          { ticks: Ch(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  pz = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return Sh(
      TR(
        $R(
          $R($R({}, RR), n),
          {},
          { ticks: Ch(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  mz = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: `#ccc`,
    fill: `none`,
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
  };
function hz(e) {
  var t = xg(),
    n = Sg(),
    r = bg(),
    i = $R(
      $R({}, q_(e, mz)),
      {},
      {
        x: V(e.x) ? e.x : r.left,
        y: V(e.y) ? e.y : r.top,
        width: V(e.width) ? e.width : r.width,
        height: V(e.height) ? e.height : r.height,
      },
    ),
    {
      xAxisId: a,
      yAxisId: o,
      x: s,
      y: c,
      width: l,
      height: u,
      syncWithTicks: d,
      horizontalValues: f,
      verticalValues: p,
    } = i,
    m = dg(),
    h = H((e) => eO(e, `xAxis`, a, m)),
    g = H((e) => eO(e, `yAxis`, o, m));
  if (
    !V(l) ||
    l <= 0 ||
    !V(u) ||
    u <= 0 ||
    !V(s) ||
    s !== +s ||
    !V(c) ||
    c !== +c
  )
    return null;
  var _ = i.verticalCoordinatesGenerator || fz,
    v = i.horizontalCoordinatesGenerator || pz,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? $R($R({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        x ? !0 : d,
      );
    Array.isArray(S) && (y = S);
  }
  if ((!b || !b.length) && typeof _ == `function`) {
    var C = p && p.length,
      w = _(
        {
          xAxis: h ? $R($R({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        C ? !0 : d,
      );
    Array.isArray(w) && (b = w);
  }
  return B.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    B.createElement(oz, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    B.createElement(uz, rz({}, i, { horizontalPoints: y })),
    B.createElement(dz, rz({}, i, { verticalPoints: b })),
    B.createElement(
      cz,
      rz({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    B.createElement(
      lz,
      rz({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
hz.displayName = `CartesianGrid`;
var gz = [`dangerouslySetInnerHTML`, `ticks`],
  _z = [`id`],
  vz = [`domain`],
  yz = [`domain`];
function bz() {
  return (
    (bz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bz.apply(null, arguments)
  );
}
function xz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Sz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Sz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Cz(e) {
  var t = hd();
  return (
    (0, B.useLayoutEffect)(
      () => (
        t(SF(e)),
        () => {
          t(CF(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var wz = (e) => {
    var { xAxisId: t, className: n } = e,
      r = H(lg),
      i = dg(),
      a = `xAxis`,
      o = H((e) => ND(e, a, t, i)),
      s = H((e) => nO(e, a, t, i)),
      c = H((e) => VD(e, t)),
      l = H((e) => KD(e, t)),
      u = H((e) => oE(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = xz(e, gz),
      { id: m } = u,
      h = xz(u, _z);
    return B.createElement(
      qR,
      bz({}, p, h, {
        scale: o,
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: z(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  Tz = {
    allowDataOverflow: aE.allowDataOverflow,
    allowDecimals: aE.allowDecimals,
    allowDuplicatedCategory: aE.allowDuplicatedCategory,
    height: aE.height,
    hide: !1,
    mirror: aE.mirror,
    orientation: aE.orientation,
    padding: aE.padding,
    reversed: aE.reversed,
    scale: aE.scale,
    tickCount: aE.tickCount,
    type: aE.type,
    xAxisId: 0,
  },
  Ez = B.memo(
    (e) => {
      var t = q_(e, Tz);
      return B.createElement(
        B.Fragment,
        null,
        B.createElement(Cz, {
          interval: t.interval ?? `preserveEnd`,
          id: t.xAxisId,
          scale: t.scale,
          type: t.type,
          padding: t.padding,
          allowDataOverflow: t.allowDataOverflow,
          domain: t.domain,
          dataKey: t.dataKey,
          allowDuplicatedCategory: t.allowDuplicatedCategory,
          allowDecimals: t.allowDecimals,
          tickCount: t.tickCount,
          includeHidden: t.includeHidden ?? !1,
          reversed: t.reversed,
          ticks: t.ticks,
          height: t.height,
          orientation: t.orientation,
          mirror: t.mirror,
          hide: t.hide,
          unit: t.unit,
          name: t.name,
          angle: t.angle ?? 0,
          minTickGap: t.minTickGap ?? 5,
          tick: t.tick ?? !0,
          tickFormatter: t.tickFormatter,
        }),
        B.createElement(wz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = xz(e, vz),
        { domain: i } = t;
      return dR(r, xz(t, yz))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : dR({ domain: n }, { domain: i })
        : !1;
    },
  );
Ez.displayName = `XAxis`;
var Dz = [`dangerouslySetInnerHTML`, `ticks`],
  Oz = [`id`],
  kz = [`domain`],
  Az = [`domain`];
function jz() {
  return (
    (jz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jz.apply(null, arguments)
  );
}
function Mz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Nz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Nz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Pz(e) {
  var t = hd();
  return (
    (0, B.useLayoutEffect)(
      () => (
        t(wF(e)),
        () => {
          t(TF(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var Fz = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, B.useRef)(null),
      o = (0, B.useRef)(null),
      s = H(lg),
      c = dg(),
      l = hd(),
      u = `yAxis`,
      d = H((e) => ND(e, u, t, c)),
      f = H((e) => JD(e, t)),
      p = H((e) => qD(e, t)),
      m = H((e) => nO(e, u, t, c)),
      h = H((e) => lE(e, t));
    if (
      ((0, B.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            Wj(i) ||
            (0, B.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(OF({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = Mz(e, Dz),
      { id: y } = h,
      b = Mz(h, Oz);
    return B.createElement(
      qR,
      jz({}, v, b, {
        ref: a,
        labelRef: o,
        scale: d,
        x: p.x,
        y: p.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: f.width,
        height: f.height,
        className: z(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: m,
      }),
    );
  },
  Iz = {
    allowDataOverflow: cE.allowDataOverflow,
    allowDecimals: cE.allowDecimals,
    allowDuplicatedCategory: cE.allowDuplicatedCategory,
    hide: !1,
    mirror: cE.mirror,
    orientation: cE.orientation,
    padding: cE.padding,
    reversed: cE.reversed,
    scale: cE.scale,
    tickCount: cE.tickCount,
    type: cE.type,
    width: cE.width,
    yAxisId: 0,
  },
  Lz = B.memo(
    (e) => {
      var t = q_(e, Iz);
      return B.createElement(
        B.Fragment,
        null,
        B.createElement(Pz, {
          interval: t.interval ?? `preserveEnd`,
          id: t.yAxisId,
          scale: t.scale,
          type: t.type,
          domain: t.domain,
          allowDataOverflow: t.allowDataOverflow,
          dataKey: t.dataKey,
          allowDuplicatedCategory: t.allowDuplicatedCategory,
          allowDecimals: t.allowDecimals,
          tickCount: t.tickCount,
          padding: t.padding,
          includeHidden: t.includeHidden ?? !1,
          reversed: t.reversed,
          ticks: t.ticks,
          width: t.width,
          orientation: t.orientation,
          mirror: t.mirror,
          hide: t.hide,
          unit: t.unit,
          name: t.name,
          angle: t.angle ?? 0,
          minTickGap: t.minTickGap ?? 5,
          tick: t.tick ?? !0,
          tickFormatter: t.tickFormatter,
        }),
        B.createElement(Fz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = Mz(e, kz),
        { domain: i } = t;
      return dR(r, Mz(t, Az))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : dR({ domain: n }, { domain: i })
        : !1;
    },
  );
Lz.displayName = `YAxis`;
var Rz = n((e) => {
  var t = o();
  (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
});
n((e, t) => {
  t.exports = Rz();
})();
function zz(e) {
  e();
}
function Bz() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      zz(() => {
        let t = e;
        for (; t;) (t.callback(), (t = t.next));
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n;) (t.push(n), (n = n.next));
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          r &&
            e !== null &&
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Vz = { notify() {}, get: () => [] };
function Hz(e, t) {
  let n,
    r = Vz,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = Bz())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Vz)));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var Uz =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Wz = typeof navigator < `u` && navigator.product === `ReactNative`,
  Gz = Uz || Wz ? B.useLayoutEffect : B.useEffect,
  Kz = Symbol.for(`react-redux-context`),
  qz = typeof globalThis < `u` ? globalThis : {};
function Jz() {
  if (!B.createContext) return {};
  let e = (qz[Kz] ??= new Map()),
    t = e.get(B.createContext);
  return (t || ((t = B.createContext(null)), e.set(B.createContext, t)), t);
}
var Yz = Jz();
function Xz(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = B.useMemo(() => {
      let e = Hz(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = B.useMemo(() => i.getState(), [i]);
  Gz(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        (e.tryUnsubscribe(), (e.onStateChange = void 0));
      }
    );
  }, [a, o]);
  let s = n || Yz;
  return B.createElement(s.Provider, { value: a }, t);
}
var Zz = Xz,
  Qz = U([(e, t) => t, W, BT, WT, lk, dk, Pk, sg], Wk),
  $z = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  eB = wp(`mouseClick`),
  tB = Hm();
tB.startListening({
  actionCreator: eB,
  effect: (e, t) => {
    var n = e.payload,
      r = Qz(t.getState(), $z(n));
    r?.activeIndex != null &&
      t.dispatch(
        wO({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var nB = wp(`mouseMove`),
  rB = Hm();
rB.startListening({
  actionCreator: nB,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = uO(r, r.tooltip.settings.shared),
      a = Qz(r, $z(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(xO())
        : t.dispatch(
            CO({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function iB(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var aB = {
    accessibilityLayer: !0,
    barCategoryGap: `10%`,
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: `none`,
    syncId: void 0,
    syncMethod: `index`,
  },
  oB = tm({
    name: `rootProps`,
    initialState: aB,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? aB.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  sB = oB.reducer,
  { updateOptions: cB } = oB.actions,
  lB = tm({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: uB } = lB.actions,
  dB = lB.reducer,
  fB = wp(`keyDown`),
  pB = wp(`focus`),
  mB = Hm();
(mB.startListening({
  actionCreator: fB,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(IO(r, ZO(n))),
          o = dk(n);
        if (i === `Enter`) {
          var s = zk(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            EO({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = oO(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = zk(n, `axis`, `hover`, String(l));
            t.dispatch(
              EO({
                active: !0,
                activeIndex: l.toString(),
                activeDataKey: void 0,
                activeCoordinate: u,
              }),
            );
          }
        }
      }
    }
  },
}),
  mB.startListening({
    actionCreator: pB,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = zk(n, `axis`, `hover`, String(i));
          t.dispatch(
            EO({
              activeDataKey: void 0,
              active: !0,
              activeIndex: i,
              activeCoordinate: a,
            }),
          );
        }
      }
    },
  }));
var hB = wp(`externalEvent`),
  gB = Hm();
gB.startListening({
  actionCreator: hB,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: bk(n),
          activeDataKey: vk(n),
          activeIndex: gk(n),
          activeLabel: _k(n),
          activeTooltipIndex: gk(n),
          isTooltipActive: xk(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var _B = U(
    [U([BO], (e) => e.tooltipItemPayloads), zO, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  vB = wp(`touchMove`),
  yB = Hm();
yB.startListening({
  actionCreator: vB,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = uO(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = Qz(
        r,
        $z({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          CO({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Yh),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = _B(t.getState(), c, l);
      t.dispatch(yO({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var bB = ef({
    brush: YL,
    cartesianAxis: kF,
    chartData: mA,
    errorBars: UI,
    graphicalItems: RP,
    layout: Ym,
    legend: jg,
    options: sA,
    polarAxis: uN,
    polarOptions: dB,
    referenceElements: cR,
    rootProps: sB,
    tooltip: DO,
  }),
  xB = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return Fp({
      reducer: bB,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          tB.middleware,
          rB.middleware,
          mB.middleware,
          gB.middleware,
          yB.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Np({ type: `raf` }))
        );
      },
      devTools: h_.devToolsEnabled && {
        serialize: { replacer: iB },
        name: `recharts-${t}`,
      },
    });
  };
function SB(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = dg(),
    a = (0, B.useRef)(null);
  if (i) return n;
  a.current ??= xB(t, r);
  var o = fd;
  return B.createElement(Zz, { context: o, store: a.current }, n);
}
function CB(e) {
  var { layout: t, margin: n } = e,
    r = hd(),
    i = dg();
  return (
    (0, B.useEffect)(() => {
      i || (r(Km(t)), r(Gm(n)));
    }, [r, i, t, n]),
    null
  );
}
function wB(e) {
  var t = hd();
  return (
    (0, B.useEffect)(() => {
      t(cB(e));
    }, [t, e]),
    null
  );
}
var TB = [`children`];
function EB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = DB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function DB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function OB() {
  return (
    (OB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    OB.apply(null, arguments)
  );
}
var kB = { width: `100%`, height: `100%`, display: `block` },
  AB = (0, B.forwardRef)((e, t) => {
    var n = xg(),
      r = Sg(),
      i = g_();
    if (!hg(n) || !hg(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return B.createElement(
      mc,
      OB({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: kB,
        ref: t,
      }),
      a,
    );
  }),
  jB = (e) => {
    var { children: t } = e,
      n = H(pg);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return B.createElement(mc, { width: r, height: i, x: o, y: a }, t);
  },
  MB = (0, B.forwardRef)((e, t) => {
    var { children: n } = e,
      r = EB(e, TB);
    return dg()
      ? B.createElement(jB, null, n)
      : B.createElement(AB, OB({ ref: t }, r), n);
  });
function NB() {
  var e = hd(),
    [t, n] = (0, B.useState)(null),
    r = H(Gh);
  return (
    (0, B.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        mg(n) && n !== r && e(Jm(n));
      }
    }, [t, e, r]),
    n
  );
}
function PB(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function FB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PB(Object(n), !0).forEach(function (t) {
          IB(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PB(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function IB(e, t, n) {
  return (
    (t = LB(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function LB(e) {
  var t = RB(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RB(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zB() {
  return (
    (zB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zB.apply(null, arguments)
  );
}
var BB = () => (EA(), null);
function VB(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var HB = (0, B.forwardRef)((e, t) => {
    var n = (0, B.useRef)(null),
      [r, i] = (0, B.useState)({
        containerWidth: VB(e.style?.width),
        containerHeight: VB(e.style?.height),
      }),
      a = (0, B.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, B.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: r, height: i } = e.getBoundingClientRect();
            a(r, i);
            var o = new ResizeObserver((e) => {
              var { width: t, height: n } = e[0].contentRect;
              a(t, n);
            });
            (o.observe(e), (n.current = o));
          }
        },
        [t, a],
      );
    return (
      (0, B.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      B.createElement(
        B.Fragment,
        null,
        B.createElement(Tg, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        B.createElement(`div`, zB({ ref: o }, e)),
      )
    );
  }),
  UB = (0, B.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, B.useState)({
        containerWidth: VB(n),
        containerHeight: VB(r),
      }),
      o = (0, B.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, B.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(Tg, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      B.createElement(`div`, zB({ ref: s }, e)),
    );
  }),
  WB = (0, B.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(Tg, { width: n, height: r }),
      B.createElement(`div`, zB({ ref: t }, e)),
    );
  }),
  GB = (0, B.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return $l(n) || $l(r)
      ? B.createElement(UB, zB({}, e, { ref: t }))
      : B.createElement(WB, zB({}, e, { ref: t }));
  });
function KB(e) {
  return e === !0 ? HB : GB;
}
var qB = (0, B.forwardRef)((e, t) => {
    var {
        children: n,
        className: r,
        height: i,
        onClick: a,
        onContextMenu: o,
        onDoubleClick: s,
        onMouseDown: c,
        onMouseEnter: l,
        onMouseLeave: u,
        onMouseMove: d,
        onMouseUp: f,
        onTouchEnd: p,
        onTouchMove: m,
        onTouchStart: h,
        style: g,
        width: _,
        responsive: v,
        dispatchTouchEvents: y = !0,
      } = e,
      b = (0, B.useRef)(null),
      x = hd(),
      [S, C] = (0, B.useState)(null),
      [w, T] = (0, B.useState)(null),
      E = NB(),
      D = _g(),
      ee = D?.width > 0 ? D.width : _,
      te = D?.height > 0 ? D.height : i,
      ne = (0, B.useCallback)(
        (e) => {
          (E(e),
            typeof t == `function` && t(e),
            C(e),
            T(e),
            e != null && (b.current = e));
        },
        [E, t, C, T],
      ),
      re = (0, B.useCallback)(
        (e) => {
          (x(eB(e)), x(hB({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      ie = (0, B.useCallback)(
        (e) => {
          (x(nB(e)), x(hB({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      O = (0, B.useCallback)(
        (e) => {
          (x(xO()), x(hB({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      ae = (0, B.useCallback)(
        (e) => {
          (x(nB(e)), x(hB({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      oe = (0, B.useCallback)(() => {
        x(pB());
      }, [x]),
      se = (0, B.useCallback)(
        (e) => {
          x(fB(e.key));
        },
        [x],
      ),
      ce = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      le = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      k = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      ue = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      de = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      fe = (0, B.useCallback)(
        (e) => {
          (y && x(vB(e)), x(hB({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      pe = (0, B.useCallback)(
        (e) => {
          x(hB({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      me = KB(v);
    return B.createElement(
      $k.Provider,
      { value: S },
      B.createElement(
        bc.Provider,
        { value: w },
        B.createElement(
          me,
          {
            width: ee ?? g?.width,
            height: te ?? g?.height,
            className: z(`recharts-wrapper`, r),
            style: FB(
              {
                position: `relative`,
                cursor: `default`,
                width: ee,
                height: te,
              },
              g,
            ),
            onClick: re,
            onContextMenu: ce,
            onDoubleClick: le,
            onFocus: oe,
            onKeyDown: se,
            onMouseDown: k,
            onMouseEnter: ie,
            onMouseLeave: O,
            onMouseMove: ae,
            onMouseUp: ue,
            onTouchEnd: pe,
            onTouchMove: fe,
            onTouchStart: de,
            ref: ne,
          },
          B.createElement(BB, null),
          n,
        ),
      ),
    );
  }),
  JB = [
    `width`,
    `height`,
    `responsive`,
    `children`,
    `className`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function YB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = XB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function XB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ZB = (0, B.forwardRef)((e, t) => {
  var {
      width: n,
      height: r,
      responsive: i,
      children: a,
      className: o,
      style: s,
      compact: c,
      title: l,
      desc: u,
    } = e,
    d = oc(YB(e, JB));
  return c
    ? B.createElement(
        B.Fragment,
        null,
        B.createElement(Tg, { width: n, height: r }),
        B.createElement(MB, { otherAttributes: d, title: l, desc: u }, a),
      )
    : B.createElement(
        qB,
        {
          className: o,
          style: s,
          width: n,
          height: r,
          responsive: i,
          onClick: e.onClick,
          onMouseLeave: e.onMouseLeave,
          onMouseEnter: e.onMouseEnter,
          onMouseMove: e.onMouseMove,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onContextMenu: e.onContextMenu,
          onDoubleClick: e.onDoubleClick,
          onTouchStart: e.onTouchStart,
          onTouchMove: e.onTouchMove,
          onTouchEnd: e.onTouchEnd,
        },
        B.createElement(
          MB,
          { otherAttributes: d, title: l, desc: u, ref: t },
          B.createElement(uR, null, a),
        ),
      );
});
function QB() {
  return (
    (QB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    QB.apply(null, arguments)
  );
}
var $B = {
    accessibilityLayer: !0,
    layout: `horizontal`,
    stackOffset: `none`,
    barCategoryGap: `10%`,
    barGap: 4,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    reverseStackOrder: !1,
    syncMethod: `index`,
    responsive: !1,
  },
  eV = (0, B.forwardRef)(function (e, t) {
    var n = q_(e.categoricalChartProps, $B),
      {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        categoricalChartProps: s,
      } = e,
      c = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return B.createElement(
      SB,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      B.createElement(GL, { chartData: s.data }),
      B.createElement(CB, { layout: n.layout, margin: n.margin }),
      B.createElement(wB, {
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
      }),
      B.createElement(ZB, QB({}, n, { ref: t })),
    );
  });
function tV(e) {
  var t = hd();
  return (
    (0, B.useEffect)(() => {
      t(uB(e));
    }, [t, e]),
    null
  );
}
var nV = [`layout`];
function rV() {
  return (
    (rV = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rV.apply(null, arguments)
  );
}
function iV(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = aV(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function aV(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var oV = {
    accessibilityLayer: !0,
    stackOffset: `none`,
    barCategoryGap: `10%`,
    barGap: 4,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    reverseStackOrder: !1,
    syncMethod: `index`,
    layout: `radial`,
    responsive: !1,
  },
  sV = (0, B.forwardRef)(function (e, t) {
    var n = q_(e.categoricalChartProps, oV),
      { layout: r } = n,
      i = iV(n, nV),
      {
        chartName: a,
        defaultTooltipEventType: o,
        validateTooltipEventTypes: s,
        tooltipPayloadSearcher: c,
      } = e,
      l = {
        chartName: a,
        defaultTooltipEventType: o,
        validateTooltipEventTypes: s,
        tooltipPayloadSearcher: c,
        eventEmitter: void 0,
      };
    return B.createElement(
      SB,
      { preloadedState: { options: l }, reduxStoreName: n.id ?? a },
      B.createElement(GL, { chartData: n.data }),
      B.createElement(CB, { layout: r, margin: n.margin }),
      B.createElement(wB, {
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
      }),
      B.createElement(tV, {
        cx: n.cx,
        cy: n.cy,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        innerRadius: n.innerRadius,
        outerRadius: n.outerRadius,
      }),
      B.createElement(ZB, rV({}, i, { ref: t })),
    );
  }),
  cV = [`item`],
  lV = {
    layout: `centric`,
    startAngle: 0,
    endAngle: 360,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  uV = (0, B.forwardRef)((e, t) => {
    var n = q_(e, lV);
    return B.createElement(sV, {
      chartName: `PieChart`,
      defaultTooltipEventType: `item`,
      validateTooltipEventTypes: cV,
      tooltipPayloadSearcher: aA,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  dV = [`axis`],
  fV = {
    layout: `centric`,
    startAngle: 90,
    endAngle: -270,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  pV = (0, B.forwardRef)((e, t) => {
    var n = q_(e, fV);
    return B.createElement(sV, {
      chartName: `RadarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: dV,
      tooltipPayloadSearcher: aA,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  mV = [`axis`],
  hV = (0, B.forwardRef)((e, t) =>
    B.createElement(eV, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: mV,
      tooltipPayloadSearcher: aA,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  K = e(c(), 1),
  gV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_playtime_seconds: {
              n: 1,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 20, br: A.readUint32, bw: I.writeUint32 },
            vr_sessions: { n: 21, br: A.readUint32, bw: I.writeUint32 },
            deck_sessions: { n: 22, br: A.readUint32, bw: I.writeUint32 },
            controller_sessions: { n: 23, br: A.readUint32, bw: I.writeUint32 },
            linux_sessions: { n: 24, br: A.readUint32, bw: I.writeUint32 },
            macos_sessions: { n: 25, br: A.readUint32, bw: I.writeUint32 },
            windows_sessions: { n: 26, br: A.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: A.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  _V = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: I.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  vV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.longest_consecutive_days || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            longest_consecutive_days: {
              n: 1,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            rtime_start: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            streak_games: { n: 3, c: _V, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  yV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_rank || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            vr_rank: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            deck_rank: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            controller_rank: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            linux_rank: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            mac_rank: { n: 6, br: A.readUint32, bw: I.writeUint32 },
            windows_rank: { n: 7, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  bV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: gV },
            playtime_streak: { n: 3, c: vV },
            playtime_ranks: { n: 4, c: yV },
            rtime_first_played: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            relative_game_stats: { n: 6, c: gV },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  xV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            new_this_year: { n: 2, br: A.readBool, bw: I.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            demo: { n: 4, br: A.readBool, bw: I.writeBool },
            playtest: { n: 5, br: A.readBool, bw: I.writeBool },
            played_during_early_access: {
              n: 6,
              br: A.readBool,
              bw: I.writeBool,
            },
            played_vr: { n: 7, br: A.readBool, bw: I.writeBool },
            played_deck: { n: 8, br: A.readBool, bw: I.writeBool },
            played_controller: { n: 9, br: A.readBool, bw: I.writeBool },
            played_linux: { n: 10, br: A.readBool, bw: I.writeBool },
            played_mac: { n: 11, br: A.readBool, bw: I.writeBool },
            played_windows: { n: 12, br: A.readBool, bw: I.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 14, br: A.readUint32, bw: I.writeUint32 },
            rtime_release_date: { n: 15, br: A.readUint32, bw: I.writeUint32 },
            parent_appid: { n: 16, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  SV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  CV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            rank: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  wV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: A.readString, bw: I.writeString },
            rankings: { n: 2, c: CV, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  TV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: wV },
            vr_ranking: { n: 2, c: wV },
            deck_ranking: { n: 3, c: wV },
            controller_ranking: { n: 4, c: wV },
            linux_ranking: { n: 5, c: wV },
            mac_ranking: { n: 6, c: wV },
            windows_ranking: { n: 7, c: wV },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  EV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_achievements || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: A.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  DV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: OV, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  OV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            tag_weight: { n: 2, br: A.readFloat, bw: I.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: A.readFloat,
              bw: I.writeFloat,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  kV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshots_shared || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            gifts_sent: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            loyalty_reactions: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            written_reviews: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            guides_submitted: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            badges_earned: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            friends_added: { n: 8, br: A.readUint32, bw: I.writeUint32 },
            forum_posts: { n: 9, br: A.readUint32, bw: I.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            guide_subscribers: { n: 11, br: A.readUint32, bw: I.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            games_played_pct: { n: 13, br: A.readUint32, bw: I.writeUint32 },
            achievements_pct: { n: 14, br: A.readUint32, bw: I.writeUint32 },
            game_streak_pct: { n: 15, br: A.readUint32, bw: I.writeUint32 },
            games_played_avg: { n: 16, br: A.readUint32, bw: I.writeUint32 },
            achievements_avg: { n: 17, br: A.readUint32, bw: I.writeUint32 },
            game_streak_avg: { n: 18, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  AV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_stats || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_stats: { n: 1, c: gV },
            games: { n: 2, c: bV, r: !0, q: !0 },
            playtime_streak: { n: 3, c: vV },
            months: { n: 5, c: jV, r: !0, q: !0 },
            game_summary: { n: 6, c: xV, r: !0, q: !0 },
            demos_played: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            game_rankings: { n: 8, c: TV },
            playtests_played: { n: 9, br: A.readUint32, bw: I.writeUint32 },
            summary_stats: { n: 10, c: EV },
            substantial: { n: 11, d: !0, br: A.readBool, bw: I.writeBool },
            tag_stats: { n: 12, c: DV },
            by_numbers: { n: 13, c: kV },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  jV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_month || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: gV },
            appid: { n: 4, c: bV, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: gV },
            game_summary: { n: 6, c: SV, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  MV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            playtime_stats: { n: 3, c: AV },
            privacy_state: { n: 4, br: A.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  NV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.from_dbo || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: A.readBool, bw: I.writeBool },
            overall_time_ms: {
              n: 2,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  PV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.statid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            fieldid: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: A.readString,
              bw: I.writeString,
            },
            rtime_unlocked: { n: 4, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  FV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            achievements: { n: 2, c: PV, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: A.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  IV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.median_achievements || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            median_games: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            median_streak: { n: 3, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  LV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            recent_releases: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            classic_releases: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            recent_cutoff_year: { n: 4, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  RV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            longest_streak: { n: 3, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  zV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            force_regenerate: { n: 3, br: A.readBool, bw: I.writeBool },
            access_source: { n: 4, br: A.readInt32, bw: I.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: A.readBool,
              bw: I.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  BV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: MV },
            performance_stats: { n: 2, c: NV },
            percentiles: { n: 3, c: IV },
            distribution: { n: 4, c: LV },
            previous_year_summary: { n: 5, c: RV },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  VV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            privacy_state: { n: 3, br: A.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  HV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: A.readEnum, bw: I.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  UV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  WV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: A.readEnum, bw: I.writeEnum },
            generated_value: { n: 2, br: A.readBool, bw: I.writeBool },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  GV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
            total_only: { n: 4, br: A.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  KV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_achievements: { n: 1, c: FV, r: !0, q: !0 },
            total_achievements: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: A.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  qV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  JV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: XV, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  YV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: A.readString, bw: I.writeString },
            preview_url: { n: 2, br: A.readString, bw: I.writeString },
            image_width: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            image_height: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: A.readBool, bw: I.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: A.readBool,
              bw: I.writeBool,
            },
            visibility: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            spoiler_tag: { n: 8, br: A.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  XV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            screenshots: { n: 2, c: YV, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  ZV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            gid: { n: 2, br: A.readFixed64String, bw: I.writeFixed64String },
            type: { n: 3, br: A.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  QV = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: A.readString, bw: I.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  $V = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readFixed64String,
              pbr: A.readPackedFixed64String,
              bw: I.writeRepeatedFixed64String,
            },
            type: { n: 3, br: A.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  eH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: tH, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  tH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: A.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  nH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            type: { n: 2, br: A.readEnum, bw: I.writeEnum },
            count: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            last_account_index: { n: 4, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  rH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: iH, r: !0, q: !0 },
            last_account_index: { n: 2, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  iH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: A.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  aH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            return_private: { n: 3, br: A.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  oH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            privacy_state: { n: 3, br: A.readEnum, bw: I.writeEnum },
            rt_privacy_updated: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            privacy_override: { n: 5, br: A.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  sH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: oH, r: !0, q: !0 },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  cH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            language: { n: 3, br: A.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  lH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: uH, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  uH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: A.readString, bw: I.writeString },
            url_path: { n: 2, br: A.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  dH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  fH = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            month: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            games_played: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            top_played_appid: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            longest_streak_days: { n: 6, br: A.readUint32, bw: I.writeUint32 },
            rt_streak_start: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            achievements: { n: 8, br: A.readUint32, bw: I.writeUint32 },
            screenshots: { n: 9, br: A.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return L(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      F(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  pH;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, ba(zV, t, n), BV, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearInReview = t;
  function n(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      ba(UV, t, n),
      WV,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      ba(VV, t, n),
      HV,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievements#1`,
      ba(GV, t, n),
      KV,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearAchievements = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, ba(qV, t, n), JV, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearScreenshots = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, ba(ZV, t, n), QV, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserActionData = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetMultipleUserActionData#1`,
      ba($V, t, n),
      eH,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetMultipleUserActionData = s;
  function c(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetAllUserActionDataForType#1`,
      ba(nH, t, n),
      rH,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      ba(aH, t, n),
      sH,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetFriendsSharedYearInReview = l;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      ba(cH, t, n),
      lH,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearInReviewShareImage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      ba(dH, t, n),
      fH,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = d;
})((pH ||= {}));
var mH = {
    19: [19, $t, cr, Ri, si, vi],
    [Ji]: [Ji, Mr, Oi, Zr, Mi, ye, En],
    [pe]: [pe, Jr, or, Jo],
    113: [113],
    21: [21, Zt],
    492: [492],
    [ws]: [ws, er],
    [$t]: [19, $t, cr, cn],
    9: [9, no, ue, vn, No, tn, Fn],
    [Mr]: [Ji, Mr, Oi, ur, at],
    122: [122, Jt, Ns, bn, Yr],
    [Yo]: [Yo, er],
    [cr]: [19, $t, cr, Bt],
    599: [599, mn, va],
    [cn]: [$t, cn],
    [qo]: [qo, st, so],
    [Ae]: [Ae, la, po],
    [Jr]: [pe, Jr, Ar, Nn],
    [la]: [Ae, la, po],
    597: [597],
    [Pt]: [Pt, sr, mi, Fi],
    [Lt]: [Lt],
    [mr]: [mr],
    [or]: [pe, or, yn, Pe],
    [di]: [di, ea],
    [Oi]: [Ji, Mr, Oi],
    [st]: [qo, st],
    [Kn]: [Kn, Un],
    [Jo]: [pe, Jo, xe],
    [$e]: [$e],
    [Ut]: [Ut],
    [ge]: [ge, _s],
    [es]: [es],
    [js]: [js, wr, Sr],
    128: [128, Mo],
    [ie]: [ie],
    [_i]: [_i],
    [Zr]: [Ji, Zr],
    [Me]: [Me],
    493: [493],
    [ut]: [ut, _e],
    [qe]: [qe, on],
    [Un]: [Kn, Un],
    [Mi]: [Ji, Mi],
    [Vt]: [Vt, er],
    [ea]: [di, ea],
    [qi]: [qi],
    [mo]: [mo, ta],
    [Br]: [Br],
    [nt]: [nt, _t],
    [xr]: [xr, _s],
    [po]: [Ae, la, po],
    [so]: [qo, so],
    [Ct]: [Ct, xe],
    [Jt]: [122, Jt],
    [_t]: [nt, _t],
    [Ht]: [Ht],
    [_e]: [ut, _e],
    [ye]: [Ji, ye],
    [Bs]: [Bs],
    [dr]: [dr],
    [Ce]: [Ce],
    [fe]: [fe],
    [wr]: [js, wr, ht, gr],
    [pr]: [pr],
    699: [699],
    [ti]: [ti],
    [Ri]: [19, Ri],
    [Wr]: [Wr],
    [yo]: [yo],
    [Ar]: [Jr, Ar],
    [sr]: [Pt, sr],
    [Zt]: [21, Zt],
    [ke]: [ke],
    [qa]: [qa, ns, ps, Bi],
    [si]: [19, si],
    [Nn]: [Jr, Nn],
    [an]: [an],
    [Xi]: [Xi],
    [Ze]: [Ze],
    [_o]: [_o],
    [Ki]: [Ki],
    [jr]: [jr],
    [Es]: [Es],
    [gn]: [gn],
    [Vs]: [Vs],
    [Ha]: [Ha],
    701: [701, fn, Et, An],
    [mn]: [599, mn, va],
    [Ca]: [Ca],
    [lo]: [lo],
    [no]: [9, no, Hn],
    [Vi]: [Vi, rs],
    [Mo]: [128, Mo],
    [mt]: [mt],
    [_n]: [_n],
    [ur]: [Mr, ur, Ge],
    [rs]: [Vi, rs],
    [Zo]: [Zo],
    [tr]: [tr],
    [Na]: [Na],
    [ue]: [9, ue],
    [Nt]: [Nt],
    [Ns]: [122, Ns],
    [zs]: [zs],
    [Ge]: [ur, Ge, ka, za, Le],
    [Ui]: [Ui, O],
    [lr]: [lr],
    [bi]: [bi],
    [vn]: [9, vn],
    [ta]: [mo, ta],
    [Ft]: [Ft],
    [ri]: [ri],
    [Er]: [Er],
    [Pi]: [Pi],
    [ia]: [ia],
    [It]: [It],
    [ns]: [qa, ns],
    [Hs]: [Hs],
    [on]: [qe, on],
    [Xe]: [Xe],
    [Ti]: [Ti],
    [yn]: [or, yn],
    [Yn]: [Yn],
    [go]: [go],
    [ci]: [ci],
    [Ie]: [Ie],
    [Sa]: [Sa],
    [to]: [to],
    [yi]: [yi],
    [No]: [9, No],
    [xn]: [xn],
    [Sr]: [js, Sr],
    [ds]: [ds],
    [Ei]: [Ei],
    [Ls]: [Ls],
    [va]: [599, mn, va],
    [$o]: [$o],
    [fs]: [fs],
    [uo]: [uo, Go],
    [Ci]: [Ci],
    [Pa]: [Pa],
    [xt]: [xt],
    [cs]: [cs, Te, Vo, ui, Wn],
    [er]: [ws, Yo, Vt, er],
    [vi]: [19, vi],
    [gs]: [gs],
    [Ro]: [Ro],
    [le]: [le],
    [Vr]: [Vr],
    [$r]: [$r],
    [xi]: [xi],
    [Tr]: [Tr],
    [Li]: [Li],
    [me]: [me],
    [Pe]: [or, Pe],
    [Re]: [Re],
    [da]: [da],
    [bo]: [bo],
    [he]: [he],
    [kn]: [kn],
    [Qo]: [Qo],
    [He]: [He],
    [oo]: [oo],
    [lt]: [lt],
    [Gi]: [Gi],
    [as]: [as],
    [jo]: [jo],
    [de]: [de],
    [us]: [us],
    [Ea]: [Ea],
    [Ue]: [Ue],
    [Oa]: [Oa],
    [Ho]: [Ho],
    [As]: [As],
    [Fs]: [Fs],
    [Ao]: [Ao],
    [nn]: [nn],
    [na]: [na],
    [ka]: [Ge, ka],
    [Oe]: [Oe],
    [Go]: [uo, Go],
    [Ni]: [Ni, xa],
    [La]: [La],
    [ss]: [ss],
    [mi]: [Pt, mi],
    [Ma]: [Ma],
    [Zn]: [Zn],
    [pt]: [pt],
    [Pr]: [Pr],
    [vs]: [vs],
    [Ya]: [Ya],
    [ha]: [ha],
    [Fe]: [Fe],
    [ht]: [wr, ht],
    [tn]: [9, tn],
    [Rn]: [Rn],
    [se]: [se],
    [Ps]: [Ps],
    [yt]: [yt],
    [Pn]: [Pn],
    [Bt]: [cr, Bt],
    [be]: [be],
    [dt]: [dt],
    [Io]: [Io],
    [bn]: [122, bn],
    872: [872],
    [sa]: [sa],
    [Qt]: [Qt],
    [ms]: [ms],
    [ae]: [ae],
    [Gr]: [Gr],
    [ot]: [ot],
    [_a]: [_a],
    [_r]: [_r],
    [ra]: [ra],
    [Qi]: [Qi],
    [we]: [we],
    [fn]: [701, fn, Et],
    [Rr]: [Rr],
    [bt]: [bt],
    [ve]: [ve],
    [At]: [At],
    [Ko]: [Ko],
    [Dn]: [Dn],
    [Nr]: [Nr],
    [Ts]: [Ts],
    [Tt]: [Tt],
    [ai]: [ai],
    [Fn]: [9, Fn],
    [Di]: [Di],
    [aa]: [aa],
    [Hi]: [Hi],
    [oe]: [oe],
    87: [87],
    [Yr]: [122, Yr],
    [O]: [Ui, O],
    84: [84],
    [je]: [je],
    [at]: [Mr, at],
    [yr]: [yr],
    [Hr]: [Hr],
    [hn]: [hn],
    [Qe]: [Qe],
    [zt]: [zt],
    [Qn]: [Qn],
    [wo]: [wo],
    [wn]: [wn],
    [Tn]: [Tn],
    [Cs]: [Cs],
    [ir]: [ir],
    [Rs]: [Rs],
    [Et]: [701, fn, Et],
    [ln]: [ln],
    [_s]: [ge, xr, _s],
    [Ga]: [Ga],
    [pa]: [pa],
    [ho]: [ho],
    [ua]: [ua],
    [Va]: [Va],
    [Ss]: [Ss],
    [nr]: [nr],
    [et]: [et],
    [ma]: [ma],
    [Kt]: [Kt],
    [Xr]: [Xr],
    [Aa]: [Aa],
    [ls]: [ls],
    [We]: [We],
    [Ii]: [Ii],
    [Sn]: [Sn],
    [Ja]: [Ja],
    [Te]: [cs, Te],
    [ja]: [ja],
    [ga]: [ga],
    [Ta]: [Ta],
    [co]: [co],
    [$n]: [$n],
    [Vo]: [cs, Vo, ui],
    [pi]: [pi],
    [ce]: [ce],
    [Cr]: [Cr],
    [Bo]: [Bo],
    [Ra]: [Ra],
    [Dr]: [Dr],
    [Mn]: [Mn],
    [fi]: [fi],
    [xe]: [Jo, Ct, xe],
    [xa]: [Ni, xa],
    [oi]: [oi],
    [qt]: [qt],
    [eo]: [eo],
    [Ds]: [Ds],
    [tt]: [tt],
    [Ms]: [Ms],
    [Kr]: [Kr],
    [Wt]: [Wt],
    [vt]: [vt],
    [Xa]: [Xa],
    [is]: [is],
    [Fr]: [Fr],
    [ro]: [ro],
    [ys]: [ys],
    [Be]: [Be],
    [Co]: [Co],
    [Ai]: [Ai],
    [za]: [Ge, za, Le],
    [Ia]: [Ia],
    [gt]: [gt],
    [ko]: [ko],
    [bs]: [bs],
    [ui]: [cs, Vo, ui],
    [ei]: [ei],
    [Yi]: [Yi],
    [Oo]: [Oo],
    [Eo]: [Eo],
    [hr]: [hr],
    [ca]: [ca],
    784: [784],
    [dn]: [dn],
    [ts]: [ts],
    [vo]: [vo],
    [Lo]: [Lo],
    [En]: [Ji, En],
    [en]: [en],
    [hs]: [hs],
    [Mt]: [Mt],
    [Gn]: [Gn],
    [ni]: [ni],
    [Fi]: [Pt, Fi],
    [Hn]: [no, Hn],
    [zn]: [zn],
    [xo]: [xo],
    [zo]: [zo],
    [ki]: [ki],
    [Wo]: [Wo],
    [ii]: [ii],
    [un]: [un],
    [On]: [On],
    [Ne]: [Ne],
    [Ve]: [Ve],
    [zr]: [zr],
    [pn]: [pn],
    [wa]: [wa],
    [Cn]: [Cn],
    [Le]: [Ge, za, Le],
    [Ye]: [Ye],
    [gr]: [wr, gr],
    [Yt]: [Yt],
    [Xo]: [Xo],
    [Bi]: [qa, Bi],
    809: [809],
    [Xt]: [Xt],
    [ao]: [ao],
    [zi]: [zi],
    [Do]: [Do],
    [St]: [St],
    [Ir]: [Ir, vr],
    [Wn]: [cs, Wn],
    [it]: [it],
    [vr]: [Ir, vr],
    [Ln]: [Ln],
    [rn]: [rn],
    [ps]: [qa, ps],
    [An]: [701, An],
    [Ka]: [Ka],
  },
  hH = [Ae, la, po, st];
function gH(e, t) {
  let n = e.filter((e) => hH.findIndex((t) => t == e.nTagId) == -1),
    r = [],
    i = [],
    a = n.length,
    o = 0,
    s = 0;
  for (; o < n.length && a + s > t && s < t;) {
    let e = n[o].nTagId;
    (i.findIndex((t) => t == e) == -1 &&
      (r.push({
        nTagId: e,
        nWeight: n[o].nWeight,
        nPreSelectionWeight: n[o].nPreSelectionWeight,
      }),
      mH[e] &&
        mH[e].forEach((e) => {
          i.push(e);
        }),
      s++),
      o++,
      a--);
  }
  for (; o < n.length && s < t;)
    (r.push({
      nTagId: n[o].nTagId,
      nWeight: n[o].nWeight,
      nPreSelectionWeight: n[o].nPreSelectionWeight,
    }),
      o++,
      s++);
  return r;
}
function _H() {
  return rt.country_code.toLowerCase() === `cn`;
}
function vH(e, t, n) {
  let { rgRankings: r, nTotalResultCount: i } = bH(e, t),
    a = new Set(r.map((e) => e.appid).slice(0, n));
  return {
    rgResults: e
      .GetRawStats()
      .playtime_stats.games.filter((e) => a.has(e.appid))
      .sort((e, n) => {
        let r = `${t}_rank`;
        return (e.playtime_ranks[r] ?? 0) - (n.playtime_ranks[r] ?? 0);
      }),
    nTotalResultCount: i,
  };
}
function yH(e, t, n, r) {
  let { rgRankings: i, nTotalResultCount: a } = bH(e, t, n);
  return {
    nTotalResultCount: a,
    rgResults: i.map((n) => {
      if (n.relative_playtime_percentagex100) {
        let e = 0;
        return (
          (e =
            t == `demo` || t == `playtest`
              ? r > 0
                ? (n.relative_playtime_percentagex100 * 100 * 100) / r
                : 0
              : n.relative_playtime_percentagex100),
          { appid: n.appid, parent_appid: n.parent_appid, nPercentagex100: e }
        );
      }
      let i = e
        .GetRawStats()
        .playtime_stats.games.findIndex((e) => e.appid == n.appid);
      if (i >= 0) {
        let a = xH(t, r, e.GetRawStats().playtime_stats.games[i]);
        return {
          appid: n.appid,
          parent_appid: n.parent_appid,
          nPercentagex100: a,
        };
      }
      return { appid: n.appid };
    }),
  };
}
function bH(e, t, n) {
  if (t == `demo` || t == `playtest`) {
    let r = t == `demo` ? e.GetDemoByPlaytime() : e.GetPlaytestByPlaytime();
    return {
      nTotalResultCount: r.length,
      rgRankings: r
        .slice(0, n)
        .map((e) => ({
          appid: e.appid,
          parent_appid: e.parent_appid,
          relative_playtime_percentagex100: e.total_playtime_percentagex100,
        })),
    };
  }
  let r = `${t}_ranking`,
    i = e.GetRawStats().playtime_stats.game_rankings[r]?.rankings;
  return {
    nTotalResultCount: i?.length ?? 0,
    rgRankings: i?.slice(0, n) || [],
  };
}
function xH(e, t, n) {
  let r = n.stats.total_playtime_percentagex100,
    i = `${e}_playtime_percentagex100`,
    a = n.relative_game_stats[i] ?? 0;
  return Je((a * r) / t, 0, 1e4);
}
function SH(e, t) {
  let n = () => !0;
  if (!e.playtime_stats?.game_summary) return [];
  switch (t) {
    case `overall`:
      n = (e) => !e.demo && !e.playtest;
      break;
    case `vr`:
      n = (e) => !e.demo && !e.playtest && e.played_vr;
      break;
    case `deck`:
      n = (e) => !e.demo && !e.playtest && e.played_deck;
      break;
    case `controller`:
      n = (e) => !e.demo && !e.playtest && e.played_controller;
      break;
    case `linux`:
      n = (e) => !e.demo && !e.playtest && e.played_linux;
      break;
    case `mac`:
      n = (e) => !e.demo && !e.playtest && e.played_mac;
      break;
    case `windows`:
      n = (e) => !e.demo && !e.playtest && e.played_windows;
      break;
    case `demo`:
      n = (e) => !!e.demo;
      break;
    case `playtest`:
      n = (e) => !!e.playtest;
  }
  return e.playtime_stats.game_summary.filter(n);
}
function CH(e, t) {
  if (t != `demo` && t != `playtest`) {
    let n = `${t === `overall` ? `total` : t}_sessions`,
      r = `${t === `overall` ? `total` : t}_playtime_percentagex100`;
    return {
      nTotalGames: SH(e, t).length || 0,
      nTotalSessions: e.playtime_stats.total_stats[n] || 0,
      nTotalPercentage: e.playtime_stats.total_stats[r] || 0,
    };
  }
  {
    let n = SH(e, t);
    return {
      nTotalGames: n.length,
      nTotalSessions: n
        .map((e) => e.total_sessions)
        .reduce((e, t) => (e ?? 0) + (t ?? 0), 0),
      nTotalPercentage: n
        .map((e) => e.total_playtime_percentagex100)
        .reduce((e, t) => (e ?? 0) + (t ?? 0), 0),
    };
  }
}
var wH = `percentMonthOfOverall`,
  TH = `percentOtherGamesRelativeMonth`;
function EH(e, t, n, r) {
  let i = new Set(n),
    a = t
      .map((e, t) => {
        let n = new Date((e.rtime_month + 86400) * 1e3),
          a = {},
          o = {},
          s = {},
          c = {},
          l = e.stats.total_playtime_percentagex100,
          u = 0,
          d = 0;
        return (
          [...e.game_summary]
            .sort(
              (e, t) =>
                (t?.total_playtime_percentagex100 ?? 0) -
                (e?.total_playtime_percentagex100 ?? 0),
            )
            .filter((e) => r.has(e.appid))
            .forEach((e, t) => {
              let { appid: n } = e,
                l = e.total_playtime_percentagex100,
                f = e.relative_playtime_percentagex100;
              t < 6 && typeof f == `number` && f > 100 && i.has(n)
                ? ((a[n] = l), (o[n] = f), (u += l), (d += f))
                : (s[n] = f);
              let p = r.get(n).total_playtime_percentagex100 ?? 1;
              c[n] = (l / p) * 1e4;
            }),
          (a[wH] = l),
          (a[TH] = l - u),
          (o[TH] = 1e4 - d),
          {
            date: n,
            topPlayedPercentBreakdownPerMonth: a,
            topPlayedRelativePercentBreakdownForMonth: o,
            otherPlayedPercentBreakdownForMonth: s,
            playPercentBreakdownForGame: c,
          }
        );
      })
      .sort((e, t) => e.date.getTime() - t.date.getTime()),
    o = [];
  for (let t = 0; t < 12; ++t) {
    let n = a.findIndex(
      (n) => n.date.getUTCMonth() === t && n.date.getUTCFullYear() === e,
    );
    n === -1
      ? o.push({
          date: new Date(Date.UTC(e, t, 15)),
          topPlayedPercentBreakdownPerMonth: {},
          topPlayedRelativePercentBreakdownForMonth: {},
          otherPlayedPercentBreakdownForMonth: {},
          playPercentBreakdownForGame: {},
        })
      : o.push(a[n]);
  }
  return o;
}
function DH(e) {
  e.game_summary?.length &&
    Fo(
      e.total_stats &&
        Array.isArray(e.games) &&
        Array.isArray(e.months) &&
        typeof e.demos_played == `number` &&
        e.game_rankings &&
        typeof e.playtests_played == `number` &&
        (typeof e.substantial == `boolean` ||
          typeof e.substantial == `number`) &&
        e.by_numbers,
      `YIR playtime stats missing expected fields!`,
    );
}
function OH(e) {
  return (
    Fo(
      typeof e.account_id == `number` &&
        typeof e.year == `number` &&
        typeof e.privacy_state == `number` &&
        e.playtime_stats,
      `YIR stats missing expected fields!`,
    ),
    e.playtime_stats && DH(e.playtime_stats),
    e
  );
}
function kH(e) {
  if (typeof e?.new_releases == `number`)
    return (
      Fo(
        typeof e.recent_releases == `number` &&
          typeof e.classic_releases == `number` &&
          typeof e.recent_cutoff_year == `number`,
        `YIR global playtime distribution missing expected fields!`,
      ),
      e
    );
}
function AH(e) {
  if (typeof e?.games_played == `number`)
    return (
      Fo(
        typeof e.unlocked_achievements == `number` &&
          typeof e.longest_streak == `number`,
        `YIR previous year summary missing expected fields!`,
      ),
      e
    );
}
var jH = class {
    m_allStats;
    m_steamid;
    m_mapGameSummary = new Map();
    m_mapGameStats = new Map();
    m_globalPercentiles;
    m_globalGameplayDistribution;
    m_previousYearSummary;
    m_rgTopGamesShown = [];
    m_rgTopGameShownAppIDs = [];
    m_rgMonthChartData = [];
    m_rgTopGameMonthsChartIdsAndRanks = [];
    m_rgAggregateTagData = [];
    m_rgDemoByPlaytime = [];
    m_rgPlaytestByPlaytime = [];
    GetRawStats() {
      return this.m_allStats;
    }
    GetDemoByPlaytime() {
      return this.m_rgDemoByPlaytime;
    }
    BHasDemoByPlaytime() {
      return this.m_rgDemoByPlaytime.length > 0;
    }
    GetPlaytestByPlaytime() {
      return this.m_rgPlaytestByPlaytime;
    }
    BHasPlaytestByPlaytime() {
      return this.m_rgPlaytestByPlaytime.length > 0;
    }
    BHasPlaytimeData() {
      return this.m_allStats.playtime_stats.game_summary.length > 0;
    }
    GetPlayTimeStats() {
      return this.m_allStats.playtime_stats;
    }
    GetSteamID() {
      return this.m_steamid;
    }
    GetYear() {
      return this.m_allStats.year;
    }
    GetGameSummaryForApp(e) {
      return this.m_mapGameSummary.get(e);
    }
    GetAccountID() {
      return new kt(this.m_steamid).GetAccountID();
    }
    GetFilteredGameSummary() {
      return this.m_allStats.playtime_stats.game_summary.filter(
        (e) => !e.demo && !e.playtest,
      );
    }
    GetGameStats(e) {
      return this.m_mapGameStats.get(e);
    }
    GetTopGamesShown() {
      return this.m_rgTopGamesShown;
    }
    GetTopGamesShownAppIDs() {
      return this.m_rgTopGameShownAppIDs;
    }
    GetChartMonthlyData() {
      return this.m_rgMonthChartData;
    }
    GetTopGameIdsAndRanks() {
      return this.m_rgTopGameMonthsChartIdsAndRanks;
    }
    GetGlobalPercentiles() {
      return this.m_globalPercentiles;
    }
    GetGlobalGameplayDistribition() {
      return this.m_globalGameplayDistribution;
    }
    GetPreviousYearSummary() {
      return this.m_previousYearSummary;
    }
    GetChartMonthlyDataForApp(e) {
      return {
        gameChartData: this.m_rgMonthChartData.map((t) => ({
          date: t.date,
          percent: t.playPercentBreakdownForGame[e],
        })),
        rank: this.m_rgTopGameMonthsChartIdsAndRanks.find((t) => t.appid === e)
          ?.rank,
      };
    }
    GetUserAggregateTagData() {
      return this.m_rgAggregateTagData;
    }
    constructor(e, t, n, r) {
      let i = OH(e);
      if (
        ((this.m_allStats = i),
        (this.m_steamid = kt
          .InitFromAccountID(i.account_id, ft.EUNIVERSE)
          .ConvertTo64BitString()),
        (this.m_globalPercentiles = t ?? void 0),
        (this.m_globalGameplayDistribution = kH(n)),
        (this.m_previousYearSummary = AH(r)),
        this.BHasPlaytimeData() &&
          i.playtime_stats.total_stats.total_sessions > 0)
      ) {
        (i.playtime_stats.game_summary.forEach((e) => {
          (Fo(
            !this.m_mapGameSummary.has(e.appid),
            `Found at least two record of appid ${e.appid} in stats.playtime_stats.game_summary`,
          ),
            this.m_mapGameSummary.set(e.appid, e));
        }),
          i.playtime_stats.games.forEach((e) => {
            (Fo(
              !this.m_mapGameStats.has(e.appid),
              `Found at least two record of appid ${e.appid} in stats.playtime_stats.games`,
            ),
              this.m_mapGameStats.set(e.appid, e));
          }));
        let { rgResults: e } = vH(this, `overall`, 8),
          t = e.map((e) => e.appid);
        ((this.m_rgTopGameMonthsChartIdsAndRanks = t.map((e, t) => ({
          appid: e,
          rank: t,
        }))),
          (this.m_rgTopGamesShown = e.slice(0, 5)),
          (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
            (e) => e.appid,
          )),
          (this.m_rgMonthChartData = EH(
            this.GetYear(),
            this.GetPlayTimeStats().months,
            t,
            this.m_mapGameSummary,
          )));
      }
      if (
        i.playtime_stats.tag_stats &&
        i.playtime_stats.tag_stats.stats.length > 0
      ) {
        let e = i.playtime_stats.tag_stats.stats.map((e) => ({
          nTagId: e.tag_id,
          nWeight: parseFloat(e.tag_weight.toString()),
          nPreSelectionWeight: parseFloat(
            e.tag_weight_pre_selection
              ? e.tag_weight_pre_selection.toString()
              : `0.0`,
          ),
        }));
        this.m_rgAggregateTagData = gH(e, 6);
      }
      i &&
        ((this.m_rgDemoByPlaytime = i.playtime_stats.game_summary
          .filter((e) => !!e.demo)
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )),
        (this.m_rgPlaytestByPlaytime = i.playtime_stats.game_summary
          .filter((e) => !!e.playtest)
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )));
    }
    GetGameAgeCounts(e) {
      let t = this.m_allStats.playtime_stats?.game_summary || [];
      if (e.length == 0) return [t.length];
      let n = Date.UTC(this.GetYear(), 11, 15) / 1e3,
        r = Array(e.length + 1).fill(0);
      for (let i of t) {
        let t = i.rtime_release_date || n;
        if (t >= n) {
          r[0] += i.total_playtime_percentagex100;
          continue;
        }
        let a = (n - t) / Qr.PerYear,
          o = e.findIndex((e) => a < e);
        o >= 0
          ? (r[o] += i.total_playtime_percentagex100)
          : (r[r.length - 1] += i.total_playtime_percentagex100);
      }
      return r;
    }
  },
  MH = `0px 0px 100% 0px`,
  NH = e(m(), 1);
function PH(e, t) {
  let {
    stats: n,
    percentiles: r,
    distribution: i,
    previous_year_summary: a,
  } = t;
  return {
    eResult: e,
    privacy_state: n?.privacy_state,
    stats: n,
    percentiles: r,
    distribution: i,
    previous_year_summary: a,
  };
}
function FH(e, t) {
  return [`YIR`, `Get`, e, t];
}
function IH(e, t, n, r = {}) {
  return {
    queryKey: FH(t, n),
    queryFn: async () => {
      let i = await pH.GetUserYearInReview(e, {
        steamid: t,
        year: n,
        fetch_previous_year_summary: !0,
        access_source: r.eAccessSource,
        force_regenerate: r.bForceRegenerate,
      });
      return PH(i.GetEResult(), i.Body().toObject());
    },
    staleTime: 1 / 0,
  };
}
function LH(e, t) {
  return g(IH(Da(), e, t));
}
function RH(e, t) {
  let { data: n, isLoading: r } = LH(e, t),
    {
      eResult: i,
      stats: a,
      percentiles: o,
      distribution: s,
      previous_year_summary: c,
    } = n ?? {};
  return {
    userYearInReview: B.useMemo(() => {
      if (i == 1 && a) return new jH(a, o, s, c);
    }, [i, a, o, s, c]),
    isLoading: r,
  };
}
function zH(e, t) {
  return LH(e, t).data?.privacy_state;
}
function BH(e, t) {
  let n = Da(),
    r = u();
  return h({
    mutationFn: async (r) => {
      let i = await pH.SetUserSharingPermissions(n, {
        steamid: e,
        year: t,
        privacy_state: r,
      });
      return {
        eResult: i.GetEResult(),
        privacy_state: i.Body().privacy_state(),
      };
    },
    onSuccess: ({ eResult: n, privacy_state: i }) => {
      n == 1 &&
        i !== void 0 &&
        r.setQueryData(FH(e, t), (e) => e && { ...e, privacy_state: i });
    },
  });
}
function VH(e, t, n) {
  return {
    steamid: t,
    nYear: n,
    achievements: new NH.default((r) => WH(e, t, n, r), { cache: !1 }),
    screenshots: new NH.default((r) => QH(e, t, n, r), { cache: !1 }),
  };
}
var HH = B.createContext(void 0);
function UH() {
  let e = B.useContext(HH);
  return (
    Fo(e, `Cannot use YIR data loaders outside of Steam Replay page!`), e
  );
}
async function WH(e, t, n, r) {
  try {
    let i = await pH.GetUserYearAchievements(e, {
      steamid: t,
      year: n,
      appids: [...r],
      total_only: !1,
    });
    if (i.GetEResult() == 1) {
      let { game_achievements: e = [] } = i.Body().toObject(),
        t = e.reduce((e, t) => ((e[t.appid] = t), e), {});
      return r.map((e) => {
        let n = t[e];
        return {
          ...n,
          appid: e,
          achievements: (n?.achievements ?? []).map((e) => ({
            ...e,
            achievement_name_internal: (
              e.achievement_name_internal ?? ``
            ).toLowerCase(),
          })),
        };
      });
    }
    console.error(`GetUserYearAchievements failed: ` + i.GetEResult());
  } catch (e) {
    console.error(`GetUserYearAchievements failed`, e);
  }
  return r.map((e) => ({ appid: e, achievements: [] }));
}
function GH(e, t) {
  return {
    queryKey: [`YIR`, `achievements`, `apps`, e.steamid, e.nYear, t],
    queryFn: () => e.achievements.load(t),
    staleTime: 1 / 0,
  };
}
function KH(e) {
  let t = UH();
  p({ queries: e.GetTopGamesShownAppIDs().map((e) => GH(t, e)) });
}
function qH(e) {
  let { data: t } = g({ ...GH(UH(), e), enabled: !!e });
  return t;
}
function JH(e, t, n) {
  return {
    queryKey: [`YIR`, `achievements`, `display`, t, n],
    queryFn: async () => {
      try {
        let r = await os.GetGameAchievements(e, { appid: t, language: n });
        if (r.GetEResult() == 1)
          return (r.Body().toObject().achievements ?? []).map((e) => ({
            ...e,
            internal_name: (e.internal_name ?? ``).toLowerCase(),
          }));
        console.error(`GetGameAchievements failed: ` + r.GetEResult());
      } catch (e) {
        console.error(`GetGameAchievements failed`, e);
      }
      return [];
    },
    staleTime: 1 / 0,
  };
}
function YH(e, t = !0) {
  let n = Da(),
    { data: r } = g({
      ...JH(n, e, ft.LANGUAGE || `english`),
      enabled: t && !!e,
    });
  return r;
}
function XH(e) {
  let t = YH(e);
  return B.useMemo(() => {
    let e = new Map();
    for (let n of t ?? []) n.internal_name && e.set(n.internal_name, n);
    return e;
  }, [t]);
}
function ZH(e) {
  return YH(e)?.length ?? 0;
}
async function QH(e, t, n, r) {
  let i = await pH.GetUserYearScreenshots(e, {
    steamid: t,
    year: n,
    appids: [...r],
  });
  if (!i.BSuccess()) throw `Load Screenshots failed: ${i.GetErrorMessage()}`;
  let { apps: a = [] } = i.Body().toObject(),
    o = a.reduce((e, t) => ((e[t.appid] = t), e), {});
  return r.map((e) => o[e]?.screenshots);
}
function $H(e, t) {
  return {
    queryKey: [`YIR`, `Screenshots`, e.steamid, e.nYear, t],
    queryFn: async () => (await e.screenshots.load(t)) ?? null,
    staleTime: 1 / 0,
  };
}
function eU(e) {
  let { data: t } = g({ ...$H(UH(), e), enabled: !!e });
  return t ?? void 0;
}
function tU(e, t, n, r) {
  return {
    queryKey: [`YIR`, `Friends`, t, n, r],
    queryFn: async () => {
      let i = await pH.GetFriendsSharedYearInReview(e, {
        steamid: t,
        year: n,
        return_private: r,
      });
      if (i.GetEResult() != 1)
        throw `error friend sharing information ` + i.GetEResult();
      let { friend_shares: a = [] } = i.Body().toObject();
      return a
        .filter((e) => !!e.steamid)
        .map(
          ({
            steamid: e,
            privacy_state: t,
            rt_privacy_updated: n,
            privacy_override: r,
          }) => ({
            steamid: e,
            privacy_state: t ?? 0,
            rt_privacy_updated: n ?? 0,
            privacy_override: !!r,
          }),
        );
    },
    staleTime: 1 / 0,
  };
}
function nU(e, t) {
  return g(tU(Da(), e, t, rt.is_support));
}
function rU(e, t) {
  return {
    queryKey: [`YIR`, `FamilyGroup`, t],
    queryFn: async () => {
      let n = await Ws.GetFamilyGroupForUser(e, {
        steamid: t,
        include_family_group_response: !0,
      });
      if (n.GetEResult() != 1)
        throw `error loading family group ` + n.GetEResult();
      return n.Body().toObject();
    },
    staleTime: 1 / 0,
  };
}
function iU(e) {
  return g(rU(Da(), e));
}
function aU(e, t, n, r) {
  return {
    queryKey: [`YIR`, `ShareImages`, t, n, r],
    queryFn: async () => {
      let i = await pH.GetUserYearInReviewShareImage(e, {
        steamid: t,
        year: n,
        language: r,
      });
      if (i.GetEResult() != 1)
        throw `Load social images failed: ${i.GetErrorMessage()}`;
      return i.Body().toObject().images ?? [];
    },
    staleTime: 1 / 0,
  };
}
function oU(e, t, n) {
  return g(aU(Da(), e, t, n));
}
var sU = B.createContext(void 0);
function cU() {
  let e = B.useContext(sU);
  return (Fo(e, `Cannot use YIR page data outside of Steam Replay page!`), e);
}
function lU(e) {
  return e?.success === 1 || e?.success === 15;
}
function uU(e) {
  let t = e ? { appid: e } : void 0,
    { data: n, isLoading: r } = Ua(t),
    { data: i, isLoading: a } = fr(t);
  return {
    item: B.useMemo(
      () => (lU(n) ? { info: n, assets: i ?? null } : void 0),
      [n, i],
    ),
    bLoading: r || a,
  };
}
function dU(e, t = !1) {
  return g(fU(u(), wi(), e, t));
}
function fU(e, t, n, r = !1) {
  return {
    queryKey: [`YIR`, `storeitems`, n, r],
    queryFn: async () => {
      let i = await Promise.all(
          n.map(async (n) => {
            let [i, a] = await Promise.allSettled([
              e.fetchQuery(Wi(t, { appid: n })),
              e.fetchQuery(Qa(t, { appid: n })),
              r && e.fetchQuery(gi(t, { appid: n })),
            ]);
            return i.status === `rejected` || !lU(i.value)
              ? null
              : {
                  appid: n,
                  info: i.value,
                  assets: a.status === `fulfilled` ? a.value : null,
                };
          }),
        ),
        a = new Map();
      for (let e of i) e && a.set(e.appid, e);
      if (a.size === 0 && n.length > 0)
        throw Error(`Error loading store items!`);
      return a;
    },
    staleTime: 0,
  };
}
var q = {};
((q.arabic = () =>
  j(() => import(`./yearinreview_2022_arabic.js`), [], import.meta.url)),
  (q.brazilian = () =>
    j(() => import(`./yearinreview_2022_brazilian.js`), [], import.meta.url)),
  (q.bulgarian = () =>
    j(() => import(`./yearinreview_2022_bulgarian.js`), [], import.meta.url)),
  (q.czech = () =>
    j(() => import(`./yearinreview_2022_czech.js`), [], import.meta.url)),
  (q.danish = () =>
    j(() => import(`./yearinreview_2022_danish.js`), [], import.meta.url)),
  (q.dutch = () =>
    j(() => import(`./yearinreview_2022_dutch.js`), [], import.meta.url)),
  (q.english = () =>
    j(() => import(`./yearinreview_2022_english.js`), [], import.meta.url)),
  (q.finnish = () =>
    j(() => import(`./yearinreview_2022_finnish.js`), [], import.meta.url)),
  (q.french = () =>
    j(() => import(`./yearinreview_2022_french.js`), [], import.meta.url)),
  (q.german = () =>
    j(() => import(`./yearinreview_2022_german.js`), [], import.meta.url)),
  (q.greek = () =>
    j(() => import(`./yearinreview_2022_greek.js`), [], import.meta.url)),
  (q.hungarian = () =>
    j(() => import(`./yearinreview_2022_hungarian.js`), [], import.meta.url)),
  (q.indonesian = () =>
    j(() => import(`./yearinreview_2022_indonesian.js`), [], import.meta.url)),
  (q.italian = () =>
    j(() => import(`./yearinreview_2022_italian.js`), [], import.meta.url)),
  (q.japanese = () =>
    j(() => import(`./yearinreview_2022_japanese.js`), [], import.meta.url)),
  (q.koreana = () =>
    j(() => import(`./yearinreview_2022_koreana.js`), [], import.meta.url)),
  (q.latam = () =>
    j(() => import(`./yearinreview_2022_latam.js`), [], import.meta.url)),
  (q.malay = () =>
    j(() => import(`./yearinreview_2022_malay.js`), [], import.meta.url)),
  (q.norwegian = () =>
    j(() => import(`./yearinreview_2022_norwegian.js`), [], import.meta.url)),
  (q.polish = () =>
    j(() => import(`./yearinreview_2022_polish.js`), [], import.meta.url)),
  (q.portuguese = () =>
    j(() => import(`./yearinreview_2022_portuguese.js`), [], import.meta.url)),
  (q.romanian = () =>
    j(() => import(`./yearinreview_2022_romanian.js`), [], import.meta.url)),
  (q.russian = () =>
    j(() => import(`./yearinreview_2022_russian.js`), [], import.meta.url)),
  (q.sc_schinese = () =>
    j(() => import(`./yearinreview_2022_sc_schinese.js`), [], import.meta.url)),
  (q.schinese = () =>
    j(() => import(`./yearinreview_2022_schinese.js`), [], import.meta.url)),
  (q.spanish = () =>
    j(() => import(`./yearinreview_2022_spanish.js`), [], import.meta.url)),
  (q.swedish = () =>
    j(() => import(`./yearinreview_2022_swedish.js`), [], import.meta.url)),
  (q.tchinese = () =>
    j(() => import(`./yearinreview_2022_tchinese.js`), [], import.meta.url)),
  (q.thai = () =>
    j(() => import(`./yearinreview_2022_thai.js`), [], import.meta.url)),
  (q.turkish = () =>
    j(() => import(`./yearinreview_2022_turkish.js`), [], import.meta.url)),
  (q.ukrainian = () =>
    j(() => import(`./yearinreview_2022_ukrainian.js`), [], import.meta.url)),
  (q.vietnamese = () =>
    j(() => import(`./yearinreview_2022_vietnamese.js`), [], import.meta.url)));
async function pU(e) {
  if (q[e]) return await q[e]();
}
var mU = Ee(pU),
  J = {};
((J.arabic = () =>
  j(() => import(`./yearinreview_2023_arabic.js`), [], import.meta.url)),
  (J.brazilian = () =>
    j(() => import(`./yearinreview_2023_brazilian.js`), [], import.meta.url)),
  (J.bulgarian = () =>
    j(() => import(`./yearinreview_2023_bulgarian.js`), [], import.meta.url)),
  (J.czech = () =>
    j(() => import(`./yearinreview_2023_czech.js`), [], import.meta.url)),
  (J.danish = () =>
    j(() => import(`./yearinreview_2023_danish.js`), [], import.meta.url)),
  (J.dutch = () =>
    j(() => import(`./yearinreview_2023_dutch.js`), [], import.meta.url)),
  (J.english = () =>
    j(() => import(`./yearinreview_2023_english.js`), [], import.meta.url)),
  (J.finnish = () =>
    j(() => import(`./yearinreview_2023_finnish.js`), [], import.meta.url)),
  (J.french = () =>
    j(() => import(`./yearinreview_2023_french.js`), [], import.meta.url)),
  (J.german = () =>
    j(() => import(`./yearinreview_2023_german.js`), [], import.meta.url)),
  (J.greek = () =>
    j(() => import(`./yearinreview_2023_greek.js`), [], import.meta.url)),
  (J.hungarian = () =>
    j(() => import(`./yearinreview_2023_hungarian.js`), [], import.meta.url)),
  (J.indonesian = () =>
    j(() => import(`./yearinreview_2023_indonesian.js`), [], import.meta.url)),
  (J.italian = () =>
    j(() => import(`./yearinreview_2023_italian.js`), [], import.meta.url)),
  (J.japanese = () =>
    j(() => import(`./yearinreview_2023_japanese.js`), [], import.meta.url)),
  (J.koreana = () =>
    j(() => import(`./yearinreview_2023_koreana.js`), [], import.meta.url)),
  (J.latam = () =>
    j(() => import(`./yearinreview_2023_latam.js`), [], import.meta.url)),
  (J.malay = () =>
    j(() => import(`./yearinreview_2023_malay.js`), [], import.meta.url)),
  (J.norwegian = () =>
    j(() => import(`./yearinreview_2023_norwegian.js`), [], import.meta.url)),
  (J.polish = () =>
    j(() => import(`./yearinreview_2023_polish.js`), [], import.meta.url)),
  (J.portuguese = () =>
    j(() => import(`./yearinreview_2023_portuguese.js`), [], import.meta.url)),
  (J.romanian = () =>
    j(() => import(`./yearinreview_2023_romanian.js`), [], import.meta.url)),
  (J.russian = () =>
    j(() => import(`./yearinreview_2023_russian.js`), [], import.meta.url)),
  (J.sc_schinese = () =>
    j(() => import(`./yearinreview_2023_sc_schinese.js`), [], import.meta.url)),
  (J.schinese = () =>
    j(() => import(`./yearinreview_2023_schinese.js`), [], import.meta.url)),
  (J.spanish = () =>
    j(() => import(`./yearinreview_2023_spanish.js`), [], import.meta.url)),
  (J.swedish = () =>
    j(() => import(`./yearinreview_2023_swedish.js`), [], import.meta.url)),
  (J.tchinese = () =>
    j(() => import(`./yearinreview_2023_tchinese.js`), [], import.meta.url)),
  (J.thai = () =>
    j(() => import(`./yearinreview_2023_thai.js`), [], import.meta.url)),
  (J.turkish = () =>
    j(() => import(`./yearinreview_2023_turkish.js`), [], import.meta.url)),
  (J.ukrainian = () =>
    j(() => import(`./yearinreview_2023_ukrainian.js`), [], import.meta.url)),
  (J.vietnamese = () =>
    j(() => import(`./yearinreview_2023_vietnamese.js`), [], import.meta.url)));
async function hU(e) {
  if (J[e]) return await J[e]();
}
var gU = Ee(hU),
  Y = {};
((Y.arabic = () =>
  j(() => import(`./yearinreview_2024_arabic.js`), [], import.meta.url)),
  (Y.brazilian = () =>
    j(() => import(`./yearinreview_2024_brazilian.js`), [], import.meta.url)),
  (Y.bulgarian = () =>
    j(() => import(`./yearinreview_2024_bulgarian.js`), [], import.meta.url)),
  (Y.czech = () =>
    j(() => import(`./yearinreview_2024_czech.js`), [], import.meta.url)),
  (Y.danish = () =>
    j(() => import(`./yearinreview_2024_danish.js`), [], import.meta.url)),
  (Y.dutch = () =>
    j(() => import(`./yearinreview_2024_dutch.js`), [], import.meta.url)),
  (Y.english = () =>
    j(() => import(`./yearinreview_2024_english.js`), [], import.meta.url)),
  (Y.finnish = () =>
    j(() => import(`./yearinreview_2024_finnish.js`), [], import.meta.url)),
  (Y.french = () =>
    j(() => import(`./yearinreview_2024_french.js`), [], import.meta.url)),
  (Y.german = () =>
    j(() => import(`./yearinreview_2024_german.js`), [], import.meta.url)),
  (Y.greek = () =>
    j(() => import(`./yearinreview_2024_greek.js`), [], import.meta.url)),
  (Y.hungarian = () =>
    j(() => import(`./yearinreview_2024_hungarian.js`), [], import.meta.url)),
  (Y.indonesian = () =>
    j(() => import(`./yearinreview_2024_indonesian.js`), [], import.meta.url)),
  (Y.italian = () =>
    j(() => import(`./yearinreview_2024_italian.js`), [], import.meta.url)),
  (Y.japanese = () =>
    j(() => import(`./yearinreview_2024_japanese.js`), [], import.meta.url)),
  (Y.koreana = () =>
    j(() => import(`./yearinreview_2024_koreana.js`), [], import.meta.url)),
  (Y.latam = () =>
    j(() => import(`./yearinreview_2024_latam.js`), [], import.meta.url)),
  (Y.malay = () =>
    j(() => import(`./yearinreview_2024_malay.js`), [], import.meta.url)),
  (Y.norwegian = () =>
    j(() => import(`./yearinreview_2024_norwegian.js`), [], import.meta.url)),
  (Y.polish = () =>
    j(() => import(`./yearinreview_2024_polish.js`), [], import.meta.url)),
  (Y.portuguese = () =>
    j(() => import(`./yearinreview_2024_portuguese.js`), [], import.meta.url)),
  (Y.romanian = () =>
    j(() => import(`./yearinreview_2024_romanian.js`), [], import.meta.url)),
  (Y.russian = () =>
    j(() => import(`./yearinreview_2024_russian.js`), [], import.meta.url)),
  (Y.sc_schinese = () =>
    j(() => import(`./yearinreview_2024_sc_schinese.js`), [], import.meta.url)),
  (Y.schinese = () =>
    j(() => import(`./yearinreview_2024_schinese.js`), [], import.meta.url)),
  (Y.spanish = () =>
    j(() => import(`./yearinreview_2024_spanish.js`), [], import.meta.url)),
  (Y.swedish = () =>
    j(() => import(`./yearinreview_2024_swedish.js`), [], import.meta.url)),
  (Y.tchinese = () =>
    j(() => import(`./yearinreview_2024_tchinese.js`), [], import.meta.url)),
  (Y.thai = () =>
    j(() => import(`./yearinreview_2024_thai.js`), [], import.meta.url)),
  (Y.turkish = () =>
    j(() => import(`./yearinreview_2024_turkish.js`), [], import.meta.url)),
  (Y.ukrainian = () =>
    j(() => import(`./yearinreview_2024_ukrainian.js`), [], import.meta.url)),
  (Y.vietnamese = () =>
    j(() => import(`./yearinreview_2024_vietnamese.js`), [], import.meta.url)));
async function _U(e) {
  if (Y[e]) return await Y[e]();
}
var vU = Ee(_U),
  X = {};
((X.arabic = () =>
  j(() => import(`./yearinreview_2025_arabic.js`), [], import.meta.url)),
  (X.brazilian = () =>
    j(() => import(`./yearinreview_2025_brazilian.js`), [], import.meta.url)),
  (X.bulgarian = () =>
    j(() => import(`./yearinreview_2025_bulgarian.js`), [], import.meta.url)),
  (X.czech = () =>
    j(() => import(`./yearinreview_2025_czech.js`), [], import.meta.url)),
  (X.danish = () =>
    j(() => import(`./yearinreview_2025_danish.js`), [], import.meta.url)),
  (X.dutch = () =>
    j(() => import(`./yearinreview_2025_dutch.js`), [], import.meta.url)),
  (X.english = () =>
    j(() => import(`./yearinreview_2025_english.js`), [], import.meta.url)),
  (X.finnish = () =>
    j(() => import(`./yearinreview_2025_finnish.js`), [], import.meta.url)),
  (X.french = () =>
    j(() => import(`./yearinreview_2025_french.js`), [], import.meta.url)),
  (X.german = () =>
    j(() => import(`./yearinreview_2025_german.js`), [], import.meta.url)),
  (X.greek = () =>
    j(() => import(`./yearinreview_2025_greek.js`), [], import.meta.url)),
  (X.hungarian = () =>
    j(() => import(`./yearinreview_2025_hungarian.js`), [], import.meta.url)),
  (X.indonesian = () =>
    j(() => import(`./yearinreview_2025_indonesian.js`), [], import.meta.url)),
  (X.italian = () =>
    j(() => import(`./yearinreview_2025_italian.js`), [], import.meta.url)),
  (X.japanese = () =>
    j(() => import(`./yearinreview_2025_japanese.js`), [], import.meta.url)),
  (X.koreana = () =>
    j(() => import(`./yearinreview_2025_koreana.js`), [], import.meta.url)),
  (X.latam = () =>
    j(() => import(`./yearinreview_2025_latam.js`), [], import.meta.url)),
  (X.malay = () =>
    j(() => import(`./yearinreview_2025_malay.js`), [], import.meta.url)),
  (X.norwegian = () =>
    j(() => import(`./yearinreview_2025_norwegian.js`), [], import.meta.url)),
  (X.polish = () =>
    j(() => import(`./yearinreview_2025_polish.js`), [], import.meta.url)),
  (X.portuguese = () =>
    j(() => import(`./yearinreview_2025_portuguese.js`), [], import.meta.url)),
  (X.romanian = () =>
    j(() => import(`./yearinreview_2025_romanian.js`), [], import.meta.url)),
  (X.russian = () =>
    j(() => import(`./yearinreview_2025_russian.js`), [], import.meta.url)),
  (X.sc_schinese = () =>
    j(() => import(`./yearinreview_2025_sc_schinese.js`), [], import.meta.url)),
  (X.schinese = () =>
    j(() => import(`./yearinreview_2025_schinese.js`), [], import.meta.url)),
  (X.spanish = () =>
    j(() => import(`./yearinreview_2025_spanish.js`), [], import.meta.url)),
  (X.swedish = () =>
    j(() => import(`./yearinreview_2025_swedish.js`), [], import.meta.url)),
  (X.tchinese = () =>
    j(() => import(`./yearinreview_2025_tchinese.js`), [], import.meta.url)),
  (X.thai = () =>
    j(() => import(`./yearinreview_2025_thai.js`), [], import.meta.url)),
  (X.turkish = () =>
    j(() => import(`./yearinreview_2025_turkish.js`), [], import.meta.url)),
  (X.ukrainian = () =>
    j(() => import(`./yearinreview_2025_ukrainian.js`), [], import.meta.url)),
  (X.vietnamese = () =>
    j(() => import(`./yearinreview_2025_vietnamese.js`), [], import.meta.url)));
async function yU(e) {
  if (X[e]) return await X[e]();
}
var bU = Ee(yU),
  xU = new Map([
    [2022, mU],
    [2023, gU],
    [2024, vU],
    [2025, bU],
  ]);
function SU(e) {
  return xU.get(e);
}
function CU() {
  let e = rr(R),
    t = rr(mU),
    n = rr(gU),
    r = rr(vU),
    i = rr(bU);
  return e && t && n && r && i;
}
var wU = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  TU = t({
    AddToWishlist: () => ZU,
    AnimateCap: () => EW,
    Appear: () => fW,
    BackgroundImage: () => KU,
    BackgroundImageFull: () => WU,
    BadgeBarFiller: () => HW,
    BadgeBoxIntro: () => VW,
    BigNum: () => eW,
    ButtonCtn: () => PW,
    ButtonIcon: () => FW,
    CapRow: () => wW,
    CapsuleCtn: () => dW,
    ChartStuff: () => tW,
    ChartWidthHelper: () => aW,
    ContentWrapper: () => NW,
    DemoPlayDetails: () => hW,
    Disabled: () => IW,
    ElementFadeIn: () => GU,
    EvenGradient: () => HU,
    FirstPlayCtn: () => pW,
    FullWidth: () => AU,
    GameChart: () => rW,
    GameChartCtn: () => nW,
    GameChartFirstPlayed: () => iW,
    GameContentCtn: () => oW,
    GameCtn: () => sW,
    GameDetailsPopup: () => jW,
    GameItemDetails: () => cW,
    GameLink: () => XU,
    GameLinks: () => YU,
    GamePlayDetails: () => lW,
    GameTitle: () => AW,
    GameWrapper: () => LW,
    GamepadUI: () => RW,
    GraphTitle: () => xW,
    HoursPlayed: () => OU,
    InfoContainer: () => JU,
    InfoContentSpacing: () => qU,
    IntroLine: () => zU,
    LoadingCtn: () => FU,
    LongestStreak: () => TW,
    LongestStreakGamesWrapper: () => CW,
    MoreButtonContainer: () => zW,
    NumSubtitle: () => RU,
    OddGradient: () => IU,
    PieCtn: () => bW,
    PlatformChartsCtn: () => _W,
    PlatformChartsRow: () => yW,
    PlatformDetailsSetup: () => SW,
    PlatformSpacing: () => vW,
    PlaytestPlayDetails: () => gW,
    SelectedInfoCtn: () => UU,
    ShowMoreBtn: () => BW,
    SpecialFlags: () => mW,
    StandardInfoCtn: () => LU,
    StatContainer: () => $U,
    StatsGroup: () => VU,
    SteamDeckGameCapRow: () => uW,
    StreakCtn: () => DW,
    TimePlayed: () => OW,
    Title: () => BU,
    TitleLongName: () => QU,
    TopGameBlockContainer: () => PU,
    TopGameTitle: () => NU,
    TopGameTitleCtn: () => MU,
    TopGamesContainer: () => jU,
    TotalHoursContainer: () => DU,
    TotalHoursSubtitle: () => kU,
    UnavailableGame: () => kW,
    Visible: () => MW,
    default: () => UW,
    strGameDetailsTransitionTimeMS: () => EU,
  }),
  EU = `300ms`,
  DU = `wIYiBzezGYc-`,
  OU = `VnoH-uQh03Y-`,
  kU = `-NNdNMK5dTk-`,
  AU = `nFWRruBwpxI-`,
  jU = `JM6qKRW4grY-`,
  MU = `_4RT2F1qWDf0-`,
  NU = `mNRC0alPlMM-`,
  PU = `ZUs2MlmX1nw-`,
  FU = `xsI-Ph4IYTU-`,
  IU = `EunXAzl3zkY-`,
  LU = `orlaFahxAKc-`,
  RU = `ao7jCFf5gSI-`,
  zU = `GfwKvHYeK18-`,
  BU = `Y3O3VXtp-D8-`,
  VU = `XGhwjejL9wI-`,
  HU = `_9nzY-F9xpiE-`,
  UU = `_3-uTrEiiMzE-`,
  WU = `Qh0Qui4WgT0-`,
  GU = `itZDEq-F1CU-`,
  KU = `QSp4obZnVo0-`,
  qU = `_3o5wxwNyWus-`,
  JU = `idhrMs53sfk-`,
  YU = `ulgSRWu9qlw-`,
  XU = `_3zY6l-RwMbM-`,
  ZU = `mlF-EqS-dRc-`,
  QU = `FKqdvD3uF8E-`,
  $U = `XEHQVJnV1Do-`,
  eW = `Jsbe84OZILs-`,
  tW = `QJCEe-O2tKI-`,
  nW = `v6AigbmQ0CY-`,
  rW = `xPrgBVyuYEE-`,
  iW = `_1X4tYa2ADHY-`,
  aW = `AJaOL928lBE-`,
  oW = `YDlYx-AV0BQ-`,
  sW = `WWkwetmW1kk-`,
  cW = `w-Y5hex-hO4-`,
  lW = `v6qwr186rUA-`,
  uW = `AdwjekHqa-w-`,
  dW = `I9igJfhUSos-`,
  fW = `_4mSZbBPxm6s-`,
  pW = `SjRQa1Q12OA-`,
  mW = `onO-DMSltE0-`,
  hW = `qEnvz1uXbQU-`,
  gW = `pvLpzVIEyJQ-`,
  _W = `FrX7CkXY94E-`,
  vW = `MAfKrCX7pZU-`,
  yW = `_8yz-q4EfKbc-`,
  bW = `finR-g0jShM-`,
  xW = `zt5AycfIbtY-`,
  SW = `_2fuIOljIHpg-`,
  CW = `hvOxlXCSt2s-`,
  wW = `X6gvHabLLJk-`,
  TW = `mcYlyLIeBhs-`,
  EW = `c42w8bI3Dx0-`,
  DW = `yVvCXO9ZLwg-`,
  OW = `x6rpHBjxzTg-`,
  kW = `_--0ITpMloRU-`,
  AW = `h9g2oo0APag-`,
  jW = `_9tm73MPUptI-`,
  MW = `eAjysxH-TgY-`,
  NW = `eFHWwCj3bVQ-`,
  PW = `p6eqlCr2YT0-`,
  FW = `mzZt1E4LKBc-`,
  IW = `sNJz4ri3Yvk-`,
  LW = `_2y76lTJ5USE-`,
  RW = `maE92CVTDsk-`,
  zW = `z4JPVbkRELk-`,
  BW = `dUBouRPf5BM-`,
  VW = `i798-6QCweY-`,
  HW = `_6FvqHneqGds-`,
  UW = {
    strGameDetailsTransitionTimeMS: EU,
    TotalHoursContainer: DU,
    HoursPlayed: OU,
    TotalHoursSubtitle: kU,
    FullWidth: AU,
    TopGamesContainer: jU,
    TopGameTitleCtn: MU,
    TopGameTitle: NU,
    TopGameBlockContainer: PU,
    LoadingCtn: FU,
    OddGradient: IU,
    StandardInfoCtn: LU,
    NumSubtitle: RU,
    IntroLine: zU,
    Title: BU,
    StatsGroup: VU,
    EvenGradient: HU,
    SelectedInfoCtn: UU,
    BackgroundImageFull: WU,
    ElementFadeIn: GU,
    BackgroundImage: KU,
    InfoContentSpacing: qU,
    InfoContainer: JU,
    GameLinks: YU,
    GameLink: XU,
    AddToWishlist: ZU,
    TitleLongName: QU,
    StatContainer: $U,
    BigNum: eW,
    ChartStuff: tW,
    GameChartCtn: nW,
    GameChart: rW,
    GameChartFirstPlayed: iW,
    ChartWidthHelper: aW,
    GameContentCtn: oW,
    GameCtn: sW,
    GameItemDetails: cW,
    GamePlayDetails: lW,
    SteamDeckGameCapRow: uW,
    CapsuleCtn: dW,
    Appear: fW,
    FirstPlayCtn: pW,
    SpecialFlags: mW,
    DemoPlayDetails: hW,
    PlaytestPlayDetails: gW,
    PlatformChartsCtn: _W,
    PlatformSpacing: vW,
    PlatformChartsRow: yW,
    PieCtn: bW,
    GraphTitle: xW,
    PlatformDetailsSetup: SW,
    LongestStreakGamesWrapper: CW,
    CapRow: wW,
    LongestStreak: TW,
    AnimateCap: EW,
    StreakCtn: DW,
    TimePlayed: OW,
    UnavailableGame: kW,
    GameTitle: AW,
    GameDetailsPopup: jW,
    Visible: MW,
    ContentWrapper: NW,
    ButtonCtn: PW,
    ButtonIcon: FW,
    Disabled: IW,
    GameWrapper: LW,
    GamepadUI: RW,
    MoreButtonContainer: zW,
    ShowMoreBtn: BW,
    BadgeBoxIntro: VW,
    BadgeBarFiller: HW,
  },
  WW = B.createContext({
    bIsUser: !1,
    persona_name: ``,
    avatar_url: ``,
    themeStyle: {},
  });
function GW() {
  return (0, B.useContext)(WW).bIsUser;
}
function Z() {
  return (0, B.useContext)(WW).themeStyle;
}
function KW(e) {
  let t = rt.logged_in,
    n = e?.content_descriptorids ?? [],
    r = GW(),
    i = u(),
    { data: a } = Rt(),
    o = a ?? Po(i),
    s =
      !!e &&
      (n.some((e) => o.setExcludedContentDescriptors.has(e)) ||
        (!!e.appid && o.mapIgnoredApps.has(e.appid)));
  return t ? !r && s : n.length > 0;
}
function qW() {
  return (0, B.useContext)(WW).persona_name;
}
function JW() {
  let { persona_name: e, bIsUser: t } = (0, B.useContext)(WW);
  return B.useCallback((n, ...r) => Qs(R, n, t, e, ...r) ?? n, [t, e]);
}
function YW() {
  let { persona_name: e, bIsUser: t } = (0, B.useContext)(WW);
  return B.useCallback(
    (n, r, ...i) => {
      let a = SU(n);
      return a && Qs(a, r, t, e, ...i);
    },
    [t, e],
  );
}
function XW(e) {
  return e < 100
    ? R.Localize(`#YIR_Percent_Low`, `1`)
    : R.Localize(`#YIR_Percent`, Math.round(e / 100).toFixed(0));
}
function ZW() {
  return !0;
}
function QW() {
  let e = ZW(),
    t = In();
  return B.useCallback(
    (n) =>
      Se(n, { weekday: `short`, year: e ? void 0 : `numeric`, timeZone: t }),
    [e, t],
  );
}
var Q = f(),
  $W = { index: void 0, appids: [] },
  eG = B.createContext($W),
  tG = B.createContext(() => {});
function nG(e) {
  let [t, n] = B.useState($W);
  return (0, Q.jsx)(tG.Provider, {
    value: n,
    children: (0, Q.jsx)(eG.Provider, { value: t, children: e.children }),
  });
}
function rG(e) {
  return typeof e.index == `number` && e.appids.length > e.index
    ? e.appids[e.index]
    : null;
}
function iG() {
  let e = B.useContext(eG);
  return { unAppID: rG(e), length: e.appids.length, index: e.index };
}
function aG() {
  let e = B.useContext(tG);
  return B.useCallback((t, n) => e({ index: t, appids: n }), [e]);
}
function oG(e, t) {
  let n = aG();
  return B.useCallback(() => n(e, t), [n, e, t]);
}
function sG(e) {
  let t = B.useContext(tG);
  return B.useCallback(() => {
    t((t) => (e >= 0 && e < t.appids.length ? { ...t, index: e } : t));
  }, [t, e]);
}
function cG() {
  let e = B.useContext(tG);
  return B.useCallback(
    (t) => {
      e((e) => (rG(e) == t ? $W : e));
    },
    [e],
  );
}
var lG = t({
    Achievements: () => tK,
    AllFirstPlayedCtn: () => wK,
    AllPlayedContentCtn: () => CK,
    AllPlayedCtn: () => SK,
    Answer: () => LK,
    Appear: () => wG,
    ArrowDownCtn: () => gK,
    ArrowUpCtn: () => hK,
    AvatarName: () => yG,
    BackgroundImage: () => IG,
    BackgroundImageCover: () => eK,
    BadgeBarFiller: () => VK,
    BadgeBoxIntro: () => BK,
    Big: () => iK,
    BigNum: () => zG,
    BottomCtn: () => RK,
    CompareArrow: () => pK,
    CompareCtn: () => fK,
    CompareText: () => mK,
    ConclusionCtn: () => MK,
    ContentCtn: () => GG,
    ControllerPortion: () => JG,
    DevToggle: () => TK,
    DeviceBlock: () => VG,
    DeviceSummary: () => _K,
    ElementFadeIn: () => zK,
    ErrorMsg: () => AK,
    FAQSection: () => PK,
    Game0: () => MG,
    Game1: () => NG,
    Game2: () => PG,
    GenericBackground: () => OK,
    GraphRelatedCtn: () => yK,
    GridItem: () => jG,
    HardwareBlock: () => BG,
    HardwareStats: () => vK,
    HardwareSummary: () => WG,
    HeaderCtn: () => _G,
    HeaderShareCtn: () => jK,
    InlineUserName: () => SG,
    KeyboardPortion: () => KG,
    Large: () => XG,
    LogInCtn: () => DK,
    LoginButtonCtn: () => kK,
    LongestStreakStat: () => sK,
    MissingUserCtn: () => EK,
    OverviewBlock: () => FG,
    Question: () => IK,
    QuestionCtn: () => FK,
    Questions: () => NK,
    RewindHeader: () => vG,
    SectionSubTitle: () => TG,
    SectionTitle: () => CG,
    SixNumbers: () => uK,
    Small: () => YG,
    SmallLightText: () => dK,
    SmallText: () => cK,
    Stat: () => qG,
    StatBox: () => aK,
    StreakBlock: () => LG,
    SubSummaryCtn: () => oK,
    Subtitle: () => ZG,
    SubtleBorder: () => UG,
    SummaryArea: () => EG,
    SummaryBlockExtrasCtn: () => $G,
    SummaryBlockGameName: () => QG,
    SummaryBlockHugeNumCtn: () => RG,
    SummaryBlockTitle: () => nK,
    SummaryCtn: () => HG,
    SummaryCtnShadow: () => OG,
    SummaryGridCtn: () => DG,
    SummaryGridSparse: () => AG,
    SummaryGridStandard: () => kG,
    Tab: () => gG,
    TabBar: () => hG,
    TabCtn: () => mG,
    ThreeNumbers: () => lK,
    TimeRelatedCtn: () => bK,
    TopAreaSizer: () => fG,
    TopHonorsContent: () => pG,
    TopHonorsSection: () => xK,
    UserAvatar: () => bG,
    UserName: () => xG,
    YearInReviewContainer: () => uG,
    YearInReviewContent: () => dG,
    YearSubtitle: () => rK,
    default: () => HK,
  }),
  uG = `KoPRGmgJJqo-`,
  dG = `hJYEynQkmdU-`,
  fG = `wbSwZ4ddIBM-`,
  pG = `_06vjX6-LZ3o-`,
  mG = `rb53CfOiFDE-`,
  hG = `vK7--H0SAkw-`,
  gG = `gMb-gEMJz-o-`,
  _G = `ubb8Zl0avoo-`,
  vG = `f5HUQVPUdec-`,
  yG = `skidEiMf2PY-`,
  bG = `_6BJlyLcB6b0-`,
  xG = `EzNrIbLqFyI-`,
  SG = `D317B3qRUg4-`,
  CG = `jKX9urC1MxY-`,
  wG = `_4nPP92NisYg-`,
  TG = `bXtzee8AefM-`,
  EG = `zn9KZEp--BA-`,
  DG = `xJQGByL-21g-`,
  OG = `Ir5Sa8Wyk54-`,
  kG = `Du1AFzeoCqQ-`,
  AG = `DtJ29CA3-5w-`,
  jG = `gIuYhaWQ4fc-`,
  MG = `fKe87BWrvfQ-`,
  NG = `_-5OsCs7YPk8-`,
  PG = `Zg95Ba7p3Qw-`,
  FG = `_8Y3H4R2pQus-`,
  IG = `GAtCzNnRjO8-`,
  LG = `dEuc93cpmYk-`,
  RG = `nZ9-nfKNk0k-`,
  zG = `ERwgqbs67Y0-`,
  BG = `e6T89MsSCU4-`,
  VG = `PSZWXs0q2BA-`,
  HG = `ojW6P77M2CU-`,
  UG = `gq51gWeAGwg-`,
  WG = `y29Eo6crp1Y-`,
  GG = `lVezcGtu14c-`,
  KG = `XrqoWcWOWto-`,
  qG = `nuUlfFr-4go-`,
  JG = `BJLPLEcobNA-`,
  YG = `pM0nmAh-JmE-`,
  XG = `czEXrqIBjoY-`,
  ZG = `V22nqpPVUDE-`,
  QG = `r7SaWklbiLk-`,
  $G = `WQbJEJwrh6A-`,
  eK = `yhKq8JqyhHU-`,
  tK = `NFRRVbS6gNQ-`,
  nK = `quOp3zDhs0Q-`,
  rK = `WtmqBEWwXUU-`,
  iK = `OiCGsb3ZVjo-`,
  aK = `-DExq33nuLc-`,
  oK = `iO7bySBmLDQ-`,
  sK = `rakWUwgngNs-`,
  cK = `Ro3m9drEqnI-`,
  lK = `L57SkFUBplo-`,
  uK = `YLnkFjFOQOs-`,
  dK = `_0XQzOjcNRaw-`,
  fK = `kCKbop9CpRg-`,
  pK = `_9tAN2yCIirs-`,
  mK = `kK5H6hWa6D4-`,
  hK = `BEY87Y5nD4o-`,
  gK = `HaiVKIU8Khw-`,
  _K = `qg0kxFOh1tk-`,
  vK = `qK-bv0Ju3ZE-`,
  yK = `Tyh9FPCHRrc-`,
  bK = `xan-F7AKHTg-`,
  xK = `msW7t3zPawc-`,
  SK = `zWuJ9eO1deE-`,
  CK = `HguwBviDKIo-`,
  wK = `_2m4YMjqffsc-`,
  TK = `GDQOIFoBCP4-`,
  EK = `GM1A55ZEulI-`,
  DK = `jvwbuCbEfxI-`,
  OK = `tGzVeFXNEfc-`,
  kK = `CTJEahoyd2c-`,
  AK = `gHS2We-nxiI-`,
  jK = `-vTPvlHUL7g-`,
  MK = `ofmH8EfaBy4-`,
  NK = `fGLzTigSNnY-`,
  PK = `_6ALXCVcszOs-`,
  FK = `X-87SlZ9MKU-`,
  IK = `_38wDSMap-gY-`,
  LK = `bXJ94GBFl3U-`,
  RK = `DALsnbbp3sE-`,
  zK = `VgC9GOlWj28-`,
  BK = `XJWfnQSYNt8-`,
  VK = `FlPXt8CIBlI-`,
  HK = {
    YearInReviewContainer: uG,
    YearInReviewContent: dG,
    TopAreaSizer: fG,
    TopHonorsContent: pG,
    TabCtn: mG,
    TabBar: hG,
    Tab: gG,
    HeaderCtn: _G,
    RewindHeader: vG,
    AvatarName: yG,
    UserAvatar: bG,
    UserName: xG,
    InlineUserName: SG,
    SectionTitle: CG,
    Appear: wG,
    SectionSubTitle: TG,
    SummaryArea: EG,
    SummaryGridCtn: DG,
    SummaryCtnShadow: OG,
    SummaryGridStandard: kG,
    SummaryGridSparse: AG,
    GridItem: jG,
    Game0: MG,
    Game1: NG,
    Game2: PG,
    OverviewBlock: FG,
    BackgroundImage: IG,
    StreakBlock: LG,
    SummaryBlockHugeNumCtn: RG,
    BigNum: zG,
    HardwareBlock: BG,
    DeviceBlock: VG,
    SummaryCtn: HG,
    SubtleBorder: UG,
    HardwareSummary: WG,
    ContentCtn: GG,
    KeyboardPortion: KG,
    Stat: qG,
    ControllerPortion: JG,
    Small: YG,
    Large: XG,
    Subtitle: ZG,
    SummaryBlockGameName: QG,
    SummaryBlockExtrasCtn: $G,
    BackgroundImageCover: eK,
    Achievements: tK,
    SummaryBlockTitle: nK,
    YearSubtitle: rK,
    Big: iK,
    StatBox: aK,
    SubSummaryCtn: oK,
    LongestStreakStat: sK,
    SmallText: cK,
    ThreeNumbers: lK,
    SixNumbers: uK,
    SmallLightText: dK,
    CompareCtn: fK,
    CompareArrow: pK,
    CompareText: mK,
    ArrowUpCtn: hK,
    ArrowDownCtn: gK,
    DeviceSummary: _K,
    HardwareStats: vK,
    GraphRelatedCtn: yK,
    TimeRelatedCtn: bK,
    TopHonorsSection: xK,
    AllPlayedCtn: SK,
    AllPlayedContentCtn: CK,
    AllFirstPlayedCtn: wK,
    DevToggle: TK,
    MissingUserCtn: EK,
    LogInCtn: DK,
    GenericBackground: OK,
    LoginButtonCtn: kK,
    ErrorMsg: AK,
    HeaderShareCtn: jK,
    ConclusionCtn: MK,
    Questions: NK,
    FAQSection: PK,
    QuestionCtn: FK,
    Question: IK,
    Answer: LK,
    BottomCtn: RK,
    ElementFadeIn: zK,
    BadgeBoxIntro: BK,
    BadgeBarFiller: VK,
  },
  UK = `C5cdndOEHt4-`,
  WK = `-q0-kXkWN9U-`,
  GK = `TB8Ftf6yNUE-`,
  KK = `EOEvelxRXZw-`,
  qK = `vCsbBq7knm8-`,
  JK = `_4hgWT24Sdeo-`,
  YK = `_7yIZmyI8qQk-`,
  XK = `omJUDnVgRY4-`,
  ZK = `wqTsvDkdQRg-`,
  QK = `HJLVd81kwnI-`,
  $K = `TwAc8u5RE4g-`,
  eq = `_2dQ-fNFsnAo-`,
  tq = `nDPpMWikWgc-`,
  nq = `_6qFV0psARg8-`,
  rq = `Di5p4F2SHus-`,
  iq = `p34Ga9p9kxA-`,
  aq = `_6dXzDQP9ksI-`,
  oq = `_8-zKy--vwkI-`,
  sq = `iKMpkIE2CyM-`,
  cq = `S9H5nON1Nw0-`,
  lq = `-c1ti2-skhU-`,
  uq = `uvBrTjofppg-`,
  dq = {
    Section: UK,
    Windows: WK,
    Linux: GK,
    Controller: KK,
    Mac: qK,
    Deck: JK,
    CapRow: YK,
    PlatformContentsCtn: XK,
    VR: ZK,
    SectionTitle: QK,
    BackgroundImage: $K,
    Playtest: eq,
    BG_Playtest: tq,
    Demo: nq,
    BG_Demo: rq,
    GameImage: iq,
    SectionSubTitle: aq,
    ElementFadeIn: oq,
    StatsRow: sq,
    StatBlock: cq,
    BigNum: lq,
    StatDescription: uq,
    DemoSash: `WwCfmup4R-o-`,
    BadgeBoxIntro: `XGtVJBBHDi4-`,
    BadgeBarFiller: `_-0RNm-50A-I-`,
    Appear: `_52VPPk07IBk-`,
  },
  $ = e(s(), 1);
function fq(e) {
  let { className: t, children: n, strClassOnFirstVisible: r } = e,
    [i, a] = (0, B.useState)(!1);
  return (0, Q.jsx)(hi, {
    trigger: `once`,
    onVisibilityChange: a,
    className: (0, $.default)(t, i ? r || `NowVisible` : void 0),
    children: n,
  });
}
function pq(e) {
  let {
      category: t,
      userYearInReview: n,
      strClassName: r,
      bgImageURL: i,
      title: a,
      subTitle: o,
      disclaimer: s,
      subTitleTokenIfMax: c,
    } = e,
    l = n.GetRawStats(),
    {
      nTotalGames: u,
      nTotalSessions: d,
      nTotalPercentage: f,
    } = (0, B.useMemo)(() => CH(l, t), [l, t]),
    { rgResults: p, nTotalResultCount: m } = (0, B.useMemo)(
      () => yH(n, t, 5, f),
      [n, t, f, 5],
    ),
    h = (0, B.useMemo)(() => p.map((e) => e.parent_appid || e.appid), [p]),
    [g, _] = (0, B.useState)(
      p.length > 0 ? p[0].parent_appid || p[0].appid : 0,
    ),
    { isLoading: v, data: y } = dU(h, t == `vr`),
    b = mq(p, t, v, y),
    x = t === `overall` || t === `controller` || t == `demo` || t == `playtest`;
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(r, t, XK),
    children: [
      (0, Q.jsx)(`div`, { className: QK, children: a }),
      !!i && (0, Q.jsx)(`img`, { alt: ``, src: i, className: `TwAc8u5RE4g-` }),
      t === `vr` && g > 0 && (0, Q.jsx)(hq, { appid: g }),
      (0, Q.jsxs)(`div`, {
        className: (0, $.default)(dG, sq),
        children: [
          (0, Q.jsxs)(`div`, {
            className: cq,
            children: [
              (0, Q.jsx)(`div`, { className: lq, children: Ur(u) }),
              (0, Q.jsx)(`div`, {
                className: uq,
                children: R.LocalizePlural(`#YIR_NewLine_Games`, u),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: cq,
            children: [
              (0, Q.jsx)(`div`, { className: lq, children: Ur(d) }),
              (0, Q.jsx)(`div`, {
                className: uq,
                children: R.LocalizePlural(`#YIR_NewLine_Session`, d),
              }),
            ],
          }),
          !x && (0, Q.jsx)(yq, { percentVal: f, subToken: `#YIR_NewLine` }),
        ],
      }),
      !!o && (0, Q.jsx)(`div`, { className: `_6dXzDQP9ksI-`, children: o }),
      !o &&
        !!c &&
        m > 5 &&
        b > 0 &&
        (0, Q.jsx)(`div`, {
          className: `_6dXzDQP9ksI-`,
          children: R.Localize(c, b),
        }),
      !!s && (0, Q.jsx)(`div`, { className: void 0, children: s }),
      (0, Q.jsx)(fq, {
        className: uW,
        children: (0, Q.jsx)(gq, {
          rgGamePercentages: p,
          category: t,
          fnOnHoverApp: _,
        }),
      }),
    ],
  });
}
function mq(e, t, n, r) {
  return (0, B.useMemo)(
    () =>
      n || !r
        ? 0
        : e.reduce((e, n) => {
            let i = n.parent_appid || n.appid,
              a = r.get(i)?.info.visible,
              o = (t != `demo` && t != `playtest`) || n.parent_appid;
            return e + (a && o ? 1 : 0);
          }, 0),
    [e, n, r, t],
  );
}
function hq(e) {
  let { appid: t } = e,
    { data: n } = Jn({ appid: t }),
    r = So();
  if (!n) return null;
  let i = n.all_ages_screenshots ?? [],
    a = (
      r == `blocked`
        ? i
        : [...i, ...(n.mature_content_screenshots ?? [])].sort(
            (e, t) => e.ordinal - t.ordinal,
          )
    )[1];
  if (!a) return null;
  let o = r == `masked` && !i.includes(a);
  return (0, Q.jsx)(`img`, {
    alt: ``,
    src: ar(a),
    className: (0, $.default)({ [iq]: !0, [void 0]: o }),
  });
}
function gq(e) {
  let { rgGamePercentages: t, category: n, fnOnHoverApp: r } = e,
    i = t.map((e) => e.appid),
    a;
  switch (n) {
    case `demo`:
      a = 1;
      break;
    case `playtest`:
      a = 12;
  }
  return (0, Q.jsx)(Fa, {
    "flow-children": `grid`,
    className: (0, $.default)(dG, YK, wW),
    children: t.map((e, t) =>
      (0, Q.jsx)(
        _q,
        {
          appid: e.appid,
          strInfo:
            e.nPercentagex100 === void 0 ? void 0 : XW(e.nPercentagex100),
          nParentAppID: e.parent_appid,
          eChildType: a,
          index: t,
          loading: `eager`,
          rgAppIDs: i,
          fnOnMouseEvent: () => r && r(e.appid),
        },
        n + `_` + e.appid,
      ),
    ),
  });
}
function _q(e) {
  let {
      appid: t,
      strInfo: n,
      rgAppIDs: r,
      index: i,
      loading: a,
      fnOnMouseEvent: o,
      nParentAppID: s,
      eChildType: c,
    } = e,
    { item: l, bLoading: u } = uU(c == null ? t : s),
    d = oG(i, r);
  if (u) return null;
  if (!l || !l.info.visible)
    return s && (c == 1 || c == 12)
      ? (0, Q.jsx)(_q, { ...e, nParentAppID: s, eChildType: 0 })
      : null;
  let f = De(l.assets, `library_capsule`);
  return (0, Q.jsxs)(`a`, {
    className: dW,
    onClick: d,
    onMouseEnter: o,
    children: [
      f
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsxs)(`div`, {
                className: mW,
                children: [
                  s &&
                    c == 1 &&
                    (0, Q.jsx)(`div`, {
                      className: `qEnvz1uXbQU-`,
                      children: R.Localize(`#YIR_Played_Demo`),
                    }),
                  s &&
                    c == 12 &&
                    (0, Q.jsx)(`div`, {
                      className: `pvLpzVIEyJQ-`,
                      children: R.Localize(`#YIR_Played_PlayTest`),
                    }),
                ],
              }),
              (0, Q.jsx)(`img`, { loading: a, src: f, alt: l.info.name }),
            ],
          })
        : (0, Q.jsx)(vq, { item: l.info }),
      !!n && (0, Q.jsx)(`div`, { className: `x6rpHBjxzTg-`, children: n }),
    ],
  });
}
function vq(e) {
  let { item: t } = e;
  return (0, Q.jsxs)(`div`, {
    className: kW,
    children: [
      (0, Q.jsx)(`img`, { src: wU, alt: t.name || `` + t.appid }),
      (0, Q.jsx)(`div`, { className: AW, children: t.name }),
    ],
  });
}
function yq(e) {
  let { percentVal: t, subToken: n } = e,
    r = XW(t),
    i = `${n}_Percent`;
  return (0, Q.jsxs)(`div`, {
    className: cq,
    children: [
      (0, Q.jsx)(`div`, { className: lq, children: r }),
      (0, Q.jsx)(`div`, { className: uq, children: R.Localize(i) }),
    ],
  });
}
var bq = `_1zHgawHGZQ8-`,
  xq = `maZLLs320ng-`,
  Sq = `FBNO-i1eCDU-`,
  Cq = `lvInkGaT6tc-`,
  wq = `CdHUHmprZLc-`,
  Tq = `_0Di7EGWRhhg-`,
  Eq = `xhff4YTQuUs-`,
  Dq = `KxbX2VmSNpY-`;
function Oq(e) {
  let { userYearInReview: t, nYear: n } = e,
    r = Z(),
    i = (0, B.useMemo)(() => {
      let e = new Set();
      return (
        t.GetPlayTimeStats().game_summary.forEach((t) => {
          !t.demo && !t.playtest
            ? e.add(t.appid)
            : t.parent_appid && e.add(t.parent_appid);
        }),
        Array.from(e)
      );
    }, [t]),
    { isLoading: a } = dU(i),
    o = JW(),
    s = [
      {
        name: R.Localize(`#YIR_FirstTime_Tab_MonthlyGrid`),
        key: `firsttimebymonth`,
        contents: (0, Q.jsx)(jt, {
          children: (0, Q.jsx)(`div`, {
            className: bq,
            children: (0, Q.jsx)(Mq, { userYearInReview: t, nYear: n }),
          }),
        }),
      },
      {
        name: R.Localize(`#YIR_FirstTime_Tab_Grid`),
        key: `firsttimegrid`,
        contents: (0, Q.jsx)(jt, {
          children: (0, Q.jsx)(jq, { userYearInReview: t, nYear: n }),
        }),
      },
    ];
  return i.length == 0
    ? null
    : (0, Q.jsxs)(fq, {
        className: wK,
        children: [
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(Tq, r.AllGamesBGImage),
          }),
          (0, Q.jsxs)(`div`, {
            className: dG,
            children: [
              (0, Q.jsx)(`div`, {
                className: CG,
                children: o(`#YIR_FirstTime_Title`, i.length),
              }),
              a
                ? (0, Q.jsx)(E, {
                    size: `medium`,
                    position: `center`,
                    string: xs.Localize(`#Loading`),
                  })
                : (0, Q.jsx)(`div`, {
                    className: mG,
                    children: (0, Q.jsx)(kq, {
                      className: hG,
                      classNameTab: (0, $.default)(gG, r.Tab),
                      tabs: s,
                    }),
                  }),
            ],
          }),
        ],
      });
}
function kq(e) {
  let { className: t, classNameTab: n, tabs: r } = e,
    [i, a] = (0, B.useState)(r[0]?.key);
  if (!r.length) return null;
  let o = r.find(({ key: e }) => e === i) ?? r[0];
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(Fa, {
        className: (0, $.default)(Eq, t),
        navEntryPreferPosition: To.FIRST,
        children: r.map((e) =>
          (0, Q.jsx)(
            Aq,
            {
              className: n,
              active: e.key === o.key,
              onActivate: () => a(e.key),
              children: e.name,
            },
            e.key,
          ),
        ),
      }),
      (0, Q.jsx)(Fa, { children: o.contents }),
    ],
  });
}
function Aq(e) {
  let { className: t, active: n, onActivate: r, children: i } = e;
  return (0, Q.jsx)(Fa, {
    className: (0, $.default)(Dq, n && `_2Nz6-T0g-zc-`, n && `ActiveTab`, t),
    onActivate: r,
    children: i,
  });
}
function jq(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetPlayTimeStats().game_summary,
    i = JW(),
    [a, o] = B.useState(!1),
    { bShouldShowMore: s, rgGamesInOrderOfPlaytime: c } = (0, B.useMemo)(() => {
      let e = new Set(),
        t = r
          .filter(
            (t) =>
              !e.has(t.appid) &&
              (e.add(t.appid), t.parent_appid || (!t.demo && !t.playtest)),
          )
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )
          .map((e) => ({
            appid: e.appid,
            nPercentagex100: e.total_playtime_percentagex100,
            bNewThisYear: !!e.new_this_year,
            bIsDemo: !!e.demo,
            bIsPlaytest: !!e.playtest,
            nParentAppID: e.parent_appid,
          })),
        n = r.length > 100 && !a;
      return {
        bShouldShowMore: n,
        rgGamesInOrderOfPlaytime: n ? t.slice(0, 100) : t,
      };
    }, [r, a]);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(Pq, {
        nYear: t,
        rgGamesInOrderOfPlaytime: c,
        strTooltip: i(`#YIR_FirstTime_Percentages`),
      }),
      s &&
        (0, Q.jsx)(`div`, {
          className: `z4JPVbkRELk-`,
          children: (0, Q.jsx)(`a`, {
            href: `#`,
            className: `dUBouRPf5BM-`,
            onClick: () => o(!0),
            children: R.Localize(`#YIR_ShowMore`),
          }),
        }),
    ],
  });
}
function Mq(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetRawStats().playtime_stats.months;
  return (0, Q.jsx)(Q.Fragment, {
    children: r
      .filter((e) => e.stats.total_sessions > 0)
      .map((e) =>
        (0, Q.jsx)(
          Nq,
          { month: e, userYearInReview: n, nYear: t },
          `outermonth` + e.rtime_month,
        ),
      ),
  });
}
function Nq(e) {
  let { nYear: t, userYearInReview: n, month: r } = e,
    i = ZW(),
    a = JW(),
    [o, s] = B.useState(!1),
    { bShouldShowMore: c, rgGameStats: l } = (0, B.useMemo)(() => {
      let e = r.game_summary
          .filter((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return (
              Fo(
                t,
                `Displaying Month Data ${r.rtime_month} missing summary for appid: ${e.appid}`,
              ),
              t && (t.parent_appid || (!t.demo && !t.playtest))
            );
          })
          .sort(
            (e, t) =>
              t.relative_playtime_percentagex100 -
              e.relative_playtime_percentagex100,
          )
          .map((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return {
              appid: t.appid,
              nPercentagex100: e.relative_playtime_percentagex100,
              bNewThisYear: !!t.new_this_year,
              bIsDemo: !!t.demo,
              bIsPlaytest: !!t.playtest,
              nParentAppID: t.parent_appid,
            };
          }),
        t = e.length > 8 && !o;
      return { bShouldShowMore: t, rgGameStats: t ? e.slice(0, 8) : e };
    }, [r.game_summary, r.rtime_month, o, n]);
  if (l.length == 0) return null;
  let u = new Date((r.rtime_month + 86400) * 1e3);
  return (0, Q.jsxs)(
    `div`,
    {
      className: xq,
      children: [
        (0, Q.jsx)(`div`, {
          className: Cq,
          children: i
            ? R.Localize(
                `#YIR_MonthlyGrid_MonthSingular_${u.getUTCMonth() + 1}`,
              )
            : wt(u),
        }),
        (0, Q.jsx)(Pq, {
          rgGamesInOrderOfPlaytime: l,
          nYear: t,
          strTooltip: a(`#YIR_FirstTime_MonthlyPercentages`),
        }),
        c &&
          (0, Q.jsx)(`div`, {
            className: `z4JPVbkRELk-`,
            children: (0, Q.jsx)(`a`, {
              href: `#`,
              className: `dUBouRPf5BM-`,
              onClick: () => s(!0),
              children: R.Localize(`#YIR_ShowMore`),
            }),
          }),
      ],
    },
    `monthgroup_` + r.rtime_month,
  );
}
function Pq(e) {
  let { nYear: t, rgGamesInOrderOfPlaytime: n, strTooltip: r } = e,
    i = aG(),
    { data: a } = dU(
      (0, B.useMemo)(() => n.map((e) => e.nParentAppID || e.appid), [n]),
    ),
    o = n.filter((e) => a?.has(e.nParentAppID || e.appid)),
    s = o.map((e) => e.appid),
    c = o.map((e, n) =>
      (0, Q.jsx)(
        Fq,
        {
          appid: e.nParentAppID || e.appid,
          bNewThisYear: e.bNewThisYear,
          fnOnClick: () => i(n, s),
          nYear: t,
          strPercentage:
            e.nPercentagex100 === void 0 ? void 0 : XW(e.nPercentagex100),
          strTooltip: r,
          bIsDemo: e.bIsDemo,
          bIsPlayTest: e.bIsPlaytest,
        },
        e.appid,
      ),
    );
  return (0, Q.jsx)(Fa, {
    "flow-children": `grid`,
    className: (0, $.default)(pW, Sq),
    children: c,
  });
}
function Fq(e) {
  let {
      nYear: t,
      appid: n,
      bNewThisYear: r,
      fnOnClick: i,
      strPercentage: a,
      strTooltip: o,
      bIsDemo: s,
      bIsPlayTest: c,
    } = e,
    { item: l } = uU(n),
    u = br(l && S(l.info)) || ``,
    d = Z();
  if (!l || !l.info.visible) return null;
  let f = De(l.assets, `library_capsule`);
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)({ [sW]: !0, [wq]: !0, [void 0]: r }),
    onClick: (e) => {
      i && (e.preventDefault(), i());
    },
    children: (0, Q.jsx)(x, {
      appid: n,
      children: (0, Q.jsxs)(`a`, {
        href: i ? void 0 : u,
        className: dW,
        children: [
          (!!r || !!s || !!c) &&
            (0, Q.jsxs)(`div`, {
              className: `onO-DMSltE0-`,
              children: [
                !!r &&
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(
                      `v6qwr186rUA-`,
                      d.GamePlayDetails,
                    ),
                    children: R.Localize(`#YIR_FirstTime_Played`, t),
                  }),
                !!s &&
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(
                      `qEnvz1uXbQU-`,
                      d.DemoPlayDetails,
                    ),
                    children: R.Localize(`#YIR_Played_Demo`),
                  }),
                !!c &&
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(
                      `pvLpzVIEyJQ-`,
                      d.PlaytestPlayDetails,
                    ),
                    children: R.Localize(`#YIR_Played_PlayTest`),
                  }),
              ],
            }),
          f
            ? (0, Q.jsx)(`img`, { alt: ``, loading: `lazy`, src: f })
            : (0, Q.jsx)(vq, { item: l.info }),
          !!a &&
            (0, Q.jsx)(qn, {
              toolTipContent: o,
              className: `x6rpHBjxzTg-`,
              children: a,
            }),
        ],
      }),
    }),
  });
}
var Iq = `-mIgF6AA5LY-`,
  Lq = `Vi83-LkMtoI-`,
  Rq = `YXohyZxdvfQ-`,
  zq = `-XC-c1uz0Ko-`,
  Bq = `zZFozEpTZI0-`,
  Vq = `xUqkAY4Oj3o-`,
  Hq = `rwGMj4tdqJs-`,
  Uq = `-ZlfMJZNVtw-`,
  Wq = `F6KTgf9lssw-`,
  Gq = 9e3,
  Kq = 1,
  qq = 50;
function Jq(e) {
  let t = e
    .GetPlayTimeStats()
    .games.map((t) => e.GetGameSummaryForApp(t.appid))
    .filter((e) => e && (e.parent_appid || (!e.demo && !e.playtest)));
  if (t.length == 0) return { eType: `basic` };
  let n = t[0].total_playtime_percentagex100 ?? 0;
  return e.GetPlayTimeStats().game_summary.length < Kq || n >= Gq
    ? { eType: `single`, appid: t[0].parent_appid || t[0].appid }
    : {
        eType: `tiles`,
        rgAppIDs: Array.from(
          new Set(
            e
              .GetPlayTimeStats()
              .game_summary.filter(
                (e) => e.parent_appid || (!e.demo && !e.playtest),
              )
              .sort(
                (e, t) =>
                  t.total_playtime_percentagex100 -
                  e.total_playtime_percentagex100,
              )
              .slice(0, qq)
              .map((e) => e.parent_appid || e.appid),
          ),
        ),
      };
}
var Yq = `ugL-G4FTy2w-`,
  Xq = `c8-WfKGtCq8-`,
  Zq = `OsIwsZtSRZQ-`,
  Qq = `_1RZIc4-Ydv8-`,
  $q = `_4Q73gvvwSoU-`,
  eJ = `_6LO5BaihEDc-`,
  tJ = `bV66XEiP5a8-`;
function nJ(e) {
  let {
    children: t,
    className: n,
    squareClassName: r,
    gridClassName: i,
    bEvenTiles: a,
    bFadeInTiles: o,
    bDrift: s,
  } = e;
  return (0, Q.jsx)(`div`, {
    className: Xn(Yq, n),
    children: (0, Q.jsx)(`div`, {
      className: Xn(Xq, !o && `dXaS0YLAPWg-`),
      children: (0, Q.jsx)(`div`, {
        className: Xn(Zq, s && `dKtBrMD331I-`, r),
        children: (0, Q.jsx)(`div`, {
          className: Xn({ [Qq]: !0, [eJ]: !a, [tJ]: o }, i),
          children: t,
        }),
      }),
    }),
  });
}
function rJ(e) {
  return (0, Q.jsx)(`img`, {
    className: Xn($q, e.className),
    src: e.strImageURL,
    alt: ``,
  });
}
function iJ(e) {
  let { userYearInReview: t, children: n } = e,
    r = (0, B.useMemo)(() => Jq(t), [t]);
  return r.eType == `basic`
    ? (0, Q.jsx)(cJ, { children: n })
    : r.eType == `single`
      ? (0, Q.jsx)(sJ, { appid: r.appid, children: n })
      : (0, Q.jsx)(aJ, { rgAppIDs: r.rgAppIDs, children: n });
}
function aJ(e) {
  let { rgAppIDs: t, children: n } = e,
    r = Z(),
    { data: i } = dU(t),
    { rgStoreItems: a, rgImageURLs: o } = (0, B.useMemo)(() => {
      if (!i) return { rgStoreItems: null, rgImageURLs: null };
      let e = t.map((e) => i.get(e)).filter((e) => !!e && !!e.assets);
      return { rgStoreItems: e, rgImageURLs: oJ(e) };
    }, [t, i]);
  return a
    ? (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(nJ, {
            className: (0, $.default)(Iq, r.ImagesCtn),
            squareClassName: Lq,
            gridClassName: (0, $.default)({
              [Rq]: !0,
              [Vq]: a.length <= 10,
              [Bq]: a.length <= 20,
              [zq]: a.length <= 40,
            }),
            bFadeInTiles: !0,
            bDrift: !0,
            children: o.map((e, t) =>
              (0, Q.jsx)(rJ, { strImageURL: e, className: Hq }, t),
            ),
          }),
          n,
        ],
      })
    : (0, Q.jsx)(cJ, { children: n });
}
function oJ(e) {
  let t = (e) => (
      Fo(e.assets, `Cannot get image without assets`),
      De(e.assets, `library_hero`, `main_capsule`)
    ),
    n = (e) => (
      Fo(e.assets, `Cannot get image without assets`),
      De(e.assets, `raw_page_background`, `main_capsule`)
    ),
    r = e.map(t);
  return (
    e.length <= 50 && r.push(...e.map(n)),
    e.length <= 20 && r.push(...e.map(t)),
    r
  );
}
function sJ(e) {
  let { appid: t, children: n } = e,
    { item: r } = uU(t),
    i = Z();
  return r
    ? (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(Iq, i.ImagesCtn),
            children: (0, Q.jsx)(`div`, {
              className: (0, $.default)(Uq, i.SingleGame),
              children: (0, Q.jsx)(`div`, {
                className: (0, $.default)(Wq, i.ImageTint),
                children: (0, Q.jsx)(`img`, {
                  alt: ``,
                  src: De(r.assets, `library_hero`),
                }),
              }),
            }),
          }),
          n,
        ],
      })
    : (0, Q.jsx)(cJ, { children: n });
}
function cJ(e) {
  return (0, Q.jsx)(`div`, { className: void 0, children: e.children });
}
var lJ = t({
    Active: () => vY,
    Appear: () => sY,
    BadgeBarFiller: () => EJ,
    BadgeBox: () => dJ,
    BadgeBoxIntro: () => fJ,
    BadgeContents: () => pJ,
    BadgeDesc: () => AJ,
    BadgeGetBtn: () => jJ,
    BadgeImgCtn: () => kJ,
    BadgeName: () => OJ,
    BadgeRarity_common: () => mJ,
    BadgeRarity_epic: () => vJ,
    BadgeRarity_legendary: () => yJ,
    BadgeRarity_rare: () => _J,
    BadgeRarity_uncommon: () => gJ,
    DataBox: () => SY,
    DataBoxArrow: () => TY,
    DataBoxesContainer: () => bY,
    Disabled: () => GJ,
    ElementFadeIn: () => DY,
    FillerBar: () => wJ,
    FillerDots: () => WJ,
    FlavorLabel: () => xY,
    GameNewnessComparisonContainer: () => mY,
    GameNewnessDataCnt: () => hY,
    GameNewnessTitle: () => EY,
    Glitter: () => QJ,
    GlitterBox: () => XJ,
    GlitterSecond: () => ZJ,
    GraphBox: () => FJ,
    HalfwidthColumn: () => NJ,
    NumbersLabel: () => HJ,
    NumbersRow: () => VJ,
    NumbersRowsCnt: () => BJ,
    NumbersValue: () => UJ,
    PercentageDescriptionLabel: () => wY,
    PercentageLabel: () => CY,
    PlayBehaviorContainer: () => JJ,
    PlayBehaviorSectionSubTitle: () => tY,
    PlayNewnessContainer: () => pY,
    PlayerBehaviorProgressCnt: () => nY,
    ProgressBar: () => dY,
    ProgressBarFilled: () => YJ,
    ProgressBarWrapper: () => rY,
    ProgressIcon: () => cY,
    ProgressIconSVG: () => lY,
    ProgressLabel: () => fY,
    ProgressLabelsCnt: () => iY,
    ProgressRightSide: () => uY,
    ProgressSteamAvgLabel: () => aY,
    RadarChartLegend: () => zJ,
    RadarText: () => IJ,
    RadarTextContainer: () => LJ,
    RarityBar: () => SJ,
    RarityBarSegment: () => CJ,
    RarityDesc: () => DJ,
    RarityInfoCtn: () => xJ,
    RarityText: () => hJ,
    RightCol: () => bJ,
    RightSideContainer: () => yY,
    SectionDesc: () => qJ,
    SectionLabel: () => KJ,
    SegmentCap: () => TJ,
    SpiderAndNumbersCnt: () => MJ,
    SpiderResponsiveContainer: () => RJ,
    SpidergraphContainer: () => PJ,
    TopHonorsCtn: () => uJ,
    WheelArc: () => _Y,
    WheelChart: () => gY,
    default: () => OY,
    glitterMove: () => $J,
    glitterMove2: () => eY,
    progressBar: () => oY,
  }),
  uJ = `_8MMZZOMlBHA-`,
  dJ = `kjlSrD84bUs-`,
  fJ = `CnBmGiFtNT0-`,
  pJ = `_2H6regBFr4A-`,
  mJ = `xMSIrz8QNm4-`,
  hJ = `IveJy5QZXYo-`,
  gJ = `_571YhehUkx4-`,
  _J = `-nnBxrwGwuc-`,
  vJ = `J6oM-PiOKAA-`,
  yJ = `KSTPULVW5bQ-`,
  bJ = `gUjbsGPoR4E-`,
  xJ = `x3GiOuwvZgI-`,
  SJ = `_2z5eG5DUYNA-`,
  CJ = `OcZxMthyO1Q-`,
  wJ = `dogr49iCxO0-`,
  TJ = `xIw4nr0zmDU-`,
  EJ = `hrrpNs-t5os-`,
  DJ = `d2u0-poYQ6Q-`,
  OJ = `RP9sAnKzwq4-`,
  kJ = `YCkJBRdHX74-`,
  AJ = `wsZ4D5OBXxA-`,
  jJ = `VbvjmHdYZUs-`,
  MJ = `PMUu6aR8bT0-`,
  NJ = `NTDxIz9hpZQ-`,
  PJ = `-LL-rRwXHvQ-`,
  FJ = `udPMl22PhSc-`,
  IJ = `URBSKU-uKts-`,
  LJ = `p7VrPSl4acM-`,
  RJ = `xPpu-EhMrzM-`,
  zJ = `e5EFq580oLg-`,
  BJ = `lkrsOd-pN7M-`,
  VJ = `gdGCZIz-fdM-`,
  HJ = `_2AcQ3eLZpqQ-`,
  UJ = `aBL1S716KHI-`,
  WJ = `_9kf74DPWJHs-`,
  GJ = `MvmFmRp0gao-`,
  KJ = `qFjJzWZ5t6U-`,
  qJ = `lBH0gHt22Fc-`,
  JJ = `EcABZ-m3zvk-`,
  YJ = `ntvLkao7PkE-`,
  XJ = `NJBuZKTDzAE-`,
  ZJ = `n62MYB6VP4U-`,
  QJ = `FVHCXXtwkMc-`,
  $J = `FZJGl5gD9TA-`,
  eY = `_9WKfAIJ7GYg-`,
  tY = `_0jnwL-HxS8o-`,
  nY = `r-PiY57GlY8-`,
  rY = `E8dRIfC8z8U-`,
  iY = `qffLKsSHu0M-`,
  aY = `aKnZAgIhrq0-`,
  oY = `MAhYpOkM9Zs-`,
  sY = `_4xkdBuilUW8-`,
  cY = `_1paAUH9-U80-`,
  lY = `QwRTqCa5RJI-`,
  uY = `_54a2wTltSQo-`,
  dY = `ACraqmlP6JQ-`,
  fY = `Em-W-2-scx4-`,
  pY = `_93HCZZaF-GQ-`,
  mY = `Lj6zc-CzUcI-`,
  hY = `PPF1V2vagl4-`,
  gY = `Os1d9o6QJ48-`,
  _Y = `ncAmk-wH-LE-`,
  vY = `DXcvT92GGo8-`,
  yY = `AaHMu4lT7dk-`,
  bY = `xBfnjHBm-1E-`,
  xY = `mJeXM2yr-2Q-`,
  SY = `RRGyT0y5ixE-`,
  CY = `GKnUCAKm6-M-`,
  wY = `_3mHbUC3OZ1w-`,
  TY = `eeacvOJIz2s-`,
  EY = `TUUDCjzjuow-`,
  DY = `f5WBpNOlO1E-`,
  OY = {
    TopHonorsCtn: uJ,
    BadgeBox: dJ,
    BadgeBoxIntro: fJ,
    BadgeContents: pJ,
    BadgeRarity_common: mJ,
    RarityText: hJ,
    BadgeRarity_uncommon: gJ,
    BadgeRarity_rare: _J,
    BadgeRarity_epic: vJ,
    BadgeRarity_legendary: yJ,
    RightCol: bJ,
    RarityInfoCtn: xJ,
    RarityBar: SJ,
    RarityBarSegment: CJ,
    FillerBar: wJ,
    SegmentCap: TJ,
    BadgeBarFiller: EJ,
    RarityDesc: DJ,
    BadgeName: OJ,
    BadgeImgCtn: kJ,
    BadgeDesc: AJ,
    BadgeGetBtn: jJ,
    SpiderAndNumbersCnt: MJ,
    HalfwidthColumn: NJ,
    SpidergraphContainer: PJ,
    GraphBox: FJ,
    RadarText: IJ,
    RadarTextContainer: LJ,
    SpiderResponsiveContainer: RJ,
    RadarChartLegend: zJ,
    NumbersRowsCnt: BJ,
    NumbersRow: VJ,
    NumbersLabel: HJ,
    NumbersValue: UJ,
    FillerDots: WJ,
    Disabled: GJ,
    SectionLabel: KJ,
    SectionDesc: qJ,
    PlayBehaviorContainer: JJ,
    ProgressBarFilled: YJ,
    GlitterBox: XJ,
    GlitterSecond: ZJ,
    Glitter: QJ,
    glitterMove: $J,
    glitterMove2: eY,
    PlayBehaviorSectionSubTitle: tY,
    PlayerBehaviorProgressCnt: nY,
    ProgressBarWrapper: rY,
    ProgressLabelsCnt: iY,
    ProgressSteamAvgLabel: aY,
    progressBar: oY,
    Appear: sY,
    ProgressIcon: cY,
    ProgressIconSVG: lY,
    ProgressRightSide: uY,
    ProgressBar: dY,
    ProgressLabel: fY,
    PlayNewnessContainer: pY,
    GameNewnessComparisonContainer: mY,
    GameNewnessDataCnt: hY,
    WheelChart: gY,
    WheelArc: _Y,
    Active: vY,
    RightSideContainer: yY,
    DataBoxesContainer: bY,
    FlavorLabel: xY,
    DataBox: SY,
    PercentageLabel: CY,
    PercentageDescriptionLabel: wY,
    DataBoxArrow: TY,
    GameNewnessTitle: EY,
    ElementFadeIn: DY,
  },
  kY = ({
    spaceAroundCount: e,
    endValue: t,
    maxValue: n,
    duration: r = 1e3,
    startAnimation: i = !1,
    stopAnimation: a = !1,
    onAnimationStart: o,
    onAnimationStop: s,
    delay: c = 0,
    className: l,
  }) => {
    let [u, d] = (0, B.useState)(0),
      f = B.useRef(null),
      p = (e) => (e < 0.5 ? 4 * e ** 3 : 1 - (-2 * e + 2) ** 3 / 2);
    return (
      (0, B.useEffect)(() => {
        let e = null,
          l = () => {
            if (!e) return;
            let i = Date.now() - e,
              a = Math.min(1, i / r),
              o = p(a),
              s = Math.round((n ?? t) * o);
            s <= t ? (d(s), (f.current = requestAnimationFrame(l))) : d(t);
          };
        return (
          i &&
            (o && o(),
            window.setTimeout(() => {
              ((e = Date.now()),
                o && o(),
                (f.current = requestAnimationFrame(l)));
            }, c)),
          () => {
            (f.current && cancelAnimationFrame(f.current), a && s && s());
          }
        );
      }, [t, r, i, a, o, s, c, n]),
      e
        ? (0, Q.jsxs)(Q.Fragment, { children: [`\xA0`, ji(u), `\xA0`] })
        : (0, Q.jsx)(Q.Fragment, { children: ji(u) })
    );
  };
function AY() {
  typeof tj == `function`
    ? tj({
        measureText: (e, t) => {
          let n = e.toString(),
            r = typeof t?.fontSize == `number` ? t.fontSize : 13;
          return { width: n.length * 8, height: r * 1.3 };
        },
      })
    : console.error(
        `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
      );
}
AY();
var jY = () => {
    let e = Z();
    return (0, Q.jsxs)(`svg`, {
      className: (0, $.default)(lY, void 0, e.IconStreak),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 220 256`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, Q.jsx)(`path`, {
          d: `M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  MY = () => {
    let e = Z();
    return (0, Q.jsxs)(`svg`, {
      className: (0, $.default)(lY, void 0, e.IconGamesPlayed),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 215 215`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z`,
          fill: `#E5E5E5`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  NY = () => {
    let e = Z();
    return (0, Q.jsx)(`svg`, {
      className: (0, $.default)(lY, void 0, e.IconAchievement),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `120px`,
      viewBox: `0 0 240 276`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, Q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z`,
        fill: `#E5E5E5`,
      }),
    });
  };
function PY(e) {
  let { userYearInReview: t } = e,
    n = Z();
  return (0, Q.jsx)(fq, {
    className: (0, $.default)(xK, n.TopHonorsSection),
    children: (0, Q.jsx)(`div`, {
      className: (0, $.default)(dG, pG),
      children: (0, Q.jsxs)(`div`, {
        className: uJ,
        children: [
          (0, Q.jsx)(FY, { userYearInReview: t }),
          (0, Q.jsxs)(`div`, {
            className: MJ,
            children: [
              (0, Q.jsx)(zY, { userYearInReview: t }),
              (0, Q.jsx)(UY, { userYearInReview: t }),
            ],
          }),
        ],
      }),
    }),
  });
}
function FY(e) {
  let { userYearInReview: t } = e;
  t.GetYear();
  let n = JW(),
    r = Z(),
    i = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
    a = t.GetFilteredGameSummary()?.length || 0,
    o = t.GetPlayTimeStats().playtime_streak?.longest_consecutive_days || 0,
    s = t.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
    c = t.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
    l = t.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
    u = o > 0 && l > 0 && !_H();
  (s >= 99 && (s = 100),
    c >= 99 && (c = 100),
    l >= 99 && (l = 100),
    i == t.GetPlayTimeStats().by_numbers?.achievements_avg && (s = 50),
    a == t.GetPlayTimeStats().by_numbers?.games_played_avg && (c = 50),
    o == t.GetPlayTimeStats().by_numbers?.game_streak_avg && (l = 50),
    i == 0 && (s = 0),
    a == 0 && (c = 0),
    o == 0 && (l = 0));
  let [d, f] = B.useState(!1),
    [p, m] = B.useState(!1),
    [h, g] = B.useState(!1),
    _ = B.useCallback(async (e) => {
      e && (f(!0), m(!0), g(!0));
    }, []),
    v = (0, Q.jsx)(kY, {
      endValue: i,
      maxValue: (i * 100) / s,
      duration: 2e3,
      startAnimation: d,
      delay: 500,
    }),
    y = (0, Q.jsx)(kY, {
      endValue: a,
      maxValue: (a * 100) / c,
      duration: 2e3,
      startAnimation: p,
      delay: 700,
    }),
    b = (0, Q.jsx)(kY, {
      endValue: o,
      maxValue: (o * 100) / l,
      duration: 2e3,
      startAnimation: h,
      delay: 900,
    });
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(JJ, r.PlayBehaviorContainer),
    children: [
      (0, Q.jsx)(`div`, {
        className: CG,
        children: n(`#YIR_Compare_Title_Label`),
      }),
      (0, Q.jsx)(`div`, {
        className: (0, $.default)(TG, tY),
        children: n(`#YIR_Compare_Subtitle_Label`),
      }),
      (0, Q.jsxs)(hi, {
        onVisibilityChange: _,
        children: [
          (0, Q.jsx)(IY, {
            progressLabel: n(
              i == 1
                ? `#YIR_Compare_PlayerProgress_Achievements_Single`
                : `#YIR_Compare_PlayerProgress_Achievements_Label`,
              v,
            ),
            userPercent: s,
            steamAverage: t.GetPlayTimeStats().by_numbers?.achievements_avg,
            progressIcon: (0, Q.jsx)(NY, {}),
          }),
          (0, Q.jsx)(IY, {
            progressLabel: n(
              a == 1
                ? `#YIR_Compare_PlayerProgress_PlayedGames_Single`
                : `#YIR_Compare_PlayerProgress_PlayedGames_Label`,
              y,
            ),
            userPercent: c,
            steamAverage: t.GetPlayTimeStats().by_numbers?.games_played_avg,
            progressIcon: (0, Q.jsx)(MY, {}),
          }),
          u &&
            (0, Q.jsx)(IY, {
              progressLabel: n(
                o == 1
                  ? `#YIR_Compare_PlayerProgress_LongestStreak_Single`
                  : `#YIR_Compare_PlayerProgress_LongestStreak_Label`,
                b,
              ),
              userPercent: l,
              steamAverage: t.GetPlayTimeStats().by_numbers?.game_streak_avg,
              progressIcon: (0, Q.jsx)(jY, {}),
            }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: pY,
        children: (0, Q.jsx)(RY, { userYearInReview: t }),
      }),
    ],
  });
}
function IY(e) {
  let {
      progressLabel: t,
      steamAverage: n,
      progressIcon: r,
      userPercent: i,
    } = e,
    a = Z();
  return (
    (i = Je(i, 0, 100)),
    (0, Q.jsxs)(fq, {
      className: nY,
      children: [
        (0, Q.jsx)(`div`, { className: cY, children: r }),
        (0, Q.jsxs)(`div`, {
          className: uY,
          children: [
            (0, Q.jsx)(`div`, {
              className: (0, $.default)(fY, a.ProgressLabel),
              children: t,
            }),
            (0, Q.jsx)(`div`, {
              className: dY,
              children: (0, Q.jsx)(`div`, {
                className: rY,
                children: (0, Q.jsx)(`div`, {
                  className: (0, $.default)(
                    YJ,
                    a.ProgressBarFilled,
                    a.ProgressBarFilledGradient,
                  ),
                  style: {
                    clipPath:
                      `polygon(0% 0, ` + i + `% 0%, ` + i + `% 100%, 0% 100%)`,
                  },
                  children: (0, Q.jsxs)(`div`, {
                    className: XJ,
                    children: [
                      (0, Q.jsx)(`div`, { className: QJ }),
                      (0, Q.jsx)(`div`, { className: (0, $.default)(QJ, ZJ) }),
                    ],
                  }),
                }),
              }),
            }),
            (0, Q.jsx)(`div`, {
              className: iY,
              children:
                n &&
                (0, Q.jsx)(`div`, {
                  className: `aKnZAgIhrq0-`,
                  children: R.Localize(
                    `#YIR_Compare_PlayerProgress_Steam_Avg`,
                    n,
                  ),
                }),
            }),
          ],
        }),
      ],
    })
  );
}
var LY = {
  NewActive: `#YIR_Compare_NewGames_Flavor`,
  UsedActive: `#YIR_Compare_ComfortGames_Flavor`,
  OldActive: `#YIR_Compare_OldGames_Flavor`,
};
function RY(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = Z(),
    i = r.new_games_color,
    a = r.used_games_color,
    o = r.old_games_color,
    [s, c] = (0, B.useState)(`NewActive`),
    l = JW(),
    u = t.GetGlobalGameplayDistribition(),
    d = {
      NewActive: u?.new_releases || 0,
      UsedActive: u?.recent_releases || 0,
      OldActive: u?.classic_releases || 0,
    },
    f = u && u.new_releases ? u.recent_cutoff_year : 7,
    p = f + 1,
    [m, h, g] = B.useMemo(() => {
      let e = t.GetGameAgeCounts([1, p]),
        n = e.reduce((e, t) => t + e, 0);
      if (n == 0) return [0, 0, 0];
      let r = e.map((e) => Math.floor((e * 100) / n)),
        i = 100 - r.reduce((e, t) => t + e, 0),
        a = e.map((e, t) => ({ decimal: ((e * 100) / n) % 1, index: t }));
      for (
        a = a.sort((e, t) => e.decimal - t.decimal);
        i > 0 && a.length > 0;
      ) {
        let e = a.pop();
        ((r[e.index] += 1), --i);
      }
      return r;
    }, [t, p]),
    _ = { NewActive: m, UsedActive: h, OldActive: g },
    v = {
      NewActive: l(`#YIR_Compare_NewGames_Desc_User`, n),
      UsedActive: l(`#YIR_Compare_ComfortGames_Desc_User`, f),
      OldActive: l(`#YIR_Compare_OldGames_Desc_User`, p),
    },
    y = {
      NewActive: R.Localize(`#YIR_Compare_NewGames_Desc_AvgSteam`, n),
      UsedActive: R.Localize(`#YIR_Compare_ComfortGames_Desc_AvgSteam`, f),
      OldActive: R.Localize(`#YIR_Compare_OldGames_Desc_AvgSteam`, p),
    },
    b = (0, B.useMemo)(() => {
      let e = [];
      return (
        e.push({ name: `new`, value: m > 0 ? m : 1 }),
        e.push({ name: `used`, value: h > 0 ? h : 1 }),
        e.push({ name: `old`, value: g > 0 ? g : 1 }),
        e
      );
    }, [m, h, g]);
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(mY, lJ[s], r[s]),
    children: [
      (0, Q.jsx)(`div`, {
        className: (0, $.default)(EY, r.GameNewnessTitle),
        children: R.LocalizeReact(
          `#YIR_Compare_Flavor_Title`,
          (0, Q.jsx)(`div`, {}),
        ),
      }),
      (0, Q.jsxs)(`div`, {
        className: hY,
        children: [
          (0, Q.jsx)(`div`, {
            className: gY,
            children: (0, Q.jsx)(uV, {
              responsive: !0,
              style: { width: `100%`, aspectRatio: 1 },
              children: (0, Q.jsxs)(hF, {
                data: b,
                dataKey: `value`,
                nameKey: `name`,
                cx: `50%`,
                cy: `50%`,
                innerRadius: `48%`,
                outerRadius: `92%`,
                fill: `#8884d8`,
                paddingAngle: 3,
                minAngle: 2,
                startAngle: 45,
                endAngle: 405,
                children: [
                  (0, Q.jsx)(
                    RA,
                    {
                      onMouseEnter: () => c(`NewActive`),
                      className: (0, $.default)(
                        _Y,
                        s === `NewActive` && `DXcvT92GGo8-`,
                      ),
                      fill: i,
                      style:
                        s === `NewActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-1`,
                  ),
                  (0, Q.jsx)(
                    RA,
                    {
                      onMouseEnter: () => c(`UsedActive`),
                      className: (0, $.default)(
                        _Y,
                        s === `UsedActive` && `DXcvT92GGo8-`,
                      ),
                      fill: a,
                      style:
                        s === `UsedActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-2`,
                  ),
                  (0, Q.jsx)(
                    RA,
                    {
                      onMouseEnter: () => c(`OldActive`),
                      className: (0, $.default)(
                        _Y,
                        s === `OldActive` && `DXcvT92GGo8-`,
                      ),
                      fill: o,
                      style:
                        s === `OldActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-3`,
                  ),
                ],
              }),
            }),
          }),
          (0, Q.jsx)(`div`, {
            className: yY,
            children: (0, Q.jsxs)(`div`, {
              className: bY,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: (0, $.default)(
                    void 0,
                    r.UserData,
                    SY,
                    r.DataBox,
                    r.Background,
                  ),
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)(
                        TY,
                        r.DataBoxArrow,
                        r.Background,
                      ),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: (0, $.default)(CY, r.PercentageLabel, r.Color),
                      children: [
                        R.Localize(`#YIR_Compare_Percentage`, _[s]),
                        (0, Q.jsx)(`div`, {
                          className: xY,
                          children: R.Localize(LY[s]),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)(
                        wY,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: v[s],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: (0, $.default)(
                    void 0,
                    r.SteamData,
                    SY,
                    r.DataBox,
                    r.Border,
                  ),
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)(CY, r.PercentageLabel, r.Color),
                      children: R.Localize(`#YIR_Compare_Percentage`, d[s]),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)(
                        wY,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: y[s],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function zY(e) {
  let { userYearInReview: t } = e,
    n = t.GetUserAggregateTagData(),
    { data: r } = ks(ft.LANGUAGE),
    i = JW(),
    a = Z(),
    o = BY(),
    s = n.map((e) => e.nPreSelectionWeight).sort((e, t) => t - e),
    c = n.map((e, t) => {
      let n = s.findIndex((t) => t - e.nPreSelectionWeight < 1e-5);
      return { subject: r && r[e.nTagId], A: (6 - n) * 10 + 2 * t + 0.5 };
    });
  if (c.length == 0) return null;
  let l = c.map((e, t) => (0, Q.jsx)(`li`, { children: e.subject }, t));
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(PJ, NJ),
    children: [
      (0, Q.jsx)(`div`, {
        className: KJ,
        children: R.Localize(`#YIR_Spider_Title`),
      }),
      (0, Q.jsx)(`div`, {
        className: (0, $.default)(qJ, a.SectionDesc),
        children: i(`#YIR_Spider_Desc`, t.GetYear()),
      }),
      (0, Q.jsx)(`div`, {
        className: FJ,
        children: (0, Q.jsxs)(pV, {
          responsive: !0,
          className: RJ,
          style: { width: `100%`, height: `100%` },
          cx: `50%`,
          cy: `50%`,
          outerRadius: `70%`,
          data: c,
          children: [
            (0, Q.jsx)(iN, {}),
            (0, Q.jsx)(jN, {
              tick: (0, Q.jsx)(VY, { bNumberedLabels: o }),
              dataKey: `subject`,
            }),
            (0, Q.jsx)(EI, {
              name: `tempRadar`,
              dataKey: `A`,
              stroke: `#8884d8`,
              fill: `#8884d8`,
              fillOpacity: 1,
              animationDuration: 2e3,
              isAnimationActive: !0,
            }),
          ],
        }),
      }),
      o &&
        (0, Q.jsxs)(`ol`, {
          className: `e5EFq580oLg-`,
          children: [` `, l, ` `],
        }),
    ],
  });
}
function BY() {
  let [e, t] = (0, B.useState)(!1);
  return ((0, B.useEffect)(() => t(jn() || window.innerWidth <= 300), []), e);
}
function VY(e) {
  let { payload: t, x: n, verticalAnchor: r, bNumberedLabels: i, ...a } = e;
  return i
    ? (0, Q.jsx)(`text`, {
        x: n,
        ...a,
        children: (0, Q.jsx)(`tspan`, {
          x: n,
          dy: `20px`,
          children: t.index + 1,
        }),
      })
    : (0, Q.jsx)(`svg`, {
        x: n - 85,
        ...a,
        width: `170px`,
        height: `100%`,
        children: (0, Q.jsx)(`foreignObject`, {
          className: LJ,
          dy: `20px`,
          width: `170`,
          height: `150`,
          children: (0, Q.jsx)(`div`, { className: IJ, children: t.value }),
        }),
      });
}
function HY(e) {
  let t = e.GetRawStats().playtime_stats?.by_numbers;
  return t
    ? [
        [`#YIR_ByTheNum_Friends`, t.friends_added || 0],
        [`#YIR_ByTheNum_GiftsSent`, t.gifts_sent || 0],
        [`#YIR_ByTheNum_AwardsGiven`, t.loyalty_reactions || 0],
        [`#YIR_ByTheNum_Badges`, t.badges_earned || 0],
        [`#YIR_ByTheNum_Screenshots`, t.screenshots_shared || 0],
        [`#YIR_ByTheNum_Reviews`, t.written_reviews || 0],
        [`#YIR_ByTheNum_Posts`, t.forum_posts || 0],
        [`#YIR_ByTheNum_Guides`, t.guides_submitted || 0],
        [`#YIR_ByTheNum_GuideSubs`, t.guide_subscribers || 0],
        [`#YIR_ByTheNum_Workshops`, t.workshop_contributions || 0],
        [`#YIR_ByTheNum_WorkshopSubscribers`, t.workshop_subscribers || 0],
        [`#YIR_ByTheNum_WorkshopSubscriptions`, t.workshop_subscriptions || 0],
      ].sort((e, t) => t[1] - e[1])
    : [];
}
function UY(e) {
  let { userYearInReview: t } = e,
    n = HY(t);
  if (n.length == 0) return null;
  let r = n.map(([e, t]) =>
    (0, Q.jsx)(WY, { label: R.Localize(e), value: t }, e),
  );
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(void 0, NJ),
    children: [
      (0, Q.jsx)(`div`, {
        className: KJ,
        children: R.Localize(`#YIR_ByTheNum_Title`),
      }),
      (0, Q.jsx)(`div`, { className: BJ, children: r }),
    ],
  });
}
function WY(e) {
  let { label: t, value: n } = e,
    r = n ? Ur(n) : `-`;
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(VJ, n == 0 && `MvmFmRp0gao-`),
    children: [
      (0, Q.jsx)(`div`, { className: HJ, children: t }),
      (0, Q.jsx)(`div`, { className: WJ }),
      (0, Q.jsx)(`div`, { className: UJ, children: r }),
    ],
  });
}
var GY = `Wdvtmz-DIUA-`,
  KY = `_30hJH5z6jtk-`,
  qY = `nFsP-fXNWUA-`,
  JY = `c1gySWWvs3I-`;
function YY(e) {
  let { userYearInReview: t } = e;
  if (rt.is_support || rt.accountid == t.GetAccountID()) {
    let e = t.GetSteamID(),
      n = t.GetYear();
    return (0, Q.jsxs)(te, {
      rootMargin: `0px 0px 100% 0px`,
      children: [
        (0, Q.jsx)(XY, { steamid: e, year: n }),
        (0, Q.jsx)(QY, { steamid: e, year: n }),
      ],
    });
  }
  return null;
}
function XY(e) {
  let { steamid: t, year: n } = e,
    { data: r } = iU(t);
  if (!r || r.is_not_member_of_any_group || !r.family_group) return null;
  let i = (r.family_group.members ?? [])
    .map((e) => e.steamid)
    .filter((e) => !!e && e !== t);
  return i.length == 0
    ? null
    : (0, Q.jsxs)(`div`, {
        className: KY,
        children: [
          (0, Q.jsx)(`div`, {
            className: qY,
            children: R.Localize(`#YIR_FamilyShared`),
          }),
          (0, Q.jsx)(`div`, {
            className: JY,
            children: i.map((e) =>
              (0, Q.jsx)(
                $Y,
                { steamid: e, year: n, ePrivacy: 3, bPrivacyOverride: !1 },
                `family_` + e,
              ),
            ),
          }),
        ],
      });
}
var ZY = 50;
function QY(e) {
  let { steamid: t, year: n } = e,
    { isLoading: r, data: i } = nU(t, n),
    a = (0, B.useMemo)(
      () =>
        i
          ? [...i]
              .sort(
                (e, t) =>
                  (t.rt_privacy_updated ?? 0) - (e.rt_privacy_updated ?? 0),
              )
              .slice(0, ZY)
          : [],
      [i],
    ),
    o = (0, B.useMemo)(
      () => a.map((e) => new kt(e.steamid).GetAccountID()),
      [a],
    ),
    s = Ys(o);
  if (r || o?.length == 0 || !s) return null;
  let c = new Map();
  for (let e of s) e && e.steamid && c.set(e.steamid, e.persona_name ?? ``);
  return (
    a.sort((e, t) => c.get(e.steamid).localeCompare(c.get(t.steamid))),
    (0, Q.jsxs)(`div`, {
      className: KY,
      children: [
        (0, Q.jsx)(`div`, {
          className: qY,
          children: R.Localize(`#YIR_FriendShared`),
        }),
        (0, Q.jsx)(Fa, {
          className: JY,
          "flow-children": `grid`,
          children: a
            .slice(0, ZY)
            .map((e) =>
              (0, Q.jsx)(
                $Y,
                {
                  steamid: e.steamid,
                  ePrivacy: e.privacy_state,
                  year: n,
                  bPrivacyOverride: e.privacy_override,
                },
                `friendshare_` + e.steamid + `_` + n,
              ),
            ),
        }),
        !!rt.is_support &&
          (0, Q.jsx)(`div`, {
            style: {
              backgroundColor: `#461F28`,
              border: `1px solid #761F28`,
              padding: `4px`,
            },
            children: R.Localize(`#YIR_FriendShared_support`),
          }),
      ],
    })
  );
}
function $Y(e) {
  let { steamid: t, year: n, ePrivacy: r } = e,
    i = Z();
  return (0, Q.jsx)(fo, {
    href: `${ft.STORE_BASE_URL}replay/${t}/${n}`,
    className: (0, $.default)({
      [void 0]: r == 1,
      [GY]: !0,
      [i.FriendCtn]: !0,
    }),
    children: (0, Q.jsx)($s, {
      accountID: new kt(t).GetAccountID(),
      bHideWhenNotAvailable: !0,
      bLink: !1,
    }),
  });
}
function eX(e) {
  return `${ft.STORE_CDN_URL}public/images/yearinreview/${e}`;
}
var tX = `cQe-oob-ixY-`,
  nX = `tv7SmCaHL8c-`,
  rX = `QEvd6eyhjtk-`,
  iX = `VKJxuXZg9J4-`,
  aX = `_8fQsxmA8PSo-`,
  oX = `UNBAK8TydWc-`,
  sX = `qxLHCRfIBjM-`;
AY();
var cX = 100;
function lX(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats(),
    r = n.total_stats,
    i = n.game_summary,
    a = JW(),
    o = Z(),
    s = (0, B.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > cX &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: r.windows_playtime_percentagex100,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > cX &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: r.linux_playtime_percentagex100,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > cX &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: r.macos_playtime_percentagex100,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > cX &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: r.vr_playtime_percentagex100,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > cX &&
          e.push({
            id: `deck`,
            name: R.Localize(`#YIR_Platfrom_deck`),
            value: r.deck_playtime_percentagex100,
          }),
        e
      );
    }, [r]),
    c = (0, B.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > cX &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: i.filter((e) => e.played_windows).length,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > cX &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: i.filter((e) => e.played_linux).length,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > cX &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: i.filter((e) => e.played_mac).length,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > cX &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: i.filter((e) => e.played_vr).length,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > cX &&
          e.push({
            id: `deck`,
            name: R.Localize(`#YIR_Platfrom_deck`),
            value: i.filter((e) => e.played_deck).length,
          }),
        e
      );
    }, [r, i]);
  if (s.length < 2) return null;
  let l = mX(r);
  return (0, Q.jsx)(fq, {
    className: (0, $.default)(_W, o.PlatformChartsCtn),
    children: (0, Q.jsxs)(`div`, {
      className: (0, $.default)(dG, vW),
      children: [
        (0, Q.jsx)(`div`, { className: CG, children: a(`#YIR_Platform`) }),
        (0, Q.jsxs)(`div`, {
          className: yW,
          children: [
            (0, Q.jsxs)(`div`, {
              className: bW,
              children: [
                (0, Q.jsx)(`div`, {
                  className: xW,
                  children: R.Localize(`#YIR_Platfrom_playtime`),
                }),
                (0, Q.jsxs)(uV, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Q.jsx)(hF, {
                      data: s,
                      dataKey: `value`,
                      nameKey: `name`,
                      cx: `50%`,
                      cy: `50%`,
                      innerRadius: `40%`,
                      outerRadius: `80%`,
                      fill: `#8884d8`,
                      paddingAngle: 1,
                      children: s.map((e, t) =>
                        (0, Q.jsx)(RA, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Q.jsx)(LA, {
                      content: (e) =>
                        (0, Q.jsx)(uX, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Q.jsx)(Jg, {}),
                  ],
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: bW,
              children: [
                (0, Q.jsx)(`div`, {
                  className: xW,
                  children: R.Localize(`#YIR_Platfrom_games`),
                }),
                (0, Q.jsxs)(uV, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Q.jsx)(hF, {
                      data: c,
                      dataKey: `value`,
                      nameKey: `name`,
                      cx: `50%`,
                      cy: `50%`,
                      innerRadius: `40%`,
                      outerRadius: `80%`,
                      fill: `#82ca9d`,
                      paddingAngle: 1,
                      children: c.map((e, t) =>
                        (0, Q.jsx)(RA, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Q.jsx)(LA, {
                      content: (e) =>
                        (0, Q.jsx)(dX, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Q.jsx)(Jg, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
        (l.bDeck || l.bVR) &&
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(`jKX9urC1MxY-`, `_2fuIOljIHpg-`),
            children: a(`#YIR_Platform_DiveIn`),
          }),
      ],
    }),
  });
}
function uX(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value;
    return (0, Q.jsxs)(Dt, {
      children: [n[0].name, `: `, R.Localize(`#YIR_Percent_Playtime`, XW(e))],
    });
  }
  return null;
}
function dX(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value,
      t = n[0].name;
    return (0, Q.jsx)(Dt, {
      children: R.Localize(
        e === 1
          ? `#YIR_Platfrom_gamesplays_tooltip`
          : `#YIR_Platfrom_gamesplays_tooltip_Plural`,
        Ur(e),
        t,
      ),
    });
  }
  return null;
}
function fX(e) {
  let { userYearInReview: t } = e;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(lX, { userYearInReview: t }),
      (0, Q.jsx)(hX, { userYearInReview: t }),
    ],
  });
}
function pX(e) {
  let { userYearInReview: t, strClassName: n, nYear: r } = e,
    i = t.GetRawStats(),
    a = JW(),
    o = a(`#YIR_TopGames_deck_subtitle`),
    {
      nTotalGames: s,
      nTotalSessions: c,
      nTotalPercentage: l,
    } = (0, B.useMemo)(() => CH(i, `deck`), [i]),
    { rgResults: u } = (0, B.useMemo)(() => yH(t, `deck`, 5, l), [t, l]),
    d = Number(Math.round(l / 100).toFixed(0)),
    f = a(`#YIR_TopGames_deck_new`);
  d > 50 && (f = a(`#YIR_TopGames_deck_mostly`));
  let p = (0, B.useRef)(null),
    m = Ba((e) => {
      p.current &&
        p.current.style.setProperty(
          `--contentSize`,
          `${e.contentRect.width}px`,
        );
    }),
    [h, g] = B.useState(!1),
    _ = B.useCallback((e) => {
      e && g(!0);
    }, []),
    v = (0, Q.jsx)(kY, { endValue: s, duration: 2e3, startAnimation: h }),
    y = (0, Q.jsx)(kY, { endValue: c, duration: 2e3, startAnimation: h }),
    b = (0, B.useRef)(null);
  return (
    Ks(b),
    (0, Q.jsxs)(`div`, {
      className: (0, $.default)(n, dq.PlatformContentsCtn, rX),
      ref: p,
      children: [
        (0, Q.jsx)(`div`, {
          className: (0, $.default)(dq.SectionTitle, oX),
          children: f,
        }),
        (0, Q.jsxs)(`div`, {
          className: sX,
          ref: m,
          children: [
            (0, Q.jsxs)(`div`, {
              className: nX,
              children: [
                (0, Q.jsxs)(hi, {
                  onVisibilityChange: _,
                  className: (0, $.default)(dG, dq.StatsRow, iX),
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: dq.StatBlock,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: dq.BigNum,
                          children: v,
                        }),
                        (0, Q.jsx)(`div`, {
                          className: dq.StatDescription,
                          children: R.LocalizePlural(`#YIR_NewLine_Games`, s),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: dq.StatBlock,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: dq.BigNum,
                          children: y,
                        }),
                        (0, Q.jsx)(`div`, {
                          className: dq.StatDescription,
                          children: R.LocalizePlural(`#YIR_NewLine_Session`, c),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(yq, { percentVal: l, subToken: `#YIR_NewLine` }),
                  ],
                }),
                !1,
                (0, Q.jsx)(fq, {
                  className: uW,
                  children: (0, Q.jsx)(gq, {
                    rgGamePercentages: u,
                    category: `deck`,
                  }),
                }),
              ],
            }),
            (0, Q.jsxs)(`video`, {
              className: tX,
              poster: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg`,
              playsInline: !0,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              controls: !1,
              ref: b,
              children: [
                (0, Q.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm`,
                  type: `video/webm`,
                }),
                (0, Q.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4`,
                  type: `video/mp4`,
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: (0, $.default)(dq.Disclaimer, aX),
          children: o,
        }),
      ],
    })
  );
}
function mX(e) {
  return {
    bDeck:
      typeof e.deck_playtime_percentagex100 == `number` &&
      e.deck_playtime_percentagex100 > 100,
    bVR:
      typeof e.vr_playtime_percentagex100 == `number` &&
      e.vr_playtime_percentagex100 > 100,
  };
}
function hX(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = JW(),
    i = t.GetPlayTimeStats().total_stats,
    a = i.controller_playtime_percentagex100 + i.deck_playtime_percentagex100,
    o = !1;
  a > 7e3 && (o = !0);
  let s = mX(i);
  return (0, Q.jsxs)(te, {
    rootMargin: `0px 0px 100% 0px`,
    children: [
      !!s.bDeck &&
        (0, Q.jsx)(fq, {
          className: (0, $.default)(dq.Section, dq.Deck),
          children: (0, Q.jsx)(pX, { userYearInReview: t, nYear: n }),
        }),
      !!s.bVR &&
        (0, Q.jsx)(fq, {
          className: (0, $.default)(dq.Section, dq.VR),
          children: (0, Q.jsx)(pq, {
            category: `vr`,
            userYearInReview: t,
            bgImageURL: eX(`vr_background6.webp`),
            title: r(`#YIR_TopGames_vr`),
            subTitle: void 0,
          }),
        }),
      a > 1e3 &&
        (0, Q.jsx)(fq, {
          className: (0, $.default)(dq.Section, dq.Controller),
          children: (0, Q.jsx)(pq, {
            category: `controller`,
            userYearInReview: t,
            title: r(
              o ? `#YIR_TopGames_controllerMost` : `#YIR_TopGames_controller`,
              XW(a),
            ),
            subTitle: r(
              `#YIR_Platform_subtitle_controller`,
              R.Localize(`#YIR_Platfrom_controller_forsubtitle`),
            ),
          }),
        }),
      n >= 2024 &&
        (0, Q.jsx)(jt, { children: (0, Q.jsx)(gX, { userYearInReview: t }) }),
    ],
  });
}
function gX(e) {
  let { userYearInReview: t } = e,
    n = JW(),
    [r, i] = (0, B.useMemo)(
      () => [
        t
          .GetDemoByPlaytime()
          .filter(Boolean)
          .map((e) => e.total_playtime_percentagex100)
          .reduce((e, t) => e + t, 0),
        t
          .GetPlaytestByPlaytime()
          .filter(Boolean)
          .map((e) => e.total_playtime_percentagex100)
          .reduce((e, t) => e + t, 0),
      ],
      [t],
    );
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      r > 100 &&
        (0, Q.jsxs)(fq, {
          className: (0, $.default)(dq.Section, dq.Demo),
          children: [
            (0, Q.jsx)(`div`, { className: dq.BG_Demo }),
            (0, Q.jsx)(pq, {
              category: `demo`,
              userYearInReview: t,
              title: n(`#YIR_TopGames_demo`),
              subTitleTokenIfMax: `#YIR_TopGames_demoMax`,
            }),
          ],
        }),
      i > 100 &&
        (0, Q.jsxs)(fq, {
          className: (0, $.default)(dq.Section, dq.Playtest),
          children: [
            (0, Q.jsx)(`div`, { className: dq.BG_Playtest }),
            (0, Q.jsx)(pq, {
              category: `playtest`,
              userYearInReview: t,
              title: n(`#YIR_TopGames_playtest`),
              subTitleTokenIfMax: `#YIR_TopGames_playtestMax`,
            }),
          ],
        }),
    ],
  });
}
var _X = `Zyx-HjZHUjo-`,
  vX = `_1lcI3rMkINQ-`,
  yX = `qHBQax2jUhc-`,
  bX = `O1K2KPMCdBU-`,
  xX = `vNi0RlyomPM-`,
  SX = `TX-ZbWuG6nU-`,
  CX = `IrsybK-NCqg-`,
  wX = `-cwbu3H1bWI-`,
  TX = `N6MvnixTrWs-`,
  EX = `jYZcHfHVJ7Q-`,
  DX = `pMnJje5ddJk-`,
  OX = `_2hCwBXP7Dak-`,
  kX = `yvIttucwtMQ-`,
  AX = `yy3vzELgSfc-`,
  jX = `SOTrGkaPWt0-`,
  MX = `ttuzGl2s44c-`;
function NX(e) {
  let { userYearInReview: t } = e;
  if (_H()) return null;
  let n = t.GetPlayTimeStats().playtime_streak;
  return !n ||
    (typeof n.longest_consecutive_days == `number` &&
      n.longest_consecutive_days < 5)
    ? null
    : (0, Q.jsx)(PX, { ...e, longestStreak: n });
}
function PX(e) {
  let { userYearInReview: t, longestStreak: n } = e,
    r = JW(),
    i = QW(),
    a = Z(),
    [o, s] = B.useState(!1),
    c = B.useCallback((e) => {
      e && s(!0);
    }, []),
    [l, u] = B.useState(!1),
    d = B.useCallback((e) => {
      e &&
        window.setTimeout(() => {
          u(!0);
        }, 30);
    }, []),
    [f, p] = B.useState(!1),
    m = n.streak_games.length > 12 && !f,
    h = m
      ? n.streak_games.sort((e, t) => e.appid - t.appid).slice(0, 12)
      : n.streak_games.sort((e, t) => e.appid - t.appid),
    g = h.map((e) => e.appid),
    _ = n.streak_games.length,
    v = n.longest_consecutive_days ?? 0;
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(DW, TX, _X, a.Section),
    children: [
      (0, Q.jsx)(`div`, {
        className: (0, $.default)(MX, a.LongestStreakBgImage),
      }),
      (0, Q.jsxs)(`div`, {
        className: dG,
        children: [
          (0, Q.jsxs)(`div`, {
            className: vX,
            children: [
              (0, Q.jsx)(hi, {
                className: yX,
                onVisibilityChange: c,
                children: r(
                  `#YIR_Longest_Streak_Title`,
                  (0, Q.jsx)(kY, {
                    className: xX,
                    endValue: v,
                    duration: 2e3,
                    startAnimation: o,
                  }),
                ),
              }),
              (0, Q.jsxs)(fq, {
                className: DX,
                children: [
                  (0, Q.jsx)(`div`, { className: bX }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(OX, a.StreakSizeFullBar),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)({ [AX]: !0, [jX]: v < 40 }),
                    children: (0, Q.jsx)(IX, { nDays: v - 1 }),
                  }),
                  (0, Q.jsx)(`div`, { className: bX }),
                ],
              }),
              (0, Q.jsxs)(fq, {
                className: SX,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: void 0,
                    children: i(n.rtime_start ?? 0),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: void 0,
                    children: i((n.rtime_start ?? 0) + v * 24 * 60 * 60),
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(hi, {
            onVisibilityChange: d,
            className: (0, $.default)(CW, CX),
            children: [
              (0, Q.jsx)(`div`, {
                className: (0, $.default)(wX, l && `JoDLfdcjJPY-`),
                children: r(
                  _ > 1
                    ? `#YIR_Longest_Streak_Games`
                    : `#YIR_Longest_Streak_Games_Singular`,
                  Ur(_),
                ),
              }),
              (0, Q.jsx)(`div`, {
                className: (0, $.default)(EX),
                children: (0, Q.jsx)(Fa, {
                  "flow-children": `grid`,
                  className: (0, $.default)(wW, TW, l && `c42w8bI3Dx0-`),
                  children: h.map((e, n) => {
                    let r = t.GetGameSummaryForApp(e.appid);
                    return (0, Q.jsx)(
                      _q,
                      {
                        appid: e.appid,
                        index: n,
                        loading: `lazy`,
                        rgAppIDs: g,
                        nParentAppID: r?.parent_appid,
                        eChildType: FX(r),
                      },
                      `longest_` + e.appid,
                    );
                  }),
                }),
              }),
            ],
          }),
          m &&
            (0, Q.jsx)(`div`, {
              className: `z4JPVbkRELk-`,
              children: (0, Q.jsx)(`a`, {
                href: `#`,
                className: `dUBouRPf5BM-`,
                onClick: () => p(!0),
                children: R.Localize(`#YIR_ShowMore`),
              }),
            }),
        ],
      }),
    ],
  });
}
function FX(e) {
  if (e?.demo) return 1;
  if (e?.playtest) return 12;
}
function IX(e) {
  let { nDays: t } = e,
    n = [];
  if (t > 0) {
    for (let e = 0; e < t + 2; ++e)
      n.push((0, Q.jsx)(`div`, { className: kX }, `DrawNDivForStreakDays` + e));
    return (0, Q.jsx)(Q.Fragment, { children: n });
  }
  return null;
}
var LX = `qdYD-Nli-BU-`,
  RX = `ocrq1-0nW8Y-`,
  zX = `uvsrpXUQL6E-`,
  BX = `JSoZ402xLkY-`;
function VX(e) {
  let { steamid: t, year: n } = e,
    r = Z(),
    { rgOtherYears: i } = cU(),
    a = JW();
  return i.length === 0
    ? null
    : (0, Q.jsxs)(`div`, {
        className: LX,
        children: [
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(RX, r.OtherYearsHeader),
            children: a(`#YearInReview_OtherYearLinks_Header`),
          }),
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(zX, r.OtherYearLinks),
            children: i.map((e) =>
              (0, Q.jsx)(
                fo,
                {
                  href: `${ft.STORE_BASE_URL}replay/${t}/${e}?src=8`,
                  className: (0, $.default)(BX, r.OtherYearLink),
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      });
}
var HX = t({
    ActiveHint: () => VZ,
    Appear: () => lQ,
    Arrow: () => CZ,
    ArrowDisabled: () => EZ,
    BadgeBarFiller: () => cQ,
    BadgeBoxIntro: () => sQ,
    CarouselCtn: () => pZ,
    CarouselHint: () => BZ,
    CarouselHintCtn: () => zZ,
    CenterImage: () => OZ,
    CenterImg: () => PZ,
    CloseIcon: () => vZ,
    Disabled: () => tQ,
    DropDownSizer: () => tZ,
    DropdownButton: () => rZ,
    DropdownOption: () => aZ,
    ElementFadeIn: () => oQ,
    Error: () => iZ,
    FB: () => QZ,
    FeedBtn: () => ZZ,
    FooterCtn: () => UZ,
    FormatHint: () => HZ,
    ImageArrowCtn: () => SZ,
    ImagesCtn: () => DZ,
    ImgAndPreviewCtn: () => kZ,
    InteractButton: () => IZ,
    InteractButtonIcon: () => LZ,
    InteractButtonText: () => RZ,
    LangaugeDropdown: () => fZ,
    LanguageLabel: () => dZ,
    Left: () => wZ,
    LeftPeak: () => NZ,
    LoadingCtn: () => mZ,
    MobileCtn: () => rQ,
    PeakImg: () => FZ,
    Peek: () => jZ,
    PreviewAndIconCtn: () => _Z,
    PreviewClickCtn: () => gZ,
    PreviewImageCtn: () => hZ,
    PreviewImage_1080x1080: () => yZ,
    PreviewImage_1080x1920: () => bZ,
    PreviewImage_1200x628: () => xZ,
    PreviewMask: () => AZ,
    PrivacyWarning: () => XX,
    RD: () => eQ,
    Right: () => TZ,
    RightPeak: () => MZ,
    SeeRewindButton: () => $X,
    ShareArea: () => QX,
    ShareButton: () => YX,
    ShareColumns: () => GX,
    ShareCtn: () => qX,
    ShareHeader: () => nZ,
    ShareIcon: () => sZ,
    ShareLanguagePicker: () => uZ,
    ShareLinkButton: () => KZ,
    ShareLinkIcon: () => iQ,
    ShareLinkText: () => aQ,
    ShareModal: () => lZ,
    ShareModalDialogCtn: () => cZ,
    ShareOptions: () => UX,
    ShareShortUrl: () => qZ,
    ShareText: () => oZ,
    ShareTitle: () => WX,
    ShareTypeTitle: () => ZX,
    ShareURLCtn: () => GZ,
    ShareURLTitle: () => JZ,
    ShowcaseInfo: () => KX,
    SocialButtons: () => XZ,
    SteamButtons: () => YZ,
    TW: () => $Z,
    TooltipCtn: () => WZ,
    VisBorder: () => nQ,
    Visible: () => eZ,
    YIRShareCtn: () => JX,
    default: () => uQ,
  }),
  UX = `GQ15KBYq0dM-`,
  WX = `aXiQBfYGO9I-`,
  GX = `QsTph6fo6tE-`,
  KX = `MqMesN--4dY-`,
  qX = `mPg8ksPIypA-`,
  JX = `ql9xSqCdaH0-`,
  YX = `j8A4NpxJ0t0-`,
  XX = `wzkr-U2Espw-`,
  ZX = `smzKi1RTbdQ-`,
  QX = `PmXhnAChGR0-`,
  $X = `F8tObD0Db8k-`,
  eZ = `_74rjTvdFGHA-`,
  tZ = `_3K3tDOC4GJc-`,
  nZ = `r3ltIfNjuPk-`,
  rZ = `PzQjhUmqibw-`,
  iZ = `n1Fb28gGkQA-`,
  aZ = `IvgYPzwuDSc-`,
  oZ = `_2-Cr-SQJps0-`,
  sZ = `CnI2waDfQ34-`,
  cZ = `YKCweqawRAg-`,
  lZ = `WoxdMMqJPdU-`,
  uZ = `xH2JulcKe14-`,
  dZ = `UDsOCbvSZIU-`,
  fZ = `Gr4dorQ7W5c-`,
  pZ = `ANCmTxdRftQ-`,
  mZ = `p0yOORO-3xk-`,
  hZ = `v3ht7HUJu3M-`,
  gZ = `DIelFHIZzhU-`,
  _Z = `_7cpnCIhhrPY-`,
  vZ = `_1sB-7CAJZ8k-`,
  yZ = `xPVASClAx0k-`,
  bZ = `MUHNnGqkOqY-`,
  xZ = `vBdHL5mBGrg-`,
  SZ = `Zhn0fcf8K0A-`,
  CZ = `e1abu676--0-`,
  wZ = `H-DDc-hfx8I-`,
  TZ = `YH-nSsaJzMU-`,
  EZ = `pOiTs551keM-`,
  DZ = `IwfOPZqUlI0-`,
  OZ = `J3x0rrHLezU-`,
  kZ = `fmGqpqE4kNI-`,
  AZ = `boHwEaOCYyc-`,
  jZ = `IyLe07FQrvw-`,
  MZ = `XJ0X2gf4Bj8-`,
  NZ = `G3q0v1ojD1Y-`,
  PZ = `qfIY3K5wcM0-`,
  FZ = `_7c1acrIAHH4-`,
  IZ = `wNE8ANE5TsM-`,
  LZ = `cHPBGtpOoh8-`,
  RZ = `W6T4-MeSpIc-`,
  zZ = `hbAE9JcKwtk-`,
  BZ = `OOKPlPQEH-w-`,
  VZ = `a5nzDP5fAS8-`,
  HZ = `OKLgRZL9G-8-`,
  UZ = `YZ3SbPJqfpo-`,
  WZ = `mhqjR9vpV54-`,
  GZ = `vYxszMZbMu8-`,
  KZ = `gCfLNYFfCkY-`,
  qZ = `Fszxyt7mMys-`,
  JZ = `LFvgTxoh4cM-`,
  YZ = `O8FfPGGUfsk-`,
  XZ = `DT0tk4O37yI-`,
  ZZ = `ICd7j4gYWCY-`,
  QZ = `h96vh8Y0dDU-`,
  $Z = `_0XH6IlZcmBQ-`,
  eQ = `CJhunxWUcHo-`,
  tQ = `Vpkqj7M1WBw-`,
  nQ = `_7V5HmtHlzMQ-`,
  rQ = `RsGMBAZHmro-`,
  iQ = `uc6rSxuiYYU-`,
  aQ = `_6S7z8D0l51A-`,
  oQ = `W42-VaMVayE-`,
  sQ = `-Lm3gVp9t28-`,
  cQ = `Bp9o640kQcU-`,
  lQ = `F-nVb84xjt4-`,
  uQ = {
    ShareOptions: UX,
    ShareTitle: WX,
    ShareColumns: GX,
    ShowcaseInfo: KX,
    ShareCtn: qX,
    YIRShareCtn: JX,
    ShareButton: YX,
    PrivacyWarning: XX,
    ShareTypeTitle: ZX,
    ShareArea: QX,
    SeeRewindButton: $X,
    Visible: eZ,
    DropDownSizer: tZ,
    ShareHeader: nZ,
    DropdownButton: rZ,
    Error: `n1Fb28gGkQA-`,
    DropdownOption: aZ,
    ShareText: oZ,
    ShareIcon: sZ,
    ShareModalDialogCtn: cZ,
    ShareModal: lZ,
    ShareLanguagePicker: uZ,
    LanguageLabel: dZ,
    LangaugeDropdown: fZ,
    CarouselCtn: pZ,
    LoadingCtn: mZ,
    PreviewImageCtn: hZ,
    PreviewClickCtn: gZ,
    PreviewAndIconCtn: _Z,
    CloseIcon: vZ,
    PreviewImage_1080x1080: yZ,
    PreviewImage_1080x1920: bZ,
    PreviewImage_1200x628: xZ,
    ImageArrowCtn: SZ,
    Arrow: CZ,
    Left: wZ,
    Right: TZ,
    ArrowDisabled: EZ,
    ImagesCtn: DZ,
    CenterImage: OZ,
    ImgAndPreviewCtn: kZ,
    PreviewMask: AZ,
    Peek: jZ,
    RightPeak: MZ,
    LeftPeak: NZ,
    CenterImg: PZ,
    PeakImg: FZ,
    InteractButton: IZ,
    InteractButtonIcon: LZ,
    InteractButtonText: RZ,
    CarouselHintCtn: zZ,
    CarouselHint: BZ,
    ActiveHint: VZ,
    FormatHint: HZ,
    FooterCtn: UZ,
    TooltipCtn: WZ,
    ShareURLCtn: GZ,
    ShareLinkButton: KZ,
    ShareShortUrl: qZ,
    ShareURLTitle: JZ,
    SteamButtons: YZ,
    SocialButtons: XZ,
    FeedBtn: ZZ,
    FB: QZ,
    TW: $Z,
    RD: eQ,
    Disabled: tQ,
    VisBorder: nQ,
    MobileCtn: rQ,
    ShareLinkIcon: iQ,
    ShareLinkText: aQ,
    ElementFadeIn: oQ,
    BadgeBoxIntro: sQ,
    BadgeBarFiller: cQ,
    Appear: lQ,
  },
  dQ = `0123456789abcdef`,
  fQ = `bcdfghjkmnpqrtvw`;
function pQ(e, t, n) {
  return Array.from(e, (e) => {
    let r = t.indexOf(e);
    return r >= 0 ? n[r] : e;
  }).join(``);
}
function mQ(e) {
  return e ? pQ(new kt(e).GetAccountID().toString(16), dQ, fQ) : ``;
}
function hQ(e) {
  let { steamid: t, nYear: n } = e,
    r = GW(),
    i = Z();
  return rt.logged_in
    ? !r && rt.logged_in
      ? (0, Q.jsx)(fo, {
          className: (0, $.default)($X, i.SeeRewindButton),
          href: `${ft.STORE_BASE_URL}replay/${rt.steamid}/${n}?src=9`,
          children: R.Localize(`#YIR_SeeYourRewind`),
        })
      : (0, Q.jsxs)(Fa, {
          className: JX,
          children: [
            (0, Q.jsx)(gQ, { steamid: t, nYear: n }),
            (0, Q.jsxs)(Fa, {
              className: YX,
              onActivate: () => {
                sn((0, Q.jsx)(bQ, { steamid: t, nYear: n }), window, {
                  strTitle: xs.Localize(`#Button_Share`),
                });
              },
              children: [
                (0, Q.jsx)(Za, { className: (0, $.default)(sZ) }),
                (0, Q.jsx)(`span`, {
                  className: (0, $.default)(oZ),
                  children: xs.Localize(`#Button_Share`),
                }),
              ],
            }),
          ],
        })
    : null;
}
function gQ(e) {
  let { steamid: t, nYear: n } = e,
    [r, i] = (0, B.useState)(``),
    a = zH(t, n),
    { mutateAsync: o } = BH(t, n),
    s = (0, B.useMemo)(() => a === 3 || a === 2, [a]),
    c = [
      { data: 1, label: R.Localize(`#YIR_ShareVisbility_Private`) },
      { data: 2, label: R.Localize(`#YIR_ShareVisbility_FriendsOnly`) },
      { data: 3, label: R.Localize(`#YIR_ShareVisbility_Public`) },
    ];
  return (0, Q.jsxs)(Fa, {
    "flow-children": `column`,
    children: [
      (0, Q.jsx)(`div`, {
        className: (0, $.default)(XX, s ? eZ : ``),
        children: s
          ? R.Localize(`#YIR_ShareVisbility`)
          : R.Localize(`#YIR_ShareModal_DisabledShareTtp`),
      }),
      (0, Q.jsx)(`div`, {
        className: tZ,
        children: (0, Q.jsx)(Gt, {
          strDropDownButtonClassName: rZ,
          strDropDownClassName: aZ,
          rgOptions: c,
          selectedOption: a,
          onChange: async (e) => {
            if (e.data !== a) {
              let { eResult: t } = await o(e.data),
                n = t == 1 ? `` : _Q(t);
              n && i(n);
            }
          },
        }),
      }),
      r && (0, Q.jsx)(`div`, { className: `n1Fb28gGkQA-`, children: r }),
    ],
  });
}
function _Q(e) {
  switch (e) {
    case 10:
      return `Servers are busy, please try again later`;
    default:
      return ``;
  }
}
function vQ(e) {
  return `y${e % 100}`;
}
var yQ = `l`;
function bQ(e) {
  let { closeModal: t, steamid: n, nYear: r } = e,
    [i, a] = (0, B.useState)(),
    o = zH(n, r),
    s = (0, B.useMemo)(() => o === 3 || o === 2, [o]),
    [c, l] = (0, B.useState)($a(ft.LANGUAGE)),
    u = (0, B.useMemo)(() => Wa(c), [c]),
    d = mQ(n),
    f = `https://s.team/${vQ(r)}/${d}`,
    p = (0, B.useMemo)(() => {
      let e = new URL(f);
      return (e.searchParams.set(yQ, u), e.href);
    }, [u, f]),
    m = () => {
      a(!0);
    };
  return i
    ? (0, Q.jsx)(ne, { eventLink: p, closeModal: t })
    : (0, Q.jsx)(Ke, {
        strDescription: ``,
        strTitle: R.Localize(`#YIR_ShareModal_Title`),
        onCancel: t,
        onOK: t,
        bAlertDialog: !0,
        modalClassName: cZ,
        children: (0, Q.jsxs)(`div`, {
          className: lZ,
          children: [
            (0, Q.jsx)(`div`, {
              className: uZ,
              children: (0, Q.jsx)(`div`, {
                className: fZ,
                children: (0, Q.jsx)(D, {
                  selectedLang: c,
                  fnOnLanguageChanged: l,
                  fnFilterLanguage: (e) => e !== 25,
                }),
              }),
            }),
            (0, Q.jsx)(xQ, { language: u, steamid: n, nYear: r, shareUrl: p }),
            (0, Q.jsxs)(`div`, {
              className: UZ,
              children: [
                (0, Q.jsx)(gQ, { steamid: n, nYear: r }),
                (0, Q.jsx)(`div`, {
                  className: (0, $.default)(nQ, !s && `Vpkqj7M1WBw-`),
                  children: ft.IN_MOBILE_WEBVIEW
                    ? (0, Q.jsx)(EQ, {
                        bCanShare: s,
                        shareUrl: p,
                        shareOnSteamActivityFeed: m,
                      })
                    : (0, Q.jsx)(TQ, {
                        nYear: r,
                        bCanShare: s,
                        shareUrl: p,
                        shortAccountCode: d,
                        language: u,
                        shareOnSteamActivityFeed: m,
                      }),
                }),
              ],
            }),
          ],
        }),
      });
}
function xQ(e) {
  let { language: t, steamid: n, nYear: r, shareUrl: i } = e,
    [a, o] = (0, B.useState)(0),
    [s, c] = (0, B.useState)(!1),
    { isLoading: l, data: u } = oU(n, r, t),
    d = u ? u.length - 1 : 0,
    f = `${ft.BASE_URL_SHARED_CDN}social_sharing/`,
    p = (e) => {
      a > 0 && (o(a - 1), e.stopPropagation());
    },
    m = (e) => {
      a < d && (o(a + 1), e.stopPropagation());
    };
  return (
    T(`ArrowLeft`, p),
    T(`Left`, p),
    T(`ArrowRight`, m),
    T(`Right`, m),
    l
      ? (0, Q.jsx)(`div`, {
          className: (0, $.default)(pZ, mZ),
          children: (0, Q.jsx)(E, { position: `center` }),
        })
      : u
        ? (0, Q.jsxs)(`div`, {
            className: pZ,
            children: [
              s &&
                (0, Q.jsx)(SQ, {
                  carouselIndex: a,
                  endPreviewImage: (e) => {
                    (c(!1), e.stopPropagation());
                  },
                  onMoveLeft: p,
                  onMoveRight: m,
                  name: u[a].name,
                  url: `${f}${u[a].url_path}`,
                  maxIndex: d,
                }),
              (0, Q.jsxs)(`div`, {
                className: SZ,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(
                      CZ,
                      wZ,
                      a === 0 && `pOiTs551keM-`,
                    ),
                    onClick: p,
                    children: (0, Q.jsx)(ze, { angle: 270 }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(
                      CZ,
                      TZ,
                      a === d && `pOiTs551keM-`,
                    ),
                    onClick: m,
                    children: (0, Q.jsx)(ze, { angle: 90 }),
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: DZ,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: (0, $.default)(jZ, NZ),
                        children:
                          a !== 0 &&
                          (0, Q.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a - 1].url_path}`,
                          }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: OZ,
                        children: (0, Q.jsxs)(`div`, {
                          className: kZ,
                          children: [
                            (0, Q.jsx)(`div`, {
                              onClick: (e) => {
                                (c(!0), e.stopPropagation());
                              },
                              className: AZ,
                              children: R.Localize(
                                `#YIR_ShareModal_FullscreenPreview`,
                              ),
                            }),
                            (0, Q.jsx)(`img`, {
                              alt: ``,
                              className: PZ,
                              src: `${f}${u[a].url_path}`,
                            }),
                          ],
                        }),
                      }),
                      (0, Q.jsx)(`div`, {
                        className: (0, $.default)(jZ, MZ),
                        children:
                          a !== d &&
                          (0, Q.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a + 1].url_path}`,
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              ft.IN_MOBILE_WEBVIEW
                ? (0, Q.jsx)(wQ, {
                    imageUrl: `${f}${u[a].url_path}`,
                    shareUrl: i,
                  })
                : ft.IN_CLIENT
                  ? null
                  : (0, Q.jsx)(CQ, { imageUrl: `${f}${u[a].url_path}` }),
              (0, Q.jsx)(`div`, {
                className: zZ,
                children: u.map((e, t) =>
                  (0, Q.jsx)(
                    `div`,
                    { className: (0, $.default)(BZ, t === a ? VZ : null) },
                    `${t}_hint`,
                  ),
                ),
              }),
              (0, Q.jsx)(`div`, {
                className: HZ,
                children: R.Localize(
                  `#YIR_ShareModal_ImageCaption_${u[a].name}`,
                ),
              }),
            ],
          })
        : (0, Q.jsx)(`div`, {
            className: (0, $.default)(pZ, mZ),
            children: (0, Q.jsx)(`div`, {
              children: R.Localize(`#YIR_ShareModal_FailedToGenerateImages`),
            }),
          })
  );
}
function SQ(e) {
  let {
    carouselIndex: t,
    maxIndex: n,
    onMoveLeft: r,
    onMoveRight: i,
    endPreviewImage: a,
    name: o,
    url: s,
  } = e;
  return (
    T(`Escape`, a),
    T(`Esc`, a),
    (0, Q.jsx)(`div`, {
      className: hZ,
      children: (0, Q.jsx)(`div`, {
        className: gZ,
        onClick: a,
        children: (0, Q.jsxs)(`div`, {
          className: _Z,
          children: [
            (0, Q.jsx)(`div`, { className: vZ, children: (0, Q.jsx)(Os, {}) }),
            (0, Q.jsx)(`div`, {
              className: (0, $.default)(CZ, wZ, t === 0 && `pOiTs551keM-`),
              onClick: r,
              children: (0, Q.jsx)(ze, { angle: 270 }),
            }),
            (0, Q.jsx)(`div`, {
              className: (0, $.default)(CZ, TZ, t === n && `pOiTs551keM-`),
              onClick: i,
              children: (0, Q.jsx)(ze, { angle: 90 }),
            }),
            (0, Q.jsx)(`img`, {
              alt: ``,
              className: HX[`PreviewImage_${o}`],
              src: s,
            }),
          ],
        }),
      }),
    })
  );
}
function CQ(e) {
  return (0, Q.jsxs)(`div`, {
    className: IZ,
    onClick: () => {
      fetch(e.imageUrl)
        .then((e) => e.blob())
        .then((e) => URL.createObjectURL(e))
        .then((e) => {
          let t = document.createElement(`a`);
          ((t.href = e),
            (t.download = ``),
            document.body.appendChild(t),
            t.click(),
            document.body.removeChild(t));
        });
    },
    children: [
      (0, Q.jsx)(Si, { className: LZ }),
      (0, Q.jsx)(`span`, {
        className: (0, $.default)(RZ),
        children: R.Localize(`#YIR_ShareModal_SaveImage`),
      }),
    ],
  });
}
function wQ(e) {
  let { imageUrl: t, shareUrl: n } = e;
  return (0, Q.jsxs)(`div`, {
    className: IZ,
    onClick: () => {
      let e = Reflect.get(window, `ReactNativeWebView`);
      if (e?.postMessage) {
        let r = {
          event_name: `shareimage`,
          link: t,
          url: t,
          subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
          message: n,
          title: R.Localize(`#YIR_ShareModal_MobileMessage`),
        };
        e.postMessage(JSON.stringify(r));
      }
    },
    children: [
      (0, Q.jsx)(Za, { className: LZ }),
      (0, Q.jsx)(`span`, {
        className: (0, $.default)(RZ),
        children: R.Localize(`#YIR_ShareModal_ShareImage`),
      }),
    ],
  });
}
function TQ(e) {
  let {
      bCanShare: t,
      shareUrl: n,
      shortAccountCode: r,
      language: i,
      nYear: a,
      shareOnSteamActivityFeed: o,
    } = e,
    [s, c] = (0, B.useState)(!1);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`div`, {
        className: JZ,
        children: R.Localize(`#YIR_ShareModal_YourLink`),
      }),
      (0, Q.jsxs)(`div`, {
        className: GZ,
        children: [
          (0, Q.jsx)(`div`, { className: qZ, children: n }),
          (0, Q.jsxs)(`div`, {
            className: (0, $.default)(KZ),
            onClick: () => {
              (navigator.clipboard.writeText(n), c(!0));
            },
            children: [
              (0, Q.jsx)(Za, { className: iQ }),
              (0, Q.jsx)(`span`, {
                className: (0, $.default)(aQ),
                children: R.Localize(
                  s
                    ? `#YIR_ShareModal_CopyLink_Success`
                    : `#YIR_ShareModal_CopyLink`,
                ),
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: (0, $.default)(XZ, YZ),
        children: [
          (0, Q.jsxs)(`div`, {
            onClick: o,
            className: (0, $.default)(KZ, ZZ),
            children: [
              (0, Q.jsx)(kr, { className: iQ }),
              (0, Q.jsx)(`span`, {
                className: (0, $.default)(aQ),
                children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
              }),
            ],
          }),
          (0, Q.jsxs)(`a`, {
            href: `${ft.COMMUNITY_BASE_URL}profiles/${rt.steamid}/edit/showcases`,
            className: (0, $.default)(KZ, ZZ),
            children: [
              (0, Q.jsx)(Uo, { className: iQ }),
              (0, Q.jsx)(`span`, {
                className: (0, $.default)(aQ),
                children: R.Localize(`#YIR_ShareModal_AddShowcase`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function EQ(e) {
  let { bCanShare: t, shareUrl: n, shareOnSteamActivityFeed: r } = e;
  return (0, Q.jsx)(Q.Fragment, {
    children: (0, Q.jsxs)(`div`, {
      className: rQ,
      children: [
        (0, Q.jsxs)(`div`, {
          className: (0, $.default)(KZ, !t && `Vpkqj7M1WBw-`),
          onClick: () => {
            let e = Reflect.get(window, `ReactNativeWebView`);
            if (e?.postMessage) {
              let t = {
                event_name: `share`,
                link: n,
                url: n,
                subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
                message: R.Localize(`#YIR_ShareModal_MobileMessage`),
                title: R.Localize(`#YIR_ShareModal_MobileMessage`),
              };
              e.postMessage(JSON.stringify(t));
            }
          },
          children: [
            (0, Q.jsx)(Za, { className: iQ }),
            (0, Q.jsx)(`span`, {
              className: (0, $.default)(aQ),
              children: R.Localize(`#YIR_ShareModal_ShareLink`),
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          onClick: r,
          className: (0, $.default)(KZ, !t && `Vpkqj7M1WBw-`),
          children: [
            (0, Q.jsx)(kr, { className: iQ }),
            (0, Q.jsx)(`span`, {
              className: (0, $.default)(aQ),
              children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
            }),
          ],
        }),
      ],
    }),
  });
}
function DQ(e) {
  return e >= 2024;
}
function OQ(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = t.GetPlayTimeStats().total_stats,
    i = t.GetPlayTimeStats().demos_played || 0,
    a = t.GetPlayTimeStats().playtests_played || 0,
    o = t.GetFilteredGameSummary(),
    s = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
    c = o.filter((e) => e.new_this_year).length || 0,
    l = t.GetPlayTimeStats().playtime_streak,
    u = t.GetTopGamesShown(),
    d = JW(),
    f = (0, B.useMemo)(() => u.slice(0, 5), [u]),
    { data: p } = dU((0, B.useMemo)(() => f.map((e) => e.appid), [f])),
    m = f
      .map((e, t) =>
        p?.has(e.appid)
          ? (0, Q.jsx)(
              BQ,
              { gameStat: e, gridClass: `Game${t}` },
              `${t}_${e.appid}`,
            )
          : null,
      )
      .filter((e) => e !== null),
    h = [
      AQ(s, t),
      NQ(n, r),
      jQ(n, l, DQ(n) ? t.GetPreviousYearSummary()?.longest_streak : void 0),
    ].filter((e) => e !== null),
    g = (0, Q.jsx)(
      FQ,
      {
        rgGamesLength: o.length,
        nNewGames: c,
        nDemoPlayed: i,
        nPlaytestPlayed: a,
        nYear: t.GetYear(),
        nPreviousYearsGames: DQ(n)
          ? t.GetPreviousYearSummary()?.games_played
          : void 0,
      },
      `overview`,
    );
  return (0, Q.jsx)(fq, {
    children: (0, Q.jsxs)(`div`, {
      className: (0, $.default)(dG, EG),
      children: [
        (0, Q.jsx)(PQ, {
          rgGamesLength: o.length,
          nNewGames: c,
          totalAchievementUnlocked: s,
          nTotalPlaytimeSeconds: r.total_playtime_seconds || 0,
          nTotalPercentagePlaytimex100: r.total_playtime_percentagex100,
        }),
        o.length !== 1 &&
          (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
              className: `xJQGByL-21g-`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `bXtzee8AefM-`,
                  children: d(`#YIR_YourSummary_SubTitle`),
                }),
                (0, Q.jsx)(kQ, { overview: g, statFillers: h, gameFillers: m }),
              ],
            }),
          }),
      ],
    }),
  });
}
function kQ(e) {
  let { statFillers: t, gameFillers: n, overview: r } = e;
  return n.length > 2 && t.length > 1
    ? (0, Q.jsx)(`div`, {
        className: kG,
        children: [r, t[0], t[1], n[0], n[1], n[2]],
      })
    : n.length > 1 && t.length > 2
      ? (0, Q.jsx)(`div`, {
          className: kG,
          children: [r, t[1], t[2], t[0], n[0], n[1]],
        })
      : t.length == 1 && n.length > 3
        ? (0, Q.jsx)(`div`, {
            className: kG,
            children: [r, t[0], n[0], n[1], n[2], n[3]],
          })
        : n.length > 1
          ? (0, Q.jsx)(`div`, { className: AG, children: [r, n[0], n[1]] })
          : null;
}
function AQ(e, t) {
  return e > 0
    ? (0, Q.jsx)(LQ, { userYearInReview: t }, `totalAchievements`)
    : null;
}
function jQ(e, t, n) {
  return t &&
    typeof t.longest_consecutive_days == `number` &&
    typeof n == `number` &&
    t.longest_consecutive_days <= 1 &&
    n <= 1
    ? null
    : t &&
        typeof t.longest_consecutive_days == `number` &&
        t.longest_consecutive_days > 0 &&
        !_H()
      ? (0, Q.jsx)(
          RQ,
          { oLongestStreak: t, nYear: e, nPrevLongestStreamDays: n },
          `longestStreak`,
        )
      : null;
}
var MQ = 1e3;
function NQ(e, t) {
  let n = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    r =
      t.total_playtime_percentagex100 -
      t.controller_playtime_percentagex100 -
      t.vr_playtime_percentagex100 -
      t.deck_playtime_percentagex100;
  return n < MQ || r < MQ
    ? null
    : (0, Q.jsx)(zQ, { oTotalStats: t, nYear: e }, `hardwareTime`);
}
function PQ(e) {
  let {
      rgGamesLength: t,
      nNewGames: n,
      totalAchievementUnlocked: r,
      nTotalPlaytimeSeconds: i,
      nTotalPercentagePlaytimex100: a,
    } = e,
    o = JW(),
    s;
  return (
    (s =
      n > 50 && r > 100
        ? o(`#YIR_YourSummary_GamesTonNewAchievements`)
        : n > 20 && r > 100
          ? o(`#YIR_YourSummary_GamesNewAchievements`)
          : n > 20 && i > 36e4
            ? o(`#YIR_YourSummary_GamesNew`)
            : t > 10 && n < 5
              ? o(`#YIR_YourSummary_GamesManyTriedNew`)
              : t > 10
                ? o(`#YIR_YourSummary_GamesMany`)
                : n > 1 &&
                    n < 5 &&
                    (i > 36e4 || (i == 0 && typeof a == `number` && a > 5e3))
                  ? o(`#YIR_YourSummary_HoursManyTriedNew`)
                  : t < 2 && i > 36e4
                    ? o(`#YIR_YourSummary_HoursManySingleGame`)
                    : t < 2
                      ? o(`#YIR_YourSummary_SingleGame`)
                      : t < 5
                        ? o(`#YIR_YourSummary_GamesFew`)
                        : i > 36e4
                          ? o(`#YIR_YourSummary_HoursMany`)
                          : null),
    (0, Q.jsx)(`div`, { className: CG, children: s })
  );
}
function FQ(e) {
  let t = qW(),
    {
      rgGamesLength: n,
      nNewGames: r,
      nDemoPlayed: i,
      nPlaytestPlayed: a,
      nYear: o,
      nPreviousYearsGames: s,
    } = e,
    c = Z(),
    l = eX(`bg_2023.svg`),
    u;
  return (
    n > 99999 ? (u = uK) : n > 99 && (u = lK),
    (0, Q.jsx)(`div`, {
      className: (0, $.default)(OG, c.SummaryCtnShadow),
      children: (0, Q.jsxs)(`div`, {
        className: (0, $.default)(HG, jG, c.GridItem, FG, c.SummaryCtn),
        children: [
          (0, Q.jsx)(`div`, { className: UG }),
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(IG, eK),
            style: { backgroundImage: `url(${l})` },
          }),
          (0, Q.jsxs)(`div`, {
            className: nK,
            children: [
              (0, Q.jsx)(`div`, {
                className: vG,
                children: R.LocalizeReact(
                  `#YearInReview_SteamRewindHeader`,
                  (0, Q.jsx)(`span`, {
                    className: (0, $.default)(xG, c.UserName),
                    children: R.Localize(`#YearInReview_PossessiveUserName`, t),
                  }),
                  xs.Localize(`#date_year`, o),
                ),
              }),
              (0, Q.jsxs)(`div`, {
                className: (0, $.default)(aK, iK),
                children: [
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(zG, u),
                    children: Ur(n),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: cK,
                    children: R.LocalizePlural(`#YIR_YourSummary_Games`, n),
                  }),
                  (0, Q.jsx)(IQ, {
                    strTokenPrefix: `#YIR_YourSummary_PrevYear_Game`,
                    nCurValue: n,
                    nPrevValue: s,
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: oK,
            children: [
              !!r &&
                (0, Q.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: Ur(r),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(
                        `#YIR_YourSummary_GamesFirst`,
                        r,
                      ),
                    }),
                  ],
                }),
              !!i &&
                (0, Q.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: Ur(i),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(`#YIR_YourSummary_Demos`, i),
                    }),
                  ],
                }),
              !!a &&
                (0, Q.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: Ur(a),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(
                        `#YIR_YourSummary_PlayTests`,
                        a,
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    })
  );
}
function IQ(e) {
  let { strTokenPrefix: t, nCurValue: n, nPrevValue: r } = e;
  if (r != null && r !== 0 && n !== 0)
    return n == r
      ? null
      : n < r
        ? (0, Q.jsxs)(`div`, {
            className: fK,
            children: [
              (0, Q.jsx)(`div`, { className: (0, $.default)(pK, gK) }),
              (0, Q.jsx)(`div`, {
                className: mK,
                children: R.LocalizePlural(`${t}Less`, r - n, Ur(r - n)),
              }),
            ],
          })
        : (0, Q.jsxs)(`div`, {
            className: fK,
            children: [
              (0, Q.jsx)(`div`, { className: (0, $.default)(pK, hK) }),
              (0, Q.jsx)(`div`, {
                className: mK,
                children: R.LocalizePlural(`${t}More`, n - r, Ur(n - r)),
              }),
            ],
          });
}
function LQ(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats().summary_stats;
  t.GetFilteredGameSummary();
  let r = t.GetYear(),
    i = Z();
  if (!n) return null;
  let a = eX(`achievement_grid_02.webp`),
    o;
  return (
    typeof n.total_achievements == `number` && n.total_achievements > 99999
      ? (o = uK)
      : typeof n.total_achievements == `number` &&
        n.total_achievements > 99 &&
        (o = lK),
    (0, Q.jsx)(`div`, {
      className: (0, $.default)(OG, i.SummaryCtnShadow),
      children: (0, Q.jsxs)(`div`, {
        className: (0, $.default)(
          HG,
          jG,
          i.GridItem,
          tK,
          void 0,
          i.SummaryCtn,
          i.AchievementBlock,
        ),
        children: [
          (0, Q.jsx)(`div`, { className: UG }),
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(IG, eK),
            style: { backgroundImage: `url(${a})` },
          }),
          (0, Q.jsxs)(`div`, {
            className: (0, $.default)(aK, RG),
            children: [
              (0, Q.jsx)(`div`, {
                className: (0, $.default)(zG, o),
                children: Ur(n.total_achievements),
              }),
              (0, Q.jsx)(`div`, {
                className: cK,
                children: R.LocalizePlural(
                  `#YIR_YourSummary_Achievement`,
                  n.total_achievements,
                ),
              }),
              (0, Q.jsx)(IQ, {
                strTokenPrefix: `#YIR_YourSummary_PrevYear_Ach`,
                nCurValue: n.total_achievements,
                nPrevValue: DQ(r)
                  ? t.GetPreviousYearSummary()?.unlocked_achievements
                  : void 0,
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: $G,
            children: [
              (0, Q.jsxs)(`div`, {
                className: aK,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(zG),
                    children: Ur(n.total_games_with_achievements || 0),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: cK,
                    children: R.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Games`,
                      n.total_games_with_achievements,
                    ),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: aK,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: zG,
                    children: Ur(n.total_rare_achievements || 0),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: cK,
                    children: R.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Rare`,
                      n.total_rare_achievements,
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function RQ(e) {
  let { oLongestStreak: t, nPrevLongestStreamDays: n } = e,
    r = t.rtime_start ?? 0,
    i = t.longest_consecutive_days ?? 0,
    a = QW(),
    o = a(r),
    s = a(r + i * 24 * 60 * 60),
    c = Z();
  if (_H()) return null;
  let l = eX(`streak_bg.jpg`);
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)(OG, c.SummaryCtnShadow),
    children: (0, Q.jsxs)(`div`, {
      className: (0, $.default)(
        HG,
        jG,
        c.GridItem,
        LG,
        c.SummaryCtn,
        c.StreakBlock,
      ),
      children: [
        (0, Q.jsx)(`div`, { className: UG }),
        (0, Q.jsx)(`div`, {
          className: (0, $.default)(IG, eK),
          style: { backgroundImage: `url(${l})` },
        }),
        (0, Q.jsxs)(`div`, {
          className: (0, $.default)(aK, RG),
          children: [
            (0, Q.jsx)(`div`, {
              className: zG,
              children: R.LocalizePlural(
                `#YIR_Game_LongestStreak_DaysPlayed`,
                i,
              ),
            }),
            (0, Q.jsx)(`div`, {
              className: cK,
              children: R.Localize(`#YIR_YourSummary_Stat_Streak`),
            }),
            (0, Q.jsx)(`div`, {
              className: dK,
              children: R.Localize(
                `#YIR_Game_LongestStreak_FromDateToDate`,
                o,
                s,
              ),
            }),
            (0, Q.jsx)(IQ, {
              strTokenPrefix: `#YIR_YourSummary_PrevYear_Day`,
              nCurValue: i,
              nPrevValue: n,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: $G,
          children: (0, Q.jsxs)(`div`, {
            className: (0, $.default)(aK, sK),
            children: [
              (0, Q.jsx)(`div`, {
                className: zG,
                children: Ur(t.streak_games.length),
              }),
              (0, Q.jsx)(`div`, {
                className: cK,
                children: R.LocalizePlural(
                  `#YIR_YourSummary_Games`,
                  t.streak_games.length,
                ),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function zQ(e) {
  let { oTotalStats: t, nYear: n } = e,
    r = XW(
      t.total_playtime_percentagex100 -
        t.controller_playtime_percentagex100 -
        t.vr_playtime_percentagex100 -
        t.deck_playtime_percentagex100,
    ),
    i = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    a = XW(i),
    o = eX(`keyboard.png?v=3`),
    s = eX(`controllers.png?v=2`),
    c = Z(),
    l,
    u,
    d;
  return (
    Math.floor(i / 100) < 40
      ? ((l = 40), (u = YG), (d = XG))
      : Math.floor(i / 100) > 60
        ? ((l = 60), (u = XG), (d = YG))
        : (l = i / 100),
    (0, Q.jsx)(`div`, {
      className: (0, $.default)(OG, c.SummaryCtnShadow),
      children: (0, Q.jsxs)(`div`, {
        className: (0, $.default)(
          WG,
          HG,
          jG,
          c.GridItem,
          BG,
          c.SummaryCtn,
          c.HardwareBlock,
        ),
        children: [
          (0, Q.jsx)(`div`, { className: UG }),
          (0, Q.jsxs)(`div`, {
            className: GG,
            children: [
              (0, Q.jsxs)(`div`, {
                className: KG,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: IG,
                    style: { background: `url(${o}) bottom` },
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(qG, d),
                    children: r,
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(ZG, d),
                    children: R.Localize(`#YIR_HowYouPlayed_Keyboard_Generic`),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: JG,
                style: { height: l + `%` },
                children: [
                  (0, Q.jsx)(`div`, {
                    className: IG,
                    style: { background: `url(${s}) top` },
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(qG, u),
                    children: a,
                  }),
                  (0, Q.jsx)(`div`, {
                    className: (0, $.default)(ZG, u),
                    children: R.Localize(
                      `#YIR_HowYouPlayed_Controllers_Percent`,
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function BQ(e) {
  let { gameStat: t, gridClass: n } = e,
    { appid: r } = t,
    { item: i } = uU(r),
    a = oG(0, [r]),
    o = Z();
  if (!i) return null;
  let s = De(i.assets, `library_hero`),
    c = Math.trunc(t.stats.total_sessions);
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)(OG, o.SummaryCtnShadow),
    children: (0, Q.jsxs)(`div`, {
      className: (0, $.default)(HG, jG, o.GridItem, lG[n], o.SummaryCtn, o[n]),
      onClick: a,
      children: [
        (0, Q.jsx)(`div`, { className: UG }),
        (0, Q.jsx)(`div`, {
          className: (0, $.default)(IG, o.BackgroundImage),
          style: { backgroundImage: `url(${s})` },
        }),
        (0, Q.jsx)(`div`, { className: QG, children: i.info.name }),
        (0, Q.jsxs)(`div`, {
          className: $G,
          children: [
            (0, Q.jsx)(VQ, {
              percentVal: t.stats.total_playtime_percentagex100,
              subToken: `#YIR_Game_PlayStat`,
            }),
            (0, Q.jsxs)(`div`, {
              className: aK,
              children: [
                (0, Q.jsx)(`div`, { className: zG, children: Ur(c) }),
                (0, Q.jsx)(`div`, {
                  className: cK,
                  children: R.Localize(
                    c == 1
                      ? `#YIR_Game_PlaySession_Singular`
                      : `#YIR_Game_PlaySessions`,
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function VQ(e) {
  let { percentVal: t, subToken: n, className: r } = e,
    i = XW(t),
    a = `${n}_Percent`;
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(aK, r),
    children: [
      (0, Q.jsx)(`div`, { className: zG, children: i }),
      (0, Q.jsx)(`div`, { className: cK, children: R.Localize(a) }),
    ],
  });
}
var HQ = `VliP-d3rrOA-`,
  UQ = `rN6Rp7gRK-8-`,
  WQ = `_0KyNXUd2ye8-`,
  GQ = `XVKp9D8UO7c-`,
  KQ = `RY2J6XyyEuM-`,
  qQ = `yaLK-z4T8sw-`;
AY();
var JQ = B.memo(function (e) {
    let { data: t, topMonthlyAppsAndRanks: n } = e,
      r = Z(),
      i = (0, B.useCallback)((e, n) => (t[n]?.date ? ct(t[n].date) : ``), [t]),
      a = (0, B.useRef)(void 0);
    return (0, Q.jsxs)(hV, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Q.jsx)(hz, { vertical: !1, stroke: `#a0aab6` }),
        (0, Q.jsx)(Lz, {
          tickFormatter: XW,
          tick: { fill: `white` },
          axisLine: !0,
        }),
        (0, Q.jsx)(LA, {
          wrapperStyle: { outline: `none` },
          allowEscapeViewBox: { x: !1, y: !0 },
          isAnimationActive: !1,
          offset: 0,
          content: (e) =>
            (0, Q.jsx)(XQ, {
              active: e.active,
              payload: e.payload,
              hoveredBarIDRef: a,
            }),
        }),
        (0, Q.jsx)(TL, {
          barSize: 60,
          dataKey: `topPlayedPercentBreakdownPerMonth.${TH}`,
          name: TH,
          stackId: `a`,
          fill: r.monthOthersColor,
          onMouseEnter: () => (a.current = TH),
          onMouseOut: () => (a.current = void 0),
        }),
        n.map((e, t) =>
          (0, Q.jsx)(
            TL,
            {
              barSize: 60,
              dataKey: `topPlayedPercentBreakdownPerMonth.${e.appid}`,
              name: e.appid.toString(),
              stackId: `a`,
              fill: r[`topApp_${e.rank}`],
              onMouseEnter: () => (a.current = e.appid.toString()),
              onMouseOut: () => (a.current = void 0),
            },
            `${t}`,
          ),
        ),
        (0, Q.jsx)(Ez, {
          interval: 0,
          tick: (0, Q.jsx)(n$, {}),
          tickFormatter: i,
        }),
      ],
    });
  }),
  YQ = 7;
function XQ(e) {
  let { active: t, payload: n, hoveredBarIDRef: r } = e,
    i = Z(),
    a = JW();
  if (t && n && n.length) {
    let e = n[0].payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      o = n[0].payload.topPlayedPercentBreakdownPerMonth[wH],
      s = Object.keys(n[0].payload.otherPlayedPercentBreakdownForMonth),
      c = n[0].payload.topPlayedRelativePercentBreakdownForMonth,
      l = n.find((e) => e.name === r.current),
      u = l?.name === TH,
      d = n
        .map((e) => {
          let r = e.name,
            i = c[e.name];
          if (r === `percentOtherGamesRelativeMonth`) {
            let a = u && n.length == 1;
            return (0, Q.jsxs)(
              B.Fragment,
              {
                children: [
                  !a &&
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)(e === l && `QlEkl-Bj9Tk-`),
                      children: i$(
                        i,
                        t,
                        `#YIR_MonthlyCharts_OtherGamesTooltip`,
                      ),
                    }),
                  u &&
                    s
                      .slice(0, YQ)
                      .map((e) =>
                        (0, Q.jsx)(
                          $Q,
                          { appId: e, className: `QlEkl-Bj9Tk-` },
                          e,
                        ),
                      ),
                  u &&
                    s.length > YQ &&
                    (0, Q.jsx)(`div`, {
                      className: `QlEkl-Bj9Tk-`,
                      children: R.Localize(
                        `#YIR_MonthlyCharts_OtherGamesTooltip_AndMore`,
                        s.length - YQ,
                      ),
                    }),
                ],
              },
              r,
            );
          }
          return e.value
            ? (0, Q.jsx)(
                e$,
                {
                  appId: r,
                  className: (0, $.default)(e === l && `QlEkl-Bj9Tk-`),
                  date: t,
                  value: i,
                },
                r,
              )
            : null;
        })
        .reverse(),
      f = d.length == 1 && s.length > 0;
    return (0, Q.jsxs)(Dt, {
      style: { background: l?.color ?? i.monthOthersColor },
      className: HQ,
      children: [
        (0, Q.jsx)(`div`, { className: UQ }),
        (0, Q.jsx)(`div`, {
          className: GQ,
          children:
            l &&
            (0, Q.jsxs)(Q.Fragment, {
              children: [
                !u && (0, Q.jsx)(QQ, { appId: l.name }),
                u && (0, Q.jsx)(ZQ, { appIds: s.slice(0, 7) }),
              ],
            }),
        }),
        (0, Q.jsxs)(`div`, {
          className: WQ,
          children: [
            (0, Q.jsx)(`div`, {
              className: void 0,
              children: i$(o, t, `#YIR_MonthlyCharts_PlayedTotalTooltip`),
            }),
            !f &&
              (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`div`, {
                    children: R.Localize(
                      `#YIR_MonthlyCharts_PlayedSubtitleTooltip`,
                    ),
                  }),
                  d,
                ],
              }),
            f &&
              l &&
              (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`div`, {
                    children: a(`#YIR_MonthlyCharts_OtherGamesTooltip_Only`),
                  }),
                  d,
                ],
              }),
          ],
        }),
      ],
    });
  }
  return null;
}
function ZQ({ appIds: e }) {
  return (0, Q.jsx)(`div`, {
    className: KQ,
    children: e?.map((t, n) =>
      (0, Q.jsx)(
        QQ,
        { appId: t, style: { zIndex: e.length - n, "--stack-position": n } },
        t,
      ),
    ),
  });
}
function QQ({ appId: e, style: t }) {
  let { item: n } = uU(parseInt(e));
  if (!n?.assets) return null;
  let r = De(n.assets, `library_capsule`) || wU;
  return (0, Q.jsx)(`img`, { alt: ``, style: t, className: qQ, src: r });
}
function $Q({ appId: e, className: t }) {
  let { item: n } = uU(parseInt(e));
  return n
    ? (0, Q.jsx)(`div`, { className: t, children: n.info.name }, e)
    : null;
}
function e$(e) {
  let { appId: t, className: n, value: r, date: i } = e,
    { item: a } = uU(parseInt(t));
  return a
    ? (0, Q.jsx)(
        `div`,
        {
          className: n,
          children: i$(
            r,
            i,
            `#YIR_MonthlyCharts_TopPlayedTooltip`,
            (0, Q.jsx)(`b`, { children: a.info.name }),
          ),
        },
        t,
      )
    : null;
}
var t$ = B.memo(function (e) {
  let { data: t, name: n, color: r } = e,
    i = Z(),
    a = (0, B.useCallback)((e, n) => (t[n]?.date ? ct(t[n].date) : ``), [t]),
    [o, s] = (0, B.useState)(!1);
  (0, B.useEffect)(() => {
    s(document.documentElement.matches(`:dir(rtl)`));
  }, []);
  let c = `left`;
  return (
    o && (c = `right`),
    (0, Q.jsxs)(hV, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Q.jsx)(LA, {
          wrapperStyle: {
            outline: `1px solid ` + (r ?? i.chartAccentColorAlt),
          },
          allowEscapeViewBox: { x: !1, y: !0 },
          reverseDirection: { x: o, y: !1 },
          isAnimationActive: !1,
          content: (e) =>
            (0, Q.jsx)(r$, { active: e.active, payload: e.payload, name: n }),
        }),
        (0, Q.jsx)(hz, { vertical: !1, stroke: `#a0aab6` }),
        (0, Q.jsx)(Lz, {
          tickFormatter: XW,
          tick: { fill: `white` },
          axisLine: !0,
          orientation: c,
        }),
        (0, Q.jsx)(TL, {
          barSize: 60,
          dataKey: `percent`,
          fill: r ?? i.chartAccentColorAlt,
        }),
        (0, Q.jsx)(Ez, {
          interval: 0,
          tick: (0, Q.jsx)(n$, { bRTL: o }),
          tickFormatter: a,
          color: `#ffffff`,
          reversed: o,
        }),
      ],
    })
  );
});
function n$(e) {
  let { x: t, y: n, payload: r, bRTL: i } = e,
    a = e.tickFormatter(r.value, r.index),
    o = `end`,
    s = `rotate(-35)`;
  return (
    i && ((o = `start`), (s = `rotate(35)`)),
    (0, Q.jsx)(`g`, {
      transform: `translate(${t},${n})`,
      children: (0, Q.jsx)(`text`, {
        x: 0,
        y: 0,
        dy: 16,
        textAnchor: o,
        fill: `#FFFFFF`,
        transform: s,
        children: a,
      }),
    })
  );
}
function r$(e) {
  let { active: t, payload: n, name: r } = e,
    i = Z(),
    a = n[0];
  if (t && a?.value) {
    let e = a.payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      n = a.value;
    return (0, Q.jsx)(Dt, {
      style: { background: `#0e1014` },
      children: (0, Q.jsx)(
        `div`,
        {
          style: { color: i.chartAccentColor },
          children: R.LocalizeReact(
            `#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent`,
            (0, Q.jsx)(`b`, { children: XW(n) }),
            t,
            r,
          ),
        },
        r,
      ),
    });
  }
  return null;
}
function i$(e, t, n, ...r) {
  let i = `${n}_Percent`;
  return R.LocalizeReact(i, (0, Q.jsx)(`b`, { children: XW(e) }), t, ...r);
}
var a$ = `Md96G4kZDAE-`;
function o$(e) {
  let { userYearInReview: t } = e,
    n = JW(),
    r = t.GetChartMonthlyData(),
    i = t.GetTopGameIdsAndRanks(),
    a = t.GetPlayTimeStats().games?.length ?? 0;
  return (0, Q.jsx)(`div`, {
    className: a$,
    children:
      a > 1 &&
      (0, Q.jsxs)(fq, {
        className: void 0,
        children: [
          (0, Q.jsx)(`div`, {
            className: `jKX9urC1MxY-`,
            children: n(`#YIR_MonthlyCharts_Title`),
          }),
          (0, Q.jsx)(`div`, {
            className: `-q3HKBZo0Fg-`,
            children: (0, Q.jsx)(`div`, {
              className: `J-KteziHcsY-`,
              children: (0, Q.jsx)(JQ, { data: r, topMonthlyAppsAndRanks: i }),
            }),
          }),
        ],
      }),
  });
}
function s$(e) {
  let t = qH(e),
    n = YH(e, !1);
  return c$(t?.all_time_unlocked_achievements, n?.length ?? 0);
}
function c$(e, t) {
  return typeof e == `number` && e > 0 && t > 0 && t <= e;
}
var l$ = 2022,
  u$ = `_2fXTkYFuLL0-`,
  d$ = `_5hU6-LHkC9I-`,
  f$ = `zDLaFJWW2Nk-`,
  p$ = `N5WJoNh0dWc-`,
  m$ = `JIuGrMQYevI-`,
  h$ = `WzRwXnpcz6g-`,
  g$ = `_4AJ91mlqTEg-`,
  _$ = `OetAU-ImB-A-`,
  v$ = `qRqoeOi-LW0-`,
  y$ = `wlHDLgvcDaY-`,
  b$ = `_7HxW8ABT2Qw-`,
  x$ = `_1XiF5sig4jA-`;
function S$(e) {
  let { appid: t, userYearInReview: n } = e,
    r = qH(t);
  return !r || !((r?.achievements?.length ?? 0) > 0)
    ? null
    : (0, Q.jsx)(jt, {
        children: (0, B.createElement)(C$, {
          ...e,
          key: `achievementunlucklist_` + t,
          userUnlockedAchievements: r,
        }),
      });
}
function C$(e) {
  let {
      appid: t,
      userYearInReview: n,
      bBlurContent: r,
      userUnlockedAchievements: i,
    } = e,
    [a, o] = (0, B.useState)(r),
    s = JW(),
    c = ZH(t),
    l = () => o(!1),
    u = i.achievements?.length ?? 0,
    d = i.all_time_unlocked_achievements,
    f = d == c && c > 0 && u > 0 && d > 0 && !i.unlocked_more_in_future,
    p = qs({ appid: t, profileUrl: re(n.GetSteamID()) }),
    m = Vn();
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(dG, u$),
    children: [
      a &&
        (0, Q.jsx)(`div`, {
          onClick: l,
          className: `_2i6-GdwcqFw-`,
          children: R.Localize(`#YIR_TopGames_ContentRestrictionAchievements`),
        }),
      (0, Q.jsxs)(`div`, {
        className: d$,
        children: [
          (0, Q.jsx)(`div`, {
            className: p$,
            children: s(`#YIR_TopGames_Achievements`),
          }),
          (0, Q.jsxs)(`div`, {
            className: f$,
            children: [
              m &&
                (0, Q.jsx)(`a`, {
                  href: p,
                  className: `cOnRdqZh5ak-`,
                  children: R.Localize(`#YIR_SeeAllAchievements`),
                }),
              !m &&
                (0, Q.jsx)(fo, {
                  href: p,
                  target: `_blank`,
                  className: `cOnRdqZh5ak-`,
                  children: R.Localize(`#YIR_SeeAllAchievements`),
                }),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: (0, $.default)({ [void 0]: f, [m$]: !0 }),
        children: (0, Q.jsxs)(`div`, {
          className: h$,
          children: [
            (0, Q.jsxs)(`div`, {
              className: g$,
              children: [
                (0, Q.jsx)(`div`, { className: _$, children: Ur(u) }),
                (0, Q.jsx)(`div`, {
                  className: v$,
                  children: R.LocalizeReact(
                    `#YIR_UnlockedThisYear_Short`,
                    (0, Q.jsx)(`br`, {}),
                  ),
                }),
              ],
            }),
            (0, Q.jsx)(w$, { userUnlockedAchievements: i }),
          ],
        }),
      }),
    ],
  });
}
function w$(e) {
  let { userUnlockedAchievements: t } = e,
    n = t.appid;
  Fo(n, `Missing appid for achievements list!`);
  let r = XH(n),
    i = (0, B.useMemo)(
      () =>
        [...(t.achievements ?? [])].sort(
          (e, t) => (e.rtime_unlocked ?? 0) - (t.rtime_unlocked ?? 0),
        ),
      [t],
    );
  return i?.length > 0
    ? (0, Q.jsx)(Q.Fragment, {
        children: i
          .map((e) => r.get(e.achievement_name_internal ?? ``))
          .filter((e) => !!e?.icon)
          .map((e) =>
            (0, Q.jsx)(
              E$,
              { appid: n, display: e },
              `displayAch_` + e.internal_name,
            ),
          ),
      })
    : (0, Q.jsx)(E, { size: `small`, string: xs.Localize(`#Loading`) });
}
var T$ = 10;
function E$(e) {
  let { display: t, appid: n } = e,
    r = `${ft.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${t.icon}`,
    i = Number.parseFloat(`` + t.player_percent_unlocked) < T$;
  return (0, Q.jsx)(Us, {
    toolTipContent: (0, Q.jsx)(D$, { display: t }),
    className: (0, $.default)({ [b$]: i, [y$]: !0 }),
    children: (0, Q.jsx)(Js, {
      imgURL: r,
      className: x$,
      alt: t.localized_name ?? t.internal_name,
      glow: i,
      hideNativeTooltip: !0,
    }),
  });
}
function D$(e) {
  let { display: t } = e,
    n;
  return (
    t.localized_desc && t.localized_name
      ? (n = `${t?.localized_name}: ${t.localized_desc}`)
      : t.localized_name
        ? (n = t.localized_name)
        : t.internal_name && (n = t.internal_name),
    (0, Q.jsxs)(`div`, {
      className: Or,
      children: [
        (0, Q.jsx)(`div`, { children: n }),
        (0, Q.jsx)(`br`, {}),
        (0, Q.jsx)(`div`, {
          children: R.Localize(
            `#YIR_Achievement_ttip`,
            Ur(
              Math.max(0.1, Number.parseFloat(`` + t.player_percent_unlocked)),
            ),
          ),
        }),
      ],
    })
  );
}
var O$ = `l-51YapU23U-`,
  k$ = `MFK0ZYn4p8Y-`,
  A$ = `z5SvMUtFD4c-`,
  j$ = `Pj3LFELaj0I-`;
function M$(e) {
  let { appid: t, bBlurContent: n, nYear: r } = e,
    i = eU(t),
    [a, o] = C(),
    s = JW();
  return !i || i.length == 0
    ? null
    : (0, Q.jsxs)(`div`, {
        className: (0, $.default)(dG, O$),
        children: [
          o,
          (0, Q.jsx)(`div`, {
            className: k$,
            children: s(`#YIR_ScreenshotsThisYear`),
          }),
          (0, Q.jsx)(`div`, {
            className: A$,
            children: i.map((e, t) =>
              (0, Q.jsx)(
                P$,
                {
                  nYear: r,
                  bBlurContent: n,
                  screenshot: e,
                  fnSetExpandScreenShot: () => {
                    let e = i
                      .slice(t)
                      .concat(i.slice(0, t))
                      .map((e) => e.image_url);
                    a(e);
                  },
                },
                `${e.image_url}_${t}`,
              ),
            ),
          }),
        ],
      });
}
var N$ = `?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`;
function P$(e) {
  let {
      screenshot: t,
      fnSetExpandScreenShot: n,
      bBlurContent: r,
      nYear: i,
    } = e,
    [a, o] = (0, B.useState)(r),
    s = { backgroundImage: `url(${t.image_url + N$})` };
  return (0, Q.jsxs)(`div`, {
    className: j$,
    onClick: () => {
      (a && o(!1), n());
    },
    style: s,
    children: [
      a &&
        (0, Q.jsx)(`div`, {
          className: `L83TMGRMjs8-`,
          children: R.Localize(`#YIR_TopGames_ContentRestrictionScreenshots`),
        }),
      (0, Q.jsx)(`img`, { alt: ``, src: eX(`screenshot_placeholder.png`) }),
    ],
  });
}
function F$(e) {
  let { userYearInReview: t } = e,
    n = t.GetTopGamesShownAppIDs(),
    r = JW(),
    i = (0, B.useMemo)(() => n?.slice(0, 5), [0, 5, n]);
  if (!n || n.length == 0 || 0 > n.length) return null;
  let a = n.length > 1;
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)(jU),
    children: (0, Q.jsxs)(te, {
      placeholderHeight: `100vh`,
      rootMargin: MH,
      className: AU,
      children: [
        !!a &&
          (0, Q.jsx)(`div`, {
            className: (0, $.default)(`_4RT2F1qWDf0-`, void 0),
            children: (0, Q.jsx)(`div`, {
              className: `mNRC0alPlMM-`,
              children: r(`#YIR_TopGame_mostplayed_intro`),
            }),
          }),
        i.map((e, n) =>
          (0, Q.jsx)(
            fq,
            {
              children: (0, Q.jsx)(
                B$,
                { unAppID: e, userYearInReview: t, index: n },
                n,
              ),
            },
            n,
          ),
        ),
      ],
    }),
  });
}
function I$(e) {
  let { gameSummary: t, index: n, userYearInReview: r } = e,
    i = JW(),
    a = YW(),
    o = t.appid,
    s = r.GetYear();
  for (let e = s; e >= l$; --e) {
    let t = `#steamrewind${e}_gametext_appid_${o}`,
      n = a(e, t, s);
    if (n !== void 0)
      return (0, Q.jsxs)(`div`, { className: zU, children: [n, ` `] });
  }
  let c;
  return (
    n == 0
      ? (c = t?.new_this_year
          ? typeof t.total_playtime_percentagex100 == `number` &&
            t.total_playtime_percentagex100 > 1e3
            ? `#YIR_TopGame_first_new_hooked`
            : `#YIR_TopGame_first_new`
          : `#YIR_TopGame_first_continued`)
      : n == 1 &&
        (c = t?.new_this_year
          ? `#YIR_TopGame_top_new`
          : `#YIR_TopGame_top_continued`),
    c
      ? (0, Q.jsx)(`div`, {
          className: (0, $.default)(zU, void 0),
          children: i(c, r.GetYear()),
        })
      : null
  );
}
function L$(e) {
  let [t, n] = B.useState(!1),
    r = B.useRef(null),
    i = r.current,
    a = cG();
  (B.useEffect(() => {
    (e !== null && e != i && n(!0), e === null && t && n(!1));
  }, [n, t, e, i]),
    (r.current = e));
  let o = B.useRef(void 0),
    s = B.useCallback(() => {
      ((o.current = setTimeout(() => a(e), parseInt(EU))), n(!1));
    }, [a, e]);
  return (
    B.useEffect(
      () => () => {
        (o.current && clearTimeout(o.current), (o.current = void 0));
      },
      [],
    ),
    [t, s]
  );
}
function R$(e) {
  return B.useCallback(
    (t) => {
      t.target == t.currentTarget && e();
    },
    [e],
  );
}
function z$(e) {
  let { userYearInReview: t } = e,
    { unAppID: n, length: r, index: i = 0 } = iG(),
    [a, o] = L$(n),
    s = R$(o),
    c = sG(i + 1),
    l = sG(i - 1),
    u = Is();
  if (n == null && !a) return null;
  let d = (0, $.default)(jW, a && `eAjysxH-TgY-`, u && `maE92CVTDsk-`),
    f = (0, Q.jsx)(`div`, {
      className: d,
      onClick: s,
      children: (0, Q.jsxs)(`div`, {
        className: NW,
        children: [
          (0, Q.jsx)(`div`, {
            className: LW,
            children:
              n !== null &&
              (0, Q.jsx)(B$, { unAppID: n, userYearInReview: t, index: 1 }),
          }),
          (0, Q.jsx)(w, {
            index: i,
            numElements: r,
            fnForward: c,
            fnBackwards: l,
            fnClose: o,
          }),
        ],
      }),
    });
  return typeof document > `u` ? null : Mg.createPortal(f, document.body);
}
var B$ = B.memo(function (e) {
  let { unAppID: t, userYearInReview: n, index: r } = e,
    i = n.GetGameStats(t),
    a = Math.trunc(i?.playtime_streak?.longest_consecutive_days || 1),
    o = n.GetGameSummaryForApp(t),
    s = o ? o.parent_appid || t : 0,
    { item: c, bLoading: l } = uU(s),
    u = s$(s),
    d = br(c ? S(c.info) : void 0),
    f = JW(),
    p = r % 2 ? `OddGradient` : `EvenGradient`,
    m = Is(),
    h = GW(),
    g = Z(),
    _ = Vn(),
    { gameChartData: v, rank: y } = (0, B.useMemo)(
      () => n.GetChartMonthlyDataForApp(t),
      [t, n],
    );
  if (l)
    return (0, Q.jsx)(`div`, {
      className: (0, $.default)(PU, TU[p], g.TopGameBlockContainer, g[p], FU),
      children: (0, Q.jsx)(E, { position: `center` }),
    });
  if (!c || !o) return null;
  let b = d;
  ft.IN_CLIENT && (b = `steam://openurl/` + b);
  let x = v?.find((e) => e.percent > 0),
    C = x ? x.date.getUTCMonth() : null,
    w = C ? R.Localize(`#YIR_MonthlyCharts_MonthNoun_${C + 1}`) : ``,
    T = Math.trunc(o.total_sessions),
    D = ``;
  h && m
    ? (D = `steam://open/games/details/${t}`)
    : h && !ft.IN_MOBILE_WEBVIEW && (D = `steam://open/library/details/${t}`);
  let ee = c.info.name ?? ``,
    te = ee;
  return (
    o.demo
      ? (te = R.Localize(`#YIR_GameName_PlusDemo`, te))
      : o.playtest && (te = R.Localize(`#YIR_GameName_PlusPlaytest`, te)),
    (0, Q.jsxs)(fq, {
      className: (0, $.default)(PU, TU[p], g.TopGameBlockContainer, g[p]),
      children: [
        (0, Q.jsx)(H$, { item: c }),
        (0, Q.jsxs)(`div`, {
          className: LU,
          children: [
            (0, Q.jsx)(V$, { item: c }),
            (0, Q.jsxs)(`div`, {
              className: (0, $.default)(dG, qU),
              children: [
                (0, Q.jsxs)(`div`, {
                  className: JU,
                  children: [
                    (0, Q.jsxs)(Fa, {
                      className: YU,
                      "flow-children": `row`,
                      children: [
                        _ &&
                          (0, Q.jsx)(`a`, {
                            href: b,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !_ &&
                          (0, Q.jsx)(fo, {
                            href: b,
                            target: `_blank`,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !!D &&
                          (0, Q.jsx)(fo, {
                            href: D,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(
                              `#YIR_TopGames_VisitInLibrary`,
                            ),
                          }),
                        !h && (0, Q.jsx)(W$, { appID: s }),
                      ],
                    }),
                    (0, Q.jsx)(`div`, {
                      className: (0, $.default)({
                        [BU]: !0,
                        [QU]: (te?.length ?? 0) > 25,
                      }),
                      children: te,
                    }),
                    (0, Q.jsx)(I$, {
                      gameSummary: o,
                      userYearInReview: n,
                      index: r,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: VU,
                      children: [
                        !!o.total_playtime_percentagex100 &&
                          (0, Q.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: XW(
                                  Math.ceil(o.total_playtime_percentagex100),
                                ),
                              }),
                              (0, Q.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(
                                  `#YIR_Game_PercentPlaytime`,
                                ),
                              }),
                            ],
                          }),
                        !!o.total_sessions &&
                          (0, Q.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: Ur(T),
                              }),
                              (0, Q.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(
                                  T == 1
                                    ? `#YIR_Game_PlaySession_Singular`
                                    : `#YIR_Game_PlaySessions`,
                                ),
                              }),
                            ],
                          }),
                        !_H() &&
                          a > 1 &&
                          (0, Q.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Q.jsxs)(qn, {
                              toolTipContent: R.LocalizeReact(
                                `#YIR_Game_LongestStreak_ttip`,
                              ),
                              children: [
                                (0, Q.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: Ur(a),
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: R.Localize(
                                    `#YIR_Game_LongestStreak`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!o?.new_this_year &&
                          (0, Q.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Q.jsxs)(qn, {
                              toolTipContent: f(
                                `#YIR_TopGames_NewThisYEar_ttip`,
                              ),
                              children: [
                                (0, Q.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: (0, Q.jsx)(Zi, {}),
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: R.Localize(
                                    `#YIR_TopGames_NewThisYEar`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!u &&
                          (0, Q.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: (0, Q.jsx)(Bn, {}),
                              }),
                              (0, Q.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(`#YIR_TopGames_100`),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                v &&
                  (0, Q.jsxs)(`div`, {
                    className: (0, $.default)(`v6AigbmQ0CY-`, `AJaOL928lBE-`),
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `_1X4tYa2ADHY-`,
                        children: w
                          ? f(
                              o?.new_this_year
                                ? `#YIR_TopGames_firstplayedNew`
                                : `#YIR_TopGames_firstplayed`,
                              w,
                            )
                          : null,
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `xPrgBVyuYEE-`,
                        children: (0, Q.jsx)(t$, {
                          data: v,
                          name: ee,
                          color: g[`topApp_${y}`],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(U$, { appid: s, userYearInReview: n, item: c }),
      ],
    })
  );
});
function V$(e) {
  let { item: t } = e,
    n = KW(t.info),
    r = De(t.assets, `library_hero`);
  return (0, Q.jsx)(`div`, {
    className: KU,
    style: n ? void 0 : { backgroundImage: `url(${r})` },
  });
}
function H$(e) {
  let { item: t } = e,
    n = Z(),
    r = KW(t.info),
    i = De(t.assets, `library_hero`);
  return (0, Q.jsx)(Q.Fragment, {
    children: (0, Q.jsx)(`div`, {
      className: (0, $.default)(WU, n.BackgroundImageFull),
      style: r ? void 0 : { backgroundImage: `url(${i})` },
    }),
  });
}
function U$(e) {
  let { appid: t, userYearInReview: n, item: r } = e,
    i = KW(r.info);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(S$, { bBlurContent: i, appid: t, userYearInReview: n }),
      (0, Q.jsx)(M$, { bBlurContent: i, appid: t, nYear: n.GetYear() }),
    ],
  });
}
function W$(e) {
  let { appID: t } = e,
    n = _(t),
    r = y(t),
    { bIsOwned: i } = b(n),
    a = Lr(),
    { mutate: o } = v(t, !r, a);
  return !rt.logged_in || i
    ? null
    : (0, Q.jsxs)(Fa, {
        className: (0, $.default)(ZU),
        onActivate: (e) => {
          (e.preventDefault(), e.stopPropagation(), o());
        },
        children: [
          r ? (0, Q.jsx)(oa, {}) : (0, Q.jsx)(li, {}),
          xs.Localize(r ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`),
        ],
      });
}
function G$(e) {
  let { pageData: t } = e,
    { steamid: n, nYear: r, eResult: i } = t;
  B.useEffect(() => {
    let e = new URL(window.location.href),
      t = [`src`, `snr`, `sP`].filter((t) => e.searchParams.has(t));
    t.length &&
      (t.forEach((t) => e.searchParams.delete(t)),
      window.history.replaceState(window.history.state, ``, e));
  }, []);
  let a = B.useRef(null);
  return (
    B.useEffect(() => {
      a.current && a.current.NavTree()?.Activate(!0);
    }, []),
    i == 15
      ? (0, Q.jsx)($$, {
          message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
        })
      : !n || !r
        ? (0, Q.jsx)($$, { message: R.Localize(`#YIR_Error_NoData`) })
        : (0, Q.jsx)(sU.Provider, {
            value: t,
            children: (0, Q.jsx)(Fa, {
              navRef: a,
              children: (0, Q.jsx)(K$, { steamid: n, year: r }),
            }),
          })
  );
}
function K$(e) {
  let { steamid: t, year: n } = e,
    r = new kt(t),
    [i, a] = Xs(r.GetAccountID()),
    { userYearInReview: o, isLoading: s } = RH(t, n),
    { isLoading: c, isError: l } = dU(o?.GetTopGamesShownAppIDs() ?? []),
    u = CU();
  if (a || s || c || !u)
    return (0, Q.jsx)(E, {
      string: xs.Localize(`#Loading`),
      position: `center`,
    });
  if (!i || !r.BIsIndividualAccount())
    return (0, Q.jsx)($$, { message: R.Localize(`#YIR_Error_NoUser`) });
  if (!o || l)
    return (0, Q.jsx)($$, { message: R.Localize(`#YIR_Error_PageLoadFailed`) });
  let d = !o.GetPlayTimeStats()?.game_summary?.length;
  return rt.steamid !== i.steamid && d
    ? (0, Q.jsx)($$, {
        message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
      })
    : d
      ? (0, Q.jsx)($$, { message: R.Localize(`#YIR_Error_NoShareNoGameplay`) })
      : (0, Q.jsx)(Fa, {
          autoFocus: !0,
          noFocusRing: !0,
          focusable: !1,
          scrollIntoViewType: io.NoTransformSparseContent,
          children: (0, Q.jsx)(`div`, {
            className: uG,
            children: (0, Q.jsx)(J$, {
              userYearInReview: o,
              avatarAndPersona: i,
            }),
          }),
        });
}
function q$(e) {
  let {
      viewAsUser: t,
      avatarAndPersona: n,
      userYearInReview: r,
      themeYear: i,
      children: a,
    } = e,
    o = Zs(i),
    s = Da(),
    c = r.GetSteamID(),
    l = r.GetYear(),
    u = B.useMemo(() => VH(s, c, l), [s, c, l]),
    d = B.useMemo(
      () => ({
        bIsUser: t,
        persona_name: n.persona_name,
        avatar_url: n.avatar_url,
        themeStyle: o,
      }),
      [t, n.persona_name, n.avatar_url, o],
    );
  return (0, Q.jsx)(WW.Provider, {
    value: d,
    children: (0, Q.jsx)($i, {
      eAdultOnlyMediaBehavior: t ? `allowed` : `masked`,
      children: (0, Q.jsx)(HH.Provider, {
        value: u,
        children: (0, Q.jsx)(nG, { children: a }),
      }),
    }),
  });
}
function J$(e) {
  let { userYearInReview: t, avatarAndPersona: n } = e,
    r = t.GetYear(),
    i = rt.logged_in && rt.steamid === n.steamid,
    [a, o] = (0, B.useState)(i),
    [s, c] = (0, B.useState)(r);
  return (0, Q.jsxs)(q$, {
    viewAsUser: a,
    userYearInReview: t,
    avatarAndPersona: n,
    themeYear: s,
    children: [
      (0, Q.jsx)(Q$, {
        viewAsUser: a,
        setViewAsUser: o,
        themeYear: s,
        setThemeYear: c,
      }),
      (0, Q.jsx)(Y$, { ...e, viewAsUser: a }),
    ],
  });
}
function Y$(e) {
  let { userYearInReview: t, viewAsUser: n } = e,
    r = t.GetSteamID(),
    i = t.GetYear();
  KH(t);
  let { persona_name: a } = (0, B.useContext)(WW),
    o = t.GetPlayTimeStats().game_summary?.length;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(Z$, { userYearInReview: t }),
      (0, Q.jsx)(jt, {
        children: (0, Q.jsxs)(iJ, {
          userYearInReview: t,
          children: [
            (0, Q.jsx)(OQ, { userYearInReview: t }),
            o === 1 && (0, Q.jsx)(F$, { userYearInReview: t }),
          ],
        }),
      }),
      (0, Q.jsx)(jt, { children: (0, Q.jsx)(PY, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 1 &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(F$, { userYearInReview: t }),
            (0, Q.jsx)(`div`, {
              className: `xan-F7AKHTg-`,
              children: (0, Q.jsx)(jt, {
                children: (0, Q.jsx)(o$, { userYearInReview: t }),
              }),
            }),
          ],
        }),
      (0, Q.jsx)(`div`, {
        className: yK,
        children: (0, Q.jsx)(jt, {
          children: (0, Q.jsx)(fX, { userYearInReview: t }),
        }),
      }),
      !!t.GetPlayTimeStats().playtime_streak &&
        (0, Q.jsx)(jt, { children: (0, Q.jsx)(NX, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 5 &&
        (0, Q.jsx)(jt, {
          children: (0, Q.jsx)(Oq, { userYearInReview: t, nYear: i }),
        }),
      (0, Q.jsx)(jt, {
        children: (0, Q.jsxs)(`div`, {
          className: RK,
          children: [
            (0, Q.jsx)(iJ, {
              userYearInReview: t,
              children: (0, Q.jsx)(e1, { playerName: a, userYearInReview: t }),
            }),
            n &&
              (0, Q.jsxs)(`div`, {
                className: `GQ15KBYq0dM-`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `aXiQBfYGO9I-`,
                    children: R.Localize(`#YIR_ShareOptionsTitle`),
                  }),
                  (0, Q.jsxs)(Fa, {
                    className: `QsTph6fo6tE-`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: (0, $.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: R.Localize(`#YIR_ShareModal_TitleSocial`),
                          }),
                          (0, Q.jsx)(hQ, { steamid: r, nYear: i }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: (0, $.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: R.Localize(
                              `#YIR_ShareModal_TitleProfile`,
                            ),
                          }),
                          (0, Q.jsxs)(fo, {
                            href: `${ft.COMMUNITY_BASE_URL}profiles/${rt.steamid}/edit/showcases`,
                            className: (0, $.default)(`j8A4NpxJ0t0-`),
                            children: [
                              (0, Q.jsx)(Uo, { className: `uc6rSxuiYYU-` }),
                              (0, Q.jsx)(`span`, {
                                className: (0, $.default)(`_2-Cr-SQJps0-`),
                                children: R.Localize(
                                  `#YIR_ShareModal_AddShowcase`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, Q.jsx)(jt, { children: (0, Q.jsx)(YY, { userYearInReview: t }) }),
      (0, Q.jsx)(jt, { children: (0, Q.jsx)(VX, { steamid: r, year: i }) }),
      (0, Q.jsx)(jt, { children: (0, Q.jsx)(t1, { year: i }) }),
      (0, Q.jsx)(jt, { children: (0, Q.jsx)(z$, { userYearInReview: t }) }),
    ],
  });
}
function X$() {
  let e = Z(),
    { persona_name: t, avatar_url: n } = (0, B.useContext)(WW);
  return (0, Q.jsxs)(`div`, {
    className: yG,
    children: [
      (0, Q.jsx)(Gs, {
        strAvatarURL: n.replace(/\.jpg$/, `_full.jpg`),
        className: bG,
      }),
      (0, Q.jsx)(`span`, {
        className: (0, $.default)(xG, e.UserName),
        children: R.Localize(`#YearInReview_PossessiveUserName`, t),
      }),
    ],
  });
}
function Z$(e) {
  let { userYearInReview: t } = e,
    n = t.GetSteamID(),
    r = t.GetYear();
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)(dG, fG),
    children: (0, Q.jsxs)(`div`, {
      className: _G,
      children: [
        (0, Q.jsx)(`div`, {
          className: vG,
          children: R.LocalizeReact(
            `#YearInReview_SteamRewindHeader`,
            (0, Q.jsx)(X$, {}),
            xs.Localize(`#date_year`, r, ` `),
          ),
        }),
        rt.logged_in &&
          (0, Q.jsx)(`div`, {
            className: `-vTPvlHUL7g-`,
            children: (0, Q.jsx)(`div`, {
              className: (0, $.default)(`PmXhnAChGR0-`),
              children: (0, Q.jsx)(jt, {
                children: (0, Q.jsx)(hQ, { steamid: n, nYear: r }),
              }),
            }),
          }),
      ],
    }),
  });
}
function Q$(e) {
  let { viewAsUser: t, setViewAsUser: n, themeYear: r, setThemeYear: i } = e,
    a = [
      { data: 2022, label: `2022` },
      { data: 2023, label: `2023` },
      { data: 2024, label: `2024` },
      { data: 2025, label: `2025` },
      { data: 2026, label: `2026` },
    ],
    o = (0, B.useCallback)(
      (e) => {
        i(e.data);
      },
      [i],
    ),
    s = Is(),
    { bAllowDevToggles: c } = cU();
  return !c || s
    ? null
    : (0, Q.jsxs)(`div`, {
        className: (0, $.default)(TK, ee),
        children: [
          (0, Q.jsx)(`div`, {
            children: `Debug Only: Toggle First Person View`,
          }),
          (0, Q.jsx)(fa, { onChange: n, checked: t }),
          (0, Q.jsx)(`div`, {
            children: `Debug Only: Change to view the contents in the css style of a different year`,
          }),
          (0, Q.jsx)(Gt, { rgOptions: a, selectedOption: r, onChange: o }),
        ],
      });
}
function $$(e) {
  let { message: t } = e;
  return (0, Q.jsxs)(`div`, {
    className: EK,
    children: [
      (0, Q.jsx)(`div`, { className: OK }),
      (0, Q.jsxs)(`div`, {
        className: (0, $.default)(uG, AK),
        children: [
          (0, Q.jsx)(`div`, { className: CG, children: t }),
          (0, Q.jsx)(`div`, {}),
        ],
      }),
    ],
  });
}
function e1(e) {
  let { userYearInReview: t } = e,
    n = Z();
  if (!rt.is_support && rt.accountid != t.GetAccountID()) return null;
  let r = t.GetYear();
  return (0, Q.jsx)(`div`, {
    className: (0, $.default)(dG, MK),
    children: (0, Q.jsx)(`div`, {
      className: CG,
      children: R.LocalizeReact(
        `#YIR_Conclusion`,
        (0, Q.jsx)(`span`, {
          className: (0, $.default)(void 0, n.ConclusionName),
          children: e.playerName,
        }),
        r,
      ),
    }),
  });
}
function t1(e) {
  let { year: t } = e;
  return (0, Q.jsxs)(`div`, {
    className: (0, $.default)(void 0, PK),
    children: [
      (0, Q.jsx)(`div`, {
        className: CG,
        children: R.Localize(`#YIR_FAQ_Title`),
      }),
      (0, Q.jsxs)(`div`, {
        className: NK,
        children: [
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_Dates_Q`),
              }),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_Dates_A`, t),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_Offline_Q`),
              }),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_Offline_A`),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_Types_Q`),
              }),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_Types_A`),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_Share_Q`),
              }),
              (0, Q.jsxs)(`div`, {
                className: LK,
                children: [
                  R.Localize(`#YIR_FAQ_Share_A`),
                  (0, Q.jsxs)(`ol`, {
                    children: [
                      (0, Q.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b1`),
                      }),
                      (0, Q.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b2`),
                      }),
                      (0, Q.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b3`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_ShareFamily_Q`),
              }),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_ShareFamily_A`),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: FK,
            children: [
              (0, Q.jsx)(`div`, {
                className: IK,
                children: R.Localize(`#YIR_FAQ_Controller_Q`),
              }),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_Controller_A1`),
              }),
              (0, Q.jsx)(`br`, {}),
              (0, Q.jsx)(`div`, {
                className: LK,
                children: R.Localize(`#YIR_FAQ_Controller_A2`),
              }),
            ],
          }),
          t == 2022
            ? (0, Q.jsxs)(`div`, {
                className: FK,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: IK,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_Q`),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: LK,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_A`, t),
                  }),
                ],
              })
            : (0, Q.jsxs)(`div`, {
                className: FK,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: IK,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_Q`),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: LK,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_A`, t),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var n1 = { Home: (e, t) => `${Ot.YearInReview(e, t)}` };
function r1(e) {
  return (0, Q.jsx)(ya, {
    domain: `store.steampowered.com`,
    controller: `yearinreview`,
    children: (0, Q.jsx)(a, {
      children: (0, Q.jsx)(r, {
        path: `${n1.Home(`:steamId?`, `:year?`)}`,
        render: (e) =>
          (0, Q.jsx)(ya, {
            method: `yearinreview`,
            children: (0, Q.jsx)(jt, {
              children: (0, Q.jsx)(i1, {
                steamId: e.match.params.steamId,
                year: e.match.params.year,
              }),
            }),
          }),
      }),
    }),
  });
}
function i1(e) {
  let { steamId: t, year: n } = e,
    r = u(),
    i = B.useMemo(() => a1(t, n), [t, n]);
  return (B.useMemo(() => o1(r, i), [r, i]), (0, Q.jsx)(G$, { pageData: i }));
}
function a1(e, t) {
  let n = e == `my` ? rt.steamid : e || ``,
    r = parseInt(t ?? ``),
    i = n ? new kt(n).GetAccountID() : 0,
    a =
      rt.is_support &&
      !!qr(`localization_advanced_access`, `application_config`);
  return {
    steamid: n,
    nYear: r,
    eResult: Number.parseInt(qr(`yearinreview_eresults`, `application_config`)),
    rgOtherYears:
      qr(`yearinreview_otheryears_${i}_${r}`, `application_config`) ?? [],
    bLocalizationAdvancedAccess: a,
    bAllowDevToggles: a,
  };
}
function o1(e, t) {
  let { steamid: n, nYear: r } = t;
  if (!n || !r) return;
  let i = new kt(n),
    a = FH(i.ConvertTo64BitString(), r);
  if (e.getQueryData(a)) return;
  let o = qr(`yearinreview_${i.GetAccountID()}_${r}`, `application_config`);
  s1(o) &&
    e.setQueryData(
      a,
      PH(1, {
        stats: o,
        percentiles: qr(`yearinreview_${r}_percentiles`, `application_config`),
        distribution: qr(
          `yearinreview_${r}_distribution`,
          `application_config`,
        ),
        previous_year_summary: qr(
          `yearinreview_${r}_previous_year_summary`,
          `application_config`,
        ),
      }),
    );
}
function s1(e) {
  let t = e;
  return (
    !!t &&
    typeof t == `object` &&
    !!t.account_id &&
    typeof t.account_id == `number` &&
    !!t.playtime_stats &&
    typeof t.playtime_stats == `object`
  );
}
export { n1 as YearInReviewRoutes, r1 as default };
