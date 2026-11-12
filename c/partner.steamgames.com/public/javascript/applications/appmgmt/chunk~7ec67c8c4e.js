import { _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~0a99e05c44.js";
import { _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~f8b6a4beb3.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~6257ebd2d4.js";
import { _ } from "./chunk~e29b7ee76a.js";
import { _, _, _ } from "./chunk~91ffd0567f.js";
import { _, _ } from "./chunk~971d501580.js";
import { _ } from "./chunk~baca8b8889.js";
import { _ } from "./chunk~a58194c5d9.js";
import { _, _, _, _ } from "./chunk~c12081e677.js";
import { _ } from "./chunk~cfd048ddd7.js";
import { _ } from "./chunk~0aa5028ef4.js";
import { _ } from "./chunk~93195fc4a9.js";
import { _ } from "./chunk~16aefcf65f.js";
import { _ } from "./chunk~8681f5c764.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~4571d27d07.js";
import { _ } from "./chunk~9658266888.js";
import { _ } from "./chunk~f25232ab1e.js";
import { _, _, _ } from "./chunk~6110f63e8e.js";
import { _ } from "./chunk~f8f9713b0c.js";
import { _, _, _ } from "./chunk~f95b379b4d.js";
import { _ } from "./chunk~7e6646f5a7.js";
var _ = `sgMEGCsNg7c-`,
  _ = `zSTkW-sxkis-`,
  _ = `s682fjGpPIQ-`,
  _ = `_3FHQnSAvzY8-`,
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
    onClose: _,
    className: _,
    navID: _,
    children: _,
    strTitle: _,
    wideMode: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: _ ?? `SimpleModalDialog`,
    ..._,
    children: (0, _.jsxs)(`div`, {
      className: (0, _.default)(_, _, _ && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `pxN-7GRnbkY-`,
                children: _,
              }),
            (0, _.jsx)(`button`, {
              onClick: (_) => (_(`xclick`), _.preventDefault(), !1),
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}
var _ = Symbol(`CoercingTextInputNotParseable`);
function _(_) {
  let {
      value: _,
      onValueChange: _,
      valueToString: _,
      valueFromString: _,
      checkValidText: _,
      onBlur: _,
      onKeyDown: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? (_ === void 0 ? `` : _(_)),
    _ = (_) => {
      let _ = _(_);
      _ !== _ && _ === _(_)
        ? (_(null), _(_))
        : (!_ || _(_, _)) && (_(_), _ !== _ && _(_, !0));
    },
    _ = () => {
      if (_ !== null) {
        let _ = _(_);
        (_ !== _ && _(_), _(null));
      }
    };
  return (0, _.jsx)(_, {
    value: _,
    onTextChange: _,
    onKeyDown: (_) => {
      (_.key === `Enter` && _(), _ && _(_));
    },
    onBlur: (_) => {
      (_(), _ && _(_));
    },
    ..._,
  });
}
var _ = _((_) => {
    ((_.read = function (_, _, _, _, _) {
      var _,
        _,
        _ = _ * 8 - _ - 1,
        _ = (1 << _) - 1,
        _ = _ >> 1,
        _ = -7,
        _ = _ ? _ - 1 : 0,
        _ = _ ? -1 : 1,
        _ = _[_ + _];
      for (
        _ += _, _ = _ & ((1 << -_) - 1), _ >>= -_, _ += _;
        _ > 0;
        _ = _ * 256 + _[_ + _], _ += _, _ -= 8
      );
      for (
        _ = _ & ((1 << -_) - 1), _ >>= -_, _ += _;
        _ > 0;
        _ = _ * 256 + _[_ + _], _ += _, _ -= 8
      );
      if (_ === 0) _ = 1 - _;
      else if (_ === _) return _ ? NaN : (_ ? -1 : 1) * (1 / 0);
      else ((_ += 2 ** _), (_ -= _));
      return (_ ? -1 : 1) * _ * 2 ** (_ - _);
    }),
      (_.write = function (_, _, _, _, _, _) {
        var _,
          _,
          _,
          _ = _ * 8 - _ - 1,
          _ = (1 << _) - 1,
          _ = _ >> 1,
          _ = _ === 23 ? 2 ** -24 - 2 ** -77 : 0,
          _ = _ ? 0 : _ - 1,
          _ = _ ? 1 : -1,
          _ = +(_ < 0 || (_ === 0 && 1 / _ < 0));
        for (
          _ = Math.abs(_),
            isNaN(_) || _ === 1 / 0
              ? ((_ = +!!isNaN(_)), (_ = _))
              : ((_ = Math.floor(Math.log(_) / Math.LN2)),
                _ * (_ = 2 ** -_) < 1 && (_--, (_ *= 2)),
                _ + _ >= 1 ? (_ += _ / _) : (_ += _ * 2 ** (1 - _)),
                _ * _ >= 2 && (_++, (_ /= 2)),
                _ + _ >= _
                  ? ((_ = 0), (_ = _))
                  : _ + _ >= 1
                    ? ((_ = (_ * _ - 1) * 2 ** _), (_ += _))
                    : ((_ = _ * 2 ** (_ - 1) * 2 ** _), (_ = 0)));
          _ >= 8;
          _[_ + _] = _ & 255, _ += _, _ /= 256, _ -= 8
        );
        for (
          _ = (_ << _) | _, _ += _;
          _ > 0;
          _[_ + _] = _ & 255, _ += _, _ /= 256, _ -= 8
        );
        _[_ + _ - _] |= _ * 128;
      }));
  }),
  _ = _((_) => {
    var _ = _(),
      _ = _(),
      _ =
        typeof Symbol == `function` && typeof Symbol.for == `function`
          ? Symbol.for(`nodejs.util.inspect.custom`)
          : null;
    ((_.Buffer = _), (_.SlowBuffer = _), (_.INSPECT_MAX_BYTES = 50));
    var _ = 2147483647;
    ((_.kMaxLength = _),
      (_.TYPED_ARRAY_SUPPORT = _()),
      !_.TYPED_ARRAY_SUPPORT &&
        typeof console < `u` &&
        typeof console.error == `function` &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
        ));
    function _() {
      try {
        let _ = new Uint8Array(1),
          _ = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(_, Uint8Array.prototype),
          Object.setPrototypeOf(_, _),
          _.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    (Object.defineProperty(_.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (_.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(_.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (_.isBuffer(this)) return this.byteOffset;
        },
      }));
    function _(_) {
      if (_ > _)
        throw RangeError(`The value "` + _ + `" is invalid for option "size"`);
      let _ = new Uint8Array(_);
      return (Object.setPrototypeOf(_, _.prototype), _);
    }
    function _(_, _, _) {
      if (typeof _ == `number`) {
        if (typeof _ == `string`)
          throw TypeError(
            `The "string" argument must be of type string. Received type number`,
          );
        return _(_);
      }
      return _(_, _, _);
    }
    _.poolSize = 8192;
    function _(_, _, _) {
      if (typeof _ == `string`) return _(_, _);
      if (ArrayBuffer.isView(_)) return _(_);
      if (_ == null)
        throw TypeError(
          `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` +
            typeof _,
        );
      if (
        _(_, ArrayBuffer) ||
        (_ && _(_.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < `u` &&
          (_(_, SharedArrayBuffer) || (_ && _(_.buffer, SharedArrayBuffer))))
      )
        return _(_, _, _);
      if (typeof _ == `number`)
        throw TypeError(
          `The "value" argument must not be of type number. Received type number`,
        );
      let _ = _.valueOf && _.valueOf();
      if (_ != null && _ !== _) return _.from(_, _, _);
      let _ = _(_);
      if (_) return _;
      if (
        typeof Symbol < `u` &&
        Symbol.toPrimitive != null &&
        typeof _[Symbol.toPrimitive] == `function`
      )
        return _.from(_[Symbol.toPrimitive](`string`), _, _);
      throw TypeError(
        `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` +
          typeof _,
      );
    }
    ((_.from = function (_, _, _) {
      return _(_, _, _);
    }),
      Object.setPrototypeOf(_.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(_, Uint8Array));
    function _(_) {
      if (typeof _ != `number`)
        throw TypeError(`"size" argument must be of type number`);
      if (_ < 0)
        throw RangeError(`The value "` + _ + `" is invalid for option "size"`);
    }
    function _(_, _, _) {
      return (
        _(_),
        _ <= 0 || _ === void 0
          ? _(_)
          : typeof _ == `string`
            ? _(_).fill(_, _)
            : _(_).fill(_)
      );
    }
    _.alloc = function (_, _, _) {
      return _(_, _, _);
    };
    function _(_) {
      return (_(_), _(_ < 0 ? 0 : _(_) | 0));
    }
    ((_.allocUnsafe = function (_) {
      return _(_);
    }),
      (_.allocUnsafeSlow = function (_) {
        return _(_);
      }));
    function _(_, _) {
      if (
        ((typeof _ != `string` || _ === ``) && (_ = `utf8`), !_.isEncoding(_))
      )
        throw TypeError(`Unknown encoding: ` + _);
      let _ = _(_, _) | 0,
        _ = _(_),
        _ = _.write(_, _);
      return (_ !== _ && (_ = _.slice(0, _)), _);
    }
    function _(_) {
      let _ = _.length < 0 ? 0 : _(_.length) | 0,
        _ = _(_);
      for (let _ = 0; _ < _; _ += 1) _[_] = _[_] & 255;
      return _;
    }
    function _(_) {
      if (_(_, Uint8Array)) {
        let _ = new Uint8Array(_);
        return _(_.buffer, _.byteOffset, _.byteLength);
      }
      return _(_);
    }
    function _(_, _, _) {
      if (_ < 0 || _.byteLength < _)
        throw RangeError(`"offset" is outside of buffer bounds`);
      if (_.byteLength < _ + (_ || 0))
        throw RangeError(`"length" is outside of buffer bounds`);
      let _;
      return (
        (_ =
          _ === void 0 && _ === void 0
            ? new Uint8Array(_)
            : _ === void 0
              ? new Uint8Array(_, _)
              : new Uint8Array(_, _, _)),
        Object.setPrototypeOf(_, _.prototype),
        _
      );
    }
    function _(_) {
      if (_.isBuffer(_)) {
        let _ = _(_.length) | 0,
          _ = _(_);
        return (_.length === 0 || _.copy(_, 0, 0, _), _);
      }
      if (_.length !== void 0)
        return typeof _.length != `number` || _(_.length) ? _(0) : _(_);
      if (_.type === `Buffer` && Array.isArray(_.data)) return _(_.data);
    }
    function _(_) {
      if (_ >= _)
        throw RangeError(
          `Attempt to allocate Buffer larger than maximum size: 0x` +
            _.toString(16) +
            ` bytes`,
        );
      return _ | 0;
    }
    function _(_) {
      return (+_ != _ && (_ = 0), _.alloc(+_));
    }
    ((_.isBuffer = function (_) {
      return _ != null && _._isBuffer === !0 && _ !== _.prototype;
    }),
      (_.compare = function (_, _) {
        if (
          (_(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
          _(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
          !_.isBuffer(_) || !_.isBuffer(_))
        )
          throw TypeError(
            `The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`,
          );
        if (_ === _) return 0;
        let _ = _.length,
          _ = _.length;
        for (let _ = 0, _ = Math.min(_, _); _ < _; ++_)
          if (_[_] !== _[_]) {
            ((_ = _[_]), (_ = _[_]));
            break;
          }
        return _ < _ ? -1 : +(_ < _);
      }),
      (_.isEncoding = function (_) {
        switch (String(_).toLowerCase()) {
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
      (_.concat = function (_, _) {
        if (!Array.isArray(_))
          throw TypeError(`"list" argument must be an Array of Buffers`);
        if (_.length === 0) return _.alloc(0);
        let _;
        if (_ === void 0)
          for (_ = 0, _ = 0; _ < _.length; ++_) _ += _[_].length;
        let _ = _.allocUnsafe(_),
          _ = 0;
        for (_ = 0; _ < _.length; ++_) {
          let _ = _[_];
          if (_(_, Uint8Array))
            _ + _.length > _.length
              ? (_.isBuffer(_) || (_ = _.from(_)), _.copy(_, _))
              : Uint8Array.prototype.set.call(_, _, _);
          else if (_.isBuffer(_)) _.copy(_, _);
          else throw TypeError(`"list" argument must be an Array of Buffers`);
          _ += _.length;
        }
        return _;
      }));
    function _(_, _) {
      if (_.isBuffer(_)) return _.length;
      if (ArrayBuffer.isView(_) || _(_, ArrayBuffer)) return _.byteLength;
      if (typeof _ != `string`)
        throw TypeError(
          `The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` +
            typeof _,
        );
      let _ = _.length,
        _ = arguments.length > 2 && arguments[2] === !0;
      if (!_ && _ === 0) return 0;
      let _ = !1;
      for (;;)
        switch (_) {
          case `ascii`:
          case `latin1`:
          case `binary`:
            return _;
          case `utf8`:
          case `utf-8`:
            return _(_).length;
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return _ * 2;
          case `hex`:
            return _ >>> 1;
          case `base64`:
            return _(_).length;
          default:
            if (_) return _ ? -1 : _(_).length;
            ((_ = (`` + _).toLowerCase()), (_ = !0));
        }
    }
    _.byteLength = _;
    function _(_, _, _) {
      let _ = !1;
      if (
        ((_ === void 0 || _ < 0) && (_ = 0),
        _ > this.length ||
          ((_ === void 0 || _ > this.length) && (_ = this.length), _ <= 0) ||
          ((_ >>>= 0), (_ >>>= 0), _ <= _))
      )
        return ``;
      for (_ ||= `utf8`; ;)
        switch (_) {
          case `hex`:
            return _(this, _, _);
          case `utf8`:
          case `utf-8`:
            return _(this, _, _);
          case `ascii`:
            return _(this, _, _);
          case `latin1`:
          case `binary`:
            return _(this, _, _);
          case `base64`:
            return _(this, _, _);
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return _(this, _, _);
          default:
            if (_) throw TypeError(`Unknown encoding: ` + _);
            ((_ = (_ + ``).toLowerCase()), (_ = !0));
        }
    }
    _.prototype._isBuffer = !0;
    function _(_, _, _) {
      let _ = _[_];
      ((_[_] = _[_]), (_[_] = _));
    }
    ((_.prototype.swap16 = function () {
      let _ = this.length;
      if (_ % 2 != 0)
        throw RangeError(`Buffer size must be a multiple of 16-bits`);
      for (let _ = 0; _ < _; _ += 2) _(this, _, _ + 1);
      return this;
    }),
      (_.prototype.swap32 = function () {
        let _ = this.length;
        if (_ % 4 != 0)
          throw RangeError(`Buffer size must be a multiple of 32-bits`);
        for (let _ = 0; _ < _; _ += 4)
          (_(this, _, _ + 3), _(this, _ + 1, _ + 2));
        return this;
      }),
      (_.prototype.swap64 = function () {
        let _ = this.length;
        if (_ % 8 != 0)
          throw RangeError(`Buffer size must be a multiple of 64-bits`);
        for (let _ = 0; _ < _; _ += 8)
          (_(this, _, _ + 7),
            _(this, _ + 1, _ + 6),
            _(this, _ + 2, _ + 5),
            _(this, _ + 3, _ + 4));
        return this;
      }),
      (_.prototype.toString = function () {
        let _ = this.length;
        return _ === 0
          ? ``
          : arguments.length === 0
            ? _(this, 0, _)
            : _.apply(this, arguments);
      }),
      (_.prototype.toLocaleString = _.prototype.toString),
      (_.prototype.equals = function (_) {
        if (!_.isBuffer(_)) throw TypeError(`Argument must be a Buffer`);
        return this === _ || _.compare(this, _) === 0;
      }),
      (_.prototype.inspect = function () {
        let _ = ``,
          _ = _.INSPECT_MAX_BYTES;
        return (
          (_ = this.toString(`hex`, 0, _)
            .replace(/(.{2})/g, `$1 `)
            .trim()),
          this.length > _ && (_ += ` ... `),
          `<Buffer ` + _ + `>`
        );
      }),
      _ && (_.prototype[_] = _.prototype.inspect),
      (_.prototype.compare = function (_, _, _, _, _) {
        if (
          (_(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
          !_.isBuffer(_))
        )
          throw TypeError(
            `The "target" argument must be one of type Buffer or Uint8Array. Received type ` +
              typeof _,
          );
        if (
          (_ === void 0 && (_ = 0),
          _ === void 0 && (_ = _ ? _.length : 0),
          _ === void 0 && (_ = 0),
          _ === void 0 && (_ = this.length),
          _ < 0 || _ > _.length || _ < 0 || _ > this.length)
        )
          throw RangeError(`out of range index`);
        if (_ >= _ && _ >= _) return 0;
        if (_ >= _) return -1;
        if (_ >= _) return 1;
        if (((_ >>>= 0), (_ >>>= 0), (_ >>>= 0), (_ >>>= 0), this === _))
          return 0;
        let _ = _ - _,
          _ = _ - _,
          _ = Math.min(_, _),
          _ = this.slice(_, _),
          _ = _.slice(_, _);
        for (let _ = 0; _ < _; ++_)
          if (_[_] !== _[_]) {
            ((_ = _[_]), (_ = _[_]));
            break;
          }
        return _ < _ ? -1 : +(_ < _);
      }));
    function _(_, _, _, _, _) {
      if (_.length === 0) return -1;
      if (
        (typeof _ == `string`
          ? ((_ = _), (_ = 0))
          : _ > 2147483647
            ? (_ = 2147483647)
            : _ < -2147483648 && (_ = -2147483648),
        (_ = +_),
        _(_) && (_ = _ ? 0 : _.length - 1),
        _ < 0 && (_ = _.length + _),
        _ >= _.length)
      ) {
        if (_) return -1;
        _ = _.length - 1;
      } else if (_ < 0) {
        if (_) _ = 0;
        else return -1;
      }
      if ((typeof _ == `string` && (_ = _.from(_, _)), _.isBuffer(_)))
        return _.length === 0 ? -1 : _(_, _, _, _, _);
      if (typeof _ == `number`)
        return (
          (_ &= 255),
          typeof Uint8Array.prototype.indexOf == `function`
            ? _
              ? Uint8Array.prototype.indexOf.call(_, _, _)
              : Uint8Array.prototype.lastIndexOf.call(_, _, _)
            : _(_, [_], _, _, _)
        );
      throw TypeError(`val must be string, number or Buffer`);
    }
    function _(_, _, _, _, _) {
      let _ = 1,
        _ = _.length,
        _ = _.length;
      if (
        _ !== void 0 &&
        ((_ = String(_).toLowerCase()),
        _ === `ucs2` || _ === `ucs-2` || _ === `utf16le` || _ === `utf-16le`)
      ) {
        if (_.length < 2 || _.length < 2) return -1;
        ((_ = 2), (_ /= 2), (_ /= 2), (_ /= 2));
      }
      function _(_, _) {
        return _ === 1 ? _[_] : _.readUInt16BE(_ * _);
      }
      let _;
      if (_) {
        let _ = -1;
        for (_ = _; _ < _; _++)
          if (_(_, _) === _(_, _ === -1 ? 0 : _ - _)) {
            if ((_ === -1 && (_ = _), _ - _ + 1 === _)) return _ * _;
          } else (_ !== -1 && (_ -= _ - _), (_ = -1));
      } else
        for (_ + _ > _ && (_ = _ - _), _ = _; _ >= 0; _--) {
          let _ = !0;
          for (let _ = 0; _ < _; _++)
            if (_(_, _ + _) !== _(_, _)) {
              _ = !1;
              break;
            }
          if (_) return _;
        }
      return -1;
    }
    ((_.prototype.includes = function (_, _, _) {
      return this.indexOf(_, _, _) !== -1;
    }),
      (_.prototype.indexOf = function (_, _, _) {
        return _(this, _, _, _, !0);
      }),
      (_.prototype.lastIndexOf = function (_, _, _) {
        return _(this, _, _, _, !1);
      }));
    function _(_, _, _, _) {
      _ = Number(_) || 0;
      let _ = _.length - _;
      _ ? ((_ = Number(_)), _ > _ && (_ = _)) : (_ = _);
      let _ = _.length;
      _ > _ / 2 && (_ = _ / 2);
      let _ = 0;
      for (; _ < _; ++_) {
        let _ = parseInt(_.substr(_ * 2, 2), 16);
        if (_(_)) return _;
        _[_ + _] = _;
      }
      return _;
    }
    function _(_, _, _, _) {
      return _(_(_, _.length - _), _, _, _);
    }
    function _(_, _, _, _) {
      return _(_(_), _, _, _);
    }
    function _(_, _, _, _) {
      return _(_(_), _, _, _);
    }
    function _(_, _, _, _) {
      return _(_(_, _.length - _), _, _, _);
    }
    ((_.prototype.write = function (_, _, _, _) {
      if (_ === void 0) ((_ = `utf8`), (_ = this.length), (_ = 0));
      else if (_ === void 0 && typeof _ == `string`)
        ((_ = _), (_ = this.length), (_ = 0));
      else if (isFinite(_))
        ((_ >>>= 0),
          isFinite(_)
            ? ((_ >>>= 0), _ === void 0 && (_ = `utf8`))
            : ((_ = _), (_ = void 0)));
      else
        throw Error(
          `Buffer.write(string, encoding, offset[, length]) is no longer supported`,
        );
      let _ = this.length - _;
      if (
        ((_ === void 0 || _ > _) && (_ = _),
        (_.length > 0 && (_ < 0 || _ < 0)) || _ > this.length)
      )
        throw RangeError(`Attempt to write outside buffer bounds`);
      _ ||= `utf8`;
      let _ = !1;
      for (;;)
        switch (_) {
          case `hex`:
            return _(this, _, _, _);
          case `utf8`:
          case `utf-8`:
            return _(this, _, _, _);
          case `ascii`:
          case `latin1`:
          case `binary`:
            return _(this, _, _, _);
          case `base64`:
            return _(this, _, _, _);
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return _(this, _, _, _);
          default:
            if (_) throw TypeError(`Unknown encoding: ` + _);
            ((_ = (`` + _).toLowerCase()), (_ = !0));
        }
    }),
      (_.prototype.toJSON = function () {
        return {
          type: `Buffer`,
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      }));
    function _(_, _, _) {
      return _ === 0 && _ === _.length
        ? _.fromByteArray(_)
        : _.fromByteArray(_.slice(_, _));
    }
    function _(_, _, _) {
      _ = Math.min(_.length, _);
      let _ = [],
        _ = _;
      for (; _ < _;) {
        let _ = _[_],
          _ = null,
          _ = _ > 239 ? 4 : _ > 223 ? 3 : _ > 191 ? 2 : 1;
        if (_ + _ <= _) {
          let _, _, _, _;
          switch (_) {
            case 1:
              _ < 128 && (_ = _);
              break;
            case 2:
              ((_ = _[_ + 1]),
                (_ & 192) == 128 &&
                  ((_ = ((_ & 31) << 6) | (_ & 63)), _ > 127 && (_ = _)));
              break;
            case 3:
              ((_ = _[_ + 1]),
                (_ = _[_ + 2]),
                (_ & 192) == 128 &&
                  (_ & 192) == 128 &&
                  ((_ = ((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63)),
                  _ > 2047 && (_ < 55296 || _ > 57343) && (_ = _)));
              break;
            case 4:
              ((_ = _[_ + 1]),
                (_ = _[_ + 2]),
                (_ = _[_ + 3]),
                (_ & 192) == 128 &&
                  (_ & 192) == 128 &&
                  (_ & 192) == 128 &&
                  ((_ =
                    ((_ & 15) << 18) |
                    ((_ & 63) << 12) |
                    ((_ & 63) << 6) |
                    (_ & 63)),
                  _ > 65535 && _ < 1114112 && (_ = _)));
          }
        }
        (_ === null
          ? ((_ = 65533), (_ = 1))
          : _ > 65535 &&
            ((_ -= 65536),
            _.push(((_ >>> 10) & 1023) | 55296),
            (_ = 56320 | (_ & 1023))),
          _.push(_),
          (_ += _));
      }
      return _(_);
    }
    var _ = 4096;
    function _(_) {
      let _ = _.length;
      if (_ <= _) return String.fromCharCode.apply(String, _);
      let _ = ``,
        _ = 0;
      for (; _ < _;)
        _ += String.fromCharCode.apply(String, _.slice(_, (_ += _)));
      return _;
    }
    function _(_, _, _) {
      let _ = ``;
      _ = Math.min(_.length, _);
      for (let _ = _; _ < _; ++_) _ += String.fromCharCode(_[_] & 127);
      return _;
    }
    function _(_, _, _) {
      let _ = ``;
      _ = Math.min(_.length, _);
      for (let _ = _; _ < _; ++_) _ += String.fromCharCode(_[_]);
      return _;
    }
    function _(_, _, _) {
      let _ = _.length;
      ((!_ || _ < 0) && (_ = 0), (!_ || _ < 0 || _ > _) && (_ = _));
      let _ = ``;
      for (let _ = _; _ < _; ++_) _ += _[_[_]];
      return _;
    }
    function _(_, _, _) {
      let _ = _.slice(_, _),
        _ = ``;
      for (let _ = 0; _ < _.length - 1; _ += 2)
        _ += String.fromCharCode(_[_] + _[_ + 1] * 256);
      return _;
    }
    _.prototype.slice = function (_, _) {
      let _ = this.length;
      ((_ = ~~_),
        (_ = _ === void 0 ? _ : ~~_),
        _ < 0 ? ((_ += _), _ < 0 && (_ = 0)) : _ > _ && (_ = _),
        _ < 0 ? ((_ += _), _ < 0 && (_ = 0)) : _ > _ && (_ = _),
        _ < _ && (_ = _));
      let _ = this.subarray(_, _);
      return (Object.setPrototypeOf(_, _.prototype), _);
    };
    function _(_, _, _) {
      if (_ % 1 != 0 || _ < 0) throw RangeError(`offset is not uint`);
      if (_ + _ > _) throw RangeError(`Trying to access beyond buffer length`);
    }
    ((_.prototype.readUintLE = _.prototype.readUIntLE =
      function (_, _, _) {
        ((_ >>>= 0), (_ >>>= 0), _ || _(_, _, this.length));
        let _ = this[_],
          _ = 1,
          _ = 0;
        for (; ++_ < _ && (_ *= 256);) _ += this[_ + _] * _;
        return _;
      }),
      (_.prototype.readUintBE = _.prototype.readUIntBE =
        function (_, _, _) {
          ((_ >>>= 0), (_ >>>= 0), _ || _(_, _, this.length));
          let _ = this[_ + --_],
            _ = 1;
          for (; _ > 0 && (_ *= 256);) _ += this[_ + --_] * _;
          return _;
        }),
      (_.prototype.readUint8 = _.prototype.readUInt8 =
        function (_, _) {
          return ((_ >>>= 0), _ || _(_, 1, this.length), this[_]);
        }),
      (_.prototype.readUint16LE = _.prototype.readUInt16LE =
        function (_, _) {
          return (
            (_ >>>= 0), _ || _(_, 2, this.length), this[_] | (this[_ + 1] << 8)
          );
        }),
      (_.prototype.readUint16BE = _.prototype.readUInt16BE =
        function (_, _) {
          return (
            (_ >>>= 0), _ || _(_, 2, this.length), (this[_] << 8) | this[_ + 1]
          );
        }),
      (_.prototype.readUint32LE = _.prototype.readUInt32LE =
        function (_, _) {
          return (
            (_ >>>= 0),
            _ || _(_, 4, this.length),
            (this[_] | (this[_ + 1] << 8) | (this[_ + 2] << 16)) +
              this[_ + 3] * 16777216
          );
        }),
      (_.prototype.readUint32BE = _.prototype.readUInt32BE =
        function (_, _) {
          return (
            (_ >>>= 0),
            _ || _(_, 4, this.length),
            this[_] * 16777216 +
              ((this[_ + 1] << 16) | (this[_ + 2] << 8) | this[_ + 3])
          );
        }),
      (_.prototype.readBigUInt64LE = _(function (_) {
        ((_ >>>= 0), _(_, `offset`));
        let _ = this[_],
          _ = this[_ + 7];
        (_ === void 0 || _ === void 0) && _(_, this.length - 8);
        let _ = _ + this[++_] * 256 + this[++_] * 2 ** 16 + this[++_] * 2 ** 24,
          _ = this[++_] + this[++_] * 256 + this[++_] * 2 ** 16 + _ * 2 ** 24;
        return BigInt(_) + (BigInt(_) << BigInt(32));
      })),
      (_.prototype.readBigUInt64BE = _(function (_) {
        ((_ >>>= 0), _(_, `offset`));
        let _ = this[_],
          _ = this[_ + 7];
        (_ === void 0 || _ === void 0) && _(_, this.length - 8);
        let _ = _ * 2 ** 24 + this[++_] * 2 ** 16 + this[++_] * 256 + this[++_],
          _ = this[++_] * 2 ** 24 + this[++_] * 2 ** 16 + this[++_] * 256 + _;
        return (BigInt(_) << BigInt(32)) + BigInt(_);
      })),
      (_.prototype.readIntLE = function (_, _, _) {
        ((_ >>>= 0), (_ >>>= 0), _ || _(_, _, this.length));
        let _ = this[_],
          _ = 1,
          _ = 0;
        for (; ++_ < _ && (_ *= 256);) _ += this[_ + _] * _;
        return ((_ *= 128), _ >= _ && (_ -= 2 ** (8 * _)), _);
      }),
      (_.prototype.readIntBE = function (_, _, _) {
        ((_ >>>= 0), (_ >>>= 0), _ || _(_, _, this.length));
        let _ = _,
          _ = 1,
          _ = this[_ + --_];
        for (; _ > 0 && (_ *= 256);) _ += this[_ + --_] * _;
        return ((_ *= 128), _ >= _ && (_ -= 2 ** (8 * _)), _);
      }),
      (_.prototype.readInt8 = function (_, _) {
        return (
          (_ >>>= 0),
          _ || _(_, 1, this.length),
          this[_] & 128 ? (255 - this[_] + 1) * -1 : this[_]
        );
      }),
      (_.prototype.readInt16LE = function (_, _) {
        ((_ >>>= 0), _ || _(_, 2, this.length));
        let _ = this[_] | (this[_ + 1] << 8);
        return _ & 32768 ? _ | 4294901760 : _;
      }),
      (_.prototype.readInt16BE = function (_, _) {
        ((_ >>>= 0), _ || _(_, 2, this.length));
        let _ = this[_ + 1] | (this[_] << 8);
        return _ & 32768 ? _ | 4294901760 : _;
      }),
      (_.prototype.readInt32LE = function (_, _) {
        return (
          (_ >>>= 0),
          _ || _(_, 4, this.length),
          this[_] |
            (this[_ + 1] << 8) |
            (this[_ + 2] << 16) |
            (this[_ + 3] << 24)
        );
      }),
      (_.prototype.readInt32BE = function (_, _) {
        return (
          (_ >>>= 0),
          _ || _(_, 4, this.length),
          (this[_] << 24) |
            (this[_ + 1] << 16) |
            (this[_ + 2] << 8) |
            this[_ + 3]
        );
      }),
      (_.prototype.readBigInt64LE = _(function (_) {
        ((_ >>>= 0), _(_, `offset`));
        let _ = this[_],
          _ = this[_ + 7];
        (_ === void 0 || _ === void 0) && _(_, this.length - 8);
        let _ =
          this[_ + 4] + this[_ + 5] * 256 + this[_ + 6] * 2 ** 16 + (_ << 24);
        return (
          (BigInt(_) << BigInt(32)) +
          BigInt(
            _ + this[++_] * 256 + this[++_] * 2 ** 16 + this[++_] * 2 ** 24,
          )
        );
      })),
      (_.prototype.readBigInt64BE = _(function (_) {
        ((_ >>>= 0), _(_, `offset`));
        let _ = this[_],
          _ = this[_ + 7];
        (_ === void 0 || _ === void 0) && _(_, this.length - 8);
        let _ = (_ << 24) + this[++_] * 2 ** 16 + this[++_] * 256 + this[++_];
        return (
          (BigInt(_) << BigInt(32)) +
          BigInt(
            this[++_] * 2 ** 24 + this[++_] * 2 ** 16 + this[++_] * 256 + _,
          )
        );
      })),
      (_.prototype.readFloatLE = function (_, _) {
        return (
          (_ >>>= 0), _ || _(_, 4, this.length), _.read(this, _, !0, 23, 4)
        );
      }),
      (_.prototype.readFloatBE = function (_, _) {
        return (
          (_ >>>= 0), _ || _(_, 4, this.length), _.read(this, _, !1, 23, 4)
        );
      }),
      (_.prototype.readDoubleLE = function (_, _) {
        return (
          (_ >>>= 0), _ || _(_, 8, this.length), _.read(this, _, !0, 52, 8)
        );
      }),
      (_.prototype.readDoubleBE = function (_, _) {
        return (
          (_ >>>= 0), _ || _(_, 8, this.length), _.read(this, _, !1, 52, 8)
        );
      }));
    function _(_, _, _, _, _, _) {
      if (!_.isBuffer(_))
        throw TypeError(`"buffer" argument must be a Buffer instance`);
      if (_ > _ || _ < _) throw RangeError(`"value" argument is out of bounds`);
      if (_ + _ > _.length) throw RangeError(`Index out of range`);
    }
    ((_.prototype.writeUintLE = _.prototype.writeUIntLE =
      function (_, _, _, _) {
        if (((_ = +_), (_ >>>= 0), (_ >>>= 0), !_)) {
          let _ = 2 ** (8 * _) - 1;
          _(this, _, _, _, _, 0);
        }
        let _ = 1,
          _ = 0;
        for (this[_] = _ & 255; ++_ < _ && (_ *= 256);)
          this[_ + _] = (_ / _) & 255;
        return _ + _;
      }),
      (_.prototype.writeUintBE = _.prototype.writeUIntBE =
        function (_, _, _, _) {
          if (((_ = +_), (_ >>>= 0), (_ >>>= 0), !_)) {
            let _ = 2 ** (8 * _) - 1;
            _(this, _, _, _, _, 0);
          }
          let _ = _ - 1,
            _ = 1;
          for (this[_ + _] = _ & 255; --_ >= 0 && (_ *= 256);)
            this[_ + _] = (_ / _) & 255;
          return _ + _;
        }),
      (_.prototype.writeUint8 = _.prototype.writeUInt8 =
        function (_, _, _) {
          return (
            (_ = +_),
            (_ >>>= 0),
            _ || _(this, _, _, 1, 255, 0),
            (this[_] = _ & 255),
            _ + 1
          );
        }),
      (_.prototype.writeUint16LE = _.prototype.writeUInt16LE =
        function (_, _, _) {
          return (
            (_ = +_),
            (_ >>>= 0),
            _ || _(this, _, _, 2, 65535, 0),
            (this[_] = _ & 255),
            (this[_ + 1] = _ >>> 8),
            _ + 2
          );
        }),
      (_.prototype.writeUint16BE = _.prototype.writeUInt16BE =
        function (_, _, _) {
          return (
            (_ = +_),
            (_ >>>= 0),
            _ || _(this, _, _, 2, 65535, 0),
            (this[_] = _ >>> 8),
            (this[_ + 1] = _ & 255),
            _ + 2
          );
        }),
      (_.prototype.writeUint32LE = _.prototype.writeUInt32LE =
        function (_, _, _) {
          return (
            (_ = +_),
            (_ >>>= 0),
            _ || _(this, _, _, 4, 4294967295, 0),
            (this[_ + 3] = _ >>> 24),
            (this[_ + 2] = _ >>> 16),
            (this[_ + 1] = _ >>> 8),
            (this[_] = _ & 255),
            _ + 4
          );
        }),
      (_.prototype.writeUint32BE = _.prototype.writeUInt32BE =
        function (_, _, _) {
          return (
            (_ = +_),
            (_ >>>= 0),
            _ || _(this, _, _, 4, 4294967295, 0),
            (this[_] = _ >>> 24),
            (this[_ + 1] = _ >>> 16),
            (this[_ + 2] = _ >>> 8),
            (this[_ + 3] = _ & 255),
            _ + 4
          );
        }));
    function _(_, _, _, _, _) {
      _(_, _, _, _, _, 7);
      let _ = Number(_ & BigInt(4294967295));
      ((_[_++] = _),
        (_ >>= 8),
        (_[_++] = _),
        (_ >>= 8),
        (_[_++] = _),
        (_ >>= 8),
        (_[_++] = _));
      let _ = Number((_ >> BigInt(32)) & BigInt(4294967295));
      return (
        (_[_++] = _),
        (_ >>= 8),
        (_[_++] = _),
        (_ >>= 8),
        (_[_++] = _),
        (_ >>= 8),
        (_[_++] = _),
        _
      );
    }
    function _(_, _, _, _, _) {
      _(_, _, _, _, _, 7);
      let _ = Number(_ & BigInt(4294967295));
      ((_[_ + 7] = _),
        (_ >>= 8),
        (_[_ + 6] = _),
        (_ >>= 8),
        (_[_ + 5] = _),
        (_ >>= 8),
        (_[_ + 4] = _));
      let _ = Number((_ >> BigInt(32)) & BigInt(4294967295));
      return (
        (_[_ + 3] = _),
        (_ >>= 8),
        (_[_ + 2] = _),
        (_ >>= 8),
        (_[_ + 1] = _),
        (_ >>= 8),
        (_[_] = _),
        _ + 8
      );
    }
    ((_.prototype.writeBigUInt64LE = _(function (_, _ = 0) {
      return _(this, _, _, BigInt(0), BigInt(`0xffffffffffffffff`));
    })),
      (_.prototype.writeBigUInt64BE = _(function (_, _ = 0) {
        return _(this, _, _, BigInt(0), BigInt(`0xffffffffffffffff`));
      })),
      (_.prototype.writeIntLE = function (_, _, _, _) {
        if (((_ = +_), (_ >>>= 0), !_)) {
          let _ = 2 ** (8 * _ - 1);
          _(this, _, _, _, _ - 1, -_);
        }
        let _ = 0,
          _ = 1,
          _ = 0;
        for (this[_] = _ & 255; ++_ < _ && (_ *= 256);)
          (_ < 0 && _ === 0 && this[_ + _ - 1] !== 0 && (_ = 1),
            (this[_ + _] = (((_ / _) | 0) - _) & 255));
        return _ + _;
      }),
      (_.prototype.writeIntBE = function (_, _, _, _) {
        if (((_ = +_), (_ >>>= 0), !_)) {
          let _ = 2 ** (8 * _ - 1);
          _(this, _, _, _, _ - 1, -_);
        }
        let _ = _ - 1,
          _ = 1,
          _ = 0;
        for (this[_ + _] = _ & 255; --_ >= 0 && (_ *= 256);)
          (_ < 0 && _ === 0 && this[_ + _ + 1] !== 0 && (_ = 1),
            (this[_ + _] = (((_ / _) | 0) - _) & 255));
        return _ + _;
      }),
      (_.prototype.writeInt8 = function (_, _, _) {
        return (
          (_ = +_),
          (_ >>>= 0),
          _ || _(this, _, _, 1, 127, -128),
          _ < 0 && (_ = 255 + _ + 1),
          (this[_] = _ & 255),
          _ + 1
        );
      }),
      (_.prototype.writeInt16LE = function (_, _, _) {
        return (
          (_ = +_),
          (_ >>>= 0),
          _ || _(this, _, _, 2, 32767, -32768),
          (this[_] = _ & 255),
          (this[_ + 1] = _ >>> 8),
          _ + 2
        );
      }),
      (_.prototype.writeInt16BE = function (_, _, _) {
        return (
          (_ = +_),
          (_ >>>= 0),
          _ || _(this, _, _, 2, 32767, -32768),
          (this[_] = _ >>> 8),
          (this[_ + 1] = _ & 255),
          _ + 2
        );
      }),
      (_.prototype.writeInt32LE = function (_, _, _) {
        return (
          (_ = +_),
          (_ >>>= 0),
          _ || _(this, _, _, 4, 2147483647, -2147483648),
          (this[_] = _ & 255),
          (this[_ + 1] = _ >>> 8),
          (this[_ + 2] = _ >>> 16),
          (this[_ + 3] = _ >>> 24),
          _ + 4
        );
      }),
      (_.prototype.writeInt32BE = function (_, _, _) {
        return (
          (_ = +_),
          (_ >>>= 0),
          _ || _(this, _, _, 4, 2147483647, -2147483648),
          _ < 0 && (_ = 4294967295 + _ + 1),
          (this[_] = _ >>> 24),
          (this[_ + 1] = _ >>> 16),
          (this[_ + 2] = _ >>> 8),
          (this[_ + 3] = _ & 255),
          _ + 4
        );
      }),
      (_.prototype.writeBigInt64LE = _(function (_, _ = 0) {
        return _(
          this,
          _,
          _,
          -BigInt(`0x8000000000000000`),
          BigInt(`0x7fffffffffffffff`),
        );
      })),
      (_.prototype.writeBigInt64BE = _(function (_, _ = 0) {
        return _(
          this,
          _,
          _,
          -BigInt(`0x8000000000000000`),
          BigInt(`0x7fffffffffffffff`),
        );
      })));
    function _(_, _, _, _, _, _) {
      if (_ + _ > _.length || _ < 0) throw RangeError(`Index out of range`);
    }
    function _(_, _, _, _, _) {
      return (
        (_ = +_),
        (_ >>>= 0),
        _ || _(_, _, _, 4, 34028234663852886e22, -34028234663852886e22),
        _.write(_, _, _, _, 23, 4),
        _ + 4
      );
    }
    ((_.prototype.writeFloatLE = function (_, _, _) {
      return _(this, _, _, !0, _);
    }),
      (_.prototype.writeFloatBE = function (_, _, _) {
        return _(this, _, _, !1, _);
      }));
    function _(_, _, _, _, _) {
      return (
        (_ = +_),
        (_ >>>= 0),
        _ || _(_, _, _, 8, 17976931348623157e292, -17976931348623157e292),
        _.write(_, _, _, _, 52, 8),
        _ + 8
      );
    }
    ((_.prototype.writeDoubleLE = function (_, _, _) {
      return _(this, _, _, !0, _);
    }),
      (_.prototype.writeDoubleBE = function (_, _, _) {
        return _(this, _, _, !1, _);
      }),
      (_.prototype.copy = function (_, _, _, _) {
        if (!_.isBuffer(_)) throw TypeError(`argument should be a Buffer`);
        if (
          ((_ ||= 0),
          !_ && _ !== 0 && (_ = this.length),
          _ >= _.length && (_ = _.length),
          (_ ||= 0),
          _ > 0 && _ < _ && (_ = _),
          _ === _ || _.length === 0 || this.length === 0)
        )
          return 0;
        if (_ < 0) throw RangeError(`targetStart out of bounds`);
        if (_ < 0 || _ >= this.length) throw RangeError(`Index out of range`);
        if (_ < 0) throw RangeError(`sourceEnd out of bounds`);
        (_ > this.length && (_ = this.length),
          _.length - _ < _ - _ && (_ = _.length - _ + _));
        let _ = _ - _;
        return (
          this === _ && typeof Uint8Array.prototype.copyWithin == `function`
            ? this.copyWithin(_, _, _)
            : Uint8Array.prototype.set.call(_, this.subarray(_, _), _),
          _
        );
      }),
      (_.prototype.fill = function (_, _, _, _) {
        if (typeof _ == `string`) {
          if (
            (typeof _ == `string`
              ? ((_ = _), (_ = 0), (_ = this.length))
              : typeof _ == `string` && ((_ = _), (_ = this.length)),
            _ !== void 0 && typeof _ != `string`)
          )
            throw TypeError(`encoding must be a string`);
          if (typeof _ == `string` && !_.isEncoding(_))
            throw TypeError(`Unknown encoding: ` + _);
          if (_.length === 1) {
            let _ = _.charCodeAt(0);
            ((_ === `utf8` && _ < 128) || _ === `latin1`) && (_ = _);
          }
        } else
          typeof _ == `number`
            ? (_ &= 255)
            : typeof _ == `boolean` && (_ = Number(_));
        if (_ < 0 || this.length < _ || this.length < _)
          throw RangeError(`Out of range index`);
        if (_ <= _) return this;
        ((_ >>>= 0), (_ = _ === void 0 ? this.length : _ >>> 0), (_ ||= 0));
        let _;
        if (typeof _ == `number`) for (_ = _; _ < _; ++_) this[_] = _;
        else {
          let _ = _.isBuffer(_) ? _ : _.from(_, _),
            _ = _.length;
          if (_ === 0)
            throw TypeError(
              `The value "` + _ + `" is invalid for argument "value"`,
            );
          for (_ = 0; _ < _ - _; ++_) this[_ + _] = _[_ % _];
        }
        return this;
      }));
    var _ = {};
    function _(_, _, _) {
      _[_] = class extends _ {
        constructor() {
          (super(),
            Object.defineProperty(this, "message", {
              value: _.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${_}]`),
            this.stack,
            delete this.name);
        }
        get code() {
          return _;
        }
        set code(_) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${_}]: ${this.message}`;
        }
      };
    }
    (_(
      `ERR_BUFFER_OUT_OF_BOUNDS`,
      function (_) {
        return _
          ? `${_} is outside of buffer bounds`
          : `Attempt to access memory outside buffer bounds`;
      },
      RangeError,
    ),
      _(
        `ERR_INVALID_ARG_TYPE`,
        function (_, _) {
          return `The "${_}" argument must be of type number. Received type ${typeof _}`;
        },
        TypeError,
      ),
      _(
        `ERR_OUT_OF_RANGE`,
        function (_, _, _) {
          let _ = `The value of "${_}" is out of range.`,
            _ = _;
          return (
            Number.isInteger(_) && Math.abs(_) > 2 ** 32
              ? (_ = _(String(_)))
              : typeof _ == `bigint` &&
                ((_ = String(_)),
                (_ > BigInt(2) ** BigInt(32) ||
                  _ < -(BigInt(2) ** BigInt(32))) &&
                  (_ = _(_)),
                (_ += `n`)),
            (_ += ` It must be ${_}. Received ${_}`),
            _
          );
        },
        RangeError,
      ));
    function _(_) {
      let _ = ``,
        _ = _.length,
        _ = +(_[0] === `-`);
      for (; _ >= _ + 4; _ -= 3) _ = `_${_.slice(_ - 3, _)}${_}`;
      return `${_.slice(0, _)}${_}`;
    }
    function _(_, _, _) {
      (_(_, `offset`),
        (_[_] === void 0 || _[_ + _] === void 0) && _(_, _.length - (_ + 1)));
    }
    function _(_, _, _, _, _, _) {
      if (_ > _ || _ < _) {
        let _ = typeof _ == `bigint` ? `n` : ``,
          _;
        throw (
          (_ =
            _ > 3
              ? _ === 0 || _ === BigInt(0)
                ? `>= 0${_} and < 2${_} ** ${(_ + 1) * 8}${_}`
                : `>= -(2${_} ** ${(_ + 1) * 8 - 1}${_}) and < 2 ** ${(_ + 1) * 8 - 1}${_}`
              : `>= ${_}${_} and <= ${_}${_}`),
          new _.ERR_OUT_OF_RANGE(`value`, _, _)
        );
      }
      _(_, _, _);
    }
    function _(_, _) {
      if (typeof _ != `number`)
        throw new _.ERR_INVALID_ARG_TYPE(_, `number`, _);
    }
    function _(_, _, _) {
      throw Math.floor(_) === _
        ? _ < 0
          ? new _.ERR_BUFFER_OUT_OF_BOUNDS()
          : new _.ERR_OUT_OF_RANGE(_ || `offset`, `>= ${+!!_} and <= ${_}`, _)
        : (_(_, _), new _.ERR_OUT_OF_RANGE(_ || `offset`, `an integer`, _));
    }
    var _ = /[^+/0-9A-Za-z-_]/g;
    function _(_) {
      if (((_ = _.split(`=`)[0]), (_ = _.trim().replace(_, ``)), _.length < 2))
        return ``;
      for (; _.length % 4 != 0;) _ += `=`;
      return _;
    }
    function _(_, _) {
      _ ||= 1 / 0;
      let _,
        _ = _.length,
        _ = null,
        _ = [];
      for (let _ = 0; _ < _; ++_) {
        if (((_ = _.charCodeAt(_)), _ > 55295 && _ < 57344)) {
          if (!_) {
            if (_ > 56319 || _ + 1 === _) {
              (_ -= 3) > -1 && _.push(239, 191, 189);
              continue;
            }
            _ = _;
            continue;
          }
          if (_ < 56320) {
            ((_ -= 3) > -1 && _.push(239, 191, 189), (_ = _));
            continue;
          }
          _ = (((_ - 55296) << 10) | (_ - 56320)) + 65536;
        } else _ && (_ -= 3) > -1 && _.push(239, 191, 189);
        if (((_ = null), _ < 128)) {
          if (--_ < 0) break;
          _.push(_);
        } else if (_ < 2048) {
          if ((_ -= 2) < 0) break;
          _.push((_ >> 6) | 192, (_ & 63) | 128);
        } else if (_ < 65536) {
          if ((_ -= 3) < 0) break;
          _.push((_ >> 12) | 224, ((_ >> 6) & 63) | 128, (_ & 63) | 128);
        } else if (_ < 1114112) {
          if ((_ -= 4) < 0) break;
          _.push(
            (_ >> 18) | 240,
            ((_ >> 12) & 63) | 128,
            ((_ >> 6) & 63) | 128,
            (_ & 63) | 128,
          );
        } else throw Error(`Invalid code point`);
      }
      return _;
    }
    function _(_) {
      let _ = [];
      for (let _ = 0; _ < _.length; ++_) _.push(_.charCodeAt(_) & 255);
      return _;
    }
    function _(_, _) {
      let _,
        _,
        _,
        _ = [];
      for (let _ = 0; _ < _.length && !((_ -= 2) < 0); ++_)
        ((_ = _.charCodeAt(_)),
          (_ = _ >> 8),
          (_ = _ % 256),
          _.push(_),
          _.push(_));
      return _;
    }
    function _(_) {
      return _.toByteArray(_(_));
    }
    function _(_, _, _, _) {
      let _ = 0;
      for (; _ < _ && !(_ + _ >= _.length || _ >= _.length); ++_)
        _[_ + _] = _[_];
      return _;
    }
    function _(_, _) {
      return (
        _ instanceof _ ||
        (_ != null &&
          _.constructor != null &&
          _.constructor.name != null &&
          _.constructor.name === _.name)
      );
    }
    function _(_) {
      return _ !== _;
    }
    var _ = (function () {
      let _ = `0123456789abcdef`,
        _ = Array(256);
      for (let _ = 0; _ < 16; ++_) {
        let _ = _ * 16;
        for (let _ = 0; _ < 16; ++_) _[_ + _] = _[_] + _[_];
      }
      return _;
    })();
    function _(_) {
      return typeof BigInt > `u` ? _ : _;
    }
    function _() {
      throw Error(`BigInt not supported`);
    }
  });
function _(_) {
  let _ = Object.values(_).filter((_) => typeof _ == `number`);
  return Object.entries(_)
    .filter(([_, _]) => _.indexOf(+_) === -1)
    .map(([_, _]) => _);
}
function _(_, _ = `|`) {
  return _.map((_) => _(_)).join(_);
}
function _(_, _) {
  return typeof _ == `bigint` ? _.toString() : _;
}
var _ = class {
  constructor(_) {
    ((this._getter = _), (this._value = void 0));
  }
  get value() {
    let _ = this._getter;
    return (
      _ !== void 0 && ((this._value = _()), (this._getter = void 0)),
      this._value
    );
  }
};
function _(_) {
  return new _(_);
}
function _(_) {
  return _ == null;
}
function _(_) {
  let _ = +!!_.startsWith(`^`),
    _ = _.endsWith(`$`) ? _.length - 1 : _.length;
  return _.slice(_, _);
}
function _(_, _) {
  let _ = _ / _,
    _ = Math.round(_),
    _ = 4 * 2 ** -52 * Math.max(Math.abs(_), 1);
  return Math.abs(_ - _) < _ ? 0 : _ - _;
}
function _(_, _, _) {
  Object.defineProperty(_, _, {
    value: _,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function _(_) {
  let _ = Object.getOwnPropertyDescriptor(_, `shape`);
  return _?.get ? _.get.raw : _?.value;
}
function _(_) {
  return _(_._zod.def) ?? _._zod.def.shape;
}
function _(_, _, _) {
  Object.defineProperty(_, _, {
    get() {
      let _ = _();
      return (_(this, _, _), _);
    },
    enumerable: !0,
    configurable: !0,
  });
}
function _(_, _, _) {
  _ in _ ? _(_, _, _) : (_[_] = _);
}
function _(_, _, _, _) {
  let _ = _(_);
  for (let _ of _) {
    let _ = Object.getOwnPropertyDescriptor(_, _);
    _.enumerable &&
      (_.get
        ? _(_, _, () => {
            let _ = _._zod.def.shape[_];
            return _ ? _(_, _) : _;
          })
        : _(_, _, _ ? _(_.value, _) : _.value));
  }
}
function _(_, _) {
  for (let _ of Reflect.ownKeys(_)) {
    let _ = Object.getOwnPropertyDescriptor(_, _);
    _.enumerable && (_.get ? _(_, _, () => _[_]) : _(_, _, _.value));
  }
}
function _(..._) {
  let _ = {};
  for (let _ of _) {
    let _ = Object.getOwnPropertyDescriptors(_);
    Object.assign(_, _);
  }
  return Object.defineProperties({}, _);
}
function _(_) {
  return JSON.stringify(_);
}
function _(_) {
  return _.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
var _ = `captureStackTrace` in Error ? Error.captureStackTrace : (..._) => {};
function _(_) {
  return typeof _ == `object` && !!_ && !Array.isArray(_);
}
var _ = _(() => {
  if (
    _.jitless ||
    (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`))
  )
    return !1;
  try {
    return (Function(``), !0);
  } catch {
    return !1;
  }
});
function _(_) {
  if (_(_) === !1) return !1;
  let _ = _.constructor;
  if (_ === void 0 || typeof _ != `function`) return !0;
  let _ = _.prototype;
  return (
    _(_) !== !1 &&
    Object.prototype.hasOwnProperty.call(_, `isPrototypeOf`) !== !1
  );
}
function _(_) {
  return _(_)
    ? {
        ..._,
      }
    : Array.isArray(_)
      ? [..._]
      : _ instanceof Map
        ? new Map(_)
        : _ instanceof Set
          ? new Set(_)
          : _;
}
var _ = new Set([`string`, `number`, `symbol`]);
function _(_) {
  return _.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function _(_, _, _) {
  let _ = new _._zod.constr(_ ?? _._zod.def);
  return ((!_ || _?.parent) && (_._zod.parent = _), _);
}
function _(_) {
  let _ = _;
  if (!_) return {};
  if (typeof _ == `string`)
    return {
      error: () => _,
    };
  if (_?.message !== void 0) {
    if (_?.error !== void 0)
      throw Error("Cannot specify both `message` and `error` params");
    _.error = _.message;
  }
  return (
    delete _.message,
    typeof _.error == `string`
      ? {
          ..._,
          error: () => _.error,
        }
      : _
  );
}
function _(_) {
  return typeof _ == `bigint`
    ? _.toString() + `n`
    : typeof _ == `string`
      ? `"${_}"`
      : `${_}`;
}
function _(_) {
  return Object.keys(_).filter(
    (_) => _[_]._zod.optin !== void 0 && _[_]._zod.optout === `optional`,
  );
}
var _ = {
    safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  _ = {
    int64: [BigInt(`-9223372036854775808`), BigInt(`9223372036854775807`)],
    uint64: [BigInt(0), BigInt(`18446744073709551615`)],
  };
function _(_, _) {
  let _ = _._zod.def,
    _ = _.checks;
  if (_ && _.length > 0)
    throw Error(
      `.pick() cannot be used on object schemas containing refinements`,
    );
  let _ = {};
  return (
    _(_, _, _(_, _)),
    _(
      _,
      _(_, {
        shape: _,
        checks: [],
      }),
    )
  );
}
function _(_, _) {
  let _ = _(_),
    _ = [];
  for (let _ of Reflect.ownKeys(_)) {
    if (!Object.getOwnPropertyDescriptor(_, _)?.enumerable)
      throw Error(`Unrecognized key: "${String(_)}"`);
    _[_] && _.push(_);
  }
  return _;
}
function _(_, _) {
  let _ = _._zod.def,
    _ = _.checks;
  if (_ && _.length > 0)
    throw Error(
      `.omit() cannot be used on object schemas containing refinements`,
    );
  let _ = new Set(_(_, _)),
    _ = {};
  return (
    _(
      _,
      _,
      Reflect.ownKeys(_(_)).filter((_) => !_.has(_)),
    ),
    _(
      _,
      _(_, {
        shape: _,
        checks: [],
      }),
    )
  );
}
function _(_, _) {
  if (!_(_)) throw Error(`Invalid input to extend: expected a plain object`);
  let _ = _._zod.def.checks;
  if (_ && _.length > 0) {
    let _ = _(_);
    for (let _ of Reflect.ownKeys(_))
      if (Object.getOwnPropertyDescriptor(_, _) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return _(
    _,
    _(_._zod.def, {
      shape: _(_, _),
    }),
  );
}
function _(_, _) {
  let _ = {};
  return (_(_, _, Reflect.ownKeys(_(_))), _(_, _), _);
}
function _(_, _) {
  if (!_(_))
    throw Error(`Invalid input to safeExtend: expected a plain object`);
  return _(
    _,
    _(_._zod.def, {
      shape: _(_, _),
    }),
  );
}
function _(_, _) {
  if (!_?._zod?.def)
    throw Error(
      "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
    );
  if (_._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  let _ = {};
  return (
    _(_, _, Reflect.ownKeys(_(_))),
    _(_, _, Reflect.ownKeys(_(_))),
    _(
      _,
      _(_._zod.def, {
        shape: _,
        get catchall() {
          return _._zod.def.catchall;
        },
        checks: _._zod.def.checks ?? [],
      }),
    )
  );
}
function _(_, _, _, _ = `partial`) {
  let _ = _._zod.def.checks;
  if (_ && _.length > 0)
    throw Error(
      `.${_}() cannot be used on object schemas containing refinements`,
    );
  let _ = _ ? new Set(_(_, _)) : void 0,
    _ = {};
  return (
    _(
      _,
      _,
      Reflect.ownKeys(_(_)),
      _ &&
        ((_, _) =>
          _ && !_.has(_)
            ? _
            : new _({
                type: `optional`,
                innerType: _,
              })),
    ),
    _(
      _,
      _(_._zod.def, {
        shape: _,
        checks: [],
      }),
    )
  );
}
function _(_, _, _) {
  let _ = _ ? new Set(_(_, _)) : void 0,
    _ = {};
  return (
    _(_, _, Reflect.ownKeys(_(_)), (_, _) =>
      _ && !_.has(_)
        ? _
        : new _({
            type: `nonoptional`,
            innerType: _,
          }),
    ),
    _(
      _,
      _(_._zod.def, {
        shape: _,
      }),
    )
  );
}
function _(_, _ = 0) {
  if (_.aborted === !0) return !0;
  for (let _ = _; _ < _.issues.length; _++)
    if (_.issues[_]?.continue !== !0) return !0;
  return !1;
}
function _(_, _ = 0) {
  if (_.aborted === !0) return !0;
  for (let _ = _; _ < _.issues.length; _++)
    if (_.issues[_]?.continue === !1) return !0;
  return !1;
}
function _(_, _) {
  return _.map((_) => {
    var _;
    return ((_ = _).path ?? (_.path = []), _.path.unshift(_), _);
  });
}
function _(_) {
  return typeof _ == `string` ? _ : _?.message;
}
function _(_) {
  let _ = [];
  for (let _ of _ ?? []) {
    let _ = _._zod.def;
    if (!/_(length|size)$|_equals$/.test(_.check)) break;
    let _ = _.maximum ?? _.length ?? _.size;
    _ >= 0 && _.push([_, _]);
  }
  return _;
}
function _(_, _, _) {
  var _;
  for (let _ = _; _ < _.length; _++) (_ = _[_]).schema ?? (_.schema = _);
}
function _(_, _, _) {
  var _;
  let _ = _.inst?._zod?.traits;
  _?.has(`$ZodType`) &&
    (_.has(`$ZodCheck`)
      ? ((_ = _).schema ?? (_.schema = _.inst))
      : (_.schema = _.inst));
  let _ = _.schema === _.inst ? void 0 : _.schema?._zod.def?.error,
    _ = _.message
      ? _.message
      : (_(_.inst?._zod.def?.error?.(_)) ??
        _(_?.(_)) ??
        _(_?.error?.(_)) ??
        _(_.customError?.(_)) ??
        _(_.localeError?.(_)) ??
        `Invalid input`),
    _ = {};
  for (let _ of Object.keys(_))
    _ !== `inst` &&
      _ !== `schema` &&
      _ !== `continue` &&
      _ !== `input` &&
      _ !== `__proto__` &&
      (_[_] = _[_]);
  return (
    (_.path ??= []), (_.message = _), _?.reportInput && (_.input = _.input), _
  );
}
var _ = /[\uD800-\uDBFF]/;
function _(_) {
  let _ = _.length;
  if (!_.test(_)) return _;
  let _ = _;
  for (let _ = 0; _ < _ - 1; _++)
    (_.charCodeAt(_) & 64512) == 55296 &&
      (_.charCodeAt(_ + 1) & 64512) == 56320 &&
      (_--, _++);
  return _;
}
function _(_) {
  return Array.isArray(_)
    ? `array`
    : typeof _ == `string`
      ? `string`
      : `unknown`;
}
function _(_) {
  let _ = typeof _;
  switch (_) {
    case `number`:
      return Number.isNaN(_) ? `nan` : `number`;
    case `object`: {
      if (_ === null) return `null`;
      if (Array.isArray(_)) return `array`;
      let _ = _;
      if (
        _ &&
        Object.getPrototypeOf(_) !== Object.prototype &&
        `constructor` in _ &&
        _.constructor
      )
        return _.constructor.name;
    }
  }
  return _;
}
function _(..._) {
  let [_, _, _] = _;
  return typeof _ == `string`
    ? {
        message: _,
        code: `custom`,
        input: _,
        inst: _,
      }
    : {
        ..._,
      };
}
function _(_, _) {
  for (let _ in _) {
    let _ = Object.getOwnPropertyDescriptor(_, _);
    _.get
      ? Object.defineProperty(_, _, {
          ..._,
          enumerable: !1,
        })
      : _(_, _, _.value);
  }
}
function _(_, _, _, _ = !0) {
  return (
    Object.defineProperty(_, _, {
      configurable: !0,
      writable: !0,
      enumerable: _,
      value: _,
    }),
    _
  );
}
function _(_, _, _) {
  return _(_, _, _, !1);
}
function _(_, _) {
  for (let _ in _) {
    let _ = _[_];
    Object.defineProperty(_, _, {
      configurable: !0,
      enumerable: !0,
      get() {
        return _(this, _, _(this));
      },
      set(_) {
        _(this, _, _);
      },
    });
  }
  return _;
}
function _(_, _, _) {
  Object.defineProperty(_, _, {
    configurable: !0,
    get() {
      return this == null ? _ : _(this, _, _.bind(this));
    },
    set(_) {
      _(this, _, _);
    },
  });
}
function _(_, _) {
  let _ = Object.getPrototypeOf(_);
  return _ in _ ? void 0 : _;
}
var _,
  _ = !1,
  _ = {
    configurable: !0,
    get() {
      _ = !0;
    },
  };
function _(_, _, _) {
  let _ = Object.getPrototypeOf(_._zod);
  _ in _ && _ !== _._zod
    ? (_ = void 0)
    : ((_ = _._zod),
      Object.defineProperty(_, _, {
        configurable: !0,
        get() {
          Object.defineProperty(this, _, _);
          let _ = _;
          _ = !1;
          try {
            let _ = _(this);
            return (
              _
                ? delete this[_]
                : Object.defineProperty(this, _, {
                    configurable: !0,
                    writable: !0,
                    value: _,
                  }),
              (_ ||= _),
              _
            );
          } catch (_) {
            throw (delete this[_], (_ ||= _), _);
          }
        },
        set(_) {
          Object.defineProperty(this, _, {
            configurable: !0,
            writable: !0,
            value: _,
          });
        },
      }));
}
function _(_, _, _, _) {
  let _ = _(_, _);
  _ &&
    Object.defineProperty(_, _, {
      configurable: !0,
      get() {
        let _ = {
          configurable: !0,
          writable: !0,
          enumerable: _,
          value: void 0,
        };
        return (
          Object.defineProperty(this, _, _),
          (_.value = _(this)),
          Object.defineProperty(this, _, _),
          _.value
        );
      },
      set(_) {
        Object.defineProperty(this, _, {
          configurable: !0,
          writable: !0,
          enumerable: _,
          value: _,
        });
      },
    });
}
var _ = `~constantCatch`;
function _(_) {
  let _ = () => _;
  return ((_[_] = !0), _);
}
var _,
  _ = {
    value: void 0,
    enumerable: !1,
  },
  _ = `captureStackTrace` in Error ? Error : null;
function _(_) {
  let _ = _;
  if (_) {
    let _ = _.stackTraceLimit;
    if (typeof _ == `number`) {
      try {
        _.stackTraceLimit = 0;
      } catch {
        return ((_ = null), new _());
      }
      try {
        return new _();
      } finally {
        _.stackTraceLimit = _;
      }
    }
  }
  return new _();
}
function _(_, _, _, _) {
  let _ = {};
  function _(_) {
    ((this.def = _), (this.constr = _), (this.traits = new Set()));
  }
  _.prototype = _;
  let _ = _,
    _ = _ && new WeakSet();
  function _(_, _) {
    if (!_._zod) {
      _.value = new _(_);
      try {
        Object.defineProperty(_, "_zod", _);
      } finally {
        _.value = void 0;
      }
    } else if (_._zod.traits.has(_)) return;
    if ((_._zod.traits.add(_), _(_, _), _)) {
      let _ = Object.getPrototypeOf(_),
        _ = _._zod.constr.prototype,
        _ = _;
      for (; _ && _ !== _;) _ = Object.getPrototypeOf(_);
      let _ = _ ?? _;
      _.has(_) || (_.add(_), _(_, _));
    }
    let _ = _.prototype;
    for (let _ in _)
      Object.prototype.hasOwnProperty.call(_, _) &&
        (_ in _ || (_[_] = _[_].bind(_)));
  }
  let _ = _?.Parent ?? Object;
  class _ extends _ {}
  Object.defineProperty(_, "name", {
    value: _,
  });
  function _(_) {
    let _ = _?.Parent ? _(_) : this;
    _(_, _);
    let _ = _._zod.deferred;
    if (_) {
      for (let _ of _) _();
      _._zod.deferred = void 0;
    }
    let _ = globalThis.__zod_globalConfig?.postProcessor;
    return (_ && _(_), _);
  }
  return (
    Object.defineProperty(_, "init", {
      value: _,
    }),
    Object.defineProperty(_, Symbol.hasInstance, {
      value: (_) =>
        _?.Parent && _ instanceof _.Parent ? !0 : _?._zod?.traits?.has(_),
    }),
    Object.defineProperty(_, "name", {
      value: _,
    }),
    _
  );
}
var _ = class extends Error {
    constructor() {
      super(
        `Encountered Promise during synchronous parse. Use .parseAsync() instead.`,
      );
    }
  },
  _ = class extends Error {
    constructor(_) {
      (super(`Encountered unidirectional transform during encode: ${_}`),
        (this.name = `ZodEncodeError`));
    }
  };
(_ = globalThis).__zod_globalConfig ?? (_.__zod_globalConfig = {});
var _ = globalThis.__zod_globalConfig;
function _(_) {
  return (_ && Object.assign(_, _), _);
}
function _() {
  let _ = this._zod;
  return ((_.message ??= JSON.stringify(_.def, _, 2)), _.message);
}
function _(_) {
  this._zod.message = _;
}
var _ = {
    get: _,
    set: _,
    enumerable: !0,
    configurable: !0,
  },
  _ = {
    value: void 0,
    enumerable: !1,
  },
  _ = new WeakSet([Object.prototype, Error.prototype]),
  _ = _(`$ZodError`, (_, _) => {
    ((_.name = `$ZodError`),
      (_.value = _),
      Object.defineProperty(_, "issues", _),
      (_.value = void 0),
      Object.defineProperty(_, "message", _));
    let _ = Object.getPrototypeOf(_);
    _.has(_) ||
      (_.add(_),
      Object.defineProperty(_, "toString", {
        configurable: !0,
        enumerable: !1,
        get() {
          let _ = () => this.message;
          return (
            Object.defineProperty(this, "toString", {
              value: _,
              configurable: !0,
              writable: !0,
            }),
            _
          );
        },
        set(_) {
          Object.defineProperty(this, "toString", {
            value: _,
            configurable: !0,
            writable: !0,
          });
        },
      }));
  });
function _(_, _, _) {
  return (
    Object.prototype.hasOwnProperty.call(_, _) ||
      (_ === `__proto__`
        ? Object.defineProperty(_, _, {
            value: _(),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          })
        : (_[_] = _())),
    _[_]
  );
}
function _(_, _ = (_) => _.message) {
  let _ = {},
    _ = [];
  for (let _ of _.issues)
    _.path.length > 0 ? _(_, _.path[0], () => []).push(_(_)) : _.push(_(_));
  return {
    formErrors: _,
    fieldErrors: _,
  };
}
function _(_, _ = (_) => _.message) {
  let _ = {
      _errors: [],
    },
    _ = (_, _ = []) => {
      for (let _ of _.issues)
        if (_.code === `invalid_union` && _.errors.length)
          _.errors.map((_) =>
            _(
              {
                issues: _,
              },
              [..._, ..._.path],
            ),
          );
        else if (_.code === `invalid_key`)
          _(
            {
              issues: _.issues,
            },
            [..._, ..._.path],
          );
        else if (_.code === `invalid_element`)
          _(
            {
              issues: _.issues,
            },
            [..._, ..._.path],
          );
        else {
          let _ = [..._, ..._.path];
          if (_.length === 0) _._errors.push(_(_));
          else {
            let _ = _,
              _ = 0;
            for (; _ < _.length;) {
              let _ = _[_],
                _ = _ === _.length - 1;
              if (_ === `_errors`) {
                (_ && _._errors.push(_(_)), _++);
                continue;
              }
              Object.prototype.hasOwnProperty.call(_, _) ||
                Object.defineProperty(_, _, {
                  value: {
                    _errors: [],
                  },
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                });
              let _ = _[_];
              (_ && _._errors.push(_(_)), (_ = _), _++);
            }
          }
        }
    };
  return (_(_), _);
}
function _(_, _) {
  return {
    callee: _?.callee ?? _,
    Err: _?.Err,
  };
}
var _ = (_) => {
    let _ = (_, _, _, _) => {
      let _ = _
          ? {
              ..._,
              async: !1,
            }
          : {
              async: !1,
            },
        _ = _._zod.run(
          {
            value: _,
            issues: [],
          },
          _,
        );
      if (_ instanceof Promise) throw new _();
      if (_.issues.length) {
        let _ = new (_?.Err ?? _)(_.issues.map((_) => _(_, _, _())));
        throw (_(_, _?.callee ?? _), _);
      }
      return _.value;
    };
    return _;
  },
  _ = (_) => {
    let _ = async (_, _, _, _) => {
      let _ = _
          ? {
              ..._,
              async: !0,
            }
          : {
              async: !0,
            },
        _ = _._zod.run(
          {
            value: _,
            issues: [],
          },
          _,
        );
      if ((_ instanceof Promise && (_ = await _), _.issues.length)) {
        let _ = new (_?.Err ?? _)(_.issues.map((_) => _(_, _, _())));
        throw (_(_, _?.callee ?? _), _);
      }
      return _.value;
    };
    return _;
  },
  _ = (_) => (_, _, _) => {
    let _ = _
        ? {
            ..._,
            async: !1,
          }
        : {
            async: !1,
          },
      _ = _._zod.run(
        {
          value: _,
          issues: [],
        },
        _,
      );
    if (_ instanceof Promise) throw new _();
    return _.issues.length
      ? _(_, _.issues, _)
      : {
          success: !0,
          data: _.value,
        };
  };
function _(_, _, _) {
  let _;
  return {
    success: !1,
    get error() {
      return (
        _ ||
          ((_ = new _(_.map((_) => _(_, _, _())))), (_ = void 0), (_ = void 0)),
        _
      );
    },
    set error(_) {
      ((_ = _), (_ = void 0), (_ = void 0));
    },
  };
}
var _ = (_) => async (_, _, _) => {
    let _ = _
        ? {
            ..._,
            async: !0,
          }
        : {
            async: !0,
          },
      _ = _._zod.run(
        {
          value: _,
          issues: [],
        },
        _,
      );
    return (
      _ instanceof Promise && (_ = await _),
      _.issues.length
        ? _(_, _.issues, _)
        : {
            success: !0,
            data: _.value,
          }
    );
  },
  _ = Symbol.for(`zod.compile.invalid`),
  _ = Symbol.for(`zod.compile.fallback`),
  _ = (_, _, _) => {
    let _ = _._zod.bag.validator;
    if (_ !== void 0) {
      if (_(_) !== _) return !0;
      if (_.definite === !0 && _ === void 0) return !1;
    }
    return _(_, _, _);
  };
function _(_, _, _) {
  let _ = _
      ? {
          ..._,
          async: !1,
          abortEarly: !0,
        }
      : {
          async: !1,
          abortEarly: !0,
        },
    _ = _._zod.bag.fallbackRun,
    _;
  if (
    (_
      ? ((_[_] = !0),
        (_ = _(
          {
            value: _,
            issues: [],
          },
          _,
        )))
      : (_ = _._zod.run(
          {
            value: _,
            issues: [],
          },
          _,
        )),
    _ instanceof Promise)
  )
    throw new _();
  return _.issues.length === 0;
}
var _ = async (_, _, _) => {
    let _ = _
        ? {
            ..._,
            async: !0,
            abortEarly: !0,
          }
        : {
            async: !0,
            abortEarly: !0,
          },
      _ = _._zod.run(
        {
          value: _,
          issues: [],
        },
        _,
      );
    return (_ instanceof Promise && (_ = await _), _.issues.length === 0);
  },
  _ = (_) => {
    let _ = _(_),
      _ = (_, _, _, _) => {
        let _ = _
          ? {
              ..._,
              direction: `backward`,
            }
          : {
              direction: `backward`,
            };
        return _(_, _, _, _(_, _));
      };
    return _;
  },
  _ = (_) => {
    let _ = _(_),
      _ = (_, _, _, _) => _(_, _, _, _(_, _));
    return _;
  },
  _ = (_) => {
    let _ = _(_),
      _ = async (_, _, _, _) => {
        let _ = _
          ? {
              ..._,
              direction: `backward`,
            }
          : {
              direction: `backward`,
            };
        return await _(_, _, _, _(_, _));
      };
    return _;
  },
  _ = (_) => {
    let _ = _(_),
      _ = async (_, _, _, _) => await _(_, _, _, _(_, _));
    return _;
  },
  _ = (_) => (_, _, _) => {
    let _ = _
      ? {
          ..._,
          direction: `backward`,
        }
      : {
          direction: `backward`,
        };
    return _(_)(_, _, _);
  },
  _ = (_) => (_, _, _) => _(_)(_, _, _),
  _ = (_) => async (_, _, _) => {
    let _ = _
      ? {
          ..._,
          direction: `backward`,
        }
      : {
          direction: `backward`,
        };
    return _(_)(_, _, _);
  },
  _ = (_) => async (_, _, _) => _(_)(_, _, _),
  _ = /^[cC][0-9a-z]{6,}$/,
  _ = /^[0-9a-z]+$/,
  _ = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  _ = /^[0-9a-vA-V]{20}$/,
  _ = /^[A-Za-z0-9]{27}$/,
  _ = /^[a-zA-Z0-9_-]{21}$/;
function _(_) {
  return RegExp(`^[a-zA-Z0-9_-]{${_}}$`);
}
var _ =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  _ =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  _ = (_) =>
    _
      ? RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${_}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  _ =
    /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  _ = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function _() {
  return new RegExp(_, `u`);
}
var _ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  _ =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  _ =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  _ =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  _ =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  _ = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
  _ = /^https?$/,
  _ = /^\+[1-9]\d{6,14}$/,
  _ = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function _(_) {
  return RegExp(`^${_}$`);
}
var _ = _(_);
function _(_) {
  let _ = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof _.precision == `number`
    ? _.precision === -1
      ? `${_}`
      : _.precision === 0
        ? `${_}:[0-5]\\d`
        : `${_}:[0-5]\\d\\.\\d{${_.precision}}`
    : _.seconds
      ? `${_}:[0-5]\\d(?:\\.\\d+)?`
      : `${_}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function _(_) {
  return RegExp(`^${_(_)}$`);
}
function _(_) {
  let _ = [`Z`];
  _.offset && _.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  let _ = `${_({
      precision: _.precision,
      seconds: !0,
    })}(?:${_.join(`|`)})`,
    _ = _.local
      ? `${_}|${_({
          precision: _.precision,
        })}`
      : _;
  return RegExp(`^${_}T(?:${_})$`);
}
var _ = /^[\s\S]{0,}$/,
  _ = /^-?\d+$/,
  _ = /^-?\d+(?:\.\d+)?$/,
  _ = /^(?:true|false)$/i,
  _ = /^[^A-Z]*$/,
  _ = /^[^a-z]*$/,
  _ = _(`$ZodCheck`, (_, _) => {
    var _;
    ((_._zod ??= {}),
      (_._zod.def = _),
      (_ = _._zod).onattach ?? (_.onattach = []));
  }),
  _ = (_) => {
    let _ = _.value;
    return !_(_) && _.length !== void 0;
  },
  _ = {
    number: `number`,
    bigint: `bigint`,
    object: `date`,
  },
  _ = _(`$ZodCheckLessThan`, (_, _) => {
    _.init(_, _);
    let _ = _[typeof _.value];
    _._zod.check = (_) => {
      (_.inclusive ? _.value <= _.value : _.value < _.value) ||
        _.issues.push({
          origin: _[typeof _.value] ?? _,
          code: `too_big`,
          maximum: typeof _.value == `object` ? _.value.getTime() : _.value,
          input: _.value,
          inclusive: _.inclusive,
          inst: _,
          continue: !_.abort,
        });
    };
  }),
  _ = _(`$ZodCheckGreaterThan`, (_, _) => {
    _.init(_, _);
    let _ = _[typeof _.value];
    _._zod.check = (_) => {
      (_.inclusive ? _.value >= _.value : _.value > _.value) ||
        _.issues.push({
          origin: _[typeof _.value] ?? _,
          code: `too_small`,
          minimum: typeof _.value == `object` ? _.value.getTime() : _.value,
          input: _.value,
          inclusive: _.inclusive,
          inst: _,
          continue: !_.abort,
        });
    };
  }),
  _ = _(`$ZodCheckMultipleOf`, (_, _) => {
    (_.init(_, _),
      (_._zod.check = (_) => {
        if (typeof _.value != typeof _.value)
          throw Error(`Cannot mix number and bigint in multiple_of check.`);
        (typeof _.value == `bigint`
          ? _.value !== BigInt(0) && _.value % _.value === BigInt(0)
          : _(_.value, _.value) === 0) ||
          _.issues.push({
            origin: typeof _.value,
            code: `not_multiple_of`,
            divisor: _.value,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodCheckNumberFormat`, (_, _) => {
    (_.init(_, _), (_.format = _.format || `float64`));
    let _ = _.format?.includes(`int`),
      _ = _ ? `int` : `number`,
      [_, _] = _[_.format];
    _._zod.check = (_) => {
      let _ = _.value;
      if (_) {
        if (!Number.isInteger(_)) {
          _.issues.push({
            expected: _,
            format: _.format,
            code: `invalid_type`,
            continue: !1,
            input: _,
            inst: _,
          });
          return;
        }
        if (!Number.isSafeInteger(_)) {
          _ > 0
            ? _.issues.push({
                input: _,
                code: `too_big`,
                maximum: 2 ** 53 - 1,
                note: `Integers must be within the safe integer range.`,
                inst: _,
                origin: _,
                inclusive: !0,
                continue: !_.abort,
              })
            : _.issues.push({
                input: _,
                code: `too_small`,
                minimum: -(2 ** 53 - 1),
                note: `Integers must be within the safe integer range.`,
                inst: _,
                origin: _,
                inclusive: !0,
                continue: !_.abort,
              });
          return;
        }
      }
      (_ < _ &&
        _.issues.push({
          origin: `number`,
          input: _,
          code: `too_small`,
          minimum: _,
          inclusive: !0,
          inst: _,
          continue: !_.abort,
        }),
        _ > _ &&
          _.issues.push({
            origin: `number`,
            input: _,
            code: `too_big`,
            maximum: _,
            inclusive: !0,
            inst: _,
            continue: !_.abort,
          }));
    };
  }),
  _ = _(`$ZodCheckMaxLength`, (_, _) => {
    var _;
    (_.init(_, _),
      (_ = _._zod.def).when ?? (_.when = _),
      (_._zod.check = (_) => {
        let _ = _.value,
          _ = _.length;
        if ((typeof _ == `string` && _ > _.maximum ? _(_) : _) <= _.maximum)
          return;
        let _ = _(_);
        _.issues.push({
          origin: _,
          code: `too_big`,
          maximum: _.maximum,
          inclusive: !0,
          input: _,
          inst: _,
          continue: !_.abort,
        });
      }));
  }),
  _ = _(`$ZodCheckMinLength`, (_, _) => {
    var _;
    (_.init(_, _),
      (_ = _._zod.def).when ?? (_.when = _),
      (_._zod.check = (_) => {
        let _ = _.value,
          _ = _.length;
        if (
          (typeof _ == `string` && _ >= _.minimum && _ < _.minimum * 2
            ? _(_)
            : _) >= _.minimum
        )
          return;
        let _ = _(_);
        _.issues.push({
          origin: _,
          code: `too_small`,
          minimum: _.minimum,
          inclusive: !0,
          input: _,
          inst: _,
          continue: !_.abort,
        });
      }));
  }),
  _ = _(`$ZodCheckLengthEquals`, (_, _) => {
    var _;
    (_.init(_, _),
      (_ = _._zod.def).when ?? (_.when = _),
      (_._zod.check = (_) => {
        let _ = _.value,
          _ = _.length,
          _ =
            typeof _ == `string` && _ >= _.length && _ <= _.length * 2
              ? _(_)
              : _;
        if (_ === _.length) return;
        let _ = _(_),
          _ = _ > _.length;
        _.issues.push({
          origin: _,
          ...(_
            ? {
                code: `too_big`,
                maximum: _.length,
              }
            : {
                code: `too_small`,
                minimum: _.length,
              }),
          inclusive: !0,
          exact: !0,
          input: _.value,
          inst: _,
          continue: !_.abort,
        });
      }));
  }),
  _ = _(`$ZodCheckStringFormat`, (_, _) => {
    var _, _;
    (_.init(_, _),
      _.pattern
        ? ((_ = _._zod).check ??
          (_.check = (_) => {
            ((_.pattern.lastIndex = 0),
              !_.pattern.test(_.value) &&
                _.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: _.format,
                  input: _.value,
                  ...(_.pattern
                    ? {
                        pattern: _.pattern.toString(),
                      }
                    : {}),
                  inst: _,
                  continue: !_.abort,
                }));
          }))
        : ((_ = _._zod).check ?? (_.check = () => {})));
  }),
  _ = _(`$ZodCheckRegex`, (_, _) => {
    (_.init(_, _),
      (_._zod.check = (_) => {
        ((_.pattern.lastIndex = 0),
          !_.pattern.test(_.value) &&
            _.issues.push({
              origin: `string`,
              code: `invalid_format`,
              format: `regex`,
              input: _.value,
              pattern: _.pattern.toString(),
              inst: _,
              continue: !_.abort,
            }));
      }));
  }),
  _ = _(`$ZodCheckLowerCase`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodCheckUpperCase`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodCheckIncludes`, (_, _) => {
    _.init(_, _);
    let _ = _(_.includes);
    ((_.pattern = new RegExp(
      typeof _.position == `number` ? `^.{${_.position},}${_}` : _,
    )),
      (_._zod.check = (_) => {
        _.value.includes(_.includes, _.position) ||
          _.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `includes`,
            includes: _.includes,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodCheckStartsWith`, (_, _) => {
    _.init(_, _);
    let _ = RegExp(`^${_(_.prefix)}.*`);
    ((_.pattern ??= _),
      (_._zod.check = (_) => {
        _.value.startsWith(_.prefix) ||
          _.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `starts_with`,
            prefix: _.prefix,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodCheckEndsWith`, (_, _) => {
    _.init(_, _);
    let _ = RegExp(`.*${_(_.suffix)}$`);
    ((_.pattern ??= _),
      (_._zod.check = (_) => {
        _.value.endsWith(_.suffix) ||
          _.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `ends_with`,
            suffix: _.suffix,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodCheckOverwrite`, (_, _) => {
    (_.init(_, _),
      (_._zod.check = (_) => {
        _.value = _._(_.value);
      }));
  }),
  _ = class {
    constructor(_ = [], _ = {}) {
      ((this.content = []),
        (this.indent = 0),
        (this.args = _),
        (this.closed = _));
    }
    indented(_) {
      this.indent += 1;
      try {
        _(this);
      } finally {
        --this.indent;
      }
    }
    write(_) {
      if (typeof _ == `function`) {
        (_(this, {
          execution: `sync`,
        }),
          _(this, {
            execution: `async`,
          }));
        return;
      }
      let _ = _.split(`
`).filter((_) => _),
        _ = Math.min(..._.map((_) => _.length - _.trimStart().length)),
        _ = _.map((_) => _.slice(_)).map(
          (_) => ` `.repeat(this.indent * 2) + _,
        );
      for (let _ of _) this.content.push(_);
    }
    compile() {
      let _ = Function,
        _ = this?.content ?? [``];
      return new _(
        ...Object.keys(this.closed),
        `return function (${this.args.join(`, `)}) {\n${_.join(`
`)}\n};`,
      )(...Object.values(this.closed));
    }
  },
  _ = {
    major: 4,
    minor: 6,
    patch: 7,
  },
  _ = _(
    `$ZodType`,
    (_, _) => {
      var _;
      ((_ ??= {}),
        (_._zod.def = _),
        (_._zod.bag = _._zod.bag || {}),
        (_._zod.version = _));
      let _ = _._zod.def.checks,
        _ = _._zod.traits.has(`$ZodCheck`)
          ? [_, ...(_ ?? [])]
          : _?.length
            ? [..._]
            : [];
      for (let _ of _) for (let _ of _._zod.onattach) _(_);
      if (_.length === 0)
        ((_ = _._zod).deferred ?? (_.deferred = []),
          _._zod.deferred?.push(() => {
            _._zod.run = _._zod.parse;
          }));
      else {
        let _ = (_, _, _) => {
            if (_.memo) return _;
            let _ = _(_),
              _;
            for (let _ of _) {
              if (_._zod.def.when) {
                if (_(_) || !_._zod.def.when(_)) continue;
              } else if (_) continue;
              let _ = _.issues.length,
                _ = _._zod.check(_);
              if (_ instanceof Promise && _?.async === !1) throw new _();
              if (_ || _ instanceof Promise)
                _ = (_ ?? Promise.resolve()).then(async () => {
                  (await _,
                    _.issues.length !== _ &&
                      (_(_.issues, _, _), (_ ||= _(_, _))));
                });
              else {
                if (_.issues.length === _) continue;
                (_(_.issues, _, _), (_ ||= _(_, _)));
              }
            }
            return _ ? _.then(() => _) : _;
          },
          _ = (_, _, _) => {
            if (_(_)) return ((_.aborted = !0), _);
            let _ = _(_, _, _);
            if (_ instanceof Promise) {
              if (_.async === !1) throw new _();
              return _.then((_) => _._zod.parse(_, _));
            }
            return _._zod.parse(_, _);
          };
        _._zod.run = (_, _) => {
          if (_.skipChecks) return _._zod.parse(_, _);
          if (_.direction === `backward`) {
            let _ = _._zod.parse(
              {
                value: _.value,
                issues: [],
              },
              {
                ..._,
                skipChecks: !0,
              },
            );
            return _ instanceof Promise
              ? _.then((_) => _(_, _, _))
              : _(_, _, _);
          }
          let _ = _._zod.parse(_, _);
          if (_ instanceof Promise) {
            if (_.async === !1) throw new _();
            return _.then((_) => _(_, _, _));
          }
          return _(_, _, _);
        };
      }
    },
    {
      get "~standard"() {
        return _(this, `~standard`, _(this));
      },
      set "~standard"(_) {
        _(this, `~standard`, _);
      },
    },
  ),
  _ = (_, _) =>
    _.issues.length
      ? {
          issues: _.issues.map((_) => _(_, _, _())),
        }
      : {
          value: _.value,
        };
async function _(_, _) {
  let _ = {
    async: !0,
  };
  return _(
    await _._zod.run(
      {
        value: _,
        issues: [],
      },
      _,
    ),
    _,
  );
}
function _(_) {
  return {
    validate: (_) => {
      let _ = {
        async: !1,
      };
      try {
        let _ = _._zod.run(
          {
            value: _,
            issues: [],
          },
          _,
        );
        if (!(_ instanceof Promise)) return _(_, _);
      } catch {}
      return _(_, _);
    },
    vendor: `zod`,
    version: 1,
  };
}
var _ = _(`$ZodString`, (_, _) => {
    (_.init(_, _),
      (_._zod.pattern = _.pattern ?? _),
      (_._zod.parse = (_, _) => {
        if (_.coerce)
          try {
            _.value = String(_.value);
          } catch {}
        return (
          typeof _.value == `string` ||
            _.issues.push({
              expected: `string`,
              code: `invalid_type`,
              input: _.value,
              inst: _,
            }),
          _
        );
      }));
  }),
  _ = _(`$ZodStringFormat`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`$ZodGUID`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodUUID`, (_, _) => {
    if (_.version) {
      let _ = {
        _: 1,
        _: 2,
        _: 3,
        _: 4,
        _: 5,
        _: 6,
        _: 7,
        _: 8,
      }[_.version];
      if (_ === void 0) throw Error(`Invalid UUID version: "${_.version}"`);
      _.pattern ??= _(_);
    } else _.pattern ??= _();
    _.init(_, _);
  }),
  _ = _(`$ZodEmail`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  });
function _(_) {
  try {
    return typeof URL < `u` && typeof URL.canParse == `function`
      ? URL.canParse(_)
      : (new URL(_), !0);
  } catch {
    return !1;
  }
}
function _(_, _) {
  return !(`normalize` in _) && !(`hostname` in _) && !(`protocol` in _)
    ? _(_) || 2
    : _(_, _);
}
function _(_, _) {
  if (
    !_.normalize &&
    _.protocol?.source === _.source &&
    !/^https?:\/\//i.test(_)
  )
    return 1;
  try {
    if (typeof URL < `u`) {
      let _ = URL;
      if (typeof _.parse == `function`) return _.parse(_) ?? 2;
    }
    return new URL(_);
  } catch {
    return 2;
  }
}
var _ = /[\t\n\r]/g;
function _(_) {
  return _.replace(_, ``);
}
function _(_, _) {
  return ((_.lastIndex = 0), _.test(_.hostname));
}
function _(_, _) {
  return (
    (_.lastIndex = 0),
    _.test(_.protocol.endsWith(`:`) ? _.protocol.slice(0, -1) : _.protocol)
  );
}
var _ = _(`$ZodURL`, (_, _) => {
    (_.init(_, _),
      (_._zod.check = (_) => {
        try {
          let _ = _.value.trim(),
            _ = _(_, _);
          if (_ === 1) {
            _.issues.push({
              code: `invalid_format`,
              format: `url`,
              note: `Invalid URL format`,
              input: _.value,
              inst: _,
              continue: !_.abort,
            });
            return;
          }
          if (_ === 2) {
            _.issues.push({
              code: `invalid_format`,
              format: `url`,
              input: _.value,
              inst: _,
              continue: !_.abort,
            });
            return;
          }
          if (_ === !0) {
            _.value = _(_);
            return;
          }
          (_.hostname &&
            !_(_, _.hostname) &&
            _.issues.push({
              code: `invalid_format`,
              format: `url`,
              note: `Invalid hostname`,
              pattern: _.hostname.source,
              input: _.value,
              inst: _,
              continue: !_.abort,
            }),
            _.protocol &&
              !_(_, _.protocol) &&
              _.issues.push({
                code: `invalid_format`,
                format: `url`,
                note: `Invalid protocol`,
                pattern: _.protocol.source,
                input: _.value,
                inst: _,
                continue: !_.abort,
              }),
            (_.value = _.normalize ? _.href : _(_)));
          return;
        } catch {
          _.issues.push({
            code: `invalid_format`,
            format: `url`,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
        }
      }));
  }),
  _ = _(`$ZodEmoji`, (_, _) => {
    ((_.pattern ??= _()), _.init(_, _));
  }),
  _ = _(`$ZodNanoID`, (_, _) => {
    if (_.length !== void 0 && (!Number.isInteger(_.length) || _.length < 1))
      throw Error(`Invalid nanoid length: ${_.length}`);
    ((_.pattern ??= _.length === void 0 ? _ : _(_.length)), _.init(_, _));
  }),
  _ = _(`$ZodCUID`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodCUID2`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodULID`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodXID`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodKSUID`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodISODateTime`, (_, _) => {
    ((_.pattern ??= _(_)), _.init(_, _));
  }),
  _ = _(`$ZodISODate`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodISOTime`, (_, _) => {
    ((_.pattern ??= _(_)), _.init(_, _));
  }),
  _ = _(`$ZodISODuration`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = _(`$ZodIPv4`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  }),
  _ = /^[0-9a-fA-F:.]+$/;
function _(_) {
  return _.test(_) ? _(`http://[${_}]`) : !1;
}
var _ = _(`$ZodIPv6`, (_, _) => {
    ((_.pattern ??= _),
      _.init(_, _),
      (_._zod.check = (_) => {
        _(_.value) ||
          _.issues.push({
            code: `invalid_format`,
            format: `ipv6`,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodCIDRv4`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  });
function _(_) {
  let _ = _.split(`/`);
  if (_.length !== 2) return !1;
  let [_, _] = _;
  if (!_) return !1;
  let _ = Number(_);
  return `${_}` !== _ || _ < 0 || _ > 128 ? !1 : _(_);
}
var _ = _(`$ZodCIDRv6`, (_, _) => {
  ((_.pattern ??= _),
    _.init(_, _),
    (_._zod.check = (_) => {
      _(_.value) ||
        _.issues.push({
          code: `invalid_format`,
          format: `cidrv6`,
          input: _.value,
          inst: _,
          continue: !_.abort,
        });
    }));
});
function _(_) {
  if (_ === ``) return !0;
  if (/\s/.test(_) || _.length % 4 != 0) return !1;
  try {
    return (atob(_), !0);
  } catch {
    return !1;
  }
}
var _ = /^[0-9a-zA-Z+/]*={0,2}$/,
  _ = _(`$ZodBase64`, (_, _) => {
    ((_.pattern ??= _),
      _.init(_, _),
      (_._zod.check = (_) => {
        _(_.value) ||
          _.issues.push({
            code: `invalid_format`,
            format: `base64`,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = /^[A-Za-z0-9_-]*$/;
function _(_) {
  if (!_.test(_)) return !1;
  let _ = _.replace(/[-_]/g, (_) => (_ === `-` ? `+` : `/`));
  return _(_.padEnd(Math.ceil(_.length / 4) * 4, `=`));
}
var _ = _(`$ZodBase64URL`, (_, _) => {
    ((_.pattern ??= _),
      _.init(_, _),
      (_._zod.check = (_) => {
        _(_.value) ||
          _.issues.push({
            code: `invalid_format`,
            format: `base64url`,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodE164`, (_, _) => {
    ((_.pattern ??= _), _.init(_, _));
  });
function _(_, _ = null) {
  try {
    let _ = _.split(`.`);
    if (_.length !== 3) return !1;
    let [_] = _;
    if (!_) return !1;
    let _ = JSON.parse(atob(_));
    return !(
      (`typ` in _ && _?.typ !== `JWT`) ||
      !_.alg ||
      (_ && (!(`alg` in _) || _.alg !== _))
    );
  } catch {
    return !1;
  }
}
var _ = _(`$ZodJWT`, (_, _) => {
    (_.init(_, _),
      (_._zod.check = (_) => {
        _(_.value, _.alg) ||
          _.issues.push({
            code: `invalid_format`,
            format: `jwt`,
            input: _.value,
            inst: _,
            continue: !_.abort,
          });
      }));
  }),
  _ = _(`$ZodNumber`, (_, _) => {
    (_.init(_, _),
      (_._zod.pattern = _),
      (_._zod.parse = (_, _) => {
        if (_.coerce)
          try {
            _.value = Number(_.value);
          } catch {}
        let _ = _.value;
        if (typeof _ == `number` && !Number.isNaN(_) && Number.isFinite(_))
          return _;
        let _ =
          typeof _ == `number`
            ? Number.isNaN(_)
              ? `NaN`
              : Number.isFinite(_)
                ? void 0
                : String(_)
            : void 0;
        return (
          _.issues.push({
            expected: `number`,
            code: `invalid_type`,
            input: _,
            inst: _,
            ...(_
              ? {
                  received: _,
                }
              : {}),
          }),
          _
        );
      }));
  }),
  _ = _(`$ZodNumberFormat`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`$ZodBoolean`, (_, _) => {
    (_.init(_, _),
      (_._zod.pattern = _),
      (_._zod.parse = (_, _) => {
        if (_.coerce)
          try {
            _.value = !!_.value;
          } catch {}
        let _ = _.value;
        return (
          typeof _ == `boolean` ||
            _.issues.push({
              expected: `boolean`,
              code: `invalid_type`,
              input: _,
              inst: _,
            }),
          _
        );
      }));
  }),
  _ = _(`$ZodUnknown`, (_, _) => {
    (_.init(_, _), (_._zod.parse = (_) => _));
  }),
  _ = _(`$ZodNever`, (_, _) => {
    (_.init(_, _),
      (_._zod.parse = (_, _) => (
        _.issues.push({
          expected: `never`,
          code: `invalid_type`,
          input: _.value,
          inst: _,
        }),
        _
      )));
  });
function _(_, _) {
  let _ = _(_._zod.def.checks);
  if (!_.length) return;
  let _ = Math.min(..._.map((_) => _[0])),
    _ = _._zod.parse;
  _._zod.parse = (_, _) => {
    let _ = _(_.value);
    if (_ > _ && !_?.skipChecks && _?.direction !== `backward`) {
      for (let [_, _] of _(_._zod.def.checks))
        if (_ > _ && _._zod.def.when(_)) {
          let _ = _.issues.length;
          return (
            _._zod.check(_), (_.issues[_].continue = !1), _(_.issues, _, _), _
          );
        }
    }
    return _(_, _);
  };
}
var _ = (_) => (Array.isArray(_) ? _.length : -1);
function _(_, _, _) {
  (_.issues.length && _.issues.push(..._(_, _.issues)), (_.value[_] = _.value));
}
var _ = _(`$ZodArray`, (_, _) => {
  _.init(_, _);
  let _ = _.memoizer;
  (_?.attach(_),
    (_._zod.parse = (_, _) => {
      let _ = _.value;
      if (!Array.isArray(_))
        return (
          _.issues.push({
            expected: `array`,
            code: `invalid_type`,
            input: _,
            inst: _,
          }),
          _
        );
      _.value = _ ? _.alloc(_, _, Array(_.length), _) : Array(_.length);
      let _ = [],
        _ = _?.abortEarly;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_],
          _ = _.element._zod.run(
            {
              value: _,
              issues: [],
            },
            _,
          );
        if (_ instanceof Promise) _.push(_.then((_) => _(_, _, _)));
        else if ((_(_, _, _), _ && _.issues.length !== 0 && _(_))) break;
      }
      return _.length ? Promise.all(_).then(() => _) : _;
    }),
    _(_, _));
});
function _(_, _, _, _, _, _) {
  let _ = _ in _,
    _ = _ === `optional`;
  if (_ || !_ || _ !== `optional`) {
    if (_.issues.length) {
      if (_ !== void 0 && _ && !_) return;
      _.issues.push(..._(_, _.issues));
    }
    !_ && _ === void 0
      ? _.issues.length ||
        _.issues.push({
          code: `invalid_type`,
          expected: `nonoptional`,
          input: void 0,
          path: [_],
        })
      : _.value === void 0
        ? (_ || (_ === `defaulted` && !_)) && (_.value[_] = void 0)
        : (_.value[_] = _.value);
  }
}
var _ = [];
function _(_) {
  let _ = Object.keys(_.shape),
    _ = Object.getOwnPropertySymbols(_.shape),
    _ = _.length ? _ : _,
    _ = _.length ? [..._, ..._] : _;
  for (let _ of _)
    if (!_.shape?.[_]?._zod?.traits?.has(`$ZodType`))
      throw Error(
        `Invalid element at key "${String(_)}": expected a Zod schema`,
      );
  let _ = _(_.shape);
  return {
    ..._,
    allKeys: _,
    symbolKeys: _,
    keySet: new Set(_),
    numKeys: _.length,
    optionalKeys: new Set(_),
  };
}
function _(_, _, _, _, _, _, _) {
  let _ = [],
    _ = _.keySet,
    _ = _.catchall._zod,
    _ = _.def.type,
    _ = _.optin,
    _ = _.optout,
    _ = 0;
  for (let _ in _) {
    if (_ && _.issues.length !== _) {
      if (_(_, _)) break;
      _ = _.issues.length;
    }
    if (_.has(_)) continue;
    if (_ === `__proto__`) {
      _ === `never` && _.push(_);
      continue;
    }
    if (_ === `never`) {
      _.push(_);
      continue;
    }
    let _ = _.run(
      {
        value: _[_],
        issues: [],
      },
      _,
    );
    _ instanceof Promise
      ? _.push(_.then((_) => _(_, _, _, _, _, _)))
      : _(_, _, _, _, _, _);
  }
  return (
    _.length &&
      _.issues.push({
        code: `unrecognized_keys`,
        keys: _,
        input: _,
        inst: _,
        continue: !0,
      }),
    _.length ? Promise.all(_).then(() => _) : _
  );
}
var _ = _(`$ZodObject`, (_, _) => {
    _.init(_, _);
    let _ = Object.getOwnPropertyDescriptor(_, `shape`),
      _ = _?.get ? _.get.raw : (_.shape ?? {});
    if (_) {
      let _ = () => {
        let _ = {
          ..._,
        };
        return (
          Object.defineProperty(_, "shape", {
            value: _,
          }),
          (_.raw = _),
          _
        );
      };
      ((_.raw = _),
        Object.defineProperty(_, "shape", {
          get: _,
        }));
    }
    let _ = _(() => _(_));
    _(_, `propValues`, (_) => {
      let _ = _.def.shape,
        _ = {};
      for (let _ in _) {
        let _ = _[_]._zod;
        if (_.values) {
          Object.prototype.hasOwnProperty.call(_, _) || _(_, _, new Set());
          for (let _ of _.values) _[_].add(_);
          _.optin !== void 0 && _[_].add(void 0);
        }
      }
      return _;
    });
    let _ = _,
      _ = _.catchall,
      _,
      _ = _.memoizer;
    (_?.attach(_),
      (_._zod.parse = (_, _) => {
        _ ??= _.value;
        let _ = _.value;
        if (!_(_))
          return (
            _.issues.push({
              expected: `object`,
              code: `invalid_type`,
              input: _,
              inst: _,
            }),
            _
          );
        _.value = _ ? _.alloc(_, _, {}, _) : {};
        let _ = [],
          _ = _.shape,
          _ = _?.abortEarly,
          _ = _.issues.length;
        for (let _ of _.allKeys) {
          if (_ && _.issues.length !== _) {
            if (_(_, _)) break;
            _ = _.issues.length;
          }
          if (_ === `__proto__`) continue;
          let _ = _[_],
            _ = _._zod.optin,
            _ = _._zod.optout,
            _ = _._zod.run(
              {
                value: _[_],
                issues: [],
              },
              _,
            );
          _ instanceof Promise
            ? _.push(_.then((_) => _(_, _, _, _, _, _)))
            : _(_, _, _, _, _, _);
        }
        return _
          ? _(_, _, _, _, _.value, _, _ === !0)
          : _.length
            ? Promise.all(_).then(() => _)
            : _;
      }));
  }),
  _ = _(`$ZodObjectJIT`, (_, _) => {
    _.init(_, _);
    let _ = _._zod.parse,
      _ = _(() => _(_)),
      _ = _.memoizer,
      _ = (_) => {
        let _ = _.value,
          _ = _.symbolKeys,
          _ = new _([`payload`, `ctx`], {
            shape: _,
            inst: _,
            memo: _,
            syms: _,
          }),
          _ = (_) =>
            `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`,
          _ = (_, _) => `
          let ${_}_ab = false;
          for (let i = 0; i < ${_}.issues.length; i++) {
            const iss = ${_}.issues[i];
            iss.path = iss.path ? [${_}, ...iss.path] : [${_}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${_}_ab = true;
          }
          if (${_}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        _.write(`const input = payload.value;`);
        let _ = Object.create(null),
          _ = 0;
        for (let _ of _.allKeys) _[_] = `key_${_++}`;
        _.write(
          _
            ? `const newResult = memo.alloc(inst, payload, {}, ctx);`
            : `const newResult = {};`,
        );
        for (let _ of _.allKeys) {
          if (_ === `__proto__`) continue;
          let _ = _[_],
            _ = typeof _ == `symbol` ? `syms[${_.indexOf(_)}]` : _(_),
            _ = `${_} in input`,
            _ = _[_],
            _ = _?._zod?.optin,
            _ = _ !== void 0,
            _ = _?._zod?.optout === `optional`;
          if ((_.write(`const ${_} = ${_(_)};`), _ && _)) {
            let _ =
              _ === `optional`
                ? `${_}_present`
                : `${_}.value !== undefined || ${_}_present`;
            _.write(`
        const ${_}_present = ${_};
        if (!${_}.issues.length || ${_}_present) {
          if (${_}.issues.length) {${_(_, _)}
          }

          if (${_}) {
            newResult[${_}] = ${_}.value;
          }
        }

      `);
          } else
            _
              ? (_.write(`
        if (${_}.issues.length) {${_(_, _)}
        }
      `),
                _ === `defaulted`
                  ? _.write(`newResult[${_}] = ${_}.value;`)
                  : _.write(`
        if (${_}.value !== undefined || ${_}) {
          newResult[${_}] = ${_}.value;
        }
      `))
              : _.write(`
        const ${_}_present = ${_};
        if (${_}.issues.length) {${_(_, _)}
        }
        if (!${_}_present && !${_}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${_}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${_}_present) {
          newResult[${_}] = ${_}.value;
        }

      `);
        }
        return (
          _.write(`payload.value = newResult;`),
          _.write(`return payload;`),
          _.compile()
        );
      },
      _,
      _ = _,
      _ = !_.jitless,
      _ = _ && _.value,
      _ = _.catchall,
      _;
    _._zod.parse = (_, _) => {
      _ ??= _.value;
      let _ = _.value;
      return _(_)
        ? _ && _ && _?.async === !1 && _.jitless !== !0
          ? ((_ ||= _(_.shape)),
            (_ = _(_, _)),
            _ ? _([], _, _, _, _, _, _?.abortEarly === !0) : _)
          : _(_, _)
        : (_.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: _,
            inst: _,
          }),
          _);
    };
  });
function _(_, _, _, _) {
  for (let _ of _) if (_.issues.length === 0) return ((_.value = _.value), _);
  let _ = _.filter((_) => !_(_));
  return _.length === 1
    ? ((_.value = _[0].value), _[0])
    : (_.issues.push({
        code: `invalid_union`,
        input: _.value,
        inst: _,
        errors: _.map((_) => _.issues.map((_) => _(_, _, _()))),
      }),
      _);
}
var _ = _(`$ZodUnion`, (_, _) => {
    (_.init(_, _),
      _(_, `optin`, (_) =>
        _.def.options.some((_) => _._zod.optin === `defaulted`)
          ? `defaulted`
          : _.def.options.some((_) => _._zod.optin !== void 0)
            ? `optional`
            : void 0,
      ),
      _(_, `optout`, (_) =>
        _.def.options.some((_) => _._zod.optout === `optional`)
          ? `optional`
          : void 0,
      ),
      _(_, `values`, (_) => {
        if (_.def.options.every((_) => _._zod.values))
          return new Set(
            _.def.options.flatMap((_) => Array.from(_._zod.values)),
          );
      }),
      _(_, `pattern`, (_) => {
        if (_.def.options.every((_) => _._zod.pattern)) {
          let _ = _.def.options.map((_) => _._zod.pattern);
          return RegExp(`^(${_.map((_) => _(_.source)).join(`|`)})$`);
        }
      }));
    let _ = _.options.length === 1 ? _.options[0]._zod.run : null;
    _._zod.parse = (_, _) => {
      if (_) return _(_, _);
      let _ = !1,
        _ = [];
      for (let _ of _.options) {
        let _ = _._zod.run(
          {
            value: _.value,
            issues: [],
          },
          _,
        );
        if (_ instanceof Promise) (_.push(_), (_ = !0));
        else {
          if (_.issues.length === 0) return _;
          _.push(_);
        }
      }
      return _ ? Promise.all(_).then((_) => _(_, _, _, _)) : _(_, _, _, _);
    };
  }),
  _ = _(`$ZodIntersection`, (_, _) => {
    (_.init(_, _),
      (_._zod.parse = (_, _) => {
        let _ = _.value,
          _ = _.left._zod.run(
            {
              value: _,
              issues: [],
            },
            _,
          ),
          _ = _.right._zod.run(
            {
              value: _,
              issues: [],
            },
            _,
          );
        return _ instanceof Promise || _ instanceof Promise
          ? Promise.all([_, _]).then(([_, _]) => _(_, _, _))
          : _(_, _, _);
      }));
  });
function _(_, _) {
  if (_ === _ || (_ instanceof Date && _ instanceof Date && +_ == +_))
    return {
      valid: !0,
      data: _,
    };
  if (_(_) && _(_)) {
    let _ = Object.keys(_),
      _ = Object.keys(_).filter((_) => _.indexOf(_) !== -1),
      _ = {
        ..._,
        ..._,
      };
    Object.prototype.hasOwnProperty.call(_, `__proto__`) && delete _.__proto__;
    for (let _ of _) {
      if (_ === `__proto__`) continue;
      let _ = _(_[_], _[_]);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [_, ..._.mergeErrorPath],
        };
      _[_] = _.data;
    }
    return {
      valid: !0,
      data: _,
    };
  }
  if (Array.isArray(_) && Array.isArray(_)) {
    if (_.length !== _.length)
      return {
        valid: !1,
        mergeErrorPath: [],
      };
    let _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_],
        _ = _[_],
        _ = _(_, _);
      if (!_.valid)
        return {
          valid: !1,
          mergeErrorPath: [_, ..._.mergeErrorPath],
        };
      _.push(_.data);
    }
    return {
      valid: !0,
      data: _,
    };
  }
  return {
    valid: !1,
    mergeErrorPath: [],
  };
}
function _(_, _, _) {
  let _ = new Map(),
    _,
    _ = new Map(),
    _ = (_, _) => {
      let _;
      if (_.code === `unrecognized_keys` && !_.path?.length)
        ((_ ??= _), (_ = _.keys));
      else if (
        _.code === `invalid_key` &&
        _.origin === `record` &&
        _.path?.length === 1
      ) {
        let _ = String(_.path[0]);
        (_.has(_) || _.set(_, _), (_ = [_]));
      } else return !1;
      for (let _ of _) (_.has(_) || _.set(_, {}), (_.get(_)[_] = !0));
      return !0;
    };
  for (let _ of _.issues) _(_, `l`) || _.issues.push(_);
  for (let _ of _.issues) _(_, `r`) || _.issues.push(_);
  let _ = [..._].filter(([, _]) => _._ && _._).map(([_]) => _);
  if (_.length) {
    let _ = _ ? _.filter((_) => _.keys.includes(_)) : [];
    _.length &&
      _.issues.push({
        ..._,
        keys: _,
      });
    for (let _ of _) !_.includes(_) && _.has(_) && _.issues.push(_.get(_));
  }
  let _ = _(_.value, _.value);
  if (!_.valid) {
    if (_(_)) return _;
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(_.mergeErrorPath)}`,
    );
  }
  return ((_.value = _.data), _);
}
var _ = _(`$ZodEnum`, (_, _) => {
    _.init(_, _);
    let _ = _(_.entries),
      _ = new Set(_);
    ((_._zod.values = _),
      _(_, `pattern`, (_) => {
        let _ = _(_.def.entries).filter((_) => _.has(typeof _));
        return RegExp(
          _.length
            ? `^(${_.map((_) => _(_.toString())).join(`|`)})$`
            : `^[^\\s\\S]$`,
        );
      }),
      (_._zod.parse = (_, _) => {
        let _ = _.value;
        return (
          _.has(_) ||
            _.issues.push({
              code: `invalid_value`,
              values: _,
              input: _,
              inst: _,
            }),
          _
        );
      }));
  }),
  _ = _(`$ZodLiteral`, (_, _) => {
    _.init(_, _);
    let _ = new Set(_.values);
    ((_._zod.values = _),
      _(_, `pattern`, (_) => {
        let _ = _.def.values;
        return RegExp(
          _.length
            ? `^(${_.map((_) => (typeof _ == `string` ? _(_) : _ ? _(_.toString()) : String(_))).join(`|`)})$`
            : `^[^\\s\\S]$`,
        );
      }),
      (_._zod.parse = (_, _) => {
        let _ = _.value;
        return (
          _.has(_) ||
            _.issues.push({
              code: `invalid_value`,
              values: _.values,
              input: _,
              inst: _,
            }),
          _
        );
      }));
  }),
  _ = _(`$ZodTransform`, (_, _) => {
    (_.init(_, _),
      (_._zod.optin = `optional`),
      _.memoizer?.guard(_),
      (_._zod.parse = (_, _) => {
        if (_.direction === `backward`) throw new _(_.constructor.name);
        let _ = _.transform(_.value, _);
        if (_.async)
          return (_ instanceof Promise ? _ : Promise.resolve(_)).then(
            (_) => ((_.value = _), _),
          );
        if (_ instanceof Promise) throw new _();
        return ((_.value = _), _);
      }));
  });
function _(_, _) {
  return ((_.value = _.issues.length ? void 0 : _.value), _);
}
var _ = _(`$ZodOptional`, (_, _) => {
    (_.init(_, _),
      _(_, `optin`, (_) =>
        _.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`,
      ),
      (_._zod.optout = `optional`),
      _(_, `values`, (_) => {
        let _ = _.def.innerType._zod.values;
        return _ ? new Set([..._, void 0]) : void 0;
      }),
      _(_, `pattern`, (_) => {
        let _ = _.def.innerType._zod.pattern;
        return _ ? RegExp(`^(${_(_.source)})?$`) : void 0;
      }),
      (_._zod.parse = (_, _) => {
        if (_.value === void 0) {
          if (_.innerType._zod.optin !== `defaulted`) return _;
          let _ = _.innerType._zod.run(
            {
              value: _.value,
              issues: [],
            },
            _,
          );
          return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
        }
        return _.innerType._zod.run(_, _);
      }));
  }),
  _ = _(`$ZodExactOptional`, (_, _) => {
    (_.init(_, _),
      _(_, `values`, (_) => _.def.innerType._zod.values),
      _(_, `pattern`, (_) => _.def.innerType._zod.pattern),
      (_._zod.parse = (_, _) => _.innerType._zod.run(_, _)));
  }),
  _ = _(`$ZodNullable`, (_, _) => {
    (_.init(_, _),
      _(_, `optin`, (_) => _.def.innerType._zod.optin),
      _(_, `optout`, (_) => _.def.innerType._zod.optout),
      _(_, `pattern`, (_) => {
        let _ = _.def.innerType._zod.pattern;
        return _ ? RegExp(`^(${_(_.source)}|null)$`) : void 0;
      }),
      _(_, `values`, (_) =>
        _.def.innerType._zod.values
          ? new Set([..._.def.innerType._zod.values, null])
          : void 0,
      ),
      (_._zod.parse = (_, _) =>
        _.value === null ? _ : _.innerType._zod.run(_, _)));
  }),
  _ = _(`$ZodDefault`, (_, _) => {
    (_.init(_, _),
      (_._zod.optin = `defaulted`),
      _(_, `values`, (_) => _.def.innerType._zod.values),
      (_._zod.parse = (_, _) => {
        if (_.direction === `backward`) return _.innerType._zod.run(_, _);
        if (_.value === void 0) return ((_.value = _.defaultValue), _);
        let _ = _.innerType._zod.run(_, _);
        return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
      }));
  });
function _(_, _) {
  return (_.value === void 0 && (_.value = _.defaultValue), _);
}
var _ = _(`$ZodPrefault`, (_, _) => {
    (_.init(_, _),
      (_._zod.optin = `defaulted`),
      _(_, `values`, (_) => _.def.innerType._zod.values),
      (_._zod.parse = (_, _) => (
        _.direction === `backward` ||
          (_.value === void 0 && (_.value = _.defaultValue)),
        _.innerType._zod.run(_, _)
      )));
  }),
  _ = _(`$ZodNonOptional`, (_, _) => {
    (_.init(_, _),
      _(_, `values`, (_) => {
        let _ = _.def.innerType._zod.values;
        return _ ? new Set([..._].filter((_) => _ !== void 0)) : void 0;
      }),
      (_._zod.parse = (_, _) => {
        let _ = _.innerType._zod.run(_, _);
        return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
      }));
  });
function _(_, _) {
  return (
    !_.issues.length &&
      _.value === void 0 &&
      _.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: _.value,
        inst: _,
      }),
    _
  );
}
function _(_, _, _, _) {
  return _.issues.length
    ? ((_.value = _.catchValue({
        ..._,
        value: _.value,
        error: {
          issues: _.issues.map((_) => _(_, _, _())),
        },
        input: _.value,
      })),
      _)
    : ((_.value = _.value), _.memo && (_.memo = !0), _);
}
var _ = _(`$ZodCatch`, (_, _) => {
    (_.init(_, _),
      _(_, `optin`, (_) =>
        _.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`,
      ),
      _(_, `optout`, (_) => _.def.innerType._zod.optout),
      _(_, `values`, (_) => _.def.innerType._zod.values),
      (_._zod.parse = (_, _) => {
        if (_.direction === `backward`) return _.innerType._zod.run(_, _);
        let _ = _.innerType._zod.run(
          {
            value: _.value,
            issues: [],
          },
          _,
        );
        return _ instanceof Promise
          ? _.then((_) => _(_, _, _, _))
          : _(_, _, _, _);
      }));
  }),
  _ = _(`$ZodPipe`, (_, _) => {
    (_.init(_, _),
      _(_, `values`, (_) => _.def._._zod.values),
      _(_, `optin`, (_) => _.def._._zod.optin),
      _(_, `optout`, (_) => _.def.out._zod.optout),
      _(_, `propValues`, (_) => _.def._._zod.propValues),
      (_._zod.parse = (_, _) => {
        if (_.direction === `backward`) {
          let _ = _.out._zod.run(_, _);
          return _ instanceof Promise
            ? _.then((_) => _(_, _._, _))
            : _(_, _._, _);
        }
        let _ = _._._zod.run(_, _);
        return _ instanceof Promise
          ? _.then((_) => _(_, _.out, _))
          : _(_, _.out, _);
      }));
  });
function _(_, _, _) {
  return _.issues.some((_) => _.code !== `unrecognized_keys`)
    ? ((_.aborted = !0), _)
    : _._zod.run(
        {
          value: _.value,
          issues: _.issues,
        },
        _,
      );
}
var _ = _(`$ZodCodec`, (_, _) => {
  (_.init(_, _),
    _(_, `values`, (_) => _.def._._zod.values),
    _(_, `optin`, (_) => _.def._._zod.optin),
    _(_, `optout`, (_) => _.def.out._zod.optout),
    _(_, `propValues`, (_) => _.def._._zod.propValues),
    (_._zod.parse = (_, _) => {
      if ((_.direction || `forward`) === `forward`) {
        let _ = _._._zod.run(_, _);
        return _ instanceof Promise ? _.then((_) => _(_, _, _)) : _(_, _, _);
      }
      {
        let _ = _.out._zod.run(_, _);
        return _ instanceof Promise ? _.then((_) => _(_, _, _)) : _(_, _, _);
      }
    }));
});
function _(_, _, _) {
  if (_.issues.length) return ((_.aborted = !0), _);
  if ((_.direction || `forward`) === `forward`) {
    let _ = _.transform(_.value, _);
    return _ instanceof Promise
      ? _.then((_) => _(_, _, _.out, _))
      : _(_, _, _.out, _);
  }
  {
    let _ = _.reverseTransform(_.value, _);
    return _ instanceof Promise
      ? _.then((_) => _(_, _, _._, _))
      : _(_, _, _._, _);
  }
}
function _(_, _, _, _) {
  return _.issues.length
    ? ((_.aborted = !0), _)
    : _._zod.run(
        {
          value: _,
          issues: _.issues,
        },
        _,
      );
}
var _ = _(`$ZodReadonly`, (_, _) => {
  (_.init(_, _),
    _(_, `propValues`, (_) => _.def.innerType._zod.propValues),
    _(_, `values`, (_) => _.def.innerType._zod.values),
    _(_, `optin`, (_) => _.def.innerType?._zod?.optin),
    _(_, `optout`, (_) => _.def.innerType?._zod?.optout),
    (_._zod.parse = (_, _) => {
      if (_.direction === `backward`) return _.innerType._zod.run(_, _);
      let _ = _.innerType._zod.run(_, _);
      return _ instanceof Promise ? _.then(_) : _(_);
    }));
});
function _(_) {
  return (_.memo || (_.value = Object.freeze(_.value)), _);
}
var _ = _(`$ZodCustom`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.parse = (_, _) => _),
    (_._zod.check = (_) => {
      let _ = _.value,
        _ = _._(_);
      if (_ instanceof Promise) return _.then((_) => _(_, _, _, _));
      _(_, _, _, _);
    }));
});
function _(_, _, _, _) {
  if (!_) {
    let _ = {
      code: `custom`,
      input: _,
      inst: _,
      path: [...(_._zod.def.path ?? [])],
      continue: !_._zod.def.abort,
    };
    (_._zod.def.params && (_.params = _._zod.def.params), _.issues.push(_(_)));
  }
}
var _ = class extends Error {
    constructor() {
      (super(`Cannot parse a reference cycle that closes through a transform`),
        (this.name = `ZodCyclicError`));
    }
  },
  _ = `~memo`,
  _ = [];
function _(_) {
  return typeof _ == `object` && !!_;
}
function _(_) {
  return _.map((_) =>
    _.path
      ? {
          ..._,
          path: _.path.slice(),
        }
      : {
          ..._,
        },
  );
}
var _ = new WeakMap(),
  _ = 0,
  _ = 1,
  _ = 2;
function _(_, _, _) {
  let _ = _.get(_);
  if (_ !== void 0) return _ ? _ : _;
  if (_.has(_)) return _;
  _.add(_);
  let _ = _,
    _ = (_) => {
      if (_ !== _ && _?._zod) {
        let _ = _(_, _, _);
        _ > _ && (_ = _);
      }
    },
    _ = (_, _) => {
      let _ = _;
      for (let _ of Reflect.ownKeys(_)) {
        let _ = Object.getOwnPropertyDescriptor(_, _);
        if (_ && !_.enumerable) continue;
        let _ = _.get ? _ : _.value?._zod ? _(_.value, _, _) : _;
        _ > _ && (_ = _);
      }
      return _;
    },
    _ = (_) => {
      _ > _ && (_ = _);
    },
    _ = _._zod.def;
  switch (_.type) {
    case `object`: {
      let _ = _(_);
      (_(_ ? _(_, !0) : _), _(_.catchall));
      break;
    }
    case `array`:
      _(_.element);
      break;
    case `tuple`:
      for (let _ of _.items) _(_);
      _(_.rest);
      break;
    case `record`:
    case `map`:
      (_(_.keyType), _(_.valueType));
      break;
    case `set`:
      _(_.valueType);
      break;
    case `union`:
      for (let _ of _.options) _(_);
      break;
    case `intersection`:
      (_(_.left), _(_.right));
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
      _(_.innerType);
      break;
    case `pipe`:
      (_(_._), _(_.out));
      break;
    case `function`:
      (_(_.input), _(_.output));
      break;
    case `lazy`: {
      let _ = _._cachedInner ?? (_ ? _._zod.innerType : void 0);
      _(_ ? _(_, _, !1) : _);
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
      for (let _ in _) {
        let _ = Object.getOwnPropertyDescriptor(_, _);
        if (!_ || _.get) continue;
        let _ = _.value;
        if (_ && typeof _ == `object`) {
          if (_._zod) _(_);
          else if (Array.isArray(_)) for (let _ of _) _(_);
        }
      }
  }
  return (_.delete(_), _(_, _));
}
function _(_, _) {
  return (_ !== _ && _.set(_, _ === _), _);
}
function _(_, _) {
  let _ = _.buckets.get(_);
  return (_ || ((_ = new WeakMap()), _.buckets.set(_, _)), _);
}
var _,
  _ = [],
  _ = {
    alloc(_, _, _) {
      let _ = _;
      if (!_) return _;
      _ = void 0;
      let _ = {
        value: _,
        issues: null,
      };
      return (_.set(_.value, _), _.push(_), _);
    },
    guard(_) {
      var _;
      ((_ = _._zod).deferred ?? (_.deferred = []),
        _._zod.deferred.push(() => {
          let _ = _._zod.parse,
            _ = (_, _) => {
              if (_.direction !== `backward` && _(_, _.value)) throw new _();
              return _(_, _);
            };
          ((_._zod.parse = _), _._zod.run === _ && (_._zod.run = _));
        }));
    },
    attach(_) {
      var _;
      let _,
        _ = !1,
        _,
        _;
      ((_ = _._zod).deferred ?? (_.deferred = []),
        _._zod.deferred.push(() => {
          let _ = _._zod.parse,
            _ = (_, _) => {
              if (_ === void 0) {
                let _ = _(_, new Set(), !1);
                if (_ === _)
                  return (
                    (_._zod.parse = _),
                    _._zod.run === _ && (_._zod.run = _),
                    _(_, _)
                  );
                _ === _ || _ ? (_ = !0) : (_ = !0);
              }
              let _ = _.value;
              if (!_(_)) return _(_, _);
              let _ = _[_];
              _ ||
                ((_ = {
                  buckets: new WeakMap(),
                  backEdges: void 0,
                }),
                (_[_] = _));
              let _;
              _ === _ ? (_ = _) : ((_ = _(_, _)), (_ = _), (_ = _));
              let _ = _.get(_);
              if (_)
                return (
                  (_.value = _.value),
                  _.issues
                    ? _.issues.length && _.issues.push(..._(_.issues))
                    : ((_.memo = !0),
                      _.backEdges ?? (_.backEdges = new WeakSet()),
                      _.backEdges.add(_.value)),
                  _
                );
              _ = _;
              let _ = _.length,
                _ = _(_, _);
              _ = void 0;
              let _ = _.length > _ ? _.pop() : void 0;
              return _ instanceof Promise
                ? _.then(
                    (_) => (
                      _ && (_.issues = _.issues.length ? _(_.issues) : _),
                      _
                    ),
                  )
                : (_ && (_.issues = _.issues.length ? _(_.issues) : _), _);
            };
          ((_._zod.parse = _), _._zod.run === _ && (_._zod.run = _));
        }));
    },
  };
function _() {
  return _;
}
function _(_, _) {
  let _ = _[_]?.backEdges;
  return _ !== void 0 && _(_) && _.has(_);
}
var _ = () => {
  let _ = {
    string: {
      unit: `حرف`,
      verb: `أن يحوي`,
    },
    file: {
      unit: `بايت`,
      verb: `أن يحوي`,
    },
    array: {
      unit: `عنصر`,
      verb: `أن يحوي`,
    },
    set: {
      unit: `عنصر`,
      verb: `أن يحوي`,
    },
    map: {
      unit: `عنصر`,
      verb: `أن يحوي`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${_.expected}، ولكن تم إدخال ${_}`
          : `مدخلات غير مقبولة: يفترض إدخال ${_}، ولكن تم إدخال ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `مدخلات غير مقبولة: يفترض إدخال ${_(_.values[0])}`
          : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? ` أكبر من اللازم: يفترض أن تكون ${_.origin ?? `القيمة`} ${_} ${_.maximum.toString()} ${_.unit ?? `عنصر`}`
          : `أكبر من اللازم: يفترض أن تكون ${_.origin ?? `القيمة`} ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `أصغر من اللازم: يفترض لـ ${_.origin} أن يكون ${_} ${_.minimum.toString()} ${_.unit}`
          : `أصغر من اللازم: يفترض لـ ${_.origin} أن يكون ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `نَص غير مقبول: يجب أن يبدأ بـ "${_.prefix}"`
          : _.format === `ends_with`
            ? `نَص غير مقبول: يجب أن ينتهي بـ "${_.suffix}"`
            : _.format === `includes`
              ? `نَص غير مقبول: يجب أن يتضمَّن "${_.includes}"`
              : _.format === `regex`
                ? `نَص غير مقبول: يجب أن يطابق النمط ${_.pattern}`
                : `${_[_.format] ?? _.format} غير مقبول`;
      }
      case `not_multiple_of`:
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${_.divisor}`;
      case `unrecognized_keys`:
        return `معرف${_.keys.length > 1 ? `ات` : ``} غريب${_.keys.length > 1 ? `ة` : ``}: ${_(_.keys, `، `)}`;
      case `invalid_key`:
        return `معرف غير مقبول في ${_.origin}`;
      case `invalid_union`:
        return `مدخل غير مقبول`;
      case `invalid_element`:
        return `مدخل غير مقبول في ${_.origin}`;
      default:
        return `مدخل غير مقبول`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `simvol`,
      verb: `olmalıdır`,
    },
    file: {
      unit: `bayt`,
      verb: `olmalıdır`,
    },
    array: {
      unit: `element`,
      verb: `olmalıdır`,
    },
    set: {
      unit: `element`,
      verb: `olmalıdır`,
    },
    map: {
      unit: `element`,
      verb: `olmalıdır`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Yanlış dəyər: gözlənilən instanceof ${_.expected}, daxil olan ${_}`
          : `Yanlış dəyər: gözlənilən ${_}, daxil olan ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Yanlış dəyər: gözlənilən ${_(_.values[0])}`
          : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Çox böyük: gözlənilən ${_.origin ?? `dəyər`} ${_}${_.maximum.toString()} ${_.unit ?? `element`}`
          : `Çox böyük: gözlənilən ${_.origin ?? `dəyər`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Çox kiçik: gözlənilən ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
          : `Çox kiçik: gözlənilən ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Yanlış mətn: "${_.prefix}" ilə başlamalıdır`
          : _.format === `ends_with`
            ? `Yanlış mətn: "${_.suffix}" ilə bitməlidir`
            : _.format === `includes`
              ? `Yanlış mətn: "${_.includes}" daxil olmalıdır`
              : _.format === `regex`
                ? `Yanlış mətn: ${_.pattern} şablonuna uyğun olmalıdır`
                : `Yanlış ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Yanlış ədəd: ${_.divisor} ilə bölünə bilən olmalıdır`;
      case `unrecognized_keys`:
        return `Tanınmayan açar${_.keys.length > 1 ? `lar` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} daxilində yanlış açar`;
      case `invalid_union`:
        return `Yanlış dəyər`;
      case `invalid_element`:
        return `${_.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
function _(_, _, _, _) {
  let _ = Math.abs(_),
    _ = _ % 10,
    _ = _ % 100;
  return _ >= 11 && _ <= 19 ? _ : _ === 1 ? _ : _ >= 2 && _ <= 4 ? _ : _;
}
var _ = () => {
  let _ = {
    string: {
      unit: {
        one: `сімвал`,
        few: `сімвалы`,
        many: `сімвалаў`,
      },
      verb: `мець`,
    },
    array: {
      unit: {
        one: `элемент`,
        few: `элементы`,
        many: `элементаў`,
      },
      verb: `мець`,
    },
    set: {
      unit: {
        one: `элемент`,
        few: `элементы`,
        many: `элементаў`,
      },
      verb: `мець`,
    },
    map: {
      unit: {
        one: `элемент`,
        few: `элементы`,
        many: `элементаў`,
      },
      verb: `мець`,
    },
    file: {
      unit: {
        one: `байт`,
        few: `байты`,
        many: `байтаў`,
      },
      verb: `мець`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `лік`,
      array: `масіў`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Няправільны ўвод: чакаўся instanceof ${_.expected}, атрымана ${_}`
          : `Няправільны ўвод: чакаўся ${_}, атрымана ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Няправільны ўвод: чакалася ${_(_.values[0])}`
          : `Няправільны варыянт: чакаўся адзін з ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.maximum), _.unit.one, _.unit.few, _.unit.many);
          return `Занадта вялікі: чакалася, што ${_.origin ?? `значэнне`} павінна ${_.verb} ${_}${_.maximum.toString()} ${_}`;
        }
        return `Занадта вялікі: чакалася, што ${_.origin ?? `значэнне`} павінна быць ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.minimum), _.unit.one, _.unit.few, _.unit.many);
          return `Занадта малы: чакалася, што ${_.origin} павінна ${_.verb} ${_}${_.minimum.toString()} ${_}`;
        }
        return `Занадта малы: чакалася, што ${_.origin} павінна быць ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Няправільны радок: павінен пачынацца з "${_.prefix}"`
          : _.format === `ends_with`
            ? `Няправільны радок: павінен заканчвацца на "${_.suffix}"`
            : _.format === `includes`
              ? `Няправільны радок: павінен змяшчаць "${_.includes}"`
              : _.format === `regex`
                ? `Няправільны радок: павінен адпавядаць шаблону ${_.pattern}`
                : `Няправільны ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Няправільны лік: павінен быць кратным ${_.divisor}`;
      case `unrecognized_keys`:
        return `Нераспазнаны ${_.keys.length > 1 ? `ключы` : `ключ`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Няправільны ключ у ${_.origin}`;
      case `invalid_union`:
        return `Няправільны ўвод`;
      case `invalid_element`:
        return `Няправільнае значэнне ў ${_.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `символа`,
      verb: `да съдържа`,
    },
    file: {
      unit: `байта`,
      verb: `да съдържа`,
    },
    array: {
      unit: `елемента`,
      verb: `да съдържа`,
    },
    set: {
      unit: `елемента`,
      verb: `да съдържа`,
    },
    map: {
      unit: `елемента`,
      verb: `да съдържа`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `число`,
      array: `масив`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Невалиден вход: очакван instanceof ${_.expected}, получен ${_}`
          : `Невалиден вход: очакван ${_}, получен ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Невалиден вход: очакван ${_(_.values[0])}`
          : `Невалидна опция: очаквано едно от ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Твърде голямо: очаква се ${_.origin ?? `стойност`} да съдържа ${_}${_.maximum.toString()} ${_.unit ?? `елемента`}`
          : `Твърде голямо: очаква се ${_.origin ?? `стойност`} да бъде ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Твърде малко: очаква се ${_.origin} да съдържа ${_}${_.minimum.toString()} ${_.unit}`
          : `Твърде малко: очаква се ${_.origin} да бъде ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        if (_.format === `starts_with`)
          return `Невалиден низ: трябва да започва с "${_.prefix}"`;
        if (_.format === `ends_with`)
          return `Невалиден низ: трябва да завършва с "${_.suffix}"`;
        if (_.format === `includes`)
          return `Невалиден низ: трябва да включва "${_.includes}"`;
        if (_.format === `regex`)
          return `Невалиден низ: трябва да съвпада с ${_.pattern}`;
        let _ = `Невалиден`;
        return (
          _.format === `emoji` && (_ = `Невалидно`),
          _.format === `datetime` && (_ = `Невалидно`),
          _.format === `date` && (_ = `Невалидна`),
          _.format === `time` && (_ = `Невалидно`),
          _.format === `duration` && (_ = `Невалидна`),
          `${_} ${_[_.format] ?? _.format}`
        );
      }
      case `not_multiple_of`:
        return `Невалидно число: трябва да бъде кратно на ${_.divisor}`;
      case `unrecognized_keys`:
        return `Неразпознат${_.keys.length > 1 ? `и` : ``} ключ${_.keys.length > 1 ? `ове` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Невалиден ключ в ${_.origin}`;
      case `invalid_union`:
        return `Невалиден вход`;
      case `invalid_element`:
        return `Невалидна стойност в ${_.origin}`;
      default:
        return `Невалиден вход`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `অক্ষর`,
      verb: `থাকতে হবে`,
    },
    file: {
      unit: `বাইট`,
      verb: `থাকতে হবে`,
    },
    array: {
      unit: `আইটেম`,
      verb: `থাকতে হবে`,
    },
    set: {
      unit: `আইটেম`,
      verb: `থাকতে হবে`,
    },
    map: {
      unit: `এন্ট্রি`,
      verb: `থাকতে হবে`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `অবৈধ ইনপুট: প্রত্যাশিত ${_}, প্রাপ্ত ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `অবৈধ ইনপুট: প্রত্যাশিত ${_(_.values[0])}`
          : `অবৈধ অপশন: ${_(_.values, ` | `)} এর মধ্যে একটি প্রত্যাশিত`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `অনেক বড়: ${_.origin ?? `মান`} ${_}${_.maximum.toString()} ${_.unit ?? `এলিমেন্ট`} হতে হবে`
          : `অনেক বড়: ${_.origin ?? `মান`} ${_}${_.maximum.toString()} হতে হবে`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `অনেক ছোট: ${_.origin} ${_}${_.minimum.toString()} ${_.unit} হতে হবে`
          : `অনেক ছোট: ${_.origin} ${_}${_.minimum.toString()} হতে হবে`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `অবৈধ স্ট্রিং: "${_.prefix}" দিয়ে শুরু হতে হবে`
          : _.format === `ends_with`
            ? `অবৈধ স্ট্রিং: "${_.suffix}" দিয়ে শেষ হতে হবে`
            : _.format === `includes`
              ? `অবৈধ স্ট্রিং: "${_.includes}" অন্তর্ভুক্ত থাকতে হবে`
              : _.format === `regex`
                ? `অবৈধ স্ট্রিং: ${_.pattern} প্যাটার্ন মিলতে হবে`
                : `অবৈধ ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `অবৈধ নম্বর: ${_.divisor} এর গুণিতক হতে হবে`;
      case `unrecognized_keys`:
        return `অচেনা কী${_.keys.length > 1 ? `গুলো` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} এ অবৈধ কী`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `অবৈধ ইনপুট`;
      case `invalid_element`:
        return `${_.origin} এ অবৈধ মান`;
      default:
        return `অবৈধ ইনপুট`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caràcters`,
      verb: `contenir`,
    },
    file: {
      unit: `bytes`,
      verb: `contenir`,
    },
    array: {
      unit: `elements`,
      verb: `contenir`,
    },
    set: {
      unit: `elements`,
      verb: `contenir`,
    },
    map: {
      unit: `elements`,
      verb: `contenir`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Tipus invàlid: s'esperava instanceof ${_.expected}, s'ha rebut ${_}`
          : `Tipus invàlid: s'esperava ${_}, s'ha rebut ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Valor invàlid: s'esperava ${_(_.values[0])}`
          : `Opció invàlida: s'esperava una de ${_(_.values, ` o `)}`;
      case `too_big`: {
        let _ = _.inclusive ? `com a màxim` : `menys de`,
          _ = _(_.origin);
        return _
          ? `Massa gran: s'esperava que ${_.origin ?? `el valor`} contingués ${_} ${_.maximum.toString()} ${_.unit ?? `elements`}`
          : `Massa gran: s'esperava que ${_.origin ?? `el valor`} fos ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `com a mínim` : `més de`,
          _ = _(_.origin);
        return _
          ? `Massa petit: s'esperava que ${_.origin} contingués ${_} ${_.minimum.toString()} ${_.unit}`
          : `Massa petit: s'esperava que ${_.origin} fos ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Format invàlid: ha de començar amb "${_.prefix}"`
          : _.format === `ends_with`
            ? `Format invàlid: ha d'acabar amb "${_.suffix}"`
            : _.format === `includes`
              ? `Format invàlid: ha d'incloure "${_.includes}"`
              : _.format === `regex`
                ? `Format invàlid: ha de coincidir amb el patró ${_.pattern}`
                : `Format invàlid per a ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Número invàlid: ha de ser múltiple de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Clau${_.keys.length > 1 ? `s` : ``} no reconeguda${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Clau invàlida a ${_.origin}`;
      case `invalid_union`:
        return `Entrada invàlida`;
      case `invalid_element`:
        return `Element invàlid a ${_.origin}`;
      default:
        return `Entrada invàlida`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `پیت`,
      verb: `بێت`,
    },
    file: {
      unit: `بایت`,
      verb: `بێت`,
    },
    array: {
      unit: `دانە`,
      verb: `بێت`,
    },
    set: {
      unit: `دانە`,
      verb: `بێت`,
    },
    map: {
      unit: `دانە`,
      verb: `بێت`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _,
          _ = [`ا`, `و`, `ۆ`, `وو`, `ە`, `ی`, `ێ`].some((_) => _.endsWith(_))
            ? `یە`
            : `ە`,
          _ = /^[a-zA-Z]+$/.test(_);
        return _ === `null` || _ === `undefined`
          ? `داواکراوە`
          : `چاوەڕوانکراوە ${_} بێت، بەڵام ${_}${_ ? `` : _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `بەهاکە نادرووستە: چاوەڕوانکراوە ${_(_.values[0])} بێت`
          : `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _(_.origin);
        return _
          ? `پێویستە بە لایەنی زۆرەوە ${_.maximum.toString()} ${_.unit} ${_.verb}`
          : `پێویستە بە لایەنی زۆرەوە ${_.maximum.toString()} بێت`;
      }
      case `too_small`: {
        let _ = _(_.origin);
        return _
          ? `پێویستە بە لایەنی کەمەوە ${_.minimum.toString()} ${_.unit} ${_.verb}`
          : `پێویستە بە لایەنی کەمەوە ${_.minimum.toString()} بێت`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `دەقی نادروست: پێویستە دەستپێبکات بە "${_.prefix}"`
          : _.format === `ends_with`
            ? `دەقی نادروست: پێویستە کۆتاییبێت بە "${_.suffix}"`
            : _.format === `includes`
              ? `دەقی نادروست: پێویستە "${_.includes}" لەخۆبگرێت`
              : _.format === `regex`
                ? `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${_.pattern} بگونجێت`
                : `بەهای ${_[_.format] ?? _.format} نادروستە`;
      }
      case `not_multiple_of`:
        return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${_.divisor}`;
      case `unrecognized_keys`:
        return `کلیلی نەناسراو: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `کلیلی نادروست لە ${_.origin}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `یەکگرتنی نادروست`;
      case `invalid_element`:
        return `${_.origin} بەهاکە نادروستە`;
      default:
        return `تێکردەی نادروست`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `znaků`,
      verb: `mít`,
    },
    file: {
      unit: `bajtů`,
      verb: `mít`,
    },
    array: {
      unit: `prvků`,
      verb: `mít`,
    },
    set: {
      unit: `prvků`,
      verb: `mít`,
    },
    map: {
      unit: `prvků`,
      verb: `mít`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `číslo`,
      string: `řetězec`,
      function: `funkce`,
      array: `pole`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Neplatný vstup: očekáváno instanceof ${_.expected}, obdrženo ${_}`
          : `Neplatný vstup: očekáváno ${_}, obdrženo ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Neplatný vstup: očekáváno ${_(_.values[0])}`
          : `Neplatná možnost: očekávána jedna z hodnot ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Hodnota je příliš velká: ${_.origin ?? `hodnota`} musí mít ${_}${_.maximum.toString()} ${_.unit ?? `prvků`}`
          : `Hodnota je příliš velká: ${_.origin ?? `hodnota`} musí být ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Hodnota je příliš malá: ${_.origin ?? `hodnota`} musí mít ${_}${_.minimum.toString()} ${_.unit ?? `prvků`}`
          : `Hodnota je příliš malá: ${_.origin ?? `hodnota`} musí být ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Neplatný řetězec: musí začínat na "${_.prefix}"`
          : _.format === `ends_with`
            ? `Neplatný řetězec: musí končit na "${_.suffix}"`
            : _.format === `includes`
              ? `Neplatný řetězec: musí obsahovat "${_.includes}"`
              : _.format === `regex`
                ? `Neplatný řetězec: musí odpovídat vzoru ${_.pattern}`
                : `Neplatný formát ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Neplatné číslo: musí být násobkem ${_.divisor}`;
      case `unrecognized_keys`:
        return `Neznámé klíče: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Neplatný klíč v ${_.origin}`;
      case `invalid_union`:
        return `Neplatný vstup`;
      case `invalid_element`:
        return `Neplatná hodnota v ${_.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `tegn`,
      verb: `havde`,
    },
    file: {
      unit: `bytes`,
      verb: `havde`,
    },
    array: {
      unit: `elementer`,
      verb: `indeholdt`,
    },
    set: {
      unit: `elementer`,
      verb: `indeholdt`,
    },
    map: {
      unit: `elementer`,
      verb: `indeholdt`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      string: `streng`,
      number: `tal`,
      boolean: `boolean`,
      array: `liste`,
      object: `objekt`,
      set: `sæt`,
      file: `fil`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ugyldigt input: forventede instanceof ${_.expected}, fik ${_}`
          : `Ugyldigt input: forventede ${_}, fik ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ugyldig værdi: forventede ${_(_.values[0])}`
          : `Ugyldigt valg: forventede en af følgende ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `For stor: forventede ${_ ?? `value`} ${_.verb} ${_} ${_.maximum.toString()} ${_.unit ?? `elementer`}`
          : `For stor: forventede ${_ ?? `value`} havde ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `For lille: forventede ${_} ${_.verb} ${_} ${_.minimum.toString()} ${_.unit}`
          : `For lille: forventede ${_} havde ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ugyldig streng: skal starte med "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ugyldig streng: skal ende med "${_.suffix}"`
            : _.format === `includes`
              ? `Ugyldig streng: skal indeholde "${_.includes}"`
              : _.format === `regex`
                ? `Ugyldig streng: skal matche mønsteret ${_.pattern}`
                : `Ugyldig ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldigt tal: skal være deleligt med ${_.divisor}`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Ukendte nøgler` : `Ukendt nøgle`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøgle i ${_.origin}`;
      case `invalid_union`:
        return `Ugyldigt input: matcher ingen af de tilladte typer`;
      case `invalid_element`:
        return `Ugyldig værdi i ${_.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `Zeichen`,
      verb: `zu haben`,
    },
    file: {
      unit: `Bytes`,
      verb: `zu haben`,
    },
    array: {
      unit: `Elemente`,
      verb: `zu haben`,
    },
    set: {
      unit: `Elemente`,
      verb: `zu haben`,
    },
    map: {
      unit: `Elemente`,
      verb: `zu haben`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `Zahl`,
      array: `Array`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ungültige Eingabe: erwartet instanceof ${_.expected}, erhalten ${_}`
          : `Ungültige Eingabe: erwartet ${_}, erhalten ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ungültige Eingabe: erwartet ${_(_.values[0])}`
          : `Ungültige Option: erwartet eine von ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Zu groß: erwartet, dass ${_.origin ?? `Wert`} ${_}${_.maximum.toString()} ${_.unit ?? `Elemente`} hat`
          : `Zu groß: erwartet, dass ${_.origin ?? `Wert`} ${_}${_.maximum.toString()} ist`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Zu klein: erwartet, dass ${_.origin} ${_}${_.minimum.toString()} ${_.unit} hat`
          : `Zu klein: erwartet, dass ${_.origin} ${_}${_.minimum.toString()} ist`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ungültiger String: muss mit "${_.prefix}" beginnen`
          : _.format === `ends_with`
            ? `Ungültiger String: muss mit "${_.suffix}" enden`
            : _.format === `includes`
              ? `Ungültiger String: muss "${_.includes}" enthalten`
              : _.format === `regex`
                ? `Ungültiger String: muss dem Muster ${_.pattern} entsprechen`
                : `Ungültig: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ungültige Zahl: muss ein Vielfaches von ${_.divisor} sein`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Unbekannte Schlüssel` : `Unbekannter Schlüssel`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ungültiger Schlüssel in ${_.origin}`;
      case `invalid_union`:
        return `Ungültige Eingabe`;
      case `invalid_element`:
        return `Ungültiger Wert in ${_.origin}`;
      default:
        return `Ungültige Eingabe`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `χαρακτήρες`,
      verb: `να έχει`,
    },
    file: {
      unit: `bytes`,
      verb: `να έχει`,
    },
    array: {
      unit: `στοιχεία`,
      verb: `να έχει`,
    },
    set: {
      unit: `στοιχεία`,
      verb: `να έχει`,
    },
    map: {
      unit: `καταχωρήσεις`,
      verb: `να έχει`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return typeof _.expected == `string` && /^[A-Z]/.test(_.expected)
          ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${_.expected}, λήφθηκε ${_}`
          : `Μη έγκυρη είσοδος: αναμενόταν ${_}, λήφθηκε ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Μη έγκυρη είσοδος: αναμενόταν ${_(_.values[0])}`
          : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Πολύ μεγάλο: αναμενόταν ${_.origin ?? `τιμή`} να έχει ${_}${_.maximum.toString()} ${_.unit ?? `στοιχεία`}`
          : `Πολύ μεγάλο: αναμενόταν ${_.origin ?? `τιμή`} να είναι ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Πολύ μικρό: αναμενόταν ${_.origin} να έχει ${_}${_.minimum.toString()} ${_.unit}`
          : `Πολύ μικρό: αναμενόταν ${_.origin} να είναι ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${_.prefix}"`
          : _.format === `ends_with`
            ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${_.suffix}"`
            : _.format === `includes`
              ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${_.includes}"`
              : _.format === `regex`
                ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${_.pattern}`
                : `Μη έγκυρο: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${_.divisor}`;
      case `unrecognized_keys`:
        return `Άγνωστ${_.keys.length > 1 ? `α` : `ο`} κλειδ${_.keys.length > 1 ? `ιά` : `ί`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Μη έγκυρο κλειδί στο ${_.origin}`;
      case `invalid_union`:
        return `Μη έγκυρη είσοδος`;
      case `invalid_element`:
        return `Μη έγκυρη τιμή στο ${_.origin}`;
      default:
        return `Μη έγκυρη είσοδος`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `characters`,
      verb: `to have`,
    },
    file: {
      unit: `bytes`,
      verb: `to have`,
    },
    array: {
      unit: `items`,
      verb: `to have`,
    },
    set: {
      unit: `items`,
      verb: `to have`,
    },
    map: {
      unit: `entries`,
      verb: `to have`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  function _(_, _) {
    return _ === `number` && typeof _ == `number` && !Number.isFinite(_)
      ? String(_)
      : (_[_] ?? _);
  }
  return (_) => {
    switch (_.code) {
      case `invalid_type`:
        return `Invalid input: expected ${_(_.expected)}, received ${_(_(_.input), _.input)}`;
      case `invalid_value`:
        return _.values.length === 1
          ? `Invalid input: expected ${_(_.values[0])}`
          : `Invalid option: expected one of ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.exact ? `exactly ` : _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Too big: expected ${_.origin ?? `value`} to have ${_}${_.maximum.toString()} ${_.unit ?? `elements`}`
          : `Too big: expected ${_.origin ?? `value`} to be ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.exact ? `exactly ` : _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Too small: expected ${_.origin} to have ${_}${_.minimum.toString()} ${_.unit}`
          : `Too small: expected ${_.origin} to be ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Invalid string: must start with "${_.prefix}"`
          : _.format === `ends_with`
            ? `Invalid string: must end with "${_.suffix}"`
            : _.format === `includes`
              ? `Invalid string: must include "${_.includes}"`
              : _.format === `regex`
                ? `Invalid string: must match pattern ${_.pattern}`
                : `Invalid ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Invalid number: must be a multiple of ${_.divisor}`;
      case `unrecognized_keys`:
        return `Unrecognized key${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Invalid key in ${_.origin}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `Invalid discriminator value. Expected ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : _.inclusive === !1
            ? `Invalid input: more than one option matched`
            : `Invalid input`;
      case `invalid_element`:
        return `Invalid value in ${_.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `karaktrojn`,
      verb: `havi`,
    },
    file: {
      unit: `bajtojn`,
      verb: `havi`,
    },
    array: {
      unit: `elementojn`,
      verb: `havi`,
    },
    set: {
      unit: `elementojn`,
      verb: `havi`,
    },
    map: {
      unit: `elementojn`,
      verb: `havi`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `nombro`,
      array: `tabelo`,
      null: `senvalora`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Nevalida enigo: atendiĝis instanceof ${_.expected}, riceviĝis ${_}`
          : `Nevalida enigo: atendiĝis ${_}, riceviĝis ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Nevalida enigo: atendiĝis ${_(_.values[0])}`
          : `Nevalida opcio: atendiĝis unu el ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Tro granda: atendiĝis ke ${_.origin ?? `valoro`} havu ${_}${_.maximum.toString()} ${_.unit ?? `elementojn`}`
          : `Tro granda: atendiĝis ke ${_.origin ?? `valoro`} havu ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Tro malgranda: atendiĝis ke ${_.origin} havu ${_}${_.minimum.toString()} ${_.unit}`
          : `Tro malgranda: atendiĝis ke ${_.origin} estu ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Nevalida karaktraro: devas komenciĝi per "${_.prefix}"`
          : _.format === `ends_with`
            ? `Nevalida karaktraro: devas finiĝi per "${_.suffix}"`
            : _.format === `includes`
              ? `Nevalida karaktraro: devas inkluzivi "${_.includes}"`
              : _.format === `regex`
                ? `Nevalida karaktraro: devas kongrui kun la modelo ${_.pattern}`
                : `Nevalida ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Nevalida nombro: devas esti oblo de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Nekonata${_.keys.length > 1 ? `j` : ``} ŝlosilo${_.keys.length > 1 ? `j` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Nevalida ŝlosilo en ${_.origin}`;
      case `invalid_union`:
        return `Nevalida enigo`;
      case `invalid_element`:
        return `Nevalida valoro en ${_.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caracteres`,
      verb: `tener`,
    },
    file: {
      unit: `bytes`,
      verb: `tener`,
    },
    array: {
      unit: `elementos`,
      verb: `tener`,
    },
    set: {
      unit: `elementos`,
      verb: `tener`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Entrada inválida: se esperaba instanceof ${_.expected}, recibido ${_}`
          : `Entrada inválida: se esperaba ${_}, recibido ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Entrada inválida: se esperaba ${_(_.values[0])}`
          : `Opción inválida: se esperaba una de ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `Demasiado grande: se esperaba que ${_ ?? `valor`} tuviera ${_}${_.maximum.toString()} ${_.unit ?? `elementos`}`
          : `Demasiado grande: se esperaba que ${_ ?? `valor`} fuera ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `Demasiado pequeño: se esperaba que ${_} tuviera ${_}${_.minimum.toString()} ${_.unit}`
          : `Demasiado pequeño: se esperaba que ${_} fuera ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Cadena inválida: debe comenzar con "${_.prefix}"`
          : _.format === `ends_with`
            ? `Cadena inválida: debe terminar en "${_.suffix}"`
            : _.format === `includes`
              ? `Cadena inválida: debe incluir "${_.includes}"`
              : _.format === `regex`
                ? `Cadena inválida: debe coincidir con el patrón ${_.pattern}`
                : `Inválido ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Número inválido: debe ser múltiplo de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Llave${_.keys.length > 1 ? `s` : ``} desconocida${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Llave inválida en ${_[_.origin] ?? _.origin}`;
      case `invalid_union`:
        return `Entrada inválida`;
      case `invalid_element`:
        return `Valor inválido en ${_[_.origin] ?? _.origin}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `کاراکتر`,
      verb: `داشته باشد`,
    },
    file: {
      unit: `بایت`,
      verb: `داشته باشد`,
    },
    array: {
      unit: `آیتم`,
      verb: `داشته باشد`,
    },
    set: {
      unit: `آیتم`,
      verb: `داشته باشد`,
    },
    map: {
      unit: `آیتم`,
      verb: `داشته باشد`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `عدد`,
      array: `آرایه`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `ورودی نامعتبر: می‌بایست instanceof ${_.expected} می‌بود، ${_} دریافت شد`
          : `ورودی نامعتبر: می‌بایست ${_} می‌بود، ${_} دریافت شد`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `ورودی نامعتبر: می‌بایست ${_(_.values[0])} می‌بود`
          : `گزینه نامعتبر: می‌بایست یکی از ${_(_.values, `|`)} می‌بود`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `خیلی بزرگ: ${_.origin ?? `مقدار`} باید ${_}${_.maximum.toString()} ${_.unit ?? `عنصر`} باشد`
          : `خیلی بزرگ: ${_.origin ?? `مقدار`} باید ${_}${_.maximum.toString()} باشد`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `خیلی کوچک: ${_.origin} باید ${_}${_.minimum.toString()} ${_.unit} باشد`
          : `خیلی کوچک: ${_.origin} باید ${_}${_.minimum.toString()} باشد`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `رشته نامعتبر: باید با "${_.prefix}" شروع شود`
          : _.format === `ends_with`
            ? `رشته نامعتبر: باید با "${_.suffix}" تمام شود`
            : _.format === `includes`
              ? `رشته نامعتبر: باید شامل "${_.includes}" باشد`
              : _.format === `regex`
                ? `رشته نامعتبر: باید با الگوی ${_.pattern} مطابقت داشته باشد`
                : `${_[_.format] ?? _.format} نامعتبر`;
      }
      case `not_multiple_of`:
        return `عدد نامعتبر: باید مضرب ${_.divisor} باشد`;
      case `unrecognized_keys`:
        return `کلید${_.keys.length > 1 ? `های` : ``} ناشناس: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `کلید ناشناس در ${_.origin}`;
      case `invalid_union`:
        return `ورودی نامعتبر`;
      case `invalid_element`:
        return `مقدار نامعتبر در ${_.origin}`;
      default:
        return `ورودی نامعتبر`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `merkkiä`,
      subject: `merkkijonon`,
    },
    file: {
      unit: `tavua`,
      subject: `tiedoston`,
    },
    array: {
      unit: `alkiota`,
      subject: `listan`,
    },
    set: {
      unit: `alkiota`,
      subject: `joukon`,
    },
    map: {
      unit: `alkiota`,
      subject: `kuvauksen`,
    },
    number: {
      unit: ``,
      subject: `luvun`,
    },
    bigint: {
      unit: ``,
      subject: `suuren kokonaisluvun`,
    },
    int: {
      unit: ``,
      subject: `kokonaisluvun`,
    },
    date: {
      unit: ``,
      subject: `päivämäärän`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Virheellinen tyyppi: odotettiin instanceof ${_.expected}, oli ${_}`
          : `Virheellinen tyyppi: odotettiin ${_}, oli ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Virheellinen syöte: täytyy olla ${_(_.values[0])}`
          : `Virheellinen valinta: täytyy olla yksi seuraavista: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Liian suuri: ${_.subject} täytyy olla ${_}${_.maximum.toString()} ${_.unit}`.trim()
          : `Liian suuri: arvon täytyy olla ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Liian pieni: ${_.subject} täytyy olla ${_}${_.minimum.toString()} ${_.unit}`.trim()
          : `Liian pieni: arvon täytyy olla ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Virheellinen syöte: täytyy alkaa "${_.prefix}"`
          : _.format === `ends_with`
            ? `Virheellinen syöte: täytyy loppua "${_.suffix}"`
            : _.format === `includes`
              ? `Virheellinen syöte: täytyy sisältää "${_.includes}"`
              : _.format === `regex`
                ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_.pattern}`
                : `Virheellinen ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Virheellinen luku: täytyy olla luvun ${_.divisor} monikerta`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Tuntemattomat avaimet` : `Tuntematon avain`}: ${_(_.keys, `, `)}`;
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
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caractères`,
      verb: `avoir`,
    },
    file: {
      unit: `octets`,
      verb: `avoir`,
    },
    array: {
      unit: `éléments`,
      verb: `avoir`,
    },
    set: {
      unit: `éléments`,
      verb: `avoir`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Entrée invalide : instance de ${_.expected} attendu, ${_} reçu`
          : `Entrée invalide : ${_} attendu, ${_} reçu`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Entrée invalide : ${_(_.values[0])} attendu`
          : `Option invalide : une valeur parmi ${_(_.values, `|`)} attendue`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Trop grand : ${_[_.origin] ?? `valeur`} doit ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? `élément(s)`}`
          : `Trop grand : ${_[_.origin] ?? `valeur`} doit être ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Trop petit : ${_[_.origin] ?? `valeur`} doit ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `Trop petit : ${_[_.origin] ?? `valeur`} doit être ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Chaîne de caractères invalide : doit commencer par "${_.prefix}"`
          : _.format === `ends_with`
            ? `Chaîne de caractères invalide : doit se terminer par "${_.suffix}"`
            : _.format === `includes`
              ? `Chaîne de caractères invalide : doit inclure "${_.includes}"`
              : _.format === `regex`
                ? `Chaîne de caractères invalide : doit correspondre au motif ${_.pattern}`
                : `${_[_.format] ?? _.format} invalide`;
      }
      case `not_multiple_of`:
        return `Nombre invalide : doit être un multiple de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Clé${_.keys.length > 1 ? `s` : ``} non reconnue${_.keys.length > 1 ? `s` : ``} : ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Clé invalide dans ${_.origin}`;
      case `invalid_union`:
        return `Entrée invalide`;
      case `invalid_element`:
        return `Valeur invalide dans ${_.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caractères`,
      verb: `avoir`,
    },
    file: {
      unit: `octets`,
      verb: `avoir`,
    },
    array: {
      unit: `éléments`,
      verb: `avoir`,
    },
    set: {
      unit: `éléments`,
      verb: `avoir`,
    },
    map: {
      unit: `éléments`,
      verb: `avoir`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Entrée invalide : attendu instanceof ${_.expected}, reçu ${_}`
          : `Entrée invalide : attendu ${_}, reçu ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Entrée invalide : attendu ${_(_.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `≤` : `<`,
          _ = _(_.origin);
        return _
          ? `Trop grand : attendu que ${_.origin ?? `la valeur`} ait ${_}${_.maximum.toString()} ${_.unit}`
          : `Trop grand : attendu que ${_.origin ?? `la valeur`} soit ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `≥` : `>`,
          _ = _(_.origin);
        return _
          ? `Trop petit : attendu que ${_.origin} ait ${_}${_.minimum.toString()} ${_.unit}`
          : `Trop petit : attendu que ${_.origin} soit ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Chaîne invalide : doit commencer par "${_.prefix}"`
          : _.format === `ends_with`
            ? `Chaîne invalide : doit se terminer par "${_.suffix}"`
            : _.format === `includes`
              ? `Chaîne invalide : doit inclure "${_.includes}"`
              : _.format === `regex`
                ? `Chaîne invalide : doit correspondre au motif ${_.pattern}`
                : `${_[_.format] ?? _.format} invalide`;
      }
      case `not_multiple_of`:
        return `Nombre invalide : doit être un multiple de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Clé${_.keys.length > 1 ? `s` : ``} non reconnue${_.keys.length > 1 ? `s` : ``} : ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Clé invalide dans ${_.origin}`;
      case `invalid_union`:
        return `Entrée invalide`;
      case `invalid_element`:
        return `Valeur invalide dans ${_.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `અક્ષર`,
      verb: `હોવા જોઈએ`,
    },
    file: {
      unit: `બાયટ`,
      verb: `હોવા જોઈએ`,
    },
    array: {
      unit: `આઇટમ`,
      verb: `હોવા જોઈએ`,
    },
    set: {
      unit: `આઇટમ`,
      verb: `હોવા જોઈએ`,
    },
    map: {
      unit: `એન્ટ્રી`,
      verb: `હોવા જોઈએ`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `અમાન્ય ઇનપુટ: અપેક્ષિત ${_}, પ્રાપ્ત ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `અમાન્ય ઇનપુટ: અપેક્ષિત ${_(_.values[0])}`
          : `અમાન્ય વિકલ્પ: ${_(_.values, ` | `)} માધ્યમથી એક અપેક્ષિત`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `ખૂબ મોટું: ${_.origin ?? `મૂલ્ય`} ${_}${_.maximum.toString()} ${_.unit ?? `એલિમેન્ટ`} હોવા જોઈએ`
          : `ખૂબ મોટું: ${_.origin ?? `મૂલ્ય`} ${_}${_.maximum.toString()} હોવું જોઈએ`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `ખૂબ નાનું: ${_.origin} ${_}${_.minimum.toString()} ${_.unit} હોવા જોઈએ`
          : `ખૂબ નાનું: ${_.origin} ${_}${_.minimum.toString()} હોવું જોઈએ`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `અમાન્ય સ્ટ્રિંગ: "${_.prefix}" થી શરૂ થવું જોઈએ`
          : _.format === `ends_with`
            ? `અમાન્ય સ્ટ્રિંગ: "${_.suffix}" પર સમાપ્ત થવું જોઈએ`
            : _.format === `includes`
              ? `અમાન્ય સ્ટ્રિંગ: "${_.includes}" શામેલ હોવું જોઈએ`
              : _.format === `regex`
                ? `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${_.pattern} સાથે મેળ ખાવું જોઈએ`
                : `અમાન્ય ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `અમાન્ય નંબર: ${_.divisor} નો ગુણાંક હોવો જોઈએ`;
      case `unrecognized_keys`:
        return `ઓળખી શકાતા નહીં તે કી${_.keys.length > 1 ? `ઓ` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} માં અમાન્ય કી`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `અમાન્ય ઇનપુટ`;
      case `invalid_element`:
        return `${_.origin} માં અમાન્ય મૂલ્ય`;
      default:
        return `અમાન્ય ઇનપુટ`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
      string: {
        label: `מחרוזת`,
        gender: `f`,
      },
      number: {
        label: `מספר`,
        gender: `m`,
      },
      boolean: {
        label: `ערך בוליאני`,
        gender: `m`,
      },
      bigint: {
        label: `BigInt`,
        gender: `m`,
      },
      date: {
        label: `תאריך`,
        gender: `m`,
      },
      array: {
        label: `מערך`,
        gender: `m`,
      },
      object: {
        label: `אובייקט`,
        gender: `m`,
      },
      null: {
        label: `ערך ריק (null)`,
        gender: `m`,
      },
      undefined: {
        label: `ערך לא מוגדר (undefined)`,
        gender: `m`,
      },
      symbol: {
        label: `סימבול (Symbol)`,
        gender: `m`,
      },
      function: {
        label: `פונקציה`,
        gender: `f`,
      },
      map: {
        label: `מפה (Map)`,
        gender: `f`,
      },
      set: {
        label: `קבוצה (Set)`,
        gender: `f`,
      },
      file: {
        label: `קובץ`,
        gender: `m`,
      },
      promise: {
        label: `Promise`,
        gender: `m`,
      },
      NaN: {
        label: `NaN`,
        gender: `m`,
      },
      unknown: {
        label: `ערך לא ידוע`,
        gender: `m`,
      },
      value: {
        label: `ערך`,
        gender: `m`,
      },
    },
    _ = {
      string: {
        unit: `תווים`,
        shortLabel: `קצר`,
        longLabel: `ארוך`,
      },
      file: {
        unit: `בייטים`,
        shortLabel: `קטן`,
        longLabel: `גדול`,
      },
      array: {
        unit: `פריטים`,
        shortLabel: `קטן`,
        longLabel: `גדול`,
      },
      set: {
        unit: `פריטים`,
        shortLabel: `קטן`,
        longLabel: `גדול`,
      },
      number: {
        unit: ``,
        shortLabel: `קטן`,
        longLabel: `גדול`,
      },
    },
    _ = (_) => (_ ? _[_] : void 0),
    _ = (_) => {
      let _ = _(_);
      return _ ? _.label : (_ ?? _.unknown.label);
    },
    _ = (_) => `ה${_(_)}`,
    _ = (_) => ((_(_)?.gender ?? `m`) === `f` ? `צריכה להיות` : `צריך להיות`),
    _ = (_) => (_ ? (_[_] ?? null) : null),
    _ = {
      regex: {
        label: `קלט`,
        gender: `m`,
      },
      email: {
        label: `כתובת אימייל`,
        gender: `f`,
      },
      url: {
        label: `כתובת רשת`,
        gender: `f`,
      },
      emoji: {
        label: `אימוג'י`,
        gender: `m`,
      },
      uuid: {
        label: `UUID`,
        gender: `m`,
      },
      uuidv4: {
        label: `UUIDv4`,
        gender: `m`,
      },
      uuidv6: {
        label: `UUIDv6`,
        gender: `m`,
      },
      nanoid: {
        label: `nanoid`,
        gender: `m`,
      },
      guid: {
        label: `GUID`,
        gender: `m`,
      },
      cuid: {
        label: `cuid`,
        gender: `m`,
      },
      cuid2: {
        label: `cuid2`,
        gender: `m`,
      },
      ulid: {
        label: `ULID`,
        gender: `m`,
      },
      xid: {
        label: `XID`,
        gender: `m`,
      },
      ksuid: {
        label: `KSUID`,
        gender: `m`,
      },
      datetime: {
        label: `תאריך וזמן ISO`,
        gender: `m`,
      },
      date: {
        label: `תאריך ISO`,
        gender: `m`,
      },
      time: {
        label: `זמן ISO`,
        gender: `m`,
      },
      duration: {
        label: `משך זמן ISO`,
        gender: `m`,
      },
      ipv4: {
        label: `כתובת IPv4`,
        gender: `f`,
      },
      ipv6: {
        label: `כתובת IPv6`,
        gender: `f`,
      },
      mac: {
        label: `כתובת MAC`,
        gender: `f`,
      },
      cidrv4: {
        label: `טווח IPv4`,
        gender: `m`,
      },
      cidrv6: {
        label: `טווח IPv6`,
        gender: `m`,
      },
      base64: {
        label: `מחרוזת בבסיס 64`,
        gender: `f`,
      },
      base64url: {
        label: `מחרוזת בבסיס 64 לכתובות רשת`,
        gender: `f`,
      },
      json_string: {
        label: `מחרוזת JSON`,
        gender: `f`,
      },
      e164: {
        label: `מספר E.164`,
        gender: `m`,
      },
      credit_card: {
        label: `מספר כרטיס אשראי`,
        gender: `m`,
      },
      currency_code: {
        label: `קוד מטבע`,
        gender: `m`,
      },
      iban: {
        label: `IBAN`,
        gender: `m`,
      },
      jwt: {
        label: `JWT`,
        gender: `m`,
      },
      template_literal: {
        label: `קלט`,
        gender: `m`,
      },
      ends_with: {
        label: `קלט`,
        gender: `m`,
      },
      includes: {
        label: `קלט`,
        gender: `m`,
      },
      lowercase: {
        label: `קלט`,
        gender: `m`,
      },
      starts_with: {
        label: `קלט`,
        gender: `m`,
      },
      uppercase: {
        label: `קלט`,
        gender: `m`,
      },
    },
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _.expected,
          _ = _[_ ?? ``] ?? _(_),
          _ = _(_.input),
          _ = _[_] ?? _[_]?.label ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `קלט לא תקין: צריך להיות instanceof ${_.expected}, התקבל ${_}`
          : `קלט לא תקין: צריך להיות ${_}, התקבל ${_}`;
      }
      case `invalid_value`: {
        if (_.values.length === 1)
          return `ערך לא תקין: הערך חייב להיות ${_(_.values[0])}`;
        let _ = _.values.map((_) => _(_));
        if (_.values.length === 2)
          return `ערך לא תקין: האפשרויות המתאימות הן ${_[0]} או ${_[1]}`;
        let _ = _[_.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${_.slice(0, -1).join(`, `)} או ${_}`;
      }
      case `too_big`: {
        let _ = _(_.origin),
          _ = _(_.origin ?? `value`);
        if (_.origin === `string`)
          return `${_?.longLabel ?? `ארוך`} מדי: ${_} צריכה להכיל ${_.maximum.toString()} ${_?.unit ?? ``} ${_.inclusive ? `או פחות` : `לכל היותר`}`.trim();
        if (_.origin === `number`)
          return `גדול מדי: ${_} צריך להיות ${_.inclusive ? `קטן או שווה ל-${_.maximum}` : `קטן מ-${_.maximum}`}`;
        if (_.origin === `array` || _.origin === `set`)
          return `גדול מדי: ${_} ${_.origin === `set` ? `צריכה` : `צריך`} להכיל ${_.inclusive ? `${_.maximum} ${_?.unit ?? ``} או פחות` : `פחות מ-${_.maximum} ${_?.unit ?? ``}`}`.trim();
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin ?? `value`);
        return _?.unit
          ? `${_.longLabel} מדי: ${_} ${_} ${_}${_.maximum.toString()} ${_.unit}`
          : `${_?.longLabel ?? `גדול`} מדי: ${_} ${_} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _(_.origin),
          _ = _(_.origin ?? `value`);
        if (_.origin === `string`)
          return `${_?.shortLabel ?? `קצר`} מדי: ${_} צריכה להכיל ${_.minimum.toString()} ${_?.unit ?? ``} ${_.inclusive ? `או יותר` : `לפחות`}`.trim();
        if (_.origin === `number`)
          return `קטן מדי: ${_} צריך להיות ${_.inclusive ? `גדול או שווה ל-${_.minimum}` : `גדול מ-${_.minimum}`}`;
        if (_.origin === `array` || _.origin === `set`) {
          let _ = _.origin === `set` ? `צריכה` : `צריך`;
          return _.minimum === 1 && _.inclusive
            ? `קטן מדי: ${_} ${_} להכיל ${(_.origin, `לפחות פריט אחד`)}`
            : `קטן מדי: ${_} ${_} להכיל ${_.inclusive ? `${_.minimum} ${_?.unit ?? ``} או יותר` : `יותר מ-${_.minimum} ${_?.unit ?? ``}`}`.trim();
        }
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin ?? `value`);
        return _?.unit
          ? `${_.shortLabel} מדי: ${_} ${_} ${_}${_.minimum.toString()} ${_.unit}`
          : `${_?.shortLabel ?? `קטן`} מדי: ${_} ${_} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        if (_.format === `starts_with`)
          return `המחרוזת חייבת להתחיל ב "${_.prefix}"`;
        if (_.format === `ends_with`)
          return `המחרוזת חייבת להסתיים ב "${_.suffix}"`;
        if (_.format === `includes`)
          return `המחרוזת חייבת לכלול "${_.includes}"`;
        if (_.format === `regex`)
          return `המחרוזת חייבת להתאים לתבנית ${_.pattern}`;
        let _ = _[_.format];
        return `${_?.label ?? _.format} לא ${(_?.gender ?? `m`) === `f` ? `תקינה` : `תקין`}`;
      }
      case `not_multiple_of`:
        return `מספר לא תקין: חייב להיות מכפלה של ${_.divisor}`;
      case `unrecognized_keys`:
        return `מפתח${_.keys.length > 1 ? `ות` : ``} לא מזוה${_.keys.length > 1 ? `ים` : `ה`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `שדה לא תקין באובייקט`;
      case `invalid_union`:
        return `קלט לא תקין`;
      case `invalid_element`:
        return `ערך לא תקין ב${_(_.origin ?? `array`)}`;
      default:
        return `קלט לא תקין`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `अक्षर`,
      verb: `रखने के लिए`,
    },
    file: {
      unit: `बाइट्स`,
      verb: `रखने के लिए`,
    },
    array: {
      unit: `तत्व`,
      verb: `रखने के लिए`,
    },
    set: {
      unit: `तत्व`,
      verb: `रखने के लिए`,
    },
    map: {
      unit: `प्रविष्टियाँ`,
      verb: `रखने के लिए`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `अमान्य इनपुट: अपेक्षित ${_}, प्राप्त ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `अमान्य इनपुट: अपेक्षित ${_(_.values[0])}`
          : `अमान्य विकल्प: अपेक्षित मानों में से एक ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `बहुत बड़ा: अपेक्षित था कि ${_.origin ?? `मान`} में ${_}${_.maximum} ${_.unit} हों`
          : `बहुत बड़ा: अपेक्षित था कि ${_.origin ?? `मान`} ${_}${_.maximum} हो`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `बहुत छोटा: अपेक्षित था कि ${_.origin} में ${_}${_.minimum} ${_.unit} हों`
          : `बहुत छोटा: अपेक्षित था कि ${_.origin} ${_}${_.minimum} हो`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `अमान्य स्ट्रिंग: "${_.prefix}" से शुरू होना चाहिए`
          : _.format === `ends_with`
            ? `अमान्य स्ट्रिंग: "${_.suffix}" पर समाप्त होना चाहिए`
            : _.format === `includes`
              ? `अमान्य स्ट्रिंग: इसमें "${_.includes}" शामिल होना चाहिए`
              : _.format === `regex`
                ? `अमान्य स्ट्रिंग: पैटर्न ${_.pattern} से मेल खाना चाहिए`
                : `अमान्य ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `अमान्य संख्या: यह ${_.divisor} का गुणज होना चाहिए`;
      case `unrecognized_keys`:
        return `अपरिचित कुंजी${_.keys.length > 1 ? `याँ` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `अमान्य कुंजी: ${_.origin} में`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `अमान्य इनपुट`;
      case `invalid_element`:
        return `अमान्य मान: ${_.origin} में`;
      default:
        return `अमान्य इनपुट`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `znakova`,
      verb: `imati`,
    },
    file: {
      unit: `bajtova`,
      verb: `imati`,
    },
    array: {
      unit: `stavki`,
      verb: `imati`,
    },
    set: {
      unit: `stavki`,
      verb: `imati`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Neispravan unos: očekuje se instanceof ${_.expected}, a primljeno je ${_}`
          : `Neispravan unos: očekuje se ${_}, a primljeno je ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Neispravna vrijednost: očekivano ${_(_.values[0])}`
          : `Neispravna opcija: očekivano jedno od ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `Preveliko: očekivano da ${_ ?? `vrijednost`} ima ${_}${_.maximum.toString()} ${_.unit ?? `elemenata`}`
          : `Preveliko: očekivano da ${_ ?? `vrijednost`} bude ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin),
          _ = _[_.origin] ?? _.origin;
        return _
          ? `Premalo: očekivano da ${_} ima ${_}${_.minimum.toString()} ${_.unit}`
          : `Premalo: očekivano da ${_} bude ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Neispravan tekst: mora započinjati s "${_.prefix}"`
          : _.format === `ends_with`
            ? `Neispravan tekst: mora završavati s "${_.suffix}"`
            : _.format === `includes`
              ? `Neispravan tekst: mora sadržavati "${_.includes}"`
              : _.format === `regex`
                ? `Neispravan tekst: mora odgovarati uzorku ${_.pattern}`
                : `Neispravna ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Neispravan broj: mora biti višekratnik od ${_.divisor}`;
      case `unrecognized_keys`:
        return `Neprepoznat${_.keys.length > 1 ? `i ključevi` : ` ključ`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Neispravan ključ u ${_[_.origin] ?? _.origin}`;
      case `invalid_union`:
        return `Neispravan unos`;
      case `invalid_element`:
        return `Neispravna vrijednost u ${_[_.origin] ?? _.origin}`;
      default:
        return `Neispravan unos`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `karakter`,
      verb: `legyen`,
    },
    file: {
      unit: `byte`,
      verb: `legyen`,
    },
    array: {
      unit: `elem`,
      verb: `legyen`,
    },
    set: {
      unit: `elem`,
      verb: `legyen`,
    },
    map: {
      unit: `elem`,
      verb: `legyen`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `szám`,
      array: `tömb`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Érvénytelen bemenet: a várt érték instanceof ${_.expected}, a kapott érték ${_}`
          : `Érvénytelen bemenet: a várt érték ${_}, a kapott érték ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Érvénytelen bemenet: a várt érték ${_(_.values[0])}`
          : `Érvénytelen opció: valamelyik érték várt ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Túl nagy: ${_.origin ?? `érték`} mérete túl nagy ${_}${_.maximum.toString()} ${_.unit ?? `elem`}`
          : `Túl nagy: a bemeneti érték ${_.origin ?? `érték`} túl nagy: ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Túl kicsi: a bemeneti érték ${_.origin} mérete túl kicsi ${_}${_.minimum.toString()} ${_.unit}`
          : `Túl kicsi: a bemeneti érték ${_.origin} túl kicsi ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Érvénytelen string: "${_.prefix}" értékkel kell kezdődnie`
          : _.format === `ends_with`
            ? `Érvénytelen string: "${_.suffix}" értékkel kell végződnie`
            : _.format === `includes`
              ? `Érvénytelen string: "${_.includes}" értéket kell tartalmaznia`
              : _.format === `regex`
                ? `Érvénytelen string: ${_.pattern} mintának kell megfelelnie`
                : `Érvénytelen ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Érvénytelen szám: ${_.divisor} többszörösének kell lennie`;
      case `unrecognized_keys`:
        return `Ismeretlen kulcs${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Érvénytelen kulcs ${_.origin}`;
      case `invalid_union`:
        return `Érvénytelen bemenet`;
      case `invalid_element`:
        return `Érvénytelen érték: ${_.origin}`;
      default:
        return `Érvénytelen bemenet`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
function _(_, _, _) {
  return Math.abs(_) === 1 ? _ : _;
}
function _(_) {
  if (!_) return ``;
  let _ = [`ա`, `ե`, `ը`, `ի`, `ո`, `ու`, `օ`],
    _ = _[_.length - 1];
  return _ + (_.includes(_) ? `ն` : `ը`);
}
var _ = () => {
  let _ = {
    string: {
      unit: {
        one: `նշան`,
        many: `նշաններ`,
      },
      verb: `ունենալ`,
    },
    file: {
      unit: {
        one: `բայթ`,
        many: `բայթեր`,
      },
      verb: `ունենալ`,
    },
    array: {
      unit: {
        one: `տարր`,
        many: `տարրեր`,
      },
      verb: `ունենալ`,
    },
    set: {
      unit: {
        one: `տարր`,
        many: `տարրեր`,
      },
      verb: `ունենալ`,
    },
    map: {
      unit: {
        one: `տարր`,
        many: `տարրեր`,
      },
      verb: `ունենալ`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `թիվ`,
      array: `զանգված`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${_.expected}, ստացվել է ${_}`
          : `Սխալ մուտքագրում․ սպասվում էր ${_}, ստացվել է ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Սխալ մուտքագրում․ սպասվում էր ${_(_.values[1])}`
          : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.maximum), _.unit.one, _.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${_(_.origin ?? `արժեք`)} կունենա ${_}${_.maximum.toString()} ${_}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${_(_.origin ?? `արժեք`)} լինի ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.minimum), _.unit.one, _.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${_(_.origin)} կունենա ${_}${_.minimum.toString()} ${_}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${_(_.origin)} լինի ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Սխալ տող․ պետք է սկսվի "${_.prefix}"-ով`
          : _.format === `ends_with`
            ? `Սխալ տող․ պետք է ավարտվի "${_.suffix}"-ով`
            : _.format === `includes`
              ? `Սխալ տող․ պետք է պարունակի "${_.includes}"`
              : _.format === `regex`
                ? `Սխալ տող․ պետք է համապատասխանի ${_.pattern} ձևաչափին`
                : `Սխալ ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${_.divisor}-ի`;
      case `unrecognized_keys`:
        return `Չճանաչված բանալի${_.keys.length > 1 ? `ներ` : ``}. ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Սխալ բանալի ${_(_.origin)}-ում`;
      case `invalid_union`:
        return `Սխալ մուտքագրում`;
      case `invalid_element`:
        return `Սխալ արժեք ${_(_.origin)}-ում`;
      default:
        return `Սխալ մուտքագրում`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `karakter`,
      verb: `memiliki`,
    },
    file: {
      unit: `byte`,
      verb: `memiliki`,
    },
    array: {
      unit: `item`,
      verb: `memiliki`,
    },
    set: {
      unit: `item`,
      verb: `memiliki`,
    },
    map: {
      unit: `item`,
      verb: `memiliki`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Input tidak valid: diharapkan instanceof ${_.expected}, diterima ${_}`
          : `Input tidak valid: diharapkan ${_}, diterima ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Input tidak valid: diharapkan ${_(_.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Terlalu besar: diharapkan ${_.origin ?? `value`} memiliki ${_}${_.maximum.toString()} ${_.unit ?? `elemen`}`
          : `Terlalu besar: diharapkan ${_.origin ?? `value`} menjadi ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Terlalu kecil: diharapkan ${_.origin} memiliki ${_}${_.minimum.toString()} ${_.unit}`
          : `Terlalu kecil: diharapkan ${_.origin} menjadi ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `String tidak valid: harus dimulai dengan "${_.prefix}"`
          : _.format === `ends_with`
            ? `String tidak valid: harus berakhir dengan "${_.suffix}"`
            : _.format === `includes`
              ? `String tidak valid: harus menyertakan "${_.includes}"`
              : _.format === `regex`
                ? `String tidak valid: harus sesuai pola ${_.pattern}`
                : `${_[_.format] ?? _.format} tidak valid`;
      }
      case `not_multiple_of`:
        return `Angka tidak valid: harus kelipatan dari ${_.divisor}`;
      case `unrecognized_keys`:
        return `Kunci tidak dikenali ${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Kunci tidak valid di ${_.origin}`;
      case `invalid_union`:
        return `Input tidak valid`;
      case `invalid_element`:
        return `Nilai tidak valid di ${_.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `stafi`,
      verb: `að hafa`,
    },
    file: {
      unit: `bæti`,
      verb: `að hafa`,
    },
    array: {
      unit: `hluti`,
      verb: `að hafa`,
    },
    set: {
      unit: `hluti`,
      verb: `að hafa`,
    },
    map: {
      unit: `hluti`,
      verb: `að hafa`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `númer`,
      array: `fylki`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Rangt gildi: Þú slóst inn ${_} þar sem á að vera instanceof ${_.expected}`
          : `Rangt gildi: Þú slóst inn ${_} þar sem á að vera ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Rangt gildi: gert ráð fyrir ${_(_.values[0])}`
          : `Ógilt val: má vera eitt af eftirfarandi ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Of stórt: gert er ráð fyrir að ${_.origin ?? `gildi`} hafi ${_}${_.maximum.toString()} ${_.unit ?? `hluti`}`
          : `Of stórt: gert er ráð fyrir að ${_.origin ?? `gildi`} sé ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Of lítið: gert er ráð fyrir að ${_.origin} hafi ${_}${_.minimum.toString()} ${_.unit}`
          : `Of lítið: gert er ráð fyrir að ${_.origin} sé ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ógildur strengur: verður að byrja á "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ógildur strengur: verður að enda á "${_.suffix}"`
            : _.format === `includes`
              ? `Ógildur strengur: verður að innihalda "${_.includes}"`
              : _.format === `regex`
                ? `Ógildur strengur: verður að fylgja mynstri ${_.pattern}`
                : `Rangt ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Röng tala: verður að vera margfeldi af ${_.divisor}`;
      case `unrecognized_keys`:
        return `Óþekkt ${_.keys.length > 1 ? `ir lyklar` : `ur lykill`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Rangur lykill í ${_.origin}`;
      case `invalid_union`:
        return `Rangt gildi`;
      case `invalid_element`:
        return `Rangt gildi í ${_.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caratteri`,
      verb: `avere`,
    },
    file: {
      unit: `byte`,
      verb: `avere`,
    },
    array: {
      unit: `elementi`,
      verb: `avere`,
    },
    set: {
      unit: `elementi`,
      verb: `avere`,
    },
    map: {
      unit: `elementi`,
      verb: `avere`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `numero`,
      array: `vettore`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Input non valido: atteso instanceof ${_.expected}, ricevuto ${_}`
          : `Input non valido: atteso ${_}, ricevuto ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Input non valido: atteso ${_(_.values[0])}`
          : `Opzione non valida: atteso uno tra ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Troppo grande: ${_.origin ?? `valore`} deve avere ${_}${_.maximum.toString()} ${_.unit ?? `elementi`}`
          : `Troppo grande: ${_.origin ?? `valore`} deve essere ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Troppo piccolo: ${_.origin} deve avere ${_}${_.minimum.toString()} ${_.unit}`
          : `Troppo piccolo: ${_.origin} deve essere ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Stringa non valida: deve iniziare con "${_.prefix}"`
          : _.format === `ends_with`
            ? `Stringa non valida: deve terminare con "${_.suffix}"`
            : _.format === `includes`
              ? `Stringa non valida: deve includere "${_.includes}"`
              : _.format === `regex`
                ? `Stringa non valida: deve corrispondere al pattern ${_.pattern}`
                : `Input non valido: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Numero non valido: deve essere un multiplo di ${_.divisor}`;
      case `unrecognized_keys`:
        return `Chiav${_.keys.length > 1 ? `i` : `e`} non riconosciut${_.keys.length > 1 ? `e` : `a`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Chiave non valida in ${_.origin}`;
      case `invalid_union`:
        return `Input non valido`;
      case `invalid_element`:
        return `Valore non valido in ${_.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `文字`,
      verb: `である`,
    },
    file: {
      unit: `バイト`,
      verb: `である`,
    },
    array: {
      unit: `要素`,
      verb: `である`,
    },
    set: {
      unit: `要素`,
      verb: `である`,
    },
    map: {
      unit: `要素`,
      verb: `である`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `数値`,
      array: `配列`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `無効な入力: instanceof ${_.expected}が期待されましたが、${_}が入力されました`
          : `無効な入力: ${_}が期待されましたが、${_}が入力されました`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `無効な入力: ${_(_.values[0])}が期待されました`
          : `無効な選択: ${_(_.values, `、`)}のいずれかである必要があります`;
      case `too_big`: {
        let _ = _.inclusive ? `以下である` : `より小さい`,
          _ = _(_.origin);
        return _
          ? `大きすぎる値: ${_.origin ?? `値`}は${_.maximum.toString()}${_.unit ?? `要素`}${_}必要があります`
          : `大きすぎる値: ${_.origin ?? `値`}は${_.maximum.toString()}${_}必要があります`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `以上である` : `より大きい`,
          _ = _(_.origin);
        return _
          ? `小さすぎる値: ${_.origin}は${_.minimum.toString()}${_.unit}${_}必要があります`
          : `小さすぎる値: ${_.origin}は${_.minimum.toString()}${_}必要があります`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `無効な文字列: "${_.prefix}"で始まる必要があります`
          : _.format === `ends_with`
            ? `無効な文字列: "${_.suffix}"で終わる必要があります`
            : _.format === `includes`
              ? `無効な文字列: "${_.includes}"を含む必要があります`
              : _.format === `regex`
                ? `無効な文字列: パターン${_.pattern}に一致する必要があります`
                : `無効な${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `無効な数値: ${_.divisor}の倍数である必要があります`;
      case `unrecognized_keys`:
        return `認識されていないキー${_.keys.length > 1 ? `群` : ``}: ${_(_.keys, `、`)}`;
      case `invalid_key`:
        return `${_.origin}内の無効なキー`;
      case `invalid_union`:
        return `無効な入力`;
      case `invalid_element`:
        return `${_.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `სიმბოლო`,
      verb: `უნდა შეიცავდეს`,
    },
    file: {
      unit: `ბაიტი`,
      verb: `უნდა შეიცავდეს`,
    },
    array: {
      unit: `ელემენტი`,
      verb: `უნდა შეიცავდეს`,
    },
    set: {
      unit: `ელემენტი`,
      verb: `უნდა შეიცავდეს`,
    },
    map: {
      unit: `ელემენტი`,
      verb: `უნდა შეიცავდეს`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `რიცხვი`,
      string: `ველი`,
      boolean: `ბულეანი`,
      function: `ფუნქცია`,
      array: `მასივი`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${_.expected}, მიღებული ${_}`
          : `არასწორი შეყვანა: მოსალოდნელი ${_}, მიღებული ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `არასწორი შეყვანა: მოსალოდნელი ${_(_.values[0])}`
          : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${_(_.values, `|`)}-დან`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `ზედმეტად დიდი: მოსალოდნელი ${_.origin ?? `მნიშვნელობა`} ${_.verb} ${_}${_.maximum.toString()} ${_.unit}`
          : `ზედმეტად დიდი: მოსალოდნელი ${_.origin ?? `მნიშვნელობა`} იყოს ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `ზედმეტად პატარა: მოსალოდნელი ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `ზედმეტად პატარა: მოსალოდნელი ${_.origin} იყოს ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `არასწორი ველი: უნდა იწყებოდეს "${_.prefix}"-ით`
          : _.format === `ends_with`
            ? `არასწორი ველი: უნდა მთავრდებოდეს "${_.suffix}"-ით`
            : _.format === `includes`
              ? `არასწორი ველი: უნდა შეიცავდეს "${_.includes}"-ს`
              : _.format === `regex`
                ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${_.pattern}`
                : `არასწორი ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `არასწორი რიცხვი: უნდა იყოს ${_.divisor}-ის ჯერადი`;
      case `unrecognized_keys`:
        return `უცნობი გასაღებ${_.keys.length > 1 ? `ები` : `ი`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `არასწორი გასაღები ${_.origin}-ში`;
      case `invalid_union`:
        return `არასწორი შეყვანა`;
      case `invalid_element`:
        return `არასწორი მნიშვნელობა ${_.origin}-ში`;
      default:
        return `არასწორი შეყვანა`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `តួអក្សរ`,
      verb: `គួរមាន`,
    },
    file: {
      unit: `បៃ`,
      verb: `គួរមាន`,
    },
    array: {
      unit: `ធាតុ`,
      verb: `គួរមាន`,
    },
    set: {
      unit: `ធាតុ`,
      verb: `គួរមាន`,
    },
    map: {
      unit: `ធាតុ`,
      verb: `គួរមាន`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `លេខ`,
      array: `អារេ (Array)`,
      null: `គ្មានតម្លៃ (null)`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${_.expected} ប៉ុន្តែទទួលបាន ${_}`
          : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_} ប៉ុន្តែទទួលបាន ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_(_.values[0])}`
          : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `ធំពេក៖ ត្រូវការ ${_.origin ?? `តម្លៃ`} ${_} ${_.maximum.toString()} ${_.unit ?? `ធាតុ`}`
          : `ធំពេក៖ ត្រូវការ ${_.origin ?? `តម្លៃ`} ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `តូចពេក៖ ត្រូវការ ${_.origin} ${_} ${_.minimum.toString()} ${_.unit}`
          : `តូចពេក៖ ត្រូវការ ${_.origin} ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_.prefix}"`
          : _.format === `ends_with`
            ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_.suffix}"`
            : _.format === `includes`
              ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_.includes}"`
              : _.format === `regex`
                ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_.pattern}`
                : `មិនត្រឹមត្រូវ៖ ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${_.divisor}`;
      case `unrecognized_keys`:
        return `រកឃើញសោមិនស្គាល់៖ ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${_.origin}`;
      case `invalid_union`:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case `invalid_element`:
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${_.origin}`;
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
function _() {
  return _();
}
var _ = () => {
  let _ = {
    string: {
      unit: `ಅಕ್ಷರಗಳು`,
      verb: `ಹೊಂದಲು`,
    },
    file: {
      unit: `ಬೈಟ್‌ಗಳು`,
      verb: `ಹೊಂದಲು`,
    },
    array: {
      unit: `ವಸ್ತುಗಳು`,
      verb: `ಹೊಂದಲು`,
    },
    set: {
      unit: `ವಸ್ತುಗಳು`,
      verb: `ಹೊಂದಲು`,
    },
    map: {
      unit: `entries`,
      verb: `ಹೊಂದಲು`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_}, ಸ್ವೀಕರಿಸಿದನು ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_(_.values[0])}`
          : `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_.origin ?? `value`} ಹೊಂದಲು ${_}${_.maximum.toString()} ${_.unit ?? `ಅಂಶಗಳು`}`
          : `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_.origin ?? `value`} ಎಂದು ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_.origin} ಹೊಂದಲು ${_}${_.minimum.toString()} ${_.unit}`
          : `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_.origin} ಎಂದು ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${_.prefix}"`
          : _.format === `ends_with`
            ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${_.suffix}"`
            : _.format === `includes`
              ? `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${_.includes}"`
              : _.format === `regex`
                ? `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${_.pattern}`
                : `ಅಮಾನ್ಯ ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${_.divisor}`;
      case `unrecognized_keys`:
        return `ಗುರುತಿಸಲಾಗದ ಕೀ ${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${_.origin}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್`;
      case `invalid_element`:
        return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${_.origin}`;
      default:
        return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `문자`,
      verb: `to have`,
    },
    file: {
      unit: `바이트`,
      verb: `to have`,
    },
    array: {
      unit: `개`,
      verb: `to have`,
    },
    set: {
      unit: `개`,
      verb: `to have`,
    },
    map: {
      unit: `개`,
      verb: `to have`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `잘못된 입력: 예상 타입은 instanceof ${_.expected}, 받은 타입은 ${_}입니다`
          : `잘못된 입력: 예상 타입은 ${_}, 받은 타입은 ${_}입니다`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `잘못된 입력: 값은 ${_(_.values[0])} 이어야 합니다`
          : `잘못된 옵션: ${_(_.values, `또는 `)} 중 하나여야 합니다`;
      case `too_big`: {
        let _ = _.inclusive ? `이하` : `미만`,
          _ = _ === `미만` ? `이어야 합니다` : `여야 합니다`,
          _ = _(_.origin),
          _ = _?.unit ?? `요소`;
        return _
          ? `${_.origin ?? `값`}이 너무 큽니다: ${_.maximum.toString()}${_} ${_}${_}`
          : `${_.origin ?? `값`}이 너무 큽니다: ${_.maximum.toString()} ${_}${_}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `이상` : `초과`,
          _ = _ === `이상` ? `이어야 합니다` : `여야 합니다`,
          _ = _(_.origin),
          _ = _?.unit ?? `요소`;
        return _
          ? `${_.origin ?? `값`}이 너무 작습니다: ${_.minimum.toString()}${_} ${_}${_}`
          : `${_.origin ?? `값`}이 너무 작습니다: ${_.minimum.toString()} ${_}${_}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `잘못된 문자열: "${_.prefix}"(으)로 시작해야 합니다`
          : _.format === `ends_with`
            ? `잘못된 문자열: "${_.suffix}"(으)로 끝나야 합니다`
            : _.format === `includes`
              ? `잘못된 문자열: "${_.includes}"을(를) 포함해야 합니다`
              : _.format === `regex`
                ? `잘못된 문자열: 정규식 ${_.pattern} 패턴과 일치해야 합니다`
                : `잘못된 ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `잘못된 숫자: ${_.divisor}의 배수여야 합니다`;
      case `unrecognized_keys`:
        return `인식할 수 없는 키: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `잘못된 키: ${_.origin}`;
      case `invalid_union`:
        return `잘못된 입력`;
      case `invalid_element`:
        return `잘못된 값: ${_.origin}`;
      default:
        return `잘못된 입력`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = (_) => _.charAt(0).toUpperCase() + _.slice(1);
function _(_) {
  let _ = Math.abs(_),
    _ = _ % 10,
    _ = _ % 100;
  return (_ >= 11 && _ <= 19) || _ === 0 ? `many` : _ === 1 ? `one` : `few`;
}
var _ = () => {
  let _ = {
    string: {
      unit: {
        one: `simbolis`,
        few: `simboliai`,
        many: `simbolių`,
      },
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
      unit: {
        one: `baitas`,
        few: `baitai`,
        many: `baitų`,
      },
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
      unit: {
        one: `elementą`,
        few: `elementus`,
        many: `elementų`,
      },
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
      unit: {
        one: `elementą`,
        few: `elementus`,
        many: `elementų`,
      },
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
  function _(_, _, _, _) {
    let _ = _[_] ?? null;
    return _ === null
      ? _
      : {
          unit: _.unit[_],
          verb: _.verb[_][_ ? `inclusive` : `notInclusive`],
        };
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Gautas tipas ${_}, o tikėtasi - instanceof ${_.expected}`
          : `Gautas tipas ${_}, o tikėtasi - ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Privalo būti ${_(_.values[0])}`
          : `Privalo būti vienas iš ${_(_.values, `|`)} pasirinkimų`;
      case `too_big`: {
        let _ = _[_.origin] ?? _.origin,
          _ = _(_.origin, _(Number(_.maximum)), _.inclusive ?? !1, `smaller`);
        if (_?.verb)
          return `${_(_ ?? _.origin ?? `reikšmė`)} ${_.verb} ${_.maximum.toString()} ${_.unit ?? `elementų`}`;
        let _ = _.inclusive ? `ne didesnis kaip` : `mažesnis kaip`;
        return `${_(_ ?? _.origin ?? `reikšmė`)} turi būti ${_} ${_.maximum.toString()} ${_?.unit}`;
      }
      case `too_small`: {
        let _ = _[_.origin] ?? _.origin,
          _ = _(_.origin, _(Number(_.minimum)), _.inclusive ?? !1, `bigger`);
        if (_?.verb)
          return `${_(_ ?? _.origin ?? `reikšmė`)} ${_.verb} ${_.minimum.toString()} ${_.unit ?? `elementų`}`;
        let _ = _.inclusive ? `ne mažesnis kaip` : `didesnis kaip`;
        return `${_(_ ?? _.origin ?? `reikšmė`)} turi būti ${_} ${_.minimum.toString()} ${_?.unit}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Eilutė privalo prasidėti "${_.prefix}"`
          : _.format === `ends_with`
            ? `Eilutė privalo pasibaigti "${_.suffix}"`
            : _.format === `includes`
              ? `Eilutė privalo įtraukti "${_.includes}"`
              : _.format === `regex`
                ? `Eilutė privalo atitikti ${_.pattern}`
                : `Neteisingas ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Skaičius privalo būti ${_.divisor} kartotinis.`;
      case `unrecognized_keys`:
        return `Neatpažint${_.keys.length > 1 ? `i` : `as`} rakt${_.keys.length > 1 ? `ai` : `as`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Rastas klaidingas raktas`;
      case `invalid_union`:
        return `Klaidinga įvestis`;
      case `invalid_element`:
        return `${_(_[_.origin] ?? _.origin ?? _.origin ?? `reikšmė`)} turi klaidingą įvestį`;
      default:
        return `Klaidinga įvestis`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `знаци`,
      verb: `да имаат`,
    },
    file: {
      unit: `бајти`,
      verb: `да имаат`,
    },
    array: {
      unit: `ставки`,
      verb: `да имаат`,
    },
    set: {
      unit: `ставки`,
      verb: `да имаат`,
    },
    map: {
      unit: `ставки`,
      verb: `да имаат`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `број`,
      array: `низа`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Грешен внес: се очекува instanceof ${_.expected}, примено ${_}`
          : `Грешен внес: се очекува ${_}, примено ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Invalid input: expected ${_(_.values[0])}`
          : `Грешана опција: се очекува една ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Премногу голем: се очекува ${_.origin ?? `вредноста`} да има ${_}${_.maximum.toString()} ${_.unit ?? `елементи`}`
          : `Премногу голем: се очекува ${_.origin ?? `вредноста`} да биде ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Премногу мал: се очекува ${_.origin} да има ${_}${_.minimum.toString()} ${_.unit}`
          : `Премногу мал: се очекува ${_.origin} да биде ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Неважечка низа: мора да започнува со "${_.prefix}"`
          : _.format === `ends_with`
            ? `Неважечка низа: мора да завршува со "${_.suffix}"`
            : _.format === `includes`
              ? `Неважечка низа: мора да вклучува "${_.includes}"`
              : _.format === `regex`
                ? `Неважечка низа: мора да одгоара на патернот ${_.pattern}`
                : `Invalid ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Грешен број: мора да биде делив со ${_.divisor}`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Непрепознаени клучеви` : `Непрепознаен клуч`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Грешен клуч во ${_.origin}`;
      case `invalid_union`:
        return `Грешен внес`;
      case `invalid_element`:
        return `Грешна вредност во ${_.origin}`;
      default:
        return `Грешен внес`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `aksara`,
      verb: `mempunyai`,
    },
    file: {
      unit: `bait`,
      verb: `mempunyai`,
    },
    array: {
      unit: `elemen`,
      verb: `mempunyai`,
    },
    set: {
      unit: `elemen`,
      verb: `mempunyai`,
    },
    map: {
      unit: `elemen`,
      verb: `mempunyai`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `nombor`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Input tidak sah: dijangka instanceof ${_.expected}, diterima ${_}`
          : `Input tidak sah: dijangka ${_}, diterima ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Input tidak sah: dijangka ${_(_.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Terlalu besar: dijangka ${_.origin ?? `nilai`} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? `elemen`}`
          : `Terlalu besar: dijangka ${_.origin ?? `nilai`} adalah ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Terlalu kecil: dijangka ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `Terlalu kecil: dijangka ${_.origin} adalah ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `String tidak sah: mesti bermula dengan "${_.prefix}"`
          : _.format === `ends_with`
            ? `String tidak sah: mesti berakhir dengan "${_.suffix}"`
            : _.format === `includes`
              ? `String tidak sah: mesti mengandungi "${_.includes}"`
              : _.format === `regex`
                ? `String tidak sah: mesti sepadan dengan corak ${_.pattern}`
                : `${_[_.format] ?? _.format} tidak sah`;
      }
      case `not_multiple_of`:
        return `Nombor tidak sah: perlu gandaan ${_.divisor}`;
      case `unrecognized_keys`:
        return `Kunci tidak dikenali: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Kunci tidak sah dalam ${_.origin}`;
      case `invalid_union`:
        return `Input tidak sah`;
      case `invalid_element`:
        return `Nilai tidak sah dalam ${_.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `अक्षर`,
      verb: `हुनुपर्छ`,
    },
    file: {
      unit: `बाइट`,
      verb: `हुनुपर्छ`,
    },
    array: {
      unit: `तत्व`,
      verb: `हुनुपर्छ`,
    },
    set: {
      unit: `तत्व`,
      verb: `हुनुपर्छ`,
    },
    map: {
      unit: `प्रविष्टि`,
      verb: `हुनुपर्छ`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `अमान्य इनपुट: अपेक्षित ${_}, प्राप्त ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `अमान्य इनपुट: अपेक्षित ${_(_.values[0])}`
          : `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `धेरै ठूलो: ${_.origin ?? `मान`} मा ${_}${_.maximum.toString()} ${_.unit} ${_.verb}`
          : `धेरै ठूलो: ${_.origin ?? `मान`} ${_}${_.maximum.toString()} हुनुपर्छ`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `धेरै सानो: ${_.origin} मा ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
          : `धेरै सानो: ${_.origin} ${_}${_.minimum.toString()} हुनुपर्छ`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `अमान्य स्ट्रिङ: "${_.prefix}" बाट सुरु हुनुपर्छ`
          : _.format === `ends_with`
            ? `अमान्य स्ट्रिङ: "${_.suffix}" मा समाप्त हुनुपर्छ`
            : _.format === `includes`
              ? `अमान्य स्ट्रिङ: "${_.includes}" समावेश हुनुपर्छ`
              : _.format === `regex`
                ? `अमान्य स्ट्रिङ: ढाँचा ${_.pattern} सँग मेल खानुपर्छ`
                : `अमान्य ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `अमान्य संख्या: ${_.divisor} को गुणज हुनुपर्छ`;
      case `unrecognized_keys`:
        return `अपरिचित कुञ्जी${_.keys.length > 1 ? `हरू` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `अमान्य कुञ्जी: ${_.origin} मा`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `अमान्य इनपुट`;
      case `invalid_element`:
        return `अमान्य मान: ${_.origin} मा`;
      default:
        return `अमान्य इनपुट`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `tekens`,
      verb: `heeft`,
    },
    file: {
      unit: `bytes`,
      verb: `heeft`,
    },
    array: {
      unit: `elementen`,
      verb: `heeft`,
    },
    set: {
      unit: `elementen`,
      verb: `heeft`,
    },
    map: {
      unit: `elementen`,
      verb: `heeft`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `getal`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ongeldige invoer: verwacht instanceof ${_.expected}, ontving ${_}`
          : `Ongeldige invoer: verwacht ${_}, ontving ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ongeldige invoer: verwacht ${_(_.values[0])}`
          : `Ongeldige optie: verwacht één van ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin),
          _ =
            _.origin === `date`
              ? `laat`
              : _.origin === `string`
                ? `lang`
                : `groot`;
        return _
          ? `Te ${_}: verwacht dat ${_.origin ?? `waarde`} ${_}${_.maximum.toString()} ${_.unit ?? `elementen`} ${_.verb}`
          : `Te ${_}: verwacht dat ${_.origin ?? `waarde`} ${_}${_.maximum.toString()} is`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin),
          _ =
            _.origin === `date`
              ? `vroeg`
              : _.origin === `string`
                ? `kort`
                : `klein`;
        return _
          ? `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
          : `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} is`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ongeldige tekst: moet met "${_.prefix}" beginnen`
          : _.format === `ends_with`
            ? `Ongeldige tekst: moet op "${_.suffix}" eindigen`
            : _.format === `includes`
              ? `Ongeldige tekst: moet "${_.includes}" bevatten`
              : _.format === `regex`
                ? `Ongeldige tekst: moet overeenkomen met patroon ${_.pattern}`
                : `Ongeldig: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ongeldig getal: moet een veelvoud van ${_.divisor} zijn`;
      case `unrecognized_keys`:
        return `Onbekende key${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ongeldige key in ${_.origin}`;
      case `invalid_union`:
        return `Ongeldige invoer`;
      case `invalid_element`:
        return `Ongeldige waarde in ${_.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `teikn`,
      verb: `å ha`,
    },
    file: {
      unit: `bytes`,
      verb: `å ha`,
    },
    array: {
      unit: `element`,
      verb: `å innehalde`,
    },
    set: {
      unit: `element`,
      verb: `å innehalde`,
    },
    map: {
      unit: `element`,
      verb: `å innehalde`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `tal`,
      array: `liste`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ugyldig input: forventa instanceof ${_.expected}, fekk ${_}`
          : `Ugyldig input: forventa ${_}, fekk ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ugyldig verdi: forventa ${_(_.values[0])}`
          : `Ugyldig val: forventa eitt av ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `For stor(t): forventa ${_.origin ?? `value`} til å ha ${_}${_.maximum.toString()} ${_.unit ?? `element`}`
          : `For stor(t): forventa ${_.origin ?? `value`} til å ha ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `For lite(n): forventa ${_.origin} til å ha ${_}${_.minimum.toString()} ${_.unit}`
          : `For lite(n): forventa ${_.origin} til å ha ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ugyldig streng: må starte med "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ugyldig streng: må slutte med "${_.suffix}"`
            : _.format === `includes`
              ? `Ugyldig streng: må innehalde "${_.includes}"`
              : _.format === `regex`
                ? `Ugyldig streng: må matche mønsteret ${_.pattern}`
                : `Ugyldig ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldig tal: må vere eit multiplum av ${_.divisor}`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Ukjende nøklar` : `Ukjend nøkkel`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøkkel i ${_.origin}`;
      case `invalid_union`:
        return `Ugyldig input`;
      case `invalid_element`:
        return `Ugyldig verdi i ${_.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `tegn`,
      verb: `å ha`,
    },
    file: {
      unit: `bytes`,
      verb: `å ha`,
    },
    array: {
      unit: `elementer`,
      verb: `å inneholde`,
    },
    set: {
      unit: `elementer`,
      verb: `å inneholde`,
    },
    map: {
      unit: `elementer`,
      verb: `å inneholde`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `tall`,
      array: `liste`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ugyldig input: forventet instanceof ${_.expected}, fikk ${_}`
          : `Ugyldig input: forventet ${_}, fikk ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ugyldig verdi: forventet ${_(_.values[0])}`
          : `Ugyldig valg: forventet en av ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `For stor(t): forventet ${_.origin ?? `value`} til å ha ${_}${_.maximum.toString()} ${_.unit ?? `elementer`}`
          : `For stor(t): forventet ${_.origin ?? `value`} til å ha ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `For lite(n): forventet ${_.origin} til å ha ${_}${_.minimum.toString()} ${_.unit}`
          : `For lite(n): forventet ${_.origin} til å ha ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ugyldig streng: må starte med "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ugyldig streng: må ende med "${_.suffix}"`
            : _.format === `includes`
              ? `Ugyldig streng: må inneholde "${_.includes}"`
              : _.format === `regex`
                ? `Ugyldig streng: må matche mønsteret ${_.pattern}`
                : `Ugyldig ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ugyldig tall: må være et multiplum av ${_.divisor}`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Ukjente nøkler` : `Ukjent nøkkel`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ugyldig nøkkel i ${_.origin}`;
      case `invalid_union`:
        return `Ugyldig input`;
      case `invalid_element`:
        return `Ugyldig verdi i ${_.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `harf`,
      verb: `olmalıdır`,
    },
    file: {
      unit: `bayt`,
      verb: `olmalıdır`,
    },
    array: {
      unit: `unsur`,
      verb: `olmalıdır`,
    },
    set: {
      unit: `unsur`,
      verb: `olmalıdır`,
    },
    map: {
      unit: `unsur`,
      verb: `olmalıdır`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `numara`,
      array: `saf`,
      null: `gayb`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Fâsit giren: umulan instanceof ${_.expected}, alınan ${_}`
          : `Fâsit giren: umulan ${_}, alınan ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Fâsit giren: umulan ${_(_.values[0])}`
          : `Fâsit tercih: mûteberler ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Fazla büyük: ${_.origin ?? `value`}, ${_}${_.maximum.toString()} ${_.unit ?? `elements`} sahip olmalıydı.`
          : `Fazla büyük: ${_.origin ?? `value`}, ${_}${_.maximum.toString()} olmalıydı.`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Fazla küçük: ${_.origin}, ${_}${_.minimum.toString()} ${_.unit} sahip olmalıydı.`
          : `Fazla küçük: ${_.origin}, ${_}${_.minimum.toString()} olmalıydı.`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Fâsit metin: "${_.prefix}" ile başlamalı.`
          : _.format === `ends_with`
            ? `Fâsit metin: "${_.suffix}" ile bitmeli.`
            : _.format === `includes`
              ? `Fâsit metin: "${_.includes}" ihtivâ etmeli.`
              : _.format === `regex`
                ? `Fâsit metin: ${_.pattern} nakşına uymalı.`
                : `Fâsit ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Fâsit sayı: ${_.divisor} katı olmalıydı.`;
      case `unrecognized_keys`:
        return `Tanınmayan anahtar ${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} için tanınmayan anahtar var.`;
      case `invalid_union`:
        return `Giren tanınamadı.`;
      case `invalid_element`:
        return `${_.origin} için tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `توکي`,
      verb: `ولري`,
    },
    file: {
      unit: `بایټس`,
      verb: `ولري`,
    },
    array: {
      unit: `توکي`,
      verb: `ولري`,
    },
    set: {
      unit: `توکي`,
      verb: `ولري`,
    },
    map: {
      unit: `توکي`,
      verb: `ولري`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `عدد`,
      array: `ارې`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `ناسم ورودي: باید instanceof ${_.expected} وای, مګر ${_} ترلاسه شو`
          : `ناسم ورودي: باید ${_} وای, مګر ${_} ترلاسه شو`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `ناسم ورودي: باید ${_(_.values[0])} وای`
          : `ناسم انتخاب: باید یو له ${_(_.values, `|`)} څخه وای`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `ډیر لوی: ${_.origin ?? `ارزښت`} باید ${_}${_.maximum.toString()} ${_.unit ?? `عنصرونه`} ولري`
          : `ډیر لوی: ${_.origin ?? `ارزښت`} باید ${_}${_.maximum.toString()} وي`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `ډیر کوچنی: ${_.origin} باید ${_}${_.minimum.toString()} ${_.unit} ولري`
          : `ډیر کوچنی: ${_.origin} باید ${_}${_.minimum.toString()} وي`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `ناسم متن: باید د "${_.prefix}" سره پیل شي`
          : _.format === `ends_with`
            ? `ناسم متن: باید د "${_.suffix}" سره پای ته ورسيږي`
            : _.format === `includes`
              ? `ناسم متن: باید "${_.includes}" ولري`
              : _.format === `regex`
                ? `ناسم متن: باید د ${_.pattern} سره مطابقت ولري`
                : `${_[_.format] ?? _.format} ناسم دی`;
      }
      case `not_multiple_of`:
        return `ناسم عدد: باید د ${_.divisor} مضرب وي`;
      case `unrecognized_keys`:
        return `ناسم ${_.keys.length > 1 ? `کلیډونه` : `کلیډ`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `ناسم کلیډ په ${_.origin} کې`;
      case `invalid_union`:
        return `ناسمه ورودي`;
      case `invalid_element`:
        return `ناسم عنصر په ${_.origin} کې`;
      default:
        return `ناسمه ورودي`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `znaków`,
      verb: `mieć`,
    },
    file: {
      unit: `bajtów`,
      verb: `mieć`,
    },
    array: {
      unit: `elementów`,
      verb: `mieć`,
    },
    set: {
      unit: `elementów`,
      verb: `mieć`,
    },
    map: {
      unit: `elementów`,
      verb: `mieć`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `liczba`,
      array: `tablica`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${_.expected}, otrzymano ${_}`
          : `Nieprawidłowe dane wejściowe: oczekiwano ${_}, otrzymano ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Nieprawidłowe dane wejściowe: oczekiwano ${_(_.values[0])}`
          : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Za duża wartość: oczekiwano, że ${_.origin ?? `wartość`} będzie mieć ${_}${_.maximum.toString()} ${_.unit ?? `elementów`}`
          : `Zbyt duż(y/a/e): oczekiwano, że ${_.origin ?? `wartość`} będzie wynosić ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Za mała wartość: oczekiwano, że ${_.origin ?? `wartość`} będzie mieć ${_}${_.minimum.toString()} ${_.unit ?? `elementów`}`
          : `Zbyt mał(y/a/e): oczekiwano, że ${_.origin ?? `wartość`} będzie wynosić ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_.prefix}"`
          : _.format === `ends_with`
            ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${_.suffix}"`
            : _.format === `includes`
              ? `Nieprawidłowy ciąg znaków: musi zawierać "${_.includes}"`
              : _.format === `regex`
                ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_.pattern}`
                : `Nieprawidłow(y/a/e) ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Nieprawidłowa liczba: musi być wielokrotnością ${_.divisor}`;
      case `unrecognized_keys`:
        return `Nierozpoznane klucze${_.keys.length > 1 ? `s` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Nieprawidłowy klucz w ${_.origin}`;
      case `invalid_union`:
        return `Nieprawidłowe dane wejściowe`;
      case `invalid_element`:
        return `Nieprawidłowa wartość w ${_.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caracteres`,
    },
    file: {
      unit: `bytes`,
    },
    array: {
      unit: `elementos`,
    },
    set: {
      unit: `elementos`,
    },
    map: {
      unit: `entradas`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      masculine: {
        definite: `o`,
        indefinite: `um`,
      },
      feminine: {
        definite: `a`,
        indefinite: `uma`,
      },
    },
    _ = {
      string: {
        name: `texto`,
        articles: _.masculine,
      },
      number: {
        name: `número`,
        articles: _.masculine,
      },
      int: {
        name: `número inteiro`,
        articles: _.masculine,
      },
      boolean: {
        name: `valor booleano`,
        articles: _.masculine,
      },
      bigint: {
        name: `número bigint`,
        articles: _.masculine,
      },
      symbol: {
        name: `símbolo`,
        articles: _.masculine,
      },
      undefined: {
        name: `valor "undefined"`,
        articles: _.masculine,
      },
      null: {
        name: `valor "nulo"`,
        articles: _.masculine,
      },
      never: {
        name: `valor "never"`,
        articles: _.masculine,
      },
      void: {
        name: `valor "void"`,
        articles: _.masculine,
      },
      date: {
        name: `data`,
        articles: _.feminine,
      },
      array: {
        name: `vetor`,
        articles: _.masculine,
      },
      object: {
        name: `objeto`,
        articles: _.masculine,
      },
      tuple: {
        name: `tuplo`,
        articles: _.masculine,
      },
      record: {
        name: `registo`,
        articles: _.masculine,
      },
      map: {
        name: `mapa`,
        articles: _.masculine,
      },
      set: {
        name: `conjunto`,
        articles: _.masculine,
      },
      file: {
        name: `ficheiro`,
        articles: _.masculine,
      },
      nonoptional: {
        name: `valor não opcional`,
        articles: _.masculine,
      },
      nan: {
        name: `valor "NaN"`,
        articles: _.masculine,
      },
      function: {
        name: `função`,
        articles: _.feminine,
      },
    };
  function _(_, _) {
    let _ = _[_] ?? {
      name: `valor "${_}"`,
      articles: _.masculine,
    };
    return `${_.articles[_]} ${_.name}`;
  }
  return (_) => {
    switch (_.code) {
      case `invalid_type`:
        return `Entrada inválida: esperava ${_(_.expected, `indefinite`)}, recebeu ${_(_(_.input), `indefinite`)}`;
      case `invalid_value`:
        return _.values.length === 1
          ? `Entrada inválida: esperava ${_(_.values[0])}`
          : `Opção inválida: esperava uma das seguintes opções: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Demasiado grande: esperava que ${_(_.origin, `definite`)} tivesse ${_} ${_.maximum.toString()} ${_.unit ?? `elementos`}`
          : `Demasiado grande: esperava que ${_(_.origin, `definite`)} fosse ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Demasiado pequeno: esperava que ${_(_.origin, `definite`)} tivesse ${_} ${_.minimum.toString()} ${_.unit ?? `elementos`}`
          : `Demasiado pequeno: esperava que ${_(_.origin, `definite`)} fosse ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Texto inválido: deve começar por "${_.prefix}"`
          : _.format === `ends_with`
            ? `Texto inválido: deve terminar em "${_.suffix}"`
            : _.format === `includes`
              ? `Texto inválido: deve incluir "${_.includes}"`
              : _.format === `regex`
                ? `Texto inválido: deve corresponder ao padrão ${_.pattern}`
                : `Formato d${_[_.format] ?? _.format} inválido`;
      }
      case `not_multiple_of`:
        return `Número inválido: deve ser múltiplo de ${_.divisor}`;
      case `unrecognized_keys`: {
        let _ = _.keys.length > 1 ? `s` : ``;
        return `Chave${_} inválida${_}: ${_(_.keys, `, `)}`;
      }
      case `invalid_key`:
        return `Entrada inválida n${_(_.origin, `definite`)}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `Valor de discriminação inválido. Esperava ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `Entrada inválida`;
      case `invalid_element`:
        return `Entrada inválida n${_(_.origin, `definite`)}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caracteres`,
    },
    file: {
      unit: `bytes`,
    },
    array: {
      unit: `elementos`,
    },
    set: {
      unit: `elementos`,
    },
    map: {
      unit: `entradas`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      masculine: {
        definite: `o`,
        indefinite: `um`,
      },
      feminine: {
        definite: `a`,
        indefinite: `uma`,
      },
    },
    _ = {
      string: {
        name: `texto`,
        articles: _.masculine,
      },
      number: {
        name: `número`,
        articles: _.masculine,
      },
      int: {
        name: `número inteiro`,
        articles: _.masculine,
      },
      boolean: {
        name: `valor booleano`,
        articles: _.masculine,
      },
      bigint: {
        name: `número bigint`,
        articles: _.masculine,
      },
      symbol: {
        name: `símbolo`,
        articles: _.masculine,
      },
      undefined: {
        name: `valor "undefined"`,
        articles: _.masculine,
      },
      null: {
        name: `valor "nulo"`,
        articles: _.masculine,
      },
      never: {
        name: `valor "never"`,
        articles: _.masculine,
      },
      void: {
        name: `valor "void"`,
        articles: _.masculine,
      },
      date: {
        name: `data`,
        articles: _.feminine,
      },
      array: {
        name: `vetor`,
        articles: _.masculine,
      },
      object: {
        name: `objeto`,
        articles: _.masculine,
      },
      tuple: {
        name: `tupla`,
        articles: _.feminine,
      },
      record: {
        name: `registro`,
        articles: _.masculine,
      },
      map: {
        name: `mapa`,
        articles: _.masculine,
      },
      set: {
        name: `conjunto`,
        articles: _.masculine,
      },
      file: {
        name: `arquivo`,
        articles: _.masculine,
      },
      nonoptional: {
        name: `valor não opcional`,
        articles: _.masculine,
      },
      nan: {
        name: `valor "NaN"`,
        articles: _.masculine,
      },
      function: {
        name: `função`,
        articles: _.feminine,
      },
    };
  function _(_, _) {
    let _ = _[_] ?? {
      name: `valor "${_}"`,
      articles: _.masculine,
    };
    return `${_.articles[_]} ${_.name}`;
  }
  return (_) => {
    switch (_.code) {
      case `invalid_type`:
        return `Entrada inválida: esperava ${_(_.expected, `indefinite`)}, recebeu ${_(_(_.input), `indefinite`)}`;
      case `invalid_value`:
        return _.values.length === 1
          ? `Entrada inválida: esperava ${_(_.values[0])}`
          : `Opção inválida: esperava uma das seguintes opções: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Grande demais: esperava que ${_(_.origin, `definite`)} tivesse ${_} ${_.maximum.toString()} ${_.unit ?? `elementos`}`
          : `Grande demais: esperava que ${_(_.origin, `definite`)} fosse ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Pequeno demais: esperava que ${_(_.origin, `definite`)} tivesse ${_} ${_.minimum.toString()} ${_.unit ?? `elementos`}`
          : `Pequeno demais: esperava que ${_(_.origin, `definite`)} fosse ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Texto inválido: deve começar com "${_.prefix}"`
          : _.format === `ends_with`
            ? `Texto inválido: deve terminar com "${_.suffix}"`
            : _.format === `includes`
              ? `Texto inválido: deve incluir "${_.includes}"`
              : _.format === `regex`
                ? `Texto inválido: deve corresponder ao padrão ${_.pattern}`
                : `Formato d${_[_.format] ?? _.format} inválido`;
      }
      case `not_multiple_of`:
        return `Número inválido: deve ser múltiplo de ${_.divisor}`;
      case `unrecognized_keys`: {
        let _ = _.keys.length > 1 ? `s` : ``;
        return `Chave${_} inválida${_}: ${_(_.keys, `, `)}`;
      }
      case `invalid_key`:
        return `Entrada inválida n${_(_.origin, `definite`)}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `Valor de discriminação inválido. Esperava ${_.options.map((_) => `'${_}'`).join(` | `)}`
          : `Entrada inválida`;
      case `invalid_element`:
        return `Entrada inválida n${_(_.origin, `definite`)}`;
      default:
        return `Entrada inválida`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `caractere`,
      verb: `să aibă`,
    },
    file: {
      unit: `octeți`,
      verb: `să aibă`,
    },
    array: {
      unit: `elemente`,
      verb: `să aibă`,
    },
    set: {
      unit: `elemente`,
      verb: `să aibă`,
    },
    map: {
      unit: `intrări`,
      verb: `să aibă`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
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
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `Intrare invalidă: așteptat ${_}, primit ${_[_] ?? _}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Intrare invalidă: așteptat ${_(_.values[0])}`
          : `Opțiune invalidă: așteptat una dintre ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Prea mare: așteptat ca ${_.origin ?? `valoarea`} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? `elemente`}`
          : `Prea mare: așteptat ca ${_.origin ?? `valoarea`} să fie ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Prea mic: așteptat ca ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `Prea mic: așteptat ca ${_.origin} să fie ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Șir invalid: trebuie să înceapă cu "${_.prefix}"`
          : _.format === `ends_with`
            ? `Șir invalid: trebuie să se termine cu "${_.suffix}"`
            : _.format === `includes`
              ? `Șir invalid: trebuie să includă "${_.includes}"`
              : _.format === `regex`
                ? `Șir invalid: trebuie să se potrivească cu modelul ${_.pattern}`
                : `Format invalid: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Număr invalid: trebuie să fie multiplu de ${_.divisor}`;
      case `unrecognized_keys`:
        return `Chei nerecunoscute: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Cheie invalidă în ${_.origin}`;
      case `invalid_union`:
        return `Intrare invalidă`;
      case `invalid_element`:
        return `Valoare invalidă în ${_.origin}`;
      default:
        return `Intrare invalidă`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
function _(_, _, _, _) {
  let _ = Math.abs(_),
    _ = _ % 10,
    _ = _ % 100;
  return _ >= 11 && _ <= 19 ? _ : _ === 1 ? _ : _ >= 2 && _ <= 4 ? _ : _;
}
var _ = () => {
  let _ = {
    string: {
      unit: {
        one: `символ`,
        few: `символа`,
        many: `символов`,
      },
      verb: `иметь`,
    },
    file: {
      unit: {
        one: `байт`,
        few: `байта`,
        many: `байт`,
      },
      verb: `иметь`,
    },
    array: {
      unit: {
        one: `элемент`,
        few: `элемента`,
        many: `элементов`,
      },
      verb: `иметь`,
    },
    set: {
      unit: {
        one: `элемент`,
        few: `элемента`,
        many: `элементов`,
      },
      verb: `иметь`,
    },
    map: {
      unit: {
        one: `элемент`,
        few: `элемента`,
        many: `элементов`,
      },
      verb: `иметь`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `число`,
      array: `массив`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Неверный ввод: ожидалось instanceof ${_.expected}, получено ${_}`
          : `Неверный ввод: ожидалось ${_}, получено ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Неверный ввод: ожидалось ${_(_.values[0])}`
          : `Неверный вариант: ожидалось одно из ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.maximum), _.unit.one, _.unit.few, _.unit.many);
          return `Слишком большое значение: ожидалось, что ${_.origin ?? `значение`} будет иметь ${_}${_.maximum.toString()} ${_}`;
        }
        return `Слишком большое значение: ожидалось, что ${_.origin ?? `значение`} будет ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        if (_) {
          let _ = _(Number(_.minimum), _.unit.one, _.unit.few, _.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${_.origin} будет иметь ${_}${_.minimum.toString()} ${_}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${_.origin} будет ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Неверная строка: должна начинаться с "${_.prefix}"`
          : _.format === `ends_with`
            ? `Неверная строка: должна заканчиваться на "${_.suffix}"`
            : _.format === `includes`
              ? `Неверная строка: должна содержать "${_.includes}"`
              : _.format === `regex`
                ? `Неверная строка: должна соответствовать шаблону ${_.pattern}`
                : `Неверный ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Неверное число: должно быть кратным ${_.divisor}`;
      case `unrecognized_keys`:
        return `Нераспознанн${_.keys.length > 1 ? `ые` : `ый`} ключ${_.keys.length > 1 ? `и` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Неверный ключ в ${_.origin}`;
      case `invalid_union`:
        return `Неверные входные данные`;
      case `invalid_element`:
        return `Неверное значение в ${_.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `znakov`,
      verb: `mať`,
    },
    file: {
      unit: `bajtov`,
      verb: `mať`,
    },
    array: {
      unit: `prvkov`,
      verb: `mať`,
    },
    set: {
      unit: `prvkov`,
      verb: `mať`,
    },
    map: {
      unit: `položiek`,
      verb: `mať`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `číslo`,
      string: `reťazec`,
      function: `funkcia`,
      array: `pole`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Neplatný vstup: očakávané instanceof ${_.expected}, obdržané ${_}`
          : `Neplatný vstup: očakávané ${_}, obdržané ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Neplatný vstup: očakávané ${_(_.values[0])}`
          : `Neplatný vstup: očakávaná jedna z hodnôt ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Hodnota je príliš veľká: ${_.origin ?? `hodnota`} musí mať ${_}${_.maximum.toString()} ${_.unit ?? `prvkov`}`
          : `Hodnota je príliš veľká: ${_.origin ?? `hodnota`} musí byť ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Hodnota je príliš malá: ${_.origin ?? `hodnota`} musí mať ${_}${_.minimum.toString()} ${_.unit ?? `prvkov`}`
          : `Hodnota je príliš malá: ${_.origin ?? `hodnota`} musí byť ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Neplatný reťazec: musí začínať na "${_.prefix}"`
          : _.format === `ends_with`
            ? `Neplatný reťazec: musí končiť na "${_.suffix}"`
            : _.format === `includes`
              ? `Neplatný reťazec: musí obsahovať "${_.includes}"`
              : _.format === `regex`
                ? `Neplatný reťazec: musí zodpovedať vzoru ${_.pattern}`
                : `Neplatný formát ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Neplatné číslo: musí byť násobkom ${_.divisor}`;
      case `unrecognized_keys`:
        return `Neznáme klúče: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Neplatný klúč v ${_.origin}`;
      case `invalid_union`:
        return `Neplatný vstup`;
      case `invalid_element`:
        return `Neplatná hodnota v ${_.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `znakov`,
      verb: `imeti`,
    },
    file: {
      unit: `bajtov`,
      verb: `imeti`,
    },
    array: {
      unit: `elementov`,
      verb: `imeti`,
    },
    set: {
      unit: `elementov`,
      verb: `imeti`,
    },
    map: {
      unit: `elementov`,
      verb: `imeti`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `število`,
      array: `tabela`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Neveljaven vnos: pričakovano instanceof ${_.expected}, prejeto ${_}`
          : `Neveljaven vnos: pričakovano ${_}, prejeto ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Neveljaven vnos: pričakovano ${_(_.values[0])}`
          : `Neveljavna možnost: pričakovano eno izmed ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Preveliko: pričakovano, da bo ${_.origin ?? `vrednost`} imelo ${_}${_.maximum.toString()} ${_.unit ?? `elementov`}`
          : `Preveliko: pričakovano, da bo ${_.origin ?? `vrednost`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Premajhno: pričakovano, da bo ${_.origin} imelo ${_}${_.minimum.toString()} ${_.unit}`
          : `Premajhno: pričakovano, da bo ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Neveljaven niz: mora se začeti z "${_.prefix}"`
          : _.format === `ends_with`
            ? `Neveljaven niz: mora se končati z "${_.suffix}"`
            : _.format === `includes`
              ? `Neveljaven niz: mora vsebovati "${_.includes}"`
              : _.format === `regex`
                ? `Neveljaven niz: mora ustrezati vzorcu ${_.pattern}`
                : `Neveljaven ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Neveljavno število: mora biti večkratnik ${_.divisor}`;
      case `unrecognized_keys`:
        return `Neprepoznan${_.keys.length > 1 ? `i ključi` : ` ključ`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Neveljaven ključ v ${_.origin}`;
      case `invalid_union`:
        return `Neveljaven vnos`;
      case `invalid_element`:
        return `Neveljavna vrednost v ${_.origin}`;
      default:
        return `Neveljaven vnos`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `tecken`,
      verb: `att ha`,
    },
    file: {
      unit: `bytes`,
      verb: `att ha`,
    },
    array: {
      unit: `objekt`,
      verb: `att innehålla`,
    },
    set: {
      unit: `objekt`,
      verb: `att innehålla`,
    },
    map: {
      unit: `objekt`,
      verb: `att innehålla`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `antal`,
      array: `lista`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ogiltig inmatning: förväntat instanceof ${_.expected}, fick ${_}`
          : `Ogiltig inmatning: förväntat ${_}, fick ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ogiltig inmatning: förväntat ${_(_.values[0])}`
          : `Ogiltigt val: förväntade en av ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `För stor(t): förväntade ${_.origin ?? `värdet`} att ha ${_}${_.maximum.toString()} ${_.unit ?? `element`}`
          : `För stor(t): förväntat ${_.origin ?? `värdet`} att ha ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `För lite(t): förväntade ${_.origin ?? `värdet`} att ha ${_}${_.minimum.toString()} ${_.unit}`
          : `För lite(t): förväntade ${_.origin ?? `värdet`} att ha ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ogiltig sträng: måste börja med "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ogiltig sträng: måste sluta med "${_.suffix}"`
            : _.format === `includes`
              ? `Ogiltig sträng: måste innehålla "${_.includes}"`
              : _.format === `regex`
                ? `Ogiltig sträng: måste matcha mönstret "${_.pattern}"`
                : `Ogiltig(t) ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Ogiltigt tal: måste vara en multipel av ${_.divisor}`;
      case `unrecognized_keys`:
        return `${_.keys.length > 1 ? `Okända nycklar` : `Okänd nyckel`}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Ogiltig nyckel i ${_.origin ?? `värdet`}`;
      case `invalid_union`:
        return `Ogiltig input`;
      case `invalid_element`:
        return `Ogiltigt värde i ${_.origin ?? `värdet`}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `எழுத்துக்கள்`,
      verb: `கொண்டிருக்க வேண்டும்`,
    },
    file: {
      unit: `பைட்டுகள்`,
      verb: `கொண்டிருக்க வேண்டும்`,
    },
    array: {
      unit: `உறுப்புகள்`,
      verb: `கொண்டிருக்க வேண்டும்`,
    },
    set: {
      unit: `உறுப்புகள்`,
      verb: `கொண்டிருக்க வேண்டும்`,
    },
    map: {
      unit: `உறுப்புகள்`,
      verb: `கொண்டிருக்க வேண்டும்`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `எண்`,
      array: `அணி`,
      null: `வெறுமை`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${_.expected}, பெறப்பட்டது ${_}`
          : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_}, பெறப்பட்டது ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_(_.values[0])}`
          : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${_(_.values, `|`)} இல் ஒன்று`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${_.origin ?? `மதிப்பு`} ${_}${_.maximum.toString()} ${_.unit ?? `உறுப்புகள்`} ஆக இருக்க வேண்டும்`
          : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${_.origin ?? `மதிப்பு`} ${_}${_.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ஆக இருக்க வேண்டும்`
          : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${_.origin} ${_}${_.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `தவறான சரம்: "${_.prefix}" இல் தொடங்க வேண்டும்`
          : _.format === `ends_with`
            ? `தவறான சரம்: "${_.suffix}" இல் முடிவடைய வேண்டும்`
            : _.format === `includes`
              ? `தவறான சரம்: "${_.includes}" ஐ உள்ளடக்க வேண்டும்`
              : _.format === `regex`
                ? `தவறான சரம்: ${_.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                : `தவறான ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `தவறான எண்: ${_.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case `unrecognized_keys`:
        return `அடையாளம் தெரியாத விசை${_.keys.length > 1 ? `கள்` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} இல் தவறான விசை`;
      case `invalid_union`:
        return `தவறான உள்ளீடு`;
      case `invalid_element`:
        return `${_.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `аломат`,
      verb: `дошта бошад`,
    },
    file: {
      unit: `байт`,
      verb: `дошта бошад`,
    },
    array: {
      unit: `унсур`,
      verb: `дошта бошад`,
    },
    set: {
      unit: `унсур`,
      verb: `дошта бошад`,
    },
    map: {
      unit: `сабт`,
      verb: `дошта бошад`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `рақам`,
      string: `сатр`,
      array: `массив`,
      object: `объект`,
      date: `сана`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `Вуруди нодуруст: ${_} интизор мерафт, ${_[_] ?? _} гирифта шуд`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Вуруди нодуруст: ${_(_.values[0])} интизор мерафт`
          : `Интихоби нодуруст: яке аз ${_(_.values, `|`)} интизор мерафт`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Хеле калон: ${_.origin ?? `қимат`} бояд ${_}${_.maximum.toString()} ${_.unit} ${_.verb}`
          : `Хеле калон: ${_.origin ?? `қимат`} бояд ${_}${_.maximum.toString()} бошад`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Хеле хурд: ${_.origin} бояд ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
          : `Хеле хурд: ${_.origin} бояд ${_}${_.minimum.toString()} бошад`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Сатри нодуруст: бояд бо "${_.prefix}" оғоз шавад`
          : _.format === `ends_with`
            ? `Сатри нодуруст: бояд бо "${_.suffix}" анҷом ёбад`
            : _.format === `includes`
              ? `Сатри нодуруст: бояд "${_.includes}"-ро дар бар гирад`
              : _.format === `regex`
                ? `Сатри нодуруст: бояд ба намунаи ${_.pattern} мувофиқат кунад`
                : `${_[_.format] ?? _.format}-и нодуруст`;
      }
      case `not_multiple_of`:
        return `Рақами нодуруст: бояд ба ${_.divisor} бе бақия тақсим шавад`;
      case `unrecognized_keys`:
        return `Калид${_.keys.length > 1 ? `ҳои` : `и`} номаълум: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Калиди нодуруст дар ${_.origin}`;
      case `invalid_union`:
        return _.options && Array.isArray(_.options) && _.options.length > 0
          ? `Қимати нодурусти дискриминатор: ${_.options.map((_) => `'${_}'`).join(` | `)} интизор мерафт`
          : `Вуруди нодуруст`;
      case `invalid_element`:
        return `Қимати нодуруст дар ${_.origin}`;
      default:
        return `Вуруди нодуруст`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `ตัวอักษร`,
      verb: `ควรมี`,
    },
    file: {
      unit: `ไบต์`,
      verb: `ควรมี`,
    },
    array: {
      unit: `รายการ`,
      verb: `ควรมี`,
    },
    set: {
      unit: `รายการ`,
      verb: `ควรมี`,
    },
    map: {
      unit: `รายการ`,
      verb: `ควรมี`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `ตัวเลข`,
      array: `อาร์เรย์ (Array)`,
      null: `ไม่มีค่า (null)`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${_.expected} แต่ได้รับ ${_}`
          : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${_} แต่ได้รับ ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `ค่าไม่ถูกต้อง: ควรเป็น ${_(_.values[0])}`
          : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `ไม่เกิน` : `น้อยกว่า`,
          _ = _(_.origin);
        return _
          ? `เกินกำหนด: ${_.origin ?? `ค่า`} ควรมี${_} ${_.maximum.toString()} ${_.unit ?? `รายการ`}`
          : `เกินกำหนด: ${_.origin ?? `ค่า`} ควรมี${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `อย่างน้อย` : `มากกว่า`,
          _ = _(_.origin);
        return _
          ? `น้อยกว่ากำหนด: ${_.origin} ควรมี${_} ${_.minimum.toString()} ${_.unit}`
          : `น้อยกว่ากำหนด: ${_.origin} ควรมี${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_.prefix}"`
          : _.format === `ends_with`
            ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_.suffix}"`
            : _.format === `includes`
              ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_.includes}" อยู่ในข้อความ`
              : _.format === `regex`
                ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_.pattern}`
                : `รูปแบบไม่ถูกต้อง: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${_.divisor} ได้ลงตัว`;
      case `unrecognized_keys`:
        return `พบคีย์ที่ไม่รู้จัก: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `คีย์ไม่ถูกต้องใน ${_.origin}`;
      case `invalid_union`:
        return `ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้`;
      case `invalid_element`:
        return `ข้อมูลไม่ถูกต้องใน ${_.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `simwol`,
      verb: `bolmaly`,
    },
    file: {
      unit: `baýt`,
      verb: `bolmaly`,
    },
    array: {
      unit: `elementler`,
      verb: `bolmaly`,
    },
    set: {
      unit: `elementler`,
      verb: `bolmaly`,
    },
    map: {
      unit: `elementler`,
      verb: `bolmaly`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input);
        return `Nädogry baha: garaşylan ${_} ýerine ${_[_] ?? _} alyndy`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Nädogry baha: ${_(_.values[0])} bolmaly`
          : `Nädogry saýlaw: aşakdakylardan biri bolmaly: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Has uly: garaşylýan ${_.origin ?? `baha`} ${_} ${_.maximum.toString()} ${_.unit ?? `element`}`
          : `Has uly: garaşylýan ${_.origin ?? `baha`} ${_} ${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Has kiçi: garaşylýan ${_.origin} ${_} ${_.minimum.toString()} ${_.unit}`
          : `Has kiçi: garaşylýan ${_.origin} ${_} ${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Nädogry setir: "${_.prefix}" bilen başlamaly`
          : _.format === `ends_with`
            ? `Nädogry setir: "${_.suffix}" bilen gutarmaly`
            : _.format === `includes`
              ? `Nädogry setir: "${_.includes}" saklamaly`
              : _.format === `regex`
                ? `Nädogry setir: ${_.pattern} nusga laýyk bolmaly`
                : `Nädogry ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Nädogry san: ${_.divisor} bilen galyndysyz bölünmeli`;
      case `unrecognized_keys`:
        return `Tanalmaýan açar${_.keys.length > 1 ? `lar` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} içinde nädogry açar`;
      case `invalid_union`:
        return `Nädogry baha`;
      case `invalid_element`:
        return `${_.origin} içinde nädogry baha`;
      default:
        return `Nädogry baha`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `karakter`,
      verb: `olmalı`,
    },
    file: {
      unit: `bayt`,
      verb: `olmalı`,
    },
    array: {
      unit: `öğe`,
      verb: `olmalı`,
    },
    set: {
      unit: `öğe`,
      verb: `olmalı`,
    },
    map: {
      unit: `öğe`,
      verb: `olmalı`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Geçersiz değer: beklenen instanceof ${_.expected}, alınan ${_}`
          : `Geçersiz değer: beklenen ${_}, alınan ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Geçersiz değer: beklenen ${_(_.values[0])}`
          : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Çok büyük: beklenen ${_.origin ?? `değer`} ${_}${_.maximum.toString()} ${_.unit ?? `öğe`}`
          : `Çok büyük: beklenen ${_.origin ?? `değer`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Çok küçük: beklenen ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
          : `Çok küçük: beklenen ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Geçersiz metin: "${_.prefix}" ile başlamalı`
          : _.format === `ends_with`
            ? `Geçersiz metin: "${_.suffix}" ile bitmeli`
            : _.format === `includes`
              ? `Geçersiz metin: "${_.includes}" içermeli`
              : _.format === `regex`
                ? `Geçersiz metin: ${_.pattern} desenine uymalı`
                : `Geçersiz ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Geçersiz sayı: ${_.divisor} ile tam bölünebilmeli`;
      case `unrecognized_keys`:
        return `Tanınmayan anahtar${_.keys.length > 1 ? `lar` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} içinde geçersiz anahtar`;
      case `invalid_union`:
        return `Geçersiz değer`;
      case `invalid_element`:
        return `${_.origin} içinde geçersiz değer`;
      default:
        return `Geçersiz değer`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `символів`,
      verb: `матиме`,
    },
    file: {
      unit: `байтів`,
      verb: `матиме`,
    },
    array: {
      unit: `елементів`,
      verb: `матиме`,
    },
    set: {
      unit: `елементів`,
      verb: `матиме`,
    },
    map: {
      unit: `елементів`,
      verb: `матиме`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `число`,
      array: `масив`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Неправильні вхідні дані: очікується instanceof ${_.expected}, отримано ${_}`
          : `Неправильні вхідні дані: очікується ${_}, отримано ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Неправильні вхідні дані: очікується ${_(_.values[0])}`
          : `Неправильна опція: очікується одне з ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Занадто велике: очікується, що ${_.origin ?? `значення`} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? `елементів`}`
          : `Занадто велике: очікується, що ${_.origin ?? `значення`} буде ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Занадто мале: очікується, що ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `Занадто мале: очікується, що ${_.origin} буде ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Неправильний рядок: повинен починатися з "${_.prefix}"`
          : _.format === `ends_with`
            ? `Неправильний рядок: повинен закінчуватися на "${_.suffix}"`
            : _.format === `includes`
              ? `Неправильний рядок: повинен містити "${_.includes}"`
              : _.format === `regex`
                ? `Неправильний рядок: повинен відповідати шаблону ${_.pattern}`
                : `Неправильний ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Неправильне число: повинно бути кратним ${_.divisor}`;
      case `unrecognized_keys`:
        return `Нерозпізнаний ключ${_.keys.length > 1 ? `і` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Неправильний ключ у ${_.origin}`;
      case `invalid_union`:
        return `Неправильні вхідні дані`;
      case `invalid_element`:
        return `Неправильне значення у ${_.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
function _() {
  return _();
}
var _ = () => {
  let _ = {
    string: {
      unit: `حروف`,
      verb: `ہونا`,
    },
    file: {
      unit: `بائٹس`,
      verb: `ہونا`,
    },
    array: {
      unit: `آئٹمز`,
      verb: `ہونا`,
    },
    set: {
      unit: `آئٹمز`,
      verb: `ہونا`,
    },
    map: {
      unit: `آئٹمز`,
      verb: `ہونا`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `نمبر`,
      array: `آرے`,
      null: `نل`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `غلط ان پٹ: instanceof ${_.expected} متوقع تھا، ${_} موصول ہوا`
          : `غلط ان پٹ: ${_} متوقع تھا، ${_} موصول ہوا`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `غلط ان پٹ: ${_(_.values[0])} متوقع تھا`
          : `غلط آپشن: ${_(_.values, `|`)} میں سے ایک متوقع تھا`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `بہت بڑا: ${_.origin ?? `ویلیو`} کے ${_}${_.maximum.toString()} ${_.unit ?? `عناصر`} ہونے متوقع تھے`
          : `بہت بڑا: ${_.origin ?? `ویلیو`} کا ${_}${_.maximum.toString()} ہونا متوقع تھا`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `بہت چھوٹا: ${_.origin} کے ${_}${_.minimum.toString()} ${_.unit} ہونے متوقع تھے`
          : `بہت چھوٹا: ${_.origin} کا ${_}${_.minimum.toString()} ہونا متوقع تھا`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `غلط سٹرنگ: "${_.prefix}" سے شروع ہونا چاہیے`
          : _.format === `ends_with`
            ? `غلط سٹرنگ: "${_.suffix}" پر ختم ہونا چاہیے`
            : _.format === `includes`
              ? `غلط سٹرنگ: "${_.includes}" شامل ہونا چاہیے`
              : _.format === `regex`
                ? `غلط سٹرنگ: پیٹرن ${_.pattern} سے میچ ہونا چاہیے`
                : `غلط ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `غلط نمبر: ${_.divisor} کا مضاعف ہونا چاہیے`;
      case `unrecognized_keys`:
        return `غیر تسلیم شدہ کی${_.keys.length > 1 ? `ز` : ``}: ${_(_.keys, `، `)}`;
      case `invalid_key`:
        return `${_.origin} میں غلط کی`;
      case `invalid_union`:
        return `غلط ان پٹ`;
      case `invalid_element`:
        return `${_.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `belgi`,
      verb: `bo‘lishi kerak`,
    },
    file: {
      unit: `bayt`,
      verb: `bo‘lishi kerak`,
    },
    array: {
      unit: `element`,
      verb: `bo‘lishi kerak`,
    },
    set: {
      unit: `element`,
      verb: `bo‘lishi kerak`,
    },
    map: {
      unit: `yozuv`,
      verb: `bo‘lishi kerak`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `raqam`,
      array: `massiv`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Noto‘g‘ri kirish: kutilgan instanceof ${_.expected}, qabul qilingan ${_}`
          : `Noto‘g‘ri kirish: kutilgan ${_}, qabul qilingan ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Noto‘g‘ri kirish: kutilgan ${_(_.values[0])}`
          : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Juda katta: kutilgan ${_.origin ?? `qiymat`} ${_}${_.maximum.toString()} ${_.unit} ${_.verb}`
          : `Juda katta: kutilgan ${_.origin ?? `qiymat`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Juda kichik: kutilgan ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
          : `Juda kichik: kutilgan ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Noto‘g‘ri satr: "${_.prefix}" bilan boshlanishi kerak`
          : _.format === `ends_with`
            ? `Noto‘g‘ri satr: "${_.suffix}" bilan tugashi kerak`
            : _.format === `includes`
              ? `Noto‘g‘ri satr: "${_.includes}" ni o‘z ichiga olishi kerak`
              : _.format === `regex`
                ? `Noto‘g‘ri satr: ${_.pattern} shabloniga mos kelishi kerak`
                : `Noto‘g‘ri ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Noto‘g‘ri raqam: ${_.divisor} ning karralisi bo‘lishi kerak`;
      case `unrecognized_keys`:
        return `Noma’lum kalit${_.keys.length > 1 ? `lar` : ``}: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} dagi kalit noto‘g‘ri`;
      case `invalid_union`:
        return `Noto‘g‘ri kirish`;
      case `invalid_element`:
        return `${_.origin} da noto‘g‘ri qiymat`;
      default:
        return `Noto‘g‘ri kirish`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `ký tự`,
      verb: `có`,
    },
    file: {
      unit: `byte`,
      verb: `có`,
    },
    array: {
      unit: `phần tử`,
      verb: `có`,
    },
    set: {
      unit: `phần tử`,
      verb: `có`,
    },
    map: {
      unit: `phần tử`,
      verb: `có`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `số`,
      array: `mảng`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Đầu vào không hợp lệ: mong đợi instanceof ${_.expected}, nhận được ${_}`
          : `Đầu vào không hợp lệ: mong đợi ${_}, nhận được ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Đầu vào không hợp lệ: mong đợi ${_(_.values[0])}`
          : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Quá lớn: mong đợi ${_.origin ?? `giá trị`} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? `phần tử`}`
          : `Quá lớn: mong đợi ${_.origin ?? `giá trị`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Quá nhỏ: mong đợi ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
          : `Quá nhỏ: mong đợi ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${_.prefix}"`
          : _.format === `ends_with`
            ? `Chuỗi không hợp lệ: phải kết thúc bằng "${_.suffix}"`
            : _.format === `includes`
              ? `Chuỗi không hợp lệ: phải bao gồm "${_.includes}"`
              : _.format === `regex`
                ? `Chuỗi không hợp lệ: phải khớp với mẫu ${_.pattern}`
                : `${_[_.format] ?? _.format} không hợp lệ`;
      }
      case `not_multiple_of`:
        return `Số không hợp lệ: phải là bội số của ${_.divisor}`;
      case `unrecognized_keys`:
        return `Khóa không được nhận dạng: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Khóa không hợp lệ trong ${_.origin}`;
      case `invalid_union`:
        return `Đầu vào không hợp lệ`;
      case `invalid_element`:
        return `Giá trị không hợp lệ trong ${_.origin}`;
      default:
        return `Đầu vào không hợp lệ`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `字符`,
      verb: `包含`,
    },
    file: {
      unit: `字节`,
      verb: `包含`,
    },
    array: {
      unit: `项`,
      verb: `包含`,
    },
    set: {
      unit: `项`,
      verb: `包含`,
    },
    map: {
      unit: `项`,
      verb: `包含`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `数字`,
      array: `数组`,
      null: `空值(null)`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `无效输入：期望 instanceof ${_.expected}，实际接收 ${_}`
          : `无效输入：期望 ${_}，实际接收 ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `无效输入：期望 ${_(_.values[0])}`
          : `无效选项：期望以下之一 ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `数值过大：期望 ${_.origin ?? `值`} ${_}${_.maximum.toString()} ${_.unit ?? `个元素`}`
          : `数值过大：期望 ${_.origin ?? `值`} ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `数值过小：期望 ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
          : `数值过小：期望 ${_.origin} ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `无效字符串：必须以 "${_.prefix}" 开头`
          : _.format === `ends_with`
            ? `无效字符串：必须以 "${_.suffix}" 结尾`
            : _.format === `includes`
              ? `无效字符串：必须包含 "${_.includes}"`
              : _.format === `regex`
                ? `无效字符串：必须满足正则表达式 ${_.pattern}`
                : `无效${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `无效数字：必须是 ${_.divisor} 的倍数`;
      case `unrecognized_keys`:
        return `出现未知的键(key): ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `${_.origin} 中的键(key)无效`;
      case `invalid_union`:
        return `无效输入`;
      case `invalid_element`:
        return `${_.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `字元`,
      verb: `擁有`,
    },
    file: {
      unit: `位元組`,
      verb: `擁有`,
    },
    array: {
      unit: `項目`,
      verb: `擁有`,
    },
    set: {
      unit: `項目`,
      verb: `擁有`,
    },
    map: {
      unit: `項目`,
      verb: `擁有`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `無效的輸入值：預期為 instanceof ${_.expected}，但收到 ${_}`
          : `無效的輸入值：預期為 ${_}，但收到 ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `無效的輸入值：預期為 ${_(_.values[0])}`
          : `無效的選項：預期為以下其中之一 ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `數值過大：預期 ${_.origin ?? `值`} 應為 ${_}${_.maximum.toString()} ${_.unit ?? `個元素`}`
          : `數值過大：預期 ${_.origin ?? `值`} 應為 ${_}${_.maximum.toString()}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `數值過小：預期 ${_.origin} 應為 ${_}${_.minimum.toString()} ${_.unit}`
          : `數值過小：預期 ${_.origin} 應為 ${_}${_.minimum.toString()}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `無效的字串：必須以 "${_.prefix}" 開頭`
          : _.format === `ends_with`
            ? `無效的字串：必須以 "${_.suffix}" 結尾`
            : _.format === `includes`
              ? `無效的字串：必須包含 "${_.includes}"`
              : _.format === `regex`
                ? `無效的字串：必須符合格式 ${_.pattern}`
                : `無效的 ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `無效的數字：必須為 ${_.divisor} 的倍數`;
      case `unrecognized_keys`:
        return `無法識別的鍵值${_.keys.length > 1 ? `們` : ``}：${_(_.keys, `、`)}`;
      case `invalid_key`:
        return `${_.origin} 中有無效的鍵值`;
      case `invalid_union`:
        return `無效的輸入值`;
      case `invalid_element`:
        return `${_.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = () => {
  let _ = {
    string: {
      unit: `àmi`,
      verb: `ní`,
    },
    file: {
      unit: `bytes`,
      verb: `ní`,
    },
    array: {
      unit: `nkan`,
      verb: `ní`,
    },
    set: {
      unit: `nkan`,
      verb: `ní`,
    },
    map: {
      unit: `nkan`,
      verb: `ní`,
    },
  };
  function _(_) {
    return _[_] ?? null;
  }
  let _ = {
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
    _ = {
      nan: `NaN`,
      number: `nọ́mbà`,
      array: `akopọ`,
    };
  return (_) => {
    switch (_.code) {
      case `invalid_type`: {
        let _ = _[_.expected] ?? _.expected,
          _ = _(_.input),
          _ = _[_] ?? _;
        return /^[A-Z]/.test(_.expected)
          ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${_.expected}, àmọ̀ a rí ${_}`
          : `Ìbáwọlé aṣìṣe: a ní láti fi ${_}, àmọ̀ a rí ${_}`;
      }
      case `invalid_value`:
        return _.values.length === 1
          ? `Ìbáwọlé aṣìṣe: a ní láti fi ${_(_.values[0])}`
          : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${_(_.values, `|`)}`;
      case `too_big`: {
        let _ = _.inclusive ? `<=` : `<`,
          _ = _(_.origin);
        return _
          ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${_.origin ?? `iye`} ${_.verb} ${_}${_.maximum} ${_.unit}`
          : `Tó pọ̀ jù: a ní láti jẹ́ ${_}${_.maximum}`;
      }
      case `too_small`: {
        let _ = _.inclusive ? `>=` : `>`,
          _ = _(_.origin);
        return _
          ? `Kéré ju: a ní láti jẹ́ pé ${_.origin} ${_.verb} ${_}${_.minimum} ${_.unit}`
          : `Kéré ju: a ní láti jẹ́ ${_}${_.minimum}`;
      }
      case `invalid_format`: {
        let _ = _;
        return _.format === `starts_with`
          ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_.prefix}"`
          : _.format === `ends_with`
            ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_.suffix}"`
            : _.format === `includes`
              ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_.includes}"`
              : _.format === `regex`
                ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_.pattern}`
                : `Aṣìṣe: ${_[_.format] ?? _.format}`;
      }
      case `not_multiple_of`:
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${_.divisor}`;
      case `unrecognized_keys`:
        return `Bọtìnì àìmọ̀: ${_(_.keys, `, `)}`;
      case `invalid_key`:
        return `Bọtìnì aṣìṣe nínú ${_.origin}`;
      case `invalid_union`:
        return `Ìbáwọlé aṣìṣe`;
      case `invalid_element`:
        return `Iye aṣìṣe nínú ${_.origin}`;
      default:
        return `Ìbáwọlé aṣìṣe`;
    }
  };
};
function _() {
  return {
    localeError: _(),
  };
}
var _ = _({
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    ckb: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    frCA: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    ota: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    ptBR: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    _: () => _,
    zhCN: () => _,
    zhTW: () => _,
  }),
  _,
  _ = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(_, ..._) {
      let _ = _[0];
      return (
        this._map.set(_, _),
        _ && typeof _ == `object` && `id` in _ && this._idmap.set(_._, _),
        this
      );
    }
    clear() {
      return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(_) {
      let _ = this._map.get(_);
      return (
        _ && typeof _ == `object` && `id` in _ && this._idmap.delete(_._),
        this._map.delete(_),
        this
      );
    }
    get(_) {
      let _ = _._zod.parent;
      if (_) {
        let _ = {
          ...(this.get(_) ?? {}),
        };
        delete _._;
        let _ = {
          ..._,
          ...this._map.get(_),
        };
        return Object.keys(_).length ? _ : void 0;
      }
      return this._map.get(_);
    }
    has(_) {
      return this._map.has(_);
    }
  };
function _() {
  return new _();
}
(_ = globalThis).__zod_globalRegistry ?? (_.__zod_globalRegistry = _());
var _ = globalThis.__zod_globalRegistry;
function _(_) {
  return ((_.checks &&= [..._.checks]), _);
}
function _(_, _) {
  return new _(
    _({
      type: `string`,
      ..._(_),
    }),
  );
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ..._(_),
  });
}
function _(_, _) {
  return new _(
    _({
      type: `number`,
      checks: [],
      ..._(_),
    }),
  );
}
function _(_, _) {
  return new _(
    _({
      type: `number`,
      coerce: !0,
      checks: [],
      ..._(_),
    }),
  );
}
function _(_, _) {
  return new _({
    type: `number`,
    check: `number_format`,
    abort: !1,
    format: `safeint`,
    ..._(_),
  });
}
function _(_) {
  return new _({
    type: `unknown`,
  });
}
function _(_, _) {
  return new _({
    type: `never`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    check: `less_than`,
    ..._(_),
    value: _,
    inclusive: !1,
  });
}
function _(_, _) {
  return new _({
    check: `less_than`,
    ..._(_),
    value: _,
    inclusive: !0,
  });
}
function _(_, _) {
  return new _({
    check: `greater_than`,
    ..._(_),
    value: _,
    inclusive: !1,
  });
}
function _(_, _) {
  return new _({
    check: `greater_than`,
    ..._(_),
    value: _,
    inclusive: !0,
  });
}
function _(_, _) {
  return new _({
    check: `multiple_of`,
    ..._(_),
    value: _,
  });
}
function _(_, _) {
  return new _({
    check: `max_length`,
    ..._(_),
    maximum: _,
  });
}
function _(_, _) {
  return new _({
    check: `min_length`,
    ..._(_),
    minimum: _,
  });
}
function _(_, _) {
  return new _({
    check: `length_equals`,
    ..._(_),
    length: _,
  });
}
function _(_, _) {
  return new _({
    check: `string_format`,
    format: `regex`,
    ..._(_),
    pattern: _,
  });
}
function _(_) {
  return new _({
    check: `string_format`,
    format: `lowercase`,
    ..._(_),
  });
}
function _(_) {
  return new _({
    check: `string_format`,
    format: `uppercase`,
    ..._(_),
  });
}
function _(_, _) {
  return new _({
    check: `string_format`,
    format: `includes`,
    ..._(_),
    includes: _,
  });
}
function _(_, _) {
  return new _({
    check: `string_format`,
    format: `starts_with`,
    ..._(_),
    prefix: _,
  });
}
function _(_, _) {
  return new _({
    check: `string_format`,
    format: `ends_with`,
    ..._(_),
    suffix: _,
  });
}
function _(_) {
  return new _({
    check: `overwrite`,
    _: _,
  });
}
function _(_) {
  return _((_) => _.normalize(_));
}
function _() {
  return _((_) => _.trim());
}
function _() {
  return _((_) => _.toLowerCase());
}
function _() {
  return _((_) => _.toUpperCase());
}
function _() {
  return _((_) => _(_));
}
function _(_, _, _) {
  return new _({
    type: `array`,
    element: _,
    ..._(_),
  });
}
function _(_, _, _) {
  return new _({
    type: `custom`,
    check: `custom`,
    _: _,
    ..._(_),
  });
}
function _(_, _) {
  let _ = _(
    (_) => (
      (_.addIssue = (_) => {
        if (typeof _ == `string`) _.issues.push(_(_, _.value, _._zod.def));
        else {
          let _ = _;
          (_.fatal && (_.continue = !1),
            (_.code ??= `custom`),
            `input` in _ || (_.input = _.value),
            (_.inst ??= _),
            (_.continue ??= !_._zod.def.abort),
            _.issues.push(_(_)));
        }
      }),
      _(_.value, _)
    ),
    _,
  );
  return _;
}
function _(_, _) {
  let _ = new _({
    check: `custom`,
    ..._(_),
  });
  return ((_._zod.check = _), _);
}
function _(_, _) {
  let _ = _(_),
    _ = _.truthy ?? [`true`, `1`, `yes`, `on`, `y`, `enabled`],
    _ = _.falsy ?? [`false`, `0`, `no`, `off`, `n`, `disabled`];
  _.case !== `sensitive` &&
    ((_ = _.map((_) => (typeof _ == `string` ? _.toLowerCase() : _))),
    (_ = _.map((_) => (typeof _ == `string` ? _.toLowerCase() : _))));
  let _ = new Set(_),
    _ = new Set(_),
    _ = _.Codec ?? _,
    _ = _.Boolean ?? _,
    _ = new _({
      type: `pipe`,
      _: new (_.String ?? _)({
        type: `string`,
        error: _.error,
      }),
      out: new _({
        type: `boolean`,
        error: _.error,
      }),
      transform: (_, _) => {
        let _ = _;
        return (
          _.case !== `sensitive` && (_ = _.toLowerCase()),
          _.has(_)
            ? !0
            : !_.has(_) &&
              (_.issues.push({
                code: `invalid_value`,
                expected: `stringbool`,
                values: [..._, ..._],
                input: _.value,
                inst: _,
                continue: !1,
              }),
              {})
        );
      },
      reverseTransform: (_, _) => (_ === !0 ? _[0] || `true` : _[0] || `false`),
      error: _.error,
    });
  return (
    (_._zod.bag.truthy = _),
    (_._zod.bag.falsy = _),
    (_._zod.bag.case = _.case ?? `insensitive`),
    _
  );
}
function _(_, ..._) {
  for (let _ of _)
    for (let _ of Reflect.ownKeys(_))
      Object.prototype.propertyIsEnumerable.call(_, _) && _(_, _, _[_]);
  return _;
}
function _(_) {
  let _ = _?.target ?? `draft-2020-12`;
  return (
    _ === `draft-4` && (_ = `draft-04`),
    _ === `draft-7` && (_ = `draft-07`),
    {
      processors: _.processors ?? {},
      metadataRegistry: _?.metadata ?? _,
      target: _,
      unrepresentable: _?.unrepresentable ?? `throw`,
      override: _?.override ?? (() => {}),
      _: _?._ ?? `output`,
      counter: 0,
      seen: new Map(),
      sharedDefsExtractedFor: void 0,
      sharedEmitDoneFor: void 0,
      cycles: _?.cycles ?? `ref`,
      reused: _?.reused ?? `inline`,
      intersections: [],
      deferred: [],
      external: _?.external ?? void 0,
    }
  );
}
function _(_, _, _, _, _) {
  let _ =
    typeof _.unrepresentable == `function`
      ? _.unrepresentable({
          zodSchema: _,
          path: _.path,
          message: _,
        })
      : _.unrepresentable;
  if (_ === `any`) return !1;
  if (_ === void 0 || _ === `throw`) throw Error(_);
  return (Object.assign(_, _), !0);
}
function _(
  _,
  _,
  _ = {
    path: [],
    schemaPath: [],
  },
) {
  var _;
  let _ = _._zod.def,
    _ = _.seen.get(_);
  if (_)
    return (
      _.count++, _.schemaPath.includes(_) && (_.cycle = _.path), _.schema
    );
  let _ = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: _.path,
  };
  (_.seen.set(_, _),
    (_.sharedDefsExtractedFor = void 0),
    (_.sharedEmitDoneFor = void 0));
  let _ = _._zod.toJSONSchema?.();
  if (_) _.schema = _;
  else {
    let _ = {
      ..._,
      schemaPath: [..._.schemaPath, _],
      path: _.path,
    };
    if (_._zod.processJSONSchema) _._zod.processJSONSchema(_, _.schema, _);
    else {
      let _ = _.schema,
        _ = _.processors[_.type];
      if (!_)
        throw Error(
          `[toJSONSchema]: Non-representable type encountered: ${_.type}`,
        );
      _(_, _, _, _);
    }
    let _ = _._zod.parent;
    _ && ((_.ref ||= _), _(_, _, _), (_.seen.get(_).isParent = !0));
  }
  let _ = _.metadataRegistry.get(_);
  return (
    _ && _(_.schema, _),
    _._ === `input` &&
      _(_) &&
      (delete _.schema.examples, delete _.schema.default),
    _._ === `input` &&
      `_prefault` in _.schema &&
      ((_ = _.schema).default ?? (_.default = _.schema._prefault)),
    delete _.schema._prefault,
    _.seen.get(_).schema
  );
}
function _(_) {
  return _.replace(/~/g, `~0`).replace(/\//g, `~1`);
}
function _(_, _) {
  let _ = _.seen.get(_);
  if (!_) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  if (_.external && _.sharedDefsExtractedFor === _.external) return;
  let _ = new Map();
  for (let _ of _.seen.entries()) {
    let _ = _.metadataRegistry.get(_[0])?._;
    if (_) {
      let _ = _.get(_);
      if (_ && _ !== _[0])
        throw Error(
          `Duplicate schema id "${_}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      _.set(_, _[0]);
    }
  }
  let _ = (_) => {
      let _ = _.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (_.external) {
        let _ = _.external.registry.get(_[0])?._,
          _ = _.external.uri ?? ((_) => _);
        if (_)
          return {
            ref: _(_),
          };
        let _ = _[1].defId ?? _[1].schema._ ?? `schema${_.counter++}`;
        return (
          (_[1].defId = _),
          {
            defId: _,
            ref: `${_(`__shared`)}#/${_}/${_(_)}`,
          }
        );
      }
      let _ = `#/${_}/`;
      if (_[1] === _ && !_[1].schema._)
        return {
          ref: `#`,
        };
      let _ = _[1].schema._ ?? `__schema${_.counter++}`;
      return {
        defId: _,
        ref: _ + _(_),
      };
    },
    _ = (_) => {
      if (_[1].schema.$ref) return;
      let _ = _[1],
        { ref: _, defId: _ } = _(_);
      ((_.def = {
        ..._.schema,
      }),
        _ && (_.defId = _));
      let _ = _.schema;
      for (let _ in _) delete _[_];
      _.$ref = _;
    };
  if (_.cycles === `throw`)
    for (let _ of _.seen.entries()) {
      let _ = _[1];
      if (_.cycle)
        throw Error(`Cycle detected: #/${_.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let _ of _.seen.entries()) {
    let _ = _[1];
    if (_ === _[0]) _(_);
    else {
      if (_.external) {
        let _ = _.external.registry.get(_[0])?._;
        if (_ !== _[0] && _) {
          _(_);
          continue;
        }
      }
      (_.metadataRegistry.get(_[0])?._ ||
        _.cycle ||
        (_.count > 1 && _.reused === `ref`)) &&
        _(_);
    }
  }
  _.external && (_.sharedDefsExtractedFor = _.external);
}
function _(_) {
  let _ = _.anyOf;
  if (!Array.isArray(_) || _.length === 0 || _.type !== void 0) return;
  let _ = [];
  for (let _ of _) {
    if (!_ || typeof _ != `object`) return;
    _(_);
    let _ = Object.keys(_);
    if (_.length !== 1 || _[0] !== `type`) return;
    let _ = _.type;
    for (let _ of Array.isArray(_) ? _ : [_]) {
      if (typeof _ != `string`) return;
      _.includes(_) || _.push(_);
    }
  }
  (delete _.anyOf, (_.type = _.length === 1 ? _[0] : _));
}
var _ = new Set([`type`, `properties`, `required`, `additionalProperties`]),
  _ = [`oneOf`, `anyOf`];
function _(_) {
  let _ = _.additionalProperties;
  return _ === void 0 || _ === !1 || typeof _ != `object` || !_
    ? null
    : Object.keys(_).length
      ? _
      : null;
}
function _(_) {
  let _ = [];
  for (let _ of _) {
    if (typeof _ != `object` || _.type !== `object`) return null;
    for (let _ in _) if (!_.has(_)) return null;
    _.push(_);
  }
  let _ = {},
    _ = new Set();
  for (let _ of _) {
    for (let _ in _.properties) {
      if (Object.prototype.hasOwnProperty.call(_, _)) continue;
      let _ = [];
      for (let _ of _) {
        let _ = _.properties?.[_] ?? _(_);
        _ != null &&
          (_.some((_) => JSON.stringify(_) === JSON.stringify(_)) || _.push(_));
      }
      _(
        _,
        _,
        _.length === 1
          ? _[0]
          : (_(_) ?? {
              allOf: _,
            }),
      );
    }
    for (let _ of _.required ?? []) _.add(_);
  }
  let _ = {
    type: `object`,
    properties: _,
  };
  if (
    (_.size && (_.required = [..._]),
    _.every((_) => _.additionalProperties === !1))
  )
    _.additionalProperties = !1;
  else {
    let _ = [];
    for (let _ of _) {
      let _ = _(_);
      _ && !_.some((_) => JSON.stringify(_) === JSON.stringify(_)) && _.push(_);
    }
    _.length === 1
      ? (_.additionalProperties = _[0])
      : _.length > 1 &&
        (_.additionalProperties = {
          allOf: _,
        });
  }
  return _;
}
function _(_) {
  let _ = _.allOf;
  if (!Array.isArray(_) || _.length < 2) return;
  for (let _ of _) if (_ in _) return;
  let _ = _.filter((_) => _.some((_) => Array.isArray(_[_]))),
    _ = null;
  if (!_.length) _ = _(_);
  else {
    let _ = _[0],
      _ = _.find((_) => Array.isArray(_[_]));
    if (Object.keys(_).length !== 1) return;
    let _ = _.filter((_) => _ !== _),
      _ = _[_].map((_) => _([..._, _]));
    if (_.some((_) => !_)) return;
    _ = {
      [_]: _,
    };
  }
  _ && (delete _.allOf, _(_, _));
}
function _(_, _) {
  let _ = _.seen.get(_);
  if (!_) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let _ = (_) => {
    let _ = _.seen.get(_);
    if (_.ref === null) return;
    let _ = _.def ?? _.schema,
      _ = {
        ..._,
      },
      _ = _.ref;
    if (((_.ref = null), _)) {
      _(_);
      let _ = _.seen.get(_),
        _ = _.schema;
      if (
        (_.$ref &&
        (_.target === `draft-07` ||
          _.target === `draft-04` ||
          _.target === `openapi-3.0`)
          ? ((_.allOf = _.allOf ?? []), _.allOf.push(_))
          : _(_, _),
        _(_, _),
        _._zod.parent === _)
      )
        for (let _ in _)
          _ !== `$ref` && _ !== `allOf` && (_ in _ || delete _[_]);
      if (_.$ref && _.def)
        for (let _ in _)
          _ !== `$ref` &&
            _ !== `allOf` &&
            _ in _.def &&
            JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
            delete _[_];
    }
    let _ = _._zod.parent;
    if (_ && _ !== _) {
      _(_);
      let _ = _.seen.get(_);
      if (_?.schema.$ref && ((_.$ref = _.schema.$ref), _.def))
        for (let _ in _)
          _ !== `$ref` &&
            _ !== `allOf` &&
            _ in _.def &&
            JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
            delete _[_];
    }
    _.override({
      zodSchema: _,
      jsonSchema: _,
      path: _.path ?? [],
    });
  };
  if (!_.external || _.sharedEmitDoneFor !== _.external) {
    for (let _ of [..._.seen.entries()].reverse()) _(_[0]);
    if (_.target !== `openapi-3.0`)
      for (let _ of _.seen.entries()) _(_[1].def ?? _[1].schema);
    for (let _ of _.deferred) _();
    if (_.intersections.length) {
      let _ = new Map();
      for (let _ of _.seen.values())
        for (let _ of [_.schema, _.def]) {
          let _ = _?.allOf;
          if (!Array.isArray(_)) continue;
          let _ = _.get(_);
          _ ? _.push(_) : _.set(_, [_]);
        }
      for (let _ of _.intersections) for (let _ of _.get(_) ?? []) _(_);
    }
  }
  let _ = {};
  if (
    (_.target === `draft-2020-12`
      ? (_.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : _.target === `draft-07`
        ? (_.$schema = `http://json-schema.org/draft-07/schema#`)
        : _.target === `draft-04`
          ? (_.$schema = `http://json-schema.org/draft-04/schema#`)
          : _.target,
    _.external?.uri)
  ) {
    let _ = _.external.registry.get(_)?._;
    if (!_) throw Error("Schema is missing an `id` property");
    _.$id = _.external.uri(_);
  }
  _(_, _.defId ? _.schema : (_.def ?? _.schema));
  let _ = _.metadataRegistry.get(_)?._;
  _ !== void 0 && _._ === _ && delete _._;
  let _ = _.external?.defs ?? {};
  if (!_.external || _.sharedEmitDoneFor !== _.external)
    for (let _ of _.seen.entries()) {
      let _ = _[1];
      _.def &&
        _.defId &&
        (_.def._ === _.defId && delete _.def._, _(_, _.defId, _.def));
    }
  (_.external && (_.sharedEmitDoneFor = _.external),
    _.external ||
      (Object.keys(_).length > 0 &&
        (_.target === `draft-2020-12` ? (_.$defs = _) : (_.definitions = _))));
  try {
    let _ = JSON.parse(JSON.stringify(_));
    return (
      Object.defineProperty(_, "~standard", {
        value: {
          ..._[`~standard`],
          jsonSchema: {
            input: _(_, `input`, _.processors),
            output: _(_, `output`, _.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      _
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function _(_, _) {
  let _ = _ ?? {
    seen: new Set(),
  };
  if (_.seen.has(_)) return !1;
  _.seen.add(_);
  let _ = _._zod.def;
  if (_.type === `transform`) return !0;
  if (_.type === `array`) return _(_.element, _);
  if (_.type === `set`) return _(_.valueType, _);
  if (_.type === `lazy`) return _(_.getter(), _);
  if (
    _.type === `promise` ||
    _.type === `optional` ||
    _.type === `nonoptional` ||
    _.type === `nullable` ||
    _.type === `readonly` ||
    _.type === "default" ||
    _.type === `prefault` ||
    _.type === `catch`
  )
    return _(_.innerType, _);
  if (_.type === `intersection`) return _(_.left, _) || _(_.right, _);
  if (_.type === `record` || _.type === `map`)
    return _(_.keyType, _) || _(_.valueType, _);
  if (_.type === `pipe`)
    return _._zod.traits.has(`$ZodCodec`) ? !0 : _(_._, _) || _(_.out, _);
  if (_.type === `object`) {
    for (let _ in _.shape) if (_(_.shape[_], _)) return !0;
    return !1;
  }
  if (_.type === `union`) {
    for (let _ of _.options) if (_(_, _)) return !0;
    return !1;
  }
  if (_.type === `tuple`) {
    for (let _ of _.items) if (_(_, _)) return !0;
    return !!(_.rest && _(_.rest, _));
  }
  return !1;
}
var _ =
    (_, _ = {}) =>
    (_) => {
      let _ = _({
        ..._,
        processors: _,
      });
      return (_(_, _), _(_, _), _(_, _));
    },
  _ =
    (_, _, _ = {}) =>
    (_) => {
      let { libraryOptions: _, target: _ } = _ ?? {},
        _ = _({
          ...(_ ?? {}),
          target: _,
          _: _,
          processors: _,
        });
      return (_(_, _), _(_, _), _(_, _));
    },
  _ = (_, _, _) => {
    (_[_] === void 0 || _ > _[_]) && (_[_] = _);
  },
  _ = (_, _, _) => {
    (_[_] === void 0 || _ < _[_]) && (_[_] = _);
  },
  _ = (_, _) => {
    (_(_, `minimum`, _), _(_, `maximum`, _));
  },
  _ = (_, _) => {
    ((_.multipleOf ??= []), _.multipleOf.includes(_) || _.multipleOf.push(_));
  },
  _ = (_, _) => {
    ((_.patterns ??= new Set()), _.patterns.add(_));
  },
  _ = (_, _) => {
    _.mime = _.mime ? _.mime.filter((_) => _.includes(_)) : [..._];
  },
  _ = (_, _) => {
    ((_.format = _), _.includes(`int`) && (_.isInt = !0));
  },
  _ = (_, _) => _(_, `minimum`, _.minimum),
  _ = (_, _) => _(_, `maximum`, _.maximum),
  _ = (_) => (_, _) => {
    _(_, _.format);
    let [_, _] = _[_.format];
    (_(_, `minimum`, _), _(_, `maximum`, _));
  },
  _ = {
    greater_than: (_, _) =>
      _(_, _.inclusive ? `minimum` : `exclusiveMinimum`, _.value),
    less_than: (_, _) =>
      _(_, _.inclusive ? `maximum` : `exclusiveMaximum`, _.value),
    multiple_of: (_, _) => _(_, _.value),
    number_format: _(_),
    bigint_format: _(_),
    min_length: _,
    max_length: _,
    length_equals: (_, _) => _(_, _.length),
    min_size: _,
    max_size: _,
    size_equals: (_, _) => _(_, _.size),
    string_format: (_, _) => {
      (_(_, _.format),
        _.pattern && _(_, _.pattern),
        (_.format === `base64` || _.format === `base64url`) &&
          (_.contentEncoding = _.format),
        (_.local || _.precision === -1) && (_.laxFormat = !0));
    },
    mime_type: (_, _) => _(_, _.mime),
  };
function _(_) {
  let _ = {},
    _ = _._zod.def,
    _ = _._zod.traits.has(`$ZodCheck`)
      ? [_, ...(_.checks ?? [])]
      : (_.checks ?? []);
  for (let _ of _) _[_._zod.def.check]?.(_, _._zod.def);
  let _ = _._zod.bag;
  (_.minimum !== void 0 && _(_, `minimum`, _.minimum),
    _.exclusiveMinimum !== void 0 &&
      _(_, `exclusiveMinimum`, _.exclusiveMinimum),
    _.maximum !== void 0 && _(_, `maximum`, _.maximum),
    _.exclusiveMaximum !== void 0 &&
      _(_, `exclusiveMaximum`, _.exclusiveMaximum),
    _.multipleOf !== void 0 && _(_, _.multipleOf),
    _.format !== void 0 &&
      ((_.format ??= _.format), _.format.includes(`int`) && (_.isInt = !0)),
    _.mime && _(_, _.mime));
  for (let _ of _.patterns ?? []) _(_, _);
  return _;
}
var _ = {
    guid: `uuid`,
    url: `uri`,
    datetime: `date-time`,
    json_string: `json-string`,
    regex: ``,
  },
  _ = new Map([
    [_, _],
    [_, _],
  ]),
  _ = (_) => _.get(_) ?? _,
  _ = (_, _, _, _) => {
    let _ = _;
    _.type = `string`;
    let {
      minimum: _,
      maximum: _,
      format: _,
      patterns: _,
      contentEncoding: _,
      laxFormat: _,
    } = _(_);
    if (
      (typeof _ == `number` && (_.minLength = _),
      typeof _ == `number` && (_.maxLength = _),
      _ &&
        ((_.format = _[_] ?? _),
        _.format === `` && delete _.format,
        (_ === `time` || _) && delete _.format),
      _ && (_.contentEncoding = _),
      _ && _.size > 0)
    ) {
      let _ = [..._].map(_);
      _.length === 1
        ? (_.pattern = _[0].source)
        : _.length > 1 &&
          (_.allOf = [
            ..._.map((_) => ({
              ...(_.target === `draft-07` ||
              _.target === `draft-04` ||
              _.target === `openapi-3.0`
                ? {
                    type: `string`,
                  }
                : {}),
              pattern: _.source,
            })),
          ]);
    }
  },
  _ = (_, _, _, _) => {
    let _ = _,
      {
        minimum: _,
        maximum: _,
        multipleOf: _,
        exclusiveMaximum: _,
        exclusiveMinimum: _,
        isInt: _,
      } = _(_);
    _.type = _ ? `integer` : `number`;
    let _ = typeof _ == `number` && _ >= (_ ?? -1 / 0),
      _ = typeof _ == `number` && _ <= (_ ?? 1 / 0),
      _ = _.target === `draft-04` || _.target === `openapi-3.0`;
    if (
      (_
        ? _
          ? ((_.minimum = _), (_.exclusiveMinimum = !0))
          : (_.exclusiveMinimum = _)
        : typeof _ == `number` && (_.minimum = _),
      _
        ? _
          ? ((_.maximum = _), (_.exclusiveMaximum = !0))
          : (_.exclusiveMaximum = _)
        : typeof _ == `number` && (_.maximum = _),
      _)
    ) {
      let _ = new Set();
      for (let _ of _)
        Number.isFinite(_) && _ !== 0
          ? _.add(Math.abs(_))
          : _(
              _,
              _,
              _,
              _,
              `A multipleOf divisor of ${_} cannot be represented in JSON Schema`,
            );
      let [_, ..._] = _;
      (_ !== void 0 && (_.multipleOf = _),
        _.length &&
          (_.allOf = [
            ...(_.allOf ?? []),
            ..._.map((_) => ({
              multipleOf: _,
            })),
          ]));
    }
  },
  _ = (_, _, _, _) => {
    _.type = `boolean`;
  },
  _ = (_, _, _, _) => {
    _.not = {};
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def,
      _ = _(_.entries);
    _.length === 0
      ? (_.not = {})
      : (_.every((_) => typeof _ == `number`) && (_.type = `number`),
        _.every((_) => typeof _ == `string`) && (_.type = `string`),
        (_.enum = _));
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    if (_.values.length === 0) {
      _.not = {};
      return;
    }
    let _ = [];
    for (let _ of _.values)
      if (_ === void 0) {
        if (
          _(
            _,
            _,
            _,
            _,
            "Literal `undefined` cannot be represented in JSON Schema",
          )
        )
          return;
      } else if (typeof _ == `bigint`) {
        if (
          _(_, _, _, _, `BigInt literals cannot be represented in JSON Schema`)
        )
          return;
        _.push(Number(_));
      } else _.push(_);
    if (_.length !== 0) {
      if (_.length === 1) {
        let _ = _[0];
        ((_.type = _ === null ? `null` : typeof _),
          _.target === `draft-04` || _.target === `openapi-3.0`
            ? (_.enum = [_])
            : (_.const = _));
      } else
        (_.every((_) => typeof _ == `number`) && (_.type = `number`),
          _.every((_) => typeof _ == `string`) && (_.type = `string`),
          _.every((_) => typeof _ == `boolean`) && (_.type = `boolean`),
          _.every((_) => _ === null) && (_.type = `null`),
          (_.enum = _));
    }
  },
  _ = (_, _, _, _) => {
    _(_, _, _, _, `Custom types cannot be represented in JSON Schema`);
  },
  _ = (_, _, _, _) => {
    _(_, _, _, _, `Transforms cannot be represented in JSON Schema`);
  },
  _ = (_, _, _, _) => {
    let _ = _,
      _ = _._zod.def,
      { minimum: _, maximum: _ } = _(_);
    (typeof _ == `number` && (_.minItems = _),
      typeof _ == `number` && (_.maxItems = _),
      (_.type = `array`),
      (_.items = _(_.element, _, {
        ..._,
        path: [..._.path, `items`],
      })));
  };
function _(_) {
  let _ = _._zod.def;
  return _.type === `pipe` && _._._zod.traits.has(`$ZodTransform`)
    ? _(_.out)
    : _.type === `catch`
      ? _(_.innerType)
      : _._zod.optin;
}
var _ = (_, _, _, _) => {
    let _ = _,
      _ = _._zod.def,
      _ = _.shape;
    if (
      Object.getOwnPropertySymbols(_).length &&
      _(_, _, _, _, `Symbol keys cannot be represented in JSON Schema`)
    )
      return;
    ((_.type = `object`), (_.properties = {}));
    for (let _ in _)
      _(
        _.properties,
        _,
        _(_[_], _, {
          ..._,
          path: [..._.path, `properties`, _],
        }),
      );
    let _ = [];
    for (let _ of Object.keys(_)) {
      let _ = _.shape[_];
      (_._ === `input` ? _(_) === void 0 : _._zod.optout === void 0) &&
        _.push(_);
    }
    (_.length > 0 && (_.required = _),
      _.catchall?._zod.def.type === `never`
        ? (_.additionalProperties = !1)
        : _.catchall
          ? _.catchall &&
            (_.additionalProperties = _(_.catchall, _, {
              ..._,
              path: [..._.path, `additionalProperties`],
            }))
          : _._ === `output` && (_.additionalProperties = !1));
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def,
      _ = _.inclusive === !1,
      _ = _.options.map((_, _) =>
        _(_, _, {
          ..._,
          path: [..._.path, _ ? `oneOf` : `anyOf`, _],
        }),
      );
    _ ? (_.oneOf = _) : (_.anyOf = _);
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def,
      _ = _(_.left, _, {
        ..._,
        path: [..._.path, `allOf`, 0],
      }),
      _ = _(_.right, _, {
        ..._,
        path: [..._.path, `allOf`, 1],
      }),
      _ = (_) => `allOf` in _ && Object.keys(_).length === 1,
      _ = [...(_(_) ? _.allOf : [_]), ...(_(_) ? _.allOf : [_])];
    ((_.allOf = _), _.intersections.push(_));
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def,
      _ = _(_.innerType, _, _),
      _ = _.seen.get(_);
    _.target === `openapi-3.0`
      ? ((_.ref = _.innerType), (_.nullable = !0))
      : (_.anyOf = [
          _,
          {
            type: `null`,
          },
        ]);
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    _.ref = _.innerType;
  },
  _ = Symbol();
function _(_, _, _, _, _) {
  let _ = !1,
    _ = JSON.stringify(_, (_, _) =>
      typeof _ == `bigint` ? ((_ = !0), null) : _,
    );
  return _
    ? (_(_, _, _, _, `BigInt defaults cannot be represented in JSON Schema`), _)
    : JSON.parse(_);
}
var _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    _.ref = _.innerType;
    let _ = _(_.defaultValue, _, _, _, _);
    _ !== _ && (_.default = _);
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    if (((_.ref = _.innerType), _._ !== `input`)) return;
    let _ = _(_.defaultValue, _, _, _, _);
    _ !== _ && (_._prefault = _);
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    _.ref = _.innerType;
    let _;
    try {
      _ = _.catchValue(void 0);
    } catch {
      _(_, _, _, _, `Dynamic catch values are not supported in JSON Schema`);
      return;
    }
    _.default = _;
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def,
      _ = _._._zod.traits.has(`$ZodTransform`),
      _ = _._ === `input` ? (_ ? _.out : _._) : _.out;
    _(_, _, _);
    let _ = _.seen.get(_);
    _.ref = _;
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    ((_.ref = _.innerType), (_.readOnly = !0));
  },
  _ = (_, _, _, _) => {
    let _ = _._zod.def;
    _(_.innerType, _, _);
    let _ = _.seen.get(_);
    _.ref = _.innerType;
  },
  _ = new WeakSet([Object.prototype, Error.prototype]);
function _(_, _, _) {
  Object.defineProperty(_, _, {
    configurable: !0,
    enumerable: !1,
    get() {
      let _ = _(this);
      return (
        Object.defineProperty(this, _, {
          value: _,
          configurable: !0,
          writable: !0,
        }),
        _
      );
    },
    set(_) {
      Object.defineProperty(this, _, {
        value: _,
        configurable: !0,
        writable: !0,
      });
    },
  });
}
var _ = _(
    `ZodError`,
    (_, _) => {
      (_.init(_, _), (_.name = `ZodError`));
      let _ = Object.getPrototypeOf(_);
      _.has(_) ||
        (_.add(_),
        _(_, `format`, (_) => (_) => _(_, _)),
        _(_, `flatten`, (_) => (_) => _(_, _)),
        _(_, `addIssue`, (_) => (_) => {
          (_.issues.push(_), (_.message = JSON.stringify(_.issues, _, 2)));
        }),
        _(_, `addIssues`, (_) => (_) => {
          (_.issues.push(..._), (_.message = JSON.stringify(_.issues, _, 2)));
        }),
        Object.defineProperty(_, "isEmpty", {
          configurable: !0,
          enumerable: !1,
          get() {
            return this.issues.length === 0;
          },
        }));
    },
    void 0,
    {
      Parent: Error,
    },
  ),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_),
  _ = _(_);
function _() {
  _.localeError || _(_());
}
function _() {
  _.memoizer ||
    _({
      memoizer: _(),
    });
}
var _ = _(
    `ZodType`,
    (_, _) => (_(), _.init(_, _), (_.def = _), (_.type = _.type), _),
    {
      check(..._) {
        let _ = this.def;
        return this.clone(
          _(_, {
            checks: [
              ...(_.checks ?? []),
              ..._.map((_) =>
                typeof _ == `function`
                  ? {
                      _zod: {
                        check: _,
                        def: {
                          check: `custom`,
                        },
                        onattach: [],
                      },
                    }
                  : _,
              ),
            ],
          }),
          {
            parent: !0,
          },
        );
      },
      with(..._) {
        return this.check(..._);
      },
      clone(_, _) {
        return _(this, _, _);
      },
      brand() {
        return this;
      },
      register(_, _) {
        return (_.add(this, _), this);
      },
      refine(_, _) {
        return this.check(_(_, _));
      },
      superRefine(_, _) {
        return this.check(_(_, _));
      },
      overwrite(_) {
        return this.check(_(_));
      },
      optional() {
        return _(this);
      },
      exactOptional() {
        return _(this);
      },
      nullable() {
        return _(this);
      },
      nullish() {
        return _(_(this));
      },
      nonoptional(_) {
        return _(this, _);
      },
      array() {
        return _(this);
      },
      _(_) {
        return _([this, _]);
      },
      and(_) {
        return _(this, _);
      },
      transform(_) {
        return _(this, _(_));
      },
      default(_) {
        return _(this, _);
      },
      prefault(_) {
        return _(this, _);
      },
      catch(_) {
        return _(this, _);
      },
      pipe(_) {
        return _(this, _);
      },
      readonly() {
        return _(this);
      },
      describe(_) {
        let _ = this.clone();
        return (
          _.add(_, {
            description: _,
          }),
          _
        );
      },
      meta(..._) {
        if (_.length === 0) return _.get(this);
        let _ = this.clone();
        return (_.add(_, _[0]), _);
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(_, ..._) {
        return _.length === 0 ? _(this) : _(this, ..._);
      },
      get "~standard"() {
        return _(this, `~standard`, {
          ..._(this),
          jsonSchema: {
            input: _(this, `input`),
            output: _(this, `output`),
          },
        });
      },
      set "~standard"(_) {
        _(this, `~standard`, _);
      },
      parse: function _(_, _) {
        return _(this, _, _, {
          callee: _,
        });
      },
      parseAsync: async function _(_, _) {
        return await _(this, _, _, {
          callee: _,
        });
      },
      safeParse(_, _) {
        return _(this, _, _);
      },
      async safeParseAsync(_, _) {
        return _(this, _, _);
      },
      get spa() {
        return this?.safeParseAsync;
      },
      set spa(_) {
        _(this, `spa`, _);
      },
      validate(_, _) {
        return _(this, _, _);
      },
      validateAsync(_, _) {
        return _(this, _, _);
      },
      encode: function _(_, _) {
        return _(this, _, _, {
          callee: _,
        });
      },
      decode: function _(_, _) {
        return _(this, _, _, {
          callee: _,
        });
      },
      encodeAsync: async function _(_, _) {
        return await _(this, _, _, {
          callee: _,
        });
      },
      decodeAsync: async function _(_, _) {
        return await _(this, _, _, {
          callee: _,
        });
      },
      safeEncode(_, _) {
        return _(this, _, _);
      },
      safeDecode(_, _) {
        return _(this, _, _);
      },
      async safeEncodeAsync(_, _) {
        return _(this, _, _);
      },
      async safeDecodeAsync(_, _) {
        return _(this, _, _);
      },
      toJSONSchema(_) {
        return _(this, {})(_);
      },
      get description() {
        return _.get(this)?.description;
      },
      get _def() {
        return this._zod.def;
      },
    },
  ),
  _ = _(
    `_ZodString`,
    (_, _) => {
      (_.init(_, _),
        _.init(_, _),
        (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)));
    },
    _(
      {
        format: (_) => _(_).format ?? null,
        minLength: (_) => _(_).minimum ?? null,
        maxLength: (_) => _(_).maximum ?? null,
      },
      {
        regex(..._) {
          return this.check(_(..._));
        },
        includes(..._) {
          return this.check(_(..._));
        },
        startsWith(..._) {
          return this.check(_(..._));
        },
        endsWith(..._) {
          return this.check(_(..._));
        },
        min(..._) {
          return this.check(_(..._));
        },
        max(..._) {
          return this.check(_(..._));
        },
        length(..._) {
          return this.check(_(..._));
        },
        nonempty(..._) {
          return this.check(_(1, ..._));
        },
        lowercase(_) {
          return this.check(_(_));
        },
        uppercase(_) {
          return this.check(_(_));
        },
        trim() {
          return this.check(_());
        },
        normalize(..._) {
          return this.check(_(..._));
        },
        toLowerCase() {
          return this.check(_());
        },
        toUpperCase() {
          return this.check(_());
        },
        slugify() {
          return this.check(_());
        },
      },
    ),
  ),
  _ = _(
    `ZodString`,
    (_, _) => {
      (_.init(_, _), _.init(_, _));
    },
    {
      email(_) {
        return this.check(_(_, _));
      },
      url(_) {
        return this.check(_(_, _));
      },
      jwt(_) {
        return this.check(_(_, _));
      },
      emoji(_) {
        return this.check(_(_, _));
      },
      guid(_) {
        return this.check(_(_, _));
      },
      uuid(_) {
        return this.check(_(_, _));
      },
      uuidv4(_) {
        return this.check(_(_, _));
      },
      uuidv6(_) {
        return this.check(_(_, _));
      },
      uuidv7(_) {
        return this.check(_(_, _));
      },
      nanoid(_) {
        return this.check(_(_, _));
      },
      cuid(_) {
        return this.check(_(_, _));
      },
      cuid2(_) {
        return this.check(_(_, _));
      },
      ulid(_) {
        return this.check(_(_, _));
      },
      base64(_) {
        return this.check(_(_, _));
      },
      base64url(_) {
        return this.check(_(_, _));
      },
      xid(_) {
        return this.check(_(_, _));
      },
      ksuid(_) {
        return this.check(_(_, _));
      },
      ipv4(_) {
        return this.check(_(_, _));
      },
      ipv6(_) {
        return this.check(_(_, _));
      },
      cidrv4(_) {
        return this.check(_(_, _));
      },
      cidrv6(_) {
        return this.check(_(_, _));
      },
      e164(_) {
        return this.check(_(_, _));
      },
      datetime(_) {
        return this.check(_(_, _));
      },
      date(_) {
        return this.check(_(_, _));
      },
      time(_) {
        return this.check(_(_, _));
      },
      duration(_) {
        return this.check(_(_, _));
      },
    },
  );
function _(_) {
  return _(_, _);
}
var _ = _(`ZodStringFormat`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodISODateTime`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodISODate`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodISOTime`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodISODuration`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodEmail`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodGUID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodUUID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodURL`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodEmoji`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodNanoID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodCUID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodCUID2`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodULID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodXID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodKSUID`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodIPv4`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodIPv6`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodCIDRv4`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodCIDRv6`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodBase64`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodBase64URL`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodE164`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(`ZodJWT`, (_, _) => {
    (_.init(_, _), _.init(_, _));
  }),
  _ = _(
    `ZodNumber`,
    (_, _) => {
      (_.init(_, _),
        _.init(_, _),
        (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
        (_.isFinite = !0));
    },
    _(
      {
        minValue: (_) => {
          let { minimum: _, exclusiveMinimum: _ } = _(_);
          return Math.max(_ ?? -1 / 0, _ ?? -1 / 0);
        },
        maxValue: (_) => {
          let { maximum: _, exclusiveMaximum: _ } = _(_);
          return Math.min(_ ?? 1 / 0, _ ?? 1 / 0);
        },
        isInt: (_) => {
          let { isInt: _, multipleOf: _ } = _(_);
          return !!_ || !!_?.some(Number.isSafeInteger);
        },
        format: (_) => _(_).format ?? null,
      },
      {
        _(_, _) {
          return this.check(_(_, _));
        },
        gte(_, _) {
          return this.check(_(_, _));
        },
        min(_, _) {
          return this.check(_(_, _));
        },
        _(_, _) {
          return this.check(_(_, _));
        },
        lte(_, _) {
          return this.check(_(_, _));
        },
        max(_, _) {
          return this.check(_(_, _));
        },
        int(_) {
          return this.check(_(_));
        },
        safe(_) {
          return this.check(_(_));
        },
        positive(_) {
          return this.check(_(0, _));
        },
        nonnegative(_) {
          return this.check(_(0, _));
        },
        negative(_) {
          return this.check(_(0, _));
        },
        nonpositive(_) {
          return this.check(_(0, _));
        },
        multipleOf(_, _) {
          return this.check(_(_, _));
        },
        step(_, _) {
          return this.check(_(_, _));
        },
        finite() {
          return this;
        },
      },
    ),
  );
function _(_) {
  return _(_, _);
}
var _ = _(`ZodNumberFormat`, (_, _) => {
  (_.init(_, _), _.init(_, _));
});
function _(_) {
  return _(_, _);
}
var _ = _(`ZodBoolean`, (_, _) => {
    (_.init(_, _),
      _.init(_, _),
      (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)));
  }),
  _ = _(`ZodUnknown`, (_, _) => {
    (_.init(_, _),
      _.init(_, _),
      (_._zod.processJSONSchema = (_, _, _) => void 0));
  });
function _() {
  return _(_);
}
var _ = _(`ZodNever`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)));
});
function _(_) {
  return _(_, _);
}
var _ = _(
  `ZodArray`,
  (_, _) => {
    (_(),
      _.init(_, _),
      _.init(_, _),
      (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
      (_.element = _.element));
  },
  {
    min(_, _) {
      return this.check(_(_, _));
    },
    nonempty(_) {
      return this.check(_(1, _));
    },
    max(_, _) {
      return this.check(_(_, _));
    },
    length(_, _) {
      return this.check(_(_, _));
    },
    unwrap() {
      return this.element;
    },
  },
);
function _(_, _) {
  return _(_, _, _);
}
var _ = _(
  `ZodObject`,
  (_, _) => {
    (_(),
      _.init(_, _),
      _.init(_, _),
      (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
      _(_, `shape`, (_) => _._zod.def.shape, !1));
  },
  {
    keyof() {
      return _(Object.keys(this._zod.def.shape));
    },
    catchall(_) {
      return this.clone(
        _(this._zod.def, {
          catchall: _,
        }),
      );
    },
    passthrough() {
      return this.clone(
        _(this._zod.def, {
          catchall: _(),
        }),
      );
    },
    loose() {
      return this.clone(
        _(this._zod.def, {
          catchall: _(),
        }),
      );
    },
    strict() {
      return this.clone(
        _(this._zod.def, {
          catchall: _(),
        }),
      );
    },
    strip() {
      return this.clone(
        _(this._zod.def, {
          catchall: void 0,
        }),
      );
    },
    extend(_) {
      return _(this, _);
    },
    safeExtend(_) {
      return _(this, _);
    },
    merge(_) {
      return _(this, _);
    },
    pick(_) {
      return _(this, _);
    },
    omit(_) {
      return _(this, _);
    },
    partial(..._) {
      return _(_, this, _[0]);
    },
    exactPartial(..._) {
      return _(_, this, _[0], `exactPartial`);
    },
    required(..._) {
      return _(_, this, _[0]);
    },
  },
);
function _(_, _) {
  return new _({
    type: `object`,
    shape: _ ?? {},
    ..._(_),
  });
}
var _ = _(`ZodUnion`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.options = _.options));
});
function _(_, _) {
  return new _({
    type: `union`,
    options: _,
    ..._(_),
  });
}
var _ = _(`ZodIntersection`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)));
});
function _(_, _) {
  return new _({
    type: `intersection`,
    left: _,
    right: _,
  });
}
var _ = _(`ZodEnum`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.enum = _.entries),
    (_.options = [..._._zod.values]));
  let _ = new Set(Object.keys(_.entries));
  ((_.extract = (_, _) => {
    let _ = {};
    for (let _ of _)
      if (_.has(_)) _[_] = _.entries[_];
      else throw Error(`Key ${_} not found in enum`);
    return new _({
      ..._,
      checks: [],
      ..._(_),
      entries: _,
    });
  }),
    (_.exclude = (_, _) => {
      let _ = {
        ..._.entries,
      };
      for (let _ of _)
        if (_.has(_)) delete _[_];
        else throw Error(`Key ${_} not found in enum`);
      return new _({
        ..._,
        checks: [],
        ..._(_),
        entries: _,
      });
    }));
});
function _(_, _) {
  return new _({
    type: `enum`,
    entries: Array.isArray(_) ? Object.fromEntries(_.map((_) => [_, _])) : _,
    ..._(_),
  });
}
var _ = _(`ZodLiteral`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.values = new Set(_.values)),
    Object.defineProperty(_, "value", {
      get() {
        if (_.values.length > 1)
          throw Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return _.values[0];
      },
    }));
});
function _(_, _) {
  return new _({
    type: `literal`,
    values: Array.isArray(_) ? _ : [_],
    ..._(_),
  });
}
var _ = _(`ZodTransform`, (_, _) => {
  (_(),
    _.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_._zod.parse = (_, _) => {
      if (_.direction === `backward`) throw new _(_.constructor.name);
      _.addIssue = (_) => {
        if (typeof _ == `string`) _.issues.push(_(_, _.value, _));
        else {
          let _ = _;
          (_.fatal && (_.continue = !1),
            (_.code ??= `custom`),
            `input` in _ || (_.input = _.value),
            (_.inst ??= _),
            _.issues.push(_(_)));
        }
      };
      let _ = _.transform(_.value, _);
      return _ instanceof Promise
        ? _.then((_) => ((_.value = _), _))
        : ((_.value = _), _);
    }));
});
function _(_) {
  return new _({
    type: `transform`,
    transform: _,
  });
}
var _ = _(`ZodOptional`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_) {
  return new _({
    type: `optional`,
    innerType: _,
  });
}
var _ = _(`ZodExactOptional`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_) {
  return new _({
    type: `optional`,
    innerType: _,
  });
}
var _ = _(`ZodNullable`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_) {
  return new _({
    type: `nullable`,
    innerType: _,
  });
}
var _ = _(`ZodDefault`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType),
    (_.removeDefault = _.unwrap));
});
function _(_, _) {
  return new _({
    type: `default`,
    innerType: _,
    get defaultValue() {
      return typeof _ == `function` ? _() : _(_);
    },
  });
}
var _ = _(`ZodPrefault`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_, _) {
  return new _({
    type: `prefault`,
    innerType: _,
    get defaultValue() {
      return typeof _ == `function` ? _() : _(_);
    },
  });
}
var _ = _(`ZodNonOptional`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_, _) {
  return new _({
    type: `nonoptional`,
    innerType: _,
    ..._(_),
  });
}
var _ = _(`ZodCatch`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType),
    (_.removeCatch = _.unwrap));
});
function _(_, _) {
  return new _({
    type: `catch`,
    innerType: _,
    catchValue: typeof _ == `function` ? _ : _(_),
  });
}
var _ = _(`ZodPipe`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_._ = _._),
    (_.out = _.out));
});
function _(_, _) {
  return new _({
    type: `pipe`,
    _: _,
    out: _,
  });
}
var _ = _(`ZodCodec`, (_, _) => {
  (_.init(_, _), _.init(_, _));
});
function _(_, _, _) {
  return new _({
    type: `pipe`,
    _: _,
    out: _,
    transform: _.decode,
    reverseTransform: _.encode,
  });
}
var _ = _(`ZodReadonly`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
    (_.unwrap = () => _._zod.def.innerType));
});
function _(_) {
  return new _({
    type: `readonly`,
    innerType: _,
  });
}
var _ = _(`ZodCustom`, (_, _) => {
  (_.init(_, _),
    _.init(_, _),
    (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)));
});
function _(_, _ = {}) {
  return _(_, _, _);
}
function _(_, _) {
  return _(_, _);
}
var _ = (..._) =>
  _(
    {
      Codec: _,
      Boolean: _,
      String: _,
    },
    ..._,
  );
function _(_) {
  return _(_, _);
}
var _ = _(_()),
  _ = _(),
  _ = {
    "es-419": `es`,
    "pt-br": `pt`,
    "zh-cn": `zhCN`,
    "zh-tw": `zhTW`,
  };
async function _() {
  let _ = _(),
    _ = _[_ in _ ? _[_] : _];
  _(_());
}
await _();
var _ = (function (_) {
    return (
      (_[(_.Client = 0)] = `Client`),
      (_[(_.GameServer = 1)] = `GameServer`),
      (_[(_.OfficialGameServer = 2)] = `OfficialGameServer`),
      _
    );
  })({}),
  _ = [`Client`, `GameServer`, `OfficialGameServer`];
function _(_) {
  return `${_.statID}.${_.bitID}`;
}
function _(_) {
  return _[1].type === `ACHIEVEMENTS`;
}
function _(_) {
  return _[1].type !== `ACHIEVEMENTS`;
}
var _ = (0, _.createContext)(null);
function _() {
  return (0, _.useContext)(_);
}
var _ = `Stats`,
  _ = `StatSchema`;
function _(_, _ = !1) {
  return _({
    queryKey: [_, _, _, _],
    queryFn: async () => {
      let _ = _
          ? {
              version: `live`,
            }
          : {},
        _ = `${_.PARTNER_BASE_URL}achievements/ajaxgetstatsschema/${_}`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
        });
      if (_?.data?.success == 1) return _.data;
      throw Error(
        `failed to load ${_ ? `live` : `draft`} stat schema for app id ${_}`,
      );
    },
  });
}
function _(_, _ = !1) {
  let _ = _(_, _);
  return _.isLoading ? null : _.data?.schema;
}
function _(_) {
  let _ = _(_);
  return _.isLoading ? void 0 : _.data?.limits;
}
function _(_) {
  let _ = _(_);
  return Object.keys(_ ?? {}).length + 1;
}
function _(_) {
  let _ = _(_),
    _ = _(_);
  return !_ || _ < _.max_groups;
}
function _(_, _ = !1) {
  return _(_, _)?.groups;
}
function _(_, _, _ = !1) {
  return _(_, _)?.[_];
}
function _(_) {
  let _ = _(_);
  return _
    ? Object.keys(_)
        .map((_) => ({
          groupid: _,
          sortid: _().default(0).parse(_[_].order),
          ..._[_],
        }))
        .sort((_, _) => _.sortid - _.sortid)
        .map((_) => _)
    : [];
}
function _(_, _ = !1) {
  let _ = _(_, _);
  return _?.stats
    ? Object.entries(_.stats)
        .filter(_)
        .map(([_, _]) => ({
          ..._,
          statID: _,
        }))
    : void 0;
}
function _(_, _ = !1) {
  let _ = _(_, _);
  return _?.stats
    ? Object.entries(_.stats)
        .filter(_)
        .flatMap(([_, _]) =>
          Object.entries(_.bits).map(([_, _]) => ({
            ..._,
            statID: _,
            bitID: _,
          })),
        )
    : void 0;
}
function _(_, _, _ = !1) {
  let _ = _(_, _);
  return _?.stats
    ? Object.entries(_.stats)
        .filter(_)
        .flatMap(([_, _]) =>
          Object.entries(_.bits)
            .filter(([_, _]) => (!_ && !_.groupid) || _ === _.groupid)
            .map(([_, _]) => ({
              ..._,
              statID: _,
              bitID: _,
            })),
        )
    : void 0;
}
var _ = `AppLanguageList`;
function _(_) {
  let _ = _({
    queryKey: [_, _, _],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}achievements/ajaxgetlanguagelist/${_}`,
        _ = await _.default.get(_, {
          withCredentials: !0,
        });
      if (_?.data?.success == 1)
        return _.data.languages.sort((_, _) => _.localeCompare(_));
      throw Error(`failed to load language list for app id ${_}`);
    },
  });
  return _.isLoading ? [`english`] : _.data;
}
async function _(_, _) {
  let _ = `${_.PARTNER_BASE_URL}achievements/ajaxsetlanguagelist/${_}`,
    _ = new FormData();
  return (
    _.append(`languages`, JSON.stringify(_)),
    await _(`updateLanguageList`, _, _),
    !0
  );
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _),
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _],
      });
    },
  });
}
var _ = `AppLanguageOptionsList`;
function _(_) {
  let _ = _({
    queryKey: [_, _, _],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}achievements/ajaxgetlanguageoptionslist/${_}`,
        _ = await _.default.get(_, {
          withCredentials: !0,
        });
      if (_?.data?.success == 1)
        return _.data.languages.sort((_, _) => _.localeCompare(_));
      throw Error(`failed to load language options list for app id ${_}`);
    },
  });
  return _.isLoading ? [`english`] : _.data;
}
var _ = `AppDLCList`;
function _(_) {
  let _ = _(_);
  return _.isLoading ? [] : _.data;
}
function _(_) {
  return _({
    queryKey: [_, _, _],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}achievements/ajaxgetdlc/${_}`,
        _ = await _.default.get(_, {
          withCredentials: !0,
        });
      if (_?.data?.success == 1) return _.data.dlc;
      throw Error(`failed to load dlc for app id ${_}`);
    },
  });
}
var _ = `AppInfo`;
function _(_) {
  let _ = _({
    queryKey: [_, _, _],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}achievements/ajaxgetappinfo/${_}`,
        _ = await _.default.get(_, {
          withCredentials: !0,
        });
      if (_?.data?.success == 1) return _.data.app;
      if (_?.data?.success == 9)
        return {
          appid: _.toString(),
          type: `Game`,
          releasestate: `unavailable`,
          name: ``,
          is_public: !1,
          is_released_somewhere: !1,
          image: ``,
        };
      throw Error(`failed to load app info for app id ${_}`);
    },
  });
  return _.isLoading ? null : _.data;
}
function _(_, _) {
  let { strErrorMsg: _, errorCode: _ } = _(_);
  console.error(`${_} failed: `, _, _, _);
  let _ = _,
    _ = _?.response?.data?.error ?? _?.data?.error;
  return Error(
    _ == 25 && _
      ? _
      : _(
          _ == 14
            ? `#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate`
            : `#AchievementEditor_Error_RequestFailed`,
        ),
  );
}
async function _(_, _, _) {
  let _;
  try {
    _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
  } catch (_) {
    throw _(_, _);
  }
  if (_?.data?.success != 1) throw _(_, _);
  return _.data;
}
async function _(_, _, _) {
  let _ = `${_.PARTNER_BASE_URL}achievements/ajaxcreateorupdategroup/${_}`,
    _ = new FormData();
  return (
    _.append(`groupid`, _),
    _.append(`name`, JSON.stringify(_.name)),
    _.dlcappid && _.append(`requiredappid`, _.dlcappid),
    _.append(`isarchived`, _.archived == `1` ? `true` : `false`),
    _.append(`isdeveloperonly`, _.developeronly == `1` ? `true` : `false`),
    _.append(`order`, _.order ?? `-1`),
    (await _(`addOrUpdateStatGroup`, _, _)).groupid
  );
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _, _),
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      let { groups: _, onProgress: _ } = _;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        (_?.({
          step: `group`,
          name: _.groupid,
          completed: _,
          total: _.length,
        }),
          await _(_, _.groupid, _.group));
      }
      return !0;
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}achievements/ajaxdeletegroup/${_}`,
        _ = new FormData();
      return (
        _.append(`appid`, _.toString()),
        _.append(`groupid`, _),
        await _(`deleteStatGroup`, _, _),
        !0
      );
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
async function _(_, _) {
  let _ = new FormData();
  return (
    _.append(`appid`, _.toString()),
    _.append(`groupids`, JSON.stringify(_)),
    await _(
      `reorderGroups`,
      `${_.PARTNER_BASE_URL}achievements/ajaxreordergroups/${_}`,
      _,
    ),
    !0
  );
}
function _(_) {
  _(_);
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _),
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
async function _(_, _, _) {
  let _ = new FormData();
  return (
    _.append(`appid`, _.toString()),
    _.append(`groupid`, (_ ?? 0).toString()),
    _.append(`names`, JSON.stringify(_)),
    await _(
      `moveAchievementsGroup`,
      `${_.PARTNER_BASE_URL}achievements/ajaxmoveachievements/${_}`,
      _,
    ),
    !0
  );
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      let { groupid: _, api_names: _ } = _;
      return await _(_, _, _);
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
async function _(_, _, _, _, _) {
  let [_, _, _] = _.match(/data:(image\/\w+);base64,(.*)/),
    _ = _.Buffer.from(_, `base64`),
    _ = _ === `image/png` ? `png` : `jpg`,
    _ = `${_.toString()}_${_}_${_}_${_ == `achievement` ? `a` : `g`}.${_}`,
    _ = new File([_], _, {
      type: _,
    }),
    _ = new FormData();
  (_.append(`appID`, _.toString()),
    _.append(`statID`, _),
    _.append(`bit`, _),
    _.append(`requestType`, _.toString()),
    _.append(`image`, _),
    await _(
      `AchievementImageUpload`,
      `${_.PARTNER_BASE_URL}images/uploadachievement`,
      _,
    ));
}
function _(_) {
  return !!_ && _.startsWith(`data:`);
}
async function _(_, _, _, _, _, _) {
  (_(_) && (_?.(`icon`), await _(_, _, _, `achievement`, _)),
    _(_) && (_?.(`icon_gray`), await _(_, _, _, `achievement_gray`, _)));
}
function _(_) {
  return +!!_.achievement + +!!_(_.icon) + +!!_(_.icon_gray);
}
async function _(_, _, _) {
  let { statID: _, bitID: _, achievement: _, icon: _, icon_gray: _ } = _;
  if (!_ && _ && _)
    return (
      await _(_, _, _, _, _, _),
      {
        success: 1,
        statid: _,
        bitid: _,
      }
    );
  let _ = new FormData();
  (_ && _.append(`statid`, _),
    _ && _.append(`bitid`, _),
    _.groupid && _.append(`groupid`, _.groupid),
    _.append(`name`, _.name),
    _.progress &&
      (_.append(`progressstat`, _.progress.value.operand1),
      _.append(`progressmin`, _.progress.min_val),
      _.append(`progressmax`, _.progress.max_val)),
    _.permission && _.append(`setby`, _.permission.toString()),
    _.archived == `1` && _.append(`isarchived`, `true`),
    _.display &&
      (_.display.hidden == `1` && _.append(`hidden`, `true`),
      _.display.name && _.append(`displayname`, JSON.stringify(_.display.name)),
      _.display.desc &&
        _.append(`displaydesc`, JSON.stringify(_.display.desc))));
  let _ = `${_.PARTNER_BASE_URL}achievements/ajaxcreateorupdateachievement/${_}`;
  _?.(`achievement`);
  let _ = await _(`addOrUpdateAchievement`, _, _);
  return (await _(_, _.statid, _.bitid, _, _, _), _);
}
function _(_, _, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      await _(_, {
        statID: _,
        bitID: _,
        ..._,
      }),
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
async function _(_, _) {
  let { statID: _, bitID: _ } = _,
    _ = `${_.PARTNER_BASE_URL}achievements/ajaxdeleteachievement/${_}`,
    _ = new FormData();
  return (
    _.append(`appid`, _.toString()),
    _.append(`statid`, _),
    _.append(`bitid`, _),
    await _(`deleteAchievement`, _, _),
    !0
  );
}
function _(_, _, _) {
  let _ = _();
  return _({
    mutationFn: async () =>
      await _(_, {
        statID: _,
        bitID: _,
      }),
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
function _(_) {
  return (
    (_.addOrUpdate ?? []).reduce((_, _) => _ + _(_), 0) +
    (_.delete ?? []).length
  );
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _(_),
        _ = 0,
        _ = (_, _) => {
          (_.onProgress?.({
            step: _,
            name: _,
            completed: _,
            total: _,
          }),
            _++);
        };
      for (let _ of _.addOrUpdate ?? []) {
        let _ = _.achievement?.name ?? _.name ?? ``;
        await _(_, _, (_) => _(_, _));
      }
      for (let _ of _.delete ?? []) (_(`delete`, _.name ?? ``), await _(_, _));
      return !0;
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [_, _, _, !1],
      });
    },
  });
}
var _ = `ppeoOC-Bbh8-`,
  _ = `yFCq-qR54Bk-`,
  _ = `gCGFRtgWYls-`,
  _ = `iQveYQYO74Q-`,
  _ = `Ge4-n6IYB2c-`,
  _ = `_7T2b0ssi35I-`,
  _ = `WV2DtHm58GE-`,
  _ = `Z2bDB4NldFg-`,
  _ = `T8JDTNAeC2M-`,
  _ = `WoAmWGYn8YE-`,
  _ = `tyI8k7t-Fgo-`,
  _ = `TUV4wPkWt5k-`,
  _ = `FIm0IOhpZ6k-`,
  _ = `TjYcCrGlNjg-`,
  _ = `oCifuQH4ZIk-`,
  _ = `Fb9jyZHfoV0-`,
  _ = `HP-ZlEaCACo-`,
  _ = `_3oFU-uelZmg-`,
  _ = `l23xX77jc24-`,
  _ = `bs4EjclJyLQ-`,
  _ = `Wv5uSB0pD34-`,
  _ = `_2P6ogoDbt4M-`,
  _ = `Lp95fmkrvE4-`,
  _ = `Xxg9raLmN8U-`,
  _ = `m6EHqiT2-CI-`,
  _ = `UznZIFOtb-g-`,
  _ = `UkaTTkIdxbo-`,
  _ = `SFI6OiMBGAo-`,
  _ = `iN9nH96QLdQ-`,
  _ = `Pe2J8WTncno-`,
  _ = `XVCBnsVWfXA-`,
  _ = `_4k0uWmAz8gE-`,
  _ = `SpcSSTlGcnk-`,
  _ = `cSFNR3wWbY0-`,
  _ = _(
    _((_, _) => {
      _.exports = function _(_, _) {
        if (_ === _) return !0;
        if (_ && _ && typeof _ == `object` && typeof _ == `object`) {
          if (_.constructor !== _.constructor) return !1;
          var _, _, _;
          if (Array.isArray(_)) {
            if (((_ = _.length), _ != _.length)) return !1;
            for (_ = _; _-- !== 0;) if (!_(_[_], _[_])) return !1;
            return !0;
          }
          if (_.constructor === RegExp)
            return _.source === _.source && _.flags === _.flags;
          if (_.valueOf !== Object.prototype.valueOf)
            return _.valueOf() === _.valueOf();
          if (_.toString !== Object.prototype.toString)
            return _.toString() === _.toString();
          if (
            ((_ = Object.keys(_)), (_ = _.length), _ !== Object.keys(_).length)
          )
            return !1;
          for (_ = _; _-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(_, _[_])) return !1;
          for (_ = _; _-- !== 0;) {
            var _ = _[_];
            if (!_(_[_], _[_])) return !1;
          }
          return !0;
        }
        return _ !== _ && _ !== _;
      };
    })(),
  ),
  _ = `PV4kNAFKkvM-`,
  _ = `-xt1y20zt5w-`,
  _ = `Zd1W-ExNtB4-`,
  _ = `_0PIRv53knvE-`,
  _ = `vMcehBIQOlY-`,
  _ = `OraLGkA9PO8-`,
  _ = `bha6hyfnu4w-`,
  _ = `Wo0cReTq2C8-`,
  _ = `Bkrfa0XVbVA-`,
  _ = `O8U5YlKtggk-`,
  _ = `l8J6A1pOzPM-`,
  _ = `DgvAT9aO0gQ-`,
  _ = `KGMhKgvKlIA-`,
  _ = `_1LkqXhRSR2w-`,
  _ = `bC2pPdo9du4-`,
  _ = `I-D3o7RgYB8-`,
  _ = `HoGCvKda2EQ-`;
function _() {
  let { appID: _ } = _(),
    _ = _(_),
    _ = _(_) || {},
    _ = _(_) || [];
  return [
    ..._.map((_) => _.display?.name),
    ..._.map((_) => _.display?.desc),
    ...Object.keys(_).map((_) => _[_].name),
  ].reduce(
    (_, _) => (
      Object.keys(_).forEach((_) => {
        let _ = _[_];
        ((_.total += 1),
          (_(_, _)?.length ?? 0) > 0 && (_.set += 1),
          (_[_] = _));
      }),
      _
    ),
    _.reduce(
      (_, _) => (
        (_[_] = {
          set: 0,
          total: 0,
        }),
        _
      ),
      {},
    ),
  );
}
function _(_) {
  let { locstring: _ } = _,
    { appID: _, localization: _ } = _(),
    { currentLanguage: _, setCurrentLanguage: _ } = _,
    _ = _(_),
    _ = _ === void 0,
    _ = _(),
    _ = _ ? _ : {},
    _ = _({
      rgOptions: _,
      selectedValue: _,
      onSelectionChange: _,
    }),
    _ = (_, _ = !1) => {
      let _ = _ ? _[_].set === _[_].total : (_(_, _)?.length ?? 0) > 0,
        _ = _ ? _ : _,
        _ = _ ? ` (${_[_].set} / ${_[_].total})` : ``;
      return (0, _.jsxs)(`span`, {
        className: _,
        children: [
          _ &&
            (_
              ? (0, _.jsx)(_, {
                  color: `var(--text-color)`,
                })
              : (0, _.jsx)(_, {
                  color: `var(--text-color)`,
                })),
          ` `,
          _(`#Language_${_}`),
          _,
        ],
      });
    };
  return (0, _.jsx)(`div`, {
    className: _(_, _ ? _ : null),
    children: (0, _.jsxs)(_.Root, {
      variant: _ ? `underline` : `default`,
      size: `2`,
      state: _,
      children: [
        (0, _.jsx)(_.Trigger, {
          children: _(_),
        }),
        (0, _.jsx)(_.Options, {
          children: _.rgOptions.map((_) =>
            (0, _.jsx)(
              _.Option,
              {
                value: _,
                children: _(_.toString(), !0),
              },
              _.toString(),
            ),
          ),
        }),
      ],
    }),
  });
}
function _(_, _) {
  return _
    ? typeof _ == `string`
      ? {
          english: _,
        }
      : Object.keys(_).reduce(
          (_, _) => ((_ == `token` || _.includes(_)) && (_[_] = _[_]), _),
          {},
        )
    : {};
}
function _(_) {
  let { value: _, setValue: _, multiline: _ = !1, autofocus: _ = !1 } = _,
    { currentLanguage: _ } = _().localization,
    { appID: _ } = _(),
    _ = _(_, _(_)),
    _ = (_) => {
      let _ = {
        ..._,
        [_]: _,
      };
      _(_);
    };
  return (0, _.jsx)(`div`, {
    className: _(_, _[_] ? void 0 : _),
    children: _
      ? (0, _.jsx)(_, {
          autoFocus: _,
          resize: `vertical`,
          value: _[_],
          onTextChange: _,
        })
      : (0, _.jsx)(_, {
          autoFocus: _,
          value: _[_],
          onTextChange: _,
        }),
  });
}
function _(_, _) {
  if (_ !== void 0)
    return typeof _ == `string`
      ? _ === `english`
        ? _
        : void 0
      : _ && _ in _ && _[_] != ``
        ? _[_]
        : void 0;
}
function _(_) {
  let { text: _, missingStringLocToken: _ } = _,
    { currentLanguage: _ } = _().localization;
  return (
    _(_, _) ||
    (0, _.jsxs)(`span`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {
          color: `var(--text-color)`,
        }),
        ` `,
        _(
          _ ?? `#AchievementEditor_Localization_MissingString`,
          _(`#Language_${_}`),
        ),
      ],
    })
  );
}
function _(_) {
  let { onClose: _ } = _,
    { appID: _ } = _(),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    [_, _] = (0, _.useState)(new Set(_)),
    _ = _.reduce((_, _) => ((_[_] = _(`#Language_${_}`)), _), {}),
    _ = [..._].sort((_, _) => _[_].localeCompare(_[_])),
    _ = (0, _.useCallback)(() => {
      _.mutate(Array.from(_), {
        onSuccess: _,
      });
    }, [_, _, _]),
    _ = _.slice(0, Math.round(_.length / 2)),
    _ = _.slice(_.length),
    _ = (_, _) => {
      _((_) =>
        _
          ? new Set(Array.from([..._, _]))
          : new Set(Array.from(_).filter((_) => _ != _)),
      );
    };
  return (0, _.jsxs)(_, {
    onClose: _,
    strTitle: _(`#AchievementEditor_AppLanguageEdit_Title`),
    children: [
      (0, _.jsxs)(_, {
        columns: `repeat(2, 1fr)`,
        gap: `3`,
        paddingY: `3`,
        children: [
          (0, _.jsx)(_, {
            gridColumn: `1/-1`,
            minWidth: `100%`,
            width: `0`,
            children: (0, _.jsx)(_, {
              contrast: `description`,
              children: _(`#AchievementEditor_AppLanguageEdit_Description`),
            }),
          }),
          [_, _].map((_, _) =>
            (0, _.jsx)(
              _,
              {
                direction: `column`,
                gap: `2`,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      disabled: _ == `english`,
                      checked: _ == `english` || _.has(_),
                      onChange: (_) => _(_, _),
                      children: _[_],
                    },
                    _,
                  ),
                ),
              },
              _,
            ),
          ),
        ],
      }),
      (0, _.jsx)(_, {
        pending: _.isPending,
        error: _.error?.message,
        onSave: _,
        onCancel: _,
      }),
    ],
  });
}
var _ = {
  group: `#AchievementEditor_Bulk_Save_Step_Group`,
  achievement: `#AchievementEditor_Bulk_Save_Step_Achievement`,
  icon: `#AchievementEditor_Bulk_Save_Step_Icon`,
  icon_gray: `#AchievementEditor_Bulk_Save_Step_IconGray`,
  delete: `#AchievementEditor_Bulk_Save_Step_Delete`,
};
function _(_) {
  let { progress: _, pending: _ } = _,
    { step: _, name: _, completed: _, total: _ } = _,
    _ = _ > 0 ? Math.round((100 * _) / _) : 0,
    _ = _(
      _
        ? `#AchievementEditor_Bulk_Save_Progress`
        : `#AchievementEditor_Bulk_Save_Stopped`,
      _ + 1,
      _,
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        role: `progressbar`,
        "aria-valuenow": _,
        "aria-valuemax": _,
        children: (0, _.jsx)(`div`, {
          style: {
            width: `${_}%`,
          },
        }),
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {
              contrast: `description`,
              children: _(_[_], _),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
    saveText: _,
    saveColor: _,
    cancelText: _,
    onSave: _,
    onCancel: _,
    pending: _,
    progress: _,
    error: _,
    saveDisabled: _ = !1,
    hideCancel: _ = !1,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !!_ &&
        (_ || !!_) &&
        (0, _.jsx)(_, {
          progress: _,
          pending: _,
        }),
      !!_ &&
        (0, _.jsx)(_, {
          text: _,
        }),
      (0, _.jsx)(_, {
        color: _ ?? `green`,
        variant: `vibrant`,
        onClick: _,
        loading: _,
        disabled: _ || _,
        children: (0, _.jsx)(`span`, {
          children: _ || _(`#Button_Save`),
        }),
      }),
      !_ &&
        (0, _.jsx)(_, {
          color: `dull`,
          onClick: _,
          disabled: _,
          children: (0, _.jsx)(`span`, {
            children: _ || _(`#Button_Cancel`),
          }),
        }),
    ],
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    className: _(_, _),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { color: _ = `currentColor` } = _;
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      color: _,
    }),
  });
}
function _(_) {
  let { color: _ = `var(--color-unreleased)` } = _;
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      color: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { onClick: _ } = _;
  return (0, _.jsxs)(_, {
    color: `dull`,
    icon: !0,
    onClick: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          width: `18`,
          height: `18`,
        }),
      }),
      _(`#AchievementEditor_ReorderGroups`),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M17 10.3477L14.7471 12.5557L11.0938 8.97559V27.0244L14.7471 23.4443L17 25.6523L9.5 33L2 25.6523L4.25293 23.4443L7.90625 27.0234V8.97656L4.25293 12.5557L2 10.3477L9.5 3L17 10.3477ZM34 30L21.0303 30.0303V26.0303L34 26V30ZM34 16V20H21V16H34ZM34 10H21V6H34V10Z`,
    }),
  });
}
function _(_) {
  let { title: _, onClick: _, className: _ } = _;
  return (0, _.jsx)(`div`, {
    title: _,
    className: _(_, _, _),
    children: (0, _.jsx)(_, {
      variant: `ghost`,
      icon: !0,
      onClick: _,
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { title: _, onClick: _ } = _;
  return (0, _.jsx)(`div`, {
    title: _,
    className: _(_, _),
    children: (0, _.jsx)(_, {
      variant: `ghost`,
      icon: !0,
      onClick: _,
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { helpText: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { text: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    style: {
      color: `var(--color-warning)`,
    },
    children: [(0, _.jsx)(_, {}), ` `, _],
  });
}
function _(_) {
  let { text: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    style: {
      color: `var(--color-error)`,
    },
    children: [(0, _.jsx)(_, {}), ` `, _],
  });
}
function _(_) {
  let { groupID: _, group: _, showVisibility: _ = !1 } = _,
    { visible: _ } = _(_, _),
    { existingAchievements: _, existingAchievementUnlockPercentages: _ } = _(),
    _ =
      _ === `0` || _ === void 0
        ? _(`#AchievementEditor_Group_CoreGameAchievements_Heading`)
        : (_(_?.name, `english`) ?? _?.name?.token),
    _ =
      _?.groups
        .find((_) => _._.toString() == _)
        ?.achievements.some(
          (_) => (_?.percentages?.[_.internal_key] ?? 0) > 0,
        ) ?? !1,
    _;
  return (
    _ && (_ ? _ && (_ = (0, _.jsx)(_, {})) : (_ = (0, _.jsx)(_, {}))),
    (0, _.jsxs)(_, {
      direction: `row`,
      gap: `1`,
      align: `center`,
      children: [_, _],
    })
  );
}
var _ = `newgroup`;
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      filter: _,
      allowCreate: _,
      variant: _,
      placeholder: _ = _(`#AchievementEditor_Group_SelectGroupPlaceholder`),
    } = _,
    { appID: _ } = _(),
    _ = _(_) || {},
    _ = [`0`, ...Object.keys(_)],
    _ = _ === void 0 ? _ : _.filter(_);
  return (
    _ && _.splice(0, 0, _),
    (0, _.jsx)(_, {
      selectedValue: _,
      variant: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: (_) =>
        _ == `newgroup`
          ? _(`#AchievementEditor_Group_SelectGroup_Create`)
          : (0, _.jsx)(_, {
              groupID: _,
              group: _[_],
              showVisibility: !0,
            }),
    })
  );
}
function _(_) {
  return (_) => _ != _ && (!!_ || _ != `0`);
}
function _(_, _, _, _) {
  let _ = _ == `name` ? `NAME` : `DESC`;
  return !_ || _ == `${_}_${_}` ? `${_}_${_}` : _;
}
function _(_) {
  let {
    okText: _,
    cancelText: _,
    onOk: _,
    onCancel: _,
    okColor: _,
    hideCancelButton: _ = !1,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      bHideCloseIcon: !0,
      children: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            children: _,
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              saveText: _ ?? _(`#Button_OK`),
              saveColor: _,
              onSave: _,
              cancelText: _,
              onCancel: _,
              hideCancel: _,
            }),
          }),
        ],
      }),
    }),
  });
}
function _(_, _) {
  let {
      appID: _,
      existingAchievements: _,
      existingAchievementUnlockPercentages: _,
    } = _(),
    _ = _?.dlcappid,
    _ = _(_),
    { data: _ } = _(_),
    _ = _?.find((_) => _ == _.appid),
    _ = !!Number(_),
    { data: _ } = _(
      _
        ? {
            appid: Number(_),
          }
        : void 0,
    ),
    _ = _?.archived == `1`,
    _ = _?.developeronly == `1`,
    _ = (_ ?? _)?.is_released_somewhere;
  return {
    archived: _,
    developeronly: _,
    is_released_somewhere: _,
    hasprogress:
      _?.groups
        .find((_) => _._.toString() == (_ ?? `0`))
        ?.achievements.some(
          (_) => (_?.percentages?.[_.internal_key] ?? 0) > 0,
        ) ?? !1,
    app: _ ?? _,
    baseApp: _,
    noStorePage: !!_ && _.success != 1,
    notDLCOfApp: _ && !!_ && !_,
    dlcappid: _,
    visible: !_ && !_ && _,
  };
}
function _() {
  let { existingAchievements: _, existingAchievementUnlockPercentages: _ } =
    _();
  return (0, _.useMemo)(
    () =>
      _
        ? _.groups.reduce(
            (_, _) => (
              _.achievements.forEach((_) => {
                _[_.internal_key] = {
                  existingAchievement: _,
                  globalUnlockPercentage: _?.percentages?.[_.internal_key],
                };
              }),
              _
            ),
            {},
          )
        : {},
    [_, _],
  );
}
function _(_, _) {
  let _ = _();
  return _ === void 0 || _ === void 0 || _ === void 0 ? {} : (_[_(_, _)] ?? {});
}
function _(_, _) {
  let _ = typeof _ == `string` ? Number.parseInt(_) : _,
    _ = typeof _ == `string` ? Number.parseInt(_) : _;
  return (_ << 8) | _;
}
function _(_) {
  return _(
    `#AchievementEditor_PercentFormat`,
    (_ ?? 0).toLocaleString(_(), {
      maximumFractionDigits: 1,
    }),
  );
}
var _ = _({
    api_name: _().min(1),
    setid: _().optional(),
    permission: _(Object.keys(_).filter((_) => typeof _ == `string`)).transform(
      (_) => _[_],
    ),
    spoiler: _(),
    archived: _(),
    progress_stat_name: _(),
    progress_stat_min: _(),
    progress_stat_max: _(),
  }),
  _ = _({
    api_name: _().min(1),
    field: _([`name`, `description`]),
  }),
  _ = _.catchall(_());
function _(_) {
  return _.reduce((_, _) => ((_[_.name] = _), _), {});
}
function _(_) {
  let { groups: _, stats: _, achievements: _ } = _,
    _ = new Set(_.map((_) => _.groupid));
  return _.superRefine((_, _) => {
    if (
      (_.setid &&
        !_.has(_.setid) &&
        _(`setid`, _(`#AchievementEditor_Validator_Error_GroupDoesNotExist`)),
      _.progress_stat_name === void 0 || _.progress_stat_name == ``)
    )
      return;
    function _(_, _) {
      _.addIssue({
        code: `custom`,
        path: [_],
        input: _[_],
        message: _,
      });
    }
    let _ = _.find((_) => _.name == _.progress_stat_name);
    if (_ === void 0)
      _(
        `progress_stat_name`,
        _(`#AchievementEditor_Validator_Error_StatDoesNotExist`),
      );
    else {
      (_.permission != (_.permission ?? _.Client) &&
        _(
          `permission`,
          _(
            `#AchievementEditor_Validator_Error_AchievementStatDifferentPermissions`,
          ),
        ),
        _.type == `INT` &&
          (_().safeParse(_.progress_stat_min).success ||
            _(
              `progress_stat_min`,
              _(`#AchievementEditor_Validator_Error_MinMaxMustBeInteger`),
            ),
          _().safeParse(_.progress_stat_max).success ||
            _(
              `progress_stat_max`,
              _(`#AchievementEditor_Validator_Error_MinMaxMustBeInteger`),
            )));
      {
        let _ = _.type == `INT` ? _.int32 : _.float32,
          _ = [_().default(_[0]).parse(_.min), _().default(_[1]).parse(_.max)],
          _ = [_().parse(_.progress_stat_min), _().parse(_.progress_stat_max)];
        (_[0] < _[0] &&
          _(
            `progress_stat_min`,
            _(`#AchievementEditor_Validator_Error_MinLessThanStatMin`),
          ),
          _[1] > _[1] &&
            _(
              `progress_stat_max`,
              _(`#AchievementEditor_Validator_Error_MaxGreaterThanStatMax`),
            ),
          _[0] >= _[1] &&
            _(
              `progress_stat_max`,
              _(`#AchievementEditor_Validator_Error_MinGreaterThanMax`),
            ));
      }
    }
  });
}
function _(_, _, _, _) {
  let _ = _.reduce((_, _) => {
    let _ = String(_[_]);
    return ((_[_] = (_[_] ?? 0) + 1), _);
  }, {});
  _.forEach((_, _) => {
    _[String(_[_])] > 1 &&
      _.addIssue({
        code: `custom`,
        path: [_, _],
        input: _[_],
        message: _,
      });
  });
}
function _(_) {
  let { stats: _, achievements: _ } = _;
  return _(_(_))
    .superRefine((_, _) =>
      _(
        _,
        _,
        `api_name`,
        _(`#AchievementEditor_AchievementCsvImport_Error_DuplicateApiName`),
      ),
    )
    .transform((_) => {
      let _ = _.map((_) => _.api_name),
        _ = _.reduce((_, _) => ((_[_.api_name] = _), _), {}),
        _ = _(_),
        _ = {
          csv: _,
          achievements: _,
          added: _.filter((_) => !_.some((_) => _.name == _)),
          deleted: _.map((_) => _.name).filter((_) => !_.includes(_)),
          modified: [],
          unmodified: [],
        };
      return _.filter(
        (_) => !_.added.includes(_) && !_.deleted.includes(_),
      ).reduce(
        (_, _) => (
          _(_[_], _[_]) ? _.unmodified.push(_) : _.modified.push(_),
          _
        ),
        _,
      );
    });
}
function _(_) {
  return {
    api_name: _.name,
    setid: _.groupid ?? ``,
    permission: _.permission ?? _.Client,
    spoiler: _.display?.hidden == `1`,
    archived: _.archived == `1`,
    progress_stat_name: _.progress?.value?.operand1 ?? ``,
    progress_stat_min: parseFloat(_.progress?.min_val ?? `0`),
    progress_stat_max: parseFloat(_.progress?.max_val ?? `0`),
  };
}
function _(_, _) {
  if (!_) return {};
  let { token: _, ..._ } = _(_, _);
  return _;
}
function _(_, _) {
  let { api_name: _, field: _, ..._ } = _ ?? {};
  return {
    token: _,
    ..._,
  };
}
function _(_) {
  return _.reduce((_, _) => ((_[_] = ``), _), {});
}
function _(_, _) {
  let _ = _(_);
  return [
    {
      api_name: _.name,
      field: `name`,
      ..._,
      ..._(_.display?.name, _),
    },
    {
      api_name: _.name,
      field: `description`,
      ..._,
      ..._(_.display?.desc, _),
    },
  ];
}
async function _(_) {
  let _ = await _.ParseCSVFile(_, _);
  return _.errors && _.errors.length > 0
    ? {
        fields: void 0,
        data: void 0,
        errors: _.errors.map((_) => _.message),
      }
    : {
        fields: _.meta.fields,
        data: _.data,
        errors: void 0,
      };
}
function _(_, _) {
  return (0, _.default)(_, _(_));
}
function _() {
  return {
    api_name: _(`#AchievementEditor_Csv_Hint_ApiName`),
    setid: _(`#AchievementEditor_Csv_Hint_GroupID`),
    permission: _(`#AchievementEditor_Csv_Hint_Permission`, _.join(`, `)),
    spoiler: _(`#AchievementEditor_Csv_Hint_Bool`),
    archived: _(`#AchievementEditor_Csv_Hint_Bool`),
    progress_stat_name: _(`#AchievementEditor_Csv_Hint_ProgressStatName`),
    progress_stat_min: _(`#AchievementEditor_Csv_Hint_ProgressStatMin`),
    progress_stat_max: _(`#AchievementEditor_Csv_Hint_ProgressStatMax`),
  };
}
function _() {
  return {
    api_name: _(`#AchievementEditor_Csv_Hint_LocApiName`),
    field: _(`#AchievementEditor_Csv_Hint_LocField`),
    setid: _(`#AchievementEditor_Csv_Hint_LocGroupID`),
  };
}
function _(_, _, _) {
  let _ = _.reduce((_, _) => ((_[_] = _[_] ? `${_} (${_[_]})` : _), _), {});
  return {
    fields: _.map((_) => _[_]),
    rows: _.map((_) =>
      Object.keys(_).reduce((_, _) => ((_[_[_] ?? _] = _[_]), _), {}),
    ),
  };
}
function _(_) {
  return _.replace(/\s*\(.*$/, ``).trim();
}
var _ = `EXAMPLE_`,
  _ = [`${_}FIRST_WIN`, `${_}HUNDRED_WINS`];
function _() {
  return [
    {
      api_name: _[0],
      setid: ``,
      permission: _.Client,
      spoiler: !1,
      archived: !1,
      progress_stat_name: ``,
      progress_stat_min: 0,
      progress_stat_max: 0,
    },
    {
      api_name: _[1],
      setid: ``,
      permission: _.Client,
      spoiler: !0,
      archived: !1,
      progress_stat_name: ``,
      progress_stat_min: 0,
      progress_stat_max: 0,
    },
  ];
}
function _(_) {
  let _ = _(_),
    _ = [
      {
        name: `First Victory`,
        description: `Win your first match.`,
      },
      {
        name: `100 Wins`,
        description: `Win 100 different matches.`,
      },
    ];
  return _.map((_, _) => [
    {
      api_name: _,
      field: `name`,
      ..._,
      english: _[_].name,
    },
    {
      api_name: _,
      field: `description`,
      ..._,
      english: _[_].description,
    },
  ]);
}
function _(_, _) {
  let _ = `${_}-achievements-definitions.csv`,
    { fields: _, rows: _ } = _(
      (_.length > 0 ? _.map(_) : _()).map((_) => ({
        ..._,
        permission: _[_.permission ?? _.Client],
      })),
      Object.keys(_.shape),
      _(),
    );
  _.WriteCSVToFile(_, _, !0, _);
}
function _(_, _, _) {
  let _ = `${_}-achievements-localization.csv`,
    { fields: _, rows: _ } = _(
      (_.length > 0 ? _.map((_) => _(_, _)) : _(_)).reduce(
        (_, _) => (_.push(..._), _),
        [],
      ),
      [...Object.keys(_.shape), ..._],
      _(),
    );
  _.WriteCSVToFile(_, _, !0, _);
}
function _(_, _, _) {
  if (!_) return {};
  let _ = _.find((_) => _.field == `name`),
    _ = _.find((_) => _.field == `description`),
    _ = _(_?.display?.name?.token, _?.name, `name`, _ ?? _?.name),
    _ = _(_?.display?.desc?.token, _?.name, `desc`, _ ?? _?.name);
  return {
    name: _ ? _(_, _) : void 0,
    desc: _ ? _(_, _) : void 0,
  };
}
function _(_, _, _) {
  return {
    name: _.api_name,
    groupid: _.setid,
    permission: _.permission,
    archived: _.archived ? `1` : `0`,
    display: {
      hidden: _.spoiler ? `1` : `0`,
      name: void 0,
      desc: void 0,
      icon: void 0,
      icon_gray: void 0,
      ..._(_?.api_name, _, _),
    },
    progress: _.progress_stat_name
      ? {
          value: {
            operation: ``,
            operand1: _.progress_stat_name,
          },
          min_val: _.progress_stat_min.toString(),
          max_val: _.progress_stat_max.toString(),
        }
      : void 0,
  };
}
function _(_, _) {
  let _ = _().safeParse(_.path[0])?.data;
  return _ !== void 0 && Number.isInteger(_) && _ >= 0 && _ < _.data.length
    ? _
    : void 0;
}
function _(_, _, _) {
  let _ = _(_, _),
    _ = _.data[_],
    _ = _.path.length > 1 ? _.path[1] : _;
  return {
    line: _ + 2,
    key: _[_],
    field: _,
    input: _ in _ ? _[_] : ``,
    message: _.message,
  };
}
function _(_, _, _) {
  let _ = (_) => _.path.length > 1 && _(_, _) !== void 0;
  return {
    errors: _?.filter((_) => !_(_)).map((_) => _.message),
    fieldErrors: _?.filter(_).map((_) => _(_, _, _)),
  };
}
function _(_) {
  let _ = new Set(_.fields);
  return Object.keys(_.shape).every((_) => _.has(_));
}
function _(_, _, _, _) {
  let _ = _({
    groups: _,
    stats: _,
    achievements: _,
  }).safeParse(_.data);
  return {
    ..._.data,
    ..._(_, _.error?.issues, `api_name`),
  };
}
function _(_) {
  let _ = new Set(_.fields);
  return Object.keys(_.shape).every((_) => _.has(_));
}
function _(_) {
  let _ = _(_).safeParse(_.data);
  return {
    localization:
      _.data?.reduce(
        (_, _) => (
          _.api_name in _ || (_[_.api_name] = []),
          _[_.api_name].push(_),
          _
        ),
        {},
      ) ?? {},
    ..._(_, _.error?.issues, `api_name`),
  };
}
var _ = _({
    setid: _().min(1),
  }),
  _ = _.catchall(_());
function _(_) {
  return _.reduce((_, _) => ((_[_.groupid] = _), _), {});
}
function _(_) {
  let _ = _?.name;
  return typeof _ == `string`
    ? {
        english: _,
      }
    : (_ ?? {});
}
function _(_) {
  return Object.keys(_)
    .filter((_) => _ == `token` || !!_[_])
    .reduce((_, _) => ((_[_] = _[_]), _), {});
}
function _(_, _) {
  return {
    setid: _.groupid,
    ..._(_),
    ..._(_.name, _),
  };
}
function _(_, _) {
  let { setid: _, ..._ } = _;
  return _({
    ..._(_),
    ..._,
  });
}
function _(_, _) {
  return (0, _.default)(_(_, _), _(_(_)));
}
function _(_) {
  let { groups: _, validLanguages: _ } = _,
    _ = new Set(_.map((_) => _.groupid));
  return _.superRefine((_, _) => {
    function _(_, _) {
      _.addIssue({
        code: `custom`,
        path: [_],
        input: _[_],
        message: _,
      });
    }
    (_.setid == `0`
      ? _(`setid`, _(`#AchievementEditor_GroupCsvImport_Error_DefaultGroup`))
      : _.has(_.setid) ||
        _(`setid`, _(`#AchievementEditor_Validator_Error_GroupDoesNotExist`)),
      Object.keys(_)
        .filter((_) => _ != `setid` && !_.includes(_))
        .forEach((_) =>
          _(_, _(`#AchievementEditor_GroupCsvImport_Error_UnknownLanguage`, _)),
        ),
      _.english ||
        _(
          `english`,
          _(`#AchievementEditor_GroupCsvImport_Error_NameRequired`),
        ));
  });
}
function _(_) {
  let { groups: _ } = _;
  return _(_(_))
    .superRefine((_, _) =>
      _(
        _,
        _,
        `setid`,
        _(`#AchievementEditor_GroupCsvImport_Error_DuplicateGroupID`),
      ),
    )
    .transform((_) => {
      let _ = _.reduce((_, _) => ((_[_.setid] = _), _), {}),
        _ = _(_);
      return Object.keys(_).reduce(
        (_, _) => (
          _(_[_], _[_]) ? _.unmodified.push(_) : _.modified.push(_),
          _
        ),
        {
          csv: _,
          groups: _,
          modified: [],
          unmodified: [],
        },
      );
    });
}
function _(_) {
  let _ = new Set(_.fields);
  return Object.keys(_.shape).every((_) => _.has(_)) && !_.has(`api_name`);
}
function _(_, _, _) {
  let _ = _({
    groups: _,
    validLanguages: _,
  }).safeParse(_.data);
  return {
    ..._.data,
    ..._(_, _.error?.issues, `setid`),
  };
}
function _(_, _, _) {
  let _ = `${_}-achievement-sets-localization.csv`,
    { fields: _, rows: _ } = _(
      _.map((_) => _(_, _)),
      [...Object.keys(_.shape), ..._],
      _(),
    );
  _.WriteCSVToFile(_, _, !0, _);
}
var _ = `xrvj-s3NAdc-`,
  _ = `i2fB78ZSih4-`,
  _ = `v-wZCTNdxxU-`,
  _ = `MdiJkSRJpEo-`,
  _ = `L0yL8BRJEwA-`,
  _ = {
    32: _,
    64: _,
    128: _,
    256: _,
  };
function _(_) {
  let {
      size: _ = 64,
      achievement: _,
      achieved: _ = !0,
      showWarningOnEmpty: _ = !0,
      children: _,
      className: _,
    } = _,
    { cdnRoot: _ } = _(),
    _ = _ ? _?.display?.icon : _?.display?.icon_gray,
    _ = _[_],
    _ = _(_, _, !_ && `tAcftwLfwQA-`, _);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            src: _ + _,
          }),
          _,
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _,
        title: _(`#AchievementEditor_AchievementImage_WarningMissingImage`),
        children: (0, _.jsx)(`div`, {
          children: _ && (0, _.jsx)(_, {}),
        }),
      });
}
function _(_) {
  let {
      size: _ = 64,
      image: _,
      showNewIcon: _ = !1,
      children: _,
      className: _,
    } = _,
    _ = _[_];
  return (0, _.jsxs)(`div`, {
    className: _(_, _, _),
    children: [
      (0, _.jsx)(`img`, {
        src: _.image,
        alt: _.filenameWithoutExtension,
      }),
      _ &&
        (0, _.jsx)(_, {
          className: `SGjZ-MjAel4-`,
        }),
      _,
    ],
  });
}
var _ = `lYxJrvZEK3U-`;
function _(_) {
  let {
      className: _,
      onUpload: _,
      accept: _,
      multiple: _ = !1,
      fileInputRef: _,
      onError: _,
      children: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (_) =>
      !_ && _.length > 1 ? !1 : Array.from(_).every((_) => _.includes(_.type)),
    _ = (_) => {
      _ &&
        _(
          !_ && _.length > 1
            ? _(`#AchievementEditor_Upload_Error_SingleFileOnly`)
            : _(`#AchievementEditor_Image_Error_UnknownContentType`),
        );
    };
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `CYhFhtLoPvo-`, _ && `_3IZV8ZJ3zR0-`, _),
    onDragEnter: (_) => {
      (_.preventDefault(), _(!0));
      let _ = [..._.dataTransfer.items];
      if (!_ && _.length > 1) (_(!0), (_.dataTransfer.effectAllowed = `none`));
      else
        for (let _ of _)
          if (!_.includes(_.type)) {
            (_(!0),
              (_.dataTransfer.effectAllowed = `none`),
              console.log(_.type));
            return;
          }
    },
    onDragOver: (_) => {
      (_ && (_.dataTransfer.dropEffect = `none`), _.preventDefault());
    },
    onDragLeave: () => {
      (_(!1), _(!1));
    },
    onDrop: async (_) => {
      (_.preventDefault(), _(!1));
      let _ = _;
      (_(!1), _ ? _(_.dataTransfer.files) : _(_.dataTransfer.files));
    },
    children: [
      _,
      _ &&
        (0, _.jsx)(`input`, {
          type: `file`,
          style: {
            display: `none`,
          },
          name: `upload`,
          accept: _.join(`,`),
          multiple: _,
          ref: _,
          onChange: async (_) => {
            _(_.target.files) ? _(_.target.files) : _(_.target.files);
          },
        }),
    ],
  });
}
async function _(_) {
  return new Promise((_, _) => {
    let _ = new Image();
    ((_.onerror = () =>
      _(Error(`failed to decode image for grayscale conversion`))),
      (_.onload = () => {
        let _ = document.createElement(`canvas`);
        ((_.width = _.width), (_.height = _.height));
        let _ = _.getContext(`2d`);
        ((_.filter = `grayscale(100%)`),
          _.drawImage(_, 0, 0, _.width, _.height),
          _(_.toDataURL(`image/png`)));
      }),
      (_.src = _));
  });
}
function _(_, _, _, _, _) {
  let _ = new FileReader();
  ((_.onerror = _),
    (_.onload = (_) => {
      let _ = new Image();
      ((_.onerror = _),
        (_.onload = () => {
          let _ = document.createElement(`canvas`),
            _ = _.width,
            _ = _.height;
          (_ > _
            ? _ > _ && ((_ *= _ / _), (_ = _))
            : _ > _ && ((_ *= _ / _), (_ = _)),
            (_.width = _),
            (_.height = _),
            _.getContext(`2d`).drawImage(_, 0, 0, _, _),
            _(_.toDataURL(_.type)));
        }),
        (_.src = _.target?.result));
    }),
    _.readAsDataURL(_));
}
function _(_) {
  let _ = _.lastIndexOf(`.`);
  return _ !== -1 && _ > _.lastIndexOf(`/`) ? _.slice(0, _) : _;
}
async function _(_, _ = 0, _ = 0, _ = !1) {
  return new Promise((_, _) => {
    if (!_) {
      _({
        success: !1,
        filename: ``,
        error: _(`#AchievementEditor_Image_Error_ReadFailed`),
      });
      return;
    }
    let _ = () =>
        _({
          success: !1,
          filename: _.name,
          error: _(`#AchievementEditor_Image_Error_ReadFailed`),
        }),
      _ = new FileReader();
    ((_.onerror = _),
      (_.onloadend = () => {
        let _ = _.type,
          _ = _.name;
        if (
          ((_ === `image/png` || _.endsWith(`.png`)) &&
            _.result.toString().startsWith(`data:image/png;base64,`)) ||
          ((_ === `image/jpeg` || _.endsWith(`.jpg`) || _.endsWith(`.jpeg`)) &&
            (_.result.toString().startsWith(`data:image/jpeg;base64,`) ||
              _.result.toString().startsWith(`data:image/jpg;base64,`)))
        ) {
          let _ = new Image();
          ((_.onerror = _),
            (_.onload = () => {
              _ && _.width != _.height
                ? (console.error(
                    `Image width and height don't match, must be square`,
                  ),
                  _({
                    success: !1,
                    filename: _.name,
                    error: _(`#AchievementEditor_Image_Error_NotSquare`),
                    image: {
                      image: _.src,
                      imageType: 1,
                      filenameWithoutExtension: _(_),
                    },
                  }))
                : _ > 0 && (_.width < _ || _.height < _)
                  ? (console.error(`Image too small`),
                    _({
                      success: !1,
                      filename: _.name,
                      error: _(`#AchievementEditor_Image_Error_TooSmall`),
                      image: {
                        image: _.src,
                        imageType: 1,
                        filenameWithoutExtension: _(_),
                      },
                    }))
                  : _ > 0 && (_.width > _ || _.height > _)
                    ? _(
                        _,
                        _,
                        _,
                        (_) => {
                          _({
                            success: !0,
                            filename: _.name,
                            image: {
                              image: _,
                              imageType: 1,
                              filenameWithoutExtension: _(_),
                            },
                          });
                        },
                        _,
                      )
                    : _({
                        success: !0,
                        filename: _.name,
                        image: {
                          image: _.result,
                          imageType: 1,
                          filenameWithoutExtension: _(_),
                        },
                      });
            }),
            (_.src = _.result));
        } else
          (console.error(`unknown content types: ` + _),
            _({
              success: !1,
              filename: _.name,
              error: _(`#AchievementEditor_Image_Error_UnknownContentType`),
            }));
      }),
      _.readAsDataURL(_));
  });
}
async function _(_) {
  let { files: _, forceSquare: _, maxDimension: _, minDimension: _ } = _;
  return await Promise.all(_.map((_) => _(_, _, _, _)));
}
function _(_) {
  let {
    className: _,
    allowMultiple: _,
    fileInputRef: _,
    onUpload: _,
    onBulkUpload: _,
    onError: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    onUpload: async (_) => {
      let _ = await _({
          ..._,
          files: Array.from(_),
        }),
        _ = _.filter((_) => !_.success);
      (_.length > 0 &&
        _ &&
        _(
          _.map((_) => _.error)
            .filter((_) => !!_)
            .join(` `) || _(`#AchievementEditor_Image_Error_ReadFailed`),
        ),
        _
          ? _[0].success && _(_[0].image)
          : _(_.filter((_) => _.success).map((_) => _.image)));
    },
    className: _,
    accept: [`image/png`, `image/jpeg`],
    multiple: _,
    fileInputRef: _,
    onError: _,
    children: _,
  });
}
function _(_) {
  return _.errors?.length > 0 || _.fieldErrors?.length > 0;
}
async function _(_, _) {
  let _ = await _(_);
  if (_.errors)
    return {
      filename: _.name,
      success: !1,
      errors: _.errors,
    };
  if (_(_)) {
    let { groups: _, stats: _, achievements: _ } = _,
      _ = _(_, _, _, _),
      _ = _(_);
    return {
      filename: _.name,
      kind: `definitions`,
      success: !_,
      errors: _.errors,
      csvErrors: _.fieldErrors,
      definitions: _ ? void 0 : _,
    };
  }
  if (_(_)) {
    let _ = _(_),
      _ = _(_);
    return {
      filename: _.name,
      kind: `localization`,
      success: !_,
      errors: _.errors,
      csvErrors: _.fieldErrors,
      localization: _ ? void 0 : _,
    };
  }
  if (_(_)) {
    let { groups: _, validLanguages: _ } = _,
      _ = _(_, _, _),
      _ = _(_);
    return {
      filename: _.name,
      kind: `grouplocalization`,
      success: !_,
      errors: _.errors,
      csvErrors: _.fieldErrors,
      groupLocalization: _ ? void 0 : _,
    };
  }
  return {
    filename: _.name,
    success: !1,
    errors: [_(`#AchievementEditor_Bulk_CsvHandlerNotFound`)],
  };
}
var _ = `_ACHIEVED`,
  _ = `_UNACHIEVED`;
function _(_) {
  let _ = _.toUpperCase(),
    _ = [_, _].find((_) => _.endsWith(_));
  return {
    apiName: _ ? _.substring(0, _.length - _.length) : _,
    isAchieved: _ != _,
  };
}
async function _(_) {
  let _ = (
    await _({
      files: [_],
      forceSquare: !0,
    })
  )[0];
  if (!_.success)
    return {
      filename: _.name,
      kind: `image`,
      success: !1,
      imageErrors: [_],
    };
  let { apiName: _, isAchieved: _ } = _(_.image.filenameWithoutExtension),
    _ = _
      ? {
          image: await _(_.image.image),
          imageType: 1,
          filenameWithoutExtension: `GENERATED`,
        }
      : void 0;
  return {
    filename: _.name,
    kind: `image`,
    success: !0,
    image: {
      apiName: _,
      isAchieved: _,
      result: _,
      generatedUnachieved: _,
    },
  };
}
var _ = [
    {
      accept: [`text/csv`],
      process: _,
    },
    {
      accept: [`image/png`, `image/jpeg`],
      process: _,
    },
  ],
  _ = Array.from(new Set(_.flatMap((_) => _.accept))),
  _ = [`definitions`, `localization`, `grouplocalization`];
function _(_, _) {
  return _.reduce((_, _) => {
    let _ = _.includes(_.kind);
    return [
      ..._.filter((_) => _.filename != _.filename && !(_ && _.kind == _.kind)),
      _,
    ];
  }, _);
}
function _(_) {
  return {
    csv: {},
    achievements: _(_),
    added: [],
    modified: [],
    deleted: [],
    unmodified: _.map((_) => _.name),
  };
}
function _(_, _) {
  let _ = _.find((_) => _.success && _.definitions)?.definitions;
  return _
    ? {
        csv: _.csv ?? {},
        achievements: _.achievements ?? _(_),
        added: _.added ?? [],
        modified: _.modified ?? [],
        deleted: _.deleted ?? [],
        unmodified: _.unmodified ?? [],
      }
    : _(_);
}
function _(_, _) {
  let _ = _.find((_) => _.success && _.localization)?.localization;
  if (!_) return;
  let _ = Object.keys(_.localization ?? {})
    .filter((_) => !_(_, _))
    .reduce((_, _) => ((_[_] = _.localization[_]), _), {});
  return {
    ..._,
    localization: _,
  };
}
function _(_, _) {
  if (!(_ in _.achievements) && !(_ in _.csv))
    return _(`#AchievementEditor_Localization_Error_NoAchievement`);
  if (_.deleted.includes(_))
    return _(`#AchievementEditor_Localization_Error_MissingFromDefinitions`);
}
function _(_, _) {
  return !_.success || !_.localization
    ? []
    : Object.keys(_.localization.localization ?? {})
        .map((_) => ({
          apiName: _,
          message: _(_, _),
        }))
        .filter((_) => !!_.message)
        .map((_) => ({
          key: _.apiName,
          field: `api_name`,
          message: _.message,
        }));
}
function _(_) {
  return _.find((_) => _.success && _.groupLocalization)?.groupLocalization;
}
function _(_, _) {
  if (_ in _.achievements || _ in _.csv) return _;
  let _ = _.toUpperCase();
  return (
    [...Object.keys(_.achievements), ...Object.keys(_.csv)].find(
      (_) => _.toUpperCase() == _,
    ) ?? _
  );
}
function _(_, _) {
  if (!_.success || !_.image) return;
  let _ = _(_.image.apiName, _);
  if (!(_ in _.achievements) && !(_ in _.csv))
    return _(`#AchievementEditor_Image_Error_NoAchievement`, _.image.apiName);
  if (_.deleted.includes(_))
    return _(`#AchievementEditor_Image_Error_AchievementMissingFromCsv`, _);
}
function _(_, _, _) {
  let _ = _.filter((_) => _.success && _.image && !_(_, _)).map((_) => ({
      ..._.image,
      apiName: _(_.image.apiName, _),
    })),
    _ = new Set(_.map((_) => _.apiName));
  return Array.from(_).reduce((_, _) => {
    let _ = _.filter((_) => _.apiName == _),
      _ = _.filter((_) => _.isAchieved).pop(),
      _ = _.filter((_) => !_.isAchieved).pop(),
      _ = _ ? _?.generatedUnachieved : void 0;
    return (
      (_[_] = {
        achieved: _?.result,
        unachieved:
          _?.result ??
          (_
            ? {
                success: !0,
                filename: `GENERATED`,
                image: _,
              }
            : void 0),
      }),
      _
    );
  }, {});
}
function _(_, _) {
  let _ = (_) => _(_, _),
    _ = (_) => _(_, _),
    _ = (_) => !!_(_) || _(_).length > 0;
  return {
    errors: [
      ..._.filter((_) => !_.success),
      ..._.filter(_).map((_) => {
        let _ = _(_);
        return {
          ..._,
          success: !1,
          imageErrors: _
            ? [
                {
                  ..._.image.result,
                  success: !1,
                  error: _,
                },
              ]
            : void 0,
          csvErrors: _ ? void 0 : _(_),
        };
      }),
    ],
    successes: _.filter((_) => _.success && !_(_)),
  };
}
function _(_, _, _, _) {
  let _ = (_) => ({
      icon: _[_]?.achieved?.image?.image,
      icon_gray: _[_]?.unachieved?.image?.image,
    }),
    _ = (_) => {
      let { statID: _, bitID: _ } = _.achievements[_];
      return {
        statID: _,
        bitID: _,
      };
    },
    _ = _.added.map((_) => ({
      achievement: _(_.csv[_], _?.localization?.[_]),
      ..._(_),
    })),
    _ = Array.from(
      new Set([
        ..._.modified,
        ...Object.keys(_?.localization ?? {}).filter(
          (_) => !_.added.includes(_) && _ in _.achievements,
        ),
      ]),
    ).map((_) => {
      let _ = _.achievements[_];
      return {
        ..._(_),
        achievement: _(_.csv[_] ?? _(_), _?.localization?.[_], _),
        ..._(_),
      };
    }),
    _ = Object.keys(_)
      .filter((_) => _.unmodified.includes(_))
      .map((_) => ({
        ..._(_),
        ..._(_),
        name: _,
      }));
  return {
    addOrUpdate: [..._, ..._, ..._],
    delete: _
      ? _.deleted.map((_) => ({
          ..._(_),
          name: _,
        }))
      : [],
  };
}
function _(_) {
  return (_?.modified ?? []).map((_) => {
    let _ = _.groups[_];
    return {
      groupid: _,
      group: {
        ..._,
        name: _(_.csv[_], _),
      },
    };
  });
}
var _ = (0, _.createContext)(null);
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  let { onClose: _, setHasChanges: _, children: _ } = _,
    { appID: _ } = _(),
    _ = _(_),
    _ = (0, _.useMemo)(() => _ ?? [], [_]),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = (0, _.useMemo)(() => _(_), [_]),
    _ = (0, _.useMemo)(() => _(_, _, _), [_, _, _]),
    { errors: _, successes: _ } = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = _.some((_) => _.success);
  (0, _.useEffect)(() => {
    _(_);
  }, [_, _]);
  let _ = {
    files: _,
    definitions: _,
    localization: _,
    groupLocalization: _,
    images: _,
    errors: _,
    successes: _,
    hasData: _,
    generateUnachievedImages: _,
    setGenerateUnachievedImages: _,
    confirmDelete: _,
    setConfirmDelete: _,
    uploadFiles: async (_) => {
      let _ = [];
      for (let _ of _) {
        let _ = _.find((_) => _.accept.includes(_.type));
        _
          ? _.push(
              await _.process(_, {
                groups: _,
                stats: _,
                achievements: _,
                validLanguages: _,
              }),
            )
          : _.push({
              filename: _.name,
              success: !1,
              errors: [_(`#AchievementEditor_Image_Error_UnknownContentType`)],
            });
      }
      (_((_) => _(_, _)), _.current && (_.current.value = ``));
    },
    removeFile: (_) => _((_) => _.filter((_) => _.filename != _)),
    openFilePicker: () => _.current?.click(),
    fileInputRef: _,
    acceptedTypes: _,
    save: async () => {
      let _ = _(_),
        _ = _(_, _, _, _),
        _ = _.length,
        _ = _ + _(_);
      _(void 0);
      try {
        (await _.mutateAsync({
          groups: _,
          onProgress: (_) =>
            _({
              ..._,
              total: _,
            }),
        }),
          await _.mutateAsync({
            ..._,
            onProgress: (_) =>
              _({
                ..._,
                completed: _ + _.completed,
                total: _,
              }),
          }),
          _(!0));
      } catch {}
    },
    isSaving: _.isPending || _.isPending,
    saveProgress: _,
    saveError: _.error?.message ?? _.error?.message,
    saveSucceeded: _,
    onClose: _,
  };
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_, _, _, _, _) {
  return (_ && _ in _) || (_ && _ in _ && _(_[_], _[_], _));
}
function _() {
  let { generateUnachievedImages: _, setGenerateUnachievedImages: _ } = _(),
    { appID: _ } = _(),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    [_, _] = (0, _.useState)(!1),
    _ = `dull-7`,
    _ = `blue-8`;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        marginTop: `3`,
        background: _,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            weight: `heavy`,
            children: _(`#AchievementEditor_Bulk_Definitions_Title`),
          }),
          (0, _.jsx)(_, {
            contrast: `description`,
            children: _(`#AchievementEditor_Bulk_Definitions_Description`),
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            align: `center`,
            gap: `2`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, _.jsxs)(_, {
                color: `dull`,
                onClick: () => {
                  _(_, _);
                },
                children: [
                  (0, _.jsx)(_, {}),
                  `\xA0`,
                  _(`#AchievementEditor_Bulk_Export_Definitions`),
                ],
              }),
              (0, _.jsxs)(_, {
                color: _,
                children: [
                  `(`,
                  _(`#AchievementEditor_Bulk_N_Achievements`, _.length),
                  `)`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: _,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            weight: `heavy`,
            children: _(`#AchievementEditor_Bulk_Localization_Title`),
          }),
          (0, _.jsx)(_, {
            contrast: `description`,
            children: _(`#AchievementEditor_Bulk_Localization_Description`),
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            align: `center`,
            gap: `3`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                align: `center`,
                gap: `2`,
                children: [
                  (0, _.jsxs)(_, {
                    color: `dull`,
                    onClick: () => {
                      _(!0);
                    },
                    children: [
                      (0, _.jsx)(_, {}),
                      `\xA0`,
                      _(
                        `#AchievementEditor_Bulk_Localization_Languages_Button`,
                      ),
                    ],
                  }),
                  (0, _.jsxs)(_, {
                    color: _,
                    children: [
                      `(`,
                      _(`#AchievementEditor_Bulk_N_Languages`, _.length),
                      `)`,
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                direction: `row`,
                align: `center`,
                gap: `2`,
                children: [
                  (0, _.jsxs)(_, {
                    color: `dull`,
                    onClick: () => {
                      _(_, _, _);
                    },
                    children: [
                      (0, _.jsx)(_, {}),
                      `\xA0`,
                      _(`#AchievementEditor_Bulk_Export_Localization`),
                    ],
                  }),
                  (0, _.jsxs)(_, {
                    color: _,
                    children: [
                      `(`,
                      _(`#AchievementEditor_Bulk_N_Achievements`, _.length),
                      `)`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(_, {
            contrast: `description`,
            children: _(
              `#AchievementEditor_Bulk_Localization_Tip`,
              (0, _.jsx)(_, {
                contrast: `subtitle`,
              }),
            ),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: _,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            weight: `heavy`,
            children: _(`#AchievementEditor_Bulk_GroupLocalization_Title`),
          }),
          (0, _.jsx)(_, {
            contrast: `description`,
            children: _(
              `#AchievementEditor_Bulk_GroupLocalization_Description`,
            ),
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            align: `center`,
            gap: `2`,
            marginTop: `2`,
            marginBottom: `2`,
            children: [
              (0, _.jsxs)(_, {
                color: `dull`,
                onClick: () => {
                  _(_, _, _);
                },
                children: [
                  (0, _.jsx)(_, {}),
                  `\xA0`,
                  _(`#AchievementEditor_Bulk_Export_GroupLocalization`),
                ],
              }),
              (0, _.jsxs)(_, {
                color: _,
                children: [
                  `(`,
                  _(`#AchievementEditor_Bulk_N_Groups`, _.length),
                  `)`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        padding: `3`,
        background: _,
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            weight: `heavy`,
            children: _(`#AchievementEditor_Bulk_Icons_Title`),
          }),
          (0, _.jsx)(_, {
            contrast: `description`,
            children: _(`#AchievementEditor_Bulk_Icons_Description`),
          }),
          (0, _.jsx)(_, {
            direction: `row`,
            align: `center`,
            gap: `3`,
            marginTop: `2`,
            marginBottom: `2`,
            children: (0, _.jsx)(_, {
              checked: _,
              onChange: (_) => _(_),
              children: (0, _.jsxs)(_.Fragment, {
                children: [
                  _(`#AchievementEditor_Bulk_Options_GenerateIcons`),
                  (0, _.jsx)(`span`, {
                    children: _(
                      `#AchievementEditor_Bulk_Options_GenerateIcons_Description`,
                    ),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let { onClose: _, setHasChanges: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    setHasChanges: _,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { title: _, description: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h2`, {
        children: _,
      }),
      (0, _.jsx)(`p`, {
        children: _,
      }),
      _,
    ],
  });
}
function _() {
  let {
      files: _,
      hasData: _,
      acceptedTypes: _,
      fileInputRef: _,
      uploadFiles: _,
      openFilePicker: _,
      save: _,
      isSaving: _,
      saveProgress: _,
      saveError: _,
      saveSucceeded: _,
      onClose: _,
    } = _(),
    [_, _] = (0, _.useState)(void 0);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      _ &&
        (0, _.jsx)(_, {
          hideCancelButton: !0,
          onOk: _,
          children: _(`#AchievementEditor_Bulk_Save_Confirm`),
        }),
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            accept: _,
            multiple: !0,
            fileInputRef: _,
            onUpload: _,
            onError: _,
            children: (0, _.jsx)(`div`, {
              className: void 0,
              children: _(`#AchievementEditor_Bulk_UploadBox`),
            }),
          }),
          !!_ &&
            (0, _.jsx)(_, {
              text: _,
            }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: (0, _.jsx)(_, {
              color: `dull`,
              onClick: _,
              children: _(`#AchievementEditor_Bulk_Upload_SelectFiles`),
            }),
          }),
          _.length > 0 &&
            (0, _.jsx)(_, {
              title: _(`#AchievementEditor_Bulk_Files_Title`),
              description: _(`#AchievementEditor_Bulk_Files_Description`),
              children: (0, _.jsx)(_, {}),
            }),
          _ &&
            (0, _.jsxs)(_, {
              title: _(`#AchievementEditor_Bulk_Pending_Title`),
              description: _(`#AchievementEditor_Bulk_Pending_Description`),
              children: [
                (0, _.jsx)(_, {
                  className: `avtdFVXpkCU-`,
                  background: `dull-7`,
                  padding: `2`,
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {}),
              ],
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          pending: _,
          progress: _,
          error: _,
          hideCancel: !0,
          onSave: _,
        }),
    ],
  });
}
function _(_, _, _) {
  if (!_) return !0;
  let _ = (_, _) => (_ < _ ? -1 : +(_ > _)),
    _ = _(_, _).sort((_, _) => _(_.field, _.field)),
    _ = _(_, _).sort((_, _) => _(_.field, _.field));
  return !(0, _.default)(_, _);
}
function _(_, _) {
  let _ = _.reduce((_, _) => ((_[_] = ``), _), {});
  return _.map((_) => ({
    ..._,
    ..._,
  }));
}
function _() {
  let {
      definitions: _,
      localization: _,
      images: _,
      confirmDelete: _,
      setConfirmDelete: _,
    } = _(),
    {
      csv: _,
      achievements: _,
      added: _,
      modified: _,
      unmodified: _,
      deleted: _,
    } = _,
    { localization: _ } = _ ?? {},
    { appID: _ } = _(),
    _ = _(_),
    _ = (_) => _(_, _, _, _, _),
    _ = [..._, ..._.filter(_)],
    _ = _.filter((_) => !_(_));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h3`, {
        children: _(`#AchievementEditor_Bulk_Pending_Achievements`),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            !!_.length &&
            (0, _.jsx)(_, {
              className: _(`zmvKraoT-x8-`, `FSJWpY2GglM-`),
              title: _(
                `#AchievementEditor_AchievementCsvImport_Added_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_AchievementCsvImport_Added_Description`,
              ),
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    data: _[_],
                    localization: _?.[_],
                    images: _?.[_],
                  },
                  _,
                ),
              ),
            }),
          _ &&
            !!_.length &&
            (0, _.jsx)(_, {
              className: _(`zmvKraoT-x8-`, `njE0VV2yPWw-`),
              title: _(
                `#AchievementEditor_AchievementCsvImport_Modified_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_AchievementCsvImport_Modified_Description`,
              ),
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    achievement: _[_],
                    data: _?.[_] || _(_[_]),
                    localization: _?.[_],
                    images: _?.[_],
                  },
                  _,
                ),
              ),
            }),
          _ &&
            !!_.length &&
            (0, _.jsx)(_, {
              className: _(`zmvKraoT-x8-`, `Pu-itazQ9U4-`),
              title: _(
                `#AchievementEditor_AchievementCsvImport_Removed_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_AchievementCsvImport_Removed_Description`,
              ),
              headerChildren: (0, _.jsx)(_, {
                cursor: `pointer`,
                maxWidth: `max-content`,
                onClick: () => _(!_),
                children: (0, _.jsx)(_, {
                  variant: `dark`,
                  color: `red`,
                  checked: _,
                  onChange: (_) => _(_),
                  children: _(
                    `#AchievementEditor_AchievementCsvImport_Removed_Confirm`,
                  ),
                }),
              }),
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    achievement: _[_],
                    data: _(_[_]),
                    localization: _?.[_],
                    images: _?.[_],
                  },
                  _,
                ),
              ),
            }),
          _ &&
            !!_.length &&
            (0, _.jsx)(_, {
              title: _(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Description`,
              ),
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    achievement: _[_],
                    data: _(_[_]),
                    localization: _?.[_],
                    images: _?.[_],
                  },
                  _,
                ),
              ),
            }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`p`, {
        children: _(`#AchievementEditor_AchievementCsvImport_Pending_Legend`),
      }),
    ],
  });
}
function _() {
  let { groupLocalization: _ } = _(),
    { currentLanguage: _ } = _().localization,
    { csv: _, groups: _, modified: _, unmodified: _ } = _ ?? {};
  if (!_) return null;
  let _ = (_) =>
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#AchievementEditor_GroupCsvImport_Header_GroupID`),
            }),
            (0, _.jsx)(`div`, {
              children: _(`#AchievementEditor_Group_Field_Name`),
            }),
          ],
        }),
        _.map((_) => {
          let _ = _(_[_], _[_]),
            _ = _(_[_]?.name, _) != _(_, _);
          return (0, _.jsxs)(
            `div`,
            {
              children: [
                (0, _.jsx)(`div`, {
                  children: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _(_ && `Fb9jyZHfoV0-`),
                  children: (0, _.jsx)(_, {
                    text: _,
                  }),
                }),
              ],
            },
            _,
          );
        }),
      ],
    });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h3`, {
        children: _(`#AchievementEditor_Bulk_Pending_Groups`),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          !!_?.length &&
            (0, _.jsx)(_, {
              className: _(`zmvKraoT-x8-`, `njE0VV2yPWw-`),
              title: _(
                `#AchievementEditor_AchievementCsvImport_Modified_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_GroupCsvImport_Modified_Description`,
              ),
              children: _(_),
            }),
          !!_?.length &&
            (0, _.jsx)(_, {
              collapsible: !0,
              title: _(
                `#AchievementEditor_AchievementCsvImport_Unmodified_Title`,
                _.length,
              ),
              description: _(
                `#AchievementEditor_GroupCsvImport_Unmodified_Description`,
              ),
              children: _(_),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { title: _, description: _, headerChildren: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        contrast: `title`,
        children: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: _,
  });
}
function _(_) {
  let { children: _, className: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          ..._,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [(0, _.jsx)(_, {}), _],
      }),
    ],
  });
}
function _(_) {
  let { children: _, className: _, ..._ } = _,
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`div`, {
              className: _,
              onClick: () => _(!_),
              children: (0, _.jsx)(_, {
                angle: _ ? 90 : 0,
              }),
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `ovrT8DFQsuw-`),
        children: [(0, _.jsx)(_, {}), _],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {}),
      (0, _.jsx)(`div`, {
        children: _(
          `#AchievementEditor_AchievementsTable_Header_NameDescription`,
        ),
      }),
      (0, _.jsx)(`div`, {
        children: _(`#AchievementEditor_AchievementsTable_Header_ApiName`),
      }),
      (0, _.jsx)(`div`, {
        children: _(`#AchievementEditor_AchievementsTable_Header_Group`),
      }),
      (0, _.jsx)(`div`, {
        children: _(`#AchievementEditor_AchievementsTable_Header_SetBy`),
      }),
      (0, _.jsx)(`div`, {
        children: _(`#AchievementEditor_AchievementsTable_Header_Availability`),
      }),
    ],
  });
}
function _(_) {
  let { achievement: _, data: _, localization: _, images: _ } = _,
    {
      api_name: _,
      setid: _,
      archived: _,
      spoiler: _,
      permission: _,
      progress_stat_name: _,
      progress_stat_min: _,
      progress_stat_max: _,
    } = _ ?? {},
    _ = _(
      _?.display?.name?.token,
      _?.find((_) => _.field == `name`),
    ),
    _ = _(
      _?.display?.desc?.token,
      _?.find((_) => _.field == `description`),
    ),
    { localization: _ } = _(),
    { currentLanguage: _ } = _;
  function _(_, _, _) {
    return _(_, _ == _ && _ !== void 0 ? void 0 : _);
  }
  let _ = _?.display?.hidden == `1`,
    _ = _?.archived == `1`,
    _ = _(_(_?.display?.name, _), _(_ ? _ : _?.display?.name, _)),
    _ = _(_(_?.display?.desc, _), _(_ ? _ : _?.display?.desc, _));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          _?.achieved?.image
            ? (0, _.jsx)(_, {
                image: _?.achieved?.image,
                size: 32,
                className: _,
              })
            : (0, _.jsx)(_, {
                achievement: _,
                size: 32,
                className: _,
              }),
          _?.unachieved?.image
            ? (0, _.jsx)(_, {
                image: _?.unachieved?.image,
                size: 32,
                className: _,
              })
            : (0, _.jsx)(_, {
                achievement: _,
                achieved: !1,
                size: 32,
                className: _,
              }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              text: _ ? _ : _?.display?.name,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              text: _ ? _ : _?.display?.desc,
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _?.name),
            children: _,
          }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: `L0LRlt43P7k-`,
              children: [
                (0, _.jsx)(`span`, {
                  className: _(_, _?.progress?.value?.operand1),
                  children: _,
                }),
                `: `,
                (0, _.jsx)(`span`, {
                  className: _(_.toString(), _?.progress?.min_val),
                  children: _,
                }),
                ` - `,
                (0, _.jsx)(`span`, {
                  className: _(_.toString(), _?.progress?.max_val),
                  children: _,
                }),
              ],
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _?.groupid ?? ``),
        children: (0, _.jsx)(_, {
          groupid: _,
          oldgroupid: _?.groupid,
          isnew: !_,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _?.permission ?? _.Client),
        children: _[_],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (_ || _) &&
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {}),
                      ` `,
                      _(`#AchievementEditor_Achievement_Edit_Spoiler`),
                    ],
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {}),
                      ` `,
                      _(`#AchievementEditor_Achievement_Edit_Visible`),
                    ],
                  }),
            }),
          (_ || _) &&
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {}),
                      ` `,
                      _(`#AchievementEditor_Achievement_Edit_Archived`),
                    ],
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {}),
                      ` `,
                      _(`#AchievementEditor_Achievement_Edit_Dearchived`),
                      ` `,
                    ],
                  }),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { groupid: _, oldgroupid: _, isnew: _ } = _,
    { appID: _ } = _(),
    _ = _(_),
    _ = !_ || _ == `` ? `0` : _,
    _ = _(_, _?.[_]),
    _ = _(_, _?.[_]),
    _ =
      _ == `0`
        ? _(`#AchievementEditor_Group_CoreGameAchievements_Heading`)
        : (0, _.jsx)(_, {
            text: _?.[_]?.name,
          });
  return _.visible
    ? (_ || _ != _) && _.hasprogress
      ? (0, _.jsxs)(_, {
          className: _,
          toolTipContent: _(
            `#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`,
          ),
          style: {
            alignItems: `baseline`,
          },
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            _,
          ],
        })
      : (0, _.jsx)(_.Fragment, {
          children: _,
        })
    : _?.visible
      ? (0, _.jsxs)(_, {
          className: _,
          toolTipContent: _(
            `#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement`,
          ),
          style: {
            alignItems: `baseline`,
          },
          children: [
            (0, _.jsx)(_, {
              hideTitle: !0,
            }),
            _,
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            _,
          ],
        });
}
function _(_) {
  let {
      title: _,
      description: _,
      icon: _,
      collapsible: _ = !1,
      className: _,
      children: _,
    } = _,
    [_, _] = (0, _.useState)(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `igyCtMxWpXw-`),
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                gap: `1`,
                align: `center`,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    size: `4`,
                    contrast: `title`,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                children: _,
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(`div`, {
                className: `l23xX77jc24-`,
                onClick: () => _(!_),
                children: (0, _.jsx)(_, {
                  angle: _ ? 90 : 0,
                }),
              }),
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `ovrT8DFQsuw-`),
        children: _,
      }),
    ],
  });
}
function _() {
  let { errors: _, successes: _ } = _();
  return _.length == 0 && _.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          _.length > 0 &&
            (0, _.jsx)(_, {
              icon: (0, _.jsx)(_, {}),
              title: _(`#AchievementEditor_Bulk_Errors_Count_Title`, _.length),
              description: _(`#AchievementEditor_Bulk_Errors_Description`),
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    result: _,
                  },
                  _.filename,
                ),
              ),
            }),
          _.length > 0 &&
            (0, _.jsx)(_, {
              collapsible: !0,
              title: _(
                `#AchievementEditor_Bulk_Successes_Count_Title`,
                _.length,
              ),
              description: _(`#AchievementEditor_Bulk_Successes_Description`),
              children: _.map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: `d5VWpJFbnXw-`,
                    children: (0, _.jsx)(_, {
                      result: _,
                    }),
                  },
                  _.filename,
                ),
              ),
            }),
        ],
      });
}
function _(_) {
  let { result: _ } = _,
    { filename: _, imageErrors: _ } = _,
    { removeFile: _ } = _(),
    _ = _.image?.result?.image ?? _?.[0]?.image,
    _ = _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`img`, {
            src: _.image,
            alt: _.filenameWithoutExtension,
          }),
        })
      : (0, _.jsx)(_, {
          height: `24px`,
          aspectRatio: `1/1`,
          children: (0, _.jsx)(_, {}),
        });
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `1`,
    padding: `1`,
    justify: `between`,
    align: `center`,
    background: `dull-8`,
    children: [
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        justify: `start`,
        align: `center`,
        children: [
          _,
          (0, _.jsx)(_, {
            weight: `heavy`,
            size: `4`,
            contrast: `title`,
            whiteSpace: `pre-wrap`,
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        onClick: () => _(_),
      }),
    ],
  });
}
function _(_) {
  let { kind: _, errors: _, csvErrors: _, imageErrors: _ } = _.result;
  if (_) {
    let _ = _(
      _ == `grouplocalization`
        ? `#AchievementEditor_GroupCsvImport_Header_GroupID`
        : `#AchievementEditor_Achievement_Edit_ApiName`,
    );
    return (0, _.jsx)(_, {
      keyHeader: _,
      errorStrings: _,
      csvErrors: _,
    });
  }
  return _
    ? (0, _.jsxs)(`div`, {
        children: [
          _ &&
            _.map((_, _) =>
              (0, _.jsx)(
                `div`,
                {
                  className: `XVCBnsVWfXA-`,
                  children: _,
                },
                _,
              ),
            ),
          _.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: _,
                children: _.error,
              },
              _,
            ),
          ),
        ],
      })
    : (0, _.jsx)(`div`, {
        children:
          _ &&
          _.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: `XVCBnsVWfXA-`,
                children: _,
              },
              _,
            ),
          ),
      });
}
function _(_) {
  let { result: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        result: _,
      }),
      (0, _.jsx)(_, {
        result: _,
      }),
    ],
  });
}
function _(_) {
  let { keyHeader: _, errorStrings: _, csvErrors: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#AchievementEditor_AchievementCsvImport_Header_Line`),
          }),
          (0, _.jsx)(`div`, {
            children: _,
          }),
          (0, _.jsx)(`div`, {
            children: _(`#AchievementEditor_AchievementCsvImport_Header_Field`),
          }),
          (0, _.jsx)(`div`, {
            children: _(`#AchievementEditor_AchievementCsvImport_Header_Input`),
          }),
          (0, _.jsx)(`div`, {
            children: _(`#AchievementEditor_AchievementCsvImport_Header_Error`),
          }),
        ],
      }),
      _ &&
        _.map((_, _) =>
          (0, _.jsx)(
            `div`,
            {
              className: `XVCBnsVWfXA-`,
              children: _,
            },
            _,
          ),
        ),
      _.sort(_).map((_, _) =>
        (0, _.jsxs)(
          `div`,
          {
            children: [
              (0, _.jsx)(`div`, {
                children: _.line,
              }),
              (0, _.jsx)(`div`, {
                children: _.key,
              }),
              (0, _.jsx)(`div`, {
                children: _.field,
              }),
              (0, _.jsx)(`div`, {
                children: _.input,
              }),
              (0, _.jsx)(`div`, {
                children: _.message,
              }),
            ],
          },
          `${_.key}.${_.field}.${_}`,
        ),
      ),
    ],
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _, hideTitle: _ = !1 } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    title: _ ? void 0 : _(`#AchievementEditor_Achievement_Edit_Hidden`),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _, hideTitle: _ = !1 } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    title: _ ? void 0 : _(`#AchievementEditor_Achievement_Edit_Visible`),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _, hideTitle: _ = !1 } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    title: _ ? void 0 : _(`#AchievementEditor_Achievement_Edit_Archived`),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: (0, _.jsx)(_, {
      color: `var(--color-error)`,
    }),
  });
}
function _(_, _) {
  let _ = (_.line ?? 0) - (_.line ?? 0);
  return (
    _ != 0 ||
      ((_ = _.key.localeCompare(_.key)), _ != 0) ||
      (_ = _.field.localeCompare(_.field)),
    _
  );
}
var _ = `PanFifvVcsQ-`,
  _ = `IqT5rNi7YAs-`,
  _ = `PtXSINNzCP0-`,
  _ = `hDSrn4dlQ1Q-`,
  _ = `wLj2jhbWxtM-`,
  _ = `A9CtEB-WbD8-`,
  _ = `V33-ZCcC1uo-`,
  _ = `PGP8efbnSBE-`,
  _ = `hgpOtPMr7Vs-`,
  _ = `_0w35UAPj9Hg-`,
  _ = `_6lEjP8FU3A8-`,
  _ = `lRH9HUqEz7w-`,
  _ = `-Af0tG1YA7k-`,
  _ = `TXA-K1VzAsQ-`,
  _ = `HzDDIVt8bZg-`,
  _ = `VcmbKhlcjpk-`,
  _ = `mUuzxa-G6g0-`,
  _ = `XQCrNc6VvrA-`,
  _ = `ug0b7Jyfk0k-`,
  _ = `ddB5C3dCCCY-`,
  _ = `xjXkwfxm1QY-`,
  _ = `XaVPJbP5g0E-`,
  _ = `HG5NOwvm8pk-`,
  _ = `QCoxkFWUsk8-`,
  _ = `U6f4OlslI60-`,
  _ = `oXFOq7Lk89c-`,
  _ = `xkSerRysIgY-`,
  _ = `Y5R-KNN0oEI-`,
  _ = `wzgR7x1RR14-`,
  _ = `aaWAXLuryto-`,
  _ = `xR9BppARoEY-`;
function _(_, _, _) {
  let [_, _] = (0, _.useState)(_(_));
  return {
    value: _.success ? _.data : _.input,
    setValue: (_) => {
      let _ = _(_);
      (_ || _.success) && _(_);
    },
    isValid: _.success,
    issues: _.issues,
  };
}
function _(_) {
  return (_) => {
    let _ = _.safeParse(_);
    return {
      success: _.success,
      data: _.data,
      input: _,
      issues: _.success ? void 0 : _.error?.issues.map((_) => _.message),
    };
  };
}
function _(_) {
  let { label: _, value: _, setValue: _, isValid: _, issues: _, ..._ } = _,
    _ = (0, _.useId)(),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(_, {
    labelId: _,
    label: _,
    isValid: !_ || _,
    issues: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        value: _,
        onTextChange: (_) => {
          (_(!0), _(_));
        },
        onBlur: () => {
          _(!0);
        },
        "aria-labelledby": _,
        ..._,
      }),
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  let { label: _, description: _, labelId: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      _ &&
        (0, _.jsx)(`h2`, {
          _: _,
          children: _,
        }),
      _ &&
        (0, _.jsx)(_, {
          contrast: `description`,
          children: _,
        }),
      _,
    ],
  });
}
function _(_) {
  let {
    label: _,
    description: _,
    labelId: _,
    issues: _,
    isValid: _,
    children: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ ? void 0 : _),
    children: [
      (0, _.jsx)(_, {
        label: _,
        description: _,
        labelId: _,
        children: _,
      }),
      !_ &&
        _ !== void 0 &&
        (typeof _ == `string`
          ? (0, _.jsxs)(`span`, {
              className: `tEufAkxnSTo-`,
              children: [
                (0, _.jsx)(_, {
                  color: `var(--color-invalid)`,
                }),
                ` `,
                _,
              ],
            })
          : _.map((_, _) =>
              (0, _.jsxs)(
                `span`,
                {
                  className: `tEufAkxnSTo-`,
                  children: [
                    (0, _.jsx)(_, {
                      color: `var(--color-invalid)`,
                    }),
                    ` `,
                    _,
                  ],
                },
                _,
              ),
            )),
    ],
  });
}
var _ = _().regex(/^-?\d+(?:\.\d*)?$/),
  _ = {
    decode: (_) => Number.parseFloat(_),
    encode: (_) => _.toString(),
  },
  _ = _(_, _(), _),
  _ = _().regex(_),
  _ = {
    decode: (_) => Number.parseInt(_, 10),
    encode: (_) => _.toString(),
  },
  _ = _(_, _(), _);
function _(_) {
  let _ = _?.type == `INT` ? _.transform(_.decode) : _.transform(_.decode),
    _ = _?.type == `INT` ? [0, _.int32[1]] : [0, _.float32[1]],
    _ = _.default(0).parse(_?.min),
    _ = _.default(_[1]).parse(_?.max),
    _ = _?.type == `INT` ? _().int() : _(),
    _ = _(
      _({
        min_val: _.min(_),
        max_val: _.max(_),
      })
        .optional()
        .refine((_) => _ === void 0 || _.min_val < _.max_val, {
          error: _(`#AchievementEditor_Validator_Error_MinGreaterThanMax`),
        }),
    );
  return {
    hasStat: _ !== void 0,
    hasMin: _?.min !== void 0,
    hasMax: _?.max !== void 0,
    min: _,
    max: _,
    type: _?.type,
    validator: _,
  };
}
function _(_) {
  let {
      appID: _,
      progress: _,
      setProgress: _,
      hasStat: _,
      hasMin: _,
      hasMax: _,
      min: _,
      max: _,
      type: _ = `FLOAT`,
      validator: _,
    } = _,
    _ = (0, _.useId)(),
    _ = _(_) ?? [];
  function _(_) {
    if (_ === void 0) {
      _(void 0);
      return;
    }
    let _ = _.find((_) => _.name == _);
    _({
      min_val: _?.min,
      max_val: _?.max,
      value: {
        operand1: _,
        operation: `statvalue`,
      },
    });
  }
  function _(_) {
    let _ = {
      value: _.value,
      min_val: _[0].toString(),
      max_val: _[1].toString(),
    };
    _(_);
  }
  function _(_) {
    if (!_) return;
    let _ = _.find((_) => _.name == _);
    return `${_.name} (${_.type} ${_.min ?? 0} - ${_.max ?? `∞`})`;
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        labelId: _,
        label: _(`#AchievementEditor_Achievement_Edit_ProgressStat`),
        description: _(
          `#AchievementEditor_Achievement_Edit_ProgressStat_Description`,
        ),
        children: (0, _.jsx)(_, {
          "aria-labelledby": _,
          options: _.map((_) => _.name),
          getOptionLabel: _,
          selectedValue: _?.value?.operand1,
          onSelectionChange: _,
          placeholder: ``,
          filterPlaceholder: ``,
          clearable: !0,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          showSlider: _ && _,
          min: _,
          max: _,
          integer: _ == `INT`,
          validator: _,
          value: [
            _().default(_).parse(_?.min_val),
            _().default(_).parse(_?.max_val),
          ],
          setValue: _,
        }),
    ],
  });
}
function _(_) {
  let {
      showSlider: _ = !1,
      min: _,
      max: _,
      validator: _,
      integer: _,
      value: _,
    } = _,
    _ = (0, _.useId)();
  _ && _().int();
  let _ = _({
    min_val: _[0],
    max_val: _[1],
  });
  return (0, _.jsx)(_, {
    labelId: _,
    label: _(`#AchievementEditor_Achievement_Edit_ProgressStatRange`),
    isValid: _.success,
    issues: _.success ? void 0 : _.issues?.map((_) => _),
    children: _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : (0, _.jsx)(_, {
          ..._,
        }),
  });
}
function _(_) {
  let { min: _, max: _, integer: _, value: _, setValue: _ } = _,
    _ = _ ? 1 : 0.1,
    _ = [_(_[0], _, _), _(_[1], _, _)];
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        value: _,
        onValueChange: _,
        min: _,
        max: _,
        step: _,
      }),
    ],
  });
}
function _(_) {
  let { value: _, setValue: _, integer: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          placeholder: _(
            `#AchievementEditor_Achievement_Edit_Stat_Min_Placeholder`,
          ),
          value: _[0],
          integer: _,
          onValueChange: (_) => _([_, _[1]]),
        }),
      }),
      (0, _.jsx)(`span`, {
        children: ` - `,
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          placeholder: _(
            `#AchievementEditor_Achievement_Edit_Stat_Max_Placeholder`,
          ),
          value: _[1],
          integer: _,
          onValueChange: (_) => _([_[0], _]),
        }),
      }),
    ],
  });
}
function _(_) {
  let { defaultValue: _ = 0, integer: _ = !1, ..._ } = _,
    _ = _ ? _ : _;
  function _(_) {
    let _ = _.safeDecode(_);
    return _.success ? _.data : void 0;
  }
  return (0, _.jsx)(_, {
    valueToString: (_) => _.safeEncode(_).data,
    valueFromString: _,
    checkValidText: (_, _) => !_ || (_ !== _ && !isNaN(_)),
    ..._,
  });
}
function _(_) {
  let {
      achievements: _,
      compact: _ = !1,
      editable: _ = !0,
      contentBefore: _,
      headerContentBefore: _,
      setBulkMove: _,
    } = _,
    _ = _(),
    _ = _(_, _ ? _ : void 0, _ === void 0 ? void 0 : _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ !== void 0 &&
            (0, _.jsx)(`div`, {
              className: `Jt028pd0CaM-`,
              children: _ !== void 0 && _(),
            }),
          (0, _.jsx)(`div`, {
            children:
              !_ &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(_, {
                  size: `1`,
                  onClick: _,
                  children: (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, _.jsx)(_, {
                        width: `1em`,
                        height: `1em`,
                        style: {
                          verticalAlign: `middle`,
                          display: `inline-block`,
                          outline: `1px solid currentColor`,
                        },
                      }),
                      _(`#AchievementEditor_AchievementsTable_Header_BulkMove`),
                    ],
                  }),
                }),
              }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(
              _
                ? `#AchievementEditor_Achievement_Edit_DisplayName`
                : `#AchievementEditor_AchievementsTable_Header_NameDescription`,
            ),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#AchievementEditor_AchievementsTable_Header_ApiName`),
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              children: _(`#AchievementEditor_AchievementsTable_Header_SetBy`),
            }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: `k6H-umvyNh4-`,
              children: _(
                `#AchievementEditor_AchievementsTable_Header_Availability`,
              ),
            }),
          (0, _.jsx)(`div`, {}),
        ],
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            achievement: _,
            nameDescCounts: _,
            compact: _,
            editable: _,
            contentBefore: _,
          },
          `ach_${_.statID}_${_.bitID}`,
        ),
      ),
    ],
  });
}
function _(_) {
  return Object.entries(
    typeof _ == `string`
      ? {
          english: _,
        }
      : (_ ?? {}),
  ).some(([_, _]) => _ != `token` && _?.trim().startsWith(`NEW_ACHIEVEMENT_`));
}
function _(_, _, _) {
  return _.flatMap((_) => {
    let _ = _(_, _)?.trim(),
      _ = _(_, _)?.trim();
    return _ && _
      ? [
          {
            language: _,
            key: `${_}\n${_}\n${_}`.toLowerCase(),
          },
        ]
      : [];
  });
}
function _() {
  let { appID: _ } = _(),
    _ = _(_),
    _ = _(_) ?? [],
    _ = new Map();
  for (let _ of _)
    for (let { key: _ } of _(_.display?.name, _.display?.desc, _))
      _.set(_, (_.get(_) ?? 0) + 1);
  return _;
}
function _(_, _, _, _, _) {
  let _ = new Set(
    _(_?.display?.name, _?.display?.desc, _).map(({ key: _ }) => _),
  );
  return _(_, _, _)
    .filter(({ key: _ }) => (_.get(_) ?? 0) > +!!_.has(_))
    .map(({ language: _ }) => _);
}
function _(_) {
  return _(
    `#AchievementEditor_Achievement_Warn_DuplicateText`,
    _.map((_) => _(`#Language_${_}`)).join(`, `),
  );
}
function _(_) {
  let { achievement: _, nameDescCounts: _ } = _,
    { appID: _ } = _(),
    _ = _(_),
    { name: _, desc: _ } = _.display ?? {},
    _ = _(_, _, _, _, _),
    _ = [
      (_(_) || _(_)) &&
        _(`#AchievementEditor_Achievement_Warn_EditorDefaultText`),
      _.length > 0 && _(_),
    ].filter((_) => !!_);
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        toolTipContent: _.join(` `),
        style: {
          height: `1.2em`,
          maxWidth: `300px`,
          whiteSpace: `normal`,
        },
        children: (0, _.jsx)(_, {
          color: `var(--color-warning)`,
        }),
      });
}
function _(_) {
  let {
      achievement: _,
      nameDescCounts: _,
      compact: _,
      editable: _,
      contentBefore: _,
    } = _,
    { existingAchievement: _, globalUnlockPercentage: _ } = _(
      _.statID,
      _.bitID,
    ),
    { appID: _ } = _(),
    _ = _(_, _.groupid),
    _ = _(_.groupid, _),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = () => {
      _(!1);
    },
    _ = () => {
      _(!1);
    },
    _ = _ ? 32 : 64;
  return (0, _.jsxs)(`div`, {
    children: [
      _
        ? (0, _.jsx)(_, {
            achievement: _,
            onSave: _,
            onCancel: _,
          })
        : (0, _.jsxs)(_.Fragment, {
            children: [
              _ !== void 0 &&
                (0, _.jsxs)(`div`, {
                  className: `Jt028pd0CaM-`,
                  children: [_(_), ` `],
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    achievement: _,
                    achieved: !0,
                    size: _,
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      achievement: _,
                      achieved: !1,
                      size: _,
                    }),
                ],
              }),
              (0, _.jsxs)(_, {
                direction: `column`,
                children: [
                  (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `1`,
                    align: `center`,
                    children: [
                      (0, _.jsx)(_, {
                        weight: `heavy`,
                        contrast: `title`,
                        children: (0, _.jsx)(_, {
                          text: _.display?.name,
                        }),
                      }),
                      (0, _.jsx)(_, {
                        achievement: _,
                        nameDescCounts: _,
                      }),
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_, {
                        text: _.display?.desc,
                      }),
                    }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    children: _.name,
                  }),
                  !_ &&
                    (0, _.jsx)(`div`, {
                      children: _.progress
                        ? `${_.progress.value.operand1} ${_.progress.min_val} - ${_.progress.max_val}`
                        : ``,
                    }),
                ],
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: _[_.permission ?? 0],
                }),
              !_ &&
                (0, _.jsxs)(`div`, {
                  className: `k6H-umvyNh4-`,
                  children: [
                    _.display?.hidden == `1` &&
                      (0, _.jsx)(`div`, {
                        children: _(
                          `#AchievementEditor_Achievement_Edit_Spoiler`,
                        ),
                      }),
                    _.archived == `1` &&
                      (0, _.jsx)(`div`, {
                        children: _(
                          `#AchievementEditor_Achievement_Edit_Archived`,
                        ),
                      }),
                  ],
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  !_ &&
                    _ &&
                    (0, _.jsxs)(`div`, {
                      children: [
                        (0, _.jsx)(_, {
                          onClick: () => {
                            _(!0);
                          },
                        }),
                        (0, _.jsx)(_, {
                          onClick: () => {
                            _(!0);
                          },
                        }),
                      ],
                    }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      !!_ &&
                        (0, _.jsx)(_.Fragment, {
                          children: (0, _.jsxs)(_, {
                            toolTipContent: _(
                              `#AchievementEditor_AchievementsTable_GlobalRate_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              whiteSpace: `nowrap`,
                            },
                            children: [
                              (0, _.jsx)(_, {
                                className: `lvPFLhlIVlQ-`,
                              }),
                              _(_ ?? 0),
                            ],
                          }),
                        }),
                      (0, _.jsx)(_, {
                        toolTipContent: (0, _.jsx)(_, {
                          background: `dull-5`,
                          padding: `2`,
                          children: (0, _.jsx)(_, {
                            ..._,
                          }),
                        }),
                        direction: `bottom`,
                        style: {
                          verticalAlign: `middle`,
                          whiteSpace: `nowrap`,
                        },
                        children: (0, _.jsx)(_, {
                          hidden: !_?.visible,
                          className: _,
                          omitText: !0,
                        }),
                      }),
                      _(`#AchievementEditor_AchievementsTable_Header_ID`),
                      `: `,
                      _.statID,
                      `.`,
                      _.bitID,
                    ],
                  }),
                ],
              }),
            ],
          }),
      _ &&
        (0, _.jsx)(_, {
          achievement: _,
          hideModal: () => {
            _(!1);
          },
        }),
    ],
  });
}
function _(_) {
  let { achievement: _, hideModal: _ } = _,
    { appID: _ } = _(),
    { existingAchievement: _, globalUnlockPercentage: _ } = _(
      _.statID,
      _.bitID,
    ),
    _ = _ && _ > 0,
    _ = _(_, _.statID, _.bitID);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      onEscKeypress: _,
      children: (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            children: _(`#AchievementEditor_Achievement_Delete_Dialog_Title`),
          }),
          (0, _.jsxs)(_, {
            children: [
              _ &&
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `1`,
                  align: `center`,
                  style: {
                    color: `var(--color-error)`,
                  },
                  children: [
                    (0, _.jsx)(_, {}),
                    _(
                      `#AchievementEditor_Achievement_Delete_Warn_LiveAchievement`,
                    ),
                  ],
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    children: (0, _.jsx)(_, {
                      achievement: _,
                      achieved: !0,
                    }),
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsxs)(`div`, {
                            children: [
                              _(`#AchievementEditor_Achievement_Edit_ApiName`),
                              `:`,
                            ],
                          }),
                          (0, _.jsx)(`div`, {
                            children: _.name,
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsxs)(`div`, {
                            children: [
                              _(
                                `#AchievementEditor_Achievement_Edit_DisplayName`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, _.jsx)(`div`, {
                            children:
                              _(_.display?.name, `english`) ??
                              _(_.display?.name, `token`),
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsxs)(`div`, {
                            children: [
                              _(
                                `#AchievementEditor_Achievement_Edit_Description`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, _.jsx)(`div`, {
                            children:
                              _(_.display?.desc, `english`) ??
                              _(_.display?.desc, `token`),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              saveText: _(
                `#AchievementEditor_Achievement_Delete_Dialog_Delete`,
              ),
              saveColor: `red`,
              pending: _.isPending,
              error: _.error?.message,
              onCancel: _,
              onSave: () =>
                _.mutate(void 0, {
                  onSuccess: _,
                }),
            }),
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    bNewAchievement: !0,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    bNewAchievement: !1,
    ..._,
  });
}
function _(_) {
  let {
      onSave: _,
      onCancel: _,
      bNewAchievement: _,
      achievement: _,
      groupid: _,
    } = _,
    { appID: _, cdnRoot: _ } = _(),
    _ = _(_) ?? [],
    _ = _(_),
    { globalUnlockPercentage: _ } = _(_?.statID, _?.bitID),
    _ = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(
      () =>
        new Set(
          (_ ?? [])
            .filter((_) => _.statID != _?.statID || _.bitID != _?.bitID)
            .map((_) => _.name?.trim().toUpperCase()),
        ),
      [_, _?.statID, _?.bitID],
    ),
    _ = (0, _.useMemo)(
      () =>
        _(
          _()
            .refine((_) => _.trim().length > 0, {
              error: _(
                `#AchievementEditor_Achievement_Edit_ApiName_Error_Required`,
              ),
            })
            .refine((_) => !_.has(_.trim().toUpperCase()), {
              error: _(
                `#AchievementEditor_Achievement_Edit_ApiName_Error_Duplicate`,
              ),
            }),
        ),
      [_],
    ),
    { value: _, setValue: _, isValid: _, issues: _ } = _(_?.name, _, !0),
    [_, _] = _.useState(_?.permission ?? _.Client),
    [_, _] = _.useState(_?.display?.hidden == `1`),
    [_, _] = _.useState(_?.archived == `1`),
    [_, _] = _.useState(_?.groupid ?? _),
    [_, _] = _.useState(
      _?.display?.name ?? {
        token: `${_}_NAME`,
      },
    ),
    [_, _] = _.useState(
      _?.display?.desc ?? {
        token: `${_}_DESC`,
      },
    ),
    _ = _?.[_?.groupid ?? _],
    _ = _(_, _),
    _ = _(_, _?.[_]),
    [_, _] = _.useState(_?.progress ?? void 0),
    _ = _(_ ? _.find((_) => _.name == _.value.operand1) : void 0),
    _ =
      !_ ||
      _.validator(
        _({
          min_val: _(),
          max_val: _(),
        }).safeParse(_).data,
      ).success,
    _ = _(),
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_) || _(_),
    _ = _(_, _, _ ? void 0 : _, _, _),
    _ = _ && _ && _.length == 0,
    [_, _] = _.useState(
      _?.display?.icon
        ? {
            image: _ + _?.display?.icon,
            imageType: 1,
            filenameWithoutExtension: _?.name,
          }
        : void 0,
    ),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(
      _?.display?.icon_gray
        ? {
            image: _ + _?.display?.icon_gray,
            imageType: 1,
            filenameWithoutExtension: _?.name,
          }
        : void 0,
    ),
    _ = async (_) => {
      try {
        (_(void 0),
          _({
            image: await _(_),
            imageType: 1,
            filenameWithoutExtension: _,
          }));
      } catch {
        _(_(`#AchievementEditor_Image_Error_GrayscaleFailed`));
      }
    },
    _ = async (_) => {
      (_(_), _ || (await _(_.image)));
    },
    _ = () => _(_.image),
    _ = (_) => {
      if (_ && _.value.operand1) {
        _(_);
        let _ = _.find((_) => _.name == _.value.operand1);
        _ && _(_.permission);
      } else (_(void 0), _(_?.permission ?? _.Client));
    },
    _ = _(_, _ ? null : _.statID, _ ? null : _.bitID),
    _ = () => {
      let _ = _.trim(),
        _ = _(_?.display?.name?.token, _?.name, `name`, _),
        _ = _(_?.display?.desc?.token, _?.name, `desc`, _),
        _ = _(_?.display?.name, _),
        _ = _(_?.display?.desc, _),
        _ = _(_, _),
        _ = _(_, _),
        _ = {
          ..._,
          name: _,
          groupid: _,
          permission: _,
          archived: _ ? `1` : `0`,
          display: {
            ..._?.display,
            name: {
              ..._,
              ..._,
              token: _,
            },
            desc: {
              ..._,
              ..._,
              token: _,
            },
            hidden: _ ? `1` : `0`,
          },
          progress: _,
        };
      _.mutate(
        {
          achievement: _,
          icon: _?.image,
          icon_gray: _?.image,
        },
        {
          onSuccess: () => {
            _ && _(_);
          },
        },
      );
    },
    _;
  return (
    _ && _.visible && _.hasprogress
      ? (_ = (0, _.jsx)(_, {
          text: _(`#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`),
        }))
      : _.visible && !_.visible && (_ ?? 0) > 0
        ? (_ = (0, _.jsx)(_, {
            text: _(
              `#AchievementEditor_Achievement_Edit_Group_Warn_HidingAchievement`,
            ),
          }))
        : _?.groupid != _ &&
          _.visible &&
          _.hasprogress &&
          (_ = (0, _.jsx)(_, {
            text: _(
              `#AchievementEditor_Achievement_Edit_Group_Warn_BreakCompletion`,
            ),
          })),
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`form`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`h1`, {
              children: _(
                _
                  ? `#AchievementEditor_Achievement_Edit_Title_New`
                  : `#AchievementEditor_Achievement_Edit_Title_Edit`,
              ),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  paddingRight: `10px`,
                },
                children: (0, _.jsx)(`div`, {
                  children: (0, _.jsxs)(_, {
                    columns: `repeat(2, max-content)`,
                    gapX: `3`,
                    margin: `0`,
                    padding: `0`,
                    paddingTop: `2`,
                    children: [
                      (0, _.jsxs)(_, {
                        direction: `column`,
                        gap: `1`,
                        wrap: `wrap`,
                        width: `min-content`,
                        children: [
                          (0, _.jsx)(`h2`, {
                            children: (0, _.jsx)(_, {
                              size: `2`,
                              children: _(
                                `#AchievementEditor_Achievement_Edit_Icons_Achieved`,
                              ),
                            }),
                          }),
                          (0, _.jsx)(_, {
                            icon: _,
                            setIcon: _,
                            achievement: _,
                          }),
                        ],
                      }),
                      (0, _.jsxs)(_, {
                        direction: `column`,
                        gap: `1`,
                        wrap: `wrap`,
                        width: `min-content`,
                        children: [
                          (0, _.jsx)(`h2`, {
                            children: (0, _.jsx)(_, {
                              size: `2`,
                              children: _(
                                `#AchievementEditor_Achievement_Edit_Icons_Unachieved`,
                              ),
                            }),
                          }),
                          (0, _.jsx)(_, {
                            icon: _,
                            setIcon: _,
                            achievement: _,
                          }),
                          !!_ &&
                            (0, _.jsx)(_, {
                              color: `dull`,
                              onClick: _,
                              children: _(
                                `#AchievementEditor_Achievement_Edit_Icons_Button_Generate`,
                              ),
                            }),
                          !!_ &&
                            (0, _.jsx)(_, {
                              text: _,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(_, {
                    label: _(`#AchievementEditor_Achievement_Edit_ApiName`),
                    placeholder: _(
                      `#AchievementEditor_Achievement_Edit_ApiName_Placeholder`,
                    ),
                    value: _,
                    isValid: _,
                    setValue: _,
                    issues: _,
                    autoFocus: _?.name === void 0,
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`h2`, {
                        children: [
                          _(`#AchievementEditor_Achievement_Edit_SetBy`),
                          !!_ &&
                            (0, _.jsxs)(_, {
                              contrast: `description`,
                              children: [
                                (0, _.jsx)(`div`, {
                                  className: `_2Vmz8R6AMU4-`,
                                  children: (0, _.jsx)(_, {}),
                                }),
                                _(
                                  `#AchievementEditor_Achievement_Edit_SetByProgressStat`,
                                ),
                              ],
                            }),
                        ],
                      }),
                      _
                        ? (0, _.jsx)(_, {
                            disabled: !0,
                            children: _[_ ?? _.Client],
                          })
                        : (0, _.jsx)(_, {
                            options: Object.values(_).filter(
                              (_) => typeof _ == `number`,
                            ),
                            getOptionLabel: (_) => _[_],
                            selectedValue: _,
                            onSelectionChange: (_) => {
                              _(_ ?? _.Client);
                            },
                          }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    appID: _,
                    progress: _,
                    setProgress: _,
                    ..._,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`h2`, {
                            children: _(
                              `#AchievementEditor_Achievement_Edit_DisplayName`,
                            ),
                          }),
                          (0, _.jsx)(_, {
                            locstring: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        value: _,
                        setValue: _,
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`h2`, {
                            children: _(
                              `#AchievementEditor_Achievement_Edit_Description`,
                            ),
                          }),
                          (0, _.jsx)(_, {
                            locstring: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        multiline: !0,
                        value: _,
                        setValue: _,
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          text: _(
                            `#AchievementEditor_Achievement_Warn_EditorDefaultText`,
                          ),
                        }),
                      _.length > 0 &&
                        (0, _.jsx)(_, {
                          text: _(_),
                        }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(`h2`, {
                        children: _(
                          `#AchievementEditor_Achievement_Edit_Group`,
                        ),
                      }),
                      _,
                      (0, _.jsx)(_, {
                        selectedValue: _ ?? `0`,
                        onSelectionChange: _,
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(`h2`, {
                        children: _(
                          `#AchievementEditor_Achievement_Edit_Status`,
                        ),
                      }),
                      (0, _.jsxs)(_, {
                        direction: `column`,
                        gap: `1`,
                        justify: `between`,
                        children: [
                          (0, _.jsx)(_, {
                            toolTipContent: _(
                              `#AchievementEditor_Achievement_Edit_Spoiler_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              maxWidth: `300px`,
                              whiteSpace: `normal`,
                            },
                            children: (0, _.jsx)(_, {
                              direction: `column`,
                              flexGrow: `1`,
                              padding: `1`,
                              align: `start`,
                              className: _,
                              children: (0, _.jsx)(_, {
                                checked: _,
                                onChange: _,
                                align: `start`,
                                children: (0, _.jsxs)(_, {
                                  direction: `column`,
                                  children: [
                                    (0, _.jsx)(_, {
                                      weight: `heavy`,
                                      children: _(
                                        `#AchievementEditor_Achievement_Edit_Spoiler`,
                                      ),
                                    }),
                                    (0, _.jsx)(_, {
                                      children: _(
                                        `#AchievementEditor_Achievement_Edit_SpoilerDesc`,
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, _.jsx)(_, {
                            toolTipContent: _(
                              `#AchievementEditor_Achievement_Edit_Archived_Tooltip`,
                            ),
                            style: {
                              verticalAlign: `middle`,
                              maxWidth: `300px`,
                              whiteSpace: `normal`,
                            },
                            children: (0, _.jsx)(_, {
                              direction: `column`,
                              flexGrow: `1`,
                              padding: `1`,
                              align: `start`,
                              className: _,
                              children: (0, _.jsx)(_, {
                                checked: _,
                                onChange: _,
                                align: `start`,
                                children: (0, _.jsxs)(_, {
                                  direction: `column`,
                                  children: [
                                    (0, _.jsx)(_, {
                                      weight: `heavy`,
                                      children: _(
                                        `#AchievementEditor_Achievement_Edit_Archived`,
                                      ),
                                    }),
                                    (0, _.jsx)(_, {
                                      children: _(
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
          (0, _.jsx)(_, {
            saveDisabled: !_,
            pending: _.isPending,
            error: _.error?.message,
            onSave: _,
            onCancel: _,
          }),
        ],
      }),
    })
  );
}
var _ = 256;
function _(_) {
  let { icon: _, setIcon: _, achievement: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = _.useState(void 0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        className: _,
        onUpload: (_) => {
          (_(void 0), _(_));
        },
        onError: _,
        forceSquare: !0,
        maxDimension: _,
        fileInputRef: _,
        children: _
          ? (0, _.jsx)(_, {
              image: _,
              size: 128,
            })
          : (0, _.jsx)(_, {
              achievement: _,
              achieved: !0,
              size: 128,
              showWarningOnEmpty: !1,
            }),
      }),
      !!_ &&
        (0, _.jsx)(_, {
          text: _,
        }),
      (0, _.jsx)(_, {
        color: `accent-7`,
        children: _(`#AchievementEditor_Achievement_Edit_Icons_DragHelp`),
      }),
      (0, _.jsx)(_, {
        color: `dull`,
        onClick: () => _.current.click(),
        children: _(
          `#AchievementEditor_Achievement_Edit_Icons_Button_SelectFile`,
        ),
      }),
    ],
  });
}
var _ = `VTwMpiu5hm8-`,
  _ = `NpZA8fe6Ha8-`,
  _ = `lzUEN3r8v2E-`,
  _ = `_1zIXZ54DvC0-`,
  _ = `_9tyDx-RnbZ0-`,
  _ = `wDboaZvyEPo-`,
  _ = `XCmTDkx3Qqc-`,
  _ = `twyu1uer6Ys-`,
  _ = `vwhKlxW7KCM-`,
  _ = `kxAxiGJQBVE-`,
  _ = `_1eK42W2md-E-`,
  _ = `zjVQ2flCoyk-`,
  _ = `KUvDm8vp-Zs-`,
  _ = `bGJEHWhdDPA-`,
  _ = `Dp4B7Rn8aQ8-`,
  _ = `q8bMsHJQD9A-`,
  _ = `Kx6HB4JhMUQ-`,
  _ = `-tmkb6bqEAU-`,
  _ = `X4EYZvz--Es-`,
  _ = `mBqXy6qapwM-`,
  _ = `Xa95CswauZA-`,
  _ = `oh58pYM8gBE-`,
  _ = `n9FuF6n8Vdo-`,
  _ = `_6Hv3k2Yy8YU-`,
  _ = `nJGgmJBp4uY-`,
  _ = `Bpz34x6P8ao-`,
  _ = `iIb1H1xn1Os-`,
  _ = `GFxh-R0RglE-`,
  _ = `uYo-jtvTTp0-`,
  _ = `mln46SGaN-g-`,
  _ = `E2wuLyCbYTE-`;
function _(_, _, _) {
  if (!_)
    return {
      included: _,
      excluded: [],
    };
  let _ = _.replace(/[#-.]|[[-^]|[?|{}]/g, `\\$&`),
    _ = RegExp(`.*${_ ?? ``}.*`, `i`),
    _ = (_) => {
      let _ = _(_.display?.name, _ ?? `english`),
        _ = _(_.display?.desc, _ ?? `english`);
      return (
        !_ || _ === `` || !!_.name.match(_) || !!_?.match(_) || !!_?.match(_)
      );
    };
  return (_ ?? []).reduce(
    (_, _) => (_(_) ? _.included.push(_) : _.excluded.push(_), _),
    {
      included: [],
      excluded: [],
    },
  );
}
function _(_) {
  let {
      reordering: _,
      setReordering: _,
      creatingNewGroup: _,
      setCreatingNewGroup: _,
    } = _,
    { appID: _ } = _(),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#AchievementEditor_Reorder_Description`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  groupid: null,
                  group: null,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`h2`, {
                    children: _(`#AchievementEditor_Reorder_NotDefault`),
                  }),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              groups: _,
              onSave: () => _(!1),
              onCancel: () => _(!1),
            }),
          ],
        }),
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !!_ &&
                (0, _.jsx)(_, {
                  groupid: null,
                  group: null,
                }),
              !!_ &&
                _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      groupid: _.groupid,
                      group: _,
                    },
                    _.groupid,
                  ),
                ),
            ],
          }),
          (0, _.jsx)(`div`, {
            children: _
              ? (0, _.jsx)(
                  _,
                  {
                    groupid: ``,
                    group: null,
                    bNewGroup: !0,
                    onSave: () => _(!1),
                    onCancel: () => _(!1),
                  },
                  `kg_newgroup`,
                )
              : !_ &&
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, _.jsxs)(_, {
                      variant: `vibrant`,
                      disabled: !_,
                      onClick: () => _(!0),
                      children: [
                        (0, _.jsx)(_, {
                          width: `14`,
                          height: `14`,
                          fill: `currentColor`,
                          className: `E2wuLyCbYTE-`,
                        }),
                        ` `,
                        _(`#AchievementEditor_Button_CreateNewGroup`),
                      ],
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        contrast: `description`,
                        children: _(`#AchievementEditor_Group_LimitReached`),
                      }),
                  ],
                }),
          }),
        ],
      });
}
function _(_) {
  let { groups: _, onSave: _, onCancel: _ } = _,
    { appID: _ } = _(),
    [_, _] = _.useState(_),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onDragEnd: function (_) {
          if (!_.destination) return;
          let _ = [..._],
            [_] = _.splice(_.source.index, 1);
          (_.splice(_.destination.index, 0, _), _(_));
        },
        children: (0, _.jsx)(_, {
          droppableId: `droppable`,
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          direction: `vertical`,
          children: (_) =>
            (0, _.jsxs)(`div`, {
              className: _,
              ..._.droppableProps,
              ref: _.innerRef,
              children: [
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      draggableId: _.groupid,
                      index: _,
                      children: (_) =>
                        (0, _.jsx)(_, {
                          groupid: _.groupid,
                          group: _,
                          ref: _?.innerRef,
                          ..._?.draggableProps,
                          ..._?.dragHandleProps,
                        }),
                    },
                    _.groupid,
                  ),
                ),
                _.placeholder,
              ],
            }),
        }),
      }),
      (0, _.jsx)(_, {
        pending: _.isPending,
        error: _.error?.message,
        onSave: () =>
          _.mutate(
            _.map((_) => _.groupid),
            {
              onSuccess: _,
            },
          ),
        onCancel: _,
      }),
    ],
  });
}
function _(_) {
  let { groupid: _, group: _, bNewGroup: _, onSave: _, onCancel: _ } = _,
    { appID: _, filter: _, localization: _ } = _(),
    { currentLanguage: _ } = _,
    _ = _(_, _),
    _ = _(_, _),
    _ = _(),
    _ =
      _.visible &&
      Object.values(_ ?? {}).some((_) => (_.globalUnlockPercentage ?? 0) > 0),
    [_, _] = _.useState(_),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _
      ? void 0
      : [
          {
            key: `edit`,
            label: _(`#AchievementEditor_Group_Tools_Edit`),
            icon: () => (0, _.jsx)(_, {}),
            action: () => _(!0),
          },
          {
            key: `delete`,
            label: _(`#AchievementEditor_Group_Tools_Delete`),
            icon: () => (0, _.jsx)(_, {}),
            action: () => _(!0),
          },
        ].filter((_) => (_.key == `edit` ? !!_ : _.key != `delete` || !!_)),
    _ = async () => {
      (_(!1), _ && _());
    },
    _ = () => {
      (_(!1), _ && _());
    },
    _ = (0, _.jsx)(_, {
      variant: `vibrant`,
      onClick: () => _(!0),
      children: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            width: `14`,
            height: `14`,
            fill: `currentColor`,
            className: _,
          }),
          ` `,
          _(`#AchievementEditor_Group_CreateAchievement`),
        ],
      }),
    });
  return (
    _ &&
      (_ = (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        align: `center`,
        children: [
          _,
          (0, _.jsxs)(_, {
            align: `center`,
            gap: `1`,
            children: [
              (0, _.jsx)(_, {
                color: `var(--color-amber-9)`,
              }),
              (0, _.jsxs)(_, {
                color: `amber-9`,
                children: [
                  ` `,
                  _(`#AchievementEditor_Group_CreateAchievement_WarnLiveGroup`),
                ],
              }),
            ],
          }),
        ],
      })),
    _
      ? _
        ? (0, _.jsx)(_, {
            onSave: _,
            onCancel: _,
          })
        : (0, _.jsx)(_, {
            groupid: _,
            group: _,
            onSave: _,
            onCancel: _,
          })
      : (0, _.jsxs)(_, {
          groupid: _,
          group: _,
          actions: _,
          collapsed: _,
          setCollapsed: _,
          children: [
            !_ &&
              (0, _.jsx)(`div`, {
                className: `HRoE3XMcGD8-`,
                children: _
                  ? (0, _.jsx)(_, {
                      groupid: _,
                      achievements: _,
                      filter: _,
                      currentLanguage: _,
                      onClose: () => _(!1),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          achievements: _,
                          filter: _,
                          currentLanguage: _,
                          setBulkMove: () => _(!0),
                        }),
                        (0, _.jsx)(`div`, {
                          children: _
                            ? (0, _.jsx)(_, {
                                achievement: null,
                                groupid: _,
                                onSave: (_) => _(!1),
                                onCancel: () => _(!1),
                              })
                            : _,
                        }),
                      ],
                    }),
              }),
            _ &&
              (0, _.jsx)(_, {
                groupid: _,
                group: _,
                hideModal: () => {
                  _(!1);
                },
              }),
          ],
        })
  );
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _(_, _),
    ..._,
  });
}
function _(_) {
  return `group-${_}`;
}
function _(_) {
  let {
      groupid: _,
      group: _,
      actions: _,
      children: _,
      className: _,
      collapsed: _,
      setCollapsed: _,
      ..._
    } = _,
    _ = _(_, _).visible ? _ : _;
  return (0, _.jsx)(`div`, {
    _: _(_),
    className: _(_, _, _),
    ..._,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          groupid: _,
          group: _,
          actions: _,
          collapsed: _,
          setCollapsed: _,
        }),
        _,
      ],
    }),
  });
}
function _(_) {
  let { groupid: _, group: _, actions: _, collapsed: _, setCollapsed: _ } = _,
    _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsxs)(`div`, {
              className: `kIbHWH3dJpY-`,
              children: [
                (0, _.jsx)(`h1`, {
                  children: _(
                    `#AchievementEditor_Group_CoreGameAchievements_Heading`,
                  ),
                }),
                (0, _.jsx)(`p`, {
                  children: _(
                    `#AchievementEditor_Group_CoreGameAchievements_Description`,
                  ),
                }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !!_ &&
                (0, _.jsx)(`div`, {
                  children: (0, _.jsx)(`h2`, {
                    children: (0, _.jsx)(_, {
                      text: _?.name,
                      missingStringLocToken: `#AchievementEditor_Group_MissingName`,
                    }),
                  }),
                }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `3`,
            children: [
              !!_ &&
                _.length > 0 &&
                (0, _.jsx)(_, {
                  actions: _,
                }),
              _ !== void 0 &&
                _ &&
                (0, _.jsx)(_, {
                  className: `MK5f0j786-k-`,
                  onClick: () => _(!_),
                  children: (0, _.jsx)(_, {
                    fill: `currentColor`,
                    angle: _ ? 0 : -90,
                  }),
                }),
            ],
          }),
          !!_ &&
            (0, _.jsxs)(`div`, {
              className: `hMVCf8IklLs-`,
              children: [`ID: `, _],
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { achievements: _, filter: _, currentLanguage: _, setBulkMove: _ } = _,
    _ = _(_, _, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.included.length > 0 &&
        (0, _.jsx)(_, {
          achievements: _.included,
          setBulkMove: _,
        }),
      _.excluded.length > 0 &&
        (0, _.jsxs)(`div`, {
          className: `Cvxn709ndd4-`,
          children: [
            (0, _.jsx)(_, {}),
            _(
              `#AchievementEditor_Group_Filtered_Achievements`,
              _.excluded.length,
            ),
          ],
        }),
      (!_ || _.length == 0) &&
        (0, _.jsx)(`div`, {
          className: `ZfWoMO3ph1o-`,
          children: _(`#AchievementEditor_Group_EmptyGroup_Description`),
        }),
    ],
  });
}
function _(_) {
  let {
      groupid: _,
      onClose: _,
      achievements: _,
      filter: _,
      currentLanguage: _,
    } = _,
    { appID: _ } = _(),
    _ = _(_, _, _),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)([]),
    _ = _(_) || {},
    _ = _(_),
    _ = new Set(_),
    _ = _ === _,
    _ = _(void 0, void 0, !0),
    _ = _[_],
    _ = _[_],
    _ = _(_, _),
    _ = _(_, _);
  _ && (_ = _.visibility);
  let _;
  _.visible && !_.visible
    ? (_ = (0, _.jsx)(_, {
        text: _(
          `#AchievementEditor_Group_MoveAchievements_Warn_HidingAchievements`,
        ),
      }))
    : _?.dlcappid != (_ ? _.editAppID : _?.dlcappid) &&
      _.visible &&
      _.hasprogress &&
      (_ = (0, _.jsx)(_, {
        text: _(
          `#AchievementEditor_Group_MoveAchievements_Warn_BreakCompletion`,
        ),
      }));
  let [_, _] = _.useState(_.included.length == _.length),
    _ = _(_),
    _ = (_, _) => {
      (_ ? _.add(_) : _.delete(_),
        _([..._]),
        _.size,
        _.included.length,
        (_.size == _.included.length) != _ && _(!_));
    },
    _ = (_) => {
      for (let _ of _.included) {
        let _ = _(_);
        _ ? _.add(_) : _.delete(_);
      }
      (_([..._]), _(_));
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.included.length > 0 &&
        (0, _.jsx)(_, {
          achievements: _.included,
          compact: !0,
          editable: !1,
          headerContentBefore: () =>
            (0, _.jsx)(`div`, {
              className: `bdjNQVAjF2k-`,
              children: (0, _.jsx)(_, {
                checked: _,
                onChange: _,
              }),
            }),
          contentBefore: (_) => {
            let _ = _(_);
            return (0, _.jsx)(`div`, {
              className: `bdjNQVAjF2k-`,
              children: (0, _.jsx)(_, {
                checked: _.has(_),
                onChange: (_) => _(_, _),
              }),
            });
          },
        }),
      _.excluded.length > 0 &&
        (0, _.jsxs)(`div`, {
          className: `Cvxn709ndd4-`,
          children: [
            (0, _.jsx)(_, {}),
            _(
              `#AchievementEditor_Group_Filtered_Achievements`,
              _.excluded.length,
            ),
          ],
        }),
      (!_ || _.length == 0) &&
        (0, _.jsx)(`div`, {
          className: `ZfWoMO3ph1o-`,
          children: _(`#AchievementEditor_Group_EmptyGroup_Description`),
        }),
      (0, _.jsxs)(_, {
        direction: _ ? `column` : `row`,
        justify: _ ? void 0 : `between`,
        align: _ ? void 0 : `end`,
        gap: `1`,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `1`,
            children: [
              _(
                `#AchievementEditor_Group_MoveAchievements_GroupSelect_Label`,
                _.size,
              ),
              `:`,
              (0, _.jsx)(_, {
                direction: `column`,
                align: `baseline`,
                gap: `1`,
                children: (0, _.jsx)(_, {
                  variant: `inset`,
                  selectedValue: _,
                  filter: _(_),
                  onSelectionChange: _,
                  allowCreate: _,
                }),
              }),
              _ &&
                (0, _.jsx)(_, {
                  bHideSaveCancelButtons: !0,
                  onCancel: () => {},
                  onSave: () => {},
                  state: _,
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `1`,
            justify: `end`,
            children: [
              _,
              (0, _.jsx)(_, {
                saveDisabled: _.length == 0 || _ == null,
                saveText: _(
                  `#AchievementEditor_Group_MoveAchievements_MoveButton`,
                ),
                onCancel: _,
                onSave: async () => {
                  try {
                    let _ = _ ? await _.save() : _,
                      _ = {
                        groupid: _,
                        api_names: _.filter((_) => _.has(_(_))).map(
                          (_) => _.name,
                        ),
                      };
                    (await _.mutateAsync(_),
                      setTimeout(() => {
                        document.getElementById(_(_))?.scrollIntoView({
                          behavior: `smooth`,
                          block: `nearest`,
                        });
                      }, 200),
                      _());
                  } catch {}
                },
                pending: _.isPending || _.isPending,
                error: _.error?.message ?? _.error,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { actions: _ } = _,
    _ = _({
      rgOptions: _.map((_, _) => _),
      selectedValue: void 0,
      onSelectionChange: (_) => {
        _ !== void 0 && _[_].action();
      },
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    children: [
      (0, _.jsx)(_.Trigger, {
        render: (_) =>
          (0, _.jsxs)(`div`, {
            className: _(_),
            ..._,
            children: [
              _(`#AchievementEditor_Options`),
              `\xA0`,
              (0, _.jsx)(`div`, {
                className: _(_, _),
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
      }),
      (0, _.jsx)(_.Options, {
        children: _.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [_?.icon(), _.label],
              }),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { app: _, baseApp: _ } = _,
    { type: _, releasestate: _, name: _ } = _ || {},
    _ = _?.image || _?.image,
    _ = {
      ..._,
      appid: _?.appid ? parseInt(_.appid) : 0,
      releasestate: _,
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _
          ? (0, _.jsx)(`img`, {
              src: _,
            })
          : (0, _.jsx)(`div`, {
              children: _,
            }),
      }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          app: _,
        }),
    ],
  });
}
function _(_) {
  let { hidden: _, className: _, omitText: _ = !1 } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _ ? _ : _, _),
    children: _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {}),
            !_ && _(`#AchievementEditor_Group_Field_Visibility_Value_Hidden`),
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {}),
            !_ && _(`#AchievementEditor_Group_Field_Visibility_Value_Visible`),
          ],
        }),
  });
}
function _(_) {
  let {
      archived: _,
      developeronly: _,
      app: _,
      baseApp: _,
      noStorePage: _,
      notDLCOfApp: _,
      dlcappid: _,
    } = _,
    _ = _ || _ || !_?.is_released_somewhere,
    _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ ? _ : _),
        children: (0, _.jsx)(_, {
          hidden: _,
        }),
      }),
      _ &&
        (0, _.jsxs)(`div`, {
          className: `veyeMEmS1uo-`,
          children: [
            !_?.is_released_somewhere &&
              (0, _.jsx)(`div`, {
                className: _,
                children: _(
                  `#AchievementEditor_Group_Field_Restrictions_Value_OwnersReleaseStatus`,
                  (0, _.jsx)(`strong`, {
                    children: _?.name ?? ``,
                  }),
                  _(
                    `#AchievementEditor_Group_Field_Restrictions_App_Unreleased`,
                  ),
                ),
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {}),
                  ` `,
                  _(`#AchievementEditor_Group_Field_IsArchived`),
                  ` `,
                  (0, _.jsx)(_, {
                    helpText: _(`#AchievementEditor_Group_Tooltip_Archived`),
                  }),
                ],
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {}),
                  ` `,
                  _(`#AchievementEditor_Group_Field_DeveloperOnly`),
                  ` `,
                  (0, _.jsx)(_, {
                    helpText: _(
                      `#AchievementEditor_Group_Tooltip_DeveloperOnly`,
                    ),
                  }),
                ],
              }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          text: _(
            `#AchievementEditor_Group_Warn_NoStorePage`,
            _?.name ?? ``,
            _?.name ?? ``,
          ),
        }),
      _ &&
        (0, _.jsx)(_, {
          text: _(
            `#AchievementEditor_Group_Warn_NotDLCOfApp`,
            _ ?? ``,
            _?.name ?? ``,
          ),
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    bNewGroup: !0,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    bNewGroup: !1,
    ..._,
  });
}
function _(_, _, _) {
  let { appID: _ } = _(),
    [_, _] = _.useState(_?.name ?? {}),
    [_, _] = _.useState(_?.dlcappid),
    [_, _] = _.useState(_?.archived == `1`),
    [_, _] = _.useState(_ || _?.developeronly == `1`),
    _ = (0, _.useMemo)(
      () => ({
        ..._,
        name: _,
        dlcappid: _,
        archived: _ ? `1` : `0`,
        developeronly: _ ? `1` : `0`,
      }),
      [_, _, _, _, _],
    ),
    _ = _(_, _ ? `0` : _),
    _ = _(_, _),
    _ = () => {
      (_(_?.name),
        _(_?.dlcappid),
        _(_?.archived == `1`),
        _(_ || _?.developeronly == `1`));
    },
    _ = async () => await _.mutateAsync(_),
    _ = _.isPending;
  return {
    editGroupName: _,
    setEditGroupName: _,
    editAppID: _,
    setEditAppID: _,
    editIsArchived: _,
    setEditIsArchived: _,
    editDeveloperOnly: _,
    setEditDeveloperOnly: _,
    isNewGroup: _ ?? !1,
    visibility: _,
    reset: _,
    save: _,
    isPending: _,
    error: _.error?.message,
  };
}
function _(_) {
  let { groupid: _, group: _, bNewGroup: _ } = _,
    _ = _(_, _, _),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      _?.current?.scrollIntoView({
        behavior: `smooth`,
        block: `nearest`,
      });
    }, []),
    (0, _.jsx)(_, {
      ref: _,
      ..._,
      state: _,
    })
  );
}
function _(_) {
  let { value: _, setValue: _ } = _,
    { appID: _ } = _(),
    _ = _(_),
    _ = (0, _.useMemo)(() => new Map(_.map((_) => [_.appid, _.name])), [_]),
    _ = (0, _.useCallback)(
      (_) =>
        (_ ?? `0`) == `0`
          ? `(${_}) ${_(`#AchievementEditor_Group_Field_Restrictions_Value_AllPlayers`)}`
          : `(${_}) ${_.get(_)}`,
      [_, _],
    ),
    _ = Array.from(
      new Set(
        _.sort((_, _) => (_.name ?? ``).localeCompare(_.name ?? ``)).map(
          (_) => _.appid,
        ),
      ),
    ),
    _ = [`0`].concat(_);
  return _.length < 20
    ? (0, _.jsx)(_, {
        options: _,
        getOptionLabel: _,
        selectedValue: _ ?? `0`,
        onSelectionChange: _,
      })
    : (0, _.jsx)(_, {
        options: _,
        getOptionLabel: _,
        selectedValue: _ ?? `0`,
        onSelectionChange: _,
        placeholder: ``,
        filterPlaceholder: ``,
      });
}
function _(_) {
  let {
      state: _,
      groupid: _,
      bHideSaveCancelButtons: _,
      onSave: _,
      onCancel: _,
      ref: _,
    } = _,
    { appID: _ } = _(),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _?.current?.focus();
  }, []);
  let {
      editGroupName: _,
      setEditGroupName: _,
      editAppID: _,
      setEditAppID: _,
      editIsArchived: _,
      setEditIsArchived: _,
      editDeveloperOnly: _,
      setEditDeveloperOnly: _,
      isNewGroup: _,
      visibility: _,
      isPending: _,
    } = _,
    _ = _.editAppID !== void 0,
    _ = async () => {
      try {
        (await _.save(), _ && _());
      } catch {}
    },
    _ = () => {
      (_.reset(), _ && _());
    },
    _ = _.visible ? _ : _;
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _(_, _, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _(void 0, _),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                !_ &&
                (0, _.jsxs)(`div`, {
                  className: `kIbHWH3dJpY-`,
                  children: [
                    (0, _.jsx)(`h1`, {
                      children: _(
                        `#AchievementEditor_Group_CoreGameAchievements_Heading`,
                      ),
                    }),
                    (0, _.jsx)(`p`, {
                      children: _(
                        `#AchievementEditor_Group_CoreGameAchievements_Description`,
                      ),
                    }),
                  ],
                }),
              (0, _.jsx)(`div`, {
                children: _
                  ? (0, _.jsx)(`div`, {
                      className: void 0,
                      children: (0, _.jsx)(`h1`, {
                        children: _(
                          `#AchievementEditor_AchievementsTable_Header_CreateGroup`,
                        ),
                      }),
                    })
                  : (0, _.jsx)(`div`, {
                      className: void 0,
                      children: (0, _.jsx)(`h1`, {
                        children: _(`#AchievementEditor_Group_Tools_Edit`),
                      }),
                    }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        children: [
                          _(`#AchievementEditor_Group_Field_Restrictions`),
                          `:`,
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsxs)(`p`, {
                            children: [
                              _(
                                `#AchievementEditor_Group_Edit_Field_Restrictions_Description`,
                              ),
                              `:`,
                            ],
                          }),
                          (0, _.jsx)(_, {
                            value: _,
                            setValue: _,
                          }),
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (!!_ || _) &&
                        (0, _.jsxs)(`div`, {
                          children: [
                            (0, _.jsxs)(_, {
                              children: [
                                (0, _.jsxs)(_, {
                                  flexGrow: `1`,
                                  children: [
                                    _(`#AchievementEditor_Group_Field_Name`),
                                    `:`,
                                  ],
                                }),
                                _ &&
                                  (0, _.jsx)(_, {
                                    children: (0, _.jsx)(`p`, {
                                      children: _(
                                        `#AchievementEditor_Group_Edit_Field_Name_DlcPrefix`,
                                      ),
                                    }),
                                  }),
                              ],
                            }),
                            (0, _.jsxs)(`div`, {
                              children: [
                                (0, _.jsxs)(`div`, {
                                  children: [
                                    _(
                                      `#AchievementEditor_Group_Edit_Field_Name_Description`,
                                    ),
                                    ` `,
                                    (0, _.jsx)(_, {
                                      locstring: _,
                                    }),
                                  ],
                                }),
                                (0, _.jsx)(_, {
                                  autofocus: !0,
                                  value: _,
                                  setValue: _,
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsx)(`div`, {
                            children: _(
                              `#AchievementEditor_Group_Field_DeveloperOnly`,
                            ),
                          }),
                          (0, _.jsx)(`div`, {
                            children: (0, _.jsx)(_, {
                              background: `dull-9`,
                              flexGrow: `1`,
                              padding: `1`,
                              radius: `sm`,
                              children: (0, _.jsx)(_, {
                                checked: _,
                                onChange: _,
                                children: _(
                                  `#AchievementEditor_Group_Field_DeveloperOnly`,
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      !_ &&
                        (0, _.jsxs)(`div`, {
                          children: [
                            (0, _.jsxs)(`div`, {
                              children: [
                                _(`#AchievementEditor_Group_Field_Archive`),
                                `:`,
                              ],
                            }),
                            (0, _.jsx)(`div`, {
                              children: (0, _.jsx)(_, {
                                background: `dull-9`,
                                flexGrow: `1`,
                                padding: `1`,
                                radius: `sm`,
                                children: (0, _.jsx)(_, {
                                  checked: _,
                                  onChange: _,
                                  children: _(
                                    `#AchievementEditor_Group_Field_IsArchived`,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      (0, _.jsxs)(`div`, {
                        className: void 0,
                        children: [
                          (0, _.jsxs)(`div`, {
                            children: [
                              _(`#AchievementEditor_Group_Field_Visibility`),
                              `:`,
                            ],
                          }),
                          (0, _.jsx)(`div`, {
                            children: (0, _.jsx)(_, {
                              ..._,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_, {
                  onSave: _,
                  onCancel: _,
                  pending: _,
                  error: _.error,
                }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { groupid: _, group: _, hideModal: _ } = _,
    { appID: _ } = _(),
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_, _),
    _ = !_ || _.length === 0,
    _ = () =>
      _.mutate(void 0, {
        onSuccess: _,
      });
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      onEscKeypress: _,
      children: (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            children: _(`#AchievementEditor_Group_Delete_Dialog_Title`),
          }),
          (0, _.jsxs)(_, {
            children: [
              !_ &&
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `2`,
                  padding: `2`,
                  align: `center`,
                  background: `red-7`,
                  style: {
                    color: `var(--color-text-light-title)`,
                  },
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      contrast: `title`,
                      children: _(
                        `#AchievementEditor_Group_Delete_Dialog_WarnNonEmptyGroup`,
                      ),
                    }),
                  ],
                }),
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: `1`,
                padding: `2`,
                className: _,
                children: [
                  (0, _.jsxs)(_, {
                    children: [
                      _(`#AchievementEditor_Group_Field_Name`),
                      `: `,
                      _(_?.name, `english`) ?? _?.name.token,
                    ],
                  }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              saveText: _(`#AchievementEditor_Group_Delete_Dialog_Delete`),
              saveColor: `red`,
              saveDisabled: !_,
              pending: _.isPending,
              error: _.error?.message,
              onCancel: _,
              onSave: _,
            }),
          }),
        ],
      }),
    }),
  });
}
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~683330fb43.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~a092112af2.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~0f3dd6e064.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~0e90ce0409.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~55562726d1.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~2a1bb8dd6e.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~66b39f1b71.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~4b203361b4.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~ca56305aa3.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~2db96bf1ec.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~860bd36530.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~194ddf5dae.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~fd7db467fd.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~b5c6702f4a.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~b071ae8cc6.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~4ce1b73f61.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~0200bdc406.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~f8ffa5e1f5.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~646f255860.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~24a264bf92.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~caa0d51498.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~7df7a2b83e.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~b209db5e20.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~c7658b2d82.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~7e5877bf83.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~173fcc0fb1.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~8496f445a8.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~5cdee232e4.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~b5c5a2b6f1.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~80a07a9ebf.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~e71cad93d4.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~d0b709512d.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = `steamQueryPersist`,
  _ = _.createContext(void 0);
_.Provider;
function _(_) {
  let { area: _, maxAgeSeconds: _, meta: _, ..._ } = _,
    _ = _.useContext(_),
    _ = _.useMemo(() => _(_, _, _), [_, _, _]);
  return _({
    ..._,
    meta: _,
    persister: _?.GetPersister(_),
  });
}
function _(_, _, _) {
  return {
    ..._,
    [_]: {
      area: _,
      maxAgeSeconds: _,
    },
  };
}
function _(_, ..._) {
  return [`achievements`, _, ..._];
}
var _ = (_) => _(_, `schema_v2`);
async function _(_, _, _, _) {
  return (await _?.(_)) ?? _(_, _, _);
}
async function _(_, _, _) {
  let _ = await _.GetGameAchievements(_, {
    appid: _,
    language: _,
  });
  if (_.GetEResult() === 42)
    return {
      appid: _,
      language: _,
      groups: [],
      schema_hash: 0,
      schema_version: 0,
    };
  if (_(_)) throw new _();
  if (_.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetGameAchievements`, _.GetEResult()),
      Error(`Error from GetGameAchievements: ${_.GetEResult()}`)
    );
  let _ = {};
  return (
    (_[0] = {
      _: 0,
      archived: !1,
      developeronly: !1,
      ispublic: !0,
      dlcappid: 0,
      order: -1,
      achievements: [],
    }),
    _.Body().groups().toString(),
    _.Body()
      .groups()
      .forEach((_) => {
        let _ = _.groupid();
        _[_] = {
          _: _,
          name: _.localized_name(),
          archived: _.archived() ?? !1,
          ispublic: _.ispublic() ?? !0,
          developeronly: _.developeronly() ?? !1,
          dlcappid: _.dlcappid() ?? 0,
          order: _.order() ?? 0,
          achievements: [],
        };
      }),
    _.Body()
      .toObject()
      ?.achievements?.forEach((_) => {
        let _ = _.groupid ?? 0;
        _[_].achievements.push({
          internal_key: _.internal_key ?? 0,
          api_name: _.internal_name ?? ``,
          name: _.localized_name,
          description: _.localized_desc,
          hidden: _.hidden ?? !1,
          archived: _.archived ?? !1,
          icon_achieved: _.icon || void 0,
          icon_unachieved: _.icon_gray || void 0,
          groupid: _.groupid ?? 0,
          min_progress: _.min_progress_int ?? _.min_progress_float,
          max_progress: _.max_progress_int ?? _.max_progress_float,
        });
      }),
    {
      appid: _,
      language: _,
      groups: Object.values(_)
        .filter((_) => _.achievements.length > 0)
        .sort((_, _) => _.order - _.order),
      schema_hash: _.Body()?.schema_hash() ?? 0,
      schema_version: _.Body()?.schema_version() ?? 0,
    }
  );
}
var _ = (_) => _(_, `globalpercentages`);
async function _(_, _) {
  let _ = await _.GetGlobalAchievementPercentages(_, {
    appid: _,
  });
  if (_.GetEResult() === 42)
    return {
      percentages: {},
    };
  if (_(_)) throw new _();
  if (_.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetGlobalAchievementPercentages`,
        _.GetEResult(),
      ),
      Error(`Error from GetGlobalAchievementPercentages: ${_.GetEResult()}`)
    );
  return {
    percentages: _.Body()
      .achievements()
      .reduce((_, _) => {
        let _ = _.internal_key();
        return (_ === void 0 || (_[_] = _.player_percent_unlocked() ?? 0.1), _);
      }, {}),
  };
}
var _ = class extends Error {
  constructor() {
    super(`Achievements request: server unreachable`);
  }
};
function _(_) {
  let _ = _.Hdr().transport_error();
  return _ === 2 || _ === 3 || _.GetEResult() === 3;
}
var _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  return _?.bNoRetryOnError
    ? {
        retry: !1,
        retryOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    : {};
}
function _(_, _) {
  return !(_ instanceof _) && _ < 3;
}
function _(_, _) {
  return `${_.BASE_URL_SHARED_CDN}community_assets/images/apps/${_}/${_}`;
}
function _(_, _, _) {
  return {
    ..._,
    icon_achieved: _.icon_achieved ? _(_, _.icon_achieved) : void 0,
    icon_unachieved: _.icon_unachieved ? _(_, _.icon_unachieved) : void 0,
  };
}
function _(_, _) {
  return {
    ..._,
    groups: _.groups.map((_) => ({
      ..._,
      name: _._ === 0 ? _.Localize(`#Achievements_Set_BaseGame`) : _.name,
      achievements: _.achievements.map((_) => _(_.appid, _, _)),
    })),
  };
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _, _.LANGUAGE, _),
    staleTime: 864e5,
    retry: _,
    area: `achievements`,
  };
}
function _(_, _) {
  let _ = _(),
    { fnGetAchievementIconURL: _ = _, fnFetchLocalGameAchievements: _ } = _(),
    _ = (0, _.useCallback)((_) => _(_, _), [_]);
  return _({
    ..._(_, _, _),
    select: _,
    ..._(_),
  });
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 864e5,
    retry: _,
    area: `achievements`,
  };
}
function _(_, _) {
  return _({
    ..._(_(), _),
    ..._(_),
  });
}
function _(_) {
  let { appId: _ } = _,
    _ = _(`icon_cdn_root`, `application_config`),
    [_, _] = (0, _.useState)(`english`),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, {
      bNoRetryOnError: !0,
    }),
    { data: _ } = _(_, {
      bNoRetryOnError: !0,
    });
  _(_);
  let _ = {
      appID: _,
      cdnRoot: _,
      localization: {
        currentLanguage: _,
        setCurrentLanguage: _,
      },
      filter: _,
      existingAchievements: _.data,
      existingAchievementUnlockPercentages: _,
    },
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(`main`),
    _ = {
      main: {
        label: _(`#AchievementEditor_Tab_ManageAchievements`),
        render: () =>
          (0, _.jsx)(_, {
            reordering: _,
            setReordering: _,
            creatingNewGroup: _,
            setCreatingNewGroup: _,
          }),
      },
      bulk: {
        label: _(`#AchievementEditor_Tab_BulkImportExport`),
        render: () =>
          (0, _.jsx)(_, {
            onClose: () => _(`main`),
            setHasChanges: _,
          }),
      },
    };
  return (0, _.jsxs)(_, {
    value: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, `noOpinionatedGlobalStyles`),
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            options: Object.keys(_),
            getOptionLabel: (_) => _[_].label,
            selectedOption: _,
            onChange: (_) => {
              _ == `bulk` && _ ? (_(_), _(!0)) : _(_);
            },
          }),
          _ == `main` &&
            (0, _.jsx)(_, {
              filter: _,
              setFilter: _,
              showFilter: _ == `main`,
              reordering: _,
              setReordering: _,
              showReorder: _ == `main`,
              creatingNewGroup: _,
              setCreatingNewGroup: _,
              showCreateNewGroup: _ == `main`,
            }),
          _[_].render(),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          onCancel: () => _(!1),
          onOk: () => {
            (_(!1), _(!1), _(_), _(void 0));
          },
          okText: _(`#Button_Confirm`),
          children: _(`#AchievementEditor_TabBar_BulkUnsavedConfirm`),
        }),
    ],
  });
}
function _(_) {
  let { options: _, getOptionLabel: _, selectedOption: _, onChange: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      _ == _
        ? (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _ ? _(_) : _,
            },
            _,
          )
        : (0, _.jsx)(
            `div`,
            {
              onClick: () => _(_),
              children: _ ? _(_) : _,
            },
            _,
          ),
    ),
  });
}
function _(_) {
  let {
      filter: _,
      setFilter: _,
      showFilter: _,
      reordering: _,
      setReordering: _,
      showReorder: _,
      creatingNewGroup: _,
      setCreatingNewGroup: _,
      showCreateNewGroup: _,
    } = _,
    _ = _(),
    _ = Object.values(_).every((_) => _.set == _.total),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(`h3`, {
                children: _(`#AchievementEditor_Toolbar_Filter_Title`),
              }),
            }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`h3`, {
              children: (0, _.jsxs)(_, {
                direction: `row`,
                gap: `1`,
                align: `center`,
                children: [
                  _(`#LanguageTitle`),
                  !_ &&
                    (0, _.jsx)(_, {
                      toolTipContent: _(
                        `#AchievementEditor_Toolbar_Localization_WarnIncomplete`,
                      ),
                      style: {
                        height: `1.2em`,
                      },
                      children: (0, _.jsx)(_, {
                        color: `var(--color-warning)`,
                      }),
                    }),
                  (0, _.jsx)(_, {
                    toolTipContent: _(
                      `#AchievementEditor_Toolbar_Localization_Edit`,
                    ),
                    style: {
                      height: `1.2em`,
                    },
                    children: (0, _.jsx)(_, {
                      onClick: () => _(!0),
                      className: _,
                    }),
                  }),
                ],
              }),
            }),
          }),
          (0, _.jsx)(`div`, {}),
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(_, {
                variant: `inset`,
                placeholder: _(`#AchievementEditor_Toolbar_Filter_Placeholder`),
                value: _,
                onTextChange: _,
                clearable: !0,
              }),
            }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `3`,
            justify: `end`,
            children: [
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  toolTipContent: _(
                    `#AchievementEditor_Button_CreateNewGroup_Tooltip`,
                  ),
                  style: {
                    verticalAlign: `middle`,
                    maxWidth: `300px`,
                    whiteSpace: `normal`,
                  },
                  children: (0, _.jsxs)(_, {
                    variant: `vibrant`,
                    disabled: _,
                    onClick: () => _(!0),
                    children: [
                      (0, _.jsx)(_, {
                        width: `14`,
                        height: `14`,
                        fill: `currentColor`,
                        className: `fsopArsbaW0-`,
                      }),
                      ` `,
                      _(`#AchievementEditor_Button_CreateNewGroup`),
                    ],
                  }),
                }),
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  toolTipContent: _(`#AchievementEditor_Reorder_Description`),
                  style: {
                    verticalAlign: `middle`,
                    maxWidth: `300px`,
                    whiteSpace: `normal`,
                  },
                  children: (0, _.jsx)(_, {
                    onClick: () => _(!0),
                  }),
                }),
            ],
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let { appID: _ } = _(),
    _ = _.steamid,
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/achievements/${_}`,
    _ = `${_.PARTNER_BASE_URL}doc/features/achievements`,
    _ = `${_}#5`,
    _ = _(_),
    _ = _(_)?.length ?? 0,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#AchievementEditor_title`),
            }),
            (0, _.jsx)(_, {
              href: _,
              children: _(`#AssetRequest_General_SeeDocs`),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  _(`#AchievementEditor_Description_Title_Overview`),
                  `:`,
                ],
              }),
              (0, _.jsx)(`div`, {
                children: _(`#AchievementEditor_Description_Overview`),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  _(`#AchievementEditor_Description_Title_Requirements`),
                  `:`,
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(
                  `#AchievementEditor_Description_Requirements`,
                  (0, _.jsx)(`a`, {
                    href: `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`,
                  }),
                ),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  _(`#AchievementEditor_Description_Title_Design`),
                  `:`,
                ],
              }),
              (0, _.jsx)(`div`, {
                children: _(`#AchievementEditor_Description_Design`),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [_(`#AchievementEditor_Header_GroupList`), `:`],
              }),
              (0, _.jsx)(`div`, {
                children: _(`#AchievementEditor_Description_GroupList`),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    _(`#AchievementEditor_Description_Title_Limit`),
                    `:`,
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    _(
                      `#AchievementEditor_Description_Limit`,
                      _,
                      _.max_achievements,
                    ),
                    !_.vetted &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          ` `,
                          _(
                            _(
                              `#AchievementEditor_Description_Limit_Unvetted`,
                              _.max_achievements,
                            ),
                            (0, _.jsx)(`a`, {
                              href: _,
                            }),
                          ),
                        ],
                      }),
                    ` `,
                    _(
                      `#AchievementEditor_Description_Limit_Groups`,
                      _,
                      _.max_groups,
                    ),
                  ],
                }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  _(`#AchievementEditor_Description_Title_Testing`),
                  `:`,
                ],
              }),
              (0, _.jsx)(`div`, {
                children: _(
                  `#AchievementEditor_Description_Testing`,
                  (0, _.jsx)(`a`, {
                    href: _,
                  }),
                ),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  _(`#AchievementEditor_Description_Title_Releasing`),
                  `:`,
                ],
              }),
              (0, _.jsx)(`div`, {
                children: _(
                  `#AchievementEditor_Description_Releasing`,
                  (0, _.jsx)(`a`, {
                    href: `${_.PARTNER_BASE_URL}admin/game/editbyappid/${_}?activetab=tab_basic#feature_section`,
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
export { _ as default };
