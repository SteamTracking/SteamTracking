/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./rolldown-runtime.js";
import {
  E as r,
  Ft as i,
  G as a,
  K as o,
  Pt as s,
  T as c,
  kt as l,
  ot as u,
} from "./libraries.js";
import { t as d } from "./heading.js";
import { n as f, t as p } from "./textlink.js";
import { n as m, t as h } from "./coercingtextinput.js";
import { v as g, y as _ } from "./routing.js";
import { t as v } from "./segmentedcontrol.js";
import { t as y } from "./grid.js";
import { t as b } from "./with-selector.js";
import { t as x } from "./expandonappear.js";
import { r as S, t as C } from "./currencyformat.js";
import { i as w, n as T, r as E, t as D } from "./econbbcode.js";
import {
  $m as O,
  Ah as k,
  Bt as A,
  Dh as j,
  Dt as ee,
  Eh as M,
  Gt as te,
  Ht as ne,
  Jt as N,
  Mh as P,
  Oh as F,
  Rt as re,
  St as ie,
  Th as I,
  Xh as ae,
  Yh as oe,
  Yt as se,
  am as ce,
  an as le,
  dt as ue,
  em as de,
  jh as fe,
  kh as pe,
  nn as me,
  rm as he,
  wu as ge,
  x as _e,
  xu as ve,
} from "./main.js";
function ye(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ye(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function L() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ye(e)) && (r && (r += ` `), (r += t));
  return r;
}
var be =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function xe(e) {
  return typeof e == `string` && be.includes(e);
}
var R = e(s()),
  Se =
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    );
function Ce(e) {
  return typeof e == `string` && Se.includes(e);
}
function we(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function Te(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Ce(t) || we(t);
  });
  return Object.fromEntries(t);
}
function Ee(e) {
  if (e == null) return null;
  if (
    (0, R.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return Te(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? Te(e) : null;
}
function De(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Ce(t) || we(t) || xe(t);
  });
  return Object.fromEntries(t);
}
function Oe(e) {
  return e == null
    ? null
    : (0, R.isValidElement)(e)
      ? De(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? De(e)
        : null;
}
var ke = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function Ae() {
  return (
    (Ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ae.apply(null, arguments)
  );
}
function je(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Me(e, t);
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
function Me(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ne = (0, R.forwardRef)((e, t) => {
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
      u = je(e, ke),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = L(`recharts-surface`, o);
    return R.createElement(
      `svg`,
      Ae({}, De(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      R.createElement(`title`, null, c),
      R.createElement(`desc`, null, l),
      n,
    );
  }),
  Pe = [`children`, `className`];
function Fe() {
  return (
    (Fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fe.apply(null, arguments)
  );
}
function Ie(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Le(e, t);
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
function Le(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Re = R.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = Ie(e, Pe),
      a = L(`recharts-layer`, r);
    return R.createElement(`g`, Fe({ className: a }, De(i), { ref: t }), n);
  }),
  ze = (0, R.createContext)(null);
function z(e) {
  return function () {
    return e;
  };
}
var Be = Math.cos,
  Ve = Math.sin,
  He = Math.sqrt,
  Ue = Math.PI;
Ue / 2;
var We = 2 * Ue,
  Ge = Math.PI,
  Ke = 2 * Ge,
  qe = 1e-6,
  Je = Ke - qe;
function Ye(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Xe(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Ye;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Ze = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Ye : Xe(e)));
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
    else if (d > qe) {
      if (!(Math.abs(u * s - c * l) > qe) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((Ge - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > qe && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > qe || Math.abs(this._y1 - l) > qe) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Ke) + Ke),
        d > Je
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > qe &&
            this._append`A${n},${n},0,${+(d >= Ge)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
Ze.prototype;
function Qe(e) {
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
    () => new Ze(t)
  );
}
Array.prototype.slice;
function $e(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function et(e) {
  this._context = e;
}
et.prototype = {
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
function tt(e) {
  return new et(e);
}
function nt(e) {
  return e[0];
}
function rt(e) {
  return e[1];
}
function it(e, t) {
  var n = z(!0),
    r = null,
    i = tt,
    a = null,
    o = Qe(s);
  ((e = typeof e == `function` ? e : e === void 0 ? nt : z(e)),
    (t = typeof t == `function` ? t : t === void 0 ? rt : z(t)));
  function s(s) {
    var c,
      l = (s = $e(s)).length,
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
        ? ((e = typeof t == `function` ? t : z(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : z(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : z(!!e)), s)
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
function at(e, t, n) {
  var r = null,
    i = z(!0),
    a = null,
    o = tt,
    s = null,
    c = Qe(l);
  ((e = typeof e == `function` ? e : e === void 0 ? nt : z(+e)),
    (t = typeof t == `function` ? t : z(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? rt : z(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = $e(l)).length,
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
    return it().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : z(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : z(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : z(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : z(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : z(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : z(+e)), l)
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
        ? ((i = typeof e == `function` ? e : z(!!e)), l)
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
var ot = class {
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
function st(e) {
  return new ot(e, !0);
}
function ct(e) {
  return new ot(e, !1);
}
var lt = {
    draw(e, t) {
      let n = He(t / Ue);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, We));
    },
  },
  ut = {
    draw(e, t) {
      let n = He(t / 5) / 2;
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
  dt = He(1 / 3),
  ft = dt * 2,
  pt = {
    draw(e, t) {
      let n = He(t / ft),
        r = n * dt;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  mt = {
    draw(e, t) {
      let n = He(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  ht = 0.8908130915292852,
  gt = Ve(Ue / 10) / Ve((7 * Ue) / 10),
  _t = Ve(We / 10) * gt,
  vt = -Be(We / 10) * gt,
  yt = {
    draw(e, t) {
      let n = He(t * ht),
        r = _t * n,
        i = vt * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (We * t) / 5,
          o = Be(a),
          s = Ve(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  bt = He(3),
  xt = {
    draw(e, t) {
      let n = -He(t / (bt * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-bt * n, -n),
        e.lineTo(bt * n, -n),
        e.closePath());
    },
  },
  St = -0.5,
  Ct = He(3) / 2,
  wt = 1 / He(12),
  Tt = (wt / 2 + 1) * 3,
  Et = {
    draw(e, t) {
      let n = He(t / Tt),
        r = n / 2,
        i = n * wt,
        a = r,
        o = n * wt + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(St * r - Ct * i, Ct * r + St * i),
        e.lineTo(St * a - Ct * o, Ct * a + St * o),
        e.lineTo(St * s - Ct * c, Ct * s + St * c),
        e.lineTo(St * r + Ct * i, St * i - Ct * r),
        e.lineTo(St * a + Ct * o, St * o - Ct * a),
        e.lineTo(St * s + Ct * c, St * c - Ct * s),
        e.closePath());
    },
  };
function Dt(e, t) {
  let n = null,
    r = Qe(i);
  ((e = typeof e == `function` ? e : z(e || lt)),
    (t = typeof t == `function` ? t : z(t === void 0 ? 64 : +t)));
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
        ? ((e = typeof t == `function` ? t : z(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : z(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function Ot() {}
function kt(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function At(e) {
  this._context = e;
}
At.prototype = {
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
        kt(this, this._x1, this._y1);
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
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function jt(e) {
  return new At(e);
}
function Mt(e) {
  this._context = e;
}
Mt.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
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
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Nt(e) {
  return new Mt(e);
}
function Pt(e) {
  this._context = e;
}
Pt.prototype = {
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
        kt(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Ft(e) {
  return new Pt(e);
}
function It(e) {
  this._context = e;
}
It.prototype = {
  areaStart: Ot,
  areaEnd: Ot,
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
function Lt(e) {
  return new It(e);
}
function Rt(e) {
  return e < 0 ? -1 : 1;
}
function zt(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (Rt(a) + Rt(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function Bt(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function Vt(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Ht(e) {
  this._context = e;
}
Ht.prototype = {
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
        Vt(this, this._t0, Bt(this, this._t0));
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
          ((this._point = 3), Vt(this, Bt(this, (n = zt(this, e, t))), n));
          break;
        default:
          Vt(this, this._t0, (n = zt(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function Ut(e) {
  this._context = new Wt(e);
}
(Ut.prototype = Object.create(Ht.prototype)).point = function (e, t) {
  Ht.prototype.point.call(this, t, e);
};
function Wt(e) {
  this._context = e;
}
Wt.prototype = {
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
function Gt(e) {
  return new Ht(e);
}
function Kt(e) {
  return new Ut(e);
}
function qt(e) {
  this._context = e;
}
qt.prototype = {
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
        for (var r = Jt(e), i = Jt(t), a = 0, o = 1; o < n; ++a, ++o)
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
function Jt(e) {
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
function Yt(e) {
  return new qt(e);
}
function Xt(e, t) {
  ((this._context = e), (this._t = t));
}
Xt.prototype = {
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
function Zt(e) {
  return new Xt(e, 0.5);
}
function Qt(e) {
  return new Xt(e, 0);
}
function $t(e) {
  return new Xt(e, 1);
}
function en(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function tn(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function nn(e, t) {
  return e[t];
}
function rn(e) {
  let t = [];
  return ((t.key = e), t);
}
function an() {
  var e = z([]),
    t = tn,
    n = en,
    r = nn;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), rn),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = $e(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : z(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : z(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? tn : typeof e == `function` ? e : z(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? en), i) : n;
    }),
    i
  );
}
function on(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    en(e, t);
  }
}
function sn(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    en(e, t);
  }
}
function cn(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), en(e, t));
  }
}
var ln = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  un = n((e) => {
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
  dn = n((e) => {
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
  fn = n((e) => {
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
  pn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ln(),
      n = un(),
      r = dn(),
      i = fn();
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
  mn = e(
    n((e, t) => {
      t.exports = pn().get;
    })(),
  ),
  hn = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  gn = (e) => typeof e == `number` && e != +e,
  _n = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  B = (e) => (typeof e == `number` || e instanceof Number) && !gn(e),
  vn = (e) => B(e) || typeof e == `string`,
  yn = 0,
  bn = (e) => {
    var t = ++yn;
    return `${e || ``}${t}`;
  },
  xn = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!B(e) && typeof e != `string`) return n;
    var i;
    if (_n(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (gn(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  Sn = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function V(e, t, n) {
  return B(e) && B(t) ? e + n * (t - e) : t;
}
function Cn(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, mn.default)(e, t)) === n,
    );
}
var H = (e) => e == null,
  wn = (e) => (H(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  Tn = [`type`, `size`, `sizeType`];
function En() {
  return (
    (En = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    En.apply(null, arguments)
  );
}
function Dn(e, t) {
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
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dn(Object(n), !0).forEach(function (t) {
          kn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kn(e, t, n) {
  return (
    (t = An(t)) in e
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
function An(e) {
  var t = jn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Mn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Nn(e, t);
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
function Nn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Pn = {
    symbolCircle: lt,
    symbolCross: ut,
    symbolDiamond: pt,
    symbolSquare: mt,
    symbolStar: yt,
    symbolTriangle: xt,
    symbolWye: Et,
  },
  Fn = Math.PI / 180,
  In = (e) => Pn[`symbol${wn(e)}`] || lt,
  Ln = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * Fn;
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
  Rn = (e, t) => {
    Pn[`symbol${wn(e)}`] = t;
  },
  zn = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = On(On({}, Mn(e, Tn)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = In(a),
          t = Dt()
            .type(e)
            .size(Ln(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = De(i);
    return c === +c && l === +l && n === +n
      ? R.createElement(
          `path`,
          En({}, u, {
            className: L(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
zn.registerSymbol = Rn;
var Bn = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, R.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        xe(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  Vn = (e, t, n) => (r) => (e(t, n, r), null),
  Hn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        xe(i) && typeof a == `function` && ((r ||= {}), (r[i] = Vn(a, t, n)));
      }),
      r
    );
  },
  Un = n((e) => {
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
  Wn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  Gn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  Kn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Gn();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  qn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  Jn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Kn(),
      n = qn();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  Yn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = pn();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Xn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  Zn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  Qn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  $n = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er(),
      n = Xn(),
      r = Zn(),
      i = Qn();
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
  er = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = $n();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  tr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  nr = n((e) => {
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
  rr = n((e) => {
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
  ir = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  ar = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = tr(),
      n = nr(),
      r = rr(),
      i = Zn(),
      a = ir();
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
  or = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ar();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  sr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er(),
      n = or();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  cr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ar(),
      n = rr();
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
  lr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = cr();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  ur = n((e) => {
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
  dr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = nr();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  fr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = un(),
      n = ur(),
      r = dr(),
      i = fn();
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
  pr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er(),
      n = dn(),
      r = lr(),
      i = pn(),
      a = fr();
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
  mr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Wn(),
      n = Yn(),
      r = sr(),
      i = pr();
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
  hr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Un(),
      n = Wn(),
      r = Jn(),
      i = mr();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  gr = e(
    n((e, t) => {
      t.exports = hr().uniqBy;
    })(),
  );
function _r(e, t, n) {
  return t === !0
    ? (0, gr.default)(e, n)
    : typeof t == `function`
      ? (0, gr.default)(e, t)
      : e;
}
var vr = n((e) => {
    var t = s(),
      n = c();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      l = t.useEffect,
      u = t.useMemo,
      d = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
      var c = o(null);
      if (c.current === null) {
        var f = { hasValue: !1, value: null };
        c.current = f;
      } else f = c.current;
      c = u(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), s !== void 0 && f.hasValue)) {
                var t = f.value;
                if (s(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), i(o, e))) return t;
            var n = r(e);
            return s !== void 0 && s(t, n) ? ((o = e), t) : ((o = e), (c = n));
          }
          var a = !1,
            o,
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
        [t, n, r, s],
      );
      var p = a(e, c[0], c[1]);
      return (
        l(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        d(p),
        p
      );
    };
  }),
  yr = n((e, t) => {
    t.exports = vr();
  }),
  br = (0, R.createContext)(null),
  xr = yr(),
  Sr = (e) => e,
  U = () => {
    var e = (0, R.useContext)(br);
    return e ? e.store.dispatch : Sr;
  },
  Cr = () => {},
  wr = () => Cr,
  Tr = (e, t) => e === t;
function W(e) {
  var t = (0, R.useContext)(br);
  return (0, xr.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : wr,
    t ? t.store.getState : Cr,
    t ? t.store.getState : Cr,
    t ? e : Cr,
    Tr,
  );
}
function Er(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Dr(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Or(
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
var kr = (e) => (Array.isArray(e) ? e : [e]);
function Ar(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Or(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function jr(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Mr = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Nr = typeof WeakRef < `u` ? WeakRef : Mr,
  Pr = 0,
  Fr = 1;
function Ir() {
  return { s: Pr, v: void 0, o: null, p: null };
}
function Lr(e, t = {}) {
  let n = Ir(),
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
        r === void 0 ? ((t = Ir()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Ir()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Fr) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Nr(c)
            : c));
    }
    return ((s.s = Fr), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Ir()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Rr(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Er(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Lr,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = kr(c),
        p = kr(u),
        m = Ar(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = jr(m, arguments);
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
var G = Rr(Lr),
  zr = Object.assign(
    (e, t = G) => {
      Dr(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => zr },
  ),
  Br = n((e) => {
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
  Vr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  Hr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Vr(),
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
  Ur = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Br(),
      n = Hr(),
      r = fn();
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
  Wr = n((e) => {
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
  Gr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ur(),
      n = Kn(),
      r = Xn(),
      i = Qn();
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
  Kr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ur(),
      n = Wr(),
      r = Gr();
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
  qr = e(
    n((e, t) => {
      t.exports = Kr().sortBy;
    })(),
  ),
  Jr = (e) => e.legend.settings,
  Yr = (e) => e.legend.size;
G([(e) => e.legend.payload, Jr], (e, t) => {
  var { itemSorter: n } = t,
    r = e.flat(1);
  return n ? (0, qr.default)(r, n) : r;
});
var Xr = 1;
function Zr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, R.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, R.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Xr ||
            Math.abs(i.left - t.left) > Xr ||
            Math.abs(i.top - t.top) > Xr ||
            Math.abs(i.width - t.width) > Xr) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function Qr(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var $r = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  ei = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  ti = {
    INIT: `@@redux/INIT${ei()}`,
    REPLACE: `@@redux/REPLACE${ei()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ei()}`,
  };
function ni(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ri(e, t, n) {
  if (typeof e != `function`) throw Error(Qr(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Qr(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Qr(1));
    return n(ri)(e, t);
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
    if (c) throw Error(Qr(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Qr(4));
    if (c) throw Error(Qr(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Qr(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!ni(e)) throw Error(Qr(7));
    if (e.type === void 0) throw Error(Qr(8));
    if (typeof e.type != `string`) throw Error(Qr(17));
    if (c) throw Error(Qr(9));
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
    if (typeof e != `function`) throw Error(Qr(10));
    ((r = e), f({ type: ti.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Qr(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [$r]() {
        return this;
      },
    };
  }
  return (
    f({ type: ti.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [$r]: m }
  );
}
function ii(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: ti.INIT }) === void 0) throw Error(Qr(12));
    if (n(void 0, { type: ti.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Qr(13));
  });
}
function ai(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    ii(n);
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
      if (u === void 0) throw (t && t.type, Error(Qr(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function oi(...e) {
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
function si(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Qr(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = oi(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function ci(e) {
  return ni(e) && `type` in e && typeof e.type == `string`;
}
var li = Symbol.for(`immer-nothing`),
  ui = Symbol.for(`immer-draftable`),
  di = Symbol.for(`immer-state`);
function fi(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var pi = Object.getPrototypeOf;
function mi(e) {
  return !!e && !!e[di];
}
function hi(e) {
  return e
    ? vi(e) ||
        Array.isArray(e) ||
        !!e[ui] ||
        !!e.constructor?.[ui] ||
        wi(e) ||
        Ti(e)
    : !1;
}
var gi = Object.prototype.constructor.toString(),
  _i = new WeakMap();
function vi(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = _i.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), _i.set(n, r)), r === gi
  );
}
function yi(e, t, n = !0) {
  bi(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function bi(e) {
  let t = e[di];
  return t ? t.type_ : Array.isArray(e) ? 1 : wi(e) ? 2 : Ti(e) ? 3 : 0;
}
function xi(e, t) {
  return bi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Si(e, t, n) {
  let r = bi(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Ci(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function wi(e) {
  return e instanceof Map;
}
function Ti(e) {
  return e instanceof Set;
}
function Ei(e) {
  return e.copy_ || e.base_;
}
function Di(e, t) {
  if (wi(e)) return new Map(e);
  if (Ti(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = vi(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[di];
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
    return Object.create(pi(e), t);
  }
  {
    let t = pi(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function Oi(e, t = !1) {
  return (
    ji(e) ||
      mi(e) ||
      !hi(e) ||
      (bi(e) > 1 &&
        Object.defineProperties(e, { set: Ai, add: Ai, clear: Ai, delete: Ai }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => Oi(e, !0))),
    e
  );
}
function ki() {
  fi(2);
}
var Ai = { value: ki };
function ji(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var Mi = {};
function Ni(e) {
  let t = Mi[e];
  return (t || fi(0, e), t);
}
var Pi;
function Fi() {
  return Pi;
}
function Ii(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Li(e, t) {
  t &&
    (Ni(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Ri(e) {
  (zi(e), e.drafts_.forEach(Vi), (e.drafts_ = null));
}
function zi(e) {
  e === Pi && (Pi = e.parent_);
}
function Bi(e) {
  return (Pi = Ii(Pi, e));
}
function Vi(e) {
  let t = e[di];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Hi(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[di].modified_ && (Ri(t), fi(4)),
        hi(e) && ((e = Ui(t, e)), t.parent_ || Gi(t, e)),
        t.patches_ &&
          Ni(`Patches`).generateReplacementPatches_(
            n[di].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Ui(t, n, [])),
    Ri(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === li ? void 0 : e
  );
}
function Ui(e, t, n) {
  if (ji(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[di];
  if (!i) return (yi(t, (r, a) => Wi(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (Gi(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      yi(a, (r, a) => Wi(e, i, t, r, a, n, o), r),
      Gi(e, t, !1),
      n &&
        e.patches_ &&
        Ni(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function Wi(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = ji(i);
  if (!s || o) {
    if (mi(i)) {
      let o = Ui(
        e,
        i,
        a && t && t.type_ !== 3 && !xi(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((Si(n, r, o), mi(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (hi(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (Ui(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (wi(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          Gi(e, i));
    }
  }
}
function Gi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Oi(t, n);
}
function Ki(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : Fi(),
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
    a = qi;
  n && ((i = [r]), (a = Ji));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var qi = {
    get(e, t) {
      if (t === di) return e;
      let n = Ei(e);
      if (!xi(n, t)) return Xi(e, n, t);
      let r = n[t];
      return e.finalized_ || !hi(r)
        ? r
        : r === Yi(e.base_, t)
          ? ($i(e), (e.copy_[t] = ta(r, e)))
          : r;
    },
    has(e, t) {
      return t in Ei(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ei(e));
    },
    set(e, t, n) {
      let r = Zi(Ei(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Yi(Ei(e), t),
          i = r?.[di];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (Ci(n, r) && (n !== void 0 || xi(e.base_, t))) return !0;
        ($i(e), Qi(e));
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
        Yi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), $i(e), Qi(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Ei(e),
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
      fi(11);
    },
    getPrototypeOf(e) {
      return pi(e.base_);
    },
    setPrototypeOf() {
      fi(12);
    },
  },
  Ji = {};
(yi(qi, (e, t) => {
  Ji[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (Ji.deleteProperty = function (e, t) {
    return Ji.set.call(this, e, t, void 0);
  }),
  (Ji.set = function (e, t, n) {
    return qi.set.call(this, e[0], t, n, e[0]);
  }));
function Yi(e, t) {
  let n = e[di];
  return (n ? Ei(n) : e)[t];
}
function Xi(e, t, n) {
  let r = Zi(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function Zi(e, t) {
  if (!(t in e)) return;
  let n = pi(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = pi(n);
  }
}
function Qi(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Qi(e.parent_));
}
function $i(e) {
  e.copy_ ||= Di(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var ea = class {
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
        (typeof t != `function` && fi(6),
          n !== void 0 && typeof n != `function` && fi(7));
        let r;
        if (hi(e)) {
          let i = Bi(this),
            a = ta(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Ri(i) : zi(i);
          }
          return (Li(i, n), Hi(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === li && (r = void 0),
            this.autoFreeze_ && Oi(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (Ni(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        fi(1, e);
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
    (hi(e) || fi(8), mi(e) && (e = na(e)));
    let t = Bi(this),
      n = ta(e, void 0);
    return ((n[di].isManual_ = !0), zi(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[di];
    (n && n.isManual_) || fi(9);
    let { scope_: r } = n;
    return (Li(r, t), Hi(void 0, r));
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
    let r = Ni(`Patches`).applyPatches_;
    return mi(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function ta(e, t) {
  let n = wi(e)
    ? Ni(`MapSet`).proxyMap_(e, t)
    : Ti(e)
      ? Ni(`MapSet`).proxySet_(e, t)
      : Ki(e, t);
  return ((t ? t.scope_ : Fi()).drafts_.push(n), n);
}
function na(e) {
  return (mi(e) || fi(10, e), ra(e));
}
function ra(e) {
  if (!hi(e) || ji(e)) return e;
  let t = e[di],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = Di(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = Di(e, !0);
  return (
    yi(
      n,
      (e, t) => {
        Si(n, e, ra(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var ia = new ea(),
  aa = ia.produce,
  oa = ia.setUseStrictIteration.bind(ia);
function sa(e) {
  return e;
}
function ca(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function la(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function ua(
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
var da = (e) => (Array.isArray(e) ? e : [e]);
function fa(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    ua(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function pa(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var ma = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ha = typeof WeakRef < `u` ? WeakRef : ma,
  ga = 0,
  _a = 1;
function va() {
  return { s: ga, v: void 0, o: null, p: null };
}
function ya(e, t = {}) {
  let n = va(),
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
        r === void 0 ? ((t = va()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = va()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === _a) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new ha(c)
            : c));
    }
    return ((s.s = _a), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = va()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function ba(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        ca(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = ya,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = da(c),
        p = da(u),
        m = fa(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = pa(m, arguments);
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
var xa = ba(ya),
  Sa = Object.assign(
    (e, t = xa) => {
      la(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Sa },
  );
function Ca(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var wa = Ca(),
  Ta = Ca;
((...e) => {
  let t = ba(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(mi(e) ? na(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(ya);
var Ea =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? oi
            : oi.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var Da = (e) => e && typeof e.match == `function`;
function Oa(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(Jo(0));
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
    (n.match = (t) => ci(t) && t.type === e),
    n
  );
}
var ka = class e extends Array {
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
function Aa(e) {
  return hi(e) ? aa(e, () => {}) : e;
}
function ja(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Ma(e) {
  return typeof e == `boolean`;
}
var Na = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new ka();
      return (t && (Ma(t) ? a.push(wa) : a.push(Ta(t.extraArgument))), a);
    },
  Pa = `RTK_autoBatch`,
  Fa = () => (e) => ({ payload: e, meta: { [Pa]: !0 } }),
  Ia = (e) => (t) => {
    setTimeout(t, e);
  },
  La =
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
                : Ia(10)
              : e.type === `callback`
                ? e.queueNotification
                : Ia(e.timeout),
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
              (i = !e?.meta?.[Pa]),
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
  Ra = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new ka(e);
      return (n && r.push(La(typeof n == `object` ? n : void 0)), r);
    };
function za(e) {
  let t = Na(),
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
  else if (ni(n)) c = ai(n);
  else throw Error(Jo(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = oi;
  i && (u = Ea({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Ra(si(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return ri(c, o, p);
}
function Ba(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(Jo(28));
        if (r in t) throw Error(Jo(29));
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
oa(!1);
function Va(e) {
  return typeof e == `function`;
}
function Ha(e, t) {
  let [n, r, i] = Ba(t),
    a;
  if (Va(e)) a = () => Aa(e());
  else {
    let t = Aa(e);
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
          if (mi(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (hi(e)) return aa(e, (e) => n(e, t));
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
var Ua = (e, t) => (Da(e) ? e.match(t) : e(t));
function Wa(...e) {
  return (t) => e.some((e) => Ua(e, t));
}
var Ga = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  Ka = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += Ga[(Math.random() * 64) | 0];
    return t;
  },
  qa = [`name`, `message`, `stack`, `code`],
  Ja = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Ya = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Xa = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of qa) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Za = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = Oa(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = Oa(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = Oa(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || Xa)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : Ka(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(Za)
            : o.addEventListener(`abort`, () => m(Za), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if (($a(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new Ja(e, t),
                    fulfillWithValue: (e, t) => new Ya(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof Ja) throw t;
                  return t instanceof Ya
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof Ja ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(Qa);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: Wa(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function Qa(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function $a(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var eo = Symbol.for(`rtk-slice-createasyncthunk`),
  to = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(to || {});
function no(e, t) {
  return `${e}/${t}`;
}
function ro({ creators: e } = {}) {
  let t = e?.asyncThunk?.[eo];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(Jo(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(oo()) : e.reducers) || {},
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
          if (!n) throw Error(Jo(12));
          if (n in o.sliceCaseReducersByType) throw Error(Jo(13));
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
          type: no(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      co(a) ? uo(o, a, s, t) : so(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Ba(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Ha(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = ja(d, r, m)), i);
      }
      function i(t = l) {
        return ja(
          ja(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = io(a, t, () => ja(d, t, m), n);
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
function io(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var ao = ro();
function oo() {
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
function so({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !lo(r)) throw Error(Jo(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Oa(e, o) : Oa(e));
}
function co(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function lo(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function uo({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(Jo(18));
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
      fulfilled: o || fo,
      pending: s || fo,
      rejected: c || fo,
      settled: l || fo,
    }));
}
function fo() {}
var po = `task`,
  mo = `listener`,
  ho = `completed`,
  go = `cancelled`,
  _o = `task-${go}`,
  vo = `task-${ho}`,
  yo = `${mo}-${go}`,
  bo = `${mo}-${ho}`,
  xo = class {
    constructor(e) {
      ((this.code = e), (this.message = `${po} ${go} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  So = (e, t) => {
    if (typeof e != `function`) throw TypeError(Jo(32));
  },
  Co = () => {},
  wo = (e, t = Co) => (e.catch(t), e),
  To = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  Eo = (e, t) => {
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
  Do = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new xo(t);
    }
  };
function Oo(e, t) {
  let n = Co;
  return new Promise((r, i) => {
    let a = () => i(new xo(e.reason));
    e.aborted ? a() : ((n = To(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Co;
  });
}
var ko = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof xo ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Ao = (e) => (t) => wo(Oo(e, t).then((t) => (Do(e), t))),
  jo = (e) => {
    let t = Ao(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: Mo } = Object,
  No = {},
  Po = `listenerMiddleware`,
  Fo = (e, t) => {
    let n = (t) => To(e, () => Eo(t, e.reason));
    return (r, i) => {
      So(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = ko(
        async () => {
          (Do(e), Do(a.signal));
          let t = await r({
            pause: Ao(a.signal),
            delay: jo(a.signal),
            signal: a.signal,
          });
          return (Do(a.signal), t);
        },
        () => Eo(a, vo),
      );
      return (
        i?.autoJoin && t.push(o.catch(Co)),
        {
          result: Ao(e)(o),
          cancel() {
            Eo(a, _o);
          },
        }
      );
    };
  },
  Io = (e, t) => {
    let n = async (n, r) => {
      Do(t);
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
        let e = await Oo(t, Promise.race(a));
        return (Do(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => wo(n(e, t));
  },
  Lo = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = Oa(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(Jo(21));
    return (So(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Ro = Mo(
    (e) => {
      let { type: t, predicate: n, effect: r } = Lo(e);
      return {
        id: Ka(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(Jo(22));
        },
      };
    },
    { withTypes: () => Ro },
  ),
  zo = (e, t) => {
    let { type: n, effect: r, predicate: i } = Lo(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  Bo = (e) => {
    e.pending.forEach((e) => {
      Eo(e, yo);
    });
  },
  Vo = (e, t) => () => {
    for (let e of t.keys()) Bo(e);
    e.clear();
  },
  Ho = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  Uo = Mo(Oa(`${Po}/add`), { withTypes: () => Uo }),
  Wo = Oa(`${Po}/removeAll`),
  Go = Mo(Oa(`${Po}/remove`), { withTypes: () => Go }),
  Ko = (...e) => {
    console.error(`${Po}/error`, ...e);
  },
  qo = (e = {}) => {
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
      { extra: a, onError: o = Ko } = e;
    So(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && Bo(e));
        }
      ),
      c = (e) => {
        let n = zo(t, e) ?? Ro(e);
        return s(n);
      };
    Mo(c, { withTypes: () => c });
    let l = (e) => {
      let n = zo(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && Bo(n)), !!n);
    };
    Mo(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = Io(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                Mo({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: jo(u.signal),
                  pause: Ao(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Fo(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (Eo(e, yo), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (Eo(u, yo), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Do(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof xo || Ho(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), Eo(u, bo), i(e), e.pending.delete(u));
        }
      },
      d = Vo(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!ci(r)) return n(r);
        if (Uo.match(r)) return c(r.payload);
        if (Wo.match(r)) {
          d();
          return;
        }
        if (Go.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === No) throw Error(Jo(23));
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
                ((s = !1), Ho(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = No;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function Jo(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Yo = ao({
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
  { setMargin: Xo, setLayout: Zo, setChartSize: Qo, setScale: $o } = Yo.actions,
  es = Yo.reducer;
function ts(e, t) {
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
function ns(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ts(Object(n), !0).forEach(function (t) {
          rs(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ts(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rs(e, t, n) {
  return (
    (t = is(t)) in e
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
function is(e) {
  var t = as(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function as(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var os = Math.PI / 180,
  ss = (e) => (e * 180) / Math.PI,
  cs = (e, t, n, r) => ({
    x: e + Math.cos(-os * r) * n,
    y: t + Math.sin(-os * r) * n,
  }),
  ls = function (e, t) {
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
  us = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  ds = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = us({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: ss(c), angleInRadian: c }
    );
  },
  fs = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  ps = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  ms = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = ds({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = fs(t),
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
    return d ? ns(ns({}, t), {}, { radius: i, angle: ps(u, t) }) : null;
  };
function hs(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function gs(e, t) {
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
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gs(Object(n), !0).forEach(function (t) {
          vs(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vs(e, t, n) {
  return (
    (t = ys(t)) in e
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
function ys(e) {
  var t = bs(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bs(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function K(e, t, n) {
  return H(e) || H(t)
    ? n
    : vn(t)
      ? (0, mn.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var xs = (e, t, n, r, i) => {
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
        if (hn(l - c) !== hn(u - l)) {
          var f = [];
          if (hn(u - l) === hn(i[1] - i[0])) {
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
  Ss = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        B(e[a])
      )
        return _s(_s({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        B(e[o])
      )
        return _s(_s({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  Cs = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  ws = (e, t, n, r) => {
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
  Ts = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? hn(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !gn(e.coordinate))
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
  Es = 1e-4,
  Ds = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - Es,
        a = Math.max(r[0], r[1]) + Es,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Os = (e, t) => {
    if (!t || t.length !== 2 || !B(t[0]) || !B(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!B(e[0]) || e[0] < n) && (i[0] = n),
      (!B(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  ks = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = gn(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: on,
    none: en,
    silhouette: sn,
    wiggle: cn,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = gn(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  As = (e, t, n) => {
    var r = ks[n];
    return an()
      .keys(t)
      .value((e, t) => +K(e, t, 0))
      .order(tn)
      .offset(r)(e);
  };
function js(e) {
  return e == null ? void 0 : String(e);
}
function Ms(e) {
  var { axis: t, ticks: n, bandSize: r, entry: i, index: a, dataKey: o } = e;
  if (t.type === `category`) {
    if (!t.allowDuplicatedCategory && t.dataKey && !H(i[t.dataKey])) {
      var s = Cn(n, `value`, i[t.dataKey]);
      if (s) return s.coordinate + r / 2;
    }
    return n[a] ? n[a].coordinate + r / 2 : null;
  }
  var c = K(i, H(o) ? t.dataKey : o);
  return H(c) ? null : t.scale(c);
}
var Ns = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = K(a, t.dataKey, t.scale.domain()[o]);
    return H(s) ? null : t.scale(s) - i / 2 + r;
  },
  Ps = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Fs = (e) => {
    var t = e.flat(2).filter(B);
    return [Math.min(...t), Math.max(...t)];
  },
  Is = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Ls = (e, t, n) => {
    if (e != null)
      return Is(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Fs(hs(r, t, n));
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
  Rs = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  zs = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Bs = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, qr.default)(t, (e) => e.coordinate),
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
function Vs(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return _s(_s({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Hs(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function Us(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? ms({ x: e, y: t }, r)
      : null;
}
var Ws = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return _s(
          _s(_s({}, r), cs(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return _s(
        _s(_s({}, r), cs(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  Gs = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  Ks = (e) => e.layout.width,
  qs = (e) => e.layout.height,
  Js = (e) => e.layout.scale,
  Ys = (e) => e.layout.margin,
  Xs = G(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Zs = G(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Qs = `data-recharts-item-index`;
function $s(e, t) {
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
function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $s(Object(n), !0).forEach(function (t) {
          tc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $s(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tc(e, t, n) {
  return (
    (t = nc(t)) in e
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
function nc(e) {
  var t = rc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ic = (e) => e.brush.height;
function ac(e) {
  return Zs(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function oc(e) {
  return Zs(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function sc(e) {
  return Xs(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function cc(e) {
  return Xs(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var lc = G(
    [Ks, qs, Ys, ic, ac, oc, sc, cc, Jr, Yr],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ec(
          ec({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = Ss(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ec(
        ec({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  uc = G(lc, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  dc = G(Ks, qs, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  fc = (0, R.createContext)(null),
  pc = () => (0, R.useContext)(fc) != null,
  mc = (e) => e.brush,
  hc = G([mc, lc, Ys], (e, t, n) => ({
    height: e.height,
    x: B(e.x) ? e.x : t.left,
    y: B(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: B(e.width) ? e.width : t.width,
  }));
function q(e) {
  return Number.isFinite(e);
}
function gc(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
var _c = (0, R.createContext)({ width: -1, height: -1 }),
  vc = () => (0, R.useContext)(_c),
  yc = () => {
    var e = pc(),
      t = W(uc),
      n = W(hc),
      r = W(mc)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  bc = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  xc = () => W(lc) ?? bc,
  Sc = () => W(Ks),
  Cc = () => W(qs),
  J = (e) => e.layout.layoutType,
  wc = () => W(J),
  Tc = (e) => {
    var t = U(),
      n = pc(),
      { width: r, height: i } = e,
      a = vc(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, R.useEffect)(() => {
        !n && gc(o) && gc(s) && t(Qo({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  Ec = ao({
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
          e.payload.push(sa(t.payload));
        },
        prepare: Fa(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = na(e).payload.indexOf(sa(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: Fa(),
      },
    },
  }),
  {
    setLegendSize: Dc,
    setLegendSettings: Oc,
    addLegendPayload: kc,
    removeLegendPayload: Ac,
  } = Ec.actions,
  jc = Ec.reducer;
function Mc() {
  return (
    (Mc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mc.apply(null, arguments)
  );
}
function Nc(e, t) {
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
function Pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nc(Object(n), !0).forEach(function (t) {
          Fc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Fc(e, t, n) {
  return (
    (t = Ic(t)) in e
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
function Ic(e) {
  var t = Lc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Lc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Rc(e) {
  return Array.isArray(e) && vn(e[0]) && vn(e[1]) ? e.join(` ~ `) : e;
}
var zc = (e) => {
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
            n = (s ? (0, qr.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || Rc,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = Pc(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return R.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: f,
                },
                vn(u)
                  ? R.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                vn(u)
                  ? R.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                R.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                R.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return R.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      m = Pc(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = Pc({ margin: 0 }, i),
      g = !H(u),
      _ = g ? u : ``,
      v = L(`recharts-default-tooltip`, c),
      y = L(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return R.createElement(
      `div`,
      Mc({ className: v, style: m }, b),
      R.createElement(
        `p`,
        { className: y, style: h },
        R.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  Bc = `recharts-tooltip-wrapper`,
  Vc = { visibility: `hidden` };
function Hc(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return L(Bc, {
    [`${Bc}-right`]: B(n) && t && B(t.x) && n >= t.x,
    [`${Bc}-left`]: B(n) && t && B(t.x) && n < t.x,
    [`${Bc}-bottom`]: B(r) && t && B(t.y) && r >= t.y,
    [`${Bc}-top`]: B(r) && t && B(t.y) && r < t.y,
  });
}
function Uc(e) {
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
  if (a && B(a[r])) return a[r];
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
function Wc(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function Gc(e) {
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
      ? ((u = Uc({
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
        (d = Uc({
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
        (l = Wc({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = Vc),
    {
      cssProperties: l,
      cssClasses: Hc({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function Kc(e, t) {
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
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Kc(Object(n), !0).forEach(function (t) {
          Jc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Jc(e, t, n) {
  return (
    (t = Yc(t)) in e
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
function Yc(e) {
  var t = Xc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Xc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Zc = class extends R.PureComponent {
    constructor() {
      (super(...arguments),
        Jc(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        Jc(this, `handleKeyDown`, (e) => {
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
        { cssClasses: _, cssProperties: v } = Gc({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = qc(
          qc(
            {},
            g
              ? {}
              : qc(
                  qc(
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
      return R.createElement(
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
  Qc = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  $c = () => W((e) => e.rootProps.accessibilityLayer);
function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(null, arguments)
  );
}
function tl(e, t) {
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
function nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tl(Object(n), !0).forEach(function (t) {
          rl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rl(e, t, n) {
  return (
    (t = il(t)) in e
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
function il(e) {
  var t = al(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function al(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ol = {
    curveBasisClosed: Nt,
    curveBasisOpen: Ft,
    curveBasis: jt,
    curveBumpX: st,
    curveBumpY: ct,
    curveLinearClosed: Lt,
    curveLinear: tt,
    curveMonotoneX: Gt,
    curveMonotoneY: Kt,
    curveNatural: Yt,
    curveStep: Zt,
    curveStepAfter: $t,
    curveStepBefore: Qt,
  },
  sl = (e) => q(e.x) && q(e.y),
  cl = (e) => e.x,
  ll = (e) => e.y,
  ul = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${wn(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? ol[`${n}${t === `vertical` ? `Y` : `X`}`]
      : ol[n] || tt;
  },
  dl = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = ul(t, i),
      s = a ? n.filter(sl) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => sl(e)) : r,
        u = s.map((e, t) => nl(nl({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? at()
                .y(ll)
                .x1(cl)
                .x0((e) => e.base.x)
            : at()
                .x(cl)
                .y1(ll)
                .y0((e) => e.base.y)),
        c.defined(sl).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && B(r)
          ? at().y(ll).x1(cl).x0(r)
          : B(r)
            ? at().x(cl).y1(ll).y0(r)
            : it().x(cl).y(ll)),
      c.defined(sl).curve(o),
      c(s)
    );
  },
  fl = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? dl(e) : r;
    return R.createElement(
      `path`,
      el({}, Te(e), Bn(e), {
        className: L(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  pl = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ml.apply(null, arguments)
  );
}
function hl(e, t) {
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
function gl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hl(Object(n), !0).forEach(function (t) {
          _l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _l(e, t, n) {
  return (
    (t = vl(t)) in e
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
function vl(e) {
  var t = yl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bl(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xl(e, t);
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
function xl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Sl = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  Cl = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = bl(e, pl),
      l = gl({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !B(t) || !B(n) || !B(a) || !B(o) || !B(r) || !B(i)
      ? null
      : R.createElement(
          `path`,
          ml({}, De(l), {
            className: L(`recharts-cross`, s),
            d: Sl(t, n, a, o, r, i),
          }),
        );
  };
function wl(e, t, n, r) {
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
function Tl(e, t) {
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
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tl(Object(n), !0).forEach(function (t) {
          Dl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dl(e, t, n) {
  return (
    (t = Ol(t)) in e
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
function Ol(e) {
  var t = kl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Al(e, t) {
  var n = El({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function jl() {}
function Ml(e) {
  return e != null;
}
function Nl(e, t) {
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
function Pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nl(Object(n), !0).forEach(function (t) {
          Fl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Fl(e, t, n) {
  return (
    (t = Il(t)) in e
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
function Il(e) {
  var t = Ll(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ll(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Rl = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  zl = (e, t, n) => e.map((e) => `${Rl(e)} ${t}ms ${n}`).join(`,`),
  Bl = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  Vl = (e, t) =>
    Object.keys(t).reduce((n, r) => Pl(Pl({}, n), {}, { [r]: e(r, t[r]) }), {});
function Hl(e, t) {
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
function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hl(Object(n), !0).forEach(function (t) {
          Wl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Wl(e, t, n) {
  return (
    (t = Gl(t)) in e
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
function Gl(e) {
  var t = Kl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Kl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ql = (e, t, n) => e + (t - e) * n,
  Jl = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  Yl = (e, t, n) => {
    var r = Vl((t, n) => {
      if (Jl(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return Ul(Ul({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? Vl(
          (e, t) =>
            Jl(t)
              ? Ul(
                  Ul({}, t),
                  {},
                  {
                    velocity: ql(t.velocity, r[e].velocity, n),
                    from: ql(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : Yl(e, r, n - 1);
  };
function Xl(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        Ul(Ul({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => Vl((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Jl).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = Yl(n, s, f)),
        i(Ul(Ul(Ul({}, e), t), c())),
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
function Zl(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => Ul(Ul({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = Vl((e, t) => ql(...t, n(d)), c);
      if ((a(Ul(Ul(Ul({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = Vl((e, t) => ql(...t, n(1)), c);
        a(Ul(Ul(Ul({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var Ql = (e, t, n, r, i, a) => {
    var o = Bl(e, t);
    return n.isStepper === !0 ? Xl(e, t, n, o, i, a) : Zl(e, t, n, r, o, i, a);
  },
  $l = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  eu = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  tu = (e, t) => (n) => eu($l(e, t), n),
  nu = (e, t) => (n) =>
    eu(
      [
        ...$l(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  ru = function () {
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
    var o = tu(e, t),
      s = tu(n, r),
      c = nu(e, t),
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
  iu = function () {
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
  au = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return ru(e);
        case `spring`:
          return iu();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return ru(e);
      }
    return typeof e == `function` ? e : null;
  };
function ou(e) {
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
var su = class {
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
function cu() {
  return ou(new su());
}
var lu = (0, R.createContext)(cu);
function uu(e, t) {
  var n = (0, R.useContext)(lu);
  return (0, R.useMemo)(() => t ?? n(e), [e, t, n]);
}
var du = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  fu = { t: 0 },
  pu = { t: 1 };
function mu(e) {
  var t = Al(e, du),
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
    u = uu(t.animationId, t.animationManager),
    [d, f] = (0, R.useState)(n ? fu : pu),
    p = (0, R.useRef)(null);
  return (
    (0, R.useEffect)(() => {
      n || f(pu);
    }, [n]),
    (0, R.useEffect)(() => {
      if (!n || !r) return jl;
      var e = Ql(fu, pu, au(a), i, f, u.getTimeoutController());
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
function hu(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, R.useRef)(bn(t)),
    r = (0, R.useRef)(e);
  return (r.current !== e && ((n.current = bn(t)), (r.current = e)), n.current);
}
var gu = [`radius`],
  _u = [`radius`];
function vu(e, t) {
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
function yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vu(Object(n), !0).forEach(function (t) {
          bu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bu(e, t, n) {
  return (
    (t = xu(t)) in e
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
function xu(e) {
  var t = Su(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Su(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cu() {
  return (
    (Cu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cu.apply(null, arguments)
  );
}
function wu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Tu(e, t);
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
function Tu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Eu = (e, t, n, r, i) => {
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
  Du = {
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
  Ou = (e) => {
    var t = Al(e, Du),
      n = (0, R.useRef)(null),
      [r, i] = (0, R.useState)(-1);
    (0, R.useEffect)(() => {
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
      g = (0, R.useRef)(s),
      _ = (0, R.useRef)(c),
      v = (0, R.useRef)(a),
      y = (0, R.useRef)(o),
      b = hu(
        (0, R.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var x = L(`recharts-rectangle`, u);
    if (!h) {
      var S = De(t),
        { radius: C } = S,
        w = wu(S, gu);
      return R.createElement(
        `path`,
        Cu({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: Eu(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      O = y.current,
      k = `0px ${r === -1 ? 1 : r}px`,
      A = `${r}px 0px`,
      j = zl([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return R.createElement(
      mu,
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
        var r = V(T, s, e),
          i = V(E, c, e),
          u = V(D, a, e),
          d = V(O, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: j, strokeDasharray: A }
              : { strokeDasharray: k }
            : { strokeDasharray: A },
          p = De(t),
          { radius: h } = p,
          b = wu(p, _u);
        return R.createElement(
          `path`,
          Cu({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: Eu(u, d, r, i, l),
            ref: n,
            style: yu(yu({}, f), t.style),
          }),
        );
      },
    );
  };
function ku(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [cs(t, n, r, i), cs(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function Au() {
  return (
    (Au = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Au.apply(null, arguments)
  );
}
var ju = (e, t) => hn(t - e) * Math.min(Math.abs(t - e), 359.999),
  Mu = (e) => {
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
      u = Math.asin(s / l) / os,
      d = c ? i : i + a * u,
      f = cs(t, n, l, d),
      p = cs(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: cs(t, n, l * Math.cos(u * os), m),
      theta: u,
    };
  },
  Nu = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = ju(a, o),
      c = a + s,
      l = cs(t, n, i, a),
      u = cs(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = cs(t, n, r, a),
        p = cs(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  Pu = (e) => {
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
      u = hn(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Mu({
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
      } = Mu({
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
        : Nu({
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
        } = Mu({
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
        } = Mu({
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
  Fu = {
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
  Iu = (e) => {
    var t = Al(e, Fu),
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
    var f = L(`recharts-sector`, d),
      p = a - i,
      m = xn(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? Pu({
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
          : Nu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return R.createElement(`path`, Au({}, De(t), { className: f, d: h }));
  };
function Lu(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = cs(s, c, l, d),
        p = cs(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return ku(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var Ru = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Vr();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ru();
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
  Bu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Gr(),
      n = zu();
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
  Vu = n((e, t) => {
    t.exports = Bu().range;
  });
function Hu(e, t) {
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
function Uu(e, t) {
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
function Wu(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === Hu || e === Uu ? e : Gu), (n = e), (r = e))
    : ((t = Hu), (n = (t, n) => Hu(e(t), n)), (r = (t, n) => e(t) - n));
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
function Gu() {
  return 0;
}
function Ku(e) {
  return e === null ? NaN : +e;
}
function* qu(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Ju = Wu(Hu),
  Yu = Ju.right;
(Ju.left, Wu(Ku).center);
var Xu = class extends Map {
  constructor(e, t = ed) {
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
    return super.get(Zu(this, e));
  }
  has(e) {
    return super.has(Zu(this, e));
  }
  set(e, t) {
    return super.set(Qu(this, e), t);
  }
  delete(e) {
    return super.delete($u(this, e));
  }
};
function Zu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Qu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function $u({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function ed(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function td(e = Hu) {
  if (e === Hu) return nd;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function nd(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var rd = Math.sqrt(50),
  id = Math.sqrt(10),
  ad = Math.sqrt(2);
function od(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= rd ? 10 : a >= id ? 5 : a >= ad ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? od(e, t, n * 2) : [s, c, l]
  );
}
function sd(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? od(t, e, n) : od(e, t, n);
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
function cd(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), od(e, t, n)[2]);
}
function ld(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? cd(t, e, n) : cd(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ud(e, t) {
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
function dd(e, t) {
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
function fd(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? nd : td(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      fd(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (pd(e, n, t), i(e[r], a) > 0 && pd(e, n, r); o < s;) {
      for (pd(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? pd(e, n, s) : (++s, pd(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function pd(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function md(e, t, n) {
  if (((e = Float64Array.from(qu(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return dd(e);
    if (t >= 1) return ud(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = ud(fd(e, a).subarray(0, a + 1));
    return o + (dd(e.subarray(a + 1)) - o) * (i - a);
  }
}
function hd(e, t, n = Ku) {
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
function gd(e, t, n) {
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
function _d(e, t) {
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
function vd(e, t) {
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
var yd = Symbol(`implicit`);
function bd() {
  var e = new Xu(),
    t = [],
    n = [],
    r = yd;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== yd) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Xu()));
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
      return bd(t, n).unknown(r);
    }),
    _d.apply(i, arguments),
    i
  );
}
function xd() {
  var e = bd().unknown(void 0),
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
    var m = gd(e).map(function (e) {
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
      return xd(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    _d.apply(d(), arguments)
  );
}
function Sd(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Sd(t());
    }),
    e
  );
}
function Cd() {
  return Sd(xd.apply(null, arguments).paddingInner(1));
}
function wd(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Td(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ed() {}
var Dd = 0.7,
  Od = 1 / Dd,
  kd = `\\s*([+-]?\\d+)\\s*`,
  Ad = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  jd = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Md = /^#([0-9a-f]{3,8})$/,
  Nd = RegExp(`^rgb\\(${kd},${kd},${kd}\\)$`),
  Pd = RegExp(`^rgb\\(${jd},${jd},${jd}\\)$`),
  Fd = RegExp(`^rgba\\(${kd},${kd},${kd},${Ad}\\)$`),
  Id = RegExp(`^rgba\\(${jd},${jd},${jd},${Ad}\\)$`),
  Ld = RegExp(`^hsl\\(${Ad},${jd},${jd}\\)$`),
  Rd = RegExp(`^hsla\\(${Ad},${jd},${jd},${Ad}\\)$`),
  zd = {
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
wd(Ed, Wd, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bd,
  formatHex: Bd,
  formatHex8: Vd,
  formatHsl: Hd,
  formatRgb: Ud,
  toString: Ud,
});
function Bd() {
  return this.rgb().formatHex();
}
function Vd() {
  return this.rgb().formatHex8();
}
function Hd() {
  return rf(this).formatHsl();
}
function Ud() {
  return this.rgb().formatRgb();
}
function Wd(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Md.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? Gd(t)
          : n === 3
            ? new Yd(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Kd(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? Kd(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Nd.exec(e))
        ? new Yd(t[1], t[2], t[3], 1)
        : (t = Pd.exec(e))
          ? new Yd(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Fd.exec(e))
            ? Kd(t[1], t[2], t[3], t[4])
            : (t = Id.exec(e))
              ? Kd(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = Ld.exec(e))
                ? nf(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Rd.exec(e))
                  ? nf(t[1], t[2] / 100, t[3] / 100, t[4])
                  : zd.hasOwnProperty(e)
                    ? Gd(zd[e])
                    : e === `transparent`
                      ? new Yd(NaN, NaN, NaN, 0)
                      : null
  );
}
function Gd(e) {
  return new Yd((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Kd(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new Yd(e, t, n, r));
}
function qd(e) {
  return (
    e instanceof Ed || (e = Wd(e)),
    e ? ((e = e.rgb()), new Yd(e.r, e.g, e.b, e.opacity)) : new Yd()
  );
}
function Jd(e, t, n, r) {
  return arguments.length === 1 ? qd(e) : new Yd(e, t, n, r ?? 1);
}
function Yd(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
wd(
  Yd,
  Jd,
  Td(Ed, {
    brighter(e) {
      return (
        (e = e == null ? Od : Od ** +e),
        new Yd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Dd : Dd ** +e),
        new Yd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Yd(ef(this.r), ef(this.g), ef(this.b), $d(this.opacity));
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
    hex: Xd,
    formatHex: Xd,
    formatHex8: Zd,
    formatRgb: Qd,
    toString: Qd,
  }),
);
function Xd() {
  return `#${tf(this.r)}${tf(this.g)}${tf(this.b)}`;
}
function Zd() {
  return `#${tf(this.r)}${tf(this.g)}${tf(this.b)}${tf((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qd() {
  let e = $d(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${ef(this.r)}, ${ef(this.g)}, ${ef(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function $d(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ef(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tf(e) {
  return ((e = ef(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function nf(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new of(e, t, n, r)
  );
}
function rf(e) {
  if (e instanceof of) return new of(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Ed || (e = Wd(e)), !e)) return new of();
  if (e instanceof of) return e;
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
    new of(o, s, c, e.opacity)
  );
}
function af(e, t, n, r) {
  return arguments.length === 1 ? rf(e) : new of(e, t, n, r ?? 1);
}
function of(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
wd(
  of,
  af,
  Td(Ed, {
    brighter(e) {
      return (
        (e = e == null ? Od : Od ** +e),
        new of(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Dd : Dd ** +e),
        new of(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new Yd(
        lf(e >= 240 ? e - 240 : e + 120, i, r),
        lf(e, i, r),
        lf(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new of(sf(this.h), cf(this.s), cf(this.l), $d(this.opacity));
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
      let e = $d(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${sf(this.h)}, ${cf(this.s) * 100}%, ${cf(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function sf(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function cf(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function lf(e, t, n) {
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
var uf = (e) => () => e;
function df(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function ff(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function pf(e) {
  return (e = +e) == 1
    ? mf
    : function (t, n) {
        return n - t ? ff(t, n, e) : uf(isNaN(t) ? n : t);
      };
}
function mf(e, t) {
  var n = t - e;
  return n ? df(e, n) : uf(isNaN(e) ? t : e);
}
var hf = (function e(t) {
  var n = pf(t);
  function r(e, t) {
    var r = n((e = Jd(e)).r, (t = Jd(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = mf(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function gf(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function _f(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function vf(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = Df(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function yf(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function bf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function xf(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = Df(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var Sf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Cf = new RegExp(Sf.source, `g`);
function wf(e) {
  return function () {
    return e;
  };
}
function Tf(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function Ef(e, t) {
  var n = (Sf.lastIndex = Cf.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = Sf.exec(e)) && (i = Cf.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: bf(r, i) })),
      (n = Cf.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? Tf(c[0].x)
        : wf(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function Df(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? uf(t)
    : (n === `number`
        ? bf
        : n === `string`
          ? (r = Wd(t))
            ? ((t = r), hf)
            : Ef
          : t instanceof Wd
            ? hf
            : t instanceof Date
              ? yf
              : _f(t)
                ? gf
                : Array.isArray(t)
                  ? vf
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? xf
                    : bf)(e, t);
}
function Of(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function kf(e, t) {
  t === void 0 && ((t = e), (e = Df));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function Af(e) {
  return function () {
    return e;
  };
}
function jf(e) {
  return +e;
}
var Mf = [0, 1];
function Nf(e) {
  return e;
}
function Pf(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Af(isNaN(t) ? NaN : 0.5);
}
function Ff(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function If(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = Pf(i, r)), (a = n(o, a))) : ((r = Pf(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Lf(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = Pf(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = Yu(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Rf(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function zf() {
  var e = Mf,
    t = Mf,
    n = Df,
    r,
    i,
    a,
    o = Nf,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== Nf && (o = Ff(e[0], e[n - 1])),
      (s = n > 2 ? Lf : If),
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
      return o(i((l ||= s(t, e.map(r), bf))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, jf)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = Of), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : Nf), u()) : o !== Nf;
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
function Bf() {
  return zf()(Nf, Nf);
}
function Vf(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function Hf(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Uf(e) {
  return ((e = Hf(Math.abs(e))), e ? e[1] : NaN);
}
function Wf(e, t) {
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
function Gf(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Kf =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qf(e) {
  if (!(t = Kf.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Jf({
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
qf.prototype = Jf.prototype;
function Jf(e) {
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
Jf.prototype.toString = function () {
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
function Yf(e) {
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
var Xf;
function Zf(e, t) {
  var n = Hf(e, t);
  if (!n) return ((Xf = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (Xf = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + Hf(e, Math.max(0, t + a - 1))[0];
}
function Qf(e, t) {
  var n = Hf(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var $f = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: Vf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Qf(e * 100, t),
  r: Qf,
  s: Zf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function ep(e) {
  return e;
}
var tp = Array.prototype.map,
  np = [
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
function rp(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? ep
        : Wf(tp.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? ep : Gf(tp.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = qf(e);
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
      : $f[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = $f[y],
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
          v && (e = Yf(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && Xf !== void 0 ? np[8 + Xf / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(Uf(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = qf(e)), (e.type = `f`), e), { suffix: np[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var ip, ap, op;
sp({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function sp(e) {
  return ((ip = rp(e)), (ap = ip.format), (op = ip.formatPrefix), ip);
}
function cp(e) {
  return Math.max(0, -Uf(Math.abs(e)));
}
function lp(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Uf(t) / 3))) * 3 - Uf(Math.abs(e)),
  );
}
function up(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Uf(t) - Uf(e)) + 1
  );
}
function dp(e, t, n, r) {
  var i = ld(e, t, n),
    a;
  switch (((r = qf(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = lp(i, o))) && (r.precision = a),
        op(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = up(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = cp(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return ap(r);
}
function fp(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return sd(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return dp(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = cd(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function pp() {
  var e = Bf();
  return (
    (e.copy = function () {
      return Rf(e, pp());
    }),
    _d.apply(e, arguments),
    fp(e)
  );
}
function mp(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, jf)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return mp(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, jf) : [0, 1]),
    fp(n)
  );
}
function hp(e, t) {
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
function gp(e) {
  return Math.log(e);
}
function _p(e) {
  return Math.exp(e);
}
function vp(e) {
  return -Math.log(-e);
}
function yp(e) {
  return -Math.exp(-e);
}
function bp(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function xp(e) {
  return e === 10 ? bp : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Sp(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Cp(e) {
  return (t, n) => -e(-t, n);
}
function wp(e) {
  let t = e(gp, _p),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Sp(r)),
      (a = xp(r)),
      n()[0] < 0 ? ((i = Cp(i)), (a = Cp(a)), e(vp, yp)) : e(gp, _p),
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
        m.length * 2 < p && (m = sd(o, s, p));
      } else m = sd(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = qf(n)).precision == null && (n.trim = !0),
          (n = ap(n))),
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
        hp(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function Tp() {
  let e = wp(zf()).domain([1, 10]);
  return (
    (e.copy = () => Rf(e, Tp()).base(e.base())), _d.apply(e, arguments), e
  );
}
function Ep(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Dp(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Op(e) {
  var t = 1,
    n = e(Ep(t), Dp(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Ep((t = +n)), Dp(t)) : t;
    }),
    fp(n)
  );
}
function kp() {
  var e = Op(zf());
  return (
    (e.copy = function () {
      return Rf(e, kp()).constant(e.constant());
    }),
    _d.apply(e, arguments)
  );
}
function Ap(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function jp(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Mp(e) {
  return e < 0 ? -e * e : e * e;
}
function Np(e) {
  var t = e(Nf, Nf),
    n = 1;
  function r() {
    return n === 1 ? e(Nf, Nf) : n === 0.5 ? e(jp, Mp) : e(Ap(n), Ap(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    fp(t)
  );
}
function Pp() {
  var e = Np(zf());
  return (
    (e.copy = function () {
      return Rf(e, Pp()).exponent(e.exponent());
    }),
    _d.apply(e, arguments),
    e
  );
}
function Fp() {
  return Pp.apply(null, arguments).exponent(0.5);
}
function Ip(e) {
  return Math.sign(e) * e * e;
}
function Lp(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Rp() {
  var e = Bf(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Lp(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Ip(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, jf)).map(Ip)), i)
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
      return Rp(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    _d.apply(i, arguments),
    fp(i)
  );
}
function zp() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = hd(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[Yu(n, e)];
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
      return (e.sort(Hu), i());
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
      return zp().domain(e).range(t).unknown(r);
    }),
    _d.apply(a, arguments)
  );
}
function Bp() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[Yu(r, e, 0, n)] : a;
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
      return Bp().domain([e, t]).range(i).unknown(a);
    }),
    _d.apply(fp(o), arguments)
  );
}
function Vp() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[Yu(e, i, 0, r)] : n;
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
      return Vp().domain(e).range(t).unknown(n);
    }),
    _d.apply(i, arguments)
  );
}
var Hp = new Date(),
  Up = new Date();
function Wp(e, t, n, r) {
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
      Wp(
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
        Hp.setTime(+t),
        Up.setTime(+r),
        e(Hp),
        e(Up),
        Math.floor(n(Hp, Up))
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
var Gp = Wp(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((Gp.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Wp(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : Gp
)),
  Gp.range);
var Kp = 1e3,
  qp = Kp * 60,
  Jp = qp * 60,
  Yp = Jp * 24,
  Xp = Yp * 7,
  Zp = Yp * 30,
  Qp = Yp * 365,
  $p = Wp(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Kp);
    },
    (e, t) => (t - e) / Kp,
    (e) => e.getUTCSeconds(),
  );
$p.range;
var em = Wp(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kp);
  },
  (e, t) => {
    e.setTime(+e + t * qp);
  },
  (e, t) => (t - e) / qp,
  (e) => e.getMinutes(),
);
em.range;
var tm = Wp(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * qp);
  },
  (e, t) => (t - e) / qp,
  (e) => e.getUTCMinutes(),
);
tm.range;
var nm = Wp(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Kp - e.getMinutes() * qp,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Jp);
  },
  (e, t) => (t - e) / Jp,
  (e) => e.getHours(),
);
nm.range;
var rm = Wp(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Jp);
  },
  (e, t) => (t - e) / Jp,
  (e) => e.getUTCHours(),
);
rm.range;
var im = Wp(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * qp) / Yp,
  (e) => e.getDate() - 1,
);
im.range;
var am = Wp(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Yp,
  (e) => e.getUTCDate() - 1,
);
am.range;
var om = Wp(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Yp,
  (e) => Math.floor(e / Yp),
);
om.range;
function sm(e) {
  return Wp(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * qp) / Xp,
  );
}
var cm = sm(0),
  lm = sm(1),
  um = sm(2),
  dm = sm(3),
  fm = sm(4),
  pm = sm(5),
  mm = sm(6);
(cm.range, lm.range, um.range, dm.range, fm.range, pm.range, mm.range);
function hm(e) {
  return Wp(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / Xp,
  );
}
var gm = hm(0),
  _m = hm(1),
  vm = hm(2),
  ym = hm(3),
  bm = hm(4),
  xm = hm(5),
  Sm = hm(6);
(gm.range, _m.range, vm.range, ym.range, bm.range, xm.range, Sm.range);
var Cm = Wp(
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
Cm.range;
var wm = Wp(
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
wm.range;
var Tm = Wp(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((Tm.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Wp(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  Tm.range);
var Em = Wp(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((Em.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Wp(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  Em.range);
function Dm(e, t, n, r, i, a) {
  let o = [
    [$p, 1, Kp],
    [$p, 5, 5 * Kp],
    [$p, 15, 15 * Kp],
    [$p, 30, 30 * Kp],
    [a, 1, qp],
    [a, 5, 5 * qp],
    [a, 15, 15 * qp],
    [a, 30, 30 * qp],
    [i, 1, Jp],
    [i, 3, 3 * Jp],
    [i, 6, 6 * Jp],
    [i, 12, 12 * Jp],
    [r, 1, Yp],
    [r, 2, 2 * Yp],
    [n, 1, Xp],
    [t, 1, Zp],
    [t, 3, 3 * Zp],
    [e, 1, Qp],
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
      a = Wu(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(ld(t / Qp, n / Qp, r));
    if (a === 0) return Gp.every(Math.max(ld(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [Om, km] = Dm(Em, wm, gm, om, rm, tm),
  [Am, jm] = Dm(Tm, Cm, cm, im, nm, em);
function Mm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Pm(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Fm(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = Vm(i),
    u = Hm(i),
    d = Vm(a),
    f = Hm(a),
    p = Vm(o),
    m = Hm(o),
    h = Vm(s),
    g = Hm(s),
    _ = Vm(c),
    v = Hm(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: N,
      c: null,
      d: lh,
      e: lh,
      f: mh,
      g: Th,
      G: Dh,
      H: uh,
      I: dh,
      j: fh,
      L: ph,
      m: hh,
      M: gh,
      p: P,
      q: F,
      Q: Xh,
      s: Zh,
      S: _h,
      u: vh,
      U: yh,
      V: xh,
      w: Sh,
      W: Ch,
      x: null,
      X: null,
      y: wh,
      Y: Eh,
      Z: Oh,
      "%": Yh,
    },
    b = {
      a: re,
      A: ie,
      b: I,
      B: ae,
      c: null,
      d: kh,
      e: kh,
      f: Ph,
      g: Gh,
      G: qh,
      H: Ah,
      I: jh,
      j: Mh,
      L: Nh,
      m: Fh,
      M: Ih,
      p: oe,
      q: se,
      Q: Xh,
      s: Zh,
      S: Lh,
      u: Rh,
      U: zh,
      V: Vh,
      w: Hh,
      W: Uh,
      x: null,
      X: null,
      y: Wh,
      Y: Kh,
      Z: Jh,
      "%": Yh,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: $m,
      e: $m,
      f: ah,
      g: Ym,
      G: Jm,
      H: th,
      I: th,
      j: eh,
      L: ih,
      m: Qm,
      M: nh,
      p: T,
      q: Zm,
      Q: sh,
      s: ch,
      S: rh,
      u: Wm,
      U: Gm,
      V: Km,
      w: Um,
      W: qm,
      x: j,
      X: ee,
      y: Ym,
      Y: Jm,
      Z: Xm,
      "%": oh,
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
          (c = Im[(s = e.charAt(++i))]) == null
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
      var r = Pm(1900, void 0, 1),
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
            ? ((a = Nm(Pm(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? _m.ceil(a) : _m(a)),
              (a = am.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = Mm(Pm(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? lm.ceil(a) : lm(a)),
              (a = im.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? Nm(Pm(r.y, 0, 1)).getUTCDay()
              : Mm(Pm(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), Nm(r))
        : Mm(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in Im ? t.charAt(i++) : s]),
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
  function O(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function k(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function A(e, n, r) {
    return w(e, t, n, r);
  }
  function j(e, t, r) {
    return w(e, n, t, r);
  }
  function ee(e, t, n) {
    return w(e, r, t, n);
  }
  function M(e) {
    return o[e.getDay()];
  }
  function te(e) {
    return a[e.getDay()];
  }
  function ne(e) {
    return c[e.getMonth()];
  }
  function N(e) {
    return s[e.getMonth()];
  }
  function P(e) {
    return i[+(e.getHours() >= 12)];
  }
  function F(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function re(e) {
    return o[e.getUTCDay()];
  }
  function ie(e) {
    return a[e.getUTCDay()];
  }
  function I(e) {
    return c[e.getUTCMonth()];
  }
  function ae(e) {
    return s[e.getUTCMonth()];
  }
  function oe(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function se(e) {
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
var Im = { "-": ``, _: ` `, 0: `0` },
  Lm = /^\s*\d+/,
  Rm = /^%/,
  zm = /[\\^$*+?|[\]().{}]/g;
function Y(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Bm(e) {
  return e.replace(zm, `\\$&`);
}
function Vm(e) {
  return RegExp(`^(?:` + e.map(Bm).join(`|`) + `)`, `i`);
}
function Hm(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Um(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function Wm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Gm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Km(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function qm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Jm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Ym(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Xm(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function Zm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function Qm(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function $m(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function eh(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function th(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function nh(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function rh(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function ih(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function ah(e, t, n) {
  var r = Lm.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function oh(e, t, n) {
  var r = Rm.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function sh(e, t, n) {
  var r = Lm.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function ch(e, t, n) {
  var r = Lm.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function lh(e, t) {
  return Y(e.getDate(), t, 2);
}
function uh(e, t) {
  return Y(e.getHours(), t, 2);
}
function dh(e, t) {
  return Y(e.getHours() % 12 || 12, t, 2);
}
function fh(e, t) {
  return Y(1 + im.count(Tm(e), e), t, 3);
}
function ph(e, t) {
  return Y(e.getMilliseconds(), t, 3);
}
function mh(e, t) {
  return ph(e, t) + `000`;
}
function hh(e, t) {
  return Y(e.getMonth() + 1, t, 2);
}
function gh(e, t) {
  return Y(e.getMinutes(), t, 2);
}
function _h(e, t) {
  return Y(e.getSeconds(), t, 2);
}
function vh(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function yh(e, t) {
  return Y(cm.count(Tm(e) - 1, e), t, 2);
}
function bh(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? fm(e) : fm.ceil(e);
}
function xh(e, t) {
  return ((e = bh(e)), Y(fm.count(Tm(e), e) + (Tm(e).getDay() === 4), t, 2));
}
function Sh(e) {
  return e.getDay();
}
function Ch(e, t) {
  return Y(lm.count(Tm(e) - 1, e), t, 2);
}
function wh(e, t) {
  return Y(e.getFullYear() % 100, t, 2);
}
function Th(e, t) {
  return ((e = bh(e)), Y(e.getFullYear() % 100, t, 2));
}
function Eh(e, t) {
  return Y(e.getFullYear() % 1e4, t, 4);
}
function Dh(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? fm(e) : fm.ceil(e)), Y(e.getFullYear() % 1e4, t, 4)
  );
}
function Oh(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    Y((t / 60) | 0, `0`, 2) +
    Y(t % 60, `0`, 2)
  );
}
function kh(e, t) {
  return Y(e.getUTCDate(), t, 2);
}
function Ah(e, t) {
  return Y(e.getUTCHours(), t, 2);
}
function jh(e, t) {
  return Y(e.getUTCHours() % 12 || 12, t, 2);
}
function Mh(e, t) {
  return Y(1 + am.count(Em(e), e), t, 3);
}
function Nh(e, t) {
  return Y(e.getUTCMilliseconds(), t, 3);
}
function Ph(e, t) {
  return Nh(e, t) + `000`;
}
function Fh(e, t) {
  return Y(e.getUTCMonth() + 1, t, 2);
}
function Ih(e, t) {
  return Y(e.getUTCMinutes(), t, 2);
}
function Lh(e, t) {
  return Y(e.getUTCSeconds(), t, 2);
}
function Rh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function zh(e, t) {
  return Y(gm.count(Em(e) - 1, e), t, 2);
}
function Bh(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? bm(e) : bm.ceil(e);
}
function Vh(e, t) {
  return ((e = Bh(e)), Y(bm.count(Em(e), e) + (Em(e).getUTCDay() === 4), t, 2));
}
function Hh(e) {
  return e.getUTCDay();
}
function Uh(e, t) {
  return Y(_m.count(Em(e) - 1, e), t, 2);
}
function Wh(e, t) {
  return Y(e.getUTCFullYear() % 100, t, 2);
}
function Gh(e, t) {
  return ((e = Bh(e)), Y(e.getUTCFullYear() % 100, t, 2));
}
function Kh(e, t) {
  return Y(e.getUTCFullYear() % 1e4, t, 4);
}
function qh(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? bm(e) : bm.ceil(e)),
    Y(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Jh() {
  return `+0000`;
}
function Yh() {
  return `%`;
}
function Xh(e) {
  return +e;
}
function Zh(e) {
  return Math.floor(e / 1e3);
}
var Qh, $h, eg;
tg({
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
function tg(e) {
  return (
    (Qh = Fm(e)),
    ($h = Qh.format),
    Qh.parse,
    (eg = Qh.utcFormat),
    Qh.utcParse,
    Qh
  );
}
function ng(e) {
  return new Date(e);
}
function rg(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function ig(e, t, n, r, i, a, o, s, c, l) {
  var u = Bf(),
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
      return arguments.length ? f(Array.from(e, rg)) : f().map(ng);
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
        e ? f(hp(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Rf(u, ig(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function ag() {
  return _d.apply(
    ig(Am, jm, Tm, Cm, cm, im, nm, em, $p, $h).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function og() {
  return _d.apply(
    ig(Om, km, Em, wm, gm, am, rm, tm, $p, eg).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function sg() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Nf,
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
    (l.range = u(Df)),
    (l.rangeRound = u(Of)),
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
function cg(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function lg() {
  var e = fp(sg()(Nf));
  return (
    (e.copy = function () {
      return cg(e, lg());
    }),
    vd.apply(e, arguments)
  );
}
function ug() {
  var e = wp(sg()).domain([1, 10]);
  return (
    (e.copy = function () {
      return cg(e, ug()).base(e.base());
    }),
    vd.apply(e, arguments)
  );
}
function dg() {
  var e = Op(sg());
  return (
    (e.copy = function () {
      return cg(e, dg()).constant(e.constant());
    }),
    vd.apply(e, arguments)
  );
}
function fg() {
  var e = Np(sg());
  return (
    (e.copy = function () {
      return cg(e, fg()).exponent(e.exponent());
    }),
    vd.apply(e, arguments)
  );
}
function pg() {
  return fg.apply(null, arguments).exponent(0.5);
}
function mg() {
  var e = [],
    t = Nf;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Yu(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(Hu), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => md(e, r / t));
    }),
    (n.copy = function () {
      return mg(t).domain(e);
    }),
    vd.apply(n, arguments)
  );
}
function hg() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = Nf,
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
        ? (([n, r, i] = t), (l = kf(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(Df)),
    (p.rangeRound = m(Of)),
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
function gg() {
  var e = fp(hg()(Nf));
  return (
    (e.copy = function () {
      return cg(e, gg());
    }),
    vd.apply(e, arguments)
  );
}
function _g() {
  var e = wp(hg()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return cg(e, _g()).base(e.base());
    }),
    vd.apply(e, arguments)
  );
}
function vg() {
  var e = Op(hg());
  return (
    (e.copy = function () {
      return cg(e, vg()).constant(e.constant());
    }),
    vd.apply(e, arguments)
  );
}
function yg() {
  var e = Np(hg());
  return (
    (e.copy = function () {
      return cg(e, yg()).exponent(e.exponent());
    }),
    vd.apply(e, arguments)
  );
}
function bg() {
  return yg.apply(null, arguments).exponent(0.5);
}
var xg = t({
    scaleBand: () => xd,
    scaleDiverging: () => gg,
    scaleDivergingLog: () => _g,
    scaleDivergingPow: () => yg,
    scaleDivergingSqrt: () => bg,
    scaleDivergingSymlog: () => vg,
    scaleIdentity: () => mp,
    scaleImplicit: () => yd,
    scaleLinear: () => pp,
    scaleLog: () => Tp,
    scaleOrdinal: () => bd,
    scalePoint: () => Cd,
    scalePow: () => Pp,
    scaleQuantile: () => zp,
    scaleQuantize: () => Bp,
    scaleRadial: () => Rp,
    scaleSequential: () => lg,
    scaleSequentialLog: () => ug,
    scaleSequentialPow: () => fg,
    scaleSequentialQuantile: () => mg,
    scaleSequentialSqrt: () => pg,
    scaleSequentialSymlog: () => dg,
    scaleSqrt: () => Fp,
    scaleSymlog: () => kp,
    scaleThreshold: () => Vp,
    scaleTime: () => ag,
    scaleUtc: () => og,
    tickFormat: () => dp,
  }),
  Sg = (e) => e.chartData,
  Cg = G([Sg], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  wg = (e, t, n, r) => (r ? Cg(e) : Sg(e));
function Tg(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (q(t) && q(n)) return !0;
  }
  return !1;
}
function Eg(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Dg(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (q(n)) i = n;
    else if (typeof n == `function`) return;
    if (q(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (Tg(o)) return o;
  }
}
function Og(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (Tg(r)) return Eg(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (B(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && Rs.test(i)) {
        var c = Rs.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (B(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && zs.test(a)) {
        var u = zs.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (Tg(f)) return t == null ? f : Eg(f, t, n);
    }
  }
}
var kg = n((e, t, n) => {
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
              t.s == e.s ? O(t, e) : _(t, ((e.s = -e.s), e))
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
              t.s == e.s ? _(t, e) : O(t, ((e.s = -e.s), e))
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
              ? (r = k(i, !0))
              : (v(e, 0, n),
                t === void 0 ? (t = a.rounding) : v(t, 0, 8),
                (i = D(new a(i), e + 1, t)),
                (r = k(i, !0, e + 1))),
            r
          );
        }),
        (g.toFixed = function (e, t) {
          var r,
            i,
            a = this,
            o = a.constructor;
          return e === void 0
            ? k(a)
            : (v(e, 0, n),
              t === void 0 ? (t = o.rounding) : v(t, 0, 8),
              (i = D(new o(a), e + S(a) + 1, t)),
              (r = k(i.abs(), !1, e + S(i) + 1)),
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
                n % 2 && ((o = o.times(u)), A(o.d, t)), (n = c(n / 2)), n !== 0;
              )
                ((u = u.times(u)), A(u.d, t));
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
              ? ((r = S(a)), (i = k(a, r <= o.toExpNeg || r >= o.toExpPos)))
              : (v(e, 1, n),
                t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                (a = D(new o(a), e, t)),
                (r = S(a)),
                (i = k(a, e <= r || r <= o.toExpNeg, e))),
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
              return k(e, t <= n.toExpNeg || t >= n.toExpPos);
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
            O,
            k,
            A = r.constructor,
            j = r.s == i.s ? 1 : -1,
            ee = r.d,
            M = i.d;
          if (!r.s) return new A(r);
          if (!i.s) throw Error(a + `Division by zero`);
          for (
            l = r.e - i.e,
              O = M.length,
              T = ee.length,
              g = new A(j),
              _ = g.d = [],
              u = 0;
            M[u] == (ee[u] || 0);
          )
            ++u;
          if (
            (M[u] > (ee[u] || 0) && --l,
            (x = o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
            x < 0)
          )
            return new A(0);
          if (((x = (x / p + 2) | 0), (u = 0), O == 1))
            for (d = 0, M = M[0], x++; (u < T || d) && x--; u++)
              ((C = d * f + (ee[u] || 0)),
                (_[u] = (C / M) | 0),
                (d = (C % M) | 0));
          else {
            for (
              d = (f / (M[0] + 1)) | 0,
                d > 1 &&
                  ((M = e(M, d)),
                  (ee = e(ee, d)),
                  (O = M.length),
                  (T = ee.length)),
                w = O,
                v = ee.slice(0, O),
                y = v.length;
              y < O;
            )
              v[y++] = 0;
            ((k = M.slice()), k.unshift(0), (E = M[0]), M[1] >= f / 2 && ++E);
            do
              ((d = 0),
                (c = t(M, v, O, y)),
                c < 0
                  ? ((b = v[0]),
                    O != y && (b = b * f + (v[1] || 0)),
                    (d = (b / E) | 0),
                    d > 1
                      ? (d >= f && (d = f - 1),
                        (m = e(M, d)),
                        (h = m.length),
                        (y = v.length),
                        (c = t(m, v, h, y)),
                        c == 1 && (d--, n(m, O < h ? k : M, h)))
                      : (d == 0 && (c = d = 1), (m = M.slice())),
                    (h = m.length),
                    h < y && m.unshift(0),
                    n(v, m, y),
                    c == -1 &&
                      ((y = v.length),
                      (c = t(M, v, O, y)),
                      c < 1 && (d++, n(v, O < y ? k : M, y))),
                    (y = v.length))
                  : c === 0 && (d++, (v = [0])),
                (_[u++] = d),
                c && v[0] ? (v[y++] = ee[w] || 0) : ((v = [ee[w]]), (y = 1)));
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
      function O(e, t) {
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
      function k(e, t, n) {
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
      function A(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function j(e) {
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
          (i.clone = j),
          (i.config = i.set = ee),
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
      function ee(e) {
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
      ((r = j(r)),
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
  Ag = (e) => e,
  jg = { "@@functional/placeholder": !0 },
  Mg = (e) => e === jg,
  Ng = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Mg(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  Pg = (e, t) =>
    e === 1
      ? t
      : Ng(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== jg).length;
          return r >= e
            ? t(...n)
            : Pg(
                e - r,
                Ng(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (Mg(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  Fg = (e) => Pg(e.length, e),
  Ig = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  Lg = Fg((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  Rg = function () {
    var e = [...arguments];
    if (!e.length) return Ag;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  zg = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  Bg = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  },
  X = e(kg());
function Vg(e) {
  return e === 0
    ? 1
    : Math.floor(new X.default(e).abs().log(10).toNumber()) + 1;
}
function Hg(e, t, n) {
  for (var r = new X.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(Fg((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  Fg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  Fg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var Ug = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  Wg = (e, t, n) => {
    if (e.lte(0)) return new X.default(0);
    var r = Vg(e.toNumber()),
      i = new X.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new X.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new X.default(s.toNumber())
      : new X.default(Math.ceil(s.toNumber()));
  },
  Gg = (e, t, n) => {
    var r = new X.default(1),
      i = new X.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new X.default(10).pow(Vg(e) - 1)),
          (i = new X.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new X.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new X.default(Math.floor((t - 1) / 2)))
        : n || (i = new X.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return Rg(
      Lg((e) => i.add(new X.default(e - o).mul(r)).toNumber()),
      Ig,
    )(0, t);
  },
  Kg = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new X.default(0),
        tickMin: new X.default(0),
        tickMax: new X.default(0),
      };
    var a = Wg(new X.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new X.default(0))
      : ((o = new X.default(e).add(t).div(2)),
        (o = o.sub(new X.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new X.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? Kg(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new X.default(s).mul(a)),
          tickMax: o.add(new X.default(c).mul(a)),
        });
  };
function qg(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = Ug([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...Ig(0, r - 1).map(() => 1 / 0)]
        : [...Ig(0, r - 1).map(() => -1 / 0), s];
    return t > n ? zg(c) : c;
  }
  if (o === s) return Gg(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = Kg(o, s, a, i, 0),
    f = Hg(u, d.add(new X.default(0.1).mul(l)), l);
  return t > n ? zg(f) : f;
}
function Jg(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = Ug([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = Wg(new X.default(o).sub(a).div(s - 1), i, 0),
    l = [...Hg(new X.default(a), new X.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? zg(l) : l);
}
var Yg = Bg(qg),
  Xg = Bg(Jg),
  Zg = (e) => e.rootProps.maxBarSize,
  Qg = (e) => e.rootProps.barGap,
  $g = (e) => e.rootProps.barCategoryGap,
  e_ = (e) => e.rootProps.barSize,
  t_ = (e) => e.rootProps.stackOffset,
  n_ = (e) => e.options.chartName,
  r_ = (e) => e.rootProps.syncId,
  i_ = (e) => e.rootProps.syncMethod,
  a_ = (e) => e.options.eventEmitter,
  o_ = {
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
  s_ = {
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
  c_ = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  l_ = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: o_.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: o_.reversed,
    scale: o_.scale,
    tick: o_.tick,
    tickCount: void 0,
    ticks: void 0,
    type: o_.type,
    unit: void 0,
  },
  u_ = {
    allowDataOverflow: s_.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: s_.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: s_.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: s_.scale,
    tick: s_.tick,
    tickCount: s_.tickCount,
    ticks: void 0,
    type: s_.type,
    unit: void 0,
  },
  d_ = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: o_.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: o_.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: o_.scale,
    tick: o_.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  f_ = {
    allowDataOverflow: s_.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: s_.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: s_.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: s_.scale,
    tick: s_.tick,
    tickCount: s_.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  p_ = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? d_
        : l_
      : e.polarAxis.angleAxis[t],
  m_ = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? f_
        : u_
      : e.polarAxis.radiusAxis[t],
  h_ = (e) => e.polarOptions,
  g_ = G([Ks, qs, lc], ls),
  __ = G([h_, g_], (e, t) => {
    if (e != null) return xn(e.innerRadius, t, 0);
  }),
  v_ = G([h_, g_], (e, t) => {
    if (e != null) return xn(e.outerRadius, t, t * 0.8);
  }),
  y_ = G([h_], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  });
G([p_, y_], c_);
var b_ = G([g_, __, v_], (e, t, n) => {
  if (e != null && t != null && n != null) return [t, n];
});
G([m_, b_], c_);
var x_ = G([J, h_, __, v_, Ks, qs], (e, t, n, r, i, a) => {
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
        cx: xn(o, i, i / 2),
        cy: xn(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  S_ = (e, t) => t,
  C_ = (e, t, n) => n;
function w_(e) {
  return e?.id;
}
var T_ = (e) => {
    var t = J(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  E_ = (e) => e.tooltip.settings.axisId,
  D_ = (e) => X_(e, T_(e), E_(e)),
  O_ = G([D_], (e) => e?.dataKey);
function k_(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = w_(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(K(t, a, null)),
            c = K(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function A_(e) {
  return e.stackId != null && e.dataKey != null;
}
var j_ = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function M_(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
var N_ = e(Vu());
function P_(e, t) {
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
function F_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? P_(Object(n), !0).forEach(function (t) {
          I_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : P_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function I_(e, t, n) {
  return (
    (t = L_(t)) in e
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
function L_(e) {
  var t = R_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function R_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var z_ = [0, `auto`],
  B_ = {
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
  V_ = (e, t) => e.cartesianAxis.xAxis[t],
  H_ = (e, t) => V_(e, t) ?? B_,
  U_ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: z_,
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
  W_ = (e, t) => e.cartesianAxis.yAxis[t],
  G_ = (e, t) => W_(e, t) ?? U_,
  K_ = {
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
  q_ = (e, t) => e.cartesianAxis.zAxis[t] ?? K_,
  J_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return H_(e, n);
      case `yAxis`:
        return G_(e, n);
      case `zAxis`:
        return q_(e, n);
      case `angleAxis`:
        return p_(e, n);
      case `radiusAxis`:
        return m_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Y_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return H_(e, n);
      case `yAxis`:
        return G_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  X_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return H_(e, n);
      case `yAxis`:
        return G_(e, n);
      case `angleAxis`:
        return p_(e, n);
      case `radiusAxis`:
        return m_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Z_ = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function Q_(e, t) {
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
var $_ = (e) => e.graphicalItems.cartesianItems,
  ev = G([S_, C_], Q_),
  tv = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  nv = G([$_, J_, ev], tv, { memoizeOptions: { resultEqualityCheck: M_ } }),
  rv = G([nv], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(A_),
  ),
  iv = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  av = G([nv], iv),
  ov = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  sv = G([nv], ov, { memoizeOptions: { resultEqualityCheck: M_ } }),
  cv = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  lv = G([sv, wg], cv),
  uv = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: K(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: K(e, t.dataKey) })),
  dv = G([lv, J_, nv], uv);
function fv(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function pv(e) {
  if (vn(e) || e instanceof Date) {
    var t = Number(e);
    if (q(t)) return t;
  }
}
function mv(e) {
  if (Array.isArray(e)) {
    var t = [pv(e[0]), pv(e[1])];
    return Tg(t) ? t : void 0;
  }
  var n = pv(e);
  if (n != null) return [n, n];
}
function hv(e) {
  return e.map(pv).filter(Ml);
}
function gv(e, t, n) {
  return !n || typeof t != `number` || gn(t) || !n.length
    ? []
    : hv(
        n.flatMap((n) => {
          var r = K(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), q(i) && q(a)))
            return [t - i, t + a];
        }),
      );
}
var _v = G([rv, wg, D_], k_),
  vv = (e, t, n) => {
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
        return [r, { stackedData: As(e, i.map(w_), n), graphicalItems: i }];
      }),
    );
  },
  yv = G([_v, rv, t_], vv),
  bv = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Ls(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  xv = G([J_], (e) => e.allowDataOverflow),
  Sv = (e) => {
    if (e == null || !(`domain` in e)) return z_;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = hv(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? z_;
  },
  Cv = G([J_], Sv),
  wv = G([Cv, xv], Dg),
  Tv = G([yv, Sg, S_, wv], bv, { memoizeOptions: { resultEqualityCheck: j_ } }),
  Ev = (e) => e.errorBars,
  Dv = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => fv(n, e)),
  Ov = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  kv = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => fv(i, e)),
              c = K(e, t.dataKey ?? n.dataKey),
              l = gv(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = mv(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = mv(K(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      q(a) && q(o))
    )
      return [a, o];
  },
  Av = G([lv, J_, av, Ev, S_], kv, {
    memoizeOptions: { resultEqualityCheck: j_ },
  });
function jv(e) {
  var { value: t } = e;
  if (vn(t) || t instanceof Date) return t;
}
var Mv = (e, t, n) => {
    var r = e.map(jv).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && Sn(r)))
      ? (0, N_.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  Nv = (e) => e.referenceElements.dots,
  Pv = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  Fv = G([Nv, S_, C_], Pv),
  Iv = (e) => e.referenceElements.areas,
  Lv = G([Iv, S_, C_], Pv),
  Rv = (e) => e.referenceElements.lines,
  zv = G([Rv, S_, C_], Pv),
  Bv = (e, t) => {
    var n = hv(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Vv = G(Fv, S_, Bv),
  Hv = (e, t) => {
    var n = hv(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Uv = G([Lv, S_], Hv),
  Wv = (e, t) => {
    var n = hv(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Gv = G(Vv, G(zv, S_, Wv), Uv, (e, t, n) => Ov(e, n, t)),
  Kv = (e, t, n, r, i, a, o, s) =>
    n ??
    Og(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? Ov(r, a, i)
        : Ov(a, i),
      e.allowDataOverflow,
    ),
  qv = G([J_, Cv, wv, Tv, Av, Gv, J, S_], Kv, {
    memoizeOptions: { resultEqualityCheck: j_ },
  }),
  Jv = [0, 1],
  Yv = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = Cs(t, a);
      return l && s == null
        ? (0, N_.default)(0, n.length)
        : c === `category`
          ? Mv(r, e, l)
          : i === `expand`
            ? Jv
            : o;
    }
  },
  Xv = G([J_, J, lv, dv, t_, S_, qv], Yv),
  Zv = (e, t, n, r, i) => {
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
        var s = `scale${wn(a)}`;
        return s in xg ? s : `point`;
      }
    }
  },
  Qv = G([J_, J, Z_, n_, S_], Zv);
function $v(e) {
  if (e != null) {
    if (e in xg) return xg[e]();
    var t = `scale${wn(e)}`;
    if (t in xg) return xg[t]();
  }
}
function ey(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = $v(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (Ds(a), a);
    }
  }
}
var ty = (e, t, n) => {
    var r = Sv(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        Tg(e)
      )
        return Yg(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && Tg(e))
        return Xg(e, t.tickCount, t.allowDecimals);
    }
  },
  ny = G([Xv, X_, Qv], ty),
  ry = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      Tg(t) &&
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
  iy = G([J_, Xv, ny, S_], ry),
  ay = G(
    G(dv, J_, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(hv(e.map((e) => e.value))).sort((e, t) => e - t);
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
    J,
    $g,
    lc,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!q(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = xn(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  oy = (e, t) => {
    var n = H_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : ay(e, `xAxis`, t, n.padding);
  },
  sy = (e, t) => {
    var n = G_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : ay(e, `yAxis`, t, n.padding);
  },
  cy = G(H_, oy, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  ly = G(G_, sy, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  uy = G([lc, cy, hc, mc, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  dy = G([lc, J, ly, hc, mc, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  fy = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return uy(e, n, r);
      case `yAxis`:
        return dy(e, n, r);
      case `zAxis`:
        return q_(e, n)?.range;
      case `angleAxis`:
        return y_(e);
      case `radiusAxis`:
        return b_(e, n);
      default:
        return;
    }
  },
  py = G([J_, fy], c_),
  my = G([J_, Qv, iy, py], ey);
G([nv, Ev, S_], Dv);
function hy(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var gy = (e, t) => t,
  _y = (e, t, n) => n,
  vy = G(Xs, gy, _y, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(hy),
  ),
  yy = G(Zs, gy, _y, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(hy),
  ),
  by = (e, t) => ({ width: e.width, height: t.height }),
  xy = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  Sy = G(lc, H_, by),
  Cy = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  wy = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  Ty = G(qs, lc, vy, gy, _y, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = by(t, n);
        o ??= Cy(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  Ey = G(Ks, lc, yy, gy, _y, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = xy(t, n);
        o ??= wy(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  Dy = G(
    [
      lc,
      H_,
      (e, t) => {
        var n = H_(e, t);
        if (n != null) return Ty(e, n.orientation, n.mirror);
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
  Oy = G(
    [
      lc,
      G_,
      (e, t) => {
        var n = G_(e, t);
        if (n != null) return Ey(e, n.orientation, n.mirror);
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
  ky = G(lc, G_, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  Ay = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Sy(e, n).width;
      case `yAxis`:
        return ky(e, n).height;
      default:
        return;
    }
  },
  jy = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = Cs(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && Sn(c)) return c;
    }
  },
  My = G([J, dv, J_, S_], jy),
  Ny = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (Cs(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  Py = G([J, dv, X_, S_], Ny),
  Fy = G([J, Y_, Qv, my, My, Py, fy, ny, S_], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = Cs(e, c);
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
  Iy = G([J, X_, Qv, my, ny, fy, My, Py, S_], (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = Cs(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? hn(a[0] - a[1]) * 2 * m
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
            .filter((e) => !gn(e.coordinate))
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
  }),
  Ly = G([J, X_, my, fy, My, Py, S_], (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = Cs(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? hn(r[0] - r[1]) * 2 * l : l),
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
  }),
  Ry = G(J_, my, (e, t) => {
    if (e != null && t != null) return F_(F_({}, e), {}, { scale: t });
  });
G(
  (e, t, n) => q_(e, n),
  G([J_, Qv, Xv, py], ey),
  (e, t) => {
    if (e != null && t != null) return F_(F_({}, e), {}, { scale: t });
  },
);
var zy = G([J, Xs, Zs], (e, t, n) => {
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
  By = (e) => e.options.defaultTooltipEventType,
  Vy = (e) => e.options.validateTooltipEventTypes;
function Hy(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function Uy(e, t) {
  return Hy(t, By(e), Vy(e));
}
function Wy(e) {
  return W((t) => Uy(t, e));
}
var Gy = (e, t) => {
    var n,
      r = Number(t);
    if (!(gn(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  Ky = (e) => e.tooltip.settings,
  qy = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  Jy = ao({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: qy, hover: qy },
      axisInteraction: { click: qy, hover: qy },
      keyboardInteraction: qy,
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
          e.tooltipItemPayloads.push(sa(t.payload));
        },
        prepare: Fa(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = na(e).tooltipItemPayloads.indexOf(sa(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: Fa(),
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
    addTooltipEntrySettings: Yy,
    removeTooltipEntrySettings: Xy,
    setTooltipSettingsState: Zy,
    setActiveMouseOverItemIndex: Qy,
    mouseLeaveItem: $y,
    mouseLeaveChart: eb,
    setActiveClickItemIndex: tb,
    setMouseOverAxisIndex: nb,
    setMouseClickAxisIndex: rb,
    setSyncInteraction: ib,
    setKeyboardInteraction: ab,
  } = Jy.actions,
  ob = Jy.reducer;
function sb(e, t) {
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
function cb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? sb(Object(n), !0).forEach(function (t) {
          lb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function lb(e, t, n) {
  return (
    (t = ub(t)) in e
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
function ub(e) {
  var t = db(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function db(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function fb(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function pb(e) {
  return e.index != null;
}
var mb = (e, t, n, r) => {
    if (t == null) return qy;
    var i = fb(e, t, n);
    if (i == null) return qy;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (pb(i)) {
      if (a) return cb(cb({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return cb(cb({}, qy), {}, { coordinate: i.coordinate });
  },
  hb = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!q(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  gb = (e, t, n, r, i, a, o, s) => {
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
  _b = (e, t, n, r) => {
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
  vb = (e) => e.options.tooltipPayloadSearcher,
  yb = (e) => e.tooltip;
function bb(e, t) {
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
function xb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bb(Object(n), !0).forEach(function (t) {
          Sb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Sb(e, t, n) {
  return (
    (t = Cb(t)) in e
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
function Cb(e) {
  var t = wb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Tb(e, t) {
  return e ?? t;
}
var Eb = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = Tb(d, s),
          m = Array.isArray(p) ? hs(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? Cn(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = xb(
                  xb({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  Vs({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: K(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                Vs({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: K(_, h),
                  name: K(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  Db = G([D_, J, Z_, n_, T_], Zv),
  Ob = G(
    [
      G(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      D_,
      G([T_, E_], Q_),
    ],
    tv,
    { memoizeOptions: { resultEqualityCheck: M_ } },
  ),
  kb = G([Ob], (e) => e.filter(A_)),
  Ab = G(
    [G([Ob], ov, { memoizeOptions: { resultEqualityCheck: M_ } }), Sg],
    cv,
  ),
  jb = G([kb, Sg, D_], k_),
  Mb = G([Ab, D_, Ob], uv),
  Nb = G([D_], Sv),
  Pb = G([Nb, G([D_], (e) => e.allowDataOverflow)], Dg),
  Fb = G([G([jb, G([Ob], (e) => e.filter(A_)), t_], vv), Sg, T_, Pb], bv),
  Ib = G([Ab, D_, G([Ob], iv), Ev, T_], kv, {
    memoizeOptions: { resultEqualityCheck: j_ },
  }),
  Lb = G([G([Nv, T_, E_], Pv), T_], Bv),
  Rb = G([G([Iv, T_, E_], Pv), T_], Hv),
  zb = G(
    [
      D_,
      J,
      Ab,
      Mb,
      t_,
      T_,
      G(
        [
          D_,
          Nb,
          Pb,
          Fb,
          Ib,
          G([Lb, G([G([Rv, T_, E_], Pv), T_], Wv), Rb], Ov),
          J,
          T_,
        ],
        Kv,
      ),
    ],
    Yv,
  ),
  Bb = G([D_, zb, G([zb, D_, Db], ty), T_], ry),
  Vb = (e) => fy(e, T_(e), E_(e), !1),
  Hb = G([D_, Vb], c_),
  Ub = G([D_, Db, Bb, Hb], ey),
  Wb = G(
    [J, D_, Db, Ub, Vb, G([J, Mb, D_, T_], jy), G([J, Mb, D_, T_], Ny), T_],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = Cs(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? hn(i[0] - i[1]) * 2 * d
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
  Gb = G([By, Vy, Ky], (e, t, n) => Hy(n.shared, e, t)),
  Kb = (e) => e.tooltip.settings.trigger,
  qb = (e) => e.tooltip.settings.defaultIndex,
  Jb = G([yb, Gb, Kb, qb], mb),
  Yb = G([Jb, Ab], hb),
  Xb = G([Wb, Yb], Gy),
  Zb = G([Jb], (e) => {
    if (e) return e.dataKey;
  }),
  Qb = G([yb, Gb, Kb, qb], _b),
  $b = G([Jb, G([Ks, qs, J, lc, Wb, qb, Qb, vb], gb)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  ex = G([Jb], (e) => e.active),
  tx = G([G([Qb, Yb, Sg, O_, Xb, vb, Gb], Eb)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function nx(e, t) {
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
function rx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nx(Object(n), !0).forEach(function (t) {
          ix(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ix(e, t, n) {
  return (
    (t = ax(t)) in e
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
function ax(e) {
  var t = ox(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ox(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var sx = () => W(D_),
  cx = () => {
    var e = sx(),
      t = W(Wb),
      n = W(Ub);
    return Bs(rx(rx({}, e), {}, { scale: n }), t);
  },
  lx = () => W(n_),
  ux = (e, t) => t,
  dx = (e, t, n) => n,
  fx = (e, t, n, r) => r,
  px = G(Wb, (e) => (0, qr.default)(e, (e) => e.coordinate)),
  mx = G([yb, ux, dx, fx], mb),
  hx = G([mx, Ab], hb),
  gx = (e, t, n) => {
    if (t != null) {
      var r = yb(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  _x = G([yb, ux, dx, fx], _b),
  vx = G([Ks, qs, J, lc, Wb, fx, _x, vb], gb),
  yx = G([mx, vx], (e, t) => e.coordinate ?? t),
  bx = G(Wb, hx, Gy),
  xx = G([_x, hx, Sg, O_, bx, vb, ux], Eb),
  Sx = G([mx], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Cx = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = Us(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = xs(Gs(c, t), o, a, r, i),
          u = Ws(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function wx() {
  return (
    (wx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wx.apply(null, arguments)
  );
}
function Tx(e, t) {
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
function Ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tx(Object(n), !0).forEach(function (t) {
          Dx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dx(e, t, n) {
  return (
    (t = Ox(t)) in e
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
function Ox(e) {
  var t = kx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ax(e) {
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
  if (l === `ScatterChart`) ((p = u), (m = Cl));
  else if (l === `BarChart`) ((p = wl(o, u, i, a)), (m = Ou));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = ku(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = Iu));
  } else ((p = { points: Lu(o, u, i) }), (m = fl));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = Ex(
      Ex(Ex(Ex({ stroke: `#ccc`, pointerEvents: `none` }, i), p), Ee(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: L(`recharts-tooltip-cursor`, b),
      },
    );
  return (0, R.isValidElement)(s)
    ? (0, R.cloneElement)(s, x)
    : (0, R.createElement)(m, x);
}
function jx(e) {
  var t = cx(),
    n = xc(),
    r = wc(),
    i = lx();
  return R.createElement(
    Ax,
    wx({}, e, {
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
var Mx = (0, R.createContext)(null),
  Nx = () => (0, R.useContext)(Mx),
  Px = e(
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
  Fx = new Px(),
  Ix = `recharts.syncEvent.tooltip`,
  Lx = `recharts.syncEvent.brush`;
function Rx(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!gn(n)) return e?.[n];
  }
}
var zx = ao({
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
  Bx = zx.reducer,
  { createEventEmitter: Vx } = zx.actions;
function Hx(e) {
  return e.tooltip.syncInteraction;
}
var Ux = ao({
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
    setChartData: Wx,
    setDataStartEndIndexes: Gx,
    setComputedData: Kx,
  } = Ux.actions,
  qx = Ux.reducer,
  Jx = [`x`, `y`];
function Yx(e, t) {
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
function Xx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yx(Object(n), !0).forEach(function (t) {
          Zx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zx(e, t, n) {
  return (
    (t = Qx(t)) in e
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
function Qx(e) {
  var t = $x(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function $x(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function eS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = tS(e, t);
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
function tS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var nS = () => {};
function rS() {
  var e = W(r_),
    t = W(a_),
    n = U(),
    r = W(i_),
    i = W(Wb),
    a = wc(),
    o = yc(),
    s = W((e) => e.rootProps.className);
  (0, R.useEffect)(() => {
    if (e == null) return nS;
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
              m = eS(d, Jx),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = Xx(
                Xx({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              Xx(
                Xx({}, c),
                {},
                { payload: Xx(Xx({}, c.payload), {}, { coordinate: y }) },
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
              ib({
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
              ib({
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
      Fx.on(Ix, s),
      () => {
        Fx.off(Ix, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function iS() {
  var e = W(r_),
    t = W(a_),
    n = U();
  (0, R.useEffect)(() => {
    if (e == null) return nS;
    var r = (r, i, a) => {
      t !== a && e === r && n(Gx(i));
    };
    return (
      Fx.on(Lx, r),
      () => {
        Fx.off(Lx, r);
      }
    );
  }, [n, t, e]);
}
function aS() {
  var e = U();
  ((0, R.useEffect)(() => {
    e(Vx());
  }, [e]),
    rS(),
    iS());
}
function oS(e, t, n, r, i, a) {
  var o = W((n) => gx(n, e, t)),
    s = W(a_),
    c = W(r_),
    l = W(i_),
    u = W(Hx)?.active,
    d = yc();
  (0, R.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = ib({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      Fx.emit(Ix, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
var sS = e(r());
function cS(e, t) {
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
function lS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cS(Object(n), !0).forEach(function (t) {
          uS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function uS(e, t, n) {
  return (
    (t = dS(t)) in e
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
function dS(e) {
  var t = fS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function pS(e) {
  return e.dataKey;
}
function mS(e, t) {
  return R.isValidElement(e)
    ? R.cloneElement(e, t)
    : typeof e == `function`
      ? R.createElement(e, t)
      : R.createElement(zc, t);
}
var hS = [],
  gS = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !Qc.isSsr,
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
function _S(e) {
  var t = Al(e, gS),
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
    x = U(),
    S = typeof v == `number` ? String(v) : v;
  (0, R.useEffect)(() => {
    x(Zy({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = yc(),
    w = $c(),
    T = Wy(g),
    { activeIndex: E, isActive: D } = W((e) => Sx(e, T, _, S)),
    O = W((e) => xx(e, T, _, S)),
    k = W((e) => bx(e, T, _, S)),
    A = W((e) => yx(e, T, _, S)),
    j = O,
    ee = Nx(),
    M = n ?? D,
    [te, ne] = Zr([j, M]),
    N = T === `axis` ? k : void 0;
  oS(T, _, A, N, E, M);
  var P = y ?? ee;
  if (P == null) return null;
  var F = j ?? hS;
  (M || (F = hS),
    s &&
      F.length &&
      (F = _r(
        j.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        pS,
      )));
  var re = F.length > 0,
    ie = R.createElement(
      Zc,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: M,
        coordinate: A,
        hasPayload: re,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: te,
        innerRef: ne,
        hasPortalFromProps: !!y,
      },
      mS(
        o,
        lS(
          lS({}, t),
          {},
          {
            payload: F,
            label: N,
            active: M,
            coordinate: A,
            accessibilityLayer: w,
          },
        ),
      ),
    );
  return R.createElement(
    R.Fragment,
    null,
    (0, sS.createPortal)(ie, P),
    M &&
      R.createElement(jx, {
        cursor: h,
        tooltipEventType: T,
        coordinate: A,
        payload: j,
        index: E,
      }),
  );
}
var vS = (e) => null;
vS.displayName = `Cell`;
function yS(e, t, n) {
  return (
    (t = bS(t)) in e
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
function bS(e) {
  var t = xS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var SS = class {
  constructor(e) {
    (yS(this, `cache`, new Map()), (this.maxSize = e));
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
function CS(e, t) {
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
function wS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? CS(Object(n), !0).forEach(function (t) {
          TS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : CS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function TS(e, t, n) {
  return (
    (t = ES(t)) in e
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
function ES(e) {
  var t = DS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function DS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var OS = wS({}, { cacheSize: 2e3, enableCache: !0 }),
  kS = new SS(OS.cacheSize),
  AS = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  jS = `recharts_measurement_span`;
function MS(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var NS = (e, t) => {
    try {
      var n = document.getElementById(jS);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, jS),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, AS, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  PS = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Qc.isSsr) return { width: 0, height: 0 };
    var n = OS.measureText || NS;
    if (!OS.enableCache) return n(e, t);
    var r = MS(e, t),
      i = kS.get(r);
    if (i) return i;
    var a = n(e, t);
    return (kS.set(r, a), a);
  },
  FS = (e) => {
    var t = wS(wS({}, OS), e);
    (t.cacheSize !== OS.cacheSize && (kS = new SS(t.cacheSize)), (OS = t));
  },
  IS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  LS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  RS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  zS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  BS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  VS = Object.keys(BS),
  HS = `NaN`;
function US(e, t) {
  return e * BS[t];
}
var WS = class e {
  static parse(t) {
    var [, n, r] = zS.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      gn(e) && (this.unit = ``),
      t !== `` && !RS.test(t) && ((this.num = NaN), (this.unit = ``)),
      VS.includes(t) && ((this.num = US(e, t)), (this.unit = `px`)));
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
    return gn(this.num);
  }
};
function GS(e) {
  if (e.includes(HS)) return HS;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = IS.exec(t) ?? [],
      a = WS.parse(n ?? ``),
      o = WS.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return HS;
    t = t.replace(IS, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = LS.exec(t) ?? [],
      d = WS.parse(c ?? ``),
      f = WS.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return HS;
    t = t.replace(LS, p.toString());
  }
  return t;
}
var KS = /\(([^()]*)\)/;
function qS(e) {
  for (var t = e, n; (n = KS.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(KS, GS(r));
  }
  return t;
}
function JS(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = qS(t)), (t = GS(t)), t);
}
function YS(e) {
  try {
    return JS(e);
  } catch {
    return HS;
  }
}
function XS(e) {
  var t = YS(e.slice(5, -1));
  return t === HS ? `` : t;
}
var ZS = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  QS = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function $S() {
  return (
    ($S = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $S.apply(null, arguments)
  );
}
function eC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = tC(e, t);
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
function tC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var nC = /[ \f\n\r\t\v\u2028\u2029]+/,
  rC = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        H(t) || (i = n ? t.toString().split(``) : t.toString().split(nC)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: PS(e, r).width,
          })),
          spaceWidth: n ? 0 : PS(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  iC = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = B(a),
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
          var t = rC({
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
  aC = (e) => [{ words: H(e) ? [] : e.toString().split(nC) }],
  oC = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !Qc.isSsr) {
      var s,
        c,
        l = rC({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return aC(r);
      return iC(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return aC(r);
  },
  sC = `#808080`,
  cC = (0, R.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = sC,
      } = e,
      u = eC(e, ZS),
      d = (0, R.useMemo)(
        () =>
          oC({
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
      _ = eC(u, QS);
    if (!vn(n) || !vn(r) || d.length === 0) return null;
    var v = n + (B(f) ? f : 0),
      y = r + (B(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = XS(`calc(${a})`);
        break;
      case `middle`:
        b = XS(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = XS(`calc(${d.length - 1} * -${i})`);
    }
    var x = [];
    if (o) {
      var S = d[0].width,
        { width: C } = u;
      x.push(`scale(${B(C) ? C / S : 1})`);
    }
    return (
      m && x.push(`rotate(${m}, ${v}, ${y})`),
      x.length && (_.transform = x.join(` `)),
      R.createElement(
        `text`,
        $S({}, De(_), {
          ref: t,
          x: v,
          y,
          className: L(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? sC : l,
        }),
        d.map((e, t) => {
          var n = e.words.join(g ? `` : ` `);
          return R.createElement(
            `tspan`,
            { x: v, dy: t === 0 ? b : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
cC.displayName = `Text`;
var lC = [`labelRef`];
function uC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = dC(e, t);
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
function dC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function fC(e, t) {
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
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fC(Object(n), !0).forEach(function (t) {
          pC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pC(e, t, n) {
  return (
    (t = mC(t)) in e
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
function mC(e) {
  var t = hC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gC() {
  return (
    (gC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gC.apply(null, arguments)
  );
}
var _C = (0, R.createContext)(null),
  vC = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, R.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return R.createElement(_C.Provider, { value: o }, a);
  },
  yC = () => {
    var e = (0, R.useContext)(_C),
      t = yc();
    return e || t;
  },
  bC = (0, R.createContext)(null),
  xC = () => {
    var e = (0, R.useContext)(bC),
      t = W(x_);
    return e || t;
  },
  SC = (e) => {
    var { value: t, formatter: n } = e,
      r = H(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  CC = (e) => e != null && typeof e == `function`,
  wC = (e, t) => hn(t - e) * Math.min(Math.abs(t - e), 360),
  TC = (e, t, n, r, i) => {
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
      h = wC(d, f),
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
    var y = cs(s, c, m, _),
      b = cs(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = H(e.id) ? bn(`recharts-radial-line-`) : e.id;
    return R.createElement(
      `text`,
      gC({}, r, {
        dominantBaseline: `central`,
        className: L(`recharts-radial-bar-label`, o),
      }),
      R.createElement(`defs`, null, R.createElement(`path`, { id: S, d: x })),
      R.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  EC = (e, t, n) => {
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
      var { x: u, y: d } = cs(r, i, o + t, l);
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
    var { x: f, y: p } = cs(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  DC = (e) => `cx` in e && B(e.cx),
  OC = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !DC(n) && (a = n);
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
      return Z(
        Z(
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
      return Z(
        Z(
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
      return Z(Z({}, v), a ? { width: Math.max(v.x - a.x, 0), height: l } : {});
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return Z(
        Z({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? Z(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? Z(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? Z(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? Z(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? Z({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? Z(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? Z(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? Z(
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
                        (B(i.x) || _n(i.x)) &&
                        (B(i.y) || _n(i.y))
                      ? Z(
                          {
                            x: o + xn(i.x, c),
                            y: s + xn(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : Z(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  kC = { offset: 5 };
function AC(e) {
  var t = Al(e, kC),
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
    u = xC(),
    d = yC(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (H(i) && H(a) && !(0, R.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = Z(Z({}, t), {}, { viewBox: f });
  if ((0, R.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = uC(p, lC);
    return (0, R.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, R.createElement)(o, p)), (0, R.isValidElement)(g))) return g;
  } else g = SC(t);
  var _ = DC(f),
    v = De(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return TC(t, r, g, v, f);
  var y = _ ? EC(f, t.offset, t.position) : OC(t, f);
  return R.createElement(
    cC,
    gC({ ref: l, className: L(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
AC.displayName = `Label`;
var jC = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? R.createElement(AC, gC({ key: `label-implicit` }, r))
    : vn(e)
      ? R.createElement(AC, gC({ key: `label-implicit`, value: e }, r))
      : (0, R.isValidElement)(e)
        ? e.type === AC
          ? (0, R.cloneElement)(e, Z({ key: `label-implicit` }, r))
          : R.createElement(AC, gC({ key: `label-implicit`, content: e }, r))
        : CC(e)
          ? R.createElement(AC, gC({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? R.createElement(AC, gC({}, e, { key: `label-implicit` }, r))
            : null;
};
function MC(e) {
  var { label: t, labelRef: n } = e;
  return jC(t, yC(), n) || null;
}
var NC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  PC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  FC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = NC(),
      n = PC(),
      r = Kn();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  IC = e(
    n((e, t) => {
      t.exports = FC().last;
    })(),
  ),
  LC = [`valueAccessor`],
  RC = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function zC() {
  return (
    (zC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zC.apply(null, arguments)
  );
}
function BC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = VC(e, t);
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
function VC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var HC = (e) => (Array.isArray(e.value) ? (0, IC.default)(e.value) : e.value),
  UC = (0, R.createContext)(void 0),
  WC = UC.Provider,
  GC = (0, R.createContext)(void 0);
GC.Provider;
function KC() {
  return (0, R.useContext)(UC);
}
function qC() {
  return (0, R.useContext)(GC);
}
function JC(e) {
  var { valueAccessor: t = HC } = e,
    n = BC(e, LC),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = BC(n, RC),
    c = KC(),
    l = qC(),
    u = c || l;
  return !u || !u.length
    ? null
    : R.createElement(
        Re,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = H(r) ? t(e, i) : K(e && e.payload, r),
            l = H(a) ? {} : { id: `${a}-${i}` };
          return R.createElement(
            AC,
            zC({ key: `label-${i}` }, De(e), s, l, {
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
JC.displayName = `LabelList`;
function YC(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? R.createElement(JC, { key: `labelList-implicit` })
      : R.isValidElement(t) || CC(t)
        ? R.createElement(JC, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? R.createElement(
              JC,
              zC({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
function XC() {
  return (
    (XC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    XC.apply(null, arguments)
  );
}
var ZC = (e) => {
    var { cx: t, cy: n, r, className: i } = e,
      a = L(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? R.createElement(
          `circle`,
          XC({}, Te(e), Bn(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  QC = ao({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = sa(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = sa(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: $C,
    removeRadiusAxis: ew,
    addAngleAxis: tw,
    removeAngleAxis: nw,
  } = QC.actions,
  rw = QC.reducer,
  iw = n((e) => {
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
  aw = n((e, t) => {
    t.exports = iw();
  })(),
  ow = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  sw = null,
  cw = null,
  lw = (e) => {
    if (e === sw && Array.isArray(cw)) return cw;
    var t = [];
    return (
      R.Children.forEach(e, (e) => {
        H(e) ||
          ((0, aw.isFragment)(e)
            ? (t = t.concat(lw(e.props.children)))
            : t.push(e));
      }),
      (cw = t),
      (sw = e),
      t
    );
  };
function uw(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => ow(e)) : [ow(t)]),
    lw(e).forEach((e) => {
      var t =
        (0, mn.default)(e, `type.displayName`) ||
        (0, mn.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var dw = (e) =>
    e && typeof e == `object` && `clipDot` in e ? !!e.clipDot : !0,
  fw = n((e) => {
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
  pw = n((e, t) => {
    t.exports = fw().isPlainObject;
  });
function mw(e, t) {
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
function hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mw(Object(n), !0).forEach(function (t) {
          gw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gw(e, t, n) {
  return (
    (t = _w(t)) in e
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
function _w(e) {
  var t = vw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function vw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function yw() {
  return (
    (yw = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yw.apply(null, arguments)
  );
}
var bw = (e, t, n, r, i) => {
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
  xw = {
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
  Sw = (e) => {
    var t = Al(e, xw),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: c,
        animationDuration: l,
        animationBegin: u,
        isUpdateAnimationActive: d,
      } = t,
      f = (0, R.useRef)(null),
      [p, m] = (0, R.useState)(-1),
      h = (0, R.useRef)(i),
      g = (0, R.useRef)(a),
      _ = (0, R.useRef)(o),
      v = (0, R.useRef)(n),
      y = (0, R.useRef)(r),
      b = hu(e, `trapezoid-`);
    if (
      ((0, R.useEffect)(() => {
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
    var x = L(`recharts-trapezoid`, s);
    if (!d)
      return R.createElement(
        `g`,
        null,
        R.createElement(
          `path`,
          yw({}, De(t), { className: x, d: bw(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      O = `${p}px 0px`,
      k = zl([`strokeDasharray`], l, c);
    return R.createElement(
      mu,
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
        var s = V(S, i, e),
          c = V(C, a, e),
          l = V(w, o, e),
          u = V(T, n, e),
          d = V(E, r, e);
        f.current &&
          ((h.current = s),
          (g.current = c),
          (_.current = l),
          (v.current = u),
          (y.current = d));
        var p =
          e > 0
            ? { transition: k, strokeDasharray: O }
            : { strokeDasharray: D };
        return R.createElement(
          `path`,
          yw({}, De(t), {
            className: x,
            d: bw(u, d, s, c, l),
            ref: f,
            style: hw(hw({}, p), t.style),
          }),
        );
      },
    );
  },
  Cw = e(pw()),
  ww = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function Tw(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ew(e, t);
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
function Ew(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Dw(e, t) {
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
function Ow(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dw(Object(n), !0).forEach(function (t) {
          kw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kw(e, t, n) {
  return (
    (t = Aw(t)) in e
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
function Aw(e) {
  var t = jw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Mw(e, t) {
  return Ow(Ow({}, t), e);
}
function Nw(e, t) {
  return e === `symbols`;
}
function Pw(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return R.createElement(Ou, n);
    case `trapezoid`:
      return R.createElement(Sw, n);
    case `sector`:
      return R.createElement(Iu, n);
    case `symbols`:
      if (Nw(t, n)) return R.createElement(zn, n);
      break;
    default:
      return null;
  }
}
function Fw(e) {
  return (0, R.isValidElement)(e) ? e.props : e;
}
function Iw(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = Mw,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = Tw(e, ww),
    s;
  if ((0, R.isValidElement)(t))
    s = (0, R.cloneElement)(t, Ow(Ow({}, o), Fw(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, Cw.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = R.createElement(Pw, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = R.createElement(Pw, { shapeType: n, elementProps: l });
  }
  return a ? R.createElement(Re, { className: i }, s) : s;
}
var Lw = (e, t) => {
    var n = U();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          Qy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  Rw = (e) => {
    var t = U();
    return (n, r) => (i) => {
      (e?.(n, r, i), t($y()));
    };
  },
  zw = (e, t) => {
    var n = U();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          tb({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function Bw(e) {
  var { fn: t, args: n } = e,
    r = U(),
    i = pc();
  return (
    (0, R.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(Yy(e)),
          () => {
            r(Xy(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var Vw = () => {};
function Hw(e) {
  var { legendPayload: t } = e,
    n = U(),
    r = pc();
  return (
    (0, R.useLayoutEffect)(
      () =>
        r
          ? Vw
          : (n(kc(t)),
            () => {
              n(Ac(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var Uw =
  R.useId ??
  (() => {
    var [e] = R.useState(() => bn(`uid-`));
    return e;
  });
function Ww(e, t) {
  var n = Uw();
  return t || (e ? `${e}-${n}` : n);
}
var Gw = (0, R.createContext)(void 0),
  Kw = (e) => {
    var { id: t, type: n, children: r } = e,
      i = Ww(`recharts-${n}`, t);
    return R.createElement(Gw.Provider, { value: i }, r(i));
  },
  qw = ao({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(sa(t.payload));
        },
        prepare: Fa(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = na(e).cartesianItems.indexOf(sa(n));
          i > -1 && (e.cartesianItems[i] = sa(r));
        },
        prepare: Fa(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = na(e).cartesianItems.indexOf(sa(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: Fa(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(sa(t.payload));
        },
        prepare: Fa(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = na(e).polarItems.indexOf(sa(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: Fa(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: Jw,
    replaceCartesianGraphicalItem: Yw,
    removeCartesianGraphicalItem: Xw,
    addPolarGraphicalItem: Zw,
    removePolarGraphicalItem: Qw,
  } = qw.actions,
  $w = qw.reducer;
function eT(e) {
  var t = U(),
    n = (0, R.useRef)(null);
  return (
    (0, R.useLayoutEffect)(() => {
      (n.current === null
        ? t(Jw(e))
        : n.current !== e && t(Yw({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, R.useLayoutEffect)(
      () => () => {
        n.current &&= (t(Xw(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function tT(e, t) {
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
function nT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tT(Object(n), !0).forEach(function (t) {
          rT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rT(e, t, n) {
  return (
    (t = iT(t)) in e
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
function iT(e) {
  var t = aT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function aT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var oT = ao({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = sa(t.payload);
        },
        prepare: Fa(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: Fa(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = sa(t.payload);
        },
        prepare: Fa(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: Fa(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = sa(t.payload);
        },
        prepare: Fa(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: Fa(),
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
          e.yAxis[n] = nT(
            nT({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: sT,
    removeXAxis: cT,
    addYAxis: lT,
    removeYAxis: uT,
    addZAxis: dT,
    removeZAxis: fT,
    updateYAxisWidth: pT,
  } = oT.actions,
  mT = oT.reducer,
  hT = G(
    [
      G([lc], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      Ks,
      qs,
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
  gT = () => W(hT),
  _T = () => W(tx);
function vT(e, t) {
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
function yT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vT(Object(n), !0).forEach(function (t) {
          bT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bT(e, t, n) {
  return (
    (t = xT(t)) in e
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
function xT(e) {
  var t = ST(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ST(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var CT = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = yT(
      yT(
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
        Ee(i),
      ),
      Bn(i),
    ),
    s = (0, R.isValidElement)(i)
      ? (0, R.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : R.createElement(ZC, o);
  return R.createElement(Re, { className: `recharts-active-dot` }, s);
};
function wT(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = W(Yb),
    o = _T();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return H(s)
    ? null
    : CT({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
var TT = [`x`, `y`];
function ET() {
  return (
    (ET = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ET.apply(null, arguments)
  );
}
function DT(e, t) {
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
function OT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DT(Object(n), !0).forEach(function (t) {
          kT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kT(e, t, n) {
  return (
    (t = AT(t)) in e
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
function AT(e) {
  var t = jT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = NT(e, t);
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
function NT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function PT(e, t) {
  var { x: n, y: r } = e,
    i = MT(e, TT),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return OT(
    OT(OT(OT(OT({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function FT(e) {
  return R.createElement(
    Iw,
    ET(
      {
        shapeType: `rectangle`,
        propTransformer: PT,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var IT = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (B(e)) return e;
      var i = B(n) || H(n);
      return i ? e(n, r) : (!i && l(!1), t);
    };
  },
  LT = ao({
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
  { addErrorBar: RT, replaceErrorBar: zT, removeErrorBar: BT } = LT.actions,
  VT = LT.reducer,
  HT = [`children`];
function UT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = WT(e, t);
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
function WT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var GT = (0, R.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function KT(e) {
  var { children: t } = e,
    n = UT(e, HT);
  return R.createElement(GT.Provider, { value: n }, t);
}
function qT(e, t) {
  var n = W((t) => H_(t, e)),
    r = W((e) => G_(e, t)),
    i = n?.allowDataOverflow ?? B_.allowDataOverflow,
    a = r?.allowDataOverflow ?? U_.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function JT(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = gT(),
    { needClipX: a, needClipY: o, needClip: s } = qT(t, n);
  if (!s) return null;
  var { x: c, y: l, width: u, height: d } = i;
  return R.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    R.createElement(`rect`, {
      x: a ? c : c - u / 2,
      y: o ? l : l - d / 2,
      width: a ? u : u * 2,
      height: o ? d : d * 2,
    }),
  );
}
var YT = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  XT = [`value`, `background`, `tooltipPosition`],
  ZT = [`id`],
  QT = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function $T() {
  return (
    ($T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $T.apply(null, arguments)
  );
}
function eE(e, t) {
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
function tE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? eE(Object(n), !0).forEach(function (t) {
          nE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nE(e, t, n) {
  return (
    (t = rE(t)) in e
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
function rE(e) {
  var t = iE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function aE(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oE(e, t);
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
function oE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var sE = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Hs(n, t), payload: e },
  ];
};
function cE(e) {
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
      name: Hs(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function lE(e) {
  var t = W(Yb),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = aE(a, YT),
    u = Lw(o, r),
    d = Rw(s),
    f = zw(c, r);
  if (!i || n == null) return null;
  var p = Ee(i);
  return R.createElement(
    R.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = aE(e, XT);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = tE(
          tE(
            tE(
              tE(
                tE({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            Hn(l, e, n),
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
      return R.createElement(FT, $T({ key: `background-bar-${n}` }, _));
    }),
  );
}
function uE(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return tE(
        tE({}, t),
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
  return R.createElement(WC, { value: t ? i : void 0 }, n);
}
function dE(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = W(Yb),
    c = W(Zb),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return R.createElement(
    FT,
    $T({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function fE(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return R.createElement(
    FT,
    $T({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function pE(e) {
  var { data: t, props: n } = e,
    r = Te(n),
    { id: i } = r,
    a = aE(r, ZT),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = aE(n, QT),
    p = Lw(l, s),
    m = Rw(d),
    h = zw(u, s);
  return t
    ? R.createElement(
        R.Fragment,
        null,
        t.map((e, t) =>
          R.createElement(
            Re,
            $T(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              Hn(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? R.createElement(dE, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : R.createElement(fE, {
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
function mE(e) {
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
    f = hu(t, `recharts-bar-`),
    [p, m] = (0, R.useState)(!1),
    h = !p,
    g = (0, R.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return R.createElement(
    uE,
    { showLabels: h, rects: r },
    R.createElement(
      mu,
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
                  return tE(
                    tE({}, t),
                    {},
                    {
                      x: V(r.x, t.x, e),
                      y: V(r.y, t.y, e),
                      width: V(r.width, t.width, e),
                      height: V(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = V(0, t.height, e);
                  return tE(
                    tE({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = V(0, t.width, e);
                return tE(tE({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : R.createElement(
                Re,
                null,
                R.createElement(pE, { props: t, data: a }),
              )
        );
      },
    ),
    R.createElement(YC, { label: t.label }),
    t.children,
  );
}
function hE(e) {
  var t = (0, R.useRef)(null);
  return R.createElement(mE, { previousRectanglesRef: t, props: e });
}
var gE = 0,
  _E = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: K(e, t) };
  },
  vE = class extends R.PureComponent {
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
      var l = L(`recharts-bar`, r),
        u = c;
      return R.createElement(
        Re,
        { className: l, id: c },
        o &&
          R.createElement(
            `defs`,
            null,
            R.createElement(JT, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        R.createElement(
          Re,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          R.createElement(lE, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          R.createElement(hE, this.props),
        ),
      );
    }
  },
  yE = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !Qc.isSsr,
    legendType: `rect`,
    minPointSize: gE,
    xAxisId: 0,
    yAxisId: 0,
  };
function bE(e) {
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
    { needClip: d } = qT(t, n),
    f = wc(),
    p = pc(),
    m = uw(e.children, vS),
    h = W((r) => HE(r, t, n, p, e.id, m));
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
    R.createElement(
      KT,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: _E,
        errorBarOffset: g,
      },
      R.createElement(
        vE,
        $T({}, e, {
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
function xE(e) {
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
    _ = Ps({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u ? (h = Os(u[d], g)) : ((h = K(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = IT(r, gE)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Ns({
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
          ((x = gn(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = hn(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = Ns({
            axis: s,
            ticks: l,
            bandSize: a,
            offset: i.offset,
            entry: e,
            index: d,
          })),
          (b = k - O),
          (x = i.size),
          (S = { x: f.left, y, width: f.width, height: x }),
          Math.abs(C) > 0 && Math.abs(b) < Math.abs(C))
        ) {
          var A = hn(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : tE(
            tE({}, e),
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
function SE(e) {
  var t = Al(e, yE),
    n = pc();
  return R.createElement(Kw, { id: t.id, type: `bar` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(Hw, { legendPayload: sE(t) }),
      R.createElement(Bw, { fn: cE, args: t }),
      R.createElement(eT, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: js(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      R.createElement(bE, $T({}, t, { id: e })),
    ),
  );
}
var CE = R.memo(SE);
CE.displayName = `Bar`;
function wE(e, t) {
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
function TE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wE(Object(n), !0).forEach(function (t) {
          EE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function EE(e, t, n) {
  return (
    (t = DE(t)) in e
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
function DE(e) {
  var t = OE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function OE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kE = (e, t) => t,
  AE = (e, t, n) => n,
  jE = (e, t, n, r) => r,
  ME = G([$_, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  NE = G([ME], (e) => e?.maxBarSize),
  PE = (e, t, n, r, i, a) => a,
  FE = (e, t, n) => {
    var r = n ?? e;
    if (!H(r)) return xn(r, t, 0);
  },
  IE = G([J, $_, kE, AE, jE], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  LE = (e, t, n, r) =>
    J(e) === `horizontal` ? yv(e, `yAxis`, n, r) : yv(e, `xAxis`, t, r),
  RE = G(
    [
      IE,
      e_,
      (e, t, n) =>
        J(e) === `horizontal` ? Ay(e, `xAxis`, t) : Ay(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(A_),
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
            barSize: FE(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: FE(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  zE = (e, t, n, r, i) => {
    var a = ME(e, t, n, r, i);
    if (a != null) {
      var o = J(e),
        s = Zg(e),
        { maxBarSize: c } = a,
        l = H(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = Ry(e, `xAxis`, t, r)), (d = Ly(e, `xAxis`, t, r)))
          : ((u = Ry(e, `yAxis`, n, r)), (d = Ly(e, `yAxis`, n, r))),
        Bs(u, d, !0) ?? l ?? 0
      );
    }
  },
  BE = (e, t, n, r) => {
    var i = J(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = Ry(e, `xAxis`, t, r)), (o = Ly(e, `xAxis`, t, r)))
        : ((a = Ry(e, `yAxis`, n, r)), (o = Ly(e, `yAxis`, n, r))),
      Bs(a, o)
    );
  };
function VE(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = xn(e, n, 0, !0),
      s,
      c = [];
    if (q(r[0].barSize)) {
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
      var p = xn(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = q(i) ? Math.min(m, i) : m;
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
var HE = G(
    [
      lc,
      dc,
      (e, t, n, r) => Ry(e, `xAxis`, t, r),
      (e, t, n, r) => Ry(e, `yAxis`, n, r),
      (e, t, n, r) => Ly(e, `xAxis`, t, r),
      (e, t, n, r) => Ly(e, `yAxis`, n, r),
      G(
        [
          G([RE, Zg, Qg, $g, zE, BE, NE], (e, t, n, r, i, a, o) => {
            var s = H(o) ? t : o,
              c = VE(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  TE(
                    TE({}, e),
                    {},
                    {
                      position: TE(
                        TE({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          ME,
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
      J,
      wg,
      BE,
      G([LE, ME], (e, t) => {
        var n = w_(t);
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
      ME,
      PE,
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
          return xE({
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
  UE = (e) => {
    var { chartData: t } = e,
      n = U(),
      r = pc();
    return (
      (0, R.useEffect)(
        () =>
          r
            ? () => {}
            : (n(Wx(t)),
              () => {
                n(Wx(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  WE = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  GE = ao({
    name: `brush`,
    initialState: WE,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? WE : t.payload;
      },
    },
  }),
  { setBrushSettings: KE } = GE.actions,
  qE = GE.reducer;
function JE(e, t) {
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
function YE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? JE(Object(n), !0).forEach(function (t) {
          XE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : JE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function XE(e, t, n) {
  return (
    (t = ZE(t)) in e
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
function ZE(e) {
  var t = QE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function QE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var $E = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return {
      x: Math.min(n, i),
      y: Math.min(r, a),
      width: Math.abs(i - n),
      height: Math.abs(a - r),
    };
  },
  eD = class e {
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
  };
XE(eD, `EPS`, 1e-4);
var tD = (e) => {
  var t = Object.keys(e).reduce(
    (t, n) => YE(YE({}, t), {}, { [n]: eD.create(e[n]) }),
    {},
  );
  return YE(
    YE({}, t),
    {},
    {
      apply(e) {
        var { bandAware: n, position: r } =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.fromEntries(
          Object.entries(e).map((e) => {
            var [i, a] = e;
            return [i, t[i].apply(a, { bandAware: n, position: r })];
          }),
        );
      },
      isInRange(e) {
        return Object.keys(e).every((n) => t[n].isInRange(e[n]));
      },
    },
  );
};
function nD(e) {
  return ((e % 180) + 180) % 180;
}
var rD = function (e) {
    var { width: t, height: n } = e,
      r =
        (nD(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  iD = ao({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = na(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = na(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = na(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: aD,
    removeDot: oD,
    addArea: sD,
    removeArea: cD,
    addLine: lD,
    removeLine: uD,
  } = iD.actions,
  dD = iD.reducer,
  fD = (0, R.createContext)(void 0),
  pD = (e) => {
    var { children: t } = e,
      [n] = (0, R.useState)(`${bn(`recharts`)}-clip`),
      r = gT();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return R.createElement(
      fD.Provider,
      { value: n },
      R.createElement(
        `defs`,
        null,
        R.createElement(
          `clipPath`,
          { id: n },
          R.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  },
  mD = () => (0, R.useContext)(fD);
function hD(e, t) {
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
function gD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hD(Object(n), !0).forEach(function (t) {
          _D(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _D(e, t, n) {
  return (
    (t = vD(t)) in e
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
function vD(e) {
  var t = yD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bD() {
  return (
    (bD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bD.apply(null, arguments)
  );
}
var xD = (e, t, n, r, i, a, o) => {
    var { x1: s, x2: c, y1: l, y2: u } = o;
    if (i == null || a == null) return null;
    var d = tD({ x: i, y: a }),
      f = {
        x: e ? d.x.apply(s, { position: `start` }) : d.x.rangeMin,
        y: n ? d.y.apply(l, { position: `start` }) : d.y.rangeMin,
      },
      p = {
        x: t ? d.x.apply(c, { position: `end` }) : d.x.rangeMax,
        y: r ? d.y.apply(u, { position: `end` }) : d.y.rangeMax,
      };
    return o.ifOverflow === `discard` && (!d.isInRange(f) || !d.isInRange(p))
      ? null
      : $E(f, p);
  },
  SD = (e, t) =>
    R.isValidElement(e)
      ? R.cloneElement(e, t)
      : typeof e == `function`
        ? e(t)
        : R.createElement(
            Ou,
            bD({}, t, { className: `recharts-reference-area-rect` }),
          );
function CD(e) {
  var t = U();
  return (
    (0, R.useEffect)(
      () => (
        t(sD(e)),
        () => {
          t(cD(e));
        }
      ),
    ),
    null
  );
}
function wD(e) {
  var {
      x1: t,
      x2: n,
      y1: r,
      y2: i,
      className: a,
      shape: o,
      xAxisId: s,
      yAxisId: c,
    } = e,
    l = mD(),
    u = pc(),
    d = W((e) => my(e, `xAxis`, s, u)),
    f = W((e) => my(e, `yAxis`, c, u));
  if (d == null || !f == null) return null;
  var p = vn(t),
    m = vn(n),
    h = vn(r),
    g = vn(i);
  if (!p && !m && !h && !g && !o) return null;
  var _ = xD(p, m, h, g, d, f, e);
  if (!_ && !o) return null;
  var v = e.ifOverflow === `hidden` ? `url(#${l})` : void 0;
  return R.createElement(
    Re,
    { className: L(`recharts-reference-area`, a) },
    SD(o, gD(gD({ clipPath: v }, De(e)), _)),
    R.createElement(vC, _, R.createElement(MC, { label: e.label }), e.children),
  );
}
function TD(e) {
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(CD, {
      yAxisId: e.yAxisId,
      xAxisId: e.xAxisId,
      ifOverflow: e.ifOverflow,
      x1: e.x1,
      x2: e.x2,
      y1: e.y1,
      y2: e.y2,
    }),
    R.createElement(wD, e),
  );
}
var ED = class extends R.Component {
  render() {
    return R.createElement(TD, this.props);
  }
};
(_D(ED, `displayName`, `ReferenceArea`),
  _D(ED, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  }));
function DD(e, t) {
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
function OD(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function kD(e, t, n) {
  return rD({ width: e.width + t.width, height: e.height + t.height }, n);
}
function AD(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function jD(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function MD(e, t) {
  return OD(e, t + 1);
}
function ND(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: OD(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || jD(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function PD(e, t) {
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
function FD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PD(Object(n), !0).forEach(function (t) {
          ID(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ID(e, t, n) {
  return (
    (t = LD(t)) in e
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
function LD(e) {
  var t = RD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zD(e, t, n, r, i) {
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
          a[t] = r = FD(
            FD({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = FD(FD({}, r), {}, { tickCoord: r.coordinate });
        jD(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = FD(FD({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function BD(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      FD(
        FD({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      jD(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = FD(FD({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = FD(
            FD({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = FD(FD({}, r), {}, { tickCoord: r.coordinate });
        jD(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = FD(FD({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function VD(e, t, n) {
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
  if (B(c) || Qc.isSsr) return MD(i, B(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? PS(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? kD(PS(i, { fontSize: t, letterSpacing: n }), m, d)
        : PS(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? hn(i[1].coordinate - i[0].coordinate) : 1,
    _ = AD(a, g, p);
  return c === `equidistantPreserveStart`
    ? ND(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? BD(g, _, h, i, o, c === `preserveStartEnd`)
          : zD(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var HD = (e) => {
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
  UD = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  WD = [`viewBox`],
  GD = [`viewBox`];
function KD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qD(e, t);
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
function qD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function JD() {
  return (
    (JD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    JD.apply(null, arguments)
  );
}
function YD(e, t) {
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
function XD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? YD(Object(n), !0).forEach(function (t) {
          ZD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : YD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ZD(e, t, n) {
  return (
    (t = QD(t)) in e
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
function QD(e) {
  var t = $D(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function $D(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var eO = {
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
function tO(e) {
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
  var l = XD(XD(XD({}, c), Te(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = XD(XD({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = XD(XD({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return R.createElement(
    `line`,
    JD({}, l, {
      className: L(
        `recharts-cartesian-axis-line`,
        (0, mn.default)(s, `className`),
      ),
    }),
  );
}
function nO(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = B(e.tickCoord) ? e.tickCoord : e.coordinate;
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
function rO(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function iO(e, t) {
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
function aO(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = L(n.className, `recharts-cartesian-axis-tick-value`);
  if (R.isValidElement(t))
    i = R.cloneElement(t, XD(XD({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(XD(XD({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = L(o, t?.className)),
      (i = R.createElement(cC, JD({}, n, { className: o }), r)));
  }
  return i;
}
function oO(e) {
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
    x = VD(XD(XD({}, y), {}, { ticks: t }), _, v),
    S = rO(l, u),
    C = iO(l, u),
    w = Te(y),
    T = Ee(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = XD(XD({}, w), {}, { fill: `none` }, E),
    O = x.map((e, t) => {
      var { line: _, tick: v } = nO(e, d, f, p, m, l, h, u, g),
        y = XD(
          XD(
            XD(
              XD({ textAnchor: S, verticalAnchor: C }, w),
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
      return R.createElement(
        Re,
        JD(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          Hn(b, e, t),
        ),
        r &&
          R.createElement(
            `line`,
            JD({}, D, _, {
              className: L(
                `recharts-cartesian-axis-tick-line`,
                (0, mn.default)(r, `className`),
              ),
            }),
          ),
        n &&
          R.createElement(aO, {
            option: n,
            tickProps: y,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return O.length > 0
    ? R.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, O)
    : null;
}
var sO = (0, R.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = KD(e, UD),
      [l, u] = (0, R.useState)(``),
      [d, f] = (0, R.useState)(``),
      p = (0, R.useRef)(null);
    (0, R.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        HD({
          ticks: p.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var m = (0, R.useCallback)(
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
      : R.createElement(
          Re,
          { className: L(`recharts-cartesian-axis`, a), ref: m },
          R.createElement(tO, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: Te(e),
          }),
          R.createElement(oO, {
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
          R.createElement(
            vC,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            R.createElement(MC, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  cO = R.memo(sO, (e, t) => {
    var { viewBox: n } = e,
      r = KD(e, WD),
      { viewBox: i } = t,
      a = KD(t, GD);
    return DD(n, i) && DD(r, a);
  }),
  lO = R.forwardRef((e, t) => {
    var n = Al(e, eO);
    return R.createElement(cO, JD({}, n, { ref: t }));
  });
lO.displayName = `CartesianAxis`;
var uO = [`x1`, `y1`, `x2`, `y2`, `key`],
  dO = [`offset`],
  fO = [`xAxisId`, `yAxisId`],
  pO = [`xAxisId`, `yAxisId`];
function mO(e, t) {
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
function hO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mO(Object(n), !0).forEach(function (t) {
          gO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gO(e, t, n) {
  return (
    (t = _O(t)) in e
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
function _O(e) {
  var t = vO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function vO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function yO() {
  return (
    (yO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yO.apply(null, arguments)
  );
}
function bO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xO(e, t);
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
function xO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var SO = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return R.createElement(`rect`, {
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
function CO(e, t) {
  var n;
  if (R.isValidElement(e)) n = R.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = Te(bO(t, uO)),
      { offset: l } = c,
      u = bO(c, dO);
    n = R.createElement(
      `line`,
      yO({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function wO(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = bO(e, fO),
    c = i.map((e, i) =>
      CO(
        r,
        hO(
          hO({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    c,
  );
}
function TO(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = bO(e, pO),
    c = i.map((e, i) =>
      CO(
        r,
        hO(
          hO({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    c,
  );
}
function EO(e) {
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
    return R.createElement(`rect`, {
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
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function DO(e) {
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
    return R.createElement(`rect`, {
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
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    u,
  );
}
var OO = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return ws(
      VD(
        hO(
          hO(hO({}, eO), n),
          {},
          { ticks: Ts(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  kO = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return ws(
      VD(
        hO(
          hO(hO({}, eO), n),
          {},
          { ticks: Ts(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  AO = {
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
function jO(e) {
  var t = Sc(),
    n = Cc(),
    r = xc(),
    i = hO(
      hO({}, Al(e, AO)),
      {},
      {
        x: B(e.x) ? e.x : r.left,
        y: B(e.y) ? e.y : r.top,
        width: B(e.width) ? e.width : r.width,
        height: B(e.height) ? e.height : r.height,
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
    m = pc(),
    h = W((e) => Fy(e, `xAxis`, a, m)),
    g = W((e) => Fy(e, `yAxis`, o, m));
  if (
    !B(l) ||
    l <= 0 ||
    !B(u) ||
    u <= 0 ||
    !B(s) ||
    s !== +s ||
    !B(c) ||
    c !== +c
  )
    return null;
  var _ = i.verticalCoordinatesGenerator || OO,
    v = i.horizontalCoordinatesGenerator || kO,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? hO(hO({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
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
          xAxis: h ? hO(hO({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        C ? !0 : d,
      );
    Array.isArray(w) && (b = w);
  }
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    R.createElement(SO, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    R.createElement(EO, yO({}, i, { horizontalPoints: y })),
    R.createElement(DO, yO({}, i, { verticalPoints: b })),
    R.createElement(
      wO,
      yO({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    R.createElement(
      TO,
      yO({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
jO.displayName = `CartesianGrid`;
var MO = (e, t, n, r) => Ry(e, `xAxis`, t, r),
  NO = (e, t, n, r) => Ly(e, `xAxis`, t, r),
  PO = (e, t, n, r) => Ry(e, `yAxis`, n, r),
  FO = (e, t, n, r) => Ly(e, `yAxis`, n, r),
  IO = G([J, MO, PO, NO, FO], (e, t, n, r, i) =>
    Cs(e, `xAxis`) ? Bs(t, r, !1) : Bs(n, i, !1),
  ),
  LO = (e, t, n, r, i) => i;
function RO(e) {
  return e.type === `line`;
}
var zO = G(
  [
    J,
    MO,
    PO,
    NO,
    FO,
    G([$_, LO], (e, t) => e.filter(RO).find((e) => e.id === t)),
    IO,
    wg,
  ],
  (e, t, n, r, i, a, o, s) => {
    var { chartData: c, dataStartIndex: l, dataEndIndex: u } = s;
    if (
      a != null &&
      t != null &&
      n != null &&
      r != null &&
      i != null &&
      r.length !== 0 &&
      i.length !== 0 &&
      o != null
    ) {
      var { dataKey: d, data: f } = a,
        p = f != null && f.length > 0 ? f : c?.slice(l, u + 1);
      if (p != null)
        return hk({
          layout: e,
          xAxis: t,
          yAxis: n,
          xAxisTicks: r,
          yAxisTicks: i,
          dataKey: d,
          bandSize: o,
          displayedData: p,
        });
    }
  },
);
function BO(e) {
  var t = Ee(e),
    n = 3,
    r = 2;
  if (t != null) {
    var { r: i, strokeWidth: a } = t,
      o = Number(i),
      s = Number(a);
    return (
      (Number.isNaN(o) || o < 0) && (o = n),
      (Number.isNaN(s) || s < 0) && (s = r),
      { r: o, strokeWidth: s }
    );
  }
  return { r: n, strokeWidth: r };
}
var VO = [`id`],
  HO = [`type`, `layout`, `connectNulls`, `needClip`],
  UO = [
    `activeDot`,
    `animateNewValues`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `hide`,
    `isAnimationActive`,
    `label`,
    `legendType`,
    `xAxisId`,
    `yAxisId`,
    `id`,
  ];
function WO(e, t) {
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
function GO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? WO(Object(n), !0).forEach(function (t) {
          KO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : WO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function KO(e, t, n) {
  return (
    (t = qO(t)) in e
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
function qO(e) {
  var t = JO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function JO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function YO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = XO(e, t);
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
function XO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ZO() {
  return (
    (ZO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZO.apply(null, arguments)
  );
}
var QO = (e) => {
  var { dataKey: t, name: n, stroke: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Hs(n, t), payload: e },
  ];
};
function $O(e) {
  var {
    dataKey: t,
    data: n,
    stroke: r,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: s,
    unit: c,
  } = e;
  return {
    dataDefinedOnItem: n,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Hs(o, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: c,
    },
  };
}
var ek = (e, t) => `${t}px ${e - t}px`;
function tk(e, t) {
  for (var n = e.length % 2 == 0 ? e : [...e, 0], r = [], i = 0; i < t; ++i)
    r = [...r, ...n];
  return r;
}
var nk = (e, t, n) => {
  var r = n.reduce((e, t) => e + t);
  if (!r) return ek(t, e);
  for (
    var i = Math.floor(e / r), a = e % r, o = t - e, s = [], c = 0, l = 0;
    c < n.length;
    l += n[c], ++c
  )
    if (l + n[c] > a) {
      s = [...n.slice(0, c), a - l];
      break;
    }
  var u = s.length % 2 == 0 ? [0, o] : [o];
  return [...tk(n, i), ...s, ...u].map((e) => `${e}px`).join(`, `);
};
function rk(e, t) {
  var n;
  if (R.isValidElement(e)) n = R.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = L(`recharts-line-dot`, typeof e == `boolean` ? `` : e.className);
    n = R.createElement(ZC, ZO({}, t, { className: r }));
  }
  return n;
}
function ik(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function ak(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { dot: i, dataKey: a, needClip: o } = r;
  if (!ik(n, i)) return null;
  var { id: s } = r,
    c = YO(r, VO),
    l = dw(i),
    u = Te(c),
    d = Oe(i),
    f = n.map((e, t) =>
      rk(
        i,
        GO(
          GO(GO({ key: `dot-${t}`, r: 3 }, u), d),
          {},
          {
            index: t,
            cx: e.x,
            cy: e.y,
            dataKey: a,
            value: e.value,
            payload: e.payload,
            points: n,
          },
        ),
      ),
    ),
    p = { clipPath: o ? `url(#clipPath-${l ? `` : `dots-`}${t})` : void 0 };
  return R.createElement(
    Re,
    ZO({ className: `recharts-line-dots`, key: `dots` }, p),
    f,
  );
}
function ok(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = (0, R.useMemo)(
      () =>
        r?.map((e) => {
          var t = { x: e.x, y: e.y, width: 0, height: 0 };
          return GO(
            GO({}, t),
            {},
            {
              value: e.value,
              payload: e.payload,
              viewBox: t,
              parentViewBox: void 0,
              fill: void 0,
            },
          );
        }),
      [r],
    );
  return R.createElement(WC, { value: t ? i : null }, n);
}
function sk(e) {
  var {
      clipPathId: t,
      pathRef: n,
      points: r,
      strokeDasharray: i,
      props: a,
    } = e,
    { type: o, layout: s, connectNulls: c, needClip: l } = a,
    u = GO(
      GO({}, De(YO(a, HO))),
      {},
      {
        fill: `none`,
        className: `recharts-line-curve`,
        clipPath: l ? `url(#clipPath-${t})` : void 0,
        points: r,
        type: o,
        layout: s,
        connectNulls: c,
        strokeDasharray: i ?? a.strokeDasharray,
      },
    );
  return R.createElement(
    R.Fragment,
    null,
    r?.length > 1 && R.createElement(fl, ZO({}, u, { pathRef: n })),
    R.createElement(ak, { points: r, clipPathId: t, props: a }),
  );
}
function ck(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function lk(e) {
  var {
      clipPathId: t,
      props: n,
      pathRef: r,
      previousPointsRef: i,
      longestAnimatedLengthRef: a,
    } = e,
    {
      points: o,
      strokeDasharray: s,
      isAnimationActive: c,
      animationBegin: l,
      animationDuration: u,
      animationEasing: d,
      animateNewValues: f,
      width: p,
      height: m,
      onAnimationEnd: h,
      onAnimationStart: g,
    } = n,
    _ = i.current,
    v = hu(n, `recharts-line-`),
    [y, b] = (0, R.useState)(!1),
    x = !y,
    S = (0, R.useCallback)(() => {
      (typeof h == `function` && h(), b(!1));
    }, [h]),
    C = (0, R.useCallback)(() => {
      (typeof g == `function` && g(), b(!0));
    }, [g]),
    w = ck(r.current),
    T = a.current;
  return R.createElement(
    ok,
    { points: o, showLabels: x },
    n.children,
    R.createElement(
      mu,
      {
        animationId: v,
        begin: l,
        duration: u,
        isActive: c,
        easing: d,
        onAnimationEnd: S,
        onAnimationStart: C,
        key: v,
      },
      (e) => {
        var l = V(T, w + T, e),
          u = Math.min(l, w),
          d = c
            ? s
              ? nk(
                  u,
                  w,
                  `${s}`.split(/[,\s]+/gim).map((e) => parseFloat(e)),
                )
              : ek(w, u)
            : s == null
              ? void 0
              : String(s);
        if (_) {
          var h = _.length / o.length,
            g =
              e === 1
                ? o
                : o.map((t, n) => {
                    var r = Math.floor(n * h);
                    if (_[r]) {
                      var i = _[r];
                      return GO(
                        GO({}, t),
                        {},
                        { x: V(i.x, t.x, e), y: V(i.y, t.y, e) },
                      );
                    }
                    return f
                      ? GO(
                          GO({}, t),
                          {},
                          { x: V(p * 2, t.x, e), y: V(m / 2, t.y, e) },
                        )
                      : GO(GO({}, t), {}, { x: t.x, y: t.y });
                  });
          return (
            (i.current = g),
            R.createElement(sk, {
              props: n,
              points: g,
              clipPathId: t,
              pathRef: r,
              strokeDasharray: d,
            })
          );
        }
        return (
          e > 0 && w > 0 && ((i.current = o), (a.current = u)),
          R.createElement(sk, {
            props: n,
            points: o,
            clipPathId: t,
            pathRef: r,
            strokeDasharray: d,
          })
        );
      },
    ),
    R.createElement(YC, { label: n.label }),
  );
}
function uk(e) {
  var { clipPathId: t, props: n } = e,
    r = (0, R.useRef)(null),
    i = (0, R.useRef)(0),
    a = (0, R.useRef)(null);
  return R.createElement(lk, {
    props: n,
    clipPathId: t,
    previousPointsRef: r,
    longestAnimatedLengthRef: i,
    pathRef: a,
  });
}
var dk = (e, t) => ({
    x: e.x,
    y: e.y,
    value: e.value,
    errorVal: K(e.payload, t),
  }),
  fk = class extends R.Component {
    render() {
      var {
        hide: e,
        dot: t,
        points: n,
        className: r,
        xAxisId: i,
        yAxisId: a,
        top: o,
        left: s,
        width: c,
        height: l,
        id: u,
        needClip: d,
      } = this.props;
      if (e) return null;
      var f = L(`recharts-line`, r),
        p = u,
        { r: m, strokeWidth: h } = BO(t),
        g = dw(t),
        _ = m * 2 + h;
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(
          Re,
          { className: f },
          d &&
            R.createElement(
              `defs`,
              null,
              R.createElement(JT, { clipPathId: p, xAxisId: i, yAxisId: a }),
              !g &&
                R.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${p}` },
                  R.createElement(`rect`, {
                    x: s - _ / 2,
                    y: o - _ / 2,
                    width: c + _,
                    height: l + _,
                  }),
                ),
            ),
          R.createElement(
            KT,
            {
              xAxisId: i,
              yAxisId: a,
              data: n,
              dataPointFormatter: dk,
              errorBarOffset: 0,
            },
            R.createElement(uk, { props: this.props, clipPathId: p }),
          ),
        ),
        R.createElement(wT, {
          activeDot: this.props.activeDot,
          points: n,
          mainColor: this.props.stroke,
          itemDataKey: this.props.dataKey,
        }),
      );
    }
  },
  pk = {
    activeDot: !0,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !0,
    fill: `#fff`,
    hide: !1,
    isAnimationActive: !Qc.isSsr,
    label: !1,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
  };
function mk(e) {
  var t = Al(e, pk),
    {
      activeDot: n,
      animateNewValues: r,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      connectNulls: s,
      dot: c,
      hide: l,
      isAnimationActive: u,
      label: d,
      legendType: f,
      xAxisId: p,
      yAxisId: m,
      id: h,
    } = t,
    g = YO(t, UO),
    { needClip: _ } = qT(p, m),
    v = gT(),
    y = wc(),
    b = pc(),
    x = W((e) => zO(e, p, m, b, h));
  if ((y !== `horizontal` && y !== `vertical`) || x == null || v == null)
    return null;
  var { height: S, width: C, x: w, y: T } = v;
  return R.createElement(
    fk,
    ZO({}, g, {
      id: h,
      connectNulls: s,
      dot: c,
      activeDot: n,
      animateNewValues: r,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      isAnimationActive: u,
      hide: l,
      label: d,
      legendType: f,
      xAxisId: p,
      yAxisId: m,
      points: x,
      layout: y,
      height: S,
      width: C,
      left: w,
      top: T,
      needClip: _,
    }),
  );
}
function hk(e) {
  var {
    layout: t,
    xAxis: n,
    yAxis: r,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: s,
    displayedData: c,
  } = e;
  return c
    .map((e, c) => {
      var l = K(e, o);
      if (t === `horizontal`)
        return {
          x: Ms({ axis: n, ticks: i, bandSize: s, entry: e, index: c }),
          y: H(l) ? null : r.scale(l),
          value: l,
          payload: e,
        };
      var u = H(l) ? null : n.scale(l),
        d = Ms({ axis: r, ticks: a, bandSize: s, entry: e, index: c });
      return u == null || d == null
        ? null
        : { x: u, y: d, value: l, payload: e };
    })
    .filter(Boolean);
}
function gk(e) {
  var t = Al(e, pk),
    n = pc();
  return R.createElement(Kw, { id: t.id, type: `line` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(Hw, { legendPayload: QO(t) }),
      R.createElement(Bw, { fn: $O, args: t }),
      R.createElement(eT, {
        type: `line`,
        id: e,
        data: t.data,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        hide: t.hide,
        isPanorama: n,
      }),
      R.createElement(mk, ZO({}, t, { id: e })),
    ),
  );
}
var _k = R.memo(gk);
_k.displayName = `Line`;
var vk = (e, t, n, r) => Ry(e, `xAxis`, t, r),
  yk = (e, t, n, r) => Ly(e, `xAxis`, t, r),
  bk = (e, t, n, r) => Ry(e, `yAxis`, n, r),
  xk = (e, t, n, r) => Ly(e, `yAxis`, n, r),
  Sk = G([J, vk, bk, yk, xk], (e, t, n, r, i) =>
    Cs(e, `xAxis`) ? Bs(t, r, !1) : Bs(n, i, !1),
  ),
  Ck = G([$_, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `area`).find((e) => e.id === t),
  ),
  wk = G(
    [
      J,
      vk,
      bk,
      yk,
      xk,
      (e, t, n, r, i) => {
        var a = Ck(e, t, n, r, i);
        if (a != null) {
          var o = Cs(J(e), `xAxis`)
            ? yv(e, `yAxis`, n, r)
            : yv(e, `xAxis`, t, r);
          if (o != null) {
            var { stackId: s } = a,
              c = w_(a);
            if (s != null && c != null)
              return o[s]?.stackedData?.find((e) => e.key === c);
          }
        }
      },
      wg,
      Sk,
      Ck,
    ],
    (e, t, n, r, i, a, o, s, c) => {
      var { chartData: l, dataStartIndex: u, dataEndIndex: d } = o;
      if (
        !(
          c == null ||
          (e !== `horizontal` && e !== `vertical`) ||
          t == null ||
          n == null ||
          r == null ||
          i == null ||
          r.length === 0 ||
          i.length === 0 ||
          s == null
        )
      ) {
        var { data: f } = c,
          p = f && f.length > 0 ? f : l?.slice(u, d + 1);
        if (p != null)
          return Qk({
            layout: e,
            xAxis: t,
            yAxis: n,
            xAxisTicks: r,
            yAxisTicks: i,
            dataStartIndex: u,
            areaSettings: c,
            stackedData: a,
            displayedData: p,
            chartBaseValue: void 0,
            bandSize: s,
          });
      }
    },
  ),
  Tk = [`id`],
  Ek = [
    `activeDot`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `fill`,
    `fillOpacity`,
    `hide`,
    `isAnimationActive`,
    `legendType`,
    `stroke`,
    `xAxisId`,
    `yAxisId`,
  ];
function Dk(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ok(e, t);
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
function Ok(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function kk(e, t) {
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
function Ak(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kk(Object(n), !0).forEach(function (t) {
          jk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jk(e, t, n) {
  return (
    (t = Mk(t)) in e
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
function Mk(e) {
  var t = Nk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Pk() {
  return (
    (Pk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pk.apply(null, arguments)
  );
}
function Fk(e, t) {
  return e && e !== `none` ? e : t;
}
var Ik = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: Fk(r, i),
      value: Hs(n, t),
      payload: e,
    },
  ];
};
function Lk(e) {
  var {
    dataKey: t,
    data: n,
    stroke: r,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: s,
    unit: c,
  } = e;
  return {
    dataDefinedOnItem: n,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Hs(o, t),
      hide: s,
      type: e.tooltipType,
      color: Fk(r, a),
      unit: c,
    },
  };
}
var Rk = (e, t) => {
  var n;
  if (R.isValidElement(e)) n = R.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var r = L(`recharts-area-dot`, typeof e == `boolean` ? `` : e.className);
    n = R.createElement(ZC, Pk({}, t, { className: r }));
  }
  return n;
};
function zk(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function Bk(e) {
  var { clipPathId: t, points: n, props: r } = e,
    { needClip: i, dot: a, dataKey: o } = r;
  if (!zk(n, a)) return null;
  var s = dw(a),
    c = Te(r),
    l = Oe(a),
    u = n.map((e, t) =>
      Rk(
        a,
        Ak(
          Ak(Ak({ key: `dot-${t}`, r: 3 }, c), l),
          {},
          {
            index: t,
            cx: e.x,
            cy: e.y,
            dataKey: o,
            value: e.value,
            payload: e.payload,
            points: n,
          },
        ),
      ),
    ),
    d = { clipPath: i ? `url(#clipPath-${s ? `` : `dots-`}${t})` : void 0 };
  return R.createElement(Re, Pk({ className: `recharts-area-dots` }, d), u);
}
function Vk(e) {
  var { showLabels: t, children: n, points: r } = e,
    i = r.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return Ak(
        Ak({}, t),
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
  return R.createElement(WC, { value: t ? i : null }, n);
}
function Hk(e) {
  var { points: t, baseLine: n, needClip: r, clipPathId: i, props: a } = e,
    { layout: o, type: s, stroke: c, connectNulls: l, isRange: u } = a,
    { id: d } = a,
    f = Dk(a, Tk),
    p = Te(f);
  return R.createElement(
    R.Fragment,
    null,
    t?.length > 1 &&
      R.createElement(
        Re,
        { clipPath: r ? `url(#clipPath-${i})` : void 0 },
        R.createElement(
          fl,
          Pk({}, p, {
            id: d,
            points: t,
            connectNulls: l,
            type: s,
            baseLine: n,
            layout: o,
            stroke: `none`,
            className: `recharts-area-area`,
          }),
        ),
        c !== `none` &&
          R.createElement(
            fl,
            Pk({}, p, {
              className: `recharts-area-curve`,
              layout: o,
              type: s,
              connectNulls: l,
              fill: `none`,
              points: t,
            }),
          ),
        c !== `none` &&
          u &&
          R.createElement(
            fl,
            Pk({}, p, {
              className: `recharts-area-curve`,
              layout: o,
              type: s,
              connectNulls: l,
              fill: `none`,
              points: n,
            }),
          ),
      ),
    R.createElement(Bk, { points: t, props: f, clipPathId: i }),
  );
}
function Uk(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].y,
    o = r[r.length - 1].y;
  if (!q(a) || !q(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.x || 0));
  return (
    B(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.x || 0), c)),
    B(c)
      ? R.createElement(`rect`, {
          x: 0,
          y: a < o ? a : a - s,
          width: c + (i ? parseInt(`${i}`, 10) : 1),
          height: Math.floor(s),
        })
      : null
  );
}
function Wk(e) {
  var { alpha: t, baseLine: n, points: r, strokeWidth: i } = e,
    a = r[0].x,
    o = r[r.length - 1].x;
  if (!q(a) || !q(o)) return null;
  var s = t * Math.abs(a - o),
    c = Math.max(...r.map((e) => e.y || 0));
  return (
    B(n)
      ? (c = Math.max(n, c))
      : n &&
        Array.isArray(n) &&
        n.length &&
        (c = Math.max(...n.map((e) => e.y || 0), c)),
    B(c)
      ? R.createElement(`rect`, {
          x: a < o ? a : a - s,
          y: 0,
          width: s,
          height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1)),
        })
      : null
  );
}
function Gk(e) {
  var { alpha: t, layout: n, points: r, baseLine: i, strokeWidth: a } = e;
  return n === `vertical`
    ? R.createElement(Uk, { alpha: t, points: r, baseLine: i, strokeWidth: a })
    : R.createElement(Wk, { alpha: t, points: r, baseLine: i, strokeWidth: a });
}
function Kk(e) {
  var {
      needClip: t,
      clipPathId: n,
      props: r,
      previousPointsRef: i,
      previousBaselineRef: a,
    } = e,
    {
      points: o,
      baseLine: s,
      isAnimationActive: c,
      animationBegin: l,
      animationDuration: u,
      animationEasing: d,
      onAnimationStart: f,
      onAnimationEnd: p,
    } = r,
    m = hu(r, `recharts-area-`),
    [h, g] = (0, R.useState)(!1),
    _ = !h,
    v = (0, R.useCallback)(() => {
      (typeof p == `function` && p(), g(!1));
    }, [p]),
    y = (0, R.useCallback)(() => {
      (typeof f == `function` && f(), g(!0));
    }, [f]),
    b = i.current,
    x = a.current;
  return R.createElement(
    Vk,
    { showLabels: _, points: o },
    r.children,
    R.createElement(
      mu,
      {
        animationId: m,
        begin: l,
        duration: u,
        isActive: c,
        easing: d,
        onAnimationEnd: v,
        onAnimationStart: y,
        key: m,
      },
      (e) => {
        if (b) {
          var l = b.length / o.length,
            u =
              e === 1
                ? o
                : o.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (b[r]) {
                      var i = b[r];
                      return Ak(
                        Ak({}, t),
                        {},
                        { x: V(i.x, t.x, e), y: V(i.y, t.y, e) },
                      );
                    }
                    return t;
                  }),
            d = B(s)
              ? V(x, s, e)
              : H(s) || gn(s)
                ? V(x, 0, e)
                : s.map((t, n) => {
                    var r = Math.floor(n * l);
                    if (Array.isArray(x) && x[r]) {
                      var i = x[r];
                      return Ak(
                        Ak({}, t),
                        {},
                        { x: V(i.x, t.x, e), y: V(i.y, t.y, e) },
                      );
                    }
                    return t;
                  });
          return (
            e > 0 && ((i.current = u), (a.current = d)),
            R.createElement(Hk, {
              points: u,
              baseLine: d,
              needClip: t,
              clipPathId: n,
              props: r,
            })
          );
        }
        return (
          e > 0 && ((i.current = o), (a.current = s)),
          R.createElement(
            Re,
            null,
            c &&
              R.createElement(
                `defs`,
                null,
                R.createElement(
                  `clipPath`,
                  { id: `animationClipPath-${n}` },
                  R.createElement(Gk, {
                    alpha: e,
                    points: o,
                    baseLine: s,
                    layout: r.layout,
                    strokeWidth: r.strokeWidth,
                  }),
                ),
              ),
            R.createElement(
              Re,
              { clipPath: `url(#animationClipPath-${n})` },
              R.createElement(Hk, {
                points: o,
                baseLine: s,
                needClip: t,
                clipPathId: n,
                props: r,
              }),
            ),
          )
        );
      },
    ),
    R.createElement(YC, { label: r.label }),
  );
}
function qk(e) {
  var { needClip: t, clipPathId: n, props: r } = e,
    i = (0, R.useRef)(null),
    a = (0, R.useRef)();
  return R.createElement(Kk, {
    needClip: t,
    clipPathId: n,
    props: r,
    previousPointsRef: i,
    previousBaselineRef: a,
  });
}
var Jk = class extends R.PureComponent {
    render() {
      var {
        hide: e,
        dot: t,
        points: n,
        className: r,
        top: i,
        left: a,
        needClip: o,
        xAxisId: s,
        yAxisId: c,
        width: l,
        height: u,
        id: d,
        baseLine: f,
      } = this.props;
      if (e) return null;
      var p = L(`recharts-area`, r),
        m = d,
        { r: h, strokeWidth: g } = BO(t),
        _ = dw(t),
        v = h * 2 + g;
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(
          Re,
          { className: p },
          o &&
            R.createElement(
              `defs`,
              null,
              R.createElement(JT, { clipPathId: m, xAxisId: s, yAxisId: c }),
              !_ &&
                R.createElement(
                  `clipPath`,
                  { id: `clipPath-dots-${m}` },
                  R.createElement(`rect`, {
                    x: a - v / 2,
                    y: i - v / 2,
                    width: l + v,
                    height: u + v,
                  }),
                ),
            ),
          R.createElement(qk, {
            needClip: o,
            clipPathId: m,
            props: this.props,
          }),
        ),
        R.createElement(wT, {
          points: n,
          mainColor: Fk(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
        this.props.isRange &&
          Array.isArray(f) &&
          R.createElement(wT, {
            points: f,
            mainColor: Fk(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
          }),
      );
    }
  },
  Yk = {
    activeDot: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !1,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    hide: !1,
    isAnimationActive: !Qc.isSsr,
    legendType: `line`,
    stroke: `#3182bd`,
    xAxisId: 0,
    yAxisId: 0,
  };
function Xk(e) {
  var t = Al(e, Yk),
    {
      activeDot: n,
      animationBegin: r,
      animationDuration: i,
      animationEasing: a,
      connectNulls: o,
      dot: s,
      fill: c,
      fillOpacity: l,
      hide: u,
      isAnimationActive: d,
      legendType: f,
      stroke: p,
      xAxisId: m,
      yAxisId: h,
    } = t,
    g = Dk(t, Ek),
    _ = wc(),
    v = lx(),
    { needClip: y } = qT(m, h),
    b = pc(),
    {
      points: x,
      isRange: S,
      baseLine: C,
    } = W((t) => wk(t, m, h, b, e.id)) ?? {},
    w = gT();
  if (
    (_ !== `horizontal` && _ !== `vertical`) ||
    w == null ||
    (v !== `AreaChart` && v !== `ComposedChart`)
  )
    return null;
  var { height: T, width: E, x: D, y: O } = w;
  return !x || !x.length
    ? null
    : R.createElement(
        Jk,
        Pk({}, g, {
          activeDot: n,
          animationBegin: r,
          animationDuration: i,
          animationEasing: a,
          baseLine: C,
          connectNulls: o,
          dot: s,
          fill: c,
          fillOpacity: l,
          height: T,
          hide: u,
          layout: _,
          isAnimationActive: d,
          isRange: S,
          legendType: f,
          needClip: y,
          points: x,
          stroke: p,
          width: E,
          left: D,
          top: O,
          xAxisId: m,
          yAxisId: h,
        }),
      );
}
var Zk = (e, t, n, r, i) => {
  var a = n ?? t;
  if (B(a)) return a;
  var o = e === `horizontal` ? i : r,
    s = o.scale.domain();
  if (o.type === `number`) {
    var c = Math.max(s[0], s[1]),
      l = Math.min(s[0], s[1]);
    return a === `dataMin`
      ? l
      : a === `dataMax` || c < 0
        ? c
        : Math.max(Math.min(s[0], s[1]), 0);
  }
  return a === `dataMin` ? s[0] : a === `dataMax` ? s[1] : s[0];
};
function Qk(e) {
  var {
      areaSettings: { connectNulls: t, baseValue: n, dataKey: r },
      stackedData: i,
      layout: a,
      chartBaseValue: o,
      xAxis: s,
      yAxis: c,
      displayedData: l,
      dataStartIndex: u,
      xAxisTicks: d,
      yAxisTicks: f,
      bandSize: p,
    } = e,
    m = i && i.length,
    h = Zk(a, o, n, s, c),
    g = a === `horizontal`,
    _ = !1,
    v = l.map((e, n) => {
      var a;
      m
        ? (a = i[u + n])
        : ((a = K(e, r)), Array.isArray(a) ? (_ = !0) : (a = [h, a]));
      var o = a[1] == null || (m && !t && K(e, r) == null);
      return g
        ? {
            x: Ms({ axis: s, ticks: d, bandSize: p, entry: e, index: n }),
            y: o ? null : c.scale(a[1]),
            value: a,
            payload: e,
          }
        : {
            x: o ? null : s.scale(a[1]),
            y: Ms({ axis: c, ticks: f, bandSize: p, entry: e, index: n }),
            value: a,
            payload: e,
          };
    });
  return {
    points: v,
    baseLine:
      m || _
        ? v.map((e) => {
            var t = Array.isArray(e.value) ? e.value[0] : null;
            return g
              ? {
                  x: e.x,
                  y: t != null && e.y != null ? c.scale(t) : null,
                  payload: e.payload,
                }
              : {
                  x: t == null ? null : s.scale(t),
                  y: e.y,
                  payload: e.payload,
                };
          })
        : g
          ? c.scale(h)
          : s.scale(h),
    isRange: _,
  };
}
function $k(e) {
  var t = Al(e, Yk),
    n = pc();
  return R.createElement(Kw, { id: t.id, type: `area` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(Hw, { legendPayload: Ik(t) }),
      R.createElement(Bw, { fn: Lk, args: t }),
      R.createElement(eT, {
        type: `area`,
        id: e,
        data: t.data,
        dataKey: t.dataKey,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        stackId: js(t.stackId),
        hide: t.hide,
        barSize: void 0,
        baseValue: t.baseValue,
        isPanorama: n,
        connectNulls: t.connectNulls,
      }),
      R.createElement(Xk, Pk({}, t, { id: e })),
    ),
  );
}
var eA = R.memo($k);
eA.displayName = `Area`;
var tA = [`dangerouslySetInnerHTML`, `ticks`],
  nA = [`id`],
  rA = [`domain`],
  iA = [`domain`];
function aA() {
  return (
    (aA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    aA.apply(null, arguments)
  );
}
function oA(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = sA(e, t);
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
function sA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function cA(e) {
  var t = U();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(sT(e)),
        () => {
          t(cT(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var lA = (e) => {
    var { xAxisId: t, className: n } = e,
      r = W(dc),
      i = pc(),
      a = `xAxis`,
      o = W((e) => my(e, a, t, i)),
      s = W((e) => Iy(e, a, t, i)),
      c = W((e) => Sy(e, t)),
      l = W((e) => Dy(e, t)),
      u = W((e) => V_(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = oA(e, tA),
      { id: m } = u,
      h = oA(u, nA);
    return R.createElement(
      lO,
      aA({}, p, h, {
        scale: o,
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: L(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  uA = {
    allowDataOverflow: B_.allowDataOverflow,
    allowDecimals: B_.allowDecimals,
    allowDuplicatedCategory: B_.allowDuplicatedCategory,
    height: B_.height,
    hide: !1,
    mirror: B_.mirror,
    orientation: B_.orientation,
    padding: B_.padding,
    reversed: B_.reversed,
    scale: B_.scale,
    tickCount: B_.tickCount,
    type: B_.type,
    xAxisId: 0,
  },
  dA = R.memo(
    (e) => {
      var t = Al(e, uA);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(cA, {
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
        R.createElement(lA, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = oA(e, rA),
        { domain: i } = t;
      return DD(r, oA(t, iA))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : DD({ domain: n }, { domain: i })
        : !1;
    },
  );
dA.displayName = `XAxis`;
var fA = [`dangerouslySetInnerHTML`, `ticks`],
  pA = [`id`],
  mA = [`domain`],
  hA = [`domain`];
function gA() {
  return (
    (gA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gA.apply(null, arguments)
  );
}
function _A(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vA(e, t);
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
function vA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function yA(e) {
  var t = U();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(lT(e)),
        () => {
          t(uT(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var bA = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, R.useRef)(null),
      o = (0, R.useRef)(null),
      s = W(dc),
      c = pc(),
      l = U(),
      u = `yAxis`,
      d = W((e) => my(e, u, t, c)),
      f = W((e) => ky(e, t)),
      p = W((e) => Oy(e, t)),
      m = W((e) => Iy(e, u, t, c)),
      h = W((e) => W_(e, t));
    if (
      ((0, R.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            CC(i) ||
            (0, R.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(pT({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = _A(e, fA),
      { id: y } = h,
      b = _A(h, pA);
    return R.createElement(
      lO,
      gA({}, v, b, {
        ref: a,
        labelRef: o,
        scale: d,
        x: p.x,
        y: p.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: f.width,
        height: f.height,
        className: L(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: m,
      }),
    );
  },
  xA = {
    allowDataOverflow: U_.allowDataOverflow,
    allowDecimals: U_.allowDecimals,
    allowDuplicatedCategory: U_.allowDuplicatedCategory,
    hide: !1,
    mirror: U_.mirror,
    orientation: U_.orientation,
    padding: U_.padding,
    reversed: U_.reversed,
    scale: U_.scale,
    tickCount: U_.tickCount,
    type: U_.type,
    width: U_.width,
    yAxisId: 0,
  },
  SA = R.memo(
    (e) => {
      var t = Al(e, xA);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(yA, {
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
        R.createElement(bA, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = _A(e, mA),
        { domain: i } = t;
      return DD(r, _A(t, hA))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : DD({ domain: n }, { domain: i })
        : !1;
    },
  );
((SA.displayName = `YAxis`), b());
function CA(e) {
  e();
}
function wA() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      CA(() => {
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
var TA = { notify() {}, get: () => [] };
function EA(e, t) {
  let n,
    r = TA,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = wA())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = TA)));
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
var DA =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  OA = typeof navigator < `u` && navigator.product === `ReactNative`,
  kA = DA || OA ? R.useLayoutEffect : R.useEffect,
  AA = Symbol.for(`react-redux-context`),
  jA = typeof globalThis < `u` ? globalThis : {};
function MA() {
  if (!R.createContext) return {};
  let e = (jA[AA] ??= new Map()),
    t = e.get(R.createContext);
  return (t || ((t = R.createContext(null)), e.set(R.createContext, t)), t);
}
var NA = MA();
function PA(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = R.useMemo(() => {
      let e = EA(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = R.useMemo(() => i.getState(), [i]);
  kA(() => {
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
  let s = n || NA;
  return R.createElement(s.Provider, { value: a }, t);
}
var FA = PA,
  IA = G([(e, t) => t, J, x_, T_, Hb, Wb, px, lc], Cx),
  LA = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  RA = Oa(`mouseClick`),
  zA = qo();
zA.startListening({
  actionCreator: RA,
  effect: (e, t) => {
    var n = e.payload,
      r = IA(t.getState(), LA(n));
    r?.activeIndex != null &&
      t.dispatch(
        rb({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var BA = Oa(`mouseMove`),
  VA = qo();
VA.startListening({
  actionCreator: BA,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = Uy(r, r.tooltip.settings.shared),
      a = IA(r, LA(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(eb())
        : t.dispatch(
            nb({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function HA(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var UA = {
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
  WA = ao({
    name: `rootProps`,
    initialState: UA,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? UA.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  GA = WA.reducer,
  { updateOptions: KA } = WA.actions,
  qA = ao({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: JA } = qA.actions,
  YA = qA.reducer,
  XA = Oa(`keyDown`),
  ZA = Oa(`focus`),
  QA = qo();
(QA.startListening({
  actionCreator: XA,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(hb(r, Ab(n))),
          o = Wb(n);
        if (i === `Enter`) {
          var s = vx(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            ab({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = zy(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = vx(n, `axis`, `hover`, String(l));
            t.dispatch(
              ab({
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
  QA.startListening({
    actionCreator: ZA,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = vx(n, `axis`, `hover`, String(i));
          t.dispatch(
            ab({
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
var $A = Oa(`externalEvent`),
  ej = qo();
ej.startListening({
  actionCreator: $A,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: $b(n),
          activeDataKey: Zb(n),
          activeIndex: Yb(n),
          activeLabel: Xb(n),
          activeTooltipIndex: Yb(n),
          isTooltipActive: ex(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var tj = G(
    [G([yb], (e) => e.tooltipItemPayloads), vb, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  nj = Oa(`touchMove`),
  rj = qo();
rj.startListening({
  actionCreator: nj,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = Uy(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = IA(
        r,
        LA({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          nb({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Qs),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = tj(t.getState(), c, l);
      t.dispatch(Qy({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var ij = ai({
    brush: qE,
    cartesianAxis: mT,
    chartData: qx,
    errorBars: VT,
    graphicalItems: $w,
    layout: es,
    legend: jc,
    options: Bx,
    polarAxis: rw,
    polarOptions: YA,
    referenceElements: dD,
    rootProps: GA,
    tooltip: ob,
  }),
  aj = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return za({
      reducer: ij,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          zA.middleware,
          VA.middleware,
          QA.middleware,
          ej.middleware,
          rj.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(La({ type: `raf` }))
        );
      },
      devTools: Qc.devToolsEnabled && {
        serialize: { replacer: HA },
        name: `recharts-${t}`,
      },
    });
  };
function oj(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = pc(),
    a = (0, R.useRef)(null);
  if (i) return n;
  a.current ??= aj(t, r);
  var o = br;
  return R.createElement(FA, { context: o, store: a.current }, n);
}
function sj(e) {
  var { layout: t, margin: n } = e,
    r = U(),
    i = pc();
  return (
    (0, R.useEffect)(() => {
      i || (r(Zo(t)), r(Xo(n)));
    }, [r, i, t, n]),
    null
  );
}
function cj(e) {
  var t = U();
  return (
    (0, R.useEffect)(() => {
      t(KA(e));
    }, [t, e]),
    null
  );
}
var lj = [`children`];
function uj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = dj(e, t);
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
function dj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function fj() {
  return (
    (fj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fj.apply(null, arguments)
  );
}
var pj = { width: `100%`, height: `100%`, display: `block` },
  mj = (0, R.forwardRef)((e, t) => {
    var n = Sc(),
      r = Cc(),
      i = $c();
    if (!gc(n) || !gc(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return R.createElement(
      Ne,
      fj({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: pj,
        ref: t,
      }),
      a,
    );
  }),
  hj = (e) => {
    var { children: t } = e,
      n = W(hc);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return R.createElement(Ne, { width: r, height: i, x: o, y: a }, t);
  },
  gj = (0, R.forwardRef)((e, t) => {
    var { children: n } = e,
      r = uj(e, lj);
    return pc()
      ? R.createElement(hj, null, n)
      : R.createElement(mj, fj({ ref: t }, r), n);
  });
function _j() {
  var e = U(),
    [t, n] = (0, R.useState)(null),
    r = W(Js);
  return (
    (0, R.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        q(n) && n !== r && e($o(n));
      }
    }, [t, e, r]),
    n
  );
}
function vj(e, t) {
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
function yj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vj(Object(n), !0).forEach(function (t) {
          bj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bj(e, t, n) {
  return (
    (t = xj(t)) in e
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
function xj(e) {
  var t = Sj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cj() {
  return (
    (Cj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cj.apply(null, arguments)
  );
}
var wj = () => (aS(), null);
function Tj(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var Ej = (0, R.forwardRef)((e, t) => {
    var n = (0, R.useRef)(null),
      [r, i] = (0, R.useState)({
        containerWidth: Tj(e.style?.width),
        containerHeight: Tj(e.style?.height),
      }),
      a = (0, R.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, R.useCallback)(
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
      (0, R.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      R.createElement(
        R.Fragment,
        null,
        R.createElement(Tc, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        R.createElement(`div`, Cj({ ref: o }, e)),
      )
    );
  }),
  Dj = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, R.useState)({
        containerWidth: Tj(n),
        containerHeight: Tj(r),
      }),
      o = (0, R.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, R.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return R.createElement(
      R.Fragment,
      null,
      R.createElement(Tc, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      R.createElement(`div`, Cj({ ref: s }, e)),
    );
  }),
  Oj = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return R.createElement(
      R.Fragment,
      null,
      R.createElement(Tc, { width: n, height: r }),
      R.createElement(`div`, Cj({ ref: t }, e)),
    );
  }),
  kj = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return _n(n) || _n(r)
      ? R.createElement(Dj, Cj({}, e, { ref: t }))
      : R.createElement(Oj, Cj({}, e, { ref: t }));
  });
function Aj(e) {
  return e === !0 ? Ej : kj;
}
var jj = (0, R.forwardRef)((e, t) => {
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
      b = (0, R.useRef)(null),
      x = U(),
      [S, C] = (0, R.useState)(null),
      [w, T] = (0, R.useState)(null),
      E = _j(),
      D = vc(),
      O = D?.width > 0 ? D.width : _,
      k = D?.height > 0 ? D.height : i,
      A = (0, R.useCallback)(
        (e) => {
          (E(e),
            typeof t == `function` && t(e),
            C(e),
            T(e),
            e != null && (b.current = e));
        },
        [E, t, C, T],
      ),
      j = (0, R.useCallback)(
        (e) => {
          (x(RA(e)), x($A({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      ee = (0, R.useCallback)(
        (e) => {
          (x(BA(e)), x($A({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      M = (0, R.useCallback)(
        (e) => {
          (x(eb()), x($A({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      te = (0, R.useCallback)(
        (e) => {
          (x(BA(e)), x($A({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      ne = (0, R.useCallback)(() => {
        x(ZA());
      }, [x]),
      N = (0, R.useCallback)(
        (e) => {
          x(XA(e.key));
        },
        [x],
      ),
      P = (0, R.useCallback)(
        (e) => {
          x($A({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      F = (0, R.useCallback)(
        (e) => {
          x($A({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      re = (0, R.useCallback)(
        (e) => {
          x($A({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      ie = (0, R.useCallback)(
        (e) => {
          x($A({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      I = (0, R.useCallback)(
        (e) => {
          x($A({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      ae = (0, R.useCallback)(
        (e) => {
          (y && x(nj(e)), x($A({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      oe = (0, R.useCallback)(
        (e) => {
          x($A({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      se = Aj(v);
    return R.createElement(
      Mx.Provider,
      { value: S },
      R.createElement(
        ze.Provider,
        { value: w },
        R.createElement(
          se,
          {
            width: O ?? g?.width,
            height: k ?? g?.height,
            className: L(`recharts-wrapper`, r),
            style: yj(
              { position: `relative`, cursor: `default`, width: O, height: k },
              g,
            ),
            onClick: j,
            onContextMenu: P,
            onDoubleClick: F,
            onFocus: ne,
            onKeyDown: N,
            onMouseDown: re,
            onMouseEnter: ee,
            onMouseLeave: M,
            onMouseMove: te,
            onMouseUp: ie,
            onTouchEnd: oe,
            onTouchMove: ae,
            onTouchStart: I,
            ref: A,
          },
          R.createElement(wj, null),
          n,
        ),
      ),
    );
  }),
  Mj = [
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
function Nj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Pj(e, t);
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
function Pj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Fj = (0, R.forwardRef)((e, t) => {
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
    d = Te(Nj(e, Mj));
  return c
    ? R.createElement(
        R.Fragment,
        null,
        R.createElement(Tc, { width: n, height: r }),
        R.createElement(gj, { otherAttributes: d, title: l, desc: u }, a),
      )
    : R.createElement(
        jj,
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
        R.createElement(
          gj,
          { otherAttributes: d, title: l, desc: u, ref: t },
          R.createElement(pD, null, a),
        ),
      );
});
function Ij() {
  return (
    (Ij = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ij.apply(null, arguments)
  );
}
var Lj = {
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
  Rj = (0, R.forwardRef)(function (e, t) {
    var n = Al(e.categoricalChartProps, Lj),
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
    return R.createElement(
      oj,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      R.createElement(UE, { chartData: s.data }),
      R.createElement(sj, { layout: n.layout, margin: n.margin }),
      R.createElement(cj, {
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
      R.createElement(Fj, Ij({}, n, { ref: t })),
    );
  }),
  zj = [`axis`],
  Bj = (0, R.forwardRef)((e, t) =>
    R.createElement(Rj, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: zj,
      tooltipPayloadSearcher: Rx,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  Q = u();
function Vj(e) {
  let { children: t } = e;
  return (0, Q.jsx)(_S, {
    isAnimationActive: !1,
    content: (e) =>
      (0, Q.jsx)(se, {
        background: `dull-7`,
        radius: `md`,
        padding: `2`,
        elevation: `1`,
        children: typeof t == `function` ? t(e) : t,
      }),
  });
}
R.memo(function () {
  return (0, Q.jsx)(jO, { stroke: `#FFFFFF10` });
});
function Hj(e) {
  let [t, n] = (0, R.useState)(null);
  return {
    props: {
      onMouseDown: (e, t) => {
        e.activeCoordinate &&
          (n([e, e]), t.preventDefault(), t.stopPropagation());
      },
      onMouseUp: (r, i) => {
        if (
          t &&
          r.activeCoordinate &&
          t[0].activeCoordinate.x !== r.activeCoordinate.x
        ) {
          let n = t[0];
          n.activeCoordinate.x < r.activeCoordinate.x
            ? e.onSelection(n, r)
            : e.onSelection(r, n);
        }
        n(null);
      },
      onMouseMove: t ? (e) => n((t) => t && [t[0], e]) : void 0,
    },
    activeDrag: t,
  };
}
function Uj(e) {
  let { dataKey: t, color: n, numPoints: r, ...i } = e;
  return (0, Q.jsx)(_k, {
    dataKey: t,
    stroke: n,
    dot: r === 1,
    strokeWidth: 2,
    yAxisId: `price`,
    isAnimationActive: !1,
    connectNulls: !0,
    ...i,
  });
}
function Wj(e) {
  let { scale: t, dataKey: n } = e,
    r = {
      dataKey: n,
      fill: `var(--color-blue-9)`,
      opacity: 0.25,
      yAxisId: `purchases`,
      isAnimationActive: !1,
    };
  return t === `lifetime`
    ? (0, Q.jsx)(eA, { ...r, connectNulls: !0 })
    : (0, Q.jsx)(CE, { ...r });
}
function Gj() {
  typeof FS == `function`
    ? FS({
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
var $ = e(i(), 1),
  Kj = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webcookie || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { webcookie: { n: 1, br: F.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Request`;
    }
  },
  qj = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allowed || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allowed: { n: 1, br: F.readBool, bw: P.writeBool },
            reason: { n: 2, br: F.readUint32, bw: P.writeUint32 },
            allowed_at_time: { n: 3, br: F.readUint32, bw: P.writeUint32 },
            steamguard_required_days: {
              n: 4,
              br: F.readUint32,
              bw: P.writeUint32,
            },
            forms_requested: { n: 7, br: F.readBool, bw: P.writeBool },
            forms_require_verification: {
              n: 8,
              br: F.readBool,
              bw: P.writeBool,
            },
            new_device_cooldown_days: {
              n: 9,
              br: F.readUint32,
              bw: P.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Response`;
    }
  },
  Jj;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`EconMarket.IsMarketplaceAllowed#1`, O(Kj, t, n), qj, {
      ePrivilege: 1,
    });
  }
  e.IsMarketplaceAllowed = t;
})((Jj ||= {}));
var Yj = { resultsView: `grid`, priceTimeScale: `month`, searchSort: 0 },
  Xj = (0, R.createContext)({
    prefs: Yj,
    onChange: () =>
      console.error(
        `Cannot update market display preferences. Missing provider.`,
      ),
  });
function Zj(e) {
  let { prefs: t, onChange: n, children: r } = e,
    i = (0, R.useRef)(t);
  i.current = t;
  let a = (0, R.useMemo)(() => ({ ...Yj, ...t }), [t]),
    o = (0, R.useCallback)(
      (e) => {
        let t = (e) => {
          let t = { ...e };
          for (let [e, n] of Object.entries(Yj)) t[e] === n && delete t[e];
          return t;
        };
        n(
          typeof e == `function`
            ? (n) => {
                let r = e({ ...Yj, ...n });
                return t(r);
              }
            : e,
        );
      },
      [n],
    ),
    s = (0, R.useMemo)(() => ({ prefs: a, onChange: o }), [a, o]);
  return (0, Q.jsx)(Xj, { value: s, children: r });
}
function Qj() {
  let { prefs: e, onChange: t } = (0, R.useContext)(Xj);
  return [e, t];
}
function $j(e) {
  let [t, n] = Qj();
  return [
    e === `resultsView` ? `grid` : t[e],
    (0, R.useCallback)((t) => n((n) => ({ ...n, [e]: t })), [n, e]),
  ];
}
var eM = 86400,
  tM = 604800;
Gj();
var nM = { week: eM / 4, month: eM, year: tM, lifetime: tM };
function rM(e, t) {
  let n = new Date(e * 1e3);
  switch (t) {
    case `week`:
      n.setDate(n.getDate() - 7);
      break;
    case `month`:
      n.setMonth(n.getMonth() - 1);
      break;
    case `year`:
    case `lifetime`:
      n.setFullYear(n.getFullYear() - 1);
      break;
    default:
      ae(t, `Unhandled graph scale: ${t}`);
  }
  return Math.floor(n.getTime() / 1e3);
}
function iM(e) {
  let { priceHistory: t, height: n } = e,
    [r, i] = $j(`priceTimeScale`),
    a = dM(t, r),
    o = (0, R.useMemo)(
      () => a.reduce((e, t) => e + +(t.purchases > 0), 0),
      [a],
    );
  return (0, Q.jsxs)(aM, {
    currency: t.ecurrency,
    data: a,
    scale: r,
    onScaleChange: i,
    height: n,
    children: [
      (0, Q.jsx)(Uj, {
        dataKey: `price`,
        color: `var(--color-green-9)`,
        numPoints: o,
      }),
      (0, Q.jsx)(Wj, { dataKey: `purchases`, scale: r }),
      a.length === 0 &&
        (0, Q.jsx)(AC, {
          position: `center`,
          children: g.Localize(`#Graph_NoData`),
        }),
    ],
  });
}
function aM(e) {
  let {
      children: t,
      currency: n,
      data: r,
      scale: i,
      onScaleChange: a,
      tooltipComponent: o,
      height: s,
    } = e,
    c = i === `week` || i === `month`,
    l = new Intl.DateTimeFormat(void 0, {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: c ? `numeric` : void 0,
    }),
    [u, f] = (0, R.useState)(null),
    { props: p, activeDrag: m } = Hj({
      onSelection: (e, t) =>
        e.activeLabel && t.activeLabel && f([e.activeLabel, t.activeLabel]),
    }),
    h = !!a,
    _ = (e) => {
      (f(null), a && a(e));
    },
    y = !le(`sm`),
    b =
      h &&
      (0, Q.jsx)(v, {
        value: u ? null : i,
        onValueChange: _,
        options: [`week`, `month`, `year`, `lifetime`],
        getOptionLabel: uM,
        radius: `sm`,
        variant: `dim`,
      });
  return (0, Q.jsxs)(se, {
    children: [
      (0, Q.jsxs)(N, {
        align: `end`,
        justify: `between`,
        marginBottom: `2`,
        children: [
          (0, Q.jsx)(d, {
            size: `5`,
            contrast: `subtitle`,
            children: g.Localize(`#MedianSalePrice_Graph_Title`),
          }),
          !y &&
            (0, Q.jsxs)(N, {
              justify: `center`,
              gap: `2`,
              children: [
                u &&
                  (0, Q.jsxs)(ne, {
                    color: `dull`,
                    onClick: () => f(null),
                    children: [
                      (0, Q.jsxs)(A, {
                        size: `2`,
                        contrast: `title`,
                        children: [
                          l.format(u[0] * 1e3),
                          ` - `,
                          l.format(u[1] * 1e3),
                        ],
                      }),
                      (0, Q.jsx)(re, { marginLeft: `2` }),
                    ],
                  }),
                b,
              ],
            }),
        ],
      }),
      (0, Q.jsx)(se, {
        background: `dull-6`,
        padding: { initial: `1`, sm: `4` },
        paddingTop: `5`,
        children: (0, Q.jsxs)(Bj, {
          style: {
            width: `100%`,
            ...(s
              ? { height: s }
              : { maxHeight: `min( 70vh, 350px )`, minHeight: `320px` }),
            fontSize: `var(--text-size-3)`,
          },
          data: r,
          responsive: !0,
          ...p,
          margin: y ? void 0 : { left: 20, right: 20 },
          children: [
            (0, Q.jsx)(oM, {
              currency: n,
              scale: i,
              customDomain: u,
              tooltipComponent: o,
            }),
            m &&
              (0, Q.jsx)(ED, {
                x1: m[0].activeLabel,
                x2: m[1].activeLabel,
                fill: `#FFFFFF`,
                fillOpacity: 0.3,
                yAxisId: `price`,
                ifOverflow: `visible`,
              }),
            t,
          ],
        }),
      }),
      y && (0, Q.jsx)(se, { marginTop: `2`, children: b }),
    ],
  });
}
var oM = R.memo(function (e) {
    let { scale: t, currency: n, customDomain: r, tooltipComponent: i } = e,
      [
        {
          rtMount: a,
          dayDateFormatter: o,
          hourDateFormatter: s,
          numberFormatter: c,
        },
      ] = (0, R.useState)(() => ({
        rtMount: Math.floor(Date.now() / 1e3),
        dayDateFormatter: new Intl.DateTimeFormat(ee(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: void 0,
        }),
        hourDateFormatter: new Intl.DateTimeFormat(ee(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: `numeric`,
        }),
        numberFormatter: new Intl.NumberFormat(ee()),
      })),
      l = i || cM,
      u = t === `week` || t === `month` ? s : o,
      d = (0, R.useCallback)((e) => c.format(e), [c]),
      f = (0, R.useCallback)((e) => C(Math.round(e * 100), n), [n]);
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(sM, {
          dateFormatter: u,
          mountTime: a,
          scale: t,
          customDomain: r,
        }),
        (0, Q.jsx)(SA, {
          yAxisId: `price`,
          tickMargin: 3,
          tickFormatter: f,
          width: `auto`,
          children: (0, Q.jsx)(AC, {
            angle: -90,
            position: `left`,
            offset: 10,
            fill: `var(--color-green-8)`,
            children: g.Localize(`#Graph_Label_Price`),
          }),
        }),
        (0, Q.jsx)(SA, {
          yAxisId: `purchases`,
          tickMargin: 3,
          orientation: `right`,
          tickFormatter: d,
          width: `auto`,
          allowDecimals: !1,
          children: (0, Q.jsx)(AC, {
            angle: 90,
            position: `right`,
            offset: 10,
            fill: `var(--color-blue-8)`,
            children: g.Localize(`#Graph_Label_Volume`),
          }),
        }),
        (0, Q.jsx)(l, { dateFormatter: u, currency: n }),
      ],
    });
  }),
  sM = R.memo(function (e) {
    let { dateFormatter: t, mountTime: n, scale: r, customDomain: i } = e,
      a = (0, R.useMemo)(
        () => [
          (e) => Math.min(e - nM[r], rM(n, r)),
          (e) => Math.max(e + nM[r], n),
        ],
        [n, r],
      ),
      o = i || a,
      s = (0, R.useCallback)((e) => t.format(e * 1e3), [t]);
    return (0, Q.jsx)(dA, {
      dataKey: `time`,
      tickMargin: 3,
      minTickGap: 24,
      tickFormatter: s,
      scale: `time`,
      type: `number`,
      domain: o,
      allowDataOverflow: !0,
    });
  });
function cM(e) {
  let {
      dateFormatter: t,
      currency: n,
      priceKey: r = `price`,
      purchasesKey: i = `purchases`,
    } = e,
    a = new Intl.NumberFormat();
  return (0, Q.jsx)(Vj, {
    children: (e) => {
      if (!e.active || !e.payload?.length || !e.payload[0].payload) return null;
      let o = e.payload[0].payload,
        s = o[r],
        c = o[i],
        l = o.time;
      if (s === void 0 || c === void 0) return null;
      let u = C(Math.round(s * 100), n),
        d = g.Localize(`#Graph_NumberSold`, a.format(c)),
        f = t.format(l * 1e3);
      return (0, Q.jsxs)(N, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, Q.jsx)(A, { weight: `medium`, contrast: `title`, children: f }),
          (0, Q.jsx)(A, { contrast: `title`, children: u }),
          (0, Q.jsx)(A, { contrast: `title`, children: d }),
        ],
      });
    },
  });
}
var lM = {
  week: `#Graph_TimeScale_Week`,
  month: `#Graph_TimeScale_Month`,
  year: `#Graph_TimeScale_Year`,
  lifetime: `#Graph_TimeScale_Lifetime`,
};
function uM(e) {
  return g.Localize(lM[e]);
}
function dM(e, t) {
  let [n] = (0, R.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, R.useMemo)(() => fM(e, n), [e, n])[t];
}
function fM(e, t) {
  let n = { week: [], month: [], year: [], lifetime: [] },
    r,
    i = new Date();
  i.setDate(i.getDate() - 7);
  let a = Math.floor(i.getTime() / 1e3),
    o = new Date();
  o.setMonth(o.getMonth() - 1);
  let s = Math.floor(o.getTime() / 1e3),
    c = new Date();
  c.setFullYear(c.getFullYear() - 1);
  let l = Math.floor(c.getTime() / 1e3);
  for (let t of e.prices || []) {
    let e = yM(t);
    (t.time >= a && n.week.push(e), t.time >= s && n.month.push(e));
    let i = !!r && _M(r.time, e.time);
    if (t.time >= l) {
      if (!i) n.year.push(e);
      else {
        let t = n.year[n.year.length - 1];
        Array.isArray(t) ? t.push(e) : (n.year[n.year.length - 1] = [t, e]);
      }
    }
    if (!i) n.lifetime.push(e);
    else {
      let t = n.lifetime[n.lifetime.length - 1];
      Array.isArray(t)
        ? t.push(e)
        : (n.lifetime[n.lifetime.length - 1] = [t, e]);
    }
    r = e;
  }
  let u = (e, n) => {
    if (n.length === 0) return [];
    let r = n.map((e) => (Array.isArray(e) ? bM(e) : e));
    return [...mM(e, t, r), ...pM(e, r), ...hM(e, t, r)];
  };
  return {
    week: u(`week`, n.week),
    month: u(`month`, n.month),
    year: u(`year`, n.year),
    lifetime: u(`lifetime`, n.lifetime),
  };
}
function pM(e, t) {
  if (t.length <= 1) return t;
  let n = [t[0]];
  for (let r = 1; r < t.length; r++) {
    let i = t[r - 1],
      a = t[r],
      o = i.time + nM[e];
    for (; o < a.time && !gM(o, a.time, e);)
      (n.push({ time: o, price: void 0, purchases: 0 }), (o += nM[e]));
    n.push(a);
  }
  return n;
}
function mM(e, t, n) {
  let r = rM(t, e);
  if (!n.length || gM(r, n[0].time, e)) return [];
  let i = n[0].time - nM[e],
    a = [];
  for (; i >= r;)
    (a.push({ time: i, price: void 0, purchases: 0 }), (i -= nM[e]));
  return a.reverse();
}
function hM(e, t, n) {
  if (!n.length || gM(t, n[n.length - 1].time, e)) return [];
  let r = t,
    i = [],
    a = n[n.length - 1].time;
  for (; r > a && !gM(r, a, e);)
    (i.push({ time: r, price: void 0, purchases: 0 }), (r -= nM[e]));
  return i.reverse();
}
function gM(e, t, n) {
  switch (n) {
    case `lifetime`:
    case `year`:
      return _M(e, t);
    case `month`:
    case `week`:
      return vM(e, t);
    default:
      return (ae(n, `Unhandled time scale "${n}"`), !1);
  }
}
function _M(e, t) {
  let n = new Date(e * 1e3),
    r = new Date(t * 1e3);
  return (
    n.getFullYear() === r.getFullYear() &&
    n.getMonth() === r.getMonth() &&
    n.getDate() === r.getDate()
  );
}
function vM(e, t) {
  return (
    _M(e, t) && new Date(e * 1e3).getHours() === new Date(t * 1e3).getHours()
  );
}
function yM(e) {
  return { time: e.time, price: e.price_median, purchases: e.purchases };
}
function bM(e) {
  if (
    (oe(e.length, `Cannot merge a list of zero data points!`), e.length === 1)
  )
    return e[0];
  let { unAvgSum: t, cTotal: n } = e.reduce(
      (e, t) => (
        t.price === void 0 ||
          t.purchases === void 0 ||
          ((e.unAvgSum += t.price * t.purchases), (e.cTotal += t.purchases)),
        e
      ),
      { unAvgSum: 0, cTotal: 0 },
    ),
    r = t / n;
  return { time: e[0].time, price: r, purchases: n };
}
var xM = 1e-5;
function SM(e) {
  return {
    nFloor: parseInt(e.wallet_market_minimum) || 1,
    nIncrement: parseInt(e.wallet_currency_increment) || 1,
  };
}
function CM(e, t, n) {
  let r = e;
  if (t > 1) {
    let i = e / t,
      a = i < 0 ? -1 : 1,
      o = Math.abs(i);
    r = a * (n ? Math.ceil(o) : Math.floor(o + 0.5)) * t;
  }
  return Math.max(r, t);
}
function wM(e, t, n, r) {
  return e <= t ? t : CM(e, n, r);
}
function TM(e, t) {
  let { nFloor: n, nIncrement: r } = SM(t);
  return wM(e, n, r, !0);
}
function EM(e, t, n, r) {
  let i = t.fee_rate ?? 0;
  if (i <= xM) return { nFee: 0, bCapped: !1 };
  let a = wM(Math.trunc(e * i), n, r, !1),
    o = t.fee_cap ? parseInt(t.fee_cap) : 0;
  return o > 0 && a >= o ? { nFee: o, bCapped: !0 } : { nFee: a, bCapped: !1 };
}
function DM(e) {
  return !!e?.steam_fee && !!e?.publisher_fee;
}
function OM(e, t, n) {
  if (e == 0)
    return {
      nBasePrice: 0,
      nSteamFee: 0,
      nPublisherFee: 0,
      nTotal: 0,
      bSteamFeeCapped: !1,
      bPublisherFeeCapped: !1,
    };
  let { nFloor: r, nIncrement: i } = SM(n),
    a = wM(e, r, i, !0),
    o = EM(a, t.publisher_fee ?? {}, r, i),
    s = EM(a, t.steam_fee ?? {}, r, i);
  return {
    nBasePrice: a,
    nSteamFee: s.nFee,
    nPublisherFee: o.nFee,
    nTotal: a + s.nFee + o.nFee,
    bSteamFeeCapped: s.bCapped,
    bPublisherFeeCapped: o.bCapped,
  };
}
function kM(e, t, n) {
  let { nFloor: r, nIncrement: i } = SM(n),
    a = t.publisher_fee?.fee_rate ?? 0,
    o = t.steam_fee?.fee_rate ?? 0,
    s = e - 2 * r,
    c = (t, n) => Math.min(Math.trunc((e - n) / (1 + t)), s),
    l = OM(c(a + o, 0), t, n);
  (l.bSteamFeeCapped != l.bPublisherFeeCapped &&
    (l.bPublisherFeeCapped
      ? (l = OM(c(o, l.nPublisherFee), t, n))
      : l.bSteamFeeCapped && (l = OM(c(a, l.nSteamFee), t, n))),
    l.bPublisherFeeCapped &&
      l.bSteamFeeCapped &&
      (l = OM(e - (l.nSteamFee + l.nPublisherFee), t, n)));
  for (let r = 0; r < 3 && l.nTotal != e; r++)
    if (l.nTotal < e) l = OM(l.nBasePrice + i, t, n);
    else {
      l = OM(l.nBasePrice - i, t, n);
      break;
    }
  return l.nBasePrice < r ? OM(r, t, n) : l;
}
function AM(e, t, n) {
  return OM(e, t, n).nTotal;
}
function jM(e, t, n) {
  return kM(e, t, n).nBasePrice;
}
var MM = `_37rzH4CvbMw-`;
function NM(e) {
  let {
      value: t,
      defaultValue: n,
      currency: r,
      editable: i,
      onValueChange: a,
      status: o,
      inputRef: s,
      placeholder: c,
      wide: l,
    } = e,
    u = t ?? 0,
    d = r.bWholeUnitsOnly
      ? Math.round(u / 100).toString()
      : (u / 100).toFixed(2),
    f = Math.max(d.length, l ? 9 : 4) + r.strSymbol.length + 0.5,
    p = i || l,
    m = p ? `calc( ${f}ch + 2 * var(--spacing-2) )` : `${f}ch`;
  return (0, Q.jsx)(se, {
    className: ve(MM, !p && `YVYRIADuxks-`),
    width: l ? { initial: `100%`, sm: m } : m,
    children: (0, Q.jsx)(_, {
      size: `2`,
      variant: p ? `inset` : `bare`,
      currency: r,
      value: t,
      defaultValue: n,
      onValueChange: a ?? (() => void 0),
      readOnly: !i,
      tabIndex: i ? void 0 : -1,
      gamepadFocusable: i,
      status: o,
      inputRef: s,
      placeholder: c,
    }),
  });
}
var PM = `Xice-lU-2-8-`,
  FM = `oZO2DSFoyy4-`;
function IM(e) {
  let {
      onClose: t,
      children: n,
      fillHeight: r,
      fitContent: i,
      onSubmit: a,
      ...o
    } = e,
    s = ve(
      PM,
      r && `mJrSMtK3PnM-`,
      i && `wr8reWdSeMQ-`,
      `noOpinionatedGlobalStyles`,
    );
  return (0, Q.jsxs)(_e, {
    onClose: t,
    className: s,
    children: [
      (0, Q.jsx)(`div`, {
        className: FM,
        children: (0, Q.jsx)(re, { size: `5`, onClick: t }),
      }),
      (0, Q.jsx)(`form`, {
        onSubmit: (e) => {
          (e.preventDefault(), a && a());
        },
        children: (0, Q.jsx)(N, {
          direction: `column`,
          gap: `4`,
          padding: { initial: `3`, sm: `5` },
          height: r ? `100%` : void 0,
          minHeight: r ? `0` : void 0,
          ...o,
          children: n,
        }),
      }),
    ],
  });
}
function LM(e) {
  let { lastUpdate: t, agreed: n, onAgreeChange: r, disabled: i } = e,
    a = ie(t),
    o = `${de.STORE_BASE_URL}subscriber_agreement`;
  return (0, Q.jsx)(ue, {
    checked: n,
    onChange: r,
    disabled: i,
    children: (0, Q.jsx)(A, {
      size: `3`,
      children: g.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, Q.jsx)(p, {
          href: o,
          target: `_blank`,
          children: g.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        a,
      ),
    }),
  });
}
function RM(e) {
  let { selling: t } = e;
  return (0, Q.jsx)(A, {
    size: `3`,
    children: g.Localize(t ? `#SellDialog_EU_SSA` : `#PurchaseDialog_EU_SSA`),
  });
}
function zM(e, t) {
  if (typeof window > `u`) return;
  let n = Reflect.get(window, `ReactNativeWebView`);
  typeof n?.postMessage == `function` &&
    n.postMessage(
      JSON.stringify({ event_name: `marketconfirm`, type: e, creator_id: t }),
    );
}
var BM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Request`;
    }
  },
  VM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.has_settings || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            has_settings: { n: 4, br: F.readBool, bw: P.writeBool },
            allow_sale_push: { n: 2, br: F.readBool, bw: P.writeBool },
            allow_wishlist_push: { n: 3, br: F.readBool, bw: P.writeBool },
            chat_notification_level: {
              n: 5,
              br: F.readUint32,
              bw: P.writeUint32,
            },
            notify_direct_chat: { n: 6, br: F.readBool, bw: P.writeBool },
            notify_group_chat: { n: 7, br: F.readBool, bw: P.writeBool },
            allow_event_push: { n: 8, d: !0, br: F.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Response`;
    }
  },
  HM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_sale_push || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_sale_push: { n: 2, br: F.readBool, bw: P.writeBool },
            allow_wishlist_push: { n: 3, br: F.readBool, bw: P.writeBool },
            chat_notification_level: {
              n: 4,
              br: F.readUint32,
              bw: P.writeUint32,
            },
            notify_direct_chat: { n: 5, br: F.readBool, bw: P.writeBool },
            notify_group_chat: { n: 6, br: F.readBool, bw: P.writeBool },
            allow_event_push: { n: 7, d: !0, br: F.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Request`;
    }
  },
  UM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Response`;
    }
  },
  WM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            deviceid: { n: 1, br: F.readString, bw: P.writeString },
            language: { n: 2, br: F.readString, bw: P.writeString },
            push_enabled: { n: 3, br: F.readBool, bw: P.writeBool },
            app_version: { n: 4, br: F.readString, bw: P.writeString },
            os_version: { n: 5, br: F.readString, bw: P.writeString },
            device_model: { n: 6, br: F.readString, bw: P.writeString },
            twofactor_device_identifier: {
              n: 7,
              br: F.readString,
              bw: P.writeString,
            },
            mobile_app: { n: 8, br: F.readEnum, bw: P.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Request`;
    }
  },
  GM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_deviceid || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_deviceid: { n: 2, br: F.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Response`;
    }
  },
  KM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.deviceid || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { deviceid: { n: 1, br: F.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_DeregisterMobileDevice_Notification`;
    }
  },
  qM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_type || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_type: { n: 1, br: F.readEnum, bw: P.writeEnum },
            push_enabled_only: { n: 2, br: F.readBool, bw: P.writeBool },
            minimum_version: { n: 3, br: F.readString, bw: P.writeString },
            twofactor_device_identifier: {
              n: 4,
              br: F.readString,
              bw: P.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Request`;
    }
  },
  JM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.found_device || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            found_device: { n: 1, br: F.readBool, bw: P.writeBool },
            up_to_date: { n: 2, br: F.readBool, bw: P.writeBool },
            max_version: { n: 3, br: F.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Response`;
    }
  },
  YM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.authenticator_gid || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            authenticator_gid: {
              n: 1,
              br: F.readFixed64String,
              bw: P.writeFixed64String,
            },
            device_identifier: { n: 2, br: F.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Request`;
    }
  },
  XM = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stale_time_seconds || I(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stale_time_seconds: { n: 1, br: F.readUint32, bw: P.writeUint32 },
            is_authenticator_valid: { n: 2, br: F.readBool, bw: P.writeBool },
            owned_games: { n: 3, br: F.readUint32, bw: P.writeUint32 },
            friend_count: { n: 4, br: F.readUint32, bw: P.writeUint32 },
            wallet_balance: { n: 5, br: F.readString, bw: P.writeString },
            language: { n: 6, br: F.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= pe(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return fe(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return M(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Response`;
    }
  },
  ZM;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobilePerAccount.GetSettings#1`, O(BM, t, n), VM, {
      ePrivilege: 1,
    });
  }
  e.GetSettings = t;
  function n(e, t, n) {
    return e.SendMsg(`MobilePerAccount.SetSettings#1`, O(HM, t, n), UM, {
      ePrivilege: 1,
    });
  }
  e.SetSettings = n;
})((ZM ||= {}));
var QM;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileDevice.RegisterMobileDevice#1`, O(WM, t, n), GM, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.RegisterMobileDevice = t;
  function n(e, t) {
    return e.SendNotification(
      `MobileDevice.DeregisterMobileDevice#1`,
      O(KM, t),
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.DeregisterMobileDevice = n;
  function r(e, t, n) {
    return e.SendMsg(`MobileDevice.HasMobileDevice#1`, O(qM, t, n), JM, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.HasMobileDevice = r;
})((QM ||= {}));
var $M;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`MobileApp.GetMobileSummary#1`, O(YM, t, n), XM, {
      ePrivilege: 1,
    });
  }
  e.GetMobileSummary = t;
})(($M ||= {}));
function eN(e) {
  let [t, n] = (0, R.useState)(null);
  (0, R.useEffect)(() => {
    let e = window;
    return (
      (e.ShowReactSellItemDialog = (e, t, r) =>
        n({ item: e, appContext: t, onSold: r })),
      e.g_PendingReactSellItemDialog &&
        (n(e.g_PendingReactSellItemDialog),
        delete e.g_PendingReactSellItemDialog),
      () => {
        delete e.ShowReactSellItemDialog;
      }
    );
  }, []);
  let [r, i] = (0, R.useState)({});
  return t
    ? (0, Q.jsx)(E, {
        steamidOwner: he.steamid,
        children: (0, Q.jsx)(Zj, {
          prefs: r,
          onChange: i,
          children: (0, Q.jsx)(ge, {
            children: (0, Q.jsx)(
              tN,
              {
                ...e,
                item: t.item,
                appContext: t.appContext,
                onSold: t.onSold,
                onClose: () => n(null),
              },
              `${t.item.appid}_${t.item.contextid}_${t.item.assetid}`,
            ),
          }),
        }),
      })
    : null;
}
function tN(e) {
  let {
      item: t,
      appContext: n,
      walletInfo: r,
      newFeeRates: i,
      inPlaceListing: o,
      holdDays: s,
      holdReason: c,
      ssaUpdateTime: l,
      showEUSSA: u,
      onSold: f,
      onClose: p,
    } = e,
    { description: m } = t,
    h = r.wallet_currency,
    _ = t.appid,
    v = nN(m),
    y = parseInt(String(t.amount)) || 1,
    b = (0, R.useMemo)(
      () => ({
        wallet_market_minimum: String(r.wallet_market_minimum ?? 1),
        wallet_currency_increment: String(r.wallet_currency_increment ?? 1),
      }),
      [r],
    ),
    S = iN(_, i, r, n),
    w = cN(h, _, v),
    T = DM(S.data) ? S.data : void 0,
    [E, D] = (0, R.useState)(`edit`),
    [O, k] = (0, R.useState)(void 0),
    [j, ee] = (0, R.useState)(1),
    [M, te] = (0, R.useState)(!1),
    [P, F] = (0, R.useState)(null),
    re = T && O ? AM(O, T, b) : void 0,
    ie = parseInt(b.wallet_market_minimum) || 1,
    I = a({
      mutationFn: mN,
      onSuccess: (e, t) => {
        if (!e.success) return;
        let n = !!e.requires_confirmation;
        (f({ quantity: t.amount, requires_confirmation: n }),
          n
            ? (e.needs_mobile_confirmation && e.listingid && zM(3, e.listingid),
              D(`confirm`))
            : p());
      },
    }),
    ae = () => {
      let e = rN({
        bAgreedSSA: M,
        nQuantity: j,
        nAvailable: y,
        nSellerPrice: O ?? 0,
        nBuyerPrice: re ?? 0,
        nFloor: ie,
        nMaxBalance: parseInt(String(r.wallet_trade_max_balance ?? 0)) || 0,
        eCurrency: h,
      });
      (F(e), e || D(`review`));
    },
    oe = () => {
      !I.isPending &&
        O &&
        I.mutate({
          appid: _,
          contextid: t.contextid,
          assetid: t.assetid,
          amount: j,
          price: TM(O, b),
        });
    },
    ce = () => {
      (I.reset(), D(`edit`));
    },
    le = E === `edit` && !!T,
    ue = (0, R.useRef)(null),
    de = (0, R.useRef)(!1);
  (0, R.useEffect)(() => {
    le &&
      !de.current &&
      ((de.current = !0),
      window.UseTouchFriendlyMode?.() || ue.current?.focus());
  }, [le]);
  let fe = g.Localize(
      E === `edit` ? `#SellDialog_Title` : `#SellDialog_Confirm_Title`,
    ),
    pe = null;
  return (
    E === `confirm` && I.data
      ? (pe = (0, Q.jsx)(uN, { result: I.data }))
      : I.isError || (I.isSuccess && !I.data.success)
        ? (pe = (0, Q.jsx)(fN, {
            type: `error`,
            children:
              I.data?.message || g.Localize(`#SellDialog_Error_Generic`),
          }))
        : P
          ? (pe = (0, Q.jsx)(fN, { type: `error`, children: P }))
          : (S.isError || (S.isSuccess && !T)) &&
            (pe = (0, Q.jsx)(fN, {
              type: `error`,
              children: g.Localize(`#SellDialog_PriceEntryUnavailable`),
            })),
    (0, Q.jsxs)(IM, {
      onClose: p,
      fitContent: !0,
      onSubmit: () => {
        E === `edit` ? ae() : E === `review` && oe();
      },
      children: [
        (0, Q.jsx)(d, { size: `6`, weight: `heavy`, children: fe }),
        (0, Q.jsx)(aN, { item: t }),
        (0, Q.jsxs)(se, {
          children: [
            (0, Q.jsx)(oN, {
              inPlace: o && !!n?.inplace_listing,
              holdDays: s,
              holdReason: c,
            }),
            (0, Q.jsx)(x, {
              visible: E === `edit`,
              keepMounted: !0,
              children: (0, Q.jsx)(se, {
                paddingTop: `4`,
                children: (0, Q.jsx)(sN, {
                  appid: _,
                  hashName: v,
                  currency: h,
                }),
              }),
            }),
          ],
        }),
        (0, Q.jsx)(dN, {
          message: pe,
          prices: (0, Q.jsx)(pN, {
            currency: h,
            marketLow: E === `confirm` ? void 0 : w,
            buyerPrice: re,
            sellerPrice: O,
            onBuyerPriceChange:
              le && T ? (e) => k(e ? jM(e, T, b) : void 0) : void 0,
            onSellerPriceChange: le ? (e) => k(e || void 0) : void 0,
            sellerPriceStatus: O !== void 0 && O < ie ? `error` : void 0,
            sellerInputRef: ue,
            summary:
              y > 1 &&
              (0, Q.jsx)(A, {
                size: `3`,
                align: `center`,
                children: g.Localize(
                  `#SellDialog_TotalYouReceive`,
                  C((O ?? 0) * j, h),
                ),
              }),
            children:
              y > 1 &&
              (0, Q.jsx)(lN, {
                value: j,
                available: y,
                editable: E === `edit`,
                onChange: ee,
              }),
          }),
          children: (0, Q.jsxs)(N, {
            justify: `between`,
            wrap: `wrap`,
            gap: `2`,
            align: `center`,
            children: [
              (0, Q.jsx)(x, {
                visible: E !== `confirm`,
                children: (0, Q.jsxs)(N, {
                  direction: `column`,
                  gap: `2`,
                  children: [
                    (0, Q.jsx)(LM, {
                      lastUpdate: l,
                      agreed: M,
                      onAgreeChange: te,
                      disabled: E !== `edit`,
                    }),
                    u && (0, Q.jsx)(RM, { selling: !0 }),
                  ],
                }),
              }),
              (0, Q.jsxs)(N, {
                flexGrow: `1`,
                justify: `end`,
                align: `center`,
                gap: `2`,
                children: [
                  E === `edit` &&
                    (0, Q.jsx)(ne, {
                      type: `submit`,
                      minWidth: `120px`,
                      disabled: !T,
                      children: g.Localize(`#SellDialog_Button_Continue`),
                    }),
                  E === `review` &&
                    (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(ne, {
                          color: `dull`,
                          onClick: ce,
                          disabled: I.isPending,
                          children: g.Localize(`#ManageListing_Dialog_Back`),
                        }),
                        (0, Q.jsx)(ne, {
                          type: `submit`,
                          minWidth: `120px`,
                          loading: I.isPending,
                          children: g.Localize(`#SellDialog_Button_Confirm`),
                        }),
                      ],
                    }),
                  E === `confirm` &&
                    (0, Q.jsx)(ne, {
                      color: `dull`,
                      onClick: p,
                      children: g.Localize(`#Button_Close`),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function nN(e) {
  return e.market_hash_name || e.market_name || e.name || ``;
}
function rN(e) {
  let {
    bAgreedSSA: t,
    nQuantity: n,
    nAvailable: r,
    nSellerPrice: i,
    nBuyerPrice: a,
    nFloor: o,
    nMaxBalance: s,
    eCurrency: c,
  } = e;
  return t
    ? n < 1 || n > r
      ? g.Localize(`#SellDialog_Error_InvalidQuantity`)
      : a > s || i > s
        ? g.Localize(`#SellDialog_Error_PriceExceedsMaximum`, C(s, c))
        : i < o || a < 3 * o
          ? g.Localize(`#SellDialog_Error_MinPrice`, C(o, c))
          : null
    : g.Localize(`#SellDialog_Error_SSA`);
}
function iN(e, t, n, r) {
  return o({
    queryKey: [`inventory`, `sellfees`, e, t],
    queryFn: async () => {
      if (!t)
        return {
          steam_fee: {
            fee_rate: parseFloat(String(n.wallet_fee_percent ?? 0.05)),
          },
          publisher_fee: {
            fee_rate: parseFloat(
              String(
                r?.market_pubfee_rate ??
                  n.wallet_publisher_fee_percent_default ??
                  0.1,
              ),
            ),
          },
        };
      let i = new URLSearchParams({ appid: e.toString() }),
        a = await fetch(
          `${de.COMMUNITY_BASE_URL}market/ajaxfeestructure/?${i.toString()}`,
          { credentials: `include` },
        );
      if (!a.ok) throw Error(`Fee structure request failed: ${a.status}`);
      let o = await a.json();
      return {
        ...o,
        steam_fee: o.steam_fee && {
          ...o.steam_fee,
          fee_rate: parseFloat(String(o.steam_fee.fee_rate ?? 0)),
        },
        publisher_fee: o.publisher_fee && {
          ...o.publisher_fee,
          fee_rate: parseFloat(String(o.publisher_fee.fee_rate ?? 0)),
        },
      };
    },
    staleTime: 1 / 0,
  });
}
function aN(e) {
  let { item: t } = e,
    { description: n } = t,
    r = (0, R.useMemo)(
      () => ({
        appid: t.appid,
        contextid: t.contextid,
        assetid: t.assetid,
        amount: t.amount,
        asset_properties: t.asset_properties,
      }),
      [t],
    ),
    i = w(n),
    a = { initial: `64px`, sm: `96px` };
  return (0, Q.jsx)(D.Root, {
    description: n,
    asset: r,
    bInteractable: !1,
    children: (0, Q.jsxs)(N, {
      align: `center`,
      gap: `3`,
      children: [
        (0, Q.jsx)(N, {
          flexShrink: `0`,
          width: a,
          height: a,
          align: `center`,
          justify: `center`,
          style: {
            border: `1px solid ${n.name_color ? `#${n.name_color}` : `var(--color-dull-8)`}`,
            background: n.background_color ? `#${n.background_color}` : void 0,
          },
          children: (0, Q.jsx)(`img`, {
            src: i,
            alt: n.name,
            style: { maxWidth: `100%`, maxHeight: `100%` },
          }),
        }),
        (0, Q.jsxs)(N, {
          direction: `column`,
          gap: `2`,
          minWidth: `0`,
          children: [
            (0, Q.jsx)(D.Name, { size: `5` }),
            (0, Q.jsx)(D.GameInfo, {}),
          ],
        }),
      ],
    }),
  });
}
function oN(e) {
  let { inPlace: t, holdDays: n, holdReason: r } = e,
    i = () => window.ShowEscrowExplanationDialog?.(!0),
    a = null;
  return (
    r === `no2fa` || r === `recently_activated`
      ? (a = g.Localize(`#SellDialog_WarningOnHoldUser`, 7))
      : r === `recently_transferred` &&
        (a = g.Localize(`#SellDialog_WarningOnHoldForTransfer`)),
    (0, Q.jsxs)(N, {
      direction: `column`,
      gap: `2`,
      background: `dull-5`,
      padding: `3`,
      children: [
        (0, Q.jsx)(A, {
          size: `3`,
          color: `text-warning`,
          children: g.Localize(
            t ? `#SellDialog_Warning_InPlace` : `#SellDialog_Warning`,
          ),
        }),
        n > 0 &&
          (0, Q.jsxs)(N, {
            direction: `column`,
            gap: `1`,
            children: [
              (0, Q.jsx)(A, {
                size: `3`,
                color: `text-warning`,
                children: g.Localize(`#SellDialog_WarningOnHoldForDays`, n),
              }),
              a &&
                (0, Q.jsx)(A, {
                  size: `3`,
                  color: `text-warning`,
                  children: a,
                }),
              (0, Q.jsx)(se, {
                children: (0, Q.jsx)(f, {
                  size: `3`,
                  onClick: i,
                  children: g.Localize(`#SellDialog_WarningOnHoldRemove`),
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function sN(e) {
  let { appid: t, hashName: n, currency: r } = e,
    i = me({ initial: `200px`, sm: `240px` }),
    a = o({
      queryKey: [`inventory`, `sellpricehistory`, t, n],
      queryFn: async () => {
        let e = new URLSearchParams({
            raw: `1`,
            appid: t.toString(),
            market_hash_name: n,
          }),
          r = await (
            await fetch(
              `${de.COMMUNITY_BASE_URL}market/pricehistory/?${e.toString()}`,
              { credentials: `include` },
            )
          ).json();
        if (!r?.success) throw Error(`Price history unavailable`);
        return { ecurrency: r.ecurrency, prices: r.prices ?? [] };
      },
      staleTime: 1 / 0,
      retry: !1,
    });
  if (a.isPending)
    return (0, Q.jsx)(N, {
      align: `center`,
      justify: `center`,
      minHeight: `calc( ${i} + 60px )`,
      children: (0, Q.jsx)(te, { size: `5` }),
    });
  let s = a.data ?? { ecurrency: r, prices: [] };
  return (0, Q.jsx)(iM, { priceHistory: s, height: i });
}
function cN(e, t, n) {
  let { data: r } = o(T(e, t, n));
  return r?.lowest_price || void 0;
}
function lN(e) {
  let { value: t, available: n, editable: r, onChange: i } = e;
  return (0, Q.jsxs)(N, {
    align: `center`,
    gap: `2`,
    children: [
      (0, Q.jsx)(A, {
        size: `3`,
        weight: `heavy`,
        whiteSpace: `nowrap`,
        children: g.Localize(`#SellDialog_Quantity`),
      }),
      (0, Q.jsx)(se, {
        width: `8ch`,
        children: (0, Q.jsx)(h, {
          size: `2`,
          variant: r ? `inset` : `bare`,
          value: t,
          onValueChange: i,
          valueToString: (e) => e.toString(),
          valueFromString: (e) => (isNaN(parseInt(e)) ? m : parseInt(e)),
          readOnly: !r,
          tabIndex: r ? void 0 : -1,
        }),
      }),
      (0, Q.jsx)(A, {
        size: `3`,
        contrast: `description`,
        whiteSpace: `nowrap`,
        children: g.Localize(`#SellDialog_QuantityAvailable`, n),
      }),
    ],
  });
}
function uN(e) {
  let { result: t } = e,
    n = t.needs_mobile_confirmation
      ? `${g.Localize(`#SellDialog_MobileConfirmation`)}\n\n${g.Localize(`#SellDialog_MobileConfirmation_CheckVersion`)}`
      : g.Localize(`#SellDialog_EmailConfirmation`, t.email_domain ?? ``);
  return (0, Q.jsx)(fN, { type: `warning`, children: n });
}
function dN(e) {
  let { message: t, prices: n, children: r } = e,
    i = (0, R.useRef)(t);
  return (
    t && (i.current = t),
    (0, Q.jsxs)(N, {
      direction: `column`,
      paddingTop: `3`,
      children: [
        n,
        (0, Q.jsx)(x, {
          visible: !!t,
          children: (0, Q.jsx)(N, {
            justify: `center`,
            paddingTop: `4`,
            children: i.current,
          }),
        }),
        (0, Q.jsx)(se, { paddingTop: `4`, children: r }),
      ],
    })
  );
}
function fN(e) {
  let { children: t, type: n } = e;
  return (0, Q.jsx)(A, {
    size: `3`,
    align: `center`,
    color: n == `error` ? `text-error` : `text-warning`,
    whiteSpace: `pre-wrap`,
    children: t,
  });
}
function pN(e) {
  let {
      currency: t,
      marketLow: n,
      buyerPrice: r,
      sellerPrice: i,
      onBuyerPriceChange: a,
      onSellerPriceChange: o,
      sellerPriceStatus: s,
      sellerInputRef: c,
      children: l,
      summary: u,
    } = e,
    d = S(t),
    f = !le(`sm`),
    p = (0, R.useRef)(n);
  n != null && (p.current = n);
  let m = (0, Q.jsx)(A, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: g.Localize(`#RepriceListing_Dialog_BuyerPays`),
    }),
    h = (0, Q.jsx)(NM, {
      currency: d,
      value: r,
      defaultValue: 0,
      editable: !!a,
      onValueChange: a,
      wide: !0,
      placeholder: 0,
    }),
    _ = (0, Q.jsx)(A, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: g.Localize(`#RepriceListing_Dialog_YouReceive`),
    }),
    v = (0, Q.jsx)(NM, {
      currency: d,
      value: i,
      defaultValue: 0,
      editable: !!o,
      onValueChange: o,
      status: s,
      inputRef: c,
      wide: !0,
      placeholder: 0,
    });
  return (0, Q.jsxs)(N, {
    direction: `column`,
    gap: `2`,
    align: f ? `stretch` : `center`,
    children: [
      (0, Q.jsxs)(N, {
        align: `center`,
        justify: `center`,
        gap: f ? `3` : `5`,
        wrap: `wrap`,
        children: [
          l,
          f
            ? (0, Q.jsxs)(y, {
                columns: `max-content minmax( 0, 1fr )`,
                gap: `2`,
                alignItems: `center`,
                width: `100%`,
                children: [m, h, _, v],
              })
            : (0, Q.jsxs)(N, {
                align: `center`,
                gap: `5`,
                children: [
                  (0, Q.jsxs)(N, {
                    align: `center`,
                    gap: `2`,
                    children: [m, h],
                  }),
                  (0, Q.jsxs)(N, {
                    align: `center`,
                    gap: `2`,
                    children: [_, v],
                  }),
                ],
              }),
        ],
      }),
      (0, Q.jsx)(x, {
        visible: n != null,
        children: (0, Q.jsxs)(N, {
          align: `center`,
          justify: `center`,
          gap: `2`,
          children: [
            (0, Q.jsx)(A, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: g.Localize(`#ManageListing_Dialog_MarketLow`),
            }),
            (0, Q.jsx)(A, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: p.current,
            }),
          ],
        }),
      }),
      u,
    ],
  });
}
async function mN(e) {
  let t = new URLSearchParams({
      sessionid: ce(),
      appid: e.appid.toString(),
      contextid: e.contextid,
      assetid: e.assetid,
      amount: e.amount.toString(),
      price: e.price.toString(),
    }),
    n = await fetch(`${de.COMMUNITY_BASE_URL}market/sellitem/`, {
      method: `POST`,
      body: t,
      credentials: `include`,
    });
  try {
    return await n.json();
  } catch {
    return { success: !1 };
  }
}
export { eN as default };
