/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import { D as t, E as n, Ft as r, ot as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~e625c3ac3e.js";
import {
  Eu as o,
  Ft as s,
  Gt as c,
  Hu as l,
  Id as u,
  Jt as d,
  Kt as f,
  Lt as p,
  Mt as m,
  Ot as h,
  Pt as g,
  Xf as _,
  Xu as v,
  Yt as y,
  ct as b,
  ig as x,
  jt as S,
  kt as ee,
  qt as C,
  st as w,
  ut as T,
} from "./main.js";
var E = e(r(), 1),
  te = e(t(), 1),
  D = i();
function O(e) {
  let { extracted: t, remaining: n } = d(e),
    {
      value: r,
      onTextChange: i,
      onTextClear: o,
      clearable: l,
      onChange: f,
      radius: p,
      variant: m,
      size: h,
      beforeContent: g,
      afterContent: b,
      inputRef: x,
      ref: S,
      disabled: C,
      gamepadFocusable: T = !0,
      status: O,
      ...k
    } = n,
    A = _(),
    j = (e) => {
      C || (i(e.target.value), f && f(e));
    },
    M = () => {
      (i(``), o && o());
    },
    N = !!r && l,
    P = N ? (0, D.jsx)(s, { onClick: M, cursor: `pointer`, hitSlop: !0 }) : b,
    F = c(`TextInput`, m),
    I = {
      ...t,
      variant: F,
      size: h,
      radius: p,
      status: O,
      beforeContent: g,
      afterContent: P,
      ref: S,
      disabled: C,
    },
    L = (0, E.useRef)(null),
    R = (e) => {
      L.current && e.target !== L.current && L.current.focus();
    },
    z = T && A,
    B = z ? ne : `input`,
    V =
      z && N && !C
        ? {
            onSecondaryButton: M,
            actionDescriptionMap: { [v.SECONDARY]: w.Localize(`#Clear`) },
          }
        : {};
  return (0, D.jsx)(ee, {
    cursor: `text`,
    ...I,
    onClick: R,
    children: (0, D.jsx)(B, {
      ref: u(x, L),
      type: `text`,
      "aria-disabled": C,
      readOnly: C,
      className: (0, te.default)(y(), a()),
      value: r || ``,
      onChange: j,
      ...V,
      ...k,
    }),
  });
}
function ne(e) {
  return (0, D.jsx)(l, { noFocusRing: !0, ...e });
}
var k = e(n(), 1);
function A(e, t, n) {
  let r = n.initialDeps ?? [],
    i;
  function a() {
    var a;
    let o;
    n.key && n.debug?.call(n) && (o = Date.now());
    let s = e();
    if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
    r = s;
    let c;
    if (
      (n.key && n.debug?.call(n) && (c = Date.now()),
      (i = t(...s)),
      n.key && n.debug?.call(n))
    ) {
      let e = Math.round((Date.now() - o) * 100) / 100,
        t = Math.round((Date.now() - c) * 100) / 100,
        r = t / 16,
        i = (e, t) => {
          for (e = String(e); e.length < t;) e = ` ` + e;
          return e;
        };
      console.info(
        `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
        n?.key,
      );
    }
    return ((a = n?.onChange) == null || a.call(n, i), i);
  }
  return (
    (a.updateDeps = (e) => {
      r = e;
    }),
    a
  );
}
function j(e, t) {
  if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ``}`);
  return e;
}
var M = (e, t) => Math.abs(e - t) < 1.01,
  N = (e, t, n) => {
    let r;
    return function (...i) {
      (e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n)));
    };
  },
  P = (e) => {
    let { offsetWidth: t, offsetHeight: n } = e;
    return { width: t, height: n };
  },
  F = (e) => e,
  I = (e) => {
    let t = Math.max(e.startIndex - e.overscan, 0),
      n = Math.min(e.endIndex + e.overscan, e.count - 1),
      r = [];
    for (let e = t; e <= n; e++) r.push(e);
    return r;
  },
  L = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = (e) => {
      let { width: n, height: r } = e;
      t({ width: Math.round(n), height: Math.round(r) });
    };
    if ((i(P(n)), !r.ResizeObserver)) return () => {};
    let a = new r.ResizeObserver((t) => {
      let r = () => {
        let e = t[0];
        if (e?.borderBoxSize) {
          let t = e.borderBoxSize[0];
          if (t) {
            i({ width: t.inlineSize, height: t.blockSize });
            return;
          }
        }
        i(P(n));
      };
      e.options.useAnimationFrameWithResizeObserver
        ? requestAnimationFrame(r)
        : r();
    });
    return (
      a.observe(n, { box: `border-box` }),
      () => {
        a.unobserve(n);
      }
    );
  },
  R = { passive: !0 },
  z = typeof window > `u` || `onscrollend` in window,
  B = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && z
          ? () => void 0
          : N(
              r,
              () => {
                t(i, !1);
              },
              e.options.isScrollingResetDelay,
            ),
      o = (r) => () => {
        let { horizontal: o, isRtl: s } = e.options;
        ((i = o ? n.scrollLeft * ((s && -1) || 1) : n.scrollTop), a(), t(i, r));
      },
      s = o(!0),
      c = o(!1);
    (c(), n.addEventListener(`scroll`, s, R));
    let l = e.options.useScrollendEvent && z;
    return (
      l && n.addEventListener(`scrollend`, c, R),
      () => {
        (n.removeEventListener(`scroll`, s),
          l && n.removeEventListener(`scrollend`, c));
      }
    );
  },
  V = (e, t, n) => {
    if (t?.borderBoxSize) {
      let e = t.borderBoxSize[0];
      if (e)
        return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  H = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  re = class {
    constructor(e) {
      ((this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.scrollRect = null),
        (this.scrollOffset = null),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.elementsCache = new Map()),
        (this.observer = (() => {
          let e = null,
            t = () =>
              e ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (e = new this.targetWindow.ResizeObserver((e) => {
                    e.forEach((e) => {
                      let t = () => {
                        this._measureElement(e.target, e);
                      };
                      this.options.useAnimationFrameWithResizeObserver
                        ? requestAnimationFrame(t)
                        : t();
                    });
                  })));
          return {
            disconnect: () => {
              var n;
              ((n = t()) == null || n.disconnect(), (e = null));
            },
            observe: (e) => t()?.observe(e, { box: `border-box` }),
            unobserve: (e) => t()?.unobserve(e),
          };
        })()),
        (this.range = null),
        (this.setOptions = (e) => {
          (Object.entries(e).forEach(([t, n]) => {
            n === void 0 && delete e[t];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: F,
              rangeExtractor: I,
              onChange: () => {},
              measureElement: V,
              initialRect: { width: 0, height: 0 },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: `data-index`,
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              useScrollendEvent: !1,
              useAnimationFrameWithResizeObserver: !1,
              ...e,
            }));
        }),
        (this.notify = (e) => {
          var t, n;
          (n = (t = this.options).onChange) == null || n.call(t, this, e);
        }),
        (this.maybeNotify = A(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (e) => {
            this.notify(e);
          },
          {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          },
        )),
        (this.cleanup = () => {
          (this.unsubs.filter(Boolean).forEach((e) => e()),
            (this.unsubs = []),
            this.observer.disconnect(),
            (this.scrollElement = null),
            (this.targetWindow = null));
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          let e = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== e) {
            if ((this.cleanup(), !e)) {
              this.maybeNotify();
              return;
            }
            ((this.scrollElement = e),
              (this.targetWindow =
                this.scrollElement && `ownerDocument` in this.scrollElement
                  ? this.scrollElement.ownerDocument.defaultView
                  : (this.scrollElement?.window ?? null)),
              this.elementsCache.forEach((e) => {
                this.observer.observe(e);
              }),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, (e) => {
                  ((this.scrollRect = e), this.maybeNotify());
                }),
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (e, t) => {
                  ((this.scrollAdjustments = 0),
                    (this.scrollDirection = t
                      ? this.getScrollOffset() < e
                        ? `forward`
                        : `backward`
                      : null),
                    (this.scrollOffset = e),
                    (this.isScrolling = t),
                    this.maybeNotify());
                }),
              ));
          }
        }),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? `width` : `height`])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == `function`
                  ? this.options.initialOffset()
                  : this.options.initialOffset)),
              this.scrollOffset)
            : ((this.scrollOffset = null), 0)),
        (this.getFurthestMeasurement = (e, t) => {
          let n = new Map(),
            r = new Map();
          for (let i = t - 1; i >= 0; i--) {
            let t = e[i];
            if (n.has(t.lane)) continue;
            let a = r.get(t.lane);
            if (
              (a == null || t.end > a.end
                ? r.set(t.lane, t)
                : t.end < a.end && n.set(t.lane, !0),
              n.size === this.options.lanes)
            )
              break;
          }
          return r.size === this.options.lanes
            ? Array.from(r.values()).sort((e, t) =>
                e.end === t.end ? e.index - t.index : e.end - t.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = A(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (e, t, n, r, i) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: e,
              paddingStart: t,
              scrollMargin: n,
              getItemKey: r,
              enabled: i,
            }
          ),
          { key: !1 },
        )),
        (this.getMeasurements = A(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: e,
              paddingStart: t,
              scrollMargin: n,
              getItemKey: r,
              enabled: i,
            },
            a,
          ) => {
            if (!i)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((e) => {
                this.itemSizeCache.set(e.key, e.size);
              }));
            let o =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let s = this.measurementsCache.slice(0, o);
            for (let i = o; i < e; i++) {
              let e = r(i),
                o =
                  this.options.lanes === 1
                    ? s[i - 1]
                    : this.getFurthestMeasurement(s, i),
                c = o ? o.end + this.options.gap : t + n,
                l = a.get(e),
                u = typeof l == `number` ? l : this.options.estimateSize(i),
                d = c + u,
                f = o ? o.lane : i % this.options.lanes;
              s[i] = { index: i, start: c, size: u, end: d, key: e, lane: f };
            }
            return ((this.measurementsCache = s), s);
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.calculateRange = A(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (e, t, n, r) =>
            (this.range =
              e.length > 0 && t > 0
                ? ie({
                    measurements: e,
                    outerSize: t,
                    scrollOffset: n,
                    lanes: r,
                  })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualIndexes = A(
          () => {
            let e = null,
              t = null,
              n = this.calculateRange();
            return (
              n && ((e = n.startIndex), (t = n.endIndex)),
              this.maybeNotify.updateDeps([this.isScrolling, e, t]),
              [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                e,
                t,
              ]
            );
          },
          (e, t, n, r, i) =>
            r === null || i === null
              ? []
              : e({ startIndex: r, endIndex: i, overscan: t, count: n }),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.indexFromElement = (e) => {
          let t = this.options.indexAttribute,
            n = e.getAttribute(t);
          return n
            ? parseInt(n, 10)
            : (console.warn(
                `Missing attribute name '${t}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (e, t) => {
          let n = this.indexFromElement(e),
            r = this.measurementsCache[n];
          if (!r) return;
          let i = r.key,
            a = this.elementsCache.get(i);
          (a !== e &&
            (a && this.observer.unobserve(a),
            this.observer.observe(e),
            this.elementsCache.set(i, e)),
            e.isConnected &&
              this.resizeItem(n, this.options.measureElement(e, t, this)));
        }),
        (this.resizeItem = (e, t) => {
          let n = this.measurementsCache[e];
          if (!n) return;
          let r = t - (this.itemSizeCache.get(n.key) ?? n.size);
          r !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0
              ? n.start < this.getScrollOffset() + this.scrollAdjustments
              : this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += r),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(n.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
            this.notify(!1));
        }),
        (this.measureElement = (e) => {
          e
            ? this._measureElement(e, void 0)
            : this.elementsCache.forEach((e, t) => {
                e.isConnected ||
                  (this.observer.unobserve(e), this.elementsCache.delete(t));
              });
        }),
        (this.getVirtualItems = A(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (e, t) => {
            let n = [];
            for (let r = 0, i = e.length; r < i; r++) {
              let i = t[e[r]];
              n.push(i);
            }
            return n;
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualItemForOffset = (e) => {
          let t = this.getMeasurements();
          if (t.length !== 0)
            return j(t[U(0, t.length - 1, (e) => j(t[e]).start, e)]);
        }),
        (this.getOffsetForAlignment = (e, t, n = 0) => {
          let r = this.getSize(),
            i = this.getScrollOffset();
          (t === `auto` && (t = e >= i + r ? `end` : `start`),
            t === `center` ? (e += (n - r) / 2) : t === `end` && (e -= r));
          let a = this.getTotalSize() + this.options.scrollMargin - r;
          return Math.max(Math.min(a, e), 0);
        }),
        (this.getOffsetForIndex = (e, t = `auto`) => {
          e = Math.max(0, Math.min(e, this.options.count - 1));
          let n = this.measurementsCache[e];
          if (!n) return;
          let r = this.getSize(),
            i = this.getScrollOffset();
          if (t === `auto`) {
            if (n.end >= i + r - this.options.scrollPaddingEnd) t = `end`;
            else if (n.start <= i + this.options.scrollPaddingStart)
              t = `start`;
            else return [i, t];
          }
          let a =
            t === `end`
              ? n.end + this.options.scrollPaddingEnd
              : n.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(a, t, n.size), t];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.scrollToOffset = (
          e,
          { align: t = `start`, behavior: n } = {},
        ) => {
          (n === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getOffsetForAlignment(e, t), {
              adjustments: void 0,
              behavior: n,
            }));
        }),
        (this.scrollToIndex = (e, { align: t = `auto`, behavior: n } = {}) => {
          (n === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            (e = Math.max(0, Math.min(e, this.options.count - 1))));
          let r = 0,
            i = (t) => {
              if (!this.targetWindow) return;
              let r = this.getOffsetForIndex(e, t);
              if (!r) {
                console.warn(`Failed to get offset for index:`, e);
                return;
              }
              let [i, o] = r;
              (this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
                this.targetWindow.requestAnimationFrame(() => {
                  let t = this.getScrollOffset(),
                    n = this.getOffsetForIndex(e, o);
                  n
                    ? M(n[0], t) || a(o)
                    : console.warn(`Failed to get offset for index:`, e);
                }));
            },
            a = (t) => {
              this.targetWindow &&
                (r++,
                r < 10
                  ? this.targetWindow.requestAnimationFrame(() => i(t))
                  : console.warn(
                      `Failed to scroll to index ${e} after 10 attempts.`,
                    ));
            };
          i(t);
        }),
        (this.scrollBy = (e, { behavior: t } = {}) => {
          (t === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getScrollOffset() + e, {
              adjustments: void 0,
              behavior: t,
            }));
        }),
        (this.getTotalSize = () => {
          let e = this.getMeasurements(),
            t;
          if (e.length === 0) t = this.options.paddingStart;
          else if (this.options.lanes === 1) t = e[e.length - 1]?.end ?? 0;
          else {
            let n = Array(this.options.lanes).fill(null),
              r = e.length - 1;
            for (; r >= 0 && n.some((e) => e === null);) {
              let t = e[r];
              (n[t.lane] === null && (n[t.lane] = t.end), r--);
            }
            t = Math.max(...n.filter((e) => e !== null));
          }
          return Math.max(
            t - this.options.scrollMargin + this.options.paddingEnd,
            0,
          );
        }),
        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
          this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
        }),
        (this.measure = () => {
          ((this.itemSizeCache = new Map()), this.notify(!1));
        }),
        this.setOptions(e));
    }
  },
  U = (e, t, n, r) => {
    for (; e <= t;) {
      let i = ((e + t) / 2) | 0,
        a = n(i);
      if (a < r) e = i + 1;
      else if (a > r) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
function ie({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  let i = e.length - 1,
    a = (t) => e[t].start;
  if (e.length <= r) return { startIndex: 0, endIndex: i };
  let o = U(0, i, a, n),
    s = o;
  if (r === 1) for (; s < i && e[s].end < n + t;) s++;
  else if (r > 1) {
    let a = Array(r).fill(0);
    for (; s < i && a.some((e) => e < n + t);) {
      let t = e[s];
      ((a[t.lane] = t.end), s++);
    }
    let c = Array(r).fill(n + t);
    for (; o >= 0 && c.some((e) => e >= n);) {
      let t = e[o];
      ((c[t.lane] = t.start), o--);
    }
    ((o = Math.max(0, o - (o % r))), (s = Math.min(i, s + (r - 1 - (s % r)))));
  }
  return { startIndex: o, endIndex: s };
}
var W = typeof document < `u` ? E.useLayoutEffect : E.useEffect;
function ae(e) {
  let t = E.useReducer(() => ({}), {})[1],
    n = {
      ...e,
      onChange: (n, r) => {
        var i;
        (r ? (0, k.flushSync)(t) : t(),
          (i = e.onChange) == null || i.call(e, n, r));
      },
    },
    [r] = E.useState(() => new re(n));
  return (
    r.setOptions(n), W(() => r._didMount(), []), W(() => r._willUpdate()), r
  );
}
function oe(e) {
  return ae({
    observeElementRect: L,
    observeElementOffset: B,
    scrollToFn: H,
    ...e,
  });
}
var se = `fS9t6DH7Z-U-`,
  ce = `nu0EdzsNfaM-`,
  le = `Ti-54apdb-E-`;
function ue(e) {
  let {
      children: t,
      state: n,
      placement: r = `bottom-end`,
      popoverWidth: i = `dropdown`,
      popoverMaxHeight: a,
      popoverPresentation: o,
      popoverLabel: s,
      ...c
    } = e,
    [l, u] = (0, E.useState)(void 0);
  (0, E.useEffect)(() => u(void 0), [n.bOpen]);
  let d = _(),
    f = (0, E.useRef)(null),
    p = (0, E.useRef)(null),
    h = (0, E.useMemo)(
      () => n.rgFilteredOptions.findIndex((e) => e === n.selectedValue),
      [n.selectedValue, n.rgFilteredOptions],
    ),
    g = m({
      open: n.bOpen,
      onOpenChange: n.setOpen,
      width: i,
      maxHeight: a,
      placement: r,
      presentation: o,
      gutter: `4`,
      activeIndex: n.activeIndex,
      setActiveIndex: n.setActiveIndex,
      selectedIndex: h,
      setSelectedIndex: (e) => n.onItemSelectionChange(n.rgFilteredOptions[e]),
      interactions: { click: !0, virtualItemFocus: !d },
      role: `combobox`,
      scroll: !1,
    }),
    v = {
      ...n,
      ...c,
      focusedValue: l,
      onFocusChange: u,
      refPopover: f,
      refScrollElement: p,
      setOpen: (e) => {
        if (e) {
          let e = null;
          ((e = n.multiselect
            ? Array.isArray(n.selectedValue)
              ? n.selectedValue[0]
              : null
            : n.selectedValue),
            u(e),
            n.onInputChange(``));
        }
        n.setOpen(e);
      },
      onIndexSelected: (e) => {
        let t = g.elementsRef.current;
        t && t[e] && t[e].click();
      },
      popoverPlacement: g.floating.placement,
      popoverPresentation: g.presentation,
      popoverLabel: s,
    };
  return (0, D.jsx)(we.Provider, {
    value: v,
    children: (0, D.jsx)(S.Root, { state: g, children: t }),
  });
}
function G(e) {
  let {
      refPopover: t,
      inputValue: n,
      onInputChange: r,
      activeIndex: i,
      popoverPlacement: a,
      popoverPresentation: s,
      popoverLabel: c,
      multiselect: l,
      setActiveIndex: u,
      setOpen: d,
      filterPlaceholder: p,
      onIndexSelected: m,
      refScrollElement: h,
    } = Q(`<Combobox.Options>`),
    g = (0, E.useCallback)((e) => {
      e && e.focus({ preventScroll: !0 });
    }, []),
    _ = (e) => {
      e.key === `Enter` &&
        i !== null &&
        (m(i), l || (u(null), d(!1)), e.preventDefault(), e.stopPropagation());
    },
    v = s === `anchor` && a.startsWith(`top`),
    y = (0, D.jsx)(C, {
      overflow: `auto`,
      ref: h,
      style: { overscrollBehavior: `contain` },
      children: e.children,
    });
  return (0, D.jsx)(S.Positioner, {
    ref: t,
    label: c,
    children: (0, D.jsxs)(f, {
      direction: `column`,
      maxHeight: `var(--popover-max-height)`,
      children: [
        v && y,
        (0, D.jsx)(C, {
          flexShrink: `0`,
          className: o(se, v ? ce : le),
          children: (0, D.jsx)(O, {
            margin: `3`,
            variant: `inset`,
            radius: `sm`,
            value: n,
            onTextChange: r,
            onKeyDown: _,
            onKeyDownCapture: (e) => {
              (e.key === `Home` || e.key === `End`) && e.stopPropagation();
            },
            placeholder: p,
            inputRef: g,
            autoComplete: `off`,
          }),
        }),
        !v && y,
      ],
    }),
  });
}
var K = (0, E.createContext)(null);
function de(e) {
  let { items: t, renderItem: n, overscan: r = 5, ...i } = e,
    {
      bOpen: a,
      refPopover: o,
      refScrollElement: s,
    } = Q(`<ComboboxVirtualizedOptions>`),
    [c, l] = (0, E.useState)(!1),
    u = a && !!o.current && !!s.current;
  (0, E.useEffect)(() => {
    u !== c && l(u);
  }, [u, c]);
  let d = oe({
    count: c ? t.length : Math.min(t.length, 3),
    getScrollElement: () => s.current,
    enabled: a,
    measureElement: V,
    ...i,
  });
  return (0, D.jsx)(G, {
    children: (0, D.jsx)(K, {
      value: d,
      children: (0, D.jsx)(C, {
        height: `${d.getTotalSize()}px`,
        position: `relative`,
        width: `100%`,
        children: d.getVirtualItems().map((e) => n(t[e.index], e, d)),
      }),
    }),
  });
}
function q(e) {
  let { virtualItem: t, children: n } = e,
    r = (0, E.useContext)(K);
  return (
    x(r, `Virtual item rendered outside of a virtualizer!`),
    (0, D.jsx)(C, {
      position: `absolute`,
      width: `100%`,
      style: { top: 0, left: 0, transform: `translateY(${t.start}px)` },
      ref: r.measureElement,
      "data-index": t.index,
      children: n,
    })
  );
}
function fe(e) {
  let { virtualItem: t, ...n } = e;
  return (0, D.jsx)(q, { virtualItem: t, children: (0, D.jsx)(J, { ...n }) });
}
function pe(e) {
  let { virtualItem: t, children: n } = e;
  return (0, D.jsx)(q, { virtualItem: t, children: n });
}
function J(e) {
  let { value: t, children: n, disabled: r } = e,
    {
      onItemSelectionChange: i,
      selectedValue: a,
      multiselect: o,
      maxSelected: s,
    } = Q(`<Combobox.Option>`),
    c = !1,
    l = !1;
  o
    ? ((c = Array.isArray(a) && a.includes(t)),
      (l = !!s && Array.isArray(a) && a.length >= s))
    : (c = t === a);
  let u = r || (l && !c);
  return (0, D.jsxs)(S.Item, {
    onSelect: () => i(t),
    selected: c,
    disabled: u,
    children: [
      o &&
        (0, D.jsxs)(f, {
          gap: `2`,
          align: `center`,
          children: [(0, D.jsx)(b, { checked: c, variant: `dark` }), n],
        }),
      !o && n,
    ],
  });
}
function me(e) {
  let { children: t, beforeContent: n, render: r } = e,
    {
      bOpen: i,
      setOpen: a,
      inputValue: o,
      onInputChange: l,
      selectedValue: u,
      focusedValue: d,
      refScrollElement: f,
      onItemSelectionChange: p,
      activeIndex: m,
      setActiveIndex: _,
      onFocusChange: y,
      rgFilteredOptions: b,
      onSelectionChange: x,
      multiselect: C,
      onClear: T,
      refPopover: E,
      clearable: te,
      filterPlaceholder: O,
      onIndexSelected: ne,
      popoverPlacement: k,
      popoverPresentation: A,
      popoverLabel: j,
      maxSelected: M,
      variant: N,
      ...P
    } = Q(`<ComboboxTrigger>`),
    F = { tabIndex: 0, children: t },
    I = C ? Array.isArray(u) && u.length > 0 : u != null,
    L = I && te,
    R = L
      ? (0, D.jsx)(s, { onClick: T, cursor: `pointer`, hitSlop: !0 })
      : (0, D.jsx)(h, {}),
    z = L
      ? {
          onSecondaryButton: T,
          actionDescriptionMap: { [v.SECONDARY]: w.Localize(`#Clear`) },
        }
      : void 0,
    B = c(`Combobox`, N),
    V = (0, D.jsx)(ee, {
      beforeContent: n,
      afterContent: R,
      hasValue: I,
      cursor: `pointer`,
      tabIndex: 0,
      variant: B,
      navProps: z,
      ...P,
    }),
    H = g(r, V, F, void 0);
  return (0, D.jsx)(S.Anchor, { children: H });
}
function he(e) {
  return (0, D.jsx)(p, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ...e,
  });
}
function ge(e) {
  return (0, D.jsx)(p, { contrast: `description`, truncate: !0, ...e });
}
function Y(e, t) {
  if (typeof t == `string`)
    return t.toLocaleLowerCase().includes(e.toLocaleLowerCase());
  try {
    return JSON.stringify(t)
      .toLocaleLowerCase()
      .includes(e.toLocaleLowerCase());
  } catch {}
  return (
    console.error(
      `Could not use default option filter on provided Comboxbox option. Custom filter function required.`,
    ),
    !1
  );
}
function X(e) {
  return _e(e, !1);
}
function _e(e, t) {
  let {
      rgOptions: n,
      filter: r = Y,
      filterPlaceholder: i,
      selectedValue: a,
      onSelectionChange: o,
      maxSelected: s,
    } = e,
    [c, l] = (0, E.useState)(``),
    [u, d] = (0, E.useState)(!1),
    [f, p] = (0, E.useState)(null),
    m = (0, E.useMemo)(() => n.filter((e) => r(c, e)), [c, n, r]),
    h = typeof f == `number`,
    g = m.length > 0,
    _ = (0, E.useCallback)(
      (e) => {
        (e && !h && g && p(0), l(e));
      },
      [h, g],
    ),
    v = (0, E.useCallback)(
      (e) => {
        (e || _(``), d(e));
      },
      [_],
    ),
    y = (0, E.useCallback)(
      (e) => {
        (o(e), t || v(!1));
      },
      [t, o, v],
    );
  return {
    activeIndex: f,
    setActiveIndex: p,
    rgFilteredOptions: m,
    selectedValue: a,
    onSelectionChange: y,
    onItemSelectionChange: (0, E.useCallback)(
      (e) => {
        if (!t) y(e);
        else if (!a) y([e]);
        else {
          let t = a,
            n = t.indexOf(e);
          if (n === -1) y(t.concat(e));
          else return y(t.slice(0, n).concat(t.slice(n + 1)));
        }
      },
      [y, a, t],
    ),
    onClear: (e) => {
      (y(t ? [] : null), e?.stopPropagation(), e?.preventDefault());
    },
    inputValue: c,
    onInputChange: _,
    bOpen: u,
    setOpen: v,
    filterPlaceholder: i,
    multiselect: t,
    maxSelected: s,
  };
}
var ve = {
  Root: ue,
  Option: J,
  Options: G,
  VirtualizedOptions: de,
  VirtualizedOption: fe,
  VirtualizedContent: pe,
  Trigger: me,
  DefaultOptionFilter: Y,
  Value: he,
  Placeholder: ge,
};
function ye(e) {
  return e
    ? typeof e == `string`
      ? e
      : typeof e == `number`
        ? e.toString()
        : (console.error(
            `Could not use default option labeler on Combobox option value. Custom labeler requried`,
            e,
          ),
          ``)
    : ``;
}
function be(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = ye,
      ...c
    } = e,
    l = X({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, E.useCallback)((e, t) => (i ? i(e, t) : Y(e, s(t))), [i, s]),
      filterPlaceholder: a,
    }),
    u = t != null;
  return (0, D.jsxs)(Z.Root, {
    state: l,
    ...c,
    children: [
      (0, D.jsxs)(Z.Trigger, {
        children: [
          u && (0, D.jsx)(Z.Value, { children: s(t) }),
          !u && (0, D.jsx)(Z.Placeholder, { children: o }),
        ],
      }),
      (0, D.jsx)(Z.Options, {
        children: l.rgFilteredOptions.map((e) =>
          (0, D.jsx)(J, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var Z = Object.assign(be, ve);
function xe(e) {
  return _e(e, !0);
}
function Se(e) {
  let {
      selectedValue: t,
      onSelectionChange: n,
      options: r,
      filter: i,
      filterPlaceholder: a,
      placeholder: o,
      getOptionLabel: s = ye,
      maxSelected: c,
      ...l
    } = e,
    u = xe({
      onSelectionChange: n,
      selectedValue: t,
      rgOptions: r,
      filter: (0, E.useCallback)((e, t) => (i ? i(e, t) : Y(e, s(t))), [i, s]),
      filterPlaceholder: a,
      maxSelected: c,
    }),
    d = Array.isArray(t) && t.length > 0,
    f = ``;
  if (d) {
    let e = t.map((e) => s(e));
    f =
      `ListFormat` in Intl
        ? new Intl.ListFormat(T().strISOCode).format(e)
        : e.join(`, `);
  }
  return (0, D.jsxs)(Z.Root, {
    state: u,
    ...l,
    children: [
      (0, D.jsxs)(Z.Trigger, {
        children: [
          d && (0, D.jsx)(Z.Value, { children: f }),
          !d && (0, D.jsx)(Z.Placeholder, { children: o }),
        ],
      }),
      (0, D.jsx)(Z.Options, {
        children: u.rgFilteredOptions.map((e) =>
          (0, D.jsx)(Z.Option, { value: e, children: s(e) }, s(e)),
        ),
      }),
    ],
  });
}
var Ce = Object.assign(Se, ve),
  we = (0, E.createContext)(null);
function Q(e) {
  let t = (0, E.useContext)(we);
  return (t || console.error(`${e} must be used within a <Combobox>!`), t);
}
var $ = Symbol(`CoercingTextInputNotParseable`);
function Te(e) {
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
    [l, u] = (0, E.useState)(null),
    d = l ?? (t === void 0 ? `` : r(t)),
    f = (e) => {
      let t = i(e);
      t !== $ && e === r(t)
        ? (u(null), n(t))
        : (!a || a(e, t)) && (u(e), t !== $ && n(t, !0));
    },
    p = () => {
      if (l !== null) {
        let e = i(l);
        (e !== $ && n(e), u(null));
      }
    };
  return (0, D.jsx)(O, {
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
export { X as a, Ce as i, $ as n, xe as o, Z as r, O as s, Te as t };
