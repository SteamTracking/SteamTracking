/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
var e = class extends Event {
    oldState;
    newState;
    constructor(e, { oldState: t = ``, newState: n = ``, ...r } = {}) {
      (super(e, r),
        (this.oldState = String(t || ``)),
        (this.newState = String(n || ``)));
    }
  },
  t = new WeakMap();
function n(n, r, i) {
  t.set(
    n,
    setTimeout(() => {
      t.has(n) &&
        n.dispatchEvent(
          new e(`toggle`, { cancelable: !1, oldState: r, newState: i }),
        );
    }, 0),
  );
}
var r = globalThis.ShadowRoot || function () {},
  i = globalThis.HTMLDialogElement || function () {},
  a = new WeakMap(),
  o = new WeakMap(),
  s = new WeakMap();
function c(e) {
  return s.get(e) || `hidden`;
}
var l = new WeakMap();
function u(e) {
  let t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement)) return;
  let n = c(t);
  (e.popoverTargetAction === `show` && n === `showing`) ||
    (e.popoverTargetAction === `hide` && n === `hidden`) ||
    (n === `showing` ? w(t, !0, !0) : d(t, !1) && (l.set(t, e), C(t)));
}
function d(e, t) {
  return !(
    (e.popover !== `auto` && e.popover !== `manual`) ||
    !e.isConnected ||
    (t && c(e) !== `showing`) ||
    (!t && c(e) !== `hidden`) ||
    (e instanceof i && e.hasAttribute(`open`)) ||
    document.fullscreenElement === e
  );
}
function f(e) {
  return e ? Array.from(o.get(e.ownerDocument) || []).indexOf(e) + 1 : 0;
}
function p(e) {
  let t = g(e),
    n = _(e);
  return f(t) > f(n) ? t : n;
}
function m(e) {
  let t = o.get(e);
  for (let e of t || [])
    if (!e.isConnected) t.delete(e);
    else return e;
  return null;
}
function h(e) {
  return typeof e.getRootNode == `function`
    ? e.getRootNode()
    : e.parentNode
      ? h(e.parentNode)
      : e;
}
function g(e) {
  for (; e;) {
    if (
      e instanceof HTMLElement &&
      e.popover === `auto` &&
      s.get(e) === `showing`
    )
      return e;
    if (
      ((e = e.parentElement || h(e)),
      e instanceof r && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function _(e) {
  for (; e;) {
    let t = e.popoverTargetElement;
    if (t instanceof HTMLElement) return t;
    if (
      ((e = e.parentElement || h(e)),
      e instanceof r && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function v(e) {
  let t = new Map(),
    n = 0,
    r = e.ownerDocument;
  for (let e of o.get(r) || []) (t.set(e, n), (n += 1));
  (t.set(e, n), (n += 1));
  let i = null;
  function a(e) {
    let n = g(e);
    if (n === null) return null;
    let r = t.get(n);
    (i === null || t.get(i) < r) && (i = n);
  }
  return (a(e?.parentElement), i);
}
function y(e) {
  return e.hidden ||
    e instanceof r ||
    ((e instanceof HTMLButtonElement ||
      e instanceof HTMLInputElement ||
      e instanceof HTMLSelectElement ||
      e instanceof HTMLTextAreaElement ||
      e instanceof HTMLOptGroupElement ||
      e instanceof HTMLOptionElement ||
      e instanceof HTMLFieldSetElement) &&
      e.disabled) ||
    (e instanceof HTMLInputElement && e.type === `hidden`) ||
    (e instanceof HTMLAnchorElement && e.href === ``)
    ? !1
    : typeof e.tabIndex == `number` && e.tabIndex !== -1;
}
function b(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let n = t.querySelector(`[autofocus]`);
  if (n) return n;
  {
    let e = t.querySelectorAll(`slot`);
    for (let t of e) {
      let e = t.assignedElements({ flatten: !0 });
      for (let t of e)
        if (t.hasAttribute(`autofocus`)) return t;
        else if (((n = t.querySelector(`[autofocus]`)), n)) return n;
    }
  }
  let r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
    i = r.currentNode;
  for (; i;) {
    if (y(i)) return i;
    i = r.nextNode();
  }
}
function x(e) {
  b(e)?.focus();
}
var S = new WeakMap();
function C(t) {
  if (!d(t, !1)) return;
  let r = t.ownerDocument;
  if (
    !t.dispatchEvent(
      new e(`beforetoggle`, {
        cancelable: !0,
        oldState: `closed`,
        newState: `open`,
      }),
    ) ||
    !d(t, !1)
  )
    return;
  let i = !1;
  if (t.popover === `auto`) {
    let e = t.getAttribute(`popover`);
    if ((E(v(t) || r, !1, !0), e !== t.getAttribute(`popover`) || !d(t, !1)))
      return;
  }
  (m(r) || (i = !0), S.delete(t));
  let c = r.activeElement;
  (t.classList.add(`:popover-open`),
    s.set(t, `showing`),
    a.has(r) || a.set(r, new Set()),
    a.get(r).add(t),
    x(t),
    t.popover === `auto` &&
      (o.has(r) || o.set(r, new Set()), o.get(r).add(t), A(l.get(t), !0)),
    i && c && t.popover === `auto` && S.set(t, c),
    n(t, `closed`, `open`));
}
function w(t, r = !1, i = !1) {
  if (!d(t, !0)) return;
  let c = t.ownerDocument;
  if (
    (t.popover === `auto` && (E(t, r, i), !d(t, !0))) ||
    (A(l.get(t), !1),
    l.delete(t),
    i &&
      (t.dispatchEvent(
        new e(`beforetoggle`, { oldState: `open`, newState: `closed` }),
      ),
      !d(t, !0)))
  )
    return;
  (a.get(c)?.delete(t),
    o.get(c)?.delete(t),
    t.classList.remove(`:popover-open`),
    s.set(t, `hidden`),
    i && n(t, `open`, `closed`));
  let u = S.get(t);
  u && (S.delete(t), r && u.focus());
}
function T(e, t = !1, n = !1) {
  let r = m(e);
  for (; r;) (w(r, t, n), (r = m(e)));
}
function E(e, t, n) {
  let r = e.ownerDocument || e;
  if (e instanceof Document) return T(r, t, n);
  let i = null,
    a = !1;
  for (let t of o.get(r) || [])
    if (t === e) a = !0;
    else if (a) {
      i = t;
      break;
    }
  if (!a) return T(r, t, n);
  for (; i && c(i) === `showing` && o.get(r)?.size;) w(i, t, n);
}
var D = new WeakMap();
function O(e) {
  if (!e.isTrusted) return;
  let t = e.composedPath()[0];
  if (!t) return;
  let n = t.ownerDocument;
  if (!m(n)) return;
  let r = p(t);
  if (r && e.type === `pointerdown`) D.set(n, r);
  else if (e.type === `pointerup`) {
    let e = D.get(n) === r;
    (D.delete(n), e && E(r || n, !1, !0));
  }
}
var k = new WeakMap();
function A(e, t = !1) {
  if (!e) return;
  k.has(e) || k.set(e, e.getAttribute(`aria-expanded`));
  let n = e.popoverTargetElement;
  if (n instanceof HTMLElement && n.popover === `auto`)
    e.setAttribute(`aria-expanded`, String(t));
  else {
    let t = k.get(e);
    t ? e.setAttribute(`aria-expanded`, t) : e.removeAttribute(`aria-expanded`);
  }
}
var j = globalThis.ShadowRoot || function () {};
function M() {
  return (
    typeof HTMLElement < `u` &&
    typeof HTMLElement.prototype == `object` &&
    `popover` in HTMLElement.prototype
  );
}
function N(e, t, n) {
  let r = e[t];
  Object.defineProperty(e, t, {
    value(e) {
      return r.call(this, n(e));
    },
  });
}
var P = /(^|[^\\]):popover-open\b/g,
  F = `
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
`,
  I = null;
function L(e) {
  if (I === null)
    try {
      ((I = new CSSStyleSheet()), I.replaceSync(F));
    } catch {
      I = !1;
    }
  if (I === !1) {
    let t = document.createElement(`style`);
    ((t.textContent = F),
      e instanceof Document ? e.head.prepend(t) : e.prepend(t));
  } else e.adoptedStyleSheets = [I, ...e.adoptedStyleSheets];
}
function R() {
  window.ToggleEvent = window.ToggleEvent || e;
  function t(e) {
    return (
      e?.includes(`:popover-open`) && (e = e.replace(P, `$1.\\:popover-open`)),
      e
    );
  }
  (N(Document.prototype, `querySelector`, t),
    N(Document.prototype, `querySelectorAll`, t),
    N(Element.prototype, `querySelector`, t),
    N(Element.prototype, `querySelectorAll`, t),
    N(Element.prototype, `matches`, t),
    N(Element.prototype, `closest`, t),
    N(DocumentFragment.prototype, `querySelectorAll`, t),
    N(DocumentFragment.prototype, `querySelectorAll`, t),
    Object.defineProperties(HTMLElement.prototype, {
      popover: {
        enumerable: !0,
        configurable: !0,
        get() {
          if (!this.hasAttribute(`popover`)) return null;
          let e = (this.getAttribute(`popover`) || ``).toLowerCase();
          return e === `` || e == `auto` ? `auto` : `manual`;
        },
        set(e) {
          this.setAttribute(`popover`, e);
        },
      },
      showPopover: {
        enumerable: !0,
        configurable: !0,
        value() {
          C(this);
        },
      },
      hidePopover: {
        enumerable: !0,
        configurable: !0,
        value() {
          w(this, !0, !0);
        },
      },
      togglePopover: {
        enumerable: !0,
        configurable: !0,
        value(e) {
          (s.get(this) === `showing` && e === void 0) || e === !1
            ? w(this, !0, !0)
            : (e === void 0 || e === !0) && C(this);
        },
      },
    }));
  let n = Element.prototype.attachShadow;
  n &&
    Object.defineProperties(Element.prototype, {
      attachShadow: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value(e) {
          let t = n.call(this, e);
          return (L(t), t);
        },
      },
    });
  let r = HTMLElement.prototype.attachInternals;
  r &&
    Object.defineProperties(HTMLElement.prototype, {
      attachInternals: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value() {
          let e = r.call(this);
          return (e.shadowRoot && L(e.shadowRoot), e);
        },
      },
    });
  let i = new WeakMap();
  function a(e) {
    Object.defineProperties(e.prototype, {
      popoverTargetElement: {
        enumerable: !0,
        configurable: !0,
        set(e) {
          if (e === null)
            (this.removeAttribute(`popovertarget`), i.delete(this));
          else if (e instanceof Element)
            (this.setAttribute(`popovertarget`, ``), i.set(this, e));
          else
            throw TypeError(`popoverTargetElement must be an element or null`);
        },
        get() {
          if (
            (this.localName !== `button` && this.localName !== `input`) ||
            (this.localName === `input` &&
              this.type !== `reset` &&
              this.type !== `image` &&
              this.type !== `button`) ||
            this.disabled ||
            (this.form && this.type === `submit`)
          )
            return null;
          let e = i.get(this);
          if (e && e.isConnected) return e;
          if (e && !e.isConnected) return (i.delete(this), null);
          let t = h(this),
            n = this.getAttribute(`popovertarget`);
          return (
            ((t instanceof Document || t instanceof j) &&
              n &&
              t.getElementById(n)) ||
            null
          );
        },
      },
      popoverTargetAction: {
        enumerable: !0,
        configurable: !0,
        get() {
          let e = (
            this.getAttribute(`popovertargetaction`) || ``
          ).toLowerCase();
          return e === `show` || e === `hide` ? e : `toggle`;
        },
        set(e) {
          this.setAttribute(`popovertargetaction`, e);
        },
      },
    });
  }
  (a(HTMLButtonElement), a(HTMLInputElement));
  let o = (e) => {
      let t = e.composedPath()[0];
      if (!(t instanceof Element) || t?.shadowRoot) return;
      let n = h(t);
      if (!(n instanceof j || n instanceof Document)) return;
      let r = t.closest(`[popovertargetaction],[popovertarget]`);
      r && (u(r), e.preventDefault());
    },
    c = (e) => {
      let t = e.key,
        n = e.target;
      !e.defaultPrevented &&
        n &&
        (t === `Escape` || t === `Esc`) &&
        E(n.ownerDocument, !0, !0);
    };
  (((e) => {
    (e.addEventListener(`click`, o),
      e.addEventListener(`keydown`, c),
      e.addEventListener(`pointerdown`, O),
      e.addEventListener(`pointerup`, O));
  })(document),
    L(document));
}
export { R as apply, M as isSupported };
