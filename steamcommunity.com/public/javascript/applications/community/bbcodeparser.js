/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = class {
  m_fnAccumulatorFactory;
  m_dictComponents;
  constructor(e, t) {
    ((this.m_dictComponents =
      e instanceof Map ? e : new Map(Object.entries(e))),
      (this.m_fnAccumulatorFactory = t));
  }
  Parse(e, t, n = !0) {
    let r = c(e || ``, n);
    return this.Parse_BuildElements(r, t);
  }
  Parse_BuildElements(e, t) {
    let n = this.m_fnAccumulatorFactory(void 0),
      r = [],
      i = () => (r.length < 1 ? void 0 : r[r.length - 1]),
      a = this.m_dictComponents,
      o = (e) => !!(e.tag && a.get(e.tag)?.autocloses),
      s = !1,
      c = !0,
      l = (e, r) => {
        let i = r.text.toLowerCase();
        if (e && e.node.tag === i && a.get(e.node.tag)) {
          let r = a.get(e.node.tag),
            i = {
              tagname: e.node.tag,
              args: e.node.args,
              rawargs: e.node.rawargs,
            },
            o = t(r.Constructor, i, ...n.GetElements());
          ((n = e.accumulator),
            Array.isArray(o)
              ? o.forEach((e) => n.AppendNode(e))
              : n.AppendNode(o),
            (s = !!r.skipFollowingNewline),
            (c = e.bWrapTextForCopying));
        } else if (e) {
          let t = e.accumulator;
          (t.AppendText(`[` + e.node.text + `]`, !1),
            n.GetElements().forEach((e) => t.AppendNode(e)),
            t.AppendText(`[/` + r.text + `]`, !1),
            (n = t),
            (c = e.bWrapTextForCopying));
        }
      };
    for (
      e.forEach((e, t) => {
        if (e.type == 1) {
          let t = s ? e.text.replace(/^[\t\r ]*\n/g, ``) : e.text;
          (n.AppendText(t, c), (s = !1));
        } else if (e.type == 2) {
          let t = a.get(e.tag);
          if (!t) n.AppendText(`[` + e.text + `]`, r.length == 0);
          else {
            let o = i();
            if (o !== void 0) {
              let t = a.get(o.node.tag);
              t && t.autocloses && e.tag === o.node.tag && l(r.pop(), o.node);
            }
            (r.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
              (n = this.m_fnAccumulatorFactory(e)),
              (s = !!t.skipInternalNewline),
              (c = t.allowWrapTextForCopying ?? !1));
          }
        } else if (e.type == 3) {
          let t = e.text.toLowerCase();
          for (; i() && i().node.tag !== t && o(i().node);) {
            let e = r.pop();
            l(e, e.node);
          }
          if (i()?.node.tag == t) {
            let t = r.pop();
            l(t, e);
          } else n.AppendText(`[/` + e.text + `]`, r.length == 0);
        }
      });
      r.length > 0;
    ) {
      let e = r.pop();
      l(e, e.node);
    }
    return n.GetElements();
  }
};
function t(e, t, i = !1) {
  let a = `[` + e;
  t?.[``] && (a += `=${i ? `` + t[``] : n(`` + t[``])}`);
  for (let e in t) e !== `` && (a += ` ${r(e)}=${n(`` + t[e])}`);
  return ((a += `]`), a);
}
function n(e) {
  return `"${e.replace(/(\\|"|\])/g, `\\$1`)}"`;
}
function r(e) {
  return e.replace(/(\\| |\])/g, `\\$1`);
}
function i(e) {
  return `[/${e}]`;
}
function a(e) {
  return e.replace(/(\\|\[)/g, `\\$1`);
}
function o(e, t, n = 0) {
  let { type: r, text: i = `` } = t;
  if (r == 2) {
    let t = i.indexOf(`=`),
      n = i.indexOf(` `);
    n != -1 && (t == -1 || n < t) && (t = n);
    let a,
      o,
      s = ``;
    (t > 0
      ? ((a = i.substr(0, t).toLocaleLowerCase()),
        (s = i.substr(t)),
        (o = l(s)))
      : ((o = {}), (a = i.toLocaleLowerCase())),
      e.push({ type: r, text: i, tag: a, args: o, rawargs: s }));
  } else r != 0 && e.push({ type: r, text: i });
  return { type: n, text: `` };
}
function s(e) {
  let t = ``;
  return (
    e.type == 3 ? (t = `[/`) : e.type == 2 && (t = `[`),
    { type: 1, text: t + (e.text ?? ``) }
  );
}
function c(e, t) {
  let n = [],
    r = { type: 0, text: `` },
    i = !1,
    a = !1,
    c = !1;
  for (let l = 0; l < e.length; l++) {
    let u = e[l];
    switch (r.type) {
      case 0:
        u == `[`
          ? ((r.type = 2), (a = !0))
          : ((r.type = 1), u == `\\` && t ? (i = !i) : (r.text += u));
        break;
      case 2:
      case 3:
        if (u == `/` && a) ((r.type = 3), (r.text = ``), (a = !1));
        else if (u == `[` && !i) ((r = o(n, s(r), 2)), (a = !0));
        else if (u == `]` && !i) {
          let e = r.type == 2 && r.text?.toLocaleLowerCase() == `noparse`,
            t = r.type == 3 && r.text?.toLocaleLowerCase() == `noparse`;
          (a || (c && !t)
            ? ((r = s(r)), (r.text += u))
            : e
              ? (c = !0)
              : t && (c = !1),
            (r = o(n, r)),
            (a = !1));
        } else
          u == `\\` && t
            ? ((r.text += u), (i = !i), (a = !1))
            : ((r.text += u), (i = !1), (a = !1));
        break;
      case 1:
        u == `[` && !i
          ? ((r = o(n, r, 2)), (a = !0))
          : u == `\\` && t
            ? (i && (r.text += u), (i = !i))
            : ((r.text += u), (i = !1));
    }
  }
  return (
    r.type != 0 &&
      (r.type == 2 || r.type == 3
        ? n.push(s(r))
        : n.push({ type: r.type, text: r.text ?? `` })),
    n
  );
}
function l(e) {
  if (!e || e.length < 1) return {};
  let t = {},
    n = ``,
    r = ``,
    i = 0,
    a = 0;
  e[0] == `=` && (i = 2);
  let o = !1;
  for (a++; a < e.length; a++) {
    let s = e[a],
      c = !0,
      l = !1;
    switch (i) {
      case 0:
        if (s == `=`) return {};
        if (s == ` `) continue;
        i = 1;
        break;
      case 1:
        (s != `=` && s != ` `) ||
          o ||
          (s == ` ` ? ((i = 0), (l = !0)) : (i = 2), (c = !1));
        break;
      case 2:
        s == ` `
          ? ((i = 0), (c = !1), (l = !0))
          : s == `"`
            ? ((i = 4), (c = !1))
            : (i = 3);
        break;
      case 3:
      case 4:
        ((s == ` ` && i != 4 && !o) || (s == `"` && i == 4 && !o)) &&
          ((i = 0), (c = !1), (l = !0));
    }
    if (c) {
      if (s == `\\` && !o) o = !0;
      else if (((o = !1), i == 1)) n += s;
      else if (i == 3 || i == 4) r += s;
      else throw Error(`Not expecting to accumulate buffer in state ` + i);
    }
    l && ((t[n] = r), (n = ``), (r = ``));
  }
  return (i != 0 && (t[n] = r), t);
}
export { e as i, t as n, a as r, i as t };
