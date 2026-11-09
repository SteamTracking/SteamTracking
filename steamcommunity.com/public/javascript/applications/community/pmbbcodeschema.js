/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import { E as t, Pt as n, ot as r } from "./libraries.js";
import { t as i } from "./throbber.js";
import { c as a, r as o, s } from "./filehandling.js";
import { i as c, n as l, r as u, t as d } from "./bbcodeparser.js";
import { R as f, U as p, W as m } from "./bbcodes.module.js";
import {
  $o as h,
  Ba as g,
  Bi as ee,
  Co as te,
  Cu as ne,
  Fa as re,
  Fh as ie,
  Ls as ae,
  Nh as oe,
  Od as se,
  Qo as ce,
  Rs as le,
  Ru as ue,
  Tf as de,
  To as fe,
  Tu as pe,
  Ui as me,
  Wo as he,
  Yh as ge,
  Yo as _e,
  Zd as _,
  _o as ve,
  co as ye,
  dm as be,
  do as xe,
  eo as Se,
  fo as Ce,
  ho as we,
  hs as Te,
  ih as Ee,
  io as De,
  is as Oe,
  jd as ke,
  kd as Ae,
  lo as je,
  md as Me,
  no as Ne,
  oo as Pe,
  po as Fe,
  rh as Ie,
  sd as Le,
  so as Re,
  to as ze,
  ts as Be,
  uo as Ve,
  vo as He,
  xo as Ue,
  xu as v,
  yo as We,
} from "./main.js";
function y(e) {
  this.content = e;
}
(y.prototype = {
  constructor: y,
  find: function (e) {
    for (var t = 0; t < this.content.length; t += 2)
      if (this.content[t] === e) return t;
    return -1;
  },
  get: function (e) {
    var t = this.find(e);
    return t == -1 ? void 0 : this.content[t + 1];
  },
  update: function (e, t, n) {
    var r = n && n != e ? this.remove(n) : this,
      i = r.find(e),
      a = r.content.slice();
    return (
      i == -1 ? a.push(n || e, t) : ((a[i + 1] = t), n && (a[i] = n)), new y(a)
    );
  },
  remove: function (e) {
    var t = this.find(e);
    if (t == -1) return this;
    var n = this.content.slice();
    return n.splice(t, 2), new y(n);
  },
  addToStart: function (e, t) {
    return new y([e, t].concat(this.remove(e).content));
  },
  addToEnd: function (e, t) {
    var n = this.remove(e).content.slice();
    return n.push(e, t), new y(n);
  },
  addBefore: function (e, t, n) {
    var r = this.remove(t),
      i = r.content.slice(),
      a = r.find(e);
    return i.splice(a == -1 ? i.length : a, 0, t, n), new y(i);
  },
  forEach: function (e) {
    for (var t = 0; t < this.content.length; t += 2)
      e(this.content[t], this.content[t + 1]);
  },
  prepend: function (e) {
    return (
      (e = y.from(e)),
      e.size ? new y(e.content.concat(this.subtract(e).content)) : this
    );
  },
  append: function (e) {
    return (
      (e = y.from(e)),
      e.size ? new y(this.subtract(e).content.concat(e.content)) : this
    );
  },
  subtract: function (e) {
    var t = this;
    e = y.from(e);
    for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
    return t;
  },
  toObject: function () {
    var e = {};
    return (
      this.forEach(function (t, n) {
        e[t] = n;
      }),
      e
    );
  },
  get size() {
    return this.content.length >> 1;
  },
}),
  (y.from = function (e) {
    if (e instanceof y) return e;
    var t = [];
    if (e) for (var n in e) t.push(n, e[n]);
    return new y(t);
  });
function Ge(e, t, n) {
  for (let r = 0; ; r++) {
    if (r == e.childCount || r == t.childCount)
      return e.childCount == t.childCount ? null : n;
    let i = e.child(r),
      a = t.child(r);
    if (i == a) n += i.nodeSize;
    else {
      if (!i.sameMarkup(a)) return n;
      if (i.isText && i.text != a.text) {
        let e = i.text,
          t = a.text,
          r = 0;
        for (; e[r] == t[r]; r++) n++;
        return (
          r &&
            r < e.length &&
            r < t.length &&
            Je(e.charCodeAt(r - 1)) &&
            qe(e.charCodeAt(r)) &&
            n--,
          n
        );
      }
      if (i.content.size || a.content.size) {
        let e = Ge(i.content, a.content, n + 1);
        if (e != null) return e;
      }
      n += i.nodeSize;
    }
  }
}
function Ke(e, t, n, r) {
  for (let i = e.childCount, a = t.childCount; ; ) {
    if (i == 0 || a == 0) return i == a ? null : { a: n, b: r };
    let o = e.child(--i),
      s = t.child(--a),
      c = o.nodeSize;
    if (o == s) (n -= c), (r -= c);
    else {
      if (!o.sameMarkup(s)) return { a: n, b: r };
      if (o.isText && o.text != s.text) {
        let e = o.text,
          t = s.text,
          i = e.length,
          a = t.length;
        for (; i > 0 && a > 0 && e[i - 1] == t[a - 1]; ) i--, a--, n--, r--;
        return (
          i &&
            a &&
            i < e.length &&
            Je(e.charCodeAt(i - 1)) &&
            qe(e.charCodeAt(i)) &&
            (n++, r++),
          { a: n, b: r }
        );
      }
      if (o.content.size || s.content.size) {
        let e = Ke(o.content, s.content, n - 1, r - 1);
        if (e) return e;
      }
      (n -= c), (r -= c);
    }
  }
}
function qe(e) {
  return e >= 56320 && e < 57344;
}
function Je(e) {
  return e >= 55296 && e < 56320;
}
var b = class e {
  constructor(e, t) {
    if (((this.content = e), (this.size = t || 0), t == null))
      for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
  }
  nodesBetween(e, t, n, r = 0, i) {
    for (let a = 0, o = 0; o < t; a++) {
      let s = this.content[a],
        c = o + s.nodeSize;
      if (c > e && n(s, r + o, i || null, a) !== !1 && s.content.size) {
        let i = o + 1;
        s.nodesBetween(
          Math.max(0, e - i),
          Math.min(s.content.size, t - i),
          n,
          r + i,
        );
      }
      o = c;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, n, r) {
    let i = ``,
      a = !0;
    return (
      this.nodesBetween(
        e,
        t,
        (o, s) => {
          let c = o.isText
            ? o.text.slice(Math.max(e, s) - s, t - s)
            : o.isLeaf
              ? r
                ? typeof r == `function`
                  ? r(o)
                  : r
                : o.type.spec.leafText
                  ? o.type.spec.leafText(o)
                  : ``
              : ``;
          o.isBlock &&
            ((o.isLeaf && c) || o.isTextblock) &&
            n &&
            (a ? (a = !1) : (i += n)),
            (i += c);
        },
        0,
      ),
      i
    );
  }
  append(t) {
    if (!t.size) return this;
    if (!this.size) return t;
    let n = this.lastChild,
      r = t.firstChild,
      i = this.content.slice(),
      a = 0;
    for (
      n.isText &&
      n.sameMarkup(r) &&
      ((i[i.length - 1] = n.withText(n.text + r.text)), (a = 1));
      a < t.content.length;
      a++
    )
      i.push(t.content[a]);
    return new e(i, this.size + t.size);
  }
  cut(t, n = this.size) {
    if (t == 0 && n == this.size) return this;
    let r = [],
      i = 0;
    if (n > t)
      for (let e = 0, a = 0; a < n; e++) {
        let o = this.content[e],
          s = a + o.nodeSize;
        s > t &&
          ((a < t || s > n) &&
            (o = o.isText
              ? o.cut(Math.max(0, t - a), Math.min(o.text.length, n - a))
              : o.cut(
                  Math.max(0, t - a - 1),
                  Math.min(o.content.size, n - a - 1),
                )),
          r.push(o),
          (i += o.nodeSize)),
          (a = s);
      }
    return new e(r, i);
  }
  cutByIndex(t, n) {
    return t == n
      ? e.empty
      : t == 0 && n == this.content.length
        ? this
        : new e(this.content.slice(t, n));
  }
  replaceChild(t, n) {
    let r = this.content[t];
    if (r == n) return this;
    let i = this.content.slice(),
      a = this.size + n.nodeSize - r.nodeSize;
    return (i[t] = n), new e(i, a);
  }
  addToStart(t) {
    return new e([t].concat(this.content), this.size + t.nodeSize);
  }
  addToEnd(t) {
    return new e(this.content.concat(t), this.size + t.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length) return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t])) return !1;
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
  child(e) {
    let t = this.content[e];
    if (!t) throw RangeError(`Index ` + e + ` out of range for ` + this);
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let r = this.content[t];
      e(r, n, t), (n += r.nodeSize);
    }
  }
  findDiffStart(e, t = 0) {
    return Ge(this, e, t);
  }
  findDiffEnd(e, t = this.size, n = e.size) {
    return Ke(this, e, t, n);
  }
  findIndex(e) {
    if (e == 0) return Xe(0, e);
    if (e == this.size) return Xe(this.content.length, e);
    if (e > this.size || e < 0)
      throw RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, n = 0; ; t++) {
      let r = this.child(t),
        i = n + r.nodeSize;
      if (i >= e) return i == e ? Xe(t + 1, i) : Xe(t, n);
      n = i;
    }
  }
  toString() {
    return `<` + this.toStringInner() + `>`;
  }
  toStringInner() {
    return this.content.join(`, `);
  }
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  static fromJSON(t, n) {
    if (!n) return e.empty;
    if (!Array.isArray(n))
      throw RangeError(`Invalid input for Fragment.fromJSON`);
    return e.fromArray(n.map(t.nodeFromJSON));
  }
  static fromArray(t) {
    if (!t.length) return e.empty;
    let n,
      r = 0;
    for (let e = 0; e < t.length; e++) {
      let i = t[e];
      (r += i.nodeSize),
        e && i.isText && t[e - 1].sameMarkup(i)
          ? ((n ||= t.slice(0, e)),
            (n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)))
          : n && n.push(i);
    }
    return new e(n || t, r);
  }
  static from(t) {
    if (!t) return e.empty;
    if (t instanceof e) return t;
    if (Array.isArray(t)) return this.fromArray(t);
    if (t.attrs) return new e([t], t.nodeSize);
    throw RangeError(
      `Can not convert ` +
        t +
        ` to a Fragment` +
        (t.nodesBetween
          ? ` (looks like multiple versions of prosemirror-model were loaded)`
          : ``),
    );
  }
};
b.empty = new b([], 0);
var Ye = { index: 0, offset: 0 };
function Xe(e, t) {
  return (Ye.index = e), (Ye.offset = t), Ye;
}
function Ze(e, t) {
  if (e === t) return !0;
  if (!(e && typeof e == `object`) || !(t && typeof t == `object`)) return !1;
  let n = Array.isArray(e);
  if (Array.isArray(t) != n) return !1;
  if (n) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Ze(e[n], t[n])) return !1;
  } else {
    for (let n in e) if (!(n in t) || !Ze(e[n], t[n])) return !1;
    for (let n in t) if (!(n in e)) return !1;
  }
  return !0;
}
var x = class e {
  constructor(e, t) {
    (this.type = e), (this.attrs = t);
  }
  addToSet(e) {
    let t,
      n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.eq(i)) return e;
      if (this.type.excludes(i.type)) t ||= e.slice(0, r);
      else if (i.type.excludes(this.type)) return e;
      else
        !n &&
          i.type.rank > this.type.rank &&
          ((t ||= e.slice(0, r)), t.push(this), (n = !0)),
          t && t.push(i);
    }
    return (t ||= e.slice()), n || t.push(this), t;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
    return !1;
  }
  eq(e) {
    return this == e || (this.type == e.type && Ze(this.attrs, e.attrs));
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) throw RangeError(`Invalid input for Mark.fromJSON`);
    let n = e.marks[t.type];
    if (!n) throw RangeError(`There is no mark type ${t.type} in this schema`);
    return n.create(t.attrs);
  }
  static sameSet(e, t) {
    if (e == t) return !0;
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
    return !0;
  }
  static setFrom(t) {
    if (!t || (Array.isArray(t) && t.length == 0)) return e.none;
    if (t instanceof e) return [t];
    let n = t.slice();
    return n.sort((e, t) => e.type.rank - t.type.rank), n;
  }
};
x.none = [];
var Qe = class extends Error {},
  S = class e {
    constructor(e, t, n) {
      (this.content = e), (this.openStart = t), (this.openEnd = n);
    }
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(t, n) {
      let r = et(
        this.content,
        t + this.openStart,
        n,
        this.openStart + 1,
        this.openEnd + 1,
      );
      return r && new e(r, this.openStart, this.openEnd);
    }
    removeBetween(t, n) {
      return new e(
        $e(this.content, t + this.openStart, n + this.openStart),
        this.openStart,
        this.openEnd,
      );
    }
    eq(e) {
      return (
        this.content.eq(e.content) &&
        this.openStart == e.openStart &&
        this.openEnd == e.openEnd
      );
    }
    toString() {
      return this.content + `(` + this.openStart + `,` + this.openEnd + `)`;
    }
    toJSON() {
      if (!this.content.size) return null;
      let e = { content: this.content.toJSON() };
      return (
        this.openStart > 0 && (e.openStart = this.openStart),
        this.openEnd > 0 && (e.openEnd = this.openEnd),
        e
      );
    }
    static fromJSON(t, n) {
      if (!n) return e.empty;
      let r = n.openStart || 0,
        i = n.openEnd || 0;
      if (typeof r != `number` || typeof i != `number`)
        throw RangeError(`Invalid input for Slice.fromJSON`);
      return new e(b.fromJSON(t, n.content), r, i);
    }
    static maxOpen(t, n = !0) {
      let r = 0,
        i = 0;
      for (
        let e = t.firstChild;
        e && !e.isLeaf && (n || !e.type.spec.isolating);
        e = e.firstChild
      )
        r++;
      for (
        let e = t.lastChild;
        e && !e.isLeaf && (n || !e.type.spec.isolating);
        e = e.lastChild
      )
        i++;
      return new e(t, r, i);
    }
  };
S.empty = new S(b.empty, 0, 0);
function $e(e, t, n) {
  let { index: r, offset: i } = e.findIndex(t),
    a = e.maybeChild(r),
    { index: o, offset: s } = e.findIndex(n);
  if (i == t || a.isText) {
    if (s != n && !e.child(o).isText)
      throw RangeError(`Removing non-flat range`);
    return e.cut(0, t).append(e.cut(n));
  }
  if (r != o) throw RangeError(`Removing non-flat range`);
  return e.replaceChild(r, a.copy($e(a.content, t - i - 1, n - i - 1)));
}
function et(e, t, n, r, i, a) {
  let { index: o, offset: s } = e.findIndex(t),
    c = e.maybeChild(o);
  if (s == t || c.isText)
    return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n)
      ? null
      : e.cut(0, t).append(n).append(e.cut(t));
  let l = et(
    c.content,
    t - s - 1,
    n,
    o == 0 ? r - 1 : 0,
    o == e.childCount - 1 ? i - 1 : 0,
    c,
  );
  return l && e.replaceChild(o, c.copy(l));
}
function tt(e, t, n) {
  if (n.openStart > e.depth)
    throw new Qe(`Inserted content deeper than insertion position`);
  if (e.depth - n.openStart != t.depth - n.openEnd)
    throw new Qe(`Inconsistent open depths`);
  return nt(e, t, n, 0);
}
function nt(e, t, n, r) {
  let i = e.index(r),
    a = e.node(r);
  if (i == t.index(r) && r < e.depth - n.openStart) {
    let o = nt(e, t, n, r + 1);
    return a.copy(a.content.replaceChild(i, o));
  }
  if (!n.content.size) return st(a, lt(e, t, r));
  if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
    let r = e.parent,
      i = r.content;
    return st(
      r,
      i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)),
    );
  }
  {
    let { start: i, end: o } = ut(n, e);
    return st(a, ct(e, i, o, t, r));
  }
}
function rt(e, t) {
  if (!t.type.compatibleContent(e.type))
    throw new Qe(`Cannot join ` + t.type.name + ` onto ` + e.type.name);
}
function it(e, t, n) {
  let r = e.node(n);
  return rt(r, t.node(n)), r;
}
function at(e, t) {
  let n = t.length - 1;
  n >= 0 && e.isText && e.sameMarkup(t[n])
    ? (t[n] = e.withText(t[n].text + e.text))
    : t.push(e);
}
function ot(e, t, n, r) {
  let i = (t || e).node(n),
    a = 0,
    o = t ? t.index(n) : i.childCount;
  e &&
    ((a = e.index(n)),
    e.depth > n ? a++ : e.textOffset && (at(e.nodeAfter, r), a++));
  for (let e = a; e < o; e++) at(i.child(e), r);
  t && t.depth == n && t.textOffset && at(t.nodeBefore, r);
}
function st(e, t) {
  if (!e.type.validContent(t))
    throw new Qe(`Invalid content for node ` + e.type.name);
  return e.copy(t);
}
function ct(e, t, n, r, i) {
  let a = e.depth > i && it(e, t, i + 1),
    o = r.depth > i && it(n, r, i + 1),
    s = [];
  return (
    ot(null, e, i, s),
    a && o && t.index(i) == n.index(i)
      ? (rt(a, o), at(st(a, ct(e, t, n, r, i + 1)), s))
      : (a && at(st(a, lt(e, t, i + 1)), s),
        ot(t, n, i, s),
        o && at(st(o, lt(n, r, i + 1)), s)),
    ot(r, null, i, s),
    new b(s)
  );
}
function lt(e, t, n) {
  let r = [];
  return (
    ot(null, e, n, r),
    e.depth > n && at(st(it(e, t, n + 1), lt(e, t, n + 1)), r),
    ot(t, null, n, r),
    new b(r)
  );
}
function ut(e, t) {
  let n = t.depth - e.openStart,
    r = t.node(n).copy(e.content);
  for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(b.from(r));
  return {
    start: r.resolveNoCache(e.openStart + n),
    end: r.resolveNoCache(r.content.size - e.openEnd - n),
  };
}
var dt = class e {
    constructor(e, t, n) {
      (this.pos = e),
        (this.path = t),
        (this.parentOffset = n),
        (this.depth = t.length / 3 - 1);
    }
    resolveDepth(e) {
      return e == null ? this.depth : e < 0 ? this.depth + e : e;
    }
    get parent() {
      return this.node(this.depth);
    }
    get doc() {
      return this.node(0);
    }
    node(e) {
      return this.path[this.resolveDepth(e) * 3];
    }
    index(e) {
      return this.path[this.resolveDepth(e) * 3 + 1];
    }
    indexAfter(e) {
      return (
        (e = this.resolveDepth(e)),
        this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
      );
    }
    start(e) {
      return (e = this.resolveDepth(e)), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
    }
    end(e) {
      return (
        (e = this.resolveDepth(e)), this.start(e) + this.node(e).content.size
      );
    }
    before(e) {
      if (((e = this.resolveDepth(e)), !e))
        throw RangeError(`There is no position before the top-level node`);
      return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
    }
    after(e) {
      if (((e = this.resolveDepth(e)), !e))
        throw RangeError(`There is no position after the top-level node`);
      return e == this.depth + 1
        ? this.pos
        : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
    }
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
      let e = this.parent,
        t = this.index(this.depth);
      if (t == e.childCount) return null;
      let n = this.pos - this.path[this.path.length - 1],
        r = e.child(t);
      return n ? e.child(t).cut(n) : r;
    }
    get nodeBefore() {
      let e = this.index(this.depth),
        t = this.pos - this.path[this.path.length - 1];
      return t
        ? this.parent.child(e).cut(0, t)
        : e == 0
          ? null
          : this.parent.child(e - 1);
    }
    posAtIndex(e, t) {
      t = this.resolveDepth(t);
      let n = this.path[t * 3],
        r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
      for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
      return r;
    }
    marks() {
      let e = this.parent,
        t = this.index();
      if (e.content.size == 0) return x.none;
      if (this.textOffset) return e.child(t).marks;
      let n = e.maybeChild(t - 1),
        r = e.maybeChild(t);
      if (!n) {
        let e = n;
        (n = r), (r = e);
      }
      let i = n.marks;
      for (var a = 0; a < i.length; a++)
        i[a].type.spec.inclusive !== !1 ||
          (r && i[a].isInSet(r.marks)) ||
          (i = i[a--].removeFromSet(i));
      return i;
    }
    marksAcross(e) {
      let t = this.parent.maybeChild(this.index());
      if (!t || !t.isInline) return null;
      let n = t.marks,
        r = e.parent.maybeChild(e.index());
      for (var i = 0; i < n.length; i++)
        n[i].type.spec.inclusive !== !1 ||
          (r && n[i].isInSet(r.marks)) ||
          (n = n[i--].removeFromSet(n));
      return n;
    }
    sharedDepth(e) {
      for (let t = this.depth; t > 0; t--)
        if (this.start(t) <= e && this.end(t) >= e) return t;
      return 0;
    }
    blockRange(e = this, t) {
      if (e.pos < this.pos) return e.blockRange(this);
      for (
        let n =
          this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
        n >= 0;
        n--
      )
        if (e.pos <= this.end(n) && (!t || t(this.node(n))))
          return new ht(this, e, n);
      return null;
    }
    sameParent(e) {
      return this.pos - this.parentOffset == e.pos - e.parentOffset;
    }
    max(e) {
      return e.pos > this.pos ? e : this;
    }
    min(e) {
      return e.pos < this.pos ? e : this;
    }
    toString() {
      let e = ``;
      for (let t = 1; t <= this.depth; t++)
        e += (e ? `/` : ``) + this.node(t).type.name + `_` + this.index(t - 1);
      return e + `:` + this.parentOffset;
    }
    static resolve(t, n) {
      if (!(n >= 0 && n <= t.content.size))
        throw RangeError(`Position ` + n + ` out of range`);
      let r = [],
        i = 0,
        a = n;
      for (let e = t; ; ) {
        let { index: t, offset: n } = e.content.findIndex(a),
          o = a - n;
        if ((r.push(e, t, i + n), !o || ((e = e.child(t)), e.isText))) break;
        (a = o - 1), (i += n + 1);
      }
      return new e(n, r, a);
    }
    static resolveCached(t, n) {
      let r = mt.get(t);
      if (r)
        for (let e = 0; e < r.elts.length; e++) {
          let t = r.elts[e];
          if (t.pos == n) return t;
        }
      else mt.set(t, (r = new ft()));
      let i = (r.elts[r.i] = e.resolve(t, n));
      return (r.i = (r.i + 1) % pt), i;
    }
  },
  ft = class {
    constructor() {
      (this.elts = []), (this.i = 0);
    }
  },
  pt = 12,
  mt = new WeakMap(),
  ht = class {
    constructor(e, t, n) {
      (this.$from = e), (this.$to = t), (this.depth = n);
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
  gt = Object.create(null),
  _t = class e {
    constructor(e, t, n, r = x.none) {
      (this.type = e),
        (this.attrs = t),
        (this.marks = r),
        (this.content = n || b.empty);
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
    child(e) {
      return this.content.child(e);
    }
    maybeChild(e) {
      return this.content.maybeChild(e);
    }
    forEach(e) {
      this.content.forEach(e);
    }
    nodesBetween(e, t, n, r = 0) {
      this.content.nodesBetween(e, t, n, r, this);
    }
    descendants(e) {
      this.nodesBetween(0, this.content.size, e);
    }
    get textContent() {
      return this.isLeaf && this.type.spec.leafText
        ? this.type.spec.leafText(this)
        : this.textBetween(0, this.content.size, ``);
    }
    textBetween(e, t, n, r) {
      return this.content.textBetween(e, t, n, r);
    }
    get firstChild() {
      return this.content.firstChild;
    }
    get lastChild() {
      return this.content.lastChild;
    }
    eq(e) {
      return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
    }
    sameMarkup(e) {
      return this.hasMarkup(e.type, e.attrs, e.marks);
    }
    hasMarkup(e, t, n) {
      return (
        this.type == e &&
        Ze(this.attrs, t || e.defaultAttrs || gt) &&
        x.sameSet(this.marks, n || x.none)
      );
    }
    copy(t = null) {
      return t == this.content
        ? this
        : new e(this.type, this.attrs, t, this.marks);
    }
    mark(t) {
      return t == this.marks
        ? this
        : new e(this.type, this.attrs, this.content, t);
    }
    cut(e, t = this.content.size) {
      return e == 0 && t == this.content.size
        ? this
        : this.copy(this.content.cut(e, t));
    }
    slice(e, t = this.content.size, n = !1) {
      if (e == t) return S.empty;
      let r = this.resolve(e),
        i = this.resolve(t),
        a = n ? 0 : r.sharedDepth(t),
        o = r.start(a);
      return new S(
        r.node(a).content.cut(r.pos - o, i.pos - o),
        r.depth - a,
        i.depth - a,
      );
    }
    replace(e, t, n) {
      return tt(this.resolve(e), this.resolve(t), n);
    }
    nodeAt(e) {
      for (let t = this; ; ) {
        let { index: n, offset: r } = t.content.findIndex(e);
        if (((t = t.maybeChild(n)), !t)) return null;
        if (r == e || t.isText) return t;
        e -= r + 1;
      }
    }
    childAfter(e) {
      let { index: t, offset: n } = this.content.findIndex(e);
      return { node: this.content.maybeChild(t), index: t, offset: n };
    }
    childBefore(e) {
      if (e == 0) return { node: null, index: 0, offset: 0 };
      let { index: t, offset: n } = this.content.findIndex(e);
      if (n < e) return { node: this.content.child(t), index: t, offset: n };
      let r = this.content.child(t - 1);
      return { node: r, index: t - 1, offset: n - r.nodeSize };
    }
    resolve(e) {
      return dt.resolveCached(this, e);
    }
    resolveNoCache(e) {
      return dt.resolve(this, e);
    }
    rangeHasMark(e, t, n) {
      let r = !1;
      return (
        t > e &&
          this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)),
        r
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
      let e = this.type.name;
      return (
        this.content.size && (e += `(` + this.content.toStringInner() + `)`),
        yt(this.marks, e)
      );
    }
    contentMatchAt(e) {
      let t = this.type.contentMatch.matchFragment(this.content, 0, e);
      if (!t)
        throw Error(`Called contentMatchAt on a node with invalid content`);
      return t;
    }
    canReplace(e, t, n = b.empty, r = 0, i = n.childCount) {
      let a = this.contentMatchAt(e).matchFragment(n, r, i),
        o = a && a.matchFragment(this.content, t);
      if (!o || !o.validEnd) return !1;
      for (let e = r; e < i; e++)
        if (!this.type.allowsMarks(n.child(e).marks)) return !1;
      return !0;
    }
    canReplaceWith(e, t, n, r) {
      if (r && !this.type.allowsMarks(r)) return !1;
      let i = this.contentMatchAt(e).matchType(n),
        a = i && i.matchFragment(this.content, t);
      return a ? a.validEnd : !1;
    }
    canAppend(e) {
      return e.content.size
        ? this.canReplace(this.childCount, this.childCount, e.content)
        : this.type.compatibleContent(e.type);
    }
    check() {
      this.type.checkContent(this.content),
        bt(this.type.attrs, this.attrs, `node`, this.type.name);
      let e = x.none;
      for (let t = 0; t < this.marks.length; t++) {
        let n = this.marks[t];
        bt(n.type.attrs, n.attrs, `mark`, n.type.name), (e = n.addToSet(e));
      }
      if (!x.sameSet(e, this.marks))
        throw RangeError(
          `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`,
        );
      this.content.forEach((e) => e.check());
    }
    toJSON() {
      let e = { type: this.type.name };
      for (let t in this.attrs) {
        e.attrs = this.attrs;
        break;
      }
      return (
        this.content.size && (e.content = this.content.toJSON()),
        this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())),
        e
      );
    }
    static fromJSON(e, t) {
      if (!t) throw RangeError(`Invalid input for Node.fromJSON`);
      let n;
      if (t.marks) {
        if (!Array.isArray(t.marks))
          throw RangeError(`Invalid mark data for Node.fromJSON`);
        n = t.marks.map(e.markFromJSON);
      }
      if (t.type == `text`) {
        if (typeof t.text != `string`)
          throw RangeError(`Invalid text node in JSON`);
        return e.text(t.text, n);
      }
      let r = b.fromJSON(e, t.content);
      return e.nodeType(t.type).create(t.attrs, r, n);
    }
  };
_t.prototype.text = void 0;
var vt = class e extends _t {
  constructor(e, t, n, r) {
    if ((super(e, t, null, r), !n))
      throw RangeError(`Empty text nodes are not allowed`);
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString
      ? this.type.spec.toDebugString(this)
      : yt(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(t) {
    return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
  }
  withText(t) {
    return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length
      ? this
      : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.text = this.text), e;
  }
};
function yt(e, t) {
  for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + `(` + t + `)`;
  return t;
}
function bt(e, t, n, r) {
  for (let i in t)
    if (!(i in e))
      throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
  for (let n in e) e[n].validate && e[n].validate(t[n]);
}
var xt = class e {
  constructor(e) {
    (this.validEnd = e), (this.next = []), (this.wrapCache = []);
  }
  static parse(t, n) {
    let r = new St(t, n);
    if (r.next == null) return e.empty;
    let i = Ct(r);
    r.next && r.err(`Unexpected trailing text`);
    let a = Nt(At(i));
    return Pt(a, r), a;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e) return this.next[t].next;
    return null;
  }
  matchFragment(e, t = 0, n = e.childCount) {
    let r = this;
    for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
    return r;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs())) return t;
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++)
        if (this.next[t].type == e.next[n].type) return !0;
    return !1;
  }
  fillBefore(e, t = !1, n = 0) {
    let r = [this];
    function i(a, o) {
      let s = a.matchFragment(e, n);
      if (s && (!t || s.validEnd))
        return b.from(o.map((e) => e.createAndFill()));
      for (let e = 0; e < a.next.length; e++) {
        let { type: t, next: n } = a.next[e];
        if (!(t.isText || t.hasRequiredAttrs()) && r.indexOf(n) == -1) {
          r.push(n);
          let e = i(n, o.concat(t));
          if (e) return e;
        }
      }
      return null;
    }
    return i(this, []);
  }
  findWrapping(e) {
    for (let t = 0; t < this.wrapCache.length; t += 2)
      if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  computeWrapping(e) {
    let t = Object.create(null),
      n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let r = n.shift(),
        i = r.match;
      if (i.matchType(e)) {
        let e = [];
        for (let t = r; t.type; t = t.via) e.push(t.type);
        return e.reverse();
      }
      for (let e = 0; e < i.next.length; e++) {
        let { type: a, next: o } = i.next[e];
        a.isLeaf ||
          a.hasRequiredAttrs() ||
          a.name in t ||
          (r.type && !o.validEnd) ||
          (n.push({ match: a.contentMatch, type: a, via: r }),
          (t[a.name] = !0));
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length)
      throw RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let r = 0; r < n.next.length; r++)
        e.indexOf(n.next[r].next) == -1 && t(n.next[r].next);
    }
    return (
      t(this),
      e
        .map((t, n) => {
          let r = n + (t.validEnd ? `*` : ` `) + ` `;
          for (let n = 0; n < t.next.length; n++)
            r +=
              (n ? `, ` : ``) +
              t.next[n].type.name +
              `->` +
              e.indexOf(t.next[n].next);
          return r;
        })
        .join(`
`)
    );
  }
};
xt.empty = new xt(!0);
var St = class {
  constructor(e, t) {
    (this.string = e),
      (this.nodeTypes = t),
      (this.inline = null),
      (this.pos = 0),
      (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
      this.tokens[this.tokens.length - 1] == `` && this.tokens.pop(),
      this.tokens[0] == `` && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw SyntaxError(e + ` (in content expression '` + this.string + `')`);
  }
};
function Ct(e) {
  let t = [];
  do t.push(wt(e));
  while (e.eat(`|`));
  return t.length == 1 ? t[0] : { type: `choice`, exprs: t };
}
function wt(e) {
  let t = [];
  do t.push(Tt(e));
  while (e.next && e.next != `)` && e.next != `|`);
  return t.length == 1 ? t[0] : { type: `seq`, exprs: t };
}
function Tt(e) {
  let t = kt(e);
  for (;;)
    if (e.eat(`+`)) t = { type: `plus`, expr: t };
    else if (e.eat(`*`)) t = { type: `star`, expr: t };
    else if (e.eat(`?`)) t = { type: `opt`, expr: t };
    else if (e.eat(`{`)) t = Dt(e, t);
    else break;
  return t;
}
function Et(e) {
  /\D/.test(e.next) && e.err(`Expected number, got '` + e.next + `'`);
  let t = Number(e.next);
  return e.pos++, t;
}
function Dt(e, t) {
  let n = Et(e),
    r = n;
  return (
    e.eat(`,`) && (r = e.next == `}` ? -1 : Et(e)),
    e.eat(`}`) || e.err(`Unclosed braced range`),
    { type: `range`, min: n, max: r, expr: t }
  );
}
function Ot(e, t) {
  let n = e.nodeTypes,
    r = n[t];
  if (r) return [r];
  let i = [];
  for (let e in n) {
    let r = n[e];
    r.isInGroup(t) && i.push(r);
  }
  return i.length == 0 && e.err(`No node type or group '` + t + `' found`), i;
}
function kt(e) {
  if (e.eat(`(`)) {
    let t = Ct(e);
    return e.eat(`)`) || e.err(`Missing closing paren`), t;
  }
  if (/\W/.test(e.next)) e.err(`Unexpected token '` + e.next + `'`);
  else {
    let t = Ot(e, e.next).map(
      (t) => (
        e.inline == null
          ? (e.inline = t.isInline)
          : e.inline != t.isInline && e.err(`Mixing inline and block content`),
        { type: `name`, value: t }
      ),
    );
    return e.pos++, t.length == 1 ? t[0] : { type: `choice`, exprs: t };
  }
}
function At(e) {
  let t = [[]];
  return i(a(e, 0), n()), t;
  function n() {
    return t.push([]) - 1;
  }
  function r(e, n, r) {
    let i = { term: r, to: n };
    return t[e].push(i), i;
  }
  function i(e, t) {
    e.forEach((e) => (e.to = t));
  }
  function a(e, t) {
    if (e.type == `choice`)
      return e.exprs.reduce((e, n) => e.concat(a(n, t)), []);
    if (e.type == `seq`)
      for (let r = 0; ; r++) {
        let o = a(e.exprs[r], t);
        if (r == e.exprs.length - 1) return o;
        i(o, (t = n()));
      }
    else if (e.type == `star`) {
      let o = n();
      return r(t, o), i(a(e.expr, o), o), [r(o)];
    } else if (e.type == `plus`) {
      let o = n();
      return i(a(e.expr, t), o), i(a(e.expr, o), o), [r(o)];
    } else if (e.type == `opt`) return [r(t)].concat(a(e.expr, t));
    else if (e.type == `range`) {
      let o = t;
      for (let t = 0; t < e.min; t++) {
        let t = n();
        i(a(e.expr, o), t), (o = t);
      }
      if (e.max == -1) i(a(e.expr, o), o);
      else
        for (let t = e.min; t < e.max; t++) {
          let t = n();
          r(o, t), i(a(e.expr, o), t), (o = t);
        }
      return [r(o)];
    } else if (e.type == `name`) return [r(t, void 0, e.value)];
    else throw Error(`Unknown expr type`);
  }
}
function jt(e, t) {
  return t - e;
}
function Mt(e, t) {
  let n = [];
  return r(t), n.sort(jt);
  function r(t) {
    let i = e[t];
    if (i.length == 1 && !i[0].term) return r(i[0].to);
    n.push(t);
    for (let e = 0; e < i.length; e++) {
      let { term: t, to: a } = i[e];
      !t && n.indexOf(a) == -1 && r(a);
    }
  }
}
function Nt(e) {
  let t = Object.create(null);
  return n(Mt(e, 0));
  function n(r) {
    let i = [];
    r.forEach((t) => {
      e[t].forEach(({ term: t, to: n }) => {
        if (!t) return;
        let r;
        for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
        Mt(e, n).forEach((e) => {
          r || i.push([t, (r = [])]), r.indexOf(e) == -1 && r.push(e);
        });
      });
    });
    let a = (t[r.join(`,`)] = new xt(r.indexOf(e.length - 1) > -1));
    for (let e = 0; e < i.length; e++) {
      let r = i[e][1].sort(jt);
      a.next.push({ type: i[e][0], next: t[r.join(`,`)] || n(r) });
    }
    return a;
  }
}
function Pt(e, t) {
  for (let n = 0, r = [e]; n < r.length; n++) {
    let e = r[n],
      i = !e.validEnd,
      a = [];
    for (let t = 0; t < e.next.length; t++) {
      let { type: n, next: o } = e.next[t];
      a.push(n.name),
        i && !(n.isText || n.hasRequiredAttrs()) && (i = !1),
        r.indexOf(o) == -1 && r.push(o);
    }
    i &&
      t.err(
        `Only non-generatable nodes (` +
          a.join(`, `) +
          `) in a required position (see https://prosemirror.net/docs/guide/#generatable)`,
      );
  }
}
function Ft(e) {
  let t = Object.create(null);
  for (let n in e) {
    let r = e[n];
    if (!r.hasDefault) return null;
    t[n] = r.default;
  }
  return t;
}
function It(e, t) {
  let n = Object.create(null);
  for (let r in e) {
    let i = e[r],
      a = t && t[r];
    if (a === void 0) {
      if (i.hasDefault) a = i.default;
      else throw RangeError(`No value supplied for attribute ` + r);
    } else i.validate && i.validate(a);
    n[r] = a;
  }
  return n;
}
function Lt(e, t) {
  let n = Object.create(null);
  if (t) for (let r in t) n[r] = new Bt(e, r, t[r]);
  return n;
}
var Rt = class e {
  constructor(e, t, n) {
    (this.name = e),
      (this.schema = t),
      (this.spec = n),
      (this.markSet = null),
      (this.groups = n.group ? n.group.split(` `) : []),
      (this.attrs = Lt(e, n.attrs)),
      (this.defaultAttrs = Ft(this.attrs)),
      (this.contentMatch = null),
      (this.inlineContent = null),
      (this.isBlock = !(n.inline || e == `text`)),
      (this.isText = e == `text`);
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == xt.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? `pre` : `normal`);
  }
  hasRequiredAttrs() {
    for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
    return !1;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : It(this.attrs, e);
  }
  create(e = null, t, n) {
    if (this.isText) throw Error(`NodeType.create can't construct text nodes`);
    return new _t(this, this.computeAttrs(e), b.from(t), x.setFrom(n));
  }
  createChecked(e = null, t, n) {
    return (
      (t = b.from(t)),
      this.checkContent(t),
      new _t(this, this.computeAttrs(e), t, x.setFrom(n))
    );
  }
  createAndFill(e = null, t, n) {
    if (((e = this.computeAttrs(e)), (t = b.from(t)), t.size)) {
      let e = this.contentMatch.fillBefore(t);
      if (!e) return null;
      t = e.append(t);
    }
    let r = this.contentMatch.matchFragment(t),
      i = r && r.fillBefore(b.empty, !0);
    return i ? new _t(this, e, t.append(i), x.setFrom(n)) : null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd) return !1;
    for (let t = 0; t < e.childCount; t++)
      if (!this.allowsMarks(e.child(t).marks)) return !1;
    return !0;
  }
  checkContent(e) {
    if (!this.validContent(e))
      throw RangeError(
        `Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`,
      );
  }
  checkAttrs(e) {}
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null) return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type)) return !1;
    return !0;
  }
  allowedMarks(e) {
    if (this.markSet == null) return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type)
        ? t && t.push(e[n])
        : (t ||= e.slice(0, n));
    return t ? (t.length ? t : x.none) : e;
  }
  static compile(t, n) {
    let r = Object.create(null);
    t.forEach((t, i) => (r[t] = new e(t, n, i)));
    let i = n.spec.topNode || `doc`;
    if (!r[i])
      throw RangeError(`Schema is missing its top node type ('` + i + `')`);
    if (!r.text) throw RangeError(`Every schema needs a 'text' type`);
    for (let e in r.text.attrs)
      throw RangeError(`The text node type should not have attributes`);
    return r;
  }
};
function zt(e, t, n) {
  let r = n.split(`|`);
  return (n) => {
    let i = n === null ? `null` : typeof n;
    if (r.indexOf(i) < 0)
      throw RangeError(
        `Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`,
      );
  };
}
var Bt = class {
    constructor(e, t, n) {
      (this.hasDefault = Object.prototype.hasOwnProperty.call(n, `default`)),
        (this.default = n.default),
        (this.validate =
          typeof n.validate == `string` ? zt(e, t, n.validate) : n.validate);
    }
    get isRequired() {
      return !this.hasDefault;
    }
  },
  Vt = class e {
    constructor(e, t, n, r) {
      (this.name = e),
        (this.rank = t),
        (this.schema = n),
        (this.spec = r),
        (this.attrs = Lt(e, r.attrs)),
        (this.excluded = null);
      let i = Ft(this.attrs);
      this.instance = i ? new x(this, i) : null;
    }
    create(e = null) {
      return !e && this.instance
        ? this.instance
        : new x(this, It(this.attrs, e));
    }
    static compile(t, n) {
      let r = Object.create(null),
        i = 0;
      return t.forEach((t, a) => (r[t] = new e(t, i++, n, a))), r;
    }
    removeFromSet(e) {
      for (var t = 0; t < e.length; t++)
        e[t].type == this && ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
      return e;
    }
    isInSet(e) {
      for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
    }
    excludes(e) {
      return this.excluded.indexOf(e) > -1;
    }
  },
  Ht = class {
    constructor(e) {
      (this.linebreakReplacement = null), (this.cached = Object.create(null));
      let t = (this.spec = {});
      for (let n in e) t[n] = e[n];
      (t.nodes = y.from(e.nodes)),
        (t.marks = y.from(e.marks || {})),
        (this.nodes = Rt.compile(this.spec.nodes, this)),
        (this.marks = Vt.compile(this.spec.marks, this));
      let n = Object.create(null);
      for (let e in this.nodes) {
        if (e in this.marks)
          throw RangeError(e + ` can not be both a node and a mark`);
        let t = this.nodes[e],
          r = t.spec.content || ``,
          i = t.spec.marks;
        if (
          ((t.contentMatch = n[r] || (n[r] = xt.parse(r, this.nodes))),
          (t.inlineContent = t.contentMatch.inlineContent),
          t.spec.linebreakReplacement)
        ) {
          if (this.linebreakReplacement)
            throw RangeError(`Multiple linebreak nodes defined`);
          if (!t.isInline || !t.isLeaf)
            throw RangeError(
              `Linebreak replacement nodes must be inline leaf nodes`,
            );
          this.linebreakReplacement = t;
        }
        t.markSet =
          i == `_`
            ? null
            : i
              ? Ut(this, i.split(` `))
              : i == `` || !t.inlineContent
                ? []
                : null;
      }
      for (let e in this.marks) {
        let t = this.marks[e],
          n = t.spec.excludes;
        t.excluded = n == null ? [t] : n == `` ? [] : Ut(this, n.split(` `));
      }
      (this.nodeFromJSON = (e) => _t.fromJSON(this, e)),
        (this.markFromJSON = (e) => x.fromJSON(this, e)),
        (this.topNodeType = this.nodes[this.spec.topNode || `doc`]),
        (this.cached.wrappings = Object.create(null));
    }
    node(e, t = null, n, r) {
      if (typeof e == `string`) e = this.nodeType(e);
      else if (!(e instanceof Rt)) throw RangeError(`Invalid node type: ` + e);
      else if (e.schema != this)
        throw RangeError(
          `Node type from different schema used (` + e.name + `)`,
        );
      return e.createChecked(t, n, r);
    }
    text(e, t) {
      let n = this.nodes.text;
      return new vt(n, n.defaultAttrs, e, x.setFrom(t));
    }
    mark(e, t) {
      return typeof e == `string` && (e = this.marks[e]), e.create(t);
    }
    nodeType(e) {
      let t = this.nodes[e];
      if (!t) throw RangeError(`Unknown node type: ` + e);
      return t;
    }
  };
function Ut(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r],
      a = e.marks[i],
      o = a;
    if (a) n.push(a);
    else
      for (let t in e.marks) {
        let r = e.marks[t];
        (i == `_` ||
          (r.spec.group && r.spec.group.split(` `).indexOf(i) > -1)) &&
          n.push((o = r));
      }
    if (!o) throw SyntaxError(`Unknown mark type: '` + t[r] + `'`);
  }
  return n;
}
function Wt(e) {
  return e.tag != null;
}
function Gt(e) {
  return e.style != null;
}
var Kt = class e {
    constructor(e, t) {
      (this.schema = e), (this.rules = t), (this.tags = []), (this.styles = []);
      let n = (this.matchedStyles = []);
      t.forEach((e) => {
        if (Wt(e)) this.tags.push(e);
        else if (Gt(e)) {
          let t = /[^=]*/.exec(e.style)[0];
          n.indexOf(t) < 0 && n.push(t), this.styles.push(e);
        }
      }),
        (this.normalizeLists = !this.tags.some((t) => {
          if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
          let n = e.nodes[t.node];
          return n.contentMatch.matchType(n);
        }));
    }
    parse(e, t = {}) {
      let n = new tn(this, t, !1);
      return n.addAll(e, x.none, t.from, t.to), n.finish();
    }
    parseSlice(e, t = {}) {
      let n = new tn(this, t, !0);
      return n.addAll(e, x.none, t.from, t.to), S.maxOpen(n.finish());
    }
    matchTag(e, t, n) {
      for (
        let r = n ? this.tags.indexOf(n) + 1 : 0;
        r < this.tags.length;
        r++
      ) {
        let n = this.tags[r];
        if (
          rn(e, n.tag) &&
          (n.namespace === void 0 || e.namespaceURI == n.namespace) &&
          (!n.context || t.matchesContext(n.context))
        ) {
          if (n.getAttrs) {
            let t = n.getAttrs(e);
            if (t === !1) continue;
            n.attrs = t || void 0;
          }
          return n;
        }
      }
    }
    matchStyle(e, t, n, r) {
      for (
        let i = r ? this.styles.indexOf(r) + 1 : 0;
        i < this.styles.length;
        i++
      ) {
        let r = this.styles[i],
          a = r.style;
        if (
          !(
            a.indexOf(e) != 0 ||
            (r.context && !n.matchesContext(r.context)) ||
            (a.length > e.length &&
              (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))
          )
        ) {
          if (r.getAttrs) {
            let e = r.getAttrs(t);
            if (e === !1) continue;
            r.attrs = e || void 0;
          }
          return r;
        }
      }
    }
    static schemaRules(e) {
      let t = [];
      function n(e) {
        let n = e.priority == null ? 50 : e.priority,
          r = 0;
        for (; r < t.length; r++) {
          let e = t[r];
          if ((e.priority == null ? 50 : e.priority) < n) break;
        }
        t.splice(r, 0, e);
      }
      for (let t in e.marks) {
        let r = e.marks[t].spec.parseDOM;
        r &&
          r.forEach((e) => {
            n((e = an(e))), e.mark || e.ignore || e.clearMark || (e.mark = t);
          });
      }
      for (let t in e.nodes) {
        let r = e.nodes[t].spec.parseDOM;
        r &&
          r.forEach((e) => {
            n((e = an(e))), e.node || e.ignore || e.mark || (e.node = t);
          });
      }
      return t;
    }
    static fromSchema(t) {
      return (
        t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)))
      );
    }
  },
  qt = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    body: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0,
  },
  Jt = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
  Yt = { ol: !0, ul: !0 },
  Xt = 1,
  Zt = 2,
  Qt = 4;
function $t(e, t, n) {
  return t == null
    ? e && e.whitespace == `pre`
      ? 3
      : n & -5
    : (t ? Xt : 0) | (t === `full` ? Zt : 0);
}
var en = class {
    constructor(e, t, n, r, i, a) {
      (this.type = e),
        (this.attrs = t),
        (this.marks = n),
        (this.solid = r),
        (this.options = a),
        (this.content = []),
        (this.activeMarks = x.none),
        (this.match = i || (a & Qt ? null : e.contentMatch));
    }
    findWrapping(e) {
      if (!this.match) {
        if (!this.type) return [];
        let t = this.type.contentMatch.fillBefore(b.from(e));
        if (t) this.match = this.type.contentMatch.matchFragment(t);
        else {
          let t = this.type.contentMatch,
            n;
          return (n = t.findWrapping(e.type)) ? ((this.match = t), n) : null;
        }
      }
      return this.match.findWrapping(e.type);
    }
    finish(e) {
      if (!(this.options & Xt)) {
        let e = this.content[this.content.length - 1],
          t;
        if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
          let n = e;
          e.text.length == t[0].length
            ? this.content.pop()
            : (this.content[this.content.length - 1] = n.withText(
                n.text.slice(0, n.text.length - t[0].length),
              ));
        }
      }
      let t = b.from(this.content);
      return (
        !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))),
        this.type ? this.type.create(this.attrs, t, this.marks) : t
      );
    }
    inlineContext(e) {
      return this.type
        ? this.type.inlineContent
        : this.content.length
          ? this.content[0].isInline
          : e.parentNode &&
            !qt.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
    }
  },
  tn = class {
    constructor(e, t, n) {
      (this.parser = e),
        (this.options = t),
        (this.isOpen = n),
        (this.open = 0),
        (this.localPreserveWS = !1);
      let r = t.topNode,
        i,
        a = $t(null, t.preserveWhitespace, 0) | (n ? Qt : 0);
      (i = r
        ? new en(
            r.type,
            r.attrs,
            x.none,
            !0,
            t.topMatch || r.type.contentMatch,
            a,
          )
        : n
          ? new en(null, null, x.none, !0, null, a)
          : new en(e.schema.topNodeType, null, x.none, !0, null, a)),
        (this.nodes = [i]),
        (this.find = t.findPositions),
        (this.needsBlock = !1);
    }
    get top() {
      return this.nodes[this.open];
    }
    addDOM(e, t) {
      e.nodeType == 3
        ? this.addTextNode(e, t)
        : e.nodeType == 1 && this.addElement(e, t);
    }
    addTextNode(e, t) {
      let n = e.nodeValue,
        r = this.top,
        i =
          r.options & Zt
            ? `full`
            : this.localPreserveWS || (r.options & Xt) > 0,
        { schema: a } = this.parser;
      if (i === `full` || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
        if (!i) {
          if (
            ((n = n.replace(/[ \t\r\n\u000c]+/g, ` `)),
            /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1)
          ) {
            let t = r.content[r.content.length - 1],
              i = e.previousSibling;
            (!t ||
              (i && i.nodeName == `BR`) ||
              (t.isText && /[ \t\r\n\u000c]$/.test(t.text))) &&
              (n = n.slice(1));
          }
        } else if (i === `full`)
          n = n.replace(
            /\r\n?/g,
            `
`,
          );
        else if (
          a.linebreakReplacement &&
          /[\r\n]/.test(n) &&
          this.top.findWrapping(a.linebreakReplacement.create())
        ) {
          let e = n.split(/\r?\n|\r/);
          for (let n = 0; n < e.length; n++)
            n && this.insertNode(a.linebreakReplacement.create(), t, !0),
              e[n] && this.insertNode(a.text(e[n]), t, !/\S/.test(e[n]));
          n = ``;
        } else n = n.replace(/\r?\n|\r/g, ` `);
        n && this.insertNode(a.text(n), t, !/\S/.test(n)), this.findInText(e);
      } else this.findInside(e);
    }
    addElement(e, t, n) {
      let r = this.localPreserveWS,
        i = this.top;
      (e.tagName == `PRE` || /pre/.test(e.style && e.style.whiteSpace)) &&
        (this.localPreserveWS = !0);
      let a = e.nodeName.toLowerCase(),
        o;
      Yt.hasOwnProperty(a) && this.parser.normalizeLists && nn(e);
      let s =
        (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
        (o = this.parser.matchTag(e, this, n));
      out: if (s ? s.ignore : Jt.hasOwnProperty(a))
        this.findInside(e), this.ignoreFallback(e, t);
      else if (!s || s.skip || s.closeParent) {
        s && s.closeParent
          ? (this.open = Math.max(0, this.open - 1))
          : s && s.skip.nodeType && (e = s.skip);
        let n,
          r = this.needsBlock;
        if (qt.hasOwnProperty(a))
          i.content.length &&
            i.content[0].isInline &&
            this.open &&
            (this.open--, (i = this.top)),
            (n = !0),
            i.type || (this.needsBlock = !0);
        else if (!e.firstChild) {
          this.leafFallback(e, t);
          break out;
        }
        let o = s && s.skip ? t : this.readStyles(e, t);
        o && this.addAll(e, o), n && this.sync(i), (this.needsBlock = r);
      } else {
        let n = this.readStyles(e, t);
        n && this.addElementByRule(e, s, n, s.consuming === !1 ? o : void 0);
      }
      this.localPreserveWS = r;
    }
    leafFallback(e, t) {
      e.nodeName == `BR` &&
        this.top.type &&
        this.top.type.inlineContent &&
        this.addTextNode(
          e.ownerDocument.createTextNode(`
`),
          t,
        );
    }
    ignoreFallback(e, t) {
      e.nodeName != `BR` ||
        (this.top.type && this.top.type.inlineContent) ||
        this.findPlace(this.parser.schema.text(`-`), t, !0);
    }
    readStyles(e, t) {
      let n = e.style;
      if (n && n.length)
        for (let e = 0; e < this.parser.matchedStyles.length; e++) {
          let r = this.parser.matchedStyles[e],
            i = n.getPropertyValue(r);
          if (i)
            for (let e; ; ) {
              let n = this.parser.matchStyle(r, i, this, e);
              if (!n) break;
              if (n.ignore) return null;
              if (
                ((t = n.clearMark
                  ? t.filter((e) => !n.clearMark(e))
                  : t.concat(this.parser.schema.marks[n.mark].create(n.attrs))),
                n.consuming === !1)
              )
                e = n;
              else break;
            }
        }
      return t;
    }
    addElementByRule(e, t, n, r) {
      let i, a;
      if (t.node) {
        if (((a = this.parser.schema.nodes[t.node]), a.isLeaf))
          this.insertNode(a.create(t.attrs), n, e.nodeName == `BR`) ||
            this.leafFallback(e, n);
        else {
          let e = this.enter(a, t.attrs || null, n, t.preserveWhitespace);
          e && ((i = !0), (n = e));
        }
      } else {
        let e = this.parser.schema.marks[t.mark];
        n = n.concat(e.create(t.attrs));
      }
      let o = this.top;
      if (a && a.isLeaf) this.findInside(e);
      else if (r) this.addElement(e, n, r);
      else if (t.getContent)
        this.findInside(e),
          t
            .getContent(e, this.parser.schema)
            .forEach((e) => this.insertNode(e, n, !1));
      else {
        let r = e;
        typeof t.contentElement == `string`
          ? (r = e.querySelector(t.contentElement))
          : typeof t.contentElement == `function`
            ? (r = t.contentElement(e))
            : t.contentElement && (r = t.contentElement),
          this.findAround(e, r, !0),
          this.addAll(r, n),
          this.findAround(e, r, !1);
      }
      i && this.sync(o) && this.open--;
    }
    addAll(e, t, n, r) {
      let i = n || 0;
      for (
        let a = n ? e.childNodes[n] : e.firstChild,
          o = r == null ? null : e.childNodes[r];
        a != o;
        a = a.nextSibling, ++i
      )
        this.findAtPoint(e, i), this.addDOM(a, t);
      this.findAtPoint(e, i);
    }
    findPlace(e, t, n) {
      let r, i;
      for (let t = this.open, a = 0; t >= 0; t--) {
        let o = this.nodes[t],
          s = o.findWrapping(e);
        if (
          s &&
          (!r || r.length > s.length + a) &&
          ((r = s), (i = o), !s.length)
        )
          break;
        if (o.solid) {
          if (n) break;
          a += 2;
        }
      }
      if (!r) return null;
      this.sync(i);
      for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
      return t;
    }
    insertNode(e, t, n) {
      if (e.isInline && this.needsBlock && !this.top.type) {
        let e = this.textblockFromContext();
        e && (t = this.enterInner(e, null, t));
      }
      let r = this.findPlace(e, t, n);
      if (r) {
        this.closeExtra();
        let t = this.top;
        t.match &&= t.match.matchType(e.type);
        let n = x.none;
        for (let i of r.concat(e.marks))
          (t.type ? t.type.allowsMarkType(i.type) : on(i.type, e.type)) &&
            (n = i.addToSet(n));
        return t.content.push(e.mark(n)), !0;
      }
      return !1;
    }
    enter(e, t, n, r) {
      let i = this.findPlace(e.create(t), n, !1);
      return (i &&= this.enterInner(e, t, n, !0, r)), i;
    }
    enterInner(e, t, n, r = !1, i) {
      this.closeExtra();
      let a = this.top;
      a.match = a.match && a.match.matchType(e);
      let o = $t(e, i, a.options);
      a.options & Qt && a.content.length == 0 && (o |= Qt);
      let s = x.none;
      return (
        (n = n.filter(
          (t) =>
            !(a.type ? a.type.allowsMarkType(t.type) : on(t.type, e)) ||
            ((s = t.addToSet(s)), !1),
        )),
        this.nodes.push(new en(e, t, s, r, null, o)),
        this.open++,
        n
      );
    }
    closeExtra(e = !1) {
      let t = this.nodes.length - 1;
      if (t > this.open) {
        for (; t > this.open; t--)
          this.nodes[t - 1].content.push(this.nodes[t].finish(e));
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
    sync(e) {
      for (let t = this.open; t >= 0; t--)
        if (this.nodes[t] == e) return (this.open = t), !0;
        else this.localPreserveWS && (this.nodes[t].options |= Xt);
      return !1;
    }
    get currentPos() {
      this.closeExtra();
      let e = 0;
      for (let t = this.open; t >= 0; t--) {
        let n = this.nodes[t].content;
        for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
        t && e++;
      }
      return e;
    }
    findAtPoint(e, t) {
      if (this.find)
        for (let n = 0; n < this.find.length; n++)
          this.find[n].node == e &&
            this.find[n].offset == t &&
            (this.find[n].pos = this.currentPos);
    }
    findInside(e) {
      if (this.find)
        for (let t = 0; t < this.find.length; t++)
          this.find[t].pos == null &&
            e.nodeType == 1 &&
            e.contains(this.find[t].node) &&
            (this.find[t].pos = this.currentPos);
    }
    findAround(e, t, n) {
      if (e != t && this.find)
        for (let r = 0; r < this.find.length; r++)
          this.find[r].pos == null &&
            e.nodeType == 1 &&
            e.contains(this.find[r].node) &&
            t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
            (this.find[r].pos = this.currentPos);
    }
    findInText(e) {
      if (this.find)
        for (let t = 0; t < this.find.length; t++)
          this.find[t].node == e &&
            (this.find[t].pos =
              this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
    matchesContext(e) {
      if (e.indexOf(`|`) > -1)
        return e.split(/\s*\|\s*/).some(this.matchesContext, this);
      let t = e.split(`/`),
        n = this.options.context,
        r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
        i = -(n ? n.depth + 1 : 0) + +!r,
        a = (e, o) => {
          for (; e >= 0; e--) {
            let s = t[e];
            if (s == ``) {
              if (e == t.length - 1 || e == 0) continue;
              for (; o >= i; o--) if (a(e - 1, o)) return !0;
              return !1;
            }
            {
              let e =
                o > 0 || (o == 0 && r)
                  ? this.nodes[o].type
                  : n && o >= i
                    ? n.node(o - i).type
                    : null;
              if (!e || (e.name != s && !e.isInGroup(s))) return !1;
              o--;
            }
          }
          return !0;
        };
      return a(t.length - 1, this.open);
    }
    textblockFromContext() {
      let e = this.options.context;
      if (e)
        for (let t = e.depth; t >= 0; t--) {
          let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
          if (n && n.isTextblock && n.defaultAttrs) return n;
        }
      for (let e in this.parser.schema.nodes) {
        let t = this.parser.schema.nodes[e];
        if (t.isTextblock && t.defaultAttrs) return t;
      }
    }
  };
function nn(e) {
  for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
    let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
    e && Yt.hasOwnProperty(e) && n
      ? (n.appendChild(t), (t = n))
      : e == `li`
        ? (n = t)
        : e && (n = null);
  }
}
function rn(e, t) {
  return (
    e.matches ||
    e.msMatchesSelector ||
    e.webkitMatchesSelector ||
    e.mozMatchesSelector
  ).call(e, t);
}
function an(e) {
  let t = {};
  for (let n in e) t[n] = e[n];
  return t;
}
function on(e, t) {
  let n = t.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(e)) continue;
    let a = [],
      o = (e) => {
        a.push(e);
        for (let n = 0; n < e.edgeCount; n++) {
          let { type: r, next: i } = e.edge(n);
          if (r == t || (a.indexOf(i) < 0 && o(i))) return !0;
        }
      };
    if (o(i.contentMatch)) return !0;
  }
}
var sn = class e {
  constructor(e, t) {
    (this.nodes = e), (this.marks = t);
  }
  serializeFragment(e, t = {}, n) {
    n ||= ln(t).createDocumentFragment();
    let r = n,
      i = [];
    return (
      e.forEach((e) => {
        if (i.length || e.marks.length) {
          let n = 0,
            a = 0;
          for (; n < i.length && a < e.marks.length; ) {
            let t = e.marks[a];
            if (!this.marks[t.type.name]) a++;
            else {
              if (!t.eq(i[n][0]) || t.type.spec.spanning === !1) break;
              n++, a++;
            }
          }
          for (; n < i.length; ) r = i.pop()[1];
          for (; a < e.marks.length; ) {
            let n = e.marks[a++],
              o = this.serializeMark(n, e.isInline, t);
            o &&
              (i.push([n, r]),
              r.appendChild(o.dom),
              (r = o.contentDOM || o.dom));
          }
        }
        r.appendChild(this.serializeNodeInner(e, t));
      }),
      n
    );
  }
  serializeNodeInner(e, t) {
    if (e.isText) return ln(t).createTextNode(e.text);
    let { dom: n, contentDOM: r } = pn(
      ln(t),
      this.nodes[e.type.name](e),
      null,
      e.attrs,
    );
    if (r) {
      if (e.isLeaf)
        throw RangeError(`Content hole not allowed in a leaf node spec`);
      this.serializeFragment(e.content, t, r);
    }
    return n;
  }
  serializeNode(e, t = {}) {
    let n = this.serializeNodeInner(e, t);
    for (let r = e.marks.length - 1; r >= 0; r--) {
      let i = this.serializeMark(e.marks[r], e.isInline, t);
      i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
    }
    return n;
  }
  serializeMark(e, t, n = {}) {
    let r = this.marks[e.type.name];
    return r && pn(ln(n), r(e, t), null, e.attrs);
  }
  static renderSpec(e, t, n = null, r) {
    return typeof t == `string` ? { dom: e.createTextNode(t) } : pn(e, t, n, r);
  }
  static fromSchema(t) {
    return (
      t.cached.domSerializer ||
      (t.cached.domSerializer = new e(
        this.nodesFromSchema(t),
        this.marksFromSchema(t),
      ))
    );
  }
  static nodesFromSchema(e) {
    let t = cn(e.nodes);
    return (t.text ||= (e) => e.text), t;
  }
  static marksFromSchema(e) {
    return cn(e.marks);
  }
};
function cn(e) {
  let t = {};
  for (let n in e) {
    let r = e[n].spec.toDOM;
    r && (t[n] = r);
  }
  return t;
}
function ln(e) {
  return e.document || window.document;
}
var un = new WeakMap();
function dn(e) {
  let t = un.get(e);
  return t === void 0 && un.set(e, (t = fn(e))), t;
}
function fn(e) {
  let t = null;
  function n(e) {
    if (e && typeof e == `object`) {
      if (Array.isArray(e)) {
        if (typeof e[0] == `string`) (t ||= []), t.push(e);
        else for (let t = 0; t < e.length; t++) n(e[t]);
      } else for (let t in e) n(e[t]);
    }
  }
  return n(e), t;
}
function pn(e, t, n, r) {
  if (t.nodeType == 1) return { dom: t };
  if (t.dom && t.dom.nodeType == 1) return t;
  let i = t[0],
    a;
  if (typeof i != `string`)
    throw RangeError(`Invalid array passed to renderSpec`);
  if (r && (a = dn(r)) && a.indexOf(t) > -1)
    throw RangeError(
      `Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`,
    );
  let o = i.indexOf(` `);
  o > 0 && ((n = i.slice(0, o)), (i = i.slice(o + 1)));
  let s,
    c = n ? e.createElementNS(n, i) : e.createElement(i),
    l = t[1],
    u = 1;
  if (l && typeof l == `object` && l.nodeType == null && !Array.isArray(l)) {
    u = 2;
    for (let e in l)
      if (l[e] != null) {
        let t = e.indexOf(` `);
        t > 0
          ? c.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e])
          : e == `style` && c.style
            ? (c.style.cssText = l[e])
            : c.setAttribute(e, l[e]);
      }
  }
  for (let i = u; i < t.length; i++) {
    let a = t[i];
    if (a === 0) {
      if (i < t.length - 1 || i > u)
        throw RangeError(
          `Content hole must be the only child of its parent node`,
        );
      return { dom: c, contentDOM: c };
    }
    if (typeof a == `string`) c.appendChild(e.createTextNode(a));
    else {
      let { dom: t, contentDOM: i } = pn(e, a, n, r);
      if ((c.appendChild(t), i)) {
        if (s) throw RangeError(`Multiple content holes`);
        s = i;
      }
    }
  }
  return { dom: c, contentDOM: s };
}
var mn = 65535,
  hn = 2 ** 16;
function gn(e, t) {
  return e + t * hn;
}
function _n(e) {
  return e & mn;
}
function vn(e) {
  return (e - (e & mn)) / hn;
}
var yn = 1,
  bn = 2,
  xn = 4,
  Sn = 8,
  Cn = class {
    constructor(e, t, n) {
      (this.pos = e), (this.delInfo = t), (this.recover = n);
    }
    get deleted() {
      return (this.delInfo & Sn) > 0;
    }
    get deletedBefore() {
      return (this.delInfo & 5) > 0;
    }
    get deletedAfter() {
      return (this.delInfo & 6) > 0;
    }
    get deletedAcross() {
      return (this.delInfo & xn) > 0;
    }
  },
  wn = class e {
    constructor(t, n = !1) {
      if (((this.ranges = t), (this.inverted = n), !t.length && e.empty))
        return e.empty;
    }
    recover(e) {
      let t = 0,
        n = _n(e);
      if (!this.inverted)
        for (let e = 0; e < n; e++)
          t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
      return this.ranges[n * 3] + t + vn(e);
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    map(e, t = 1) {
      return this._map(e, t, !0);
    }
    _map(e, t, n) {
      let r = 0,
        i = this.inverted ? 2 : 1,
        a = this.inverted ? 1 : 2;
      for (let o = 0; o < this.ranges.length; o += 3) {
        let s = this.ranges[o] - (this.inverted ? r : 0);
        if (s > e) break;
        let c = this.ranges[o + i],
          l = this.ranges[o + a],
          u = s + c;
        if (e <= u) {
          let i = c ? (e == s ? -1 : e == u ? 1 : t) : t,
            a = s + r + (i < 0 ? 0 : l);
          if (n) return a;
          let d = e == (t < 0 ? s : u) ? null : gn(o / 3, e - s),
            f = e == s ? bn : e == u ? yn : xn;
          return (t < 0 ? e != s : e != u) && (f |= Sn), new Cn(a, f, d);
        }
        r += l - c;
      }
      return n ? e + r : new Cn(e + r, 0, null);
    }
    touches(e, t) {
      let n = 0,
        r = _n(t),
        i = this.inverted ? 2 : 1,
        a = this.inverted ? 1 : 2;
      for (let t = 0; t < this.ranges.length; t += 3) {
        let o = this.ranges[t] - (this.inverted ? n : 0);
        if (o > e) break;
        let s = this.ranges[t + i];
        if (e <= o + s && t == r * 3) return !0;
        n += this.ranges[t + a] - s;
      }
      return !1;
    }
    forEach(e) {
      let t = this.inverted ? 2 : 1,
        n = this.inverted ? 1 : 2;
      for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
        let a = this.ranges[r],
          o = a - (this.inverted ? i : 0),
          s = a + (this.inverted ? 0 : i),
          c = this.ranges[r + t],
          l = this.ranges[r + n];
        e(o, o + c, s, s + l), (i += l - c);
      }
    }
    invert() {
      return new e(this.ranges, !this.inverted);
    }
    toString() {
      return (this.inverted ? `-` : ``) + JSON.stringify(this.ranges);
    }
    static offset(t) {
      return t == 0 ? e.empty : new e(t < 0 ? [0, -t, 0] : [0, 0, t]);
    }
  };
wn.empty = new wn([]);
var Tn = class e {
    constructor(e, t, n = 0, r = e ? e.length : 0) {
      (this.mirror = t),
        (this.from = n),
        (this.to = r),
        (this._maps = e || []),
        (this.ownData = !(e || t));
    }
    get maps() {
      return this._maps;
    }
    slice(t = 0, n = this.maps.length) {
      return new e(this._maps, this.mirror, t, n);
    }
    appendMap(e, t) {
      (this.ownData ||=
        ((this._maps = this._maps.slice()),
        (this.mirror = this.mirror && this.mirror.slice()),
        !0)),
        (this.to = this._maps.push(e)),
        t != null && this.setMirror(this._maps.length - 1, t);
    }
    appendMapping(e) {
      for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
        let r = e.getMirror(t);
        this.appendMap(e._maps[t], r != null && r < t ? n + r : void 0);
      }
    }
    getMirror(e) {
      if (this.mirror) {
        for (let t = 0; t < this.mirror.length; t++)
          if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
      }
    }
    setMirror(e, t) {
      (this.mirror ||= []), this.mirror.push(e, t);
    }
    appendMappingInverted(e) {
      for (
        let t = e.maps.length - 1, n = this._maps.length + e._maps.length;
        t >= 0;
        t--
      ) {
        let r = e.getMirror(t);
        this.appendMap(
          e._maps[t].invert(),
          r != null && r > t ? n - r - 1 : void 0,
        );
      }
    }
    invert() {
      let t = new e();
      return t.appendMappingInverted(this), t;
    }
    map(e, t = 1) {
      if (this.mirror) return this._map(e, t, !0);
      for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
      return e;
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    _map(e, t, n) {
      let r = 0;
      for (let n = this.from; n < this.to; n++) {
        let i = this._maps[n].mapResult(e, t);
        if (i.recover != null) {
          let t = this.getMirror(n);
          if (t != null && t > n && t < this.to) {
            (n = t), (e = this._maps[t].recover(i.recover));
            continue;
          }
        }
        (r |= i.delInfo), (e = i.pos);
      }
      return n ? e : new Cn(e, r, null);
    }
  },
  En = Object.create(null),
  C = class {
    getMap() {
      return wn.empty;
    }
    merge(e) {
      return null;
    }
    static fromJSON(e, t) {
      if (!t || !t.stepType)
        throw RangeError(`Invalid input for Step.fromJSON`);
      let n = En[t.stepType];
      if (!n) throw RangeError(`No step type ${t.stepType} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in En) throw RangeError(`Duplicate use of step JSON ID ` + e);
      return (En[e] = t), (t.prototype.jsonID = e), t;
    }
  },
  w = class e {
    constructor(e, t) {
      (this.doc = e), (this.failed = t);
    }
    static ok(t) {
      return new e(t, null);
    }
    static fail(t) {
      return new e(null, t);
    }
    static fromReplace(t, n, r, i) {
      try {
        return e.ok(t.replace(n, r, i));
      } catch (t) {
        if (t instanceof Qe) return e.fail(t.message);
        throw t;
      }
    }
  };
function Dn(e, t, n) {
  let r = [];
  for (let i = 0; i < e.childCount; i++) {
    let a = e.child(i);
    a.content.size && (a = a.copy(Dn(a.content, t, a))),
      a.isInline && (a = t(a, n, i)),
      r.push(a);
  }
  return b.fromArray(r);
}
var On = class e extends C {
  constructor(e, t, n) {
    super(), (this.from = e), (this.to = t), (this.mark = n);
  }
  apply(e) {
    let t = e.slice(this.from, this.to),
      n = e.resolve(this.from),
      r = n.node(n.sharedDepth(this.to)),
      i = new S(
        Dn(
          t.content,
          (e, t) =>
            !e.isAtom || !t.type.allowsMarkType(this.mark.type)
              ? e
              : e.mark(this.mark.addToSet(e.marks)),
          r,
        ),
        t.openStart,
        t.openEnd,
      );
    return w.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new kn(this.from, this.to, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos
      ? null
      : new e(n.pos, r.pos, this.mark);
  }
  merge(t) {
    return t instanceof e &&
      t.mark.eq(this.mark) &&
      this.from <= t.to &&
      this.to >= t.from
      ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: `addMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for AddMarkStep.fromJSON`);
    return new e(n.from, n.to, t.markFromJSON(n.mark));
  }
};
C.jsonID(`addMark`, On);
var kn = class e extends C {
  constructor(e, t, n) {
    super(), (this.from = e), (this.to = t), (this.mark = n);
  }
  apply(e) {
    let t = e.slice(this.from, this.to),
      n = new S(
        Dn(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
        t.openStart,
        t.openEnd,
      );
    return w.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new On(this.from, this.to, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos
      ? null
      : new e(n.pos, r.pos, this.mark);
  }
  merge(t) {
    return t instanceof e &&
      t.mark.eq(this.mark) &&
      this.from <= t.to &&
      this.to >= t.from
      ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
      : null;
  }
  toJSON() {
    return {
      stepType: `removeMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);
    return new e(n.from, n.to, t.markFromJSON(n.mark));
  }
};
C.jsonID(`removeMark`, kn);
var An = class e extends C {
  constructor(e, t) {
    super(), (this.pos = e), (this.mark = t);
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return w.fail(`No node at mark step's position`);
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return w.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new S(b.from(n), 0, +!t.isLeaf),
    );
  }
  invert(t) {
    let n = t.nodeAt(this.pos);
    if (n) {
      let t = this.mark.addToSet(n.marks);
      if (t.length == n.marks.length) {
        for (let r = 0; r < n.marks.length; r++)
          if (!n.marks[r].isInSet(t)) return new e(this.pos, n.marks[r]);
        return new e(this.pos, this.mark);
      }
    }
    return new jn(this.pos, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: `addNodeMark`, pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number`)
      throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);
    return new e(n.pos, t.markFromJSON(n.mark));
  }
};
C.jsonID(`addNodeMark`, An);
var jn = class e extends C {
  constructor(e, t) {
    super(), (this.pos = e), (this.mark = t);
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return w.fail(`No node at mark step's position`);
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return w.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new S(b.from(n), 0, +!t.isLeaf),
    );
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks)
      ? this
      : new An(this.pos, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: `removeNodeMark`,
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number`)
      throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);
    return new e(n.pos, t.markFromJSON(n.mark));
  }
};
C.jsonID(`removeNodeMark`, jn);
var Mn = class e extends C {
  constructor(e, t, n, r = !1) {
    super(),
      (this.from = e),
      (this.to = t),
      (this.slice = n),
      (this.structure = r);
  }
  apply(e) {
    return this.structure && Nn(e, this.from, this.to)
      ? w.fail(`Structure replace would overwrite content`)
      : w.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new wn([this.from, this.to - this.from, this.slice.size]);
  }
  invert(t) {
    return new e(
      this.from,
      this.from + this.slice.size,
      t.slice(this.from, this.to),
    );
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross
      ? null
      : new e(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(t) {
    if (!(t instanceof e) || t.structure || this.structure) return null;
    if (
      this.from + this.slice.size == t.from &&
      !this.slice.openEnd &&
      !t.slice.openStart
    ) {
      let n =
        this.slice.size + t.slice.size == 0
          ? S.empty
          : new S(
              this.slice.content.append(t.slice.content),
              this.slice.openStart,
              t.slice.openEnd,
            );
      return new e(this.from, this.to + (t.to - t.from), n, this.structure);
    }
    if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
      let n =
        this.slice.size + t.slice.size == 0
          ? S.empty
          : new S(
              t.slice.content.append(this.slice.content),
              t.slice.openStart,
              this.slice.openEnd,
            );
      return new e(t.from, this.to, n, this.structure);
    }
    return null;
  }
  toJSON() {
    let e = { stepType: `replace`, from: this.from, to: this.to };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()),
      this.structure && (e.structure = !0),
      e
    );
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for ReplaceStep.fromJSON`);
    return new e(n.from, n.to, S.fromJSON(t, n.slice), !!n.structure);
  }
};
C.jsonID(`replace`, Mn);
var T = class e extends C {
  constructor(e, t, n, r, i, a, o = !1) {
    super(),
      (this.from = e),
      (this.to = t),
      (this.gapFrom = n),
      (this.gapTo = r),
      (this.slice = i),
      (this.insert = a),
      (this.structure = o);
  }
  apply(e) {
    if (
      this.structure &&
      (Nn(e, this.from, this.gapFrom) || Nn(e, this.gapTo, this.to))
    )
      return w.fail(`Structure gap-replace would overwrite content`);
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd) return w.fail(`Gap is not a flat range`);
    let n = this.slice.insertAt(this.insert, t.content);
    return n
      ? w.fromReplace(e, this.from, this.to, n)
      : w.fail(`Content does not fit in gap`);
  }
  getMap() {
    return new wn([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(t) {
    let n = this.gapTo - this.gapFrom;
    return new e(
      this.from,
      this.from + this.slice.size + n,
      this.from + this.insert,
      this.from + this.insert + n,
      t
        .slice(this.from, this.to)
        .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1),
      i = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1),
      a = this.to == this.gapTo ? r.pos : t.map(this.gapTo, 1);
    return (n.deletedAcross && r.deletedAcross) || i < n.pos || a > r.pos
      ? null
      : new e(n.pos, r.pos, i, a, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: `replaceAround`,
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()),
      this.structure && (e.structure = !0),
      e
    );
  }
  static fromJSON(t, n) {
    if (
      typeof n.from != `number` ||
      typeof n.to != `number` ||
      typeof n.gapFrom != `number` ||
      typeof n.gapTo != `number` ||
      typeof n.insert != `number`
    )
      throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);
    return new e(
      n.from,
      n.to,
      n.gapFrom,
      n.gapTo,
      S.fromJSON(t, n.slice),
      n.insert,
      !!n.structure,
    );
  }
};
C.jsonID(`replaceAround`, T);
function Nn(e, t, n) {
  let r = e.resolve(t),
    i = n - t,
    a = r.depth;
  for (; i > 0 && a > 0 && r.indexAfter(a) == r.node(a).childCount; ) a--, i--;
  if (i > 0) {
    let e = r.node(a).maybeChild(r.indexAfter(a));
    for (; i > 0; ) {
      if (!e || e.isLeaf) return !0;
      (e = e.firstChild), i--;
    }
  }
  return !1;
}
function Pn(e, t, n, r) {
  let i = [],
    a = [],
    o,
    s;
  e.doc.nodesBetween(t, n, (e, c, l) => {
    if (!e.isInline) return;
    let u = e.marks;
    if (!r.isInSet(u) && l.type.allowsMarkType(r.type)) {
      let l = Math.max(c, t),
        d = Math.min(c + e.nodeSize, n),
        f = r.addToSet(u);
      for (let e = 0; e < u.length; e++)
        u[e].isInSet(f) ||
          (o && o.to == l && o.mark.eq(u[e])
            ? (o.to = d)
            : i.push((o = new kn(l, d, u[e]))));
      s && s.to == l ? (s.to = d) : a.push((s = new On(l, d, r)));
    }
  }),
    i.forEach((t) => e.step(t)),
    a.forEach((t) => e.step(t));
}
function Fn(e, t, n, r) {
  let i = [],
    a = 0;
  e.doc.nodesBetween(t, n, (e, o) => {
    if (!e.isInline) return;
    a++;
    let s = null;
    if (r instanceof Vt) {
      let t = e.marks,
        n;
      for (; (n = r.isInSet(t)); ) (s ||= []).push(n), (t = n.removeFromSet(t));
    } else r ? r.isInSet(e.marks) && (s = [r]) : (s = e.marks);
    if (s && s.length) {
      let r = Math.min(o + e.nodeSize, n);
      for (let e = 0; e < s.length; e++) {
        let n = s[e],
          c;
        for (let e = 0; e < i.length; e++) {
          let t = i[e];
          t.step == a - 1 && n.eq(i[e].style) && (c = t);
        }
        c
          ? ((c.to = r), (c.step = a))
          : i.push({ style: n, from: Math.max(o, t), to: r, step: a });
      }
    }
  }),
    i.forEach((t) => e.step(new kn(t.from, t.to, t.style)));
}
function In(e, t, n, r = n.contentMatch, i = !0) {
  let a = e.doc.nodeAt(t),
    o = [],
    s = t + 1;
  for (let t = 0; t < a.childCount; t++) {
    let c = a.child(t),
      l = s + c.nodeSize,
      u = r.matchType(c.type);
    if (!u) o.push(new Mn(s, l, S.empty));
    else {
      r = u;
      for (let t = 0; t < c.marks.length; t++)
        n.allowsMarkType(c.marks[t].type) || e.step(new kn(s, l, c.marks[t]));
      if (i && c.isText && n.whitespace != `pre`) {
        let e,
          t = /\r?\n|\r/g,
          r;
        for (; (e = t.exec(c.text)); )
          (r ||= new S(
            b.from(n.schema.text(` `, n.allowedMarks(c.marks))),
            0,
            0,
          )),
            o.push(new Mn(s + e.index, s + e.index + e[0].length, r));
      }
    }
    s = l;
  }
  if (!r.validEnd) {
    let t = r.fillBefore(b.empty, !0);
    e.replace(s, s, new S(t, 0, 0));
  }
  for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function Ln(e, t, n) {
  return (
    (t == 0 || e.canReplace(t, e.childCount)) &&
    (n == e.childCount || e.canReplace(0, n))
  );
}
function Rn(e) {
  let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
  for (let n = e.depth, r = 0, i = 0; ; --n) {
    let a = e.$from.node(n),
      o = e.$from.index(n) + r,
      s = e.$to.indexAfter(n) - i;
    if (n < e.depth && a.canReplace(o, s, t)) return n;
    if (n == 0 || a.type.spec.isolating || !Ln(a, o, s)) break;
    o && (r = 1), s < a.childCount && (i = 1);
  }
  return null;
}
function zn(e, t, n) {
  let { $from: r, $to: i, depth: a } = t,
    o = r.before(a + 1),
    s = i.after(a + 1),
    c = o,
    l = s,
    u = b.empty,
    d = 0;
  for (let e = a, t = !1; e > n; e--)
    t || r.index(e) > 0
      ? ((t = !0), (u = b.from(r.node(e).copy(u))), d++)
      : c--;
  let f = b.empty,
    p = 0;
  for (let e = a, t = !1; e > n; e--)
    t || i.after(e + 1) < i.end(e)
      ? ((t = !0), (f = b.from(i.node(e).copy(f))), p++)
      : l++;
  e.step(new T(c, l, o, s, new S(u.append(f), d, p), u.size - d, !0));
}
function Bn(e, t, n = null, r = e) {
  let i = Hn(e, t),
    a = i && Un(r, t);
  return a ? i.map(Vn).concat({ type: t, attrs: n }).concat(a.map(Vn)) : null;
}
function Vn(e) {
  return { type: e, attrs: null };
}
function Hn(e, t) {
  let { parent: n, startIndex: r, endIndex: i } = e,
    a = n.contentMatchAt(r).findWrapping(t);
  if (!a) return null;
  let o = a.length ? a[0] : t;
  return n.canReplaceWith(r, i, o) ? a : null;
}
function Un(e, t) {
  let { parent: n, startIndex: r, endIndex: i } = e,
    a = n.child(r),
    o = t.contentMatch.findWrapping(a.type);
  if (!o) return null;
  let s = (o.length ? o[o.length - 1] : t).contentMatch;
  for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
  return !s || !s.validEnd ? null : o;
}
function Wn(e, t, n) {
  let r = b.empty;
  for (let e = n.length - 1; e >= 0; e--) {
    if (r.size) {
      let t = n[e].type.contentMatch.matchFragment(r);
      if (!t || !t.validEnd)
        throw RangeError(
          `Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`,
        );
    }
    r = b.from(n[e].type.create(n[e].attrs, r));
  }
  let i = t.start,
    a = t.end;
  e.step(new T(i, a, i, a, new S(r, 0, 0), n.length, !0));
}
function Gn(e, t, n, r, i) {
  if (!r.isTextblock)
    throw RangeError(`Type given to setBlockType should be a textblock`);
  let a = e.steps.length;
  e.doc.nodesBetween(t, n, (t, n) => {
    let o = typeof i == `function` ? i(t) : i;
    if (
      t.isTextblock &&
      !t.hasMarkup(r, o) &&
      Jn(e.doc, e.mapping.slice(a).map(n), r)
    ) {
      let i = null;
      if (r.schema.linebreakReplacement) {
        let e = r.whitespace == `pre`,
          t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        e && !t ? (i = !1) : !e && t && (i = !0);
      }
      i === !1 && qn(e, t, n, a),
        In(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
      let s = e.mapping.slice(a),
        c = s.map(n, 1),
        l = s.map(n + t.nodeSize, 1);
      return (
        e.step(
          new T(
            c,
            l,
            c + 1,
            l - 1,
            new S(b.from(r.create(o, null, t.marks)), 0, 0),
            1,
            !0,
          ),
        ),
        i === !0 && Kn(e, t, n, a),
        !1
      );
    }
  });
}
function Kn(e, t, n, r) {
  t.forEach((i, a) => {
    if (i.isText) {
      let o,
        s = /\r?\n|\r/g;
      for (; (o = s.exec(i.text)); ) {
        let i = e.mapping.slice(r).map(n + 1 + a + o.index);
        e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function qn(e, t, n, r) {
  t.forEach((i, a) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let i = e.mapping.slice(r).map(n + 1 + a);
      e.replaceWith(
        i,
        i + 1,
        t.type.schema.text(`
`),
      );
    }
  });
}
function Jn(e, t, n) {
  let r = e.resolve(t),
    i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function Yn(e, t, n, r, i) {
  let a = e.doc.nodeAt(t);
  if (!a) throw RangeError(`No node at given position`);
  n ||= a.type;
  let o = n.create(r, null, i || a.marks);
  if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
  if (!n.validContent(a.content))
    throw RangeError(`Invalid content for node type ` + n.name);
  e.step(
    new T(
      t,
      t + a.nodeSize,
      t + 1,
      t + a.nodeSize - 1,
      new S(b.from(o), 0, 0),
      1,
      !0,
    ),
  );
}
function Xn(e, t, n = 1, r) {
  let i = e.resolve(t),
    a = i.depth - n,
    o = (r && r[r.length - 1]) || i.parent;
  if (
    a < 0 ||
    i.parent.type.spec.isolating ||
    !i.parent.canReplace(i.index(), i.parent.childCount) ||
    !o.type.validContent(
      i.parent.content.cutByIndex(i.index(), i.parent.childCount),
    )
  )
    return !1;
  for (let e = i.depth - 1, t = n - 2; e > a; e--, t--) {
    let n = i.node(e),
      a = i.index(e);
    if (n.type.spec.isolating) return !1;
    let o = n.content.cutByIndex(a, n.childCount),
      s = r && r[t + 1];
    s && (o = o.replaceChild(0, s.type.create(s.attrs)));
    let c = (r && r[t]) || n;
    if (!n.canReplace(a + 1, n.childCount) || !c.type.validContent(o))
      return !1;
  }
  let s = i.indexAfter(a),
    c = r && r[0];
  return i.node(a).canReplaceWith(s, s, c ? c.type : i.node(a + 1).type);
}
function Zn(e, t, n = 1, r) {
  let i = e.doc.resolve(t),
    a = b.empty,
    o = b.empty;
  for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
    a = b.from(i.node(e).copy(a));
    let t = r && r[s];
    o = b.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
  }
  e.step(new Mn(t, t, new S(a.append(o), n, n), !0));
}
function Qn(e, t) {
  let n = e.resolve(t),
    r = n.index();
  return er(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function $n(e, t) {
  t.content.size || e.type.compatibleContent(t.type);
  let n = e.contentMatchAt(e.childCount),
    { linebreakReplacement: r } = e.type.schema;
  for (let i = 0; i < t.childCount; i++) {
    let a = t.child(i),
      o = a.type == r ? e.type.schema.nodes.text : a.type;
    if (((n = n.matchType(o)), !n || !e.type.allowsMarks(a.marks))) return !1;
  }
  return n.validEnd;
}
function er(e, t) {
  return !!(e && t && !e.isLeaf && $n(e, t));
}
function tr(e, t, n) {
  let r = null,
    { linebreakReplacement: i } = e.doc.type.schema,
    a = e.doc.resolve(t - n),
    o = a.node().type;
  if (i && o.inlineContent) {
    let e = o.whitespace == `pre`,
      t = !!o.contentMatch.matchType(i);
    e && !t ? (r = !1) : !e && t && (r = !0);
  }
  let s = e.steps.length;
  if (r === !1) {
    let r = e.doc.resolve(t + n);
    qn(e, r.node(), r.before(), s);
  }
  o.inlineContent &&
    In(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
  let c = e.mapping.slice(s),
    l = c.map(t - n);
  if ((e.step(new Mn(l, c.map(t + n, -1), S.empty, !0)), r === !0)) {
    let t = e.doc.resolve(l);
    Kn(e, t.node(), t.before(), e.steps.length);
  }
  return e;
}
function nr(e, t, n) {
  let r = e.resolve(t);
  if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
  if (r.parentOffset == 0)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.index(e);
      if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
      if (t > 0) return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.indexAfter(e);
      if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
      if (t < r.node(e).childCount) return null;
    }
  return null;
}
function rr(e, t, n) {
  let r = e.resolve(t);
  if (!n.content.size) return t;
  let i = n.content;
  for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
  for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++)
    for (let t = r.depth; t >= 0; t--) {
      let n =
          t == r.depth
            ? 0
            : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
              ? -1
              : 1,
        a = r.index(t) + +(n > 0),
        o = r.node(t),
        s = !1;
      if (e == 1) s = o.canReplace(a, a, i);
      else {
        let e = o.contentMatchAt(a).findWrapping(i.firstChild.type);
        s = e && o.canReplaceWith(a, a, e[0]);
      }
      if (s) return n == 0 ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
    }
  return null;
}
function ir(e, t, n = t, r = S.empty) {
  if (t == n && !r.size) return null;
  let i = e.resolve(t),
    a = e.resolve(n);
  return ar(i, a, r) ? new Mn(t, n, r) : new or(i, a, r).fit();
}
function ar(e, t, n) {
  return (
    !n.openStart &&
    !n.openEnd &&
    e.start() == t.start() &&
    e.parent.canReplace(e.index(), t.index(), n.content)
  );
}
var or = class {
  constructor(e, t, n) {
    (this.$from = e),
      (this.$to = t),
      (this.unplaced = n),
      (this.frontier = []),
      (this.placed = b.empty);
    for (let t = 0; t <= e.depth; t++) {
      let n = e.node(t);
      this.frontier.push({
        type: n.type,
        match: n.contentMatchAt(e.indexAfter(t)),
      });
    }
    for (let t = e.depth; t > 0; t--)
      this.placed = b.from(e.node(t).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let e = this.findFittable();
      e ? this.placeNodes(e) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(),
      t = this.placed.size - this.depth - this.$from.depth,
      n = this.$from,
      r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!r) return null;
    let i = this.placed,
      a = n.depth,
      o = r.depth;
    for (; a && o && i.childCount == 1; ) (i = i.firstChild.content), a--, o--;
    let s = new S(i, a, o);
    return e > -1
      ? new T(n.pos, e, this.$to.pos, this.$to.end(), s, t)
      : s.size || n.pos != this.$to.pos
        ? new Mn(n.pos, r.pos, s)
        : null;
  }
  findFittable() {
    let e = this.unplaced.openStart;
    for (
      let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
      n < e;
      n++
    ) {
      let i = t.firstChild;
      if ((t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)) {
        e = n;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let e,
          r = null;
        n
          ? ((r = lr(this.unplaced.content, n - 1).firstChild), (e = r.content))
          : (e = this.unplaced.content);
        let i = e.firstChild;
        for (let e = this.depth; e >= 0; e--) {
          let { type: a, match: o } = this.frontier[e],
            s,
            c = null;
          if (
            t == 1 &&
            (i
              ? o.matchType(i.type) || (c = o.fillBefore(b.from(i), !1))
              : r && a.compatibleContent(r.type))
          )
            return { sliceDepth: n, frontierDepth: e, parent: r, inject: c };
          if (t == 2 && i && (s = o.findWrapping(i.type)))
            return { sliceDepth: n, frontierDepth: e, parent: r, wrap: s };
          if (r && o.matchType(r.type)) break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced,
      r = lr(e, t);
    return !r.childCount || r.firstChild.isLeaf
      ? !1
      : ((this.unplaced = new S(
          e,
          t + 1,
          Math.max(n, r.size + t >= e.size - n ? t + 1 : 0),
        )),
        !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced,
      r = lr(e, t);
    if (r.childCount <= 1 && t > 0) {
      let i = e.size - t <= t + r.size;
      this.unplaced = new S(sr(e, t - 1, 1), t - 1, i ? t - 1 : n);
    } else this.unplaced = new S(sr(e, t, 1), t, n);
  }
  placeNodes({
    sliceDepth: e,
    frontierDepth: t,
    parent: n,
    inject: r,
    wrap: i,
  }) {
    for (; this.depth > t; ) this.closeFrontierNode();
    if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
    let a = this.unplaced,
      o = n ? n.content : a.content,
      s = a.openStart - e,
      c = 0,
      l = [],
      { match: u, type: d } = this.frontier[t];
    if (r) {
      for (let e = 0; e < r.childCount; e++) l.push(r.child(e));
      u = u.matchFragment(r);
    }
    let f = o.size + e - (a.content.size - a.openEnd);
    for (; c < o.childCount; ) {
      let e = o.child(c),
        t = u.matchType(e.type);
      if (!t) break;
      c++,
        (c > 1 || s == 0 || e.content.size) &&
          ((u = t),
          l.push(
            ur(
              e.mark(d.allowedMarks(e.marks)),
              c == 1 ? s : 0,
              c == o.childCount ? f : -1,
            ),
          ));
    }
    let p = c == o.childCount;
    p || (f = -1),
      (this.placed = cr(this.placed, t, b.from(l))),
      (this.frontier[t].match = u),
      p &&
        f < 0 &&
        n &&
        n.type == this.frontier[this.depth].type &&
        this.frontier.length > 1 &&
        this.closeFrontierNode();
    for (let e = 0, t = o; e < f; e++) {
      let e = t.lastChild;
      this.frontier.push({
        type: e.type,
        match: e.contentMatchAt(e.childCount),
      }),
        (t = e.content);
    }
    this.unplaced = p
      ? e == 0
        ? S.empty
        : new S(sr(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1)
      : new S(sr(a.content, e, c), a.openStart, a.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let e = this.frontier[this.depth],
      t;
    if (
      !e.type.isTextblock ||
      !dr(this.$to, this.$to.depth, e.type, e.match, !1) ||
      (this.$to.depth == this.depth &&
        (t = this.findCloseLevel(this.$to)) &&
        t.depth == this.depth)
    )
      return -1;
    let { depth: n } = this.$to,
      r = this.$to.after(n);
    for (; n > 1 && r == this.$to.end(--n); ) ++r;
    return r;
  }
  findCloseLevel(e) {
    scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: n, type: r } = this.frontier[t],
        i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
        a = dr(e, t, r, n, i);
      if (a) {
        for (let n = t - 1; n >= 0; n--) {
          let { match: t, type: r } = this.frontier[n],
            i = dr(e, n, r, t, !0);
          if (!i || i.childCount) continue scan;
        }
        return {
          depth: t,
          fit: a,
          move: i ? e.doc.resolve(e.after(t + 1)) : e,
        };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t) return null;
    for (; this.depth > t.depth; ) this.closeFrontierNode();
    t.fit.childCount && (this.placed = cr(this.placed, t.depth, t.fit)),
      (e = t.move);
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let t = e.node(n),
        r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
      this.openFrontierNode(t.type, t.attrs, r);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let r = this.frontier[this.depth];
    (r.match = r.match.matchType(e)),
      (this.placed = cr(this.placed, this.depth, b.from(e.create(t, n)))),
      this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(b.empty, !0);
    e.childCount && (this.placed = cr(this.placed, this.frontier.length, e));
  }
};
function sr(e, t, n) {
  return t == 0
    ? e.cutByIndex(n, e.childCount)
    : e.replaceChild(0, e.firstChild.copy(sr(e.firstChild.content, t - 1, n)));
}
function cr(e, t, n) {
  return t == 0
    ? e.append(n)
    : e.replaceChild(
        e.childCount - 1,
        e.lastChild.copy(cr(e.lastChild.content, t - 1, n)),
      );
}
function lr(e, t) {
  for (let n = 0; n < t; n++) e = e.firstChild.content;
  return e;
}
function ur(e, t, n) {
  if (t <= 0) return e;
  let r = e.content;
  return (
    t > 1 &&
      (r = r.replaceChild(
        0,
        ur(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0),
      )),
    t > 0 &&
      ((r = e.type.contentMatch.fillBefore(r).append(r)),
      n <= 0 &&
        (r = r.append(
          e.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0),
        ))),
    e.copy(r)
  );
}
function dr(e, t, n, r, i) {
  let a = e.node(t),
    o = i ? e.indexAfter(t) : e.index(t);
  if (o == a.childCount && !n.compatibleContent(a.type)) return null;
  let s = r.fillBefore(a.content, !0, o);
  return s && !fr(n, a.content, o) ? s : null;
}
function fr(e, t, n) {
  for (let r = n; r < t.childCount; r++)
    if (!e.allowsMarks(t.child(r).marks)) return !0;
  return !1;
}
function pr(e) {
  return e.spec.defining || e.spec.definingForContent;
}
function mr(e, t, n, r) {
  if (!r.size) return e.deleteRange(t, n);
  let i = e.doc.resolve(t),
    a = e.doc.resolve(n);
  if (ar(i, a, r)) return e.step(new Mn(t, n, r));
  let o = vr(i, a);
  o[o.length - 1] == 0 && o.pop();
  let s = -(i.depth + 1);
  o.unshift(s);
  for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
    let n = i.node(e).type.spec;
    if (n.defining || n.definingAsContext || n.isolating) break;
    o.indexOf(e) > -1 ? (s = e) : i.before(e) == t && o.splice(1, 0, -e);
  }
  let c = o.indexOf(s),
    l = [],
    u = r.openStart;
  for (let e = r.content, t = 0; ; t++) {
    let n = e.firstChild;
    if ((l.push(n), t == r.openStart)) break;
    e = n.content;
  }
  for (let e = u - 1; e >= 0; e--) {
    let t = l[e],
      n = pr(t.type);
    if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
    else if (n || !t.type.isTextblock) break;
  }
  for (let t = r.openStart; t >= 0; t--) {
    let s = (t + u + 1) % (r.openStart + 1),
      d = l[s];
    if (d)
      for (let t = 0; t < o.length; t++) {
        let l = o[(t + c) % o.length],
          u = !0;
        l < 0 && ((u = !1), (l = -l));
        let f = i.node(l - 1),
          p = i.index(l - 1);
        if (f.canReplaceWith(p, p, d.type, d.marks))
          return e.replace(
            i.before(l),
            u ? a.after(l) : n,
            new S(hr(r.content, 0, r.openStart, s), s, r.openEnd),
          );
      }
  }
  let d = e.steps.length;
  for (
    let s = o.length - 1;
    s >= 0 && (e.replace(t, n, r), !(e.steps.length > d));
    s--
  ) {
    let e = o[s];
    e < 0 || ((t = i.before(e)), (n = a.after(e)));
  }
}
function hr(e, t, n, r, i) {
  if (t < n) {
    let i = e.firstChild;
    e = e.replaceChild(0, i.copy(hr(i.content, t + 1, n, r, i)));
  }
  if (t > r) {
    let t = i.contentMatchAt(0),
      n = t.fillBefore(e).append(e);
    e = n.append(t.matchFragment(n).fillBefore(b.empty, !0));
  }
  return e;
}
function gr(e, t, n, r) {
  if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
    let i = nr(e.doc, t, r.type);
    i != null && (t = n = i);
  }
  e.replaceRange(t, n, new S(b.from(r), 0, 0));
}
function _r(e, t, n) {
  let r = e.doc.resolve(t),
    i = e.doc.resolve(n),
    a = vr(r, i);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      o = t == a.length - 1;
    if ((o && n == 0) || r.node(n).type.contentMatch.validEnd)
      return e.delete(r.start(n), i.end(n));
    if (
      n > 0 &&
      (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))
    )
      return e.delete(r.before(n), i.after(n));
  }
  for (let a = 1; a <= r.depth && a <= i.depth; a++)
    if (
      t - r.start(a) == r.depth - a &&
      n > r.end(a) &&
      i.end(a) - n != i.depth - a &&
      r.start(a - 1) == i.start(a - 1) &&
      r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))
    )
      return e.delete(r.before(a), n);
  e.delete(t, n);
}
function vr(e, t) {
  let n = [],
    r = Math.min(e.depth, t.depth);
  for (let i = r; i >= 0; i--) {
    let r = e.start(i);
    if (
      r < e.pos - (e.depth - i) ||
      t.end(i) > t.pos + (t.depth - i) ||
      e.node(i).type.spec.isolating ||
      t.node(i).type.spec.isolating
    )
      break;
    (r == t.start(i) ||
      (i == e.depth &&
        i == t.depth &&
        e.parent.inlineContent &&
        t.parent.inlineContent &&
        i &&
        t.start(i - 1) == r - 1)) &&
      n.push(i);
  }
  return n;
}
var yr = class e extends C {
  constructor(e, t, n) {
    super(), (this.pos = e), (this.attr = t), (this.value = n);
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return w.fail(`No node at attribute step's position`);
    let n = Object.create(null);
    for (let e in t.attrs) n[e] = t.attrs[e];
    n[this.attr] = this.value;
    let r = t.type.create(n, null, t.marks);
    return w.fromReplace(
      e,
      this.pos,
      this.pos + 1,
      new S(b.from(r), 0, +!t.isLeaf),
    );
  }
  getMap() {
    return wn.empty;
  }
  invert(t) {
    return new e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: `attr`,
      pos: this.pos,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number` || typeof n.attr != `string`)
      throw RangeError(`Invalid input for AttrStep.fromJSON`);
    return new e(n.pos, n.attr, n.value);
  }
};
C.jsonID(`attr`, yr);
var br = class e extends C {
  constructor(e, t) {
    super(), (this.attr = e), (this.value = t);
  }
  apply(e) {
    let t = Object.create(null);
    for (let n in e.attrs) t[n] = e.attrs[n];
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return w.ok(n);
  }
  getMap() {
    return wn.empty;
  }
  invert(t) {
    return new e(this.attr, t.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: `docAttr`, attr: this.attr, value: this.value };
  }
  static fromJSON(t, n) {
    if (typeof n.attr != `string`)
      throw RangeError(`Invalid input for DocAttrStep.fromJSON`);
    return new e(n.attr, n.value);
  }
};
C.jsonID(`docAttr`, br);
var xr = class extends Error {};
(xr = function e(t) {
  let n = Error.call(this, t);
  return (n.__proto__ = e.prototype), n;
}),
  (xr.prototype = Object.create(Error.prototype)),
  (xr.prototype.constructor = xr),
  (xr.prototype.name = `TransformError`);
var Sr = class {
    constructor(e) {
      (this.doc = e),
        (this.steps = []),
        (this.docs = []),
        (this.mapping = new Tn());
    }
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    step(e) {
      let t = this.maybeStep(e);
      if (t.failed) throw new xr(t.failed);
      return this;
    }
    maybeStep(e) {
      let t = e.apply(this.doc);
      return t.failed || this.addStep(e, t.doc), t;
    }
    get docChanged() {
      return this.steps.length > 0;
    }
    addStep(e, t) {
      this.docs.push(this.doc),
        this.steps.push(e),
        this.mapping.appendMap(e.getMap()),
        (this.doc = t);
    }
    replace(e, t = e, n = S.empty) {
      let r = ir(this.doc, e, t, n);
      return r && this.step(r), this;
    }
    replaceWith(e, t, n) {
      return this.replace(e, t, new S(b.from(n), 0, 0));
    }
    delete(e, t) {
      return this.replace(e, t, S.empty);
    }
    insert(e, t) {
      return this.replaceWith(e, e, t);
    }
    replaceRange(e, t, n) {
      return mr(this, e, t, n), this;
    }
    replaceRangeWith(e, t, n) {
      return gr(this, e, t, n), this;
    }
    deleteRange(e, t) {
      return _r(this, e, t), this;
    }
    lift(e, t) {
      return zn(this, e, t), this;
    }
    join(e, t = 1) {
      return tr(this, e, t), this;
    }
    wrap(e, t) {
      return Wn(this, e, t), this;
    }
    setBlockType(e, t = e, n, r = null) {
      return Gn(this, e, t, n, r), this;
    }
    setNodeMarkup(e, t, n = null, r) {
      return Yn(this, e, t, n, r), this;
    }
    setNodeAttribute(e, t, n) {
      return this.step(new yr(e, t, n)), this;
    }
    setDocAttribute(e, t) {
      return this.step(new br(e, t)), this;
    }
    addNodeMark(e, t) {
      return this.step(new An(e, t)), this;
    }
    removeNodeMark(e, t) {
      let n = this.doc.nodeAt(e);
      if (!n) throw RangeError(`No node at position ` + e);
      if (t instanceof x) t.isInSet(n.marks) && this.step(new jn(e, t));
      else {
        let r = n.marks,
          i,
          a = [];
        for (; (i = t.isInSet(r)); )
          a.push(new jn(e, i)), (r = i.removeFromSet(r));
        for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
      }
      return this;
    }
    split(e, t = 1, n) {
      return Zn(this, e, t, n), this;
    }
    addMark(e, t, n) {
      return Pn(this, e, t, n), this;
    }
    removeMark(e, t, n) {
      return Fn(this, e, t, n), this;
    }
    clearIncompatible(e, t, n) {
      return In(this, e, t, n), this;
    }
  },
  Cr = Object.create(null),
  E = class {
    constructor(e, t, n) {
      (this.$anchor = e),
        (this.$head = t),
        (this.ranges = n || [new wr(e.min(t), e.max(t))]);
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
      let e = this.ranges;
      for (let t = 0; t < e.length; t++)
        if (e[t].$from.pos != e[t].$to.pos) return !1;
      return !0;
    }
    content() {
      return this.$from.doc.slice(this.from, this.to, !0);
    }
    replace(e, t = S.empty) {
      let n = t.content.lastChild,
        r = null;
      for (let e = 0; e < t.openEnd; e++) (r = n), (n = n.lastChild);
      let i = e.steps.length,
        a = this.ranges;
      for (let o = 0; o < a.length; o++) {
        let { $from: s, $to: c } = a[o],
          l = e.mapping.slice(i);
        e.replaceRange(l.map(s.pos), l.map(c.pos), o ? S.empty : t),
          o == 0 && Mr(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
      }
    }
    replaceWith(e, t) {
      let n = e.steps.length,
        r = this.ranges;
      for (let i = 0; i < r.length; i++) {
        let { $from: a, $to: o } = r[i],
          s = e.mapping.slice(n),
          c = s.map(a.pos),
          l = s.map(o.pos);
        i
          ? e.deleteRange(c, l)
          : (e.replaceRangeWith(c, l, t), Mr(e, n, t.isInline ? -1 : 1));
      }
    }
    static findFrom(e, t, n = !1) {
      let r = e.parent.inlineContent
        ? new D(e)
        : jr(e.node(0), e.parent, e.pos, e.index(), t, n);
      if (r) return r;
      for (let r = e.depth - 1; r >= 0; r--) {
        let i =
          t < 0
            ? jr(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
            : jr(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
        if (i) return i;
      }
      return null;
    }
    static near(e, t = 1) {
      return this.findFrom(e, t) || this.findFrom(e, -t) || new kr(e.node(0));
    }
    static atStart(e) {
      return jr(e, e, 0, 0, 1) || new kr(e);
    }
    static atEnd(e) {
      return jr(e, e, e.content.size, e.childCount, -1) || new kr(e);
    }
    static fromJSON(e, t) {
      if (!t || !t.type)
        throw RangeError(`Invalid input for Selection.fromJSON`);
      let n = Cr[t.type];
      if (!n) throw RangeError(`No selection type ${t.type} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in Cr) throw RangeError(`Duplicate use of selection JSON ID ` + e);
      return (Cr[e] = t), (t.prototype.jsonID = e), t;
    }
    getBookmark() {
      return D.between(this.$anchor, this.$head).getBookmark();
    }
  };
E.prototype.visible = !0;
var wr = class {
    constructor(e, t) {
      (this.$from = e), (this.$to = t);
    }
  },
  Tr = !1;
function Er(e) {
  !Tr &&
    !e.parent.inlineContent &&
    ((Tr = !0),
    console.warn(
      `TextSelection endpoint not pointing into a node with inline content (` +
        e.parent.type.name +
        `)`,
    ));
}
var D = class e extends E {
  constructor(e, t = e) {
    Er(e), Er(t), super(e, t);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(t, n) {
    let r = t.resolve(n.map(this.head));
    if (!r.parent.inlineContent) return E.near(r);
    let i = t.resolve(n.map(this.anchor));
    return new e(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = S.empty) {
    if ((super.replace(e, t), t == S.empty)) {
      let t = this.$from.marksAcross(this.$to);
      t && e.ensureMarks(t);
    }
  }
  eq(t) {
    return t instanceof e && t.anchor == this.anchor && t.head == this.head;
  }
  getBookmark() {
    return new Dr(this.anchor, this.head);
  }
  toJSON() {
    return { type: `text`, anchor: this.anchor, head: this.head };
  }
  static fromJSON(t, n) {
    if (typeof n.anchor != `number` || typeof n.head != `number`)
      throw RangeError(`Invalid input for TextSelection.fromJSON`);
    return new e(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(e, t, n = t) {
    let r = e.resolve(t);
    return new this(r, n == t ? r : e.resolve(n));
  }
  static between(t, n, r) {
    let i = t.pos - n.pos;
    if (((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent)) {
      let e = E.findFrom(n, r, !0) || E.findFrom(n, -r, !0);
      if (e) n = e.$head;
      else return E.near(n, r);
    }
    return (
      t.parent.inlineContent ||
        (i == 0
          ? (t = n)
          : ((t = (E.findFrom(t, -r, !0) || E.findFrom(t, r, !0)).$anchor),
            t.pos < n.pos != i < 0 && (t = n))),
      new e(t, n)
    );
  }
};
E.jsonID(`text`, D);
var Dr = class e {
    constructor(e, t) {
      (this.anchor = e), (this.head = t);
    }
    map(t) {
      return new e(t.map(this.anchor), t.map(this.head));
    }
    resolve(e) {
      return D.between(e.resolve(this.anchor), e.resolve(this.head));
    }
  },
  O = class e extends E {
    constructor(e) {
      let t = e.nodeAfter,
        n = e.node(0).resolve(e.pos + t.nodeSize);
      super(e, n), (this.node = t);
    }
    map(t, n) {
      let { deleted: r, pos: i } = n.mapResult(this.anchor),
        a = t.resolve(i);
      return r ? E.near(a) : new e(a);
    }
    content() {
      return new S(b.from(this.node), 0, 0);
    }
    eq(t) {
      return t instanceof e && t.anchor == this.anchor;
    }
    toJSON() {
      return { type: `node`, anchor: this.anchor };
    }
    getBookmark() {
      return new Or(this.anchor);
    }
    static fromJSON(t, n) {
      if (typeof n.anchor != `number`)
        throw RangeError(`Invalid input for NodeSelection.fromJSON`);
      return new e(t.resolve(n.anchor));
    }
    static create(t, n) {
      return new e(t.resolve(n));
    }
    static isSelectable(e) {
      return !e.isText && e.type.spec.selectable !== !1;
    }
  };
(O.prototype.visible = !1), E.jsonID(`node`, O);
var Or = class e {
    constructor(e) {
      this.anchor = e;
    }
    map(t) {
      let { deleted: n, pos: r } = t.mapResult(this.anchor);
      return n ? new Dr(r, r) : new e(r);
    }
    resolve(e) {
      let t = e.resolve(this.anchor),
        n = t.nodeAfter;
      return n && O.isSelectable(n) ? new O(t) : E.near(t);
    }
  },
  kr = class e extends E {
    constructor(e) {
      super(e.resolve(0), e.resolve(e.content.size));
    }
    replace(e, t = S.empty) {
      if (t == S.empty) {
        e.delete(0, e.doc.content.size);
        let t = E.atStart(e.doc);
        t.eq(e.selection) || e.setSelection(t);
      } else super.replace(e, t);
    }
    toJSON() {
      return { type: `all` };
    }
    static fromJSON(t) {
      return new e(t);
    }
    map(t) {
      return new e(t);
    }
    eq(t) {
      return t instanceof e;
    }
    getBookmark() {
      return Ar;
    }
  };
E.jsonID(`all`, kr);
var Ar = {
  map() {
    return this;
  },
  resolve(e) {
    return new kr(e);
  },
};
function jr(e, t, n, r, i, a = !1) {
  if (t.inlineContent) return D.create(e, n);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
    let r = t.child(o);
    if (!r.isAtom) {
      let t = jr(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
      if (t) return t;
    } else if (!a && O.isSelectable(r))
      return O.create(e, n - (i < 0 ? r.nodeSize : 0));
    n += r.nodeSize * i;
  }
  return null;
}
function Mr(e, t, n) {
  let r = e.steps.length - 1;
  if (r < t) return;
  let i = e.steps[r];
  if (!(i instanceof Mn || i instanceof T)) return;
  let a = e.mapping.maps[r],
    o;
  a.forEach((e, t, n, r) => {
    o ??= r;
  }),
    e.setSelection(E.near(e.doc.resolve(o), n));
}
var Nr = 1,
  Pr = 2,
  Fr = 4,
  Ir = class extends Sr {
    constructor(e) {
      super(e.doc),
        (this.curSelectionFor = 0),
        (this.updated = 0),
        (this.meta = Object.create(null)),
        (this.time = Date.now()),
        (this.curSelection = e.selection),
        (this.storedMarks = e.storedMarks);
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
    setSelection(e) {
      if (e.$from.doc != this.doc)
        throw RangeError(
          `Selection passed to setSelection must point at the current document`,
        );
      return (
        (this.curSelection = e),
        (this.curSelectionFor = this.steps.length),
        (this.updated = (this.updated | Nr) & -3),
        (this.storedMarks = null),
        this
      );
    }
    get selectionSet() {
      return (this.updated & Nr) > 0;
    }
    setStoredMarks(e) {
      return (this.storedMarks = e), (this.updated |= Pr), this;
    }
    ensureMarks(e) {
      return (
        x.sameSet(this.storedMarks || this.selection.$from.marks(), e) ||
          this.setStoredMarks(e),
        this
      );
    }
    addStoredMark(e) {
      return this.ensureMarks(
        e.addToSet(this.storedMarks || this.selection.$head.marks()),
      );
    }
    removeStoredMark(e) {
      return this.ensureMarks(
        e.removeFromSet(this.storedMarks || this.selection.$head.marks()),
      );
    }
    get storedMarksSet() {
      return (this.updated & Pr) > 0;
    }
    addStep(e, t) {
      super.addStep(e, t), (this.updated &= -3), (this.storedMarks = null);
    }
    setTime(e) {
      return (this.time = e), this;
    }
    replaceSelection(e) {
      return this.selection.replace(this, e), this;
    }
    replaceSelectionWith(e, t = !0) {
      let n = this.selection;
      return (
        t &&
          (e = e.mark(
            this.storedMarks ||
              (n.empty
                ? n.$from.marks()
                : n.$from.marksAcross(n.$to) || x.none),
          )),
        n.replaceWith(this, e),
        this
      );
    }
    deleteSelection() {
      return this.selection.replace(this), this;
    }
    insertText(e, t, n) {
      let r = this.doc.type.schema;
      if (t == null)
        return e
          ? this.replaceSelectionWith(r.text(e), !0)
          : this.deleteSelection();
      {
        if (((n ??= t), (n ??= t), !e)) return this.deleteRange(t, n);
        let i = this.storedMarks;
        if (!i) {
          let e = this.doc.resolve(t);
          i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
        }
        return (
          this.replaceRangeWith(t, n, r.text(e, i)),
          this.selection.empty || this.setSelection(E.near(this.selection.$to)),
          this
        );
      }
    }
    setMeta(e, t) {
      return (this.meta[typeof e == `string` ? e : e.key] = t), this;
    }
    getMeta(e) {
      return this.meta[typeof e == `string` ? e : e.key];
    }
    get isGeneric() {
      for (let e in this.meta) return !1;
      return !0;
    }
    scrollIntoView() {
      return (this.updated |= Fr), this;
    }
    get scrolledIntoView() {
      return (this.updated & Fr) > 0;
    }
  };
function Lr(e, t) {
  return !t || !e ? e : e.bind(t);
}
var Rr = class {
    constructor(e, t, n) {
      (this.name = e),
        (this.init = Lr(t.init, n)),
        (this.apply = Lr(t.apply, n));
    }
  },
  zr = [
    new Rr(`doc`, {
      init(e) {
        return e.doc || e.schema.topNodeType.createAndFill();
      },
      apply(e) {
        return e.doc;
      },
    }),
    new Rr(`selection`, {
      init(e, t) {
        return e.selection || E.atStart(t.doc);
      },
      apply(e) {
        return e.selection;
      },
    }),
    new Rr(`storedMarks`, {
      init(e) {
        return e.storedMarks || null;
      },
      apply(e, t, n, r) {
        return r.selection.$cursor ? e.storedMarks : null;
      },
    }),
    new Rr(`scrollToSelection`, {
      init() {
        return 0;
      },
      apply(e, t) {
        return e.scrolledIntoView ? t + 1 : t;
      },
    }),
  ],
  Br = class {
    constructor(e, t) {
      (this.schema = e),
        (this.plugins = []),
        (this.pluginsByKey = Object.create(null)),
        (this.fields = zr.slice()),
        t &&
          t.forEach((e) => {
            if (this.pluginsByKey[e.key])
              throw RangeError(
                `Adding different instances of a keyed plugin (` + e.key + `)`,
              );
            this.plugins.push(e),
              (this.pluginsByKey[e.key] = e),
              e.spec.state && this.fields.push(new Rr(e.key, e.spec.state, e));
          });
    }
  },
  Vr = class e {
    constructor(e) {
      this.config = e;
    }
    get schema() {
      return this.config.schema;
    }
    get plugins() {
      return this.config.plugins;
    }
    apply(e) {
      return this.applyTransaction(e).state;
    }
    filterTransaction(e, t = -1) {
      for (let n = 0; n < this.config.plugins.length; n++)
        if (n != t) {
          let t = this.config.plugins[n];
          if (
            t.spec.filterTransaction &&
            !t.spec.filterTransaction.call(t, e, this)
          )
            return !1;
        }
      return !0;
    }
    applyTransaction(e) {
      if (!this.filterTransaction(e)) return { state: this, transactions: [] };
      let t = [e],
        n = this.applyInner(e),
        r = null;
      for (;;) {
        let i = !1;
        for (let a = 0; a < this.config.plugins.length; a++) {
          let o = this.config.plugins[a];
          if (o.spec.appendTransaction) {
            let s = r ? r[a].n : 0,
              c = r ? r[a].state : this,
              l =
                s < t.length &&
                o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
            if (l && n.filterTransaction(l, a)) {
              if ((l.setMeta(`appendedTransaction`, e), !r)) {
                r = [];
                for (let e = 0; e < this.config.plugins.length; e++)
                  r.push(
                    e < a ? { state: n, n: t.length } : { state: this, n: 0 },
                  );
              }
              t.push(l), (n = n.applyInner(l)), (i = !0);
            }
            r && (r[a] = { state: n, n: t.length });
          }
        }
        if (!i) return { state: n, transactions: t };
      }
    }
    applyInner(t) {
      if (!t.before.eq(this.doc))
        throw RangeError(`Applying a mismatched transaction`);
      let n = new e(this.config),
        r = this.config.fields;
      for (let e = 0; e < r.length; e++) {
        let i = r[e];
        n[i.name] = i.apply(t, this[i.name], this, n);
      }
      return n;
    }
    get tr() {
      return new Ir(this);
    }
    static create(t) {
      let n = new Br(t.doc ? t.doc.type.schema : t.schema, t.plugins),
        r = new e(n);
      for (let e = 0; e < n.fields.length; e++)
        r[n.fields[e].name] = n.fields[e].init(t, r);
      return r;
    }
    reconfigure(t) {
      let n = new Br(this.schema, t.plugins),
        r = n.fields,
        i = new e(n);
      for (let e = 0; e < r.length; e++) {
        let n = r[e].name;
        i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
      }
      return i;
    }
    toJSON(e) {
      let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
      if (
        (this.storedMarks &&
          (t.storedMarks = this.storedMarks.map((e) => e.toJSON())),
        e && typeof e == `object`)
      )
        for (let n in e) {
          if (n == `doc` || n == `selection`)
            throw RangeError(
              "The JSON fields `doc` and `selection` are reserved",
            );
          let r = e[n],
            i = r.spec.state;
          i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
        }
      return t;
    }
    static fromJSON(t, n, r) {
      if (!n) throw RangeError(`Invalid input for EditorState.fromJSON`);
      if (!t.schema) throw RangeError(`Required config field 'schema' missing`);
      let i = new Br(t.schema, t.plugins),
        a = new e(i);
      return (
        i.fields.forEach((e) => {
          if (e.name == `doc`) a.doc = _t.fromJSON(t.schema, n.doc);
          else if (e.name == `selection`)
            a.selection = E.fromJSON(a.doc, n.selection);
          else if (e.name == `storedMarks`)
            n.storedMarks &&
              (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
          else {
            if (r)
              for (let i in r) {
                let o = r[i],
                  s = o.spec.state;
                if (
                  o.key == e.name &&
                  s &&
                  s.fromJSON &&
                  Object.prototype.hasOwnProperty.call(n, i)
                ) {
                  a[e.name] = s.fromJSON.call(o, t, n[i], a);
                  return;
                }
              }
            a[e.name] = e.init(t, a);
          }
        }),
        a
      );
    }
  };
function Hr(e, t, n) {
  for (let r in e) {
    let i = e[r];
    i instanceof Function
      ? (i = i.bind(t))
      : r == `handleDOMEvents` && (i = Hr(i, t, {})),
      (n[r] = i);
  }
  return n;
}
var k = class {
    constructor(e) {
      (this.spec = e),
        (this.props = {}),
        e.props && Hr(e.props, this, this.props),
        (this.key = e.key ? e.key.key : Wr(`plugin`));
    }
    getState(e) {
      return e[this.key];
    }
  },
  Ur = Object.create(null);
function Wr(e) {
  return e in Ur ? e + `$` + ++Ur[e] : ((Ur[e] = 0), e + `$`);
}
var Gr = class {
    constructor(e = `key`) {
      this.key = Wr(e);
    }
    get(e) {
      return e.config.pluginsByKey[this.key];
    }
    getState(e) {
      return e[this.key];
    }
  },
  A = e(n(), 1),
  Kr = e(t(), 1),
  qr = (e, t) =>
    !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function Jr(e, t) {
  let { $cursor: n } = e.selection;
  return !n || (t ? !t.endOfTextblock(`backward`, e) : n.parentOffset > 0)
    ? null
    : n;
}
var Yr = (e, t, n) => {
  let r = Jr(e, n);
  if (!r) return !1;
  let i = Qr(r);
  if (!i) {
    let n = r.blockRange(),
      i = n && Rn(n);
    return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
  }
  let a = i.nodeBefore;
  if (!a.type.spec.isolating && pi(e, i, t)) return !0;
  if (r.parent.content.size == 0 && (Xr(a, `end`) || O.isSelectable(a))) {
    let n = ir(e.doc, r.before(), r.after(), S.empty);
    if (n && n.slice.size < n.to - n.from) {
      if (t) {
        let r = e.tr.step(n);
        r.setSelection(
          Xr(a, `end`)
            ? E.findFrom(r.doc.resolve(r.mapping.map(i.pos, -1)), -1)
            : O.create(r.doc, i.pos - a.nodeSize),
        ),
          t(r.scrollIntoView());
      }
      return !0;
    }
  }
  return a.isAtom && i.depth == r.depth - 1
    ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0)
    : !1;
};
function Xr(e, t, n = !1) {
  for (let r = e; r; r = t == `start` ? r.firstChild : r.lastChild) {
    if (r.isTextblock) return !0;
    if (n && r.childCount != 1) return !1;
  }
  return !1;
}
var Zr = (e, t, n) => {
  let { $head: r, empty: i } = e.selection,
    a = r;
  if (!i) return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock(`backward`, e) : r.parentOffset > 0) return !1;
    a = Qr(r);
  }
  let o = a && a.nodeBefore;
  return !o || !O.isSelectable(o)
    ? !1
    : (t &&
        t(
          e.tr
            .setSelection(O.create(e.doc, a.pos - o.nodeSize))
            .scrollIntoView(),
        ),
      !0);
};
function Qr(e) {
  if (!e.parent.type.spec.isolating)
    for (let t = e.depth - 1; t >= 0; t--) {
      if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
      if (e.node(t).type.spec.isolating) break;
    }
  return null;
}
function $r(e, t) {
  let { $cursor: n } = e.selection;
  return !n ||
    (t
      ? !t.endOfTextblock(`forward`, e)
      : n.parentOffset < n.parent.content.size)
    ? null
    : n;
}
var ei = (e, t, n) => {
    let r = $r(e, n);
    if (!r) return !1;
    let i = ni(r);
    if (!i) return !1;
    let a = i.nodeAfter;
    if (pi(e, i, t)) return !0;
    if (r.parent.content.size == 0 && (Xr(a, `start`) || O.isSelectable(a))) {
      let n = ir(e.doc, r.before(), r.after(), S.empty);
      if (n && n.slice.size < n.to - n.from) {
        if (t) {
          let r = e.tr.step(n);
          r.setSelection(
            Xr(a, `start`)
              ? E.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1)
              : O.create(r.doc, r.mapping.map(i.pos)),
          ),
            t(r.scrollIntoView());
        }
        return !0;
      }
    }
    return a.isAtom && i.depth == r.depth - 1
      ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0)
      : !1;
  },
  ti = (e, t, n) => {
    let { $head: r, empty: i } = e.selection,
      a = r;
    if (!i) return !1;
    if (r.parent.isTextblock) {
      if (
        n
          ? !n.endOfTextblock(`forward`, e)
          : r.parentOffset < r.parent.content.size
      )
        return !1;
      a = ni(r);
    }
    let o = a && a.nodeAfter;
    return !o || !O.isSelectable(o)
      ? !1
      : (t && t(e.tr.setSelection(O.create(e.doc, a.pos)).scrollIntoView()),
        !0);
  };
function ni(e) {
  if (!e.parent.type.spec.isolating)
    for (let t = e.depth - 1; t >= 0; t--) {
      let n = e.node(t);
      if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
      if (n.type.spec.isolating) break;
    }
  return null;
}
var ri = (e, t) => {
  let { $head: n, $anchor: r } = e.selection;
  return !n.parent.type.spec.code || !n.sameParent(r)
    ? !1
    : (t &&
        t(
          e.tr
            .insertText(`
`)
            .scrollIntoView(),
        ),
      !0);
};
function ii(e) {
  for (let t = 0; t < e.edgeCount; t++) {
    let { type: n } = e.edge(t);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
var ai = (e, t) => {
    let { $head: n, $anchor: r } = e.selection;
    if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
    let i = n.node(-1),
      a = n.indexAfter(-1),
      o = ii(i.contentMatchAt(a));
    if (!o || !i.canReplaceWith(a, a, o)) return !1;
    if (t) {
      let r = n.after(),
        i = e.tr.replaceWith(r, r, o.createAndFill());
      i.setSelection(E.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
    }
    return !0;
  },
  oi = (e, t) => {
    let n = e.selection,
      { $from: r, $to: i } = n;
    if (n instanceof kr || r.parent.inlineContent || i.parent.inlineContent)
      return !1;
    let a = ii(i.parent.contentMatchAt(i.indexAfter()));
    if (!a || !a.isTextblock) return !1;
    if (t) {
      let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos,
        o = e.tr.insert(n, a.createAndFill());
      o.setSelection(D.create(o.doc, n + 1)), t(o.scrollIntoView());
    }
    return !0;
  },
  si = (e, t) => {
    let { $cursor: n } = e.selection;
    if (!n || n.parent.content.size) return !1;
    if (n.depth > 1 && n.after() != n.end(-1)) {
      let r = n.before();
      if (Xn(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
    }
    let r = n.blockRange(),
      i = r && Rn(r);
    return i != null && (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
  };
function ci(e) {
  return (t, n) => {
    let { $from: r, $to: i } = t.selection;
    if (t.selection instanceof O && t.selection.node.isBlock)
      return !r.parentOffset || !Xn(t.doc, r.pos)
        ? !1
        : (n && n(t.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.parent.isBlock) return !1;
    if (n) {
      let a = i.parentOffset == i.parent.content.size,
        o = t.tr;
      (t.selection instanceof D || t.selection instanceof kr) &&
        o.deleteSelection();
      let s =
          r.depth == 0 ? null : ii(r.node(-1).contentMatchAt(r.indexAfter(-1))),
        c = e && e(i.parent, a),
        l = c ? [c] : a && s ? [{ type: s }] : void 0,
        u = Xn(o.doc, o.mapping.map(r.pos), 1, l);
      if (
        (!l &&
          !u &&
          Xn(o.doc, o.mapping.map(r.pos), 1, s ? [{ type: s }] : void 0) &&
          (s && (l = [{ type: s }]), (u = !0)),
        u &&
          (o.split(o.mapping.map(r.pos), 1, l),
          !a && !r.parentOffset && r.parent.type != s))
      ) {
        let e = o.mapping.map(r.before()),
          t = o.doc.resolve(e);
        s &&
          r.node(-1).canReplaceWith(t.index(), t.index() + 1, s) &&
          o.setNodeMarkup(o.mapping.map(r.before()), s);
      }
      n(o.scrollIntoView());
    }
    return !0;
  };
}
var li = ci(),
  ui = (e, t) => {
    let { $from: n, to: r } = e.selection,
      i,
      a = n.sharedDepth(r);
    return (
      a != 0 &&
      ((i = n.before(a)), t && t(e.tr.setSelection(O.create(e.doc, i))), !0)
    );
  },
  di = (e, t) => (t && t(e.tr.setSelection(new kr(e.doc))), !0);
function fi(e, t, n) {
  let r = t.nodeBefore,
    i = t.nodeAfter,
    a = t.index();
  return !r || !i || !r.type.compatibleContent(i.type)
    ? !1
    : !r.content.size && t.parent.canReplace(a - 1, a)
      ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0)
      : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || Qn(e.doc, t.pos))
        ? !1
        : (n &&
            n(
              e.tr
                .clearIncompatible(
                  t.pos,
                  r.type,
                  r.contentMatchAt(r.childCount),
                )
                .join(t.pos)
                .scrollIntoView(),
            ),
          !0);
}
function pi(e, t, n) {
  let r = t.nodeBefore,
    i = t.nodeAfter,
    a,
    o;
  if (r.type.spec.isolating || i.type.spec.isolating) return !1;
  if (fi(e, t, n)) return !0;
  let s = t.parent.canReplace(t.index(), t.index() + 1);
  if (
    s &&
    (a = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) &&
    o.matchType(a[0] || i.type).validEnd
  ) {
    if (n) {
      let o = t.pos + i.nodeSize,
        s = b.empty;
      for (let e = a.length - 1; e >= 0; e--) s = b.from(a[e].create(null, s));
      s = b.from(r.copy(s));
      let c = e.tr.step(
          new T(t.pos - 1, o, t.pos, o, new S(s, 1, 0), a.length, !0),
        ),
        l = o + 2 * a.length;
      Qn(c.doc, l) && c.join(l), n(c.scrollIntoView());
    }
    return !0;
  }
  let c = E.findFrom(t, 1),
    l = c && c.$from.blockRange(c.$to),
    u = l && Rn(l);
  if (u != null && u >= t.depth)
    return n && n(e.tr.lift(l, u).scrollIntoView()), !0;
  if (s && Xr(i, `start`, !0) && Xr(r, `end`)) {
    let a = r,
      o = [];
    for (; o.push(a), !a.isTextblock; ) a = a.lastChild;
    let s = i,
      c = 1;
    for (; !s.isTextblock; s = s.firstChild) c++;
    if (a.canReplace(a.childCount, a.childCount, s.content)) {
      if (n) {
        let r = b.empty;
        for (let e = o.length - 1; e >= 0; e--) r = b.from(o[e].copy(r));
        n(
          e.tr
            .step(
              new T(
                t.pos - o.length,
                t.pos + i.nodeSize,
                t.pos + c,
                t.pos + i.nodeSize - c,
                new S(r, o.length, 0),
                0,
                !0,
              ),
            )
            .scrollIntoView(),
        );
      }
      return !0;
    }
  }
  return !1;
}
function mi(e) {
  return function (t, n) {
    let r = t.selection,
      i = e < 0 ? r.$from : r.$to,
      a = i.depth;
    for (; i.node(a).isInline; ) {
      if (!a) return !1;
      a--;
    }
    return i.node(a).isTextblock
      ? (n &&
          n(t.tr.setSelection(D.create(t.doc, e < 0 ? i.start(a) : i.end(a)))),
        !0)
      : !1;
  };
}
var hi = mi(-1),
  gi = mi(1);
function _i(e, t = null) {
  return function (n, r) {
    let i = !1;
    for (let r = 0; r < n.selection.ranges.length && !i; r++) {
      let {
        $from: { pos: a },
        $to: { pos: o },
      } = n.selection.ranges[r];
      n.doc.nodesBetween(a, o, (r, a) => {
        if (i) return !1;
        if (r.isTextblock && !r.hasMarkup(e, t)) {
          if (r.type == e) i = !0;
          else {
            let t = n.doc.resolve(a),
              r = t.index();
            i = t.parent.canReplaceWith(r, r + 1, e);
          }
        }
      });
    }
    if (!i) return !1;
    if (r) {
      let i = n.tr;
      for (let r = 0; r < n.selection.ranges.length; r++) {
        let {
          $from: { pos: a },
          $to: { pos: o },
        } = n.selection.ranges[r];
        i.setBlockType(a, o, e, t);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
function vi(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    let { $from: i, $to: a } = t[r],
      o = i.depth == 0 && e.inlineContent && e.type.allowsMarkType(n);
    if (
      (e.nodesBetween(i.pos, a.pos, (e) => {
        if (o) return !1;
        o = e.inlineContent && e.type.allowsMarkType(n);
      }),
      o)
    )
      return !0;
  }
  return !1;
}
function yi(e, t = null) {
  return function (n, r) {
    let { empty: i, $cursor: a, ranges: o } = n.selection;
    if ((i && !a) || !vi(n.doc, o, e)) return !1;
    if (r) {
      if (a)
        e.isInSet(n.storedMarks || a.marks())
          ? r(n.tr.removeStoredMark(e))
          : r(n.tr.addStoredMark(e.create(t)));
      else {
        let i = !1,
          a = n.tr;
        for (let t = 0; !i && t < o.length; t++) {
          let { $from: r, $to: a } = o[t];
          i = n.doc.rangeHasMark(r.pos, a.pos, e);
        }
        for (let n = 0; n < o.length; n++) {
          let { $from: r, $to: s } = o[n];
          if (i) a.removeMark(r.pos, s.pos, e);
          else {
            let n = r.pos,
              i = s.pos,
              o = r.nodeAfter,
              c = s.nodeBefore,
              l = o && o.isText ? /^\s*/.exec(o.text)[0].length : 0,
              u = c && c.isText ? /\s*$/.exec(c.text)[0].length : 0;
            n + l < i && ((n += l), (i -= u)), a.addMark(n, i, e.create(t));
          }
        }
        r(a.scrollIntoView());
      }
    }
    return !0;
  };
}
function bi(...e) {
  return function (t, n, r) {
    for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
    return !1;
  };
}
var xi = bi(qr, Yr, Zr),
  Si = bi(qr, ei, ti),
  Ci = {
    Enter: bi(ri, oi, si, li),
    "Mod-Enter": ai,
    Backspace: xi,
    "Mod-Backspace": xi,
    "Shift-Backspace": xi,
    Delete: Si,
    "Mod-Delete": Si,
    "Mod-a": di,
  },
  wi = {
    "Ctrl-h": Ci.Backspace,
    "Alt-Backspace": Ci[`Mod-Backspace`],
    "Ctrl-d": Ci.Delete,
    "Ctrl-Alt-Backspace": Ci[`Mod-Delete`],
    "Alt-Delete": Ci[`Mod-Delete`],
    "Alt-d": Ci[`Mod-Delete`],
    "Ctrl-a": hi,
    "Ctrl-e": gi,
  };
for (let e in Ci) wi[e] = Ci[e];
var Ti = (
    typeof navigator < `u`
      ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
      : typeof os < `u` && os.platform && os.platform() == `darwin`
  )
    ? wi
    : Ci,
  Ei = 200,
  j = function () {};
(j.prototype.append = function (e) {
  return e.length
    ? ((e = j.from(e)),
      (!this.length && e) ||
        (e.length < Ei && this.leafAppend(e)) ||
        (this.length < Ei && e.leafPrepend(this)) ||
        this.appendInner(e))
    : this;
}),
  (j.prototype.prepend = function (e) {
    return e.length ? j.from(e).append(this) : this;
  }),
  (j.prototype.appendInner = function (e) {
    return new Oi(this, e);
  }),
  (j.prototype.slice = function (e, t) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = this.length),
      e >= t
        ? j.empty
        : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
    );
  }),
  (j.prototype.get = function (e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e);
  }),
  (j.prototype.forEach = function (e, t, n) {
    t === void 0 && (t = 0),
      n === void 0 && (n = this.length),
      t <= n
        ? this.forEachInner(e, t, n, 0)
        : this.forEachInvertedInner(e, t, n, 0);
  }),
  (j.prototype.map = function (e, t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.length);
    var r = [];
    return (
      this.forEach(
        function (t, n) {
          return r.push(e(t, n));
        },
        t,
        n,
      ),
      r
    );
  }),
  (j.from = function (e) {
    return e instanceof j ? e : e && e.length ? new Di(e) : j.empty;
  });
var Di = (function (e) {
  function t(t) {
    e.call(this), (this.values = t);
  }
  e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t);
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return (
    (t.prototype.flatten = function () {
      return this.values;
    }),
    (t.prototype.sliceInner = function (e, n) {
      return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
    }),
    (t.prototype.getInner = function (e) {
      return this.values[e];
    }),
    (t.prototype.forEachInner = function (e, t, n, r) {
      for (var i = t; i < n; i++)
        if (e(this.values[i], r + i) === !1) return !1;
    }),
    (t.prototype.forEachInvertedInner = function (e, t, n, r) {
      for (var i = t - 1; i >= n; i--)
        if (e(this.values[i], r + i) === !1) return !1;
    }),
    (t.prototype.leafAppend = function (e) {
      if (this.length + e.length <= Ei)
        return new t(this.values.concat(e.flatten()));
    }),
    (t.prototype.leafPrepend = function (e) {
      if (this.length + e.length <= Ei)
        return new t(e.flatten().concat(this.values));
    }),
    (n.length.get = function () {
      return this.values.length;
    }),
    (n.depth.get = function () {
      return 0;
    }),
    Object.defineProperties(t.prototype, n),
    t
  );
})(j);
j.empty = new Di([]);
var Oi = (function (e) {
    function t(t, n) {
      e.call(this),
        (this.left = t),
        (this.right = n),
        (this.length = t.length + n.length),
        (this.depth = Math.max(t.depth, n.depth) + 1);
    }
    return (
      e && (t.__proto__ = e),
      (t.prototype = Object.create(e && e.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.flatten = function () {
        return this.left.flatten().concat(this.right.flatten());
      }),
      (t.prototype.getInner = function (e) {
        return e < this.left.length
          ? this.left.get(e)
          : this.right.get(e - this.left.length);
      }),
      (t.prototype.forEachInner = function (e, t, n, r) {
        var i = this.left.length;
        if (
          (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1) ||
          (n > i &&
            this.right.forEachInner(
              e,
              Math.max(t - i, 0),
              Math.min(this.length, n) - i,
              r + i,
            ) === !1)
        )
          return !1;
      }),
      (t.prototype.forEachInvertedInner = function (e, t, n, r) {
        var i = this.left.length;
        if (
          (t > i &&
            this.right.forEachInvertedInner(
              e,
              t - i,
              Math.max(n, i) - i,
              r + i,
            ) === !1) ||
          (n < i &&
            this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1)
        )
          return !1;
      }),
      (t.prototype.sliceInner = function (e, t) {
        if (e == 0 && t == this.length) return this;
        var n = this.left.length;
        return t <= n
          ? this.left.slice(e, t)
          : e >= n
            ? this.right.slice(e - n, t - n)
            : this.left.slice(e, n).append(this.right.slice(0, t - n));
      }),
      (t.prototype.leafAppend = function (e) {
        var n = this.right.leafAppend(e);
        if (n) return new t(this.left, n);
      }),
      (t.prototype.leafPrepend = function (e) {
        var n = this.left.leafPrepend(e);
        if (n) return new t(n, this.right);
      }),
      (t.prototype.appendInner = function (e) {
        return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
          ? new t(this.left, new t(this.right, e))
          : new t(this, e);
      }),
      t
    );
  })(j),
  ki = 500,
  Ai = class e {
    constructor(e, t) {
      (this.items = e), (this.eventCount = t);
    }
    popEvent(t, n) {
      if (this.eventCount == 0) return null;
      let r = this.items.length;
      for (; ; r--)
        if (this.items.get(r - 1).selection) {
          --r;
          break;
        }
      let i, a;
      n && ((i = this.remapping(r, this.items.length)), (a = i.maps.length));
      let o = t.tr,
        s,
        c,
        l = [],
        u = [];
      return (
        this.items.forEach(
          (t, n) => {
            if (!t.step)
              i || ((i = this.remapping(r, n + 1)), (a = i.maps.length)),
                a--,
                u.push(t);
            else {
              if (i) {
                u.push(new Mi(t.map));
                let e = t.step.map(i.slice(a)),
                  n;
                e &&
                  o.maybeStep(e).doc &&
                  ((n = o.mapping.maps[o.mapping.maps.length - 1]),
                  l.push(new Mi(n, void 0, void 0, l.length + u.length))),
                  a--,
                  n && i.appendMap(n, a);
              } else o.maybeStep(t.step);
              if (t.selection)
                return (
                  (s = i ? t.selection.map(i.slice(a)) : t.selection),
                  (c = new e(
                    this.items.slice(0, r).append(u.reverse().concat(l)),
                    this.eventCount - 1,
                  )),
                  !1
                );
            }
          },
          this.items.length,
          0,
        ),
        { remaining: c, transform: o, selection: s }
      );
    }
    addTransform(t, n, r, i) {
      let a = [],
        o = this.eventCount,
        s = this.items,
        c = !i && s.length ? s.get(s.length - 1) : null;
      for (let e = 0; e < t.steps.length; e++) {
        let r = t.steps[e].invert(t.docs[e]),
          l = new Mi(t.mapping.maps[e], r, n),
          u;
        (u = c && c.merge(l)) &&
          ((l = u), e ? a.pop() : (s = s.slice(0, s.length - 1))),
          a.push(l),
          (n &&= (o++, void 0)),
          i || (c = l);
      }
      let l = o - r.depth;
      return l > Pi && ((s = ji(s, l)), (o -= l)), new e(s.append(a), o);
    }
    remapping(e, t) {
      let n = new Tn();
      return (
        this.items.forEach(
          (t, r) => {
            let i =
              t.mirrorOffset != null && r - t.mirrorOffset >= e
                ? n.maps.length - t.mirrorOffset
                : void 0;
            n.appendMap(t.map, i);
          },
          e,
          t,
        ),
        n
      );
    }
    addMaps(t) {
      return this.eventCount == 0
        ? this
        : new e(this.items.append(t.map((e) => new Mi(e))), this.eventCount);
    }
    rebased(t, n) {
      if (!this.eventCount) return this;
      let r = [],
        i = Math.max(0, this.items.length - n),
        a = t.mapping,
        o = t.steps.length,
        s = this.eventCount;
      this.items.forEach((e) => {
        e.selection && s--;
      }, i);
      let c = n;
      this.items.forEach((e) => {
        let n = a.getMirror(--c);
        if (n == null) return;
        o = Math.min(o, n);
        let i = a.maps[n];
        if (e.step) {
          let o = t.steps[n].invert(t.docs[n]),
            l = e.selection && e.selection.map(a.slice(c + 1, n));
          l && s++, r.push(new Mi(i, o, l));
        } else r.push(new Mi(i));
      }, i);
      let l = [];
      for (let e = n; e < o; e++) l.push(new Mi(a.maps[e]));
      let u = this.items.slice(0, i).append(l).append(r),
        d = new e(u, s);
      return (
        d.emptyItemCount() > ki &&
          (d = d.compress(this.items.length - r.length)),
        d
      );
    }
    emptyItemCount() {
      let e = 0;
      return (
        this.items.forEach((t) => {
          t.step || e++;
        }),
        e
      );
    }
    compress(t = this.items.length) {
      let n = this.remapping(0, t),
        r = n.maps.length,
        i = [],
        a = 0;
      return (
        this.items.forEach(
          (e, o) => {
            if (o >= t) i.push(e), e.selection && a++;
            else if (e.step) {
              let t = e.step.map(n.slice(r)),
                o = t && t.getMap();
              if ((r--, o && n.appendMap(o, r), t)) {
                let s = e.selection && e.selection.map(n.slice(r));
                s && a++;
                let c = new Mi(o.invert(), t, s),
                  l,
                  u = i.length - 1;
                (l = i.length && i[u].merge(c)) ? (i[u] = l) : i.push(c);
              }
            } else e.map && r--;
          },
          this.items.length,
          0,
        ),
        new e(j.from(i.reverse()), a)
      );
    }
  };
Ai.empty = new Ai(j.empty, 0);
function ji(e, t) {
  let n;
  return (
    e.forEach((e, r) => {
      if (e.selection && t-- == 0) return (n = r), !1;
    }),
    e.slice(n)
  );
}
var Mi = class e {
    constructor(e, t, n, r) {
      (this.map = e),
        (this.step = t),
        (this.selection = n),
        (this.mirrorOffset = r);
    }
    merge(t) {
      if (this.step && t.step && !t.selection) {
        let n = t.step.merge(this.step);
        if (n) return new e(n.getMap().invert(), n, this.selection);
      }
    }
  },
  Ni = class {
    constructor(e, t, n, r, i) {
      (this.done = e),
        (this.undone = t),
        (this.prevRanges = n),
        (this.prevTime = r),
        (this.prevComposition = i);
    }
  },
  Pi = 20;
function Fi(e, t, n, r) {
  let i = n.getMeta(Ui),
    a;
  if (i) return i.historyState;
  n.getMeta(Wi) && (e = new Ni(e.done, e.undone, null, 0, -1));
  let o = n.getMeta(`appendedTransaction`);
  if (n.steps.length == 0) return e;
  if (o && o.getMeta(Ui))
    return o.getMeta(Ui).redo
      ? new Ni(
          e.done.addTransform(n, void 0, r, Hi(t)),
          e.undone,
          Li(n.mapping.maps[n.steps.length - 1]),
          e.prevTime,
          e.prevComposition,
        )
      : new Ni(
          e.done,
          e.undone.addTransform(n, void 0, r, Hi(t)),
          null,
          e.prevTime,
          e.prevComposition,
        );
  if (
    n.getMeta(`addToHistory`) !== !1 &&
    !(o && o.getMeta(`addToHistory`) === !1)
  ) {
    let i = n.getMeta(`composition`),
      a =
        e.prevTime == 0 ||
        (!o &&
          e.prevComposition != i &&
          (e.prevTime < (n.time || 0) - r.newGroupDelay ||
            !Ii(n, e.prevRanges))),
      s = o
        ? Ri(e.prevRanges, n.mapping)
        : Li(n.mapping.maps[n.steps.length - 1]);
    return new Ni(
      e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, Hi(t)),
      Ai.empty,
      s,
      n.time,
      i ?? e.prevComposition,
    );
  }
  return (a = n.getMeta(`rebased`))
    ? new Ni(
        e.done.rebased(n, a),
        e.undone.rebased(n, a),
        Ri(e.prevRanges, n.mapping),
        e.prevTime,
        e.prevComposition,
      )
    : new Ni(
        e.done.addMaps(n.mapping.maps),
        e.undone.addMaps(n.mapping.maps),
        Ri(e.prevRanges, n.mapping),
        e.prevTime,
        e.prevComposition,
      );
}
function Ii(e, t) {
  if (!t) return !1;
  if (!e.docChanged) return !0;
  let n = !1;
  return (
    e.mapping.maps[0].forEach((e, r) => {
      for (let i = 0; i < t.length; i += 2)
        e <= t[i + 1] && r >= t[i] && (n = !0);
    }),
    n
  );
}
function Li(e) {
  let t = [];
  return e.forEach((e, n, r, i) => t.push(r, i)), t;
}
function Ri(e, t) {
  if (!e) return null;
  let n = [];
  for (let r = 0; r < e.length; r += 2) {
    let i = t.map(e[r], 1),
      a = t.map(e[r + 1], -1);
    i <= a && n.push(i, a);
  }
  return n;
}
function zi(e, t, n) {
  let r = Hi(t),
    i = Ui.get(t).spec.config,
    a = (n ? e.undone : e.done).popEvent(t, r);
  if (!a) return null;
  let o = a.selection.resolve(a.transform.doc),
    s = (n ? e.done : e.undone).addTransform(
      a.transform,
      t.selection.getBookmark(),
      i,
      r,
    ),
    c = new Ni(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
  return a.transform.setSelection(o).setMeta(Ui, { redo: n, historyState: c });
}
var Bi = !1,
  Vi = null;
function Hi(e) {
  let t = e.plugins;
  if (Vi != t) {
    (Bi = !1), (Vi = t);
    for (let e = 0; e < t.length; e++)
      if (t[e].spec.historyPreserveItems) {
        Bi = !0;
        break;
      }
  }
  return Bi;
}
var Ui = new Gr(`history`),
  Wi = new Gr(`closeHistory`);
function Gi(e = {}) {
  return (
    (e = { depth: e.depth || 100, newGroupDelay: e.newGroupDelay || 500 }),
    new k({
      key: Ui,
      state: {
        init() {
          return new Ni(Ai.empty, Ai.empty, null, 0, -1);
        },
        apply(t, n, r) {
          return Fi(n, r, t, e);
        },
      },
      config: e,
      props: {
        handleDOMEvents: {
          beforeinput(e, t) {
            let n = t.inputType,
              r = n == `historyUndo` ? qi : n == `historyRedo` ? Ji : null;
            return r ? (t.preventDefault(), r(e.state, e.dispatch)) : !1;
          },
        },
      },
    })
  );
}
function Ki(e, t) {
  return (n, r) => {
    let i = Ui.getState(n);
    if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
    if (r) {
      let a = zi(i, n, e);
      a && r(t ? a.scrollIntoView() : a);
    }
    return !0;
  };
}
var qi = Ki(!1, !0),
  Ji = Ki(!0, !0),
  Yi = class {
    constructor(e, t, n = {}) {
      (this.match = e),
        (this.match = e),
        (this.handler = typeof t == `string` ? Xi(t) : t),
        (this.undoable = n.undoable !== !1),
        (this.inCode = n.inCode || !1);
    }
  };
function Xi(e) {
  return function (t, n, r, i) {
    let a = e;
    if (n[1]) {
      let e = n[0].lastIndexOf(n[1]);
      (a += n[0].slice(e + n[1].length)), (r += e);
      let t = r - i;
      t > 0 && ((a = n[0].slice(e - t, e) + a), (r = i));
    }
    return t.tr.insertText(a, r, i);
  };
}
var Zi = 500;
function Qi({ rules: e }) {
  let t = new k({
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        return e.getMeta(this) || (e.selectionSet || e.docChanged ? null : t);
      },
    },
    props: {
      handleTextInput(n, r, i, a) {
        return $i(n, r, i, a, e, t);
      },
      handleDOMEvents: {
        compositionend: (n) => {
          setTimeout(() => {
            let { $cursor: r } = n.state.selection;
            r && $i(n, r.pos, r.pos, ``, e, t);
          });
        },
      },
    },
    isInputRules: !0,
  });
  return t;
}
function $i(e, t, n, r, i, a) {
  if (e.composing) return !1;
  let o = e.state,
    s = o.doc.resolve(t),
    c =
      s.parent.textBetween(
        Math.max(0, s.parentOffset - Zi),
        s.parentOffset,
        null,
        `￼`,
      ) + r;
  for (let l = 0; l < i.length; l++) {
    let u = i[l];
    if (s.parent.type.spec.code) {
      if (!u.inCode) continue;
    } else if (u.inCode === `only`) continue;
    let d = u.match.exec(c),
      f = d && u.handler(o, d, t - (d[0].length - r.length), n);
    if (f)
      return (
        u.undoable && f.setMeta(a, { transform: f, from: t, to: n, text: r }),
        e.dispatch(f),
        !0
      );
  }
  return !1;
}
var ea = (e, t) => {
  let n = e.plugins;
  for (let r = 0; r < n.length; r++) {
    let i = n[r],
      a;
    if (i.spec.isInputRules && (a = i.getState(e))) {
      if (t) {
        let n = e.tr,
          r = a.transform;
        for (let e = r.steps.length - 1; e >= 0; e--)
          n.step(r.steps[e].invert(r.docs[e]));
        if (a.text) {
          let t = n.doc.resolve(a.from).marks();
          n.replaceWith(a.from, a.to, e.schema.text(a.text, t));
        } else n.delete(a.from, a.to);
        t(n);
      }
      return !0;
    }
  }
  return !1;
};
new Yi(/--$/, `—`),
  new Yi(/\.\.\.$/, `…`),
  new Yi(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, `“`),
  new Yi(/"$/, `”`),
  new Yi(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, `‘`),
  new Yi(/'$/, `’`);
function ta(e, t, n = null, r) {
  return new Yi(e, (e, i, a, o) => {
    let s = n instanceof Function ? n(i) : n,
      c = e.tr.delete(a, o),
      l = c.doc.resolve(a).blockRange(),
      u = l && Bn(l, t, s);
    if (!u) return null;
    c.wrap(l, u);
    let d = c.doc.resolve(a - 1).nodeBefore;
    return (
      d && d.type == t && Qn(c.doc, a - 1) && (!r || r(i, d)) && c.join(a - 1),
      c
    );
  });
}
function na(e, t, n = null) {
  return new Yi(e, (e, r, i, a) => {
    let o = e.doc.resolve(i),
      s = n instanceof Function ? n(r) : n;
    return o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t)
      ? e.tr.delete(i, a).setBlockType(i, i, t, s)
      : null;
  });
}
var M = function (e) {
    for (var t = 0; ; t++) if (((e = e.previousSibling), !e)) return t;
  },
  ra = function (e) {
    let t = e.assignedSlot || e.parentNode;
    return t && t.nodeType == 11 ? t.host : t;
  },
  ia = null,
  aa = function (e, t, n) {
    let r = (ia ||= document.createRange());
    return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
  },
  oa = function () {
    ia = null;
  },
  sa = function (e, t, n, r) {
    return n && (la(e, t, n, r, -1) || la(e, t, n, r, 1));
  },
  ca = /^(img|br|input|textarea|hr)$/i;
function la(e, t, n, r, i) {
  for (;;) {
    if (e == n && t == r) return !0;
    if (t == (i < 0 ? 0 : N(e))) {
      let n = e.parentNode;
      if (
        !n ||
        !P(n) ||
        ma(e) ||
        ca.test(e.nodeName) ||
        e.contentEditable == `false`
      )
        return !1;
      (t = M(e) + (i < 0 ? 0 : 1)), (e = n);
    } else if (P(e)) {
      let n = e.childNodes[t + (i < 0 ? -1 : 0)];
      if (P(n) && n.contentEditable == `false`) {
        if (n.pmViewDesc?.ignoreForSelection) t += i;
        else return !1;
      } else (e = n), (t = i < 0 ? N(e) : 0);
    } else return !1;
  }
}
function N(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function P(e) {
  return e.nodeType == 1;
}
function F(e) {
  return e.nodeType == 3;
}
function ua(e, t) {
  return t ? e.contains(P(t) ? t : t.parentNode) : !1;
}
function da(e, t) {
  for (;;) {
    if (F(e) && t) return e;
    if (P(e) && t > 0) {
      if (e.contentEditable == `false`) return null;
      (e = e.childNodes[t - 1]), (t = N(e));
    } else if (e.parentNode && !ma(e)) (t = M(e)), (e = e.parentNode);
    else return null;
  }
}
function fa(e, t) {
  for (;;) {
    if (F(e) && t < e.nodeValue.length) return e;
    if (P(e) && t < e.childNodes.length) {
      if (e.contentEditable == `false`) return null;
      (e = e.childNodes[t]), (t = 0);
    } else if (e.parentNode && !ma(e)) (t = M(e) + 1), (e = e.parentNode);
    else return null;
  }
}
function pa(e, t, n) {
  for (let r = t == 0, i = t == N(e); r || i; ) {
    if (e == n) return !0;
    let t = M(e);
    if (((e = e.parentNode), !e)) return !1;
    (r &&= t == 0), (i &&= t == N(e));
  }
}
function ma(e) {
  let t;
  for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
  return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var ha = function (e) {
  return (
    e.focusNode && sa(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
  );
};
function ga(e, t) {
  let n = document.createEvent(`Event`);
  return (
    n.initEvent(`keydown`, !0, !0), (n.keyCode = e), (n.key = n.code = t), n
  );
}
function _a(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
  return t;
}
function va(e, t, n) {
  if (e.caretPositionFromPoint)
    try {
      let r = e.caretPositionFromPoint(t, n);
      if (r)
        return {
          node: r.offsetNode,
          offset: Math.min(N(r.offsetNode), r.offset),
        };
    } catch {}
  if (e.caretRangeFromPoint) {
    let r = e.caretRangeFromPoint(t, n);
    if (r)
      return {
        node: r.startContainer,
        offset: Math.min(N(r.startContainer), r.startOffset),
      };
  }
}
var ya = typeof navigator < `u` ? navigator : null,
  ba = typeof document < `u` ? document : null,
  xa = (ya && ya.userAgent) || ``,
  Sa = /Edge\/(\d+)/.exec(xa),
  Ca = /MSIE \d/.exec(xa),
  wa = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(xa),
  I = !!(Ca || wa || Sa),
  Ta = Ca ? document.documentMode : wa ? +wa[1] : Sa ? +Sa[1] : 0,
  L = !I && /gecko\/(\d+)/i.test(xa);
L && +(/Firefox\/(\d+)/.exec(xa) || [0, 0])[1];
var Ea = !I && /Chrome\/(\d+)/.exec(xa),
  R = !!Ea,
  Da = Ea ? +Ea[1] : 0,
  z = !I && !!ya && /Apple Computer/.test(ya.vendor),
  Oa = z && (/Mobile\/\w+/.test(xa) || (!!ya && ya.maxTouchPoints > 2)),
  B = Oa || (ya ? /Mac/.test(ya.platform) : !1),
  ka = ya ? /Win/.test(ya.platform) : !1,
  Aa = /Android \d/.test(xa),
  ja = !!ba && `webkitFontSmoothing` in ba.documentElement.style,
  Ma = ja
    ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
    : 0;
function Na(e) {
  let t = e.defaultView && e.defaultView.visualViewport;
  return t
    ? { left: 0, right: t.width, top: 0, bottom: t.height }
    : {
        left: 0,
        right: e.documentElement.clientWidth,
        top: 0,
        bottom: e.documentElement.clientHeight,
      };
}
function Pa(e, t) {
  return typeof e == `number` ? e : e[t];
}
function Fa(e) {
  let t = e.getBoundingClientRect(),
    n = t.width / e.offsetWidth || 1,
    r = t.height / e.offsetHeight || 1;
  return {
    left: t.left,
    right: t.left + e.clientWidth * n,
    top: t.top,
    bottom: t.top + e.clientHeight * r,
  };
}
function Ia(e, t, n) {
  if (!Za(t) && t.left == 0) return;
  let r = e.someProp(`scrollThreshold`) || 0,
    i = e.someProp(`scrollMargin`) || 5,
    a = e.dom.ownerDocument;
  for (let o = n || e.dom; o; ) {
    if (!P(o)) {
      o = ra(o);
      continue;
    }
    let e = o == a.body,
      n = e ? Na(a) : Fa(o),
      s = 0,
      c = 0;
    if (
      (t.top < n.top + Pa(r, `top`)
        ? (c = -(n.top - t.top + Pa(i, `top`)))
        : t.bottom > n.bottom - Pa(r, `bottom`) &&
          (c =
            t.bottom - t.top > n.bottom - n.top
              ? t.top + Pa(i, `top`) - n.top
              : t.bottom - n.bottom + Pa(i, `bottom`)),
      t.left < n.left + Pa(r, `left`)
        ? (s = -(n.left - t.left + Pa(i, `left`)))
        : t.right > n.right - Pa(r, `right`) &&
          (s = t.right - n.right + Pa(i, `right`)),
      s || c)
    ) {
      if (e) a.defaultView.scrollBy(s, c);
      else {
        let e = o.scrollLeft,
          n = o.scrollTop;
        c && (o.scrollTop += c), s && (o.scrollLeft += s);
        let r = o.scrollLeft - e,
          i = o.scrollTop - n;
        t = {
          left: t.left - r,
          top: t.top - i,
          right: t.right - r,
          bottom: t.bottom - i,
        };
      }
    }
    let l = e ? `fixed` : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(l)) break;
    o = l == `absolute` ? o.offsetParent : ra(o);
  }
}
function La(e) {
  let t = e.dom.getBoundingClientRect(),
    n = Math.max(0, t.top),
    r,
    i;
  for (
    let a = (t.left + t.right) / 2, o = n + 1;
    o < Math.min(innerHeight, t.bottom);
    o += 5
  ) {
    let t = e.root.elementFromPoint(a, o);
    if (!t || t == e.dom || !e.dom.contains(t)) continue;
    let s = t.getBoundingClientRect();
    if (s.top >= n - 20) {
      (r = t), (i = s.top);
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Ra(e.dom) };
}
function Ra(e) {
  let t = [],
    n = e.ownerDocument;
  for (
    let r = e;
    r && (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n);
    r = ra(r)
  );
  return t;
}
function za({ refDOM: e, refTop: t, stack: n }) {
  let r = e ? e.getBoundingClientRect().top : 0;
  Ba(n, r == 0 ? 0 : r - t);
}
function Ba(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { dom: r, top: i, left: a } = e[n];
    r.scrollTop != i + t && (r.scrollTop = i + t),
      r.scrollLeft != a && (r.scrollLeft = a);
  }
}
var Va = null;
function Ha(e) {
  if (e.setActive) return e.setActive();
  if (Va) return e.focus(Va);
  let t = Ra(e);
  e.focus(
    Va == null
      ? {
          get preventScroll() {
            return (Va = { preventScroll: !0 }), !0;
          },
        }
      : void 0,
  ),
    Va || ((Va = !1), Ba(t, 0));
}
function Ua(e, t) {
  let n,
    r = 2e8,
    i,
    a = 0,
    o = t.top,
    s = t.top,
    c,
    l;
  for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let e;
    if (P(u)) e = u.getClientRects();
    else if (F(u)) e = aa(u).getClientRects();
    else continue;
    for (let f = 0; f < e.length; f++) {
      let p = e[f];
      if (p.top <= o && p.bottom >= s) {
        (o = Math.max(p.bottom, o)), (s = Math.min(p.top, s));
        let e =
          p.left > t.left
            ? p.left - t.left
            : p.right < t.left
              ? t.left - p.right
              : 0;
        if (e < r) {
          (n = u),
            (r = e),
            (i =
              e && F(n)
                ? { left: p.right < t.left ? p.right : p.left, top: t.top }
                : t),
            P(u) && e && (a = d + +(t.left >= (p.left + p.right) / 2));
          continue;
        }
      } else
        p.top > t.top &&
          !c &&
          p.left <= t.left &&
          p.right >= t.left &&
          ((c = u),
          (l = {
            left: Math.max(p.left, Math.min(p.right, t.left)),
            top: p.top,
          }));
      !n &&
        ((t.left >= p.right && t.top >= p.top) ||
          (t.left >= p.left && t.top >= p.bottom)) &&
        (a = d + 1);
    }
  }
  return (
    !n && c && ((n = c), (i = l), (r = 0)),
    n && F(n) ? Wa(n, i) : !n || r ? { node: e, offset: a } : Ua(n, i)
  );
}
function Wa(e, t) {
  let n = e.nodeValue.length,
    r = document.createRange(),
    i;
  for (let a = 0; a < n; a++) {
    r.setEnd(e, a + 1), r.setStart(e, a);
    let n = Qa(r, 1);
    if (n.top != n.bottom && Ga(t, n)) {
      i = { node: e, offset: a + +(t.left >= (n.left + n.right) / 2) };
      break;
    }
  }
  return r.detach(), i || { node: e, offset: 0 };
}
function Ga(e, t) {
  return (
    e.left >= t.left - 1 &&
    e.left <= t.right + 1 &&
    e.top >= t.top - 1 &&
    e.top <= t.bottom + 1
  );
}
function Ka(e, t) {
  let n = e.parentNode;
  return n &&
    /^li$/i.test(n.nodeName) &&
    t.left < e.getBoundingClientRect().left
    ? n
    : e;
}
function qa(e, t, n) {
  let { node: r, offset: i } = Ua(t, n),
    a = -1;
  if (P(r) && !r.firstChild) {
    let e = r.getBoundingClientRect();
    a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
  }
  return e.docView.posFromDOM(r, i, a);
}
function Ja(e, t, n, r) {
  let i = -1;
  for (let n = t, a = !1; n != e.dom; ) {
    let t = e.docView.nearestDesc(n, !0),
      o;
    if (!t) return null;
    if (
      P(t.dom) &&
      ((t.node.isBlock && t.parent) || !t.contentDOM) &&
      ((o = t.dom.getBoundingClientRect()).width || o.height) &&
      (t.node.isBlock &&
        t.parent &&
        !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) &&
        ((!a && o.left > r.left) || o.top > r.top
          ? (i = t.posBefore)
          : ((!a && o.right < r.left) || o.bottom < r.top) && (i = t.posAfter),
        (a = !0)),
      !t.contentDOM && i < 0 && !t.node.isText)
    )
      return (
        t.node.isBlock
          ? r.top < (o.top + o.bottom) / 2
          : r.left < (o.left + o.right) / 2
      )
        ? t.posBefore
        : t.posAfter;
    n = t.dom.parentNode;
  }
  return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function Ya(e, t, n) {
  let r = e.childNodes.length;
  if (r && n.top < n.bottom)
    for (
      let i = Math.max(
          0,
          Math.min(
            r - 1,
            Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2,
          ),
        ),
        a = i;
      ;
    ) {
      let n = e.childNodes[a];
      if (P(n)) {
        let e = n.getClientRects();
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          if (Ga(t, i)) return Ya(n, t, i);
        }
      }
      if ((a = (a + 1) % r) == i) break;
    }
  return e;
}
function Xa(e, t) {
  let n = e.dom.ownerDocument,
    r,
    i = 0,
    a = va(n, t.left, t.top);
  a && ({ node: r, offset: i } = a);
  let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(
      t.left,
      t.top,
    ),
    s;
  if (!o || !e.dom.contains(o)) {
    let n = e.dom.getBoundingClientRect();
    if (!Ga(t, n) || ((o = Ya(e.dom, t, n)), !o)) return null;
  }
  if (z) for (let e = o; r && e; e = ra(e)) e.draggable && (r = void 0);
  if (((o = Ka(o, t)), r)) {
    if (
      L &&
      P(r) &&
      ((i = Math.min(i, r.childNodes.length)), i < r.childNodes.length)
    ) {
      let e = r.childNodes[i],
        n;
      e.nodeName == `IMG` &&
        (n = e.getBoundingClientRect()).right <= t.left &&
        n.bottom > t.top &&
        i++;
    }
    let n;
    ja &&
      i &&
      P(r) &&
      P((n = r.childNodes[i - 1])) &&
      n.contentEditable == `false` &&
      n.getBoundingClientRect().top >= t.top &&
      i--,
      r == e.dom &&
      i == r.childNodes.length - 1 &&
      P(r.lastChild) &&
      t.top > r.lastChild.getBoundingClientRect().bottom
        ? (s = e.state.doc.content.size)
        : (i != 0 && P(r) && r.childNodes[i - 1].nodeName == `BR`) ||
          (s = Ja(e, r, i, t));
  }
  s ??= qa(e, o, t);
  let c = e.docView.nearestDesc(o, !0);
  return { pos: s, inside: c ? c.posAtStart - c.border : -1 };
}
function Za(e) {
  return e.top < e.bottom || e.left < e.right;
}
function Qa(e, t) {
  let n = e.getClientRects();
  if (n.length) {
    let e = n[t < 0 ? 0 : n.length - 1];
    if (Za(e)) return e;
  }
  return Array.prototype.find.call(n, Za) || e.getBoundingClientRect();
}
var $a = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function eo(e, t, n) {
  let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
    o = ja || L;
  if (F(r)) {
    if (o && ($a.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let e = Qa(aa(r, i, i), n);
      if (L && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let t = Qa(aa(r, i - 1, i - 1), -1);
        if (t.top == e.top) {
          let n = Qa(aa(r, i, i + 1), -1);
          if (n.top != e.top) return to(n, n.left < t.left);
        }
      }
      return e;
    }
    {
      let e = i,
        t = i,
        a = n < 0 ? 1 : -1;
      return (
        n < 0 && !i
          ? (t++, (a = -1))
          : n >= 0 && i == r.nodeValue.length
            ? (e--, (a = 1))
            : n < 0
              ? e--
              : t++,
        to(Qa(aa(r, e, t), a), a < 0)
      );
    }
  }
  if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
    if (a == null && i && (n < 0 || i == N(r))) {
      let e = r.childNodes[i - 1];
      if (P(e)) return no(e.getBoundingClientRect(), !1);
    }
    if (a == null && i < N(r)) {
      let e = r.childNodes[i];
      if (P(e)) return no(e.getBoundingClientRect(), !0);
    }
    return no(r.getBoundingClientRect(), n >= 0);
  }
  if (a == null && i && (n < 0 || i == N(r))) {
    let e = r.childNodes[i - 1],
      t = F(e)
        ? aa(e, N(e) - +!o)
        : P(e) && (e.nodeName != `BR` || !e.nextSibling)
          ? e
          : null;
    if (t) return to(Qa(t, 1), !1);
  }
  if (a == null && i < N(r)) {
    let e = r.childNodes[i];
    for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; ) e = e.nextSibling;
    let t = e ? (F(e) ? aa(e, 0, +!o) : P(e) ? e : null) : null;
    if (t) return to(Qa(t, -1), !0);
  }
  return to(Qa(F(r) ? aa(r) : r, -n), n >= 0);
}
function to(e, t) {
  if (e.width == 0) return e;
  let n = t ? e.left : e.right;
  return { top: e.top, bottom: e.bottom, left: n, right: n };
}
function no(e, t) {
  if (e.height == 0) return e;
  let n = t ? e.top : e.bottom;
  return { top: n, bottom: n, left: e.left, right: e.right };
}
function ro(e, t, n) {
  let r = e.state,
    i = e.root.activeElement;
  r != t && e.updateState(t), i != e.dom && e.focus();
  try {
    return n();
  } finally {
    r != t && e.updateState(r), i != e.dom && i && i.focus();
  }
}
function io(e, t, n) {
  let r = t.selection,
    i = n == `up` ? r.$from : r.$to;
  return ro(e, t, () => {
    let { node: t } = e.docView.domFromPos(i.pos, n == `up` ? -1 : 1);
    for (;;) {
      let n = e.docView.nearestDesc(t, !0);
      if (!n) break;
      if (n.node.isBlock) {
        t = n.contentDOM || n.dom;
        break;
      }
      t = n.dom.parentNode;
    }
    let r = eo(e, i.pos, 1);
    for (let e = t.firstChild; e; e = e.nextSibling) {
      let t;
      if (P(e)) t = e.getClientRects();
      else if (F(e)) t = aa(e, 0, e.nodeValue.length).getClientRects();
      else continue;
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        if (
          i.bottom > i.top + 1 &&
          (n == `up`
            ? r.top - i.top > (i.bottom - r.top) * 2
            : i.bottom - r.bottom > (r.bottom - i.top) * 2)
        )
          return !1;
      }
    }
    return !0;
  });
}
var ao = /[\u0590-\u08ac]/;
function oo(e, t, n) {
  let { $head: r } = t.selection;
  if (!r.parent.isTextblock) return !1;
  let i = r.parentOffset,
    a = !i,
    o = i == r.parent.content.size,
    s = e.domSelection();
  return s
    ? !ao.test(r.parent.textContent) || !s.modify
      ? n == `left` || n == `backward`
        ? a
        : o
      : ro(e, t, () => {
          let {
              focusNode: t,
              focusOffset: i,
              anchorNode: a,
              anchorOffset: o,
            } = e.domSelectionRange(),
            c = s.caretBidiLevel;
          s.modify(`move`, n, `character`);
          let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
            { focusNode: u, focusOffset: d } = e.domSelectionRange(),
            f = (u && !ua(l, u)) || (t == u && i == d);
          try {
            s.collapse(a, o),
              t && (t != a || i != o) && s.extend && s.extend(t, i);
          } catch {}
          return c != null && (s.caretBidiLevel = c), f;
        })
    : r.pos == r.start() || r.pos == r.end();
}
var so = null,
  co = null,
  lo = !1;
function uo(e, t, n) {
  return so == t && co == n
    ? lo
    : ((so = t),
      (co = n),
      (lo = n == `up` || n == `down` ? io(e, t, n) : oo(e, t, n)));
}
var V = 0,
  fo = 1,
  po = 2,
  mo = 3,
  ho = class {
    constructor(e, t, n, r) {
      (this.parent = e),
        (this.children = t),
        (this.dom = n),
        (this.contentDOM = r),
        (this.dirty = V),
        (n.pmViewDesc = this);
    }
    matchesWidget(e) {
      return !1;
    }
    matchesMark(e) {
      return !1;
    }
    matchesNode(e, t, n) {
      return !1;
    }
    matchesHack(e) {
      return !1;
    }
    parseRule(e) {
      return null;
    }
    stopEvent(e) {
      return !1;
    }
    get size() {
      let e = 0;
      for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
      return e;
    }
    get border() {
      return 0;
    }
    destroy() {
      (this.parent = void 0),
        this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
      for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
    }
    posBeforeChild(e) {
      for (let t = 0, n = this.posAtStart; ; t++) {
        let r = this.children[t];
        if (r == e) return n;
        n += r.size;
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
    localPosFromDOM(e, t, n) {
      if (this.contentDOM && ua(this.contentDOM, e)) {
        if (n < 0) {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t - 1];
          else {
            for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
            n = e.previousSibling;
          }
          for (; n && !((r = n.pmViewDesc) && r.parent == this); )
            n = n.previousSibling;
          return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
        }
        {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t];
          else {
            for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
            n = e.nextSibling;
          }
          for (; n && !((r = n.pmViewDesc) && r.parent == this); )
            n = n.nextSibling;
          return n ? this.posBeforeChild(r) : this.posAtEnd;
        }
      }
      let r;
      if (e == this.dom && this.contentDOM) r = t > M(this.contentDOM);
      else if (
        this.contentDOM &&
        this.contentDOM != this.dom &&
        this.dom.contains(this.contentDOM)
      ) {
        let n = e.compareDocumentPosition(this.contentDOM);
        r =
          n & 16
            ? t >
              Array.from(e.childNodes).findIndex((e) =>
                e.contains(this.contentDOM),
              )
            : !(n & 4);
      } else if (this.dom.firstChild) {
        if (t == 0)
          for (let t = e; ; t = t.parentNode) {
            if (t == this.dom) {
              r = !1;
              break;
            }
            if (t.previousSibling) break;
          }
        if (r == null && t == e.childNodes.length)
          for (let t = e; ; t = t.parentNode) {
            if (t == this.dom) {
              r = !0;
              break;
            }
            if (t.nextSibling) break;
          }
      }
      return (r ?? n > 0) ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(e, t = !1) {
      for (let n = !0, r = e; r; r = r.parentNode) {
        let i = this.getDesc(r),
          a;
        if (i && (!t || i.node)) {
          if (n && (a = i.nodeDOM) && !(P(a) ? ua(a, e) : a == e)) n = !1;
          else return i;
        }
      }
    }
    getDesc(e) {
      let t = e.pmViewDesc;
      for (let e = t; e; e = e.parent) if (e == this) return t;
    }
    posFromDOM(e, t, n) {
      for (let r = e; r; r = r.parentNode) {
        let i = this.getDesc(r);
        if (i) return i.localPosFromDOM(e, t, n);
      }
      return -1;
    }
    descAt(e) {
      for (let t = 0, n = 0; t < this.children.length; t++) {
        let r = this.children[t],
          i = n + r.size;
        if (n == e && i != n) {
          for (; !r.border && r.children.length; )
            for (let e = 0; e < r.children.length; e++) {
              let t = r.children[e];
              if (t.size) {
                r = t;
                break;
              }
            }
          return r;
        }
        if (e < i) return r.descAt(e - n - r.border);
        n = i;
      }
    }
    domFromPos(e, t) {
      if (!this.contentDOM) return { node: this.dom, offset: 0, atom: e + 1 };
      let n = 0,
        r = 0;
      for (let t = 0; n < this.children.length; n++) {
        let i = this.children[n],
          a = t + i.size;
        if (a > e) {
          r = e - t;
          break;
        }
        t = a;
      }
      if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
      for (; n > 0; n--) {
        let e = this.children[n - 1];
        if (e.size || !(e instanceof So || (e instanceof go && e.side >= 0)))
          break;
      }
      if (t <= 0) {
        let e,
          r = !0;
        for (
          ;
          (e = n ? this.children[n - 1] : null),
            e && e.dom.parentNode != this.contentDOM;
          n--, r = !1
        );
        return e && t && r && !e.border && !e.domAtom
          ? e.domFromPos(e.size, t)
          : { node: this.contentDOM, offset: e ? M(e.dom) + 1 : 0 };
      }
      {
        let e,
          r = !0;
        for (
          ;
          (e = n < this.children.length ? this.children[n] : null),
            e && e.dom.parentNode != this.contentDOM;
          n++, r = !1
        );
        return e && r && !e.border && !e.domAtom
          ? e.domFromPos(0, t)
          : {
              node: this.contentDOM,
              offset: e ? M(e.dom) : this.contentDOM.childNodes.length,
            };
      }
    }
    parseRange(e, t, n = 0) {
      if (this.children.length == 0)
        return {
          node: this.contentDOM,
          from: e,
          to: t,
          fromOffset: 0,
          toOffset: this.contentDOM.childNodes.length,
        };
      let r = -1,
        i = -1;
      for (let a = n, o = 0; ; o++) {
        let n = this.children[o],
          s = a + n.size;
        if (r == -1 && e <= s) {
          let i = a + n.border;
          if (
            e >= i &&
            t <= s - n.border &&
            n.node &&
            n.contentDOM &&
            this.contentDOM.contains(n.contentDOM)
          )
            return n.parseRange(e, t, i);
          e = a;
          for (let t = o; t > 0; t--) {
            let n = this.children[t - 1];
            if (
              n.size &&
              n.dom.parentNode == this.contentDOM &&
              !n.emptyChildAt(1)
            ) {
              r = M(n.dom) + 1;
              break;
            }
            e -= n.size;
          }
          r == -1 && (r = 0);
        }
        if (r > -1 && (s > t || o == this.children.length - 1)) {
          t = s;
          for (let e = o + 1; e < this.children.length; e++) {
            let n = this.children[e];
            if (
              n.size &&
              n.dom.parentNode == this.contentDOM &&
              !n.emptyChildAt(-1)
            ) {
              i = M(n.dom);
              break;
            }
            t += n.size;
          }
          i == -1 && (i = this.contentDOM.childNodes.length);
          break;
        }
        a = s;
      }
      return {
        node: this.contentDOM,
        from: e,
        to: t,
        fromOffset: r,
        toOffset: i,
      };
    }
    emptyChildAt(e) {
      if (this.border || !this.contentDOM || !this.children.length) return !1;
      let t = this.children[e < 0 ? 0 : this.children.length - 1];
      return t.size == 0 || t.emptyChildAt(e);
    }
    domAfterPos(e) {
      let { node: t, offset: n } = this.domFromPos(e, 0);
      if (!P(t) || n == t.childNodes.length)
        throw RangeError(`No node after pos ` + e);
      return t.childNodes[n];
    }
    setSelection(e, t, n, r = !1) {
      let i = Math.min(e, t),
        a = Math.max(e, t);
      for (let o = 0, s = 0; o < this.children.length; o++) {
        let c = this.children[o],
          l = s + c.size;
        if (i > s && a < l)
          return c.setSelection(e - s - c.border, t - s - c.border, n, r);
        s = l;
      }
      let o = this.domFromPos(e, e ? -1 : 1),
        s = t == e ? o : this.domFromPos(t, t ? -1 : 1),
        c = n.root.getSelection(),
        l = n.domSelectionRange(),
        u = !1;
      if ((L || z) && e == t) {
        let { node: e, offset: t } = o;
        if (F(e)) {
          if (
            ((u = !!(
              t &&
              e.nodeValue[t - 1] ==
                `
`
            )),
            u && t == e.nodeValue.length)
          )
            for (let t = e, n; t; t = t.parentNode) {
              if ((n = t.nextSibling)) {
                n.nodeName == `BR` &&
                  (o = s = { node: n.parentNode, offset: M(n) + 1 });
                break;
              }
              let e = t.pmViewDesc;
              if (e && e.node && e.node.isBlock) break;
            }
        } else {
          let n = e.childNodes[t - 1];
          u = n && (n.nodeName == `BR` || n.contentEditable == `false`);
        }
      }
      if (L && l.focusNode && l.focusNode != s.node && P(l.focusNode)) {
        let e = l.focusNode.childNodes[l.focusOffset];
        e && e.contentEditable == `false` && (r = !0);
      }
      if (
        !(r || (u && z)) &&
        sa(o.node, o.offset, l.anchorNode, l.anchorOffset) &&
        sa(s.node, s.offset, l.focusNode, l.focusOffset)
      )
        return;
      let d = !1;
      if ((c.extend || e == t) && !(u && L)) {
        c.collapse(o.node, o.offset);
        try {
          e != t && c.extend(s.node, s.offset), (d = !0);
        } catch {}
      }
      if (!d) {
        if (e > t) {
          let e = o;
          (o = s), (s = e);
        }
        let n = document.createRange();
        n.setEnd(s.node, s.offset),
          n.setStart(o.node, o.offset),
          c.removeAllRanges(),
          c.addRange(n);
      }
    }
    ignoreMutation(e) {
      return !this.contentDOM && e.type != `selection`;
    }
    get contentLost() {
      return (
        this.contentDOM &&
        this.contentDOM != this.dom &&
        !this.dom.contains(this.contentDOM)
      );
    }
    markDirty(e, t) {
      for (let n = 0, r = 0; r < this.children.length; r++) {
        let i = this.children[r],
          a = n + i.size;
        if (n == a ? e <= a && t >= n : e < a && t > n) {
          let r = n + i.border,
            o = a - i.border;
          if (e >= r && t <= o) {
            (this.dirty = e == n || t == a ? po : fo),
              e == r &&
              t == o &&
              (i.contentLost || i.dom.parentNode != this.contentDOM)
                ? (i.dirty = mo)
                : i.markDirty(e - r, t - r);
            return;
          }
          i.dirty =
            i.dom == i.contentDOM &&
            i.dom.parentNode == this.contentDOM &&
            !i.children.length
              ? po
              : mo;
        }
        n = a;
      }
      this.dirty = po;
    }
    markParentsDirty() {
      let e = 1;
      for (let t = this.parent; t; t = t.parent, e++) {
        let n = e == 1 ? po : fo;
        t.dirty < n && (t.dirty = n);
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
    isText(e) {
      return !1;
    }
  },
  go = class extends ho {
    constructor(e, t, n, r) {
      let i,
        a = t.type.toDOM;
      if (
        (typeof a == `function` &&
          (a = a(n, () => {
            if (!i) return r;
            if (i.parent) return i.parent.posBeforeChild(i);
          })),
        !t.type.spec.raw)
      ) {
        let e = P(a) ? a : document.createElement(`span`);
        e != a && (e.appendChild(a), (a = e)),
          e.hasAttribute(`contenteditable`) || (e.contentEditable = `false`),
          e.classList.add(`ProseMirror-widget`);
      }
      super(e, [], a, null), (this.widget = t), (this.widget = t), (i = this);
    }
    matchesWidget(e) {
      return this.dirty == V && e.type.eq(this.widget.type);
    }
    parseRule() {
      return { ignore: !0 };
    }
    stopEvent(e) {
      let t = this.widget.spec.stopEvent;
      return t ? t(e) : !1;
    }
    ignoreMutation(e) {
      return e.type != `selection` || this.widget.spec.ignoreSelection;
    }
    destroy() {
      this.widget.type.destroy(this.dom), super.destroy();
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
  _o = class extends ho {
    constructor(e, t, n, r) {
      super(e, [], t, null), (this.textDOM = n), (this.text = r);
    }
    get size() {
      return this.text.length;
    }
    localPosFromDOM(e, t) {
      return e == this.textDOM
        ? this.posAtStart + t
        : this.posAtStart + (t ? this.size : 0);
    }
    domFromPos(e) {
      return { node: this.textDOM, offset: e };
    }
    ignoreMutation(e) {
      return e.type === `characterData` && e.target.nodeValue == e.oldValue;
    }
  },
  vo = class e extends ho {
    constructor(e, t, n, r, i) {
      super(e, [], n, r), (this.mark = t), (this.spec = i);
    }
    static create(t, n, r, i) {
      let a = i.nodeViews[n.type.name],
        o = a && a(n, i, r);
      return (
        (o && o.dom) ||
          (o = sn.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)),
        new e(t, n, o.dom, o.contentDOM || o.dom, o)
      );
    }
    parseRule() {
      return this.dirty & mo || this.mark.type.spec.reparseInView
        ? null
        : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM,
          };
    }
    matchesMark(e) {
      return this.dirty != mo && this.mark.eq(e);
    }
    markDirty(e, t) {
      if ((super.markDirty(e, t), this.dirty != V)) {
        let e = this.parent;
        for (; !e.node; ) e = e.parent;
        e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = V);
      }
    }
    slice(t, n, r) {
      let i = e.create(this.parent, this.mark, !0, r),
        a = this.children,
        o = this.size;
      n < o && (a = zo(a, n, o, r)), t > 0 && (a = zo(a, 0, t, r));
      for (let e = 0; e < a.length; e++) a[e].parent = i;
      return (i.children = a), i;
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation
        ? this.spec.ignoreMutation(e)
        : super.ignoreMutation(e);
    }
    destroy() {
      this.spec.destroy && this.spec.destroy(), super.destroy();
    }
  },
  yo = class e extends ho {
    constructor(e, t, n, r, i, a, o) {
      super(e, [], i, a),
        (this.node = t),
        (this.outerDeco = n),
        (this.innerDeco = r),
        (this.nodeDOM = o);
    }
    static create(t, n, r, i, a, o) {
      let s = a.nodeViews[n.type.name],
        c,
        l =
          s &&
          s(
            n,
            a,
            () => {
              if (!c) return o;
              if (c.parent) return c.parent.posBeforeChild(c);
            },
            r,
            i,
          ),
        u = l && l.dom,
        d = l && l.contentDOM;
      if (n.isText) {
        if (!u) u = document.createTextNode(n.text);
        else if (!F(u))
          throw RangeError(`Text must be rendered as a DOM text node`);
      } else if (!u) {
        let e = sn.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
        ({ dom: u, contentDOM: d } = e);
      }
      !d &&
        !n.isText &&
        u.nodeName != `BR` &&
        (u.hasAttribute(`contenteditable`) || (u.contentEditable = `false`),
        n.type.spec.draggable && (u.draggable = !0));
      let f = u;
      return (
        (u = Ao(u, r, n)),
        l
          ? (c = new Co(t, n, r, i, u, d || null, f, l))
          : n.isText
            ? new xo(t, n, r, i, u, f)
            : new e(t, n, r, i, u, d || null, f)
      );
    }
    parseRule(e) {
      if (this.node.type.spec.reparseInView) return null;
      let t = { node: this.node.type.name, attrs: this.node.attrs };
      if (
        (this.node.type.whitespace == `pre` && (t.preserveWhitespace = `full`),
        !this.contentDOM)
      )
        t.getContent = () => this.node.content;
      else if (!this.contentLost) t.contentElement = this.contentDOM;
      else {
        for (let e = this.children.length - 1; e >= 0; e--) {
          let n = this.children[e];
          if (this.dom.contains(n.dom.parentNode)) {
            t.contentElement = n.dom.parentNode;
            break;
          }
        }
        if (!t.contentElement) {
          let n =
            e &&
            e.find(
              (t) =>
                P(t) && e.indexOf(t.parentNode) < 0 && this.dom.contains(t),
            );
          n ? (t.contentElement = n) : (t.getContent = () => b.empty);
        }
      }
      return t;
    }
    matchesNode(e, t, n) {
      return (
        this.dirty == V &&
        e.eq(this.node) &&
        jo(t, this.outerDeco) &&
        n.eq(this.innerDeco)
      );
    }
    get size() {
      return this.node.nodeSize;
    }
    get border() {
      return +!this.node.isLeaf;
    }
    updateChildren(e, t) {
      let n = this.node.inlineContent,
        r = t,
        i = e.composing ? this.localCompositionInfo(e, t) : null,
        a = i && i.pos > -1 ? i : null,
        o = i && i.pos < 0,
        s = new No(this, a && a.node, e),
        c = this.node.inlineContent,
        l = c && this.node.isBlock;
      Io(
        this.node,
        this.innerDeco,
        (t, i, a) => {
          t.spec.marks
            ? s.syncToMarks(t.spec.marks, n, e, i)
            : t.type.side >= 0 &&
              !a &&
              s.syncToMarks(
                i == this.node.childCount ? x.none : this.node.child(i).marks,
                n,
                e,
                i,
              ),
            s.placeWidget(t, e, r);
        },
        (t, a, u, d) => {
          s.syncToMarks(t.marks, n, e, d),
            l && t.isAtom && !t.isText && s.addHackNode(`IMG`, s.top);
          let f;
          s.findNodeMatch(t, a, u, d) ||
            (o &&
              e.state.selection.from > r &&
              e.state.selection.to < r + t.nodeSize &&
              (f = s.findIndexWithChild(i.node)) > -1 &&
              s.updateNodeAt(t, a, u, f, e)) ||
            s.updateNextNode(t, a, u, e, d, r) ||
            s.addNode(t, a, u, e, r),
            (r += t.nodeSize),
            c && (l = t.isAtom && !t.isText);
        },
      ),
        s.syncToMarks([], n, e, 0),
        this.node.isTextblock && s.addTextblockHacks(),
        s.destroyRest(),
        (s.changed || this.dirty == po) &&
          (a && this.protectLocalComposition(e, a),
          wo(this.contentDOM, this.children, e),
          Oa && Lo(this.dom));
    }
    localCompositionInfo(e, t) {
      let { from: n, to: r } = e.state.selection;
      if (
        !(e.state.selection instanceof D) ||
        n < t ||
        r > t + this.node.content.size
      )
        return null;
      let i = e.input.compositionNode;
      if (!i || !this.dom.contains(i.parentNode)) return null;
      if (this.node.inlineContent) {
        let e = i.nodeValue,
          a = Ro(this.node.content, e, n - t, r - t);
        return a < 0 ? null : { node: i, pos: a, text: e };
      }
      return { node: i, pos: -1, text: `` };
    }
    protectLocalComposition(e, { node: t, pos: n, text: r }) {
      if (this.getDesc(t)) return;
      let i = t;
      for (; i.parentNode != this.contentDOM; i = i.parentNode) {
        for (; i.previousSibling; ) i.parentNode.removeChild(i.previousSibling);
        for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
        i.pmViewDesc && (i.pmViewDesc = void 0);
      }
      let a = new _o(this, i, t, r);
      e.input.compositionNodes.push(a),
        (this.children = zo(this.children, n, n + r.length, e, a));
    }
    update(e, t, n, r) {
      return this.dirty == mo || !e.sameMarkup(this.node)
        ? !1
        : (this.updateInner(e, t, n, r), !0);
    }
    updateInner(e, t, n, r) {
      this.updateOuterDeco(t),
        (this.node = e),
        (this.innerDeco = n),
        this.contentDOM && this.updateChildren(r, this.posAtStart),
        (this.dirty = V);
    }
    updateOuterDeco(e) {
      if (jo(e, this.outerDeco)) return;
      let t = !P(this.nodeDOM),
        n = this.dom;
      (this.dom = Oo(
        this.dom,
        this.nodeDOM,
        Do(this.outerDeco, this.node, t),
        Do(e, this.node, t),
      )),
        this.dom != n &&
          ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
        (this.outerDeco = e);
    }
    selectNode() {
      P(this.nodeDOM) &&
        (this.nodeDOM.classList.add(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) &&
          (this.nodeDOM.draggable = !0));
    }
    deselectNode() {
      P(this.nodeDOM) &&
        (this.nodeDOM.classList.remove(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) &&
          this.nodeDOM.removeAttribute(`draggable`));
    }
    get domAtom() {
      return this.node.isAtom;
    }
  };
function bo(e, t, n, r, i) {
  Ao(r, t, e);
  let a = new yo(void 0, e, t, n, r, r, r);
  return a.contentDOM && a.updateChildren(i, 0), a;
}
var xo = class e extends yo {
    constructor(e, t, n, r, i, a) {
      super(e, t, n, r, i, null, a);
    }
    parseRule() {
      let e = this.nodeDOM.parentNode;
      for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
      return { skip: e || !0 };
    }
    update(e, t, n, r) {
      return this.dirty == mo ||
        (this.dirty != V && !this.inParent()) ||
        !e.sameMarkup(this.node)
        ? !1
        : (this.updateOuterDeco(t),
          (this.dirty != V || e.text != this.node.text) &&
            e.text != this.nodeDOM.nodeValue &&
            ((this.nodeDOM.nodeValue = e.text),
            r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
          (this.node = e),
          (this.dirty = V),
          !0);
    }
    inParent() {
      let e = this.parent.contentDOM;
      for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
      return !1;
    }
    domFromPos(e) {
      return { node: this.nodeDOM, offset: e };
    }
    localPosFromDOM(e, t, n) {
      return e == this.nodeDOM
        ? this.posAtStart + Math.min(t, this.node.text.length)
        : super.localPosFromDOM(e, t, n);
    }
    ignoreMutation(e) {
      return e.type != `characterData` && e.type != `selection`;
    }
    slice(t, n, r) {
      let i = this.node.cut(t, n),
        a = document.createTextNode(i.text);
      return new e(this.parent, i, this.outerDeco, this.innerDeco, a, a);
    }
    markDirty(e, t) {
      super.markDirty(e, t),
        this.dom != this.nodeDOM &&
          (e == 0 || t == this.nodeDOM.nodeValue.length) &&
          (this.dirty = mo);
    }
    get domAtom() {
      return !1;
    }
    isText(e) {
      return this.node.text == e;
    }
  },
  So = class extends ho {
    parseRule() {
      return { ignore: !0 };
    }
    matchesHack(e) {
      return this.dirty == V && this.dom.nodeName == e;
    }
    get domAtom() {
      return !0;
    }
    get ignoreForCoords() {
      return this.dom.nodeName == `IMG`;
    }
  },
  Co = class extends yo {
    constructor(e, t, n, r, i, a, o, s) {
      super(e, t, n, r, i, a, o), (this.spec = s);
    }
    update(e, t, n, r) {
      if (this.dirty == mo) return !1;
      if (
        this.spec.update &&
        (this.node.type == e.type || this.spec.multiType)
      ) {
        let i = this.spec.update(e, t, n);
        return i && this.updateInner(e, t, n, r), i;
      }
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, r);
    }
    selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(e, t, n, r) {
      this.spec.setSelection
        ? this.spec.setSelection(e, t, n.root)
        : super.setSelection(e, t, n, r);
    }
    destroy() {
      this.spec.destroy && this.spec.destroy(), super.destroy();
    }
    stopEvent(e) {
      return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation
        ? this.spec.ignoreMutation(e)
        : super.ignoreMutation(e);
    }
  };
function wo(e, t, n) {
  let r = e.firstChild,
    i = !1;
  for (let a = 0; a < t.length; a++) {
    let o = t[a],
      s = o.dom;
    if (s.parentNode == e) {
      for (; s != r; ) (r = Mo(r)), (i = !0);
      r = r.nextSibling;
    } else (i = !0), e.insertBefore(s, r);
    if (o instanceof vo) {
      let t = r ? r.previousSibling : e.lastChild;
      wo(o.contentDOM, o.children, n), (r = t ? t.nextSibling : e.firstChild);
    }
  }
  for (; r; ) (r = Mo(r)), (i = !0);
  i && n.trackWrites == e && (n.trackWrites = null);
}
var To = function (e) {
  e && (this.nodeName = e);
};
To.prototype = Object.create(null);
var Eo = [new To()];
function Do(e, t, n) {
  if (e.length == 0) return Eo;
  let r = n ? Eo[0] : new To(),
    i = [r];
  for (let a = 0; a < e.length; a++) {
    let o = e[a].type.attrs;
    if (o) {
      o.nodeName && i.push((r = new To(o.nodeName)));
      for (let e in o) {
        let a = o[e];
        a != null &&
          (n &&
            i.length == 1 &&
            i.push((r = new To(t.isInline ? `span` : `div`))),
          e == `class`
            ? (r.class = (r.class ? r.class + ` ` : ``) + a)
            : e == `style`
              ? (r.style = (r.style ? r.style + `;` : ``) + a)
              : e != `nodeName` && (r[e] = a));
      }
    }
  }
  return i;
}
function Oo(e, t, n, r) {
  if (n == Eo && r == Eo) return t;
  let i = t;
  for (let t = 0; t < r.length; t++) {
    let a = r[t],
      o = n[t];
    if (t) {
      let t;
      (o &&
        o.nodeName == a.nodeName &&
        i != e &&
        (t = i.parentNode) &&
        t.nodeName.toLowerCase() == a.nodeName) ||
        ((t = document.createElement(a.nodeName)),
        (t.pmIsDeco = !0),
        t.appendChild(i),
        (o = Eo[0])),
        (i = t);
    }
    ko(i, o || Eo[0], a);
  }
  return i;
}
function ko(e, t, n) {
  for (let r in t)
    r != `class` &&
      r != `style` &&
      r != `nodeName` &&
      !(r in n) &&
      e.removeAttribute(r);
  for (let r in n)
    r != `class` &&
      r != `style` &&
      r != `nodeName` &&
      n[r] != t[r] &&
      e.setAttribute(r, n[r]);
  if (t.class != n.class) {
    let r = t.class ? t.class.split(` `).filter(Boolean) : [],
      i = n.class ? n.class.split(` `).filter(Boolean) : [];
    for (let t = 0; t < r.length; t++)
      i.indexOf(r[t]) == -1 && e.classList.remove(r[t]);
    for (let t = 0; t < i.length; t++)
      r.indexOf(i[t]) == -1 && e.classList.add(i[t]);
    e.classList.length == 0 && e.removeAttribute(`class`);
  }
  if (t.style != n.style) {
    if (t.style) {
      let n =
          /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        r;
      for (; (r = n.exec(t.style)); ) e.style.removeProperty(r[1]);
    }
    n.style && (e.style.cssText += n.style);
  }
}
function Ao(e, t, n) {
  return Oo(e, e, Eo, Do(t, n, !P(e)));
}
function jo(e, t) {
  if (e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
  return !0;
}
function Mo(e) {
  let t = e.nextSibling;
  return e.parentNode.removeChild(e), t;
}
var No = class {
  constructor(e, t, n) {
    (this.lock = t),
      (this.view = n),
      (this.index = 0),
      (this.stack = []),
      (this.changed = !1),
      (this.top = e),
      (this.preMatch = Po(e.node.content, e));
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let n = e; n < t; n++) this.top.children[n].destroy();
      this.top.children.splice(e, t - e), (this.changed = !0);
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, n, r) {
    let i = 0,
      a = this.stack.length >> 1,
      o = Math.min(a, e.length);
    for (
      ;
      i < o &&
      (i == a - 1 ? this.top : this.stack[(i + 1) << 1]).matchesMark(e[i]) &&
      e[i].type.spec.spanning !== !1;
    )
      i++;
    for (; i < a; )
      this.destroyRest(),
        (this.top.dirty = V),
        (this.index = this.stack.pop()),
        (this.top = this.stack.pop()),
        a--;
    for (; a < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let i = -1,
        o = this.top.children.length;
      r < this.preMatch.index && (o = Math.min(this.index + 3, o));
      for (let t = this.index; t < o; t++) {
        let n = this.top.children[t];
        if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
          i = t;
          break;
        }
      }
      if (i < 0 && this.index < this.top.children.length) {
        let t = this.top.children[this.index];
        t instanceof vo &&
          t.dirty != mo &&
          t.mark.type == e[a].type &&
          t.spec.update &&
          !this.isLocked(t.dom) &&
          t.spec.update(e[a]) &&
          ((t.mark = e[a]), (i = this.index), (this.changed = !0));
      }
      if (i > -1)
        i > this.index &&
          ((this.changed = !0), this.destroyBetween(this.index, i)),
          (this.top = this.top.children[this.index]);
      else {
        let r = vo.create(this.top, e[a], t, n);
        this.top.children.splice(this.index, 0, r),
          (this.top = r),
          (this.changed = !0);
      }
      (this.index = 0), a++;
    }
  }
  findNodeMatch(e, t, n, r) {
    let i = -1,
      a;
    if (
      r >= this.preMatch.index &&
      (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top &&
      a.matchesNode(e, t, n)
    )
      i = this.top.children.indexOf(a, this.index);
    else
      for (
        let r = this.index, a = Math.min(this.top.children.length, r + 5);
        r < a;
        r++
      ) {
        let a = this.top.children[r];
        if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
          i = r;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(e, t, n, r, i) {
    let a = this.top.children[r];
    return (
      a.dirty == mo && a.dom == a.contentDOM && (a.dirty = po),
      a.update(e, t, n, i)
        ? (this.destroyBetween(this.index, r), this.index++, !0)
        : !1
    );
  }
  findIndexWithChild(e) {
    for (;;) {
      let t = e.parentNode;
      if (!t) return -1;
      if (t == this.top.contentDOM) {
        let t = e.pmViewDesc;
        if (t) {
          for (let e = this.index; e < this.top.children.length; e++)
            if (this.top.children[e] == t) return e;
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, n, r, i, a) {
    for (let o = this.index; o < this.top.children.length; o++) {
      let s = this.top.children[o];
      if (s instanceof yo) {
        let c = this.preMatch.matched.get(s);
        if (c != null && c != i) return !1;
        let l = s.dom,
          u,
          d =
            this.isLocked(l) &&
            !(
              e.isText &&
              s.node &&
              s.node.isText &&
              s.nodeDOM.nodeValue == e.text &&
              s.dirty != mo &&
              jo(t, s.outerDeco)
            );
        if (!d && s.update(e, t, n, r))
          return (
            this.destroyBetween(this.index, o),
            s.dom != l && (this.changed = !0),
            this.index++,
            !0
          );
        if (!d && (u = this.recreateWrapper(s, e, t, n, r, a)))
          return (
            this.destroyBetween(this.index, o),
            (this.top.children[this.index] = u),
            u.contentDOM &&
              ((u.dirty = po), u.updateChildren(r, a + 1), (u.dirty = V)),
            (this.changed = !0),
            this.index++,
            !0
          );
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e, t, n, r, i, a) {
    if (
      e.dirty ||
      t.isAtom ||
      !e.children.length ||
      !e.node.content.eq(t.content) ||
      !jo(n, e.outerDeco) ||
      !r.eq(e.innerDeco)
    )
      return null;
    let o = yo.create(this.top, t, n, r, i, a);
    if (o.contentDOM) {
      (o.children = e.children), (e.children = []);
      for (let e of o.children) e.parent = o;
    }
    return e.destroy(), o;
  }
  addNode(e, t, n, r, i) {
    let a = yo.create(this.top, e, t, n, r, i);
    a.contentDOM && a.updateChildren(r, i + 1),
      this.top.children.splice(this.index++, 0, a),
      (this.changed = !0);
  }
  placeWidget(e, t, n) {
    let r =
      this.index < this.top.children.length
        ? this.top.children[this.index]
        : null;
    if (
      r &&
      r.matchesWidget(e) &&
      (e == r.widget || !r.widget.type.toDOM.parentNode)
    )
      this.index++;
    else {
      let r = new go(this.top, e, t, n);
      this.top.children.splice(this.index++, 0, r), (this.changed = !0);
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1],
      t = this.top;
    for (; e instanceof vo; ) (t = e), (e = t.children[t.children.length - 1]);
    (!e ||
      !(e instanceof xo) ||
      /\n$/.test(e.node.text) ||
      (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
      ((z || R) &&
        e &&
        e.dom.contentEditable == `false` &&
        this.addHackNode(`IMG`, t),
      this.addHackNode(`BR`, this.top));
  }
  addHackNode(e, t) {
    if (
      t == this.top &&
      this.index < t.children.length &&
      t.children[this.index].matchesHack(e)
    )
      this.index++;
    else {
      let n = document.createElement(e);
      e == `IMG` && ((n.className = `ProseMirror-separator`), (n.alt = ``)),
        e == `BR` && (n.className = `ProseMirror-trailingBreak`);
      let r = new So(this.top, [], n, null);
      t == this.top
        ? t.children.splice(this.index++, 0, r)
        : t.children.push(r),
        (this.changed = !0);
    }
  }
  isLocked(e) {
    return (
      this.lock &&
      (e == this.lock || (P(e) && e.contains(this.lock.parentNode)))
    );
  }
};
function Po(e, t) {
  let n = t,
    r = n.children.length,
    i = e.childCount,
    a = new Map(),
    o = [];
  outer: for (; i > 0; ) {
    let s;
    for (;;)
      if (r) {
        let e = n.children[r - 1];
        if (e instanceof vo) (n = e), (r = e.children.length);
        else {
          (s = e), r--;
          break;
        }
      } else if (n == t) break outer;
      else (r = n.parent.children.indexOf(n)), (n = n.parent);
    let c = s.node;
    if (c) {
      if (c != e.child(i - 1)) break;
      --i, a.set(s, i), o.push(s);
    }
  }
  return { index: i, matched: a, matches: o.reverse() };
}
function Fo(e, t) {
  return e.type.side - t.type.side;
}
function Io(e, t, n, r) {
  let i = t.locals(e),
    a = 0;
  if (i.length == 0) {
    for (let n = 0; n < e.childCount; n++) {
      let o = e.child(n);
      r(o, i, t.forChild(a, o), n), (a += o.nodeSize);
    }
    return;
  }
  let o = 0,
    s = [],
    c = null;
  for (let l = 0; ; ) {
    let u, d;
    for (; o < i.length && i[o].to == a; ) {
      let e = i[o++];
      e.widget && (u ? (d ||= [u]).push(e) : (u = e));
    }
    if (u) {
      if (d) {
        d.sort(Fo);
        for (let e = 0; e < d.length; e++) n(d[e], l, !!c);
      } else n(u, l, !!c);
    }
    let f, p;
    if (c) (p = -1), (f = c), (c = null);
    else if (l < e.childCount) (p = l), (f = e.child(l++));
    else break;
    for (let e = 0; e < s.length; e++) s[e].to <= a && s.splice(e--, 1);
    for (; o < i.length && i[o].from <= a && i[o].to > a; ) s.push(i[o++]);
    let m = a + f.nodeSize;
    if (f.isText) {
      let e = m;
      o < i.length && i[o].from < e && (e = i[o].from);
      for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
      e < m && ((c = f.cut(e - a)), (f = f.cut(0, e - a)), (m = e), (p = -1));
    } else for (; o < i.length && i[o].to < m; ) o++;
    let h = f.isInline && !f.isLeaf ? s.filter((e) => !e.inline) : s.slice();
    r(f, h, t.forChild(a, f), p), (a = m);
  }
}
function Lo(e) {
  if (e.nodeName == `UL` || e.nodeName == `OL`) {
    let t = e.style.cssText;
    (e.style.cssText = t + `; list-style: square !important`),
      window.getComputedStyle(e).listStyle,
      (e.style.cssText = t);
  }
}
function Ro(e, t, n, r) {
  for (let i = 0, a = 0; i < e.childCount && a <= r; ) {
    let o = e.child(i++),
      s = a;
    if (((a += o.nodeSize), !o.isText)) continue;
    let c = o.text;
    for (; i < e.childCount; ) {
      let t = e.child(i++);
      if (((a += t.nodeSize), !t.isText)) break;
      c += t.text;
    }
    if (a >= n) {
      if (a >= r && c.slice(r - t.length - s, r - s) == t) return r - t.length;
      let e = s < r ? c.lastIndexOf(t, r - s - 1) : -1;
      if (e >= 0 && e + t.length + s >= n) return s + e;
      if (
        n == r &&
        c.length >= r + t.length - s &&
        c.slice(r - s, r - s + t.length) == t
      )
        return r;
    }
  }
  return -1;
}
function zo(e, t, n, r, i) {
  let a = [];
  for (let o = 0, s = 0; o < e.length; o++) {
    let c = e[o],
      l = s,
      u = (s += c.size);
    l >= n || u <= t
      ? a.push(c)
      : (l < t && a.push(c.slice(0, t - l, r)),
        (i &&= (a.push(i), void 0)),
        u > n && a.push(c.slice(n - l, c.size, r)));
  }
  return a;
}
function Bo(e, t = null) {
  let n = e.domSelectionRange(),
    r = e.state.doc;
  if (!n.focusNode) return null;
  let i = e.docView.nearestDesc(n.focusNode),
    a = i && i.size == 0,
    o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0) return null;
  let s = r.resolve(o),
    c,
    l;
  if (ha(n)) {
    for (c = o; i && !i.node; ) i = i.parent;
    if (
      i &&
      i.node.isAtom &&
      O.isSelectable(i.node) &&
      i.parent &&
      !(i.node.isInline && pa(n.focusNode, n.focusOffset, i.dom))
    ) {
      let e = i.posBefore;
      l = new O(o == e ? s : r.resolve(e));
    } else if (
      L &&
      t == `key` &&
      o > e.state.selection.to &&
      P(n.focusNode) &&
      n.focusOffset == n.focusNode.childNodes.length &&
      i &&
      i.posAtStart > e.state.selection.to
    )
      for (let e = n.focusNode; ; e = e.parentNode) {
        if (getComputedStyle(e).overflow != `visible`) {
          l = E.findFrom(r.resolve(i.posAtStart), 1);
          break;
        }
        if (e == i.dom || e.nextSibling || !e.parentNode || !P(e.parentNode))
          break;
      }
  } else {
    if (
      n instanceof e.dom.ownerDocument.defaultView.Selection &&
      n.rangeCount > 1
    ) {
      let t = o,
        i = o;
      for (let r = 0; r < n.rangeCount; r++) {
        let a = n.getRangeAt(r);
        (t = Math.min(
          t,
          e.docView.posFromDOM(a.startContainer, a.startOffset, 1),
        )),
          (i = Math.max(
            i,
            e.docView.posFromDOM(a.endContainer, a.endOffset, -1),
          ));
      }
      if (t < 0) return null;
      ([c, o] = i == e.state.selection.anchor ? [i, t] : [t, i]),
        (s = r.resolve(o));
    } else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (c < 0) return null;
  }
  let u = r.resolve(c);
  if (!l) {
    let n = t == `pointer` || (e.state.selection.head < s.pos && !a) ? 1 : -1;
    l = Zo(e, u, s, n);
  }
  return l;
}
function Vo(e) {
  return e.editable
    ? e.hasFocus()
    : $o(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function Ho(e, t = !1) {
  let n = e.state.selection;
  if ((Yo(e, n), !Vo(e))) return;
  let r = e.input.mouseDown;
  if (!t && R && r) {
    let t = e.domSelectionRange(),
      n = e.domObserver.currentSelection;
    if (
      t.anchorNode &&
      n.anchorNode &&
      sa(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) &&
      r.delaySelUpdate()
    ) {
      e.domObserver.setCurSelection();
      return;
    }
  }
  if ((e.domObserver.disconnectSelection(), e.cursorWrapper)) Jo(e);
  else {
    let { anchor: r, head: i } = n,
      a,
      o;
    Uo &&
      !(n instanceof D) &&
      (n.$from.parent.inlineContent || (a = Wo(e, n.from)),
      !n.empty && !n.$from.parent.inlineContent && (o = Wo(e, n.to))),
      e.docView.setSelection(r, i, e, t),
      Uo && (a && Ko(a), o && Ko(o)),
      n.visible
        ? e.dom.classList.remove(`ProseMirror-hideselection`)
        : (e.dom.classList.add(`ProseMirror-hideselection`),
          `onselectionchange` in document && qo(e));
  }
  e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var Uo = z || (R && Da < 63);
function Wo(e, t) {
  let { node: n, offset: r } = e.docView.domFromPos(t, 0),
    i = r < n.childNodes.length ? n.childNodes[r] : null,
    a = r ? n.childNodes[r - 1] : null;
  if (z && i && i.contentEditable == `false`) return Go(i);
  if (
    (!i || i.contentEditable == `false`) &&
    (!a || a.contentEditable == `false`)
  ) {
    if (i) return Go(i);
    if (a) return Go(a);
  }
}
function Go(e) {
  return (
    (e.contentEditable = `true`),
    z && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
    e
  );
}
function Ko(e) {
  (e.contentEditable = `false`),
    (e.wasDraggable &&= ((e.draggable = !0), null));
}
function qo(e) {
  let t = e.dom.ownerDocument;
  t.removeEventListener(`selectionchange`, e.input.hideSelectionGuard);
  let n = e.domSelectionRange(),
    r = n.anchorNode,
    i = n.anchorOffset;
  t.addEventListener(
    `selectionchange`,
    (e.input.hideSelectionGuard = () => {
      (n.anchorNode != r || n.anchorOffset != i) &&
        (t.removeEventListener(`selectionchange`, e.input.hideSelectionGuard),
        setTimeout(() => {
          (!Vo(e) || e.state.selection.visible) &&
            e.dom.classList.remove(`ProseMirror-hideselection`);
        }, 20));
    }),
  );
}
function Jo(e) {
  let t = e.domSelection();
  if (!t) return;
  let n = e.cursorWrapper.dom,
    r = n.nodeName == `IMG`;
  r ? t.collapse(n.parentNode, M(n) + 1) : t.collapse(n, 0),
    !r &&
      !e.state.selection.visible &&
      I &&
      Ta <= 11 &&
      ((n.disabled = !0), (n.disabled = !1));
}
function Yo(e, t) {
  if (t instanceof O) {
    let n = e.docView.descAt(t.from);
    n != e.lastSelectedViewDesc &&
      (Xo(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
  } else Xo(e);
}
function Xo(e) {
  e.lastSelectedViewDesc &&=
    (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(),
    void 0);
}
function Zo(e, t, n, r) {
  return (
    e.someProp(`createSelectionBetween`, (r) => r(e, t, n)) ||
    D.between(t, n, r)
  );
}
function Qo(e) {
  return e.editable && !e.hasFocus() ? !1 : $o(e);
}
function $o(e) {
  let t = e.domSelectionRange();
  if (!t.anchorNode) return !1;
  try {
    return ua(e.dom, t.anchorNode) && (e.editable || ua(e.dom, t.focusNode));
  } catch {
    return !1;
  }
}
function es(e) {
  let t = e.docView.domFromPos(e.state.selection.anchor, 0),
    n = e.domSelectionRange();
  return sa(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function ts(e, t) {
  let { $anchor: n, $head: r } = e.selection,
    i = t > 0 ? n.max(r) : n.min(r),
    a = i.parent.inlineContent
      ? i.depth
        ? e.doc.resolve(t > 0 ? i.after() : i.before())
        : null
      : i;
  return a && E.findFrom(a, t);
}
function ns(e, t) {
  return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function rs(e, t, n) {
  let r = e.state.selection;
  if (r instanceof D) {
    if (n.indexOf(`s`) > -1) {
      let { $head: n } = r,
        i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
      if (!i || i.isText || !i.isLeaf) return !1;
      let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
      return ns(e, new D(r.$anchor, a));
    }
    if (!r.empty) return !1;
    if (e.endOfTextblock(t > 0 ? `forward` : `backward`)) {
      let n = ts(e.state, t);
      return n && n instanceof O ? ns(e, n) : !1;
    }
    if (!B || n.indexOf(`m`) < 0) {
      let n = r.$head,
        i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter,
        a;
      if (!i || i.isText) return !1;
      let o = t < 0 ? n.pos - i.nodeSize : n.pos;
      return i.isAtom || ((a = e.docView.descAt(o)) && !a.contentDOM)
        ? O.isSelectable(i)
          ? ns(e, new O(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n))
          : ns(e, new D(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize)))
        : !1;
    }
  } else if (r instanceof O && r.node.isInline)
    return ns(e, new D(t > 0 ? r.$to : r.$from));
  else {
    let n = ts(e.state, t);
    return n ? ns(e, n) : !1;
  }
}
function is(e, t) {
  let n = e.pmViewDesc;
  return n
    ? n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != `BR`)
    : P(e) && e.contentEditable == `false`;
}
function as(e, t) {
  return t < 0 ? ss(e) : cs(e);
}
function ss(e) {
  let t = e.domSelectionRange(),
    n = t.focusNode,
    r = t.focusOffset;
  if (!n) return;
  let i,
    a,
    o = !1;
  for (L && P(n) && r < N(n) && is(n.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (!P(n)) break;
      let e = n.childNodes[r - 1];
      if (is(e, -1)) (i = n), (a = --r);
      else if (F(e)) (n = e), (r = n.nodeValue.length);
      else break;
    } else if (ls(n)) break;
    else {
      let t = n.previousSibling;
      for (; t && is(t, -1); )
        (i = n.parentNode), (a = M(t)), (t = t.previousSibling);
      if (t) (n = t), (r = N(n));
      else {
        if (((n = n.parentNode), n == e.dom)) break;
        r = 0;
      }
    }
  o ? fs(e, n, r) : i && fs(e, i, a);
}
function cs(e) {
  let t = e.domSelectionRange(),
    n = t.focusNode,
    r = t.focusOffset;
  if (!n) return;
  let i = N(n),
    a,
    o;
  for (;;)
    if (r < i) {
      if (!P(n)) break;
      let e = n.childNodes[r];
      if (is(e, 1)) (a = n), (o = ++r);
      else break;
    } else if (ls(n)) break;
    else {
      let t = n.nextSibling;
      for (; t && is(t, 1); )
        (a = t.parentNode), (o = M(t) + 1), (t = t.nextSibling);
      if (t) (n = t), (r = 0), (i = N(n));
      else {
        if (((n = n.parentNode), n == e.dom)) break;
        r = i = 0;
      }
    }
  a && fs(e, a, o);
}
function ls(e) {
  let t = e.pmViewDesc;
  return t && t.node && t.node.isBlock;
}
function us(e, t) {
  for (; e && t == e.childNodes.length && !ma(e); )
    (t = M(e) + 1), (e = e.parentNode);
  for (; e && t < e.childNodes.length; ) {
    let n = e.childNodes[t];
    if (F(n)) return n;
    if (P(n) && n.contentEditable == `false`) break;
    (e = n), (t = 0);
  }
}
function ds(e, t) {
  for (; e && !t && !ma(e); ) (t = M(e)), (e = e.parentNode);
  for (; e && t; ) {
    let n = e.childNodes[t - 1];
    if (F(n)) return n;
    if (P(n) && n.contentEditable == `false`) break;
    (e = n), (t = e.childNodes.length);
  }
}
function fs(e, t, n) {
  if (!F(t)) {
    let e, r;
    (r = us(t, n))
      ? ((t = r), (n = 0))
      : (e = ds(t, n)) && ((t = e), (n = e.nodeValue.length));
  }
  let r = e.domSelection(),
    i = e.domSelectionRange();
  if (!r) return;
  ha(i)
    ? r.collapse(t, n)
    : r.extend && (r.collapse(i.anchorNode, i.anchorOffset), r.extend(t, n)),
    e.domObserver.setCurSelection();
  let { state: a } = e;
  setTimeout(() => {
    e.state == a && Ho(e);
  }, 50);
}
function ps(e, t) {
  let n = e.state.doc.resolve(t);
  if (!(R || ka) && n.parent.inlineContent) {
    let r = e.coordsAtPos(t);
    if (t > n.start()) {
      let n = e.coordsAtPos(t - 1),
        i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
        return n.left < r.left ? `ltr` : `rtl`;
    }
    if (t < n.end()) {
      let n = e.coordsAtPos(t + 1),
        i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
        return n.left > r.left ? `ltr` : `rtl`;
    }
  }
  let r = e.dom;
  for (let t = n.depth; t > 0; t--)
    if (n.node(t).isBlock) {
      r = e.nodeDOM(n.before(t)) || r;
      break;
    }
  return getComputedStyle(r).direction == `rtl` ? `rtl` : `ltr`;
}
function ms(e, t, n) {
  let r = e.state.selection;
  if (
    (r instanceof D && !r.empty) ||
    n.indexOf(`s`) > -1 ||
    (B && n.indexOf(`m`) > -1)
  )
    return !1;
  let { $from: i, $to: a } = r;
  if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? `up` : `down`)) {
    let n = ts(e.state, t);
    if (n && n instanceof O) return ns(e, n);
  }
  if (!i.parent.inlineContent) {
    let n = t < 0 ? i : a,
      o = r instanceof kr ? E.near(n, t) : E.findFrom(n, t);
    return o ? ns(e, o) : !1;
  }
  return !1;
}
function hs(e, t) {
  if (!(e.state.selection instanceof D)) return !0;
  let { $head: n, $anchor: r, empty: i } = e.state.selection;
  if (!n.sameParent(r)) return !0;
  if (!i) return !1;
  if (e.endOfTextblock(t > 0 ? `forward` : `backward`)) return !0;
  let a = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
  if (a && !a.isText) {
    let r = e.state.tr;
    return (
      t < 0
        ? r.delete(n.pos - a.nodeSize, n.pos)
        : r.delete(n.pos, n.pos + a.nodeSize),
      e.dispatch(r),
      !0
    );
  }
  return !1;
}
function gs(e, t, n) {
  e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
}
function _s(e) {
  if (!z || e.state.selection.$head.parentOffset > 0) return !1;
  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
  if (
    t &&
    P(t) &&
    n == 0 &&
    t.firstChild &&
    P(t.firstChild) &&
    t.firstChild.contentEditable == `false`
  ) {
    let n = t.firstChild;
    gs(e, n, `true`), setTimeout(() => gs(e, n, `false`), 20);
  }
  return !1;
}
function vs(e) {
  let t = ``;
  return (
    e.ctrlKey && (t += `c`),
    e.metaKey && (t += `m`),
    e.altKey && (t += `a`),
    e.shiftKey && (t += `s`),
    t
  );
}
function ys(e, t) {
  let n = t.keyCode,
    r = vs(t);
  if (n == 8 || (B && n == 72 && r == `c`)) return hs(e, -1) || as(e, -1);
  if ((n == 46 && !t.shiftKey) || (B && n == 68 && r == `c`))
    return hs(e, 1) || as(e, 1);
  if (n == 13 || n == 27) return !0;
  if (n == 37 || (B && n == 66 && r == `c`)) {
    let t = n == 37 ? (ps(e, e.state.selection.from) == `ltr` ? -1 : 1) : -1;
    return rs(e, t, r) || as(e, t);
  }
  if (n == 39 || (B && n == 70 && r == `c`)) {
    let t = n == 39 ? (ps(e, e.state.selection.from) == `ltr` ? 1 : -1) : 1;
    return rs(e, t, r) || as(e, t);
  }
  return n == 38 || (B && n == 80 && r == `c`)
    ? ms(e, -1, r) || as(e, -1)
    : n == 40 || (B && n == 78 && r == `c`)
      ? _s(e) || ms(e, 1, r) || as(e, 1)
      : !(r != (B ? `m` : `c`) || (n != 66 && n != 73 && n != 89 && n != 90));
}
function bs(e, t) {
  e.someProp(`transformCopied`, (n) => {
    t = n(t, e);
  });
  let n = [],
    { content: r, openStart: i, openEnd: a } = t;
  for (
    ;
    i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;
  ) {
    i--, a--;
    let e = r.firstChild;
    n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs),
      (r = e.content);
  }
  let o = e.someProp(`clipboardSerializer`) || sn.fromSchema(e.state.schema),
    s = As(),
    c = s.createElement(`div`);
  c.appendChild(o.serializeFragment(r, { document: s }));
  let l = c.firstChild,
    u,
    d = 0;
  for (; l && P(l) && (u = ks[l.nodeName.toLowerCase()]); ) {
    for (let e = u.length - 1; e >= 0; e--) {
      let t = s.createElement(u[e]);
      for (; c.firstChild; ) t.appendChild(c.firstChild);
      c.appendChild(t), d++;
    }
    l = c.firstChild;
  }
  return (
    l &&
      P(l) &&
      l.setAttribute(
        `data-pm-slice`,
        `${i} ${a}${d ? ` -${d}` : ``} ${JSON.stringify(n)}`,
      ),
    {
      dom: c,
      text:
        e.someProp(`clipboardTextSerializer`, (n) => n(t, e)) ||
        t.content.textBetween(
          0,
          t.content.size,
          `

`,
        ),
      slice: t,
    }
  );
}
function xs(e, t, n, r, i) {
  let a = i.parent.type.spec.code,
    o,
    s;
  if (!n && !t) return null;
  let c = !!t && (r || a || !n);
  if (c) {
    if (
      (e.someProp(`transformPastedText`, (n) => {
        t = n(t, a || r, e);
      }),
      a)
    )
      return (
        (s = new S(
          b.from(
            e.state.schema.text(
              t.replace(
                /\r\n?/g,
                `
`,
              ),
            ),
          ),
          0,
          0,
        )),
        e.someProp(`transformPasted`, (t) => {
          s = t(s, e, !0);
        }),
        s
      );
    let n = e.someProp(`clipboardTextParser`, (n) => n(t, i, r, e));
    if (n) s = n;
    else {
      let n = i.marks(),
        { schema: r } = e.state,
        a = sn.fromSchema(r);
      (o = document.createElement(`div`)),
        t.split(/(?:\r\n?|\n)+/).forEach((e) => {
          let t = o.appendChild(document.createElement(`p`));
          e && t.appendChild(a.serializeNode(r.text(e, n)));
        });
    }
  } else
    e.someProp(`transformPastedHTML`, (t) => {
      n = t(n, e);
    }),
      (o = Ns(n)),
      ja && Ps(o);
  let l = o && o.querySelector(`[data-pm-slice]`),
    u =
      l &&
      /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
        l.getAttribute(`data-pm-slice`) || ``,
      );
  if (u && u[3])
    for (let e = +u[3]; e > 0; e--) {
      let e = o.firstChild;
      for (; e && !P(e); ) e = e.nextSibling;
      if (!e) break;
      o = e;
    }
  if (
    ((s ||= (
      e.someProp(`clipboardParser`) ||
      e.someProp(`domParser`) ||
      Kt.fromSchema(e.state.schema)
    ).parseSlice(o, {
      preserveWhitespace: !!(c || u),
      context: i,
      ruleFromNode(e) {
        return e.nodeName == `BR` &&
          !e.nextSibling &&
          e.parentNode &&
          !Ss.test(e.parentNode.nodeName)
          ? { ignore: !0 }
          : null;
      },
    })),
    u)
  )
    s = Fs(Os(s, +u[1], +u[2]), u[4]);
  else if (((s = S.maxOpen(Cs(s.content, i), !0)), s.openStart || s.openEnd)) {
    let e = 0,
      t = 0;
    for (
      let t = s.content.firstChild;
      e < s.openStart && !t.type.spec.isolating;
      e++, t = t.firstChild
    );
    for (
      let e = s.content.lastChild;
      t < s.openEnd && !e.type.spec.isolating;
      t++, e = e.lastChild
    );
    s = Os(s, e, t);
  }
  return (
    e.someProp(`transformPasted`, (t) => {
      s = t(s, e, c);
    }),
    s
  );
}
var Ss =
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Cs(e, t) {
  if (e.childCount < 2) return e;
  for (let n = t.depth; n >= 0; n--) {
    let r = t.node(n).contentMatchAt(t.index(n)),
      i,
      a = [];
    if (
      (e.forEach((e) => {
        if (!a) return;
        let t = r.findWrapping(e.type),
          n;
        if (!t) return (a = null);
        if ((n = a.length && i.length && Ts(t, i, e, a[a.length - 1], 0)))
          a[a.length - 1] = n;
        else {
          a.length && (a[a.length - 1] = Es(a[a.length - 1], i.length));
          let n = ws(e, t);
          a.push(n), (r = r.matchType(n.type)), (i = t);
        }
      }),
      a)
    )
      return b.from(a);
  }
  return e;
}
function ws(e, t, n = 0) {
  for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, b.from(e));
  return e;
}
function Ts(e, t, n, r, i) {
  if (i < e.length && i < t.length && e[i] == t[i]) {
    let a = Ts(e, t, n, r.lastChild, i + 1);
    if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
    if (
      r
        .contentMatchAt(r.childCount)
        .matchType(i == e.length - 1 ? n.type : e[i + 1])
    )
      return r.copy(r.content.append(b.from(ws(n, e, i + 1))));
  }
}
function Es(e, t) {
  if (t == 0) return e;
  let n = e.content.replaceChild(e.childCount - 1, Es(e.lastChild, t - 1)),
    r = e.contentMatchAt(e.childCount).fillBefore(b.empty, !0);
  return e.copy(n.append(r));
}
function Ds(e, t, n, r, i, a) {
  let o = t < 0 ? e.firstChild : e.lastChild,
    s = o.content;
  return (
    e.childCount > 1 && (a = 0),
    i < r - 1 && (s = Ds(s, t, n, r, i + 1, a)),
    i >= n &&
      (s =
        t < 0
          ? o
              .contentMatchAt(0)
              .fillBefore(s, a <= i)
              .append(s)
          : s.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))),
    e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s))
  );
}
function Os(e, t, n) {
  return (
    t < e.openStart &&
      (e = new S(
        Ds(e.content, -1, t, e.openStart, 0, e.openEnd),
        t,
        e.openEnd,
      )),
    n < e.openEnd &&
      (e = new S(Ds(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)),
    e
  );
}
var ks = {
  thead: [`table`],
  tbody: [`table`],
  tfoot: [`table`],
  caption: [`table`],
  colgroup: [`table`],
  col: [`table`, `colgroup`],
  tr: [`table`, `tbody`],
  td: [`table`, `tbody`, `tr`],
  th: [`table`, `tbody`, `tr`],
};
function As() {
  return document.implementation.createHTMLDocument(`title`);
}
var js = null;
function Ms(e) {
  let t = window.trustedTypes;
  if (!t) return e;
  if (!js) {
    if ((js = t.defaultPolicy))
      try {
        return js.createHTML(e);
      } catch {}
    js = t.createPolicy(`ProseMirrorClipboard`, { createHTML: (e) => e });
  }
  return js.createHTML(e);
}
function Ns(e) {
  let t = /^(\s*<meta [^>]*>)*/.exec(e);
  t && (e = e.slice(t[0].length));
  let n = As(),
    r = n.body,
    i = /<([a-z][^>\s]+)/i.exec(e),
    a;
  if (
    ((a = i && ks[i[1].toLowerCase()]) &&
      (e =
        a.map((e) => `<` + e + `>`).join(``) +
        e +
        a
          .map((e) => `</` + e + `>`)
          .reverse()
          .join(``)),
    (r.innerHTML = Ms(e)),
    a)
  )
    for (let e = 0; e < a.length; e++) r = r.querySelector(a[e]) || r;
  for (let e = 0; e < n.styleSheets.length; e++) {
    let t = n.styleSheets[e];
    for (let e = 0; e < t.rules.length; e++) {
      let n = t.rules[e];
      if (n instanceof CSSStyleRule) {
        let e = r.querySelectorAll(n.selectorText);
        for (let t = 0; t < e.length; t++)
          e[t].style.cssText += n.style.cssText;
      }
    }
  }
  return r;
}
function Ps(e) {
  let t = e.querySelectorAll(
    R ? `span:not([class]):not([style])` : `span.Apple-converted-space`,
  );
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    r.childNodes.length == 1 &&
      r.textContent == `\xA0` &&
      r.parentNode &&
      r.parentNode.replaceChild(e.ownerDocument.createTextNode(` `), r);
  }
}
function Fs(e, t) {
  if (!e.size) return e;
  let n = e.content.firstChild.type.schema,
    r;
  try {
    r = JSON.parse(t);
  } catch {
    return e;
  }
  let { content: i, openStart: a, openEnd: o } = e;
  for (let e = r.length - 2; e >= 0; e -= 2) {
    let t = n.nodes[r[e]];
    if (!t || t.hasRequiredAttrs()) break;
    try {
      i = b.from(t.create(r[e + 1], i));
    } catch {
      break;
    }
    a++, o++;
  }
  return new S(i, a, o);
}
var H = {},
  U = {},
  Is = { touchstart: !0, touchmove: !0 },
  Ls = class {
    constructor() {
      (this.shiftKey = !1),
        (this.mouseDown = null),
        (this.lastKeyCode = null),
        (this.lastKeyCodeTime = 0),
        (this.lastClick = { time: 0, x: 0, y: 0, type: ``, button: 0 }),
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
        (this.hideSelectionGuard = null);
    }
  };
function Rs(e) {
  for (let t in H) {
    let n = H[t];
    e.dom.addEventListener(
      t,
      (e.input.eventHandlers[t] = (t) => {
        Us(e, t) && !Hs(e, t) && (e.editable || !(t.type in U)) && n(e, t);
      }),
      Is[t] ? { passive: !0 } : void 0,
    );
  }
  z && e.dom.addEventListener(`input`, () => null), Vs(e);
}
function zs(e, t) {
  (e.input.lastSelectionOrigin = t), (e.input.lastSelectionTime = Date.now());
}
function Bs(e) {
  e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop();
  for (let t in e.input.eventHandlers)
    e.dom.removeEventListener(t, e.input.eventHandlers[t]);
  clearTimeout(e.input.composingTimeout),
    clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function Vs(e) {
  e.someProp(`handleDOMEvents`, (t) => {
    for (let n in t)
      e.input.eventHandlers[n] ||
        e.dom.addEventListener(n, (e.input.eventHandlers[n] = (t) => Hs(e, t)));
  });
}
function Hs(e, t) {
  return e.someProp(`handleDOMEvents`, (n) => {
    let r = n[t.type];
    return r ? r(e, t) || t.defaultPrevented : !1;
  });
}
function Us(e, t) {
  if (!t.bubbles) return !0;
  if (t.defaultPrevented) return !1;
  for (let n = t.target; n != e.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || (n.pmViewDesc && n.pmViewDesc.stopEvent(t)))
      return !1;
  return !0;
}
function Ws(e, t) {
  !Hs(e, t) && H[t.type] && (e.editable || !(t.type in U)) && H[t.type](e, t);
}
(U.keydown = (e, t) => {
  let n = t;
  if (
    ((e.input.shiftKey = n.keyCode == 16 || n.shiftKey),
    !sc(e) &&
      ((e.input.lastKeyCode = n.keyCode),
      (e.input.lastKeyCodeTime = Date.now()),
      !(Aa && R && n.keyCode == 13)))
  ) {
    if (
      (n.keyCode != 229 && e.domObserver.forceFlush(),
      Oa && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey)
    ) {
      let t = Date.now();
      (e.input.lastIOSEnter = t),
        (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
          e.input.lastIOSEnter == t &&
            (e.someProp(`handleKeyDown`, (t) => t(e, ga(13, `Enter`))),
            (e.input.lastIOSEnter = 0));
        }, 200));
    } else
      e.someProp(`handleKeyDown`, (t) => t(e, n)) || ys(e, n)
        ? n.preventDefault()
        : zs(e, `key`);
  }
}),
  (U.keyup = (e, t) => {
    t.keyCode == 16 && (e.input.shiftKey = !1);
  }),
  (U.keypress = (e, t) => {
    let n = t;
    if (sc(e) || !n.charCode || (n.ctrlKey && !n.altKey) || (B && n.metaKey))
      return;
    if (e.someProp(`handleKeyPress`, (t) => t(e, n))) {
      n.preventDefault();
      return;
    }
    let r = e.state.selection;
    if (!(r instanceof D) || !r.$from.sameParent(r.$to)) {
      let t = String.fromCharCode(n.charCode),
        i = () => e.state.tr.insertText(t).scrollIntoView();
      !/[\r\n]/.test(t) &&
        !e.someProp(`handleTextInput`, (n) =>
          n(e, r.$from.pos, r.$to.pos, t, i),
        ) &&
        e.dispatch(i()),
        n.preventDefault();
    }
  });
function Gs(e) {
  return { left: e.clientX, top: e.clientY };
}
function Ks(e, t) {
  let n = t.x - e.clientX,
    r = t.y - e.clientY;
  return n * n + r * r < 100;
}
function qs(e, t, n, r, i) {
  if (r == -1) return !1;
  let a = e.state.doc.resolve(r);
  for (let r = a.depth + 1; r > 0; r--)
    if (
      e.someProp(t, (t) =>
        r > a.depth
          ? t(e, n, a.nodeAfter, a.before(r), i, !0)
          : t(e, n, a.node(r), a.before(r), i, !1),
      )
    )
      return !0;
  return !1;
}
function Js(e, t, n) {
  if ((e.focused || e.focus(), e.state.selection.eq(t))) return;
  let r = e.state.tr.setSelection(t);
  r.setMeta(`pointer`, !0), e.dispatch(r);
}
function Ys(e, t) {
  if (t == -1) return !1;
  let n = e.state.doc.resolve(t),
    r = n.nodeAfter;
  return r && r.isAtom && O.isSelectable(r) ? (Js(e, new O(n)), !0) : !1;
}
function Xs(e, t) {
  if (t == -1) return !1;
  let n = e.state.selection,
    r,
    i;
  n instanceof O && (r = n.node);
  let a = e.state.doc.resolve(t);
  for (let e = a.depth + 1; e > 0; e--) {
    let t = e > a.depth ? a.nodeAfter : a.node(e);
    if (O.isSelectable(t)) {
      i =
        r &&
        n.$from.depth > 0 &&
        e >= n.$from.depth &&
        a.before(n.$from.depth + 1) == n.$from.pos
          ? a.before(n.$from.depth)
          : a.before(e);
      break;
    }
  }
  return i != null && (Js(e, O.create(e.state.doc, i)), !0);
}
function Zs(e, t, n, r, i) {
  return (
    qs(e, `handleClickOn`, t, n, r) ||
    e.someProp(`handleClick`, (n) => n(e, t, r)) ||
    (i ? Xs(e, n) : Ys(e, n))
  );
}
function Qs(e, t, n, r) {
  return (
    qs(e, `handleDoubleClickOn`, t, n, r) ||
    e.someProp(`handleDoubleClick`, (n) => n(e, t, r))
  );
}
function $s(e, t, n, r) {
  return (
    qs(e, `handleTripleClickOn`, t, n, r) ||
    e.someProp(`handleTripleClick`, (n) => n(e, t, r)) ||
    ec(e, n, r)
  );
}
function ec(e, t, n) {
  if (n.button != 0) return !1;
  let r = tc(e, t, !0),
    i = e.state.doc;
  return r
    ? (Js(e, r),
      r instanceof D && i.eq(e.state.doc) && (e.input.mouseDown = new oc(e, r)),
      !0)
    : !1;
}
function tc(e, t, n) {
  let r = e.state.doc;
  if (t == -1) return r.inlineContent ? D.create(r, 0, r.content.size) : null;
  let i = r.resolve(t);
  for (let e = i.depth + 1; e > 0; e--) {
    let t = e > i.depth ? i.nodeAfter : i.node(e),
      a = i.before(e);
    if (t.inlineContent) return D.create(r, a + 1, a + 1 + t.content.size);
    if (n && O.isSelectable(t)) return O.create(r, a);
  }
  return null;
}
function nc(e) {
  return pc(e);
}
var rc = B ? `metaKey` : `ctrlKey`;
H.mousedown = (e, t) => {
  let n = t;
  e.input.shiftKey = n.shiftKey;
  let r = nc(e),
    i = Date.now(),
    a = `singleClick`;
  i - e.input.lastClick.time < 500 &&
    Ks(n, e.input.lastClick) &&
    !n[rc] &&
    e.input.lastClick.button == n.button &&
    (e.input.lastClick.type == `singleClick`
      ? (a = `doubleClick`)
      : e.input.lastClick.type == `doubleClick` && (a = `tripleClick`)),
    (e.input.lastClick = {
      time: i,
      x: n.clientX,
      y: n.clientY,
      type: a,
      button: n.button,
    }),
    e.input.mouseDown && e.input.mouseDown.done();
  let o = e.posAtCoords(Gs(n));
  o &&
    (a == `singleClick`
      ? (e.input.mouseDown = new ac(e, o, n, !!r))
      : (a == `doubleClick` ? Qs : $s)(e, o.pos, o.inside, n)
        ? n.preventDefault()
        : zs(e, `pointer`));
};
var ic = class {
    constructor(e) {
      (this.view = e),
        (this.mightDrag = null),
        e.root.addEventListener(`mouseup`, (this.up = this.up.bind(this))),
        e.root.addEventListener(
          `mousemove`,
          (this.move = this.move.bind(this)),
        );
    }
    up(e) {
      this.done();
    }
    move(e) {
      e.buttons == 0 && this.done();
    }
    done() {
      this.view.root.removeEventListener(`mouseup`, this.up),
        this.view.root.removeEventListener(`mousemove`, this.move),
        this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
    }
    delaySelUpdate() {
      return !1;
    }
  },
  ac = class extends ic {
    constructor(e, t, n, r) {
      super(e),
        (this.pos = t),
        (this.event = n),
        (this.flushed = r),
        (this.delayedSelectionSync = !1),
        (this.startDoc = e.state.doc),
        (this.selectNode = !!n[rc]),
        (this.allowDefault = n.shiftKey);
      let i, a;
      if (t.inside > -1) (i = e.state.doc.nodeAt(t.inside)), (a = t.inside);
      else {
        let n = e.state.doc.resolve(t.pos);
        (i = n.parent), (a = n.depth ? n.before() : 0);
      }
      let o = r ? null : n.target,
        s = o ? e.docView.nearestDesc(o, !0) : null;
      this.target = s && P(s.nodeDOM) ? s.nodeDOM : null;
      let { selection: c } = e.state;
      n.button == 0 &&
        ((i.type.spec.draggable && i.type.spec.selectable !== !1) ||
          (c instanceof O && c.from <= a && c.to > a)) &&
        (this.mightDrag = {
          node: i,
          pos: a,
          addAttr: !(!this.target || this.target.draggable),
          setUneditable: !!(
            this.target &&
            L &&
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
        zs(e, `pointer`);
    }
    done() {
      super.done(),
        this.mightDrag &&
          this.target &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && this.target.removeAttribute(`draggable`),
          this.mightDrag.setUneditable &&
            this.target.removeAttribute(`contentEditable`),
          this.view.domObserver.start()),
        this.delayedSelectionSync &&
          setTimeout(() => {
            this.view.isDestroyed || Ho(this.view);
          });
    }
    up(e) {
      if ((this.done(), !this.view.dom.contains(e.target))) return;
      let t = this.pos;
      this.view.state.doc != this.startDoc &&
        (t = this.view.posAtCoords(Gs(e))),
        this.updateAllowDefault(e),
        this.allowDefault || !t
          ? zs(this.view, `pointer`)
          : Zs(this.view, t.pos, t.inside, e, this.selectNode)
            ? e.preventDefault()
            : e.button == 0 &&
                (this.flushed ||
                  (z && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (R &&
                    !this.view.state.selection.visible &&
                    Math.min(
                      Math.abs(t.pos - this.view.state.selection.from),
                      Math.abs(t.pos - this.view.state.selection.to),
                    ) <= 2))
              ? (Js(this.view, E.near(this.view.state.doc.resolve(t.pos))),
                e.preventDefault())
              : zs(this.view, `pointer`);
    }
    move(e) {
      this.updateAllowDefault(e), zs(this.view, `pointer`), super.move(e);
    }
    updateAllowDefault(e) {
      !this.allowDefault &&
        (Math.abs(this.event.x - e.clientX) > 4 ||
          Math.abs(this.event.y - e.clientY) > 4) &&
        (this.allowDefault = !0);
    }
    delaySelUpdate() {
      return this.allowDefault ? ((this.delayedSelectionSync = !0), !0) : !1;
    }
  },
  oc = class extends ic {
    constructor(e, t) {
      super(e), (this.startSelection = t), (this.startDoc = e.state.doc);
    }
    move(e) {
      if (
        e.buttons == 0 ||
        this.view.isDestroyed ||
        !this.view.state.doc.eq(this.startDoc)
      ) {
        this.done();
        return;
      }
      e.preventDefault(), zs(this.view, `pointer`);
      let t = this.view.posAtCoords(Gs(e)),
        n = t && tc(this.view, t.inside, !1);
      if (!n) return;
      let { doc: r } = this.view.state,
        i = this.startSelection,
        [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
      Js(this.view, D.create(r, a, o));
    }
  };
(H.touchstart = (e) => {
  (e.input.lastTouch = Date.now()), nc(e), zs(e, `pointer`);
}),
  (H.touchmove = (e) => {
    (e.input.lastTouch = Date.now()), zs(e, `pointer`);
  }),
  (H.contextmenu = (e) => nc(e));
function sc(e, t) {
  return e.composing
    ? !0
    : z && Math.abs(Date.now() - e.input.compositionEndedAt) < 500
      ? ((e.input.compositionEndedAt = -2e8), !0)
      : !1;
}
var cc = Aa ? 5e3 : -1;
U.compositionstart = U.compositionupdate = (e) => {
  if (!e.composing) {
    e.domObserver.flush();
    let { state: t } = e,
      n = t.selection.$to;
    if (
      t.selection instanceof D &&
      t.selection.empty &&
      (t.storedMarks ||
        (!n.textOffset &&
          n.parentOffset &&
          n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1)) ||
        (R && ka && lc(e)))
    )
      (e.markCursor = e.state.storedMarks || n.marks()),
        pc(e, !0),
        (e.markCursor = null);
    else if (
      (pc(e, !t.selection.empty),
      L &&
        t.selection.empty &&
        n.parentOffset &&
        !n.textOffset &&
        n.nodeBefore.marks.length)
    ) {
      let t = e.domSelectionRange();
      for (let n = t.focusNode, r = t.focusOffset; n && P(n) && r != 0; ) {
        let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
        if (!t) break;
        if (F(t)) {
          let n = e.domSelection();
          n && n.collapse(t, t.nodeValue.length);
          break;
        }
        (n = t), (r = -1);
      }
    }
    e.input.composing = !0;
  }
  uc(e, cc);
};
function lc(e) {
  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
  if (!t || !P(t) || n >= t.childNodes.length) return !1;
  let r = t.childNodes[n];
  return P(r) && r.contentEditable == `false`;
}
U.compositionend = (e, t) => {
  e.composing &&
    ((e.input.composing = !1),
    (e.input.compositionEndedAt = Date.now()),
    (e.input.compositionPendingChanges = e.domObserver.pendingRecords().length
      ? e.input.compositionID
      : 0),
    (e.input.compositionNode = null),
    e.input.badSafariComposition
      ? e.domObserver.forceFlush()
      : e.input.compositionPendingChanges &&
        Promise.resolve().then(() => e.domObserver.flush()),
    e.input.compositionID++,
    uc(e, 20));
};
function uc(e, t) {
  clearTimeout(e.input.composingTimeout),
    t > -1 && (e.input.composingTimeout = setTimeout(() => pc(e), t));
}
function dc(e) {
  for (
    e.composing &&
    ((e.input.composing = !1), (e.input.compositionEndedAt = Date.now()));
    e.input.compositionNodes.length > 0;
  )
    e.input.compositionNodes.pop().markParentsDirty();
}
function fc(e) {
  let t = e.domSelectionRange();
  if (!t.focusNode) return null;
  let n = da(t.focusNode, t.focusOffset),
    r = fa(t.focusNode, t.focusOffset);
  if (n && r && n != r) {
    let t = r.pmViewDesc,
      i = e.domObserver.lastChangedTextNode;
    if (n == i || r == i) return i;
    if (!t || !t.isText(r.nodeValue)) return r;
    if (e.input.compositionNode == r) {
      let e = n.pmViewDesc;
      if (e && e.isText(n.nodeValue)) return r;
    }
  }
  return n || r;
}
function pc(e, t = !1) {
  if (!(Aa && e.domObserver.flushingSoon >= 0)) {
    if (
      (e.domObserver.forceFlush(), dc(e), t || (e.docView && e.docView.dirty))
    ) {
      let n = Bo(e),
        r = e.state.selection;
      return (
        n && !n.eq(r)
          ? e.dispatch(e.state.tr.setSelection(n))
          : (e.markCursor || t) &&
              !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent
            ? e.dispatch(e.state.tr.deleteSelection())
            : e.updateState(e.state),
        !0
      );
    }
    return !1;
  }
}
function mc(e, t) {
  if (!e.dom.parentNode) return;
  let n = e.dom.parentNode.appendChild(document.createElement(`div`));
  n.appendChild(t),
    (n.style.cssText = `position: fixed; left: -10000px; top: 10px`);
  let r = getSelection(),
    i = document.createRange();
  i.selectNodeContents(t),
    e.dom.blur(),
    r.removeAllRanges(),
    r.addRange(i),
    setTimeout(() => {
      n.parentNode && n.parentNode.removeChild(n), e.focus();
    }, 50);
}
var hc = (I && Ta < 15) || (Oa && Ma < 604);
H.copy = U.cut = (e, t) => {
  let n = t,
    r = e.state.selection,
    i = n.type == `cut`;
  if (r.empty) return;
  let a = hc ? null : n.clipboardData,
    { dom: o, text: s } = bs(e, r.content());
  a
    ? (n.preventDefault(),
      a.clearData(),
      a.setData(`text/html`, o.innerHTML),
      a.setData(`text/plain`, s))
    : mc(e, o),
    i &&
      e.dispatch(
        e.state.tr.deleteSelection().scrollIntoView().setMeta(`uiEvent`, `cut`),
      );
};
function gc(e) {
  return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1
    ? e.content.firstChild
    : null;
}
function _c(e, t) {
  if (!e.dom.parentNode) return;
  let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
    r = e.dom.parentNode.appendChild(
      document.createElement(n ? `textarea` : `div`),
    );
  n || (r.contentEditable = `true`),
    (r.style.cssText = `position: fixed; left: -10000px; top: 10px`),
    r.focus();
  let i = e.input.shiftKey && e.input.lastKeyCode != 45;
  setTimeout(() => {
    e.focus(),
      r.parentNode && r.parentNode.removeChild(r),
      n ? vc(e, r.value, null, i, t) : vc(e, r.textContent, r.innerHTML, i, t);
  }, 50);
}
function vc(e, t, n, r, i) {
  let a = xs(e, t, n, r, e.state.selection.$from);
  if (e.someProp(`handlePaste`, (t) => t(e, i, a || S.empty))) return !0;
  if (!a) return !1;
  let o = gc(a),
    s = o
      ? e.state.tr.replaceSelectionWith(o, r)
      : e.state.tr.replaceSelection(a);
  return (
    e.dispatch(
      s.scrollIntoView().setMeta(`paste`, !0).setMeta(`uiEvent`, `paste`),
    ),
    !0
  );
}
function yc(e) {
  let t = e.getData(`text/plain`) || e.getData(`Text`);
  if (t) return t;
  let n = e.getData(`text/uri-list`);
  return n ? n.replace(/\r?\n/g, ` `) : ``;
}
U.paste = (e, t) => {
  let n = t;
  if (e.composing && !Aa) return;
  let r = hc ? null : n.clipboardData,
    i = e.input.shiftKey && e.input.lastKeyCode != 45;
  r && vc(e, yc(r), r.getData(`text/html`), i, n)
    ? n.preventDefault()
    : _c(e, n);
};
var bc = class {
    constructor(e, t, n) {
      (this.slice = e), (this.move = t), (this.node = n);
    }
  },
  xc = B ? `altKey` : `ctrlKey`;
function Sc(e, t) {
  let n;
  return (
    e.someProp(`dragCopies`, (e) => {
      n ||= e(t);
    }),
    n == null ? !t[xc] : !n
  );
}
(H.dragstart = (e, t) => {
  let n = t,
    r = e.input.mouseDown;
  if ((r && r.done(), !n.dataTransfer)) return;
  let i = e.state.selection,
    a = i.empty ? null : e.posAtCoords(Gs(n)),
    o;
  if (!(a && a.pos >= i.from && a.pos <= (i instanceof O ? i.to - 1 : i.to))) {
    if (r && r.mightDrag) o = O.create(e.state.doc, r.mightDrag.pos);
    else if (n.target && P(n.target)) {
      let t = e.docView.nearestDesc(n.target, !0);
      t &&
        t.node.type.spec.draggable &&
        t != e.docView &&
        (o = O.create(e.state.doc, t.posBefore));
    }
  }
  let { dom: s, text: c, slice: l } = bs(e, (o || e.state.selection).content());
  (!n.dataTransfer.files.length || !R || Da > 120) &&
    n.dataTransfer.clearData(),
    n.dataTransfer.setData(hc ? `Text` : `text/html`, s.innerHTML),
    (n.dataTransfer.effectAllowed = `copyMove`),
    hc || n.dataTransfer.setData(`text/plain`, c),
    (e.dragging = new bc(l, Sc(e, n), o));
}),
  (H.dragend = (e) => {
    let t = e.dragging;
    window.setTimeout(() => {
      e.dragging == t && (e.dragging = null);
    }, 50);
  }),
  (U.dragover = U.dragenter = (e, t) => t.preventDefault()),
  (U.drop = (e, t) => {
    try {
      Cc(e, t, e.dragging);
    } finally {
      e.dragging = null;
    }
  });
function Cc(e, t, n) {
  if (!t.dataTransfer) return;
  let r = e.posAtCoords(Gs(t));
  if (!r) return;
  let i = e.state.doc.resolve(r.pos),
    a = n && n.slice;
  a
    ? e.someProp(`transformPasted`, (t) => {
        a = t(a, e, !1);
      })
    : (a = xs(
        e,
        yc(t.dataTransfer),
        hc ? null : t.dataTransfer.getData(`text/html`),
        !1,
        i,
      ));
  let o = !!(n && Sc(e, t));
  if (e.someProp(`handleDrop`, (n) => n(e, t, a || S.empty, o))) {
    t.preventDefault();
    return;
  }
  if (!a) return;
  t.preventDefault();
  let s = a ? rr(e.state.doc, i.pos, a) : i.pos;
  s ??= i.pos;
  let c = e.state.tr;
  if (o) {
    let { node: e } = n;
    e ? e.replace(c) : c.deleteSelection();
  }
  let l = c.mapping.map(s),
    u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1,
    d = c.doc;
  if (
    (u
      ? c.replaceRangeWith(l, l, a.content.firstChild)
      : c.replaceRange(l, l, a),
    c.doc.eq(d))
  )
    return;
  let f = c.doc.resolve(l);
  if (
    u &&
    O.isSelectable(a.content.firstChild) &&
    f.nodeAfter &&
    f.nodeAfter.sameMarkup(a.content.firstChild)
  )
    c.setSelection(new O(f));
  else {
    let t = c.mapping.map(s);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => (t = i)),
      c.setSelection(Zo(e, f, c.doc.resolve(t)));
  }
  e.focus(), e.dispatch(c.setMeta(`uiEvent`, `drop`));
}
(H.focus = (e) => {
  (e.input.lastFocus = Date.now()),
    e.focused ||
      (e.domObserver.stop(),
      e.dom.classList.add(`ProseMirror-focused`),
      e.domObserver.start(),
      (e.focused = !0),
      setTimeout(() => {
        e.docView &&
          e.hasFocus() &&
          !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
          Ho(e);
      }, 20));
}),
  (H.blur = (e, t) => {
    let n = t;
    e.focused &&=
      (e.domObserver.stop(),
      e.dom.classList.remove(`ProseMirror-focused`),
      e.domObserver.start(),
      n.relatedTarget &&
        e.dom.contains(n.relatedTarget) &&
        e.domObserver.currentSelection.clear(),
      !1);
  }),
  (H.beforeinput = (e, t) => {
    if (Aa && t.inputType == `deleteContentBackward`) {
      e.domObserver.flushSoon();
      let { domChangeCount: t } = e.input;
      setTimeout(() => {
        if (
          e.input.domChangeCount != t ||
          (e.dom.blur(),
          e.focus(),
          e.someProp(`handleKeyDown`, (t) => t(e, ga(8, `Backspace`))))
        )
          return;
        let { $cursor: n } = e.state.selection;
        n &&
          n.pos > 0 &&
          e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
      }, 50);
    }
  });
for (let e in U) H[e] = U[e];
function wc(e, t) {
  if (e == t) return !0;
  for (let n in e) if (e[n] !== t[n]) return !1;
  for (let n in t) if (!(n in e)) return !1;
  return !0;
}
var Tc = class {
    constructor(e) {
      (this.frag = e), (this.index = 0), (this.off = 0);
    }
    nodeAt(e) {
      for (; this.off <= e && this.index < this.frag.childCount; ) {
        let t = this.frag.child(this.index);
        if (this.off == e) return t;
        (this.off += t.nodeSize), this.index++;
      }
      return null;
    }
  },
  Ec = class e {
    constructor(e, t) {
      (this.toDOM = e),
        (this.spec = t || jc),
        (this.side = this.spec.side || 0);
    }
    map(e, t, n, r) {
      let { pos: i, deleted: a } = e.mapResult(
        t.from + r,
        this.side < 0 ? -1 : 1,
      );
      return a ? null : new kc(i - n, i - n, this);
    }
    valid() {
      return !0;
    }
    eq(t) {
      return (
        this == t ||
        (t instanceof e &&
          ((this.spec.key && this.spec.key == t.spec.key) ||
            (this.toDOM == t.toDOM && wc(this.spec, t.spec))))
      );
    }
    destroy(e) {
      this.spec.destroy && this.spec.destroy(e);
    }
  },
  Dc = class e {
    constructor(e, t) {
      (this.attrs = e), (this.spec = t || jc);
    }
    map(e, t, n, r) {
      let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
        a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
      return i >= a ? null : new kc(i, a, this);
    }
    valid(e, t) {
      return t.from < t.to;
    }
    eq(t) {
      return (
        this == t ||
        (t instanceof e && wc(this.attrs, t.attrs) && wc(this.spec, t.spec))
      );
    }
    static is(t) {
      return t.type instanceof e;
    }
    destroy() {}
  },
  Oc = class e {
    constructor(e, t) {
      (this.attrs = e), (this.spec = t || jc);
    }
    map(e, t, n, r) {
      let i = e.mapResult(t.from + r, 1);
      if (i.deleted) return null;
      let a = e.mapResult(t.to + r, -1);
      return a.deleted || a.pos <= i.pos
        ? null
        : new kc(i.pos - n, a.pos - n, this);
    }
    valid(e, t, n) {
      let r = n.nodeAt(t.from);
      return !!r && !r.isText && t.from + r.nodeSize == t.to;
    }
    eq(t) {
      return (
        this == t ||
        (t instanceof e && wc(this.attrs, t.attrs) && wc(this.spec, t.spec))
      );
    }
    destroy() {}
  },
  kc = class e {
    constructor(e, t, n) {
      (this.from = e), (this.to = t), (this.type = n);
    }
    copy(t, n) {
      return new e(t, n, this.type);
    }
    eq(e, t = 0) {
      return (
        this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
      );
    }
    map(e, t, n) {
      return this.type.map(e, this, t, n);
    }
    static widget(t, n, r) {
      return new e(t, t, new Ec(n, r));
    }
    static inline(t, n, r, i) {
      return new e(t, n, new Dc(r, i));
    }
    static node(t, n, r, i) {
      return new e(t, n, new Oc(r, i));
    }
    get spec() {
      return this.type.spec;
    }
    get inline() {
      return this.type instanceof Dc;
    }
    get widget() {
      return this.type instanceof Ec;
    }
  },
  Ac = [],
  jc = {},
  W = class e {
    constructor(e, t) {
      (this.local = e.length ? e : Ac), (this.children = t.length ? t : Ac);
    }
    static create(e, t) {
      return t.length ? Rc(t, e, 0, jc) : G;
    }
    find(e, t, n) {
      let r = [];
      return this.findInner(e ?? 0, t ?? 1e9, r, 0, n), r;
    }
    findInner(e, t, n, r, i) {
      for (let a = 0; a < this.local.length; a++) {
        let o = this.local[a];
        o.from <= t &&
          o.to >= e &&
          (!i || i(o.spec)) &&
          n.push(o.copy(o.from + r, o.to + r));
      }
      for (let a = 0; a < this.children.length; a += 3)
        if (this.children[a] < t && this.children[a + 1] > e) {
          let o = this.children[a] + 1;
          this.children[a + 2].findInner(e - o, t - o, n, r + o, i);
        }
    }
    map(e, t, n) {
      return this == G || e.maps.length == 0
        ? this
        : this.mapInner(e, t, 0, 0, n || jc);
    }
    mapInner(t, n, r, i, a) {
      let o;
      if (this.local.length) {
        let e = new Tc(n.content);
        for (let s = 0; s < this.local.length; s++) {
          let c = this.local[s].map(t, r, i);
          c && c.type.valid(n, c, e)
            ? (o ||= []).push(c)
            : a.onRemove && a.onRemove(this.local[s].spec);
        }
      }
      return this.children.length
        ? Nc(this.children, o || [], t, n, r, i, a)
        : o
          ? new e(o.sort(zc), Ac)
          : G;
    }
    add(t, n) {
      return n.length
        ? this == G
          ? e.create(t, n)
          : this.addInner(t, n, 0)
        : this;
    }
    addInner(t, n, r) {
      let i,
        a = 0;
      t.forEach((e, t) => {
        let o = t + r,
          s;
        if ((s = Ic(n, e, o))) {
          for (i ||= this.children.slice(); a < i.length && i[a] < t; ) a += 3;
          i[a] == t
            ? (i[a + 2] = i[a + 2].addInner(e, s, o + 1))
            : i.splice(a, 0, t, t + e.nodeSize, Rc(s, e, o + 1, jc)),
            (a += 3);
        }
      });
      let o = Pc(a ? Lc(n) : n, -r);
      if (o.length) {
        let e = new Tc(t.content);
        for (let n = 0; n < o.length; n++)
          o[n].type.valid(t, o[n], e) || o.splice(n--, 1);
      }
      return new e(
        o.length ? this.local.concat(o).sort(zc) : this.local,
        i || this.children,
      );
    }
    remove(e) {
      return e.length == 0 || this == G ? this : this.removeInner(e, 0);
    }
    removeInner(t, n) {
      let r = this.children,
        i = this.local;
      for (let e = 0; e < r.length; e += 3) {
        let i,
          a = r[e] + n,
          o = r[e + 1] + n;
        for (let e = 0, n; e < t.length; e++)
          (n = t[e]) &&
            n.from > a &&
            n.to < o &&
            ((t[e] = null), (i ||= []).push(n));
        if (!i) continue;
        r == this.children && (r = this.children.slice());
        let s = r[e + 2].removeInner(i, a + 1);
        s == G ? (r.splice(e, 3), (e -= 3)) : (r[e + 2] = s);
      }
      if (i.length) {
        for (let e = 0, r; e < t.length; e++)
          if ((r = t[e]))
            for (let e = 0; e < i.length; e++)
              i[e].eq(r, n) &&
                (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
      }
      return r == this.children && i == this.local
        ? this
        : i.length || r.length
          ? new e(i, r)
          : G;
    }
    forChild(t, n) {
      if (this == G) return this;
      if (n.isLeaf) return e.empty;
      let r, i;
      for (let e = 0; e < this.children.length; e += 3)
        if (this.children[e] >= t) {
          this.children[e] == t && (r = this.children[e + 2]);
          break;
        }
      let a = t + 1,
        o = a + n.content.size;
      for (let e = 0; e < this.local.length; e++) {
        let t = this.local[e];
        if (t.from < o && t.to > a && t.type instanceof Dc) {
          let e = Math.max(a, t.from) - a,
            n = Math.min(o, t.to) - a;
          e < n && (i ||= []).push(t.copy(e, n));
        }
      }
      if (i) {
        let t = new e(i.sort(zc), Ac);
        return r ? new Mc([t, r]) : t;
      }
      return r || G;
    }
    eq(t) {
      if (this == t) return !0;
      if (
        !(t instanceof e) ||
        this.local.length != t.local.length ||
        this.children.length != t.children.length
      )
        return !1;
      for (let e = 0; e < this.local.length; e++)
        if (!this.local[e].eq(t.local[e])) return !1;
      for (let e = 0; e < this.children.length; e += 3)
        if (
          this.children[e] != t.children[e] ||
          this.children[e + 1] != t.children[e + 1] ||
          !this.children[e + 2].eq(t.children[e + 2])
        )
          return !1;
      return !0;
    }
    locals(e) {
      return Bc(this.localsInner(e));
    }
    localsInner(e) {
      if (this == G) return Ac;
      if (e.inlineContent || !this.local.some(Dc.is)) return this.local;
      let t = [];
      for (let e = 0; e < this.local.length; e++)
        this.local[e].type instanceof Dc || t.push(this.local[e]);
      return t;
    }
    forEachSet(e) {
      e(this);
    }
  };
(W.empty = new W([], [])), (W.removeOverlap = Bc);
var G = W.empty,
  Mc = class e {
    constructor(e) {
      this.members = e;
    }
    map(t, n) {
      let r = this.members.map((e) => e.map(t, n, jc));
      return e.from(r);
    }
    forChild(t, n) {
      if (n.isLeaf) return W.empty;
      let r = [];
      for (let i = 0; i < this.members.length; i++) {
        let a = this.members[i].forChild(t, n);
        a != G && (a instanceof e ? (r = r.concat(a.members)) : r.push(a));
      }
      return e.from(r);
    }
    eq(t) {
      if (!(t instanceof e) || t.members.length != this.members.length)
        return !1;
      for (let e = 0; e < this.members.length; e++)
        if (!this.members[e].eq(t.members[e])) return !1;
      return !0;
    }
    locals(e) {
      let t,
        n = !0;
      for (let r = 0; r < this.members.length; r++) {
        let i = this.members[r].localsInner(e);
        if (i.length) {
          if (!t) t = i;
          else {
            n &&= ((t = t.slice()), !1);
            for (let e = 0; e < i.length; e++) t.push(i[e]);
          }
        }
      }
      return t ? Bc(n ? t : t.sort(zc)) : Ac;
    }
    static from(t) {
      switch (t.length) {
        case 0:
          return G;
        case 1:
          return t[0];
        default:
          return new e(
            t.every((e) => e instanceof W)
              ? t
              : t.reduce(
                  (e, t) => e.concat(t instanceof W ? t : t.members),
                  [],
                ),
          );
      }
    }
    forEachSet(e) {
      for (let t = 0; t < this.members.length; t++)
        this.members[t].forEachSet(e);
    }
  };
function Nc(e, t, n, r, i, a, o) {
  let s = e.slice();
  for (let e = 0, t = a; e < n.maps.length; e++) {
    let r = 0;
    n.maps[e].forEach((e, n, i, a) => {
      let o = a - i - (n - e);
      for (let i = 0; i < s.length; i += 3) {
        let a = s[i + 1];
        if (a < 0 || e > a + t - r) continue;
        let c = s[i] + t - r;
        n >= c
          ? (s[i + 1] = e <= c ? -2 : -1)
          : e >= t && o && ((s[i] += o), (s[i + 1] += o));
      }
      r += o;
    }),
      (t = n.maps[e].map(t, -1));
  }
  let c = !1;
  for (let t = 0; t < s.length; t += 3)
    if (s[t + 1] < 0) {
      if (s[t + 1] == -2) {
        (c = !0), (s[t + 1] = -1);
        continue;
      }
      let l = n.map(e[t] + a),
        u = l - i;
      if (u < 0 || u >= r.content.size) {
        c = !0;
        continue;
      }
      let d = n.map(e[t + 1] + a, -1) - i,
        { index: f, offset: p } = r.content.findIndex(u),
        m = r.maybeChild(f);
      if (m && p == u && p + m.nodeSize == d) {
        let r = s[t + 2].mapInner(n, m, l + 1, e[t] + a + 1, o);
        r == G
          ? ((s[t + 1] = -2), (c = !0))
          : ((s[t] = u), (s[t + 1] = d), (s[t + 2] = r));
      } else c = !0;
    }
  if (c) {
    let c = Rc(Fc(s, e, t, n, i, a, o), r, 0, o);
    t = c.local;
    for (let e = 0; e < s.length; e += 3)
      s[e + 1] < 0 && (s.splice(e, 3), (e -= 3));
    for (let e = 0, t = 0; e < c.children.length; e += 3) {
      let n = c.children[e];
      for (; t < s.length && s[t] < n; ) t += 3;
      s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
    }
  }
  return new W(t.sort(zc), s);
}
function Pc(e, t) {
  if (!t || !e.length) return e;
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    n.push(new kc(i.from + t, i.to + t, i.type));
  }
  return n;
}
function Fc(e, t, n, r, i, a, o) {
  function s(e, t) {
    for (let a = 0; a < e.local.length; a++) {
      let s = e.local[a].map(r, i, t);
      s ? n.push(s) : o.onRemove && o.onRemove(e.local[a].spec);
    }
    for (let n = 0; n < e.children.length; n += 3)
      s(e.children[n + 2], e.children[n] + t + 1);
  }
  for (let n = 0; n < e.length; n += 3)
    e[n + 1] == -1 && s(e[n + 2], t[n] + a + 1);
  return n;
}
function Ic(e, t, n) {
  if (t.isLeaf) return null;
  let r = n + t.nodeSize,
    i = null;
  for (let t = 0, a; t < e.length; t++)
    (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), (e[t] = null));
  return i;
}
function Lc(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
  return t;
}
function Rc(e, t, n, r) {
  let i = [],
    a = !1;
  t.forEach((t, o) => {
    let s = Ic(e, t, o + n);
    if (s) {
      a = !0;
      let e = Rc(s, t, n + o + 1, r);
      e != G && i.push(o, o + t.nodeSize, e);
    }
  });
  let o = Pc(a ? Lc(e) : e, -n).sort(zc);
  if (o.length) {
    let e = new Tc(t.content);
    for (let n = 0; n < o.length; n++)
      o[n].type.valid(t, o[n], e) ||
        (r.onRemove && r.onRemove(o[n].spec), o.splice(n--, 1));
  }
  return o.length || i.length ? new W(o, i) : G;
}
function zc(e, t) {
  return e.from - t.from || e.to - t.to;
}
function Bc(e) {
  let t = e;
  for (let n = 0; n < t.length - 1; n++) {
    let r = t[n];
    if (r.from != r.to)
      for (let i = n + 1; i < t.length; i++) {
        let a = t[i];
        if (a.from == r.from)
          a.to != r.to &&
            (t == e && (t = e.slice()),
            (t[i] = a.copy(a.from, r.to)),
            Vc(t, i + 1, a.copy(r.to, a.to)));
        else {
          a.from < r.to &&
            (t == e && (t = e.slice()),
            (t[n] = r.copy(r.from, a.from)),
            Vc(t, i, r.copy(a.from, r.to)));
          break;
        }
      }
  }
  return t;
}
function Vc(e, t, n) {
  for (; t < e.length && zc(n, e[t]) > 0; ) t++;
  e.splice(t, 0, n);
}
function Hc(e) {
  let t = [];
  return (
    e.someProp(`decorations`, (n) => {
      let r = n(e.state);
      r && r != G && t.push(r);
    }),
    e.cursorWrapper && t.push(W.create(e.state.doc, [e.cursorWrapper.deco])),
    Mc.from(t)
  );
}
var Uc = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0,
  },
  Wc = I && Ta <= 11,
  Gc = class {
    constructor() {
      (this.anchorNode = null),
        (this.anchorOffset = 0),
        (this.focusNode = null),
        (this.focusOffset = 0);
    }
    set(e) {
      (this.anchorNode = e.anchorNode),
        (this.anchorOffset = e.anchorOffset),
        (this.focusNode = e.focusNode),
        (this.focusOffset = e.focusOffset);
    }
    clear() {
      this.anchorNode = this.focusNode = null;
    }
    eq(e) {
      return (
        e.anchorNode == this.anchorNode &&
        e.anchorOffset == this.anchorOffset &&
        e.focusNode == this.focusNode &&
        e.focusOffset == this.focusOffset
      );
    }
  },
  Kc = class {
    constructor(e, t) {
      (this.view = e),
        (this.handleDOMChange = t),
        (this.queue = []),
        (this.flushingSoon = -1),
        (this.observer = null),
        (this.currentSelection = new Gc()),
        (this.onCharData = null),
        (this.suppressingSelectionUpdates = !1),
        (this.lastChangedTextNode = null),
        (this.observer =
          window.MutationObserver &&
          new window.MutationObserver((t) => {
            for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
            I &&
            Ta <= 11 &&
            t.some(
              (e) =>
                (e.type == `childList` && e.removedNodes.length) ||
                (e.type == `characterData` &&
                  e.oldValue.length > e.target.nodeValue.length),
            )
              ? this.flushSoon()
              : z &&
                  e.composing &&
                  t.some(
                    (e) => e.type == `childList` && e.target.nodeName == `TR`,
                  )
                ? ((e.input.badSafariComposition = !0), this.flushSoon())
                : this.flush();
          })),
        Wc &&
          (this.onCharData = (e) => {
            this.queue.push({
              target: e.target,
              type: `characterData`,
              oldValue: e.prevValue,
            }),
              this.flushSoon();
          }),
        (this.onSelectionChange = this.onSelectionChange.bind(this));
    }
    flushSoon() {
      this.flushingSoon < 0 &&
        (this.flushingSoon = window.setTimeout(() => {
          (this.flushingSoon = -1), this.flush();
        }, 20));
    }
    forceFlush() {
      this.flushingSoon > -1 &&
        (window.clearTimeout(this.flushingSoon),
        (this.flushingSoon = -1),
        this.flush());
    }
    start() {
      this.observer &&
        (this.observer.takeRecords(), this.observer.observe(this.view.dom, Uc)),
        this.onCharData &&
          this.view.dom.addEventListener(
            `DOMCharacterDataModified`,
            this.onCharData,
          ),
        this.connectSelection();
    }
    stop() {
      if (this.observer) {
        let e = this.observer.takeRecords();
        if (e.length) {
          for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
          window.setTimeout(() => this.flush(), 20);
        }
        this.observer.disconnect();
      }
      this.onCharData &&
        this.view.dom.removeEventListener(
          `DOMCharacterDataModified`,
          this.onCharData,
        ),
        this.disconnectSelection();
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
      (this.suppressingSelectionUpdates = !0),
        setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
    }
    onSelectionChange() {
      if (Qo(this.view)) {
        if (this.suppressingSelectionUpdates) return Ho(this.view);
        if (I && Ta <= 11 && !this.view.state.selection.empty) {
          let e = this.view.domSelectionRange();
          if (
            e.focusNode &&
            sa(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
          )
            return this.flushSoon();
        }
        this.flush();
      }
    }
    setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(e) {
      if (!e.focusNode) return !0;
      let t = new Set(),
        n;
      for (let n = e.focusNode; n; n = ra(n)) t.add(n);
      for (let r = e.anchorNode; r; r = ra(r))
        if (t.has(r)) {
          n = r;
          break;
        }
      let r = n && this.view.docView.nearestDesc(n);
      if (
        r &&
        r.ignoreMutation({ type: `selection`, target: F(n) ? n.parentNode : n })
      )
        return this.setCurSelection(), !0;
    }
    pendingRecords() {
      if (this.observer)
        for (let e of this.observer.takeRecords()) this.queue.push(e);
      return this.queue;
    }
    flush() {
      let { view: e } = this;
      if (!e.docView || this.flushingSoon > -1) return;
      let t = this.pendingRecords();
      t.length && (this.queue = []);
      let n,
        r = !1;
      !this.suppressingSelectionUpdates &&
        Qo(e) &&
        ((n = e.domSelectionRange()),
        (r = !this.currentSelection.eq(n) && !this.ignoreSelectionChange(n)));
      let i = -1,
        a = -1,
        o = !1,
        s = [];
      if (e.editable)
        for (let e = 0; e < t.length; e++) {
          let n = this.registerMutation(t[e], s);
          n &&
            ((i = i < 0 ? n.from : Math.min(n.from, i)),
            (a = a < 0 ? n.to : Math.max(n.to, a)),
            n.typeOver && (o = !0));
        }
      if (
        s.some((e) => e.nodeName == `BR`) &&
        (e.input.lastKeyCode == 8 ||
          e.input.lastKeyCode == 46 ||
          (R &&
            (e.composing || e.input.compositionEndedAt > Date.now() - 50) &&
            t.some((e) => e.type == `childList` && e.removedNodes.length)))
      ) {
        for (let e of s)
          if (e.nodeName == `BR` && e.parentNode) {
            let t = e.nextSibling;
            for (; t && P(t); ) {
              if (t.contentEditable == `false`) {
                e.parentNode.removeChild(e);
                break;
              }
              t = t.firstChild;
            }
          }
      } else if (L && s.length) {
        let t = s.filter((e) => e.nodeName == `BR`);
        if (t.length == 2) {
          let [e, n] = t;
          e.parentNode && e.parentNode.parentNode == n.parentNode
            ? n.remove()
            : e.remove();
        } else {
          let { focusNode: n } = this.currentSelection;
          for (let r of t) {
            let t = r.parentNode;
            t && t.nodeName == `LI` && (!n || Qc(e, n) != t) && r.remove();
          }
        }
      }
      let c = null;
      i < 0 &&
      r &&
      e.input.lastFocus > Date.now() - 200 &&
      Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 &&
      ha(n) &&
      (c = Bo(e)) &&
      c.eq(E.near(e.state.doc.resolve(0), 1))
        ? ((e.input.lastFocus = 0),
          Ho(e),
          this.currentSelection.set(n),
          e.scrollToSelection())
        : (i > -1 || r) &&
          (i > -1 && (e.docView.markDirty(i, a), Yc(e)),
          e.input.badSafariComposition &&
            ((e.input.badSafariComposition = !1), $c(e, s)),
          this.handleDOMChange(i, a, o, s),
          e.docView && e.docView.dirty
            ? e.updateState(e.state)
            : n && !this.currentSelection.eq(n) && Ho(e),
          n && this.currentSelection.set(n));
    }
    registerMutation(e, t) {
      if (t.indexOf(e.target) > -1) return null;
      let n = this.view.docView.nearestDesc(e.target);
      if (
        (e.type == `attributes` &&
          (n == this.view.docView ||
            e.attributeName == `contenteditable` ||
            (e.attributeName == `style` &&
              !e.oldValue &&
              !e.target.getAttribute(`style`)))) ||
        !n ||
        n.ignoreMutation(e)
      )
        return null;
      if (e.type == `childList`) {
        for (let n = 0; n < e.addedNodes.length; n++) {
          let r = e.addedNodes[n];
          t.push(r), F(r) && (this.lastChangedTextNode = r);
        }
        if (
          n.contentDOM &&
          n.contentDOM != n.dom &&
          !n.contentDOM.contains(e.target)
        )
          return { from: n.posBefore, to: n.posAfter };
        let r = e.previousSibling,
          i = e.nextSibling;
        if (I && Ta <= 11 && e.addedNodes.length)
          for (let t = 0; t < e.addedNodes.length; t++) {
            let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
            (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) &&
              (r = n),
              (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) &&
                (i = a);
          }
        let a = r && r.parentNode == e.target ? M(r) + 1 : 0,
          o = n.localPosFromDOM(e.target, a, -1),
          s = i && i.parentNode == e.target ? M(i) : e.target.childNodes.length;
        return { from: o, to: n.localPosFromDOM(e.target, s, 1) };
      }
      return e.type == `attributes`
        ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
        : ((this.lastChangedTextNode = e.target),
          {
            from: n.posAtStart,
            to: n.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue,
          });
    }
  },
  qc = new WeakMap(),
  Jc = !1;
function Yc(e) {
  if (
    !qc.has(e) &&
    (qc.set(e, null),
    [`normal`, `nowrap`, `pre-line`].indexOf(
      getComputedStyle(e.dom).whiteSpace,
    ) !== -1)
  ) {
    if (((e.requiresGeckoHackNode = L), Jc)) return;
    console.warn(
      `ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.`,
    ),
      (Jc = !0);
  }
}
function Xc(e, t) {
  let n = t.startContainer,
    r = t.startOffset,
    i = t.endContainer,
    a = t.endOffset,
    o = e.domAtPos(e.state.selection.anchor);
  return (
    sa(o.node, o.offset, i, a) && ([n, r, i, a] = [i, a, n, r]),
    { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: a }
  );
}
function Zc(e, t) {
  if (t.getComposedRanges) {
    let n = t.getComposedRanges(e.root)[0];
    if (n) return Xc(e, n);
  }
  let n;
  function r(e) {
    e.preventDefault(),
      e.stopImmediatePropagation(),
      (n = e.getTargetRanges()[0]);
  }
  return (
    e.dom.addEventListener(`beforeinput`, r, !0),
    document.execCommand(`indent`),
    e.dom.removeEventListener(`beforeinput`, r, !0),
    n ? Xc(e, n) : null
  );
}
function Qc(e, t) {
  for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
    let t = e.docView.nearestDesc(n, !0);
    if (t && t.node.isBlock) return n;
  }
  return null;
}
function $c(e, t) {
  let { focusNode: n, focusOffset: r } = e.domSelectionRange();
  for (let i of t)
    if (i.parentNode?.nodeName == `TR`) {
      let t = i.nextSibling;
      for (; t && t.nodeName != `TD` && t.nodeName != `TH`; ) t = t.nextSibling;
      if (t) {
        let a = t;
        for (;;) {
          let e = a.firstChild;
          if (
            !e ||
            !P(e) ||
            e.contentEditable == `false` ||
            /^(BR|IMG)$/.test(e.nodeName)
          )
            break;
          a = e;
        }
        a.insertBefore(i, a.firstChild),
          n == i && e.domSelection().collapse(i, r);
      } else i.parentNode.removeChild(i);
    }
}
function el(e, t, n, r) {
  let {
      node: i,
      fromOffset: a,
      toOffset: o,
      from: s,
      to: c,
    } = e.docView.parseRange(t, n),
    l = e.domSelectionRange(),
    u,
    d = l.anchorNode;
  if (
    (d &&
      ua(e.dom, d) &&
      ((u = [{ node: d, offset: l.anchorOffset }]),
      ha(l) || u.push({ node: l.focusNode, offset: l.focusOffset })),
    R && e.input.lastKeyCode === 8)
  )
    for (let e = o; e > a; e--) {
      let t = i.childNodes[e - 1],
        n = t.pmViewDesc;
      if (t.nodeName == `BR` && !n) {
        o = e;
        break;
      }
      if (!n || n.size) break;
    }
  let f = e.state.doc,
    p = e.someProp(`domParser`) || Kt.fromSchema(e.state.schema),
    m = f.resolve(s),
    h = null,
    g = p.parse(i, {
      topNode: m.parent,
      topMatch: m.parent.contentMatchAt(m.index()),
      topOpen: !0,
      from: a,
      to: o,
      preserveWhitespace: m.parent.type.whitespace != `pre` || `full`,
      findPositions: u,
      ruleFromNode: tl(r),
      context: m,
    });
  if (u && u[0].pos != null) {
    let e = u[0].pos,
      t = u[1] && u[1].pos;
    (t ??= e), (h = { anchor: e + s, head: t + s });
  }
  return { doc: g, sel: h, from: s, to: c };
}
var tl = (e) => (t) => {
    let n = t.pmViewDesc;
    if (n) return n.parseRule(e);
    if (t.nodeName == `BR` && t.parentNode) {
      if (z && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
        let e = document.createElement(`div`);
        return e.appendChild(document.createElement(`li`)), { skip: e };
      }
      if (
        t.parentNode.lastChild == t ||
        (z && /^(tr|table)$/i.test(t.parentNode.nodeName))
      )
        return { ignore: !0 };
    } else if (t.nodeName == `IMG` && t.getAttribute(`mark-placeholder`))
      return { ignore: !0 };
    return null;
  },
  nl =
    /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function rl(e, t, n, r, i) {
  let a =
    e.input.compositionPendingChanges ||
    (e.composing ? e.input.compositionID : 0);
  if (((e.input.compositionPendingChanges = 0), t < 0)) {
    let t =
        e.input.lastSelectionTime > Date.now() - 50
          ? e.input.lastSelectionOrigin
          : null,
      n = Bo(e, t);
    if (n && !e.state.selection.eq(n)) {
      if (
        R &&
        Aa &&
        e.input.lastKeyCode === 13 &&
        Date.now() - 100 < e.input.lastKeyCodeTime &&
        e.someProp(`handleKeyDown`, (t) => t(e, ga(13, `Enter`)))
      )
        return;
      let r = e.state.tr.setSelection(n);
      t == `pointer`
        ? r.setMeta(`pointer`, !0)
        : t == `key` && r.scrollIntoView(),
        a && r.setMeta(`composition`, a),
        e.dispatch(r);
    }
    return;
  }
  let o = e.state.doc.resolve(t),
    s = o.sharedDepth(n);
  (t = o.before(s + 1)), (n = e.state.doc.resolve(n).after(s + 1));
  let c = e.state.selection,
    l = el(e, t, n, i),
    u = e.state.doc,
    d = u.slice(l.from, l.to),
    f,
    p;
  e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime
    ? ((f = e.state.selection.to), (p = `end`))
    : ((f = e.state.selection.from), (p = `start`)),
    (e.input.lastKeyCode = null);
  let m = ll(d.content, l.doc.content, l.from, f, p);
  if (
    (m && e.input.domChangeCount++,
    ((Oa && e.input.lastIOSEnter > Date.now() - 225) || Aa) &&
      i.some((e) => P(e) && !nl.test(e.nodeName)) &&
      (!m || m.endA >= m.endB) &&
      e.someProp(`handleKeyDown`, (t) => t(e, ga(13, `Enter`))))
  ) {
    e.input.lastIOSEnter = 0;
    return;
  }
  if (!m) {
    if (
      r &&
      c instanceof D &&
      !c.empty &&
      c.$head.sameParent(c.$anchor) &&
      !e.composing &&
      !(l.sel && l.sel.anchor != l.sel.head)
    )
      m = { start: c.from, endA: c.to, endB: c.to };
    else {
      if (l.sel) {
        let t = il(e, e.state.doc, l.sel);
        if (t && !t.eq(e.state.selection)) {
          let n = e.state.tr.setSelection(t);
          a && n.setMeta(`composition`, a), e.dispatch(n);
        }
      }
      return;
    }
  }
  e.state.selection.from < e.state.selection.to &&
    m.start == m.endB &&
    e.state.selection instanceof D &&
    (m.start > e.state.selection.from &&
    m.start <= e.state.selection.from + 2 &&
    e.state.selection.from >= l.from
      ? (m.start = e.state.selection.from)
      : m.endA < e.state.selection.to &&
        m.endA >= e.state.selection.to - 2 &&
        e.state.selection.to <= l.to &&
        ((m.endB += e.state.selection.to - m.endA),
        (m.endA = e.state.selection.to))),
    I &&
      Ta <= 11 &&
      m.endB == m.start + 1 &&
      m.endA == m.start &&
      m.start > l.from &&
      l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) ==
        ` \xA0` &&
      (m.start--, m.endA--, m.endB--);
  let h = l.doc.resolveNoCache(m.start - l.from),
    g = l.doc.resolveNoCache(m.endB - l.from),
    ee = u.resolve(m.start),
    te = h.sameParent(g) && h.parent.inlineContent && ee.end() >= m.endA;
  if (
    ((Oa &&
      e.input.lastIOSEnter > Date.now() - 225 &&
      (!te || i.some((e) => e.nodeName == `DIV` || e.nodeName == `P`))) ||
      (!te && sl(l.doc, h.pos, g.pos))) &&
    e.someProp(`handleKeyDown`, (t) => t(e, ga(13, `Enter`)))
  ) {
    e.input.lastIOSEnter = 0;
    return;
  }
  if (
    e.state.selection.anchor > m.start &&
    (te
      ? m.endA > m.start && m.endB == m.start
      : ol(u, m.start, m.endA, h, g)) &&
    e.someProp(`handleKeyDown`, (t) => t(e, ga(8, `Backspace`)))
  ) {
    Aa && R && e.domObserver.suppressSelectionUpdates();
    return;
  }
  R && m.endB == m.start && (e.input.lastChromeDelete = Date.now()),
    Aa &&
      !te &&
      h.start() != g.start() &&
      g.parentOffset == 0 &&
      h.depth == g.depth &&
      l.sel &&
      l.sel.anchor == l.sel.head &&
      l.sel.head == m.endA &&
      ((m.endB -= 2),
      (g = l.doc.resolveNoCache(m.endB - l.from)),
      setTimeout(() => {
        e.someProp(`handleKeyDown`, function (t) {
          return t(e, ga(13, `Enter`));
        });
      }, 20));
  let ne = m.start,
    re = m.endA,
    ie = (t) => {
      let n =
        t ||
        e.state.tr.replace(
          ne,
          re,
          l.doc.slice(m.start - l.from, m.endB - l.from),
        );
      if (l.sel) {
        let t = il(e, n.doc, l.sel);
        t &&
          !(
            (R &&
              e.composing &&
              t.empty &&
              (m.start != m.endB ||
                e.input.lastChromeDelete < Date.now() - 100) &&
              (t.head == ne || t.head == n.mapping.map(re) - 1)) ||
            (I && t.empty && t.head == ne)
          ) &&
          n.setSelection(t);
      }
      return a && n.setMeta(`composition`, a), n.scrollIntoView();
    },
    ae;
  if (te) {
    if (h.pos == g.pos) {
      I &&
        Ta <= 11 &&
        h.parentOffset == 0 &&
        (e.domObserver.suppressSelectionUpdates(), setTimeout(() => Ho(e), 20));
      let t = ie(e.state.tr.delete(ne, re)),
        n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
      n && t.ensureMarks(n), e.dispatch(t);
    } else if (
      m.endA == m.endB &&
      (ae = al(
        h.parent.content.cut(h.parentOffset, g.parentOffset),
        ee.parent.content.cut(ee.parentOffset, m.endA - ee.start()),
      ))
    ) {
      let t = ie(e.state.tr);
      ae.type == `add`
        ? t.addMark(ne, re, ae.mark)
        : t.removeMark(ne, re, ae.mark),
        e.dispatch(t);
    } else if (
      h.parent.child(h.index()).isText &&
      h.index() == g.index() - +!g.textOffset
    ) {
      let t = h.parent.textBetween(h.parentOffset, g.parentOffset),
        n = () => ie(e.state.tr.insertText(t, ne, re));
      e.someProp(`handleTextInput`, (r) => r(e, ne, re, t, n)) ||
        e.dispatch(n());
    } else e.dispatch(ie());
  } else e.dispatch(ie());
}
function il(e, t, n) {
  return Math.max(n.anchor, n.head) > t.content.size
    ? null
    : Zo(e, t.resolve(n.anchor), t.resolve(n.head));
}
function al(e, t) {
  let n = e.firstChild.marks,
    r = t.firstChild.marks,
    i = n,
    a = r,
    o,
    s,
    c;
  for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
  for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
  if (i.length == 1 && a.length == 0)
    (s = i[0]), (o = `add`), (c = (e) => e.mark(s.addToSet(e.marks)));
  else if (i.length == 0 && a.length == 1)
    (s = a[0]), (o = `remove`), (c = (e) => e.mark(s.removeFromSet(e.marks)));
  else return null;
  let l = [];
  for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
  if (b.from(l).eq(e)) return { mark: s, type: o };
}
function ol(e, t, n, r, i) {
  if (n - t <= i.pos - r.pos || cl(r, !0, !1) < i.pos) return !1;
  let a = e.resolve(t);
  if (!r.parent.inlineContent) {
    let e = a.nodeAfter;
    return e != null && n == t + e.nodeSize;
  }
  if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock)
    return !1;
  let o = e.resolve(cl(a, !0, !0));
  return !o.parent.isTextblock || o.pos > n || cl(o, !0, !1) < n
    ? !1
    : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function sl(e, t, n) {
  let r = 0,
    i = 0;
  return (
    e.nodesBetween(t, n, (e, a) => {
      e.isTextblock && a >= t && a < n
        ? r++
        : (e.isText
            ? /\S/.test(
                e.text.slice(Math.max(0, t - a), Math.min(e.nodeSize, n - a)),
              )
            : e.isLeaf) && i++;
    }),
    i == 0 && r == 1
  );
}
function cl(e, t, n) {
  let r = e.depth,
    i = t ? e.end() : e.pos;
  for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount); )
    r--, i++, (t = !1);
  if (n) {
    let t = e.node(r).maybeChild(e.indexAfter(r));
    for (; t && !t.isLeaf; ) (t = t.firstChild), i++;
  }
  return i;
}
function ll(e, t, n, r, i) {
  let a = e.findDiffStart(t, n),
    o = n + e.size,
    s = n + t.size;
  if (a == null) return null;
  let { a: c, b: l } = e.findDiffEnd(t, o, s);
  if (i == `end`) {
    let e = Math.max(0, a - Math.min(c, l));
    r -= c + e - a;
  }
  if (c < a && o < s) {
    let e = r <= a && r >= c ? a - r : 0;
    (a -= e), (l = a + (l - c)), (c = a);
  } else if (l < a) {
    let e = r <= a && r >= l ? a - r : 0;
    (a -= e), (c = a + (c - l)), (l = a);
  }
  return { start: a, endA: c, endB: l };
}
var ul = class {
  constructor(e, t) {
    (this._root = null),
      (this.focused = !1),
      (this.trackWrites = null),
      (this.mounted = !1),
      (this.markCursor = null),
      (this.cursorWrapper = null),
      (this.lastSelectedViewDesc = void 0),
      (this.input = new Ls()),
      (this.prevDirectPlugins = []),
      (this.pluginViews = []),
      (this.requiresGeckoHackNode = !1),
      (this.dragging = null),
      (this._props = t),
      (this.state = t.state),
      (this.directPlugins = t.plugins || []),
      this.directPlugins.forEach(_l),
      (this.dispatch = this.dispatch.bind(this)),
      (this.dom = (e && e.mount) || document.createElement(`div`)),
      e &&
        (e.appendChild
          ? e.appendChild(this.dom)
          : typeof e == `function`
            ? e(this.dom)
            : e.mount && (this.mounted = !0)),
      (this.editable = pl(this)),
      fl(this),
      (this.nodeViews = hl(this)),
      (this.docView = bo(this.state.doc, dl(this), Hc(this), this.dom, this)),
      (this.domObserver = new Kc(this, (e, t, n, r) => rl(this, e, t, n, r))),
      this.domObserver.start(),
      Rs(this),
      this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e) this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Vs(this);
    let t = this._props;
    (this._props = e),
      e.plugins && (e.plugins.forEach(_l), (this.directPlugins = e.plugins)),
      this.updateStateInner(e.state, t);
  }
  setProps(e) {
    let t = {};
    for (let e in this._props) t[e] = this._props[e];
    t.state = this.state;
    for (let n in e) t[n] = e[n];
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let n = this.state,
      r = !1,
      i = !1;
    e.storedMarks && this.composing && (dc(this), (i = !0)), (this.state = e);
    let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
    if (
      a ||
      this._props.plugins != t.plugins ||
      this._props.nodeViews != t.nodeViews
    ) {
      let e = hl(this);
      gl(e, this.nodeViews) && ((this.nodeViews = e), (r = !0));
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && Vs(this),
      (this.editable = pl(this)),
      fl(this);
    let o = Hc(this),
      s = dl(this),
      c =
        n.plugins != e.plugins && !n.doc.eq(e.doc)
          ? `reset`
          : e.scrollToSelection > n.scrollToSelection
            ? `to selection`
            : `preserve`,
      l = r || !this.docView.matchesNode(e.doc, s, o);
    (l || !e.selection.eq(n.selection)) && (i = !0);
    let u =
      c == `preserve` && i && this.dom.style.overflowAnchor == null && La(this);
    if (i) {
      this.domObserver.stop();
      let t =
        l &&
        (I || R) &&
        !this.composing &&
        !n.selection.empty &&
        !e.selection.empty &&
        ml(n.selection, e.selection);
      if (l) {
        let n = R
          ? (this.trackWrites = this.domSelectionRange().focusNode)
          : null;
        this.composing && (this.input.compositionNode = fc(this)),
          (r || !this.docView.update(e.doc, s, o, this)) &&
            (this.docView.updateOuterDeco(s),
            this.docView.destroy(),
            (this.docView = bo(e.doc, s, o, this.dom, this))),
          !n ||
            (this.trackWrites && this.dom.contains(this.trackWrites)) ||
            (t = !0);
      }
      let i = this.input.mouseDown;
      t ||
      !(
        i &&
        this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
        es(this) &&
        i.delaySelUpdate()
      )
        ? Ho(this, t)
        : (Yo(this, e.selection), this.domObserver.setCurSelection()),
        this.domObserver.start();
    }
    this.updatePluginViews(n),
      this.dragging?.node &&
        !n.doc.eq(e.doc) &&
        this.updateDraggedNode(this.dragging, n),
      c == `reset`
        ? (this.dom.scrollTop = 0)
        : c == `to selection`
          ? this.scrollToSelection()
          : u && za(u);
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (
      e &&
      ua(this.dom, e) &&
      !this.someProp(`handleScrollToSelection`, (e) => e(this))
    ) {
      if (this.state.selection instanceof O) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        P(t) && Ia(this, t.getBoundingClientRect(), e);
      } else Ia(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (
      !e ||
      e.plugins != this.state.plugins ||
      this.directPlugins != this.prevDirectPlugins
    ) {
      (this.prevDirectPlugins = this.directPlugins), this.destroyPluginViews();
      for (let e = 0; e < this.directPlugins.length; e++) {
        let t = this.directPlugins[e];
        t.spec.view && this.pluginViews.push(t.spec.view(this));
      }
      for (let e = 0; e < this.state.plugins.length; e++) {
        let t = this.state.plugins[e];
        t.spec.view && this.pluginViews.push(t.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let n = this.pluginViews[t];
        n.update && n.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let n = e.node,
      r = -1;
    if (
      n.from < this.state.doc.content.size &&
      this.state.doc.nodeAt(n.from) == n.node
    )
      r = n.from;
    else {
      let e = n.from + (this.state.doc.content.size - t.doc.content.size);
      (e > 0 && e < this.state.doc.content.size && this.state.doc.nodeAt(e)) ==
        n.node && (r = e);
    }
    this.dragging = new bc(
      e.slice,
      e.move,
      r < 0 ? void 0 : O.create(this.state.doc, r),
    );
  }
  someProp(e, t) {
    let n = this._props && this._props[e],
      r;
    if (n != null && (r = t ? t(n) : n)) return r;
    for (let n = 0; n < this.directPlugins.length; n++) {
      let i = this.directPlugins[n].props[e];
      if (i != null && (r = t ? t(i) : i)) return r;
    }
    let i = this.state.plugins;
    if (i)
      for (let n = 0; n < i.length; n++) {
        let a = i[n].props[e];
        if (a != null && (r = t ? t(a) : a)) return r;
      }
  }
  hasFocus() {
    if (I) {
      let e = this.root.activeElement;
      if (e == this.dom) return !0;
      if (!e || !this.dom.contains(e)) return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == `false`) return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop(),
      this.editable && Ha(this.dom),
      Ho(this),
      this.domObserver.start();
  }
  get root() {
    let e = this._root;
    if (e == null) {
      for (let e = this.dom.parentNode; e; e = e.parentNode)
        if (e.nodeType == 9 || (e.nodeType == 11 && e.host))
          return (
            e.getSelection ||
              (Object.getPrototypeOf(e).getSelection = () =>
                e.ownerDocument.getSelection()),
            (this._root = e)
          );
    }
    return e || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return Xa(this, e);
  }
  coordsAtPos(e, t = 1) {
    return eo(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  posAtDOM(e, t, n = -1) {
    let r = this.docView.posFromDOM(e, t, n);
    if (r == null) throw RangeError(`DOM position not inside the editor`);
    return r;
  }
  endOfTextblock(e, t) {
    return uo(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return vc(this, ``, e, !1, t || new ClipboardEvent(`paste`));
  }
  pasteText(e, t) {
    return vc(this, e, null, !0, t || new ClipboardEvent(`paste`));
  }
  serializeForClipboard(e) {
    return bs(this, e);
  }
  destroy() {
    this.docView &&
      (Bs(this),
      this.destroyPluginViews(),
      this.mounted
        ? (this.docView.update(this.state.doc, [], Hc(this), this),
          (this.dom.textContent = ``))
        : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
      this.docView.destroy(),
      (this.docView = null),
      oa());
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return Ws(this, e);
  }
  domSelectionRange() {
    let e = this.dom.isConnected !== !1 && this.domSelection();
    return e
      ? (z &&
          this.root.nodeType === 11 &&
          _a(this.dom.ownerDocument) == this.dom &&
          Zc(this, e)) ||
          e
      : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  domSelection() {
    return this.root.getSelection();
  }
};
ul.prototype.dispatch = function (e) {
  let t = this._props.dispatchTransaction;
  t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function dl(e) {
  let t = Object.create(null);
  return (
    (t.class = `ProseMirror`),
    (t.contenteditable = String(e.editable)),
    e.someProp(`attributes`, (n) => {
      if ((typeof n == `function` && (n = n(e.state)), n))
        for (let e in n)
          e == `class`
            ? (t.class += ` ` + n[e])
            : e == `style`
              ? (t.style = (t.style ? t.style + `;` : ``) + n[e])
              : !t[e] &&
                e != `contenteditable` &&
                e != `nodeName` &&
                (t[e] = String(n[e]));
    }),
    (t.translate ||= `no`),
    [kc.node(0, e.state.doc.content.size, t)]
  );
}
function fl(e) {
  if (e.markCursor) {
    let t = document.createElement(`img`);
    (t.className = `ProseMirror-separator`),
      t.setAttribute(`mark-placeholder`, `true`),
      t.setAttribute(`alt`, ``),
      (e.cursorWrapper = {
        dom: t,
        deco: kc.widget(e.state.selection.from, t, {
          raw: !0,
          marks: e.markCursor,
        }),
      });
  } else e.cursorWrapper = null;
}
function pl(e) {
  return !e.someProp(`editable`, (t) => t(e.state) === !1);
}
function ml(e, t) {
  let n = Math.min(
    e.$anchor.sharedDepth(e.head),
    t.$anchor.sharedDepth(t.head),
  );
  return e.$anchor.start(n) != t.$anchor.start(n);
}
function hl(e) {
  let t = Object.create(null);
  function n(e) {
    for (let n in e)
      Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
  }
  return e.someProp(`nodeViews`, n), e.someProp(`markViews`, n), t;
}
function gl(e, t) {
  let n = 0,
    r = 0;
  for (let r in e) {
    if (e[r] != t[r]) return !0;
    n++;
  }
  for (let e in t) r++;
  return n != r;
}
function _l(e) {
  if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
    throw RangeError(
      `Plugins passed directly to the view must not have a state component`,
    );
}
for (
  var vl = {
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
    yl = {
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
    bl = typeof navigator < `u` && /Mac/.test(navigator.platform),
    xl =
      typeof navigator < `u` &&
      /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
    K = 0;
  K < 10;
  K++
)
  vl[48 + K] = vl[96 + K] = String(K);
for (var K = 1; K <= 24; K++) vl[K + 111] = `F` + K;
for (var K = 65; K <= 90; K++)
  (vl[K] = String.fromCharCode(K + 32)), (yl[K] = String.fromCharCode(K));
for (var Sl in vl) yl.hasOwnProperty(Sl) || (yl[Sl] = vl[Sl]);
function Cl(e) {
  var t =
    (!(
      (bl && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
      (xl && e.shiftKey && e.key && e.key.length == 1) ||
      e.key == `Unidentified`
    ) &&
      e.key) ||
    (e.shiftKey ? yl : vl)[e.keyCode] ||
    e.key ||
    `Unidentified`;
  return (
    t == `Esc` && (t = `Escape`),
    t == `Del` && (t = `Delete`),
    t == `Left` && (t = `ArrowLeft`),
    t == `Up` && (t = `ArrowUp`),
    t == `Right` && (t = `ArrowRight`),
    t == `Down` && (t = `ArrowDown`),
    t
  );
}
var wl =
  typeof navigator < `u` && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
function Tl(e) {
  let t = e.split(/-(?!$)/),
    n = t[t.length - 1];
  n == `Space` && (n = ` `);
  let r, i, a, o;
  for (let e = 0; e < t.length - 1; e++) {
    let n = t[e];
    if (/^(cmd|meta|m)$/i.test(n)) o = !0;
    else if (/^a(lt)?$/i.test(n)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
    else if (/^s(hift)?$/i.test(n)) a = !0;
    else if (/^mod$/i.test(n)) wl ? (o = !0) : (i = !0);
    else throw Error(`Unrecognized modifier name: ` + n);
  }
  return (
    r && (n = `Alt-` + n),
    i && (n = `Ctrl-` + n),
    o && (n = `Meta-` + n),
    a && (n = `Shift-` + n),
    n
  );
}
function El(e) {
  let t = Object.create(null);
  for (let n in e) t[Tl(n)] = e[n];
  return t;
}
function Dl(e, t, n = !0) {
  return (
    t.altKey && (e = `Alt-` + e),
    t.ctrlKey && (e = `Ctrl-` + e),
    t.metaKey && (e = `Meta-` + e),
    n && t.shiftKey && (e = `Shift-` + e),
    e
  );
}
function Ol(e) {
  return new k({ props: { handleKeyDown: kl(e) } });
}
function kl(e) {
  let t = El(e);
  return function (e, n) {
    let r = Cl(n),
      i,
      a = t[Dl(r, n)];
    if (a && a(e.state, e.dispatch, e)) return !0;
    if (r.length == 1 && r != ` `) {
      if (n.shiftKey) {
        let i = t[Dl(r, n, !1)];
        if (i && i(e.state, e.dispatch, e)) return !0;
      }
      if (
        (n.shiftKey || n.altKey || n.metaKey || r.charCodeAt(0) > 127) &&
        (i = vl[n.keyCode]) &&
        i != r
      ) {
        let r = t[Dl(i, n)];
        if (r && r(e.state, e.dispatch, e)) return !0;
      }
    }
    return !1;
  };
}
var Al, jl;
if (typeof WeakMap < `u`) {
  let e = new WeakMap();
  (Al = (t) => e.get(t)), (jl = (t, n) => (e.set(t, n), n));
} else {
  let e = [],
    t = 0;
  (Al = (t) => {
    for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
  }),
    (jl = (n, r) => (t == 10 && (t = 0), (e[t++] = n), (e[t++] = r)));
}
var q = class {
  constructor(e, t, n, r) {
    (this.width = e), (this.height = t), (this.map = n), (this.problems = r);
  }
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      let n = this.map[t];
      if (n != e) continue;
      let r = t % this.width,
        i = (t / this.width) | 0,
        a = r + 1,
        o = i + 1;
      for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
      for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++)
        o++;
      return { left: r, top: i, right: a, bottom: o };
    }
    throw RangeError(`No cell with offset ${e} found`);
  }
  colCount(e) {
    for (let t = 0; t < this.map.length; t++)
      if (this.map[t] == e) return t % this.width;
    throw RangeError(`No cell with offset ${e} found`);
  }
  nextCell(e, t, n) {
    let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
    return t == `horiz`
      ? (n < 0 ? r == 0 : i == this.width)
        ? null
        : this.map[a * this.width + (n < 0 ? r - 1 : i)]
      : (n < 0 ? a == 0 : o == this.height)
        ? null
        : this.map[r + this.width * (n < 0 ? a - 1 : o)];
  }
  rectBetween(e, t) {
    let { left: n, right: r, top: i, bottom: a } = this.findCell(e),
      { left: o, right: s, top: c, bottom: l } = this.findCell(t);
    return {
      left: Math.min(n, o),
      top: Math.min(i, c),
      right: Math.max(r, s),
      bottom: Math.max(a, l),
    };
  }
  cellsInRect(e) {
    let t = [],
      n = {};
    for (let r = e.top; r < e.bottom; r++)
      for (let i = e.left; i < e.right; i++) {
        let a = r * this.width + i,
          o = this.map[a];
        n[o] ||
          ((n[o] = !0),
          !(
            (i == e.left && i && this.map[a - 1] == o) ||
            (r == e.top && r && this.map[a - this.width] == o)
          ) && t.push(o));
      }
    return t;
  }
  positionAt(e, t, n) {
    for (let r = 0, i = 0; ; r++) {
      let a = i + n.child(r).nodeSize;
      if (r == e) {
        let n = t + e * this.width,
          r = (e + 1) * this.width;
        for (; n < r && this.map[n] < i; ) n++;
        return n == r ? a - 1 : this.map[n];
      }
      i = a;
    }
  }
  static get(e) {
    return Al(e) || jl(e, Ml(e));
  }
};
function Ml(e) {
  if (e.type.spec.tableRole != `table`)
    throw RangeError(`Not a table node: ` + e.type.name);
  let t = Nl(e),
    n = e.childCount,
    r = [],
    i = 0,
    a = null,
    o = [];
  for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
  for (let s = 0, c = 0; s < n; s++) {
    let l = e.child(s);
    c++;
    for (let e = 0; ; e++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (e == l.childCount) break;
      let u = l.child(e),
        { colspan: d, rowspan: f, colwidth: p } = u.attrs;
      for (let e = 0; e < f; e++) {
        if (e + s >= n) {
          (a ||= []).push({ type: `overlong_rowspan`, pos: c, n: f - e });
          break;
        }
        let l = i + e * t;
        for (let e = 0; e < d; e++) {
          r[l + e] == 0
            ? (r[l + e] = c)
            : (a ||= []).push({ type: `collision`, row: s, pos: c, n: d - e });
          let n = p && p[e];
          if (n) {
            let r = ((l + e) % t) * 2,
              i = o[r];
            i == null || (i != n && o[r + 1] == 1)
              ? ((o[r] = n), (o[r + 1] = 1))
              : i == n && o[r + 1]++;
          }
        }
      }
      (i += d), (c += u.nodeSize);
    }
    let u = (s + 1) * t,
      d = 0;
    for (; i < u; ) r[i++] == 0 && d++;
    d && (a ||= []).push({ type: `missing`, row: s, n: d }), c++;
  }
  (t === 0 || n === 0) && (a ||= []).push({ type: `zero_sized` });
  let s = new q(t, n, r, a),
    c = !1;
  for (let e = 0; !c && e < o.length; e += 2)
    o[e] != null && o[e + 1] < n && (c = !0);
  return c && Pl(s, o, e), s;
}
function Nl(e) {
  let t = -1,
    n = !1;
  for (let r = 0; r < e.childCount; r++) {
    let i = e.child(r),
      a = 0;
    if (n)
      for (let t = 0; t < r; t++) {
        let n = e.child(t);
        for (let e = 0; e < n.childCount; e++) {
          let i = n.child(e);
          t + i.attrs.rowspan > r && (a += i.attrs.colspan);
        }
      }
    for (let e = 0; e < i.childCount; e++) {
      let t = i.child(e);
      (a += t.attrs.colspan), t.attrs.rowspan > 1 && (n = !0);
    }
    t == -1 ? (t = a) : t != a && (t = Math.max(t, a));
  }
  return t;
}
function Pl(e, t, n) {
  e.problems ||= [];
  let r = {};
  for (let i = 0; i < e.map.length; i++) {
    let a = e.map[i];
    if (r[a]) continue;
    r[a] = !0;
    let o = n.nodeAt(a);
    if (!o) throw RangeError(`No cell with offset ${a} found`);
    let s = null,
      c = o.attrs;
    for (let n = 0; n < c.colspan; n++) {
      let r = t[((i + n) % e.width) * 2];
      r == null || (c.colwidth && c.colwidth[n] == r) || ((s ||= Fl(c))[n] = r);
    }
    s && e.problems.unshift({ type: `colwidth mismatch`, pos: a, colwidth: s });
  }
}
function Fl(e) {
  if (e.colwidth) return e.colwidth.slice();
  let t = [];
  for (let n = 0; n < e.colspan; n++) t.push(0);
  return t;
}
function Il(e, t) {
  if (typeof e == `string`) return {};
  let n = e.getAttribute(`data-colwidth`),
    r = n && /^\d+(,\d+)*$/.test(n) ? n.split(`,`).map((e) => Number(e)) : null,
    i = Number(e.getAttribute(`colspan`) || 1),
    a = {
      colspan: i,
      rowspan: Number(e.getAttribute(`rowspan`) || 1),
      colwidth: r && r.length == i ? r : null,
    };
  for (let n in t) {
    let r = t[n].getFromDOM,
      i = r && r(e);
    i != null && (a[n] = i);
  }
  return a;
}
function Ll(e, t) {
  let n = {};
  e.attrs.colspan != 1 && (n.colspan = e.attrs.colspan),
    e.attrs.rowspan != 1 && (n.rowspan = e.attrs.rowspan),
    e.attrs.colwidth && (n[`data-colwidth`] = e.attrs.colwidth.join(`,`));
  for (let r in t) {
    let i = t[r].setDOMAttr;
    i && i(e.attrs[r], n);
  }
  return n;
}
function Rl(e) {
  let t = e.cellAttributes || {},
    n = {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: { default: null },
    };
  for (let e in t) n[e] = { default: t[e].default };
  return {
    table: {
      content: `table_row+`,
      tableRole: `table`,
      isolating: !0,
      group: e.tableGroup,
      parseDOM: [{ tag: `table` }],
      toDOM() {
        return [`table`, [`tbody`, 0]];
      },
    },
    table_row: {
      content: `(table_cell | table_header)*`,
      tableRole: `row`,
      parseDOM: [{ tag: `tr` }],
      toDOM() {
        return [`tr`, 0];
      },
    },
    table_cell: {
      content: e.cellContent,
      attrs: n,
      tableRole: `cell`,
      isolating: !0,
      parseDOM: [{ tag: `td`, getAttrs: (e) => Il(e, t) }],
      toDOM(e) {
        return [`td`, Ll(e, t), 0];
      },
    },
    table_header: {
      content: e.cellContent,
      attrs: n,
      tableRole: `header_cell`,
      isolating: !0,
      parseDOM: [{ tag: `th`, getAttrs: (e) => Il(e, t) }],
      toDOM(e) {
        return [`th`, Ll(e, t), 0];
      },
    },
  };
}
function J(e) {
  let t = e.cached.tableNodeTypes;
  if (!t) {
    t = e.cached.tableNodeTypes = {};
    for (let n in e.nodes) {
      let r = e.nodes[n],
        i = r.spec.tableRole;
      i && (t[i] = r);
    }
  }
  return t;
}
var zl = new Gr(`selectingCells`);
function Bl(e) {
  for (let t = e.depth - 1; t > 0; t--)
    if (e.node(t).type.spec.tableRole == `row`)
      return e.node(0).resolve(e.before(t + 1));
  return null;
}
function Vl(e) {
  for (let t = e.depth; t > 0; t--) {
    let n = e.node(t).type.spec.tableRole;
    if (n === `cell` || n === `header_cell`) return e.node(t);
  }
  return null;
}
function Hl(e) {
  let t = e.selection.$head;
  for (let e = t.depth; e > 0; e--)
    if (t.node(e).type.spec.tableRole == `row`) return !0;
  return !1;
}
function Ul(e) {
  let t = e.selection;
  if (`$anchorCell` in t && t.$anchorCell)
    return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
  if (`node` in t && t.node && t.node.type.spec.tableRole == `cell`)
    return t.$anchor;
  let n = Bl(t.$head) || Wl(t.$head);
  if (n) return n;
  throw RangeError(`No cell found around position ${t.head}`);
}
function Wl(e) {
  for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
    let r = t.type.spec.tableRole;
    if (r == `cell` || r == `header_cell`) return e.doc.resolve(n);
  }
  for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
    let r = t.type.spec.tableRole;
    if (r == `cell` || r == `header_cell`) return e.doc.resolve(n - t.nodeSize);
  }
}
function Gl(e) {
  return e.parent.type.spec.tableRole == `row` && !!e.nodeAfter;
}
function Kl(e, t) {
  return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function ql(e, t, n) {
  let r = e.node(-1),
    i = q.get(r),
    a = e.start(-1),
    o = i.nextCell(e.pos - a, t, n);
  return o == null ? null : e.node(0).resolve(a + o);
}
function Jl(e, t, n = 1) {
  let r = { ...e, colspan: e.colspan - n };
  return (
    r.colwidth &&
      ((r.colwidth = r.colwidth.slice()),
      r.colwidth.splice(t, n),
      r.colwidth.some((e) => e > 0) || (r.colwidth = null)),
    r
  );
}
function Yl(e, t, n = 1) {
  let r = { ...e, colspan: e.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
  }
  return r;
}
function Xl(e, t, n) {
  let r = J(t.type.schema).header_cell;
  for (let i = 0; i < e.height; i++)
    if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
  return !0;
}
var Y = class e extends E {
  constructor(e, t = e) {
    let n = e.node(-1),
      r = q.get(n),
      i = e.start(-1),
      a = r.rectBetween(e.pos - i, t.pos - i),
      o = e.node(0),
      s = r.cellsInRect(a).filter((e) => e != t.pos - i);
    s.unshift(t.pos - i);
    let c = s.map((e) => {
      let t = n.nodeAt(e);
      if (!t) throw RangeError(`No cell with offset ${e} found`);
      let r = i + e + 1;
      return new wr(o.resolve(r), o.resolve(r + t.content.size));
    });
    super(c[0].$from, c[0].$to, c),
      (this.$anchorCell = e),
      (this.$headCell = t);
  }
  map(t, n) {
    let r = t.resolve(n.map(this.$anchorCell.pos)),
      i = t.resolve(n.map(this.$headCell.pos));
    if (Gl(r) && Gl(i) && Kl(r, i)) {
      let t = this.$anchorCell.node(-1) != r.node(-1);
      return t && this.isRowSelection()
        ? e.rowSelection(r, i)
        : t && this.isColSelection()
          ? e.colSelection(r, i)
          : new e(r, i);
    }
    return D.between(r, i);
  }
  content() {
    let e = this.$anchorCell.node(-1),
      t = q.get(e),
      n = this.$anchorCell.start(-1),
      r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
      i = {},
      a = [];
    for (let n = r.top; n < r.bottom; n++) {
      let o = [];
      for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
        let n = t.map[a];
        if (i[n]) continue;
        i[n] = !0;
        let s = t.findCell(n),
          c = e.nodeAt(n);
        if (!c) throw RangeError(`No cell with offset ${n} found`);
        let l = r.left - s.left,
          u = s.right - r.right;
        if (l > 0 || u > 0) {
          let e = c.attrs;
          if (
            (l > 0 && (e = Jl(e, 0, l)),
            u > 0 && (e = Jl(e, e.colspan - u, u)),
            s.left < r.left)
          ) {
            if (((c = c.type.createAndFill(e)), !c))
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(e)}`,
              );
          } else c = c.type.create(e, c.content);
        }
        if (s.top < r.top || s.bottom > r.bottom) {
          let e = {
            ...c.attrs,
            rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top),
          };
          c =
            s.top < r.top
              ? c.type.createAndFill(e)
              : c.type.create(e, c.content);
        }
        o.push(c);
      }
      a.push(e.child(n).copy(b.from(o)));
    }
    let o = this.isColSelection() && this.isRowSelection() ? e : a;
    return new S(b.from(o), 1, 1);
  }
  replace(e, t = S.empty) {
    let n = e.steps.length,
      r = this.ranges;
    for (let i = 0; i < r.length; i++) {
      let { $from: a, $to: o } = r[i],
        s = e.mapping.slice(n);
      e.replace(s.map(a.pos), s.map(o.pos), i ? S.empty : t);
    }
    let i = E.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
    i && e.setSelection(i);
  }
  replaceWith(e, t) {
    this.replace(e, new S(b.from(t), 0, 0));
  }
  forEachCell(e) {
    let t = this.$anchorCell.node(-1),
      n = q.get(t),
      r = this.$anchorCell.start(-1),
      i = n.cellsInRect(
        n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r),
      );
    for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
  }
  isColSelection() {
    let e = this.$anchorCell.index(-1),
      t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0) return !1;
    let n = e + this.$anchorCell.nodeAfter.attrs.rowspan,
      r = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, r) == this.$headCell.node(-1).childCount;
  }
  static colSelection(t, n = t) {
    let r = t.node(-1),
      i = q.get(r),
      a = t.start(-1),
      o = i.findCell(t.pos - a),
      s = i.findCell(n.pos - a),
      c = t.node(0);
    return (
      o.top <= s.top
        ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])),
          s.bottom < i.height &&
            (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1])))
        : (s.top > 0 && (n = c.resolve(a + i.map[s.left])),
          o.bottom < i.height &&
            (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))),
      new e(t, n)
    );
  }
  isRowSelection() {
    let e = this.$anchorCell.node(-1),
      t = q.get(e),
      n = this.$anchorCell.start(-1),
      r = t.colCount(this.$anchorCell.pos - n),
      i = t.colCount(this.$headCell.pos - n);
    if (Math.min(r, i) > 0) return !1;
    let a = r + this.$anchorCell.nodeAfter.attrs.colspan,
      o = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(a, o) == t.width;
  }
  eq(t) {
    return (
      t instanceof e &&
      t.$anchorCell.pos == this.$anchorCell.pos &&
      t.$headCell.pos == this.$headCell.pos
    );
  }
  static rowSelection(t, n = t) {
    let r = t.node(-1),
      i = q.get(r),
      a = t.start(-1),
      o = i.findCell(t.pos - a),
      s = i.findCell(n.pos - a),
      c = t.node(0);
    return (
      o.left <= s.left
        ? (o.left > 0 && (t = c.resolve(a + i.map[o.top * i.width])),
          s.right < i.width &&
            (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1])))
        : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])),
          o.right < i.width &&
            (t = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))),
      new e(t, n)
    );
  }
  toJSON() {
    return {
      type: `cell`,
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos,
    };
  }
  static fromJSON(t, n) {
    return new e(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, r = n) {
    return new e(t.resolve(n), t.resolve(r));
  }
  getBookmark() {
    return new Zl(this.$anchorCell.pos, this.$headCell.pos);
  }
};
(Y.prototype.visible = !1), E.jsonID(`cell`, Y);
var Zl = class e {
  constructor(e, t) {
    (this.anchor = e), (this.head = t);
  }
  map(t) {
    return new e(t.map(this.anchor), t.map(this.head));
  }
  resolve(e) {
    let t = e.resolve(this.anchor),
      n = e.resolve(this.head);
    return t.parent.type.spec.tableRole == `row` &&
      n.parent.type.spec.tableRole == `row` &&
      t.index() < t.parent.childCount &&
      n.index() < n.parent.childCount &&
      Kl(t, n)
      ? new Y(t, n)
      : E.near(n, 1);
  }
};
function Ql(e) {
  if (!(e.selection instanceof Y)) return null;
  let t = [];
  return (
    e.selection.forEachCell((e, n) => {
      t.push(kc.node(n, n + e.nodeSize, { class: `selectedCell` }));
    }),
    W.create(e.doc, t)
  );
}
function $l({ $from: e, $to: t }) {
  if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
  let n = e.pos,
    r = t.pos,
    i = e.depth;
  for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
  for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
  return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function eu({ $from: e, $to: t }) {
  let n, r;
  for (let t = e.depth; t > 0; t--) {
    let r = e.node(t);
    if (
      r.type.spec.tableRole === `cell` ||
      r.type.spec.tableRole === `header_cell`
    ) {
      n = r;
      break;
    }
  }
  for (let e = t.depth; e > 0; e--) {
    let n = t.node(e);
    if (
      n.type.spec.tableRole === `cell` ||
      n.type.spec.tableRole === `header_cell`
    ) {
      r = n;
      break;
    }
  }
  return n !== r && t.parentOffset === 0;
}
function tu(e, t, n) {
  let r = (t || e).selection,
    i = (t || e).doc,
    a,
    o;
  if (r instanceof O && (o = r.node.type.spec.tableRole)) {
    if (o == `cell` || o == `header_cell`) a = Y.create(i, r.from);
    else if (o == `row`) {
      let e = i.resolve(r.from + 1);
      a = Y.rowSelection(e, e);
    } else if (!n) {
      let e = q.get(r.node),
        t = r.from + 1,
        n = t + e.map[e.width * e.height - 1];
      a = Y.create(i, t + 1, n);
    }
  } else
    r instanceof D && $l(r)
      ? (a = D.create(i, r.from))
      : r instanceof D &&
        eu(r) &&
        (a = D.create(i, r.$from.start(), r.$from.end()));
  return a && (t ||= e.tr).setSelection(a), t;
}
var nu = new Gr(`fix-tables`);
function ru(e, t, n, r) {
  let i = e.childCount,
    a = t.childCount;
  outer: for (let o = 0, s = 0; o < a; o++) {
    let a = t.child(o);
    for (let t = s, r = Math.min(i, o + 3); t < r; t++)
      if (e.child(t) == a) {
        (s = t + 1), (n += a.nodeSize);
        continue outer;
      }
    r(a, n),
      s < i && e.child(s).sameMarkup(a)
        ? ru(e.child(s), a, n + 1, r)
        : a.nodesBetween(0, a.content.size, r, n + 1),
      (n += a.nodeSize);
  }
}
function iu(e, t) {
  let n,
    r = (t, r) => {
      t.type.spec.tableRole == `table` && (n = au(e, t, r, n));
    };
  return t ? t.doc != e.doc && ru(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function au(e, t, n, r) {
  let i = q.get(t);
  if (!i.problems) return r;
  r ||= e.tr;
  let a = [];
  for (let e = 0; e < i.height; e++) a.push(0);
  for (let e = 0; e < i.problems.length; e++) {
    let o = i.problems[e];
    if (o.type == `collision`) {
      let e = t.nodeAt(o.pos);
      if (!e) continue;
      let i = e.attrs;
      for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + o.pos),
        null,
        Jl(i, i.colspan - o.n, o.n),
      );
    } else if (o.type == `missing`) a[o.row] += o.n;
    else if (o.type == `overlong_rowspan`) {
      let e = t.nodeAt(o.pos);
      if (!e) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
        ...e.attrs,
        rowspan: e.attrs.rowspan - o.n,
      });
    } else if (o.type == `colwidth mismatch`) {
      let e = t.nodeAt(o.pos);
      if (!e) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
        ...e.attrs,
        colwidth: o.colwidth,
      });
    } else if (o.type == `zero_sized`) {
      let e = r.mapping.map(n);
      r.delete(e, e + t.nodeSize);
    }
  }
  let o, s;
  for (let e = 0; e < a.length; e++) a[e] && ((o ??= e), (s = e));
  for (let c = 0, l = n + 1; c < i.height; c++) {
    let n = t.child(c),
      i = l + n.nodeSize,
      u = a[c];
    if (u > 0) {
      let t = `cell`;
      n.firstChild && (t = n.firstChild.type.spec.tableRole);
      let a = [];
      for (let n = 0; n < u; n++) {
        let n = J(e.schema)[t].createAndFill();
        n && a.push(n);
      }
      let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
      r.insert(r.mapping.map(d), a);
    }
    l = i;
  }
  return r.setMeta(nu, { fixTables: !0 });
}
function ou(e) {
  let t = e.selection,
    n = Ul(e),
    r = n.node(-1),
    i = n.start(-1),
    a = q.get(r);
  return {
    ...(t instanceof Y
      ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i)
      : a.findCell(n.pos - i)),
    tableStart: i,
    map: a,
    table: r,
  };
}
function su(e, { map: t, tableStart: n, table: r }, i) {
  let a = i > 0 ? -1 : 0;
  Xl(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
  for (let o = 0; o < t.height; o++) {
    let s = o * t.width + i;
    if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
      let a = t.map[s],
        c = r.nodeAt(a);
      e.setNodeMarkup(
        e.mapping.map(n + a),
        null,
        Yl(c.attrs, i - t.colCount(a)),
      ),
        (o += c.attrs.rowspan - 1);
    } else {
      let c = a == null ? J(r.type.schema).cell : r.nodeAt(t.map[s + a]).type,
        l = t.positionAt(o, i, r);
      e.insert(e.mapping.map(n + l), c.createAndFill());
    }
  }
  return e;
}
function cu(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e);
    t(su(e.tr, n, n.left));
  }
  return !0;
}
function lu(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e);
    t(su(e.tr, n, n.right));
  }
  return !0;
}
function uu(e, { map: t, table: n, tableStart: r }, i) {
  let a = e.mapping.maps.length;
  for (let o = 0; o < t.height; ) {
    let s = o * t.width + i,
      c = t.map[s],
      l = n.nodeAt(c),
      u = l.attrs;
    if ((i > 0 && t.map[s - 1] == c) || (i < t.width - 1 && t.map[s + 1] == c))
      e.setNodeMarkup(
        e.mapping.slice(a).map(r + c),
        null,
        Jl(u, i - t.colCount(c)),
      );
    else {
      let t = e.mapping.slice(a).map(r + c);
      e.delete(t, t + l.nodeSize);
    }
    o += u.rowspan;
  }
}
function du(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e),
      r = e.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let e = n.right - 1; uu(r, n, e), e != n.left; e--) {
      let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!e) throw RangeError(`No table found`);
      (n.table = e), (n.map = q.get(e));
    }
    t(r);
  }
  return !0;
}
function fu(e, t, n) {
  let r = J(t.type.schema).header_cell;
  for (let i = 0; i < e.width; i++)
    if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
  return !0;
}
function pu(e, { map: t, tableStart: n, table: r }, i) {
  let a = n;
  for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
  let o = [],
    s = i > 0 ? -1 : 0;
  fu(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
  for (let a = 0, c = t.width * i; a < t.width; a++, c++)
    if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
      let i = t.map[c],
        o = r.nodeAt(i).attrs;
      e.setNodeMarkup(n + i, null, { ...o, rowspan: o.rowspan + 1 }),
        (a += o.colspan - 1);
    } else {
      let e = (
        s == null
          ? J(r.type.schema).cell
          : r.nodeAt(t.map[c + s * t.width])?.type
      )?.createAndFill();
      e && o.push(e);
    }
  return e.insert(a, J(r.type.schema).row.create(null, o)), e;
}
function mu(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e);
    t(pu(e.tr, n, n.top));
  }
  return !0;
}
function hu(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e);
    t(pu(e.tr, n, n.bottom));
  }
  return !0;
}
function gu(e, { map: t, table: n, tableStart: r }, i) {
  let a = 0;
  for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
  let o = a + n.child(i).nodeSize,
    s = e.mapping.maps.length;
  e.delete(a + r, o + r);
  let c = new Set();
  for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
    let l = t.map[o];
    if (!c.has(l)) {
      if ((c.add(l), i > 0 && l == t.map[o - t.width])) {
        let t = n.nodeAt(l).attrs;
        e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
          ...t,
          rowspan: t.rowspan - 1,
        }),
          (a += t.colspan - 1);
      } else if (i < t.height && l == t.map[o + t.width]) {
        let o = n.nodeAt(l),
          c = o.attrs,
          u = o.type.create({ ...c, rowspan: o.attrs.rowspan - 1 }, o.content),
          d = t.positionAt(i + 1, a, n);
        e.insert(e.mapping.slice(s).map(r + d), u), (a += c.colspan - 1);
      }
    }
  }
}
function _u(e, t) {
  if (!Hl(e)) return !1;
  if (t) {
    let n = ou(e),
      r = e.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let e = n.bottom - 1; gu(r, n, e), e != n.top; e--) {
      let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!e) throw RangeError(`No table found`);
      (n.table = e), (n.map = q.get(n.table));
    }
    t(r);
  }
  return !0;
}
function vu(e) {
  let t = e.content;
  return (
    t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0
  );
}
function yu({ width: e, height: t, map: n }, r) {
  let i = r.top * e + r.left,
    a = i,
    o = (r.bottom - 1) * e + r.left,
    s = i + (r.right - r.left - 1);
  for (let t = r.top; t < r.bottom; t++) {
    if ((r.left > 0 && n[a] == n[a - 1]) || (r.right < e && n[s] == n[s + 1]))
      return !0;
    (a += e), (s += e);
  }
  for (let a = r.left; a < r.right; a++) {
    if ((r.top > 0 && n[i] == n[i - e]) || (r.bottom < t && n[o] == n[o + e]))
      return !0;
    i++, o++;
  }
  return !1;
}
function bu(e, t) {
  let n = e.selection;
  if (!(n instanceof Y) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  let r = ou(e),
    { map: i } = r;
  if (yu(i, r)) return !1;
  if (t) {
    let n = e.tr,
      a = {},
      o = b.empty,
      s,
      c;
    for (let e = r.top; e < r.bottom; e++)
      for (let t = r.left; t < r.right; t++) {
        let l = i.map[e * i.width + t],
          u = r.table.nodeAt(l);
        if (!a[l] && u) {
          if (((a[l] = !0), s == null)) (s = l), (c = u);
          else {
            vu(u) || (o = o.append(u.content));
            let e = n.mapping.map(l + r.tableStart);
            n.delete(e, e + u.nodeSize);
          }
        }
      }
    if (s == null || c == null) return !0;
    if (
      (n.setNodeMarkup(s + r.tableStart, null, {
        ...Yl(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
        rowspan: r.bottom - r.top,
      }),
      o.size)
    ) {
      let e = s + 1 + c.content.size,
        t = vu(c) ? s + 1 : e;
      n.replaceWith(t + r.tableStart, e + r.tableStart, o);
    }
    n.setSelection(new Y(n.doc.resolve(s + r.tableStart))), t(n);
  }
  return !0;
}
function xu(e, t) {
  let n = J(e.schema);
  return Su(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function Su(e) {
  return (t, n) => {
    let r = t.selection,
      i,
      a;
    if (r instanceof Y) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      (i = r.$anchorCell.nodeAfter), (a = r.$anchorCell.pos);
    } else {
      if (((i = Vl(r.$from)), !i)) return !1;
      a = Bl(r.$from)?.pos;
    }
    if (
      i == null ||
      a == null ||
      (i.attrs.colspan == 1 && i.attrs.rowspan == 1)
    )
      return !1;
    if (n) {
      let o = i.attrs,
        s = [],
        c = o.colwidth;
      o.rowspan > 1 && (o = { ...o, rowspan: 1 }),
        o.colspan > 1 && (o = { ...o, colspan: 1 });
      let l = ou(t),
        u = t.tr;
      for (let e = 0; e < l.right - l.left; e++)
        s.push(c ? { ...o, colwidth: c && c[e] ? [c[e]] : null } : o);
      let d;
      for (let t = l.top; t < l.bottom; t++) {
        let n = l.map.positionAt(t, l.left, l.table);
        t == l.top && (n += i.nodeSize);
        for (let r = l.left, a = 0; r < l.right; r++, a++)
          (r != l.left || t != l.top) &&
            u.insert(
              (d = u.mapping.map(n + l.tableStart, 1)),
              e({ node: i, row: t, col: r }).createAndFill(s[a]),
            );
      }
      u.setNodeMarkup(a, e({ node: i, row: l.top, col: l.left }), s[0]),
        r instanceof Y &&
          u.setSelection(
            new Y(
              u.doc.resolve(r.$anchorCell.pos),
              d ? u.doc.resolve(d) : void 0,
            ),
          ),
        n(u);
    }
    return !0;
  };
}
function Cu(e) {
  return function (t, n) {
    if (!Hl(t)) return !1;
    if (n) {
      let r = J(t.schema),
        i = ou(t),
        a = t.tr,
        o = i.map.cellsInRect(
          e == `column`
            ? { left: i.left, top: 0, right: i.right, bottom: i.map.height }
            : e == `row`
              ? { left: 0, top: i.top, right: i.map.width, bottom: i.bottom }
              : i,
        ),
        s = o.map((e) => i.table.nodeAt(e));
      for (let e = 0; e < o.length; e++)
        s[e].type == r.header_cell &&
          a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
      if (a.steps.length == 0)
        for (let e = 0; e < o.length; e++)
          a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
      n(a);
    }
    return !0;
  };
}
function wu(e, t, n) {
  let r = t.map.cellsInRect({
    left: 0,
    top: 0,
    right: e == `row` ? t.map.width : 1,
    bottom: e == `column` ? t.map.height : 1,
  });
  for (let e = 0; e < r.length; e++) {
    let i = t.table.nodeAt(r[e]);
    if (i && i.type !== n.header_cell) return !1;
  }
  return !0;
}
function Tu(e, t) {
  return (
    (t ||= { useDeprecatedLogic: !1 }),
    t.useDeprecatedLogic
      ? Cu(e)
      : function (t, n) {
          if (!Hl(t)) return !1;
          if (n) {
            let r = J(t.schema),
              i = ou(t),
              a = t.tr,
              o = wu(`row`, i, r),
              s = wu(`column`, i, r),
              c = (e === `column` ? o : e === `row` && s) ? 1 : 0,
              l =
                e == `column`
                  ? { left: 0, top: c, right: 1, bottom: i.map.height }
                  : e == `row`
                    ? { left: c, top: 0, right: i.map.width, bottom: 1 }
                    : i,
              u =
                e == `column`
                  ? s
                    ? r.cell
                    : r.header_cell
                  : e == `row`
                    ? o
                      ? r.cell
                      : r.header_cell
                    : r.cell;
            i.map.cellsInRect(l).forEach((e) => {
              let t = e + i.tableStart,
                n = a.doc.nodeAt(t);
              n && a.setNodeMarkup(t, u, n.attrs);
            }),
              n(a);
          }
          return !0;
        }
  );
}
var Eu = Tu(`row`, { useDeprecatedLogic: !0 }),
  Du = Tu(`column`, { useDeprecatedLogic: !0 }),
  Ou = Tu(`cell`, { useDeprecatedLogic: !0 });
function ku(e, t) {
  let n = e.selection;
  if (!(n instanceof Y)) return !1;
  if (t) {
    let r = e.tr,
      i = J(e.schema).cell.createAndFill().content;
    n.forEachCell((e, t) => {
      e.content.eq(i) ||
        r.replace(
          r.mapping.map(t + 1),
          r.mapping.map(t + e.nodeSize - 1),
          new S(i, 0, 0),
        );
    }),
      r.docChanged && t(r);
  }
  return !0;
}
function Au(e) {
  if (!e.size) return null;
  let { content: t, openStart: n, openEnd: r } = e;
  for (
    ;
    t.childCount == 1 &&
    ((n > 0 && r > 0) || t.child(0).type.spec.tableRole == `table`);
  )
    n--, r--, (t = t.child(0).content);
  let i = t.child(0),
    a = i.type.spec.tableRole,
    o = i.type.schema,
    s = [];
  if (a == `row`)
    for (let e = 0; e < t.childCount; e++) {
      let i = t.child(e).content,
        a = e ? 0 : Math.max(0, n - 1),
        c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
      (a || c) && (i = Mu(J(o).row, new S(i, a, c)).content), s.push(i);
    }
  else if (a == `cell` || a == `header_cell`)
    s.push(n || r ? Mu(J(o).row, new S(t, n, r)).content : t);
  else return null;
  return ju(o, s);
}
function ju(e, t) {
  let n = [];
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    for (let t = r.childCount - 1; t >= 0; t--) {
      let { rowspan: i, colspan: a } = r.child(t).attrs;
      for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
    }
  }
  let r = 0;
  for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
  for (let i = 0; i < n.length; i++)
    if ((i >= t.length && t.push(b.empty), n[i] < r)) {
      let a = J(e).cell.createAndFill(),
        o = [];
      for (let e = n[i]; e < r; e++) o.push(a);
      t[i] = t[i].append(b.from(o));
    }
  return { height: t.length, width: r, rows: t };
}
function Mu(e, t) {
  let n = e.createAndFill();
  return new Sr(n).replace(0, n.content.size, t).doc;
}
function Nu({ width: e, height: t, rows: n }, r, i) {
  if (e != r) {
    let t = [],
      i = [];
    for (let e = 0; e < n.length; e++) {
      let a = n[e],
        o = [];
      for (let n = t[e] || 0, i = 0; n < r; i++) {
        let s = a.child(i % a.childCount);
        n + s.attrs.colspan > r &&
          (s = s.type.createChecked(
            Jl(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r),
            s.content,
          )),
          o.push(s),
          (n += s.attrs.colspan);
        for (let n = 1; n < s.attrs.rowspan; n++)
          t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
      }
      i.push(b.from(o));
    }
    (n = i), (e = r);
  }
  if (t != i) {
    let e = [];
    for (let r = 0, a = 0; r < i; r++, a++) {
      let o = [],
        s = n[a % t];
      for (let e = 0; e < s.childCount; e++) {
        let t = s.child(e);
        r + t.attrs.rowspan > i &&
          (t = t.type.create(
            { ...t.attrs, rowspan: Math.max(1, i - t.attrs.rowspan) },
            t.content,
          )),
          o.push(t);
      }
      e.push(b.from(o));
    }
    (n = e), (t = i);
  }
  return { width: e, height: t, rows: n };
}
function Pu(e, t, n, r, i, a, o) {
  let s = e.doc.type.schema,
    c = J(s),
    l,
    u;
  if (i > t.width)
    for (let a = 0, s = 0; a < t.height; a++) {
      let d = n.child(a);
      s += d.nodeSize;
      let f = [],
        p;
      p =
        d.lastChild == null || d.lastChild.type == c.cell
          ? (l ||= c.cell.createAndFill())
          : (u ||= c.header_cell.createAndFill());
      for (let e = t.width; e < i; e++) f.push(p);
      e.insert(e.mapping.slice(o).map(s - 1 + r), f);
    }
  if (a > t.height) {
    let s = [];
    for (
      let e = 0, r = (t.height - 1) * t.width;
      e < Math.max(t.width, i);
      e++
    ) {
      let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == c.header_cell;
      s.push(
        i
          ? (u ||= c.header_cell.createAndFill())
          : (l ||= c.cell.createAndFill()),
      );
    }
    let d = c.row.create(null, b.from(s)),
      f = [];
    for (let e = t.height; e < a; e++) f.push(d);
    e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
  }
  return !!(l || u);
}
function Fu(e, t, n, r, i, a, o, s) {
  if (o == 0 || o == t.height) return !1;
  let c = !1;
  for (let l = i; l < a; l++) {
    let i = o * t.width + l,
      a = t.map[i];
    if (t.map[i - t.width] == a) {
      c = !0;
      let i = n.nodeAt(a),
        { top: u, left: d } = t.findCell(a);
      e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
        ...i.attrs,
        rowspan: o - u,
      }),
        e.insert(
          e.mapping.slice(s).map(t.positionAt(o, d, n)),
          i.type.createAndFill({
            ...i.attrs,
            rowspan: u + i.attrs.rowspan - o,
          }),
        ),
        (l += i.attrs.colspan - 1);
    }
  }
  return c;
}
function Iu(e, t, n, r, i, a, o, s) {
  if (o == 0 || o == t.width) return !1;
  let c = !1;
  for (let l = i; l < a; l++) {
    let i = l * t.width + o,
      a = t.map[i];
    if (t.map[i - 1] == a) {
      c = !0;
      let i = n.nodeAt(a),
        u = t.colCount(a),
        d = e.mapping.slice(s).map(a + r);
      e.setNodeMarkup(d, null, Jl(i.attrs, o - u, i.attrs.colspan - (o - u))),
        e.insert(d + i.nodeSize, i.type.createAndFill(Jl(i.attrs, 0, o - u))),
        (l += i.attrs.rowspan - 1);
    }
  }
  return c;
}
function Lu(e, t, n, r, i) {
  let a = n ? e.doc.nodeAt(n - 1) : e.doc;
  if (!a) throw Error(`No table found`);
  let o = q.get(a),
    { top: s, left: c } = r,
    l = c + i.width,
    u = s + i.height,
    d = e.tr,
    f = 0;
  function p() {
    if (((a = n ? d.doc.nodeAt(n - 1) : d.doc), !a))
      throw Error(`No table found`);
    (o = q.get(a)), (f = d.mapping.maps.length);
  }
  Pu(d, o, a, n, l, u, f) && p(),
    Fu(d, o, a, n, c, l, s, f) && p(),
    Fu(d, o, a, n, c, l, u, f) && p(),
    Iu(d, o, a, n, s, u, c, f) && p(),
    Iu(d, o, a, n, s, u, l, f) && p();
  for (let e = s; e < u; e++) {
    let t = o.positionAt(e, c, a),
      r = o.positionAt(e, l, a);
    d.replace(
      d.mapping.slice(f).map(t + n),
      d.mapping.slice(f).map(r + n),
      new S(i.rows[e - s], 0, 0),
    );
  }
  p(),
    d.setSelection(
      new Y(
        d.doc.resolve(n + o.positionAt(s, c, a)),
        d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)),
      ),
    ),
    t(d);
}
var Ru = kl({
  ArrowLeft: Bu(`horiz`, -1),
  ArrowRight: Bu(`horiz`, 1),
  ArrowUp: Bu(`vert`, -1),
  ArrowDown: Bu(`vert`, 1),
  "Shift-ArrowLeft": Vu(`horiz`, -1),
  "Shift-ArrowRight": Vu(`horiz`, 1),
  "Shift-ArrowUp": Vu(`vert`, -1),
  "Shift-ArrowDown": Vu(`vert`, 1),
  Backspace: ku,
  "Mod-Backspace": ku,
  Delete: ku,
  "Mod-Delete": ku,
});
function zu(e, t, n) {
  return (
    !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0)
  );
}
function Bu(e, t) {
  return (n, r, i) => {
    if (!i) return !1;
    let a = n.selection;
    if (a instanceof Y) return zu(n, r, E.near(a.$headCell, t));
    if (e != `horiz` && !a.empty) return !1;
    let o = Gu(i, e, t);
    if (o == null) return !1;
    if (e == `horiz`) return zu(n, r, E.near(n.doc.resolve(a.head + t), t));
    {
      let i = n.doc.resolve(o),
        a = ql(i, e, t),
        s;
      return (
        (s = a
          ? E.near(a, 1)
          : t < 0
            ? E.near(n.doc.resolve(i.before(-1)), -1)
            : E.near(n.doc.resolve(i.after(-1)), 1)),
        zu(n, r, s)
      );
    }
  };
}
function Vu(e, t) {
  return (n, r, i) => {
    if (!i) return !1;
    let a = n.selection,
      o;
    if (a instanceof Y) o = a;
    else {
      let r = Gu(i, e, t);
      if (r == null) return !1;
      o = new Y(n.doc.resolve(r));
    }
    let s = ql(o.$headCell, e, t);
    return s ? zu(n, r, new Y(o.$anchorCell, s)) : !1;
  };
}
function Hu(e, t) {
  let n = e.state.doc,
    r = Bl(n.resolve(t));
  return r ? (e.dispatch(e.state.tr.setSelection(new Y(r))), !0) : !1;
}
function Uu(e, t, n) {
  if (!Hl(e.state)) return !1;
  let r = Au(n),
    i = e.state.selection;
  if (i instanceof Y) {
    r ||= {
      width: 1,
      height: 1,
      rows: [b.from(Mu(J(e.state.schema).cell, n))],
    };
    let t = i.$anchorCell.node(-1),
      a = i.$anchorCell.start(-1),
      o = q.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
    return (
      (r = Nu(r, o.right - o.left, o.bottom - o.top)),
      Lu(e.state, e.dispatch, a, o, r),
      !0
    );
  }
  if (r) {
    let t = Ul(e.state),
      n = t.start(-1);
    return (
      Lu(e.state, e.dispatch, n, q.get(t.node(-1)).findCell(t.pos - n), r), !0
    );
  }
  return !1;
}
function Wu(e, t) {
  if (t.ctrlKey || t.metaKey) return;
  let n = Ku(e, t.target),
    r;
  if (t.shiftKey && e.state.selection instanceof Y)
    i(e.state.selection.$anchorCell, t), t.preventDefault();
  else if (
    t.shiftKey &&
    n &&
    (r = Bl(e.state.selection.$anchor)) != null &&
    qu(e, t)?.pos != r.pos
  )
    i(r, t), t.preventDefault();
  else if (!n) return;
  function i(t, n) {
    let r = qu(e, n),
      i = zl.getState(e.state) == null;
    if (!r || !Kl(t, r)) {
      if (i) r = t;
      else return;
    }
    let a = new Y(t, r);
    if (i || !e.state.selection.eq(a)) {
      let n = e.state.tr.setSelection(a);
      i && n.setMeta(zl, t.pos), e.dispatch(n);
    }
  }
  function a() {
    e.root.removeEventListener(`mouseup`, a),
      e.root.removeEventListener(`dragstart`, a),
      e.root.removeEventListener(`mousemove`, o),
      zl.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(zl, -1));
  }
  function o(r) {
    let o = r,
      s = zl.getState(e.state),
      c;
    if (s != null) c = e.state.doc.resolve(s);
    else if (Ku(e, o.target) != n && ((c = qu(e, t)), !c)) return a();
    c && i(c, o);
  }
  e.root.addEventListener(`mouseup`, a),
    e.root.addEventListener(`dragstart`, a),
    e.root.addEventListener(`mousemove`, o);
}
function Gu(e, t, n) {
  if (!(e.state.selection instanceof D)) return null;
  let { $head: r } = e.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    let a = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : a.childCount))
      return null;
    if (
      a.type.spec.tableRole == `cell` ||
      a.type.spec.tableRole == `header_cell`
    ) {
      let a = r.before(i),
        o = t == `vert` ? (n > 0 ? `down` : `up`) : n > 0 ? `right` : `left`;
      return e.endOfTextblock(o) ? a : null;
    }
  }
  return null;
}
function Ku(e, t) {
  for (; t && t != e.dom; t = t.parentNode)
    if (t.nodeName == `TD` || t.nodeName == `TH`) return t;
  return null;
}
function qu(e, t) {
  let n = e.posAtCoords({ left: t.clientX, top: t.clientY });
  return n && n ? Bl(e.state.doc.resolve(n.pos)) : null;
}
var Ju = class {
  constructor(e, t) {
    (this.node = e),
      (this.defaultCellMinWidth = t),
      (this.dom = document.createElement(`div`)),
      (this.dom.className = `tableWrapper`),
      (this.table = this.dom.appendChild(document.createElement(`table`))),
      this.table.style.setProperty(`--default-cell-min-width`, `${t}px`),
      (this.colgroup = this.table.appendChild(
        document.createElement(`colgroup`),
      )),
      Yu(e, this.colgroup, this.table, t),
      (this.contentDOM = this.table.appendChild(
        document.createElement(`tbody`),
      ));
  }
  update(e) {
    return (
      e.type == this.node.type &&
      ((this.node = e),
      Yu(e, this.colgroup, this.table, this.defaultCellMinWidth),
      !0)
    );
  }
  ignoreMutation(e) {
    return (
      e.type == `attributes` &&
      (e.target == this.table || this.colgroup.contains(e.target))
    );
  }
};
function Yu(e, t, n, r, i, a) {
  var o;
  let s = 0,
    c = !0,
    l = t.firstChild,
    u = e.firstChild;
  if (u) {
    for (let e = 0, n = 0; e < u.childCount; e++) {
      let { colspan: o, colwidth: d } = u.child(e).attrs;
      for (let e = 0; e < o; e++, n++) {
        let o = i == n ? a : d && d[e],
          u = o ? o + `px` : ``;
        if (((s += o || r), o || (c = !1), l))
          l.style.width != u && (l.style.width = u), (l = l.nextSibling);
        else {
          let e = document.createElement(`col`);
          (e.style.width = u), t.appendChild(e);
        }
      }
    }
    for (; l; ) {
      let e = l.nextSibling;
      (o = l.parentNode) == null || o.removeChild(l), (l = e);
    }
    c
      ? ((n.style.width = s + `px`), (n.style.minWidth = ``))
      : ((n.style.width = ``), (n.style.minWidth = s + `px`));
  }
}
var X = new Gr(`tableColumnResizing`);
function Xu({
  handleWidth: e = 5,
  cellMinWidth: t = 25,
  defaultCellMinWidth: n = 100,
  View: r = Ju,
  lastColumnResizable: i = !0,
} = {}) {
  let a = new k({
    key: X,
    state: {
      init(e, t) {
        let i = a.spec?.props?.nodeViews,
          o = J(t.schema).table.name;
        return r && i && (i[o] = (e, t) => new r(e, n, t)), new Zu(-1, !1);
      },
      apply(e, t) {
        return t.apply(e);
      },
    },
    props: {
      attributes: (e) => {
        let t = X.getState(e);
        return t && t.activeHandle > -1 ? { class: `resize-cursor` } : {};
      },
      handleDOMEvents: {
        mousemove: (t, n) => {
          Qu(t, n, e, i);
        },
        mouseleave: (e) => {
          $u(e);
        },
        mousedown: (e, r) => {
          ed(e, r, t, n);
        },
      },
      decorations: (e) => {
        let t = X.getState(e);
        if (t && t.activeHandle > -1) return ld(e, t.activeHandle);
      },
      nodeViews: {},
    },
  });
  return a;
}
var Zu = class e {
  constructor(e, t) {
    (this.activeHandle = e), (this.dragging = t);
  }
  apply(t) {
    let n = this,
      r = t.getMeta(X);
    if (r && r.setHandle != null) return new e(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new e(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && t.docChanged) {
      let r = t.mapping.map(n.activeHandle, -1);
      return Gl(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
    }
    return n;
  }
};
function Qu(e, t, n, r) {
  if (!e.editable) return;
  let i = X.getState(e.state);
  if (i && !i.dragging) {
    let a = nd(t.target),
      o = -1;
    if (a) {
      let { left: r, right: i } = a.getBoundingClientRect();
      t.clientX - r <= n
        ? (o = rd(e, t, `left`, n))
        : i - t.clientX <= n && (o = rd(e, t, `right`, n));
    }
    if (o != i.activeHandle) {
      if (!r && o !== -1) {
        let t = e.state.doc.resolve(o),
          n = t.node(-1),
          r = q.get(n),
          i = t.start(-1);
        if (
          r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 ==
          r.width - 1
        )
          return;
      }
      ad(e, o);
    }
  }
}
function $u(e) {
  if (!e.editable) return;
  let t = X.getState(e.state);
  t && t.activeHandle > -1 && !t.dragging && ad(e, -1);
}
function ed(e, t, n, r) {
  if (!e.editable) return !1;
  let i = e.dom.ownerDocument.defaultView ?? window,
    a = X.getState(e.state);
  if (!a || a.activeHandle == -1 || a.dragging) return !1;
  let o = e.state.doc.nodeAt(a.activeHandle),
    s = td(e, a.activeHandle, o.attrs);
  e.dispatch(
    e.state.tr.setMeta(X, {
      setDragging: { startX: t.clientX, startWidth: s },
    }),
  );
  function c(t) {
    i.removeEventListener(`mouseup`, c), i.removeEventListener(`mousemove`, l);
    let r = X.getState(e.state);
    r?.dragging &&
      (od(e, r.activeHandle, id(r.dragging, t, n)),
      e.dispatch(e.state.tr.setMeta(X, { setDragging: null })));
  }
  function l(t) {
    if (!t.which) return c(t);
    let i = X.getState(e.state);
    if (i && i.dragging) {
      let a = id(i.dragging, t, n);
      sd(e, i.activeHandle, a, r);
    }
  }
  return (
    sd(e, a.activeHandle, s, r),
    i.addEventListener(`mouseup`, c),
    i.addEventListener(`mousemove`, l),
    t.preventDefault(),
    !0
  );
}
function td(e, t, { colspan: n, colwidth: r }) {
  let i = r && r[r.length - 1];
  if (i) return i;
  let a = e.domAtPos(t),
    o = a.node.childNodes[a.offset].offsetWidth,
    s = n;
  if (r) for (let e = 0; e < n; e++) r[e] && ((o -= r[e]), s--);
  return o / s;
}
function nd(e) {
  for (; e && e.nodeName != `TD` && e.nodeName != `TH`; )
    e =
      e.classList && e.classList.contains(`ProseMirror`) ? null : e.parentNode;
  return e;
}
function rd(e, t, n, r) {
  let i = n == `right` ? -r : r,
    a = e.posAtCoords({ left: t.clientX + i, top: t.clientY });
  if (!a) return -1;
  let { pos: o } = a,
    s = Bl(e.state.doc.resolve(o));
  if (!s) return -1;
  if (n == `right`) return s.pos;
  let c = q.get(s.node(-1)),
    l = s.start(-1),
    u = c.map.indexOf(s.pos - l);
  return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function id(e, t, n) {
  let r = t.clientX - e.startX;
  return Math.max(n, e.startWidth + r);
}
function ad(e, t) {
  e.dispatch(e.state.tr.setMeta(X, { setHandle: t }));
}
function od(e, t, n) {
  let r = e.state.doc.resolve(t),
    i = r.node(-1),
    a = q.get(i),
    o = r.start(-1),
    s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1,
    c = e.state.tr;
  for (let e = 0; e < a.height; e++) {
    let t = e * a.width + s;
    if (e && a.map[t] == a.map[t - a.width]) continue;
    let r = a.map[t],
      l = i.nodeAt(r).attrs,
      u = l.colspan == 1 ? 0 : s - a.colCount(r);
    if (l.colwidth && l.colwidth[u] == n) continue;
    let d = l.colwidth ? l.colwidth.slice() : cd(l.colspan);
    (d[u] = n), c.setNodeMarkup(o + r, null, { ...l, colwidth: d });
  }
  c.docChanged && e.dispatch(c);
}
function sd(e, t, n, r) {
  let i = e.state.doc.resolve(t),
    a = i.node(-1),
    o = i.start(-1),
    s = q.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1,
    c = e.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != `TABLE`; ) c = c.parentNode;
  c && Yu(a, c.firstChild, c, r, s, n);
}
function cd(e) {
  return Array(e).fill(0);
}
function ld(e, t) {
  let n = [],
    r = e.doc.resolve(t),
    i = r.node(-1);
  if (!i) return W.empty;
  let a = q.get(i),
    o = r.start(-1),
    s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
  for (let t = 0; t < a.height; t++) {
    let r = s + t * a.width;
    if (
      (s == a.width - 1 || a.map[r] != a.map[r + 1]) &&
      (t == 0 || a.map[r] != a.map[r - a.width])
    ) {
      let t = a.map[r],
        s = o + t + i.nodeAt(t).nodeSize - 1,
        c = document.createElement(`div`);
      (c.className = `column-resize-handle`),
        X.getState(e)?.dragging &&
          n.push(
            kc.node(o + t, o + t + i.nodeAt(t).nodeSize, {
              class: `column-resize-dragging`,
            }),
          ),
        n.push(kc.widget(s, c));
    }
  }
  return W.create(e.doc, n);
}
function ud({ allowTableNodeSelection: e = !1 } = {}) {
  return new k({
    key: zl,
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        let n = e.getMeta(zl);
        if (n != null) return n == -1 ? null : n;
        if (t == null || !e.docChanged) return t;
        let { deleted: r, pos: i } = e.mapping.mapResult(t);
        return r ? null : i;
      },
    },
    props: {
      decorations: Ql,
      handleDOMEvents: { mousedown: Wu },
      createSelectionBetween(e) {
        return zl.getState(e.state) == null ? null : e.state.selection;
      },
      handleTripleClick: Hu,
      handleKeyDown: Ru,
      handlePaste: Uu,
    },
    appendTransaction(t, n, r) {
      return tu(r, iu(r, n), e);
    },
  });
}
var dd = [`ol`, 0],
  fd = [`ul`, 0],
  pd = [`li`, 0],
  md = {
    attrs: { order: { default: 1 } },
    parseDOM: [
      {
        tag: `ol`,
        getAttrs(e) {
          return {
            order: e.hasAttribute(`start`) ? +e.getAttribute(`start`) : 1,
          };
        },
      },
    ],
    toDOM(e) {
      return e.attrs.order == 1 ? dd : [`ol`, { start: e.attrs.order }, 0];
    },
  },
  hd = {
    parseDOM: [{ tag: `ul` }],
    toDOM() {
      return fd;
    },
  },
  gd = {
    parseDOM: [{ tag: `li` }],
    toDOM() {
      return pd;
    },
    defining: !0,
  };
function _d(e, t = null) {
  return function (n, r) {
    let { $from: i, $to: a } = n.selection,
      o = i.blockRange(a),
      s = !1,
      c = o;
    if (!o) return !1;
    if (
      o.depth >= 2 &&
      i.node(o.depth - 1).type.compatibleContent(e) &&
      o.startIndex == 0
    ) {
      if (i.index(o.depth - 1) == 0) return !1;
      let e = n.doc.resolve(o.start - 2);
      (c = new ht(e, e, o.depth)),
        o.endIndex < o.parent.childCount &&
          (o = new ht(i, n.doc.resolve(a.end(o.depth)), o.depth)),
        (s = !0);
    }
    let l = Bn(c, e, t, o);
    return l ? (r && r(vd(n.tr, o, l, s, e).scrollIntoView()), !0) : !1;
  };
}
function vd(e, t, n, r, i) {
  let a = b.empty;
  for (let e = n.length - 1; e >= 0; e--)
    a = b.from(n[e].type.create(n[e].attrs, a));
  e.step(
    new T(
      t.start - (r ? 2 : 0),
      t.end,
      t.start,
      t.end,
      new S(a, 0, 0),
      n.length,
      !0,
    ),
  );
  let o = 0;
  for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
  let s = n.length - o,
    c = t.start + n.length - (r ? 2 : 0),
    l = t.parent;
  for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1)
    !i && Xn(e.doc, c, s) && (e.split(c, s), (c += 2 * s)),
      (c += l.child(n).nodeSize);
  return e;
}
function yd(e, t) {
  return function (n, r) {
    let { $from: i, $to: a, node: o } = n.selection;
    if ((o && o.isBlock) || i.depth < 2 || !i.sameParent(a)) return !1;
    let s = i.node(-1);
    if (s.type != e) return !1;
    if (
      i.parent.content.size == 0 &&
      i.node(-1).childCount == i.indexAfter(-1)
    ) {
      if (
        i.depth == 3 ||
        i.node(-3).type != e ||
        i.index(-2) != i.node(-2).childCount - 1
      )
        return !1;
      if (r) {
        let t = b.empty,
          a = i.index(-1) ? 1 : i.index(-2) ? 2 : 3;
        for (let e = i.depth - a; e >= i.depth - 3; e--)
          t = b.from(i.node(e).copy(t));
        let o =
          i.indexAfter(-1) < i.node(-2).childCount
            ? 1
            : i.indexAfter(-2) < i.node(-3).childCount
              ? 2
              : 3;
        t = t.append(b.from(e.createAndFill()));
        let s = i.before(i.depth - (a - 1)),
          c = n.tr.replace(s, i.after(-o), new S(t, 4 - a, 0)),
          l = -1;
        c.doc.nodesBetween(s, c.doc.content.size, (e, t) => {
          if (l > -1) return !1;
          e.isTextblock && e.content.size == 0 && (l = t + 1);
        }),
          l > -1 && c.setSelection(E.near(c.doc.resolve(l))),
          r(c.scrollIntoView());
      }
      return !0;
    }
    let c = a.pos == i.end() ? s.contentMatchAt(0).defaultType : null,
      l = n.tr.delete(i.pos, a.pos),
      u = c ? [t ? { type: e, attrs: t } : null, { type: c }] : void 0;
    return Xn(l.doc, i.pos, 2, u)
      ? (r && r(l.split(i.pos, 2, u).scrollIntoView()), !0)
      : !1;
  };
}
function bd(e) {
  return function (t, n) {
    let { $from: r, $to: i } = t.selection,
      a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
    return a
      ? n
        ? r.node(a.depth - 1).type == e
          ? xd(t, n, e, a)
          : Sd(t, n, a)
        : !0
      : !1;
  };
}
function xd(e, t, n, r) {
  let i = e.tr,
    a = r.end,
    o = r.$to.end(r.depth);
  a < o &&
    (i.step(
      new T(
        a - 1,
        o,
        a,
        o,
        new S(b.from(n.create(null, r.parent.copy())), 1, 0),
        1,
        !0,
      ),
    ),
    (r = new ht(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth)));
  let s = Rn(r);
  if (s == null) return !1;
  i.lift(r, s);
  let c = i.mapping.map(a, -1) - 1;
  return Qn(i.doc, c) && i.join(c), t(i.scrollIntoView()), !0;
}
function Sd(e, t, n) {
  let r = e.tr,
    i = n.parent;
  for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--)
    (e -= i.child(t).nodeSize), r.delete(e - 1, e + 1);
  let a = r.doc.resolve(n.start),
    o = a.nodeAfter;
  if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
  let s = n.startIndex == 0,
    c = n.endIndex == i.childCount,
    l = a.node(-1),
    u = a.index(-1);
  if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? b.empty : b.from(i))))
    return !1;
  let d = a.pos,
    f = d + o.nodeSize;
  return (
    r.step(
      new T(
        d - +!!s,
        f + +!!c,
        d + 1,
        f - 1,
        new S(
          (s ? b.empty : b.from(i.copy(b.empty))).append(
            c ? b.empty : b.from(i.copy(b.empty)),
          ),
          +!s,
          +!c,
        ),
        +!s,
      ),
    ),
    t(r.scrollIntoView()),
    !0
  );
}
function Cd(e) {
  return function (t, n) {
    let { $from: r, $to: i } = t.selection,
      a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
    if (!a) return !1;
    let o = a.startIndex;
    if (o == 0) return !1;
    let s = a.parent,
      c = s.child(o - 1);
    if (c.type != e) return !1;
    if (n) {
      let r = c.lastChild && c.lastChild.type == s.type,
        i = b.from(r ? e.create() : null),
        o = new S(
          b.from(e.create(null, b.from(s.type.create(null, i)))),
          r ? 3 : 1,
          0,
        ),
        l = a.start,
        u = a.end;
      n(t.tr.step(new T(l - (r ? 3 : 1), u, l, u, o, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var Z = r(),
  wd = class {
    m_nodes = [];
    m_schema;
    m_bConvertNewlinesToBR;
    m_fnProcessText;
    constructor(e, t, n) {
      (this.m_schema = e),
        (this.m_bConvertNewlinesToBR = t?.bConvertNewlinesToBR ?? !1);
      let r = n && `mark` in n;
      this.m_fnProcessText = r ? void 0 : t?.fnProcessText;
    }
    AppendText(e, t) {
      e.length &&
        (this.m_bConvertNewlinesToBR
          ? this.m_nodes.push(...this.GenerateBreaksForNewlines(e))
          : this.m_nodes.push(...this.TextNode(e)));
    }
    AppendNode(e) {
      this.m_nodes.push(e);
    }
    GetElements() {
      return this.m_nodes;
    }
    GenerateBreaksForNewlines(e) {
      let t = [],
        n = 0;
      for (
        let r = e.indexOf(
          `
`,
          n,
        );
        r !== -1;
        r = e.indexOf(
          `
`,
          n,
        )
      )
        n != r && t.push(...this.TextNode(e.substring(n, r))),
          t.push(this.m_schema.nodes.hard_break.createChecked()),
          (n = r + 1);
      return n < e.length && t.push(...this.TextNode(e.substring(n))), t;
    }
    TextNode(e) {
      return (
        (this.m_fnProcessText && this.m_fnProcessText(e)) || [
          this.m_schema.text(e),
        ]
      );
    }
  };
function Td(e) {
  return e
    .filter((e) => e.isText)
    .map((e) => e.text)
    .join();
}
function Ed(e) {
  let t = ``;
  return (
    e.descendants((e) => {
      e.isText && (t += e.text);
    }),
    t
  );
}
var Dd = class extends c {
  m_schemaConfig;
  m_mapPMBBNodes = new Map();
  m_bUseBackslashEscapes;
  constructor(e, t) {
    super(e.bbcode_dictionary, (n) => {
      let r = n?.tag && e.bbcode_dictionary.get(n.tag);
      return new wd(
        e.pm_schema,
        t,
        r && `Constructor` in r ? r.Constructor : void 0,
      );
    }),
      (this.m_schemaConfig = e),
      (this.m_bUseBackslashEscapes = t?.bUseBackslashEscapes ?? !0),
      this.m_schemaConfig.bbcode_dictionary.forEach((e) => {
        `node` in e.Constructor &&
          this.m_mapPMBBNodes.set(e.Constructor.node.name, e.Constructor);
      });
  }
  get schema() {
    return this.m_schemaConfig.pm_schema;
  }
  ParseBBCode(e) {
    let t = this.Parse(
      e,
      this.BBNodeToPMNode.bind(this),
      this.m_bUseBackslashEscapes,
    );
    return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
      {},
      this.ConvertLineBreaksToParagraphs(b.fromArray(t)),
    );
  }
  TryCreateNode(e, t, n) {
    let r = b.from(t),
      i;
    if (
      !e.node.validContent(r) &&
      (e.node.isInline ||
        (r = b.from(
          t.filter(
            (t) =>
              !(
                (t.isText && t.text.match(/^\s*$/)) ||
                (t.type == this.schema.nodes.hard_break &&
                  !e.node.validContent(b.from(t)))
              ),
          ),
        )),
      !e.node.validContent(r))
    ) {
      let t = e.acceptNode;
      i = [];
      let n = [],
        a = !1,
        o = !1;
      for (let s = 0; s < r.childCount; s++) {
        let c = r.child(s),
          l = b.from(c),
          u = e.node.validContent(l);
        !o && (u || t?.validContent(l))
          ? (u || (a = !0), n.push(c))
          : ((o = !0), i.push(c));
      }
      if ((console.assert(!a || !!t), a && t)) {
        t.isBlock &&
          n.length > 1 &&
          n[n.length - 1].type == this.schema.nodes.hard_break &&
          (n = n.slice(0, -1));
        let a = this.m_mapPMBBNodes.get(t.name);
        ge(a, `Indicated acceptNode type ${t.name} for ${e.node.name} missing`);
        let o;
        try {
          o = a ? this.TryCreateNode(a, n, void 0) : t.createChecked(void 0, n);
        } catch (e) {
          console.error(e), (o = []), (i = [...n, ...i]);
        }
        r = b.from(o);
      } else r = b.from(n);
    }
    try {
      let t = e.node.createAndFill(n, r) || e.node.createChecked(n, r);
      return i ? [t, ...i] : t;
    } catch {
      return (
        ge(
          !1,
          `Invalid content for node type ${e.node.name}, removing and promoting children.`,
        ),
        t
      );
    }
  }
  BBNodeToPMNode(e, t, ...n) {
    let r = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
    try {
      if (
        (`convertContentToAttr` in e &&
          e.convertContentToAttr &&
          ((r && r[e.convertContentToAttr]) ||
            (r = { ...(r || {}), [e.convertContentToAttr]: Td(n) }),
          `node` in e && (n = [])),
        `node` in e)
      )
        return this.TryCreateNode(e, n, r);
      {
        let t = e.mark.create(r);
        return n.map((e) => this.RecursivelyApplyMark(e, t));
      }
    } catch (e) {
      return console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), [];
    }
  }
  RecursivelyApplyMark(e, t) {
    if (e.isText || e.type.allowsMarkType(t.type))
      return e.mark([...e.marks, t]);
    {
      let n = [];
      return (
        e.descendants((e) => (n.push(this.RecursivelyApplyMark(e, t)), !1)),
        e.type.create(e.attrs, n, e.marks)
      );
    }
  }
  ConvertLineBreaksToParagraphs(e) {
    let t = new Map(),
      n = this.m_schemaConfig.pm_schema;
    this.m_mapPMBBNodes.forEach((e) => {
      e.acceptNode && t.set(e.acceptNode.name, e.node);
    });
    let r = [],
      i = {
        nodes: [],
        nodeType: void 0,
        reset() {
          (this.nodes = []), (this.nodeType = void 0);
        },
        accumulate(e, t) {
          return (
            this.nodeType && e != this.nodeType && this.emit(),
            (this.nodeType = e),
            this.nodes.push(t),
            !0
          );
        },
        emit(e = !1) {
          let t = this.nodeType || (e ? n.nodes.paragraph : void 0);
          t && (r.push(t.createChecked({}, this.nodes)), this.reset());
        },
      };
    return (
      e.forEach((e) => {
        let a = e.type == n.nodes.hard_break,
          o = b.from(e);
        if (a || n.topNodeType.validContent(o)) {
          let t = a && i.nodes.length > 0;
          i.emit(),
            a ? t || r.push(n.nodes.paragraph.createChecked()) : r.push(e);
        } else {
          let r;
          if (
            ((r = n.nodes.paragraph.validContent(o)
              ? n.nodes.paragraph
              : t.get(e.type.name)),
            r)
          )
            i.accumulate(r, e);
          else {
            ge(
              !1,
              `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
            );
            let t = Ed(e);
            t && i.accumulate(n.nodes.paragraph, n.text(t));
          }
        }
      }),
      (i.nodes.length || !r.length) && i.emit(!0),
      b.from(r)
    );
  }
};
function Od(e, t) {
  let { from: n, $from: r, to: i, empty: a } = e.selection;
  return a
    ? !!t.isInSet(e.storedMarks || r.marks())
    : e.doc.rangeHasMark(n, i, t);
}
function kd(e, t, n) {
  let { parent: r } = n,
    i = r.childAfter(n.parentOffset),
    a = i.node?.marks.find((e) => e.type == t);
  if (!a) return;
  let o = n.index() - 1,
    s = n.start() + i.offset;
  for (; o >= 0 && a.isInSet(r.child(o).marks); )
    (s -= r.child(o).nodeSize), --o;
  let c = n.index() + 1,
    l = n.start() + i.offset + i.node.nodeSize;
  for (; c < r.childCount && a.isInSet(r.child(c).marks); )
    (l += r.child(c).nodeSize), (c += 1);
  let u = e.doc.slice(s, l);
  return { from: s, to: l, slice: u, mark: a };
}
function Ad(e, t, n) {
  if (e.type !== t) return !1;
  if (n === void 0) return !0;
  for (let t in n) if (n[t] !== e.attrs[t]) return !1;
  return !0;
}
function jd(e, t, n) {
  let { $from: r, to: i } = e.selection;
  for (let e = r.depth; e > 0; e--) {
    if (i > r.end(e)) return !1;
    if (Ad(r.node(e), t, n)) return !0;
  }
  return !1;
}
function Md(e, t, n) {
  let { $from: r, to: i } = e.selection;
  for (let e = r.sharedDepth(i); e > 0; e--) {
    let i = r.node(e);
    if (n === void 0 ? i.type === t : i.hasMarkup(t, n)) return r.before(e);
  }
}
function Nd(e, t, n = {}) {
  return new Yi(e, (e, r, i, a) => {
    let o = n instanceof Function ? n(r) : n,
      s = e.tr;
    if (r[1]) {
      let e = i + r[0].indexOf(r[1]),
        t = e + r[1].length;
      t < a && s.delete(t, a), e > i && s.delete(i, e), (a = i + r[1].length);
    }
    return s.addMark(i, a, t.create(o)), s.removeStoredMark(t), s;
  });
}
function Pd(e, t, n) {
  let r = { left: t, top: n },
    i = e.posAtCoords(r);
  if (i?.pos) {
    let t = e.state.doc.resolve(i.pos);
    e.dispatch(e.state.tr.setSelection(D.near(t)));
  }
}
function Fd(e) {
  let { nodes: t, marks: n } = e,
    r = bi(
      ai,
      (e, n) => (
        n &&
          n(
            e.tr
              .replaceSelectionWith(t.hard_break.createChecked())
              .scrollIntoView(),
          ),
        !0
      ),
    ),
    i = {
      "Mod-z": qi,
      "Mod-y": Ji,
      "Shift-Mod-z": Ji,
      Backspace: ea,
      Escape: ui,
      "Mod-Enter": r,
      "Shift-Enter": r,
      "Mod-b": yi(n.strong),
      "Mod-i": yi(n.italic),
      "Mod-u": yi(n.underline),
      "Mod-Shift-x": yi(n.strike),
      "Ctrl-Shift-s": yi(n.strike),
      Enter: yd(t.list_item),
      "Mod-[": bd(t.list_item),
      "Mod-]": Cd(t.list_item),
      "Ctrl-Shift-1": _i(t.heading, { level: 1 }),
      "Ctrl-Shift-2": _i(t.heading, { level: 2 }),
      "Ctrl-Shift-3": _i(t.heading, { level: 3 }),
      "Ctrl-Shift-4": _i(t.heading, { level: 4 }),
      "Ctrl-Shift-5": _i(t.heading, { level: 5 }),
      "Ctrl-Shift-7": _i(t.ordered_list),
      "Ctrl-Shift-8": _i(t.bullet_list),
      "Ctrl-Shift-0": _i(t.paragraph),
    };
  return (
    n.code && (i[`Ctrl-Shift-c`] = yi(n.code)),
    t.code_block && (i[`Alt-Ctrl-Shift-c`] = _i(t.code_block)),
    t.horizontal_rule &&
      (i[`Mod-_`] = (e, n) => (
        n &&
          n(
            e.tr
              .replaceSelectionWith(t.horizontal_rule.create())
              .scrollIntoView(),
          ),
        !0
      )),
    Ol(i)
  );
}
function Id(e, t) {
  return new Yi(e, (e, n, r, i) => e.tr.replaceWith(r, i, t.create()));
}
function Ld(e) {
  let { nodes: t, marks: n } = e;
  return Qi({
    rules: [
      ta(
        /^(\d+)\.\s$/,
        t.ordered_list,
        (e) => ({ order: parseInt(e[1]) }),
        (e, t) => t.childCount + t.attrs.order == parseInt(e[1]),
      ),
      ta(/^\s*([-+*])\s$/, t.bullet_list),
      Nd(/(?<!\w)\*([^*]+)\*/, n.strong),
      Nd(/(?<!\w)_([^_]+)_/, n.italic),
      Nd(/(?<!\w)~([^~]+)~/, n.strike),
      Nd(/(?<!\w)`([^`]+)`/, n.code),
      na(/^```$/, t.code_block),
      na(/^(#{1,5})\s$/, t.heading, (e) => ({ level: e[1].length })),
      t.horizontal_rule && Id(/^(\*\*\*|---|___)$/, t.horizontal_rule),
    ].filter(Boolean),
  });
}
var Q = class e extends E {
  constructor(e) {
    super(e, e);
  }
  map(t, n) {
    let r = t.resolve(n.map(this.head));
    return e.valid(r) ? new e(r) : E.near(r);
  }
  content() {
    return S.empty;
  }
  eq(t) {
    return t instanceof e && t.head == this.head;
  }
  toJSON() {
    return { type: `gapcursor`, pos: this.head };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number`)
      throw RangeError(`Invalid input for GapCursor.fromJSON`);
    return new e(t.resolve(n.pos));
  }
  getBookmark() {
    return new Rd(this.anchor);
  }
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !zd(e) || !Bd(e)) return !1;
    let n = t.type.spec.allowGapCursor;
    if (n != null) return n;
    let r = t.contentMatchAt(e.index()).defaultType;
    return r && r.isTextblock;
  }
  static findGapCursorFrom(t, n, r = !1) {
    search: for (;;) {
      if (!r && e.valid(t)) return t;
      let i = t.pos,
        a = null;
      for (let r = t.depth; ; r--) {
        let o = t.node(r);
        if (n > 0 ? t.indexAfter(r) < o.childCount : t.index(r) > 0) {
          a = o.child(n > 0 ? t.indexAfter(r) : t.index(r) - 1);
          break;
        }
        if (r == 0) return null;
        i += n;
        let s = t.doc.resolve(i);
        if (e.valid(s)) return s;
      }
      for (;;) {
        let o = n > 0 ? a.firstChild : a.lastChild;
        if (!o) {
          if (a.isAtom && !a.isText && !O.isSelectable(a)) {
            (t = t.doc.resolve(i + a.nodeSize * n)), (r = !1);
            continue search;
          }
          break;
        }
        (a = o), (i += n);
        let s = t.doc.resolve(i);
        if (e.valid(s)) return s;
      }
      return null;
    }
  }
};
(Q.prototype.visible = !1),
  (Q.findFrom = Q.findGapCursorFrom),
  E.jsonID(`gapcursor`, Q);
var Rd = class e {
  constructor(e) {
    this.pos = e;
  }
  map(t) {
    return new e(t.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return Q.valid(t) ? new Q(t) : E.near(t);
  }
};
function zd(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t),
      r = e.node(t);
    if (n == 0) {
      if (r.type.spec.isolating) return !0;
    } else
      for (let e = r.child(n - 1); ; e = e.lastChild) {
        if (
          (e.childCount == 0 && !e.inlineContent) ||
          e.isAtom ||
          e.type.spec.isolating
        )
          return !0;
        if (e.inlineContent) return !1;
      }
  }
  return !0;
}
function Bd(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t),
      r = e.node(t);
    if (n == r.childCount) {
      if (r.type.spec.isolating) return !0;
    } else
      for (let e = r.child(n); ; e = e.firstChild) {
        if (
          (e.childCount == 0 && !e.inlineContent) ||
          e.isAtom ||
          e.type.spec.isolating
        )
          return !0;
        if (e.inlineContent) return !1;
      }
  }
  return !0;
}
function Vd() {
  return new k({
    props: {
      decorations: Kd,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && Q.valid(n) ? new Q(n) : null;
      },
      handleClick: Wd,
      handleKeyDown: Hd,
      handleDOMEvents: { beforeinput: Gd },
    },
  });
}
var Hd = kl({
  ArrowLeft: Ud(`horiz`, -1),
  ArrowRight: Ud(`horiz`, 1),
  ArrowUp: Ud(`vert`, -1),
  ArrowDown: Ud(`vert`, 1),
});
function Ud(e, t) {
  let n = e == `vert` ? (t > 0 ? `down` : `up`) : t > 0 ? `right` : `left`;
  return function (e, r, i) {
    let a = e.selection,
      o = t > 0 ? a.$to : a.$from,
      s = a.empty;
    if (a instanceof D) {
      if (!i.endOfTextblock(n) || o.depth == 0) return !1;
      (s = !1), (o = e.doc.resolve(t > 0 ? o.after() : o.before()));
    }
    let c = Q.findGapCursorFrom(o, t, s);
    return c ? (r && r(e.tr.setSelection(new Q(c))), !0) : !1;
  };
}
function Wd(e, t, n) {
  if (!e || !e.editable) return !1;
  let r = e.state.doc.resolve(t);
  if (!Q.valid(r)) return !1;
  let i = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && O.isSelectable(e.state.doc.nodeAt(i.inside))
    ? !1
    : (e.dispatch(e.state.tr.setSelection(new Q(r))), !0);
}
function Gd(e, t) {
  if (
    t.inputType != `insertCompositionText` ||
    !(e.state.selection instanceof Q)
  )
    return !1;
  let { $from: n } = e.state.selection,
    r = n.parent
      .contentMatchAt(n.index())
      .findWrapping(e.state.schema.nodes.text);
  if (!r) return !1;
  let i = b.empty;
  for (let e = r.length - 1; e >= 0; e--)
    i = b.from(r[e].createAndFill(null, i));
  let a = e.state.tr.replace(n.pos, n.pos, new S(i, 0, 0));
  return a.setSelection(D.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function Kd(e) {
  if (!(e.selection instanceof Q)) return null;
  let t = document.createElement(`div`);
  return (
    (t.className = `ProseMirror-gapcursor`),
    W.create(e.doc, [kc.widget(e.selection.head, t, { key: `gapcursor` })])
  );
}
var qd = new k({
    props: {
      handlePaste(e, t, n) {
        let r = t.clipboardData?.getData(`text/plain`).replace(/\n/g, ` `);
        if (r) {
          let t = e.state.tr.insertText(r);
          e.dispatch(t);
        }
        return !0;
      },
    },
  }),
  Jd = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
function Yd(e) {
  return new k({
    filterTransaction(t, n) {
      return t.doc.textContent.length <= e;
    },
  });
}
function Xd(e) {
  let { nMaxChars: t } = e;
  return $((0, A.useMemo)(() => Yd(t), [t])), (0, Z.jsx)(A.Fragment, {});
}
var Zd = A.createContext(void 0);
function Qd(e) {
  let { view: t, pmState: n, children: r } = e,
    i = A.useMemo(() => ({ view: t, pmState: n }), [t, n]);
  return (0, Z.jsx)(Zd.Provider, { value: i, children: r });
}
var $d = A.memo(function (e) {
  let { schema: t, refOnUpdate: n, bSingleLine: r } = e;
  return (
    $(
      A.useMemo(
        () =>
          n &&
          new k({
            view: (e) => ({ update: (...e) => n.current && n.current(...e) }),
          }),
        [n],
      ),
    ),
    $(A.useMemo(() => Ol(r ? Jd : {}), [r])),
    $(r ? qd : void 0),
    $(A.useMemo(() => Vd(), [])),
    $(A.useMemo(() => Fd(t), [t])),
    $(A.useMemo(() => Ol(Ti), [])),
    $(A.useMemo(() => Ld(t), [t])),
    null
  );
});
function $(e) {
  let { pmState: t } = A.useContext(Zd);
  A.useEffect(() => {
    if (t && e) return t.InstallPlugin(e);
  }, [e, t]);
}
function ef() {
  return A.useContext(Zd)?.view;
}
var tf = A.memo(function (e) {
  let { specs: t } = e,
    [n, r] = A.useState([]),
    i = A.useRef(0),
    a = A.useCallback(
      (e) => (
        r((t) => [...t, { id: i.current++, nodeView: e }]),
        () => r((t) => t.filter((t) => t.nodeView != e))
      ),
      [],
    );
  return (
    $(
      A.useMemo(() => {
        let e = {};
        return (
          t
            .filter(Boolean)
            .forEach(
              (t) => (e[t.type.name] = (e, n, r) => new rf(t, e, n, r, a)),
            ),
          new k({ props: { nodeViews: e } })
        );
      }, [t, a]),
    ),
    n.map(({ id: e, nodeView: t }) => (0, Z.jsx)(nf, { nodeView: t }, e))
  );
});
function nf(e) {
  let {
      element: t,
      spec: n,
      getProps: r,
      onPropsChanged: i,
      actions: a,
      isSelected: o,
    } = e.nodeView,
    [s, c] = A.useReducer((e) => e + 1, 0);
  return (
    A.useEffect(() => i.Register(c).Unregister, [i, c]),
    Kr.createPortal(
      A.createElement(n.component, { ...r(), selected: o(), ...a }),
      t,
    )
  );
}
var rf = class {
  dom;
  contentDOM;
  onPropsChanged;
  node;
  selected;
  reactHost;
  destroy;
  constructor(e, t, n, r, i) {
    this.node = t;
    let a = n.dom.ownerDocument,
      o = a.createElement(e.type.isInline ? `span` : `div`);
    this.dom = o;
    let s = o;
    e.bEditableContent &&
      ((s = this.reactHost = a.createElement(e.type.isInline ? `span` : `div`)),
      (s.contentEditable = `false`),
      o.appendChild(s),
      (this.contentDOM = a.createElement(
        e.type.inlineContent ? `span` : `div`,
      )),
      o.appendChild(this.contentDOM));
    let { selection: c } = n.state;
    this.selected = r() >= c.from && r() + t.nodeSize <= c.to;
    let l = (e) => {
        let i = e(n.state.tr, t, r());
        i && n.dispatch(i);
      },
      u = {
        update: l,
        setAttrs: (e, t) => l((n, r, i) => n.setNodeMarkup(i, t, e)),
        removeNode: () => l((e, t, n) => e.delete(n, n + t.nodeSize)),
        focusView: () => {
          window.setTimeout(() => n.focus(), 1);
        },
      },
      d = new oe();
    (this.destroy = i({
      element: s,
      spec: e,
      getProps: () => e.readProps(this.node),
      isSelected: () => this.selected,
      onPropsChanged: d,
      actions: u,
    })),
      (this.onPropsChanged = d.Dispatch.bind(d));
  }
  update(e, t, n) {
    return (
      e.type == this.node.type && ((this.node = e), this.onPropsChanged(), !0)
    );
  }
  ignoreMutation(e) {
    return this.contentDOM && this.contentDOM.contains(e.target)
      ? !1
      : this.reactHost
        ? !0
        : e.type != `selection`;
  }
  stopEvent(e) {
    return !!this.reactHost && this.reactHost.contains(e.target);
  }
  selectNode() {
    (this.selected = !0), this.onPropsChanged();
  }
  deselectNode() {
    (this.selected = !1), this.onPropsChanged();
  }
};
function af(e) {
  return (t, n, r) => t.replaceWith(r, r + n.nodeSize, e);
}
function of(e, t, n = 0) {
  return () => [e, { class: t }, n];
}
function sf(e, t, n = 0) {
  return [e, { class: t }, n];
}
function cf(e) {
  return {
    tag: `h${e}`,
    BBArgsToAttrs: (t) => ({ level: e, align: t.align || `left` }),
    AttrsToBBArgs: (e) => {
      let t = { tag: `h${e.level}`, args: {} };
      return (
        e.align && e.align != `left` && t.args && (t.args.align = e.align), t
      );
    },
  };
}
function lf(e) {
  return {
    tag: `h${e}`,
    getAttrs(t) {
      return { level: e, align: t.style.textAlign || `left` };
    },
  };
}
var uf = {
    nodes: {
      paragraph: {
        attrs: { align: { default: `left` } },
        content: `inline*`,
        group: `block`,
        parseDOM: [
          {
            tag: `p`,
            getAttrs(e) {
              return { align: e.style.textAlign || `left` };
            },
          },
        ],
        toDOM(e) {
          let t = { class: v(`pm_paragraph`, p.Paragraph) };
          return (
            e.attrs.align &&
              e.attrs.align != `left` &&
              (t.style = `text-align: ${e.attrs.align}`),
            [`p`, t, 0]
          );
        },
        bbCode: {
          tag: `p`,
          autocloses: !0,
          BBArgsToAttrs: (e) => ({ align: e.align }),
          AttrsToBBArgs: (e) => {
            let t = { args: {} };
            return e.align && e.align != `left` && (t.args.align = e.align), t;
          },
        },
      },
      heading: {
        attrs: { level: { default: 1 }, align: { default: `left` } },
        content: `inline*`,
        group: `block`,
        defining: !0,
        parseDOM: [1, 2, 3, 4, 5].map(lf),
        toDOM(e) {
          let t = {
            class: `BB_Header${e.attrs.level} ` + p[`Header${e.attrs.level}`],
          };
          return (
            e.attrs.align &&
              e.attrs.align != `left` &&
              (t.style = `text-align: ${e.attrs.align}`),
            [`h` + e.attrs.level, t, 0]
          );
        },
        bbCode: [1, 2, 3, 4, 5].map(cf),
      },
      image: {
        inline: !0,
        attrs: {
          src: {},
          alt: { default: null },
          title: { default: null },
          style: { default: void 0 },
        },
        group: `inline`,
        draggable: !0,
        parseDOM: [
          {
            tag: `img[src]`,
            getAttrs(e) {
              return {
                src: e.getAttribute(`src`),
                title: e.getAttribute(`title`),
                alt: e.getAttribute(`alt`),
                style: e.getAttribute(`style`),
              };
            },
          },
        ],
        toDOM(e) {
          let { src: t, alt: n, title: r, style: i } = e.attrs;
          return [
            `img`,
            {
              src: m(t),
              alt: n,
              title: r,
              class: v(p.Image, { [p.Image_Inline]: i === `inline` }),
            },
          ];
        },
        bbCode: {
          tag: `img`,
          BBArgsToAttrs: (e) => ({ src: e.src, style: e.style ?? void 0 }),
          AttrsToBBArgs: (e) => ({
            args: { src: e.src, ...(e.style ? { style: e.style } : {}) },
          }),
          convertContentToAttr: `src`,
        },
      },
      video: {
        inline: !0,
        attrs: {
          webm: { default: `` },
          mp4: { default: `` },
          poster: { default: `` },
          autoplay: { default: !0 },
          controls: { default: !1 },
        },
        group: `inline`,
        draggable: !0,
        parseDOM: [
          {
            tag: `video`,
            getAttrs(e) {
              if (e.tagName !== `video`) return;
              let t = e,
                n = ``,
                r = ``;
              for (let e of t.querySelectorAll(`source`))
                e.type == `video/mp4`
                  ? (n = e.src)
                  : e.type == `video/webm` && (r = e.src);
              return {
                mp4: n,
                webm: r,
                poster: t.poster || ``,
                autoplay: !!t.autoplay,
                controls: !!t.controls,
              };
            },
          },
        ],
        toDOM(e) {
          let {
              webm: t,
              mp4: n,
              poster: r,
              autoplay: i,
              controls: a,
            } = e.attrs,
            o = [];
          return (
            t && o.push([`source`, { src: m(t), type: `video/webm` }]),
            n && o.push([`source`, { src: m(n), type: `video/mp4` }]),
            [
              `video`,
              { poster: m(r), autoPlay: !!i, controls: !!a, loop: !a && !!i },
              ...o,
            ]
          );
        },
        bbCode: {
          tag: `video`,
          BBArgsToAttrs: (e) => ({
            webm: e.webm,
            mp4: e.mp4,
            poster: e.poster,
            autoplay: e.autoplay == `true`,
            controls: e.controls == `true`,
          }),
          AttrsToBBArgs: (e) => ({
            args: {
              webm: e.webm || ``,
              mp4: e.mp4 || ``,
              poster: e.poster || ``,
              autoplay: e.autoplay ? `true` : `false`,
              controls: e.controls ? `true` : `false`,
            },
          }),
        },
      },
      bullet_list: {
        ...hd,
        content: `list_item+`,
        group: `block`,
        toDOM: of(`ul`, p.List),
        bbCode: { tag: `list` },
      },
      ordered_list: {
        ...md,
        content: `list_item+`,
        group: `block`,
        toDOM: of(`ol`, p.OrderedList),
        bbCode: { tag: `olist` },
      },
      list_item: {
        ...gd,
        content: `paragraph block*`,
        toDOM: of(`li`, p.ListItem),
        bbCode: { tag: `*`, autocloses: !0 },
      },
      code_block: {
        content: `inline*`,
        marks: ``,
        group: `block`,
        code: !0,
        defining: !0,
        parseDOM: [{ tag: `pre`, preserveWhitespace: `full` }],
        toDOM() {
          return [
            `pre`,
            { class: p.CodeBlock },
            [`code`, { class: p.Code }, 0],
          ];
        },
        bbCode: { tag: `code` },
      },
    },
    marks: {
      strong: {
        parseDOM: [
          { tag: `strong` },
          { tag: `b`, getAttrs: (e) => e.style.fontWeight != `normal` && null },
          {
            style: `font-weight=400`,
            clearMark: (e) => e.type.name == `strong`,
          },
          {
            style: `font-weight`,
            getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
          },
        ],
        toDOM: of(`b`, v(`BB_Bold`, p.Bold)),
        bbCode: { tag: `b` },
      },
      italic: {
        parseDOM: [
          { tag: `i` },
          { tag: `em` },
          { style: `font-style=italic` },
          { style: `font-style=normal`, clearMark: (e) => e.type.name == `em` },
        ],
        toDOM: of(`i`, v(`BB_Italic`, p.Italic)),
        bbCode: { tag: `i` },
      },
      underline: {
        parseDOM: [{ tag: `u` }, { style: `text-decoration=underline` }],
        toDOM: of(`u`, v(`BB_Underline`, p.Underline)),
        bbCode: { tag: `u` },
      },
      strike: {
        parseDOM: [{ style: `text-decoration=line-through` }],
        toDOM: of(`span`, v(`BB_Strike`, p.Strike)),
        bbCode: { tag: `strike` },
      },
      code: {
        parseDOM: [{ tag: `code` }],
        toDOM: of(`code`, v(`BB_Code`, p.Code)),
        bbCode: { tag: `c` },
      },
      link: {
        attrs: { href: {}, title: { default: null } },
        inclusive: !1,
        parseDOM: [
          {
            tag: `a[href]`,
            getAttrs(e) {
              return {
                href: m(e.getAttribute(`href`) ?? ``),
                title: e.getAttribute(`title`),
              };
            },
          },
        ],
        toDOM(e) {
          let { href: t, title: n } = e.attrs;
          return [`a`, { href: m(t), title: n, class: `BB_Link` }, 0];
        },
        bbCode: {
          tag: `url`,
          BBArgsToAttrs: (e) => ({ href: e[``] }),
          AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
          convertContentToAttr: `href`,
        },
      },
    },
  },
  df = {
    node: {},
    marks: {
      color: {
        attrs: { color: {} },
        parseDOM: [{ style: `color`, getAttrs: (e) => ({ color: e }) }],
        toDOM(e) {
          return [
            `span`,
            { style: `color: ${e.attrs.color}`, class: v(`BB_Color`, p.Color) },
            0,
          ];
        },
        bbCode: {
          tag: `color`,
          BBArgsToAttrs: (e) => ({ color: e[``] }),
          AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
        },
        inclusive: !0,
        excludes: ``,
      },
      bgcolor: {
        attrs: { color: {} },
        parseDOM: [{ style: `bgcolor`, getAttrs: (e) => ({ color: e }) }],
        toDOM(e) {
          return [
            `span`,
            {
              style: `background-color: ${e.attrs.color}`,
              class: v(`BB_BGColor`, p.BGColor),
            },
            0,
          ];
        },
        bbCode: {
          tag: `bgcolor`,
          BBArgsToAttrs: (e) => ({ color: e[``] }),
          AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
        },
        inclusive: !0,
        excludes: ``,
      },
    },
  };
function ff(e, t, n) {
  return pf(
    {
      schema: t.pm_schema,
      config: t.pm_to_bbcode_config,
      bUseBackslashEscapes: n?.bUseBackslashEscapes ?? !0,
    },
    e,
    [],
    !1,
  );
}
function pf(e, t, n, r) {
  let { schema: i, config: a } = e,
    o = t.marks,
    s = ``,
    c = a.mapNodes.get(t.type),
    { tag: f, args: p } = _f(c, t);
  f == `emoticon` ? (s += `:`) : f && (s += l(f, p, c?.bVerbatimArgs));
  let m = r || !!c?.bVerbatimContent,
    h = !1;
  return (
    t.content.forEach((t) => {
      if (
        (([s, o] = hf(a, o, t.marks, s)),
        ([s, o] = gf(a, o, t.marks, s)),
        t.type.isText)
      ) {
        let n = t.text || ``;
        s += m || !e.bUseBackslashEscapes ? n : u(n);
      } else if (t.type == i.nodes.hard_break)
        s += `
`;
      else {
        let n = mf(a, t);
        n &&
          h &&
          (s += `
`),
          (s += pf(e, t, o, m)),
          (h = n);
        return;
      }
      h = !1;
    }),
    ([s] = hf(a, o, n, s)),
    f == `emoticon` ? (s += `:`) : f && (s += d(f)),
    s
  );
}
function mf(e, t) {
  return t.type.isBlock && !_f(e.mapNodes.get(t.type), t).tag;
}
function hf(e, t, n, r) {
  let i = [];
  for (let e of t) n.indexOf(e) === -1 && i.push(e);
  if (!i.length) return [r, t];
  let a = t.slice();
  for (; i.length && (ge(a.length, `no marks left to close`), a.length); ) {
    let t = a.pop(),
      { tag: n } = vf(e.mapMarks.get(t.type), t);
    r += d(n);
    let o = i.indexOf(t);
    o != -1 && i.splice(o, 1);
  }
  return [r, a];
}
function gf(e, t, n, r) {
  let i;
  for (let a of n)
    if (t.indexOf(a) === -1) {
      i ||= t.slice();
      let n = e.mapMarks.get(a.type);
      if ((ge(n, `mark missing bbtag`), n)) {
        i.push(a);
        let { args: e, tag: t } = vf(n, a);
        r += l(t, e);
      }
    }
  return [r, i ?? t];
}
function _f(e, t) {
  if (e && e.AttrsToBBArgs) {
    let { tag: n = e.tag, args: r = {} } = e.AttrsToBBArgs(t.attrs, t);
    return { tag: n, args: r };
  }
  return { tag: e?.tag, args: {} };
}
function vf(e, t) {
  if (e && e.AttrsToBBArgs) {
    let { tag: n = e.tag, args: r = {} } = e.AttrsToBBArgs(t.attrs, t);
    return { tag: n, args: r };
  }
  return { tag: e?.tag, args: {} };
}
var yf = new Gr(`CProseMirrorState - OnChange`),
  bf = class {
    m_bbcode;
    m_currentDoc;
    m_bHasUncomittedChanges = !1;
    m_schemaConfig;
    m_bbcodeParser;
    m_bUseBackslashEscapes;
    m_onStateChangedCallbacks = new oe();
    m_fnCommitChanges;
    m_view;
    m_state;
    constructor(e, t, n, r) {
      let { parser: i, bUseBackslashEscapes: a = !0 } = r ?? {};
      (this.m_schemaConfig = e),
        (this.m_bUseBackslashEscapes = a),
        (this.m_bbcodeParser = new Dd(e, { ...i, bUseBackslashEscapes: a })),
        (this.m_bbcode = t),
        (this.m_fnCommitChanges = n),
        (this.m_state = this.ConstructState());
    }
    CommitChanges() {
      this.m_currentDoc &&
        this.m_bHasUncomittedChanges &&
        ((this.m_bbcode = ff(this.m_currentDoc, this.m_schemaConfig, {
          bUseBackslashEscapes: this.m_bUseBackslashEscapes,
        })),
        this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
        (this.m_bHasUncomittedChanges = !1));
    }
    BHasUncomittedChanges() {
      return this.m_bHasUncomittedChanges;
    }
    UpdateState(e) {
      let t = e(this.m_view?.state.tr || this.m_state.tr);
      t &&
        t.docChanged &&
        (this.m_view
          ? this.m_view.dispatch(t)
          : (this.m_state = this.m_state.apply(t)));
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
      let e = new k({
          key: yf,
          view: (e) => (
            console.assert(!this.m_view),
            (this.m_view = e),
            {
              update: (e, t) => this.OnStateChange(t, e.state),
              destroy: () => (this.m_view = void 0),
            }
          ),
        }),
        t = [Gi(), e];
      return Vr.create({
        schema: this.m_schemaConfig.pm_schema,
        doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
        plugins: t,
      });
    }
    InstallPlugin(e) {
      let t = this.m_view ? this.m_view.state : this.m_state;
      return (
        t.plugins.includes(e) ||
          ((this.m_state = t.reconfigure({ plugins: [...t.plugins, e] })),
          this.m_view?.updateState(this.m_state)),
        () => {
          let t = this.m_view ? this.m_view.state : this.m_state;
          (this.m_state = t.reconfigure({
            plugins: t.plugins.filter((t) => t != e),
          })),
            this.m_view?.updateState(this.m_state);
        }
      );
    }
    OnStateChange(e, t) {
      (this.m_state = t),
        e.doc &&
          e.doc != t.doc &&
          ((this.m_currentDoc = t.doc),
          (this.m_bHasUncomittedChanges = !0),
          this.m_onStateChangedCallbacks.Dispatch(this.m_currentDoc, e.doc));
    }
    ReplaceDocument(e) {
      this.m_bbcode != e &&
        this.UpdateState((t) => {
          this.m_bbcode = e;
          let n = this.m_bbcodeParser.ParseBBCode(e);
          return (
            (t = this.m_state.tr
              .replaceWith(0, this.m_state.doc.content.size, n)
              .scrollIntoView()),
            t
          );
        });
    }
  };
function xf(e, t) {
  Le(e?.OnStateChangedCallbacks, t);
}
function Sf(e, t) {
  let { msAutosaveTimeout: n = 1e3, msMaxInterval: r = n * 10 } = t || {},
    [i, a] = A.useState(!1),
    o = A.useRef(0);
  return (
    xf(
      e,
      A.useCallback(() => {
        (o.current = performance.now()), a(!0);
      }, []),
    ),
    A.useEffect(() => {
      if (!i || !e) return;
      let t = performance.now(),
        s = (i = !1) => {
          c = void 0;
          let l = performance.now(),
            u = l - o.current;
          i || u >= n || l - t >= r
            ? (console.log(`Committing changes`), e.CommitChanges(), a(!1))
            : (c = window.setTimeout(s, n - u));
        },
        c = window.setTimeout(s, n);
      return () => {
        c && (window.clearTimeout(c), s(!0));
      };
    }, [i, e, n, r]),
    { bDirty: i }
  );
}
function Cf(e) {
  let {
      closeModal: t,
      strTitle: n,
      onOK: r,
      strOKText: i,
      onCancel: a,
      strCancelText: o,
      bOKDisabled: s,
      bCancelDisabled: c,
      strClassNameContent: l = `GenericFormDialog`,
      children: u,
    } = e,
    d = A.useCallback(() => {
      a && a(), t();
    }, [a, t]),
    f = c ? () => {} : d;
  return (0, Z.jsx)(le, {
    onEscKeypress: f,
    children: (0, Z.jsxs)(ce, {
      onSubmit: r,
      classNameContent: l,
      children: [
        (0, Z.jsx)(Be, { children: n }),
        u,
        (0, Z.jsx)(h, {
          children: (0, Z.jsx)(Oe, {
            strOKText: i,
            bOKDisabled: s,
            onCancel: f,
            strCancelText: o,
            bCancelDisabled: c,
          }),
        }),
      ],
    }),
  });
}
function wf(e, t) {
  let [n, r] = A.useState(void 0),
    i = A.useCallback(
      (n) => {
        let i = n.state.selection,
          a = ``,
          o = ``,
          { from: s, to: c } = i,
          l = kd(n.state, e.marks.link, i.$from),
          u = !!l;
        l
          ? ((o = l.mark.attrs.href),
            i.empty
              ? ((a = l.slice.content.textBetween(0, l.slice.content.size)),
                (s = l.from),
                (c = l.to))
              : ((s = Math.max(l.from, i.from)),
                (c = Math.min(l.to, i.to)),
                (a = l.slice.content.textBetween(s - l.from, c - l.from))))
          : n.state.selection.empty ||
            ((a = n.state.doc.cut(
              n.state.selection.from,
              n.state.selection.to,
            ).textContent),
            a.match(/^https?:\/\//) && (o = a));
        let d = {};
        if (t)
          for (let e in t) {
            let n = t[e];
            d[e] = l ? n.fnReadValue(l.mark) : n.defaultValue;
          }
        r({
          view: n,
          strLinkText: a,
          strLinkHref: o,
          bIsUpdate: u,
          addtlAttrs: t,
          addtlAttrsValues: d,
          from: s,
          to: c,
        });
      },
      [e.marks.link, t],
    ),
    a = n?.view,
    o = A.useCallback(() => {
      window.setTimeout(() => a.focus(), 1), r(void 0);
    }, [a]);
  return [
    i,
    n &&
      (0, Z.jsx)(ae, {
        active: !0,
        children: (0, Z.jsx)(Tf, { schema: e, closeModal: o, ...n }),
      }),
  ];
}
var Tf = A.memo(function (e) {
  let {
      schema: t,
      strLinkText: n,
      strLinkHref: r,
      bIsUpdate: i,
      addtlAttrs: a,
      addtlAttrsValues: o,
      closeModal: s,
      view: c,
      from: l,
      to: u,
    } = e,
    [d, f] = A.useState(n),
    [p, m] = A.useState(r),
    h = A.useRef(null),
    g = A.useRef(null),
    [ee, te] = A.useState(o),
    ne = () => {
      let e = c.state.tr,
        n = { href: p };
      for (let e in ee) n[e] = ee[e];
      let r = t.marks.link?.create(n),
        i = t.text(d || p, [r]);
      try {
        (e = e.replaceRangeWith(l, u, i)),
          (e = e.setSelection(D.create(e.doc, l + i.nodeSize, l + i.nodeSize))),
          c.dispatch(e);
      } catch (e) {
        console.error(`Error during link insertion`, e);
      }
      s();
    };
  A.useLayoutEffect(() => {
    h.current?.value?.length
      ? g.current?.value?.length
        ? (h.current.Focus(), h.current.element.select())
        : g.current.Focus()
      : h.current?.Focus();
  }, []);
  let re = _(
      i ? `#FormattingToolbar_EditLink` : `#FormattingToolbar_InsertLink`,
    ),
    ie = _(i ? `#Button_Save` : `#FormattingToolbar_InsertLink`);
  return (0, Z.jsxs)(Cf, {
    onOK: ne,
    closeModal: s,
    strTitle: re,
    strOKText: ie,
    bOKDisabled: p.length == 0,
    children: [
      (0, Z.jsx)(he, {
        ref: h,
        value: d,
        onChange: (e) => f(e.currentTarget.value),
        label: _(`#FormattingToolbar_LinkText`),
      }),
      (0, Z.jsx)(he, {
        ref: g,
        value: p,
        placeholder: `https://`,
        onChange: (e) => m(e.currentTarget.value),
        label: _(`#FormattingToolbar_LinkAddress`),
        mustBeURL: !0,
      }),
      a && (0, Z.jsx)(Ef, { addtlAttrs: a, values: ee, setValues: te }),
    ],
  });
});
function Ef(e) {
  let { addtlAttrs: t, values: n, setValues: r } = e;
  return (0, Z.jsx)(Z.Fragment, {
    children: Object.keys(t).map((e) =>
      (0, Z.jsx)(
        Df,
        {
          attrName: e,
          fnRender: t[e].fnRenderEditor,
          value: n[e],
          setValues: r,
        },
        e,
      ),
    ),
  });
}
var Df = A.memo(function (e) {
  let { attrName: t, fnRender: n, value: r, setValues: i } = e;
  return n(
    r,
    A.useCallback((e) => i((n) => ({ ...n, [t]: e })), [t, i]),
  );
});
function Of(e, t, n, r) {
  let i = [],
    a;
  for (; (a = t.match(Ee)); ) {
    a.index > 0 && i.push(e.text(t.substring(0, a.index)));
    let o = Ie(a[0]),
      s = r && r(o);
    !s || s === "default"
      ? i.push(e.text(a[0], [n.create({ href: o })]))
      : s !== `remove` && i.push(s),
      (t = t.substring(a.index + a[0].length));
  }
  if (i.length != 0) return t.length && i.push(e.text(t)), i;
}
function kf(e, t = `PlaceholderPlugin`) {
  let [n, r] = A.useState([]),
    [i] = A.useState(
      () =>
        new k({
          key: new Gr(t),
          state: {
            init() {
              return W.empty;
            },
            apply(t, n) {
              n = n.map(t.mapping, t.doc);
              let i = t.getMeta(this) || [];
              for (let a of i)
                if (a?.add) {
                  let { id: i, data: o } = a.add,
                    s = kc.widget(
                      a.add.pos,
                      (t, n) => {
                        let a = document.createElement(e);
                        return (
                          r((e) => [...e, { id: i, element: a, data: o }]), a
                        );
                      },
                      {
                        id: i,
                        destroy: (e) => {
                          r((t) => t.filter((t) => t.element != e));
                        },
                      },
                    );
                  n = n.add(t.doc, [s]);
                } else
                  a?.remove &&
                    (n = n.remove(
                      n.find(void 0, void 0, (e) => e.id == a.remove.id),
                    ));
              return n;
            },
          },
          props: {
            decorations(e) {
              return this.getState(e);
            },
          },
        }),
    );
  $(i);
  let a = ef(),
    o = A.useRef(0),
    s = A.useCallback(
      (e, n, r) => {
        let s = `${t}_${o.current++}`,
          c = r || a.state.tr;
        n === void 0 &&
          (c.selection.empty || c.deleteSelection(), (n = c.selection.from));
        let l = r?.getMeta(i) || [];
        return (
          c.setMeta(i, [...l, { add: { id: s, pos: n, data: e } }]),
          r || a.dispatch(c),
          s
        );
      },
      [i, t, a],
    ),
    c = A.useCallback(
      (e) => {
        let t = i.getState(a.state)?.find(void 0, void 0, (t) => t.id == e);
        return t?.length ? t[0].from : void 0;
      },
      [a, i],
    );
  return {
    placeholderElements: n,
    createPlaceholder: s,
    findPlaceholder: c,
    replacePlaceholder: A.useCallback(
      (e, t) => {
        let n = c(e);
        return n
          ? (t
              ? a.dispatch(
                  a.state.tr
                    .replaceWith(n, n, t)
                    .setMeta(i, [{ remove: { id: e } }]),
                )
              : a.dispatch(a.state.tr.setMeta(i, [{ remove: { id: e } }])),
            !0)
          : !1;
      },
      [i, c, a],
    ),
  };
}
var Af = `X4ISJwd04aY-`,
  jf = `VDQklUf4-PI-`,
  Mf = `snvwF3-NnLM-`,
  Nf = `sV-VHki-2o0-`,
  Pf = `_15zMTyP93HI-`,
  Ff = `_8KRcaHOEet0-`,
  If = `uovoG-49-aA-`,
  Lf = `UaWCw5NEvXk-`,
  Rf = `X-Vxsf0rftk-`,
  zf = `GgBpCOPasPY-`,
  Bf = `hQZoOJN3xX8-`,
  Vf = `ddGbr-41cmc-`,
  Hf = `Nf7kk9E11os-`;
function Uf(e) {
  let {
      children: t,
      ProcessFileUpload: n,
      FetchImageURL: r,
      bAllowImageHotLinking: i = !1,
    } = e,
    [a] = A.useState(() => ({ manager: new qf(n, r, i) })),
    { manager: o } = a;
  return (
    o.SetProps(n, r, i),
    (0, Z.jsxs)(Yf.Provider, {
      value: a,
      children: [
        (0, Z.jsx)(Zf, { manager: o }),
        (0, Z.jsx)(Qf, { manager: o, children: t }),
      ],
    })
  );
}
var Wf = A.memo(function (e) {
    let { nodeType: t } = e,
      n = Xf(),
      {
        placeholderElements: r,
        createPlaceholder: i,
        replacePlaceholder: a,
      } = kf(`span`, `FileUploadPlaceholder`);
    $f(n, t);
    let o = ef();
    return (
      A.useEffect(() => n.RegisterEditor(o, i, a), [n, o, i, a]),
      (0, Z.jsx)(Z.Fragment, {
        children: r.map(({ id: e, element: t, data: n }) =>
          (0, Z.jsx)(Kf, { element: t, data: n }, e),
        ),
      })
    );
  }),
  Gf = class extends Error {
    constructor(e) {
      super(e);
    }
  };
function Kf(e) {
  let { element: t, data: n } = e,
    r = `file` in n ? n.file : void 0,
    a = A.useMemo(() => r && URL.createObjectURL(r), [r]),
    o = `url` in n ? n.url : a,
    s = r?.type.startsWith(`video/`);
  return Kr.createPortal(
    (0, Z.jsxs)(`span`, {
      className: Lf,
      children: [
        (0, Z.jsx)(`div`, {
          className: Rf,
          children: (0, Z.jsxs)(`div`, {
            className: zf,
            children: [
              (0, Z.jsx)(`div`, {
                className: Bf,
                children: (0, Z.jsx)(i, { size: `medium`, position: `center` }),
              }),
              _(`#Prosemirror_FileUpload_Uploading`),
            ],
          }),
        }),
        !s && (0, Z.jsx)(`img`, { src: o, className: `_2t8dVsSkQ8o-` }),
        s &&
          (0, Z.jsx)(`video`, {
            src: o,
            className: `_2t8dVsSkQ8o-`,
            muted: !0,
            loop: !0,
            playsInline: !0,
            autoPlay: !0,
          }),
      ],
    }),
    t,
  );
}
var qf = class {
  m_fnProcessFileUpload;
  m_fnFetchImageURL;
  m_bAllowImageHotLinking;
  m_errors = de([]);
  m_view;
  m_fnCreatePlaceholder;
  m_fnReplacePlaceholder;
  constructor(e, t, n) {
    (this.m_fnProcessFileUpload = e),
      (this.m_fnFetchImageURL = t),
      (this.m_bAllowImageHotLinking = n);
  }
  SetProps(e, t, n) {
    (this.m_fnProcessFileUpload = e),
      (this.m_fnFetchImageURL = t),
      (this.m_bAllowImageHotLinking = n),
      ge(
        !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
        `Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.`,
      );
  }
  RegisterEditor(e, t, n) {
    return (
      ge(!this.m_view, `Duplicate registration`),
      (this.m_view = e),
      (this.m_fnCreatePlaceholder = t),
      (this.m_fnReplacePlaceholder = n),
      () => {
        this.m_view == e &&
          this.m_fnCreatePlaceholder == t &&
          this.m_fnReplacePlaceholder == n &&
          ((this.m_view = void 0),
          (this.m_fnCreatePlaceholder = void 0),
          (this.m_fnReplacePlaceholder = void 0));
      }
    );
  }
  AddError(e) {
    this.m_errors.Set([...this.m_errors.Value, e]);
  }
  GetErrors() {
    return this.m_errors;
  }
  ClearErrors() {
    this.m_errors.Set([]);
  }
  GetViewPosition(e, t) {
    return this.m_view?.posAtCoords({ left: e, top: t })?.pos;
  }
  async UploadFile(e, t) {
    (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
      this.AddError(`Upload File: No editor registered to handle file upload`);
    let n = this.m_fnCreatePlaceholder({ file: e }, t);
    return this.ProcessFile(e, n);
  }
  BAllowImageHotLinking() {
    return this.m_bAllowImageHotLinking;
  }
  QueueUploadFileByURL(e, t, n) {
    if (
      ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
        this.AddError(
          `QueueUploadFile: No editor registered to handle file upload`,
        ),
      console.log(`QueueUploadFileByURL: ${e} at pos ${t}`),
      e.startsWith(`data:`))
    ) {
      let r = this.m_fnCreatePlaceholder({ url: e }, t, n);
      return this.ProcessDataURL(e, r), !0;
    }
    if (this.m_fnFetchImageURL) {
      let r = this.m_fnCreatePlaceholder({ url: e }, t, n);
      return this.FetchURLAndProcess(e, r), !0;
    }
    return (
      ge(
        this.m_bAllowImageHotLinking,
        `A URL was posted but we don't have a fnFetchImageURL to process it`,
      ),
      !1
    );
  }
  async ProcessDataURL(e, t) {
    let [n, r] = e.split(`,`),
      i = n.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
    if (!i || i.groups.encoding != `base64`) {
      this.AddError(`Unable to data URL, unexpected format: ${n}`);
      return;
    }
    let a = i?.groups.mimetype,
      o = Jf(a);
    if (!o) {
      this.AddError(`Unsupported MIME type for image: ${a}`);
      return;
    }
    let s = atob(r),
      c = new Uint8Array(s.length);
    for (let e = 0; e < s.length; e++) c[e] = s.charCodeAt(e);
    let l = await ie(c.buffer),
      u = new File([c], `upload_${l}.${o}`, { type: a });
    await this.ProcessFile(u, t);
  }
  async FetchURLAndProcess(e, t) {
    try {
      let n = new URL(e),
        r = await this.m_fnFetchImageURL(e),
        i = new File(
          [r],
          decodeURIComponent(n.pathname?.replace(/^.*\//, ``) || `image`),
          { type: r.type },
        );
      await this.ProcessFile(i, t);
    } catch {
      this.AddError(`Unable to process URL: ${e}`),
        this.m_fnReplacePlaceholder(t);
    }
  }
  async ProcessFile(e, t) {
    let n;
    try {
      console.log(`Processing file upload: "${e.name}"`),
        (n = await this.m_fnProcessFileUpload(e));
    } catch (e) {
      e instanceof Gf
        ? this.AddError(e.message)
        : this.AddError(`Error proccessing file upload: ${e}`);
    }
    n ? this.m_fnReplacePlaceholder(t, n) : this.m_fnReplacePlaceholder(t);
  }
};
function Jf(e) {
  switch (e) {
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
var Yf = A.createContext(void 0);
function Xf() {
  return A.useContext(Yf).manager;
}
var Zf = A.memo(function (e) {
  let { manager: t } = e,
    n = Me(t.GetErrors());
  return n.length
    ? (0, Z.jsx)(ae, {
        active: !0,
        children: (0, Z.jsx)(me, {
          bAlertDialog: !0,
          strTitle: _(`#Error_Generic`),
          strDescription: n.map((e, t) =>
            (0, Z.jsx)(`div`, { children: e }, t),
          ),
          strOKButtonText: _(`#Button_OK`),
          onOK: () => t.ClearErrors(),
          onCancel: () => t.ClearErrors(),
        }),
      })
    : null;
});
function Qf(e) {
  let { manager: t, children: n } = e,
    r = A.useCallback(
      (e, n) => {
        for (let r of e)
          t.UploadFile(r, t.GetViewPosition(n.clientX, n.clientY));
      },
      [t],
    ),
    [i, a] = o(r);
  return A.cloneElement(n, { ...i, ...n.props });
}
function $f(e, t) {
  $(
    A.useMemo(
      () =>
        new k({
          props: {
            handlePaste(n, r, i) {
              let a = [];
              if (
                (i.content.descendants((n, r) => {
                  if (n.type == t) {
                    let t = n.attrs.src;
                    (t.startsWith(`data:`) || !e.BAllowImageHotLinking()) &&
                      a.push({ url: t, pos: r });
                  }
                }),
                a.length)
              ) {
                let t = n.state.tr;
                t.selection.empty || t.deleteSelection();
                let r = t.selection.from,
                  o = 0;
                for (let n of a) {
                  let a = i.content.cut(o, n.pos - 1);
                  t.insert(r, a),
                    (r += a.size),
                    e.QueueUploadFileByURL(n.url, r, t),
                    (o = n.pos + 1);
                }
                return (
                  t.insert(r, i.content.cut(o)),
                  t.scrollIntoView(),
                  n.dispatch(t),
                  !0
                );
              }
              return !1;
            },
            handleDOMEvents: {
              paste(t, n) {
                if (n.clipboardData?.files?.length > 0) {
                  n.preventDefault();
                  for (let t of n.clipboardData.files) e.UploadFile(t);
                  return !0;
                }
              },
            },
          },
        }),
      [t, e],
    ),
  );
}
var ep = () => A.useContext(np);
function tp(e) {
  let { view: t, refUpdateToolbar: n, children: r } = e,
    i = A.useRef(void 0);
  i.current ||= new oe();
  let a = i.current;
  A.useEffect(
    () => (se(n, () => a.Dispatch(t)), () => se(n, void 0)),
    [a, t, n],
  );
  let o = A.useMemo(() => ({ callbacks: a, view: t }), [a, t]);
  return t ? (0, Z.jsx)(np.Provider, { value: o, children: r }) : null;
}
var np = A.createContext(void 0);
function rp() {
  return (0, Z.jsx)(`div`, { className: Pf });
}
function ip() {
  return (0, Z.jsx)(`div`, { className: Ff });
}
function ap(e) {
  return (0, Z.jsx)(`div`, {
    className: v(e.className, Mf),
    children: (0, Z.jsx)(ne, {
      className: Nf,
      "flow-children": `row`,
      children: e.children,
    }),
  });
}
function op(e) {
  let { nodeType: t, attrs: n, children: r, ...i } = e,
    { callbacks: a, view: o } = ep(),
    [s, c] = A.useState(() => jd(o.state, t, n)),
    l = A.useCallback((e) => c(jd(e.state, t, n)), [t, n]);
  Le(a, l);
  let u = A.useMemo(() => _i(t, n), [n, t]);
  return (0, Z.jsx)(cp, { ...i, command: u, toggled: s, children: r });
}
function sp(e) {
  let { mark: t, children: n, ...r } = e,
    { callbacks: i, view: a } = ep(),
    [o, s] = A.useState(() => Od(a.state, t)),
    c = A.useCallback((e) => s(Od(e.state, t)), [t]);
  Le(i, c);
  let l = A.useMemo(() => yi(t), [t]);
  return (0, Z.jsx)(cp, { ...r, command: l, toggled: o, children: n });
}
function cp(e) {
  let { command: t, toggled: n, children: r, ...i } = e,
    { view: a, callbacks: o } = ep(),
    [s, c] = A.useState(() => t(a.state));
  Le(
    o,
    A.useCallback((e) => c(t(e.state)), [t]),
  ),
    A.useEffect(() => c(t(a.state)), [t, a]);
  let l = !s && !n;
  return (0, Z.jsx)(up, {
    ...i,
    children: (0, Z.jsx)(_e, {
      className: v(If, n && `LayGdJxtj74-`),
      onMouseDown: (e) => {
        e.preventDefault(), t(a.state, a.dispatch, a);
      },
      disabled: l,
      focusable: !l,
      children: r,
    }),
  });
}
function lp(e) {
  let {
    onClick: t,
    toggled: n,
    disabled: r,
    children: i,
    className: a,
    ...o
  } = e;
  return (0, Z.jsx)(up, {
    ...o,
    children: (0, Z.jsx)(_e, {
      className: v(If, n && `LayGdJxtj74-`, a),
      onMouseDown: (e) => {
        e.button === 0 && (e.preventDefault(), t(e));
      },
      disabled: r === !0,
      children: i,
    }),
  });
}
function up(e) {
  let { tooltip: t, keyboardShortcut: n, children: r } = e;
  return t
    ? (0, Z.jsx)(Te, {
        toolTipContent: n
          ? (0, Z.jsx)(dp, { tooltip: t, keyboardShortcut: n })
          : t,
        direction: `bottom`,
        children: r,
      })
    : r;
}
function dp(e) {
  let { tooltip: t, keyboardShortcut: n } = e;
  return (0, Z.jsxs)(`div`, {
    className: Vf,
    children: [
      (0, Z.jsx)(`div`, { children: t }),
      (0, Z.jsx)(`div`, { children: (0, Z.jsx)(fp, { keyboardShortcut: n }) }),
    ],
  });
}
function fp(e) {
  let { keyboardShortcut: t } = e,
    n = t.split(`-`),
    r = n.pop() ?? ``;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      n.map((e, t) =>
        (0, Z.jsxs)(
          A.Fragment,
          {
            children: [
              (0, Z.jsx)(pp, { children: (0, Z.jsx)(mp, { modifier: e }) }),
              ` + `,
            ],
          },
          t,
        ),
      ),
      (0, Z.jsx)(pp, { children: r.toUpperCase() }),
    ],
  });
}
function pp(e) {
  return (0, Z.jsx)(`span`, { className: Hf, children: e.children });
}
function mp(e) {
  let { modifier: t } = e;
  switch (t) {
    case `Mod`:
      return be.PLATFORM == `macos` ? `⌘` : `Ctrl`;
    case `Shift`:
      return be.PLATFORM, `Shift`;
    case `Ctrl`:
      return be.PLATFORM == `macos` ? `Control` : `Ctrl`;
    case `Alt`:
      return be.PLATFORM == `macos` ? `Option` : `Alt`;
  }
  return null;
}
function hp(e, t, n) {
  let { openColorPicker: r } = s();
  return [
    A.useCallback(
      (i, o) => {
        let { state: s } = i,
          c = s.selection,
          { from: l, to: u } = c,
          { empty: d } = c,
          f = t ? e.marks.color : e.marks.bgcolor,
          p = kd(s, f, d ? c.$from : s.doc.resolve(l)),
          m;
        p &&
          ((m = p.mark.attrs.color),
          d
            ? ((l = p.from), (u = p.to))
            : ((l = Math.max(p.from, l)), (u = Math.min(p.to, u))));
        let h = {};
        if (n)
          for (let e in n) {
            let t = n[e];
            h[e] = p ? t.fnReadValue(p.mark) : t.defaultValue;
          }
        r(o ?? gp(i, l), {
          color: m || void 0,
          disableAlpha: !0,
          bLivePreview: !1,
          strTitle: _(
            t ? `#FormattingToolbar_Color` : `#FormattingToolbar_BgColor`,
          ),
          onChange: (e) => _p(i, f, a(e), h, l, u),
          onClose: () => {
            window.setTimeout(() => {
              i.isDestroyed || i.focus();
            }, 1);
          },
        });
      },
      [n, t, r, e.marks.bgcolor, e.marks.color],
    ),
    null,
  ];
}
function gp(e, t) {
  let { node: n } = e.domAtPos(t);
  return (n instanceof HTMLElement ? n : n.parentElement) ?? e.dom;
}
function _p(e, t, n, r, i, a) {
  try {
    if (e.isDestroyed) {
      console.warn(`Editor view is destroyed; skipping color insert`);
      return;
    }
    if (!t) {
      console.log(`debug: no markType`);
      return;
    }
    if (!n || !/^#[0-9a-fA-F]{6}$/.test(n)) {
      console.log(`debug: invalid color text: ` + n);
      return;
    }
    let { state: o, dispatch: s } = e,
      c = Math.max(0, Math.min(i, o.doc.content.size)),
      l = Math.max(0, Math.min(a, o.doc.content.size));
    if (c > l) {
      console.error(`Invalid selection range:`, i, a);
      return;
    }
    let u = t.create({ color: n, ...r }),
      d = o.tr;
    c === l
      ? (d = d.addStoredMark(u))
      : ((d = d.removeMark(c, l, t)),
        (d = d.addMark(c, l, u)),
        (d = d.setSelection(D.create(d.doc, l)))),
      s(d.scrollIntoView());
  } catch (e) {
    console.error(e);
  }
}
var vp = { NoBorder: `noborder`, EqualCells: `equalcells` },
  yp = Rl({
    tableGroup: `block`,
    cellContent: `paragraph block*`,
    cellAttributes: {
      class: {
        default: p.TableCell,
        setDOMAttr: (e, t) => {
          t.class = e;
        },
      },
    },
  }),
  bp = {
    BBArgsToAttrs: (e) => {
      let t = {};
      return (
        e.colspan && (t.colspan = parseInt(e.colspan)),
        e.rowspan && (t.rowspan = parseInt(e.rowspan)),
        e.colwidth &&
          (t.colwidth = e.colwidth.split(`,`).map((e) => parseInt(e))),
        t
      );
    },
    AttrsToBBArgs: (e) => {
      let t = {};
      return (
        e.colspan && e.colspan != 1 && (t.colspan = e.colspan.toString()),
        e.rowspan && e.rowspan != 1 && (t.rowspan = e.rowspan.toString()),
        e.colwidth && (t.colwidth = e.colwidth.join(`,`)),
        { args: t }
      );
    },
  },
  xp = {
    table: {
      ...yp.table,
      toDOM: (e) =>
        sf(
          `table`,
          v(
            p.Table,
            e.attrs.noborder && p.NoBorder,
            e.attrs.equalcells && p.EqualCells,
          ),
          [`tbody`, 0],
        ),
      attrs: {
        [vp.NoBorder]: { default: !1 },
        [vp.EqualCells]: { default: !0 },
      },
      bbCode: {
        tag: `table`,
        BBArgsToAttrs: (e) => ({
          noborder: !!e.noborder,
          equalcells: !!e.equalcells,
        }),
        AttrsToBBArgs: (e, t) => {
          let n = {};
          e.noborder && (n.noborder = `1`),
            e.equalcells && (n.equalcells = `1`);
          let r = t.child(0);
          if (r) {
            let e = [];
            for (let t = 0; t < r.childCount; t++) {
              let n = r.child(t).attrs;
              n.colwidth ? e.push(...n.colwidth) : e.push(void 0);
            }
            n.colwidth = e.join(`,`);
          }
          return { args: n };
        },
      },
    },
    table_row: {
      ...yp.table_row,
      toDOM: of(`tr`, p.TableRow),
      bbCode: { tag: `tr` },
    },
    table_cell: { ...yp.table_cell, bbCode: { ...bp, tag: `td` } },
    table_header: { ...yp.table_header, bbCode: { ...bp, tag: `th` } },
  },
  Sp = A.memo(function (e) {
    let { schema: t } = e,
      n = !!(`table` in t.nodes && t.nodes.table.spec.tableRole);
    return (
      $(A.useMemo(() => (n ? Xu({ View: Cp }) : void 0), [n])),
      $(A.useMemo(() => (n ? ud() : void 0), [n])),
      null
    );
  }),
  Cp = class extends Ju {
    constructor(e, t) {
      super(e, t), this.SetTableClass(e);
    }
    update(e) {
      return super.update(e) ? (this.SetTableClass(e), !0) : !1;
    }
    SetTableClass(e) {
      this.table.className = v(
        f,
        e.attrs[vp.NoBorder] && `b20E2IrghSY-`,
        e.attrs[vp.EqualCells] && `zJnyxE63CCk-`,
      );
    }
  },
  wp = pe(function (e) {
    let {
        pmState: t,
        className: n,
        refOnUpdate: r,
        refView: i,
        bSpellcheckEnabled: a = !0,
        bSingleLine: o,
        panelProps: s,
        children: c,
      } = e,
      [l, u] = A.useState(),
      [d, f] = A.useState();
    A.useEffect(() => {
      t && l && f(new ul(l, { state: t.state }));
    }, [t, l]),
      A.useEffect(() => () => d?.destroy(), [d]),
      ke(i, d);
    let { refDiv: p, onActivate: m, onGamepadDirection: h } = Tp(d),
      g = Ae(p, u);
    if (!t) return null;
    let { schemaConfig: ee, bbcodeParser: te } = t;
    return (0, Z.jsxs)(Qd, {
      view: d,
      pmState: t,
      children: [
        (0, Z.jsx)(
          ne,
          {
            className: v({ [`` + n]: !!n, [Af]: !0, [jf]: !!o }),
            ref: g,
            spellCheck: a,
            focusable: !0,
            onActivate: m,
            onOKActionDescription: _(`#UserGameNotes_Edit`),
            onGamepadDirection: h,
            ...s,
          },
          `editordiv_${a}`,
        ),
        (0, Z.jsx)($d, {
          refOnUpdate: r,
          schema: ee.pm_schema,
          bSingleLine: o,
        }),
        (0, Z.jsx)(Ep, { parser: te, schema: ee.pm_schema }),
        (0, Z.jsx)(Sp, { schema: ee.pm_schema }),
        c,
      ],
    });
  });
function Tp(e) {
  let t = A.useRef(null),
    n = ue(),
    r = A.useCallback(() => {
      if ((n.ShowVirtualKeyboard(), e && !e.hasFocus())) {
        e.focus();
        let n = e.dom.childNodes,
          r = t.current?.scrollTop ?? 0;
        for (let t = 0; t < n.length; ++t) {
          let i = n[t],
            a = i.offsetTop;
          if (a !== void 0 && a >= r) {
            let t = i.getBoundingClientRect();
            Pd(e, t.left, t.top);
            break;
          }
        }
      }
    }, [n, e]),
    i = A.useCallback((e) => e.currentTarget == e.target, []);
  return {
    refDiv: t,
    onActivate: r,
    onGamepadDirection: ee(t, void 0, void 0, i),
  };
}
var Ep = A.memo(function (e) {
  let { parser: t, schema: n } = e;
  return (
    $(
      A.useMemo(
        () =>
          new k({
            props: { transformPasted: (e, r) => Dp(t, n.nodes.hard_break, e) },
          }),
        [t, n],
      ),
    ),
    null
  );
});
function Dp(e, t, n) {
  let r = !1;
  if (
    (n.content.forEach((e) => {
      e.type == t && (r = !0);
    }),
    !r)
  )
    return n;
  let i = e.ConvertLineBreaksToParagraphs(n.content);
  return S.maxOpen(i);
}
function Op(e) {
  let { schema: t, addtlAttrs: n, children: r } = e,
    { callbacks: i, view: a } = ep(),
    [o, s] = A.useState(() => Od(a.state, t.marks.link)),
    c = A.useCallback((e) => s(Od(e.state, t.marks.link)), [t]);
  Le(i, c);
  let [l, u] = wf(t, n);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      u,
      (0, Z.jsx)(lp, {
        onClick: () => l(a),
        toggled: o,
        tooltip: _(`#FormattingToolbar_InsertLink`),
        keyboardShortcut: `Mod-k`,
        children: r,
      }),
    ],
  });
}
function kp(e) {
  let { schema: t, bColor: n, addtlAttrs: r, children: i } = e,
    { callbacks: a, view: o } = ep(),
    [s, c] = A.useState(() => Od(o.state, n ? t.marks.color : t.marks.bgcolor)),
    l = A.useCallback(
      (e) => c(Od(e.state, n ? t.marks.color : t.marks.bgcolor)),
      [n, t],
    );
  Le(a, l);
  let [u, d] = hp(t, n, r);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      d,
      (0, Z.jsx)(lp, {
        onClick: (e) => u(o, e.currentTarget),
        toggled: s,
        tooltip: _(
          n ? `#FormattingToolbar_Color` : `#FormattingToolbar_BgColor`,
        ),
        children: i,
      }),
    ],
  });
}
function Ap() {
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(cp, {
        tooltip: _(`#FormattingToolbar_Undo`),
        keyboardShortcut: `Mod-z`,
        command: qi,
        children: (0, Z.jsx)(fe, {}),
      }),
      (0, Z.jsx)(cp, {
        tooltip: _(`#FormattingToolbar_Redo`),
        keyboardShortcut: be.PLATFORM == `macos` ? `Mod-Shift-z` : `Mod-y`,
        command: Ji,
        children: (0, Z.jsx)(re, {}),
      }),
    ],
  });
}
function jp(e) {
  let { schema: t } = e;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(sp, {
        tooltip: _(`#FormattingToolbar_Bold`),
        keyboardShortcut: `Mod-b`,
        mark: t.marks.strong,
        children: (0, Z.jsx)(ze, {}),
      }),
      (0, Z.jsx)(sp, {
        tooltip: _(`#FormattingToolbar_Italic`),
        keyboardShortcut: `Mod-i`,
        mark: t.marks.italic,
        children: (0, Z.jsx)(Fe, {}),
      }),
      (0, Z.jsx)(sp, {
        tooltip: _(`#FormattingToolbar_Underline`),
        keyboardShortcut: `Mod-u`,
        mark: t.marks.underline,
        children: (0, Z.jsx)(te, {}),
      }),
      `strike` in t.marks &&
        (0, Z.jsx)(sp, {
          tooltip: _(`#FormattingToolbar_Strike`),
          keyboardShortcut: `Mod-Shift-x`,
          mark: t.marks.strike,
          children: (0, Z.jsx)(Ue, {}),
        }),
      `code` in t.marks &&
        (0, Z.jsx)(sp, {
          tooltip: _(`#FormattingToolbar_InlineCode`),
          keyboardShortcut: `Ctrl-Shift-c`,
          mark: t.marks.code,
          children: (0, Z.jsx)(De, {}),
        }),
      `color` in t.marks &&
        (0, Z.jsx)(kp, { schema: t, bColor: !0, children: (0, Z.jsx)(Pe, {}) }),
      `bgcolor` in t.marks &&
        (0, Z.jsx)(kp, { schema: t, bColor: !1, children: (0, Z.jsx)(Se, {}) }),
    ],
  });
}
function Mp(e) {
  let { schema: t } = e;
  return (0, Z.jsx)(op, {
    tooltip: _(`#FormattingToolbar_Paragraph`),
    keyboardShortcut: `Ctrl-Shift-0`,
    nodeType: t.nodes.paragraph,
    children: (0, Z.jsx)(We, {}),
  });
}
function Np(e) {
  let { schema: t, maxLevel: n = 1, levels: r } = e,
    i = n + r - 1;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      n <= 1 &&
        (0, Z.jsx)(op, {
          tooltip: _(`#FormattingToolbar_HeadingLevel1`),
          keyboardShortcut: `Ctrl-Shift-1`,
          nodeType: t.nodes.heading,
          attrs: { level: 1 },
          children: (0, Z.jsx)(Re, {}),
        }),
      n <= 2 &&
        i >= 2 &&
        (0, Z.jsx)(op, {
          tooltip: _(`#FormattingToolbar_HeadingLevel2`),
          keyboardShortcut: `Ctrl-Shift-2`,
          nodeType: t.nodes.heading,
          attrs: { level: 2 },
          children: (0, Z.jsx)(ye, {}),
        }),
      n <= 3 &&
        i >= 3 &&
        (0, Z.jsx)(op, {
          tooltip: _(`#FormattingToolbar_HeadingLevel3`),
          keyboardShortcut: `Ctrl-Shift-3`,
          nodeType: t.nodes.heading,
          attrs: { level: 3 },
          children: (0, Z.jsx)(je, {}),
        }),
      n <= 4 &&
        i >= 4 &&
        (0, Z.jsx)(op, {
          tooltip: _(`#FormattingToolbar_HeadingLevel4`),
          keyboardShortcut: `Ctrl-Shift-4`,
          nodeType: t.nodes.heading,
          attrs: { level: 4 },
          children: (0, Z.jsx)(Ve, {}),
        }),
      n <= 5 &&
        i >= 5 &&
        (0, Z.jsx)(op, {
          tooltip: _(`#FormattingToolbar_HeadingLevel5`),
          keyboardShortcut: `Ctrl-Shift-5`,
          nodeType: t.nodes.heading,
          attrs: { level: 5 },
          children: (0, Z.jsx)(xe, {}),
        }),
    ],
  });
}
function Pp(e) {
  let { schema: t, showIndentButtonsAsNeeded: n = !1 } = e,
    { callbacks: r, view: i } = ep(),
    { bullet_list: a, ordered_list: o, list_item: s } = t.nodes,
    c = A.useMemo(() => bd(s), [s]),
    l = A.useMemo(() => Cd(s), [s]),
    [u, d] = A.useState(() => c(i.state) || l(i.state));
  return (
    Le(
      r,
      A.useCallback(
        (e) => {
          d(c(e.state) || l(e.state));
        },
        [c, l],
      ),
    ),
    (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(Fp, {
          tooltip: _(`#FormattingToolbar_BulletedList`),
          keyboardShortcut: `Ctrl-Shift-8`,
          list_type: a,
          list_item: s,
          children: (0, Z.jsx)(Ne, {}),
        }),
        o &&
          (0, Z.jsx)(Fp, {
            tooltip: _(`#FormattingToolbar_OrderedList`),
            keyboardShortcut: `Ctrl-Shift-7`,
            list_type: o,
            list_item: s,
            children: (0, Z.jsx)(ve, {}),
          }),
        (!n || u) &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(cp, {
                tooltip: _(`#FormattingToolbar_OutdentList`),
                keyboardShortcut: `Mod-[`,
                command: c,
                children: (0, Z.jsx)(He, {}),
              }),
              (0, Z.jsx)(cp, {
                tooltip: _(`#FormattingToolbar_IndentList`),
                keyboardShortcut: `Mod-[`,
                command: l,
                children: (0, Z.jsx)(Ce, {}),
              }),
            ],
          }),
      ],
    })
  );
}
function Fp(e) {
  let { list_type: t, list_item: n, children: r, ...i } = e,
    { callbacks: a, view: o } = ep(),
    s = A.useCallback((e) => Md(e.state, t) !== void 0, [t]),
    [c, l] = A.useState(() => s(o)),
    u = A.useMemo(() => _d(t), [t]),
    d = A.useMemo(() => bd(n), [n]);
  return (
    Le(
      a,
      A.useCallback(
        (e) => {
          l(s(e));
        },
        [s],
      ),
    ),
    (0, Z.jsx)(cp, { ...i, toggled: c, command: c ? d : u, children: r })
  );
}
function Ip(e) {
  let { schema: t, addtlAttrs: n } = e;
  return (0, Z.jsx)(Op, {
    schema: t,
    addtlAttrs: n,
    children: (0, Z.jsx)(we, {}),
  });
}
function Lp(e) {
  let { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
  return (0, Z.jsx)(lp, {
    tooltip: _(
      t
        ? `#FormattingToolbar_DisableSpellcheck`
        : `#FormattingToolbar_EnableSpellcheck`,
    ),
    toggled: t,
    onClick: () => n(!t),
    children: (0, Z.jsx)(g, {}),
  });
}
var Rp = class {
  m_ProseMirrorSchema;
  m_mapBBCodeDictionary = new Map();
  m_PMToBBCodeConfig = { mapNodes: new Map(), mapMarks: new Map() };
  get pm_schema() {
    return this.m_ProseMirrorSchema;
  }
  get bbcode_dictionary() {
    return this.m_mapBBCodeDictionary;
  }
  get pm_to_bbcode_config() {
    return this.m_PMToBBCodeConfig;
  }
  ConvertAttrToBBCodeArgs(e, t) {
    let n = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
    return (n && n.AttrsToBBArgs && n.AttrsToBBArgs(t, e).args) || {};
  }
  constructor(e, t) {
    let n = {
        doc: { content: `block+` },
        text: { group: `inline` },
        hard_break: {
          inline: !0,
          group: `inline`,
          selectable: !1,
          linebreakReplacement: !0,
          parseDOM: [{ tag: `br` }],
          toDOM() {
            return [`br`];
          },
        },
      },
      r = new Map(),
      i = new Map(),
      a = t ? new Set(t) : void 0;
    for (let t in e.nodes) {
      let { bbCode: i, ...o } = e.nodes[t],
        s = zp(i, a);
      s && ((n[t] = o), r.set(t, s));
    }
    let o = {};
    for (let t in e.marks) {
      let { bbCode: n, ...r } = e.marks[t];
      (!a || a.has(n.tag)) && ((o[t] = r), i.set(t, n));
    }
    (this.m_ProseMirrorSchema = new Ht({ nodes: n, marks: o })),
      r.forEach((t, n) => {
        let r = this.m_ProseMirrorSchema.nodes[n],
          i = e.nodes[n],
          a = Array.isArray(t) ? t : [t],
          o;
        i.content == `list_item+`
          ? (o = this.m_ProseMirrorSchema.nodes.list_item)
          : i.content?.indexOf(`paragraph`) != -1 &&
            (o = this.m_ProseMirrorSchema.nodes.paragraph),
          a.forEach(
            ({
              tag: e,
              BBArgsToAttrs: t,
              AttrsToBBArgs: n,
              convertContentToAttr: i,
              bVerbatimArgs: a,
              bVerbatimContent: s,
              ...c
            }) => {
              this.m_mapBBCodeDictionary.set(e, {
                Constructor: {
                  node: r,
                  BBArgsToAttrs: t,
                  convertContentToAttr: i,
                  acceptNode: o,
                },
                skipFollowingNewline: !0,
                ...c,
              });
            },
          );
        let {
          tag: s,
          AttrsToBBArgs: c,
          bVerbatimArgs: l,
          bVerbatimContent: u,
        } = a[0];
        this.m_PMToBBCodeConfig.mapNodes.set(r, {
          tag: s,
          AttrsToBBArgs: c,
          bVerbatimArgs: l,
          bVerbatimContent: u,
        });
      }),
      i.forEach((e, t) => {
        let n = this.m_ProseMirrorSchema.marks[t],
          { tag: r, BBArgsToAttrs: i, AttrsToBBArgs: a, ...o } = e;
        this.m_mapBBCodeDictionary.set(r, {
          Constructor: { mark: n, BBArgsToAttrs: i },
          ...o,
        }),
          this.m_PMToBBCodeConfig.mapMarks.set(n, { tag: r, AttrsToBBArgs: a });
      });
  }
};
function zp(e, t) {
  if (!t) return e;
  if (Array.isArray(e)) {
    let n = e.filter((e) => t.has(e.tag));
    return n.length > 0 ? n : void 0;
  }
  return t.has(e.tag) ? e : void 0;
}
export {
  b as $,
  df as A,
  _u as B,
  wf as C,
  uf as D,
  bf as E,
  lu as F,
  Du as G,
  bu as H,
  cu as I,
  W as J,
  Eu as K,
  hu as L,
  af as M,
  $ as N,
  of as O,
  Xd as P,
  k as Q,
  mu as R,
  Of as S,
  Sf as T,
  xu as U,
  Hl as V,
  Ou as W,
  Qi as X,
  Yi as Y,
  ta as Z,
  tp as _,
  Pp as a,
  Uf as b,
  Ap as c,
  hp as d,
  S as et,
  op as f,
  lp as g,
  ip as h,
  Ip as i,
  tf as j,
  sf as k,
  wp as l,
  rp as m,
  jp as n,
  Mp as o,
  cp as p,
  kc as q,
  Np as r,
  Lp as s,
  Rp as t,
  xp as u,
  ap as v,
  Cf as w,
  Wf as x,
  ep as y,
  du as z,
};
