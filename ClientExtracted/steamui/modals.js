/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  $a as t,
  Pn as n,
  eo as r,
  lt as i,
  nt as a,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import {
  Bu as o,
  Vu as s,
  h as c,
} from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { t as l } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import {
  Ar as u,
  Er as d,
  Jr as f,
  Nn as p,
  Pr as m,
  Rr as h,
  fi as g,
  jr as _,
  kn as v,
  kr as y,
  qr as b,
  wr as x,
} from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { Ct as S } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { t as C } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { d as w, t as T } from "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import {
  a as E,
  c as D,
  l as O,
  n as k,
  o as A,
  t as j,
} from "./chunk~a292304e38.js?contenthash=CzbXsf2A";
var M = e(S(), 1),
  N = e(r()),
  P = e(t()),
  F = C();
function I(e) {
  let { active: t, children: n } = e,
    r = _() || d(window),
    i = u(),
    [a, o] = N.useState(null),
    [s, c] = N.useState(!1),
    l = N.useRef(void 0);
  if (
    (N.useEffect(() => {
      if (t) {
        let e = r.ShowPortalModal(),
          t = e.OnElementReadyCallbacks.Register(o),
          n = e.OnModalActiveCallbacks.Register(c);
        return (
          (l.current = e.key),
          () => {
            (o(null), c(!1), e.Close(), t.Unregister(), n.Unregister());
          }
        );
      }
    }, [r, t]),
    !a || !t)
  )
    return null;
  let f = n;
  return (
    i && (f = (0, F.jsx)(i, { active: s, modalKey: l.current, children: f })),
    P.createPortal(f, a)
  );
}
var ee = `KWtRH19ERaI-`;
function L() {
  return typeof window < `u`;
}
function R(e) {
  return te(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function z(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function B(e) {
  return ((te(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function te(e) {
  return L() ? e instanceof Node || e instanceof z(e).Node : !1;
}
function V(e) {
  return L() ? e instanceof Element || e instanceof z(e).Element : !1;
}
function H(e) {
  return L() ? e instanceof HTMLElement || e instanceof z(e).HTMLElement : !1;
}
function ne(e) {
  return !L() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot;
}
function re(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = W(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function ie(e) {
  return /^(table|td|th)$/.test(R(e));
}
function ae(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var oe = /transform|translate|scale|rotate|perspective|filter/,
  se = /paint|layout|strict|content/,
  U = (e) => !!e && e !== `none`,
  ce;
function le(e) {
  let t = V(e) ? W(e) : e;
  return (
    U(t.transform) ||
    U(t.translate) ||
    U(t.scale) ||
    U(t.rotate) ||
    U(t.perspective) ||
    (!de() && (U(t.backdropFilter) || U(t.filter))) ||
    oe.test(t.willChange || ``) ||
    se.test(t.contain || ``)
  );
}
function ue(e) {
  let t = me(e);
  for (; H(t) && !fe(t);) {
    if (le(t)) return t;
    if (ae(t)) return null;
    t = me(t);
  }
  return null;
}
function de() {
  return (
    (ce ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    ce
  );
}
function fe(e) {
  return /^(html|body|#document)$/.test(R(e));
}
function W(e) {
  return z(e).getComputedStyle(e);
}
function pe(e) {
  return V(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function me(e) {
  if (R(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (ne(e) && e.host) || B(e);
  return ne(t) ? t.host : t;
}
function he(e) {
  let t = me(e);
  return fe(t) ? (e.ownerDocument || e).body : H(t) && re(t) ? t : he(t);
}
function ge(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = he(e),
    i = r === e.ownerDocument?.body,
    a = z(r);
  if (i) {
    let e = _e(a);
    return t.concat(
      a,
      a.visualViewport || [],
      re(r) ? r : [],
      e && n ? ge(e) : [],
    );
  }
  return t.concat(r, ge(r, [], n));
}
function _e(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function G(e) {
  let t = e.activeElement;
  for (
    ;
    ((n = t) == null || (n = n.shadowRoot) == null
      ? void 0
      : n.activeElement) != null;
  ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function K(e, t) {
  if (!e || !t) return !1;
  let n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ne(n)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function ve() {
  let e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function ye() {
  let e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((e) => {
          let { brand: t, version: n } = e;
          return t + `/` + n;
        })
        .join(` `)
    : navigator.userAgent;
}
function be(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : Ce() && e.pointerType
      ? e.type === `click` && e.buttons === 1
      : e.detail === 0 && !e.pointerType;
}
function xe(e) {
  return Te()
    ? !1
    : (!Ce() && e.width === 0 && e.height === 0) ||
        (Ce() &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `mouse`) ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `touch`);
}
function Se() {
  return /apple/i.test(navigator.vendor);
}
function Ce() {
  let e = /android/i;
  return e.test(ve()) || e.test(ye());
}
function we() {
  return ve().toLowerCase().startsWith(`mac`) && !navigator.maxTouchPoints;
}
function Te() {
  return ye().includes(`jsdom/`);
}
function Ee(e, t) {
  let n = [`mouse`, `pen`];
  return (t || n.push(``, void 0), n.includes(e));
}
function De(e) {
  return `nativeEvent` in e;
}
function Oe(e) {
  return e.matches(`html,body`);
}
function q(e) {
  return e?.ownerDocument || document;
}
function ke(e, t) {
  if (t == null) return !1;
  if (`composedPath` in e) return e.composedPath().includes(t);
  let n = e;
  return n.target != null && t.contains(n.target);
}
function Ae(e) {
  return `composedPath` in e ? e.composedPath()[0] : e.target;
}
function je(e) {
  return (
    H(e) &&
    e.matches(
      `input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,
    )
  );
}
function J(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Me(e) {
  return e ? e.getAttribute(`role`) === `combobox` && je(e) : !1;
}
var Ne = Math.min,
  Y = Math.max,
  Pe = Math.round,
  Fe = Math.floor,
  Ie = (e) => ({ x: e, y: e }),
  Le = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Re(e, t, n) {
  return Y(e, Ne(t, n));
}
function ze(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Be(e) {
  return e.split(`-`)[0];
}
function Ve(e) {
  return e.split(`-`)[1];
}
function He(e) {
  return e === `x` ? `y` : `x`;
}
function Ue(e) {
  return e === `y` ? `height` : `width`;
}
function We(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function Ge(e) {
  return He(We(e));
}
function Ke(e, t, n) {
  n === void 0 && (n = !1);
  let r = Ve(e),
    i = Ge(e),
    a = Ue(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = tt(o)), [o, tt(o)]);
}
function qe(e) {
  let t = tt(e);
  return [Je(e), t, Je(t)];
}
function Je(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var Ye = [`left`, `right`],
  Xe = [`right`, `left`],
  Ze = [`top`, `bottom`],
  Qe = [`bottom`, `top`];
function $e(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Xe : Ye) : t ? Ye : Xe;
    case `left`:
    case `right`:
      return t ? Ze : Qe;
    default:
      return [];
  }
}
function et(e, t, n, r) {
  let i = Ve(e),
    a = $e(Be(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Je)))), a
  );
}
function tt(e) {
  let t = Be(e);
  return Le[t] + e.slice(t.length);
}
function nt(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function rt(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : nt(e);
}
function it(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
var at = `input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])`,
  ot = typeof Element > `u`,
  st = ot
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  ct =
    !ot && Element.prototype.getRootNode
      ? function (e) {
          return e?.getRootNode?.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  lt = function e(t, n) {
    n === void 0 && (n = !0);
    var r = t?.getAttribute?.call(t, `inert`);
    return r === `` || r === `true` || (n && t && e(t.parentNode));
  },
  ut = function (e) {
    var t = e?.getAttribute?.call(e, `contenteditable`);
    return t === `` || t === `true`;
  },
  dt = function (e, t, n) {
    if (lt(e)) return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(at));
    return (t && st.call(e, at) && r.unshift(e), (r = r.filter(n)), r);
  },
  ft = function e(t, n, r) {
    for (var i = [], a = Array.from(t); a.length;) {
      var o = a.shift();
      if (!lt(o, !1)) {
        if (o.tagName === `SLOT`) {
          var s = o.assignedElements(),
            c = e(s.length ? s : o.children, !0, r);
          r.flatten
            ? i.push.apply(i, c)
            : i.push({ scopeParent: o, candidates: c });
        } else {
          st.call(o, at) && r.filter(o) && (n || !t.includes(o)) && i.push(o);
          var l =
              o.shadowRoot ||
              (typeof r.getShadowRoot == `function` && r.getShadowRoot(o)),
            u = !lt(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (l && u) {
            var d = e(l === !0 ? o.children : l.children, !0, r);
            r.flatten
              ? i.push.apply(i, d)
              : i.push({ scopeParent: o, candidates: d });
          } else a.unshift.apply(a, o.children);
        }
      }
    }
    return i;
  },
  pt = function (e) {
    return !isNaN(parseInt(e.getAttribute(`tabindex`), 10));
  },
  mt = function (e) {
    if (!e) throw Error(`No node provided`);
    return e.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ut(e)) &&
      !pt(e)
      ? 0
      : e.tabIndex;
  },
  ht = function (e, t) {
    var n = mt(e);
    return n < 0 && t && !pt(e) ? 0 : n;
  },
  gt = function (e, t) {
    return e.tabIndex === t.tabIndex
      ? e.documentOrder - t.documentOrder
      : e.tabIndex - t.tabIndex;
  },
  _t = function (e) {
    return e.tagName === `INPUT`;
  },
  vt = function (e) {
    return _t(e) && e.type === `hidden`;
  },
  yt = function (e) {
    return (
      e.tagName === `DETAILS` &&
      Array.prototype.slice.apply(e.children).some(function (e) {
        return e.tagName === `SUMMARY`;
      })
    );
  },
  bt = function (e, t) {
    for (var n = 0; n < e.length; n++)
      if (e[n].checked && e[n].form === t) return e[n];
  },
  xt = function (e) {
    if (!e.name) return !0;
    var t = e.form || ct(e),
      n = function (e) {
        return t.querySelectorAll(`input[type="radio"][name="` + e + `"]`);
      },
      r;
    if (
      typeof window < `u` &&
      window.CSS !== void 0 &&
      typeof window.CSS.escape == `function`
    )
      r = n(window.CSS.escape(e.name));
    else
      try {
        r = n(e.name);
      } catch (e) {
        return (
          console.error(
            `Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,
            e.message,
          ),
          !1
        );
      }
    var i = bt(r, e.form);
    return !i || i === e;
  },
  St = function (e) {
    return _t(e) && e.type === `radio`;
  },
  Ct = function (e) {
    return St(e) && !xt(e);
  },
  wt = function (e) {
    var t = e && ct(e),
      n = t?.host,
      r = !1;
    if (t && t !== e) {
      var i, a, o;
      for (
        r = !!(
          ((i = n) != null && (a = i.ownerDocument) != null && a.contains(n)) ||
          (e != null && (o = e.ownerDocument) != null && o.contains(e))
        );
        !r && n;
      ) {
        var s, c;
        ((t = ct(n)),
          (n = t?.host),
          (r = !!(
            (s = n) != null &&
            (c = s.ownerDocument) != null &&
            c.contains(n)
          )));
      }
    }
    return r;
  },
  Tt = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      r = t.height;
    return n === 0 && r === 0;
  },
  Et = function (e, t) {
    var n = t.displayCheck,
      r = t.getShadowRoot;
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    var i = st.call(e, `details>summary:first-of-type`) ? e.parentElement : e;
    if (st.call(i, `details:not([open]) *`)) return !0;
    if (!n || n === `full` || n === `legacy-full`) {
      if (typeof r == `function`) {
        for (var a = e; e;) {
          var o = e.parentElement,
            s = ct(e);
          if (o && !o.shadowRoot && r(o) === !0) return Tt(e);
          e = e.assignedSlot
            ? e.assignedSlot
            : !o && s !== e.ownerDocument
              ? s.host
              : o;
        }
        e = a;
      }
      if (wt(e)) return !e.getClientRects().length;
      if (n !== `legacy-full`) return !0;
    } else if (n === `non-zero-area`) return Tt(e);
    return !1;
  },
  Dt = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t;) {
        if (t.tagName === `FIELDSET` && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var r = t.children.item(n);
            if (r.tagName === `LEGEND`)
              return st.call(t, `fieldset[disabled] *`) ? !0 : !r.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  Ot = function (e, t) {
    return !(t.disabled || lt(t) || vt(t) || Et(t, e) || yt(t) || Dt(t));
  },
  kt = function (e, t) {
    return !(Ct(t) || mt(t) < 0 || !Ot(e, t));
  },
  At = function (e) {
    var t = parseInt(e.getAttribute(`tabindex`), 10);
    return !!(isNaN(t) || t >= 0);
  },
  jt = function e(t) {
    var n = [],
      r = [];
    return (
      t.forEach(function (t, i) {
        var a = !!t.scopeParent,
          o = a ? t.scopeParent : t,
          s = ht(o, a),
          c = a ? e(t.candidates) : o;
        s === 0
          ? a
            ? n.push.apply(n, c)
            : n.push(o)
          : r.push({
              documentOrder: i,
              tabIndex: s,
              item: t,
              isScope: a,
              content: c,
            });
      }),
      r
        .sort(gt)
        .reduce(function (e, t) {
          return (
            t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          );
        }, [])
        .concat(n)
    );
  },
  Mt = function (e, t) {
    return (
      (t ||= {}),
      jt(
        t.getShadowRoot
          ? ft([e], t.includeContainer, {
              filter: kt.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
              shadowRootFilter: At,
            })
          : dt(e, t.includeContainer, kt.bind(null, t)),
      )
    );
  },
  Nt = function (e, t) {
    if (((t ||= {}), !e)) throw Error(`No node provided`);
    return st.call(e, at) !== !1 && kt(t, e);
  };
function Pt(e, t, n) {
  let { reference: r, floating: i } = e,
    a = We(t),
    o = Ge(t),
    s = Ue(o),
    c = Be(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  let m = Ve(t);
  return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function Ft(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = ze(t, e),
    p = rt(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = it(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = it(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var It = 50,
  Lt = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: Ft },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = Pt(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < It &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = Pt(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  Rt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = ze(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = Be(r),
            _ = We(o),
            v = Be(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [tt(o)] : qe(o)),
            x = p !== `none`;
          !d && x && b.push(...et(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = Ke(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (u !== `alignment` ||
                _ === We(t) ||
                T.every((e) => We(e.placement) !== _ || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = We(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  zt = new Set([`left`, `top`]);
async function Bt(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Be(n),
    s = Ve(n),
    c = We(n) === `y`,
    l = zt.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = ze(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var Vt = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await Bt(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Ht = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = ze(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = We(i),
            p = He(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              Re(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`],
              );
          (o && (m = g(p, m)), s && (h = g(f, h)));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  Ut = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = ze(e, t),
            c = await i.detectOverflow(t, s),
            l = Be(n),
            u = Ve(n),
            d = We(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h;
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`));
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = Ne(p - c[m], g),
            y = Ne(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          (b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * Y(c.left, c.right))
                : (S = p - 2 * Y(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }));
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Wt(e) {
  let t = W(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = H(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = Pe(n) !== a || Pe(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Gt(e) {
  return V(e) ? e : e.contextElement;
}
function Kt(e) {
  let t = Gt(e);
  if (!H(t)) return Ie(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Wt(t),
    o = (a ? Pe(n.width) : n.width) / r,
    s = (a ? Pe(n.height) : n.height) / i;
  return (
    (o && Number.isFinite(o)) || (o = 1),
    (s && Number.isFinite(s)) || (s = 1),
    { x: o, y: s }
  );
}
var qt = Ie(0);
function Jt(e) {
  let t = z(e);
  return !de() || !t.visualViewport
    ? qt
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Yt(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === z(e));
}
function Xt(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = Gt(e),
    o = Ie(1);
  t && (r ? V(r) && (o = Kt(r)) : (o = Kt(e)));
  let s = Yt(a, n, r) ? Jt(a) : Ie(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = z(a),
      t = V(r) ? z(r) : r,
      n = e,
      i = _e(n);
    for (; i && t !== n;) {
      let e = Kt(i),
        t = i.getBoundingClientRect(),
        r = W(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = z(i)),
        (i = _e(n)));
    }
  }
  return it({ width: u, height: d, x: c, y: l });
}
function Zt(e, t) {
  let n = pe(e).scrollLeft;
  return t ? t.left + n : Xt(B(e)).left + n;
}
function Qt(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Zt(e, n), y: n.top + t.scrollTop };
}
function $t(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = B(r),
    s = t ? ae(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Ie(1),
    u = Ie(0),
    d = H(r);
  if ((d || !a) && ((R(r) !== `body` || re(o)) && (c = pe(r)), d)) {
    let e = Xt(r);
    ((l = Kt(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Qt(o, c) : Ie(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function en(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function tn(e) {
  let t = pe(e),
    n = e.ownerDocument.body,
    r = Y(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = Y(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Zt(e),
    o = -t.scrollTop;
  return (
    W(n).direction === `rtl` && (a += Y(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var nn = 25;
function rn(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = z(e),
    a = B(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !de() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (Zt(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= nn && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function an(e, t) {
  let n = Xt(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Kt(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function on(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = rn(e, n, t);
  else if (t === `document`) r = tn(B(e));
  else if (V(t)) r = an(t, n);
  else {
    let n = Jt(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return it(r);
}
function sn(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = ge(e, [], !1).filter((e) => V(e) && R(e) !== `body`),
    i = null,
    a = W(e).position === `fixed`,
    o = a ? me(e) : e;
  for (; V(o) && !fe(o);) {
    let e = W(o),
      t = le(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = me(o)));
  }
  return (t.set(e, r), r);
}
function cn(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? ae(t)
          ? []
          : sn(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = on(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = on(t, a[e], i);
    ((s = Y(n.top, s)),
      (c = Ne(n.right, c)),
      (l = Ne(n.bottom, l)),
      (u = Y(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function ln(e) {
  let { width: t, height: n } = Wt(e);
  return { width: t, height: n };
}
function un(e, t, n) {
  let r = H(t),
    i = B(t),
    a = n === `fixed`,
    o = Xt(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = Ie(0);
  if ((r || !a) && ((R(t) !== `body` || re(i)) && (s = pe(t)), r)) {
    let e = Xt(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = Zt(i));
  let l = i && !r && !a ? Qt(i, s) : Ie(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function dn(e) {
  return W(e).position === `static`;
}
function fn(e, t) {
  if (!H(e) || W(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (B(e) === n && (n = n.ownerDocument.body), n);
}
function pn(e, t) {
  let n = z(e);
  if (ae(e)) return n;
  if (!H(e)) {
    let t = me(e);
    for (; t && !fe(t);) {
      if (V(t) && !dn(t)) return t;
      t = me(t);
    }
    return n;
  }
  let r = fn(e, t);
  for (; r && ie(r) && dn(r);) r = fn(r, t);
  return r && fe(r) && dn(r) && !le(r) ? n : r || ue(e) || n;
}
var mn = async function (e) {
  let t = this.getOffsetParent || pn,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: un(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function hn(e) {
  return W(e).direction === `rtl`;
}
var gn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $t,
  getDocumentElement: B,
  getClippingRect: cn,
  getOffsetParent: pn,
  getElementRects: mn,
  getClientRects: en,
  getDimensions: ln,
  getScale: Kt,
  isElement: V,
  isRTL: hn,
};
function _n(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function vn(e, t, n) {
  let r = null,
    i,
    a = B(e);
  function o() {
    var e;
    (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
  }
  function s(n, c) {
    (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = Fe(d),
      h = Fe(a.clientWidth - (u + f)),
      g = Fe(a.clientHeight - (d + p)),
      _ = Fe(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: Y(0, Ne(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!_n(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = z(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      (c.removeEventListener(`resize`, l), o());
    }
  );
}
function yn(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Gt(e),
    u = i || a ? [...(l ? ge(l) : []), ...(t ? ge(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? vn(l, n, a) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Xt(e) : null;
  c && g();
  function g() {
    let t = Xt(e);
    (h && !_n(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var bn = Vt,
  xn = Ht,
  Sn = Rt,
  Cn = Ut,
  wn = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...gn, ...i.platform, _c: r };
    return Lt(e, t, { ...i, platform: a });
  },
  Tn = typeof document < `u` ? N.useLayoutEffect : N.useEffect;
function En(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!En(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !En(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dn(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function On(e, t) {
  let n = Dn(e);
  return Math.round(t * n) / n;
}
function kn(e) {
  let t = N.useRef(e);
  return (
    Tn(() => {
      t.current = e;
    }),
    t
  );
}
function An(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = N.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = N.useState(r);
  En(f, r) || p(r);
  let [m, h] = N.useState(null),
    [g, _] = N.useState(null),
    v = N.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = N.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = N.useRef(null),
    C = N.useRef(null),
    w = N.useRef(u),
    T = c != null,
    E = kn(c),
    D = kn(i),
    O = kn(l),
    k = N.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (D.current && (e.platform = D.current),
        wn(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: O.current !== !1 };
          A.current &&
            !En(w.current, t) &&
            ((w.current = t),
            P.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, D, O]);
  Tn(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let A = N.useRef(!1);
  (Tn(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    [],
  ),
    Tn(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, k);
        k();
      }
    }, [b, x, k, E, T]));
  let j = N.useMemo(
      () => ({ reference: S, floating: C, setReference: v, setFloating: y }),
      [v, y],
    ),
    M = N.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    F = N.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      let t = On(M.floating, u.x),
        r = On(M.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(Dn(M.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, M.floating, u.x, u.y]);
  return N.useMemo(
    () => ({ ...u, update: k, refs: j, elements: M, floatingStyles: F }),
    [u, k, j, M, F],
  );
}
var jn = (e, t) => ({ ...bn(e), options: [e, t] }),
  Mn = (e, t) => ({ ...xn(e), options: [e, t] }),
  Nn = (e, t) => ({ ...Sn(e), options: [e, t] }),
  Pn = (e, t) => ({ ...Cn(e), options: [e, t] });
function Fn(e) {
  let t = N.useRef(void 0),
    n = N.useCallback((t) => {
      let n = e.map((e) => {
        if (e != null) {
          if (typeof e == `function`) {
            let n = e,
              r = n(t);
            return typeof r == `function`
              ? r
              : () => {
                  n(null);
                };
          }
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        }
      });
      return () => {
        n.forEach((e) => e?.());
      };
    }, e);
  return N.useMemo(
    () =>
      e.every((e) => e == null)
        ? null
        : (e) => {
            ((t.current &&= (t.current(), void 0)),
              e != null && (t.current = n(e)));
          },
    e,
  );
}
var In = { ...N },
  Ln = In.useInsertionEffect || ((e) => e());
function X(e) {
  let t = N.useRef(() => {});
  return (
    Ln(() => {
      t.current = e;
    }),
    N.useCallback(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
var Rn = `ArrowUp`,
  zn = `ArrowDown`,
  Bn = `ArrowLeft`,
  Vn = `ArrowRight`;
function Hn(e, t, n) {
  return Math.floor(e / t) !== n;
}
function Un(e, t) {
  return t < 0 || t >= e.current.length;
}
function Wn(e, t) {
  return Z(e, { disabledIndices: t });
}
function Gn(e, t) {
  return Z(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t,
  });
}
function Z(e, t) {
  let {
      startingIndex: n = -1,
      decrement: r = !1,
      disabledIndices: i,
      amount: a = 1,
    } = t === void 0 ? {} : t,
    o = e.current,
    s = n;
  do s += r ? -a : a;
  while (s >= 0 && s <= o.length - 1 && Xn(o, s, i));
  return s;
}
function Kn(e, t) {
  let {
      event: n,
      orientation: r,
      loop: i,
      rtl: a,
      cols: o,
      disabledIndices: s,
      minIndex: c,
      maxIndex: l,
      prevIndex: u,
      stopEvent: d = !1,
    } = t,
    f = u;
  if (n.key === Rn) {
    if ((d && J(n), u === -1)) f = l;
    else if (
      ((f = Z(e, {
        startingIndex: f,
        amount: o,
        decrement: !0,
        disabledIndices: s,
      })),
      i && (u - o < c || f < 0))
    ) {
      let e = u % o,
        t = l % o,
        n = l - (t - e);
      f = t === e ? l : t > e ? n : n - o;
    }
    Un(e, f) && (f = u);
  }
  if (
    (n.key === zn &&
      (d && J(n),
      u === -1
        ? (f = c)
        : ((f = Z(e, { startingIndex: u, amount: o, disabledIndices: s })),
          i &&
            u + o > l &&
            (f = Z(e, {
              startingIndex: (u % o) - o,
              amount: o,
              disabledIndices: s,
            }))),
      Un(e, f) && (f = u)),
    r === `both`)
  ) {
    let t = Fe(u / o);
    (n.key === (a ? Bn : Vn) &&
      (d && J(n),
      u % o === o - 1
        ? i &&
          (f = Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s }))
        : ((f = Z(e, { startingIndex: u, disabledIndices: s })),
          i &&
            Hn(f, o, t) &&
            (f = Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s }))),
      Hn(f, o, t) && (f = u)),
      n.key === (a ? Vn : Bn) &&
        (d && J(n),
        u % o === 0
          ? i &&
            (f = Z(e, {
              startingIndex: u + (o - (u % o)),
              decrement: !0,
              disabledIndices: s,
            }))
          : ((f = Z(e, {
              startingIndex: u,
              decrement: !0,
              disabledIndices: s,
            })),
            i &&
              Hn(f, o, t) &&
              (f = Z(e, {
                startingIndex: u + (o - (u % o)),
                decrement: !0,
                disabledIndices: s,
              }))),
        Hn(f, o, t) && (f = u)));
    let r = Fe(l / o) === t;
    Un(e, f) &&
      (f =
        i && r
          ? n.key === (a ? Vn : Bn)
            ? l
            : Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s })
          : u);
  }
  return f;
}
function qn(e, t, n) {
  let r = [],
    i = 0;
  return (
    e.forEach((e, a) => {
      let { width: o, height: s } = e,
        c = !1;
      for (n && (i = 0); !c;) {
        let e = [];
        for (let n = 0; n < o; n++)
          for (let r = 0; r < s; r++) e.push(i + n + r * t);
        (i % t) + o <= t && e.every((e) => r[e] == null)
          ? (e.forEach((e) => {
              r[e] = a;
            }),
            (c = !0))
          : i++;
      }
    }),
    [...r]
  );
}
function Jn(e, t, n, r, i) {
  if (e === -1) return -1;
  let a = n.indexOf(e),
    o = t[e];
  switch (i) {
    case `tl`:
      return a;
    case `tr`:
      return o ? a + o.width - 1 : a;
    case `bl`:
      return o ? a + (o.height - 1) * r : a;
    case `br`:
      return n.lastIndexOf(e);
  }
}
function Yn(e, t) {
  return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
}
function Xn(e, t, n) {
  if (n) return n.includes(t);
  let r = e[t];
  return (
    r == null ||
    r.hasAttribute(`disabled`) ||
    r.getAttribute(`aria-disabled`) === `true`
  );
}
var Q = typeof document < `u` ? N.useLayoutEffect : N.useEffect;
function Zn(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING ||
    n & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING ||
        n & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
var Qn = N.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: { current: [] },
});
function $n(e) {
  let { children: t, elementsRef: n, labelsRef: r } = e,
    [i, a] = N.useState(() => new Set()),
    o = N.useCallback((e) => {
      a((t) => new Set(t).add(e));
    }, []),
    s = N.useCallback((e) => {
      a((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    c = N.useMemo(() => {
      let e = new Map();
      return (
        Array.from(i.keys())
          .sort(Zn)
          .forEach((t, n) => {
            e.set(t, n);
          }),
        e
      );
    }, [i]);
  return (0, F.jsx)(Qn.Provider, {
    value: N.useMemo(
      () => ({
        register: o,
        unregister: s,
        map: c,
        elementsRef: n,
        labelsRef: r,
      }),
      [o, s, c, n, r],
    ),
    children: t,
  });
}
function er(e) {
  e === void 0 && (e = {});
  let { label: t } = e,
    {
      register: n,
      unregister: r,
      map: i,
      elementsRef: a,
      labelsRef: o,
    } = N.useContext(Qn),
    [s, c] = N.useState(null),
    l = N.useRef(null),
    u = N.useCallback(
      (e) => {
        if (((l.current = e), s !== null && ((a.current[s] = e), o))) {
          let n = t !== void 0;
          o.current[s] = n ? t : (e?.textContent ?? null);
        }
      },
      [s, a, o, t],
    );
  return (
    Q(() => {
      let e = l.current;
      if (e)
        return (
          n(e),
          () => {
            r(e);
          }
        );
    }, [n, r]),
    Q(() => {
      let e = l.current ? i.get(l.current) : null;
      e != null && c(e);
    }, [i]),
    N.useMemo(() => ({ ref: u, index: s ?? -1 }), [s, u])
  );
}
var tr = [Bn, Vn],
  nr = [Rn, zn];
[...tr, ...nr];
var rr = !1,
  ir = 0,
  ar = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + ir++;
function or() {
  let [e, t] = N.useState(() => (rr ? ar() : void 0));
  return (
    Q(() => {
      e ?? t(ar());
    }, []),
    N.useEffect(() => {
      rr = !0;
    }, []),
    e
  );
}
var sr = In.useId || or;
function cr() {
  let e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((e) => e(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      e.set(t, e.get(t)?.filter((e) => e !== n) || []);
    },
  };
}
var lr = N.createContext(null),
  ur = N.createContext(null),
  dr = () => N.useContext(lr)?.id || null,
  fr = () => N.useContext(ur);
function pr(e) {
  return `data-floating-ui-` + e;
}
function mr(e) {
  e.current !== -1 && (clearTimeout(e.current), (e.current = -1));
}
function $(e) {
  let t = (0, N.useRef)(e);
  return (
    Q(() => {
      t.current = e;
    }),
    t
  );
}
var hr = 0;
function gr(e, t) {
  t === void 0 && (t = {});
  let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
  r && cancelAnimationFrame(hr);
  let a = () => e?.focus({ preventScroll: n });
  i ? a() : (hr = requestAnimationFrame(a));
}
function _r(e, t) {
  let n = [],
    r = e.find((e) => e.id === t)?.parentId;
  for (; r;) {
    let t = e.find((e) => e.id === r);
    ((r = t?.parentId), t && (n = n.concat(t)));
  }
  return n;
}
function vr(e, t) {
  let n = e.filter((e) => e.parentId === t && e.context?.open),
    r = n;
  for (; r.length;)
    ((r = e.filter((e) =>
      r?.some((t) => e.parentId === t.id && e.context?.open),
    )),
      (n = n.concat(r)));
  return n;
}
function yr(e, t) {
  let n,
    r = -1;
  function i(t, a) {
    (a > r && ((n = t), (r = a)),
      vr(e, t).forEach((e) => {
        i(e.id, a + 1);
      }));
  }
  return (i(t, 0), e.find((e) => e.id === n));
}
var br = new WeakMap(),
  xr = new WeakSet(),
  Sr = {},
  Cr = 0,
  wr = () => typeof HTMLElement < `u` && `inert` in HTMLElement.prototype,
  Tr = (e) => e && (e.host || Tr(e.parentNode)),
  Er = (e, t) =>
    t
      .map((t) => {
        if (e.contains(t)) return t;
        let n = Tr(t);
        return e.contains(n) ? n : null;
      })
      .filter((e) => e != null);
function Dr(e, t, n, r) {
  let i = `data-floating-ui-inert`,
    a = r ? `inert` : n ? `aria-hidden` : null,
    o = Er(t, e),
    s = new Set(),
    c = new Set(o),
    l = [];
  Sr[i] || (Sr[i] = new WeakMap());
  let u = Sr[i];
  (o.forEach(d), f(t), s.clear());
  function d(e) {
    e && !s.has(e) && (s.add(e), e.parentNode && d(e.parentNode));
  }
  function f(e) {
    e &&
      !c.has(e) &&
      [].forEach.call(e.children, (e) => {
        if (R(e) !== `script`) {
          if (s.has(e)) f(e);
          else {
            let t = a ? e.getAttribute(a) : null,
              n = t !== null && t !== `false`,
              r = br.get(e) || 0,
              o = a ? r + 1 : r,
              s = (u.get(e) || 0) + 1;
            (br.set(e, o),
              u.set(e, s),
              l.push(e),
              o === 1 && n && xr.add(e),
              s === 1 && e.setAttribute(i, ``),
              !n && a && e.setAttribute(a, `true`));
          }
        }
      });
  }
  return (
    Cr++,
    () => {
      (l.forEach((e) => {
        let t = br.get(e) || 0,
          n = a ? t - 1 : t,
          r = (u.get(e) || 0) - 1;
        (br.set(e, n),
          u.set(e, r),
          n || (!xr.has(e) && a && e.removeAttribute(a), xr.delete(e)),
          r || e.removeAttribute(i));
      }),
        Cr--,
        Cr ||
          ((br = new WeakMap()),
          (br = new WeakMap()),
          (xr = new WeakSet()),
          (Sr = {})));
    }
  );
}
function Or(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let r = q(e[0]).body;
  return Dr(e.concat(Array.from(r.querySelectorAll(`[aria-live]`))), r, t, n);
}
var kr = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == `function` &&
    ResizeObserver.toString().includes(`[native code]`)
      ? `full`
      : `none`,
});
function Ar(e, t) {
  let n = Mt(e, kr());
  t === `prev` && n.reverse();
  let r = n.indexOf(G(q(e)));
  return n.slice(r + 1)[0];
}
function jr() {
  return Ar(document.body, `next`);
}
function Mr() {
  return Ar(document.body, `prev`);
}
function Nr(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !K(n, r);
}
var Pr = {
    border: 0,
    clip: `rect(0 0 0 0)`,
    height: `1px`,
    margin: `-1px`,
    overflow: `hidden`,
    padding: 0,
    position: `fixed`,
    whiteSpace: `nowrap`,
    width: `1px`,
    top: 0,
    left: 0,
  },
  Fr = N.forwardRef(function (e, t) {
    let [n, r] = N.useState();
    Q(() => {
      Se() && r(`button`);
    }, []);
    let i = {
      ref: t,
      tabIndex: 0,
      role: n,
      "aria-hidden": !n || void 0,
      [pr(`focus-guard`)]: ``,
      style: Pr,
    };
    return (0, F.jsx)(`span`, { ...e, ...i });
  }),
  Ir = N.createContext(null),
  Lr = () => N.useContext(Ir),
  Rr = `data-floating-ui-focusable`;
function zr(e) {
  return e
    ? e.hasAttribute(Rr)
      ? e
      : e.querySelector(`[` + Rr + `]`) || e
    : null;
}
function Br(e) {
  return N.useMemo(
    () => (t) => {
      e.forEach((e) => {
        e && (e.current = t);
      });
    },
    e,
  );
}
var Vr = 20,
  Hr = [];
function Ur(e) {
  ((Hr = Hr.filter((e) => e.isConnected)),
    e &&
      R(e) !== `body` &&
      (Hr.push(e), Hr.length > Vr && (Hr = Hr.slice(-20))));
}
function Wr() {
  return Hr.slice()
    .reverse()
    .find((e) => e.isConnected);
}
function Gr(e) {
  let t = kr();
  return Nt(e, t) ? e : Mt(e, t)[0] || e;
}
var Kr = N.forwardRef(function (e, t) {
  return (0, F.jsx)(`button`, {
    ...e,
    type: `button`,
    ref: t,
    tabIndex: -1,
    style: Pr,
  });
});
function qr(e) {
  let {
      context: t,
      children: n,
      disabled: r = !1,
      order: i = [`content`],
      guards: a = !0,
      initialFocus: o = 0,
      returnFocus: s = !0,
      restoreFocus: c = !1,
      modal: l = !0,
      visuallyHiddenDismiss: u = !1,
      closeOnFocusOut: d = !0,
      outsideElementsInert: f = !1,
    } = e,
    {
      open: p,
      onOpenChange: m,
      events: h,
      dataRef: g,
      elements: { domReference: _, floating: v },
    } = t,
    y = X(() => g.current.floatingContext?.nodeId),
    b = typeof o == `number` && o < 0,
    x = Me(_) && b,
    S = wr(),
    C = !S || a,
    w = !C || (S && f),
    T = $(i),
    E = $(o),
    D = $(s),
    O = fr(),
    k = Lr(),
    A = N.useRef(null),
    j = N.useRef(null),
    M = N.useRef(!1),
    P = N.useRef(!1),
    I = N.useRef(-1),
    ee = k != null,
    L = zr(v),
    R = X(function (e) {
      return (e === void 0 && (e = L), e ? Mt(e, kr()) : []);
    }),
    z = X((e) => {
      let t = R(e);
      return T.current
        .map((e) =>
          _ && e === `reference` ? _ : L && e === `floating` ? L : t,
        )
        .filter(Boolean)
        .flat();
    });
  (N.useEffect(() => {
    if (r || !l) return;
    function e(e) {
      if (e.key === `Tab`) {
        K(L, G(q(L))) && R().length === 0 && !x && J(e);
        let t = z(),
          n = Ae(e);
        (T.current[0] === `reference` &&
          n === _ &&
          (J(e), e.shiftKey ? gr(t[t.length - 1]) : gr(t[1])),
          T.current[1] === `floating` &&
            n === L &&
            e.shiftKey &&
            (J(e), gr(t[0])));
      }
    }
    let t = q(L);
    return (
      t.addEventListener(`keydown`, e),
      () => {
        t.removeEventListener(`keydown`, e);
      }
    );
  }, [r, _, L, l, T, x, R, z]),
    N.useEffect(() => {
      if (r || !v) return;
      function e(e) {
        let t = Ae(e),
          n = R().indexOf(t);
        n !== -1 && (I.current = n);
      }
      return (
        v.addEventListener(`focusin`, e),
        () => {
          v.removeEventListener(`focusin`, e);
        }
      );
    }, [r, v, R]),
    N.useEffect(() => {
      if (r || !d) return;
      function e() {
        ((P.current = !0),
          setTimeout(() => {
            P.current = !1;
          }));
      }
      function t(e) {
        let t = e.relatedTarget;
        queueMicrotask(() => {
          let n = y(),
            r = !(
              K(_, t) ||
              K(v, t) ||
              K(t, v) ||
              K(k?.portalNode, t) ||
              (t != null && t.hasAttribute(pr(`focus-guard`))) ||
              (O &&
                (vr(O.nodesRef.current, n).find(
                  (e) =>
                    K(e.context?.elements.floating, t) ||
                    K(e.context?.elements.domReference, t),
                ) ||
                  _r(O.nodesRef.current, n).find(
                    (e) =>
                      [
                        e.context?.elements.floating,
                        zr(e.context?.elements.floating),
                      ].includes(t) || e.context?.elements.domReference === t,
                  )))
            );
          if (c && r && G(q(L)) === q(L).body) {
            H(L) && L.focus();
            let e = I.current,
              t = R(),
              n = t[e] || t[t.length - 1] || L;
            H(n) && n.focus();
          }
          (x || !l) &&
            t &&
            r &&
            !P.current &&
            t !== Wr() &&
            ((M.current = !0), m(!1, e, `focus-out`));
        });
      }
      if (v && H(_))
        return (
          _.addEventListener(`focusout`, t),
          _.addEventListener(`pointerdown`, e),
          v.addEventListener(`focusout`, t),
          () => {
            (_.removeEventListener(`focusout`, t),
              _.removeEventListener(`pointerdown`, e),
              v.removeEventListener(`focusout`, t));
          }
        );
    }, [r, _, v, L, l, O, k, m, d, c, R, x, y]));
  let B = N.useRef(null),
    te = N.useRef(null),
    V = Br([B, k?.beforeInsideRef]),
    ne = Br([te, k?.afterInsideRef]);
  (N.useEffect(() => {
    var e;
    if (r || !v) return;
    let t = Array.from(
        (k == null || (e = k.portalNode) == null
          ? void 0
          : e.querySelectorAll(`[` + pr(`portal`) + `]`)) || [],
      ),
      n =
        O && !l
          ? _r(O?.nodesRef.current, y()).map(
              (e) => e.context?.elements.floating,
            )
          : [],
      i = [
        v,
        ...t,
        ...n,
        A.current,
        j.current,
        B.current,
        te.current,
        k?.beforeOutsideRef.current,
        k?.afterOutsideRef.current,
        T.current.includes(`reference`) || x ? _ : null,
      ].filter((e) => e != null),
      a = l || x ? Or(i, !w, w) : Or(i);
    return () => {
      a();
    };
  }, [r, _, v, l, T, k, x, C, w, O, y]),
    Q(() => {
      if (r || !H(L)) return;
      let e = G(q(L));
      queueMicrotask(() => {
        let t = z(L),
          n = E.current,
          r = (typeof n == `number` ? t[n] : n.current) || L,
          i = K(L, e);
        !b && !i && p && gr(r, { preventScroll: r === L });
      });
    }, [r, p, L, b, z, E]),
    Q(() => {
      if (r || !L) return;
      let e = !1,
        t = !1,
        n = q(L),
        i = G(n),
        a = g.current.openEvent;
      Ur(i);
      function o(n) {
        let { open: r, reason: i, event: o, nested: s } = n;
        if (
          (r && (a = o),
          i === `escape-key` && (t = !0),
          [`hover`, `safe-polygon`].includes(i) &&
            o.type === `mouseleave` &&
            (M.current = !0),
          i === `outside-press`)
        ) {
          if (s) ((M.current = !1), (e = !0));
          else if (be(o) || xe(o)) M.current = !1;
          else {
            let t = !1;
            (document.createElement(`div`).focus({
              get preventScroll() {
                return ((t = !0), !1);
              },
            }),
              t ? ((M.current = !1), (e = !0)) : (M.current = !0));
          }
        }
      }
      h.on(`openchange`, o);
      let s = n.createElement(`span`);
      (s.setAttribute(`tabindex`, `-1`),
        s.setAttribute(`aria-hidden`, `true`),
        Object.assign(s.style, Pr),
        ee && _ && _.insertAdjacentElement(`afterend`, s));
      function c() {
        return typeof D.current == `boolean`
          ? t && _
            ? _
            : Wr() || s
          : D.current.current || s;
      }
      return () => {
        h.off(`openchange`, o);
        let r = G(n),
          i =
            K(v, r) ||
            (O &&
              vr(O.nodesRef.current, y()).some((e) =>
                K(e.context?.elements.floating, r),
              ));
        (i || (a && [`click`, `mousedown`].includes(a.type))) && (t = !0);
        let l = c();
        queueMicrotask(() => {
          let t = Gr(l);
          (D.current &&
            !M.current &&
            H(t) &&
            (t === r || r === n.body || i) &&
            t.focus({ preventScroll: e }),
            s.remove());
        });
      };
    }, [r, v, L, D, g, h, O, ee, _, y]),
    N.useEffect(() => {
      queueMicrotask(() => {
        M.current = !1;
      });
    }, [r]),
    Q(() => {
      if (!r && k)
        return (
          k.setFocusManagerState({
            modal: l,
            closeOnFocusOut: d,
            open: p,
            onOpenChange: m,
            domReference: _,
          }),
          () => {
            k.setFocusManagerState(null);
          }
        );
    }, [r, k, l, p, m, d, _]),
    Q(() => {
      if (r || !L || typeof MutationObserver != `function` || b) return;
      let e = () => {
        let e = L.getAttribute(`tabindex`),
          t = R(),
          n = G(q(v)),
          r = t.indexOf(n);
        (r !== -1 && (I.current = r),
          T.current.includes(`floating`) || (n !== _ && t.length === 0)
            ? e !== `0` && L.setAttribute(`tabindex`, `0`)
            : e !== `-1` && L.setAttribute(`tabindex`, `-1`));
      };
      e();
      let t = new MutationObserver(e);
      return (
        t.observe(L, { childList: !0, subtree: !0, attributes: !0 }),
        () => {
          t.disconnect();
        }
      );
    }, [r, v, L, _, T, R, b]));
  function re(e) {
    return r || !u || !l
      ? null
      : (0, F.jsx)(Kr, {
          ref: e === `start` ? A : j,
          onClick: (e) => m(!1, e.nativeEvent),
          children: typeof u == `string` ? u : `Dismiss`,
        });
  }
  let ie = !r && C && (!l || !x) && (ee || l);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      ie &&
        (0, F.jsx)(Fr, {
          "data-type": `inside`,
          ref: V,
          onFocus: (e) => {
            if (l) {
              let e = z();
              gr(i[0] === `reference` ? e[0] : e[e.length - 1]);
            } else if (k != null && k.preserveTabOrder && k.portalNode) {
              if (((M.current = !1), Nr(e, k.portalNode))) (jr() || _)?.focus();
              else {
                var t;
                (t = k.beforeOutsideRef.current) == null || t.focus();
              }
            }
          },
        }),
      !x && re(`start`),
      n,
      re(`end`),
      ie &&
        (0, F.jsx)(Fr, {
          "data-type": `inside`,
          ref: ne,
          onFocus: (e) => {
            if (l) gr(z()[0]);
            else if (k != null && k.preserveTabOrder && k.portalNode) {
              if ((d && (M.current = !0), Nr(e, k.portalNode)))
                (Mr() || _)?.focus();
              else {
                var t;
                (t = k.afterOutsideRef.current) == null || t.focus();
              }
            }
          },
        }),
    ],
  });
}
function Jr(e) {
  return H(e.target) && e.target.tagName === `BUTTON`;
}
function Yr(e) {
  return je(e);
}
function Xr(e, t) {
  t === void 0 && (t = {});
  let {
      open: n,
      onOpenChange: r,
      dataRef: i,
      elements: { domReference: a },
    } = e,
    {
      enabled: o = !0,
      event: s = `click`,
      toggle: c = !0,
      ignoreMouse: l = !1,
      keyboardHandlers: u = !0,
      stickIfOpen: d = !0,
    } = t,
    f = N.useRef(),
    p = N.useRef(!1),
    m = N.useMemo(
      () => ({
        onPointerDown(e) {
          f.current = e.pointerType;
        },
        onMouseDown(e) {
          let t = f.current;
          e.button === 0 &&
            s !== `click` &&
            ((Ee(t, !0) && l) ||
              (n &&
              c &&
              (!(i.current.openEvent && d) ||
                i.current.openEvent.type === `mousedown`)
                ? r(!1, e.nativeEvent, `click`)
                : (e.preventDefault(), r(!0, e.nativeEvent, `click`))));
        },
        onClick(e) {
          let t = f.current;
          s === `mousedown` && f.current
            ? (f.current = void 0)
            : (Ee(t, !0) && l) ||
              (n &&
              c &&
              (!(i.current.openEvent && d) ||
                i.current.openEvent.type === `click`)
                ? r(!1, e.nativeEvent, `click`)
                : r(!0, e.nativeEvent, `click`));
        },
        onKeyDown(e) {
          ((f.current = void 0),
            !(e.defaultPrevented || !u || Jr(e)) &&
              (e.key === ` ` &&
                !Yr(a) &&
                (e.preventDefault(), (p.current = !0)),
              e.key === `Enter` && r(!(n && c), e.nativeEvent, `click`)));
        },
        onKeyUp(e) {
          e.defaultPrevented ||
            !u ||
            Jr(e) ||
            Yr(a) ||
            (e.key === ` ` &&
              p.current &&
              ((p.current = !1), r(!(n && c), e.nativeEvent, `click`)));
        },
      }),
      [i, a, s, l, u, r, n, d, c],
    );
  return N.useMemo(() => (o ? { reference: m } : {}), [o, m]);
}
var Zr = {
    pointerdown: `onPointerDown`,
    mousedown: `onMouseDown`,
    click: `onClick`,
  },
  Qr = {
    pointerdown: `onPointerDownCapture`,
    mousedown: `onMouseDownCapture`,
    click: `onClickCapture`,
  },
  $r = (e) => ({
    escapeKey: typeof e == `boolean` ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == `boolean` ? e : (e?.outsidePress ?? !0),
  });
function ei(e, t) {
  t === void 0 && (t = {});
  let { open: n, onOpenChange: r, elements: i, dataRef: a } = e,
    {
      enabled: o = !0,
      escapeKey: s = !0,
      outsidePress: c = !0,
      outsidePressEvent: l = `pointerdown`,
      referencePress: u = !1,
      referencePressEvent: d = `pointerdown`,
      ancestorScroll: f = !1,
      bubbles: p,
      capture: m,
    } = t,
    h = fr(),
    g = X(typeof c == `function` ? c : () => !1),
    _ = typeof c == `function` ? g : c,
    v = N.useRef(!1),
    y = N.useRef(!1),
    { escapeKey: b, outsidePress: x } = $r(p),
    { escapeKey: S, outsidePress: C } = $r(m),
    w = N.useRef(!1),
    T = X((e) => {
      if (!n || !o || !s || e.key !== `Escape` || w.current) return;
      let t = a.current.floatingContext?.nodeId,
        i = h ? vr(h.nodesRef.current, t) : [];
      if (!b && (e.stopPropagation(), i.length > 0)) {
        let e = !0;
        if (
          (i.forEach((t) => {
            var n;
            (n = t.context) != null &&
              n.open &&
              !t.context.dataRef.current.__escapeKeyBubbles &&
              (e = !1);
          }),
          !e)
        )
          return;
      }
      r(!1, De(e) ? e.nativeEvent : e, `escape-key`);
    }),
    E = X((e) => {
      var t;
      let n = () => {
        var t;
        (T(e), (t = Ae(e)) == null || t.removeEventListener(`keydown`, n));
      };
      (t = Ae(e)) == null || t.addEventListener(`keydown`, n);
    }),
    D = X((e) => {
      let t = v.current;
      v.current = !1;
      let n = y.current;
      if (
        ((y.current = !1),
        (l === `click` && n) || t || (typeof _ == `function` && !_(e)))
      )
        return;
      let o = Ae(e),
        s = `[` + pr(`inert`) + `]`,
        c = q(i.floating).querySelectorAll(s),
        u = V(o) ? o : null;
      for (; u && !fe(u);) {
        let e = me(u);
        if (fe(e) || !V(e)) break;
        u = e;
      }
      if (
        c.length &&
        V(o) &&
        !Oe(o) &&
        !K(o, i.floating) &&
        Array.from(c).every((e) => !K(u, e))
      )
        return;
      if (H(o) && A) {
        let t = fe(o),
          n = W(o),
          r = /auto|scroll/,
          i = t || r.test(n.overflowX),
          a = t || r.test(n.overflowY),
          s = i && o.clientWidth > 0 && o.scrollWidth > o.clientWidth,
          c = a && o.clientHeight > 0 && o.scrollHeight > o.clientHeight,
          l = n.direction === `rtl`,
          u =
            c &&
            (l
              ? e.offsetX <= o.offsetWidth - o.clientWidth
              : e.offsetX > o.clientWidth),
          d = s && e.offsetY > o.clientHeight;
        if (u || d) return;
      }
      let d = a.current.floatingContext?.nodeId,
        f =
          h &&
          vr(h.nodesRef.current, d).some((t) =>
            ke(e, t.context?.elements.floating),
          );
      if (ke(e, i.floating) || ke(e, i.domReference) || f) return;
      let p = h ? vr(h.nodesRef.current, d) : [];
      if (p.length > 0) {
        let e = !0;
        if (
          (p.forEach((t) => {
            var n;
            (n = t.context) != null &&
              n.open &&
              !t.context.dataRef.current.__outsidePressBubbles &&
              (e = !1);
          }),
          !e)
        )
          return;
      }
      r(!1, e, `outside-press`);
    }),
    O = X((e) => {
      var t;
      let n = () => {
        var t;
        (D(e), (t = Ae(e)) == null || t.removeEventListener(l, n));
      };
      (t = Ae(e)) == null || t.addEventListener(l, n);
    });
  (N.useEffect(() => {
    if (!n || !o) return;
    ((a.current.__escapeKeyBubbles = b), (a.current.__outsidePressBubbles = x));
    let e = -1;
    function t(e) {
      r(!1, e, `ancestor-scroll`);
    }
    function c() {
      (window.clearTimeout(e), (w.current = !0));
    }
    function u() {
      e = window.setTimeout(
        () => {
          w.current = !1;
        },
        de() ? 5 : 0,
      );
    }
    let d = q(i.floating);
    (s &&
      (d.addEventListener(`keydown`, S ? E : T, S),
      d.addEventListener(`compositionstart`, c),
      d.addEventListener(`compositionend`, u)),
      _ && d.addEventListener(l, C ? O : D, C));
    let p = [];
    return (
      f &&
        (V(i.domReference) && (p = ge(i.domReference)),
        V(i.floating) && (p = p.concat(ge(i.floating))),
        !V(i.reference) &&
          i.reference &&
          i.reference.contextElement &&
          (p = p.concat(ge(i.reference.contextElement)))),
      (p = p.filter((e) => e !== d.defaultView?.visualViewport)),
      p.forEach((e) => {
        e.addEventListener(`scroll`, t, { passive: !0 });
      }),
      () => {
        (s &&
          (d.removeEventListener(`keydown`, S ? E : T, S),
          d.removeEventListener(`compositionstart`, c),
          d.removeEventListener(`compositionend`, u)),
          _ && d.removeEventListener(l, C ? O : D, C),
          p.forEach((e) => {
            e.removeEventListener(`scroll`, t);
          }),
          window.clearTimeout(e));
      }
    );
  }, [a, i, s, _, l, n, r, f, o, b, x, T, S, E, D, C, O]),
    N.useEffect(() => {
      v.current = !1;
    }, [_, l]));
  let k = N.useMemo(
      () => ({
        onKeyDown: T,
        ...(u && {
          [Zr[d]]: (e) => {
            r(!1, e.nativeEvent, `reference-press`);
          },
          ...(d !== `click` && {
            onClick(e) {
              r(!1, e.nativeEvent, `reference-press`);
            },
          }),
        }),
      }),
      [T, r, u, d],
    ),
    A = N.useMemo(
      () => ({
        onKeyDown: T,
        onMouseDown() {
          y.current = !0;
        },
        onMouseUp() {
          y.current = !0;
        },
        [Qr[l]]: () => {
          v.current = !0;
        },
      }),
      [T, l],
    );
  return N.useMemo(() => (o ? { reference: k, floating: A } : {}), [o, k, A]);
}
function ti(e) {
  let { open: t = !1, onOpenChange: n, elements: r } = e,
    i = sr(),
    a = N.useRef({}),
    [o] = N.useState(() => cr()),
    s = dr() != null,
    [c, l] = N.useState(r.reference),
    u = X((e, t, r) => {
      ((a.current.openEvent = e ? t : void 0),
        o.emit(`openchange`, { open: e, event: t, reason: r, nested: s }),
        n?.(e, t, r));
    }),
    d = N.useMemo(() => ({ setPositionReference: l }), []),
    f = N.useMemo(
      () => ({
        reference: c || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [c, r.reference, r.floating],
    );
  return N.useMemo(
    () => ({
      dataRef: a,
      open: t,
      onOpenChange: u,
      elements: f,
      events: o,
      floatingId: i,
      refs: d,
    }),
    [t, u, f, o, i, d],
  );
}
function ni(e) {
  e === void 0 && (e = {});
  let { nodeId: t } = e,
    n = ti({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    i = r.elements,
    [a, o] = N.useState(null),
    [s, c] = N.useState(null),
    l = i?.domReference || a,
    u = N.useRef(null),
    d = fr();
  Q(() => {
    l && (u.current = l);
  }, [l]);
  let f = An({ ...e, elements: { ...i, ...(s && { reference: s }) } }),
    p = N.useCallback(
      (e) => {
        let t = V(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              contextElement: e,
            }
          : e;
        (c(t), f.refs.setReference(t));
      },
      [f.refs],
    ),
    m = N.useCallback(
      (e) => {
        ((V(e) || e === null) && ((u.current = e), o(e)),
          (V(f.refs.reference.current) ||
            f.refs.reference.current === null ||
            (e !== null && !V(e))) &&
            f.refs.setReference(e));
      },
      [f.refs],
    ),
    h = N.useMemo(
      () => ({
        ...f.refs,
        setReference: m,
        setPositionReference: p,
        domReference: u,
      }),
      [f.refs, m, p],
    ),
    g = N.useMemo(() => ({ ...f.elements, domReference: l }), [f.elements, l]),
    _ = N.useMemo(
      () => ({ ...f, ...r, refs: h, elements: g, nodeId: t }),
      [f, h, g, t, r],
    );
  return (
    Q(() => {
      r.dataRef.current.floatingContext = _;
      let e = d?.nodesRef.current.find((e) => e.id === t);
      e && (e.context = _);
    }),
    N.useMemo(() => ({ ...f, context: _, refs: h, elements: g }), [f, h, g, _])
  );
}
function ri(e, t) {
  t === void 0 && (t = {});
  let { open: n, onOpenChange: r, events: i, dataRef: a, elements: o } = e,
    { enabled: s = !0, visibleOnly: c = !0 } = t,
    l = N.useRef(!1),
    u = N.useRef(-1),
    d = N.useRef(!0);
  (N.useEffect(() => {
    if (!s) return;
    let e = z(o.domReference);
    function t() {
      !n &&
        H(o.domReference) &&
        o.domReference === G(q(o.domReference)) &&
        (l.current = !0);
    }
    function r() {
      d.current = !0;
    }
    return (
      e.addEventListener(`blur`, t),
      e.addEventListener(`keydown`, r, !0),
      () => {
        (e.removeEventListener(`blur`, t),
          e.removeEventListener(`keydown`, r, !0));
      }
    );
  }, [o.domReference, n, s]),
    N.useEffect(() => {
      if (!s) return;
      function e(e) {
        let { reason: t } = e;
        (t === `reference-press` || t === `escape-key`) && (l.current = !0);
      }
      return (
        i.on(`openchange`, e),
        () => {
          i.off(`openchange`, e);
        }
      );
    }, [i, s]),
    N.useEffect(
      () => () => {
        mr(u);
      },
      [],
    ));
  let f = N.useMemo(
    () => ({
      onPointerDown(e) {
        xe(e.nativeEvent) || (d.current = !1);
      },
      onMouseLeave() {
        l.current = !1;
      },
      onFocus(e) {
        if (l.current) return;
        let t = Ae(e.nativeEvent);
        if (c && V(t))
          try {
            if (Se() && we()) throw Error();
            if (!t.matches(`:focus-visible`)) return;
          } catch {
            if (!d.current && !je(t)) return;
          }
        r(!0, e.nativeEvent, `focus`);
      },
      onBlur(e) {
        l.current = !1;
        let t = e.relatedTarget,
          n = e.nativeEvent,
          i =
            V(t) &&
            t.hasAttribute(pr(`focus-guard`)) &&
            t.getAttribute(`data-type`) === `outside`;
        u.current = window.setTimeout(() => {
          let e = G(o.domReference ? o.domReference.ownerDocument : document);
          (!t && e === o.domReference) ||
            K(a.current.floatingContext?.refs.floating.current, e) ||
            K(o.domReference, e) ||
            i ||
            r(!1, n, `focus`);
        });
      },
    }),
    [a, o.domReference, r, c],
  );
  return N.useMemo(() => (s ? { reference: f } : {}), [s, f]);
}
var ii = `active`,
  ai = `selected`;
function oi(e, t, n) {
  let r = new Map(),
    i = n === `item`,
    a = e;
  if (i && e) {
    let { [ii]: t, [ai]: n, ...r } = e;
    a = r;
  }
  return {
    ...(n === `floating` && { tabIndex: -1, [Rr]: `` }),
    ...a,
    ...t
      .map((t) => {
        let r = t ? t[n] : null;
        return typeof r == `function` ? (e ? r(e) : null) : r;
      })
      .concat(e)
      .reduce(
        (e, t) => (
          t &&
            Object.entries(t).forEach((t) => {
              let [n, a] = t;
              if (!(i && [ii, ai].includes(n))) {
                if (n.indexOf(`on`) === 0) {
                  if ((r.has(n) || r.set(n, []), typeof a == `function`)) {
                    var o;
                    ((o = r.get(n)) == null || o.push(a),
                      (e[n] = function () {
                        var e = [...arguments];
                        return r
                          .get(n)
                          ?.map((t) => t(...e))
                          .find((e) => e !== void 0);
                      }));
                  }
                } else e[n] = a;
              }
            }),
          e
        ),
        {},
      ),
  };
}
function si(e) {
  e === void 0 && (e = []);
  let t = e.map((e) => e?.reference),
    n = e.map((e) => e?.floating),
    r = e.map((e) => e?.item),
    i = N.useCallback((t) => oi(t, e, `reference`), t),
    a = N.useCallback((t) => oi(t, e, `floating`), n),
    o = N.useCallback((t) => oi(t, e, `item`), r);
  return N.useMemo(
    () => ({ getReferenceProps: i, getFloatingProps: a, getItemProps: o }),
    [i, a, o],
  );
}
var ci = `Escape`;
function li(e, t, n) {
  switch (e) {
    case `vertical`:
      return t;
    case `horizontal`:
      return n;
    default:
      return t || n;
  }
}
function ui(e, t) {
  return li(t, e === Rn || e === zn, e === Bn || e === Vn);
}
function di(e, t, n) {
  return (
    li(t, e === zn, n ? e === Bn : e === Vn) ||
    e === `Enter` ||
    e === ` ` ||
    e === ``
  );
}
function fi(e, t, n) {
  return li(t, n ? e === Bn : e === Vn, e === zn);
}
function pi(e, t, n, r) {
  return t === `both` || (t === `horizontal` && r && r > 1)
    ? e === ci
    : li(t, n ? e === Vn : e === Bn, e === Rn);
}
function mi(e, t) {
  let { open: n, onOpenChange: r, elements: i } = e,
    {
      listRef: a,
      activeIndex: o,
      onNavigate: s = () => {},
      enabled: c = !0,
      selectedIndex: l = null,
      allowEscape: u = !1,
      loop: d = !1,
      nested: f = !1,
      rtl: p = !1,
      virtual: m = !1,
      focusItemOnOpen: h = `auto`,
      focusItemOnHover: g = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: v = void 0,
      orientation: y = `vertical`,
      cols: b = 1,
      scrollItemIntoView: x = !0,
      virtualItemRef: S,
      itemSizes: C,
      dense: w = !1,
    } = t,
    T = $(zr(i.floating)),
    E = dr(),
    D = fr();
  Q(() => {
    e.dataRef.current.orientation = y;
  }, [e, y]);
  let O = X(() => {
      s(j.current === -1 ? null : j.current);
    }),
    k = Me(i.domReference),
    A = N.useRef(h),
    j = N.useRef(l ?? -1),
    M = N.useRef(null),
    P = N.useRef(!0),
    F = N.useRef(O),
    I = N.useRef(!!i.floating),
    ee = N.useRef(n),
    L = N.useRef(!1),
    R = N.useRef(!1),
    z = $(v),
    B = $(n),
    te = $(x),
    V = $(l),
    [ne, re] = N.useState(),
    [ie, ae] = N.useState(),
    oe = X(() => {
      function e(e) {
        m
          ? (re(e.id), D?.events.emit(`virtualfocus`, e), S && (S.current = e))
          : gr(e, { sync: L.current, preventScroll: !0 });
      }
      let t = a.current[j.current];
      (t && e(t),
        (L.current ? (e) => e() : requestAnimationFrame)(() => {
          let n = a.current[j.current] || t;
          if (!n) return;
          t || e(n);
          let r = te.current;
          r &&
            U &&
            (R.current || !P.current) &&
            (n.scrollIntoView == null ||
              n.scrollIntoView(
                typeof r == `boolean`
                  ? { block: `nearest`, inline: `nearest` }
                  : r,
              ));
        }));
    });
  (Q(() => {
    c &&
      (n && i.floating
        ? A.current && l != null && ((R.current = !0), (j.current = l), O())
        : I.current && ((j.current = -1), F.current()));
  }, [c, n, i.floating, l, O]),
    Q(() => {
      if (c && n && i.floating) {
        if (o == null) {
          if (((L.current = !1), V.current != null)) return;
          if (
            (I.current && ((j.current = -1), oe()),
            (!ee.current || !I.current) &&
              A.current &&
              (M.current != null || (A.current === !0 && M.current == null)))
          ) {
            let e = 0,
              t = () => {
                a.current[0] == null
                  ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t),
                    e++)
                  : ((j.current =
                      M.current == null || di(M.current, y, p) || f
                        ? Wn(a, z.current)
                        : Gn(a, z.current)),
                    (M.current = null),
                    O());
              };
            t();
          }
        } else Un(a, o) || ((j.current = o), oe(), (R.current = !1));
      }
    }, [c, n, i.floating, o, V, f, a, y, p, O, oe, z]),
    Q(() => {
      var e;
      if (!c || i.floating || !D || m || !I.current) return;
      let t = D.nodesRef.current,
        n =
          (e = t.find((e) => e.id === E)) == null || (e = e.context) == null
            ? void 0
            : e.elements.floating,
        r = G(q(i.floating)),
        a = t.some((e) => e.context && K(e.context.elements.floating, r));
      n && !a && P.current && n.focus({ preventScroll: !0 });
    }, [c, i.floating, D, E, m]),
    Q(() => {
      if (!c || !D || !m || E) return;
      function e(e) {
        (ae(e.id), S && (S.current = e));
      }
      return (
        D.events.on(`virtualfocus`, e),
        () => {
          D.events.off(`virtualfocus`, e);
        }
      );
    }, [c, D, m, E, S]),
    Q(() => {
      ((F.current = O), (ee.current = n), (I.current = !!i.floating));
    }),
    Q(() => {
      n || (M.current = null);
    }, [n]));
  let se = o != null,
    U = N.useMemo(() => {
      function e(e) {
        if (!n) return;
        let t = a.current.indexOf(e);
        t !== -1 && j.current !== t && ((j.current = t), O());
      }
      return {
        onFocus(t) {
          let { currentTarget: n } = t;
          ((L.current = !0), e(n));
        },
        onClick: (e) => {
          let { currentTarget: t } = e;
          return t.focus({ preventScroll: !0 });
        },
        ...(g && {
          onMouseMove(t) {
            let { currentTarget: n } = t;
            ((L.current = !0), (R.current = !1), e(n));
          },
          onPointerLeave(e) {
            let { pointerType: t } = e;
            if (
              P.current &&
              t !== `touch` &&
              ((L.current = !0), (j.current = -1), O(), !m)
            ) {
              var n;
              (n = T.current) == null || n.focus({ preventScroll: !0 });
            }
          },
        }),
      };
    }, [n, T, g, a, O, m]),
    ce = X((e) => {
      if (
        ((P.current = !1),
        (L.current = !0),
        e.which === 229 || (!B.current && e.currentTarget === T.current))
      )
        return;
      if (f && pi(e.key, y, p, b)) {
        (J(e),
          r(!1, e.nativeEvent, `list-navigation`),
          H(i.domReference) &&
            (m
              ? D?.events.emit(`virtualfocus`, i.domReference)
              : i.domReference.focus()));
        return;
      }
      let t = j.current,
        o = Wn(a, v),
        s = Gn(a, v);
      if (
        (k ||
          (e.key === `Home` && (J(e), (j.current = o), O()),
          e.key === `End` && (J(e), (j.current = s), O())),
        b > 1)
      ) {
        let t =
            C ||
            Array.from({ length: a.current.length }, () => ({
              width: 1,
              height: 1,
            })),
          n = qn(t, b, w),
          r = n.findIndex((e) => e != null && !Xn(a.current, e, v)),
          i = n.reduce(
            (e, t, n) => (t != null && !Xn(a.current, t, v) ? n : e),
            -1,
          ),
          c =
            n[
              Kn(
                { current: n.map((e) => (e == null ? null : a.current[e])) },
                {
                  event: e,
                  orientation: y,
                  loop: d,
                  rtl: p,
                  cols: b,
                  disabledIndices: Yn(
                    [
                      ...(v ||
                        a.current.map((e, t) =>
                          Xn(a.current, t) ? t : void 0,
                        )),
                      void 0,
                    ],
                    n,
                  ),
                  minIndex: r,
                  maxIndex: i,
                  prevIndex: Jn(
                    j.current > s ? o : j.current,
                    t,
                    n,
                    b,
                    e.key === zn ? `bl` : e.key === (p ? Bn : Vn) ? `tr` : `tl`,
                  ),
                  stopEvent: !0,
                },
              )
            ];
        if ((c != null && ((j.current = c), O()), y === `both`)) return;
      }
      if (ui(e.key, y)) {
        if (
          (J(e),
          n && !m && G(e.currentTarget.ownerDocument) === e.currentTarget)
        ) {
          ((j.current = di(e.key, y, p) ? o : s), O());
          return;
        }
        (di(e.key, y, p)
          ? d
            ? (j.current =
                t >= s
                  ? u && t !== a.current.length
                    ? -1
                    : o
                  : Z(a, { startingIndex: t, disabledIndices: v }))
            : (j.current = Math.min(
                s,
                Z(a, { startingIndex: t, disabledIndices: v }),
              ))
          : d
            ? (j.current =
                t <= o
                  ? u && t !== -1
                    ? a.current.length
                    : s
                  : Z(a, {
                      startingIndex: t,
                      decrement: !0,
                      disabledIndices: v,
                    }))
            : (j.current = Math.max(
                o,
                Z(a, { startingIndex: t, decrement: !0, disabledIndices: v }),
              )),
          Un(a, j.current) && (j.current = -1),
          O());
      }
    }),
    le = N.useMemo(
      () => m && n && se && { "aria-activedescendant": ie || ne },
      [m, n, se, ie, ne],
    ),
    ue = N.useMemo(
      () => ({
        "aria-orientation": y === `both` ? void 0 : y,
        ...(k ? {} : le),
        onKeyDown: ce,
        onPointerMove() {
          P.current = !0;
        },
      }),
      [le, ce, y, k],
    ),
    de = N.useMemo(() => {
      function e(e) {
        h === `auto` && be(e.nativeEvent) && (A.current = !0);
      }
      function t(e) {
        ((A.current = h),
          h === `auto` && xe(e.nativeEvent) && (A.current = !0));
      }
      return {
        ...le,
        onKeyDown(e) {
          var t;
          P.current = !1;
          let i = e.key.startsWith(`Arrow`),
            o = [`Home`, `End`].includes(e.key),
            s = i || o,
            c =
              D == null ||
              (t = D.nodesRef.current.find((e) => e.id === E)) == null ||
              (t = t.context) == null ||
              (t = t.dataRef) == null
                ? void 0
                : t.current.orientation,
            u = fi(e.key, y, p),
            d = pi(e.key, y, p, b),
            h = fi(e.key, c, p),
            g = ui(e.key, y),
            v = (f ? h : g) || e.key === `Enter` || e.key.trim() === ``;
          if (m && n) {
            let t = D?.nodesRef.current.find((e) => e.parentId == null),
              n = D && t ? yr(D.nodesRef.current, t.id) : null;
            if (s && n && S) {
              let t = new KeyboardEvent(`keydown`, { key: e.key, bubbles: !0 });
              if (u || d) {
                let r = n.context?.elements.domReference === e.currentTarget,
                  i =
                    d && !r
                      ? n.context?.elements.domReference
                      : u
                        ? a.current.find((e) => e?.id === ne)
                        : null;
                i && (J(e), i.dispatchEvent(t), ae(void 0));
              }
              if (
                (g || o) &&
                n.context &&
                n.context.open &&
                n.parentId &&
                e.currentTarget !== n.context.elements.domReference
              ) {
                var x;
                (J(e),
                  (x = n.context.elements.domReference) == null ||
                    x.dispatchEvent(t));
                return;
              }
            }
            return ce(e);
          }
          if (n || _ || !i) {
            if (v) {
              let t = ui(e.key, c);
              M.current = f && t ? null : e.key;
            }
            f
              ? h &&
                (J(e),
                n
                  ? ((j.current = Wn(a, z.current)), O())
                  : r(!0, e.nativeEvent, `list-navigation`))
              : g &&
                (l != null && (j.current = l),
                J(e),
                !n && _ ? r(!0, e.nativeEvent, `list-navigation`) : ce(e),
                n && O());
          }
        },
        onFocus() {
          n && !m && ((j.current = -1), O());
        },
        onPointerDown: t,
        onPointerEnter: t,
        onMouseDown: e,
        onClick: e,
      };
    }, [ne, le, b, ce, z, h, a, f, O, r, n, _, y, E, p, l, D, m, S]);
  return N.useMemo(
    () => (c ? { reference: de, floating: ue, item: U } : {}),
    [c, de, ue, U],
  );
}
var hi = new Map([
  [`select`, `listbox`],
  [`combobox`, `listbox`],
  [`label`, !1],
]);
function gi(e, t) {
  t === void 0 && (t = {});
  let { open: n, floatingId: r } = e,
    { enabled: i = !0, role: a = `dialog` } = t,
    o = hi.get(a) ?? a,
    s = sr(),
    c = dr() != null,
    l = N.useMemo(
      () =>
        o === `tooltip` || a === `label`
          ? {
              [`aria-` + (a === `label` ? `labelledby` : `describedby`)]: n
                ? r
                : void 0,
            }
          : {
              "aria-expanded": n ? `true` : `false`,
              "aria-haspopup": o === `alertdialog` ? `dialog` : o,
              "aria-controls": n ? r : void 0,
              ...(o === `listbox` && { role: `combobox` }),
              ...(o === `menu` && { id: s }),
              ...(o === `menu` && c && { role: `menuitem` }),
              ...(a === `select` && { "aria-autocomplete": `none` }),
              ...(a === `combobox` && { "aria-autocomplete": `list` }),
            },
      [o, r, c, n, s, a],
    ),
    u = N.useMemo(() => {
      let e = { id: r, ...(o && { role: o }) };
      return o === `tooltip` || a === `label`
        ? e
        : { ...e, ...(o === `menu` && { "aria-labelledby": s }) };
    }, [o, r, s, a]),
    d = N.useCallback(
      (e) => {
        let { active: t, selected: n } = e,
          i = { role: `option`, ...(t && { id: r + `-option` }) };
        switch (a) {
          case `select`:
            return { ...i, "aria-selected": t && n };
          case `combobox`:
            return { ...i, ...(t && { "aria-selected": !0 }) };
        }
        return {};
      },
      [r, a],
    );
  return N.useMemo(
    () => (i ? { reference: l, floating: u, item: d } : {}),
    [i, l, u, d],
  );
}
function _i(e, t) {
  let { open: n, dataRef: r } = e,
    {
      listRef: i,
      activeIndex: a,
      onMatch: o,
      onTypingChange: s,
      enabled: c = !0,
      findMatch: l = null,
      resetMs: u = 750,
      ignoreKeys: d = [],
      selectedIndex: f = null,
    } = t,
    p = N.useRef(-1),
    m = N.useRef(``),
    h = N.useRef(f ?? a ?? -1),
    g = N.useRef(null),
    _ = X(o),
    v = X(s),
    y = $(l),
    b = $(d);
  (Q(() => {
    n && (mr(p), (g.current = null), (m.current = ``));
  }, [n]),
    Q(() => {
      n && m.current === `` && (h.current = f ?? a ?? -1);
    }, [n, f, a]));
  let x = X((e) => {
      e
        ? r.current.typing || ((r.current.typing = e), v(e))
        : r.current.typing && ((r.current.typing = e), v(e));
    }),
    S = X((e) => {
      function t(e, t, n) {
        let r = y.current
          ? y.current(t, n)
          : t.find(
              (e) =>
                e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0,
            );
        return r ? e.indexOf(r) : -1;
      }
      let r = i.current;
      if (
        (m.current.length > 0 &&
          m.current[0] !== ` ` &&
          (t(r, r, m.current) === -1 ? x(!1) : e.key === ` ` && J(e)),
        r == null ||
          b.current.includes(e.key) ||
          e.key.length !== 1 ||
          e.ctrlKey ||
          e.metaKey ||
          e.altKey)
      )
        return;
      (n && e.key !== ` ` && (J(e), x(!0)),
        r.every(
          (e) => !e || e[0]?.toLocaleLowerCase() !== e[1]?.toLocaleLowerCase(),
        ) &&
          m.current === e.key &&
          ((m.current = ``), (h.current = g.current)),
        (m.current += e.key),
        mr(p),
        (p.current = window.setTimeout(() => {
          ((m.current = ``), (h.current = g.current), x(!1));
        }, u)));
      let a = h.current,
        o = t(
          r,
          [...r.slice((a || 0) + 1), ...r.slice(0, (a || 0) + 1)],
          m.current,
        );
      o === -1
        ? e.key !== ` ` && ((m.current = ``), x(!1))
        : (_(o), (g.current = o));
    }),
    C = N.useMemo(() => ({ onKeyDown: S }), [S]),
    w = N.useMemo(
      () => ({
        onKeyDown: S,
        onKeyUp(e) {
          e.key === ` ` && x(!1);
        },
      }),
      [S, x],
    );
  return N.useMemo(() => (c ? { reference: C, floating: w } : {}), [c, C, w]);
}
var vi = `a7R7ZlNGFnc-`,
  yi = (0, N.createContext)(`auto`);
function bi(e) {
  let { presentation: t, children: n } = e;
  return (0, F.jsx)(yi.Provider, { value: t, children: n });
}
function xi(e = `auto`) {
  let t = (0, N.useContext)(yi),
    r = n();
  if (e !== `auto`) return e;
  let i = t;
  return i === `auto` ? (r ? `modal` : `anchor`) : i;
}
var Si = `80vh`,
  Ci = `var( --popover-modal-width, clamp( 280px, 40vw, 480px ) )`;
function wi(e, t) {
  let { width: n, maxHeight: r, gutter: i = 0, scroll: a } = e,
    o = typeof i == `number` ? `${i}px` : `var(--spacing-${i})`,
    s;
  return (
    (s =
      typeof r == `function`
        ? r({ unAvailableHeight: t, gutter: o })
        : typeof r == `number`
          ? `min( ${r}px, ${Si} )`
          : `min( calc( 100vh - 2 * ${o} ), ${Si} )`),
    {
      boxSizing: `border-box`,
      width: n === `content` ? void 0 : Ci,
      maxWidth: `90vw`,
      maxHeight: s,
      minHeight: 0,
      flexShrink: 1,
      overflowY: a ? `auto` : void 0,
      "--popover-max-height": s,
    }
  );
}
function Ti(e) {
  e && e.showPopover && e.showPopover();
}
function Ei(e) {
  let {
      ref: t,
      presentation: n,
      sizing: r,
      floatingRef: i,
      floatingProps: a,
      floatingStyles: o,
      referenceElement: s,
      className: c,
      label: l,
      children: u,
    } = e,
    d = (0, N.useId)(),
    f = Fn([t, n === `anchor` ? i : void 0, Ti]),
    p = c ? { className: c } : {};
  if (n === `anchor`)
    return (0, N.cloneElement)(u, {
      ref: f,
      style: o,
      popover: `manual`,
      ...a,
      ...p,
    });
  let m = s?.ownerDocument?.defaultView?.innerHeight ?? window.innerHeight;
  return (0, F.jsxs)(`div`, {
    popover: `manual`,
    ref: f,
    className: (0, M.default)(E(), vi),
    children: [
      l && (0, F.jsx)(`div`, { id: d, className: `GrnU99p0SN0-`, children: l }),
      (0, N.cloneElement)(u, {
        ref: i,
        style: wi(r, m),
        ...p,
        ...(l && !u.props[`aria-labelledby`] ? { "aria-labelledby": d } : {}),
        ...a,
      }),
    ],
  });
}
var Di = (0, N.createContext)({}),
  Oi = (0, N.createContext)(() => {});
function ki(e) {
  let [t, n] = (0, N.useState)({});
  return (0, F.jsx)(Di.Provider, {
    value: t,
    children: (0, F.jsx)(Oi.Provider, { value: n, children: e.children }),
  });
}
function Ai() {
  return (0, N.useContext)(Di);
}
var ji = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
  Mi = [`title`, `subtitle`, `body`, `description`, `note`];
function Ni(e) {
  let {
      accentColor: t,
      dullColor: n,
      bodyTextColor: r,
      successColor: i,
      warningColor: a,
      errorColor: o,
      successTextColor: s,
      warningTextColor: c,
      errorTextColor: l,
      children: u,
      breakpoints: d,
      variants: f,
      popoverPresentation: p,
      spacing: m,
      radius: h,
      textSizes: g,
      defaultTextSize: _,
      controlHeights: v,
      controlRadius: y,
      controlSize: b,
    } = e,
    x = { display: `contents` },
    S = (0, N.use)(Pi),
    C = Fi(
      x,
      {
        spacing: m,
        radius: h,
        textSizes: g,
        defaultTextSize: _,
        controlHeights: v,
        controlRadius: y,
      },
      S,
    ),
    { defaultTextSize: w, controlRadius: T } = C,
    E = (0, N.useMemo)(
      () => ({ defaultTextSize: w, controlRadius: T }),
      [w, T],
    ),
    O;
  typeof t == `string` ? (O = t) : t && Ii(x, `accent`, t);
  let A;
  typeof n == `string` ? (A = n) : n && Ii(x, `dull`, n);
  let M;
  (typeof r == `string` ? (M = r) : r && Li(x, `body`, r),
    i && Ii(x, `success`, i),
    a && Ii(x, `warning`, a),
    o && Ii(x, `error`, o),
    s && Li(x, `success`, s),
    c && Li(x, `warning`, c),
    l && Li(x, `error`, l));
  let P = (0, F.jsx)(k, {
    variants: f,
    children: (0, F.jsx)(`div`, {
      "data-accent-color": O,
      "data-dull-color": A,
      "data-body-text-color": M,
      style: x,
      children: (0, F.jsx)(`div`, {
        style: { display: `contents`, color: `var(--color-text-body-body)` },
        children: u,
      }),
    }),
  });
  return (
    C !== S && (P = (0, F.jsx)(Pi, { value: E, children: P })),
    b && (P = (0, F.jsx)(j, { size: b, children: P })),
    p && (P = (0, F.jsx)(bi, { presentation: p, children: P })),
    d ? (0, F.jsx)(D, { breakpoints: d, children: P }) : P
  );
}
var Pi = (0, N.createContext)({ defaultTextSize: `3`, controlRadius: `sm` });
function Fi(e, t, n) {
  let { spacing: r, radius: i, textSizes: a, controlHeights: o } = t,
    s = t.defaultTextSize ?? n.defaultTextSize,
    c = t.controlRadius ?? n.controlRadius;
  for (let [t, n] of Object.entries(r ?? {})) n && (e[`--spacing-${t}`] = n);
  for (let [t, n] of Object.entries(i ?? {})) n && (e[`--radius-${t}`] = n);
  for (let [t, n] of Object.entries(o ?? {}))
    n && (e[`--control-height-${t}`] = n);
  for (let [t, n] of Object.entries(a ?? {}))
    n &&
      (n.size &&
        ((e[`--text-size-${t}`] = n.size),
        (e[`--heading-size-${t}`] = `var(--text-size-${t})`)),
      n.lineHeight &&
        ((e[`--line-height-${t}`] = n.lineHeight),
        (e[`--heading-line-height-${t}`] = `var(--line-height-${t})`)),
      n.letterSpacing && (e[`--letter-spacing-${t}`] = n.letterSpacing));
  (t.defaultTextSize || a?.[s]) &&
    ((e[`--default-font-size`] = `var(--text-size-${s})`),
    (e[`--default-line-height`] = `var(--line-height-${s})`),
    (e[`--default-letter-spacing`] = `var(--letter-spacing-${s})`));
  let l = A(c);
  return (
    (t.controlRadius || (l && i?.[c])) &&
      (e[`--control-radius`] = l ? `var(--radius-${c})` : c),
    s === n.defaultTextSize && c === n.controlRadius
      ? n
      : { defaultTextSize: s, controlRadius: c }
  );
}
function Ii(e, t, n) {
  if (typeof n == `string`)
    for (let r of ji) e[`--color-${t}-${r}`] = `var(--color-${n}-${r})`;
  else for (let [r, i] of Object.entries(n)) e[`--color-${t}-${r}`] = i;
}
function Li(e, t, n) {
  if (typeof n == `string`)
    for (let r of Mi) e[`--color-text-${t}-${r}`] = `var(--color-${n}-${r})`;
  else for (let [r, i] of Object.entries(n)) e[`--color-text-${t}-${r}`] = i;
}
var Ri = N.memo(function (e) {
  let {
      accentColor: t = `blue`,
      dullColor: n = `greyneutral`,
      successColor: r = `green`,
      warningColor: i = `yellow`,
      errorColor: a = `red`,
      bodyTextColor: o = `text-light`,
      successTextColor: s = `text-green`,
      warningTextColor: c = `text-yellow`,
      errorTextColor: l = `text-red`,
      breakpoints: u,
      variants: d,
      popoverPresentation: f,
      children: p,
      zoo: m,
      ...h
    } = e,
    g = N.useRef(null);
  return (
    zi(g, t, n, o),
    (0, F.jsx)(ki, {
      children: (0, F.jsx)(D, {
        breakpoints: u,
        children: (0, F.jsx)(Bi, {
          children: (0, F.jsx)(`div`, {
            ref: g,
            className: (0, M.default)(ee, `noOpinionatedGlobalStyles`),
            children: (0, F.jsxs)(Ni, {
              ...h,
              accentColor: t,
              dullColor: n,
              successColor: r,
              warningColor: i,
              errorColor: a,
              bodyTextColor: o,
              successTextColor: s,
              warningTextColor: c,
              errorTextColor: l,
              variants: d,
              popoverPresentation: f,
              children: [p, !1],
            }),
          }),
        }),
      }),
    })
  );
});
function zi(e, t, n, r) {
  N.useLayoutEffect(() => {
    let i = e.current?.ownerDocument.documentElement;
    if (!i) return;
    let a = [],
      o = (e, t) => {
        typeof t == `string` &&
          (a.push([e, i.getAttribute(e)]), i.setAttribute(e, t));
      };
    return (
      o(`data-accent-color`, t),
      o(`data-dull-color`, n),
      o(`data-body-text-color`, r),
      () => {
        for (let [e, t] of a)
          t === null ? i.removeAttribute(e) : i.setAttribute(e, t);
      }
    );
  }, [e, t, n, r]);
}
function Bi(e) {
  let { children: t } = e,
    { formFactorOverride: n } = Ai();
  return (0, F.jsx)(O, { formFactor: n, children: t });
}
function Vi(e) {
  let { popup: t, className: n, ...r } = e,
    a = h(t),
    o = N.useRef(null);
  return (
    N.useEffect(() => {
      let e = o.current;
      if (e && i(t, `Window.SetResizeGrip`)) {
        let n = 0,
          r = 0,
          i = e.getBoundingClientRect(),
          o = e.ownerDocument.defaultView;
        (i &&
          o &&
          !a &&
          ((n = Math.ceil(o.innerWidth - i.left)),
          (r = Math.ceil(o.innerHeight - i.top))),
          t.SteamClient.Window.SetResizeGrip(n, r));
      }
      return () => {
        i(t, `Window.SetResizeGrip`) &&
          t.SteamClient.Window.SetResizeGrip(0, 0);
      };
    }, [t, a]),
    a
      ? null
      : (0, F.jsx)(`div`, {
          className: l(`window_resize_grip`, n),
          ref: o,
          ...r,
        })
  );
}
var Hi = (e) => Ui({ modal: !0, ...e });
function Ui(e) {
  let t = s().ownerWindow,
    r = n(),
    [i, a] = N.useState(() =>
      r ||
      (e.onlyPopoutIfNeeded === !0 &&
        e.popupHeight < t.innerHeight * 0.9 &&
        e.popupWidth < t.innerWidth * 0.9 &&
        t.document.visibilityState == `visible`)
        ? `inline`
        : `popout`,
    );
  return i === `inline`
    ? (0, F.jsx)(I, { active: !0, children: e.children })
    : i === `popout`
      ? (0, F.jsx)(Gi, { ...e })
      : null;
}
function Wi(e) {
  let { popup: t, children: n, bFitToContent: r, className: i, ...a } = e,
    o = N.useCallback(
      (e) => {
        let n = Math.ceil(e.borderBoxSize[0].inlineSize),
          r = Math.ceil(e.borderBoxSize[0].blockSize);
        t?.SteamClient.Window.ResizeTo(n, r, !0);
      },
      [t],
    ),
    s = w(o);
  return (0, F.jsx)(`div`, {
    className: l(`PopupFullWindow`, r && `FitToContent`, i),
    ref: r ? s : void 0,
    ...a,
    children: n,
  });
}
function Gi(e) {
  let {
      strName: t,
      strTitle: n,
      popupWidth: r,
      popupHeight: i,
      browserType: l,
      onDismiss: u,
      bFitToContent: d,
      refPopup: p,
      children: h,
      titleBarClassName: v,
      saveDimensionsKey: x,
    } = e,
    S = s()?.ownerWindow,
    C = _(),
    w = { ...f(x), onClose: u },
    E = 0;
  (e.resizable && (E |= g.Resizable),
    (e.minWidth || e.minHeight) && (E |= g.ApplyBrowserScaleToDimensions),
    e.fullscreen && (E |= g.FullScreen));
  let D = `PopupWindow_` + (t ? `${t}_` : ``) + N.useId(),
    { popup: O, element: k } = b(
      D,
      {
        title: n,
        dimensions: { width: r, height: i },
        html_class: `client_chat_frame fullheight ModalDialogPopup`,
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight`,
        browserType: l,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        replace_existing_popup: !0,
        center_on_window: C?.BCenterPopupsOnWindow() ? S : void 0,
        eCreationFlags: E,
        target_browser: C?.GetBrowserInfo(),
      },
      w,
    );
  if (
    (N.useEffect(() => (a(p, O), () => a(p, void 0)), [p, O]),
    N.useEffect(() => {
      O && (O.document.title = n ?? t);
    }, [O, n, t]),
    !k)
  )
    return null;
  let A = e.modal ?? e.onlyPopoutIfNeeded,
    j = !e.resizable;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      A && (0, F.jsx)(Ki, { popup: O }),
      T(
        (0, F.jsx)(o, {
          ownerWindow: O,
          children: (0, F.jsxs)(Ri, {
            children: [
              (0, F.jsxs)(Wi, {
                popup: O,
                bFitToContent: d,
                onContextMenu: c,
                children: [
                  (0, F.jsx)(m, {
                    className: v,
                    hideMin: j,
                    hideMax: j,
                    popup: O,
                    hideActions: !u,
                  }),
                  (0, F.jsx)(y, {
                    bCenterPopupsOnWindow: C?.BCenterPopupsOnWindow(),
                    browserInfo: C?.GetBrowserInfo(),
                    children: (0, F.jsx)(N.Suspense, {
                      fallback: null,
                      children: h,
                    }),
                  }),
                ],
              }),
              e.resizable && !d && (0, F.jsx)(Vi, { popup: O }),
            ],
          }),
        }),
        k,
      ),
    ],
  });
}
function Ki(e) {
  let { popup: t } = e,
    n = N.useCallback(() => {
      t?.SteamClient.Window.BringToFront();
    }, [t]);
  return (
    N.useEffect(n, [n]),
    (0, F.jsx)(I, {
      active: !0,
      children: (0, F.jsx)(`div`, {
        style: { position: `fixed`, left: 0, top: 0, right: 0, bottom: 0 },
        onClick: n,
      }),
    })
  );
}
function qi(e) {
  let { labelledBy: t } = e || {},
    [n, r] = N.useState(void 0),
    i = N.useMemo(() => ({ setHeaderId: r }), []);
  return { headerId: t || n, context: i };
}
function Ji(e) {
  let {
      active: t,
      onDismiss: n,
      className: r,
      modalClassName: i,
      bGamepadUIScrollWithin: a,
      children: o,
      ...s
    } = e,
    { headerId: c, context: l } = qi({ labelledBy: e[`aria-labelledby`] });
  return (0, F.jsx)(p.Provider, {
    value: l,
    children: (0, F.jsx)(I, {
      active: t,
      children: (0, F.jsx)(x, {
        onEscKeypress: n,
        className: i,
        bGamepadUIScrollWithin: a,
        children: (0, F.jsx)(v, {
          role: `dialog`,
          "aria-labelledby": c,
          className: r,
          ...s,
          children: o,
        }),
      }),
    }),
  });
}
function Yi(e) {
  let {
      onDismiss: t,
      className: n,
      modalClassName: r,
      bGamepadUIScrollWithin: i,
      children: a,
      ...o
    } = e,
    { headerId: s, context: c } = qi();
  return (0, F.jsx)(p.Provider, {
    value: c,
    children: (0, F.jsx)(Ui, {
      ...o,
      onDismiss: t,
      children: (0, F.jsx)(x, {
        onEscKeypress: t,
        className: r,
        bGamepadUIScrollWithin: i,
        children: (0, F.jsx)(v, {
          role: `dialog`,
          "aria-labelledby": s,
          "aria-label": o.strTitle,
          className: n,
          children: a,
        }),
      }),
    }),
  });
}
var Xi = (e) => Yi({ modal: !0, ...e });
export {
  Nn as C,
  yn as D,
  Pn as E,
  gn as O,
  _i as S,
  Mn as T,
  si as _,
  Hi as a,
  Fn as b,
  Ri as c,
  qr as d,
  $n as f,
  ri as g,
  ni as h,
  Wi as i,
  I as k,
  Ei as l,
  ei as m,
  Yi as n,
  Ui as o,
  Xr as p,
  Xi as r,
  Vi as s,
  Ji as t,
  xi as u,
  er as v,
  jn as w,
  gi as x,
  mi as y,
};
