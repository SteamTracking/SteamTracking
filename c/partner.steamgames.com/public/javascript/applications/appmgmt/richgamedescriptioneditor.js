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
} from "./chunk~de7f2df91c.js";
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
} from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~b4171a8747.js";
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
import { _ } from "./chunk~6257ebd2d4.js";
import { _ } from "./chunk~9d71b14b50.js";
import { _, _, _, _, _, _ } from "./chunk~a6402cc243.js";
import { _, _ } from "./chunk~8681f5c764.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~802e967112.js";
import { _, _, _, _, _, _, _ } from "./chunk~af1574091f.js";
import "./chunk~ca0c999570.js";
import { _, _, _, _, _, _ } from "./chunk~d6693aba87.js";
import { _ } from "./chunk~d3a2e79917.js";
function _(_) {
  this.content = _;
}
((_.prototype = {
  constructor: _,
  find: function (_) {
    for (var _ = 0; _ < this.content.length; _ += 2)
      if (this.content[_] === _) return _;
    return -1;
  },
  get: function (_) {
    var _ = this.find(_);
    return _ == -1 ? void 0 : this.content[_ + 1];
  },
  update: function (_, _, _) {
    var _ = _ && _ != _ ? this.remove(_) : this,
      _ = _.find(_),
      _ = _.content.slice();
    return (
      _ == -1 ? _.push(_ || _, _) : ((_[_ + 1] = _), _ && (_[_] = _)), new _(_)
    );
  },
  remove: function (_) {
    var _ = this.find(_);
    if (_ == -1) return this;
    var _ = this.content.slice();
    return (_.splice(_, 2), new _(_));
  },
  addToStart: function (_, _) {
    return new _([_, _].concat(this.remove(_).content));
  },
  addToEnd: function (_, _) {
    var _ = this.remove(_).content.slice();
    return (_.push(_, _), new _(_));
  },
  addBefore: function (_, _, _) {
    var _ = this.remove(_),
      _ = _.content.slice(),
      _ = _.find(_);
    return (_.splice(_ == -1 ? _.length : _, 0, _, _), new _(_));
  },
  forEach: function (_) {
    for (var _ = 0; _ < this.content.length; _ += 2)
      _(this.content[_], this.content[_ + 1]);
  },
  prepend: function (_) {
    return (
      (_ = _.from(_)),
      _.size ? new _(_.content.concat(this.subtract(_).content)) : this
    );
  },
  append: function (_) {
    return (
      (_ = _.from(_)),
      _.size ? new _(this.subtract(_).content.concat(_.content)) : this
    );
  },
  subtract: function (_) {
    var _ = this;
    _ = _.from(_);
    for (var _ = 0; _ < _.content.length; _ += 2) _ = _.remove(_.content[_]);
    return _;
  },
  toObject: function () {
    var _ = {};
    return (
      this.forEach(function (_, _) {
        _[_] = _;
      }),
      _
    );
  },
  get size() {
    return this.content.length >> 1;
  },
}),
  (_.from = function (_) {
    if (_ instanceof _) return _;
    var _ = [];
    if (_) for (var _ in _) _.push(_, _[_]);
    return new _(_);
  }));
function _(_, _, _) {
  for (let _ = 0; ; _++) {
    if (_ == _.childCount || _ == _.childCount)
      return _.childCount == _.childCount ? null : _;
    let _ = _.child(_),
      _ = _.child(_);
    if (_ == _) _ += _.nodeSize;
    else {
      if (!_.sameMarkup(_)) return _;
      if (_.isText && _.text != _.text) {
        let _ = _.text,
          _ = _.text,
          _ = 0;
        for (; _[_] == _[_]; _++) _++;
        return (
          _ &&
            _ < _.length &&
            _ < _.length &&
            _(_.charCodeAt(_ - 1)) &&
            _(_.charCodeAt(_)) &&
            _--,
          _
        );
      }
      if (_.content.size || _.content.size) {
        let _ = _(_.content, _.content, _ + 1);
        if (_ != null) return _;
      }
      _ += _.nodeSize;
    }
  }
}
function _(_, _, _, _) {
  for (let _ = _.childCount, _ = _.childCount; ;) {
    if (_ == 0 || _ == 0)
      return _ == _
        ? null
        : {
            _: _,
            _: _,
          };
    let _ = _.child(--_),
      _ = _.child(--_),
      _ = _.nodeSize;
    if (_ == _) ((_ -= _), (_ -= _));
    else {
      if (!_.sameMarkup(_))
        return {
          _: _,
          _: _,
        };
      if (_.isText && _.text != _.text) {
        let _ = _.text,
          _ = _.text,
          _ = _.length,
          _ = _.length;
        for (; _ > 0 && _ > 0 && _[_ - 1] == _[_ - 1];) (_--, _--, _--, _--);
        return (
          _ &&
            _ &&
            _ < _.length &&
            _(_.charCodeAt(_ - 1)) &&
            _(_.charCodeAt(_)) &&
            (_++, _++),
          {
            _: _,
            _: _,
          }
        );
      }
      if (_.content.size || _.content.size) {
        let _ = _(_.content, _.content, _ - 1, _ - 1);
        if (_) return _;
      }
      ((_ -= _), (_ -= _));
    }
  }
}
function _(_) {
  return _ >= 56320 && _ < 57344;
}
function _(_) {
  return _ >= 55296 && _ < 56320;
}
var _ = class _ {
  constructor(_, _) {
    if (((this.content = _), (this.size = _ || 0), _ == null))
      for (let _ = 0; _ < _.length; _++) this.size += _[_].nodeSize;
  }
  nodesBetween(_, _, _, _ = 0, _) {
    for (let _ = 0, _ = 0; _ < _; _++) {
      let _ = this.content[_],
        _ = _ + _.nodeSize;
      if (_ > _ && _(_, _ + _, _ || null, _) !== !1 && _.content.size) {
        let _ = _ + 1;
        _.nodesBetween(
          Math.max(0, _ - _),
          Math.min(_.content.size, _ - _),
          _,
          _ + _,
        );
      }
      _ = _;
    }
  }
  descendants(_) {
    this.nodesBetween(0, this.size, _);
  }
  textBetween(_, _, _, _) {
    let _ = ``,
      _ = !0;
    return (
      this.nodesBetween(
        _,
        _,
        (_, _) => {
          let _ = _.isText
            ? _.text.slice(Math.max(_, _) - _, _ - _)
            : _.isLeaf
              ? _
                ? typeof _ == `function`
                  ? _(_)
                  : _
                : _.type.spec.leafText
                  ? _.type.spec.leafText(_)
                  : ``
              : ``;
          (_.isBlock &&
            ((_.isLeaf && _) || _.isTextblock) &&
            _ &&
            (_ ? (_ = !1) : (_ += _)),
            (_ += _));
        },
        0,
      ),
      _
    );
  }
  append(_) {
    if (!_.size) return this;
    if (!this.size) return _;
    let _ = this.lastChild,
      _ = _.firstChild,
      _ = this.content.slice(),
      _ = 0;
    for (
      _.isText &&
      _.sameMarkup(_) &&
      ((_[_.length - 1] = _.withText(_.text + _.text)), (_ = 1));
      _ < _.content.length;
      _++
    )
      _.push(_.content[_]);
    return new _(_, this.size + _.size);
  }
  cut(_, _ = this.size) {
    if (_ == 0 && _ == this.size) return this;
    let _ = [],
      _ = 0;
    if (_ > _)
      for (let _ = 0, _ = 0; _ < _; _++) {
        let _ = this.content[_],
          _ = _ + _.nodeSize;
        (_ > _ &&
          ((_ < _ || _ > _) &&
            (_ = _.isText
              ? _.cut(Math.max(0, _ - _), Math.min(_.text.length, _ - _))
              : _.cut(
                  Math.max(0, _ - _ - 1),
                  Math.min(_.content.size, _ - _ - 1),
                )),
          _.push(_),
          (_ += _.nodeSize)),
          (_ = _));
      }
    return new _(_, _);
  }
  cutByIndex(_, _) {
    return _ == _
      ? _.empty
      : _ == 0 && _ == this.content.length
        ? this
        : new _(this.content.slice(_, _));
  }
  replaceChild(_, _) {
    let _ = this.content[_];
    if (_ == _) return this;
    let _ = this.content.slice(),
      _ = this.size + _.nodeSize - _.nodeSize;
    return ((_[_] = _), new _(_, _));
  }
  addToStart(_) {
    return new _([_].concat(this.content), this.size + _.nodeSize);
  }
  addToEnd(_) {
    return new _(this.content.concat(_), this.size + _.nodeSize);
  }
  eq(_) {
    if (this.content.length != _.content.length) return !1;
    for (let _ = 0; _ < this.content.length; _++)
      if (!this.content[_]._(_.content[_])) return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(_) {
    let _ = this.content[_];
    if (!_) throw RangeError(`Index ` + _ + ` out of range for ` + this);
    return _;
  }
  maybeChild(_) {
    return this.content[_] || null;
  }
  forEach(_) {
    for (let _ = 0, _ = 0; _ < this.content.length; _++) {
      let _ = this.content[_];
      (_(_, _, _), (_ += _.nodeSize));
    }
  }
  findDiffStart(_, _ = 0) {
    return _(this, _, _);
  }
  findDiffEnd(_, _ = this.size, _ = _.size) {
    return _(this, _, _, _);
  }
  findIndex(_) {
    if (_ == 0) return _(0, _);
    if (_ == this.size) return _(this.content.length, _);
    if (_ > this.size || _ < 0)
      throw RangeError(`Position ${_} outside of fragment (${this})`);
    for (let _ = 0, _ = 0; ; _++) {
      let _ = this.child(_),
        _ = _ + _.nodeSize;
      if (_ >= _) return _ == _ ? _(_ + 1, _) : _(_, _);
      _ = _;
    }
  }
  toString() {
    return `<` + this.toStringInner() + `>`;
  }
  toStringInner() {
    return this.content.join(`, `);
  }
  toJSON() {
    return this.content.length ? this.content.map((_) => _.toJSON()) : null;
  }
  static fromJSON(_, _) {
    if (!_) return _.empty;
    if (!Array.isArray(_))
      throw RangeError(`Invalid input for Fragment.fromJSON`);
    return _.fromArray(_.map(_.nodeFromJSON));
  }
  static fromArray(_) {
    if (!_.length) return _.empty;
    let _,
      _ = 0;
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      ((_ += _.nodeSize),
        _ && _.isText && _[_ - 1].sameMarkup(_)
          ? ((_ ||= _.slice(0, _)),
            (_[_.length - 1] = _.withText(_[_.length - 1].text + _.text)))
          : _ && _.push(_));
    }
    return new _(_ || _, _);
  }
  static from(_) {
    if (!_) return _.empty;
    if (_ instanceof _) return _;
    if (Array.isArray(_)) return this.fromArray(_);
    if (_.attrs) return new _([_], _.nodeSize);
    throw RangeError(
      `Can not convert ` +
        _ +
        ` to a Fragment` +
        (_.nodesBetween
          ? ` (looks like multiple versions of prosemirror-model were loaded)`
          : ``),
    );
  }
};
_.empty = new _([], 0);
var _ = {
  index: 0,
  offset: 0,
};
function _(_, _) {
  return ((_.index = _), (_.offset = _), _);
}
function _(_, _) {
  if (_ === _) return !0;
  if (!(_ && typeof _ == `object`) || !(_ && typeof _ == `object`)) return !1;
  let _ = Array.isArray(_);
  if (Array.isArray(_) != _) return !1;
  if (_) {
    if (_.length != _.length) return !1;
    for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  } else {
    for (let _ in _) if (!(_ in _) || !_(_[_], _[_])) return !1;
    for (let _ in _) if (!(_ in _)) return !1;
  }
  return !0;
}
var _ = class _ {
  constructor(_, _) {
    ((this.type = _), (this.attrs = _));
  }
  addToSet(_) {
    let _,
      _ = !1;
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (this._(_)) return _;
      if (this.type.excludes(_.type)) _ ||= _.slice(0, _);
      else if (_.type.excludes(this.type)) return _;
      else
        (!_ &&
          _.type.rank > this.type.rank &&
          ((_ ||= _.slice(0, _)), _.push(this), (_ = !0)),
          _ && _.push(_));
    }
    return ((_ ||= _.slice()), _ || _.push(this), _);
  }
  removeFromSet(_) {
    for (let _ = 0; _ < _.length; _++)
      if (this._(_[_])) return _.slice(0, _).concat(_.slice(_ + 1));
    return _;
  }
  isInSet(_) {
    for (let _ = 0; _ < _.length; _++) if (this._(_[_])) return !0;
    return !1;
  }
  eq(_) {
    return this == _ || (this.type == _.type && _(this.attrs, _.attrs));
  }
  toJSON() {
    let _ = {
      type: this.type.name,
    };
    for (let _ in this.attrs) {
      _.attrs = this.attrs;
      break;
    }
    return _;
  }
  static fromJSON(_, _) {
    if (!_) throw RangeError(`Invalid input for Mark.fromJSON`);
    let _ = _.marks[_.type];
    if (!_) throw RangeError(`There is no mark type ${_.type} in this schema`);
    return _.create(_.attrs);
  }
  static sameSet(_, _) {
    if (_ == _) return !0;
    if (_.length != _.length) return !1;
    for (let _ = 0; _ < _.length; _++) if (!_[_]._(_[_])) return !1;
    return !0;
  }
  static setFrom(_) {
    if (!_ || (Array.isArray(_) && _.length == 0)) return _.none;
    if (_ instanceof _) return [_];
    let _ = _.slice();
    return (_.sort((_, _) => _.type.rank - _.type.rank), _);
  }
};
_.none = [];
var _ = class extends Error {},
  _ = class _ {
    constructor(_, _, _) {
      ((this.content = _), (this.openStart = _), (this.openEnd = _));
    }
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(_, _) {
      let _ = _(
        this.content,
        _ + this.openStart,
        _,
        this.openStart + 1,
        this.openEnd + 1,
      );
      return _ && new _(_, this.openStart, this.openEnd);
    }
    removeBetween(_, _) {
      return new _(
        _(this.content, _ + this.openStart, _ + this.openStart),
        this.openStart,
        this.openEnd,
      );
    }
    eq(_) {
      return (
        this.content._(_.content) &&
        this.openStart == _.openStart &&
        this.openEnd == _.openEnd
      );
    }
    toString() {
      return this.content + `(` + this.openStart + `,` + this.openEnd + `)`;
    }
    toJSON() {
      if (!this.content.size) return null;
      let _ = {
        content: this.content.toJSON(),
      };
      return (
        this.openStart > 0 && (_.openStart = this.openStart),
        this.openEnd > 0 && (_.openEnd = this.openEnd),
        _
      );
    }
    static fromJSON(_, _) {
      if (!_) return _.empty;
      let _ = _.openStart || 0,
        _ = _.openEnd || 0;
      if (typeof _ != `number` || typeof _ != `number`)
        throw RangeError(`Invalid input for Slice.fromJSON`);
      return new _(_.fromJSON(_, _.content), _, _);
    }
    static maxOpen(_, _ = !0) {
      let _ = 0,
        _ = 0;
      for (
        let _ = _.firstChild;
        _ && !_.isLeaf && (_ || !_.type.spec.isolating);
        _ = _.firstChild
      )
        _++;
      for (
        let _ = _.lastChild;
        _ && !_.isLeaf && (_ || !_.type.spec.isolating);
        _ = _.lastChild
      )
        _++;
      return new _(_, _, _);
    }
  };
_.empty = new _(_.empty, 0, 0);
function _(_, _, _) {
  let { index: _, offset: _ } = _.findIndex(_),
    _ = _.maybeChild(_),
    { index: _, offset: _ } = _.findIndex(_);
  if (_ == _ || _.isText) {
    if (_ != _ && !_.child(_).isText)
      throw RangeError(`Removing non-flat range`);
    return _.cut(0, _).append(_.cut(_));
  }
  if (_ != _) throw RangeError(`Removing non-flat range`);
  return _.replaceChild(_, _.copy(_(_.content, _ - _ - 1, _ - _ - 1)));
}
function _(_, _, _, _, _, _) {
  let { index: _, offset: _ } = _.findIndex(_),
    _ = _.maybeChild(_);
  if (_ == _ || _.isText)
    return _ && _ <= 0 && _ <= 0 && !_.canReplace(_, _, _)
      ? null
      : _.cut(0, _).append(_).append(_.cut(_));
  let _ = _(
    _.content,
    _ - _ - 1,
    _,
    _ == 0 ? _ - 1 : 0,
    _ == _.childCount - 1 ? _ - 1 : 0,
    _,
  );
  return _ && _.replaceChild(_, _.copy(_));
}
function _(_, _, _) {
  if (_.openStart > _.depth)
    throw new _(`Inserted content deeper than insertion position`);
  if (_.depth - _.openStart != _.depth - _.openEnd)
    throw new _(`Inconsistent open depths`);
  return _(_, _, _, 0);
}
function _(_, _, _, _) {
  let _ = _.index(_),
    _ = _.node(_);
  if (_ == _.index(_) && _ < _.depth - _.openStart) {
    let _ = _(_, _, _, _ + 1);
    return _.copy(_.content.replaceChild(_, _));
  }
  if (!_.content.size) return _(_, _(_, _, _));
  if (!_.openStart && !_.openEnd && _.depth == _ && _.depth == _) {
    let _ = _.parent,
      _ = _.content;
    return _(
      _,
      _.cut(0, _.parentOffset).append(_.content).append(_.cut(_.parentOffset)),
    );
  }
  {
    let { start: _, end: _ } = _(_, _);
    return _(_, _(_, _, _, _, _));
  }
}
function _(_, _) {
  if (!_.type.compatibleContent(_.type))
    throw new _(`Cannot join ` + _.type.name + ` onto ` + _.type.name);
}
function _(_, _, _) {
  let _ = _.node(_);
  return (_(_, _.node(_)), _);
}
function _(_, _) {
  let _ = _.length - 1;
  _ >= 0 && _.isText && _.sameMarkup(_[_])
    ? (_[_] = _.withText(_[_].text + _.text))
    : _.push(_);
}
function _(_, _, _, _) {
  let _ = (_ || _).node(_),
    _ = 0,
    _ = _ ? _.index(_) : _.childCount;
  _ &&
    ((_ = _.index(_)),
    _.depth > _ ? _++ : _.textOffset && (_(_.nodeAfter, _), _++));
  for (let _ = _; _ < _; _++) _(_.child(_), _);
  _ && _.depth == _ && _.textOffset && _(_.nodeBefore, _);
}
function _(_, _) {
  if (!_.type.validContent(_))
    throw new _(`Invalid content for node ` + _.type.name);
  return _.copy(_);
}
function _(_, _, _, _, _) {
  let _ = _.depth > _ && _(_, _, _ + 1),
    _ = _.depth > _ && _(_, _, _ + 1),
    _ = [];
  return (
    _(null, _, _, _),
    _ && _ && _.index(_) == _.index(_)
      ? (_(_, _), _(_(_, _(_, _, _, _, _ + 1)), _))
      : (_ && _(_(_, _(_, _, _ + 1)), _),
        _(_, _, _, _),
        _ && _(_(_, _(_, _, _ + 1)), _)),
    _(_, null, _, _),
    new _(_)
  );
}
function _(_, _, _) {
  let _ = [];
  return (
    _(null, _, _, _),
    _.depth > _ && _(_(_(_, _, _ + 1), _(_, _, _ + 1)), _),
    _(_, null, _, _),
    new _(_)
  );
}
function _(_, _) {
  let _ = _.depth - _.openStart,
    _ = _.node(_).copy(_.content);
  for (let _ = _ - 1; _ >= 0; _--) _ = _.node(_).copy(_.from(_));
  return {
    start: _.resolveNoCache(_.openStart + _),
    end: _.resolveNoCache(_.content.size - _.openEnd - _),
  };
}
var _ = class _ {
    constructor(_, _, _) {
      ((this.pos = _),
        (this.path = _),
        (this.parentOffset = _),
        (this.depth = _.length / 3 - 1));
    }
    resolveDepth(_) {
      return _ == null ? this.depth : _ < 0 ? this.depth + _ : _;
    }
    get parent() {
      return this.node(this.depth);
    }
    get doc() {
      return this.node(0);
    }
    node(_) {
      return this.path[this.resolveDepth(_) * 3];
    }
    index(_) {
      return this.path[this.resolveDepth(_) * 3 + 1];
    }
    indexAfter(_) {
      return (
        (_ = this.resolveDepth(_)),
        this.index(_) + (_ == this.depth && !this.textOffset ? 0 : 1)
      );
    }
    start(_) {
      return (
        (_ = this.resolveDepth(_)), _ == 0 ? 0 : this.path[_ * 3 - 1] + 1
      );
    }
    end(_) {
      return (
        (_ = this.resolveDepth(_)), this.start(_) + this.node(_).content.size
      );
    }
    before(_) {
      if (((_ = this.resolveDepth(_)), !_))
        throw RangeError(`There is no position before the top-level node`);
      return _ == this.depth + 1 ? this.pos : this.path[_ * 3 - 1];
    }
    after(_) {
      if (((_ = this.resolveDepth(_)), !_))
        throw RangeError(`There is no position after the top-level node`);
      return _ == this.depth + 1
        ? this.pos
        : this.path[_ * 3 - 1] + this.path[_ * 3].nodeSize;
    }
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
      let _ = this.parent,
        _ = this.index(this.depth);
      if (_ == _.childCount) return null;
      let _ = this.pos - this.path[this.path.length - 1],
        _ = _.child(_);
      return _ ? _.child(_).cut(_) : _;
    }
    get nodeBefore() {
      let _ = this.index(this.depth),
        _ = this.pos - this.path[this.path.length - 1];
      return _
        ? this.parent.child(_).cut(0, _)
        : _ == 0
          ? null
          : this.parent.child(_ - 1);
    }
    posAtIndex(_, _) {
      _ = this.resolveDepth(_);
      let _ = this.path[_ * 3],
        _ = _ == 0 ? 0 : this.path[_ * 3 - 1] + 1;
      for (let _ = 0; _ < _; _++) _ += _.child(_).nodeSize;
      return _;
    }
    marks() {
      let _ = this.parent,
        _ = this.index();
      if (_.content.size == 0) return _.none;
      if (this.textOffset) return _.child(_).marks;
      let _ = _.maybeChild(_ - 1),
        _ = _.maybeChild(_);
      if (!_) {
        let _ = _;
        ((_ = _), (_ = _));
      }
      let _ = _.marks;
      for (var _ = 0; _ < _.length; _++)
        _[_].type.spec.inclusive !== !1 ||
          (_ && _[_].isInSet(_.marks)) ||
          (_ = _[_--].removeFromSet(_));
      return _;
    }
    marksAcross(_) {
      let _ = this.parent.maybeChild(this.index());
      if (!_ || !_.isInline) return null;
      let _ = _.marks,
        _ = _.parent.maybeChild(_.index());
      for (var _ = 0; _ < _.length; _++)
        _[_].type.spec.inclusive !== !1 ||
          (_ && _[_].isInSet(_.marks)) ||
          (_ = _[_--].removeFromSet(_));
      return _;
    }
    sharedDepth(_) {
      for (let _ = this.depth; _ > 0; _--)
        if (this.start(_) <= _ && this.end(_) >= _) return _;
      return 0;
    }
    blockRange(_ = this, _) {
      if (_.pos < this.pos) return _.blockRange(this);
      for (
        let _ =
          this.depth - (this.parent.inlineContent || this.pos == _.pos ? 1 : 0);
        _ >= 0;
        _--
      )
        if (_.pos <= this.end(_) && (!_ || _(this.node(_))))
          return new _(this, _, _);
      return null;
    }
    sameParent(_) {
      return this.pos - this.parentOffset == _.pos - _.parentOffset;
    }
    max(_) {
      return _.pos > this.pos ? _ : this;
    }
    min(_) {
      return _.pos < this.pos ? _ : this;
    }
    toString() {
      let _ = ``;
      for (let _ = 1; _ <= this.depth; _++)
        _ += (_ ? `/` : ``) + this.node(_).type.name + `_` + this.index(_ - 1);
      return _ + `:` + this.parentOffset;
    }
    static resolve(_, _) {
      if (!(_ >= 0 && _ <= _.content.size))
        throw RangeError(`Position ` + _ + ` out of range`);
      let _ = [],
        _ = 0,
        _ = _;
      for (let _ = _; ;) {
        let { index: _, offset: _ } = _.content.findIndex(_),
          _ = _ - _;
        if ((_.push(_, _, _ + _), !_ || ((_ = _.child(_)), _.isText))) break;
        ((_ = _ - 1), (_ += _ + 1));
      }
      return new _(_, _, _);
    }
    static resolveCached(_, _) {
      let _ = _.get(_);
      if (_)
        for (let _ = 0; _ < _.elts.length; _++) {
          let _ = _.elts[_];
          if (_.pos == _) return _;
        }
      else _.set(_, (_ = new _()));
      let _ = (_.elts[_._] = _.resolve(_, _));
      return ((_._ = (_._ + 1) % _), _);
    }
  },
  _ = class {
    constructor() {
      ((this.elts = []), (this._ = 0));
    }
  },
  _ = 12,
  _ = new WeakMap(),
  _ = class {
    constructor(_, _, _) {
      ((this.$from = _), (this.$to = _), (this.depth = _));
    }
    get start() {
      return this.$from.before(this.depth + 1);
    }
    get end() {
      return this.$to.after(this.depth + 1);
    }
    get parent() {
      return this.$from.node(this.depth);
    }
    get startIndex() {
      return this.$from.index(this.depth);
    }
    get endIndex() {
      return this.$to.indexAfter(this.depth);
    }
  },
  _ = Object.create(null),
  _ = class _ {
    constructor(_, _, _, _ = _.none) {
      ((this.type = _),
        (this.attrs = _),
        (this.marks = _),
        (this.content = _ || _.empty));
    }
    get children() {
      return this.content.content;
    }
    get nodeSize() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
    get childCount() {
      return this.content.childCount;
    }
    child(_) {
      return this.content.child(_);
    }
    maybeChild(_) {
      return this.content.maybeChild(_);
    }
    forEach(_) {
      this.content.forEach(_);
    }
    nodesBetween(_, _, _, _ = 0) {
      this.content.nodesBetween(_, _, _, _, this);
    }
    descendants(_) {
      this.nodesBetween(0, this.content.size, _);
    }
    get textContent() {
      return this.isLeaf && this.type.spec.leafText
        ? this.type.spec.leafText(this)
        : this.textBetween(0, this.content.size, ``);
    }
    textBetween(_, _, _, _) {
      return this.content.textBetween(_, _, _, _);
    }
    get firstChild() {
      return this.content.firstChild;
    }
    get lastChild() {
      return this.content.lastChild;
    }
    eq(_) {
      return this == _ || (this.sameMarkup(_) && this.content._(_.content));
    }
    sameMarkup(_) {
      return this.hasMarkup(_.type, _.attrs, _.marks);
    }
    hasMarkup(_, _, _) {
      return (
        this.type == _ &&
        _(this.attrs, _ || _.defaultAttrs || _) &&
        _.sameSet(this.marks, _ || _.none)
      );
    }
    copy(_ = null) {
      return _ == this.content
        ? this
        : new _(this.type, this.attrs, _, this.marks);
    }
    mark(_) {
      return _ == this.marks
        ? this
        : new _(this.type, this.attrs, this.content, _);
    }
    cut(_, _ = this.content.size) {
      return _ == 0 && _ == this.content.size
        ? this
        : this.copy(this.content.cut(_, _));
    }
    slice(_, _ = this.content.size, _ = !1) {
      if (_ == _) return _.empty;
      let _ = this.resolve(_),
        _ = this.resolve(_),
        _ = _ ? 0 : _.sharedDepth(_),
        _ = _.start(_);
      return new _(
        _.node(_).content.cut(_.pos - _, _.pos - _),
        _.depth - _,
        _.depth - _,
      );
    }
    replace(_, _, _) {
      return _(this.resolve(_), this.resolve(_), _);
    }
    nodeAt(_) {
      for (let _ = this; ;) {
        let { index: _, offset: _ } = _.content.findIndex(_);
        if (((_ = _.maybeChild(_)), !_)) return null;
        if (_ == _ || _.isText) return _;
        _ -= _ + 1;
      }
    }
    childAfter(_) {
      let { index: _, offset: _ } = this.content.findIndex(_);
      return {
        node: this.content.maybeChild(_),
        index: _,
        offset: _,
      };
    }
    childBefore(_) {
      if (_ == 0)
        return {
          node: null,
          index: 0,
          offset: 0,
        };
      let { index: _, offset: _ } = this.content.findIndex(_);
      if (_ < _)
        return {
          node: this.content.child(_),
          index: _,
          offset: _,
        };
      let _ = this.content.child(_ - 1);
      return {
        node: _,
        index: _ - 1,
        offset: _ - _.nodeSize,
      };
    }
    resolve(_) {
      return _.resolveCached(this, _);
    }
    resolveNoCache(_) {
      return _.resolve(this, _);
    }
    rangeHasMark(_, _, _) {
      let _ = !1;
      return (
        _ > _ &&
          this.nodesBetween(_, _, (_) => (_.isInSet(_.marks) && (_ = !0), !_)),
        _
      );
    }
    get isBlock() {
      return this.type.isBlock;
    }
    get isTextblock() {
      return this.type.isTextblock;
    }
    get inlineContent() {
      return this.type.inlineContent;
    }
    get isInline() {
      return this.type.isInline;
    }
    get isText() {
      return this.type.isText;
    }
    get isLeaf() {
      return this.type.isLeaf;
    }
    get isAtom() {
      return this.type.isAtom;
    }
    toString() {
      if (this.type.spec.toDebugString)
        return this.type.spec.toDebugString(this);
      let _ = this.type.name;
      return (
        this.content.size && (_ += `(` + this.content.toStringInner() + `)`),
        _(this.marks, _)
      );
    }
    contentMatchAt(_) {
      let _ = this.type.contentMatch.matchFragment(this.content, 0, _);
      if (!_)
        throw Error(`Called contentMatchAt on a node with invalid content`);
      return _;
    }
    canReplace(_, _, _ = _.empty, _ = 0, _ = _.childCount) {
      let _ = this.contentMatchAt(_).matchFragment(_, _, _),
        _ = _ && _.matchFragment(this.content, _);
      if (!_ || !_.validEnd) return !1;
      for (let _ = _; _ < _; _++)
        if (!this.type.allowsMarks(_.child(_).marks)) return !1;
      return !0;
    }
    canReplaceWith(_, _, _, _) {
      if (_ && !this.type.allowsMarks(_)) return !1;
      let _ = this.contentMatchAt(_).matchType(_),
        _ = _ && _.matchFragment(this.content, _);
      return _ ? _.validEnd : !1;
    }
    canAppend(_) {
      return _.content.size
        ? this.canReplace(this.childCount, this.childCount, _.content)
        : this.type.compatibleContent(_.type);
    }
    check() {
      (this.type.checkContent(this.content),
        _(this.type.attrs, this.attrs, `node`, this.type.name));
      let _ = _.none;
      for (let _ = 0; _ < this.marks.length; _++) {
        let _ = this.marks[_];
        (_(_.type.attrs, _.attrs, `mark`, _.type.name), (_ = _.addToSet(_)));
      }
      if (!_.sameSet(_, this.marks))
        throw RangeError(
          `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((_) => _.type.name)}`,
        );
      this.content.forEach((_) => _.check());
    }
    toJSON() {
      let _ = {
        type: this.type.name,
      };
      for (let _ in this.attrs) {
        _.attrs = this.attrs;
        break;
      }
      return (
        this.content.size && (_.content = this.content.toJSON()),
        this.marks.length && (_.marks = this.marks.map((_) => _.toJSON())),
        _
      );
    }
    static fromJSON(_, _) {
      if (!_) throw RangeError(`Invalid input for Node.fromJSON`);
      let _;
      if (_.marks) {
        if (!Array.isArray(_.marks))
          throw RangeError(`Invalid mark data for Node.fromJSON`);
        _ = _.marks.map(_.markFromJSON);
      }
      if (_.type == `text`) {
        if (typeof _.text != `string`)
          throw RangeError(`Invalid text node in JSON`);
        return _.text(_.text, _);
      }
      let _ = _.fromJSON(_, _.content);
      return _.nodeType(_.type).create(_.attrs, _, _);
    }
  };
_.prototype.text = void 0;
var _ = class _ extends _ {
  constructor(_, _, _, _) {
    if ((super(_, _, null, _), !_))
      throw RangeError(`Empty text nodes are not allowed`);
    this.text = _;
  }
  toString() {
    return this.type.spec.toDebugString
      ? this.type.spec.toDebugString(this)
      : _(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(_, _) {
    return this.text.slice(_, _);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(_) {
    return _ == this.marks ? this : new _(this.type, this.attrs, this.text, _);
  }
  withText(_) {
    return _ == this.text ? this : new _(this.type, this.attrs, _, this.marks);
  }
  cut(_ = 0, _ = this.text.length) {
    return _ == 0 && _ == this.text.length
      ? this
      : this.withText(this.text.slice(_, _));
  }
  eq(_) {
    return this.sameMarkup(_) && this.text == _.text;
  }
  toJSON() {
    let _ = super.toJSON();
    return ((_.text = this.text), _);
  }
};
function _(_, _) {
  for (let _ = _.length - 1; _ >= 0; _--) _ = _[_].type.name + `(` + _ + `)`;
  return _;
}
function _(_, _, _, _) {
  for (let _ in _)
    if (!(_ in _))
      throw RangeError(`Unsupported attribute ${_} for ${_} of type ${_}`);
  for (let _ in _) _[_].validate && _[_].validate(_[_]);
}
var _ = class _ {
  constructor(_) {
    ((this.validEnd = _), (this.next = []), (this.wrapCache = []));
  }
  static parse(_, _) {
    let _ = new _(_, _);
    if (_.next == null) return _.empty;
    let _ = _(_);
    _.next && _.err(`Unexpected trailing text`);
    let _ = _(_(_));
    return (_(_, _), _);
  }
  matchType(_) {
    for (let _ = 0; _ < this.next.length; _++)
      if (this.next[_].type == _) return this.next[_].next;
    return null;
  }
  matchFragment(_, _ = 0, _ = _.childCount) {
    let _ = this;
    for (let _ = _; _ && _ < _; _++) _ = _.matchType(_.child(_).type);
    return _;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let _ = 0; _ < this.next.length; _++) {
      let { type: _ } = this.next[_];
      if (!(_.isText || _.hasRequiredAttrs())) return _;
    }
    return null;
  }
  compatible(_) {
    for (let _ = 0; _ < this.next.length; _++)
      for (let _ = 0; _ < _.next.length; _++)
        if (this.next[_].type == _.next[_].type) return !0;
    return !1;
  }
  fillBefore(_, _ = !1, _ = 0) {
    let _ = [this];
    function _(_, _) {
      let _ = _.matchFragment(_, _);
      if (_ && (!_ || _.validEnd))
        return _.from(_.map((_) => _.createAndFill()));
      for (let _ = 0; _ < _.next.length; _++) {
        let { type: _, next: _ } = _.next[_];
        if (!(_.isText || _.hasRequiredAttrs()) && _.indexOf(_) == -1) {
          _.push(_);
          let _ = _(_, _.concat(_));
          if (_) return _;
        }
      }
      return null;
    }
    return _(this, []);
  }
  findWrapping(_) {
    for (let _ = 0; _ < this.wrapCache.length; _ += 2)
      if (this.wrapCache[_] == _) return this.wrapCache[_ + 1];
    let _ = this.computeWrapping(_);
    return (this.wrapCache.push(_, _), _);
  }
  computeWrapping(_) {
    let _ = Object.create(null),
      _ = [
        {
          match: this,
          type: null,
          via: null,
        },
      ];
    for (; _.length;) {
      let _ = _.shift(),
        _ = _.match;
      if (_.matchType(_)) {
        let _ = [];
        for (let _ = _; _.type; _ = _.via) _.push(_.type);
        return _.reverse();
      }
      for (let _ = 0; _ < _.next.length; _++) {
        let { type: _, next: _ } = _.next[_];
        _.isLeaf ||
          _.hasRequiredAttrs() ||
          _.name in _ ||
          (_.type && !_.validEnd) ||
          (_.push({
            match: _.contentMatch,
            type: _,
            via: _,
          }),
          (_[_.name] = !0));
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(_) {
    if (_ >= this.next.length)
      throw RangeError(`There's no ${_}th edge in this content match`);
    return this.next[_];
  }
  toString() {
    let _ = [];
    function _(_) {
      _.push(_);
      for (let _ = 0; _ < _.next.length; _++)
        _.indexOf(_.next[_].next) == -1 && _(_.next[_].next);
    }
    return (
      _(this),
      _.map((_, _) => {
        let _ = _ + (_.validEnd ? `*` : ` `) + ` `;
        for (let _ = 0; _ < _.next.length; _++)
          _ +=
            (_ ? `, ` : ``) +
            _.next[_].type.name +
            `->` +
            _.indexOf(_.next[_].next);
        return _;
      }).join(`
`)
    );
  }
};
_.empty = new _(!0);
var _ = class {
  constructor(_, _) {
    ((this.string = _),
      (this.nodeTypes = _),
      (this.inline = null),
      (this.pos = 0),
      (this.tokens = _.split(/\s*(?=\b|\W|$)/)),
      this.tokens[this.tokens.length - 1] == `` && this.tokens.pop(),
      this.tokens[0] == `` && this.tokens.shift());
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(_) {
    return this.next == _ && (this.pos++ || !0);
  }
  err(_) {
    throw SyntaxError(_ + ` (in content expression '` + this.string + `')`);
  }
};
function _(_) {
  let _ = [];
  do _.push(_(_));
  while (_.eat(`|`));
  return _.length == 1
    ? _[0]
    : {
        type: `choice`,
        exprs: _,
      };
}
function _(_) {
  let _ = [];
  do _.push(_(_));
  while (_.next && _.next != `)` && _.next != `|`);
  return _.length == 1
    ? _[0]
    : {
        type: `seq`,
        exprs: _,
      };
}
function _(_) {
  let _ = _(_);
  for (;;)
    if (_.eat(`+`))
      _ = {
        type: `plus`,
        expr: _,
      };
    else if (_.eat(`*`))
      _ = {
        type: `star`,
        expr: _,
      };
    else if (_.eat(`?`))
      _ = {
        type: `opt`,
        expr: _,
      };
    else if (_.eat(`{`)) _ = _(_, _);
    else break;
  return _;
}
function _(_) {
  /\D/.test(_.next) && _.err(`Expected number, got '` + _.next + `'`);
  let _ = Number(_.next);
  return (_.pos++, _);
}
function _(_, _) {
  let _ = _(_),
    _ = _;
  return (
    _.eat(`,`) && (_ = _.next == `}` ? -1 : _(_)),
    _.eat(`}`) || _.err(`Unclosed braced range`),
    {
      type: `range`,
      min: _,
      max: _,
      expr: _,
    }
  );
}
function _(_, _) {
  let _ = _.nodeTypes,
    _ = _[_];
  if (_) return [_];
  let _ = [];
  for (let _ in _) {
    let _ = _[_];
    _.isInGroup(_) && _.push(_);
  }
  return (_.length == 0 && _.err(`No node type or group '` + _ + `' found`), _);
}
function _(_) {
  if (_.eat(`(`)) {
    let _ = _(_);
    return (_.eat(`)`) || _.err(`Missing closing paren`), _);
  }
  if (/\W/.test(_.next)) _.err(`Unexpected token '` + _.next + `'`);
  else {
    let _ = _(_, _.next).map(
      (_) => (
        _.inline == null
          ? (_.inline = _.isInline)
          : _.inline != _.isInline && _.err(`Mixing inline and block content`),
        {
          type: `name`,
          value: _,
        }
      ),
    );
    return (
      _.pos++,
      _.length == 1
        ? _[0]
        : {
            type: `choice`,
            exprs: _,
          }
    );
  }
}
function _(_) {
  let _ = [[]];
  return (_(_(_, 0), _()), _);
  function _() {
    return _.push([]) - 1;
  }
  function _(_, _, _) {
    let _ = {
      term: _,
      _: _,
    };
    return (_[_].push(_), _);
  }
  function _(_, _) {
    _.forEach((_) => (_._ = _));
  }
  function _(_, _) {
    if (_.type == `choice`)
      return _.exprs.reduce((_, _) => _.concat(_(_, _)), []);
    if (_.type == `seq`)
      for (let _ = 0; ; _++) {
        let _ = _(_.exprs[_], _);
        if (_ == _.exprs.length - 1) return _;
        _(_, (_ = _()));
      }
    else if (_.type == `star`) {
      let _ = _();
      return (_(_, _), _(_(_.expr, _), _), [_(_)]);
    } else if (_.type == `plus`) {
      let _ = _();
      return (_(_(_.expr, _), _), _(_(_.expr, _), _), [_(_)]);
    } else if (_.type == `opt`) return [_(_)].concat(_(_.expr, _));
    else if (_.type == `range`) {
      let _ = _;
      for (let _ = 0; _ < _.min; _++) {
        let _ = _();
        (_(_(_.expr, _), _), (_ = _));
      }
      if (_.max == -1) _(_(_.expr, _), _);
      else
        for (let _ = _.min; _ < _.max; _++) {
          let _ = _();
          (_(_, _), _(_(_.expr, _), _), (_ = _));
        }
      return [_(_)];
    } else if (_.type == `name`) return [_(_, void 0, _.value)];
    else throw Error(`Unknown expr type`);
  }
}
function _(_, _) {
  return _ - _;
}
function _(_, _) {
  let _ = [];
  return (_(_), _.sort(_));
  function _(_) {
    let _ = _[_];
    if (_.length == 1 && !_[0].term) return _(_[0]._);
    _.push(_);
    for (let _ = 0; _ < _.length; _++) {
      let { term: _, _: _ } = _[_];
      !_ && _.indexOf(_) == -1 && _(_);
    }
  }
}
function _(_) {
  let _ = Object.create(null);
  return _(_(_, 0));
  function _(_) {
    let _ = [];
    _.forEach((_) => {
      _[_].forEach(({ term: _, _: _ }) => {
        if (!_) return;
        let _;
        for (let _ = 0; _ < _.length; _++) _[_][0] == _ && (_ = _[_][1]);
        _(_, _).forEach((_) => {
          (_ || _.push([_, (_ = [])]), _.indexOf(_) == -1 && _.push(_));
        });
      });
    });
    let _ = (_[_.join(`,`)] = new _(_.indexOf(_.length - 1) > -1));
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_][1].sort(_);
      _.next.push({
        type: _[_][0],
        next: _[_.join(`,`)] || _(_),
      });
    }
    return _;
  }
}
function _(_, _) {
  for (let _ = 0, _ = [_]; _ < _.length; _++) {
    let _ = _[_],
      _ = !_.validEnd,
      _ = [];
    for (let _ = 0; _ < _.next.length; _++) {
      let { type: _, next: _ } = _.next[_];
      (_.push(_.name),
        _ && !(_.isText || _.hasRequiredAttrs()) && (_ = !1),
        _.indexOf(_) == -1 && _.push(_));
    }
    _ &&
      _.err(
        `Only non-generatable nodes (` +
          _.join(`, `) +
          `) in a required position (see https://prosemirror.net/docs/guide/#generatable)`,
      );
  }
}
function _(_) {
  let _ = Object.create(null);
  for (let _ in _) {
    let _ = _[_];
    if (!_.hasDefault) return null;
    _[_] = _.default;
  }
  return _;
}
function _(_, _) {
  let _ = Object.create(null);
  for (let _ in _) {
    let _ = _[_],
      _ = _ && _[_];
    if (_ === void 0) {
      if (_.hasDefault) _ = _.default;
      else throw RangeError(`No value supplied for attribute ` + _);
    } else _.validate && _.validate(_);
    _[_] = _;
  }
  return _;
}
function _(_, _) {
  let _ = Object.create(null);
  if (_) for (let _ in _) _[_] = new _(_, _, _[_]);
  return _;
}
var _ = class _ {
  constructor(_, _, _) {
    ((this.name = _),
      (this.schema = _),
      (this.spec = _),
      (this.markSet = null),
      (this.groups = _.group ? _.group.split(` `) : []),
      (this.attrs = _(_, _.attrs)),
      (this.defaultAttrs = _(this.attrs)),
      (this.contentMatch = null),
      (this.inlineContent = null),
      (this.isBlock = !(_.inline || _ == `text`)),
      (this.isText = _ == `text`));
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == _.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(_) {
    return this.groups.indexOf(_) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? `pre` : `normal`);
  }
  hasRequiredAttrs() {
    for (let _ in this.attrs) if (this.attrs[_].isRequired) return !0;
    return !1;
  }
  compatibleContent(_) {
    return this == _ || this.contentMatch.compatible(_.contentMatch);
  }
  computeAttrs(_) {
    return !_ && this.defaultAttrs ? this.defaultAttrs : _(this.attrs, _);
  }
  create(_ = null, _, _) {
    if (this.isText) throw Error(`NodeType.create can't construct text nodes`);
    return new _(this, this.computeAttrs(_), _.from(_), _.setFrom(_));
  }
  createChecked(_ = null, _, _) {
    return (
      (_ = _.from(_)),
      this.checkContent(_),
      new _(this, this.computeAttrs(_), _, _.setFrom(_))
    );
  }
  createAndFill(_ = null, _, _) {
    if (((_ = this.computeAttrs(_)), (_ = _.from(_)), _.size)) {
      let _ = this.contentMatch.fillBefore(_);
      if (!_) return null;
      _ = _.append(_);
    }
    let _ = this.contentMatch.matchFragment(_),
      _ = _ && _.fillBefore(_.empty, !0);
    return _ ? new _(this, _, _.append(_), _.setFrom(_)) : null;
  }
  validContent(_) {
    let _ = this.contentMatch.matchFragment(_);
    if (!_ || !_.validEnd) return !1;
    for (let _ = 0; _ < _.childCount; _++)
      if (!this.allowsMarks(_.child(_).marks)) return !1;
    return !0;
  }
  checkContent(_) {
    if (!this.validContent(_))
      throw RangeError(
        `Invalid content for node ${this.name}: ${_.toString().slice(0, 50)}`,
      );
  }
  checkAttrs(_) {}
  allowsMarkType(_) {
    return this.markSet == null || this.markSet.indexOf(_) > -1;
  }
  allowsMarks(_) {
    if (this.markSet == null) return !0;
    for (let _ = 0; _ < _.length; _++)
      if (!this.allowsMarkType(_[_].type)) return !1;
    return !0;
  }
  allowedMarks(_) {
    if (this.markSet == null) return _;
    let _;
    for (let _ = 0; _ < _.length; _++)
      this.allowsMarkType(_[_].type)
        ? _ && _.push(_[_])
        : (_ ||= _.slice(0, _));
    return _ ? (_.length ? _ : _.none) : _;
  }
  static compile(_, _) {
    let _ = Object.create(null);
    _.forEach((_, _) => (_[_] = new _(_, _, _)));
    let _ = _.spec.topNode || `doc`;
    if (!_[_])
      throw RangeError(`Schema is missing its top node type ('` + _ + `')`);
    if (!_.text) throw RangeError(`Every schema needs a 'text' type`);
    for (let _ in _.text.attrs)
      throw RangeError(`The text node type should not have attributes`);
    return _;
  }
};
function _(_, _, _) {
  let _ = _.split(`|`);
  return (_) => {
    let _ = _ === null ? `null` : typeof _;
    if (_.indexOf(_) < 0)
      throw RangeError(
        `Expected value of type ${_} for attribute ${_} on type ${_}, got ${_}`,
      );
  };
}
var _ = class {
    constructor(_, _, _) {
      ((this.hasDefault = Object.prototype.hasOwnProperty.call(_, `default`)),
        (this.default = _.default),
        (this.validate =
          typeof _.validate == `string` ? _(_, _, _.validate) : _.validate));
    }
    get isRequired() {
      return !this.hasDefault;
    }
  },
  _ = class _ {
    constructor(_, _, _, _) {
      ((this.name = _),
        (this.rank = _),
        (this.schema = _),
        (this.spec = _),
        (this.attrs = _(_, _.attrs)),
        (this.excluded = null));
      let _ = _(this.attrs);
      this.instance = _ ? new _(this, _) : null;
    }
    create(_ = null) {
      return !_ && this.instance
        ? this.instance
        : new _(this, _(this.attrs, _));
    }
    static compile(_, _) {
      let _ = Object.create(null),
        _ = 0;
      return (_.forEach((_, _) => (_[_] = new _(_, _++, _, _))), _);
    }
    removeFromSet(_) {
      for (var _ = 0; _ < _.length; _++)
        _[_].type == this && ((_ = _.slice(0, _).concat(_.slice(_ + 1))), _--);
      return _;
    }
    isInSet(_) {
      for (let _ = 0; _ < _.length; _++) if (_[_].type == this) return _[_];
    }
    excludes(_) {
      return this.excluded.indexOf(_) > -1;
    }
  },
  _ = class {
    constructor(_) {
      ((this.linebreakReplacement = null), (this.cached = Object.create(null)));
      let _ = (this.spec = {});
      for (let _ in _) _[_] = _[_];
      ((_.nodes = _.from(_.nodes)),
        (_.marks = _.from(_.marks || {})),
        (this.nodes = _.compile(this.spec.nodes, this)),
        (this.marks = _.compile(this.spec.marks, this)));
      let _ = Object.create(null);
      for (let _ in this.nodes) {
        if (_ in this.marks)
          throw RangeError(_ + ` can not be both a node and a mark`);
        let _ = this.nodes[_],
          _ = _.spec.content || ``,
          _ = _.spec.marks;
        if (
          ((_.contentMatch = _[_] || (_[_] = _.parse(_, this.nodes))),
          (_.inlineContent = _.contentMatch.inlineContent),
          _.spec.linebreakReplacement)
        ) {
          if (this.linebreakReplacement)
            throw RangeError(`Multiple linebreak nodes defined`);
          if (!_.isInline || !_.isLeaf)
            throw RangeError(
              `Linebreak replacement nodes must be inline leaf nodes`,
            );
          this.linebreakReplacement = _;
        }
        _.markSet =
          _ == `_`
            ? null
            : _
              ? _(this, _.split(` `))
              : _ == `` || !_.inlineContent
                ? []
                : null;
      }
      for (let _ in this.marks) {
        let _ = this.marks[_],
          _ = _.spec.excludes;
        _.excluded = _ == null ? [_] : _ == `` ? [] : _(this, _.split(` `));
      }
      ((this.nodeFromJSON = (_) => _.fromJSON(this, _)),
        (this.markFromJSON = (_) => _.fromJSON(this, _)),
        (this.topNodeType = this.nodes[this.spec.topNode || `doc`]),
        (this.cached.wrappings = Object.create(null)));
    }
    node(_, _ = null, _, _) {
      if (typeof _ == `string`) _ = this.nodeType(_);
      else if (!(_ instanceof _)) throw RangeError(`Invalid node type: ` + _);
      else if (_.schema != this)
        throw RangeError(
          `Node type from different schema used (` + _.name + `)`,
        );
      return _.createChecked(_, _, _);
    }
    text(_, _) {
      let _ = this.nodes.text;
      return new _(_, _.defaultAttrs, _, _.setFrom(_));
    }
    mark(_, _) {
      return (typeof _ == `string` && (_ = this.marks[_]), _.create(_));
    }
    nodeType(_) {
      let _ = this.nodes[_];
      if (!_) throw RangeError(`Unknown node type: ` + _);
      return _;
    }
  };
function _(_, _) {
  let _ = [];
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _.marks[_],
      _ = _;
    if (_) _.push(_);
    else
      for (let _ in _.marks) {
        let _ = _.marks[_];
        (_ == `_` ||
          (_.spec.group && _.spec.group.split(` `).indexOf(_) > -1)) &&
          _.push((_ = _));
      }
    if (!_) throw SyntaxError(`Unknown mark type: '` + _[_] + `'`);
  }
  return _;
}
function _(_) {
  return _.tag != null;
}
function _(_) {
  return _.style != null;
}
var _ = class _ {
    constructor(_, _) {
      ((this.schema = _),
        (this.rules = _),
        (this.tags = []),
        (this.styles = []));
      let _ = (this.matchedStyles = []);
      (_.forEach((_) => {
        if (_(_)) this.tags.push(_);
        else if (_(_)) {
          let _ = /[^=]*/.exec(_.style)[0];
          (_.indexOf(_) < 0 && _.push(_), this.styles.push(_));
        }
      }),
        (this.normalizeLists = !this.tags.some((_) => {
          if (!/^(ul|ol)\b/.test(_.tag) || !_.node) return !1;
          let _ = _.nodes[_.node];
          return _.contentMatch.matchType(_);
        })));
    }
    parse(_, _ = {}) {
      let _ = new _(this, _, !1);
      return (_.addAll(_, _.none, _.from, _._), _.finish());
    }
    parseSlice(_, _ = {}) {
      let _ = new _(this, _, !0);
      return (_.addAll(_, _.none, _.from, _._), _.maxOpen(_.finish()));
    }
    matchTag(_, _, _) {
      for (
        let _ = _ ? this.tags.indexOf(_) + 1 : 0;
        _ < this.tags.length;
        _++
      ) {
        let _ = this.tags[_];
        if (
          _(_, _.tag) &&
          (_.namespace === void 0 || _.namespaceURI == _.namespace) &&
          (!_.context || _.matchesContext(_.context))
        ) {
          if (_.getAttrs) {
            let _ = _.getAttrs(_);
            if (_ === !1) continue;
            _.attrs = _ || void 0;
          }
          return _;
        }
      }
    }
    matchStyle(_, _, _, _) {
      for (
        let _ = _ ? this.styles.indexOf(_) + 1 : 0;
        _ < this.styles.length;
        _++
      ) {
        let _ = this.styles[_],
          _ = _.style;
        if (
          !(
            _.indexOf(_) != 0 ||
            (_.context && !_.matchesContext(_.context)) ||
            (_.length > _.length &&
              (_.charCodeAt(_.length) != 61 || _.slice(_.length + 1) != _))
          )
        ) {
          if (_.getAttrs) {
            let _ = _.getAttrs(_);
            if (_ === !1) continue;
            _.attrs = _ || void 0;
          }
          return _;
        }
      }
    }
    static schemaRules(_) {
      let _ = [];
      function _(_) {
        let _ = _.priority == null ? 50 : _.priority,
          _ = 0;
        for (; _ < _.length; _++) {
          let _ = _[_];
          if ((_.priority == null ? 50 : _.priority) < _) break;
        }
        _.splice(_, 0, _);
      }
      for (let _ in _.marks) {
        let _ = _.marks[_].spec.parseDOM;
        _ &&
          _.forEach((_) => {
            (_((_ = _(_))), _.mark || _.ignore || _.clearMark || (_.mark = _));
          });
      }
      for (let _ in _.nodes) {
        let _ = _.nodes[_].spec.parseDOM;
        _ &&
          _.forEach((_) => {
            (_((_ = _(_))), _.node || _.ignore || _.mark || (_.node = _));
          });
      }
      return _;
    }
    static fromSchema(_) {
      return (
        _.cached.domParser || (_.cached.domParser = new _(_, _.schemaRules(_)))
      );
    }
  },
  _ = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    body: !0,
    canvas: !0,
    _: !0,
    div: !0,
    _: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    _: !0,
    _: !0,
    _: !0,
    _: !0,
    _: !0,
    _: !0,
    header: !0,
    hgroup: !0,
    _: !0,
    _: !0,
    noscript: !0,
    _: !0,
    output: !0,
    _: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    _: !0,
  },
  _ = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0,
  },
  _ = {
    _: !0,
    _: !0,
  },
  _ = 1,
  _ = 2,
  _ = 4;
function _(_, _, _) {
  return _ == null
    ? _ && _.whitespace == `pre`
      ? 3
      : _ & -5
    : (_ ? _ : 0) | (_ === `full` ? _ : 0);
}
var _ = class {
    constructor(_, _, _, _, _, _) {
      ((this.type = _),
        (this.attrs = _),
        (this.marks = _),
        (this.solid = _),
        (this.options = _),
        (this.content = []),
        (this.activeMarks = _.none),
        (this.match = _ || (_ & _ ? null : _.contentMatch)));
    }
    findWrapping(_) {
      if (!this.match) {
        if (!this.type) return [];
        let _ = this.type.contentMatch.fillBefore(_.from(_));
        if (_) this.match = this.type.contentMatch.matchFragment(_);
        else {
          let _ = this.type.contentMatch,
            _;
          return (_ = _.findWrapping(_.type)) ? ((this.match = _), _) : null;
        }
      }
      return this.match.findWrapping(_.type);
    }
    finish(_) {
      if (!(this.options & _)) {
        let _ = this.content[this.content.length - 1],
          _;
        if (_ && _.isText && (_ = /[ \t\r\n\u000c]+$/.exec(_.text))) {
          let _ = _;
          _.text.length == _[0].length
            ? this.content.pop()
            : (this.content[this.content.length - 1] = _.withText(
                _.text.slice(0, _.text.length - _[0].length),
              ));
        }
      }
      let _ = _.from(this.content);
      return (
        !_ && this.match && (_ = _.append(this.match.fillBefore(_.empty, !0))),
        this.type ? this.type.create(this.attrs, _, this.marks) : _
      );
    }
    inlineContext(_) {
      return this.type
        ? this.type.inlineContent
        : this.content.length
          ? this.content[0].isInline
          : _.parentNode &&
            !_.hasOwnProperty(_.parentNode.nodeName.toLowerCase());
    }
  },
  _ = class {
    constructor(_, _, _) {
      ((this.parser = _),
        (this.options = _),
        (this.isOpen = _),
        (this.open = 0),
        (this.localPreserveWS = !1));
      let _ = _.topNode,
        _,
        _ = _(null, _.preserveWhitespace, 0) | (_ ? _ : 0);
      ((_ = _
        ? new _(
            _.type,
            _.attrs,
            _.none,
            !0,
            _.topMatch || _.type.contentMatch,
            _,
          )
        : _
          ? new _(null, null, _.none, !0, null, _)
          : new _(_.schema.topNodeType, null, _.none, !0, null, _)),
        (this.nodes = [_]),
        (this.find = _.findPositions),
        (this.needsBlock = !1));
    }
    get top() {
      return this.nodes[this.open];
    }
    addDOM(_, _) {
      _.nodeType == 3
        ? this.addTextNode(_, _)
        : _.nodeType == 1 && this.addElement(_, _);
    }
    addTextNode(_, _) {
      let _ = _.nodeValue,
        _ = this.top,
        _ =
          _.options & _ ? `full` : this.localPreserveWS || (_.options & _) > 0,
        { schema: _ } = this.parser;
      if (_ === `full` || _.inlineContext(_) || /[^ \t\r\n\u000c]/.test(_)) {
        if (!_) {
          if (
            ((_ = _.replace(/[ \t\r\n\u000c]+/g, ` `)),
            /^[ \t\r\n\u000c]/.test(_) && this.open == this.nodes.length - 1)
          ) {
            let _ = _.content[_.content.length - 1],
              _ = _.previousSibling;
            (!_ ||
              (_ && _.nodeName == `BR`) ||
              (_.isText && /[ \t\r\n\u000c]$/.test(_.text))) &&
              (_ = _.slice(1));
          }
        } else if (_ === `full`)
          _ = _.replace(
            /\r\n?/g,
            `
`,
          );
        else if (
          _.linebreakReplacement &&
          /[\r\n]/.test(_) &&
          this.top.findWrapping(_.linebreakReplacement.create())
        ) {
          let _ = _.split(/\r?\n|\r/);
          for (let _ = 0; _ < _.length; _++)
            (_ && this.insertNode(_.linebreakReplacement.create(), _, !0),
              _[_] && this.insertNode(_.text(_[_]), _, !/\S/.test(_[_])));
          _ = ``;
        } else _ = _.replace(/\r?\n|\r/g, ` `);
        (_ && this.insertNode(_.text(_), _, !/\S/.test(_)), this.findInText(_));
      } else this.findInside(_);
    }
    addElement(_, _, _) {
      let _ = this.localPreserveWS,
        _ = this.top;
      (_.tagName == `PRE` || /pre/.test(_.style && _.style.whiteSpace)) &&
        (this.localPreserveWS = !0);
      let _ = _.nodeName.toLowerCase(),
        _;
      _.hasOwnProperty(_) && this.parser.normalizeLists && _(_);
      let _ =
        (this.options.ruleFromNode && this.options.ruleFromNode(_)) ||
        (_ = this.parser.matchTag(_, this, _));
      out: if (_ ? _.ignore : _.hasOwnProperty(_))
        (this.findInside(_), this.ignoreFallback(_, _));
      else if (!_ || _.skip || _.closeParent) {
        _ && _.closeParent
          ? (this.open = Math.max(0, this.open - 1))
          : _ && _.skip.nodeType && (_ = _.skip);
        let _,
          _ = this.needsBlock;
        if (_.hasOwnProperty(_))
          (_.content.length &&
            _.content[0].isInline &&
            this.open &&
            (this.open--, (_ = this.top)),
            (_ = !0),
            _.type || (this.needsBlock = !0));
        else if (!_.firstChild) {
          this.leafFallback(_, _);
          break out;
        }
        let _ = _ && _.skip ? _ : this.readStyles(_, _);
        (_ && this.addAll(_, _), _ && this.sync(_), (this.needsBlock = _));
      } else {
        let _ = this.readStyles(_, _);
        _ && this.addElementByRule(_, _, _, _.consuming === !1 ? _ : void 0);
      }
      this.localPreserveWS = _;
    }
    leafFallback(_, _) {
      _.nodeName == `BR` &&
        this.top.type &&
        this.top.type.inlineContent &&
        this.addTextNode(
          _.ownerDocument.createTextNode(`
`),
          _,
        );
    }
    ignoreFallback(_, _) {
      _.nodeName != `BR` ||
        (this.top.type && this.top.type.inlineContent) ||
        this.findPlace(this.parser.schema.text(`-`), _, !0);
    }
    readStyles(_, _) {
      let _ = _.style;
      if (_ && _.length)
        for (let _ = 0; _ < this.parser.matchedStyles.length; _++) {
          let _ = this.parser.matchedStyles[_],
            _ = _.getPropertyValue(_);
          if (_)
            for (let _; ;) {
              let _ = this.parser.matchStyle(_, _, this, _);
              if (!_) break;
              if (_.ignore) return null;
              if (
                ((_ = _.clearMark
                  ? _.filter((_) => !_.clearMark(_))
                  : _.concat(this.parser.schema.marks[_.mark].create(_.attrs))),
                _.consuming === !1)
              )
                _ = _;
              else break;
            }
        }
      return _;
    }
    addElementByRule(_, _, _, _) {
      let _, _;
      if (_.node) {
        if (((_ = this.parser.schema.nodes[_.node]), _.isLeaf))
          this.insertNode(_.create(_.attrs), _, _.nodeName == `BR`) ||
            this.leafFallback(_, _);
        else {
          let _ = this.enter(_, _.attrs || null, _, _.preserveWhitespace);
          _ && ((_ = !0), (_ = _));
        }
      } else {
        let _ = this.parser.schema.marks[_.mark];
        _ = _.concat(_.create(_.attrs));
      }
      let _ = this.top;
      if (_ && _.isLeaf) this.findInside(_);
      else if (_) this.addElement(_, _, _);
      else if (_.getContent)
        (this.findInside(_),
          _.getContent(_, this.parser.schema).forEach((_) =>
            this.insertNode(_, _, !1),
          ));
      else {
        let _ = _;
        (typeof _.contentElement == `string`
          ? (_ = _.querySelector(_.contentElement))
          : typeof _.contentElement == `function`
            ? (_ = _.contentElement(_))
            : _.contentElement && (_ = _.contentElement),
          this.findAround(_, _, !0),
          this.addAll(_, _),
          this.findAround(_, _, !1));
      }
      _ && this.sync(_) && this.open--;
    }
    addAll(_, _, _, _) {
      let _ = _ || 0;
      for (
        let _ = _ ? _.childNodes[_] : _.firstChild,
          _ = _ == null ? null : _.childNodes[_];
        _ != _;
        _ = _.nextSibling, ++_
      )
        (this.findAtPoint(_, _), this.addDOM(_, _));
      this.findAtPoint(_, _);
    }
    findPlace(_, _, _) {
      let _, _;
      for (let _ = this.open, _ = 0; _ >= 0; _--) {
        let _ = this.nodes[_],
          _ = _.findWrapping(_);
        if (
          _ &&
          (!_ || _.length > _.length + _) &&
          ((_ = _), (_ = _), !_.length)
        )
          break;
        if (_.solid) {
          if (_) break;
          _ += 2;
        }
      }
      if (!_) return null;
      this.sync(_);
      for (let _ = 0; _ < _.length; _++) _ = this.enterInner(_[_], null, _, !1);
      return _;
    }
    insertNode(_, _, _) {
      if (_.isInline && this.needsBlock && !this.top.type) {
        let _ = this.textblockFromContext();
        _ && (_ = this.enterInner(_, null, _));
      }
      let _ = this.findPlace(_, _, _);
      if (_) {
        this.closeExtra();
        let _ = this.top;
        _.match &&= _.match.matchType(_.type);
        let _ = _.none;
        for (let _ of _.concat(_.marks))
          (_.type ? _.type.allowsMarkType(_.type) : _(_.type, _.type)) &&
            (_ = _.addToSet(_));
        return (_.content.push(_.mark(_)), !0);
      }
      return !1;
    }
    enter(_, _, _, _) {
      let _ = this.findPlace(_.create(_), _, !1);
      return ((_ &&= this.enterInner(_, _, _, !0, _)), _);
    }
    enterInner(_, _, _, _ = !1, _) {
      this.closeExtra();
      let _ = this.top;
      _.match = _.match && _.match.matchType(_);
      let _ = _(_, _, _.options);
      _.options & _ && _.content.length == 0 && (_ |= _);
      let _ = _.none;
      return (
        (_ = _.filter(
          (_) =>
            !(_.type ? _.type.allowsMarkType(_.type) : _(_.type, _)) ||
            ((_ = _.addToSet(_)), !1),
        )),
        this.nodes.push(new _(_, _, _, _, null, _)),
        this.open++,
        _
      );
    }
    closeExtra(_ = !1) {
      let _ = this.nodes.length - 1;
      if (_ > this.open) {
        for (; _ > this.open; _--)
          this.nodes[_ - 1].content.push(this.nodes[_].finish(_));
        this.nodes.length = this.open + 1;
      }
    }
    finish() {
      return (
        (this.open = 0),
        this.closeExtra(this.isOpen),
        this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
      );
    }
    sync(_) {
      for (let _ = this.open; _ >= 0; _--)
        if (this.nodes[_] == _) return ((this.open = _), !0);
        else this.localPreserveWS && (this.nodes[_].options |= _);
      return !1;
    }
    get currentPos() {
      this.closeExtra();
      let _ = 0;
      for (let _ = this.open; _ >= 0; _--) {
        let _ = this.nodes[_].content;
        for (let _ = _.length - 1; _ >= 0; _--) _ += _[_].nodeSize;
        _ && _++;
      }
      return _;
    }
    findAtPoint(_, _) {
      if (this.find)
        for (let _ = 0; _ < this.find.length; _++)
          this.find[_].node == _ &&
            this.find[_].offset == _ &&
            (this.find[_].pos = this.currentPos);
    }
    findInside(_) {
      if (this.find)
        for (let _ = 0; _ < this.find.length; _++)
          this.find[_].pos == null &&
            _.nodeType == 1 &&
            _.contains(this.find[_].node) &&
            (this.find[_].pos = this.currentPos);
    }
    findAround(_, _, _) {
      if (_ != _ && this.find)
        for (let _ = 0; _ < this.find.length; _++)
          this.find[_].pos == null &&
            _.nodeType == 1 &&
            _.contains(this.find[_].node) &&
            _.compareDocumentPosition(this.find[_].node) & (_ ? 2 : 4) &&
            (this.find[_].pos = this.currentPos);
    }
    findInText(_) {
      if (this.find)
        for (let _ = 0; _ < this.find.length; _++)
          this.find[_].node == _ &&
            (this.find[_].pos =
              this.currentPos - (_.nodeValue.length - this.find[_].offset));
    }
    matchesContext(_) {
      if (_.indexOf(`|`) > -1)
        return _.split(/\s*\|\s*/).some(this.matchesContext, this);
      let _ = _.split(`/`),
        _ = this.options.context,
        _ = !this.isOpen && (!_ || _.parent.type == this.nodes[0].type),
        _ = -(_ ? _.depth + 1 : 0) + +!_,
        _ = (_, _) => {
          for (; _ >= 0; _--) {
            let _ = _[_];
            if (_ == ``) {
              if (_ == _.length - 1 || _ == 0) continue;
              for (; _ >= _; _--) if (_(_ - 1, _)) return !0;
              return !1;
            }
            {
              let _ =
                _ > 0 || (_ == 0 && _)
                  ? this.nodes[_].type
                  : _ && _ >= _
                    ? _.node(_ - _).type
                    : null;
              if (!_ || (_.name != _ && !_.isInGroup(_))) return !1;
              _--;
            }
          }
          return !0;
        };
      return _(_.length - 1, this.open);
    }
    textblockFromContext() {
      let _ = this.options.context;
      if (_)
        for (let _ = _.depth; _ >= 0; _--) {
          let _ = _.node(_).contentMatchAt(_.indexAfter(_)).defaultType;
          if (_ && _.isTextblock && _.defaultAttrs) return _;
        }
      for (let _ in this.parser.schema.nodes) {
        let _ = this.parser.schema.nodes[_];
        if (_.isTextblock && _.defaultAttrs) return _;
      }
    }
  };
function _(_) {
  for (let _ = _.firstChild, _ = null; _; _ = _.nextSibling) {
    let _ = _.nodeType == 1 ? _.nodeName.toLowerCase() : null;
    _ && _.hasOwnProperty(_) && _
      ? (_.appendChild(_), (_ = _))
      : _ == `li`
        ? (_ = _)
        : _ && (_ = null);
  }
}
function _(_, _) {
  return (
    _.matches ||
    _.msMatchesSelector ||
    _.webkitMatchesSelector ||
    _.mozMatchesSelector
  ).call(_, _);
}
function _(_) {
  let _ = {};
  for (let _ in _) _[_] = _[_];
  return _;
}
function _(_, _) {
  let _ = _.schema.nodes;
  for (let _ in _) {
    let _ = _[_];
    if (!_.allowsMarkType(_)) continue;
    let _ = [],
      _ = (_) => {
        _.push(_);
        for (let _ = 0; _ < _.edgeCount; _++) {
          let { type: _, next: _ } = _.edge(_);
          if (_ == _ || (_.indexOf(_) < 0 && _(_))) return !0;
        }
      };
    if (_(_.contentMatch)) return !0;
  }
}
var _ = class _ {
  constructor(_, _) {
    ((this.nodes = _), (this.marks = _));
  }
  serializeFragment(_, _ = {}, _) {
    _ ||= _(_).createDocumentFragment();
    let _ = _,
      _ = [];
    return (
      _.forEach((_) => {
        if (_.length || _.marks.length) {
          let _ = 0,
            _ = 0;
          for (; _ < _.length && _ < _.marks.length;) {
            let _ = _.marks[_];
            if (!this.marks[_.type.name]) _++;
            else {
              if (!_._(_[_][0]) || _.type.spec.spanning === !1) break;
              (_++, _++);
            }
          }
          for (; _ < _.length;) _ = _.pop()[1];
          for (; _ < _.marks.length;) {
            let _ = _.marks[_++],
              _ = this.serializeMark(_, _.isInline, _);
            _ &&
              (_.push([_, _]),
              _.appendChild(_.dom),
              (_ = _.contentDOM || _.dom));
          }
        }
        _.appendChild(this.serializeNodeInner(_, _));
      }),
      _
    );
  }
  serializeNodeInner(_, _) {
    if (_.isText) return _(_).createTextNode(_.text);
    let { dom: _, contentDOM: _ } = _(
      _(_),
      this.nodes[_.type.name](_),
      null,
      _.attrs,
    );
    if (_) {
      if (_.isLeaf)
        throw RangeError(`Content hole not allowed in a leaf node spec`);
      this.serializeFragment(_.content, _, _);
    }
    return _;
  }
  serializeNode(_, _ = {}) {
    let _ = this.serializeNodeInner(_, _);
    for (let _ = _.marks.length - 1; _ >= 0; _--) {
      let _ = this.serializeMark(_.marks[_], _.isInline, _);
      _ && ((_.contentDOM || _.dom).appendChild(_), (_ = _.dom));
    }
    return _;
  }
  serializeMark(_, _, _ = {}) {
    let _ = this.marks[_.type.name];
    return _ && _(_(_), _(_, _), null, _.attrs);
  }
  static renderSpec(_, _, _ = null, _) {
    return typeof _ == `string`
      ? {
          dom: _.createTextNode(_),
        }
      : _(_, _, _, _);
  }
  static fromSchema(_) {
    return (
      _.cached.domSerializer ||
      (_.cached.domSerializer = new _(
        this.nodesFromSchema(_),
        this.marksFromSchema(_),
      ))
    );
  }
  static nodesFromSchema(_) {
    let _ = _(_.nodes);
    return ((_.text ||= (_) => _.text), _);
  }
  static marksFromSchema(_) {
    return _(_.marks);
  }
};
function _(_) {
  let _ = {};
  for (let _ in _) {
    let _ = _[_].spec.toDOM;
    _ && (_[_] = _);
  }
  return _;
}
function _(_) {
  return _.document || window.document;
}
var _ = new WeakMap();
function _(_) {
  let _ = _.get(_);
  return (_ === void 0 && _.set(_, (_ = _(_))), _);
}
function _(_) {
  let _ = null;
  function _(_) {
    if (_ && typeof _ == `object`) {
      if (Array.isArray(_)) {
        if (typeof _[0] == `string`) ((_ ||= []), _.push(_));
        else for (let _ = 0; _ < _.length; _++) _(_[_]);
      } else for (let _ in _) _(_[_]);
    }
  }
  return (_(_), _);
}
function _(_, _, _, _) {
  if (_.nodeType == 1)
    return {
      dom: _,
    };
  if (_.dom && _.dom.nodeType == 1) return _;
  let _ = _[0],
    _;
  if (typeof _ != `string`)
    throw RangeError(`Invalid array passed to renderSpec`);
  if (_ && (_ = _(_)) && _.indexOf(_) > -1)
    throw RangeError(
      `Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`,
    );
  let _ = _.indexOf(` `);
  _ > 0 && ((_ = _.slice(0, _)), (_ = _.slice(_ + 1)));
  let _,
    _ = _ ? _.createElementNS(_, _) : _.createElement(_),
    _ = _[1],
    _ = 1;
  if (_ && typeof _ == `object` && _.nodeType == null && !Array.isArray(_)) {
    _ = 2;
    for (let _ in _)
      if (_[_] != null) {
        let _ = _.indexOf(` `);
        _ > 0
          ? _.setAttributeNS(_.slice(0, _), _.slice(_ + 1), _[_])
          : _ == `style` && _.style
            ? (_.style.cssText = _[_])
            : _.setAttribute(_, _[_]);
      }
  }
  for (let _ = _; _ < _.length; _++) {
    let _ = _[_];
    if (_ === 0) {
      if (_ < _.length - 1 || _ > _)
        throw RangeError(
          `Content hole must be the only child of its parent node`,
        );
      return {
        dom: _,
        contentDOM: _,
      };
    }
    if (typeof _ == `string`) _.appendChild(_.createTextNode(_));
    else {
      let { dom: _, contentDOM: _ } = _(_, _, _, _);
      if ((_.appendChild(_), _)) {
        if (_) throw RangeError(`Multiple content holes`);
        _ = _;
      }
    }
  }
  return {
    dom: _,
    contentDOM: _,
  };
}
var _ = 65535,
  _ = 2 ** 16;
function _(_, _) {
  return _ + _ * _;
}
function _(_) {
  return _ & _;
}
function _(_) {
  return (_ - (_ & _)) / _;
}
var _ = 1,
  _ = 2,
  _ = 4,
  _ = 8,
  _ = class {
    constructor(_, _, _) {
      ((this.pos = _), (this.delInfo = _), (this.recover = _));
    }
    get deleted() {
      return (this.delInfo & _) > 0;
    }
    get deletedBefore() {
      return (this.delInfo & 5) > 0;
    }
    get deletedAfter() {
      return (this.delInfo & 6) > 0;
    }
    get deletedAcross() {
      return (this.delInfo & _) > 0;
    }
  },
  _ = class _ {
    constructor(_, _ = !1) {
      if (((this.ranges = _), (this.inverted = _), !_.length && _.empty))
        return _.empty;
    }
    recover(_) {
      let _ = 0,
        _ = _(_);
      if (!this.inverted)
        for (let _ = 0; _ < _; _++)
          _ += this.ranges[_ * 3 + 2] - this.ranges[_ * 3 + 1];
      return this.ranges[_ * 3] + _ + _(_);
    }
    mapResult(_, _ = 1) {
      return this._map(_, _, !1);
    }
    map(_, _ = 1) {
      return this._map(_, _, !0);
    }
    _map(_, _, _) {
      let _ = 0,
        _ = this.inverted ? 2 : 1,
        _ = this.inverted ? 1 : 2;
      for (let _ = 0; _ < this.ranges.length; _ += 3) {
        let _ = this.ranges[_] - (this.inverted ? _ : 0);
        if (_ > _) break;
        let _ = this.ranges[_ + _],
          _ = this.ranges[_ + _],
          _ = _ + _;
        if (_ <= _) {
          let _ = _ ? (_ == _ ? -1 : _ == _ ? 1 : _) : _,
            _ = _ + _ + (_ < 0 ? 0 : _);
          if (_) return _;
          let _ = _ == (_ < 0 ? _ : _) ? null : _(_ / 3, _ - _),
            _ = _ == _ ? _ : _ == _ ? _ : _;
          return ((_ < 0 ? _ != _ : _ != _) && (_ |= _), new _(_, _, _));
        }
        _ += _ - _;
      }
      return _ ? _ + _ : new _(_ + _, 0, null);
    }
    touches(_, _) {
      let _ = 0,
        _ = _(_),
        _ = this.inverted ? 2 : 1,
        _ = this.inverted ? 1 : 2;
      for (let _ = 0; _ < this.ranges.length; _ += 3) {
        let _ = this.ranges[_] - (this.inverted ? _ : 0);
        if (_ > _) break;
        let _ = this.ranges[_ + _];
        if (_ <= _ + _ && _ == _ * 3) return !0;
        _ += this.ranges[_ + _] - _;
      }
      return !1;
    }
    forEach(_) {
      let _ = this.inverted ? 2 : 1,
        _ = this.inverted ? 1 : 2;
      for (let _ = 0, _ = 0; _ < this.ranges.length; _ += 3) {
        let _ = this.ranges[_],
          _ = _ - (this.inverted ? _ : 0),
          _ = _ + (this.inverted ? 0 : _),
          _ = this.ranges[_ + _],
          _ = this.ranges[_ + _];
        (_(_, _ + _, _, _ + _), (_ += _ - _));
      }
    }
    invert() {
      return new _(this.ranges, !this.inverted);
    }
    toString() {
      return (this.inverted ? `-` : ``) + JSON.stringify(this.ranges);
    }
    static offset(_) {
      return _ == 0 ? _.empty : new _(_ < 0 ? [0, -_, 0] : [0, 0, _]);
    }
  };
_.empty = new _([]);
var _ = class _ {
    constructor(_, _, _ = 0, _ = _ ? _.length : 0) {
      ((this.mirror = _),
        (this.from = _),
        (this._ = _),
        (this._maps = _ || []),
        (this.ownData = !(_ || _)));
    }
    get maps() {
      return this._maps;
    }
    slice(_ = 0, _ = this.maps.length) {
      return new _(this._maps, this.mirror, _, _);
    }
    appendMap(_, _) {
      ((this.ownData ||=
        ((this._maps = this._maps.slice()),
        (this.mirror = this.mirror && this.mirror.slice()),
        !0)),
        (this._ = this._maps.push(_)),
        _ != null && this.setMirror(this._maps.length - 1, _));
    }
    appendMapping(_) {
      for (let _ = 0, _ = this._maps.length; _ < _._maps.length; _++) {
        let _ = _.getMirror(_);
        this.appendMap(_._maps[_], _ != null && _ < _ ? _ + _ : void 0);
      }
    }
    getMirror(_) {
      if (this.mirror) {
        for (let _ = 0; _ < this.mirror.length; _++)
          if (this.mirror[_] == _) return this.mirror[_ + (_ % 2 ? -1 : 1)];
      }
    }
    setMirror(_, _) {
      ((this.mirror ||= []), this.mirror.push(_, _));
    }
    appendMappingInverted(_) {
      for (
        let _ = _.maps.length - 1, _ = this._maps.length + _._maps.length;
        _ >= 0;
        _--
      ) {
        let _ = _.getMirror(_);
        this.appendMap(
          _._maps[_].invert(),
          _ != null && _ > _ ? _ - _ - 1 : void 0,
        );
      }
    }
    invert() {
      let _ = new _();
      return (_.appendMappingInverted(this), _);
    }
    map(_, _ = 1) {
      if (this.mirror) return this._map(_, _, !0);
      for (let _ = this.from; _ < this._; _++) _ = this._maps[_].map(_, _);
      return _;
    }
    mapResult(_, _ = 1) {
      return this._map(_, _, !1);
    }
    _map(_, _, _) {
      let _ = 0;
      for (let _ = this.from; _ < this._; _++) {
        let _ = this._maps[_].mapResult(_, _);
        if (_.recover != null) {
          let _ = this.getMirror(_);
          if (_ != null && _ > _ && _ < this._) {
            ((_ = _), (_ = this._maps[_].recover(_.recover)));
            continue;
          }
        }
        ((_ |= _.delInfo), (_ = _.pos));
      }
      return _ ? _ : new _(_, _, null);
    }
  },
  _ = Object.create(null),
  _ = class {
    getMap() {
      return _.empty;
    }
    merge(_) {
      return null;
    }
    static fromJSON(_, _) {
      if (!_ || !_.stepType)
        throw RangeError(`Invalid input for Step.fromJSON`);
      let _ = _[_.stepType];
      if (!_) throw RangeError(`No step type ${_.stepType} defined`);
      return _.fromJSON(_, _);
    }
    static jsonID(_, _) {
      if (_ in _) throw RangeError(`Duplicate use of step JSON ID ` + _);
      return ((_[_] = _), (_.prototype.jsonID = _), _);
    }
  },
  _ = class _ {
    constructor(_, _) {
      ((this.doc = _), (this.failed = _));
    }
    static ok(_) {
      return new _(_, null);
    }
    static fail(_) {
      return new _(null, _);
    }
    static fromReplace(_, _, _, _) {
      try {
        return _._(_.replace(_, _, _));
      } catch (_) {
        if (_ instanceof _) return _.fail(_.message);
        throw _;
      }
    }
  };
function _(_, _, _) {
  let _ = [];
  for (let _ = 0; _ < _.childCount; _++) {
    let _ = _.child(_);
    (_.content.size && (_ = _.copy(_(_.content, _, _))),
      _.isInline && (_ = _(_, _, _)),
      _.push(_));
  }
  return _.fromArray(_);
}
var _ = class _ extends _ {
  constructor(_, _, _) {
    (super(), (this.from = _), (this._ = _), (this.mark = _));
  }
  apply(_) {
    let _ = _.slice(this.from, this._),
      _ = _.resolve(this.from),
      _ = _.node(_.sharedDepth(this._)),
      _ = new _(
        _(
          _.content,
          (_, _) =>
            !_.isAtom || !_.type.allowsMarkType(this.mark.type)
              ? _
              : _.mark(this.mark.addToSet(_.marks)),
          _,
        ),
        _.openStart,
        _.openEnd,
      );
    return _.fromReplace(_, this.from, this._, _);
  }
  invert() {
    return new _(this.from, this._, this.mark);
  }
  map(_) {
    let _ = _.mapResult(this.from, 1),
      _ = _.mapResult(this._, -1);
    return (_.deleted && _.deleted) || _.pos >= _.pos
      ? null
      : new _(_.pos, _.pos, this.mark);
  }
  merge(_) {
    return _ instanceof _ &&
      _.mark._(this.mark) &&
      this.from <= _._ &&
      this._ >= _.from
      ? new _(Math.min(this.from, _.from), Math.max(this._, _._), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: `addMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      _: this._,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.from != `number` || typeof _._ != `number`)
      throw RangeError(`Invalid input for AddMarkStep.fromJSON`);
    return new _(_.from, _._, _.markFromJSON(_.mark));
  }
};
_.jsonID(`addMark`, _);
var _ = class _ extends _ {
  constructor(_, _, _) {
    (super(), (this.from = _), (this._ = _), (this.mark = _));
  }
  apply(_) {
    let _ = _.slice(this.from, this._),
      _ = new _(
        _(_.content, (_) => _.mark(this.mark.removeFromSet(_.marks)), _),
        _.openStart,
        _.openEnd,
      );
    return _.fromReplace(_, this.from, this._, _);
  }
  invert() {
    return new _(this.from, this._, this.mark);
  }
  map(_) {
    let _ = _.mapResult(this.from, 1),
      _ = _.mapResult(this._, -1);
    return (_.deleted && _.deleted) || _.pos >= _.pos
      ? null
      : new _(_.pos, _.pos, this.mark);
  }
  merge(_) {
    return _ instanceof _ &&
      _.mark._(this.mark) &&
      this.from <= _._ &&
      this._ >= _.from
      ? new _(Math.min(this.from, _.from), Math.max(this._, _._), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: `removeMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      _: this._,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.from != `number` || typeof _._ != `number`)
      throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);
    return new _(_.from, _._, _.markFromJSON(_.mark));
  }
};
_.jsonID(`removeMark`, _);
var _ = class _ extends _ {
  constructor(_, _) {
    (super(), (this.pos = _), (this.mark = _));
  }
  apply(_) {
    let _ = _.nodeAt(this.pos);
    if (!_) return _.fail(`No node at mark step's position`);
    let _ = _.type.create(_.attrs, null, this.mark.addToSet(_.marks));
    return _.fromReplace(
      _,
      this.pos,
      this.pos + 1,
      new _(_.from(_), 0, +!_.isLeaf),
    );
  }
  invert(_) {
    let _ = _.nodeAt(this.pos);
    if (_) {
      let _ = this.mark.addToSet(_.marks);
      if (_.length == _.marks.length) {
        for (let _ = 0; _ < _.marks.length; _++)
          if (!_.marks[_].isInSet(_)) return new _(this.pos, _.marks[_]);
        return new _(this.pos, this.mark);
      }
    }
    return new _(this.pos, this.mark);
  }
  map(_) {
    let _ = _.mapResult(this.pos, 1);
    return _.deletedAfter ? null : new _(_.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: `addNodeMark`,
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(_, _) {
    if (typeof _.pos != `number`)
      throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);
    return new _(_.pos, _.markFromJSON(_.mark));
  }
};
_.jsonID(`addNodeMark`, _);
var _ = class _ extends _ {
  constructor(_, _) {
    (super(), (this.pos = _), (this.mark = _));
  }
  apply(_) {
    let _ = _.nodeAt(this.pos);
    if (!_) return _.fail(`No node at mark step's position`);
    let _ = _.type.create(_.attrs, null, this.mark.removeFromSet(_.marks));
    return _.fromReplace(
      _,
      this.pos,
      this.pos + 1,
      new _(_.from(_), 0, +!_.isLeaf),
    );
  }
  invert(_) {
    let _ = _.nodeAt(this.pos);
    return !_ || !this.mark.isInSet(_.marks)
      ? this
      : new _(this.pos, this.mark);
  }
  map(_) {
    let _ = _.mapResult(this.pos, 1);
    return _.deletedAfter ? null : new _(_.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: `removeNodeMark`,
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(_, _) {
    if (typeof _.pos != `number`)
      throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);
    return new _(_.pos, _.markFromJSON(_.mark));
  }
};
_.jsonID(`removeNodeMark`, _);
var _ = class _ extends _ {
  constructor(_, _, _, _ = !1) {
    (super(),
      (this.from = _),
      (this._ = _),
      (this.slice = _),
      (this.structure = _));
  }
  apply(_) {
    return this.structure && _(_, this.from, this._)
      ? _.fail(`Structure replace would overwrite content`)
      : _.fromReplace(_, this.from, this._, this.slice);
  }
  getMap() {
    return new _([this.from, this._ - this.from, this.slice.size]);
  }
  invert(_) {
    return new _(
      this.from,
      this.from + this.slice.size,
      _.slice(this.from, this._),
    );
  }
  map(_) {
    let _ = _.mapResult(this.from, 1),
      _ = _.mapResult(this._, -1);
    return _.deletedAcross && _.deletedAcross
      ? null
      : new _(_.pos, Math.max(_.pos, _.pos), this.slice, this.structure);
  }
  merge(_) {
    if (!(_ instanceof _) || _.structure || this.structure) return null;
    if (
      this.from + this.slice.size == _.from &&
      !this.slice.openEnd &&
      !_.slice.openStart
    ) {
      let _ =
        this.slice.size + _.slice.size == 0
          ? _.empty
          : new _(
              this.slice.content.append(_.slice.content),
              this.slice.openStart,
              _.slice.openEnd,
            );
      return new _(this.from, this._ + (_._ - _.from), _, this.structure);
    }
    if (_._ == this.from && !this.slice.openStart && !_.slice.openEnd) {
      let _ =
        this.slice.size + _.slice.size == 0
          ? _.empty
          : new _(
              _.slice.content.append(this.slice.content),
              _.slice.openStart,
              this.slice.openEnd,
            );
      return new _(_.from, this._, _, this.structure);
    }
    return null;
  }
  toJSON() {
    let _ = {
      stepType: `replace`,
      from: this.from,
      _: this._,
    };
    return (
      this.slice.size && (_.slice = this.slice.toJSON()),
      this.structure && (_.structure = !0),
      _
    );
  }
  static fromJSON(_, _) {
    if (typeof _.from != `number` || typeof _._ != `number`)
      throw RangeError(`Invalid input for ReplaceStep.fromJSON`);
    return new _(_.from, _._, _.fromJSON(_, _.slice), !!_.structure);
  }
};
_.jsonID(`replace`, _);
var _ = class _ extends _ {
  constructor(_, _, _, _, _, _, _ = !1) {
    (super(),
      (this.from = _),
      (this._ = _),
      (this.gapFrom = _),
      (this.gapTo = _),
      (this.slice = _),
      (this.insert = _),
      (this.structure = _));
  }
  apply(_) {
    if (
      this.structure &&
      (_(_, this.from, this.gapFrom) || _(_, this.gapTo, this._))
    )
      return _.fail(`Structure gap-replace would overwrite content`);
    let _ = _.slice(this.gapFrom, this.gapTo);
    if (_.openStart || _.openEnd) return _.fail(`Gap is not a flat range`);
    let _ = this.slice.insertAt(this.insert, _.content);
    return _
      ? _.fromReplace(_, this.from, this._, _)
      : _.fail(`Content does not fit in gap`);
  }
  getMap() {
    return new _([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this._ - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(_) {
    let _ = this.gapTo - this.gapFrom;
    return new _(
      this.from,
      this.from + this.slice.size + _,
      this.from + this.insert,
      this.from + this.insert + _,
      _.slice(this.from, this._).removeBetween(
        this.gapFrom - this.from,
        this.gapTo - this.from,
      ),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(_) {
    let _ = _.mapResult(this.from, 1),
      _ = _.mapResult(this._, -1),
      _ = this.from == this.gapFrom ? _.pos : _.map(this.gapFrom, -1),
      _ = this._ == this.gapTo ? _.pos : _.map(this.gapTo, 1);
    return (_.deletedAcross && _.deletedAcross) || _ < _.pos || _ > _.pos
      ? null
      : new _(_.pos, _.pos, _, _, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let _ = {
      stepType: `replaceAround`,
      from: this.from,
      _: this._,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    return (
      this.slice.size && (_.slice = this.slice.toJSON()),
      this.structure && (_.structure = !0),
      _
    );
  }
  static fromJSON(_, _) {
    if (
      typeof _.from != `number` ||
      typeof _._ != `number` ||
      typeof _.gapFrom != `number` ||
      typeof _.gapTo != `number` ||
      typeof _.insert != `number`
    )
      throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);
    return new _(
      _.from,
      _._,
      _.gapFrom,
      _.gapTo,
      _.fromJSON(_, _.slice),
      _.insert,
      !!_.structure,
    );
  }
};
_.jsonID(`replaceAround`, _);
function _(_, _, _) {
  let _ = _.resolve(_),
    _ = _ - _,
    _ = _.depth;
  for (; _ > 0 && _ > 0 && _.indexAfter(_) == _.node(_).childCount;) (_--, _--);
  if (_ > 0) {
    let _ = _.node(_).maybeChild(_.indexAfter(_));
    for (; _ > 0;) {
      if (!_ || _.isLeaf) return !0;
      ((_ = _.firstChild), _--);
    }
  }
  return !1;
}
function _(_, _, _, _) {
  let _ = [],
    _ = [],
    _,
    _;
  (_.doc.nodesBetween(_, _, (_, _, _) => {
    if (!_.isInline) return;
    let _ = _.marks;
    if (!_.isInSet(_) && _.type.allowsMarkType(_.type)) {
      let _ = Math.max(_, _),
        _ = Math.min(_ + _.nodeSize, _),
        _ = _.addToSet(_);
      for (let _ = 0; _ < _.length; _++)
        _[_].isInSet(_) ||
          (_ && _._ == _ && _.mark._(_[_])
            ? (_._ = _)
            : _.push((_ = new _(_, _, _[_]))));
      _ && _._ == _ ? (_._ = _) : _.push((_ = new _(_, _, _)));
    }
  }),
    _.forEach((_) => _.step(_)),
    _.forEach((_) => _.step(_)));
}
function _(_, _, _, _) {
  let _ = [],
    _ = 0;
  (_.doc.nodesBetween(_, _, (_, _) => {
    if (!_.isInline) return;
    _++;
    let _ = null;
    if (_ instanceof _) {
      let _ = _.marks,
        _;
      for (; (_ = _.isInSet(_));)
        ((_ ||= []).push(_), (_ = _.removeFromSet(_)));
    } else _ ? _.isInSet(_.marks) && (_ = [_]) : (_ = _.marks);
    if (_ && _.length) {
      let _ = Math.min(_ + _.nodeSize, _);
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_],
          _;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          _.step == _ - 1 && _._(_[_].style) && (_ = _);
        }
        _
          ? ((_._ = _), (_.step = _))
          : _.push({
              style: _,
              from: Math.max(_, _),
              _: _,
              step: _,
            });
      }
    }
  }),
    _.forEach((_) => _.step(new _(_.from, _._, _.style))));
}
function _(_, _, _, _ = _.contentMatch, _ = !0) {
  let _ = _.doc.nodeAt(_),
    _ = [],
    _ = _ + 1;
  for (let _ = 0; _ < _.childCount; _++) {
    let _ = _.child(_),
      _ = _ + _.nodeSize,
      _ = _.matchType(_.type);
    if (!_) _.push(new _(_, _, _.empty));
    else {
      _ = _;
      for (let _ = 0; _ < _.marks.length; _++)
        _.allowsMarkType(_.marks[_].type) || _.step(new _(_, _, _.marks[_]));
      if (_ && _.isText && _.whitespace != `pre`) {
        let _,
          _ = /\r?\n|\r/g,
          _;
        for (; (_ = _.exec(_.text));)
          ((_ ||= new _(
            _.from(_.schema.text(` `, _.allowedMarks(_.marks))),
            0,
            0,
          )),
            _.push(new _(_ + _.index, _ + _.index + _[0].length, _)));
      }
    }
    _ = _;
  }
  if (!_.validEnd) {
    let _ = _.fillBefore(_.empty, !0);
    _.replace(_, _, new _(_, 0, 0));
  }
  for (let _ = _.length - 1; _ >= 0; _--) _.step(_[_]);
}
function _(_, _, _) {
  return (
    (_ == 0 || _.canReplace(_, _.childCount)) &&
    (_ == _.childCount || _.canReplace(0, _))
  );
}
function _(_) {
  let _ = _.parent.content.cutByIndex(_.startIndex, _.endIndex);
  for (let _ = _.depth, _ = 0, _ = 0; ; --_) {
    let _ = _.$from.node(_),
      _ = _.$from.index(_) + _,
      _ = _.$to.indexAfter(_) - _;
    if (_ < _.depth && _.canReplace(_, _, _)) return _;
    if (_ == 0 || _.type.spec.isolating || !_(_, _, _)) break;
    (_ && (_ = 1), _ < _.childCount && (_ = 1));
  }
  return null;
}
function _(_, _, _) {
  let { $from: _, $to: _, depth: _ } = _,
    _ = _.before(_ + 1),
    _ = _.after(_ + 1),
    _ = _,
    _ = _,
    _ = _.empty,
    _ = 0;
  for (let _ = _, _ = !1; _ > _; _--)
    _ || _.index(_) > 0
      ? ((_ = !0), (_ = _.from(_.node(_).copy(_))), _++)
      : _--;
  let _ = _.empty,
    _ = 0;
  for (let _ = _, _ = !1; _ > _; _--)
    _ || _.after(_ + 1) < _.end(_)
      ? ((_ = !0), (_ = _.from(_.node(_).copy(_))), _++)
      : _++;
  _.step(new _(_, _, _, _, new _(_.append(_), _, _), _.size - _, !0));
}
function _(_, _, _ = null, _ = _) {
  let _ = _(_, _),
    _ = _ && _(_, _);
  return _
    ? _.map(_)
        .concat({
          type: _,
          attrs: _,
        })
        .concat(_.map(_))
    : null;
}
function _(_) {
  return {
    type: _,
    attrs: null,
  };
}
function _(_, _) {
  let { parent: _, startIndex: _, endIndex: _ } = _,
    _ = _.contentMatchAt(_).findWrapping(_);
  if (!_) return null;
  let _ = _.length ? _[0] : _;
  return _.canReplaceWith(_, _, _) ? _ : null;
}
function _(_, _) {
  let { parent: _, startIndex: _, endIndex: _ } = _,
    _ = _.child(_),
    _ = _.contentMatch.findWrapping(_.type);
  if (!_) return null;
  let _ = (_.length ? _[_.length - 1] : _).contentMatch;
  for (let _ = _; _ && _ < _; _++) _ = _.matchType(_.child(_).type);
  return !_ || !_.validEnd ? null : _;
}
function _(_, _, _) {
  let _ = _.empty;
  for (let _ = _.length - 1; _ >= 0; _--) {
    if (_.size) {
      let _ = _[_].type.contentMatch.matchFragment(_);
      if (!_ || !_.validEnd)
        throw RangeError(
          `Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`,
        );
    }
    _ = _.from(_[_].type.create(_[_].attrs, _));
  }
  let _ = _.start,
    _ = _.end;
  _.step(new _(_, _, _, _, new _(_, 0, 0), _.length, !0));
}
function _(_, _, _, _, _) {
  if (!_.isTextblock)
    throw RangeError(`Type given to setBlockType should be a textblock`);
  let _ = _.steps.length;
  _.doc.nodesBetween(_, _, (_, _) => {
    let _ = typeof _ == `function` ? _(_) : _;
    if (
      _.isTextblock &&
      !_.hasMarkup(_, _) &&
      _(_.doc, _.mapping.slice(_).map(_), _)
    ) {
      let _ = null;
      if (_.schema.linebreakReplacement) {
        let _ = _.whitespace == `pre`,
          _ = !!_.contentMatch.matchType(_.schema.linebreakReplacement);
        _ && !_ ? (_ = !1) : !_ && _ && (_ = !0);
      }
      (_ === !1 && _(_, _, _, _),
        _(_, _.mapping.slice(_).map(_, 1), _, void 0, _ === null));
      let _ = _.mapping.slice(_),
        _ = _.map(_, 1),
        _ = _.map(_ + _.nodeSize, 1);
      return (
        _.step(
          new _(
            _,
            _,
            _ + 1,
            _ - 1,
            new _(_.from(_.create(_, null, _.marks)), 0, 0),
            1,
            !0,
          ),
        ),
        _ === !0 && _(_, _, _, _),
        !1
      );
    }
  });
}
function _(_, _, _, _) {
  _.forEach((_, _) => {
    if (_.isText) {
      let _,
        _ = /\r?\n|\r/g;
      for (; (_ = _.exec(_.text));) {
        let _ = _.mapping.slice(_).map(_ + 1 + _ + _.index);
        _.replaceWith(_, _ + 1, _.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function _(_, _, _, _) {
  _.forEach((_, _) => {
    if (_.type == _.type.schema.linebreakReplacement) {
      let _ = _.mapping.slice(_).map(_ + 1 + _);
      _.replaceWith(
        _,
        _ + 1,
        _.type.schema.text(`
`),
      );
    }
  });
}
function _(_, _, _) {
  let _ = _.resolve(_),
    _ = _.index();
  return _.parent.canReplaceWith(_, _ + 1, _);
}
function _(_, _, _, _, _) {
  let _ = _.doc.nodeAt(_);
  if (!_) throw RangeError(`No node at given position`);
  _ ||= _.type;
  let _ = _.create(_, null, _ || _.marks);
  if (_.isLeaf) return _.replaceWith(_, _ + _.nodeSize, _);
  if (!_.validContent(_.content))
    throw RangeError(`Invalid content for node type ` + _.name);
  _.step(
    new _(
      _,
      _ + _.nodeSize,
      _ + 1,
      _ + _.nodeSize - 1,
      new _(_.from(_), 0, 0),
      1,
      !0,
    ),
  );
}
function _(_, _, _ = 1, _) {
  let _ = _.resolve(_),
    _ = _.depth - _,
    _ = (_ && _[_.length - 1]) || _.parent;
  if (
    _ < 0 ||
    _.parent.type.spec.isolating ||
    !_.parent.canReplace(_.index(), _.parent.childCount) ||
    !_.type.validContent(
      _.parent.content.cutByIndex(_.index(), _.parent.childCount),
    )
  )
    return !1;
  for (let _ = _.depth - 1, _ = _ - 2; _ > _; _--, _--) {
    let _ = _.node(_),
      _ = _.index(_);
    if (_.type.spec.isolating) return !1;
    let _ = _.content.cutByIndex(_, _.childCount),
      _ = _ && _[_ + 1];
    _ && (_ = _.replaceChild(0, _.type.create(_.attrs)));
    let _ = (_ && _[_]) || _;
    if (!_.canReplace(_ + 1, _.childCount) || !_.type.validContent(_))
      return !1;
  }
  let _ = _.indexAfter(_),
    _ = _ && _[0];
  return _.node(_).canReplaceWith(_, _, _ ? _.type : _.node(_ + 1).type);
}
function _(_, _, _ = 1, _) {
  let _ = _.doc.resolve(_),
    _ = _.empty,
    _ = _.empty;
  for (let _ = _.depth, _ = _.depth - _, _ = _ - 1; _ > _; _--, _--) {
    _ = _.from(_.node(_).copy(_));
    let _ = _ && _[_];
    _ = _.from(_ ? _.type.create(_.attrs, _) : _.node(_).copy(_));
  }
  _.step(new _(_, _, new _(_.append(_), _, _), !0));
}
function _(_, _) {
  let _ = _.resolve(_),
    _ = _.index();
  return _(_.nodeBefore, _.nodeAfter) && _.parent.canReplace(_, _ + 1);
}
function _(_, _) {
  _.content.size || _.type.compatibleContent(_.type);
  let _ = _.contentMatchAt(_.childCount),
    { linebreakReplacement: _ } = _.type.schema;
  for (let _ = 0; _ < _.childCount; _++) {
    let _ = _.child(_),
      _ = _.type == _ ? _.type.schema.nodes.text : _.type;
    if (((_ = _.matchType(_)), !_ || !_.type.allowsMarks(_.marks))) return !1;
  }
  return _.validEnd;
}
function _(_, _) {
  return !!(_ && _ && !_.isLeaf && _(_, _));
}
function _(_, _, _) {
  let _ = null,
    { linebreakReplacement: _ } = _.doc.type.schema,
    _ = _.doc.resolve(_ - _),
    _ = _.node().type;
  if (_ && _.inlineContent) {
    let _ = _.whitespace == `pre`,
      _ = !!_.contentMatch.matchType(_);
    _ && !_ ? (_ = !1) : !_ && _ && (_ = !0);
  }
  let _ = _.steps.length;
  if (_ === !1) {
    let _ = _.doc.resolve(_ + _);
    _(_, _.node(), _.before(), _);
  }
  _.inlineContent &&
    _(_, _ + _ - 1, _, _.node().contentMatchAt(_.index()), _ == null);
  let _ = _.mapping.slice(_),
    _ = _.map(_ - _);
  if ((_.step(new _(_, _.map(_ + _, -1), _.empty, !0)), _ === !0)) {
    let _ = _.doc.resolve(_);
    _(_, _.node(), _.before(), _.steps.length);
  }
  return _;
}
function _(_, _, _) {
  let _ = _.resolve(_);
  if (_.parent.canReplaceWith(_.index(), _.index(), _)) return _;
  if (_.parentOffset == 0)
    for (let _ = _.depth - 1; _ >= 0; _--) {
      let _ = _.index(_);
      if (_.node(_).canReplaceWith(_, _, _)) return _.before(_ + 1);
      if (_ > 0) return null;
    }
  if (_.parentOffset == _.parent.content.size)
    for (let _ = _.depth - 1; _ >= 0; _--) {
      let _ = _.indexAfter(_);
      if (_.node(_).canReplaceWith(_, _, _)) return _.after(_ + 1);
      if (_ < _.node(_).childCount) return null;
    }
  return null;
}
function _(_, _, _) {
  let _ = _.resolve(_);
  if (!_.content.size) return _;
  let _ = _.content;
  for (let _ = 0; _ < _.openStart; _++) _ = _.firstChild.content;
  for (let _ = 1; _ <= (_.openStart == 0 && _.size ? 2 : 1); _++)
    for (let _ = _.depth; _ >= 0; _--) {
      let _ =
          _ == _.depth
            ? 0
            : _.pos <= (_.start(_ + 1) + _.end(_ + 1)) / 2
              ? -1
              : 1,
        _ = _.index(_) + +(_ > 0),
        _ = _.node(_),
        _ = !1;
      if (_ == 1) _ = _.canReplace(_, _, _);
      else {
        let _ = _.contentMatchAt(_).findWrapping(_.firstChild.type);
        _ = _ && _.canReplaceWith(_, _, _[0]);
      }
      if (_) return _ == 0 ? _.pos : _ < 0 ? _.before(_ + 1) : _.after(_ + 1);
    }
  return null;
}
function _(_, _, _ = _, _ = _.empty) {
  if (_ == _ && !_.size) return null;
  let _ = _.resolve(_),
    _ = _.resolve(_);
  return _(_, _, _) ? new _(_, _, _) : new _(_, _, _).fit();
}
function _(_, _, _) {
  return (
    !_.openStart &&
    !_.openEnd &&
    _.start() == _.start() &&
    _.parent.canReplace(_.index(), _.index(), _.content)
  );
}
var _ = class {
  constructor(_, _, _) {
    ((this.$from = _),
      (this.$to = _),
      (this.unplaced = _),
      (this.frontier = []),
      (this.placed = _.empty));
    for (let _ = 0; _ <= _.depth; _++) {
      let _ = _.node(_);
      this.frontier.push({
        type: _.type,
        match: _.contentMatchAt(_.indexAfter(_)),
      });
    }
    for (let _ = _.depth; _ > 0; _--)
      this.placed = _.from(_.node(_).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size;) {
      let _ = this.findFittable();
      _ ? this.placeNodes(_) : this.openMore() || this.dropNode();
    }
    let _ = this.mustMoveInline(),
      _ = this.placed.size - this.depth - this.$from.depth,
      _ = this.$from,
      _ = this.close(_ < 0 ? this.$to : _.doc.resolve(_));
    if (!_) return null;
    let _ = this.placed,
      _ = _.depth,
      _ = _.depth;
    for (; _ && _ && _.childCount == 1;) ((_ = _.firstChild.content), _--, _--);
    let _ = new _(_, _, _);
    return _ > -1
      ? new _(_.pos, _, this.$to.pos, this.$to.end(), _, _)
      : _.size || _.pos != this.$to.pos
        ? new _(_.pos, _.pos, _)
        : null;
  }
  findFittable() {
    let _ = this.unplaced.openStart;
    for (
      let _ = this.unplaced.content, _ = 0, _ = this.unplaced.openEnd;
      _ < _;
      _++
    ) {
      let _ = _.firstChild;
      if ((_.childCount > 1 && (_ = 0), _.type.spec.isolating && _ <= _)) {
        _ = _;
        break;
      }
      _ = _.content;
    }
    for (let _ = 1; _ <= 2; _++)
      for (let _ = _ == 1 ? _ : this.unplaced.openStart; _ >= 0; _--) {
        let _,
          _ = null;
        _
          ? ((_ = _(this.unplaced.content, _ - 1).firstChild), (_ = _.content))
          : (_ = this.unplaced.content);
        let _ = _.firstChild;
        for (let _ = this.depth; _ >= 0; _--) {
          let { type: _, match: _ } = this.frontier[_],
            _,
            _ = null;
          if (
            _ == 1 &&
            (_
              ? _.matchType(_.type) || (_ = _.fillBefore(_.from(_), !1))
              : _ && _.compatibleContent(_.type))
          )
            return {
              sliceDepth: _,
              frontierDepth: _,
              parent: _,
              inject: _,
            };
          if (_ == 2 && _ && (_ = _.findWrapping(_.type)))
            return {
              sliceDepth: _,
              frontierDepth: _,
              parent: _,
              wrap: _,
            };
          if (_ && _.matchType(_.type)) break;
        }
      }
  }
  openMore() {
    let { content: _, openStart: _, openEnd: _ } = this.unplaced,
      _ = _(_, _);
    return !_.childCount || _.firstChild.isLeaf
      ? !1
      : ((this.unplaced = new _(
          _,
          _ + 1,
          Math.max(_, _.size + _ >= _.size - _ ? _ + 1 : 0),
        )),
        !0);
  }
  dropNode() {
    let { content: _, openStart: _, openEnd: _ } = this.unplaced,
      _ = _(_, _);
    if (_.childCount <= 1 && _ > 0) {
      let _ = _.size - _ <= _ + _.size;
      this.unplaced = new _(_(_, _ - 1, 1), _ - 1, _ ? _ - 1 : _);
    } else this.unplaced = new _(_(_, _, 1), _, _);
  }
  placeNodes({
    sliceDepth: _,
    frontierDepth: _,
    parent: _,
    inject: _,
    wrap: _,
  }) {
    for (; this.depth > _;) this.closeFrontierNode();
    if (_) for (let _ = 0; _ < _.length; _++) this.openFrontierNode(_[_]);
    let _ = this.unplaced,
      _ = _ ? _.content : _.content,
      _ = _.openStart - _,
      _ = 0,
      _ = [],
      { match: _, type: _ } = this.frontier[_];
    if (_) {
      for (let _ = 0; _ < _.childCount; _++) _.push(_.child(_));
      _ = _.matchFragment(_);
    }
    let _ = _.size + _ - (_.content.size - _.openEnd);
    for (; _ < _.childCount;) {
      let _ = _.child(_),
        _ = _.matchType(_.type);
      if (!_) break;
      (_++,
        (_ > 1 || _ == 0 || _.content.size) &&
          ((_ = _),
          _.push(
            _(
              _.mark(_.allowedMarks(_.marks)),
              _ == 1 ? _ : 0,
              _ == _.childCount ? _ : -1,
            ),
          )));
    }
    let _ = _ == _.childCount;
    (_ || (_ = -1),
      (this.placed = _(this.placed, _, _.from(_))),
      (this.frontier[_].match = _),
      _ &&
        _ < 0 &&
        _ &&
        _.type == this.frontier[this.depth].type &&
        this.frontier.length > 1 &&
        this.closeFrontierNode());
    for (let _ = 0, _ = _; _ < _; _++) {
      let _ = _.lastChild;
      (this.frontier.push({
        type: _.type,
        match: _.contentMatchAt(_.childCount),
      }),
        (_ = _.content));
    }
    this.unplaced = _
      ? _ == 0
        ? _.empty
        : new _(_(_.content, _ - 1, 1), _ - 1, _ < 0 ? _.openEnd : _ - 1)
      : new _(_(_.content, _, _), _.openStart, _.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let _ = this.frontier[this.depth],
      _;
    if (
      !_.type.isTextblock ||
      !_(this.$to, this.$to.depth, _.type, _.match, !1) ||
      (this.$to.depth == this.depth &&
        (_ = this.findCloseLevel(this.$to)) &&
        _.depth == this.depth)
    )
      return -1;
    let { depth: _ } = this.$to,
      _ = this.$to.after(_);
    for (; _ > 1 && _ == this.$to.end(--_);) ++_;
    return _;
  }
  findCloseLevel(_) {
    scan: for (let _ = Math.min(this.depth, _.depth); _ >= 0; _--) {
      let { match: _, type: _ } = this.frontier[_],
        _ = _ < _.depth && _.end(_ + 1) == _.pos + (_.depth - (_ + 1)),
        _ = _(_, _, _, _, _);
      if (_) {
        for (let _ = _ - 1; _ >= 0; _--) {
          let { match: _, type: _ } = this.frontier[_],
            _ = _(_, _, _, _, !0);
          if (!_ || _.childCount) continue scan;
        }
        return {
          depth: _,
          fit: _,
          move: _ ? _.doc.resolve(_.after(_ + 1)) : _,
        };
      }
    }
  }
  close(_) {
    let _ = this.findCloseLevel(_);
    if (!_) return null;
    for (; this.depth > _.depth;) this.closeFrontierNode();
    (_.fit.childCount && (this.placed = _(this.placed, _.depth, _.fit)),
      (_ = _.move));
    for (let _ = _.depth + 1; _ <= _.depth; _++) {
      let _ = _.node(_),
        _ = _.type.contentMatch.fillBefore(_.content, !0, _.index(_));
      this.openFrontierNode(_.type, _.attrs, _);
    }
    return _;
  }
  openFrontierNode(_, _ = null, _) {
    let _ = this.frontier[this.depth];
    ((_.match = _.match.matchType(_)),
      (this.placed = _(this.placed, this.depth, _.from(_.create(_, _)))),
      this.frontier.push({
        type: _,
        match: _.contentMatch,
      }));
  }
  closeFrontierNode() {
    let _ = this.frontier.pop().match.fillBefore(_.empty, !0);
    _.childCount && (this.placed = _(this.placed, this.frontier.length, _));
  }
};
function _(_, _, _) {
  return _ == 0
    ? _.cutByIndex(_, _.childCount)
    : _.replaceChild(0, _.firstChild.copy(_(_.firstChild.content, _ - 1, _)));
}
function _(_, _, _) {
  return _ == 0
    ? _.append(_)
    : _.replaceChild(
        _.childCount - 1,
        _.lastChild.copy(_(_.lastChild.content, _ - 1, _)),
      );
}
function _(_, _) {
  for (let _ = 0; _ < _; _++) _ = _.firstChild.content;
  return _;
}
function _(_, _, _) {
  if (_ <= 0) return _;
  let _ = _.content;
  return (
    _ > 1 &&
      (_ = _.replaceChild(
        0,
        _(_.firstChild, _ - 1, _.childCount == 1 ? _ - 1 : 0),
      )),
    _ > 0 &&
      ((_ = _.type.contentMatch.fillBefore(_).append(_)),
      _ <= 0 &&
        (_ = _.append(
          _.type.contentMatch.matchFragment(_).fillBefore(_.empty, !0),
        ))),
    _.copy(_)
  );
}
function _(_, _, _, _, _) {
  let _ = _.node(_),
    _ = _ ? _.indexAfter(_) : _.index(_);
  if (_ == _.childCount && !_.compatibleContent(_.type)) return null;
  let _ = _.fillBefore(_.content, !0, _);
  return _ && !_(_, _.content, _) ? _ : null;
}
function _(_, _, _) {
  for (let _ = _; _ < _.childCount; _++)
    if (!_.allowsMarks(_.child(_).marks)) return !0;
  return !1;
}
function _(_) {
  return _.spec.defining || _.spec.definingForContent;
}
function _(_, _, _, _) {
  if (!_.size) return _.deleteRange(_, _);
  let _ = _.doc.resolve(_),
    _ = _.doc.resolve(_);
  if (_(_, _, _)) return _.step(new _(_, _, _));
  let _ = _(_, _);
  _[_.length - 1] == 0 && _.pop();
  let _ = -(_.depth + 1);
  _.unshift(_);
  for (let _ = _.depth, _ = _.pos - 1; _ > 0; _--, _--) {
    let _ = _.node(_).type.spec;
    if (_.defining || _.definingAsContext || _.isolating) break;
    _.indexOf(_) > -1 ? (_ = _) : _.before(_) == _ && _.splice(1, 0, -_);
  }
  let _ = _.indexOf(_),
    _ = [],
    _ = _.openStart;
  for (let _ = _.content, _ = 0; ; _++) {
    let _ = _.firstChild;
    if ((_.push(_), _ == _.openStart)) break;
    _ = _.content;
  }
  for (let _ = _ - 1; _ >= 0; _--) {
    let _ = _[_],
      _ = _(_.type);
    if (_ && !_.sameMarkup(_.node(Math.abs(_) - 1))) _ = _;
    else if (_ || !_.type.isTextblock) break;
  }
  for (let _ = _.openStart; _ >= 0; _--) {
    let _ = (_ + _ + 1) % (_.openStart + 1),
      _ = _[_];
    if (_)
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[(_ + _) % _.length],
          _ = !0;
        _ < 0 && ((_ = !1), (_ = -_));
        let _ = _.node(_ - 1),
          _ = _.index(_ - 1);
        if (_.canReplaceWith(_, _, _.type, _.marks))
          return _.replace(
            _.before(_),
            _ ? _.after(_) : _,
            new _(_(_.content, 0, _.openStart, _), _, _.openEnd),
          );
      }
  }
  let _ = _.steps.length;
  for (
    let _ = _.length - 1;
    _ >= 0 && (_.replace(_, _, _), !(_.steps.length > _));
    _--
  ) {
    let _ = _[_];
    _ < 0 || ((_ = _.before(_)), (_ = _.after(_)));
  }
}
function _(_, _, _, _, _) {
  if (_ < _) {
    let _ = _.firstChild;
    _ = _.replaceChild(0, _.copy(_(_.content, _ + 1, _, _, _)));
  }
  if (_ > _) {
    let _ = _.contentMatchAt(0),
      _ = _.fillBefore(_).append(_);
    _ = _.append(_.matchFragment(_).fillBefore(_.empty, !0));
  }
  return _;
}
function _(_, _, _, _) {
  if (!_.isInline && _ == _ && _.doc.resolve(_).parent.content.size) {
    let _ = _(_.doc, _, _.type);
    _ != null && (_ = _ = _);
  }
  _.replaceRange(_, _, new _(_.from(_), 0, 0));
}
function _(_, _, _) {
  let _ = _.doc.resolve(_),
    _ = _.doc.resolve(_),
    _ = _(_, _);
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _ == _.length - 1;
    if ((_ && _ == 0) || _.node(_).type.contentMatch.validEnd)
      return _.delete(_.start(_), _.end(_));
    if (
      _ > 0 &&
      (_ || _.node(_ - 1).canReplace(_.index(_ - 1), _.indexAfter(_ - 1)))
    )
      return _.delete(_.before(_), _.after(_));
  }
  for (let _ = 1; _ <= _.depth && _ <= _.depth; _++)
    if (
      _ - _.start(_) == _.depth - _ &&
      _ > _.end(_) &&
      _.end(_) - _ != _.depth - _ &&
      _.start(_ - 1) == _.start(_ - 1) &&
      _.node(_ - 1).canReplace(_.index(_ - 1), _.index(_ - 1))
    )
      return _.delete(_.before(_), _);
  _.delete(_, _);
}
function _(_, _) {
  let _ = [],
    _ = Math.min(_.depth, _.depth);
  for (let _ = _; _ >= 0; _--) {
    let _ = _.start(_);
    if (
      _ < _.pos - (_.depth - _) ||
      _.end(_) > _.pos + (_.depth - _) ||
      _.node(_).type.spec.isolating ||
      _.node(_).type.spec.isolating
    )
      break;
    (_ == _.start(_) ||
      (_ == _.depth &&
        _ == _.depth &&
        _.parent.inlineContent &&
        _.parent.inlineContent &&
        _ &&
        _.start(_ - 1) == _ - 1)) &&
      _.push(_);
  }
  return _;
}
var _ = class _ extends _ {
  constructor(_, _, _) {
    (super(), (this.pos = _), (this.attr = _), (this.value = _));
  }
  apply(_) {
    let _ = _.nodeAt(this.pos);
    if (!_) return _.fail(`No node at attribute step's position`);
    let _ = Object.create(null);
    for (let _ in _.attrs) _[_] = _.attrs[_];
    _[this.attr] = this.value;
    let _ = _.type.create(_, null, _.marks);
    return _.fromReplace(
      _,
      this.pos,
      this.pos + 1,
      new _(_.from(_), 0, +!_.isLeaf),
    );
  }
  getMap() {
    return _.empty;
  }
  invert(_) {
    return new _(this.pos, this.attr, _.nodeAt(this.pos).attrs[this.attr]);
  }
  map(_) {
    let _ = _.mapResult(this.pos, 1);
    return _.deletedAfter ? null : new _(_.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: `attr`,
      pos: this.pos,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.pos != `number` || typeof _.attr != `string`)
      throw RangeError(`Invalid input for AttrStep.fromJSON`);
    return new _(_.pos, _.attr, _.value);
  }
};
_.jsonID(`attr`, _);
var _ = class _ extends _ {
  constructor(_, _) {
    (super(), (this.attr = _), (this.value = _));
  }
  apply(_) {
    let _ = Object.create(null);
    for (let _ in _.attrs) _[_] = _.attrs[_];
    _[this.attr] = this.value;
    let _ = _.type.create(_, _.content, _.marks);
    return _._(_);
  }
  getMap() {
    return _.empty;
  }
  invert(_) {
    return new _(this.attr, _.attrs[this.attr]);
  }
  map(_) {
    return this;
  }
  toJSON() {
    return {
      stepType: `docAttr`,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.attr != `string`)
      throw RangeError(`Invalid input for DocAttrStep.fromJSON`);
    return new _(_.attr, _.value);
  }
};
_.jsonID(`docAttr`, _);
var _ = class extends Error {};
((_ = function _(_) {
  let _ = Error.call(this, _);
  return ((_.__proto__ = _.prototype), _);
}),
  (_.prototype = Object.create(Error.prototype)),
  (_.prototype.constructor = _),
  (_.prototype.name = `TransformError`));
var _ = class {
    constructor(_) {
      ((this.doc = _),
        (this.steps = []),
        (this.docs = []),
        (this.mapping = new _()));
    }
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    step(_) {
      let _ = this.maybeStep(_);
      if (_.failed) throw new _(_.failed);
      return this;
    }
    maybeStep(_) {
      let _ = _.apply(this.doc);
      return (_.failed || this.addStep(_, _.doc), _);
    }
    get docChanged() {
      return this.steps.length > 0;
    }
    addStep(_, _) {
      (this.docs.push(this.doc),
        this.steps.push(_),
        this.mapping.appendMap(_.getMap()),
        (this.doc = _));
    }
    replace(_, _ = _, _ = _.empty) {
      let _ = _(this.doc, _, _, _);
      return (_ && this.step(_), this);
    }
    replaceWith(_, _, _) {
      return this.replace(_, _, new _(_.from(_), 0, 0));
    }
    delete(_, _) {
      return this.replace(_, _, _.empty);
    }
    insert(_, _) {
      return this.replaceWith(_, _, _);
    }
    replaceRange(_, _, _) {
      return (_(this, _, _, _), this);
    }
    replaceRangeWith(_, _, _) {
      return (_(this, _, _, _), this);
    }
    deleteRange(_, _) {
      return (_(this, _, _), this);
    }
    lift(_, _) {
      return (_(this, _, _), this);
    }
    join(_, _ = 1) {
      return (_(this, _, _), this);
    }
    wrap(_, _) {
      return (_(this, _, _), this);
    }
    setBlockType(_, _ = _, _, _ = null) {
      return (_(this, _, _, _, _), this);
    }
    setNodeMarkup(_, _, _ = null, _) {
      return (_(this, _, _, _, _), this);
    }
    setNodeAttribute(_, _, _) {
      return (this.step(new _(_, _, _)), this);
    }
    setDocAttribute(_, _) {
      return (this.step(new _(_, _)), this);
    }
    addNodeMark(_, _) {
      return (this.step(new _(_, _)), this);
    }
    removeNodeMark(_, _) {
      let _ = this.doc.nodeAt(_);
      if (!_) throw RangeError(`No node at position ` + _);
      if (_ instanceof _) _.isInSet(_.marks) && this.step(new _(_, _));
      else {
        let _ = _.marks,
          _,
          _ = [];
        for (; (_ = _.isInSet(_));)
          (_.push(new _(_, _)), (_ = _.removeFromSet(_)));
        for (let _ = _.length - 1; _ >= 0; _--) this.step(_[_]);
      }
      return this;
    }
    split(_, _ = 1, _) {
      return (_(this, _, _, _), this);
    }
    addMark(_, _, _) {
      return (_(this, _, _, _), this);
    }
    removeMark(_, _, _) {
      return (_(this, _, _, _), this);
    }
    clearIncompatible(_, _, _) {
      return (_(this, _, _, _), this);
    }
  },
  _ = Object.create(null),
  _ = class {
    constructor(_, _, _) {
      ((this.$anchor = _),
        (this.$head = _),
        (this.ranges = _ || [new _(_.min(_), _.max(_))]));
    }
    get anchor() {
      return this.$anchor.pos;
    }
    get head() {
      return this.$head.pos;
    }
    get from() {
      return this.$from.pos;
    }
    get to() {
      return this.$to.pos;
    }
    get $from() {
      return this.ranges[0].$from;
    }
    get $to() {
      return this.ranges[0].$to;
    }
    get empty() {
      let _ = this.ranges;
      for (let _ = 0; _ < _.length; _++)
        if (_[_].$from.pos != _[_].$to.pos) return !1;
      return !0;
    }
    content() {
      return this.$from.doc.slice(this.from, this._, !0);
    }
    replace(_, _ = _.empty) {
      let _ = _.content.lastChild,
        _ = null;
      for (let _ = 0; _ < _.openEnd; _++) ((_ = _), (_ = _.lastChild));
      let _ = _.steps.length,
        _ = this.ranges;
      for (let _ = 0; _ < _.length; _++) {
        let { $from: _, $to: _ } = _[_],
          _ = _.mapping.slice(_);
        (_.replaceRange(_.map(_.pos), _.map(_.pos), _ ? _.empty : _),
          _ == 0 && _(_, _, (_ ? _.isInline : _ && _.isTextblock) ? -1 : 1));
      }
    }
    replaceWith(_, _) {
      let _ = _.steps.length,
        _ = this.ranges;
      for (let _ = 0; _ < _.length; _++) {
        let { $from: _, $to: _ } = _[_],
          _ = _.mapping.slice(_),
          _ = _.map(_.pos),
          _ = _.map(_.pos);
        _
          ? _.deleteRange(_, _)
          : (_.replaceRangeWith(_, _, _), _(_, _, _.isInline ? -1 : 1));
      }
    }
    static findFrom(_, _, _ = !1) {
      let _ = _.parent.inlineContent
        ? new _(_)
        : _(_.node(0), _.parent, _.pos, _.index(), _, _);
      if (_) return _;
      for (let _ = _.depth - 1; _ >= 0; _--) {
        let _ =
          _ < 0
            ? _(_.node(0), _.node(_), _.before(_ + 1), _.index(_), _, _)
            : _(_.node(0), _.node(_), _.after(_ + 1), _.index(_) + 1, _, _);
        if (_) return _;
      }
      return null;
    }
    static near(_, _ = 1) {
      return this.findFrom(_, _) || this.findFrom(_, -_) || new _(_.node(0));
    }
    static atStart(_) {
      return _(_, _, 0, 0, 1) || new _(_);
    }
    static atEnd(_) {
      return _(_, _, _.content.size, _.childCount, -1) || new _(_);
    }
    static fromJSON(_, _) {
      if (!_ || !_.type)
        throw RangeError(`Invalid input for Selection.fromJSON`);
      let _ = _[_.type];
      if (!_) throw RangeError(`No selection type ${_.type} defined`);
      return _.fromJSON(_, _);
    }
    static jsonID(_, _) {
      if (_ in _) throw RangeError(`Duplicate use of selection JSON ID ` + _);
      return ((_[_] = _), (_.prototype.jsonID = _), _);
    }
    getBookmark() {
      return _.between(this.$anchor, this.$head).getBookmark();
    }
  };
_.prototype.visible = !0;
var _ = class {
    constructor(_, _) {
      ((this.$from = _), (this.$to = _));
    }
  },
  _ = !1;
function _(_) {
  !_ &&
    !_.parent.inlineContent &&
    ((_ = !0),
    console.warn(
      `TextSelection endpoint not pointing into a node with inline content (` +
        _.parent.type.name +
        `)`,
    ));
}
var _ = class _ extends _ {
  constructor(_, _ = _) {
    (_(_), _(_), super(_, _));
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(_, _) {
    let _ = _.resolve(_.map(this.head));
    if (!_.parent.inlineContent) return _.near(_);
    let _ = _.resolve(_.map(this.anchor));
    return new _(_.parent.inlineContent ? _ : _, _);
  }
  replace(_, _ = _.empty) {
    if ((super.replace(_, _), _ == _.empty)) {
      let _ = this.$from.marksAcross(this.$to);
      _ && _.ensureMarks(_);
    }
  }
  eq(_) {
    return _ instanceof _ && _.anchor == this.anchor && _.head == this.head;
  }
  getBookmark() {
    return new _(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: `text`,
      anchor: this.anchor,
      head: this.head,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.anchor != `number` || typeof _.head != `number`)
      throw RangeError(`Invalid input for TextSelection.fromJSON`);
    return new _(_.resolve(_.anchor), _.resolve(_.head));
  }
  static create(_, _, _ = _) {
    let _ = _.resolve(_);
    return new this(_, _ == _ ? _ : _.resolve(_));
  }
  static between(_, _, _) {
    let _ = _.pos - _.pos;
    if (((!_ || _) && (_ = _ >= 0 ? 1 : -1), !_.parent.inlineContent)) {
      let _ = _.findFrom(_, _, !0) || _.findFrom(_, -_, !0);
      if (_) _ = _.$head;
      else return _.near(_, _);
    }
    return (
      _.parent.inlineContent ||
        (_ == 0
          ? (_ = _)
          : ((_ = (_.findFrom(_, -_, !0) || _.findFrom(_, _, !0)).$anchor),
            _.pos < _.pos != _ < 0 && (_ = _))),
      new _(_, _)
    );
  }
};
_.jsonID(`text`, _);
var _ = class _ {
    constructor(_, _) {
      ((this.anchor = _), (this.head = _));
    }
    map(_) {
      return new _(_.map(this.anchor), _.map(this.head));
    }
    resolve(_) {
      return _.between(_.resolve(this.anchor), _.resolve(this.head));
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      let _ = _.nodeAfter,
        _ = _.node(0).resolve(_.pos + _.nodeSize);
      (super(_, _), (this.node = _));
    }
    map(_, _) {
      let { deleted: _, pos: _ } = _.mapResult(this.anchor),
        _ = _.resolve(_);
      return _ ? _.near(_) : new _(_);
    }
    content() {
      return new _(_.from(this.node), 0, 0);
    }
    eq(_) {
      return _ instanceof _ && _.anchor == this.anchor;
    }
    toJSON() {
      return {
        type: `node`,
        anchor: this.anchor,
      };
    }
    getBookmark() {
      return new _(this.anchor);
    }
    static fromJSON(_, _) {
      if (typeof _.anchor != `number`)
        throw RangeError(`Invalid input for NodeSelection.fromJSON`);
      return new _(_.resolve(_.anchor));
    }
    static create(_, _) {
      return new _(_.resolve(_));
    }
    static isSelectable(_) {
      return !_.isText && _.type.spec.selectable !== !1;
    }
  };
((_.prototype.visible = !1), _.jsonID(`node`, _));
var _ = class _ {
    constructor(_) {
      this.anchor = _;
    }
    map(_) {
      let { deleted: _, pos: _ } = _.mapResult(this.anchor);
      return _ ? new _(_, _) : new _(_);
    }
    resolve(_) {
      let _ = _.resolve(this.anchor),
        _ = _.nodeAfter;
      return _ && _.isSelectable(_) ? new _(_) : _.near(_);
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(_.resolve(0), _.resolve(_.content.size));
    }
    replace(_, _ = _.empty) {
      if (_ == _.empty) {
        _.delete(0, _.doc.content.size);
        let _ = _.atStart(_.doc);
        _._(_.selection) || _.setSelection(_);
      } else super.replace(_, _);
    }
    toJSON() {
      return {
        type: `all`,
      };
    }
    static fromJSON(_) {
      return new _(_);
    }
    map(_) {
      return new _(_);
    }
    eq(_) {
      return _ instanceof _;
    }
    getBookmark() {
      return _;
    }
  };
_.jsonID(`all`, _);
var _ = {
  map() {
    return this;
  },
  resolve(_) {
    return new _(_);
  },
};
function _(_, _, _, _, _, _ = !1) {
  if (_.inlineContent) return _.create(_, _);
  for (let _ = _ - (_ > 0 ? 0 : 1); _ > 0 ? _ < _.childCount : _ >= 0; _ += _) {
    let _ = _.child(_);
    if (!_.isAtom) {
      let _ = _(_, _, _ + _, _ < 0 ? _.childCount : 0, _, _);
      if (_) return _;
    } else if (!_ && _.isSelectable(_))
      return _.create(_, _ - (_ < 0 ? _.nodeSize : 0));
    _ += _.nodeSize * _;
  }
  return null;
}
function _(_, _, _) {
  let _ = _.steps.length - 1;
  if (_ < _) return;
  let _ = _.steps[_];
  if (!(_ instanceof _ || _ instanceof _)) return;
  let _ = _.mapping.maps[_],
    _;
  (_.forEach((_, _, _, _) => {
    _ ??= _;
  }),
    _.setSelection(_.near(_.doc.resolve(_), _)));
}
var _ = 1,
  _ = 2,
  _ = 4,
  _ = class extends _ {
    constructor(_) {
      (super(_.doc),
        (this.curSelectionFor = 0),
        (this.updated = 0),
        (this.meta = Object.create(null)),
        (this.time = Date.now()),
        (this.curSelection = _.selection),
        (this.storedMarks = _.storedMarks));
    }
    get selection() {
      return (
        this.curSelectionFor < this.steps.length &&
          ((this.curSelection = this.curSelection.map(
            this.doc,
            this.mapping.slice(this.curSelectionFor),
          )),
          (this.curSelectionFor = this.steps.length)),
        this.curSelection
      );
    }
    setSelection(_) {
      if (_.$from.doc != this.doc)
        throw RangeError(
          `Selection passed to setSelection must point at the current document`,
        );
      return (
        (this.curSelection = _),
        (this.curSelectionFor = this.steps.length),
        (this.updated = (this.updated | _) & -3),
        (this.storedMarks = null),
        this
      );
    }
    get selectionSet() {
      return (this.updated & _) > 0;
    }
    setStoredMarks(_) {
      return ((this.storedMarks = _), (this.updated |= _), this);
    }
    ensureMarks(_) {
      return (
        _.sameSet(this.storedMarks || this.selection.$from.marks(), _) ||
          this.setStoredMarks(_),
        this
      );
    }
    addStoredMark(_) {
      return this.ensureMarks(
        _.addToSet(this.storedMarks || this.selection.$head.marks()),
      );
    }
    removeStoredMark(_) {
      return this.ensureMarks(
        _.removeFromSet(this.storedMarks || this.selection.$head.marks()),
      );
    }
    get storedMarksSet() {
      return (this.updated & _) > 0;
    }
    addStep(_, _) {
      (super.addStep(_, _), (this.updated &= -3), (this.storedMarks = null));
    }
    setTime(_) {
      return ((this.time = _), this);
    }
    replaceSelection(_) {
      return (this.selection.replace(this, _), this);
    }
    replaceSelectionWith(_, _ = !0) {
      let _ = this.selection;
      return (
        _ &&
          (_ = _.mark(
            this.storedMarks ||
              (_.empty
                ? _.$from.marks()
                : _.$from.marksAcross(_.$to) || _.none),
          )),
        _.replaceWith(this, _),
        this
      );
    }
    deleteSelection() {
      return (this.selection.replace(this), this);
    }
    insertText(_, _, _) {
      let _ = this.doc.type.schema;
      if (_ == null)
        return _
          ? this.replaceSelectionWith(_.text(_), !0)
          : this.deleteSelection();
      {
        if (((_ ??= _), (_ ??= _), !_)) return this.deleteRange(_, _);
        let _ = this.storedMarks;
        if (!_) {
          let _ = this.doc.resolve(_);
          _ = _ == _ ? _.marks() : _.marksAcross(this.doc.resolve(_));
        }
        return (
          this.replaceRangeWith(_, _, _.text(_, _)),
          this.selection.empty || this.setSelection(_.near(this.selection.$to)),
          this
        );
      }
    }
    setMeta(_, _) {
      return ((this.meta[typeof _ == `string` ? _ : _.key] = _), this);
    }
    getMeta(_) {
      return this.meta[typeof _ == `string` ? _ : _.key];
    }
    get isGeneric() {
      for (let _ in this.meta) return !1;
      return !0;
    }
    scrollIntoView() {
      return ((this.updated |= _), this);
    }
    get scrolledIntoView() {
      return (this.updated & _) > 0;
    }
  };
function _(_, _) {
  return !_ || !_ ? _ : _.bind(_);
}
var _ = class {
    constructor(_, _, _) {
      ((this.name = _),
        (this.init = _(_.init, _)),
        (this.apply = _(_.apply, _)));
    }
  },
  _ = [
    new _(`doc`, {
      init(_) {
        return _.doc || _.schema.topNodeType.createAndFill();
      },
      apply(_) {
        return _.doc;
      },
    }),
    new _(`selection`, {
      init(_, _) {
        return _.selection || _.atStart(_.doc);
      },
      apply(_) {
        return _.selection;
      },
    }),
    new _(`storedMarks`, {
      init(_) {
        return _.storedMarks || null;
      },
      apply(_, _, _, _) {
        return _.selection.$cursor ? _.storedMarks : null;
      },
    }),
    new _(`scrollToSelection`, {
      init() {
        return 0;
      },
      apply(_, _) {
        return _.scrolledIntoView ? _ + 1 : _;
      },
    }),
  ],
  _ = class {
    constructor(_, _) {
      ((this.schema = _),
        (this.plugins = []),
        (this.pluginsByKey = Object.create(null)),
        (this.fields = _.slice()),
        _ &&
          _.forEach((_) => {
            if (this.pluginsByKey[_.key])
              throw RangeError(
                `Adding different instances of a keyed plugin (` + _.key + `)`,
              );
            (this.plugins.push(_),
              (this.pluginsByKey[_.key] = _),
              _.spec.state && this.fields.push(new _(_.key, _.spec.state, _)));
          }));
    }
  },
  _ = class _ {
    constructor(_) {
      this.config = _;
    }
    get schema() {
      return this.config.schema;
    }
    get plugins() {
      return this.config.plugins;
    }
    apply(_) {
      return this.applyTransaction(_).state;
    }
    filterTransaction(_, _ = -1) {
      for (let _ = 0; _ < this.config.plugins.length; _++)
        if (_ != _) {
          let _ = this.config.plugins[_];
          if (
            _.spec.filterTransaction &&
            !_.spec.filterTransaction.call(_, _, this)
          )
            return !1;
        }
      return !0;
    }
    applyTransaction(_) {
      if (!this.filterTransaction(_))
        return {
          state: this,
          transactions: [],
        };
      let _ = [_],
        _ = this.applyInner(_),
        _ = null;
      for (;;) {
        let _ = !1;
        for (let _ = 0; _ < this.config.plugins.length; _++) {
          let _ = this.config.plugins[_];
          if (_.spec.appendTransaction) {
            let _ = _ ? _[_]._ : 0,
              _ = _ ? _[_].state : this,
              _ =
                _ < _.length &&
                _.spec.appendTransaction.call(_, _ ? _.slice(_) : _, _, _);
            if (_ && _.filterTransaction(_, _)) {
              if ((_.setMeta(`appendedTransaction`, _), !_)) {
                _ = [];
                for (let _ = 0; _ < this.config.plugins.length; _++)
                  _.push(
                    _ < _
                      ? {
                          state: _,
                          _: _.length,
                        }
                      : {
                          state: this,
                          _: 0,
                        },
                  );
              }
              (_.push(_), (_ = _.applyInner(_)), (_ = !0));
            }
            _ &&
              (_[_] = {
                state: _,
                _: _.length,
              });
          }
        }
        if (!_)
          return {
            state: _,
            transactions: _,
          };
      }
    }
    applyInner(_) {
      if (!_.before._(this.doc))
        throw RangeError(`Applying a mismatched transaction`);
      let _ = new _(this.config),
        _ = this.config.fields;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        _[_.name] = _.apply(_, this[_.name], this, _);
      }
      return _;
    }
    get tr() {
      return new _(this);
    }
    static create(_) {
      let _ = new _(_.doc ? _.doc.type.schema : _.schema, _.plugins),
        _ = new _(_);
      for (let _ = 0; _ < _.fields.length; _++)
        _[_.fields[_].name] = _.fields[_].init(_, _);
      return _;
    }
    reconfigure(_) {
      let _ = new _(this.schema, _.plugins),
        _ = _.fields,
        _ = new _(_);
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_].name;
        _[_] = this.hasOwnProperty(_) ? this[_] : _[_].init(_, _);
      }
      return _;
    }
    toJSON(_) {
      let _ = {
        doc: this.doc.toJSON(),
        selection: this.selection.toJSON(),
      };
      if (
        (this.storedMarks &&
          (_.storedMarks = this.storedMarks.map((_) => _.toJSON())),
        _ && typeof _ == `object`)
      )
        for (let _ in _) {
          if (_ == `doc` || _ == `selection`)
            throw RangeError(
              "The JSON fields `doc` and `selection` are reserved",
            );
          let _ = _[_],
            _ = _.spec.state;
          _ && _.toJSON && (_[_] = _.toJSON.call(_, this[_.key]));
        }
      return _;
    }
    static fromJSON(_, _, _) {
      if (!_) throw RangeError(`Invalid input for EditorState.fromJSON`);
      if (!_.schema) throw RangeError(`Required config field 'schema' missing`);
      let _ = new _(_.schema, _.plugins),
        _ = new _(_);
      return (
        _.fields.forEach((_) => {
          if (_.name == `doc`) _.doc = _.fromJSON(_.schema, _.doc);
          else if (_.name == `selection`)
            _.selection = _.fromJSON(_.doc, _.selection);
          else if (_.name == `storedMarks`)
            _.storedMarks &&
              (_.storedMarks = _.storedMarks.map(_.schema.markFromJSON));
          else {
            if (_)
              for (let _ in _) {
                let _ = _[_],
                  _ = _.spec.state;
                if (
                  _.key == _.name &&
                  _ &&
                  _.fromJSON &&
                  Object.prototype.hasOwnProperty.call(_, _)
                ) {
                  _[_.name] = _.fromJSON.call(_, _, _[_], _);
                  return;
                }
              }
            _[_.name] = _.init(_, _);
          }
        }),
        _
      );
    }
  };
function _(_, _, _) {
  for (let _ in _) {
    let _ = _[_];
    (_ instanceof Function
      ? (_ = _.bind(_))
      : _ == `handleDOMEvents` && (_ = _(_, _, {})),
      (_[_] = _));
  }
  return _;
}
var _ = class {
    constructor(_) {
      ((this.spec = _),
        (this.props = {}),
        _.props && _(_.props, this, this.props),
        (this.key = _.key ? _.key.key : _(`plugin`)));
    }
    getState(_) {
      return _[this.key];
    }
  },
  _ = Object.create(null);
function _(_) {
  return _ in _ ? _ + `$` + ++_[_] : ((_[_] = 0), _ + `$`);
}
var _ = class {
    constructor(_ = `key`) {
      this.key = _(_);
    }
    get(_) {
      return _.config.pluginsByKey[this.key];
    }
    getState(_) {
      return _[this.key];
    }
  },
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (_, _) =>
    !_.selection.empty && (_ && _(_._.deleteSelection().scrollIntoView()), !0);
function _(_, _) {
  let { $cursor: _ } = _.selection;
  return !_ || (_ ? !_.endOfTextblock(`backward`, _) : _.parentOffset > 0)
    ? null
    : _;
}
var _ = (_, _, _) => {
  let _ = _(_, _);
  if (!_) return !1;
  let _ = _(_);
  if (!_) {
    let _ = _.blockRange(),
      _ = _ && _(_);
    return _ != null && (_ && _(_._.lift(_, _).scrollIntoView()), !0);
  }
  let _ = _.nodeBefore;
  if (!_.type.spec.isolating && _(_, _, _)) return !0;
  if (_.parent.content.size == 0 && (_(_, `end`) || _.isSelectable(_))) {
    let _ = _(_.doc, _.before(), _.after(), _.empty);
    if (_ && _.slice.size < _._ - _.from) {
      if (_) {
        let _ = _._.step(_);
        (_.setSelection(
          _(_, `end`)
            ? _.findFrom(_.doc.resolve(_.mapping.map(_.pos, -1)), -1)
            : _.create(_.doc, _.pos - _.nodeSize),
        ),
          _(_.scrollIntoView()));
      }
      return !0;
    }
  }
  return _.isAtom && _.depth == _.depth - 1
    ? (_ && _(_._.delete(_.pos - _.nodeSize, _.pos).scrollIntoView()), !0)
    : !1;
};
function _(_, _, _ = !1) {
  for (let _ = _; _; _ = _ == `start` ? _.firstChild : _.lastChild) {
    if (_.isTextblock) return !0;
    if (_ && _.childCount != 1) return !1;
  }
  return !1;
}
var _ = (_, _, _) => {
  let { $head: _, empty: _ } = _.selection,
    _ = _;
  if (!_) return !1;
  if (_.parent.isTextblock) {
    if (_ ? !_.endOfTextblock(`backward`, _) : _.parentOffset > 0) return !1;
    _ = _(_);
  }
  let _ = _ && _.nodeBefore;
  return !_ || !_.isSelectable(_)
    ? !1
    : (_ &&
        _(
          _._.setSelection(
            _.create(_.doc, _.pos - _.nodeSize),
          ).scrollIntoView(),
        ),
      !0);
};
function _(_) {
  if (!_.parent.type.spec.isolating)
    for (let _ = _.depth - 1; _ >= 0; _--) {
      if (_.index(_) > 0) return _.doc.resolve(_.before(_ + 1));
      if (_.node(_).type.spec.isolating) break;
    }
  return null;
}
function _(_, _) {
  let { $cursor: _ } = _.selection;
  return !_ ||
    (_
      ? !_.endOfTextblock(`forward`, _)
      : _.parentOffset < _.parent.content.size)
    ? null
    : _;
}
var _ = (_, _, _) => {
    let _ = _(_, _);
    if (!_) return !1;
    let _ = _(_);
    if (!_) return !1;
    let _ = _.nodeAfter;
    if (_(_, _, _)) return !0;
    if (_.parent.content.size == 0 && (_(_, `start`) || _.isSelectable(_))) {
      let _ = _(_.doc, _.before(), _.after(), _.empty);
      if (_ && _.slice.size < _._ - _.from) {
        if (_) {
          let _ = _._.step(_);
          (_.setSelection(
            _(_, `start`)
              ? _.findFrom(_.doc.resolve(_.mapping.map(_.pos)), 1)
              : _.create(_.doc, _.mapping.map(_.pos)),
          ),
            _(_.scrollIntoView()));
        }
        return !0;
      }
    }
    return _.isAtom && _.depth == _.depth - 1
      ? (_ && _(_._.delete(_.pos, _.pos + _.nodeSize).scrollIntoView()), !0)
      : !1;
  },
  _ = (_, _, _) => {
    let { $head: _, empty: _ } = _.selection,
      _ = _;
    if (!_) return !1;
    if (_.parent.isTextblock) {
      if (
        _
          ? !_.endOfTextblock(`forward`, _)
          : _.parentOffset < _.parent.content.size
      )
        return !1;
      _ = _(_);
    }
    let _ = _ && _.nodeAfter;
    return !_ || !_.isSelectable(_)
      ? !1
      : (_ && _(_._.setSelection(_.create(_.doc, _.pos)).scrollIntoView()), !0);
  };
function _(_) {
  if (!_.parent.type.spec.isolating)
    for (let _ = _.depth - 1; _ >= 0; _--) {
      let _ = _.node(_);
      if (_.index(_) + 1 < _.childCount) return _.doc.resolve(_.after(_ + 1));
      if (_.type.spec.isolating) break;
    }
  return null;
}
var _ = (_, _) => {
  let { $head: _, $anchor: _ } = _.selection;
  return !_.parent.type.spec.code || !_.sameParent(_)
    ? !1
    : (_ &&
        _(
          _._.insertText(`
`).scrollIntoView(),
        ),
      !0);
};
function _(_) {
  for (let _ = 0; _ < _.edgeCount; _++) {
    let { type: _ } = _.edge(_);
    if (_.isTextblock && !_.hasRequiredAttrs()) return _;
  }
  return null;
}
var _ = (_, _) => {
    let { $head: _, $anchor: _ } = _.selection;
    if (!_.parent.type.spec.code || !_.sameParent(_)) return !1;
    let _ = _.node(-1),
      _ = _.indexAfter(-1),
      _ = _(_.contentMatchAt(_));
    if (!_ || !_.canReplaceWith(_, _, _)) return !1;
    if (_) {
      let _ = _.after(),
        _ = _._.replaceWith(_, _, _.createAndFill());
      (_.setSelection(_.near(_.doc.resolve(_), 1)), _(_.scrollIntoView()));
    }
    return !0;
  },
  _ = (_, _) => {
    let _ = _.selection,
      { $from: _, $to: _ } = _;
    if (_ instanceof _ || _.parent.inlineContent || _.parent.inlineContent)
      return !1;
    let _ = _(_.parent.contentMatchAt(_.indexAfter()));
    if (!_ || !_.isTextblock) return !1;
    if (_) {
      let _ = (!_.parentOffset && _.index() < _.parent.childCount ? _ : _).pos,
        _ = _._.insert(_, _.createAndFill());
      (_.setSelection(_.create(_.doc, _ + 1)), _(_.scrollIntoView()));
    }
    return !0;
  },
  _ = (_, _) => {
    let { $cursor: _ } = _.selection;
    if (!_ || _.parent.content.size) return !1;
    if (_.depth > 1 && _.after() != _.end(-1)) {
      let _ = _.before();
      if (_(_.doc, _)) return (_ && _(_._.split(_).scrollIntoView()), !0);
    }
    let _ = _.blockRange(),
      _ = _ && _(_);
    return _ != null && (_ && _(_._.lift(_, _).scrollIntoView()), !0);
  };
function _(_) {
  return (_, _) => {
    let { $from: _, $to: _ } = _.selection;
    if (_.selection instanceof _ && _.selection.node.isBlock)
      return !_.parentOffset || !_(_.doc, _.pos)
        ? !1
        : (_ && _(_._.split(_.pos).scrollIntoView()), !0);
    if (!_.parent.isBlock) return !1;
    if (_) {
      let _ = _.parentOffset == _.parent.content.size,
        _ = _._;
      (_.selection instanceof _ || _.selection instanceof _) &&
        _.deleteSelection();
      let _ =
          _.depth == 0 ? null : _(_.node(-1).contentMatchAt(_.indexAfter(-1))),
        _ = _ && _(_.parent, _),
        _ = _
          ? [_]
          : _ && _
            ? [
                {
                  type: _,
                },
              ]
            : void 0,
        _ = _(_.doc, _.mapping.map(_.pos), 1, _);
      if (
        (!_ &&
          !_ &&
          _(
            _.doc,
            _.mapping.map(_.pos),
            1,
            _
              ? [
                  {
                    type: _,
                  },
                ]
              : void 0,
          ) &&
          (_ &&
            (_ = [
              {
                type: _,
              },
            ]),
          (_ = !0)),
        _ &&
          (_.split(_.mapping.map(_.pos), 1, _),
          !_ && !_.parentOffset && _.parent.type != _))
      ) {
        let _ = _.mapping.map(_.before()),
          _ = _.doc.resolve(_);
        _ &&
          _.node(-1).canReplaceWith(_.index(), _.index() + 1, _) &&
          _.setNodeMarkup(_.mapping.map(_.before()), _);
      }
      _(_.scrollIntoView());
    }
    return !0;
  };
}
var _ = _(),
  _ = (_, _) => {
    let { $from: _, _: _ } = _.selection,
      _,
      _ = _.sharedDepth(_);
    return (
      _ != 0 &&
      ((_ = _.before(_)), _ && _(_._.setSelection(_.create(_.doc, _))), !0)
    );
  },
  _ = (_, _) => (_ && _(_._.setSelection(new _(_.doc))), !0);
function _(_, _, _) {
  let _ = _.nodeBefore,
    _ = _.nodeAfter,
    _ = _.index();
  return !_ || !_ || !_.type.compatibleContent(_.type)
    ? !1
    : !_.content.size && _.parent.canReplace(_ - 1, _)
      ? (_ && _(_._.delete(_.pos - _.nodeSize, _.pos).scrollIntoView()), !0)
      : !_.parent.canReplace(_, _ + 1) || !(_.isTextblock || _(_.doc, _.pos))
        ? !1
        : (_ &&
            _(
              _._.clearIncompatible(
                _.pos,
                _.type,
                _.contentMatchAt(_.childCount),
              )
                .join(_.pos)
                .scrollIntoView(),
            ),
          !0);
}
function _(_, _, _) {
  let _ = _.nodeBefore,
    _ = _.nodeAfter,
    _,
    _;
  if (_.type.spec.isolating || _.type.spec.isolating) return !1;
  if (_(_, _, _)) return !0;
  let _ = _.parent.canReplace(_.index(), _.index() + 1);
  if (
    _ &&
    (_ = (_ = _.contentMatchAt(_.childCount)).findWrapping(_.type)) &&
    _.matchType(_[0] || _.type).validEnd
  ) {
    if (_) {
      let _ = _.pos + _.nodeSize,
        _ = _.empty;
      for (let _ = _.length - 1; _ >= 0; _--) _ = _.from(_[_].create(null, _));
      _ = _.from(_.copy(_));
      let _ = _._.step(
          new _(_.pos - 1, _, _.pos, _, new _(_, 1, 0), _.length, !0),
        ),
        _ = _ + 2 * _.length;
      (_(_.doc, _) && _.join(_), _(_.scrollIntoView()));
    }
    return !0;
  }
  let _ = _.findFrom(_, 1),
    _ = _ && _.$from.blockRange(_.$to),
    _ = _ && _(_);
  if (_ != null && _ >= _.depth)
    return (_ && _(_._.lift(_, _).scrollIntoView()), !0);
  if (_ && _(_, `start`, !0) && _(_, `end`)) {
    let _ = _,
      _ = [];
    for (; _.push(_), !_.isTextblock;) _ = _.lastChild;
    let _ = _,
      _ = 1;
    for (; !_.isTextblock; _ = _.firstChild) _++;
    if (_.canReplace(_.childCount, _.childCount, _.content)) {
      if (_) {
        let _ = _.empty;
        for (let _ = _.length - 1; _ >= 0; _--) _ = _.from(_[_].copy(_));
        _(
          _._.step(
            new _(
              _.pos - _.length,
              _.pos + _.nodeSize,
              _.pos + _,
              _.pos + _.nodeSize - _,
              new _(_, _.length, 0),
              0,
              !0,
            ),
          ).scrollIntoView(),
        );
      }
      return !0;
    }
  }
  return !1;
}
function _(_) {
  return function (_, _) {
    let _ = _.selection,
      _ = _ < 0 ? _.$from : _.$to,
      _ = _.depth;
    for (; _.node(_).isInline;) {
      if (!_) return !1;
      _--;
    }
    return _.node(_).isTextblock
      ? (_ &&
          _(_._.setSelection(_.create(_.doc, _ < 0 ? _.start(_) : _.end(_)))),
        !0)
      : !1;
  };
}
var _ = _(-1),
  _ = _(1);
function _(_, _ = null) {
  return function (_, _) {
    let _ = !1;
    for (let _ = 0; _ < _.selection.ranges.length && !_; _++) {
      let {
        $from: { pos: _ },
        $to: { pos: _ },
      } = _.selection.ranges[_];
      _.doc.nodesBetween(_, _, (_, _) => {
        if (_) return !1;
        if (_.isTextblock && !_.hasMarkup(_, _)) {
          if (_.type == _) _ = !0;
          else {
            let _ = _.doc.resolve(_),
              _ = _.index();
            _ = _.parent.canReplaceWith(_, _ + 1, _);
          }
        }
      });
    }
    if (!_) return !1;
    if (_) {
      let _ = _._;
      for (let _ = 0; _ < _.selection.ranges.length; _++) {
        let {
          $from: { pos: _ },
          $to: { pos: _ },
        } = _.selection.ranges[_];
        _.setBlockType(_, _, _, _);
      }
      _(_.scrollIntoView());
    }
    return !0;
  };
}
function _(_, _, _) {
  for (let _ = 0; _ < _.length; _++) {
    let { $from: _, $to: _ } = _[_],
      _ = _.depth == 0 && _.inlineContent && _.type.allowsMarkType(_);
    if (
      (_.nodesBetween(_.pos, _.pos, (_) => {
        if (_) return !1;
        _ = _.inlineContent && _.type.allowsMarkType(_);
      }),
      _)
    )
      return !0;
  }
  return !1;
}
function _(_, _ = null) {
  return function (_, _) {
    let { empty: _, $cursor: _, ranges: _ } = _.selection;
    if ((_ && !_) || !_(_.doc, _, _)) return !1;
    if (_) {
      if (_)
        _.isInSet(_.storedMarks || _.marks())
          ? _(_._.removeStoredMark(_))
          : _(_._.addStoredMark(_.create(_)));
      else {
        let _ = !1,
          _ = _._;
        for (let _ = 0; !_ && _ < _.length; _++) {
          let { $from: _, $to: _ } = _[_];
          _ = _.doc.rangeHasMark(_.pos, _.pos, _);
        }
        for (let _ = 0; _ < _.length; _++) {
          let { $from: _, $to: _ } = _[_];
          if (_) _.removeMark(_.pos, _.pos, _);
          else {
            let _ = _.pos,
              _ = _.pos,
              _ = _.nodeAfter,
              _ = _.nodeBefore,
              _ = _ && _.isText ? /^\s*/.exec(_.text)[0].length : 0,
              _ = _ && _.isText ? /\s*$/.exec(_.text)[0].length : 0;
            (_ + _ < _ && ((_ += _), (_ -= _)), _.addMark(_, _, _.create(_)));
          }
        }
        _(_.scrollIntoView());
      }
    }
    return !0;
  };
}
function _(..._) {
  return function (_, _, _) {
    for (let _ = 0; _ < _.length; _++) if (_[_](_, _, _)) return !0;
    return !1;
  };
}
var _ = _(_, _, _),
  _ = _(_, _, _),
  _ = {
    Enter: _(_, _, _, _),
    "Mod-Enter": _,
    Backspace: _,
    "Mod-Backspace": _,
    "Shift-Backspace": _,
    Delete: _,
    "Mod-Delete": _,
    "Mod-a": _,
  },
  _ = {
    "Ctrl-h": _.Backspace,
    "Alt-Backspace": _[`Mod-Backspace`],
    "Ctrl-d": _.Delete,
    "Ctrl-Alt-Backspace": _[`Mod-Delete`],
    "Alt-Delete": _[`Mod-Delete`],
    "Alt-d": _[`Mod-Delete`],
    "Ctrl-a": _,
    "Ctrl-e": _,
  };
for (let _ in _) _[_] = _[_];
var _ = (
    typeof navigator < `u`
      ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
      : typeof _ < `u` && _.platform && _.platform() == `darwin`
  )
    ? _
    : _,
  _ = 200,
  _ = function () {};
((_.prototype.append = function (_) {
  return _.length
    ? ((_ = _.from(_)),
      (!this.length && _) ||
        (_.length < _ && this.leafAppend(_)) ||
        (this.length < _ && _.leafPrepend(this)) ||
        this.appendInner(_))
    : this;
}),
  (_.prototype.prepend = function (_) {
    return _.length ? _.from(_).append(this) : this;
  }),
  (_.prototype.appendInner = function (_) {
    return new _(this, _);
  }),
  (_.prototype.slice = function (_, _) {
    return (
      _ === void 0 && (_ = 0),
      _ === void 0 && (_ = this.length),
      _ >= _
        ? _.empty
        : this.sliceInner(Math.max(0, _), Math.min(this.length, _))
    );
  }),
  (_.prototype.get = function (_) {
    if (!(_ < 0 || _ >= this.length)) return this.getInner(_);
  }),
  (_.prototype.forEach = function (_, _, _) {
    (_ === void 0 && (_ = 0),
      _ === void 0 && (_ = this.length),
      _ <= _
        ? this.forEachInner(_, _, _, 0)
        : this.forEachInvertedInner(_, _, _, 0));
  }),
  (_.prototype.map = function (_, _, _) {
    (_ === void 0 && (_ = 0), _ === void 0 && (_ = this.length));
    var _ = [];
    return (
      this.forEach(
        function (_, _) {
          return _.push(_(_, _));
        },
        _,
        _,
      ),
      _
    );
  }),
  (_.from = function (_) {
    return _ instanceof _ ? _ : _ && _.length ? new _(_) : _.empty;
  }));
var _ = (function (_) {
  function _(_) {
    (_.call(this), (this.values = _));
  }
  (_ && (_.__proto__ = _),
    (_.prototype = Object.create(_ && _.prototype)),
    (_.prototype.constructor = _));
  var _ = {
    length: {
      configurable: !0,
    },
    depth: {
      configurable: !0,
    },
  };
  return (
    (_.prototype.flatten = function () {
      return this.values;
    }),
    (_.prototype.sliceInner = function (_, _) {
      return _ == 0 && _ == this.length ? this : new _(this.values.slice(_, _));
    }),
    (_.prototype.getInner = function (_) {
      return this.values[_];
    }),
    (_.prototype.forEachInner = function (_, _, _, _) {
      for (var _ = _; _ < _; _++)
        if (_(this.values[_], _ + _) === !1) return !1;
    }),
    (_.prototype.forEachInvertedInner = function (_, _, _, _) {
      for (var _ = _ - 1; _ >= _; _--)
        if (_(this.values[_], _ + _) === !1) return !1;
    }),
    (_.prototype.leafAppend = function (_) {
      if (this.length + _.length <= _)
        return new _(this.values.concat(_.flatten()));
    }),
    (_.prototype.leafPrepend = function (_) {
      if (this.length + _.length <= _)
        return new _(_.flatten().concat(this.values));
    }),
    (_.length.get = function () {
      return this.values.length;
    }),
    (_.depth.get = function () {
      return 0;
    }),
    Object.defineProperties(_.prototype, _),
    _
  );
})(_);
_.empty = new _([]);
var _ = (function (_) {
    function _(_, _) {
      (_.call(this),
        (this.left = _),
        (this.right = _),
        (this.length = _.length + _.length),
        (this.depth = Math.max(_.depth, _.depth) + 1));
    }
    return (
      _ && (_.__proto__ = _),
      (_.prototype = Object.create(_ && _.prototype)),
      (_.prototype.constructor = _),
      (_.prototype.flatten = function () {
        return this.left.flatten().concat(this.right.flatten());
      }),
      (_.prototype.getInner = function (_) {
        return _ < this.left.length
          ? this.left.get(_)
          : this.right.get(_ - this.left.length);
      }),
      (_.prototype.forEachInner = function (_, _, _, _) {
        var _ = this.left.length;
        if (
          (_ < _ && this.left.forEachInner(_, _, Math.min(_, _), _) === !1) ||
          (_ > _ &&
            this.right.forEachInner(
              _,
              Math.max(_ - _, 0),
              Math.min(this.length, _) - _,
              _ + _,
            ) === !1)
        )
          return !1;
      }),
      (_.prototype.forEachInvertedInner = function (_, _, _, _) {
        var _ = this.left.length;
        if (
          (_ > _ &&
            this.right.forEachInvertedInner(
              _,
              _ - _,
              Math.max(_, _) - _,
              _ + _,
            ) === !1) ||
          (_ < _ &&
            this.left.forEachInvertedInner(_, Math.min(_, _), _, _) === !1)
        )
          return !1;
      }),
      (_.prototype.sliceInner = function (_, _) {
        if (_ == 0 && _ == this.length) return this;
        var _ = this.left.length;
        return _ <= _
          ? this.left.slice(_, _)
          : _ >= _
            ? this.right.slice(_ - _, _ - _)
            : this.left.slice(_, _).append(this.right.slice(0, _ - _));
      }),
      (_.prototype.leafAppend = function (_) {
        var _ = this.right.leafAppend(_);
        if (_) return new _(this.left, _);
      }),
      (_.prototype.leafPrepend = function (_) {
        var _ = this.left.leafPrepend(_);
        if (_) return new _(_, this.right);
      }),
      (_.prototype.appendInner = function (_) {
        return this.left.depth >= Math.max(this.right.depth, _.depth) + 1
          ? new _(this.left, new _(this.right, _))
          : new _(this, _);
      }),
      _
    );
  })(_),
  _ = 500,
  _ = class _ {
    constructor(_, _) {
      ((this.items = _), (this.eventCount = _));
    }
    popEvent(_, _) {
      if (this.eventCount == 0) return null;
      let _ = this.items.length;
      for (; ; _--)
        if (this.items.get(_ - 1).selection) {
          --_;
          break;
        }
      let _, _;
      _ && ((_ = this.remapping(_, this.items.length)), (_ = _.maps.length));
      let _ = _._,
        _,
        _,
        _ = [],
        _ = [];
      return (
        this.items.forEach(
          (_, _) => {
            if (!_.step)
              (_ || ((_ = this.remapping(_, _ + 1)), (_ = _.maps.length)),
                _--,
                _.push(_));
            else {
              if (_) {
                _.push(new _(_.map));
                let _ = _.step.map(_.slice(_)),
                  _;
                (_ &&
                  _.maybeStep(_).doc &&
                  ((_ = _.mapping.maps[_.mapping.maps.length - 1]),
                  _.push(new _(_, void 0, void 0, _.length + _.length))),
                  _--,
                  _ && _.appendMap(_, _));
              } else _.maybeStep(_.step);
              if (_.selection)
                return (
                  (_ = _ ? _.selection.map(_.slice(_)) : _.selection),
                  (_ = new _(
                    this.items.slice(0, _).append(_.reverse().concat(_)),
                    this.eventCount - 1,
                  )),
                  !1
                );
            }
          },
          this.items.length,
          0,
        ),
        {
          remaining: _,
          transform: _,
          selection: _,
        }
      );
    }
    addTransform(_, _, _, _) {
      let _ = [],
        _ = this.eventCount,
        _ = this.items,
        _ = !_ && _.length ? _.get(_.length - 1) : null;
      for (let _ = 0; _ < _.steps.length; _++) {
        let _ = _.steps[_].invert(_.docs[_]),
          _ = new _(_.mapping.maps[_], _, _),
          _;
        ((_ = _ && _.merge(_)) &&
          ((_ = _), _ ? _.pop() : (_ = _.slice(0, _.length - 1))),
          _.push(_),
          (_ &&= (_++, void 0)),
          _ || (_ = _));
      }
      let _ = _ - _.depth;
      return (_ > _ && ((_ = _(_, _)), (_ -= _)), new _(_.append(_), _));
    }
    remapping(_, _) {
      let _ = new _();
      return (
        this.items.forEach(
          (_, _) => {
            let _ =
              _.mirrorOffset != null && _ - _.mirrorOffset >= _
                ? _.maps.length - _.mirrorOffset
                : void 0;
            _.appendMap(_.map, _);
          },
          _,
          _,
        ),
        _
      );
    }
    addMaps(_) {
      return this.eventCount == 0
        ? this
        : new _(this.items.append(_.map((_) => new _(_))), this.eventCount);
    }
    rebased(_, _) {
      if (!this.eventCount) return this;
      let _ = [],
        _ = Math.max(0, this.items.length - _),
        _ = _.mapping,
        _ = _.steps.length,
        _ = this.eventCount;
      this.items.forEach((_) => {
        _.selection && _--;
      }, _);
      let _ = _;
      this.items.forEach((_) => {
        let _ = _.getMirror(--_);
        if (_ == null) return;
        _ = Math.min(_, _);
        let _ = _.maps[_];
        if (_.step) {
          let _ = _.steps[_].invert(_.docs[_]),
            _ = _.selection && _.selection.map(_.slice(_ + 1, _));
          (_ && _++, _.push(new _(_, _, _)));
        } else _.push(new _(_));
      }, _);
      let _ = [];
      for (let _ = _; _ < _; _++) _.push(new _(_.maps[_]));
      let _ = this.items.slice(0, _).append(_).append(_),
        _ = new _(_, _);
      return (
        _.emptyItemCount() > _ &&
          (_ = _.compress(this.items.length - _.length)),
        _
      );
    }
    emptyItemCount() {
      let _ = 0;
      return (
        this.items.forEach((_) => {
          _.step || _++;
        }),
        _
      );
    }
    compress(_ = this.items.length) {
      let _ = this.remapping(0, _),
        _ = _.maps.length,
        _ = [],
        _ = 0;
      return (
        this.items.forEach(
          (_, _) => {
            if (_ >= _) (_.push(_), _.selection && _++);
            else if (_.step) {
              let _ = _.step.map(_.slice(_)),
                _ = _ && _.getMap();
              if ((_--, _ && _.appendMap(_, _), _)) {
                let _ = _.selection && _.selection.map(_.slice(_));
                _ && _++;
                let _ = new _(_.invert(), _, _),
                  _,
                  _ = _.length - 1;
                (_ = _.length && _[_].merge(_)) ? (_[_] = _) : _.push(_);
              }
            } else _.map && _--;
          },
          this.items.length,
          0,
        ),
        new _(_.from(_.reverse()), _)
      );
    }
  };
_.empty = new _(_.empty, 0);
function _(_, _) {
  let _;
  return (
    _.forEach((_, _) => {
      if (_.selection && _-- == 0) return ((_ = _), !1);
    }),
    _.slice(_)
  );
}
var _ = class _ {
    constructor(_, _, _, _) {
      ((this.map = _),
        (this.step = _),
        (this.selection = _),
        (this.mirrorOffset = _));
    }
    merge(_) {
      if (this.step && _.step && !_.selection) {
        let _ = _.step.merge(this.step);
        if (_) return new _(_.getMap().invert(), _, this.selection);
      }
    }
  },
  _ = class {
    constructor(_, _, _, _, _) {
      ((this.done = _),
        (this.undone = _),
        (this.prevRanges = _),
        (this.prevTime = _),
        (this.prevComposition = _));
    }
  },
  _ = 20;
function _(_, _, _, _) {
  let _ = _.getMeta(_),
    _;
  if (_) return _.historyState;
  _.getMeta(_) && (_ = new _(_.done, _.undone, null, 0, -1));
  let _ = _.getMeta(`appendedTransaction`);
  if (_.steps.length == 0) return _;
  if (_ && _.getMeta(_))
    return _.getMeta(_).redo
      ? new _(
          _.done.addTransform(_, void 0, _, _(_)),
          _.undone,
          _(_.mapping.maps[_.steps.length - 1]),
          _.prevTime,
          _.prevComposition,
        )
      : new _(
          _.done,
          _.undone.addTransform(_, void 0, _, _(_)),
          null,
          _.prevTime,
          _.prevComposition,
        );
  if (
    _.getMeta(`addToHistory`) !== !1 &&
    !(_ && _.getMeta(`addToHistory`) === !1)
  ) {
    let _ = _.getMeta(`composition`),
      _ =
        _.prevTime == 0 ||
        (!_ &&
          _.prevComposition != _ &&
          (_.prevTime < (_.time || 0) - _.newGroupDelay ||
            !_(_, _.prevRanges))),
      _ = _
        ? _(_.prevRanges, _.mapping)
        : _(_.mapping.maps[_.steps.length - 1]);
    return new _(
      _.done.addTransform(_, _ ? _.selection.getBookmark() : void 0, _, _(_)),
      _.empty,
      _,
      _.time,
      _ ?? _.prevComposition,
    );
  }
  return (_ = _.getMeta(`rebased`))
    ? new _(
        _.done.rebased(_, _),
        _.undone.rebased(_, _),
        _(_.prevRanges, _.mapping),
        _.prevTime,
        _.prevComposition,
      )
    : new _(
        _.done.addMaps(_.mapping.maps),
        _.undone.addMaps(_.mapping.maps),
        _(_.prevRanges, _.mapping),
        _.prevTime,
        _.prevComposition,
      );
}
function _(_, _) {
  if (!_) return !1;
  if (!_.docChanged) return !0;
  let _ = !1;
  return (
    _.mapping.maps[0].forEach((_, _) => {
      for (let _ = 0; _ < _.length; _ += 2)
        _ <= _[_ + 1] && _ >= _[_] && (_ = !0);
    }),
    _
  );
}
function _(_) {
  let _ = [];
  return (_.forEach((_, _, _, _) => _.push(_, _)), _);
}
function _(_, _) {
  if (!_) return null;
  let _ = [];
  for (let _ = 0; _ < _.length; _ += 2) {
    let _ = _.map(_[_], 1),
      _ = _.map(_[_ + 1], -1);
    _ <= _ && _.push(_, _);
  }
  return _;
}
function _(_, _, _) {
  let _ = _(_),
    _ = _.get(_).spec.config,
    _ = (_ ? _.undone : _.done).popEvent(_, _);
  if (!_) return null;
  let _ = _.selection.resolve(_.transform.doc),
    _ = (_ ? _.done : _.undone).addTransform(
      _.transform,
      _.selection.getBookmark(),
      _,
      _,
    ),
    _ = new _(_ ? _ : _.remaining, _ ? _.remaining : _, null, 0, -1);
  return _.transform.setSelection(_).setMeta(_, {
    redo: _,
    historyState: _,
  });
}
var _ = !1,
  _ = null;
function _(_) {
  let _ = _.plugins;
  if (_ != _) {
    ((_ = !1), (_ = _));
    for (let _ = 0; _ < _.length; _++)
      if (_[_].spec.historyPreserveItems) {
        _ = !0;
        break;
      }
  }
  return _;
}
var _ = new _(`history`),
  _ = new _(`closeHistory`);
function _(_ = {}) {
  return (
    (_ = {
      depth: _.depth || 100,
      newGroupDelay: _.newGroupDelay || 500,
    }),
    new _({
      key: _,
      state: {
        init() {
          return new _(_.empty, _.empty, null, 0, -1);
        },
        apply(_, _, _) {
          return _(_, _, _, _);
        },
      },
      config: _,
      props: {
        handleDOMEvents: {
          beforeinput(_, _) {
            let _ = _.inputType,
              _ = _ == `historyUndo` ? _ : _ == `historyRedo` ? _ : null;
            return _ ? (_.preventDefault(), _(_.state, _.dispatch)) : !1;
          },
        },
      },
    })
  );
}
function _(_, _) {
  return (_, _) => {
    let _ = _.getState(_);
    if (!_ || (_ ? _.undone : _.done).eventCount == 0) return !1;
    if (_) {
      let _ = _(_, _, _);
      _ && _(_ ? _.scrollIntoView() : _);
    }
    return !0;
  };
}
var _ = _(!1, !0),
  _ = _(!0, !0),
  _ = class {
    constructor(_, _, _ = {}) {
      ((this.match = _),
        (this.match = _),
        (this.handler = typeof _ == `string` ? _(_) : _),
        (this.undoable = _.undoable !== !1),
        (this.inCode = _.inCode || !1));
    }
  };
function _(_) {
  return function (_, _, _, _) {
    let _ = _;
    if (_[1]) {
      let _ = _[0].lastIndexOf(_[1]);
      ((_ += _[0].slice(_ + _[1].length)), (_ += _));
      let _ = _ - _;
      _ > 0 && ((_ = _[0].slice(_ - _, _) + _), (_ = _));
    }
    return _._.insertText(_, _, _);
  };
}
var _ = 500;
function _({ rules: _ }) {
  let _ = new _({
    state: {
      init() {
        return null;
      },
      apply(_, _) {
        return _.getMeta(this) || (_.selectionSet || _.docChanged ? null : _);
      },
    },
    props: {
      handleTextInput(_, _, _, _) {
        return _(_, _, _, _, _, _);
      },
      handleDOMEvents: {
        compositionend: (_) => {
          setTimeout(() => {
            let { $cursor: _ } = _.state.selection;
            _ && _(_, _.pos, _.pos, ``, _, _);
          });
        },
      },
    },
    isInputRules: !0,
  });
  return _;
}
function _(_, _, _, _, _, _) {
  if (_.composing) return !1;
  let _ = _.state,
    _ = _.doc.resolve(_),
    _ =
      _.parent.textBetween(
        Math.max(0, _.parentOffset - _),
        _.parentOffset,
        null,
        `￼`,
      ) + _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_.parent.type.spec.code) {
      if (!_.inCode) continue;
    } else if (_.inCode === `only`) continue;
    let _ = _.match.exec(_),
      _ = _ && _.handler(_, _, _ - (_[0].length - _.length), _);
    if (_)
      return (
        _.undoable &&
          _.setMeta(_, {
            transform: _,
            from: _,
            _: _,
            text: _,
          }),
        _.dispatch(_),
        !0
      );
  }
  return !1;
}
var _ = (_, _) => {
  let _ = _.plugins;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _;
    if (_.spec.isInputRules && (_ = _.getState(_))) {
      if (_) {
        let _ = _._,
          _ = _.transform;
        for (let _ = _.steps.length - 1; _ >= 0; _--)
          _.step(_.steps[_].invert(_.docs[_]));
        if (_.text) {
          let _ = _.doc.resolve(_.from).marks();
          _.replaceWith(_.from, _._, _.schema.text(_.text, _));
        } else _.delete(_.from, _._);
        _(_);
      }
      return !0;
    }
  }
  return !1;
};
(new _(/--$/, `—`),
  new _(/\.\.\.$/, `…`),
  new _(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, `“`),
  new _(/"$/, `”`),
  new _(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, `‘`),
  new _(/'$/, `’`));
function _(_, _, _ = null, _) {
  return new _(_, (_, _, _, _) => {
    let _ = _ instanceof Function ? _(_) : _,
      _ = _._.delete(_, _),
      _ = _.doc.resolve(_).blockRange(),
      _ = _ && _(_, _, _);
    if (!_) return null;
    _.wrap(_, _);
    let _ = _.doc.resolve(_ - 1).nodeBefore;
    return (
      _ && _.type == _ && _(_.doc, _ - 1) && (!_ || _(_, _)) && _.join(_ - 1), _
    );
  });
}
function _(_, _, _ = null) {
  return new _(_, (_, _, _, _) => {
    let _ = _.doc.resolve(_),
      _ = _ instanceof Function ? _(_) : _;
    return _.node(-1).canReplaceWith(_.index(-1), _.indexAfter(-1), _)
      ? _._.delete(_, _).setBlockType(_, _, _, _)
      : null;
  });
}
var _ = function (_) {
    for (var _ = 0; ; _++) if (((_ = _.previousSibling), !_)) return _;
  },
  _ = function (_) {
    let _ = _.assignedSlot || _.parentNode;
    return _ && _.nodeType == 11 ? _.host : _;
  },
  _ = null,
  _ = function (_, _, _) {
    let _ = (_ ||= document.createRange());
    return (_.setEnd(_, _ ?? _.nodeValue.length), _.setStart(_, _ || 0), _);
  },
  _ = function () {
    _ = null;
  },
  _ = function (_, _, _, _) {
    return _ && (_(_, _, _, _, -1) || _(_, _, _, _, 1));
  },
  _ = /^(img|br|input|textarea|hr)$/i;
function _(_, _, _, _, _) {
  for (;;) {
    if (_ == _ && _ == _) return !0;
    if (_ == (_ < 0 ? 0 : _(_))) {
      let _ = _.parentNode;
      if (
        !_ ||
        !_(_) ||
        _(_) ||
        _.test(_.nodeName) ||
        _.contentEditable == `false`
      )
        return !1;
      ((_ = _(_) + (_ < 0 ? 0 : 1)), (_ = _));
    } else if (_(_)) {
      let _ = _.childNodes[_ + (_ < 0 ? -1 : 0)];
      if (_(_) && _.contentEditable == `false`) {
        if (_.pmViewDesc?.ignoreForSelection) _ += _;
        else return !1;
      } else ((_ = _), (_ = _ < 0 ? _(_) : 0));
    } else return !1;
  }
}
function _(_) {
  return _.nodeType == 3 ? _.nodeValue.length : _.childNodes.length;
}
function _(_) {
  return _.nodeType == 1;
}
function _(_) {
  return _.nodeType == 3;
}
function _(_, _) {
  return _ ? _.contains(_(_) ? _ : _.parentNode) : !1;
}
function _(_, _) {
  for (;;) {
    if (_(_) && _) return _;
    if (_(_) && _ > 0) {
      if (_.contentEditable == `false`) return null;
      ((_ = _.childNodes[_ - 1]), (_ = _(_)));
    } else if (_.parentNode && !_(_)) ((_ = _(_)), (_ = _.parentNode));
    else return null;
  }
}
function _(_, _) {
  for (;;) {
    if (_(_) && _ < _.nodeValue.length) return _;
    if (_(_) && _ < _.childNodes.length) {
      if (_.contentEditable == `false`) return null;
      ((_ = _.childNodes[_]), (_ = 0));
    } else if (_.parentNode && !_(_)) ((_ = _(_) + 1), (_ = _.parentNode));
    else return null;
  }
}
function _(_, _, _) {
  for (let _ = _ == 0, _ = _ == _(_); _ || _;) {
    if (_ == _) return !0;
    let _ = _(_);
    if (((_ = _.parentNode), !_)) return !1;
    ((_ &&= _ == 0), (_ &&= _ == _(_)));
  }
}
function _(_) {
  let _;
  for (let _ = _; _ && !(_ = _.pmViewDesc); _ = _.parentNode);
  return _ && _.node && _.node.isBlock && (_.dom == _ || _.contentDOM == _);
}
var _ = function (_) {
  return (
    _.focusNode && _(_.focusNode, _.focusOffset, _.anchorNode, _.anchorOffset)
  );
};
function _(_, _) {
  let _ = document.createEvent(`Event`);
  return (
    _.initEvent(`keydown`, !0, !0), (_.keyCode = _), (_.key = _.code = _), _
  );
}
function _(_) {
  let _ = _.activeElement;
  for (; _ && _.shadowRoot;) _ = _.shadowRoot.activeElement;
  return _;
}
function _(_, _, _) {
  if (_.caretPositionFromPoint)
    try {
      let _ = _.caretPositionFromPoint(_, _);
      if (_)
        return {
          node: _.offsetNode,
          offset: Math.min(_(_.offsetNode), _.offset),
        };
    } catch {}
  if (_.caretRangeFromPoint) {
    let _ = _.caretRangeFromPoint(_, _);
    if (_)
      return {
        node: _.startContainer,
        offset: Math.min(_(_.startContainer), _.startOffset),
      };
  }
}
var _ = typeof navigator < `u` ? navigator : null,
  _ = typeof document < `u` ? document : null,
  _ = (_ && _.userAgent) || ``,
  _ = /Edge\/(\d+)/.exec(_),
  _ = /MSIE \d/.exec(_),
  _ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(_),
  _ = !!(_ || _ || _),
  _ = _ ? document.documentMode : _ ? +_[1] : _ ? +_[1] : 0,
  _ = !_ && /gecko\/(\d+)/i.test(_);
_ && +(/Firefox\/(\d+)/.exec(_) || [0, 0])[1];
var _ = !_ && /Chrome\/(\d+)/.exec(_),
  _ = !!_,
  _ = _ ? +_[1] : 0,
  _ = !_ && !!_ && /Apple Computer/.test(_.vendor),
  _ = _ && (/Mobile\/\w+/.test(_) || (!!_ && _.maxTouchPoints > 2)),
  _ = _ || (_ ? /Mac/.test(_.platform) : !1),
  _ = _ ? /Win/.test(_.platform) : !1,
  _ = /Android \d/.test(_),
  _ = !!_ && `webkitFontSmoothing` in _.documentElement.style,
  _ = _ ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function _(_) {
  let _ = _.defaultView && _.defaultView.visualViewport;
  return _
    ? {
        left: 0,
        right: _.width,
        top: 0,
        bottom: _.height,
      }
    : {
        left: 0,
        right: _.documentElement.clientWidth,
        top: 0,
        bottom: _.documentElement.clientHeight,
      };
}
function _(_, _) {
  return typeof _ == `number` ? _ : _[_];
}
function _(_) {
  let _ = _.getBoundingClientRect(),
    _ = _.width / _.offsetWidth || 1,
    _ = _.height / _.offsetHeight || 1;
  return {
    left: _.left,
    right: _.left + _.clientWidth * _,
    top: _.top,
    bottom: _.top + _.clientHeight * _,
  };
}
function _(_, _, _) {
  if (!_(_) && _.left == 0) return;
  let _ = _.someProp(`scrollThreshold`) || 0,
    _ = _.someProp(`scrollMargin`) || 5,
    _ = _.dom.ownerDocument;
  for (let _ = _ || _.dom; _;) {
    if (!_(_)) {
      _ = _(_);
      continue;
    }
    let _ = _ == _.body,
      _ = _ ? _(_) : _(_),
      _ = 0,
      _ = 0;
    if (
      (_.top < _.top + _(_, `top`)
        ? (_ = -(_.top - _.top + _(_, `top`)))
        : _.bottom > _.bottom - _(_, `bottom`) &&
          (_ =
            _.bottom - _.top > _.bottom - _.top
              ? _.top + _(_, `top`) - _.top
              : _.bottom - _.bottom + _(_, `bottom`)),
      _.left < _.left + _(_, `left`)
        ? (_ = -(_.left - _.left + _(_, `left`)))
        : _.right > _.right - _(_, `right`) &&
          (_ = _.right - _.right + _(_, `right`)),
      _ || _)
    ) {
      if (_) _.defaultView.scrollBy(_, _);
      else {
        let _ = _.scrollLeft,
          _ = _.scrollTop;
        (_ && (_.scrollTop += _), _ && (_.scrollLeft += _));
        let _ = _.scrollLeft - _,
          _ = _.scrollTop - _;
        _ = {
          left: _.left - _,
          top: _.top - _,
          right: _.right - _,
          bottom: _.bottom - _,
        };
      }
    }
    let _ = _ ? `fixed` : getComputedStyle(_).position;
    if (/^(fixed|sticky)$/.test(_)) break;
    _ = _ == `absolute` ? _.offsetParent : _(_);
  }
}
function _(_) {
  let _ = _.dom.getBoundingClientRect(),
    _ = Math.max(0, _.top),
    _,
    _;
  for (
    let _ = (_.left + _.right) / 2, _ = _ + 1;
    _ < Math.min(innerHeight, _.bottom);
    _ += 5
  ) {
    let _ = _.root.elementFromPoint(_, _);
    if (!_ || _ == _.dom || !_.dom.contains(_)) continue;
    let _ = _.getBoundingClientRect();
    if (_.top >= _ - 20) {
      ((_ = _), (_ = _.top));
      break;
    }
  }
  return {
    refDOM: _,
    refTop: _,
    stack: _(_.dom),
  };
}
function _(_) {
  let _ = [],
    _ = _.ownerDocument;
  for (
    let _ = _;
    _ &&
    (_.push({
      dom: _,
      top: _.scrollTop,
      left: _.scrollLeft,
    }),
    _ != _);
    _ = _(_)
  );
  return _;
}
function _({ refDOM: _, refTop: _, stack: _ }) {
  let _ = _ ? _.getBoundingClientRect().top : 0;
  _(_, _ == 0 ? 0 : _ - _);
}
function _(_, _) {
  for (let _ = 0; _ < _.length; _++) {
    let { dom: _, top: _, left: _ } = _[_];
    (_.scrollTop != _ + _ && (_.scrollTop = _ + _),
      _.scrollLeft != _ && (_.scrollLeft = _));
  }
}
var _ = null;
function _(_) {
  if (_.setActive) return _.setActive();
  if (_) return _.focus(_);
  let _ = _(_);
  (_.focus(
    _ == null
      ? {
          get preventScroll() {
            return (
              (_ = {
                preventScroll: !0,
              }),
              !0
            );
          },
        }
      : void 0,
  ),
    _ || ((_ = !1), _(_, 0)));
}
function _(_, _) {
  let _,
    _ = 2e8,
    _,
    _ = 0,
    _ = _.top,
    _ = _.top,
    _,
    _;
  for (let _ = _.firstChild, _ = 0; _; _ = _.nextSibling, _++) {
    let _;
    if (_(_)) _ = _.getClientRects();
    else if (_(_)) _ = _(_).getClientRects();
    else continue;
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (_.top <= _ && _.bottom >= _) {
        ((_ = Math.max(_.bottom, _)), (_ = Math.min(_.top, _)));
        let _ =
          _.left > _.left
            ? _.left - _.left
            : _.right < _.left
              ? _.left - _.right
              : 0;
        if (_ < _) {
          ((_ = _),
            (_ = _),
            (_ =
              _ && _(_)
                ? {
                    left: _.right < _.left ? _.right : _.left,
                    top: _.top,
                  }
                : _),
            _(_) && _ && (_ = _ + +(_.left >= (_.left + _.right) / 2)));
          continue;
        }
      } else
        _.top > _.top &&
          !_ &&
          _.left <= _.left &&
          _.right >= _.left &&
          ((_ = _),
          (_ = {
            left: Math.max(_.left, Math.min(_.right, _.left)),
            top: _.top,
          }));
      !_ &&
        ((_.left >= _.right && _.top >= _.top) ||
          (_.left >= _.left && _.top >= _.bottom)) &&
        (_ = _ + 1);
    }
  }
  return (
    !_ && _ && ((_ = _), (_ = _), (_ = 0)),
    _ && _(_)
      ? _(_, _)
      : !_ || _
        ? {
            node: _,
            offset: _,
          }
        : _(_, _)
  );
}
function _(_, _) {
  let _ = _.nodeValue.length,
    _ = document.createRange(),
    _;
  for (let _ = 0; _ < _; _++) {
    (_.setEnd(_, _ + 1), _.setStart(_, _));
    let _ = _(_, 1);
    if (_.top != _.bottom && _(_, _)) {
      _ = {
        node: _,
        offset: _ + +(_.left >= (_.left + _.right) / 2),
      };
      break;
    }
  }
  return (
    _.detach(),
    _ || {
      node: _,
      offset: 0,
    }
  );
}
function _(_, _) {
  return (
    _.left >= _.left - 1 &&
    _.left <= _.right + 1 &&
    _.top >= _.top - 1 &&
    _.top <= _.bottom + 1
  );
}
function _(_, _) {
  let _ = _.parentNode;
  return _ &&
    /^li$/i.test(_.nodeName) &&
    _.left < _.getBoundingClientRect().left
    ? _
    : _;
}
function _(_, _, _) {
  let { node: _, offset: _ } = _(_, _),
    _ = -1;
  if (_(_) && !_.firstChild) {
    let _ = _.getBoundingClientRect();
    _ = _.left != _.right && _.left > (_.left + _.right) / 2 ? 1 : -1;
  }
  return _.docView.posFromDOM(_, _, _);
}
function _(_, _, _, _) {
  let _ = -1;
  for (let _ = _, _ = !1; _ != _.dom;) {
    let _ = _.docView.nearestDesc(_, !0),
      _;
    if (!_) return null;
    if (
      _(_.dom) &&
      ((_.node.isBlock && _.parent) || !_.contentDOM) &&
      ((_ = _.dom.getBoundingClientRect()).width || _.height) &&
      (_.node.isBlock &&
        _.parent &&
        !/^T(R|BODY|HEAD|FOOT)$/.test(_.dom.nodeName) &&
        ((!_ && _.left > _.left) || _.top > _.top
          ? (_ = _.posBefore)
          : ((!_ && _.right < _.left) || _.bottom < _.top) && (_ = _.posAfter),
        (_ = !0)),
      !_.contentDOM && _ < 0 && !_.node.isText)
    )
      return (
        _.node.isBlock
          ? _.top < (_.top + _.bottom) / 2
          : _.left < (_.left + _.right) / 2
      )
        ? _.posBefore
        : _.posAfter;
    _ = _.dom.parentNode;
  }
  return _ > -1 ? _ : _.docView.posFromDOM(_, _, -1);
}
function _(_, _, _) {
  let _ = _.childNodes.length;
  if (_ && _.top < _.bottom)
    for (
      let _ = Math.max(
          0,
          Math.min(
            _ - 1,
            Math.floor((_ * (_.top - _.top)) / (_.bottom - _.top)) - 2,
          ),
        ),
        _ = _;
      ;
    ) {
      let _ = _.childNodes[_];
      if (_(_)) {
        let _ = _.getClientRects();
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (_(_, _)) return _(_, _, _);
        }
      }
      if ((_ = (_ + 1) % _) == _) break;
    }
  return _;
}
function _(_, _) {
  let _ = _.dom.ownerDocument,
    _,
    _ = 0,
    _ = _(_, _.left, _.top);
  _ && ({ node: _, offset: _ } = _);
  let _ = (_.root.elementFromPoint ? _.root : _).elementFromPoint(
      _.left,
      _.top,
    ),
    _;
  if (!_ || !_.dom.contains(_)) {
    let _ = _.dom.getBoundingClientRect();
    if (!_(_, _) || ((_ = _(_.dom, _, _)), !_)) return null;
  }
  if (_) for (let _ = _; _ && _; _ = _(_)) _.draggable && (_ = void 0);
  if (((_ = _(_, _)), _)) {
    if (
      _ &&
      _(_) &&
      ((_ = Math.min(_, _.childNodes.length)), _ < _.childNodes.length)
    ) {
      let _ = _.childNodes[_],
        _;
      _.nodeName == `IMG` &&
        (_ = _.getBoundingClientRect()).right <= _.left &&
        _.bottom > _.top &&
        _++;
    }
    let _;
    (_ &&
      _ &&
      _(_) &&
      _((_ = _.childNodes[_ - 1])) &&
      _.contentEditable == `false` &&
      _.getBoundingClientRect().top >= _.top &&
      _--,
      _ == _.dom &&
      _ == _.childNodes.length - 1 &&
      _(_.lastChild) &&
      _.top > _.lastChild.getBoundingClientRect().bottom
        ? (_ = _.state.doc.content.size)
        : (_ != 0 && _(_) && _.childNodes[_ - 1].nodeName == `BR`) ||
          (_ = _(_, _, _, _)));
  }
  _ ??= _(_, _, _);
  let _ = _.docView.nearestDesc(_, !0);
  return {
    pos: _,
    inside: _ ? _.posAtStart - _.border : -1,
  };
}
function _(_) {
  return _.top < _.bottom || _.left < _.right;
}
function _(_, _) {
  let _ = _.getClientRects();
  if (_.length) {
    let _ = _[_ < 0 ? 0 : _.length - 1];
    if (_(_)) return _;
  }
  return Array.prototype.find.call(_, _) || _.getBoundingClientRect();
}
var _ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _(_, _, _) {
  let { node: _, offset: _, atom: _ } = _.docView.domFromPos(_, _ < 0 ? -1 : 1),
    _ = _ || _;
  if (_(_)) {
    if (_ && (_.test(_.nodeValue) || (_ < 0 ? !_ : _ == _.nodeValue.length))) {
      let _ = _(_(_, _, _), _);
      if (_ && _ && /\s/.test(_.nodeValue[_ - 1]) && _ < _.nodeValue.length) {
        let _ = _(_(_, _ - 1, _ - 1), -1);
        if (_.top == _.top) {
          let _ = _(_(_, _, _ + 1), -1);
          if (_.top != _.top) return _(_, _.left < _.left);
        }
      }
      return _;
    }
    {
      let _ = _,
        _ = _,
        _ = _ < 0 ? 1 : -1;
      return (
        _ < 0 && !_
          ? (_++, (_ = -1))
          : _ >= 0 && _ == _.nodeValue.length
            ? (_--, (_ = 1))
            : _ < 0
              ? _--
              : _++,
        _(_(_(_, _, _), _), _ < 0)
      );
    }
  }
  if (!_.state.doc.resolve(_ - (_ || 0)).parent.inlineContent) {
    if (_ == null && _ && (_ < 0 || _ == _(_))) {
      let _ = _.childNodes[_ - 1];
      if (_(_)) return _(_.getBoundingClientRect(), !1);
    }
    if (_ == null && _ < _(_)) {
      let _ = _.childNodes[_];
      if (_(_)) return _(_.getBoundingClientRect(), !0);
    }
    return _(_.getBoundingClientRect(), _ >= 0);
  }
  if (_ == null && _ && (_ < 0 || _ == _(_))) {
    let _ = _.childNodes[_ - 1],
      _ = _(_)
        ? _(_, _(_) - +!_)
        : _(_) && (_.nodeName != `BR` || !_.nextSibling)
          ? _
          : null;
    if (_) return _(_(_, 1), !1);
  }
  if (_ == null && _ < _(_)) {
    let _ = _.childNodes[_];
    for (; _.pmViewDesc && _.pmViewDesc.ignoreForCoords;) _ = _.nextSibling;
    let _ = _ ? (_(_) ? _(_, 0, +!_) : _(_) ? _ : null) : null;
    if (_) return _(_(_, -1), !0);
  }
  return _(_(_(_) ? _(_) : _, -_), _ >= 0);
}
function _(_, _) {
  if (_.width == 0) return _;
  let _ = _ ? _.left : _.right;
  return {
    top: _.top,
    bottom: _.bottom,
    left: _,
    right: _,
  };
}
function _(_, _) {
  if (_.height == 0) return _;
  let _ = _ ? _.top : _.bottom;
  return {
    top: _,
    bottom: _,
    left: _.left,
    right: _.right,
  };
}
function _(_, _, _) {
  let _ = _.state,
    _ = _.root.activeElement;
  (_ != _ && _.updateState(_), _ != _.dom && _.focus());
  try {
    return _();
  } finally {
    (_ != _ && _.updateState(_), _ != _.dom && _ && _.focus());
  }
}
function _(_, _, _) {
  let _ = _.selection,
    _ = _ == `up` ? _.$from : _.$to;
  return _(_, _, () => {
    let { node: _ } = _.docView.domFromPos(_.pos, _ == `up` ? -1 : 1);
    for (;;) {
      let _ = _.docView.nearestDesc(_, !0);
      if (!_) break;
      if (_.node.isBlock) {
        _ = _.contentDOM || _.dom;
        break;
      }
      _ = _.dom.parentNode;
    }
    let _ = _(_, _.pos, 1);
    for (let _ = _.firstChild; _; _ = _.nextSibling) {
      let _;
      if (_(_)) _ = _.getClientRects();
      else if (_(_)) _ = _(_, 0, _.nodeValue.length).getClientRects();
      else continue;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (
          _.bottom > _.top + 1 &&
          (_ == `up`
            ? _.top - _.top > (_.bottom - _.top) * 2
            : _.bottom - _.bottom > (_.bottom - _.top) * 2)
        )
          return !1;
      }
    }
    return !0;
  });
}
var _ = /[\u0590-\u08ac]/;
function _(_, _, _) {
  let { $head: _ } = _.selection;
  if (!_.parent.isTextblock) return !1;
  let _ = _.parentOffset,
    _ = !_,
    _ = _ == _.parent.content.size,
    _ = _.domSelection();
  return _
    ? !_.test(_.parent.textContent) || !_.modify
      ? _ == `left` || _ == `backward`
        ? _
        : _
      : _(_, _, () => {
          let {
              focusNode: _,
              focusOffset: _,
              anchorNode: _,
              anchorOffset: _,
            } = _.domSelectionRange(),
            _ = _.caretBidiLevel;
          _.modify(`move`, _, `character`);
          let _ = _.depth ? _.docView.domAfterPos(_.before()) : _.dom,
            { focusNode: _, focusOffset: _ } = _.domSelectionRange(),
            _ = (_ && !_(_, _)) || (_ == _ && _ == _);
          try {
            (_.collapse(_, _),
              _ && (_ != _ || _ != _) && _.extend && _.extend(_, _));
          } catch {}
          return (_ != null && (_.caretBidiLevel = _), _);
        })
    : _.pos == _.start() || _.pos == _.end();
}
var _ = null,
  _ = null,
  _ = !1;
function _(_, _, _) {
  return _ == _ && _ == _
    ? _
    : ((_ = _),
      (_ = _),
      (_ = _ == `up` || _ == `down` ? _(_, _, _) : _(_, _, _)));
}
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = class {
    constructor(_, _, _, _) {
      ((this.parent = _),
        (this.children = _),
        (this.dom = _),
        (this.contentDOM = _),
        (this.dirty = _),
        (_.pmViewDesc = this));
    }
    matchesWidget(_) {
      return !1;
    }
    matchesMark(_) {
      return !1;
    }
    matchesNode(_, _, _) {
      return !1;
    }
    matchesHack(_) {
      return !1;
    }
    parseRule(_) {
      return null;
    }
    stopEvent(_) {
      return !1;
    }
    get size() {
      let _ = 0;
      for (let _ = 0; _ < this.children.length; _++) _ += this.children[_].size;
      return _;
    }
    get border() {
      return 0;
    }
    destroy() {
      ((this.parent = void 0),
        this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0));
      for (let _ = 0; _ < this.children.length; _++) this.children[_].destroy();
    }
    posBeforeChild(_) {
      for (let _ = 0, _ = this.posAtStart; ; _++) {
        let _ = this.children[_];
        if (_ == _) return _;
        _ += _.size;
      }
    }
    get posBefore() {
      return this.parent.posBeforeChild(this);
    }
    get posAtStart() {
      return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
    get posAfter() {
      return this.posBefore + this.size;
    }
    get posAtEnd() {
      return this.posAtStart + this.size - 2 * this.border;
    }
    localPosFromDOM(_, _, _) {
      if (this.contentDOM && _(this.contentDOM, _)) {
        if (_ < 0) {
          let _, _;
          if (_ == this.contentDOM) _ = _.childNodes[_ - 1];
          else {
            for (; _.parentNode != this.contentDOM;) _ = _.parentNode;
            _ = _.previousSibling;
          }
          for (; _ && !((_ = _.pmViewDesc) && _.parent == this);)
            _ = _.previousSibling;
          return _ ? this.posBeforeChild(_) + _.size : this.posAtStart;
        }
        {
          let _, _;
          if (_ == this.contentDOM) _ = _.childNodes[_];
          else {
            for (; _.parentNode != this.contentDOM;) _ = _.parentNode;
            _ = _.nextSibling;
          }
          for (; _ && !((_ = _.pmViewDesc) && _.parent == this);)
            _ = _.nextSibling;
          return _ ? this.posBeforeChild(_) : this.posAtEnd;
        }
      }
      let _;
      if (_ == this.dom && this.contentDOM) _ = _ > _(this.contentDOM);
      else if (
        this.contentDOM &&
        this.contentDOM != this.dom &&
        this.dom.contains(this.contentDOM)
      ) {
        let _ = _.compareDocumentPosition(this.contentDOM);
        _ =
          _ & 16
            ? _ >
              Array.from(_.childNodes).findIndex((_) =>
                _.contains(this.contentDOM),
              )
            : !(_ & 4);
      } else if (this.dom.firstChild) {
        if (_ == 0)
          for (let _ = _; ; _ = _.parentNode) {
            if (_ == this.dom) {
              _ = !1;
              break;
            }
            if (_.previousSibling) break;
          }
        if (_ == null && _ == _.childNodes.length)
          for (let _ = _; ; _ = _.parentNode) {
            if (_ == this.dom) {
              _ = !0;
              break;
            }
            if (_.nextSibling) break;
          }
      }
      return (_ ?? _ > 0) ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(_, _ = !1) {
      for (let _ = !0, _ = _; _; _ = _.parentNode) {
        let _ = this.getDesc(_),
          _;
        if (_ && (!_ || _.node)) {
          if (_ && (_ = _.nodeDOM) && !(_(_) ? _(_, _) : _ == _)) _ = !1;
          else return _;
        }
      }
    }
    getDesc(_) {
      let _ = _.pmViewDesc;
      for (let _ = _; _; _ = _.parent) if (_ == this) return _;
    }
    posFromDOM(_, _, _) {
      for (let _ = _; _; _ = _.parentNode) {
        let _ = this.getDesc(_);
        if (_) return _.localPosFromDOM(_, _, _);
      }
      return -1;
    }
    descAt(_) {
      for (let _ = 0, _ = 0; _ < this.children.length; _++) {
        let _ = this.children[_],
          _ = _ + _.size;
        if (_ == _ && _ != _) {
          for (; !_.border && _.children.length;)
            for (let _ = 0; _ < _.children.length; _++) {
              let _ = _.children[_];
              if (_.size) {
                _ = _;
                break;
              }
            }
          return _;
        }
        if (_ < _) return _.descAt(_ - _ - _.border);
        _ = _;
      }
    }
    domFromPos(_, _) {
      if (!this.contentDOM)
        return {
          node: this.dom,
          offset: 0,
          atom: _ + 1,
        };
      let _ = 0,
        _ = 0;
      for (let _ = 0; _ < this.children.length; _++) {
        let _ = this.children[_],
          _ = _ + _.size;
        if (_ > _) {
          _ = _ - _;
          break;
        }
        _ = _;
      }
      if (_) return this.children[_].domFromPos(_ - this.children[_].border, _);
      for (; _ > 0; _--) {
        let _ = this.children[_ - 1];
        if (_.size || !(_ instanceof _ || (_ instanceof _ && _.side >= 0)))
          break;
      }
      if (_ <= 0) {
        let _,
          _ = !0;
        for (
          ;
          (_ = _ ? this.children[_ - 1] : null),
            _ && _.dom.parentNode != this.contentDOM;
          _--, _ = !1
        );
        return _ && _ && _ && !_.border && !_.domAtom
          ? _.domFromPos(_.size, _)
          : {
              node: this.contentDOM,
              offset: _ ? _(_.dom) + 1 : 0,
            };
      }
      {
        let _,
          _ = !0;
        for (
          ;
          (_ = _ < this.children.length ? this.children[_] : null),
            _ && _.dom.parentNode != this.contentDOM;
          _++, _ = !1
        );
        return _ && _ && !_.border && !_.domAtom
          ? _.domFromPos(0, _)
          : {
              node: this.contentDOM,
              offset: _ ? _(_.dom) : this.contentDOM.childNodes.length,
            };
      }
    }
    parseRange(_, _, _ = 0) {
      if (this.children.length == 0)
        return {
          node: this.contentDOM,
          from: _,
          _: _,
          fromOffset: 0,
          toOffset: this.contentDOM.childNodes.length,
        };
      let _ = -1,
        _ = -1;
      for (let _ = _, _ = 0; ; _++) {
        let _ = this.children[_],
          _ = _ + _.size;
        if (_ == -1 && _ <= _) {
          let _ = _ + _.border;
          if (
            _ >= _ &&
            _ <= _ - _.border &&
            _.node &&
            _.contentDOM &&
            this.contentDOM.contains(_.contentDOM)
          )
            return _.parseRange(_, _, _);
          _ = _;
          for (let _ = _; _ > 0; _--) {
            let _ = this.children[_ - 1];
            if (
              _.size &&
              _.dom.parentNode == this.contentDOM &&
              !_.emptyChildAt(1)
            ) {
              _ = _(_.dom) + 1;
              break;
            }
            _ -= _.size;
          }
          _ == -1 && (_ = 0);
        }
        if (_ > -1 && (_ > _ || _ == this.children.length - 1)) {
          _ = _;
          for (let _ = _ + 1; _ < this.children.length; _++) {
            let _ = this.children[_];
            if (
              _.size &&
              _.dom.parentNode == this.contentDOM &&
              !_.emptyChildAt(-1)
            ) {
              _ = _(_.dom);
              break;
            }
            _ += _.size;
          }
          _ == -1 && (_ = this.contentDOM.childNodes.length);
          break;
        }
        _ = _;
      }
      return {
        node: this.contentDOM,
        from: _,
        _: _,
        fromOffset: _,
        toOffset: _,
      };
    }
    emptyChildAt(_) {
      if (this.border || !this.contentDOM || !this.children.length) return !1;
      let _ = this.children[_ < 0 ? 0 : this.children.length - 1];
      return _.size == 0 || _.emptyChildAt(_);
    }
    domAfterPos(_) {
      let { node: _, offset: _ } = this.domFromPos(_, 0);
      if (!_(_) || _ == _.childNodes.length)
        throw RangeError(`No node after pos ` + _);
      return _.childNodes[_];
    }
    setSelection(_, _, _, _ = !1) {
      let _ = Math.min(_, _),
        _ = Math.max(_, _);
      for (let _ = 0, _ = 0; _ < this.children.length; _++) {
        let _ = this.children[_],
          _ = _ + _.size;
        if (_ > _ && _ < _)
          return _.setSelection(_ - _ - _.border, _ - _ - _.border, _, _);
        _ = _;
      }
      let _ = this.domFromPos(_, _ ? -1 : 1),
        _ = _ == _ ? _ : this.domFromPos(_, _ ? -1 : 1),
        _ = _.root.getSelection(),
        _ = _.domSelectionRange(),
        _ = !1;
      if ((_ || _) && _ == _) {
        let { node: _, offset: _ } = _;
        if (_(_)) {
          if (
            ((_ = !!(
              _ &&
              _.nodeValue[_ - 1] ==
                `
`
            )),
            _ && _ == _.nodeValue.length)
          )
            for (let _ = _, _; _; _ = _.parentNode) {
              if ((_ = _.nextSibling)) {
                _.nodeName == `BR` &&
                  (_ = _ =
                    {
                      node: _.parentNode,
                      offset: _(_) + 1,
                    });
                break;
              }
              let _ = _.pmViewDesc;
              if (_ && _.node && _.node.isBlock) break;
            }
        } else {
          let _ = _.childNodes[_ - 1];
          _ = _ && (_.nodeName == `BR` || _.contentEditable == `false`);
        }
      }
      if (_ && _.focusNode && _.focusNode != _.node && _(_.focusNode)) {
        let _ = _.focusNode.childNodes[_.focusOffset];
        _ && _.contentEditable == `false` && (_ = !0);
      }
      if (
        !(_ || (_ && _)) &&
        _(_.node, _.offset, _.anchorNode, _.anchorOffset) &&
        _(_.node, _.offset, _.focusNode, _.focusOffset)
      )
        return;
      let _ = !1;
      if ((_.extend || _ == _) && !(_ && _)) {
        _.collapse(_.node, _.offset);
        try {
          (_ != _ && _.extend(_.node, _.offset), (_ = !0));
        } catch {}
      }
      if (!_) {
        if (_ > _) {
          let _ = _;
          ((_ = _), (_ = _));
        }
        let _ = document.createRange();
        (_.setEnd(_.node, _.offset),
          _.setStart(_.node, _.offset),
          _.removeAllRanges(),
          _.addRange(_));
      }
    }
    ignoreMutation(_) {
      return !this.contentDOM && _.type != `selection`;
    }
    get contentLost() {
      return (
        this.contentDOM &&
        this.contentDOM != this.dom &&
        !this.dom.contains(this.contentDOM)
      );
    }
    markDirty(_, _) {
      for (let _ = 0, _ = 0; _ < this.children.length; _++) {
        let _ = this.children[_],
          _ = _ + _.size;
        if (_ == _ ? _ <= _ && _ >= _ : _ < _ && _ > _) {
          let _ = _ + _.border,
            _ = _ - _.border;
          if (_ >= _ && _ <= _) {
            ((this.dirty = _ == _ || _ == _ ? _ : _),
              _ == _ &&
              _ == _ &&
              (_.contentLost || _.dom.parentNode != this.contentDOM)
                ? (_.dirty = _)
                : _.markDirty(_ - _, _ - _));
            return;
          }
          _.dirty =
            _.dom == _.contentDOM &&
            _.dom.parentNode == this.contentDOM &&
            !_.children.length
              ? _
              : _;
        }
        _ = _;
      }
      this.dirty = _;
    }
    markParentsDirty() {
      let _ = 1;
      for (let _ = this.parent; _; _ = _.parent, _++) {
        let _ = _ == 1 ? _ : _;
        _.dirty < _ && (_.dirty = _);
      }
    }
    get domAtom() {
      return !1;
    }
    get ignoreForCoords() {
      return !1;
    }
    get ignoreForSelection() {
      return !1;
    }
    isText(_) {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      let _,
        _ = _.type.toDOM;
      if (
        (typeof _ == `function` &&
          (_ = _(_, () => {
            if (!_) return _;
            if (_.parent) return _.parent.posBeforeChild(_);
          })),
        !_.type.spec.raw)
      ) {
        let _ = _(_) ? _ : document.createElement(`span`);
        (_ != _ && (_.appendChild(_), (_ = _)),
          _.hasAttribute(`contenteditable`) || (_.contentEditable = `false`),
          _.classList.add(`ProseMirror-widget`));
      }
      (super(_, [], _, null), (this.widget = _), (this.widget = _), (_ = this));
    }
    matchesWidget(_) {
      return this.dirty == _ && _.type._(this.widget.type);
    }
    parseRule() {
      return {
        ignore: !0,
      };
    }
    stopEvent(_) {
      let _ = this.widget.spec.stopEvent;
      return _ ? _(_) : !1;
    }
    ignoreMutation(_) {
      return _.type != `selection` || this.widget.spec.ignoreSelection;
    }
    destroy() {
      (this.widget.type.destroy(this.dom), super.destroy());
    }
    get domAtom() {
      return !0;
    }
    get ignoreForSelection() {
      return !!this.widget.type.spec.relaxedSide;
    }
    get side() {
      return this.widget.type.side;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      (super(_, [], _, null), (this.textDOM = _), (this.text = _));
    }
    get size() {
      return this.text.length;
    }
    localPosFromDOM(_, _) {
      return _ == this.textDOM
        ? this.posAtStart + _
        : this.posAtStart + (_ ? this.size : 0);
    }
    domFromPos(_) {
      return {
        node: this.textDOM,
        offset: _,
      };
    }
    ignoreMutation(_) {
      return _.type === `characterData` && _.target.nodeValue == _.oldValue;
    }
  },
  _ = class _ extends _ {
    constructor(_, _, _, _, _) {
      (super(_, [], _, _), (this.mark = _), (this.spec = _));
    }
    static create(_, _, _, _) {
      let _ = _.nodeViews[_.type.name],
        _ = _ && _(_, _, _);
      return (
        (_ && _.dom) ||
          (_ = _.renderSpec(document, _.type.spec.toDOM(_, _), null, _.attrs)),
        new _(_, _, _.dom, _.contentDOM || _.dom, _)
      );
    }
    parseRule() {
      return this.dirty & _ || this.mark.type.spec.reparseInView
        ? null
        : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM,
          };
    }
    matchesMark(_) {
      return this.dirty != _ && this.mark._(_);
    }
    markDirty(_, _) {
      if ((super.markDirty(_, _), this.dirty != _)) {
        let _ = this.parent;
        for (; !_.node;) _ = _.parent;
        (_.dirty < this.dirty && (_.dirty = this.dirty), (this.dirty = _));
      }
    }
    slice(_, _, _) {
      let _ = _.create(this.parent, this.mark, !0, _),
        _ = this.children,
        _ = this.size;
      (_ < _ && (_ = _(_, _, _, _)), _ > 0 && (_ = _(_, 0, _, _)));
      for (let _ = 0; _ < _.length; _++) _[_].parent = _;
      return ((_.children = _), _);
    }
    ignoreMutation(_) {
      return this.spec.ignoreMutation
        ? this.spec.ignoreMutation(_)
        : super.ignoreMutation(_);
    }
    destroy() {
      (this.spec.destroy && this.spec.destroy(), super.destroy());
    }
  },
  _ = class _ extends _ {
    constructor(_, _, _, _, _, _, _) {
      (super(_, [], _, _),
        (this.node = _),
        (this.outerDeco = _),
        (this.innerDeco = _),
        (this.nodeDOM = _));
    }
    static create(_, _, _, _, _, _) {
      let _ = _.nodeViews[_.type.name],
        _,
        _ =
          _ &&
          _(
            _,
            _,
            () => {
              if (!_) return _;
              if (_.parent) return _.parent.posBeforeChild(_);
            },
            _,
            _,
          ),
        _ = _ && _.dom,
        _ = _ && _.contentDOM;
      if (_.isText) {
        if (!_) _ = document.createTextNode(_.text);
        else if (!_(_))
          throw RangeError(`Text must be rendered as a DOM text node`);
      } else if (!_) {
        let _ = _.renderSpec(document, _.type.spec.toDOM(_), null, _.attrs);
        ({ dom: _, contentDOM: _ } = _);
      }
      !_ &&
        !_.isText &&
        _.nodeName != `BR` &&
        (_.hasAttribute(`contenteditable`) || (_.contentEditable = `false`),
        _.type.spec.draggable && (_.draggable = !0));
      let _ = _;
      return (
        (_ = _(_, _, _)),
        _
          ? (_ = new _(_, _, _, _, _, _ || null, _, _))
          : _.isText
            ? new _(_, _, _, _, _, _)
            : new _(_, _, _, _, _, _ || null, _)
      );
    }
    parseRule(_) {
      if (this.node.type.spec.reparseInView) return null;
      let _ = {
        node: this.node.type.name,
        attrs: this.node.attrs,
      };
      if (
        (this.node.type.whitespace == `pre` && (_.preserveWhitespace = `full`),
        !this.contentDOM)
      )
        _.getContent = () => this.node.content;
      else if (!this.contentLost) _.contentElement = this.contentDOM;
      else {
        for (let _ = this.children.length - 1; _ >= 0; _--) {
          let _ = this.children[_];
          if (this.dom.contains(_.dom.parentNode)) {
            _.contentElement = _.dom.parentNode;
            break;
          }
        }
        if (!_.contentElement) {
          let _ =
            _ &&
            _.find(
              (_) =>
                _(_) && _.indexOf(_.parentNode) < 0 && this.dom.contains(_),
            );
          _ ? (_.contentElement = _) : (_.getContent = () => _.empty);
        }
      }
      return _;
    }
    matchesNode(_, _, _) {
      return (
        this.dirty == _ &&
        _._(this.node) &&
        _(_, this.outerDeco) &&
        _._(this.innerDeco)
      );
    }
    get size() {
      return this.node.nodeSize;
    }
    get border() {
      return +!this.node.isLeaf;
    }
    updateChildren(_, _) {
      let _ = this.node.inlineContent,
        _ = _,
        _ = _.composing ? this.localCompositionInfo(_, _) : null,
        _ = _ && _.pos > -1 ? _ : null,
        _ = _ && _.pos < 0,
        _ = new _(this, _ && _.node, _),
        _ = this.node.inlineContent,
        _ = _ && this.node.isBlock;
      (_(
        this.node,
        this.innerDeco,
        (_, _, _) => {
          (_.spec.marks
            ? _.syncToMarks(_.spec.marks, _, _, _)
            : _.type.side >= 0 &&
              !_ &&
              _.syncToMarks(
                _ == this.node.childCount ? _.none : this.node.child(_).marks,
                _,
                _,
                _,
              ),
            _.placeWidget(_, _, _));
        },
        (_, _, _, _) => {
          (_.syncToMarks(_.marks, _, _, _),
            _ && _.isAtom && !_.isText && _.addHackNode(`IMG`, _.top));
          let _;
          (_.findNodeMatch(_, _, _, _) ||
            (_ &&
              _.state.selection.from > _ &&
              _.state.selection._ < _ + _.nodeSize &&
              (_ = _.findIndexWithChild(_.node)) > -1 &&
              _.updateNodeAt(_, _, _, _, _)) ||
            _.updateNextNode(_, _, _, _, _, _) ||
            _.addNode(_, _, _, _, _),
            (_ += _.nodeSize),
            _ && (_ = _.isAtom && !_.isText));
        },
      ),
        _.syncToMarks([], _, _, 0),
        this.node.isTextblock && _.addTextblockHacks(),
        _.destroyRest(),
        (_.changed || this.dirty == _) &&
          (_ && this.protectLocalComposition(_, _),
          _(this.contentDOM, this.children, _),
          _ && _(this.dom)));
    }
    localCompositionInfo(_, _) {
      let { from: _, _: _ } = _.state.selection;
      if (
        !(_.state.selection instanceof _) ||
        _ < _ ||
        _ > _ + this.node.content.size
      )
        return null;
      let _ = _.input.compositionNode;
      if (!_ || !this.dom.contains(_.parentNode)) return null;
      if (this.node.inlineContent) {
        let _ = _.nodeValue,
          _ = _(this.node.content, _, _ - _, _ - _);
        return _ < 0
          ? null
          : {
              node: _,
              pos: _,
              text: _,
            };
      }
      return {
        node: _,
        pos: -1,
        text: ``,
      };
    }
    protectLocalComposition(_, { node: _, pos: _, text: _ }) {
      if (this.getDesc(_)) return;
      let _ = _;
      for (; _.parentNode != this.contentDOM; _ = _.parentNode) {
        for (; _.previousSibling;) _.parentNode.removeChild(_.previousSibling);
        for (; _.nextSibling;) _.parentNode.removeChild(_.nextSibling);
        _.pmViewDesc && (_.pmViewDesc = void 0);
      }
      let _ = new _(this, _, _, _);
      (_.input.compositionNodes.push(_),
        (this.children = _(this.children, _, _ + _.length, _, _)));
    }
    update(_, _, _, _) {
      return this.dirty == _ || !_.sameMarkup(this.node)
        ? !1
        : (this.updateInner(_, _, _, _), !0);
    }
    updateInner(_, _, _, _) {
      (this.updateOuterDeco(_),
        (this.node = _),
        (this.innerDeco = _),
        this.contentDOM && this.updateChildren(_, this.posAtStart),
        (this.dirty = _));
    }
    updateOuterDeco(_) {
      if (_(_, this.outerDeco)) return;
      let _ = !_(this.nodeDOM),
        _ = this.dom;
      ((this.dom = _(
        this.dom,
        this.nodeDOM,
        _(this.outerDeco, this.node, _),
        _(_, this.node, _),
      )),
        this.dom != _ &&
          ((_.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
        (this.outerDeco = _));
    }
    selectNode() {
      _(this.nodeDOM) &&
        (this.nodeDOM.classList.add(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) &&
          (this.nodeDOM.draggable = !0));
    }
    deselectNode() {
      _(this.nodeDOM) &&
        (this.nodeDOM.classList.remove(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) &&
          this.nodeDOM.removeAttribute(`draggable`));
    }
    get domAtom() {
      return this.node.isAtom;
    }
  };
function _(_, _, _, _, _) {
  _(_, _, _);
  let _ = new _(void 0, _, _, _, _, _, _);
  return (_.contentDOM && _.updateChildren(_, 0), _);
}
var _ = class _ extends _ {
    constructor(_, _, _, _, _, _) {
      super(_, _, _, _, _, null, _);
    }
    parseRule() {
      let _ = this.nodeDOM.parentNode;
      for (; _ && _ != this.dom && !_.pmIsDeco;) _ = _.parentNode;
      return {
        skip: _ || !0,
      };
    }
    update(_, _, _, _) {
      return this.dirty == _ ||
        (this.dirty != _ && !this.inParent()) ||
        !_.sameMarkup(this.node)
        ? !1
        : (this.updateOuterDeco(_),
          (this.dirty != _ || _.text != this.node.text) &&
            _.text != this.nodeDOM.nodeValue &&
            ((this.nodeDOM.nodeValue = _.text),
            _.trackWrites == this.nodeDOM && (_.trackWrites = null)),
          (this.node = _),
          (this.dirty = _),
          !0);
    }
    inParent() {
      let _ = this.parent.contentDOM;
      for (let _ = this.nodeDOM; _; _ = _.parentNode) if (_ == _) return !0;
      return !1;
    }
    domFromPos(_) {
      return {
        node: this.nodeDOM,
        offset: _,
      };
    }
    localPosFromDOM(_, _, _) {
      return _ == this.nodeDOM
        ? this.posAtStart + Math.min(_, this.node.text.length)
        : super.localPosFromDOM(_, _, _);
    }
    ignoreMutation(_) {
      return _.type != `characterData` && _.type != `selection`;
    }
    slice(_, _, _) {
      let _ = this.node.cut(_, _),
        _ = document.createTextNode(_.text);
      return new _(this.parent, _, this.outerDeco, this.innerDeco, _, _);
    }
    markDirty(_, _) {
      (super.markDirty(_, _),
        this.dom != this.nodeDOM &&
          (_ == 0 || _ == this.nodeDOM.nodeValue.length) &&
          (this.dirty = _));
    }
    get domAtom() {
      return !1;
    }
    isText(_) {
      return this.node.text == _;
    }
  },
  _ = class extends _ {
    parseRule() {
      return {
        ignore: !0,
      };
    }
    matchesHack(_) {
      return this.dirty == _ && this.dom.nodeName == _;
    }
    get domAtom() {
      return !0;
    }
    get ignoreForCoords() {
      return this.dom.nodeName == `IMG`;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _, _, _, _, _) {
      (super(_, _, _, _, _, _, _), (this.spec = _));
    }
    update(_, _, _, _) {
      if (this.dirty == _) return !1;
      if (
        this.spec.update &&
        (this.node.type == _.type || this.spec.multiType)
      ) {
        let _ = this.spec.update(_, _, _);
        return (_ && this.updateInner(_, _, _, _), _);
      }
      return !this.contentDOM && !_.isLeaf ? !1 : super.update(_, _, _, _);
    }
    selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(_, _, _, _) {
      this.spec.setSelection
        ? this.spec.setSelection(_, _, _.root)
        : super.setSelection(_, _, _, _);
    }
    destroy() {
      (this.spec.destroy && this.spec.destroy(), super.destroy());
    }
    stopEvent(_) {
      return this.spec.stopEvent ? this.spec.stopEvent(_) : !1;
    }
    ignoreMutation(_) {
      return this.spec.ignoreMutation
        ? this.spec.ignoreMutation(_)
        : super.ignoreMutation(_);
    }
  };
function _(_, _, _) {
  let _ = _.firstChild,
    _ = !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _.dom;
    if (_.parentNode == _) {
      for (; _ != _;) ((_ = _(_)), (_ = !0));
      _ = _.nextSibling;
    } else ((_ = !0), _.insertBefore(_, _));
    if (_ instanceof _) {
      let _ = _ ? _.previousSibling : _.lastChild;
      (_(_.contentDOM, _.children, _), (_ = _ ? _.nextSibling : _.firstChild));
    }
  }
  for (; _;) ((_ = _(_)), (_ = !0));
  _ && _.trackWrites == _ && (_.trackWrites = null);
}
var _ = function (_) {
  _ && (this.nodeName = _);
};
_.prototype = Object.create(null);
var _ = [new _()];
function _(_, _, _) {
  if (_.length == 0) return _;
  let _ = _ ? _[0] : new _(),
    _ = [_];
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_].type.attrs;
    if (_) {
      _.nodeName && _.push((_ = new _(_.nodeName)));
      for (let _ in _) {
        let _ = _[_];
        _ != null &&
          (_ &&
            _.length == 1 &&
            _.push((_ = new _(_.isInline ? `span` : `div`))),
          _ == `class`
            ? (_.class = (_.class ? _.class + ` ` : ``) + _)
            : _ == `style`
              ? (_.style = (_.style ? _.style + `;` : ``) + _)
              : _ != `nodeName` && (_[_] = _));
      }
    }
  }
  return _;
}
function _(_, _, _, _) {
  if (_ == _ && _ == _) return _;
  let _ = _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _[_];
    if (_) {
      let _;
      ((_ &&
        _.nodeName == _.nodeName &&
        _ != _ &&
        (_ = _.parentNode) &&
        _.nodeName.toLowerCase() == _.nodeName) ||
        ((_ = document.createElement(_.nodeName)),
        (_.pmIsDeco = !0),
        _.appendChild(_),
        (_ = _[0])),
        (_ = _));
    }
    _(_, _ || _[0], _);
  }
  return _;
}
function _(_, _, _) {
  for (let _ in _)
    _ != `class` &&
      _ != `style` &&
      _ != `nodeName` &&
      !(_ in _) &&
      _.removeAttribute(_);
  for (let _ in _)
    _ != `class` &&
      _ != `style` &&
      _ != `nodeName` &&
      _[_] != _[_] &&
      _.setAttribute(_, _[_]);
  if (_.class != _.class) {
    let _ = _.class ? _.class.split(` `).filter(Boolean) : [],
      _ = _.class ? _.class.split(` `).filter(Boolean) : [];
    for (let _ = 0; _ < _.length; _++)
      _.indexOf(_[_]) == -1 && _.classList.remove(_[_]);
    for (let _ = 0; _ < _.length; _++)
      _.indexOf(_[_]) == -1 && _.classList.add(_[_]);
    _.classList.length == 0 && _.removeAttribute(`class`);
  }
  if (_.style != _.style) {
    if (_.style) {
      let _ =
          /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        _;
      for (; (_ = _.exec(_.style));) _.style.removeProperty(_[1]);
    }
    _.style && (_.style.cssText += _.style);
  }
}
function _(_, _, _) {
  return _(_, _, _, _(_, _, !_(_)));
}
function _(_, _) {
  if (_.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (!_[_].type._(_[_].type)) return !1;
  return !0;
}
function _(_) {
  let _ = _.nextSibling;
  return (_.parentNode.removeChild(_), _);
}
var _ = class {
  constructor(_, _, _) {
    ((this.lock = _),
      (this.view = _),
      (this.index = 0),
      (this.stack = []),
      (this.changed = !1),
      (this.top = _),
      (this.preMatch = _(_.node.content, _)));
  }
  destroyBetween(_, _) {
    if (_ != _) {
      for (let _ = _; _ < _; _++) this.top.children[_].destroy();
      (this.top.children.splice(_, _ - _), (this.changed = !0));
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(_, _, _, _) {
    let _ = 0,
      _ = this.stack.length >> 1,
      _ = Math.min(_, _.length);
    for (
      ;
      _ < _ &&
      (_ == _ - 1 ? this.top : this.stack[(_ + 1) << 1]).matchesMark(_[_]) &&
      _[_].type.spec.spanning !== !1;
    )
      _++;
    for (; _ < _;)
      (this.destroyRest(),
        (this.top.dirty = _),
        (this.index = this.stack.pop()),
        (this.top = this.stack.pop()),
        _--);
    for (; _ < _.length;) {
      this.stack.push(this.top, this.index + 1);
      let _ = -1,
        _ = this.top.children.length;
      _ < this.preMatch.index && (_ = Math.min(this.index + 3, _));
      for (let _ = this.index; _ < _; _++) {
        let _ = this.top.children[_];
        if (_.matchesMark(_[_]) && !this.isLocked(_.dom)) {
          _ = _;
          break;
        }
      }
      if (_ < 0 && this.index < this.top.children.length) {
        let _ = this.top.children[this.index];
        _ instanceof _ &&
          _.dirty != _ &&
          _.mark.type == _[_].type &&
          _.spec.update &&
          !this.isLocked(_.dom) &&
          _.spec.update(_[_]) &&
          ((_.mark = _[_]), (_ = this.index), (this.changed = !0));
      }
      if (_ > -1)
        (_ > this.index &&
          ((this.changed = !0), this.destroyBetween(this.index, _)),
          (this.top = this.top.children[this.index]));
      else {
        let _ = _.create(this.top, _[_], _, _);
        (this.top.children.splice(this.index, 0, _),
          (this.top = _),
          (this.changed = !0));
      }
      ((this.index = 0), _++);
    }
  }
  findNodeMatch(_, _, _, _) {
    let _ = -1,
      _;
    if (
      _ >= this.preMatch.index &&
      (_ = this.preMatch.matches[_ - this.preMatch.index]).parent == this.top &&
      _.matchesNode(_, _, _)
    )
      _ = this.top.children.indexOf(_, this.index);
    else
      for (
        let _ = this.index, _ = Math.min(this.top.children.length, _ + 5);
        _ < _;
        _++
      ) {
        let _ = this.top.children[_];
        if (_.matchesNode(_, _, _) && !this.preMatch.matched.has(_)) {
          _ = _;
          break;
        }
      }
    return _ < 0 ? !1 : (this.destroyBetween(this.index, _), this.index++, !0);
  }
  updateNodeAt(_, _, _, _, _) {
    let _ = this.top.children[_];
    return (
      _.dirty == _ && _.dom == _.contentDOM && (_.dirty = _),
      _.update(_, _, _, _)
        ? (this.destroyBetween(this.index, _), this.index++, !0)
        : !1
    );
  }
  findIndexWithChild(_) {
    for (;;) {
      let _ = _.parentNode;
      if (!_) return -1;
      if (_ == this.top.contentDOM) {
        let _ = _.pmViewDesc;
        if (_) {
          for (let _ = this.index; _ < this.top.children.length; _++)
            if (this.top.children[_] == _) return _;
        }
        return -1;
      }
      _ = _;
    }
  }
  updateNextNode(_, _, _, _, _, _) {
    for (let _ = this.index; _ < this.top.children.length; _++) {
      let _ = this.top.children[_];
      if (_ instanceof _) {
        let _ = this.preMatch.matched.get(_);
        if (_ != null && _ != _) return !1;
        let _ = _.dom,
          _,
          _ =
            this.isLocked(_) &&
            !(
              _.isText &&
              _.node &&
              _.node.isText &&
              _.nodeDOM.nodeValue == _.text &&
              _.dirty != _ &&
              _(_, _.outerDeco)
            );
        if (!_ && _.update(_, _, _, _))
          return (
            this.destroyBetween(this.index, _),
            _.dom != _ && (this.changed = !0),
            this.index++,
            !0
          );
        if (!_ && (_ = this.recreateWrapper(_, _, _, _, _, _)))
          return (
            this.destroyBetween(this.index, _),
            (this.top.children[this.index] = _),
            _.contentDOM &&
              ((_.dirty = _), _.updateChildren(_, _ + 1), (_.dirty = _)),
            (this.changed = !0),
            this.index++,
            !0
          );
        break;
      }
    }
    return !1;
  }
  recreateWrapper(_, _, _, _, _, _) {
    if (
      _.dirty ||
      _.isAtom ||
      !_.children.length ||
      !_.node.content._(_.content) ||
      !_(_, _.outerDeco) ||
      !_._(_.innerDeco)
    )
      return null;
    let _ = _.create(this.top, _, _, _, _, _);
    if (_.contentDOM) {
      ((_.children = _.children), (_.children = []));
      for (let _ of _.children) _.parent = _;
    }
    return (_.destroy(), _);
  }
  addNode(_, _, _, _, _) {
    let _ = _.create(this.top, _, _, _, _, _);
    (_.contentDOM && _.updateChildren(_, _ + 1),
      this.top.children.splice(this.index++, 0, _),
      (this.changed = !0));
  }
  placeWidget(_, _, _) {
    let _ =
      this.index < this.top.children.length
        ? this.top.children[this.index]
        : null;
    if (
      _ &&
      _.matchesWidget(_) &&
      (_ == _.widget || !_.widget.type.toDOM.parentNode)
    )
      this.index++;
    else {
      let _ = new _(this.top, _, _, _);
      (this.top.children.splice(this.index++, 0, _), (this.changed = !0));
    }
  }
  addTextblockHacks() {
    let _ = this.top.children[this.index - 1],
      _ = this.top;
    for (; _ instanceof _;) ((_ = _), (_ = _.children[_.children.length - 1]));
    (!_ ||
      !(_ instanceof _) ||
      /\n$/.test(_.node.text) ||
      (this.view.requiresGeckoHackNode && /\s$/.test(_.node.text))) &&
      ((_ || _) &&
        _ &&
        _.dom.contentEditable == `false` &&
        this.addHackNode(`IMG`, _),
      this.addHackNode(`BR`, this.top));
  }
  addHackNode(_, _) {
    if (
      _ == this.top &&
      this.index < _.children.length &&
      _.children[this.index].matchesHack(_)
    )
      this.index++;
    else {
      let _ = document.createElement(_);
      (_ == `IMG` && ((_.className = `ProseMirror-separator`), (_.alt = ``)),
        _ == `BR` && (_.className = `ProseMirror-trailingBreak`));
      let _ = new _(this.top, [], _, null);
      (_ == this.top
        ? _.children.splice(this.index++, 0, _)
        : _.children.push(_),
        (this.changed = !0));
    }
  }
  isLocked(_) {
    return (
      this.lock &&
      (_ == this.lock || (_(_) && _.contains(this.lock.parentNode)))
    );
  }
};
function _(_, _) {
  let _ = _,
    _ = _.children.length,
    _ = _.childCount,
    _ = new Map(),
    _ = [];
  outer: for (; _ > 0;) {
    let _;
    for (;;)
      if (_) {
        let _ = _.children[_ - 1];
        if (_ instanceof _) ((_ = _), (_ = _.children.length));
        else {
          ((_ = _), _--);
          break;
        }
      } else if (_ == _) break outer;
      else ((_ = _.parent.children.indexOf(_)), (_ = _.parent));
    let _ = _.node;
    if (_) {
      if (_ != _.child(_ - 1)) break;
      (--_, _.set(_, _), _.push(_));
    }
  }
  return {
    index: _,
    matched: _,
    matches: _.reverse(),
  };
}
function _(_, _) {
  return _.type.side - _.type.side;
}
function _(_, _, _, _) {
  let _ = _.locals(_),
    _ = 0;
  if (_.length == 0) {
    for (let _ = 0; _ < _.childCount; _++) {
      let _ = _.child(_);
      (_(_, _, _.forChild(_, _), _), (_ += _.nodeSize));
    }
    return;
  }
  let _ = 0,
    _ = [],
    _ = null;
  for (let _ = 0; ;) {
    let _, _;
    for (; _ < _.length && _[_]._ == _;) {
      let _ = _[_++];
      _.widget && (_ ? (_ ||= [_]).push(_) : (_ = _));
    }
    if (_) {
      if (_) {
        _.sort(_);
        for (let _ = 0; _ < _.length; _++) _(_[_], _, !!_);
      } else _(_, _, !!_);
    }
    let _, _;
    if (_) ((_ = -1), (_ = _), (_ = null));
    else if (_ < _.childCount) ((_ = _), (_ = _.child(_++)));
    else break;
    for (let _ = 0; _ < _.length; _++) _[_]._ <= _ && _.splice(_--, 1);
    for (; _ < _.length && _[_].from <= _ && _[_]._ > _;) _.push(_[_++]);
    let _ = _ + _.nodeSize;
    if (_.isText) {
      let _ = _;
      _ < _.length && _[_].from < _ && (_ = _[_].from);
      for (let _ = 0; _ < _.length; _++) _[_]._ < _ && (_ = _[_]._);
      _ < _ && ((_ = _.cut(_ - _)), (_ = _.cut(0, _ - _)), (_ = _), (_ = -1));
    } else for (; _ < _.length && _[_]._ < _;) _++;
    let _ = _.isInline && !_.isLeaf ? _.filter((_) => !_.inline) : _.slice();
    (_(_, _, _.forChild(_, _), _), (_ = _));
  }
}
function _(_) {
  if (_.nodeName == `UL` || _.nodeName == `OL`) {
    let _ = _.style.cssText;
    ((_.style.cssText = _ + `; list-style: square !important`),
      window.getComputedStyle(_).listStyle,
      (_.style.cssText = _));
  }
}
function _(_, _, _, _) {
  for (let _ = 0, _ = 0; _ < _.childCount && _ <= _;) {
    let _ = _.child(_++),
      _ = _;
    if (((_ += _.nodeSize), !_.isText)) continue;
    let _ = _.text;
    for (; _ < _.childCount;) {
      let _ = _.child(_++);
      if (((_ += _.nodeSize), !_.isText)) break;
      _ += _.text;
    }
    if (_ >= _) {
      if (_ >= _ && _.slice(_ - _.length - _, _ - _) == _) return _ - _.length;
      let _ = _ < _ ? _.lastIndexOf(_, _ - _ - 1) : -1;
      if (_ >= 0 && _ + _.length + _ >= _) return _ + _;
      if (
        _ == _ &&
        _.length >= _ + _.length - _ &&
        _.slice(_ - _, _ - _ + _.length) == _
      )
        return _;
    }
  }
  return -1;
}
function _(_, _, _, _, _) {
  let _ = [];
  for (let _ = 0, _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _,
      _ = (_ += _.size);
    _ >= _ || _ <= _
      ? _.push(_)
      : (_ < _ && _.push(_.slice(0, _ - _, _)),
        (_ &&= (_.push(_), void 0)),
        _ > _ && _.push(_.slice(_ - _, _.size, _)));
  }
  return _;
}
function _(_, _ = null) {
  let _ = _.domSelectionRange(),
    _ = _.state.doc;
  if (!_.focusNode) return null;
  let _ = _.docView.nearestDesc(_.focusNode),
    _ = _ && _.size == 0,
    _ = _.docView.posFromDOM(_.focusNode, _.focusOffset, 1);
  if (_ < 0) return null;
  let _ = _.resolve(_),
    _,
    _;
  if (_(_)) {
    for (_ = _; _ && !_.node;) _ = _.parent;
    if (
      _ &&
      _.node.isAtom &&
      _.isSelectable(_.node) &&
      _.parent &&
      !(_.node.isInline && _(_.focusNode, _.focusOffset, _.dom))
    ) {
      let _ = _.posBefore;
      _ = new _(_ == _ ? _ : _.resolve(_));
    } else if (
      _ &&
      _ == `key` &&
      _ > _.state.selection._ &&
      _(_.focusNode) &&
      _.focusOffset == _.focusNode.childNodes.length &&
      _ &&
      _.posAtStart > _.state.selection._
    )
      for (let _ = _.focusNode; ; _ = _.parentNode) {
        if (getComputedStyle(_).overflow != `visible`) {
          _ = _.findFrom(_.resolve(_.posAtStart), 1);
          break;
        }
        if (_ == _.dom || _.nextSibling || !_.parentNode || !_(_.parentNode))
          break;
      }
  } else {
    if (
      _ instanceof _.dom.ownerDocument.defaultView.Selection &&
      _.rangeCount > 1
    ) {
      let _ = _,
        _ = _;
      for (let _ = 0; _ < _.rangeCount; _++) {
        let _ = _.getRangeAt(_);
        ((_ = Math.min(
          _,
          _.docView.posFromDOM(_.startContainer, _.startOffset, 1),
        )),
          (_ = Math.max(
            _,
            _.docView.posFromDOM(_.endContainer, _.endOffset, -1),
          )));
      }
      if (_ < 0) return null;
      (([_, _] = _ == _.state.selection.anchor ? [_, _] : [_, _]),
        (_ = _.resolve(_)));
    } else _ = _.docView.posFromDOM(_.anchorNode, _.anchorOffset, 1);
    if (_ < 0) return null;
  }
  let _ = _.resolve(_);
  if (!_) {
    let _ = _ == `pointer` || (_.state.selection.head < _.pos && !_) ? 1 : -1;
    _ = _(_, _, _, _);
  }
  return _;
}
function _(_) {
  return _.editable
    ? _.hasFocus()
    : _(_) && document.activeElement && document.activeElement.contains(_.dom);
}
function _(_, _ = !1) {
  let _ = _.state.selection;
  if ((_(_, _), !_(_))) return;
  let _ = _.input.mouseDown;
  if (!_ && _ && _) {
    let _ = _.domSelectionRange(),
      _ = _.domObserver.currentSelection;
    if (
      _.anchorNode &&
      _.anchorNode &&
      _(_.anchorNode, _.anchorOffset, _.anchorNode, _.anchorOffset) &&
      _.delaySelUpdate()
    ) {
      _.domObserver.setCurSelection();
      return;
    }
  }
  if ((_.domObserver.disconnectSelection(), _.cursorWrapper)) _(_);
  else {
    let { anchor: _, head: _ } = _,
      _,
      _;
    (_ &&
      !(_ instanceof _) &&
      (_.$from.parent.inlineContent || (_ = _(_, _.from)),
      !_.empty && !_.$from.parent.inlineContent && (_ = _(_, _._))),
      _.docView.setSelection(_, _, _, _),
      _ && (_ && _(_), _ && _(_)),
      _.visible
        ? _.dom.classList.remove(`ProseMirror-hideselection`)
        : (_.dom.classList.add(`ProseMirror-hideselection`),
          `onselectionchange` in document && _(_)));
  }
  (_.domObserver.setCurSelection(), _.domObserver.connectSelection());
}
var _ = _ || (_ && _ < 63);
function _(_, _) {
  let { node: _, offset: _ } = _.docView.domFromPos(_, 0),
    _ = _ < _.childNodes.length ? _.childNodes[_] : null,
    _ = _ ? _.childNodes[_ - 1] : null;
  if (_ && _ && _.contentEditable == `false`) return _(_);
  if (
    (!_ || _.contentEditable == `false`) &&
    (!_ || _.contentEditable == `false`)
  ) {
    if (_) return _(_);
    if (_) return _(_);
  }
}
function _(_) {
  return (
    (_.contentEditable = `true`),
    _ && _.draggable && ((_.draggable = !1), (_.wasDraggable = !0)),
    _
  );
}
function _(_) {
  ((_.contentEditable = `false`),
    (_.wasDraggable &&= ((_.draggable = !0), null)));
}
function _(_) {
  let _ = _.dom.ownerDocument;
  _.removeEventListener(`selectionchange`, _.input.hideSelectionGuard);
  let _ = _.domSelectionRange(),
    _ = _.anchorNode,
    _ = _.anchorOffset;
  _.addEventListener(
    `selectionchange`,
    (_.input.hideSelectionGuard = () => {
      (_.anchorNode != _ || _.anchorOffset != _) &&
        (_.removeEventListener(`selectionchange`, _.input.hideSelectionGuard),
        setTimeout(() => {
          (!_(_) || _.state.selection.visible) &&
            _.dom.classList.remove(`ProseMirror-hideselection`);
        }, 20));
    }),
  );
}
function _(_) {
  let _ = _.domSelection();
  if (!_) return;
  let _ = _.cursorWrapper.dom,
    _ = _.nodeName == `IMG`;
  (_ ? _.collapse(_.parentNode, _(_) + 1) : _.collapse(_, 0),
    !_ &&
      !_.state.selection.visible &&
      _ &&
      _ <= 11 &&
      ((_.disabled = !0), (_.disabled = !1)));
}
function _(_, _) {
  if (_ instanceof _) {
    let _ = _.docView.descAt(_.from);
    _ != _.lastSelectedViewDesc &&
      (_(_), _ && _.selectNode(), (_.lastSelectedViewDesc = _));
  } else _(_);
}
function _(_) {
  _.lastSelectedViewDesc &&=
    (_.lastSelectedViewDesc.parent && _.lastSelectedViewDesc.deselectNode(),
    void 0);
}
function _(_, _, _, _) {
  return (
    _.someProp(`createSelectionBetween`, (_) => _(_, _, _)) ||
    _.between(_, _, _)
  );
}
function _(_) {
  return _.editable && !_.hasFocus() ? !1 : _(_);
}
function _(_) {
  let _ = _.domSelectionRange();
  if (!_.anchorNode) return !1;
  try {
    return _(_.dom, _.anchorNode) && (_.editable || _(_.dom, _.focusNode));
  } catch {
    return !1;
  }
}
function _(_) {
  let _ = _.docView.domFromPos(_.state.selection.anchor, 0),
    _ = _.domSelectionRange();
  return _(_.node, _.offset, _.anchorNode, _.anchorOffset);
}
function _(_, _) {
  let { $anchor: _, $head: _ } = _.selection,
    _ = _ > 0 ? _.max(_) : _.min(_),
    _ = _.parent.inlineContent
      ? _.depth
        ? _.doc.resolve(_ > 0 ? _.after() : _.before())
        : null
      : _;
  return _ && _.findFrom(_, _);
}
function _(_, _) {
  return (_.dispatch(_.state._.setSelection(_).scrollIntoView()), !0);
}
function _(_, _, _) {
  let _ = _.state.selection;
  if (_ instanceof _) {
    if (_.indexOf(`s`) > -1) {
      let { $head: _ } = _,
        _ = _.textOffset ? null : _ < 0 ? _.nodeBefore : _.nodeAfter;
      if (!_ || _.isText || !_.isLeaf) return !1;
      let _ = _.state.doc.resolve(_.pos + _.nodeSize * (_ < 0 ? -1 : 1));
      return _(_, new _(_.$anchor, _));
    }
    if (!_.empty) return !1;
    if (_.endOfTextblock(_ > 0 ? `forward` : `backward`)) {
      let _ = _(_.state, _);
      return _ && _ instanceof _ ? _(_, _) : !1;
    }
    if (!_ || _.indexOf(`m`) < 0) {
      let _ = _.$head,
        _ = _.textOffset ? null : _ < 0 ? _.nodeBefore : _.nodeAfter,
        _;
      if (!_ || _.isText) return !1;
      let _ = _ < 0 ? _.pos - _.nodeSize : _.pos;
      return _.isAtom || ((_ = _.docView.descAt(_)) && !_.contentDOM)
        ? _.isSelectable(_)
          ? _(_, new _(_ < 0 ? _.state.doc.resolve(_.pos - _.nodeSize) : _))
          : _(_, new _(_.state.doc.resolve(_ < 0 ? _ : _ + _.nodeSize)))
        : !1;
    }
  } else if (_ instanceof _ && _.node.isInline)
    return _(_, new _(_ > 0 ? _.$to : _.$from));
  else {
    let _ = _(_.state, _);
    return _ ? _(_, _) : !1;
  }
}
function _(_, _) {
  let _ = _.pmViewDesc;
  return _
    ? _.size == 0 && (_ < 0 || _.nextSibling || _.nodeName != `BR`)
    : _(_) && _.contentEditable == `false`;
}
function _(_, _) {
  return _ < 0 ? _(_) : _(_);
}
function _(_) {
  let _ = _.domSelectionRange(),
    _ = _.focusNode,
    _ = _.focusOffset;
  if (!_) return;
  let _,
    _,
    _ = !1;
  for (_ && _(_) && _ < _(_) && _(_.childNodes[_], -1) && (_ = !0); ;)
    if (_ > 0) {
      if (!_(_)) break;
      let _ = _.childNodes[_ - 1];
      if (_(_, -1)) ((_ = _), (_ = --_));
      else if (_(_)) ((_ = _), (_ = _.nodeValue.length));
      else break;
    } else if (_(_)) break;
    else {
      let _ = _.previousSibling;
      for (; _ && _(_, -1);)
        ((_ = _.parentNode), (_ = _(_)), (_ = _.previousSibling));
      if (_) ((_ = _), (_ = _(_)));
      else {
        if (((_ = _.parentNode), _ == _.dom)) break;
        _ = 0;
      }
    }
  _ ? _(_, _, _) : _ && _(_, _, _);
}
function _(_) {
  let _ = _.domSelectionRange(),
    _ = _.focusNode,
    _ = _.focusOffset;
  if (!_) return;
  let _ = _(_),
    _,
    _;
  for (;;)
    if (_ < _) {
      if (!_(_)) break;
      let _ = _.childNodes[_];
      if (_(_, 1)) ((_ = _), (_ = ++_));
      else break;
    } else if (_(_)) break;
    else {
      let _ = _.nextSibling;
      for (; _ && _(_, 1);)
        ((_ = _.parentNode), (_ = _(_) + 1), (_ = _.nextSibling));
      if (_) ((_ = _), (_ = 0), (_ = _(_)));
      else {
        if (((_ = _.parentNode), _ == _.dom)) break;
        _ = _ = 0;
      }
    }
  _ && _(_, _, _);
}
function _(_) {
  let _ = _.pmViewDesc;
  return _ && _.node && _.node.isBlock;
}
function _(_, _) {
  for (; _ && _ == _.childNodes.length && !_(_);)
    ((_ = _(_) + 1), (_ = _.parentNode));
  for (; _ && _ < _.childNodes.length;) {
    let _ = _.childNodes[_];
    if (_(_)) return _;
    if (_(_) && _.contentEditable == `false`) break;
    ((_ = _), (_ = 0));
  }
}
function _(_, _) {
  for (; _ && !_ && !_(_);) ((_ = _(_)), (_ = _.parentNode));
  for (; _ && _;) {
    let _ = _.childNodes[_ - 1];
    if (_(_)) return _;
    if (_(_) && _.contentEditable == `false`) break;
    ((_ = _), (_ = _.childNodes.length));
  }
}
function _(_, _, _) {
  if (!_(_)) {
    let _, _;
    (_ = _(_, _))
      ? ((_ = _), (_ = 0))
      : (_ = _(_, _)) && ((_ = _), (_ = _.nodeValue.length));
  }
  let _ = _.domSelection(),
    _ = _.domSelectionRange();
  if (!_) return;
  (_(_)
    ? _.collapse(_, _)
    : _.extend && (_.collapse(_.anchorNode, _.anchorOffset), _.extend(_, _)),
    _.domObserver.setCurSelection());
  let { state: _ } = _;
  setTimeout(() => {
    _.state == _ && _(_);
  }, 50);
}
function _(_, _) {
  let _ = _.state.doc.resolve(_);
  if (!(_ || _) && _.parent.inlineContent) {
    let _ = _.coordsAtPos(_);
    if (_ > _.start()) {
      let _ = _.coordsAtPos(_ - 1),
        _ = (_.top + _.bottom) / 2;
      if (_ > _.top && _ < _.bottom && Math.abs(_.left - _.left) > 1)
        return _.left < _.left ? `ltr` : `rtl`;
    }
    if (_ < _.end()) {
      let _ = _.coordsAtPos(_ + 1),
        _ = (_.top + _.bottom) / 2;
      if (_ > _.top && _ < _.bottom && Math.abs(_.left - _.left) > 1)
        return _.left > _.left ? `ltr` : `rtl`;
    }
  }
  let _ = _.dom;
  for (let _ = _.depth; _ > 0; _--)
    if (_.node(_).isBlock) {
      _ = _.nodeDOM(_.before(_)) || _;
      break;
    }
  return getComputedStyle(_).direction == `rtl` ? `rtl` : `ltr`;
}
function _(_, _, _) {
  let _ = _.state.selection;
  if (
    (_ instanceof _ && !_.empty) ||
    _.indexOf(`s`) > -1 ||
    (_ && _.indexOf(`m`) > -1)
  )
    return !1;
  let { $from: _, $to: _ } = _;
  if (!_.parent.inlineContent || _.endOfTextblock(_ < 0 ? `up` : `down`)) {
    let _ = _(_.state, _);
    if (_ && _ instanceof _) return _(_, _);
  }
  if (!_.parent.inlineContent) {
    let _ = _ < 0 ? _ : _,
      _ = _ instanceof _ ? _.near(_, _) : _.findFrom(_, _);
    return _ ? _(_, _) : !1;
  }
  return !1;
}
function _(_, _) {
  if (!(_.state.selection instanceof _)) return !0;
  let { $head: _, $anchor: _, empty: _ } = _.state.selection;
  if (!_.sameParent(_)) return !0;
  if (!_) return !1;
  if (_.endOfTextblock(_ > 0 ? `forward` : `backward`)) return !0;
  let _ = !_.textOffset && (_ < 0 ? _.nodeBefore : _.nodeAfter);
  if (_ && !_.isText) {
    let _ = _.state._;
    return (
      _ < 0
        ? _.delete(_.pos - _.nodeSize, _.pos)
        : _.delete(_.pos, _.pos + _.nodeSize),
      _.dispatch(_),
      !0
    );
  }
  return !1;
}
function _(_, _, _) {
  (_.domObserver.stop(), (_.contentEditable = _), _.domObserver.start());
}
function _(_) {
  if (!_ || _.state.selection.$head.parentOffset > 0) return !1;
  let { focusNode: _, focusOffset: _ } = _.domSelectionRange();
  if (
    _ &&
    _(_) &&
    _ == 0 &&
    _.firstChild &&
    _(_.firstChild) &&
    _.firstChild.contentEditable == `false`
  ) {
    let _ = _.firstChild;
    (_(_, _, `true`), setTimeout(() => _(_, _, `false`), 20));
  }
  return !1;
}
function _(_) {
  let _ = ``;
  return (
    _.ctrlKey && (_ += `c`),
    _.metaKey && (_ += `m`),
    _.altKey && (_ += `a`),
    _.shiftKey && (_ += `s`),
    _
  );
}
function _(_, _) {
  let _ = _.keyCode,
    _ = _(_);
  if (_ == 8 || (_ && _ == 72 && _ == `c`)) return _(_, -1) || _(_, -1);
  if ((_ == 46 && !_.shiftKey) || (_ && _ == 68 && _ == `c`))
    return _(_, 1) || _(_, 1);
  if (_ == 13 || _ == 27) return !0;
  if (_ == 37 || (_ && _ == 66 && _ == `c`)) {
    let _ = _ == 37 ? (_(_, _.state.selection.from) == `ltr` ? -1 : 1) : -1;
    return _(_, _, _) || _(_, _);
  }
  if (_ == 39 || (_ && _ == 70 && _ == `c`)) {
    let _ = _ == 39 ? (_(_, _.state.selection.from) == `ltr` ? 1 : -1) : 1;
    return _(_, _, _) || _(_, _);
  }
  return _ == 38 || (_ && _ == 80 && _ == `c`)
    ? _(_, -1, _) || _(_, -1)
    : _ == 40 || (_ && _ == 78 && _ == `c`)
      ? _(_) || _(_, 1, _) || _(_, 1)
      : !(_ != (_ ? `m` : `c`) || (_ != 66 && _ != 73 && _ != 89 && _ != 90));
}
function _(_, _) {
  _.someProp(`transformCopied`, (_) => {
    _ = _(_, _);
  });
  let _ = [],
    { content: _, openStart: _, openEnd: _ } = _;
  for (; _ > 1 && _ > 1 && _.childCount == 1 && _.firstChild.childCount == 1;) {
    (_--, _--);
    let _ = _.firstChild;
    (_.push(_.type.name, _.attrs == _.type.defaultAttrs ? null : _.attrs),
      (_ = _.content));
  }
  let _ = _.someProp(`clipboardSerializer`) || _.fromSchema(_.state.schema),
    _ = _(),
    _ = _.createElement(`div`);
  _.appendChild(
    _.serializeFragment(_, {
      document: _,
    }),
  );
  let _ = _.firstChild,
    _,
    _ = 0;
  for (; _ && _(_) && (_ = _[_.nodeName.toLowerCase()]);) {
    for (let _ = _.length - 1; _ >= 0; _--) {
      let _ = _.createElement(_[_]);
      for (; _.firstChild;) _.appendChild(_.firstChild);
      (_.appendChild(_), _++);
    }
    _ = _.firstChild;
  }
  return (
    _ &&
      _(_) &&
      _.setAttribute(
        `data-pm-slice`,
        `${_} ${_}${_ ? ` -${_}` : ``} ${JSON.stringify(_)}`,
      ),
    {
      dom: _,
      text:
        _.someProp(`clipboardTextSerializer`, (_) => _(_, _)) ||
        _.content.textBetween(
          0,
          _.content.size,
          `

`,
        ),
      slice: _,
    }
  );
}
function _(_, _, _, _, _) {
  let _ = _.parent.type.spec.code,
    _,
    _;
  if (!_ && !_) return null;
  let _ = !!_ && (_ || _ || !_);
  if (_) {
    if (
      (_.someProp(`transformPastedText`, (_) => {
        _ = _(_, _ || _, _);
      }),
      _)
    )
      return (
        (_ = new _(
          _.from(
            _.state.schema.text(
              _.replace(
                /\r\n?/g,
                `
`,
              ),
            ),
          ),
          0,
          0,
        )),
        _.someProp(`transformPasted`, (_) => {
          _ = _(_, _, !0);
        }),
        _
      );
    let _ = _.someProp(`clipboardTextParser`, (_) => _(_, _, _, _));
    if (_) _ = _;
    else {
      let _ = _.marks(),
        { schema: _ } = _.state,
        _ = _.fromSchema(_);
      ((_ = document.createElement(`div`)),
        _.split(/(?:\r\n?|\n)+/).forEach((_) => {
          let _ = _.appendChild(document.createElement(`p`));
          _ && _.appendChild(_.serializeNode(_.text(_, _)));
        }));
    }
  } else
    (_.someProp(`transformPastedHTML`, (_) => {
      _ = _(_, _);
    }),
      (_ = _(_)),
      _ && _(_));
  let _ = _ && _.querySelector(`[data-pm-slice]`),
    _ =
      _ &&
      /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
        _.getAttribute(`data-pm-slice`) || ``,
      );
  if (_ && _[3])
    for (let _ = +_[3]; _ > 0; _--) {
      let _ = _.firstChild;
      for (; _ && !_(_);) _ = _.nextSibling;
      if (!_) break;
      _ = _;
    }
  if (
    ((_ ||= (
      _.someProp(`clipboardParser`) ||
      _.someProp(`domParser`) ||
      _.fromSchema(_.state.schema)
    ).parseSlice(_, {
      preserveWhitespace: !!(_ || _),
      context: _,
      ruleFromNode(_) {
        return _.nodeName == `BR` &&
          !_.nextSibling &&
          _.parentNode &&
          !_.test(_.parentNode.nodeName)
          ? {
              ignore: !0,
            }
          : null;
      },
    })),
    _)
  )
    _ = _(_(_, +_[1], +_[2]), _[4]);
  else if (((_ = _.maxOpen(_(_.content, _), !0)), _.openStart || _.openEnd)) {
    let _ = 0,
      _ = 0;
    for (
      let _ = _.content.firstChild;
      _ < _.openStart && !_.type.spec.isolating;
      _++, _ = _.firstChild
    );
    for (
      let _ = _.content.lastChild;
      _ < _.openEnd && !_.type.spec.isolating;
      _++, _ = _.lastChild
    );
    _ = _(_, _, _);
  }
  return (
    _.someProp(`transformPasted`, (_) => {
      _ = _(_, _, _);
    }),
    _
  );
}
var _ =
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function _(_, _) {
  if (_.childCount < 2) return _;
  for (let _ = _.depth; _ >= 0; _--) {
    let _ = _.node(_).contentMatchAt(_.index(_)),
      _,
      _ = [];
    if (
      (_.forEach((_) => {
        if (!_) return;
        let _ = _.findWrapping(_.type),
          _;
        if (!_) return (_ = null);
        if ((_ = _.length && _.length && _(_, _, _, _[_.length - 1], 0)))
          _[_.length - 1] = _;
        else {
          _.length && (_[_.length - 1] = _(_[_.length - 1], _.length));
          let _ = _(_, _);
          (_.push(_), (_ = _.matchType(_.type)), (_ = _));
        }
      }),
      _)
    )
      return _.from(_);
  }
  return _;
}
function _(_, _, _ = 0) {
  for (let _ = _.length - 1; _ >= _; _--) _ = _[_].create(null, _.from(_));
  return _;
}
function _(_, _, _, _, _) {
  if (_ < _.length && _ < _.length && _[_] == _[_]) {
    let _ = _(_, _, _, _.lastChild, _ + 1);
    if (_) return _.copy(_.content.replaceChild(_.childCount - 1, _));
    if (
      _.contentMatchAt(_.childCount).matchType(
        _ == _.length - 1 ? _.type : _[_ + 1],
      )
    )
      return _.copy(_.content.append(_.from(_(_, _, _ + 1))));
  }
}
function _(_, _) {
  if (_ == 0) return _;
  let _ = _.content.replaceChild(_.childCount - 1, _(_.lastChild, _ - 1)),
    _ = _.contentMatchAt(_.childCount).fillBefore(_.empty, !0);
  return _.copy(_.append(_));
}
function _(_, _, _, _, _, _) {
  let _ = _ < 0 ? _.firstChild : _.lastChild,
    _ = _.content;
  return (
    _.childCount > 1 && (_ = 0),
    _ < _ - 1 && (_ = _(_, _, _, _, _ + 1, _)),
    _ >= _ &&
      (_ =
        _ < 0
          ? _.contentMatchAt(0)
              .fillBefore(_, _ <= _)
              .append(_)
          : _.append(_.contentMatchAt(_.childCount).fillBefore(_.empty, !0))),
    _.replaceChild(_ < 0 ? 0 : _.childCount - 1, _.copy(_))
  );
}
function _(_, _, _) {
  return (
    _ < _.openStart &&
      (_ = new _(_(_.content, -1, _, _.openStart, 0, _.openEnd), _, _.openEnd)),
    _ < _.openEnd &&
      (_ = new _(_(_.content, 1, _, _.openEnd, 0, 0), _.openStart, _)),
    _
  );
}
var _ = {
  thead: [`table`],
  tbody: [`table`],
  tfoot: [`table`],
  caption: [`table`],
  colgroup: [`table`],
  col: [`table`, `colgroup`],
  _: [`table`, `tbody`],
  _: [`table`, `tbody`, `tr`],
  _: [`table`, `tbody`, `tr`],
};
function _() {
  return document.implementation.createHTMLDocument(`title`);
}
var _ = null;
function _(_) {
  let _ = window.trustedTypes;
  if (!_) return _;
  if (!_) {
    if ((_ = _.defaultPolicy))
      try {
        return _.createHTML(_);
      } catch {}
    _ = _.createPolicy(`ProseMirrorClipboard`, {
      createHTML: (_) => _,
    });
  }
  return _.createHTML(_);
}
function _(_) {
  let _ = /^(\s*<meta [^>]*>)*/.exec(_);
  _ && (_ = _.slice(_[0].length));
  let _ = _(),
    _ = _.body,
    _ = /<([a-z][^>\s]+)/i.exec(_),
    _;
  if (
    ((_ = _ && _[_[1].toLowerCase()]) &&
      (_ =
        _.map((_) => `<` + _ + `>`).join(``) +
        _ +
        _.map((_) => `</` + _ + `>`)
          .reverse()
          .join(``)),
    (_.innerHTML = _(_)),
    _)
  )
    for (let _ = 0; _ < _.length; _++) _ = _.querySelector(_[_]) || _;
  for (let _ = 0; _ < _.styleSheets.length; _++) {
    let _ = _.styleSheets[_];
    for (let _ = 0; _ < _.rules.length; _++) {
      let _ = _.rules[_];
      if (_ instanceof CSSStyleRule) {
        let _ = _.querySelectorAll(_.selectorText);
        for (let _ = 0; _ < _.length; _++)
          _[_].style.cssText += _.style.cssText;
      }
    }
  }
  return _;
}
function _(_) {
  let _ = _.querySelectorAll(
    _ ? `span:not([class]):not([style])` : `span.Apple-converted-space`,
  );
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _.childNodes.length == 1 &&
      _.textContent == `\xA0` &&
      _.parentNode &&
      _.parentNode.replaceChild(_.ownerDocument.createTextNode(` `), _);
  }
}
function _(_, _) {
  if (!_.size) return _;
  let _ = _.content.firstChild.type.schema,
    _;
  try {
    _ = JSON.parse(_);
  } catch {
    return _;
  }
  let { content: _, openStart: _, openEnd: _ } = _;
  for (let _ = _.length - 2; _ >= 0; _ -= 2) {
    let _ = _.nodes[_[_]];
    if (!_ || _.hasRequiredAttrs()) break;
    try {
      _ = _.from(_.create(_[_ + 1], _));
    } catch {
      break;
    }
    (_++, _++);
  }
  return new _(_, _, _);
}
var _ = {},
  _ = {},
  _ = {
    touchstart: !0,
    touchmove: !0,
  },
  _ = class {
    constructor() {
      ((this.shiftKey = !1),
        (this.mouseDown = null),
        (this.lastKeyCode = null),
        (this.lastKeyCodeTime = 0),
        (this.lastClick = {
          time: 0,
          _: 0,
          _: 0,
          type: ``,
          button: 0,
        }),
        (this.lastSelectionOrigin = null),
        (this.lastSelectionTime = 0),
        (this.lastIOSEnter = 0),
        (this.lastIOSEnterFallbackTimeout = -1),
        (this.lastFocus = 0),
        (this.lastTouch = 0),
        (this.lastChromeDelete = 0),
        (this.composing = !1),
        (this.compositionNode = null),
        (this.composingTimeout = -1),
        (this.compositionNodes = []),
        (this.compositionEndedAt = -2e8),
        (this.compositionID = 1),
        (this.badSafariComposition = !1),
        (this.compositionPendingChanges = 0),
        (this.domChangeCount = 0),
        (this.eventHandlers = Object.create(null)),
        (this.hideSelectionGuard = null));
    }
  };
function _(_) {
  for (let _ in _) {
    let _ = _[_];
    _.dom.addEventListener(
      _,
      (_.input.eventHandlers[_] = (_) => {
        _(_, _) && !_(_, _) && (_.editable || !(_.type in _)) && _(_, _);
      }),
      _[_]
        ? {
            passive: !0,
          }
        : void 0,
    );
  }
  (_ && _.dom.addEventListener(`input`, () => null), _(_));
}
function _(_, _) {
  ((_.input.lastSelectionOrigin = _), (_.input.lastSelectionTime = Date.now()));
}
function _(_) {
  (_.input.mouseDown && _.input.mouseDown.done(), _.domObserver.stop());
  for (let _ in _.input.eventHandlers)
    _.dom.removeEventListener(_, _.input.eventHandlers[_]);
  (clearTimeout(_.input.composingTimeout),
    clearTimeout(_.input.lastIOSEnterFallbackTimeout));
}
function _(_) {
  _.someProp(`handleDOMEvents`, (_) => {
    for (let _ in _)
      _.input.eventHandlers[_] ||
        _.dom.addEventListener(_, (_.input.eventHandlers[_] = (_) => _(_, _)));
  });
}
function _(_, _) {
  return _.someProp(`handleDOMEvents`, (_) => {
    let _ = _[_.type];
    return _ ? _(_, _) || _.defaultPrevented : !1;
  });
}
function _(_, _) {
  if (!_.bubbles) return !0;
  if (_.defaultPrevented) return !1;
  for (let _ = _.target; _ != _.dom; _ = _.parentNode)
    if (!_ || _.nodeType == 11 || (_.pmViewDesc && _.pmViewDesc.stopEvent(_)))
      return !1;
  return !0;
}
function _(_, _) {
  !_(_, _) && _[_.type] && (_.editable || !(_.type in _)) && _[_.type](_, _);
}
((_.keydown = (_, _) => {
  let _ = _;
  if (
    ((_.input.shiftKey = _.keyCode == 16 || _.shiftKey),
    !_(_) &&
      ((_.input.lastKeyCode = _.keyCode),
      (_.input.lastKeyCodeTime = Date.now()),
      !(_ && _ && _.keyCode == 13)))
  ) {
    if (
      (_.keyCode != 229 && _.domObserver.forceFlush(),
      _ && _.keyCode == 13 && !_.ctrlKey && !_.altKey && !_.metaKey)
    ) {
      let _ = Date.now();
      ((_.input.lastIOSEnter = _),
        (_.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
          _.input.lastIOSEnter == _ &&
            (_.someProp(`handleKeyDown`, (_) => _(_, _(13, `Enter`))),
            (_.input.lastIOSEnter = 0));
        }, 200)));
    } else
      _.someProp(`handleKeyDown`, (_) => _(_, _)) || _(_, _)
        ? _.preventDefault()
        : _(_, `key`);
  }
}),
  (_.keyup = (_, _) => {
    _.keyCode == 16 && (_.input.shiftKey = !1);
  }),
  (_.keypress = (_, _) => {
    let _ = _;
    if (_(_) || !_.charCode || (_.ctrlKey && !_.altKey) || (_ && _.metaKey))
      return;
    if (_.someProp(`handleKeyPress`, (_) => _(_, _))) {
      _.preventDefault();
      return;
    }
    let _ = _.state.selection;
    if (!(_ instanceof _) || !_.$from.sameParent(_.$to)) {
      let _ = String.fromCharCode(_.charCode),
        _ = () => _.state._.insertText(_).scrollIntoView();
      (!/[\r\n]/.test(_) &&
        !_.someProp(`handleTextInput`, (_) =>
          _(_, _.$from.pos, _.$to.pos, _, _),
        ) &&
        _.dispatch(_()),
        _.preventDefault());
    }
  }));
function _(_) {
  return {
    left: _.clientX,
    top: _.clientY,
  };
}
function _(_, _) {
  let _ = _._ - _.clientX,
    _ = _._ - _.clientY;
  return _ * _ + _ * _ < 100;
}
function _(_, _, _, _, _) {
  if (_ == -1) return !1;
  let _ = _.state.doc.resolve(_);
  for (let _ = _.depth + 1; _ > 0; _--)
    if (
      _.someProp(_, (_) =>
        _ > _.depth
          ? _(_, _, _.nodeAfter, _.before(_), _, !0)
          : _(_, _, _.node(_), _.before(_), _, !1),
      )
    )
      return !0;
  return !1;
}
function _(_, _, _) {
  if ((_.focused || _.focus(), _.state.selection._(_))) return;
  let _ = _.state._.setSelection(_);
  (_.setMeta(`pointer`, !0), _.dispatch(_));
}
function _(_, _) {
  if (_ == -1) return !1;
  let _ = _.state.doc.resolve(_),
    _ = _.nodeAfter;
  return _ && _.isAtom && _.isSelectable(_) ? (_(_, new _(_)), !0) : !1;
}
function _(_, _) {
  if (_ == -1) return !1;
  let _ = _.state.selection,
    _,
    _;
  _ instanceof _ && (_ = _.node);
  let _ = _.state.doc.resolve(_);
  for (let _ = _.depth + 1; _ > 0; _--) {
    let _ = _ > _.depth ? _.nodeAfter : _.node(_);
    if (_.isSelectable(_)) {
      _ =
        _ &&
        _.$from.depth > 0 &&
        _ >= _.$from.depth &&
        _.before(_.$from.depth + 1) == _.$from.pos
          ? _.before(_.$from.depth)
          : _.before(_);
      break;
    }
  }
  return _ != null && (_(_, _.create(_.state.doc, _)), !0);
}
function _(_, _, _, _, _) {
  return (
    _(_, `handleClickOn`, _, _, _) ||
    _.someProp(`handleClick`, (_) => _(_, _, _)) ||
    (_ ? _(_, _) : _(_, _))
  );
}
function _(_, _, _, _) {
  return (
    _(_, `handleDoubleClickOn`, _, _, _) ||
    _.someProp(`handleDoubleClick`, (_) => _(_, _, _))
  );
}
function _(_, _, _, _) {
  return (
    _(_, `handleTripleClickOn`, _, _, _) ||
    _.someProp(`handleTripleClick`, (_) => _(_, _, _)) ||
    _(_, _, _)
  );
}
function _(_, _, _) {
  if (_.button != 0) return !1;
  let _ = _(_, _, !0),
    _ = _.state.doc;
  return _
    ? (_(_, _),
      _ instanceof _ && _._(_.state.doc) && (_.input.mouseDown = new _(_, _)),
      !0)
    : !1;
}
function _(_, _, _) {
  let _ = _.state.doc;
  if (_ == -1) return _.inlineContent ? _.create(_, 0, _.content.size) : null;
  let _ = _.resolve(_);
  for (let _ = _.depth + 1; _ > 0; _--) {
    let _ = _ > _.depth ? _.nodeAfter : _.node(_),
      _ = _.before(_);
    if (_.inlineContent) return _.create(_, _ + 1, _ + 1 + _.content.size);
    if (_ && _.isSelectable(_)) return _.create(_, _);
  }
  return null;
}
function _(_) {
  return _(_);
}
var _ = _ ? `metaKey` : `ctrlKey`;
_.mousedown = (_, _) => {
  let _ = _;
  _.input.shiftKey = _.shiftKey;
  let _ = _(_),
    _ = Date.now(),
    _ = `singleClick`;
  (_ - _.input.lastClick.time < 500 &&
    _(_, _.input.lastClick) &&
    !_[_] &&
    _.input.lastClick.button == _.button &&
    (_.input.lastClick.type == `singleClick`
      ? (_ = `doubleClick`)
      : _.input.lastClick.type == `doubleClick` && (_ = `tripleClick`)),
    (_.input.lastClick = {
      time: _,
      _: _.clientX,
      _: _.clientY,
      type: _,
      button: _.button,
    }),
    _.input.mouseDown && _.input.mouseDown.done());
  let _ = _.posAtCoords(_(_));
  _ &&
    (_ == `singleClick`
      ? (_.input.mouseDown = new _(_, _, _, !!_))
      : (_ == `doubleClick` ? _ : _)(_, _.pos, _.inside, _)
        ? _.preventDefault()
        : _(_, `pointer`));
};
var _ = class {
    constructor(_) {
      ((this.view = _),
        (this.mightDrag = null),
        _.root.addEventListener(`mouseup`, (this._ = this._.bind(this))),
        _.root.addEventListener(
          `mousemove`,
          (this.move = this.move.bind(this)),
        ));
    }
    up(_) {
      this.done();
    }
    move(_) {
      _.buttons == 0 && this.done();
    }
    done() {
      (this.view.root.removeEventListener(`mouseup`, this._),
        this.view.root.removeEventListener(`mousemove`, this.move),
        this.view.input.mouseDown == this &&
          (this.view.input.mouseDown = null));
    }
    delaySelUpdate() {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      (super(_),
        (this.pos = _),
        (this.event = _),
        (this.flushed = _),
        (this.delayedSelectionSync = !1),
        (this.startDoc = _.state.doc),
        (this.selectNode = !!_[_]),
        (this.allowDefault = _.shiftKey));
      let _, _;
      if (_.inside > -1) ((_ = _.state.doc.nodeAt(_.inside)), (_ = _.inside));
      else {
        let _ = _.state.doc.resolve(_.pos);
        ((_ = _.parent), (_ = _.depth ? _.before() : 0));
      }
      let _ = _ ? null : _.target,
        _ = _ ? _.docView.nearestDesc(_, !0) : null;
      this.target = _ && _(_.nodeDOM) ? _.nodeDOM : null;
      let { selection: _ } = _.state;
      (_.button == 0 &&
        ((_.type.spec.draggable && _.type.spec.selectable !== !1) ||
          (_ instanceof _ && _.from <= _ && _._ > _)) &&
        (this.mightDrag = {
          node: _,
          pos: _,
          addAttr: !(!this.target || this.target.draggable),
          setUneditable: !!(
            this.target &&
            _ &&
            !this.target.hasAttribute(`contentEditable`)
          ),
        }),
        this.target &&
          this.mightDrag &&
          (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && (this.target.draggable = !0),
          this.mightDrag.setUneditable &&
            setTimeout(() => {
              this.view.input.mouseDown == this &&
                this.target.setAttribute(`contentEditable`, `false`);
            }, 20),
          this.view.domObserver.start()),
        _(_, `pointer`));
    }
    done() {
      (super.done(),
        this.mightDrag &&
          this.target &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && this.target.removeAttribute(`draggable`),
          this.mightDrag.setUneditable &&
            this.target.removeAttribute(`contentEditable`),
          this.view.domObserver.start()),
        this.delayedSelectionSync &&
          setTimeout(() => {
            this.view.isDestroyed || _(this.view);
          }));
    }
    up(_) {
      if ((this.done(), !this.view.dom.contains(_.target))) return;
      let _ = this.pos;
      (this.view.state.doc != this.startDoc &&
        (_ = this.view.posAtCoords(_(_))),
        this.updateAllowDefault(_),
        this.allowDefault || !_
          ? _(this.view, `pointer`)
          : _(this.view, _.pos, _.inside, _, this.selectNode)
            ? _.preventDefault()
            : _.button == 0 &&
                (this.flushed ||
                  (_ && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (_ &&
                    !this.view.state.selection.visible &&
                    Math.min(
                      Math.abs(_.pos - this.view.state.selection.from),
                      Math.abs(_.pos - this.view.state.selection._),
                    ) <= 2))
              ? (_(this.view, _.near(this.view.state.doc.resolve(_.pos))),
                _.preventDefault())
              : _(this.view, `pointer`));
    }
    move(_) {
      (this.updateAllowDefault(_), _(this.view, `pointer`), super.move(_));
    }
    updateAllowDefault(_) {
      !this.allowDefault &&
        (Math.abs(this.event._ - _.clientX) > 4 ||
          Math.abs(this.event._ - _.clientY) > 4) &&
        (this.allowDefault = !0);
    }
    delaySelUpdate() {
      return this.allowDefault ? ((this.delayedSelectionSync = !0), !0) : !1;
    }
  },
  _ = class extends _ {
    constructor(_, _) {
      (super(_), (this.startSelection = _), (this.startDoc = _.state.doc));
    }
    move(_) {
      if (
        _.buttons == 0 ||
        this.view.isDestroyed ||
        !this.view.state.doc._(this.startDoc)
      ) {
        this.done();
        return;
      }
      (_.preventDefault(), _(this.view, `pointer`));
      let _ = this.view.posAtCoords(_(_)),
        _ = _ && _(this.view, _.inside, !1);
      if (!_) return;
      let { doc: _ } = this.view.state,
        _ = this.startSelection,
        [_, _] = _.from < _.from ? [_._, _.from] : [_.from, _._];
      _(this.view, _.create(_, _, _));
    }
  };
((_.touchstart = (_) => {
  ((_.input.lastTouch = Date.now()), _(_), _(_, `pointer`));
}),
  (_.touchmove = (_) => {
    ((_.input.lastTouch = Date.now()), _(_, `pointer`));
  }),
  (_.contextmenu = (_) => _(_)));
function _(_, _) {
  return _.composing
    ? !0
    : _ && Math.abs(Date.now() - _.input.compositionEndedAt) < 500
      ? ((_.input.compositionEndedAt = -2e8), !0)
      : !1;
}
var _ = _ ? 5e3 : -1;
_.compositionstart = _.compositionupdate = (_) => {
  if (!_.composing) {
    _.domObserver.flush();
    let { state: _ } = _,
      _ = _.selection.$to;
    if (
      _.selection instanceof _ &&
      _.selection.empty &&
      (_.storedMarks ||
        (!_.textOffset &&
          _.parentOffset &&
          _.nodeBefore.marks.some((_) => _.type.spec.inclusive === !1)) ||
        (_ && _ && _(_)))
    )
      ((_.markCursor = _.state.storedMarks || _.marks()),
        _(_, !0),
        (_.markCursor = null));
    else if (
      (_(_, !_.selection.empty),
      _ &&
        _.selection.empty &&
        _.parentOffset &&
        !_.textOffset &&
        _.nodeBefore.marks.length)
    ) {
      let _ = _.domSelectionRange();
      for (let _ = _.focusNode, _ = _.focusOffset; _ && _(_) && _ != 0;) {
        let _ = _ < 0 ? _.lastChild : _.childNodes[_ - 1];
        if (!_) break;
        if (_(_)) {
          let _ = _.domSelection();
          _ && _.collapse(_, _.nodeValue.length);
          break;
        }
        ((_ = _), (_ = -1));
      }
    }
    _.input.composing = !0;
  }
  _(_, _);
};
function _(_) {
  let { focusNode: _, focusOffset: _ } = _.domSelectionRange();
  if (!_ || !_(_) || _ >= _.childNodes.length) return !1;
  let _ = _.childNodes[_];
  return _(_) && _.contentEditable == `false`;
}
_.compositionend = (_, _) => {
  _.composing &&
    ((_.input.composing = !1),
    (_.input.compositionEndedAt = Date.now()),
    (_.input.compositionPendingChanges = _.domObserver.pendingRecords().length
      ? _.input.compositionID
      : 0),
    (_.input.compositionNode = null),
    _.input.badSafariComposition
      ? _.domObserver.forceFlush()
      : _.input.compositionPendingChanges &&
        Promise.resolve().then(() => _.domObserver.flush()),
    _.input.compositionID++,
    _(_, 20));
};
function _(_, _) {
  (clearTimeout(_.input.composingTimeout),
    _ > -1 && (_.input.composingTimeout = setTimeout(() => _(_), _)));
}
function _(_) {
  for (
    _.composing &&
    ((_.input.composing = !1), (_.input.compositionEndedAt = Date.now()));
    _.input.compositionNodes.length > 0;
  )
    _.input.compositionNodes.pop().markParentsDirty();
}
function _(_) {
  let _ = _.domSelectionRange();
  if (!_.focusNode) return null;
  let _ = _(_.focusNode, _.focusOffset),
    _ = _(_.focusNode, _.focusOffset);
  if (_ && _ && _ != _) {
    let _ = _.pmViewDesc,
      _ = _.domObserver.lastChangedTextNode;
    if (_ == _ || _ == _) return _;
    if (!_ || !_.isText(_.nodeValue)) return _;
    if (_.input.compositionNode == _) {
      let _ = _.pmViewDesc;
      if (_ && _.isText(_.nodeValue)) return _;
    }
  }
  return _ || _;
}
function _(_, _ = !1) {
  if (!(_ && _.domObserver.flushingSoon >= 0)) {
    if (
      (_.domObserver.forceFlush(), _(_), _ || (_.docView && _.docView.dirty))
    ) {
      let _ = _(_),
        _ = _.state.selection;
      return (
        _ && !_._(_)
          ? _.dispatch(_.state._.setSelection(_))
          : (_.markCursor || _) &&
              !_.$from.node(_.$from.sharedDepth(_._)).inlineContent
            ? _.dispatch(_.state._.deleteSelection())
            : _.updateState(_.state),
        !0
      );
    }
    return !1;
  }
}
function _(_, _) {
  if (!_.dom.parentNode) return;
  let _ = _.dom.parentNode.appendChild(document.createElement(`div`));
  (_.appendChild(_),
    (_.style.cssText = `position: fixed; left: -10000px; top: 10px`));
  let _ = getSelection(),
    _ = document.createRange();
  (_.selectNodeContents(_),
    _.dom.blur(),
    _.removeAllRanges(),
    _.addRange(_),
    setTimeout(() => {
      (_.parentNode && _.parentNode.removeChild(_), _.focus());
    }, 50));
}
var _ = (_ && _ < 15) || (_ && _ < 604);
_.copy = _.cut = (_, _) => {
  let _ = _,
    _ = _.state.selection,
    _ = _.type == `cut`;
  if (_.empty) return;
  let _ = _ ? null : _.clipboardData,
    { dom: _, text: _ } = _(_, _.content());
  (_
    ? (_.preventDefault(),
      _.clearData(),
      _.setData(`text/html`, _.innerHTML),
      _.setData(`text/plain`, _))
    : _(_, _),
    _ &&
      _.dispatch(
        _.state._.deleteSelection().scrollIntoView().setMeta(`uiEvent`, `cut`),
      ));
};
function _(_) {
  return _.openStart == 0 && _.openEnd == 0 && _.content.childCount == 1
    ? _.content.firstChild
    : null;
}
function _(_, _) {
  if (!_.dom.parentNode) return;
  let _ = _.input.shiftKey || _.state.selection.$from.parent.type.spec.code,
    _ = _.dom.parentNode.appendChild(
      document.createElement(_ ? `textarea` : `div`),
    );
  (_ || (_.contentEditable = `true`),
    (_.style.cssText = `position: fixed; left: -10000px; top: 10px`),
    _.focus());
  let _ = _.input.shiftKey && _.input.lastKeyCode != 45;
  setTimeout(() => {
    (_.focus(),
      _.parentNode && _.parentNode.removeChild(_),
      _ ? _(_, _.value, null, _, _) : _(_, _.textContent, _.innerHTML, _, _));
  }, 50);
}
function _(_, _, _, _, _) {
  let _ = _(_, _, _, _, _.state.selection.$from);
  if (_.someProp(`handlePaste`, (_) => _(_, _, _ || _.empty))) return !0;
  if (!_) return !1;
  let _ = _(_),
    _ = _
      ? _.state._.replaceSelectionWith(_, _)
      : _.state._.replaceSelection(_);
  return (
    _.dispatch(
      _.scrollIntoView().setMeta(`paste`, !0).setMeta(`uiEvent`, `paste`),
    ),
    !0
  );
}
function _(_) {
  let _ = _.getData(`text/plain`) || _.getData(`Text`);
  if (_) return _;
  let _ = _.getData(`text/uri-list`);
  return _ ? _.replace(/\r?\n/g, ` `) : ``;
}
_.paste = (_, _) => {
  let _ = _;
  if (_.composing && !_) return;
  let _ = _ ? null : _.clipboardData,
    _ = _.input.shiftKey && _.input.lastKeyCode != 45;
  _ && _(_, _(_), _.getData(`text/html`), _, _) ? _.preventDefault() : _(_, _);
};
var _ = class {
    constructor(_, _, _) {
      ((this.slice = _), (this.move = _), (this.node = _));
    }
  },
  _ = _ ? `altKey` : `ctrlKey`;
function _(_, _) {
  let _;
  return (
    _.someProp(`dragCopies`, (_) => {
      _ ||= _(_);
    }),
    _ == null ? !_[_] : !_
  );
}
((_.dragstart = (_, _) => {
  let _ = _,
    _ = _.input.mouseDown;
  if ((_ && _.done(), !_.dataTransfer)) return;
  let _ = _.state.selection,
    _ = _.empty ? null : _.posAtCoords(_(_)),
    _;
  if (!(_ && _.pos >= _.from && _.pos <= (_ instanceof _ ? _._ - 1 : _._))) {
    if (_ && _.mightDrag) _ = _.create(_.state.doc, _.mightDrag.pos);
    else if (_.target && _(_.target)) {
      let _ = _.docView.nearestDesc(_.target, !0);
      _ &&
        _.node.type.spec.draggable &&
        _ != _.docView &&
        (_ = _.create(_.state.doc, _.posBefore));
    }
  }
  let { dom: _, text: _, slice: _ } = _(_, (_ || _.state.selection).content());
  ((!_.dataTransfer.files.length || !_ || _ > 120) &&
    _.dataTransfer.clearData(),
    _.dataTransfer.setData(_ ? `Text` : `text/html`, _.innerHTML),
    (_.dataTransfer.effectAllowed = `copyMove`),
    _ || _.dataTransfer.setData(`text/plain`, _),
    (_.dragging = new _(_, _(_, _), _)));
}),
  (_.dragend = (_) => {
    let _ = _.dragging;
    window.setTimeout(() => {
      _.dragging == _ && (_.dragging = null);
    }, 50);
  }),
  (_.dragover = _.dragenter = (_, _) => _.preventDefault()),
  (_.drop = (_, _) => {
    try {
      _(_, _, _.dragging);
    } finally {
      _.dragging = null;
    }
  }));
function _(_, _, _) {
  if (!_.dataTransfer) return;
  let _ = _.posAtCoords(_(_));
  if (!_) return;
  let _ = _.state.doc.resolve(_.pos),
    _ = _ && _.slice;
  _
    ? _.someProp(`transformPasted`, (_) => {
        _ = _(_, _, !1);
      })
    : (_ = _(
        _,
        _(_.dataTransfer),
        _ ? null : _.dataTransfer.getData(`text/html`),
        !1,
        _,
      ));
  let _ = !!(_ && _(_, _));
  if (_.someProp(`handleDrop`, (_) => _(_, _, _ || _.empty, _))) {
    _.preventDefault();
    return;
  }
  if (!_) return;
  _.preventDefault();
  let _ = _ ? _(_.state.doc, _.pos, _) : _.pos;
  _ ??= _.pos;
  let _ = _.state._;
  if (_) {
    let { node: _ } = _;
    _ ? _.replace(_) : _.deleteSelection();
  }
  let _ = _.mapping.map(_),
    _ = _.openStart == 0 && _.openEnd == 0 && _.content.childCount == 1,
    _ = _.doc;
  if (
    (_
      ? _.replaceRangeWith(_, _, _.content.firstChild)
      : _.replaceRange(_, _, _),
    _.doc._(_))
  )
    return;
  let _ = _.doc.resolve(_);
  if (
    _ &&
    _.isSelectable(_.content.firstChild) &&
    _.nodeAfter &&
    _.nodeAfter.sameMarkup(_.content.firstChild)
  )
    _.setSelection(new _(_));
  else {
    let _ = _.mapping.map(_);
    (_.mapping.maps[_.mapping.maps.length - 1].forEach((_, _, _, _) => (_ = _)),
      _.setSelection(_(_, _, _.doc.resolve(_))));
  }
  (_.focus(), _.dispatch(_.setMeta(`uiEvent`, `drop`)));
}
((_.focus = (_) => {
  ((_.input.lastFocus = Date.now()),
    _.focused ||
      (_.domObserver.stop(),
      _.dom.classList.add(`ProseMirror-focused`),
      _.domObserver.start(),
      (_.focused = !0),
      setTimeout(() => {
        _.docView &&
          _.hasFocus() &&
          !_.domObserver.currentSelection._(_.domSelectionRange()) &&
          _(_);
      }, 20)));
}),
  (_.blur = (_, _) => {
    let _ = _;
    _.focused &&=
      (_.domObserver.stop(),
      _.dom.classList.remove(`ProseMirror-focused`),
      _.domObserver.start(),
      _.relatedTarget &&
        _.dom.contains(_.relatedTarget) &&
        _.domObserver.currentSelection.clear(),
      !1);
  }),
  (_.beforeinput = (_, _) => {
    if (_ && _.inputType == `deleteContentBackward`) {
      _.domObserver.flushSoon();
      let { domChangeCount: _ } = _.input;
      setTimeout(() => {
        if (
          _.input.domChangeCount != _ ||
          (_.dom.blur(),
          _.focus(),
          _.someProp(`handleKeyDown`, (_) => _(_, _(8, `Backspace`))))
        )
          return;
        let { $cursor: _ } = _.state.selection;
        _ &&
          _.pos > 0 &&
          _.dispatch(_.state._.delete(_.pos - 1, _.pos).scrollIntoView());
      }, 50);
    }
  }));
for (let _ in _) _[_] = _[_];
function _(_, _) {
  if (_ == _) return !0;
  for (let _ in _) if (_[_] !== _[_]) return !1;
  for (let _ in _) if (!(_ in _)) return !1;
  return !0;
}
var _ = class {
    constructor(_) {
      ((this.frag = _), (this.index = 0), (this.off = 0));
    }
    nodeAt(_) {
      for (; this.off <= _ && this.index < this.frag.childCount;) {
        let _ = this.frag.child(this.index);
        if (this.off == _) return _;
        ((this.off += _.nodeSize), this.index++);
      }
      return null;
    }
  },
  _ = class _ {
    constructor(_, _) {
      ((this.toDOM = _),
        (this.spec = _ || _),
        (this.side = this.spec.side || 0));
    }
    map(_, _, _, _) {
      let { pos: _, deleted: _ } = _.mapResult(
        _.from + _,
        this.side < 0 ? -1 : 1,
      );
      return _ ? null : new _(_ - _, _ - _, this);
    }
    valid() {
      return !0;
    }
    eq(_) {
      return (
        this == _ ||
        (_ instanceof _ &&
          ((this.spec.key && this.spec.key == _.spec.key) ||
            (this.toDOM == _.toDOM && _(this.spec, _.spec))))
      );
    }
    destroy(_) {
      this.spec.destroy && this.spec.destroy(_);
    }
  },
  _ = class _ {
    constructor(_, _) {
      ((this.attrs = _), (this.spec = _ || _));
    }
    map(_, _, _, _) {
      let _ = _.map(_.from + _, this.spec.inclusiveStart ? -1 : 1) - _,
        _ = _.map(_._ + _, this.spec.inclusiveEnd ? 1 : -1) - _;
      return _ >= _ ? null : new _(_, _, this);
    }
    valid(_, _) {
      return _.from < _._;
    }
    eq(_) {
      return (
        this == _ ||
        (_ instanceof _ && _(this.attrs, _.attrs) && _(this.spec, _.spec))
      );
    }
    static is(_) {
      return _.type instanceof _;
    }
    destroy() {}
  },
  _ = class _ {
    constructor(_, _) {
      ((this.attrs = _), (this.spec = _ || _));
    }
    map(_, _, _, _) {
      let _ = _.mapResult(_.from + _, 1);
      if (_.deleted) return null;
      let _ = _.mapResult(_._ + _, -1);
      return _.deleted || _.pos <= _.pos
        ? null
        : new _(_.pos - _, _.pos - _, this);
    }
    valid(_, _, _) {
      let _ = _.nodeAt(_.from);
      return !!_ && !_.isText && _.from + _.nodeSize == _._;
    }
    eq(_) {
      return (
        this == _ ||
        (_ instanceof _ && _(this.attrs, _.attrs) && _(this.spec, _.spec))
      );
    }
    destroy() {}
  },
  _ = class _ {
    constructor(_, _, _) {
      ((this.from = _), (this._ = _), (this.type = _));
    }
    copy(_, _) {
      return new _(_, _, this.type);
    }
    eq(_, _ = 0) {
      return (
        this.type._(_.type) && this.from + _ == _.from && this._ + _ == _._
      );
    }
    map(_, _, _) {
      return this.type.map(_, this, _, _);
    }
    static widget(_, _, _) {
      return new _(_, _, new _(_, _));
    }
    static inline(_, _, _, _) {
      return new _(_, _, new _(_, _));
    }
    static node(_, _, _, _) {
      return new _(_, _, new _(_, _));
    }
    get spec() {
      return this.type.spec;
    }
    get inline() {
      return this.type instanceof _;
    }
    get widget() {
      return this.type instanceof _;
    }
  },
  _ = [],
  _ = {},
  _ = class _ {
    constructor(_, _) {
      ((this.local = _.length ? _ : _), (this.children = _.length ? _ : _));
    }
    static create(_, _) {
      return _.length ? _(_, _, 0, _) : _;
    }
    find(_, _, _) {
      let _ = [];
      return (this.findInner(_ ?? 0, _ ?? 1e9, _, 0, _), _);
    }
    findInner(_, _, _, _, _) {
      for (let _ = 0; _ < this.local.length; _++) {
        let _ = this.local[_];
        _.from <= _ &&
          _._ >= _ &&
          (!_ || _(_.spec)) &&
          _.push(_.copy(_.from + _, _._ + _));
      }
      for (let _ = 0; _ < this.children.length; _ += 3)
        if (this.children[_] < _ && this.children[_ + 1] > _) {
          let _ = this.children[_] + 1;
          this.children[_ + 2].findInner(_ - _, _ - _, _, _ + _, _);
        }
    }
    map(_, _, _) {
      return this == _ || _.maps.length == 0
        ? this
        : this.mapInner(_, _, 0, 0, _ || _);
    }
    mapInner(_, _, _, _, _) {
      let _;
      if (this.local.length) {
        let _ = new _(_.content);
        for (let _ = 0; _ < this.local.length; _++) {
          let _ = this.local[_].map(_, _, _);
          _ && _.type.valid(_, _, _)
            ? (_ ||= []).push(_)
            : _.onRemove && _.onRemove(this.local[_].spec);
        }
      }
      return this.children.length
        ? _(this.children, _ || [], _, _, _, _, _)
        : _
          ? new _(_.sort(_), _)
          : _;
    }
    add(_, _) {
      return _.length
        ? this == _
          ? _.create(_, _)
          : this.addInner(_, _, 0)
        : this;
    }
    addInner(_, _, _) {
      let _,
        _ = 0;
      _.forEach((_, _) => {
        let _ = _ + _,
          _;
        if ((_ = _(_, _, _))) {
          for (_ ||= this.children.slice(); _ < _.length && _[_] < _;) _ += 3;
          (_[_] == _
            ? (_[_ + 2] = _[_ + 2].addInner(_, _, _ + 1))
            : _.splice(_, 0, _, _ + _.nodeSize, _(_, _, _ + 1, _)),
            (_ += 3));
        }
      });
      let _ = _(_ ? _(_) : _, -_);
      if (_.length) {
        let _ = new _(_.content);
        for (let _ = 0; _ < _.length; _++)
          _[_].type.valid(_, _[_], _) || _.splice(_--, 1);
      }
      return new _(
        _.length ? this.local.concat(_).sort(_) : this.local,
        _ || this.children,
      );
    }
    remove(_) {
      return _.length == 0 || this == _ ? this : this.removeInner(_, 0);
    }
    removeInner(_, _) {
      let _ = this.children,
        _ = this.local;
      for (let _ = 0; _ < _.length; _ += 3) {
        let _,
          _ = _[_] + _,
          _ = _[_ + 1] + _;
        for (let _ = 0, _; _ < _.length; _++)
          (_ = _[_]) &&
            _.from > _ &&
            _._ < _ &&
            ((_[_] = null), (_ ||= []).push(_));
        if (!_) continue;
        _ == this.children && (_ = this.children.slice());
        let _ = _[_ + 2].removeInner(_, _ + 1);
        _ == _ ? (_.splice(_, 3), (_ -= 3)) : (_[_ + 2] = _);
      }
      if (_.length) {
        for (let _ = 0, _; _ < _.length; _++)
          if ((_ = _[_]))
            for (let _ = 0; _ < _.length; _++)
              _[_]._(_, _) &&
                (_ == this.local && (_ = this.local.slice()), _.splice(_--, 1));
      }
      return _ == this.children && _ == this.local
        ? this
        : _.length || _.length
          ? new _(_, _)
          : _;
    }
    forChild(_, _) {
      if (this == _) return this;
      if (_.isLeaf) return _.empty;
      let _, _;
      for (let _ = 0; _ < this.children.length; _ += 3)
        if (this.children[_] >= _) {
          this.children[_] == _ && (_ = this.children[_ + 2]);
          break;
        }
      let _ = _ + 1,
        _ = _ + _.content.size;
      for (let _ = 0; _ < this.local.length; _++) {
        let _ = this.local[_];
        if (_.from < _ && _._ > _ && _.type instanceof _) {
          let _ = Math.max(_, _.from) - _,
            _ = Math.min(_, _._) - _;
          _ < _ && (_ ||= []).push(_.copy(_, _));
        }
      }
      if (_) {
        let _ = new _(_.sort(_), _);
        return _ ? new _([_, _]) : _;
      }
      return _ || _;
    }
    eq(_) {
      if (this == _) return !0;
      if (
        !(_ instanceof _) ||
        this.local.length != _.local.length ||
        this.children.length != _.children.length
      )
        return !1;
      for (let _ = 0; _ < this.local.length; _++)
        if (!this.local[_]._(_.local[_])) return !1;
      for (let _ = 0; _ < this.children.length; _ += 3)
        if (
          this.children[_] != _.children[_] ||
          this.children[_ + 1] != _.children[_ + 1] ||
          !this.children[_ + 2]._(_.children[_ + 2])
        )
          return !1;
      return !0;
    }
    locals(_) {
      return _(this.localsInner(_));
    }
    localsInner(_) {
      if (this == _) return _;
      if (_.inlineContent || !this.local.some(_._)) return this.local;
      let _ = [];
      for (let _ = 0; _ < this.local.length; _++)
        this.local[_].type instanceof _ || _.push(this.local[_]);
      return _;
    }
    forEachSet(_) {
      _(this);
    }
  };
((_.empty = new _([], [])), (_.removeOverlap = _));
var _ = _.empty,
  _ = class _ {
    constructor(_) {
      this.members = _;
    }
    map(_, _) {
      let _ = this.members.map((_) => _.map(_, _, _));
      return _.from(_);
    }
    forChild(_, _) {
      if (_.isLeaf) return _.empty;
      let _ = [];
      for (let _ = 0; _ < this.members.length; _++) {
        let _ = this.members[_].forChild(_, _);
        _ != _ && (_ instanceof _ ? (_ = _.concat(_.members)) : _.push(_));
      }
      return _.from(_);
    }
    eq(_) {
      if (!(_ instanceof _) || _.members.length != this.members.length)
        return !1;
      for (let _ = 0; _ < this.members.length; _++)
        if (!this.members[_]._(_.members[_])) return !1;
      return !0;
    }
    locals(_) {
      let _,
        _ = !0;
      for (let _ = 0; _ < this.members.length; _++) {
        let _ = this.members[_].localsInner(_);
        if (_.length) {
          if (!_) _ = _;
          else {
            _ &&= ((_ = _.slice()), !1);
            for (let _ = 0; _ < _.length; _++) _.push(_[_]);
          }
        }
      }
      return _ ? _(_ ? _ : _.sort(_)) : _;
    }
    static from(_) {
      switch (_.length) {
        case 0:
          return _;
        case 1:
          return _[0];
        default:
          return new _(
            _.every((_) => _ instanceof _)
              ? _
              : _.reduce(
                  (_, _) => _.concat(_ instanceof _ ? _ : _.members),
                  [],
                ),
          );
      }
    }
    forEachSet(_) {
      for (let _ = 0; _ < this.members.length; _++)
        this.members[_].forEachSet(_);
    }
  };
function _(_, _, _, _, _, _, _) {
  let _ = _.slice();
  for (let _ = 0, _ = _; _ < _.maps.length; _++) {
    let _ = 0;
    (_.maps[_].forEach((_, _, _, _) => {
      let _ = _ - _ - (_ - _);
      for (let _ = 0; _ < _.length; _ += 3) {
        let _ = _[_ + 1];
        if (_ < 0 || _ > _ + _ - _) continue;
        let _ = _[_] + _ - _;
        _ >= _
          ? (_[_ + 1] = _ <= _ ? -2 : -1)
          : _ >= _ && _ && ((_[_] += _), (_[_ + 1] += _));
      }
      _ += _;
    }),
      (_ = _.maps[_].map(_, -1)));
  }
  let _ = !1;
  for (let _ = 0; _ < _.length; _ += 3)
    if (_[_ + 1] < 0) {
      if (_[_ + 1] == -2) {
        ((_ = !0), (_[_ + 1] = -1));
        continue;
      }
      let _ = _.map(_[_] + _),
        _ = _ - _;
      if (_ < 0 || _ >= _.content.size) {
        _ = !0;
        continue;
      }
      let _ = _.map(_[_ + 1] + _, -1) - _,
        { index: _, offset: _ } = _.content.findIndex(_),
        _ = _.maybeChild(_);
      if (_ && _ == _ && _ + _.nodeSize == _) {
        let _ = _[_ + 2].mapInner(_, _, _ + 1, _[_] + _ + 1, _);
        _ == _
          ? ((_[_ + 1] = -2), (_ = !0))
          : ((_[_] = _), (_[_ + 1] = _), (_[_ + 2] = _));
      } else _ = !0;
    }
  if (_) {
    let _ = _(_(_, _, _, _, _, _, _), _, 0, _);
    _ = _.local;
    for (let _ = 0; _ < _.length; _ += 3)
      _[_ + 1] < 0 && (_.splice(_, 3), (_ -= 3));
    for (let _ = 0, _ = 0; _ < _.children.length; _ += 3) {
      let _ = _.children[_];
      for (; _ < _.length && _[_] < _;) _ += 3;
      _.splice(_, 0, _.children[_], _.children[_ + 1], _.children[_ + 2]);
    }
  }
  return new _(_.sort(_), _);
}
function _(_, _) {
  if (!_ || !_.length) return _;
  let _ = [];
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _.push(new _(_.from + _, _._ + _, _.type));
  }
  return _;
}
function _(_, _, _, _, _, _, _) {
  function _(_, _) {
    for (let _ = 0; _ < _.local.length; _++) {
      let _ = _.local[_].map(_, _, _);
      _ ? _.push(_) : _.onRemove && _.onRemove(_.local[_].spec);
    }
    for (let _ = 0; _ < _.children.length; _ += 3)
      _(_.children[_ + 2], _.children[_] + _ + 1);
  }
  for (let _ = 0; _ < _.length; _ += 3)
    _[_ + 1] == -1 && _(_[_ + 2], _[_] + _ + 1);
  return _;
}
function _(_, _, _) {
  if (_.isLeaf) return null;
  let _ = _ + _.nodeSize,
    _ = null;
  for (let _ = 0, _; _ < _.length; _++)
    (_ = _[_]) && _.from > _ && _._ < _ && ((_ ||= []).push(_), (_[_] = null));
  return _;
}
function _(_) {
  let _ = [];
  for (let _ = 0; _ < _.length; _++) _[_] != null && _.push(_[_]);
  return _;
}
function _(_, _, _, _) {
  let _ = [],
    _ = !1;
  _.forEach((_, _) => {
    let _ = _(_, _, _ + _);
    if (_) {
      _ = !0;
      let _ = _(_, _, _ + _ + 1, _);
      _ != _ && _.push(_, _ + _.nodeSize, _);
    }
  });
  let _ = _(_ ? _(_) : _, -_).sort(_);
  if (_.length) {
    let _ = new _(_.content);
    for (let _ = 0; _ < _.length; _++)
      _[_].type.valid(_, _[_], _) ||
        (_.onRemove && _.onRemove(_[_].spec), _.splice(_--, 1));
  }
  return _.length || _.length ? new _(_, _) : _;
}
function _(_, _) {
  return _.from - _.from || _._ - _._;
}
function _(_) {
  let _ = _;
  for (let _ = 0; _ < _.length - 1; _++) {
    let _ = _[_];
    if (_.from != _._)
      for (let _ = _ + 1; _ < _.length; _++) {
        let _ = _[_];
        if (_.from == _.from)
          _._ != _._ &&
            (_ == _ && (_ = _.slice()),
            (_[_] = _.copy(_.from, _._)),
            _(_, _ + 1, _.copy(_._, _._)));
        else {
          _.from < _._ &&
            (_ == _ && (_ = _.slice()),
            (_[_] = _.copy(_.from, _.from)),
            _(_, _, _.copy(_.from, _._)));
          break;
        }
      }
  }
  return _;
}
function _(_, _, _) {
  for (; _ < _.length && _(_, _[_]) > 0;) _++;
  _.splice(_, 0, _);
}
function _(_) {
  let _ = [];
  return (
    _.someProp(`decorations`, (_) => {
      let _ = _(_.state);
      _ && _ != _ && _.push(_);
    }),
    _.cursorWrapper && _.push(_.create(_.state.doc, [_.cursorWrapper.deco])),
    _.from(_)
  );
}
var _ = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0,
  },
  _ = _ && _ <= 11,
  _ = class {
    constructor() {
      ((this.anchorNode = null),
        (this.anchorOffset = 0),
        (this.focusNode = null),
        (this.focusOffset = 0));
    }
    set(_) {
      ((this.anchorNode = _.anchorNode),
        (this.anchorOffset = _.anchorOffset),
        (this.focusNode = _.focusNode),
        (this.focusOffset = _.focusOffset));
    }
    clear() {
      this.anchorNode = this.focusNode = null;
    }
    eq(_) {
      return (
        _.anchorNode == this.anchorNode &&
        _.anchorOffset == this.anchorOffset &&
        _.focusNode == this.focusNode &&
        _.focusOffset == this.focusOffset
      );
    }
  },
  _ = class {
    constructor(_, _) {
      ((this.view = _),
        (this.handleDOMChange = _),
        (this.queue = []),
        (this.flushingSoon = -1),
        (this.observer = null),
        (this.currentSelection = new _()),
        (this.onCharData = null),
        (this.suppressingSelectionUpdates = !1),
        (this.lastChangedTextNode = null),
        (this.observer =
          window.MutationObserver &&
          new window.MutationObserver((_) => {
            for (let _ = 0; _ < _.length; _++) this.queue.push(_[_]);
            _ &&
            _ <= 11 &&
            _.some(
              (_) =>
                (_.type == `childList` && _.removedNodes.length) ||
                (_.type == `characterData` &&
                  _.oldValue.length > _.target.nodeValue.length),
            )
              ? this.flushSoon()
              : _ &&
                  _.composing &&
                  _.some(
                    (_) => _.type == `childList` && _.target.nodeName == `TR`,
                  )
                ? ((_.input.badSafariComposition = !0), this.flushSoon())
                : this.flush();
          })),
        _ &&
          (this.onCharData = (_) => {
            (this.queue.push({
              target: _.target,
              type: `characterData`,
              oldValue: _.prevValue,
            }),
              this.flushSoon());
          }),
        (this.onSelectionChange = this.onSelectionChange.bind(this)));
    }
    flushSoon() {
      this.flushingSoon < 0 &&
        (this.flushingSoon = window.setTimeout(() => {
          ((this.flushingSoon = -1), this.flush());
        }, 20));
    }
    forceFlush() {
      this.flushingSoon > -1 &&
        (window.clearTimeout(this.flushingSoon),
        (this.flushingSoon = -1),
        this.flush());
    }
    start() {
      (this.observer &&
        (this.observer.takeRecords(), this.observer.observe(this.view.dom, _)),
        this.onCharData &&
          this.view.dom.addEventListener(
            `DOMCharacterDataModified`,
            this.onCharData,
          ),
        this.connectSelection());
    }
    stop() {
      if (this.observer) {
        let _ = this.observer.takeRecords();
        if (_.length) {
          for (let _ = 0; _ < _.length; _++) this.queue.push(_[_]);
          window.setTimeout(() => this.flush(), 20);
        }
        this.observer.disconnect();
      }
      (this.onCharData &&
        this.view.dom.removeEventListener(
          `DOMCharacterDataModified`,
          this.onCharData,
        ),
        this.disconnectSelection());
    }
    connectSelection() {
      this.view.dom.ownerDocument.addEventListener(
        `selectionchange`,
        this.onSelectionChange,
      );
    }
    disconnectSelection() {
      this.view.dom.ownerDocument.removeEventListener(
        `selectionchange`,
        this.onSelectionChange,
      );
    }
    suppressSelectionUpdates() {
      ((this.suppressingSelectionUpdates = !0),
        setTimeout(() => (this.suppressingSelectionUpdates = !1), 50));
    }
    onSelectionChange() {
      if (_(this.view)) {
        if (this.suppressingSelectionUpdates) return _(this.view);
        if (_ && _ <= 11 && !this.view.state.selection.empty) {
          let _ = this.view.domSelectionRange();
          if (
            _.focusNode &&
            _(_.focusNode, _.focusOffset, _.anchorNode, _.anchorOffset)
          )
            return this.flushSoon();
        }
        this.flush();
      }
    }
    setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(_) {
      if (!_.focusNode) return !0;
      let _ = new Set(),
        _;
      for (let _ = _.focusNode; _; _ = _(_)) _.add(_);
      for (let _ = _.anchorNode; _; _ = _(_))
        if (_.has(_)) {
          _ = _;
          break;
        }
      let _ = _ && this.view.docView.nearestDesc(_);
      if (
        _ &&
        _.ignoreMutation({
          type: `selection`,
          target: _(_) ? _.parentNode : _,
        })
      )
        return (this.setCurSelection(), !0);
    }
    pendingRecords() {
      if (this.observer)
        for (let _ of this.observer.takeRecords()) this.queue.push(_);
      return this.queue;
    }
    flush() {
      let { view: _ } = this;
      if (!_.docView || this.flushingSoon > -1) return;
      let _ = this.pendingRecords();
      _.length && (this.queue = []);
      let _,
        _ = !1;
      !this.suppressingSelectionUpdates &&
        _(_) &&
        ((_ = _.domSelectionRange()),
        (_ = !this.currentSelection._(_) && !this.ignoreSelectionChange(_)));
      let _ = -1,
        _ = -1,
        _ = !1,
        _ = [];
      if (_.editable)
        for (let _ = 0; _ < _.length; _++) {
          let _ = this.registerMutation(_[_], _);
          _ &&
            ((_ = _ < 0 ? _.from : Math.min(_.from, _)),
            (_ = _ < 0 ? _._ : Math.max(_._, _)),
            _.typeOver && (_ = !0));
        }
      if (
        _.some((_) => _.nodeName == `BR`) &&
        (_.input.lastKeyCode == 8 ||
          _.input.lastKeyCode == 46 ||
          (_ &&
            (_.composing || _.input.compositionEndedAt > Date.now() - 50) &&
            _.some((_) => _.type == `childList` && _.removedNodes.length)))
      ) {
        for (let _ of _)
          if (_.nodeName == `BR` && _.parentNode) {
            let _ = _.nextSibling;
            for (; _ && _(_);) {
              if (_.contentEditable == `false`) {
                _.parentNode.removeChild(_);
                break;
              }
              _ = _.firstChild;
            }
          }
      } else if (_ && _.length) {
        let _ = _.filter((_) => _.nodeName == `BR`);
        if (_.length == 2) {
          let [_, _] = _;
          _.parentNode && _.parentNode.parentNode == _.parentNode
            ? _.remove()
            : _.remove();
        } else {
          let { focusNode: _ } = this.currentSelection;
          for (let _ of _) {
            let _ = _.parentNode;
            _ && _.nodeName == `LI` && (!_ || _(_, _) != _) && _.remove();
          }
        }
      }
      let _ = null;
      _ < 0 &&
      _ &&
      _.input.lastFocus > Date.now() - 200 &&
      Math.max(_.input.lastTouch, _.input.lastClick.time) < Date.now() - 300 &&
      _(_) &&
      (_ = _(_)) &&
      _._(_.near(_.state.doc.resolve(0), 1))
        ? ((_.input.lastFocus = 0),
          _(_),
          this.currentSelection.set(_),
          _.scrollToSelection())
        : (_ > -1 || _) &&
          (_ > -1 && (_.docView.markDirty(_, _), _(_)),
          _.input.badSafariComposition &&
            ((_.input.badSafariComposition = !1), _(_, _)),
          this.handleDOMChange(_, _, _, _),
          _.docView && _.docView.dirty
            ? _.updateState(_.state)
            : _ && !this.currentSelection._(_) && _(_),
          _ && this.currentSelection.set(_));
    }
    registerMutation(_, _) {
      if (_.indexOf(_.target) > -1) return null;
      let _ = this.view.docView.nearestDesc(_.target);
      if (
        (_.type == `attributes` &&
          (_ == this.view.docView ||
            _.attributeName == `contenteditable` ||
            (_.attributeName == `style` &&
              !_.oldValue &&
              !_.target.getAttribute(`style`)))) ||
        !_ ||
        _.ignoreMutation(_)
      )
        return null;
      if (_.type == `childList`) {
        for (let _ = 0; _ < _.addedNodes.length; _++) {
          let _ = _.addedNodes[_];
          (_.push(_), _(_) && (this.lastChangedTextNode = _));
        }
        if (
          _.contentDOM &&
          _.contentDOM != _.dom &&
          !_.contentDOM.contains(_.target)
        )
          return {
            from: _.posBefore,
            _: _.posAfter,
          };
        let _ = _.previousSibling,
          _ = _.nextSibling;
        if (_ && _ <= 11 && _.addedNodes.length)
          for (let _ = 0; _ < _.addedNodes.length; _++) {
            let { previousSibling: _, nextSibling: _ } = _.addedNodes[_];
            ((!_ || Array.prototype.indexOf.call(_.addedNodes, _) < 0) &&
              (_ = _),
              (!_ || Array.prototype.indexOf.call(_.addedNodes, _) < 0) &&
                (_ = _));
          }
        let _ = _ && _.parentNode == _.target ? _(_) + 1 : 0,
          _ = _.localPosFromDOM(_.target, _, -1),
          _ = _ && _.parentNode == _.target ? _(_) : _.target.childNodes.length;
        return {
          from: _,
          _: _.localPosFromDOM(_.target, _, 1),
        };
      }
      return _.type == `attributes`
        ? {
            from: _.posAtStart - _.border,
            _: _.posAtEnd + _.border,
          }
        : ((this.lastChangedTextNode = _.target),
          {
            from: _.posAtStart,
            _: _.posAtEnd,
            typeOver: _.target.nodeValue == _.oldValue,
          });
    }
  },
  _ = new WeakMap(),
  _ = !1;
function _(_) {
  if (
    !_.has(_) &&
    (_.set(_, null),
    [`normal`, `nowrap`, `pre-line`].indexOf(
      getComputedStyle(_.dom).whiteSpace,
    ) !== -1)
  ) {
    if (((_.requiresGeckoHackNode = _), _)) return;
    (console.warn(
      `ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.`,
    ),
      (_ = !0));
  }
}
function _(_, _) {
  let _ = _.startContainer,
    _ = _.startOffset,
    _ = _.endContainer,
    _ = _.endOffset,
    _ = _.domAtPos(_.state.selection.anchor);
  return (
    _(_.node, _.offset, _, _) && ([_, _, _, _] = [_, _, _, _]),
    {
      anchorNode: _,
      anchorOffset: _,
      focusNode: _,
      focusOffset: _,
    }
  );
}
function _(_, _) {
  if (_.getComposedRanges) {
    let _ = _.getComposedRanges(_.root)[0];
    if (_) return _(_, _);
  }
  let _;
  function _(_) {
    (_.preventDefault(),
      _.stopImmediatePropagation(),
      (_ = _.getTargetRanges()[0]));
  }
  return (
    _.dom.addEventListener(`beforeinput`, _, !0),
    document.execCommand(`indent`),
    _.dom.removeEventListener(`beforeinput`, _, !0),
    _ ? _(_, _) : null
  );
}
function _(_, _) {
  for (let _ = _.parentNode; _ && _ != _.dom; _ = _.parentNode) {
    let _ = _.docView.nearestDesc(_, !0);
    if (_ && _.node.isBlock) return _;
  }
  return null;
}
function _(_, _) {
  let { focusNode: _, focusOffset: _ } = _.domSelectionRange();
  for (let _ of _)
    if (_.parentNode?.nodeName == `TR`) {
      let _ = _.nextSibling;
      for (; _ && _.nodeName != `TD` && _.nodeName != `TH`;) _ = _.nextSibling;
      if (_) {
        let _ = _;
        for (;;) {
          let _ = _.firstChild;
          if (
            !_ ||
            !_(_) ||
            _.contentEditable == `false` ||
            /^(BR|IMG)$/.test(_.nodeName)
          )
            break;
          _ = _;
        }
        (_.insertBefore(_, _.firstChild),
          _ == _ && _.domSelection().collapse(_, _));
      } else _.parentNode.removeChild(_);
    }
}
function _(_, _, _, _) {
  let {
      node: _,
      fromOffset: _,
      toOffset: _,
      from: _,
      _: _,
    } = _.docView.parseRange(_, _),
    _ = _.domSelectionRange(),
    _,
    _ = _.anchorNode;
  if (
    (_ &&
      _(_.dom, _) &&
      ((_ = [
        {
          node: _,
          offset: _.anchorOffset,
        },
      ]),
      _(_) ||
        _.push({
          node: _.focusNode,
          offset: _.focusOffset,
        })),
    _ && _.input.lastKeyCode === 8)
  )
    for (let _ = _; _ > _; _--) {
      let _ = _.childNodes[_ - 1],
        _ = _.pmViewDesc;
      if (_.nodeName == `BR` && !_) {
        _ = _;
        break;
      }
      if (!_ || _.size) break;
    }
  let _ = _.state.doc,
    _ = _.someProp(`domParser`) || _.fromSchema(_.state.schema),
    _ = _.resolve(_),
    _ = null,
    _ = _.parse(_, {
      topNode: _.parent,
      topMatch: _.parent.contentMatchAt(_.index()),
      topOpen: !0,
      from: _,
      _: _,
      preserveWhitespace: _.parent.type.whitespace != `pre` || `full`,
      findPositions: _,
      ruleFromNode: _(_),
      context: _,
    });
  if (_ && _[0].pos != null) {
    let _ = _[0].pos,
      _ = _[1] && _[1].pos;
    ((_ ??= _),
      (_ = {
        anchor: _ + _,
        head: _ + _,
      }));
  }
  return {
    doc: _,
    sel: _,
    from: _,
    _: _,
  };
}
var _ = (_) => (_) => {
    let _ = _.pmViewDesc;
    if (_) return _.parseRule(_);
    if (_.nodeName == `BR` && _.parentNode) {
      if (_ && /^(ul|ol)$/i.test(_.parentNode.nodeName)) {
        let _ = document.createElement(`div`);
        return (
          _.appendChild(document.createElement(`li`)),
          {
            skip: _,
          }
        );
      }
      if (
        _.parentNode.lastChild == _ ||
        (_ && /^(tr|table)$/i.test(_.parentNode.nodeName))
      )
        return {
          ignore: !0,
        };
    } else if (_.nodeName == `IMG` && _.getAttribute(`mark-placeholder`))
      return {
        ignore: !0,
      };
    return null;
  },
  _ =
    /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function _(_, _, _, _, _) {
  let _ =
    _.input.compositionPendingChanges ||
    (_.composing ? _.input.compositionID : 0);
  if (((_.input.compositionPendingChanges = 0), _ < 0)) {
    let _ =
        _.input.lastSelectionTime > Date.now() - 50
          ? _.input.lastSelectionOrigin
          : null,
      _ = _(_, _);
    if (_ && !_.state.selection._(_)) {
      if (
        _ &&
        _ &&
        _.input.lastKeyCode === 13 &&
        Date.now() - 100 < _.input.lastKeyCodeTime &&
        _.someProp(`handleKeyDown`, (_) => _(_, _(13, `Enter`)))
      )
        return;
      let _ = _.state._.setSelection(_);
      (_ == `pointer`
        ? _.setMeta(`pointer`, !0)
        : _ == `key` && _.scrollIntoView(),
        _ && _.setMeta(`composition`, _),
        _.dispatch(_));
    }
    return;
  }
  let _ = _.state.doc.resolve(_),
    _ = _.sharedDepth(_);
  ((_ = _.before(_ + 1)), (_ = _.state.doc.resolve(_).after(_ + 1)));
  let _ = _.state.selection,
    _ = _(_, _, _, _),
    _ = _.state.doc,
    _ = _.slice(_.from, _._),
    _,
    _;
  (_.input.lastKeyCode === 8 && Date.now() - 100 < _.input.lastKeyCodeTime
    ? ((_ = _.state.selection._), (_ = `end`))
    : ((_ = _.state.selection.from), (_ = `start`)),
    (_.input.lastKeyCode = null));
  let _ = _(_.content, _.doc.content, _.from, _, _);
  if (
    (_ && _.input.domChangeCount++,
    ((_ && _.input.lastIOSEnter > Date.now() - 225) || _) &&
      _.some((_) => _(_) && !_.test(_.nodeName)) &&
      (!_ || _.endA >= _.endB) &&
      _.someProp(`handleKeyDown`, (_) => _(_, _(13, `Enter`))))
  ) {
    _.input.lastIOSEnter = 0;
    return;
  }
  if (!_) {
    if (
      _ &&
      _ instanceof _ &&
      !_.empty &&
      _.$head.sameParent(_.$anchor) &&
      !_.composing &&
      !(_.sel && _.sel.anchor != _.sel.head)
    )
      _ = {
        start: _.from,
        endA: _._,
        endB: _._,
      };
    else {
      if (_.sel) {
        let _ = _(_, _.state.doc, _.sel);
        if (_ && !_._(_.state.selection)) {
          let _ = _.state._.setSelection(_);
          (_ && _.setMeta(`composition`, _), _.dispatch(_));
        }
      }
      return;
    }
  }
  (_.state.selection.from < _.state.selection._ &&
    _.start == _.endB &&
    _.state.selection instanceof _ &&
    (_.start > _.state.selection.from &&
    _.start <= _.state.selection.from + 2 &&
    _.state.selection.from >= _.from
      ? (_.start = _.state.selection.from)
      : _.endA < _.state.selection._ &&
        _.endA >= _.state.selection._ - 2 &&
        _.state.selection._ <= _._ &&
        ((_.endB += _.state.selection._ - _.endA),
        (_.endA = _.state.selection._))),
    _ &&
      _ <= 11 &&
      _.endB == _.start + 1 &&
      _.endA == _.start &&
      _.start > _.from &&
      _.doc.textBetween(_.start - _.from - 1, _.start - _.from + 1) ==
        ` \xA0` &&
      (_.start--, _.endA--, _.endB--));
  let _ = _.doc.resolveNoCache(_.start - _.from),
    _ = _.doc.resolveNoCache(_.endB - _.from),
    _ = _.resolve(_.start),
    _ = _.sameParent(_) && _.parent.inlineContent && _.end() >= _.endA;
  if (
    ((_ &&
      _.input.lastIOSEnter > Date.now() - 225 &&
      (!_ || _.some((_) => _.nodeName == `DIV` || _.nodeName == `P`))) ||
      (!_ && _(_.doc, _.pos, _.pos))) &&
    _.someProp(`handleKeyDown`, (_) => _(_, _(13, `Enter`)))
  ) {
    _.input.lastIOSEnter = 0;
    return;
  }
  if (
    _.state.selection.anchor > _.start &&
    (_ ? _.endA > _.start && _.endB == _.start : _(_, _.start, _.endA, _, _)) &&
    _.someProp(`handleKeyDown`, (_) => _(_, _(8, `Backspace`)))
  ) {
    _ && _ && _.domObserver.suppressSelectionUpdates();
    return;
  }
  (_ && _.endB == _.start && (_.input.lastChromeDelete = Date.now()),
    _ &&
      !_ &&
      _.start() != _.start() &&
      _.parentOffset == 0 &&
      _.depth == _.depth &&
      _.sel &&
      _.sel.anchor == _.sel.head &&
      _.sel.head == _.endA &&
      ((_.endB -= 2),
      (_ = _.doc.resolveNoCache(_.endB - _.from)),
      setTimeout(() => {
        _.someProp(`handleKeyDown`, function (_) {
          return _(_, _(13, `Enter`));
        });
      }, 20)));
  let _ = _.start,
    _ = _.endA,
    _ = (_) => {
      let _ =
        _ ||
        _.state._.replace(_, _, _.doc.slice(_.start - _.from, _.endB - _.from));
      if (_.sel) {
        let _ = _(_, _.doc, _.sel);
        _ &&
          !(
            (_ &&
              _.composing &&
              _.empty &&
              (_.start != _.endB ||
                _.input.lastChromeDelete < Date.now() - 100) &&
              (_.head == _ || _.head == _.mapping.map(_) - 1)) ||
            (_ && _.empty && _.head == _)
          ) &&
          _.setSelection(_);
      }
      return (_ && _.setMeta(`composition`, _), _.scrollIntoView());
    },
    _;
  if (_) {
    if (_.pos == _.pos) {
      _ &&
        _ <= 11 &&
        _.parentOffset == 0 &&
        (_.domObserver.suppressSelectionUpdates(), setTimeout(() => _(_), 20));
      let _ = _(_.state._.delete(_, _)),
        _ = _.resolve(_.start).marksAcross(_.resolve(_.endA));
      (_ && _.ensureMarks(_), _.dispatch(_));
    } else if (
      _.endA == _.endB &&
      (_ = _(
        _.parent.content.cut(_.parentOffset, _.parentOffset),
        _.parent.content.cut(_.parentOffset, _.endA - _.start()),
      ))
    ) {
      let _ = _(_.state._);
      (_.type == `add` ? _.addMark(_, _, _.mark) : _.removeMark(_, _, _.mark),
        _.dispatch(_));
    } else if (
      _.parent.child(_.index()).isText &&
      _.index() == _.index() - +!_.textOffset
    ) {
      let _ = _.parent.textBetween(_.parentOffset, _.parentOffset),
        _ = () => _(_.state._.insertText(_, _, _));
      _.someProp(`handleTextInput`, (_) => _(_, _, _, _, _)) || _.dispatch(_());
    } else _.dispatch(_());
  } else _.dispatch(_());
}
function _(_, _, _) {
  return Math.max(_.anchor, _.head) > _.content.size
    ? null
    : _(_, _.resolve(_.anchor), _.resolve(_.head));
}
function _(_, _) {
  let _ = _.firstChild.marks,
    _ = _.firstChild.marks,
    _ = _,
    _ = _,
    _,
    _,
    _;
  for (let _ = 0; _ < _.length; _++) _ = _[_].removeFromSet(_);
  for (let _ = 0; _ < _.length; _++) _ = _[_].removeFromSet(_);
  if (_.length == 1 && _.length == 0)
    ((_ = _[0]), (_ = `add`), (_ = (_) => _.mark(_.addToSet(_.marks))));
  else if (_.length == 0 && _.length == 1)
    ((_ = _[0]), (_ = `remove`), (_ = (_) => _.mark(_.removeFromSet(_.marks))));
  else return null;
  let _ = [];
  for (let _ = 0; _ < _.childCount; _++) _.push(_(_.child(_)));
  if (_.from(_)._(_))
    return {
      mark: _,
      type: _,
    };
}
function _(_, _, _, _, _) {
  if (_ - _ <= _.pos - _.pos || _(_, !0, !1) < _.pos) return !1;
  let _ = _.resolve(_);
  if (!_.parent.inlineContent) {
    let _ = _.nodeAfter;
    return _ != null && _ == _ + _.nodeSize;
  }
  if (_.parentOffset < _.parent.content.size || !_.parent.isTextblock)
    return !1;
  let _ = _.resolve(_(_, !0, !0));
  return !_.parent.isTextblock || _.pos > _ || _(_, !0, !1) < _
    ? !1
    : _.parent.content.cut(_.parentOffset)._(_.parent.content);
}
function _(_, _, _) {
  let _ = 0,
    _ = 0;
  return (
    _.nodesBetween(_, _, (_, _) => {
      _.isTextblock && _ >= _ && _ < _
        ? _++
        : (_.isText
            ? /\S/.test(
                _.text.slice(Math.max(0, _ - _), Math.min(_.nodeSize, _ - _)),
              )
            : _.isLeaf) && _++;
    }),
    _ == 0 && _ == 1
  );
}
function _(_, _, _) {
  let _ = _.depth,
    _ = _ ? _.end() : _.pos;
  for (; _ > 0 && (_ || _.indexAfter(_) == _.node(_).childCount);)
    (_--, _++, (_ = !1));
  if (_) {
    let _ = _.node(_).maybeChild(_.indexAfter(_));
    for (; _ && !_.isLeaf;) ((_ = _.firstChild), _++);
  }
  return _;
}
function _(_, _, _, _, _) {
  let _ = _.findDiffStart(_, _),
    _ = _ + _.size,
    _ = _ + _.size;
  if (_ == null) return null;
  let { _: _, _: _ } = _.findDiffEnd(_, _, _);
  if (_ == `end`) {
    let _ = Math.max(0, _ - Math.min(_, _));
    _ -= _ + _ - _;
  }
  if (_ < _ && _ < _) {
    let _ = _ <= _ && _ >= _ ? _ - _ : 0;
    ((_ -= _), (_ = _ + (_ - _)), (_ = _));
  } else if (_ < _) {
    let _ = _ <= _ && _ >= _ ? _ - _ : 0;
    ((_ -= _), (_ = _ + (_ - _)), (_ = _));
  }
  return {
    start: _,
    endA: _,
    endB: _,
  };
}
var _ = class {
  constructor(_, _) {
    ((this._root = null),
      (this.focused = !1),
      (this.trackWrites = null),
      (this.mounted = !1),
      (this.markCursor = null),
      (this.cursorWrapper = null),
      (this.lastSelectedViewDesc = void 0),
      (this.input = new _()),
      (this.prevDirectPlugins = []),
      (this.pluginViews = []),
      (this.requiresGeckoHackNode = !1),
      (this.dragging = null),
      (this._props = _),
      (this.state = _.state),
      (this.directPlugins = _.plugins || []),
      this.directPlugins.forEach(_),
      (this.dispatch = this.dispatch.bind(this)),
      (this.dom = (_ && _.mount) || document.createElement(`div`)),
      _ &&
        (_.appendChild
          ? _.appendChild(this.dom)
          : typeof _ == `function`
            ? _(this.dom)
            : _.mount && (this.mounted = !0)),
      (this.editable = _(this)),
      _(this),
      (this.nodeViews = _(this)),
      (this.docView = _(this.state.doc, _(this), _(this), this.dom, this)),
      (this.domObserver = new _(this, (_, _, _, _) => _(this, _, _, _, _))),
      this.domObserver.start(),
      _(this),
      this.updatePluginViews());
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let _ = this._props;
      this._props = {};
      for (let _ in _) this._props[_] = _[_];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(_) {
    _.handleDOMEvents != this._props.handleDOMEvents && _(this);
    let _ = this._props;
    ((this._props = _),
      _.plugins && (_.plugins.forEach(_), (this.directPlugins = _.plugins)),
      this.updateStateInner(_.state, _));
  }
  setProps(_) {
    let _ = {};
    for (let _ in this._props) _[_] = this._props[_];
    _.state = this.state;
    for (let _ in _) _[_] = _[_];
    this.update(_);
  }
  updateState(_) {
    this.updateStateInner(_, this._props);
  }
  updateStateInner(_, _) {
    let _ = this.state,
      _ = !1,
      _ = !1;
    (_.storedMarks && this.composing && (_(this), (_ = !0)), (this.state = _));
    let _ = _.plugins != _.plugins || this._props.plugins != _.plugins;
    if (
      _ ||
      this._props.plugins != _.plugins ||
      this._props.nodeViews != _.nodeViews
    ) {
      let _ = _(this);
      _(_, this.nodeViews) && ((this.nodeViews = _), (_ = !0));
    }
    ((_ || _.handleDOMEvents != this._props.handleDOMEvents) && _(this),
      (this.editable = _(this)),
      _(this));
    let _ = _(this),
      _ = _(this),
      _ =
        _.plugins != _.plugins && !_.doc._(_.doc)
          ? `reset`
          : _.scrollToSelection > _.scrollToSelection
            ? `to selection`
            : `preserve`,
      _ = _ || !this.docView.matchesNode(_.doc, _, _);
    (_ || !_.selection._(_.selection)) && (_ = !0);
    let _ =
      _ == `preserve` && _ && this.dom.style.overflowAnchor == null && _(this);
    if (_) {
      this.domObserver.stop();
      let _ =
        _ &&
        (_ || _) &&
        !this.composing &&
        !_.selection.empty &&
        !_.selection.empty &&
        _(_.selection, _.selection);
      if (_) {
        let _ = _
          ? (this.trackWrites = this.domSelectionRange().focusNode)
          : null;
        (this.composing && (this.input.compositionNode = _(this)),
          (_ || !this.docView.update(_.doc, _, _, this)) &&
            (this.docView.updateOuterDeco(_),
            this.docView.destroy(),
            (this.docView = _(_.doc, _, _, this.dom, this))),
          !_ ||
            (this.trackWrites && this.dom.contains(this.trackWrites)) ||
            (_ = !0));
      }
      let _ = this.input.mouseDown;
      (_ ||
      !(
        _ &&
        this.domObserver.currentSelection._(this.domSelectionRange()) &&
        _(this) &&
        _.delaySelUpdate()
      )
        ? _(this, _)
        : (_(this, _.selection), this.domObserver.setCurSelection()),
        this.domObserver.start());
    }
    (this.updatePluginViews(_),
      this.dragging?.node &&
        !_.doc._(_.doc) &&
        this.updateDraggedNode(this.dragging, _),
      _ == `reset`
        ? (this.dom.scrollTop = 0)
        : _ == `to selection`
          ? this.scrollToSelection()
          : _ && _(_));
  }
  scrollToSelection() {
    let _ = this.domSelectionRange().focusNode;
    if (
      _ &&
      _(this.dom, _) &&
      !this.someProp(`handleScrollToSelection`, (_) => _(this))
    ) {
      if (this.state.selection instanceof _) {
        let _ = this.docView.domAfterPos(this.state.selection.from);
        _(_) && _(this, _.getBoundingClientRect(), _);
      } else _(this, this.coordsAtPos(this.state.selection.head, 1), _);
    }
  }
  destroyPluginViews() {
    let _;
    for (; (_ = this.pluginViews.pop());) _.destroy && _.destroy();
  }
  updatePluginViews(_) {
    if (
      !_ ||
      _.plugins != this.state.plugins ||
      this.directPlugins != this.prevDirectPlugins
    ) {
      ((this.prevDirectPlugins = this.directPlugins),
        this.destroyPluginViews());
      for (let _ = 0; _ < this.directPlugins.length; _++) {
        let _ = this.directPlugins[_];
        _.spec.view && this.pluginViews.push(_.spec.view(this));
      }
      for (let _ = 0; _ < this.state.plugins.length; _++) {
        let _ = this.state.plugins[_];
        _.spec.view && this.pluginViews.push(_.spec.view(this));
      }
    } else
      for (let _ = 0; _ < this.pluginViews.length; _++) {
        let _ = this.pluginViews[_];
        _.update && _.update(this, _);
      }
  }
  updateDraggedNode(_, _) {
    let _ = _.node,
      _ = -1;
    if (
      _.from < this.state.doc.content.size &&
      this.state.doc.nodeAt(_.from) == _.node
    )
      _ = _.from;
    else {
      let _ = _.from + (this.state.doc.content.size - _.doc.content.size);
      (_ > 0 && _ < this.state.doc.content.size && this.state.doc.nodeAt(_)) ==
        _.node && (_ = _);
    }
    this.dragging = new _(
      _.slice,
      _.move,
      _ < 0 ? void 0 : _.create(this.state.doc, _),
    );
  }
  someProp(_, _) {
    let _ = this._props && this._props[_],
      _;
    if (_ != null && (_ = _ ? _(_) : _)) return _;
    for (let _ = 0; _ < this.directPlugins.length; _++) {
      let _ = this.directPlugins[_].props[_];
      if (_ != null && (_ = _ ? _(_) : _)) return _;
    }
    let _ = this.state.plugins;
    if (_)
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_].props[_];
        if (_ != null && (_ = _ ? _(_) : _)) return _;
      }
  }
  hasFocus() {
    if (_) {
      let _ = this.root.activeElement;
      if (_ == this.dom) return !0;
      if (!_ || !this.dom.contains(_)) return !1;
      for (; _ && this.dom != _ && this.dom.contains(_);) {
        if (_.contentEditable == `false`) return !1;
        _ = _.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    (this.domObserver.stop(),
      this.editable && _(this.dom),
      _(this),
      this.domObserver.start());
  }
  get root() {
    let _ = this._root;
    if (_ == null) {
      for (let _ = this.dom.parentNode; _; _ = _.parentNode)
        if (_.nodeType == 9 || (_.nodeType == 11 && _.host))
          return (
            _.getSelection ||
              (Object.getPrototypeOf(_).getSelection = () =>
                _.ownerDocument.getSelection()),
            (this._root = _)
          );
    }
    return _ || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(_) {
    return _(this, _);
  }
  coordsAtPos(_, _ = 1) {
    return _(this, _, _);
  }
  domAtPos(_, _ = 0) {
    return this.docView.domFromPos(_, _);
  }
  nodeDOM(_) {
    let _ = this.docView.descAt(_);
    return _ ? _.nodeDOM : null;
  }
  posAtDOM(_, _, _ = -1) {
    let _ = this.docView.posFromDOM(_, _, _);
    if (_ == null) throw RangeError(`DOM position not inside the editor`);
    return _;
  }
  endOfTextblock(_, _) {
    return _(this, _ || this.state, _);
  }
  pasteHTML(_, _) {
    return _(this, ``, _, !1, _ || new ClipboardEvent(`paste`));
  }
  pasteText(_, _) {
    return _(this, _, null, !0, _ || new ClipboardEvent(`paste`));
  }
  serializeForClipboard(_) {
    return _(this, _);
  }
  destroy() {
    this.docView &&
      (_(this),
      this.destroyPluginViews(),
      this.mounted
        ? (this.docView.update(this.state.doc, [], _(this), this),
          (this.dom.textContent = ``))
        : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
      this.docView.destroy(),
      (this.docView = null),
      _());
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(_) {
    return _(this, _);
  }
  domSelectionRange() {
    let _ = this.dom.isConnected !== !1 && this.domSelection();
    return _
      ? (_ &&
          this.root.nodeType === 11 &&
          _(this.dom.ownerDocument) == this.dom &&
          _(this, _)) ||
          _
      : {
          focusNode: null,
          focusOffset: 0,
          anchorNode: null,
          anchorOffset: 0,
        };
  }
  domSelection() {
    return this.root.getSelection();
  }
};
_.prototype.dispatch = function (_) {
  let _ = this._props.dispatchTransaction;
  _ ? _.call(this, _) : this.updateState(this.state.apply(_));
};
function _(_) {
  let _ = Object.create(null);
  return (
    (_.class = `ProseMirror`),
    (_.contenteditable = String(_.editable)),
    _.someProp(`attributes`, (_) => {
      if ((typeof _ == `function` && (_ = _(_.state)), _))
        for (let _ in _)
          _ == `class`
            ? (_.class += ` ` + _[_])
            : _ == `style`
              ? (_.style = (_.style ? _.style + `;` : ``) + _[_])
              : !_[_] &&
                _ != `contenteditable` &&
                _ != `nodeName` &&
                (_[_] = String(_[_]));
    }),
    (_.translate ||= `no`),
    [_.node(0, _.state.doc.content.size, _)]
  );
}
function _(_) {
  if (_.markCursor) {
    let _ = document.createElement(`img`);
    ((_.className = `ProseMirror-separator`),
      _.setAttribute(`mark-placeholder`, `true`),
      _.setAttribute(`alt`, ``),
      (_.cursorWrapper = {
        dom: _,
        deco: _.widget(_.state.selection.from, _, {
          raw: !0,
          marks: _.markCursor,
        }),
      }));
  } else _.cursorWrapper = null;
}
function _(_) {
  return !_.someProp(`editable`, (_) => _(_.state) === !1);
}
function _(_, _) {
  let _ = Math.min(
    _.$anchor.sharedDepth(_.head),
    _.$anchor.sharedDepth(_.head),
  );
  return _.$anchor.start(_) != _.$anchor.start(_);
}
function _(_) {
  let _ = Object.create(null);
  function _(_) {
    for (let _ in _)
      Object.prototype.hasOwnProperty.call(_, _) || (_[_] = _[_]);
  }
  return (_.someProp(`nodeViews`, _), _.someProp(`markViews`, _), _);
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  for (let _ in _) {
    if (_[_] != _[_]) return !0;
    _++;
  }
  for (let _ in _) _++;
  return _ != _;
}
function _(_) {
  if (_.spec.state || _.spec.filterTransaction || _.spec.appendTransaction)
    throw RangeError(
      `Plugins passed directly to the view must not have a state component`,
    );
}
for (
  var _ = {
      8: `Backspace`,
      9: `Tab`,
      10: `Enter`,
      12: `NumLock`,
      13: `Enter`,
      16: `Shift`,
      17: `Control`,
      18: `Alt`,
      20: `CapsLock`,
      27: `Escape`,
      32: ` `,
      33: `PageUp`,
      34: `PageDown`,
      35: `End`,
      36: `Home`,
      37: `ArrowLeft`,
      38: `ArrowUp`,
      39: `ArrowRight`,
      40: `ArrowDown`,
      44: `PrintScreen`,
      45: `Insert`,
      46: `Delete`,
      59: `;`,
      61: `=`,
      91: `Meta`,
      92: `Meta`,
      106: `*`,
      107: `+`,
      108: `,`,
      109: `-`,
      110: `.`,
      111: `/`,
      144: `NumLock`,
      145: `ScrollLock`,
      160: `Shift`,
      161: `Shift`,
      162: `Control`,
      163: `Control`,
      164: `Alt`,
      165: `Alt`,
      173: `-`,
      186: `;`,
      187: `=`,
      188: `,`,
      189: `-`,
      190: `.`,
      191: `/`,
      192: "`",
      219: `[`,
      220: `\\`,
      221: `]`,
      222: `'`,
    },
    _ = {
      48: `)`,
      49: `!`,
      50: `@`,
      51: `#`,
      52: `$`,
      53: `%`,
      54: `^`,
      55: `&`,
      56: `*`,
      57: `(`,
      59: `:`,
      61: `+`,
      173: `_`,
      186: `:`,
      187: `+`,
      188: `<`,
      189: `_`,
      190: `>`,
      191: `?`,
      192: `~`,
      219: `{`,
      220: `|`,
      221: `}`,
      222: `"`,
    },
    _ = typeof navigator < `u` && /Mac/.test(navigator.platform),
    _ =
      typeof navigator < `u` &&
      /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
    _ = 0;
  _ < 10;
  _++
)
  _[48 + _] = _[96 + _] = String(_);
for (var _ = 1; _ <= 24; _++) _[_ + 111] = `F` + _;
for (var _ = 65; _ <= 90; _++)
  ((_[_] = String.fromCharCode(_ + 32)), (_[_] = String.fromCharCode(_)));
for (var _ in _) _.hasOwnProperty(_) || (_[_] = _[_]);
function _(_) {
  var _ =
    (!(
      (_ && _.metaKey && _.shiftKey && !_.ctrlKey && !_.altKey) ||
      (_ && _.shiftKey && _.key && _.key.length == 1) ||
      _.key == `Unidentified`
    ) &&
      _.key) ||
    (_.shiftKey ? _ : _)[_.keyCode] ||
    _.key ||
    `Unidentified`;
  return (
    _ == `Esc` && (_ = `Escape`),
    _ == `Del` && (_ = `Delete`),
    _ == `Left` && (_ = `ArrowLeft`),
    _ == `Up` && (_ = `ArrowUp`),
    _ == `Right` && (_ = `ArrowRight`),
    _ == `Down` && (_ = `ArrowDown`),
    _
  );
}
var _ = typeof navigator < `u` && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
function _(_) {
  let _ = _.split(/-(?!$)/),
    _ = _[_.length - 1];
  _ == `Space` && (_ = ` `);
  let _, _, _, _;
  for (let _ = 0; _ < _.length - 1; _++) {
    let _ = _[_];
    if (/^(cmd|meta|m)$/i.test(_)) _ = !0;
    else if (/^a(lt)?$/i.test(_)) _ = !0;
    else if (/^(c|ctrl|control)$/i.test(_)) _ = !0;
    else if (/^s(hift)?$/i.test(_)) _ = !0;
    else if (/^mod$/i.test(_)) _ ? (_ = !0) : (_ = !0);
    else throw Error(`Unrecognized modifier name: ` + _);
  }
  return (
    _ && (_ = `Alt-` + _),
    _ && (_ = `Ctrl-` + _),
    _ && (_ = `Meta-` + _),
    _ && (_ = `Shift-` + _),
    _
  );
}
function _(_) {
  let _ = Object.create(null);
  for (let _ in _) _[_(_)] = _[_];
  return _;
}
function _(_, _, _ = !0) {
  return (
    _.altKey && (_ = `Alt-` + _),
    _.ctrlKey && (_ = `Ctrl-` + _),
    _.metaKey && (_ = `Meta-` + _),
    _ && _.shiftKey && (_ = `Shift-` + _),
    _
  );
}
function _(_) {
  return new _({
    props: {
      handleKeyDown: _(_),
    },
  });
}
function _(_) {
  let _ = _(_);
  return function (_, _) {
    let _ = _(_),
      _,
      _ = _[_(_, _)];
    if (_ && _(_.state, _.dispatch, _)) return !0;
    if (_.length == 1 && _ != ` `) {
      if (_.shiftKey) {
        let _ = _[_(_, _, !1)];
        if (_ && _(_.state, _.dispatch, _)) return !0;
      }
      if (
        (_.shiftKey || _.altKey || _.metaKey || _.charCodeAt(0) > 127) &&
        (_ = _[_.keyCode]) &&
        _ != _
      ) {
        let _ = _[_(_, _)];
        if (_ && _(_.state, _.dispatch, _)) return !0;
      }
    }
    return !1;
  };
}
var _, _;
if (typeof WeakMap < `u`) {
  let _ = new WeakMap();
  ((_ = (_) => _.get(_)), (_ = (_, _) => (_.set(_, _), _)));
} else {
  let _ = [],
    _ = 0;
  ((_ = (_) => {
    for (let _ = 0; _ < _.length; _ += 2) if (_[_] == _) return _[_ + 1];
  }),
    (_ = (_, _) => (_ == 10 && (_ = 0), (_[_++] = _), (_[_++] = _))));
}
var _ = class {
  constructor(_, _, _, _) {
    ((this.width = _), (this.height = _), (this.map = _), (this.problems = _));
  }
  findCell(_) {
    for (let _ = 0; _ < this.map.length; _++) {
      let _ = this.map[_];
      if (_ != _) continue;
      let _ = _ % this.width,
        _ = (_ / this.width) | 0,
        _ = _ + 1,
        _ = _ + 1;
      for (let _ = 1; _ < this.width && this.map[_ + _] == _; _++) _++;
      for (let _ = 1; _ < this.height && this.map[_ + this.width * _] == _; _++)
        _++;
      return {
        left: _,
        top: _,
        right: _,
        bottom: _,
      };
    }
    throw RangeError(`No cell with offset ${_} found`);
  }
  colCount(_) {
    for (let _ = 0; _ < this.map.length; _++)
      if (this.map[_] == _) return _ % this.width;
    throw RangeError(`No cell with offset ${_} found`);
  }
  nextCell(_, _, _) {
    let { left: _, right: _, top: _, bottom: _ } = this.findCell(_);
    return _ == `horiz`
      ? (_ < 0 ? _ == 0 : _ == this.width)
        ? null
        : this.map[_ * this.width + (_ < 0 ? _ - 1 : _)]
      : (_ < 0 ? _ == 0 : _ == this.height)
        ? null
        : this.map[_ + this.width * (_ < 0 ? _ - 1 : _)];
  }
  rectBetween(_, _) {
    let { left: _, right: _, top: _, bottom: _ } = this.findCell(_),
      { left: _, right: _, top: _, bottom: _ } = this.findCell(_);
    return {
      left: Math.min(_, _),
      top: Math.min(_, _),
      right: Math.max(_, _),
      bottom: Math.max(_, _),
    };
  }
  cellsInRect(_) {
    let _ = [],
      _ = {};
    for (let _ = _.top; _ < _.bottom; _++)
      for (let _ = _.left; _ < _.right; _++) {
        let _ = _ * this.width + _,
          _ = this.map[_];
        _[_] ||
          ((_[_] = !0),
          !(
            (_ == _.left && _ && this.map[_ - 1] == _) ||
            (_ == _.top && _ && this.map[_ - this.width] == _)
          ) && _.push(_));
      }
    return _;
  }
  positionAt(_, _, _) {
    for (let _ = 0, _ = 0; ; _++) {
      let _ = _ + _.child(_).nodeSize;
      if (_ == _) {
        let _ = _ + _ * this.width,
          _ = (_ + 1) * this.width;
        for (; _ < _ && this.map[_] < _;) _++;
        return _ == _ ? _ - 1 : this.map[_];
      }
      _ = _;
    }
  }
  static get(_) {
    return _(_) || _(_, _(_));
  }
};
function _(_) {
  if (_.type.spec.tableRole != `table`)
    throw RangeError(`Not a table node: ` + _.type.name);
  let _ = _(_),
    _ = _.childCount,
    _ = [],
    _ = 0,
    _ = null,
    _ = [];
  for (let _ = 0, _ = _ * _; _ < _; _++) _[_] = 0;
  for (let _ = 0, _ = 0; _ < _; _++) {
    let _ = _.child(_);
    _++;
    for (let _ = 0; ; _++) {
      for (; _ < _.length && _[_] != 0;) _++;
      if (_ == _.childCount) break;
      let _ = _.child(_),
        { colspan: _, rowspan: _, colwidth: _ } = _.attrs;
      for (let _ = 0; _ < _; _++) {
        if (_ + _ >= _) {
          (_ ||= []).push({
            type: `overlong_rowspan`,
            pos: _,
            _: _ - _,
          });
          break;
        }
        let _ = _ + _ * _;
        for (let _ = 0; _ < _; _++) {
          _[_ + _] == 0
            ? (_[_ + _] = _)
            : (_ ||= []).push({
                type: `collision`,
                row: _,
                pos: _,
                _: _ - _,
              });
          let _ = _ && _[_];
          if (_) {
            let _ = ((_ + _) % _) * 2,
              _ = _[_];
            _ == null || (_ != _ && _[_ + 1] == 1)
              ? ((_[_] = _), (_[_ + 1] = 1))
              : _ == _ && _[_ + 1]++;
          }
        }
      }
      ((_ += _), (_ += _.nodeSize));
    }
    let _ = (_ + 1) * _,
      _ = 0;
    for (; _ < _;) _[_++] == 0 && _++;
    (_ &&
      (_ ||= []).push({
        type: `missing`,
        row: _,
        _: _,
      }),
      _++);
  }
  (_ === 0 || _ === 0) &&
    (_ ||= []).push({
      type: `zero_sized`,
    });
  let _ = new _(_, _, _, _),
    _ = !1;
  for (let _ = 0; !_ && _ < _.length; _ += 2)
    _[_] != null && _[_ + 1] < _ && (_ = !0);
  return (_ && _(_, _, _), _);
}
function _(_) {
  let _ = -1,
    _ = !1;
  for (let _ = 0; _ < _.childCount; _++) {
    let _ = _.child(_),
      _ = 0;
    if (_)
      for (let _ = 0; _ < _; _++) {
        let _ = _.child(_);
        for (let _ = 0; _ < _.childCount; _++) {
          let _ = _.child(_);
          _ + _.attrs.rowspan > _ && (_ += _.attrs.colspan);
        }
      }
    for (let _ = 0; _ < _.childCount; _++) {
      let _ = _.child(_);
      ((_ += _.attrs.colspan), _.attrs.rowspan > 1 && (_ = !0));
    }
    _ == -1 ? (_ = _) : _ != _ && (_ = Math.max(_, _));
  }
  return _;
}
function _(_, _, _) {
  _.problems ||= [];
  let _ = {};
  for (let _ = 0; _ < _.map.length; _++) {
    let _ = _.map[_];
    if (_[_]) continue;
    _[_] = !0;
    let _ = _.nodeAt(_);
    if (!_) throw RangeError(`No cell with offset ${_} found`);
    let _ = null,
      _ = _.attrs;
    for (let _ = 0; _ < _.colspan; _++) {
      let _ = _[((_ + _) % _.width) * 2];
      _ == null || (_.colwidth && _.colwidth[_] == _) || ((_ ||= _(_))[_] = _);
    }
    _ &&
      _.problems.unshift({
        type: `colwidth mismatch`,
        pos: _,
        colwidth: _,
      });
  }
}
function _(_) {
  if (_.colwidth) return _.colwidth.slice();
  let _ = [];
  for (let _ = 0; _ < _.colspan; _++) _.push(0);
  return _;
}
function _(_, _) {
  if (typeof _ == `string`) return {};
  let _ = _.getAttribute(`data-colwidth`),
    _ = _ && /^\d+(,\d+)*$/.test(_) ? _.split(`,`).map((_) => Number(_)) : null,
    _ = Number(_.getAttribute(`colspan`) || 1),
    _ = {
      colspan: _,
      rowspan: Number(_.getAttribute(`rowspan`) || 1),
      colwidth: _ && _.length == _ ? _ : null,
    };
  for (let _ in _) {
    let _ = _[_].getFromDOM,
      _ = _ && _(_);
    _ != null && (_[_] = _);
  }
  return _;
}
function _(_, _) {
  let _ = {};
  (_.attrs.colspan != 1 && (_.colspan = _.attrs.colspan),
    _.attrs.rowspan != 1 && (_.rowspan = _.attrs.rowspan),
    _.attrs.colwidth && (_[`data-colwidth`] = _.attrs.colwidth.join(`,`)));
  for (let _ in _) {
    let _ = _[_].setDOMAttr;
    _ && _(_.attrs[_], _);
  }
  return _;
}
function _(_) {
  let _ = _.cellAttributes || {},
    _ = {
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
      },
    };
  for (let _ in _)
    _[_] = {
      default: _[_].default,
    };
  return {
    table: {
      content: `table_row+`,
      tableRole: `table`,
      isolating: !0,
      group: _.tableGroup,
      parseDOM: [
        {
          tag: `table`,
        },
      ],
      toDOM() {
        return [`table`, [`tbody`, 0]];
      },
    },
    table_row: {
      content: `(table_cell | table_header)*`,
      tableRole: `row`,
      parseDOM: [
        {
          tag: `tr`,
        },
      ],
      toDOM() {
        return [`tr`, 0];
      },
    },
    table_cell: {
      content: _.cellContent,
      attrs: _,
      tableRole: `cell`,
      isolating: !0,
      parseDOM: [
        {
          tag: `td`,
          getAttrs: (_) => _(_, _),
        },
      ],
      toDOM(_) {
        return [`td`, _(_, _), 0];
      },
    },
    table_header: {
      content: _.cellContent,
      attrs: _,
      tableRole: `header_cell`,
      isolating: !0,
      parseDOM: [
        {
          tag: `th`,
          getAttrs: (_) => _(_, _),
        },
      ],
      toDOM(_) {
        return [`th`, _(_, _), 0];
      },
    },
  };
}
function _(_) {
  let _ = _.cached.tableNodeTypes;
  if (!_) {
    _ = _.cached.tableNodeTypes = {};
    for (let _ in _.nodes) {
      let _ = _.nodes[_],
        _ = _.spec.tableRole;
      _ && (_[_] = _);
    }
  }
  return _;
}
var _ = new _(`selectingCells`);
function _(_) {
  for (let _ = _.depth - 1; _ > 0; _--)
    if (_.node(_).type.spec.tableRole == `row`)
      return _.node(0).resolve(_.before(_ + 1));
  return null;
}
function _(_) {
  let _ = _.selection.$head;
  for (let _ = _.depth; _ > 0; _--)
    if (_.node(_).type.spec.tableRole == `row`) return !0;
  return !1;
}
function _(_) {
  let _ = _.selection;
  if (`$anchorCell` in _ && _.$anchorCell)
    return _.$anchorCell.pos > _.$headCell.pos ? _.$anchorCell : _.$headCell;
  if (`node` in _ && _.node && _.node.type.spec.tableRole == `cell`)
    return _.$anchor;
  let _ = _(_.$head) || _(_.$head);
  if (_) return _;
  throw RangeError(`No cell found around position ${_.head}`);
}
function _(_) {
  for (let _ = _.nodeAfter, _ = _.pos; _; _ = _.firstChild, _++) {
    let _ = _.type.spec.tableRole;
    if (_ == `cell` || _ == `header_cell`) return _.doc.resolve(_);
  }
  for (let _ = _.nodeBefore, _ = _.pos; _; _ = _.lastChild, _--) {
    let _ = _.type.spec.tableRole;
    if (_ == `cell` || _ == `header_cell`) return _.doc.resolve(_ - _.nodeSize);
  }
}
function _(_) {
  return _.parent.type.spec.tableRole == `row` && !!_.nodeAfter;
}
function _(_, _) {
  return _.depth == _.depth && _.pos >= _.start(-1) && _.pos <= _.end(-1);
}
function _(_, _, _) {
  let _ = _.node(-1),
    _ = _.get(_),
    _ = _.start(-1),
    _ = _.nextCell(_.pos - _, _, _);
  return _ == null ? null : _.node(0).resolve(_ + _);
}
function _(_, _, _ = 1) {
  let _ = {
    ..._,
    colspan: _.colspan - _,
  };
  return (
    _.colwidth &&
      ((_.colwidth = _.colwidth.slice()),
      _.colwidth.splice(_, _),
      _.colwidth.some((_) => _ > 0) || (_.colwidth = null)),
    _
  );
}
var _ = class _ extends _ {
  constructor(_, _ = _) {
    let _ = _.node(-1),
      _ = _.get(_),
      _ = _.start(-1),
      _ = _.rectBetween(_.pos - _, _.pos - _),
      _ = _.node(0),
      _ = _.cellsInRect(_).filter((_) => _ != _.pos - _);
    _.unshift(_.pos - _);
    let _ = _.map((_) => {
      let _ = _.nodeAt(_);
      if (!_) throw RangeError(`No cell with offset ${_} found`);
      let _ = _ + _ + 1;
      return new _(_.resolve(_), _.resolve(_ + _.content.size));
    });
    (super(_[0].$from, _[0].$to, _),
      (this.$anchorCell = _),
      (this.$headCell = _));
  }
  map(_, _) {
    let _ = _.resolve(_.map(this.$anchorCell.pos)),
      _ = _.resolve(_.map(this.$headCell.pos));
    if (_(_) && _(_) && _(_, _)) {
      let _ = this.$anchorCell.node(-1) != _.node(-1);
      return _ && this.isRowSelection()
        ? _.rowSelection(_, _)
        : _ && this.isColSelection()
          ? _.colSelection(_, _)
          : new _(_, _);
    }
    return _.between(_, _);
  }
  content() {
    let _ = this.$anchorCell.node(-1),
      _ = _.get(_),
      _ = this.$anchorCell.start(-1),
      _ = _.rectBetween(this.$anchorCell.pos - _, this.$headCell.pos - _),
      _ = {},
      _ = [];
    for (let _ = _.top; _ < _.bottom; _++) {
      let _ = [];
      for (let _ = _ * _.width + _.left, _ = _.left; _ < _.right; _++, _++) {
        let _ = _.map[_];
        if (_[_]) continue;
        _[_] = !0;
        let _ = _.findCell(_),
          _ = _.nodeAt(_);
        if (!_) throw RangeError(`No cell with offset ${_} found`);
        let _ = _.left - _.left,
          _ = _.right - _.right;
        if (_ > 0 || _ > 0) {
          let _ = _.attrs;
          if (
            (_ > 0 && (_ = _(_, 0, _)),
            _ > 0 && (_ = _(_, _.colspan - _, _)),
            _.left < _.left)
          ) {
            if (((_ = _.type.createAndFill(_)), !_))
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(_)}`,
              );
          } else _ = _.type.create(_, _.content);
        }
        if (_.top < _.top || _.bottom > _.bottom) {
          let _ = {
            ..._.attrs,
            rowspan: Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top),
          };
          _ =
            _.top < _.top
              ? _.type.createAndFill(_)
              : _.type.create(_, _.content);
        }
        _.push(_);
      }
      _.push(_.child(_).copy(_.from(_)));
    }
    let _ = this.isColSelection() && this.isRowSelection() ? _ : _;
    return new _(_.from(_), 1, 1);
  }
  replace(_, _ = _.empty) {
    let _ = _.steps.length,
      _ = this.ranges;
    for (let _ = 0; _ < _.length; _++) {
      let { $from: _, $to: _ } = _[_],
        _ = _.mapping.slice(_);
      _.replace(_.map(_.pos), _.map(_.pos), _ ? _.empty : _);
    }
    let _ = _.findFrom(_.doc.resolve(_.mapping.slice(_).map(this._)), -1);
    _ && _.setSelection(_);
  }
  replaceWith(_, _) {
    this.replace(_, new _(_.from(_), 0, 0));
  }
  forEachCell(_) {
    let _ = this.$anchorCell.node(-1),
      _ = _.get(_),
      _ = this.$anchorCell.start(-1),
      _ = _.cellsInRect(
        _.rectBetween(this.$anchorCell.pos - _, this.$headCell.pos - _),
      );
    for (let _ = 0; _ < _.length; _++) _(_.nodeAt(_[_]), _ + _[_]);
  }
  isColSelection() {
    let _ = this.$anchorCell.index(-1),
      _ = this.$headCell.index(-1);
    if (Math.min(_, _) > 0) return !1;
    let _ = _ + this.$anchorCell.nodeAfter.attrs.rowspan,
      _ = _ + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(_, _) == this.$headCell.node(-1).childCount;
  }
  static colSelection(_, _ = _) {
    let _ = _.node(-1),
      _ = _.get(_),
      _ = _.start(-1),
      _ = _.findCell(_.pos - _),
      _ = _.findCell(_.pos - _),
      _ = _.node(0);
    return (
      _.top <= _.top
        ? (_.top > 0 && (_ = _.resolve(_ + _.map[_.left])),
          _.bottom < _.height &&
            (_ = _.resolve(_ + _.map[_.width * (_.height - 1) + _.right - 1])))
        : (_.top > 0 && (_ = _.resolve(_ + _.map[_.left])),
          _.bottom < _.height &&
            (_ = _.resolve(_ + _.map[_.width * (_.height - 1) + _.right - 1]))),
      new _(_, _)
    );
  }
  isRowSelection() {
    let _ = this.$anchorCell.node(-1),
      _ = _.get(_),
      _ = this.$anchorCell.start(-1),
      _ = _.colCount(this.$anchorCell.pos - _),
      _ = _.colCount(this.$headCell.pos - _);
    if (Math.min(_, _) > 0) return !1;
    let _ = _ + this.$anchorCell.nodeAfter.attrs.colspan,
      _ = _ + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(_, _) == _.width;
  }
  eq(_) {
    return (
      _ instanceof _ &&
      _.$anchorCell.pos == this.$anchorCell.pos &&
      _.$headCell.pos == this.$headCell.pos
    );
  }
  static rowSelection(_, _ = _) {
    let _ = _.node(-1),
      _ = _.get(_),
      _ = _.start(-1),
      _ = _.findCell(_.pos - _),
      _ = _.findCell(_.pos - _),
      _ = _.node(0);
    return (
      _.left <= _.left
        ? (_.left > 0 && (_ = _.resolve(_ + _.map[_.top * _.width])),
          _.right < _.width &&
            (_ = _.resolve(_ + _.map[_.width * (_.top + 1) - 1])))
        : (_.left > 0 && (_ = _.resolve(_ + _.map[_.top * _.width])),
          _.right < _.width &&
            (_ = _.resolve(_ + _.map[_.width * (_.top + 1) - 1]))),
      new _(_, _)
    );
  }
  toJSON() {
    return {
      type: `cell`,
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos,
    };
  }
  static fromJSON(_, _) {
    return new _(_.resolve(_.anchor), _.resolve(_.head));
  }
  static create(_, _, _ = _) {
    return new _(_.resolve(_), _.resolve(_));
  }
  getBookmark() {
    return new _(this.$anchorCell.pos, this.$headCell.pos);
  }
};
((_.prototype.visible = !1), _.jsonID(`cell`, _));
var _ = class _ {
  constructor(_, _) {
    ((this.anchor = _), (this.head = _));
  }
  map(_) {
    return new _(_.map(this.anchor), _.map(this.head));
  }
  resolve(_) {
    let _ = _.resolve(this.anchor),
      _ = _.resolve(this.head);
    return _.parent.type.spec.tableRole == `row` &&
      _.parent.type.spec.tableRole == `row` &&
      _.index() < _.parent.childCount &&
      _.index() < _.parent.childCount &&
      _(_, _)
      ? new _(_, _)
      : _.near(_, 1);
  }
};
function _(_) {
  if (!(_.selection instanceof _)) return null;
  let _ = [];
  return (
    _.selection.forEachCell((_, _) => {
      _.push(
        _.node(_, _ + _.nodeSize, {
          class: `selectedCell`,
        }),
      );
    }),
    _.create(_.doc, _)
  );
}
function _({ $from: _, $to: _ }) {
  if (_.pos == _.pos || _.pos < _.pos - 6) return !1;
  let _ = _.pos,
    _ = _.pos,
    _ = _.depth;
  for (; _ >= 0 && !(_.after(_ + 1) < _.end(_)); _--, _++);
  for (let _ = _.depth; _ >= 0 && !(_.before(_ + 1) > _.start(_)); _--, _--);
  return _ == _ && /row|table/.test(_.node(_).type.spec.tableRole);
}
function _({ $from: _, $to: _ }) {
  let _, _;
  for (let _ = _.depth; _ > 0; _--) {
    let _ = _.node(_);
    if (
      _.type.spec.tableRole === `cell` ||
      _.type.spec.tableRole === `header_cell`
    ) {
      _ = _;
      break;
    }
  }
  for (let _ = _.depth; _ > 0; _--) {
    let _ = _.node(_);
    if (
      _.type.spec.tableRole === `cell` ||
      _.type.spec.tableRole === `header_cell`
    ) {
      _ = _;
      break;
    }
  }
  return _ !== _ && _.parentOffset === 0;
}
function _(_, _, _) {
  let _ = (_ || _).selection,
    _ = (_ || _).doc,
    _,
    _;
  if (_ instanceof _ && (_ = _.node.type.spec.tableRole)) {
    if (_ == `cell` || _ == `header_cell`) _ = _.create(_, _.from);
    else if (_ == `row`) {
      let _ = _.resolve(_.from + 1);
      _ = _.rowSelection(_, _);
    } else if (!_) {
      let _ = _.get(_.node),
        _ = _.from + 1,
        _ = _ + _.map[_.width * _.height - 1];
      _ = _.create(_, _ + 1, _);
    }
  } else
    _ instanceof _ && _(_)
      ? (_ = _.create(_, _.from))
      : _ instanceof _ &&
        _(_) &&
        (_ = _.create(_, _.$from.start(), _.$from.end()));
  return (_ && (_ ||= _._).setSelection(_), _);
}
var _ = new _(`fix-tables`);
function _(_, _, _, _) {
  let _ = _.childCount,
    _ = _.childCount;
  outer: for (let _ = 0, _ = 0; _ < _; _++) {
    let _ = _.child(_);
    for (let _ = _, _ = Math.min(_, _ + 3); _ < _; _++)
      if (_.child(_) == _) {
        ((_ = _ + 1), (_ += _.nodeSize));
        continue outer;
      }
    (_(_, _),
      _ < _ && _.child(_).sameMarkup(_)
        ? _(_.child(_), _, _ + 1, _)
        : _.nodesBetween(0, _.content.size, _, _ + 1),
      (_ += _.nodeSize));
  }
}
function _(_, _) {
  let _,
    _ = (_, _) => {
      _.type.spec.tableRole == `table` && (_ = _(_, _, _, _));
    };
  return (
    _ ? _.doc != _.doc && _(_.doc, _.doc, 0, _) : _.doc.descendants(_), _
  );
}
function _(_, _, _, _) {
  let _ = _.get(_);
  if (!_.problems) return _;
  _ ||= _._;
  let _ = [];
  for (let _ = 0; _ < _.height; _++) _.push(0);
  for (let _ = 0; _ < _.problems.length; _++) {
    let _ = _.problems[_];
    if (_.type == `collision`) {
      let _ = _.nodeAt(_.pos);
      if (!_) continue;
      let _ = _.attrs;
      for (let _ = 0; _ < _.rowspan; _++) _[_.row + _] += _._;
      _.setNodeMarkup(
        _.mapping.map(_ + 1 + _.pos),
        null,
        _(_, _.colspan - _._, _._),
      );
    } else if (_.type == `missing`) _[_.row] += _._;
    else if (_.type == `overlong_rowspan`) {
      let _ = _.nodeAt(_.pos);
      if (!_) continue;
      _.setNodeMarkup(_.mapping.map(_ + 1 + _.pos), null, {
        ..._.attrs,
        rowspan: _.attrs.rowspan - _._,
      });
    } else if (_.type == `colwidth mismatch`) {
      let _ = _.nodeAt(_.pos);
      if (!_) continue;
      _.setNodeMarkup(_.mapping.map(_ + 1 + _.pos), null, {
        ..._.attrs,
        colwidth: _.colwidth,
      });
    } else if (_.type == `zero_sized`) {
      let _ = _.mapping.map(_);
      _.delete(_, _ + _.nodeSize);
    }
  }
  let _, _;
  for (let _ = 0; _ < _.length; _++) _[_] && ((_ ??= _), (_ = _));
  for (let _ = 0, _ = _ + 1; _ < _.height; _++) {
    let _ = _.child(_),
      _ = _ + _.nodeSize,
      _ = _[_];
    if (_ > 0) {
      let _ = `cell`;
      _.firstChild && (_ = _.firstChild.type.spec.tableRole);
      let _ = [];
      for (let _ = 0; _ < _; _++) {
        let _ = _(_.schema)[_].createAndFill();
        _ && _.push(_);
      }
      let _ = (_ == 0 || _ == _ - 1) && _ == _ ? _ + 1 : _ - 1;
      _.insert(_.mapping.map(_), _);
    }
    _ = _;
  }
  return _.setMeta(_, {
    fixTables: !0,
  });
}
function _(_) {
  let _ = _.selection,
    _ = _(_),
    _ = _.node(-1),
    _ = _.start(-1),
    _ = _.get(_);
  return {
    ...(_ instanceof _
      ? _.rectBetween(_.$anchorCell.pos - _, _.$headCell.pos - _)
      : _.findCell(_.pos - _)),
    tableStart: _,
    map: _,
    table: _,
  };
}
function _(_) {
  return function (_, _) {
    if (!_(_)) return !1;
    if (_) {
      let _ = _(_.schema),
        _ = _(_),
        _ = _._,
        _ = _.map.cellsInRect(
          _ == `column`
            ? {
                left: _.left,
                top: 0,
                right: _.right,
                bottom: _.map.height,
              }
            : _ == `row`
              ? {
                  left: 0,
                  top: _.top,
                  right: _.map.width,
                  bottom: _.bottom,
                }
              : _,
        ),
        _ = _.map((_) => _.table.nodeAt(_));
      for (let _ = 0; _ < _.length; _++)
        _[_].type == _.header_cell &&
          _.setNodeMarkup(_.tableStart + _[_], _.cell, _[_].attrs);
      if (_.steps.length == 0)
        for (let _ = 0; _ < _.length; _++)
          _.setNodeMarkup(_.tableStart + _[_], _.header_cell, _[_].attrs);
      _(_);
    }
    return !0;
  };
}
function _(_, _, _) {
  let _ = _.map.cellsInRect({
    left: 0,
    top: 0,
    right: _ == `row` ? _.map.width : 1,
    bottom: _ == `column` ? _.map.height : 1,
  });
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.table.nodeAt(_[_]);
    if (_ && _.type !== _.header_cell) return !1;
  }
  return !0;
}
function _(_, _) {
  return (
    (_ ||= {
      useDeprecatedLogic: !1,
    }),
    _.useDeprecatedLogic
      ? _(_)
      : function (_, _) {
          if (!_(_)) return !1;
          if (_) {
            let _ = _(_.schema),
              _ = _(_),
              _ = _._,
              _ = _(`row`, _, _),
              _ = _(`column`, _, _),
              _ = (_ === `column` ? _ : _ === `row` && _) ? 1 : 0,
              _ =
                _ == `column`
                  ? {
                      left: 0,
                      top: _,
                      right: 1,
                      bottom: _.map.height,
                    }
                  : _ == `row`
                    ? {
                        left: _,
                        top: 0,
                        right: _.map.width,
                        bottom: 1,
                      }
                    : _,
              _ =
                _ == `column`
                  ? _
                    ? _.cell
                    : _.header_cell
                  : _ == `row`
                    ? _
                      ? _.cell
                      : _.header_cell
                    : _.cell;
            (_.map.cellsInRect(_).forEach((_) => {
              let _ = _ + _.tableStart,
                _ = _.doc.nodeAt(_);
              _ && _.setNodeMarkup(_, _, _.attrs);
            }),
              _(_));
          }
          return !0;
        }
  );
}
(_(`row`, {
  useDeprecatedLogic: !0,
}),
  _(`column`, {
    useDeprecatedLogic: !0,
  }),
  _(`cell`, {
    useDeprecatedLogic: !0,
  }));
function _(_, _) {
  let _ = _.selection;
  if (!(_ instanceof _)) return !1;
  if (_) {
    let _ = _._,
      _ = _(_.schema).cell.createAndFill().content;
    (_.forEachCell((_, _) => {
      _.content._(_) ||
        _.replace(
          _.mapping.map(_ + 1),
          _.mapping.map(_ + _.nodeSize - 1),
          new _(_, 0, 0),
        );
    }),
      _.docChanged && _(_));
  }
  return !0;
}
function _(_) {
  if (!_.size) return null;
  let { content: _, openStart: _, openEnd: _ } = _;
  for (
    ;
    _.childCount == 1 &&
    ((_ > 0 && _ > 0) || _.child(0).type.spec.tableRole == `table`);
  )
    (_--, _--, (_ = _.child(0).content));
  let _ = _.child(0),
    _ = _.type.spec.tableRole,
    _ = _.type.schema,
    _ = [];
  if (_ == `row`)
    for (let _ = 0; _ < _.childCount; _++) {
      let _ = _.child(_).content,
        _ = _ ? 0 : Math.max(0, _ - 1),
        _ = _ < _.childCount - 1 ? 0 : Math.max(0, _ - 1);
      ((_ || _) && (_ = _(_(_).row, new _(_, _, _)).content), _.push(_));
    }
  else if (_ == `cell` || _ == `header_cell`)
    _.push(_ || _ ? _(_(_).row, new _(_, _, _)).content : _);
  else return null;
  return _(_, _);
}
function _(_, _) {
  let _ = [];
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    for (let _ = _.childCount - 1; _ >= 0; _--) {
      let { rowspan: _, colspan: _ } = _.child(_).attrs;
      for (let _ = _; _ < _ + _; _++) _[_] = (_[_] || 0) + _;
    }
  }
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = Math.max(_, _[_]);
  for (let _ = 0; _ < _.length; _++)
    if ((_ >= _.length && _.push(_.empty), _[_] < _)) {
      let _ = _(_).cell.createAndFill(),
        _ = [];
      for (let _ = _[_]; _ < _; _++) _.push(_);
      _[_] = _[_].append(_.from(_));
    }
  return {
    height: _.length,
    width: _,
    rows: _,
  };
}
function _(_, _) {
  let _ = _.createAndFill();
  return new _(_).replace(0, _.content.size, _).doc;
}
function _({ width: _, height: _, rows: _ }, _, _) {
  if (_ != _) {
    let _ = [],
      _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_],
        _ = [];
      for (let _ = _[_] || 0, _ = 0; _ < _; _++) {
        let _ = _.child(_ % _.childCount);
        (_ + _.attrs.colspan > _ &&
          (_ = _.type.createChecked(
            _(_.attrs, _.attrs.colspan, _ + _.attrs.colspan - _),
            _.content,
          )),
          _.push(_),
          (_ += _.attrs.colspan));
        for (let _ = 1; _ < _.attrs.rowspan; _++)
          _[_ + _] = (_[_ + _] || 0) + _.attrs.colspan;
      }
      _.push(_.from(_));
    }
    ((_ = _), (_ = _));
  }
  if (_ != _) {
    let _ = [];
    for (let _ = 0, _ = 0; _ < _; _++, _++) {
      let _ = [],
        _ = _[_ % _];
      for (let _ = 0; _ < _.childCount; _++) {
        let _ = _.child(_);
        (_ + _.attrs.rowspan > _ &&
          (_ = _.type.create(
            {
              ..._.attrs,
              rowspan: Math.max(1, _ - _.attrs.rowspan),
            },
            _.content,
          )),
          _.push(_));
      }
      _.push(_.from(_));
    }
    ((_ = _), (_ = _));
  }
  return {
    width: _,
    height: _,
    rows: _,
  };
}
function _(_, _, _, _, _, _, _) {
  let _ = _.doc.type.schema,
    _ = _(_),
    _,
    _;
  if (_ > _.width)
    for (let _ = 0, _ = 0; _ < _.height; _++) {
      let _ = _.child(_);
      _ += _.nodeSize;
      let _ = [],
        _;
      _ =
        _.lastChild == null || _.lastChild.type == _.cell
          ? (_ ||= _.cell.createAndFill())
          : (_ ||= _.header_cell.createAndFill());
      for (let _ = _.width; _ < _; _++) _.push(_);
      _.insert(_.mapping.slice(_).map(_ - 1 + _), _);
    }
  if (_ > _.height) {
    let _ = [];
    for (
      let _ = 0, _ = (_.height - 1) * _.width;
      _ < Math.max(_.width, _);
      _++
    ) {
      let _ = _ >= _.width ? !1 : _.nodeAt(_.map[_ + _]).type == _.header_cell;
      _.push(
        _
          ? (_ ||= _.header_cell.createAndFill())
          : (_ ||= _.cell.createAndFill()),
      );
    }
    let _ = _.row.create(null, _.from(_)),
      _ = [];
    for (let _ = _.height; _ < _; _++) _.push(_);
    _.insert(_.mapping.slice(_).map(_ + _.nodeSize - 2), _);
  }
  return !!(_ || _);
}
function _(_, _, _, _, _, _, _, _) {
  if (_ == 0 || _ == _.height) return !1;
  let _ = !1;
  for (let _ = _; _ < _; _++) {
    let _ = _ * _.width + _,
      _ = _.map[_];
    if (_.map[_ - _.width] == _) {
      _ = !0;
      let _ = _.nodeAt(_),
        { top: _, left: _ } = _.findCell(_);
      (_.setNodeMarkup(_.mapping.slice(_).map(_ + _), null, {
        ..._.attrs,
        rowspan: _ - _,
      }),
        _.insert(
          _.mapping.slice(_).map(_.positionAt(_, _, _)),
          _.type.createAndFill({
            ..._.attrs,
            rowspan: _ + _.attrs.rowspan - _,
          }),
        ),
        (_ += _.attrs.colspan - 1));
    }
  }
  return _;
}
function _(_, _, _, _, _, _, _, _) {
  if (_ == 0 || _ == _.width) return !1;
  let _ = !1;
  for (let _ = _; _ < _; _++) {
    let _ = _ * _.width + _,
      _ = _.map[_];
    if (_.map[_ - 1] == _) {
      _ = !0;
      let _ = _.nodeAt(_),
        _ = _.colCount(_),
        _ = _.mapping.slice(_).map(_ + _);
      (_.setNodeMarkup(_, null, _(_.attrs, _ - _, _.attrs.colspan - (_ - _))),
        _.insert(_ + _.nodeSize, _.type.createAndFill(_(_.attrs, 0, _ - _))),
        (_ += _.attrs.rowspan - 1));
    }
  }
  return _;
}
function _(_, _, _, _, _) {
  let _ = _ ? _.doc.nodeAt(_ - 1) : _.doc;
  if (!_) throw Error(`No table found`);
  let _ = _.get(_),
    { top: _, left: _ } = _,
    _ = _ + _.width,
    _ = _ + _.height,
    _ = _._,
    _ = 0;
  function _() {
    if (((_ = _ ? _.doc.nodeAt(_ - 1) : _.doc), !_))
      throw Error(`No table found`);
    ((_ = _.get(_)), (_ = _.mapping.maps.length));
  }
  (_(_, _, _, _, _, _, _) && _(),
    _(_, _, _, _, _, _, _, _) && _(),
    _(_, _, _, _, _, _, _, _) && _(),
    _(_, _, _, _, _, _, _, _) && _(),
    _(_, _, _, _, _, _, _, _) && _());
  for (let _ = _; _ < _; _++) {
    let _ = _.positionAt(_, _, _),
      _ = _.positionAt(_, _, _);
    _.replace(
      _.mapping.slice(_).map(_ + _),
      _.mapping.slice(_).map(_ + _),
      new _(_.rows[_ - _], 0, 0),
    );
  }
  (_(),
    _.setSelection(
      new _(
        _.doc.resolve(_ + _.positionAt(_, _, _)),
        _.doc.resolve(_ + _.positionAt(_ - 1, _ - 1, _)),
      ),
    ),
    _(_));
}
var _ = _({
  ArrowLeft: _(`horiz`, -1),
  ArrowRight: _(`horiz`, 1),
  ArrowUp: _(`vert`, -1),
  ArrowDown: _(`vert`, 1),
  "Shift-ArrowLeft": _(`horiz`, -1),
  "Shift-ArrowRight": _(`horiz`, 1),
  "Shift-ArrowUp": _(`vert`, -1),
  "Shift-ArrowDown": _(`vert`, 1),
  Backspace: _,
  "Mod-Backspace": _,
  Delete: _,
  "Mod-Delete": _,
});
function _(_, _, _) {
  return (
    !_._(_.selection) && (_ && _(_._.setSelection(_).scrollIntoView()), !0)
  );
}
function _(_, _) {
  return (_, _, _) => {
    if (!_) return !1;
    let _ = _.selection;
    if (_ instanceof _) return _(_, _, _.near(_.$headCell, _));
    if (_ != `horiz` && !_.empty) return !1;
    let _ = _(_, _, _);
    if (_ == null) return !1;
    if (_ == `horiz`) return _(_, _, _.near(_.doc.resolve(_.head + _), _));
    {
      let _ = _.doc.resolve(_),
        _ = _(_, _, _),
        _;
      return (
        (_ = _
          ? _.near(_, 1)
          : _ < 0
            ? _.near(_.doc.resolve(_.before(-1)), -1)
            : _.near(_.doc.resolve(_.after(-1)), 1)),
        _(_, _, _)
      );
    }
  };
}
function _(_, _) {
  return (_, _, _) => {
    if (!_) return !1;
    let _ = _.selection,
      _;
    if (_ instanceof _) _ = _;
    else {
      let _ = _(_, _, _);
      if (_ == null) return !1;
      _ = new _(_.doc.resolve(_));
    }
    let _ = _(_.$headCell, _, _);
    return _ ? _(_, _, new _(_.$anchorCell, _)) : !1;
  };
}
function _(_, _) {
  let _ = _.state.doc,
    _ = _(_.resolve(_));
  return _ ? (_.dispatch(_.state._.setSelection(new _(_))), !0) : !1;
}
function _(_, _, _) {
  if (!_(_.state)) return !1;
  let _ = _(_),
    _ = _.state.selection;
  if (_ instanceof _) {
    _ ||= {
      width: 1,
      height: 1,
      rows: [_.from(_(_(_.state.schema).cell, _))],
    };
    let _ = _.$anchorCell.node(-1),
      _ = _.$anchorCell.start(-1),
      _ = _.get(_).rectBetween(_.$anchorCell.pos - _, _.$headCell.pos - _);
    return (
      (_ = _(_, _.right - _.left, _.bottom - _.top)),
      _(_.state, _.dispatch, _, _, _),
      !0
    );
  }
  if (_) {
    let _ = _(_.state),
      _ = _.start(-1);
    return (
      _(_.state, _.dispatch, _, _.get(_.node(-1)).findCell(_.pos - _), _), !0
    );
  }
  return !1;
}
function _(_, _) {
  if (_.ctrlKey || _.metaKey) return;
  let _ = _(_, _.target),
    _;
  if (_.shiftKey && _.state.selection instanceof _)
    (_(_.state.selection.$anchorCell, _), _.preventDefault());
  else if (
    _.shiftKey &&
    _ &&
    (_ = _(_.state.selection.$anchor)) != null &&
    _(_, _)?.pos != _.pos
  )
    (_(_, _), _.preventDefault());
  else if (!_) return;
  function _(_, _) {
    let _ = _(_, _),
      _ = _.getState(_.state) == null;
    if (!_ || !_(_, _)) {
      if (_) _ = _;
      else return;
    }
    let _ = new _(_, _);
    if (_ || !_.state.selection._(_)) {
      let _ = _.state._.setSelection(_);
      (_ && _.setMeta(_, _.pos), _.dispatch(_));
    }
  }
  function _() {
    (_.root.removeEventListener(`mouseup`, _),
      _.root.removeEventListener(`dragstart`, _),
      _.root.removeEventListener(`mousemove`, _),
      _.getState(_.state) != null && _.dispatch(_.state._.setMeta(_, -1)));
  }
  function _(_) {
    let _ = _,
      _ = _.getState(_.state),
      _;
    if (_ != null) _ = _.state.doc.resolve(_);
    else if (_(_, _.target) != _ && ((_ = _(_, _)), !_)) return _();
    _ && _(_, _);
  }
  (_.root.addEventListener(`mouseup`, _),
    _.root.addEventListener(`dragstart`, _),
    _.root.addEventListener(`mousemove`, _));
}
function _(_, _, _) {
  if (!(_.state.selection instanceof _)) return null;
  let { $head: _ } = _.state.selection;
  for (let _ = _.depth - 1; _ >= 0; _--) {
    let _ = _.node(_);
    if ((_ < 0 ? _.index(_) : _.indexAfter(_)) != (_ < 0 ? 0 : _.childCount))
      return null;
    if (
      _.type.spec.tableRole == `cell` ||
      _.type.spec.tableRole == `header_cell`
    ) {
      let _ = _.before(_),
        _ = _ == `vert` ? (_ > 0 ? `down` : `up`) : _ > 0 ? `right` : `left`;
      return _.endOfTextblock(_) ? _ : null;
    }
  }
  return null;
}
function _(_, _) {
  for (; _ && _ != _.dom; _ = _.parentNode)
    if (_.nodeName == `TD` || _.nodeName == `TH`) return _;
  return null;
}
function _(_, _) {
  let _ = _.posAtCoords({
    left: _.clientX,
    top: _.clientY,
  });
  return _ && _ ? _(_.state.doc.resolve(_.pos)) : null;
}
var _ = class {
  constructor(_, _) {
    ((this.node = _),
      (this.defaultCellMinWidth = _),
      (this.dom = document.createElement(`div`)),
      (this.dom.className = `tableWrapper`),
      (this.table = this.dom.appendChild(document.createElement(`table`))),
      this.table.style.setProperty(`--default-cell-min-width`, `${_}px`),
      (this.colgroup = this.table.appendChild(
        document.createElement(`colgroup`),
      )),
      _(_, this.colgroup, this.table, _),
      (this.contentDOM = this.table.appendChild(
        document.createElement(`tbody`),
      )));
  }
  update(_) {
    return (
      _.type == this.node.type &&
      ((this.node = _),
      _(_, this.colgroup, this.table, this.defaultCellMinWidth),
      !0)
    );
  }
  ignoreMutation(_) {
    return (
      _.type == `attributes` &&
      (_.target == this.table || this.colgroup.contains(_.target))
    );
  }
};
function _(_, _, _, _, _, _) {
  var _;
  let _ = 0,
    _ = !0,
    _ = _.firstChild,
    _ = _.firstChild;
  if (_) {
    for (let _ = 0, _ = 0; _ < _.childCount; _++) {
      let { colspan: _, colwidth: _ } = _.child(_).attrs;
      for (let _ = 0; _ < _; _++, _++) {
        let _ = _ == _ ? _ : _ && _[_],
          _ = _ ? _ + `px` : ``;
        if (((_ += _ || _), _ || (_ = !1), _))
          (_.style.width != _ && (_.style.width = _), (_ = _.nextSibling));
        else {
          let _ = document.createElement(`col`);
          ((_.style.width = _), _.appendChild(_));
        }
      }
    }
    for (; _;) {
      let _ = _.nextSibling;
      ((_ = _.parentNode) == null || _.removeChild(_), (_ = _));
    }
    _
      ? ((_.style.width = _ + `px`), (_.style.minWidth = ``))
      : ((_.style.width = ``), (_.style.minWidth = _ + `px`));
  }
}
var _ = new _(`tableColumnResizing`);
function _({
  handleWidth: _ = 5,
  cellMinWidth: _ = 25,
  defaultCellMinWidth: _ = 100,
  View: _ = _,
  lastColumnResizable: _ = !0,
} = {}) {
  let _ = new _({
    key: _,
    state: {
      init(_, _) {
        let _ = _.spec?.props?.nodeViews,
          _ = _(_.schema).table.name;
        return (_ && _ && (_[_] = (_, _) => new _(_, _, _)), new _(-1, !1));
      },
      apply(_, _) {
        return _.apply(_);
      },
    },
    props: {
      attributes: (_) => {
        let _ = _.getState(_);
        return _ && _.activeHandle > -1
          ? {
              class: `resize-cursor`,
            }
          : {};
      },
      handleDOMEvents: {
        mousemove: (_, _) => {
          _(_, _, _, _);
        },
        mouseleave: (_) => {
          _(_);
        },
        mousedown: (_, _) => {
          _(_, _, _, _);
        },
      },
      decorations: (_) => {
        let _ = _.getState(_);
        if (_ && _.activeHandle > -1) return _(_, _.activeHandle);
      },
      nodeViews: {},
    },
  });
  return _;
}
var _ = class _ {
  constructor(_, _) {
    ((this.activeHandle = _), (this.dragging = _));
  }
  apply(_) {
    let _ = this,
      _ = _.getMeta(_);
    if (_ && _.setHandle != null) return new _(_.setHandle, !1);
    if (_ && _.setDragging !== void 0)
      return new _(_.activeHandle, _.setDragging);
    if (_.activeHandle > -1 && _.docChanged) {
      let _ = _.mapping.map(_.activeHandle, -1);
      return (_(_.doc.resolve(_)) || (_ = -1), new _(_, _.dragging));
    }
    return _;
  }
};
function _(_, _, _, _) {
  if (!_.editable) return;
  let _ = _.getState(_.state);
  if (_ && !_.dragging) {
    let _ = _(_.target),
      _ = -1;
    if (_) {
      let { left: _, right: _ } = _.getBoundingClientRect();
      _.clientX - _ <= _
        ? (_ = _(_, _, `left`, _))
        : _ - _.clientX <= _ && (_ = _(_, _, `right`, _));
    }
    if (_ != _.activeHandle) {
      if (!_ && _ !== -1) {
        let _ = _.state.doc.resolve(_),
          _ = _.node(-1),
          _ = _.get(_),
          _ = _.start(-1);
        if (
          _.colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1 ==
          _.width - 1
        )
          return;
      }
      _(_, _);
    }
  }
}
function _(_) {
  if (!_.editable) return;
  let _ = _.getState(_.state);
  _ && _.activeHandle > -1 && !_.dragging && _(_, -1);
}
function _(_, _, _, _) {
  if (!_.editable) return !1;
  let _ = _.dom.ownerDocument.defaultView ?? window,
    _ = _.getState(_.state);
  if (!_ || _.activeHandle == -1 || _.dragging) return !1;
  let _ = _.state.doc.nodeAt(_.activeHandle),
    _ = _(_, _.activeHandle, _.attrs);
  _.dispatch(
    _.state._.setMeta(_, {
      setDragging: {
        startX: _.clientX,
        startWidth: _,
      },
    }),
  );
  function _(_) {
    (_.removeEventListener(`mouseup`, _),
      _.removeEventListener(`mousemove`, _));
    let _ = _.getState(_.state);
    _?.dragging &&
      (_(_, _.activeHandle, _(_.dragging, _, _)),
      _.dispatch(
        _.state._.setMeta(_, {
          setDragging: null,
        }),
      ));
  }
  function _(_) {
    if (!_.which) return _(_);
    let _ = _.getState(_.state);
    if (_ && _.dragging) {
      let _ = _(_.dragging, _, _);
      _(_, _.activeHandle, _, _);
    }
  }
  return (
    _(_, _.activeHandle, _, _),
    _.addEventListener(`mouseup`, _),
    _.addEventListener(`mousemove`, _),
    _.preventDefault(),
    !0
  );
}
function _(_, _, { colspan: _, colwidth: _ }) {
  let _ = _ && _[_.length - 1];
  if (_) return _;
  let _ = _.domAtPos(_),
    _ = _.node.childNodes[_.offset].offsetWidth,
    _ = _;
  if (_) for (let _ = 0; _ < _; _++) _[_] && ((_ -= _[_]), _--);
  return _ / _;
}
function _(_) {
  for (; _ && _.nodeName != `TD` && _.nodeName != `TH`;)
    _ =
      _.classList && _.classList.contains(`ProseMirror`) ? null : _.parentNode;
  return _;
}
function _(_, _, _, _) {
  let _ = _ == `right` ? -_ : _,
    _ = _.posAtCoords({
      left: _.clientX + _,
      top: _.clientY,
    });
  if (!_) return -1;
  let { pos: _ } = _,
    _ = _(_.state.doc.resolve(_));
  if (!_) return -1;
  if (_ == `right`) return _.pos;
  let _ = _.get(_.node(-1)),
    _ = _.start(-1),
    _ = _.map.indexOf(_.pos - _);
  return _ % _.width == 0 ? -1 : _ + _.map[_ - 1];
}
function _(_, _, _) {
  let _ = _.clientX - _.startX;
  return Math.max(_, _.startWidth + _);
}
function _(_, _) {
  _.dispatch(
    _.state._.setMeta(_, {
      setHandle: _,
    }),
  );
}
function _(_, _, _) {
  let _ = _.state.doc.resolve(_),
    _ = _.node(-1),
    _ = _.get(_),
    _ = _.start(-1),
    _ = _.colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1,
    _ = _.state._;
  for (let _ = 0; _ < _.height; _++) {
    let _ = _ * _.width + _;
    if (_ && _.map[_] == _.map[_ - _.width]) continue;
    let _ = _.map[_],
      _ = _.nodeAt(_).attrs,
      _ = _.colspan == 1 ? 0 : _ - _.colCount(_);
    if (_.colwidth && _.colwidth[_] == _) continue;
    let _ = _.colwidth ? _.colwidth.slice() : _(_.colspan);
    ((_[_] = _),
      _.setNodeMarkup(_ + _, null, {
        ..._,
        colwidth: _,
      }));
  }
  _.docChanged && _.dispatch(_);
}
function _(_, _, _, _) {
  let _ = _.state.doc.resolve(_),
    _ = _.node(-1),
    _ = _.start(-1),
    _ = _.get(_).colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1,
    _ = _.domAtPos(_.start(-1)).node;
  for (; _ && _.nodeName != `TABLE`;) _ = _.parentNode;
  _ && _(_, _.firstChild, _, _, _, _);
}
function _(_) {
  return Array(_).fill(0);
}
function _(_, _) {
  let _ = [],
    _ = _.doc.resolve(_),
    _ = _.node(-1);
  if (!_) return _.empty;
  let _ = _.get(_),
    _ = _.start(-1),
    _ = _.colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1;
  for (let _ = 0; _ < _.height; _++) {
    let _ = _ + _ * _.width;
    if (
      (_ == _.width - 1 || _.map[_] != _.map[_ + 1]) &&
      (_ == 0 || _.map[_] != _.map[_ - _.width])
    ) {
      let _ = _.map[_],
        _ = _ + _ + _.nodeAt(_).nodeSize - 1,
        _ = document.createElement(`div`);
      ((_.className = `column-resize-handle`),
        _.getState(_)?.dragging &&
          _.push(
            _.node(_ + _, _ + _ + _.nodeAt(_).nodeSize, {
              class: `column-resize-dragging`,
            }),
          ),
        _.push(_.widget(_, _)));
    }
  }
  return _.create(_.doc, _);
}
function _({ allowTableNodeSelection: _ = !1 } = {}) {
  return new _({
    key: _,
    state: {
      init() {
        return null;
      },
      apply(_, _) {
        let _ = _.getMeta(_);
        if (_ != null) return _ == -1 ? null : _;
        if (_ == null || !_.docChanged) return _;
        let { deleted: _, pos: _ } = _.mapping.mapResult(_);
        return _ ? null : _;
      },
    },
    props: {
      decorations: _,
      handleDOMEvents: {
        mousedown: _,
      },
      createSelectionBetween(_) {
        return _.getState(_.state) == null ? null : _.state.selection;
      },
      handleTripleClick: _,
      handleKeyDown: _,
      handlePaste: _,
    },
    appendTransaction(_, _, _) {
      return _(_, _(_, _), _);
    },
  });
}
var _ = [`ol`, 0],
  _ = [`ul`, 0],
  _ = [`li`, 0],
  _ = {
    attrs: {
      order: {
        default: 1,
      },
    },
    parseDOM: [
      {
        tag: `ol`,
        getAttrs(_) {
          return {
            order: _.hasAttribute(`start`) ? +_.getAttribute(`start`) : 1,
          };
        },
      },
    ],
    toDOM(_) {
      return _.attrs.order == 1
        ? _
        : [
            `ol`,
            {
              start: _.attrs.order,
            },
            0,
          ];
    },
  },
  _ = {
    parseDOM: [
      {
        tag: `ul`,
      },
    ],
    toDOM() {
      return _;
    },
  },
  _ = {
    parseDOM: [
      {
        tag: `li`,
      },
    ],
    toDOM() {
      return _;
    },
    defining: !0,
  };
function _(_, _ = null) {
  return function (_, _) {
    let { $from: _, $to: _ } = _.selection,
      _ = _.blockRange(_),
      _ = !1,
      _ = _;
    if (!_) return !1;
    if (
      _.depth >= 2 &&
      _.node(_.depth - 1).type.compatibleContent(_) &&
      _.startIndex == 0
    ) {
      if (_.index(_.depth - 1) == 0) return !1;
      let _ = _.doc.resolve(_.start - 2);
      ((_ = new _(_, _, _.depth)),
        _.endIndex < _.parent.childCount &&
          (_ = new _(_, _.doc.resolve(_.end(_.depth)), _.depth)),
        (_ = !0));
    }
    let _ = _(_, _, _, _);
    return _ ? (_ && _(_(_._, _, _, _, _).scrollIntoView()), !0) : !1;
  };
}
function _(_, _, _, _, _) {
  let _ = _.empty;
  for (let _ = _.length - 1; _ >= 0; _--)
    _ = _.from(_[_].type.create(_[_].attrs, _));
  _.step(
    new _(
      _.start - (_ ? 2 : 0),
      _.end,
      _.start,
      _.end,
      new _(_, 0, 0),
      _.length,
      !0,
    ),
  );
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _[_].type == _ && (_ = _ + 1);
  let _ = _.length - _,
    _ = _.start + _.length - (_ ? 2 : 0),
    _ = _.parent;
  for (let _ = _.startIndex, _ = _.endIndex, _ = !0; _ < _; _++, _ = !1)
    (!_ && _(_.doc, _, _) && (_.split(_, _), (_ += 2 * _)),
      (_ += _.child(_).nodeSize));
  return _;
}
function _(_, _) {
  return function (_, _) {
    let { $from: _, $to: _, node: _ } = _.selection;
    if ((_ && _.isBlock) || _.depth < 2 || !_.sameParent(_)) return !1;
    let _ = _.node(-1);
    if (_.type != _) return !1;
    if (
      _.parent.content.size == 0 &&
      _.node(-1).childCount == _.indexAfter(-1)
    ) {
      if (
        _.depth == 3 ||
        _.node(-3).type != _ ||
        _.index(-2) != _.node(-2).childCount - 1
      )
        return !1;
      if (_) {
        let _ = _.empty,
          _ = _.index(-1) ? 1 : _.index(-2) ? 2 : 3;
        for (let _ = _.depth - _; _ >= _.depth - 3; _--)
          _ = _.from(_.node(_).copy(_));
        let _ =
          _.indexAfter(-1) < _.node(-2).childCount
            ? 1
            : _.indexAfter(-2) < _.node(-3).childCount
              ? 2
              : 3;
        _ = _.append(_.from(_.createAndFill()));
        let _ = _.before(_.depth - (_ - 1)),
          _ = _._.replace(_, _.after(-_), new _(_, 4 - _, 0)),
          _ = -1;
        (_.doc.nodesBetween(_, _.doc.content.size, (_, _) => {
          if (_ > -1) return !1;
          _.isTextblock && _.content.size == 0 && (_ = _ + 1);
        }),
          _ > -1 && _.setSelection(_.near(_.doc.resolve(_))),
          _(_.scrollIntoView()));
      }
      return !0;
    }
    let _ = _.pos == _.end() ? _.contentMatchAt(0).defaultType : null,
      _ = _._.delete(_.pos, _.pos),
      _ = _
        ? [
            _
              ? {
                  type: _,
                  attrs: _,
                }
              : null,
            {
              type: _,
            },
          ]
        : void 0;
    return _(_.doc, _.pos, 2, _)
      ? (_ && _(_.split(_.pos, 2, _).scrollIntoView()), !0)
      : !1;
  };
}
function _(_) {
  return function (_, _) {
    let { $from: _, $to: _ } = _.selection,
      _ = _.blockRange(_, (_) => _.childCount > 0 && _.firstChild.type == _);
    return _
      ? _
        ? _.node(_.depth - 1).type == _
          ? _(_, _, _, _)
          : _(_, _, _)
        : !0
      : !1;
  };
}
function _(_, _, _, _) {
  let _ = _._,
    _ = _.end,
    _ = _.$to.end(_.depth);
  _ < _ &&
    (_.step(
      new _(
        _ - 1,
        _,
        _,
        _,
        new _(_.from(_.create(null, _.parent.copy())), 1, 0),
        1,
        !0,
      ),
    ),
    (_ = new _(_.doc.resolve(_.$from.pos), _.doc.resolve(_), _.depth)));
  let _ = _(_);
  if (_ == null) return !1;
  _.lift(_, _);
  let _ = _.mapping.map(_, -1) - 1;
  return (_(_.doc, _) && _.join(_), _(_.scrollIntoView()), !0);
}
function _(_, _, _) {
  let _ = _._,
    _ = _.parent;
  for (let _ = _.end, _ = _.endIndex - 1, _ = _.startIndex; _ > _; _--)
    ((_ -= _.child(_).nodeSize), _.delete(_ - 1, _ + 1));
  let _ = _.doc.resolve(_.start),
    _ = _.nodeAfter;
  if (_.mapping.map(_.end) != _.start + _.nodeAfter.nodeSize) return !1;
  let _ = _.startIndex == 0,
    _ = _.endIndex == _.childCount,
    _ = _.node(-1),
    _ = _.index(-1);
  if (!_.canReplace(_ + +!_, _ + 1, _.content.append(_ ? _.empty : _.from(_))))
    return !1;
  let _ = _.pos,
    _ = _ + _.nodeSize;
  return (
    _.step(
      new _(
        _ - +!!_,
        _ + +!!_,
        _ + 1,
        _ - 1,
        new _(
          (_ ? _.empty : _.from(_.copy(_.empty))).append(
            _ ? _.empty : _.from(_.copy(_.empty)),
          ),
          +!_,
          +!_,
        ),
        +!_,
      ),
    ),
    _(_.scrollIntoView()),
    !0
  );
}
function _(_) {
  return function (_, _) {
    let { $from: _, $to: _ } = _.selection,
      _ = _.blockRange(_, (_) => _.childCount > 0 && _.firstChild.type == _);
    if (!_) return !1;
    let _ = _.startIndex;
    if (_ == 0) return !1;
    let _ = _.parent,
      _ = _.child(_ - 1);
    if (_.type != _) return !1;
    if (_) {
      let _ = _.lastChild && _.lastChild.type == _.type,
        _ = _.from(_ ? _.create() : null),
        _ = new _(
          _.from(_.create(null, _.from(_.type.create(null, _)))),
          _ ? 3 : 1,
          0,
        ),
        _ = _.start,
        _ = _.end;
      _(_._.step(new _(_ - (_ ? 3 : 1), _, _, _, _, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var _ = _(),
  _ = class {
    m_nodes = [];
    m_schema;
    m_bConvertNewlinesToBR;
    m_fnProcessText;
    constructor(_, _, _) {
      ((this.m_schema = _),
        (this.m_bConvertNewlinesToBR = _?.bConvertNewlinesToBR ?? !1));
      let _ = _ && `mark` in _;
      this.m_fnProcessText = _ ? void 0 : _?.fnProcessText;
    }
    AppendText(_, _) {
      _.length &&
        (this.m_bConvertNewlinesToBR
          ? this.m_nodes.push(...this.GenerateBreaksForNewlines(_))
          : this.m_nodes.push(...this.TextNode(_)));
    }
    AppendNode(_) {
      this.m_nodes.push(_);
    }
    GetElements() {
      return this.m_nodes;
    }
    GenerateBreaksForNewlines(_) {
      let _ = [],
        _ = 0;
      for (
        let _ = _.indexOf(
          `
`,
          _,
        );
        _ !== -1;
        _ = _.indexOf(
          `
`,
          _,
        )
      )
        (_ != _ && _.push(...this.TextNode(_.substring(_, _))),
          _.push(this.m_schema.nodes.hard_break.createChecked()),
          (_ = _ + 1));
      return (_ < _.length && _.push(...this.TextNode(_.substring(_))), _);
    }
    TextNode(_) {
      return (
        (this.m_fnProcessText && this.m_fnProcessText(_)) || [
          this.m_schema.text(_),
        ]
      );
    }
  };
function _(_) {
  return _.filter((_) => _.isText)
    .map((_) => _.text)
    .join();
}
function _(_) {
  let _ = ``;
  return (
    _.descendants((_) => {
      _.isText && (_ += _.text);
    }),
    _
  );
}
var _ = class extends _ {
  m_schemaConfig;
  m_mapPMBBNodes = new Map();
  m_bUseBackslashEscapes;
  constructor(_, _) {
    (super(_.bbcode_dictionary, (_) => {
      let _ = _?.tag && _.bbcode_dictionary.get(_.tag);
      return new _(
        _.pm_schema,
        _,
        _ && `Constructor` in _ ? _.Constructor : void 0,
      );
    }),
      (this.m_schemaConfig = _),
      (this.m_bUseBackslashEscapes = _?.bUseBackslashEscapes ?? !0),
      this.m_schemaConfig.bbcode_dictionary.forEach((_) => {
        `node` in _.Constructor &&
          this.m_mapPMBBNodes.set(_.Constructor.node.name, _.Constructor);
      }));
  }
  get schema() {
    return this.m_schemaConfig.pm_schema;
  }
  ParseBBCode(_) {
    let _ = this.Parse(
      _,
      this.BBNodeToPMNode.bind(this),
      this.m_bUseBackslashEscapes,
    );
    return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
      {},
      this.ConvertLineBreaksToParagraphs(_.fromArray(_)),
    );
  }
  TryCreateNode(_, _, _) {
    let _ = _.from(_),
      _;
    if (
      !_.node.validContent(_) &&
      (_.node.isInline ||
        (_ = _.from(
          _.filter(
            (_) =>
              !(
                (_.isText && _.text.match(/^\s*$/)) ||
                (_.type == this.schema.nodes.hard_break &&
                  !_.node.validContent(_.from(_)))
              ),
          ),
        )),
      !_.node.validContent(_))
    ) {
      let _ = _.acceptNode;
      _ = [];
      let _ = [],
        _ = !1,
        _ = !1;
      for (let _ = 0; _ < _.childCount; _++) {
        let _ = _.child(_),
          _ = _.from(_),
          _ = _.node.validContent(_);
        !_ && (_ || _?.validContent(_))
          ? (_ || (_ = !0), _.push(_))
          : ((_ = !0), _.push(_));
      }
      if ((console.assert(!_ || !!_), _ && _)) {
        _.isBlock &&
          _.length > 1 &&
          _[_.length - 1].type == this.schema.nodes.hard_break &&
          (_ = _.slice(0, -1));
        let _ = this.m_mapPMBBNodes.get(_.name);
        _(_, `Indicated acceptNode type ${_.name} for ${_.node.name} missing`);
        let _;
        try {
          _ = _ ? this.TryCreateNode(_, _, void 0) : _.createChecked(void 0, _);
        } catch (_) {
          (console.error(_), (_ = []), (_ = [..._, ..._]));
        }
        _ = _.from(_);
      } else _ = _.from(_);
    }
    try {
      let _ = _.node.createAndFill(_, _) || _.node.createChecked(_, _);
      return _ ? [_, ..._] : _;
    } catch {
      return (
        _(
          !1,
          `Invalid content for node type ${_.node.name}, removing and promoting children.`,
        ),
        _
      );
    }
  }
  BBNodeToPMNode(_, _, ..._) {
    let _ = _.BBArgsToAttrs ? _.BBArgsToAttrs(_.args || {}) : void 0;
    try {
      if (
        (`convertContentToAttr` in _ &&
          _.convertContentToAttr &&
          ((_ && _[_.convertContentToAttr]) ||
            (_ = {
              ...(_ || {}),
              [_.convertContentToAttr]: _(_),
            }),
          `node` in _ && (_ = [])),
        `node` in _)
      )
        return this.TryCreateNode(_, _, _);
      {
        let _ = _.mark.create(_);
        return _.map((_) => this.RecursivelyApplyMark(_, _));
      }
    } catch (_) {
      return (console.error(`Error parsing [${_.tagname}] tag: ${_}`, _), []);
    }
  }
  RecursivelyApplyMark(_, _) {
    if (_.isText || _.type.allowsMarkType(_.type))
      return _.mark([..._.marks, _]);
    {
      let _ = [];
      return (
        _.descendants((_) => (_.push(this.RecursivelyApplyMark(_, _)), !1)),
        _.type.create(_.attrs, _, _.marks)
      );
    }
  }
  ConvertLineBreaksToParagraphs(_) {
    let _ = new Map(),
      _ = this.m_schemaConfig.pm_schema;
    this.m_mapPMBBNodes.forEach((_) => {
      _.acceptNode && _.set(_.acceptNode.name, _.node);
    });
    let _ = [],
      _ = {
        nodes: [],
        nodeType: void 0,
        reset() {
          ((this.nodes = []), (this.nodeType = void 0));
        },
        accumulate(_, _) {
          return (
            this.nodeType && _ != this.nodeType && this.emit(),
            (this.nodeType = _),
            this.nodes.push(_),
            !0
          );
        },
        emit(_ = !1) {
          let _ = this.nodeType || (_ ? _.nodes.paragraph : void 0);
          _ && (_.push(_.createChecked({}, this.nodes)), this.reset());
        },
      };
    return (
      _.forEach((_) => {
        let _ = _.type == _.nodes.hard_break,
          _ = _.from(_);
        if (_ || _.topNodeType.validContent(_)) {
          let _ = _ && _.nodes.length > 0;
          (_.emit(),
            _ ? _ || _.push(_.nodes.paragraph.createChecked()) : _.push(_));
        } else {
          let _;
          if (
            ((_ = _.nodes.paragraph.validContent(_)
              ? _.nodes.paragraph
              : _.get(_.type.name)),
            _)
          )
            _.accumulate(_, _);
          else {
            _(
              !1,
              `Couldn't accept ${_.type.name} at root of document, converting to paragraph`,
            );
            let _ = _(_);
            _ && _.accumulate(_.nodes.paragraph, _.text(_));
          }
        }
      }),
      (_.nodes.length || !_.length) && _.emit(!0),
      _.from(_)
    );
  }
};
function _(_, _) {
  let { from: _, $from: _, _: _, empty: _ } = _.selection;
  return _
    ? !!_.isInSet(_.storedMarks || _.marks())
    : _.doc.rangeHasMark(_, _, _);
}
function _(_, _, _) {
  let { parent: _ } = _,
    _ = _.childAfter(_.parentOffset),
    _ = _.node?.marks.find((_) => _.type == _);
  if (!_) return;
  let _ = _.index() - 1,
    _ = _.start() + _.offset;
  for (; _ >= 0 && _.isInSet(_.child(_).marks);)
    ((_ -= _.child(_).nodeSize), --_);
  let _ = _.index() + 1,
    _ = _.start() + _.offset + _.node.nodeSize;
  for (; _ < _.childCount && _.isInSet(_.child(_).marks);)
    ((_ += _.child(_).nodeSize), (_ += 1));
  let _ = _.doc.slice(_, _);
  return {
    from: _,
    _: _,
    slice: _,
    mark: _,
  };
}
function _(_, _, _) {
  if (_.type !== _) return !1;
  if (_ === void 0) return !0;
  for (let _ in _) if (_[_] !== _.attrs[_]) return !1;
  return !0;
}
function _(_, _, _) {
  let { $from: _, _: _ } = _.selection;
  for (let _ = _.depth; _ > 0; _--) {
    if (_ > _.end(_)) return !1;
    if (_(_.node(_), _, _)) return !0;
  }
  return !1;
}
function _(_, _, _) {
  for (let _ of _) if (_(_, _, _)) return _;
  return null;
}
function _(_, _, _) {
  let { $from: _, _: _ } = _.selection;
  for (let _ = _.sharedDepth(_); _ > 0; _--) {
    let _ = _.node(_);
    if (_ === void 0 ? _.type === _ : _.hasMarkup(_, _)) return _.before(_);
  }
}
function _(_, _) {
  return (_, _) => {
    let { $from: _ } = _.selection,
      _ = null,
      _ = 0;
    for (let _ = _.depth; _ > 0; _--) {
      let _ = _.node(_);
      if (_.includes(_.type)) {
        ((_ = _), (_ = _.before(_)));
        break;
      }
    }
    return _
      ? (_ &&
          _(
            _._.setNodeMarkup(_, _.type, {
              ..._.attrs,
              ..._,
            }),
          ),
        !0)
      : !1;
  };
}
function _(_, _, _ = {}) {
  return new _(_, (_, _, _, _) => {
    let _ = _ instanceof Function ? _(_) : _,
      _ = _._;
    if (_[1]) {
      let _ = _ + _[0].indexOf(_[1]),
        _ = _ + _[1].length;
      (_ < _ && _.delete(_, _), _ > _ && _.delete(_, _), (_ = _ + _[1].length));
    }
    return (_.addMark(_, _, _.create(_)), _.removeStoredMark(_), _);
  });
}
function _(_, _, _) {
  let _ = {
      left: _,
      top: _,
    },
    _ = _.posAtCoords(_);
  if (_?.pos) {
    let _ = _.state.doc.resolve(_.pos);
    _.dispatch(_.state._.setSelection(_.near(_)));
  }
}
function _(_) {
  let { nodes: _, marks: _ } = _,
    _ = _(
      _,
      (_, _) => (
        _ &&
          _(
            _._.replaceSelectionWith(
              _.hard_break.createChecked(),
            ).scrollIntoView(),
          ),
        !0
      ),
    ),
    _ = {
      "Mod-z": _,
      "Mod-y": _,
      "Shift-Mod-z": _,
      Backspace: _,
      Escape: _,
      "Mod-Enter": _,
      "Shift-Enter": _,
      "Mod-b": _(_.strong),
      "Mod-i": _(_.italic),
      "Mod-u": _(_.underline),
      "Mod-Shift-x": _(_.strike),
      "Ctrl-Shift-s": _(_.strike),
      Enter: _(_.list_item),
      "Mod-[": _(_.list_item),
      "Mod-]": _(_.list_item),
      "Ctrl-Shift-1": _(_.heading, {
        level: 1,
      }),
      "Ctrl-Shift-2": _(_.heading, {
        level: 2,
      }),
      "Ctrl-Shift-3": _(_.heading, {
        level: 3,
      }),
      "Ctrl-Shift-4": _(_.heading, {
        level: 4,
      }),
      "Ctrl-Shift-5": _(_.heading, {
        level: 5,
      }),
      "Ctrl-Shift-7": _(_.ordered_list),
      "Ctrl-Shift-8": _(_.bullet_list),
      "Ctrl-Shift-0": _(_.paragraph),
    };
  return (
    _.code && (_[`Ctrl-Shift-c`] = _(_.code)),
    _.code_block && (_[`Alt-Ctrl-Shift-c`] = _(_.code_block)),
    _.horizontal_rule &&
      (_[`Mod-_`] = (_, _) => (
        _ &&
          _(
            _._.replaceSelectionWith(
              _.horizontal_rule.create(),
            ).scrollIntoView(),
          ),
        !0
      )),
    _(_)
  );
}
function _(_, _) {
  return new _(_, (_, _, _, _) => _._.replaceWith(_, _, _.create()));
}
function _(_) {
  let { nodes: _, marks: _ } = _;
  return _({
    rules: [
      _(
        /^(\d+)\.\s$/,
        _.ordered_list,
        (_) => ({
          order: parseInt(_[1]),
        }),
        (_, _) => _.childCount + _.attrs.order == parseInt(_[1]),
      ),
      _(/^\s*([-+*])\s$/, _.bullet_list),
      _(/(?<!\w)\*([^*]+)\*/, _.strong),
      _(/(?<!\w)_([^_]+)_/, _.italic),
      _(/(?<!\w)~([^~]+)~/, _.strike),
      _(/(?<!\w)`([^`]+)`/, _.code),
      _(/^```$/, _.code_block),
      _(/^(#{1,5})\s$/, _.heading, (_) => ({
        level: _[1].length,
      })),
      _.horizontal_rule && _(/^(\*\*\*|---|___)$/, _.horizontal_rule),
    ].filter(Boolean),
  });
}
var _ = class _ extends _ {
  constructor(_) {
    super(_, _);
  }
  map(_, _) {
    let _ = _.resolve(_.map(this.head));
    return _.valid(_) ? new _(_) : _.near(_);
  }
  content() {
    return _.empty;
  }
  eq(_) {
    return _ instanceof _ && _.head == this.head;
  }
  toJSON() {
    return {
      type: `gapcursor`,
      pos: this.head,
    };
  }
  static fromJSON(_, _) {
    if (typeof _.pos != `number`)
      throw RangeError(`Invalid input for GapCursor.fromJSON`);
    return new _(_.resolve(_.pos));
  }
  getBookmark() {
    return new _(this.anchor);
  }
  static valid(_) {
    let _ = _.parent;
    if (_.isTextblock || !_(_) || !_(_)) return !1;
    let _ = _.type.spec.allowGapCursor;
    if (_ != null) return _;
    let _ = _.contentMatchAt(_.index()).defaultType;
    return _ && _.isTextblock;
  }
  static findGapCursorFrom(_, _, _ = !1) {
    search: for (;;) {
      if (!_ && _.valid(_)) return _;
      let _ = _.pos,
        _ = null;
      for (let _ = _.depth; ; _--) {
        let _ = _.node(_);
        if (_ > 0 ? _.indexAfter(_) < _.childCount : _.index(_) > 0) {
          _ = _.child(_ > 0 ? _.indexAfter(_) : _.index(_) - 1);
          break;
        }
        if (_ == 0) return null;
        _ += _;
        let _ = _.doc.resolve(_);
        if (_.valid(_)) return _;
      }
      for (;;) {
        let _ = _ > 0 ? _.firstChild : _.lastChild;
        if (!_) {
          if (_.isAtom && !_.isText && !_.isSelectable(_)) {
            ((_ = _.doc.resolve(_ + _.nodeSize * _)), (_ = !1));
            continue search;
          }
          break;
        }
        ((_ = _), (_ += _));
        let _ = _.doc.resolve(_);
        if (_.valid(_)) return _;
      }
      return null;
    }
  }
};
((_.prototype.visible = !1),
  (_.findFrom = _.findGapCursorFrom),
  _.jsonID(`gapcursor`, _));
var _ = class _ {
  constructor(_) {
    this.pos = _;
  }
  map(_) {
    return new _(_.map(this.pos));
  }
  resolve(_) {
    let _ = _.resolve(this.pos);
    return _.valid(_) ? new _(_) : _.near(_);
  }
};
function _(_) {
  for (let _ = _.depth; _ >= 0; _--) {
    let _ = _.index(_),
      _ = _.node(_);
    if (_ == 0) {
      if (_.type.spec.isolating) return !0;
    } else
      for (let _ = _.child(_ - 1); ; _ = _.lastChild) {
        if (
          (_.childCount == 0 && !_.inlineContent) ||
          _.isAtom ||
          _.type.spec.isolating
        )
          return !0;
        if (_.inlineContent) return !1;
      }
  }
  return !0;
}
function _(_) {
  for (let _ = _.depth; _ >= 0; _--) {
    let _ = _.indexAfter(_),
      _ = _.node(_);
    if (_ == _.childCount) {
      if (_.type.spec.isolating) return !0;
    } else
      for (let _ = _.child(_); ; _ = _.firstChild) {
        if (
          (_.childCount == 0 && !_.inlineContent) ||
          _.isAtom ||
          _.type.spec.isolating
        )
          return !0;
        if (_.inlineContent) return !1;
      }
  }
  return !0;
}
function _() {
  return new _({
    props: {
      decorations: _,
      createSelectionBetween(_, _, _) {
        return _.pos == _.pos && _.valid(_) ? new _(_) : null;
      },
      handleClick: _,
      handleKeyDown: _,
      handleDOMEvents: {
        beforeinput: _,
      },
    },
  });
}
var _ = _({
  ArrowLeft: _(`horiz`, -1),
  ArrowRight: _(`horiz`, 1),
  ArrowUp: _(`vert`, -1),
  ArrowDown: _(`vert`, 1),
});
function _(_, _) {
  let _ = _ == `vert` ? (_ > 0 ? `down` : `up`) : _ > 0 ? `right` : `left`;
  return function (_, _, _) {
    let _ = _.selection,
      _ = _ > 0 ? _.$to : _.$from,
      _ = _.empty;
    if (_ instanceof _) {
      if (!_.endOfTextblock(_) || _.depth == 0) return !1;
      ((_ = !1), (_ = _.doc.resolve(_ > 0 ? _.after() : _.before())));
    }
    let _ = _.findGapCursorFrom(_, _, _);
    return _ ? (_ && _(_._.setSelection(new _(_))), !0) : !1;
  };
}
function _(_, _, _) {
  if (!_ || !_.editable) return !1;
  let _ = _.state.doc.resolve(_);
  if (!_.valid(_)) return !1;
  let _ = _.posAtCoords({
    left: _.clientX,
    top: _.clientY,
  });
  return _ && _.inside > -1 && _.isSelectable(_.state.doc.nodeAt(_.inside))
    ? !1
    : (_.dispatch(_.state._.setSelection(new _(_))), !0);
}
function _(_, _) {
  if (
    _.inputType != `insertCompositionText` ||
    !(_.state.selection instanceof _)
  )
    return !1;
  let { $from: _ } = _.state.selection,
    _ = _.parent
      .contentMatchAt(_.index())
      .findWrapping(_.state.schema.nodes.text);
  if (!_) return !1;
  let _ = _.empty;
  for (let _ = _.length - 1; _ >= 0; _--)
    _ = _.from(_[_].createAndFill(null, _));
  let _ = _.state._.replace(_.pos, _.pos, new _(_, 0, 0));
  return (_.setSelection(_.near(_.doc.resolve(_.pos + 1))), _.dispatch(_), !1);
}
function _(_) {
  if (!(_.selection instanceof _)) return null;
  let _ = document.createElement(`div`);
  return (
    (_.className = `ProseMirror-gapcursor`),
    _.create(_.doc, [
      _.widget(_.selection.head, _, {
        key: `gapcursor`,
      }),
    ])
  );
}
var _ = new _({
    props: {
      handlePaste(_, _, _) {
        let _ = _.clipboardData?.getData(`text/plain`).replace(/\n/g, ` `);
        if (_) {
          let _ = _.state._.insertText(_);
          _.dispatch(_);
        }
        return !0;
      },
    },
  }),
  _ = {
    Enter: () => !0,
    "Shift-Enter": () => !0,
    "Mod-Enter": () => !0,
  },
  _ = _.createContext(void 0);
function _(_) {
  let { view: _, pmState: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        view: _,
        pmState: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
var _ = _.memo(function (_) {
  let { schema: _, refOnUpdate: _, bSingleLine: _ } = _;
  return (
    _(
      _.useMemo(
        () =>
          _ &&
          new _({
            view: (_) => ({
              update: (..._) => _.current && _.current(..._),
            }),
          }),
        [_],
      ),
    ),
    _(_.useMemo(() => _(_ ? _ : {}), [_])),
    _(_ ? _ : void 0),
    _(_.useMemo(() => _(), [])),
    _(_.useMemo(() => _(_), [_])),
    _(_.useMemo(() => _(_), [])),
    _(_.useMemo(() => _(_), [_])),
    null
  );
});
function _(_) {
  let { pmState: _ } = _.useContext(_);
  _.useEffect(() => {
    if (_ && _) return _.InstallPlugin(_);
  }, [_, _]);
}
function _() {
  return _.useContext(_)?.view;
}
var _ = _.memo(function (_) {
  let { specs: _ } = _,
    [_, _] = _.useState([]),
    _ = _.useRef(0),
    _ = _.useCallback(
      (_) => (
        _((_) => [
          ..._,
          {
            _: _.current++,
            nodeView: _,
          },
        ]),
        () => _((_) => _.filter((_) => _.nodeView != _))
      ),
      [],
    );
  return (
    _(
      _.useMemo(() => {
        let _ = {};
        return (
          _.filter(Boolean).forEach(
            (_) => (_[_.type.name] = (_, _, _) => new _(_, _, _, _, _)),
          ),
          new _({
            props: {
              nodeViews: _,
            },
          })
        );
      }, [_, _]),
    ),
    _.map(({ _: _, nodeView: _ }) =>
      (0, _.jsx)(
        _,
        {
          nodeView: _,
        },
        _,
      ),
    )
  );
});
function _(_) {
  let {
      element: _,
      spec: _,
      getProps: _,
      onPropsChanged: _,
      actions: _,
      isSelected: _,
    } = _.nodeView,
    [_, _] = _.useReducer((_) => _ + 1, 0);
  return (
    _.useEffect(() => _.Register(_).Unregister, [_, _]),
    _.createPortal(
      _.createElement(_.component, {
        ..._(),
        selected: _(),
        ..._,
      }),
      _,
    )
  );
}
var _ = class {
  dom;
  contentDOM;
  onPropsChanged;
  node;
  selected;
  reactHost;
  destroy;
  constructor(_, _, _, _, _) {
    this.node = _;
    let _ = _.dom.ownerDocument,
      _ = _.createElement(_.type.isInline ? `span` : `div`);
    this.dom = _;
    let _ = _;
    _.bEditableContent &&
      ((_ = this.reactHost = _.createElement(_.type.isInline ? `span` : `div`)),
      (_.contentEditable = `false`),
      _.appendChild(_),
      (this.contentDOM = _.createElement(
        _.type.inlineContent ? `span` : `div`,
      )),
      _.appendChild(this.contentDOM));
    let { selection: _ } = _.state;
    this.selected = _() >= _.from && _() + _.nodeSize <= _._;
    let _ = (_) => {
        let _ = _(_.state._, _, _());
        _ && _.dispatch(_);
      },
      _ = {
        update: _,
        setAttrs: (_, _) => _((_, _, _) => _.setNodeMarkup(_, _, _)),
        removeNode: () => _((_, _, _) => _.delete(_, _ + _.nodeSize)),
        focusView: () => {
          window.setTimeout(() => _.focus(), 1);
        },
      },
      _ = new _();
    ((this.destroy = _({
      element: _,
      spec: _,
      getProps: () => _.readProps(this.node),
      isSelected: () => this.selected,
      onPropsChanged: _,
      actions: _,
    })),
      (this.onPropsChanged = _.Dispatch.bind(_)));
  }
  update(_, _, _) {
    return (
      _.type == this.node.type && ((this.node = _), this.onPropsChanged(), !0)
    );
  }
  ignoreMutation(_) {
    return this.contentDOM && this.contentDOM.contains(_.target)
      ? !1
      : this.reactHost
        ? !0
        : _.type != `selection`;
  }
  stopEvent(_) {
    return !!this.reactHost && this.reactHost.contains(_.target);
  }
  selectNode() {
    ((this.selected = !0), this.onPropsChanged());
  }
  deselectNode() {
    ((this.selected = !1), this.onPropsChanged());
  }
};
function _(_, _, _ = 0) {
  return () => [
    _,
    {
      class: _,
    },
    _,
  ];
}
function _(_, _) {
  return () => [
    _,
    {
      class: _.PreservedUnsupportedTag,
    },
    [
      `span`,
      {
        class: _.Tag,
      },
      `[${_}]`,
    ],
    [`span`, 0],
    [
      `span`,
      {
        class: _.Tag,
      },
      `[/${_}]`,
    ],
  ];
}
function _(_) {
  return {
    tag: `h${_}`,
    BBArgsToAttrs: (_) => ({
      level: _,
      align: _.align || `left`,
    }),
    AttrsToBBArgs: (_) => {
      let _ = {
        tag: `h${_.level}`,
        args: {},
      };
      return (
        _.align && _.align != `left` && _.args && (_.args.align = _.align), _
      );
    },
  };
}
function _(_) {
  return {
    tag: `h${_}`,
    getAttrs(_) {
      return {
        level: _,
        align: _.style.textAlign || `left`,
      };
    },
  };
}
var _ = {
  nodes: {
    paragraph: {
      attrs: {
        align: {
          default: `left`,
        },
      },
      content: `inline*`,
      group: `block`,
      parseDOM: [
        {
          tag: `p`,
          getAttrs(_) {
            return {
              align: _.style.textAlign || `left`,
            };
          },
        },
      ],
      toDOM(_) {
        let _ = {
          class: _(`pm_paragraph`, _.Paragraph),
        };
        return (
          _.attrs.align &&
            _.attrs.align != `left` &&
            (_.style = `text-align: ${_.attrs.align}`),
          [`p`, _, 0]
        );
      },
      bbCode: {
        tag: `p`,
        autocloses: !0,
        BBArgsToAttrs: (_) => ({
          align: _.align,
        }),
        AttrsToBBArgs: (_) => {
          let _ = {
            args: {},
          };
          return (_.align && _.align != `left` && (_.args.align = _.align), _);
        },
      },
    },
    heading: {
      attrs: {
        level: {
          default: 1,
        },
        align: {
          default: `left`,
        },
      },
      content: `inline*`,
      group: `block`,
      defining: !0,
      parseDOM: [1, 2, 3, 4, 5].map(_),
      toDOM(_) {
        let _ = {
          class: `BB_Header${_.attrs.level} ` + _[`Header${_.attrs.level}`],
        };
        return (
          _.attrs.align &&
            _.attrs.align != `left` &&
            (_.style = `text-align: ${_.attrs.align}`),
          [`h` + _.attrs.level, _, 0]
        );
      },
      bbCode: [1, 2, 3, 4, 5].map(_),
    },
    image: {
      inline: !0,
      attrs: {
        src: {},
        alt: {
          default: null,
        },
        title: {
          default: null,
        },
        style: {
          default: void 0,
        },
      },
      group: `inline`,
      draggable: !0,
      parseDOM: [
        {
          tag: `img[src]`,
          getAttrs(_) {
            return {
              src: _.getAttribute(`src`),
              title: _.getAttribute(`title`),
              alt: _.getAttribute(`alt`),
              style: _.getAttribute(`style`),
            };
          },
        },
      ],
      toDOM(_) {
        let { src: _, alt: _, title: _, style: _ } = _.attrs;
        return [
          `img`,
          {
            src: _(_),
            alt: _,
            title: _,
            class: _(_.Image, {
              [_.Image_Inline]: _ === `inline`,
            }),
          },
        ];
      },
      bbCode: {
        tag: `img`,
        BBArgsToAttrs: (_) => ({
          src: _.src,
          style: _.style ?? void 0,
        }),
        AttrsToBBArgs: (_) => ({
          args: {
            src: _.src,
            ...(_.style
              ? {
                  style: _.style,
                }
              : {}),
          },
        }),
        convertContentToAttr: `src`,
      },
    },
    video: {
      inline: !0,
      attrs: {
        webm: {
          default: ``,
        },
        mp4: {
          default: ``,
        },
        poster: {
          default: ``,
        },
        autoplay: {
          default: !0,
        },
        controls: {
          default: !1,
        },
      },
      group: `inline`,
      draggable: !0,
      parseDOM: [
        {
          tag: `video`,
          getAttrs(_) {
            if (_.tagName !== `video`) return;
            let _ = _,
              _ = ``,
              _ = ``;
            for (let _ of _.querySelectorAll(`source`))
              _.type == `video/mp4`
                ? (_ = _.src)
                : _.type == `video/webm` && (_ = _.src);
            return {
              mp4: _,
              webm: _,
              poster: _.poster || ``,
              autoplay: !!_.autoplay,
              controls: !!_.controls,
            };
          },
        },
      ],
      toDOM(_) {
        let { webm: _, mp4: _, poster: _, autoplay: _, controls: _ } = _.attrs,
          _ = [];
        return (
          _ &&
            _.push([
              `source`,
              {
                src: _(_),
                type: `video/webm`,
              },
            ]),
          _ &&
            _.push([
              `source`,
              {
                src: _(_),
                type: `video/mp4`,
              },
            ]),
          [
            `video`,
            {
              poster: _(_),
              autoPlay: !!_,
              controls: !!_,
              loop: !_ && !!_,
            },
            ..._,
          ]
        );
      },
      bbCode: {
        tag: `video`,
        BBArgsToAttrs: (_) => ({
          webm: _.webm,
          mp4: _.mp4,
          poster: _.poster,
          autoplay: _.autoplay == `true`,
          controls: _.controls == `true`,
        }),
        AttrsToBBArgs: (_) => ({
          args: {
            webm: _.webm || ``,
            mp4: _.mp4 || ``,
            poster: _.poster || ``,
            autoplay: _.autoplay ? `true` : `false`,
            controls: _.controls ? `true` : `false`,
          },
        }),
      },
    },
    bullet_list: {
      ..._,
      content: `list_item+`,
      group: `block`,
      toDOM: _(`ul`, _.List),
      bbCode: {
        tag: `list`,
      },
    },
    ordered_list: {
      ..._,
      content: `list_item+`,
      group: `block`,
      toDOM: _(`ol`, _.OrderedList),
      bbCode: {
        tag: `olist`,
      },
    },
    list_item: {
      ..._,
      content: `paragraph block*`,
      toDOM: _(`li`, _.ListItem),
      bbCode: {
        tag: `*`,
        autocloses: !0,
      },
    },
    code_block: {
      content: `inline*`,
      marks: ``,
      group: `block`,
      code: !0,
      defining: !0,
      parseDOM: [
        {
          tag: `pre`,
          preserveWhitespace: `full`,
        },
      ],
      toDOM() {
        return [
          `pre`,
          {
            class: _.CodeBlock,
          },
          [
            `code`,
            {
              class: _.Code,
            },
            0,
          ],
        ];
      },
      bbCode: {
        tag: `code`,
      },
    },
  },
  marks: {
    strong: {
      parseDOM: [
        {
          tag: `strong`,
        },
        {
          tag: `b`,
          getAttrs: (_) => _.style.fontWeight != `normal` && null,
        },
        {
          style: `font-weight=400`,
          clearMark: (_) => _.type.name == `strong`,
        },
        {
          style: `font-weight`,
          getAttrs: (_) => /^(bold(er)?|[5-9]\d{2,})$/.test(_) && null,
        },
      ],
      toDOM: _(`b`, _(`BB_Bold`, _.Bold)),
      bbCode: {
        tag: `b`,
      },
    },
    italic: {
      parseDOM: [
        {
          tag: `i`,
        },
        {
          tag: `em`,
        },
        {
          style: `font-style=italic`,
        },
        {
          style: `font-style=normal`,
          clearMark: (_) => _.type.name == `em`,
        },
      ],
      toDOM: _(`i`, _(`BB_Italic`, _.Italic)),
      bbCode: {
        tag: `i`,
      },
    },
    underline: {
      parseDOM: [
        {
          tag: `u`,
        },
        {
          style: `text-decoration=underline`,
        },
      ],
      toDOM: _(`u`, _(`BB_Underline`, _.Underline)),
      bbCode: {
        tag: `u`,
      },
    },
    strike: {
      parseDOM: [
        {
          style: `text-decoration=line-through`,
        },
      ],
      toDOM: _(`span`, _(`BB_Strike`, _.Strike)),
      bbCode: {
        tag: `strike`,
      },
    },
    code: {
      parseDOM: [
        {
          tag: `code`,
        },
      ],
      toDOM: _(`code`, _(`BB_Code`, _.Code)),
      bbCode: {
        tag: `c`,
      },
    },
    link: {
      attrs: {
        href: {},
        title: {
          default: null,
        },
      },
      inclusive: !1,
      parseDOM: [
        {
          tag: `a[href]`,
          getAttrs(_) {
            return {
              href: _(_.getAttribute(`href`) ?? ``),
              title: _.getAttribute(`title`),
            };
          },
        },
      ],
      toDOM(_) {
        let { href: _, title: _ } = _.attrs;
        return [
          `a`,
          {
            href: _(_),
            title: _,
            class: `BB_Link`,
          },
          0,
        ];
      },
      bbCode: {
        tag: `url`,
        BBArgsToAttrs: (_) => ({
          href: _[``],
        }),
        AttrsToBBArgs: (_) => ({
          args: {
            "": _.href,
          },
        }),
        convertContentToAttr: `href`,
      },
    },
  },
};
function _(_, _, _) {
  return _(
    {
      schema: _.pm_schema,
      config: _.pm_to_bbcode_config,
      bUseBackslashEscapes: _?.bUseBackslashEscapes ?? !0,
    },
    _,
    [],
    !1,
  );
}
function _(_, _, _, _) {
  let { schema: _, config: _ } = _,
    _ = _.marks,
    _ = ``,
    _ = _.mapNodes.get(_.type),
    { tag: _, args: _ } = _(_, _);
  _ == `emoticon` ? (_ += `:`) : _ && (_ += _(_, _, _?.bVerbatimArgs));
  let _ = _ || !!_?.bVerbatimContent,
    _ = !1;
  return (
    _.content.forEach((_) => {
      if (
        (([_, _] = _(_, _, _.marks, _)),
        ([_, _] = _(_, _, _.marks, _)),
        _.type.isText)
      ) {
        let _ = _.text || ``;
        _ += _ || !_.bUseBackslashEscapes ? _ : _(_);
      } else if (_.type == _.nodes.hard_break)
        _ += `
`;
      else {
        let _ = _(_, _);
        (_ &&
          _ &&
          (_ += `
`),
          (_ += _(_, _, _, _)),
          (_ = _));
        return;
      }
      _ = !1;
    }),
    ([_] = _(_, _, _, _)),
    _ == `emoticon` ? (_ += `:`) : _ && (_ += _(_)),
    _
  );
}
function _(_, _) {
  return _.type.isBlock && !_(_.mapNodes.get(_.type), _).tag;
}
function _(_, _, _, _) {
  let _ = [];
  for (let _ of _) _.indexOf(_) === -1 && _.push(_);
  if (!_.length) return [_, _];
  let _ = _.slice();
  for (; _.length && (_(_.length, `no marks left to close`), _.length);) {
    let _ = _.pop(),
      { tag: _ } = _(_.mapMarks.get(_.type), _);
    _ += _(_);
    let _ = _.indexOf(_);
    _ != -1 && _.splice(_, 1);
  }
  return [_, _];
}
function _(_, _, _, _) {
  let _;
  for (let _ of _)
    if (_.indexOf(_) === -1) {
      _ ||= _.slice();
      let _ = _.mapMarks.get(_.type);
      if ((_(_, `mark missing bbtag`), _)) {
        _.push(_);
        let { args: _, tag: _ } = _(_, _);
        _ += _(_, _);
      }
    }
  return [_, _ ?? _];
}
function _(_, _) {
  if (_ && _.AttrsToBBArgs) {
    let { tag: _ = _.tag, args: _ = {} } = _.AttrsToBBArgs(_.attrs, _);
    return {
      tag: _,
      args: _,
    };
  }
  return {
    tag: _?.tag,
    args: {},
  };
}
function _(_, _) {
  if (_ && _.AttrsToBBArgs) {
    let { tag: _ = _.tag, args: _ = {} } = _.AttrsToBBArgs(_.attrs, _);
    return {
      tag: _,
      args: _,
    };
  }
  return {
    tag: _?.tag,
    args: {},
  };
}
var _ = new _(`CProseMirrorState - OnChange`),
  _ = class {
    m_bbcode;
    m_currentDoc;
    m_bHasUncomittedChanges = !1;
    m_schemaConfig;
    m_bbcodeParser;
    m_bUseBackslashEscapes;
    m_onStateChangedCallbacks = new _();
    m_fnCommitChanges;
    m_view;
    m_state;
    constructor(_, _, _, _) {
      let { parser: _, bUseBackslashEscapes: _ = !0 } = _ ?? {};
      ((this.m_schemaConfig = _),
        (this.m_bUseBackslashEscapes = _),
        (this.m_bbcodeParser = new _(_, {
          ..._,
          bUseBackslashEscapes: _,
        })),
        (this.m_bbcode = _),
        (this.m_fnCommitChanges = _),
        (this.m_state = this.ConstructState()));
    }
    CommitChanges() {
      this.m_currentDoc &&
        this.m_bHasUncomittedChanges &&
        ((this.m_bbcode = _(this.m_currentDoc, this.m_schemaConfig, {
          bUseBackslashEscapes: this.m_bUseBackslashEscapes,
        })),
        this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
        (this.m_bHasUncomittedChanges = !1));
    }
    BHasUncomittedChanges() {
      return this.m_bHasUncomittedChanges;
    }
    UpdateState(_) {
      let _ = _(this.m_view?.state._ || this.m_state._);
      _ &&
        _.docChanged &&
        (this.m_view
          ? this.m_view.dispatch(_)
          : (this.m_state = this.m_state.apply(_)));
    }
    get state() {
      return this.m_state;
    }
    get schemaConfig() {
      return this.m_schemaConfig;
    }
    get bbcodeParser() {
      return this.m_bbcodeParser;
    }
    get OnStateChangedCallbacks() {
      return this.m_onStateChangedCallbacks;
    }
    ConstructState() {
      let _ = new _({
          key: _,
          view: (_) => (
            console.assert(!this.m_view),
            (this.m_view = _),
            {
              update: (_, _) => this.OnStateChange(_, _.state),
              destroy: () => (this.m_view = void 0),
            }
          ),
        }),
        _ = [_(), _];
      return _.create({
        schema: this.m_schemaConfig.pm_schema,
        doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
        plugins: _,
      });
    }
    InstallPlugin(_) {
      let _ = this.m_view ? this.m_view.state : this.m_state;
      return (
        _.plugins.includes(_) ||
          ((this.m_state = _.reconfigure({
            plugins: [..._.plugins, _],
          })),
          this.m_view?.updateState(this.m_state)),
        () => {
          let _ = this.m_view ? this.m_view.state : this.m_state;
          ((this.m_state = _.reconfigure({
            plugins: _.plugins.filter((_) => _ != _),
          })),
            this.m_view?.updateState(this.m_state));
        }
      );
    }
    OnStateChange(_, _) {
      ((this.m_state = _),
        _.doc &&
          _.doc != _.doc &&
          ((this.m_currentDoc = _.doc),
          (this.m_bHasUncomittedChanges = !0),
          this.m_onStateChangedCallbacks.Dispatch(this.m_currentDoc, _.doc)));
    }
    ReplaceDocument(_) {
      this.m_bbcode != _ &&
        this.UpdateState((_) => {
          this.m_bbcode = _;
          let _ = this.m_bbcodeParser.ParseBBCode(_);
          return (
            (_ = this.m_state._.replaceWith(
              0,
              this.m_state.doc.content.size,
              _,
            ).scrollIntoView()),
            _
          );
        });
    }
  };
function _(_, _) {
  _(_?.OnStateChangedCallbacks, _);
}
function _(_, _) {
  let { msAutosaveTimeout: _ = 1e3, msMaxInterval: _ = _ * 10 } = _ || {},
    [_, _] = _.useState(!1),
    _ = _.useRef(0);
  return (
    _(
      _,
      _.useCallback(() => {
        ((_.current = performance.now()), _(!0));
      }, []),
    ),
    _.useEffect(() => {
      if (!_ || !_) return;
      let _ = performance.now(),
        _ = (_ = !1) => {
          _ = void 0;
          let _ = performance.now(),
            _ = _ - _.current;
          _ || _ >= _ || _ - _ >= _
            ? (console.log(`Committing changes`), _.CommitChanges(), _(!1))
            : (_ = window.setTimeout(_, _ - _));
        },
        _ = window.setTimeout(_, _);
      return () => {
        _ && (window.clearTimeout(_), _(!0));
      };
    }, [_, _, _, _]),
    {
      bDirty: _,
    }
  );
}
var _ = (0, _.createContext)(null),
  _ = () => (0, _.useContext)(_);
function _(_, _) {
  return _ ? _ + `?t=` + _ : null;
}
function _(_) {
  return _ && !_(_);
}
function _(_) {
  return _ && `extra_asset_name` in _;
}
function _(_) {
  if (_) return _(_) ? _.name : _.extra_asset_name;
}
function _(_, _) {
  if (!_?.encodings) return null;
  if (_.encodings.some((_) => _.extension.startsWith(`poster.`))) {
    let _;
    if (
      (_
        ? ((_ = _.encodings.find((_) => !_.extension.startsWith(`poster.`))),
          document
            .createElement(`video`)
            .canPlayType(`video/webm;codecs=vp9`) &&
            (_ = _.encodings?.find((_) => _.extension === `webm`) ?? _))
        : (_ = _.encodings.find((_) => _.extension.startsWith(`poster.`))),
      _)
    )
      return {
        url: _.url,
        usage: _(_.extension),
      };
  }
  let _ = _.encodings[0];
  return _
    ? {
        url: _.url,
        usage: _(_.extension),
      }
    : null;
}
function _(_) {
  switch (_) {
    case `mp4`:
    case `webm`:
      return 1;
  }
  return 0;
}
function _(_, _) {
  if (!_ || Object.keys(_).length == 0) return null;
  if (Object.keys(_).length == 1) return Object.values(_)._(0);
  let _ = _[_(_)];
  return _ || ((_ = _[_(_ == 29 ? 6 : 0)]), _) ? _ : _ == -1 ? _[0] : null;
}
function _(_, _ = 0, _ = 0) {
  let _ = _(_, !1, _);
  return _ ? _(_.url, _) : null;
}
function _(_, _, _ = 0) {
  if (!_) return;
  if (_(_))
    return {
      url: _.url,
      usage: 0,
    };
  let _ = _(_.images, _);
  return _ ? _(_, _) : null;
}
function _(_, _ = 0) {
  if (_) return _(_) ? _.name : _.alt_text?.[_(_)];
}
function _(_) {
  return (_?.images && Object.keys(_.images).map((_) => _(_))) ?? [];
}
function _(_) {
  if (_)
    return (_(_) ? _.name : _.extra_asset_name).replace(
      /^\{STEAM_APP_IMAGE\}\/extras\//,
      ``,
    );
}
function _(_) {
  return `{STEAM_APP_IMAGE}/extras/${_}`;
}
var _ = `image/png, image/jpeg, image/gif, image/webp, video/mp4, video/webm`,
  _ = `i47CWRgVvdU-`,
  _ = `Fu7Ri-y1cQI-`,
  _ = class extends _ {
    m_bLockedToSpecificAsset;
    m_fnGetImageOptions;
    m_nMaxFileSize;
    m_rgCurrentImageOptionKey = void 0;
    constructor(_, _, _, _, _, _, _) {
      let _ = _(_);
      (super(_, _, _, _.src, _),
        _(this),
        (this.m_bLockedToSpecificAsset = _),
        (this.m_fnGetImageOptions = _),
        (this.m_nMaxFileSize = _));
    }
    IsValidAssetType(_, _) {
      let _ = this.GetCurrentImageOption(),
        _ = _?.width ?? 0,
        _ = _?.height ?? 0,
        _ = _ && _ != this.fileType,
        _ = this.IsFileTypeSupported(this.fileType),
        _ = +!!this.BIsVideo(),
        _ =
          _ > 0 && _ > 0
            ? Math.abs(this.width - _) <= _ && Math.abs(this.height - _) <= _
            : !0,
        _ = _?.bMismatchedNewSizes,
        _ = ``;
      _
        ? _
          ? (_ = _(`#ImageUpload_InvalidFormat`, _(_) ?? ``))
          : _?.groupName.trim().length
            ? this.file.size > this.m_nMaxFileSize &&
              (_ = _(`#ImageUpload_ExceedsMaxFileSize`, _(this.m_nMaxFileSize)))
            : (_ = _(`#ImageUpload_EmptyBaseName`))
        : (_ = _(`#ImageUpload_InvalidFormatSelected`));
      let _ = [],
        _ = [];
      return (
        !_ && _
          ? _.push(_(`#ImageUpload_InvalidResolution`, _.groupName))
          : _ &&
            _ &&
            _.push(_(`#ImageUpload_MismatchedResolution`, _.groupName)),
        (_?.rgExistingLanguages?.length ?? 0) > 1 &&
          this.language &&
          _?.rgExistingLanguages.includes(this.language) &&
          _.push(
            _(
              `#ImageUpload_ReplaceLanguage`,
              _(`#Language_` + _(this.language)),
            ),
          ),
        {
          error: _,
          messages: _,
          warnings: _,
          needsCrop: !1,
          match: this.GetCurrentImageOption(),
        }
      );
    }
    BIsOriginalMinimumDimensions(_) {
      return !0;
    }
    FileTypeMatchesImageTypes(_) {
      return !0;
    }
    BIsVideo() {
      return _.includes(this.fileType);
    }
    BSupportsLanguages() {
      return !0;
    }
    GetResizeDimension() {}
    get ImageOptions() {
      let _ = this.filename.lastIndexOf(`.`),
        _ = _ == -1 ? this.filename : this.filename.slice(0, _),
        _ = this.m_fnGetImageOptions();
      return (
        this.m_bLockedToSpecificAsset ||
          _.find((_) => _.groupName == _) ||
          _.push({
            sKey: _,
            fnGetLabelText: () => _,
            width: this.width,
            height: this.height,
            bEnforceDimensions: !1,
            groupName: _,
            bMismatchedNewSizes: !1,
            rgExistingLanguages: [],
          }),
        _
      );
    }
    GetCurrentImageOptionKey() {
      return this.m_rgCurrentImageOptionKey;
    }
    GetCurrentImageOption() {
      let _ = this.m_fnGetImageOptions();
      if (this.m_rgCurrentImageOptionKey)
        return _.find((_) => _.sKey == this.m_rgCurrentImageOptionKey);
      let _ = _.find((_) => _.groupName == _(this.filename, -1).baseFilename);
      if (_) return _;
      if (_.length == 1) return _[0];
    }
    SetCurrentImageOption(_) {
      this.m_rgCurrentImageOptionKey = _?.sKey;
    }
    GetImageOptionLabel() {
      return _.createElement(
        `span`,
        null,
        _(`#ImageUpload_ImageGroup`),
        _.createElement(_, {
          tooltip: _(`#ImageUpload_ImageGroup_ttip`),
        }),
      );
    }
    IsFileTypeSupported(_) {
      switch (_) {
        case 1:
        case 3:
        case 10:
        case 2:
        case 4:
        case 5:
          return !0;
        default:
          return !1;
      }
    }
  };
(_([_], _.prototype, `m_rgCurrentImageOptionKey`, void 0),
  _([_], _.prototype, `ImageOptions`, null),
  _([_], _.prototype, `SetCurrentImageOption`, null));
var _ = _(_()),
  _ = 104857600,
  _ = 6291456,
  _ = class extends _ {
    m_cancel = void 0;
    m_urls;
    m_regexInvalidFilenameCharacters;
    m_filesToUpload = _.array();
    m_onlyAssetGroup = void 0;
    m_rgExistingAssetGroups = void 0;
    m_rgImageSizes = void 0;
    constructor(_, _) {
      (super(),
        _(this),
        (this.m_urls = _),
        (this.m_regexInvalidFilenameCharacters = _));
    }
    GetErrorsFromErrorResponse(_) {
      let _,
        _ = _?.response?.data?.errors;
      return (
        _
          ? (_ = [
              ..._.map((_, _) =>
                _.createElement(
                  `span`,
                  {
                    key: `error${_}`,
                  },
                  _,
                ),
              ),
              _?.length > 0
                ? _.createElement(`br`, {
                    key: `br`,
                  })
                : void 0,
              _.createElement(
                `a`,
                {
                  href: `https://partner.steamgames.com/doc/store/page/assets#error`,
                  key: `a`,
                },
                _(`#StoreAdmin_ExtraAssetUpload_UnknownUploadFailure`),
              ),
            ])
          : console.error(
              `CExtraAssetsImageUploader.UploadSingleImage failed with unknown error`,
              _,
            ),
        _
      );
    }
    GetUploadImages() {
      return this.m_filesToUpload;
    }
    ClearImages() {
      this.m_filesToUpload = _.array();
    }
    DeleteUploadImage(_) {
      let _ = this.m_filesToUpload.findIndex(
        (_) => _.file == _.file && _.uploadTime == _.uploadTime,
      );
      _ >= 0 &&
        (this.m_filesToUpload.splice(_, 1),
        (this.m_filesToUpload = [...this.m_filesToUpload]));
    }
    SetExistingAssetGroups(_, _) {
      ((this.m_rgExistingAssetGroups = _), (this.m_rgImageSizes = _));
    }
    SetOnlyAssetGroup(_) {
      this.m_onlyAssetGroup = _;
    }
    async AddImageForLanguage(_, _) {
      if (_(_.type) || _(_.type)) {
        let _ = await _(_, _(_.type));
        if (_) {
          let _ = _.name
              .toLowerCase()
              .replace(this.m_regexInvalidFilenameCharacters, `_`),
            _ = new _(
              !this.m_onlyAssetGroup,
              () => this.GetImageOptions(),
              _,
              _,
              _,
              _,
              _,
            );
          return ((this.m_filesToUpload = [...this.m_filesToUpload, _]), !0);
        }
      } else
        console.error(
          `AddImageForLanguage failed to determine file type, not image, video or subtitle`,
          _,
          _.type,
        );
      return !1;
    }
    async UploadAllImages(_, _) {
      this.m_cancel = _.default.CancelToken.source();
      let _ = _(this.GetUploadImages(), _, _),
        _ = _.map((_) => _.GetCurrentImageOption()?.groupName ?? _.filename),
        _ = 0,
        _ = new Map(),
        _ = new Map(),
        _ = 0,
        _ = async () => {
          for (; _ < _.length;) {
            let _ = _++,
              _ = _[_],
              _ = _[_];
            ((_.status = `uploading`), _++);
            try {
              let _ = await this.StartImageUpload(_, _, this.m_cancel.token);
              if (_.bSuccess) {
                let _ = _();
                _.set(_.nRequestId, (_) => _.resolve(_));
                let _ = new Promise((_, _) => setTimeout(() => _(), 3e5));
                try {
                  let _ = await Promise.race([_, _.promise]);
                  _.set(_.nRequestId, {
                    bSuccess: _ == 1,
                    uploadImage: _,
                    strGroupName: _,
                    elErrorMessage:
                      _ == 1 ? void 0 : _(`#MediaConvert_InternalError`),
                  });
                } catch {
                  _.set(_.nRequestId, {
                    bSuccess: !1,
                    uploadImage: _,
                    strGroupName: _,
                    elErrorMessage: _(`#StoreAdmin_ExtraAssetUpload_Timeout`),
                  });
                } finally {
                  _.delete(_.nRequestId);
                }
              } else
                (_.push({
                  bSuccess: !1,
                  image: _,
                  uploadResult: [],
                }),
                  (_.status = _.bSuccess ? `success` : `failed`),
                  (_.message =
                    !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ``));
            } finally {
              _--;
            }
          }
        };
      Array.from(
        {
          length: 4,
        },
        () => _(),
      );
      let _ = [];
      for (;;) {
        if (_.size > 0) {
          let _ = Array.from(_.keys()),
            { bSuccess: _, rgStatus: _ } = await this.CheckUploadStatus(
              _,
              this.m_cancel.token,
            );
          if (_) {
            for (let [_, _] of _(_, _))
              if (_ != 22) {
                let _ = _.get(_);
                (_.delete(_), _?.(_));
              }
          }
        }
        let _ = new Map(_);
        _.clear();
        for (let [
          _,
          { bSuccess: _, uploadImage: _, strGroupName: _, elErrorMessage: _ },
        ] of _) {
          if (!_) {
            ((_.status = `failed`),
              (_.message = _),
              _.push({
                bSuccess: !1,
                image: _,
                uploadResult: [],
              }));
            continue;
          }
          let _ = await this.CompleteUpload(
            _,
            _,
            _.language,
            this.m_cancel.token,
          );
          ((_.status = _.bSuccess ? `success` : `failed`),
            (_.message = _.bSuccess ? `` : _.elErrorMessage),
            _.push({
              bSuccess: _.bSuccess,
              image: _,
              uploadResult: [],
            }));
        }
        if (_ >= _.length && _ == 0 && _.size == 0) break;
        (this.m_cancel.token.throwIfRequested(), await _(1e3));
      }
      let { rgExtraAssets: _ } = await this.GetExtraAssets(this.m_cancel.token);
      return (
        _.filter((_) => _.bSuccess).forEach((_) => (_.uploadResult = _)), _
      );
    }
    async StartImageUpload(_, _, _) {
      let _;
      if (_.file.size > _) {
        let _ = new FormData();
        (_.append(`sessionid`, _()),
          _.append(`name`, _),
          _.append(`file_size`, `` + _.file.size));
        let _ = await this.MakePost(
          this.m_urls.strGetUploadUrlForAsset,
          _,
          {
            "Content-Type": `multipart/form-data`,
          },
          `GetUploadUrl`,
          _,
        );
        if (!_.bSuccess) return _;
        _ = _.data;
        let _ = _(
          {
            "Content-Type": `application/octet-stream`,
          },
          _.headers_for_upload,
        );
        if (
          !(await _.default
            .put(_.upload_url, _.file, {
              headers: _,
              cancelToken: _,
            })
            .then((_) => _.status == 200 || _.status == 201)
            .catch(() => !1))
        )
          return (
            console.warn(
              `CExtraAssetsImageUploader put to CDNStorage url failed`,
              _.upload_url,
            ),
            {
              bSuccess: !1,
            }
          );
      }
      {
        let _ = new FormData();
        (_.append(`sessionid`, _()),
          _.append(`asset_type`, `extra_asset_v2`),
          _.append(`name`, _),
          _
            ? _.append(`temp_file_id`, _.temp_file_id)
            : _.append(`file`, _.file));
        let _ = await this.MakePost(
          this.m_urls.strBeginConvert,
          _,
          {
            "Content-Type": `multipart/form-data`,
          },
          `BeginUploadUrl`,
          _,
        );
        if (!_.bSuccess) return _;
        let _ = _.data.request_id;
        return (
          (_.status = `processing`),
          {
            bSuccess: !0,
            nRequestId: _,
          }
        );
      }
    }
    async CheckUploadStatus(_, _) {
      let _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`request_ids`, _.join(`,`)));
      let _ = await this.MakePost(
        this.m_urls.strCheckConvertStatus,
        _,
        void 0,
        `CheckUploadStatus`,
        _,
      );
      return _.bSuccess
        ? {
            bSuccess: !0,
            rgStatus: _.data.status,
          }
        : _;
    }
    async CompleteUpload(_, _, _, _) {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`request_id`, _.toString()),
        _.append(`name`, _),
        _.append(`asset_type`, `extra_asset_v2`),
        _ != -1 && _.append(`language`, _(_)));
      let _ = await this.MakePost(
        this.m_urls.strCompleteConvert,
        _,
        void 0,
        `CompleteUpload`,
        _,
      );
      return _.bSuccess
        ? (_(
            _.data?.complete,
            `CompleteUpload shouldn't be run until all uploads are complete`,
          ),
          {
            bSuccess: !0,
          })
        : _;
    }
    async GetExtraAssets(_) {
      let _ = new FormData();
      _.append(`sessionid`, _());
      let _ = await this.MakePost(
        this.m_urls.strGetExtraAssets,
        _,
        void 0,
        `GetExtraAssets`,
        _,
      );
      return _.bSuccess
        ? {
            bSuccess: !0,
            rgExtraAssets: _.data?.rgExtraAssets,
          }
        : _;
    }
    async MakePost(_, _, _, _, _) {
      let _;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          headers: _,
          cancelToken: _,
        });
        if (_.status == 200 && typeof _.data == `object`) _ = _.data;
        else
          return (
            console.warn(`CExtraAssetsImageUploader ${_} failed`, _),
            {
              bSuccess: !1,
            }
          );
      } catch (_) {
        let _ = this.GetErrorsFromErrorResponse(_);
        return (
          console.warn(`CExtraAssetsImageUploader ${_} failed`, _, _),
          {
            bSuccess: !1,
            elErrorMessage: _,
          }
        );
      }
      return {
        bSuccess: !0,
        data: _,
      };
    }
    CancelAllUploads() {
      this.m_cancel?.cancel(_(`#ImageUpload_CancelRequest`));
    }
    GetImageOptions() {
      let _ = (_, _, _, _, _, _) => ({
          baseFilename: _,
          language: _,
          bNew: _,
          size: {
            width: _,
            height: _,
          },
          fileSize: _,
        }),
        _ = [];
      for (let _ of this.m_filesToUpload.filter(
        (_) => _.status == `pending` || _(_.status),
      ))
        if (this.m_onlyAssetGroup)
          _.push(
            _(
              this.m_onlyAssetGroup.baseFilename,
              _.language ?? 0,
              !0,
              _.width,
              _.height,
              _.file.size,
            ),
          );
        else {
          let _ = _(_.filename).baseFilename,
            _ = _.GetCurrentImageOptionKey() ?? _;
          (_.push(_(_, _.language ?? 0, !0, _.width, _.height, _.file.size)),
            _ != _ && _.push(_(_, -1, !0, _.width, _.height, _.file.size)));
        }
      let _ = (_, _) =>
          _.languages.map((_) =>
            _(_.baseFilename, _, !1, _?.width ?? 0, _?.height ?? 0, 0),
          ),
        _ = this.m_rgExistingAssetGroups ?? [],
        _ = this.m_rgImageSizes ?? [];
      if (this.m_onlyAssetGroup) {
        let _ = _.findIndex(
          (_) => _.baseFilename == this.m_onlyAssetGroup.baseFilename,
        );
        (_(_ != -1, `onlyAssetGroup isn't in the existing assets list`),
          (_ = [_[_]]),
          (_ = [_[_]]));
      }
      let _ = _(_, _).flatMap(([_, _]) => _(_, _)),
        _ = _.concat(_).reduce((_, _) => {
          let _ = _.get(_.baseFilename) ?? [];
          return (_.push(_), _.set(_.baseFilename, _), _);
        }, new Map()),
        _ = [];
      for (let _ of _.keys()) {
        let _ = _.get(_).filter((_) => _.language != -1),
          _ = new Set(_.map((_) => _.language)).size,
          _ = _ > 1 ? _(`#StoreAdmin_ExtraAssetUpload_LocalizeGroup`, _, _) : _,
          _ = new Map();
        for (let _ of _.filter((_) => !_.bNew).concat(_.filter((_) => _.bNew)))
          _.set(_.language, _);
        let _ = Array.from(_.values()).filter((_) => !_.bNew),
          _ = _.length > 0 ? _[0].size : void 0,
          _ = _.filter((_) => _.bNew)._(0)?.size,
          _ = _.filter((_) => _.bNew).some(
            (_) => _.size.width != _.width || _.size.height != _.height,
          ),
          _ = {
            sKey: _,
            fnGetLabelText: () => _,
            width: _?.width ?? 0,
            height: _?.height ?? 0,
            bEnforceDimensions: !1,
            groupName: _,
            bMismatchedNewSizes: _,
            rgExistingLanguages: _.filter((_) => !_.bNew).map(
              (_) => _.language,
            ),
          };
        _.push(_);
      }
      return (_.sort((_, _) => (_.sKey < _.sKey ? -1 : +(_.sKey > _.sKey))), _);
    }
  };
(_([_], _.prototype, `m_filesToUpload`, void 0),
  _([_], _.prototype, `m_onlyAssetGroup`, void 0),
  _([_], _.prototype, `m_rgExistingAssetGroups`, void 0),
  _([_], _.prototype, `m_rgImageSizes`, void 0),
  _([_], _.prototype, `GetUploadImages`, null),
  _([_], _.prototype, `ClearImages`, null),
  _([_], _.prototype, `DeleteUploadImage`, null),
  _([_], _.prototype, `SetExistingAssetGroups`, null),
  _([_], _.prototype, `SetOnlyAssetGroup`, null),
  _([_], _.prototype, `AddImageForLanguage`, null));
function _() {
  let _ = _(`ajaxgetextraassets`),
    _ = _(`ajaxgetuploadurlforasset`),
    _ = _(`ajaxbeginconvertassetasync`),
    _ = _(`ajaxcheckconvertassetsstatus`),
    _ = _(`ajaxtrytocompleteconvertasset`),
    _ = _.useMemo(
      () => ({
        strGetExtraAssets: _,
        strGetUploadUrlForAsset: _,
        strBeginConvert: _,
        strCheckConvertStatus: _,
        strCompleteConvert: _,
      }),
      [_, _, _, _, _],
    ),
    { regexInvalidFilenameCharacters: _ } = _();
  return _.useMemo(() => new _(_, _), [_, _]);
}
function _(_) {
  let { rgUploads: _ } = _,
    _ = _.useMemo(() => new Set(), []),
    _ = _.findIndex(({ _: _ }) => !_.has(_)),
    _ = _(),
    _ = (_) => {
      (_.add(_), _());
    },
    _ = (_) => {
      (_.delete(_), _());
    };
  return _.map(({ _: _, upload: _ }, _) =>
    (0, _.jsx)(
      _,
      {
        active: _ == _,
        upload: _,
        fnUploadPrepared: () => _(_),
        fnUploadComplete: () => _(_),
      },
      _,
    ),
  );
}
function _(_) {
  let { upload: _, active: _, fnUploadPrepared: _, fnUploadComplete: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0);
  _.useEffect(() => {
    (_ &&
      (_(_.file) ||
        _(_(`#StoreAdmin_UploadError_UnsupportedFileType`, _.file.name))),
      _(_));
  }, [_, _]);
  let [_, _] = _.useState(!1),
    _ = _(),
    _ = _();
  return _
    ? _
      ? (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(_, {
            bAlertDialog: !0,
            strTitle: _(`#Error_Generic`),
            strDescription: _,
            strOKButtonText: _(`#Button_OK`),
            closeModal: () => _.onCancel(),
          }),
        })
      : (0, _.jsx)(_, {
          upload: _,
          isUploading: _,
          doUpload: async (_, _) => {
            (_(), _(!0));
            try {
              if (!(await _.AddImageForLanguage(_.file, _))) {
                _(_(`#StoreAdmin_UploadError_UnableToGetFileInfo`));
                return;
              }
              let _ = (await _.UploadAllImages())[0];
              if (!_ || !_.bSuccess) {
                _(
                  _?.image?.message
                    ? _(`#StoreAdmin_UploadError_Generic`, _.image.message)
                    : _(`#StoreAdmin_UploadError_Unknown`),
                );
                return;
              }
              (_(_.uploadResult), _.onComplete(_(_)));
            } finally {
              (_(!1), _());
            }
          },
        })
    : null;
}
function _(_) {
  let { upload: _, isUploading: _, doUpload: _ } = _,
    { file: _, onCancel: _ } = _,
    { rgExtraAssets: _, regexInvalidFilenameCharacters: _ } = _(),
    _ = _.useCallback((_) => _?.replace(_, `_`).toLowerCase() ?? ``, [_]),
    { baseFilename: _, language: _ } = _(_.name, -1),
    [_, _] = _.useState(() => _(_)),
    _ = _.useMemo(() => _(_), [_, _]),
    _ = _(_.languages),
    _ = _(
      _.map((_) => _.data),
      _,
      _.activeLanguage,
    ),
    [_, _] = _.useState(_),
    [_, _] = _.useState(void 0),
    _ = _.name;
  _.useEffect(() => {
    _(() => {
      if (!_) return;
      let { baseFilename: _ } = _(_),
        _ = _.find((_) => _(_) == _);
      if (_) return _(_) ? _ : _.images?.[_(_)];
    });
  }, [_, _, _, _]);
  let _ = _(_) && !_ ? () => _(_, _) : void 0,
    _ = (_) => {
      (_.preventDefault(), _ && _());
    },
    _ = _.useCallback(() => {
      _.onComplete(_(_));
    }, [_, _]),
    _ = _(
      _ ? `#StoreAdmin_ExtraAssetUpload_UploadAndReplace` : `#Button_Upload`,
    );
  return (0, _.jsx)(_, {
    active: !0,
    onDismiss: _,
    className: void 0,
    children: (0, _.jsxs)(_, {
      onSubmit: _,
      children: [
        (0, _.jsx)(_, {
          children: _(`#StoreAdmin_ExtraAssetUpload_UploadNew`),
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              file: _,
              isVideo: _(_),
              duplicate: _,
              bShowThrobber: _,
              onUseDuplicate: _,
            }),
            (0, _.jsx)(_, {
              name: _,
              validatedName: _,
              setName: _,
              disabled: _,
            }),
            _.length > 1 &&
              (0, _.jsx)(_, {
                rgOptions: _,
                selectedOption: _,
                onChange: (_) => _(_.data),
              }),
          ],
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            onOK: _,
            strOKText: _,
            bOKDisabled: !_,
            onCancel: _,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      file: _,
      isVideo: _,
      duplicate: _,
      bShowThrobber: _,
      onUseDuplicate: _,
    } = _,
    _ = _.useMemo(() => URL.createObjectURL(_), [_]),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _(`#StoreAdmin_ExtraAssetUpload_FileNameInuse`),
        }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `bLMzne8yJ48-`),
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `gHYJBNEBibQ-`,
              children: (0, _.jsx)(_, {
                position: `center`,
                size: `xlarge`,
              }),
            }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: _(`Fu7Ri-y1cQI-`, `YH8VYJtLpUg-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: _(`#StoreAdmin_ExtraAssetUpload_Original`),
                }),
                (0, _.jsx)(`img`, {
                  src: `name` in _ ? _(_, 0, _) : _(_(_, !1)?.url, _),
                  className: `XPCSY4OUfs8-`,
                }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: _(`#StoreAdmin_ExtraAssetUpload_Replacement`),
                }),
              !_ &&
                (0, _.jsx)(`img`, {
                  src: _,
                  className: `XPCSY4OUfs8-`,
                }),
              _ &&
                (0, _.jsx)(`video`, {
                  src: _,
                  className: `XPCSY4OUfs8-`,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  autoPlay: !0,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { name: _, setName: _, validatedName: _, disabled: _ } = _,
    _ = _.useCallback((_) => _ && _.element.select(), []);
  return (0, _.jsx)(`div`, {
    children: (0, _.jsx)(_, {
      value: _,
      onChange: (_) => _(_.currentTarget.value),
      label: _(`#StoreAdmin_ExtraAssetUpload_EnterAName`),
      ref: _,
      disabled: _,
      description: _(
        `#StoreAdmin_ExtraAssetUpload_WillBeSavedAsFilename`,
        (0, _.jsx)(`b`, {
          children: _,
        }),
      ),
    }),
  });
}
function _(_) {
  return _ && _.length > 0;
}
function _(_) {
  switch (_.type) {
    case `image/jpeg`:
      return `jpg`;
    case `image/png`:
      return `png`;
    case `image/gif`:
      return `gif`;
    case `image/webp`:
      return `webp`;
    case `video/mp4`:
      return `mp4`;
    case `video/webm`:
      return `webm`;
    default:
      return;
  }
}
function _(_) {
  return _.type.startsWith(`video/`);
}
function _(_, _, _) {
  return _?.length == 1 ? _[0] : _ == -1 ? _ : _;
}
var _ = `JViOf-7-Onc-`,
  _ = `E-BwgdVO-r0-`,
  _ = `hDRGk-ql6-Q-`,
  _ = `bKxK1LjF-Rg-`,
  _ = `v_StoreAdminLanguageChange`,
  _ = _.createContext(void 0);
function _(_) {
  let [_, _] = _.useState(),
    _ = _.useMemo(
      () => ({
        strActiveLanguage: _,
        setActiveLanguage: _,
      }),
      [_],
    );
  return (
    _.useEffect(() => {
      _ &&
        window.LocChangeControlsToLanguage &&
        window.LocChangeControlsToLanguage(_);
    }, [_]),
    _(
      window,
      _,
      _.useCallback((_) => {
        _.detail.strLanguage && _(_.detail.strLanguage);
      }, []),
    ),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
function _(_, _, _, _) {
  let _ = _.useMemo(() => Array.from(_.keys()), [_]),
    [_] = _.useState(() => {
      let _ = new Map(_);
      return new Map(_.map((_) => [_, _(_.get(_) || ``)]));
    }),
    _ = _.useContext(_),
    [_, _] = _.useState(() => _(_.size ? _ : _)),
    _ = _?.strActiveLanguage ?? _,
    _ = _.useCallback(
      (_) => {
        (_?.setActiveLanguage(_), _(_));
      },
      [_],
    ),
    _ = (0, _.jsx)(_, {
      mapLanguages: _,
      mapValues: _,
      strActiveLanguage: _,
      setActiveLanguage: _,
    }),
    _ =
      !!(_ && _) &&
      (0, _.jsx)(_, {
        rgLanguages: _,
        mapValues: _,
        namePrefix: _,
        rgPath: _,
      });
  return {
    strActiveLanguage: _,
    mapValues: _,
    rctLanguageSelect: _,
    rgLanguages: _.map(_),
    rctHiddenInputs: _,
    setActiveLanguage: _,
  };
}
function _(_) {
  let {
      mapLanguages: _,
      mapValues: _,
      strActiveLanguage: _,
      setActiveLanguage: _,
    } = _,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _.forEach((_, _) => {
          _.push({
            data: _,
            label: (0, _.jsx)(_, {
              strLocLanguage: _,
              value: _.get(_),
            }),
          });
        }),
        _
      );
    }, [_, _]),
    _ = _.useCallback((_) => _(_.data), [_]);
  return (0, _.jsx)(_, {
    strClassName: _,
    onChange: _,
    selectedOption: _,
    rgOptions: _,
  });
}
function _(_) {
  let { strLocLanguage: _, value: _ } = _,
    [_, _] = _.useState(() => !!_?.Value?.trim()),
    _ = _.useCallback((_) => _(!!_.trim()), []);
  return (
    _(_, _),
    _.useEffect(() => _(_.Value), [_, _]),
    (0, _.jsx)(`span`, {
      className: _(_, _ && `W6V15fNHRtY-`),
      children: _,
    })
  );
}
function _(_) {
  let { rgLanguages: _, mapValues: _, namePrefix: _, rgPath: _ } = _;
  return _.map((_) =>
    (0, _.jsx)(
      _,
      {
        language: _,
        value: _.get(_),
        namePrefix: _,
        rgPath: _,
      },
      _,
    ),
  );
}
var _ = _.memo(function (_) {
  let { language: _, value: _, namePrefix: _, rgPath: _ } = _,
    _ = _(_) || ``,
    _ = _ + [..._, _].map((_) => `[${_}]`).join(``);
  return (0, _.jsx)(`input`, {
    type: `hidden`,
    name: _,
    value: _,
  });
});
function _(_) {
  return _.has(_.LANGUAGE)
    ? _.LANGUAGE
    : _.has(`english`)
      ? `english`
      : _.keys().next().value;
}
function _() {
  let _ = _.useContext(_);
  return _(_?.strActiveLanguage, 0);
}
function _(_) {
  let {
      strActiveLanguage: _,
      mapValues: _,
      rctLanguageSelect: _,
      setActiveLanguage: _,
    } = _(_, [], null, null),
    _ = _(_, 0);
  return (
    _.useEffect(() => {
      _.Get().SetCurEditLanguage(_);
    }, [_]),
    _(_.Get().GetCallback(), (_) => _(_(_))),
    {
      strActiveLanguage: _,
      eActiveLang: _,
      rctLanguageSelect: _,
      mapValues: _,
    }
  );
}
function _(_) {
  let { children: _ } = _,
    [_, _] = _.useState([]),
    _ = _.useRef(0),
    _ = _.useCallback(
      (_) => (
        _((_) => [
          ..._,
          {
            upload: _,
            _: _.current++,
          },
        ]),
        () => _((_) => _.filter((_) => _.upload != _))
      ),
      [],
    );
  return (0, _.jsx)(_, {
    queueExtraAssetUpload: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            rgUploads: _,
          }),
          _,
        ],
      }),
    }),
  });
}
function _(_) {
  let { children: _, queueExtraAssetUpload: _ } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState([]),
    [_, _] = _.useState(!1);
  _.useEffect(() => {
    let _ = _(`rgGamePageConfig`, `application_config`);
    ((_ ||=
      (console.error(
        `Missing config data for game edit page - some components may not work`,
      ),
      {
        rgExtraAssetsData: {
          rgExtraAssets: [],
          rgInvalidFilenameCharacters: [],
        },
        strGameControllerURLFormat: ``,
        bAppHasSteamChinaToolsEnabled: !1,
      })),
      _(_),
      _(_.rgExtraAssetsData.rgExtraAssets),
      _(_.bAppHasSteamChinaToolsEnabled));
  }, []);
  let _ = _.useMemo(() => {
      if (_)
        return (
          _.rgExtraAssetsData.rgInvalidFilenameCharacters.forEach((_) =>
            _(
              _.length == 1,
              `Expected single-character replacements, "${_} is not`,
            ),
          ),
          RegExp(
            `[${_.rgExtraAssetsData.rgInvalidFilenameCharacters.map((_) => `\\${_}`)}]`,
            `g`,
          )
        );
    }, [_]),
    _ = _.useMemo(
      () => ({
        rgExtraAssetsData: {
          rgExtraAssets: _,
          regexInvalidFilenameCharacters: _,
        },
        strGameControllerURLFormat: _?.strGameControllerURLFormat,
        queueExtraAssetUpload: _,
        onExtraAssetsUpdated: _,
        storeItemID: _?.nStoreItemID,
        eStoreItemType: _?.eStoreItemType,
        bAppHasSteamChinaToolsEnabled: _,
      }),
      [_, _, _, _, _],
    );
  return _
    ? (0, _.jsx)(_, {
        value: _,
        children: _,
      })
    : null;
}
function _(_ = !1) {
  let _ = _.useContext(_).rgExtraAssetsData.rgExtraAssets;
  return _.useMemo(() => (_ ? [..._].reverse() : _), [_, _]);
}
function _() {
  return _.useContext(_).rgExtraAssetsData;
}
function _(_) {
  return _.useContext(_).strGameControllerURLFormat.replace(`:method:`, _);
}
function _() {
  return _.useContext(_).queueExtraAssetUpload;
}
function _() {
  return _.useContext(_).onExtraAssetsUpdated;
}
function _() {
  let _ = _.useContext(_),
    _ = _.useMemo(
      () =>
        _.bAppHasSteamChinaToolsEnabled
          ? [_.k_ESteamRealmGlobal, _.k_ESteamRealmChina]
          : [_.k_ESteamRealmGlobal],
      [_.bAppHasSteamChinaToolsEnabled],
    );
  return {
    bAppHasSteamChinaToolsEnabled: _.bAppHasSteamChinaToolsEnabled,
    rgRealmList: _,
  };
}
function _() {
  return _.useContext(_).bUseRichEditor;
}
function _() {
  return _.useContext(_).setUseRichEditor;
}
var _ = _.createContext(void 0),
  _ = _.createContext(void 0);
function _(_) {
  let _ = `storeEditorDisableRichEditor`,
    [_, _] = _.useState(() => !localStorage.getItem(_)),
    _ = _.useCallback((_) => {
      (_ ? localStorage.removeItem(_) : localStorage.setItem(_, `1`), _(_));
    }, []),
    _ = _.useMemo(
      () => ({
        bUseRichEditor: _,
        setUseRichEditor: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_, _ = `PlaceholderPlugin`) {
  let [_, _] = _.useState([]),
    [_] = _.useState(
      () =>
        new _({
          key: new _(_),
          state: {
            init() {
              return _.empty;
            },
            apply(_, _) {
              _ = _.map(_.mapping, _.doc);
              let _ = _.getMeta(this) || [];
              for (let _ of _)
                if (_?.add) {
                  let { _: _, data: _ } = _.add,
                    _ = _.widget(
                      _.add.pos,
                      (_, _) => {
                        let _ = document.createElement(_);
                        return (
                          _((_) => [
                            ..._,
                            {
                              _: _,
                              element: _,
                              data: _,
                            },
                          ]),
                          _
                        );
                      },
                      {
                        _: _,
                        destroy: (_) => {
                          _((_) => _.filter((_) => _.element != _));
                        },
                      },
                    );
                  _ = _.add(_.doc, [_]);
                } else
                  _?.remove &&
                    (_ = _.remove(
                      _.find(void 0, void 0, (_) => _._ == _.remove._),
                    ));
              return _;
            },
          },
          props: {
            decorations(_) {
              return this.getState(_);
            },
          },
        }),
    );
  _(_);
  let _ = _(),
    _ = _.useRef(0),
    _ = _.useCallback(
      (_, _, _) => {
        let _ = `${_}_${_.current++}`,
          _ = _ || _.state._;
        _ === void 0 &&
          (_.selection.empty || _.deleteSelection(), (_ = _.selection.from));
        let _ = _?.getMeta(_) || [];
        return (
          _.setMeta(_, [
            ..._,
            {
              add: {
                _: _,
                pos: _,
                data: _,
              },
            },
          ]),
          _ || _.dispatch(_),
          _
        );
      },
      [_, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _.getState(_.state)?.find(void 0, void 0, (_) => _._ == _);
        return _?.length ? _[0].from : void 0;
      },
      [_, _],
    );
  return {
    placeholderElements: _,
    createPlaceholder: _,
    findPlaceholder: _,
    replacePlaceholder: _.useCallback(
      (_, _) => {
        let _ = _(_);
        return _
          ? (_
              ? _.dispatch(
                  _.state._.replaceWith(_, _, _).setMeta(_, [
                    {
                      remove: {
                        _: _,
                      },
                    },
                  ]),
                )
              : _.dispatch(
                  _.state._.setMeta(_, [
                    {
                      remove: {
                        _: _,
                      },
                    },
                  ]),
                ),
            !0)
          : !1;
      },
      [_, _, _],
    ),
  };
}
var _ = `X4ISJwd04aY-`,
  _ = `VDQklUf4-PI-`,
  _ = `snvwF3-NnLM-`,
  _ = `sV-VHki-2o0-`,
  _ = `_15zMTyP93HI-`,
  _ = `_8KRcaHOEet0-`,
  _ = `uovoG-49-aA-`,
  _ = `UaWCw5NEvXk-`,
  _ = `X-Vxsf0rftk-`,
  _ = `GgBpCOPasPY-`,
  _ = `hQZoOJN3xX8-`,
  _ = `ddGbr-41cmc-`,
  _ = `Nf7kk9E11os-`;
function _(_) {
  let {
      children: _,
      ProcessFileUpload: _,
      FetchImageURL: _,
      bAllowImageHotLinking: _ = !1,
    } = _,
    [_] = _.useState(() => ({
      manager: new _(_, _, _),
    })),
    { manager: _ } = _;
  return (
    _.SetProps(_, _, _),
    (0, _.jsxs)(_.Provider, {
      value: _,
      children: [
        (0, _.jsx)(_, {
          manager: _,
        }),
        (0, _.jsx)(_, {
          manager: _,
          children: _,
        }),
      ],
    })
  );
}
var _ = _.memo(function (_) {
  let { nodeType: _ } = _,
    _ = _(),
    {
      placeholderElements: _,
      createPlaceholder: _,
      replacePlaceholder: _,
    } = _(`span`, `FileUploadPlaceholder`);
  _(_, _);
  let _ = _();
  return (
    _.useEffect(() => _.RegisterEditor(_, _, _), [_, _, _, _]),
    (0, _.jsx)(_.Fragment, {
      children: _.map(({ _: _, element: _, data: _ }) =>
        (0, _.jsx)(
          _,
          {
            element: _,
            data: _,
          },
          _,
        ),
      ),
    })
  );
});
function _(_, _) {
  let _ = _(),
    _ = _.useCallback(
      (_) => {
        for (let _ of _) _.UploadFile(_);
        _ && _();
      },
      [_, _],
    );
  return _(_, {
    multiple: !0,
    accept: _,
  });
}
var _ = class extends Error {
  constructor(_) {
    super(_);
  }
};
function _(_) {
  let { element: _, data: _ } = _,
    _ = `file` in _ ? _.file : void 0,
    _ = _.useMemo(() => _ && URL.createObjectURL(_), [_]),
    _ = `url` in _ ? _.url : _,
    _ = _?.type.startsWith(`video/`);
  return _.createPortal(
    (0, _.jsxs)(`span`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  size: `medium`,
                  position: `center`,
                }),
              }),
              _(`#Prosemirror_FileUpload_Uploading`),
            ],
          }),
        }),
        !_ &&
          (0, _.jsx)(`img`, {
            src: _,
            className: `_2t8dVsSkQ8o-`,
          }),
        _ &&
          (0, _.jsx)(`video`, {
            src: _,
            className: `_2t8dVsSkQ8o-`,
            muted: !0,
            loop: !0,
            playsInline: !0,
            autoPlay: !0,
          }),
      ],
    }),
    _,
  );
}
var _ = class {
  m_fnProcessFileUpload;
  m_fnFetchImageURL;
  m_bAllowImageHotLinking;
  m_errors = _([]);
  m_view;
  m_fnCreatePlaceholder;
  m_fnReplacePlaceholder;
  constructor(_, _, _) {
    ((this.m_fnProcessFileUpload = _),
      (this.m_fnFetchImageURL = _),
      (this.m_bAllowImageHotLinking = _));
  }
  SetProps(_, _, _) {
    ((this.m_fnProcessFileUpload = _),
      (this.m_fnFetchImageURL = _),
      (this.m_bAllowImageHotLinking = _),
      _(
        !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
        `Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.`,
      ));
  }
  RegisterEditor(_, _, _) {
    return (
      _(!this.m_view, `Duplicate registration`),
      (this.m_view = _),
      (this.m_fnCreatePlaceholder = _),
      (this.m_fnReplacePlaceholder = _),
      () => {
        this.m_view == _ &&
          this.m_fnCreatePlaceholder == _ &&
          this.m_fnReplacePlaceholder == _ &&
          ((this.m_view = void 0),
          (this.m_fnCreatePlaceholder = void 0),
          (this.m_fnReplacePlaceholder = void 0));
      }
    );
  }
  AddError(_) {
    this.m_errors.Set([...this.m_errors.Value, _]);
  }
  GetErrors() {
    return this.m_errors;
  }
  ClearErrors() {
    this.m_errors.Set([]);
  }
  GetViewPosition(_, _) {
    return this.m_view?.posAtCoords({
      left: _,
      top: _,
    })?.pos;
  }
  async UploadFile(_, _) {
    (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
      this.AddError(`Upload File: No editor registered to handle file upload`);
    let _ = this.m_fnCreatePlaceholder(
      {
        file: _,
      },
      _,
    );
    return this.ProcessFile(_, _);
  }
  BAllowImageHotLinking() {
    return this.m_bAllowImageHotLinking;
  }
  QueueUploadFileByURL(_, _, _) {
    if (
      ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
        this.AddError(
          `QueueUploadFile: No editor registered to handle file upload`,
        ),
      console.log(`QueueUploadFileByURL: ${_} at pos ${_}`),
      _.startsWith(`data:`))
    ) {
      let _ = this.m_fnCreatePlaceholder(
        {
          url: _,
        },
        _,
        _,
      );
      return (this.ProcessDataURL(_, _), !0);
    }
    if (this.m_fnFetchImageURL) {
      let _ = this.m_fnCreatePlaceholder(
        {
          url: _,
        },
        _,
        _,
      );
      return (this.FetchURLAndProcess(_, _), !0);
    }
    return (
      _(
        this.m_bAllowImageHotLinking,
        `A URL was posted but we don't have a fnFetchImageURL to process it`,
      ),
      !1
    );
  }
  async ProcessDataURL(_, _) {
    let [_, _] = _.split(`,`),
      _ = _.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
    if (!_ || _.groups.encoding != `base64`) {
      this.AddError(`Unable to data URL, unexpected format: ${_}`);
      return;
    }
    let _ = _?.groups.mimetype,
      _ = _(_);
    if (!_) {
      this.AddError(`Unsupported MIME type for image: ${_}`);
      return;
    }
    let _ = atob(_),
      _ = new Uint8Array(_.length);
    for (let _ = 0; _ < _.length; _++) _[_] = _.charCodeAt(_);
    let _ = await _(_.buffer),
      _ = new File([_], `upload_${_}.${_}`, {
        type: _,
      });
    await this.ProcessFile(_, _);
  }
  async FetchURLAndProcess(_, _) {
    try {
      let _ = new URL(_),
        _ = await this.m_fnFetchImageURL(_),
        _ = new File(
          [_],
          decodeURIComponent(_.pathname?.replace(/^.*\//, ``) || `image`),
          {
            type: _.type,
          },
        );
      await this.ProcessFile(_, _);
    } catch {
      (this.AddError(`Unable to process URL: ${_}`),
        this.m_fnReplacePlaceholder(_));
    }
  }
  async ProcessFile(_, _) {
    let _;
    try {
      (console.log(`Processing file upload: "${_.name}"`),
        (_ = await this.m_fnProcessFileUpload(_)));
    } catch (_) {
      _ instanceof _
        ? this.AddError(_.message)
        : this.AddError(`Error proccessing file upload: ${_}`);
    }
    _ ? this.m_fnReplacePlaceholder(_, _) : this.m_fnReplacePlaceholder(_);
  }
};
function _(_) {
  switch (_) {
    case `image/jpeg`:
      return `jpg`;
    case `image/png`:
      return `png`;
    case `image/gif`:
      return `gif`;
    case `image/webp`:
      return `webp`;
    case `video/mp4`:
      return `mp4`;
    case `video/webm`:
      return `webm`;
    default:
      return;
  }
}
var _ = _.createContext(void 0);
function _() {
  return _.useContext(_).manager;
}
var _ = _.memo(function (_) {
  let { manager: _ } = _,
    _ = _(_.GetErrors());
  return _.length
    ? (0, _.jsx)(_, {
        active: !0,
        children: (0, _.jsx)(_, {
          bAlertDialog: !0,
          strTitle: _(`#Error_Generic`),
          strDescription: _.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                children: _,
              },
              _,
            ),
          ),
          strOKButtonText: _(`#Button_OK`),
          onOK: () => _.ClearErrors(),
          onCancel: () => _.ClearErrors(),
        }),
      })
    : null;
});
function _(_) {
  let { manager: _, children: _ } = _,
    _ = _.useCallback(
      (_, _) => {
        for (let _ of _)
          _.UploadFile(_, _.GetViewPosition(_.clientX, _.clientY));
      },
      [_],
    ),
    [_, _] = _(_);
  return _.cloneElement(_, {
    ..._,
    ..._.props,
  });
}
function _(_, _) {
  _(
    _.useMemo(
      () =>
        new _({
          props: {
            handlePaste(_, _, _) {
              let _ = [];
              if (
                (_.content.descendants((_, _) => {
                  if (_.type == _) {
                    let _ = _.attrs.src;
                    (_.startsWith(`data:`) || !_.BAllowImageHotLinking()) &&
                      _.push({
                        url: _,
                        pos: _,
                      });
                  }
                }),
                _.length)
              ) {
                let _ = _.state._;
                _.selection.empty || _.deleteSelection();
                let _ = _.selection.from,
                  _ = 0;
                for (let _ of _) {
                  let _ = _.content.cut(_, _.pos - 1);
                  (_.insert(_, _),
                    (_ += _.size),
                    _.QueueUploadFileByURL(_.url, _, _),
                    (_ = _.pos + 1));
                }
                return (
                  _.insert(_, _.content.cut(_)),
                  _.scrollIntoView(),
                  _.dispatch(_),
                  !0
                );
              }
              return !1;
            },
            handleDOMEvents: {
              paste(_, _) {
                if (_.clipboardData?.files?.length) {
                  _.preventDefault();
                  for (let _ of _.clipboardData.files) _.UploadFile(_);
                  return !0;
                }
              },
            },
          },
        }),
      [_, _],
    ),
  );
}
var _ = () => _.useContext(_);
function _(_) {
  let { view: _, refUpdateToolbar: _, children: _ } = _,
    _ = _.useRef(void 0);
  _.current ||= new _();
  let _ = _.current;
  _.useEffect(
    () => (
      _(_, () => {
        _ && _.Dispatch(_);
      }),
      () => _(_, void 0)
    ),
    [_, _, _],
  );
  let _ = _.useMemo(
    () =>
      _
        ? {
            callbacks: _,
            view: _,
          }
        : null,
    [_, _],
  );
  return _
    ? (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      })
    : null;
}
var _ = _.createContext(void 0);
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _(_.className, _),
    children: (0, _.jsx)(_, {
      className: _,
      "flow-children": `row`,
      children: _.children,
    }),
  });
}
function _(_) {
  let { nodeType: _, attrs: _, children: _, ..._ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(() => _(_.state, _, _)),
    _ = _.useCallback((_) => _(_(_.state, _, _)), [_, _]);
  _(_, _);
  let _ = _.useMemo(() => _(_, _), [_, _]);
  return (0, _.jsx)(_, {
    ..._,
    command: _,
    toggled: _,
    children: _,
  });
}
function _(_) {
  let { mark: _, children: _, ..._ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(() => _(_.state, _)),
    _ = _.useCallback((_) => _(_(_.state, _)), [_]);
  _(_, _);
  let _ = _.useMemo(() => _(_), [_]);
  return (0, _.jsx)(_, {
    ..._,
    command: _,
    toggled: _,
    children: _,
  });
}
function _(_) {
  let { command: _, toggled: _, children: _, ..._ } = _,
    { view: _, callbacks: _ } = _(),
    [_, _] = _.useState(() => _(_.state));
  (_(
    _,
    _.useCallback((_) => _(_(_.state)), [_]),
  ),
    _.useEffect(() => _(_(_.state)), [_, _]));
  let _ = !_ && !_;
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      className: _(_, _ && `LayGdJxtj74-`),
      onMouseDown: (_) => {
        (_.preventDefault(), _(_.state, _.dispatch, _));
      },
      disabled: _,
      focusable: !_,
      children: _,
    }),
  });
}
function _(_) {
  let {
    onClick: _,
    toggled: _,
    disabled: _,
    children: _,
    className: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      className: _(_, _ && `LayGdJxtj74-`, _),
      onMouseDown: (_) => {
        _.button === 0 && (_.preventDefault(), _(_));
      },
      disabled: _ === !0,
      children: _,
    }),
  });
}
function _(_) {
  let { tooltip: _, keyboardShortcut: _, children: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _
          ? (0, _.jsx)(_, {
              tooltip: _,
              keyboardShortcut: _,
            })
          : _,
        direction: `bottom`,
        children: _,
      })
    : _;
}
function _(_) {
  let { tooltip: _, keyboardShortcut: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(_, {
          keyboardShortcut: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { keyboardShortcut: _ } = _,
    _ = _.split(`-`),
    _ = _.pop() ?? ``;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.map((_, _) =>
        (0, _.jsxs)(
          _.Fragment,
          {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  modifier: _,
                }),
              }),
              ` + `,
            ],
          },
          _,
        ),
      ),
      (0, _.jsx)(_, {
        children: _.toUpperCase(),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { modifier: _ } = _;
  switch (_) {
    case `Mod`:
      return _.PLATFORM == `macos` ? `⌘` : `Ctrl`;
    case `Shift`:
      return (_.PLATFORM, `Shift`);
    case `Ctrl`:
      return _.PLATFORM == `macos` ? `Control` : `Ctrl`;
    case `Alt`:
      return _.PLATFORM == `macos` ? `Option` : `Alt`;
  }
  return null;
}
var _ = `JLr-DxLj8P0-`,
  _ = `MA8175UA5i4-`,
  _ = `JyPbjcqf-lM-`,
  _ = `MpF4hevvEls-`,
  _ = `JWXEqQFPsTE-`,
  _ = `mODQbZQ0xAY-`,
  _ = `_2ohodKn7ux4-`;
function _(_) {
  let {
      hideModal: _,
      entries: _,
      isLoading: _,
      fnRefetch: _,
      mutateAltTextAsync: _,
      isMutatePending: _,
      fnGetImage: _,
    } = _,
    { bAppHasSteamChinaToolsEnabled: _ } = _(),
    _ = _.useMemo(() => _(_), [_]),
    {
      strActiveLanguage: _,
      eActiveLang: _,
      rctLanguageSelect: _,
      mapValues: _,
    } = _(_),
    [_, _] = _.useState(new Map()),
    [_, _] = _.useState(new Map());
  _.useEffect(() => {
    let _ = new Map(),
      _ = new Map();
    for (let _ of _)
      (_.set(_.key, structuredClone(_)), _.set(_.key, structuredClone(_)));
    (_(_), _(_));
  }, [_]);
  let _ = _.useCallback(() => {
    for (let _ of _.keys()) {
      let _ = Array.from(_.values()).some(
        (_) => _.mapAltText && _ in _.mapAltText,
      );
      _.get(_).Set(_ ? `yes` : ``);
    }
  }, [_, _, _]);
  _.useEffect(() => _(), [_]);
  let _ = _(),
    _ = (_) => _.get(_)?.mapAltText?.[_] ?? ``,
    _ = (_, _) => {
      let _ = _.get(_);
      (_ || ((_ = {}), _.set(_, _)),
        _.mapAltText || (_.mapAltText = {}),
        _.trim().length > 0 ? (_.mapAltText[_] = _) : delete _.mapAltText[_],
        _(),
        _());
    },
    _ = _.set(),
    _ = async () => {
      try {
        _.clear();
        for (let [_, _] of _.entries()) {
          if (_(_.mapAltText, _.get(_).mapAltText)) continue;
          let _ = {
            ..._.mapAltText,
          };
          for (let _ of Object.keys(_.get(_).mapAltText ?? {}))
            _ in _.mapAltText || (_[_] = ``);
          (await _(_, _))
            ? _.set(_, {
                ..._,
              })
            : _.add(_);
        }
        (_?.(), _.size == 0 && _());
      } catch (_) {
        console.error(`Some mutations failed`, _);
      }
    },
    _ = _ || _,
    _ = () => {
      _ || _();
    },
    _ = Array.from(_.values()).some((_) => _.caption != null);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      onEscKeypress: _,
      bDisableBackgroundDismiss: _,
      children: (0, _.jsxs)(_, {
        classNameContent: _,
        children: [
          (0, _.jsx)(_, {
            children: _(`#StoreAdmin_EditAltText_Title`),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(`p`, {
                    children: _(`#StoreAdmin_EditAltText_Desc`),
                  }),
                  (0, _.jsx)(`p`, {
                    children: _(`#StoreAdmin_EditAltText_Desc2`),
                  }),
                ],
              }),
              _,
            ],
          }),
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsxs)(`table`, {
                className: _(_),
                children: [
                  (0, _.jsx)(`thead`, {
                    className: _(_),
                    children: (0, _.jsxs)(`tr`, {
                      children: [
                        (0, _.jsx)(`th`, {
                          className: _(_),
                        }),
                        _ &&
                          (0, _.jsx)(`th`, {
                            className: _(`GwIqhD98asM-`),
                            children: _(`#StoreAdmin_EditAltText_ColAssetName`),
                          }),
                        (0, _.jsx)(`th`, {
                          className: _(_),
                          children: _(`#StoreAdmin_EditAltText_ColAltText`),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`tbody`, {
                    children:
                      !_ &&
                      Array.from(_.values()).map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            lang: _,
                            caption: _.caption,
                            image: _(_.key, _),
                            altText: _(_.key),
                            setAltText: (_) => _(_.key, _),
                            failedMutate: _.has(_.key),
                            showCaptionColumn: _,
                          },
                          `${_.key}-${_}`,
                        ),
                      ),
                  }),
                ],
              }),
              _ && (0, _.jsx)(_, {}),
            ],
          }),
          (0, _.jsxs)(_, {
            children: [
              _.size > 0 &&
                (0, _.jsx)(`div`, {
                  className: `HVdJMjJrFW8-`,
                  children: _(`#StoreAdmin_EditAltText_MutateFailed`),
                }),
              (0, _.jsx)(_, {
                onCancel: _,
                onOK: (_) => {
                  (_.preventDefault(), _());
                },
                bOKDisabled: _ || _(_, _),
                bCancelDisabled: _,
                strOKText: _(`#StoreAdmin_EditAltText_Save`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let {
      lang: _,
      image: _,
      caption: _,
      altText: _,
      setAltText: _,
      failedMutate: _,
      showCaptionColumn: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _ === `#decorative-only`,
    [_, _] = _.useState(_ ? `` : _),
    _ = (_, _) => {
      (_(_), _(_), _ || _(_));
    };
  return (0, _.jsxs)(`tr`, {
    className: _,
    children: [
      (0, _.jsx)(`td`, {
        className: _,
        children: _,
      }),
      _ &&
        (0, _.jsxs)(`td`, {
          className: `GwIqhD98asM-`,
          children: [
            _,
            _ &&
              (0, _.jsx)(`div`, {
                className: `ezL5scacXFs-`,
                children: _(`#StoreAdmin_EditAltText_EntryMutateFailed`),
              }),
          ],
        }),
      (0, _.jsxs)(`td`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            type: `text`,
            placeholder: _
              ? _(`#StoreAdmin_EditAltText_PlaceholderDecorative`)
              : _(
                  `#StoreAdmin_EditAltText_Placeholder`,
                  _(`#Language_${_(_)}`),
                ),
            value: _ ? `` : _,
            onChange: (_) => _(_.target.value, !1),
            disabled: _,
          }),
          (0, _.jsx)(_, {
            checked: _,
            onChange: (_) => _(_ ? `#decorative-only` : _, !0),
            label: _(`#StoreAdmin_EditAltText_Presentational`),
            tooltip: _(`#StoreAdmin_EditAltText_Presentational_ttip`),
          }),
        ],
      }),
    ],
  });
}
function _(_, _) {
  let _ = _ ? Object.keys(_) : [],
    _ = _ ? Object.keys(_) : [];
  return _.length === _.length && _.every((_) => _[_] === _[_]);
}
function _(_, _) {
  if (_.size !== _.size) return !1;
  for (let [_, _] of _) {
    let _ = _.get(_);
    if (!_ || !_(_.mapAltText, _.mapAltText)) return !1;
  }
  return !0;
}
var _ = _({
    AltTextBtn: () => _,
    DisplayLocImage: () => _,
    ExtraAssetChoice: () => _,
    ExtraAssetControls: () => _,
    ExtraAssetControlsContainer: () => _,
    ExtraAssetDialogContent: () => _,
    ExtraAssetError: () => _,
    ExtraAssetImg: () => _,
    ExtraAssetImgTag: () => _,
    ExtraAssetName: () => _,
    ExtraAssetSearch: () => _,
    ExtraAssetStack: () => _,
    ExtraAssetsChooser: () => _,
    ExtraAssetsDialogDescription: () => _,
    ExtraAssetsGrid: () => _,
    ExtraAssetsGridDialog: () => _,
    ExtraAssetsPageList: () => _,
    Hovered: () => _,
    "Image-0": () => _,
    "Image-1": () => _,
    "Image-2": () => _,
    ImageLinkDisabledWarning: () => _,
    InDeprecatedLink: () => _,
    InstructionsForLocAssets: () => _,
    LanguageColumn: () => _,
    LanguageWarning: () => _,
    Large: () => _,
    LocalizeAssetDialogContent: () => _,
    LocalizeAssetImage: () => _,
    LocalizeAssetItem: () => _,
    LocalizeAssetKeyImage: () => _,
    LocalizeAssetsDialogDescription: () => _,
    LocalizedAssetCtn: () => _,
    LocalizedAssetMain: () => _,
    LocalizedAssetUploadButton: () => _,
    LocalizedAssetUploadWarning: () => _,
    Name: () => _,
    Selected: () => _,
    SmallImage: () => _,
    StackedImage: () => _,
    StackedImageCtn: () => _,
    StandaloneUploadButton: () => _,
    TopBar: () => _,
    TopBarContent: () => _,
    UploadButton: () => _,
    UploadButtonContainer: () => _,
    default: () => _,
    "extra-asset-blink": () => _,
    img: () => _,
  }),
  _ = `_7qJDg4hR1o0-`,
  _ = `os963OBhypo-`,
  _ = `_0BIbHWcMCR0-`,
  _ = `rovZbxEReRM-`,
  _ = `nBBNTYLTUgU-`,
  _ = `C6sVHxIc4zw-`,
  _ = `S8lruJS8qrc-`,
  _ = `aa-jpLpIsII-`,
  _ = `_1UlSm7Z4mws-`,
  _ = `ExO0Opa8xf8-`,
  _ = `Bm2W6eBIVPM-`,
  _ = `BaqNSXt64FM-`,
  _ = `hnSSIKmA-6o-`,
  _ = `_7gL1H2AeOLc-`,
  _ = `srbc8lT9cnM-`,
  _ = `lNzdsh41nGU-`,
  _ = `_225XvMXM7VU-`,
  _ = `EZ9qONE49ko-`,
  _ = `F1OenXvn00E-`,
  _ = `pI6amXtv-XM-`,
  _ = `yuMxw74fPl8-`,
  _ = `X38TLuu4RKE-`,
  _ = `iJ13aeBemCI-`,
  _ = `_08pMRal655Q-`,
  _ = `Lh-zkvUGHPc-`,
  _ = `R8CGEkn4Rzg-`,
  _ = `_1R2QrUdqp6s-`,
  _ = `_6C7CZJYshZ0-`,
  _ = `_9LFJ-uvzY2E-`,
  _ = `WN-Qvx72aUg-`,
  _ = `Kh1bk635uRI-`,
  _ = `Oq-vK0px7GU-`,
  _ = `qlK6gWRttFM-`,
  _ = `_8GfH8OROo-Y-`,
  _ = `bGACGMiuJbE-`,
  _ = `_4IeRahdjDm0-`,
  _ = `JhFKC58-mhs-`,
  _ = `tFweytLJVn4-`,
  _ = `-sJQUOO6bIo-`,
  _ = `DrvY2sXR9l4-`,
  _ = `WLCnAMyl8Vk-`,
  _ = `cFrApLvoZp8-`,
  _ = `i0wiYVskrck-`,
  _ = `_1Bn96tofMt4-`,
  _ = `LQ5WPUfP7TI-`,
  _ = `CK6nm7k0ldw-`,
  _ = `TGFbfE48XGY-`,
  _ = `Jg-Gp5jYxZI-`,
  _ = {
    ExtraAssetImgTag: _,
    ExtraAssetError: _,
    ExtraAssetImg: _,
    Selected: _,
    "extra-asset-blink": `nBBNTYLTUgU-`,
    InDeprecatedLink: _,
    ExtraAssetControlsContainer: _,
    ExtraAssetControls: _,
    SmallImage: _,
    ImageLinkDisabledWarning: _,
    TopBar: _,
    TopBarContent: _,
    Hovered: _,
    ExtraAssetDialogContent: _,
    ExtraAssetsDialogDescription: _,
    UploadButtonContainer: _,
    UploadButton: _,
    StandaloneUploadButton: _,
    ExtraAssetsGridDialog: _,
    ExtraAssetSearch: _,
    ExtraAssetsGrid: _,
    ExtraAssetsPageList: _,
    ExtraAssetsChooser: _,
    ExtraAssetChoice: _,
    ExtraAssetStack: _,
    AltTextBtn: _,
    StackedImageCtn: _,
    StackedImage: _,
    "Image-0": `_9LFJ-uvzY2E-`,
    "Image-1": `WN-Qvx72aUg-`,
    "Image-2": `Kh1bk635uRI-`,
    ExtraAssetName: _,
    InstructionsForLocAssets: _,
    LocalizeAssetDialogContent: _,
    DisplayLocImage: _,
    LocalizeAssetsDialogDescription: _,
    LocalizedAssetMain: _,
    LanguageColumn: _,
    LanguageWarning: _,
    LocalizeAssetImage: _,
    Large: _,
    LocalizeAssetKeyImage: _,
    LocalizedAssetCtn: _,
    LocalizeAssetItem: _,
    img: _,
    Name: _,
    LocalizedAssetUploadWarning: _,
    LocalizedAssetUploadButton: _,
  };
function _(_) {
  let {
      src: _,
      inLink: _,
      setAttrs: _,
      focusView: _,
      removeNode: _,
      activeLanguage: _,
      allowAnimations: _,
      mapValues: _,
      fnUpdateDocument: _,
      selected: _,
    } = _,
    [_, _] = _(),
    [_, _] = _(),
    _ = _(_ || _, 250),
    [_, _, _] = _(),
    _ = _(),
    _ = _.useCallback(() => {
      (_(), _());
    }, [_, _]),
    _ = _.useMemo(
      () => _.find((_) => _(_).toLowerCase() === _.toLowerCase()),
      [_, _],
    ),
    _ = _ ? _(_) : null,
    { elLocalizedImageGroupDialog: _, elLocalizedImageGroupControl: _ } = _(
      _,
      _,
      _,
    ),
    _ = _(),
    _ = (_) => {
      let _ = _.currentTarget;
      _.paused ? _.play() : _.pause();
    },
    _;
  if (_) {
    let _ = _(_, _, _);
    if (_) {
      let _ = _(_, _),
        _ = _(_, _ && `rovZbxEReRM-`);
      _ =
        _.usage == 1
          ? (0, _.jsx)(
              `video`,
              {
                className: _,
                src: _(_.url, _),
                title: _,
                muted: !0,
                loop: !0,
                playsInline: !0,
                autoPlay: !0,
                onClick: _,
              },
              _,
            )
          : (0, _.jsx)(
              `img`,
              {
                className: _,
                src: _(_.url, _),
                alt: _,
                title: _,
              },
              _,
            );
    } else
      _ = (0, _.jsx)(`span`, {
        className: _,
        children: _(`#StoreAdmin_GameDescription_MissingImageLanguage`, _),
      });
  } else
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _(`#StoreAdmin_GameDescription_MissingImage`, _),
    });
  let _ = (_, _) => {
      if (_) {
        let _ = new Map();
        for (let [_, _] of _) {
          let _ = RegExp(`${_}(?!\\w)`, `g`),
            _ = _.Value.replace(_, `${_}`);
          _.set(_, _);
        }
        _(_);
      } else
        _({
          src: _,
        });
    },
    [_, _] = _.useState(0),
    [_, _] = _.useState(0),
    _ = _((_) => _(_.target.offsetLeft + _.borderBoxSize[0].inlineSize)),
    _ = _((_) => _(_.borderBoxSize[0].inlineSize)),
    _ = _ + 16 >= _,
    _ = _ ? _ : void 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          editAsset: _,
          bReplace: !0,
          onAssetSelected: _,
          hideModal: _,
        }),
      _,
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _({
          [_]: !0,
          [_]: !0,
          [_]: _,
          [_]: _,
        }),
        title: ``,
        ..._,
        children: [
          _ && (0, _.jsx)(_, {}),
          (0, _.jsxs)(`div`, {
            ref: _,
            className: _(_, _ && `_1UlSm7Z4mws-`),
            style: {
              left: _,
            },
            ..._,
            children: [
              _,
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#StoreAdmin_GameDescription_ReplaceImage`),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                tooltip: _(`#StoreAdmin_GameDescription_RemoveImage`),
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
          _,
        ],
      }),
    ],
  });
}
function _(_, _, _) {
  let [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_?.(), _());
    }, [_, _]),
    _,
    _;
  return (
    _(_)
      ? ((_ =
          _ &&
          (0, _.jsx)(_, {
            selectedAsset: _,
            hideModal: _,
            activeLanguage: _,
          })),
        (_ = (0, _.jsx)(_, {
          onClick: _,
          tooltip: _(`#StoreAdmin_GameDescription_EditImageDetails`),
          children: (0, _.jsx)(_, {
            className: `SVGIcon_Button`,
          }),
        })))
      : _(_) &&
        (_ = (0, _.jsx)(_, {
          onClick: () => {},
          tooltip: _(`#StoreAdmin_GameDescription_EditImageDetails_Legacy`),
          children: (0, _.jsx)(_, {}),
        })),
    {
      elLocalizedImageGroupDialog: _,
      elLocalizedImageGroupControl: _,
    }
  );
}
function _() {
  return (0, _.jsx)(`span`, {
    className: _,
    children: (0, _.jsx)(`span`, {
      className: _,
      children: (0, _.jsx)(_, {
        toolTipContent: _(
          `#StoreAdmin_GameDescription_ImageLinkDisabled_Description`,
        ),
        children: (0, _.jsx)(`span`, {
          className: _,
          children: `Disabled`,
        }),
      }),
    }),
  });
}
function _(_) {
  let { nodeType: _ } = _,
    { view: _ } = _(),
    [_, _, _] = _(),
    _ = _.useCallback(() => {
      (_(), _.focus());
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        (_.dispatch(
          _.state._.insert(
            _.state.selection._,
            _.createChecked({
              src: _,
            }),
          ),
        ),
          _());
      },
      [_, _, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onAssetSelected: _,
          hideModal: _,
        }),
      (0, _.jsx)(_, {
        onClick: _,
        toggled: _,
        tooltip: _(`#StoreAdmin_GameDescription_InsertImage`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { editAsset: _, bReplace: _, onAssetSelected: _, hideModal: _ } = _,
    _ = _(!0),
    [_, _] = _.useState(_),
    [_, _] = _(_, _),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(``),
    _ = _.useCallback(
      (_, _) => {
        _ && (_(_, _), _());
      },
      [_, _],
    );
  return (0, _.jsxs)(_, {
    active: !0,
    children: [
      _,
      (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          classNameContent: _,
          children: [
            (0, _.jsx)(_, {
              children: _(`#StoreAdmin_GameDescription_SelectImage`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _(`#StoreAdmin_GameDescription_ExistingImages`),
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#StoreAdmin_ExtraAssetUpload_UploadNew`),
                    }),
                    (0, _.jsx)(_, {
                      className: _,
                      onClick: _,
                      children: _(`#StoreAdmin_ExtraAssetUpload_BrowseForFile`),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                type: `text`,
                value: _,
                bShowClearAction: !0,
                onChange: (_) => _(_.currentTarget.value || ``),
                placeholder: _(
                  `#StoreAdmin_ExtraAssetUpload_SearchPlaceholder`,
                ),
              }),
            }),
            (0, _.jsx)(_, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _(_, _),
                children: _.filter((_) => _(_).includes(_)).map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      extraAsset: _,
                      onSelectAsset: _,
                      onChooseAsset: (_) => _(_, _),
                      selected: _(_) == _,
                    },
                    _(_),
                  ),
                ),
              }),
            }),
            (0, _.jsxs)(_, {
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    className: void 0,
                    checked: _,
                    onChange: _,
                    label: _(`#StoreAdmin_ExtraAssetUpload_ReplaceAll`),
                    tooltip: _(`#StoreAdmin_ExtraAssetUpload_ReplaceAll_ttip`),
                  }),
                (0, _.jsx)(_, {
                  onCancel: _,
                  onOK: (_) => {
                    (_.preventDefault(), _(_, _));
                  },
                  bOKDisabled: !_,
                  strOKText: _(`#StoreAdmin_GameDescription_UseThisImage`),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { extraAsset: _, onSelectAsset: _, onChooseAsset: _, selected: _ } = _,
    _ = _.useRef(null),
    _ = _(_);
  return (
    _.useLayoutEffect(() => {
      _ &&
        _.current?.scrollIntoView({
          block: `nearest`,
          inline: `nearest`,
        });
    }, []),
    (0, _.jsx)(`div`, {
      ref: _,
      className: _(_, _ && `rovZbxEReRM-`),
      title: _,
      onClick: (_) => _(_),
      onDoubleClick: (_) => _(_),
      children: (0, _.jsx)(_, {
        extraAsset: _,
        controls: !1,
      }),
    })
  );
}
function _(_) {
  let { selectedAsset: _, activeLanguage: _, hideModal: _ } = _;
  if ((_(!_, _), _))
    return (0, _.jsx)(_, {
      active: !0,
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          classNameContent: _,
          children: [
            (0, _.jsx)(_, {
              children: _(`#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Title`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                children: _(`#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Desc`),
              }),
            }),
            (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  onlyExtraAsset: _,
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    extraAsset: _,
                    activeLanguage: _,
                  }),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Button_Close`),
              }),
            }),
          ],
        }),
      }),
    });
}
function _(_) {
  let { extraAsset: _, activeLanguage: _ } = _,
    _ = _(_),
    _ = _(),
    _ = _.useCallback((_) => _(_(_, !0, _)?.url, _), [_, _]),
    [_, _] = _.useState(void 0),
    [_, _, _] = _();
  return _
    ? (0, _.jsxs)(`div`, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              extraAsset: _,
              deleteLang: _,
              hideModal: _,
            }),
          (0, _.jsx)(_, {
            rgAssetLangs: _,
            initialLang: _,
            showDeleteAll: !1,
            imageClassname: _,
            fnGetAssetUrl: _,
            fnDeletAssetLang: (_) => {
              (_(_), _());
            },
            fnDeleteAllAssets: () => {
              (_(void 0), _());
            },
          }),
        ],
      })
    : null;
}
function _(_, _) {
  _.useEffect(() => {
    _ && _();
  }, [_, _]);
}
function _(_) {
  let { asset_mtime: _, assets_list: _ } = _,
    _ = new Map(_),
    _ = _(!0),
    _ = _.useMemo(() => _(_.filter(_), _), [_]),
    _ = _.useMemo(
      () =>
        _.filter(_).map((_) => ({
          key: _(_),
          caption: _(_),
          mapAltText: _.alt_text,
        })),
      [_],
    ),
    _ = _(),
    [_, _, _] = _(),
    { mutateAsync: _, isPending: _ } = _();
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          entries: _,
          isLoading: !1,
          hideModal: _,
          mutateAltTextAsync: async (_, _) =>
            (await _({
              strExtraAssetFileName: _,
              mapAltText: _,
            })) !== !1,
          isMutatePending: _,
          fnGetImage: (_, _) =>
            (0, _.jsx)(_, {
              extraAsset: _.get(_),
              caption: !1,
              controls: !1,
              primaryLanguage: _,
              mapAssetsList: _,
            }),
        }),
      _.some(_) &&
        (0, _.jsxs)(`div`, {
          className: `R8CGEkn4Rzg-`,
          children: [
            (0, _.jsx)(`p`, {
              children: _(`#StoreAdmin_CustomImages_Title`),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#StoreAdmin_EditAltText_Button`),
            }),
          ],
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: [..._].map((_) =>
            (0, _.jsx)(
              _,
              {
                extraAsset: _,
                primaryLanguage: _,
                mapAssetsList: _,
              },
              _(_),
            ),
          ),
        }),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { onlyExtraAsset: _ } = _,
    _ = _(),
    _ = _(),
    _ = (_) => {
      let _ = _ ? [..._].reverse().find((_) => _.bSuccess)?.uploadResult : null;
      _ && _(_);
    },
    _ = _(),
    _ = _.useMemo(() => _.filter(_), [_]),
    _ = _(_);
  _.useEffect(() => {
    let _ = (_) => ({
      baseFilename: _(_),
      languages: _(_) ? [0] : _(_),
    });
    (_.SetExistingAssetGroups(_.map(_), _),
      _.SetOnlyAssetGroup(_ ? _(_) : null));
  }, [_, _, _, _]);
  let _ = _(_),
    { rgRealmList: _ } = _(),
    _;
  return (
    (_ =
      _ && !_
        ? _(`#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalNoSize`)
        : _ && _
          ? _(
              `#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalWithSize`,
              _.width,
              _.height,
            )
          : _(`#StoreAdmin_ExtraAssetUpload_Instructions_Base`)),
    (0, _.jsx)(`div`, {
      children: (0, _.jsx)(_, {
        imageUploader: _,
        rgRealmList: _,
        fnUploadComplete: _,
        elOverrideDragAndDropText: _,
        elAdditonalButtons: (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _(`#StoreAdmin_ExtraAssetUpload_Instructions_Note`),
          }),
        }),
      }),
    })
  );
}
function _(_) {
  let [_, _] = _.useState(void 0),
    _ = _();
  return (
    _.useEffect(() => {
      let _ = _.map(async (_) => {
        let _ = _(_, !1, -1);
        return ((_ ||= _(_, !0, -1)), _(await _(_(_?.url, _), _?.usage == 1)));
      });
      Promise.all(_).then(_);
    }, [_, _]),
    _
  );
}
function _(_) {
  let _ = _(_.useMemo(() => (_ ? [_] : []), [_]));
  return _?.length > 0 ? _[0] : void 0;
}
function _(_) {
  let {
      extraAsset: _,
      caption: _ = !0,
      controls: _ = !0,
      primaryLanguage: _,
      mapAssetsList: _,
    } = _,
    _ = _.useRef(void 0),
    _ = _(_),
    [_, _, _] = _(),
    _ = _(),
    _ = _(_),
    _;
  if (_(_)) {
    let _ = _(_, !1);
    _ = _ ? [_] : [];
  } else {
    let _ = _ == 29 ? 6 : 0,
      _ = _(_).sort((_, _) => _(_, _, _, _));
    _ = Array.from({
      length: Math.min(3, _.length),
    }).map((_, _) => _(_, _ == 0, _[_]));
  }
  let _ = () => {
      window.open(_(_[0]?.url, _));
    },
    _ = () => _(_),
    _ = _(),
    { elLocalizedImageGroupDialog: _, elLocalizedImageGroupControl: _ } = _(
      _,
      null,
      null,
    ),
    _ = (_) => {
      let _ = _.currentTarget;
      _.paused ? _.play() : _.pause();
    },
    _ = _
      ? Array.from(_).reduce((_, [_, _]) => (_.includes(_) ? [..._, _] : _), [])
      : [],
    _ = new Intl.ListFormat(_.GetPreferredLocales(), {
      style: `long`,
      type: `conjunction`,
    }),
    _ = _.map((_) => _(`#Language_` + _)),
    _ =
      _.length <= 3
        ? _.format(_)
        : _.format([
            ..._.slice(0, 2),
            _(
              `#StoreAdmin_GameDescription_AssetsInUseOthers`,
              _.length - 3 + 1,
            ),
          ]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _(_, _, _ && `hnSSIKmA-6o-`),
        title: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              extraAsset: _,
              hideModal: _,
            }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: `aa-jpLpIsII-`,
              title: ``,
              children: [
                _,
                (0, _.jsx)(_, {
                  onClick: _,
                  tooltip: _(`#StoreAdmin_GameDescription_OpenInNewWindow`),
                  children: (0, _.jsx)(_, {}),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    onClick: _,
                    tooltip: _(
                      `#StoreAdmin_GameDescription_CopyNameToClipboard`,
                    ),
                    children: (0, _.jsx)(_, {}),
                  }),
                _.length == 0 &&
                  (0, _.jsx)(_, {
                    onClick: _,
                    tooltip: _(`#StoreAdmin_GameDescription_DeleteAsset`),
                    children: (0, _.jsx)(_, {}),
                  }),
                _.length > 0 &&
                  (0, _.jsx)(_, {
                    onClick: () => {},
                    tooltip: (0, _.jsxs)(_.Fragment, {
                      children: [
                        _(`#StoreAdmin_GameDescription_AssetsInUse1`, _),
                        (0, _.jsx)(`br`, {}),
                        (0, _.jsx)(`br`, {}),
                        _(`#StoreAdmin_GameDescription_AssetsInUse2`),
                      ],
                    }),
                    children: _.length,
                  }),
              ],
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_, _) =>
              _.usage == 1
                ? (0, _.jsx)(
                    `video`,
                    {
                      className: _(_, _[`Image-${_}`]),
                      src: _.url + `?t=` + _,
                      onDoubleClick: _ ? _ : void 0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      autoPlay: !0,
                      onClick: _,
                    },
                    _.url + _,
                  )
                : (0, _.jsx)(
                    `img`,
                    {
                      className: _(_, _[`Image-${_}`]),
                      src: _.url + `?t=` + _,
                      onDoubleClick: _ ? _ : void 0,
                    },
                    _.url + _,
                  ),
            ),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `Oq-vK0px7GU-`,
              children: _(_),
            }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  if (_ != null) {
    if (_ == _ && _ != _) return -1;
    if (_ != _ && _ == _) return 1;
    if (_ == _ && _ != _) return -1;
    if (_ != _ && _ == _) return 1;
  }
  return _ - _;
}
function _(_) {
  let { extraAsset: _, deleteLang: _, hideModal: _ } = _,
    { mutate: _, isPending: _, isSuccess: _ } = _(),
    _ = _ || _;
  return (
    _.useEffect(() => {
      _ && _();
    }, [_, _]),
    (0, _.jsx)(_, {
      active: !0,
      children: (0, _.jsx)(_, {
        onOK: () =>
          _({
            extraAsset: _,
            eLang: _,
          }),
        bOKDisabled: _,
        strOKButtonText: _(`#StoreAdmin_GameDescription_DeleteAsset`),
        strTitle: _(`#StoreAdmin_GameDescription_DeleteAsset`),
        strDescription: _
          ? (0, _.jsx)(_, {
              position: `center`,
              size: `medium`,
            })
          : _(`#StoreAdmin_GameDescription_DeleteAsset_Confirm`),
        onCancel: _,
      }),
    })
  );
}
function _() {
  let _ = _(`ajaxmodifyextraassets`),
    _ = _();
  return _({
    mutationFn: async ({ extraAsset: _, eLang: _ }) => {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`action`, `delete`),
        _.append(`name`, _(_)),
        _(_) && _ != null && _ != -1 && _.append(`lang`, _(_)));
      let _ = await fetch(_, {
          method: `post`,
          body: _,
        }),
        _ = await _.json();
      if (!_._) throw _.errors?.join(` `) || `Error deleting asset`;
      return _;
    },
    onSuccess: (_) => {
      _(_.rgExtraAssets);
    },
    onError: (_) => {
      console.error(
        _(
          `#StoreAdmin_UploadError_Generic`,
          typeof _ == `string` ? _ : _.message,
        ),
      );
    },
  });
}
function _() {
  let _ = _(`ajaxmodifyextraassets`),
    _ = _();
  return _({
    mutationFn: async ({ strExtraAssetFileName: _, mapAltText: _ }) => {
      if (!_ || !_) return !1;
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`action`, `alt_text`),
        _.append(`name`, _),
        _.append(
          `alt_text`,
          JSON.stringify(
            Object.entries(_).map(([_, _]) => ({
              lang: _,
              text: _,
            })),
          ),
        ));
      let _ = await fetch(_, {
          method: `post`,
          body: _,
        }),
        _ = await _.json();
      if (!_._) throw _.errors?.join(` `) || `Error deleting asset`;
      return _;
    },
    onSuccess: (_) => {
      _ !== !1 && _(_.rgExtraAssets);
    },
    onError: (_) => {
      console.error(
        _(
          `#StoreAdmin_UploadError_Generic`,
          typeof _ == `string` ? _ : _.message,
        ),
      );
    },
  });
}
var _ = {
    NoBorder: `noborder`,
    EqualCells: `equalcells`,
  },
  _ = _({
    tableGroup: `block`,
    cellContent: `paragraph block*`,
    cellAttributes: {
      class: {
        default: _.TableCell,
        setDOMAttr: (_, _) => {
          _.class = _;
        },
      },
    },
  }),
  _ = {
    BBArgsToAttrs: (_) => {
      let _ = {};
      return (
        _.colspan && (_.colspan = parseInt(_.colspan)),
        _.rowspan && (_.rowspan = parseInt(_.rowspan)),
        _.colwidth &&
          (_.colwidth = _.colwidth.split(`,`).map((_) => parseInt(_))),
        _
      );
    },
    AttrsToBBArgs: (_) => {
      let _ = {};
      return (
        _.colspan && _.colspan != 1 && (_.colspan = _.colspan.toString()),
        _.rowspan && _.rowspan != 1 && (_.rowspan = _.rowspan.toString()),
        _.colwidth && (_.colwidth = _.colwidth.join(`,`)),
        {
          args: _,
        }
      );
    },
  };
({
  ..._.table,
},
  _.NoBorder,
  _.EqualCells,
  {
    ..._.table_row,
  },
  _.TableRow,
  {
    ..._.table_cell,
  },
  {
    ..._,
  },
  {
    ..._.table_header,
  },
  {
    ..._,
  });
var _ = _.memo(function (_) {
    let { schema: _ } = _,
      _ = !!(`table` in _.nodes && _.nodes.table.spec.tableRole);
    return (
      _(
        _.useMemo(
          () =>
            _
              ? _({
                  View: _,
                })
              : void 0,
          [_],
        ),
      ),
      _(_.useMemo(() => (_ ? _() : void 0), [_])),
      null
    );
  }),
  _ = class extends _ {
    constructor(_, _) {
      (super(_, _), this.SetTableClass(_));
    }
    update(_) {
      return super.update(_) ? (this.SetTableClass(_), !0) : !1;
    }
    SetTableClass(_) {
      this.table.className = _(
        _,
        _.attrs[_.NoBorder] && `b20E2IrghSY-`,
        _.attrs[_.EqualCells] && `zJnyxE63CCk-`,
      );
    }
  },
  _ = _(function (_) {
    let {
        pmState: _,
        className: _,
        refOnUpdate: _,
        refView: _,
        bSpellcheckEnabled: _ = !0,
        bSingleLine: _,
        panelProps: _,
        children: _,
      } = _,
      [_, _] = _.useState(),
      [_, _] = _.useState();
    (_.useEffect(() => {
      _ &&
        _ &&
        _(
          new _(_, {
            state: _.state,
          }),
        );
    }, [_, _]),
      _.useEffect(() => () => _?.destroy(), [_]),
      _(_, _));
    let { refDiv: _, onActivate: _, onGamepadDirection: _ } = _(_),
      _ = _(_, _);
    if (!_) return null;
    let { schemaConfig: _, bbcodeParser: _ } = _;
    return (0, _.jsxs)(_, {
      view: _,
      pmState: _,
      children: [
        (0, _.jsx)(
          _,
          {
            className: _({
              [`` + _]: !!_,
              [_]: !0,
              [_]: !!_,
            }),
            ref: _,
            spellCheck: _,
            focusable: !0,
            onActivate: _,
            onOKActionDescription: _(`#UserGameNotes_Edit`),
            onGamepadDirection: _,
            ..._,
          },
          `editordiv_${_}`,
        ),
        (0, _.jsx)(_, {
          refOnUpdate: _,
          schema: _.pm_schema,
          bSingleLine: _,
        }),
        (0, _.jsx)(_, {
          parser: _,
          schema: _.pm_schema,
        }),
        (0, _.jsx)(_, {
          schema: _.pm_schema,
        }),
        _,
      ],
    });
  });
function _(_) {
  let _ = _.useRef(null),
    _ = _(),
    _ = _.useCallback(() => {
      if ((_.ShowVirtualKeyboard(), _ && !_.hasFocus())) {
        _.focus();
        let _ = _.dom.childNodes,
          _ = _.current?.scrollTop ?? 0;
        for (let _ = 0; _ < _.length; ++_) {
          let _ = _[_],
            _ = _.offsetTop;
          if (_ !== void 0 && _ >= _) {
            let _ = _.getBoundingClientRect();
            _(_, _.left, _.top);
            break;
          }
        }
      }
    }, [_, _]),
    _ = _.useCallback((_) => _.currentTarget == _.target, []);
  return {
    refDiv: _,
    onActivate: _,
    onGamepadDirection: _(_, void 0, void 0, _),
  };
}
var _ = _.memo(function (_) {
  let { parser: _, schema: _ } = _;
  return (
    _(
      _.useMemo(
        () =>
          new _({
            props: {
              transformPasted: (_, _) => _(_, _.nodes.hard_break, _),
            },
          }),
        [_, _],
      ),
    ),
    null
  );
});
function _(_, _, _) {
  let _ = !1;
  if (
    (_.content.forEach((_) => {
      _.type == _ && (_ = !0);
    }),
    !_)
  )
    return _;
  let _ = _.ConvertLineBreaksToParagraphs(_.content);
  return _.maxOpen(_);
}
function _(_) {
  let {
      closeModal: _,
      strTitle: _,
      onOK: _,
      strOKText: _,
      onCancel: _,
      strCancelText: _,
      bOKDisabled: _,
      bCancelDisabled: _,
      strClassNameContent: _ = `GenericFormDialog`,
      children: _,
    } = _,
    _ = _.useCallback(() => {
      (_ && _(), _());
    }, [_, _]),
    _ = _ ? () => {} : _;
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    children: (0, _.jsxs)(_, {
      onSubmit: _,
      classNameContent: _,
      children: [
        (0, _.jsx)(_, {
          children: _,
        }),
        _,
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            strOKText: _,
            bOKDisabled: _,
            onCancel: _,
            strCancelText: _,
            bCancelDisabled: _,
          }),
        }),
      ],
    }),
  });
}
_.memo(function (_) {
  let {
      schema: _,
      strLinkText: _,
      strLinkHref: _,
      bIsUpdate: _,
      addtlAttrs: _,
      addtlAttrsValues: _,
      closeModal: _,
      view: _,
      from: _,
      _: _,
    } = _,
    [_, _] = _.useState(_),
    [_, _] = _.useState(_),
    _ = _.useRef(null),
    _ = _.useRef(null),
    [_, _] = _.useState(_),
    _ = () => {
      let _ = _.state._,
        _ = {
          href: _,
        };
      for (let _ in _) _[_] = _[_];
      let _ = _.marks.link?.create(_),
        _ = _.text(_ || _, [_]);
      try {
        ((_ = _.replaceRangeWith(_, _, _)),
          (_ = _.setSelection(_.create(_.doc, _ + _.nodeSize, _ + _.nodeSize))),
          _.dispatch(_));
      } catch (_) {
        console.error(`Error during link insertion`, _);
      }
      _();
    };
  _.useLayoutEffect(() => {
    _.current?.value?.length
      ? _.current?.value?.length
        ? (_.current.Focus(), _.current.element.select())
        : _.current.Focus()
      : _.current?.Focus();
  }, []);
  let _ = _(
      _ ? `#FormattingToolbar_EditLink` : `#FormattingToolbar_InsertLink`,
    ),
    _ = _(_ ? `#Button_Save` : `#FormattingToolbar_InsertLink`);
  return (0, _.jsxs)(_, {
    onOK: _,
    closeModal: _,
    strTitle: _,
    strOKText: _,
    bOKDisabled: _.length == 0,
    children: [
      (0, _.jsx)(_, {
        ref: _,
        value: _,
        onChange: (_) => _(_.currentTarget.value),
        label: _(`#FormattingToolbar_LinkText`),
      }),
      (0, _.jsx)(_, {
        ref: _,
        value: _,
        placeholder: `https://`,
        onChange: (_) => _(_.currentTarget.value),
        label: _(`#FormattingToolbar_LinkAddress`),
        mustBeURL: !0,
      }),
      _ &&
        (0, _.jsx)(_, {
          addtlAttrs: _,
          values: _,
          setValues: _,
        }),
    ],
  });
});
function _(_) {
  let { addtlAttrs: _, values: _, setValues: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: Object.keys(_).map((_) =>
      (0, _.jsx)(
        _,
        {
          attrName: _,
          fnRender: _[_].fnRenderEditor,
          value: _[_],
          setValues: _,
        },
        _,
      ),
    ),
  });
}
var _ = _.memo(function (_) {
  let { attrName: _, fnRender: _, value: _, setValues: _ } = _;
  return _(
    _,
    _.useCallback(
      (_) =>
        _((_) => ({
          ..._,
          [_]: _,
        })),
      [_, _],
    ),
  );
});
function _(_, _, _) {
  let { openColorPicker: _ } = _();
  return [
    _.useCallback(
      (_, _) => {
        let { state: _ } = _,
          _ = _.selection,
          { from: _, _: _ } = _,
          { empty: _ } = _,
          _ = _ ? _.marks.color : _.marks.bgcolor,
          _ = _(_, _, _ ? _.$from : _.doc.resolve(_)),
          _;
        _ &&
          ((_ = _.mark.attrs.color),
          _
            ? ((_ = _.from), (_ = _._))
            : ((_ = Math.max(_.from, _)), (_ = Math.min(_._, _))));
        let _ = {};
        if (_)
          for (let _ in _) {
            let _ = _[_];
            _[_] = _ ? _.fnReadValue(_.mark) : _.defaultValue;
          }
        _(_ ?? _(_, _), {
          color: _ || void 0,
          disableAlpha: !0,
          bLivePreview: !1,
          strTitle: _(
            _ ? `#FormattingToolbar_Color` : `#FormattingToolbar_BgColor`,
          ),
          onChange: (_) => _(_, _, _(_), _, _, _),
          onClose: () => {
            window.setTimeout(() => {
              _.isDestroyed || _.focus();
            }, 1);
          },
        });
      },
      [_, _, _, _.marks.bgcolor, _.marks.color],
    ),
    null,
  ];
}
function _(_, _) {
  let { node: _ } = _.domAtPos(_);
  return (_ instanceof HTMLElement ? _ : _.parentElement) ?? _.dom;
}
function _(_, _, _, _, _, _) {
  try {
    if (_.isDestroyed) {
      console.warn(`Editor view is destroyed; skipping color insert`);
      return;
    }
    if (!_) {
      console.log(`debug: no markType`);
      return;
    }
    if (!_ || !/^#[0-9a-fA-F]{6}$/.test(_)) {
      console.log(`debug: invalid color text: ` + _);
      return;
    }
    let { state: _, dispatch: _ } = _,
      _ = Math.max(0, Math.min(_, _.doc.content.size)),
      _ = Math.max(0, Math.min(_, _.doc.content.size));
    if (_ > _) {
      console.error(`Invalid selection range:`, _, _);
      return;
    }
    let _ = _.create({
        color: _,
        ..._,
      }),
      _ = _._;
    (_ === _
      ? (_ = _.addStoredMark(_))
      : ((_ = _.removeMark(_, _, _)),
        (_ = _.addMark(_, _, _)),
        (_ = _.setSelection(_.create(_.doc, _)))),
      _(_.scrollIntoView()));
  } catch (_) {
    console.error(_);
  }
}
function _(_) {
  let { schema: _, bColor: _, addtlAttrs: _, children: _ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(() => _(_.state, _ ? _.marks.color : _.marks.bgcolor)),
    _ = _.useCallback(
      (_) => _(_(_.state, _ ? _.marks.color : _.marks.bgcolor)),
      [_, _],
    );
  _(_, _);
  let [_, _] = _(_, _, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      (0, _.jsx)(_, {
        onClick: (_) => _(_, _.currentTarget),
        toggled: _,
        tooltip: _(
          _ ? `#FormattingToolbar_Color` : `#FormattingToolbar_BgColor`,
        ),
        children: _,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Undo`),
        keyboardShortcut: `Mod-z`,
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Redo`),
        keyboardShortcut: _.PLATFORM == `macos` ? `Mod-Shift-z` : `Mod-y`,
        command: _,
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { schema: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Bold`),
        keyboardShortcut: `Mod-b`,
        mark: _.marks.strong,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Italic`),
        keyboardShortcut: `Mod-i`,
        mark: _.marks.italic,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_Underline`),
        keyboardShortcut: `Mod-u`,
        mark: _.marks.underline,
        children: (0, _.jsx)(_, {}),
      }),
      `strike` in _.marks &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_Strike`),
          keyboardShortcut: `Mod-Shift-x`,
          mark: _.marks.strike,
          children: (0, _.jsx)(_, {}),
        }),
      `code` in _.marks &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_InlineCode`),
          keyboardShortcut: `Ctrl-Shift-c`,
          mark: _.marks.code,
          children: (0, _.jsx)(_, {}),
        }),
      `color` in _.marks &&
        (0, _.jsx)(_, {
          schema: _,
          bColor: !0,
          children: (0, _.jsx)(_, {}),
        }),
      `bgcolor` in _.marks &&
        (0, _.jsx)(_, {
          schema: _,
          bColor: !1,
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _(_) {
  let { schema: _ } = _;
  return (0, _.jsx)(_, {
    tooltip: _(`#FormattingToolbar_Paragraph`),
    keyboardShortcut: `Ctrl-Shift-0`,
    nodeType: _.nodes.paragraph,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { nodeTypes: _, attrs: _, children: _, ..._ } = _,
    { callbacks: _, view: _ } = _(),
    [_, _] = _.useState(() => _(_.state, _, _)),
    _ = _.useCallback((_) => _(_(_.state, _, _)), [_, _]);
  _(_, _);
  let _ = _.useMemo(() => _(_, _ ?? {}), [_, _]),
    _ = !!_;
  return (0, _.jsx)(_, {
    ..._,
    command: _,
    toggled: _,
    children: _,
  });
}
function _(_) {
  let { schema: _ } = _,
    _ = _.nodes.paragraph,
    _ = _.nodes.heading,
    _ = _.useMemo(() => [_, _], [_, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_AlignLeft`),
        keyboardShortcut: `Ctrl-Shift-L`,
        nodeTypes: _,
        attrs: {
          align: `left`,
        },
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_AlignCenter`),
        keyboardShortcut: `Ctrl-Shift-E`,
        nodeTypes: _,
        attrs: {
          align: `center`,
        },
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        tooltip: _(`#FormattingToolbar_AlignRight`),
        keyboardShortcut: `Ctrl-Shift-R`,
        nodeTypes: _,
        attrs: {
          align: `right`,
        },
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { schema: _, maxLevel: _ = 1, levels: _ } = _,
    _ = _ + _ - 1;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ <= 1 &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_HeadingLevel1`),
          keyboardShortcut: `Ctrl-Shift-1`,
          nodeType: _.nodes.heading,
          attrs: {
            level: 1,
          },
          children: (0, _.jsx)(_, {}),
        }),
      _ <= 2 &&
        _ >= 2 &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_HeadingLevel2`),
          keyboardShortcut: `Ctrl-Shift-2`,
          nodeType: _.nodes.heading,
          attrs: {
            level: 2,
          },
          children: (0, _.jsx)(_, {}),
        }),
      _ <= 3 &&
        _ >= 3 &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_HeadingLevel3`),
          keyboardShortcut: `Ctrl-Shift-3`,
          nodeType: _.nodes.heading,
          attrs: {
            level: 3,
          },
          children: (0, _.jsx)(_, {}),
        }),
      _ <= 4 &&
        _ >= 4 &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_HeadingLevel4`),
          keyboardShortcut: `Ctrl-Shift-4`,
          nodeType: _.nodes.heading,
          attrs: {
            level: 4,
          },
          children: (0, _.jsx)(_, {}),
        }),
      _ <= 5 &&
        _ >= 5 &&
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_HeadingLevel5`),
          keyboardShortcut: `Ctrl-Shift-5`,
          nodeType: _.nodes.heading,
          attrs: {
            level: 5,
          },
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _(_) {
  let { schema: _, showIndentButtonsAsNeeded: _ = !1 } = _,
    { callbacks: _, view: _ } = _(),
    { bullet_list: _, ordered_list: _, list_item: _ } = _.nodes,
    _ = _.useMemo(() => _(_), [_]),
    _ = _.useMemo(() => _(_), [_]),
    [_, _] = _.useState(() => _(_.state) || _(_.state));
  return (
    _(
      _,
      _.useCallback(
        (_) => {
          _(_(_.state) || _(_.state));
        },
        [_, _],
      ),
    ),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          tooltip: _(`#FormattingToolbar_BulletedList`),
          keyboardShortcut: `Ctrl-Shift-8`,
          list_type: _,
          list_item: _,
          children: (0, _.jsx)(_, {}),
        }),
        _ &&
          (0, _.jsx)(_, {
            tooltip: _(`#FormattingToolbar_OrderedList`),
            keyboardShortcut: `Ctrl-Shift-7`,
            list_type: _,
            list_item: _,
            children: (0, _.jsx)(_, {}),
          }),
        (!_ || _) &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                tooltip: _(`#FormattingToolbar_OutdentList`),
                keyboardShortcut: `Mod-[`,
                command: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                tooltip: _(`#FormattingToolbar_IndentList`),
                keyboardShortcut: `Mod-[`,
                command: _,
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let { list_type: _, list_item: _, children: _, ..._ } = _,
    { callbacks: _, view: _ } = _(),
    _ = _.useCallback((_) => _(_.state, _) !== void 0, [_]),
    [_, _] = _.useState(() => _(_)),
    _ = _.useMemo(() => _(_), [_]),
    _ = _.useMemo(() => _(_), [_]);
  return (
    _(
      _,
      _.useCallback(
        (_) => {
          _(_(_));
        },
        [_],
      ),
    ),
    (0, _.jsx)(_, {
      ..._,
      toggled: _,
      command: _ ? _ : _,
      children: _,
    })
  );
}
var _ = class {
  m_ProseMirrorSchema;
  m_mapBBCodeDictionary = new Map();
  m_PMToBBCodeConfig = {
    mapNodes: new Map(),
    mapMarks: new Map(),
  };
  get pm_schema() {
    return this.m_ProseMirrorSchema;
  }
  get bbcode_dictionary() {
    return this.m_mapBBCodeDictionary;
  }
  get pm_to_bbcode_config() {
    return this.m_PMToBBCodeConfig;
  }
  ConvertAttrToBBCodeArgs(_, _) {
    let _ = this.m_PMToBBCodeConfig.mapNodes.get(_.type);
    return (_ && _.AttrsToBBArgs && _.AttrsToBBArgs(_, _).args) || {};
  }
  constructor(_, _) {
    let _ = {
        doc: {
          content: `block+`,
        },
        text: {
          group: `inline`,
        },
        hard_break: {
          inline: !0,
          group: `inline`,
          selectable: !1,
          linebreakReplacement: !0,
          parseDOM: [
            {
              tag: `br`,
            },
          ],
          toDOM() {
            return [`br`];
          },
        },
      },
      _ = new Map(),
      _ = new Map(),
      _ = _ ? new Set(_) : void 0;
    for (let _ in _.nodes) {
      let { bbCode: _, ..._ } = _.nodes[_],
        _ = _(_, _);
      _ && ((_[_] = _), _.set(_, _));
    }
    let _ = {};
    for (let _ in _.marks) {
      let { bbCode: _, ..._ } = _.marks[_];
      (!_ || _.has(_.tag)) && ((_[_] = _), _.set(_, _));
    }
    ((this.m_ProseMirrorSchema = new _({
      nodes: _,
      marks: _,
    })),
      _.forEach((_, _) => {
        let _ = this.m_ProseMirrorSchema.nodes[_],
          _ = _.nodes[_],
          _ = Array.isArray(_) ? _ : [_],
          _;
        (_.content == `list_item+`
          ? (_ = this.m_ProseMirrorSchema.nodes.list_item)
          : _.content?.indexOf(`paragraph`) != -1 &&
            (_ = this.m_ProseMirrorSchema.nodes.paragraph),
          _.forEach(
            ({
              tag: _,
              BBArgsToAttrs: _,
              AttrsToBBArgs: _,
              convertContentToAttr: _,
              bVerbatimArgs: _,
              bVerbatimContent: _,
              ..._
            }) => {
              this.m_mapBBCodeDictionary.set(_, {
                Constructor: {
                  node: _,
                  BBArgsToAttrs: _,
                  convertContentToAttr: _,
                  acceptNode: _,
                },
                skipFollowingNewline: !0,
                ..._,
              });
            },
          ));
        let {
          tag: _,
          AttrsToBBArgs: _,
          bVerbatimArgs: _,
          bVerbatimContent: _,
        } = _[0];
        this.m_PMToBBCodeConfig.mapNodes.set(_, {
          tag: _,
          AttrsToBBArgs: _,
          bVerbatimArgs: _,
          bVerbatimContent: _,
        });
      }),
      _.forEach((_, _) => {
        let _ = this.m_ProseMirrorSchema.marks[_],
          { tag: _, BBArgsToAttrs: _, AttrsToBBArgs: _, ..._ } = _;
        (this.m_mapBBCodeDictionary.set(_, {
          Constructor: {
            mark: _,
            BBArgsToAttrs: _,
          },
          ..._,
        }),
          this.m_PMToBBCodeConfig.mapMarks.set(_, {
            tag: _,
            AttrsToBBArgs: _,
          }));
      }));
  }
};
function _(_, _) {
  if (!_) return _;
  if (Array.isArray(_)) {
    let _ = _.filter((_) => _.has(_.tag));
    return _.length > 0 ? _ : void 0;
  }
  return _.has(_.tag) ? _ : void 0;
}
var {
    paragraph: _,
    heading: _,
    bullet_list: _,
    list_item: _,
    image: _,
  } = _.nodes,
  { strong: _, italic: _, underline: _, link: _, strike: _ } = _.marks;
function _(_) {
  return new _({
    nodes: {
      paragraph: _,
      heading: {
        ..._,
        attrs: {
          level: {
            default: 2,
          },
          align: {
            default: `left`,
          },
        },
        parseDOM: [1, 2, 3, 4, 5, 6]
          .map((_) => ({
            tag: `h${_}`,
            getAttrs(_) {
              return {
                level: 2,
                align: _.style.textAlign || `left`,
              };
            },
          }))
          .concat(
            [1, 2, 3, 4, 5, 6].map((_) => ({
              tag: `span[data-ccp-parastyle="heading ${_}"]`,
              getAttrs(_) {
                return {
                  level: 2,
                  align: _.style.textAlign || `left`,
                };
              },
            })),
          ),
        bbCode: [2].map(_),
      },
      bullet_list: _,
      list_item: _,
      image: {
        ..._,
        toDOM: (_) => [
          `img`,
          {
            src: _(_.attrs.src),
          },
        ],
      },
      table: {
        content: `tr+`,
        group: `block`,
        toDOM: _(`table`, `div`),
        bbCode: {
          tag: `table`,
        },
      },
      _: {
        content: `(th | td)+`,
        toDOM: _(`tr`, `div`),
        bbCode: {
          tag: `tr`,
        },
      },
      _: {
        content: `paragraph block*`,
        toDOM: _(`th`, `span`),
        bbCode: {
          tag: `th`,
        },
      },
      _: {
        content: `paragraph block*`,
        toDOM: _(`td`, `span`),
        bbCode: {
          tag: `td`,
        },
      },
    },
    marks: {
      strong: _,
      italic: _,
      underline: _,
      strike: _,
      link: {
        ..._,
        toDOM: (_, _) => [
          `a`,
          {
            ..._.toDOM(_, _)[1],
            title: _(`#StoreAdmin_GameDescription_LinksDisabled`),
          },
          0,
        ],
        parseDOM: void 0,
      },
    },
  });
}
var _ = `_7QtrL8F-z-Y-`,
  _ = `gbM59IpYHns-`,
  _ = `cZDH35lwjfI-`,
  _ = `rQtLTxa1iC0-`,
  _ = `bRpAOSnkQfM-`,
  _ = `FJr79EVwnL0-`,
  _ = `R3U-eTTFbQk-`,
  _ = `S-a13GrCzoU-`,
  _ = `Way5TKNU77w-`,
  _ = `_9g5o7JsTyNY-`,
  _ = `rI9MOkqrfdo-`,
  _ = `Lmh2Lle6tzQ-`,
  _ = `nkdgwG06uZ4-`,
  _ = new _(),
  _ = {
    parser: {
      bConvertNewlinesToBR: !0,
    },
  };
function _(_) {
  let {
      language: _,
      languages: _,
      rctToolbarControls: _,
      mapValues: _,
      editorType: _,
      rctAboveEditor: _,
    } = _,
    _ = _.get(_),
    [_, _] = _.useState(),
    _ = _.useRef(void 0),
    _ = _(_(_)),
    [_] = _.useState(() => new Map()),
    _ = _.useCallback(
      (_) => {
        _.has(_) || _.set(_, new _(_, _.Value, (_) => _.Set(_), _));
      },
      [_, _],
    ),
    [_, _] = _.useState();
  _.useEffect(() => {
    (_(_), _(_.get(_)));
  }, [_, _, _, _]);
  let _ = _(_);
  (_.useEffect(() => {
    _.get(_).ReplaceDocument(_);
  }, [_, _, _]),
    _(_, {
      msAutosaveTimeout: 5e3,
    }),
    _.useEffect(() => {
      (window.DisableTooltipMutationObserver &&
        window.DisableTooltipMutationObserver(),
        (window.PHPReactPreSubmitCallbacks = _));
    }, []),
    _(_, () => _?.CommitChanges()),
    _.useEffect(() => {
      _.current && _.current();
    }, [_, _]));
  let _ = _(_),
    _ = _ != `awards`,
    _ = _.useCallback((_) => _(_, _, _, _), [_, _, _]);
  return (0, _.jsx)(_, {
    imageNodeType: _.pm_schema.nodes.image,
    activeLanguage: _,
    languages: _,
    children: (0, _.jsx)(_, {
      editorType: _,
      view: _,
      refUpdateToolbar: _,
      rctToolbarControls: _,
      schema: _.pm_schema,
      rctAboveEditor: _,
      children: (0, _.jsx)(_, {
        panelProps: {
          lang: _(_),
          onBlur: () => _?.CommitChanges(),
        },
        className: _,
        pmState: _,
        refOnUpdate: _,
        refView: _,
        children: (0, _.jsx)(_, {
          schema: _,
          activeLanguage: _,
          mapValues: _,
          allowAnimations: _,
          updateDocument: _,
        }),
      }),
    }),
  });
}
function _(_, _, _, _) {
  _?.CommitChanges();
  for (let [_, _] of _) {
    let _ = _.get(_);
    _ && _.Value != _ && (_(_), _.Set(_));
  }
}
function _(_) {
  let { imageNodeType: _, activeLanguage: _, languages: _, children: _ } = _,
    _ = _(),
    _ = _.useCallback(
      (_) => {
        let _,
          _ = new Promise((_, _) => {
            _ = {
              file: _,
              onComplete: (_) => {
                _(
                  _.createChecked({
                    src: _,
                  }),
                );
              },
              onCancel: () => _(void 0),
              activeLanguage: _,
              languages: _,
            };
          }),
          _ = _(_);
        return (_.finally(() => _()), _);
      },
      [_, _, _, _],
    ),
    _ = _.useCallback(async (_) => {
      let _ = new URL(`${_.PARTNER_BASE_URL}gfxproxy/externalgfx/`);
      return (
        _.searchParams.append(`url`, _),
        await (
          await fetch(_, {
            method: `GET`,
          })
        ).blob()
      );
    }, []);
  return (0, _.jsx)(_, {
    ProcessFileUpload: _,
    FetchImageURL: _,
    children: (0, _.jsxs)(`div`, {
      children: [`	`, _],
    }),
  });
}
function _(_) {
  let {
      editorType: _,
      view: _,
      refUpdateToolbar: _,
      rctToolbarControls: _,
      schema: _,
      children: _,
      rctAboveEditor: _,
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(1),
    _ = _.useCallback(
      (_) =>
        _.borderBoxSize.length > 0 && _(_.borderBoxSize[0].blockSize > 300),
      [],
    ),
    _ = _(_),
    _ = _ === `awards` && _ === 3;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        view: _,
        refUpdateToolbar: _,
        sticky: _,
        rctToolbarControls: _,
        schema: _,
        ePreviewMode: _,
        setPreviewMode: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: _ === 1,
          [_]: _ === 2,
          [_]: _ === 3,
          [_]: _ === `awards`,
        }),
        ref: _,
        children: [
          _,
          _ &&
            (0, _.jsx)(`div`, {
              className: `fOuXKqBIMCc-`,
              children: _(
                `#StoreAdmin_GameDescription_Awards_Gamepad_Unsupported`,
              ),
            }),
          _,
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`h2`, {
    className: _,
    children: [
      _.children,
      (0, _.jsx)(`div`, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _.useRef(_);
  _.current = _;
  let _ = _.useRef(_);
  _.current = _;
  let _ = _.useRef(void 0);
  return (
    (_.current ||= _(
      (_) =>
        _(
          _.current.find((_) => _(_) === _),
          !0,
          _.current,
        )?.url,
    )),
    _.current
  );
}
function _(_) {
  let {
    view: _,
    refUpdateToolbar: _,
    rctToolbarControls: _,
    schema: _,
    sticky: _,
    ePreviewMode: _,
    setPreviewMode: _,
  } = _;
  return (0, _.jsxs)(_, {
    refUpdateToolbar: _,
    view: _,
    children: [
      (0, _.jsxs)(_, {
        className: _(_, _ && `H4YsD1qdULs-`),
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            schema: _,
          }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            schema: _,
          }),
          (0, _.jsx)(_, {
            schema: _,
            maxLevel: 2,
            levels: 1,
          }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            schema: _,
            showIndentButtonsAsNeeded: !0,
          }),
          `image` in _.nodes &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {
                  nodeType: _.nodes.image,
                }),
              ],
            }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            schema: _,
          }),
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {}),
          _,
        ],
      }),
      (0, _.jsx)(_, {
        ePreviewMode: _,
        setPreviewMode: _,
      }),
    ],
  });
}
function _(_) {
  let { ePreviewMode: _, setPreviewMode: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#StoreAdmin_GameDescription_PreviewMode`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, {
          [_]: _ === 1,
        }),
        onClick: () => _(1),
        children: _(`#StoreAdmin_GameDescription_PreviewMode_Deskop`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, {
          [_]: _ === 2,
        }),
        onClick: () => _(2),
        children: _(`#StoreAdmin_GameDescription_PreviewMode_Mobile`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, {
          [_]: _ === 3,
        }),
        onClick: () => _(3),
        children: _(`#StoreAdmin_GameDescription_PreviewMode_Gamepad`),
      }),
    ],
  });
}
function _(_) {
  let {
      schema: _,
      activeLanguage: _,
      mapValues: _,
      allowAnimations: _,
      updateDocument: _,
    } = _,
    _ = _.useMemo(
      () => [
        {
          type: _.pm_schema.nodes.image,
          component: _,
          readProps: (_) => ({
            src: _.attrs.src,
            inLink: _.marks.some((_) => _.type == _.pm_schema.marks.link),
            activeLanguage: _,
            mapValues: _,
            allowAnimations: _,
            fnUpdateDocument: _,
          }),
        },
      ],
      [_, _, _, _, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        specs: _,
      }),
      (0, _.jsx)(_, {
        nodeType: _.pm_schema.nodes.image,
      }),
    ],
  });
}
