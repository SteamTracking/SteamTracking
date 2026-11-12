/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  in as t,
  nn as n,
  sn as r,
  t as i,
} from "./chunk~de7f2df91c.js";
import { T as a, _ as o } from "./chunk~44f252525d.js";
import { t as s } from "./chunk~29743c399d.js";
var c = r(e()),
  l = r(i());
function u(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = u(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function d() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = u(e)) && (r && (r += ` `), (r += t));
  return r;
}
var f =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function p(e) {
  return typeof e == `string` && f.includes(e);
}
var m =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function h(e) {
  return typeof e == `string` && m.includes(e);
}
function g(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function _(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return h(t) || g(t);
  });
  return Object.fromEntries(t);
}
function v(e) {
  if (e == null) return null;
  if (
    (0, c.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return _(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? _(e) : null;
}
function y(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return h(t) || g(t) || p(t);
  });
  return Object.fromEntries(t);
}
function b(e) {
  return e == null
    ? null
    : (0, c.isValidElement)(e)
      ? y(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? y(e)
        : null;
}
var x = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function S() {
  return (
    (S = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    S.apply(null, arguments)
  );
}
function C(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = w(e, t);
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
function w(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var T = (0, c.forwardRef)((e, t) => {
    var {
        children: n,
        width: r,
        height: i,
        viewBox: a,
        className: o,
        style: s,
        title: l,
        desc: u,
      } = e,
      f = C(e, x),
      p = a || { width: r, height: i, x: 0, y: 0 },
      m = d(`recharts-surface`, o);
    return c.createElement(
      `svg`,
      S({}, y(f), {
        className: m,
        width: r,
        height: i,
        style: s,
        viewBox: `${p.x} ${p.y} ${p.width} ${p.height}`,
        ref: t,
      }),
      c.createElement(`title`, null, l),
      c.createElement(`desc`, null, u),
      n,
    );
  }),
  E = [`children`, `className`];
function D() {
  return (
    (D = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    D.apply(null, arguments)
  );
}
function O(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = k(e, t);
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
function k(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var A = c.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = O(e, E),
      a = d(`recharts-layer`, r);
    return c.createElement(`g`, D({ className: a }, y(i), { ref: t }), n);
  }),
  ee = (0, c.createContext)(null),
  j = () => (0, c.useContext)(ee);
function M(e) {
  return function () {
    return e;
  };
}
var te = Math.cos,
  ne = Math.sin,
  re = Math.sqrt,
  ie = Math.PI;
ie / 2;
var ae = 2 * ie,
  oe = Math.PI,
  se = 2 * oe,
  ce = 1e-6,
  le = se - ce;
function ue(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function de(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return ue;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var fe = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? ue : de(e)));
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
    else if (d > ce) {
      if (!(Math.abs(u * s - c * l) > ce) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((oe - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > ce && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > ce || Math.abs(this._y1 - l) > ce) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % se) + se),
        d > le
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > ce &&
            this._append`A${n},${n},0,${+(d >= oe)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
fe.prototype;
function pe(e) {
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
    () => new fe(t)
  );
}
Array.prototype.slice;
function me(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function he(e) {
  this._context = e;
}
he.prototype = {
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
function ge(e) {
  return new he(e);
}
function _e(e) {
  return e[0];
}
function ve(e) {
  return e[1];
}
function ye(e, t) {
  var n = M(!0),
    r = null,
    i = ge,
    a = null,
    o = pe(s);
  ((e = typeof e == `function` ? e : e === void 0 ? _e : M(e)),
    (t = typeof t == `function` ? t : t === void 0 ? ve : M(t)));
  function s(s) {
    var c,
      l = (s = me(s)).length,
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
        ? ((e = typeof t == `function` ? t : M(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : M(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : M(!!e)), s)
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
function be(e, t, n) {
  var r = null,
    i = M(!0),
    a = null,
    o = ge,
    s = null,
    c = pe(l);
  ((e = typeof e == `function` ? e : e === void 0 ? _e : M(+e)),
    (t = typeof t == `function` ? t : M(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? ve : M(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = me(l)).length,
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
    return ye().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : M(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : M(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : M(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : M(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : M(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : M(+e)), l)
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
        ? ((i = typeof e == `function` ? e : M(!!e)), l)
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
var xe = class {
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
function Se(e) {
  return new xe(e, !0);
}
function Ce(e) {
  return new xe(e, !1);
}
var we = {
    draw(e, t) {
      let n = re(t / ie);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, ae));
    },
  },
  Te = {
    draw(e, t) {
      let n = re(t / 5) / 2;
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
  Ee = re(1 / 3),
  De = Ee * 2,
  Oe = {
    draw(e, t) {
      let n = re(t / De),
        r = n * Ee;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  ke = {
    draw(e, t) {
      let n = re(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Ae = 0.8908130915292852,
  je = ne(ie / 10) / ne((7 * ie) / 10),
  Me = ne(ae / 10) * je,
  Ne = -te(ae / 10) * je,
  Pe = {
    draw(e, t) {
      let n = re(t * Ae),
        r = Me * n,
        i = Ne * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (ae * t) / 5,
          o = te(a),
          s = ne(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  Fe = re(3),
  Ie = {
    draw(e, t) {
      let n = -re(t / (Fe * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-Fe * n, -n),
        e.lineTo(Fe * n, -n),
        e.closePath());
    },
  },
  Le = -0.5,
  Re = re(3) / 2,
  ze = 1 / re(12),
  Be = (ze / 2 + 1) * 3,
  Ve = {
    draw(e, t) {
      let n = re(t / Be),
        r = n / 2,
        i = n * ze,
        a = r,
        o = n * ze + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(Le * r - Re * i, Re * r + Le * i),
        e.lineTo(Le * a - Re * o, Re * a + Le * o),
        e.lineTo(Le * s - Re * c, Re * s + Le * c),
        e.lineTo(Le * r + Re * i, Le * i - Re * r),
        e.lineTo(Le * a + Re * o, Le * o - Re * a),
        e.lineTo(Le * s + Re * c, Le * c - Re * s),
        e.closePath());
    },
  };
function He(e, t) {
  let n = null,
    r = pe(i);
  ((e = typeof e == `function` ? e : M(e || we)),
    (t = typeof t == `function` ? t : M(t === void 0 ? 64 : +t)));
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
        ? ((e = typeof t == `function` ? t : M(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : M(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function Ue() {}
function We(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function Ge(e) {
  this._context = e;
}
Ge.prototype = {
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
        We(this, this._x1, this._y1);
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
        We(this, e, t);
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
  areaStart: Ue,
  areaEnd: Ue,
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
        We(this, e, t);
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
        We(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Xe(e) {
  return new Ye(e);
}
function Ze(e) {
  this._context = e;
}
Ze.prototype = {
  areaStart: Ue,
  areaEnd: Ue,
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
function Qe(e) {
  return new Ze(e);
}
function $e(e) {
  return e < 0 ? -1 : 1;
}
function et(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    ($e(a) + $e(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function tt(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function nt(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function rt(e) {
  this._context = e;
}
rt.prototype = {
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
        nt(this, this._t0, tt(this, this._t0));
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
          ((this._point = 3), nt(this, tt(this, (n = et(this, e, t))), n));
          break;
        default:
          nt(this, this._t0, (n = et(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function it(e) {
  this._context = new at(e);
}
(it.prototype = Object.create(rt.prototype)).point = function (e, t) {
  rt.prototype.point.call(this, t, e);
};
function at(e) {
  this._context = e;
}
at.prototype = {
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
function ot(e) {
  return new rt(e);
}
function st(e) {
  return new it(e);
}
function ct(e) {
  this._context = e;
}
ct.prototype = {
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
        for (var r = lt(e), i = lt(t), a = 0, o = 1; o < n; ++a, ++o)
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
function lt(e) {
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
function ut(e) {
  return new ct(e);
}
function dt(e, t) {
  ((this._context = e), (this._t = t));
}
dt.prototype = {
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
function ft(e) {
  return new dt(e, 0.5);
}
function pt(e) {
  return new dt(e, 0);
}
function mt(e) {
  return new dt(e, 1);
}
function ht(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function gt(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function _t(e, t) {
  return e[t];
}
function vt(e) {
  let t = [];
  return ((t.key = e), t);
}
function yt() {
  var e = M([]),
    t = gt,
    n = ht,
    r = _t;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), vt),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = me(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : M(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : M(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? gt : typeof e == `function` ? e : M(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? ht), i) : n;
    }),
    i
  );
}
function bt(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    ht(e, t);
  }
}
function xt(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    ht(e, t);
  }
}
function St(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), ht(e, t));
  }
}
var Ct = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  wt = n((e) => {
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
  Tt = n((e) => {
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
  Et = n((e) => {
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
  Dt = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ct(),
      n = wt(),
      r = Tt(),
      i = Et();
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
  Ot = r(
    n((e, t) => {
      t.exports = Dt().get;
    })(),
  ),
  kt = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  At = (e) => typeof e == `number` && e != +e,
  jt = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  N = (e) => (typeof e == `number` || e instanceof Number) && !At(e),
  Mt = (e) => N(e) || typeof e == `string`,
  Nt = 0,
  Pt = (e) => {
    var t = ++Nt;
    return `${e || ``}${t}`;
  },
  Ft = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!N(e) && typeof e != `string`) return n;
    var i;
    if (jt(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (At(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  It = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function P(e, t, n) {
  return N(e) && N(t) ? e + n * (t - e) : t;
}
function Lt(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Ot.default)(e, t)) === n,
    );
}
var F = (e) => e == null,
  Rt = (e) => (F(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  zt = [`type`, `size`, `sizeType`];
function Bt() {
  return (
    (Bt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bt.apply(null, arguments)
  );
}
function Vt(e, t) {
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
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vt(Object(n), !0).forEach(function (t) {
          Ut(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ut(e, t, n) {
  return (
    (t = Wt(t)) in e
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
function Wt(e) {
  var t = Gt(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Gt(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Kt(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qt(e, t);
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
function qt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Jt = {
    symbolCircle: we,
    symbolCross: Te,
    symbolDiamond: Oe,
    symbolSquare: ke,
    symbolStar: Pe,
    symbolTriangle: Ie,
    symbolWye: Ve,
  },
  Yt = Math.PI / 180,
  Xt = (e) => Jt[`symbol${Rt(e)}`] || we,
  Zt = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * Yt;
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
  Qt = (e, t) => {
    Jt[`symbol${Rt(e)}`] = t;
  },
  $t = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = Ht(Ht({}, Kt(e, zt)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = Xt(a),
          t = He()
            .type(e)
            .size(Zt(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: l, cy: u } = i,
      f = y(i);
    return l === +l && u === +u && n === +n
      ? c.createElement(
          `path`,
          Bt({}, f, {
            className: d(`recharts-symbols`, s),
            transform: `translate(${l}, ${u})`,
            d: o(),
          }),
        )
      : null;
  };
$t.registerSymbol = Qt;
var en = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, c.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        p(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  tn = (e, t, n) => (r) => (e(t, n, r), null),
  nn = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        p(i) && typeof a == `function` && ((r ||= {}), (r[i] = tn(a, t, n)));
      }),
      r
    );
  },
  rn = n((e) => {
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
  an = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  on = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  sn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = on();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  cn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  ln = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = sn(),
      n = cn();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  un = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Dt();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  dn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  fn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  pn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  mn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hn(),
      n = dn(),
      r = fn(),
      i = pn();
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
  hn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mn();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  gn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  _n = n((e) => {
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
  vn = n((e) => {
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
  yn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  bn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gn(),
      n = _n(),
      r = vn(),
      i = fn(),
      a = yn();
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
  xn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = bn();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  Sn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hn(),
      n = xn();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  Cn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = bn(),
      n = vn();
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
  wn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Cn();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  Tn = n((e) => {
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
  En = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = _n();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  Dn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = wt(),
      n = Tn(),
      r = En(),
      i = Et();
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
  On = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hn(),
      n = Tt(),
      r = wn(),
      i = Dt(),
      a = Dn();
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
  kn = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = an(),
      n = un(),
      r = Sn(),
      i = On();
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
  An = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = rn(),
      n = an(),
      r = ln(),
      i = kn();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  jn = r(
    n((e, t) => {
      t.exports = An().uniqBy;
    })(),
  );
function Mn(e, t, n) {
  return t === !0
    ? (0, jn.default)(e, n)
    : typeof t == `function`
      ? (0, jn.default)(e, t)
      : e;
}
var Nn = n((t) => {
    var n = e(),
      r = a();
    function i(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var o = typeof Object.is == `function` ? Object.is : i,
      s = r.useSyncExternalStore,
      c = n.useRef,
      l = n.useEffect,
      u = n.useMemo,
      d = n.useDebugValue;
    t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var a = c(null);
      if (a.current === null) {
        var f = { hasValue: !1, value: null };
        a.current = f;
      } else f = a.current;
      a = u(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), o(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
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
        [t, n, r, i],
      );
      var p = s(e, a[0], a[1]);
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
  Pn = n((e, t) => {
    t.exports = Nn();
  })(),
  Fn = (0, c.createContext)(null),
  In = (e) => e,
  I = () => {
    var e = (0, c.useContext)(Fn);
    return e ? e.store.dispatch : In;
  },
  Ln = () => {},
  Rn = () => Ln,
  zn = (e, t) => e === t;
function L(e) {
  var t = (0, c.useContext)(Fn);
  return (0, Pn.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : Rn,
    t ? t.store.getState : Ln,
    t ? t.store.getState : Ln,
    t ? e : Ln,
    zn,
  );
}
function Bn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Vn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Hn(
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
var Un = (e) => (Array.isArray(e) ? e : [e]);
function Wn(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Hn(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Gn(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Kn = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  qn = typeof WeakRef < `u` ? WeakRef : Kn,
  Jn = 0,
  Yn = 1;
function Xn() {
  return { s: Jn, v: void 0, o: null, p: null };
}
function Zn(e, t = {}) {
  let n = Xn(),
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
        r === void 0 ? ((t = Xn()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Xn()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Yn) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new qn(c)
            : c));
    }
    return ((s.s = Yn), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Xn()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Qn(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Bn(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Zn,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Un(c),
        p = Un(u),
        m = Wn(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Gn(m, arguments);
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
var R = Qn(Zn),
  $n = Object.assign(
    (e, t = R) => {
      Vn(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => $n },
  ),
  er = n((e) => {
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
  tr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  nr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = tr(),
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
  rr = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = er(),
      n = nr(),
      r = Et();
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
  ir = n((e) => {
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
  ar = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Tn(),
      n = sn(),
      r = dn(),
      i = pn();
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
  or = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = rr(),
      n = ir(),
      r = ar();
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
  sr = r(
    n((e, t) => {
      t.exports = or().sortBy;
    })(),
  ),
  cr = (e) => e.legend.settings,
  lr = (e) => e.legend.size,
  ur = R([(e) => e.legend.payload, cr], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, sr.default)(r, n) : r;
  }),
  dr = 1;
function fr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, c.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, c.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > dr ||
            Math.abs(i.left - t.left) > dr ||
            Math.abs(i.top - t.top) > dr ||
            Math.abs(i.width - t.width) > dr) &&
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
var pr = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  mr = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  hr = {
    INIT: `@@redux/INIT${mr()}`,
    REPLACE: `@@redux/REPLACE${mr()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mr()}`,
  };
function gr(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _r(e, t, n) {
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
    return n(_r)(e, t);
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
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!gr(e)) throw Error(z(7));
    if (e.type === void 0) throw Error(z(8));
    if (typeof e.type != `string`) throw Error(z(17));
    if (c) throw Error(z(9));
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
    if (typeof e != `function`) throw Error(z(10));
    ((r = e), f({ type: hr.REPLACE }));
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
        return (n(), { unsubscribe: e(n) });
      },
      [pr]() {
        return this;
      },
    };
  }
  return (
    f({ type: hr.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [pr]: m }
  );
}
function vr(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: hr.INIT }) === void 0) throw Error(z(12));
    if (n(void 0, { type: hr.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(z(13));
  });
}
function yr(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    vr(n);
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
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function br(...e) {
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
function xr(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(z(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = br(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function Sr(e) {
  return gr(e) && `type` in e && typeof e.type == `string`;
}
var Cr = Symbol.for(`immer-nothing`),
  wr = Symbol.for(`immer-draftable`),
  Tr = Symbol.for(`immer-state`);
function Er(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Dr = Object.getPrototypeOf;
function Or(e) {
  return !!e && !!e[Tr];
}
function kr(e) {
  return e
    ? Mr(e) ||
        Array.isArray(e) ||
        !!e[wr] ||
        !!e.constructor?.[wr] ||
        Rr(e) ||
        zr(e)
    : !1;
}
var Ar = Object.prototype.constructor.toString(),
  jr = new WeakMap();
function Mr(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = jr.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), jr.set(n, r)), r === Ar
  );
}
function Nr(e, t, n = !0) {
  Pr(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Pr(e) {
  let t = e[Tr];
  return t ? t.type_ : Array.isArray(e) ? 1 : Rr(e) ? 2 : zr(e) ? 3 : 0;
}
function Fr(e, t) {
  return Pr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ir(e, t, n) {
  let r = Pr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Lr(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Rr(e) {
  return e instanceof Map;
}
function zr(e) {
  return e instanceof Set;
}
function Br(e) {
  return e.copy_ || e.base_;
}
function Vr(e, t) {
  if (Rr(e)) return new Map(e);
  if (zr(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = Mr(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[Tr];
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
    return Object.create(Dr(e), t);
  }
  {
    let t = Dr(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function Hr(e, t = !1) {
  return (
    Gr(e) ||
      Or(e) ||
      !kr(e) ||
      (Pr(e) > 1 &&
        Object.defineProperties(e, { set: Wr, add: Wr, clear: Wr, delete: Wr }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => Hr(e, !0))),
    e
  );
}
function Ur() {
  Er(2);
}
var Wr = { value: Ur };
function Gr(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var Kr = {};
function qr(e) {
  let t = Kr[e];
  return (t || Er(0, e), t);
}
var Jr;
function Yr() {
  return Jr;
}
function Xr(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Zr(e, t) {
  t &&
    (qr(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Qr(e) {
  ($r(e), e.drafts_.forEach(ti), (e.drafts_ = null));
}
function $r(e) {
  e === Jr && (Jr = e.parent_);
}
function ei(e) {
  return (Jr = Xr(Jr, e));
}
function ti(e) {
  let t = e[Tr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ni(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Tr].modified_ && (Qr(t), Er(4)),
        kr(e) && ((e = ri(t, e)), t.parent_ || ai(t, e)),
        t.patches_ &&
          qr(`Patches`).generateReplacementPatches_(
            n[Tr].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = ri(t, n, [])),
    Qr(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Cr ? void 0 : e
  );
}
function ri(e, t, n) {
  if (Gr(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[Tr];
  if (!i) return (Nr(t, (r, a) => ii(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (ai(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      Nr(a, (r, a) => ii(e, i, t, r, a, n, o), r),
      ai(e, t, !1),
      n &&
        e.patches_ &&
        qr(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function ii(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = Gr(i);
  if (!s || o) {
    if (Or(i)) {
      let o = ri(
        e,
        i,
        a && t && t.type_ !== 3 && !Fr(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((Ir(n, r, o), Or(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (kr(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (ri(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (Rr(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          ai(e, i));
    }
  }
}
function ai(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Hr(t, n);
}
function oi(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : Yr(),
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
    a = si;
  n && ((i = [r]), (a = ci));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var si = {
    get(e, t) {
      if (t === Tr) return e;
      let n = Br(e);
      if (!Fr(n, t)) return ui(e, n, t);
      let r = n[t];
      return e.finalized_ || !kr(r)
        ? r
        : r === li(e.base_, t)
          ? (pi(e), (e.copy_[t] = hi(r, e)))
          : r;
    },
    has(e, t) {
      return t in Br(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Br(e));
    },
    set(e, t, n) {
      let r = di(Br(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = li(Br(e), t),
          i = r?.[Tr];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (Lr(n, r) && (n !== void 0 || Fr(e.base_, t))) return !0;
        (pi(e), fi(e));
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
        li(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), pi(e), fi(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Br(e),
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
      Er(11);
    },
    getPrototypeOf(e) {
      return Dr(e.base_);
    },
    setPrototypeOf() {
      Er(12);
    },
  },
  ci = {};
(Nr(si, (e, t) => {
  ci[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (ci.deleteProperty = function (e, t) {
    return ci.set.call(this, e, t, void 0);
  }),
  (ci.set = function (e, t, n) {
    return si.set.call(this, e[0], t, n, e[0]);
  }));
function li(e, t) {
  let n = e[Tr];
  return (n ? Br(n) : e)[t];
}
function ui(e, t, n) {
  let r = di(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function di(e, t) {
  if (!(t in e)) return;
  let n = Dr(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Dr(n);
  }
}
function fi(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && fi(e.parent_));
}
function pi(e) {
  e.copy_ ||= Vr(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var mi = class {
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
        (typeof t != `function` && Er(6),
          n !== void 0 && typeof n != `function` && Er(7));
        let r;
        if (kr(e)) {
          let i = ei(this),
            a = hi(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Qr(i) : $r(i);
          }
          return (Zr(i, n), ni(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Cr && (r = void 0),
            this.autoFreeze_ && Hr(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (qr(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        Er(1, e);
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
    (kr(e) || Er(8), Or(e) && (e = gi(e)));
    let t = ei(this),
      n = hi(e, void 0);
    return ((n[Tr].isManual_ = !0), $r(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[Tr];
    (n && n.isManual_) || Er(9);
    let { scope_: r } = n;
    return (Zr(r, t), ni(void 0, r));
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
    let r = qr(`Patches`).applyPatches_;
    return Or(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function hi(e, t) {
  let n = Rr(e)
    ? qr(`MapSet`).proxyMap_(e, t)
    : zr(e)
      ? qr(`MapSet`).proxySet_(e, t)
      : oi(e, t);
  return ((t ? t.scope_ : Yr()).drafts_.push(n), n);
}
function gi(e) {
  return (Or(e) || Er(10, e), _i(e));
}
function _i(e) {
  if (!kr(e) || Gr(e)) return e;
  let t = e[Tr],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = Vr(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = Vr(e, !0);
  return (
    Nr(
      n,
      (e, t) => {
        Ir(n, e, _i(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var vi = new mi(),
  yi = vi.produce,
  bi = vi.setUseStrictIteration.bind(vi);
function xi(e) {
  return e;
}
function Si(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Ci(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function wi(
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
var Ti = (e) => (Array.isArray(e) ? e : [e]);
function Ei(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    wi(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Di(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Oi = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ki = typeof WeakRef < `u` ? WeakRef : Oi,
  Ai = 0,
  ji = 1;
function Mi() {
  return { s: Ai, v: void 0, o: null, p: null };
}
function Ni(e, t = {}) {
  let n = Mi(),
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
        r === void 0 ? ((t = Mi()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Mi()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === ji) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new ki(c)
            : c));
    }
    return ((s.s = ji), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Mi()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Pi(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Si(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Ni,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Ti(c),
        p = Ti(u),
        m = Ei(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Di(m, arguments);
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
var Fi = Pi(Ni),
  Ii = Object.assign(
    (e, t = Fi) => {
      Ci(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Ii },
  );
function Li(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var Ri = Li(),
  zi = Li;
((...e) => {
  let t = Pi(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(Or(e) ? gi(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(Ni);
var Bi =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? br
            : br.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var Vi = (e) => e && typeof e.match == `function`;
function Hi(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(so(0));
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
    (n.match = (t) => Sr(t) && t.type === e),
    n
  );
}
var Ui = class e extends Array {
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
function Wi(e) {
  return kr(e) ? yi(e, () => {}) : e;
}
function Gi(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Ki(e) {
  return typeof e == `boolean`;
}
var qi = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new Ui();
      return (t && (Ki(t) ? a.push(Ri) : a.push(zi(t.extraArgument))), a);
    },
  Ji = `RTK_autoBatch`,
  Yi = () => (e) => ({ payload: e, meta: { [Ji]: !0 } }),
  Xi = (e) => (t) => {
    setTimeout(t, e);
  },
  Zi =
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
                : Xi(10)
              : e.type === `callback`
                ? e.queueNotification
                : Xi(e.timeout),
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
              (i = !e?.meta?.[Ji]),
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
  Qi = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new Ui(e);
      return (n && r.push(Zi(typeof n == `object` ? n : void 0)), r);
    };
function $i(e) {
  let t = qi(),
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
  else if (gr(n)) c = yr(n);
  else throw Error(so(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = br;
  i && (u = Bi({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Qi(xr(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return _r(c, o, p);
}
function ea(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(so(28));
        if (r in t) throw Error(so(29));
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
bi(!1);
function ta(e) {
  return typeof e == `function`;
}
function na(e, t) {
  let [n, r, i] = ea(t),
    a;
  if (ta(e)) a = () => Wi(e());
  else {
    let t = Wi(e);
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
          if (Or(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (kr(e)) return yi(e, (e) => n(e, t));
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
var ra = (e, t) => (Vi(e) ? e.match(t) : e(t));
function ia(...e) {
  return (t) => e.some((e) => ra(e, t));
}
var aa = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  oa = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += aa[(Math.random() * 64) | 0];
    return t;
  },
  sa = [`name`, `message`, `stack`, `code`],
  ca = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  la = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  ua = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of sa) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  da = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = Hi(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = Hi(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = Hi(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || ua)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : oa(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(da)
            : o.addEventListener(`abort`, () => m(da), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((pa(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new ca(e, t),
                    fulfillWithValue: (e, t) => new la(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof ca) throw t;
                  return t instanceof la
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof ca ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(fa);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: ia(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function fa(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function pa(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var ma = Symbol.for(`rtk-slice-createasyncthunk`),
  ha = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(ha || {});
function ga(e, t) {
  return `${e}/${t}`;
}
function _a({ creators: e } = {}) {
  let t = e?.asyncThunk?.[ma];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(so(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(ba()) : e.reducers) || {},
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
          if (!n) throw Error(so(12));
          if (n in o.sliceCaseReducersByType) throw Error(so(13));
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
          type: ga(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      Sa(a) ? wa(o, a, s, t) : xa(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? ea(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return na(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = Gi(d, r, m)), i);
      }
      function i(t = l) {
        return Gi(
          Gi(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = va(a, t, () => Gi(d, t, m), n);
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
function va(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var ya = _a();
function ba() {
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
function xa({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Ca(r)) throw Error(so(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Hi(e, o) : Hi(e));
}
function Sa(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Ca(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function wa({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(so(18));
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
      fulfilled: o || Ta,
      pending: s || Ta,
      rejected: c || Ta,
      settled: l || Ta,
    }));
}
function Ta() {}
var Ea = `task`,
  Da = `listener`,
  Oa = `completed`,
  ka = `cancelled`,
  Aa = `task-${ka}`,
  ja = `task-${Oa}`,
  Ma = `${Da}-${ka}`,
  Na = `${Da}-${Oa}`,
  Pa = class {
    constructor(e) {
      ((this.code = e), (this.message = `${Ea} ${ka} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  Fa = (e, t) => {
    if (typeof e != `function`) throw TypeError(so(32));
  },
  Ia = () => {},
  La = (e, t = Ia) => (e.catch(t), e),
  Ra = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  za = (e, t) => {
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
  Ba = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new Pa(t);
    }
  };
function Va(e, t) {
  let n = Ia;
  return new Promise((r, i) => {
    let a = () => i(new Pa(e.reason));
    e.aborted ? a() : ((n = Ra(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Ia;
  });
}
var Ha = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Pa ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Ua = (e) => (t) => La(Va(e, t).then((t) => (Ba(e), t))),
  Wa = (e) => {
    let t = Ua(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: Ga } = Object,
  Ka = {},
  qa = `listenerMiddleware`,
  Ja = (e, t) => {
    let n = (t) => Ra(e, () => za(t, e.reason));
    return (r, i) => {
      Fa(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = Ha(
        async () => {
          (Ba(e), Ba(a.signal));
          let t = await r({
            pause: Ua(a.signal),
            delay: Wa(a.signal),
            signal: a.signal,
          });
          return (Ba(a.signal), t);
        },
        () => za(a, ja),
      );
      return (
        i?.autoJoin && t.push(o.catch(Ia)),
        {
          result: Ua(e)(o),
          cancel() {
            za(a, Aa);
          },
        }
      );
    };
  },
  Ya = (e, t) => {
    let n = async (n, r) => {
      Ba(t);
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
        let e = await Va(t, Promise.race(a));
        return (Ba(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => La(n(e, t));
  },
  Xa = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = Hi(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(so(21));
    return (Fa(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Za = Ga(
    (e) => {
      let { type: t, predicate: n, effect: r } = Xa(e);
      return {
        id: oa(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(so(22));
        },
      };
    },
    { withTypes: () => Za },
  ),
  Qa = (e, t) => {
    let { type: n, effect: r, predicate: i } = Xa(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  $a = (e) => {
    e.pending.forEach((e) => {
      za(e, Ma);
    });
  },
  eo = (e, t) => () => {
    for (let e of t.keys()) $a(e);
    e.clear();
  },
  to = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  no = Ga(Hi(`${qa}/add`), { withTypes: () => no }),
  ro = Hi(`${qa}/removeAll`),
  io = Ga(Hi(`${qa}/remove`), { withTypes: () => io }),
  ao = (...e) => {
    console.error(`${qa}/error`, ...e);
  },
  oo = (e = {}) => {
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
      { extra: a, onError: o = ao } = e;
    Fa(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && $a(e));
        }
      ),
      c = (e) => {
        let n = Qa(t, e) ?? Za(e);
        return s(n);
      };
    Ga(c, { withTypes: () => c });
    let l = (e) => {
      let n = Qa(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && $a(n)), !!n);
    };
    Ga(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = Ya(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                Ga({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: Wa(u.signal),
                  pause: Ua(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Ja(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (za(e, Ma), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (za(u, Ma), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Ba(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Pa || to(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), za(u, Na), i(e), e.pending.delete(u));
        }
      },
      d = eo(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!Sr(r)) return n(r);
        if (no.match(r)) return c(r.payload);
        if (ro.match(r)) {
          d();
          return;
        }
        if (io.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === Ka) throw Error(so(23));
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
                ((s = !1), to(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = Ka;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function so(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var co = ya({
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
  { setMargin: lo, setLayout: uo, setChartSize: fo, setScale: po } = co.actions,
  mo = co.reducer;
function ho(e, t) {
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
function go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ho(Object(n), !0).forEach(function (t) {
          _o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ho(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _o(e, t, n) {
  return (
    (t = vo(t)) in e
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
function vo(e) {
  var t = yo(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yo(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var bo = Math.PI / 180,
  xo = (e) => (e * 180) / Math.PI,
  B = (e, t, n, r) => ({
    x: e + Math.cos(-bo * r) * n,
    y: t + Math.sin(-bo * r) * n,
  }),
  So = function (e, t) {
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
  Co = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  wo = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = Co({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: xo(c), angleInRadian: c }
    );
  },
  To = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  Eo = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  Do = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = wo({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = To(t),
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
    return d ? go(go({}, t), {}, { radius: i, angle: Eo(u, t) }) : null;
  };
function Oo(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function ko(e, t) {
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
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ko(Object(n), !0).forEach(function (t) {
          jo(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ko(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jo(e, t, n) {
  return (
    (t = Mo(t)) in e
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
function Mo(e) {
  var t = No(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function No(e, t) {
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
    : Mt(t)
      ? (0, Ot.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var Po = (e, t, n, r, i) => {
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
        if (kt(l - c) !== kt(u - l)) {
          var f = [];
          if (kt(u - l) === kt(i[1] - i[0])) {
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
  Fo = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        N(e[a])
      )
        return Ao(Ao({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        N(e[o])
      )
        return Ao(Ao({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  Io = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Lo = (e, t, n, r) => {
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
  Ro = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? kt(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !At(e.coordinate))
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
  zo = 1e-4,
  Bo = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - zo,
        a = Math.max(r[0], r[1]) + zo,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Vo = (e, t) => {
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
  Ho = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = At(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: bt,
    none: ht,
    silhouette: xt,
    wiggle: St,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = At(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  Uo = (e, t, n) => {
    var r = Ho[n];
    return yt()
      .keys(t)
      .value((e, t) => +V(e, t, 0))
      .order(gt)
      .offset(r)(e);
  };
function Wo(e) {
  return e == null ? void 0 : String(e);
}
function Go(e) {
  var { axis: t, ticks: n, bandSize: r, entry: i, index: a, dataKey: o } = e;
  if (t.type === `category`) {
    if (!t.allowDuplicatedCategory && t.dataKey && !F(i[t.dataKey])) {
      var s = Lt(n, `value`, i[t.dataKey]);
      if (s) return s.coordinate + r / 2;
    }
    return n[a] ? n[a].coordinate + r / 2 : null;
  }
  var c = V(i, F(o) ? t.dataKey : o);
  return F(c) ? null : t.scale(c);
}
var Ko = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = V(a, t.dataKey, t.scale.domain()[o]);
    return F(s) ? null : t.scale(s) - i / 2 + r;
  },
  qo = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Jo = (e) => {
    var t = e.flat(2).filter(N);
    return [Math.min(...t), Math.max(...t)];
  },
  Yo = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Xo = (e, t, n) => {
    if (e != null)
      return Yo(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Jo(Oo(r, t, n));
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
  Zo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Qo = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  $o = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, sr.default)(t, (e) => e.coordinate),
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
function es(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return Ao(Ao({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function ts(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function ns(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? Do({ x: e, y: t }, r)
      : null;
}
var rs = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return Ao(
          Ao(Ao({}, r), B(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return Ao(
        Ao(Ao({}, r), B(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  is = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  as = (e) => e.layout.width,
  os = (e) => e.layout.height,
  ss = (e) => e.layout.scale,
  cs = (e) => e.layout.margin,
  ls = R(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  us = R(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  ds = `data-recharts-item-index`;
function fs(e, t) {
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
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fs(Object(n), !0).forEach(function (t) {
          ms(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ms(e, t, n) {
  return (
    (t = hs(t)) in e
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
function hs(e) {
  var t = gs(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gs(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var _s = (e) => e.brush.height;
function vs(e) {
  return us(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function ys(e) {
  return us(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function bs(e) {
  return ls(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function xs(e) {
  return ls(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var H = R(
    [as, os, cs, _s, vs, ys, bs, xs, cr, lr],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ps(
          ps({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = Fo(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ps(
        ps({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  Ss = R(H, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  Cs = R(as, os, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  ws = (0, c.createContext)(null),
  Ts = () => (0, c.useContext)(ws) != null,
  Es = (e) => e.brush,
  Ds = R([Es, H, cs], (e, t, n) => ({
    height: e.height,
    x: N(e.x) ? e.x : t.left,
    y: N(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: N(e.width) ? e.width : t.width,
  })),
  Os = n((e) => {
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
  ks = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Os();
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
  As = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ks();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  js = r(
    n((e, t) => {
      t.exports = As().throttle;
    })(),
  ),
  Ms = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = jt(r) ? e : Number(r),
      c = jt(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  Ns = { width: 0, height: 0, overflow: `visible` },
  Ps = { width: 0, overflowX: `visible` },
  Fs = { height: 0, overflowY: `visible` },
  Is = {},
  Ls = (e) => {
    var { width: t, height: n } = e,
      r = jt(t),
      i = jt(n);
    return r && i ? Ns : r ? Ps : i ? Fs : Is;
  };
function Rs(e) {
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
function zs(e) {
  return Number.isFinite(e);
}
function Bs(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function Vs() {
  return (
    (Vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vs.apply(null, arguments)
  );
}
function Hs(e, t) {
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
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hs(Object(n), !0).forEach(function (t) {
          Ws(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ws(e, t, n) {
  return (
    (t = Gs(t)) in e
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
function Gs(e) {
  var t = Ks(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ks(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var qs = (0, c.createContext)({ width: -1, height: -1 });
function Js(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, c.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : c.createElement(qs.Provider, { value: i }, t);
}
var Ys = () => (0, c.useContext)(qs),
  Xs = (0, c.forwardRef)((e, t) => {
    var {
        aspect: n,
        initialDimension: r = { width: -1, height: -1 },
        width: i,
        height: a,
        minWidth: o = 0,
        minHeight: s,
        maxHeight: l,
        children: u,
        debounce: f = 0,
        id: p,
        className: m,
        onResize: h,
        style: g = {},
      } = e,
      _ = (0, c.useRef)(null),
      v = (0, c.useRef)();
    ((v.current = h), (0, c.useImperativeHandle)(t, () => _.current));
    var [y, b] = (0, c.useState)({
        containerWidth: r.width,
        containerHeight: r.height,
      }),
      x = (0, c.useCallback)((e, t) => {
        b((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, c.useEffect)(() => {
      var e = (e) => {
        var t,
          { width: n, height: r } = e[0].contentRect;
        (x(n, r), (t = v.current) == null || t.call(v, n, r));
      };
      f > 0 && (e = (0, js.default)(e, f, { trailing: !0, leading: !1 }));
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
      { calculatedWidth: w, calculatedHeight: T } = Ms(S, C, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: l,
      });
    return c.createElement(
      `div`,
      {
        id: p ? `${p}` : void 0,
        className: d(`recharts-responsive-container`, m),
        style: Us(
          Us({}, g),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: l },
        ),
        ref: _,
      },
      c.createElement(
        `div`,
        { style: Ls({ width: i, height: a }) },
        c.createElement(Js, { width: w, height: T }, u),
      ),
    );
  }),
  Zs = (0, c.forwardRef)((e, t) => {
    var n = Ys();
    if (Bs(n.width) && Bs(n.height)) return e.children;
    var { width: r, height: i } = Rs({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = Ms(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return N(a) && N(o)
      ? c.createElement(Js, { width: a, height: o }, e.children)
      : c.createElement(Xs, Vs({}, e, { width: r, height: i, ref: t }));
  }),
  Qs = () => {
    var e = Ts(),
      t = L(Ss),
      n = L(Ds),
      r = L(Es)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  $s = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  ec = () => L(H) ?? $s,
  tc = () => L(as),
  nc = () => L(os),
  rc = () => L((e) => e.layout.margin),
  U = (e) => e.layout.layoutType,
  ic = () => L(U),
  ac = (e) => {
    var t = I(),
      n = Ts(),
      { width: r, height: i } = e,
      a = Ys(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, c.useEffect)(() => {
        !n && Bs(o) && Bs(s) && t(fo({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  oc = ya({
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
          e.payload.push(xi(t.payload));
        },
        prepare: Yi(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = gi(e).payload.indexOf(xi(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: Yi(),
      },
    },
  }),
  {
    setLegendSize: sc,
    setLegendSettings: cc,
    addLegendPayload: lc,
    removeLegendPayload: uc,
  } = oc.actions,
  dc = oc.reducer;
function fc() {
  return (
    (fc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fc.apply(null, arguments)
  );
}
function pc(e, t) {
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
function mc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pc(Object(n), !0).forEach(function (t) {
          hc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hc(e, t, n) {
  return (
    (t = gc(t)) in e
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
function gc(e) {
  var t = _c(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _c(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vc(e) {
  return Array.isArray(e) && Mt(e[0]) && Mt(e[1]) ? e.join(` ~ `) : e;
}
var yc = (e) => {
    var {
        separator: t = ` : `,
        contentStyle: n = {},
        itemStyle: r = {},
        labelStyle: i = {},
        payload: a,
        formatter: o,
        itemSorter: s,
        wrapperClassName: l,
        labelClassName: u,
        label: f,
        labelFormatter: p,
        accessibilityLayer: m = !1,
      } = e,
      h = () => {
        if (a && a.length) {
          var e = { padding: 0, margin: 0 },
            n = (s ? (0, sr.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || vc,
                { value: s, name: l } = e,
                u = s,
                d = l;
              if (i) {
                var f = i(s, l, e, n, a);
                if (Array.isArray(f)) [u, d] = f;
                else if (f != null) u = f;
                else return null;
              }
              var p = mc(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return c.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: p,
                },
                Mt(d)
                  ? c.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      d,
                    )
                  : null,
                Mt(d)
                  ? c.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                c.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  u,
                ),
                c.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return c.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      g = mc(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      _ = mc({ margin: 0 }, i),
      v = !F(f),
      y = v ? f : ``,
      b = d(`recharts-default-tooltip`, l),
      x = d(`recharts-tooltip-label`, u);
    v && p && a != null && (y = p(f, a));
    var S = m ? { role: `status`, "aria-live": `assertive` } : {};
    return c.createElement(
      `div`,
      fc({ className: b, style: g }, S),
      c.createElement(
        `p`,
        { className: x, style: _ },
        c.isValidElement(y) ? y : `${y}`,
      ),
      h(),
    );
  },
  bc = `recharts-tooltip-wrapper`,
  xc = { visibility: `hidden` };
function Sc(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return d(bc, {
    [`${bc}-right`]: N(n) && t && N(t.x) && n >= t.x,
    [`${bc}-left`]: N(n) && t && N(t.x) && n < t.x,
    [`${bc}-bottom`]: N(r) && t && N(t.y) && r >= t.y,
    [`${bc}-top`]: N(r) && t && N(t.y) && r < t.y,
  });
}
function Cc(e) {
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
function wc(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function Tc(e) {
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
      ? ((u = Cc({
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
        (d = Cc({
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
        (l = wc({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = xc),
    {
      cssProperties: l,
      cssClasses: Sc({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function Ec(e, t) {
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
function Dc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ec(Object(n), !0).forEach(function (t) {
          Oc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ec(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Oc(e, t, n) {
  return (
    (t = kc(t)) in e
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
function kc(e) {
  var t = Ac(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ac(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var jc = class extends c.PureComponent {
    constructor() {
      (super(...arguments),
        Oc(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        Oc(this, `handleKeyDown`, (e) => {
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
        { cssClasses: v, cssProperties: y } = Tc({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: l,
          position: u,
          reverseDirection: d,
          tooltipBox: { height: h.height, width: h.width },
          useTranslate3d: f,
          viewBox: p,
        }),
        b = Dc(
          Dc(
            {},
            _
              ? {}
              : Dc(
                  Dc(
                    { transition: s && e ? `transform ${n}ms ${r}` : void 0 },
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
      return c.createElement(
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
  Mc = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  Nc = () => L((e) => e.rootProps.accessibilityLayer);
function Pc() {
  return (
    (Pc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pc.apply(null, arguments)
  );
}
function Fc(e, t) {
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
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fc(Object(n), !0).forEach(function (t) {
          Lc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Lc(e, t, n) {
  return (
    (t = Rc(t)) in e
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
function Rc(e) {
  var t = zc(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zc(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Bc = {
    curveBasisClosed: Je,
    curveBasisOpen: Xe,
    curveBasis: Ke,
    curveBumpX: Se,
    curveBumpY: Ce,
    curveLinearClosed: Qe,
    curveLinear: ge,
    curveMonotoneX: ot,
    curveMonotoneY: st,
    curveNatural: ut,
    curveStep: ft,
    curveStepAfter: mt,
    curveStepBefore: pt,
  },
  Vc = (e) => zs(e.x) && zs(e.y),
  Hc = (e) => e.x,
  Uc = (e) => e.y,
  Wc = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${Rt(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? Bc[`${n}${t === `vertical` ? `Y` : `X`}`]
      : Bc[n] || ge;
  },
  Gc = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = Wc(t, i),
      s = a ? n.filter(Vc) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => Vc(e)) : r,
        u = s.map((e, t) => Ic(Ic({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? be()
                .y(Uc)
                .x1(Hc)
                .x0((e) => e.base.x)
            : be()
                .x(Hc)
                .y1(Uc)
                .y0((e) => e.base.y)),
        c.defined(Vc).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && N(r)
          ? be().y(Uc).x1(Hc).x0(r)
          : N(r)
            ? be().x(Hc).y1(Uc).y0(r)
            : ye().x(Hc).y(Uc)),
      c.defined(Vc).curve(o),
      c(s)
    );
  },
  Kc = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? Gc(e) : r;
    return c.createElement(
      `path`,
      Pc({}, _(e), en(e), {
        className: d(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  qc = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function Jc() {
  return (
    (Jc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jc.apply(null, arguments)
  );
}
function Yc(e, t) {
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
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yc(Object(n), !0).forEach(function (t) {
          Zc(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zc(e, t, n) {
  return (
    (t = Qc(t)) in e
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
function Qc(e) {
  var t = $c(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function $c(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function el(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = tl(e, t);
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
function tl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var nl = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  rl = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      l = el(e, qc),
      u = Xc({ x: t, y: n, top: r, left: i, width: a, height: o }, l);
    return !N(t) || !N(n) || !N(a) || !N(o) || !N(r) || !N(i)
      ? null
      : c.createElement(
          `path`,
          Jc({}, y(u), {
            className: d(`recharts-cross`, s),
            d: nl(t, n, a, o, r, i),
          }),
        );
  };
function il(e, t, n, r) {
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
function al(e, t) {
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
function ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? al(Object(n), !0).forEach(function (t) {
          sl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : al(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sl(e, t, n) {
  return (
    (t = cl(t)) in e
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
function cl(e) {
  var t = ll(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ll(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ul(e, t) {
  var n = ol({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function dl() {}
function fl(e) {
  return e != null;
}
function pl(e, t) {
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
function ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pl(Object(n), !0).forEach(function (t) {
          hl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hl(e, t, n) {
  return (
    (t = gl(t)) in e
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
function gl(e) {
  var t = _l(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _l(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vl = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  yl = (e, t, n) => e.map((e) => `${vl(e)} ${t}ms ${n}`).join(`,`),
  bl = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  xl = (e, t) =>
    Object.keys(t).reduce((n, r) => ml(ml({}, n), {}, { [r]: e(r, t[r]) }), {});
function Sl(e, t) {
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
      ? Sl(Object(n), !0).forEach(function (t) {
          Cl(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Sl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Cl(e, t, n) {
  return (
    (t = wl(t)) in e
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
function wl(e) {
  var t = Tl(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Tl(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var El = (e, t, n) => e + (t - e) * n,
  Dl = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  Ol = (e, t, n) => {
    var r = xl((t, n) => {
      if (Dl(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return W(W({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? xl(
          (e, t) =>
            Dl(t)
              ? W(
                  W({}, t),
                  {},
                  {
                    velocity: El(t.velocity, r[e].velocity, n),
                    from: El(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : Ol(e, r, n - 1);
  };
function kl(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) => W(W({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => xl((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Dl).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = Ol(n, s, f)),
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
function Al(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => W(W({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = xl((e, t) => El(...t, n(d)), c);
      if ((a(W(W(W({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = xl((e, t) => El(...t, n(1)), c);
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
var jl = (e, t, n, r, i, a) => {
    var o = bl(e, t);
    return n.isStepper === !0 ? kl(e, t, n, o, i, a) : Al(e, t, n, r, o, i, a);
  },
  Ml = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  Nl = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Pl = (e, t) => (n) => Nl(Ml(e, t), n),
  Fl = (e, t) => (n) =>
    Nl(
      [
        ...Ml(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  Il = function () {
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
    var o = Pl(e, t),
      s = Pl(n, r),
      c = Fl(e, t),
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
  Ll = function () {
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
  Rl = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return Il(e);
        case `spring`:
          return Ll();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return Il(e);
      }
    return typeof e == `function` ? e : null;
  };
function zl(e) {
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
var Bl = class {
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
function Vl() {
  return zl(new Bl());
}
var Hl = (0, c.createContext)(Vl);
function Ul(e, t) {
  var n = (0, c.useContext)(Hl);
  return (0, c.useMemo)(() => t ?? n(e), [e, t, n]);
}
var Wl = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  Gl = { t: 0 },
  Kl = { t: 1 };
function ql(e) {
  var t = ul(e, Wl),
    {
      isActive: n,
      canBegin: r,
      duration: i,
      easing: a,
      begin: o,
      onAnimationEnd: s,
      onAnimationStart: l,
      children: u,
    } = t,
    d = Ul(t.animationId, t.animationManager),
    [f, p] = (0, c.useState)(n ? Gl : Kl),
    m = (0, c.useRef)(null);
  return (
    (0, c.useEffect)(() => {
      n || p(Kl);
    }, [n]),
    (0, c.useEffect)(() => {
      if (!n || !r) return dl;
      var e = jl(Gl, Kl, Rl(a), i, p, d.getTimeoutController());
      return (
        d.start([
          l,
          o,
          () => {
            m.current = e();
          },
          i,
          s,
        ]),
        () => {
          (d.stop(), m.current && m.current(), s());
        }
      );
    }, [n, r, i, a, o, l, s, d]),
    u(f.t)
  );
}
function Jl(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, c.useRef)(Pt(t)),
    r = (0, c.useRef)(e);
  return (r.current !== e && ((n.current = Pt(t)), (r.current = e)), n.current);
}
var Yl = [`radius`],
  Xl = [`radius`];
function Zl(e, t) {
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
function Ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zl(Object(n), !0).forEach(function (t) {
          $l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $l(e, t, n) {
  return (
    (t = eu(t)) in e
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
function eu(e) {
  var t = tu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nu.apply(null, arguments)
  );
}
function ru(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = iu(e, t);
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
function iu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var au = (e, t, n, r, i) => {
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
  ou = {
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
  su = (e) => {
    var t = ul(e, ou),
      n = (0, c.useRef)(null),
      [r, i] = (0, c.useState)(-1);
    (0, c.useEffect)(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && i(e);
        } catch {}
    }, []);
    var { x: a, y: o, width: s, height: l, radius: u, className: f } = t,
      {
        animationEasing: p,
        animationDuration: m,
        animationBegin: h,
        isAnimationActive: g,
        isUpdateAnimationActive: _,
      } = t,
      v = (0, c.useRef)(s),
      b = (0, c.useRef)(l),
      x = (0, c.useRef)(a),
      S = (0, c.useRef)(o),
      C = Jl(
        (0, c.useMemo)(
          () => ({ x: a, y: o, width: s, height: l, radius: u }),
          [a, o, s, l, u],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || l !== +l || s === 0 || l === 0)
      return null;
    var w = d(`recharts-rectangle`, f);
    if (!_) {
      var T = y(t),
        { radius: E } = T,
        D = ru(T, Yl);
      return c.createElement(
        `path`,
        nu({}, D, {
          radius: typeof u == `number` ? u : void 0,
          className: w,
          d: au(a, o, s, l, u),
        }),
      );
    }
    var O = v.current,
      k = b.current,
      A = x.current,
      ee = S.current,
      j = `0px ${r === -1 ? 1 : r}px`,
      M = `${r}px 0px`,
      te = yl([`strokeDasharray`], m, typeof p == `string` ? p : void 0);
    return c.createElement(
      ql,
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
        var r = P(O, s, e),
          i = P(k, l, e),
          d = P(A, a, e),
          f = P(ee, o, e);
        n.current &&
          ((v.current = r), (b.current = i), (x.current = d), (S.current = f));
        var p = g
            ? e > 0
              ? { transition: te, strokeDasharray: M }
              : { strokeDasharray: j }
            : { strokeDasharray: M },
          m = y(t),
          { radius: h } = m,
          _ = ru(m, Xl);
        return c.createElement(
          `path`,
          nu({}, _, {
            radius: typeof u == `number` ? u : void 0,
            className: w,
            d: au(d, f, r, i, u),
            ref: n,
            style: Ql(Ql({}, p), t.style),
          }),
        );
      },
    );
  };
function cu(e) {
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
function lu() {
  return (
    (lu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lu.apply(null, arguments)
  );
}
var uu = (e, t) => kt(t - e) * Math.min(Math.abs(t - e), 359.999),
  du = (e) => {
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
      u = Math.asin(s / l) / bo,
      d = c ? i : i + a * u,
      f = B(t, n, l, d),
      p = B(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: B(t, n, l * Math.cos(u * bo), m),
      theta: u,
    };
  },
  fu = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = uu(a, o),
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
  pu = (e) => {
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
      u = kt(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = du({
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
      } = du({
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
        : fu({
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
        } = du({
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
        } = du({
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
  mu = {
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
  hu = (e) => {
    var t = ul(e, mu),
      {
        cx: n,
        cy: r,
        innerRadius: i,
        outerRadius: a,
        cornerRadius: o,
        forceCornerRadius: s,
        cornerIsExternal: l,
        startAngle: u,
        endAngle: f,
        className: p,
      } = t;
    if (a < i || u === f) return null;
    var m = d(`recharts-sector`, p),
      h = a - i,
      g = Ft(o, h, 0, !0),
      _ =
        g > 0 && Math.abs(u - f) < 360
          ? pu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(g, h / 2),
              forceCornerRadius: s,
              cornerIsExternal: l,
              startAngle: u,
              endAngle: f,
            })
          : fu({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: u,
              endAngle: f,
            });
    return c.createElement(`path`, lu({}, y(t), { className: m, d: _ }));
  };
function gu(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = B(s, c, l, d),
        p = B(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return cu(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var _u = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = tr();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  vu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = _u();
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
  yu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ar(),
      n = vu();
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
  bu = n((e, t) => {
    t.exports = yu().range;
  });
function xu(e, t) {
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
function Su(e, t) {
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
function Cu(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === xu || e === Su ? e : wu), (n = e), (r = e))
    : ((t = xu), (n = (t, n) => xu(e(t), n)), (r = (t, n) => e(t) - n));
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
function wu() {
  return 0;
}
function Tu(e) {
  return e === null ? NaN : +e;
}
function* Eu(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Du = Cu(xu),
  Ou = Du.right;
(Du.left, Cu(Tu).center);
var ku = class extends Map {
  constructor(e, t = Nu) {
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
    return super.get(Au(this, e));
  }
  has(e) {
    return super.has(Au(this, e));
  }
  set(e, t) {
    return super.set(ju(this, e), t);
  }
  delete(e) {
    return super.delete(Mu(this, e));
  }
};
function Au({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function ju({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Mu({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function Nu(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function Pu(e = xu) {
  if (e === xu) return Fu;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function Fu(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var Iu = Math.sqrt(50),
  Lu = Math.sqrt(10),
  Ru = Math.sqrt(2);
function zu(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= Iu ? 10 : a >= Lu ? 5 : a >= Ru ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? zu(e, t, n * 2) : [s, c, l]
  );
}
function Bu(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? zu(t, e, n) : zu(e, t, n);
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
function Vu(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), zu(e, t, n)[2]);
}
function Hu(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? Vu(t, e, n) : Vu(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Uu(e, t) {
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
function Wu(e, t) {
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
function Gu(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? Fu : Pu(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      Gu(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Ku(e, n, t), i(e[r], a) > 0 && Ku(e, n, r); o < s;) {
      for (Ku(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? Ku(e, n, s) : (++s, Ku(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Ku(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function qu(e, t, n) {
  if (((e = Float64Array.from(Eu(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return Wu(e);
    if (t >= 1) return Uu(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = Uu(Gu(e, a).subarray(0, a + 1));
    return o + (Wu(e.subarray(a + 1)) - o) * (i - a);
  }
}
function Ju(e, t, n = Tu) {
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
function Yu(e, t, n) {
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
function Xu(e, t) {
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
function Zu(e, t) {
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
var Qu = Symbol(`implicit`);
function $u() {
  var e = new ku(),
    t = [],
    n = [],
    r = Qu;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== Qu) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new ku()));
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
      return $u(t, n).unknown(r);
    }),
    Xu.apply(i, arguments),
    i
  );
}
function ed() {
  var e = $u().unknown(void 0),
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
    var m = Yu(e).map(function (e) {
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
      return ed(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    Xu.apply(d(), arguments)
  );
}
function td(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return td(t());
    }),
    e
  );
}
function nd() {
  return td(ed.apply(null, arguments).paddingInner(1));
}
function rd(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function id(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ad() {}
var od = 0.7,
  sd = 1 / od,
  cd = `\\s*([+-]?\\d+)\\s*`,
  ld = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  ud = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  dd = /^#([0-9a-f]{3,8})$/,
  fd = RegExp(`^rgb\\(${cd},${cd},${cd}\\)$`),
  pd = RegExp(`^rgb\\(${ud},${ud},${ud}\\)$`),
  md = RegExp(`^rgba\\(${cd},${cd},${cd},${ld}\\)$`),
  hd = RegExp(`^rgba\\(${ud},${ud},${ud},${ld}\\)$`),
  gd = RegExp(`^hsl\\(${ld},${ud},${ud}\\)$`),
  _d = RegExp(`^hsla\\(${ld},${ud},${ud},${ld}\\)$`),
  vd = {
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
rd(ad, Cd, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: yd,
  formatHex: yd,
  formatHex8: bd,
  formatHsl: xd,
  formatRgb: Sd,
  toString: Sd,
});
function yd() {
  return this.rgb().formatHex();
}
function bd() {
  return this.rgb().formatHex8();
}
function xd() {
  return Id(this).formatHsl();
}
function Sd() {
  return this.rgb().formatRgb();
}
function Cd(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = dd.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? wd(t)
          : n === 3
            ? new Od(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Td(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? Td(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = fd.exec(e))
        ? new Od(t[1], t[2], t[3], 1)
        : (t = pd.exec(e))
          ? new Od(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = md.exec(e))
            ? Td(t[1], t[2], t[3], t[4])
            : (t = hd.exec(e))
              ? Td(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = gd.exec(e))
                ? Fd(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = _d.exec(e))
                  ? Fd(t[1], t[2] / 100, t[3] / 100, t[4])
                  : vd.hasOwnProperty(e)
                    ? wd(vd[e])
                    : e === `transparent`
                      ? new Od(NaN, NaN, NaN, 0)
                      : null
  );
}
function wd(e) {
  return new Od((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Td(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new Od(e, t, n, r));
}
function Ed(e) {
  return (
    e instanceof ad || (e = Cd(e)),
    e ? ((e = e.rgb()), new Od(e.r, e.g, e.b, e.opacity)) : new Od()
  );
}
function Dd(e, t, n, r) {
  return arguments.length === 1 ? Ed(e) : new Od(e, t, n, r ?? 1);
}
function Od(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
rd(
  Od,
  Dd,
  id(ad, {
    brighter(e) {
      return (
        (e = e == null ? sd : sd ** +e),
        new Od(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? od : od ** +e),
        new Od(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Od(Nd(this.r), Nd(this.g), Nd(this.b), Md(this.opacity));
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
    hex: kd,
    formatHex: kd,
    formatHex8: Ad,
    formatRgb: jd,
    toString: jd,
  }),
);
function kd() {
  return `#${Pd(this.r)}${Pd(this.g)}${Pd(this.b)}`;
}
function Ad() {
  return `#${Pd(this.r)}${Pd(this.g)}${Pd(this.b)}${Pd((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jd() {
  let e = Md(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${Nd(this.r)}, ${Nd(this.g)}, ${Nd(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function Md(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Nd(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pd(e) {
  return ((e = Nd(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function Fd(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Rd(e, t, n, r)
  );
}
function Id(e) {
  if (e instanceof Rd) return new Rd(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ad || (e = Cd(e)), !e)) return new Rd();
  if (e instanceof Rd) return e;
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
    new Rd(o, s, c, e.opacity)
  );
}
function Ld(e, t, n, r) {
  return arguments.length === 1 ? Id(e) : new Rd(e, t, n, r ?? 1);
}
function Rd(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
rd(
  Rd,
  Ld,
  id(ad, {
    brighter(e) {
      return (
        (e = e == null ? sd : sd ** +e),
        new Rd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? od : od ** +e),
        new Rd(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new Od(
        Vd(e >= 240 ? e - 240 : e + 120, i, r),
        Vd(e, i, r),
        Vd(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new Rd(zd(this.h), Bd(this.s), Bd(this.l), Md(this.opacity));
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
      let e = Md(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${zd(this.h)}, ${Bd(this.s) * 100}%, ${Bd(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function zd(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function Bd(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Vd(e, t, n) {
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
var Hd = (e) => () => e;
function Ud(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Wd(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Gd(e) {
  return (e = +e) == 1
    ? Kd
    : function (t, n) {
        return n - t ? Wd(t, n, e) : Hd(isNaN(t) ? n : t);
      };
}
function Kd(e, t) {
  var n = t - e;
  return n ? Ud(e, n) : Hd(isNaN(e) ? t : e);
}
var qd = (function e(t) {
  var n = Gd(t);
  function r(e, t) {
    var r = n((e = Dd(e)).r, (t = Dd(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Kd(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function Jd(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function Yd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Xd(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = of(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function Zd(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Qd(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function $d(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = of(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var ef = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  tf = new RegExp(ef.source, `g`);
function nf(e) {
  return function () {
    return e;
  };
}
function rf(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function af(e, t) {
  var n = (ef.lastIndex = tf.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = ef.exec(e)) && (i = tf.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Qd(r, i) })),
      (n = tf.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? rf(c[0].x)
        : nf(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function of(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Hd(t)
    : (n === `number`
        ? Qd
        : n === `string`
          ? (r = Cd(t))
            ? ((t = r), qd)
            : af
          : t instanceof Cd
            ? qd
            : t instanceof Date
              ? Zd
              : Yd(t)
                ? Jd
                : Array.isArray(t)
                  ? Xd
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? $d
                    : Qd)(e, t);
}
function sf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function cf(e, t) {
  t === void 0 && ((t = e), (e = of));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function lf(e) {
  return function () {
    return e;
  };
}
function uf(e) {
  return +e;
}
var df = [0, 1];
function ff(e) {
  return e;
}
function pf(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : lf(isNaN(t) ? NaN : 0.5);
}
function mf(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function hf(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = pf(i, r)), (a = n(o, a))) : ((r = pf(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function gf(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = pf(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = Ou(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function _f(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function vf() {
  var e = df,
    t = df,
    n = of,
    r,
    i,
    a,
    o = ff,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== ff && (o = mf(e[0], e[n - 1])),
      (s = n > 2 ? gf : hf),
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
      return o(i((l ||= s(t, e.map(r), Qd))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, uf)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = sf), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : ff), u()) : o !== ff;
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
function yf() {
  return vf()(ff, ff);
}
function bf(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function xf(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Sf(e) {
  return ((e = xf(Math.abs(e))), e ? e[1] : NaN);
}
function Cf(e, t) {
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
function wf(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Tf =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ef(e) {
  if (!(t = Tf.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Df({
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
Ef.prototype = Df.prototype;
function Df(e) {
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
Df.prototype.toString = function () {
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
function Of(e) {
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
var kf;
function Af(e, t) {
  var n = xf(e, t);
  if (!n) return ((kf = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (kf = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + xf(e, Math.max(0, t + a - 1))[0];
}
function jf(e, t) {
  var n = xf(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Mf = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: bf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => jf(e * 100, t),
  r: jf,
  s: Af,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Nf(e) {
  return e;
}
var Pf = Array.prototype.map,
  Ff = [
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
function If(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Nf
        : Cf(Pf.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? Nf : wf(Pf.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = Ef(e);
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
      : Mf[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = Mf[y],
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
          v && (e = Of(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && kf !== void 0 ? Ff[8 + kf / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(Sf(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = Ef(e)), (e.type = `f`), e), { suffix: Ff[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var Lf, Rf, zf;
Bf({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function Bf(e) {
  return ((Lf = If(e)), (Rf = Lf.format), (zf = Lf.formatPrefix), Lf);
}
function Vf(e) {
  return Math.max(0, -Sf(Math.abs(e)));
}
function Hf(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Sf(t) / 3))) * 3 - Sf(Math.abs(e)),
  );
}
function Uf(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Sf(t) - Sf(e)) + 1
  );
}
function Wf(e, t, n, r) {
  var i = Hu(e, t, n),
    a;
  switch (((r = Ef(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = Hf(i, o))) && (r.precision = a),
        zf(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Uf(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = Vf(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return Rf(r);
}
function Gf(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return Bu(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Wf(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = Vu(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function Kf() {
  var e = yf();
  return (
    (e.copy = function () {
      return _f(e, Kf());
    }),
    Xu.apply(e, arguments),
    Gf(e)
  );
}
function qf(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, uf)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return qf(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, uf) : [0, 1]),
    Gf(n)
  );
}
function Jf(e, t) {
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
function Yf(e) {
  return Math.log(e);
}
function Xf(e) {
  return Math.exp(e);
}
function Zf(e) {
  return -Math.log(-e);
}
function Qf(e) {
  return -Math.exp(-e);
}
function $f(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function ep(e) {
  return e === 10 ? $f : e === Math.E ? Math.exp : (t) => e ** +t;
}
function tp(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function np(e) {
  return (t, n) => -e(-t, n);
}
function rp(e) {
  let t = e(Yf, Xf),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = tp(r)),
      (a = ep(r)),
      n()[0] < 0 ? ((i = np(i)), (a = np(a)), e(Zf, Qf)) : e(Yf, Xf),
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
        m.length * 2 < p && (m = Bu(o, s, p));
      } else m = Bu(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = Ef(n)).precision == null && (n.trim = !0),
          (n = Rf(n))),
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
        Jf(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function ip() {
  let e = rp(vf()).domain([1, 10]);
  return (
    (e.copy = () => _f(e, ip()).base(e.base())), Xu.apply(e, arguments), e
  );
}
function ap(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function op(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function sp(e) {
  var t = 1,
    n = e(ap(t), op(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(ap((t = +n)), op(t)) : t;
    }),
    Gf(n)
  );
}
function cp() {
  var e = sp(vf());
  return (
    (e.copy = function () {
      return _f(e, cp()).constant(e.constant());
    }),
    Xu.apply(e, arguments)
  );
}
function lp(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function up(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function dp(e) {
  return e < 0 ? -e * e : e * e;
}
function fp(e) {
  var t = e(ff, ff),
    n = 1;
  function r() {
    return n === 1 ? e(ff, ff) : n === 0.5 ? e(up, dp) : e(lp(n), lp(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    Gf(t)
  );
}
function pp() {
  var e = fp(vf());
  return (
    (e.copy = function () {
      return _f(e, pp()).exponent(e.exponent());
    }),
    Xu.apply(e, arguments),
    e
  );
}
function mp() {
  return pp.apply(null, arguments).exponent(0.5);
}
function hp(e) {
  return Math.sign(e) * e * e;
}
function gp(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function _p() {
  var e = yf(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = gp(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(hp(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, uf)).map(hp)), i)
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
      return _p(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Xu.apply(i, arguments),
    Gf(i)
  );
}
function vp() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = Ju(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[Ou(n, e)];
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
      return (e.sort(xu), i());
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
      return vp().domain(e).range(t).unknown(r);
    }),
    Xu.apply(a, arguments)
  );
}
function yp() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[Ou(r, e, 0, n)] : a;
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
      return yp().domain([e, t]).range(i).unknown(a);
    }),
    Xu.apply(Gf(o), arguments)
  );
}
function bp() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[Ou(e, i, 0, r)] : n;
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
      return bp().domain(e).range(t).unknown(n);
    }),
    Xu.apply(i, arguments)
  );
}
var xp = new Date(),
  Sp = new Date();
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
        xp.setTime(+t),
        Sp.setTime(+r),
        e(xp),
        e(Sp),
        Math.floor(n(xp, Sp))
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
var Cp = G(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((Cp.every = (e) => (
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
      : Cp
)),
  Cp.range);
var wp = 1e3,
  Tp = wp * 60,
  Ep = Tp * 60,
  Dp = Ep * 24,
  Op = Dp * 7,
  kp = Dp * 30,
  Ap = Dp * 365,
  jp = G(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * wp);
    },
    (e, t) => (t - e) / wp,
    (e) => e.getUTCSeconds(),
  );
jp.range;
var Mp = G(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * wp);
  },
  (e, t) => {
    e.setTime(+e + t * Tp);
  },
  (e, t) => (t - e) / Tp,
  (e) => e.getMinutes(),
);
Mp.range;
var Np = G(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Tp);
  },
  (e, t) => (t - e) / Tp,
  (e) => e.getUTCMinutes(),
);
Np.range;
var Pp = G(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * wp - e.getMinutes() * Tp,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Ep);
  },
  (e, t) => (t - e) / Ep,
  (e) => e.getHours(),
);
Pp.range;
var Fp = G(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Ep);
  },
  (e, t) => (t - e) / Ep,
  (e) => e.getUTCHours(),
);
Fp.range;
var Ip = G(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Tp) / Dp,
  (e) => e.getDate() - 1,
);
Ip.range;
var Lp = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Dp,
  (e) => e.getUTCDate() - 1,
);
Lp.range;
var Rp = G(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Dp,
  (e) => Math.floor(e / Dp),
);
Rp.range;
function zp(e) {
  return G(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Tp) / Op,
  );
}
var Bp = zp(0),
  Vp = zp(1),
  Hp = zp(2),
  Up = zp(3),
  Wp = zp(4),
  Gp = zp(5),
  Kp = zp(6);
(Bp.range, Vp.range, Hp.range, Up.range, Wp.range, Gp.range, Kp.range);
function qp(e) {
  return G(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / Op,
  );
}
var Jp = qp(0),
  Yp = qp(1),
  Xp = qp(2),
  Zp = qp(3),
  Qp = qp(4),
  $p = qp(5),
  em = qp(6);
(Jp.range, Yp.range, Xp.range, Zp.range, Qp.range, $p.range, em.range);
var tm = G(
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
tm.range;
var nm = G(
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
nm.range;
var rm = G(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((rm.every = (e) =>
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
  rm.range);
var im = G(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((im.every = (e) =>
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
  im.range);
function am(e, t, n, r, i, a) {
  let o = [
    [jp, 1, wp],
    [jp, 5, 5 * wp],
    [jp, 15, 15 * wp],
    [jp, 30, 30 * wp],
    [a, 1, Tp],
    [a, 5, 5 * Tp],
    [a, 15, 15 * Tp],
    [a, 30, 30 * Tp],
    [i, 1, Ep],
    [i, 3, 3 * Ep],
    [i, 6, 6 * Ep],
    [i, 12, 12 * Ep],
    [r, 1, Dp],
    [r, 2, 2 * Dp],
    [n, 1, Op],
    [t, 1, kp],
    [t, 3, 3 * kp],
    [e, 1, Ap],
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
      a = Cu(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Hu(t / Ap, n / Ap, r));
    if (a === 0) return Cp.every(Math.max(Hu(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [om, sm] = am(im, nm, Jp, Rp, Fp, Np),
  [cm, lm] = am(rm, tm, Bp, Ip, Pp, Mp);
function um(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function dm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function fm(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function pm(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = vm(i),
    u = ym(i),
    d = vm(a),
    f = ym(a),
    p = vm(o),
    m = ym(o),
    h = vm(s),
    g = ym(s),
    _ = vm(c),
    v = ym(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: re,
      c: null,
      d: Bm,
      e: Bm,
      f: Gm,
      g: nh,
      G: ih,
      H: Vm,
      I: Hm,
      j: Um,
      L: Wm,
      m: Km,
      M: qm,
      p: ie,
      q: ae,
      Q: Dh,
      s: Oh,
      S: Jm,
      u: Ym,
      U: Xm,
      V: Qm,
      w: $m,
      W: eh,
      x: null,
      X: null,
      y: th,
      Y: rh,
      Z: ah,
      "%": Eh,
    },
    b = {
      a: oe,
      A: se,
      b: ce,
      B: le,
      c: null,
      d: oh,
      e: oh,
      f: dh,
      g: Sh,
      G: wh,
      H: sh,
      I: ch,
      j: lh,
      L: uh,
      m: fh,
      M: ph,
      p: ue,
      q: de,
      Q: Dh,
      s: Oh,
      S: mh,
      u: hh,
      U: gh,
      V: vh,
      w: yh,
      W: bh,
      x: null,
      X: null,
      y: xh,
      Y: Ch,
      Z: Th,
      "%": Eh,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: Am,
      e: Am,
      f: Im,
      g: Em,
      G: Tm,
      H: Mm,
      I: Mm,
      j: jm,
      L: Fm,
      m: km,
      M: Nm,
      p: T,
      q: Om,
      Q: Rm,
      s: zm,
      S: Pm,
      u: xm,
      U: Sm,
      V: Cm,
      w: bm,
      W: wm,
      x: ee,
      X: j,
      y: Em,
      Y: Tm,
      Z: Dm,
      "%": Lm,
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
          (c = mm[(s = e.charAt(++i))]) == null
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
      var r = fm(1900, void 0, 1),
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
            ? ((a = dm(fm(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? Yp.ceil(a) : Yp(a)),
              (a = Lp.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = um(fm(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? Vp.ceil(a) : Vp(a)),
              (a = Ip.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? dm(fm(r.y, 0, 1)).getUTCDay()
              : um(fm(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), dm(r))
        : um(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in mm ? t.charAt(i++) : s]),
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
var mm = { "-": ``, _: ` `, 0: `0` },
  K = /^\s*\d+/,
  hm = /^%/,
  gm = /[\\^$*+?|[\]().{}]/g;
function q(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function _m(e) {
  return e.replace(gm, `\\$&`);
}
function vm(e) {
  return RegExp(`^(?:` + e.map(_m).join(`|`) + `)`, `i`);
}
function ym(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function bm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function xm(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Sm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Cm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function wm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Tm(e, t, n) {
  var r = K.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Em(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Dm(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function Om(e, t, n) {
  var r = K.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function km(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Am(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function jm(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Mm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function Nm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function Pm(e, t, n) {
  var r = K.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function Fm(e, t, n) {
  var r = K.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function Im(e, t, n) {
  var r = K.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Lm(e, t, n) {
  var r = hm.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Rm(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function zm(e, t, n) {
  var r = K.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function Bm(e, t) {
  return q(e.getDate(), t, 2);
}
function Vm(e, t) {
  return q(e.getHours(), t, 2);
}
function Hm(e, t) {
  return q(e.getHours() % 12 || 12, t, 2);
}
function Um(e, t) {
  return q(1 + Ip.count(rm(e), e), t, 3);
}
function Wm(e, t) {
  return q(e.getMilliseconds(), t, 3);
}
function Gm(e, t) {
  return Wm(e, t) + `000`;
}
function Km(e, t) {
  return q(e.getMonth() + 1, t, 2);
}
function qm(e, t) {
  return q(e.getMinutes(), t, 2);
}
function Jm(e, t) {
  return q(e.getSeconds(), t, 2);
}
function Ym(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Xm(e, t) {
  return q(Bp.count(rm(e) - 1, e), t, 2);
}
function Zm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Wp(e) : Wp.ceil(e);
}
function Qm(e, t) {
  return ((e = Zm(e)), q(Wp.count(rm(e), e) + (rm(e).getDay() === 4), t, 2));
}
function $m(e) {
  return e.getDay();
}
function eh(e, t) {
  return q(Vp.count(rm(e) - 1, e), t, 2);
}
function th(e, t) {
  return q(e.getFullYear() % 100, t, 2);
}
function nh(e, t) {
  return ((e = Zm(e)), q(e.getFullYear() % 100, t, 2));
}
function rh(e, t) {
  return q(e.getFullYear() % 1e4, t, 4);
}
function ih(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? Wp(e) : Wp.ceil(e)), q(e.getFullYear() % 1e4, t, 4)
  );
}
function ah(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    q((t / 60) | 0, `0`, 2) +
    q(t % 60, `0`, 2)
  );
}
function oh(e, t) {
  return q(e.getUTCDate(), t, 2);
}
function sh(e, t) {
  return q(e.getUTCHours(), t, 2);
}
function ch(e, t) {
  return q(e.getUTCHours() % 12 || 12, t, 2);
}
function lh(e, t) {
  return q(1 + Lp.count(im(e), e), t, 3);
}
function uh(e, t) {
  return q(e.getUTCMilliseconds(), t, 3);
}
function dh(e, t) {
  return uh(e, t) + `000`;
}
function fh(e, t) {
  return q(e.getUTCMonth() + 1, t, 2);
}
function ph(e, t) {
  return q(e.getUTCMinutes(), t, 2);
}
function mh(e, t) {
  return q(e.getUTCSeconds(), t, 2);
}
function hh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gh(e, t) {
  return q(Jp.count(im(e) - 1, e), t, 2);
}
function _h(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Qp(e) : Qp.ceil(e);
}
function vh(e, t) {
  return ((e = _h(e)), q(Qp.count(im(e), e) + (im(e).getUTCDay() === 4), t, 2));
}
function yh(e) {
  return e.getUTCDay();
}
function bh(e, t) {
  return q(Yp.count(im(e) - 1, e), t, 2);
}
function xh(e, t) {
  return q(e.getUTCFullYear() % 100, t, 2);
}
function Sh(e, t) {
  return ((e = _h(e)), q(e.getUTCFullYear() % 100, t, 2));
}
function Ch(e, t) {
  return q(e.getUTCFullYear() % 1e4, t, 4);
}
function wh(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? Qp(e) : Qp.ceil(e)),
    q(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Th() {
  return `+0000`;
}
function Eh() {
  return `%`;
}
function Dh(e) {
  return +e;
}
function Oh(e) {
  return Math.floor(e / 1e3);
}
var kh, Ah, jh;
Mh({
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
function Mh(e) {
  return (
    (kh = pm(e)),
    (Ah = kh.format),
    kh.parse,
    (jh = kh.utcFormat),
    kh.utcParse,
    kh
  );
}
function Nh(e) {
  return new Date(e);
}
function Ph(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Fh(e, t, n, r, i, a, o, s, c, l) {
  var u = yf(),
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
      return arguments.length ? f(Array.from(e, Ph)) : f().map(Nh);
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
        e ? f(Jf(n, e)) : u
      );
    }),
    (u.copy = function () {
      return _f(u, Fh(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function Ih() {
  return Xu.apply(
    Fh(cm, lm, rm, tm, Bp, Ip, Pp, Mp, jp, Ah).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Lh() {
  return Xu.apply(
    Fh(om, sm, im, nm, Jp, Lp, Fp, Np, jp, jh).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Rh() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = ff,
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
    (l.range = u(of)),
    (l.rangeRound = u(sf)),
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
function zh(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Bh() {
  var e = Gf(Rh()(ff));
  return (
    (e.copy = function () {
      return zh(e, Bh());
    }),
    Zu.apply(e, arguments)
  );
}
function Vh() {
  var e = rp(Rh()).domain([1, 10]);
  return (
    (e.copy = function () {
      return zh(e, Vh()).base(e.base());
    }),
    Zu.apply(e, arguments)
  );
}
function Hh() {
  var e = sp(Rh());
  return (
    (e.copy = function () {
      return zh(e, Hh()).constant(e.constant());
    }),
    Zu.apply(e, arguments)
  );
}
function Uh() {
  var e = fp(Rh());
  return (
    (e.copy = function () {
      return zh(e, Uh()).exponent(e.exponent());
    }),
    Zu.apply(e, arguments)
  );
}
function Wh() {
  return Uh.apply(null, arguments).exponent(0.5);
}
function Gh() {
  var e = [],
    t = ff;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Ou(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(xu), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => qu(e, r / t));
    }),
    (n.copy = function () {
      return Gh(t).domain(e);
    }),
    Zu.apply(n, arguments)
  );
}
function Kh() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = ff,
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
        ? (([n, r, i] = t), (l = cf(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(of)),
    (p.rangeRound = m(sf)),
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
function qh() {
  var e = Gf(Kh()(ff));
  return (
    (e.copy = function () {
      return zh(e, qh());
    }),
    Zu.apply(e, arguments)
  );
}
function Jh() {
  var e = rp(Kh()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return zh(e, Jh()).base(e.base());
    }),
    Zu.apply(e, arguments)
  );
}
function Yh() {
  var e = sp(Kh());
  return (
    (e.copy = function () {
      return zh(e, Yh()).constant(e.constant());
    }),
    Zu.apply(e, arguments)
  );
}
function Xh() {
  var e = fp(Kh());
  return (
    (e.copy = function () {
      return zh(e, Xh()).exponent(e.exponent());
    }),
    Zu.apply(e, arguments)
  );
}
function Zh() {
  return Xh.apply(null, arguments).exponent(0.5);
}
var Qh = r(bu()),
  $h = t({
    scaleBand: () => ed,
    scaleDiverging: () => qh,
    scaleDivergingLog: () => Jh,
    scaleDivergingPow: () => Xh,
    scaleDivergingSqrt: () => Zh,
    scaleDivergingSymlog: () => Yh,
    scaleIdentity: () => qf,
    scaleImplicit: () => Qu,
    scaleLinear: () => Kf,
    scaleLog: () => ip,
    scaleOrdinal: () => $u,
    scalePoint: () => nd,
    scalePow: () => pp,
    scaleQuantile: () => vp,
    scaleQuantize: () => yp,
    scaleRadial: () => _p,
    scaleSequential: () => Bh,
    scaleSequentialLog: () => Vh,
    scaleSequentialPow: () => Uh,
    scaleSequentialQuantile: () => Gh,
    scaleSequentialSqrt: () => Wh,
    scaleSequentialSymlog: () => Hh,
    scaleSqrt: () => mp,
    scaleSymlog: () => cp,
    scaleThreshold: () => bp,
    scaleTime: () => Ih,
    scaleUtc: () => Lh,
    tickFormat: () => Wf,
  }),
  eg = (e) => e.chartData,
  tg = R([eg], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  ng = (e, t, n, r) => (r ? tg(e) : eg(e));
function rg(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (zs(t) && zs(n)) return !0;
  }
  return !1;
}
function ig(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function ag(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (zs(n)) i = n;
    else if (typeof n == `function`) return;
    if (zs(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (rg(o)) return o;
  }
}
function og(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (rg(r)) return ig(r, t, n);
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
      else if (typeof i == `string` && Zo.test(i)) {
        var c = Zo.exec(i);
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
      else if (typeof a == `string` && Qo.test(a)) {
        var u = Qo.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (rg(f)) return t == null ? f : ig(f, t, n);
    }
  }
}
var J = r(
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
                  n % 2 && ((o = o.times(u)), A(o.d, t)),
                    (n = c(n / 2)),
                    n !== 0;
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
        function A(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function ee(e) {
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
        ((r = ee(r)),
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
  sg = (e) => e,
  cg = { "@@functional/placeholder": !0 },
  lg = (e) => e === cg,
  ug = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          lg(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  dg = (e, t) =>
    e === 1
      ? t
      : ug(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== cg).length;
          return r >= e
            ? t(...n)
            : dg(
                e - r,
                ug(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (lg(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  fg = (e) => dg(e.length, e),
  pg = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  mg = fg((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  hg = function () {
    var e = [...arguments];
    if (!e.length) return sg;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  gg = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  _g = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function vg(e) {
  return e === 0
    ? 1
    : Math.floor(new J.default(e).abs().log(10).toNumber()) + 1;
}
function yg(e, t, n) {
  for (var r = new J.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(fg((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  fg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  fg((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var bg = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  xg = (e, t, n) => {
    if (e.lte(0)) return new J.default(0);
    var r = vg(e.toNumber()),
      i = new J.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new J.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new J.default(s.toNumber())
      : new J.default(Math.ceil(s.toNumber()));
  },
  Sg = (e, t, n) => {
    var r = new J.default(1),
      i = new J.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new J.default(10).pow(vg(e) - 1)),
          (i = new J.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new J.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new J.default(Math.floor((t - 1) / 2)))
        : n || (i = new J.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return hg(
      mg((e) => i.add(new J.default(e - o).mul(r)).toNumber()),
      pg,
    )(0, t);
  },
  Cg = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new J.default(0),
        tickMin: new J.default(0),
        tickMax: new J.default(0),
      };
    var a = xg(new J.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new J.default(0))
      : ((o = new J.default(e).add(t).div(2)),
        (o = o.sub(new J.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new J.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? Cg(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new J.default(s).mul(a)),
          tickMax: o.add(new J.default(c).mul(a)),
        });
  };
function wg(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = bg([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...pg(0, r - 1).map(() => 1 / 0)]
        : [...pg(0, r - 1).map(() => -1 / 0), s];
    return t > n ? gg(c) : c;
  }
  if (o === s) return Sg(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = Cg(o, s, a, i, 0),
    f = yg(u, d.add(new J.default(0.1).mul(l)), l);
  return t > n ? gg(f) : f;
}
function Tg(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = bg([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = xg(new J.default(o).sub(a).div(s - 1), i, 0),
    l = [...yg(new J.default(a), new J.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? gg(l) : l);
}
var Eg = _g(wg),
  Dg = _g(Tg),
  Og = (e) => e.rootProps.maxBarSize,
  kg = (e) => e.rootProps.barGap,
  Ag = (e) => e.rootProps.barCategoryGap,
  jg = (e) => e.rootProps.barSize,
  Mg = (e) => e.rootProps.stackOffset,
  Ng = (e) => e.options.chartName,
  Pg = (e) => e.rootProps.syncId,
  Fg = (e) => e.rootProps.syncMethod,
  Ig = (e) => e.options.eventEmitter,
  Lg = {
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
  Rg = {
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
  zg = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  Bg = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: Lg.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: Lg.reversed,
    scale: Lg.scale,
    tick: Lg.tick,
    tickCount: void 0,
    ticks: void 0,
    type: Lg.type,
    unit: void 0,
  },
  Vg = {
    allowDataOverflow: Rg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Rg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Rg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Rg.scale,
    tick: Rg.tick,
    tickCount: Rg.tickCount,
    ticks: void 0,
    type: Rg.type,
    unit: void 0,
  },
  Hg = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: Lg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Lg.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Lg.scale,
    tick: Lg.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  Ug = {
    allowDataOverflow: Rg.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: Rg.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Rg.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Rg.scale,
    tick: Rg.tick,
    tickCount: Rg.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  Wg = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? Hg
        : Bg
      : e.polarAxis.angleAxis[t],
  Gg = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? Ug
        : Vg
      : e.polarAxis.radiusAxis[t],
  Kg = (e) => e.polarOptions,
  qg = R([as, os, H], So),
  Jg = R([Kg, qg], (e, t) => {
    if (e != null) return Ft(e.innerRadius, t, 0);
  }),
  Yg = R([Kg, qg], (e, t) => {
    if (e != null) return Ft(e.outerRadius, t, t * 0.8);
  }),
  Xg = R([Kg], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  });
R([Wg, Xg], zg);
var Zg = R([qg, Jg, Yg], (e, t, n) => {
  if (e != null && t != null && n != null) return [t, n];
});
R([Gg, Zg], zg);
var Qg = R([U, Kg, Jg, Yg, as, os], (e, t, n, r, i, a) => {
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
        cx: Ft(o, i, i / 2),
        cy: Ft(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  Y = (e, t) => t,
  $g = (e, t, n) => n;
function e_(e) {
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
  t_ = (e) => e.tooltip.settings.axisId,
  Z = (e) => C_(e, X(e), t_(e)),
  n_ = R([Z], (e) => e?.dataKey);
function r_(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = e_(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(V(t, a, null)),
            c = V(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function i_(e) {
  return e.stackId != null && e.dataKey != null;
}
var a_ = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function o_(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function s_(e, t) {
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
function c_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? s_(Object(n), !0).forEach(function (t) {
          l_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : s_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function l_(e, t, n) {
  return (
    (t = u_(t)) in e
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
function u_(e) {
  var t = d_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function d_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var f_ = [0, `auto`],
  p_ = {
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
  m_ = (e, t) => e.cartesianAxis.xAxis[t],
  h_ = (e, t) => m_(e, t) ?? p_,
  g_ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: f_,
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
  __ = (e, t) => e.cartesianAxis.yAxis[t],
  v_ = (e, t) => __(e, t) ?? g_,
  y_ = {
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
  b_ = (e, t) => e.cartesianAxis.zAxis[t] ?? y_,
  x_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return h_(e, n);
      case `yAxis`:
        return v_(e, n);
      case `zAxis`:
        return b_(e, n);
      case `angleAxis`:
        return Wg(e, n);
      case `radiusAxis`:
        return Gg(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  S_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return h_(e, n);
      case `yAxis`:
        return v_(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  C_ = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return h_(e, n);
      case `yAxis`:
        return v_(e, n);
      case `angleAxis`:
        return Wg(e, n);
      case `radiusAxis`:
        return Gg(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  w_ = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function T_(e, t) {
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
var E_ = (e) => e.graphicalItems.cartesianItems,
  D_ = R([Y, $g], T_),
  O_ = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  k_ = R([E_, x_, D_], O_, { memoizeOptions: { resultEqualityCheck: o_ } }),
  A_ = R([k_], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(i_),
  ),
  j_ = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  M_ = R([k_], j_),
  N_ = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  P_ = R([k_], N_, { memoizeOptions: { resultEqualityCheck: o_ } }),
  F_ = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  I_ = R([P_, ng], F_),
  L_ = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: V(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: V(e, t.dataKey) })),
  R_ = R([I_, x_, k_], L_);
function z_(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function B_(e) {
  if (Mt(e) || e instanceof Date) {
    var t = Number(e);
    if (zs(t)) return t;
  }
}
function V_(e) {
  if (Array.isArray(e)) {
    var t = [B_(e[0]), B_(e[1])];
    return rg(t) ? t : void 0;
  }
  var n = B_(e);
  if (n != null) return [n, n];
}
function H_(e) {
  return e.map(B_).filter(fl);
}
function U_(e, t, n) {
  return !n || typeof t != `number` || At(t) || !n.length
    ? []
    : H_(
        n.flatMap((n) => {
          var r = V(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), zs(i) && zs(a)))
            return [t - i, t + a];
        }),
      );
}
var W_ = R([A_, ng, Z], r_),
  G_ = (e, t, n) => {
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
        return [r, { stackedData: Uo(e, i.map(e_), n), graphicalItems: i }];
      }),
    );
  },
  K_ = R([W_, A_, Mg], G_),
  q_ = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Xo(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  J_ = R([x_], (e) => e.allowDataOverflow),
  Y_ = (e) => {
    if (e == null || !(`domain` in e)) return f_;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = H_(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? f_;
  },
  X_ = R([x_], Y_),
  Z_ = R([X_, J_], ag),
  Q_ = R([K_, eg, Y, Z_], q_, { memoizeOptions: { resultEqualityCheck: a_ } }),
  $_ = (e) => e.errorBars,
  ev = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => z_(n, e)),
  tv = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  nv = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => z_(i, e)),
              c = V(e, t.dataKey ?? n.dataKey),
              l = U_(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = V_(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = V_(V(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      zs(a) && zs(o))
    )
      return [a, o];
  },
  rv = R([I_, x_, M_, $_, Y], nv, {
    memoizeOptions: { resultEqualityCheck: a_ },
  });
function iv(e) {
  var { value: t } = e;
  if (Mt(t) || t instanceof Date) return t;
}
var av = (e, t, n) => {
    var r = e.map(iv).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && It(r)))
      ? (0, Qh.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  ov = (e) => e.referenceElements.dots,
  sv = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  cv = R([ov, Y, $g], sv),
  lv = (e) => e.referenceElements.areas,
  uv = R([lv, Y, $g], sv),
  dv = (e) => e.referenceElements.lines,
  fv = R([dv, Y, $g], sv),
  pv = (e, t) => {
    var n = H_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  mv = R(cv, Y, pv),
  hv = (e, t) => {
    var n = H_(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  gv = R([uv, Y], hv),
  _v = (e, t) => {
    var n = H_(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  vv = R(mv, R(fv, Y, _v), gv, (e, t, n) => tv(e, n, t)),
  yv = (e, t, n, r, i, a, o, s) =>
    n ??
    og(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? tv(r, a, i)
        : tv(a, i),
      e.allowDataOverflow,
    ),
  bv = R([x_, X_, Z_, Q_, rv, vv, U, Y], yv, {
    memoizeOptions: { resultEqualityCheck: a_ },
  }),
  xv = [0, 1],
  Sv = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = Io(t, a);
      return l && s == null
        ? (0, Qh.default)(0, n.length)
        : c === `category`
          ? av(r, e, l)
          : i === `expand`
            ? xv
            : o;
    }
  },
  Cv = R([x_, U, I_, R_, Mg, Y, bv], Sv),
  wv = (e, t, n, r, i) => {
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
        var s = `scale${Rt(a)}`;
        return s in $h ? s : `point`;
      }
    }
  },
  Tv = R([x_, U, w_, Ng, Y], wv);
function Ev(e) {
  if (e != null) {
    if (e in $h) return $h[e]();
    var t = `scale${Rt(e)}`;
    if (t in $h) return $h[t]();
  }
}
function Dv(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = Ev(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (Bo(a), a);
    }
  }
}
var Ov = (e, t, n) => {
    var r = Y_(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        rg(e)
      )
        return Eg(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && rg(e))
        return Dg(e, t.tickCount, t.allowDecimals);
    }
  },
  kv = R([Cv, C_, Tv], Ov),
  Av = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      rg(t) &&
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
  jv = R([x_, Cv, kv, Y], Av),
  Mv = R(
    R(R_, x_, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(H_(e.map((e) => e.value))).sort((e, t) => e - t);
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
    Ag,
    H,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!zs(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Ft(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  Nv = (e, t) => {
    var n = h_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Mv(e, `xAxis`, t, n.padding);
  },
  Pv = (e, t) => {
    var n = v_(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : Mv(e, `yAxis`, t, n.padding);
  },
  Fv = R(h_, Nv, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  Iv = R(v_, Pv, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  Lv = R([H, Fv, Ds, Es, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  Rv = R([H, U, Iv, Ds, Es, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  zv = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return Lv(e, n, r);
      case `yAxis`:
        return Rv(e, n, r);
      case `zAxis`:
        return b_(e, n)?.range;
      case `angleAxis`:
        return Xg(e);
      case `radiusAxis`:
        return Zg(e, n);
      default:
        return;
    }
  },
  Bv = R([x_, zv], zg),
  Vv = R([x_, Tv, jv, Bv], Dv);
R([k_, $_, Y], ev);
function Hv(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var Uv = (e, t) => t,
  Wv = (e, t, n) => n,
  Gv = R(ls, Uv, Wv, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(Hv),
  ),
  Kv = R(us, Uv, Wv, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(Hv),
  ),
  qv = (e, t) => ({ width: e.width, height: t.height }),
  Jv = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  Yv = R(H, h_, qv),
  Xv = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  Zv = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  Qv = R(os, H, Gv, Uv, Wv, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = qv(t, n);
        o ??= Xv(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  $v = R(as, H, Kv, Uv, Wv, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = Jv(t, n);
        o ??= Zv(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  ey = R(
    [
      H,
      h_,
      (e, t) => {
        var n = h_(e, t);
        if (n != null) return Qv(e, n.orientation, n.mirror);
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
  ty = R(
    [
      H,
      v_,
      (e, t) => {
        var n = v_(e, t);
        if (n != null) return $v(e, n.orientation, n.mirror);
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
  ny = R(H, v_, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  ry = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return Yv(e, n).width;
      case `yAxis`:
        return ny(e, n).height;
      default:
        return;
    }
  },
  iy = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = Io(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && It(c)) return c;
    }
  },
  ay = R([U, R_, x_, Y], iy),
  oy = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (Io(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  sy = R([U, R_, C_, Y], oy),
  cy = R([U, S_, Tv, Vv, ay, sy, zv, kv, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = Io(e, c);
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
  ly = R([U, C_, Tv, Vv, kv, zv, ay, sy, Y], (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = Io(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? kt(a[0] - a[1]) * 2 * m
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
            .filter((e) => !At(e.coordinate))
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
  uy = R([U, C_, Vv, zv, ay, sy, Y], (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = Io(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? kt(r[0] - r[1]) * 2 * l : l),
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
  dy = R(x_, Vv, (e, t) => {
    if (e != null && t != null) return c_(c_({}, e), {}, { scale: t });
  });
R(
  (e, t, n) => b_(e, n),
  R([x_, Tv, Cv, Bv], Dv),
  (e, t) => {
    if (e != null && t != null) return c_(c_({}, e), {}, { scale: t });
  },
);
var fy = R([U, ls, us], (e, t, n) => {
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
  py = (e) => e.options.defaultTooltipEventType,
  my = (e) => e.options.validateTooltipEventTypes;
function hy(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function gy(e, t) {
  return hy(t, py(e), my(e));
}
function _y(e) {
  return L((t) => gy(t, e));
}
var vy = (e, t) => {
    var n,
      r = Number(t);
    if (!(At(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  yy = (e) => e.tooltip.settings,
  by = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  xy = ya({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: by, hover: by },
      axisInteraction: { click: by, hover: by },
      keyboardInteraction: by,
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
          e.tooltipItemPayloads.push(xi(t.payload));
        },
        prepare: Yi(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = gi(e).tooltipItemPayloads.indexOf(xi(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: Yi(),
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
    addTooltipEntrySettings: Sy,
    removeTooltipEntrySettings: Cy,
    setTooltipSettingsState: wy,
    setActiveMouseOverItemIndex: Ty,
    mouseLeaveItem: Ey,
    mouseLeaveChart: Dy,
    setActiveClickItemIndex: Oy,
    setMouseOverAxisIndex: ky,
    setMouseClickAxisIndex: Ay,
    setSyncInteraction: jy,
    setKeyboardInteraction: My,
  } = xy.actions,
  Ny = xy.reducer;
function Py(e, t) {
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
function Fy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Py(Object(n), !0).forEach(function (t) {
          Iy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Py(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Iy(e, t, n) {
  return (
    (t = Ly(t)) in e
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
function Ly(e) {
  var t = Ry(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ry(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zy(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function By(e) {
  return e.index != null;
}
var Vy = (e, t, n, r) => {
    if (t == null) return by;
    var i = zy(e, t, n);
    if (i == null) return by;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (By(i)) {
      if (a) return Fy(Fy({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return Fy(Fy({}, by), {}, { coordinate: i.coordinate });
  },
  Hy = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!zs(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  Uy = (e, t, n, r, i, a, o, s) => {
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
  Wy = (e, t, n, r) => {
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
  Gy = (e) => e.options.tooltipPayloadSearcher,
  Ky = (e) => e.tooltip;
function qy(e, t) {
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
function Jy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qy(Object(n), !0).forEach(function (t) {
          Yy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Yy(e, t, n) {
  return (
    (t = Xy(t)) in e
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
function Xy(e) {
  var t = Zy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Zy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Qy(e, t) {
  return e ?? t;
}
var $y = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = Qy(d, s),
          m = Array.isArray(p) ? Oo(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? Lt(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = Jy(
                  Jy({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  es({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: V(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                es({
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
  eb = R([Z, U, w_, Ng, X], wv),
  tb = R(
    [
      R(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      Z,
      R([X, t_], T_),
    ],
    O_,
    { memoizeOptions: { resultEqualityCheck: o_ } },
  ),
  nb = R([tb], (e) => e.filter(i_)),
  rb = R(
    [R([tb], N_, { memoizeOptions: { resultEqualityCheck: o_ } }), eg],
    F_,
  ),
  ib = R([nb, eg, Z], r_),
  ab = R([rb, Z, tb], L_),
  ob = R([Z], Y_),
  sb = R([ob, R([Z], (e) => e.allowDataOverflow)], ag),
  cb = R([R([ib, R([tb], (e) => e.filter(i_)), Mg], G_), eg, X, sb], q_),
  lb = R([rb, Z, R([tb], j_), $_, X], nv, {
    memoizeOptions: { resultEqualityCheck: a_ },
  }),
  ub = R([R([ov, X, t_], sv), X], pv),
  db = R([R([lv, X, t_], sv), X], hv),
  fb = R(
    [
      Z,
      U,
      rb,
      ab,
      Mg,
      X,
      R(
        [
          Z,
          ob,
          sb,
          cb,
          lb,
          R([ub, R([R([dv, X, t_], sv), X], _v), db], tv),
          U,
          X,
        ],
        yv,
      ),
    ],
    Sv,
  ),
  pb = R([Z, fb, R([fb, Z, eb], Ov), X], Av),
  mb = (e) => zv(e, X(e), t_(e), !1),
  hb = R([Z, mb], zg),
  gb = R([Z, eb, pb, hb], Dv),
  _b = R(
    [U, Z, eb, gb, mb, R([U, ab, Z, X], iy), R([U, ab, Z, X], oy), X],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = Io(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? kt(i[0] - i[1]) * 2 * d
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
  vb = R([py, my, yy], (e, t, n) => hy(n.shared, e, t)),
  yb = (e) => e.tooltip.settings.trigger,
  bb = (e) => e.tooltip.settings.defaultIndex,
  xb = R([Ky, vb, yb, bb], Vy),
  Sb = R([xb, rb], Hy),
  Cb = R([_b, Sb], vy),
  wb = R([xb], (e) => {
    if (e) return e.dataKey;
  }),
  Tb = R([Ky, vb, yb, bb], Wy),
  Eb = R([xb, R([as, os, U, H, _b, bb, Tb, Gy], Uy)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  Db = R([xb], (e) => e.active),
  Ob = R([R([Tb, Sb, eg, n_, Cb, Gy, vb], $y)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function kb(e, t) {
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
function Ab(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kb(Object(n), !0).forEach(function (t) {
          jb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jb(e, t, n) {
  return (
    (t = Mb(t)) in e
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
function Mb(e) {
  var t = Nb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Nb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Pb = () => L(Z),
  Fb = () => {
    var e = Pb(),
      t = L(_b),
      n = L(gb);
    return $o(Ab(Ab({}, e), {}, { scale: n }), t);
  },
  Ib = () => L(Ng),
  Lb = (e, t) => t,
  Rb = (e, t, n) => n,
  zb = (e, t, n, r) => r,
  Bb = R(_b, (e) => (0, sr.default)(e, (e) => e.coordinate)),
  Vb = R([Ky, Lb, Rb, zb], Vy),
  Hb = R([Vb, rb], Hy),
  Ub = (e, t, n) => {
    if (t != null) {
      var r = Ky(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Wb = R([Ky, Lb, Rb, zb], Wy),
  Gb = R([as, os, U, H, _b, zb, Wb, Gy], Uy),
  Kb = R([Vb, Gb], (e, t) => e.coordinate ?? t),
  qb = R(_b, Hb, vy),
  Jb = R([Wb, Hb, eg, n_, qb, Gy, Lb], $y),
  Yb = R([Vb], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Xb = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = ns(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = Po(is(c, t), o, a, r, i),
          u = rs(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function Zb() {
  return (
    (Zb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zb.apply(null, arguments)
  );
}
function Qb(e, t) {
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
function $b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qb(Object(n), !0).forEach(function (t) {
          ex(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ex(e, t, n) {
  return (
    (t = tx(t)) in e
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
function tx(e) {
  var t = nx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function nx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rx(e) {
  var {
      coordinate: t,
      payload: n,
      index: r,
      offset: i,
      tooltipAxisBandSize: a,
      layout: o,
      cursor: s,
      tooltipEventType: l,
      chartName: u,
    } = e,
    f = t,
    p = n,
    m = r;
  if (!s || !f || (u !== `ScatterChart` && l !== `axis`)) return null;
  var h, g;
  if (u === `ScatterChart`) ((h = f), (g = rl));
  else if (u === `BarChart`) ((h = il(o, f, i, a)), (g = su));
  else if (o === `radial`) {
    var { cx: _, cy: y, radius: b, startAngle: x, endAngle: S } = cu(f);
    ((h = {
      cx: _,
      cy: y,
      startAngle: x,
      endAngle: S,
      innerRadius: b,
      outerRadius: b,
    }),
      (g = hu));
  } else ((h = { points: gu(o, f, i) }), (g = Kc));
  var C = typeof s == `object` && `className` in s ? s.className : void 0,
    w = $b(
      $b($b($b({ stroke: `#ccc`, pointerEvents: `none` }, i), h), v(s)),
      {},
      {
        payload: p,
        payloadIndex: m,
        className: d(`recharts-tooltip-cursor`, C),
      },
    );
  return (0, c.isValidElement)(s)
    ? (0, c.cloneElement)(s, w)
    : (0, c.createElement)(g, w);
}
function ix(e) {
  var t = Fb(),
    n = ec(),
    r = ic(),
    i = Ib();
  return c.createElement(
    rx,
    Zb({}, e, {
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
var ax = (0, c.createContext)(null),
  ox = () => (0, c.useContext)(ax),
  sx = r(
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
  cx = new sx(),
  lx = `recharts.syncEvent.tooltip`,
  ux = `recharts.syncEvent.brush`;
function dx(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!At(n)) return e?.[n];
  }
}
var fx = ya({
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
  px = fx.reducer,
  { createEventEmitter: mx } = fx.actions;
function hx(e) {
  return e.tooltip.syncInteraction;
}
var gx = ya({
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
    setChartData: _x,
    setDataStartEndIndexes: vx,
    setComputedData: yx,
  } = gx.actions,
  bx = gx.reducer,
  xx = [`x`, `y`];
function Sx(e, t) {
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
function Cx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Sx(Object(n), !0).forEach(function (t) {
          wx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Sx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wx(e, t, n) {
  return (
    (t = Tx(t)) in e
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
function Tx(e) {
  var t = Ex(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ex(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Dx(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ox(e, t);
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
function Ox(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var kx = () => {};
function Ax() {
  var e = L(Pg),
    t = L(Ig),
    n = I(),
    r = L(Fg),
    i = L(_b),
    a = ic(),
    o = Qs(),
    s = L((e) => e.rootProps.className);
  (0, c.useEffect)(() => {
    if (e == null) return kx;
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
              m = Dx(d, xx),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = Cx(
                Cx({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              Cx(
                Cx({}, c),
                {},
                { payload: Cx(Cx({}, c.payload), {}, { coordinate: y }) },
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
              jy({
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
              jy({
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
      cx.on(lx, s),
      () => {
        cx.off(lx, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function jx() {
  var e = L(Pg),
    t = L(Ig),
    n = I();
  (0, c.useEffect)(() => {
    if (e == null) return kx;
    var r = (r, i, a) => {
      t !== a && e === r && n(vx(i));
    };
    return (
      cx.on(ux, r),
      () => {
        cx.off(ux, r);
      }
    );
  }, [n, t, e]);
}
function Mx() {
  var e = I();
  ((0, c.useEffect)(() => {
    e(mx());
  }, [e]),
    Ax(),
    jx());
}
function Nx(e, t, n, r, i, a) {
  var o = L((n) => Ub(n, e, t)),
    s = L(Ig),
    l = L(Pg),
    u = L(Fg),
    d = L(hx)?.active,
    f = Qs();
  (0, c.useEffect)(() => {
    if (!d && l != null && s != null) {
      var e = jy({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: f,
      });
      cx.emit(lx, l, e, s);
    }
  }, [d, n, o, i, r, s, l, u, a, f]);
}
function Px(e, t) {
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
function Fx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Px(Object(n), !0).forEach(function (t) {
          Ix(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Px(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ix(e, t, n) {
  return (
    (t = Lx(t)) in e
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
function Lx(e) {
  var t = Rx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Rx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zx(e) {
  return e.dataKey;
}
function Bx(e, t) {
  return c.isValidElement(e)
    ? c.cloneElement(e, t)
    : typeof e == `function`
      ? c.createElement(e, t)
      : c.createElement(yc, t);
}
var Vx = [],
  Hx = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !Mc.isSsr,
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
function Ux(e) {
  var t = ul(e, Hx),
    {
      active: n,
      allowEscapeViewBox: r,
      animationDuration: i,
      animationEasing: a,
      content: o,
      filterNull: s,
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
    C = I(),
    w = typeof b == `number` ? String(b) : b;
  (0, c.useEffect)(() => {
    C(wy({ shared: v, trigger: y, axisId: S, active: n, defaultIndex: w }));
  }, [C, v, y, S, n, w]);
  var T = Qs(),
    E = Nc(),
    D = _y(v),
    { activeIndex: O, isActive: k } = L((e) => Yb(e, D, y, w)),
    A = L((e) => Jb(e, D, y, w)),
    ee = L((e) => qb(e, D, y, w)),
    j = L((e) => Kb(e, D, y, w)),
    M = A,
    te = ox(),
    ne = n ?? k,
    [re, ie] = fr([M, ne]),
    ae = D === `axis` ? ee : void 0;
  Nx(D, y, j, ae, O, ne);
  var oe = x ?? te;
  if (oe == null) return null;
  var se = M ?? Vx;
  (ne || (se = Vx),
    s &&
      se.length &&
      (se = Mn(
        M.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        f,
        zx,
      )));
  var ce = se.length > 0,
    le = c.createElement(
      jc,
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
      Bx(
        o,
        Fx(
          Fx({}, t),
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
  return c.createElement(
    c.Fragment,
    null,
    (0, l.createPortal)(le, oe),
    ne &&
      c.createElement(ix, {
        cursor: _,
        tooltipEventType: D,
        coordinate: j,
        payload: M,
        index: O,
      }),
  );
}
var Wx = (e) => null;
Wx.displayName = `Cell`;
function Gx(e, t, n) {
  return (
    (t = Kx(t)) in e
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
function Kx(e) {
  var t = qx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Jx = class {
  constructor(e) {
    (Gx(this, `cache`, new Map()), (this.maxSize = e));
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
var eS = Xx({}, { cacheSize: 2e3, enableCache: !0 }),
  tS = new Jx(eS.cacheSize),
  nS = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  rS = `recharts_measurement_span`;
function iS(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var aS = (e, t) => {
    try {
      var n = document.getElementById(rS);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, rS),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, nS, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  oS = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Mc.isSsr) return { width: 0, height: 0 };
    var n = eS.measureText || aS;
    if (!eS.enableCache) return n(e, t);
    var r = iS(e, t),
      i = tS.get(r);
    if (i) return i;
    var a = n(e, t);
    return (tS.set(r, a), a);
  },
  sS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  cS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  lS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  uS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  dS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  fS = Object.keys(dS),
  pS = `NaN`;
function mS(e, t) {
  return e * dS[t];
}
var hS = class e {
  static parse(t) {
    var [, n, r] = uS.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      At(e) && (this.unit = ``),
      t !== `` && !lS.test(t) && ((this.num = NaN), (this.unit = ``)),
      fS.includes(t) && ((this.num = mS(e, t)), (this.unit = `px`)));
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
    return At(this.num);
  }
};
function gS(e) {
  if (e.includes(pS)) return pS;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = sS.exec(t) ?? [],
      a = hS.parse(n ?? ``),
      o = hS.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return pS;
    t = t.replace(sS, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = cS.exec(t) ?? [],
      d = hS.parse(c ?? ``),
      f = hS.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return pS;
    t = t.replace(cS, p.toString());
  }
  return t;
}
var _S = /\(([^()]*)\)/;
function vS(e) {
  for (var t = e, n; (n = _S.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(_S, gS(r));
  }
  return t;
}
function yS(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = vS(t)), (t = gS(t)), t);
}
function bS(e) {
  try {
    return yS(e);
  } catch {
    return pS;
  }
}
function xS(e) {
  var t = bS(e.slice(5, -1));
  return t === pS ? `` : t;
}
var SS = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  CS = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function wS() {
  return (
    (wS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wS.apply(null, arguments)
  );
}
function TS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ES(e, t);
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
function ES(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var DS = /[ \f\n\r\t\v\u2028\u2029]+/,
  OS = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        F(t) || (i = n ? t.toString().split(``) : t.toString().split(DS)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: oS(e, r).width,
          })),
          spaceWidth: n ? 0 : oS(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  kS = (e, t, n, r, i) => {
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
          var t = OS({
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
  AS = (e) => [{ words: F(e) ? [] : e.toString().split(DS) }],
  jS = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !Mc.isSsr) {
      var s,
        c,
        l = OS({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return AS(r);
      return kS(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return AS(r);
  },
  MS = `#808080`,
  NS = (0, c.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: l = `end`,
        fill: u = MS,
      } = e,
      f = TS(e, SS),
      p = (0, c.useMemo)(
        () =>
          jS({
            breakAll: f.breakAll,
            children: f.children,
            maxLines: f.maxLines,
            scaleToFit: o,
            style: f.style,
            width: f.width,
          }),
        [f.breakAll, f.children, f.maxLines, o, f.style, f.width],
      ),
      { dx: m, dy: h, angle: g, className: _, breakAll: v } = f,
      b = TS(f, CS);
    if (!Mt(n) || !Mt(r) || p.length === 0) return null;
    var x = n + (N(m) ? m : 0),
      S = r + (N(h) ? h : 0),
      C;
    switch (l) {
      case `start`:
        C = xS(`calc(${a})`);
        break;
      case `middle`:
        C = xS(`calc(${(p.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        C = xS(`calc(${p.length - 1} * -${i})`);
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
      c.createElement(
        `text`,
        wS({}, y(b), {
          ref: t,
          x,
          y: S,
          className: d(`recharts-text`, _),
          textAnchor: s,
          fill: u.includes(`url`) ? MS : u,
        }),
        p.map((e, t) => {
          var n = e.words.join(v ? `` : ` `);
          return c.createElement(
            `tspan`,
            { x, dy: t === 0 ? C : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
NS.displayName = `Text`;
var PS = [`labelRef`];
function FS(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = IS(e, t);
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
function IS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function LS(e, t) {
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
      ? LS(Object(n), !0).forEach(function (t) {
          RS(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LS(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function RS(e, t, n) {
  return (
    (t = zS(t)) in e
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
function zS(e) {
  var t = BS(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function BS(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function VS() {
  return (
    (VS = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    VS.apply(null, arguments)
  );
}
var HS = (0, c.createContext)(null),
  US = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, c.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return c.createElement(HS.Provider, { value: o }, a);
  },
  WS = () => {
    var e = (0, c.useContext)(HS),
      t = Qs();
    return e || t;
  },
  GS = (0, c.createContext)(null),
  KS = () => {
    var e = (0, c.useContext)(GS),
      t = L(Qg);
    return e || t;
  },
  qS = (e) => {
    var { value: t, formatter: n } = e,
      r = F(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  JS = (e) => e != null && typeof e == `function`,
  YS = (e, t) => kt(t - e) * Math.min(Math.abs(t - e), 360),
  XS = (e, t, n, r, i) => {
    var { offset: a, className: o } = e,
      {
        cx: s,
        cy: l,
        innerRadius: u,
        outerRadius: f,
        startAngle: p,
        endAngle: m,
        clockWise: h,
      } = i,
      g = (u + f) / 2,
      _ = YS(p, m),
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
    var x = B(s, l, g, y),
      S = B(s, l, g, y + (b ? 1 : -1) * 359),
      C = `M${x.x},${x.y}
    A${g},${g},0,1,${+!b},
    ${S.x},${S.y}`,
      w = F(e.id) ? Pt(`recharts-radial-line-`) : e.id;
    return c.createElement(
      `text`,
      VS({}, r, {
        dominantBaseline: `central`,
        className: d(`recharts-radial-bar-label`, o),
      }),
      c.createElement(`defs`, null, c.createElement(`path`, { id: w, d: C })),
      c.createElement(`textPath`, { xlinkHref: `#${w}` }, n),
    );
  },
  ZS = (e, t, n) => {
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
  QS = (e) => `cx` in e && N(e.cx),
  $S = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !QS(n) && (a = n);
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
                        (N(i.x) || jt(i.x)) &&
                        (N(i.y) || jt(i.y))
                      ? Q(
                          {
                            x: o + Ft(i.x, c),
                            y: s + Ft(i.y, l),
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
  eC = { offset: 5 };
function tC(e) {
  var t = ul(e, eC),
    {
      viewBox: n,
      position: r,
      value: i,
      children: a,
      content: o,
      className: s = ``,
      textBreakAll: l,
      labelRef: u,
    } = t,
    f = KS(),
    p = WS(),
    m = n || (r === `center` ? p : (f ?? p));
  if (
    !m ||
    (F(i) && F(a) && !(0, c.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var h = Q(Q({}, t), {}, { viewBox: m });
  if ((0, c.isValidElement)(o)) {
    var { labelRef: g } = h,
      _ = FS(h, PS);
    return (0, c.cloneElement)(o, _);
  }
  var v;
  if (typeof o == `function`) {
    if (((v = (0, c.createElement)(o, h)), (0, c.isValidElement)(v))) return v;
  } else v = qS(t);
  var b = QS(m),
    x = y(t);
  if (b && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return XS(t, r, v, x, m);
  var S = b ? ZS(m, t.offset, t.position) : $S(t, m);
  return c.createElement(
    NS,
    VS({ ref: u, className: d(`recharts-label`, s) }, x, S, { breakAll: l }),
    v,
  );
}
tC.displayName = `Label`;
var nC = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? c.createElement(tC, VS({ key: `label-implicit` }, r))
    : Mt(e)
      ? c.createElement(tC, VS({ key: `label-implicit`, value: e }, r))
      : (0, c.isValidElement)(e)
        ? e.type === tC
          ? (0, c.cloneElement)(e, Q({ key: `label-implicit` }, r))
          : c.createElement(tC, VS({ key: `label-implicit`, content: e }, r))
        : JS(e)
          ? c.createElement(tC, VS({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? c.createElement(tC, VS({}, e, { key: `label-implicit` }, r))
            : null;
};
function rC(e) {
  var { label: t, labelRef: n } = e;
  return nC(t, WS(), n) || null;
}
var iC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  aC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  oC = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = iC(),
      n = aC(),
      r = sn();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  sC = r(
    n((e, t) => {
      t.exports = oC().last;
    })(),
  ),
  cC = [`valueAccessor`],
  lC = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function uC() {
  return (
    (uC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uC.apply(null, arguments)
  );
}
function dC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = fC(e, t);
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
function fC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var pC = (e) => (Array.isArray(e.value) ? (0, sC.default)(e.value) : e.value),
  mC = (0, c.createContext)(void 0),
  hC = mC.Provider,
  gC = (0, c.createContext)(void 0);
gC.Provider;
function _C() {
  return (0, c.useContext)(mC);
}
function vC() {
  return (0, c.useContext)(gC);
}
function yC(e) {
  var { valueAccessor: t = pC } = e,
    n = dC(e, cC),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = dC(n, lC),
    l = _C(),
    u = vC(),
    d = l || u;
  return !d || !d.length
    ? null
    : c.createElement(
        A,
        { className: `recharts-label-list` },
        d.map((e, i) => {
          var l = F(r) ? t(e, i) : V(e && e.payload, r),
            u = F(a) ? {} : { id: `${a}-${i}` };
          return c.createElement(
            tC,
            uC({ key: `label-${i}` }, y(e), s, u, {
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
yC.displayName = `LabelList`;
function bC(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? c.createElement(yC, { key: `labelList-implicit` })
      : c.isValidElement(t) || JS(t)
        ? c.createElement(yC, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? c.createElement(
              yC,
              uC({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var xC = ya({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = xi(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = xi(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: SC,
    removeRadiusAxis: CC,
    addAngleAxis: wC,
    removeAngleAxis: TC,
  } = xC.actions,
  EC = xC.reducer,
  DC = n((e) => {
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
  OC = n((e, t) => {
    t.exports = DC();
  })(),
  kC = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  AC = null,
  jC = null,
  MC = (e) => {
    if (e === AC && Array.isArray(jC)) return jC;
    var t = [];
    return (
      c.Children.forEach(e, (e) => {
        F(e) ||
          ((0, OC.isFragment)(e)
            ? (t = t.concat(MC(e.props.children)))
            : t.push(e));
      }),
      (jC = t),
      (AC = e),
      t
    );
  };
function NC(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => kC(e)) : [kC(t)]),
    MC(e).forEach((e) => {
      var t =
        (0, Ot.default)(e, `type.displayName`) ||
        (0, Ot.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var PC = (e) =>
    e && typeof e == `object` && `clipDot` in e ? !!e.clipDot : !0,
  FC = n((e) => {
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
  IC = n((e, t) => {
    t.exports = FC().isPlainObject;
  });
function LC(e, t) {
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
function RC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LC(Object(n), !0).forEach(function (t) {
          zC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zC(e, t, n) {
  return (
    (t = BC(t)) in e
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
function BC(e) {
  var t = VC(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VC(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function HC() {
  return (
    (HC = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    HC.apply(null, arguments)
  );
}
var UC = (e, t, n, r, i) => {
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
  WC = {
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
  GC = (e) => {
    var t = ul(e, WC),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: l,
        animationDuration: u,
        animationBegin: f,
        isUpdateAnimationActive: p,
      } = t,
      m = (0, c.useRef)(null),
      [h, g] = (0, c.useState)(-1),
      _ = (0, c.useRef)(i),
      v = (0, c.useRef)(a),
      b = (0, c.useRef)(o),
      x = (0, c.useRef)(n),
      S = (0, c.useRef)(r),
      C = Jl(e, `trapezoid-`);
    if (
      ((0, c.useEffect)(() => {
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
    var w = d(`recharts-trapezoid`, s);
    if (!p)
      return c.createElement(
        `g`,
        null,
        c.createElement(
          `path`,
          HC({}, y(t), { className: w, d: UC(n, r, i, a, o) }),
        ),
      );
    var T = _.current,
      E = v.current,
      D = b.current,
      O = x.current,
      k = S.current,
      A = `0px ${h === -1 ? 1 : h}px`,
      ee = `${h}px 0px`,
      j = yl([`strokeDasharray`], u, l);
    return c.createElement(
      ql,
      {
        animationId: C,
        key: C,
        canBegin: h > 0,
        duration: u,
        easing: l,
        isActive: p,
        begin: f,
      },
      (e) => {
        var s = P(T, i, e),
          l = P(E, a, e),
          u = P(D, o, e),
          d = P(O, n, e),
          f = P(k, r, e);
        m.current &&
          ((_.current = s),
          (v.current = l),
          (b.current = u),
          (x.current = d),
          (S.current = f));
        var p =
          e > 0
            ? { transition: j, strokeDasharray: ee }
            : { strokeDasharray: A };
        return c.createElement(
          `path`,
          HC({}, y(t), {
            className: w,
            d: UC(d, f, s, l, u),
            ref: m,
            style: RC(RC({}, p), t.style),
          }),
        );
      },
    );
  },
  KC = r(IC()),
  qC = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function JC(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = YC(e, t);
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
function YC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function XC(e, t) {
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
function ZC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XC(Object(n), !0).forEach(function (t) {
          QC(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XC(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function QC(e, t, n) {
  return (
    (t = $C(t)) in e
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
function $C(e) {
  var t = ew(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ew(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tw(e, t) {
  return ZC(ZC({}, t), e);
}
function nw(e, t) {
  return e === `symbols`;
}
function rw(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return c.createElement(su, n);
    case `trapezoid`:
      return c.createElement(GC, n);
    case `sector`:
      return c.createElement(hu, n);
    case `symbols`:
      if (nw(t, n)) return c.createElement($t, n);
      break;
    default:
      return null;
  }
}
function iw(e) {
  return (0, c.isValidElement)(e) ? e.props : e;
}
function aw(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = tw,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = JC(e, qC),
    s;
  if ((0, c.isValidElement)(t))
    s = (0, c.cloneElement)(t, ZC(ZC({}, o), iw(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, KC.default)(t) && typeof t != `boolean`) {
    var l = r(t, o);
    s = c.createElement(rw, { shapeType: n, elementProps: l });
  } else {
    var u = o;
    s = c.createElement(rw, { shapeType: n, elementProps: u });
  }
  return a ? c.createElement(A, { className: i }, s) : s;
}
var ow = (e, t) => {
    var n = I();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          Ty({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  sw = (e) => {
    var t = I();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(Ey()));
    };
  },
  cw = (e, t) => {
    var n = I();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          Oy({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function lw(e) {
  var { fn: t, args: n } = e,
    r = I(),
    i = Ts();
  return (
    (0, c.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(Sy(e)),
          () => {
            r(Cy(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var uw = () => {};
function dw(e) {
  var { legendPayload: t } = e,
    n = I(),
    r = Ts();
  return (
    (0, c.useLayoutEffect)(
      () =>
        r
          ? uw
          : (n(lc(t)),
            () => {
              n(uc(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var fw =
  c.useId ??
  (() => {
    var [e] = c.useState(() => Pt(`uid-`));
    return e;
  });
function pw(e, t) {
  var n = fw();
  return t || (e ? `${e}-${n}` : n);
}
var mw = (0, c.createContext)(void 0),
  hw = (e) => {
    var { id: t, type: n, children: r } = e,
      i = pw(`recharts-${n}`, t);
    return c.createElement(mw.Provider, { value: i }, r(i));
  },
  gw = ya({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(xi(t.payload));
        },
        prepare: Yi(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = gi(e).cartesianItems.indexOf(xi(n));
          i > -1 && (e.cartesianItems[i] = xi(r));
        },
        prepare: Yi(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = gi(e).cartesianItems.indexOf(xi(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: Yi(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(xi(t.payload));
        },
        prepare: Yi(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = gi(e).polarItems.indexOf(xi(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: Yi(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: _w,
    replaceCartesianGraphicalItem: vw,
    removeCartesianGraphicalItem: yw,
    addPolarGraphicalItem: bw,
    removePolarGraphicalItem: xw,
  } = gw.actions,
  Sw = gw.reducer;
function Cw(e) {
  var t = I(),
    n = (0, c.useRef)(null);
  return (
    (0, c.useLayoutEffect)(() => {
      (n.current === null
        ? t(_w(e))
        : n.current !== e && t(vw({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, c.useLayoutEffect)(
      () => () => {
        n.current &&= (t(yw(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function ww(e, t) {
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
function Tw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ww(Object(n), !0).forEach(function (t) {
          Ew(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ww(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ew(e, t, n) {
  return (
    (t = Dw(t)) in e
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
function Dw(e) {
  var t = Ow(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ow(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kw = ya({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = xi(t.payload);
        },
        prepare: Yi(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: Yi(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = xi(t.payload);
        },
        prepare: Yi(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: Yi(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = xi(t.payload);
        },
        prepare: Yi(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: Yi(),
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
          e.yAxis[n] = Tw(
            Tw({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: Aw,
    removeXAxis: jw,
    addYAxis: Mw,
    removeYAxis: Nw,
    addZAxis: Pw,
    removeZAxis: Fw,
    updateYAxisWidth: Iw,
  } = kw.actions,
  Lw = kw.reducer,
  Rw = R(
    [
      R([H], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      as,
      os,
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
  zw = () => L(Rw),
  Bw = () => L(Ob),
  Vw = [`x`, `y`];
function Hw() {
  return (
    (Hw = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hw.apply(null, arguments)
  );
}
function Uw(e, t) {
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
function Ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Uw(Object(n), !0).forEach(function (t) {
          Gw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Uw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Gw(e, t, n) {
  return (
    (t = Kw(t)) in e
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
function Kw(e) {
  var t = qw(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qw(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Jw(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Yw(e, t);
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
function Yw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Xw(e, t) {
  var { x: n, y: r } = e,
    i = Jw(e, Vw),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return Ww(
    Ww(Ww(Ww(Ww({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function Zw(e) {
  return c.createElement(
    aw,
    Hw(
      {
        shapeType: `rectangle`,
        propTransformer: Xw,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var Qw = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (N(e)) return e;
      var i = N(n) || F(n);
      return i ? e(n, r) : (!i && o(!1), t);
    };
  },
  $w = ya({
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
  { addErrorBar: eT, replaceErrorBar: tT, removeErrorBar: nT } = $w.actions,
  rT = $w.reducer,
  iT = [`children`];
function aT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oT(e, t);
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
var sT = (0, c.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function cT(e) {
  var { children: t } = e,
    n = aT(e, iT);
  return c.createElement(sT.Provider, { value: n }, t);
}
function lT(e, t) {
  var n = L((t) => h_(t, e)),
    r = L((e) => v_(e, t)),
    i = n?.allowDataOverflow ?? p_.allowDataOverflow,
    a = r?.allowDataOverflow ?? g_.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function uT(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = zw(),
    { needClipX: a, needClipY: o, needClip: s } = lT(t, n);
  if (!s) return null;
  var { x: l, y: u, width: d, height: f } = i;
  return c.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    c.createElement(`rect`, {
      x: a ? l : l - d / 2,
      y: o ? u : u - f / 2,
      width: a ? d : d * 2,
      height: o ? f : f * 2,
    }),
  );
}
var dT = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  fT = [`value`, `background`, `tooltipPosition`],
  pT = [`id`],
  mT = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function hT() {
  return (
    (hT = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hT.apply(null, arguments)
  );
}
function gT(e, t) {
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
function _T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gT(Object(n), !0).forEach(function (t) {
          vT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vT(e, t, n) {
  return (
    (t = yT(t)) in e
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
function yT(e) {
  var t = bT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function xT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ST(e, t);
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
function ST(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var CT = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: ts(n, t), payload: e },
  ];
};
function wT(e) {
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
      name: ts(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function TT(e) {
  var t = L(Sb),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: l } = a,
    u = xT(a, dT),
    d = ow(o, r),
    f = sw(s),
    p = cw(l, r);
  if (!i || n == null) return null;
  var m = v(i);
  return c.createElement(
    c.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        l = xT(e, fT);
      if (!o) return null;
      var h = d(e, n),
        g = f(e, n),
        _ = p(e, n),
        v = _T(
          _T(
            _T(
              _T(
                _T({ option: i, isActive: String(n) === t }, l),
                {},
                { fill: `#eee` },
                o,
              ),
              m,
            ),
            nn(u, e, n),
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
      return c.createElement(Zw, hT({ key: `background-bar-${n}` }, v));
    }),
  );
}
function ET(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return _T(
        _T({}, t),
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
  return c.createElement(hC, { value: t ? i : void 0 }, n);
}
function DT(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = L(Sb),
    l = L(wb),
    u = n && String(a) === s && (l == null || o === l),
    d = u ? n : t;
  return c.createElement(
    Zw,
    hT({}, r, { name: String(r.name) }, i, {
      isActive: u,
      option: d,
      index: a,
      dataKey: o,
    }),
  );
}
function OT(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return c.createElement(
    Zw,
    hT({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function kT(e) {
  var { data: t, props: n } = e,
    r = _(n),
    { id: i } = r,
    a = xT(r, pT),
    { shape: o, dataKey: s, activeBar: l } = n,
    { onMouseEnter: u, onClick: d, onMouseLeave: f } = n,
    p = xT(n, mT),
    m = ow(u, s),
    h = sw(f),
    g = cw(d, s);
  return t
    ? c.createElement(
        c.Fragment,
        null,
        t.map((e, t) =>
          c.createElement(
            A,
            hT(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              nn(p, e, t),
              {
                onMouseEnter: m(e, t),
                onMouseLeave: h(e, t),
                onClick: g(e, t),
              },
            ),
            l
              ? c.createElement(DT, {
                  shape: o,
                  activeBar: l,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : c.createElement(OT, {
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
function AT(e) {
  var { props: t, previousRectanglesRef: n } = e,
    {
      data: r,
      layout: i,
      isAnimationActive: a,
      animationBegin: o,
      animationDuration: s,
      animationEasing: l,
      onAnimationEnd: u,
      onAnimationStart: d,
    } = t,
    f = n.current,
    p = Jl(t, `recharts-bar-`),
    [m, h] = (0, c.useState)(!1),
    g = !m,
    _ = (0, c.useCallback)(() => {
      (typeof u == `function` && u(), h(!1));
    }, [u]),
    v = (0, c.useCallback)(() => {
      (typeof d == `function` && d(), h(!0));
    }, [d]);
  return c.createElement(
    ET,
    { showLabels: g, rects: r },
    c.createElement(
      ql,
      {
        animationId: p,
        begin: o,
        duration: s,
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
                  return _T(
                    _T({}, t),
                    {},
                    {
                      x: P(r.x, t.x, e),
                      y: P(r.y, t.y, e),
                      width: P(r.width, t.width, e),
                      height: P(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = P(0, t.height, e);
                  return _T(
                    _T({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = P(0, t.width, e);
                return _T(_T({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : c.createElement(
                A,
                null,
                c.createElement(kT, { props: t, data: a }),
              )
        );
      },
    ),
    c.createElement(bC, { label: t.label }),
    t.children,
  );
}
function jT(e) {
  var t = (0, c.useRef)(null);
  return c.createElement(AT, { previousRectanglesRef: t, props: e });
}
var MT = 0,
  NT = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: V(e, t) };
  },
  PT = class extends c.PureComponent {
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
        id: l,
      } = this.props;
      if (e || t == null) return null;
      var u = d(`recharts-bar`, r),
        f = l;
      return c.createElement(
        A,
        { className: u, id: l },
        o &&
          c.createElement(
            `defs`,
            null,
            c.createElement(uT, { clipPathId: f, xAxisId: i, yAxisId: a }),
          ),
        c.createElement(
          A,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${f})` : void 0,
          },
          c.createElement(TT, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          c.createElement(jT, this.props),
        ),
      );
    }
  },
  FT = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !Mc.isSsr,
    legendType: `rect`,
    minPointSize: MT,
    xAxisId: 0,
    yAxisId: 0,
  };
function IT(e) {
  var {
      xAxisId: t,
      yAxisId: n,
      hide: r,
      legendType: i,
      minPointSize: a,
      activeBar: o,
      animationBegin: s,
      animationDuration: l,
      animationEasing: u,
      isAnimationActive: d,
    } = e,
    { needClip: f } = lT(t, n),
    p = ic(),
    m = Ts(),
    h = NC(e.children, Wx),
    g = L((r) => iE(r, t, n, m, e.id, h));
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
    c.createElement(
      cT,
      {
        xAxisId: t,
        yAxisId: n,
        data: g,
        dataPointFormatter: NT,
        errorBarOffset: _,
      },
      c.createElement(
        PT,
        hT({}, e, {
          layout: p,
          needClip: f,
          data: g,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: s,
          animationDuration: l,
          animationEasing: u,
          isAnimationActive: d,
        }),
      ),
    )
  );
}
function LT(e) {
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
    _ = qo({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u ? (h = Vo(u[d], g)) : ((h = V(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = Qw(r, MT)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Ko({
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
          ((x = At(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = kt(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = Ko({
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
          var A = kt(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : _T(
            _T({}, e),
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
function RT(e) {
  var t = ul(e, FT),
    n = Ts();
  return c.createElement(hw, { id: t.id, type: `bar` }, (e) =>
    c.createElement(
      c.Fragment,
      null,
      c.createElement(dw, { legendPayload: CT(t) }),
      c.createElement(lw, { fn: wT, args: t }),
      c.createElement(Cw, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: Wo(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      c.createElement(IT, hT({}, t, { id: e })),
    ),
  );
}
var zT = c.memo(RT);
zT.displayName = `Bar`;
function BT(e, t) {
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
function VT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? BT(Object(n), !0).forEach(function (t) {
          HT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : BT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function HT(e, t, n) {
  return (
    (t = UT(t)) in e
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
function UT(e) {
  var t = WT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function WT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var GT = (e, t) => t,
  KT = (e, t, n) => n,
  qT = (e, t, n, r) => r,
  JT = R([E_, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  YT = R([JT], (e) => e?.maxBarSize),
  XT = (e, t, n, r, i, a) => a,
  ZT = (e, t, n) => {
    var r = n ?? e;
    if (!F(r)) return Ft(r, t, 0);
  },
  QT = R([U, E_, GT, KT, qT], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  $T = (e, t, n, r) =>
    U(e) === `horizontal` ? K_(e, `yAxis`, n, r) : K_(e, `xAxis`, t, r),
  eE = R(
    [
      QT,
      jg,
      (e, t, n) =>
        U(e) === `horizontal` ? ry(e, `xAxis`, t) : ry(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(i_),
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
            barSize: ZT(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: ZT(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  tE = (e, t, n, r, i) => {
    var a = JT(e, t, n, r, i);
    if (a != null) {
      var o = U(e),
        s = Og(e),
        { maxBarSize: c } = a,
        l = F(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = dy(e, `xAxis`, t, r)), (d = uy(e, `xAxis`, t, r)))
          : ((u = dy(e, `yAxis`, n, r)), (d = uy(e, `yAxis`, n, r))),
        $o(u, d, !0) ?? l ?? 0
      );
    }
  },
  nE = (e, t, n, r) => {
    var i = U(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = dy(e, `xAxis`, t, r)), (o = uy(e, `xAxis`, t, r)))
        : ((a = dy(e, `yAxis`, n, r)), (o = uy(e, `yAxis`, n, r))),
      $o(a, o)
    );
  };
function rE(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Ft(e, n, 0, !0),
      s,
      c = [];
    if (zs(r[0].barSize)) {
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
      var p = Ft(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = zs(i) ? Math.min(m, i) : m;
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
var iE = R(
    [
      H,
      Cs,
      (e, t, n, r) => dy(e, `xAxis`, t, r),
      (e, t, n, r) => dy(e, `yAxis`, n, r),
      (e, t, n, r) => uy(e, `xAxis`, t, r),
      (e, t, n, r) => uy(e, `yAxis`, n, r),
      R(
        [
          R([eE, Og, kg, Ag, tE, nE, YT], (e, t, n, r, i, a, o) => {
            var s = F(o) ? t : o,
              c = rE(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  VT(
                    VT({}, e),
                    {},
                    {
                      position: VT(
                        VT({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          JT,
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
      ng,
      nE,
      R([$T, JT], (e, t) => {
        var n = e_(t);
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
      JT,
      XT,
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
          return LT({
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
  aE = (e) => {
    var { chartData: t } = e,
      n = I(),
      r = Ts();
    return (
      (0, c.useEffect)(
        () =>
          r
            ? () => {}
            : (n(_x(t)),
              () => {
                n(_x(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  oE = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  sE = ya({
    name: `brush`,
    initialState: oE,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? oE : t.payload;
      },
    },
  }),
  { setBrushSettings: cE } = sE.actions,
  lE = sE.reducer;
function uE(e, t) {
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
function dE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? uE(Object(n), !0).forEach(function (t) {
          fE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : uE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fE(e, t, n) {
  return (
    (t = pE(t)) in e
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
function pE(e) {
  var t = mE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var hE = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return {
      x: Math.min(n, i),
      y: Math.min(r, a),
      width: Math.abs(i - n),
      height: Math.abs(a - r),
    };
  },
  gE = (e) => {
    var { x1: t, y1: n, x2: r, y2: i } = e;
    return hE({ x: t, y: n }, { x: r, y: i });
  },
  _E = class e {
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
fE(_E, `EPS`, 1e-4);
var vE = (e) => {
  var t = Object.keys(e).reduce(
    (t, n) => dE(dE({}, t), {}, { [n]: _E.create(e[n]) }),
    {},
  );
  return dE(
    dE({}, t),
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
function yE(e) {
  return ((e % 180) + 180) % 180;
}
var bE = function (e) {
    var { width: t, height: n } = e,
      r =
        (yE(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  xE = ya({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = gi(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = gi(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = gi(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: SE,
    removeDot: CE,
    addArea: wE,
    removeArea: TE,
    addLine: EE,
    removeLine: DE,
  } = xE.actions,
  OE = xE.reducer,
  kE = (0, c.createContext)(void 0),
  AE = (e) => {
    var { children: t } = e,
      [n] = (0, c.useState)(`${Pt(`recharts`)}-clip`),
      r = zw();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return c.createElement(
      kE.Provider,
      { value: n },
      c.createElement(
        `defs`,
        null,
        c.createElement(
          `clipPath`,
          { id: n },
          c.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  },
  jE = () => (0, c.useContext)(kE);
function ME(e, t) {
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
function NE(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function PE(e, t, n) {
  return bE({ width: e.width + t.width, height: e.height + t.height }, n);
}
function FE(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function IE(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function LE(e, t) {
  return NE(e, t + 1);
}
function RE(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: NE(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || IE(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function zE(e, t) {
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
function BE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zE(Object(n), !0).forEach(function (t) {
          VE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function VE(e, t, n) {
  return (
    (t = HE(t)) in e
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
function HE(e) {
  var t = UE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function UE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function WE(e, t, n, r, i) {
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
          a[t] = r = BE(
            BE({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = BE(BE({}, r), {}, { tickCoord: r.coordinate });
        IE(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = BE(BE({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function GE(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      BE(
        BE({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      IE(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = BE(BE({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = BE(
            BE({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = BE(BE({}, r), {}, { tickCoord: r.coordinate });
        IE(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = BE(BE({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function KE(e, t, n) {
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
  if (N(c) || Mc.isSsr) return LE(i, N(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? oS(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? PE(oS(i, { fontSize: t, letterSpacing: n }), m, d)
        : oS(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? kt(i[1].coordinate - i[0].coordinate) : 1,
    _ = FE(a, g, p);
  return c === `equidistantPreserveStart`
    ? RE(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? GE(g, _, h, i, o, c === `preserveStartEnd`)
          : WE(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var qE = (e) => {
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
  JE = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  YE = [`viewBox`],
  XE = [`viewBox`];
function ZE(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = QE(e, t);
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
function QE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function $E() {
  return (
    ($E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $E.apply(null, arguments)
  );
}
function eD(e, t) {
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
      ? eD(Object(n), !0).forEach(function (t) {
          tD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tD(e, t, n) {
  return (
    (t = nD(t)) in e
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
function nD(e) {
  var t = rD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var iD = {
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
function aD(e) {
  var {
    x: t,
    y: n,
    width: r,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: s,
    otherSvgProps: l,
  } = e;
  if (!s) return null;
  var u = $($($({}, l), _(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var f = +((a === `top` && !o) || (a === `bottom` && o));
    u = $($({}, u), {}, { x1: t, y1: n + f * i, x2: t + r, y2: n + f * i });
  } else {
    var p = +((a === `left` && !o) || (a === `right` && o));
    u = $($({}, u), {}, { x1: t + p * r, y1: n, x2: t + p * r, y2: n + i });
  }
  return c.createElement(
    `line`,
    $E({}, u, {
      className: d(
        `recharts-cartesian-axis-line`,
        (0, Ot.default)(s, `className`),
      ),
    }),
  );
}
function oD(e, t, n, r, i, a, o, s, c) {
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
function sD(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function cD(e, t) {
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
function lD(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = d(n.className, `recharts-cartesian-axis-tick-value`);
  if (c.isValidElement(t))
    i = c.cloneElement(t, $($({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t($($({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = d(o, t?.className)),
      (i = c.createElement(NS, $E({}, n, { className: o }), r)));
  }
  return i;
}
function uD(e) {
  var {
      ticks: t = [],
      tick: n,
      tickLine: r,
      stroke: i,
      tickFormatter: a,
      unit: o,
      padding: s,
      tickTextProps: l,
      orientation: u,
      mirror: f,
      x: p,
      y: m,
      width: h,
      height: g,
      tickSize: y,
      tickMargin: b,
      fontSize: x,
      letterSpacing: S,
      getTicksConfig: C,
      events: w,
    } = e,
    T = KE($($({}, C), {}, { ticks: t }), x, S),
    E = sD(u, f),
    D = cD(u, f),
    O = _(C),
    k = v(n),
    ee = {};
  typeof r == `object` && (ee = r);
  var j = $($({}, O), {}, { fill: `none` }, ee),
    M = T.map((e, t) => {
      var { line: _, tick: v } = oD(e, p, m, h, g, u, y, f, b),
        x = $(
          $(
            $(
              $({ textAnchor: E, verticalAnchor: D }, O),
              {},
              { stroke: `none`, fill: i },
              k,
            ),
            v,
          ),
          {},
          {
            index: t,
            payload: e,
            visibleTicksCount: T.length,
            tickFormatter: a,
            padding: s,
          },
          l,
        );
      return c.createElement(
        A,
        $E(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          nn(w, e, t),
        ),
        r &&
          c.createElement(
            `line`,
            $E({}, j, _, {
              className: d(
                `recharts-cartesian-axis-tick-line`,
                (0, Ot.default)(r, `className`),
              ),
            }),
          ),
        n &&
          c.createElement(lD, {
            option: n,
            tickProps: x,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return M.length > 0
    ? c.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, M)
    : null;
}
var dD = (0, c.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      l = ZE(e, JE),
      [u, f] = (0, c.useState)(``),
      [p, m] = (0, c.useState)(``),
      h = (0, c.useRef)(null);
    (0, c.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        qE({
          ticks: h.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var g = (0, c.useCallback)(
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
            (i !== u || a !== p) && (f(i), m(a));
          }
        }
      },
      [u, p],
    );
    return o || (r != null && r <= 0) || (i != null && i <= 0)
      ? null
      : c.createElement(
          A,
          { className: d(`recharts-cartesian-axis`, a), ref: g },
          c.createElement(aD, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: _(e),
          }),
          c.createElement(uD, {
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
            fontSize: u,
            letterSpacing: p,
            getTicksConfig: e,
            events: l,
          }),
          c.createElement(
            US,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            c.createElement(rC, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  fD = c.memo(dD, (e, t) => {
    var { viewBox: n } = e,
      r = ZE(e, YE),
      { viewBox: i } = t,
      a = ZE(t, XE);
    return ME(n, i) && ME(r, a);
  }),
  pD = c.forwardRef((e, t) => {
    var n = ul(e, iD);
    return c.createElement(fD, $E({}, n, { ref: t }));
  });
pD.displayName = `CartesianAxis`;
var mD = [`x1`, `y1`, `x2`, `y2`, `key`],
  hD = [`offset`],
  gD = [`xAxisId`, `yAxisId`],
  _D = [`xAxisId`, `yAxisId`];
function vD(e, t) {
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
function yD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vD(Object(n), !0).forEach(function (t) {
          bD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bD(e, t, n) {
  return (
    (t = xD(t)) in e
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
function xD(e) {
  var t = SD(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function SD(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function CD() {
  return (
    (CD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    CD.apply(null, arguments)
  );
}
function wD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = TD(e, t);
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
function TD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ED = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return c.createElement(`rect`, {
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
function DD(e, t) {
  var n;
  if (c.isValidElement(e)) n = c.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      l = _(wD(t, mD)),
      { offset: u } = l,
      d = wD(l, hD);
    n = c.createElement(
      `line`,
      CD({}, d, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function OD(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = wD(e, gD),
    l = i.map((e, i) =>
      DD(
        r,
        yD(
          yD({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return c.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    l,
  );
}
function kD(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = wD(e, _D),
    l = i.map((e, i) =>
      DD(
        r,
        yD(
          yD({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return c.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    l,
  );
}
function AD(e) {
  var {
    horizontalFill: t,
    fillOpacity: n,
    x: r,
    y: i,
    width: a,
    height: o,
    horizontalPoints: s,
    horizontal: l = !0,
  } = e;
  if (!l || !t || !t.length) return null;
  var u = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== u[0] && u.unshift(0);
  var d = u.map((e, s) => {
    var l = u[s + 1] ? u[s + 1] - e : i + o - e;
    if (l <= 0) return null;
    var d = s % t.length;
    return c.createElement(`rect`, {
      key: `react-${s}`,
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
  return c.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    d,
  );
}
function jD(e) {
  var {
    vertical: t = !0,
    verticalFill: n,
    fillOpacity: r,
    x: i,
    y: a,
    width: o,
    height: s,
    verticalPoints: l,
  } = e;
  if (!t || !n || !n.length) return null;
  var u = l.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== u[0] && u.unshift(0);
  var d = u.map((e, t) => {
    var l = u[t + 1] ? u[t + 1] - e : i + o - e;
    if (l <= 0) return null;
    var d = t % n.length;
    return c.createElement(`rect`, {
      key: `react-${t}`,
      x: e,
      y: a,
      width: l,
      height: s,
      stroke: `none`,
      fill: n[d],
      fillOpacity: r,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return c.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    d,
  );
}
var MD = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return Lo(
      KE(
        yD(
          yD(yD({}, iD), n),
          {},
          { ticks: Ro(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  ND = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return Lo(
      KE(
        yD(
          yD(yD({}, iD), n),
          {},
          { ticks: Ro(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  PD = {
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
function FD(e) {
  var t = tc(),
    n = nc(),
    r = ec(),
    i = yD(
      yD({}, ul(e, PD)),
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
      x: s,
      y: l,
      width: u,
      height: d,
      syncWithTicks: f,
      horizontalValues: p,
      verticalValues: m,
    } = i,
    h = Ts(),
    g = L((e) => cy(e, `xAxis`, a, h)),
    _ = L((e) => cy(e, `yAxis`, o, h));
  if (
    !N(u) ||
    u <= 0 ||
    !N(d) ||
    d <= 0 ||
    !N(s) ||
    s !== +s ||
    !N(l) ||
    l !== +l
  )
    return null;
  var v = i.verticalCoordinatesGenerator || MD,
    y = i.horizontalCoordinatesGenerator || ND,
    { horizontalPoints: b, verticalPoints: x } = i;
  if ((!b || !b.length) && typeof y == `function`) {
    var S = p && p.length,
      C = y(
        {
          yAxis: _ ? yD(yD({}, _), {}, { ticks: S ? p : _.ticks }) : void 0,
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
          xAxis: g ? yD(yD({}, g), {}, { ticks: w ? m : g.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        w ? !0 : f,
      );
    Array.isArray(T) && (x = T);
  }
  return c.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    c.createElement(ED, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    c.createElement(AD, CD({}, i, { horizontalPoints: b })),
    c.createElement(jD, CD({}, i, { verticalPoints: x })),
    c.createElement(
      OD,
      CD({}, i, { offset: r, horizontalPoints: b, xAxis: g, yAxis: _ }),
    ),
    c.createElement(
      kD,
      CD({}, i, { offset: r, verticalPoints: x, xAxis: g, yAxis: _ }),
    ),
  );
}
FD.displayName = `CartesianGrid`;
var ID = [`dangerouslySetInnerHTML`, `ticks`],
  LD = [`id`],
  RD = [`domain`],
  zD = [`domain`];
function BD() {
  return (
    (BD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    BD.apply(null, arguments)
  );
}
function VD(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = HD(e, t);
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
function HD(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function UD(e) {
  var t = I();
  return (
    (0, c.useLayoutEffect)(
      () => (
        t(Aw(e)),
        () => {
          t(jw(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var WD = (e) => {
    var { xAxisId: t, className: n } = e,
      r = L(Cs),
      i = Ts(),
      a = `xAxis`,
      o = L((e) => Vv(e, a, t, i)),
      s = L((e) => ly(e, a, t, i)),
      l = L((e) => Yv(e, t)),
      u = L((e) => ey(e, t)),
      f = L((e) => m_(e, t));
    if (l == null || u == null || f == null) return null;
    var { dangerouslySetInnerHTML: p, ticks: m } = e,
      h = VD(e, ID),
      { id: g } = f,
      _ = VD(f, LD);
    return c.createElement(
      pD,
      BD({}, h, _, {
        scale: o,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        className: d(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  GD = {
    allowDataOverflow: p_.allowDataOverflow,
    allowDecimals: p_.allowDecimals,
    allowDuplicatedCategory: p_.allowDuplicatedCategory,
    height: p_.height,
    hide: !1,
    mirror: p_.mirror,
    orientation: p_.orientation,
    padding: p_.padding,
    reversed: p_.reversed,
    scale: p_.scale,
    tickCount: p_.tickCount,
    type: p_.type,
    xAxisId: 0,
  },
  KD = c.memo(
    (e) => {
      var t = ul(e, GD);
      return c.createElement(
        c.Fragment,
        null,
        c.createElement(UD, {
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
        c.createElement(WD, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = VD(e, RD),
        { domain: i } = t;
      return ME(r, VD(t, zD))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : ME({ domain: n }, { domain: i })
        : !1;
    },
  );
KD.displayName = `XAxis`;
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
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
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
    (0, c.useLayoutEffect)(
      () => (
        t(Mw(e)),
        () => {
          t(Nw(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var tO = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, c.useRef)(null),
      o = (0, c.useRef)(null),
      s = L(Cs),
      l = Ts(),
      u = I(),
      f = `yAxis`,
      p = L((e) => Vv(e, f, t, l)),
      m = L((e) => ny(e, t)),
      h = L((e) => ty(e, t)),
      g = L((e) => ly(e, f, t, l)),
      _ = L((e) => __(e, t));
    if (
      ((0, c.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !m ||
            JS(i) ||
            (0, c.isValidElement)(i) ||
            _ == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(m.width) !== Math.round(n) && u(Iw({ id: t, width: n }));
          }
        }
      }, [g, m, u, i, t, r, _]),
      m == null || h == null || _ == null)
    )
      return null;
    var { dangerouslySetInnerHTML: v, ticks: y } = e,
      b = QD(e, qD),
      { id: x } = _,
      S = QD(_, JD);
    return c.createElement(
      pD,
      ZD({}, b, S, {
        ref: a,
        labelRef: o,
        scale: p,
        x: h.x,
        y: h.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: m.width,
        height: m.height,
        className: d(`recharts-${f} ${f}`, n),
        viewBox: s,
        ticks: g,
      }),
    );
  },
  nO = {
    allowDataOverflow: g_.allowDataOverflow,
    allowDecimals: g_.allowDecimals,
    allowDuplicatedCategory: g_.allowDuplicatedCategory,
    hide: !1,
    mirror: g_.mirror,
    orientation: g_.orientation,
    padding: g_.padding,
    reversed: g_.reversed,
    scale: g_.scale,
    tickCount: g_.tickCount,
    type: g_.type,
    width: g_.width,
    yAxisId: 0,
  },
  rO = c.memo(
    (e) => {
      var t = ul(e, nO);
      return c.createElement(
        c.Fragment,
        null,
        c.createElement(eO, {
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
        c.createElement(tO, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = QD(e, YD),
        { domain: i } = t;
      return ME(r, QD(t, XD))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : ME({ domain: n }, { domain: i })
        : !1;
    },
  );
((rO.displayName = `YAxis`), s());
function iO(e) {
  e();
}
function aO() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      iO(() => {
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
var oO = { notify() {}, get: () => [] };
function sO(e, t) {
  let n,
    r = oO,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = aO())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = oO)));
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
var cO =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  lO = typeof navigator < `u` && navigator.product === `ReactNative`,
  uO = cO || lO ? c.useLayoutEffect : c.useEffect,
  dO = Symbol.for(`react-redux-context`),
  fO = typeof globalThis < `u` ? globalThis : {};
function pO() {
  if (!c.createContext) return {};
  let e = (fO[dO] ??= new Map()),
    t = e.get(c.createContext);
  return (t || ((t = c.createContext(null)), e.set(c.createContext, t)), t);
}
var mO = pO();
function hO(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = c.useMemo(() => {
      let e = sO(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = c.useMemo(() => i.getState(), [i]);
  uO(() => {
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
  let s = n || mO;
  return c.createElement(s.Provider, { value: a }, t);
}
var gO = hO,
  _O = R([(e, t) => t, U, Qg, X, hb, _b, Bb, H], Xb),
  vO = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  yO = Hi(`mouseClick`),
  bO = oo();
bO.startListening({
  actionCreator: yO,
  effect: (e, t) => {
    var n = e.payload,
      r = _O(t.getState(), vO(n));
    r?.activeIndex != null &&
      t.dispatch(
        Ay({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var xO = Hi(`mouseMove`),
  SO = oo();
SO.startListening({
  actionCreator: xO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = gy(r, r.tooltip.settings.shared),
      a = _O(r, vO(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(Dy())
        : t.dispatch(
            ky({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function CO(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var wO = {
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
  TO = ya({
    name: `rootProps`,
    initialState: wO,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? wO.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  EO = TO.reducer,
  { updateOptions: DO } = TO.actions,
  OO = ya({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: kO } = OO.actions,
  AO = OO.reducer,
  jO = Hi(`keyDown`),
  MO = Hi(`focus`),
  NO = oo();
(NO.startListening({
  actionCreator: jO,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(Hy(r, rb(n))),
          o = _b(n);
        if (i === `Enter`) {
          var s = Gb(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            My({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = fy(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = Gb(n, `axis`, `hover`, String(l));
            t.dispatch(
              My({
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
  NO.startListening({
    actionCreator: MO,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Gb(n, `axis`, `hover`, String(i));
          t.dispatch(
            My({
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
var PO = Hi(`externalEvent`),
  FO = oo();
FO.startListening({
  actionCreator: PO,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: Eb(n),
          activeDataKey: wb(n),
          activeIndex: Sb(n),
          activeLabel: Cb(n),
          activeTooltipIndex: Sb(n),
          isTooltipActive: Db(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var IO = R(
    [R([Ky], (e) => e.tooltipItemPayloads), Gy, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  LO = Hi(`touchMove`),
  RO = oo();
RO.startListening({
  actionCreator: LO,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = gy(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = _O(
        r,
        vO({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          ky({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(ds),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = IO(t.getState(), c, l);
      t.dispatch(Ty({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var zO = yr({
    brush: lE,
    cartesianAxis: Lw,
    chartData: bx,
    errorBars: rT,
    graphicalItems: Sw,
    layout: mo,
    legend: dc,
    options: px,
    polarAxis: EC,
    polarOptions: AO,
    referenceElements: OE,
    rootProps: EO,
    tooltip: Ny,
  }),
  BO = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return $i({
      reducer: zO,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          bO.middleware,
          SO.middleware,
          NO.middleware,
          FO.middleware,
          RO.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Zi({ type: `raf` }))
        );
      },
      devTools: Mc.devToolsEnabled && {
        serialize: { replacer: CO },
        name: `recharts-${t}`,
      },
    });
  };
function VO(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = Ts(),
    a = (0, c.useRef)(null);
  if (i) return n;
  a.current ??= BO(t, r);
  var o = Fn;
  return c.createElement(gO, { context: o, store: a.current }, n);
}
function HO(e) {
  var { layout: t, margin: n } = e,
    r = I(),
    i = Ts();
  return (
    (0, c.useEffect)(() => {
      i || (r(uo(t)), r(lo(n)));
    }, [r, i, t, n]),
    null
  );
}
function UO(e) {
  var t = I();
  return (
    (0, c.useEffect)(() => {
      t(DO(e));
    }, [t, e]),
    null
  );
}
var WO = [`children`];
function GO(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = KO(e, t);
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
function KO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function qO() {
  return (
    (qO = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qO.apply(null, arguments)
  );
}
var JO = { width: `100%`, height: `100%`, display: `block` },
  YO = (0, c.forwardRef)((e, t) => {
    var n = tc(),
      r = nc(),
      i = Nc();
    if (!Bs(n) || !Bs(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: l } = e,
      u = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      d = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return c.createElement(
      T,
      qO({}, o, {
        title: s,
        desc: l,
        role: d,
        tabIndex: u,
        width: n,
        height: r,
        style: JO,
        ref: t,
      }),
      a,
    );
  }),
  XO = (e) => {
    var { children: t } = e,
      n = L(Ds);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return c.createElement(T, { width: r, height: i, x: o, y: a }, t);
  },
  ZO = (0, c.forwardRef)((e, t) => {
    var { children: n } = e,
      r = GO(e, WO);
    return Ts()
      ? c.createElement(XO, null, n)
      : c.createElement(YO, qO({ ref: t }, r), n);
  });
function QO() {
  var e = I(),
    [t, n] = (0, c.useState)(null),
    r = L(ss);
  return (
    (0, c.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        zs(n) && n !== r && e(po(n));
      }
    }, [t, e, r]),
    n
  );
}
function $O(e, t) {
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
function ek(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $O(Object(n), !0).forEach(function (t) {
          tk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $O(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tk(e, t, n) {
  return (
    (t = nk(t)) in e
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
function nk(e) {
  var t = rk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
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
var ak = () => (Mx(), null);
function ok(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var sk = (0, c.forwardRef)((e, t) => {
    var n = (0, c.useRef)(null),
      [r, i] = (0, c.useState)({
        containerWidth: ok(e.style?.width),
        containerHeight: ok(e.style?.height),
      }),
      a = (0, c.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, c.useCallback)(
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
      (0, c.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      c.createElement(
        c.Fragment,
        null,
        c.createElement(ac, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        c.createElement(`div`, ik({ ref: o }, e)),
      )
    );
  }),
  ck = (0, c.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, c.useState)({
        containerWidth: ok(n),
        containerHeight: ok(r),
      }),
      o = (0, c.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, c.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(ac, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      c.createElement(`div`, ik({ ref: s }, e)),
    );
  }),
  lk = (0, c.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(ac, { width: n, height: r }),
      c.createElement(`div`, ik({ ref: t }, e)),
    );
  }),
  uk = (0, c.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return jt(n) || jt(r)
      ? c.createElement(ck, ik({}, e, { ref: t }))
      : c.createElement(lk, ik({}, e, { ref: t }));
  });
function dk(e) {
  return e === !0 ? sk : uk;
}
var fk = (0, c.forwardRef)((e, t) => {
    var {
        children: n,
        className: r,
        height: i,
        onClick: a,
        onContextMenu: o,
        onDoubleClick: s,
        onMouseDown: l,
        onMouseEnter: u,
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
      S = (0, c.useRef)(null),
      C = I(),
      [w, T] = (0, c.useState)(null),
      [E, D] = (0, c.useState)(null),
      O = QO(),
      k = Ys(),
      A = k?.width > 0 ? k.width : y,
      j = k?.height > 0 ? k.height : i,
      M = (0, c.useCallback)(
        (e) => {
          (O(e),
            typeof t == `function` && t(e),
            T(e),
            D(e),
            e != null && (S.current = e));
        },
        [O, t, T, D],
      ),
      te = (0, c.useCallback)(
        (e) => {
          (C(yO(e)), C(PO({ handler: a, reactEvent: e })));
        },
        [C, a],
      ),
      ne = (0, c.useCallback)(
        (e) => {
          (C(xO(e)), C(PO({ handler: u, reactEvent: e })));
        },
        [C, u],
      ),
      re = (0, c.useCallback)(
        (e) => {
          (C(Dy()), C(PO({ handler: f, reactEvent: e })));
        },
        [C, f],
      ),
      ie = (0, c.useCallback)(
        (e) => {
          (C(xO(e)), C(PO({ handler: p, reactEvent: e })));
        },
        [C, p],
      ),
      ae = (0, c.useCallback)(() => {
        C(MO());
      }, [C]),
      oe = (0, c.useCallback)(
        (e) => {
          C(jO(e.key));
        },
        [C],
      ),
      se = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: o, reactEvent: e }));
        },
        [C, o],
      ),
      ce = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: s, reactEvent: e }));
        },
        [C, s],
      ),
      le = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: l, reactEvent: e }));
        },
        [C, l],
      ),
      ue = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: m, reactEvent: e }));
        },
        [C, m],
      ),
      de = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: _, reactEvent: e }));
        },
        [C, _],
      ),
      fe = (0, c.useCallback)(
        (e) => {
          (x && C(LO(e)), C(PO({ handler: g, reactEvent: e })));
        },
        [C, x, g],
      ),
      pe = (0, c.useCallback)(
        (e) => {
          C(PO({ handler: h, reactEvent: e }));
        },
        [C, h],
      ),
      me = dk(b);
    return c.createElement(
      ax.Provider,
      { value: w },
      c.createElement(
        ee.Provider,
        { value: E },
        c.createElement(
          me,
          {
            width: A ?? v?.width,
            height: j ?? v?.height,
            className: d(`recharts-wrapper`, r),
            style: ek(
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
          c.createElement(ak, null),
          n,
        ),
      ),
    );
  }),
  pk = [
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
function mk(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = hk(e, t);
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
function hk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var gk = (0, c.forwardRef)((e, t) => {
  var {
      width: n,
      height: r,
      responsive: i,
      children: a,
      className: o,
      style: s,
      compact: l,
      title: u,
      desc: d,
    } = e,
    f = _(mk(e, pk));
  return l
    ? c.createElement(
        c.Fragment,
        null,
        c.createElement(ac, { width: n, height: r }),
        c.createElement(ZO, { otherAttributes: f, title: u, desc: d }, a),
      )
    : c.createElement(
        fk,
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
        c.createElement(
          ZO,
          { otherAttributes: f, title: u, desc: d, ref: t },
          c.createElement(AE, null, a),
        ),
      );
});
function _k() {
  return (
    (_k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _k.apply(null, arguments)
  );
}
var vk = {
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
  yk = (0, c.forwardRef)(function (e, t) {
    var n = ul(e.categoricalChartProps, vk),
      {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        categoricalChartProps: s,
      } = e,
      l = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return c.createElement(
      VO,
      { preloadedState: { options: l }, reduxStoreName: s.id ?? r },
      c.createElement(aE, { chartData: s.data }),
      c.createElement(HO, { layout: n.layout, margin: n.margin }),
      c.createElement(UO, {
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
      c.createElement(gk, _k({}, n, { ref: t })),
    );
  });
export {
  V as $,
  uy as A,
  cc as B,
  US as C,
  Sb as D,
  dx as E,
  Jl as F,
  tc as G,
  U as H,
  ql as I,
  Zs as J,
  rc as K,
  ul as L,
  h_ as M,
  v_ as N,
  Vv as O,
  ng as P,
  ts as Q,
  Kc as R,
  bC as S,
  d as St,
  Ux as T,
  nc as U,
  sc as V,
  ic as W,
  $o as X,
  Ts as Y,
  Go as Z,
  hw as _,
  T as _t,
  jE as a,
  L as at,
  PC as b,
  _ as bt,
  vE as c,
  nn as ct,
  uT as d,
  At as dt,
  Io as et,
  lT as f,
  F as ft,
  Cw as g,
  A as gt,
  zw as h,
  j as ht,
  FD as i,
  I as it,
  E_ as j,
  dy as k,
  gE as l,
  $t as lt,
  Bw as m,
  N as mt,
  rO as n,
  ur as nt,
  EE as o,
  Mn as ot,
  cT as p,
  Mt as pt,
  Qs as q,
  KD as r,
  R as rt,
  DE as s,
  en as st,
  yk as t,
  fr as tt,
  zT as u,
  P as ut,
  dw as v,
  y as vt,
  rC as w,
  hC as x,
  v as xt,
  lw as y,
  b as yt,
  Mc as z,
};
