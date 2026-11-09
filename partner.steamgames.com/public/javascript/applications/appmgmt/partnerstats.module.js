/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  kt as e,
  nt as t,
  on as n,
  rn as r,
  tn as i,
  vt as a,
} from "./mobx.esm.js";
import { j as o, k as s } from "./storebrowsequerycontext.js";
import { E as c, T as l, V as u, _ as d } from "./react-router.js";
import { t as f } from "./useQuery.js";
import { t as p } from "./reactqueryroot.js";
import { t as m } from "./dataloader.js";
import { C as h } from "./storeitem.js";
import { t as g } from "./with-selector.js";
import { r as _, t as v } from "./browserapi.js";
var y = n(e()),
  b = n(c());
function x(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = x(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function S() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = x(e)) && (r && (r += ` `), (r += t));
  return r;
}
var C =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function w(e) {
  return typeof e == `string` && C.includes(e);
}
var T =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function E(e) {
  return typeof e == `string` && T.includes(e);
}
function D(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function O(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return E(t) || D(t);
  });
  return Object.fromEntries(t);
}
function k(e) {
  if (e == null) return null;
  if (
    (0, y.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return O(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? O(e) : null;
}
function A(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return E(t) || D(t) || w(t);
  });
  return Object.fromEntries(t);
}
function ee(e) {
  return e == null
    ? null
    : (0, y.isValidElement)(e)
      ? A(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? A(e)
        : null;
}
var j = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    M.apply(null, arguments)
  );
}
function te(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ne(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function ne(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var re = (0, y.forwardRef)((e, t) => {
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
      u = te(e, j),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = S(`recharts-surface`, o);
    return y.createElement(
      `svg`,
      M({}, A(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      y.createElement(`title`, null, c),
      y.createElement(`desc`, null, l),
      n,
    );
  }),
  ie = [`children`, `className`];
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ae.apply(null, arguments)
  );
}
function oe(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = se(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function se(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ce = y.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = oe(e, ie),
      a = S(`recharts-layer`, r);
    return y.createElement(`g`, ae({ className: a }, A(i), { ref: t }), n);
  }),
  le = (0, y.createContext)(null),
  ue = () => (0, y.useContext)(le);
function N(e) {
  return function () {
    return e;
  };
}
var de = Math.cos,
  fe = Math.sin,
  pe = Math.sqrt,
  me = Math.PI;
me / 2;
var he = 2 * me,
  ge = Math.PI,
  _e = 2 * ge,
  ve = 1e-6,
  ye = _e - ve;
function be(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function xe(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return be;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Se = class {
  constructor(e) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? be : xe(e));
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
    this
      ._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
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
    else if (d > ve) {
      if (!(Math.abs(u * s - c * l) > ve) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((ge - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        Math.abs(y - 1) > ve && this._append`L${e + y * l},${t + y * u}`,
          this
            ._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`;
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
    this._x1 === null
      ? this._append`M${c},${l}`
      : (Math.abs(this._x1 - c) > ve || Math.abs(this._y1 - l) > ve) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % _e) + _e),
        d > ye
          ? this
              ._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > ve &&
            this
              ._append`A${n},${n},0,${+(d >= ge)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`);
  }
  rect(e, t, n, r) {
    this
      ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
Se.prototype;
function Ce(e) {
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
    () => new Se(t)
  );
}
Array.prototype.slice;
function we(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Te(e) {
  this._context = e;
}
Te.prototype = {
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
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
    }
  },
};
function Ee(e) {
  return new Te(e);
}
function De(e) {
  return e[0];
}
function Oe(e) {
  return e[1];
}
function ke(e, t) {
  var n = N(!0),
    r = null,
    i = Ee,
    a = null,
    o = Ce(s);
  (e = typeof e == `function` ? e : e === void 0 ? De : N(e)),
    (t = typeof t == `function` ? t : t === void 0 ? Oe : N(t));
  function s(s) {
    var c,
      l = (s = we(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      !(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s));
    if (f) return (a = null), f + `` || null;
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : N(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : N(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : N(!!e)), s)
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
function Ae(e, t, n) {
  var r = null,
    i = N(!0),
    a = null,
    o = Ee,
    s = null,
    c = Ce(l);
  (e = typeof e == `function` ? e : e === void 0 ? De : N(+e)),
    (t = typeof t == `function` ? t : N(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? Oe : N(+n));
  function l(l) {
    var u,
      d,
      f,
      p = (l = we(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h) {
        if ((h = !h)) (d = u), s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          s.lineEnd(), s.areaEnd();
        }
      }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return (s = null), g + `` || null;
  }
  function u() {
    return ke().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : N(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : N(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : N(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : N(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : N(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : N(+e)), l)
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
        ? ((i = typeof e == `function` ? e : N(!!e)), l)
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
var je = class {
  constructor(e, t) {
    (this._context = e), (this._x = t);
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
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
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
    (this._x0 = e), (this._y0 = t);
  }
};
function Me(e) {
  return new je(e, !0);
}
function Ne(e) {
  return new je(e, !1);
}
var Pe = {
    draw(e, t) {
      let n = pe(t / me);
      e.moveTo(n, 0), e.arc(0, 0, n, 0, he);
    },
  },
  Fe = {
    draw(e, t) {
      let n = pe(t / 5) / 2;
      e.moveTo(-3 * n, -n),
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
        e.closePath();
    },
  },
  Ie = pe(1 / 3),
  Le = Ie * 2,
  Re = {
    draw(e, t) {
      let n = pe(t / Le),
        r = n * Ie;
      e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath();
    },
  },
  ze = {
    draw(e, t) {
      let n = pe(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Be = 0.8908130915292852,
  Ve = fe(me / 10) / fe((7 * me) / 10),
  He = fe(he / 10) * Ve,
  Ue = -de(he / 10) * Ve,
  We = {
    draw(e, t) {
      let n = pe(t * Be),
        r = He * n,
        i = Ue * n;
      e.moveTo(0, -n), e.lineTo(r, i);
      for (let t = 1; t < 5; ++t) {
        let a = (he * t) / 5,
          o = de(a),
          s = fe(a);
        e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
      }
      e.closePath();
    },
  },
  Ge = pe(3),
  Ke = {
    draw(e, t) {
      let n = -pe(t / (Ge * 3));
      e.moveTo(0, n * 2),
        e.lineTo(-Ge * n, -n),
        e.lineTo(Ge * n, -n),
        e.closePath();
    },
  },
  qe = -0.5,
  Je = pe(3) / 2,
  Ye = 1 / pe(12),
  Xe = (Ye / 2 + 1) * 3,
  Ze = {
    draw(e, t) {
      let n = pe(t / Xe),
        r = n / 2,
        i = n * Ye,
        a = r,
        o = n * Ye + n,
        s = -a,
        c = o;
      e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(qe * r - Je * i, Je * r + qe * i),
        e.lineTo(qe * a - Je * o, Je * a + qe * o),
        e.lineTo(qe * s - Je * c, Je * s + qe * c),
        e.lineTo(qe * r + Je * i, qe * i - Je * r),
        e.lineTo(qe * a + Je * o, qe * o - Je * a),
        e.lineTo(qe * s + Je * c, qe * c - Je * s),
        e.closePath();
    },
  };
function Qe(e, t) {
  let n = null,
    r = Ce(i);
  (e = typeof e == `function` ? e : N(e || Pe)),
    (t = typeof t == `function` ? t : N(t === void 0 ? 64 : +t));
  function i() {
    let i;
    if (
      ((n ||= i = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      i)
    )
      return (n = null), i + `` || null;
  }
  return (
    (i.type = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : N(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : N(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function $e() {}
function et(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function tt(e) {
  this._context = e;
}
tt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        et(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        et(this, e, t);
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function nt(e) {
  return new tt(e);
}
function rt(e) {
  this._context = e;
}
rt.prototype = {
  areaStart: $e,
  areaEnd: $e,
  lineStart: function () {
    (this._x0 =
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
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      case 2:
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath();
        break;
      case 3:
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          );
        break;
      default:
        et(this, e, t);
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function it(e) {
  return new rt(e);
}
function at(e) {
  this._context = e;
}
at.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
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
        et(this, e, t);
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function ot(e) {
  return new at(e);
}
function st(e) {
  this._context = e;
}
st.prototype = {
  areaStart: $e,
  areaEnd: $e,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function ct(e) {
  return new st(e);
}
function lt(e) {
  return e < 0 ? -1 : 1;
}
function ut(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (lt(a) + lt(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function dt(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function ft(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function pt(e) {
  this._context = e;
}
pt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ft(this, this._t0, dt(this, this._t0));
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), e !== this._x1 || t !== this._y1)) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), ft(this, dt(this, (n = ut(this, e, t))), n);
          break;
        default:
          ft(this, this._t0, (n = ut(this, e, t)));
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n);
    }
  },
};
function mt(e) {
  this._context = new ht(e);
}
(mt.prototype = Object.create(pt.prototype)).point = function (e, t) {
  pt.prototype.point.call(this, t, e);
};
function ht(e) {
  this._context = e;
}
ht.prototype = {
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
function gt(e) {
  return new pt(e);
}
function _t(e) {
  return new mt(e);
}
function vt(e) {
  this._context = e;
}
vt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
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
        for (var r = yt(e), i = yt(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    }
    (this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function yt(e) {
  var t,
    n = e.length - 1,
    r,
    i = Array(n),
    a = Array(n),
    o = Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    (r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]);
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function bt(e) {
  return new vt(e);
}
function xt(e, t) {
  (this._context = e), (this._t = t);
}
xt.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
    }
    (this._x = e), (this._y = t);
  },
};
function St(e) {
  return new xt(e, 0.5);
}
function Ct(e) {
  return new xt(e, 0);
}
function wt(e) {
  return new xt(e, 1);
}
function Tt(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Et(e) {
  for (var t = e.length, n = Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function Dt(e, t) {
  return e[t];
}
function Ot(e) {
  let t = [];
  return (t.key = e), t;
}
function kt() {
  var e = N([]),
    t = Et,
    n = Tt,
    r = Dt;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), Ot),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = we(t(a)); o < s; ++o) a[l[o]].index = o;
    return n(a, l), a;
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : N(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : N(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? Et : typeof e == `function` ? e : N(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Tt), i) : n;
    }),
    i
  );
}
function At(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Tt(e, t);
  }
}
function jt(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Tt(e, t);
  }
}
function Mt(e, t) {
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
        (c += d), (l += f * d);
      }
      (i[r - 1][1] += i[r - 1][0] = n), c && (n -= l / c);
    }
    (i[r - 1][1] += i[r - 1][0] = n), Tt(e, t);
  }
}
var Nt = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  Pt = i((e) => {
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
  Ft = i((e) => {
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
  It = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      let t = [],
        n = e.length;
      if (n === 0) return t;
      let r = 0,
        i = ``,
        a = ``,
        o = !1;
      for (e.charCodeAt(0) === 46 && (t.push(``), r++); r < n; ) {
        let s = e[r];
        a
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
          r++;
      }
      return i && t.push(i), t;
    }
    e.toPath = t;
  }),
  Lt = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Nt(),
      n = Pt(),
      r = Ft(),
      i = It();
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
  Rt = n(
    i((e, t) => {
      t.exports = Lt().get;
    })(),
  ),
  zt = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Bt = (e) => typeof e == `number` && e != +e,
  Vt = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  P = (e) => (typeof e == `number` || e instanceof Number) && !Bt(e),
  Ht = (e) => P(e) || typeof e == `string`,
  Ut = 0,
  Wt = (e) => {
    var t = ++Ut;
    return `${e || ``}${t}`;
  },
  Gt = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!P(e) && typeof e != `string`) return n;
    var i;
    if (Vt(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return Bt(i) && (i = n), r && t != null && i > t && (i = t), i;
  },
  Kt = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function qt(e, t, n) {
  return P(e) && P(t) ? e + n * (t - e) : t;
}
function Jt(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Rt.default)(e, t)) === n,
    );
}
var F = (e) => e == null,
  Yt = (e) => (F(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  Xt = [`type`, `size`, `sizeType`];
function Zt() {
  return (
    (Zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zt.apply(null, arguments)
  );
}
function Qt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qt(Object(n), !0).forEach(function (t) {
          en(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function en(e, t, n) {
  return (
    (t = tn(t)) in e
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
function tn(e) {
  var t = nn(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function nn(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rn(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = an(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function an(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var on = {
    symbolCircle: Pe,
    symbolCross: Fe,
    symbolDiamond: Re,
    symbolSquare: ze,
    symbolStar: We,
    symbolTriangle: Ke,
    symbolWye: Ze,
  },
  sn = Math.PI / 180,
  cn = (e) => on[`symbol${Yt(e)}`] || Pe,
  ln = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * sn;
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
  un = (e, t) => {
    on[`symbol${Yt(e)}`] = t;
  },
  dn = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = $t($t({}, rn(e, Xt)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = cn(a),
          t = Qe()
            .type(e)
            .size(ln(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = A(i);
    return c === +c && l === +l && n === +n
      ? y.createElement(
          `path`,
          Zt({}, u, {
            className: S(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
dn.registerSymbol = un;
var fn = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, y.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        w(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  pn = (e, t, n) => (r) => (e(t, n, r), null),
  mn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        w(i) && typeof a == `function` && ((r ||= {}), (r[i] = pn(a, t, n)));
      }),
      r
    );
  },
  hn = i((e) => {
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
  gn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  _n = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  vn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = _n();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  yn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  bn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = vn(),
      n = yn();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  xn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Lt();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Sn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  Cn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  wn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  Tn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = En(),
      n = Sn(),
      r = Cn(),
      i = wn();
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
            i.add(c), (s = !0);
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
    (e.isMatchWith = a), (e.isSetMatch = u);
  }),
  En = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Tn();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  Dn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  On = i((e) => {
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
  kn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` }),
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
      (e.uint8ClampedArrayTag = `[object Uint8ClampedArray]`);
  }),
  An = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  jn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Dn(),
      n = On(),
      r = kn(),
      i = Cn(),
      a = An();
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
        return (t.lastIndex = e.lastIndex), t;
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
        return r.set(e, t), c(t, e, n, r, o), t;
      }
      if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return r.set(e, t), c(t, e, n, r, o), t;
      }
      if (e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return r.set(e, t), c(t, e, n, r, o), t;
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
        return r.set(e, t), c(t, e, n, r, o), t;
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
    (e.cloneDeepWith = o), (e.cloneDeepWithImpl = s), (e.copyProperties = c);
  }),
  Mn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = jn();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  Nn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = En(),
      n = Mn();
    function r(e) {
      return (e = n.cloneDeep(e)), (n) => t.isMatch(n, e);
    }
    e.matches = r;
  }),
  Pn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = jn(),
      n = kn();
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
              return t.copyProperties(n, e), n;
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
  Fn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Pn();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  In = i((e) => {
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
  Ln = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = On();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  Rn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Pt(),
      n = In(),
      r = Ln(),
      i = It();
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
  zn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = En(),
      n = Ft(),
      r = Fn(),
      i = Lt(),
      a = Rn();
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
  Bn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gn(),
      n = xn(),
      r = Nn(),
      i = zn();
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
  Vn = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hn(),
      n = gn(),
      r = bn(),
      i = Bn();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  Hn = n(
    i((e, t) => {
      t.exports = Vn().uniqBy;
    })(),
  );
function Un(e, t, n) {
  return t === !0
    ? (0, Hn.default)(e, n)
    : typeof t == `function`
      ? (0, Hn.default)(e, t)
      : e;
}
var Wn = i((t) => {
    var n = e(),
      r = l();
    function i(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : i,
      o = r.useSyncExternalStore,
      s = n.useRef,
      c = n.useEffect,
      u = n.useMemo,
      d = n.useDebugValue;
    t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var l = s(null);
      if (l.current === null) {
        var f = { hasValue: !1, value: null };
        l.current = f;
      } else f = l.current;
      l = u(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
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
        [t, n, r, i],
      );
      var p = o(e, l[0], l[1]);
      return (
        c(
          function () {
            (f.hasValue = !0), (f.value = p);
          },
          [p],
        ),
        d(p),
        p
      );
    };
  }),
  Gn = i((e, t) => {
    t.exports = Wn();
  })(),
  Kn = (0, y.createContext)(null),
  qn = (e) => e,
  I = () => {
    var e = (0, y.useContext)(Kn);
    return e ? e.store.dispatch : qn;
  },
  Jn = () => {},
  Yn = () => Jn,
  Xn = (e, t) => e === t;
function L(e) {
  var t = (0, y.useContext)(Kn);
  return (0, Gn.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : Yn,
    t ? t.store.getState : Jn,
    t ? t.store.getState : Jn,
    t ? e : Jn,
    Xn,
  );
}
function Zn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Qn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function $n(
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
var er = (e) => (Array.isArray(e) ? e : [e]);
function tr(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    $n(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function nr(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var rr = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ir = typeof WeakRef < `u` ? WeakRef : rr,
  ar = 0,
  or = 1;
function sr() {
  return { s: ar, v: void 0, o: null, p: null };
}
function cr(e, t = {}) {
  let n = sr(),
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
        r === void 0 ? ((t = sr()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = sr()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === or) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new ir(c)
            : c);
    }
    return (s.s = or), (s.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = sr()), o.resetResultsCount();
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function lr(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      typeof o == `object` && ((a = o), (o = e.pop())),
        Zn(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        );
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = cr,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = er(c),
        p = er(u),
        m = tr(e),
        h = s(
          function () {
            return t++, o.apply(null, arguments);
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = nr(m, arguments);
            return (i = h.apply(null, e)), i;
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
  return Object.assign(r, { withTypes: () => r }), r;
}
var R = lr(cr),
  ur = Object.assign(
    (e, t = R) => {
      Qn(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => ur },
  ),
  dr = i((e) => {
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
  fr = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  pr = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = fr(),
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
  mr = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = dr(),
      n = pr(),
      r = It();
    function i(e, i, a, o) {
      if (e == null) return [];
      (a = o ? void 0 : a),
        Array.isArray(e) || (e = Object.values(e)),
        Array.isArray(i) || (i = i == null ? [null] : [i]),
        i.length === 0 && (i = [null]),
        Array.isArray(a) || (a = a == null ? [] : [a]),
        (a = a.map((e) => String(e)));
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
  hr = i((e) => {
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
      return i(e, 0), n;
    }
    e.flatten = t;
  }),
  gr = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = In(),
      n = vn(),
      r = Sn(),
      i = wn();
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
  _r = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mr(),
      n = hr(),
      r = gr();
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
  vr = n(
    i((e, t) => {
      t.exports = _r().sortBy;
    })(),
  ),
  yr = (e) => e.legend.settings,
  br = (e) => e.legend.size,
  xr = R([(e) => e.legend.payload, yr], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, vr.default)(r, n) : r;
  }),
  Sr = 1;
function Cr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, y.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, y.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Sr ||
            Math.abs(i.left - t.left) > Sr ||
            Math.abs(i.top - t.top) > Sr ||
            Math.abs(i.width - t.width) > Sr) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function z(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var wr = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Tr = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  Er = {
    INIT: `@@redux/INIT${Tr()}`,
    REPLACE: `@@redux/REPLACE${Tr()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Tr()}`,
  };
function Dr(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Or(e, t, n) {
  if (typeof e != `function`) throw Error(z(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(z(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(z(1));
    return n(Or)(e, t);
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
    if (c) throw Error(z(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(z(4));
    if (c) throw Error(z(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(z(6));
          (t = !1), l(), o.delete(n), (a = null);
        }
      }
    );
  }
  function f(e) {
    if (!Dr(e)) throw Error(z(7));
    if (e.type === void 0) throw Error(z(8));
    if (typeof e.type != `string`) throw Error(z(17));
    if (c) throw Error(z(9));
    try {
      (c = !0), (i = r(i, e));
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
    if (typeof e != `function`) throw Error(z(10));
    (r = e), f({ type: Er.REPLACE });
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(z(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return n(), { unsubscribe: e(n) };
      },
      [wr]() {
        return this;
      },
    };
  }
  return (
    f({ type: Er.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [wr]: m }
  );
}
function kr(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: Er.INIT }) === void 0) throw Error(z(12));
    if (n(void 0, { type: Er.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(z(13));
  });
}
function Ar(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    kr(n);
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
      if (u === void 0) throw (t && t.type, Error(z(14)));
      (o[s] = u), (a ||= u !== l);
    }
    return (a ||= r.length !== Object.keys(e).length), a ? o : e;
  };
}
function jr(...e) {
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
function Mr(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(z(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return (a = jr(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a };
  };
}
function Nr(e) {
  return Dr(e) && `type` in e && typeof e.type == `string`;
}
var Pr = Symbol.for(`immer-nothing`),
  Fr = Symbol.for(`immer-draftable`),
  Ir = Symbol.for(`immer-state`);
function Lr(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Rr = Object.getPrototypeOf;
function zr(e) {
  return !!e && !!e[Ir];
}
function Br(e) {
  return e
    ? Ur(e) ||
        Array.isArray(e) ||
        !!e[Fr] ||
        !!e.constructor?.[Fr] ||
        Yr(e) ||
        Xr(e)
    : !1;
}
var Vr = Object.prototype.constructor.toString(),
  Hr = new WeakMap();
function Ur(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = Hr.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), Hr.set(n, r)), r === Vr
  );
}
function Wr(e, t, n = !0) {
  Gr(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Gr(e) {
  let t = e[Ir];
  return t ? t.type_ : Array.isArray(e) ? 1 : Yr(e) ? 2 : Xr(e) ? 3 : 0;
}
function Kr(e, t) {
  return Gr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qr(e, t, n) {
  let r = Gr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Jr(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Yr(e) {
  return e instanceof Map;
}
function Xr(e) {
  return e instanceof Set;
}
function Zr(e) {
  return e.copy_ || e.base_;
}
function Qr(e, t) {
  if (Yr(e)) return new Map(e);
  if (Xr(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = Ur(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[Ir];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i],
          });
    }
    return Object.create(Rr(e), t);
  }
  {
    let t = Rr(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function $r(e, t = !1) {
  return (
    ni(e) ||
      zr(e) ||
      !Br(e) ||
      (Gr(e) > 1 &&
        Object.defineProperties(e, { set: ti, add: ti, clear: ti, delete: ti }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => $r(e, !0))),
    e
  );
}
function ei() {
  Lr(2);
}
var ti = { value: ei };
function ni(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var ri = {};
function ii(e) {
  let t = ri[e];
  return t || Lr(0, e), t;
}
var ai;
function oi() {
  return ai;
}
function si(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ci(e, t) {
  t &&
    (ii(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function li(e) {
  ui(e), e.drafts_.forEach(fi), (e.drafts_ = null);
}
function ui(e) {
  e === ai && (ai = e.parent_);
}
function di(e) {
  return (ai = si(ai, e));
}
function fi(e) {
  let t = e[Ir];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function pi(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ir].modified_ && (li(t), Lr(4)),
        Br(e) && ((e = mi(t, e)), t.parent_ || gi(t, e)),
        t.patches_ &&
          ii(`Patches`).generateReplacementPatches_(
            n[Ir].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = mi(t, n, [])),
    li(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Pr ? void 0 : e
  );
}
function mi(e, t, n) {
  if (ni(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[Ir];
  if (!i) return Wr(t, (r, a) => hi(e, i, t, r, a, n), r), t;
  if (i.scope_ !== e) return t;
  if (!i.modified_) return gi(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    let t = i.copy_,
      a = t,
      o = !1;
    i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      Wr(a, (r, a) => hi(e, i, t, r, a, n, o), r),
      gi(e, t, !1),
      n &&
        e.patches_ &&
        ii(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_);
  }
  return i.copy_;
}
function hi(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = ni(i);
  if (!s || o) {
    if (zr(i)) {
      let o = mi(
        e,
        i,
        a && t && t.type_ !== 3 && !Kr(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((qr(n, r, o), zr(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (Br(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      mi(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (Yr(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          gi(e, i);
    }
  }
}
function gi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $r(t, n);
}
function _i(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : oi(),
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
    a = vi;
  n && ((i = [r]), (a = yi));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return (r.draft_ = s), (r.revoke_ = o), s;
}
var vi = {
    get(e, t) {
      if (t === Ir) return e;
      let n = Zr(e);
      if (!Kr(n, t)) return xi(e, n, t);
      let r = n[t];
      return e.finalized_ || !Br(r)
        ? r
        : r === bi(e.base_, t)
          ? (wi(e), (e.copy_[t] = Ei(r, e)))
          : r;
    },
    has(e, t) {
      return t in Zr(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Zr(e));
    },
    set(e, t, n) {
      let r = Si(Zr(e), t);
      if (r?.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        let r = bi(Zr(e), t),
          i = r?.[Ir];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Jr(n, r) && (n !== void 0 || Kr(e.base_, t))) return !0;
        wi(e), Ci(e);
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
        bi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), wi(e), Ci(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Zr(e),
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
      Lr(11);
    },
    getPrototypeOf(e) {
      return Rr(e.base_);
    },
    setPrototypeOf() {
      Lr(12);
    },
  },
  yi = {};
Wr(vi, (e, t) => {
  yi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (yi.deleteProperty = function (e, t) {
    return yi.set.call(this, e, t, void 0);
  }),
  (yi.set = function (e, t, n) {
    return vi.set.call(this, e[0], t, n, e[0]);
  });
function bi(e, t) {
  let n = e[Ir];
  return (n ? Zr(n) : e)[t];
}
function xi(e, t, n) {
  let r = Si(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function Si(e, t) {
  if (!(t in e)) return;
  let n = Rr(e);
  for (; n; ) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Rr(n);
  }
}
function Ci(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Ci(e.parent_));
}
function wi(e) {
  e.copy_ ||= Qr(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var Ti = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
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
        typeof t != `function` && Lr(6),
          n !== void 0 && typeof n != `function` && Lr(7);
        let r;
        if (Br(e)) {
          let i = di(this),
            a = Ei(e, void 0),
            o = !0;
          try {
            (r = t(a)), (o = !1);
          } finally {
            o ? li(i) : ui(i);
          }
          return ci(i, n), pi(r, i);
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Pr && (r = void 0),
            this.autoFreeze_ && $r(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            ii(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i);
          }
          return r;
        }
        Lr(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (typeof e == `function`)
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            (n = e), (r = t);
          }),
          n,
          r,
        ];
      }),
      typeof e?.autoFreeze == `boolean` && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == `boolean` &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      typeof e?.useStrictIteration == `boolean` &&
        this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Br(e) || Lr(8), zr(e) && (e = Di(e));
    let t = di(this),
      n = Ei(e, void 0);
    return (n[Ir].isManual_ = !0), ui(t), n;
  }
  finishDraft(e, t) {
    let n = e && e[Ir];
    (n && n.isManual_) || Lr(9);
    let { scope_: r } = n;
    return ci(r, t), pi(void 0, r);
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
    let r = ii(`Patches`).applyPatches_;
    return zr(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function Ei(e, t) {
  let n = Yr(e)
    ? ii(`MapSet`).proxyMap_(e, t)
    : Xr(e)
      ? ii(`MapSet`).proxySet_(e, t)
      : _i(e, t);
  return (t ? t.scope_ : oi()).drafts_.push(n), n;
}
function Di(e) {
  return zr(e) || Lr(10, e), Oi(e);
}
function Oi(e) {
  if (!Br(e) || ni(e)) return e;
  let t = e[Ir],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0),
      (n = Qr(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration());
  } else n = Qr(e, !0);
  return (
    Wr(
      n,
      (e, t) => {
        qr(n, e, Oi(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var ki = new Ti(),
  Ai = ki.produce,
  ji = ki.setUseStrictIteration.bind(ki);
function Mi(e) {
  return e;
}
function Ni(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Pi(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Fi(
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
var Ii = (e) => (Array.isArray(e) ? e : [e]);
function Li(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Fi(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Ri(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var zi = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Bi = typeof WeakRef < `u` ? WeakRef : zi,
  Vi = 0,
  Hi = 1;
function Ui() {
  return { s: Vi, v: void 0, o: null, p: null };
}
function Wi(e, t = {}) {
  let n = Ui(),
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
        r === void 0 ? ((t = Ui()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Ui()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Hi) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Bi(c)
            : c);
    }
    return (s.s = Hi), (s.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = Ui()), o.resetResultsCount();
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Gi(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      typeof o == `object` && ((a = o), (o = e.pop())),
        Ni(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        );
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Wi,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Ii(c),
        p = Ii(u),
        m = Li(e),
        h = s(
          function () {
            return t++, o.apply(null, arguments);
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Ri(m, arguments);
            return (i = h.apply(null, e)), i;
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
  return Object.assign(r, { withTypes: () => r }), r;
}
var Ki = Gi(Wi),
  qi = Object.assign(
    (e, t = Ki) => {
      Pi(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => qi },
  );
function Ji(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var Yi = Ji(),
  Xi = Ji;
((...e) => {
  let t = Gi(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(zr(e) ? Di(e) : e, ...t);
        return Object.assign(r, n), r;
      },
      { withTypes: () => n },
    );
  return n;
})(Wi);
var Zi =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? jr
            : jr.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var Qi = (e) => e && typeof e.match == `function`;
function $i(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(yo(0));
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
    (n.match = (t) => Nr(t) && t.type === e),
    n
  );
}
var ea = class e extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, e.prototype);
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
function ta(e) {
  return Br(e) ? Ai(e, () => {}) : e;
}
function na(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function ra(e) {
  return typeof e == `boolean`;
}
var ia = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new ea();
      return t && (ra(t) ? a.push(Yi) : a.push(Xi(t.extraArgument))), a;
    },
  aa = `RTK_autoBatch`,
  oa = () => (e) => ({ payload: e, meta: { [aa]: !0 } }),
  sa = (e) => (t) => {
    setTimeout(t, e);
  },
  ca =
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
                : sa(10)
              : e.type === `callback`
                ? e.queueNotification
                : sa(e.timeout),
        l = () => {
          (o = !1), a && ((a = !1), s.forEach((e) => e()));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              t(), s.delete(e);
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[aa]),
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
  la = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new ea(e);
      return n && r.push(ca(typeof n == `object` ? n : void 0)), r;
    };
function ua(e) {
  let t = ia(),
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
  else if (Dr(n)) c = Ar(n);
  else throw Error(yo(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = jr;
  i && (u = Zi({ trace: !1, ...(typeof i == `object` && i) }));
  let d = la(Mr(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Or(c, o, p);
}
function da(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(yo(28));
        if (r in t) throw Error(yo(29));
        return (t[r] = n), i;
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
        return n.push({ matcher: e, reducer: t }), i;
      },
      addDefaultCase(e) {
        return (r = e), i;
      },
    };
  return e(i), [t, n, r];
}
ji(!1);
function fa(e) {
  return typeof e == `function`;
}
function pa(e, t) {
  let [n, r, i] = da(t),
    a;
  if (fa(e)) a = () => ta(e());
  else {
    let t = ta(e);
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
          if (zr(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (Br(e)) return Ai(e, (e) => n(e, t));
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
  return (o.getInitialState = a), o;
}
var ma = (e, t) => (Qi(e) ? e.match(t) : e(t));
function ha(...e) {
  return (t) => e.some((e) => ma(e, t));
}
var ga = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  _a = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--; ) t += ga[(Math.random() * 64) | 0];
    return t;
  },
  va = [`name`, `message`, `stack`, `code`],
  ya = class {
    constructor(e, t) {
      (this.payload = e), (this.meta = t);
    }
    _type;
  },
  ba = class {
    constructor(e, t) {
      (this.payload = e), (this.meta = t);
    }
    _type;
  },
  xa = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of va) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Sa = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = $i(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = $i(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = $i(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || xa)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : _a(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          (p = e), d.abort();
        }
        o &&
          (o.aborted
            ? m(Sa)
            : o.addEventListener(`abort`, () => m(Sa), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((wa(a) && (a = await a), a === !1 || d.signal.aborted))
              throw {
                name: `ConditionError`,
                message: `Aborted due to condition callback returning false.`,
              };
            let h = new Promise((e, t) => {
              (f = () => {
                t({ name: `AbortError`, message: p || `Aborted` });
              }),
                d.signal.addEventListener(`abort`, f);
            });
            s(
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
                    rejectWithValue: (e, t) => new ya(e, t),
                    fulfillWithValue: (e, t) => new ba(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof ya) throw t;
                  return t instanceof ba
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ]));
          } catch (t) {
            o = t instanceof ya ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(Ca);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: ha(a, r),
      typePrefix: e,
    });
  }
  return (e.withTypes = () => e), e;
})();
function Ca(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function wa(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var Ta = Symbol.for(`rtk-slice-createasyncthunk`),
  Ea = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(Ea || {});
function Da(e, t) {
  return `${e}/${t}`;
}
function Oa({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Ta];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(yo(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(ja()) : e.reducers) || {},
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
          if (!n) throw Error(yo(12));
          if (n in o.sliceCaseReducersByType) throw Error(yo(13));
          return (o.sliceCaseReducersByType[n] = t), s;
        },
        addMatcher(e, t) {
          return o.sliceMatchers.push({ matcher: e, reducer: t }), s;
        },
        exposeAction(e, t) {
          return (o.actionCreators[e] = t), s;
        },
        exposeCaseReducer(e, t) {
          return (o.sliceCaseReducersByName[e] = t), s;
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: Da(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      Na(a) ? Fa(o, a, s, t) : Ma(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? da(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return pa(e.initialState, (e) => {
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
      return (f ||= c()), f(e, t);
    }
    function m() {
      return (f ||= c()), f.getInitialState();
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return typeof i > `u` && n && (i = na(d, r, m)), i;
      }
      function i(t = l) {
        return na(
          na(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = ka(a, t, () => na(d, t, m), n);
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
function ka(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return typeof o > `u` && r && (o = n()), e(o, ...a);
  }
  return (i.unwrapped = e), i;
}
var Aa = Oa();
function ja() {
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
function Ma({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Pa(r)) throw Error(yo(17));
    (a = r.reducer), (o = r.prepare);
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? $i(e, o) : $i(e));
}
function Na(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Pa(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function Fa({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(yo(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || Ia,
      pending: s || Ia,
      rejected: c || Ia,
      settled: l || Ia,
    });
}
function Ia() {}
var La = `task`,
  Ra = `listener`,
  za = `completed`,
  Ba = `cancelled`,
  Va = `task-${Ba}`,
  Ha = `task-${za}`,
  Ua = `${Ra}-${Ba}`,
  Wa = `${Ra}-${za}`,
  Ga = class {
    constructor(e) {
      (this.code = e), (this.message = `${La} ${Ba} (reason: ${e})`);
    }
    name = `TaskAbortError`;
    message;
  },
  Ka = (e, t) => {
    if (typeof e != `function`) throw TypeError(yo(32));
  },
  qa = () => {},
  Ja = (e, t = qa) => (e.catch(t), e),
  Ya = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  Xa = (e, t) => {
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
  Za = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new Ga(t);
    }
  };
function Qa(e, t) {
  let n = qa;
  return new Promise((r, i) => {
    let a = () => i(new Ga(e.reason));
    e.aborted ? a() : ((n = Ya(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = qa;
  });
}
var $a = async (e, t) => {
    try {
      return await Promise.resolve(), { status: `ok`, value: await e() };
    } catch (e) {
      return { status: e instanceof Ga ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  eo = (e) => (t) => Ja(Qa(e, t).then((t) => (Za(e), t))),
  to = (e) => {
    let t = eo(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: no } = Object,
  ro = {},
  io = `listenerMiddleware`,
  ao = (e, t) => {
    let n = (t) => Ya(e, () => Xa(t, e.reason));
    return (r, i) => {
      Ka(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = $a(
        async () => {
          Za(e), Za(a.signal);
          let t = await r({
            pause: eo(a.signal),
            delay: to(a.signal),
            signal: a.signal,
          });
          return Za(a.signal), t;
        },
        () => Xa(a, Ha),
      );
      return (
        i?.autoJoin && t.push(o.catch(qa)),
        {
          result: eo(e)(o),
          cancel() {
            Xa(a, Va);
          },
        }
      );
    };
  },
  oo = (e, t) => {
    let n = async (n, r) => {
      Za(t);
      let i = () => {},
        a = [
          new Promise((t, r) => {
            let a = e({
              predicate: n,
              effect: (e, n) => {
                n.unsubscribe(), t([e, n.getState(), n.getOriginalState()]);
              },
            });
            i = () => {
              a(), r();
            };
          }),
        ];
      r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
      try {
        let e = await Qa(t, Promise.race(a));
        return Za(t), e;
      } finally {
        i();
      }
    };
    return (e, t) => Ja(n(e, t));
  },
  so = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = $i(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw Error(yo(21));
    return Ka(a, `options.listener`), { predicate: i, type: t, effect: a };
  },
  co = no(
    (e) => {
      let { type: t, predicate: n, effect: r } = so(e);
      return {
        id: _a(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(yo(22));
        },
      };
    },
    { withTypes: () => co },
  ),
  lo = (e, t) => {
    let { type: n, effect: r, predicate: i } = so(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  uo = (e) => {
    e.pending.forEach((e) => {
      Xa(e, Ua);
    });
  },
  fo = (e, t) => () => {
    for (let e of t.keys()) uo(e);
    e.clear();
  },
  po = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  mo = no($i(`${io}/add`), { withTypes: () => mo }),
  ho = $i(`${io}/removeAll`),
  go = no($i(`${io}/remove`), { withTypes: () => go }),
  _o = (...e) => {
    console.error(`${io}/error`, ...e);
  },
  vo = (e = {}) => {
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
      { extra: a, onError: o = _o } = e;
    Ka(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          e.unsubscribe(), t?.cancelActive && uo(e);
        }
      ),
      c = (e) => {
        let n = lo(t, e) ?? co(e);
        return s(n);
      };
    no(c, { withTypes: () => c });
    let l = (e) => {
      let n = lo(t, e);
      return n && (n.unsubscribe(), e.cancelActive && uo(n)), !!n;
    };
    no(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = oo(c, u.signal),
          f = [];
        try {
          e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                no({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: to(u.signal),
                  pause: eo(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: ao(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (Xa(e, Ua), n.delete(e));
                    });
                  },
                  cancel: () => {
                    Xa(u, Ua), e.pending.delete(u);
                  },
                  throwIfCancelled: () => {
                    Za(u.signal);
                  },
                }),
              ),
            );
        } catch (e) {
          e instanceof Ga || po(o, e, { raisedBy: `effect` });
        } finally {
          await Promise.all(f), Xa(u, Wa), i(e), e.pending.delete(u);
        }
      },
      d = fo(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!Nr(r)) return n(r);
        if (mo.match(r)) return c(r.payload);
        if (ho.match(r)) {
          d();
          return;
        }
        if (go.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === ro) throw Error(yo(23));
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
                (s = !1), po(o, e, { raisedBy: `predicate` });
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = ro;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function yo(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bo = Aa({
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
        (e.width = t.payload.width), (e.height = t.payload.height);
      },
      setMargin(e, t) {
        (e.margin.top = t.payload.top ?? 0),
          (e.margin.right = t.payload.right ?? 0),
          (e.margin.bottom = t.payload.bottom ?? 0),
          (e.margin.left = t.payload.left ?? 0);
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: xo, setLayout: So, setChartSize: Co, setScale: wo } = bo.actions,
  To = bo.reducer;
function Eo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Eo(Object(n), !0).forEach(function (t) {
          Oo(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Eo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Oo(e, t, n) {
  return (
    (t = ko(t)) in e
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
function ko(e) {
  var t = Ao(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ao(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var jo = Math.PI / 180,
  Mo = (e) => (e * 180) / Math.PI,
  B = (e, t, n, r) => ({
    x: e + Math.cos(-jo * r) * n,
    y: t + Math.sin(-jo * r) * n,
  }),
  No = function (e, t) {
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
  Po = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  Fo = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = Po({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: Mo(c), angleInRadian: c }
    );
  },
  Io = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  Lo = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  Ro = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = Fo({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = Io(t),
      u = a,
      d;
    if (c <= l) {
      for (; u > l; ) u -= 360;
      for (; u < c; ) u += 360;
      d = u >= c && u <= l;
    } else {
      for (; u > c; ) u -= 360;
      for (; u < l; ) u += 360;
      d = u >= l && u <= c;
    }
    return d ? Do(Do({}, t), {}, { radius: i, angle: Lo(u, t) }) : null;
  };
function zo(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function Bo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bo(Object(n), !0).forEach(function (t) {
          Ho(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ho(e, t, n) {
  return (
    (t = Uo(t)) in e
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
function Uo(e) {
  var t = Wo(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wo(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function V(e, t, n) {
  return F(e) || F(t)
    ? n
    : Ht(t)
      ? (0, Rt.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var Go = (e, t, n, r, i) => {
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
        if (zt(l - c) !== zt(u - l)) {
          var f = [];
          if (zt(u - l) === zt(i[1] - i[0])) {
            d = u;
            var p = l + i[1] - i[0];
            (f[0] = Math.min(p, (p + c) / 2)),
              (f[1] = Math.max(p, (p + c) / 2));
          } else {
            d = c;
            var m = u + i[1] - i[0];
            (f[0] = Math.min(l, (m + l) / 2)),
              (f[1] = Math.max(l, (m + l) / 2));
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
  Ko = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        P(e[a])
      )
        return Vo(Vo({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        P(e[o])
      )
        return Vo(Vo({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  qo = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Jo = (e, t, n, r) => {
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
    return i || o.push(t), a || o.push(n), o;
  },
  Yo = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? zt(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !Bt(e.coordinate))
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
  Xo = 1e-4,
  Zo = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - Xo,
        a = Math.max(r[0], r[1]) + Xo,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Qo = (e, t) => {
    if (!t || t.length !== 2 || !P(t[0]) || !P(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!P(e[0]) || e[0] < n) && (i[0] = n),
      (!P(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  $o = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = Bt(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: At,
    none: Tt,
    silhouette: jt,
    wiggle: Mt,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = Bt(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  es = (e, t, n) => {
    var r = $o[n];
    return kt()
      .keys(t)
      .value((e, t) => +V(e, t, 0))
      .order(Et)
      .offset(r)(e);
  };
function ts(e) {
  return e == null ? void 0 : String(e);
}
function ns(e) {
  var { axis: t, ticks: n, bandSize: r, entry: i, index: a, dataKey: o } = e;
  if (t.type === `category`) {
    if (!t.allowDuplicatedCategory && t.dataKey && !F(i[t.dataKey])) {
      var s = Jt(n, `value`, i[t.dataKey]);
      if (s) return s.coordinate + r / 2;
    }
    return n[a] ? n[a].coordinate + r / 2 : null;
  }
  var c = V(i, F(o) ? t.dataKey : o);
  return F(c) ? null : t.scale(c);
}
var rs = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = V(a, t.dataKey, t.scale.domain()[o]);
    return F(s) ? null : t.scale(s) - i / 2 + r;
  },
  is = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  as = (e) => {
    var t = e.flat(2).filter(P);
    return [Math.min(...t), Math.max(...t)];
  },
  os = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  ss = (e, t, n) => {
    if (e != null)
      return os(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = as(zo(r, t, n));
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
  cs = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  ls = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  us = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, vr.default)(t, (e) => e.coordinate),
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
function ds(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return Vo(Vo({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function fs(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function ps(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? Ro({ x: e, y: t }, r)
      : null;
}
var ms = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return Vo(
          Vo(Vo({}, r), B(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return Vo(
        Vo(Vo({}, r), B(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  hs = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  gs = (e) => e.layout.width,
  _s = (e) => e.layout.height,
  vs = (e) => e.layout.scale,
  ys = (e) => e.layout.margin,
  bs = R(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  xs = R(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Ss = `data-recharts-item-index`;
function Cs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cs(Object(n), !0).forEach(function (t) {
          Ts(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ts(e, t, n) {
  return (
    (t = Es(t)) in e
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
function Es(e) {
  var t = Ds(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ds(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Os = (e) => e.brush.height;
function ks(e) {
  return xs(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function As(e) {
  return xs(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function js(e) {
  return bs(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function Ms(e) {
  return bs(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var H = R(
    [gs, _s, ys, Os, ks, As, js, Ms, yr, br],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ws(
          ws({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      (d.bottom += r), (d = Ko(d, c, l));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ws(
        ws({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  Ns = R(H, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  Ps = R(gs, _s, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  Fs = (0, y.createContext)(null),
  Is = () => (0, y.useContext)(Fs) != null,
  Ls = (e) => e.brush,
  Rs = R([Ls, H, ys], (e, t, n) => ({
    height: e.height,
    x: P(e.x) ? e.x : t.left,
    y: P(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: P(e.width) ? e.width : t.width,
  })),
  zs = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t, { signal: n, edges: r } = {}) {
      let i,
        a = null,
        o = r != null && r.includes(`leading`),
        s = r == null || r.includes(`trailing`),
        c = () => {
          a !== null && (e.apply(i, a), (i = void 0), (a = null));
        },
        l = () => {
          s && c(), p();
        },
        u = null,
        d = () => {
          u != null && clearTimeout(u),
            (u = setTimeout(() => {
              (u = null), l();
            }, t));
        },
        f = () => {
          u !== null && (clearTimeout(u), (u = null));
        },
        p = () => {
          f(), (i = void 0), (a = null);
        },
        m = () => {
          c();
        },
        h = function (...e) {
          if (n?.aborted) return;
          (i = this), (a = e);
          let t = u == null;
          d(), o && t && c();
        };
      return (
        (h.schedule = d),
        (h.cancel = p),
        (h.flush = m),
        n?.addEventListener(`abort`, p, { once: !0 }),
        h
      );
    }
    e.debounce = t;
  }),
  Bs = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = zs();
    function n(e, n = 0, r = {}) {
      typeof r != `object` && (r = {});
      let { leading: i = !1, trailing: a = !0, maxWait: o } = r,
        s = [, ,];
      i && (s[0] = `leading`), a && (s[1] = `trailing`);
      let c,
        l = null,
        u = t.debounce(
          function (...t) {
            (c = e.apply(this, t)), (l = null);
          },
          n,
          { edges: s },
        ),
        d = function (...t) {
          return o != null &&
            (l === null && (l = Date.now()), Date.now() - l >= o)
            ? ((c = e.apply(this, t)),
              (l = Date.now()),
              u.cancel(),
              u.schedule(),
              c)
            : (u.apply(this, t), c);
        };
      return (d.cancel = u.cancel), (d.flush = () => (u.flush(), c)), d;
    }
    e.debounce = n;
  }),
  Vs = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Bs();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  Hs = n(
    i((e, t) => {
      t.exports = Vs().throttle;
    })(),
  ),
  Us = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = Vt(r) ? e : Number(r),
      c = Vt(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  Ws = { width: 0, height: 0, overflow: `visible` },
  Gs = { width: 0, overflowX: `visible` },
  Ks = { height: 0, overflowY: `visible` },
  qs = {},
  Js = (e) => {
    var { width: t, height: n } = e,
      r = Vt(t),
      i = Vt(n);
    return r && i ? Ws : r ? Gs : i ? Ks : qs;
  };
function Ys(e) {
  var { width: t, height: n, aspect: r } = e,
    i = t,
    a = n;
  return (
    i === void 0 && a === void 0
      ? ((i = `100%`), (a = `100%`))
      : i === void 0
        ? (i = r && r > 0 ? void 0 : `100%`)
        : a === void 0 && (a = r && r > 0 ? void 0 : `100%`),
    { width: i, height: a }
  );
}
function Xs(e) {
  return Number.isFinite(e);
}
function Zs(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(null, arguments)
  );
}
function $s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
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
var ic = (0, y.createContext)({ width: -1, height: -1 });
function ac(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, y.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : y.createElement(ic.Provider, { value: i }, t);
}
var oc = () => (0, y.useContext)(ic),
  sc = (0, y.forwardRef)((e, t) => {
    var {
        aspect: n,
        initialDimension: r = { width: -1, height: -1 },
        width: i,
        height: a,
        minWidth: o = 0,
        minHeight: s,
        maxHeight: c,
        children: l,
        debounce: u = 0,
        id: d,
        className: f,
        onResize: p,
        style: m = {},
      } = e,
      h = (0, y.useRef)(null),
      g = (0, y.useRef)();
    (g.current = p), (0, y.useImperativeHandle)(t, () => h.current);
    var [_, v] = (0, y.useState)({
        containerWidth: r.width,
        containerHeight: r.height,
      }),
      b = (0, y.useCallback)((e, t) => {
        v((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, y.useEffect)(() => {
      var e = (e) => {
        var t,
          { width: n, height: r } = e[0].contentRect;
        b(n, r), (t = g.current) == null || t.call(g, n, r);
      };
      u > 0 && (e = (0, Hs.default)(e, u, { trailing: !0, leading: !1 }));
      var t = new ResizeObserver(e),
        { width: n, height: r } = h.current.getBoundingClientRect();
      return (
        b(n, r),
        t.observe(h.current),
        () => {
          t.disconnect();
        }
      );
    }, [b, u]);
    var { containerWidth: x, containerHeight: C } = _,
      { calculatedWidth: w, calculatedHeight: T } = Us(x, C, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: c,
      });
    return y.createElement(
      `div`,
      {
        id: d ? `${d}` : void 0,
        className: S(`recharts-responsive-container`, f),
        style: ec(
          ec({}, m),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: c },
        ),
        ref: h,
      },
      y.createElement(
        `div`,
        { style: Js({ width: i, height: a }) },
        y.createElement(ac, { width: w, height: T }, l),
      ),
    );
  }),
  cc = (0, y.forwardRef)((e, t) => {
    var n = oc();
    if (Zs(n.width) && Zs(n.height)) return e.children;
    var { width: r, height: i } = Ys({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = Us(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return P(a) && P(o)
      ? y.createElement(ac, { width: a, height: o }, e.children)
      : y.createElement(sc, Qs({}, e, { width: r, height: i, ref: t }));
  }),
  lc = () => {
    var e = Is(),
      t = L(Ns),
      n = L(Rs),
      r = L(Ls)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  uc = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  dc = () => L(H) ?? uc,
  fc = () => L(gs),
  pc = () => L(_s),
  mc = () => L((e) => e.layout.margin),
  U = (e) => e.layout.layoutType,
  hc = () => L(U),
  gc = (e) => {
    var t = I(),
      n = Is(),
      { width: r, height: i } = e,
      a = oc(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, y.useEffect)(() => {
        !n && Zs(o) && Zs(s) && t(Co({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  _c = Aa({
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
        (e.size.width = t.payload.width), (e.size.height = t.payload.height);
      },
      setLegendSettings(e, t) {
        (e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter);
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(Mi(t.payload));
        },
        prepare: oa(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Di(e).payload.indexOf(Mi(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: oa(),
      },
    },
  }),
  {
    setLegendSize: vc,
    setLegendSettings: yc,
    addLegendPayload: bc,
    removeLegendPayload: xc,
  } = _c.actions,
  Sc = _c.reducer;
function Cc() {
  return (
    (Cc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cc.apply(null, arguments)
  );
}
function wc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wc(Object(n), !0).forEach(function (t) {
          Ec(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ec(e, t, n) {
  return (
    (t = Dc(t)) in e
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
function Dc(e) {
  var t = Oc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Oc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function kc(e) {
  return Array.isArray(e) && Ht(e[0]) && Ht(e[1]) ? e.join(` ~ `) : e;
}
var Ac = (e) => {
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
            n = (s ? (0, vr.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || kc,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = Tc(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return y.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: f,
                },
                Ht(u)
                  ? y.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                Ht(u)
                  ? y.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                y.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                y.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return y.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      m = Tc(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = Tc({ margin: 0 }, i),
      g = !F(u),
      _ = g ? u : ``,
      v = S(`recharts-default-tooltip`, c),
      b = S(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var x = f ? { role: `status`, "aria-live": `assertive` } : {};
    return y.createElement(
      `div`,
      Cc({ className: v, style: m }, x),
      y.createElement(
        `p`,
        { className: b, style: h },
        y.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  jc = `recharts-tooltip-wrapper`,
  Mc = { visibility: `hidden` };
function Nc(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return S(jc, {
    [`${jc}-right`]: P(n) && t && P(t.x) && n >= t.x,
    [`${jc}-left`]: P(n) && t && P(t.x) && n < t.x,
    [`${jc}-bottom`]: P(r) && t && P(t.y) && r >= t.y,
    [`${jc}-top`]: P(r) && t && P(t.y) && r < t.y,
  });
}
function Pc(e) {
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
  if (a && P(a[r])) return a[r];
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
function Fc(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function Ic(e) {
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
      ? ((u = Pc({
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
        (d = Pc({
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
        (l = Fc({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = Mc),
    {
      cssProperties: l,
      cssClasses: Nc({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function Lc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Lc(Object(n), !0).forEach(function (t) {
          zc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Lc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zc(e, t, n) {
  return (
    (t = Bc(t)) in e
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
function Bc(e) {
  var t = Vc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Vc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Hc = class extends y.PureComponent {
    constructor() {
      super(...arguments),
        zc(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        zc(this, `handleKeyDown`, (e) => {
          e.key === `Escape` &&
            this.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: this.props.coordinate?.x ?? 0,
                y: this.props.coordinate?.y ?? 0,
              },
            });
        });
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
        { cssClasses: _, cssProperties: v } = Ic({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        b = Rc(
          Rc(
            {},
            g
              ? {}
              : Rc(
                  Rc(
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
      return y.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: _,
          style: b,
          ref: h,
        },
        i,
      );
    }
  },
  Uc = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  Wc = () => L((e) => e.rootProps.accessibilityLayer);
function Gc() {
  return (
    (Gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gc.apply(null, arguments)
  );
}
function Kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
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
var Zc = {
    curveBasisClosed: it,
    curveBasisOpen: ot,
    curveBasis: nt,
    curveBumpX: Me,
    curveBumpY: Ne,
    curveLinearClosed: ct,
    curveLinear: Ee,
    curveMonotoneX: gt,
    curveMonotoneY: _t,
    curveNatural: bt,
    curveStep: St,
    curveStepAfter: wt,
    curveStepBefore: Ct,
  },
  Qc = (e) => Xs(e.x) && Xs(e.y),
  $c = (e) => e.x,
  el = (e) => e.y,
  tl = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${Yt(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? Zc[`${n}${t === `vertical` ? `Y` : `X`}`]
      : Zc[n] || Ee;
  },
  nl = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = tl(t, i),
      s = a ? n.filter(Qc) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => Qc(e)) : r,
        u = s.map((e, t) => qc(qc({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? Ae()
                .y(el)
                .x1($c)
                .x0((e) => e.base.x)
            : Ae()
                .x($c)
                .y1(el)
                .y0((e) => e.base.y)),
        c.defined(Qc).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && P(r)
          ? Ae().y(el).x1($c).x0(r)
          : P(r)
            ? Ae().x($c).y1(el).y0(r)
            : ke().x($c).y(el)),
      c.defined(Qc).curve(o),
      c(s)
    );
  },
  rl = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? nl(e) : r;
    return y.createElement(
      `path`,
      Gc({}, O(e), fn(e), {
        className: S(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  il = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(null, arguments)
  );
}
function ol(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ol(Object(n), !0).forEach(function (t) {
          cl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ol(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cl(e, t, n) {
  return (
    (t = ll(t)) in e
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
function ll(e) {
  var t = ul(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ul(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function dl(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = fl(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function fl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var pl = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  ml = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = dl(e, il),
      l = sl({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !P(t) || !P(n) || !P(a) || !P(o) || !P(r) || !P(i)
      ? null
      : y.createElement(
          `path`,
          al({}, A(l), {
            className: S(`recharts-cross`, s),
            d: pl(t, n, a, o, r, i),
          }),
        );
  };
function hl(e, t, n, r) {
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
function gl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gl(Object(n), !0).forEach(function (t) {
          vl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vl(e, t, n) {
  return (
    (t = yl(t)) in e
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
function yl(e) {
  var t = bl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function xl(e, t) {
  var n = _l({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function Sl() {}
function Cl(e) {
  return e != null;
}
function wl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wl(Object(n), !0).forEach(function (t) {
          El(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function El(e, t, n) {
  return (
    (t = Dl(t)) in e
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
function Dl(e) {
  var t = Ol(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ol(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kl = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  Al = (e, t, n) => e.map((e) => `${kl(e)} ${t}ms ${n}`).join(`,`),
  jl = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  Ml = (e, t) =>
    Object.keys(t).reduce((n, r) => Tl(Tl({}, n), {}, { [r]: e(r, t[r]) }), {});
function Nl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nl(Object(n), !0).forEach(function (t) {
          Pl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pl(e, t, n) {
  return (
    (t = Fl(t)) in e
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
function Fl(e) {
  var t = Il(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Il(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ll = (e, t, n) => e + (t - e) * n,
  Rl = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  zl = (e, t, n) => {
    var r = Ml((t, n) => {
      if (Rl(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return W(W({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? Ml(
          (e, t) =>
            Rl(t)
              ? W(
                  W({}, t),
                  {},
                  {
                    velocity: Ll(t.velocity, r[e].velocity, n),
                    from: Ll(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : zl(e, r, n - 1);
  };
function Bl(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) => W(W({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => Ml((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Rl).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      (s = zl(n, s, f)),
        i(W(W(W({}, e), t), c())),
        (o = r),
        l() || (u = a.setTimeout(d));
    };
  return () => (
    (u = a.setTimeout(d)),
    () => {
      u();
    }
  );
}
function Vl(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => W(W({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = Ml((e, t) => Ll(...t, n(d)), c);
      if ((a(W(W(W({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = Ml((e, t) => Ll(...t, n(1)), c);
        a(W(W(W({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var Hl = (e, t, n, r, i, a) => {
    var o = jl(e, t);
    return n.isStepper === !0 ? Bl(e, t, n, o, i, a) : Vl(e, t, n, r, o, i, a);
  },
  Ul = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  Wl = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Gl = (e, t) => (n) => Wl(Ul(e, t), n),
  Kl = (e, t) => (n) =>
    Wl(
      [
        ...Ul(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  ql = function () {
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
    var o = Gl(e, t),
      s = Gl(n, r),
      c = Kl(e, t),
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
    return (u.isStepper = !1), u;
  },
  Jl = function () {
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
    return (r.isStepper = !0), (r.dt = n), r;
  },
  Yl = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return ql(e);
        case `spring`:
          return Jl();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return ql(e);
      }
    return typeof e == `function` ? e : null;
  };
function Xl(e) {
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
          a(s), (i = e.setTimeout(a.bind(null, c)));
        } else
          typeof o == `string` && ((t = o), n(t)),
            typeof o == `object` && ((t = o), n(t)),
            typeof o == `function` && o();
      }
    };
  return {
    stop: () => {
      r = !0;
    },
    start: (e) => {
      (r = !1), (i &&= (i(), null)), a(e);
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
var Zl = class {
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
function Ql() {
  return Xl(new Zl());
}
var $l = (0, y.createContext)(Ql);
function eu(e, t) {
  var n = (0, y.useContext)($l);
  return (0, y.useMemo)(() => t ?? n(e), [e, t, n]);
}
var tu = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  nu = { t: 0 },
  ru = { t: 1 };
function iu(e) {
  var t = xl(e, tu),
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
    u = eu(t.animationId, t.animationManager),
    [d, f] = (0, y.useState)(n ? nu : ru),
    p = (0, y.useRef)(null);
  return (
    (0, y.useEffect)(() => {
      n || f(ru);
    }, [n]),
    (0, y.useEffect)(() => {
      if (!n || !r) return Sl;
      var e = Hl(nu, ru, Yl(a), i, f, u.getTimeoutController());
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
          u.stop(), p.current && p.current(), s();
        }
      );
    }, [n, r, i, a, o, c, s, u]),
    l(d.t)
  );
}
function au(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, y.useRef)(Wt(t)),
    r = (0, y.useRef)(e);
  return r.current !== e && ((n.current = Wt(t)), (r.current = e)), n.current;
}
var ou = [`radius`],
  su = [`radius`];
function cu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cu(Object(n), !0).forEach(function (t) {
          uu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function uu(e, t, n) {
  return (
    (t = du(t)) in e
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
function du(e) {
  var t = fu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function pu() {
  return (
    (pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pu.apply(null, arguments)
  );
}
function mu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = hu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function hu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var gu = (e, t, n, r, i) => {
    var a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
      o = r >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = +((r >= 0 && n >= 0) || (r < 0 && n < 0)),
      l;
    if (a > 0 && i instanceof Array) {
      for (var u = [0, 0, 0, 0], d = 0, f = 4; d < f; d++)
        u[d] = i[d] > a ? a : i[d];
      (l = `M${e},${t + o * u[0]}`),
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
        (l += `Z`);
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
  _u = {
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
  vu = (e) => {
    var t = xl(e, _u),
      n = (0, y.useRef)(null),
      [r, i] = (0, y.useState)(-1);
    (0, y.useEffect)(() => {
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
      g = (0, y.useRef)(s),
      _ = (0, y.useRef)(c),
      v = (0, y.useRef)(a),
      b = (0, y.useRef)(o),
      x = au(
        (0, y.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var C = S(`recharts-rectangle`, u);
    if (!h) {
      var w = A(t),
        { radius: T } = w,
        E = mu(w, ou);
      return y.createElement(
        `path`,
        pu({}, E, {
          radius: typeof l == `number` ? l : void 0,
          className: C,
          d: gu(a, o, s, c, l),
        }),
      );
    }
    var D = g.current,
      O = _.current,
      k = v.current,
      ee = b.current,
      j = `0px ${r === -1 ? 1 : r}px`,
      M = `${r}px 0px`,
      te = Al([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return y.createElement(
      iu,
      {
        animationId: x,
        key: x,
        canBegin: r > 0,
        duration: f,
        easing: d,
        isActive: h,
        begin: p,
      },
      (e) => {
        var r = qt(D, s, e),
          i = qt(O, c, e),
          u = qt(k, a, e),
          d = qt(ee, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (b.current = d));
        var f = m
            ? e > 0
              ? { transition: te, strokeDasharray: M }
              : { strokeDasharray: j }
            : { strokeDasharray: M },
          p = A(t),
          { radius: h } = p,
          x = mu(p, su);
        return y.createElement(
          `path`,
          pu({}, x, {
            radius: typeof l == `number` ? l : void 0,
            className: C,
            d: gu(u, d, r, i, l),
            ref: n,
            style: lu(lu({}, f), t.style),
          }),
        );
      },
    );
  };
function yu(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [B(t, n, r, i), B(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function bu() {
  return (
    (bu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bu.apply(null, arguments)
  );
}
var xu = (e, t) => zt(t - e) * Math.min(Math.abs(t - e), 359.999),
  Su = (e) => {
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
      u = Math.asin(s / l) / jo,
      d = c ? i : i + a * u,
      f = B(t, n, l, d),
      p = B(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: B(t, n, l * Math.cos(u * jo), m),
      theta: u,
    };
  },
  Cu = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = xu(a, o),
      c = a + s,
      l = B(t, n, i, a),
      u = B(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = B(t, n, r, a),
        p = B(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  wu = (e) => {
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
      u = zt(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Su({
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
      } = Su({
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
        : Cu({
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
        } = Su({
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
        } = Su({
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
  Tu = {
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
  Eu = (e) => {
    var t = xl(e, Tu),
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
    var f = S(`recharts-sector`, d),
      p = a - i,
      m = Gt(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? wu({
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
          : Cu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return y.createElement(`path`, bu({}, A(t), { className: f, d: h }));
  };
function Du(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    (r = t.x), (a = r), (i = n.top), (o = n.top + n.height);
  else if (e === `vertical`)
    (i = t.y), (o = i), (r = n.left), (a = n.left + n.width);
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = B(s, c, l, d),
        p = B(s, c, u, d);
      (r = f.x), (i = f.y), (a = p.x), (o = p.y);
    } else return yu(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var Ou = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = fr();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  ku = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ou();
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
  Au = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gr(),
      n = ku();
    function r(e, r, i) {
      i &&
        typeof i != `number` &&
        t.isIterateeCall(e, r, i) &&
        (r = i = void 0),
        (e = n.toFinite(e)),
        r === void 0 ? ((r = e), (e = 0)) : (r = n.toFinite(r)),
        (i = i === void 0 ? (e < r ? 1 : -1) : n.toFinite(i));
      let a = Math.max(Math.ceil((r - e) / (i || 1)), 0),
        o = Array(a);
      for (let t = 0; t < a; t++) (o[t] = e), (e += i);
      return o;
    }
    e.range = r;
  }),
  ju = i((e, t) => {
    t.exports = Au().range;
  });
function Mu(e, t) {
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
function Nu(e, t) {
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
function Pu(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === Mu || e === Nu ? e : Fu), (n = e), (r = e))
    : ((t = Mu), (n = (t, n) => Mu(e(t), n)), (r = (t, n) => e(t) - n));
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
function Fu() {
  return 0;
}
function Iu(e) {
  return e === null ? NaN : +e;
}
function* Lu(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Ru = Pu(Mu),
  zu = Ru.right;
Ru.left, Pu(Iu).center;
var Bu = class extends Map {
  constructor(e, t = Wu) {
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
    return super.get(Vu(this, e));
  }
  has(e) {
    return super.has(Vu(this, e));
  }
  set(e, t) {
    return super.set(Hu(this, e), t);
  }
  delete(e) {
    return super.delete(Uu(this, e));
  }
};
function Vu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Hu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Uu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function Wu(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function Gu(e = Mu) {
  if (e === Mu) return Ku;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function Ku(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var qu = Math.sqrt(50),
  Ju = Math.sqrt(10),
  Yu = Math.sqrt(2);
function Xu(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= qu ? 10 : a >= Ju ? 5 : a >= Yu ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? Xu(e, t, n * 2) : [s, c, l]
  );
}
function Zu(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? Xu(t, e, n) : Xu(e, t, n);
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
function Qu(e, t, n) {
  return (t = +t), (e = +e), (n = +n), Xu(e, t, n)[2];
}
function $u(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  let r = t < e,
    i = r ? Qu(t, e, n) : Qu(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ed(e, t) {
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
function td(e, t) {
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
function nd(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? Ku : Gu(i); r > n; ) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      nd(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (rd(e, n, t), i(e[r], a) > 0 && rd(e, n, r); o < s; ) {
      for (rd(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[n], a) === 0 ? rd(e, n, s) : (++s, rd(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1);
  }
  return e;
}
function rd(e, t, n) {
  let r = e[t];
  (e[t] = e[n]), (e[n] = r);
}
function id(e, t, n) {
  if (((e = Float64Array.from(Lu(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return td(e);
    if (t >= 1) return ed(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = ed(nd(e, a).subarray(0, a + 1));
    return o + (td(e.subarray(a + 1)) - o) * (i - a);
  }
}
function ad(e, t, n = Iu) {
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
function od(e, t, n) {
  (e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n);
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i);
    ++r < i;
  )
    a[r] = e + r * n;
  return a;
}
function sd(e, t) {
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
function cd(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      this.domain(e),
        typeof t == `function` ? this.interpolator(t) : this.range(t);
  }
  return this;
}
var ld = Symbol(`implicit`);
function ud() {
  var e = new Bu(),
    t = [],
    n = [],
    r = ld;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== ld) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Bu());
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
      return ud(t, n).unknown(r);
    }),
    sd.apply(i, arguments),
    i
  );
}
function dd() {
  var e = ud().unknown(void 0),
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
    (a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o)));
    var m = od(e).map(function (e) {
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
      return ([r, i] = e), (r = +r), (i = +i), (s = !0), d();
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
      return dd(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    sd.apply(d(), arguments)
  );
}
function fd(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return fd(t());
    }),
    e
  );
}
function pd() {
  return fd(dd.apply(null, arguments).paddingInner(1));
}
function md(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function hd(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function gd() {}
var _d = 0.7,
  vd = 1 / _d,
  yd = `\\s*([+-]?\\d+)\\s*`,
  bd = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  xd = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Sd = /^#([0-9a-f]{3,8})$/,
  Cd = RegExp(`^rgb\\(${yd},${yd},${yd}\\)$`),
  wd = RegExp(`^rgb\\(${xd},${xd},${xd}\\)$`),
  Td = RegExp(`^rgba\\(${yd},${yd},${yd},${bd}\\)$`),
  Ed = RegExp(`^rgba\\(${xd},${xd},${xd},${bd}\\)$`),
  Dd = RegExp(`^hsl\\(${bd},${xd},${xd}\\)$`),
  Od = RegExp(`^hsla\\(${bd},${xd},${xd},${bd}\\)$`),
  kd = {
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
md(gd, Pd, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ad,
  formatHex: Ad,
  formatHex8: jd,
  formatHsl: Md,
  formatRgb: Nd,
  toString: Nd,
});
function Ad() {
  return this.rgb().formatHex();
}
function jd() {
  return this.rgb().formatHex8();
}
function Md() {
  return qd(this).formatHsl();
}
function Nd() {
  return this.rgb().formatRgb();
}
function Pd(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Sd.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? Fd(t)
          : n === 3
            ? new zd(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Id(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? Id(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Cd.exec(e))
        ? new zd(t[1], t[2], t[3], 1)
        : (t = wd.exec(e))
          ? new zd(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Td.exec(e))
            ? Id(t[1], t[2], t[3], t[4])
            : (t = Ed.exec(e))
              ? Id(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = Dd.exec(e))
                ? Kd(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Od.exec(e))
                  ? Kd(t[1], t[2] / 100, t[3] / 100, t[4])
                  : kd.hasOwnProperty(e)
                    ? Fd(kd[e])
                    : e === `transparent`
                      ? new zd(NaN, NaN, NaN, 0)
                      : null
  );
}
function Fd(e) {
  return new zd((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Id(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zd(e, t, n, r);
}
function Ld(e) {
  return (
    e instanceof gd || (e = Pd(e)),
    e ? ((e = e.rgb()), new zd(e.r, e.g, e.b, e.opacity)) : new zd()
  );
}
function Rd(e, t, n, r) {
  return arguments.length === 1 ? Ld(e) : new zd(e, t, n, r ?? 1);
}
function zd(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
md(
  zd,
  Rd,
  hd(gd, {
    brighter(e) {
      return (
        (e = e == null ? vd : vd ** +e),
        new zd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? _d : _d ** +e),
        new zd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new zd(Wd(this.r), Wd(this.g), Wd(this.b), Ud(this.opacity));
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
    hex: Bd,
    formatHex: Bd,
    formatHex8: Vd,
    formatRgb: Hd,
    toString: Hd,
  }),
);
function Bd() {
  return `#${Gd(this.r)}${Gd(this.g)}${Gd(this.b)}`;
}
function Vd() {
  return `#${Gd(this.r)}${Gd(this.g)}${Gd(this.b)}${Gd((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hd() {
  let e = Ud(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${Wd(this.r)}, ${Wd(this.g)}, ${Wd(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function Ud(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wd(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gd(e) {
  return (e = Wd(e)), (e < 16 ? `0` : ``) + e.toString(16);
}
function Kd(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Yd(e, t, n, r)
  );
}
function qd(e) {
  if (e instanceof Yd) return new Yd(e.h, e.s, e.l, e.opacity);
  if ((e instanceof gd || (e = Pd(e)), !e)) return new Yd();
  if (e instanceof Yd) return e;
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
    new Yd(o, s, c, e.opacity)
  );
}
function Jd(e, t, n, r) {
  return arguments.length === 1 ? qd(e) : new Yd(e, t, n, r ?? 1);
}
function Yd(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
md(
  Yd,
  Jd,
  hd(gd, {
    brighter(e) {
      return (
        (e = e == null ? vd : vd ** +e),
        new Yd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? _d : _d ** +e),
        new Yd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new zd(
        Qd(e >= 240 ? e - 240 : e + 120, i, r),
        Qd(e, i, r),
        Qd(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new Yd(Xd(this.h), Zd(this.s), Zd(this.l), Ud(this.opacity));
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
      let e = Ud(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${Xd(this.h)}, ${Zd(this.s) * 100}%, ${Zd(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function Xd(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function Zd(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qd(e, t, n) {
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
var $d = (e) => () => e;
function ef(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function tf(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function nf(e) {
  return (e = +e) == 1
    ? rf
    : function (t, n) {
        return n - t ? tf(t, n, e) : $d(isNaN(t) ? n : t);
      };
}
function rf(e, t) {
  var n = t - e;
  return n ? ef(e, n) : $d(isNaN(e) ? t : e);
}
var af = (function e(t) {
  var n = nf(t);
  function r(e, t) {
    var r = n((e = Rd(e)).r, (t = Rd(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = rf(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function of(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function sf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function cf(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = _f(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function lf(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function uf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function df(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = _f(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var ff = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  pf = new RegExp(ff.source, `g`);
function mf(e) {
  return function () {
    return e;
  };
}
function hf(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function gf(e, t) {
  var n = (ff.lastIndex = pf.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = ff.exec(e)) && (i = pf.exec(t)); )
    (a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: uf(r, i) })),
      (n = pf.lastIndex);
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? hf(c[0].x)
        : mf(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function _f(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? $d(t)
    : (n === `number`
        ? uf
        : n === `string`
          ? (r = Pd(t))
            ? ((t = r), af)
            : gf
          : t instanceof Pd
            ? af
            : t instanceof Date
              ? lf
              : sf(t)
                ? of
                : Array.isArray(t)
                  ? cf
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? df
                    : uf)(e, t);
}
function vf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function yf(e, t) {
  t === void 0 && ((t = e), (e = _f));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r; )
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function bf(e) {
  return function () {
    return e;
  };
}
function xf(e) {
  return +e;
}
var Sf = [0, 1];
function Cf(e) {
  return e;
}
function wf(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : bf(isNaN(t) ? NaN : 0.5);
}
function Tf(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Ef(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = wf(i, r)), (a = n(o, a))) : ((r = wf(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Df(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    (i[o] = wf(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1]));
  return function (t) {
    var n = zu(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Of(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function kf() {
  var e = Sf,
    t = Sf,
    n = _f,
    r,
    i,
    a,
    o = Cf,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== Cf && (o = Tf(e[0], e[n - 1])),
      (s = n > 2 ? Df : Ef),
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
      return o(i((l ||= s(t, e.map(r), uf))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, xf)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return (t = Array.from(e)), (n = vf), u();
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : Cf), u()) : o !== Cf;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return (r = e), (i = t), u();
    }
  );
}
function Af() {
  return kf()(Cf, Cf);
}
function jf(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function Mf(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Nf(e) {
  return (e = Mf(Math.abs(e))), e ? e[1] : NaN;
}
function Pf(e, t) {
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
function Ff(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var If =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Lf(e) {
  if (!(t = If.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Rf({
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
Lf.prototype = Rf.prototype;
function Rf(e) {
  (this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``);
}
Rf.prototype.toString = function () {
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
function zf(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Bf;
function Vf(e, t) {
  var n = Mf(e, t);
  if (!n) return (Bf = void 0), e.toPrecision(t);
  var r = n[0],
    i = n[1],
    a = i - (Bf = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + Mf(e, Math.max(0, t + a - 1))[0];
}
function Hf(e, t) {
  var n = Mf(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Uf = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: jf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Hf(e * 100, t),
  r: Hf,
  s: Vf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Wf(e) {
  return e;
}
var Gf = Array.prototype.map,
  Kf = [
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
function qf(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Wf
        : Pf(Gf.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? Wf : Ff(Gf.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = Lf(e);
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
    y === `n`
      ? ((g = !0), (y = `g`))
      : Uf[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`));
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
      S = Uf[y],
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
      if (y === `c`) (r = S(e) + r), (e = ``);
      else {
        e = +e;
        var w = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : S(Math.abs(e), _)),
          v && (e = zf(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && Bf !== void 0 ? Kf[8 + Bf / 3] : ``) +
            r +
            (w && f === `(` ? `)` : ``)),
          C)
        ) {
          for (o = -1, l = e.length; ++o < l; )
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              (r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r),
                (e = e.slice(0, o));
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
    var n = Math.max(-8, Math.min(8, Math.floor(Nf(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = Lf(e)), (e.type = `f`), e), { suffix: Kf[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var Jf, Yf, Xf;
Zf({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function Zf(e) {
  return (Jf = qf(e)), (Yf = Jf.format), (Xf = Jf.formatPrefix), Jf;
}
function Qf(e) {
  return Math.max(0, -Nf(Math.abs(e)));
}
function $f(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Nf(t) / 3))) * 3 - Nf(Math.abs(e)),
  );
}
function ep(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Nf(t) - Nf(e)) + 1
  );
}
function tp(e, t, n, r) {
  var i = $u(e, t, n),
    a;
  switch (((r = Lf(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = $f(i, o))) && (r.precision = a),
        Xf(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = ep(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = Qf(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return Yf(r);
}
function np(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return Zu(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return tp(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = Qu(o, s, n)), l === c)) return (r[i] = o), (r[a] = s), t(r);
        if (l > 0) (o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l);
        else if (l < 0) (o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l);
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function rp() {
  var e = Af();
  return (
    (e.copy = function () {
      return Of(e, rp());
    }),
    sd.apply(e, arguments),
    np(e)
  );
}
function ip(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, xf)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return ip(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, xf) : [0, 1]),
    np(n)
  );
}
function ap(e, t) {
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
function op(e) {
  return Math.log(e);
}
function sp(e) {
  return Math.exp(e);
}
function cp(e) {
  return -Math.log(-e);
}
function lp(e) {
  return -Math.exp(-e);
}
function up(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function dp(e) {
  return e === 10 ? up : e === Math.E ? Math.exp : (t) => e ** +t;
}
function fp(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function pp(e) {
  return (t, n) => -e(-t, n);
}
function mp(e) {
  let t = e(op, sp),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = fp(r)),
      (a = dp(r)),
      n()[0] < 0 ? ((i = pp(i)), (a = pp(a)), e(cp, lp)) : e(op, sp),
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
        m.length * 2 < p && (m = Zu(o, s, p));
      } else m = Zu(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = Lf(n)).precision == null && (n.trim = !0),
          (n = Yf(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``;
      };
    }),
    (t.nice = () =>
      n(
        ap(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function hp() {
  let e = mp(kf()).domain([1, 10]);
  return (e.copy = () => Of(e, hp()).base(e.base())), sd.apply(e, arguments), e;
}
function gp(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function _p(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function vp(e) {
  var t = 1,
    n = e(gp(t), _p(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(gp((t = +n)), _p(t)) : t;
    }),
    np(n)
  );
}
function yp() {
  var e = vp(kf());
  return (
    (e.copy = function () {
      return Of(e, yp()).constant(e.constant());
    }),
    sd.apply(e, arguments)
  );
}
function bp(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function xp(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Sp(e) {
  return e < 0 ? -e * e : e * e;
}
function Cp(e) {
  var t = e(Cf, Cf),
    n = 1;
  function r() {
    return n === 1 ? e(Cf, Cf) : n === 0.5 ? e(xp, Sp) : e(bp(n), bp(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    np(t)
  );
}
function wp() {
  var e = Cp(kf());
  return (
    (e.copy = function () {
      return Of(e, wp()).exponent(e.exponent());
    }),
    sd.apply(e, arguments),
    e
  );
}
function Tp() {
  return wp.apply(null, arguments).exponent(0.5);
}
function Ep(e) {
  return Math.sign(e) * e * e;
}
function Dp(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Op() {
  var e = Af(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Dp(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Ep(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, xf)).map(Ep)), i)
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
      return Op(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    sd.apply(i, arguments),
    np(i)
  );
}
function kp() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i; ) n[r - 1] = ad(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[zu(n, e)];
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
      return e.sort(Mu), i();
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
      return kp().domain(e).range(t).unknown(r);
    }),
    sd.apply(a, arguments)
  );
}
function Ap() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[zu(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n; ) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
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
      return arguments.length && (a = e), o;
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return Ap().domain([e, t]).range(i).unknown(a);
    }),
    sd.apply(np(o), arguments)
  );
}
function jp() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[zu(e, i, 0, r)] : n;
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
      return jp().domain(e).range(t).unknown(n);
    }),
    sd.apply(i, arguments)
  );
}
var Mp = new Date(),
  Np = new Date();
function G(e, t, n, r) {
  function i(t) {
    return e((t = arguments.length === 0 ? new Date() : new Date(+t))), t;
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
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)), e
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
      do o.push((s = new Date(+n))), t(n, a), e(n);
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      G(
        (t) => {
          if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e) {
            if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
            else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
          }
        },
      )),
    n &&
      ((i.count = (t, r) => (
        Mp.setTime(+t), Np.setTime(+r), e(Mp), e(Np), Math.floor(n(Mp, Np))
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
var Pp = G(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
(Pp.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? G(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : Pp
)),
  Pp.range;
var Fp = 1e3,
  Ip = Fp * 60,
  Lp = Ip * 60,
  Rp = Lp * 24,
  zp = Rp * 7,
  Bp = Rp * 30,
  Vp = Rp * 365,
  Hp = G(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Fp);
    },
    (e, t) => (t - e) / Fp,
    (e) => e.getUTCSeconds(),
  );
Hp.range;
var Up = G(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Fp);
  },
  (e, t) => {
    e.setTime(+e + t * Ip);
  },
  (e, t) => (t - e) / Ip,
  (e) => e.getMinutes(),
);
Up.range;
var Wp = G(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Ip);
  },
  (e, t) => (t - e) / Ip,
  (e) => e.getUTCMinutes(),
);
Wp.range;
var Gp = G(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Fp - e.getMinutes() * Ip,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Lp);
  },
  (e, t) => (t - e) / Lp,
  (e) => e.getHours(),
);
Gp.range;
var Kp = G(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Lp);
  },
  (e, t) => (t - e) / Lp,
  (e) => e.getUTCHours(),
);
Kp.range;
var qp = G(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ip) / Rp,
  (e) => e.getDate() - 1,
);
qp.range;
var Jp = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Rp,
  (e) => e.getUTCDate() - 1,
);
Jp.range;
var Yp = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Rp,
  (e) => Math.floor(e / Rp),
);
Yp.range;
function Xp(e) {
  return G(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ip) / zp,
  );
}
var Zp = Xp(0),
  Qp = Xp(1),
  $p = Xp(2),
  em = Xp(3),
  tm = Xp(4),
  nm = Xp(5),
  rm = Xp(6);
Zp.range, Qp.range, $p.range, em.range, tm.range, nm.range, rm.range;
function im(e) {
  return G(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / zp,
  );
}
var am = im(0),
  om = im(1),
  sm = im(2),
  cm = im(3),
  lm = im(4),
  um = im(5),
  dm = im(6);
am.range, om.range, sm.range, cm.range, lm.range, um.range, dm.range;
var fm = G(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
fm.range;
var pm = G(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
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
pm.range;
var mm = G(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
(mm.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : G(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  mm.range;
var hm = G(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
(hm.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : G(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  hm.range;
function gm(e, t, n, r, i, a) {
  let o = [
    [Hp, 1, Fp],
    [Hp, 5, 5 * Fp],
    [Hp, 15, 15 * Fp],
    [Hp, 30, 30 * Fp],
    [a, 1, Ip],
    [a, 5, 5 * Ip],
    [a, 15, 15 * Ip],
    [a, 30, 30 * Ip],
    [i, 1, Lp],
    [i, 3, 3 * Lp],
    [i, 6, 6 * Lp],
    [i, 12, 12 * Lp],
    [r, 1, Rp],
    [r, 2, 2 * Rp],
    [n, 1, zp],
    [t, 1, Bp],
    [t, 3, 3 * Bp],
    [e, 1, Vp],
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
      a = Pu(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every($u(t / Vp, n / Vp, r));
    if (a === 0) return Pp.every(Math.max($u(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [_m, vm] = gm(hm, pm, am, Yp, Kp, Wp),
  [ym, bm] = gm(mm, fm, Zp, qp, Gp, Up);
function xm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Cm(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function wm(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = km(i),
    u = Am(i),
    d = km(a),
    f = Am(a),
    p = km(o),
    m = Am(o),
    h = km(s),
    g = Am(s),
    _ = km(c),
    v = Am(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: re,
      c: null,
      d: Zm,
      e: Zm,
      f: nh,
      g: ph,
      G: hh,
      H: Qm,
      I: $m,
      j: eh,
      L: th,
      m: rh,
      M: ih,
      p: ie,
      q: ae,
      Q: Rh,
      s: zh,
      S: ah,
      u: oh,
      U: sh,
      V: lh,
      w: uh,
      W: dh,
      x: null,
      X: null,
      y: fh,
      Y: mh,
      Z: gh,
      "%": Lh,
    },
    b = {
      a: oe,
      A: se,
      b: ce,
      B: le,
      c: null,
      d: _h,
      e: _h,
      f: Sh,
      g: Nh,
      G: Fh,
      H: vh,
      I: yh,
      j: bh,
      L: xh,
      m: Ch,
      M: wh,
      p: ue,
      q: N,
      Q: Rh,
      s: zh,
      S: Th,
      u: Eh,
      U: Dh,
      V: kh,
      w: Ah,
      W: jh,
      x: null,
      X: null,
      y: Mh,
      Y: Ph,
      Z: Ih,
      "%": Lh,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: Vm,
      e: Vm,
      f: qm,
      g: Lm,
      G: Im,
      H: Um,
      I: Um,
      j: Hm,
      L: Km,
      m: Bm,
      M: Wm,
      p: T,
      q: zm,
      Q: Ym,
      s: Xm,
      S: Gm,
      u: Mm,
      U: Nm,
      V: Pm,
      w: jm,
      W: Fm,
      x: ee,
      X: j,
      y: Lm,
      Y: Im,
      Z: Rm,
      "%": Jm,
    };
  (y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o; )
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = Tm[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return r.push(e.slice(a, i)), r.join(``);
    };
  }
  function C(e, t) {
    return function (n) {
      var r = Cm(1900, void 0, 1),
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
        `w` in r || (r.w = 1),
          `Z` in r
            ? ((a = Sm(Cm(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? om.ceil(a) : om(a)),
              (a = Jp.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = xm(Cm(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? Qp.ceil(a) : Qp(a)),
              (a = qp.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7)));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? Sm(Cm(r.y, 0, 1)).getUTCDay()
              : xm(Cm(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), Sm(r))
        : xm(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a; ) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in Tm ? t.charAt(i++) : s]),
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
  function ee(e, t, r) {
    return w(e, n, t, r);
  }
  function j(e, t, n) {
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
  function re(e) {
    return s[e.getMonth()];
  }
  function ie(e) {
    return i[+(e.getHours() >= 12)];
  }
  function ae(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function oe(e) {
    return o[e.getUTCDay()];
  }
  function se(e) {
    return a[e.getUTCDay()];
  }
  function ce(e) {
    return c[e.getUTCMonth()];
  }
  function le(e) {
    return s[e.getUTCMonth()];
  }
  function ue(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function N(e) {
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
var Tm = { "-": ``, _: ` `, 0: `0` },
  K = /^\s*\d+/,
  Em = /^%/,
  Dm = /[\\^$*+?|[\]().{}]/g;
function q(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Om(e) {
  return e.replace(Dm, `\\$&`);
}
function km(e) {
  return RegExp(`^(?:` + e.map(Om).join(`|`) + `)`, `i`);
}
function Am(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function jm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function Mm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Nm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Pm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function Fm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Im(e, t, n) {
  var r = K.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Lm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Rm(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function zm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function Bm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Vm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function Hm(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Um(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function Wm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function Gm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function Km(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function qm(e, t, n) {
  var r = K.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Jm(e, t, n) {
  var r = Em.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Ym(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function Xm(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function Zm(e, t) {
  return q(e.getDate(), t, 2);
}
function Qm(e, t) {
  return q(e.getHours(), t, 2);
}
function $m(e, t) {
  return q(e.getHours() % 12 || 12, t, 2);
}
function eh(e, t) {
  return q(1 + qp.count(mm(e), e), t, 3);
}
function th(e, t) {
  return q(e.getMilliseconds(), t, 3);
}
function nh(e, t) {
  return th(e, t) + `000`;
}
function rh(e, t) {
  return q(e.getMonth() + 1, t, 2);
}
function ih(e, t) {
  return q(e.getMinutes(), t, 2);
}
function ah(e, t) {
  return q(e.getSeconds(), t, 2);
}
function oh(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function sh(e, t) {
  return q(Zp.count(mm(e) - 1, e), t, 2);
}
function ch(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? tm(e) : tm.ceil(e);
}
function lh(e, t) {
  return (e = ch(e)), q(tm.count(mm(e), e) + (mm(e).getDay() === 4), t, 2);
}
function uh(e) {
  return e.getDay();
}
function dh(e, t) {
  return q(Qp.count(mm(e) - 1, e), t, 2);
}
function fh(e, t) {
  return q(e.getFullYear() % 100, t, 2);
}
function ph(e, t) {
  return (e = ch(e)), q(e.getFullYear() % 100, t, 2);
}
function mh(e, t) {
  return q(e.getFullYear() % 1e4, t, 4);
}
function hh(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? tm(e) : tm.ceil(e)), q(e.getFullYear() % 1e4, t, 4)
  );
}
function gh(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    q((t / 60) | 0, `0`, 2) +
    q(t % 60, `0`, 2)
  );
}
function _h(e, t) {
  return q(e.getUTCDate(), t, 2);
}
function vh(e, t) {
  return q(e.getUTCHours(), t, 2);
}
function yh(e, t) {
  return q(e.getUTCHours() % 12 || 12, t, 2);
}
function bh(e, t) {
  return q(1 + Jp.count(hm(e), e), t, 3);
}
function xh(e, t) {
  return q(e.getUTCMilliseconds(), t, 3);
}
function Sh(e, t) {
  return xh(e, t) + `000`;
}
function Ch(e, t) {
  return q(e.getUTCMonth() + 1, t, 2);
}
function wh(e, t) {
  return q(e.getUTCMinutes(), t, 2);
}
function Th(e, t) {
  return q(e.getUTCSeconds(), t, 2);
}
function Eh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Dh(e, t) {
  return q(am.count(hm(e) - 1, e), t, 2);
}
function Oh(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? lm(e) : lm.ceil(e);
}
function kh(e, t) {
  return (e = Oh(e)), q(lm.count(hm(e), e) + (hm(e).getUTCDay() === 4), t, 2);
}
function Ah(e) {
  return e.getUTCDay();
}
function jh(e, t) {
  return q(om.count(hm(e) - 1, e), t, 2);
}
function Mh(e, t) {
  return q(e.getUTCFullYear() % 100, t, 2);
}
function Nh(e, t) {
  return (e = Oh(e)), q(e.getUTCFullYear() % 100, t, 2);
}
function Ph(e, t) {
  return q(e.getUTCFullYear() % 1e4, t, 4);
}
function Fh(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? lm(e) : lm.ceil(e)),
    q(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Ih() {
  return `+0000`;
}
function Lh() {
  return `%`;
}
function Rh(e) {
  return +e;
}
function zh(e) {
  return Math.floor(e / 1e3);
}
var Bh, Vh, Hh;
Uh({
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
function Uh(e) {
  return (
    (Bh = wm(e)),
    (Vh = Bh.format),
    Bh.parse,
    (Hh = Bh.utcFormat),
    Bh.utcParse,
    Bh
  );
}
function Wh(e) {
  return new Date(e);
}
function Gh(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Kh(e, t, n, r, i, a, o, s, c, l) {
  var u = Af(),
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
      return arguments.length ? f(Array.from(e, Gh)) : f().map(Wh);
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
        e ? f(ap(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Of(u, Kh(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function qh() {
  return sd.apply(
    Kh(ym, bm, mm, fm, Zp, qp, Gp, Up, Hp, Vh).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Jh() {
  return sd.apply(
    Kh(_m, vm, hm, pm, am, Jp, Kp, Wp, Hp, Hh).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Yh() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Cf,
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
  (l.domain = function (o) {
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
    });
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(_f)),
    (l.rangeRound = u(vf)),
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
function Xh(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Zh() {
  var e = np(Yh()(Cf));
  return (
    (e.copy = function () {
      return Xh(e, Zh());
    }),
    cd.apply(e, arguments)
  );
}
function Qh() {
  var e = mp(Yh()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Xh(e, Qh()).base(e.base());
    }),
    cd.apply(e, arguments)
  );
}
function $h() {
  var e = vp(Yh());
  return (
    (e.copy = function () {
      return Xh(e, $h()).constant(e.constant());
    }),
    cd.apply(e, arguments)
  );
}
function eg() {
  var e = Cp(Yh());
  return (
    (e.copy = function () {
      return Xh(e, eg()).exponent(e.exponent());
    }),
    cd.apply(e, arguments)
  );
}
function tg() {
  return eg.apply(null, arguments).exponent(0.5);
}
function ng() {
  var e = [],
    t = Cf;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((zu(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return e.sort(Mu), n;
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => id(e, r / t));
    }),
    (n.copy = function () {
      return ng(t).domain(e);
    }),
    cd.apply(n, arguments)
  );
}
function rg() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = Cf,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  (p.domain = function (l) {
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
    });
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = yf(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(_f)),
    (p.rangeRound = m(vf)),
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
function ig() {
  var e = np(rg()(Cf));
  return (
    (e.copy = function () {
      return Xh(e, ig());
    }),
    cd.apply(e, arguments)
  );
}
function ag() {
  var e = mp(rg()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Xh(e, ag()).base(e.base());
    }),
    cd.apply(e, arguments)
  );
}
function og() {
  var e = vp(rg());
  return (
    (e.copy = function () {
      return Xh(e, og()).constant(e.constant());
    }),
    cd.apply(e, arguments)
  );
}
function sg() {
  var e = Cp(rg());
  return (
    (e.copy = function () {
      return Xh(e, sg()).exponent(e.exponent());
    }),
    cd.apply(e, arguments)
  );
}
function cg() {
  return sg.apply(null, arguments).exponent(0.5);
}
var lg = n(ju()),
  ug = r({
    scaleBand: () => dd,
    scaleDiverging: () => ig,
    scaleDivergingLog: () => ag,
    scaleDivergingPow: () => sg,
    scaleDivergingSqrt: () => cg,
    scaleDivergingSymlog: () => og,
    scaleIdentity: () => ip,
    scaleImplicit: () => ld,
    scaleLinear: () => rp,
    scaleLog: () => hp,
    scaleOrdinal: () => ud,
    scalePoint: () => pd,
    scalePow: () => wp,
    scaleQuantile: () => kp,
    scaleQuantize: () => Ap,
    scaleRadial: () => Op,
    scaleSequential: () => Zh,
    scaleSequentialLog: () => Qh,
    scaleSequentialPow: () => eg,
    scaleSequentialQuantile: () => ng,
    scaleSequentialSqrt: () => tg,
    scaleSequentialSymlog: () => $h,
    scaleSqrt: () => Tp,
    scaleSymlog: () => yp,
    scaleThreshold: () => jp,
    scaleTime: () => qh,
    scaleUtc: () => Jh,
    tickFormat: () => tp,
  }),
  dg = (e) => e.chartData,
  fg = R([dg], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  pg = (e, t, n, r) => (r ? fg(e) : dg(e));
function mg(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (Xs(t) && Xs(n)) return !0;
  }
  return !1;
}
function hg(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function gg(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (Xs(n)) i = n;
    else if (typeof n == `function`) return;
    if (Xs(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (mg(o)) return o;
  }
}
function _g(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (mg(r)) return hg(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (P(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && cs.test(i)) {
        var c = cs.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (P(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && ls.test(a)) {
        var u = ls.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (mg(f)) return t == null ? f : hg(f, t, n);
    }
  }
}
var J = n(
    i((e, t, n) => {
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
        (g.absoluteValue = g.abs =
          function () {
            var e = new this.constructor(this);
            return (e.s &&= 1), e;
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
              return (e.s = -e.s || 0), e;
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
              return (i = !0), D(r, n);
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
                  l < u &&
                    ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
                  o = [],
                  s = l + u,
                  r = s;
                r--;
              )
                o.push(0);
              for (r = u; --r >= 0; ) {
                for (t = 0, a = l + r; a > r; )
                  (c = o[a] + h[r] * m[a - r - 1] + t),
                    (o[a--] = (c % f) | 0),
                    (t = (c / f) | 0);
                o[a] = ((o[a] + t) % f) | 0;
              }
              for (; !o[--s]; ) o.pop();
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
                  n % 2 && ((o = o.times(u)), A(o.d, t)),
                    (n = c(n / 2)),
                    n !== 0;
                )
                  (u = u.times(u)), A(u.d, t);
                return (i = !0), e.s < 0 ? new f(d).div(o) : D(o, r);
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
              });
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
          if (!e.s || !t.s) return t.s || (t = new d(e)), i ? D(t, m) : t;
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
            (n = ((l[--o] = l[o] + u[o] + n) / f) | 0), (l[o] %= f);
          for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0; ) l.pop();
          return (t.d = l), (t.e = a), i ? D(t, m) : t;
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
              (r = e[t] + ``), (n = p - r.length), n && (a += w(n)), (a += r);
            (o = e[t]), (r = o + ``), (n = p - r.length), n && (a += w(n));
          } else if (o === 0) return `0`;
          for (; o % 10 == 0; ) o /= 10;
          return a + o;
        }
        var b = (function () {
          function e(e, t) {
            var n,
              r = 0,
              i = e.length;
            for (e = e.slice(); i--; )
              (n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0);
            return r && e.unshift(r), e;
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
            for (var r = 0; n--; )
              (e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
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
              ee = r.s == i.s ? 1 : -1,
              j = r.d,
              M = i.d;
            if (!r.s) return new A(r);
            if (!i.s) throw Error(a + `Division by zero`);
            for (
              l = r.e - i.e,
                O = M.length,
                T = j.length,
                g = new A(ee),
                _ = g.d = [],
                u = 0;
              M[u] == (j[u] || 0);
            )
              ++u;
            if (
              (M[u] > (j[u] || 0) && --l,
              (x =
                o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
              x < 0)
            )
              return new A(0);
            if (((x = (x / p + 2) | 0), (u = 0), O == 1))
              for (d = 0, M = M[0], x++; (u < T || d) && x--; u++)
                (C = d * f + (j[u] || 0)),
                  (_[u] = (C / M) | 0),
                  (d = (C % M) | 0);
            else {
              for (
                d = (f / (M[0] + 1)) | 0,
                  d > 1 &&
                    ((M = e(M, d)),
                    (j = e(j, d)),
                    (O = M.length),
                    (T = j.length)),
                  w = O,
                  v = j.slice(0, O),
                  y = v.length;
                y < O;
              )
                v[y++] = 0;
              (k = M.slice()), k.unshift(0), (E = M[0]), M[1] >= f / 2 && ++E;
              do
                (d = 0),
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
                  c && v[0] ? (v[y++] = j[w] || 0) : ((v = [j[w]]), (y = 1));
              while ((w++ < T || v[0] !== void 0) && x--);
            }
            return _[0] || _.shift(), (g.e = l), D(g, s ? o + S(g) + 1 : o);
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
            (e = e.times(c)), (p += 5);
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
              for (; p--; ) o = D(o.times(o), u);
              return (m.precision = h), t == null ? ((i = !0), D(o, h)) : o;
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
              ((i = !0),
              n && (e.precision = n),
              Error(a + `LN10 precision limit exceeded`))
            );
          return D(new e(e.LN10), t);
        }
        function w(e) {
          for (var t = ``; e--; ) t += `0`;
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
            return t ?? (i = !0), C(v, f);
          if (
            ((f += h),
            (v.precision = f),
            (n = y(_)),
            (r = n.charAt(0)),
            (s = S(g)),
            Math.abs(s) < 0x5543df729c000)
          ) {
            for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3); )
              (g = g.times(e)), (n = y(g.d)), (r = n.charAt(0)), m++;
            (s = S(g)),
              r > 1
                ? ((g = new v(`0.` + n)), s++)
                : (g = new v(r + `.` + n.slice(1)));
          } else
            return (
              (u = C(v, f + 2, x).times(s + ``)),
              (g = T(new v(r + `.` + n.slice(1)), f - h).plus(u)),
              (v.precision = x),
              t == null ? ((i = !0), D(g, x)) : g
            );
          for (
            l = c = g = b(g.minus(d), g.plus(d), f),
              p = D(g.times(g), f),
              o = 3;
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
            (l = u), (o += 2);
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
          for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
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
              for (r && e.d.push(+t.slice(0, r)), a -= p; r < a; )
                e.d.push(+t.slice(r, (r += p)));
              (t = t.slice(r)), (r = p - t.length);
            } else r -= a;
            for (; r--; ) t += `0`;
            if ((e.d.push(+t), i && (e.e > h || e.e < -h))) throw Error(s + n);
          } else (e.s = 0), (e.e = 0), (e.d = [0]);
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
          if (((r = t - u), r < 0)) (r += p), (a = t), (g = v[(_ = 0)]);
          else {
            if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o))
              return e;
            for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
            (r %= p), (a = r - p + u);
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
                (v[_--] = 0), (o = 1);
              }
          for (r = v.length; v[--r] === 0; ) v.pop();
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
            return t.s ? (t.s = -t.s) : (t = new h(e)), i ? D(t, g) : t;
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
          for (a = m.length; a > s; ) {
            if (l[--a] < m[a]) {
              for (o = a; o && l[--o] === 0; ) l[o] = f - 1;
              --l[o], (l[a] += f);
            }
            l[a] -= m[a];
          }
          for (; l[--c] === 0; ) l.pop();
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
          if (e.length > t) return (e.length = t), !0;
        }
        function ee(e) {
          var t, n, r;
          function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i))
              (t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e);
            else {
              if (typeof e == `number`) {
                if (e * 0 != 0) throw Error(o + e);
                if (e > 0) t.s = 1;
                else if (e < 0) (e = -e), (t.s = -1);
                else {
                  (t.s = 0), (t.e = 0), (t.d = [0]);
                  return;
                }
                if (e === ~~e && e < 1e7) {
                  (t.e = 0), (t.d = [e]);
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
            (i.clone = ee),
            (i.config = i.set = j),
            e === void 0 && (e = {}),
            e)
          )
            for (
              r = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
                t = 0;
              t < r.length;
            )
              e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
          return i.config(e), i;
        }
        function j(e) {
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
        (r = ee(r)),
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
                (e.Decimal = r));
      })(n);
    })(),
  ),
  vg = (e) => e,
  yg = { "@@functional/placeholder": !0 },
  bg = (e) => e === yg,
  xg = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          bg(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  Sg = (e, t) =>
    e === 1
      ? t
      : xg(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== yg).length;
          return r >= e
            ? t(...n)
            : Sg(
                e - r,
                xg(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (bg(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  Cg = (e) => Sg(e.length, e),
  wg = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  Tg = Cg((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  Eg = function () {
    var e = [...arguments];
    if (!e.length) return vg;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  Dg = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  Og = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function kg(e) {
  return e === 0
    ? 1
    : Math.floor(new J.default(e).abs().log(10).toNumber()) + 1;
}
function Ag(e, t, n) {
  for (var r = new J.default(e), i = 0, a = []; r.lt(t) && i < 1e5; )
    a.push(r.toNumber()), (r = r.add(n)), i++;
  return a;
}
Cg((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  Cg((e, t, n) => {
    var r = t - +e;
    return (r ||= 1 / 0), (n - e) / r;
  }),
  Cg((e, t, n) => {
    var r = t - +e;
    return (r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r));
  });
var jg = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return t > n && ([r, i] = [n, t]), [r, i];
  },
  Mg = (e, t, n) => {
    if (e.lte(0)) return new J.default(0);
    var r = kg(e.toNumber()),
      i = new J.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new J.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new J.default(s.toNumber())
      : new J.default(Math.ceil(s.toNumber()));
  },
  Ng = (e, t, n) => {
    var r = new J.default(1),
      i = new J.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new J.default(10).pow(kg(e) - 1)),
          (i = new J.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new J.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new J.default(Math.floor((t - 1) / 2)))
        : n || (i = new J.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return Eg(
      Tg((e) => i.add(new J.default(e - o).mul(r)).toNumber()),
      wg,
    )(0, t);
  },
  Pg = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new J.default(0),
        tickMin: new J.default(0),
        tickMax: new J.default(0),
      };
    var a = Mg(new J.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new J.default(0))
      : ((o = new J.default(e).add(t).div(2)),
        (o = o.sub(new J.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new J.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? Pg(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new J.default(s).mul(a)),
          tickMax: o.add(new J.default(c).mul(a)),
        });
  };
function Fg(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = jg([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...wg(0, r - 1).map(() => 1 / 0)]
        : [...wg(0, r - 1).map(() => -1 / 0), s];
    return t > n ? Dg(c) : c;
  }
  if (o === s) return Ng(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = Pg(o, s, a, i, 0),
    f = Ag(u, d.add(new J.default(0.1).mul(l)), l);
  return t > n ? Dg(f) : f;
}
function Ig(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = jg([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = Mg(new J.default(o).sub(a).div(s - 1), i, 0),
    l = [...Ag(new J.default(a), new J.default(o), c), o];
  return i === !1 && (l = l.map((e) => Math.round(e))), n > r ? Dg(l) : l;
}
var Lg = Og(Fg),
  Rg = Og(Ig),
  zg = (e) => e.rootProps.maxBarSize,
  Bg = (e) => e.rootProps.barGap,
  Vg = (e) => e.rootProps.barCategoryGap,
  Hg = (e) => e.rootProps.barSize,
  Ug = (e) => e.rootProps.stackOffset,
  Wg = (e) => e.options.chartName,
  Gg = (e) => e.rootProps.syncId,
  Kg = (e) => e.rootProps.syncMethod,
  qg = (e) => e.options.eventEmitter,
  Jg = {
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
  Yg = {
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
  Xg = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  Zg = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: Jg.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: Jg.reversed,
    scale: Jg.scale,
    tick: Jg.tick,
    tickCount: void 0,
    ticks: void 0,
    type: Jg.type,
    unit: void 0,
  },
  Qg = {
    allowDataOverflow: Yg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Yg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Yg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Yg.scale,
    tick: Yg.tick,
    tickCount: Yg.tickCount,
    ticks: void 0,
    type: Yg.type,
    unit: void 0,
  },
  $g = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: Jg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Jg.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Jg.scale,
    tick: Jg.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  e_ = {
    allowDataOverflow: Yg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Yg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Yg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Yg.scale,
    tick: Yg.tick,
    tickCount: Yg.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  t_ = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? $g
        : Zg
      : e.polarAxis.angleAxis[t],
  n_ = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? e_
        : Qg
      : e.polarAxis.radiusAxis[t],
  r_ = (e) => e.polarOptions,
  i_ = R([gs, _s, H], No),
  a_ = R([r_, i_], (e, t) => {
    if (e != null) return Gt(e.innerRadius, t, 0);
  }),
  o_ = R([r_, i_], (e, t) => {
    if (e != null) return Gt(e.outerRadius, t, t * 0.8);
  }),
  s_ = R([r_], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  });
R([t_, s_], Xg);
var c_ = R([i_, a_, o_], (e, t, n) => {
  if (e != null && t != null && n != null) return [t, n];
});
R([n_, c_], Xg);
var l_ = R([U, r_, a_, o_, gs, _s], (e, t, n, r, i, a) => {
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
        cx: Gt(o, i, i / 2),
        cy: Gt(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  Y = (e, t) => t,
  u_ = (e, t, n) => n;
function d_(e) {
  return e?.id;
}
var X = (e) => {
    var t = U(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  f_ = (e) => e.tooltip.settings.axisId,
  Z = (e) => P_(e, X(e), f_(e)),
  p_ = R([Z], (e) => e?.dataKey);
function m_(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = d_(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(V(t, a, null)),
            c = V(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          Object.assign(l, { [n]: c }), o.set(s, l);
        });
      }
    }),
    Array.from(o.values())
  );
}
function h_(e) {
  return e.stackId != null && e.dataKey != null;
}
var g_ = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function __(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function v_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
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
var C_ = [0, `auto`],
  w_ = {
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
  T_ = (e, t) => e.cartesianAxis.xAxis[t],
  E_ = (e, t) => T_(e, t) ?? w_,
  D_ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: C_,
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
  O_ = (e, t) => e.cartesianAxis.yAxis[t],
  k_ = (e, t) => O_(e, t) ?? D_,
  A_ = {
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
  j_ = (e, t) => e.cartesianAxis.zAxis[t] ?? A_,
  M_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return E_(e, n);
      case `yAxis`:
        return k_(e, n);
      case `zAxis`:
        return j_(e, n);
      case `angleAxis`:
        return t_(e, n);
      case `radiusAxis`:
        return n_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  N_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return E_(e, n);
      case `yAxis`:
        return k_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  P_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return E_(e, n);
      case `yAxis`:
        return k_(e, n);
      case `angleAxis`:
        return t_(e, n);
      case `radiusAxis`:
        return n_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  F_ = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function I_(e, t) {
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
var L_ = (e) => e.graphicalItems.cartesianItems,
  R_ = R([Y, u_], I_),
  z_ = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  B_ = R([L_, M_, R_], z_, { memoizeOptions: { resultEqualityCheck: __ } }),
  V_ = R([B_], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(h_),
  ),
  H_ = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  U_ = R([B_], H_),
  W_ = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  G_ = R([B_], W_, { memoizeOptions: { resultEqualityCheck: __ } }),
  K_ = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  q_ = R([G_, pg], K_),
  J_ = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: V(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: V(e, t.dataKey) })),
  Y_ = R([q_, M_, B_], J_);
function X_(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function Z_(e) {
  if (Ht(e) || e instanceof Date) {
    var t = Number(e);
    if (Xs(t)) return t;
  }
}
function Q_(e) {
  if (Array.isArray(e)) {
    var t = [Z_(e[0]), Z_(e[1])];
    return mg(t) ? t : void 0;
  }
  var n = Z_(e);
  if (n != null) return [n, n];
}
function $_(e) {
  return e.map(Z_).filter(Cl);
}
function ev(e, t, n) {
  return !n || typeof t != `number` || Bt(t) || !n.length
    ? []
    : $_(
        n.flatMap((n) => {
          var r = V(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), Xs(i) && Xs(a)))
            return [t - i, t + a];
        }),
      );
}
var tv = R([V_, pg, Z], m_),
  nv = (e, t, n) => {
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
        return [r, { stackedData: es(e, i.map(d_), n), graphicalItems: i }];
      }),
    );
  },
  rv = R([tv, V_, Ug], nv),
  iv = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = ss(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  av = R([M_], (e) => e.allowDataOverflow),
  ov = (e) => {
    if (e == null || !(`domain` in e)) return C_;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = $_(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? C_;
  },
  sv = R([M_], ov),
  cv = R([sv, av], gg),
  lv = R([rv, dg, Y, cv], iv, { memoizeOptions: { resultEqualityCheck: g_ } }),
  uv = (e) => e.errorBars,
  dv = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => X_(n, e)),
  fv = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  pv = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => X_(i, e)),
              c = V(e, t.dataKey ?? n.dataKey),
              l = ev(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              (a == null || u < a) && (a = u), (o == null || d > o) && (o = d);
            }
            var f = Q_(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = Q_(V(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      Xs(a) && Xs(o))
    )
      return [a, o];
  },
  mv = R([q_, M_, U_, uv, Y], pv, {
    memoizeOptions: { resultEqualityCheck: g_ },
  });
function hv(e) {
  var { value: t } = e;
  if (Ht(t) || t instanceof Date) return t;
}
var gv = (e, t, n) => {
    var r = e.map(hv).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && Kt(r)))
      ? (0, lg.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  _v = (e) => e.referenceElements.dots,
  vv = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  yv = R([_v, Y, u_], vv),
  bv = (e) => e.referenceElements.areas,
  xv = R([bv, Y, u_], vv),
  Sv = (e) => e.referenceElements.lines,
  Cv = R([Sv, Y, u_], vv),
  wv = (e, t) => {
    var n = $_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Tv = R(yv, Y, wv),
  Ev = (e, t) => {
    var n = $_(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Dv = R([xv, Y], Ev),
  Ov = (e, t) => {
    var n = $_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  kv = R(Tv, R(Cv, Y, Ov), Dv, (e, t, n) => fv(e, n, t)),
  Av = (e, t, n, r, i, a, o, s) =>
    n ??
    _g(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? fv(r, a, i)
        : fv(a, i),
      e.allowDataOverflow,
    ),
  jv = R([M_, sv, cv, lv, mv, kv, U, Y], Av, {
    memoizeOptions: { resultEqualityCheck: g_ },
  }),
  Mv = [0, 1],
  Nv = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = qo(t, a);
      return l && s == null
        ? (0, lg.default)(0, n.length)
        : c === `category`
          ? gv(r, e, l)
          : i === `expand`
            ? Mv
            : o;
    }
  },
  Pv = R([M_, U, q_, Y_, Ug, Y, jv], Nv),
  Fv = (e, t, n, r, i) => {
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
        var s = `scale${Yt(a)}`;
        return s in ug ? s : `point`;
      }
    }
  },
  Iv = R([M_, U, F_, Wg, Y], Fv);
function Lv(e) {
  if (e != null) {
    if (e in ug) return ug[e]();
    var t = `scale${Yt(e)}`;
    if (t in ug) return ug[t]();
  }
}
function Rv(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = Lv(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return Zo(a), a;
    }
  }
}
var zv = (e, t, n) => {
    var r = ov(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        mg(e)
      )
        return Lg(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && mg(e))
        return Rg(e, t.tickCount, t.allowDecimals);
    }
  },
  Bv = R([Pv, P_, Iv], zv),
  Vv = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      mg(t) &&
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
  Hv = R([M_, Pv, Bv, Y], Vv),
  Uv = R(
    R(Y_, M_, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from($_(e.map((e) => e.value))).sort((e, t) => e - t);
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
    U,
    Vg,
    H,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!Xs(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Gt(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  Wv = (e, t) => {
    var n = E_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Uv(e, `xAxis`, t, n.padding);
  },
  Gv = (e, t) => {
    var n = k_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Uv(e, `yAxis`, t, n.padding);
  },
  Kv = R(E_, Wv, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  qv = R(k_, Gv, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  Jv = R([H, Kv, Rs, Ls, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  Yv = R([H, U, qv, Rs, Ls, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  Xv = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return Jv(e, n, r);
      case `yAxis`:
        return Yv(e, n, r);
      case `zAxis`:
        return j_(e, n)?.range;
      case `angleAxis`:
        return s_(e);
      case `radiusAxis`:
        return c_(e, n);
      default:
        return;
    }
  },
  Zv = R([M_, Xv], Xg),
  Qv = R([M_, Iv, Hv, Zv], Rv);
R([B_, uv, Y], dv);
function $v(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var ey = (e, t) => t,
  ty = (e, t, n) => n,
  ny = R(bs, ey, ty, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort($v),
  ),
  ry = R(xs, ey, ty, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort($v),
  ),
  iy = (e, t) => ({ width: e.width, height: t.height }),
  ay = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  oy = R(H, E_, iy),
  sy = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  cy = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  ly = R(_s, H, ny, ey, ty, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = iy(t, n);
        o ??= sy(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        (a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height);
      }),
      a
    );
  }),
  uy = R(gs, H, ry, ey, ty, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = ay(t, n);
        o ??= cy(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        (a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width);
      }),
      a
    );
  }),
  dy = R(
    [
      H,
      E_,
      (e, t) => {
        var n = E_(e, t);
        if (n != null) return ly(e, n.orientation, n.mirror);
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
  fy = R(
    [
      H,
      k_,
      (e, t) => {
        var n = k_(e, t);
        if (n != null) return uy(e, n.orientation, n.mirror);
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
  py = R(H, k_, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  my = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return oy(e, n).width;
      case `yAxis`:
        return py(e, n).height;
      default:
        return;
    }
  },
  hy = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = qo(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && Kt(c)) return c;
    }
  },
  gy = R([U, Y_, M_, Y], hy),
  _y = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (qo(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  vy = R([U, Y_, P_, Y], _y),
  yy = R([U, N_, Iv, Qv, gy, vy, Xv, Bv, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = qo(e, c);
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
  by = R([U, P_, Iv, Qv, Bv, Xv, gy, vy, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = qo(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? zt(a[0] - a[1]) * 2 * m
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
            .filter((e) => !Bt(e.coordinate))
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
  xy = R([U, P_, Qv, Xv, gy, vy, Y], (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = qo(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? zt(r[0] - r[1]) * 2 * l : l),
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
  Sy = R(M_, Qv, (e, t) => {
    if (e != null && t != null) return y_(y_({}, e), {}, { scale: t });
  });
R(
  (e, t, n) => j_(e, n),
  R([M_, Iv, Pv, Zv], Rv),
  (e, t) => {
    if (e != null && t != null) return y_(y_({}, e), {}, { scale: t });
  },
);
var Cy = R([U, bs, xs], (e, t, n) => {
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
  wy = (e) => e.options.defaultTooltipEventType,
  Ty = (e) => e.options.validateTooltipEventTypes;
function Ey(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function Dy(e, t) {
  return Ey(t, wy(e), Ty(e));
}
function Oy(e) {
  return L((t) => Dy(t, e));
}
var ky = (e, t) => {
    var n,
      r = Number(t);
    if (!(Bt(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  Ay = (e) => e.tooltip.settings,
  jy = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  My = Aa({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: jy, hover: jy },
      axisInteraction: { click: jy, hover: jy },
      keyboardInteraction: jy,
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
          e.tooltipItemPayloads.push(Mi(t.payload));
        },
        prepare: oa(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Di(e).tooltipItemPayloads.indexOf(Mi(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: oa(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        (e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate);
      },
      mouseLeaveChart(e) {
        (e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1);
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        (e.syncInteraction.active = !1),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate);
      },
      setMouseOverAxisIndex(e, t) {
        (e.syncInteraction.active = !1),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate);
      },
      setMouseClickAxisIndex(e, t) {
        (e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate);
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        (e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate),
          (e.keyboardInteraction.dataKey = t.payload.activeDataKey);
      },
    },
  }),
  {
    addTooltipEntrySettings: Ny,
    removeTooltipEntrySettings: Py,
    setTooltipSettingsState: Fy,
    setActiveMouseOverItemIndex: Iy,
    mouseLeaveItem: Ly,
    mouseLeaveChart: Ry,
    setActiveClickItemIndex: zy,
    setMouseOverAxisIndex: By,
    setMouseClickAxisIndex: Vy,
    setSyncInteraction: Hy,
    setKeyboardInteraction: Uy,
  } = My.actions,
  Wy = My.reducer;
function Gy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ky(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Gy(Object(n), !0).forEach(function (t) {
          qy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Gy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qy(e, t, n) {
  return (
    (t = Jy(t)) in e
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
function Jy(e) {
  var t = Yy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Yy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Xy(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function Zy(e) {
  return e.index != null;
}
var Qy = (e, t, n, r) => {
    if (t == null) return jy;
    var i = Xy(e, t, n);
    if (i == null) return jy;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (Zy(i)) {
      if (a) return Ky(Ky({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return Ky(Ky({}, jy), {}, { coordinate: i.coordinate });
  },
  $y = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!Xs(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  eb = (e, t, n, r, i, a, o, s) => {
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
  tb = (e, t, n, r) => {
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
  nb = (e) => e.options.tooltipPayloadSearcher,
  rb = (e) => e.tooltip;
function ib(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ab(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ib(Object(n), !0).forEach(function (t) {
          ob(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ib(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ob(e, t, n) {
  return (
    (t = sb(t)) in e
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
function sb(e) {
  var t = cb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function cb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function lb(e, t) {
  return e ?? t;
}
var ub = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = lb(d, s),
          m = Array.isArray(p) ? zo(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? Jt(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = ab(
                  ab({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  ds({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: V(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                ds({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: V(_, h),
                  name: V(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  db = R([Z, U, F_, Wg, X], Fv),
  fb = R(
    [
      R(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      Z,
      R([X, f_], I_),
    ],
    z_,
    { memoizeOptions: { resultEqualityCheck: __ } },
  ),
  pb = R([fb], (e) => e.filter(h_)),
  mb = R(
    [R([fb], W_, { memoizeOptions: { resultEqualityCheck: __ } }), dg],
    K_,
  ),
  hb = R([pb, dg, Z], m_),
  gb = R([mb, Z, fb], J_),
  _b = R([Z], ov),
  vb = R([_b, R([Z], (e) => e.allowDataOverflow)], gg),
  yb = R([R([hb, R([fb], (e) => e.filter(h_)), Ug], nv), dg, X, vb], iv),
  bb = R([mb, Z, R([fb], H_), uv, X], pv, {
    memoizeOptions: { resultEqualityCheck: g_ },
  }),
  xb = R([R([_v, X, f_], vv), X], wv),
  Sb = R([R([bv, X, f_], vv), X], Ev),
  Cb = R(
    [
      Z,
      U,
      mb,
      gb,
      Ug,
      X,
      R(
        [
          Z,
          _b,
          vb,
          yb,
          bb,
          R([xb, R([R([Sv, X, f_], vv), X], Ov), Sb], fv),
          U,
          X,
        ],
        Av,
      ),
    ],
    Nv,
  ),
  wb = R([Z, Cb, R([Cb, Z, db], zv), X], Vv),
  Tb = (e) => Xv(e, X(e), f_(e), !1),
  Eb = R([Z, Tb], Xg),
  Db = R([Z, db, wb, Eb], Rv),
  Ob = R(
    [U, Z, db, Db, Tb, R([U, gb, Z, X], hy), R([U, gb, Z, X], _y), X],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = qo(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? zt(i[0] - i[1]) * 2 * d
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
  kb = R([wy, Ty, Ay], (e, t, n) => Ey(n.shared, e, t)),
  Ab = (e) => e.tooltip.settings.trigger,
  jb = (e) => e.tooltip.settings.defaultIndex,
  Mb = R([rb, kb, Ab, jb], Qy),
  Nb = R([Mb, mb], $y),
  Pb = R([Ob, Nb], ky),
  Fb = R([Mb], (e) => {
    if (e) return e.dataKey;
  }),
  Ib = R([rb, kb, Ab, jb], tb),
  Lb = R([Mb, R([gs, _s, U, H, Ob, jb, Ib, nb], eb)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  Rb = R([Mb], (e) => e.active),
  zb = R([R([Ib, Nb, dg, p_, Pb, nb, kb], ub)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function Bb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bb(Object(n), !0).forEach(function (t) {
          Hb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hb(e, t, n) {
  return (
    (t = Ub(t)) in e
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
function Ub(e) {
  var t = Wb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Gb = () => L(Z),
  Kb = () => {
    var e = Gb(),
      t = L(Ob),
      n = L(Db);
    return us(Vb(Vb({}, e), {}, { scale: n }), t);
  },
  qb = () => L(Wg),
  Jb = (e, t) => t,
  Yb = (e, t, n) => n,
  Xb = (e, t, n, r) => r,
  Zb = R(Ob, (e) => (0, vr.default)(e, (e) => e.coordinate)),
  Qb = R([rb, Jb, Yb, Xb], Qy),
  $b = R([Qb, mb], $y),
  ex = (e, t, n) => {
    if (t != null) {
      var r = rb(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  tx = R([rb, Jb, Yb, Xb], tb),
  nx = R([gs, _s, U, H, Ob, Xb, tx, nb], eb),
  rx = R([Qb, nx], (e, t) => e.coordinate ?? t),
  ix = R(Ob, $b, ky),
  ax = R([tx, $b, dg, p_, ix, nb, Jb], ub),
  ox = R([Qb], (e) => ({ isActive: e.active, activeIndex: e.index })),
  sx = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = ps(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = Go(hs(c, t), o, a, r, i),
          u = ms(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function cx() {
  return (
    (cx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cx.apply(null, arguments)
  );
}
function lx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ux(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lx(Object(n), !0).forEach(function (t) {
          dx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dx(e, t, n) {
  return (
    (t = fx(t)) in e
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
function fx(e) {
  var t = px(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function px(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function mx(e) {
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
  if (l === `ScatterChart`) (p = u), (m = ml);
  else if (l === `BarChart`) (p = hl(o, u, i, a)), (m = vu);
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: b } = yu(u);
    (p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: b,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = Eu);
  } else (p = { points: Du(o, u, i) }), (m = rl);
  var x = typeof s == `object` && `className` in s ? s.className : void 0,
    C = ux(
      ux(ux(ux({ stroke: `#ccc`, pointerEvents: `none` }, i), p), k(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: S(`recharts-tooltip-cursor`, x),
      },
    );
  return (0, y.isValidElement)(s)
    ? (0, y.cloneElement)(s, C)
    : (0, y.createElement)(m, C);
}
function hx(e) {
  var t = Kb(),
    n = dc(),
    r = hc(),
    i = qb();
  return y.createElement(
    mx,
    cx({}, e, {
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
var gx = (0, y.createContext)(null),
  _x = () => (0, y.useContext)(gx),
  vx = n(
    i((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
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
        (this._events = new i()), (this._eventsCount = 0);
      }
      (c.prototype.eventNames = function () {
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
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, t), !0;
              case 3:
                return c.fn.call(c.context, t, n), !0;
              case 4:
                return c.fn.call(c.context, t, n, i), !0;
              case 5:
                return c.fn.call(c.context, t, n, i, a), !0;
              case 6:
                return c.fn.call(c.context, t, n, i, a, o), !0;
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
          if (!t) return s(this, a), this;
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
        t !== void 0 && (t.exports = c);
    })(),
    1,
  ).default,
  yx = new vx(),
  bx = `recharts.syncEvent.tooltip`,
  xx = `recharts.syncEvent.brush`;
function Sx(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!Bt(n)) return e?.[n];
  }
}
var Cx = Aa({
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
  wx = Cx.reducer,
  { createEventEmitter: Tx } = Cx.actions;
function Ex(e) {
  return e.tooltip.syncInteraction;
}
var Dx = Aa({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(e, t) {
        (e.chartData = t.payload),
          t.payload == null
            ? ((e.dataStartIndex = 0), (e.dataEndIndex = 0))
            : t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1);
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: n, endIndex: r } = t.payload;
        n != null && (e.dataStartIndex = n), r != null && (e.dataEndIndex = r);
      },
    },
  }),
  {
    setChartData: Ox,
    setDataStartEndIndexes: kx,
    setComputedData: Ax,
  } = Dx.actions,
  jx = Dx.reducer,
  Mx = [`x`, `y`];
function Nx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Px(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nx(Object(n), !0).forEach(function (t) {
          Fx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Fx(e, t, n) {
  return (
    (t = Ix(t)) in e
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
function Ix(e) {
  var t = Lx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Lx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Rx(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = zx(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function zx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Bx = () => {};
function Vx() {
  var e = L(Gg),
    t = L(qg),
    n = I(),
    r = L(Kg),
    i = L(Ob),
    a = hc(),
    o = lc(),
    s = L((e) => e.rootProps.className);
  (0, y.useEffect)(() => {
    if (e == null) return Bx;
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
              m = Rx(d, Mx),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = Px(
                Px({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              Px(
                Px({}, c),
                {},
                { payload: Px(Px({}, c.payload), {}, { coordinate: y }) },
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
              Hy({
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
              Hy({
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
      yx.on(bx, s),
      () => {
        yx.off(bx, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function Hx() {
  var e = L(Gg),
    t = L(qg),
    n = I();
  (0, y.useEffect)(() => {
    if (e == null) return Bx;
    var r = (r, i, a) => {
      t !== a && e === r && n(kx(i));
    };
    return (
      yx.on(xx, r),
      () => {
        yx.off(xx, r);
      }
    );
  }, [n, t, e]);
}
function Ux() {
  var e = I();
  (0, y.useEffect)(() => {
    e(Tx());
  }, [e]),
    Vx(),
    Hx();
}
function Wx(e, t, n, r, i, a) {
  var o = L((n) => ex(n, e, t)),
    s = L(qg),
    c = L(Gg),
    l = L(Kg),
    u = L(Ex)?.active,
    d = lc();
  (0, y.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = Hy({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      yx.emit(bx, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function Gx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Kx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Gx(Object(n), !0).forEach(function (t) {
          qx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Gx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qx(e, t, n) {
  return (
    (t = Jx(t)) in e
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
function Jx(e) {
  var t = Yx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Yx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Xx(e) {
  return e.dataKey;
}
function Zx(e, t) {
  return y.isValidElement(e)
    ? y.cloneElement(e, t)
    : typeof e == `function`
      ? y.createElement(e, t)
      : y.createElement(Ac, t);
}
var Qx = [],
  $x = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !Uc.isSsr,
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
function eS(e) {
  var t = xl(e, $x),
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
      portal: x,
      axisId: S,
    } = t,
    C = I(),
    w = typeof v == `number` ? String(v) : v;
  (0, y.useEffect)(() => {
    C(Fy({ shared: g, trigger: _, axisId: S, active: n, defaultIndex: w }));
  }, [C, g, _, S, n, w]);
  var T = lc(),
    E = Wc(),
    D = Oy(g),
    { activeIndex: O, isActive: k } = L((e) => ox(e, D, _, w)),
    A = L((e) => ax(e, D, _, w)),
    ee = L((e) => ix(e, D, _, w)),
    j = L((e) => rx(e, D, _, w)),
    M = A,
    te = _x(),
    ne = n ?? k,
    [re, ie] = Cr([M, ne]),
    ae = D === `axis` ? ee : void 0;
  Wx(D, _, j, ae, O, ne);
  var oe = x ?? te;
  if (oe == null) return null;
  var se = M ?? Qx;
  ne || (se = Qx),
    s &&
      se.length &&
      (se = Un(
        M.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        Xx,
      ));
  var ce = se.length > 0,
    le = y.createElement(
      Hc,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: ne,
        coordinate: j,
        hasPayload: ce,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: T,
        wrapperStyle: m,
        lastBoundingBox: re,
        innerRef: ie,
        hasPortalFromProps: !!x,
      },
      Zx(
        o,
        Kx(
          Kx({}, t),
          {},
          {
            payload: se,
            label: ae,
            active: ne,
            coordinate: j,
            accessibilityLayer: E,
          },
        ),
      ),
    );
  return y.createElement(
    y.Fragment,
    null,
    (0, b.createPortal)(le, oe),
    ne &&
      y.createElement(hx, {
        cursor: h,
        tooltipEventType: D,
        coordinate: j,
        payload: M,
        index: O,
      }),
  );
}
var tS = (e) => null;
tS.displayName = `Cell`;
function nS(e, t, n) {
  return (
    (t = rS(t)) in e
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
function rS(e) {
  var t = iS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var aS = class {
  constructor(e) {
    nS(this, `cache`, new Map()), (this.maxSize = e);
  }
  get(e) {
    var t = this.cache.get(e);
    return t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t;
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
function oS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? oS(Object(n), !0).forEach(function (t) {
          cS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : oS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cS(e, t, n) {
  return (
    (t = lS(t)) in e
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
function lS(e) {
  var t = uS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function uS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var dS = sS({}, { cacheSize: 2e3, enableCache: !0 }),
  fS = new aS(dS.cacheSize),
  pS = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  mS = `recharts_measurement_span`;
function hS(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var gS = (e, t) => {
    try {
      var n = document.getElementById(mS);
      n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, mS),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, pS, t),
        (n.textContent = `${e}`);
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  _S = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Uc.isSsr) return { width: 0, height: 0 };
    var n = dS.measureText || gS;
    if (!dS.enableCache) return n(e, t);
    var r = hS(e, t),
      i = fS.get(r);
    if (i) return i;
    var a = n(e, t);
    return fS.set(r, a), a;
  },
  vS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  yS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  bS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  xS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  SS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  CS = Object.keys(SS),
  wS = `NaN`;
function TS(e, t) {
  return e * SS[t];
}
var ES = class e {
  static parse(t) {
    var [, n, r] = xS.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    (this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      Bt(e) && (this.unit = ``),
      t !== `` && !bS.test(t) && ((this.num = NaN), (this.unit = ``)),
      CS.includes(t) && ((this.num = TS(e, t)), (this.unit = `px`));
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
    return Bt(this.num);
  }
};
function DS(e) {
  if (e.includes(wS)) return wS;
  for (var t = e; t.includes(`*`) || t.includes(`/`); ) {
    var [, n, r, i] = vS.exec(t) ?? [],
      a = ES.parse(n ?? ``),
      o = ES.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return wS;
    t = t.replace(vS, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t); ) {
    var [, c, l, u] = yS.exec(t) ?? [],
      d = ES.parse(c ?? ``),
      f = ES.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return wS;
    t = t.replace(yS, p.toString());
  }
  return t;
}
var OS = /\(([^()]*)\)/;
function kS(e) {
  for (var t = e, n; (n = OS.exec(t)) != null; ) {
    var [, r] = n;
    t = t.replace(OS, DS(r));
  }
  return t;
}
function AS(e) {
  var t = e.replace(/\s+/g, ``);
  return (t = kS(t)), (t = DS(t)), t;
}
function jS(e) {
  try {
    return AS(e);
  } catch {
    return wS;
  }
}
function MS(e) {
  var t = jS(e.slice(5, -1));
  return t === wS ? `` : t;
}
var NS = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  PS = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function FS() {
  return (
    (FS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    FS.apply(null, arguments)
  );
}
function IS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = LS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function LS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var RS = /[ \f\n\r\t\v\u2028\u2029]+/,
  zS = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        F(t) || (i = n ? t.toString().split(``) : t.toString().split(RS)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: _S(e, r).width,
          })),
          spaceWidth: n ? 0 : _S(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  BS = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = P(a),
      u = o,
      d = function () {
        return (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        ).reduce((e, t) => {
          var { word: a, width: o } = t,
            s = e[e.length - 1];
          if (s && (r == null || i || s.width + o + n < Number(r)))
            s.words.push(a), (s.width += o + n);
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
          var t = zS({
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
  VS = (e) => [{ words: F(e) ? [] : e.toString().split(RS) }],
  HS = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !Uc.isSsr) {
      var s,
        c,
        l = zS({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        (s = u), (c = d);
      } else return VS(r);
      return BS(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return VS(r);
  },
  US = `#808080`,
  WS = (0, y.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = US,
      } = e,
      u = IS(e, NS),
      d = (0, y.useMemo)(
        () =>
          HS({
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
      _ = IS(u, PS);
    if (!Ht(n) || !Ht(r) || d.length === 0) return null;
    var v = n + (P(f) ? f : 0),
      b = r + (P(p) ? p : 0),
      x;
    switch (c) {
      case `start`:
        x = MS(`calc(${a})`);
        break;
      case `middle`:
        x = MS(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        x = MS(`calc(${d.length - 1} * -${i})`);
    }
    var C = [];
    if (o) {
      var w = d[0].width,
        { width: T } = u;
      C.push(`scale(${P(T) ? T / w : 1})`);
    }
    return (
      m && C.push(`rotate(${m}, ${v}, ${b})`),
      C.length && (_.transform = C.join(` `)),
      y.createElement(
        `text`,
        FS({}, A(_), {
          ref: t,
          x: v,
          y: b,
          className: S(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? US : l,
        }),
        d.map((e, t) => {
          var n = e.words.join(g ? `` : ` `);
          return y.createElement(
            `tspan`,
            { x: v, dy: t === 0 ? x : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
WS.displayName = `Text`;
var GS = [`labelRef`];
function KS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qS(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function qS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function JS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? JS(Object(n), !0).forEach(function (t) {
          YS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : JS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function YS(e, t, n) {
  return (
    (t = XS(t)) in e
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
function XS(e) {
  var t = ZS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ZS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function QS() {
  return (
    (QS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    QS.apply(null, arguments)
  );
}
var $S = (0, y.createContext)(null),
  eC = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, y.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return y.createElement($S.Provider, { value: o }, a);
  },
  tC = () => {
    var e = (0, y.useContext)($S),
      t = lc();
    return e || t;
  },
  nC = (0, y.createContext)(null),
  rC = () => {
    var e = (0, y.useContext)(nC),
      t = L(l_);
    return e || t;
  },
  iC = (e) => {
    var { value: t, formatter: n } = e,
      r = F(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  aC = (e) => e != null && typeof e == `function`,
  oC = (e, t) => zt(t - e) * Math.min(Math.abs(t - e), 360),
  sC = (e, t, n, r, i) => {
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
      h = oC(d, f),
      g = h >= 0 ? 1 : -1,
      _,
      v;
    switch (t) {
      case `insideStart`:
        (_ = d + g * a), (v = p);
        break;
      case `insideEnd`:
        (_ = f - g * a), (v = !p);
        break;
      case `end`:
        (_ = f + g * a), (v = p);
        break;
      default:
        throw Error(`Unsupported position ${t}`);
    }
    v = h <= 0 ? v : !v;
    var b = B(s, c, m, _),
      x = B(s, c, m, _ + (v ? 1 : -1) * 359),
      C = `M${b.x},${b.y}
    A${m},${m},0,1,${+!v},
    ${x.x},${x.y}`,
      w = F(e.id) ? Wt(`recharts-radial-line-`) : e.id;
    return y.createElement(
      `text`,
      QS({}, r, {
        dominantBaseline: `central`,
        className: S(`recharts-radial-bar-label`, o),
      }),
      y.createElement(`defs`, null, y.createElement(`path`, { id: w, d: C })),
      y.createElement(`textPath`, { xlinkHref: `#${w}` }, n),
    );
  },
  cC = (e, t, n) => {
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
      var { x: u, y: d } = B(r, i, o + t, l);
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
    var { x: f, y: p } = B(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  lC = (e) => `cx` in e && P(e.cx),
  uC = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !lC(n) && (a = n);
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
      return Q(
        Q(
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
      return Q(
        Q(
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
      return Q(Q({}, v), a ? { width: Math.max(v.x - a.x, 0), height: l } : {});
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return Q(
        Q({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? Q(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? Q(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? Q(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? Q(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? Q({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? Q(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? Q(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? Q(
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
                        (P(i.x) || Vt(i.x)) &&
                        (P(i.y) || Vt(i.y))
                      ? Q(
                          {
                            x: o + Gt(i.x, c),
                            y: s + Gt(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : Q(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  dC = { offset: 5 };
function fC(e) {
  var t = xl(e, dC),
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
    u = rC(),
    d = tC(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (F(i) && F(a) && !(0, y.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = Q(Q({}, t), {}, { viewBox: f });
  if ((0, y.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = KS(p, GS);
    return (0, y.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, y.createElement)(o, p)), (0, y.isValidElement)(g))) return g;
  } else g = iC(t);
  var _ = lC(f),
    v = A(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return sC(t, r, g, v, f);
  var b = _ ? cC(f, t.offset, t.position) : uC(t, f);
  return y.createElement(
    WS,
    QS({ ref: l, className: S(`recharts-label`, s) }, v, b, { breakAll: c }),
    g,
  );
}
fC.displayName = `Label`;
var pC = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? y.createElement(fC, QS({ key: `label-implicit` }, r))
    : Ht(e)
      ? y.createElement(fC, QS({ key: `label-implicit`, value: e }, r))
      : (0, y.isValidElement)(e)
        ? e.type === fC
          ? (0, y.cloneElement)(e, Q({ key: `label-implicit` }, r))
          : y.createElement(fC, QS({ key: `label-implicit`, content: e }, r))
        : aC(e)
          ? y.createElement(fC, QS({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? y.createElement(fC, QS({}, e, { key: `label-implicit` }, r))
            : null;
};
function mC(e) {
  var { label: t, labelRef: n } = e;
  return pC(t, tC(), n) || null;
}
var hC = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  gC = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  _C = i((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hC(),
      n = gC(),
      r = vn();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  vC = n(
    i((e, t) => {
      t.exports = _C().last;
    })(),
  ),
  yC = [`valueAccessor`],
  bC = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function xC() {
  return (
    (xC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xC.apply(null, arguments)
  );
}
function SC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = CC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function CC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var wC = (e) => (Array.isArray(e.value) ? (0, vC.default)(e.value) : e.value),
  TC = (0, y.createContext)(void 0),
  EC = TC.Provider,
  DC = (0, y.createContext)(void 0);
DC.Provider;
function OC() {
  return (0, y.useContext)(TC);
}
function kC() {
  return (0, y.useContext)(DC);
}
function AC(e) {
  var { valueAccessor: t = wC } = e,
    n = SC(e, yC),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = SC(n, bC),
    c = OC(),
    l = kC(),
    u = c || l;
  return !u || !u.length
    ? null
    : y.createElement(
        ce,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = F(r) ? t(e, i) : V(e && e.payload, r),
            l = F(a) ? {} : { id: `${a}-${i}` };
          return y.createElement(
            fC,
            xC({ key: `label-${i}` }, A(e), s, l, {
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
AC.displayName = `LabelList`;
function jC(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? y.createElement(AC, { key: `labelList-implicit` })
      : y.isValidElement(t) || aC(t)
        ? y.createElement(AC, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? y.createElement(
              AC,
              xC({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var MC = Aa({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = Mi(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = Mi(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: NC,
    removeRadiusAxis: PC,
    addAngleAxis: FC,
    removeAngleAxis: IC,
  } = MC.actions,
  LC = MC.reducer,
  RC = i((e) => {
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
  zC = i((e, t) => {
    t.exports = RC();
  })(),
  BC = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  VC = null,
  HC = null,
  UC = (e) => {
    if (e === VC && Array.isArray(HC)) return HC;
    var t = [];
    return (
      y.Children.forEach(e, (e) => {
        F(e) ||
          ((0, zC.isFragment)(e)
            ? (t = t.concat(UC(e.props.children)))
            : t.push(e));
      }),
      (HC = t),
      (VC = e),
      t
    );
  };
function WC(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => BC(e)) : [BC(t)]),
    UC(e).forEach((e) => {
      var t =
        (0, Rt.default)(e, `type.displayName`) ||
        (0, Rt.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var GC = (e) =>
    e && typeof e == `object` && `clipDot` in e ? !!e.clipDot : !0,
  KC = i((e) => {
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
      for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    e.isPlainObject = t;
  }),
  qC = i((e, t) => {
    t.exports = KC().isPlainObject;
  });
function JC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function YC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? JC(Object(n), !0).forEach(function (t) {
          XC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : JC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function XC(e, t, n) {
  return (
    (t = ZC(t)) in e
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
function ZC(e) {
  var t = QC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function QC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $C() {
  return (
    ($C = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $C.apply(null, arguments)
  );
}
var ew = (e, t, n, r, i) => {
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
  tw = {
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
  nw = (e) => {
    var t = xl(e, tw),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: c,
        animationDuration: l,
        animationBegin: u,
        isUpdateAnimationActive: d,
      } = t,
      f = (0, y.useRef)(null),
      [p, m] = (0, y.useState)(-1),
      h = (0, y.useRef)(i),
      g = (0, y.useRef)(a),
      _ = (0, y.useRef)(o),
      v = (0, y.useRef)(n),
      b = (0, y.useRef)(r),
      x = au(e, `trapezoid-`);
    if (
      ((0, y.useEffect)(() => {
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
    var C = S(`recharts-trapezoid`, s);
    if (!d)
      return y.createElement(
        `g`,
        null,
        y.createElement(
          `path`,
          $C({}, A(t), { className: C, d: ew(n, r, i, a, o) }),
        ),
      );
    var w = h.current,
      T = g.current,
      E = _.current,
      D = v.current,
      O = b.current,
      k = `0px ${p === -1 ? 1 : p}px`,
      ee = `${p}px 0px`,
      j = Al([`strokeDasharray`], l, c);
    return y.createElement(
      iu,
      {
        animationId: x,
        key: x,
        canBegin: p > 0,
        duration: l,
        easing: c,
        isActive: d,
        begin: u,
      },
      (e) => {
        var s = qt(w, i, e),
          c = qt(T, a, e),
          l = qt(E, o, e),
          u = qt(D, n, e),
          d = qt(O, r, e);
        f.current &&
          ((h.current = s),
          (g.current = c),
          (_.current = l),
          (v.current = u),
          (b.current = d));
        var p =
          e > 0
            ? { transition: j, strokeDasharray: ee }
            : { strokeDasharray: k };
        return y.createElement(
          `path`,
          $C({}, A(t), {
            className: C,
            d: ew(u, d, s, c, l),
            ref: f,
            style: YC(YC({}, p), t.style),
          }),
        );
      },
    );
  },
  rw = n(qC()),
  iw = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function aw(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ow(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function ow(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function sw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? sw(Object(n), !0).forEach(function (t) {
          lw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function lw(e, t, n) {
  return (
    (t = uw(t)) in e
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
function uw(e) {
  var t = dw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function dw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function fw(e, t) {
  return cw(cw({}, t), e);
}
function pw(e, t) {
  return e === `symbols`;
}
function mw(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return y.createElement(vu, n);
    case `trapezoid`:
      return y.createElement(nw, n);
    case `sector`:
      return y.createElement(Eu, n);
    case `symbols`:
      if (pw(t, n)) return y.createElement(dn, n);
      break;
    default:
      return null;
  }
}
function hw(e) {
  return (0, y.isValidElement)(e) ? e.props : e;
}
function gw(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = fw,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = aw(e, iw),
    s;
  if ((0, y.isValidElement)(t))
    s = (0, y.cloneElement)(t, cw(cw({}, o), hw(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, rw.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = y.createElement(mw, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = y.createElement(mw, { shapeType: n, elementProps: l });
  }
  return a ? y.createElement(ce, { className: i }, s) : s;
}
var _w = (e, t) => {
    var n = I();
    return (r, i) => (a) => {
      e?.(r, i, a),
        n(
          Iy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        );
    };
  },
  vw = (e) => {
    var t = I();
    return (n, r) => (i) => {
      e?.(n, r, i), t(Ly());
    };
  },
  yw = (e, t) => {
    var n = I();
    return (r, i) => (a) => {
      e?.(r, i, a),
        n(
          zy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        );
    };
  };
function bw(e) {
  var { fn: t, args: n } = e,
    r = I(),
    i = Is();
  return (
    (0, y.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(Ny(e)),
          () => {
            r(Py(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var xw = () => {};
function Sw(e) {
  var { legendPayload: t } = e,
    n = I(),
    r = Is();
  return (
    (0, y.useLayoutEffect)(
      () =>
        r
          ? xw
          : (n(bc(t)),
            () => {
              n(xc(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var Cw =
  y.useId ??
  (() => {
    var [e] = y.useState(() => Wt(`uid-`));
    return e;
  });
function ww(e, t) {
  var n = Cw();
  return t || (e ? `${e}-${n}` : n);
}
var Tw = (0, y.createContext)(void 0),
  Ew = (e) => {
    var { id: t, type: n, children: r } = e,
      i = ww(`recharts-${n}`, t);
    return y.createElement(Tw.Provider, { value: i }, r(i));
  },
  Dw = Aa({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(Mi(t.payload));
        },
        prepare: oa(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = Di(e).cartesianItems.indexOf(Mi(n));
          i > -1 && (e.cartesianItems[i] = Mi(r));
        },
        prepare: oa(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Di(e).cartesianItems.indexOf(Mi(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: oa(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(Mi(t.payload));
        },
        prepare: oa(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Di(e).polarItems.indexOf(Mi(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: oa(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: Ow,
    replaceCartesianGraphicalItem: kw,
    removeCartesianGraphicalItem: Aw,
    addPolarGraphicalItem: jw,
    removePolarGraphicalItem: Mw,
  } = Dw.actions,
  Nw = Dw.reducer;
function Pw(e) {
  var t = I(),
    n = (0, y.useRef)(null);
  return (
    (0, y.useLayoutEffect)(() => {
      n.current === null
        ? t(Ow(e))
        : n.current !== e && t(kw({ prev: n.current, next: e })),
        (n.current = e);
    }, [t, e]),
    (0, y.useLayoutEffect)(
      () => () => {
        n.current &&= (t(Aw(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function Fw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Iw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fw(Object(n), !0).forEach(function (t) {
          Lw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Lw(e, t, n) {
  return (
    (t = Rw(t)) in e
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
function Rw(e) {
  var t = zw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Bw = Aa({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = Mi(t.payload);
        },
        prepare: oa(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: oa(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = Mi(t.payload);
        },
        prepare: oa(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: oa(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = Mi(t.payload);
        },
        prepare: oa(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: oa(),
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
          e.yAxis[n] = Iw(
            Iw({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: Vw,
    removeXAxis: Hw,
    addYAxis: Uw,
    removeYAxis: Ww,
    addZAxis: Gw,
    removeZAxis: Kw,
    updateYAxisWidth: qw,
  } = Bw.actions,
  Jw = Bw.reducer,
  Yw = R(
    [
      R([H], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      gs,
      _s,
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
  Xw = () => L(Yw),
  Zw = () => L(zb),
  Qw = [`x`, `y`];
function $w() {
  return (
    ($w = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $w.apply(null, arguments)
  );
}
function eT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? eT(Object(n), !0).forEach(function (t) {
          nT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nT(e, t, n) {
  return (
    (t = rT(t)) in e
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
function rT(e) {
  var t = iT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function aT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oT(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function oT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function sT(e, t) {
  var { x: n, y: r } = e,
    i = aT(e, Qw),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return tT(
    tT(tT(tT(tT({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function cT(e) {
  return y.createElement(
    gw,
    $w(
      {
        shapeType: `rectangle`,
        propTransformer: sT,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var lT = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (P(e)) return e;
      var i = P(n) || F(n);
      return i ? e(n, r) : (!i && d(!1), t);
    };
  },
  uT = Aa({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        e[n] || (e[n] = []), e[n].push(r);
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
  { addErrorBar: dT, replaceErrorBar: fT, removeErrorBar: pT } = uT.actions,
  mT = uT.reducer,
  hT = [`children`];
function gT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = _T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function _T(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var vT = (0, y.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function yT(e) {
  var { children: t } = e,
    n = gT(e, hT);
  return y.createElement(vT.Provider, { value: n }, t);
}
function bT(e, t) {
  var n = L((t) => E_(t, e)),
    r = L((e) => k_(e, t)),
    i = n?.allowDataOverflow ?? w_.allowDataOverflow,
    a = r?.allowDataOverflow ?? D_.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function xT(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = Xw(),
    { needClipX: a, needClipY: o, needClip: s } = bT(t, n);
  if (!s) return null;
  var { x: c, y: l, width: u, height: d } = i;
  return y.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    y.createElement(`rect`, {
      x: a ? c : c - u / 2,
      y: o ? l : l - d / 2,
      width: a ? u : u * 2,
      height: o ? d : d * 2,
    }),
  );
}
var ST = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  CT = [`value`, `background`, `tooltipPosition`],
  wT = [`id`],
  TT = [`onMouseEnter`, `onClick`, `onMouseLeave`];
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
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
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
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
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
var PT = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: fs(n, t), payload: e },
  ];
};
function FT(e) {
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
      name: fs(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function IT(e) {
  var t = L(Nb),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = MT(a, ST),
    u = _w(o, r),
    d = vw(s),
    f = yw(c, r);
  if (!i || n == null) return null;
  var p = k(i);
  return y.createElement(
    y.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = MT(e, CT);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = OT(
          OT(
            OT(
              OT(
                OT({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            mn(l, e, n),
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
      return y.createElement(cT, ET({ key: `background-bar-${n}` }, _));
    }),
  );
}
function LT(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return OT(
        OT({}, t),
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
  return y.createElement(EC, { value: t ? i : void 0 }, n);
}
function RT(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = L(Nb),
    c = L(Fb),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return y.createElement(
    cT,
    ET({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function zT(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return y.createElement(
    cT,
    ET({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function BT(e) {
  var { data: t, props: n } = e,
    r = O(n),
    { id: i } = r,
    a = MT(r, wT),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = MT(n, TT),
    p = _w(l, s),
    m = vw(d),
    h = yw(u, s);
  return t
    ? y.createElement(
        y.Fragment,
        null,
        t.map((e, t) =>
          y.createElement(
            ce,
            ET(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              mn(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? y.createElement(RT, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : y.createElement(zT, {
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
function VT(e) {
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
    f = au(t, `recharts-bar-`),
    [p, m] = (0, y.useState)(!1),
    h = !p,
    g = (0, y.useCallback)(() => {
      typeof l == `function` && l(), m(!1);
    }, [l]),
    _ = (0, y.useCallback)(() => {
      typeof u == `function` && u(), m(!0);
    }, [u]);
  return y.createElement(
    LT,
    { showLabels: h, rects: r },
    y.createElement(
      iu,
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
                  return OT(
                    OT({}, t),
                    {},
                    {
                      x: qt(r.x, t.x, e),
                      y: qt(r.y, t.y, e),
                      width: qt(r.width, t.width, e),
                      height: qt(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = qt(0, t.height, e);
                  return OT(
                    OT({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = qt(0, t.width, e);
                return OT(OT({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : y.createElement(
                ce,
                null,
                y.createElement(BT, { props: t, data: a }),
              )
        );
      },
    ),
    y.createElement(jC, { label: t.label }),
    t.children,
  );
}
function HT(e) {
  var t = (0, y.useRef)(null);
  return y.createElement(VT, { previousRectanglesRef: t, props: e });
}
var UT = 0,
  WT = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: V(e, t) };
  },
  GT = class extends y.PureComponent {
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
      var l = S(`recharts-bar`, r),
        u = c;
      return y.createElement(
        ce,
        { className: l, id: c },
        o &&
          y.createElement(
            `defs`,
            null,
            y.createElement(xT, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        y.createElement(
          ce,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          y.createElement(IT, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          y.createElement(HT, this.props),
        ),
      );
    }
  },
  KT = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !Uc.isSsr,
    legendType: `rect`,
    minPointSize: UT,
    xAxisId: 0,
    yAxisId: 0,
  };
function qT(e) {
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
    { needClip: d } = bT(t, n),
    f = hc(),
    p = Is(),
    m = WC(e.children, tS),
    h = L((r) => hE(r, t, n, p, e.id, m));
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
    y.createElement(
      yT,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: WT,
        errorBarOffset: g,
      },
      y.createElement(
        GT,
        ET({}, e, {
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
function JT(e) {
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
    _ = is({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u ? (h = Qo(u[d], g)) : ((h = V(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = lT(r, UT)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        (v = rs({
          axis: o,
          ticks: c,
          bandSize: a,
          offset: i.offset,
          entry: e,
          index: d,
        })),
          (y = T ?? w ?? void 0),
          (b = i.size);
        var E = w - T;
        if (
          ((x = Bt(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = zt(x || C) * (Math.abs(C) - Math.abs(x));
          (y -= D), (x += D);
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = rs({
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
          var A = zt(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : OT(
            OT({}, e),
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
function YT(e) {
  var t = xl(e, KT),
    n = Is();
  return y.createElement(Ew, { id: t.id, type: `bar` }, (e) =>
    y.createElement(
      y.Fragment,
      null,
      y.createElement(Sw, { legendPayload: PT(t) }),
      y.createElement(bw, { fn: FT, args: t }),
      y.createElement(Pw, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: ts(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      y.createElement(qT, ET({}, t, { id: e })),
    ),
  );
}
var XT = y.memo(YT);
XT.displayName = `Bar`;
function ZT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function QT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZT(Object(n), !0).forEach(function (t) {
          $T(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $T(e, t, n) {
  return (
    (t = eE(t)) in e
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
function eE(e) {
  var t = tE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var nE = (e, t) => t,
  rE = (e, t, n) => n,
  iE = (e, t, n, r) => r,
  aE = R([L_, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  oE = R([aE], (e) => e?.maxBarSize),
  sE = (e, t, n, r, i, a) => a,
  cE = (e, t, n) => {
    var r = n ?? e;
    if (!F(r)) return Gt(r, t, 0);
  },
  lE = R([U, L_, nE, rE, iE], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  uE = (e, t, n, r) =>
    U(e) === `horizontal` ? rv(e, `yAxis`, n, r) : rv(e, `xAxis`, t, r),
  dE = R(
    [
      lE,
      Hg,
      (e, t, n) =>
        U(e) === `horizontal` ? my(e, `xAxis`, t) : my(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(h_),
        a = e.filter((e) => e.stackId == null),
        o = i.reduce(
          (e, t) => (
            e[t.stackId] || (e[t.stackId] = []), e[t.stackId].push(t), e
          ),
          r,
        ),
        s = Object.entries(o).map((e) => {
          var [r, i] = e;
          return {
            stackId: r,
            dataKeys: i.map((e) => e.dataKey),
            barSize: cE(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: cE(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  fE = (e, t, n, r, i) => {
    var a = aE(e, t, n, r, i);
    if (a != null) {
      var o = U(e),
        s = zg(e),
        { maxBarSize: c } = a,
        l = F(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = Sy(e, `xAxis`, t, r)), (d = xy(e, `xAxis`, t, r)))
          : ((u = Sy(e, `yAxis`, n, r)), (d = xy(e, `yAxis`, n, r))),
        us(u, d, !0) ?? l ?? 0
      );
    }
  },
  pE = (e, t, n, r) => {
    var i = U(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = Sy(e, `xAxis`, t, r)), (o = xy(e, `xAxis`, t, r)))
        : ((a = Sy(e, `yAxis`, n, r)), (o = xy(e, `yAxis`, n, r))),
      us(a, o)
    );
  };
function mE(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Gt(e, n, 0, !0),
      s,
      c = [];
    if (Xs(r[0].barSize)) {
      var l = !1,
        u = n / a,
        d = r.reduce((e, t) => e + (t.barSize || 0), 0);
      (d += (a - 1) * o),
        d >= n && ((d -= (a - 1) * o), (o = 0)),
        d >= n && u > 0 && ((l = !0), (u *= 0.9), (d = a * u));
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
        return (f = r[r.length - 1].position), r;
      }, c);
    } else {
      var p = Gt(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = Xs(i) ? Math.min(m, i) : m;
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
var hE = R(
    [
      H,
      Ps,
      (e, t, n, r) => Sy(e, `xAxis`, t, r),
      (e, t, n, r) => Sy(e, `yAxis`, n, r),
      (e, t, n, r) => xy(e, `xAxis`, t, r),
      (e, t, n, r) => xy(e, `yAxis`, n, r),
      R(
        [
          R([dE, zg, Bg, Vg, fE, pE, oE], (e, t, n, r, i, a, o) => {
            var s = F(o) ? t : o,
              c = mE(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  QT(
                    QT({}, e),
                    {},
                    {
                      position: QT(
                        QT({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          aE,
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
      U,
      pg,
      pE,
      R([uE, aE], (e, t) => {
        var n = d_(t);
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
      aE,
      sE,
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
          return JT({
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
  gE = (e) => {
    var { chartData: t } = e,
      n = I(),
      r = Is();
    return (
      (0, y.useEffect)(
        () =>
          r
            ? () => {}
            : (n(Ox(t)),
              () => {
                n(Ox(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  _E = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  vE = Aa({
    name: `brush`,
    initialState: _E,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? _E : t.payload;
      },
    },
  }),
  { setBrushSettings: yE } = vE.actions,
  bE = vE.reducer;
function xE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function SE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xE(Object(n), !0).forEach(function (t) {
          CE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function CE(e, t, n) {
  return (
    (t = wE(t)) in e
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
function wE(e) {
  var t = TE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function TE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var EE = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return {
      x: Math.min(n, i),
      y: Math.min(r, a),
      width: Math.abs(i - n),
      height: Math.abs(a - r),
    };
  },
  DE = (e) => {
    var { x1: t, y1: n, x2: r, y2: i } = e;
    return EE({ x: t, y: n }, { x: r, y: i });
  },
  OE = class e {
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
CE(OE, `EPS`, 1e-4);
var kE = (e) => {
  var t = Object.keys(e).reduce(
    (t, n) => SE(SE({}, t), {}, { [n]: OE.create(e[n]) }),
    {},
  );
  return SE(
    SE({}, t),
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
function AE(e) {
  return ((e % 180) + 180) % 180;
}
var jE = function (e) {
    var { width: t, height: n } = e,
      r =
        (AE(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  ME = Aa({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Di(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Di(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = Di(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: NE,
    removeDot: PE,
    addArea: FE,
    removeArea: IE,
    addLine: LE,
    removeLine: RE,
  } = ME.actions,
  zE = ME.reducer,
  BE = (0, y.createContext)(void 0),
  VE = (e) => {
    var { children: t } = e,
      [n] = (0, y.useState)(`${Wt(`recharts`)}-clip`),
      r = Xw();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return y.createElement(
      BE.Provider,
      { value: n },
      y.createElement(
        `defs`,
        null,
        y.createElement(
          `clipPath`,
          { id: n },
          y.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  },
  HE = () => (0, y.useContext)(BE);
function UE(e, t) {
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
function WE(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function GE(e, t, n) {
  return jE({ width: e.width + t.width, height: e.height + t.height }, n);
}
function KE(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function qE(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function JE(e, t) {
  return WE(e, t + 1);
}
function YE(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: WE(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || qE(e, p, f, u, s);
        m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function XE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ZE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XE(Object(n), !0).forEach(function (t) {
          QE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function QE(e, t, n) {
  return (
    (t = $E(t)) in e
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
function $E(e) {
  var t = eD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function eD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tD(e, t, n, r, i) {
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
          a[t] = r = ZE(
            ZE({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = ZE(ZE({}, r), {}, { tickCoord: r.coordinate });
        qE(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = ZE(ZE({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function nD(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    (o[s - 1] = u =
      ZE(
        ZE({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      qE(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = ZE(ZE({}, u), {}, { isShow: !0 })));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = ZE(
            ZE({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = ZE(ZE({}, r), {}, { tickCoord: r.coordinate });
        qE(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = ZE(ZE({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function rD(e, t, n) {
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
  if (P(c) || Uc.isSsr) return JE(i, P(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? _S(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? GE(_S(i, { fontSize: t, letterSpacing: n }), m, d)
        : _S(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? zt(i[1].coordinate - i[0].coordinate) : 1,
    _ = KE(a, g, p);
  return c === `equidistantPreserveStart`
    ? YE(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? nD(g, _, h, i, o, c === `preserveStartEnd`)
          : tD(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var iD = (e) => {
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
  aD = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  oD = [`viewBox`],
  sD = [`viewBox`];
function cD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = lD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function lD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function uD() {
  return (
    (uD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uD.apply(null, arguments)
  );
}
function dD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dD(Object(n), !0).forEach(function (t) {
          fD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fD(e, t, n) {
  return (
    (t = pD(t)) in e
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
function pD(e) {
  var t = mD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var hD = {
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
function gD(e) {
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
  var l = $($($({}, c), O(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = $($({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = $($({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return y.createElement(
    `line`,
    uD({}, l, {
      className: S(
        `recharts-cartesian-axis-line`,
        (0, Rt.default)(s, `className`),
      ),
    }),
  );
}
function _D(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = P(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case `top`:
      (l = u = e.coordinate),
        (f = n + +!s * i),
        (d = f - h * g),
        (m = d - h * c),
        (p = _);
      break;
    case `left`:
      (d = f = e.coordinate),
        (u = t + +!s * r),
        (l = u - h * g),
        (p = l - h * c),
        (m = _);
      break;
    case `right`:
      (d = f = e.coordinate),
        (u = t + +s * r),
        (l = u + h * g),
        (p = l + h * c),
        (m = _);
      break;
    default:
      (l = u = e.coordinate),
        (f = n + +s * i),
        (d = f + h * g),
        (m = d + h * c),
        (p = _);
  }
  return { line: { x1: l, y1: d, x2: u, y2: f }, tick: { x: p, y: m } };
}
function vD(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function yD(e, t) {
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
function bD(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = S(n.className, `recharts-cartesian-axis-tick-value`);
  if (y.isValidElement(t))
    i = y.cloneElement(t, $($({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t($($({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    typeof t != `boolean` && (o = S(o, t?.className)),
      (i = y.createElement(WS, uD({}, n, { className: o }), r));
  }
  return i;
}
function xD(e) {
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
      getTicksConfig: b,
      events: x,
    } = e,
    C = rD($($({}, b), {}, { ticks: t }), _, v),
    w = vD(l, u),
    T = yD(l, u),
    E = O(b),
    D = k(n),
    A = {};
  typeof r == `object` && (A = r);
  var ee = $($({}, E), {}, { fill: `none` }, A),
    j = C.map((e, t) => {
      var { line: _, tick: v } = _D(e, d, f, p, m, l, h, u, g),
        b = $(
          $(
            $(
              $({ textAnchor: w, verticalAnchor: T }, E),
              {},
              { stroke: `none`, fill: i },
              D,
            ),
            v,
          ),
          {},
          {
            index: t,
            payload: e,
            visibleTicksCount: C.length,
            tickFormatter: a,
            padding: s,
          },
          c,
        );
      return y.createElement(
        ce,
        uD(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          mn(x, e, t),
        ),
        r &&
          y.createElement(
            `line`,
            uD({}, ee, _, {
              className: S(
                `recharts-cartesian-axis-tick-line`,
                (0, Rt.default)(r, `className`),
              ),
            }),
          ),
        n &&
          y.createElement(bD, {
            option: n,
            tickProps: b,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return j.length > 0
    ? y.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, j)
    : null;
}
var SD = (0, y.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = cD(e, aD),
      [l, u] = (0, y.useState)(``),
      [d, f] = (0, y.useState)(``),
      p = (0, y.useRef)(null);
    (0, y.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        iD({
          ticks: p.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var m = (0, y.useCallback)(
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
      : y.createElement(
          ce,
          { className: S(`recharts-cartesian-axis`, a), ref: m },
          y.createElement(gD, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: O(e),
          }),
          y.createElement(xD, {
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
          y.createElement(
            eC,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            y.createElement(mC, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  CD = y.memo(SD, (e, t) => {
    var { viewBox: n } = e,
      r = cD(e, oD),
      { viewBox: i } = t,
      a = cD(t, sD);
    return UE(n, i) && UE(r, a);
  }),
  wD = y.forwardRef((e, t) => {
    var n = xl(e, hD);
    return y.createElement(CD, uD({}, n, { ref: t }));
  });
wD.displayName = `CartesianAxis`;
var TD = [`x1`, `y1`, `x2`, `y2`, `key`],
  ED = [`offset`],
  DD = [`xAxisId`, `yAxisId`],
  OD = [`xAxisId`, `yAxisId`];
function kD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function AD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kD(Object(n), !0).forEach(function (t) {
          jD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jD(e, t, n) {
  return (
    (t = MD(t)) in e
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
function MD(e) {
  var t = ND(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ND(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function PD() {
  return (
    (PD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    PD.apply(null, arguments)
  );
}
function FD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ID(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function ID(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var LD = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return y.createElement(`rect`, {
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
function RD(e, t) {
  var n;
  if (y.isValidElement(e)) n = y.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = O(FD(t, TD)),
      { offset: l } = c,
      u = FD(c, ED);
    n = y.createElement(
      `line`,
      PD({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function zD(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = FD(e, DD),
    c = i.map((e, i) =>
      RD(
        r,
        AD(
          AD({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return y.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    c,
  );
}
function BD(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = FD(e, OD),
    c = i.map((e, i) =>
      RD(
        r,
        AD(
          AD({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return y.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    c,
  );
}
function VD(e) {
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
    return y.createElement(`rect`, {
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
  return y.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function HD(e) {
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
    return y.createElement(`rect`, {
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
  return y.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    u,
  );
}
var UD = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return Jo(
      rD(
        AD(
          AD(AD({}, hD), n),
          {},
          { ticks: Yo(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  WD = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return Jo(
      rD(
        AD(
          AD(AD({}, hD), n),
          {},
          { ticks: Yo(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  GD = {
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
function KD(e) {
  var t = fc(),
    n = pc(),
    r = dc(),
    i = AD(
      AD({}, xl(e, GD)),
      {},
      {
        x: P(e.x) ? e.x : r.left,
        y: P(e.y) ? e.y : r.top,
        width: P(e.width) ? e.width : r.width,
        height: P(e.height) ? e.height : r.height,
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
    m = Is(),
    h = L((e) => yy(e, `xAxis`, a, m)),
    g = L((e) => yy(e, `yAxis`, o, m));
  if (
    !P(l) ||
    l <= 0 ||
    !P(u) ||
    u <= 0 ||
    !P(s) ||
    s !== +s ||
    !P(c) ||
    c !== +c
  )
    return null;
  var _ = i.verticalCoordinatesGenerator || UD,
    v = i.horizontalCoordinatesGenerator || WD,
    { horizontalPoints: b, verticalPoints: x } = i;
  if ((!b || !b.length) && typeof v == `function`) {
    var S = f && f.length,
      C = v(
        {
          yAxis: g ? AD(AD({}, g), {}, { ticks: S ? f : g.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        S ? !0 : d,
      );
    Array.isArray(C) && (b = C);
  }
  if ((!x || !x.length) && typeof _ == `function`) {
    var w = p && p.length,
      T = _(
        {
          xAxis: h ? AD(AD({}, h), {}, { ticks: w ? p : h.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        w ? !0 : d,
      );
    Array.isArray(T) && (x = T);
  }
  return y.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    y.createElement(LD, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    y.createElement(VD, PD({}, i, { horizontalPoints: b })),
    y.createElement(HD, PD({}, i, { verticalPoints: x })),
    y.createElement(
      zD,
      PD({}, i, { offset: r, horizontalPoints: b, xAxis: h, yAxis: g }),
    ),
    y.createElement(
      BD,
      PD({}, i, { offset: r, verticalPoints: x, xAxis: h, yAxis: g }),
    ),
  );
}
KD.displayName = `CartesianGrid`;
var qD = [`dangerouslySetInnerHTML`, `ticks`],
  JD = [`id`],
  YD = [`domain`],
  XD = [`domain`];
function ZD() {
  return (
    (ZD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZD.apply(null, arguments)
  );
}
function QD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function $D(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function eO(e) {
  var t = I();
  return (
    (0, y.useLayoutEffect)(
      () => (
        t(Vw(e)),
        () => {
          t(Hw(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var tO = (e) => {
    var { xAxisId: t, className: n } = e,
      r = L(Ps),
      i = Is(),
      a = `xAxis`,
      o = L((e) => Qv(e, a, t, i)),
      s = L((e) => by(e, a, t, i)),
      c = L((e) => oy(e, t)),
      l = L((e) => dy(e, t)),
      u = L((e) => T_(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = QD(e, qD),
      { id: m } = u,
      h = QD(u, JD);
    return y.createElement(
      wD,
      ZD({}, p, h, {
        scale: o,
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: S(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  nO = {
    allowDataOverflow: w_.allowDataOverflow,
    allowDecimals: w_.allowDecimals,
    allowDuplicatedCategory: w_.allowDuplicatedCategory,
    height: w_.height,
    hide: !1,
    mirror: w_.mirror,
    orientation: w_.orientation,
    padding: w_.padding,
    reversed: w_.reversed,
    scale: w_.scale,
    tickCount: w_.tickCount,
    type: w_.type,
    xAxisId: 0,
  },
  rO = y.memo(
    (e) => {
      var t = xl(e, nO);
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(eO, {
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
        y.createElement(tO, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = QD(e, YD),
        { domain: i } = t;
      return UE(r, QD(t, XD))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : UE({ domain: n }, { domain: i })
        : !1;
    },
  );
rO.displayName = `XAxis`;
var iO = [`dangerouslySetInnerHTML`, `ticks`],
  aO = [`id`],
  oO = [`domain`],
  sO = [`domain`];
function cO() {
  return (
    (cO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cO.apply(null, arguments)
  );
}
function lO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = uO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function uO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function dO(e) {
  var t = I();
  return (
    (0, y.useLayoutEffect)(
      () => (
        t(Uw(e)),
        () => {
          t(Ww(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var fO = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, y.useRef)(null),
      o = (0, y.useRef)(null),
      s = L(Ps),
      c = Is(),
      l = I(),
      u = `yAxis`,
      d = L((e) => Qv(e, u, t, c)),
      f = L((e) => py(e, t)),
      p = L((e) => fy(e, t)),
      m = L((e) => by(e, u, t, c)),
      h = L((e) => O_(e, t));
    if (
      ((0, y.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            aC(i) ||
            (0, y.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(qw({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = lO(e, iO),
      { id: b } = h,
      x = lO(h, aO);
    return y.createElement(
      wD,
      cO({}, v, x, {
        ref: a,
        labelRef: o,
        scale: d,
        x: p.x,
        y: p.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: f.width,
        height: f.height,
        className: S(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: m,
      }),
    );
  },
  pO = {
    allowDataOverflow: D_.allowDataOverflow,
    allowDecimals: D_.allowDecimals,
    allowDuplicatedCategory: D_.allowDuplicatedCategory,
    hide: !1,
    mirror: D_.mirror,
    orientation: D_.orientation,
    padding: D_.padding,
    reversed: D_.reversed,
    scale: D_.scale,
    tickCount: D_.tickCount,
    type: D_.type,
    width: D_.width,
    yAxisId: 0,
  },
  mO = y.memo(
    (e) => {
      var t = xl(e, pO);
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(dO, {
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
        y.createElement(fO, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = lO(e, oO),
        { domain: i } = t;
      return UE(r, lO(t, sO))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : UE({ domain: n }, { domain: i })
        : !1;
    },
  );
(mO.displayName = `YAxis`), g();
function hO(e) {
  e();
}
function gO() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      hO(() => {
        let t = e;
        for (; t; ) t.callback(), (t = t.next);
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n; ) t.push(n), (n = n.next);
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
var _O = { notify() {}, get: () => [] };
function vO(e, t) {
  let n,
    r = _O,
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
    i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = gO()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = _O));
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
var yO =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  bO = typeof navigator < `u` && navigator.product === `ReactNative`,
  xO = yO || bO ? y.useLayoutEffect : y.useEffect,
  SO = Symbol.for(`react-redux-context`),
  CO = typeof globalThis < `u` ? globalThis : {};
function wO() {
  if (!y.createContext) return {};
  let e = (CO[SO] ??= new Map()),
    t = e.get(y.createContext);
  return t || ((t = y.createContext(null)), e.set(y.createContext, t)), t;
}
var TO = wO();
function EO(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = y.useMemo(() => {
      let e = vO(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = y.useMemo(() => i.getState(), [i]);
  xO(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        e.tryUnsubscribe(), (e.onStateChange = void 0);
      }
    );
  }, [a, o]);
  let s = n || TO;
  return y.createElement(s.Provider, { value: a }, t);
}
var DO = EO,
  OO = R([(e, t) => t, U, l_, X, Eb, Ob, Zb, H], sx),
  kO = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  AO = $i(`mouseClick`),
  jO = vo();
jO.startListening({
  actionCreator: AO,
  effect: (e, t) => {
    var n = e.payload,
      r = OO(t.getState(), kO(n));
    r?.activeIndex != null &&
      t.dispatch(
        Vy({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var MO = $i(`mouseMove`),
  NO = vo();
NO.startListening({
  actionCreator: MO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = Dy(r, r.tooltip.settings.shared),
      a = OO(r, kO(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(Ry())
        : t.dispatch(
            By({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function PO(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var FO = {
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
  IO = Aa({
    name: `rootProps`,
    initialState: FO,
    reducers: {
      updateOptions: (e, t) => {
        (e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? FO.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className);
      },
    },
  }),
  LO = IO.reducer,
  { updateOptions: RO } = IO.actions,
  zO = Aa({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: BO } = zO.actions,
  VO = zO.reducer,
  HO = $i(`keyDown`),
  UO = $i(`focus`),
  WO = vo();
WO.startListening({
  actionCreator: HO,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number($y(r, mb(n))),
          o = Ob(n);
        if (i === `Enter`) {
          var s = nx(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            Uy({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = Cy(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = nx(n, `axis`, `hover`, String(l));
            t.dispatch(
              Uy({
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
  WO.startListening({
    actionCreator: UO,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = nx(n, `axis`, `hover`, String(i));
          t.dispatch(
            Uy({
              activeDataKey: void 0,
              active: !0,
              activeIndex: i,
              activeCoordinate: a,
            }),
          );
        }
      }
    },
  });
var GO = $i(`externalEvent`),
  KO = vo();
KO.startListening({
  actionCreator: GO,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: Lb(n),
          activeDataKey: Fb(n),
          activeIndex: Nb(n),
          activeLabel: Pb(n),
          activeTooltipIndex: Nb(n),
          isTooltipActive: Rb(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var qO = R(
    [R([rb], (e) => e.tooltipItemPayloads), nb, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  JO = $i(`touchMove`),
  YO = vo();
YO.startListening({
  actionCreator: JO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = Dy(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = OO(
        r,
        kO({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          By({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Ss),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = qO(t.getState(), c, l);
      t.dispatch(Iy({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var XO = Ar({
    brush: bE,
    cartesianAxis: Jw,
    chartData: jx,
    errorBars: mT,
    graphicalItems: Nw,
    layout: To,
    legend: Sc,
    options: wx,
    polarAxis: LC,
    polarOptions: VO,
    referenceElements: zE,
    rootProps: LO,
    tooltip: Wy,
  }),
  ZO = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return ua({
      reducer: XO,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          jO.middleware,
          NO.middleware,
          WO.middleware,
          KO.middleware,
          YO.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(ca({ type: `raf` }))
        );
      },
      devTools: Uc.devToolsEnabled && {
        serialize: { replacer: PO },
        name: `recharts-${t}`,
      },
    });
  };
function QO(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = Is(),
    a = (0, y.useRef)(null);
  if (i) return n;
  a.current ??= ZO(t, r);
  var o = Kn;
  return y.createElement(DO, { context: o, store: a.current }, n);
}
function $O(e) {
  var { layout: t, margin: n } = e,
    r = I(),
    i = Is();
  return (
    (0, y.useEffect)(() => {
      i || (r(So(t)), r(xo(n)));
    }, [r, i, t, n]),
    null
  );
}
function ek(e) {
  var t = I();
  return (
    (0, y.useEffect)(() => {
      t(RO(e));
    }, [t, e]),
    null
  );
}
var tk = [`children`];
function nk(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = rk(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function rk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ik() {
  return (
    (ik = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ik.apply(null, arguments)
  );
}
var ak = { width: `100%`, height: `100%`, display: `block` },
  ok = (0, y.forwardRef)((e, t) => {
    var n = fc(),
      r = pc(),
      i = Wc();
    if (!Zs(n) || !Zs(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return y.createElement(
      re,
      ik({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: ak,
        ref: t,
      }),
      a,
    );
  }),
  sk = (e) => {
    var { children: t } = e,
      n = L(Rs);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return y.createElement(re, { width: r, height: i, x: o, y: a }, t);
  },
  ck = (0, y.forwardRef)((e, t) => {
    var { children: n } = e,
      r = nk(e, tk);
    return Is()
      ? y.createElement(sk, null, n)
      : y.createElement(ok, ik({ ref: t }, r), n);
  });
function lk() {
  var e = I(),
    [t, n] = (0, y.useState)(null),
    r = L(vs);
  return (
    (0, y.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        Xs(n) && n !== r && e(wo(n));
      }
    }, [t, e, r]),
    n
  );
}
function uk(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function dk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? uk(Object(n), !0).forEach(function (t) {
          fk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : uk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fk(e, t, n) {
  return (
    (t = pk(t)) in e
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
function pk(e) {
  var t = mk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function hk() {
  return (
    (hk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hk.apply(null, arguments)
  );
}
var gk = () => (Ux(), null);
function _k(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var vk = (0, y.forwardRef)((e, t) => {
    var n = (0, y.useRef)(null),
      [r, i] = (0, y.useState)({
        containerWidth: _k(e.style?.width),
        containerHeight: _k(e.style?.height),
      }),
      a = (0, y.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, y.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: r, height: i } = e.getBoundingClientRect();
            a(r, i);
            var o = new ResizeObserver((e) => {
              var { width: t, height: n } = e[0].contentRect;
              a(t, n);
            });
            o.observe(e), (n.current = o);
          }
        },
        [t, a],
      );
    return (
      (0, y.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(gc, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        y.createElement(`div`, hk({ ref: o }, e)),
      )
    );
  }),
  yk = (0, y.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, y.useState)({
        containerWidth: _k(n),
        containerHeight: _k(r),
      }),
      o = (0, y.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, y.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(gc, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      y.createElement(`div`, hk({ ref: s }, e)),
    );
  }),
  bk = (0, y.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(gc, { width: n, height: r }),
      y.createElement(`div`, hk({ ref: t }, e)),
    );
  }),
  xk = (0, y.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return Vt(n) || Vt(r)
      ? y.createElement(yk, hk({}, e, { ref: t }))
      : y.createElement(bk, hk({}, e, { ref: t }));
  });
function Sk(e) {
  return e === !0 ? vk : xk;
}
var Ck = (0, y.forwardRef)((e, t) => {
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
        dispatchTouchEvents: b = !0,
      } = e,
      x = (0, y.useRef)(null),
      C = I(),
      [w, T] = (0, y.useState)(null),
      [E, D] = (0, y.useState)(null),
      O = lk(),
      k = oc(),
      A = k?.width > 0 ? k.width : _,
      ee = k?.height > 0 ? k.height : i,
      j = (0, y.useCallback)(
        (e) => {
          O(e),
            typeof t == `function` && t(e),
            T(e),
            D(e),
            e != null && (x.current = e);
        },
        [O, t, T, D],
      ),
      M = (0, y.useCallback)(
        (e) => {
          C(AO(e)), C(GO({ handler: a, reactEvent: e }));
        },
        [C, a],
      ),
      te = (0, y.useCallback)(
        (e) => {
          C(MO(e)), C(GO({ handler: l, reactEvent: e }));
        },
        [C, l],
      ),
      ne = (0, y.useCallback)(
        (e) => {
          C(Ry()), C(GO({ handler: u, reactEvent: e }));
        },
        [C, u],
      ),
      re = (0, y.useCallback)(
        (e) => {
          C(MO(e)), C(GO({ handler: d, reactEvent: e }));
        },
        [C, d],
      ),
      ie = (0, y.useCallback)(() => {
        C(UO());
      }, [C]),
      ae = (0, y.useCallback)(
        (e) => {
          C(HO(e.key));
        },
        [C],
      ),
      oe = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: o, reactEvent: e }));
        },
        [C, o],
      ),
      se = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: s, reactEvent: e }));
        },
        [C, s],
      ),
      ce = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: c, reactEvent: e }));
        },
        [C, c],
      ),
      ue = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: f, reactEvent: e }));
        },
        [C, f],
      ),
      N = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: h, reactEvent: e }));
        },
        [C, h],
      ),
      de = (0, y.useCallback)(
        (e) => {
          b && C(JO(e)), C(GO({ handler: m, reactEvent: e }));
        },
        [C, b, m],
      ),
      fe = (0, y.useCallback)(
        (e) => {
          C(GO({ handler: p, reactEvent: e }));
        },
        [C, p],
      ),
      pe = Sk(v);
    return y.createElement(
      gx.Provider,
      { value: w },
      y.createElement(
        le.Provider,
        { value: E },
        y.createElement(
          pe,
          {
            width: A ?? g?.width,
            height: ee ?? g?.height,
            className: S(`recharts-wrapper`, r),
            style: dk(
              { position: `relative`, cursor: `default`, width: A, height: ee },
              g,
            ),
            onClick: M,
            onContextMenu: oe,
            onDoubleClick: se,
            onFocus: ie,
            onKeyDown: ae,
            onMouseDown: ce,
            onMouseEnter: te,
            onMouseLeave: ne,
            onMouseMove: re,
            onMouseUp: ue,
            onTouchEnd: fe,
            onTouchMove: de,
            onTouchStart: N,
            ref: j,
          },
          y.createElement(gk, null),
          n,
        ),
      ),
    );
  }),
  wk = [
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
function Tk(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ek(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]);
  }
  return i;
}
function Ek(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Dk = (0, y.forwardRef)((e, t) => {
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
    d = O(Tk(e, wk));
  return c
    ? y.createElement(
        y.Fragment,
        null,
        y.createElement(gc, { width: n, height: r }),
        y.createElement(ck, { otherAttributes: d, title: l, desc: u }, a),
      )
    : y.createElement(
        Ck,
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
        y.createElement(
          ck,
          { otherAttributes: d, title: l, desc: u, ref: t },
          y.createElement(VE, null, a),
        ),
      );
});
function Ok() {
  return (
    (Ok = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ok.apply(null, arguments)
  );
}
var kk = {
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
  Ak = (0, y.forwardRef)(function (e, t) {
    var n = xl(e.categoricalChartProps, kk),
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
    return y.createElement(
      QO,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      y.createElement(gE, { chartData: s.data }),
      y.createElement($O, { layout: n.layout, margin: n.margin }),
      y.createElement(ek, {
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
      y.createElement(Dk, Ok({}, n, { ref: t })),
    );
  }),
  jk = [`axis`],
  Mk = (0, y.forwardRef)((e, t) =>
    y.createElement(Ak, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: jk,
      tooltipPayloadSearcher: Sx,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  Nk = n(m()),
  Pk = class e {
    m_steamInterface;
    GetPromotionTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      this.m_steamInterface = v(new _(t.WEBAPI_BASE_URL));
    }
  };
function Fk() {
  return Pk.Get().GetPromotionTransport().GetServiceTransport();
}
function Ik(e) {
  let t = Fk(),
    n = y.useContext(Rk);
  return f(zk(n, t, e));
}
function Lk(e) {
  return p.getQueryData([`StoreItemCountryRestriction`, h(e)]);
}
var Rk = y.createContext({
  loadStoreItemCountryRestriction: async (e, t) => await Vk(t).load(e),
});
function zk(e, t, n) {
  return {
    queryKey: [`StoreItemCountryRestriction`, h(n)],
    queryFn: () => e.loadStoreItemCountryRestriction(n, t),
    enabled: !!n,
  };
}
var Bk;
function Vk(e) {
  return (
    (Bk ||= new Nk.default(
      async (t) => {
        let n = a.Init(s);
        n.Body().set_ids(t.map((e) => u.fromObject(e)));
        let r = await o.GetCountryRestrictions(e, n);
        if (!r.BSuccess())
          throw `Failed to call store Item Country Restriction with details: ${r.GetErrorMessage()}`;
        let i = new Map();
        return (
          r
            .Body()
            .results()
            .forEach((e) => {
              let t = e.toObject();
              i.set(h(t.id), t);
            }),
          t.map((e) => i.get(h(e)) ?? null)
        );
      },
      { maxBatchSize: 100, cache: !1 },
    )),
    Bk
  );
}
function Hk(e, t) {
  let n = new Date(e * 1e3),
    r = t ? new Date(t * 1e3) : new Date(n);
  t || r.setDate(n.getDate() + 6);
  let i = n.toLocaleString(`en-US`, { month: `short` }),
    a = n.getDate(),
    o = r.toLocaleString(`en-US`, { month: `short` }),
    s = r.getDate();
  return i === o ? `${i} ${a} - ${s}` : `${i} ${a} - ${o} ${s}`;
}
function Uk(e) {
  let t = Wk(e);
  return t.endsWith(`M`) || t.endsWith(`K`)
    ? `$${t}`
    : new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: `USD`,
      }).format(Number(t));
}
function Wk(e) {
  let t;
  return (
    (t =
      Math.abs(e) >= 1e6
        ? (e / 1e6).toFixed(1) + `M`
        : Math.abs(e) >= 1e3
          ? (e / 1e3).toFixed(1) + `K`
          : e.toFixed(2)),
    t
  );
}
var Gk = `_7FQdtBvoXrk-`,
  Kk = `liWV2kXLNXs-`,
  qk = `_9GZqUtz3ZYo-`,
  Jk = `YwlJRL8zo70-`,
  Yk = `NPZ9l-DM5gY-`,
  Xk = `WLpp1N1Ds-o-`,
  Zk = `cvVmT5yJexA-`,
  Qk = `W1xCyDqwgmQ-`,
  $k = `K0zODM-isrk-`,
  eA = `KeyfsZAhLmk-`,
  tA = `H5V46OnRrg0-`,
  nA = `amUB9WH9CcY-`,
  rA = `rnzT6bsO-Xo-`,
  iA = `wrTT8gAV7a8-`,
  aA = `OMu8YgzmezU-`,
  oA = `OkBJ9lnHzW4-`,
  sA = `BbxClrMpUdY-`,
  cA = `awoPIVALX4Y-`,
  lA = `OKv0fNZ2-3M-`,
  uA = `V8TussbOeig-`,
  dA = `kOrWeMzNg6w-`,
  fA = `ry4i3BWpvYc-`,
  pA = `TkQowTDAabk-`;
export {
  mC as $,
  Ak as A,
  Cr as At,
  xT as B,
  Bt,
  uA as C,
  cc as Ct,
  Lk as D,
  fs as Dt,
  Uk as E,
  ns as Et,
  LE as F,
  Un as Ft,
  Pw as G,
  ce as Gt,
  yT as H,
  Ht,
  RE as I,
  fn as It,
  bw as J,
  ee as Jt,
  Ew as K,
  re as Kt,
  kE as L,
  mn as Lt,
  rO as M,
  R as Mt,
  KD as N,
  I as Nt,
  Ik as O,
  V as Ot,
  HE as P,
  L as Pt,
  eC as Q,
  DE as R,
  dn as Rt,
  oA as S,
  lc as St,
  Wk as T,
  us as Tt,
  Zw as U,
  P as Ut,
  bT as V,
  F as Vt,
  Xw as W,
  ue as Wt,
  EC as X,
  k as Xt,
  GC as Y,
  O as Yt,
  jC as Z,
  S as Zt,
  Zk as _,
  U as _t,
  Jk as a,
  xy as at,
  aA as b,
  fc as bt,
  cA as c,
  k_ as ct,
  lA as d,
  iu as dt,
  eS as et,
  eA as f,
  xl as ft,
  Xk as g,
  vc as gt,
  Qk as h,
  yc as ht,
  tA as i,
  Sy as it,
  mO as j,
  xr as jt,
  Mk as k,
  qo as kt,
  rA as l,
  pg as lt,
  dA as m,
  Uc as mt,
  Yk as n,
  Nb as nt,
  fA as o,
  L_ as ot,
  pA as p,
  rl as pt,
  Sw as q,
  A as qt,
  $k as r,
  Qv as rt,
  qk as s,
  E_ as st,
  Gk as t,
  Sx as tt,
  Kk as u,
  au as ut,
  iA as v,
  pc as vt,
  Hk as w,
  Is as wt,
  nA as x,
  mc as xt,
  sA as y,
  hc as yt,
  XT as z,
  qt as zt,
};
