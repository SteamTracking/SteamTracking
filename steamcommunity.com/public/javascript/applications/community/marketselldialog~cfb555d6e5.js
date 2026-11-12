/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./chunk~f025431ab0.js";
import { At as r, E as i, Ft as a, T as o } from "./chunk~01cfc309bf.js";
var s = e(a()),
  c = e(i());
function l(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = l(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function u() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = l(e)) && (r && (r += ` `), (r += t));
  return r;
}
var d =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function f(e) {
  return typeof e == `string` && d.includes(e);
}
var p =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function m(e) {
  return typeof e == `string` && p.includes(e);
}
function h(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function g(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return m(t) || h(t);
  });
  return Object.fromEntries(t);
}
function _(e) {
  if (e == null) return null;
  if (
    (0, s.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return g(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? g(e) : null;
}
function v(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return m(t) || h(t) || f(t);
  });
  return Object.fromEntries(t);
}
function y(e) {
  return e == null
    ? null
    : (0, s.isValidElement)(e)
      ? v(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? v(e)
        : null;
}
var b = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function x() {
  return (
    (x = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    x.apply(null, arguments)
  );
}
function S(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = C(e, t);
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
function C(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var w = (0, s.forwardRef)((e, t) => {
    var {
        children: n,
        width: r,
        height: i,
        viewBox: a,
        className: o,
        style: c,
        title: l,
        desc: d,
      } = e,
      f = S(e, b),
      p = a || { width: r, height: i, x: 0, y: 0 },
      m = u(`recharts-surface`, o);
    return s.createElement(
      `svg`,
      x({}, v(f), {
        className: m,
        width: r,
        height: i,
        style: c,
        viewBox: `${p.x} ${p.y} ${p.width} ${p.height}`,
        ref: t,
      }),
      s.createElement(`title`, null, l),
      s.createElement(`desc`, null, d),
      n,
    );
  }),
  T = [`children`, `className`];
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    E.apply(null, arguments)
  );
}
function D(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = O(e, t);
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
function O(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var k = s.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = D(e, T),
      a = u(`recharts-layer`, r);
    return s.createElement(`g`, E({ className: a }, v(i), { ref: t }), n);
  }),
  ee = (0, s.createContext)(null);
function A(e) {
  return function () {
    return e;
  };
}
var j = Math.cos,
  M = Math.sin,
  te = Math.sqrt,
  ne = Math.PI;
ne / 2;
var re = 2 * ne,
  ie = Math.PI,
  ae = 2 * ie,
  oe = 1e-6,
  se = ae - oe;
function ce(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function le(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return ce;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var ue = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? ce : le(e)));
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
    else if (d > oe) {
      if (!(Math.abs(u * s - c * l) > oe) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((ie - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > oe && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > oe || Math.abs(this._y1 - l) > oe) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % ae) + ae),
        d > se
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > oe &&
            this._append`A${n},${n},0,${+(d >= ie)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
ue.prototype;
function de(e) {
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
    () => new ue(t)
  );
}
Array.prototype.slice;
function fe(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function pe(e) {
  this._context = e;
}
pe.prototype = {
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
function me(e) {
  return new pe(e);
}
function he(e) {
  return e[0];
}
function ge(e) {
  return e[1];
}
function _e(e, t) {
  var n = A(!0),
    r = null,
    i = me,
    a = null,
    o = de(s);
  ((e = typeof e == `function` ? e : e === void 0 ? he : A(e)),
    (t = typeof t == `function` ? t : t === void 0 ? ge : A(t)));
  function s(s) {
    var c,
      l = (s = fe(s)).length,
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
        ? ((e = typeof t == `function` ? t : A(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : A(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : A(!!e)), s)
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
function ve(e, t, n) {
  var r = null,
    i = A(!0),
    a = null,
    o = me,
    s = null,
    c = de(l);
  ((e = typeof e == `function` ? e : e === void 0 ? he : A(+e)),
    (t = typeof t == `function` ? t : A(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? ge : A(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = fe(l)).length,
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
    return _e().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : A(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : A(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : A(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : A(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : A(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : A(+e)), l)
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
        ? ((i = typeof e == `function` ? e : A(!!e)), l)
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
var ye = class {
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
function be(e) {
  return new ye(e, !0);
}
function xe(e) {
  return new ye(e, !1);
}
var Se = {
    draw(e, t) {
      let n = te(t / ne);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, re));
    },
  },
  Ce = {
    draw(e, t) {
      let n = te(t / 5) / 2;
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
  we = te(1 / 3),
  Te = we * 2,
  Ee = {
    draw(e, t) {
      let n = te(t / Te),
        r = n * we;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  De = {
    draw(e, t) {
      let n = te(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Oe = 0.8908130915292852,
  ke = M(ne / 10) / M((7 * ne) / 10),
  Ae = M(re / 10) * ke,
  je = -j(re / 10) * ke,
  Me = {
    draw(e, t) {
      let n = te(t * Oe),
        r = Ae * n,
        i = je * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (re * t) / 5,
          o = j(a),
          s = M(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  Ne = te(3),
  Pe = {
    draw(e, t) {
      let n = -te(t / (Ne * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-Ne * n, -n),
        e.lineTo(Ne * n, -n),
        e.closePath());
    },
  },
  Fe = -0.5,
  Ie = te(3) / 2,
  Le = 1 / te(12),
  Re = (Le / 2 + 1) * 3,
  ze = {
    draw(e, t) {
      let n = te(t / Re),
        r = n / 2,
        i = n * Le,
        a = r,
        o = n * Le + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(Fe * r - Ie * i, Ie * r + Fe * i),
        e.lineTo(Fe * a - Ie * o, Ie * a + Fe * o),
        e.lineTo(Fe * s - Ie * c, Ie * s + Fe * c),
        e.lineTo(Fe * r + Ie * i, Fe * i - Ie * r),
        e.lineTo(Fe * a + Ie * o, Fe * o - Ie * a),
        e.lineTo(Fe * s + Ie * c, Fe * c - Ie * s),
        e.closePath());
    },
  };
function Be(e, t) {
  let n = null,
    r = de(i);
  ((e = typeof e == `function` ? e : A(e || Se)),
    (t = typeof t == `function` ? t : A(t === void 0 ? 64 : +t)));
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
        ? ((e = typeof t == `function` ? t : A(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : A(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function Ve() {}
function He(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function Ue(e) {
  this._context = e;
}
Ue.prototype = {
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
        He(this, this._x1, this._y1);
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
        He(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function We(e) {
  return new Ue(e);
}
function Ge(e) {
  this._context = e;
}
Ge.prototype = {
  areaStart: Ve,
  areaEnd: Ve,
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
        He(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Ke(e) {
  return new Ge(e);
}
function qe(e) {
  this._context = e;
}
qe.prototype = {
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
        He(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Je(e) {
  return new qe(e);
}
function Ye(e) {
  this._context = e;
}
Ye.prototype = {
  areaStart: Ve,
  areaEnd: Ve,
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
function Xe(e) {
  return new Ye(e);
}
function Ze(e) {
  return e < 0 ? -1 : 1;
}
function Qe(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (Ze(a) + Ze(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function $e(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function et(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
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
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        et(this, this._t0, $e(this, this._t0));
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
          ((this._point = 3), et(this, $e(this, (n = Qe(this, e, t))), n));
          break;
        default:
          et(this, this._t0, (n = Qe(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function nt(e) {
  this._context = new rt(e);
}
(nt.prototype = Object.create(tt.prototype)).point = function (e, t) {
  tt.prototype.point.call(this, t, e);
};
function rt(e) {
  this._context = e;
}
rt.prototype = {
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
function it(e) {
  return new tt(e);
}
function at(e) {
  return new nt(e);
}
function ot(e) {
  this._context = e;
}
ot.prototype = {
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
        for (var r = st(e), i = st(t), a = 0, o = 1; o < n; ++a, ++o)
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
function st(e) {
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
function ct(e) {
  return new ot(e);
}
function lt(e, t) {
  ((this._context = e), (this._t = t));
}
lt.prototype = {
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
function ut(e) {
  return new lt(e, 0.5);
}
function dt(e) {
  return new lt(e, 0);
}
function ft(e) {
  return new lt(e, 1);
}
function pt(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function mt(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function ht(e, t) {
  return e[t];
}
function gt(e) {
  let t = [];
  return ((t.key = e), t);
}
function _t() {
  var e = A([]),
    t = mt,
    n = pt,
    r = ht;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), gt),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = fe(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : A(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : A(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? mt : typeof e == `function` ? e : A(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? pt), i) : n;
    }),
    i
  );
}
function vt(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    pt(e, t);
  }
}
function yt(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    pt(e, t);
  }
}
function bt(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), pt(e, t));
  }
}
var xt = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  St = n((e) => {
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
  Ct = n((e) => {
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
  wt = n((e) => {
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
  Tt = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = xt(),
      n = St(),
      r = Ct(),
      i = wt();
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
  Et = e(
    n((e, t) => {
      t.exports = Tt().get;
    })(),
  ),
  Dt = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Ot = (e) => typeof e == `number` && e != +e,
  kt = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  N = (e) => (typeof e == `number` || e instanceof Number) && !Ot(e),
  At = (e) => N(e) || typeof e == `string`,
  jt = 0,
  Mt = (e) => {
    var t = ++jt;
    return `${e || ``}${t}`;
  },
  Nt = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!N(e) && typeof e != `string`) return n;
    var i;
    if (kt(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (Ot(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  Pt = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function Ft(e, t, n) {
  return N(e) && N(t) ? e + n * (t - e) : t;
}
function It(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Et.default)(e, t)) === n,
    );
}
var P = (e) => e == null,
  Lt = (e) => (P(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  Rt = [`type`, `size`, `sizeType`];
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zt.apply(null, arguments)
  );
}
function Bt(e, t) {
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
function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bt(Object(n), !0).forEach(function (t) {
          Ht(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ht(e, t, n) {
  return (
    (t = Ut(t)) in e
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
function Ut(e) {
  var t = Wt(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wt(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Gt(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Kt(e, t);
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
function Kt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var qt = {
    symbolCircle: Se,
    symbolCross: Ce,
    symbolDiamond: Ee,
    symbolSquare: De,
    symbolStar: Me,
    symbolTriangle: Pe,
    symbolWye: ze,
  },
  Jt = Math.PI / 180,
  Yt = (e) => qt[`symbol${Lt(e)}`] || Se,
  Xt = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * Jt;
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
  Zt = (e, t) => {
    qt[`symbol${Lt(e)}`] = t;
  },
  Qt = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = Vt(Vt({}, Gt(e, Rt)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = Yt(a),
          t = Be()
            .type(e)
            .size(Xt(n, r, a))();
        if (t !== null) return t;
      },
      { className: c, cx: l, cy: d } = i,
      f = v(i);
    return l === +l && d === +d && n === +n
      ? s.createElement(
          `path`,
          zt({}, f, {
            className: u(`recharts-symbols`, c),
            transform: `translate(${l}, ${d})`,
            d: o(),
          }),
        )
      : null;
  };
Qt.registerSymbol = Zt;
var $t = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, s.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        f(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  en = (e, t, n) => (r) => (e(t, n, r), null),
  tn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        f(i) && typeof a == `function` && ((r ||= {}), (r[i] = en(a, t, n)));
      }),
      r
    );
  },
  nn = n((e) => {
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
  rn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  an = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  on = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = an();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  sn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  cn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = on(),
      n = sn();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  ln = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Tt();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  un = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  dn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  fn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  pn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mn(),
      n = un(),
      r = dn(),
      i = fn();
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
  mn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = pn();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  hn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  gn = n((e) => {
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
  _n = n((e) => {
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
  vn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  yn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hn(),
      n = gn(),
      r = _n(),
      i = dn(),
      a = vn();
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
  bn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = yn();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  xn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mn(),
      n = bn();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  Sn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = yn(),
      n = _n();
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
  Cn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Sn();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  wn = n((e) => {
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
  Tn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gn();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  En = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = St(),
      n = wn(),
      r = Tn(),
      i = wt();
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
  Dn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mn(),
      n = Ct(),
      r = Cn(),
      i = Tt(),
      a = En();
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
  On = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = rn(),
      n = ln(),
      r = xn(),
      i = Dn();
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
  kn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = nn(),
      n = rn(),
      r = cn(),
      i = On();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  An = e(
    n((e, t) => {
      t.exports = kn().uniqBy;
    })(),
  );
function jn(e, t, n) {
  return t === !0
    ? (0, An.default)(e, n)
    : typeof t == `function`
      ? (0, An.default)(e, t)
      : e;
}
var Mn = n((e) => {
    var t = a(),
      n = o();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      s = n.useSyncExternalStore,
      c = t.useRef,
      l = t.useEffect,
      u = t.useMemo,
      d = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
      var o = c(null);
      if (o.current === null) {
        var f = { hasValue: !1, value: null };
        o.current = f;
      } else f = o.current;
      o = u(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), a !== void 0 && f.hasValue)) {
                var t = f.value;
                if (a(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), i(s, e))) return t;
            var n = r(e);
            return a !== void 0 && a(t, n) ? ((s = e), t) : ((s = e), (c = n));
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
        [t, n, r, a],
      );
      var p = s(e, o[0], o[1]);
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
  Nn = n((e, t) => {
    t.exports = Mn();
  })(),
  Pn = (0, s.createContext)(null),
  Fn = (e) => e,
  F = () => {
    var e = (0, s.useContext)(Pn);
    return e ? e.store.dispatch : Fn;
  },
  In = () => {},
  Ln = () => In,
  Rn = (e, t) => e === t;
function I(e) {
  var t = (0, s.useContext)(Pn);
  return (0, Nn.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : Ln,
    t ? t.store.getState : In,
    t ? t.store.getState : In,
    t ? e : In,
    Rn,
  );
}
function zn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Bn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Vn(
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
var Hn = (e) => (Array.isArray(e) ? e : [e]);
function Un(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Vn(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Wn(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Gn = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Kn = typeof WeakRef < `u` ? WeakRef : Gn,
  qn = 0,
  Jn = 1;
function Yn() {
  return { s: qn, v: void 0, o: null, p: null };
}
function Xn(e, t = {}) {
  let n = Yn(),
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
        r === void 0 ? ((t = Yn()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Yn()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Jn) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Kn(c)
            : c));
    }
    return ((s.s = Jn), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Yn()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Zn(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        zn(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Xn,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Hn(c),
        p = Hn(u),
        m = Un(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Wn(m, arguments);
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
var L = Zn(Xn),
  Qn = Object.assign(
    (e, t = L) => {
      Bn(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Qn },
  ),
  $n = n((e) => {
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
  er = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  tr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er(),
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
  nr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = $n(),
      n = tr(),
      r = wt();
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
  rr = n((e) => {
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
  ir = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = wn(),
      n = on(),
      r = un(),
      i = fn();
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
  ar = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = nr(),
      n = rr(),
      r = ir();
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
  or = e(
    n((e, t) => {
      t.exports = ar().sortBy;
    })(),
  ),
  sr = (e) => e.legend.settings,
  cr = (e) => e.legend.size;
L([(e) => e.legend.payload, sr], (e, t) => {
  var { itemSorter: n } = t,
    r = e.flat(1);
  return n ? (0, or.default)(r, n) : r;
});
var lr = 1;
function ur() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, s.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, s.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > lr ||
            Math.abs(i.left - t.left) > lr ||
            Math.abs(i.top - t.top) > lr ||
            Math.abs(i.width - t.width) > lr) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function R(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var dr = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  fr = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  pr = {
    INIT: `@@redux/INIT${fr()}`,
    REPLACE: `@@redux/REPLACE${fr()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${fr()}`,
  };
function mr(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function hr(e, t, n) {
  if (typeof e != `function`) throw Error(R(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(R(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(R(1));
    return n(hr)(e, t);
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
    if (c) throw Error(R(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(R(4));
    if (c) throw Error(R(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(R(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!mr(e)) throw Error(R(7));
    if (e.type === void 0) throw Error(R(8));
    if (typeof e.type != `string`) throw Error(R(17));
    if (c) throw Error(R(9));
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
    if (typeof e != `function`) throw Error(R(10));
    ((r = e), f({ type: pr.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(R(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [dr]() {
        return this;
      },
    };
  }
  return (
    f({ type: pr.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [dr]: m }
  );
}
function gr(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: pr.INIT }) === void 0) throw Error(R(12));
    if (n(void 0, { type: pr.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(R(13));
  });
}
function _r(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    gr(n);
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
      if (u === void 0) throw (t && t.type, Error(R(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function vr(...e) {
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
function yr(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(R(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = vr(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function br(e) {
  return mr(e) && `type` in e && typeof e.type == `string`;
}
var xr = Symbol.for(`immer-nothing`),
  Sr = Symbol.for(`immer-draftable`),
  Cr = Symbol.for(`immer-state`);
function wr(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Tr = Object.getPrototypeOf;
function Er(e) {
  return !!e && !!e[Cr];
}
function Dr(e) {
  return e
    ? Ar(e) ||
        Array.isArray(e) ||
        !!e[Sr] ||
        !!e.constructor?.[Sr] ||
        Ir(e) ||
        Lr(e)
    : !1;
}
var Or = Object.prototype.constructor.toString(),
  kr = new WeakMap();
function Ar(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = kr.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), kr.set(n, r)), r === Or
  );
}
function jr(e, t, n = !0) {
  Mr(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Mr(e) {
  let t = e[Cr];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ir(e) ? 2 : Lr(e) ? 3 : 0;
}
function Nr(e, t) {
  return Mr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pr(e, t, n) {
  let r = Mr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Fr(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Ir(e) {
  return e instanceof Map;
}
function Lr(e) {
  return e instanceof Set;
}
function Rr(e) {
  return e.copy_ || e.base_;
}
function zr(e, t) {
  if (Ir(e)) return new Map(e);
  if (Lr(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = Ar(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[Cr];
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
    return Object.create(Tr(e), t);
  }
  {
    let t = Tr(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function Br(e, t = !1) {
  return (
    Ur(e) ||
      Er(e) ||
      !Dr(e) ||
      (Mr(e) > 1 &&
        Object.defineProperties(e, { set: Hr, add: Hr, clear: Hr, delete: Hr }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => Br(e, !0))),
    e
  );
}
function Vr() {
  wr(2);
}
var Hr = { value: Vr };
function Ur(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var Wr = {};
function Gr(e) {
  let t = Wr[e];
  return (t || wr(0, e), t);
}
var Kr;
function qr() {
  return Kr;
}
function Jr(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Yr(e, t) {
  t &&
    (Gr(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Xr(e) {
  (Zr(e), e.drafts_.forEach($r), (e.drafts_ = null));
}
function Zr(e) {
  e === Kr && (Kr = e.parent_);
}
function Qr(e) {
  return (Kr = Jr(Kr, e));
}
function $r(e) {
  let t = e[Cr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ei(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Cr].modified_ && (Xr(t), wr(4)),
        Dr(e) && ((e = ti(t, e)), t.parent_ || ri(t, e)),
        t.patches_ &&
          Gr(`Patches`).generateReplacementPatches_(
            n[Cr].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = ti(t, n, [])),
    Xr(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === xr ? void 0 : e
  );
}
function ti(e, t, n) {
  if (Ur(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[Cr];
  if (!i) return (jr(t, (r, a) => ni(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (ri(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      jr(a, (r, a) => ni(e, i, t, r, a, n, o), r),
      ri(e, t, !1),
      n &&
        e.patches_ &&
        Gr(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function ni(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = Ur(i);
  if (!s || o) {
    if (Er(i)) {
      let o = ti(
        e,
        i,
        a && t && t.type_ !== 3 && !Nr(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((Pr(n, r, o), Er(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (Dr(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (ti(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (Ir(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          ri(e, i));
    }
  }
}
function ri(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Br(t, n);
}
function ii(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : qr(),
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
    a = ai;
  n && ((i = [r]), (a = oi));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var ai = {
    get(e, t) {
      if (t === Cr) return e;
      let n = Rr(e);
      if (!Nr(n, t)) return ci(e, n, t);
      let r = n[t];
      return e.finalized_ || !Dr(r)
        ? r
        : r === si(e.base_, t)
          ? (di(e), (e.copy_[t] = pi(r, e)))
          : r;
    },
    has(e, t) {
      return t in Rr(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Rr(e));
    },
    set(e, t, n) {
      let r = li(Rr(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = si(Rr(e), t),
          i = r?.[Cr];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (Fr(n, r) && (n !== void 0 || Nr(e.base_, t))) return !0;
        (di(e), ui(e));
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
        si(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), di(e), ui(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Rr(e),
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
      wr(11);
    },
    getPrototypeOf(e) {
      return Tr(e.base_);
    },
    setPrototypeOf() {
      wr(12);
    },
  },
  oi = {};
(jr(ai, (e, t) => {
  oi[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (oi.deleteProperty = function (e, t) {
    return oi.set.call(this, e, t, void 0);
  }),
  (oi.set = function (e, t, n) {
    return ai.set.call(this, e[0], t, n, e[0]);
  }));
function si(e, t) {
  let n = e[Cr];
  return (n ? Rr(n) : e)[t];
}
function ci(e, t, n) {
  let r = li(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function li(e, t) {
  if (!(t in e)) return;
  let n = Tr(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Tr(n);
  }
}
function ui(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ui(e.parent_));
}
function di(e) {
  e.copy_ ||= zr(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var fi = class {
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
        (typeof t != `function` && wr(6),
          n !== void 0 && typeof n != `function` && wr(7));
        let r;
        if (Dr(e)) {
          let i = Qr(this),
            a = pi(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Xr(i) : Zr(i);
          }
          return (Yr(i, n), ei(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === xr && (r = void 0),
            this.autoFreeze_ && Br(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (Gr(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        wr(1, e);
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
    (Dr(e) || wr(8), Er(e) && (e = mi(e)));
    let t = Qr(this),
      n = pi(e, void 0);
    return ((n[Cr].isManual_ = !0), Zr(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[Cr];
    (n && n.isManual_) || wr(9);
    let { scope_: r } = n;
    return (Yr(r, t), ei(void 0, r));
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
    let r = Gr(`Patches`).applyPatches_;
    return Er(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function pi(e, t) {
  let n = Ir(e)
    ? Gr(`MapSet`).proxyMap_(e, t)
    : Lr(e)
      ? Gr(`MapSet`).proxySet_(e, t)
      : ii(e, t);
  return ((t ? t.scope_ : qr()).drafts_.push(n), n);
}
function mi(e) {
  return (Er(e) || wr(10, e), hi(e));
}
function hi(e) {
  if (!Dr(e) || Ur(e)) return e;
  let t = e[Cr],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = zr(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = zr(e, !0);
  return (
    jr(
      n,
      (e, t) => {
        Pr(n, e, hi(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var gi = new fi(),
  _i = gi.produce,
  vi = gi.setUseStrictIteration.bind(gi);
function yi(e) {
  return e;
}
function bi(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function xi(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Si(
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
var Ci = (e) => (Array.isArray(e) ? e : [e]);
function wi(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Si(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Ti(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Ei = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Di = typeof WeakRef < `u` ? WeakRef : Ei,
  Oi = 0,
  ki = 1;
function Ai() {
  return { s: Oi, v: void 0, o: null, p: null };
}
function ji(e, t = {}) {
  let n = Ai(),
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
        r === void 0 ? ((t = Ai()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Ai()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === ki) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Di(c)
            : c));
    }
    return ((s.s = ki), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Ai()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Mi(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        bi(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = ji,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Ci(c),
        p = Ci(u),
        m = wi(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Ti(m, arguments);
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
var Ni = Mi(ji),
  Pi = Object.assign(
    (e, t = Ni) => {
      xi(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Pi },
  );
function Fi(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var Ii = Fi(),
  Li = Fi;
((...e) => {
  let t = Mi(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(Er(e) ? mi(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(ji);
var Ri =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? vr
            : vr.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var zi = (e) => e && typeof e.match == `function`;
function Bi(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(ao(0));
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
    (n.match = (t) => br(t) && t.type === e),
    n
  );
}
var Vi = class e extends Array {
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
function Hi(e) {
  return Dr(e) ? _i(e, () => {}) : e;
}
function Ui(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Wi(e) {
  return typeof e == `boolean`;
}
var Gi = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new Vi();
      return (t && (Wi(t) ? a.push(Ii) : a.push(Li(t.extraArgument))), a);
    },
  Ki = `RTK_autoBatch`,
  qi = () => (e) => ({ payload: e, meta: { [Ki]: !0 } }),
  Ji = (e) => (t) => {
    setTimeout(t, e);
  },
  Yi =
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
                : Ji(10)
              : e.type === `callback`
                ? e.queueNotification
                : Ji(e.timeout),
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
              (i = !e?.meta?.[Ki]),
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
  Xi = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new Vi(e);
      return (n && r.push(Yi(typeof n == `object` ? n : void 0)), r);
    };
function Zi(e) {
  let t = Gi(),
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
  else if (mr(n)) c = _r(n);
  else throw Error(ao(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = vr;
  i && (u = Ri({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Xi(yr(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return hr(c, o, p);
}
function Qi(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(ao(28));
        if (r in t) throw Error(ao(29));
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
vi(!1);
function $i(e) {
  return typeof e == `function`;
}
function ea(e, t) {
  let [n, r, i] = Qi(t),
    a;
  if ($i(e)) a = () => Hi(e());
  else {
    let t = Hi(e);
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
          if (Er(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (Dr(e)) return _i(e, (e) => n(e, t));
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
var ta = (e, t) => (zi(e) ? e.match(t) : e(t));
function na(...e) {
  return (t) => e.some((e) => ta(e, t));
}
var ra = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  ia = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += ra[(Math.random() * 64) | 0];
    return t;
  },
  aa = [`name`, `message`, `stack`, `code`],
  oa = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  sa = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  ca = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of aa) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  la = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = Bi(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = Bi(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = Bi(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || ca)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : ia(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(la)
            : o.addEventListener(`abort`, () => m(la), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((da(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new oa(e, t),
                    fulfillWithValue: (e, t) => new sa(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof oa) throw t;
                  return t instanceof sa
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof oa ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(ua);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: na(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function ua(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function da(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var fa = Symbol.for(`rtk-slice-createasyncthunk`),
  pa = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(pa || {});
function ma(e, t) {
  return `${e}/${t}`;
}
function ha({ creators: e } = {}) {
  let t = e?.asyncThunk?.[fa];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(ao(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(va()) : e.reducers) || {},
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
          if (!n) throw Error(ao(12));
          if (n in o.sliceCaseReducersByType) throw Error(ao(13));
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
          type: ma(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      ba(a) ? Sa(o, a, s, t) : ya(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Qi(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return ea(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = Ui(d, r, m)), i);
      }
      function i(t = l) {
        return Ui(
          Ui(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = ga(a, t, () => Ui(d, t, m), n);
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
function ga(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var _a = ha();
function va() {
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
function ya({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !xa(r)) throw Error(ao(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Bi(e, o) : Bi(e));
}
function ba(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function xa(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function Sa({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(ao(18));
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
      fulfilled: o || Ca,
      pending: s || Ca,
      rejected: c || Ca,
      settled: l || Ca,
    }));
}
function Ca() {}
var wa = `task`,
  Ta = `listener`,
  Ea = `completed`,
  Da = `cancelled`,
  Oa = `task-${Da}`,
  ka = `task-${Ea}`,
  Aa = `${Ta}-${Da}`,
  ja = `${Ta}-${Ea}`,
  Ma = class {
    constructor(e) {
      ((this.code = e), (this.message = `${wa} ${Da} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  Na = (e, t) => {
    if (typeof e != `function`) throw TypeError(ao(32));
  },
  Pa = () => {},
  Fa = (e, t = Pa) => (e.catch(t), e),
  Ia = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  La = (e, t) => {
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
  Ra = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new Ma(t);
    }
  };
function za(e, t) {
  let n = Pa;
  return new Promise((r, i) => {
    let a = () => i(new Ma(e.reason));
    e.aborted ? a() : ((n = Ia(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Pa;
  });
}
var Ba = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Ma ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Va = (e) => (t) => Fa(za(e, t).then((t) => (Ra(e), t))),
  Ha = (e) => {
    let t = Va(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: Ua } = Object,
  Wa = {},
  Ga = `listenerMiddleware`,
  Ka = (e, t) => {
    let n = (t) => Ia(e, () => La(t, e.reason));
    return (r, i) => {
      Na(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = Ba(
        async () => {
          (Ra(e), Ra(a.signal));
          let t = await r({
            pause: Va(a.signal),
            delay: Ha(a.signal),
            signal: a.signal,
          });
          return (Ra(a.signal), t);
        },
        () => La(a, ka),
      );
      return (
        i?.autoJoin && t.push(o.catch(Pa)),
        {
          result: Va(e)(o),
          cancel() {
            La(a, Oa);
          },
        }
      );
    };
  },
  qa = (e, t) => {
    let n = async (n, r) => {
      Ra(t);
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
        let e = await za(t, Promise.race(a));
        return (Ra(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => Fa(n(e, t));
  },
  Ja = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = Bi(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(ao(21));
    return (Na(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Ya = Ua(
    (e) => {
      let { type: t, predicate: n, effect: r } = Ja(e);
      return {
        id: ia(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(ao(22));
        },
      };
    },
    { withTypes: () => Ya },
  ),
  Xa = (e, t) => {
    let { type: n, effect: r, predicate: i } = Ja(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  Za = (e) => {
    e.pending.forEach((e) => {
      La(e, Aa);
    });
  },
  Qa = (e, t) => () => {
    for (let e of t.keys()) Za(e);
    e.clear();
  },
  $a = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  eo = Ua(Bi(`${Ga}/add`), { withTypes: () => eo }),
  to = Bi(`${Ga}/removeAll`),
  no = Ua(Bi(`${Ga}/remove`), { withTypes: () => no }),
  ro = (...e) => {
    console.error(`${Ga}/error`, ...e);
  },
  io = (e = {}) => {
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
      { extra: a, onError: o = ro } = e;
    Na(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && Za(e));
        }
      ),
      c = (e) => {
        let n = Xa(t, e) ?? Ya(e);
        return s(n);
      };
    Ua(c, { withTypes: () => c });
    let l = (e) => {
      let n = Xa(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && Za(n)), !!n);
    };
    Ua(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = qa(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                Ua({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: Ha(u.signal),
                  pause: Va(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Ka(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (La(e, Aa), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (La(u, Aa), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Ra(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Ma || $a(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), La(u, ja), i(e), e.pending.delete(u));
        }
      },
      d = Qa(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!br(r)) return n(r);
        if (eo.match(r)) return c(r.payload);
        if (to.match(r)) {
          d();
          return;
        }
        if (no.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === Wa) throw Error(ao(23));
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
                ((s = !1), $a(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = Wa;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function ao(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var oo = _a({
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
  { setMargin: so, setLayout: co, setChartSize: lo, setScale: uo } = oo.actions,
  fo = oo.reducer;
function po(e, t) {
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
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? po(Object(n), !0).forEach(function (t) {
          ho(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : po(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ho(e, t, n) {
  return (
    (t = go(t)) in e
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
function go(e) {
  var t = _o(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _o(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vo = Math.PI / 180,
  yo = (e) => (e * 180) / Math.PI,
  z = (e, t, n, r) => ({
    x: e + Math.cos(-vo * r) * n,
    y: t + Math.sin(-vo * r) * n,
  }),
  bo = function (e, t) {
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
  xo = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  So = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = xo({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: yo(c), angleInRadian: c }
    );
  },
  Co = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  wo = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  To = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = So({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = Co(t),
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
    return d ? mo(mo({}, t), {}, { radius: i, angle: wo(u, t) }) : null;
  };
function Eo(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function Do(e, t) {
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
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Do(Object(n), !0).forEach(function (t) {
          ko(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Do(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ko(e, t, n) {
  return (
    (t = Ao(t)) in e
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
function Ao(e) {
  var t = jo(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jo(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function B(e, t, n) {
  return P(e) || P(t)
    ? n
    : At(t)
      ? (0, Et.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var Mo = (e, t, n, r, i) => {
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
        if (Dt(l - c) !== Dt(u - l)) {
          var f = [];
          if (Dt(u - l) === Dt(i[1] - i[0])) {
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
  No = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        N(e[a])
      )
        return Oo(Oo({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        N(e[o])
      )
        return Oo(Oo({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  Po = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Fo = (e, t, n, r) => {
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
  Io = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? Dt(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !Ot(e.coordinate))
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
  Lo = 1e-4,
  Ro = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - Lo,
        a = Math.max(r[0], r[1]) + Lo,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  zo = (e, t) => {
    if (!t || t.length !== 2 || !N(t[0]) || !N(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!N(e[0]) || e[0] < n) && (i[0] = n),
      (!N(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  Bo = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = Ot(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: vt,
    none: pt,
    silhouette: yt,
    wiggle: bt,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = Ot(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  Vo = (e, t, n) => {
    var r = Bo[n];
    return _t()
      .keys(t)
      .value((e, t) => +B(e, t, 0))
      .order(mt)
      .offset(r)(e);
  };
function Ho(e) {
  return e == null ? void 0 : String(e);
}
function Uo(e) {
  var { axis: t, ticks: n, bandSize: r, entry: i, index: a, dataKey: o } = e;
  if (t.type === `category`) {
    if (!t.allowDuplicatedCategory && t.dataKey && !P(i[t.dataKey])) {
      var s = It(n, `value`, i[t.dataKey]);
      if (s) return s.coordinate + r / 2;
    }
    return n[a] ? n[a].coordinate + r / 2 : null;
  }
  var c = B(i, P(o) ? t.dataKey : o);
  return P(c) ? null : t.scale(c);
}
var Wo = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = B(a, t.dataKey, t.scale.domain()[o]);
    return P(s) ? null : t.scale(s) - i / 2 + r;
  },
  Go = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Ko = (e) => {
    var t = e.flat(2).filter(N);
    return [Math.min(...t), Math.max(...t)];
  },
  qo = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Jo = (e, t, n) => {
    if (e != null)
      return qo(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Ko(Eo(r, t, n));
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
  Yo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Xo = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Zo = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, or.default)(t, (e) => e.coordinate),
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
function Qo(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return Oo(Oo({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function $o(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function es(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? To({ x: e, y: t }, r)
      : null;
}
var ts = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return Oo(
          Oo(Oo({}, r), z(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return Oo(
        Oo(Oo({}, r), z(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  ns = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  rs = (e) => e.layout.width,
  is = (e) => e.layout.height,
  as = (e) => e.layout.scale,
  os = (e) => e.layout.margin,
  ss = L(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  cs = L(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  ls = `data-recharts-item-index`;
function us(e, t) {
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
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? us(Object(n), !0).forEach(function (t) {
          fs(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : us(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fs(e, t, n) {
  return (
    (t = ps(t)) in e
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
function ps(e) {
  var t = ms(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ms(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var hs = (e) => e.brush.height;
function gs(e) {
  return cs(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function _s(e) {
  return cs(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function vs(e) {
  return ss(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function ys(e) {
  return ss(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var V = L(
    [rs, is, os, hs, gs, _s, vs, ys, sr, cr],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ds(
          ds({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = No(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ds(
        ds({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  bs = L(V, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  xs = L(rs, is, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  Ss = (0, s.createContext)(null),
  Cs = () => (0, s.useContext)(Ss) != null,
  ws = (e) => e.brush,
  Ts = L([ws, V, os], (e, t, n) => ({
    height: e.height,
    x: N(e.x) ? e.x : t.left,
    y: N(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: N(e.width) ? e.width : t.width,
  })),
  Es = n((e) => {
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
          (s && c(), p());
        },
        u = null,
        d = () => {
          (u != null && clearTimeout(u),
            (u = setTimeout(() => {
              ((u = null), l());
            }, t)));
        },
        f = () => {
          u !== null && (clearTimeout(u), (u = null));
        },
        p = () => {
          (f(), (i = void 0), (a = null));
        },
        m = () => {
          c();
        },
        h = function (...e) {
          if (n?.aborted) return;
          ((i = this), (a = e));
          let t = u == null;
          (d(), o && t && c());
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
  Ds = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Es();
    function n(e, n = 0, r = {}) {
      typeof r != `object` && (r = {});
      let { leading: i = !1, trailing: a = !0, maxWait: o } = r,
        s = [, ,];
      (i && (s[0] = `leading`), a && (s[1] = `trailing`));
      let c,
        l = null,
        u = t.debounce(
          function (...t) {
            ((c = e.apply(this, t)), (l = null));
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
      return ((d.cancel = u.cancel), (d.flush = () => (u.flush(), c)), d);
    }
    e.debounce = n;
  }),
  Os = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ds();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  ks = e(
    n((e, t) => {
      t.exports = Os().throttle;
    })(),
  ),
  As = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = kt(r) ? e : Number(r),
      c = kt(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  js = { width: 0, height: 0, overflow: `visible` },
  Ms = { width: 0, overflowX: `visible` },
  Ns = { height: 0, overflowY: `visible` },
  Ps = {},
  Fs = (e) => {
    var { width: t, height: n } = e,
      r = kt(t),
      i = kt(n);
    return r && i ? js : r ? Ms : i ? Ns : Ps;
  };
function Is(e) {
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
function H(e) {
  return Number.isFinite(e);
}
function Ls(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rs.apply(null, arguments)
  );
}
function zs(e, t) {
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
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zs(Object(n), !0).forEach(function (t) {
          Vs(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Vs(e, t, n) {
  return (
    (t = Hs(t)) in e
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
function Hs(e) {
  var t = Us(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Us(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ws = (0, s.createContext)({ width: -1, height: -1 });
function Gs(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, s.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : s.createElement(Ws.Provider, { value: i }, t);
}
var Ks = () => (0, s.useContext)(Ws),
  qs = (0, s.forwardRef)((e, t) => {
    var {
        aspect: n,
        initialDimension: r = { width: -1, height: -1 },
        width: i,
        height: a,
        minWidth: o = 0,
        minHeight: c,
        maxHeight: l,
        children: d,
        debounce: f = 0,
        id: p,
        className: m,
        onResize: h,
        style: g = {},
      } = e,
      _ = (0, s.useRef)(null),
      v = (0, s.useRef)();
    ((v.current = h), (0, s.useImperativeHandle)(t, () => _.current));
    var [y, b] = (0, s.useState)({
        containerWidth: r.width,
        containerHeight: r.height,
      }),
      x = (0, s.useCallback)((e, t) => {
        b((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, s.useEffect)(() => {
      var e = (e) => {
        var t,
          { width: n, height: r } = e[0].contentRect;
        (x(n, r), (t = v.current) == null || t.call(v, n, r));
      };
      f > 0 && (e = (0, ks.default)(e, f, { trailing: !0, leading: !1 }));
      var t = new ResizeObserver(e),
        { width: n, height: r } = _.current.getBoundingClientRect();
      return (
        x(n, r),
        t.observe(_.current),
        () => {
          t.disconnect();
        }
      );
    }, [x, f]);
    var { containerWidth: S, containerHeight: C } = y,
      { calculatedWidth: w, calculatedHeight: T } = As(S, C, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: l,
      });
    return s.createElement(
      `div`,
      {
        id: p ? `${p}` : void 0,
        className: u(`recharts-responsive-container`, m),
        style: Bs(
          Bs({}, g),
          {},
          { width: i, height: a, minWidth: o, minHeight: c, maxHeight: l },
        ),
        ref: _,
      },
      s.createElement(
        `div`,
        { style: Fs({ width: i, height: a }) },
        s.createElement(Gs, { width: w, height: T }, d),
      ),
    );
  }),
  Js = (0, s.forwardRef)((e, t) => {
    var n = Ks();
    if (Ls(n.width) && Ls(n.height)) return e.children;
    var { width: r, height: i } = Is({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = As(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return N(a) && N(o)
      ? s.createElement(Gs, { width: a, height: o }, e.children)
      : s.createElement(qs, Rs({}, e, { width: r, height: i, ref: t }));
  }),
  Ys = () => {
    var e = Cs(),
      t = I(bs),
      n = I(Ts),
      r = I(ws)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  Xs = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  Zs = () => I(V) ?? Xs,
  Qs = () => I(rs),
  $s = () => I(is),
  U = (e) => e.layout.layoutType,
  ec = () => I(U),
  tc = (e) => {
    var t = F(),
      n = Cs(),
      { width: r, height: i } = e,
      a = Ks(),
      o = r,
      c = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (c = a.height > 0 ? a.height : i)),
      (0, s.useEffect)(() => {
        !n && Ls(o) && Ls(c) && t(lo({ width: o, height: c }));
      }, [t, n, o, c]),
      null
    );
  },
  nc = _a({
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
          e.payload.push(yi(t.payload));
        },
        prepare: qi(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = mi(e).payload.indexOf(yi(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: qi(),
      },
    },
  }),
  {
    setLegendSize: rc,
    setLegendSettings: ic,
    addLegendPayload: ac,
    removeLegendPayload: oc,
  } = nc.actions,
  sc = nc.reducer;
function cc() {
  return (
    (cc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cc.apply(null, arguments)
  );
}
function lc(e, t) {
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
function uc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lc(Object(n), !0).forEach(function (t) {
          dc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dc(e, t, n) {
  return (
    (t = fc(t)) in e
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
function fc(e) {
  var t = pc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function pc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function mc(e) {
  return Array.isArray(e) && At(e[0]) && At(e[1]) ? e.join(` ~ `) : e;
}
var hc = (e) => {
    var {
        separator: t = ` : `,
        contentStyle: n = {},
        itemStyle: r = {},
        labelStyle: i = {},
        payload: a,
        formatter: o,
        itemSorter: c,
        wrapperClassName: l,
        labelClassName: d,
        label: f,
        labelFormatter: p,
        accessibilityLayer: m = !1,
      } = e,
      h = () => {
        if (a && a.length) {
          var e = { padding: 0, margin: 0 },
            n = (c ? (0, or.default)(a, c) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || mc,
                { value: c, name: l } = e,
                u = c,
                d = l;
              if (i) {
                var f = i(c, l, e, n, a);
                if (Array.isArray(f)) [u, d] = f;
                else if (f != null) u = f;
                else return null;
              }
              var p = uc(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return s.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: p,
                },
                At(d)
                  ? s.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      d,
                    )
                  : null,
                At(d)
                  ? s.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                s.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  u,
                ),
                s.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return s.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      g = uc(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      _ = uc({ margin: 0 }, i),
      v = !P(f),
      y = v ? f : ``,
      b = u(`recharts-default-tooltip`, l),
      x = u(`recharts-tooltip-label`, d);
    v && p && a != null && (y = p(f, a));
    var S = m ? { role: `status`, "aria-live": `assertive` } : {};
    return s.createElement(
      `div`,
      cc({ className: b, style: g }, S),
      s.createElement(
        `p`,
        { className: x, style: _ },
        s.isValidElement(y) ? y : `${y}`,
      ),
      h(),
    );
  },
  gc = `recharts-tooltip-wrapper`,
  _c = { visibility: `hidden` };
function vc(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return u(gc, {
    [`${gc}-right`]: N(n) && t && N(t.x) && n >= t.x,
    [`${gc}-left`]: N(n) && t && N(t.x) && n < t.x,
    [`${gc}-bottom`]: N(r) && t && N(t.y) && r >= t.y,
    [`${gc}-top`]: N(r) && t && N(t.y) && r < t.y,
  });
}
function yc(e) {
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
  if (a && N(a[r])) return a[r];
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
function bc(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function xc(e) {
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
      ? ((u = yc({
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
        (d = yc({
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
        (l = bc({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = _c),
    {
      cssProperties: l,
      cssClasses: vc({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function Sc(e, t) {
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
function Cc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Sc(Object(n), !0).forEach(function (t) {
          wc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Sc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wc(e, t, n) {
  return (
    (t = Tc(t)) in e
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
function Tc(e) {
  var t = Ec(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ec(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Dc = class extends s.PureComponent {
    constructor() {
      (super(...arguments),
        wc(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        wc(this, `handleKeyDown`, (e) => {
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
          isAnimationActive: c,
          offset: l,
          position: u,
          reverseDirection: d,
          useTranslate3d: f,
          viewBox: p,
          wrapperStyle: m,
          lastBoundingBox: h,
          innerRef: g,
          hasPortalFromProps: _,
        } = this.props,
        { cssClasses: v, cssProperties: y } = xc({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: l,
          position: u,
          reverseDirection: d,
          tooltipBox: { height: h.height, width: h.width },
          useTranslate3d: f,
          viewBox: p,
        }),
        b = Cc(
          Cc(
            {},
            _
              ? {}
              : Cc(
                  Cc(
                    { transition: c && e ? `transform ${n}ms ${r}` : void 0 },
                    y,
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
          m,
        );
      return s.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: v,
          style: b,
          ref: g,
        },
        i,
      );
    }
  },
  Oc = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  kc = () => I((e) => e.rootProps.accessibilityLayer);
function Ac() {
  return (
    (Ac = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ac.apply(null, arguments)
  );
}
function jc(e, t) {
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
function Mc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jc(Object(n), !0).forEach(function (t) {
          Nc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Nc(e, t, n) {
  return (
    (t = Pc(t)) in e
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
function Pc(e) {
  var t = Fc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Fc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ic = {
    curveBasisClosed: Ke,
    curveBasisOpen: Je,
    curveBasis: We,
    curveBumpX: be,
    curveBumpY: xe,
    curveLinearClosed: Xe,
    curveLinear: me,
    curveMonotoneX: it,
    curveMonotoneY: at,
    curveNatural: ct,
    curveStep: ut,
    curveStepAfter: ft,
    curveStepBefore: dt,
  },
  Lc = (e) => H(e.x) && H(e.y),
  Rc = (e) => e.x,
  zc = (e) => e.y,
  Bc = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${Lt(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? Ic[`${n}${t === `vertical` ? `Y` : `X`}`]
      : Ic[n] || me;
  },
  Vc = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = Bc(t, i),
      s = a ? n.filter(Lc) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => Lc(e)) : r,
        u = s.map((e, t) => Mc(Mc({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? ve()
                .y(zc)
                .x1(Rc)
                .x0((e) => e.base.x)
            : ve()
                .x(Rc)
                .y1(zc)
                .y0((e) => e.base.y)),
        c.defined(Lc).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && N(r)
          ? ve().y(zc).x1(Rc).x0(r)
          : N(r)
            ? ve().x(Rc).y1(zc).y0(r)
            : _e().x(Rc).y(zc)),
      c.defined(Lc).curve(o),
      c(s)
    );
  },
  Hc = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? Vc(e) : r;
    return s.createElement(
      `path`,
      Ac({}, g(e), $t(e), {
        className: u(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  Uc = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function Wc() {
  return (
    (Wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wc.apply(null, arguments)
  );
}
function Gc(e, t) {
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
function Kc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Gc(Object(n), !0).forEach(function (t) {
          qc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Gc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qc(e, t, n) {
  return (
    (t = Jc(t)) in e
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
function Jc(e) {
  var t = Yc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Yc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Xc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Zc(e, t);
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
function Zc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Qc = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  $c = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: c,
      } = e,
      l = Xc(e, Uc),
      d = Kc({ x: t, y: n, top: r, left: i, width: a, height: o }, l);
    return !N(t) || !N(n) || !N(a) || !N(o) || !N(r) || !N(i)
      ? null
      : s.createElement(
          `path`,
          Wc({}, v(d), {
            className: u(`recharts-cross`, c),
            d: Qc(t, n, a, o, r, i),
          }),
        );
  };
function el(e, t, n, r) {
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
function ol(e, t) {
  var n = nl({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function sl() {}
function cl(e) {
  return e != null;
}
function ll(e, t) {
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
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ll(Object(n), !0).forEach(function (t) {
          dl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ll(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dl(e, t, n) {
  return (
    (t = fl(t)) in e
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
function fl(e) {
  var t = pl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function pl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ml = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  hl = (e, t, n) => e.map((e) => `${ml(e)} ${t}ms ${n}`).join(`,`),
  gl = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  _l = (e, t) =>
    Object.keys(t).reduce((n, r) => ul(ul({}, n), {}, { [r]: e(r, t[r]) }), {});
function vl(e, t) {
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
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vl(Object(n), !0).forEach(function (t) {
          yl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yl(e, t, n) {
  return (
    (t = bl(t)) in e
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
function bl(e) {
  var t = xl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Sl = (e, t, n) => e + (t - e) * n,
  Cl = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  wl = (e, t, n) => {
    var r = _l((t, n) => {
      if (Cl(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return W(W({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? _l(
          (e, t) =>
            Cl(t)
              ? W(
                  W({}, t),
                  {},
                  {
                    velocity: Sl(t.velocity, r[e].velocity, n),
                    from: Sl(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : wl(e, r, n - 1);
  };
function Tl(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) => W(W({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => _l((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Cl).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = wl(n, s, f)),
        i(W(W(W({}, e), t), c())),
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
function El(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => W(W({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = _l((e, t) => Sl(...t, n(d)), c);
      if ((a(W(W(W({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = _l((e, t) => Sl(...t, n(1)), c);
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
var Dl = (e, t, n, r, i, a) => {
    var o = gl(e, t);
    return n.isStepper === !0 ? Tl(e, t, n, o, i, a) : El(e, t, n, r, o, i, a);
  },
  Ol = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  kl = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Al = (e, t) => (n) => kl(Ol(e, t), n),
  jl = (e, t) => (n) =>
    kl(
      [
        ...Ol(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  Ml = function () {
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
    var o = Al(e, t),
      s = Al(n, r),
      c = jl(e, t),
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
  Nl = function () {
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
  Pl = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return Ml(e);
        case `spring`:
          return Nl();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return Ml(e);
      }
    return typeof e == `function` ? e : null;
  };
function Fl(e) {
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
var Il = class {
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
function Ll() {
  return Fl(new Il());
}
var Rl = (0, s.createContext)(Ll);
function zl(e, t) {
  var n = (0, s.useContext)(Rl);
  return (0, s.useMemo)(() => t ?? n(e), [e, t, n]);
}
var Bl = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  Vl = { t: 0 },
  Hl = { t: 1 };
function Ul(e) {
  var t = ol(e, Bl),
    {
      isActive: n,
      canBegin: r,
      duration: i,
      easing: a,
      begin: o,
      onAnimationEnd: c,
      onAnimationStart: l,
      children: u,
    } = t,
    d = zl(t.animationId, t.animationManager),
    [f, p] = (0, s.useState)(n ? Vl : Hl),
    m = (0, s.useRef)(null);
  return (
    (0, s.useEffect)(() => {
      n || p(Hl);
    }, [n]),
    (0, s.useEffect)(() => {
      if (!n || !r) return sl;
      var e = Dl(Vl, Hl, Pl(a), i, p, d.getTimeoutController());
      return (
        d.start([
          l,
          o,
          () => {
            m.current = e();
          },
          i,
          c,
        ]),
        () => {
          (d.stop(), m.current && m.current(), c());
        }
      );
    }, [n, r, i, a, o, l, c, d]),
    u(f.t)
  );
}
function Wl(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, s.useRef)(Mt(t)),
    r = (0, s.useRef)(e);
  return (r.current !== e && ((n.current = Mt(t)), (r.current = e)), n.current);
}
var Gl = [`radius`],
  Kl = [`radius`];
function ql(e, t) {
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
function Jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ql(Object(n), !0).forEach(function (t) {
          Yl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ql(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Yl(e, t, n) {
  return (
    (t = Xl(t)) in e
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
function Xl(e) {
  var t = Zl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Zl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ql() {
  return (
    (Ql = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ql.apply(null, arguments)
  );
}
function $l(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = eu(e, t);
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
function eu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var tu = (e, t, n, r, i) => {
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
  nu = {
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
  ru = (e) => {
    var t = ol(e, nu),
      n = (0, s.useRef)(null),
      [r, i] = (0, s.useState)(-1);
    (0, s.useEffect)(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && i(e);
        } catch {}
    }, []);
    var { x: a, y: o, width: c, height: l, radius: d, className: f } = t,
      {
        animationEasing: p,
        animationDuration: m,
        animationBegin: h,
        isAnimationActive: g,
        isUpdateAnimationActive: _,
      } = t,
      y = (0, s.useRef)(c),
      b = (0, s.useRef)(l),
      x = (0, s.useRef)(a),
      S = (0, s.useRef)(o),
      C = Wl(
        (0, s.useMemo)(
          () => ({ x: a, y: o, width: c, height: l, radius: d }),
          [a, o, c, l, d],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || c !== +c || l !== +l || c === 0 || l === 0)
      return null;
    var w = u(`recharts-rectangle`, f);
    if (!_) {
      var T = v(t),
        { radius: E } = T,
        D = $l(T, Gl);
      return s.createElement(
        `path`,
        Ql({}, D, {
          radius: typeof d == `number` ? d : void 0,
          className: w,
          d: tu(a, o, c, l, d),
        }),
      );
    }
    var O = y.current,
      k = b.current,
      ee = x.current,
      A = S.current,
      j = `0px ${r === -1 ? 1 : r}px`,
      M = `${r}px 0px`,
      te = hl([`strokeDasharray`], m, typeof p == `string` ? p : void 0);
    return s.createElement(
      Ul,
      {
        animationId: C,
        key: C,
        canBegin: r > 0,
        duration: m,
        easing: p,
        isActive: _,
        begin: h,
      },
      (e) => {
        var r = Ft(O, c, e),
          i = Ft(k, l, e),
          u = Ft(ee, a, e),
          f = Ft(A, o, e);
        n.current &&
          ((y.current = r), (b.current = i), (x.current = u), (S.current = f));
        var p = g
            ? e > 0
              ? { transition: te, strokeDasharray: M }
              : { strokeDasharray: j }
            : { strokeDasharray: M },
          m = v(t),
          { radius: h } = m,
          _ = $l(m, Kl);
        return s.createElement(
          `path`,
          Ql({}, _, {
            radius: typeof d == `number` ? d : void 0,
            className: w,
            d: tu(u, f, r, i, d),
            ref: n,
            style: Jl(Jl({}, p), t.style),
          }),
        );
      },
    );
  };
function iu(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [z(t, n, r, i), z(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function au() {
  return (
    (au = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    au.apply(null, arguments)
  );
}
var ou = (e, t) => Dt(t - e) * Math.min(Math.abs(t - e), 359.999),
  su = (e) => {
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
      u = Math.asin(s / l) / vo,
      d = c ? i : i + a * u,
      f = z(t, n, l, d),
      p = z(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: z(t, n, l * Math.cos(u * vo), m),
      theta: u,
    };
  },
  cu = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = ou(a, o),
      c = a + s,
      l = z(t, n, i, a),
      u = z(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = z(t, n, r, a),
        p = z(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  lu = (e) => {
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
      u = Dt(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = su({
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
      } = su({
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
        : cu({
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
        } = su({
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
        } = su({
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
  uu = {
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
  du = (e) => {
    var t = ol(e, uu),
      {
        cx: n,
        cy: r,
        innerRadius: i,
        outerRadius: a,
        cornerRadius: o,
        forceCornerRadius: c,
        cornerIsExternal: l,
        startAngle: d,
        endAngle: f,
        className: p,
      } = t;
    if (a < i || d === f) return null;
    var m = u(`recharts-sector`, p),
      h = a - i,
      g = Nt(o, h, 0, !0),
      _ =
        g > 0 && Math.abs(d - f) < 360
          ? lu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(g, h / 2),
              forceCornerRadius: c,
              cornerIsExternal: l,
              startAngle: d,
              endAngle: f,
            })
          : cu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: d,
              endAngle: f,
            });
    return s.createElement(`path`, au({}, v(t), { className: m, d: _ }));
  };
function fu(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = z(s, c, l, d),
        p = z(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return iu(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var pu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  mu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = pu();
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
  hu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ir(),
      n = mu();
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
  gu = n((e, t) => {
    t.exports = hu().range;
  });
function _u(e, t) {
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
function vu(e, t) {
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
function yu(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === _u || e === vu ? e : bu), (n = e), (r = e))
    : ((t = _u), (n = (t, n) => _u(e(t), n)), (r = (t, n) => e(t) - n));
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
function bu() {
  return 0;
}
function xu(e) {
  return e === null ? NaN : +e;
}
function* Su(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Cu = yu(_u),
  wu = Cu.right;
(Cu.left, yu(xu).center);
var Tu = class extends Map {
  constructor(e, t = ku) {
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
    return super.get(Eu(this, e));
  }
  has(e) {
    return super.has(Eu(this, e));
  }
  set(e, t) {
    return super.set(Du(this, e), t);
  }
  delete(e) {
    return super.delete(Ou(this, e));
  }
};
function Eu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Du({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Ou({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function ku(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function Au(e = _u) {
  if (e === _u) return ju;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function ju(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var Mu = Math.sqrt(50),
  Nu = Math.sqrt(10),
  Pu = Math.sqrt(2);
function Fu(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= Mu ? 10 : a >= Nu ? 5 : a >= Pu ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? Fu(e, t, n * 2) : [s, c, l]
  );
}
function Iu(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? Fu(t, e, n) : Fu(e, t, n);
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
function Lu(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), Fu(e, t, n)[2]);
}
function Ru(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? Lu(t, e, n) : Lu(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function zu(e, t) {
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
function Bu(e, t) {
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
function Vu(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? ju : Au(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      Vu(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Hu(e, n, t), i(e[r], a) > 0 && Hu(e, n, r); o < s;) {
      for (Hu(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? Hu(e, n, s) : (++s, Hu(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Hu(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function Uu(e, t, n) {
  if (((e = Float64Array.from(Su(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return Bu(e);
    if (t >= 1) return zu(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = zu(Vu(e, a).subarray(0, a + 1));
    return o + (Bu(e.subarray(a + 1)) - o) * (i - a);
  }
}
function Wu(e, t, n = xu) {
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
function Gu(e, t, n) {
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
function Ku(e, t) {
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
function qu(e, t) {
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
var Ju = Symbol(`implicit`);
function Yu() {
  var e = new Tu(),
    t = [],
    n = [],
    r = Ju;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== Ju) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Tu()));
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
      return Yu(t, n).unknown(r);
    }),
    Ku.apply(i, arguments),
    i
  );
}
function Xu() {
  var e = Yu().unknown(void 0),
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
    var m = Gu(e).map(function (e) {
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
      return Xu(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    Ku.apply(d(), arguments)
  );
}
function Zu(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Zu(t());
    }),
    e
  );
}
function Qu() {
  return Zu(Xu.apply(null, arguments).paddingInner(1));
}
function $u(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function ed(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function td() {}
var nd = 0.7,
  rd = 1 / nd,
  id = `\\s*([+-]?\\d+)\\s*`,
  ad = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  od = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  sd = /^#([0-9a-f]{3,8})$/,
  cd = RegExp(`^rgb\\(${id},${id},${id}\\)$`),
  ld = RegExp(`^rgb\\(${od},${od},${od}\\)$`),
  ud = RegExp(`^rgba\\(${id},${id},${id},${ad}\\)$`),
  dd = RegExp(`^rgba\\(${od},${od},${od},${ad}\\)$`),
  fd = RegExp(`^hsl\\(${ad},${od},${od}\\)$`),
  pd = RegExp(`^hsla\\(${ad},${od},${od},${ad}\\)$`),
  md = {
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
$u(td, yd, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hd,
  formatHex: hd,
  formatHex8: gd,
  formatHsl: _d,
  formatRgb: vd,
  toString: vd,
});
function hd() {
  return this.rgb().formatHex();
}
function gd() {
  return this.rgb().formatHex8();
}
function _d() {
  return Md(this).formatHsl();
}
function vd() {
  return this.rgb().formatRgb();
}
function yd(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = sd.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? bd(t)
          : n === 3
            ? new wd(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? xd(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? xd(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = cd.exec(e))
        ? new wd(t[1], t[2], t[3], 1)
        : (t = ld.exec(e))
          ? new wd(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = ud.exec(e))
            ? xd(t[1], t[2], t[3], t[4])
            : (t = dd.exec(e))
              ? xd(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = fd.exec(e))
                ? jd(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = pd.exec(e))
                  ? jd(t[1], t[2] / 100, t[3] / 100, t[4])
                  : md.hasOwnProperty(e)
                    ? bd(md[e])
                    : e === `transparent`
                      ? new wd(NaN, NaN, NaN, 0)
                      : null
  );
}
function bd(e) {
  return new wd((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function xd(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new wd(e, t, n, r));
}
function Sd(e) {
  return (
    e instanceof td || (e = yd(e)),
    e ? ((e = e.rgb()), new wd(e.r, e.g, e.b, e.opacity)) : new wd()
  );
}
function Cd(e, t, n, r) {
  return arguments.length === 1 ? Sd(e) : new wd(e, t, n, r ?? 1);
}
function wd(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
$u(
  wd,
  Cd,
  ed(td, {
    brighter(e) {
      return (
        (e = e == null ? rd : rd ** +e),
        new wd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? nd : nd ** +e),
        new wd(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new wd(kd(this.r), kd(this.g), kd(this.b), Od(this.opacity));
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
    hex: Td,
    formatHex: Td,
    formatHex8: Ed,
    formatRgb: Dd,
    toString: Dd,
  }),
);
function Td() {
  return `#${Ad(this.r)}${Ad(this.g)}${Ad(this.b)}`;
}
function Ed() {
  return `#${Ad(this.r)}${Ad(this.g)}${Ad(this.b)}${Ad((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Dd() {
  let e = Od(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${kd(this.r)}, ${kd(this.g)}, ${kd(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function Od(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function kd(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ad(e) {
  return ((e = kd(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function jd(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Pd(e, t, n, r)
  );
}
function Md(e) {
  if (e instanceof Pd) return new Pd(e.h, e.s, e.l, e.opacity);
  if ((e instanceof td || (e = yd(e)), !e)) return new Pd();
  if (e instanceof Pd) return e;
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
    new Pd(o, s, c, e.opacity)
  );
}
function Nd(e, t, n, r) {
  return arguments.length === 1 ? Md(e) : new Pd(e, t, n, r ?? 1);
}
function Pd(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
$u(
  Pd,
  Nd,
  ed(td, {
    brighter(e) {
      return (
        (e = e == null ? rd : rd ** +e),
        new Pd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? nd : nd ** +e),
        new Pd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new wd(
        Ld(e >= 240 ? e - 240 : e + 120, i, r),
        Ld(e, i, r),
        Ld(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new Pd(Fd(this.h), Id(this.s), Id(this.l), Od(this.opacity));
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
      let e = Od(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${Fd(this.h)}, ${Id(this.s) * 100}%, ${Id(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function Fd(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function Id(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ld(e, t, n) {
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
var Rd = (e) => () => e;
function zd(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Bd(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Vd(e) {
  return (e = +e) == 1
    ? Hd
    : function (t, n) {
        return n - t ? Bd(t, n, e) : Rd(isNaN(t) ? n : t);
      };
}
function Hd(e, t) {
  var n = t - e;
  return n ? zd(e, n) : Rd(isNaN(e) ? t : e);
}
var Ud = (function e(t) {
  var n = Vd(t);
  function r(e, t) {
    var r = n((e = Cd(e)).r, (t = Cd(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Hd(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function Wd(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function Gd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kd(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = tf(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function qd(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Jd(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Yd(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = tf(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var Xd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Zd = new RegExp(Xd.source, `g`);
function Qd(e) {
  return function () {
    return e;
  };
}
function $d(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function ef(e, t) {
  var n = (Xd.lastIndex = Zd.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = Xd.exec(e)) && (i = Zd.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Jd(r, i) })),
      (n = Zd.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? $d(c[0].x)
        : Qd(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function tf(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Rd(t)
    : (n === `number`
        ? Jd
        : n === `string`
          ? (r = yd(t))
            ? ((t = r), Ud)
            : ef
          : t instanceof yd
            ? Ud
            : t instanceof Date
              ? qd
              : Gd(t)
                ? Wd
                : Array.isArray(t)
                  ? Kd
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? Yd
                    : Jd)(e, t);
}
function nf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function rf(e, t) {
  t === void 0 && ((t = e), (e = tf));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function af(e) {
  return function () {
    return e;
  };
}
function of(e) {
  return +e;
}
var sf = [0, 1];
function cf(e) {
  return e;
}
function lf(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : af(isNaN(t) ? NaN : 0.5);
}
function uf(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function df(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = lf(i, r)), (a = n(o, a))) : ((r = lf(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function ff(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = lf(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = wu(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function pf(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function mf() {
  var e = sf,
    t = sf,
    n = tf,
    r,
    i,
    a,
    o = cf,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== cf && (o = uf(e[0], e[n - 1])),
      (s = n > 2 ? ff : df),
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
      return o(i((l ||= s(t, e.map(r), Jd))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, of)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = nf), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : cf), u()) : o !== cf;
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
function hf() {
  return mf()(cf, cf);
}
function gf(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function _f(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function vf(e) {
  return ((e = _f(Math.abs(e))), e ? e[1] : NaN);
}
function yf(e, t) {
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
function bf(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var xf =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Sf(e) {
  if (!(t = xf.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Cf({
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
Sf.prototype = Cf.prototype;
function Cf(e) {
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
Cf.prototype.toString = function () {
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
function wf(e) {
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
var Tf;
function Ef(e, t) {
  var n = _f(e, t);
  if (!n) return ((Tf = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (Tf = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + _f(e, Math.max(0, t + a - 1))[0];
}
function Df(e, t) {
  var n = _f(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Of = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: gf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Df(e * 100, t),
  r: Df,
  s: Ef,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function kf(e) {
  return e;
}
var Af = Array.prototype.map,
  jf = [
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
function Mf(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? kf
        : yf(Af.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? kf : bf(Af.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = Sf(e);
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
      : Of[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = Of[y],
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
          v && (e = wf(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && Tf !== void 0 ? jf[8 + Tf / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(vf(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = Sf(e)), (e.type = `f`), e), { suffix: jf[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var Nf, Pf, Ff;
If({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function If(e) {
  return ((Nf = Mf(e)), (Pf = Nf.format), (Ff = Nf.formatPrefix), Nf);
}
function Lf(e) {
  return Math.max(0, -vf(Math.abs(e)));
}
function Rf(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(vf(t) / 3))) * 3 - vf(Math.abs(e)),
  );
}
function zf(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, vf(t) - vf(e)) + 1
  );
}
function Bf(e, t, n, r) {
  var i = Ru(e, t, n),
    a;
  switch (((r = Sf(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = Rf(i, o))) && (r.precision = a),
        Ff(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = zf(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = Lf(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return Pf(r);
}
function Vf(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return Iu(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Bf(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = Lu(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function Hf() {
  var e = hf();
  return (
    (e.copy = function () {
      return pf(e, Hf());
    }),
    Ku.apply(e, arguments),
    Vf(e)
  );
}
function Uf(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, of)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return Uf(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, of) : [0, 1]),
    Vf(n)
  );
}
function Wf(e, t) {
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
function Gf(e) {
  return Math.log(e);
}
function Kf(e) {
  return Math.exp(e);
}
function qf(e) {
  return -Math.log(-e);
}
function Jf(e) {
  return -Math.exp(-e);
}
function Yf(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Xf(e) {
  return e === 10 ? Yf : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Zf(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Qf(e) {
  return (t, n) => -e(-t, n);
}
function $f(e) {
  let t = e(Gf, Kf),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Zf(r)),
      (a = Xf(r)),
      n()[0] < 0 ? ((i = Qf(i)), (a = Qf(a)), e(qf, Jf)) : e(Gf, Kf),
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
        m.length * 2 < p && (m = Iu(o, s, p));
      } else m = Iu(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = Sf(n)).precision == null && (n.trim = !0),
          (n = Pf(n))),
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
        Wf(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function ep() {
  let e = $f(mf()).domain([1, 10]);
  return (
    (e.copy = () => pf(e, ep()).base(e.base())), Ku.apply(e, arguments), e
  );
}
function tp(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function np(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function rp(e) {
  var t = 1,
    n = e(tp(t), np(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(tp((t = +n)), np(t)) : t;
    }),
    Vf(n)
  );
}
function ip() {
  var e = rp(mf());
  return (
    (e.copy = function () {
      return pf(e, ip()).constant(e.constant());
    }),
    Ku.apply(e, arguments)
  );
}
function ap(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function op(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function sp(e) {
  return e < 0 ? -e * e : e * e;
}
function cp(e) {
  var t = e(cf, cf),
    n = 1;
  function r() {
    return n === 1 ? e(cf, cf) : n === 0.5 ? e(op, sp) : e(ap(n), ap(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    Vf(t)
  );
}
function lp() {
  var e = cp(mf());
  return (
    (e.copy = function () {
      return pf(e, lp()).exponent(e.exponent());
    }),
    Ku.apply(e, arguments),
    e
  );
}
function up() {
  return lp.apply(null, arguments).exponent(0.5);
}
function dp(e) {
  return Math.sign(e) * e * e;
}
function fp(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function pp() {
  var e = hf(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = fp(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(dp(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, of)).map(dp)), i)
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
      return pp(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Ku.apply(i, arguments),
    Vf(i)
  );
}
function mp() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = Wu(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[wu(n, e)];
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
      return (e.sort(_u), i());
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
      return mp().domain(e).range(t).unknown(r);
    }),
    Ku.apply(a, arguments)
  );
}
function hp() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[wu(r, e, 0, n)] : a;
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
      return hp().domain([e, t]).range(i).unknown(a);
    }),
    Ku.apply(Vf(o), arguments)
  );
}
function gp() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[wu(e, i, 0, r)] : n;
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
      return gp().domain(e).range(t).unknown(n);
    }),
    Ku.apply(i, arguments)
  );
}
var _p = new Date(),
  vp = new Date();
function G(e, t, n, r) {
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
      G(
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
        _p.setTime(+t),
        vp.setTime(+r),
        e(_p),
        e(vp),
        Math.floor(n(_p, vp))
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
var yp = G(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((yp.every = (e) => (
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
      : yp
)),
  yp.range);
var bp = 1e3,
  xp = bp * 60,
  Sp = xp * 60,
  Cp = Sp * 24,
  wp = Cp * 7,
  Tp = Cp * 30,
  Ep = Cp * 365,
  Dp = G(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * bp);
    },
    (e, t) => (t - e) / bp,
    (e) => e.getUTCSeconds(),
  );
Dp.range;
var Op = G(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * bp);
  },
  (e, t) => {
    e.setTime(+e + t * xp);
  },
  (e, t) => (t - e) / xp,
  (e) => e.getMinutes(),
);
Op.range;
var kp = G(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * xp);
  },
  (e, t) => (t - e) / xp,
  (e) => e.getUTCMinutes(),
);
kp.range;
var Ap = G(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * bp - e.getMinutes() * xp,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Sp);
  },
  (e, t) => (t - e) / Sp,
  (e) => e.getHours(),
);
Ap.range;
var jp = G(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Sp);
  },
  (e, t) => (t - e) / Sp,
  (e) => e.getUTCHours(),
);
jp.range;
var Mp = G(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xp) / Cp,
  (e) => e.getDate() - 1,
);
Mp.range;
var Np = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Cp,
  (e) => e.getUTCDate() - 1,
);
Np.range;
var Pp = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Cp,
  (e) => Math.floor(e / Cp),
);
Pp.range;
function Fp(e) {
  return G(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xp) / wp,
  );
}
var Ip = Fp(0),
  Lp = Fp(1),
  Rp = Fp(2),
  zp = Fp(3),
  Bp = Fp(4),
  Vp = Fp(5),
  Hp = Fp(6);
(Ip.range, Lp.range, Rp.range, zp.range, Bp.range, Vp.range, Hp.range);
function Up(e) {
  return G(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / wp,
  );
}
var Wp = Up(0),
  Gp = Up(1),
  Kp = Up(2),
  qp = Up(3),
  Jp = Up(4),
  Yp = Up(5),
  Xp = Up(6);
(Wp.range, Gp.range, Kp.range, qp.range, Jp.range, Yp.range, Xp.range);
var Zp = G(
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
Zp.range;
var Qp = G(
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
Qp.range;
var $p = G(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
(($p.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : G(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  $p.range);
var em = G(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((em.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : G(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  em.range);
function tm(e, t, n, r, i, a) {
  let o = [
    [Dp, 1, bp],
    [Dp, 5, 5 * bp],
    [Dp, 15, 15 * bp],
    [Dp, 30, 30 * bp],
    [a, 1, xp],
    [a, 5, 5 * xp],
    [a, 15, 15 * xp],
    [a, 30, 30 * xp],
    [i, 1, Sp],
    [i, 3, 3 * Sp],
    [i, 6, 6 * Sp],
    [i, 12, 12 * Sp],
    [r, 1, Cp],
    [r, 2, 2 * Cp],
    [n, 1, wp],
    [t, 1, Tp],
    [t, 3, 3 * Tp],
    [e, 1, Ep],
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
      a = yu(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Ru(t / Ep, n / Ep, r));
    if (a === 0) return yp.every(Math.max(Ru(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [nm, rm] = tm(em, Qp, Wp, Pp, jp, kp),
  [im, am] = tm($p, Zp, Ip, Mp, Ap, Op);
function om(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function sm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function cm(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function lm(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = mm(i),
    u = hm(i),
    d = mm(a),
    f = hm(a),
    p = mm(o),
    m = hm(o),
    h = mm(s),
    g = hm(s),
    _ = mm(c),
    v = hm(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: re,
      c: null,
      d: Im,
      e: Im,
      f: Vm,
      g: Qm,
      G: eh,
      H: Lm,
      I: Rm,
      j: zm,
      L: Bm,
      m: Hm,
      M: Um,
      p: ie,
      q: ae,
      Q: Ch,
      s: wh,
      S: Wm,
      u: Gm,
      U: Km,
      V: Jm,
      w: Ym,
      W: Xm,
      x: null,
      X: null,
      y: Zm,
      Y: $m,
      Z: th,
      "%": Sh,
    },
    b = {
      a: oe,
      A: se,
      b: ce,
      B: le,
      c: null,
      d: nh,
      e: nh,
      f: sh,
      g: vh,
      G: bh,
      H: rh,
      I: ih,
      j: ah,
      L: oh,
      m: ch,
      M: lh,
      p: ue,
      q: de,
      Q: Ch,
      s: wh,
      S: uh,
      u: dh,
      U: fh,
      V: mh,
      w: hh,
      W: gh,
      x: null,
      X: null,
      y: _h,
      Y: yh,
      Z: xh,
      "%": Sh,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: ee,
      d: Em,
      e: Em,
      f: Mm,
      g: Sm,
      G: xm,
      H: Om,
      I: Om,
      j: Dm,
      L: jm,
      m: Tm,
      M: km,
      p: T,
      q: wm,
      Q: Pm,
      s: Fm,
      S: Am,
      u: _m,
      U: vm,
      V: ym,
      w: gm,
      W: bm,
      x: A,
      X: j,
      y: Sm,
      Y: xm,
      Z: Cm,
      "%": Nm,
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
          (c = um[(s = e.charAt(++i))]) == null
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
      var r = cm(1900, void 0, 1),
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
            ? ((a = sm(cm(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? Gp.ceil(a) : Gp(a)),
              (a = Np.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = om(cm(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? Lp.ceil(a) : Lp(a)),
              (a = Mp.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? sm(cm(r.y, 0, 1)).getUTCDay()
              : om(cm(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), sm(r))
        : om(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in um ? t.charAt(i++) : s]),
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
  function ee(e, n, r) {
    return w(e, t, n, r);
  }
  function A(e, t, r) {
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
  function de(e) {
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
var um = { "-": ``, _: ` `, 0: `0` },
  K = /^\s*\d+/,
  dm = /^%/,
  fm = /[\\^$*+?|[\]().{}]/g;
function q(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function pm(e) {
  return e.replace(fm, `\\$&`);
}
function mm(e) {
  return RegExp(`^(?:` + e.map(pm).join(`|`) + `)`, `i`);
}
function hm(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function gm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function _m(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function vm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function ym(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function bm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function xm(e, t, n) {
  var r = K.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Sm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Cm(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function wm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function Tm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Em(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function Dm(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Om(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function km(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function Am(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function jm(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function Mm(e, t, n) {
  var r = K.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Nm(e, t, n) {
  var r = dm.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Pm(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function Fm(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function Im(e, t) {
  return q(e.getDate(), t, 2);
}
function Lm(e, t) {
  return q(e.getHours(), t, 2);
}
function Rm(e, t) {
  return q(e.getHours() % 12 || 12, t, 2);
}
function zm(e, t) {
  return q(1 + Mp.count($p(e), e), t, 3);
}
function Bm(e, t) {
  return q(e.getMilliseconds(), t, 3);
}
function Vm(e, t) {
  return Bm(e, t) + `000`;
}
function Hm(e, t) {
  return q(e.getMonth() + 1, t, 2);
}
function Um(e, t) {
  return q(e.getMinutes(), t, 2);
}
function Wm(e, t) {
  return q(e.getSeconds(), t, 2);
}
function Gm(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Km(e, t) {
  return q(Ip.count($p(e) - 1, e), t, 2);
}
function qm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Bp(e) : Bp.ceil(e);
}
function Jm(e, t) {
  return ((e = qm(e)), q(Bp.count($p(e), e) + ($p(e).getDay() === 4), t, 2));
}
function Ym(e) {
  return e.getDay();
}
function Xm(e, t) {
  return q(Lp.count($p(e) - 1, e), t, 2);
}
function Zm(e, t) {
  return q(e.getFullYear() % 100, t, 2);
}
function Qm(e, t) {
  return ((e = qm(e)), q(e.getFullYear() % 100, t, 2));
}
function $m(e, t) {
  return q(e.getFullYear() % 1e4, t, 4);
}
function eh(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? Bp(e) : Bp.ceil(e)), q(e.getFullYear() % 1e4, t, 4)
  );
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    q((t / 60) | 0, `0`, 2) +
    q(t % 60, `0`, 2)
  );
}
function nh(e, t) {
  return q(e.getUTCDate(), t, 2);
}
function rh(e, t) {
  return q(e.getUTCHours(), t, 2);
}
function ih(e, t) {
  return q(e.getUTCHours() % 12 || 12, t, 2);
}
function ah(e, t) {
  return q(1 + Np.count(em(e), e), t, 3);
}
function oh(e, t) {
  return q(e.getUTCMilliseconds(), t, 3);
}
function sh(e, t) {
  return oh(e, t) + `000`;
}
function ch(e, t) {
  return q(e.getUTCMonth() + 1, t, 2);
}
function lh(e, t) {
  return q(e.getUTCMinutes(), t, 2);
}
function uh(e, t) {
  return q(e.getUTCSeconds(), t, 2);
}
function dh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function fh(e, t) {
  return q(Wp.count(em(e) - 1, e), t, 2);
}
function ph(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Jp(e) : Jp.ceil(e);
}
function mh(e, t) {
  return ((e = ph(e)), q(Jp.count(em(e), e) + (em(e).getUTCDay() === 4), t, 2));
}
function hh(e) {
  return e.getUTCDay();
}
function gh(e, t) {
  return q(Gp.count(em(e) - 1, e), t, 2);
}
function _h(e, t) {
  return q(e.getUTCFullYear() % 100, t, 2);
}
function vh(e, t) {
  return ((e = ph(e)), q(e.getUTCFullYear() % 100, t, 2));
}
function yh(e, t) {
  return q(e.getUTCFullYear() % 1e4, t, 4);
}
function bh(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? Jp(e) : Jp.ceil(e)),
    q(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function xh() {
  return `+0000`;
}
function Sh() {
  return `%`;
}
function Ch(e) {
  return +e;
}
function wh(e) {
  return Math.floor(e / 1e3);
}
var Th, Eh, Dh;
Oh({
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
function Oh(e) {
  return (
    (Th = lm(e)),
    (Eh = Th.format),
    Th.parse,
    (Dh = Th.utcFormat),
    Th.utcParse,
    Th
  );
}
function kh(e) {
  return new Date(e);
}
function Ah(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function jh(e, t, n, r, i, a, o, s, c, l) {
  var u = hf(),
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
      return arguments.length ? f(Array.from(e, Ah)) : f().map(kh);
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
        e ? f(Wf(n, e)) : u
      );
    }),
    (u.copy = function () {
      return pf(u, jh(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function Mh() {
  return Ku.apply(
    jh(im, am, $p, Zp, Ip, Mp, Ap, Op, Dp, Eh).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Nh() {
  return Ku.apply(
    jh(nm, rm, em, Qp, Wp, Np, jp, kp, Dp, Dh).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Ph() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = cf,
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
    (l.range = u(tf)),
    (l.rangeRound = u(nf)),
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
function Fh(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Ih() {
  var e = Vf(Ph()(cf));
  return (
    (e.copy = function () {
      return Fh(e, Ih());
    }),
    qu.apply(e, arguments)
  );
}
function Lh() {
  var e = $f(Ph()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Fh(e, Lh()).base(e.base());
    }),
    qu.apply(e, arguments)
  );
}
function Rh() {
  var e = rp(Ph());
  return (
    (e.copy = function () {
      return Fh(e, Rh()).constant(e.constant());
    }),
    qu.apply(e, arguments)
  );
}
function zh() {
  var e = cp(Ph());
  return (
    (e.copy = function () {
      return Fh(e, zh()).exponent(e.exponent());
    }),
    qu.apply(e, arguments)
  );
}
function Bh() {
  return zh.apply(null, arguments).exponent(0.5);
}
function Vh() {
  var e = [],
    t = cf;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((wu(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(_u), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => Uu(e, r / t));
    }),
    (n.copy = function () {
      return Vh(t).domain(e);
    }),
    qu.apply(n, arguments)
  );
}
function Hh() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = cf,
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
        ? (([n, r, i] = t), (l = rf(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(tf)),
    (p.rangeRound = m(nf)),
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
function Uh() {
  var e = Vf(Hh()(cf));
  return (
    (e.copy = function () {
      return Fh(e, Uh());
    }),
    qu.apply(e, arguments)
  );
}
function Wh() {
  var e = $f(Hh()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Fh(e, Wh()).base(e.base());
    }),
    qu.apply(e, arguments)
  );
}
function Gh() {
  var e = rp(Hh());
  return (
    (e.copy = function () {
      return Fh(e, Gh()).constant(e.constant());
    }),
    qu.apply(e, arguments)
  );
}
function Kh() {
  var e = cp(Hh());
  return (
    (e.copy = function () {
      return Fh(e, Kh()).exponent(e.exponent());
    }),
    qu.apply(e, arguments)
  );
}
function qh() {
  return Kh.apply(null, arguments).exponent(0.5);
}
var Jh = e(gu()),
  Yh = t({
    scaleBand: () => Xu,
    scaleDiverging: () => Uh,
    scaleDivergingLog: () => Wh,
    scaleDivergingPow: () => Kh,
    scaleDivergingSqrt: () => qh,
    scaleDivergingSymlog: () => Gh,
    scaleIdentity: () => Uf,
    scaleImplicit: () => Ju,
    scaleLinear: () => Hf,
    scaleLog: () => ep,
    scaleOrdinal: () => Yu,
    scalePoint: () => Qu,
    scalePow: () => lp,
    scaleQuantile: () => mp,
    scaleQuantize: () => hp,
    scaleRadial: () => pp,
    scaleSequential: () => Ih,
    scaleSequentialLog: () => Lh,
    scaleSequentialPow: () => zh,
    scaleSequentialQuantile: () => Vh,
    scaleSequentialSqrt: () => Bh,
    scaleSequentialSymlog: () => Rh,
    scaleSqrt: () => up,
    scaleSymlog: () => ip,
    scaleThreshold: () => gp,
    scaleTime: () => Mh,
    scaleUtc: () => Nh,
    tickFormat: () => Bf,
  }),
  Xh = (e) => e.chartData,
  Zh = L([Xh], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Qh = (e, t, n, r) => (r ? Zh(e) : Xh(e));
function $h(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (H(t) && H(n)) return !0;
  }
  return !1;
}
function eg(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function tg(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (H(n)) i = n;
    else if (typeof n == `function`) return;
    if (H(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if ($h(o)) return o;
  }
}
function ng(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if ($h(r)) return eg(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (N(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && Yo.test(i)) {
        var c = Yo.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (N(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && Xo.test(a)) {
        var u = Xo.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if ($h(f)) return t == null ? f : eg(f, t, n);
    }
  }
}
var J = e(
    n((e, t, n) => {
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
                  l < u &&
                    ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
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
                  n % 2 && ((o = o.times(u)), ee(o.d, t)),
                    (n = c(n / 2)),
                    n !== 0;
                )
                  ((u = u.times(u)), ee(u.d, t));
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
              ee = r.constructor,
              A = r.s == i.s ? 1 : -1,
              j = r.d,
              M = i.d;
            if (!r.s) return new ee(r);
            if (!i.s) throw Error(a + `Division by zero`);
            for (
              l = r.e - i.e,
                O = M.length,
                T = j.length,
                g = new ee(A),
                _ = g.d = [],
                u = 0;
              M[u] == (j[u] || 0);
            )
              ++u;
            if (
              (M[u] > (j[u] || 0) && --l,
              (x =
                o == null ? (o = ee.precision) : s ? o + (S(r) - S(i)) + 1 : o),
              x < 0)
            )
              return new ee(0);
            if (((x = (x / p + 2) | 0), (u = 0), O == 1))
              for (d = 0, M = M[0], x++; (u < T || d) && x--; u++)
                ((C = d * f + (j[u] || 0)),
                  (_[u] = (C / M) | 0),
                  (d = (C % M) | 0));
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
                  c && v[0] ? (v[y++] = j[w] || 0) : ((v = [j[w]]), (y = 1)));
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
            if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o))
              return e;
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
        function ee(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function A(e) {
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
            (i.clone = A),
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
          return (i.config(e), i);
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
        ((r = A(r)),
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
    })(),
  ),
  rg = (e) => e,
  ig = { "@@functional/placeholder": !0 },
  ag = (e) => e === ig,
  og = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          ag(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  sg = (e, t) =>
    e === 1
      ? t
      : og(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== ig).length;
          return r >= e
            ? t(...n)
            : sg(
                e - r,
                og(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (ag(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  cg = (e) => sg(e.length, e),
  lg = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  ug = cg((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  dg = function () {
    var e = [...arguments];
    if (!e.length) return rg;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  fg = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  pg = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function mg(e) {
  return e === 0
    ? 1
    : Math.floor(new J.default(e).abs().log(10).toNumber()) + 1;
}
function hg(e, t, n) {
  for (var r = new J.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(cg((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  cg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  cg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var gg = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  _g = (e, t, n) => {
    if (e.lte(0)) return new J.default(0);
    var r = mg(e.toNumber()),
      i = new J.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new J.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new J.default(s.toNumber())
      : new J.default(Math.ceil(s.toNumber()));
  },
  vg = (e, t, n) => {
    var r = new J.default(1),
      i = new J.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new J.default(10).pow(mg(e) - 1)),
          (i = new J.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new J.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new J.default(Math.floor((t - 1) / 2)))
        : n || (i = new J.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return dg(
      ug((e) => i.add(new J.default(e - o).mul(r)).toNumber()),
      lg,
    )(0, t);
  },
  yg = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new J.default(0),
        tickMin: new J.default(0),
        tickMax: new J.default(0),
      };
    var a = _g(new J.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new J.default(0))
      : ((o = new J.default(e).add(t).div(2)),
        (o = o.sub(new J.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new J.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? yg(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new J.default(s).mul(a)),
          tickMax: o.add(new J.default(c).mul(a)),
        });
  };
function bg(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = gg([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...lg(0, r - 1).map(() => 1 / 0)]
        : [...lg(0, r - 1).map(() => -1 / 0), s];
    return t > n ? fg(c) : c;
  }
  if (o === s) return vg(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = yg(o, s, a, i, 0),
    f = hg(u, d.add(new J.default(0.1).mul(l)), l);
  return t > n ? fg(f) : f;
}
function xg(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = gg([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = _g(new J.default(o).sub(a).div(s - 1), i, 0),
    l = [...hg(new J.default(a), new J.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? fg(l) : l);
}
var Sg = pg(bg),
  Cg = pg(xg),
  wg = (e) => e.rootProps.maxBarSize,
  Tg = (e) => e.rootProps.barGap,
  Eg = (e) => e.rootProps.barCategoryGap,
  Dg = (e) => e.rootProps.barSize,
  Og = (e) => e.rootProps.stackOffset,
  kg = (e) => e.options.chartName,
  Ag = (e) => e.rootProps.syncId,
  jg = (e) => e.rootProps.syncMethod,
  Mg = (e) => e.options.eventEmitter,
  Ng = {
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
  Pg = {
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
  Fg = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  Ig = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: Ng.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: Ng.reversed,
    scale: Ng.scale,
    tick: Ng.tick,
    tickCount: void 0,
    ticks: void 0,
    type: Ng.type,
    unit: void 0,
  },
  Lg = {
    allowDataOverflow: Pg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Pg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Pg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Pg.scale,
    tick: Pg.tick,
    tickCount: Pg.tickCount,
    ticks: void 0,
    type: Pg.type,
    unit: void 0,
  },
  Rg = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: Ng.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Ng.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Ng.scale,
    tick: Ng.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  zg = {
    allowDataOverflow: Pg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Pg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Pg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Pg.scale,
    tick: Pg.tick,
    tickCount: Pg.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  Bg = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? Rg
        : Ig
      : e.polarAxis.angleAxis[t],
  Vg = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? zg
        : Lg
      : e.polarAxis.radiusAxis[t],
  Hg = (e) => e.polarOptions,
  Ug = L([rs, is, V], bo),
  Wg = L([Hg, Ug], (e, t) => {
    if (e != null) return Nt(e.innerRadius, t, 0);
  }),
  Gg = L([Hg, Ug], (e, t) => {
    if (e != null) return Nt(e.outerRadius, t, t * 0.8);
  }),
  Kg = L([Hg], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  });
L([Bg, Kg], Fg);
var qg = L([Ug, Wg, Gg], (e, t, n) => {
  if (e != null && t != null && n != null) return [t, n];
});
L([Vg, qg], Fg);
var Jg = L([U, Hg, Wg, Gg, rs, is], (e, t, n, r, i, a) => {
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
        cx: Nt(o, i, i / 2),
        cy: Nt(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  Y = (e, t) => t,
  Yg = (e, t, n) => n;
function Xg(e) {
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
  Zg = (e) => e.tooltip.settings.axisId,
  Z = (e) => y_(e, X(e), Zg(e)),
  Qg = L([Z], (e) => e?.dataKey);
function $g(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = Xg(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(B(t, a, null)),
            c = B(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function e_(e) {
  return e.stackId != null && e.dataKey != null;
}
var t_ = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function n_(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function r_(e, t) {
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
function i_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? r_(Object(n), !0).forEach(function (t) {
          a_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : r_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function a_(e, t, n) {
  return (
    (t = o_(t)) in e
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
function o_(e) {
  var t = s_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function s_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var c_ = [0, `auto`],
  l_ = {
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
  u_ = (e, t) => e.cartesianAxis.xAxis[t],
  d_ = (e, t) => u_(e, t) ?? l_,
  f_ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: c_,
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
  p_ = (e, t) => e.cartesianAxis.yAxis[t],
  m_ = (e, t) => p_(e, t) ?? f_,
  h_ = {
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
  g_ = (e, t) => e.cartesianAxis.zAxis[t] ?? h_,
  __ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return d_(e, n);
      case `yAxis`:
        return m_(e, n);
      case `zAxis`:
        return g_(e, n);
      case `angleAxis`:
        return Bg(e, n);
      case `radiusAxis`:
        return Vg(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  v_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return d_(e, n);
      case `yAxis`:
        return m_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  y_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return d_(e, n);
      case `yAxis`:
        return m_(e, n);
      case `angleAxis`:
        return Bg(e, n);
      case `radiusAxis`:
        return Vg(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  b_ = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function x_(e, t) {
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
var S_ = (e) => e.graphicalItems.cartesianItems,
  C_ = L([Y, Yg], x_),
  w_ = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  T_ = L([S_, __, C_], w_, { memoizeOptions: { resultEqualityCheck: n_ } }),
  E_ = L([T_], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(e_),
  ),
  D_ = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  O_ = L([T_], D_),
  k_ = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  A_ = L([T_], k_, { memoizeOptions: { resultEqualityCheck: n_ } }),
  j_ = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  M_ = L([A_, Qh], j_),
  N_ = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: B(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: B(e, t.dataKey) })),
  P_ = L([M_, __, T_], N_);
function F_(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function I_(e) {
  if (At(e) || e instanceof Date) {
    var t = Number(e);
    if (H(t)) return t;
  }
}
function L_(e) {
  if (Array.isArray(e)) {
    var t = [I_(e[0]), I_(e[1])];
    return $h(t) ? t : void 0;
  }
  var n = I_(e);
  if (n != null) return [n, n];
}
function R_(e) {
  return e.map(I_).filter(cl);
}
function z_(e, t, n) {
  return !n || typeof t != `number` || Ot(t) || !n.length
    ? []
    : R_(
        n.flatMap((n) => {
          var r = B(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), H(i) && H(a)))
            return [t - i, t + a];
        }),
      );
}
var B_ = L([E_, Qh, Z], $g),
  V_ = (e, t, n) => {
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
        return [r, { stackedData: Vo(e, i.map(Xg), n), graphicalItems: i }];
      }),
    );
  },
  H_ = L([B_, E_, Og], V_),
  U_ = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Jo(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  W_ = L([__], (e) => e.allowDataOverflow),
  G_ = (e) => {
    if (e == null || !(`domain` in e)) return c_;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = R_(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? c_;
  },
  K_ = L([__], G_),
  q_ = L([K_, W_], tg),
  J_ = L([H_, Xh, Y, q_], U_, { memoizeOptions: { resultEqualityCheck: t_ } }),
  Y_ = (e) => e.errorBars,
  X_ = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => F_(n, e)),
  Z_ = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  Q_ = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => F_(i, e)),
              c = B(e, t.dataKey ?? n.dataKey),
              l = z_(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = L_(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = L_(B(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      H(a) && H(o))
    )
      return [a, o];
  },
  $_ = L([M_, __, O_, Y_, Y], Q_, {
    memoizeOptions: { resultEqualityCheck: t_ },
  });
function ev(e) {
  var { value: t } = e;
  if (At(t) || t instanceof Date) return t;
}
var tv = (e, t, n) => {
    var r = e.map(ev).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && Pt(r)))
      ? (0, Jh.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  nv = (e) => e.referenceElements.dots,
  rv = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  iv = L([nv, Y, Yg], rv),
  av = (e) => e.referenceElements.areas,
  ov = L([av, Y, Yg], rv),
  sv = (e) => e.referenceElements.lines,
  cv = L([sv, Y, Yg], rv),
  lv = (e, t) => {
    var n = R_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  uv = L(iv, Y, lv),
  dv = (e, t) => {
    var n = R_(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  fv = L([ov, Y], dv),
  pv = (e, t) => {
    var n = R_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  mv = L(uv, L(cv, Y, pv), fv, (e, t, n) => Z_(e, n, t)),
  hv = (e, t, n, r, i, a, o, s) =>
    n ??
    ng(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? Z_(r, a, i)
        : Z_(a, i),
      e.allowDataOverflow,
    ),
  gv = L([__, K_, q_, J_, $_, mv, U, Y], hv, {
    memoizeOptions: { resultEqualityCheck: t_ },
  }),
  _v = [0, 1],
  vv = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = Po(t, a);
      return l && s == null
        ? (0, Jh.default)(0, n.length)
        : c === `category`
          ? tv(r, e, l)
          : i === `expand`
            ? _v
            : o;
    }
  },
  yv = L([__, U, M_, P_, Og, Y, gv], vv),
  bv = (e, t, n, r, i) => {
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
        var s = `scale${Lt(a)}`;
        return s in Yh ? s : `point`;
      }
    }
  },
  xv = L([__, U, b_, kg, Y], bv);
function Sv(e) {
  if (e != null) {
    if (e in Yh) return Yh[e]();
    var t = `scale${Lt(e)}`;
    if (t in Yh) return Yh[t]();
  }
}
function Cv(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = Sv(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (Ro(a), a);
    }
  }
}
var wv = (e, t, n) => {
    var r = G_(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        $h(e)
      )
        return Sg(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && $h(e))
        return Cg(e, t.tickCount, t.allowDecimals);
    }
  },
  Tv = L([yv, y_, xv], wv),
  Ev = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      $h(t) &&
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
  Dv = L([__, yv, Tv, Y], Ev),
  Ov = L(
    L(P_, __, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(R_(e.map((e) => e.value))).sort((e, t) => e - t);
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
    Eg,
    V,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!H(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Nt(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  kv = (e, t) => {
    var n = d_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Ov(e, `xAxis`, t, n.padding);
  },
  Av = (e, t) => {
    var n = m_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Ov(e, `yAxis`, t, n.padding);
  },
  jv = L(d_, kv, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  Mv = L(m_, Av, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  Nv = L([V, jv, Ts, ws, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  Pv = L([V, U, Mv, Ts, ws, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  Fv = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return Nv(e, n, r);
      case `yAxis`:
        return Pv(e, n, r);
      case `zAxis`:
        return g_(e, n)?.range;
      case `angleAxis`:
        return Kg(e);
      case `radiusAxis`:
        return qg(e, n);
      default:
        return;
    }
  },
  Iv = L([__, Fv], Fg),
  Lv = L([__, xv, Dv, Iv], Cv);
L([T_, Y_, Y], X_);
function Rv(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var zv = (e, t) => t,
  Bv = (e, t, n) => n,
  Vv = L(ss, zv, Bv, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(Rv),
  ),
  Hv = L(cs, zv, Bv, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(Rv),
  ),
  Uv = (e, t) => ({ width: e.width, height: t.height }),
  Wv = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  Gv = L(V, d_, Uv),
  Kv = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  qv = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  Jv = L(is, V, Vv, zv, Bv, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = Uv(t, n);
        o ??= Kv(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  Yv = L(rs, V, Hv, zv, Bv, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = Wv(t, n);
        o ??= qv(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  Xv = L(
    [
      V,
      d_,
      (e, t) => {
        var n = d_(e, t);
        if (n != null) return Jv(e, n.orientation, n.mirror);
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
  Zv = L(
    [
      V,
      m_,
      (e, t) => {
        var n = m_(e, t);
        if (n != null) return Yv(e, n.orientation, n.mirror);
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
  Qv = L(V, m_, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  $v = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Gv(e, n).width;
      case `yAxis`:
        return Qv(e, n).height;
      default:
        return;
    }
  },
  ey = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = Po(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && Pt(c)) return c;
    }
  },
  ty = L([U, P_, __, Y], ey),
  ny = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (Po(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  ry = L([U, P_, y_, Y], ny),
  iy = L([U, v_, xv, Lv, ty, ry, Fv, Tv, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = Po(e, c);
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
  ay = L([U, y_, xv, Lv, Tv, Fv, ty, ry, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = Po(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Dt(a[0] - a[1]) * 2 * m
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
            .filter((e) => !Ot(e.coordinate))
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
  oy = L([U, y_, Lv, Fv, ty, ry, Y], (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = Po(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Dt(r[0] - r[1]) * 2 * l : l),
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
  sy = L(__, Lv, (e, t) => {
    if (e != null && t != null) return i_(i_({}, e), {}, { scale: t });
  });
L(
  (e, t, n) => g_(e, n),
  L([__, xv, yv, Iv], Cv),
  (e, t) => {
    if (e != null && t != null) return i_(i_({}, e), {}, { scale: t });
  },
);
var cy = L([U, ss, cs], (e, t, n) => {
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
  ly = (e) => e.options.defaultTooltipEventType,
  uy = (e) => e.options.validateTooltipEventTypes;
function dy(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function fy(e, t) {
  return dy(t, ly(e), uy(e));
}
function py(e) {
  return I((t) => fy(t, e));
}
var my = (e, t) => {
    var n,
      r = Number(t);
    if (!(Ot(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  hy = (e) => e.tooltip.settings,
  gy = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  _y = _a({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: gy, hover: gy },
      axisInteraction: { click: gy, hover: gy },
      keyboardInteraction: gy,
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
          e.tooltipItemPayloads.push(yi(t.payload));
        },
        prepare: qi(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = mi(e).tooltipItemPayloads.indexOf(yi(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: qi(),
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
    addTooltipEntrySettings: vy,
    removeTooltipEntrySettings: yy,
    setTooltipSettingsState: by,
    setActiveMouseOverItemIndex: xy,
    mouseLeaveItem: Sy,
    mouseLeaveChart: Cy,
    setActiveClickItemIndex: wy,
    setMouseOverAxisIndex: Ty,
    setMouseClickAxisIndex: Ey,
    setSyncInteraction: Dy,
    setKeyboardInteraction: Oy,
  } = _y.actions,
  ky = _y.reducer;
function Ay(e, t) {
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
function jy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ay(Object(n), !0).forEach(function (t) {
          My(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ay(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function My(e, t, n) {
  return (
    (t = Ny(t)) in e
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
function Ny(e) {
  var t = Py(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Py(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Fy(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function Iy(e) {
  return e.index != null;
}
var Ly = (e, t, n, r) => {
    if (t == null) return gy;
    var i = Fy(e, t, n);
    if (i == null) return gy;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (Iy(i)) {
      if (a) return jy(jy({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return jy(jy({}, gy), {}, { coordinate: i.coordinate });
  },
  Ry = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!H(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  zy = (e, t, n, r, i, a, o, s) => {
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
  By = (e, t, n, r) => {
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
  Vy = (e) => e.options.tooltipPayloadSearcher,
  Hy = (e) => e.tooltip;
function Uy(e, t) {
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
function Wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Uy(Object(n), !0).forEach(function (t) {
          Gy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Uy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Gy(e, t, n) {
  return (
    (t = Ky(t)) in e
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
function Ky(e) {
  var t = qy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Jy(e, t) {
  return e ?? t;
}
var Yy = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = Jy(d, s),
          m = Array.isArray(p) ? Eo(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? It(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = Wy(
                  Wy({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  Qo({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: B(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                Qo({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: B(_, h),
                  name: B(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  Xy = L([Z, U, b_, kg, X], bv),
  Zy = L(
    [
      L(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      Z,
      L([X, Zg], x_),
    ],
    w_,
    { memoizeOptions: { resultEqualityCheck: n_ } },
  ),
  Qy = L([Zy], (e) => e.filter(e_)),
  $y = L(
    [L([Zy], k_, { memoizeOptions: { resultEqualityCheck: n_ } }), Xh],
    j_,
  ),
  eb = L([Qy, Xh, Z], $g),
  tb = L([$y, Z, Zy], N_),
  nb = L([Z], G_),
  rb = L([nb, L([Z], (e) => e.allowDataOverflow)], tg),
  ib = L([L([eb, L([Zy], (e) => e.filter(e_)), Og], V_), Xh, X, rb], U_),
  ab = L([$y, Z, L([Zy], D_), Y_, X], Q_, {
    memoizeOptions: { resultEqualityCheck: t_ },
  }),
  ob = L([L([nv, X, Zg], rv), X], lv),
  sb = L([L([av, X, Zg], rv), X], dv),
  cb = L(
    [
      Z,
      U,
      $y,
      tb,
      Og,
      X,
      L(
        [
          Z,
          nb,
          rb,
          ib,
          ab,
          L([ob, L([L([sv, X, Zg], rv), X], pv), sb], Z_),
          U,
          X,
        ],
        hv,
      ),
    ],
    vv,
  ),
  lb = L([Z, cb, L([cb, Z, Xy], wv), X], Ev),
  ub = (e) => Fv(e, X(e), Zg(e), !1),
  db = L([Z, ub], Fg),
  fb = L([Z, Xy, lb, db], Cv),
  pb = L(
    [U, Z, Xy, fb, ub, L([U, tb, Z, X], ey), L([U, tb, Z, X], ny), X],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = Po(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Dt(i[0] - i[1]) * 2 * d
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
  mb = L([ly, uy, hy], (e, t, n) => dy(n.shared, e, t)),
  hb = (e) => e.tooltip.settings.trigger,
  gb = (e) => e.tooltip.settings.defaultIndex,
  _b = L([Hy, mb, hb, gb], Ly),
  vb = L([_b, $y], Ry),
  yb = L([pb, vb], my),
  bb = L([_b], (e) => {
    if (e) return e.dataKey;
  }),
  xb = L([Hy, mb, hb, gb], By),
  Sb = L([_b, L([rs, is, U, V, pb, gb, xb, Vy], zy)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  Cb = L([_b], (e) => e.active),
  wb = L([L([xb, vb, Xh, Qg, yb, Vy, mb], Yy)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function Tb(e, t) {
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
function Eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tb(Object(n), !0).forEach(function (t) {
          Db(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Db(e, t, n) {
  return (
    (t = Ob(t)) in e
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
function Ob(e) {
  var t = kb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ab = () => I(Z),
  jb = () => {
    var e = Ab(),
      t = I(pb),
      n = I(fb);
    return Zo(Eb(Eb({}, e), {}, { scale: n }), t);
  },
  Mb = () => I(kg),
  Nb = (e, t) => t,
  Pb = (e, t, n) => n,
  Fb = (e, t, n, r) => r,
  Ib = L(pb, (e) => (0, or.default)(e, (e) => e.coordinate)),
  Lb = L([Hy, Nb, Pb, Fb], Ly),
  Rb = L([Lb, $y], Ry),
  zb = (e, t, n) => {
    if (t != null) {
      var r = Hy(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Bb = L([Hy, Nb, Pb, Fb], By),
  Vb = L([rs, is, U, V, pb, Fb, Bb, Vy], zy),
  Hb = L([Lb, Vb], (e, t) => e.coordinate ?? t),
  Ub = L(pb, Rb, my),
  Wb = L([Bb, Rb, Xh, Qg, Ub, Vy, Nb], Yy),
  Gb = L([Lb], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Kb = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = es(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = Mo(ns(c, t), o, a, r, i),
          u = ts(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function qb() {
  return (
    (qb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qb.apply(null, arguments)
  );
}
function Jb(e, t) {
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
function Yb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Jb(Object(n), !0).forEach(function (t) {
          Xb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Xb(e, t, n) {
  return (
    (t = Zb(t)) in e
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
function Zb(e) {
  var t = Qb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Qb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $b(e) {
  var {
      coordinate: t,
      payload: n,
      index: r,
      offset: i,
      tooltipAxisBandSize: a,
      layout: o,
      cursor: c,
      tooltipEventType: l,
      chartName: d,
    } = e,
    f = t,
    p = n,
    m = r;
  if (!c || !f || (d !== `ScatterChart` && l !== `axis`)) return null;
  var h, g;
  if (d === `ScatterChart`) ((h = f), (g = $c));
  else if (d === `BarChart`) ((h = el(o, f, i, a)), (g = ru));
  else if (o === `radial`) {
    var { cx: v, cy: y, radius: b, startAngle: x, endAngle: S } = iu(f);
    ((h = {
      cx: v,
      cy: y,
      startAngle: x,
      endAngle: S,
      innerRadius: b,
      outerRadius: b,
    }),
      (g = du));
  } else ((h = { points: fu(o, f, i) }), (g = Hc));
  var C = typeof c == `object` && `className` in c ? c.className : void 0,
    w = Yb(
      Yb(Yb(Yb({ stroke: `#ccc`, pointerEvents: `none` }, i), h), _(c)),
      {},
      {
        payload: p,
        payloadIndex: m,
        className: u(`recharts-tooltip-cursor`, C),
      },
    );
  return (0, s.isValidElement)(c)
    ? (0, s.cloneElement)(c, w)
    : (0, s.createElement)(g, w);
}
function ex(e) {
  var t = jb(),
    n = Zs(),
    r = ec(),
    i = Mb();
  return s.createElement(
    $b,
    qb({}, e, {
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
var tx = (0, s.createContext)(null),
  nx = () => (0, s.useContext)(tx),
  rx = e(
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
  ix = new rx(),
  ax = `recharts.syncEvent.tooltip`,
  ox = `recharts.syncEvent.brush`;
function sx(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!Ot(n)) return e?.[n];
  }
}
var cx = _a({
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
  lx = cx.reducer,
  { createEventEmitter: ux } = cx.actions;
function dx(e) {
  return e.tooltip.syncInteraction;
}
var fx = _a({
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
    setChartData: px,
    setDataStartEndIndexes: mx,
    setComputedData: hx,
  } = fx.actions,
  gx = fx.reducer,
  _x = [`x`, `y`];
function vx(e, t) {
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
function yx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vx(Object(n), !0).forEach(function (t) {
          bx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bx(e, t, n) {
  return (
    (t = xx(t)) in e
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
function xx(e) {
  var t = Sx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cx(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = wx(e, t);
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
function wx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Tx = () => {};
function Ex() {
  var e = I(Ag),
    t = I(Mg),
    n = F(),
    r = I(jg),
    i = I(pb),
    a = ec(),
    o = Ys(),
    c = I((e) => e.rootProps.className);
  (0, s.useEffect)(() => {
    if (e == null) return Tx;
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
              m = Cx(d, _x),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = yx(
                yx({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              yx(
                yx({}, c),
                {},
                { payload: yx(yx({}, c.payload), {}, { coordinate: y }) },
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
              Dy({
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
              Dy({
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
      ix.on(ax, s),
      () => {
        ix.off(ax, s);
      }
    );
  }, [c, n, t, e, r, i, a, o]);
}
function Dx() {
  var e = I(Ag),
    t = I(Mg),
    n = F();
  (0, s.useEffect)(() => {
    if (e == null) return Tx;
    var r = (r, i, a) => {
      t !== a && e === r && n(mx(i));
    };
    return (
      ix.on(ox, r),
      () => {
        ix.off(ox, r);
      }
    );
  }, [n, t, e]);
}
function Ox() {
  var e = F();
  ((0, s.useEffect)(() => {
    e(ux());
  }, [e]),
    Ex(),
    Dx());
}
function kx(e, t, n, r, i, a) {
  var o = I((n) => zb(n, e, t)),
    c = I(Mg),
    l = I(Ag),
    u = I(jg),
    d = I(dx)?.active,
    f = Ys();
  (0, s.useEffect)(() => {
    if (!d && l != null && c != null) {
      var e = Dy({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: f,
      });
      ix.emit(ax, l, e, c);
    }
  }, [d, n, o, i, r, c, l, u, a, f]);
}
function Ax(e, t) {
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
function jx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ax(Object(n), !0).forEach(function (t) {
          Mx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ax(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Mx(e, t, n) {
  return (
    (t = Nx(t)) in e
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
function Nx(e) {
  var t = Px(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Px(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Fx(e) {
  return e.dataKey;
}
function Ix(e, t) {
  return s.isValidElement(e)
    ? s.cloneElement(e, t)
    : typeof e == `function`
      ? s.createElement(e, t)
      : s.createElement(hc, t);
}
var Lx = [],
  Rx = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !Oc.isSsr,
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
function zx(e) {
  var t = ol(e, Rx),
    {
      active: n,
      allowEscapeViewBox: r,
      animationDuration: i,
      animationEasing: a,
      content: o,
      filterNull: l,
      isAnimationActive: u,
      offset: d,
      payloadUniqBy: f,
      position: p,
      reverseDirection: m,
      useTranslate3d: h,
      wrapperStyle: g,
      cursor: _,
      shared: v,
      trigger: y,
      defaultIndex: b,
      portal: x,
      axisId: S,
    } = t,
    C = F(),
    w = typeof b == `number` ? String(b) : b;
  (0, s.useEffect)(() => {
    C(by({ shared: v, trigger: y, axisId: S, active: n, defaultIndex: w }));
  }, [C, v, y, S, n, w]);
  var T = Ys(),
    E = kc(),
    D = py(v),
    { activeIndex: O, isActive: k } = I((e) => Gb(e, D, y, w)),
    ee = I((e) => Wb(e, D, y, w)),
    A = I((e) => Ub(e, D, y, w)),
    j = I((e) => Hb(e, D, y, w)),
    M = ee,
    te = nx(),
    ne = n ?? k,
    [re, ie] = ur([M, ne]),
    ae = D === `axis` ? A : void 0;
  kx(D, y, j, ae, O, ne);
  var oe = x ?? te;
  if (oe == null) return null;
  var se = M ?? Lx;
  (ne || (se = Lx),
    l &&
      se.length &&
      (se = jn(
        M.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        f,
        Fx,
      )));
  var ce = se.length > 0,
    le = s.createElement(
      Dc,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: u,
        active: ne,
        coordinate: j,
        hasPayload: ce,
        offset: d,
        position: p,
        reverseDirection: m,
        useTranslate3d: h,
        viewBox: T,
        wrapperStyle: g,
        lastBoundingBox: re,
        innerRef: ie,
        hasPortalFromProps: !!x,
      },
      Ix(
        o,
        jx(
          jx({}, t),
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
  return s.createElement(
    s.Fragment,
    null,
    (0, c.createPortal)(le, oe),
    ne &&
      s.createElement(ex, {
        cursor: _,
        tooltipEventType: D,
        coordinate: j,
        payload: M,
        index: O,
      }),
  );
}
var Bx = (e) => null;
Bx.displayName = `Cell`;
function Vx(e, t, n) {
  return (
    (t = Hx(t)) in e
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
function Hx(e) {
  var t = Ux(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ux(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Wx = class {
  constructor(e) {
    (Vx(this, `cache`, new Map()), (this.maxSize = e));
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
function Gx(e, t) {
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
var Xx = Kx({}, { cacheSize: 2e3, enableCache: !0 }),
  Zx = new Wx(Xx.cacheSize),
  Qx = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  $x = `recharts_measurement_span`;
function eS(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var tS = (e, t) => {
    try {
      var n = document.getElementById($x);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, $x),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, Qx, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  nS = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Oc.isSsr) return { width: 0, height: 0 };
    var n = Xx.measureText || tS;
    if (!Xx.enableCache) return n(e, t);
    var r = eS(e, t),
      i = Zx.get(r);
    if (i) return i;
    var a = n(e, t);
    return (Zx.set(r, a), a);
  },
  rS = (e) => {
    var t = Kx(Kx({}, Xx), e);
    (t.cacheSize !== Xx.cacheSize && (Zx = new Wx(t.cacheSize)), (Xx = t));
  },
  iS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  aS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  oS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  sS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  cS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  lS = Object.keys(cS),
  uS = `NaN`;
function dS(e, t) {
  return e * cS[t];
}
var fS = class e {
  static parse(t) {
    var [, n, r] = sS.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      Ot(e) && (this.unit = ``),
      t !== `` && !oS.test(t) && ((this.num = NaN), (this.unit = ``)),
      lS.includes(t) && ((this.num = dS(e, t)), (this.unit = `px`)));
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
    return Ot(this.num);
  }
};
function pS(e) {
  if (e.includes(uS)) return uS;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = iS.exec(t) ?? [],
      a = fS.parse(n ?? ``),
      o = fS.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return uS;
    t = t.replace(iS, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = aS.exec(t) ?? [],
      d = fS.parse(c ?? ``),
      f = fS.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return uS;
    t = t.replace(aS, p.toString());
  }
  return t;
}
var mS = /\(([^()]*)\)/;
function hS(e) {
  for (var t = e, n; (n = mS.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(mS, pS(r));
  }
  return t;
}
function gS(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = hS(t)), (t = pS(t)), t);
}
function _S(e) {
  try {
    return gS(e);
  } catch {
    return uS;
  }
}
function vS(e) {
  var t = _S(e.slice(5, -1));
  return t === uS ? `` : t;
}
var yS = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  bS = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function xS() {
  return (
    (xS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xS.apply(null, arguments)
  );
}
function SS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = CS(e, t);
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
function CS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var wS = /[ \f\n\r\t\v\u2028\u2029]+/,
  TS = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        P(t) || (i = n ? t.toString().split(``) : t.toString().split(wS)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: nS(e, r).width,
          })),
          spaceWidth: n ? 0 : nS(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  ES = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = N(a),
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
          var t = TS({
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
  DS = (e) => [{ words: P(e) ? [] : e.toString().split(wS) }],
  OS = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !Oc.isSsr) {
      var s,
        c,
        l = TS({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return DS(r);
      return ES(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return DS(r);
  },
  kS = `#808080`,
  AS = (0, s.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: c = `start`,
        verticalAnchor: l = `end`,
        fill: d = kS,
      } = e,
      f = SS(e, yS),
      p = (0, s.useMemo)(
        () =>
          OS({
            breakAll: f.breakAll,
            children: f.children,
            maxLines: f.maxLines,
            scaleToFit: o,
            style: f.style,
            width: f.width,
          }),
        [f.breakAll, f.children, f.maxLines, o, f.style, f.width],
      ),
      { dx: m, dy: h, angle: g, className: _, breakAll: y } = f,
      b = SS(f, bS);
    if (!At(n) || !At(r) || p.length === 0) return null;
    var x = n + (N(m) ? m : 0),
      S = r + (N(h) ? h : 0),
      C;
    switch (l) {
      case `start`:
        C = vS(`calc(${a})`);
        break;
      case `middle`:
        C = vS(`calc(${(p.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        C = vS(`calc(${p.length - 1} * -${i})`);
    }
    var w = [];
    if (o) {
      var T = p[0].width,
        { width: E } = f;
      w.push(`scale(${N(E) ? E / T : 1})`);
    }
    return (
      g && w.push(`rotate(${g}, ${x}, ${S})`),
      w.length && (b.transform = w.join(` `)),
      s.createElement(
        `text`,
        xS({}, v(b), {
          ref: t,
          x,
          y: S,
          className: u(`recharts-text`, _),
          textAnchor: c,
          fill: d.includes(`url`) ? kS : d,
        }),
        p.map((e, t) => {
          var n = e.words.join(y ? `` : ` `);
          return s.createElement(
            `tspan`,
            { x, dy: t === 0 ? C : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
AS.displayName = `Text`;
var jS = [`labelRef`];
function MS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = NS(e, t);
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
function NS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function PS(e, t) {
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
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PS(Object(n), !0).forEach(function (t) {
          FS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function FS(e, t, n) {
  return (
    (t = IS(t)) in e
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
function IS(e) {
  var t = LS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function LS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function RS() {
  return (
    (RS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    RS.apply(null, arguments)
  );
}
var zS = (0, s.createContext)(null),
  BS = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, s.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return s.createElement(zS.Provider, { value: o }, a);
  },
  VS = () => {
    var e = (0, s.useContext)(zS),
      t = Ys();
    return e || t;
  },
  HS = (0, s.createContext)(null),
  US = () => {
    var e = (0, s.useContext)(HS),
      t = I(Jg);
    return e || t;
  },
  WS = (e) => {
    var { value: t, formatter: n } = e,
      r = P(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  GS = (e) => e != null && typeof e == `function`,
  KS = (e, t) => Dt(t - e) * Math.min(Math.abs(t - e), 360),
  qS = (e, t, n, r, i) => {
    var { offset: a, className: o } = e,
      {
        cx: c,
        cy: l,
        innerRadius: d,
        outerRadius: f,
        startAngle: p,
        endAngle: m,
        clockWise: h,
      } = i,
      g = (d + f) / 2,
      _ = KS(p, m),
      v = _ >= 0 ? 1 : -1,
      y,
      b;
    switch (t) {
      case `insideStart`:
        ((y = p + v * a), (b = h));
        break;
      case `insideEnd`:
        ((y = m - v * a), (b = !h));
        break;
      case `end`:
        ((y = m + v * a), (b = h));
        break;
      default:
        throw Error(`Unsupported position ${t}`);
    }
    b = _ <= 0 ? b : !b;
    var x = z(c, l, g, y),
      S = z(c, l, g, y + (b ? 1 : -1) * 359),
      C = `M${x.x},${x.y}
    A${g},${g},0,1,${+!b},
    ${S.x},${S.y}`,
      w = P(e.id) ? Mt(`recharts-radial-line-`) : e.id;
    return s.createElement(
      `text`,
      RS({}, r, {
        dominantBaseline: `central`,
        className: u(`recharts-radial-bar-label`, o),
      }),
      s.createElement(`defs`, null, s.createElement(`path`, { id: w, d: C })),
      s.createElement(`textPath`, { xlinkHref: `#${w}` }, n),
    );
  },
  JS = (e, t, n) => {
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
      var { x: u, y: d } = z(r, i, o + t, l);
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
    var { x: f, y: p } = z(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  YS = (e) => `cx` in e && N(e.cx),
  XS = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !YS(n) && (a = n);
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
                        (N(i.x) || kt(i.x)) &&
                        (N(i.y) || kt(i.y))
                      ? Q(
                          {
                            x: o + Nt(i.x, c),
                            y: s + Nt(i.y, l),
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
  ZS = { offset: 5 };
function QS(e) {
  var t = ol(e, ZS),
    {
      viewBox: n,
      position: r,
      value: i,
      children: a,
      content: o,
      className: c = ``,
      textBreakAll: l,
      labelRef: d,
    } = t,
    f = US(),
    p = VS(),
    m = n || (r === `center` ? p : (f ?? p));
  if (
    !m ||
    (P(i) && P(a) && !(0, s.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var h = Q(Q({}, t), {}, { viewBox: m });
  if ((0, s.isValidElement)(o)) {
    var { labelRef: g } = h,
      _ = MS(h, jS);
    return (0, s.cloneElement)(o, _);
  }
  var y;
  if (typeof o == `function`) {
    if (((y = (0, s.createElement)(o, h)), (0, s.isValidElement)(y))) return y;
  } else y = WS(t);
  var b = YS(m),
    x = v(t);
  if (b && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return qS(t, r, y, x, m);
  var S = b ? JS(m, t.offset, t.position) : XS(t, m);
  return s.createElement(
    AS,
    RS({ ref: d, className: u(`recharts-label`, c) }, x, S, { breakAll: l }),
    y,
  );
}
QS.displayName = `Label`;
var $S = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? s.createElement(QS, RS({ key: `label-implicit` }, r))
    : At(e)
      ? s.createElement(QS, RS({ key: `label-implicit`, value: e }, r))
      : (0, s.isValidElement)(e)
        ? e.type === QS
          ? (0, s.cloneElement)(e, Q({ key: `label-implicit` }, r))
          : s.createElement(QS, RS({ key: `label-implicit`, content: e }, r))
        : GS(e)
          ? s.createElement(QS, RS({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? s.createElement(QS, RS({}, e, { key: `label-implicit` }, r))
            : null;
};
function eC(e) {
  var { label: t, labelRef: n } = e;
  return $S(t, VS(), n) || null;
}
var tC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  nC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  rC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = tC(),
      n = nC(),
      r = on();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  iC = e(
    n((e, t) => {
      t.exports = rC().last;
    })(),
  ),
  aC = [`valueAccessor`],
  oC = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function sC() {
  return (
    (sC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sC.apply(null, arguments)
  );
}
function cC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = lC(e, t);
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
function lC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var uC = (e) => (Array.isArray(e.value) ? (0, iC.default)(e.value) : e.value),
  dC = (0, s.createContext)(void 0),
  fC = dC.Provider,
  pC = (0, s.createContext)(void 0);
pC.Provider;
function mC() {
  return (0, s.useContext)(dC);
}
function hC() {
  return (0, s.useContext)(pC);
}
function gC(e) {
  var { valueAccessor: t = uC } = e,
    n = cC(e, aC),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    c = cC(n, oC),
    l = mC(),
    u = hC(),
    d = l || u;
  return !d || !d.length
    ? null
    : s.createElement(
        k,
        { className: `recharts-label-list` },
        d.map((e, i) => {
          var l = P(r) ? t(e, i) : B(e && e.payload, r),
            u = P(a) ? {} : { id: `${a}-${i}` };
          return s.createElement(
            QS,
            sC({ key: `label-${i}` }, v(e), c, u, {
              fill: n.fill ?? e.fill,
              parentViewBox: e.parentViewBox,
              value: l,
              textBreakAll: o,
              viewBox: e.viewBox,
              index: i,
            }),
          );
        }),
      );
}
gC.displayName = `LabelList`;
function _C(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? s.createElement(gC, { key: `labelList-implicit` })
      : s.isValidElement(t) || GS(t)
        ? s.createElement(gC, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? s.createElement(
              gC,
              sC({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var vC = _a({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = yi(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = yi(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: yC,
    removeRadiusAxis: bC,
    addAngleAxis: xC,
    removeAngleAxis: SC,
  } = vC.actions,
  CC = vC.reducer,
  wC = n((e) => {
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
  TC = n((e, t) => {
    t.exports = wC();
  })(),
  EC = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  DC = null,
  OC = null,
  kC = (e) => {
    if (e === DC && Array.isArray(OC)) return OC;
    var t = [];
    return (
      s.Children.forEach(e, (e) => {
        P(e) ||
          ((0, TC.isFragment)(e)
            ? (t = t.concat(kC(e.props.children)))
            : t.push(e));
      }),
      (OC = t),
      (DC = e),
      t
    );
  };
function AC(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => EC(e)) : [EC(t)]),
    kC(e).forEach((e) => {
      var t =
        (0, Et.default)(e, `type.displayName`) ||
        (0, Et.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var jC = (e) =>
    e && typeof e == `object` && `clipDot` in e ? !!e.clipDot : !0,
  MC = n((e) => {
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
  NC = n((e, t) => {
    t.exports = MC().isPlainObject;
  });
function PC(e, t) {
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
function FC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PC(Object(n), !0).forEach(function (t) {
          IC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function IC(e, t, n) {
  return (
    (t = LC(t)) in e
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
function LC(e) {
  var t = RC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
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
var BC = (e, t, n, r, i) => {
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
  VC = {
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
  HC = (e) => {
    var t = ol(e, VC),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: c } = t,
      {
        animationEasing: l,
        animationDuration: d,
        animationBegin: f,
        isUpdateAnimationActive: p,
      } = t,
      m = (0, s.useRef)(null),
      [h, g] = (0, s.useState)(-1),
      _ = (0, s.useRef)(i),
      y = (0, s.useRef)(a),
      b = (0, s.useRef)(o),
      x = (0, s.useRef)(n),
      S = (0, s.useRef)(r),
      C = Wl(e, `trapezoid-`);
    if (
      ((0, s.useEffect)(() => {
        if (m.current && m.current.getTotalLength)
          try {
            var e = m.current.getTotalLength();
            e && g(e);
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
    var w = u(`recharts-trapezoid`, c);
    if (!p)
      return s.createElement(
        `g`,
        null,
        s.createElement(
          `path`,
          zC({}, v(t), { className: w, d: BC(n, r, i, a, o) }),
        ),
      );
    var T = _.current,
      E = y.current,
      D = b.current,
      O = x.current,
      k = S.current,
      ee = `0px ${h === -1 ? 1 : h}px`,
      A = `${h}px 0px`,
      j = hl([`strokeDasharray`], d, l);
    return s.createElement(
      Ul,
      {
        animationId: C,
        key: C,
        canBegin: h > 0,
        duration: d,
        easing: l,
        isActive: p,
        begin: f,
      },
      (e) => {
        var c = Ft(T, i, e),
          l = Ft(E, a, e),
          u = Ft(D, o, e),
          d = Ft(O, n, e),
          f = Ft(k, r, e);
        m.current &&
          ((_.current = c),
          (y.current = l),
          (b.current = u),
          (x.current = d),
          (S.current = f));
        var p =
          e > 0
            ? { transition: j, strokeDasharray: A }
            : { strokeDasharray: ee };
        return s.createElement(
          `path`,
          zC({}, v(t), {
            className: w,
            d: BC(d, f, c, l, u),
            ref: m,
            style: FC(FC({}, p), t.style),
          }),
        );
      },
    );
  },
  UC = e(NC()),
  WC = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function GC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = KC(e, t);
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
function KC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function qC(e, t) {
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
function JC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qC(Object(n), !0).forEach(function (t) {
          YC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function YC(e, t, n) {
  return (
    (t = XC(t)) in e
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
function XC(e) {
  var t = ZC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ZC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function QC(e, t) {
  return JC(JC({}, t), e);
}
function $C(e, t) {
  return e === `symbols`;
}
function ew(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return s.createElement(ru, n);
    case `trapezoid`:
      return s.createElement(HC, n);
    case `sector`:
      return s.createElement(du, n);
    case `symbols`:
      if ($C(t, n)) return s.createElement(Qt, n);
      break;
    default:
      return null;
  }
}
function tw(e) {
  return (0, s.isValidElement)(e) ? e.props : e;
}
function nw(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = QC,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = GC(e, WC),
    c;
  if ((0, s.isValidElement)(t))
    c = (0, s.cloneElement)(t, JC(JC({}, o), tw(t)));
  else if (typeof t == `function`) c = t(o);
  else if ((0, UC.default)(t) && typeof t != `boolean`) {
    var l = r(t, o);
    c = s.createElement(ew, { shapeType: n, elementProps: l });
  } else {
    var u = o;
    c = s.createElement(ew, { shapeType: n, elementProps: u });
  }
  return a ? s.createElement(k, { className: i }, c) : c;
}
var rw = (e, t) => {
    var n = F();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          xy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  iw = (e) => {
    var t = F();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(Sy()));
    };
  },
  aw = (e, t) => {
    var n = F();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          wy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function ow(e) {
  var { fn: t, args: n } = e,
    r = F(),
    i = Cs();
  return (
    (0, s.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(vy(e)),
          () => {
            r(yy(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var sw = () => {};
function cw(e) {
  var { legendPayload: t } = e,
    n = F(),
    r = Cs();
  return (
    (0, s.useLayoutEffect)(
      () =>
        r
          ? sw
          : (n(ac(t)),
            () => {
              n(oc(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var lw =
  s.useId ??
  (() => {
    var [e] = s.useState(() => Mt(`uid-`));
    return e;
  });
function uw(e, t) {
  var n = lw();
  return t || (e ? `${e}-${n}` : n);
}
var dw = (0, s.createContext)(void 0),
  fw = (e) => {
    var { id: t, type: n, children: r } = e,
      i = uw(`recharts-${n}`, t);
    return s.createElement(dw.Provider, { value: i }, r(i));
  },
  pw = _a({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(yi(t.payload));
        },
        prepare: qi(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = mi(e).cartesianItems.indexOf(yi(n));
          i > -1 && (e.cartesianItems[i] = yi(r));
        },
        prepare: qi(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = mi(e).cartesianItems.indexOf(yi(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: qi(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(yi(t.payload));
        },
        prepare: qi(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = mi(e).polarItems.indexOf(yi(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: qi(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: mw,
    replaceCartesianGraphicalItem: hw,
    removeCartesianGraphicalItem: gw,
    addPolarGraphicalItem: _w,
    removePolarGraphicalItem: vw,
  } = pw.actions,
  yw = pw.reducer;
function bw(e) {
  var t = F(),
    n = (0, s.useRef)(null);
  return (
    (0, s.useLayoutEffect)(() => {
      (n.current === null
        ? t(mw(e))
        : n.current !== e && t(hw({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, s.useLayoutEffect)(
      () => () => {
        n.current &&= (t(gw(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function xw(e, t) {
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
function Sw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xw(Object(n), !0).forEach(function (t) {
          Cw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Cw(e, t, n) {
  return (
    (t = ww(t)) in e
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
function ww(e) {
  var t = Tw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Tw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ew = _a({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = yi(t.payload);
        },
        prepare: qi(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: qi(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = yi(t.payload);
        },
        prepare: qi(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: qi(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = yi(t.payload);
        },
        prepare: qi(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: qi(),
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
          e.yAxis[n] = Sw(
            Sw({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: Dw,
    removeXAxis: Ow,
    addYAxis: kw,
    removeYAxis: Aw,
    addZAxis: jw,
    removeZAxis: Mw,
    updateYAxisWidth: Nw,
  } = Ew.actions,
  Pw = Ew.reducer,
  Fw = L(
    [
      L([V], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      rs,
      is,
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
  Iw = () => I(Fw),
  Lw = () => I(wb),
  Rw = [`x`, `y`];
function zw() {
  return (
    (zw = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zw.apply(null, arguments)
  );
}
function Bw(e, t) {
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
function Vw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bw(Object(n), !0).forEach(function (t) {
          Hw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hw(e, t, n) {
  return (
    (t = Uw(t)) in e
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
function Uw(e) {
  var t = Ww(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ww(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Gw(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Kw(e, t);
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
function Kw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function qw(e, t) {
  var { x: n, y: r } = e,
    i = Gw(e, Rw),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return Vw(
    Vw(Vw(Vw(Vw({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function Jw(e) {
  return s.createElement(
    nw,
    zw(
      {
        shapeType: `rectangle`,
        propTransformer: qw,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var Yw = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, i) => {
      if (N(e)) return e;
      var a = N(n) || P(n);
      return a ? e(n, i) : (!a && r(!1), t);
    };
  },
  Xw = _a({
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
  { addErrorBar: Zw, replaceErrorBar: Qw, removeErrorBar: $w } = Xw.actions,
  eT = Xw.reducer,
  tT = [`children`];
function nT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = rT(e, t);
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
function rT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var iT = (0, s.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function aT(e) {
  var { children: t } = e,
    n = nT(e, tT);
  return s.createElement(iT.Provider, { value: n }, t);
}
function oT(e, t) {
  var n = I((t) => d_(t, e)),
    r = I((e) => m_(e, t)),
    i = n?.allowDataOverflow ?? l_.allowDataOverflow,
    a = r?.allowDataOverflow ?? f_.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function sT(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = Iw(),
    { needClipX: a, needClipY: o, needClip: c } = oT(t, n);
  if (!c) return null;
  var { x: l, y: u, width: d, height: f } = i;
  return s.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    s.createElement(`rect`, {
      x: a ? l : l - d / 2,
      y: o ? u : u - f / 2,
      width: a ? d : d * 2,
      height: o ? f : f * 2,
    }),
  );
}
var cT = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  lT = [`value`, `background`, `tooltipPosition`],
  uT = [`id`],
  dT = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function fT() {
  return (
    (fT = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fT.apply(null, arguments)
  );
}
function pT(e, t) {
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
function mT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pT(Object(n), !0).forEach(function (t) {
          hT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hT(e, t, n) {
  return (
    (t = gT(t)) in e
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
function gT(e) {
  var t = _T(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _T(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = yT(e, t);
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
function yT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var bT = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: $o(n, t), payload: e },
  ];
};
function xT(e) {
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
      name: $o(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function ST(e) {
  var t = I(vb),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: c, onClick: l } = a,
    u = vT(a, cT),
    d = rw(o, r),
    f = iw(c),
    p = aw(l, r);
  if (!i || n == null) return null;
  var m = _(i);
  return s.createElement(
    s.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: c } = e,
        l = vT(e, lT);
      if (!o) return null;
      var h = d(e, n),
        g = f(e, n),
        _ = p(e, n),
        v = mT(
          mT(
            mT(
              mT(
                mT({ option: i, isActive: String(n) === t }, l),
                {},
                { fill: `#eee` },
                o,
              ),
              m,
            ),
            tn(u, e, n),
          ),
          {},
          {
            onMouseEnter: h,
            onMouseLeave: g,
            onClick: _,
            dataKey: r,
            index: n,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return s.createElement(Jw, fT({ key: `background-bar-${n}` }, v));
    }),
  );
}
function CT(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return mT(
        mT({}, t),
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
  return s.createElement(fC, { value: t ? i : void 0 }, n);
}
function wT(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    c = I(vb),
    l = I(bb),
    u = n && String(a) === c && (l == null || o === l),
    d = u ? n : t;
  return s.createElement(
    Jw,
    fT({}, r, { name: String(r.name) }, i, {
      isActive: u,
      option: d,
      index: a,
      dataKey: o,
    }),
  );
}
function TT(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return s.createElement(
    Jw,
    fT({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function ET(e) {
  var { data: t, props: n } = e,
    r = g(n),
    { id: i } = r,
    a = vT(r, uT),
    { shape: o, dataKey: c, activeBar: l } = n,
    { onMouseEnter: u, onClick: d, onMouseLeave: f } = n,
    p = vT(n, dT),
    m = rw(u, c),
    h = iw(f),
    _ = aw(d, c);
  return t
    ? s.createElement(
        s.Fragment,
        null,
        t.map((e, t) =>
          s.createElement(
            k,
            fT(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              tn(p, e, t),
              {
                onMouseEnter: m(e, t),
                onMouseLeave: h(e, t),
                onClick: _(e, t),
              },
            ),
            l
              ? s.createElement(wT, {
                  shape: o,
                  activeBar: l,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: c,
                })
              : s.createElement(TT, {
                  shape: o,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: c,
                }),
          ),
        ),
      )
    : null;
}
function DT(e) {
  var { props: t, previousRectanglesRef: n } = e,
    {
      data: r,
      layout: i,
      isAnimationActive: a,
      animationBegin: o,
      animationDuration: c,
      animationEasing: l,
      onAnimationEnd: u,
      onAnimationStart: d,
    } = t,
    f = n.current,
    p = Wl(t, `recharts-bar-`),
    [m, h] = (0, s.useState)(!1),
    g = !m,
    _ = (0, s.useCallback)(() => {
      (typeof u == `function` && u(), h(!1));
    }, [u]),
    v = (0, s.useCallback)(() => {
      (typeof d == `function` && d(), h(!0));
    }, [d]);
  return s.createElement(
    CT,
    { showLabels: g, rects: r },
    s.createElement(
      Ul,
      {
        animationId: p,
        begin: o,
        duration: c,
        isActive: a,
        easing: l,
        onAnimationEnd: _,
        onAnimationStart: v,
        key: p,
      },
      (e) => {
        var a =
          e === 1
            ? r
            : r?.map((t, n) => {
                var r = f && f[n];
                if (r)
                  return mT(
                    mT({}, t),
                    {},
                    {
                      x: Ft(r.x, t.x, e),
                      y: Ft(r.y, t.y, e),
                      width: Ft(r.width, t.width, e),
                      height: Ft(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = Ft(0, t.height, e);
                  return mT(
                    mT({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = Ft(0, t.width, e);
                return mT(mT({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : s.createElement(
                k,
                null,
                s.createElement(ET, { props: t, data: a }),
              )
        );
      },
    ),
    s.createElement(_C, { label: t.label }),
    t.children,
  );
}
function OT(e) {
  var t = (0, s.useRef)(null);
  return s.createElement(DT, { previousRectanglesRef: t, props: e });
}
var kT = 0,
  AT = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: B(e, t) };
  },
  jT = class extends s.PureComponent {
    render() {
      var {
        hide: e,
        data: t,
        dataKey: n,
        className: r,
        xAxisId: i,
        yAxisId: a,
        needClip: o,
        background: c,
        id: l,
      } = this.props;
      if (e || t == null) return null;
      var d = u(`recharts-bar`, r),
        f = l;
      return s.createElement(
        k,
        { className: d, id: l },
        o &&
          s.createElement(
            `defs`,
            null,
            s.createElement(sT, { clipPathId: f, xAxisId: i, yAxisId: a }),
          ),
        s.createElement(
          k,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${f})` : void 0,
          },
          s.createElement(ST, {
            data: t,
            dataKey: n,
            background: c,
            allOtherBarProps: this.props,
          }),
          s.createElement(OT, this.props),
        ),
      );
    }
  },
  MT = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !Oc.isSsr,
    legendType: `rect`,
    minPointSize: kT,
    xAxisId: 0,
    yAxisId: 0,
  };
function NT(e) {
  var {
      xAxisId: t,
      yAxisId: n,
      hide: r,
      legendType: i,
      minPointSize: a,
      activeBar: o,
      animationBegin: c,
      animationDuration: l,
      animationEasing: u,
      isAnimationActive: d,
    } = e,
    { needClip: f } = oT(t, n),
    p = ec(),
    m = Cs(),
    h = AC(e.children, Bx),
    g = I((r) => tE(r, t, n, m, e.id, h));
  if (p !== `vertical` && p !== `horizontal`) return null;
  var _,
    v = g?.[0];
  return (
    (_ =
      v == null || v.height == null || v.width == null
        ? 0
        : p === `vertical`
          ? v.height / 2
          : v.width / 2),
    s.createElement(
      aT,
      {
        xAxisId: t,
        yAxisId: n,
        data: g,
        dataPointFormatter: AT,
        errorBarOffset: _,
      },
      s.createElement(
        jT,
        fT({}, e, {
          layout: p,
          needClip: f,
          data: g,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: c,
          animationDuration: l,
          animationEasing: u,
          isAnimationActive: d,
        }),
      ),
    )
  );
}
function PT(e) {
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
    _ = Go({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u ? (h = zo(u[d], g)) : ((h = B(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = Yw(r, kT)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Wo({
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
          ((x = Ot(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = Dt(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = Wo({
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
          var ee = Dt(b || C) * (Math.abs(C) - Math.abs(b));
          b += ee;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : mT(
            mT({}, e),
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
function FT(e) {
  var t = ol(e, MT),
    n = Cs();
  return s.createElement(fw, { id: t.id, type: `bar` }, (e) =>
    s.createElement(
      s.Fragment,
      null,
      s.createElement(cw, { legendPayload: bT(t) }),
      s.createElement(ow, { fn: xT, args: t }),
      s.createElement(bw, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: Ho(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      s.createElement(NT, fT({}, t, { id: e })),
    ),
  );
}
var IT = s.memo(FT);
IT.displayName = `Bar`;
function LT(e, t) {
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
function RT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LT(Object(n), !0).forEach(function (t) {
          zT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zT(e, t, n) {
  return (
    (t = BT(t)) in e
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
function BT(e) {
  var t = VT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var HT = (e, t) => t,
  UT = (e, t, n) => n,
  WT = (e, t, n, r) => r,
  GT = L([S_, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  KT = L([GT], (e) => e?.maxBarSize),
  qT = (e, t, n, r, i, a) => a,
  JT = (e, t, n) => {
    var r = n ?? e;
    if (!P(r)) return Nt(r, t, 0);
  },
  YT = L([U, S_, HT, UT, WT], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  XT = (e, t, n, r) =>
    U(e) === `horizontal` ? H_(e, `yAxis`, n, r) : H_(e, `xAxis`, t, r),
  ZT = L(
    [
      YT,
      Dg,
      (e, t, n) =>
        U(e) === `horizontal` ? $v(e, `xAxis`, t) : $v(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(e_),
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
            barSize: JT(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: JT(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  QT = (e, t, n, r, i) => {
    var a = GT(e, t, n, r, i);
    if (a != null) {
      var o = U(e),
        s = wg(e),
        { maxBarSize: c } = a,
        l = P(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = sy(e, `xAxis`, t, r)), (d = oy(e, `xAxis`, t, r)))
          : ((u = sy(e, `yAxis`, n, r)), (d = oy(e, `yAxis`, n, r))),
        Zo(u, d, !0) ?? l ?? 0
      );
    }
  },
  $T = (e, t, n, r) => {
    var i = U(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = sy(e, `xAxis`, t, r)), (o = oy(e, `xAxis`, t, r)))
        : ((a = sy(e, `yAxis`, n, r)), (o = oy(e, `yAxis`, n, r))),
      Zo(a, o)
    );
  };
function eE(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Nt(e, n, 0, !0),
      s,
      c = [];
    if (H(r[0].barSize)) {
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
      var p = Nt(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = H(i) ? Math.min(m, i) : m;
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
var tE = L(
    [
      V,
      xs,
      (e, t, n, r) => sy(e, `xAxis`, t, r),
      (e, t, n, r) => sy(e, `yAxis`, n, r),
      (e, t, n, r) => oy(e, `xAxis`, t, r),
      (e, t, n, r) => oy(e, `yAxis`, n, r),
      L(
        [
          L([ZT, wg, Tg, Eg, QT, $T, KT], (e, t, n, r, i, a, o) => {
            var s = P(o) ? t : o,
              c = eE(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  RT(
                    RT({}, e),
                    {},
                    {
                      position: RT(
                        RT({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          GT,
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
      Qh,
      $T,
      L([XT, GT], (e, t) => {
        var n = Xg(t);
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
      GT,
      qT,
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
          return PT({
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
  nE = (e) => {
    var { chartData: t } = e,
      n = F(),
      r = Cs();
    return (
      (0, s.useEffect)(
        () =>
          r
            ? () => {}
            : (n(px(t)),
              () => {
                n(px(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  rE = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  iE = _a({
    name: `brush`,
    initialState: rE,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? rE : t.payload;
      },
    },
  }),
  { setBrushSettings: aE } = iE.actions,
  oE = iE.reducer;
function sE(e, t) {
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
function cE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? sE(Object(n), !0).forEach(function (t) {
          lE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function lE(e, t, n) {
  return (
    (t = uE(t)) in e
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
function uE(e) {
  var t = dE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function dE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var fE = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return {
      x: Math.min(n, i),
      y: Math.min(r, a),
      width: Math.abs(i - n),
      height: Math.abs(a - r),
    };
  },
  pE = class e {
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
lE(pE, `EPS`, 1e-4);
var mE = (e) => {
  var t = Object.keys(e).reduce(
    (t, n) => cE(cE({}, t), {}, { [n]: pE.create(e[n]) }),
    {},
  );
  return cE(
    cE({}, t),
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
function hE(e) {
  return ((e % 180) + 180) % 180;
}
var gE = function (e) {
    var { width: t, height: n } = e,
      r =
        (hE(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  _E = _a({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = mi(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = mi(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = mi(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: vE,
    removeDot: yE,
    addArea: bE,
    removeArea: xE,
    addLine: SE,
    removeLine: CE,
  } = _E.actions,
  wE = _E.reducer,
  TE = (0, s.createContext)(void 0),
  EE = (e) => {
    var { children: t } = e,
      [n] = (0, s.useState)(`${Mt(`recharts`)}-clip`),
      r = Iw();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: c } = r;
    return s.createElement(
      TE.Provider,
      { value: n },
      s.createElement(
        `defs`,
        null,
        s.createElement(
          `clipPath`,
          { id: n },
          s.createElement(`rect`, { x: i, y: a, height: c, width: o }),
        ),
      ),
      t,
    );
  },
  DE = () => (0, s.useContext)(TE);
function OE(e, t) {
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
function kE(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function AE(e, t, n) {
  return gE({ width: e.width + t.width, height: e.height + t.height }, n);
}
function jE(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function ME(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function NE(e, t) {
  return kE(e, t + 1);
}
function PE(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: kE(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || ME(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function FE(e, t) {
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
function IE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? FE(Object(n), !0).forEach(function (t) {
          LE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : FE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function LE(e, t, n) {
  return (
    (t = RE(t)) in e
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
function RE(e) {
  var t = zE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function BE(e, t, n, r, i) {
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
          a[t] = r = IE(
            IE({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = IE(IE({}, r), {}, { tickCoord: r.coordinate });
        ME(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = IE(IE({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function VE(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      IE(
        IE({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      ME(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = IE(IE({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = IE(
            IE({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = IE(IE({}, r), {}, { tickCoord: r.coordinate });
        ME(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = IE(IE({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function HE(e, t, n) {
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
  if (N(c) || Oc.isSsr) return NE(i, N(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? nS(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? AE(nS(i, { fontSize: t, letterSpacing: n }), m, d)
        : nS(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? Dt(i[1].coordinate - i[0].coordinate) : 1,
    _ = jE(a, g, p);
  return c === `equidistantPreserveStart`
    ? PE(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? VE(g, _, h, i, o, c === `preserveStartEnd`)
          : BE(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var UE = (e) => {
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
  WE = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  GE = [`viewBox`],
  KE = [`viewBox`];
function qE(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = JE(e, t);
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
function JE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function YE() {
  return (
    (YE = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    YE.apply(null, arguments)
  );
}
function XE(e, t) {
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
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XE(Object(n), !0).forEach(function (t) {
          ZE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ZE(e, t, n) {
  return (
    (t = QE(t)) in e
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
function QE(e) {
  var t = $E(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function $E(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var eD = {
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
function tD(e) {
  var {
    x: t,
    y: n,
    width: r,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: c,
    otherSvgProps: l,
  } = e;
  if (!c) return null;
  var d = $($($({}, l), g(c)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var f = +((a === `top` && !o) || (a === `bottom` && o));
    d = $($({}, d), {}, { x1: t, y1: n + f * i, x2: t + r, y2: n + f * i });
  } else {
    var p = +((a === `left` && !o) || (a === `right` && o));
    d = $($({}, d), {}, { x1: t + p * r, y1: n, x2: t + p * r, y2: n + i });
  }
  return s.createElement(
    `line`,
    YE({}, d, {
      className: u(
        `recharts-cartesian-axis-line`,
        (0, Et.default)(c, `className`),
      ),
    }),
  );
}
function nD(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = N(e.tickCoord) ? e.tickCoord : e.coordinate;
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
function rD(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function iD(e, t) {
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
function aD(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = u(n.className, `recharts-cartesian-axis-tick-value`);
  if (s.isValidElement(t))
    i = s.cloneElement(t, $($({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t($($({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = u(o, t?.className)),
      (i = s.createElement(AS, YE({}, n, { className: o }), r)));
  }
  return i;
}
function oD(e) {
  var {
      ticks: t = [],
      tick: n,
      tickLine: r,
      stroke: i,
      tickFormatter: a,
      unit: o,
      padding: c,
      tickTextProps: l,
      orientation: d,
      mirror: f,
      x: p,
      y: m,
      width: h,
      height: v,
      tickSize: y,
      tickMargin: b,
      fontSize: x,
      letterSpacing: S,
      getTicksConfig: C,
      events: w,
    } = e,
    T = HE($($({}, C), {}, { ticks: t }), x, S),
    E = rD(d, f),
    D = iD(d, f),
    O = g(C),
    ee = _(n),
    A = {};
  typeof r == `object` && (A = r);
  var j = $($({}, O), {}, { fill: `none` }, A),
    M = T.map((e, t) => {
      var { line: g, tick: _ } = nD(e, p, m, h, v, d, y, f, b),
        x = $(
          $(
            $(
              $({ textAnchor: E, verticalAnchor: D }, O),
              {},
              { stroke: `none`, fill: i },
              ee,
            ),
            _,
          ),
          {},
          {
            index: t,
            payload: e,
            visibleTicksCount: T.length,
            tickFormatter: a,
            padding: c,
          },
          l,
        );
      return s.createElement(
        k,
        YE(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          tn(w, e, t),
        ),
        r &&
          s.createElement(
            `line`,
            YE({}, j, g, {
              className: u(
                `recharts-cartesian-axis-tick-line`,
                (0, Et.default)(r, `className`),
              ),
            }),
          ),
        n &&
          s.createElement(aD, {
            option: n,
            tickProps: x,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return M.length > 0
    ? s.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, M)
    : null;
}
var sD = (0, s.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: c,
      } = e,
      l = qE(e, WE),
      [d, f] = (0, s.useState)(``),
      [p, m] = (0, s.useState)(``),
      h = (0, s.useRef)(null);
    (0, s.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        UE({
          ticks: h.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var _ = (0, s.useCallback)(
      (e) => {
        if (e) {
          var t = e.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          h.current = t;
          var n = t[0];
          if (n) {
            var r = window.getComputedStyle(n),
              i = r.fontSize,
              a = r.letterSpacing;
            (i !== d || a !== p) && (f(i), m(a));
          }
        }
      },
      [d, p],
    );
    return o || (r != null && r <= 0) || (i != null && i <= 0)
      ? null
      : s.createElement(
          k,
          { className: u(`recharts-cartesian-axis`, a), ref: _ },
          s.createElement(tD, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: g(e),
          }),
          s.createElement(oD, {
            ticks: c,
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
            fontSize: d,
            letterSpacing: p,
            getTicksConfig: e,
            events: l,
          }),
          s.createElement(
            BS,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            s.createElement(eC, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  cD = s.memo(sD, (e, t) => {
    var { viewBox: n } = e,
      r = qE(e, GE),
      { viewBox: i } = t,
      a = qE(t, KE);
    return OE(n, i) && OE(r, a);
  }),
  lD = s.forwardRef((e, t) => {
    var n = ol(e, eD);
    return s.createElement(cD, YE({}, n, { ref: t }));
  });
lD.displayName = `CartesianAxis`;
var uD = [`x1`, `y1`, `x2`, `y2`, `key`],
  dD = [`offset`],
  fD = [`xAxisId`, `yAxisId`],
  pD = [`xAxisId`, `yAxisId`];
function mD(e, t) {
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
function hD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mD(Object(n), !0).forEach(function (t) {
          gD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gD(e, t, n) {
  return (
    (t = _D(t)) in e
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
function _D(e) {
  var t = vD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function vD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function yD() {
  return (
    (yD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yD.apply(null, arguments)
  );
}
function bD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xD(e, t);
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
function xD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var SD = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: c } = e;
  return s.createElement(`rect`, {
    x: r,
    y: i,
    ry: c,
    width: a,
    height: o,
    stroke: `none`,
    fill: t,
    fillOpacity: n,
    className: `recharts-cartesian-grid-bg`,
  });
};
function CD(e, t) {
  var n;
  if (s.isValidElement(e)) n = s.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: c } = t,
      l = g(bD(t, uD)),
      { offset: u } = l,
      d = bD(l, dD);
    n = s.createElement(
      `line`,
      yD({}, d, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: c }),
    );
  }
  return n;
}
function wD(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    c = bD(e, fD),
    l = i.map((e, i) =>
      CD(
        r,
        hD(
          hD({}, c),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return s.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    l,
  );
}
function TD(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    c = bD(e, pD),
    l = i.map((e, i) =>
      CD(
        r,
        hD(
          hD({}, c),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return s.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    l,
  );
}
function ED(e) {
  var {
    horizontalFill: t,
    fillOpacity: n,
    x: r,
    y: i,
    width: a,
    height: o,
    horizontalPoints: c,
    horizontal: l = !0,
  } = e;
  if (!l || !t || !t.length) return null;
  var u = c.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== u[0] && u.unshift(0);
  var d = u.map((e, c) => {
    var l = u[c + 1] ? u[c + 1] - e : i + o - e;
    if (l <= 0) return null;
    var d = c % t.length;
    return s.createElement(`rect`, {
      key: `react-${c}`,
      y: e,
      x: r,
      height: l,
      width: a,
      stroke: `none`,
      fill: t[d],
      fillOpacity: n,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return s.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    d,
  );
}
function DD(e) {
  var {
    vertical: t = !0,
    verticalFill: n,
    fillOpacity: r,
    x: i,
    y: a,
    width: o,
    height: c,
    verticalPoints: l,
  } = e;
  if (!t || !n || !n.length) return null;
  var u = l.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== u[0] && u.unshift(0);
  var d = u.map((e, t) => {
    var l = u[t + 1] ? u[t + 1] - e : i + o - e;
    if (l <= 0) return null;
    var d = t % n.length;
    return s.createElement(`rect`, {
      key: `react-${t}`,
      x: e,
      y: a,
      width: l,
      height: c,
      stroke: `none`,
      fill: n[d],
      fillOpacity: r,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return s.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    d,
  );
}
var OD = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return Fo(
      HE(
        hD(
          hD(hD({}, eD), n),
          {},
          { ticks: Io(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  kD = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return Fo(
      HE(
        hD(
          hD(hD({}, eD), n),
          {},
          { ticks: Io(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  AD = {
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
function jD(e) {
  var t = Qs(),
    n = $s(),
    r = Zs(),
    i = hD(
      hD({}, ol(e, AD)),
      {},
      {
        x: N(e.x) ? e.x : r.left,
        y: N(e.y) ? e.y : r.top,
        width: N(e.width) ? e.width : r.width,
        height: N(e.height) ? e.height : r.height,
      },
    ),
    {
      xAxisId: a,
      yAxisId: o,
      x: c,
      y: l,
      width: u,
      height: d,
      syncWithTicks: f,
      horizontalValues: p,
      verticalValues: m,
    } = i,
    h = Cs(),
    g = I((e) => iy(e, `xAxis`, a, h)),
    _ = I((e) => iy(e, `yAxis`, o, h));
  if (
    !N(u) ||
    u <= 0 ||
    !N(d) ||
    d <= 0 ||
    !N(c) ||
    c !== +c ||
    !N(l) ||
    l !== +l
  )
    return null;
  var v = i.verticalCoordinatesGenerator || OD,
    y = i.horizontalCoordinatesGenerator || kD,
    { horizontalPoints: b, verticalPoints: x } = i;
  if ((!b || !b.length) && typeof y == `function`) {
    var S = p && p.length,
      C = y(
        {
          yAxis: _ ? hD(hD({}, _), {}, { ticks: S ? p : _.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        S ? !0 : f,
      );
    Array.isArray(C) && (b = C);
  }
  if ((!x || !x.length) && typeof v == `function`) {
    var w = m && m.length,
      T = v(
        {
          xAxis: g ? hD(hD({}, g), {}, { ticks: w ? m : g.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        w ? !0 : f,
      );
    Array.isArray(T) && (x = T);
  }
  return s.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    s.createElement(SD, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    s.createElement(ED, yD({}, i, { horizontalPoints: b })),
    s.createElement(DD, yD({}, i, { verticalPoints: x })),
    s.createElement(
      wD,
      yD({}, i, { offset: r, horizontalPoints: b, xAxis: g, yAxis: _ }),
    ),
    s.createElement(
      TD,
      yD({}, i, { offset: r, verticalPoints: x, xAxis: g, yAxis: _ }),
    ),
  );
}
jD.displayName = `CartesianGrid`;
var MD = [`dangerouslySetInnerHTML`, `ticks`],
  ND = [`id`],
  PD = [`domain`],
  FD = [`domain`];
function ID() {
  return (
    (ID = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ID.apply(null, arguments)
  );
}
function LD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = RD(e, t);
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
function RD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function zD(e) {
  var t = F();
  return (
    (0, s.useLayoutEffect)(
      () => (
        t(Dw(e)),
        () => {
          t(Ow(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var BD = (e) => {
    var { xAxisId: t, className: n } = e,
      r = I(xs),
      i = Cs(),
      a = `xAxis`,
      o = I((e) => Lv(e, a, t, i)),
      c = I((e) => ay(e, a, t, i)),
      l = I((e) => Gv(e, t)),
      d = I((e) => Xv(e, t)),
      f = I((e) => u_(e, t));
    if (l == null || d == null || f == null) return null;
    var { dangerouslySetInnerHTML: p, ticks: m } = e,
      h = LD(e, MD),
      { id: g } = f,
      _ = LD(f, ND);
    return s.createElement(
      lD,
      ID({}, h, _, {
        scale: o,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        className: u(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: c,
      }),
    );
  },
  VD = {
    allowDataOverflow: l_.allowDataOverflow,
    allowDecimals: l_.allowDecimals,
    allowDuplicatedCategory: l_.allowDuplicatedCategory,
    height: l_.height,
    hide: !1,
    mirror: l_.mirror,
    orientation: l_.orientation,
    padding: l_.padding,
    reversed: l_.reversed,
    scale: l_.scale,
    tickCount: l_.tickCount,
    type: l_.type,
    xAxisId: 0,
  },
  HD = s.memo(
    (e) => {
      var t = ol(e, VD);
      return s.createElement(
        s.Fragment,
        null,
        s.createElement(zD, {
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
        s.createElement(BD, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = LD(e, PD),
        { domain: i } = t;
      return OE(r, LD(t, FD))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : OE({ domain: n }, { domain: i })
        : !1;
    },
  );
HD.displayName = `XAxis`;
var UD = [`dangerouslySetInnerHTML`, `ticks`],
  WD = [`id`],
  GD = [`domain`],
  KD = [`domain`];
function qD() {
  return (
    (qD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qD.apply(null, arguments)
  );
}
function JD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = YD(e, t);
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
function YD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function XD(e) {
  var t = F();
  return (
    (0, s.useLayoutEffect)(
      () => (
        t(kw(e)),
        () => {
          t(Aw(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var ZD = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, s.useRef)(null),
      o = (0, s.useRef)(null),
      c = I(xs),
      l = Cs(),
      d = F(),
      f = `yAxis`,
      p = I((e) => Lv(e, f, t, l)),
      m = I((e) => Qv(e, t)),
      h = I((e) => Zv(e, t)),
      g = I((e) => ay(e, f, t, l)),
      _ = I((e) => p_(e, t));
    if (
      ((0, s.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !m ||
            GS(i) ||
            (0, s.isValidElement)(i) ||
            _ == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(m.width) !== Math.round(n) && d(Nw({ id: t, width: n }));
          }
        }
      }, [g, m, d, i, t, r, _]),
      m == null || h == null || _ == null)
    )
      return null;
    var { dangerouslySetInnerHTML: v, ticks: y } = e,
      b = JD(e, UD),
      { id: x } = _,
      S = JD(_, WD);
    return s.createElement(
      lD,
      qD({}, b, S, {
        ref: a,
        labelRef: o,
        scale: p,
        x: h.x,
        y: h.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: m.width,
        height: m.height,
        className: u(`recharts-${f} ${f}`, n),
        viewBox: c,
        ticks: g,
      }),
    );
  },
  QD = {
    allowDataOverflow: f_.allowDataOverflow,
    allowDecimals: f_.allowDecimals,
    allowDuplicatedCategory: f_.allowDuplicatedCategory,
    hide: !1,
    mirror: f_.mirror,
    orientation: f_.orientation,
    padding: f_.padding,
    reversed: f_.reversed,
    scale: f_.scale,
    tickCount: f_.tickCount,
    type: f_.type,
    width: f_.width,
    yAxisId: 0,
  },
  $D = s.memo(
    (e) => {
      var t = ol(e, QD);
      return s.createElement(
        s.Fragment,
        null,
        s.createElement(XD, {
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
        s.createElement(ZD, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = JD(e, GD),
        { domain: i } = t;
      return OE(r, JD(t, KD))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : OE({ domain: n }, { domain: i })
        : !1;
    },
  );
$D.displayName = `YAxis`;
var eO = n((e) => {
    var t = a();
    (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
  }),
  tO = n((e, t) => {
    t.exports = eO();
  });
tO();
function nO(e) {
  e();
}
function rO() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      nO(() => {
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
var iO = { notify() {}, get: () => [] };
function aO(e, t) {
  let n,
    r = iO,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = rO())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = iO)));
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
var oO =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  sO = typeof navigator < `u` && navigator.product === `ReactNative`,
  cO = oO || sO ? s.useLayoutEffect : s.useEffect,
  lO = Symbol.for(`react-redux-context`),
  uO = typeof globalThis < `u` ? globalThis : {};
function dO() {
  if (!s.createContext) return {};
  let e = (uO[lO] ??= new Map()),
    t = e.get(s.createContext);
  return (t || ((t = s.createContext(null)), e.set(s.createContext, t)), t);
}
var fO = dO();
function pO(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = s.useMemo(() => {
      let e = aO(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = s.useMemo(() => i.getState(), [i]);
  cO(() => {
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
  let c = n || fO;
  return s.createElement(c.Provider, { value: a }, t);
}
var mO = pO,
  hO = L([(e, t) => t, U, Jg, X, db, pb, Ib, V], Kb),
  gO = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  _O = Bi(`mouseClick`),
  vO = io();
vO.startListening({
  actionCreator: _O,
  effect: (e, t) => {
    var n = e.payload,
      r = hO(t.getState(), gO(n));
    r?.activeIndex != null &&
      t.dispatch(
        Ey({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var yO = Bi(`mouseMove`),
  bO = io();
bO.startListening({
  actionCreator: yO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = fy(r, r.tooltip.settings.shared),
      a = hO(r, gO(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(Cy())
        : t.dispatch(
            Ty({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function xO(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var SO = {
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
  CO = _a({
    name: `rootProps`,
    initialState: SO,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? SO.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  wO = CO.reducer,
  { updateOptions: TO } = CO.actions,
  EO = _a({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: DO } = EO.actions,
  OO = EO.reducer,
  kO = Bi(`keyDown`),
  AO = Bi(`focus`),
  jO = io();
(jO.startListening({
  actionCreator: kO,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(Ry(r, $y(n))),
          o = pb(n);
        if (i === `Enter`) {
          var s = Vb(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            Oy({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = cy(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = Vb(n, `axis`, `hover`, String(l));
            t.dispatch(
              Oy({
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
  jO.startListening({
    actionCreator: AO,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Vb(n, `axis`, `hover`, String(i));
          t.dispatch(
            Oy({
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
var MO = Bi(`externalEvent`),
  NO = io();
NO.startListening({
  actionCreator: MO,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: Sb(n),
          activeDataKey: bb(n),
          activeIndex: vb(n),
          activeLabel: yb(n),
          activeTooltipIndex: vb(n),
          isTooltipActive: Cb(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var PO = L(
    [L([Hy], (e) => e.tooltipItemPayloads), Vy, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  FO = Bi(`touchMove`),
  IO = io();
IO.startListening({
  actionCreator: FO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = fy(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = hO(
        r,
        gO({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          Ty({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(ls),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = PO(t.getState(), c, l);
      t.dispatch(xy({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var LO = _r({
    brush: oE,
    cartesianAxis: Pw,
    chartData: gx,
    errorBars: eT,
    graphicalItems: yw,
    layout: fo,
    legend: sc,
    options: lx,
    polarAxis: CC,
    polarOptions: OO,
    referenceElements: wE,
    rootProps: wO,
    tooltip: ky,
  }),
  RO = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return Zi({
      reducer: LO,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          vO.middleware,
          bO.middleware,
          jO.middleware,
          NO.middleware,
          IO.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Yi({ type: `raf` }))
        );
      },
      devTools: Oc.devToolsEnabled && {
        serialize: { replacer: xO },
        name: `recharts-${t}`,
      },
    });
  };
function zO(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = Cs(),
    a = (0, s.useRef)(null);
  if (i) return n;
  a.current ??= RO(t, r);
  var o = Pn;
  return s.createElement(mO, { context: o, store: a.current }, n);
}
function BO(e) {
  var { layout: t, margin: n } = e,
    r = F(),
    i = Cs();
  return (
    (0, s.useEffect)(() => {
      i || (r(co(t)), r(so(n)));
    }, [r, i, t, n]),
    null
  );
}
function VO(e) {
  var t = F();
  return (
    (0, s.useEffect)(() => {
      t(TO(e));
    }, [t, e]),
    null
  );
}
var HO = [`children`];
function UO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = WO(e, t);
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
function WO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function GO() {
  return (
    (GO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    GO.apply(null, arguments)
  );
}
var KO = { width: `100%`, height: `100%`, display: `block` },
  qO = (0, s.forwardRef)((e, t) => {
    var n = Qs(),
      r = $s(),
      i = kc();
    if (!Ls(n) || !Ls(r)) return null;
    var { children: a, otherAttributes: o, title: c, desc: l } = e,
      u = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      d = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return s.createElement(
      w,
      GO({}, o, {
        title: c,
        desc: l,
        role: d,
        tabIndex: u,
        width: n,
        height: r,
        style: KO,
        ref: t,
      }),
      a,
    );
  }),
  JO = (e) => {
    var { children: t } = e,
      n = I(Ts);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return s.createElement(w, { width: r, height: i, x: o, y: a }, t);
  },
  YO = (0, s.forwardRef)((e, t) => {
    var { children: n } = e,
      r = UO(e, HO);
    return Cs()
      ? s.createElement(JO, null, n)
      : s.createElement(qO, GO({ ref: t }, r), n);
  });
function XO() {
  var e = F(),
    [t, n] = (0, s.useState)(null),
    r = I(as);
  return (
    (0, s.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        H(n) && n !== r && e(uo(n));
      }
    }, [t, e, r]),
    n
  );
}
function ZO(e, t) {
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
function QO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZO(Object(n), !0).forEach(function (t) {
          $O(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $O(e, t, n) {
  return (
    (t = ek(t)) in e
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
function ek(e) {
  var t = tk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nk() {
  return (
    (nk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nk.apply(null, arguments)
  );
}
var rk = () => (Ox(), null);
function ik(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var ak = (0, s.forwardRef)((e, t) => {
    var n = (0, s.useRef)(null),
      [r, i] = (0, s.useState)({
        containerWidth: ik(e.style?.width),
        containerHeight: ik(e.style?.height),
      }),
      a = (0, s.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, s.useCallback)(
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
      (0, s.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      s.createElement(
        s.Fragment,
        null,
        s.createElement(tc, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        s.createElement(`div`, nk({ ref: o }, e)),
      )
    );
  }),
  ok = (0, s.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, s.useState)({
        containerWidth: ik(n),
        containerHeight: ik(r),
      }),
      o = (0, s.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      c = (0, s.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return s.createElement(
      s.Fragment,
      null,
      s.createElement(tc, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      s.createElement(`div`, nk({ ref: c }, e)),
    );
  }),
  sk = (0, s.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement(tc, { width: n, height: r }),
      s.createElement(`div`, nk({ ref: t }, e)),
    );
  }),
  ck = (0, s.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return kt(n) || kt(r)
      ? s.createElement(ok, nk({}, e, { ref: t }))
      : s.createElement(sk, nk({}, e, { ref: t }));
  });
function lk(e) {
  return e === !0 ? ak : ck;
}
var uk = (0, s.forwardRef)((e, t) => {
    var {
        children: n,
        className: r,
        height: i,
        onClick: a,
        onContextMenu: o,
        onDoubleClick: c,
        onMouseDown: l,
        onMouseEnter: d,
        onMouseLeave: f,
        onMouseMove: p,
        onMouseUp: m,
        onTouchEnd: h,
        onTouchMove: g,
        onTouchStart: _,
        style: v,
        width: y,
        responsive: b,
        dispatchTouchEvents: x = !0,
      } = e,
      S = (0, s.useRef)(null),
      C = F(),
      [w, T] = (0, s.useState)(null),
      [E, D] = (0, s.useState)(null),
      O = XO(),
      k = Ks(),
      A = k?.width > 0 ? k.width : y,
      j = k?.height > 0 ? k.height : i,
      M = (0, s.useCallback)(
        (e) => {
          (O(e),
            typeof t == `function` && t(e),
            T(e),
            D(e),
            e != null && (S.current = e));
        },
        [O, t, T, D],
      ),
      te = (0, s.useCallback)(
        (e) => {
          (C(_O(e)), C(MO({ handler: a, reactEvent: e })));
        },
        [C, a],
      ),
      ne = (0, s.useCallback)(
        (e) => {
          (C(yO(e)), C(MO({ handler: d, reactEvent: e })));
        },
        [C, d],
      ),
      re = (0, s.useCallback)(
        (e) => {
          (C(Cy()), C(MO({ handler: f, reactEvent: e })));
        },
        [C, f],
      ),
      ie = (0, s.useCallback)(
        (e) => {
          (C(yO(e)), C(MO({ handler: p, reactEvent: e })));
        },
        [C, p],
      ),
      ae = (0, s.useCallback)(() => {
        C(AO());
      }, [C]),
      oe = (0, s.useCallback)(
        (e) => {
          C(kO(e.key));
        },
        [C],
      ),
      se = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: o, reactEvent: e }));
        },
        [C, o],
      ),
      ce = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: c, reactEvent: e }));
        },
        [C, c],
      ),
      le = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: l, reactEvent: e }));
        },
        [C, l],
      ),
      ue = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: m, reactEvent: e }));
        },
        [C, m],
      ),
      de = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: _, reactEvent: e }));
        },
        [C, _],
      ),
      fe = (0, s.useCallback)(
        (e) => {
          (x && C(FO(e)), C(MO({ handler: g, reactEvent: e })));
        },
        [C, x, g],
      ),
      pe = (0, s.useCallback)(
        (e) => {
          C(MO({ handler: h, reactEvent: e }));
        },
        [C, h],
      ),
      me = lk(b);
    return s.createElement(
      tx.Provider,
      { value: w },
      s.createElement(
        ee.Provider,
        { value: E },
        s.createElement(
          me,
          {
            width: A ?? v?.width,
            height: j ?? v?.height,
            className: u(`recharts-wrapper`, r),
            style: QO(
              { position: `relative`, cursor: `default`, width: A, height: j },
              v,
            ),
            onClick: te,
            onContextMenu: se,
            onDoubleClick: ce,
            onFocus: ae,
            onKeyDown: oe,
            onMouseDown: le,
            onMouseEnter: ne,
            onMouseLeave: re,
            onMouseMove: ie,
            onMouseUp: ue,
            onTouchEnd: pe,
            onTouchMove: fe,
            onTouchStart: de,
            ref: M,
          },
          s.createElement(rk, null),
          n,
        ),
      ),
    );
  }),
  dk = [
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
function fk(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = pk(e, t);
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
function pk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var mk = (0, s.forwardRef)((e, t) => {
  var {
      width: n,
      height: r,
      responsive: i,
      children: a,
      className: o,
      style: c,
      compact: l,
      title: u,
      desc: d,
    } = e,
    f = g(fk(e, dk));
  return l
    ? s.createElement(
        s.Fragment,
        null,
        s.createElement(tc, { width: n, height: r }),
        s.createElement(YO, { otherAttributes: f, title: u, desc: d }, a),
      )
    : s.createElement(
        uk,
        {
          className: o,
          style: c,
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
        s.createElement(
          YO,
          { otherAttributes: f, title: u, desc: d, ref: t },
          s.createElement(EE, null, a),
        ),
      );
});
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
var gk = {
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
  _k = (0, s.forwardRef)(function (e, t) {
    var n = ol(e.categoricalChartProps, gk),
      {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        categoricalChartProps: c,
      } = e,
      l = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return s.createElement(
      zO,
      { preloadedState: { options: l }, reduxStoreName: c.id ?? r },
      s.createElement(nE, { chartData: c.data }),
      s.createElement(BO, { layout: n.layout, margin: n.margin }),
      s.createElement(VO, {
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
      s.createElement(mk, hk({}, n, { ref: t })),
    );
  }),
  vk = {
    0: {},
    1: { strSymbol: `$` },
    2: { strSymbol: `£` },
    3: { strSymbol: `€`, strDecimalSymbol: `,`, strThousandsSeparator: ` ` },
    4: { strSymbol: `CHF` },
    5: {
      strSymbol: `руб.`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ``,
    },
    6: {
      strSymbol: `zł`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    7: {
      strSymbol: `R$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    8: { strSymbol: `¥`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    9: {
      strSymbol: `kr`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    10: {
      strSymbol: `Rp`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    11: { strSymbol: `RM` },
    12: { strSymbol: `P` },
    13: { strSymbol: `S$` },
    14: { strSymbol: `฿` },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: { strSymbol: `₩`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    17: {
      strSymbol: `TL`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    18: {
      strSymbol: `₴`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    19: { strSymbol: `Mex$`, bSpaceForSymbol: !0 },
    20: { strSymbol: `CDN$`, bSpaceForSymbol: !0 },
    21: { strSymbol: `A$`, bSpaceForSymbol: !0 },
    22: { strSymbol: `NZ$`, bSpaceForSymbol: !0 },
    23: { strSymbol: `¥`, bSpaceForSymbol: !0 },
    24: { strSymbol: `₹`, bSpaceForSymbol: !0, bWholeUnitsOnly: !0 },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: { strSymbol: `S/.` },
    27: {
      strSymbol: `COL$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    28: {
      strSymbol: `R`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    29: { strSymbol: `HK$`, bSpaceForSymbol: !0 },
    30: { strSymbol: `NT$`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    31: { strSymbol: `SR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    32: { strSymbol: `AED`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    33: { strSymbol: `kr`, bSpaceForSymbol: !0, bSuffixSymbol: !0 },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: { strSymbol: `₪` },
    36: { strSymbol: `Br` },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: { strSymbol: `KD`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    39: { strSymbol: `QR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    40: {
      strSymbol: `₡`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    41: {
      strSymbol: `$U`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    42: { strSymbol: `лв`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    43: { strSymbol: `kn`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    44: { strSymbol: `Kč`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    45: { strSymbol: `kr.`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    46: { strSymbol: `Ft`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    47: { strSymbol: `lei`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    48: {},
  },
  yk = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function bk(e) {
  return { ...yk, ...vk[e], eCurrency: e };
}
function xk(e, t) {
  return Sk(e, bk(t));
}
function Sk(e, t) {
  let {
      strSymbol: n,
      bSuffixSymbol: r,
      bSpaceForSymbol: i,
      bWholeUnitsOnly: a,
      strDecimalSymbol: o,
      strThousandsSeparator: s,
    } = t,
    c = e < 0,
    l = a && e % 100 == 0;
  c && (e = -e);
  let u = [];
  for (let t = 0; t < 2; t++) (l || u.push(e % 10), (e = Math.floor(e / 10)));
  !l && o && u.push(o);
  let d = 0;
  do
    (d++ % 3 == 0 && d > 2 && s && u.push(s),
      u.push(e % 10),
      (e = Math.floor(e / 10)));
  while (e > 0);
  let f = u.reverse().join(``),
    p = i ? ` ` : ``,
    m = c ? `-` : ``;
  return r ? `${m}${f}${p}${n}` : `${m}${n}${p}${f}`;
}
export {
  Zo as $,
  rS as A,
  Xg as B,
  ow as C,
  BS as D,
  _C as E,
  Lv as F,
  ol as G,
  ru as H,
  sy as I,
  U as J,
  Hc as K,
  H_ as L,
  sx as M,
  Mb as N,
  eC as O,
  vb as P,
  Cs as Q,
  oy as R,
  cw as S,
  fC as T,
  Wl as U,
  Qh as V,
  Ul as W,
  Js as X,
  ec as Y,
  H as Z,
  aT as _,
  g as _t,
  tO as a,
  L as at,
  bw as b,
  jD as c,
  $t as ct,
  xE as d,
  P as dt,
  Uo as et,
  mE as f,
  At as ft,
  oT as g,
  y as gt,
  sT as h,
  v as ht,
  _k as i,
  Po as it,
  zx as j,
  QS as k,
  DE as l,
  Ft as lt,
  IT as m,
  k as mt,
  Sk as n,
  $o as nt,
  $D as o,
  F as ot,
  fE as p,
  N as pt,
  Oc as q,
  bk as r,
  B as rt,
  HD as s,
  I as st,
  xk as t,
  Ho as tt,
  bE as u,
  Ot as ut,
  Lw as v,
  _ as vt,
  jC as w,
  fw as x,
  Iw as y,
  u as yt,
  S_ as z,
};
