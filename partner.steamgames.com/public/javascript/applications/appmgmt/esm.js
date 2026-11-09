/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { kt as e, on as t } from "./mobx.esm.js";
import { E as n } from "./react-router.js";
var r = t(e(), 1),
  i = t(n(), 1);
function a(e, t, n) {
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
function o(e, t) {
  if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ``}`);
  return e;
}
var s = (e, t) => Math.abs(e - t) < 1.01,
  c = (e, t, n) => {
    let r;
    return function (...i) {
      (e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n)));
    };
  },
  l = (e) => {
    let { offsetWidth: t, offsetHeight: n } = e;
    return { width: t, height: n };
  },
  u = (e) => e,
  d = (e) => {
    let t = Math.max(e.startIndex - e.overscan, 0),
      n = Math.min(e.endIndex + e.overscan, e.count - 1),
      r = [];
    for (let e = t; e <= n; e++) r.push(e);
    return r;
  },
  f = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = (e) => {
      let { width: n, height: r } = e;
      t({ width: Math.round(n), height: Math.round(r) });
    };
    if ((i(l(n)), !r.ResizeObserver)) return () => {};
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
        i(l(n));
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
  p = { passive: !0 },
  m = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = () => {
      t({ width: n.innerWidth, height: n.innerHeight });
    };
    return (
      r(),
      n.addEventListener(`resize`, r, p),
      () => {
        n.removeEventListener(`resize`, r);
      }
    );
  },
  h = typeof window > `u` || `onscrollend` in window,
  g = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && h
          ? () => void 0
          : c(
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
      l = o(!1);
    (l(), n.addEventListener(`scroll`, s, p));
    let u = e.options.useScrollendEvent && h;
    return (
      u && n.addEventListener(`scrollend`, l, p),
      () => {
        (n.removeEventListener(`scroll`, s),
          u && n.removeEventListener(`scrollend`, l));
      }
    );
  },
  _ = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && h
          ? () => void 0
          : c(
              r,
              () => {
                t(i, !1);
              },
              e.options.isScrollingResetDelay,
            ),
      o = (r) => () => {
        ((i = n[e.options.horizontal ? `scrollX` : `scrollY`]), a(), t(i, r));
      },
      s = o(!0),
      l = o(!1);
    (l(), n.addEventListener(`scroll`, s, p));
    let u = e.options.useScrollendEvent && h;
    return (
      u && n.addEventListener(`scrollend`, l, p),
      () => {
        (n.removeEventListener(`scroll`, s),
          u && n.removeEventListener(`scrollend`, l));
      }
    );
  },
  v = (e, t, n) => {
    if (t?.borderBoxSize) {
      let e = t.borderBoxSize[0];
      if (e)
        return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  y = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  b = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  x = class {
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
              getItemKey: u,
              rangeExtractor: d,
              onChange: () => {},
              measureElement: v,
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
        (this.maybeNotify = a(
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
        (this.getMeasurementOptions = a(
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
        (this.getMeasurements = a(
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
        (this.calculateRange = a(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (e, t, n, r) =>
            (this.range =
              e.length > 0 && t > 0
                ? C({
                    measurements: e,
                    outerSize: t,
                    scrollOffset: n,
                    lanes: r,
                  })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualIndexes = a(
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
        (this.getVirtualItems = a(
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
            return o(t[S(0, t.length - 1, (e) => o(t[e]).start, e)]);
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
                    ? s(n[0], t) || a(o)
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
  S = (e, t, n, r) => {
    for (; e <= t;) {
      let i = ((e + t) / 2) | 0,
        a = n(i);
      if (a < r) e = i + 1;
      else if (a > r) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
function C({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  let i = e.length - 1,
    a = (t) => e[t].start;
  if (e.length <= r) return { startIndex: 0, endIndex: i };
  let o = S(0, i, a, n),
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
var w = typeof document < `u` ? r.useLayoutEffect : r.useEffect;
function T(e) {
  let t = r.useReducer(() => ({}), {})[1],
    n = {
      ...e,
      onChange: (n, r) => {
        var a;
        (r ? (0, i.flushSync)(t) : t(),
          (a = e.onChange) == null || a.call(e, n, r));
      },
    },
    [a] = r.useState(() => new x(n));
  return (
    a.setOptions(n), w(() => a._didMount(), []), w(() => a._willUpdate()), a
  );
}
function E(e) {
  return T({
    observeElementRect: f,
    observeElementOffset: g,
    scrollToFn: b,
    ...e,
  });
}
function D(e) {
  return T({
    getScrollElement: () => (typeof document < `u` ? window : null),
    observeElementRect: m,
    observeElementOffset: _,
    scrollToFn: y,
    initialOffset: () => (typeof document < `u` ? window.scrollY : 0),
    ...e,
  });
}
export { v as a, b as i, D as n, y as o, d as r, E as t };
