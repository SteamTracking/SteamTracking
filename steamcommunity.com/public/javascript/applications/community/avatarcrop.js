/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { Ft as n, ot as r } from "./libraries.js?contenthash=eLY4-d-j";
import { Kd as i, Yu as a } from "./main.js?contenthash=B3VTzWgT";
import { n as o } from "./profile.js?contenthash=q5IpaqwG";
var s = t((e, t) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? (t.exports = r())
        : typeof define == `function` && define.amd
          ? define(r)
          : ((n = typeof globalThis < `u` ? globalThis : n || self),
            (n.Cropper = r()));
    })(e, function () {
      function e(e, t) {
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
      function t(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = arguments[n] == null ? {} : arguments[n];
          n % 2
            ? e(Object(r), !0).forEach(function (e) {
                o(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : e(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function n(e) {
        "@babel/helpers - typeof";
        return (
          (n =
            typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol == `function` &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? `symbol`
                    : typeof e;
                }),
          n(e)
        );
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw TypeError(`Cannot call a class as a function`);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            `value` in r && (r.writable = !0),
            Object.defineProperty(e, m(r.key), r);
        }
      }
      function a(e, t, n) {
        return (
          t && i(e.prototype, t),
          n && i(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function o(e, t, n) {
        return (
          (t = m(t)),
          t in e
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
      function s(e) {
        return c(e) || l(e) || u(e) || f();
      }
      function c(e) {
        if (Array.isArray(e)) return d(e);
      }
      function l(e) {
        if (
          (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
          e[`@@iterator`] != null
        )
          return Array.from(e);
      }
      function u(e, t) {
        if (e) {
          if (typeof e == `string`) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === `Object` && e.constructor && (n = e.constructor.name),
            n === `Map` || n === `Set`)
          )
            return Array.from(e);
          if (
            n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return d(e, t);
        }
      }
      function d(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f() {
        throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function p(e, t) {
        if (typeof e != `object` || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (n !== void 0) {
          var r = n.call(e, t || `default`);
          if (typeof r != `object`) return r;
          throw TypeError(`@@toPrimitive must return a primitive value.`);
        }
        return (t === `string` ? String : Number)(e);
      }
      function m(e) {
        var t = p(e, `string`);
        return typeof t == `symbol` ? t : String(t);
      }
      var h = typeof window < `u` && window.document !== void 0,
        g = h ? window : {},
        _ =
          h && g.document.documentElement
            ? `ontouchstart` in g.document.documentElement
            : !1,
        v = h ? `PointerEvent` in g : !1,
        y = `cropper`,
        b = `all`,
        x = `crop`,
        S = `move`,
        C = `zoom`,
        w = `e`,
        T = `w`,
        E = `s`,
        D = `n`,
        O = `ne`,
        k = `nw`,
        A = `se`,
        j = `sw`,
        M = `${y}-crop`,
        N = `${y}-disabled`,
        P = `${y}-hidden`,
        F = `${y}-hide`,
        ee = `${y}-invisible`,
        I = `${y}-modal`,
        te = `${y}-move`,
        L = `${y}Action`,
        R = `${y}Preview`,
        ne = `crop`,
        re = `move`,
        ie = `none`,
        ae = `crop`,
        oe = `cropend`,
        se = `cropmove`,
        ce = `cropstart`,
        le = `dblclick`,
        ue = _ ? `touchstart` : `mousedown`,
        de = _ ? `touchmove` : `mousemove`,
        fe = _ ? `touchend touchcancel` : `mouseup`,
        pe = v ? `pointerdown` : ue,
        me = v ? `pointermove` : de,
        he = v ? `pointerup pointercancel` : fe,
        ge = `ready`,
        _e = `resize`,
        ve = `wheel`,
        ye = `zoom`,
        be = `image/jpeg`,
        xe = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
        Se = /^data:/,
        Ce = /^data:image\/jpeg;base64,/,
        we = /^img|canvas$/i,
        Te = 200,
        Ee = 100,
        De = {
          viewMode: 0,
          dragMode: ne,
          initialAspectRatio: NaN,
          aspectRatio: NaN,
          data: null,
          preview: ``,
          responsive: !0,
          restore: !0,
          checkCrossOrigin: !0,
          checkOrientation: !0,
          modal: !0,
          guides: !0,
          center: !0,
          highlight: !0,
          background: !0,
          autoCrop: !0,
          autoCropArea: 0.8,
          movable: !0,
          rotatable: !0,
          scalable: !0,
          zoomable: !0,
          zoomOnTouch: !0,
          zoomOnWheel: !0,
          wheelZoomRatio: 0.1,
          cropBoxMovable: !0,
          cropBoxResizable: !0,
          toggleDragModeOnDblclick: !0,
          minCanvasWidth: 0,
          minCanvasHeight: 0,
          minCropBoxWidth: 0,
          minCropBoxHeight: 0,
          minContainerWidth: Te,
          minContainerHeight: Ee,
          ready: null,
          cropstart: null,
          cropmove: null,
          cropend: null,
          crop: null,
          zoom: null,
        },
        Oe = `<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>`,
        ke = Number.isNaN || g.isNaN;
      function z(e) {
        return typeof e == `number` && !ke(e);
      }
      var Ae = function (e) {
        return e > 0 && e < 1 / 0;
      };
      function je(e) {
        return e === void 0;
      }
      function B(e) {
        return n(e) === `object` && e !== null;
      }
      var Me = Object.prototype.hasOwnProperty;
      function V(e) {
        if (!B(e)) return !1;
        try {
          var t = e.constructor,
            n = t.prototype;
          return t && n && Me.call(n, `isPrototypeOf`);
        } catch {
          return !1;
        }
      }
      function H(e) {
        return typeof e == `function`;
      }
      var Ne = Array.prototype.slice;
      function Pe(e) {
        return Array.from ? Array.from(e) : Ne.call(e);
      }
      function U(e, t) {
        return (
          e &&
            H(t) &&
            (Array.isArray(e) || z(e.length)
              ? Pe(e).forEach(function (n, r) {
                  t.call(e, n, r, e);
                })
              : B(e) &&
                Object.keys(e).forEach(function (n) {
                  t.call(e, e[n], n, e);
                })),
          e
        );
      }
      var W =
          Object.assign ||
          function (e) {
            var t = [...arguments].slice(1);
            return (
              B(e) &&
                t.length > 0 &&
                t.forEach(function (t) {
                  B(t) &&
                    Object.keys(t).forEach(function (n) {
                      e[n] = t[n];
                    });
                }),
              e
            );
          },
        Fe = /\.\d*(?:0|9){12}\d*$/;
      function G(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return Fe.test(e) ? Math.round(e * t) / t : e;
      }
      var Ie = /^width|height|left|top|marginLeft|marginTop$/;
      function K(e, t) {
        var n = e.style;
        U(t, function (e, t) {
          Ie.test(t) && z(e) && (e = `${e}px`), (n[t] = e);
        });
      }
      function Le(e, t) {
        return e.classList
          ? e.classList.contains(t)
          : e.className.indexOf(t) > -1;
      }
      function q(e, t) {
        if (t) {
          if (z(e.length)) {
            U(e, function (e) {
              q(e, t);
            });
            return;
          }
          if (e.classList) {
            e.classList.add(t);
            return;
          }
          var n = e.className.trim();
          n
            ? n.indexOf(t) < 0 && (e.className = `${n} ${t}`)
            : (e.className = t);
        }
      }
      function J(e, t) {
        if (t) {
          if (z(e.length)) {
            U(e, function (e) {
              J(e, t);
            });
            return;
          }
          if (e.classList) {
            e.classList.remove(t);
            return;
          }
          e.className.indexOf(t) >= 0 &&
            (e.className = e.className.replace(t, ``));
        }
      }
      function Y(e, t, n) {
        if (t) {
          if (z(e.length)) {
            U(e, function (e) {
              Y(e, t, n);
            });
            return;
          }
          n ? q(e, t) : J(e, t);
        }
      }
      var Re = /([a-z\d])([A-Z])/g;
      function ze(e) {
        return e.replace(Re, `$1-$2`).toLowerCase();
      }
      function Be(e, t) {
        return B(e[t])
          ? e[t]
          : e.dataset
            ? e.dataset[t]
            : e.getAttribute(`data-${ze(t)}`);
      }
      function Ve(e, t, n) {
        B(n)
          ? (e[t] = n)
          : e.dataset
            ? (e.dataset[t] = n)
            : e.setAttribute(`data-${ze(t)}`, n);
      }
      function He(e, t) {
        if (B(e[t]))
          try {
            delete e[t];
          } catch {
            e[t] = void 0;
          }
        else if (e.dataset)
          try {
            delete e.dataset[t];
          } catch {
            e.dataset[t] = void 0;
          }
        else e.removeAttribute(`data-${ze(t)}`);
      }
      var Ue = /\s\s*/,
        We = (function () {
          var e = !1;
          if (h) {
            var t = !1,
              n = function () {},
              r = Object.defineProperty({}, "once", {
                get: function () {
                  return (e = !0), t;
                },
                set: function (e) {
                  t = e;
                },
              });
            g.addEventListener(`test`, n, r),
              g.removeEventListener(`test`, n, r);
          }
          return e;
        })();
      function X(e, t, n) {
        var r =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
          i = n;
        t.trim()
          .split(Ue)
          .forEach(function (t) {
            if (!We) {
              var a = e.listeners;
              a &&
                a[t] &&
                a[t][n] &&
                ((i = a[t][n]),
                delete a[t][n],
                Object.keys(a[t]).length === 0 && delete a[t],
                Object.keys(a).length === 0 && delete e.listeners);
            }
            e.removeEventListener(t, i, r);
          });
      }
      function Z(e, t, n) {
        var r =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
          i = n;
        t.trim()
          .split(Ue)
          .forEach(function (t) {
            if (r.once && !We) {
              var a = e.listeners,
                o = a === void 0 ? {} : a;
              (i = function () {
                delete o[t][n], e.removeEventListener(t, i, r);
                var a = [...arguments];
                n.apply(e, a);
              }),
                o[t] || (o[t] = {}),
                o[t][n] && e.removeEventListener(t, o[t][n], r),
                (o[t][n] = i),
                (e.listeners = o);
            }
            e.addEventListener(t, i, r);
          });
      }
      function Q(e, t, n) {
        var r;
        return (
          H(Event) && H(CustomEvent)
            ? (r = new CustomEvent(t, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              }))
            : ((r = document.createEvent(`CustomEvent`)),
              r.initCustomEvent(t, !0, !0, n)),
          e.dispatchEvent(r)
        );
      }
      function Ge(e) {
        var t = e.getBoundingClientRect();
        return {
          left:
            t.left + (window.pageXOffset - document.documentElement.clientLeft),
          top:
            t.top + (window.pageYOffset - document.documentElement.clientTop),
        };
      }
      var Ke = g.location,
        qe = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
      function Je(e) {
        var t = e.match(qe);
        return (
          t !== null &&
          (t[1] !== Ke.protocol || t[2] !== Ke.hostname || t[3] !== Ke.port)
        );
      }
      function Ye(e) {
        var t = `timestamp=${new Date().getTime()}`;
        return e + (e.indexOf(`?`) === -1 ? `?` : `&`) + t;
      }
      function Xe(e) {
        var t = e.rotate,
          n = e.scaleX,
          r = e.scaleY,
          i = e.translateX,
          a = e.translateY,
          o = [];
        z(i) && i !== 0 && o.push(`translateX(${i}px)`),
          z(a) && a !== 0 && o.push(`translateY(${a}px)`),
          z(t) && t !== 0 && o.push(`rotate(${t}deg)`),
          z(n) && n !== 1 && o.push(`scaleX(${n})`),
          z(r) && r !== 1 && o.push(`scaleY(${r})`);
        var s = o.length ? o.join(` `) : `none`;
        return { WebkitTransform: s, msTransform: s, transform: s };
      }
      function Ze(e) {
        var n = t({}, e),
          r = 0;
        return (
          U(e, function (e, t) {
            delete n[t],
              U(n, function (t) {
                var n = Math.abs(e.startX - t.startX),
                  i = Math.abs(e.startY - t.startY),
                  a = Math.abs(e.endX - t.endX),
                  o = Math.abs(e.endY - t.endY),
                  s = Math.sqrt(n * n + i * i),
                  c = (Math.sqrt(a * a + o * o) - s) / s;
                Math.abs(c) > Math.abs(r) && (r = c);
              });
          }),
          r
        );
      }
      function Qe(e, n) {
        var r = e.pageX,
          i = e.pageY,
          a = { endX: r, endY: i };
        return n ? a : t({ startX: r, startY: i }, a);
      }
      function $e(e) {
        var t = 0,
          n = 0,
          r = 0;
        return (
          U(e, function (e) {
            var i = e.startX,
              a = e.startY;
            (t += i), (n += a), (r += 1);
          }),
          (t /= r),
          (n /= r),
          { pageX: t, pageY: n }
        );
      }
      function $(e) {
        var t = e.aspectRatio,
          n = e.height,
          r = e.width,
          i =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : `contain`,
          a = Ae(r),
          o = Ae(n);
        if (a && o) {
          var s = n * t;
          (i === `contain` && s > r) || (i === `cover` && s < r)
            ? (n = r / t)
            : (r = n * t);
        } else a ? (n = r / t) : o && (r = n * t);
        return { width: r, height: n };
      }
      function et(e) {
        var t = e.width,
          n = e.height,
          r = e.degree;
        if (((r = Math.abs(r) % 180), r === 90)) return { width: n, height: t };
        var i = ((r % 90) * Math.PI) / 180,
          a = Math.sin(i),
          o = Math.cos(i),
          s = t * o + n * a,
          c = t * a + n * o;
        return r > 90 ? { width: c, height: s } : { width: s, height: c };
      }
      function tt(e, t, n, r) {
        var i = t.aspectRatio,
          a = t.naturalWidth,
          o = t.naturalHeight,
          c = t.rotate,
          l = c === void 0 ? 0 : c,
          u = t.scaleX,
          d = u === void 0 ? 1 : u,
          f = t.scaleY,
          p = f === void 0 ? 1 : f,
          m = n.aspectRatio,
          h = n.naturalWidth,
          g = n.naturalHeight,
          _ = r.fillColor,
          v = _ === void 0 ? `transparent` : _,
          y = r.imageSmoothingEnabled,
          b = y === void 0 || y,
          x = r.imageSmoothingQuality,
          S = x === void 0 ? `low` : x,
          C = r.maxWidth,
          w = C === void 0 ? 1 / 0 : C,
          T = r.maxHeight,
          E = T === void 0 ? 1 / 0 : T,
          D = r.minWidth,
          O = D === void 0 ? 0 : D,
          k = r.minHeight,
          A = k === void 0 ? 0 : k,
          j = document.createElement(`canvas`),
          M = j.getContext(`2d`),
          N = $({ aspectRatio: m, width: w, height: E }),
          P = $({ aspectRatio: m, width: O, height: A }, `cover`),
          F = Math.min(N.width, Math.max(P.width, h)),
          ee = Math.min(N.height, Math.max(P.height, g)),
          I = $({ aspectRatio: i, width: w, height: E }),
          te = $({ aspectRatio: i, width: O, height: A }, `cover`),
          L = Math.min(I.width, Math.max(te.width, a)),
          R = Math.min(I.height, Math.max(te.height, o)),
          ne = [-L / 2, -R / 2, L, R];
        return (
          (j.width = G(F)),
          (j.height = G(ee)),
          (M.fillStyle = v),
          M.fillRect(0, 0, F, ee),
          M.save(),
          M.translate(F / 2, ee / 2),
          M.rotate((l * Math.PI) / 180),
          M.scale(d, p),
          (M.imageSmoothingEnabled = b),
          (M.imageSmoothingQuality = S),
          M.drawImage.apply(
            M,
            [e].concat(
              s(
                ne.map(function (e) {
                  return Math.floor(G(e));
                }),
              ),
            ),
          ),
          M.restore(),
          j
        );
      }
      var nt = String.fromCharCode;
      function rt(e, t, n) {
        var r = ``;
        n += t;
        for (var i = t; i < n; i += 1) r += nt(e.getUint8(i));
        return r;
      }
      var it = /^data:.*,/;
      function at(e) {
        var t = e.replace(it, ``),
          n = atob(t),
          r = new ArrayBuffer(n.length),
          i = new Uint8Array(r);
        return (
          U(i, function (e, t) {
            i[t] = n.charCodeAt(t);
          }),
          r
        );
      }
      function ot(e, t) {
        for (var n = [], r = 8192, i = new Uint8Array(e); i.length > 0; )
          n.push(nt.apply(null, Pe(i.subarray(0, r)))), (i = i.subarray(r));
        return `data:${t};base64,${btoa(n.join(``))}`;
      }
      function st(e) {
        var t = new DataView(e),
          n;
        try {
          var r, i, a;
          if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var o = t.byteLength, s = 2; s + 1 < o; ) {
              if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
                i = s;
                break;
              }
              s += 1;
            }
          if (i) {
            var c = i + 4,
              l = i + 10;
            if (rt(t, c, 4) === `Exif`) {
              var u = t.getUint16(l);
              if (
                ((r = u === 18761),
                (r || u === 19789) && t.getUint16(l + 2, r) === 42)
              ) {
                var d = t.getUint32(l + 4, r);
                d >= 8 && (a = l + d);
              }
            }
          }
          if (a) {
            for (var f = t.getUint16(a, r), p, m = 0; m < f; m += 1)
              if (((p = a + m * 12 + 2), t.getUint16(p, r) === 274)) {
                (p += 8), (n = t.getUint16(p, r)), t.setUint16(p, 1, r);
                break;
              }
          }
        } catch {
          n = 1;
        }
        return n;
      }
      function ct(e) {
        var t = 0,
          n = 1,
          r = 1;
        switch (e) {
          case 2:
            n = -1;
            break;
          case 3:
            t = -180;
            break;
          case 4:
            r = -1;
            break;
          case 5:
            (t = 90), (r = -1);
            break;
          case 6:
            t = 90;
            break;
          case 7:
            (t = 90), (n = -1);
            break;
          case 8:
            t = -90;
        }
        return { rotate: t, scaleX: n, scaleY: r };
      }
      var lt = {
          render: function () {
            this.initContainer(),
              this.initCanvas(),
              this.initCropBox(),
              this.renderCanvas(),
              this.cropped && this.renderCropBox();
          },
          initContainer: function () {
            var e = this.element,
              t = this.options,
              n = this.container,
              r = this.cropper,
              i = Number(t.minContainerWidth),
              a = Number(t.minContainerHeight);
            q(r, P), J(e, P);
            var o = {
              width: Math.max(n.offsetWidth, i >= 0 ? i : Te),
              height: Math.max(n.offsetHeight, a >= 0 ? a : Ee),
            };
            (this.containerData = o),
              K(r, { width: o.width, height: o.height }),
              q(e, P),
              J(r, P);
          },
          initCanvas: function () {
            var e = this.containerData,
              t = this.imageData,
              n = this.options.viewMode,
              r = Math.abs(t.rotate) % 180 == 90,
              i = r ? t.naturalHeight : t.naturalWidth,
              a = r ? t.naturalWidth : t.naturalHeight,
              o = i / a,
              s = e.width,
              c = e.height;
            e.height * o > e.width
              ? n === 3
                ? (s = e.height * o)
                : (c = e.width / o)
              : n === 3
                ? (c = e.width / o)
                : (s = e.height * o);
            var l = {
              aspectRatio: o,
              naturalWidth: i,
              naturalHeight: a,
              width: s,
              height: c,
            };
            (this.canvasData = l),
              (this.limited = n === 1 || n === 2),
              this.limitCanvas(!0, !0),
              (l.width = Math.min(Math.max(l.width, l.minWidth), l.maxWidth)),
              (l.height = Math.min(
                Math.max(l.height, l.minHeight),
                l.maxHeight,
              )),
              (l.left = (e.width - l.width) / 2),
              (l.top = (e.height - l.height) / 2),
              (l.oldLeft = l.left),
              (l.oldTop = l.top),
              (this.initialCanvasData = W({}, l));
          },
          limitCanvas: function (e, t) {
            var n = this.options,
              r = this.containerData,
              i = this.canvasData,
              a = this.cropBoxData,
              o = n.viewMode,
              s = i.aspectRatio,
              c = this.cropped && a;
            if (e) {
              var l = Number(n.minCanvasWidth) || 0,
                u = Number(n.minCanvasHeight) || 0;
              o > 1
                ? ((l = Math.max(l, r.width)),
                  (u = Math.max(u, r.height)),
                  o === 3 && (u * s > l ? (l = u * s) : (u = l / s)))
                : o > 0 &&
                  (l
                    ? (l = Math.max(l, c ? a.width : 0))
                    : u
                      ? (u = Math.max(u, c ? a.height : 0))
                      : c &&
                        ((l = a.width),
                        (u = a.height),
                        u * s > l ? (l = u * s) : (u = l / s)));
              var d = $({ aspectRatio: s, width: l, height: u });
              (l = d.width),
                (u = d.height),
                (i.minWidth = l),
                (i.minHeight = u),
                (i.maxWidth = 1 / 0),
                (i.maxHeight = 1 / 0);
            }
            if (t) {
              if (o > +!c) {
                var f = r.width - i.width,
                  p = r.height - i.height;
                (i.minLeft = Math.min(0, f)),
                  (i.minTop = Math.min(0, p)),
                  (i.maxLeft = Math.max(0, f)),
                  (i.maxTop = Math.max(0, p)),
                  c &&
                    this.limited &&
                    ((i.minLeft = Math.min(
                      a.left,
                      a.left + (a.width - i.width),
                    )),
                    (i.minTop = Math.min(a.top, a.top + (a.height - i.height))),
                    (i.maxLeft = a.left),
                    (i.maxTop = a.top),
                    o === 2 &&
                      (i.width >= r.width &&
                        ((i.minLeft = Math.min(0, f)),
                        (i.maxLeft = Math.max(0, f))),
                      i.height >= r.height &&
                        ((i.minTop = Math.min(0, p)),
                        (i.maxTop = Math.max(0, p)))));
              } else
                (i.minLeft = -i.width),
                  (i.minTop = -i.height),
                  (i.maxLeft = r.width),
                  (i.maxTop = r.height);
            }
          },
          renderCanvas: function (e, t) {
            var n = this.canvasData,
              r = this.imageData;
            if (t) {
              var i = et({
                  width: r.naturalWidth * Math.abs(r.scaleX || 1),
                  height: r.naturalHeight * Math.abs(r.scaleY || 1),
                  degree: r.rotate || 0,
                }),
                a = i.width,
                o = i.height,
                s = n.width * (a / n.naturalWidth),
                c = n.height * (o / n.naturalHeight);
              (n.left -= (s - n.width) / 2),
                (n.top -= (c - n.height) / 2),
                (n.width = s),
                (n.height = c),
                (n.aspectRatio = a / o),
                (n.naturalWidth = a),
                (n.naturalHeight = o),
                this.limitCanvas(!0, !1);
            }
            (n.width > n.maxWidth || n.width < n.minWidth) &&
              (n.left = n.oldLeft),
              (n.height > n.maxHeight || n.height < n.minHeight) &&
                (n.top = n.oldTop),
              (n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth)),
              (n.height = Math.min(
                Math.max(n.height, n.minHeight),
                n.maxHeight,
              )),
              this.limitCanvas(!1, !0),
              (n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft)),
              (n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop)),
              (n.oldLeft = n.left),
              (n.oldTop = n.top),
              K(
                this.canvas,
                W(
                  { width: n.width, height: n.height },
                  Xe({ translateX: n.left, translateY: n.top }),
                ),
              ),
              this.renderImage(e),
              this.cropped && this.limited && this.limitCropBox(!0, !0);
          },
          renderImage: function (e) {
            var t = this.canvasData,
              n = this.imageData,
              r = n.naturalWidth * (t.width / t.naturalWidth),
              i = n.naturalHeight * (t.height / t.naturalHeight);
            W(n, {
              width: r,
              height: i,
              left: (t.width - r) / 2,
              top: (t.height - i) / 2,
            }),
              K(
                this.image,
                W(
                  { width: n.width, height: n.height },
                  Xe(W({ translateX: n.left, translateY: n.top }, n)),
                ),
              ),
              e && this.output();
          },
          initCropBox: function () {
            var e = this.options,
              t = this.canvasData,
              n = e.aspectRatio || e.initialAspectRatio,
              r = Number(e.autoCropArea) || 0.8,
              i = { width: t.width, height: t.height };
            n &&
              (t.height * n > t.width
                ? (i.height = i.width / n)
                : (i.width = i.height * n)),
              (this.cropBoxData = i),
              this.limitCropBox(!0, !0),
              (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
              (i.height = Math.min(
                Math.max(i.height, i.minHeight),
                i.maxHeight,
              )),
              (i.width = Math.max(i.minWidth, i.width * r)),
              (i.height = Math.max(i.minHeight, i.height * r)),
              (i.left = t.left + (t.width - i.width) / 2),
              (i.top = t.top + (t.height - i.height) / 2),
              (i.oldLeft = i.left),
              (i.oldTop = i.top),
              (this.initialCropBoxData = W({}, i));
          },
          limitCropBox: function (e, t) {
            var n = this.options,
              r = this.containerData,
              i = this.canvasData,
              a = this.cropBoxData,
              o = this.limited,
              s = n.aspectRatio;
            if (e) {
              var c = Number(n.minCropBoxWidth) || 0,
                l = Number(n.minCropBoxHeight) || 0,
                u = o
                  ? Math.min(
                      r.width,
                      i.width,
                      i.width + i.left,
                      r.width - i.left,
                    )
                  : r.width,
                d = o
                  ? Math.min(
                      r.height,
                      i.height,
                      i.height + i.top,
                      r.height - i.top,
                    )
                  : r.height;
              (c = Math.min(c, r.width)),
                (l = Math.min(l, r.height)),
                s &&
                  (c && l
                    ? l * s > c
                      ? (l = c / s)
                      : (c = l * s)
                    : c
                      ? (l = c / s)
                      : l && (c = l * s),
                  d * s > u ? (d = u / s) : (u = d * s)),
                (a.minWidth = Math.min(c, u)),
                (a.minHeight = Math.min(l, d)),
                (a.maxWidth = u),
                (a.maxHeight = d);
            }
            t &&
              (o
                ? ((a.minLeft = Math.max(0, i.left)),
                  (a.minTop = Math.max(0, i.top)),
                  (a.maxLeft = Math.min(r.width, i.left + i.width) - a.width),
                  (a.maxTop = Math.min(r.height, i.top + i.height) - a.height))
                : ((a.minLeft = 0),
                  (a.minTop = 0),
                  (a.maxLeft = r.width - a.width),
                  (a.maxTop = r.height - a.height)));
          },
          renderCropBox: function () {
            var e = this.options,
              t = this.containerData,
              n = this.cropBoxData;
            (n.width > n.maxWidth || n.width < n.minWidth) &&
              (n.left = n.oldLeft),
              (n.height > n.maxHeight || n.height < n.minHeight) &&
                (n.top = n.oldTop),
              (n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth)),
              (n.height = Math.min(
                Math.max(n.height, n.minHeight),
                n.maxHeight,
              )),
              this.limitCropBox(!1, !0),
              (n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft)),
              (n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop)),
              (n.oldLeft = n.left),
              (n.oldTop = n.top),
              e.movable &&
                e.cropBoxMovable &&
                Ve(
                  this.face,
                  L,
                  n.width >= t.width && n.height >= t.height ? S : b,
                ),
              K(
                this.cropBox,
                W(
                  { width: n.width, height: n.height },
                  Xe({ translateX: n.left, translateY: n.top }),
                ),
              ),
              this.cropped && this.limited && this.limitCanvas(!0, !0),
              this.disabled || this.output();
          },
          output: function () {
            this.preview(), Q(this.element, ae, this.getData());
          },
        },
        ut = {
          initPreview: function () {
            var e = this.element,
              t = this.crossOrigin,
              n = this.options.preview,
              r = t ? this.crossOriginUrl : this.url,
              i = e.alt || `The image to preview`,
              a = document.createElement(`img`);
            if (
              (t && (a.crossOrigin = t),
              (a.src = r),
              (a.alt = i),
              this.viewBox.appendChild(a),
              (this.viewBoxImage = a),
              n)
            ) {
              var o = n;
              typeof n == `string`
                ? (o = e.ownerDocument.querySelectorAll(n))
                : n.querySelector && (o = [n]),
                (this.previews = o),
                U(o, function (e) {
                  var n = document.createElement(`img`);
                  Ve(e, R, {
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                    html: e.innerHTML,
                  }),
                    t && (n.crossOrigin = t),
                    (n.src = r),
                    (n.alt = i),
                    (n.style.cssText = `display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"`),
                    (e.innerHTML = ``),
                    e.appendChild(n);
                });
            }
          },
          resetPreview: function () {
            U(this.previews, function (e) {
              var t = Be(e, R);
              K(e, { width: t.width, height: t.height }),
                (e.innerHTML = t.html),
                He(e, R);
            });
          },
          preview: function () {
            var e = this.imageData,
              t = this.canvasData,
              n = this.cropBoxData,
              r = n.width,
              i = n.height,
              a = e.width,
              o = e.height,
              s = n.left - t.left - e.left,
              c = n.top - t.top - e.top;
            this.cropped &&
              !this.disabled &&
              (K(
                this.viewBoxImage,
                W(
                  { width: a, height: o },
                  Xe(W({ translateX: -s, translateY: -c }, e)),
                ),
              ),
              U(this.previews, function (t) {
                var n = Be(t, R),
                  l = n.width,
                  u = n.height,
                  d = l,
                  f = u,
                  p = 1;
                r && ((p = l / r), (f = i * p)),
                  i && f > u && ((p = u / i), (d = r * p), (f = u)),
                  K(t, { width: d, height: f }),
                  K(
                    t.getElementsByTagName(`img`)[0],
                    W(
                      { width: a * p, height: o * p },
                      Xe(W({ translateX: -s * p, translateY: -c * p }, e)),
                    ),
                  );
              }));
          },
        },
        dt = {
          bind: function () {
            var e = this.element,
              t = this.options,
              n = this.cropper;
            H(t.cropstart) && Z(e, ce, t.cropstart),
              H(t.cropmove) && Z(e, se, t.cropmove),
              H(t.cropend) && Z(e, oe, t.cropend),
              H(t.crop) && Z(e, ae, t.crop),
              H(t.zoom) && Z(e, ye, t.zoom),
              Z(n, pe, (this.onCropStart = this.cropStart.bind(this))),
              t.zoomable &&
                t.zoomOnWheel &&
                Z(n, ve, (this.onWheel = this.wheel.bind(this)), {
                  passive: !1,
                  capture: !0,
                }),
              t.toggleDragModeOnDblclick &&
                Z(n, le, (this.onDblclick = this.dblclick.bind(this))),
              Z(
                e.ownerDocument,
                me,
                (this.onCropMove = this.cropMove.bind(this)),
              ),
              Z(
                e.ownerDocument,
                he,
                (this.onCropEnd = this.cropEnd.bind(this)),
              ),
              t.responsive &&
                Z(window, _e, (this.onResize = this.resize.bind(this)));
          },
          unbind: function () {
            var e = this.element,
              t = this.options,
              n = this.cropper;
            H(t.cropstart) && X(e, ce, t.cropstart),
              H(t.cropmove) && X(e, se, t.cropmove),
              H(t.cropend) && X(e, oe, t.cropend),
              H(t.crop) && X(e, ae, t.crop),
              H(t.zoom) && X(e, ye, t.zoom),
              X(n, pe, this.onCropStart),
              t.zoomable &&
                t.zoomOnWheel &&
                X(n, ve, this.onWheel, { passive: !1, capture: !0 }),
              t.toggleDragModeOnDblclick && X(n, le, this.onDblclick),
              X(e.ownerDocument, me, this.onCropMove),
              X(e.ownerDocument, he, this.onCropEnd),
              t.responsive && X(window, _e, this.onResize);
          },
        },
        ft = {
          resize: function () {
            if (!this.disabled) {
              var e = this.options,
                t = this.container,
                n = this.containerData,
                r = t.offsetWidth / n.width,
                i = t.offsetHeight / n.height,
                a = Math.abs(r - 1) > Math.abs(i - 1) ? r : i;
              if (a !== 1) {
                var o, s;
                e.restore &&
                  ((o = this.getCanvasData()), (s = this.getCropBoxData())),
                  this.render(),
                  e.restore &&
                    (this.setCanvasData(
                      U(o, function (e, t) {
                        o[t] = e * a;
                      }),
                    ),
                    this.setCropBoxData(
                      U(s, function (e, t) {
                        s[t] = e * a;
                      }),
                    ));
              }
            }
          },
          dblclick: function () {
            this.disabled ||
              this.options.dragMode === ie ||
              this.setDragMode(Le(this.dragBox, M) ? re : ne);
          },
          wheel: function (e) {
            var t = this,
              n = Number(this.options.wheelZoomRatio) || 0.1,
              r = 1;
            this.disabled ||
              (e.preventDefault(),
              !this.wheeling &&
                ((this.wheeling = !0),
                setTimeout(function () {
                  t.wheeling = !1;
                }, 50),
                e.deltaY
                  ? (r = e.deltaY > 0 ? 1 : -1)
                  : e.wheelDelta
                    ? (r = -e.wheelDelta / 120)
                    : e.detail && (r = e.detail > 0 ? 1 : -1),
                this.zoom(-r * n, e)));
          },
          cropStart: function (e) {
            var t = e.buttons,
              n = e.button;
            if (
              !(
                this.disabled ||
                ((e.type === `mousedown` ||
                  (e.type === `pointerdown` && e.pointerType === `mouse`)) &&
                  ((z(t) && t !== 1) || (z(n) && n !== 0) || e.ctrlKey))
              )
            ) {
              var r = this.options,
                i = this.pointers,
                a;
              e.changedTouches
                ? U(e.changedTouches, function (e) {
                    i[e.identifier] = Qe(e);
                  })
                : (i[e.pointerId || 0] = Qe(e)),
                (a =
                  Object.keys(i).length > 1 && r.zoomable && r.zoomOnTouch
                    ? C
                    : Be(e.target, L)),
                xe.test(a) &&
                  Q(this.element, ce, { originalEvent: e, action: a }) !== !1 &&
                  (e.preventDefault(),
                  (this.action = a),
                  (this.cropping = !1),
                  a === x && ((this.cropping = !0), q(this.dragBox, I)));
            }
          },
          cropMove: function (e) {
            var t = this.action;
            if (!this.disabled && t) {
              var n = this.pointers;
              e.preventDefault(),
                Q(this.element, se, { originalEvent: e, action: t }) !== !1 &&
                  (e.changedTouches
                    ? U(e.changedTouches, function (e) {
                        W(n[e.identifier] || {}, Qe(e, !0));
                      })
                    : W(n[e.pointerId || 0] || {}, Qe(e, !0)),
                  this.change(e));
            }
          },
          cropEnd: function (e) {
            if (!this.disabled) {
              var t = this.action,
                n = this.pointers;
              e.changedTouches
                ? U(e.changedTouches, function (e) {
                    delete n[e.identifier];
                  })
                : delete n[e.pointerId || 0],
                t &&
                  (e.preventDefault(),
                  Object.keys(n).length || (this.action = ``),
                  this.cropping &&
                    ((this.cropping = !1),
                    Y(this.dragBox, I, this.cropped && this.options.modal)),
                  Q(this.element, oe, { originalEvent: e, action: t }));
            }
          },
        },
        pt = {
          change: function (e) {
            var t = this.options,
              n = this.canvasData,
              r = this.containerData,
              i = this.cropBoxData,
              a = this.pointers,
              o = this.action,
              s = t.aspectRatio,
              c = i.left,
              l = i.top,
              u = i.width,
              d = i.height,
              f = c + u,
              p = l + d,
              m = 0,
              h = 0,
              g = r.width,
              _ = r.height,
              v = !0,
              y;
            !s && e.shiftKey && (s = u && d ? u / d : 1),
              this.limited &&
                ((m = i.minLeft),
                (h = i.minTop),
                (g = m + Math.min(r.width, n.width, n.left + n.width)),
                (_ = h + Math.min(r.height, n.height, n.top + n.height)));
            var M = a[Object.keys(a)[0]],
              N = { x: M.endX - M.startX, y: M.endY - M.startY },
              F = function (e) {
                switch (e) {
                  case w:
                    f + N.x > g && (N.x = g - f);
                    break;
                  case T:
                    c + N.x < m && (N.x = m - c);
                    break;
                  case D:
                    l + N.y < h && (N.y = h - l);
                    break;
                  case E:
                    p + N.y > _ && (N.y = _ - p);
                }
              };
            switch (o) {
              case b:
                (c += N.x), (l += N.y);
                break;
              case w:
                if (N.x >= 0 && (f >= g || (s && (l <= h || p >= _)))) {
                  v = !1;
                  break;
                }
                F(w),
                  (u += N.x),
                  u < 0 && ((o = T), (u = -u), (c -= u)),
                  s && ((d = u / s), (l += (i.height - d) / 2));
                break;
              case D:
                if (N.y <= 0 && (l <= h || (s && (c <= m || f >= g)))) {
                  v = !1;
                  break;
                }
                F(D),
                  (d -= N.y),
                  (l += N.y),
                  d < 0 && ((o = E), (d = -d), (l -= d)),
                  s && ((u = d * s), (c += (i.width - u) / 2));
                break;
              case T:
                if (N.x <= 0 && (c <= m || (s && (l <= h || p >= _)))) {
                  v = !1;
                  break;
                }
                F(T),
                  (u -= N.x),
                  (c += N.x),
                  u < 0 && ((o = w), (u = -u), (c -= u)),
                  s && ((d = u / s), (l += (i.height - d) / 2));
                break;
              case E:
                if (N.y >= 0 && (p >= _ || (s && (c <= m || f >= g)))) {
                  v = !1;
                  break;
                }
                F(E),
                  (d += N.y),
                  d < 0 && ((o = D), (d = -d), (l -= d)),
                  s && ((u = d * s), (c += (i.width - u) / 2));
                break;
              case O:
                if (s) {
                  if (N.y <= 0 && (l <= h || f >= g)) {
                    v = !1;
                    break;
                  }
                  F(D), (d -= N.y), (l += N.y), (u = d * s);
                } else
                  F(D),
                    F(w),
                    N.x >= 0
                      ? f < g
                        ? (u += N.x)
                        : N.y <= 0 && l <= h && (v = !1)
                      : (u += N.x),
                    N.y <= 0
                      ? l > h && ((d -= N.y), (l += N.y))
                      : ((d -= N.y), (l += N.y));
                u < 0 && d < 0
                  ? ((o = j), (d = -d), (u = -u), (l -= d), (c -= u))
                  : u < 0
                    ? ((o = k), (u = -u), (c -= u))
                    : d < 0 && ((o = A), (d = -d), (l -= d));
                break;
              case k:
                if (s) {
                  if (N.y <= 0 && (l <= h || c <= m)) {
                    v = !1;
                    break;
                  }
                  F(D), (d -= N.y), (l += N.y), (u = d * s), (c += i.width - u);
                } else
                  F(D),
                    F(T),
                    N.x <= 0
                      ? c > m
                        ? ((u -= N.x), (c += N.x))
                        : N.y <= 0 && l <= h && (v = !1)
                      : ((u -= N.x), (c += N.x)),
                    N.y <= 0
                      ? l > h && ((d -= N.y), (l += N.y))
                      : ((d -= N.y), (l += N.y));
                u < 0 && d < 0
                  ? ((o = A), (d = -d), (u = -u), (l -= d), (c -= u))
                  : u < 0
                    ? ((o = O), (u = -u), (c -= u))
                    : d < 0 && ((o = j), (d = -d), (l -= d));
                break;
              case j:
                if (s) {
                  if (N.x <= 0 && (c <= m || p >= _)) {
                    v = !1;
                    break;
                  }
                  F(T), (u -= N.x), (c += N.x), (d = u / s);
                } else
                  F(E),
                    F(T),
                    N.x <= 0
                      ? c > m
                        ? ((u -= N.x), (c += N.x))
                        : N.y >= 0 && p >= _ && (v = !1)
                      : ((u -= N.x), (c += N.x)),
                    N.y >= 0 ? p < _ && (d += N.y) : (d += N.y);
                u < 0 && d < 0
                  ? ((o = O), (d = -d), (u = -u), (l -= d), (c -= u))
                  : u < 0
                    ? ((o = A), (u = -u), (c -= u))
                    : d < 0 && ((o = k), (d = -d), (l -= d));
                break;
              case A:
                if (s) {
                  if (N.x >= 0 && (f >= g || p >= _)) {
                    v = !1;
                    break;
                  }
                  F(w), (u += N.x), (d = u / s);
                } else
                  F(E),
                    F(w),
                    N.x >= 0
                      ? f < g
                        ? (u += N.x)
                        : N.y >= 0 && p >= _ && (v = !1)
                      : (u += N.x),
                    N.y >= 0 ? p < _ && (d += N.y) : (d += N.y);
                u < 0 && d < 0
                  ? ((o = k), (d = -d), (u = -u), (l -= d), (c -= u))
                  : u < 0
                    ? ((o = j), (u = -u), (c -= u))
                    : d < 0 && ((o = O), (d = -d), (l -= d));
                break;
              case S:
                this.move(N.x, N.y), (v = !1);
                break;
              case C:
                this.zoom(Ze(a), e), (v = !1);
                break;
              case x:
                if (!N.x || !N.y) {
                  v = !1;
                  break;
                }
                (y = Ge(this.cropper)),
                  (c = M.startX - y.left),
                  (l = M.startY - y.top),
                  (u = i.minWidth),
                  (d = i.minHeight),
                  N.x > 0
                    ? (o = N.y > 0 ? A : O)
                    : N.x < 0 && ((c -= u), (o = N.y > 0 ? j : k)),
                  N.y < 0 && (l -= d),
                  this.cropped ||
                    (J(this.cropBox, P),
                    (this.cropped = !0),
                    this.limited && this.limitCropBox(!0, !0));
            }
            v &&
              ((i.width = u),
              (i.height = d),
              (i.left = c),
              (i.top = l),
              (this.action = o),
              this.renderCropBox()),
              U(a, function (e) {
                (e.startX = e.endX), (e.startY = e.endY);
              });
          },
        },
        mt = {
          crop: function () {
            return (
              this.ready &&
                !this.cropped &&
                !this.disabled &&
                ((this.cropped = !0),
                this.limitCropBox(!0, !0),
                this.options.modal && q(this.dragBox, I),
                J(this.cropBox, P),
                this.setCropBoxData(this.initialCropBoxData)),
              this
            );
          },
          reset: function () {
            return (
              this.ready &&
                !this.disabled &&
                ((this.imageData = W({}, this.initialImageData)),
                (this.canvasData = W({}, this.initialCanvasData)),
                (this.cropBoxData = W({}, this.initialCropBoxData)),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()),
              this
            );
          },
          clear: function () {
            return (
              this.cropped &&
                !this.disabled &&
                (W(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
                (this.cropped = !1),
                this.renderCropBox(),
                this.limitCanvas(!0, !0),
                this.renderCanvas(),
                J(this.dragBox, I),
                q(this.cropBox, P)),
              this
            );
          },
          replace: function (e) {
            var t =
              arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            return (
              !this.disabled &&
                e &&
                (this.isImg && (this.element.src = e),
                t
                  ? ((this.url = e),
                    (this.image.src = e),
                    this.ready &&
                      ((this.viewBoxImage.src = e),
                      U(this.previews, function (t) {
                        t.getElementsByTagName(`img`)[0].src = e;
                      })))
                  : (this.isImg && (this.replaced = !0),
                    (this.options.data = null),
                    this.uncreate(),
                    this.load(e))),
              this
            );
          },
          enable: function () {
            return (
              this.ready &&
                this.disabled &&
                ((this.disabled = !1), J(this.cropper, N)),
              this
            );
          },
          disable: function () {
            return (
              this.ready &&
                !this.disabled &&
                ((this.disabled = !0), q(this.cropper, N)),
              this
            );
          },
          destroy: function () {
            var e = this.element;
            return e[y]
              ? ((e[y] = void 0),
                this.isImg && this.replaced && (e.src = this.originalUrl),
                this.uncreate(),
                this)
              : this;
          },
          move: function (e) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : e,
              n = this.canvasData,
              r = n.left,
              i = n.top;
            return this.moveTo(
              je(e) ? e : r + Number(e),
              je(t) ? t : i + Number(t),
            );
          },
          moveTo: function (e) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : e,
              n = this.canvasData,
              r = !1;
            return (
              (e = Number(e)),
              (t = Number(t)),
              this.ready &&
                !this.disabled &&
                this.options.movable &&
                (z(e) && ((n.left = e), (r = !0)),
                z(t) && ((n.top = t), (r = !0)),
                r && this.renderCanvas(!0)),
              this
            );
          },
          zoom: function (e, t) {
            var n = this.canvasData;
            return (
              (e = Number(e)),
              (e = e < 0 ? 1 / (1 - e) : 1 + e),
              this.zoomTo((n.width * e) / n.naturalWidth, null, t)
            );
          },
          zoomTo: function (e, t, n) {
            var r = this.options,
              i = this.canvasData,
              a = i.width,
              o = i.height,
              s = i.naturalWidth,
              c = i.naturalHeight;
            if (
              ((e = Number(e)),
              e >= 0 && this.ready && !this.disabled && r.zoomable)
            ) {
              var l = s * e,
                u = c * e;
              if (
                Q(this.element, ye, {
                  ratio: e,
                  oldRatio: a / s,
                  originalEvent: n,
                }) === !1
              )
                return this;
              if (n) {
                var d = this.pointers,
                  f = Ge(this.cropper),
                  p =
                    d && Object.keys(d).length
                      ? $e(d)
                      : { pageX: n.pageX, pageY: n.pageY };
                (i.left -= (l - a) * ((p.pageX - f.left - i.left) / a)),
                  (i.top -= (u - o) * ((p.pageY - f.top - i.top) / o));
              } else
                V(t) && z(t.x) && z(t.y)
                  ? ((i.left -= (l - a) * ((t.x - i.left) / a)),
                    (i.top -= (u - o) * ((t.y - i.top) / o)))
                  : ((i.left -= (l - a) / 2), (i.top -= (u - o) / 2));
              (i.width = l), (i.height = u), this.renderCanvas(!0);
            }
            return this;
          },
          rotate: function (e) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(e));
          },
          rotateTo: function (e) {
            return (
              (e = Number(e)),
              z(e) &&
                this.ready &&
                !this.disabled &&
                this.options.rotatable &&
                ((this.imageData.rotate = e % 360), this.renderCanvas(!0, !0)),
              this
            );
          },
          scaleX: function (e) {
            var t = this.imageData.scaleY;
            return this.scale(e, z(t) ? t : 1);
          },
          scaleY: function (e) {
            var t = this.imageData.scaleX;
            return this.scale(z(t) ? t : 1, e);
          },
          scale: function (e) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : e,
              n = this.imageData,
              r = !1;
            return (
              (e = Number(e)),
              (t = Number(t)),
              this.ready &&
                !this.disabled &&
                this.options.scalable &&
                (z(e) && ((n.scaleX = e), (r = !0)),
                z(t) && ((n.scaleY = t), (r = !0)),
                r && this.renderCanvas(!0, !0)),
              this
            );
          },
          getData: function () {
            var e =
                arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
              t = this.options,
              n = this.imageData,
              r = this.canvasData,
              i = this.cropBoxData,
              a;
            if (this.ready && this.cropped) {
              a = {
                x: i.left - r.left,
                y: i.top - r.top,
                width: i.width,
                height: i.height,
              };
              var o = n.width / n.naturalWidth;
              if (
                (U(a, function (e, t) {
                  a[t] = e / o;
                }),
                e)
              ) {
                var s = Math.round(a.y + a.height),
                  c = Math.round(a.x + a.width);
                (a.x = Math.round(a.x)),
                  (a.y = Math.round(a.y)),
                  (a.width = c - a.x),
                  (a.height = s - a.y);
              }
            } else a = { x: 0, y: 0, width: 0, height: 0 };
            return (
              t.rotatable && (a.rotate = n.rotate || 0),
              t.scalable &&
                ((a.scaleX = n.scaleX || 1), (a.scaleY = n.scaleY || 1)),
              a
            );
          },
          setData: function (e) {
            var t = this.options,
              n = this.imageData,
              r = this.canvasData,
              i = {};
            if (this.ready && !this.disabled && V(e)) {
              var a = !1;
              t.rotatable &&
                z(e.rotate) &&
                e.rotate !== n.rotate &&
                ((n.rotate = e.rotate), (a = !0)),
                t.scalable &&
                  (z(e.scaleX) &&
                    e.scaleX !== n.scaleX &&
                    ((n.scaleX = e.scaleX), (a = !0)),
                  z(e.scaleY) &&
                    e.scaleY !== n.scaleY &&
                    ((n.scaleY = e.scaleY), (a = !0))),
                a && this.renderCanvas(!0, !0);
              var o = n.width / n.naturalWidth;
              z(e.x) && (i.left = e.x * o + r.left),
                z(e.y) && (i.top = e.y * o + r.top),
                z(e.width) && (i.width = e.width * o),
                z(e.height) && (i.height = e.height * o),
                this.setCropBoxData(i);
            }
            return this;
          },
          getContainerData: function () {
            return this.ready ? W({}, this.containerData) : {};
          },
          getImageData: function () {
            return this.sized ? W({}, this.imageData) : {};
          },
          getCanvasData: function () {
            var e = this.canvasData,
              t = {};
            return (
              this.ready &&
                U(
                  [
                    `left`,
                    `top`,
                    `width`,
                    `height`,
                    `naturalWidth`,
                    `naturalHeight`,
                  ],
                  function (n) {
                    t[n] = e[n];
                  },
                ),
              t
            );
          },
          setCanvasData: function (e) {
            var t = this.canvasData,
              n = t.aspectRatio;
            return (
              this.ready &&
                !this.disabled &&
                V(e) &&
                (z(e.left) && (t.left = e.left),
                z(e.top) && (t.top = e.top),
                z(e.width)
                  ? ((t.width = e.width), (t.height = e.width / n))
                  : z(e.height) &&
                    ((t.height = e.height), (t.width = e.height * n)),
                this.renderCanvas(!0)),
              this
            );
          },
          getCropBoxData: function () {
            var e = this.cropBoxData,
              t;
            return (
              this.ready &&
                this.cropped &&
                (t = {
                  left: e.left,
                  top: e.top,
                  width: e.width,
                  height: e.height,
                }),
              t || {}
            );
          },
          setCropBoxData: function (e) {
            var t = this.cropBoxData,
              n = this.options.aspectRatio,
              r,
              i;
            return (
              this.ready &&
                this.cropped &&
                !this.disabled &&
                V(e) &&
                (z(e.left) && (t.left = e.left),
                z(e.top) && (t.top = e.top),
                z(e.width) &&
                  e.width !== t.width &&
                  ((r = !0), (t.width = e.width)),
                z(e.height) &&
                  e.height !== t.height &&
                  ((i = !0), (t.height = e.height)),
                n &&
                  (r
                    ? (t.height = t.width / n)
                    : i && (t.width = t.height * n)),
                this.renderCropBox()),
              this
            );
          },
          getCroppedCanvas: function () {
            var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            if (!this.ready || !window.HTMLCanvasElement) return null;
            var t = this.canvasData,
              n = tt(this.image, this.imageData, t, e);
            if (!this.cropped) return n;
            var r = this.getData(e.rounded),
              i = r.x,
              a = r.y,
              o = r.width,
              c = r.height,
              l = n.width / Math.floor(t.naturalWidth);
            l !== 1 && ((i *= l), (a *= l), (o *= l), (c *= l));
            var u = o / c,
              d = $({
                aspectRatio: u,
                width: e.maxWidth || 1 / 0,
                height: e.maxHeight || 1 / 0,
              }),
              f = $(
                {
                  aspectRatio: u,
                  width: e.minWidth || 0,
                  height: e.minHeight || 0,
                },
                `cover`,
              ),
              p = $({
                aspectRatio: u,
                width: e.width || (l === 1 ? o : n.width),
                height: e.height || (l === 1 ? c : n.height),
              }),
              m = p.width,
              h = p.height;
            (m = Math.min(d.width, Math.max(f.width, m))),
              (h = Math.min(d.height, Math.max(f.height, h)));
            var g = document.createElement(`canvas`),
              _ = g.getContext(`2d`);
            (g.width = G(m)),
              (g.height = G(h)),
              (_.fillStyle = e.fillColor || `transparent`),
              _.fillRect(0, 0, m, h);
            var v = e.imageSmoothingEnabled,
              y = v === void 0 || v,
              b = e.imageSmoothingQuality;
            (_.imageSmoothingEnabled = y), b && (_.imageSmoothingQuality = b);
            var x = n.width,
              S = n.height,
              C = i,
              w = a,
              T,
              E,
              D,
              O,
              k,
              A;
            C <= -o || C > x
              ? ((C = 0), (T = 0), (D = 0), (k = 0))
              : C <= 0
                ? ((D = -C), (C = 0), (T = Math.min(x, o + C)), (k = T))
                : C <= x && ((D = 0), (T = Math.min(o, x - C)), (k = T)),
              T <= 0 || w <= -c || w > S
                ? ((w = 0), (E = 0), (O = 0), (A = 0))
                : w <= 0
                  ? ((O = -w), (w = 0), (E = Math.min(S, c + w)), (A = E))
                  : w <= S && ((O = 0), (E = Math.min(c, S - w)), (A = E));
            var j = [C, w, T, E];
            if (k > 0 && A > 0) {
              var M = m / o;
              j.push(D * M, O * M, k * M, A * M);
            }
            return (
              _.drawImage.apply(
                _,
                [n].concat(
                  s(
                    j.map(function (e) {
                      return Math.floor(G(e));
                    }),
                  ),
                ),
              ),
              g
            );
          },
          setAspectRatio: function (e) {
            var t = this.options;
            return (
              !this.disabled &&
                !je(e) &&
                ((t.aspectRatio = Math.max(0, e) || NaN),
                this.ready &&
                  (this.initCropBox(), this.cropped && this.renderCropBox())),
              this
            );
          },
          setDragMode: function (e) {
            var t = this.options,
              n = this.dragBox,
              r = this.face;
            if (this.ready && !this.disabled) {
              var i = e === ne,
                a = t.movable && e === re;
              (e = i || a ? e : ie),
                (t.dragMode = e),
                Ve(n, L, e),
                Y(n, M, i),
                Y(n, te, a),
                t.cropBoxMovable || (Ve(r, L, e), Y(r, M, i), Y(r, te, a));
            }
            return this;
          },
        },
        ht = g.Cropper,
        gt = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if ((r(this, e), !t || !we.test(t.tagName)))
              throw Error(
                `The first argument is required and must be an <img> or <canvas> element.`,
              );
            (this.element = t),
              (this.options = W({}, De, V(n) && n)),
              (this.cropped = !1),
              (this.disabled = !1),
              (this.pointers = {}),
              (this.ready = !1),
              (this.reloading = !1),
              (this.replaced = !1),
              (this.sized = !1),
              (this.sizing = !1),
              this.init();
          }
          return (
            a(
              e,
              [
                {
                  key: `init`,
                  value: function () {
                    var e = this.element,
                      t = e.tagName.toLowerCase(),
                      n;
                    if (!e[y]) {
                      if (((e[y] = this), t === `img`)) {
                        if (
                          ((this.isImg = !0),
                          (n = e.getAttribute(`src`) || ``),
                          (this.originalUrl = n),
                          !n)
                        )
                          return;
                        n = e.src;
                      } else
                        t === `canvas` &&
                          window.HTMLCanvasElement &&
                          (n = e.toDataURL());
                      this.load(n);
                    }
                  },
                },
                {
                  key: `load`,
                  value: function (e) {
                    var t = this;
                    if (e) {
                      (this.url = e), (this.imageData = {});
                      var n = this.element,
                        r = this.options;
                      if (
                        (!r.rotatable &&
                          !r.scalable &&
                          (r.checkOrientation = !1),
                        !r.checkOrientation || !window.ArrayBuffer)
                      ) {
                        this.clone();
                        return;
                      }
                      if (Se.test(e)) {
                        Ce.test(e) ? this.read(at(e)) : this.clone();
                        return;
                      }
                      var i = new XMLHttpRequest(),
                        a = this.clone.bind(this);
                      (this.reloading = !0),
                        (this.xhr = i),
                        (i.onabort = a),
                        (i.onerror = a),
                        (i.ontimeout = a),
                        (i.onprogress = function () {
                          i.getResponseHeader(`content-type`) !== be &&
                            i.abort();
                        }),
                        (i.onload = function () {
                          t.read(i.response);
                        }),
                        (i.onloadend = function () {
                          (t.reloading = !1), (t.xhr = null);
                        }),
                        r.checkCrossOrigin &&
                          Je(e) &&
                          n.crossOrigin &&
                          (e = Ye(e)),
                        i.open(`GET`, e, !0),
                        (i.responseType = `arraybuffer`),
                        (i.withCredentials =
                          n.crossOrigin === `use-credentials`),
                        i.send();
                    }
                  },
                },
                {
                  key: `read`,
                  value: function (e) {
                    var t = this.options,
                      n = this.imageData,
                      r = st(e),
                      i = 0,
                      a = 1,
                      o = 1;
                    if (r > 1) {
                      this.url = ot(e, be);
                      var s = ct(r);
                      (i = s.rotate), (a = s.scaleX), (o = s.scaleY);
                    }
                    t.rotatable && (n.rotate = i),
                      t.scalable && ((n.scaleX = a), (n.scaleY = o)),
                      this.clone();
                  },
                },
                {
                  key: `clone`,
                  value: function () {
                    var e = this.element,
                      t = this.url,
                      n = e.crossOrigin,
                      r = t;
                    this.options.checkCrossOrigin &&
                      Je(t) &&
                      ((n ||= `anonymous`), (r = Ye(t))),
                      (this.crossOrigin = n),
                      (this.crossOriginUrl = r);
                    var i = document.createElement(`img`);
                    n && (i.crossOrigin = n),
                      (i.src = r || t),
                      (i.alt = e.alt || `The image to crop`),
                      (this.image = i),
                      (i.onload = this.start.bind(this)),
                      (i.onerror = this.stop.bind(this)),
                      q(i, F),
                      e.parentNode.insertBefore(i, e.nextSibling);
                  },
                },
                {
                  key: `start`,
                  value: function () {
                    var e = this,
                      t = this.image;
                    (t.onload = null), (t.onerror = null), (this.sizing = !0);
                    var n =
                        g.navigator &&
                        /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                          g.navigator.userAgent,
                        ),
                      r = function (t, n) {
                        W(e.imageData, {
                          naturalWidth: t,
                          naturalHeight: n,
                          aspectRatio: t / n,
                        }),
                          (e.initialImageData = W({}, e.imageData)),
                          (e.sizing = !1),
                          (e.sized = !0),
                          e.build();
                      };
                    if (t.naturalWidth && !n) {
                      r(t.naturalWidth, t.naturalHeight);
                      return;
                    }
                    var i = document.createElement(`img`),
                      a = document.body || document.documentElement;
                    (this.sizingImage = i),
                      (i.onload = function () {
                        r(i.width, i.height), n || a.removeChild(i);
                      }),
                      (i.src = t.src),
                      n ||
                        ((i.style.cssText = `left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;`),
                        a.appendChild(i));
                  },
                },
                {
                  key: `stop`,
                  value: function () {
                    var e = this.image;
                    (e.onload = null),
                      (e.onerror = null),
                      e.parentNode.removeChild(e),
                      (this.image = null);
                  },
                },
                {
                  key: `build`,
                  value: function () {
                    if (this.sized && !this.ready) {
                      var e = this.element,
                        t = this.options,
                        n = this.image,
                        r = e.parentNode,
                        i = document.createElement(`div`);
                      i.innerHTML = Oe;
                      var a = i.querySelector(`.${y}-container`),
                        o = a.querySelector(`.${y}-canvas`),
                        s = a.querySelector(`.${y}-drag-box`),
                        c = a.querySelector(`.${y}-crop-box`),
                        l = c.querySelector(`.${y}-face`);
                      (this.container = r),
                        (this.cropper = a),
                        (this.canvas = o),
                        (this.dragBox = s),
                        (this.cropBox = c),
                        (this.viewBox = a.querySelector(`.${y}-view-box`)),
                        (this.face = l),
                        o.appendChild(n),
                        q(e, P),
                        r.insertBefore(a, e.nextSibling),
                        J(n, F),
                        this.initPreview(),
                        this.bind(),
                        (t.initialAspectRatio =
                          Math.max(0, t.initialAspectRatio) || NaN),
                        (t.aspectRatio = Math.max(0, t.aspectRatio) || NaN),
                        (t.viewMode =
                          Math.max(0, Math.min(3, Math.round(t.viewMode))) ||
                          0),
                        q(c, P),
                        t.guides ||
                          q(c.getElementsByClassName(`${y}-dashed`), P),
                        t.center ||
                          q(c.getElementsByClassName(`${y}-center`), P),
                        t.background && q(a, `${y}-bg`),
                        t.highlight || q(l, ee),
                        t.cropBoxMovable && (q(l, te), Ve(l, L, b)),
                        t.cropBoxResizable ||
                          (q(c.getElementsByClassName(`${y}-line`), P),
                          q(c.getElementsByClassName(`${y}-point`), P)),
                        this.render(),
                        (this.ready = !0),
                        this.setDragMode(t.dragMode),
                        t.autoCrop && this.crop(),
                        this.setData(t.data),
                        H(t.ready) && Z(e, ge, t.ready, { once: !0 }),
                        Q(e, ge);
                    }
                  },
                },
                {
                  key: `unbuild`,
                  value: function () {
                    if (this.ready) {
                      (this.ready = !1), this.unbind(), this.resetPreview();
                      var e = this.cropper.parentNode;
                      e && e.removeChild(this.cropper), J(this.element, P);
                    }
                  },
                },
                {
                  key: `uncreate`,
                  value: function () {
                    this.ready
                      ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
                      : this.sizing
                        ? ((this.sizingImage.onload = null),
                          (this.sizing = !1),
                          (this.sized = !1))
                        : this.reloading
                          ? ((this.xhr.onabort = null), this.xhr.abort())
                          : this.image && this.stop();
                  },
                },
              ],
              [
                {
                  key: `noConflict`,
                  value: function () {
                    return (window.Cropper = ht), e;
                  },
                },
                {
                  key: `setDefaults`,
                  value: function (e) {
                    W(De, V(e) && e);
                  },
                },
              ],
            ),
            e
          );
        })();
      return W(gt.prototype, lt, ut, dt, ft, pt, mt), gt;
    });
  }),
  c = e(n()),
  l = e(s()),
  u = `O9jsBG8n9v8-`,
  d = `_4mtEBbMGu3k-`,
  f = `M2KSzf8yfXA-`,
  p = `kIoKWv3QLVk-`,
  m = r(),
  h = 184,
  g = 5,
  _ = 1048576,
  v = c.forwardRef(function (e, t) {
    let {
      isLoading: n,
      imageRef: r,
      loaderRef: a,
      getBlob: o,
    } = y(e.imageData);
    return (
      c.useImperativeHandle(t, () => ({ getBlob: o })),
      (0, m.jsx)(`div`, {
        className: u,
        children: (0, m.jsxs)(`div`, {
          className: d,
          children: [
            (0, m.jsx)(`img`, { ref: r, className: f }),
            (0, m.jsx)(`div`, {
              ref: a,
              className: p,
              style: { display: n ? `` : `none` },
              children: i(`#Loading`),
            }),
          ],
        }),
      })
    );
  });
function y(e) {
  let [t, n] = c.useState(!0),
    r = c.useRef(void 0),
    i = c.useRef(void 0),
    a = c.useRef(null);
  return (
    c.useEffect(() => {
      n(!0),
        i.current &&
          i.current.scrollIntoView({ behavior: `smooth`, block: `center` }),
        b(r.current, e).then(() => {
          n(!1),
            (a.current = new l.default(r.current, {
              viewMode: 1,
              background: !1,
              dragMode: `move`,
              aspectRatio: 1,
              preview: `.${o}`,
              rotatable: !1,
              checkOrientation: !1,
              toggleDragModeOnDblclick: !1,
              ready: () => {
                let e = a.current,
                  t = e.getData(),
                  n = Math.min(t.x, t.y);
                n > 0 &&
                  e.setData({
                    x: t.x - n,
                    y: t.y - n,
                    width: t.width + n + n,
                    height: t.height + n + n,
                  });
              },
            }));
        });
      let t = r.current;
      return () => {
        a.current.destroy(), URL.revokeObjectURL(t.src), (t.src = ``);
      };
    }, [e]),
    {
      isLoading: t,
      imageRef: r,
      loaderRef: i,
      getBlob: () => x(a.current, r.current),
    }
  );
}
async function b(e, t) {
  let n = new Image(),
    r = a(n, `load`);
  (n.src = URL.createObjectURL(t)), await r;
  let i = document.createElement(`canvas`);
  (i.width = n.width), (i.height = n.height);
  let o = i.getContext(`2d`);
  o.rect(0, 0, i.width, i.height),
    (o.fillStyle = `black`),
    o.fill(),
    o.drawImage(n, 0, 0),
    URL.revokeObjectURL(n.src);
  let s = a(e, `load`);
  (e.src = URL.createObjectURL(await C(i))), await s;
}
async function x(e, t) {
  let n = e.getData(),
    r = g;
  for (;;) {
    let e = await C(
      S(t, { left: n.x, top: n.y, size: n.width, maxSize: h * r }),
    );
    if (r === 1 || e.size < _) return e;
    r--;
  }
}
function S(e, t) {
  let n = Math.min(Math.max(h, t.size), t.maxSize),
    r = document.createElement(`canvas`);
  (r.width = n), (r.height = n);
  let i = r.getContext(`2d`);
  return (
    (i.imageSmoothingEnabled = !0),
    (i.imageSmoothingQuality = `high`),
    i.rect(0, 0, n, n),
    (i.fillStyle = `black`),
    i.fill(),
    i.drawImage(e, t.left, t.top, t.size, t.size, 0, 0, n, n),
    r
  );
}
async function C(e, t, n) {
  return new Promise((r) => e.toBlob(r, t, n));
}
export { v as default };
