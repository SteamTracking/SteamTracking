/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  sn as t,
  t as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import { Pt as a } from "./chunk~25a6634263.js";
import { a as o } from "./chunk~a292304e38.js";
var s = t(e(), 1);
function c() {
  return typeof window < `u`;
}
function l(e) {
  return f(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function u(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function d(e) {
  return ((f(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function f(e) {
  return c() ? e instanceof Node || e instanceof u(e).Node : !1;
}
function p(e) {
  return c() ? e instanceof Element || e instanceof u(e).Element : !1;
}
function m(e) {
  return c() ? e instanceof HTMLElement || e instanceof u(e).HTMLElement : !1;
}
function h(e) {
  return !c() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof u(e).ShadowRoot;
}
function g(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = D(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function _(e) {
  return /^(table|td|th)$/.test(l(e));
}
function v(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var y = /transform|translate|scale|rotate|perspective|filter/,
  b = /paint|layout|strict|content/,
  x = (e) => !!e && e !== `none`,
  S;
function C(e) {
  let t = p(e) ? D(e) : e;
  return (
    x(t.transform) ||
    x(t.translate) ||
    x(t.scale) ||
    x(t.rotate) ||
    x(t.perspective) ||
    (!T() && (x(t.backdropFilter) || x(t.filter))) ||
    y.test(t.willChange || ``) ||
    b.test(t.contain || ``)
  );
}
function w(e) {
  let t = k(e);
  for (; m(t) && !E(t);) {
    if (C(t)) return t;
    if (v(t)) return null;
    t = k(t);
  }
  return null;
}
function T() {
  return (
    (S ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    S
  );
}
function E(e) {
  return /^(html|body|#document)$/.test(l(e));
}
function D(e) {
  return u(e).getComputedStyle(e);
}
function O(e) {
  return p(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function k(e) {
  if (l(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (h(e) && e.host) || d(e);
  return h(t) ? t.host : t;
}
function A(e) {
  let t = k(e);
  return E(t) ? (e.ownerDocument || e).body : m(t) && g(t) ? t : A(t);
}
function j(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = A(e),
    i = r === e.ownerDocument?.body,
    a = u(r);
  if (i) {
    let e = M(a);
    return t.concat(
      a,
      a.visualViewport || [],
      g(r) ? r : [],
      e && n ? j(e) : [],
    );
  }
  return t.concat(r, j(r, [], n));
}
function M(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function N(e) {
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
function P(e, t) {
  if (!e || !t) return !1;
  let n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && h(n)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function F() {
  let e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function I() {
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
function ee(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : ne() && e.pointerType
      ? e.type === `click` && e.buttons === 1
      : e.detail === 0 && !e.pointerType;
}
function te(e) {
  return z()
    ? !1
    : (!ne() && e.width === 0 && e.height === 0) ||
        (ne() &&
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
function L() {
  return /apple/i.test(navigator.vendor);
}
function ne() {
  let e = /android/i;
  return e.test(F()) || e.test(I());
}
function R() {
  return F().toLowerCase().startsWith(`mac`) && !navigator.maxTouchPoints;
}
function z() {
  return I().includes(`jsdom/`);
}
function B(e, t) {
  let n = [`mouse`, `pen`];
  return (t || n.push(``, void 0), n.includes(e));
}
function V(e) {
  return `nativeEvent` in e;
}
function re(e) {
  return e.matches(`html,body`);
}
function H(e) {
  return e?.ownerDocument || document;
}
function ie(e, t) {
  if (t == null) return !1;
  if (`composedPath` in e) return e.composedPath().includes(t);
  let n = e;
  return n.target != null && t.contains(n.target);
}
function ae(e) {
  return `composedPath` in e ? e.composedPath()[0] : e.target;
}
function oe(e) {
  return (
    m(e) &&
    e.matches(
      `input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,
    )
  );
}
function U(e) {
  (e.preventDefault(), e.stopPropagation());
}
function se(e) {
  return e ? e.getAttribute(`role`) === `combobox` && oe(e) : !1;
}
var W = Math.min,
  G = Math.max,
  ce = Math.round,
  le = Math.floor,
  K = (e) => ({ x: e, y: e }),
  ue = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function de(e, t, n) {
  return G(e, W(t, n));
}
function q(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function J(e) {
  return e.split(`-`)[0];
}
function fe(e) {
  return e.split(`-`)[1];
}
function pe(e) {
  return e === `x` ? `y` : `x`;
}
function me(e) {
  return e === `y` ? `height` : `width`;
}
function he(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function ge(e) {
  return pe(he(e));
}
function _e(e, t, n) {
  n === void 0 && (n = !1);
  let r = fe(e),
    i = ge(e),
    a = me(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = Ee(o)), [o, Ee(o)]);
}
function ve(e) {
  let t = Ee(e);
  return [ye(e), t, ye(t)];
}
function ye(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var be = [`left`, `right`],
  xe = [`right`, `left`],
  Se = [`top`, `bottom`],
  Ce = [`bottom`, `top`];
function we(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? xe : be) : t ? be : xe;
    case `left`:
    case `right`:
      return t ? Se : Ce;
    default:
      return [];
  }
}
function Te(e, t, n, r) {
  let i = fe(e),
    a = we(J(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(ye)))), a
  );
}
function Ee(e) {
  let t = J(e);
  return ue[t] + e.slice(t.length);
}
function De(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function Oe(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : De(e);
}
function ke(e) {
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
var Y = r(),
  Ae = `input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])`,
  je = typeof Element > `u`,
  Me = je
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Ne =
    !je && Element.prototype.getRootNode
      ? function (e) {
          return e?.getRootNode?.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  Pe = function e(t, n) {
    n === void 0 && (n = !0);
    var r = t?.getAttribute?.call(t, `inert`);
    return r === `` || r === `true` || (n && t && e(t.parentNode));
  },
  Fe = function (e) {
    var t = e?.getAttribute?.call(e, `contenteditable`);
    return t === `` || t === `true`;
  },
  Ie = function (e, t, n) {
    if (Pe(e)) return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(Ae));
    return (t && Me.call(e, Ae) && r.unshift(e), (r = r.filter(n)), r);
  },
  Le = function e(t, n, r) {
    for (var i = [], a = Array.from(t); a.length;) {
      var o = a.shift();
      if (!Pe(o, !1)) {
        if (o.tagName === `SLOT`) {
          var s = o.assignedElements(),
            c = e(s.length ? s : o.children, !0, r);
          r.flatten
            ? i.push.apply(i, c)
            : i.push({ scopeParent: o, candidates: c });
        } else {
          Me.call(o, Ae) && r.filter(o) && (n || !t.includes(o)) && i.push(o);
          var l =
              o.shadowRoot ||
              (typeof r.getShadowRoot == `function` && r.getShadowRoot(o)),
            u = !Pe(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
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
  Re = function (e) {
    return !isNaN(parseInt(e.getAttribute(`tabindex`), 10));
  },
  ze = function (e) {
    if (!e) throw Error(`No node provided`);
    return e.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Fe(e)) &&
      !Re(e)
      ? 0
      : e.tabIndex;
  },
  Be = function (e, t) {
    var n = ze(e);
    return n < 0 && t && !Re(e) ? 0 : n;
  },
  Ve = function (e, t) {
    return e.tabIndex === t.tabIndex
      ? e.documentOrder - t.documentOrder
      : e.tabIndex - t.tabIndex;
  },
  He = function (e) {
    return e.tagName === `INPUT`;
  },
  Ue = function (e) {
    return He(e) && e.type === `hidden`;
  },
  We = function (e) {
    return (
      e.tagName === `DETAILS` &&
      Array.prototype.slice.apply(e.children).some(function (e) {
        return e.tagName === `SUMMARY`;
      })
    );
  },
  Ge = function (e, t) {
    for (var n = 0; n < e.length; n++)
      if (e[n].checked && e[n].form === t) return e[n];
  },
  Ke = function (e) {
    if (!e.name) return !0;
    var t = e.form || Ne(e),
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
    var i = Ge(r, e.form);
    return !i || i === e;
  },
  qe = function (e) {
    return He(e) && e.type === `radio`;
  },
  Je = function (e) {
    return qe(e) && !Ke(e);
  },
  Ye = function (e) {
    var t = e && Ne(e),
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
        ((t = Ne(n)),
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
  Xe = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      r = t.height;
    return n === 0 && r === 0;
  },
  Ze = function (e, t) {
    var n = t.displayCheck,
      r = t.getShadowRoot;
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    var i = Me.call(e, `details>summary:first-of-type`) ? e.parentElement : e;
    if (Me.call(i, `details:not([open]) *`)) return !0;
    if (!n || n === `full` || n === `legacy-full`) {
      if (typeof r == `function`) {
        for (var a = e; e;) {
          var o = e.parentElement,
            s = Ne(e);
          if (o && !o.shadowRoot && r(o) === !0) return Xe(e);
          e = e.assignedSlot
            ? e.assignedSlot
            : !o && s !== e.ownerDocument
              ? s.host
              : o;
        }
        e = a;
      }
      if (Ye(e)) return !e.getClientRects().length;
      if (n !== `legacy-full`) return !0;
    } else if (n === `non-zero-area`) return Xe(e);
    return !1;
  },
  Qe = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t;) {
        if (t.tagName === `FIELDSET` && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var r = t.children.item(n);
            if (r.tagName === `LEGEND`)
              return Me.call(t, `fieldset[disabled] *`) ? !0 : !r.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  $e = function (e, t) {
    return !(t.disabled || Pe(t) || Ue(t) || Ze(t, e) || We(t) || Qe(t));
  },
  et = function (e, t) {
    return !(Je(t) || ze(t) < 0 || !$e(e, t));
  },
  tt = function (e) {
    var t = parseInt(e.getAttribute(`tabindex`), 10);
    return !!(isNaN(t) || t >= 0);
  },
  nt = function e(t) {
    var n = [],
      r = [];
    return (
      t.forEach(function (t, i) {
        var a = !!t.scopeParent,
          o = a ? t.scopeParent : t,
          s = Be(o, a),
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
        .sort(Ve)
        .reduce(function (e, t) {
          return (
            t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
          );
        }, [])
        .concat(n)
    );
  },
  rt = function (e, t) {
    return (
      (t ||= {}),
      nt(
        t.getShadowRoot
          ? Le([e], t.includeContainer, {
              filter: et.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
              shadowRootFilter: tt,
            })
          : Ie(e, t.includeContainer, et.bind(null, t)),
      )
    );
  },
  it = function (e, t) {
    if (((t ||= {}), !e)) throw Error(`No node provided`);
    return Me.call(e, Ae) !== !1 && et(t, e);
  },
  at = t(n(), 1);
function ot(e, t, n) {
  let { reference: r, floating: i } = e,
    a = he(t),
    o = ge(t),
    s = me(o),
    c = J(t),
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
  let m = fe(t);
  return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function st(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = q(t, e),
    p = Oe(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = ke(
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
    y = ke(
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
var ct = 50,
  lt = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: st },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = ot(l, r, c),
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
          p < ct &&
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
            ({ x: u, y: d } = ot(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  ut = function (e) {
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
            } = q(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = J(r),
            _ = he(o),
            v = J(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [Ee(o)] : ve(o)),
            x = p !== `none`;
          !d && x && b.push(...Te(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = _e(r, a, y);
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
                _ === he(t) ||
                T.every((e) => he(e.placement) !== _ || e.overflows[0] > 0))
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
                      let t = he(e.placement);
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
  dt = new Set([`left`, `top`]);
async function ft(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = J(n),
    s = fe(n),
    c = he(n) === `y`,
    l = dt.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = q(t, e),
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
var pt = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await ft(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  mt = function (e) {
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
            } = q(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = he(i),
            p = pe(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              de(
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
  ht = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = q(e, t),
            c = await i.detectOverflow(t, s),
            l = J(n),
            u = fe(n),
            d = he(n) === `y`,
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
            v = W(p - c[m], g),
            y = W(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          (b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * G(c.left, c.right))
                : (S = p - 2 * G(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }));
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function gt(e) {
  let t = D(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = m(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = ce(n) !== a || ce(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function _t(e) {
  return p(e) ? e : e.contextElement;
}
function vt(e) {
  let t = _t(e);
  if (!m(t)) return K(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = gt(t),
    o = (a ? ce(n.width) : n.width) / r,
    s = (a ? ce(n.height) : n.height) / i;
  return (
    (o && Number.isFinite(o)) || (o = 1),
    (s && Number.isFinite(s)) || (s = 1),
    { x: o, y: s }
  );
}
var yt = K(0);
function bt(e) {
  let t = u(e);
  return !T() || !t.visualViewport
    ? yt
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function xt(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === u(e));
}
function St(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = _t(e),
    o = K(1);
  t && (r ? p(r) && (o = vt(r)) : (o = vt(e)));
  let s = xt(a, n, r) ? bt(a) : K(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    d = i.width / o.x,
    f = i.height / o.y;
  if (a && r) {
    let e = u(a),
      t = p(r) ? u(r) : r,
      n = e,
      i = M(n);
    for (; i && t !== n;) {
      let e = vt(i),
        t = i.getBoundingClientRect(),
        r = D(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (d *= e.x),
        (f *= e.y),
        (c += a),
        (l += o),
        (n = u(i)),
        (i = M(n)));
    }
  }
  return ke({ width: d, height: f, x: c, y: l });
}
function Ct(e, t) {
  let n = O(e).scrollLeft;
  return t ? t.left + n : St(d(e)).left + n;
}
function wt(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Ct(e, n), y: n.top + t.scrollTop };
}
function Tt(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = d(r),
    s = t ? v(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = K(1),
    f = K(0),
    p = m(r);
  if ((p || !a) && ((l(r) !== `body` || g(o)) && (c = O(r)), p)) {
    let e = St(r);
    ((u = vt(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop));
  }
  let h = o && !p && !a ? wt(o, c) : K(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + f.x + h.x,
    y: n.y * u.y - c.scrollTop * u.y + f.y + h.y,
  };
}
function Et(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Dt(e) {
  let t = O(e),
    n = e.ownerDocument.body,
    r = G(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = G(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Ct(e),
    o = -t.scrollTop;
  return (
    D(n).direction === `rtl` && (a += G(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var Ot = 25;
function kt(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = u(e),
    a = d(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    f = 0;
  if (o) {
    let e = !T() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (f = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (f = o.offsetTop)));
  }
  if (Ct(a) <= 0) {
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
    o <= Ot && (s -= o);
  }
  return { width: s, height: c, x: l, y: f };
}
function At(e, t) {
  let n = St(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = vt(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function jt(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = kt(e, n, t);
  else if (t === `document`) r = Dt(d(e));
  else if (p(t)) r = At(t, n);
  else {
    let n = bt(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return ke(r);
}
function Mt(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = j(e, [], !1).filter((e) => p(e) && l(e) !== `body`),
    i = null,
    a = D(e).position === `fixed`,
    o = a ? k(e) : e;
  for (; p(o) && !E(o);) {
    let e = D(o),
      t = C(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = k(o)));
  }
  return (t.set(e, r), r);
}
function Nt(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? v(t)
          ? []
          : Mt(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = jt(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = jt(t, a[e], i);
    ((s = G(n.top, s)),
      (c = W(n.right, c)),
      (l = W(n.bottom, l)),
      (u = G(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Pt(e) {
  let { width: t, height: n } = gt(e);
  return { width: t, height: n };
}
function Ft(e, t, n) {
  let r = m(t),
    i = d(t),
    a = n === `fixed`,
    o = St(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = K(0);
  if ((r || !a) && ((l(t) !== `body` || g(i)) && (s = O(t)), r)) {
    let e = St(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = Ct(i));
  let u = i && !r && !a ? wt(i, s) : K(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function It(e) {
  return D(e).position === `static`;
}
function Lt(e, t) {
  if (!m(e) || D(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (d(e) === n && (n = n.ownerDocument.body), n);
}
function Rt(e, t) {
  let n = u(e);
  if (v(e)) return n;
  if (!m(e)) {
    let t = k(e);
    for (; t && !E(t);) {
      if (p(t) && !It(t)) return t;
      t = k(t);
    }
    return n;
  }
  let r = Lt(e, t);
  for (; r && _(r) && It(r);) r = Lt(r, t);
  return r && E(r) && It(r) && !C(r) ? n : r || w(e) || n;
}
var zt = async function (e) {
  let t = this.getOffsetParent || Rt,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Ft(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Bt(e) {
  return D(e).direction === `rtl`;
}
var Vt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tt,
  getDocumentElement: d,
  getClippingRect: Nt,
  getOffsetParent: Rt,
  getElementRects: zt,
  getClientRects: Et,
  getDimensions: Pt,
  getScale: vt,
  isElement: p,
  isRTL: Bt,
};
function Ht(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Ut(e, t, n) {
  let r = null,
    i,
    a = d(e);
  function o() {
    var e;
    (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
  }
  function s(n, c) {
    (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = le(d),
      h = le(a.clientWidth - (u + f)),
      g = le(a.clientHeight - (d + p)),
      _ = le(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: G(0, W(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!Ht(l, e.getBoundingClientRect())) return s();
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
  let c = u(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      (c.removeEventListener(`resize`, l), o());
    }
  );
}
function Wt(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = _t(e),
    u = i || a ? [...(l ? j(l) : []), ...(t ? j(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? Ut(l, n, a) : null,
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
    h = c ? St(e) : null;
  c && g();
  function g() {
    let t = St(e);
    (h && !Ht(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
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
var Gt = pt,
  Kt = mt,
  qt = ut,
  Jt = ht,
  Yt = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...Vt, ...i.platform, _c: r };
    return lt(e, t, { ...i, platform: a });
  },
  Xt = typeof document < `u` ? s.useLayoutEffect : s.useEffect;
function Zt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Zt(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Zt(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Qt(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $t(e, t) {
  let n = Qt(e);
  return Math.round(t * n) / n;
}
function en(e) {
  let t = s.useRef(e);
  return (
    Xt(() => {
      t.current = e;
    }),
    t
  );
}
function tn(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: c = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = s.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, m] = s.useState(r);
  Zt(p, r) || m(r);
  let [h, g] = s.useState(null),
    [_, v] = s.useState(null),
    y = s.useCallback((e) => {
      e !== C.current && ((C.current = e), g(e));
    }, []),
    b = s.useCallback((e) => {
      e !== w.current && ((w.current = e), v(e));
    }, []),
    x = a || h,
    S = o || _,
    C = s.useRef(null),
    w = s.useRef(null),
    T = s.useRef(d),
    E = l != null,
    D = en(l),
    O = en(i),
    k = en(u),
    A = s.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: p };
      (O.current && (e.platform = O.current),
        Yt(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: k.current !== !1 };
          j.current &&
            !Zt(T.current, t) &&
            ((T.current = t),
            at.flushSync(() => {
              f(t);
            }));
        }));
    }, [p, t, n, O, k]);
  Xt(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
  }, [u]);
  let j = s.useRef(!1);
  (Xt(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    Xt(() => {
      if ((x && (C.current = x), S && (w.current = S), x && S)) {
        if (D.current) return D.current(x, S, A);
        A();
      }
    }, [x, S, A, D, E]));
  let M = s.useMemo(
      () => ({ reference: C, floating: w, setReference: y, setFloating: b }),
      [y, b],
    ),
    N = s.useMemo(() => ({ reference: x, floating: S }), [x, S]),
    P = s.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = $t(N.floating, d.x),
        r = $t(N.floating, d.y);
      return c
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(Qt(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, c, N.floating, d.x, d.y]);
  return s.useMemo(
    () => ({ ...d, update: A, refs: M, elements: N, floatingStyles: P }),
    [d, A, M, N, P],
  );
}
var nn = (e, t) => ({ ...Gt(e), options: [e, t] }),
  rn = (e, t) => ({ ...Kt(e), options: [e, t] }),
  an = (e, t) => ({ ...qt(e), options: [e, t] }),
  on = (e, t) => ({ ...Jt(e), options: [e, t] });
function sn(e) {
  let t = s.useRef(void 0),
    n = s.useCallback((t) => {
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
  return s.useMemo(
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
var cn = { ...s },
  ln = cn.useInsertionEffect || ((e) => e());
function X(e) {
  let t = s.useRef(() => {});
  return (
    ln(() => {
      t.current = e;
    }),
    s.useCallback(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
var un = `ArrowUp`,
  dn = `ArrowDown`,
  fn = `ArrowLeft`,
  pn = `ArrowRight`;
function mn(e, t, n) {
  return Math.floor(e / t) !== n;
}
function hn(e, t) {
  return t < 0 || t >= e.current.length;
}
function gn(e, t) {
  return Z(e, { disabledIndices: t });
}
function _n(e, t) {
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
  while (s >= 0 && s <= o.length - 1 && Sn(o, s, i));
  return s;
}
function vn(e, t) {
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
  if (n.key === un) {
    if ((d && U(n), u === -1)) f = l;
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
    hn(e, f) && (f = u);
  }
  if (
    (n.key === dn &&
      (d && U(n),
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
      hn(e, f) && (f = u)),
    r === `both`)
  ) {
    let t = le(u / o);
    (n.key === (a ? fn : pn) &&
      (d && U(n),
      u % o === o - 1
        ? i &&
          (f = Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s }))
        : ((f = Z(e, { startingIndex: u, disabledIndices: s })),
          i &&
            mn(f, o, t) &&
            (f = Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s }))),
      mn(f, o, t) && (f = u)),
      n.key === (a ? pn : fn) &&
        (d && U(n),
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
              mn(f, o, t) &&
              (f = Z(e, {
                startingIndex: u + (o - (u % o)),
                decrement: !0,
                disabledIndices: s,
              }))),
        mn(f, o, t) && (f = u)));
    let r = le(l / o) === t;
    hn(e, f) &&
      (f =
        i && r
          ? n.key === (a ? pn : fn)
            ? l
            : Z(e, { startingIndex: u - (u % o) - 1, disabledIndices: s })
          : u);
  }
  return f;
}
function yn(e, t, n) {
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
function bn(e, t, n, r, i) {
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
function xn(e, t) {
  return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
}
function Sn(e, t, n) {
  if (n) return n.includes(t);
  let r = e[t];
  return (
    r == null ||
    r.hasAttribute(`disabled`) ||
    r.getAttribute(`aria-disabled`) === `true`
  );
}
var Q = typeof document < `u` ? s.useLayoutEffect : s.useEffect;
function Cn(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING ||
    n & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING ||
        n & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
var wn = s.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: { current: [] },
});
function Tn(e) {
  let { children: t, elementsRef: n, labelsRef: r } = e,
    [i, a] = s.useState(() => new Set()),
    o = s.useCallback((e) => {
      a((t) => new Set(t).add(e));
    }, []),
    c = s.useCallback((e) => {
      a((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    l = s.useMemo(() => {
      let e = new Map();
      return (
        Array.from(i.keys())
          .sort(Cn)
          .forEach((t, n) => {
            e.set(t, n);
          }),
        e
      );
    }, [i]);
  return (0, Y.jsx)(wn.Provider, {
    value: s.useMemo(
      () => ({
        register: o,
        unregister: c,
        map: l,
        elementsRef: n,
        labelsRef: r,
      }),
      [o, c, l, n, r],
    ),
    children: t,
  });
}
function En(e) {
  e === void 0 && (e = {});
  let { label: t } = e,
    {
      register: n,
      unregister: r,
      map: i,
      elementsRef: a,
      labelsRef: o,
    } = s.useContext(wn),
    [c, l] = s.useState(null),
    u = s.useRef(null),
    d = s.useCallback(
      (e) => {
        if (((u.current = e), c !== null && ((a.current[c] = e), o))) {
          let n = t !== void 0;
          o.current[c] = n ? t : (e?.textContent ?? null);
        }
      },
      [c, a, o, t],
    );
  return (
    Q(() => {
      let e = u.current;
      if (e)
        return (
          n(e),
          () => {
            r(e);
          }
        );
    }, [n, r]),
    Q(() => {
      let e = u.current ? i.get(u.current) : null;
      e != null && l(e);
    }, [i]),
    s.useMemo(() => ({ ref: d, index: c ?? -1 }), [c, d])
  );
}
var Dn = [fn, pn],
  On = [un, dn];
[...Dn, ...On];
var kn = !1,
  An = 0,
  jn = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + An++;
function Mn() {
  let [e, t] = s.useState(() => (kn ? jn() : void 0));
  return (
    Q(() => {
      e ?? t(jn());
    }, []),
    s.useEffect(() => {
      kn = !0;
    }, []),
    e
  );
}
var Nn = cn.useId || Mn;
function Pn() {
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
var Fn = s.createContext(null),
  In = s.createContext(null),
  Ln = () => s.useContext(Fn)?.id || null,
  Rn = () => s.useContext(In);
function zn(e) {
  return `data-floating-ui-` + e;
}
function Bn(e) {
  e.current !== -1 && (clearTimeout(e.current), (e.current = -1));
}
function $(e) {
  let t = (0, s.useRef)(e);
  return (
    Q(() => {
      t.current = e;
    }),
    t
  );
}
var Vn = 0;
function Hn(e, t) {
  t === void 0 && (t = {});
  let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
  r && cancelAnimationFrame(Vn);
  let a = () => e?.focus({ preventScroll: n });
  i ? a() : (Vn = requestAnimationFrame(a));
}
function Un(e, t) {
  let n = [],
    r = e.find((e) => e.id === t)?.parentId;
  for (; r;) {
    let t = e.find((e) => e.id === r);
    ((r = t?.parentId), t && (n = n.concat(t)));
  }
  return n;
}
function Wn(e, t) {
  let n = e.filter((e) => e.parentId === t && e.context?.open),
    r = n;
  for (; r.length;)
    ((r = e.filter((e) =>
      r?.some((t) => e.parentId === t.id && e.context?.open),
    )),
      (n = n.concat(r)));
  return n;
}
function Gn(e, t) {
  let n,
    r = -1;
  function i(t, a) {
    (a > r && ((n = t), (r = a)),
      Wn(e, t).forEach((e) => {
        i(e.id, a + 1);
      }));
  }
  return (i(t, 0), e.find((e) => e.id === n));
}
var Kn = new WeakMap(),
  qn = new WeakSet(),
  Jn = {},
  Yn = 0,
  Xn = () => typeof HTMLElement < `u` && `inert` in HTMLElement.prototype,
  Zn = (e) => e && (e.host || Zn(e.parentNode)),
  Qn = (e, t) =>
    t
      .map((t) => {
        if (e.contains(t)) return t;
        let n = Zn(t);
        return e.contains(n) ? n : null;
      })
      .filter((e) => e != null);
function $n(e, t, n, r) {
  let i = `data-floating-ui-inert`,
    a = r ? `inert` : n ? `aria-hidden` : null,
    o = Qn(t, e),
    s = new Set(),
    c = new Set(o),
    u = [];
  Jn[i] || (Jn[i] = new WeakMap());
  let d = Jn[i];
  (o.forEach(f), p(t), s.clear());
  function f(e) {
    e && !s.has(e) && (s.add(e), e.parentNode && f(e.parentNode));
  }
  function p(e) {
    e &&
      !c.has(e) &&
      [].forEach.call(e.children, (e) => {
        if (l(e) !== `script`) {
          if (s.has(e)) p(e);
          else {
            let t = a ? e.getAttribute(a) : null,
              n = t !== null && t !== `false`,
              r = Kn.get(e) || 0,
              o = a ? r + 1 : r,
              s = (d.get(e) || 0) + 1;
            (Kn.set(e, o),
              d.set(e, s),
              u.push(e),
              o === 1 && n && qn.add(e),
              s === 1 && e.setAttribute(i, ``),
              !n && a && e.setAttribute(a, `true`));
          }
        }
      });
  }
  return (
    Yn++,
    () => {
      (u.forEach((e) => {
        let t = Kn.get(e) || 0,
          n = a ? t - 1 : t,
          r = (d.get(e) || 0) - 1;
        (Kn.set(e, n),
          d.set(e, r),
          n || (!qn.has(e) && a && e.removeAttribute(a), qn.delete(e)),
          r || e.removeAttribute(i));
      }),
        Yn--,
        Yn ||
          ((Kn = new WeakMap()),
          (Kn = new WeakMap()),
          (qn = new WeakSet()),
          (Jn = {})));
    }
  );
}
function er(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let r = H(e[0]).body;
  return $n(e.concat(Array.from(r.querySelectorAll(`[aria-live]`))), r, t, n);
}
var tr = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == `function` &&
    ResizeObserver.toString().includes(`[native code]`)
      ? `full`
      : `none`,
});
function nr(e, t) {
  let n = rt(e, tr());
  t === `prev` && n.reverse();
  let r = n.indexOf(N(H(e)));
  return n.slice(r + 1)[0];
}
function rr() {
  return nr(document.body, `next`);
}
function ir() {
  return nr(document.body, `prev`);
}
function ar(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !P(n, r);
}
var or = {
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
  sr = s.forwardRef(function (e, t) {
    let [n, r] = s.useState();
    Q(() => {
      L() && r(`button`);
    }, []);
    let i = {
      ref: t,
      tabIndex: 0,
      role: n,
      "aria-hidden": !n || void 0,
      [zn(`focus-guard`)]: ``,
      style: or,
    };
    return (0, Y.jsx)(`span`, { ...e, ...i });
  }),
  cr = s.createContext(null),
  lr = () => s.useContext(cr),
  ur = `data-floating-ui-focusable`;
function dr(e) {
  return e
    ? e.hasAttribute(ur)
      ? e
      : e.querySelector(`[` + ur + `]`) || e
    : null;
}
function fr(e) {
  return s.useMemo(
    () => (t) => {
      e.forEach((e) => {
        e && (e.current = t);
      });
    },
    e,
  );
}
var pr = 20,
  mr = [];
function hr(e) {
  ((mr = mr.filter((e) => e.isConnected)),
    e &&
      l(e) !== `body` &&
      (mr.push(e), mr.length > pr && (mr = mr.slice(-20))));
}
function gr() {
  return mr
    .slice()
    .reverse()
    .find((e) => e.isConnected);
}
function _r(e) {
  let t = tr();
  return it(e, t) ? e : rt(e, t)[0] || e;
}
var vr = s.forwardRef(function (e, t) {
  return (0, Y.jsx)(`button`, {
    ...e,
    type: `button`,
    ref: t,
    tabIndex: -1,
    style: or,
  });
});
function yr(e) {
  let {
      context: t,
      children: n,
      disabled: r = !1,
      order: i = [`content`],
      guards: a = !0,
      initialFocus: o = 0,
      returnFocus: c = !0,
      restoreFocus: l = !1,
      modal: u = !0,
      visuallyHiddenDismiss: d = !1,
      closeOnFocusOut: f = !0,
      outsideElementsInert: p = !1,
    } = e,
    {
      open: h,
      onOpenChange: g,
      events: _,
      dataRef: v,
      elements: { domReference: y, floating: b },
    } = t,
    x = X(() => v.current.floatingContext?.nodeId),
    S = typeof o == `number` && o < 0,
    C = se(y) && S,
    w = Xn(),
    T = !w || a,
    E = !T || (w && p),
    D = $(i),
    O = $(o),
    k = $(c),
    A = Rn(),
    j = lr(),
    M = s.useRef(null),
    F = s.useRef(null),
    I = s.useRef(!1),
    L = s.useRef(!1),
    ne = s.useRef(-1),
    R = j != null,
    z = dr(b),
    B = X(function (e) {
      return (e === void 0 && (e = z), e ? rt(e, tr()) : []);
    }),
    V = X((e) => {
      let t = B(e);
      return D.current
        .map((e) =>
          y && e === `reference` ? y : z && e === `floating` ? z : t,
        )
        .filter(Boolean)
        .flat();
    });
  (s.useEffect(() => {
    if (r || !u) return;
    function e(e) {
      if (e.key === `Tab`) {
        P(z, N(H(z))) && B().length === 0 && !C && U(e);
        let t = V(),
          n = ae(e);
        (D.current[0] === `reference` &&
          n === y &&
          (U(e), e.shiftKey ? Hn(t[t.length - 1]) : Hn(t[1])),
          D.current[1] === `floating` &&
            n === z &&
            e.shiftKey &&
            (U(e), Hn(t[0])));
      }
    }
    let t = H(z);
    return (
      t.addEventListener(`keydown`, e),
      () => {
        t.removeEventListener(`keydown`, e);
      }
    );
  }, [r, y, z, u, D, C, B, V]),
    s.useEffect(() => {
      if (r || !b) return;
      function e(e) {
        let t = ae(e),
          n = B().indexOf(t);
        n !== -1 && (ne.current = n);
      }
      return (
        b.addEventListener(`focusin`, e),
        () => {
          b.removeEventListener(`focusin`, e);
        }
      );
    }, [r, b, B]),
    s.useEffect(() => {
      if (r || !f) return;
      function e() {
        ((L.current = !0),
          setTimeout(() => {
            L.current = !1;
          }));
      }
      function t(e) {
        let t = e.relatedTarget;
        queueMicrotask(() => {
          let n = x(),
            r = !(
              P(y, t) ||
              P(b, t) ||
              P(t, b) ||
              P(j?.portalNode, t) ||
              (t != null && t.hasAttribute(zn(`focus-guard`))) ||
              (A &&
                (Wn(A.nodesRef.current, n).find(
                  (e) =>
                    P(e.context?.elements.floating, t) ||
                    P(e.context?.elements.domReference, t),
                ) ||
                  Un(A.nodesRef.current, n).find(
                    (e) =>
                      [
                        e.context?.elements.floating,
                        dr(e.context?.elements.floating),
                      ].includes(t) || e.context?.elements.domReference === t,
                  )))
            );
          if (l && r && N(H(z)) === H(z).body) {
            m(z) && z.focus();
            let e = ne.current,
              t = B(),
              n = t[e] || t[t.length - 1] || z;
            m(n) && n.focus();
          }
          (C || !u) &&
            t &&
            r &&
            !L.current &&
            t !== gr() &&
            ((I.current = !0), g(!1, e, `focus-out`));
        });
      }
      if (b && m(y))
        return (
          y.addEventListener(`focusout`, t),
          y.addEventListener(`pointerdown`, e),
          b.addEventListener(`focusout`, t),
          () => {
            (y.removeEventListener(`focusout`, t),
              y.removeEventListener(`pointerdown`, e),
              b.removeEventListener(`focusout`, t));
          }
        );
    }, [r, y, b, z, u, A, j, g, f, l, B, C, x]));
  let re = s.useRef(null),
    ie = s.useRef(null),
    oe = fr([re, j?.beforeInsideRef]),
    W = fr([ie, j?.afterInsideRef]);
  (s.useEffect(() => {
    var e;
    if (r || !b) return;
    let t = Array.from(
        (j == null || (e = j.portalNode) == null
          ? void 0
          : e.querySelectorAll(`[` + zn(`portal`) + `]`)) || [],
      ),
      n =
        A && !u
          ? Un(A?.nodesRef.current, x()).map(
              (e) => e.context?.elements.floating,
            )
          : [],
      i = [
        b,
        ...t,
        ...n,
        M.current,
        F.current,
        re.current,
        ie.current,
        j?.beforeOutsideRef.current,
        j?.afterOutsideRef.current,
        D.current.includes(`reference`) || C ? y : null,
      ].filter((e) => e != null),
      a = u || C ? er(i, !E, E) : er(i);
    return () => {
      a();
    };
  }, [r, y, b, u, D, j, C, T, E, A, x]),
    Q(() => {
      if (r || !m(z)) return;
      let e = N(H(z));
      queueMicrotask(() => {
        let t = V(z),
          n = O.current,
          r = (typeof n == `number` ? t[n] : n.current) || z,
          i = P(z, e);
        !S && !i && h && Hn(r, { preventScroll: r === z });
      });
    }, [r, h, z, S, V, O]),
    Q(() => {
      if (r || !z) return;
      let e = !1,
        t = !1,
        n = H(z),
        i = N(n),
        a = v.current.openEvent;
      hr(i);
      function o(n) {
        let { open: r, reason: i, event: o, nested: s } = n;
        if (
          (r && (a = o),
          i === `escape-key` && (t = !0),
          [`hover`, `safe-polygon`].includes(i) &&
            o.type === `mouseleave` &&
            (I.current = !0),
          i === `outside-press`)
        ) {
          if (s) ((I.current = !1), (e = !0));
          else if (ee(o) || te(o)) I.current = !1;
          else {
            let t = !1;
            (document.createElement(`div`).focus({
              get preventScroll() {
                return ((t = !0), !1);
              },
            }),
              t ? ((I.current = !1), (e = !0)) : (I.current = !0));
          }
        }
      }
      _.on(`openchange`, o);
      let s = n.createElement(`span`);
      (s.setAttribute(`tabindex`, `-1`),
        s.setAttribute(`aria-hidden`, `true`),
        Object.assign(s.style, or),
        R && y && y.insertAdjacentElement(`afterend`, s));
      function c() {
        return typeof k.current == `boolean`
          ? t && y
            ? y
            : gr() || s
          : k.current.current || s;
      }
      return () => {
        _.off(`openchange`, o);
        let r = N(n),
          i =
            P(b, r) ||
            (A &&
              Wn(A.nodesRef.current, x()).some((e) =>
                P(e.context?.elements.floating, r),
              ));
        (i || (a && [`click`, `mousedown`].includes(a.type))) && (t = !0);
        let l = c();
        queueMicrotask(() => {
          let t = _r(l);
          (k.current &&
            !I.current &&
            m(t) &&
            (t === r || r === n.body || i) &&
            t.focus({ preventScroll: e }),
            s.remove());
        });
      };
    }, [r, b, z, k, v, _, A, R, y, x]),
    s.useEffect(() => {
      queueMicrotask(() => {
        I.current = !1;
      });
    }, [r]),
    Q(() => {
      if (!r && j)
        return (
          j.setFocusManagerState({
            modal: u,
            closeOnFocusOut: f,
            open: h,
            onOpenChange: g,
            domReference: y,
          }),
          () => {
            j.setFocusManagerState(null);
          }
        );
    }, [r, j, u, h, g, f, y]),
    Q(() => {
      if (r || !z || typeof MutationObserver != `function` || S) return;
      let e = () => {
        let e = z.getAttribute(`tabindex`),
          t = B(),
          n = N(H(b)),
          r = t.indexOf(n);
        (r !== -1 && (ne.current = r),
          D.current.includes(`floating`) || (n !== y && t.length === 0)
            ? e !== `0` && z.setAttribute(`tabindex`, `0`)
            : e !== `-1` && z.setAttribute(`tabindex`, `-1`));
      };
      e();
      let t = new MutationObserver(e);
      return (
        t.observe(z, { childList: !0, subtree: !0, attributes: !0 }),
        () => {
          t.disconnect();
        }
      );
    }, [r, b, z, y, D, B, S]));
  function G(e) {
    return r || !d || !u
      ? null
      : (0, Y.jsx)(vr, {
          ref: e === `start` ? M : F,
          onClick: (e) => g(!1, e.nativeEvent),
          children: typeof d == `string` ? d : `Dismiss`,
        });
  }
  let ce = !r && T && (!u || !C) && (R || u);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      ce &&
        (0, Y.jsx)(sr, {
          "data-type": `inside`,
          ref: oe,
          onFocus: (e) => {
            if (u) {
              let e = V();
              Hn(i[0] === `reference` ? e[0] : e[e.length - 1]);
            } else if (j != null && j.preserveTabOrder && j.portalNode) {
              if (((I.current = !1), ar(e, j.portalNode))) (rr() || y)?.focus();
              else {
                var t;
                (t = j.beforeOutsideRef.current) == null || t.focus();
              }
            }
          },
        }),
      !C && G(`start`),
      n,
      G(`end`),
      ce &&
        (0, Y.jsx)(sr, {
          "data-type": `inside`,
          ref: W,
          onFocus: (e) => {
            if (u) Hn(V()[0]);
            else if (j != null && j.preserveTabOrder && j.portalNode) {
              if ((f && (I.current = !0), ar(e, j.portalNode)))
                (ir() || y)?.focus();
              else {
                var t;
                (t = j.afterOutsideRef.current) == null || t.focus();
              }
            }
          },
        }),
    ],
  });
}
function br(e) {
  return m(e.target) && e.target.tagName === `BUTTON`;
}
function xr(e) {
  return oe(e);
}
function Sr(e, t) {
  t === void 0 && (t = {});
  let {
      open: n,
      onOpenChange: r,
      dataRef: i,
      elements: { domReference: a },
    } = e,
    {
      enabled: o = !0,
      event: c = `click`,
      toggle: l = !0,
      ignoreMouse: u = !1,
      keyboardHandlers: d = !0,
      stickIfOpen: f = !0,
    } = t,
    p = s.useRef(),
    m = s.useRef(!1),
    h = s.useMemo(
      () => ({
        onPointerDown(e) {
          p.current = e.pointerType;
        },
        onMouseDown(e) {
          let t = p.current;
          e.button === 0 &&
            c !== `click` &&
            ((B(t, !0) && u) ||
              (n &&
              l &&
              (!(i.current.openEvent && f) ||
                i.current.openEvent.type === `mousedown`)
                ? r(!1, e.nativeEvent, `click`)
                : (e.preventDefault(), r(!0, e.nativeEvent, `click`))));
        },
        onClick(e) {
          let t = p.current;
          c === `mousedown` && p.current
            ? (p.current = void 0)
            : (B(t, !0) && u) ||
              (n &&
              l &&
              (!(i.current.openEvent && f) ||
                i.current.openEvent.type === `click`)
                ? r(!1, e.nativeEvent, `click`)
                : r(!0, e.nativeEvent, `click`));
        },
        onKeyDown(e) {
          ((p.current = void 0),
            !(e.defaultPrevented || !d || br(e)) &&
              (e.key === ` ` &&
                !xr(a) &&
                (e.preventDefault(), (m.current = !0)),
              e.key === `Enter` && r(!(n && l), e.nativeEvent, `click`)));
        },
        onKeyUp(e) {
          e.defaultPrevented ||
            !d ||
            br(e) ||
            xr(a) ||
            (e.key === ` ` &&
              m.current &&
              ((m.current = !1), r(!(n && l), e.nativeEvent, `click`)));
        },
      }),
      [i, a, c, u, d, r, n, f, l],
    );
  return s.useMemo(() => (o ? { reference: h } : {}), [o, h]);
}
var Cr = {
    pointerdown: `onPointerDown`,
    mousedown: `onMouseDown`,
    click: `onClick`,
  },
  wr = {
    pointerdown: `onPointerDownCapture`,
    mousedown: `onMouseDownCapture`,
    click: `onClickCapture`,
  },
  Tr = (e) => ({
    escapeKey: typeof e == `boolean` ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == `boolean` ? e : (e?.outsidePress ?? !0),
  });
function Er(e, t) {
  t === void 0 && (t = {});
  let { open: n, onOpenChange: r, elements: i, dataRef: a } = e,
    {
      enabled: o = !0,
      escapeKey: c = !0,
      outsidePress: l = !0,
      outsidePressEvent: u = `pointerdown`,
      referencePress: d = !1,
      referencePressEvent: f = `pointerdown`,
      ancestorScroll: h = !1,
      bubbles: g,
      capture: _,
    } = t,
    v = Rn(),
    y = X(typeof l == `function` ? l : () => !1),
    b = typeof l == `function` ? y : l,
    x = s.useRef(!1),
    S = s.useRef(!1),
    { escapeKey: C, outsidePress: w } = Tr(g),
    { escapeKey: O, outsidePress: A } = Tr(_),
    M = s.useRef(!1),
    N = X((e) => {
      if (!n || !o || !c || e.key !== `Escape` || M.current) return;
      let t = a.current.floatingContext?.nodeId,
        i = v ? Wn(v.nodesRef.current, t) : [];
      if (!C && (e.stopPropagation(), i.length > 0)) {
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
      r(!1, V(e) ? e.nativeEvent : e, `escape-key`);
    }),
    F = X((e) => {
      var t;
      let n = () => {
        var t;
        (N(e), (t = ae(e)) == null || t.removeEventListener(`keydown`, n));
      };
      (t = ae(e)) == null || t.addEventListener(`keydown`, n);
    }),
    I = X((e) => {
      let t = x.current;
      x.current = !1;
      let n = S.current;
      if (
        ((S.current = !1),
        (u === `click` && n) || t || (typeof b == `function` && !b(e)))
      )
        return;
      let o = ae(e),
        s = `[` + zn(`inert`) + `]`,
        c = H(i.floating).querySelectorAll(s),
        l = p(o) ? o : null;
      for (; l && !E(l);) {
        let e = k(l);
        if (E(e) || !p(e)) break;
        l = e;
      }
      if (
        c.length &&
        p(o) &&
        !re(o) &&
        !P(o, i.floating) &&
        Array.from(c).every((e) => !P(l, e))
      )
        return;
      if (m(o) && L) {
        let t = E(o),
          n = D(o),
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
          v &&
          Wn(v.nodesRef.current, d).some((t) =>
            ie(e, t.context?.elements.floating),
          );
      if (ie(e, i.floating) || ie(e, i.domReference) || f) return;
      let h = v ? Wn(v.nodesRef.current, d) : [];
      if (h.length > 0) {
        let e = !0;
        if (
          (h.forEach((t) => {
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
    ee = X((e) => {
      var t;
      let n = () => {
        var t;
        (I(e), (t = ae(e)) == null || t.removeEventListener(u, n));
      };
      (t = ae(e)) == null || t.addEventListener(u, n);
    });
  (s.useEffect(() => {
    if (!n || !o) return;
    ((a.current.__escapeKeyBubbles = C), (a.current.__outsidePressBubbles = w));
    let e = -1;
    function t(e) {
      r(!1, e, `ancestor-scroll`);
    }
    function s() {
      (window.clearTimeout(e), (M.current = !0));
    }
    function l() {
      e = window.setTimeout(
        () => {
          M.current = !1;
        },
        T() ? 5 : 0,
      );
    }
    let d = H(i.floating);
    (c &&
      (d.addEventListener(`keydown`, O ? F : N, O),
      d.addEventListener(`compositionstart`, s),
      d.addEventListener(`compositionend`, l)),
      b && d.addEventListener(u, A ? ee : I, A));
    let f = [];
    return (
      h &&
        (p(i.domReference) && (f = j(i.domReference)),
        p(i.floating) && (f = f.concat(j(i.floating))),
        !p(i.reference) &&
          i.reference &&
          i.reference.contextElement &&
          (f = f.concat(j(i.reference.contextElement)))),
      (f = f.filter((e) => e !== d.defaultView?.visualViewport)),
      f.forEach((e) => {
        e.addEventListener(`scroll`, t, { passive: !0 });
      }),
      () => {
        (c &&
          (d.removeEventListener(`keydown`, O ? F : N, O),
          d.removeEventListener(`compositionstart`, s),
          d.removeEventListener(`compositionend`, l)),
          b && d.removeEventListener(u, A ? ee : I, A),
          f.forEach((e) => {
            e.removeEventListener(`scroll`, t);
          }),
          window.clearTimeout(e));
      }
    );
  }, [a, i, c, b, u, n, r, h, o, C, w, N, O, F, I, A, ee]),
    s.useEffect(() => {
      x.current = !1;
    }, [b, u]));
  let te = s.useMemo(
      () => ({
        onKeyDown: N,
        ...(d && {
          [Cr[f]]: (e) => {
            r(!1, e.nativeEvent, `reference-press`);
          },
          ...(f !== `click` && {
            onClick(e) {
              r(!1, e.nativeEvent, `reference-press`);
            },
          }),
        }),
      }),
      [N, r, d, f],
    ),
    L = s.useMemo(
      () => ({
        onKeyDown: N,
        onMouseDown() {
          S.current = !0;
        },
        onMouseUp() {
          S.current = !0;
        },
        [wr[u]]: () => {
          x.current = !0;
        },
      }),
      [N, u],
    );
  return s.useMemo(() => (o ? { reference: te, floating: L } : {}), [o, te, L]);
}
function Dr(e) {
  let { open: t = !1, onOpenChange: n, elements: r } = e,
    i = Nn(),
    a = s.useRef({}),
    [o] = s.useState(() => Pn()),
    c = Ln() != null,
    [l, u] = s.useState(r.reference),
    d = X((e, t, r) => {
      ((a.current.openEvent = e ? t : void 0),
        o.emit(`openchange`, { open: e, event: t, reason: r, nested: c }),
        n?.(e, t, r));
    }),
    f = s.useMemo(() => ({ setPositionReference: u }), []),
    p = s.useMemo(
      () => ({
        reference: l || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [l, r.reference, r.floating],
    );
  return s.useMemo(
    () => ({
      dataRef: a,
      open: t,
      onOpenChange: d,
      elements: p,
      events: o,
      floatingId: i,
      refs: f,
    }),
    [t, d, p, o, i, f],
  );
}
function Or(e) {
  e === void 0 && (e = {});
  let { nodeId: t } = e,
    n = Dr({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    i = r.elements,
    [a, o] = s.useState(null),
    [c, l] = s.useState(null),
    u = i?.domReference || a,
    d = s.useRef(null),
    f = Rn();
  Q(() => {
    u && (d.current = u);
  }, [u]);
  let m = tn({ ...e, elements: { ...i, ...(c && { reference: c }) } }),
    h = s.useCallback(
      (e) => {
        let t = p(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              contextElement: e,
            }
          : e;
        (l(t), m.refs.setReference(t));
      },
      [m.refs],
    ),
    g = s.useCallback(
      (e) => {
        ((p(e) || e === null) && ((d.current = e), o(e)),
          (p(m.refs.reference.current) ||
            m.refs.reference.current === null ||
            (e !== null && !p(e))) &&
            m.refs.setReference(e));
      },
      [m.refs],
    ),
    _ = s.useMemo(
      () => ({
        ...m.refs,
        setReference: g,
        setPositionReference: h,
        domReference: d,
      }),
      [m.refs, g, h],
    ),
    v = s.useMemo(() => ({ ...m.elements, domReference: u }), [m.elements, u]),
    y = s.useMemo(
      () => ({ ...m, ...r, refs: _, elements: v, nodeId: t }),
      [m, _, v, t, r],
    );
  return (
    Q(() => {
      r.dataRef.current.floatingContext = y;
      let e = f?.nodesRef.current.find((e) => e.id === t);
      e && (e.context = y);
    }),
    s.useMemo(() => ({ ...m, context: y, refs: _, elements: v }), [m, _, v, y])
  );
}
function kr(e, t) {
  t === void 0 && (t = {});
  let { open: n, onOpenChange: r, events: i, dataRef: a, elements: o } = e,
    { enabled: c = !0, visibleOnly: l = !0 } = t,
    d = s.useRef(!1),
    f = s.useRef(-1),
    h = s.useRef(!0);
  (s.useEffect(() => {
    if (!c) return;
    let e = u(o.domReference);
    function t() {
      !n &&
        m(o.domReference) &&
        o.domReference === N(H(o.domReference)) &&
        (d.current = !0);
    }
    function r() {
      h.current = !0;
    }
    return (
      e.addEventListener(`blur`, t),
      e.addEventListener(`keydown`, r, !0),
      () => {
        (e.removeEventListener(`blur`, t),
          e.removeEventListener(`keydown`, r, !0));
      }
    );
  }, [o.domReference, n, c]),
    s.useEffect(() => {
      if (!c) return;
      function e(e) {
        let { reason: t } = e;
        (t === `reference-press` || t === `escape-key`) && (d.current = !0);
      }
      return (
        i.on(`openchange`, e),
        () => {
          i.off(`openchange`, e);
        }
      );
    }, [i, c]),
    s.useEffect(
      () => () => {
        Bn(f);
      },
      [],
    ));
  let g = s.useMemo(
    () => ({
      onPointerDown(e) {
        te(e.nativeEvent) || (h.current = !1);
      },
      onMouseLeave() {
        d.current = !1;
      },
      onFocus(e) {
        if (d.current) return;
        let t = ae(e.nativeEvent);
        if (l && p(t))
          try {
            if (L() && R()) throw Error();
            if (!t.matches(`:focus-visible`)) return;
          } catch {
            if (!h.current && !oe(t)) return;
          }
        r(!0, e.nativeEvent, `focus`);
      },
      onBlur(e) {
        d.current = !1;
        let t = e.relatedTarget,
          n = e.nativeEvent,
          i =
            p(t) &&
            t.hasAttribute(zn(`focus-guard`)) &&
            t.getAttribute(`data-type`) === `outside`;
        f.current = window.setTimeout(() => {
          let e = N(o.domReference ? o.domReference.ownerDocument : document);
          (!t && e === o.domReference) ||
            P(a.current.floatingContext?.refs.floating.current, e) ||
            P(o.domReference, e) ||
            i ||
            r(!1, n, `focus`);
        });
      },
    }),
    [a, o.domReference, r, l],
  );
  return s.useMemo(() => (c ? { reference: g } : {}), [c, g]);
}
var Ar = `active`,
  jr = `selected`;
function Mr(e, t, n) {
  let r = new Map(),
    i = n === `item`,
    a = e;
  if (i && e) {
    let { [Ar]: t, [jr]: n, ...r } = e;
    a = r;
  }
  return {
    ...(n === `floating` && { tabIndex: -1, [ur]: `` }),
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
              if (!(i && [Ar, jr].includes(n))) {
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
function Nr(e) {
  e === void 0 && (e = []);
  let t = e.map((e) => e?.reference),
    n = e.map((e) => e?.floating),
    r = e.map((e) => e?.item),
    i = s.useCallback((t) => Mr(t, e, `reference`), t),
    a = s.useCallback((t) => Mr(t, e, `floating`), n),
    o = s.useCallback((t) => Mr(t, e, `item`), r);
  return s.useMemo(
    () => ({ getReferenceProps: i, getFloatingProps: a, getItemProps: o }),
    [i, a, o],
  );
}
var Pr = `Escape`;
function Fr(e, t, n) {
  switch (e) {
    case `vertical`:
      return t;
    case `horizontal`:
      return n;
    default:
      return t || n;
  }
}
function Ir(e, t) {
  return Fr(t, e === un || e === dn, e === fn || e === pn);
}
function Lr(e, t, n) {
  return (
    Fr(t, e === dn, n ? e === fn : e === pn) ||
    e === `Enter` ||
    e === ` ` ||
    e === ``
  );
}
function Rr(e, t, n) {
  return Fr(t, n ? e === fn : e === pn, e === dn);
}
function zr(e, t, n, r) {
  return t === `both` || (t === `horizontal` && r && r > 1)
    ? e === Pr
    : Fr(t, n ? e === pn : e === fn, e === un);
}
function Br(e, t) {
  let { open: n, onOpenChange: r, elements: i } = e,
    {
      listRef: a,
      activeIndex: o,
      onNavigate: c = () => {},
      enabled: l = !0,
      selectedIndex: u = null,
      allowEscape: d = !1,
      loop: f = !1,
      nested: p = !1,
      rtl: h = !1,
      virtual: g = !1,
      focusItemOnOpen: _ = `auto`,
      focusItemOnHover: v = !0,
      openOnArrowKeyDown: y = !0,
      disabledIndices: b = void 0,
      orientation: x = `vertical`,
      cols: S = 1,
      scrollItemIntoView: C = !0,
      virtualItemRef: w,
      itemSizes: T,
      dense: E = !1,
    } = t,
    D = $(dr(i.floating)),
    O = Ln(),
    k = Rn();
  Q(() => {
    e.dataRef.current.orientation = x;
  }, [e, x]);
  let A = X(() => {
      c(F.current === -1 ? null : F.current);
    }),
    j = se(i.domReference),
    M = s.useRef(_),
    F = s.useRef(u ?? -1),
    I = s.useRef(null),
    L = s.useRef(!0),
    ne = s.useRef(A),
    R = s.useRef(!!i.floating),
    z = s.useRef(n),
    B = s.useRef(!1),
    V = s.useRef(!1),
    re = $(b),
    ie = $(n),
    ae = $(C),
    oe = $(u),
    [W, G] = s.useState(),
    [ce, le] = s.useState(),
    K = X(() => {
      function e(e) {
        g
          ? (G(e.id), k?.events.emit(`virtualfocus`, e), w && (w.current = e))
          : Hn(e, { sync: B.current, preventScroll: !0 });
      }
      let t = a.current[F.current];
      (t && e(t),
        (B.current ? (e) => e() : requestAnimationFrame)(() => {
          let n = a.current[F.current] || t;
          if (!n) return;
          t || e(n);
          let r = ae.current;
          r &&
            de &&
            (V.current || !L.current) &&
            (n.scrollIntoView == null ||
              n.scrollIntoView(
                typeof r == `boolean`
                  ? { block: `nearest`, inline: `nearest` }
                  : r,
              ));
        }));
    });
  (Q(() => {
    l &&
      (n && i.floating
        ? M.current && u != null && ((V.current = !0), (F.current = u), A())
        : R.current && ((F.current = -1), ne.current()));
  }, [l, n, i.floating, u, A]),
    Q(() => {
      if (l && n && i.floating) {
        if (o == null) {
          if (((B.current = !1), oe.current != null)) return;
          if (
            (R.current && ((F.current = -1), K()),
            (!z.current || !R.current) &&
              M.current &&
              (I.current != null || (M.current === !0 && I.current == null)))
          ) {
            let e = 0,
              t = () => {
                a.current[0] == null
                  ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t),
                    e++)
                  : ((F.current =
                      I.current == null || Lr(I.current, x, h) || p
                        ? gn(a, re.current)
                        : _n(a, re.current)),
                    (I.current = null),
                    A());
              };
            t();
          }
        } else hn(a, o) || ((F.current = o), K(), (V.current = !1));
      }
    }, [l, n, i.floating, o, oe, p, a, x, h, A, K, re]),
    Q(() => {
      var e;
      if (!l || i.floating || !k || g || !R.current) return;
      let t = k.nodesRef.current,
        n =
          (e = t.find((e) => e.id === O)) == null || (e = e.context) == null
            ? void 0
            : e.elements.floating,
        r = N(H(i.floating)),
        a = t.some((e) => e.context && P(e.context.elements.floating, r));
      n && !a && L.current && n.focus({ preventScroll: !0 });
    }, [l, i.floating, k, O, g]),
    Q(() => {
      if (!l || !k || !g || O) return;
      function e(e) {
        (le(e.id), w && (w.current = e));
      }
      return (
        k.events.on(`virtualfocus`, e),
        () => {
          k.events.off(`virtualfocus`, e);
        }
      );
    }, [l, k, g, O, w]),
    Q(() => {
      ((ne.current = A), (z.current = n), (R.current = !!i.floating));
    }),
    Q(() => {
      n || (I.current = null);
    }, [n]));
  let ue = o != null,
    de = s.useMemo(() => {
      function e(e) {
        if (!n) return;
        let t = a.current.indexOf(e);
        t !== -1 && F.current !== t && ((F.current = t), A());
      }
      return {
        onFocus(t) {
          let { currentTarget: n } = t;
          ((B.current = !0), e(n));
        },
        onClick: (e) => {
          let { currentTarget: t } = e;
          return t.focus({ preventScroll: !0 });
        },
        ...(v && {
          onMouseMove(t) {
            let { currentTarget: n } = t;
            ((B.current = !0), (V.current = !1), e(n));
          },
          onPointerLeave(e) {
            let { pointerType: t } = e;
            if (
              L.current &&
              t !== `touch` &&
              ((B.current = !0), (F.current = -1), A(), !g)
            ) {
              var n;
              (n = D.current) == null || n.focus({ preventScroll: !0 });
            }
          },
        }),
      };
    }, [n, D, v, a, A, g]),
    q = X((e) => {
      if (
        ((L.current = !1),
        (B.current = !0),
        e.which === 229 || (!ie.current && e.currentTarget === D.current))
      )
        return;
      if (p && zr(e.key, x, h, S)) {
        (U(e),
          r(!1, e.nativeEvent, `list-navigation`),
          m(i.domReference) &&
            (g
              ? k?.events.emit(`virtualfocus`, i.domReference)
              : i.domReference.focus()));
        return;
      }
      let t = F.current,
        o = gn(a, b),
        s = _n(a, b);
      if (
        (j ||
          (e.key === `Home` && (U(e), (F.current = o), A()),
          e.key === `End` && (U(e), (F.current = s), A())),
        S > 1)
      ) {
        let t =
            T ||
            Array.from({ length: a.current.length }, () => ({
              width: 1,
              height: 1,
            })),
          n = yn(t, S, E),
          r = n.findIndex((e) => e != null && !Sn(a.current, e, b)),
          i = n.reduce(
            (e, t, n) => (t != null && !Sn(a.current, t, b) ? n : e),
            -1,
          ),
          c =
            n[
              vn(
                { current: n.map((e) => (e == null ? null : a.current[e])) },
                {
                  event: e,
                  orientation: x,
                  loop: f,
                  rtl: h,
                  cols: S,
                  disabledIndices: xn(
                    [
                      ...(b ||
                        a.current.map((e, t) =>
                          Sn(a.current, t) ? t : void 0,
                        )),
                      void 0,
                    ],
                    n,
                  ),
                  minIndex: r,
                  maxIndex: i,
                  prevIndex: bn(
                    F.current > s ? o : F.current,
                    t,
                    n,
                    S,
                    e.key === dn ? `bl` : e.key === (h ? fn : pn) ? `tr` : `tl`,
                  ),
                  stopEvent: !0,
                },
              )
            ];
        if ((c != null && ((F.current = c), A()), x === `both`)) return;
      }
      if (Ir(e.key, x)) {
        if (
          (U(e),
          n && !g && N(e.currentTarget.ownerDocument) === e.currentTarget)
        ) {
          ((F.current = Lr(e.key, x, h) ? o : s), A());
          return;
        }
        (Lr(e.key, x, h)
          ? f
            ? (F.current =
                t >= s
                  ? d && t !== a.current.length
                    ? -1
                    : o
                  : Z(a, { startingIndex: t, disabledIndices: b }))
            : (F.current = Math.min(
                s,
                Z(a, { startingIndex: t, disabledIndices: b }),
              ))
          : f
            ? (F.current =
                t <= o
                  ? d && t !== -1
                    ? a.current.length
                    : s
                  : Z(a, {
                      startingIndex: t,
                      decrement: !0,
                      disabledIndices: b,
                    }))
            : (F.current = Math.max(
                o,
                Z(a, { startingIndex: t, decrement: !0, disabledIndices: b }),
              )),
          hn(a, F.current) && (F.current = -1),
          A());
      }
    }),
    J = s.useMemo(
      () => g && n && ue && { "aria-activedescendant": ce || W },
      [g, n, ue, ce, W],
    ),
    fe = s.useMemo(
      () => ({
        "aria-orientation": x === `both` ? void 0 : x,
        ...(j ? {} : J),
        onKeyDown: q,
        onPointerMove() {
          L.current = !0;
        },
      }),
      [J, q, x, j],
    ),
    pe = s.useMemo(() => {
      function e(e) {
        _ === `auto` && ee(e.nativeEvent) && (M.current = !0);
      }
      function t(e) {
        ((M.current = _),
          _ === `auto` && te(e.nativeEvent) && (M.current = !0));
      }
      return {
        ...J,
        onKeyDown(e) {
          var t;
          L.current = !1;
          let i = e.key.startsWith(`Arrow`),
            o = [`Home`, `End`].includes(e.key),
            s = i || o,
            c =
              k == null ||
              (t = k.nodesRef.current.find((e) => e.id === O)) == null ||
              (t = t.context) == null ||
              (t = t.dataRef) == null
                ? void 0
                : t.current.orientation,
            l = Rr(e.key, x, h),
            d = zr(e.key, x, h, S),
            f = Rr(e.key, c, h),
            m = Ir(e.key, x),
            _ = (p ? f : m) || e.key === `Enter` || e.key.trim() === ``;
          if (g && n) {
            let t = k?.nodesRef.current.find((e) => e.parentId == null),
              n = k && t ? Gn(k.nodesRef.current, t.id) : null;
            if (s && n && w) {
              let t = new KeyboardEvent(`keydown`, { key: e.key, bubbles: !0 });
              if (l || d) {
                let r = n.context?.elements.domReference === e.currentTarget,
                  i =
                    d && !r
                      ? n.context?.elements.domReference
                      : l
                        ? a.current.find((e) => e?.id === W)
                        : null;
                i && (U(e), i.dispatchEvent(t), le(void 0));
              }
              if (
                (m || o) &&
                n.context &&
                n.context.open &&
                n.parentId &&
                e.currentTarget !== n.context.elements.domReference
              ) {
                var v;
                (U(e),
                  (v = n.context.elements.domReference) == null ||
                    v.dispatchEvent(t));
                return;
              }
            }
            return q(e);
          }
          if (n || y || !i) {
            if (_) {
              let t = Ir(e.key, c);
              I.current = p && t ? null : e.key;
            }
            p
              ? f &&
                (U(e),
                n
                  ? ((F.current = gn(a, re.current)), A())
                  : r(!0, e.nativeEvent, `list-navigation`))
              : m &&
                (u != null && (F.current = u),
                U(e),
                !n && y ? r(!0, e.nativeEvent, `list-navigation`) : q(e),
                n && A());
          }
        },
        onFocus() {
          n && !g && ((F.current = -1), A());
        },
        onPointerDown: t,
        onPointerEnter: t,
        onMouseDown: e,
        onClick: e,
      };
    }, [W, J, S, q, re, _, a, p, A, r, n, y, x, O, h, u, k, g, w]);
  return s.useMemo(
    () => (l ? { reference: pe, floating: fe, item: de } : {}),
    [l, pe, fe, de],
  );
}
var Vr = new Map([
  [`select`, `listbox`],
  [`combobox`, `listbox`],
  [`label`, !1],
]);
function Hr(e, t) {
  t === void 0 && (t = {});
  let { open: n, floatingId: r } = e,
    { enabled: i = !0, role: a = `dialog` } = t,
    o = Vr.get(a) ?? a,
    c = Nn(),
    l = Ln() != null,
    u = s.useMemo(
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
              ...(o === `menu` && { id: c }),
              ...(o === `menu` && l && { role: `menuitem` }),
              ...(a === `select` && { "aria-autocomplete": `none` }),
              ...(a === `combobox` && { "aria-autocomplete": `list` }),
            },
      [o, r, l, n, c, a],
    ),
    d = s.useMemo(() => {
      let e = { id: r, ...(o && { role: o }) };
      return o === `tooltip` || a === `label`
        ? e
        : { ...e, ...(o === `menu` && { "aria-labelledby": c }) };
    }, [o, r, c, a]),
    f = s.useCallback(
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
  return s.useMemo(
    () => (i ? { reference: u, floating: d, item: f } : {}),
    [i, u, d, f],
  );
}
function Ur(e, t) {
  let { open: n, dataRef: r } = e,
    {
      listRef: i,
      activeIndex: a,
      onMatch: o,
      onTypingChange: c,
      enabled: l = !0,
      findMatch: u = null,
      resetMs: d = 750,
      ignoreKeys: f = [],
      selectedIndex: p = null,
    } = t,
    m = s.useRef(-1),
    h = s.useRef(``),
    g = s.useRef(p ?? a ?? -1),
    _ = s.useRef(null),
    v = X(o),
    y = X(c),
    b = $(u),
    x = $(f);
  (Q(() => {
    n && (Bn(m), (_.current = null), (h.current = ``));
  }, [n]),
    Q(() => {
      n && h.current === `` && (g.current = p ?? a ?? -1);
    }, [n, p, a]));
  let S = X((e) => {
      e
        ? r.current.typing || ((r.current.typing = e), y(e))
        : r.current.typing && ((r.current.typing = e), y(e));
    }),
    C = X((e) => {
      function t(e, t, n) {
        let r = b.current
          ? b.current(t, n)
          : t.find(
              (e) =>
                e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0,
            );
        return r ? e.indexOf(r) : -1;
      }
      let r = i.current;
      if (
        (h.current.length > 0 &&
          h.current[0] !== ` ` &&
          (t(r, r, h.current) === -1 ? S(!1) : e.key === ` ` && U(e)),
        r == null ||
          x.current.includes(e.key) ||
          e.key.length !== 1 ||
          e.ctrlKey ||
          e.metaKey ||
          e.altKey)
      )
        return;
      (n && e.key !== ` ` && (U(e), S(!0)),
        r.every(
          (e) => !e || e[0]?.toLocaleLowerCase() !== e[1]?.toLocaleLowerCase(),
        ) &&
          h.current === e.key &&
          ((h.current = ``), (g.current = _.current)),
        (h.current += e.key),
        Bn(m),
        (m.current = window.setTimeout(() => {
          ((h.current = ``), (g.current = _.current), S(!1));
        }, d)));
      let a = g.current,
        o = t(
          r,
          [...r.slice((a || 0) + 1), ...r.slice(0, (a || 0) + 1)],
          h.current,
        );
      o === -1
        ? e.key !== ` ` && ((h.current = ``), S(!1))
        : (v(o), (_.current = o));
    }),
    w = s.useMemo(() => ({ onKeyDown: C }), [C]),
    T = s.useMemo(
      () => ({
        onKeyDown: C,
        onKeyUp(e) {
          e.key === ` ` && S(!1);
        },
      }),
      [C, S],
    );
  return s.useMemo(() => (l ? { reference: w, floating: T } : {}), [l, w, T]);
}
var Wr = t(a(), 1),
  Gr = `a7R7ZlNGFnc-`,
  Kr = (0, s.createContext)(`auto`);
function qr(e) {
  let { presentation: t, children: n } = e;
  return (0, Y.jsx)(Kr.Provider, { value: t, children: n });
}
function Jr(e = `auto`) {
  let t = (0, s.useContext)(Kr),
    n = i();
  if (e !== `auto`) return e;
  let r = t;
  return r === `auto` ? (n ? `modal` : `anchor`) : r;
}
var Yr = `80vh`,
  Xr = `var( --popover-modal-width, clamp( 280px, 40vw, 480px ) )`;
function Zr(e, t) {
  let { width: n, maxHeight: r, gutter: i = 0, scroll: a } = e,
    o = typeof i == `number` ? `${i}px` : `var(--spacing-${i})`,
    s;
  return (
    (s =
      typeof r == `function`
        ? r({ unAvailableHeight: t, gutter: o })
        : typeof r == `number`
          ? `min( ${r}px, ${Yr} )`
          : `min( calc( 100vh - 2 * ${o} ), ${Yr} )`),
    {
      boxSizing: `border-box`,
      width: n === `content` ? void 0 : Xr,
      maxWidth: `90vw`,
      maxHeight: s,
      minHeight: 0,
      flexShrink: 1,
      overflowY: a ? `auto` : void 0,
      "--popover-max-height": s,
    }
  );
}
function Qr(e) {
  e && e.showPopover && e.showPopover();
}
function $r(e) {
  let {
      ref: t,
      presentation: n,
      sizing: r,
      floatingRef: i,
      floatingProps: a,
      floatingStyles: c,
      referenceElement: l,
      className: u,
      label: d,
      children: f,
    } = e,
    p = (0, s.useId)(),
    m = sn([t, n === `anchor` ? i : void 0, Qr]),
    h = u ? { className: u } : {};
  if (n === `anchor`)
    return (0, s.cloneElement)(f, {
      ref: m,
      style: c,
      popover: `manual`,
      ...a,
      ...h,
    });
  let g = l?.ownerDocument?.defaultView?.innerHeight ?? window.innerHeight;
  return (0, Y.jsxs)(`div`, {
    popover: `manual`,
    ref: m,
    className: (0, Wr.default)(o(), Gr),
    children: [
      d && (0, Y.jsx)(`div`, { id: p, className: `GrnU99p0SN0-`, children: d }),
      (0, s.cloneElement)(f, {
        ref: i,
        style: Zr(r, g),
        ...h,
        ...(d && !f.props[`aria-labelledby`] ? { "aria-labelledby": p } : {}),
        ...a,
      }),
    ],
  });
}
export {
  nn as _,
  Tn as a,
  Wt as b,
  Or as c,
  En as d,
  Br as f,
  an as g,
  Ur as h,
  yr as i,
  kr as l,
  Hr as m,
  $r as n,
  Sr as o,
  sn as p,
  Jr as r,
  Er as s,
  qr as t,
  Nr as u,
  rn as v,
  Vt as x,
  on as y,
};
