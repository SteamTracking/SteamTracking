/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  Q as t,
  W as n,
  in as r,
  j as i,
  nn as a,
  q as o,
  rt as s,
  sn as c,
  vt as l,
  wt as u,
} from "./chunk~de7f2df91c.js";
import { Pt as d } from "./chunk~25a6634263.js";
import {
  $i as f,
  $t as p,
  A as m,
  Ar as h,
  Ei as g,
  Er as _,
  F as v,
  Fr as y,
  Ha as b,
  Ir as x,
  J as S,
  Jt as C,
  Or as w,
  Qr as ee,
  Sr as te,
  Tr as ne,
  Ui as re,
  Vr as ie,
  Vt as ae,
  Ya as T,
  Zi as oe,
  aa as se,
  da as ce,
  en as le,
  fa as ue,
  g as E,
  ga as D,
  gn as O,
  ha as de,
  hr as fe,
  jr as pe,
  ot as me,
  pr as he,
  q as ge,
  ua as k,
  vr as _e,
  wr as ve,
  xr as ye,
} from "./chunk~1fa4b8f2ff.js";
import { h as be } from "./chunk~0a99e05c44.js";
import { E as xe } from "./chunk~44f252525d.js";
import { n as Se } from "./chunk~f8b6a4beb3.js";
import { i as A } from "./chunk~8fb30ea08b.js";
import { t as Ce } from "./chunk~ede3e357a2.js";
import { t as we } from "./chunk~6257ebd2d4.js";
import { t as Te } from "./chunk~e29b7ee76a.js";
import { i as Ee, n as De, t as Oe } from "./chunk~91ffd0567f.js";
import { n as ke, t as j } from "./chunk~971d501580.js";
import { t as M } from "./chunk~baca8b8889.js";
import { n as N } from "./chunk~a58194c5d9.js";
import { a as Ae, c as je, n as Me, r as Ne } from "./chunk~c12081e677.js";
import { t as Pe } from "./chunk~cfd048ddd7.js";
import { c as Fe } from "./chunk~0aa5028ef4.js";
import { t as Ie } from "./chunk~93195fc4a9.js";
import { t as Le } from "./chunk~16aefcf65f.js";
import { r as Re } from "./chunk~8681f5c764.js";
import { t as ze } from "./chunk~f4e4ed5c17.js";
import { t as Be } from "./chunk~c55709d290.js";
import { t as Ve } from "./chunk~4571d27d07.js";
import { u as He } from "./chunk~9658266888.js";
import { c as Ue } from "./chunk~f25232ab1e.js";
import { A as We, j as Ge, n as Ke } from "./chunk~6110f63e8e.js";
import { t as qe } from "./chunk~f8f9713b0c.js";
import { n as Je, r as Ye, t as Xe } from "./chunk~f95b379b4d.js";
import { t as Ze } from "./chunk~7e6646f5a7.js";
var Qe = `sgMEGCsNg7c-`,
  $e = `zSTkW-sxkis-`,
  et = `s682fjGpPIQ-`,
  tt = `_3FHQnSAvzY8-`,
  P = c(e(), 1),
  nt = c(d(), 1),
  F = l();
function rt(e) {
  let {
    onClose: t,
    className: n,
    navID: r,
    children: i,
    strTitle: a,
    wideMode: o,
    ...s
  } = e;
  return (0, F.jsx)(Ee, {
    onClose: t,
    navID: r ?? `SimpleModalDialog`,
    ...s,
    children: (0, F.jsxs)(`div`, {
      className: (0, nt.default)(n, Qe, o && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, F.jsxs)(b, {
          className: $e,
          children: [
            a && (0, F.jsx)(`div`, { className: `pxN-7GRnbkY-`, children: a }),
            (0, F.jsx)(`button`, {
              onClick: (e) => (t(`xclick`), e.preventDefault(), !1),
              className: et,
              children: (0, F.jsx)(f, {}),
            }),
          ],
        }),
        (0, F.jsx)(`div`, { className: tt, children: i }),
      ],
    }),
  });
}
var it = Symbol(`CoercingTextInputNotParseable`);
function at(e) {
  let {
      value: t,
      onValueChange: n,
      valueToString: r,
      valueFromString: i,
      checkValidText: a,
      onBlur: o,
      onKeyDown: s,
      ...c
    } = e,
    [l, u] = (0, P.useState)(null),
    d = l ?? (t === void 0 ? `` : r(t)),
    f = (e) => {
      let t = i(e);
      t !== it && e === r(t)
        ? (u(null), n(t))
        : (!a || a(e, t)) && (u(e), t !== it && n(t, !0));
    },
    p = () => {
      if (l !== null) {
        let e = i(l);
        (e !== it && n(e), u(null));
      }
    };
  return (0, F.jsx)(Fe, {
    value: d,
    onTextChange: f,
    onKeyDown: (e) => {
      (e.key === `Enter` && p(), s && s(e));
    },
    onBlur: (e) => {
      (p(), o && o(e));
    },
    ...c,
  });
}
var ot = a((e) => {
    ((e.read = function (e, t, n, r, i) {
      var a,
        o,
        s = i * 8 - r - 1,
        c = (1 << s) - 1,
        l = c >> 1,
        u = -7,
        d = n ? i - 1 : 0,
        f = n ? -1 : 1,
        p = e[t + d];
      for (
        d += f, a = p & ((1 << -u) - 1), p >>= -u, u += s;
        u > 0;
        a = a * 256 + e[t + d], d += f, u -= 8
      );
      for (
        o = a & ((1 << -u) - 1), a >>= -u, u += r;
        u > 0;
        o = o * 256 + e[t + d], d += f, u -= 8
      );
      if (a === 0) a = 1 - l;
      else if (a === c) return o ? NaN : (p ? -1 : 1) * (1 / 0);
      else ((o += 2 ** r), (a -= l));
      return (p ? -1 : 1) * o * 2 ** (a - r);
    }),
      (e.write = function (e, t, n, r, i, a) {
        var o,
          s,
          c,
          l = a * 8 - i - 1,
          u = (1 << l) - 1,
          d = u >> 1,
          f = i === 23 ? 2 ** -24 - 2 ** -77 : 0,
          p = r ? 0 : a - 1,
          m = r ? 1 : -1,
          h = +(t < 0 || (t === 0 && 1 / t < 0));
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = +!!isNaN(t)), (o = u))
              : ((o = Math.floor(Math.log(t) / Math.LN2)),
                t * (c = 2 ** -o) < 1 && (o--, (c *= 2)),
                o + d >= 1 ? (t += f / c) : (t += f * 2 ** (1 - d)),
                t * c >= 2 && (o++, (c /= 2)),
                o + d >= u
                  ? ((s = 0), (o = u))
                  : o + d >= 1
                    ? ((s = (t * c - 1) * 2 ** i), (o += d))
                    : ((s = t * 2 ** (d - 1) * 2 ** i), (o = 0)));
          i >= 8;
          e[n + p] = s & 255, p += m, s /= 256, i -= 8
        );
        for (
          o = (o << i) | s, l += i;
          l > 0;
          e[n + p] = o & 255, p += m, o /= 256, l -= 8
        );
        e[n + p - m] |= h * 128;
      }));
  }),
  st = a((e) => {
    var t = Ve(),
      n = ot(),
      r =
        typeof Symbol == `function` && typeof Symbol.for == `function`
          ? Symbol.for(`nodejs.util.inspect.custom`)
          : null;
    ((e.Buffer = s), (e.SlowBuffer = v), (e.INSPECT_MAX_BYTES = 50));
    var i = 2147483647;
    ((e.kMaxLength = i),
      (s.TYPED_ARRAY_SUPPORT = a()),
      !s.TYPED_ARRAY_SUPPORT &&
        typeof console < `u` &&
        typeof console.error == `function` &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
        ));
    function a() {
      try {
        let e = new Uint8Array(1),
          t = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(t, Uint8Array.prototype),
          Object.setPrototypeOf(e, t),
          e.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    (Object.defineProperty(s.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (s.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (s.isBuffer(this)) return this.byteOffset;
        },
      }));
    function o(e) {
      if (e > i)
        throw RangeError(`The value "` + e + `" is invalid for option "size"`);
      let t = new Uint8Array(e);
      return (Object.setPrototypeOf(t, s.prototype), t);
    }
    function s(e, t, n) {
      if (typeof e == `number`) {
        if (typeof t == `string`)
          throw TypeError(
            `The "string" argument must be of type string. Received type number`,
          );
        return d(e);
      }
      return c(e, t, n);
    }
    s.poolSize = 8192;
    function c(e, t, n) {
      if (typeof e == `string`) return f(e, t);
      if (ArrayBuffer.isView(e)) return m(e);
      if (e == null)
        throw TypeError(
          `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` +
            typeof e,
        );
      if (
        De(e, ArrayBuffer) ||
        (e && De(e.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < `u` &&
          (De(e, SharedArrayBuffer) || (e && De(e.buffer, SharedArrayBuffer))))
      )
        return h(e, t, n);
      if (typeof e == `number`)
        throw TypeError(
          `The "value" argument must not be of type number. Received type number`,
        );
      let r = e.valueOf && e.valueOf();
      if (r != null && r !== e) return s.from(r, t, n);
      let i = g(e);
      if (i) return i;
      if (
        typeof Symbol < `u` &&
        Symbol.toPrimitive != null &&
        typeof e[Symbol.toPrimitive] == `function`
      )
        return s.from(e[Symbol.toPrimitive](`string`), t, n);
      throw TypeError(
        `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` +
          typeof e,
      );
    }
    ((s.from = function (e, t, n) {
      return c(e, t, n);
    }),
      Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(s, Uint8Array));
    function l(e) {
      if (typeof e != `number`)
        throw TypeError(`"size" argument must be of type number`);
      if (e < 0)
        throw RangeError(`The value "` + e + `" is invalid for option "size"`);
    }
    function u(e, t, n) {
      return (
        l(e),
        e <= 0 || t === void 0
          ? o(e)
          : typeof n == `string`
            ? o(e).fill(t, n)
            : o(e).fill(t)
      );
    }
    s.alloc = function (e, t, n) {
      return u(e, t, n);
    };
    function d(e) {
      return (l(e), o(e < 0 ? 0 : _(e) | 0));
    }
    ((s.allocUnsafe = function (e) {
      return d(e);
    }),
      (s.allocUnsafeSlow = function (e) {
        return d(e);
      }));
    function f(e, t) {
      if (
        ((typeof t != `string` || t === ``) && (t = `utf8`), !s.isEncoding(t))
      )
        throw TypeError(`Unknown encoding: ` + t);
      let n = y(e, t) | 0,
        r = o(n),
        i = r.write(e, t);
      return (i !== n && (r = r.slice(0, i)), r);
    }
    function p(e) {
      let t = e.length < 0 ? 0 : _(e.length) | 0,
        n = o(t);
      for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
      return n;
    }
    function m(e) {
      if (De(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return h(t.buffer, t.byteOffset, t.byteLength);
      }
      return p(e);
    }
    function h(e, t, n) {
      if (t < 0 || e.byteLength < t)
        throw RangeError(`"offset" is outside of buffer bounds`);
      if (e.byteLength < t + (n || 0))
        throw RangeError(`"length" is outside of buffer bounds`);
      let r;
      return (
        (r =
          t === void 0 && n === void 0
            ? new Uint8Array(e)
            : n === void 0
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, n)),
        Object.setPrototypeOf(r, s.prototype),
        r
      );
    }
    function g(e) {
      if (s.isBuffer(e)) {
        let t = _(e.length) | 0,
          n = o(t);
        return (n.length === 0 || e.copy(n, 0, 0, t), n);
      }
      if (e.length !== void 0)
        return typeof e.length != `number` || Oe(e.length) ? o(0) : p(e);
      if (e.type === `Buffer` && Array.isArray(e.data)) return p(e.data);
    }
    function _(e) {
      if (e >= i)
        throw RangeError(
          `Attempt to allocate Buffer larger than maximum size: 0x` +
            i.toString(16) +
            ` bytes`,
        );
      return e | 0;
    }
    function v(e) {
      return (+e != e && (e = 0), s.alloc(+e));
    }
    ((s.isBuffer = function (e) {
      return e != null && e._isBuffer === !0 && e !== s.prototype;
    }),
      (s.compare = function (e, t) {
        if (
          (De(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
          De(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
          !s.isBuffer(e) || !s.isBuffer(t))
        )
          throw TypeError(
            `The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`,
          );
        if (e === t) return 0;
        let n = e.length,
          r = t.length;
        for (let i = 0, a = Math.min(n, r); i < a; ++i)
          if (e[i] !== t[i]) {
            ((n = e[i]), (r = t[i]));
            break;
          }
        return n < r ? -1 : +(r < n);
      }),
      (s.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case `hex`:
          case `utf8`:
          case `utf-8`:
          case `ascii`:
          case `latin1`:
          case `binary`:
          case `base64`:
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return !0;
          default:
            return !1;
        }
      }),
      (s.concat = function (e, t) {
        if (!Array.isArray(e))
          throw TypeError(`"list" argument must be an Array of Buffers`);
        if (e.length === 0) return s.alloc(0);
        let n;
        if (t === void 0)
          for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        let r = s.allocUnsafe(t),
          i = 0;
        for (n = 0; n < e.length; ++n) {
          let t = e[n];
          if (De(t, Uint8Array))
            i + t.length > r.length
              ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i))
              : Uint8Array.prototype.set.call(r, t, i);
          else if (s.isBuffer(t)) t.copy(r, i);
          else throw TypeError(`"list" argument must be an Array of Buffers`);
          i += t.length;
        }
        return r;
      }));
    function y(e, t) {
      if (s.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || De(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != `string`)
        throw TypeError(
          `The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` +
            typeof e,
        );
      let n = e.length,
        r = arguments.length > 2 && arguments[2] === !0;
      if (!r && n === 0) return 0;
      let i = !1;
      for (;;)
        switch (t) {
          case `ascii`:
          case `latin1`:
          case `binary`:
            return n;
          case `utf8`:
          case `utf-8`:
            return A(e).length;
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return n * 2;
          case `hex`:
            return n >>> 1;
          case `base64`:
            return Te(e).length;
          default:
            if (i) return r ? -1 : A(e).length;
            ((t = (`` + t).toLowerCase()), (i = !0));
        }
    }
    s.byteLength = y;
    function b(e, t, n) {
      let r = !1;
      if (
        ((t === void 0 || t < 0) && (t = 0),
        t > this.length ||
          ((n === void 0 || n > this.length) && (n = this.length), n <= 0) ||
          ((n >>>= 0), (t >>>= 0), n <= t))
      )
        return ``;
      for (e ||= `utf8`; ;)
        switch (e) {
          case `hex`:
            return le(this, t, n);
          case `utf8`:
          case `utf-8`:
            return ae(this, t, n);
          case `ascii`:
            return se(this, t, n);
          case `latin1`:
          case `binary`:
            return ce(this, t, n);
          case `base64`:
            return ie(this, t, n);
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return ue(this, t, n);
          default:
            if (r) throw TypeError(`Unknown encoding: ` + e);
            ((e = (e + ``).toLowerCase()), (r = !0));
        }
    }
    s.prototype._isBuffer = !0;
    function x(e, t, n) {
      let r = e[t];
      ((e[t] = e[n]), (e[n] = r));
    }
    ((s.prototype.swap16 = function () {
      let e = this.length;
      if (e % 2 != 0)
        throw RangeError(`Buffer size must be a multiple of 16-bits`);
      for (let t = 0; t < e; t += 2) x(this, t, t + 1);
      return this;
    }),
      (s.prototype.swap32 = function () {
        let e = this.length;
        if (e % 4 != 0)
          throw RangeError(`Buffer size must be a multiple of 32-bits`);
        for (let t = 0; t < e; t += 4)
          (x(this, t, t + 3), x(this, t + 1, t + 2));
        return this;
      }),
      (s.prototype.swap64 = function () {
        let e = this.length;
        if (e % 8 != 0)
          throw RangeError(`Buffer size must be a multiple of 64-bits`);
        for (let t = 0; t < e; t += 8)
          (x(this, t, t + 7),
            x(this, t + 1, t + 6),
            x(this, t + 2, t + 5),
            x(this, t + 3, t + 4));
        return this;
      }),
      (s.prototype.toString = function () {
        let e = this.length;
        return e === 0
          ? ``
          : arguments.length === 0
            ? ae(this, 0, e)
            : b.apply(this, arguments);
      }),
      (s.prototype.toLocaleString = s.prototype.toString),
      (s.prototype.equals = function (e) {
        if (!s.isBuffer(e)) throw TypeError(`Argument must be a Buffer`);
        return this === e || s.compare(this, e) === 0;
      }),
      (s.prototype.inspect = function () {
        let t = ``,
          n = e.INSPECT_MAX_BYTES;
        return (
          (t = this.toString(`hex`, 0, n)
            .replace(/(.{2})/g, `$1 `)
            .trim()),
          this.length > n && (t += ` ... `),
          `<Buffer ` + t + `>`
        );
      }),
      r && (s.prototype[r] = s.prototype.inspect),
      (s.prototype.compare = function (e, t, n, r, i) {
        if (
          (De(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
          !s.isBuffer(e))
        )
          throw TypeError(
            `The "target" argument must be one of type Buffer or Uint8Array. Received type ` +
              typeof e,
          );
        if (
          (t === void 0 && (t = 0),
          n === void 0 && (n = e ? e.length : 0),
          r === void 0 && (r = 0),
          i === void 0 && (i = this.length),
          t < 0 || n > e.length || r < 0 || i > this.length)
        )
          throw RangeError(`out of range index`);
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e))
          return 0;
        let a = i - r,
          o = n - t,
          c = Math.min(a, o),
          l = this.slice(r, i),
          u = e.slice(t, n);
        for (let e = 0; e < c; ++e)
          if (l[e] !== u[e]) {
            ((a = l[e]), (o = u[e]));
            break;
          }
        return a < o ? -1 : +(o < a);
      }));
    function S(e, t, n, r, i) {
      if (e.length === 0) return -1;
      if (
        (typeof n == `string`
          ? ((r = n), (n = 0))
          : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
        (n = +n),
        Oe(n) && (n = i ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length)
      ) {
        if (i) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (i) n = 0;
        else return -1;
      }
      if ((typeof t == `string` && (t = s.from(t, r)), s.isBuffer(t)))
        return t.length === 0 ? -1 : C(e, t, n, r, i);
      if (typeof t == `number`)
        return (
          (t &= 255),
          typeof Uint8Array.prototype.indexOf == `function`
            ? i
              ? Uint8Array.prototype.indexOf.call(e, t, n)
              : Uint8Array.prototype.lastIndexOf.call(e, t, n)
            : C(e, [t], n, r, i)
        );
      throw TypeError(`val must be string, number or Buffer`);
    }
    function C(e, t, n, r, i) {
      let a = 1,
        o = e.length,
        s = t.length;
      if (
        r !== void 0 &&
        ((r = String(r).toLowerCase()),
        r === `ucs2` || r === `ucs-2` || r === `utf16le` || r === `utf-16le`)
      ) {
        if (e.length < 2 || t.length < 2) return -1;
        ((a = 2), (o /= 2), (s /= 2), (n /= 2));
      }
      function c(e, t) {
        return a === 1 ? e[t] : e.readUInt16BE(t * a);
      }
      let l;
      if (i) {
        let r = -1;
        for (l = n; l < o; l++)
          if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
            if ((r === -1 && (r = l), l - r + 1 === s)) return r * a;
          } else (r !== -1 && (l -= l - r), (r = -1));
      } else
        for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
          let n = !0;
          for (let r = 0; r < s; r++)
            if (c(e, l + r) !== c(t, r)) {
              n = !1;
              break;
            }
          if (n) return l;
        }
      return -1;
    }
    ((s.prototype.includes = function (e, t, n) {
      return this.indexOf(e, t, n) !== -1;
    }),
      (s.prototype.indexOf = function (e, t, n) {
        return S(this, e, t, n, !0);
      }),
      (s.prototype.lastIndexOf = function (e, t, n) {
        return S(this, e, t, n, !1);
      }));
    function w(e, t, n, r) {
      n = Number(n) || 0;
      let i = e.length - n;
      r ? ((r = Number(r)), r > i && (r = i)) : (r = i);
      let a = t.length;
      r > a / 2 && (r = a / 2);
      let o = 0;
      for (; o < r; ++o) {
        let r = parseInt(t.substr(o * 2, 2), 16);
        if (Oe(r)) return o;
        e[n + o] = r;
      }
      return o;
    }
    function ee(e, t, n, r) {
      return Ee(A(t, e.length - n), e, n, r);
    }
    function te(e, t, n, r) {
      return Ee(Ce(t), e, n, r);
    }
    function ne(e, t, n, r) {
      return Ee(Te(t), e, n, r);
    }
    function re(e, t, n, r) {
      return Ee(we(t, e.length - n), e, n, r);
    }
    ((s.prototype.write = function (e, t, n, r) {
      if (t === void 0) ((r = `utf8`), (n = this.length), (t = 0));
      else if (n === void 0 && typeof t == `string`)
        ((r = t), (n = this.length), (t = 0));
      else if (isFinite(t))
        ((t >>>= 0),
          isFinite(n)
            ? ((n >>>= 0), r === void 0 && (r = `utf8`))
            : ((r = n), (n = void 0)));
      else
        throw Error(
          `Buffer.write(string, encoding, offset[, length]) is no longer supported`,
        );
      let i = this.length - t;
      if (
        ((n === void 0 || n > i) && (n = i),
        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
      )
        throw RangeError(`Attempt to write outside buffer bounds`);
      r ||= `utf8`;
      let a = !1;
      for (;;)
        switch (r) {
          case `hex`:
            return w(this, e, t, n);
          case `utf8`:
          case `utf-8`:
            return ee(this, e, t, n);
          case `ascii`:
          case `latin1`:
          case `binary`:
            return te(this, e, t, n);
          case `base64`:
            return ne(this, e, t, n);
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return re(this, e, t, n);
          default:
            if (a) throw TypeError(`Unknown encoding: ` + r);
            ((r = (`` + r).toLowerCase()), (a = !0));
        }
    }),
      (s.prototype.toJSON = function () {
        return {
          type: `Buffer`,
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      }));
    function ie(e, n, r) {
      return n === 0 && r === e.length
        ? t.fromByteArray(e)
        : t.fromByteArray(e.slice(n, r));
    }
    function ae(e, t, n) {
      n = Math.min(e.length, n);
      let r = [],
        i = t;
      for (; i < n;) {
        let t = e[i],
          a = null,
          o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
        if (i + o <= n) {
          let n, r, s, c;
          switch (o) {
            case 1:
              t < 128 && (a = t);
              break;
            case 2:
              ((n = e[i + 1]),
                (n & 192) == 128 &&
                  ((c = ((t & 31) << 6) | (n & 63)), c > 127 && (a = c)));
              break;
            case 3:
              ((n = e[i + 1]),
                (r = e[i + 2]),
                (n & 192) == 128 &&
                  (r & 192) == 128 &&
                  ((c = ((t & 15) << 12) | ((n & 63) << 6) | (r & 63)),
                  c > 2047 && (c < 55296 || c > 57343) && (a = c)));
              break;
            case 4:
              ((n = e[i + 1]),
                (r = e[i + 2]),
                (s = e[i + 3]),
                (n & 192) == 128 &&
                  (r & 192) == 128 &&
                  (s & 192) == 128 &&
                  ((c =
                    ((t & 15) << 18) |
                    ((n & 63) << 12) |
                    ((r & 63) << 6) |
                    (s & 63)),
                  c > 65535 && c < 1114112 && (a = c)));
          }
        }
        (a === null
          ? ((a = 65533), (o = 1))
          : a > 65535 &&
            ((a -= 65536),
            r.push(((a >>> 10) & 1023) | 55296),
            (a = 56320 | (a & 1023))),
          r.push(a),
          (i += o));
      }
      return oe(r);
    }
    var T = 4096;
    function oe(e) {
      let t = e.length;
      if (t <= T) return String.fromCharCode.apply(String, e);
      let n = ``,
        r = 0;
      for (; r < t;)
        n += String.fromCharCode.apply(String, e.slice(r, (r += T)));
      return n;
    }
    function se(e, t, n) {
      let r = ``;
      n = Math.min(e.length, n);
      for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
      return r;
    }
    function ce(e, t, n) {
      let r = ``;
      n = Math.min(e.length, n);
      for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
      return r;
    }
    function le(e, t, n) {
      let r = e.length;
      ((!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r));
      let i = ``;
      for (let r = t; r < n; ++r) i += ke[e[r]];
      return i;
    }
    function ue(e, t, n) {
      let r = e.slice(t, n),
        i = ``;
      for (let e = 0; e < r.length - 1; e += 2)
        i += String.fromCharCode(r[e] + r[e + 1] * 256);
      return i;
    }
    s.prototype.slice = function (e, t) {
      let n = this.length;
      ((e = ~~e),
        (t = t === void 0 ? n : ~~t),
        e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
        t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
        t < e && (t = e));
      let r = this.subarray(e, t);
      return (Object.setPrototypeOf(r, s.prototype), r);
    };
    function E(e, t, n) {
      if (e % 1 != 0 || e < 0) throw RangeError(`offset is not uint`);
      if (e + t > n) throw RangeError(`Trying to access beyond buffer length`);
    }
    ((s.prototype.readUintLE = s.prototype.readUIntLE =
      function (e, t, n) {
        ((e >>>= 0), (t >>>= 0), n || E(e, t, this.length));
        let r = this[e],
          i = 1,
          a = 0;
        for (; ++a < t && (i *= 256);) r += this[e + a] * i;
        return r;
      }),
      (s.prototype.readUintBE = s.prototype.readUIntBE =
        function (e, t, n) {
          ((e >>>= 0), (t >>>= 0), n || E(e, t, this.length));
          let r = this[e + --t],
            i = 1;
          for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
          return r;
        }),
      (s.prototype.readUint8 = s.prototype.readUInt8 =
        function (e, t) {
          return ((e >>>= 0), t || E(e, 1, this.length), this[e]);
        }),
      (s.prototype.readUint16LE = s.prototype.readUInt16LE =
        function (e, t) {
          return (
            (e >>>= 0), t || E(e, 2, this.length), this[e] | (this[e + 1] << 8)
          );
        }),
      (s.prototype.readUint16BE = s.prototype.readUInt16BE =
        function (e, t) {
          return (
            (e >>>= 0), t || E(e, 2, this.length), (this[e] << 8) | this[e + 1]
          );
        }),
      (s.prototype.readUint32LE = s.prototype.readUInt32LE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || E(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              this[e + 3] * 16777216
          );
        }),
      (s.prototype.readUint32BE = s.prototype.readUInt32BE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || E(e, 4, this.length),
            this[e] * 16777216 +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
      (s.prototype.readBigUInt64LE = j(function (e) {
        ((e >>>= 0), ye(e, `offset`));
        let t = this[e],
          n = this[e + 7];
        (t === void 0 || n === void 0) && be(e, this.length - 8);
        let r = t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
          i = this[++e] + this[++e] * 256 + this[++e] * 2 ** 16 + n * 2 ** 24;
        return BigInt(r) + (BigInt(i) << BigInt(32));
      })),
      (s.prototype.readBigUInt64BE = j(function (e) {
        ((e >>>= 0), ye(e, `offset`));
        let t = this[e],
          n = this[e + 7];
        (t === void 0 || n === void 0) && be(e, this.length - 8);
        let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e],
          i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n;
        return (BigInt(r) << BigInt(32)) + BigInt(i);
      })),
      (s.prototype.readIntLE = function (e, t, n) {
        ((e >>>= 0), (t >>>= 0), n || E(e, t, this.length));
        let r = this[e],
          i = 1,
          a = 0;
        for (; ++a < t && (i *= 256);) r += this[e + a] * i;
        return ((i *= 128), r >= i && (r -= 2 ** (8 * t)), r);
      }),
      (s.prototype.readIntBE = function (e, t, n) {
        ((e >>>= 0), (t >>>= 0), n || E(e, t, this.length));
        let r = t,
          i = 1,
          a = this[e + --r];
        for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
        return ((i *= 128), a >= i && (a -= 2 ** (8 * t)), a);
      }),
      (s.prototype.readInt8 = function (e, t) {
        return (
          (e >>>= 0),
          t || E(e, 1, this.length),
          this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        );
      }),
      (s.prototype.readInt16LE = function (e, t) {
        ((e >>>= 0), t || E(e, 2, this.length));
        let n = this[e] | (this[e + 1] << 8);
        return n & 32768 ? n | 4294901760 : n;
      }),
      (s.prototype.readInt16BE = function (e, t) {
        ((e >>>= 0), t || E(e, 2, this.length));
        let n = this[e + 1] | (this[e] << 8);
        return n & 32768 ? n | 4294901760 : n;
      }),
      (s.prototype.readInt32LE = function (e, t) {
        return (
          (e >>>= 0),
          t || E(e, 4, this.length),
          this[e] |
            (this[e + 1] << 8) |
            (this[e + 2] << 16) |
            (this[e + 3] << 24)
        );
      }),
      (s.prototype.readInt32BE = function (e, t) {
        return (
          (e >>>= 0),
          t || E(e, 4, this.length),
          (this[e] << 24) |
            (this[e + 1] << 16) |
            (this[e + 2] << 8) |
            this[e + 3]
        );
      }),
      (s.prototype.readBigInt64LE = j(function (e) {
        ((e >>>= 0), ye(e, `offset`));
        let t = this[e],
          n = this[e + 7];
        (t === void 0 || n === void 0) && be(e, this.length - 8);
        let r =
          this[e + 4] + this[e + 5] * 256 + this[e + 6] * 2 ** 16 + (n << 24);
        return (
          (BigInt(r) << BigInt(32)) +
          BigInt(
            t + this[++e] * 256 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
          )
        );
      })),
      (s.prototype.readBigInt64BE = j(function (e) {
        ((e >>>= 0), ye(e, `offset`));
        let t = this[e],
          n = this[e + 7];
        (t === void 0 || n === void 0) && be(e, this.length - 8);
        let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 256 + this[++e];
        return (
          (BigInt(r) << BigInt(32)) +
          BigInt(
            this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 256 + n,
          )
        );
      })),
      (s.prototype.readFloatLE = function (e, t) {
        return (
          (e >>>= 0), t || E(e, 4, this.length), n.read(this, e, !0, 23, 4)
        );
      }),
      (s.prototype.readFloatBE = function (e, t) {
        return (
          (e >>>= 0), t || E(e, 4, this.length), n.read(this, e, !1, 23, 4)
        );
      }),
      (s.prototype.readDoubleLE = function (e, t) {
        return (
          (e >>>= 0), t || E(e, 8, this.length), n.read(this, e, !0, 52, 8)
        );
      }),
      (s.prototype.readDoubleBE = function (e, t) {
        return (
          (e >>>= 0), t || E(e, 8, this.length), n.read(this, e, !1, 52, 8)
        );
      }));
    function D(e, t, n, r, i, a) {
      if (!s.isBuffer(e))
        throw TypeError(`"buffer" argument must be a Buffer instance`);
      if (t > i || t < a) throw RangeError(`"value" argument is out of bounds`);
      if (n + r > e.length) throw RangeError(`Index out of range`);
    }
    ((s.prototype.writeUintLE = s.prototype.writeUIntLE =
      function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
          let r = 2 ** (8 * n) - 1;
          D(this, e, t, n, r, 0);
        }
        let i = 1,
          a = 0;
        for (this[t] = e & 255; ++a < n && (i *= 256);)
          this[t + a] = (e / i) & 255;
        return t + n;
      }),
      (s.prototype.writeUintBE = s.prototype.writeUIntBE =
        function (e, t, n, r) {
          if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
            let r = 2 ** (8 * n) - 1;
            D(this, e, t, n, r, 0);
          }
          let i = n - 1,
            a = 1;
          for (this[t + i] = e & 255; --i >= 0 && (a *= 256);)
            this[t + i] = (e / a) & 255;
          return t + n;
        }),
      (s.prototype.writeUint8 = s.prototype.writeUInt8 =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 1, 255, 0),
            (this[t] = e & 255),
            t + 1
          );
        }),
      (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 2, 65535, 0),
            (this[t] = e & 255),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
      (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 2, 65535, 0),
            (this[t] = e >>> 8),
            (this[t + 1] = e & 255),
            t + 2
          );
        }),
      (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 4, 4294967295, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = e & 255),
            t + 4
          );
        }),
      (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 4, 4294967295, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = e & 255),
            t + 4
          );
        }));
    function O(e, t, n, r, i) {
      ve(t, r, i, e, n, 7);
      let a = Number(t & BigInt(4294967295));
      ((e[n++] = a),
        (a >>= 8),
        (e[n++] = a),
        (a >>= 8),
        (e[n++] = a),
        (a >>= 8),
        (e[n++] = a));
      let o = Number((t >> BigInt(32)) & BigInt(4294967295));
      return (
        (e[n++] = o),
        (o >>= 8),
        (e[n++] = o),
        (o >>= 8),
        (e[n++] = o),
        (o >>= 8),
        (e[n++] = o),
        n
      );
    }
    function de(e, t, n, r, i) {
      ve(t, r, i, e, n, 7);
      let a = Number(t & BigInt(4294967295));
      ((e[n + 7] = a),
        (a >>= 8),
        (e[n + 6] = a),
        (a >>= 8),
        (e[n + 5] = a),
        (a >>= 8),
        (e[n + 4] = a));
      let o = Number((t >> BigInt(32)) & BigInt(4294967295));
      return (
        (e[n + 3] = o),
        (o >>= 8),
        (e[n + 2] = o),
        (o >>= 8),
        (e[n + 1] = o),
        (o >>= 8),
        (e[n] = o),
        n + 8
      );
    }
    ((s.prototype.writeBigUInt64LE = j(function (e, t = 0) {
      return O(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`));
    })),
      (s.prototype.writeBigUInt64BE = j(function (e, t = 0) {
        return de(this, e, t, BigInt(0), BigInt(`0xffffffffffffffff`));
      })),
      (s.prototype.writeIntLE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
          let r = 2 ** (8 * n - 1);
          D(this, e, t, n, r - 1, -r);
        }
        let i = 0,
          a = 1,
          o = 0;
        for (this[t] = e & 255; ++i < n && (a *= 256);)
          (e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1),
            (this[t + i] = (((e / a) | 0) - o) & 255));
        return t + n;
      }),
      (s.prototype.writeIntBE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
          let r = 2 ** (8 * n - 1);
          D(this, e, t, n, r - 1, -r);
        }
        let i = n - 1,
          a = 1,
          o = 0;
        for (this[t + i] = e & 255; --i >= 0 && (a *= 256);)
          (e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1),
            (this[t + i] = (((e / a) | 0) - o) & 255));
        return t + n;
      }),
      (s.prototype.writeInt8 = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || D(this, e, t, 1, 127, -128),
          e < 0 && (e = 255 + e + 1),
          (this[t] = e & 255),
          t + 1
        );
      }),
      (s.prototype.writeInt16LE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || D(this, e, t, 2, 32767, -32768),
          (this[t] = e & 255),
          (this[t + 1] = e >>> 8),
          t + 2
        );
      }),
      (s.prototype.writeInt16BE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || D(this, e, t, 2, 32767, -32768),
          (this[t] = e >>> 8),
          (this[t + 1] = e & 255),
          t + 2
        );
      }),
      (s.prototype.writeInt32LE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || D(this, e, t, 4, 2147483647, -2147483648),
          (this[t] = e & 255),
          (this[t + 1] = e >>> 8),
          (this[t + 2] = e >>> 16),
          (this[t + 3] = e >>> 24),
          t + 4
        );
      }),
      (s.prototype.writeInt32BE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || D(this, e, t, 4, 2147483647, -2147483648),
          e < 0 && (e = 4294967295 + e + 1),
          (this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = e & 255),
          t + 4
        );
      }),
      (s.prototype.writeBigInt64LE = j(function (e, t = 0) {
        return O(
          this,
          e,
          t,
          -BigInt(`0x8000000000000000`),
          BigInt(`0x7fffffffffffffff`),
        );
      })),
      (s.prototype.writeBigInt64BE = j(function (e, t = 0) {
        return de(
          this,
          e,
          t,
          -BigInt(`0x8000000000000000`),
          BigInt(`0x7fffffffffffffff`),
        );
      })));
    function fe(e, t, n, r, i, a) {
      if (n + r > e.length || n < 0) throw RangeError(`Index out of range`);
    }
    function pe(e, t, r, i, a) {
      return (
        (t = +t),
        (r >>>= 0),
        a || fe(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
        n.write(e, t, r, i, 23, 4),
        r + 4
      );
    }
    ((s.prototype.writeFloatLE = function (e, t, n) {
      return pe(this, e, t, !0, n);
    }),
      (s.prototype.writeFloatBE = function (e, t, n) {
        return pe(this, e, t, !1, n);
      }));
    function me(e, t, r, i, a) {
      return (
        (t = +t),
        (r >>>= 0),
        a || fe(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
        n.write(e, t, r, i, 52, 8),
        r + 8
      );
    }
    ((s.prototype.writeDoubleLE = function (e, t, n) {
      return me(this, e, t, !0, n);
    }),
      (s.prototype.writeDoubleBE = function (e, t, n) {
        return me(this, e, t, !1, n);
      }),
      (s.prototype.copy = function (e, t, n, r) {
        if (!s.isBuffer(e)) throw TypeError(`argument should be a Buffer`);
        if (
          ((n ||= 0),
          !r && r !== 0 && (r = this.length),
          t >= e.length && (t = e.length),
          (t ||= 0),
          r > 0 && r < n && (r = n),
          r === n || e.length === 0 || this.length === 0)
        )
          return 0;
        if (t < 0) throw RangeError(`targetStart out of bounds`);
        if (n < 0 || n >= this.length) throw RangeError(`Index out of range`);
        if (r < 0) throw RangeError(`sourceEnd out of bounds`);
        (r > this.length && (r = this.length),
          e.length - t < r - n && (r = e.length - t + n));
        let i = r - n;
        return (
          this === e && typeof Uint8Array.prototype.copyWithin == `function`
            ? this.copyWithin(t, n, r)
            : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
          i
        );
      }),
      (s.prototype.fill = function (e, t, n, r) {
        if (typeof e == `string`) {
          if (
            (typeof t == `string`
              ? ((r = t), (t = 0), (n = this.length))
              : typeof n == `string` && ((r = n), (n = this.length)),
            r !== void 0 && typeof r != `string`)
          )
            throw TypeError(`encoding must be a string`);
          if (typeof r == `string` && !s.isEncoding(r))
            throw TypeError(`Unknown encoding: ` + r);
          if (e.length === 1) {
            let t = e.charCodeAt(0);
            ((r === `utf8` && t < 128) || r === `latin1`) && (e = t);
          }
        } else
          typeof e == `number`
            ? (e &= 255)
            : typeof e == `boolean` && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n)
          throw RangeError(`Out of range index`);
        if (n <= t) return this;
        ((t >>>= 0), (n = n === void 0 ? this.length : n >>> 0), (e ||= 0));
        let i;
        if (typeof e == `number`) for (i = t; i < n; ++i) this[i] = e;
        else {
          let a = s.isBuffer(e) ? e : s.from(e, r),
            o = a.length;
          if (o === 0)
            throw TypeError(
              `The value "` + e + `" is invalid for argument "value"`,
            );
          for (i = 0; i < n - t; ++i) this[i + t] = a[i % o];
        }
        return this;
      }));
    var he = {};
    function ge(e, t, n) {
      he[e] = class extends n {
        constructor() {
          (super(),
            Object.defineProperty(this, "message", {
              value: t.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${e}]`),
            this.stack,
            delete this.name);
        }
        get code() {
          return e;
        }
        set code(e) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    (ge(
      `ERR_BUFFER_OUT_OF_BOUNDS`,
      function (e) {
        return e
          ? `${e} is outside of buffer bounds`
          : `Attempt to access memory outside buffer bounds`;
      },
      RangeError,
    ),
      ge(
        `ERR_INVALID_ARG_TYPE`,
        function (e, t) {
          return `The "${e}" argument must be of type number. Received type ${typeof t}`;
        },
        TypeError,
      ),
      ge(
        `ERR_OUT_OF_RANGE`,
        function (e, t, n) {
          let r = `The value of "${e}" is out of range.`,
            i = n;
          return (
            Number.isInteger(n) && Math.abs(n) > 2 ** 32
              ? (i = k(String(n)))
              : typeof n == `bigint` &&
                ((i = String(n)),
                (n > BigInt(2) ** BigInt(32) ||
                  n < -(BigInt(2) ** BigInt(32))) &&
                  (i = k(i)),
                (i += `n`)),
            (r += ` It must be ${t}. Received ${i}`),
            r
          );
        },
        RangeError,
      ));
    function k(e) {
      let t = ``,
        n = e.length,
        r = +(e[0] === `-`);
      for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
      return `${e.slice(0, n)}${t}`;
    }
    function _e(e, t, n) {
      (ye(t, `offset`),
        (e[t] === void 0 || e[t + n] === void 0) && be(t, e.length - (n + 1)));
    }
    function ve(e, t, n, r, i, a) {
      if (e > n || e < t) {
        let r = typeof t == `bigint` ? `n` : ``,
          i;
        throw (
          (i =
            a > 3
              ? t === 0 || t === BigInt(0)
                ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}`
                : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}`
              : `>= ${t}${r} and <= ${n}${r}`),
          new he.ERR_OUT_OF_RANGE(`value`, i, e)
        );
      }
      _e(r, i, a);
    }
    function ye(e, t) {
      if (typeof e != `number`)
        throw new he.ERR_INVALID_ARG_TYPE(t, `number`, e);
    }
    function be(e, t, n) {
      throw Math.floor(e) === e
        ? t < 0
          ? new he.ERR_BUFFER_OUT_OF_BOUNDS()
          : new he.ERR_OUT_OF_RANGE(n || `offset`, `>= ${+!!n} and <= ${t}`, e)
        : (ye(e, n), new he.ERR_OUT_OF_RANGE(n || `offset`, `an integer`, e));
    }
    var xe = /[^+/0-9A-Za-z-_]/g;
    function Se(e) {
      if (((e = e.split(`=`)[0]), (e = e.trim().replace(xe, ``)), e.length < 2))
        return ``;
      for (; e.length % 4 != 0;) e += `=`;
      return e;
    }
    function A(e, t) {
      t ||= 1 / 0;
      let n,
        r = e.length,
        i = null,
        a = [];
      for (let o = 0; o < r; ++o) {
        if (((n = e.charCodeAt(o)), n > 55295 && n < 57344)) {
          if (!i) {
            if (n > 56319 || o + 1 === r) {
              (t -= 3) > -1 && a.push(239, 191, 189);
              continue;
            }
            i = n;
            continue;
          }
          if (n < 56320) {
            ((t -= 3) > -1 && a.push(239, 191, 189), (i = n));
            continue;
          }
          n = (((i - 55296) << 10) | (n - 56320)) + 65536;
        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
        if (((i = null), n < 128)) {
          if (--t < 0) break;
          a.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          a.push((n >> 6) | 192, (n & 63) | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (n & 63) | 128);
        } else if (n < 1114112) {
          if ((t -= 4) < 0) break;
          a.push(
            (n >> 18) | 240,
            ((n >> 12) & 63) | 128,
            ((n >> 6) & 63) | 128,
            (n & 63) | 128,
          );
        } else throw Error(`Invalid code point`);
      }
      return a;
    }
    function Ce(e) {
      let t = [];
      for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
      return t;
    }
    function we(e, t) {
      let n,
        r,
        i,
        a = [];
      for (let o = 0; o < e.length && !((t -= 2) < 0); ++o)
        ((n = e.charCodeAt(o)),
          (r = n >> 8),
          (i = n % 256),
          a.push(i),
          a.push(r));
      return a;
    }
    function Te(e) {
      return t.toByteArray(Se(e));
    }
    function Ee(e, t, n, r) {
      let i = 0;
      for (; i < r && !(i + n >= t.length || i >= e.length); ++i)
        t[i + n] = e[i];
      return i;
    }
    function De(e, t) {
      return (
        e instanceof t ||
        (e != null &&
          e.constructor != null &&
          e.constructor.name != null &&
          e.constructor.name === t.name)
      );
    }
    function Oe(e) {
      return e !== e;
    }
    var ke = (function () {
      let e = `0123456789abcdef`,
        t = Array(256);
      for (let n = 0; n < 16; ++n) {
        let r = n * 16;
        for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
      }
      return t;
    })();
    function j(e) {
      return typeof BigInt > `u` ? M : e;
    }
    function M() {
      throw Error(`BigInt not supported`);
    }
  });
function ct(e) {
  let t = Object.values(e).filter((e) => typeof e == `number`);
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
function I(e, t = `|`) {
  return e.map((e) => R(e)).join(t);
}
function lt(e, t) {
  return typeof t == `bigint` ? t.toString() : t;
}
var ut = class {
  constructor(e) {
    ((this._getter = e), (this._value = void 0));
  }
  get value() {
    let e = this._getter;
    return (
      e !== void 0 && ((this._value = e()), (this._getter = void 0)),
      this._value
    );
  }
};
function dt(e) {
  return new ut(e);
}
function ft(e) {
  return e == null;
}
function pt(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function mt(e, t) {
  let n = e / t,
    r = Math.round(n),
    i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < i ? 0 : n - r;
}
function ht(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function gt(e) {
  let t = Object.getOwnPropertyDescriptor(e, `shape`);
  return t?.get ? t.get.raw : t?.value;
}
function _t(e) {
  return gt(e._zod.def) ?? e._zod.def.shape;
}
function vt(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      let e = n();
      return (ht(this, t, e), e);
    },
    enumerable: !0,
    configurable: !0,
  });
}
function yt(e, t, n) {
  t in e ? ht(e, t, n) : (e[t] = n);
}
function bt(e, t, n, r) {
  let i = _t(t);
  for (let a of n) {
    let n = Object.getOwnPropertyDescriptor(i, a);
    n.enumerable &&
      (n.get
        ? vt(e, a, () => {
            let e = t._zod.def.shape[a];
            return r ? r(e, a) : e;
          })
        : yt(e, a, r ? r(n.value, a) : n.value));
  }
}
function xt(e, t) {
  for (let n of Reflect.ownKeys(t)) {
    let r = Object.getOwnPropertyDescriptor(t, n);
    r.enumerable && (r.get ? vt(e, n, () => t[n]) : yt(e, n, r.value));
  }
}
function St(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function Ct(e) {
  return JSON.stringify(e);
}
function wt(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
var Tt = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {};
function Et(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var Dt = dt(() => {
  if (
    xn.jitless ||
    (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`))
  )
    return !1;
  try {
    return (Function(``), !0);
  } catch {
    return !1;
  }
});
function Ot(e) {
  if (Et(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return (
    Et(n) !== !1 &&
    Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) !== !1
  );
}
function kt(e) {
  return Ot(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
var At = new Set([`string`, `number`, `symbol`]);
function jt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function Mt(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function L(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == `string` ? { ...t, error: () => t.error } : t
  );
}
function R(e) {
  return typeof e == `bigint`
    ? e.toString() + `n`
    : typeof e == `string`
      ? `"${e}"`
      : `${e}`;
}
function Nt(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === `optional`,
  );
}
var Pt = {
    safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Ft = {
    int64: [BigInt(`-9223372036854775808`), BigInt(`9223372036854775807`)],
    uint64: [BigInt(0), BigInt(`18446744073709551615`)],
  };
function It(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.pick() cannot be used on object schemas containing refinements`,
    );
  let i = {};
  return (bt(i, e, Lt(e, t)), Mt(e, St(n, { shape: i, checks: [] })));
}
function Lt(e, t) {
  let n = _t(e),
    r = [];
  for (let e of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable)
      throw Error(`Unrecognized key: "${String(e)}"`);
    t[e] && r.push(e);
  }
  return r;
}
function Rt(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.omit() cannot be used on object schemas containing refinements`,
    );
  let i = new Set(Lt(e, t)),
    a = {};
  return (
    bt(
      a,
      e,
      Reflect.ownKeys(_t(e)).filter((e) => !i.has(e)),
    ),
    Mt(e, St(n, { shape: a, checks: [] }))
  );
}
function zt(e, t) {
  if (!Ot(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = _t(e);
    for (let e of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return Mt(e, St(e._zod.def, { shape: Bt(e, t) }));
}
function Bt(e, t) {
  let n = {};
  return (bt(n, e, Reflect.ownKeys(_t(e))), xt(n, t), n);
}
function Vt(e, t) {
  if (!Ot(t))
    throw Error(`Invalid input to safeExtend: expected a plain object`);
  return Mt(e, St(e._zod.def, { shape: Bt(e, t) }));
}
function Ht(e, t) {
  if (!t?._zod?.def)
    throw Error(
      "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
    );
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  let n = {};
  return (
    bt(n, e, Reflect.ownKeys(_t(e))),
    bt(n, t, Reflect.ownKeys(_t(t))),
    Mt(
      e,
      St(e._zod.def, {
        shape: n,
        get catchall() {
          return t._zod.def.catchall;
        },
        checks: t._zod.def.checks ?? [],
      }),
    )
  );
}
function Ut(e, t, n, r = `partial`) {
  let i = t._zod.def.checks;
  if (i && i.length > 0)
    throw Error(
      `.${r}() cannot be used on object schemas containing refinements`,
    );
  let a = n ? new Set(Lt(t, n)) : void 0,
    o = {};
  return (
    bt(
      o,
      t,
      Reflect.ownKeys(_t(t)),
      e &&
        ((t, n) =>
          a && !a.has(n) ? t : new e({ type: `optional`, innerType: t })),
    ),
    Mt(t, St(t._zod.def, { shape: o, checks: [] }))
  );
}
function Wt(e, t, n) {
  let r = n ? new Set(Lt(t, n)) : void 0,
    i = {};
  return (
    bt(i, t, Reflect.ownKeys(_t(t)), (t, n) =>
      r && !r.has(n) ? t : new e({ type: `nonoptional`, innerType: t }),
    ),
    Mt(t, St(t._zod.def, { shape: i }))
  );
}
function Gt(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function Kt(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1) return !0;
  return !1;
}
function qt(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function Jt(e) {
  return typeof e == `string` ? e : e?.message;
}
function Yt(e) {
  let t = [];
  for (let n of e ?? []) {
    let e = n._zod.def;
    if (!/_(length|size)$|_equals$/.test(e.check)) break;
    let r = e.maximum ?? e.length ?? e.size;
    r >= 0 && t.push([r, n]);
  }
  return t;
}
function Xt(e, t, n) {
  var r;
  for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function Zt(e, t, n) {
  var r;
  let i = e.inst?._zod?.traits;
  i?.has(`$ZodType`) &&
    (i.has(`$ZodCheck`)
      ? ((r = e).schema ?? (r.schema = e.inst))
      : (e.schema = e.inst));
  let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error,
    o = e.message
      ? e.message
      : (Jt(e.inst?._zod.def?.error?.(e)) ??
        Jt(a?.(e)) ??
        Jt(t?.error?.(e)) ??
        Jt(n.customError?.(e)) ??
        Jt(n.localeError?.(e)) ??
        `Invalid input`),
    s = {};
  for (let t of Object.keys(e))
    t !== `inst` &&
      t !== `schema` &&
      t !== `continue` &&
      t !== `input` &&
      t !== `__proto__` &&
      (s[t] = e[t]);
  return (
    (s.path ??= []), (s.message = o), t?.reportInput && (s.input = e.input), s
  );
}
var Qt = /[\uD800-\uDBFF]/;
function $t(e) {
  let t = e.length;
  if (!Qt.test(e)) return t;
  let n = t;
  for (let r = 0; r < t - 1; r++)
    (e.charCodeAt(r) & 64512) == 55296 &&
      (e.charCodeAt(r + 1) & 64512) == 56320 &&
      (n--, r++);
  return n;
}
function en(e) {
  return Array.isArray(e)
    ? `array`
    : typeof e == `string`
      ? `string`
      : `unknown`;
}
function z(e) {
  let t = typeof e;
  switch (t) {
    case `number`:
      return Number.isNaN(e) ? `nan` : `number`;
    case `object`: {
      if (e === null) return `null`;
      if (Array.isArray(e)) return `array`;
      let t = e;
      if (
        t &&
        Object.getPrototypeOf(t) !== Object.prototype &&
        `constructor` in t &&
        t.constructor
      )
        return t.constructor.name;
    }
  }
  return t;
}
function tn(...e) {
  let [t, n, r] = e;
  return typeof t == `string`
    ? { message: t, code: `custom`, input: n, inst: r }
    : { ...t };
}
function nn(e, t) {
  for (let n in t) {
    let r = Object.getOwnPropertyDescriptor(t, n);
    r.get
      ? Object.defineProperty(e, n, { ...r, enumerable: !1 })
      : sn(e, n, r.value);
  }
}
function rn(e, t, n, r = !0) {
  return (
    Object.defineProperty(e, t, {
      configurable: !0,
      writable: !0,
      enumerable: r,
      value: n,
    }),
    n
  );
}
function an(e, t, n) {
  return rn(e, t, n, !1);
}
function on(e, t) {
  for (let n in e) {
    let r = e[n];
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        return rn(this, n, r(this));
      },
      set(e) {
        rn(this, n, e);
      },
    });
  }
  return t;
}
function sn(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? n : rn(this, t, n.bind(this));
    },
    set(e) {
      rn(this, t, e);
    },
  });
}
function cn(e, t) {
  let n = Object.getPrototypeOf(e);
  return t in n ? void 0 : n;
}
var ln,
  un = !1,
  dn = {
    configurable: !0,
    get() {
      un = !0;
    },
  };
function B(e, t, n) {
  let r = Object.getPrototypeOf(e._zod);
  t in r && ln !== e._zod
    ? (ln = void 0)
    : ((ln = e._zod),
      Object.defineProperty(r, t, {
        configurable: !0,
        get() {
          Object.defineProperty(this, t, dn);
          let e = un;
          un = !1;
          try {
            let r = n(this);
            return (
              un
                ? delete this[t]
                : Object.defineProperty(this, t, {
                    configurable: !0,
                    writable: !0,
                    value: r,
                  }),
              (un ||= e),
              r
            );
          } catch (n) {
            throw (delete this[t], (un ||= e), n);
          }
        },
        set(e) {
          Object.defineProperty(this, t, {
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      }));
}
function fn(e, t, n, r) {
  let i = cn(e, t);
  i &&
    Object.defineProperty(i, t, {
      configurable: !0,
      get() {
        let e = {
          configurable: !0,
          writable: !0,
          enumerable: r,
          value: void 0,
        };
        return (
          Object.defineProperty(this, t, e),
          (e.value = n(this)),
          Object.defineProperty(this, t, e),
          e.value
        );
      },
      set(e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          enumerable: r,
          value: e,
        });
      },
    });
}
var pn = `~constantCatch`;
function mn(e) {
  let t = () => e;
  return ((t[pn] = !0), t);
}
var hn,
  gn = { value: void 0, enumerable: !1 },
  _n = `captureStackTrace` in Error ? Error : null;
function vn(e) {
  let t = _n;
  if (t) {
    let n = t.stackTraceLimit;
    if (typeof n == `number`) {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return ((_n = null), new e());
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = n;
      }
    }
  }
  return new e();
}
function V(e, t, n, r) {
  let i = {};
  function a(e) {
    ((this.def = e), (this.constr = d), (this.traits = new Set()));
  }
  a.prototype = i;
  let o = n,
    s = o && new WeakSet();
  function c(n, r) {
    if (!n._zod) {
      gn.value = new a(r);
      try {
        Object.defineProperty(n, "_zod", gn);
      } finally {
        gn.value = void 0;
      }
    } else if (n._zod.traits.has(e)) return;
    if ((n._zod.traits.add(e), t(n, r), s)) {
      let e = Object.getPrototypeOf(n),
        t = n._zod.constr.prototype,
        r = e;
      for (; r && r !== t;) r = Object.getPrototypeOf(r);
      let i = r ?? e;
      s.has(i) || (s.add(i), nn(i, o));
    }
    let i = d.prototype;
    for (let e in i)
      Object.prototype.hasOwnProperty.call(i, e) &&
        (e in n || (n[e] = i[e].bind(n)));
  }
  let l = r?.Parent ?? Object;
  class u extends l {}
  Object.defineProperty(u, "name", { value: e });
  function d(e) {
    let t = r?.Parent ? vn(u) : this;
    c(t, e);
    let n = t._zod.deferred;
    if (n) {
      for (let e of n) e();
      t._zod.deferred = void 0;
    }
    let i = globalThis.__zod_globalConfig?.postProcessor;
    return (i && i(t), t);
  }
  return (
    Object.defineProperty(d, "init", { value: c }),
    Object.defineProperty(d, Symbol.hasInstance, {
      value: (t) =>
        r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e),
    }),
    Object.defineProperty(d, "name", { value: e }),
    d
  );
}
var yn = class extends Error {
    constructor() {
      super(
        `Encountered Promise during synchronous parse. Use .parseAsync() instead.`,
      );
    }
  },
  bn = class extends Error {
    constructor(e) {
      (super(`Encountered unidirectional transform during encode: ${e}`),
        (this.name = `ZodEncodeError`));
    }
  };
(hn = globalThis).__zod_globalConfig ?? (hn.__zod_globalConfig = {});
var xn = globalThis.__zod_globalConfig;
function Sn(e) {
  return (e && Object.assign(xn, e), xn);
}
function Cn() {
  let e = this._zod;
  return ((e.message ??= JSON.stringify(e.def, lt, 2)), e.message);
}
function wn(e) {
  this._zod.message = e;
}
var Tn = { get: Cn, set: wn, enumerable: !0, configurable: !0 },
  En = { value: void 0, enumerable: !1 },
  Dn = new WeakSet([Object.prototype, Error.prototype]),
  On = V(`$ZodError`, (e, t) => {
    ((e.name = `$ZodError`),
      (En.value = t),
      Object.defineProperty(e, "issues", En),
      (En.value = void 0),
      Object.defineProperty(e, "message", Tn));
    let n = Object.getPrototypeOf(e);
    Dn.has(n) ||
      (Dn.add(n),
      Object.defineProperty(n, "toString", {
        configurable: !0,
        enumerable: !1,
        get() {
          let e = () => this.message;
          return (
            Object.defineProperty(this, "toString", {
              value: e,
              configurable: !0,
              writable: !0,
            }),
            e
          );
        },
        set(e) {
          Object.defineProperty(this, "toString", {
            value: e,
            configurable: !0,
            writable: !0,
          });
        },
      }));
  });
function kn(e, t, n) {
  return (
    Object.prototype.hasOwnProperty.call(e, t) ||
      (t === `__proto__`
        ? Object.defineProperty(e, t, {
            value: n(),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (e[t] = n())),
    e[t]
  );
}
function An(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0 ? kn(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function jn(e, t = (e) => e.message) {
  let n = { _errors: [] },
    r = (e, i = []) => {
      for (let a of e.issues)
        if (a.code === `invalid_union` && a.errors.length)
          a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
        else if (a.code === `invalid_key`)
          r({ issues: a.issues }, [...i, ...a.path]);
        else if (a.code === `invalid_element`)
          r({ issues: a.issues }, [...i, ...a.path]);
        else {
          let e = [...i, ...a.path];
          if (e.length === 0) n._errors.push(t(a));
          else {
            let r = n,
              i = 0;
            for (; i < e.length;) {
              let n = e[i],
                o = i === e.length - 1;
              if (n === `_errors`) {
                (o && r._errors.push(t(a)), i++);
                continue;
              }
              Object.prototype.hasOwnProperty.call(r, n) ||
                Object.defineProperty(r, n, {
                  value: { _errors: [] },
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                });
              let s = r[n];
              (o && s._errors.push(t(a)), (r = s), i++);
            }
          }
        }
    };
  return (r(e), n);
}
function Mn(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
var Nn = (e) => {
    let t = (n, r, i, a) => {
      let o = i ? { ...i, async: !1 } : { async: !1 },
        s = n._zod.run({ value: r, issues: [] }, o);
      if (s instanceof Promise) throw new yn();
      if (s.issues.length) {
        let n = new (a?.Err ?? e)(s.issues.map((e) => Zt(e, o, Sn())));
        throw (Tt(n, a?.callee ?? t), n);
      }
      return s.value;
    };
    return t;
  },
  Pn = (e) => {
    let t = async (n, r, i, a) => {
      let o = i ? { ...i, async: !0 } : { async: !0 },
        s = n._zod.run({ value: r, issues: [] }, o);
      if ((s instanceof Promise && (s = await s), s.issues.length)) {
        let n = new (a?.Err ?? e)(s.issues.map((e) => Zt(e, o, Sn())));
        throw (Tt(n, a?.callee ?? t), n);
      }
      return s.value;
    };
    return t;
  },
  Fn = (e) => (t, n, r) => {
    let i = r ? { ...r, async: !1 } : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, i);
    if (a instanceof Promise) throw new yn();
    return a.issues.length
      ? In(e, a.issues, i)
      : { success: !0, data: a.value };
  };
function In(e, t, n) {
  let r;
  return {
    success: !1,
    get error() {
      return (
        r ||
          ((r = new e(t.map((e) => Zt(e, n, Sn())))),
          (t = void 0),
          (n = void 0)),
        r
      );
    },
    set error(e) {
      ((r = e), (t = void 0), (n = void 0));
    },
  };
}
var Ln = (e) => async (t, n, r) => {
    let i = r ? { ...r, async: !0 } : { async: !0 },
      a = t._zod.run({ value: n, issues: [] }, i);
    return (
      a instanceof Promise && (a = await a),
      a.issues.length ? In(e, a.issues, i) : { success: !0, data: a.value }
    );
  },
  Rn = Symbol.for(`zod.compile.invalid`),
  zn = Symbol.for(`zod.compile.fallback`),
  Bn = (e, t, n) => {
    let r = e._zod.bag.validator;
    if (r !== void 0) {
      if (r(t) !== Rn) return !0;
      if (r.definite === !0 && n === void 0) return !1;
    }
    return Vn(e, t, n);
  };
function Vn(e, t, n) {
  let r = n
      ? { ...n, async: !1, abortEarly: !0 }
      : { async: !1, abortEarly: !0 },
    i = e._zod.bag.fallbackRun,
    a;
  if (
    (i
      ? ((r[zn] = !0), (a = i({ value: t, issues: [] }, r)))
      : (a = e._zod.run({ value: t, issues: [] }, r)),
    a instanceof Promise)
  )
    throw new yn();
  return a.issues.length === 0;
}
var Hn = async (e, t, n) => {
    let r = n
        ? { ...n, async: !0, abortEarly: !0 }
        : { async: !0, abortEarly: !0 },
      i = e._zod.run({ value: t, issues: [] }, r);
    return (i instanceof Promise && (i = await i), i.issues.length === 0);
  },
  Un = (e) => {
    let t = Nn(e),
      n = (e, r, i, a) => {
        let o = i ? { ...i, direction: `backward` } : { direction: `backward` };
        return t(e, r, o, Mn(n, a));
      };
    return n;
  },
  Wn = (e) => {
    let t = Nn(e),
      n = (e, r, i, a) => t(e, r, i, Mn(n, a));
    return n;
  },
  Gn = (e) => {
    let t = Pn(e),
      n = async (e, r, i, a) => {
        let o = i ? { ...i, direction: `backward` } : { direction: `backward` };
        return await t(e, r, o, Mn(n, a));
      };
    return n;
  },
  Kn = (e) => {
    let t = Pn(e),
      n = async (e, r, i, a) => await t(e, r, i, Mn(n, a));
    return n;
  },
  qn = (e) => (t, n, r) => {
    let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
    return Fn(e)(t, n, i);
  },
  Jn = (e) => (t, n, r) => Fn(e)(t, n, r),
  Yn = (e) => async (t, n, r) => {
    let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
    return Ln(e)(t, n, i);
  },
  Xn = (e) => async (t, n, r) => Ln(e)(t, n, r),
  Zn = /^[cC][0-9a-z]{6,}$/,
  Qn = /^[0-9a-z]+$/,
  $n = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  er = /^[0-9a-vA-V]{20}$/,
  tr = /^[A-Za-z0-9]{27}$/,
  nr = /^[a-zA-Z0-9_-]{21}$/;
function rr(e) {
  return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var ir =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  ar =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  or = (e) =>
    e
      ? RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  sr =
    /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  cr = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function lr() {
  return new RegExp(cr, `u`);
}
var ur =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  dr =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  fr =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  pr =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  mr =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  hr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
  gr = /^https?$/,
  _r = /^\+[1-9]\d{6,14}$/,
  vr = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function yr(e) {
  return RegExp(`^${e}$`);
}
var br = yr(vr);
function xr(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : e.seconds
      ? `${t}:[0-5]\\d(?:\\.\\d+)?`
      : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Sr(e) {
  return RegExp(`^${xr(e)}$`);
}
function Cr(e) {
  let t = [`Z`];
  e.offset && t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  let n = `${xr({ precision: e.precision, seconds: !0 })}(?:${t.join(`|`)})`,
    r = e.local ? `${n}|${xr({ precision: e.precision })}` : n;
  return RegExp(`^${vr}T(?:${r})$`);
}
var wr = /^[\s\S]{0,}$/,
  Tr = /^-?\d+$/,
  Er = /^-?\d+(?:\.\d+)?$/,
  Dr = /^(?:true|false)$/i,
  Or = /^[^A-Z]*$/,
  kr = /^[^a-z]*$/,
  H = V(`$ZodCheck`, (e, t) => {
    var n;
    ((e._zod ??= {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  Ar = (e) => {
    let t = e.value;
    return !ft(t) && t.length !== void 0;
  },
  jr = { number: `number`, bigint: `bigint`, object: `date` },
  Mr = V(`$ZodCheckLessThan`, (e, t) => {
    H.init(e, t);
    let n = jr[typeof t.value];
    e._zod.check = (r) => {
      (t.inclusive ? r.value <= t.value : r.value < t.value) ||
        r.issues.push({
          origin: jr[typeof r.value] ?? n,
          code: `too_big`,
          maximum: typeof t.value == `object` ? t.value.getTime() : t.value,
          input: r.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  Nr = V(`$ZodCheckGreaterThan`, (e, t) => {
    H.init(e, t);
    let n = jr[typeof t.value];
    e._zod.check = (r) => {
      (t.inclusive ? r.value >= t.value : r.value > t.value) ||
        r.issues.push({
          origin: jr[typeof r.value] ?? n,
          code: `too_small`,
          minimum: typeof t.value == `object` ? t.value.getTime() : t.value,
          input: r.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
    };
  }),
  Pr = V(`$ZodCheckMultipleOf`, (e, t) => {
    (H.init(e, t),
      (e._zod.check = (n) => {
        if (typeof n.value != typeof t.value)
          throw Error(`Cannot mix number and bigint in multiple_of check.`);
        (typeof n.value == `bigint`
          ? t.value !== BigInt(0) && n.value % t.value === BigInt(0)
          : mt(n.value, t.value) === 0) ||
          n.issues.push({
            origin: typeof n.value,
            code: `not_multiple_of`,
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Fr = V(`$ZodCheckNumberFormat`, (e, t) => {
    (H.init(e, t), (t.format = t.format || `float64`));
    let n = t.format?.includes(`int`),
      r = n ? `int` : `number`,
      [i, a] = Pt[t.format];
    e._zod.check = (o) => {
      let s = o.value;
      if (n) {
        if (!Number.isInteger(s)) {
          o.issues.push({
            expected: r,
            format: t.format,
            code: `invalid_type`,
            continue: !1,
            input: s,
            inst: e,
          });
          return;
        }
        if (!Number.isSafeInteger(s)) {
          s > 0
            ? o.issues.push({
                input: s,
                code: `too_big`,
                maximum: 2 ** 53 - 1,
                note: `Integers must be within the safe integer range.`,
                inst: e,
                origin: r,
                inclusive: !0,
                continue: !t.abort,
              })
            : o.issues.push({
                input: s,
                code: `too_small`,
                minimum: -(2 ** 53 - 1),
                note: `Integers must be within the safe integer range.`,
                inst: e,
                origin: r,
                inclusive: !0,
                continue: !t.abort,
              });
          return;
        }
      }
      (s < i &&
        o.issues.push({
          origin: `number`,
          input: s,
          code: `too_small`,
          minimum: i,
          inclusive: !0,
          inst: e,
          continue: !t.abort,
        }),
        s > a &&
          o.issues.push({
            origin: `number`,
            input: s,
            code: `too_big`,
            maximum: a,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }));
    };
  }),
  Ir = V(`$ZodCheckMaxLength`, (e, t) => {
    var n;
    (H.init(e, t),
      (n = e._zod.def).when ?? (n.when = Ar),
      (e._zod.check = (n) => {
        let r = n.value,
          i = r.length;
        if ((typeof r == `string` && i > t.maximum ? $t(r) : i) <= t.maximum)
          return;
        let a = en(r);
        n.issues.push({
          origin: a,
          code: `too_big`,
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  Lr = V(`$ZodCheckMinLength`, (e, t) => {
    var n;
    (H.init(e, t),
      (n = e._zod.def).when ?? (n.when = Ar),
      (e._zod.check = (n) => {
        let r = n.value,
          i = r.length;
        if (
          (typeof r == `string` && i >= t.minimum && i < t.minimum * 2
            ? $t(r)
            : i) >= t.minimum
        )
          return;
        let a = en(r);
        n.issues.push({
          origin: a,
          code: `too_small`,
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  Rr = V(`$ZodCheckLengthEquals`, (e, t) => {
    var n;
    (H.init(e, t),
      (n = e._zod.def).when ?? (n.when = Ar),
      (e._zod.check = (n) => {
        let r = n.value,
          i = r.length,
          a =
            typeof r == `string` && i >= t.length && i <= t.length * 2
              ? $t(r)
              : i;
        if (a === t.length) return;
        let o = en(r),
          s = a > t.length;
        n.issues.push({
          origin: o,
          ...(s
            ? { code: `too_big`, maximum: t.length }
            : { code: `too_small`, minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  zr = V(`$ZodCheckStringFormat`, (e, t) => {
    var n, r;
    (H.init(e, t),
      t.pattern
        ? ((n = e._zod).check ??
          (n.check = (n) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(n.value) &&
                n.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: t.format,
                  input: n.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((r = e._zod).check ?? (r.check = () => {})));
  }),
  Br = V(`$ZodCheckRegex`, (e, t) => {
    (zr.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: `string`,
              code: `invalid_format`,
              format: `regex`,
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  Vr = V(`$ZodCheckLowerCase`, (e, t) => {
    ((t.pattern ??= Or), zr.init(e, t));
  }),
  Hr = V(`$ZodCheckUpperCase`, (e, t) => {
    ((t.pattern ??= kr), zr.init(e, t));
  }),
  Ur = V(`$ZodCheckIncludes`, (e, t) => {
    H.init(e, t);
    let n = jt(t.includes);
    ((t.pattern = new RegExp(
      typeof t.position == `number` ? `^.{${t.position},}${n}` : n,
    )),
      (e._zod.check = (n) => {
        n.value.includes(t.includes, t.position) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `includes`,
            includes: t.includes,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Wr = V(`$ZodCheckStartsWith`, (e, t) => {
    H.init(e, t);
    let n = RegExp(`^${jt(t.prefix)}.*`);
    ((t.pattern ??= n),
      (e._zod.check = (n) => {
        n.value.startsWith(t.prefix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `starts_with`,
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Gr = V(`$ZodCheckEndsWith`, (e, t) => {
    H.init(e, t);
    let n = RegExp(`.*${jt(t.suffix)}$`);
    ((t.pattern ??= n),
      (e._zod.check = (n) => {
        n.value.endsWith(t.suffix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `ends_with`,
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Kr = V(`$ZodCheckOverwrite`, (e, t) => {
    (H.init(e, t),
      (e._zod.check = (e) => {
        e.value = t.tx(e.value);
      }));
  }),
  qr = class {
    constructor(e = [], t = {}) {
      ((this.content = []),
        (this.indent = 0),
        (this.args = e),
        (this.closed = t));
    }
    indented(e) {
      this.indent += 1;
      try {
        e(this);
      } finally {
        --this.indent;
      }
    }
    write(e) {
      if (typeof e == `function`) {
        (e(this, { execution: `sync` }), e(this, { execution: `async` }));
        return;
      }
      let t = e
          .split(`
`)
          .filter((e) => e),
        n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
        r = t
          .map((e) => e.slice(n))
          .map((e) => ` `.repeat(this.indent * 2) + e);
      for (let e of r) this.content.push(e);
    }
    compile() {
      let e = Function,
        t = this?.content ?? [``];
      return new e(
        ...Object.keys(this.closed),
        `return function (${this.args.join(`, `)}) {\n${t.join(`
`)}\n};`,
      )(...Object.values(this.closed));
    }
  },
  Jr = { major: 4, minor: 6, patch: 7 },
  U = V(
    `$ZodType`,
    (e, t) => {
      var n;
      ((e ??= {}),
        (e._zod.def = t),
        (e._zod.bag = e._zod.bag || {}),
        (e._zod.version = Jr));
      let r = e._zod.def.checks,
        i = e._zod.traits.has(`$ZodCheck`)
          ? [e, ...(r ?? [])]
          : r?.length
            ? [...r]
            : [];
      for (let t of i) for (let n of t._zod.onattach) n(e);
      if (i.length === 0)
        ((n = e._zod).deferred ?? (n.deferred = []),
          e._zod.deferred?.push(() => {
            e._zod.run = e._zod.parse;
          }));
      else {
        let t = (t, n, r) => {
            if (t.memo) return t;
            let i = Gt(t),
              a;
            for (let o of n) {
              if (o._zod.def.when) {
                if (Kt(t) || !o._zod.def.when(t)) continue;
              } else if (i) continue;
              let n = t.issues.length,
                s = o._zod.check(t);
              if (s instanceof Promise && r?.async === !1) throw new yn();
              if (a || s instanceof Promise)
                a = (a ?? Promise.resolve()).then(async () => {
                  (await s,
                    t.issues.length !== n &&
                      (Xt(t.issues, n, e), (i ||= Gt(t, n))));
                });
              else {
                if (t.issues.length === n) continue;
                (Xt(t.issues, n, e), (i ||= Gt(t, n)));
              }
            }
            return a ? a.then(() => t) : t;
          },
          n = (n, r, a) => {
            if (Gt(n)) return ((n.aborted = !0), n);
            let o = t(r, i, a);
            if (o instanceof Promise) {
              if (a.async === !1) throw new yn();
              return o.then((t) => e._zod.parse(t, a));
            }
            return e._zod.parse(o, a);
          };
        e._zod.run = (r, a) => {
          if (a.skipChecks) return e._zod.parse(r, a);
          if (a.direction === `backward`) {
            let t = e._zod.parse(
              { value: r.value, issues: [] },
              { ...a, skipChecks: !0 },
            );
            return t instanceof Promise
              ? t.then((e) => n(e, r, a))
              : n(t, r, a);
          }
          let o = e._zod.parse(r, a);
          if (o instanceof Promise) {
            if (a.async === !1) throw new yn();
            return o.then((e) => t(e, i, a));
          }
          return t(o, i, a);
        };
      }
    },
    {
      get "~standard"() {
        return an(this, `~standard`, Zr(this));
      },
      set "~standard"(e) {
        rn(this, `~standard`, e);
      },
    },
  ),
  Yr = (e, t) =>
    e.issues.length
      ? { issues: e.issues.map((e) => Zt(e, t, Sn())) }
      : { value: e.value };
async function Xr(e, t) {
  let n = { async: !0 };
  return Yr(await e._zod.run({ value: t, issues: [] }, n), n);
}
function Zr(e) {
  return {
    validate: (t) => {
      let n = { async: !1 };
      try {
        let r = e._zod.run({ value: t, issues: [] }, n);
        if (!(r instanceof Promise)) return Yr(r, n);
      } catch {}
      return Xr(e, t);
    },
    vendor: `zod`,
    version: 1,
  };
}
var Qr = V(`$ZodString`, (e, t) => {
    (U.init(e, t),
      (e._zod.pattern = t.pattern ?? wr),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == `string` ||
            n.issues.push({
              expected: `string`,
              code: `invalid_type`,
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  W = V(`$ZodStringFormat`, (e, t) => {
    (zr.init(e, t), Qr.init(e, t));
  }),
  $r = V(`$ZodGUID`, (e, t) => {
    ((t.pattern ??= ar), W.init(e, t));
  }),
  ei = V(`$ZodUUID`, (e, t) => {
    if (t.version) {
      let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ??= or(e);
    } else t.pattern ??= or();
    W.init(e, t);
  }),
  ti = V(`$ZodEmail`, (e, t) => {
    ((t.pattern ??= sr), W.init(e, t));
  });
function ni(e) {
  try {
    return typeof URL < `u` && typeof URL.canParse == `function`
      ? URL.canParse(e)
      : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function ri(e, t) {
  return !(`normalize` in t) && !(`hostname` in t) && !(`protocol` in t)
    ? ni(e) || 2
    : ii(e, t);
}
function ii(e, t) {
  if (
    !t.normalize &&
    t.protocol?.source === gr.source &&
    !/^https?:\/\//i.test(e)
  )
    return 1;
  try {
    if (typeof URL < `u`) {
      let t = URL;
      if (typeof t.parse == `function`) return t.parse(e) ?? 2;
    }
    return new URL(e);
  } catch {
    return 2;
  }
}
var ai = /[\t\n\r]/g;
function oi(e) {
  return e.replace(ai, ``);
}
function si(e, t) {
  return ((t.lastIndex = 0), t.test(e.hostname));
}
function ci(e, t) {
  return (
    (t.lastIndex = 0),
    t.test(e.protocol.endsWith(`:`) ? e.protocol.slice(0, -1) : e.protocol)
  );
}
var li = V(`$ZodURL`, (e, t) => {
    (W.init(e, t),
      (e._zod.check = (n) => {
        try {
          let r = n.value.trim(),
            i = ri(r, t);
          if (i === 1) {
            n.issues.push({
              code: `invalid_format`,
              format: `url`,
              note: `Invalid URL format`,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (i === 2) {
            n.issues.push({
              code: `invalid_format`,
              format: `url`,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
            return;
          }
          if (i === !0) {
            n.value = oi(r);
            return;
          }
          (t.hostname &&
            !si(i, t.hostname) &&
            n.issues.push({
              code: `invalid_format`,
              format: `url`,
              note: `Invalid hostname`,
              pattern: t.hostname.source,
              input: n.value,
              inst: e,
              continue: !t.abort,
            }),
            t.protocol &&
              !ci(i, t.protocol) &&
              n.issues.push({
                code: `invalid_format`,
                format: `url`,
                note: `Invalid protocol`,
                pattern: t.protocol.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              }),
            (n.value = t.normalize ? i.href : oi(r)));
          return;
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  ui = V(`$ZodEmoji`, (e, t) => {
    ((t.pattern ??= lr()), W.init(e, t));
  }),
  di = V(`$ZodNanoID`, (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
      throw Error(`Invalid nanoid length: ${t.length}`);
    ((t.pattern ??= t.length === void 0 ? nr : rr(t.length)), W.init(e, t));
  }),
  fi = V(`$ZodCUID`, (e, t) => {
    ((t.pattern ??= Zn), W.init(e, t));
  }),
  pi = V(`$ZodCUID2`, (e, t) => {
    ((t.pattern ??= Qn), W.init(e, t));
  }),
  mi = V(`$ZodULID`, (e, t) => {
    ((t.pattern ??= $n), W.init(e, t));
  }),
  hi = V(`$ZodXID`, (e, t) => {
    ((t.pattern ??= er), W.init(e, t));
  }),
  gi = V(`$ZodKSUID`, (e, t) => {
    ((t.pattern ??= tr), W.init(e, t));
  }),
  _i = V(`$ZodISODateTime`, (e, t) => {
    ((t.pattern ??= Cr(t)), W.init(e, t));
  }),
  vi = V(`$ZodISODate`, (e, t) => {
    ((t.pattern ??= br), W.init(e, t));
  }),
  yi = V(`$ZodISOTime`, (e, t) => {
    ((t.pattern ??= Sr(t)), W.init(e, t));
  }),
  bi = V(`$ZodISODuration`, (e, t) => {
    ((t.pattern ??= ir), W.init(e, t));
  }),
  xi = V(`$ZodIPv4`, (e, t) => {
    ((t.pattern ??= ur), W.init(e, t));
  }),
  Si = /^[0-9a-fA-F:.]+$/;
function Ci(e) {
  return Si.test(e) ? ni(`http://[${e}]`) : !1;
}
var wi = V(`$ZodIPv6`, (e, t) => {
    ((t.pattern ??= dr),
      W.init(e, t),
      (e._zod.check = (n) => {
        Ci(n.value) ||
          n.issues.push({
            code: `invalid_format`,
            format: `ipv6`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Ti = V(`$ZodCIDRv4`, (e, t) => {
    ((t.pattern ??= fr), W.init(e, t));
  });
function Ei(e) {
  let t = e.split(`/`);
  if (t.length !== 2) return !1;
  let [n, r] = t;
  if (!r) return !1;
  let i = Number(r);
  return `${i}` !== r || i < 0 || i > 128 ? !1 : Ci(n);
}
var Di = V(`$ZodCIDRv6`, (e, t) => {
  ((t.pattern ??= pr),
    W.init(e, t),
    (e._zod.check = (n) => {
      Ei(n.value) ||
        n.issues.push({
          code: `invalid_format`,
          format: `cidrv6`,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function Oi(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var ki = /^[0-9a-zA-Z+/]*={0,2}$/,
  Ai = V(`$ZodBase64`, (e, t) => {
    ((t.pattern ??= ki),
      W.init(e, t),
      (e._zod.check = (n) => {
        Oi(n.value) ||
          n.issues.push({
            code: `invalid_format`,
            format: `base64`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  ji = /^[A-Za-z0-9_-]*$/;
function Mi(e) {
  if (!ji.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Oi(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
var Ni = V(`$ZodBase64URL`, (e, t) => {
    ((t.pattern ??= ji),
      W.init(e, t),
      (e._zod.check = (n) => {
        Mi(n.value) ||
          n.issues.push({
            code: `invalid_format`,
            format: `base64url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Pi = V(`$ZodE164`, (e, t) => {
    ((t.pattern ??= _r), W.init(e, t));
  });
function Fi(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !(
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && (!(`alg` in i) || i.alg !== t))
    );
  } catch {
    return !1;
  }
}
var Ii = V(`$ZodJWT`, (e, t) => {
    (W.init(e, t),
      (e._zod.check = (n) => {
        Fi(n.value, t.alg) ||
          n.issues.push({
            code: `invalid_format`,
            format: `jwt`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Li = V(`$ZodNumber`, (e, t) => {
    (U.init(e, t),
      (e._zod.pattern = Er),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch {}
        let i = n.value;
        if (typeof i == `number` && !Number.isNaN(i) && Number.isFinite(i))
          return n;
        let a =
          typeof i == `number`
            ? Number.isNaN(i)
              ? `NaN`
              : Number.isFinite(i)
                ? void 0
                : String(i)
            : void 0;
        return (
          n.issues.push({
            expected: `number`,
            code: `invalid_type`,
            input: i,
            inst: e,
            ...(a ? { received: a } : {}),
          }),
          n
        );
      }));
  }),
  Ri = V(`$ZodNumberFormat`, (e, t) => {
    (Fr.init(e, t), Li.init(e, t));
  }),
  zi = V(`$ZodBoolean`, (e, t) => {
    (U.init(e, t),
      (e._zod.pattern = Dr),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = !!n.value;
          } catch {}
        let i = n.value;
        return (
          typeof i == `boolean` ||
            n.issues.push({
              expected: `boolean`,
              code: `invalid_type`,
              input: i,
              inst: e,
            }),
          n
        );
      }));
  }),
  Bi = V(`$ZodUnknown`, (e, t) => {
    (U.init(e, t), (e._zod.parse = (e) => e));
  }),
  Vi = V(`$ZodNever`, (e, t) => {
    (U.init(e, t),
      (e._zod.parse = (t, n) => (
        t.issues.push({
          expected: `never`,
          code: `invalid_type`,
          input: t.value,
          inst: e,
        }),
        t
      )));
  });
function Hi(e, t) {
  let n = Yt(e._zod.def.checks);
  if (!n.length) return;
  let r = Math.min(...n.map((e) => e[0])),
    i = e._zod.parse;
  e._zod.parse = (n, a) => {
    let o = t(n.value);
    if (o > r && !a?.skipChecks && a?.direction !== `backward`) {
      for (let [t, r] of Yt(e._zod.def.checks))
        if (o > t && r._zod.def.when(n)) {
          let t = n.issues.length;
          return (
            r._zod.check(n), (n.issues[t].continue = !1), Xt(n.issues, t, e), n
          );
        }
    }
    return i(n, a);
  };
}
var Ui = (e) => (Array.isArray(e) ? e.length : -1);
function Wi(e, t, n) {
  (e.issues.length && t.issues.push(...qt(n, e.issues)),
    (t.value[n] = e.value));
}
var Gi = V(`$ZodArray`, (e, t) => {
  U.init(e, t);
  let n = xn.memoizer;
  (n?.attach(e),
    (e._zod.parse = (r, i) => {
      let a = r.value;
      if (!Array.isArray(a))
        return (
          r.issues.push({
            expected: `array`,
            code: `invalid_type`,
            input: a,
            inst: e,
          }),
          r
        );
      r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
      let o = [],
        s = i?.abortEarly;
      for (let e = 0; e < a.length; e++) {
        let n = a[e],
          c = t.element._zod.run({ value: n, issues: [] }, i);
        if (c instanceof Promise) o.push(c.then((t) => Wi(t, r, e)));
        else if ((Wi(c, r, e), s && c.issues.length !== 0 && Gt(c))) break;
      }
      return o.length ? Promise.all(o).then(() => r) : r;
    }),
    Hi(e, Ui));
});
function Ki(e, t, n, r, i, a) {
  let o = n in r,
    s = a === `optional`;
  if (o || !s || i !== `optional`) {
    if (e.issues.length) {
      if (i !== void 0 && s && !o) return;
      t.issues.push(...qt(n, e.issues));
    }
    !o && i === void 0
      ? e.issues.length ||
        t.issues.push({
          code: `invalid_type`,
          expected: `nonoptional`,
          input: void 0,
          path: [n],
        })
      : e.value === void 0
        ? (o || (i === `defaulted` && !s)) && (t.value[n] = void 0)
        : (t.value[n] = e.value);
  }
}
var qi = [];
function Ji(e) {
  let t = Object.keys(e.shape),
    n = Object.getOwnPropertySymbols(e.shape),
    r = n.length ? n : qi,
    i = r.length ? [...t, ...r] : t;
  for (let t of i)
    if (!e.shape?.[t]?._zod?.traits?.has(`$ZodType`))
      throw Error(
        `Invalid element at key "${String(t)}": expected a Zod schema`,
      );
  let a = Nt(e.shape);
  return {
    ...e,
    allKeys: i,
    symbolKeys: r,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(a),
  };
}
function Yi(e, t, n, r, i, a, o) {
  let s = [],
    c = i.keySet,
    l = i.catchall._zod,
    u = l.def.type,
    d = l.optin,
    f = l.optout,
    p = 0;
  for (let i in t) {
    if (o && n.issues.length !== p) {
      if (Gt(n, p)) break;
      p = n.issues.length;
    }
    if (c.has(i)) continue;
    if (i === `__proto__`) {
      u === `never` && s.push(i);
      continue;
    }
    if (u === `never`) {
      s.push(i);
      continue;
    }
    let a = l.run({ value: t[i], issues: [] }, r);
    a instanceof Promise
      ? e.push(a.then((e) => Ki(e, n, i, t, d, f)))
      : Ki(a, n, i, t, d, f);
  }
  return (
    s.length &&
      n.issues.push({
        code: `unrecognized_keys`,
        keys: s,
        input: t,
        inst: a,
        continue: !0,
      }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
var Xi = V(`$ZodObject`, (e, t) => {
    U.init(e, t);
    let n = Object.getOwnPropertyDescriptor(t, `shape`),
      r = n?.get ? n.get.raw : (t.shape ?? {});
    if (r) {
      let e = () => {
        let n = { ...r };
        return (
          Object.defineProperty(t, "shape", { value: n }), (e.raw = n), n
        );
      };
      ((e.raw = r), Object.defineProperty(t, "shape", { get: e }));
    }
    let i = dt(() => Ji(t));
    B(e, `propValues`, (e) => {
      let t = e.def.shape,
        n = {};
      for (let e in t) {
        let r = t[e]._zod;
        if (r.values) {
          Object.prototype.hasOwnProperty.call(n, e) || ht(n, e, new Set());
          for (let t of r.values) n[e].add(t);
          r.optin !== void 0 && n[e].add(void 0);
        }
      }
      return n;
    });
    let a = Et,
      o = t.catchall,
      s,
      c = xn.memoizer;
    (c?.attach(e),
      (e._zod.parse = (t, n) => {
        s ??= i.value;
        let r = t.value;
        if (!a(r))
          return (
            t.issues.push({
              expected: `object`,
              code: `invalid_type`,
              input: r,
              inst: e,
            }),
            t
          );
        t.value = c ? c.alloc(e, t, {}, n) : {};
        let l = [],
          u = s.shape,
          d = n?.abortEarly,
          f = t.issues.length;
        for (let e of s.allKeys) {
          if (d && t.issues.length !== f) {
            if (Gt(t, f)) break;
            f = t.issues.length;
          }
          if (e === `__proto__`) continue;
          let i = u[e],
            a = i._zod.optin,
            o = i._zod.optout,
            s = i._zod.run({ value: r[e], issues: [] }, n);
          s instanceof Promise
            ? l.push(s.then((n) => Ki(n, t, e, r, a, o)))
            : Ki(s, t, e, r, a, o);
        }
        return o
          ? Yi(l, r, t, n, i.value, e, d === !0)
          : l.length
            ? Promise.all(l).then(() => t)
            : t;
      }));
  }),
  Zi = V(`$ZodObjectJIT`, (e, t) => {
    Xi.init(e, t);
    let n = e._zod.parse,
      r = dt(() => Ji(t)),
      i = xn.memoizer,
      a = (t) => {
        let n = r.value,
          a = n.symbolKeys,
          o = new qr([`payload`, `ctx`], {
            shape: t,
            inst: e,
            memo: i,
            syms: a,
          }),
          s = (e) =>
            `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
          c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        o.write(`const input = payload.value;`);
        let l = Object.create(null),
          u = 0;
        for (let e of n.allKeys) l[e] = `key_${u++}`;
        o.write(
          i
            ? `const newResult = memo.alloc(inst, payload, {}, ctx);`
            : `const newResult = {};`,
        );
        for (let e of n.allKeys) {
          if (e === `__proto__`) continue;
          let n = l[e],
            r = typeof e == `symbol` ? `syms[${a.indexOf(e)}]` : Ct(e),
            i = `${r} in input`,
            u = t[e],
            d = u?._zod?.optin,
            f = d !== void 0,
            p = u?._zod?.optout === `optional`;
          if ((o.write(`const ${n} = ${s(r)};`), f && p)) {
            let e =
              d === `optional`
                ? `${n}_present`
                : `${n}.value !== undefined || ${n}_present`;
            o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
          } else
            f
              ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `),
                d === `defaulted`
                  ? o.write(`newResult[${r}] = ${n}.value;`)
                  : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `))
              : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
        }
        return (
          o.write(`payload.value = newResult;`),
          o.write(`return payload;`),
          o.compile()
        );
      },
      o,
      s = Et,
      c = !xn.jitless,
      l = c && Dt.value,
      u = t.catchall,
      d;
    e._zod.parse = (i, f) => {
      d ??= r.value;
      let p = i.value;
      return s(p)
        ? c && l && f?.async === !1 && f.jitless !== !0
          ? ((o ||= a(t.shape)),
            (i = o(i, f)),
            u ? Yi([], p, i, f, d, e, f?.abortEarly === !0) : i)
          : n(i, f)
        : (i.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: p,
            inst: e,
          }),
          i);
    };
  });
function Qi(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !Gt(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => Zt(e, r, Sn()))),
      }),
      t);
}
var $i = V(`$ZodUnion`, (e, t) => {
    (U.init(e, t),
      B(e, `optin`, (e) =>
        e.def.options.some((e) => e._zod.optin === `defaulted`)
          ? `defaulted`
          : e.def.options.some((e) => e._zod.optin !== void 0)
            ? `optional`
            : void 0,
      ),
      B(e, `optout`, (e) =>
        e.def.options.some((e) => e._zod.optout === `optional`)
          ? `optional`
          : void 0,
      ),
      B(e, `values`, (e) => {
        if (e.def.options.every((e) => e._zod.values))
          return new Set(
            e.def.options.flatMap((e) => Array.from(e._zod.values)),
          );
      }),
      B(e, `pattern`, (e) => {
        if (e.def.options.every((e) => e._zod.pattern)) {
          let t = e.def.options.map((e) => e._zod.pattern);
          return RegExp(`^(${t.map((e) => pt(e.source)).join(`|`)})$`);
        }
      }));
    let n = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (r, i) => {
      if (n) return n(r, i);
      let a = !1,
        o = [];
      for (let e of t.options) {
        let t = e._zod.run({ value: r.value, issues: [] }, i);
        if (t instanceof Promise) (o.push(t), (a = !0));
        else {
          if (t.issues.length === 0) return t;
          o.push(t);
        }
      }
      return a ? Promise.all(o).then((t) => Qi(t, r, e, i)) : Qi(o, r, e, i);
    };
  }),
  ea = V(`$ZodIntersection`, (e, t) => {
    (U.init(e, t),
      (e._zod.parse = (e, n) => {
        let r = e.value,
          i = t.left._zod.run({ value: r, issues: [] }, n),
          a = t.right._zod.run({ value: r, issues: [] }, n);
        return i instanceof Promise || a instanceof Promise
          ? Promise.all([i, a]).then(([t, n]) => na(e, t, n))
          : na(e, i, a);
      }));
  });
function ta(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (Ot(e) && Ot(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(i, `__proto__`) && delete i.__proto__;
    for (let n of r) {
      if (n === `__proto__`) continue;
      let r = ta(e[n], t[n]);
      if (!r.valid)
        return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = ta(i, a);
      if (!o.valid)
        return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function na(e, t, n) {
  let r = new Map(),
    i,
    a = new Map(),
    o = (e, t) => {
      let n;
      if (e.code === `unrecognized_keys` && !e.path?.length)
        ((i ??= e), (n = e.keys));
      else if (
        e.code === `invalid_key` &&
        e.origin === `record` &&
        e.path?.length === 1
      ) {
        let t = String(e.path[0]);
        (a.has(t) || a.set(t, e), (n = [t]));
      } else return !1;
      for (let e of n) (r.has(e) || r.set(e, {}), (r.get(e)[t] = !0));
      return !0;
    };
  for (let n of t.issues) o(n, `l`) || e.issues.push(n);
  for (let t of n.issues) o(t, `r`) || e.issues.push(t);
  let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if (s.length) {
    let t = i ? s.filter((e) => i.keys.includes(e)) : [];
    t.length && e.issues.push({ ...i, keys: t });
    for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
  }
  let c = ta(t.value, n.value);
  if (!c.valid) {
    if (Gt(e)) return e;
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`,
    );
  }
  return ((e.value = c.data), e);
}
var ra = V(`$ZodEnum`, (e, t) => {
    U.init(e, t);
    let n = ct(t.entries),
      r = new Set(n);
    ((e._zod.values = r),
      B(e, `pattern`, (e) => {
        let t = ct(e.def.entries).filter((e) => At.has(typeof e));
        return RegExp(
          t.length
            ? `^(${t.map((e) => jt(e.toString())).join(`|`)})$`
            : `^[^\\s\\S]$`,
        );
      }),
      (e._zod.parse = (t, i) => {
        let a = t.value;
        return (
          r.has(a) ||
            t.issues.push({
              code: `invalid_value`,
              values: n,
              input: a,
              inst: e,
            }),
          t
        );
      }));
  }),
  ia = V(`$ZodLiteral`, (e, t) => {
    U.init(e, t);
    let n = new Set(t.values);
    ((e._zod.values = n),
      B(e, `pattern`, (e) => {
        let t = e.def.values;
        return RegExp(
          t.length
            ? `^(${t.map((e) => (typeof e == `string` ? jt(e) : e ? jt(e.toString()) : String(e))).join(`|`)})$`
            : `^[^\\s\\S]$`,
        );
      }),
      (e._zod.parse = (r, i) => {
        let a = r.value;
        return (
          n.has(a) ||
            r.issues.push({
              code: `invalid_value`,
              values: t.values,
              input: a,
              inst: e,
            }),
          r
        );
      }));
  }),
  aa = V(`$ZodTransform`, (e, t) => {
    (U.init(e, t),
      (e._zod.optin = `optional`),
      xn.memoizer?.guard(e),
      (e._zod.parse = (n, r) => {
        if (r.direction === `backward`) throw new bn(e.constructor.name);
        let i = t.transform(n.value, n);
        if (r.async)
          return (i instanceof Promise ? i : Promise.resolve(i)).then(
            (e) => ((n.value = e), n),
          );
        if (i instanceof Promise) throw new yn();
        return ((n.value = i), n);
      }));
  });
function oa(e, t) {
  return ((e.value = t.issues.length ? void 0 : t.value), e);
}
var sa = V(`$ZodOptional`, (e, t) => {
    (U.init(e, t),
      B(e, `optin`, (e) =>
        e.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`,
      ),
      (e._zod.optout = `optional`),
      B(e, `values`, (e) => {
        let t = e.def.innerType._zod.values;
        return t ? new Set([...t, void 0]) : void 0;
      }),
      B(e, `pattern`, (e) => {
        let t = e.def.innerType._zod.pattern;
        return t ? RegExp(`^(${pt(t.source)})?$`) : void 0;
      }),
      (e._zod.parse = (e, n) => {
        if (e.value === void 0) {
          if (t.innerType._zod.optin !== `defaulted`) return e;
          let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
          return r instanceof Promise ? r.then((t) => oa(e, t)) : oa(e, r);
        }
        return t.innerType._zod.run(e, n);
      }));
  }),
  ca = V(`$ZodExactOptional`, (e, t) => {
    (sa.init(e, t),
      B(e, `values`, (e) => e.def.innerType._zod.values),
      B(e, `pattern`, (e) => e.def.innerType._zod.pattern),
      (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
  }),
  la = V(`$ZodNullable`, (e, t) => {
    (U.init(e, t),
      B(e, `optin`, (e) => e.def.innerType._zod.optin),
      B(e, `optout`, (e) => e.def.innerType._zod.optout),
      B(e, `pattern`, (e) => {
        let t = e.def.innerType._zod.pattern;
        return t ? RegExp(`^(${pt(t.source)}|null)$`) : void 0;
      }),
      B(e, `values`, (e) =>
        e.def.innerType._zod.values
          ? new Set([...e.def.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (e, n) =>
        e.value === null ? e : t.innerType._zod.run(e, n)));
  }),
  ua = V(`$ZodDefault`, (e, t) => {
    (U.init(e, t),
      (e._zod.optin = `defaulted`),
      B(e, `values`, (e) => e.def.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        if (e.value === void 0) return ((e.value = t.defaultValue), e);
        let r = t.innerType._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => da(e, t)) : da(r, t);
      }));
  });
function da(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
var fa = V(`$ZodPrefault`, (e, t) => {
    (U.init(e, t),
      (e._zod.optin = `defaulted`),
      B(e, `values`, (e) => e.def.innerType._zod.values),
      (e._zod.parse = (e, n) => (
        n.direction === `backward` ||
          (e.value === void 0 && (e.value = t.defaultValue)),
        t.innerType._zod.run(e, n)
      )));
  }),
  pa = V(`$ZodNonOptional`, (e, t) => {
    (U.init(e, t),
      B(e, `values`, (e) => {
        let t = e.def.innerType._zod.values;
        return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        let i = t.innerType._zod.run(n, r);
        return i instanceof Promise ? i.then((t) => ma(t, e)) : ma(i, e);
      }));
  });
function ma(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: e.value,
        inst: t,
      }),
    e
  );
}
function ha(e, t, n, r) {
  return t.issues.length
    ? ((e.value = n.catchValue({
        ...t,
        value: e.value,
        error: { issues: t.issues.map((e) => Zt(e, r, Sn())) },
        input: e.value,
      })),
      e)
    : ((e.value = t.value), t.memo && (e.memo = !0), e);
}
var ga = V(`$ZodCatch`, (e, t) => {
    (U.init(e, t),
      B(e, `optin`, (e) =>
        e.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`,
      ),
      B(e, `optout`, (e) => e.def.innerType._zod.optout),
      B(e, `values`, (e) => e.def.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
        return r instanceof Promise
          ? r.then((r) => ha(e, r, t, n))
          : ha(e, r, t, n);
      }));
  }),
  _a = V(`$ZodPipe`, (e, t) => {
    (U.init(e, t),
      B(e, `values`, (e) => e.def.in._zod.values),
      B(e, `optin`, (e) => e.def.in._zod.optin),
      B(e, `optout`, (e) => e.def.out._zod.optout),
      B(e, `propValues`, (e) => e.def.in._zod.propValues),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) {
          let r = t.out._zod.run(e, n);
          return r instanceof Promise
            ? r.then((e) => va(e, t.in, n))
            : va(r, t.in, n);
        }
        let r = t.in._zod.run(e, n);
        return r instanceof Promise
          ? r.then((e) => va(e, t.out, n))
          : va(r, t.out, n);
      }));
  });
function va(e, t, n) {
  return e.issues.some((e) => e.code !== `unrecognized_keys`)
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, n);
}
var ya = V(`$ZodCodec`, (e, t) => {
  (U.init(e, t),
    B(e, `values`, (e) => e.def.in._zod.values),
    B(e, `optin`, (e) => e.def.in._zod.optin),
    B(e, `optout`, (e) => e.def.out._zod.optout),
    B(e, `propValues`, (e) => e.def.in._zod.propValues),
    (e._zod.parse = (e, n) => {
      if ((n.direction || `forward`) === `forward`) {
        let r = t.in._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => ba(e, t, n)) : ba(r, t, n);
      }
      {
        let r = t.out._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => ba(e, t, n)) : ba(r, t, n);
      }
    }));
});
function ba(e, t, n) {
  if (e.issues.length) return ((e.aborted = !0), e);
  if ((n.direction || `forward`) === `forward`) {
    let r = t.transform(e.value, e);
    return r instanceof Promise
      ? r.then((r) => xa(e, r, t.out, n))
      : xa(e, r, t.out, n);
  }
  {
    let r = t.reverseTransform(e.value, e);
    return r instanceof Promise
      ? r.then((r) => xa(e, r, t.in, n))
      : xa(e, r, t.in, n);
  }
}
function xa(e, t, n, r) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : n._zod.run({ value: t, issues: e.issues }, r);
}
var Sa = V(`$ZodReadonly`, (e, t) => {
  (U.init(e, t),
    B(e, `propValues`, (e) => e.def.innerType._zod.propValues),
    B(e, `values`, (e) => e.def.innerType._zod.values),
    B(e, `optin`, (e) => e.def.innerType?._zod?.optin),
    B(e, `optout`, (e) => e.def.innerType?._zod?.optout),
    (e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      let r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(Ca) : Ca(r);
    }));
});
function Ca(e) {
  return (e.memo || (e.value = Object.freeze(e.value)), e);
}
var wa = V(`$ZodCustom`, (e, t) => {
  (H.init(e, t),
    U.init(e, t),
    (e._zod.parse = (e, t) => e),
    (e._zod.check = (n) => {
      let r = n.value,
        i = t.fn(r);
      if (i instanceof Promise) return i.then((t) => Ta(t, n, r, e));
      Ta(i, n, r, e);
    }));
});
function Ta(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(tn(e)));
  }
}
var Ea = class extends Error {
    constructor() {
      (super(`Cannot parse a reference cycle that closes through a transform`),
        (this.name = `ZodCyclicError`));
    }
  },
  Da = `~memo`,
  Oa = [];
function ka(e) {
  return typeof e == `object` && !!e;
}
function Aa(e) {
  return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }));
}
var ja = new WeakMap(),
  Ma = 0,
  Na = 1,
  Pa = 2;
function Fa(e, t, n) {
  let r = ja.get(e);
  if (r !== void 0) return r ? Pa : Ma;
  if (t.has(e)) return Pa;
  t.add(e);
  let i = Ma,
    a = (e) => {
      if (i !== Pa && e?._zod) {
        let r = Fa(e, t, n);
        r > i && (i = r);
      }
    },
    o = (e, r) => {
      let i = Ma;
      for (let a of Reflect.ownKeys(e)) {
        let o = Object.getOwnPropertyDescriptor(e, a);
        if (r && !o.enumerable) continue;
        let s = o.get ? Na : o.value?._zod ? Fa(o.value, t, n) : Ma;
        s > i && (i = s);
      }
      return i;
    },
    s = (e) => {
      e > i && (i = e);
    },
    c = e._zod.def;
  switch (c.type) {
    case `object`: {
      let e = gt(c);
      (s(e ? o(e, !0) : Na), a(c.catchall));
      break;
    }
    case `array`:
      a(c.element);
      break;
    case `tuple`:
      for (let e of c.items) a(e);
      a(c.rest);
      break;
    case `record`:
    case `map`:
      (a(c.keyType), a(c.valueType));
      break;
    case `set`:
      a(c.valueType);
      break;
    case `union`:
      for (let e of c.options) a(e);
      break;
    case `intersection`:
      (a(c.left), a(c.right));
      break;
    case `optional`:
    case `nullable`:
    case `default`:
    case `prefault`:
    case `catch`:
    case `readonly`:
    case `nonoptional`:
    case `promise`:
    case `success`:
      a(c.innerType);
      break;
    case `pipe`:
      (a(c.in), a(c.out));
      break;
    case `function`:
      (a(c.input), a(c.output));
      break;
    case `lazy`: {
      let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
      s(r ? Fa(r, t, !1) : Na);
      break;
    }
    case `template_literal`:
    case `string`:
    case `number`:
    case `int`:
    case `boolean`:
    case `bigint`:
    case `symbol`:
    case `undefined`:
    case `null`:
    case `void`:
    case `never`:
    case `any`:
    case `unknown`:
    case `date`:
    case `nan`:
    case `enum`:
    case `literal`:
    case `file`:
    case `transform`:
    case `custom`:
      break;
    default:
      for (let e in c) {
        let t = Object.getOwnPropertyDescriptor(c, e);
        if (!t || t.get) continue;
        let n = t.value;
        if (n && typeof n == `object`) {
          if (n._zod) a(n);
          else if (Array.isArray(n)) for (let e of n) a(e);
        }
      }
  }
  return (t.delete(e), Ia(e, i));
}
function Ia(e, t) {
  return (t !== Na && ja.set(e, t === Pa), t);
}
function La(e, t) {
  let n = e.buckets.get(t);
  return (n || ((n = new WeakMap()), e.buckets.set(t, n)), n);
}
var Ra,
  za = [],
  Ba = {
    alloc(e, t, n) {
      let r = Ra;
      if (!r) return n;
      Ra = void 0;
      let i = { value: n, issues: null };
      return (r.set(t.value, i), za.push(i), n);
    },
    guard(e) {
      var t;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          let t = e._zod.parse,
            n = (e, n) => {
              if (n.direction !== `backward` && Ha(n, e.value)) throw new Ea();
              return t(e, n);
            };
          ((e._zod.parse = n), e._zod.run === t && (e._zod.run = n));
        }));
    },
    attach(e) {
      var t;
      let n,
        r = !1,
        i,
        a;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          let t = e._zod.parse,
            o = (s, c) => {
              if (n === void 0) {
                let i = Fa(e, new Set(), !1);
                if (i === Ma)
                  return (
                    (e._zod.parse = t),
                    e._zod.run === o && (e._zod.run = t),
                    t(s, c)
                  );
                i === Pa || r ? (n = !0) : (r = !0);
              }
              let l = s.value;
              if (!ka(l)) return t(s, c);
              let u = c[Da];
              u ||
                ((u = { buckets: new WeakMap(), backEdges: void 0 }),
                (c[Da] = u));
              let d;
              i === c ? (d = a) : ((d = La(u, e)), (i = c), (a = d));
              let f = d.get(l);
              if (f)
                return (
                  (s.value = f.value),
                  f.issues
                    ? f.issues.length && s.issues.push(...Aa(f.issues))
                    : ((s.memo = !0),
                      u.backEdges ?? (u.backEdges = new WeakSet()),
                      u.backEdges.add(f.value)),
                  s
                );
              Ra = d;
              let p = za.length,
                m = t(s, c);
              Ra = void 0;
              let h = za.length > p ? za.pop() : void 0;
              return m instanceof Promise
                ? m.then(
                    (e) => (
                      h && (h.issues = e.issues.length ? Aa(e.issues) : Oa),
                      e
                    ),
                  )
                : (h && (h.issues = m.issues.length ? Aa(m.issues) : Oa), m);
            };
          ((e._zod.parse = o), e._zod.run === t && (e._zod.run = o));
        }));
    },
  };
function Va() {
  return Ba;
}
function Ha(e, t) {
  let n = e[Da]?.backEdges;
  return n !== void 0 && ka(t) && n.has(t);
}
var Ua = () => {
  let e = {
    string: { unit: `حرف`, verb: `أن يحوي` },
    file: { unit: `بايت`, verb: `أن يحوي` },
    array: { unit: `عنصر`, verb: `أن يحوي` },
    set: { unit: `عنصر`, verb: `أن يحوي` },
    map: { unit: `عنصر`, verb: `أن يحوي` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `مدخل`,
      email: `بريد إلكتروني`,
      url: `رابط`,
      emoji: `إيموجي`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `تاريخ ووقت بمعيار ISO`,
      date: `تاريخ بمعيار ISO`,
      time: `وقت بمعيار ISO`,
      duration: `مدة بمعيار ISO`,
      ipv4: `عنوان IPv4`,
      ipv6: `عنوان IPv6`,
      mac: `عنوان MAC`,
      cidrv4: `مدى عناوين بصيغة IPv4`,
      cidrv6: `مدى عناوين بصيغة IPv6`,
      base64: `نَص بترميز base64-encoded`,
      base64url: `نَص بترميز base64url-encoded`,
      json_string: `نَص على هيئة JSON`,
      e164: `رقم هاتف بمعيار E.164`,
      credit_card: `رقم بطاقة الائتمان`,
      currency_code: `رمز العملة`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `مدخل`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${e.expected}، ولكن تم إدخال ${i}`
          : `مدخلات غير مقبولة: يفترض إدخال ${t}، ولكن تم إدخال ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `مدخلات غير مقبولة: يفترض إدخال ${R(e.values[0])}`
          : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? ` أكبر من اللازم: يفترض أن تكون ${e.origin ?? `القيمة`} ${n} ${e.maximum.toString()} ${r.unit ?? `عنصر`}`
          : `أكبر من اللازم: يفترض أن تكون ${e.origin ?? `القيمة`} ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()} ${r.unit}`
          : `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `نَص غير مقبول: يجب أن يبدأ بـ "${e.prefix}"`
          : t.format === `ends_with`
            ? `نَص غير مقبول: يجب أن ينتهي بـ "${t.suffix}"`
            : t.format === `includes`
              ? `نَص غير مقبول: يجب أن يتضمَّن "${t.includes}"`
              : t.format === `regex`
                ? `نَص غير مقبول: يجب أن يطابق النمط ${t.pattern}`
                : `${n[t.format] ?? e.format} غير مقبول`;
      }
      case `not_multiple_of`:
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${e.divisor}`;
      case `unrecognized_keys`:
        return `معرف${e.keys.length > 1 ? `ات` : ``} غريب${e.keys.length > 1 ? `ة` : ``}: ${I(e.keys, `، `)}`;
      case `invalid_key`:
        return `معرف غير مقبول في ${e.origin}`;
      case `invalid_union`:
        return `مدخل غير مقبول`;
      case `invalid_element`:
        return `مدخل غير مقبول في ${e.origin}`;
      default:
        return `مدخل غير مقبول`;
    }
  };
};
function Wa() {
  return { localeError: Ua() };
}
var Ga = () => {
  let e = {
    string: { unit: `simvol`, verb: `olmalıdır` },
    file: { unit: `bayt`, verb: `olmalıdır` },
    array: { unit: `element`, verb: `olmalıdır` },
    set: { unit: `element`, verb: `olmalıdır` },
    map: { unit: `element`, verb: `olmalıdır` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `email address`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO datetime`,
      date: `ISO date`,
      time: `ISO time`,
      duration: `ISO duration`,
      ipv4: `IPv4 address`,
      ipv6: `IPv6 address`,
      mac: `MAC address`,
      cidrv4: `IPv4 range`,
      cidrv6: `IPv6 range`,
      base64: `base64-encoded string`,
      base64url: `base64url-encoded string`,
      json_string: `JSON string`,
      e164: `E.164 number`,
      credit_card: `kredit kartı nömrəsi`,
      currency_code: `valyuta kodu`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Yanlış dəyər: gözlənilən instanceof ${e.expected}, daxil olan ${i}`
          : `Yanlış dəyər: gözlənilən ${t}, daxil olan ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Yanlış dəyər: gözlənilən ${R(e.values[0])}`
          : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Çox böyük: gözlənilən ${e.origin ?? `dəyər`} ${n}${e.maximum.toString()} ${r.unit ?? `element`}`
          : `Çox böyük: gözlənilən ${e.origin ?? `dəyər`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()} ${r.unit}`
          : `Çox kiçik: gözlənilən ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Yanlış mətn: "${t.prefix}" ilə başlamalıdır`
          : t.format === `ends_with`
            ? `Yanlış mətn: "${t.suffix}" ilə bitməlidir`
            : t.format === `includes`
              ? `Yanlış mətn: "${t.includes}" daxil olmalıdır`
              : t.format === `regex`
                ? `Yanlış mətn: ${t.pattern} şablonuna uyğun olmalıdır`
                : `Yanlış ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Yanlış ədəd: ${e.divisor} ilə bölünə bilən olmalıdır`;
      case `unrecognized_keys`:
        return `Tanınmayan açar${e.keys.length > 1 ? `lar` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} daxilində yanlış açar`;
      case `invalid_union`:
        return `Yanlış dəyər`;
      case `invalid_element`:
        return `${e.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
};
function Ka() {
  return { localeError: Ga() };
}
function qa(e, t, n, r) {
  let i = Math.abs(e),
    a = i % 10,
    o = i % 100;
  return o >= 11 && o <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r;
}
var Ja = () => {
  let e = {
    string: {
      unit: { one: `сімвал`, few: `сімвалы`, many: `сімвалаў` },
      verb: `мець`,
    },
    array: {
      unit: { one: `элемент`, few: `элементы`, many: `элементаў` },
      verb: `мець`,
    },
    set: {
      unit: { one: `элемент`, few: `элементы`, many: `элементаў` },
      verb: `мець`,
    },
    map: {
      unit: { one: `элемент`, few: `элементы`, many: `элементаў` },
      verb: `мець`,
    },
    file: { unit: { one: `байт`, few: `байты`, many: `байтаў` }, verb: `мець` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `увод`,
      email: `email адрас`,
      url: `URL`,
      emoji: `эмодзі`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO дата і час`,
      date: `ISO дата`,
      time: `ISO час`,
      duration: `ISO працягласць`,
      ipv4: `IPv4 адрас`,
      ipv6: `IPv6 адрас`,
      mac: `MAC адрас`,
      cidrv4: `IPv4 дыяпазон`,
      cidrv6: `IPv6 дыяпазон`,
      base64: `радок у фармаце base64`,
      base64url: `радок у фармаце base64url`,
      json_string: `JSON радок`,
      e164: `нумар E.164`,
      credit_card: `нумар крэдытнай карты`,
      currency_code: `код валюты`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `увод`,
    },
    r = { nan: `NaN`, number: `лік`, array: `масіў` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Няправільны ўвод: чакаўся instanceof ${e.expected}, атрымана ${i}`
          : `Няправільны ўвод: чакаўся ${t}, атрымана ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Няправільны ўвод: чакалася ${R(e.values[0])}`
          : `Няправільны варыянт: чакаўся адзін з ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        if (r) {
          let t = qa(Number(e.maximum), r.unit.one, r.unit.few, r.unit.many);
          return `Занадта вялікі: чакалася, што ${e.origin ?? `значэнне`} павінна ${r.verb} ${n}${e.maximum.toString()} ${t}`;
        }
        return `Занадта вялікі: чакалася, што ${e.origin ?? `значэнне`} павінна быць ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        if (r) {
          let t = qa(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
          return `Занадта малы: чакалася, што ${e.origin} павінна ${r.verb} ${n}${e.minimum.toString()} ${t}`;
        }
        return `Занадта малы: чакалася, што ${e.origin} павінна быць ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Няправільны радок: павінен пачынацца з "${t.prefix}"`
          : t.format === `ends_with`
            ? `Няправільны радок: павінен заканчвацца на "${t.suffix}"`
            : t.format === `includes`
              ? `Няправільны радок: павінен змяшчаць "${t.includes}"`
              : t.format === `regex`
                ? `Няправільны радок: павінен адпавядаць шаблону ${t.pattern}`
                : `Няправільны ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Няправільны лік: павінен быць кратным ${e.divisor}`;
      case `unrecognized_keys`:
        return `Нераспазнаны ${e.keys.length > 1 ? `ключы` : `ключ`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Няправільны ключ у ${e.origin}`;
      case `invalid_union`:
        return `Няправільны ўвод`;
      case `invalid_element`:
        return `Няправільнае значэнне ў ${e.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};
function Ya() {
  return { localeError: Ja() };
}
var Xa = () => {
  let e = {
    string: { unit: `символа`, verb: `да съдържа` },
    file: { unit: `байта`, verb: `да съдържа` },
    array: { unit: `елемента`, verb: `да съдържа` },
    set: { unit: `елемента`, verb: `да съдържа` },
    map: { unit: `елемента`, verb: `да съдържа` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `вход`,
      email: `имейл адрес`,
      url: `URL`,
      emoji: `емоджи`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO време`,
      date: `ISO дата`,
      time: `ISO време`,
      duration: `ISO продължителност`,
      ipv4: `IPv4 адрес`,
      ipv6: `IPv6 адрес`,
      mac: `MAC адрес`,
      cidrv4: `IPv4 диапазон`,
      cidrv6: `IPv6 диапазон`,
      base64: `base64-кодиран низ`,
      base64url: `base64url-кодиран низ`,
      json_string: `JSON низ`,
      e164: `E.164 номер`,
      credit_card: `номер на кредитна карта`,
      currency_code: `код на валута`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `вход`,
    },
    r = { nan: `NaN`, number: `число`, array: `масив` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Невалиден вход: очакван instanceof ${e.expected}, получен ${i}`
          : `Невалиден вход: очакван ${t}, получен ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Невалиден вход: очакван ${R(e.values[0])}`
          : `Невалидна опция: очаквано едно от ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Твърде голямо: очаква се ${e.origin ?? `стойност`} да съдържа ${n}${e.maximum.toString()} ${r.unit ?? `елемента`}`
          : `Твърде голямо: очаква се ${e.origin ?? `стойност`} да бъде ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Твърде малко: очаква се ${e.origin} да съдържа ${n}${e.minimum.toString()} ${r.unit}`
          : `Твърде малко: очаква се ${e.origin} да бъде ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        if (t.format === `starts_with`)
          return `Невалиден низ: трябва да започва с "${t.prefix}"`;
        if (t.format === `ends_with`)
          return `Невалиден низ: трябва да завършва с "${t.suffix}"`;
        if (t.format === `includes`)
          return `Невалиден низ: трябва да включва "${t.includes}"`;
        if (t.format === `regex`)
          return `Невалиден низ: трябва да съвпада с ${t.pattern}`;
        let r = `Невалиден`;
        return (
          t.format === `emoji` && (r = `Невалидно`),
          t.format === `datetime` && (r = `Невалидно`),
          t.format === `date` && (r = `Невалидна`),
          t.format === `time` && (r = `Невалидно`),
          t.format === `duration` && (r = `Невалидна`),
          `${r} ${n[t.format] ?? e.format}`
        );
      }
      case `not_multiple_of`:
        return `Невалидно число: трябва да бъде кратно на ${e.divisor}`;
      case `unrecognized_keys`:
        return `Неразпознат${e.keys.length > 1 ? `и` : ``} ключ${e.keys.length > 1 ? `ове` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Невалиден ключ в ${e.origin}`;
      case `invalid_union`:
        return `Невалиден вход`;
      case `invalid_element`:
        return `Невалидна стойност в ${e.origin}`;
      default:
        return `Невалиден вход`;
    }
  };
};
function Za() {
  return { localeError: Xa() };
}
var Qa = () => {
  let e = {
    string: { unit: `অক্ষর`, verb: `থাকতে হবে` },
    file: { unit: `বাইট`, verb: `থাকতে হবে` },
    array: { unit: `আইটেম`, verb: `থাকতে হবে` },
    set: { unit: `আইটেম`, verb: `থাকতে হবে` },
    map: { unit: `এন্ট্রি`, verb: `থাকতে হবে` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ইনপুট`,
      email: `ইমেইল ঠিকানা`,
      url: `URL`,
      emoji: `ইমোজি`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO তারিখ ও সময়`,
      date: `ISO তারিখ`,
      time: `ISO সময়`,
      duration: `ISO সময়কাল`,
      ipv4: `IPv4 ঠিকানা`,
      ipv6: `IPv6 ঠিকানা`,
      mac: `MAC ঠিকানা`,
      cidrv4: `IPv4 রেঞ্জ`,
      cidrv6: `IPv6 রেঞ্জ`,
      base64: `base64-এনকোডেড স্ট্রিং`,
      base64url: `base64url-এনকোডেড স্ট্রিং`,
      json_string: `JSON স্ট্রিং`,
      e164: `E.164 নম্বর`,
      credit_card: `ক্রেডিট কার্ড নম্বর`,
      currency_code: `মুদ্রা কোড`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ইনপুট`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `অবৈধ ইনপুট: প্রত্যাশিত ${t}, প্রাপ্ত ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `অবৈধ ইনপুট: প্রত্যাশিত ${R(e.values[0])}`
          : `অবৈধ অপশন: ${I(e.values, ` | `)} এর মধ্যে একটি প্রত্যাশিত`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `অনেক বড়: ${e.origin ?? `মান`} ${n}${e.maximum.toString()} ${r.unit ?? `এলিমেন্ট`} হতে হবে`
          : `অনেক বড়: ${e.origin ?? `মান`} ${n}${e.maximum.toString()} হতে হবে`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `অনেক ছোট: ${e.origin} ${n}${e.minimum.toString()} ${r.unit} হতে হবে`
          : `অনেক ছোট: ${e.origin} ${n}${e.minimum.toString()} হতে হবে`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `অবৈধ স্ট্রিং: "${t.prefix}" দিয়ে শুরু হতে হবে`
          : t.format === `ends_with`
            ? `অবৈধ স্ট্রিং: "${t.suffix}" দিয়ে শেষ হতে হবে`
            : t.format === `includes`
              ? `অবৈধ স্ট্রিং: "${t.includes}" অন্তর্ভুক্ত থাকতে হবে`
              : t.format === `regex`
                ? `অবৈধ স্ট্রিং: ${t.pattern} প্যাটার্ন মিলতে হবে`
                : `অবৈধ ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `অবৈধ নম্বর: ${e.divisor} এর গুণিতক হতে হবে`;
      case `unrecognized_keys`:
        return `অচেনা কী${e.keys.length > 1 ? `গুলো` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} এ অবৈধ কী`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `অবৈধ ইনপুট`;
      case `invalid_element`:
        return `${e.origin} এ অবৈধ মান`;
      default:
        return `অবৈধ ইনপুট`;
    }
  };
};
function $a() {
  return { localeError: Qa() };
}
var eo = () => {
  let e = {
    string: { unit: `caràcters`, verb: `contenir` },
    file: { unit: `bytes`, verb: `contenir` },
    array: { unit: `elements`, verb: `contenir` },
    set: { unit: `elements`, verb: `contenir` },
    map: { unit: `elements`, verb: `contenir` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `entrada`,
      email: `adreça electrònica`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `data i hora ISO`,
      date: `data ISO`,
      time: `hora ISO`,
      duration: `durada ISO`,
      ipv4: `adreça IPv4`,
      ipv6: `adreça IPv6`,
      mac: `adreça MAC`,
      cidrv4: `rang IPv4`,
      cidrv6: `rang IPv6`,
      base64: `cadena codificada en base64`,
      base64url: `cadena codificada en base64url`,
      json_string: `cadena JSON`,
      e164: `número E.164`,
      credit_card: `número de targeta de crèdit`,
      currency_code: `codi de moneda`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `entrada`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Tipus invàlid: s'esperava instanceof ${e.expected}, s'ha rebut ${i}`
          : `Tipus invàlid: s'esperava ${t}, s'ha rebut ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Valor invàlid: s'esperava ${R(e.values[0])}`
          : `Opció invàlida: s'esperava una de ${I(e.values, ` o `)}`;
      case `too_big`: {
        let n = e.inclusive ? `com a màxim` : `menys de`,
          r = t(e.origin);
        return r
          ? `Massa gran: s'esperava que ${e.origin ?? `el valor`} contingués ${n} ${e.maximum.toString()} ${r.unit ?? `elements`}`
          : `Massa gran: s'esperava que ${e.origin ?? `el valor`} fos ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `com a mínim` : `més de`,
          r = t(e.origin);
        return r
          ? `Massa petit: s'esperava que ${e.origin} contingués ${n} ${e.minimum.toString()} ${r.unit}`
          : `Massa petit: s'esperava que ${e.origin} fos ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Format invàlid: ha de començar amb "${t.prefix}"`
          : t.format === `ends_with`
            ? `Format invàlid: ha d'acabar amb "${t.suffix}"`
            : t.format === `includes`
              ? `Format invàlid: ha d'incloure "${t.includes}"`
              : t.format === `regex`
                ? `Format invàlid: ha de coincidir amb el patró ${t.pattern}`
                : `Format invàlid per a ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Número invàlid: ha de ser múltiple de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Clau${e.keys.length > 1 ? `s` : ``} no reconeguda${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Clau invàlida a ${e.origin}`;
      case `invalid_union`:
        return `Entrada invàlida`;
      case `invalid_element`:
        return `Element invàlid a ${e.origin}`;
      default:
        return `Entrada invàlida`;
    }
  };
};
function to() {
  return { localeError: eo() };
}
var no = () => {
  let e = {
    string: { unit: `پیت`, verb: `بێت` },
    file: { unit: `بایت`, verb: `بێت` },
    array: { unit: `دانە`, verb: `بێت` },
    set: { unit: `دانە`, verb: `بێت` },
    map: { unit: `دانە`, verb: `بێت` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `regex`,
      email: `ئیمەیڵ`,
      url: `بەستەر (URL)`,
      emoji: `ئیمۆجی`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ڕێکەوت و کات`,
      date: `ڕێکەوت`,
      time: `کات`,
      duration: `ماوە`,
      ipv4: `ناونیشانی IPv4`,
      ipv6: `ناونیشانی IPv6`,
      mac: `ناونیشانی MAC`,
      cidrv4: `مەودای IPv4`,
      cidrv6: `مەودای IPv6`,
      base64: `دەقی base64`,
      base64url: `دەقی base64url`,
      json_string: `دەقی JSON`,
      e164: `ژمارەی E.164`,
      credit_card: `ژمارەی کارتی کرێدیت`,
      currency_code: `کۆدی دراو`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `تێکردە`,
    },
    r = {
      nan: `NaN`,
      string: `نووسین`,
      number: `ژمارە`,
      boolean: `boolean`,
      array: `array`,
      object: `object`,
      date: `ڕێکەوت`,
      integer: `ژمارە`,
      float: `ژمارە`,
      null: `null`,
      undefined: `undefined`,
      function: `function`,
      symbol: `symbol`,
      unknown: `unknown`,
      promise: `promise`,
      void: `void`,
      never: `never`,
      map: `map`,
      set: `set`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n,
          a = [`ا`, `و`, `ۆ`, `وو`, `ە`, `ی`, `ێ`].some((e) => i.endsWith(e))
            ? `یە`
            : `ە`,
          o = /^[a-zA-Z]+$/.test(i);
        return n === `null` || n === `undefined`
          ? `داواکراوە`
          : `چاوەڕوانکراوە ${t} بێت، بەڵام ${i}${o ? `` : a}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `بەهاکە نادرووستە: چاوەڕوانکراوە ${R(e.values[0])} بێت`
          : `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = t(e.origin);
        return n
          ? `پێویستە بە لایەنی زۆرەوە ${e.maximum.toString()} ${n.unit} ${n.verb}`
          : `پێویستە بە لایەنی زۆرەوە ${e.maximum.toString()} بێت`;
      }
      case `too_small`: {
        let n = t(e.origin);
        return n
          ? `پێویستە بە لایەنی کەمەوە ${e.minimum.toString()} ${n.unit} ${n.verb}`
          : `پێویستە بە لایەنی کەمەوە ${e.minimum.toString()} بێت`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `دەقی نادروست: پێویستە دەستپێبکات بە "${t.prefix}"`
          : t.format === `ends_with`
            ? `دەقی نادروست: پێویستە کۆتاییبێت بە "${t.suffix}"`
            : t.format === `includes`
              ? `دەقی نادروست: پێویستە "${t.includes}" لەخۆبگرێت`
              : t.format === `regex`
                ? `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${t.pattern} بگونجێت`
                : `بەهای ${n[t.format] ?? e.format} نادروستە`;
      }
      case `not_multiple_of`:
        return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${e.divisor}`;
      case `unrecognized_keys`:
        return `کلیلی نەناسراو: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `کلیلی نادروست لە ${e.origin}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `یەکگرتنی نادروست`;
      case `invalid_element`:
        return `${e.origin} بەهاکە نادروستە`;
      default:
        return `تێکردەی نادروست`;
    }
  };
};
function ro() {
  return { localeError: no() };
}
var io = () => {
  let e = {
    string: { unit: `znaků`, verb: `mít` },
    file: { unit: `bajtů`, verb: `mít` },
    array: { unit: `prvků`, verb: `mít` },
    set: { unit: `prvků`, verb: `mít` },
    map: { unit: `prvků`, verb: `mít` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `regulární výraz`,
      email: `e-mailová adresa`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `datum a čas ve formátu ISO`,
      date: `datum ve formátu ISO`,
      time: `čas ve formátu ISO`,
      duration: `doba trvání ISO`,
      ipv4: `IPv4 adresa`,
      ipv6: `IPv6 adresa`,
      mac: `MAC adresa`,
      cidrv4: `rozsah IPv4`,
      cidrv6: `rozsah IPv6`,
      base64: `řetězec zakódovaný ve formátu base64`,
      base64url: `řetězec zakódovaný ve formátu base64url`,
      json_string: `řetězec ve formátu JSON`,
      e164: `číslo E.164`,
      credit_card: `číslo kreditní karty`,
      currency_code: `kód měny`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `vstup`,
    },
    r = {
      nan: `NaN`,
      number: `číslo`,
      string: `řetězec`,
      function: `funkce`,
      array: `pole`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Neplatný vstup: očekáváno instanceof ${e.expected}, obdrženo ${i}`
          : `Neplatný vstup: očekáváno ${t}, obdrženo ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Neplatný vstup: očekáváno ${R(e.values[0])}`
          : `Neplatná možnost: očekávána jedna z hodnot ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Hodnota je příliš velká: ${e.origin ?? `hodnota`} musí mít ${n}${e.maximum.toString()} ${r.unit ?? `prvků`}`
          : `Hodnota je příliš velká: ${e.origin ?? `hodnota`} musí být ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Hodnota je příliš malá: ${e.origin ?? `hodnota`} musí mít ${n}${e.minimum.toString()} ${r.unit ?? `prvků`}`
          : `Hodnota je příliš malá: ${e.origin ?? `hodnota`} musí být ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Neplatný řetězec: musí začínat na "${t.prefix}"`
          : t.format === `ends_with`
            ? `Neplatný řetězec: musí končit na "${t.suffix}"`
            : t.format === `includes`
              ? `Neplatný řetězec: musí obsahovat "${t.includes}"`
              : t.format === `regex`
                ? `Neplatný řetězec: musí odpovídat vzoru ${t.pattern}`
                : `Neplatný formát ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Neplatné číslo: musí být násobkem ${e.divisor}`;
      case `unrecognized_keys`:
        return `Neznámé klíče: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Neplatný klíč v ${e.origin}`;
      case `invalid_union`:
        return `Neplatný vstup`;
      case `invalid_element`:
        return `Neplatná hodnota v ${e.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
function ao() {
  return { localeError: io() };
}
var oo = () => {
  let e = {
    string: { unit: `tegn`, verb: `havde` },
    file: { unit: `bytes`, verb: `havde` },
    array: { unit: `elementer`, verb: `indeholdt` },
    set: { unit: `elementer`, verb: `indeholdt` },
    map: { unit: `elementer`, verb: `indeholdt` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `e-mailadresse`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO dato- og klokkeslæt`,
      date: `ISO-dato`,
      time: `ISO-klokkeslæt`,
      duration: `ISO-varighed`,
      ipv4: `IPv4-adresse`,
      ipv6: `IPv6-adresse`,
      mac: `MAC-adresse`,
      cidrv4: `IPv4-spektrum`,
      cidrv6: `IPv6-spektrum`,
      base64: `base64-kodet streng`,
      base64url: `base64url-kodet streng`,
      json_string: `JSON-streng`,
      e164: `E.164-nummer`,
      credit_card: `kreditkortnummer`,
      currency_code: `valutakode`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = {
      nan: `NaN`,
      string: `streng`,
      number: `tal`,
      boolean: `boolean`,
      array: `liste`,
      object: `objekt`,
      set: `sæt`,
      file: `fil`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ugyldigt input: forventede instanceof ${e.expected}, fik ${i}`
          : `Ugyldigt input: forventede ${t}, fik ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ugyldig værdi: forventede ${R(e.values[0])}`
          : `Ugyldigt valg: forventede en af følgende ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `For stor: forventede ${a ?? `value`} ${i.verb} ${n} ${e.maximum.toString()} ${i.unit ?? `elementer`}`
          : `For stor: forventede ${a ?? `value`} havde ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `For lille: forventede ${a} ${i.verb} ${n} ${e.minimum.toString()} ${i.unit}`
          : `For lille: forventede ${a} havde ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ugyldig streng: skal starte med "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ugyldig streng: skal ende med "${t.suffix}"`
            : t.format === `includes`
              ? `Ugyldig streng: skal indeholde "${t.includes}"`
              : t.format === `regex`
                ? `Ugyldig streng: skal matche mønsteret ${t.pattern}`
                : `Ugyldig ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldigt tal: skal være deleligt med ${e.divisor}`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Ukendte nøgler` : `Ukendt nøgle`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøgle i ${e.origin}`;
      case `invalid_union`:
        return `Ugyldigt input: matcher ingen af de tilladte typer`;
      case `invalid_element`:
        return `Ugyldig værdi i ${e.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function so() {
  return { localeError: oo() };
}
var co = () => {
  let e = {
    string: { unit: `Zeichen`, verb: `zu haben` },
    file: { unit: `Bytes`, verb: `zu haben` },
    array: { unit: `Elemente`, verb: `zu haben` },
    set: { unit: `Elemente`, verb: `zu haben` },
    map: { unit: `Elemente`, verb: `zu haben` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `Eingabe`,
      email: `E-Mail-Adresse`,
      url: `URL`,
      emoji: `Emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO-Datum und -Uhrzeit`,
      date: `ISO-Datum`,
      time: `ISO-Uhrzeit`,
      duration: `ISO-Dauer`,
      ipv4: `IPv4-Adresse`,
      ipv6: `IPv6-Adresse`,
      mac: `MAC-Adresse`,
      cidrv4: `IPv4-Bereich`,
      cidrv6: `IPv6-Bereich`,
      base64: `Base64-codierter String`,
      base64url: `Base64-URL-codierter String`,
      json_string: `JSON-String`,
      e164: `E.164-Nummer`,
      credit_card: `Kreditkartennummer`,
      currency_code: `Währungscode`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `Eingabe`,
    },
    r = { nan: `NaN`, number: `Zahl`, array: `Array` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ungültige Eingabe: erwartet instanceof ${e.expected}, erhalten ${i}`
          : `Ungültige Eingabe: erwartet ${t}, erhalten ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ungültige Eingabe: erwartet ${R(e.values[0])}`
          : `Ungültige Option: erwartet eine von ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Zu groß: erwartet, dass ${e.origin ?? `Wert`} ${n}${e.maximum.toString()} ${r.unit ?? `Elemente`} hat`
          : `Zu groß: erwartet, dass ${e.origin ?? `Wert`} ${n}${e.maximum.toString()} ist`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ${r.unit} hat`
          : `Zu klein: erwartet, dass ${e.origin} ${n}${e.minimum.toString()} ist`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ungültiger String: muss mit "${t.prefix}" beginnen`
          : t.format === `ends_with`
            ? `Ungültiger String: muss mit "${t.suffix}" enden`
            : t.format === `includes`
              ? `Ungültiger String: muss "${t.includes}" enthalten`
              : t.format === `regex`
                ? `Ungültiger String: muss dem Muster ${t.pattern} entsprechen`
                : `Ungültig: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ungültige Zahl: muss ein Vielfaches von ${e.divisor} sein`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Unbekannte Schlüssel` : `Unbekannter Schlüssel`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ungültiger Schlüssel in ${e.origin}`;
      case `invalid_union`:
        return `Ungültige Eingabe`;
      case `invalid_element`:
        return `Ungültiger Wert in ${e.origin}`;
      default:
        return `Ungültige Eingabe`;
    }
  };
};
function lo() {
  return { localeError: co() };
}
var uo = () => {
  let e = {
    string: { unit: `χαρακτήρες`, verb: `να έχει` },
    file: { unit: `bytes`, verb: `να έχει` },
    array: { unit: `στοιχεία`, verb: `να έχει` },
    set: { unit: `στοιχεία`, verb: `να έχει` },
    map: { unit: `καταχωρήσεις`, verb: `να έχει` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `είσοδος`,
      email: `διεύθυνση email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO ημερομηνία και ώρα`,
      date: `ISO ημερομηνία`,
      time: `ISO ώρα`,
      duration: `ISO διάρκεια`,
      ipv4: `διεύθυνση IPv4`,
      ipv6: `διεύθυνση IPv6`,
      mac: `διεύθυνση MAC`,
      cidrv4: `εύρος IPv4`,
      cidrv6: `εύρος IPv6`,
      base64: `συμβολοσειρά κωδικοποιημένη σε base64`,
      base64url: `συμβολοσειρά κωδικοποιημένη σε base64url`,
      json_string: `συμβολοσειρά JSON`,
      e164: `αριθμός E.164`,
      credit_card: `αριθμός πιστωτικής κάρτας`,
      currency_code: `κωδικός νομίσματος`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `είσοδος`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return typeof e.expected == `string` && /^[A-Z]/.test(e.expected)
          ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${e.expected}, λήφθηκε ${i}`
          : `Μη έγκυρη είσοδος: αναμενόταν ${t}, λήφθηκε ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Μη έγκυρη είσοδος: αναμενόταν ${R(e.values[0])}`
          : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Πολύ μεγάλο: αναμενόταν ${e.origin ?? `τιμή`} να έχει ${n}${e.maximum.toString()} ${r.unit ?? `στοιχεία`}`
          : `Πολύ μεγάλο: αναμενόταν ${e.origin ?? `τιμή`} να είναι ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Πολύ μικρό: αναμενόταν ${e.origin} να έχει ${n}${e.minimum.toString()} ${r.unit}`
          : `Πολύ μικρό: αναμενόταν ${e.origin} να είναι ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${t.prefix}"`
          : t.format === `ends_with`
            ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${t.suffix}"`
            : t.format === `includes`
              ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${t.includes}"`
              : t.format === `regex`
                ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${t.pattern}`
                : `Μη έγκυρο: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${e.divisor}`;
      case `unrecognized_keys`:
        return `Άγνωστ${e.keys.length > 1 ? `α` : `ο`} κλειδ${e.keys.length > 1 ? `ιά` : `ί`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Μη έγκυρο κλειδί στο ${e.origin}`;
      case `invalid_union`:
        return `Μη έγκυρη είσοδος`;
      case `invalid_element`:
        return `Μη έγκυρη τιμή στο ${e.origin}`;
      default:
        return `Μη έγκυρη είσοδος`;
    }
  };
};
function fo() {
  return { localeError: uo() };
}
var po = () => {
  let e = {
    string: { unit: `characters`, verb: `to have` },
    file: { unit: `bytes`, verb: `to have` },
    array: { unit: `items`, verb: `to have` },
    set: { unit: `items`, verb: `to have` },
    map: { unit: `entries`, verb: `to have` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `email address`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO datetime`,
      date: `ISO date`,
      time: `ISO time`,
      duration: `ISO duration`,
      ipv4: `IPv4 address`,
      ipv6: `IPv6 address`,
      mac: `MAC address`,
      cidrv4: `IPv4 range`,
      cidrv6: `IPv6 range`,
      base64: `base64-encoded string`,
      base64url: `base64url-encoded string`,
      json_string: `JSON string`,
      e164: `E.164 number`,
      currency_code: `currency code`,
      credit_card: `credit card number`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN` };
  function i(e, t) {
    return e === `number` && typeof t == `number` && !Number.isFinite(t)
      ? String(t)
      : (r[e] ?? e);
  }
  return (e) => {
    switch (e.code) {
      case `invalid_type`:
        return `Invalid input: expected ${i(e.expected)}, received ${i(z(e.input), e.input)}`;
      case `invalid_value`:
        return e.values.length === 1
          ? `Invalid input: expected ${R(e.values[0])}`
          : `Invalid option: expected one of ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.exact ? `exactly ` : e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Too big: expected ${e.origin ?? `value`} to have ${n}${e.maximum.toString()} ${r.unit ?? `elements`}`
          : `Too big: expected ${e.origin ?? `value`} to be ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.exact ? `exactly ` : e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}`
          : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Invalid string: must start with "${t.prefix}"`
          : t.format === `ends_with`
            ? `Invalid string: must end with "${t.suffix}"`
            : t.format === `includes`
              ? `Invalid string: must include "${t.includes}"`
              : t.format === `regex`
                ? `Invalid string: must match pattern ${t.pattern}`
                : `Invalid ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Invalid number: must be a multiple of ${e.divisor}`;
      case `unrecognized_keys`:
        return `Unrecognized key${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Invalid key in ${e.origin}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : e.inclusive === !1
            ? `Invalid input: more than one option matched`
            : `Invalid input`;
      case `invalid_element`:
        return `Invalid value in ${e.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function mo() {
  return { localeError: po() };
}
var ho = () => {
  let e = {
    string: { unit: `karaktrojn`, verb: `havi` },
    file: { unit: `bajtojn`, verb: `havi` },
    array: { unit: `elementojn`, verb: `havi` },
    set: { unit: `elementojn`, verb: `havi` },
    map: { unit: `elementojn`, verb: `havi` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `enigo`,
      email: `retadreso`,
      url: `URL`,
      emoji: `emoĝio`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO-datotempo`,
      date: `ISO-dato`,
      time: `ISO-tempo`,
      duration: `ISO-daŭro`,
      ipv4: `IPv4-adreso`,
      ipv6: `IPv6-adreso`,
      mac: `MAC-adreso`,
      cidrv4: `IPv4-rango`,
      cidrv6: `IPv6-rango`,
      base64: `64-ume kodita karaktraro`,
      base64url: `URL-64-ume kodita karaktraro`,
      json_string: `JSON-karaktraro`,
      e164: `E.164-nombro`,
      credit_card: `kreditkarta numero`,
      currency_code: `valuta kodo`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `enigo`,
    },
    r = { nan: `NaN`, number: `nombro`, array: `tabelo`, null: `senvalora` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Nevalida enigo: atendiĝis instanceof ${e.expected}, riceviĝis ${i}`
          : `Nevalida enigo: atendiĝis ${t}, riceviĝis ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Nevalida enigo: atendiĝis ${R(e.values[0])}`
          : `Nevalida opcio: atendiĝis unu el ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Tro granda: atendiĝis ke ${e.origin ?? `valoro`} havu ${n}${e.maximum.toString()} ${r.unit ?? `elementojn`}`
          : `Tro granda: atendiĝis ke ${e.origin ?? `valoro`} havu ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Tro malgranda: atendiĝis ke ${e.origin} havu ${n}${e.minimum.toString()} ${r.unit}`
          : `Tro malgranda: atendiĝis ke ${e.origin} estu ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Nevalida karaktraro: devas komenciĝi per "${t.prefix}"`
          : t.format === `ends_with`
            ? `Nevalida karaktraro: devas finiĝi per "${t.suffix}"`
            : t.format === `includes`
              ? `Nevalida karaktraro: devas inkluzivi "${t.includes}"`
              : t.format === `regex`
                ? `Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}`
                : `Nevalida ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Nevalida nombro: devas esti oblo de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Nekonata${e.keys.length > 1 ? `j` : ``} ŝlosilo${e.keys.length > 1 ? `j` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Nevalida ŝlosilo en ${e.origin}`;
      case `invalid_union`:
        return `Nevalida enigo`;
      case `invalid_element`:
        return `Nevalida valoro en ${e.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function go() {
  return { localeError: ho() };
}
var _o = () => {
  let e = {
    string: { unit: `caracteres`, verb: `tener` },
    file: { unit: `bytes`, verb: `tener` },
    array: { unit: `elementos`, verb: `tener` },
    set: { unit: `elementos`, verb: `tener` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `entrada`,
      email: `dirección de correo electrónico`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `fecha y hora ISO`,
      date: `fecha ISO`,
      time: `hora ISO`,
      duration: `duración ISO`,
      ipv4: `dirección IPv4`,
      ipv6: `dirección IPv6`,
      mac: `dirección MAC`,
      cidrv4: `rango IPv4`,
      cidrv6: `rango IPv6`,
      base64: `cadena codificada en base64`,
      base64url: `URL codificada en base64`,
      json_string: `cadena JSON`,
      e164: `número E.164`,
      credit_card: `número de tarjeta de crédito`,
      currency_code: `código de moneda`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `entrada`,
    },
    r = {
      nan: `NaN`,
      string: `texto`,
      number: `número`,
      boolean: `booleano`,
      array: `arreglo`,
      object: `objeto`,
      set: `conjunto`,
      file: `archivo`,
      date: `fecha`,
      bigint: `número grande`,
      symbol: `símbolo`,
      undefined: `indefinido`,
      null: `nulo`,
      function: `función`,
      map: `mapa`,
      record: `registro`,
      tuple: `tupla`,
      enum: `enumeración`,
      union: `unión`,
      literal: `literal`,
      promise: `promesa`,
      void: `vacío`,
      never: `nunca`,
      unknown: `desconocido`,
      any: `cualquiera`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Entrada inválida: se esperaba instanceof ${e.expected}, recibido ${i}`
          : `Entrada inválida: se esperaba ${t}, recibido ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Entrada inválida: se esperaba ${R(e.values[0])}`
          : `Opción inválida: se esperaba una de ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `Demasiado grande: se esperaba que ${a ?? `valor`} tuviera ${n}${e.maximum.toString()} ${i.unit ?? `elementos`}`
          : `Demasiado grande: se esperaba que ${a ?? `valor`} fuera ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `Demasiado pequeño: se esperaba que ${a} tuviera ${n}${e.minimum.toString()} ${i.unit}`
          : `Demasiado pequeño: se esperaba que ${a} fuera ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Cadena inválida: debe comenzar con "${t.prefix}"`
          : t.format === `ends_with`
            ? `Cadena inválida: debe terminar en "${t.suffix}"`
            : t.format === `includes`
              ? `Cadena inválida: debe incluir "${t.includes}"`
              : t.format === `regex`
                ? `Cadena inválida: debe coincidir con el patrón ${t.pattern}`
                : `Inválido ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Número inválido: debe ser múltiplo de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Llave${e.keys.length > 1 ? `s` : ``} desconocida${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Llave inválida en ${r[e.origin] ?? e.origin}`;
      case `invalid_union`:
        return `Entrada inválida`;
      case `invalid_element`:
        return `Valor inválido en ${r[e.origin] ?? e.origin}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function vo() {
  return { localeError: _o() };
}
var yo = () => {
  let e = {
    string: { unit: `کاراکتر`, verb: `داشته باشد` },
    file: { unit: `بایت`, verb: `داشته باشد` },
    array: { unit: `آیتم`, verb: `داشته باشد` },
    set: { unit: `آیتم`, verb: `داشته باشد` },
    map: { unit: `آیتم`, verb: `داشته باشد` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ورودی`,
      email: `آدرس ایمیل`,
      url: `URL`,
      emoji: `ایموجی`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `تاریخ و زمان ایزو`,
      date: `تاریخ ایزو`,
      time: `زمان ایزو`,
      duration: `مدت زمان ایزو`,
      ipv4: `IPv4 آدرس`,
      ipv6: `IPv6 آدرس`,
      mac: `MAC آدرس`,
      cidrv4: `IPv4 دامنه`,
      cidrv6: `IPv6 دامنه`,
      base64: `base64-encoded رشته`,
      base64url: `base64url-encoded رشته`,
      json_string: `JSON رشته`,
      e164: `E.164 عدد`,
      credit_card: `شماره کارت اعتباری`,
      currency_code: `کد ارز`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ورودی`,
    },
    r = { nan: `NaN`, number: `عدد`, array: `آرایه` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `ورودی نامعتبر: می‌بایست instanceof ${e.expected} می‌بود، ${i} دریافت شد`
          : `ورودی نامعتبر: می‌بایست ${t} می‌بود، ${i} دریافت شد`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `ورودی نامعتبر: می‌بایست ${R(e.values[0])} می‌بود`
          : `گزینه نامعتبر: می‌بایست یکی از ${I(e.values, `|`)} می‌بود`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `خیلی بزرگ: ${e.origin ?? `مقدار`} باید ${n}${e.maximum.toString()} ${r.unit ?? `عنصر`} باشد`
          : `خیلی بزرگ: ${e.origin ?? `مقدار`} باید ${n}${e.maximum.toString()} باشد`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} ${r.unit} باشد`
          : `خیلی کوچک: ${e.origin} باید ${n}${e.minimum.toString()} باشد`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `رشته نامعتبر: باید با "${t.prefix}" شروع شود`
          : t.format === `ends_with`
            ? `رشته نامعتبر: باید با "${t.suffix}" تمام شود`
            : t.format === `includes`
              ? `رشته نامعتبر: باید شامل "${t.includes}" باشد`
              : t.format === `regex`
                ? `رشته نامعتبر: باید با الگوی ${t.pattern} مطابقت داشته باشد`
                : `${n[t.format] ?? e.format} نامعتبر`;
      }
      case `not_multiple_of`:
        return `عدد نامعتبر: باید مضرب ${e.divisor} باشد`;
      case `unrecognized_keys`:
        return `کلید${e.keys.length > 1 ? `های` : ``} ناشناس: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `کلید ناشناس در ${e.origin}`;
      case `invalid_union`:
        return `ورودی نامعتبر`;
      case `invalid_element`:
        return `مقدار نامعتبر در ${e.origin}`;
      default:
        return `ورودی نامعتبر`;
    }
  };
};
function bo() {
  return { localeError: yo() };
}
var xo = () => {
  let e = {
    string: { unit: `merkkiä`, subject: `merkkijonon` },
    file: { unit: `tavua`, subject: `tiedoston` },
    array: { unit: `alkiota`, subject: `listan` },
    set: { unit: `alkiota`, subject: `joukon` },
    map: { unit: `alkiota`, subject: `kuvauksen` },
    number: { unit: ``, subject: `luvun` },
    bigint: { unit: ``, subject: `suuren kokonaisluvun` },
    int: { unit: ``, subject: `kokonaisluvun` },
    date: { unit: ``, subject: `päivämäärän` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `säännöllinen lauseke`,
      email: `sähköpostiosoite`,
      url: `URL-osoite`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO-aikaleima`,
      date: `ISO-päivämäärä`,
      time: `ISO-aika`,
      duration: `ISO-kesto`,
      ipv4: `IPv4-osoite`,
      ipv6: `IPv6-osoite`,
      mac: `MAC-osoite`,
      cidrv4: `IPv4-alue`,
      cidrv6: `IPv6-alue`,
      base64: `base64-koodattu merkkijono`,
      base64url: `base64url-koodattu merkkijono`,
      json_string: `JSON-merkkijono`,
      e164: `E.164-luku`,
      credit_card: `luottokortin numero`,
      currency_code: `valuuttakoodi`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `templaattimerkkijono`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Virheellinen tyyppi: odotettiin instanceof ${e.expected}, oli ${i}`
          : `Virheellinen tyyppi: odotettiin ${t}, oli ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Virheellinen syöte: täytyy olla ${R(e.values[0])}`
          : `Virheellinen valinta: täytyy olla yksi seuraavista: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Liian suuri: ${r.subject} täytyy olla ${n}${e.maximum.toString()} ${r.unit}`.trim()
          : `Liian suuri: arvon täytyy olla ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Liian pieni: ${r.subject} täytyy olla ${n}${e.minimum.toString()} ${r.unit}`.trim()
          : `Liian pieni: arvon täytyy olla ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Virheellinen syöte: täytyy alkaa "${t.prefix}"`
          : t.format === `ends_with`
            ? `Virheellinen syöte: täytyy loppua "${t.suffix}"`
            : t.format === `includes`
              ? `Virheellinen syöte: täytyy sisältää "${t.includes}"`
              : t.format === `regex`
                ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${t.pattern}`
                : `Virheellinen ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Virheellinen luku: täytyy olla luvun ${e.divisor} monikerta`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Tuntemattomat avaimet` : `Tuntematon avain`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Virheellinen avain tietueessa`;
      case `invalid_union`:
        return `Virheellinen unioni`;
      case `invalid_element`:
        return `Virheellinen arvo joukossa`;
      default:
        return `Virheellinen syöte`;
    }
  };
};
function So() {
  return { localeError: xo() };
}
var Co = () => {
  let e = {
    string: { unit: `caractères`, verb: `avoir` },
    file: { unit: `octets`, verb: `avoir` },
    array: { unit: `éléments`, verb: `avoir` },
    set: { unit: `éléments`, verb: `avoir` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `expression régulière`,
      email: `adresse e-mail`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `date et heure ISO`,
      date: `date ISO`,
      time: `heure ISO`,
      duration: `durée ISO`,
      ipv4: `adresse IPv4`,
      ipv6: `adresse IPv6`,
      mac: `adresse MAC`,
      cidrv4: `plage IPv4`,
      cidrv6: `plage IPv6`,
      base64: `chaîne de caractères encodée en base64`,
      base64url: `chaîne de caractères encodée en base64url`,
      json_string: `chaîne de caractères JSON`,
      e164: `numéro au format E.164`,
      credit_card: `numéro de carte de crédit`,
      currency_code: `code de devise`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `entrée`,
    },
    r = {
      string: `chaîne de caractères`,
      number: `nombre`,
      int: `entier`,
      boolean: `booléen`,
      bigint: `grand entier`,
      symbol: `symbole`,
      undefined: `indéfini`,
      null: `null`,
      never: `jamais`,
      void: `vide`,
      date: `date`,
      array: `tableau`,
      object: `objet`,
      tuple: `tuple`,
      record: `record`,
      map: `map`,
      set: `ensemble`,
      file: `fichier`,
      nonoptional: `non optionnel`,
      nan: `NaN`,
      function: `fonction`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Entrée invalide : instance de ${e.expected} attendu, ${i} reçu`
          : `Entrée invalide : ${t} attendu, ${i} reçu`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Entrée invalide : ${R(e.values[0])} attendu`
          : `Option invalide : une valeur parmi ${I(e.values, `|`)} attendue`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          i = t(e.origin);
        return i
          ? `Trop grand : ${r[e.origin] ?? `valeur`} doit ${i.verb} ${n}${e.maximum.toString()} ${i.unit ?? `élément(s)`}`
          : `Trop grand : ${r[e.origin] ?? `valeur`} doit être ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          i = t(e.origin);
        return i
          ? `Trop petit : ${r[e.origin] ?? `valeur`} doit ${i.verb} ${n}${e.minimum.toString()} ${i.unit}`
          : `Trop petit : ${r[e.origin] ?? `valeur`} doit être ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Chaîne de caractères invalide : doit commencer par "${t.prefix}"`
          : t.format === `ends_with`
            ? `Chaîne de caractères invalide : doit se terminer par "${t.suffix}"`
            : t.format === `includes`
              ? `Chaîne de caractères invalide : doit inclure "${t.includes}"`
              : t.format === `regex`
                ? `Chaîne de caractères invalide : doit correspondre au motif ${t.pattern}`
                : `${n[t.format] ?? e.format} invalide`;
      }
      case `not_multiple_of`:
        return `Nombre invalide : doit être un multiple de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Clé${e.keys.length > 1 ? `s` : ``} non reconnue${e.keys.length > 1 ? `s` : ``} : ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Clé invalide dans ${e.origin}`;
      case `invalid_union`:
        return `Entrée invalide`;
      case `invalid_element`:
        return `Valeur invalide dans ${e.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function wo() {
  return { localeError: Co() };
}
var To = () => {
  let e = {
    string: { unit: `caractères`, verb: `avoir` },
    file: { unit: `octets`, verb: `avoir` },
    array: { unit: `éléments`, verb: `avoir` },
    set: { unit: `éléments`, verb: `avoir` },
    map: { unit: `éléments`, verb: `avoir` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `entrée`,
      email: `adresse courriel`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `date-heure ISO`,
      date: `date ISO`,
      time: `heure ISO`,
      duration: `durée ISO`,
      ipv4: `adresse IPv4`,
      ipv6: `adresse IPv6`,
      mac: `adresse MAC`,
      cidrv4: `plage IPv4`,
      cidrv6: `plage IPv6`,
      base64: `chaîne encodée en base64`,
      base64url: `chaîne encodée en base64url`,
      json_string: `chaîne JSON`,
      e164: `numéro E.164`,
      credit_card: `numéro de carte de crédit`,
      currency_code: `code de devise`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `entrée`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Entrée invalide : attendu instanceof ${e.expected}, reçu ${i}`
          : `Entrée invalide : attendu ${t}, reçu ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Entrée invalide : attendu ${R(e.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `≤` : `<`,
          r = t(e.origin);
        return r
          ? `Trop grand : attendu que ${e.origin ?? `la valeur`} ait ${n}${e.maximum.toString()} ${r.unit}`
          : `Trop grand : attendu que ${e.origin ?? `la valeur`} soit ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `≥` : `>`,
          r = t(e.origin);
        return r
          ? `Trop petit : attendu que ${e.origin} ait ${n}${e.minimum.toString()} ${r.unit}`
          : `Trop petit : attendu que ${e.origin} soit ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Chaîne invalide : doit commencer par "${t.prefix}"`
          : t.format === `ends_with`
            ? `Chaîne invalide : doit se terminer par "${t.suffix}"`
            : t.format === `includes`
              ? `Chaîne invalide : doit inclure "${t.includes}"`
              : t.format === `regex`
                ? `Chaîne invalide : doit correspondre au motif ${t.pattern}`
                : `${n[t.format] ?? e.format} invalide`;
      }
      case `not_multiple_of`:
        return `Nombre invalide : doit être un multiple de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Clé${e.keys.length > 1 ? `s` : ``} non reconnue${e.keys.length > 1 ? `s` : ``} : ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Clé invalide dans ${e.origin}`;
      case `invalid_union`:
        return `Entrée invalide`;
      case `invalid_element`:
        return `Valeur invalide dans ${e.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function Eo() {
  return { localeError: To() };
}
var Do = () => {
  let e = {
    string: { unit: `અક્ષર`, verb: `હોવા જોઈએ` },
    file: { unit: `બાયટ`, verb: `હોવા જોઈએ` },
    array: { unit: `આઇટમ`, verb: `હોવા જોઈએ` },
    set: { unit: `આઇટમ`, verb: `હોવા જોઈએ` },
    map: { unit: `એન્ટ્રી`, verb: `હોવા જોઈએ` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ઇનપુટ`,
      email: `ઈમેઇલ એડ્રેસ`,
      url: `URL`,
      emoji: `ઇમોજી`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO તારીખ અને સમય`,
      date: `ISO તારીખ`,
      time: `ISO સમય`,
      duration: `ISO અવધિ`,
      ipv4: `IPv4 એડ્રેસ`,
      ipv6: `IPv6 એડ્રેસ`,
      mac: `MAC એડ્રેસ`,
      cidrv4: `IPv4 શ્રેણી`,
      cidrv6: `IPv6 શ્રેણી`,
      base64: `base64-એન્કોડેડ સ્ટ્રિંગ`,
      base64url: `base64url-એન્કોડેડ સ્ટ્રિંગ`,
      json_string: `JSON સ્ટ્રિંગ`,
      e164: `E.164 નંબર`,
      credit_card: `ક્રેડિટ કાર્ડ નંબર`,
      currency_code: `ચલણ કોડ`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ઇનપુટ`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `અમાન્ય ઇનપુટ: અપેક્ષિત ${t}, પ્રાપ્ત ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `અમાન્ય ઇનપુટ: અપેક્ષિત ${R(e.values[0])}`
          : `અમાન્ય વિકલ્પ: ${I(e.values, ` | `)} માધ્યમથી એક અપેક્ષિત`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `ખૂબ મોટું: ${e.origin ?? `મૂલ્ય`} ${n}${e.maximum.toString()} ${r.unit ?? `એલિમેન્ટ`} હોવા જોઈએ`
          : `ખૂબ મોટું: ${e.origin ?? `મૂલ્ય`} ${n}${e.maximum.toString()} હોવું જોઈએ`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `ખૂબ નાનું: ${e.origin} ${n}${e.minimum.toString()} ${r.unit} હોવા જોઈએ`
          : `ખૂબ નાનું: ${e.origin} ${n}${e.minimum.toString()} હોવું જોઈએ`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `અમાન્ય સ્ટ્રિંગ: "${t.prefix}" થી શરૂ થવું જોઈએ`
          : t.format === `ends_with`
            ? `અમાન્ય સ્ટ્રિંગ: "${t.suffix}" પર સમાપ્ત થવું જોઈએ`
            : t.format === `includes`
              ? `અમાન્ય સ્ટ્રિંગ: "${t.includes}" શામેલ હોવું જોઈએ`
              : t.format === `regex`
                ? `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${t.pattern} સાથે મેળ ખાવું જોઈએ`
                : `અમાન્ય ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `અમાન્ય નંબર: ${e.divisor} નો ગુણાંક હોવો જોઈએ`;
      case `unrecognized_keys`:
        return `ઓળખી શકાતા નહીં તે કી${e.keys.length > 1 ? `ઓ` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} માં અમાન્ય કી`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `અમાન્ય ઇનપુટ`;
      case `invalid_element`:
        return `${e.origin} માં અમાન્ય મૂલ્ય`;
      default:
        return `અમાન્ય ઇનપુટ`;
    }
  };
};
function Oo() {
  return { localeError: Do() };
}
var ko = () => {
  let e = {
      string: { label: `מחרוזת`, gender: `f` },
      number: { label: `מספר`, gender: `m` },
      boolean: { label: `ערך בוליאני`, gender: `m` },
      bigint: { label: `BigInt`, gender: `m` },
      date: { label: `תאריך`, gender: `m` },
      array: { label: `מערך`, gender: `m` },
      object: { label: `אובייקט`, gender: `m` },
      null: { label: `ערך ריק (null)`, gender: `m` },
      undefined: { label: `ערך לא מוגדר (undefined)`, gender: `m` },
      symbol: { label: `סימבול (Symbol)`, gender: `m` },
      function: { label: `פונקציה`, gender: `f` },
      map: { label: `מפה (Map)`, gender: `f` },
      set: { label: `קבוצה (Set)`, gender: `f` },
      file: { label: `קובץ`, gender: `m` },
      promise: { label: `Promise`, gender: `m` },
      NaN: { label: `NaN`, gender: `m` },
      unknown: { label: `ערך לא ידוע`, gender: `m` },
      value: { label: `ערך`, gender: `m` },
    },
    t = {
      string: { unit: `תווים`, shortLabel: `קצר`, longLabel: `ארוך` },
      file: { unit: `בייטים`, shortLabel: `קטן`, longLabel: `גדול` },
      array: { unit: `פריטים`, shortLabel: `קטן`, longLabel: `גדול` },
      set: { unit: `פריטים`, shortLabel: `קטן`, longLabel: `גדול` },
      number: { unit: ``, shortLabel: `קטן`, longLabel: `גדול` },
    },
    n = (t) => (t ? e[t] : void 0),
    r = (t) => {
      let r = n(t);
      return r ? r.label : (t ?? e.unknown.label);
    },
    i = (e) => `ה${r(e)}`,
    a = (e) => ((n(e)?.gender ?? `m`) === `f` ? `צריכה להיות` : `צריך להיות`),
    o = (e) => (e ? (t[e] ?? null) : null),
    s = {
      regex: { label: `קלט`, gender: `m` },
      email: { label: `כתובת אימייל`, gender: `f` },
      url: { label: `כתובת רשת`, gender: `f` },
      emoji: { label: `אימוג'י`, gender: `m` },
      uuid: { label: `UUID`, gender: `m` },
      uuidv4: { label: `UUIDv4`, gender: `m` },
      uuidv6: { label: `UUIDv6`, gender: `m` },
      nanoid: { label: `nanoid`, gender: `m` },
      guid: { label: `GUID`, gender: `m` },
      cuid: { label: `cuid`, gender: `m` },
      cuid2: { label: `cuid2`, gender: `m` },
      ulid: { label: `ULID`, gender: `m` },
      xid: { label: `XID`, gender: `m` },
      ksuid: { label: `KSUID`, gender: `m` },
      datetime: { label: `תאריך וזמן ISO`, gender: `m` },
      date: { label: `תאריך ISO`, gender: `m` },
      time: { label: `זמן ISO`, gender: `m` },
      duration: { label: `משך זמן ISO`, gender: `m` },
      ipv4: { label: `כתובת IPv4`, gender: `f` },
      ipv6: { label: `כתובת IPv6`, gender: `f` },
      mac: { label: `כתובת MAC`, gender: `f` },
      cidrv4: { label: `טווח IPv4`, gender: `m` },
      cidrv6: { label: `טווח IPv6`, gender: `m` },
      base64: { label: `מחרוזת בבסיס 64`, gender: `f` },
      base64url: { label: `מחרוזת בבסיס 64 לכתובות רשת`, gender: `f` },
      json_string: { label: `מחרוזת JSON`, gender: `f` },
      e164: { label: `מספר E.164`, gender: `m` },
      credit_card: { label: `מספר כרטיס אשראי`, gender: `m` },
      currency_code: { label: `קוד מטבע`, gender: `m` },
      iban: { label: `IBAN`, gender: `m` },
      jwt: { label: `JWT`, gender: `m` },
      template_literal: { label: `קלט`, gender: `m` },
      ends_with: { label: `קלט`, gender: `m` },
      includes: { label: `קלט`, gender: `m` },
      lowercase: { label: `קלט`, gender: `m` },
      starts_with: { label: `קלט`, gender: `m` },
      uppercase: { label: `קלט`, gender: `m` },
    },
    c = { nan: `NaN` };
  return (t) => {
    switch (t.code) {
      case `invalid_type`: {
        let n = t.expected,
          i = c[n ?? ``] ?? r(n),
          a = z(t.input),
          o = c[a] ?? e[a]?.label ?? a;
        return /^[A-Z]/.test(t.expected)
          ? `קלט לא תקין: צריך להיות instanceof ${t.expected}, התקבל ${o}`
          : `קלט לא תקין: צריך להיות ${i}, התקבל ${o}`;
      }
      case `invalid_value`: {
        if (t.values.length === 1)
          return `ערך לא תקין: הערך חייב להיות ${R(t.values[0])}`;
        let e = t.values.map((e) => R(e));
        if (t.values.length === 2)
          return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`;
        let n = e[e.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${e.slice(0, -1).join(`, `)} או ${n}`;
      }
      case `too_big`: {
        let e = o(t.origin),
          n = i(t.origin ?? `value`);
        if (t.origin === `string`)
          return `${e?.longLabel ?? `ארוך`} מדי: ${n} צריכה להכיל ${t.maximum.toString()} ${e?.unit ?? ``} ${t.inclusive ? `או פחות` : `לכל היותר`}`.trim();
        if (t.origin === `number`)
          return `גדול מדי: ${n} צריך להיות ${t.inclusive ? `קטן או שווה ל-${t.maximum}` : `קטן מ-${t.maximum}`}`;
        if (t.origin === `array` || t.origin === `set`)
          return `גדול מדי: ${n} ${t.origin === `set` ? `צריכה` : `צריך`} להכיל ${t.inclusive ? `${t.maximum} ${e?.unit ?? ``} או פחות` : `פחות מ-${t.maximum} ${e?.unit ?? ``}`}`.trim();
        let r = t.inclusive ? `<=` : `<`,
          s = a(t.origin ?? `value`);
        return e?.unit
          ? `${e.longLabel} מדי: ${n} ${s} ${r}${t.maximum.toString()} ${e.unit}`
          : `${e?.longLabel ?? `גדול`} מדי: ${n} ${s} ${r}${t.maximum.toString()}`;
      }
      case `too_small`: {
        let e = o(t.origin),
          n = i(t.origin ?? `value`);
        if (t.origin === `string`)
          return `${e?.shortLabel ?? `קצר`} מדי: ${n} צריכה להכיל ${t.minimum.toString()} ${e?.unit ?? ``} ${t.inclusive ? `או יותר` : `לפחות`}`.trim();
        if (t.origin === `number`)
          return `קטן מדי: ${n} צריך להיות ${t.inclusive ? `גדול או שווה ל-${t.minimum}` : `גדול מ-${t.minimum}`}`;
        if (t.origin === `array` || t.origin === `set`) {
          let r = t.origin === `set` ? `צריכה` : `צריך`;
          return t.minimum === 1 && t.inclusive
            ? `קטן מדי: ${n} ${r} להכיל ${(t.origin, `לפחות פריט אחד`)}`
            : `קטן מדי: ${n} ${r} להכיל ${t.inclusive ? `${t.minimum} ${e?.unit ?? ``} או יותר` : `יותר מ-${t.minimum} ${e?.unit ?? ``}`}`.trim();
        }
        let r = t.inclusive ? `>=` : `>`,
          s = a(t.origin ?? `value`);
        return e?.unit
          ? `${e.shortLabel} מדי: ${n} ${s} ${r}${t.minimum.toString()} ${e.unit}`
          : `${e?.shortLabel ?? `קטן`} מדי: ${n} ${s} ${r}${t.minimum.toString()}`;
      }
      case `invalid_format`: {
        let e = t;
        if (e.format === `starts_with`)
          return `המחרוזת חייבת להתחיל ב "${e.prefix}"`;
        if (e.format === `ends_with`)
          return `המחרוזת חייבת להסתיים ב "${e.suffix}"`;
        if (e.format === `includes`)
          return `המחרוזת חייבת לכלול "${e.includes}"`;
        if (e.format === `regex`)
          return `המחרוזת חייבת להתאים לתבנית ${e.pattern}`;
        let n = s[e.format];
        return `${n?.label ?? e.format} לא ${(n?.gender ?? `m`) === `f` ? `תקינה` : `תקין`}`;
      }
      case `not_multiple_of`:
        return `מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;
      case `unrecognized_keys`:
        return `מפתח${t.keys.length > 1 ? `ות` : ``} לא מזוה${t.keys.length > 1 ? `ים` : `ה`}: ${I(t.keys, `, `)}`;
      case `invalid_key`:
        return `שדה לא תקין באובייקט`;
      case `invalid_union`:
        return `קלט לא תקין`;
      case `invalid_element`:
        return `ערך לא תקין ב${i(t.origin ?? `array`)}`;
      default:
        return `קלט לא תקין`;
    }
  };
};
function Ao() {
  return { localeError: ko() };
}
var jo = () => {
  let e = {
    string: { unit: `अक्षर`, verb: `रखने के लिए` },
    file: { unit: `बाइट्स`, verb: `रखने के लिए` },
    array: { unit: `तत्व`, verb: `रखने के लिए` },
    set: { unit: `तत्व`, verb: `रखने के लिए` },
    map: { unit: `प्रविष्टियाँ`, verb: `रखने के लिए` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `इनपुट`,
      email: `ईमेल पता`,
      url: `URL`,
      emoji: `इमोजी`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO तिथि और समय`,
      date: `ISO तिथि`,
      time: `ISO समय`,
      duration: `ISO अवधि`,
      ipv4: `IPv4 पता`,
      ipv6: `IPv6 पता`,
      mac: `MAC पता`,
      cidrv4: `IPv4 श्रेणी`,
      cidrv6: `IPv6 श्रेणी`,
      base64: `Base64-एन्कोडेड स्ट्रिंग`,
      base64url: `Base64URL-एन्कोडेड स्ट्रिंग`,
      json_string: `JSON स्ट्रिंग`,
      e164: `E.164 संख्या`,
      credit_card: `क्रेडिट कार्ड संख्या`,
      currency_code: `मुद्रा कोड`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `इनपुट`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `अमान्य इनपुट: अपेक्षित ${t}, प्राप्त ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `अमान्य इनपुट: अपेक्षित ${R(e.values[0])}`
          : `अमान्य विकल्प: अपेक्षित मानों में से एक ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `बहुत बड़ा: अपेक्षित था कि ${e.origin ?? `मान`} में ${n}${e.maximum} ${r.unit} हों`
          : `बहुत बड़ा: अपेक्षित था कि ${e.origin ?? `मान`} ${n}${e.maximum} हो`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `बहुत छोटा: अपेक्षित था कि ${e.origin} में ${n}${e.minimum} ${r.unit} हों`
          : `बहुत छोटा: अपेक्षित था कि ${e.origin} ${n}${e.minimum} हो`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `अमान्य स्ट्रिंग: "${t.prefix}" से शुरू होना चाहिए`
          : t.format === `ends_with`
            ? `अमान्य स्ट्रिंग: "${t.suffix}" पर समाप्त होना चाहिए`
            : t.format === `includes`
              ? `अमान्य स्ट्रिंग: इसमें "${t.includes}" शामिल होना चाहिए`
              : t.format === `regex`
                ? `अमान्य स्ट्रिंग: पैटर्न ${t.pattern} से मेल खाना चाहिए`
                : `अमान्य ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `अमान्य संख्या: यह ${e.divisor} का गुणज होना चाहिए`;
      case `unrecognized_keys`:
        return `अपरिचित कुंजी${e.keys.length > 1 ? `याँ` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `अमान्य कुंजी: ${e.origin} में`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `अमान्य इनपुट`;
      case `invalid_element`:
        return `अमान्य मान: ${e.origin} में`;
      default:
        return `अमान्य इनपुट`;
    }
  };
};
function Mo() {
  return { localeError: jo() };
}
var No = () => {
  let e = {
    string: { unit: `znakova`, verb: `imati` },
    file: { unit: `bajtova`, verb: `imati` },
    array: { unit: `stavki`, verb: `imati` },
    set: { unit: `stavki`, verb: `imati` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `unos`,
      email: `email adresa`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO datum i vrijeme`,
      date: `ISO datum`,
      time: `ISO vrijeme`,
      duration: `ISO trajanje`,
      ipv4: `IPv4 adresa`,
      ipv6: `IPv6 adresa`,
      mac: `MAC adresa`,
      cidrv4: `IPv4 raspon`,
      cidrv6: `IPv6 raspon`,
      base64: `base64 kodirani tekst`,
      base64url: `base64url kodirani tekst`,
      json_string: `JSON tekst`,
      e164: `E.164 broj`,
      credit_card: `broj kreditne kartice`,
      currency_code: `kod valute`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `unos`,
    },
    r = {
      nan: `NaN`,
      string: `tekst`,
      number: `broj`,
      boolean: `boolean`,
      array: `niz`,
      object: `objekt`,
      set: `skup`,
      file: `datoteka`,
      date: `datum`,
      bigint: `bigint`,
      symbol: `simbol`,
      undefined: `undefined`,
      null: `null`,
      function: `funkcija`,
      map: `mapa`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Neispravan unos: očekuje se instanceof ${e.expected}, a primljeno je ${i}`
          : `Neispravan unos: očekuje se ${t}, a primljeno je ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Neispravna vrijednost: očekivano ${R(e.values[0])}`
          : `Neispravna opcija: očekivano jedno od ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `Preveliko: očekivano da ${a ?? `vrijednost`} ima ${n}${e.maximum.toString()} ${i.unit ?? `elemenata`}`
          : `Preveliko: očekivano da ${a ?? `vrijednost`} bude ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          i = t(e.origin),
          a = r[e.origin] ?? e.origin;
        return i
          ? `Premalo: očekivano da ${a} ima ${n}${e.minimum.toString()} ${i.unit}`
          : `Premalo: očekivano da ${a} bude ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Neispravan tekst: mora započinjati s "${t.prefix}"`
          : t.format === `ends_with`
            ? `Neispravan tekst: mora završavati s "${t.suffix}"`
            : t.format === `includes`
              ? `Neispravan tekst: mora sadržavati "${t.includes}"`
              : t.format === `regex`
                ? `Neispravan tekst: mora odgovarati uzorku ${t.pattern}`
                : `Neispravna ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Neispravan broj: mora biti višekratnik od ${e.divisor}`;
      case `unrecognized_keys`:
        return `Neprepoznat${e.keys.length > 1 ? `i ključevi` : ` ključ`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Neispravan ključ u ${r[e.origin] ?? e.origin}`;
      case `invalid_union`:
        return `Neispravan unos`;
      case `invalid_element`:
        return `Neispravna vrijednost u ${r[e.origin] ?? e.origin}`;
      default:
        return `Neispravan unos`;
    }
  };
};
function Po() {
  return { localeError: No() };
}
var Fo = () => {
  let e = {
    string: { unit: `karakter`, verb: `legyen` },
    file: { unit: `byte`, verb: `legyen` },
    array: { unit: `elem`, verb: `legyen` },
    set: { unit: `elem`, verb: `legyen` },
    map: { unit: `elem`, verb: `legyen` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `bemenet`,
      email: `email cím`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO időbélyeg`,
      date: `ISO dátum`,
      time: `ISO idő`,
      duration: `ISO időintervallum`,
      ipv4: `IPv4 cím`,
      ipv6: `IPv6 cím`,
      mac: `MAC cím`,
      cidrv4: `IPv4 tartomány`,
      cidrv6: `IPv6 tartomány`,
      base64: `base64-kódolt string`,
      base64url: `base64url-kódolt string`,
      json_string: `JSON string`,
      e164: `E.164 szám`,
      credit_card: `hitelkártyaszám`,
      currency_code: `pénznemkód`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `bemenet`,
    },
    r = { nan: `NaN`, number: `szám`, array: `tömb` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Érvénytelen bemenet: a várt érték instanceof ${e.expected}, a kapott érték ${i}`
          : `Érvénytelen bemenet: a várt érték ${t}, a kapott érték ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Érvénytelen bemenet: a várt érték ${R(e.values[0])}`
          : `Érvénytelen opció: valamelyik érték várt ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Túl nagy: ${e.origin ?? `érték`} mérete túl nagy ${n}${e.maximum.toString()} ${r.unit ?? `elem`}`
          : `Túl nagy: a bemeneti érték ${e.origin ?? `érték`} túl nagy: ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Túl kicsi: a bemeneti érték ${e.origin} mérete túl kicsi ${n}${e.minimum.toString()} ${r.unit}`
          : `Túl kicsi: a bemeneti érték ${e.origin} túl kicsi ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Érvénytelen string: "${t.prefix}" értékkel kell kezdődnie`
          : t.format === `ends_with`
            ? `Érvénytelen string: "${t.suffix}" értékkel kell végződnie`
            : t.format === `includes`
              ? `Érvénytelen string: "${t.includes}" értéket kell tartalmaznia`
              : t.format === `regex`
                ? `Érvénytelen string: ${t.pattern} mintának kell megfelelnie`
                : `Érvénytelen ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Érvénytelen szám: ${e.divisor} többszörösének kell lennie`;
      case `unrecognized_keys`:
        return `Ismeretlen kulcs${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Érvénytelen kulcs ${e.origin}`;
      case `invalid_union`:
        return `Érvénytelen bemenet`;
      case `invalid_element`:
        return `Érvénytelen érték: ${e.origin}`;
      default:
        return `Érvénytelen bemenet`;
    }
  };
};
function Io() {
  return { localeError: Fo() };
}
function Lo(e, t, n) {
  return Math.abs(e) === 1 ? t : n;
}
function Ro(e) {
  if (!e) return ``;
  let t = [`ա`, `ե`, `ը`, `ի`, `ո`, `ու`, `օ`],
    n = e[e.length - 1];
  return e + (t.includes(n) ? `ն` : `ը`);
}
var zo = () => {
  let e = {
    string: { unit: { one: `նշան`, many: `նշաններ` }, verb: `ունենալ` },
    file: { unit: { one: `բայթ`, many: `բայթեր` }, verb: `ունենալ` },
    array: { unit: { one: `տարր`, many: `տարրեր` }, verb: `ունենալ` },
    set: { unit: { one: `տարր`, many: `տարրեր` }, verb: `ունենալ` },
    map: { unit: { one: `տարր`, many: `տարրեր` }, verb: `ունենալ` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `մուտք`,
      email: `էլ. հասցե`,
      url: `URL`,
      emoji: `էմոջի`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO ամսաթիվ և ժամ`,
      date: `ISO ամսաթիվ`,
      time: `ISO ժամ`,
      duration: `ISO տևողություն`,
      ipv4: `IPv4 հասցե`,
      ipv6: `IPv6 հասցե`,
      mac: `MAC հասցե`,
      cidrv4: `IPv4 միջակայք`,
      cidrv6: `IPv6 միջակայք`,
      base64: `base64 ձևաչափով տող`,
      base64url: `base64url ձևաչափով տող`,
      json_string: `JSON տող`,
      e164: `E.164 համար`,
      credit_card: `կրեդիտ քարտի համար`,
      currency_code: `արժույթի կոդ`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `մուտք`,
    },
    r = { nan: `NaN`, number: `թիվ`, array: `զանգված` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${e.expected}, ստացվել է ${i}`
          : `Սխալ մուտքագրում․ սպասվում էր ${t}, ստացվել է ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Սխալ մուտքագրում․ սպասվում էր ${R(e.values[1])}`
          : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        if (r) {
          let t = Lo(Number(e.maximum), r.unit.one, r.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ro(e.origin ?? `արժեք`)} կունենա ${n}${e.maximum.toString()} ${t}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ro(e.origin ?? `արժեք`)} լինի ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        if (r) {
          let t = Lo(Number(e.minimum), r.unit.one, r.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ro(e.origin)} կունենա ${n}${e.minimum.toString()} ${t}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ro(e.origin)} լինի ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Սխալ տող․ պետք է սկսվի "${t.prefix}"-ով`
          : t.format === `ends_with`
            ? `Սխալ տող․ պետք է ավարտվի "${t.suffix}"-ով`
            : t.format === `includes`
              ? `Սխալ տող․ պետք է պարունակի "${t.includes}"`
              : t.format === `regex`
                ? `Սխալ տող․ պետք է համապատասխանի ${t.pattern} ձևաչափին`
                : `Սխալ ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${e.divisor}-ի`;
      case `unrecognized_keys`:
        return `Չճանաչված բանալի${e.keys.length > 1 ? `ներ` : ``}. ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Սխալ բանալի ${Ro(e.origin)}-ում`;
      case `invalid_union`:
        return `Սխալ մուտքագրում`;
      case `invalid_element`:
        return `Սխալ արժեք ${Ro(e.origin)}-ում`;
      default:
        return `Սխալ մուտքագրում`;
    }
  };
};
function Bo() {
  return { localeError: zo() };
}
var Vo = () => {
  let e = {
    string: { unit: `karakter`, verb: `memiliki` },
    file: { unit: `byte`, verb: `memiliki` },
    array: { unit: `item`, verb: `memiliki` },
    set: { unit: `item`, verb: `memiliki` },
    map: { unit: `item`, verb: `memiliki` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `alamat email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `tanggal dan waktu format ISO`,
      date: `tanggal format ISO`,
      time: `jam format ISO`,
      duration: `durasi format ISO`,
      ipv4: `alamat IPv4`,
      ipv6: `alamat IPv6`,
      mac: `alamat MAC`,
      cidrv4: `rentang alamat IPv4`,
      cidrv6: `rentang alamat IPv6`,
      base64: `string dengan enkode base64`,
      base64url: `string dengan enkode base64url`,
      json_string: `string JSON`,
      e164: `angka E.164`,
      credit_card: `nomor kartu kredit`,
      currency_code: `kode mata uang`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Input tidak valid: diharapkan instanceof ${e.expected}, diterima ${i}`
          : `Input tidak valid: diharapkan ${t}, diterima ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Input tidak valid: diharapkan ${R(e.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Terlalu besar: diharapkan ${e.origin ?? `value`} memiliki ${n}${e.maximum.toString()} ${r.unit ?? `elemen`}`
          : `Terlalu besar: diharapkan ${e.origin ?? `value`} menjadi ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Terlalu kecil: diharapkan ${e.origin} memiliki ${n}${e.minimum.toString()} ${r.unit}`
          : `Terlalu kecil: diharapkan ${e.origin} menjadi ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `String tidak valid: harus dimulai dengan "${t.prefix}"`
          : t.format === `ends_with`
            ? `String tidak valid: harus berakhir dengan "${t.suffix}"`
            : t.format === `includes`
              ? `String tidak valid: harus menyertakan "${t.includes}"`
              : t.format === `regex`
                ? `String tidak valid: harus sesuai pola ${t.pattern}`
                : `${n[t.format] ?? e.format} tidak valid`;
      }
      case `not_multiple_of`:
        return `Angka tidak valid: harus kelipatan dari ${e.divisor}`;
      case `unrecognized_keys`:
        return `Kunci tidak dikenali ${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Kunci tidak valid di ${e.origin}`;
      case `invalid_union`:
        return `Input tidak valid`;
      case `invalid_element`:
        return `Nilai tidak valid di ${e.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function Ho() {
  return { localeError: Vo() };
}
var Uo = () => {
  let e = {
    string: { unit: `stafi`, verb: `að hafa` },
    file: { unit: `bæti`, verb: `að hafa` },
    array: { unit: `hluti`, verb: `að hafa` },
    set: { unit: `hluti`, verb: `að hafa` },
    map: { unit: `hluti`, verb: `að hafa` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `gildi`,
      email: `netfang`,
      url: `vefslóð`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO dagsetning og tími`,
      date: `ISO dagsetning`,
      time: `ISO tími`,
      duration: `ISO tímalengd`,
      ipv4: `IPv4 address`,
      ipv6: `IPv6 address`,
      mac: `MAC address`,
      cidrv4: `IPv4 range`,
      cidrv6: `IPv6 range`,
      base64: `base64-encoded strengur`,
      base64url: `base64url-encoded strengur`,
      json_string: `JSON strengur`,
      e164: `E.164 tölugildi`,
      credit_card: `kreditkortanúmer`,
      currency_code: `gjaldmiðilskóði`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `gildi`,
    },
    r = { nan: `NaN`, number: `númer`, array: `fylki` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Rangt gildi: Þú slóst inn ${i} þar sem á að vera instanceof ${e.expected}`
          : `Rangt gildi: Þú slóst inn ${i} þar sem á að vera ${t}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Rangt gildi: gert ráð fyrir ${R(e.values[0])}`
          : `Ógilt val: má vera eitt af eftirfarandi ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Of stórt: gert er ráð fyrir að ${e.origin ?? `gildi`} hafi ${n}${e.maximum.toString()} ${r.unit ?? `hluti`}`
          : `Of stórt: gert er ráð fyrir að ${e.origin ?? `gildi`} sé ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Of lítið: gert er ráð fyrir að ${e.origin} hafi ${n}${e.minimum.toString()} ${r.unit}`
          : `Of lítið: gert er ráð fyrir að ${e.origin} sé ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ógildur strengur: verður að byrja á "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ógildur strengur: verður að enda á "${t.suffix}"`
            : t.format === `includes`
              ? `Ógildur strengur: verður að innihalda "${t.includes}"`
              : t.format === `regex`
                ? `Ógildur strengur: verður að fylgja mynstri ${t.pattern}`
                : `Rangt ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Röng tala: verður að vera margfeldi af ${e.divisor}`;
      case `unrecognized_keys`:
        return `Óþekkt ${e.keys.length > 1 ? `ir lyklar` : `ur lykill`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Rangur lykill í ${e.origin}`;
      case `invalid_union`:
        return `Rangt gildi`;
      case `invalid_element`:
        return `Rangt gildi í ${e.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function Wo() {
  return { localeError: Uo() };
}
var Go = () => {
  let e = {
    string: { unit: `caratteri`, verb: `avere` },
    file: { unit: `byte`, verb: `avere` },
    array: { unit: `elementi`, verb: `avere` },
    set: { unit: `elementi`, verb: `avere` },
    map: { unit: `elementi`, verb: `avere` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `indirizzo email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `data e ora ISO`,
      date: `data ISO`,
      time: `ora ISO`,
      duration: `durata ISO`,
      ipv4: `indirizzo IPv4`,
      ipv6: `indirizzo IPv6`,
      mac: `indirizzo MAC`,
      cidrv4: `intervallo IPv4`,
      cidrv6: `intervallo IPv6`,
      base64: `stringa codificata in base64`,
      base64url: `URL codificata in base64`,
      json_string: `stringa JSON`,
      e164: `numero E.164`,
      credit_card: `numero di carta di credito`,
      currency_code: `codice valuta`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN`, number: `numero`, array: `vettore` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Input non valido: atteso instanceof ${e.expected}, ricevuto ${i}`
          : `Input non valido: atteso ${t}, ricevuto ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Input non valido: atteso ${R(e.values[0])}`
          : `Opzione non valida: atteso uno tra ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Troppo grande: ${e.origin ?? `valore`} deve avere ${n}${e.maximum.toString()} ${r.unit ?? `elementi`}`
          : `Troppo grande: ${e.origin ?? `valore`} deve essere ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Troppo piccolo: ${e.origin} deve avere ${n}${e.minimum.toString()} ${r.unit}`
          : `Troppo piccolo: ${e.origin} deve essere ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Stringa non valida: deve iniziare con "${t.prefix}"`
          : t.format === `ends_with`
            ? `Stringa non valida: deve terminare con "${t.suffix}"`
            : t.format === `includes`
              ? `Stringa non valida: deve includere "${t.includes}"`
              : t.format === `regex`
                ? `Stringa non valida: deve corrispondere al pattern ${t.pattern}`
                : `Input non valido: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Numero non valido: deve essere un multiplo di ${e.divisor}`;
      case `unrecognized_keys`:
        return `Chiav${e.keys.length > 1 ? `i` : `e`} non riconosciut${e.keys.length > 1 ? `e` : `a`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Chiave non valida in ${e.origin}`;
      case `invalid_union`:
        return `Input non valido`;
      case `invalid_element`:
        return `Valore non valido in ${e.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function Ko() {
  return { localeError: Go() };
}
var qo = () => {
  let e = {
    string: { unit: `文字`, verb: `である` },
    file: { unit: `バイト`, verb: `である` },
    array: { unit: `要素`, verb: `である` },
    set: { unit: `要素`, verb: `である` },
    map: { unit: `要素`, verb: `である` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `入力値`,
      email: `メールアドレス`,
      url: `URL`,
      emoji: `絵文字`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO日時`,
      date: `ISO日付`,
      time: `ISO時刻`,
      duration: `ISO期間`,
      ipv4: `IPv4アドレス`,
      ipv6: `IPv6アドレス`,
      mac: `MACアドレス`,
      cidrv4: `IPv4範囲`,
      cidrv6: `IPv6範囲`,
      base64: `base64エンコード文字列`,
      base64url: `base64urlエンコード文字列`,
      json_string: `JSON文字列`,
      e164: `E.164番号`,
      credit_card: `クレジットカード番号`,
      currency_code: `通貨コード`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `入力値`,
    },
    r = { nan: `NaN`, number: `数値`, array: `配列` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `無効な入力: instanceof ${e.expected}が期待されましたが、${i}が入力されました`
          : `無効な入力: ${t}が期待されましたが、${i}が入力されました`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `無効な入力: ${R(e.values[0])}が期待されました`
          : `無効な選択: ${I(e.values, `、`)}のいずれかである必要があります`;
      case `too_big`: {
        let n = e.inclusive ? `以下である` : `より小さい`,
          r = t(e.origin);
        return r
          ? `大きすぎる値: ${e.origin ?? `値`}は${e.maximum.toString()}${r.unit ?? `要素`}${n}必要があります`
          : `大きすぎる値: ${e.origin ?? `値`}は${e.maximum.toString()}${n}必要があります`;
      }
      case `too_small`: {
        let n = e.inclusive ? `以上である` : `より大きい`,
          r = t(e.origin);
        return r
          ? `小さすぎる値: ${e.origin}は${e.minimum.toString()}${r.unit}${n}必要があります`
          : `小さすぎる値: ${e.origin}は${e.minimum.toString()}${n}必要があります`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `無効な文字列: "${t.prefix}"で始まる必要があります`
          : t.format === `ends_with`
            ? `無効な文字列: "${t.suffix}"で終わる必要があります`
            : t.format === `includes`
              ? `無効な文字列: "${t.includes}"を含む必要があります`
              : t.format === `regex`
                ? `無効な文字列: パターン${t.pattern}に一致する必要があります`
                : `無効な${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `無効な数値: ${e.divisor}の倍数である必要があります`;
      case `unrecognized_keys`:
        return `認識されていないキー${e.keys.length > 1 ? `群` : ``}: ${I(e.keys, `、`)}`;
      case `invalid_key`:
        return `${e.origin}内の無効なキー`;
      case `invalid_union`:
        return `無効な入力`;
      case `invalid_element`:
        return `${e.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
};
function Jo() {
  return { localeError: qo() };
}
var Yo = () => {
  let e = {
    string: { unit: `სიმბოლო`, verb: `უნდა შეიცავდეს` },
    file: { unit: `ბაიტი`, verb: `უნდა შეიცავდეს` },
    array: { unit: `ელემენტი`, verb: `უნდა შეიცავდეს` },
    set: { unit: `ელემენტი`, verb: `უნდა შეიცავდეს` },
    map: { unit: `ელემენტი`, verb: `უნდა შეიცავდეს` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `შეყვანა`,
      email: `ელ-ფოსტის მისამართი`,
      url: `URL`,
      emoji: `ემოჯი`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `თარიღი-დრო`,
      date: `თარიღი`,
      time: `დრო`,
      duration: `ხანგრძლივობა`,
      ipv4: `IPv4 მისამართი`,
      ipv6: `IPv6 მისამართი`,
      mac: `MAC მისამართი`,
      cidrv4: `IPv4 დიაპაზონი`,
      cidrv6: `IPv6 დიაპაზონი`,
      base64: `base64-კოდირებული ველი`,
      base64url: `base64url-კოდირებული ველი`,
      json_string: `JSON ველი`,
      e164: `E.164 ნომერი`,
      credit_card: `საკრედიტო ბარათის ნომერი`,
      currency_code: `ვალუტის კოდი`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `შეყვანა`,
    },
    r = {
      nan: `NaN`,
      number: `რიცხვი`,
      string: `ველი`,
      boolean: `ბულეანი`,
      function: `ფუნქცია`,
      array: `მასივი`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${e.expected}, მიღებული ${i}`
          : `არასწორი შეყვანა: მოსალოდნელი ${t}, მიღებული ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `არასწორი შეყვანა: მოსალოდნელი ${R(e.values[0])}`
          : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${I(e.values, `|`)}-დან`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? `მნიშვნელობა`} ${r.verb} ${n}${e.maximum.toString()} ${r.unit}`
          : `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? `მნიშვნელობა`} იყოს ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `ზედმეტად პატარა: მოსალოდნელი ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}`
          : `ზედმეტად პატარა: მოსალოდნელი ${e.origin} იყოს ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `არასწორი ველი: უნდა იწყებოდეს "${t.prefix}"-ით`
          : t.format === `ends_with`
            ? `არასწორი ველი: უნდა მთავრდებოდეს "${t.suffix}"-ით`
            : t.format === `includes`
              ? `არასწორი ველი: უნდა შეიცავდეს "${t.includes}"-ს`
              : t.format === `regex`
                ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${t.pattern}`
                : `არასწორი ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `არასწორი რიცხვი: უნდა იყოს ${e.divisor}-ის ჯერადი`;
      case `unrecognized_keys`:
        return `უცნობი გასაღებ${e.keys.length > 1 ? `ები` : `ი`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `არასწორი გასაღები ${e.origin}-ში`;
      case `invalid_union`:
        return `არასწორი შეყვანა`;
      case `invalid_element`:
        return `არასწორი მნიშვნელობა ${e.origin}-ში`;
      default:
        return `არასწორი შეყვანა`;
    }
  };
};
function Xo() {
  return { localeError: Yo() };
}
var Zo = () => {
  let e = {
    string: { unit: `តួអក្សរ`, verb: `គួរមាន` },
    file: { unit: `បៃ`, verb: `គួរមាន` },
    array: { unit: `ធាតុ`, verb: `គួរមាន` },
    set: { unit: `ធាតុ`, verb: `គួរមាន` },
    map: { unit: `ធាតុ`, verb: `គួរមាន` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ទិន្នន័យបញ្ចូល`,
      email: `អាសយដ្ឋានអ៊ីមែល`,
      url: `URL`,
      emoji: `សញ្ញាអារម្មណ៍`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `កាលបរិច្ឆេទ និងម៉ោង ISO`,
      date: `កាលបរិច្ឆេទ ISO`,
      time: `ម៉ោង ISO`,
      duration: `រយៈពេល ISO`,
      ipv4: `អាសយដ្ឋាន IPv4`,
      ipv6: `អាសយដ្ឋាន IPv6`,
      mac: `អាសយដ្ឋាន MAC`,
      cidrv4: `ដែនអាសយដ្ឋាន IPv4`,
      cidrv6: `ដែនអាសយដ្ឋាន IPv6`,
      base64: `ខ្សែអក្សរអ៊ិកូដ base64`,
      base64url: `ខ្សែអក្សរអ៊ិកូដ base64url`,
      json_string: `ខ្សែអក្សរ JSON`,
      e164: `លេខ E.164`,
      credit_card: `លេខប័ណ្ណឥណទាន`,
      currency_code: `កូដរូបិយប័ណ្ណ`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ទិន្នន័យបញ្ចូល`,
    },
    r = {
      nan: `NaN`,
      number: `លេខ`,
      array: `អារេ (Array)`,
      null: `គ្មានតម្លៃ (null)`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${e.expected} ប៉ុន្តែទទួលបាន ${i}`
          : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t} ប៉ុន្តែទទួលបាន ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${R(e.values[0])}`
          : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `ធំពេក៖ ត្រូវការ ${e.origin ?? `តម្លៃ`} ${n} ${e.maximum.toString()} ${r.unit ?? `ធាតុ`}`
          : `ធំពេក៖ ត្រូវការ ${e.origin ?? `តម្លៃ`} ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()} ${r.unit}`
          : `តូចពេក៖ ត្រូវការ ${e.origin} ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${t.prefix}"`
          : t.format === `ends_with`
            ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${t.suffix}"`
            : t.format === `includes`
              ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${t.includes}"`
              : t.format === `regex`
                ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${t.pattern}`
                : `មិនត្រឹមត្រូវ៖ ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${e.divisor}`;
      case `unrecognized_keys`:
        return `រកឃើញសោមិនស្គាល់៖ ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
      case `invalid_union`:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case `invalid_element`:
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
    }
  };
};
function Qo() {
  return { localeError: Zo() };
}
function $o() {
  return Qo();
}
var es = () => {
  let e = {
    string: { unit: `ಅಕ್ಷರಗಳು`, verb: `ಹೊಂದಲು` },
    file: { unit: `ಬೈಟ್‌ಗಳು`, verb: `ಹೊಂದಲು` },
    array: { unit: `ವಸ್ತುಗಳು`, verb: `ಹೊಂದಲು` },
    set: { unit: `ವಸ್ತುಗಳು`, verb: `ಹೊಂದಲು` },
    map: { unit: `entries`, verb: `ಹೊಂದಲು` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ಇನ್ಪುಟ್`,
      email: `email ವಿಳಾಸ`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO ದಿನಾಂಕದ ಸಮಯ`,
      date: `ISO ದಿನಾಂಕ`,
      time: `ISO ಸಮಯ`,
      duration: `ISO ಅವಧಿ`,
      ipv4: `IPv4 ವಿಳಾಸ`,
      ipv6: `IPv6 ವಿಳಾಸ`,
      mac: `MAC ವಿಳಾಸ`,
      cidrv4: `IPv4 ವ್ಯಾಪ್ತಿಯ`,
      cidrv6: `IPv6 ವ್ಯಾಪ್ತಿಯ`,
      base64: `base64-encodedಸ್ಟ್ರಿಂಗ್`,
      base64url: `base64url-encodedಸ್ಟ್ರಿಂಗ್`,
      json_string: `JSONಸ್ಟ್ರಿಂಗ್`,
      e164: `E.164 ಸಂಖ್ಯೆ`,
      credit_card: `ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ`,
      currency_code: `ಕರೆನ್ಸಿ ಕೋಡ್`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ಇನ್ಪುಟ್`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${t}, ಸ್ವೀಕರಿಸಿದನು ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${R(e.values[0])}`
          : `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e.origin ?? `value`} ಹೊಂದಲು ${n}${e.maximum.toString()} ${r.unit ?? `ಅಂಶಗಳು`}`
          : `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e.origin ?? `value`} ಎಂದು ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e.origin} ಹೊಂದಲು ${n}${e.minimum.toString()} ${r.unit}`
          : `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e.origin} ಎಂದು ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${t.prefix}"`
          : t.format === `ends_with`
            ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${t.suffix}"`
            : t.format === `includes`
              ? `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${t.includes}"`
              : t.format === `regex`
                ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${t.pattern}`
                : `ಅಮಾನ್ಯ ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${e.divisor}`;
      case `unrecognized_keys`:
        return `ಗುರುತಿಸಲಾಗದ ಕೀ ${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${e.origin}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್`;
      case `invalid_element`:
        return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${e.origin}`;
      default:
        return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್`;
    }
  };
};
function ts() {
  return { localeError: es() };
}
var ns = () => {
  let e = {
    string: { unit: `문자`, verb: `to have` },
    file: { unit: `바이트`, verb: `to have` },
    array: { unit: `개`, verb: `to have` },
    set: { unit: `개`, verb: `to have` },
    map: { unit: `개`, verb: `to have` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `입력`,
      email: `이메일 주소`,
      url: `URL`,
      emoji: `이모지`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO 날짜시간`,
      date: `ISO 날짜`,
      time: `ISO 시간`,
      duration: `ISO 기간`,
      ipv4: `IPv4 주소`,
      ipv6: `IPv6 주소`,
      mac: `MAC 주소`,
      cidrv4: `IPv4 범위`,
      cidrv6: `IPv6 범위`,
      base64: `base64 인코딩 문자열`,
      base64url: `base64url 인코딩 문자열`,
      json_string: `JSON 문자열`,
      e164: `E.164 번호`,
      credit_card: `신용카드 번호`,
      currency_code: `통화 코드`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `입력`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `잘못된 입력: 예상 타입은 instanceof ${e.expected}, 받은 타입은 ${i}입니다`
          : `잘못된 입력: 예상 타입은 ${t}, 받은 타입은 ${i}입니다`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `잘못된 입력: 값은 ${R(e.values[0])} 이어야 합니다`
          : `잘못된 옵션: ${I(e.values, `또는 `)} 중 하나여야 합니다`;
      case `too_big`: {
        let n = e.inclusive ? `이하` : `미만`,
          r = n === `미만` ? `이어야 합니다` : `여야 합니다`,
          i = t(e.origin),
          a = i?.unit ?? `요소`;
        return i
          ? `${e.origin ?? `값`}이 너무 큽니다: ${e.maximum.toString()}${a} ${n}${r}`
          : `${e.origin ?? `값`}이 너무 큽니다: ${e.maximum.toString()} ${n}${r}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `이상` : `초과`,
          r = n === `이상` ? `이어야 합니다` : `여야 합니다`,
          i = t(e.origin),
          a = i?.unit ?? `요소`;
        return i
          ? `${e.origin ?? `값`}이 너무 작습니다: ${e.minimum.toString()}${a} ${n}${r}`
          : `${e.origin ?? `값`}이 너무 작습니다: ${e.minimum.toString()} ${n}${r}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `잘못된 문자열: "${t.prefix}"(으)로 시작해야 합니다`
          : t.format === `ends_with`
            ? `잘못된 문자열: "${t.suffix}"(으)로 끝나야 합니다`
            : t.format === `includes`
              ? `잘못된 문자열: "${t.includes}"을(를) 포함해야 합니다`
              : t.format === `regex`
                ? `잘못된 문자열: 정규식 ${t.pattern} 패턴과 일치해야 합니다`
                : `잘못된 ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `잘못된 숫자: ${e.divisor}의 배수여야 합니다`;
      case `unrecognized_keys`:
        return `인식할 수 없는 키: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `잘못된 키: ${e.origin}`;
      case `invalid_union`:
        return `잘못된 입력`;
      case `invalid_element`:
        return `잘못된 값: ${e.origin}`;
      default:
        return `잘못된 입력`;
    }
  };
};
function rs() {
  return { localeError: ns() };
}
var is = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function as(e) {
  let t = Math.abs(e),
    n = t % 10,
    r = t % 100;
  return (r >= 11 && r <= 19) || n === 0 ? `many` : n === 1 ? `one` : `few`;
}
var os = () => {
  let e = {
    string: {
      unit: { one: `simbolis`, few: `simboliai`, many: `simbolių` },
      verb: {
        smaller: {
          inclusive: `turi būti ne ilgesnė kaip`,
          notInclusive: `turi būti trumpesnė kaip`,
        },
        bigger: {
          inclusive: `turi būti ne trumpesnė kaip`,
          notInclusive: `turi būti ilgesnė kaip`,
        },
      },
    },
    file: {
      unit: { one: `baitas`, few: `baitai`, many: `baitų` },
      verb: {
        smaller: {
          inclusive: `turi būti ne didesnis kaip`,
          notInclusive: `turi būti mažesnis kaip`,
        },
        bigger: {
          inclusive: `turi būti ne mažesnis kaip`,
          notInclusive: `turi būti didesnis kaip`,
        },
      },
    },
    array: {
      unit: { one: `elementą`, few: `elementus`, many: `elementų` },
      verb: {
        smaller: {
          inclusive: `turi turėti ne daugiau kaip`,
          notInclusive: `turi turėti mažiau kaip`,
        },
        bigger: {
          inclusive: `turi turėti ne mažiau kaip`,
          notInclusive: `turi turėti daugiau kaip`,
        },
      },
    },
    set: {
      unit: { one: `elementą`, few: `elementus`, many: `elementų` },
      verb: {
        smaller: {
          inclusive: `turi turėti ne daugiau kaip`,
          notInclusive: `turi turėti mažiau kaip`,
        },
        bigger: {
          inclusive: `turi turėti ne mažiau kaip`,
          notInclusive: `turi turėti daugiau kaip`,
        },
      },
    },
  };
  function t(t, n, r, i) {
    let a = e[t] ?? null;
    return a === null
      ? a
      : { unit: a.unit[n], verb: a.verb[i][r ? `inclusive` : `notInclusive`] };
  }
  let n = {
      regex: `įvestis`,
      email: `el. pašto adresas`,
      url: `URL`,
      emoji: `jaustukas`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO data ir laikas`,
      date: `ISO data`,
      time: `ISO laikas`,
      duration: `ISO trukmė`,
      ipv4: `IPv4 adresas`,
      ipv6: `IPv6 adresas`,
      mac: `MAC adresas`,
      cidrv4: `IPv4 tinklo prefiksas (CIDR)`,
      cidrv6: `IPv6 tinklo prefiksas (CIDR)`,
      base64: `base64 užkoduota eilutė`,
      base64url: `base64url užkoduota eilutė`,
      json_string: `JSON eilutė`,
      e164: `E.164 numeris`,
      credit_card: `kredito kortelės numeris`,
      currency_code: `valiutos kodas`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `įvestis`,
    },
    r = {
      nan: `NaN`,
      number: `skaičius`,
      bigint: `sveikasis skaičius`,
      string: `eilutė`,
      boolean: `loginė reikšmė`,
      undefined: `neapibrėžta reikšmė`,
      function: `funkcija`,
      symbol: `simbolis`,
      array: `masyvas`,
      object: `objektas`,
      null: `nulinė reikšmė`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Gautas tipas ${i}, o tikėtasi - instanceof ${e.expected}`
          : `Gautas tipas ${i}, o tikėtasi - ${t}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Privalo būti ${R(e.values[0])}`
          : `Privalo būti vienas iš ${I(e.values, `|`)} pasirinkimų`;
      case `too_big`: {
        let n = r[e.origin] ?? e.origin,
          i = t(e.origin, as(Number(e.maximum)), e.inclusive ?? !1, `smaller`);
        if (i?.verb)
          return `${is(n ?? e.origin ?? `reikšmė`)} ${i.verb} ${e.maximum.toString()} ${i.unit ?? `elementų`}`;
        let a = e.inclusive ? `ne didesnis kaip` : `mažesnis kaip`;
        return `${is(n ?? e.origin ?? `reikšmė`)} turi būti ${a} ${e.maximum.toString()} ${i?.unit}`;
      }
      case `too_small`: {
        let n = r[e.origin] ?? e.origin,
          i = t(e.origin, as(Number(e.minimum)), e.inclusive ?? !1, `bigger`);
        if (i?.verb)
          return `${is(n ?? e.origin ?? `reikšmė`)} ${i.verb} ${e.minimum.toString()} ${i.unit ?? `elementų`}`;
        let a = e.inclusive ? `ne mažesnis kaip` : `didesnis kaip`;
        return `${is(n ?? e.origin ?? `reikšmė`)} turi būti ${a} ${e.minimum.toString()} ${i?.unit}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Eilutė privalo prasidėti "${t.prefix}"`
          : t.format === `ends_with`
            ? `Eilutė privalo pasibaigti "${t.suffix}"`
            : t.format === `includes`
              ? `Eilutė privalo įtraukti "${t.includes}"`
              : t.format === `regex`
                ? `Eilutė privalo atitikti ${t.pattern}`
                : `Neteisingas ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Skaičius privalo būti ${e.divisor} kartotinis.`;
      case `unrecognized_keys`:
        return `Neatpažint${e.keys.length > 1 ? `i` : `as`} rakt${e.keys.length > 1 ? `ai` : `as`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Rastas klaidingas raktas`;
      case `invalid_union`:
        return `Klaidinga įvestis`;
      case `invalid_element`:
        return `${is(r[e.origin] ?? e.origin ?? e.origin ?? `reikšmė`)} turi klaidingą įvestį`;
      default:
        return `Klaidinga įvestis`;
    }
  };
};
function ss() {
  return { localeError: os() };
}
var cs = () => {
  let e = {
    string: { unit: `знаци`, verb: `да имаат` },
    file: { unit: `бајти`, verb: `да имаат` },
    array: { unit: `ставки`, verb: `да имаат` },
    set: { unit: `ставки`, verb: `да имаат` },
    map: { unit: `ставки`, verb: `да имаат` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `внес`,
      email: `адреса на е-пошта`,
      url: `URL`,
      emoji: `емоџи`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO датум и време`,
      date: `ISO датум`,
      time: `ISO време`,
      duration: `ISO времетраење`,
      ipv4: `IPv4 адреса`,
      ipv6: `IPv6 адреса`,
      mac: `MAC адреса`,
      cidrv4: `IPv4 опсег`,
      cidrv6: `IPv6 опсег`,
      base64: `base64-енкодирана низа`,
      base64url: `base64url-енкодирана низа`,
      json_string: `JSON низа`,
      e164: `E.164 број`,
      credit_card: `број на кредитна картичка`,
      currency_code: `код на валута`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `внес`,
    },
    r = { nan: `NaN`, number: `број`, array: `низа` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Грешен внес: се очекува instanceof ${e.expected}, примено ${i}`
          : `Грешен внес: се очекува ${t}, примено ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Invalid input: expected ${R(e.values[0])}`
          : `Грешана опција: се очекува една ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Премногу голем: се очекува ${e.origin ?? `вредноста`} да има ${n}${e.maximum.toString()} ${r.unit ?? `елементи`}`
          : `Премногу голем: се очекува ${e.origin ?? `вредноста`} да биде ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Премногу мал: се очекува ${e.origin} да има ${n}${e.minimum.toString()} ${r.unit}`
          : `Премногу мал: се очекува ${e.origin} да биде ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Неважечка низа: мора да започнува со "${t.prefix}"`
          : t.format === `ends_with`
            ? `Неважечка низа: мора да завршува со "${t.suffix}"`
            : t.format === `includes`
              ? `Неважечка низа: мора да вклучува "${t.includes}"`
              : t.format === `regex`
                ? `Неважечка низа: мора да одгоара на патернот ${t.pattern}`
                : `Invalid ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Грешен број: мора да биде делив со ${e.divisor}`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Непрепознаени клучеви` : `Непрепознаен клуч`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Грешен клуч во ${e.origin}`;
      case `invalid_union`:
        return `Грешен внес`;
      case `invalid_element`:
        return `Грешна вредност во ${e.origin}`;
      default:
        return `Грешен внес`;
    }
  };
};
function ls() {
  return { localeError: cs() };
}
var us = () => {
  let e = {
    string: { unit: `aksara`, verb: `mempunyai` },
    file: { unit: `bait`, verb: `mempunyai` },
    array: { unit: `elemen`, verb: `mempunyai` },
    set: { unit: `elemen`, verb: `mempunyai` },
    map: { unit: `elemen`, verb: `mempunyai` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `alamat e-mel`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `tarikh masa ISO`,
      date: `tarikh ISO`,
      time: `masa ISO`,
      duration: `tempoh ISO`,
      ipv4: `alamat IPv4`,
      ipv6: `alamat IPv6`,
      mac: `alamat MAC`,
      cidrv4: `julat IPv4`,
      cidrv6: `julat IPv6`,
      base64: `string dikodkan base64`,
      base64url: `string dikodkan base64url`,
      json_string: `string JSON`,
      e164: `nombor E.164`,
      credit_card: `nombor kad kredit`,
      currency_code: `kod mata wang`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN`, number: `nombor` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Input tidak sah: dijangka instanceof ${e.expected}, diterima ${i}`
          : `Input tidak sah: dijangka ${t}, diterima ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Input tidak sah: dijangka ${R(e.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Terlalu besar: dijangka ${e.origin ?? `nilai`} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? `elemen`}`
          : `Terlalu besar: dijangka ${e.origin ?? `nilai`} adalah ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Terlalu kecil: dijangka ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}`
          : `Terlalu kecil: dijangka ${e.origin} adalah ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `String tidak sah: mesti bermula dengan "${t.prefix}"`
          : t.format === `ends_with`
            ? `String tidak sah: mesti berakhir dengan "${t.suffix}"`
            : t.format === `includes`
              ? `String tidak sah: mesti mengandungi "${t.includes}"`
              : t.format === `regex`
                ? `String tidak sah: mesti sepadan dengan corak ${t.pattern}`
                : `${n[t.format] ?? e.format} tidak sah`;
      }
      case `not_multiple_of`:
        return `Nombor tidak sah: perlu gandaan ${e.divisor}`;
      case `unrecognized_keys`:
        return `Kunci tidak dikenali: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Kunci tidak sah dalam ${e.origin}`;
      case `invalid_union`:
        return `Input tidak sah`;
      case `invalid_element`:
        return `Nilai tidak sah dalam ${e.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function ds() {
  return { localeError: us() };
}
var fs = () => {
  let e = {
    string: { unit: `अक्षर`, verb: `हुनुपर्छ` },
    file: { unit: `बाइट`, verb: `हुनुपर्छ` },
    array: { unit: `तत्व`, verb: `हुनुपर्छ` },
    set: { unit: `तत्व`, verb: `हुनुपर्छ` },
    map: { unit: `प्रविष्टि`, verb: `हुनुपर्छ` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `इनपुट`,
      email: `इमेल ठेगाना`,
      url: `URL`,
      emoji: `इमोजी`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO मिति र समय`,
      date: `ISO मिति`,
      time: `ISO समय`,
      duration: `ISO अवधि`,
      ipv4: `IPv4 ठेगाना`,
      ipv6: `IPv6 ठेगाना`,
      mac: `MAC ठेगाना`,
      cidrv4: `IPv4 दायरा`,
      cidrv6: `IPv6 दायरा`,
      base64: `base64-इन्कोड गरिएको स्ट्रिङ`,
      base64url: `base64url-इन्कोड गरिएको स्ट्रिङ`,
      json_string: `JSON स्ट्रिङ`,
      e164: `E.164 नम्बर`,
      credit_card: `क्रेडिट कार्ड नम्बर`,
      currency_code: `मुद्रा कोड`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `इनपुट`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `अमान्य इनपुट: अपेक्षित ${t}, प्राप्त ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `अमान्य इनपुट: अपेक्षित ${R(e.values[0])}`
          : `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `धेरै ठूलो: ${e.origin ?? `मान`} मा ${n}${e.maximum.toString()} ${r.unit} ${r.verb}`
          : `धेरै ठूलो: ${e.origin ?? `मान`} ${n}${e.maximum.toString()} हुनुपर्छ`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `धेरै सानो: ${e.origin} मा ${n}${e.minimum.toString()} ${r.unit} ${r.verb}`
          : `धेरै सानो: ${e.origin} ${n}${e.minimum.toString()} हुनुपर्छ`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `अमान्य स्ट्रिङ: "${t.prefix}" बाट सुरु हुनुपर्छ`
          : t.format === `ends_with`
            ? `अमान्य स्ट्रिङ: "${t.suffix}" मा समाप्त हुनुपर्छ`
            : t.format === `includes`
              ? `अमान्य स्ट्रिङ: "${t.includes}" समावेश हुनुपर्छ`
              : t.format === `regex`
                ? `अमान्य स्ट्रिङ: ढाँचा ${t.pattern} सँग मेल खानुपर्छ`
                : `अमान्य ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `अमान्य संख्या: ${e.divisor} को गुणज हुनुपर्छ`;
      case `unrecognized_keys`:
        return `अपरिचित कुञ्जी${e.keys.length > 1 ? `हरू` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `अमान्य कुञ्जी: ${e.origin} मा`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `अमान्य इनपुट`;
      case `invalid_element`:
        return `अमान्य मान: ${e.origin} मा`;
      default:
        return `अमान्य इनपुट`;
    }
  };
};
function ps() {
  return { localeError: fs() };
}
var ms = () => {
  let e = {
    string: { unit: `tekens`, verb: `heeft` },
    file: { unit: `bytes`, verb: `heeft` },
    array: { unit: `elementen`, verb: `heeft` },
    set: { unit: `elementen`, verb: `heeft` },
    map: { unit: `elementen`, verb: `heeft` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `invoer`,
      email: `emailadres`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO datum en tijd`,
      date: `ISO datum`,
      time: `ISO tijd`,
      duration: `ISO duur`,
      ipv4: `IPv4-adres`,
      ipv6: `IPv6-adres`,
      mac: `MAC-adres`,
      cidrv4: `IPv4-bereik`,
      cidrv6: `IPv6-bereik`,
      base64: `base64-gecodeerde tekst`,
      base64url: `base64 URL-gecodeerde tekst`,
      json_string: `JSON string`,
      e164: `E.164-nummer`,
      credit_card: `creditcardnummer`,
      currency_code: `valutacode`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `invoer`,
    },
    r = { nan: `NaN`, number: `getal` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ongeldige invoer: verwacht instanceof ${e.expected}, ontving ${i}`
          : `Ongeldige invoer: verwacht ${t}, ontving ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ongeldige invoer: verwacht ${R(e.values[0])}`
          : `Ongeldige optie: verwacht één van ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin),
          i =
            e.origin === `date`
              ? `laat`
              : e.origin === `string`
                ? `lang`
                : `groot`;
        return r
          ? `Te ${i}: verwacht dat ${e.origin ?? `waarde`} ${n}${e.maximum.toString()} ${r.unit ?? `elementen`} ${r.verb}`
          : `Te ${i}: verwacht dat ${e.origin ?? `waarde`} ${n}${e.maximum.toString()} is`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin),
          i =
            e.origin === `date`
              ? `vroeg`
              : e.origin === `string`
                ? `kort`
                : `klein`;
        return r
          ? `Te ${i}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ${r.verb}`
          : `Te ${i}: verwacht dat ${e.origin} ${n}${e.minimum.toString()} is`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ongeldige tekst: moet met "${t.prefix}" beginnen`
          : t.format === `ends_with`
            ? `Ongeldige tekst: moet op "${t.suffix}" eindigen`
            : t.format === `includes`
              ? `Ongeldige tekst: moet "${t.includes}" bevatten`
              : t.format === `regex`
                ? `Ongeldige tekst: moet overeenkomen met patroon ${t.pattern}`
                : `Ongeldig: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ongeldig getal: moet een veelvoud van ${e.divisor} zijn`;
      case `unrecognized_keys`:
        return `Onbekende key${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ongeldige key in ${e.origin}`;
      case `invalid_union`:
        return `Ongeldige invoer`;
      case `invalid_element`:
        return `Ongeldige waarde in ${e.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function hs() {
  return { localeError: ms() };
}
var gs = () => {
  let e = {
    string: { unit: `teikn`, verb: `å ha` },
    file: { unit: `bytes`, verb: `å ha` },
    array: { unit: `element`, verb: `å innehalde` },
    set: { unit: `element`, verb: `å innehalde` },
    map: { unit: `element`, verb: `å innehalde` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `e-postadresse`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO dato- og klokkeslett`,
      date: `ISO-dato`,
      time: `ISO-klokkeslett`,
      duration: `ISO-varigheit`,
      ipv4: `IPv4-adresse`,
      ipv6: `IPv6-adresse`,
      mac: `MAC-adresse`,
      cidrv4: `IPv4-spekter`,
      cidrv6: `IPv6-spekter`,
      base64: `base64-enkoda streng`,
      base64url: `base64url-enkoda streng`,
      json_string: `JSON-streng`,
      e164: `E.164-nummer`,
      credit_card: `kredittkortnummer`,
      currency_code: `valutakode`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN`, number: `tal`, array: `liste` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ugyldig input: forventa instanceof ${e.expected}, fekk ${i}`
          : `Ugyldig input: forventa ${t}, fekk ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ugyldig verdi: forventa ${R(e.values[0])}`
          : `Ugyldig val: forventa eitt av ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `For stor(t): forventa ${e.origin ?? `value`} til å ha ${n}${e.maximum.toString()} ${r.unit ?? `element`}`
          : `For stor(t): forventa ${e.origin ?? `value`} til å ha ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `For lite(n): forventa ${e.origin} til å ha ${n}${e.minimum.toString()} ${r.unit}`
          : `For lite(n): forventa ${e.origin} til å ha ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ugyldig streng: må starte med "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ugyldig streng: må slutte med "${t.suffix}"`
            : t.format === `includes`
              ? `Ugyldig streng: må innehalde "${t.includes}"`
              : t.format === `regex`
                ? `Ugyldig streng: må matche mønsteret ${t.pattern}`
                : `Ugyldig ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldig tal: må vere eit multiplum av ${e.divisor}`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Ukjende nøklar` : `Ukjend nøkkel`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøkkel i ${e.origin}`;
      case `invalid_union`:
        return `Ugyldig input`;
      case `invalid_element`:
        return `Ugyldig verdi i ${e.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function _s() {
  return { localeError: gs() };
}
var vs = () => {
  let e = {
    string: { unit: `tegn`, verb: `å ha` },
    file: { unit: `bytes`, verb: `å ha` },
    array: { unit: `elementer`, verb: `å inneholde` },
    set: { unit: `elementer`, verb: `å inneholde` },
    map: { unit: `elementer`, verb: `å inneholde` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `input`,
      email: `e-postadresse`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO dato- og klokkeslett`,
      date: `ISO-dato`,
      time: `ISO-klokkeslett`,
      duration: `ISO-varighet`,
      ipv4: `IPv4-adresse`,
      ipv6: `IPv6-adresse`,
      mac: `MAC-adresse`,
      cidrv4: `IPv4-spekter`,
      cidrv6: `IPv6-spekter`,
      base64: `base64-enkodet streng`,
      base64url: `base64url-enkodet streng`,
      json_string: `JSON-streng`,
      e164: `E.164-nummer`,
      credit_card: `kredittkortnummer`,
      currency_code: `valutakode`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN`, number: `tall`, array: `liste` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ugyldig input: forventet instanceof ${e.expected}, fikk ${i}`
          : `Ugyldig input: forventet ${t}, fikk ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ugyldig verdi: forventet ${R(e.values[0])}`
          : `Ugyldig valg: forventet en av ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `For stor(t): forventet ${e.origin ?? `value`} til å ha ${n}${e.maximum.toString()} ${r.unit ?? `elementer`}`
          : `For stor(t): forventet ${e.origin ?? `value`} til å ha ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()} ${r.unit}`
          : `For lite(n): forventet ${e.origin} til å ha ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ugyldig streng: må starte med "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ugyldig streng: må ende med "${t.suffix}"`
            : t.format === `includes`
              ? `Ugyldig streng: må inneholde "${t.includes}"`
              : t.format === `regex`
                ? `Ugyldig streng: må matche mønsteret ${t.pattern}`
                : `Ugyldig ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldig tall: må være et multiplum av ${e.divisor}`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Ukjente nøkler` : `Ukjent nøkkel`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøkkel i ${e.origin}`;
      case `invalid_union`:
        return `Ugyldig input`;
      case `invalid_element`:
        return `Ugyldig verdi i ${e.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function ys() {
  return { localeError: vs() };
}
var bs = () => {
  let e = {
    string: { unit: `harf`, verb: `olmalıdır` },
    file: { unit: `bayt`, verb: `olmalıdır` },
    array: { unit: `unsur`, verb: `olmalıdır` },
    set: { unit: `unsur`, verb: `olmalıdır` },
    map: { unit: `unsur`, verb: `olmalıdır` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `giren`,
      email: `epostagâh`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO hengâmı`,
      date: `ISO tarihi`,
      time: `ISO zamanı`,
      duration: `ISO müddeti`,
      ipv4: `IPv4 nişânı`,
      ipv6: `IPv6 nişânı`,
      mac: `MAC nişânı`,
      cidrv4: `IPv4 menzili`,
      cidrv6: `IPv6 menzili`,
      base64: `base64-şifreli metin`,
      base64url: `base64url-şifreli metin`,
      json_string: `JSON metin`,
      e164: `E.164 sayısı`,
      credit_card: `i'tibâr kartı numarası`,
      currency_code: `para birimi kodu`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `giren`,
    },
    r = { nan: `NaN`, number: `numara`, array: `saf`, null: `gayb` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Fâsit giren: umulan instanceof ${e.expected}, alınan ${i}`
          : `Fâsit giren: umulan ${t}, alınan ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Fâsit giren: umulan ${R(e.values[0])}`
          : `Fâsit tercih: mûteberler ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Fazla büyük: ${e.origin ?? `value`}, ${n}${e.maximum.toString()} ${r.unit ?? `elements`} sahip olmalıydı.`
          : `Fazla büyük: ${e.origin ?? `value`}, ${n}${e.maximum.toString()} olmalıydı.`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} ${r.unit} sahip olmalıydı.`
          : `Fazla küçük: ${e.origin}, ${n}${e.minimum.toString()} olmalıydı.`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Fâsit metin: "${t.prefix}" ile başlamalı.`
          : t.format === `ends_with`
            ? `Fâsit metin: "${t.suffix}" ile bitmeli.`
            : t.format === `includes`
              ? `Fâsit metin: "${t.includes}" ihtivâ etmeli.`
              : t.format === `regex`
                ? `Fâsit metin: ${t.pattern} nakşına uymalı.`
                : `Fâsit ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Fâsit sayı: ${e.divisor} katı olmalıydı.`;
      case `unrecognized_keys`:
        return `Tanınmayan anahtar ${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} için tanınmayan anahtar var.`;
      case `invalid_union`:
        return `Giren tanınamadı.`;
      case `invalid_element`:
        return `${e.origin} için tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
};
function xs() {
  return { localeError: bs() };
}
var Ss = () => {
  let e = {
    string: { unit: `توکي`, verb: `ولري` },
    file: { unit: `بایټس`, verb: `ولري` },
    array: { unit: `توکي`, verb: `ولري` },
    set: { unit: `توکي`, verb: `ولري` },
    map: { unit: `توکي`, verb: `ولري` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ورودي`,
      email: `بریښنالیک`,
      url: `یو آر ال`,
      emoji: `ایموجي`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `نیټه او وخت`,
      date: `نېټه`,
      time: `وخت`,
      duration: `موده`,
      ipv4: `د IPv4 پته`,
      ipv6: `د IPv6 پته`,
      mac: `د MAC پته`,
      cidrv4: `د IPv4 ساحه`,
      cidrv6: `د IPv6 ساحه`,
      base64: `base64-encoded متن`,
      base64url: `base64url-encoded متن`,
      json_string: `JSON متن`,
      e164: `د E.164 شمېره`,
      credit_card: `د کریډیټ کارت شمیره`,
      currency_code: `د اسعارو کوډ`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ورودي`,
    },
    r = { nan: `NaN`, number: `عدد`, array: `ارې` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `ناسم ورودي: باید instanceof ${e.expected} وای, مګر ${i} ترلاسه شو`
          : `ناسم ورودي: باید ${t} وای, مګر ${i} ترلاسه شو`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `ناسم ورودي: باید ${R(e.values[0])} وای`
          : `ناسم انتخاب: باید یو له ${I(e.values, `|`)} څخه وای`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `ډیر لوی: ${e.origin ?? `ارزښت`} باید ${n}${e.maximum.toString()} ${r.unit ?? `عنصرونه`} ولري`
          : `ډیر لوی: ${e.origin ?? `ارزښت`} باید ${n}${e.maximum.toString()} وي`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} ${r.unit} ولري`
          : `ډیر کوچنی: ${e.origin} باید ${n}${e.minimum.toString()} وي`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `ناسم متن: باید د "${t.prefix}" سره پیل شي`
          : t.format === `ends_with`
            ? `ناسم متن: باید د "${t.suffix}" سره پای ته ورسيږي`
            : t.format === `includes`
              ? `ناسم متن: باید "${t.includes}" ولري`
              : t.format === `regex`
                ? `ناسم متن: باید د ${t.pattern} سره مطابقت ولري`
                : `${n[t.format] ?? e.format} ناسم دی`;
      }
      case `not_multiple_of`:
        return `ناسم عدد: باید د ${e.divisor} مضرب وي`;
      case `unrecognized_keys`:
        return `ناسم ${e.keys.length > 1 ? `کلیډونه` : `کلیډ`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `ناسم کلیډ په ${e.origin} کې`;
      case `invalid_union`:
        return `ناسمه ورودي`;
      case `invalid_element`:
        return `ناسم عنصر په ${e.origin} کې`;
      default:
        return `ناسمه ورودي`;
    }
  };
};
function Cs() {
  return { localeError: Ss() };
}
var ws = () => {
  let e = {
    string: { unit: `znaków`, verb: `mieć` },
    file: { unit: `bajtów`, verb: `mieć` },
    array: { unit: `elementów`, verb: `mieć` },
    set: { unit: `elementów`, verb: `mieć` },
    map: { unit: `elementów`, verb: `mieć` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `wyrażenie`,
      email: `adres email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `data i godzina w formacie ISO`,
      date: `data w formacie ISO`,
      time: `godzina w formacie ISO`,
      duration: `czas trwania ISO`,
      ipv4: `adres IPv4`,
      ipv6: `adres IPv6`,
      mac: `adres MAC`,
      cidrv4: `zakres IPv4`,
      cidrv6: `zakres IPv6`,
      base64: `ciąg znaków zakodowany w formacie base64`,
      base64url: `ciąg znaków zakodowany w formacie base64url`,
      json_string: `ciąg znaków w formacie JSON`,
      e164: `liczba E.164`,
      credit_card: `numer karty kredytowej`,
      currency_code: `kod waluty`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `wejście`,
    },
    r = { nan: `NaN`, number: `liczba`, array: `tablica` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${e.expected}, otrzymano ${i}`
          : `Nieprawidłowe dane wejściowe: oczekiwano ${t}, otrzymano ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Nieprawidłowe dane wejściowe: oczekiwano ${R(e.values[0])}`
          : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Za duża wartość: oczekiwano, że ${e.origin ?? `wartość`} będzie mieć ${n}${e.maximum.toString()} ${r.unit ?? `elementów`}`
          : `Zbyt duż(y/a/e): oczekiwano, że ${e.origin ?? `wartość`} będzie wynosić ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Za mała wartość: oczekiwano, że ${e.origin ?? `wartość`} będzie mieć ${n}${e.minimum.toString()} ${r.unit ?? `elementów`}`
          : `Zbyt mał(y/a/e): oczekiwano, że ${e.origin ?? `wartość`} będzie wynosić ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${t.prefix}"`
          : t.format === `ends_with`
            ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${t.suffix}"`
            : t.format === `includes`
              ? `Nieprawidłowy ciąg znaków: musi zawierać "${t.includes}"`
              : t.format === `regex`
                ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${t.pattern}`
                : `Nieprawidłow(y/a/e) ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Nieprawidłowa liczba: musi być wielokrotnością ${e.divisor}`;
      case `unrecognized_keys`:
        return `Nierozpoznane klucze${e.keys.length > 1 ? `s` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Nieprawidłowy klucz w ${e.origin}`;
      case `invalid_union`:
        return `Nieprawidłowe dane wejściowe`;
      case `invalid_element`:
        return `Nieprawidłowa wartość w ${e.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
};
function Ts() {
  return { localeError: ws() };
}
var Es = () => {
  let e = {
    string: { unit: `caracteres` },
    file: { unit: `bytes` },
    array: { unit: `elementos` },
    set: { unit: `elementos` },
    map: { unit: `entradas` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `a entrada`,
      email: `o endereço de e-mail`,
      url: `o URL`,
      emoji: `o emoji`,
      uuid: `o UUID`,
      uuidv4: `o UUIDv4`,
      uuidv6: `o UUIDv6`,
      nanoid: `o nanoid`,
      guid: `o GUID`,
      cuid: `o cuid`,
      cuid2: `o cuid2`,
      ulid: `o ULID`,
      xid: `o XID`,
      ksuid: `o KSUID`,
      datetime: `a data e hora ISO`,
      date: `a data ISO`,
      time: `a hora ISO`,
      duration: `a duração ISO`,
      ipv4: `o endereço IPv4`,
      ipv6: `o endereço IPv6`,
      mac: `o endereço MAC`,
      cidrv4: `o intervalo de endereços IPv4`,
      cidrv6: `o intervalo de endereços IPv6`,
      base64: `o texto codificado em base64`,
      base64url: `o texto codificado em base64url`,
      json_string: `o texto JSON`,
      e164: `o número E.164`,
      credit_card: `o número de cartão de crédito`,
      currency_code: `o código de moeda`,
      iban: `o IBAN`,
      jwt: `o JWT`,
      template_literal: `a entrada`,
    },
    r = {
      masculine: { definite: `o`, indefinite: `um` },
      feminine: { definite: `a`, indefinite: `uma` },
    },
    i = {
      string: { name: `texto`, articles: r.masculine },
      number: { name: `número`, articles: r.masculine },
      int: { name: `número inteiro`, articles: r.masculine },
      boolean: { name: `valor booleano`, articles: r.masculine },
      bigint: { name: `número bigint`, articles: r.masculine },
      symbol: { name: `símbolo`, articles: r.masculine },
      undefined: { name: `valor "undefined"`, articles: r.masculine },
      null: { name: `valor "nulo"`, articles: r.masculine },
      never: { name: `valor "never"`, articles: r.masculine },
      void: { name: `valor "void"`, articles: r.masculine },
      date: { name: `data`, articles: r.feminine },
      array: { name: `vetor`, articles: r.masculine },
      object: { name: `objeto`, articles: r.masculine },
      tuple: { name: `tuplo`, articles: r.masculine },
      record: { name: `registo`, articles: r.masculine },
      map: { name: `mapa`, articles: r.masculine },
      set: { name: `conjunto`, articles: r.masculine },
      file: { name: `ficheiro`, articles: r.masculine },
      nonoptional: { name: `valor não opcional`, articles: r.masculine },
      nan: { name: `valor "NaN"`, articles: r.masculine },
      function: { name: `função`, articles: r.feminine },
    };
  function a(e, t) {
    let n = i[e] ?? { name: `valor "${e}"`, articles: r.masculine };
    return `${n.articles[t]} ${n.name}`;
  }
  return (e) => {
    switch (e.code) {
      case `invalid_type`:
        return `Entrada inválida: esperava ${a(e.expected, `indefinite`)}, recebeu ${a(z(e.input), `indefinite`)}`;
      case `invalid_value`:
        return e.values.length === 1
          ? `Entrada inválida: esperava ${R(e.values[0])}`
          : `Opção inválida: esperava uma das seguintes opções: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Demasiado grande: esperava que ${a(e.origin, `definite`)} tivesse ${n} ${e.maximum.toString()} ${r.unit ?? `elementos`}`
          : `Demasiado grande: esperava que ${a(e.origin, `definite`)} fosse ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Demasiado pequeno: esperava que ${a(e.origin, `definite`)} tivesse ${n} ${e.minimum.toString()} ${r.unit ?? `elementos`}`
          : `Demasiado pequeno: esperava que ${a(e.origin, `definite`)} fosse ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Texto inválido: deve começar por "${t.prefix}"`
          : t.format === `ends_with`
            ? `Texto inválido: deve terminar em "${t.suffix}"`
            : t.format === `includes`
              ? `Texto inválido: deve incluir "${t.includes}"`
              : t.format === `regex`
                ? `Texto inválido: deve corresponder ao padrão ${t.pattern}`
                : `Formato d${n[t.format] ?? e.format} inválido`;
      }
      case `not_multiple_of`:
        return `Número inválido: deve ser múltiplo de ${e.divisor}`;
      case `unrecognized_keys`: {
        let t = e.keys.length > 1 ? `s` : ``;
        return `Chave${t} inválida${t}: ${I(e.keys, `, `)}`;
      }
      case `invalid_key`:
        return `Entrada inválida n${a(e.origin, `definite`)}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `Valor de discriminação inválido. Esperava ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `Entrada inválida`;
      case `invalid_element`:
        return `Entrada inválida n${a(e.origin, `definite`)}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function Ds() {
  return { localeError: Es() };
}
var Os = () => {
  let e = {
    string: { unit: `caracteres` },
    file: { unit: `bytes` },
    array: { unit: `elementos` },
    set: { unit: `elementos` },
    map: { unit: `entradas` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `a entrada`,
      email: `o endereço de e-mail`,
      url: `o URL`,
      emoji: `o emoji`,
      uuid: `o UUID`,
      uuidv4: `o UUIDv4`,
      uuidv6: `o UUIDv6`,
      nanoid: `o nanoid`,
      guid: `o GUID`,
      cuid: `o cuid`,
      cuid2: `o cuid2`,
      ulid: `o ULID`,
      xid: `o XID`,
      ksuid: `o KSUID`,
      datetime: `a data e hora ISO`,
      date: `a data ISO`,
      time: `a hora ISO`,
      duration: `a duração ISO`,
      ipv4: `o endereço IPv4`,
      ipv6: `o endereço IPv6`,
      mac: `o endereço MAC`,
      cidrv4: `a faixa de endereços IPv4`,
      cidrv6: `a faixa de endereços IPv6`,
      base64: `o texto codificado em base64`,
      base64url: `o texto codificado em base64url`,
      json_string: `o texto JSON`,
      e164: `o número E.164`,
      credit_card: `o número de cartão de crédito`,
      currency_code: `o código de moeda`,
      iban: `o IBAN`,
      jwt: `o JWT`,
      template_literal: `a entrada`,
    },
    r = {
      masculine: { definite: `o`, indefinite: `um` },
      feminine: { definite: `a`, indefinite: `uma` },
    },
    i = {
      string: { name: `texto`, articles: r.masculine },
      number: { name: `número`, articles: r.masculine },
      int: { name: `número inteiro`, articles: r.masculine },
      boolean: { name: `valor booleano`, articles: r.masculine },
      bigint: { name: `número bigint`, articles: r.masculine },
      symbol: { name: `símbolo`, articles: r.masculine },
      undefined: { name: `valor "undefined"`, articles: r.masculine },
      null: { name: `valor "nulo"`, articles: r.masculine },
      never: { name: `valor "never"`, articles: r.masculine },
      void: { name: `valor "void"`, articles: r.masculine },
      date: { name: `data`, articles: r.feminine },
      array: { name: `vetor`, articles: r.masculine },
      object: { name: `objeto`, articles: r.masculine },
      tuple: { name: `tupla`, articles: r.feminine },
      record: { name: `registro`, articles: r.masculine },
      map: { name: `mapa`, articles: r.masculine },
      set: { name: `conjunto`, articles: r.masculine },
      file: { name: `arquivo`, articles: r.masculine },
      nonoptional: { name: `valor não opcional`, articles: r.masculine },
      nan: { name: `valor "NaN"`, articles: r.masculine },
      function: { name: `função`, articles: r.feminine },
    };
  function a(e, t) {
    let n = i[e] ?? { name: `valor "${e}"`, articles: r.masculine };
    return `${n.articles[t]} ${n.name}`;
  }
  return (e) => {
    switch (e.code) {
      case `invalid_type`:
        return `Entrada inválida: esperava ${a(e.expected, `indefinite`)}, recebeu ${a(z(e.input), `indefinite`)}`;
      case `invalid_value`:
        return e.values.length === 1
          ? `Entrada inválida: esperava ${R(e.values[0])}`
          : `Opção inválida: esperava uma das seguintes opções: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Grande demais: esperava que ${a(e.origin, `definite`)} tivesse ${n} ${e.maximum.toString()} ${r.unit ?? `elementos`}`
          : `Grande demais: esperava que ${a(e.origin, `definite`)} fosse ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Pequeno demais: esperava que ${a(e.origin, `definite`)} tivesse ${n} ${e.minimum.toString()} ${r.unit ?? `elementos`}`
          : `Pequeno demais: esperava que ${a(e.origin, `definite`)} fosse ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Texto inválido: deve começar com "${t.prefix}"`
          : t.format === `ends_with`
            ? `Texto inválido: deve terminar com "${t.suffix}"`
            : t.format === `includes`
              ? `Texto inválido: deve incluir "${t.includes}"`
              : t.format === `regex`
                ? `Texto inválido: deve corresponder ao padrão ${t.pattern}`
                : `Formato d${n[t.format] ?? e.format} inválido`;
      }
      case `not_multiple_of`:
        return `Número inválido: deve ser múltiplo de ${e.divisor}`;
      case `unrecognized_keys`: {
        let t = e.keys.length > 1 ? `s` : ``;
        return `Chave${t} inválida${t}: ${I(e.keys, `, `)}`;
      }
      case `invalid_key`:
        return `Entrada inválida n${a(e.origin, `definite`)}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `Valor de discriminação inválido. Esperava ${e.options.map((e) => `'${e}'`).join(` | `)}`
          : `Entrada inválida`;
      case `invalid_element`:
        return `Entrada inválida n${a(e.origin, `definite`)}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function ks() {
  return { localeError: Os() };
}
var As = () => {
  let e = {
    string: { unit: `caractere`, verb: `să aibă` },
    file: { unit: `octeți`, verb: `să aibă` },
    array: { unit: `elemente`, verb: `să aibă` },
    set: { unit: `elemente`, verb: `să aibă` },
    map: { unit: `intrări`, verb: `să aibă` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `intrare`,
      email: `adresă de email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `dată și oră ISO`,
      date: `dată ISO`,
      time: `oră ISO`,
      duration: `durată ISO`,
      ipv4: `adresă IPv4`,
      ipv6: `adresă IPv6`,
      mac: `adresă MAC`,
      cidrv4: `interval IPv4`,
      cidrv6: `interval IPv6`,
      base64: `șir codat base64`,
      base64url: `șir codat base64url`,
      json_string: `șir JSON`,
      e164: `număr E.164`,
      credit_card: `număr de card de credit`,
      currency_code: `cod valutar`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `intrare`,
    },
    r = {
      nan: `NaN`,
      string: `șir`,
      number: `număr`,
      boolean: `boolean`,
      function: `funcție`,
      array: `matrice`,
      object: `obiect`,
      undefined: `nedefinit`,
      symbol: `simbol`,
      bigint: `număr mare`,
      void: `void`,
      never: `never`,
      map: `hartă`,
      set: `set`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `Intrare invalidă: așteptat ${t}, primit ${r[n] ?? n}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Intrare invalidă: așteptat ${R(e.values[0])}`
          : `Opțiune invalidă: așteptat una dintre ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Prea mare: așteptat ca ${e.origin ?? `valoarea`} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? `elemente`}`
          : `Prea mare: așteptat ca ${e.origin ?? `valoarea`} să fie ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Prea mic: așteptat ca ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}`
          : `Prea mic: așteptat ca ${e.origin} să fie ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Șir invalid: trebuie să înceapă cu "${t.prefix}"`
          : t.format === `ends_with`
            ? `Șir invalid: trebuie să se termine cu "${t.suffix}"`
            : t.format === `includes`
              ? `Șir invalid: trebuie să includă "${t.includes}"`
              : t.format === `regex`
                ? `Șir invalid: trebuie să se potrivească cu modelul ${t.pattern}`
                : `Format invalid: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Număr invalid: trebuie să fie multiplu de ${e.divisor}`;
      case `unrecognized_keys`:
        return `Chei nerecunoscute: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Cheie invalidă în ${e.origin}`;
      case `invalid_union`:
        return `Intrare invalidă`;
      case `invalid_element`:
        return `Valoare invalidă în ${e.origin}`;
      default:
        return `Intrare invalidă`;
    }
  };
};
function js() {
  return { localeError: As() };
}
function Ms(e, t, n, r) {
  let i = Math.abs(e),
    a = i % 10,
    o = i % 100;
  return o >= 11 && o <= 19 ? r : a === 1 ? t : a >= 2 && a <= 4 ? n : r;
}
var Ns = () => {
  let e = {
    string: {
      unit: { one: `символ`, few: `символа`, many: `символов` },
      verb: `иметь`,
    },
    file: { unit: { one: `байт`, few: `байта`, many: `байт` }, verb: `иметь` },
    array: {
      unit: { one: `элемент`, few: `элемента`, many: `элементов` },
      verb: `иметь`,
    },
    set: {
      unit: { one: `элемент`, few: `элемента`, many: `элементов` },
      verb: `иметь`,
    },
    map: {
      unit: { one: `элемент`, few: `элемента`, many: `элементов` },
      verb: `иметь`,
    },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ввод`,
      email: `email адрес`,
      url: `URL`,
      emoji: `эмодзи`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO дата и время`,
      date: `ISO дата`,
      time: `ISO время`,
      duration: `ISO длительность`,
      ipv4: `IPv4 адрес`,
      ipv6: `IPv6 адрес`,
      mac: `MAC адрес`,
      cidrv4: `IPv4 диапазон`,
      cidrv6: `IPv6 диапазон`,
      base64: `строка в формате base64`,
      base64url: `строка в формате base64url`,
      json_string: `JSON строка`,
      e164: `номер E.164`,
      credit_card: `номер кредитной карты`,
      currency_code: `код валюты`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ввод`,
    },
    r = { nan: `NaN`, number: `число`, array: `массив` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Неверный ввод: ожидалось instanceof ${e.expected}, получено ${i}`
          : `Неверный ввод: ожидалось ${t}, получено ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Неверный ввод: ожидалось ${R(e.values[0])}`
          : `Неверный вариант: ожидалось одно из ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        if (r) {
          let t = Ms(Number(e.maximum), r.unit.one, r.unit.few, r.unit.many);
          return `Слишком большое значение: ожидалось, что ${e.origin ?? `значение`} будет иметь ${n}${e.maximum.toString()} ${t}`;
        }
        return `Слишком большое значение: ожидалось, что ${e.origin ?? `значение`} будет ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        if (r) {
          let t = Ms(Number(e.minimum), r.unit.one, r.unit.few, r.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${e.origin} будет иметь ${n}${e.minimum.toString()} ${t}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${e.origin} будет ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Неверная строка: должна начинаться с "${t.prefix}"`
          : t.format === `ends_with`
            ? `Неверная строка: должна заканчиваться на "${t.suffix}"`
            : t.format === `includes`
              ? `Неверная строка: должна содержать "${t.includes}"`
              : t.format === `regex`
                ? `Неверная строка: должна соответствовать шаблону ${t.pattern}`
                : `Неверный ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Неверное число: должно быть кратным ${e.divisor}`;
      case `unrecognized_keys`:
        return `Нераспознанн${e.keys.length > 1 ? `ые` : `ый`} ключ${e.keys.length > 1 ? `и` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Неверный ключ в ${e.origin}`;
      case `invalid_union`:
        return `Неверные входные данные`;
      case `invalid_element`:
        return `Неверное значение в ${e.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
};
function Ps() {
  return { localeError: Ns() };
}
var Fs = () => {
  let e = {
    string: { unit: `znakov`, verb: `mať` },
    file: { unit: `bajtov`, verb: `mať` },
    array: { unit: `prvkov`, verb: `mať` },
    set: { unit: `prvkov`, verb: `mať` },
    map: { unit: `položiek`, verb: `mať` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `regulárny výraz`,
      email: `e-mailová adresa`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `dátum a čas vo formáte ISO`,
      date: `dátum vo formáte ISO`,
      time: `čas vo formáte ISO`,
      duration: `doba trvania ISO`,
      ipv4: `IPv4 adresa`,
      ipv6: `IPv6 adresa`,
      mac: `MAC adresa`,
      cidrv4: `rozsah IPv4`,
      cidrv6: `rozsah IPv6`,
      base64: `reťazec zakódovaný vo formáte base64`,
      base64url: `reťazec zakódovaný vo formáte base64url`,
      json_string: `reťazec vo formáte JSON`,
      e164: `číslo E.164`,
      credit_card: `číslo kreditnej karty`,
      currency_code: `kód meny`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `vstup`,
    },
    r = {
      nan: `NaN`,
      number: `číslo`,
      string: `reťazec`,
      function: `funkcia`,
      array: `pole`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Neplatný vstup: očakávané instanceof ${e.expected}, obdržané ${i}`
          : `Neplatný vstup: očakávané ${t}, obdržané ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Neplatný vstup: očakávané ${R(e.values[0])}`
          : `Neplatný vstup: očakávaná jedna z hodnôt ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Hodnota je príliš veľká: ${e.origin ?? `hodnota`} musí mať ${n}${e.maximum.toString()} ${r.unit ?? `prvkov`}`
          : `Hodnota je príliš veľká: ${e.origin ?? `hodnota`} musí byť ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Hodnota je príliš malá: ${e.origin ?? `hodnota`} musí mať ${n}${e.minimum.toString()} ${r.unit ?? `prvkov`}`
          : `Hodnota je príliš malá: ${e.origin ?? `hodnota`} musí byť ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Neplatný reťazec: musí začínať na "${t.prefix}"`
          : t.format === `ends_with`
            ? `Neplatný reťazec: musí končiť na "${t.suffix}"`
            : t.format === `includes`
              ? `Neplatný reťazec: musí obsahovať "${t.includes}"`
              : t.format === `regex`
                ? `Neplatný reťazec: musí zodpovedať vzoru ${t.pattern}`
                : `Neplatný formát ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Neplatné číslo: musí byť násobkom ${e.divisor}`;
      case `unrecognized_keys`:
        return `Neznáme klúče: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Neplatný klúč v ${e.origin}`;
      case `invalid_union`:
        return `Neplatný vstup`;
      case `invalid_element`:
        return `Neplatná hodnota v ${e.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
function Is() {
  return { localeError: Fs() };
}
var Ls = () => {
  let e = {
    string: { unit: `znakov`, verb: `imeti` },
    file: { unit: `bajtov`, verb: `imeti` },
    array: { unit: `elementov`, verb: `imeti` },
    set: { unit: `elementov`, verb: `imeti` },
    map: { unit: `elementov`, verb: `imeti` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `vnos`,
      email: `e-poštni naslov`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO datum in čas`,
      date: `ISO datum`,
      time: `ISO čas`,
      duration: `ISO trajanje`,
      ipv4: `IPv4 naslov`,
      ipv6: `IPv6 naslov`,
      mac: `MAC naslov`,
      cidrv4: `obseg IPv4`,
      cidrv6: `obseg IPv6`,
      base64: `base64 kodiran niz`,
      base64url: `base64url kodiran niz`,
      json_string: `JSON niz`,
      e164: `E.164 številka`,
      credit_card: `številka kreditne kartice`,
      currency_code: `koda valute`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `vnos`,
    },
    r = { nan: `NaN`, number: `število`, array: `tabela` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Neveljaven vnos: pričakovano instanceof ${e.expected}, prejeto ${i}`
          : `Neveljaven vnos: pričakovano ${t}, prejeto ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Neveljaven vnos: pričakovano ${R(e.values[0])}`
          : `Neveljavna možnost: pričakovano eno izmed ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Preveliko: pričakovano, da bo ${e.origin ?? `vrednost`} imelo ${n}${e.maximum.toString()} ${r.unit ?? `elementov`}`
          : `Preveliko: pričakovano, da bo ${e.origin ?? `vrednost`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Premajhno: pričakovano, da bo ${e.origin} imelo ${n}${e.minimum.toString()} ${r.unit}`
          : `Premajhno: pričakovano, da bo ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Neveljaven niz: mora se začeti z "${t.prefix}"`
          : t.format === `ends_with`
            ? `Neveljaven niz: mora se končati z "${t.suffix}"`
            : t.format === `includes`
              ? `Neveljaven niz: mora vsebovati "${t.includes}"`
              : t.format === `regex`
                ? `Neveljaven niz: mora ustrezati vzorcu ${t.pattern}`
                : `Neveljaven ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Neveljavno število: mora biti večkratnik ${e.divisor}`;
      case `unrecognized_keys`:
        return `Neprepoznan${e.keys.length > 1 ? `i ključi` : ` ključ`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Neveljaven ključ v ${e.origin}`;
      case `invalid_union`:
        return `Neveljaven vnos`;
      case `invalid_element`:
        return `Neveljavna vrednost v ${e.origin}`;
      default:
        return `Neveljaven vnos`;
    }
  };
};
function Rs() {
  return { localeError: Ls() };
}
var zs = () => {
  let e = {
    string: { unit: `tecken`, verb: `att ha` },
    file: { unit: `bytes`, verb: `att ha` },
    array: { unit: `objekt`, verb: `att innehålla` },
    set: { unit: `objekt`, verb: `att innehålla` },
    map: { unit: `objekt`, verb: `att innehålla` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `reguljärt uttryck`,
      email: `e-postadress`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO-datum och tid`,
      date: `ISO-datum`,
      time: `ISO-tid`,
      duration: `ISO-varaktighet`,
      ipv4: `IPv4-adress`,
      ipv6: `IPv6-adress`,
      mac: `MAC-adress`,
      cidrv4: `IPv4-spektrum`,
      cidrv6: `IPv6-spektrum`,
      base64: `base64-kodad sträng`,
      base64url: `base64url-kodad sträng`,
      json_string: `JSON-sträng`,
      e164: `E.164-nummer`,
      credit_card: `kreditkortsnummer`,
      currency_code: `valutakod`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `mall-literal`,
    },
    r = { nan: `NaN`, number: `antal`, array: `lista` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ogiltig inmatning: förväntat instanceof ${e.expected}, fick ${i}`
          : `Ogiltig inmatning: förväntat ${t}, fick ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ogiltig inmatning: förväntat ${R(e.values[0])}`
          : `Ogiltigt val: förväntade en av ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `För stor(t): förväntade ${e.origin ?? `värdet`} att ha ${n}${e.maximum.toString()} ${r.unit ?? `element`}`
          : `För stor(t): förväntat ${e.origin ?? `värdet`} att ha ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `För lite(t): förväntade ${e.origin ?? `värdet`} att ha ${n}${e.minimum.toString()} ${r.unit}`
          : `För lite(t): förväntade ${e.origin ?? `värdet`} att ha ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ogiltig sträng: måste börja med "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ogiltig sträng: måste sluta med "${t.suffix}"`
            : t.format === `includes`
              ? `Ogiltig sträng: måste innehålla "${t.includes}"`
              : t.format === `regex`
                ? `Ogiltig sträng: måste matcha mönstret "${t.pattern}"`
                : `Ogiltig(t) ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Ogiltigt tal: måste vara en multipel av ${e.divisor}`;
      case `unrecognized_keys`:
        return `${e.keys.length > 1 ? `Okända nycklar` : `Okänd nyckel`}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Ogiltig nyckel i ${e.origin ?? `värdet`}`;
      case `invalid_union`:
        return `Ogiltig input`;
      case `invalid_element`:
        return `Ogiltigt värde i ${e.origin ?? `värdet`}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function Bs() {
  return { localeError: zs() };
}
var Vs = () => {
  let e = {
    string: { unit: `எழுத்துக்கள்`, verb: `கொண்டிருக்க வேண்டும்` },
    file: { unit: `பைட்டுகள்`, verb: `கொண்டிருக்க வேண்டும்` },
    array: { unit: `உறுப்புகள்`, verb: `கொண்டிருக்க வேண்டும்` },
    set: { unit: `உறுப்புகள்`, verb: `கொண்டிருக்க வேண்டும்` },
    map: { unit: `உறுப்புகள்`, verb: `கொண்டிருக்க வேண்டும்` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `உள்ளீடு`,
      email: `மின்னஞ்சல் முகவரி`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO தேதி நேரம்`,
      date: `ISO தேதி`,
      time: `ISO நேரம்`,
      duration: `ISO கால அளவு`,
      ipv4: `IPv4 முகவரி`,
      ipv6: `IPv6 முகவரி`,
      mac: `MAC முகவரி`,
      cidrv4: `IPv4 வரம்பு`,
      cidrv6: `IPv6 வரம்பு`,
      base64: `base64-encoded சரம்`,
      base64url: `base64url-encoded சரம்`,
      json_string: `JSON சரம்`,
      e164: `E.164 எண்`,
      credit_card: `கடன் அட்டை எண்`,
      currency_code: `நாணயக் குறியீடு`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `input`,
    },
    r = { nan: `NaN`, number: `எண்`, array: `அணி`, null: `வெறுமை` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${e.expected}, பெறப்பட்டது ${i}`
          : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t}, பெறப்பட்டது ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${R(e.values[0])}`
          : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${I(e.values, `|`)} இல் ஒன்று`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? `மதிப்பு`} ${n}${e.maximum.toString()} ${r.unit ?? `உறுப்புகள்`} ஆக இருக்க வேண்டும்`
          : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? `மதிப்பு`} ${n}${e.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ஆக இருக்க வேண்டும்`
          : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${n}${e.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `தவறான சரம்: "${t.prefix}" இல் தொடங்க வேண்டும்`
          : t.format === `ends_with`
            ? `தவறான சரம்: "${t.suffix}" இல் முடிவடைய வேண்டும்`
            : t.format === `includes`
              ? `தவறான சரம்: "${t.includes}" ஐ உள்ளடக்க வேண்டும்`
              : t.format === `regex`
                ? `தவறான சரம்: ${t.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                : `தவறான ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `தவறான எண்: ${e.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case `unrecognized_keys`:
        return `அடையாளம் தெரியாத விசை${e.keys.length > 1 ? `கள்` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} இல் தவறான விசை`;
      case `invalid_union`:
        return `தவறான உள்ளீடு`;
      case `invalid_element`:
        return `${e.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
};
function Hs() {
  return { localeError: Vs() };
}
var Us = () => {
  let e = {
    string: { unit: `аломат`, verb: `дошта бошад` },
    file: { unit: `байт`, verb: `дошта бошад` },
    array: { unit: `унсур`, verb: `дошта бошад` },
    set: { unit: `унсур`, verb: `дошта бошад` },
    map: { unit: `сабт`, verb: `дошта бошад` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `вуруд`,
      email: `суроғаи email`,
      url: `URL`,
      emoji: `эмоҷи`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `санаву вақти ISO`,
      date: `санаи ISO`,
      time: `вақти ISO`,
      duration: `давомнокии ISO`,
      ipv4: `суроғаи IPv4`,
      ipv6: `суроғаи IPv6`,
      mac: `суроғаи MAC`,
      cidrv4: `маҳдудаи IPv4`,
      cidrv6: `маҳдудаи IPv6`,
      base64: `сатри дар формати base64`,
      base64url: `сатри дар формати base64url`,
      json_string: `сатри JSON`,
      e164: `рақами E.164`,
      credit_card: `рақами корти кредитӣ`,
      currency_code: `рамзи асъор`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `вуруд`,
    },
    r = {
      nan: `NaN`,
      number: `рақам`,
      string: `сатр`,
      array: `массив`,
      object: `объект`,
      date: `сана`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `Вуруди нодуруст: ${t} интизор мерафт, ${r[n] ?? n} гирифта шуд`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Вуруди нодуруст: ${R(e.values[0])} интизор мерафт`
          : `Интихоби нодуруст: яке аз ${I(e.values, `|`)} интизор мерафт`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Хеле калон: ${e.origin ?? `қимат`} бояд ${n}${e.maximum.toString()} ${r.unit} ${r.verb}`
          : `Хеле калон: ${e.origin ?? `қимат`} бояд ${n}${e.maximum.toString()} бошад`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Хеле хурд: ${e.origin} бояд ${n}${e.minimum.toString()} ${r.unit} ${r.verb}`
          : `Хеле хурд: ${e.origin} бояд ${n}${e.minimum.toString()} бошад`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Сатри нодуруст: бояд бо "${t.prefix}" оғоз шавад`
          : t.format === `ends_with`
            ? `Сатри нодуруст: бояд бо "${t.suffix}" анҷом ёбад`
            : t.format === `includes`
              ? `Сатри нодуруст: бояд "${t.includes}"-ро дар бар гирад`
              : t.format === `regex`
                ? `Сатри нодуруст: бояд ба намунаи ${t.pattern} мувофиқат кунад`
                : `${n[t.format] ?? e.format}-и нодуруст`;
      }
      case `not_multiple_of`:
        return `Рақами нодуруст: бояд ба ${e.divisor} бе бақия тақсим шавад`;
      case `unrecognized_keys`:
        return `Калид${e.keys.length > 1 ? `ҳои` : `и`} номаълум: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Калиди нодуруст дар ${e.origin}`;
      case `invalid_union`:
        return e.options && Array.isArray(e.options) && e.options.length > 0
          ? `Қимати нодурусти дискриминатор: ${e.options.map((e) => `'${e}'`).join(` | `)} интизор мерафт`
          : `Вуруди нодуруст`;
      case `invalid_element`:
        return `Қимати нодуруст дар ${e.origin}`;
      default:
        return `Вуруди нодуруст`;
    }
  };
};
function Ws() {
  return { localeError: Us() };
}
var Gs = () => {
  let e = {
    string: { unit: `ตัวอักษร`, verb: `ควรมี` },
    file: { unit: `ไบต์`, verb: `ควรมี` },
    array: { unit: `รายการ`, verb: `ควรมี` },
    set: { unit: `รายการ`, verb: `ควรมี` },
    map: { unit: `รายการ`, verb: `ควรมี` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ข้อมูลที่ป้อน`,
      email: `ที่อยู่อีเมล`,
      url: `URL`,
      emoji: `อิโมจิ`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `วันที่เวลาแบบ ISO`,
      date: `วันที่แบบ ISO`,
      time: `เวลาแบบ ISO`,
      duration: `ช่วงเวลาแบบ ISO`,
      ipv4: `ที่อยู่ IPv4`,
      ipv6: `ที่อยู่ IPv6`,
      mac: `ที่อยู่ MAC`,
      cidrv4: `ช่วง IP แบบ IPv4`,
      cidrv6: `ช่วง IP แบบ IPv6`,
      base64: `ข้อความแบบ Base64`,
      base64url: `ข้อความแบบ Base64 สำหรับ URL`,
      json_string: `ข้อความแบบ JSON`,
      e164: `เบอร์โทรศัพท์ระหว่างประเทศ (E.164)`,
      credit_card: `หมายเลขบัตรเครดิต`,
      currency_code: `รหัสสกุลเงิน`,
      iban: `IBAN`,
      jwt: `โทเคน JWT`,
      template_literal: `ข้อมูลที่ป้อน`,
    },
    r = {
      nan: `NaN`,
      number: `ตัวเลข`,
      array: `อาร์เรย์ (Array)`,
      null: `ไม่มีค่า (null)`,
    };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${e.expected} แต่ได้รับ ${i}`
          : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t} แต่ได้รับ ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `ค่าไม่ถูกต้อง: ควรเป็น ${R(e.values[0])}`
          : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `ไม่เกิน` : `น้อยกว่า`,
          r = t(e.origin);
        return r
          ? `เกินกำหนด: ${e.origin ?? `ค่า`} ควรมี${n} ${e.maximum.toString()} ${r.unit ?? `รายการ`}`
          : `เกินกำหนด: ${e.origin ?? `ค่า`} ควรมี${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `อย่างน้อย` : `มากกว่า`,
          r = t(e.origin);
        return r
          ? `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()} ${r.unit}`
          : `น้อยกว่ากำหนด: ${e.origin} ควรมี${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${t.prefix}"`
          : t.format === `ends_with`
            ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${t.suffix}"`
            : t.format === `includes`
              ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${t.includes}" อยู่ในข้อความ`
              : t.format === `regex`
                ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${t.pattern}`
                : `รูปแบบไม่ถูกต้อง: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${e.divisor} ได้ลงตัว`;
      case `unrecognized_keys`:
        return `พบคีย์ที่ไม่รู้จัก: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `คีย์ไม่ถูกต้องใน ${e.origin}`;
      case `invalid_union`:
        return `ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้`;
      case `invalid_element`:
        return `ข้อมูลไม่ถูกต้องใน ${e.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
};
function Ks() {
  return { localeError: Gs() };
}
var qs = () => {
  let e = {
    string: { unit: `simwol`, verb: `bolmaly` },
    file: { unit: `baýt`, verb: `bolmaly` },
    array: { unit: `elementler`, verb: `bolmaly` },
    set: { unit: `elementler`, verb: `bolmaly` },
    map: { unit: `elementler`, verb: `bolmaly` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `giriş`,
      email: `e-poçta salgysy`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO sene we wagt`,
      date: `ISO sene`,
      time: `ISO wagt`,
      duration: `ISO wagt aralygy`,
      ipv4: `IPv4 salgysy`,
      ipv6: `IPv6 salgysy`,
      mac: `MAC salgysy`,
      cidrv4: `IPv4 aralygy`,
      cidrv6: `IPv6 aralygy`,
      base64: `base64 bilen şifrlenen setir`,
      base64url: `base64url bilen şifrlenen setir`,
      json_string: `JSON setiri`,
      e164: `E.164 nomeri`,
      credit_card: `kredit kartynyň nomeri`,
      currency_code: `walýuta kody`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `şablon`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input);
        return `Nädogry baha: garaşylan ${t} ýerine ${r[n] ?? n} alyndy`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Nädogry baha: ${R(e.values[0])} bolmaly`
          : `Nädogry saýlaw: aşakdakylardan biri bolmaly: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Has uly: garaşylýan ${e.origin ?? `baha`} ${n} ${e.maximum.toString()} ${r.unit ?? `element`}`
          : `Has uly: garaşylýan ${e.origin ?? `baha`} ${n} ${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Has kiçi: garaşylýan ${e.origin} ${n} ${e.minimum.toString()} ${r.unit}`
          : `Has kiçi: garaşylýan ${e.origin} ${n} ${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Nädogry setir: "${t.prefix}" bilen başlamaly`
          : t.format === `ends_with`
            ? `Nädogry setir: "${t.suffix}" bilen gutarmaly`
            : t.format === `includes`
              ? `Nädogry setir: "${t.includes}" saklamaly`
              : t.format === `regex`
                ? `Nädogry setir: ${t.pattern} nusga laýyk bolmaly`
                : `Nädogry ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Nädogry san: ${e.divisor} bilen galyndysyz bölünmeli`;
      case `unrecognized_keys`:
        return `Tanalmaýan açar${e.keys.length > 1 ? `lar` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} içinde nädogry açar`;
      case `invalid_union`:
        return `Nädogry baha`;
      case `invalid_element`:
        return `${e.origin} içinde nädogry baha`;
      default:
        return `Nädogry baha`;
    }
  };
};
function Js() {
  return { localeError: qs() };
}
var Ys = () => {
  let e = {
    string: { unit: `karakter`, verb: `olmalı` },
    file: { unit: `bayt`, verb: `olmalı` },
    array: { unit: `öğe`, verb: `olmalı` },
    set: { unit: `öğe`, verb: `olmalı` },
    map: { unit: `öğe`, verb: `olmalı` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `girdi`,
      email: `e-posta adresi`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO tarih ve saat`,
      date: `ISO tarih`,
      time: `ISO saat`,
      duration: `ISO süre`,
      ipv4: `IPv4 adresi`,
      ipv6: `IPv6 adresi`,
      mac: `MAC adresi`,
      cidrv4: `IPv4 aralığı`,
      cidrv6: `IPv6 aralığı`,
      base64: `base64 ile şifrelenmiş metin`,
      base64url: `base64url ile şifrelenmiş metin`,
      json_string: `JSON dizesi`,
      e164: `E.164 sayısı`,
      credit_card: `kredi kartı numarası`,
      currency_code: `para birimi kodu`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `Şablon dizesi`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Geçersiz değer: beklenen instanceof ${e.expected}, alınan ${i}`
          : `Geçersiz değer: beklenen ${t}, alınan ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Geçersiz değer: beklenen ${R(e.values[0])}`
          : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Çok büyük: beklenen ${e.origin ?? `değer`} ${n}${e.maximum.toString()} ${r.unit ?? `öğe`}`
          : `Çok büyük: beklenen ${e.origin ?? `değer`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()} ${r.unit}`
          : `Çok küçük: beklenen ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Geçersiz metin: "${t.prefix}" ile başlamalı`
          : t.format === `ends_with`
            ? `Geçersiz metin: "${t.suffix}" ile bitmeli`
            : t.format === `includes`
              ? `Geçersiz metin: "${t.includes}" içermeli`
              : t.format === `regex`
                ? `Geçersiz metin: ${t.pattern} desenine uymalı`
                : `Geçersiz ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Geçersiz sayı: ${e.divisor} ile tam bölünebilmeli`;
      case `unrecognized_keys`:
        return `Tanınmayan anahtar${e.keys.length > 1 ? `lar` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} içinde geçersiz anahtar`;
      case `invalid_union`:
        return `Geçersiz değer`;
      case `invalid_element`:
        return `${e.origin} içinde geçersiz değer`;
      default:
        return `Geçersiz değer`;
    }
  };
};
function Xs() {
  return { localeError: Ys() };
}
var Zs = () => {
  let e = {
    string: { unit: `символів`, verb: `матиме` },
    file: { unit: `байтів`, verb: `матиме` },
    array: { unit: `елементів`, verb: `матиме` },
    set: { unit: `елементів`, verb: `матиме` },
    map: { unit: `елементів`, verb: `матиме` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `вхідні дані`,
      email: `адреса електронної пошти`,
      url: `URL`,
      emoji: `емодзі`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `дата та час ISO`,
      date: `дата ISO`,
      time: `час ISO`,
      duration: `тривалість ISO`,
      ipv4: `адреса IPv4`,
      ipv6: `адреса IPv6`,
      mac: `адреса MAC`,
      cidrv4: `діапазон IPv4`,
      cidrv6: `діапазон IPv6`,
      base64: `рядок у кодуванні base64`,
      base64url: `рядок у кодуванні base64url`,
      json_string: `рядок JSON`,
      e164: `номер E.164`,
      credit_card: `номер кредитної картки`,
      currency_code: `код валюти`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `вхідні дані`,
    },
    r = { nan: `NaN`, number: `число`, array: `масив` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Неправильні вхідні дані: очікується instanceof ${e.expected}, отримано ${i}`
          : `Неправильні вхідні дані: очікується ${t}, отримано ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Неправильні вхідні дані: очікується ${R(e.values[0])}`
          : `Неправильна опція: очікується одне з ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Занадто велике: очікується, що ${e.origin ?? `значення`} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? `елементів`}`
          : `Занадто велике: очікується, що ${e.origin ?? `значення`} буде ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Занадто мале: очікується, що ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}`
          : `Занадто мале: очікується, що ${e.origin} буде ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Неправильний рядок: повинен починатися з "${t.prefix}"`
          : t.format === `ends_with`
            ? `Неправильний рядок: повинен закінчуватися на "${t.suffix}"`
            : t.format === `includes`
              ? `Неправильний рядок: повинен містити "${t.includes}"`
              : t.format === `regex`
                ? `Неправильний рядок: повинен відповідати шаблону ${t.pattern}`
                : `Неправильний ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Неправильне число: повинно бути кратним ${e.divisor}`;
      case `unrecognized_keys`:
        return `Нерозпізнаний ключ${e.keys.length > 1 ? `і` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Неправильний ключ у ${e.origin}`;
      case `invalid_union`:
        return `Неправильні вхідні дані`;
      case `invalid_element`:
        return `Неправильне значення у ${e.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
};
function Qs() {
  return { localeError: Zs() };
}
function $s() {
  return Qs();
}
var ec = () => {
  let e = {
    string: { unit: `حروف`, verb: `ہونا` },
    file: { unit: `بائٹس`, verb: `ہونا` },
    array: { unit: `آئٹمز`, verb: `ہونا` },
    set: { unit: `آئٹمز`, verb: `ہونا` },
    map: { unit: `آئٹمز`, verb: `ہونا` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ان پٹ`,
      email: `ای میل ایڈریس`,
      url: `یو آر ایل`,
      emoji: `ایموجی`,
      uuid: `یو یو آئی ڈی`,
      uuidv4: `یو یو آئی ڈی وی 4`,
      uuidv6: `یو یو آئی ڈی وی 6`,
      nanoid: `نینو آئی ڈی`,
      guid: `جی یو آئی ڈی`,
      cuid: `سی یو آئی ڈی`,
      cuid2: `سی یو آئی ڈی 2`,
      ulid: `یو ایل آئی ڈی`,
      xid: `ایکس آئی ڈی`,
      ksuid: `کے ایس یو آئی ڈی`,
      datetime: `آئی ایس او ڈیٹ ٹائم`,
      date: `آئی ایس او تاریخ`,
      time: `آئی ایس او وقت`,
      duration: `آئی ایس او مدت`,
      ipv4: `آئی پی وی 4 ایڈریس`,
      ipv6: `آئی پی وی 6 ایڈریس`,
      mac: `ایم اے سی ایڈریس`,
      cidrv4: `آئی پی وی 4 رینج`,
      cidrv6: `آئی پی وی 6 رینج`,
      base64: `بیس 64 ان کوڈڈ سٹرنگ`,
      base64url: `بیس 64 یو آر ایل ان کوڈڈ سٹرنگ`,
      json_string: `جے ایس او این سٹرنگ`,
      e164: `ای 164 نمبر`,
      credit_card: `کریڈٹ کارڈ نمبر`,
      currency_code: `کرنسی کوڈ`,
      iban: `IBAN`,
      jwt: `جے ڈبلیو ٹی`,
      template_literal: `ان پٹ`,
    },
    r = { nan: `NaN`, number: `نمبر`, array: `آرے`, null: `نل` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `غلط ان پٹ: instanceof ${e.expected} متوقع تھا، ${i} موصول ہوا`
          : `غلط ان پٹ: ${t} متوقع تھا، ${i} موصول ہوا`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `غلط ان پٹ: ${R(e.values[0])} متوقع تھا`
          : `غلط آپشن: ${I(e.values, `|`)} میں سے ایک متوقع تھا`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `بہت بڑا: ${e.origin ?? `ویلیو`} کے ${n}${e.maximum.toString()} ${r.unit ?? `عناصر`} ہونے متوقع تھے`
          : `بہت بڑا: ${e.origin ?? `ویلیو`} کا ${n}${e.maximum.toString()} ہونا متوقع تھا`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `بہت چھوٹا: ${e.origin} کے ${n}${e.minimum.toString()} ${r.unit} ہونے متوقع تھے`
          : `بہت چھوٹا: ${e.origin} کا ${n}${e.minimum.toString()} ہونا متوقع تھا`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `غلط سٹرنگ: "${t.prefix}" سے شروع ہونا چاہیے`
          : t.format === `ends_with`
            ? `غلط سٹرنگ: "${t.suffix}" پر ختم ہونا چاہیے`
            : t.format === `includes`
              ? `غلط سٹرنگ: "${t.includes}" شامل ہونا چاہیے`
              : t.format === `regex`
                ? `غلط سٹرنگ: پیٹرن ${t.pattern} سے میچ ہونا چاہیے`
                : `غلط ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `غلط نمبر: ${e.divisor} کا مضاعف ہونا چاہیے`;
      case `unrecognized_keys`:
        return `غیر تسلیم شدہ کی${e.keys.length > 1 ? `ز` : ``}: ${I(e.keys, `، `)}`;
      case `invalid_key`:
        return `${e.origin} میں غلط کی`;
      case `invalid_union`:
        return `غلط ان پٹ`;
      case `invalid_element`:
        return `${e.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
};
function tc() {
  return { localeError: ec() };
}
var nc = () => {
  let e = {
    string: { unit: `belgi`, verb: `bo‘lishi kerak` },
    file: { unit: `bayt`, verb: `bo‘lishi kerak` },
    array: { unit: `element`, verb: `bo‘lishi kerak` },
    set: { unit: `element`, verb: `bo‘lishi kerak` },
    map: { unit: `yozuv`, verb: `bo‘lishi kerak` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `kirish`,
      email: `elektron pochta manzili`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO sana va vaqti`,
      date: `ISO sana`,
      time: `ISO vaqt`,
      duration: `ISO davomiylik`,
      ipv4: `IPv4 manzil`,
      ipv6: `IPv6 manzil`,
      mac: `MAC manzil`,
      cidrv4: `IPv4 diapazon`,
      cidrv6: `IPv6 diapazon`,
      base64: `base64 kodlangan satr`,
      base64url: `base64url kodlangan satr`,
      json_string: `JSON satr`,
      e164: `E.164 raqam`,
      credit_card: `kredit karta raqami`,
      currency_code: `valyuta kodi`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `kirish`,
    },
    r = { nan: `NaN`, number: `raqam`, array: `massiv` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Noto‘g‘ri kirish: kutilgan instanceof ${e.expected}, qabul qilingan ${i}`
          : `Noto‘g‘ri kirish: kutilgan ${t}, qabul qilingan ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Noto‘g‘ri kirish: kutilgan ${R(e.values[0])}`
          : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Juda katta: kutilgan ${e.origin ?? `qiymat`} ${n}${e.maximum.toString()} ${r.unit} ${r.verb}`
          : `Juda katta: kutilgan ${e.origin ?? `qiymat`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()} ${r.unit} ${r.verb}`
          : `Juda kichik: kutilgan ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Noto‘g‘ri satr: "${t.prefix}" bilan boshlanishi kerak`
          : t.format === `ends_with`
            ? `Noto‘g‘ri satr: "${t.suffix}" bilan tugashi kerak`
            : t.format === `includes`
              ? `Noto‘g‘ri satr: "${t.includes}" ni o‘z ichiga olishi kerak`
              : t.format === `regex`
                ? `Noto‘g‘ri satr: ${t.pattern} shabloniga mos kelishi kerak`
                : `Noto‘g‘ri ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Noto‘g‘ri raqam: ${e.divisor} ning karralisi bo‘lishi kerak`;
      case `unrecognized_keys`:
        return `Noma’lum kalit${e.keys.length > 1 ? `lar` : ``}: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} dagi kalit noto‘g‘ri`;
      case `invalid_union`:
        return `Noto‘g‘ri kirish`;
      case `invalid_element`:
        return `${e.origin} da noto‘g‘ri qiymat`;
      default:
        return `Noto‘g‘ri kirish`;
    }
  };
};
function rc() {
  return { localeError: nc() };
}
var ic = () => {
  let e = {
    string: { unit: `ký tự`, verb: `có` },
    file: { unit: `byte`, verb: `có` },
    array: { unit: `phần tử`, verb: `có` },
    set: { unit: `phần tử`, verb: `có` },
    map: { unit: `phần tử`, verb: `có` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `đầu vào`,
      email: `địa chỉ email`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ngày giờ ISO`,
      date: `ngày ISO`,
      time: `giờ ISO`,
      duration: `khoảng thời gian ISO`,
      ipv4: `địa chỉ IPv4`,
      ipv6: `địa chỉ IPv6`,
      mac: `địa chỉ MAC`,
      cidrv4: `dải IPv4`,
      cidrv6: `dải IPv6`,
      base64: `chuỗi mã hóa base64`,
      base64url: `chuỗi mã hóa base64url`,
      json_string: `chuỗi JSON`,
      e164: `số E.164`,
      credit_card: `số thẻ tín dụng`,
      currency_code: `mã tiền tệ`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `đầu vào`,
    },
    r = { nan: `NaN`, number: `số`, array: `mảng` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Đầu vào không hợp lệ: mong đợi instanceof ${e.expected}, nhận được ${i}`
          : `Đầu vào không hợp lệ: mong đợi ${t}, nhận được ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Đầu vào không hợp lệ: mong đợi ${R(e.values[0])}`
          : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Quá lớn: mong đợi ${e.origin ?? `giá trị`} ${r.verb} ${n}${e.maximum.toString()} ${r.unit ?? `phần tử`}`
          : `Quá lớn: mong đợi ${e.origin ?? `giá trị`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Quá nhỏ: mong đợi ${e.origin} ${r.verb} ${n}${e.minimum.toString()} ${r.unit}`
          : `Quá nhỏ: mong đợi ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${t.prefix}"`
          : t.format === `ends_with`
            ? `Chuỗi không hợp lệ: phải kết thúc bằng "${t.suffix}"`
            : t.format === `includes`
              ? `Chuỗi không hợp lệ: phải bao gồm "${t.includes}"`
              : t.format === `regex`
                ? `Chuỗi không hợp lệ: phải khớp với mẫu ${t.pattern}`
                : `${n[t.format] ?? e.format} không hợp lệ`;
      }
      case `not_multiple_of`:
        return `Số không hợp lệ: phải là bội số của ${e.divisor}`;
      case `unrecognized_keys`:
        return `Khóa không được nhận dạng: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Khóa không hợp lệ trong ${e.origin}`;
      case `invalid_union`:
        return `Đầu vào không hợp lệ`;
      case `invalid_element`:
        return `Giá trị không hợp lệ trong ${e.origin}`;
      default:
        return `Đầu vào không hợp lệ`;
    }
  };
};
function ac() {
  return { localeError: ic() };
}
var oc = () => {
  let e = {
    string: { unit: `字符`, verb: `包含` },
    file: { unit: `字节`, verb: `包含` },
    array: { unit: `项`, verb: `包含` },
    set: { unit: `项`, verb: `包含` },
    map: { unit: `项`, verb: `包含` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `输入`,
      email: `电子邮件`,
      url: `URL`,
      emoji: `表情符号`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO日期时间`,
      date: `ISO日期`,
      time: `ISO时间`,
      duration: `ISO时长`,
      ipv4: `IPv4地址`,
      ipv6: `IPv6地址`,
      mac: `MAC地址`,
      cidrv4: `IPv4网段`,
      cidrv6: `IPv6网段`,
      base64: `base64编码字符串`,
      base64url: `base64url编码字符串`,
      json_string: `JSON字符串`,
      e164: `E.164号码`,
      credit_card: `信用卡号`,
      currency_code: `货币代码`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `输入`,
    },
    r = { nan: `NaN`, number: `数字`, array: `数组`, null: `空值(null)` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `无效输入：期望 instanceof ${e.expected}，实际接收 ${i}`
          : `无效输入：期望 ${t}，实际接收 ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `无效输入：期望 ${R(e.values[0])}`
          : `无效选项：期望以下之一 ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `数值过大：期望 ${e.origin ?? `值`} ${n}${e.maximum.toString()} ${r.unit ?? `个元素`}`
          : `数值过大：期望 ${e.origin ?? `值`} ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()} ${r.unit}`
          : `数值过小：期望 ${e.origin} ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `无效字符串：必须以 "${t.prefix}" 开头`
          : t.format === `ends_with`
            ? `无效字符串：必须以 "${t.suffix}" 结尾`
            : t.format === `includes`
              ? `无效字符串：必须包含 "${t.includes}"`
              : t.format === `regex`
                ? `无效字符串：必须满足正则表达式 ${t.pattern}`
                : `无效${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `无效数字：必须是 ${e.divisor} 的倍数`;
      case `unrecognized_keys`:
        return `出现未知的键(key): ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `${e.origin} 中的键(key)无效`;
      case `invalid_union`:
        return `无效输入`;
      case `invalid_element`:
        return `${e.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
};
function sc() {
  return { localeError: oc() };
}
var cc = () => {
  let e = {
    string: { unit: `字元`, verb: `擁有` },
    file: { unit: `位元組`, verb: `擁有` },
    array: { unit: `項目`, verb: `擁有` },
    set: { unit: `項目`, verb: `擁有` },
    map: { unit: `項目`, verb: `擁有` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `輸入`,
      email: `郵件地址`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `ISO 日期時間`,
      date: `ISO 日期`,
      time: `ISO 時間`,
      duration: `ISO 期間`,
      ipv4: `IPv4 位址`,
      ipv6: `IPv6 位址`,
      mac: `MAC 位址`,
      cidrv4: `IPv4 範圍`,
      cidrv6: `IPv6 範圍`,
      base64: `base64 編碼字串`,
      base64url: `base64url 編碼字串`,
      json_string: `JSON 字串`,
      e164: `E.164 數值`,
      credit_card: `信用卡號`,
      currency_code: `貨幣代碼`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `輸入`,
    },
    r = { nan: `NaN` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `無效的輸入值：預期為 instanceof ${e.expected}，但收到 ${i}`
          : `無效的輸入值：預期為 ${t}，但收到 ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `無效的輸入值：預期為 ${R(e.values[0])}`
          : `無效的選項：預期為以下其中之一 ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `數值過大：預期 ${e.origin ?? `值`} 應為 ${n}${e.maximum.toString()} ${r.unit ?? `個元素`}`
          : `數值過大：預期 ${e.origin ?? `值`} 應為 ${n}${e.maximum.toString()}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()} ${r.unit}`
          : `數值過小：預期 ${e.origin} 應為 ${n}${e.minimum.toString()}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `無效的字串：必須以 "${t.prefix}" 開頭`
          : t.format === `ends_with`
            ? `無效的字串：必須以 "${t.suffix}" 結尾`
            : t.format === `includes`
              ? `無效的字串：必須包含 "${t.includes}"`
              : t.format === `regex`
                ? `無效的字串：必須符合格式 ${t.pattern}`
                : `無效的 ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `無效的數字：必須為 ${e.divisor} 的倍數`;
      case `unrecognized_keys`:
        return `無法識別的鍵值${e.keys.length > 1 ? `們` : ``}：${I(e.keys, `、`)}`;
      case `invalid_key`:
        return `${e.origin} 中有無效的鍵值`;
      case `invalid_union`:
        return `無效的輸入值`;
      case `invalid_element`:
        return `${e.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
};
function lc() {
  return { localeError: cc() };
}
var uc = () => {
  let e = {
    string: { unit: `àmi`, verb: `ní` },
    file: { unit: `bytes`, verb: `ní` },
    array: { unit: `nkan`, verb: `ní` },
    set: { unit: `nkan`, verb: `ní` },
    map: { unit: `nkan`, verb: `ní` },
  };
  function t(t) {
    return e[t] ?? null;
  }
  let n = {
      regex: `ẹ̀rọ ìbáwọlé`,
      email: `àdírẹ́sì ìmẹ́lì`,
      url: `URL`,
      emoji: `emoji`,
      uuid: `UUID`,
      uuidv4: `UUIDv4`,
      uuidv6: `UUIDv6`,
      nanoid: `nanoid`,
      guid: `GUID`,
      cuid: `cuid`,
      cuid2: `cuid2`,
      ulid: `ULID`,
      xid: `XID`,
      ksuid: `KSUID`,
      datetime: `àkókò ISO`,
      date: `ọjọ́ ISO`,
      time: `àkókò ISO`,
      duration: `àkókò tó pé ISO`,
      ipv4: `àdírẹ́sì IPv4`,
      ipv6: `àdírẹ́sì IPv6`,
      mac: `àdírẹ́sì MAC`,
      cidrv4: `àgbègbè IPv4`,
      cidrv6: `àgbègbè IPv6`,
      base64: `ọ̀rọ̀ tí a kọ́ ní base64`,
      base64url: `ọ̀rọ̀ base64url`,
      json_string: `ọ̀rọ̀ JSON`,
      e164: `nọ́mbà E.164`,
      credit_card: `nọmba kaadi gbese`,
      currency_code: `koodu owó`,
      iban: `IBAN`,
      jwt: `JWT`,
      template_literal: `ẹ̀rọ ìbáwọlé`,
    },
    r = { nan: `NaN`, number: `nọ́mbà`, array: `akopọ` };
  return (e) => {
    switch (e.code) {
      case `invalid_type`: {
        let t = r[e.expected] ?? e.expected,
          n = z(e.input),
          i = r[n] ?? n;
        return /^[A-Z]/.test(e.expected)
          ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${e.expected}, àmọ̀ a rí ${i}`
          : `Ìbáwọlé aṣìṣe: a ní láti fi ${t}, àmọ̀ a rí ${i}`;
      }
      case `invalid_value`:
        return e.values.length === 1
          ? `Ìbáwọlé aṣìṣe: a ní láti fi ${R(e.values[0])}`
          : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${I(e.values, `|`)}`;
      case `too_big`: {
        let n = e.inclusive ? `<=` : `<`,
          r = t(e.origin);
        return r
          ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${e.origin ?? `iye`} ${r.verb} ${n}${e.maximum} ${r.unit}`
          : `Tó pọ̀ jù: a ní láti jẹ́ ${n}${e.maximum}`;
      }
      case `too_small`: {
        let n = e.inclusive ? `>=` : `>`,
          r = t(e.origin);
        return r
          ? `Kéré ju: a ní láti jẹ́ pé ${e.origin} ${r.verb} ${n}${e.minimum} ${r.unit}`
          : `Kéré ju: a ní láti jẹ́ ${n}${e.minimum}`;
      }
      case `invalid_format`: {
        let t = e;
        return t.format === `starts_with`
          ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${t.prefix}"`
          : t.format === `ends_with`
            ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${t.suffix}"`
            : t.format === `includes`
              ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${t.includes}"`
              : t.format === `regex`
                ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${t.pattern}`
                : `Aṣìṣe: ${n[t.format] ?? e.format}`;
      }
      case `not_multiple_of`:
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${e.divisor}`;
      case `unrecognized_keys`:
        return `Bọtìnì àìmọ̀: ${I(e.keys, `, `)}`;
      case `invalid_key`:
        return `Bọtìnì aṣìṣe nínú ${e.origin}`;
      case `invalid_union`:
        return `Ìbáwọlé aṣìṣe`;
      case `invalid_element`:
        return `Iye aṣìṣe nínú ${e.origin}`;
      default:
        return `Ìbáwọlé aṣìṣe`;
    }
  };
};
function dc() {
  return { localeError: uc() };
}
var fc = r({
    ar: () => Wa,
    az: () => Ka,
    be: () => Ya,
    bg: () => Za,
    bn: () => $a,
    ca: () => to,
    ckb: () => ro,
    cs: () => ao,
    da: () => so,
    de: () => lo,
    el: () => fo,
    en: () => mo,
    eo: () => go,
    es: () => vo,
    fa: () => bo,
    fi: () => So,
    fr: () => wo,
    frCA: () => Eo,
    gu: () => Oo,
    he: () => Ao,
    hi: () => Mo,
    hr: () => Po,
    hu: () => Io,
    hy: () => Bo,
    id: () => Ho,
    is: () => Wo,
    it: () => Ko,
    ja: () => Jo,
    ka: () => Xo,
    kh: () => $o,
    km: () => Qo,
    kn: () => ts,
    ko: () => rs,
    lt: () => ss,
    mk: () => ls,
    ms: () => ds,
    ne: () => ps,
    nl: () => hs,
    nn: () => _s,
    no: () => ys,
    ota: () => xs,
    pl: () => Ts,
    ps: () => Cs,
    pt: () => Ds,
    ptBR: () => ks,
    ro: () => js,
    ru: () => Ps,
    sk: () => Is,
    sl: () => Rs,
    sv: () => Bs,
    ta: () => Hs,
    tg: () => Ws,
    th: () => Ks,
    tk: () => Js,
    tr: () => Xs,
    ua: () => $s,
    uk: () => Qs,
    ur: () => tc,
    uz: () => rc,
    vi: () => ac,
    yo: () => dc,
    zhCN: () => sc,
    zhTW: () => lc,
  }),
  pc,
  mc = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(e, ...t) {
      let n = t[0];
      return (
        this._map.set(e, n),
        n && typeof n == `object` && `id` in n && this._idmap.set(n.id, e),
        this
      );
    }
    clear() {
      return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(e) {
      let t = this._map.get(e);
      return (
        t && typeof t == `object` && `id` in t && this._idmap.delete(t.id),
        this._map.delete(e),
        this
      );
    }
    get(e) {
      let t = e._zod.parent;
      if (t) {
        let n = { ...(this.get(t) ?? {}) };
        delete n.id;
        let r = { ...n, ...this._map.get(e) };
        return Object.keys(r).length ? r : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  };
function hc() {
  return new mc();
}
(pc = globalThis).__zod_globalRegistry ?? (pc.__zod_globalRegistry = hc());
var gc = globalThis.__zod_globalRegistry;
function _c(e) {
  return ((e.checks &&= [...e.checks]), e);
}
function vc(e, t) {
  return new e(_c({ type: `string`, ...L(t) }));
}
function yc(e, t) {
  return new e({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function bc(e, t) {
  return new e({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function xc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Sc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...L(t),
  });
}
function Cc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...L(t),
  });
}
function wc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...L(t),
  });
}
function Tc(e, t) {
  return new e({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Ec(e, t) {
  return new e({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Dc(e, t) {
  return new e({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Oc(e, t) {
  return new e({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function kc(e, t) {
  return new e({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Ac(e, t) {
  return new e({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function jc(e, t) {
  return new e({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Mc(e, t) {
  return new e({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Nc(e, t) {
  return new e({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Pc(e, t) {
  return new e({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Fc(e, t) {
  return new e({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Ic(e, t) {
  return new e({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Lc(e, t) {
  return new e({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Rc(e, t) {
  return new e({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function zc(e, t) {
  return new e({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Bc(e, t) {
  return new e({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ...L(t),
  });
}
function Vc(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...L(t),
  });
}
function Hc(e, t) {
  return new e({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ...L(t),
  });
}
function Uc(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...L(t),
  });
}
function Wc(e, t) {
  return new e({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ...L(t),
  });
}
function Gc(e, t) {
  return new e(_c({ type: `number`, checks: [], ...L(t) }));
}
function Kc(e, t) {
  return new e(_c({ type: `number`, coerce: !0, checks: [], ...L(t) }));
}
function qc(e, t) {
  return new e({
    type: `number`,
    check: `number_format`,
    abort: !1,
    format: `safeint`,
    ...L(t),
  });
}
function Jc(e) {
  return new e({ type: `unknown` });
}
function Yc(e, t) {
  return new e({ type: `never`, ...L(t) });
}
function Xc(e, t) {
  return new Mr({ check: `less_than`, ...L(t), value: e, inclusive: !1 });
}
function Zc(e, t) {
  return new Mr({ check: `less_than`, ...L(t), value: e, inclusive: !0 });
}
function Qc(e, t) {
  return new Nr({ check: `greater_than`, ...L(t), value: e, inclusive: !1 });
}
function $c(e, t) {
  return new Nr({ check: `greater_than`, ...L(t), value: e, inclusive: !0 });
}
function el(e, t) {
  return new Pr({ check: `multiple_of`, ...L(t), value: e });
}
function tl(e, t) {
  return new Ir({ check: `max_length`, ...L(t), maximum: e });
}
function nl(e, t) {
  return new Lr({ check: `min_length`, ...L(t), minimum: e });
}
function rl(e, t) {
  return new Rr({ check: `length_equals`, ...L(t), length: e });
}
function il(e, t) {
  return new Br({
    check: `string_format`,
    format: `regex`,
    ...L(t),
    pattern: e,
  });
}
function al(e) {
  return new Vr({ check: `string_format`, format: `lowercase`, ...L(e) });
}
function ol(e) {
  return new Hr({ check: `string_format`, format: `uppercase`, ...L(e) });
}
function sl(e, t) {
  return new Ur({
    check: `string_format`,
    format: `includes`,
    ...L(t),
    includes: e,
  });
}
function cl(e, t) {
  return new Wr({
    check: `string_format`,
    format: `starts_with`,
    ...L(t),
    prefix: e,
  });
}
function ll(e, t) {
  return new Gr({
    check: `string_format`,
    format: `ends_with`,
    ...L(t),
    suffix: e,
  });
}
function ul(e) {
  return new Kr({ check: `overwrite`, tx: e });
}
function dl(e) {
  return ul((t) => t.normalize(e));
}
function fl() {
  return ul((e) => e.trim());
}
function pl() {
  return ul((e) => e.toLowerCase());
}
function ml() {
  return ul((e) => e.toUpperCase());
}
function hl() {
  return ul((e) => wt(e));
}
function gl(e, t, n) {
  return new e({ type: `array`, element: t, ...L(n) });
}
function _l(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...L(n) });
}
function vl(e, t) {
  let n = yl(
    (t) => (
      (t.addIssue = (e) => {
        if (typeof e == `string`) t.issues.push(tn(e, t.value, n._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            `input` in r || (r.input = t.value),
            (r.inst ??= n),
            (r.continue ??= !n._zod.def.abort),
            t.issues.push(tn(r)));
        }
      }),
      e(t.value, t)
    ),
    t,
  );
  return n;
}
function yl(e, t) {
  let n = new H({ check: `custom`, ...L(t) });
  return ((n._zod.check = e), n);
}
function bl(e, t) {
  let n = L(t),
    r = n.truthy ?? [`true`, `1`, `yes`, `on`, `y`, `enabled`],
    i = n.falsy ?? [`false`, `0`, `no`, `off`, `n`, `disabled`];
  n.case !== `sensitive` &&
    ((r = r.map((e) => (typeof e == `string` ? e.toLowerCase() : e))),
    (i = i.map((e) => (typeof e == `string` ? e.toLowerCase() : e))));
  let a = new Set(r),
    o = new Set(i),
    s = e.Codec ?? ya,
    c = e.Boolean ?? zi,
    l = new s({
      type: `pipe`,
      in: new (e.String ?? Qr)({ type: `string`, error: n.error }),
      out: new c({ type: `boolean`, error: n.error }),
      transform: (e, t) => {
        let r = e;
        return (
          n.case !== `sensitive` && (r = r.toLowerCase()),
          a.has(r)
            ? !0
            : !o.has(r) &&
              (t.issues.push({
                code: `invalid_value`,
                expected: `stringbool`,
                values: [...a, ...o],
                input: t.value,
                inst: l,
                continue: !1,
              }),
              {})
        );
      },
      reverseTransform: (e, t) => (e === !0 ? r[0] || `true` : i[0] || `false`),
      error: n.error,
    });
  return (
    (l._zod.bag.truthy = r),
    (l._zod.bag.falsy = i),
    (l._zod.bag.case = n.case ?? `insensitive`),
    l
  );
}
function xl(e, ...t) {
  for (let n of t)
    for (let t of Reflect.ownKeys(n))
      Object.prototype.propertyIsEnumerable.call(n, t) && ht(e, t, n[t]);
  return e;
}
function Sl(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? gc,
      target: t,
      unrepresentable: e?.unrepresentable ?? `throw`,
      override: e?.override ?? (() => {}),
      io: e?.io ?? `output`,
      counter: 0,
      seen: new Map(),
      sharedDefsExtractedFor: void 0,
      sharedEmitDoneFor: void 0,
      cycles: e?.cycles ?? `ref`,
      reused: e?.reused ?? `inline`,
      intersections: [],
      deferred: [],
      external: e?.external ?? void 0,
    }
  );
}
function Cl(e, t, n, r, i) {
  let a =
    typeof t.unrepresentable == `function`
      ? t.unrepresentable({ zodSchema: e, path: r.path, message: i })
      : t.unrepresentable;
  if (a === `any`) return !1;
  if (a === void 0 || a === `throw`) throw Error(i);
  return (Object.assign(n, a), !0);
}
function G(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  let i = e._zod.def,
    a = t.seen.get(e);
  if (a)
    return (
      a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema
    );
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  (t.seen.set(e, o),
    (t.sharedDefsExtractedFor = void 0),
    (t.sharedEmitDoneFor = void 0));
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
  else {
    let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
    else {
      let n = o.schema,
        a = t.processors[i.type];
      if (!a)
        throw Error(
          `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
        );
      a(e, t, n, r);
    }
    let a = e._zod.parent;
    a && ((o.ref ||= a), G(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && xl(o.schema, c),
    t.io === `input` &&
      K(e) &&
      (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function wl(e) {
  return e.replace(/~/g, `~0`).replace(/\//g, `~1`);
}
function Tl(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  let r = new Map();
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0])?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0])
        throw Error(
          `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      r.set(n, t[0]);
    }
  }
  let i = (t) => {
      let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (e.external) {
        let n = e.external.registry.get(t[0])?.id,
          i = e.external.uri ?? ((e) => e);
        if (n) return { ref: i(n) };
        let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
        return (
          (t[1].defId = a), { defId: a, ref: `${i(`__shared`)}#/${r}/${wl(a)}` }
        );
      }
      let i = `#/${r}/`;
      if (t[1] === n && !t[1].schema.id) return { ref: `#` };
      let a = t[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: a, ref: i + wl(a) };
    },
    a = (e) => {
      if (e[1].schema.$ref) return;
      let t = e[1],
        { ref: n, defId: r } = i(e);
      ((t.def = { ...t.schema }), r && (t.defId = r));
      let a = t.schema;
      for (let e in a) delete a[e];
      a.$ref = n;
    };
  if (e.cycles === `throw`)
    for (let t of e.seen.entries()) {
      let e = t[1];
      if (e.cycle)
        throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) a(n);
    else {
      if (e.external) {
        let r = e.external.registry.get(n[0])?.id;
        if (t !== n[0] && r) {
          a(n);
          continue;
        }
      }
      (e.metadataRegistry.get(n[0])?.id ||
        r.cycle ||
        (r.count > 1 && e.reused === `ref`)) &&
        a(n);
    }
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function El(e) {
  let t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  let n = [];
  for (let e of t) {
    if (!e || typeof e != `object`) return;
    El(e);
    let t = Object.keys(e);
    if (t.length !== 1 || t[0] !== `type`) return;
    let r = e.type;
    for (let e of Array.isArray(r) ? r : [r]) {
      if (typeof e != `string`) return;
      n.includes(e) || n.push(e);
    }
  }
  (delete e.anyOf, (e.type = n.length === 1 ? n[0] : n));
}
var Dl = new Set([`type`, `properties`, `required`, `additionalProperties`]),
  Ol = [`oneOf`, `anyOf`];
function kl(e) {
  let t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != `object` || !t
    ? null
    : Object.keys(t).length
      ? t
      : null;
}
function Al(e) {
  let t = [];
  for (let n of e) {
    if (typeof n != `object` || n.type !== `object`) return null;
    for (let e in n) if (!Dl.has(e)) return null;
    t.push(n);
  }
  let n = {},
    r = new Set();
  for (let e of t) {
    for (let r in e.properties) {
      if (Object.prototype.hasOwnProperty.call(n, r)) continue;
      let e = [];
      for (let n of t) {
        let t = n.properties?.[r] ?? kl(n);
        t != null &&
          (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
      }
      ht(n, r, e.length === 1 ? e[0] : (Al(e) ?? { allOf: e }));
    }
    for (let t of e.required ?? []) r.add(t);
  }
  let i = { type: `object`, properties: n };
  if (
    (r.size && (i.required = [...r]),
    t.every((e) => e.additionalProperties === !1))
  )
    i.additionalProperties = !1;
  else {
    let e = [];
    for (let n of t) {
      let t = kl(n);
      t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
    }
    e.length === 1
      ? (i.additionalProperties = e[0])
      : e.length > 1 && (i.additionalProperties = { allOf: e });
  }
  return i;
}
function jl(e) {
  let t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (let t of Dl) if (t in e) return;
  let n = t.filter((e) => Ol.some((t) => Array.isArray(e[t]))),
    r = null;
  if (!n.length) r = Al(t);
  else {
    let e = n[0],
      i = Ol.find((t) => Array.isArray(e[t]));
    if (Object.keys(e).length !== 1) return;
    let a = t.filter((t) => t !== e),
      o = e[i].map((e) => Al([...a, e]));
    if (o.some((e) => !e)) return;
    r = { [i]: o };
  }
  r && (delete e.allOf, xl(e, r));
}
function Ml(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = (t) => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
      a = { ...i },
      o = n.ref;
    if (((n.ref = null), o)) {
      r(o);
      let n = e.seen.get(o),
        s = n.schema;
      if (
        (s.$ref &&
        (e.target === `draft-07` ||
          e.target === `draft-04` ||
          e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : xl(i, s),
        xl(i, a),
        t._zod.parent === o)
      )
        for (let e in i)
          e !== `$ref` && e !== `allOf` && (e in a || delete i[e]);
      if (s.$ref && n.def)
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in n.def &&
            JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
            delete i[e];
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in t.def &&
            JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
            delete i[e];
    }
    e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (let t of [...e.seen.entries()].reverse()) r(t[0]);
    if (e.target !== `openapi-3.0`)
      for (let t of e.seen.entries()) El(t[1].def ?? t[1].schema);
    for (let t of e.deferred) t();
    if (e.intersections.length) {
      let t = new Map();
      for (let n of e.seen.values())
        for (let e of [n.schema, n.def]) {
          let n = e?.allOf;
          if (!Array.isArray(n)) continue;
          let r = t.get(n);
          r ? r.push(e) : t.set(n, [e]);
        }
      for (let n of e.intersections) for (let e of t.get(n) ?? []) jl(e);
    }
  }
  let i = {};
  if (
    (e.target === `draft-2020-12`
      ? (i.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : e.target === `draft-07`
        ? (i.$schema = `http://json-schema.org/draft-07/schema#`)
        : e.target === `draft-04`
          ? (i.$schema = `http://json-schema.org/draft-04/schema#`)
          : e.target,
    e.external?.uri)
  ) {
    let n = e.external.registry.get(t)?.id;
    if (!n) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(n);
  }
  xl(i, n.defId ? n.schema : (n.def ?? n.schema));
  let a = e.metadataRegistry.get(t)?.id;
  a !== void 0 && i.id === a && delete i.id;
  let o = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (let t of e.seen.entries()) {
      let e = t[1];
      e.def &&
        e.defId &&
        (e.def.id === e.defId && delete e.def.id, ht(o, e.defId, e.def));
    }
  (e.external && (e.sharedEmitDoneFor = e.external),
    e.external ||
      (Object.keys(o).length > 0 &&
        (e.target === `draft-2020-12` ? (i.$defs = o) : (i.definitions = o))));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, "~standard", {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: Pl(t, `input`, e.processors),
            output: Pl(t, `output`, e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      n
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function K(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return K(r.element, n);
  if (r.type === `set`) return K(r.valueType, n);
  if (r.type === `lazy`) return K(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault` ||
    r.type === `catch`
  )
    return K(r.innerType, n);
  if (r.type === `intersection`) return K(r.left, n) || K(r.right, n);
  if (r.type === `record` || r.type === `map`)
    return K(r.keyType, n) || K(r.valueType, n);
  if (r.type === `pipe`)
    return e._zod.traits.has(`$ZodCodec`) ? !0 : K(r.in, n) || K(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (K(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (K(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (K(e, n)) return !0;
    return !!(r.rest && K(r.rest, n));
  }
  return !1;
}
var Nl =
    (e, t = {}) =>
    (n) => {
      let r = Sl({ ...n, processors: t });
      return (G(e, r), Tl(r, e), Ml(r, e));
    },
  Pl =
    (e, t, n = {}) =>
    (r) => {
      let { libraryOptions: i, target: a } = r ?? {},
        o = Sl({ ...(i ?? {}), target: a, io: t, processors: n });
      return (G(e, o), Tl(o, e), Ml(o, e));
    },
  Fl = (e, t, n) => {
    (e[t] === void 0 || n > e[t]) && (e[t] = n);
  },
  Il = (e, t, n) => {
    (e[t] === void 0 || n < e[t]) && (e[t] = n);
  },
  Ll = (e, t) => {
    (Fl(e, `minimum`, t), Il(e, `maximum`, t));
  },
  Rl = (e, t) => {
    ((e.multipleOf ??= []), e.multipleOf.includes(t) || e.multipleOf.push(t));
  },
  zl = (e, t) => {
    ((e.patterns ??= new Set()), e.patterns.add(t));
  },
  Bl = (e, t) => {
    e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
  },
  Vl = (e, t) => {
    ((e.format = t), t.includes(`int`) && (e.isInt = !0));
  },
  Hl = (e, t) => Fl(e, `minimum`, t.minimum),
  Ul = (e, t) => Il(e, `maximum`, t.maximum),
  Wl = (e) => (t, n) => {
    Vl(t, n.format);
    let [r, i] = e[n.format];
    (Fl(t, `minimum`, r), Il(t, `maximum`, i));
  },
  Gl = {
    greater_than: (e, t) =>
      Fl(e, t.inclusive ? `minimum` : `exclusiveMinimum`, t.value),
    less_than: (e, t) =>
      Il(e, t.inclusive ? `maximum` : `exclusiveMaximum`, t.value),
    multiple_of: (e, t) => Rl(e, t.value),
    number_format: Wl(Pt),
    bigint_format: Wl(Ft),
    min_length: Hl,
    max_length: Ul,
    length_equals: (e, t) => Ll(e, t.length),
    min_size: Hl,
    max_size: Ul,
    size_equals: (e, t) => Ll(e, t.size),
    string_format: (e, t) => {
      (Vl(e, t.format),
        t.pattern && zl(e, t.pattern),
        (t.format === `base64` || t.format === `base64url`) &&
          (e.contentEncoding = t.format),
        (t.local || t.precision === -1) && (e.laxFormat = !0));
    },
    mime_type: (e, t) => Bl(e, t.mime),
  };
function Kl(e) {
  let t = {},
    n = e._zod.def,
    r = e._zod.traits.has(`$ZodCheck`)
      ? [e, ...(n.checks ?? [])]
      : (n.checks ?? []);
  for (let e of r) Gl[e._zod.def.check]?.(t, e._zod.def);
  let i = e._zod.bag;
  (i.minimum !== void 0 && Fl(t, `minimum`, i.minimum),
    i.exclusiveMinimum !== void 0 &&
      Fl(t, `exclusiveMinimum`, i.exclusiveMinimum),
    i.maximum !== void 0 && Il(t, `maximum`, i.maximum),
    i.exclusiveMaximum !== void 0 &&
      Il(t, `exclusiveMaximum`, i.exclusiveMaximum),
    i.multipleOf !== void 0 && Rl(t, i.multipleOf),
    i.format !== void 0 &&
      ((t.format ??= i.format), i.format.includes(`int`) && (t.isInt = !0)),
    i.mime && Bl(t, i.mime));
  for (let e of i.patterns ?? []) zl(t, e);
  return t;
}
var ql = {
    guid: `uuid`,
    url: `uri`,
    datetime: `date-time`,
    json_string: `json-string`,
    regex: ``,
  },
  Jl = new Map([
    [ki, mr],
    [ji, hr],
  ]),
  Yl = (e) => Jl.get(e) ?? e,
  Xl = (e, t, n, r) => {
    let i = n;
    i.type = `string`;
    let {
      minimum: a,
      maximum: o,
      format: s,
      patterns: c,
      contentEncoding: l,
      laxFormat: u,
    } = Kl(e);
    if (
      (typeof a == `number` && (i.minLength = a),
      typeof o == `number` && (i.maxLength = o),
      s &&
        ((i.format = ql[s] ?? s),
        i.format === `` && delete i.format,
        (s === `time` || u) && delete i.format),
      l && (i.contentEncoding = l),
      c && c.size > 0)
    ) {
      let e = [...c].map(Yl);
      e.length === 1
        ? (i.pattern = e[0].source)
        : e.length > 1 &&
          (i.allOf = [
            ...e.map((e) => ({
              ...(t.target === `draft-07` ||
              t.target === `draft-04` ||
              t.target === `openapi-3.0`
                ? { type: `string` }
                : {}),
              pattern: e.source,
            })),
          ]);
    }
  },
  Zl = (e, t, n, r) => {
    let i = n,
      {
        minimum: a,
        maximum: o,
        multipleOf: s,
        exclusiveMaximum: c,
        exclusiveMinimum: l,
        isInt: u,
      } = Kl(e);
    i.type = u ? `integer` : `number`;
    let d = typeof l == `number` && l >= (a ?? -1 / 0),
      f = typeof c == `number` && c <= (o ?? 1 / 0),
      p = t.target === `draft-04` || t.target === `openapi-3.0`;
    if (
      (d
        ? p
          ? ((i.minimum = l), (i.exclusiveMinimum = !0))
          : (i.exclusiveMinimum = l)
        : typeof a == `number` && (i.minimum = a),
      f
        ? p
          ? ((i.maximum = c), (i.exclusiveMaximum = !0))
          : (i.exclusiveMaximum = c)
        : typeof o == `number` && (i.maximum = o),
      s)
    ) {
      let n = new Set();
      for (let a of s)
        Number.isFinite(a) && a !== 0
          ? n.add(Math.abs(a))
          : Cl(
              e,
              t,
              i,
              r,
              `A multipleOf divisor of ${a} cannot be represented in JSON Schema`,
            );
      let [a, ...o] = n;
      (a !== void 0 && (i.multipleOf = a),
        o.length &&
          (i.allOf = [
            ...(i.allOf ?? []),
            ...o.map((e) => ({ multipleOf: e })),
          ]));
    }
  },
  Ql = (e, t, n, r) => {
    n.type = `boolean`;
  },
  $l = (e, t, n, r) => {
    n.not = {};
  },
  eu = (e, t, n, r) => {
    let i = e._zod.def,
      a = ct(i.entries);
    a.length === 0
      ? (n.not = {})
      : (a.every((e) => typeof e == `number`) && (n.type = `number`),
        a.every((e) => typeof e == `string`) && (n.type = `string`),
        (n.enum = a));
  },
  tu = (e, t, n, r) => {
    let i = e._zod.def;
    if (i.values.length === 0) {
      n.not = {};
      return;
    }
    let a = [];
    for (let o of i.values)
      if (o === void 0) {
        if (
          Cl(
            e,
            t,
            n,
            r,
            "Literal `undefined` cannot be represented in JSON Schema",
          )
        )
          return;
      } else if (typeof o == `bigint`) {
        if (
          Cl(e, t, n, r, `BigInt literals cannot be represented in JSON Schema`)
        )
          return;
        a.push(Number(o));
      } else a.push(o);
    if (a.length !== 0) {
      if (a.length === 1) {
        let e = a[0];
        ((n.type = e === null ? `null` : typeof e),
          t.target === `draft-04` || t.target === `openapi-3.0`
            ? (n.enum = [e])
            : (n.const = e));
      } else
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
          a.every((e) => e === null) && (n.type = `null`),
          (n.enum = a));
    }
  },
  nu = (e, t, n, r) => {
    Cl(e, t, n, r, `Custom types cannot be represented in JSON Schema`);
  },
  ru = (e, t, n, r) => {
    Cl(e, t, n, r, `Transforms cannot be represented in JSON Schema`);
  },
  iu = (e, t, n, r) => {
    let i = n,
      a = e._zod.def,
      { minimum: o, maximum: s } = Kl(e);
    (typeof o == `number` && (i.minItems = o),
      typeof s == `number` && (i.maxItems = s),
      (i.type = `array`),
      (i.items = G(a.element, t, { ...r, path: [...r.path, `items`] })));
  };
function au(e) {
  let t = e._zod.def;
  return t.type === `pipe` && t.in._zod.traits.has(`$ZodTransform`)
    ? au(t.out)
    : t.type === `catch`
      ? au(t.innerType)
      : e._zod.optin;
}
var ou = (e, t, n, r) => {
    let i = n,
      a = e._zod.def,
      o = a.shape;
    if (
      Object.getOwnPropertySymbols(o).length &&
      Cl(e, t, i, r, `Symbol keys cannot be represented in JSON Schema`)
    )
      return;
    ((i.type = `object`), (i.properties = {}));
    for (let e in o)
      ht(
        i.properties,
        e,
        G(o[e], t, { ...r, path: [...r.path, `properties`, e] }),
      );
    let s = [];
    for (let e of Object.keys(o)) {
      let n = a.shape[e];
      (t.io === `input` ? au(n) === void 0 : n._zod.optout === void 0) &&
        s.push(e);
    }
    (s.length > 0 && (i.required = s),
      a.catchall?._zod.def.type === `never`
        ? (i.additionalProperties = !1)
        : a.catchall
          ? a.catchall &&
            (i.additionalProperties = G(a.catchall, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            }))
          : t.io === `output` && (i.additionalProperties = !1));
  },
  su = (e, t, n, r) => {
    let i = e._zod.def,
      a = i.inclusive === !1,
      o = i.options.map((e, n) =>
        G(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }),
      );
    a ? (n.oneOf = o) : (n.anyOf = o);
  },
  cu = (e, t, n, r) => {
    let i = e._zod.def,
      a = G(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
      o = G(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
      s = (e) => `allOf` in e && Object.keys(e).length === 1,
      c = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
    ((n.allOf = c), t.intersections.push(c));
  },
  lu = (e, t, n, r) => {
    let i = e._zod.def,
      a = G(i.innerType, t, r),
      o = t.seen.get(e);
    t.target === `openapi-3.0`
      ? ((o.ref = i.innerType), (n.nullable = !0))
      : (n.anyOf = [a, { type: `null` }]);
  },
  uu = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  du = Symbol();
function fu(e, t, n, r, i) {
  let a = !1,
    o = JSON.stringify(e, (e, t) =>
      typeof t == `bigint` ? ((a = !0), null) : t,
    );
  return a
    ? (Cl(t, n, r, i, `BigInt defaults cannot be represented in JSON Schema`),
      du)
    : JSON.parse(o);
}
var pu = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
    let o = fu(i.defaultValue, e, t, n, r);
    o !== du && (n.default = o);
  },
  mu = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    if (((a.ref = i.innerType), t.io !== `input`)) return;
    let o = fu(i.defaultValue, e, t, n, r);
    o !== du && (n._prefault = o);
  },
  hu = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
    let o;
    try {
      o = i.catchValue(void 0);
    } catch {
      Cl(e, t, n, r, `Dynamic catch values are not supported in JSON Schema`);
      return;
    }
    n.default = o;
  },
  gu = (e, t, n, r) => {
    let i = e._zod.def,
      a = i.in._zod.traits.has(`$ZodTransform`),
      o = t.io === `input` ? (a ? i.out : i.in) : i.out;
    G(o, t, r);
    let s = t.seen.get(e);
    s.ref = o;
  },
  _u = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType), (n.readOnly = !0));
  },
  vu = (e, t, n, r) => {
    let i = e._zod.def;
    G(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  yu = new WeakSet([Object.prototype, Error.prototype]);
function bu(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      let e = n(this);
      return (
        Object.defineProperty(this, t, {
          value: e,
          configurable: !0,
          writable: !0,
        }),
        e
      );
    },
    set(e) {
      Object.defineProperty(this, t, {
        value: e,
        configurable: !0,
        writable: !0,
      });
    },
  });
}
var xu = V(
    `ZodError`,
    (e, t) => {
      (On.init(e, t), (e.name = `ZodError`));
      let n = Object.getPrototypeOf(e);
      yu.has(n) ||
        (yu.add(n),
        bu(n, `format`, (e) => (t) => jn(e, t)),
        bu(n, `flatten`, (e) => (t) => An(e, t)),
        bu(n, `addIssue`, (e) => (t) => {
          (e.issues.push(t), (e.message = JSON.stringify(e.issues, lt, 2)));
        }),
        bu(n, `addIssues`, (e) => (t) => {
          (e.issues.push(...t), (e.message = JSON.stringify(e.issues, lt, 2)));
        }),
        Object.defineProperty(n, "isEmpty", {
          configurable: !0,
          enumerable: !1,
          get() {
            return this.issues.length === 0;
          },
        }));
    },
    void 0,
    { Parent: Error },
  ),
  Su = Nn(xu),
  Cu = Pn(xu),
  wu = Fn(xu),
  Tu = Ln(xu),
  Eu = Un(xu),
  Du = Wn(xu),
  Ou = Gn(xu),
  ku = Kn(xu),
  Au = qn(xu),
  ju = Jn(xu),
  Mu = Yn(xu),
  Nu = Xn(xu);
function Pu() {
  xn.localeError || Sn(mo());
}
function Fu() {
  xn.memoizer || Sn({ memoizer: Va() });
}
var q = V(
    `ZodType`,
    (e, t) => (Pu(), U.init(e, t), (e.def = t), (e.type = t.type), e),
    {
      check(...e) {
        let t = this.def;
        return this.clone(
          St(t, {
            checks: [
              ...(t.checks ?? []),
              ...e.map((e) =>
                typeof e == `function`
                  ? {
                      _zod: {
                        check: e,
                        def: { check: `custom` },
                        onattach: [],
                      },
                    }
                  : e,
              ),
            ],
          }),
          { parent: !0 },
        );
      },
      with(...e) {
        return this.check(...e);
      },
      clone(e, t) {
        return Mt(this, e, t);
      },
      brand() {
        return this;
      },
      register(e, t) {
        return (e.add(this, t), this);
      },
      refine(e, t) {
        return this.check(Qd(e, t));
      },
      superRefine(e, t) {
        return this.check($d(e, t));
      },
      overwrite(e) {
        return this.check(ul(e));
      },
      optional() {
        return Md(this);
      },
      exactOptional() {
        return Pd(this);
      },
      nullable() {
        return Id(this);
      },
      nullish() {
        return Md(Id(this));
      },
      nonoptional(e) {
        return Hd(this, e);
      },
      array() {
        return vd(this);
      },
      or(e) {
        return Sd([this, e]);
      },
      and(e) {
        return wd(this, e);
      },
      transform(e) {
        return Kd(this, Ad(e));
      },
      default(e) {
        return Rd(this, e);
      },
      prefault(e) {
        return Bd(this, e);
      },
      catch(e) {
        return Wd(this, e);
      },
      pipe(e) {
        return Kd(this, e);
      },
      readonly() {
        return Xd(this);
      },
      describe(e) {
        let t = this.clone();
        return (gc.add(t, { description: e }), t);
      },
      meta(...e) {
        if (e.length === 0) return gc.get(this);
        let t = this.clone();
        return (gc.add(t, e[0]), t);
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(e, ...t) {
        return t.length === 0 ? e(this) : e(this, ...t);
      },
      get "~standard"() {
        return an(this, `~standard`, {
          ...Zr(this),
          jsonSchema: { input: Pl(this, `input`), output: Pl(this, `output`) },
        });
      },
      set "~standard"(e) {
        rn(this, `~standard`, e);
      },
      parse: function e(t, n) {
        return Su(this, t, n, { callee: e });
      },
      parseAsync: async function e(t, n) {
        return await Cu(this, t, n, { callee: e });
      },
      safeParse(e, t) {
        return wu(this, e, t);
      },
      async safeParseAsync(e, t) {
        return Tu(this, e, t);
      },
      get spa() {
        return this?.safeParseAsync;
      },
      set spa(e) {
        rn(this, `spa`, e);
      },
      validate(e, t) {
        return Bn(this, e, t);
      },
      validateAsync(e, t) {
        return Hn(this, e, t);
      },
      encode: function e(t, n) {
        return Eu(this, t, n, { callee: e });
      },
      decode: function e(t, n) {
        return Du(this, t, n, { callee: e });
      },
      encodeAsync: async function e(t, n) {
        return await Ou(this, t, n, { callee: e });
      },
      decodeAsync: async function e(t, n) {
        return await ku(this, t, n, { callee: e });
      },
      safeEncode(e, t) {
        return Au(this, e, t);
      },
      safeDecode(e, t) {
        return ju(this, e, t);
      },
      async safeEncodeAsync(e, t) {
        return Mu(this, e, t);
      },
      async safeDecodeAsync(e, t) {
        return Nu(this, e, t);
      },
      toJSONSchema(e) {
        return Nl(this, {})(e);
      },
      get description() {
        return gc.get(this)?.description;
      },
      get _def() {
        return this._zod.def;
      },
    },
  ),
  Iu = V(
    `_ZodString`,
    (e, t) => {
      (Qr.init(e, t),
        q.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => Xl(e, t, n, r)));
    },
    on(
      {
        format: (e) => Kl(e).format ?? null,
        minLength: (e) => Kl(e).minimum ?? null,
        maxLength: (e) => Kl(e).maximum ?? null,
      },
      {
        regex(...e) {
          return this.check(il(...e));
        },
        includes(...e) {
          return this.check(sl(...e));
        },
        startsWith(...e) {
          return this.check(cl(...e));
        },
        endsWith(...e) {
          return this.check(ll(...e));
        },
        min(...e) {
          return this.check(nl(...e));
        },
        max(...e) {
          return this.check(tl(...e));
        },
        length(...e) {
          return this.check(rl(...e));
        },
        nonempty(...e) {
          return this.check(nl(1, ...e));
        },
        lowercase(e) {
          return this.check(al(e));
        },
        uppercase(e) {
          return this.check(ol(e));
        },
        trim() {
          return this.check(fl());
        },
        normalize(...e) {
          return this.check(dl(...e));
        },
        toLowerCase() {
          return this.check(pl());
        },
        toUpperCase() {
          return this.check(ml());
        },
        slugify() {
          return this.check(hl());
        },
      },
    ),
  ),
  Lu = V(
    `ZodString`,
    (e, t) => {
      (Qr.init(e, t), Iu.init(e, t));
    },
    {
      email(e) {
        return this.check(yc(Uu, e));
      },
      url(e) {
        return this.check(Tc(Ku, e));
      },
      jwt(e) {
        return this.check(Bc(sd, e));
      },
      emoji(e) {
        return this.check(Ec(qu, e));
      },
      guid(e) {
        return this.check(bc(Wu, e));
      },
      uuid(e) {
        return this.check(xc(Gu, e));
      },
      uuidv4(e) {
        return this.check(Sc(Gu, e));
      },
      uuidv6(e) {
        return this.check(Cc(Gu, e));
      },
      uuidv7(e) {
        return this.check(wc(Gu, e));
      },
      nanoid(e) {
        return this.check(Dc(Ju, e));
      },
      cuid(e) {
        return this.check(Oc(Yu, e));
      },
      cuid2(e) {
        return this.check(kc(Xu, e));
      },
      ulid(e) {
        return this.check(Ac(Zu, e));
      },
      base64(e) {
        return this.check(Lc(id, e));
      },
      base64url(e) {
        return this.check(Rc(ad, e));
      },
      xid(e) {
        return this.check(jc(Qu, e));
      },
      ksuid(e) {
        return this.check(Mc($u, e));
      },
      ipv4(e) {
        return this.check(Nc(ed, e));
      },
      ipv6(e) {
        return this.check(Pc(td, e));
      },
      cidrv4(e) {
        return this.check(Fc(nd, e));
      },
      cidrv6(e) {
        return this.check(Ic(rd, e));
      },
      e164(e) {
        return this.check(zc(od, e));
      },
      datetime(e) {
        return this.check(Vc(zu, e));
      },
      date(e) {
        return this.check(Hc(Bu, e));
      },
      time(e) {
        return this.check(Uc(Vu, e));
      },
      duration(e) {
        return this.check(Wc(Hu, e));
      },
    },
  );
function Ru(e) {
  return vc(Lu, e);
}
var J = V(`ZodStringFormat`, (e, t) => {
    (W.init(e, t), Iu.init(e, t));
  }),
  zu = V(`ZodISODateTime`, (e, t) => {
    (_i.init(e, t), J.init(e, t));
  }),
  Bu = V(`ZodISODate`, (e, t) => {
    (vi.init(e, t), J.init(e, t));
  }),
  Vu = V(`ZodISOTime`, (e, t) => {
    (yi.init(e, t), J.init(e, t));
  }),
  Hu = V(`ZodISODuration`, (e, t) => {
    (bi.init(e, t), J.init(e, t));
  }),
  Uu = V(`ZodEmail`, (e, t) => {
    (ti.init(e, t), J.init(e, t));
  }),
  Wu = V(`ZodGUID`, (e, t) => {
    ($r.init(e, t), J.init(e, t));
  }),
  Gu = V(`ZodUUID`, (e, t) => {
    (ei.init(e, t), J.init(e, t));
  }),
  Ku = V(`ZodURL`, (e, t) => {
    (li.init(e, t), J.init(e, t));
  }),
  qu = V(`ZodEmoji`, (e, t) => {
    (ui.init(e, t), J.init(e, t));
  }),
  Ju = V(`ZodNanoID`, (e, t) => {
    (di.init(e, t), J.init(e, t));
  }),
  Yu = V(`ZodCUID`, (e, t) => {
    (fi.init(e, t), J.init(e, t));
  }),
  Xu = V(`ZodCUID2`, (e, t) => {
    (pi.init(e, t), J.init(e, t));
  }),
  Zu = V(`ZodULID`, (e, t) => {
    (mi.init(e, t), J.init(e, t));
  }),
  Qu = V(`ZodXID`, (e, t) => {
    (hi.init(e, t), J.init(e, t));
  }),
  $u = V(`ZodKSUID`, (e, t) => {
    (gi.init(e, t), J.init(e, t));
  }),
  ed = V(`ZodIPv4`, (e, t) => {
    (xi.init(e, t), J.init(e, t));
  }),
  td = V(`ZodIPv6`, (e, t) => {
    (wi.init(e, t), J.init(e, t));
  }),
  nd = V(`ZodCIDRv4`, (e, t) => {
    (Ti.init(e, t), J.init(e, t));
  }),
  rd = V(`ZodCIDRv6`, (e, t) => {
    (Di.init(e, t), J.init(e, t));
  }),
  id = V(`ZodBase64`, (e, t) => {
    (Ai.init(e, t), J.init(e, t));
  }),
  ad = V(`ZodBase64URL`, (e, t) => {
    (Ni.init(e, t), J.init(e, t));
  }),
  od = V(`ZodE164`, (e, t) => {
    (Pi.init(e, t), J.init(e, t));
  }),
  sd = V(`ZodJWT`, (e, t) => {
    (Ii.init(e, t), J.init(e, t));
  }),
  cd = V(
    `ZodNumber`,
    (e, t) => {
      (Li.init(e, t),
        q.init(e, t),
        (e._zod.processJSONSchema = (t, n, r) => Zl(e, t, n, r)),
        (e.isFinite = !0));
    },
    on(
      {
        minValue: (e) => {
          let { minimum: t, exclusiveMinimum: n } = Kl(e);
          return Math.max(t ?? -1 / 0, n ?? -1 / 0);
        },
        maxValue: (e) => {
          let { maximum: t, exclusiveMaximum: n } = Kl(e);
          return Math.min(t ?? 1 / 0, n ?? 1 / 0);
        },
        isInt: (e) => {
          let { isInt: t, multipleOf: n } = Kl(e);
          return !!t || !!n?.some(Number.isSafeInteger);
        },
        format: (e) => Kl(e).format ?? null,
      },
      {
        gt(e, t) {
          return this.check(Qc(e, t));
        },
        gte(e, t) {
          return this.check($c(e, t));
        },
        min(e, t) {
          return this.check($c(e, t));
        },
        lt(e, t) {
          return this.check(Xc(e, t));
        },
        lte(e, t) {
          return this.check(Zc(e, t));
        },
        max(e, t) {
          return this.check(Zc(e, t));
        },
        int(e) {
          return this.check(dd(e));
        },
        safe(e) {
          return this.check(dd(e));
        },
        positive(e) {
          return this.check(Qc(0, e));
        },
        nonnegative(e) {
          return this.check($c(0, e));
        },
        negative(e) {
          return this.check(Xc(0, e));
        },
        nonpositive(e) {
          return this.check(Zc(0, e));
        },
        multipleOf(e, t) {
          return this.check(el(e, t));
        },
        step(e, t) {
          return this.check(el(e, t));
        },
        finite() {
          return this;
        },
      },
    ),
  );
function ld(e) {
  return Gc(cd, e);
}
var ud = V(`ZodNumberFormat`, (e, t) => {
  (Ri.init(e, t), cd.init(e, t));
});
function dd(e) {
  return qc(ud, e);
}
var fd = V(`ZodBoolean`, (e, t) => {
    (zi.init(e, t),
      q.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => Ql(e, t, n, r)));
  }),
  pd = V(`ZodUnknown`, (e, t) => {
    (Bi.init(e, t),
      q.init(e, t),
      (e._zod.processJSONSchema = (e, t, n) => void 0));
  });
function md() {
  return Jc(pd);
}
var hd = V(`ZodNever`, (e, t) => {
  (Vi.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => $l(e, t, n, r)));
});
function gd(e) {
  return Yc(hd, e);
}
var _d = V(
  `ZodArray`,
  (e, t) => {
    (Fu(),
      Gi.init(e, t),
      q.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => iu(e, t, n, r)),
      (e.element = t.element));
  },
  {
    min(e, t) {
      return this.check(nl(e, t));
    },
    nonempty(e) {
      return this.check(nl(1, e));
    },
    max(e, t) {
      return this.check(tl(e, t));
    },
    length(e, t) {
      return this.check(rl(e, t));
    },
    unwrap() {
      return this.element;
    },
  },
);
function vd(e, t) {
  return gl(_d, e, t);
}
var yd = V(
  `ZodObject`,
  (e, t) => {
    (Fu(),
      Zi.init(e, t),
      q.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => ou(e, t, n, r)),
      fn(e, `shape`, (e) => e._zod.def.shape, !1));
  },
  {
    keyof() {
      return Ed(Object.keys(this._zod.def.shape));
    },
    catchall(e) {
      return this.clone(St(this._zod.def, { catchall: e }));
    },
    passthrough() {
      return this.clone(St(this._zod.def, { catchall: md() }));
    },
    loose() {
      return this.clone(St(this._zod.def, { catchall: md() }));
    },
    strict() {
      return this.clone(St(this._zod.def, { catchall: gd() }));
    },
    strip() {
      return this.clone(St(this._zod.def, { catchall: void 0 }));
    },
    extend(e) {
      return zt(this, e);
    },
    safeExtend(e) {
      return Vt(this, e);
    },
    merge(e) {
      return Ht(this, e);
    },
    pick(e) {
      return It(this, e);
    },
    omit(e) {
      return Rt(this, e);
    },
    partial(...e) {
      return Ut(jd, this, e[0]);
    },
    exactPartial(...e) {
      return Ut(Nd, this, e[0], `exactPartial`);
    },
    required(...e) {
      return Wt(Vd, this, e[0]);
    },
  },
);
function bd(e, t) {
  return new yd({ type: `object`, shape: e ?? {}, ...L(t) });
}
var xd = V(`ZodUnion`, (e, t) => {
  ($i.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => su(e, t, n, r)),
    (e.options = t.options));
});
function Sd(e, t) {
  return new xd({ type: `union`, options: e, ...L(t) });
}
var Cd = V(`ZodIntersection`, (e, t) => {
  (ea.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => cu(e, t, n, r)));
});
function wd(e, t) {
  return new Cd({ type: `intersection`, left: e, right: t });
}
var Td = V(`ZodEnum`, (e, t) => {
  (ra.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => eu(e, t, n, r)),
    (e.enum = t.entries),
    (e.options = [...e._zod.values]));
  let n = new Set(Object.keys(t.entries));
  ((e.extract = (e, r) => {
    let i = {};
    for (let r of e)
      if (n.has(r)) i[r] = t.entries[r];
      else throw Error(`Key ${r} not found in enum`);
    return new Td({ ...t, checks: [], ...L(r), entries: i });
  }),
    (e.exclude = (e, r) => {
      let i = { ...t.entries };
      for (let t of e)
        if (n.has(t)) delete i[t];
        else throw Error(`Key ${t} not found in enum`);
      return new Td({ ...t, checks: [], ...L(r), entries: i });
    }));
});
function Ed(e, t) {
  return new Td({
    type: `enum`,
    entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
    ...L(t),
  });
}
var Dd = V(`ZodLiteral`, (e, t) => {
  (ia.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => tu(e, t, n, r)),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return t.values[0];
      },
    }));
});
function Od(e, t) {
  return new Dd({
    type: `literal`,
    values: Array.isArray(e) ? e : [e],
    ...L(t),
  });
}
var kd = V(`ZodTransform`, (e, t) => {
  (Fu(),
    aa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ru(e, t, n, r)),
    (e._zod.parse = (n, r) => {
      if (r.direction === `backward`) throw new bn(e.constructor.name);
      n.addIssue = (r) => {
        if (typeof r == `string`) n.issues.push(tn(r, n.value, t));
        else {
          let t = r;
          (t.fatal && (t.continue = !1),
            (t.code ??= `custom`),
            `input` in t || (t.input = n.value),
            (t.inst ??= e),
            n.issues.push(tn(t)));
        }
      };
      let i = t.transform(n.value, n);
      return i instanceof Promise
        ? i.then((e) => ((n.value = e), n))
        : ((n.value = i), n);
    }));
});
function Ad(e) {
  return new kd({ type: `transform`, transform: e });
}
var jd = V(`ZodOptional`, (e, t) => {
  (sa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => vu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Md(e) {
  return new jd({ type: `optional`, innerType: e });
}
var Nd = V(`ZodExactOptional`, (e, t) => {
  (ca.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => vu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Pd(e) {
  return new Nd({ type: `optional`, innerType: e });
}
var Fd = V(`ZodNullable`, (e, t) => {
  (la.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => lu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Id(e) {
  return new Fd({ type: `nullable`, innerType: e });
}
var Ld = V(`ZodDefault`, (e, t) => {
  (ua.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => pu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Rd(e, t) {
  return new Ld({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : kt(t);
    },
  });
}
var zd = V(`ZodPrefault`, (e, t) => {
  (fa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => mu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Bd(e, t) {
  return new zd({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : kt(t);
    },
  });
}
var Vd = V(`ZodNonOptional`, (e, t) => {
  (pa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => uu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Hd(e, t) {
  return new Vd({ type: `nonoptional`, innerType: e, ...L(t) });
}
var Ud = V(`ZodCatch`, (e, t) => {
  (ga.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => hu(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Wd(e, t) {
  return new Ud({
    type: `catch`,
    innerType: e,
    catchValue: typeof t == `function` ? t : mn(t),
  });
}
var Gd = V(`ZodPipe`, (e, t) => {
  (_a.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => gu(e, t, n, r)),
    (e.in = t.in),
    (e.out = t.out));
});
function Kd(e, t) {
  return new Gd({ type: `pipe`, in: e, out: t });
}
var qd = V(`ZodCodec`, (e, t) => {
  (Gd.init(e, t), ya.init(e, t));
});
function Jd(e, t, n) {
  return new qd({
    type: `pipe`,
    in: e,
    out: t,
    transform: n.decode,
    reverseTransform: n.encode,
  });
}
var Yd = V(`ZodReadonly`, (e, t) => {
  (Sa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => _u(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Xd(e) {
  return new Yd({ type: `readonly`, innerType: e });
}
var Zd = V(`ZodCustom`, (e, t) => {
  (wa.init(e, t),
    q.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => nu(e, t, n, r)));
});
function Qd(e, t = {}) {
  return _l(Zd, e, t);
}
function $d(e, t) {
  return vl(e, t);
}
var ef = (...e) => bl({ Codec: qd, Boolean: fd, String: Lu }, ...e);
function tf(e) {
  return Kc(cd, e);
}
var nf = c(ze()),
  rf = st(),
  af = { "es-419": `es`, "pt-br": `pt`, "zh-cn": `zhCN`, "zh-tw": `zhTW` };
async function of() {
  let e = se(),
    t = fc[e in af ? af[e] : e];
  Sn(t());
}
await of();
var Y = (function (e) {
    return (
      (e[(e.Client = 0)] = `Client`),
      (e[(e.GameServer = 1)] = `GameServer`),
      (e[(e.OfficialGameServer = 2)] = `OfficialGameServer`),
      e
    );
  })({}),
  sf = [`Client`, `GameServer`, `OfficialGameServer`];
function cf(e) {
  return `${e.statID}.${e.bitID}`;
}
function lf(e) {
  return e[1].type === `ACHIEVEMENTS`;
}
function uf(e) {
  return e[1].type !== `ACHIEVEMENTS`;
}
var df = (0, P.createContext)(null);
function X() {
  return (0, P.useContext)(df);
}
var Z = `Stats`,
  ff = `StatSchema`;
function pf(e, t = !1) {
  return Ce({
    queryKey: [Z, ff, e, t],
    queryFn: async () => {
      let n = t ? { version: `live` } : {},
        r = `${s.PARTNER_BASE_URL}achievements/ajaxgetstatsschema/${e}`,
        i = await nf.default.get(r, { params: n, withCredentials: !0 });
      if (i?.data?.success == 1) return i.data;
      throw Error(
        `failed to load ${t ? `live` : `draft`} stat schema for app id ${e}`,
      );
    },
  });
}
function mf(e, t = !1) {
  let n = pf(e, t);
  return n.isLoading ? null : n.data?.schema;
}
function hf(e) {
  let t = pf(e);
  return t.isLoading ? void 0 : t.data?.limits;
}
function gf(e) {
  let t = vf(e);
  return Object.keys(t ?? {}).length + 1;
}
function _f(e) {
  let t = hf(e),
    n = gf(e);
  return !t || n < t.max_groups;
}
function vf(e, t = !1) {
  return mf(e, t)?.groups;
}
function yf(e, t, n = !1) {
  return vf(e, n)?.[t];
}
function bf(e) {
  let t = vf(e);
  return t
    ? Object.keys(t)
        .map((e) => ({
          groupid: e,
          sortid: tf().default(0).parse(t[e].order),
          ...t[e],
        }))
        .sort((e, t) => e.sortid - t.sortid)
        .map((e) => e)
    : [];
}
function xf(e, t = !1) {
  let n = mf(e, t);
  return n?.stats
    ? Object.entries(n.stats)
        .filter(uf)
        .map(([e, t]) => ({ ...t, statID: e }))
    : void 0;
}
function Sf(e, t = !1) {
  let n = mf(e, t);
  return n?.stats
    ? Object.entries(n.stats)
        .filter(lf)
        .flatMap(([e, t]) =>
          Object.entries(t.bits).map(([t, n]) => ({
            ...n,
            statID: e,
            bitID: t,
          })),
        )
    : void 0;
}
function Cf(e, t, n = !1) {
  let r = mf(e, n);
  return r?.stats
    ? Object.entries(r.stats)
        .filter(lf)
        .flatMap(([e, n]) =>
          Object.entries(n.bits)
            .filter(([e, n]) => (!t && !n.groupid) || t === n.groupid)
            .map(([t, n]) => ({ ...n, statID: e, bitID: t })),
        )
    : void 0;
}
var wf = `AppLanguageList`;
function Tf(e) {
  let t = Ce({
    queryKey: [Z, wf, e],
    queryFn: async () => {
      let t = `${s.PARTNER_BASE_URL}achievements/ajaxgetlanguagelist/${e}`,
        n = await nf.default.get(t, { withCredentials: !0 });
      if (n?.data?.success == 1)
        return n.data.languages.sort((e, t) => e.localeCompare(t));
      throw Error(`failed to load language list for app id ${e}`);
    },
  });
  return t.isLoading ? [`english`] : t.data;
}
async function Ef(e, t) {
  let n = `${s.PARTNER_BASE_URL}achievements/ajaxsetlanguagelist/${e}`,
    r = new FormData();
  return (
    r.append(`languages`, JSON.stringify(t)),
    await If(`updateLanguageList`, n, r),
    !0
  );
}
function Df(e) {
  let t = A();
  return we({
    mutationFn: async (t) => await Ef(e, t),
    onSuccess: async () => {
      await t.invalidateQueries({ queryKey: [Z, wf, e] });
    },
  });
}
var Of = `AppLanguageOptionsList`;
function kf(e) {
  let t = Ce({
    queryKey: [Z, Of, e],
    queryFn: async () => {
      let t = `${s.PARTNER_BASE_URL}achievements/ajaxgetlanguageoptionslist/${e}`,
        n = await nf.default.get(t, { withCredentials: !0 });
      if (n?.data?.success == 1)
        return n.data.languages.sort((e, t) => e.localeCompare(t));
      throw Error(`failed to load language options list for app id ${e}`);
    },
  });
  return t.isLoading ? [`english`] : t.data;
}
var Af = `AppDLCList`;
function jf(e) {
  let t = Mf(e);
  return t.isLoading ? [] : t.data;
}
function Mf(e) {
  return Ce({
    queryKey: [Z, Af, e],
    queryFn: async () => {
      let t = `${s.PARTNER_BASE_URL}achievements/ajaxgetdlc/${e}`,
        n = await nf.default.get(t, { withCredentials: !0 });
      if (n?.data?.success == 1) return n.data.dlc;
      throw Error(`failed to load dlc for app id ${e}`);
    },
  });
}
var Nf = `AppInfo`;
function Pf(e) {
  let t = Ce({
    queryKey: [Z, Nf, e],
    queryFn: async () => {
      let t = `${s.PARTNER_BASE_URL}achievements/ajaxgetappinfo/${e}`,
        n = await nf.default.get(t, { withCredentials: !0 });
      if (n?.data?.success == 1) return n.data.app;
      if (n?.data?.success == 9)
        return {
          appid: e.toString(),
          type: `Game`,
          releasestate: `unavailable`,
          name: ``,
          is_public: !1,
          is_released_somewhere: !1,
          image: ``,
        };
      throw Error(`failed to load app info for app id ${e}`);
    },
  });
  return t.isLoading ? null : t.data;
}
function Ff(e, t) {
  let { strErrorMsg: n, errorCode: r } = Be(t);
  console.error(`${e} failed: `, r, n, t);
  let i = t,
    a = i?.response?.data?.error ?? i?.data?.error;
  return Error(
    r == 25 && a
      ? a
      : k(
          r == 14
            ? `#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate`
            : `#AchievementEditor_Error_RequestFailed`,
        ),
  );
}
async function If(e, t, n) {
  let r;
  try {
    r = await nf.default.post(t, n, { withCredentials: !0 });
  } catch (t) {
    throw Ff(e, t);
  }
  if (r?.data?.success != 1) throw Ff(e, r);
  return r.data;
}
async function Lf(e, t, n) {
  let r = `${s.PARTNER_BASE_URL}achievements/ajaxcreateorupdategroup/${e}`,
    i = new FormData();
  return (
    i.append(`groupid`, t),
    i.append(`name`, JSON.stringify(n.name)),
    n.dlcappid && i.append(`requiredappid`, n.dlcappid),
    i.append(`isarchived`, n.archived == `1` ? `true` : `false`),
    i.append(`isdeveloperonly`, n.developeronly == `1` ? `true` : `false`),
    i.append(`order`, n.order ?? `-1`),
    (await If(`addOrUpdateStatGroup`, r, i)).groupid
  );
}
function Rf(e, t) {
  let n = A();
  return we({
    mutationFn: async (n) => await Lf(e, t, n),
    onSuccess: async () => {
      await n.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
function zf(e) {
  let t = A();
  return we({
    mutationFn: async (t) => {
      let { groups: n, onProgress: r } = t;
      for (let t = 0; t < n.length; t++) {
        let i = n[t];
        (r?.({ step: `group`, name: i.groupid, completed: t, total: n.length }),
          await Lf(e, i.groupid, i.group));
      }
      return !0;
    },
    onSuccess: async () => {
      await t.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
function Bf(e, t) {
  let n = A();
  return we({
    mutationFn: async () => {
      let n = `${s.PARTNER_BASE_URL}achievements/ajaxdeletegroup/${e}`,
        r = new FormData();
      return (
        r.append(`appid`, e.toString()),
        r.append(`groupid`, t),
        await If(`deleteStatGroup`, n, r),
        !0
      );
    },
    onSuccess: async () => {
      await n.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
async function Vf(e, t) {
  let n = new FormData();
  return (
    n.append(`appid`, e.toString()),
    n.append(`groupids`, JSON.stringify(t)),
    await If(
      `reorderGroups`,
      `${s.PARTNER_BASE_URL}achievements/ajaxreordergroups/${e}`,
      n,
    ),
    !0
  );
}
function Hf(e) {
  vf(e);
  let t = A();
  return we({
    mutationFn: async (t) => await Vf(e, t),
    onSuccess: async () => {
      await t.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
async function Uf(e, t, n) {
  let r = new FormData();
  return (
    r.append(`appid`, e.toString()),
    r.append(`groupid`, (t ?? 0).toString()),
    r.append(`names`, JSON.stringify(n)),
    await If(
      `moveAchievementsGroup`,
      `${s.PARTNER_BASE_URL}achievements/ajaxmoveachievements/${e}`,
      r,
    ),
    !0
  );
}
function Wf(e) {
  let t = A();
  return we({
    mutationFn: async (t) => {
      let { groupid: n, api_names: r } = t;
      return await Uf(e, n, r);
    },
    onSuccess: async () => {
      await t.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
async function Gf(e, t, n, r, i) {
  let [a, o, c] = i.match(/data:(image\/\w+);base64,(.*)/),
    l = rf.Buffer.from(c, `base64`),
    u = o === `image/png` ? `png` : `jpg`,
    d = `${e.toString()}_${t}_${n}_${r == `achievement` ? `a` : `g`}.${u}`,
    f = new File([l], d, { type: o }),
    p = new FormData();
  (p.append(`appID`, e.toString()),
    p.append(`statID`, t),
    p.append(`bit`, n),
    p.append(`requestType`, r.toString()),
    p.append(`image`, f),
    await If(
      `AchievementImageUpload`,
      `${s.PARTNER_BASE_URL}images/uploadachievement`,
      p,
    ));
}
function Kf(e) {
  return !!e && e.startsWith(`data:`);
}
async function qf(e, t, n, r, i, a) {
  (Kf(r) && (a?.(`icon`), await Gf(e, t, n, `achievement`, r)),
    Kf(i) && (a?.(`icon_gray`), await Gf(e, t, n, `achievement_gray`, i)));
}
function Jf(e) {
  return +!!e.achievement + +!!Kf(e.icon) + +!!Kf(e.icon_gray);
}
async function Yf(e, t, n) {
  let { statID: r, bitID: i, achievement: a, icon: o, icon_gray: c } = t;
  if (!a && r && i)
    return (await qf(e, r, i, o, c, n), { success: 1, statid: r, bitid: i });
  let l = new FormData();
  (r && l.append(`statid`, r),
    i && l.append(`bitid`, i),
    a.groupid && l.append(`groupid`, a.groupid),
    l.append(`name`, a.name),
    a.progress &&
      (l.append(`progressstat`, a.progress.value.operand1),
      l.append(`progressmin`, a.progress.min_val),
      l.append(`progressmax`, a.progress.max_val)),
    a.permission && l.append(`setby`, a.permission.toString()),
    a.archived == `1` && l.append(`isarchived`, `true`),
    a.display &&
      (a.display.hidden == `1` && l.append(`hidden`, `true`),
      a.display.name && l.append(`displayname`, JSON.stringify(a.display.name)),
      a.display.desc &&
        l.append(`displaydesc`, JSON.stringify(a.display.desc))));
  let u = `${s.PARTNER_BASE_URL}achievements/ajaxcreateorupdateachievement/${e}`;
  n?.(`achievement`);
  let d = await If(`addOrUpdateAchievement`, u, l);
  return (await qf(e, d.statid, d.bitid, o, c, n), d);
}
function Xf(e, t, n) {
  let r = A();
  return we({
    mutationFn: async (r) => await Yf(e, { statID: t, bitID: n, ...r }),
    onSuccess: async () => {
      await r.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
async function Zf(e, t) {
  let { statID: n, bitID: r } = t,
    i = `${s.PARTNER_BASE_URL}achievements/ajaxdeleteachievement/${e}`,
    a = new FormData();
  return (
    a.append(`appid`, e.toString()),
    a.append(`statid`, n),
    a.append(`bitid`, r),
    await If(`deleteAchievement`, i, a),
    !0
  );
}
function Qf(e, t, n) {
  let r = A();
  return we({
    mutationFn: async () => await Zf(e, { statID: t, bitID: n }),
    onSuccess: async () => {
      await r.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
function $f(e) {
  return (
    (e.addOrUpdate ?? []).reduce((e, t) => e + Jf(t), 0) +
    (e.delete ?? []).length
  );
}
function ep(e) {
  let t = A();
  return we({
    mutationFn: async (t) => {
      let n = $f(t),
        r = 0,
        i = (e, i) => {
          (t.onProgress?.({ step: e, name: i, completed: r, total: n }), r++);
        };
      for (let n of t.addOrUpdate ?? []) {
        let t = n.achievement?.name ?? n.name ?? ``;
        await Yf(e, n, (e) => i(e, t));
      }
      for (let n of t.delete ?? []) (i(`delete`, n.name ?? ``), await Zf(e, n));
      return !0;
    },
    onSuccess: async () => {
      await t.invalidateQueries({ queryKey: [Z, ff, e, !1] });
    },
  });
}
var tp = `ppeoOC-Bbh8-`,
  np = `yFCq-qR54Bk-`,
  rp = `gCGFRtgWYls-`,
  ip = `iQveYQYO74Q-`,
  ap = `Ge4-n6IYB2c-`,
  op = `_7T2b0ssi35I-`,
  sp = `WV2DtHm58GE-`,
  cp = `Z2bDB4NldFg-`,
  lp = `T8JDTNAeC2M-`,
  up = `WoAmWGYn8YE-`,
  dp = `tyI8k7t-Fgo-`,
  fp = `TUV4wPkWt5k-`,
  pp = `FIm0IOhpZ6k-`,
  mp = `TjYcCrGlNjg-`,
  hp = `oCifuQH4ZIk-`,
  gp = `Fb9jyZHfoV0-`,
  _p = `HP-ZlEaCACo-`,
  vp = `_3oFU-uelZmg-`,
  yp = `l23xX77jc24-`,
  bp = `bs4EjclJyLQ-`,
  xp = `Wv5uSB0pD34-`,
  Sp = `_2P6ogoDbt4M-`,
  Cp = `Lp95fmkrvE4-`,
  wp = `Xxg9raLmN8U-`,
  Tp = `m6EHqiT2-CI-`,
  Ep = `UznZIFOtb-g-`,
  Dp = `UkaTTkIdxbo-`,
  Op = `SFI6OiMBGAo-`,
  kp = `iN9nH96QLdQ-`,
  Ap = `Pe2J8WTncno-`,
  jp = `XVCBnsVWfXA-`,
  Mp = `_4k0uWmAz8gE-`,
  Np = `SpcSSTlGcnk-`,
  Pp = `cSFNR3wWbY0-`,
  Fp = c(
    a((e, t) => {
      t.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && typeof t == `object` && typeof n == `object`) {
          if (t.constructor !== n.constructor) return !1;
          var r, i, a;
          if (Array.isArray(t)) {
            if (((r = t.length), r != n.length)) return !1;
            for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if (
            ((a = Object.keys(t)), (r = a.length), r !== Object.keys(n).length)
          )
            return !1;
          for (i = r; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
          for (i = r; i-- !== 0;) {
            var o = a[i];
            if (!e(t[o], n[o])) return !1;
          }
          return !0;
        }
        return t !== t && n !== n;
      };
    })(),
  ),
  Ip = `PV4kNAFKkvM-`,
  Lp = `-xt1y20zt5w-`,
  Rp = `Zd1W-ExNtB4-`,
  zp = `_0PIRv53knvE-`,
  Bp = `vMcehBIQOlY-`,
  Vp = `OraLGkA9PO8-`,
  Hp = `bha6hyfnu4w-`,
  Up = `Wo0cReTq2C8-`,
  Wp = `Bkrfa0XVbVA-`,
  Gp = `O8U5YlKtggk-`,
  Kp = `l8J6A1pOzPM-`,
  qp = `DgvAT9aO0gQ-`,
  Jp = `KGMhKgvKlIA-`,
  Yp = `_1LkqXhRSR2w-`,
  Xp = `bC2pPdo9du4-`,
  Zp = `I-D3o7RgYB8-`,
  Qp = `HoGCvKda2EQ-`;
function $p() {
  let { appID: e } = X(),
    t = Tf(e),
    n = vf(e) || {},
    r = Sf(e) || [];
  return [
    ...r.map((e) => e.display?.name),
    ...r.map((e) => e.display?.desc),
    ...Object.keys(n).map((e) => n[e].name),
  ].reduce(
    (e, t) => (
      Object.keys(e).forEach((n) => {
        let r = e[n];
        ((r.total += 1),
          (Q(t, n)?.length ?? 0) > 0 && (r.set += 1),
          (e[n] = r));
      }),
      e
    ),
    t.reduce((e, t) => ((e[t] = { set: 0, total: 0 }), e), {}),
  );
}
function em(e) {
  let { locstring: t } = e,
    { appID: n, localization: r } = X(),
    { currentLanguage: a, setCurrentLanguage: o } = r,
    s = Tf(n),
    c = t === void 0,
    l = $p(),
    u = c ? l : {},
    d = Ne({ rgOptions: s, selectedValue: a, onSelectionChange: o }),
    f = (e, n = !1) => {
      let r = c ? u[e].set === u[e].total : (Q(t, e)?.length ?? 0) > 0,
        i = r ? Zp : Qp,
        a = c ? ` (${u[e].set} / ${u[e].total})` : ``;
      return (0, F.jsxs)(`span`, {
        className: i,
        children: [
          n &&
            (r
              ? (0, F.jsx)(fe, { color: `var(--text-color)` })
              : (0, F.jsx)(v, { color: `var(--text-color)` })),
          ` `,
          k(`#Language_${e}`),
          a,
        ],
      });
    };
  return (0, F.jsx)(`div`, {
    className: i(Kp, t ? qp : null),
    children: (0, F.jsxs)(Me.Root, {
      variant: t ? `underline` : `default`,
      size: `2`,
      state: d,
      children: [
        (0, F.jsx)(Me.Trigger, { children: f(a) }),
        (0, F.jsx)(Me.Options, {
          children: d.rgOptions.map((e) =>
            (0, F.jsx)(
              Me.Option,
              { value: e, children: f(e.toString(), !0) },
              e.toString(),
            ),
          ),
        }),
      ],
    }),
  });
}
function tm(e, t) {
  return e
    ? typeof e == `string`
      ? { english: e }
      : Object.keys(e).reduce(
          (n, r) => ((r == `token` || t.includes(r)) && (n[r] = e[r]), n),
          {},
        )
    : {};
}
function nm(e) {
  let { value: t, setValue: n, multiline: r = !1, autofocus: a = !1 } = e,
    { currentLanguage: o } = X().localization,
    { appID: s } = X(),
    c = tm(t, Tf(s)),
    l = (e) => {
      let t = { ...c, [o]: e };
      n(t);
    };
  return (0, F.jsx)(`div`, {
    className: i(Yp, c[o] ? void 0 : Xp),
    children: r
      ? (0, F.jsx)(Oe, {
          autoFocus: a,
          resize: `vertical`,
          value: c[o],
          onTextChange: l,
        })
      : (0, F.jsx)(Fe, { autoFocus: a, value: c[o], onTextChange: l }),
  });
}
function Q(e, t) {
  if (e !== void 0)
    return typeof e == `string`
      ? t === `english`
        ? e
        : void 0
      : e && t in e && e[t] != ``
        ? e[t]
        : void 0;
}
function rm(e) {
  let { text: t, missingStringLocToken: n } = e,
    { currentLanguage: r } = X().localization;
  return (
    Q(t, r) ||
    (0, F.jsxs)(`span`, {
      className: i(Qp, Jp),
      children: [
        (0, F.jsx)(v, { color: `var(--text-color)` }),
        ` `,
        k(
          n ?? `#AchievementEditor_Localization_MissingString`,
          k(`#Language_${r}`),
        ),
      ],
    })
  );
}
function im(e) {
  let { onClose: t } = e,
    { appID: n } = X(),
    r = Tf(n),
    i = kf(n),
    a = Df(n),
    [o, s] = (0, P.useState)(new Set(r)),
    c = i.reduce((e, t) => ((e[t] = k(`#Language_${t}`)), e), {}),
    l = [...i].sort((e, t) => c[e].localeCompare(c[t])),
    u = (0, P.useCallback)(() => {
      a.mutate(Array.from(o), { onSuccess: t });
    }, [a, t, o]),
    d = l.slice(0, Math.round(l.length / 2)),
    f = l.slice(d.length),
    p = (e, t) => {
      s((n) =>
        t
          ? new Set(Array.from([...n, e]))
          : new Set(Array.from(n).filter((t) => t != e)),
      );
    };
  return (0, F.jsxs)(rt, {
    onClose: t,
    strTitle: k(`#AchievementEditor_AppLanguageEdit_Title`),
    children: [
      (0, F.jsxs)(Ie, {
        columns: `repeat(2, 1fr)`,
        gap: `3`,
        paddingY: `3`,
        children: [
          (0, F.jsx)(ke, {
            gridColumn: `1/-1`,
            minWidth: `100%`,
            width: `0`,
            children: (0, F.jsx)(N, {
              contrast: `description`,
              children: k(`#AchievementEditor_AppLanguageEdit_Description`),
            }),
          }),
          [d, f].map((e, t) =>
            (0, F.jsx)(
              j,
              {
                direction: `column`,
                gap: `2`,
                children: e.map((e) =>
                  (0, F.jsx)(
                    Ae,
                    {
                      disabled: e == `english`,
                      checked: e == `english` || o.has(e),
                      onChange: (t) => p(e, t),
                      children: c[e],
                    },
                    e,
                  ),
                ),
              },
              t,
            ),
          ),
        ],
      }),
      (0, F.jsx)(sm, {
        pending: a.isPending,
        error: a.error?.message,
        onSave: u,
        onCancel: t,
      }),
    ],
  });
}
var am = {
  group: `#AchievementEditor_Bulk_Save_Step_Group`,
  achievement: `#AchievementEditor_Bulk_Save_Step_Achievement`,
  icon: `#AchievementEditor_Bulk_Save_Step_Icon`,
  icon_gray: `#AchievementEditor_Bulk_Save_Step_IconGray`,
  delete: `#AchievementEditor_Bulk_Save_Step_Delete`,
};
function om(e) {
  let { progress: t, pending: n } = e,
    { step: r, name: i, completed: a, total: o } = t,
    s = o > 0 ? Math.round((100 * a) / o) : 0,
    c = k(
      n
        ? `#AchievementEditor_Bulk_Save_Progress`
        : `#AchievementEditor_Bulk_Save_Stopped`,
      a + 1,
      o,
    );
  return (0, F.jsxs)(`div`, {
    className: Vp,
    children: [
      (0, F.jsx)(`div`, {
        className: Up,
        role: `progressbar`,
        "aria-valuenow": a,
        "aria-valuemax": o,
        children: (0, F.jsx)(`div`, { style: { width: `${s}%` } }),
      }),
      (0, F.jsxs)(j, {
        direction: `row`,
        gap: `2`,
        children: [
          (0, F.jsx)(N, { contrast: `title`, children: c }),
          (0, F.jsx)(`span`, {
            className: Hp,
            children: (0, F.jsx)(N, {
              contrast: `description`,
              children: k(am[r], i),
            }),
          }),
        ],
      }),
    ],
  });
}
function sm(e) {
  let {
    saveText: t,
    saveColor: n,
    cancelText: r,
    onSave: i,
    onCancel: a,
    pending: o,
    progress: s,
    error: c,
    saveDisabled: l = !1,
    hideCancel: u = !1,
  } = e;
  return (0, F.jsxs)(`div`, {
    className: zp,
    children: [
      !!s && (o || !!c) && (0, F.jsx)(om, { progress: s, pending: o }),
      !!c && (0, F.jsx)(vm, { text: c }),
      (0, F.jsx)(M, {
        color: n ?? `green`,
        variant: `vibrant`,
        onClick: i,
        loading: o,
        disabled: l || o,
        children: (0, F.jsx)(`span`, { children: t || k(`#Button_Save`) }),
      }),
      !u &&
        (0, F.jsx)(M, {
          color: `dull`,
          onClick: a,
          disabled: o,
          children: (0, F.jsx)(`span`, { children: r || k(`#Button_Cancel`) }),
        }),
    ],
  });
}
function cm(e) {
  let { className: t } = e;
  return (0, F.jsx)(ke, { className: i(Wp, t), children: (0, F.jsx)(y, {}) });
}
function lm(e) {
  let { color: t = `currentColor` } = e;
  return (0, F.jsx)(ke, {
    className: Wp,
    children: (0, F.jsx)(v, { color: t }),
  });
}
function um(e) {
  let { color: t = `var(--color-unreleased)` } = e;
  return (0, F.jsx)(ke, {
    className: Wp,
    children: (0, F.jsx)(ge, { color: t }),
  });
}
function dm(e) {
  return (0, F.jsx)(`div`, {
    className: Bp,
    children: (0, F.jsx)(sm, { ...e }),
  });
}
function fm(e) {
  let { onClick: t } = e;
  return (0, F.jsxs)(M, {
    color: `dull`,
    icon: !0,
    onClick: t,
    children: [
      (0, F.jsx)(`div`, {
        className: Gp,
        children: (0, F.jsx)(pm, { width: `18`, height: `18` }),
      }),
      k(`#AchievementEditor_ReorderGroups`),
    ],
  });
}
function pm(e) {
  return (0, F.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, F.jsx)(`path`, {
      fill: `currentColor`,
      d: `M17 10.3477L14.7471 12.5557L11.0938 8.97559V27.0244L14.7471 23.4443L17 25.6523L9.5 33L2 25.6523L4.25293 23.4443L7.90625 27.0234V8.97656L4.25293 12.5557L2 10.3477L9.5 3L17 10.3477ZM34 30L21.0303 30.0303V26.0303L34 26V30ZM34 16V20H21V16H34ZM34 10H21V6H34V10Z`,
    }),
  });
}
function mm(e) {
  let { title: t, onClick: n, className: r } = e;
  return (0, F.jsx)(`div`, {
    title: t,
    className: i(Ip, Lp, r),
    children: (0, F.jsx)(M, {
      variant: `ghost`,
      icon: !0,
      onClick: n,
      children: (0, F.jsx)(_, {}),
    }),
  });
}
function hm(e) {
  let { title: t, onClick: n } = e;
  return (0, F.jsx)(`div`, {
    title: t,
    className: i(Ip, Rp),
    children: (0, F.jsx)(M, {
      variant: `ghost`,
      icon: !0,
      onClick: n,
      children: (0, F.jsx)(oe, {}),
    }),
  });
}
function gm(e) {
  let { helpText: t } = e;
  return (0, F.jsx)(O, { toolTipContent: t, children: (0, F.jsx)(x, {}) });
}
function _m(e) {
  let { text: t } = e;
  return (0, F.jsxs)(j, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    style: { color: `var(--color-warning)` },
    children: [(0, F.jsx)(lm, {}), ` `, t],
  });
}
function vm(e) {
  let { text: t } = e;
  return (0, F.jsxs)(j, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    style: { color: `var(--color-error)` },
    children: [(0, F.jsx)(lm, {}), ` `, t],
  });
}
function ym(e) {
  let { groupID: t, group: n, showVisibility: r = !1 } = e,
    { visible: i } = Tm(t, n),
    { existingAchievements: a, existingAchievementUnlockPercentages: o } = X(),
    s =
      t === `0` || t === void 0
        ? k(`#AchievementEditor_Group_CoreGameAchievements_Heading`)
        : (Q(n?.name, `english`) ?? n?.name?.token),
    c =
      a?.groups
        .find((e) => e.id.toString() == t)
        ?.achievements.some(
          (e) => (o?.percentages?.[e.internal_key] ?? 0) > 0,
        ) ?? !1,
    l;
  return (
    r && (i ? c && (l = (0, F.jsx)(cm, {})) : (l = (0, F.jsx)(um, {}))),
    (0, F.jsxs)(j, {
      direction: `row`,
      gap: `1`,
      align: `center`,
      children: [l, s],
    })
  );
}
var bm = `newgroup`;
function xm(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      filter: r,
      allowCreate: i,
      variant: a,
      placeholder: o = k(`#AchievementEditor_Group_SelectGroupPlaceholder`),
    } = e,
    { appID: s } = X(),
    c = vf(s) || {},
    l = [`0`, ...Object.keys(c)],
    u = r === void 0 ? l : l.filter(r);
  return (
    i && u.splice(0, 0, bm),
    (0, F.jsx)(Me, {
      selectedValue: t,
      variant: a,
      onSelectionChange: n,
      options: u,
      placeholder: o,
      getOptionLabel: (e) =>
        e == `newgroup`
          ? k(`#AchievementEditor_Group_SelectGroup_Create`)
          : (0, F.jsx)(ym, { groupID: e, group: c[e], showVisibility: !0 }),
    })
  );
}
function Sm(e) {
  return (t) => t != e && (!!e || t != `0`);
}
function Cm(e, t, n, r) {
  let i = n == `name` ? `NAME` : `DESC`;
  return !e || e == `${t}_${i}` ? `${r}_${i}` : e;
}
function wm(e) {
  let {
    okText: t,
    cancelText: n,
    onOk: r,
    onCancel: i,
    okColor: a,
    hideCancelButton: o = !1,
    children: s,
  } = e;
  return (0, F.jsx)(Re, {
    active: !0,
    children: (0, F.jsx)(E, {
      bHideCloseIcon: !0,
      children: (0, F.jsxs)(C, {
        children: [
          (0, F.jsx)(ae, { children: s }),
          (0, F.jsx)(p, {
            children: (0, F.jsx)(dm, {
              saveText: t ?? k(`#Button_OK`),
              saveColor: a,
              onSave: r,
              cancelText: n,
              onCancel: i,
              hideCancel: o,
            }),
          }),
        ],
      }),
    }),
  });
}
function Tm(e, t) {
  let {
      appID: n,
      existingAchievements: r,
      existingAchievementUnlockPercentages: i,
    } = X(),
    a = t?.dlcappid,
    o = Pf(n),
    { data: s } = Mf(n),
    c = s?.find((e) => a == e.appid),
    l = !!Number(a),
    { data: u } = be(l ? { appid: Number(a) } : void 0),
    d = t?.archived == `1`,
    f = t?.developeronly == `1`,
    p = (c ?? o)?.is_released_somewhere;
  return {
    archived: d,
    developeronly: f,
    is_released_somewhere: p,
    hasprogress:
      r?.groups
        .find((t) => t.id.toString() == (e ?? `0`))
        ?.achievements.some(
          (e) => (i?.percentages?.[e.internal_key] ?? 0) > 0,
        ) ?? !1,
    app: c ?? o,
    baseApp: o,
    noStorePage: !!u && u.success != 1,
    notDLCOfApp: l && !!s && !c,
    dlcappid: a,
    visible: !d && !f && p,
  };
}
function Em() {
  let { existingAchievements: e, existingAchievementUnlockPercentages: t } =
    X();
  return (0, P.useMemo)(
    () =>
      e
        ? e.groups.reduce(
            (e, n) => (
              n.achievements.forEach((n) => {
                e[n.internal_key] = {
                  existingAchievement: n,
                  globalUnlockPercentage: t?.percentages?.[n.internal_key],
                };
              }),
              e
            ),
            {},
          )
        : {},
    [e, t],
  );
}
function Dm(e, t) {
  let n = Em();
  return n === void 0 || e === void 0 || t === void 0
    ? {}
    : (n[Om(e, t)] ?? {});
}
function Om(e, t) {
  let n = typeof e == `string` ? Number.parseInt(e) : e,
    r = typeof t == `string` ? Number.parseInt(t) : t;
  return (n << 8) | r;
}
function km(e) {
  return k(
    `#AchievementEditor_PercentFormat`,
    (e ?? 0).toLocaleString(Te(), { maximumFractionDigits: 1 }),
  );
}
var Am = bd({
    api_name: Ru().min(1),
    setid: Ru().optional(),
    permission: Ed(
      Object.keys(Y).filter((e) => typeof e == `string`),
    ).transform((e) => Y[e]),
    spoiler: ef(),
    archived: ef(),
    progress_stat_name: Ru(),
    progress_stat_min: tf(),
    progress_stat_max: tf(),
  }),
  jm = bd({ api_name: Ru().min(1), field: Od([`name`, `description`]) }),
  Mm = jm.catchall(Ru());
function Nm(e) {
  return e.reduce((e, t) => ((e[t.name] = t), e), {});
}
function Pm(e) {
  let { groups: t, stats: n, achievements: r } = e,
    i = new Set(t.map((e) => e.groupid));
  return Am.superRefine((e, t) => {
    if (
      (e.setid &&
        !i.has(e.setid) &&
        r(`setid`, k(`#AchievementEditor_Validator_Error_GroupDoesNotExist`)),
      e.progress_stat_name === void 0 || e.progress_stat_name == ``)
    )
      return;
    function r(n, r) {
      t.addIssue({ code: `custom`, path: [n], input: e[n], message: r });
    }
    let a = n.find((t) => t.name == e.progress_stat_name);
    if (a === void 0)
      r(
        `progress_stat_name`,
        k(`#AchievementEditor_Validator_Error_StatDoesNotExist`),
      );
    else {
      (e.permission != (a.permission ?? Y.Client) &&
        r(
          `permission`,
          k(
            `#AchievementEditor_Validator_Error_AchievementStatDifferentPermissions`,
          ),
        ),
        a.type == `INT` &&
          (dd().safeParse(e.progress_stat_min).success ||
            r(
              `progress_stat_min`,
              k(`#AchievementEditor_Validator_Error_MinMaxMustBeInteger`),
            ),
          dd().safeParse(e.progress_stat_max).success ||
            r(
              `progress_stat_max`,
              k(`#AchievementEditor_Validator_Error_MinMaxMustBeInteger`),
            )));
      {
        let t = a.type == `INT` ? Pt.int32 : Pt.float32,
          n = [
            tf().default(t[0]).parse(a.min),
            tf().default(t[1]).parse(a.max),
          ],
          i = [
            ld().parse(e.progress_stat_min),
            ld().parse(e.progress_stat_max),
          ];
        (i[0] < n[0] &&
          r(
            `progress_stat_min`,
            k(`#AchievementEditor_Validator_Error_MinLessThanStatMin`),
          ),
          i[1] > n[1] &&
            r(
              `progress_stat_max`,
              k(`#AchievementEditor_Validator_Error_MaxGreaterThanStatMax`),
            ),
          i[0] >= i[1] &&
            r(
              `progress_stat_max`,
              k(`#AchievementEditor_Validator_Error_MinGreaterThanMax`),
            ));
      }
    }
  });
}
function Fm(e, t, n, r) {
  let i = e.reduce((e, t) => {
    let r = String(t[n]);
    return ((e[r] = (e[r] ?? 0) + 1), e);
  }, {});
  e.forEach((e, a) => {
    i[String(e[n])] > 1 &&
      t.addIssue({ code: `custom`, path: [a, n], input: e[n], message: r });
  });
}
function Im(e) {
  let { stats: t, achievements: n } = e;
  return vd(Pm(e))
    .superRefine((e, t) =>
      Fm(
        e,
        t,
        `api_name`,
        k(`#AchievementEditor_AchievementCsvImport_Error_DuplicateApiName`),
      ),
    )
    .transform((e) => {
      let t = e.map((e) => e.api_name),
        r = e.reduce((e, t) => ((e[t.api_name] = t), e), {}),
        i = Nm(n),
        a = {
          csv: r,
          achievements: i,
          added: t.filter((e) => !n.some((t) => t.name == e)),
          deleted: n.map((e) => e.name).filter((e) => !t.includes(e)),
          modified: [],
          unmodified: [],
        };
      return t
        .filter((e) => !a.added.includes(e) && !a.deleted.includes(e))
        .reduce(
          (e, t) => (
            Um(r[t], i[t]) ? e.unmodified.push(t) : e.modified.push(t),
            e
          ),
          a,
        );
    });
}
function Lm(e) {
  return {
    api_name: e.name,
    setid: e.groupid ?? ``,
    permission: e.permission ?? Y.Client,
    spoiler: e.display?.hidden == `1`,
    archived: e.archived == `1`,
    progress_stat_name: e.progress?.value?.operand1 ?? ``,
    progress_stat_min: parseFloat(e.progress?.min_val ?? `0`),
    progress_stat_max: parseFloat(e.progress?.max_val ?? `0`),
  };
}
function Rm(e, t) {
  if (!e) return {};
  let { token: n, ...r } = tm(e, t);
  return r;
}
function zm(e, t) {
  let { api_name: n, field: r, ...i } = t ?? {};
  return { token: e, ...i };
}
function Bm(e) {
  return e.reduce((e, t) => ((e[t] = ``), e), {});
}
function Vm(e, t) {
  let n = Bm(t);
  return [
    { api_name: e.name, field: `name`, ...n, ...Rm(e.display?.name, t) },
    { api_name: e.name, field: `description`, ...n, ...Rm(e.display?.desc, t) },
  ];
}
async function Hm(e) {
  let t = await qe.ParseCSVFile(e, qm);
  return t.errors && t.errors.length > 0
    ? { fields: void 0, data: void 0, errors: t.errors.map((e) => e.message) }
    : { fields: t.meta.fields, data: t.data, errors: void 0 };
}
function Um(e, t) {
  return (0, Fp.default)(e, Lm(t));
}
function Wm() {
  return {
    api_name: k(`#AchievementEditor_Csv_Hint_ApiName`),
    setid: k(`#AchievementEditor_Csv_Hint_GroupID`),
    permission: k(`#AchievementEditor_Csv_Hint_Permission`, sf.join(`, `)),
    spoiler: k(`#AchievementEditor_Csv_Hint_Bool`),
    archived: k(`#AchievementEditor_Csv_Hint_Bool`),
    progress_stat_name: k(`#AchievementEditor_Csv_Hint_ProgressStatName`),
    progress_stat_min: k(`#AchievementEditor_Csv_Hint_ProgressStatMin`),
    progress_stat_max: k(`#AchievementEditor_Csv_Hint_ProgressStatMax`),
  };
}
function Gm() {
  return {
    api_name: k(`#AchievementEditor_Csv_Hint_LocApiName`),
    field: k(`#AchievementEditor_Csv_Hint_LocField`),
    setid: k(`#AchievementEditor_Csv_Hint_LocGroupID`),
  };
}
function Km(e, t, n) {
  let r = t.reduce((e, t) => ((e[t] = n[t] ? `${t} (${n[t]})` : t), e), {});
  return {
    fields: t.map((e) => r[e]),
    rows: e.map((e) =>
      Object.keys(e).reduce((t, n) => ((t[r[n] ?? n] = e[n]), t), {}),
    ),
  };
}
function qm(e) {
  return e.replace(/\s*\(.*$/, ``).trim();
}
var Jm = `EXAMPLE_`,
  Ym = [`${Jm}FIRST_WIN`, `${Jm}HUNDRED_WINS`];
function Xm() {
  return [
    {
      api_name: Ym[0],
      setid: ``,
      permission: Y.Client,
      spoiler: !1,
      archived: !1,
      progress_stat_name: ``,
      progress_stat_min: 0,
      progress_stat_max: 0,
    },
    {
      api_name: Ym[1],
      setid: ``,
      permission: Y.Client,
      spoiler: !0,
      archived: !1,
      progress_stat_name: ``,
      progress_stat_min: 0,
      progress_stat_max: 0,
    },
  ];
}
function Zm(e) {
  let t = Bm(e),
    n = [
      { name: `First Victory`, description: `Win your first match.` },
      { name: `100 Wins`, description: `Win 100 different matches.` },
    ];
  return Ym.map((e, r) => [
    { api_name: e, field: `name`, ...t, english: n[r].name },
    { api_name: e, field: `description`, ...t, english: n[r].description },
  ]);
}
function Qm(e, t) {
  let n = `${e}-achievements-definitions.csv`,
    { fields: r, rows: i } = Km(
      (t.length > 0 ? t.map(Lm) : Xm()).map((e) => ({
        ...e,
        permission: Y[e.permission ?? Y.Client],
      })),
      Object.keys(Am.shape),
      Wm(),
    );
  qe.WriteCSVToFile(i, n, !0, r);
}
function $m(e, t, n) {
  let r = `${e}-achievements-localization.csv`,
    { fields: i, rows: a } = Km(
      (t.length > 0 ? t.map((e) => Vm(e, n)) : Zm(n)).reduce(
        (e, t) => (e.push(...t), e),
        [],
      ),
      [...Object.keys(jm.shape), ...n],
      Gm(),
    );
  qe.WriteCSVToFile(a, r, !0, i);
}
function eh(e, t, n) {
  if (!t) return {};
  let r = t.find((e) => e.field == `name`),
    i = t.find((e) => e.field == `description`),
    a = Cm(n?.display?.name?.token, n?.name, `name`, e ?? n?.name),
    o = Cm(n?.display?.desc?.token, n?.name, `desc`, e ?? n?.name);
  return { name: r ? zm(a, r) : void 0, desc: i ? zm(o, i) : void 0 };
}
function th(e, t, n) {
  return {
    name: e.api_name,
    groupid: e.setid,
    permission: e.permission,
    archived: e.archived ? `1` : `0`,
    display: {
      hidden: e.spoiler ? `1` : `0`,
      name: void 0,
      desc: void 0,
      icon: void 0,
      icon_gray: void 0,
      ...eh(e?.api_name, t, n),
    },
    progress: e.progress_stat_name
      ? {
          value: { operation: ``, operand1: e.progress_stat_name },
          min_val: e.progress_stat_min.toString(),
          max_val: e.progress_stat_max.toString(),
        }
      : void 0,
  };
}
function nh(e, t) {
  let n = tf().safeParse(t.path[0])?.data;
  return n !== void 0 && Number.isInteger(n) && n >= 0 && n < e.data.length
    ? n
    : void 0;
}
function rh(e, t, n) {
  let r = nh(e, t),
    i = e.data[r],
    a = t.path.length > 1 ? t.path[1] : n;
  return {
    line: r + 2,
    key: i[n],
    field: a,
    input: a in i ? i[a] : ``,
    message: t.message,
  };
}
function ih(e, t, n) {
  let r = (t) => t.path.length > 1 && nh(e, t) !== void 0;
  return {
    errors: t?.filter((e) => !r(e)).map((e) => e.message),
    fieldErrors: t?.filter(r).map((t) => rh(e, t, n)),
  };
}
function ah(e) {
  let t = new Set(e.fields);
  return Object.keys(Am.shape).every((e) => t.has(e));
}
function oh(e, t, n, r) {
  let i = Im({ groups: t, stats: n, achievements: r }).safeParse(e.data);
  return { ...i.data, ...ih(e, i.error?.issues, `api_name`) };
}
function sh(e) {
  let t = new Set(e.fields);
  return Object.keys(jm.shape).every((e) => t.has(e));
}
function ch(e) {
  let t = vd(Mm).safeParse(e.data);
  return {
    localization:
      t.data?.reduce(
        (e, t) => (
          t.api_name in e || (e[t.api_name] = []),
          e[t.api_name].push(t),
          e
        ),
        {},
      ) ?? {},
    ...ih(e, t.error?.issues, `api_name`),
  };
}
var lh = bd({ setid: Ru().min(1) }),
  uh = lh.catchall(Ru());
function dh(e) {
  return e.reduce((e, t) => ((e[t.groupid] = t), e), {});
}
function fh(e) {
  let t = e?.name;
  return typeof t == `string` ? { english: t } : (t ?? {});
}
function ph(e) {
  return Object.keys(e)
    .filter((t) => t == `token` || !!e[t])
    .reduce((t, n) => ((t[n] = e[n]), t), {});
}
function mh(e, t) {
  return { setid: e.groupid, ...Bm(t), ...Rm(e.name, t) };
}
function hh(e, t) {
  let { setid: n, ...r } = e;
  return ph({ ...fh(t), ...r });
}
function gh(e, t) {
  return (0, Fp.default)(hh(e, t), ph(fh(t)));
}
function _h(e) {
  let { groups: t, validLanguages: n } = e,
    r = new Set(t.map((e) => e.groupid));
  return uh.superRefine((e, t) => {
    function i(n, r) {
      t.addIssue({ code: `custom`, path: [n], input: e[n], message: r });
    }
    (e.setid == `0`
      ? i(`setid`, k(`#AchievementEditor_GroupCsvImport_Error_DefaultGroup`))
      : r.has(e.setid) ||
        i(`setid`, k(`#AchievementEditor_Validator_Error_GroupDoesNotExist`)),
      Object.keys(e)
        .filter((e) => e != `setid` && !n.includes(e))
        .forEach((e) =>
          i(e, k(`#AchievementEditor_GroupCsvImport_Error_UnknownLanguage`, e)),
        ),
      e.english ||
        i(
          `english`,
          k(`#AchievementEditor_GroupCsvImport_Error_NameRequired`),
        ));
  });
}
function vh(e) {
  let { groups: t } = e;
  return vd(_h(e))
    .superRefine((e, t) =>
      Fm(
        e,
        t,
        `setid`,
        k(`#AchievementEditor_GroupCsvImport_Error_DuplicateGroupID`),
      ),
    )
    .transform((e) => {
      let n = e.reduce((e, t) => ((e[t.setid] = t), e), {}),
        r = dh(t);
      return Object.keys(n).reduce(
        (e, t) => (
          gh(n[t], r[t]) ? e.unmodified.push(t) : e.modified.push(t),
          e
        ),
        { csv: n, groups: r, modified: [], unmodified: [] },
      );
    });
}
function yh(e) {
  let t = new Set(e.fields);
  return Object.keys(lh.shape).every((e) => t.has(e)) && !t.has(`api_name`);
}
function bh(e, t, n) {
  let r = vh({ groups: t, validLanguages: n }).safeParse(e.data);
  return { ...r.data, ...ih(e, r.error?.issues, `setid`) };
}
function xh(e, t, n) {
  let r = `${e}-achievement-sets-localization.csv`,
    { fields: i, rows: a } = Km(
      t.map((e) => mh(e, n)),
      [...Object.keys(lh.shape), ...n],
      Gm(),
    );
  qe.WriteCSVToFile(a, r, !0, i);
}
var Sh = `xrvj-s3NAdc-`,
  Ch = `i2fB78ZSih4-`,
  wh = `v-wZCTNdxxU-`,
  Th = `MdiJkSRJpEo-`,
  Eh = `L0yL8BRJEwA-`,
  Dh = { 32: Sh, 64: Ch, 128: wh, 256: Th };
function Oh(e) {
  let {
      size: t = 64,
      achievement: n,
      achieved: r = !0,
      showWarningOnEmpty: a = !0,
      children: o,
      className: s,
    } = e,
    { cdnRoot: c } = X(),
    l = r ? n?.display?.icon : n?.display?.icon_gray,
    u = Dh[t],
    d = i(u, Eh, !l && `tAcftwLfwQA-`, s);
  return l
    ? (0, F.jsxs)(`div`, {
        className: d,
        children: [(0, F.jsx)(`img`, { src: c + l }), o],
      })
    : (0, F.jsx)(`div`, {
        className: d,
        title: k(`#AchievementEditor_AchievementImage_WarningMissingImage`),
        children: (0, F.jsx)(`div`, { children: a && (0, F.jsx)(ee, {}) }),
      });
}
function kh(e) {
  let {
      size: t = 64,
      image: n,
      showNewIcon: r = !1,
      children: a,
      className: o,
    } = e,
    s = Dh[t];
  return (0, F.jsxs)(`div`, {
    className: i(s, Eh, o),
    children: [
      (0, F.jsx)(`img`, { src: n.image, alt: n.filenameWithoutExtension }),
      r && (0, F.jsx)(g, { className: `SGjZ-MjAel4-` }),
      a,
    ],
  });
}
var Ah = `lYxJrvZEK3U-`;
function jh(e) {
  let {
      className: t,
      onUpload: n,
      accept: r,
      multiple: a = !1,
      fileInputRef: o,
      onError: s,
      children: c,
    } = e,
    [l, u] = (0, P.useState)(!1),
    [d, f] = (0, P.useState)(!1),
    p = (e) =>
      !a && e.length > 1 ? !1 : Array.from(e).every((e) => r.includes(e.type)),
    m = (e) => {
      s &&
        s(
          !a && e.length > 1
            ? k(`#AchievementEditor_Upload_Error_SingleFileOnly`)
            : k(`#AchievementEditor_Image_Error_UnknownContentType`),
        );
    };
  return (0, F.jsxs)(`div`, {
    className: i(Ah, l && `CYhFhtLoPvo-`, d && `_3IZV8ZJ3zR0-`, t),
    onDragEnter: (e) => {
      (e.preventDefault(), u(!0));
      let t = [...e.dataTransfer.items];
      if (!a && t.length > 1) (f(!0), (e.dataTransfer.effectAllowed = `none`));
      else
        for (let n of t)
          if (!r.includes(n.type)) {
            (f(!0),
              (e.dataTransfer.effectAllowed = `none`),
              console.log(n.type));
            return;
          }
    },
    onDragOver: (e) => {
      (d && (e.dataTransfer.dropEffect = `none`), e.preventDefault());
    },
    onDragLeave: () => {
      (u(!1), f(!1));
    },
    onDrop: async (e) => {
      (e.preventDefault(), u(!1));
      let t = d;
      (f(!1), t ? m(e.dataTransfer.files) : n(e.dataTransfer.files));
    },
    children: [
      c,
      o &&
        (0, F.jsx)(`input`, {
          type: `file`,
          style: { display: `none` },
          name: `upload`,
          accept: r.join(`,`),
          multiple: a,
          ref: o,
          onChange: async (e) => {
            p(e.target.files) ? n(e.target.files) : m(e.target.files);
          },
        }),
    ],
  });
}
async function Mh(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onerror = () =>
      n(Error(`failed to decode image for grayscale conversion`))),
      (r.onload = () => {
        try {
          let e = document.createElement(`canvas`);
          ((e.width = r.width), (e.height = r.height));
          let n = e.getContext(`2d`);
          ((n.filter = `grayscale(100%)`),
            n.drawImage(r, 0, 0, r.width, r.height),
            t(e.toDataURL(`image/png`)));
        } catch (e) {
          n(e);
        }
      }),
      e.startsWith(`data:`) || (r.crossOrigin = `anonymous`),
      (r.src = e));
  });
}
function Nh(e, t, n, r, i) {
  let a = new FileReader();
  ((a.onerror = i),
    (a.onload = (a) => {
      let o = new Image();
      ((o.onerror = i),
        (o.onload = () => {
          let i = document.createElement(`canvas`),
            a = o.width,
            s = o.height;
          (a > s
            ? a > t && ((s *= t / a), (a = t))
            : s > n && ((a *= n / s), (s = n)),
            (i.width = a),
            (i.height = s),
            i.getContext(`2d`).drawImage(o, 0, 0, a, s),
            r(i.toDataURL(e.type)));
        }),
        (o.src = a.target?.result));
    }),
    a.readAsDataURL(e));
}
function Ph(e) {
  let t = e.lastIndexOf(`.`);
  return t !== -1 && t > e.lastIndexOf(`/`) ? e.slice(0, t) : e;
}
async function Fh(e, t = 0, n = 0, r = !1) {
  return new Promise((i, a) => {
    if (!e) {
      i({
        success: !1,
        filename: ``,
        error: k(`#AchievementEditor_Image_Error_ReadFailed`),
      });
      return;
    }
    let o = () =>
        i({
          success: !1,
          filename: e.name,
          error: k(`#AchievementEditor_Image_Error_ReadFailed`),
        }),
      s = new FileReader();
    ((s.onerror = o),
      (s.onloadend = () => {
        let a = e.type,
          c = e.name;
        if (
          ((a === `image/png` || c.endsWith(`.png`)) &&
            s.result.toString().startsWith(`data:image/png;base64,`)) ||
          ((a === `image/jpeg` || c.endsWith(`.jpg`) || c.endsWith(`.jpeg`)) &&
            (s.result.toString().startsWith(`data:image/jpeg;base64,`) ||
              s.result.toString().startsWith(`data:image/jpg;base64,`)))
        ) {
          let a = new Image();
          ((a.onerror = o),
            (a.onload = () => {
              r && a.width != a.height
                ? (console.error(
                    `Image width and height don't match, must be square`,
                  ),
                  i({
                    success: !1,
                    filename: e.name,
                    error: k(`#AchievementEditor_Image_Error_NotSquare`),
                    image: {
                      image: a.src,
                      imageType: 1,
                      filenameWithoutExtension: Ph(c),
                    },
                  }))
                : t > 0 && (a.width < t || a.height < t)
                  ? (console.error(`Image too small`),
                    i({
                      success: !1,
                      filename: e.name,
                      error: k(`#AchievementEditor_Image_Error_TooSmall`),
                      image: {
                        image: a.src,
                        imageType: 1,
                        filenameWithoutExtension: Ph(c),
                      },
                    }))
                  : n > 0 && (a.width > n || a.height > n)
                    ? Nh(
                        e,
                        n,
                        n,
                        (t) => {
                          i({
                            success: !0,
                            filename: e.name,
                            image: {
                              image: t,
                              imageType: 1,
                              filenameWithoutExtension: Ph(c),
                            },
                          });
                        },
                        o,
                      )
                    : i({
                        success: !0,
                        filename: e.name,
                        image: {
                          image: s.result,
                          imageType: 1,
                          filenameWithoutExtension: Ph(c),
                        },
                      });
            }),
            (a.src = s.result));
        } else
          (console.error(`unknown content types: ` + a),
            i({
              success: !1,
              filename: e.name,
              error: k(`#AchievementEditor_Image_Error_UnknownContentType`),
            }));
      }),
      s.readAsDataURL(e));
  });
}
async function Ih(e) {
  let { files: t, forceSquare: n, maxDimension: r, minDimension: i } = e;
  return await Promise.all(t.map((e) => Fh(e, i, r, n)));
}
function Lh(e) {
  let {
    className: t,
    allowMultiple: n,
    fileInputRef: r,
    onUpload: i,
    onBulkUpload: a,
    onError: o,
    children: s,
  } = e;
  return (0, F.jsx)(jh, {
    onUpload: async (t) => {
      let n = await Ih({ ...e, files: Array.from(t) }),
        r = n.filter((e) => !e.success);
      (r.length > 0 &&
        o &&
        o(
          r
            .map((e) => e.error)
            .filter((e) => !!e)
            .join(` `) || k(`#AchievementEditor_Image_Error_ReadFailed`),
        ),
        i
          ? n[0].success && i(n[0].image)
          : a(n.filter((e) => e.success).map((e) => e.image)));
    },
    className: t,
    accept: [`image/png`, `image/jpeg`],
    multiple: n,
    fileInputRef: r,
    onError: o,
    children: s,
  });
}
function Rh(e) {
  return e.errors?.length > 0 || e.fieldErrors?.length > 0;
}
async function zh(e, t) {
  let n = await Hm(e);
  if (n.errors) return { filename: e.name, success: !1, errors: n.errors };
  if (ah(n)) {
    let { groups: r, stats: i, achievements: a } = t,
      o = oh(n, r, i, a),
      s = Rh(o);
    return {
      filename: e.name,
      kind: `definitions`,
      success: !s,
      errors: o.errors,
      csvErrors: o.fieldErrors,
      definitions: s ? void 0 : o,
    };
  }
  if (sh(n)) {
    let t = ch(n),
      r = Rh(t);
    return {
      filename: e.name,
      kind: `localization`,
      success: !r,
      errors: t.errors,
      csvErrors: t.fieldErrors,
      localization: r ? void 0 : t,
    };
  }
  if (yh(n)) {
    let { groups: r, validLanguages: i } = t,
      a = bh(n, r, i),
      o = Rh(a);
    return {
      filename: e.name,
      kind: `grouplocalization`,
      success: !o,
      errors: a.errors,
      csvErrors: a.fieldErrors,
      groupLocalization: o ? void 0 : a,
    };
  }
  return {
    filename: e.name,
    success: !1,
    errors: [k(`#AchievementEditor_Bulk_CsvHandlerNotFound`)],
  };
}
var Bh = `_ACHIEVED`,
  Vh = `_UNACHIEVED`;
function Hh(e) {
  let t = e.toUpperCase(),
    n = [Vh, Bh].find((e) => t.endsWith(e));
  return {
    apiName: n ? e.substring(0, e.length - n.length) : e,
    isAchieved: n != Vh,
  };
}
async function Uh(e) {
  let t = (await Ih({ files: [e], forceSquare: !0 }))[0];
  if (!t.success)
    return { filename: e.name, kind: `image`, success: !1, imageErrors: [t] };
  let { apiName: n, isAchieved: r } = Hh(t.image.filenameWithoutExtension),
    i = r
      ? {
          image: await Mh(t.image.image),
          imageType: 1,
          filenameWithoutExtension: `GENERATED`,
        }
      : void 0;
  return {
    filename: e.name,
    kind: `image`,
    success: !0,
    image: { apiName: n, isAchieved: r, result: t, generatedUnachieved: i },
  };
}
var Wh = [
    { accept: [`text/csv`], process: zh },
    { accept: [`image/png`, `image/jpeg`], process: Uh },
  ],
  Gh = Array.from(new Set(Wh.flatMap((e) => e.accept))),
  Kh = [`definitions`, `localization`, `grouplocalization`];
function qh(e, t) {
  return t.reduce((e, t) => {
    let n = Kh.includes(t.kind);
    return [
      ...e.filter((e) => e.filename != t.filename && !(n && e.kind == t.kind)),
      t,
    ];
  }, e);
}
function Jh(e) {
  return {
    csv: {},
    achievements: Nm(e),
    added: [],
    modified: [],
    deleted: [],
    unmodified: e.map((e) => e.name),
  };
}
function Yh(e, t) {
  let n = e.find((e) => e.success && e.definitions)?.definitions;
  return n
    ? {
        csv: n.csv ?? {},
        achievements: n.achievements ?? Nm(t),
        added: n.added ?? [],
        modified: n.modified ?? [],
        deleted: n.deleted ?? [],
        unmodified: n.unmodified ?? [],
      }
    : Jh(t);
}
function Xh(e, t) {
  let n = e.find((e) => e.success && e.localization)?.localization;
  if (!n) return;
  let r = Object.keys(n.localization ?? {})
    .filter((e) => !Zh(e, t))
    .reduce((e, t) => ((e[t] = n.localization[t]), e), {});
  return { ...n, localization: r };
}
function Zh(e, t) {
  if (!(e in t.achievements) && !(e in t.csv))
    return k(`#AchievementEditor_Localization_Error_NoAchievement`);
  if (t.deleted.includes(e))
    return k(`#AchievementEditor_Localization_Error_MissingFromDefinitions`);
}
function Qh(e, t) {
  return !e.success || !e.localization
    ? []
    : Object.keys(e.localization.localization ?? {})
        .map((e) => ({ apiName: e, message: Zh(e, t) }))
        .filter((e) => !!e.message)
        .map((e) => ({
          key: e.apiName,
          field: `api_name`,
          message: e.message,
        }));
}
function $h(e) {
  return e.find((e) => e.success && e.groupLocalization)?.groupLocalization;
}
function eg(e, t) {
  if (e in t.achievements || e in t.csv) return e;
  let n = e.toUpperCase();
  return (
    [...Object.keys(t.achievements), ...Object.keys(t.csv)].find(
      (e) => e.toUpperCase() == n,
    ) ?? e
  );
}
function tg(e, t) {
  if (!e.success || !e.image) return;
  let n = eg(e.image.apiName, t);
  if (!(n in t.achievements) && !(n in t.csv))
    return k(`#AchievementEditor_Image_Error_NoAchievement`, e.image.apiName);
  if (t.deleted.includes(n))
    return k(`#AchievementEditor_Image_Error_AchievementMissingFromCsv`, n);
}
function ng(e, t, n) {
  let r = e
      .filter((e) => e.success && e.image && !tg(e, t))
      .map((e) => ({ ...e.image, apiName: eg(e.image.apiName, t) })),
    i = new Set(r.map((e) => e.apiName));
  return Array.from(i).reduce((e, t) => {
    let i = r.filter((e) => e.apiName == t),
      a = i.filter((e) => e.isAchieved).pop(),
      o = i.filter((e) => !e.isAchieved).pop(),
      s = n ? a?.generatedUnachieved : void 0;
    return (
      (e[t] = {
        achieved: a?.result,
        unachieved:
          o?.result ??
          (s ? { success: !0, filename: `GENERATED`, image: s } : void 0),
      }),
      e
    );
  }, {});
}
function rg(e, t) {
  let n = (e) => tg(e, t),
    r = (e) => Qh(e, t),
    i = (e) => !!n(e) || r(e).length > 0;
  return {
    errors: [
      ...e.filter((e) => !e.success),
      ...e.filter(i).map((e) => {
        let t = n(e);
        return {
          ...e,
          success: !1,
          imageErrors: t
            ? [{ ...e.image.result, success: !1, error: t }]
            : void 0,
          csvErrors: t ? void 0 : r(e),
        };
      }),
    ],
    successes: e.filter((e) => e.success && !i(e)),
  };
}
function ig(e, t, n, r) {
  let i = (e) => ({
      icon: n[e]?.achieved?.image?.image,
      icon_gray: n[e]?.unachieved?.image?.image,
    }),
    a = (t) => {
      let { statID: n, bitID: r } = e.achievements[t];
      return { statID: n, bitID: r };
    },
    o = e.added.map((n) => ({
      achievement: th(e.csv[n], t?.localization?.[n]),
      ...i(n),
    })),
    s = Array.from(
      new Set([
        ...e.modified,
        ...Object.keys(t?.localization ?? {}).filter(
          (t) => !e.added.includes(t) && t in e.achievements,
        ),
      ]),
    ).map((n) => {
      let r = e.achievements[n];
      return {
        ...a(n),
        achievement: th(e.csv[n] ?? Lm(r), t?.localization?.[n], r),
        ...i(n),
      };
    }),
    c = Object.keys(n)
      .filter((t) => e.unmodified.includes(t))
      .map((e) => ({ ...a(e), ...i(e), name: e }));
  return {
    addOrUpdate: [...o, ...s, ...c],
    delete: r ? e.deleted.map((e) => ({ ...a(e), name: e })) : [],
  };
}
function ag(e) {
  return (e?.modified ?? []).map((t) => {
    let n = e.groups[t];
    return { groupid: t, group: { ...n, name: hh(e.csv[t], n) } };
  });
}
var og = (0, P.createContext)(null);
function sg() {
  return (0, P.useContext)(og);
}
function cg(e) {
  let { onClose: t, setHasChanges: n, children: r } = e,
    { appID: i } = X(),
    a = Sf(i),
    o = (0, P.useMemo)(() => a ?? [], [a]),
    s = bf(i),
    c = xf(i),
    l = kf(i),
    u = ep(i),
    d = zf(i),
    [f, p] = (0, P.useState)([]),
    [m, h] = (0, P.useState)(!0),
    [g, _] = (0, P.useState)(!1),
    [v, y] = (0, P.useState)(!1),
    [b, x] = (0, P.useState)(void 0),
    S = (0, P.useRef)(void 0),
    C = (0, P.useMemo)(() => Yh(f, o), [f, o]),
    w = (0, P.useMemo)(() => Xh(f, C), [f, C]),
    ee = (0, P.useMemo)(() => $h(f), [f]),
    te = (0, P.useMemo)(() => ng(f, C, m), [f, C, m]),
    { errors: ne, successes: re } = (0, P.useMemo)(() => rg(f, C), [f, C]),
    ie = f.some((e) => e.success);
  (0, P.useEffect)(() => {
    n(ie);
  }, [ie, n]);
  let ae = {
    files: f,
    definitions: C,
    localization: w,
    groupLocalization: ee,
    images: te,
    errors: ne,
    successes: re,
    hasData: ie,
    generateUnachievedImages: m,
    setGenerateUnachievedImages: h,
    confirmDelete: g,
    setConfirmDelete: _,
    uploadFiles: async (e) => {
      let t = [];
      for (let n of e) {
        let e = Wh.find((e) => e.accept.includes(n.type));
        e
          ? t.push(
              await e.process(n, {
                groups: s,
                stats: c,
                achievements: o,
                validLanguages: l,
              }),
            )
          : t.push({
              filename: n.name,
              success: !1,
              errors: [k(`#AchievementEditor_Image_Error_UnknownContentType`)],
            });
      }
      (p((e) => qh(e, t)), S.current && (S.current.value = ``));
    },
    removeFile: (e) => p((t) => t.filter((t) => t.filename != e)),
    openFilePicker: () => S.current?.click(),
    fileInputRef: S,
    acceptedTypes: Gh,
    save: async () => {
      let e = ag(ee),
        t = ig(C, w, te, g),
        n = e.length,
        r = n + $f(t);
      x(void 0);
      try {
        (await d.mutateAsync({
          groups: e,
          onProgress: (e) => x({ ...e, total: r }),
        }),
          await u.mutateAsync({
            ...t,
            onProgress: (e) =>
              x({ ...e, completed: n + e.completed, total: r }),
          }),
          y(!0));
      } catch {}
    },
    isSaving: u.isPending || d.isPending,
    saveProgress: b,
    saveError: d.error?.message ?? u.error?.message,
    saveSucceeded: v,
    onClose: t,
  };
  return (0, F.jsx)(og, { value: ae, children: r });
}
function lg(e, t, n, r, i) {
  return (r && e in r) || (n && e in n && mg(t[e], n[e], i));
}
function ug() {
  let { generateUnachievedImages: e, setGenerateUnachievedImages: t } = sg(),
    { appID: n } = X(),
    r = Sf(n),
    i = bf(n),
    a = Tf(n),
    [o, s] = (0, P.useState)(!1),
    c = `dull-7`,
    l = `blue-8`;
  return (0, F.jsxs)(j, {
    direction: `column`,
    gap: `3`,
    children: [
      (0, F.jsxs)(j, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        marginTop: `3`,
        background: c,
        children: [
          (0, F.jsx)(N, {
            contrast: `title`,
            weight: `heavy`,
            children: k(`#AchievementEditor_Bulk_Definitions_Title`),
          }),
          (0, F.jsx)(N, {
            contrast: `description`,
            children: k(`#AchievementEditor_Bulk_Definitions_Description`),
          }),
          (0, F.jsxs)(j, {
            direction: `row`,
            align: `center`,
            gap: `2`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, F.jsxs)(M, {
                color: `dull`,
                onClick: () => {
                  Qm(n, r);
                },
                children: [
                  (0, F.jsx)(Mg, {}),
                  `\xA0`,
                  k(`#AchievementEditor_Bulk_Export_Definitions`),
                ],
              }),
              (0, F.jsxs)(N, {
                color: l,
                children: [
                  `(`,
                  k(`#AchievementEditor_Bulk_N_Achievements`, r.length),
                  `)`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, F.jsxs)(j, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: c,
        children: [
          (0, F.jsx)(N, {
            contrast: `title`,
            weight: `heavy`,
            children: k(`#AchievementEditor_Bulk_Localization_Title`),
          }),
          (0, F.jsx)(N, {
            contrast: `description`,
            children: k(`#AchievementEditor_Bulk_Localization_Description`),
          }),
          (0, F.jsxs)(j, {
            direction: `row`,
            align: `center`,
            gap: `3`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, F.jsxs)(j, {
                direction: `row`,
                align: `center`,
                gap: `2`,
                children: [
                  (0, F.jsxs)(M, {
                    color: `dull`,
                    onClick: () => {
                      s(!0);
                    },
                    children: [
                      (0, F.jsx)(Ng, {}),
                      `\xA0`,
                      k(
                        `#AchievementEditor_Bulk_Localization_Languages_Button`,
                      ),
                    ],
                  }),
                  (0, F.jsxs)(N, {
                    color: l,
                    children: [
                      `(`,
                      k(`#AchievementEditor_Bulk_N_Languages`, a.length),
                      `)`,
                    ],
                  }),
                ],
              }),
              (0, F.jsxs)(j, {
                direction: `row`,
                align: `center`,
                gap: `2`,
                children: [
                  (0, F.jsxs)(M, {
                    color: `dull`,
                    onClick: () => {
                      $m(n, r, a);
                    },
                    children: [
                      (0, F.jsx)(Mg, {}),
                      `\xA0`,
                      k(`#AchievementEditor_Bulk_Export_Localization`),
                    ],
                  }),
                  (0, F.jsxs)(N, {
                    color: l,
                    children: [
                      `(`,
                      k(`#AchievementEditor_Bulk_N_Achievements`, r.length),
                      `)`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(N, {
            contrast: `description`,
            children: ce(
              `#AchievementEditor_Bulk_Localization_Tip`,
              (0, F.jsx)(N, { contrast: `subtitle` }),
            ),
          }),
        ],
      }),
      (0, F.jsxs)(j, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: c,
        children: [
          (0, F.jsx)(N, {
            contrast: `title`,
            weight: `heavy`,
            children: k(`#AchievementEditor_Bulk_GroupLocalization_Title`),
          }),
          (0, F.jsx)(N, {
            contrast: `description`,
            children: k(
              `#AchievementEditor_Bulk_GroupLocalization_Description`,
            ),
          }),
          (0, F.jsxs)(j, {
            direction: `row`,
            align: `center`,
            gap: `2`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, F.jsxs)(M, {
                color: `dull`,
                onClick: () => {
                  xh(n, i, a);
                },
                children: [
                  (0, F.jsx)(Mg, {}),
                  `\xA0`,
                  k(`#AchievementEditor_Bulk_Export_GroupLocalization`),
                ],
              }),
              (0, F.jsxs)(N, {
                color: l,
                children: [
                  `(`,
                  k(`#AchievementEditor_Bulk_N_Groups`, i.length),
                  `)`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, F.jsxs)(j, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: c,
        children: [
          (0, F.jsx)(N, {
            contrast: `title`,
            weight: `heavy`,
            children: k(`#AchievementEditor_Bulk_Icons_Title`),
          }),
          (0, F.jsx)(N, {
            contrast: `description`,
            children: k(`#AchievementEditor_Bulk_Icons_Description`),
          }),
          (0, F.jsx)(j, {
            direction: `row`,
            align: `center`,
            gap: `3`,
            marginTop: `2`,
            marginBottom: `2`,
            children: (0, F.jsx)(Ae, {
              checked: e,
              onChange: (e) => t(e),
              children: (0, F.jsxs)(F.Fragment, {
                children: [
                  k(`#AchievementEditor_Bulk_Options_GenerateIcons`),
                  (0, F.jsx)(`span`, {
                    children: k(
                      `#AchievementEditor_Bulk_Options_GenerateIcons_Description`,
                    ),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o && (0, F.jsx)(im, { onClose: () => s(!1) }),
    ],
  });
}
function dg(e) {
  let { onClose: t, setHasChanges: n } = e;
  return (0, F.jsx)(cg, {
    onClose: t,
    setHasChanges: n,
    children: (0, F.jsx)(pg, {}),
  });
}
function fg(e) {
  let { title: t, description: n, children: r } = e;
  return (0, F.jsxs)(`div`, {
    className: sp,
    children: [
      (0, F.jsx)(`h2`, { children: t }),
      (0, F.jsx)(`p`, { children: n }),
      r,
    ],
  });
}
function pg() {
  let {
      files: e,
      hasData: t,
      acceptedTypes: n,
      fileInputRef: r,
      uploadFiles: a,
      openFilePicker: o,
      save: s,
      isSaving: c,
      saveProgress: l,
      saveError: u,
      saveSucceeded: d,
      onClose: f,
    } = sg(),
    [p, m] = (0, P.useState)(void 0);
  return (0, F.jsxs)(`div`, {
    className: i(ip, op),
    children: [
      d &&
        (0, F.jsx)(wm, {
          hideCancelButton: !0,
          onOk: f,
          children: k(`#AchievementEditor_Bulk_Save_Confirm`),
        }),
      (0, F.jsx)(ug, {}),
      (0, F.jsxs)(`div`, {
        className: ap,
        children: [
          (0, F.jsx)(jh, {
            className: cp,
            accept: n,
            multiple: !0,
            fileInputRef: r,
            onUpload: a,
            onError: m,
            children: (0, F.jsx)(`div`, {
              className: void 0,
              children: k(`#AchievementEditor_Bulk_UploadBox`),
            }),
          }),
          !!p && (0, F.jsx)(vm, { text: p }),
          (0, F.jsx)(`div`, {
            className: void 0,
            children: (0, F.jsx)(M, {
              color: `dull`,
              onClick: o,
              children: k(`#AchievementEditor_Bulk_Upload_SelectFiles`),
            }),
          }),
          e.length > 0 &&
            (0, F.jsx)(fg, {
              title: k(`#AchievementEditor_Bulk_Files_Title`),
              description: k(`#AchievementEditor_Bulk_Files_Description`),
              children: (0, F.jsx)(Dg, {}),
            }),
          t &&
            (0, F.jsxs)(fg, {
              title: k(`#AchievementEditor_Bulk_Pending_Title`),
              description: k(`#AchievementEditor_Bulk_Pending_Description`),
              children: [
                (0, F.jsx)(ke, {
                  className: `avtdFVXpkCU-`,
                  background: `dull-7`,
                  padding: `2`,
                  children: (0, F.jsx)(em, {}),
                }),
                (0, F.jsx)(vg, {}),
                (0, F.jsx)(gg, {}),
              ],
            }),
        ],
      }),
      t &&
        (0, F.jsx)(dm, {
          pending: c,
          progress: l,
          error: u,
          hideCancel: !0,
          onSave: s,
        }),
    ],
  });
}
function mg(e, t, n) {
  if (!e) return !0;
  let r = (e, t) => (e < t ? -1 : +(e > t)),
    i = Vm(e, n).sort((e, t) => r(e.field, t.field)),
    a = hg(t, n).sort((e, t) => r(e.field, t.field));
  return !(0, Fp.default)(i, a);
}
function hg(e, t) {
  let n = t.reduce((e, t) => ((e[t] = ``), e), {});
  return e.map((e) => ({ ...n, ...e }));
}
function gg() {
  let {
      definitions: e,
      localization: t,
      images: n,
      confirmDelete: r,
      setConfirmDelete: a,
    } = sg(),
    {
      csv: o,
      achievements: s,
      added: c,
      modified: l,
      unmodified: u,
      deleted: d,
    } = e,
    { localization: f } = t ?? {},
    { appID: p } = X(),
    m = Tf(p),
    h = (e) => lg(e, s, f, n, m),
    g = [...l, ...u.filter(h)],
    _ = u.filter((e) => !h(e));
  return (0, F.jsxs)(`div`, {
    className: dp,
    children: [
      (0, F.jsx)(`h3`, {
        children: k(`#AchievementEditor_Bulk_Pending_Achievements`),
      }),
      (0, F.jsx)(_g, {}),
      (0, F.jsxs)(`div`, {
        className: fp,
        children: [
          c &&
            !!c.length &&
            (0, F.jsx)(xg, {
              className: i(`zmvKraoT-x8-`, `FSJWpY2GglM-`),
              title: k(
                `#AchievementEditor_AchievementCsvImport_Added_Title`,
                c.length,
              ),
              description: k(
                `#AchievementEditor_AchievementCsvImport_Added_Description`,
              ),
              children: c.map((e, t) =>
                (0, F.jsx)(
                  wg,
                  { data: o[e], localization: f?.[e], images: n?.[e] },
                  t,
                ),
              ),
            }),
          g &&
            !!g.length &&
            (0, F.jsx)(xg, {
              className: i(`zmvKraoT-x8-`, `njE0VV2yPWw-`),
              title: k(
                `#AchievementEditor_AchievementCsvImport_Modified_Title`,
                g.length,
              ),
              description: k(
                `#AchievementEditor_AchievementCsvImport_Modified_Description`,
              ),
              children: g.map((e, t) =>
                (0, F.jsx)(
                  wg,
                  {
                    achievement: s[e],
                    data: o?.[e] || Lm(s[e]),
                    localization: f?.[e],
                    images: n?.[e],
                  },
                  t,
                ),
              ),
            }),
          d &&
            !!d.length &&
            (0, F.jsx)(xg, {
              className: i(`zmvKraoT-x8-`, `Pu-itazQ9U4-`),
              title: k(
                `#AchievementEditor_AchievementCsvImport_Removed_Title`,
                d.length,
              ),
              description: k(
                `#AchievementEditor_AchievementCsvImport_Removed_Description`,
              ),
              headerChildren: (0, F.jsx)(je, {
                cursor: `pointer`,
                maxWidth: `max-content`,
                onClick: () => a(!r),
                children: (0, F.jsx)(Ae, {
                  variant: `dark`,
                  color: `red`,
                  checked: r,
                  onChange: (e) => a(e),
                  children: k(
                    `#AchievementEditor_AchievementCsvImport_Removed_Confirm`,
                  ),
                }),
              }),
              children: d.map((e, t) =>
                (0, F.jsx)(
                  wg,
                  {
                    achievement: s[e],
                    data: Lm(s[e]),
                    localization: f?.[e],
                    images: n?.[e],
                  },
                  t,
                ),
              ),
            }),
          _ &&
            !!_.length &&
            (0, F.jsx)(Sg, {
              title: k(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Title`,
                _.length,
              ),
              description: k(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Description`,
              ),
              children: _.map((e, t) =>
                (0, F.jsx)(
                  wg,
                  {
                    achievement: s[e],
                    data: Lm(s[e]),
                    localization: f?.[e],
                    images: n?.[e],
                  },
                  t,
                ),
              ),
            }),
        ],
      }),
    ],
  });
}
function _g() {
  return (0, F.jsxs)(`div`, {
    className: Np,
    children: [
      (0, F.jsx)(`div`, { className: Pp }),
      (0, F.jsx)(`p`, {
        children: k(`#AchievementEditor_AchievementCsvImport_Pending_Legend`),
      }),
    ],
  });
}
function vg() {
  let { groupLocalization: e } = sg(),
    { currentLanguage: t } = X().localization,
    { csv: n, groups: r, modified: a, unmodified: o } = e ?? {};
  if (!n) return null;
  let s = (e) =>
    (0, F.jsxs)(`div`, {
      className: Tp,
      children: [
        (0, F.jsxs)(`div`, {
          className: rp,
          children: [
            (0, F.jsx)(`div`, {
              children: k(`#AchievementEditor_GroupCsvImport_Header_GroupID`),
            }),
            (0, F.jsx)(`div`, {
              children: k(`#AchievementEditor_Group_Field_Name`),
            }),
          ],
        }),
        e.map((e) => {
          let a = hh(n[e], r[e]),
            o = Q(r[e]?.name, t) != Q(a, t);
          return (0, F.jsxs)(
            `div`,
            {
              children: [
                (0, F.jsx)(`div`, { children: e }),
                (0, F.jsx)(`div`, {
                  className: i(o && `Fb9jyZHfoV0-`),
                  children: (0, F.jsx)(rm, { text: a }),
                }),
              ],
            },
            e,
          );
        }),
      ],
    });
  return (0, F.jsxs)(`div`, {
    className: dp,
    children: [
      (0, F.jsx)(`h3`, {
        children: k(`#AchievementEditor_Bulk_Pending_Groups`),
      }),
      (0, F.jsx)(_g, {}),
      (0, F.jsxs)(j, {
        direction: `column`,
        gap: `2`,
        children: [
          !!a?.length &&
            (0, F.jsx)(Eg, {
              className: i(`zmvKraoT-x8-`, `njE0VV2yPWw-`),
              title: k(
                `#AchievementEditor_AchievementCsvImport_Modified_Title`,
                a.length,
              ),
              description: k(
                `#AchievementEditor_GroupCsvImport_Modified_Description`,
              ),
              children: s(a),
            }),
          !!o?.length &&
            (0, F.jsx)(Eg, {
              collapsible: !0,
              title: k(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Title`,
                o.length,
              ),
              description: k(
                `#AchievementEditor_GroupCsvImport_Unmodified_Description`,
              ),
              children: s(o),
            }),
        ],
      }),
    ],
  });
}
function yg(e) {
  let { title: t, description: n, headerChildren: r } = e;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(N, { size: `4`, contrast: `title`, children: t }),
      (0, F.jsx)(N, { children: n }),
      r,
    ],
  });
}
function bg(e) {
  let { className: t, children: n } = e;
  return (0, F.jsx)(`div`, { className: i(hp, t), children: n });
}
function xg(e) {
  let { children: t, className: n, ...r } = e;
  return (0, F.jsxs)(bg, {
    ...e,
    children: [
      (0, F.jsx)(`div`, { className: _p, children: (0, F.jsx)(yg, { ...r }) }),
      (0, F.jsxs)(`div`, { className: bp, children: [(0, F.jsx)(Cg, {}), t] }),
    ],
  });
}
function Sg(e) {
  let { children: t, className: n, ...r } = e,
    [a, o] = (0, P.useState)(!0);
  return (0, F.jsxs)(bg, {
    ...e,
    children: [
      (0, F.jsxs)(`div`, {
        className: i(_p, vp),
        children: [
          (0, F.jsx)(`div`, { children: (0, F.jsx)(yg, { ...r }) }),
          (0, F.jsx)(`div`, {
            children: (0, F.jsx)(`div`, {
              className: yp,
              onClick: () => o(!a),
              children: (0, F.jsx)(w, { angle: a ? 90 : 0 }),
            }),
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: i(bp, a && `ovrT8DFQsuw-`),
        children: [(0, F.jsx)(Cg, {}), t],
      }),
    ],
  });
}
function Cg() {
  return (0, F.jsxs)(`div`, {
    className: rp,
    children: [
      (0, F.jsx)(`div`, {}),
      (0, F.jsx)(`div`, {
        children: k(
          `#AchievementEditor_AchievementsTable_Header_NameDescription`,
        ),
      }),
      (0, F.jsx)(`div`, {
        children: k(`#AchievementEditor_AchievementsTable_Header_ApiName`),
      }),
      (0, F.jsx)(`div`, {
        children: k(`#AchievementEditor_AchievementsTable_Header_Group`),
      }),
      (0, F.jsx)(`div`, {
        children: k(`#AchievementEditor_AchievementsTable_Header_SetBy`),
      }),
      (0, F.jsx)(`div`, {
        children: k(`#AchievementEditor_AchievementsTable_Header_Availability`),
      }),
    ],
  });
}
function wg(e) {
  let { achievement: t, data: n, localization: r, images: a } = e,
    {
      api_name: o,
      setid: s,
      archived: c,
      spoiler: l,
      permission: u,
      progress_stat_name: d,
      progress_stat_min: f,
      progress_stat_max: p,
    } = n ?? {},
    m = zm(
      t?.display?.name?.token,
      r?.find((e) => e.field == `name`),
    ),
    h = zm(
      t?.display?.desc?.token,
      r?.find((e) => e.field == `description`),
    ),
    { localization: g } = X(),
    { currentLanguage: _ } = g;
  function v(e, n, r) {
    return i(r, e == n && t !== void 0 ? void 0 : gp);
  }
  let y = t?.display?.hidden == `1`,
    b = t?.archived == `1`,
    x = v(Q(t?.display?.name, _), Q(r ? m : t?.display?.name, _)),
    S = v(Q(t?.display?.desc, _), Q(r ? h : t?.display?.desc, _));
  return (0, F.jsxs)(`div`, {
    className: xp,
    children: [
      (0, F.jsxs)(`div`, {
        children: [
          a?.achieved?.image
            ? (0, F.jsx)(kh, {
                image: a?.achieved?.image,
                size: 32,
                className: mp,
              })
            : (0, F.jsx)(Oh, { achievement: t, size: 32, className: pp }),
          a?.unachieved?.image
            ? (0, F.jsx)(kh, {
                image: a?.unachieved?.image,
                size: 32,
                className: mp,
              })
            : (0, F.jsx)(Oh, {
                achievement: t,
                achieved: !1,
                size: 32,
                className: pp,
              }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: Sp,
        children: [
          (0, F.jsx)(`div`, {
            className: x,
            children: (0, F.jsx)(rm, { text: r ? m : t?.display?.name }),
          }),
          (0, F.jsx)(`div`, {
            className: S,
            children: (0, F.jsx)(rm, { text: r ? h : t?.display?.desc }),
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: Cp,
        children: [
          (0, F.jsx)(`div`, { className: v(o, t?.name), children: o }),
          d &&
            (0, F.jsxs)(`div`, {
              className: `L0LRlt43P7k-`,
              children: [
                (0, F.jsx)(`span`, {
                  className: v(d, t?.progress?.value?.operand1),
                  children: d,
                }),
                `: `,
                (0, F.jsx)(`span`, {
                  className: v(f.toString(), t?.progress?.min_val),
                  children: f,
                }),
                ` - `,
                (0, F.jsx)(`span`, {
                  className: v(p.toString(), t?.progress?.max_val),
                  children: p,
                }),
              ],
            }),
        ],
      }),
      (0, F.jsx)(`div`, {
        className: v(s, t?.groupid ?? ``),
        children: (0, F.jsx)(Tg, {
          groupid: s,
          oldgroupid: t?.groupid,
          isnew: !t,
        }),
      }),
      (0, F.jsx)(`div`, {
        className: v(u, t?.permission ?? Y.Client),
        children: Y[u],
      }),
      (0, F.jsxs)(`div`, {
        className: wp,
        children: [
          (l || y) &&
            (0, F.jsx)(`div`, {
              className: v(l, y),
              children: l
                ? (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)(Pg, {}),
                      ` `,
                      k(`#AchievementEditor_Achievement_Edit_Spoiler`),
                    ],
                  })
                : (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)(Fg, {}),
                      ` `,
                      k(`#AchievementEditor_Achievement_Edit_Visible`),
                    ],
                  }),
            }),
          (c || b) &&
            (0, F.jsx)(`div`, {
              className: v(c, b),
              children: c
                ? (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)(Ig, {}),
                      ` `,
                      k(`#AchievementEditor_Achievement_Edit_Archived`),
                    ],
                  })
                : (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)(Lg, {}),
                      ` `,
                      k(`#AchievementEditor_Achievement_Edit_Dearchived`),
                      ` `,
                    ],
                  }),
            }),
        ],
      }),
    ],
  });
}
function Tg(e) {
  let { groupid: t, oldgroupid: n, isnew: r } = e,
    { appID: i } = X(),
    a = vf(i),
    o = !t || t == `` ? `0` : t,
    s = Tm(o, a?.[o]),
    c = Tm(n, a?.[n]),
    l =
      o == `0`
        ? k(`#AchievementEditor_Group_CoreGameAchievements_Heading`)
        : (0, F.jsx)(rm, { text: a?.[o]?.name });
  return s.visible
    ? (r || o != n) && s.hasprogress
      ? (0, F.jsxs)(O, {
          className: np,
          toolTipContent: k(
            `#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`,
          ),
          style: { alignItems: `baseline` },
          children: [(0, F.jsx)(cm, { className: Mp }), l],
        })
      : (0, F.jsx)(F.Fragment, { children: l })
    : c?.visible
      ? (0, F.jsxs)(O, {
          className: np,
          toolTipContent: k(
            `#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement`,
          ),
          style: { alignItems: `baseline` },
          children: [(0, F.jsx)(Pg, { hideTitle: !0 }), l],
        })
      : (0, F.jsxs)(F.Fragment, {
          children: [(0, F.jsx)(Pg, { className: tp }), l],
        });
}
function Eg(e) {
  let {
      title: t,
      description: n,
      icon: r,
      collapsible: a = !1,
      className: o,
      children: s,
    } = e,
    [c, l] = (0, P.useState)(a);
  return (0, F.jsxs)(`div`, {
    className: i(Ep, o),
    children: [
      (0, F.jsxs)(`div`, {
        className: i(Dp, a && `igyCtMxWpXw-`),
        children: [
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(j, {
                direction: `row`,
                gap: `1`,
                align: `center`,
                children: [
                  r,
                  (0, F.jsx)(N, { size: `4`, contrast: `title`, children: t }),
                ],
              }),
              (0, F.jsx)(N, { children: n }),
            ],
          }),
          a &&
            (0, F.jsx)(`div`, {
              children: (0, F.jsx)(`div`, {
                className: `l23xX77jc24-`,
                onClick: () => l(!c),
                children: (0, F.jsx)(w, { angle: c ? 90 : 0 }),
              }),
            }),
        ],
      }),
      (0, F.jsx)(`div`, { className: i(Op, c && `ovrT8DFQsuw-`), children: s }),
    ],
  });
}
function Dg() {
  let { errors: e, successes: t } = sg();
  return e.length == 0 && t.length == 0
    ? null
    : (0, F.jsxs)(j, {
        direction: `column`,
        gap: `2`,
        children: [
          e.length > 0 &&
            (0, F.jsx)(Eg, {
              icon: (0, F.jsx)(Rg, {}),
              title: de(`#AchievementEditor_Bulk_Errors_Count_Title`, e.length),
              description: k(`#AchievementEditor_Bulk_Errors_Description`),
              children: e.map((e) => (0, F.jsx)(Ag, { result: e }, e.filename)),
            }),
          t.length > 0 &&
            (0, F.jsx)(Eg, {
              collapsible: !0,
              title: de(
                `#AchievementEditor_Bulk_Successes_Count_Title`,
                t.length,
              ),
              description: k(`#AchievementEditor_Bulk_Successes_Description`),
              children: t.map((e) =>
                (0, F.jsx)(
                  `div`,
                  {
                    className: `d5VWpJFbnXw-`,
                    children: (0, F.jsx)(Og, { result: e }),
                  },
                  e.filename,
                ),
              ),
            }),
        ],
      });
}
function Og(e) {
  let { result: t } = e,
    { filename: n, imageErrors: r } = t,
    { removeFile: i } = sg(),
    a = t.image?.result?.image ?? r?.[0]?.image,
    o = a
      ? (0, F.jsx)(`div`, {
          className: kp,
          children: (0, F.jsx)(`img`, {
            src: a.image,
            alt: a.filenameWithoutExtension,
          }),
        })
      : (0, F.jsx)(ke, {
          height: `24px`,
          aspectRatio: `1/1`,
          children: (0, F.jsx)(h, {}),
        });
  return (0, F.jsxs)(j, {
    direction: `row`,
    gap: `1`,
    padding: `1`,
    justify: `between`,
    align: `center`,
    background: `dull-8`,
    children: [
      (0, F.jsxs)(j, {
        direction: `row`,
        gap: `2`,
        justify: `start`,
        align: `center`,
        children: [
          o,
          (0, F.jsx)(N, {
            weight: `heavy`,
            size: `4`,
            contrast: `title`,
            whiteSpace: `pre-wrap`,
            children: n,
          }),
        ],
      }),
      (0, F.jsx)(hm, { onClick: () => i(n) }),
    ],
  });
}
function kg(e) {
  let { kind: t, errors: n, csvErrors: r, imageErrors: i } = e.result;
  if (r) {
    let e = k(
      t == `grouplocalization`
        ? `#AchievementEditor_GroupCsvImport_Header_GroupID`
        : `#AchievementEditor_Achievement_Edit_ApiName`,
    );
    return (0, F.jsx)(jg, { keyHeader: e, errorStrings: n, csvErrors: r });
  }
  return i
    ? (0, F.jsxs)(`div`, {
        children: [
          n &&
            n.map((e, t) =>
              (0, F.jsx)(`div`, { className: `XVCBnsVWfXA-`, children: e }, t),
            ),
          i.map((e, t) =>
            (0, F.jsx)(`div`, { className: jp, children: e.error }, t),
          ),
        ],
      })
    : (0, F.jsx)(`div`, {
        children:
          n &&
          n.map((e, t) =>
            (0, F.jsx)(`div`, { className: `XVCBnsVWfXA-`, children: e }, t),
          ),
      });
}
function Ag(e) {
  let { result: t } = e;
  return (0, F.jsxs)(`div`, {
    className: Ap,
    children: [(0, F.jsx)(Og, { result: t }), (0, F.jsx)(kg, { result: t })],
  });
}
function jg(e) {
  let { keyHeader: t, errorStrings: n, csvErrors: r } = e;
  return (0, F.jsxs)(`div`, {
    className: lp,
    children: [
      (0, F.jsxs)(`div`, {
        className: rp,
        children: [
          (0, F.jsx)(`div`, {
            children: k(`#AchievementEditor_AchievementCsvImport_Header_Line`),
          }),
          (0, F.jsx)(`div`, { children: t }),
          (0, F.jsx)(`div`, {
            children: k(`#AchievementEditor_AchievementCsvImport_Header_Field`),
          }),
          (0, F.jsx)(`div`, {
            children: k(`#AchievementEditor_AchievementCsvImport_Header_Input`),
          }),
          (0, F.jsx)(`div`, {
            children: k(`#AchievementEditor_AchievementCsvImport_Header_Error`),
          }),
        ],
      }),
      n &&
        n.map((e, t) =>
          (0, F.jsx)(`div`, { className: `XVCBnsVWfXA-`, children: e }, t),
        ),
      r
        .sort(zg)
        .map((e, t) =>
          (0, F.jsxs)(
            `div`,
            {
              children: [
                (0, F.jsx)(`div`, { children: e.line }),
                (0, F.jsx)(`div`, { children: e.key }),
                (0, F.jsx)(`div`, { children: e.field }),
                (0, F.jsx)(`div`, { children: e.input }),
                (0, F.jsx)(`div`, { children: e.message }),
              ],
            },
            `${e.key}.${e.field}.${t}`,
          ),
        ),
    ],
  });
}
function Mg(e) {
  let { className: t } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    children: (0, F.jsx)(_e, {}),
  });
}
function Ng(e) {
  let { className: t } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    children: (0, F.jsx)(ne, {}),
  });
}
function Pg(e) {
  let { className: t, hideTitle: n = !1 } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    title: n ? void 0 : k(`#AchievementEditor_Achievement_Edit_Hidden`),
    children: (0, F.jsx)(ge, {}),
  });
}
function Fg(e) {
  let { className: t, hideTitle: n = !1 } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    title: n ? void 0 : k(`#AchievementEditor_Achievement_Edit_Visible`),
    children: (0, F.jsx)(S, {}),
  });
}
function Ig(e) {
  let { className: t, hideTitle: n = !1 } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    title: n ? void 0 : k(`#AchievementEditor_Achievement_Edit_Archived`),
    children: (0, F.jsx)(ie, {}),
  });
}
function Lg(e) {
  let { className: t } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    children: (0, F.jsx)(re, {}),
  });
}
function Rg(e) {
  let { className: t } = e;
  return (0, F.jsx)(`div`, {
    className: i(up, t),
    children: (0, F.jsx)(he, { color: `var(--color-error)` }),
  });
}
function zg(e, t) {
  let n = (e.line ?? 0) - (t.line ?? 0);
  return (
    n != 0 ||
      ((n = e.key.localeCompare(t.key)), n != 0) ||
      (n = e.field.localeCompare(t.field)),
    n
  );
}
var Bg = `PanFifvVcsQ-`,
  Vg = `IqT5rNi7YAs-`,
  Hg = `PtXSINNzCP0-`,
  Ug = `hDSrn4dlQ1Q-`,
  Wg = `wLj2jhbWxtM-`,
  Gg = `A9CtEB-WbD8-`,
  Kg = `V33-ZCcC1uo-`,
  qg = `PGP8efbnSBE-`,
  Jg = `hgpOtPMr7Vs-`,
  Yg = `_0w35UAPj9Hg-`,
  Xg = `_6lEjP8FU3A8-`,
  Zg = `lRH9HUqEz7w-`,
  Qg = `-Af0tG1YA7k-`,
  $g = `TXA-K1VzAsQ-`,
  e_ = `HzDDIVt8bZg-`,
  t_ = `VcmbKhlcjpk-`,
  n_ = `mUuzxa-G6g0-`,
  r_ = `XQCrNc6VvrA-`,
  i_ = `ug0b7Jyfk0k-`,
  a_ = `ddB5C3dCCCY-`,
  o_ = `xjXkwfxm1QY-`,
  s_ = `XaVPJbP5g0E-`,
  c_ = `HG5NOwvm8pk-`,
  l_ = `QCoxkFWUsk8-`,
  u_ = `U6f4OlslI60-`,
  d_ = `oXFOq7Lk89c-`,
  f_ = `xkSerRysIgY-`,
  p_ = `Y5R-KNN0oEI-`,
  m_ = `wzgR7x1RR14-`,
  h_ = `aaWAXLuryto-`,
  g_ = `xR9BppARoEY-`;
function __(e, t, n) {
  let [r, i] = (0, P.useState)(t(e));
  return {
    value: r.success ? r.data : r.input,
    setValue: (e) => {
      let r = t(e);
      (n || r.success) && i(r);
    },
    isValid: r.success,
    issues: r.issues,
  };
}
function v_(e) {
  return (t) => {
    let n = e.safeParse(t);
    return {
      success: n.success,
      data: n.data,
      input: t,
      issues: n.success ? void 0 : n.error?.issues.map((e) => e.message),
    };
  };
}
function y_(e) {
  let { label: t, value: n, setValue: r, isValid: i, issues: a, ...o } = e,
    s = (0, P.useId)(),
    [c, l] = (0, P.useState)(!1);
  return (0, F.jsx)(S_, {
    labelId: s,
    label: t,
    isValid: !c || i,
    issues: a,
    children: (0, F.jsx)(b_, {
      children: (0, F.jsx)(Fe, {
        value: n,
        onTextChange: (e) => {
          (l(!0), r(e));
        },
        onBlur: () => {
          l(!0);
        },
        "aria-labelledby": s,
        ...o,
      }),
    }),
  });
}
function b_(e) {
  let { children: t } = e;
  return (0, F.jsx)(`div`, { className: g_, children: t });
}
function x_(e) {
  let { label: t, description: n, labelId: r, children: i } = e;
  return (0, F.jsxs)(`div`, {
    children: [
      t && (0, F.jsx)(`h2`, { id: r, children: t }),
      n && (0, F.jsx)(N, { contrast: `description`, children: n }),
      i,
    ],
  });
}
function S_(e) {
  let {
    label: t,
    description: n,
    labelId: r,
    issues: a,
    isValid: o,
    children: s,
  } = e;
  return (0, F.jsxs)(`div`, {
    className: i(m_, o ? void 0 : h_),
    children: [
      (0, F.jsx)(x_, { label: t, description: n, labelId: r, children: s }),
      !o &&
        a !== void 0 &&
        (typeof a == `string`
          ? (0, F.jsxs)(`span`, {
              className: `tEufAkxnSTo-`,
              children: [
                (0, F.jsx)(he, { color: `var(--color-invalid)` }),
                ` `,
                a,
              ],
            })
          : a.map((e, t) =>
              (0, F.jsxs)(
                `span`,
                {
                  className: `tEufAkxnSTo-`,
                  children: [
                    (0, F.jsx)(he, { color: `var(--color-invalid)` }),
                    ` `,
                    e,
                  ],
                },
                t,
              ),
            )),
    ],
  });
}
var C_ = Ru().regex(/^-?\d+(?:\.\d*)?$/),
  w_ = { decode: (e) => Number.parseFloat(e), encode: (e) => e.toString() },
  T_ = Jd(C_, ld(), w_),
  E_ = Ru().regex(Tr),
  D_ = { decode: (e) => Number.parseInt(e, 10), encode: (e) => e.toString() },
  O_ = Jd(E_, dd(), D_);
function k_(e) {
  let t = e?.type == `INT` ? E_.transform(D_.decode) : C_.transform(w_.decode),
    n = e?.type == `INT` ? [0, Pt.int32[1]] : [0, Pt.float32[1]],
    r = t.default(0).parse(e?.min),
    i = t.default(n[1]).parse(e?.max),
    a = e?.type == `INT` ? ld().int() : ld(),
    o = v_(
      bd({ min_val: a.min(r), max_val: a.max(i) })
        .optional()
        .refine((e) => e === void 0 || e.min_val < e.max_val, {
          error: k(`#AchievementEditor_Validator_Error_MinGreaterThanMax`),
        }),
    );
  return {
    hasStat: e !== void 0,
    hasMin: e?.min !== void 0,
    hasMax: e?.max !== void 0,
    min: r,
    max: i,
    type: e?.type,
    validator: o,
  };
}
function A_(e) {
  let {
      appID: t,
      progress: n,
      setProgress: r,
      hasStat: i,
      hasMin: a,
      hasMax: o,
      min: s,
      max: c,
      type: l = `FLOAT`,
      validator: u,
    } = e,
    d = (0, P.useId)(),
    f = xf(t) ?? [];
  function p(e) {
    if (e === void 0) {
      r(void 0);
      return;
    }
    let t = f.find((t) => t.name == e);
    r({
      min_val: t?.min,
      max_val: t?.max,
      value: { operand1: e, operation: `statvalue` },
    });
  }
  function m(e) {
    let t = {
      value: n.value,
      min_val: e[0].toString(),
      max_val: e[1].toString(),
    };
    r(t);
  }
  function h(e) {
    if (!e) return;
    let t = f.find((t) => t.name == e);
    return `${t.name} (${t.type} ${t.min ?? 0} - ${t.max ?? `∞`})`;
  }
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(x_, {
        labelId: d,
        label: k(`#AchievementEditor_Achievement_Edit_ProgressStat`),
        description: k(
          `#AchievementEditor_Achievement_Edit_ProgressStat_Description`,
        ),
        children: (0, F.jsx)(De, {
          "aria-labelledby": d,
          options: f.map((e) => e.name),
          getOptionLabel: h,
          selectedValue: n?.value?.operand1,
          onSelectionChange: p,
          placeholder: ``,
          filterPlaceholder: ``,
          clearable: !0,
        }),
      }),
      i &&
        (0, F.jsx)(j_, {
          showSlider: a && o,
          min: s,
          max: c,
          integer: l == `INT`,
          validator: u,
          value: [
            tf().default(s).parse(n?.min_val),
            tf().default(c).parse(n?.max_val),
          ],
          setValue: m,
        }),
    ],
  });
}
function j_(e) {
  let {
      showSlider: t = !1,
      min: n,
      max: r,
      validator: i,
      integer: a,
      value: o,
    } = e,
    s = (0, P.useId)();
  a && ld().int();
  let c = i({ min_val: o[0], max_val: o[1] });
  return (0, F.jsx)(S_, {
    labelId: s,
    label: k(`#AchievementEditor_Achievement_Edit_ProgressStatRange`),
    isValid: c.success,
    issues: c.success ? void 0 : c.issues?.map((e) => e),
    children: t ? (0, F.jsx)(M_, { ...e }) : (0, F.jsx)(N_, { ...e }),
  });
}
function M_(e) {
  let { min: t, max: n, integer: r, value: i, setValue: a } = e,
    o = r ? 1 : 0.1,
    s = [u(i[0], t, n), u(i[1], t, n)];
  return (0, F.jsxs)(`div`, {
    className: f_,
    children: [
      (0, F.jsx)(N_, { ...e }),
      (0, F.jsx)(Le, { value: s, onValueChange: a, min: t, max: n, step: o }),
    ],
  });
}
function N_(e) {
  let { value: t, setValue: n, integer: r } = e;
  return (0, F.jsxs)(`div`, {
    className: p_,
    children: [
      (0, F.jsx)(b_, {
        children: (0, F.jsx)(P_, {
          placeholder: k(
            `#AchievementEditor_Achievement_Edit_Stat_Min_Placeholder`,
          ),
          value: t[0],
          integer: r,
          onValueChange: (e) => n([e, t[1]]),
        }),
      }),
      (0, F.jsx)(`span`, { children: ` - ` }),
      (0, F.jsx)(b_, {
        children: (0, F.jsx)(P_, {
          placeholder: k(
            `#AchievementEditor_Achievement_Edit_Stat_Max_Placeholder`,
          ),
          value: t[1],
          integer: r,
          onValueChange: (e) => n([t[0], e]),
        }),
      }),
    ],
  });
}
function P_(e) {
  let { defaultValue: t = 0, integer: n = !1, ...r } = e,
    i = n ? O_ : T_;
  function a(e) {
    let t = i.safeDecode(e);
    return t.success ? t.data : void 0;
  }
  return (0, F.jsx)(at, {
    valueToString: (e) => i.safeEncode(e).data,
    valueFromString: a,
    checkValidText: (e, t) => !e || (t !== it && !isNaN(t)),
    ...r,
  });
}
function F_(e) {
  let {
      achievements: t,
      compact: n = !1,
      editable: r = !0,
      contentBefore: a,
      headerContentBefore: o,
      setBulkMove: s,
    } = e,
    c = R_(),
    l = i(Jg, n ? Yg : void 0, a === void 0 ? void 0 : Xg);
  return (0, F.jsxs)(`div`, {
    className: l,
    children: [
      (0, F.jsxs)(`div`, {
        className: e_,
        children: [
          a !== void 0 &&
            (0, F.jsx)(`div`, {
              className: `Jt028pd0CaM-`,
              children: o !== void 0 && o(),
            }),
          (0, F.jsx)(`div`, {
            children:
              !n &&
              (0, F.jsx)(F.Fragment, {
                children: (0, F.jsx)(M, {
                  size: `1`,
                  onClick: s,
                  children: (0, F.jsxs)(j, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, F.jsx)(He, {
                        width: `1em`,
                        height: `1em`,
                        style: {
                          verticalAlign: `middle`,
                          display: `inline-block`,
                          outline: `1px solid currentColor`,
                        },
                      }),
                      k(`#AchievementEditor_AchievementsTable_Header_BulkMove`),
                    ],
                  }),
                }),
              }),
          }),
          (0, F.jsx)(`div`, {
            className: Zg,
            children: k(
              n
                ? `#AchievementEditor_Achievement_Edit_DisplayName`
                : `#AchievementEditor_AchievementsTable_Header_NameDescription`,
            ),
          }),
          (0, F.jsx)(`div`, {
            className: Qg,
            children: k(`#AchievementEditor_AchievementsTable_Header_ApiName`),
          }),
          !n &&
            (0, F.jsx)(`div`, {
              children: k(`#AchievementEditor_AchievementsTable_Header_SetBy`),
            }),
          !n &&
            (0, F.jsx)(`div`, {
              className: `k6H-umvyNh4-`,
              children: k(
                `#AchievementEditor_AchievementsTable_Header_Availability`,
              ),
            }),
          (0, F.jsx)(`div`, {}),
        ],
      }),
      t.map((e) =>
        (0, F.jsx)(
          H_,
          {
            achievement: e,
            nameDescCounts: c,
            compact: n,
            editable: r,
            contentBefore: a,
          },
          `ach_${e.statID}_${e.bitID}`,
        ),
      ),
    ],
  });
}
function I_(e) {
  return Object.entries(typeof e == `string` ? { english: e } : (e ?? {})).some(
    ([e, t]) => e != `token` && t?.trim().startsWith(`NEW_ACHIEVEMENT_`),
  );
}
function L_(e, t, n) {
  return n.flatMap((n) => {
    let r = Q(e, n)?.trim(),
      i = Q(t, n)?.trim();
    return r && i
      ? [{ language: n, key: `${n}\n${r}\n${i}`.toLowerCase() }]
      : [];
  });
}
function R_() {
  let { appID: e } = X(),
    t = Tf(e),
    n = Sf(e) ?? [],
    r = new Map();
  for (let e of n)
    for (let { key: n } of L_(e.display?.name, e.display?.desc, t))
      r.set(n, (r.get(n) ?? 0) + 1);
  return r;
}
function z_(e, t, n, r, i) {
  let a = new Set(
    L_(n?.display?.name, n?.display?.desc, r).map(({ key: e }) => e),
  );
  return L_(e, t, r)
    .filter(({ key: e }) => (i.get(e) ?? 0) > +!!a.has(e))
    .map(({ language: e }) => e);
}
function B_(e) {
  return k(
    `#AchievementEditor_Achievement_Warn_DuplicateText`,
    e.map((e) => k(`#Language_${e}`)).join(`, `),
  );
}
function V_(e) {
  let { achievement: t, nameDescCounts: n } = e,
    { appID: r } = X(),
    i = Tf(r),
    { name: a, desc: o } = t.display ?? {},
    s = z_(a, o, t, i, n),
    c = [
      (I_(a) || I_(o)) &&
        k(`#AchievementEditor_Achievement_Warn_EditorDefaultText`),
      s.length > 0 && B_(s),
    ].filter((e) => !!e);
  return c.length == 0
    ? null
    : (0, F.jsx)(O, {
        toolTipContent: c.join(` `),
        style: { height: `1.2em`, maxWidth: `300px`, whiteSpace: `normal` },
        children: (0, F.jsx)(lm, { color: `var(--color-warning)` }),
      });
}
function H_(e) {
  let {
      achievement: t,
      nameDescCounts: n,
      compact: r,
      editable: i,
      contentBefore: a,
    } = e,
    { existingAchievement: o, globalUnlockPercentage: s } = Dm(
      t.statID,
      t.bitID,
    ),
    { appID: c } = X(),
    l = yf(c, t.groupid),
    u = Tm(t.groupid, l),
    [d, f] = P.useState(!1),
    [p, m] = P.useState(!1),
    h = () => {
      f(!1);
    },
    g = () => {
      f(!1);
    },
    _ = r ? 32 : 64;
  return (0, F.jsxs)(`div`, {
    children: [
      d
        ? (0, F.jsx)(G_, { achievement: t, onSave: h, onCancel: g })
        : (0, F.jsxs)(F.Fragment, {
            children: [
              a !== void 0 &&
                (0, F.jsxs)(`div`, {
                  className: `Jt028pd0CaM-`,
                  children: [a(t), ` `],
                }),
              (0, F.jsxs)(`div`, {
                className: $g,
                children: [
                  (0, F.jsx)(Oh, { achievement: t, achieved: !0, size: _ }),
                  !r &&
                    (0, F.jsx)(Oh, { achievement: t, achieved: !1, size: _ }),
                ],
              }),
              (0, F.jsxs)(j, {
                direction: `column`,
                children: [
                  (0, F.jsxs)(j, {
                    direction: `row`,
                    gap: `1`,
                    align: `center`,
                    children: [
                      (0, F.jsx)(N, {
                        weight: `heavy`,
                        contrast: `title`,
                        children: (0, F.jsx)(rm, { text: t.display?.name }),
                      }),
                      (0, F.jsx)(V_, { achievement: t, nameDescCounts: n }),
                    ],
                  }),
                  !r &&
                    (0, F.jsx)(N, {
                      children: (0, F.jsx)(rm, { text: t.display?.desc }),
                    }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: Qg,
                children: [
                  (0, F.jsx)(`div`, { children: t.name }),
                  !r &&
                    (0, F.jsx)(`div`, {
                      children: t.progress
                        ? `${t.progress.value.operand1} ${t.progress.min_val} - ${t.progress.max_val}`
                        : ``,
                    }),
                ],
              }),
              !r &&
                (0, F.jsx)(`div`, {
                  className: void 0,
                  children: Y[t.permission ?? 0],
                }),
              !r &&
                (0, F.jsxs)(`div`, {
                  className: `k6H-umvyNh4-`,
                  children: [
                    t.display?.hidden == `1` &&
                      (0, F.jsx)(`div`, {
                        children: k(
                          `#AchievementEditor_Achievement_Edit_Spoiler`,
                        ),
                      }),
                    t.archived == `1` &&
                      (0, F.jsx)(`div`, {
                        children: k(
                          `#AchievementEditor_Achievement_Edit_Archived`,
                        ),
                      }),
                  ],
                }),
              (0, F.jsxs)(`div`, {
                className: t_,
                children: [
                  !r &&
                    i &&
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(mm, {
                          onClick: () => {
                            f(!0);
                          },
                        }),
                        (0, F.jsx)(hm, {
                          onClick: () => {
                            m(!0);
                          },
                        }),
                      ],
                    }),
                  (0, F.jsxs)(`div`, {
                    className: n_,
                    children: [
                      !!o &&
                        (0, F.jsx)(F.Fragment, {
                          children: (0, F.jsxs)(O, {
                            toolTipContent: k(
                              `#AchievementEditor_AchievementsTable_GlobalRate_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              whiteSpace: `nowrap`,
                            },
                            children: [
                              (0, F.jsx)(cm, { className: `lvPFLhlIVlQ-` }),
                              km(s ?? 0),
                            ],
                          }),
                        }),
                      (0, F.jsx)(O, {
                        toolTipContent: (0, F.jsx)(ke, {
                          background: `dull-5`,
                          padding: `2`,
                          children: (0, F.jsx)(zv, { ...u }),
                        }),
                        direction: `bottom`,
                        style: {
                          verticalAlign: `middle`,
                          whiteSpace: `nowrap`,
                        },
                        children: (0, F.jsx)(Rv, {
                          hidden: !u?.visible,
                          className: r_,
                          omitText: !0,
                        }),
                      }),
                      k(`#AchievementEditor_AchievementsTable_Header_ID`),
                      `: `,
                      t.statID,
                      `.`,
                      t.bitID,
                    ],
                  }),
                ],
              }),
            ],
          }),
      p &&
        (0, F.jsx)(U_, {
          achievement: t,
          hideModal: () => {
            m(!1);
          },
        }),
    ],
  });
}
function U_(e) {
  let { achievement: t, hideModal: n } = e,
    { appID: r } = X(),
    { existingAchievement: i, globalUnlockPercentage: a } = Dm(
      t.statID,
      t.bitID,
    ),
    o = i && a > 0,
    s = Qf(r, t.statID, t.bitID);
  return (0, F.jsx)(Re, {
    active: !0,
    children: (0, F.jsx)(E, {
      onEscKeypress: n,
      children: (0, F.jsxs)(C, {
        className: l_,
        children: [
          (0, F.jsx)(le, {
            children: k(`#AchievementEditor_Achievement_Delete_Dialog_Title`),
          }),
          (0, F.jsxs)(ae, {
            children: [
              o &&
                (0, F.jsxs)(j, {
                  direction: `row`,
                  gap: `1`,
                  align: `center`,
                  style: { color: `var(--color-error)` },
                  children: [
                    (0, F.jsx)(lm, {}),
                    k(
                      `#AchievementEditor_Achievement_Delete_Warn_LiveAchievement`,
                    ),
                  ],
                }),
              (0, F.jsxs)(`div`, {
                className: u_,
                children: [
                  (0, F.jsx)(`div`, {
                    children: (0, F.jsx)(Oh, { achievement: t, achieved: !0 }),
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsxs)(`div`, {
                        children: [
                          (0, F.jsxs)(`div`, {
                            children: [
                              k(`#AchievementEditor_Achievement_Edit_ApiName`),
                              `:`,
                            ],
                          }),
                          (0, F.jsx)(`div`, { children: t.name }),
                        ],
                      }),
                      (0, F.jsxs)(`div`, {
                        children: [
                          (0, F.jsxs)(`div`, {
                            children: [
                              k(
                                `#AchievementEditor_Achievement_Edit_DisplayName`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, F.jsx)(`div`, {
                            children:
                              Q(t.display?.name, `english`) ??
                              Q(t.display?.name, `token`),
                          }),
                        ],
                      }),
                      (0, F.jsxs)(`div`, {
                        children: [
                          (0, F.jsxs)(`div`, {
                            children: [
                              k(
                                `#AchievementEditor_Achievement_Edit_Description`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, F.jsx)(`div`, {
                            children:
                              Q(t.display?.desc, `english`) ??
                              Q(t.display?.desc, `token`),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(p, {
            children: (0, F.jsx)(dm, {
              saveText: k(
                `#AchievementEditor_Achievement_Delete_Dialog_Delete`,
              ),
              saveColor: `red`,
              pending: s.isPending,
              error: s.error?.message,
              onCancel: n,
              onSave: () => s.mutate(void 0, { onSuccess: n }),
            }),
          }),
        ],
      }),
    }),
  });
}
function W_(e) {
  return (0, F.jsx)(K_, { bNewAchievement: !0, ...e });
}
function G_(e) {
  return (0, F.jsx)(K_, { bNewAchievement: !1, ...e });
}
function K_(e) {
  let {
      onSave: t,
      onCancel: n,
      bNewAchievement: r,
      achievement: i,
      groupid: a,
    } = e,
    { appID: o, cdnRoot: s } = X(),
    c = xf(o) ?? [],
    l = vf(o),
    { globalUnlockPercentage: u } = Dm(i?.statID, i?.bitID),
    d = Tf(o),
    f = Sf(o),
    p = (0, P.useMemo)(
      () =>
        new Set(
          (f ?? [])
            .filter((e) => e.statID != i?.statID || e.bitID != i?.bitID)
            .map((e) => e.name?.trim().toUpperCase()),
        ),
      [f, i?.statID, i?.bitID],
    ),
    m = (0, P.useMemo)(
      () =>
        v_(
          Ru()
            .refine((e) => e.trim().length > 0, {
              error: k(
                `#AchievementEditor_Achievement_Edit_ApiName_Error_Required`,
              ),
            })
            .refine((e) => !p.has(e.trim().toUpperCase()), {
              error: k(
                `#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate`,
              ),
            }),
        ),
      [p],
    ),
    { value: h, setValue: g, isValid: _, issues: v } = __(i?.name, m, !0),
    [y, b] = P.useState(i?.permission ?? Y.Client),
    [x, S] = P.useState(i?.display?.hidden == `1`),
    [C, w] = P.useState(i?.archived == `1`),
    [ee, te] = P.useState(i?.groupid ?? a),
    [ne, re] = P.useState(i?.display?.name ?? { token: `${h}_NAME` }),
    [ae, T] = P.useState(i?.display?.desc ?? { token: `${h}_DESC` }),
    oe = l?.[i?.groupid ?? a],
    se = Tm(ee, oe),
    ce = Tm(ee, l?.[ee]),
    [le, ue] = P.useState(i?.progress ?? void 0),
    E = k_(le ? c.find((e) => e.name == le.value.operand1) : void 0),
    D =
      !le ||
      E.validator(bd({ min_val: tf(), max_val: tf() }).safeParse(le).data)
        .success,
    de = R_(),
    fe = tm(ne, d),
    pe = tm(ae, d),
    me = I_(fe) || I_(pe),
    he = z_(fe, pe, r ? void 0 : i, d, de),
    ge = _ && D && he.length == 0,
    [_e, ve] = P.useState(
      i?.display?.icon
        ? {
            image: s + i?.display?.icon,
            imageType: 1,
            filenameWithoutExtension: i?.name,
          }
        : void 0,
    ),
    [ye, be] = P.useState(void 0),
    [xe, Se] = P.useState(
      i?.display?.icon_gray
        ? {
            image: s + i?.display?.icon_gray,
            imageType: 1,
            filenameWithoutExtension: i?.name,
          }
        : void 0,
    ),
    A = async (e) => {
      try {
        (be(void 0),
          Se({
            image: await Mh(e),
            imageType: 1,
            filenameWithoutExtension: h,
          }));
      } catch {
        be(k(`#AchievementEditor_Image_Error_GrayscaleFailed`));
      }
    },
    Ce = async (e) => {
      (ve(e), xe || (await A(e.image)));
    },
    we = () => A(_e.image),
    Te = (e) => {
      if (e && e.value.operand1) {
        ue(e);
        let t = c.find((t) => t.name == e.value.operand1);
        t && b(t.permission);
      } else (ue(void 0), b(i?.permission ?? Y.Client));
    },
    Ee = Xf(o, r ? null : i.statID, r ? null : i.bitID),
    De = () => {
      let e = h.trim(),
        n = Cm(i?.display?.name?.token, i?.name, `name`, e),
        r = Cm(i?.display?.desc?.token, i?.name, `desc`, e),
        a = tm(i?.display?.name, d),
        o = tm(i?.display?.desc, d),
        s = tm(ne, d),
        c = tm(ae, d),
        l = {
          ...i,
          name: e,
          groupid: ee,
          permission: y,
          archived: C ? `1` : `0`,
          display: {
            ...i?.display,
            name: { ...a, ...s, token: n },
            desc: { ...o, ...c, token: r },
            hidden: x ? `1` : `0`,
          },
          progress: le,
        };
      Ee.mutate(
        { achievement: l, icon: _e?.image, icon_gray: xe?.image },
        {
          onSuccess: () => {
            t && t(l);
          },
        },
      );
    },
    Oe;
  return (
    r && ce.visible && ce.hasprogress
      ? (Oe = (0, F.jsx)(_m, {
          text: k(`#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`),
        }))
      : se.visible && !ce.visible && (u ?? 0) > 0
        ? (Oe = (0, F.jsx)(_m, {
            text: k(
              `#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement`,
            ),
          }))
        : i?.groupid != a &&
          ce.visible &&
          ce.hasprogress &&
          (Oe = (0, F.jsx)(_m, {
            text: k(
              `#AchievementEditor_Achievement_Edit_Group_Warn_BreakCompletion`,
            ),
          })),
    (0, F.jsx)(`div`, {
      className: i_,
      children: (0, F.jsxs)(`form`, {
        children: [
          (0, F.jsx)(`div`, {
            className: o_,
            children: (0, F.jsx)(`h1`, {
              children: k(
                r
                  ? `#AchievementEditor_Achievement_Edit_Title_New`
                  : `#AchievementEditor_Achievement_Edit_Title_Edit`,
              ),
            }),
          }),
          (0, F.jsxs)(`div`, {
            className: s_,
            children: [
              (0, F.jsx)(`div`, {
                style: { paddingRight: `10px` },
                children: (0, F.jsx)(`div`, {
                  children: (0, F.jsxs)(Ie, {
                    columns: `repeat(2, max-content)`,
                    gapX: `3`,
                    margin: `0`,
                    padding: `0`,
                    paddingTop: `2`,
                    children: [
                      (0, F.jsxs)(j, {
                        direction: `column`,
                        gap: `1`,
                        wrap: `wrap`,
                        width: `min-content`,
                        children: [
                          (0, F.jsx)(`h2`, {
                            children: (0, F.jsx)(N, {
                              size: `2`,
                              children: k(
                                `#AchievementEditor_Achievement_Edit_Icons_Achieved`,
                              ),
                            }),
                          }),
                          (0, F.jsx)(J_, {
                            icon: _e,
                            setIcon: Ce,
                            achievement: i,
                          }),
                        ],
                      }),
                      (0, F.jsxs)(j, {
                        direction: `column`,
                        gap: `1`,
                        wrap: `wrap`,
                        width: `min-content`,
                        children: [
                          (0, F.jsx)(`h2`, {
                            children: (0, F.jsx)(N, {
                              size: `2`,
                              children: k(
                                `#AchievementEditor_Achievement_Edit_Icons_Unachieved`,
                              ),
                            }),
                          }),
                          (0, F.jsx)(J_, {
                            icon: xe,
                            setIcon: Se,
                            achievement: i,
                          }),
                          !!_e &&
                            (0, F.jsx)(M, {
                              color: `dull`,
                              onClick: we,
                              children: k(
                                `#AchievementEditor_Achievement_Edit_Icons_Button_Generate`,
                              ),
                            }),
                          !!ye && (0, F.jsx)(vm, { text: ye }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, F.jsxs)(`div`, {
                children: [
                  (0, F.jsx)(y_, {
                    label: k(`#AchievementEditor_Achievement_Edit_ApiName`),
                    placeholder: k(
                      `#AchievementEditor_Achievement_Edit_ApiName_Placeholder`,
                    ),
                    value: h,
                    isValid: _,
                    setValue: g,
                    issues: v,
                    autoFocus: i?.name === void 0,
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsxs)(`h2`, {
                        children: [
                          k(`#AchievementEditor_Achievement_Edit_SetBy`),
                          !!le &&
                            (0, F.jsxs)(N, {
                              contrast: `description`,
                              children: [
                                (0, F.jsx)(`div`, {
                                  className: `_2Vmz8R6AMU4-`,
                                  children: (0, F.jsx)(ie, {}),
                                }),
                                k(
                                  `#AchievementEditor_Achievement_Edit_SetByProgressStat`,
                                ),
                              ],
                            }),
                        ],
                      }),
                      le
                        ? (0, F.jsx)(je, {
                            disabled: !0,
                            children: Y[y ?? Y.Client],
                          })
                        : (0, F.jsx)(Me, {
                            options: Object.values(Y).filter(
                              (e) => typeof e == `number`,
                            ),
                            getOptionLabel: (e) => Y[e],
                            selectedValue: y,
                            onSelectionChange: (e) => {
                              b(e ?? Y.Client);
                            },
                          }),
                    ],
                  }),
                  (0, F.jsx)(A_, {
                    appID: o,
                    progress: le,
                    setProgress: Te,
                    ...E,
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                children: [
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsxs)(`div`, {
                        className: a_,
                        children: [
                          (0, F.jsx)(`h2`, {
                            children: k(
                              `#AchievementEditor_Achievement_Edit_DisplayName`,
                            ),
                          }),
                          (0, F.jsx)(em, { locstring: ne }),
                        ],
                      }),
                      (0, F.jsx)(nm, { value: ne, setValue: re }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsxs)(`div`, {
                        className: a_,
                        children: [
                          (0, F.jsx)(`h2`, {
                            children: k(
                              `#AchievementEditor_Achievement_Edit_Description`,
                            ),
                          }),
                          (0, F.jsx)(em, { locstring: ae }),
                        ],
                      }),
                      (0, F.jsx)(nm, { multiline: !0, value: ae, setValue: T }),
                      me &&
                        (0, F.jsx)(_m, {
                          text: k(
                            `#AchievementEditor_Achievement_Warn_EditorDefaultText`,
                          ),
                        }),
                      he.length > 0 && (0, F.jsx)(vm, { text: B_(he) }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`h2`, {
                        children: k(
                          `#AchievementEditor_Achievement_Edit_Group`,
                        ),
                      }),
                      Oe,
                      (0, F.jsx)(xm, {
                        selectedValue: ee ?? `0`,
                        onSelectionChange: te,
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsx)(`h2`, {
                        children: k(
                          `#AchievementEditor_Achievement_Edit_Status`,
                        ),
                      }),
                      (0, F.jsxs)(j, {
                        direction: `column`,
                        gap: `1`,
                        justify: `between`,
                        children: [
                          (0, F.jsx)(O, {
                            toolTipContent: k(
                              `#AchievementEditor_Achievement_Edit_Spoiler_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              maxWidth: `300px`,
                              whiteSpace: `normal`,
                            },
                            children: (0, F.jsx)(j, {
                              direction: `column`,
                              flexGrow: `1`,
                              padding: `1`,
                              align: `start`,
                              className: d_,
                              children: (0, F.jsx)(Ae, {
                                checked: x,
                                onChange: S,
                                align: `start`,
                                children: (0, F.jsxs)(j, {
                                  direction: `column`,
                                  children: [
                                    (0, F.jsx)(N, {
                                      weight: `heavy`,
                                      children: k(
                                        `#AchievementEditor_Achievement_Edit_Spoiler`,
                                      ),
                                    }),
                                    (0, F.jsx)(N, {
                                      children: k(
                                        `#AchievementEditor_Achievement_Edit_SpoilerDesc`,
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, F.jsx)(O, {
                            toolTipContent: k(
                              `#AchievementEditor_Achievement_Edit_Archived_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              maxWidth: `300px`,
                              whiteSpace: `normal`,
                            },
                            children: (0, F.jsx)(j, {
                              direction: `column`,
                              flexGrow: `1`,
                              padding: `1`,
                              align: `start`,
                              className: d_,
                              children: (0, F.jsx)(Ae, {
                                checked: C,
                                onChange: w,
                                align: `start`,
                                children: (0, F.jsxs)(j, {
                                  direction: `column`,
                                  children: [
                                    (0, F.jsx)(N, {
                                      weight: `heavy`,
                                      children: k(
                                        `#AchievementEditor_Achievement_Edit_Archived`,
                                      ),
                                    }),
                                    (0, F.jsx)(N, {
                                      children: k(
                                        `#AchievementEditor_Achievement_Edit_ArchivedDesc`,
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(dm, {
            saveDisabled: !ge,
            pending: Ee.isPending,
            error: Ee.error?.message,
            onSave: De,
            onCancel: n,
          }),
        ],
      }),
    })
  );
}
var q_ = 256;
function J_(e) {
  let { icon: t, setIcon: n, achievement: r } = e,
    i = (0, P.useRef)(null),
    [a, o] = P.useState(void 0);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(Lh, {
        className: c_,
        onUpload: (e) => {
          (o(void 0), n(e));
        },
        onError: o,
        forceSquare: !0,
        maxDimension: q_,
        fileInputRef: i,
        children: t
          ? (0, F.jsx)(kh, { image: t, size: 128 })
          : (0, F.jsx)(Oh, {
              achievement: r,
              achieved: !0,
              size: 128,
              showWarningOnEmpty: !1,
            }),
      }),
      !!a && (0, F.jsx)(vm, { text: a }),
      (0, F.jsx)(N, {
        color: `accent-7`,
        children: k(`#AchievementEditor_Achievement_Edit_Icons_DragHelp`),
      }),
      (0, F.jsx)(M, {
        color: `dull`,
        onClick: () => i.current.click(),
        children: k(
          `#AchievementEditor_Achievement_Edit_Icons_Button_SelectFile`,
        ),
      }),
    ],
  });
}
var Y_ = `VTwMpiu5hm8-`,
  X_ = `NpZA8fe6Ha8-`,
  Z_ = `lzUEN3r8v2E-`,
  Q_ = `_1zIXZ54DvC0-`,
  $_ = `_9tyDx-RnbZ0-`,
  ev = `wDboaZvyEPo-`,
  tv = `XCmTDkx3Qqc-`,
  nv = `twyu1uer6Ys-`,
  rv = `vwhKlxW7KCM-`,
  iv = `kxAxiGJQBVE-`,
  av = `_1eK42W2md-E-`,
  ov = `zjVQ2flCoyk-`,
  sv = `KUvDm8vp-Zs-`,
  cv = `bGJEHWhdDPA-`,
  lv = `Dp4B7Rn8aQ8-`,
  uv = `q8bMsHJQD9A-`,
  dv = `Kx6HB4JhMUQ-`,
  fv = `-tmkb6bqEAU-`,
  pv = `X4EYZvz--Es-`,
  mv = `mBqXy6qapwM-`,
  hv = `Xa95CswauZA-`,
  gv = `oh58pYM8gBE-`,
  _v = `n9FuF6n8Vdo-`,
  vv = `_6Hv3k2Yy8YU-`,
  yv = `nJGgmJBp4uY-`,
  bv = `Bpz34x6P8ao-`,
  xv = `iIb1H1xn1Os-`,
  Sv = `GFxh-R0RglE-`,
  Cv = `uYo-jtvTTp0-`,
  wv = `mln46SGaN-g-`,
  Tv = `E2wuLyCbYTE-`;
function Ev(e, t, n) {
  if (!t) return { included: e, excluded: [] };
  let r = t.replace(/[#-.]|[[-^]|[?|{}]/g, `\\$&`),
    i = RegExp(`.*${r ?? ``}.*`, `i`),
    a = (e) => {
      let t = Q(e.display?.name, n ?? `english`),
        a = Q(e.display?.desc, n ?? `english`);
      return (
        !r || r === `` || !!e.name.match(i) || !!t?.match(i) || !!a?.match(i)
      );
    };
  return (e ?? []).reduce(
    (e, t) => (a(t) ? e.included.push(t) : e.excluded.push(t), e),
    { included: [], excluded: [] },
  );
}
function Dv(e) {
  let {
      reordering: t,
      setReordering: n,
      creatingNewGroup: r,
      setCreatingNewGroup: i,
    } = e,
    { appID: a } = X(),
    o = Sf(a),
    s = bf(a),
    c = _f(a);
  return t
    ? (0, F.jsx)(`div`, {
        children: (0, F.jsxs)(`div`, {
          className: rv,
          children: [
            (0, F.jsx)(`div`, {
              className: iv,
              children: k(`#AchievementEditor_Reorder_Description`),
            }),
            (0, F.jsxs)(`div`, {
              className: Cv,
              children: [
                (0, F.jsx)(Av, { groupid: null, group: null }),
                (0, F.jsx)(`div`, {
                  className: wv,
                  children: (0, F.jsx)(`h2`, {
                    children: k(`#AchievementEditor_Reorder_NotDefault`),
                  }),
                }),
              ],
            }),
            (0, F.jsx)(Ov, {
              groups: s,
              onSave: () => n(!1),
              onCancel: () => n(!1),
            }),
          ],
        }),
      })
    : (0, F.jsxs)(`div`, {
        children: [
          (0, F.jsxs)(`div`, {
            className: rv,
            children: [
              !!o && (0, F.jsx)(kv, { groupid: null, group: null }),
              !!s &&
                s.map((e) =>
                  (0, F.jsx)(kv, { groupid: e.groupid, group: e }, e.groupid),
                ),
            ],
          }),
          (0, F.jsx)(`div`, {
            children: r
              ? (0, F.jsx)(
                  kv,
                  {
                    groupid: ``,
                    group: null,
                    bNewGroup: !0,
                    onSave: () => i(!1),
                    onCancel: () => i(!1),
                  },
                  `kg_newgroup`,
                )
              : !t &&
                (0, F.jsxs)(j, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, F.jsxs)(M, {
                      variant: `vibrant`,
                      disabled: !c,
                      onClick: () => i(!0),
                      children: [
                        (0, F.jsx)(m, {
                          width: `14`,
                          height: `14`,
                          fill: `currentColor`,
                          className: `E2wuLyCbYTE-`,
                        }),
                        ` `,
                        k(`#AchievementEditor_Button_CreateNewGroup`),
                      ],
                    }),
                    !c &&
                      (0, F.jsx)(N, {
                        contrast: `description`,
                        children: k(`#AchievementEditor_Group_LimitReached`),
                      }),
                  ],
                }),
          }),
        ],
      });
}
function Ov(e) {
  let { groups: t, onSave: n, onCancel: r } = e,
    { appID: i } = X(),
    [a, o] = P.useState(t),
    s = Hf(i);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(Je, {
        onDragEnd: function (e) {
          if (!e.destination) return;
          let t = [...a],
            [n] = t.splice(e.source.index, 1);
          (t.splice(e.destination.index, 0, n), o(t));
        },
        children: (0, F.jsx)(Xe, {
          droppableId: `droppable`,
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          direction: `vertical`,
          children: (e) =>
            (0, F.jsxs)(`div`, {
              className: Sv,
              ...e.droppableProps,
              ref: e.innerRef,
              children: [
                a.map((e, t) =>
                  (0, F.jsx)(
                    Ye,
                    {
                      draggableId: e.groupid,
                      index: t,
                      children: (t) =>
                        (0, F.jsx)(Av, {
                          groupid: e.groupid,
                          group: e,
                          ref: t?.innerRef,
                          ...t?.draggableProps,
                          ...t?.dragHandleProps,
                        }),
                    },
                    e.groupid,
                  ),
                ),
                e.placeholder,
              ],
            }),
        }),
      }),
      (0, F.jsx)(dm, {
        pending: s.isPending,
        error: s.error?.message,
        onSave: () =>
          s.mutate(
            a.map((e) => e.groupid),
            { onSuccess: n },
          ),
        onCancel: r,
      }),
    ],
  });
}
function kv(e) {
  let { groupid: t, group: n, bNewGroup: r, onSave: i, onCancel: a } = e,
    { appID: o, filter: s, localization: c } = X(),
    { currentLanguage: l } = c,
    u = Cf(o, t),
    d = Tm(t, n),
    f = Em(),
    p =
      d.visible &&
      Object.values(f ?? {}).some((e) => (e.globalUnlockPercentage ?? 0) > 0),
    [h, g] = P.useState(r),
    [v, y] = P.useState(!1),
    [b, x] = P.useState(!1),
    [S, C] = P.useState(!1),
    [w, ee] = P.useState(!1),
    te = b
      ? void 0
      : [
          {
            key: `edit`,
            label: k(`#AchievementEditor_Group_Tools_Edit`),
            icon: () => (0, F.jsx)(_, {}),
            action: () => g(!0),
          },
          {
            key: `delete`,
            label: k(`#AchievementEditor_Group_Tools_Delete`),
            icon: () => (0, F.jsx)(oe, {}),
            action: () => y(!0),
          },
        ].filter((e) => (e.key == `edit` ? !!t : e.key != `delete` || !!t)),
    ne = async () => {
      (g(!1), i && i());
    },
    re = () => {
      (g(!1), a && a());
    },
    ie = (0, F.jsx)(M, {
      variant: `vibrant`,
      onClick: () => C(!0),
      children: (0, F.jsxs)(j, {
        children: [
          (0, F.jsx)(m, {
            width: `14`,
            height: `14`,
            fill: `currentColor`,
            className: Tv,
          }),
          ` `,
          k(`#AchievementEditor_Group_CreateAchievement`),
        ],
      }),
    });
  return (
    p &&
      (ie = (0, F.jsxs)(j, {
        direction: `row`,
        gap: `2`,
        align: `center`,
        children: [
          ie,
          (0, F.jsxs)(j, {
            align: `center`,
            gap: `1`,
            children: [
              (0, F.jsx)(lm, { color: `var(--color-amber-9)` }),
              (0, F.jsxs)(N, {
                color: `amber-9`,
                children: [
                  ` `,
                  k(`#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`),
                ],
              }),
            ],
          }),
        ],
      })),
    h
      ? r
        ? (0, F.jsx)(Bv, { onSave: ne, onCancel: re })
        : (0, F.jsx)(Vv, { groupid: t, group: n, onSave: ne, onCancel: re })
      : (0, F.jsxs)(Mv, {
          groupid: t,
          group: n,
          actions: te,
          collapsed: w,
          setCollapsed: ee,
          children: [
            !w &&
              (0, F.jsx)(`div`, {
                className: `HRoE3XMcGD8-`,
                children: b
                  ? (0, F.jsx)(Fv, {
                      groupid: t,
                      achievements: u,
                      filter: s,
                      currentLanguage: l,
                      onClose: () => x(!1),
                    })
                  : (0, F.jsxs)(F.Fragment, {
                      children: [
                        (0, F.jsx)(Pv, {
                          achievements: u,
                          filter: s,
                          currentLanguage: l,
                          setBulkMove: () => x(!0),
                        }),
                        (0, F.jsx)(`div`, {
                          children: S
                            ? (0, F.jsx)(W_, {
                                achievement: null,
                                groupid: t,
                                onSave: (e) => C(!1),
                                onCancel: () => C(!1),
                              })
                            : ie,
                        }),
                      ],
                    }),
              }),
            v &&
              (0, F.jsx)(Kv, {
                groupid: t,
                group: n,
                hideModal: () => {
                  y(!1);
                },
              }),
          ],
        })
  );
}
function Av(e) {
  let { className: t, ...n } = e;
  return (0, F.jsx)(Mv, { className: i(vv, t), ...n });
}
function jv(e) {
  return `group-${e}`;
}
function Mv(e) {
  let {
      groupid: t,
      group: n,
      actions: r,
      children: a,
      className: o,
      collapsed: s,
      setCollapsed: c,
      ...l
    } = e,
    u = Tm(t, n).visible ? Y_ : Z_;
  return (0, F.jsx)(`div`, {
    id: jv(t),
    className: i(av, o, u),
    ...l,
    children: (0, F.jsxs)(`div`, {
      className: ov,
      children: [
        (0, F.jsx)(Nv, {
          groupid: t,
          group: n,
          actions: r,
          collapsed: s,
          setCollapsed: c,
        }),
        a,
      ],
    }),
  });
}
function Nv(e) {
  let { groupid: t, group: n, actions: r, collapsed: i, setCollapsed: a } = e,
    o = Tm(t, n);
  return (0, F.jsxs)(`div`, {
    className: sv,
    children: [
      (0, F.jsx)(Lv, { ...o }),
      (0, F.jsxs)(`div`, {
        className: cv,
        children: [
          !t &&
            (0, F.jsxs)(`div`, {
              className: `kIbHWH3dJpY-`,
              children: [
                (0, F.jsx)(`h1`, {
                  children: k(
                    `#AchievementEditor_Group_CoreGameAchievements_Heading`,
                  ),
                }),
                (0, F.jsx)(`p`, {
                  children: k(
                    `#AchievementEditor_Group_CoreGameAchievements_Description`,
                  ),
                }),
              ],
            }),
          (0, F.jsxs)(`div`, {
            className: lv,
            children: [
              !!t &&
                (0, F.jsx)(`div`, {
                  children: (0, F.jsx)(`h2`, {
                    children: (0, F.jsx)(rm, {
                      text: n?.name,
                      missingStringLocToken: `#AchievementEditor_Group_MissingName`,
                    }),
                  }),
                }),
              (0, F.jsx)(zv, { ...o }),
            ],
          }),
        ],
      }),
      (0, F.jsxs)(`div`, {
        className: dv,
        children: [
          (0, F.jsxs)(j, {
            direction: `row`,
            gap: `3`,
            children: [
              !!r && r.length > 0 && (0, F.jsx)(Iv, { actions: r }),
              i !== void 0 &&
                a &&
                (0, F.jsx)(ke, {
                  className: `MK5f0j786-k-`,
                  onClick: () => a(!i),
                  children: (0, F.jsx)(te, {
                    fill: `currentColor`,
                    angle: i ? 0 : -90,
                  }),
                }),
            ],
          }),
          !!t &&
            (0, F.jsxs)(`div`, {
              className: `hMVCf8IklLs-`,
              children: [`ID: `, t],
            }),
        ],
      }),
    ],
  });
}
function Pv(e) {
  let { achievements: t, filter: n, currentLanguage: r, setBulkMove: i } = e,
    a = Ev(t, n, r);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      a.included.length > 0 &&
        (0, F.jsx)(F_, { achievements: a.included, setBulkMove: i }),
      a.excluded.length > 0 &&
        (0, F.jsxs)(`div`, {
          className: `Cvxn709ndd4-`,
          children: [
            (0, F.jsx)(pe, {}),
            de(
              `#AchievementEditor_Group_Filtered_Achievements`,
              a.excluded.length,
            ),
          ],
        }),
      (!t || t.length == 0) &&
        (0, F.jsx)(`div`, {
          className: `ZfWoMO3ph1o-`,
          children: k(`#AchievementEditor_Group_EmptyGroup_Description`),
        }),
    ],
  });
}
function Fv(e) {
  let {
      groupid: t,
      onClose: n,
      achievements: r,
      filter: i,
      currentLanguage: a,
    } = e,
    { appID: o } = X(),
    s = Ev(r, i, a),
    [c, l] = (0, P.useState)(void 0),
    [u, d] = (0, P.useState)([]),
    f = vf(o) || {},
    p = _f(o),
    m = new Set(u),
    h = c === bm,
    g = Hv(void 0, void 0, !0),
    _ = f[t],
    v = f[c],
    y = Tm(t, _),
    b = Tm(c, v);
  h && (b = g.visibility);
  let x;
  y.visible && !b.visible
    ? (x = (0, F.jsx)(_m, {
        text: k(
          `#AchievementEditor_Group_MoveAchievements_Warn_HidingAchievements`,
        ),
      }))
    : _?.dlcappid != (h ? g.editAppID : v?.dlcappid) &&
      b.visible &&
      b.hasprogress &&
      (x = (0, F.jsx)(_m, {
        text: k(
          `#AchievementEditor_Group_MoveAchievements_Warn_BreakCompletion`,
        ),
      }));
  let [S, C] = P.useState(s.included.length == u.length),
    w = Wf(o),
    ee = (e, t) => {
      (t ? m.add(e) : m.delete(e),
        d([...m]),
        m.size,
        s.included.length,
        (m.size == s.included.length) != S && C(!S));
    },
    te = (e) => {
      for (let t of s.included) {
        let n = cf(t);
        e ? m.add(n) : m.delete(n);
      }
      (d([...m]), C(e));
    };
  return (0, F.jsxs)(F.Fragment, {
    children: [
      s.included.length > 0 &&
        (0, F.jsx)(F_, {
          achievements: s.included,
          compact: !0,
          editable: !1,
          headerContentBefore: () =>
            (0, F.jsx)(`div`, {
              className: `bdjNQVAjF2k-`,
              children: (0, F.jsx)(Ae, { checked: S, onChange: te }),
            }),
          contentBefore: (e) => {
            let t = cf(e);
            return (0, F.jsx)(`div`, {
              className: `bdjNQVAjF2k-`,
              children: (0, F.jsx)(Ae, {
                checked: m.has(t),
                onChange: (e) => ee(t, e),
              }),
            });
          },
        }),
      s.excluded.length > 0 &&
        (0, F.jsxs)(`div`, {
          className: `Cvxn709ndd4-`,
          children: [
            (0, F.jsx)(pe, {}),
            de(
              `#AchievementEditor_Group_Filtered_Achievements`,
              s.excluded.length,
            ),
          ],
        }),
      (!r || r.length == 0) &&
        (0, F.jsx)(`div`, {
          className: `ZfWoMO3ph1o-`,
          children: k(`#AchievementEditor_Group_EmptyGroup_Description`),
        }),
      (0, F.jsxs)(j, {
        direction: h ? `column` : `row`,
        justify: h ? void 0 : `between`,
        align: h ? void 0 : `end`,
        gap: `1`,
        className: xv,
        children: [
          (0, F.jsxs)(j, {
            direction: `column`,
            gap: `1`,
            children: [
              k(
                `#AchievementEditor_Group_MoveAchievements_GroupSelect_Label`,
                m.size,
              ),
              `:`,
              (0, F.jsx)(j, {
                direction: `column`,
                align: `baseline`,
                gap: `1`,
                children: (0, F.jsx)(xm, {
                  variant: `inset`,
                  selectedValue: c,
                  filter: Sm(t),
                  onSelectionChange: l,
                  allowCreate: p,
                }),
              }),
              h &&
                (0, F.jsx)(Gv, {
                  bHideSaveCancelButtons: !0,
                  onCancel: () => {},
                  onSave: () => {},
                  state: g,
                }),
            ],
          }),
          (0, F.jsxs)(j, {
            direction: `row`,
            gap: `1`,
            justify: `end`,
            children: [
              x,
              (0, F.jsx)(sm, {
                saveDisabled: u.length == 0 || c == null,
                saveText: k(
                  `#AchievementEditor_Group_MoveAchievements_MoveButton`,
                ),
                onCancel: n,
                onSave: async () => {
                  try {
                    let e = h ? await g.save() : c,
                      t = {
                        groupid: e,
                        api_names: r
                          .filter((e) => m.has(cf(e)))
                          .map((e) => e.name),
                      };
                    (await w.mutateAsync(t),
                      setTimeout(() => {
                        document
                          .getElementById(jv(e))
                          ?.scrollIntoView({
                            behavior: `smooth`,
                            block: `nearest`,
                          });
                      }, 200),
                      n());
                  } catch {}
                },
                pending: w.isPending || g.isPending,
                error: w.error?.message ?? g.error,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Iv(e) {
  let { actions: t } = e,
    n = Ne({
      rgOptions: t.map((e, t) => t),
      selectedValue: void 0,
      onSelectionChange: (e) => {
        e !== void 0 && t[e].action();
      },
    });
  return (0, F.jsxs)(Me.Root, {
    state: n,
    children: [
      (0, F.jsx)(Me.Trigger, {
        render: (e) =>
          (0, F.jsxs)(`div`, {
            className: i(tv),
            ...e,
            children: [
              k(`#AchievementEditor_Options`),
              `\xA0`,
              (0, F.jsx)(`div`, {
                className: i(ev, fv),
                children: (0, F.jsx)(ve, {}),
              }),
            ],
          }),
      }),
      (0, F.jsx)(Me.Options, {
        children: t.map((e, t) =>
          (0, F.jsx)(
            Me.Option,
            {
              value: t,
              children: (0, F.jsxs)(`div`, {
                className: nv,
                children: [e?.icon(), e.label],
              }),
            },
            t,
          ),
        ),
      }),
    ],
  });
}
function Lv(e) {
  let { app: t, baseApp: n } = e,
    { type: r, releasestate: i, name: a } = t || {},
    o = t?.image || n?.image,
    s = { ...t, appid: t?.appid ? parseInt(t.appid) : 0, releasestate: i };
  return (0, F.jsxs)(`div`, {
    className: mv,
    children: [
      (0, F.jsx)(`div`, {
        className: _v,
        children: o
          ? (0, F.jsx)(`img`, { src: o })
          : (0, F.jsx)(`div`, { children: a }),
      }),
      r && i && (0, F.jsx)(Ze, { app: s }),
    ],
  });
}
function Rv(e) {
  let { hidden: t, className: n, omitText: r = !1 } = e;
  return (0, F.jsx)(`div`, {
    className: i(bv, t ? Q_ : X_, n),
    children: t
      ? (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(ge, {}),
            !r && k(`#AchievementEditor_Group_Field_Visibility_Value_Hidden`),
          ],
        })
      : (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(S, {}),
            !r && k(`#AchievementEditor_Group_Field_Visibility_Value_Visible`),
          ],
        }),
  });
}
function zv(e) {
  let {
      archived: t,
      developeronly: n,
      app: r,
      baseApp: a,
      noStorePage: o,
      notDLCOfApp: s,
      dlcappid: c,
    } = e,
    l = t || n || !r?.is_released_somewhere,
    u = i(Z_, $_);
  return (0, F.jsxs)(`div`, {
    className: yv,
    children: [
      (0, F.jsx)(`div`, {
        className: i(bv, l ? Q_ : X_),
        children: (0, F.jsx)(Rv, { hidden: l }),
      }),
      l &&
        (0, F.jsxs)(`div`, {
          className: `veyeMEmS1uo-`,
          children: [
            !r?.is_released_somewhere &&
              (0, F.jsx)(`div`, {
                className: u,
                children: D(
                  `#AchievementEditor_Group_Field_Restrictions_Value_OwnersReleaseStatus`,
                  (0, F.jsx)(`strong`, { children: r?.name ?? `` }),
                  k(
                    `#AchievementEditor_Group_Field_Restrictions_App_Unreleased`,
                  ),
                ),
              }),
            t &&
              (0, F.jsxs)(`div`, {
                className: u,
                children: [
                  (0, F.jsx)(ye, {}),
                  ` `,
                  k(`#AchievementEditor_Group_Field_IsArchived`),
                  ` `,
                  (0, F.jsx)(gm, {
                    helpText: k(`#AchievementEditor_Group_Tooltip_Archived`),
                  }),
                ],
              }),
            n &&
              (0, F.jsxs)(`div`, {
                className: u,
                children: [
                  (0, F.jsx)(me, {}),
                  ` `,
                  k(`#AchievementEditor_Group_Field_DeveloperOnly`),
                  ` `,
                  (0, F.jsx)(gm, {
                    helpText: k(
                      `#AchievementEditor_Group_Tooltip_DeveloperOnly`,
                    ),
                  }),
                ],
              }),
          ],
        }),
      o &&
        (0, F.jsx)(_m, {
          text: k(
            `#AchievementEditor_Group_Warn_NoStorePage`,
            r?.name ?? ``,
            a?.name ?? ``,
          ),
        }),
      s &&
        (0, F.jsx)(_m, {
          text: k(
            `#AchievementEditor_Group_Warn_NotDLCOfApp`,
            c ?? ``,
            a?.name ?? ``,
          ),
        }),
    ],
  });
}
function Bv(e) {
  return (0, F.jsx)(Uv, { bNewGroup: !0, ...e });
}
function Vv(e) {
  return (0, F.jsx)(Uv, { bNewGroup: !1, ...e });
}
function Hv(e, t, n) {
  let { appID: r } = X(),
    [i, a] = P.useState(t?.name ?? {}),
    [o, s] = P.useState(t?.dlcappid),
    [c, l] = P.useState(t?.archived == `1`),
    [u, d] = P.useState(n || t?.developeronly == `1`),
    f = (0, P.useMemo)(
      () => ({
        ...t,
        name: i,
        dlcappid: o,
        archived: c ? `1` : `0`,
        developeronly: u ? `1` : `0`,
      }),
      [i, o, c, u, t],
    ),
    p = Rf(r, n ? `0` : e),
    m = Tm(e, f),
    h = () => {
      (a(t?.name),
        s(t?.dlcappid),
        l(t?.archived == `1`),
        d(n || t?.developeronly == `1`));
    },
    g = async () => await p.mutateAsync(f),
    _ = p.isPending;
  return {
    editGroupName: i,
    setEditGroupName: a,
    editAppID: o,
    setEditAppID: s,
    editIsArchived: c,
    setEditIsArchived: l,
    editDeveloperOnly: u,
    setEditDeveloperOnly: d,
    isNewGroup: n ?? !1,
    visibility: m,
    reset: h,
    save: g,
    isPending: _,
    error: p.error?.message,
  };
}
function Uv(e) {
  let { groupid: t, group: n, bNewGroup: r } = e,
    i = Hv(t, n, r),
    a = (0, P.useRef)(null);
  return (
    (0, P.useEffect)(() => {
      a?.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    }, []),
    (0, F.jsx)(Gv, { ref: a, ...e, state: i })
  );
}
function Wv(e) {
  let { value: t, setValue: n } = e,
    { appID: r } = X(),
    i = jf(r),
    a = (0, P.useMemo)(() => new Map(i.map((e) => [e.appid, e.name])), [i]),
    o = (0, P.useCallback)(
      (e) =>
        (e ?? `0`) == `0`
          ? `(${r}) ${k(`#AchievementEditor_Group_Field_Restrictions_Value_AllPlayers`)}`
          : `(${e}) ${a.get(e)}`,
      [a, r],
    ),
    s = Array.from(
      new Set(
        i
          .sort((e, t) => (e.name ?? ``).localeCompare(t.name ?? ``))
          .map((e) => e.appid),
      ),
    ),
    c = [`0`].concat(s);
  return i.length < 20
    ? (0, F.jsx)(Me, {
        options: c,
        getOptionLabel: o,
        selectedValue: t ?? `0`,
        onSelectionChange: n,
      })
    : (0, F.jsx)(De, {
        options: c,
        getOptionLabel: o,
        selectedValue: t ?? `0`,
        onSelectionChange: n,
        placeholder: ``,
        filterPlaceholder: ``,
      });
}
function Gv(e) {
  let {
      state: t,
      groupid: n,
      bHideSaveCancelButtons: r,
      onSave: a,
      onCancel: o,
      ref: s,
    } = e,
    { appID: c } = X(),
    l = (0, P.useRef)(null);
  (0, P.useEffect)(() => {
    l?.current?.focus();
  }, []);
  let {
      editGroupName: u,
      setEditGroupName: d,
      editAppID: f,
      setEditAppID: p,
      editIsArchived: m,
      setEditIsArchived: h,
      editDeveloperOnly: g,
      setEditDeveloperOnly: _,
      isNewGroup: v,
      visibility: y,
      isPending: b,
    } = t,
    x = t.editAppID !== void 0,
    S = async () => {
      try {
        (await t.save(), a && a());
      } catch {}
    },
    C = () => {
      (t.reset(), o && o());
    },
    w = y.visible ? Y_ : Z_;
  return (0, F.jsxs)(`div`, {
    ref: s,
    className: i(av, pv, w),
    children: [
      (0, F.jsx)(`div`, { className: i(void 0, w) }),
      (0, F.jsx)(`div`, {
        className: ov,
        children: (0, F.jsx)(`div`, {
          className: sv,
          children: (0, F.jsxs)(`div`, {
            className: cv,
            children: [
              !n &&
                !v &&
                (0, F.jsxs)(`div`, {
                  className: `kIbHWH3dJpY-`,
                  children: [
                    (0, F.jsx)(`h1`, {
                      children: k(
                        `#AchievementEditor_Group_CoreGameAchievements_Heading`,
                      ),
                    }),
                    (0, F.jsx)(`p`, {
                      children: k(
                        `#AchievementEditor_Group_CoreGameAchievements_Description`,
                      ),
                    }),
                  ],
                }),
              (0, F.jsx)(`div`, {
                children: v
                  ? (0, F.jsx)(`div`, {
                      className: void 0,
                      children: (0, F.jsx)(`h1`, {
                        children: k(
                          `#AchievementEditor_AchievementsTable_Header_CreateGroup`,
                        ),
                      }),
                    })
                  : (0, F.jsx)(`div`, {
                      className: void 0,
                      children: (0, F.jsx)(`h1`, {
                        children: k(`#AchievementEditor_Group_Tools_Edit`),
                      }),
                    }),
              }),
              (0, F.jsxs)(`div`, {
                className: lv,
                children: [
                  (0, F.jsxs)(`div`, {
                    children: [
                      (0, F.jsxs)(`div`, {
                        children: [
                          k(`#AchievementEditor_Group_Field_Restrictions`),
                          `:`,
                        ],
                      }),
                      (0, F.jsxs)(`div`, {
                        children: [
                          (0, F.jsxs)(`p`, {
                            children: [
                              k(
                                `#AchievementEditor_Group_Edit_Field_Restrictions_Description`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, F.jsx)(Wv, { value: f, setValue: p }),
                          (0, F.jsx)(Lv, { ...y }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    className: uv,
                    children: [
                      (!!n || v) &&
                        (0, F.jsxs)(`div`, {
                          children: [
                            (0, F.jsxs)(j, {
                              children: [
                                (0, F.jsxs)(j, {
                                  flexGrow: `1`,
                                  children: [
                                    k(`#AchievementEditor_Group_Field_Name`),
                                    `:`,
                                  ],
                                }),
                                x &&
                                  (0, F.jsx)(j, {
                                    children: (0, F.jsx)(`p`, {
                                      children: k(
                                        `#AchievementEditor_Group_Edit_Field_Name_DlcPrefix`,
                                      ),
                                    }),
                                  }),
                              ],
                            }),
                            (0, F.jsxs)(`div`, {
                              children: [
                                (0, F.jsxs)(`div`, {
                                  children: [
                                    k(
                                      `#AchievementEditor_Group_Edit_Field_Name_Description`,
                                    ),
                                    ` `,
                                    (0, F.jsx)(em, { locstring: u }),
                                  ],
                                }),
                                (0, F.jsx)(nm, {
                                  autofocus: !0,
                                  value: u,
                                  setValue: d,
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, F.jsxs)(`div`, {
                        children: [
                          (0, F.jsx)(`div`, {
                            children: k(
                              `#AchievementEditor_Group_Field_DeveloperOnly`,
                            ),
                          }),
                          (0, F.jsx)(`div`, {
                            children: (0, F.jsx)(ke, {
                              background: `dull-9`,
                              flexGrow: `1`,
                              padding: `1`,
                              radius: `sm`,
                              children: (0, F.jsx)(Ae, {
                                checked: g,
                                onChange: _,
                                children: k(
                                  `#AchievementEditor_Group_Field_DeveloperOnly`,
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      !v &&
                        (0, F.jsxs)(`div`, {
                          children: [
                            (0, F.jsxs)(`div`, {
                              children: [
                                k(`#AchievementEditor_Group_Field_Archive`),
                                `:`,
                              ],
                            }),
                            (0, F.jsx)(`div`, {
                              children: (0, F.jsx)(ke, {
                                background: `dull-9`,
                                flexGrow: `1`,
                                padding: `1`,
                                radius: `sm`,
                                children: (0, F.jsx)(Ae, {
                                  checked: m,
                                  onChange: h,
                                  children: k(
                                    `#AchievementEditor_Group_Field_IsArchived`,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      (0, F.jsxs)(`div`, {
                        className: void 0,
                        children: [
                          (0, F.jsxs)(`div`, {
                            children: [
                              k(`#AchievementEditor_Group_Field_Visibility`),
                              `:`,
                            ],
                          }),
                          (0, F.jsx)(`div`, {
                            children: (0, F.jsx)(zv, { ...y }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              !r &&
                (0, F.jsx)(dm, {
                  onSave: S,
                  onCancel: C,
                  pending: b,
                  error: t.error,
                }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Kv(e) {
  let { groupid: t, group: n, hideModal: r } = e,
    { appID: i } = X(),
    a = Bf(i, t),
    o = Cf(i, t),
    s = Tm(t, n),
    c = !o || o.length === 0,
    l = () => a.mutate(void 0, { onSuccess: r });
  return (0, F.jsx)(Re, {
    active: !0,
    children: (0, F.jsx)(E, {
      onEscKeypress: r,
      children: (0, F.jsxs)(C, {
        className: hv,
        children: [
          (0, F.jsx)(le, {
            children: k(`#AchievementEditor_Group_Delete_Dialog_Title`),
          }),
          (0, F.jsxs)(ae, {
            children: [
              !c &&
                (0, F.jsxs)(j, {
                  direction: `row`,
                  gap: `2`,
                  padding: `2`,
                  align: `center`,
                  background: `red-7`,
                  style: { color: `var(--color-text-light-title)` },
                  children: [
                    (0, F.jsx)(lm, {}),
                    (0, F.jsx)(N, {
                      contrast: `title`,
                      children: k(
                        `#AchievementEditor_Group_Delete_Dialog_WarnNonEmptyGroup`,
                      ),
                    }),
                  ],
                }),
              (0, F.jsxs)(j, {
                direction: `column`,
                gap: `1`,
                padding: `2`,
                className: gv,
                children: [
                  (0, F.jsxs)(N, {
                    children: [
                      k(`#AchievementEditor_Group_Field_Name`),
                      `: `,
                      Q(n?.name, `english`) ?? n?.name.token,
                    ],
                  }),
                  (0, F.jsx)(zv, { ...s }),
                ],
              }),
            ],
          }),
          (0, F.jsx)(p, {
            children: (0, F.jsx)(dm, {
              saveText: k(`#AchievementEditor_Group_Delete_Dialog_Delete`),
              saveColor: `red`,
              saveDisabled: !c,
              pending: a.isPending,
              error: a.error?.message,
              onCancel: r,
              onSave: l,
            }),
          }),
        ],
      }),
    }),
  });
}
var $ = {};
(($.arabic = () =>
  T(() => import(`./chunk~683330fb43.js`), [], import.meta.url)),
  ($.brazilian = () =>
    T(() => import(`./chunk~a092112af2.js`), [], import.meta.url)),
  ($.bulgarian = () =>
    T(() => import(`./chunk~0f3dd6e064.js`), [], import.meta.url)),
  ($.czech = () =>
    T(() => import(`./chunk~0e90ce0409.js`), [], import.meta.url)),
  ($.danish = () =>
    T(() => import(`./chunk~55562726d1.js`), [], import.meta.url)),
  ($.dutch = () =>
    T(() => import(`./chunk~2a1bb8dd6e.js`), [], import.meta.url)),
  ($.english = () =>
    T(() => import(`./chunk~66b39f1b71.js`), [], import.meta.url)),
  ($.finnish = () =>
    T(() => import(`./chunk~4b203361b4.js`), [], import.meta.url)),
  ($.french = () =>
    T(() => import(`./chunk~ca56305aa3.js`), [], import.meta.url)),
  ($.german = () =>
    T(() => import(`./chunk~2db96bf1ec.js`), [], import.meta.url)),
  ($.greek = () =>
    T(() => import(`./chunk~860bd36530.js`), [], import.meta.url)),
  ($.hungarian = () =>
    T(() => import(`./chunk~194ddf5dae.js`), [], import.meta.url)),
  ($.indonesian = () =>
    T(() => import(`./chunk~fd7db467fd.js`), [], import.meta.url)),
  ($.italian = () =>
    T(() => import(`./chunk~b5c6702f4a.js`), [], import.meta.url)),
  ($.japanese = () =>
    T(() => import(`./chunk~b071ae8cc6.js`), [], import.meta.url)),
  ($.koreana = () =>
    T(() => import(`./chunk~4ce1b73f61.js`), [], import.meta.url)),
  ($.latam = () =>
    T(() => import(`./chunk~0200bdc406.js`), [], import.meta.url)),
  ($.malay = () =>
    T(() => import(`./chunk~f8ffa5e1f5.js`), [], import.meta.url)),
  ($.norwegian = () =>
    T(() => import(`./chunk~646f255860.js`), [], import.meta.url)),
  ($.polish = () =>
    T(() => import(`./chunk~24a264bf92.js`), [], import.meta.url)),
  ($.portuguese = () =>
    T(() => import(`./chunk~caa0d51498.js`), [], import.meta.url)),
  ($.romanian = () =>
    T(() => import(`./chunk~7df7a2b83e.js`), [], import.meta.url)),
  ($.russian = () =>
    T(() => import(`./chunk~b209db5e20.js`), [], import.meta.url)),
  ($.sc_schinese = () =>
    T(() => import(`./chunk~c7658b2d82.js`), [], import.meta.url)),
  ($.schinese = () =>
    T(() => import(`./chunk~7e5877bf83.js`), [], import.meta.url)),
  ($.spanish = () =>
    T(() => import(`./chunk~173fcc0fb1.js`), [], import.meta.url)),
  ($.swedish = () =>
    T(() => import(`./chunk~8496f445a8.js`), [], import.meta.url)),
  ($.tchinese = () =>
    T(() => import(`./chunk~5cdee232e4.js`), [], import.meta.url)),
  ($.thai = () =>
    T(() => import(`./chunk~b5c5a2b6f1.js`), [], import.meta.url)),
  ($.turkish = () =>
    T(() => import(`./chunk~80a07a9ebf.js`), [], import.meta.url)),
  ($.ukrainian = () =>
    T(() => import(`./chunk~e71cad93d4.js`), [], import.meta.url)),
  ($.vietnamese = () =>
    T(() => import(`./chunk~d0b709512d.js`), [], import.meta.url)));
async function qv(e) {
  if ($[e]) return await $[e]();
}
var Jv = xe(qv),
  Yv = `steamQueryPersist`,
  Xv = P.createContext(void 0);
Xv.Provider;
function Zv(e) {
  let { area: t, maxAgeSeconds: n, meta: r, ...i } = e,
    a = P.useContext(Xv),
    o = P.useMemo(() => Qv(r, t, n), [r, t, n]);
  return Ce({ ...i, meta: o, persister: a?.GetPersister(t) });
}
function Qv(e, t, n) {
  return { ...e, [Yv]: { area: t, maxAgeSeconds: n } };
}
function $v(e, ...t) {
  return [`achievements`, e, ...t];
}
var ey = (e) => $v(e, `schema_v2`);
async function ty(e, t, n, r) {
  return (await r?.(t)) ?? ny(e, t, n);
}
async function ny(e, t, n) {
  let r = await Ue.GetGameAchievements(e, { appid: t, language: n });
  if (r.GetEResult() === 42)
    return {
      appid: t,
      language: n,
      groups: [],
      schema_hash: 0,
      schema_version: 0,
    };
  if (oy(r)) throw new ay();
  if (r.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetGameAchievements`, r.GetEResult()),
      Error(`Error from GetGameAchievements: ${r.GetEResult()}`)
    );
  let i = {};
  return (
    (i[0] = {
      id: 0,
      archived: !1,
      developeronly: !1,
      ispublic: !0,
      dlcappid: 0,
      order: -1,
      achievements: [],
    }),
    r.Body().groups().toString(),
    r
      .Body()
      .groups()
      .forEach((e) => {
        let t = e.groupid();
        i[t] = {
          id: t,
          name: e.localized_name(),
          archived: e.archived() ?? !1,
          ispublic: e.ispublic() ?? !0,
          developeronly: e.developeronly() ?? !1,
          dlcappid: e.dlcappid() ?? 0,
          order: e.order() ?? 0,
          achievements: [],
        };
      }),
    r
      .Body()
      .toObject()
      ?.achievements?.forEach((e) => {
        let t = e.groupid ?? 0;
        i[t].achievements.push({
          internal_key: e.internal_key ?? 0,
          api_name: e.internal_name ?? ``,
          name: e.localized_name,
          description: e.localized_desc,
          hidden: e.hidden ?? !1,
          archived: e.archived ?? !1,
          icon_achieved: e.icon || void 0,
          icon_unachieved: e.icon_gray || void 0,
          groupid: e.groupid ?? 0,
          min_progress: e.min_progress_int ?? e.min_progress_float,
          max_progress: e.max_progress_int ?? e.max_progress_float,
        });
      }),
    {
      appid: t,
      language: n,
      groups: Object.values(i)
        .filter((e) => e.achievements.length > 0)
        .sort((e, t) => e.order - t.order),
      schema_hash: r.Body()?.schema_hash() ?? 0,
      schema_version: r.Body()?.schema_version() ?? 0,
    }
  );
}
var ry = (e) => $v(e, `globalpercentages`);
async function iy(e, t) {
  let n = await Ue.GetGlobalAchievementPercentages(e, { appid: t });
  if (n.GetEResult() === 42) return { percentages: {} };
  if (oy(n)) throw new ay();
  if (n.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetGlobalAchievementPercentages`,
        n.GetEResult(),
      ),
      Error(`Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`)
    );
  return {
    percentages: n
      .Body()
      .achievements()
      .reduce((e, t) => {
        let n = t.internal_key();
        return (n === void 0 || (e[n] = t.player_percent_unlocked() ?? 0.1), e);
      }, {}),
  };
}
var ay = class extends Error {
  constructor() {
    super(`Achievements request: server unreachable`);
  }
};
function oy(e) {
  let t = e.Hdr().transport_error();
  return t === 2 || t === 3 || e.GetEResult() === 3;
}
var sy = (0, P.createContext)({});
function cy() {
  return (0, P.useContext)(sy);
}
function ly(e) {
  return e?.bNoRetryOnError
    ? {
        retry: !1,
        retryOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    : {};
}
function uy(e, t) {
  return !(t instanceof ay) && e < 3;
}
function dy(e, t) {
  return `${n.BASE_URL_SHARED_CDN}community_assets/images/apps/${e}/${t}`;
}
function fy(e, t, n) {
  return {
    ...t,
    icon_achieved: t.icon_achieved ? n(e, t.icon_achieved) : void 0,
    icon_unachieved: t.icon_unachieved ? n(e, t.icon_unachieved) : void 0,
  };
}
function py(e, t) {
  return {
    ...e,
    groups: e.groups.map((n) => ({
      ...n,
      name: n.id === 0 ? Jv.Localize(`#Achievements_Set_BaseGame`) : n.name,
      achievements: n.achievements.map((n) => fy(e.appid, n, t)),
    })),
  };
}
function my(e, t, r) {
  return {
    queryKey: ey(t),
    queryFn: () => ty(e, t, n.LANGUAGE, r),
    staleTime: 864e5,
    retry: uy,
    area: `achievements`,
  };
}
function hy(e, t) {
  let n = Se(),
    { fnGetAchievementIconURL: r = dy, fnFetchLocalGameAchievements: i } = cy(),
    a = (0, P.useCallback)((e) => py(e, r), [r]);
  return Zv({ ...my(n, e, i), select: a, ...ly(t) });
}
function gy(e, t) {
  return {
    queryKey: ry(t),
    queryFn: async () => iy(e, t),
    staleTime: 864e5,
    retry: uy,
    area: `achievements`,
  };
}
function _y(e, t) {
  return Zv({ ...gy(Se(), e), ...ly(t) });
}
function vy(e) {
  let { appId: n } = e,
    r = t(`icon_cdn_root`, `application_config`),
    [a, o] = (0, P.useState)(`english`),
    [s, c] = (0, P.useState)(``),
    [l, u] = (0, P.useState)(!1),
    [d, f] = (0, P.useState)(!1),
    p = hy(n, { bNoRetryOnError: !0 }),
    { data: m } = _y(n, { bNoRetryOnError: !0 });
  kf(n);
  let h = {
      appID: n,
      cdnRoot: r,
      localization: { currentLanguage: a, setCurrentLanguage: o },
      filter: s,
      existingAchievements: p.data,
      existingAchievementUnlockPercentages: m,
    },
    [g, _] = (0, P.useState)(!1),
    [v, y] = (0, P.useState)(),
    [b, x] = (0, P.useState)(!1),
    [S, C] = (0, P.useState)(`main`),
    w = {
      main: {
        label: k(`#AchievementEditor_Tab_ManageAchievements`),
        render: () =>
          (0, F.jsx)(Dv, {
            reordering: l,
            setReordering: u,
            creatingNewGroup: d,
            setCreatingNewGroup: f,
          }),
      },
      bulk: {
        label: k(`#AchievementEditor_Tab_BulkImportExport`),
        render: () =>
          (0, F.jsx)(dg, { onClose: () => C(`main`), setHasChanges: x }),
      },
    };
  return (0, F.jsxs)(df, {
    value: h,
    children: [
      (0, F.jsxs)(`div`, {
        className: i(Hg, `noOpinionatedGlobalStyles`),
        children: [
          (0, F.jsx)(xy, {}),
          (0, F.jsx)(yy, {
            options: Object.keys(w),
            getOptionLabel: (e) => w[e].label,
            selectedOption: S,
            onChange: (e) => {
              S == `bulk` && b ? (y(e), _(!0)) : C(e);
            },
          }),
          S == `main` &&
            (0, F.jsx)(by, {
              filter: s,
              setFilter: c,
              showFilter: S == `main`,
              reordering: l,
              setReordering: u,
              showReorder: S == `main`,
              creatingNewGroup: d,
              setCreatingNewGroup: f,
              showCreateNewGroup: S == `main`,
            }),
          w[S].render(),
        ],
      }),
      g &&
        (0, F.jsx)(wm, {
          onCancel: () => _(!1),
          onOk: () => {
            (_(!1), x(!1), C(v), y(void 0));
          },
          okText: k(`#Button_Confirm`),
          children: k(`#AchievementEditor_TabBar_BulkUnsavedConfirm`),
        }),
    ],
  });
}
function yy(e) {
  let { options: t, getOptionLabel: n, selectedOption: r, onChange: i } = e;
  return (0, F.jsx)(`div`, {
    className: Wg,
    children: t.map((e) =>
      e == r
        ? (0, F.jsx)(`div`, { className: Gg, children: n ? n(e) : e }, e)
        : (0, F.jsx)(`div`, { onClick: () => i(e), children: n ? n(e) : e }, e),
    ),
  });
}
function by(e) {
  let {
      filter: t,
      setFilter: n,
      showFilter: r,
      reordering: i,
      setReordering: a,
      showReorder: o,
      creatingNewGroup: s,
      setCreatingNewGroup: c,
      showCreateNewGroup: l,
    } = e,
    u = $p(),
    d = Object.values(u).every((e) => e.set == e.total),
    [f, p] = (0, P.useState)(!1);
  return (0, F.jsxs)(`div`, {
    className: Kg,
    children: [
      (0, F.jsxs)(`div`, {
        children: [
          r &&
            (0, F.jsx)(`div`, {
              children: (0, F.jsx)(`h3`, {
                children: k(`#AchievementEditor_Toolbar_Filter_Title`),
              }),
            }),
          (0, F.jsx)(`div`, {
            children: (0, F.jsx)(`h3`, {
              children: (0, F.jsxs)(j, {
                direction: `row`,
                gap: `1`,
                align: `center`,
                children: [
                  k(`#LanguageTitle`),
                  !d &&
                    (0, F.jsx)(O, {
                      toolTipContent: k(
                        `#AchievementEditor_Toolbar_Localization_WarnIncomplete`,
                      ),
                      style: { height: `1.2em` },
                      children: (0, F.jsx)(lm, {
                        color: `var(--color-warning)`,
                      }),
                    }),
                  (0, F.jsx)(O, {
                    toolTipContent: k(
                      `#AchievementEditor_Toolbar_Localization_Edit`,
                    ),
                    style: { height: `1.2em` },
                    children: (0, F.jsx)(mm, {
                      onClick: () => p(!0),
                      className: qg,
                    }),
                  }),
                ],
              }),
            }),
          }),
          (0, F.jsx)(`div`, {}),
        ],
      }),
      (0, F.jsxs)(`div`, {
        children: [
          r &&
            (0, F.jsx)(`div`, {
              children: (0, F.jsx)(Fe, {
                variant: `inset`,
                placeholder: k(`#AchievementEditor_Toolbar_Filter_Placeholder`),
                value: t,
                onTextChange: n,
                clearable: !0,
              }),
            }),
          (0, F.jsx)(`div`, { children: (0, F.jsx)(em, {}) }),
          (0, F.jsxs)(j, {
            direction: `row`,
            gap: `3`,
            justify: `end`,
            children: [
              l &&
                !s &&
                (0, F.jsx)(O, {
                  toolTipContent: k(
                    `#AchievementEditor_Button_CreateNewGroup_Tooltip`,
                  ),
                  style: {
                    verticalAlign: `middle`,
                    maxWidth: `300px`,
                    whiteSpace: `normal`,
                  },
                  children: (0, F.jsxs)(M, {
                    variant: `vibrant`,
                    disabled: i,
                    onClick: () => c(!0),
                    children: [
                      (0, F.jsx)(m, {
                        width: `14`,
                        height: `14`,
                        fill: `currentColor`,
                        className: `fsopArsbaW0-`,
                      }),
                      ` `,
                      k(`#AchievementEditor_Button_CreateNewGroup`),
                    ],
                  }),
                }),
              o &&
                !i &&
                (0, F.jsx)(O, {
                  toolTipContent: k(`#AchievementEditor_Reorder_Description`),
                  style: {
                    verticalAlign: `middle`,
                    maxWidth: `300px`,
                    whiteSpace: `normal`,
                  },
                  children: (0, F.jsx)(fm, { onClick: () => a(!0) }),
                }),
            ],
          }),
        ],
      }),
      f && (0, F.jsx)(im, { onClose: () => p(!1) }),
    ],
  });
}
function xy(e) {
  let { appID: t } = X(),
    n = o.steamid,
    r = `${s.COMMUNITY_BASE_URL}profiles/${n}/achievements/${t}`,
    i = `${s.PARTNER_BASE_URL}doc/features/achievements`,
    a = `${i}#5`,
    c = hf(t),
    l = Sf(t)?.length ?? 0,
    u = gf(t);
  return (0, F.jsxs)(`div`, {
    className: Ug,
    children: [
      (0, F.jsx)(`div`, {
        className: Ke,
        children: (0, F.jsxs)(`div`, {
          className: Ge,
          children: [
            (0, F.jsx)(`div`, {
              className: We,
              children: k(`#AchievementEditor_title`),
            }),
            (0, F.jsx)(Pe, {
              href: i,
              children: k(`#AssetRequest_General_SeeDocs`),
            }),
          ],
        }),
      }),
      (0, F.jsxs)(`div`, {
        className: Vg,
        children: [
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  k(`#AchievementEditor_Description_Title_Overview`),
                  `:`,
                ],
              }),
              (0, F.jsx)(`div`, {
                children: k(`#AchievementEditor_Description_Overview`),
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  k(`#AchievementEditor_Description_Title_Requirements`),
                  `:`,
                ],
              }),
              (0, F.jsx)(`div`, {
                className: Bg,
                children: ce(
                  `#AchievementEditor_Description_Requirements`,
                  (0, F.jsx)(`a`, {
                    href: `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`,
                  }),
                ),
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  k(`#AchievementEditor_Description_Title_Design`),
                  `:`,
                ],
              }),
              (0, F.jsx)(`div`, {
                children: k(`#AchievementEditor_Description_Design`),
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [k(`#AchievementEditor_Header_GroupList`), `:`],
              }),
              (0, F.jsx)(`div`, {
                children: k(`#AchievementEditor_Description_GroupList`),
              }),
            ],
          }),
          !!c &&
            (0, F.jsxs)(`div`, {
              children: [
                (0, F.jsxs)(`div`, {
                  children: [
                    k(`#AchievementEditor_Description_Title_Limit`),
                    `:`,
                  ],
                }),
                (0, F.jsxs)(`div`, {
                  children: [
                    k(
                      `#AchievementEditor_Description_Limit`,
                      l,
                      c.max_achievements,
                    ),
                    !c.vetted &&
                      (0, F.jsxs)(F.Fragment, {
                        children: [
                          ` `,
                          ue(
                            k(
                              `#AchievementEditor_Description_Limit_Unvetted`,
                              c.max_achievements,
                            ),
                            (0, F.jsx)(`a`, { href: a }),
                          ),
                        ],
                      }),
                    ` `,
                    k(
                      `#AchievementEditor_Description_Limit_Groups`,
                      u,
                      c.max_groups,
                    ),
                  ],
                }),
              ],
            }),
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  k(`#AchievementEditor_Description_Title_Testing`),
                  `:`,
                ],
              }),
              (0, F.jsx)(`div`, {
                children: ce(
                  `#AchievementEditor_Description_Testing`,
                  (0, F.jsx)(`a`, { href: r }),
                ),
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                children: [
                  k(`#AchievementEditor_Description_Title_Releasing`),
                  `:`,
                ],
              }),
              (0, F.jsx)(`div`, {
                children: ce(
                  `#AchievementEditor_Description_Releasing`,
                  (0, F.jsx)(`a`, {
                    href: `${s.PARTNER_BASE_URL}admin/game/editbyappid/${t}?activetab=tab_basic#feature_section`,
                  }),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { vy as default };
