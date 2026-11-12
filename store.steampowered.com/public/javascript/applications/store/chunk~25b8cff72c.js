/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  B as t,
  F as n,
  H as r,
  It as i,
  L as a,
  Lt as o,
  N as s,
  P as c,
  U as l,
  V as u,
  ft as d,
  st as f,
  yt as p,
} from "./chunk~01cfc309bf.js";
import { Eo as m, Nt as h, Vt as g, ti as _ } from "./chunk~6b8ddcaac8.js";
import { t as v } from "./chunk~8681f5c764.js";
import { t as y } from "./chunk~eefd71512b.js";
import { u as b } from "./chunk~e867464c75.js";
import { t as ee } from "./chunk~466a63c735.js";
import { i as x, n as te } from "./chunk~c0171774da.js";
import { n as S, t as ne } from "./chunk~d382bdf2cf.js";
import {
  a as C,
  i as w,
  n as T,
  o as re,
  r as ie,
} from "./chunk~a7c5e71e12.js";
import { i as ae, n as oe, t as E } from "./chunk~a6c148633d.js";
import {
  a as se,
  i as ce,
  n as le,
  o as ue,
  r as de,
  t as fe,
} from "./chunk~aeb15068c6.js";
import {
  $y as D,
  A as pe,
  Ar as me,
  C as he,
  D as ge,
  Da as _e,
  Dl as ve,
  Do as ye,
  E as be,
  Eo as xe,
  F as O,
  Fu as Se,
  Gl as Ce,
  Gx as we,
  Ho as Te,
  Hr as Ee,
  I as De,
  Io as Oe,
  Jy as k,
  Kl as ke,
  Mn as A,
  Mr as Ae,
  N as je,
  Nr as Me,
  O as Ne,
  Oc as Pe,
  On as Fe,
  P as Ie,
  Pa as Le,
  Pv as Re,
  Qx as ze,
  Qy as Be,
  T as Ve,
  To as He,
  Tr as Ue,
  Ul as We,
  Vr as Ge,
  Vy as j,
  Wb as Ke,
  Wl as qe,
  Yn as Je,
  Yy as Ye,
  Za as Xe,
  _b as Ze,
  _i as Qe,
  _l as $e,
  _u as et,
  ar as M,
  cx as N,
  do as tt,
  eb as nt,
  er as rt,
  fb as it,
  fn as P,
  fr as at,
  gr as ot,
  gu as st,
  hb as ct,
  hr as lt,
  hu as ut,
  il as dt,
  ir as ft,
  jc as F,
  k as pt,
  kn as I,
  ll as mt,
  ly as ht,
  mr as L,
  ol as R,
  or as gt,
  oy as _t,
  pi as vt,
  pn as yt,
  py as z,
  q as bt,
  qr as xt,
  qy as St,
  sb as Ct,
  sy as wt,
  ub as Tt,
  ur as Et,
  ut as Dt,
  wc as B,
  wn as Ot,
  wo as kt,
  xc as At,
  yb as jt,
  yl as Mt,
  yo as Nt,
  yx as Pt,
} from "./main.js";
import { t as Ft } from "./chunk~dfd7856dfa.js";
import "./chunk~ec93a260ba.js";
import {
  C as It,
  D as Lt,
  E as Rt,
  O as zt,
  S as Bt,
  T as V,
  _ as Vt,
  a as Ht,
  b as H,
  c as Ut,
  d as Wt,
  f as U,
  g as Gt,
  h as Kt,
  i as qt,
  k as Jt,
  l as Yt,
  m as Xt,
  n as Zt,
  o as Qt,
  p as W,
  r as $t,
  s as en,
  t as G,
  u as tn,
  v as nn,
  w as rn,
  x as an,
  y as K,
} from "./chunk~0ef7cd9db7.js";
import { i as q } from "./chunk~65da1d3223.js";
import { n as on, t as sn } from "./chunk~1f9175251c.js";
import { n as cn } from "./chunk~f6ebb80c8b.js";
import { t as ln } from "./chunk~0411c935a1.js";
import { s as un } from "./chunk~915930a63a.js";
function dn(e, t, n) {
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
function fn(e, t) {
  if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ``}`);
  return e;
}
var pn = (e, t) => Math.abs(e - t) < 1.01,
  mn = (e, t, n) => {
    let r;
    return function (...i) {
      (e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n)));
    };
  },
  hn = (e) => {
    let { offsetWidth: t, offsetHeight: n } = e;
    return { width: t, height: n };
  },
  gn = (e) => e,
  _n = (e) => {
    let t = Math.max(e.startIndex - e.overscan, 0),
      n = Math.min(e.endIndex + e.overscan, e.count - 1),
      r = [];
    for (let e = t; e <= n; e++) r.push(e);
    return r;
  },
  vn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = (e) => {
      let { width: n, height: r } = e;
      t({ width: Math.round(n), height: Math.round(r) });
    };
    if ((i(hn(n)), !r.ResizeObserver)) return () => {};
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
        i(hn(n));
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
  yn = { passive: !0 },
  bn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = () => {
      t({ width: n.innerWidth, height: n.innerHeight });
    };
    return (
      r(),
      n.addEventListener(`resize`, r, yn),
      () => {
        n.removeEventListener(`resize`, r);
      }
    );
  },
  xn = typeof window > `u` || `onscrollend` in window,
  Sn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && xn
          ? () => void 0
          : mn(
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
    (c(), n.addEventListener(`scroll`, s, yn));
    let l = e.options.useScrollendEvent && xn;
    return (
      l && n.addEventListener(`scrollend`, c, yn),
      () => {
        (n.removeEventListener(`scroll`, s),
          l && n.removeEventListener(`scrollend`, c));
      }
    );
  },
  Cn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && xn
          ? () => void 0
          : mn(
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
      c = o(!1);
    (c(), n.addEventListener(`scroll`, s, yn));
    let l = e.options.useScrollendEvent && xn;
    return (
      l && n.addEventListener(`scrollend`, c, yn),
      () => {
        (n.removeEventListener(`scroll`, s),
          l && n.removeEventListener(`scrollend`, c));
      }
    );
  },
  wn = (e, t, n) => {
    if (t?.borderBoxSize) {
      let e = t.borderBoxSize[0];
      if (e)
        return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  Tn = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  En = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  Dn = class {
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
              getItemKey: gn,
              rangeExtractor: _n,
              onChange: () => {},
              measureElement: wn,
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
        (this.maybeNotify = dn(
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
        (this.getMeasurementOptions = dn(
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
        (this.getMeasurements = dn(
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
        (this.calculateRange = dn(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (e, t, n, r) =>
            (this.range =
              e.length > 0 && t > 0
                ? kn({
                    measurements: e,
                    outerSize: t,
                    scrollOffset: n,
                    lanes: r,
                  })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualIndexes = dn(
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
        (this.getVirtualItems = dn(
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
            return fn(t[On(0, t.length - 1, (e) => fn(t[e]).start, e)]);
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
                    ? pn(n[0], t) || a(o)
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
  On = (e, t, n, r) => {
    for (; e <= t;) {
      let i = ((e + t) / 2) | 0,
        a = n(i);
      if (a < r) e = i + 1;
      else if (a > r) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
function kn({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  let i = e.length - 1,
    a = (t) => e[t].start;
  if (e.length <= r) return { startIndex: 0, endIndex: i };
  let o = On(0, i, a, n),
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
var J = e(o(), 1),
  An = e(i(), 1),
  jn = typeof document < `u` ? J.useLayoutEffect : J.useEffect;
function Mn(e) {
  let t = J.useReducer(() => ({}), {})[1],
    n = {
      ...e,
      onChange: (n, r) => {
        var i;
        (r ? (0, An.flushSync)(t) : t(),
          (i = e.onChange) == null || i.call(e, n, r));
      },
    },
    [r] = J.useState(() => new Dn(n));
  return (
    r.setOptions(n), jn(() => r._didMount(), []), jn(() => r._willUpdate()), r
  );
}
function Nn(e) {
  return Mn({
    observeElementRect: vn,
    observeElementOffset: Sn,
    scrollToFn: En,
    ...e,
  });
}
function Pn(e) {
  return Mn({
    getScrollElement: () => (typeof document < `u` ? window : null),
    observeElementRect: bn,
    observeElementOffset: Cn,
    scrollToFn: Tn,
    initialOffset: () => (typeof document < `u` ? window.scrollY : 0),
    ...e,
  });
}
var Fn = `F0yrVzJ4EkQ-`,
  In = `EYebA7kYJcU-`,
  Ln = `kTBEffSCimA-`,
  Rn = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  zn = `k03Dln9WiwM-`,
  Y = d(),
  Bn = J.memo(function (e) {
    let {
        virtualizer: t,
        bDynamic: n,
        scrollAlign: r,
        bNativeScrollIntoView: i,
        idx: a,
        rowGap: o,
        renderItem: s,
      } = e,
      c = J.useCallback(
        (e, n, i) => (t.scrollToIndex(a, { align: r }), !0),
        [t, a, r],
      );
    return (0, Y.jsx)(F, {
      ref: n ? t.measureElement : void 0,
      navKey: `VirtualizedListIndex-${a}`,
      "data-index": a,
      fnScrollIntoViewHandler: i ? void 0 : c,
      scrollIntoViewWhenChildFocused: `force`,
      style: { width: `100%`, paddingBottom: o },
      children: s(a),
    });
  });
function Vn(e) {
  return qe(
    (t) => {
      if (!t) return;
      let n = new t.ownerDocument.defaultView.ResizeObserver((t) => {
          e(t[0]);
        }),
        r = [],
        i = t;
      for (; i && i != null;) (n.observe(i), r.push(i), (i = i.parentElement));
      return () => {
        r.forEach((e) => n.unobserve(e));
      };
    },
    [e],
  );
}
function Hn(e, t) {
  let n = e.getBoundingClientRect().top;
  return t
    ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
    : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
}
var Un = J.forwardRef(function (e, t) {
  let {
      nRows: n,
      nItemHeight: r,
      nRowGap: i,
      overscan: a,
      renderItem: o,
      getItemKey: s,
      bDynamic: c,
      measureElement: l,
      className: u,
      forceVirtualizeType: d,
      hintVirtualizeType: f,
      scrollAlign: p,
      bNativeScrollIntoView: m,
      bNoOverscanOffscreen: h,
      bBrowserScrollAnchoring: g,
      initialOffset: _,
      onOffsetChange: v,
      ...y
    } = e,
    [b, ee] = (0, J.useState)(d ?? f),
    [x, te] = J.useState(),
    [S, ne] = J.useState(),
    [C, w] = J.useState(),
    T = J.useRef(null),
    re = J.useCallback(
      (e) => {
        if (!e) return;
        let t = Mt(e, `y`),
          n = Hn(e, d == `window` ? null : t),
          r = t?.getBoundingClientRect(),
          i = () => {
            (d != `window` &&
              (te(t || void 0),
              ne((e) => {
                if (!r) return;
                let t = Math.round(r.width),
                  n = Math.round(r.height);
                return e?.width == t && e?.height == n
                  ? e
                  : { width: t, height: n };
              })),
              w(n),
              d || ee(t ? `element` : `window`));
          };
        h ? i() : (0, J.startTransition)(i);
      },
      [d, h],
    ),
    ie = J.useRef(x);
  ie.current = x;
  let ae = Vn(
      J.useCallback(() => {
        if (!T.current) return;
        let e = Hn(T.current, ie.current);
        (0, J.startTransition)(() => {
          w(e);
        });
      }, []),
    ),
    oe = We(re, T, ae, t),
    E = {
      nRows: n,
      nItemHeight: r,
      nRowGap: i,
      overscan: a,
      renderItem: o,
      getItemKey: s,
      bDynamic: c,
      measureElement: l,
      forceVirtualizeType: d,
      hintVirtualizeType: f,
      scrollAlign: p,
      bNativeScrollIntoView: m,
      bNoOverscanOffscreen: h,
      bBrowserScrollAnchoring: g,
      initialOffset: _,
      onOffsetChange: v,
    };
  return (0, Y.jsx)(F, {
    className: u,
    ref: oe,
    ...y,
    children: (0, Y.jsxs)(J.Suspense, {
      children: [
        b === `element` &&
          (0, Y.jsx)(Jn, {
            ...E,
            nScrollMargin: C,
            elScrollable: x,
            rectScrollable: S,
          }),
        b === `window` && (0, Y.jsx)(qn, { ...E, nScrollMargin: C }),
      ],
    }),
  });
});
function Wn(e, t, n) {
  J.useEffect(() => {
    n ||
      (0, J.startTransition)(() => {
        e.measure();
      });
  }, [e, t, n]);
}
function Gn(e, t, n) {
  if (!t) return `first`;
  let r = e.options.scrollMargin,
    i = r + e.getTotalSize(),
    a = e.scrollOffset ?? 0;
  return r > a + (e.scrollRect ?? e.options.initialRect).height + n
    ? `first`
    : i < a - n
      ? `last`
      : `all`;
}
function Kn(e, t, n) {
  let [, r] = (0, J.useState)(0),
    i = J.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: `all` });
  ((i.current.bPositionKnown = t), (i.current.nMargin = n));
  let a = J.useCallback(
    (e, t) =>
      Zn(e, (n, a) => {
        t(n, a);
        let { bPositionKnown: o, nMargin: s, eRowWindow: c } = i.current;
        Gn(e, o, s) != c && r((e) => e + 1);
      }),
    [],
  );
  return {
    observeElementOffset: e ? a : Zn,
    fnGetRowWindow: (r) => {
      let a = e ? Gn(r, t, n) : `all`;
      return ((i.current.eRowWindow = a), a);
    },
  };
}
function qn(e) {
  let {
    nScrollMargin: t,
    nRows: n,
    nItemHeight: r,
    nRowGap: i = 10,
    overscan: a = 6,
    initialOffset: o,
    onOffsetChange: s,
    measureElement: c,
    getItemKey: l,
    bDynamic: u,
    bNoOverscanOffscreen: d,
    bBrowserScrollAnchoring: f,
  } = e;
  _e();
  let p = r + i,
    { observeElementOffset: m, fnGetRowWindow: h } = Kn(d, t !== void 0, a * p),
    g = Pn({
      count: n,
      scrollMargin: t,
      estimateSize: J.useCallback(() => p, [p]),
      measureElement: c,
      getItemKey: l,
      overscan: a,
      initialOffset: o ?? (() => window.scrollY),
      initialRect: void 0,
      observeElementOffset: m,
      observeElementRect: Qn,
      onChange(e, t) {
        s?.(e.scrollOffset);
      },
    });
  return (
    (g.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !f && t !== void 0 && e.start < (g.scrollOffset ?? 0)),
    Wn(g, p, u),
    (0, Y.jsx)(Yn, { ...e, virtualizer: g, eRowWindow: h(g) })
  );
}
function Jn(e) {
  let {
      nRows: t,
      nScrollMargin: n,
      elScrollable: r,
      rectScrollable: i,
      nItemHeight: a,
      nRowGap: o = 10,
      overscan: s = 6,
      initialOffset: c,
      onOffsetChange: l,
      measureElement: u,
      getItemKey: d,
      bDynamic: f,
      bNoOverscanOffscreen: p,
      bBrowserScrollAnchoring: m,
    } = e,
    h = a + o,
    g = _e(),
    { observeElementOffset: _, fnGetRowWindow: v } = Kn(
      p,
      r !== void 0 && n !== void 0,
      s * h,
    ),
    y = Nn({
      count: t,
      scrollMargin: n ?? 0,
      getScrollElement: () => (
        r &&
          y.scrollElement !== r &&
          c === void 0 &&
          (y.scrollOffset = r.scrollTop),
        r ?? null
      ),
      estimateSize: J.useCallback(() => h, [h]),
      measureElement: u,
      getItemKey: d,
      overscan: s,
      initialRect: r
        ? i
        : {
            height: g.viewportHeight?.value ?? 1e3,
            width: g.viewportWidth?.value ?? 1e3,
          },
      initialOffset: c,
      observeElementOffset: _,
      observeElementRect: $n,
      onChange(e, t) {
        l?.(e.scrollOffset);
      },
    });
  return (
    (y.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !m && r !== void 0 && e.start < (y.scrollOffset ?? 0)),
    Wn(y, h, f),
    (0, Y.jsx)(Yn, { ...e, virtualizer: y, eRowWindow: v(y) })
  );
}
function Yn(e) {
  let {
      virtualizer: t,
      eRowWindow: n,
      nRowGap: r,
      renderItem: i,
      bDynamic: a,
      scrollAlign: o = `center`,
      bNativeScrollIntoView: s,
    } = e,
    c = t.getVirtualItems(),
    l =
      n == `first`
        ? t.measurementsCache[0]
        : t.measurementsCache[t.measurementsCache.length - 1],
    u = n == `all` ? c : l ? [l] : [],
    d = u.length ? u[0].start - t.options.scrollMargin : 0,
    f = Math.max(0, t.getTotalSize());
  return (0, Y.jsx)(F, {
    "flow-children": `column`,
    navEntryPreferPosition: $e.MAINTAIN_Y,
    style: { height: `${f}px`, width: `100%`, position: `relative` },
    children: (0, Y.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${d}px )`,
      },
      children: u.map((e) =>
        (0, Y.jsx)(
          Bn,
          {
            virtualizer: t,
            bDynamic: a,
            scrollAlign: o,
            bNativeScrollIntoView: s,
            idx: e.index,
            rowGap: r,
            renderItem: i,
          },
          e.key,
        ),
      ),
    }),
  });
}
function Xn(e) {
  return (...t) => {
    queueMicrotask(() => {
      (0, J.startTransition)(() => {
        e(...t);
      });
    });
  };
}
function Zn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r;
  r =
    `scrollX` in n
      ? Xn((r) => t(n[e.options.horizontal ? `scrollX` : `scrollY`], r))
      : Xn((r) => t(n[e.options.horizontal ? `scrollLeft` : `scrollTop`], r));
  let i = () => r(!0),
    a = () => r(!1);
  return (
    a(),
    n.addEventListener(`scroll`, i, { passive: !0 }),
    n.addEventListener(`scrollend`, a, { passive: !0 }),
    () => {
      (n.removeEventListener(`scroll`, i),
        n.removeEventListener(`scrollend`, a));
    }
  );
}
function Qn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Xn(() => t({ width: n.innerWidth, height: n.innerHeight }));
  return (
    r(),
    n.addEventListener(`resize`, r, { passive: !0 }),
    () => {
      n.removeEventListener(`resize`, r);
    }
  );
}
function $n(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Xn((e) =>
    t({ width: Math.round(e.width), height: Math.round(e.height) }),
  );
  r(n.getBoundingClientRect());
  let i = n.ownerDocument.defaultView;
  if (!i?.ResizeObserver) return () => {};
  let a = new i.ResizeObserver((e) => {
    e[0]?.borderBoxSize[0]
      ? r({
          width: e[0].borderBoxSize[0].inlineSize,
          height: e[0].borderBoxSize[0].blockSize,
        })
      : r(n.getBoundingClientRect());
  });
  return (
    a.observe(n, { box: `border-box` }),
    () => {
      a.unobserve(n);
    }
  );
}
function er(e) {
  let {
      idxStart: t,
      idxEnd: n,
      renderItem: r,
      height: i,
      itemWidth: a,
      columnGap: o,
    } = e,
    s = [];
  for (let e = t; e < n; e++) s.push(r(e, a));
  return (0, Y.jsx)(F, {
    className: zn,
    style: { height: i, gap: o },
    children: s,
  });
}
function tr(e) {
  let {
      nItems: t,
      renderItem: n,
      nAspectRatio: r,
      nColumns: i = 7,
      nColumnGap: a = 10,
      nRowGap: o = 10,
      onWidthChanged: s,
    } = e,
    [c, l] = J.useState(0),
    u = Math.ceil(t / i),
    d = Math.max(0, Math.floor((c - (i - 1) * a) / i)),
    f = Math.floor(d / r),
    p = J.useCallback(
      (e) => {
        (l(e.borderBoxSize[0].inlineSize),
          s &&
            s(
              e.target.ownerDocument.defaultView?.innerWidth || 0,
              e.borderBoxSize[0].inlineSize,
            ));
      },
      [s],
    ),
    m = dt(p);
  return (0, Y.jsx)(Un, {
    ref: m,
    nRows: u,
    nItemHeight: f,
    nRowGap: o,
    renderItem: (e) =>
      (0, Y.jsx)(
        er,
        {
          idxStart: e * i,
          idxEnd: Math.min(t, (e + 1) * i),
          height: f,
          itemWidth: d,
          columnGap: a,
          renderItem: n,
        },
        e,
      ),
  });
}
var nr = e(s(), 1);
function rr(e) {
  let { app: t, width: n, index: r, renderItem: i } = e,
    [a, o] = J.useState(`loading`),
    s = Pe(t.appid);
  if (s === void 0) return null;
  let c = a == `error` || !s,
    l;
  return (
    (l = c
      ? (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(`img`, {
              className: In,
              src: Rn,
              alt: t.name,
              loading: `lazy`,
            }),
            (0, Y.jsx)(`div`, { className: Ln, children: t.name }),
          ],
        })
      : (0, Y.jsx)(`img`, {
          className: In,
          src: s,
          alt: t.name,
          onLoad: () => o(`loaded`),
          onError: () => o(`error`),
        })),
    i(t, r, {
      className: (0, nr.default)(Fn, (c || a == `loaded`) && `VrF8YC9c1R8-`),
      style: { width: n },
      fnScrollIntoViewHandler: () => !0,
      children: l,
    })
  );
}
function ir(e) {
  let { rgApps: t, renderItem: n, ...r } = e,
    i = J.useCallback(
      (e, r) => {
        let i = t[e];
        return (0, Y.jsx)(
          rr,
          { app: i, width: r, index: e, renderItem: n },
          i.appid,
        );
      },
      [t, n],
    );
  return (0, Y.jsx)(tr, {
    nItems: t.length,
    renderItem: i,
    nAspectRatio: 600 / 900,
    ...r,
  });
}
var ar = `Y40SQPXX5oQ-`,
  or = `zCRrFtmBzfE-`,
  sr = `L5LbiQQqjag-`,
  cr = `qmn8k6ba2eU-`,
  lr = `KoZvs-2luog-`,
  ur = `cuyTu9NS4KM-`,
  dr = `iWLBT-TcMv4-`,
  fr = `niLIWmhI1js-`,
  pr = `oopo3Ku8mhg-`,
  mr = `CxU4ntOFsQQ-`,
  hr = `_9osVXUhcbdU-`,
  gr = `NIvLAfv4LAU-`,
  _r = `GlXtC9FjEn0-`,
  vr = `giqUsooCFVw-`,
  yr = `p3HBhguzwZk-`,
  br = `j4i41f9JjvI-`,
  xr = `O3Jk02D0k5M-`,
  Sr = `lZjvDTc7fbY-`,
  Cr = `BWetszd5oQ8-`,
  wr = `G57tn4BJPXw-`;
function Tr(e) {
  return {
    queryKey: [`communitypreferences`],
    queryFn: async () => {
      let t = Pt.Init(bt),
        n = await Dt.GetCommunityPreferences(e, t);
      if (n.GetEResult() != 1)
        throw Error(
          `Error from GetCommunityPreferences: ${n.GetEResult()} ${n.GetErrorMessage()}`,
        );
      return n.Body();
    },
    staleTime: 3e5,
  };
}
function X() {
  let e = ht();
  return f(Tr(e));
}
function Er(e) {
  return (0, Y.jsx)(xe, {});
}
function Dr(e) {
  return (0, Y.jsx)(ye, {});
}
function Or(e) {
  return (0, Y.jsx)(`div`, {
    className: B(_r, e.className),
    children: e.role == 2 ? (0, Y.jsx)(Dr, {}) : (0, Y.jsx)(Er, {}),
  });
}
function kr(e) {
  let { steamid: t } = e,
    n = S(t),
    r = E(),
    i = X(),
    a = r.data?.get(new j(t).GetAccountID()),
    o = i.data?.preferences().parenthesize_nicknames();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      n.data?.m_strPlayerName || `\xA0`,
      ` `,
      o &&
        a &&
        (0, Y.jsxs)(`span`, { className: void 0, children: [`(`, a, `)`] }),
    ],
  });
}
function Ar(e) {
  let { role: t, persona: n, isSelf: r } = e,
    i = e.size || `Large`,
    a = E(),
    o = X(),
    s = a.data?.get(n.GetAccountID()),
    c = o.data?.preferences().parenthesize_nicknames();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(`div`, {
        className: vr,
        children: [
          (0, Y.jsx)(q, {
            className: void 0,
            persona: n,
            size: i,
            statusPosition: `right`,
          }),
          (0, Y.jsx)(on, {
            className: yr,
            bIsSelf: r,
            bHideStatus: !1,
            bHidePersona: !1,
            bParenthesizeNicknames: c,
            bCompactView: !1,
            persona: n,
            strNickname: s,
            eFriendRelationship: 3,
            bEllipsisName: !0,
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: br,
        children: [
          (0, Y.jsx)(Or, { className: void 0, role: t }),
          (0, Y.jsx)(`div`, {
            className: xr,
            children: k(`#FamilyManagement_Role_${t}`),
          }),
        ],
      }),
    ],
  });
}
function jr(e) {
  let t = (0, J.useContext)(Zt);
  return t.errorMessage
    ? (0, Y.jsx)(`div`, { className: Sr, children: t.errorMessage })
    : null;
}
function Mr(e) {
  let { persona: t, role: n, invitePending: r } = e,
    i = z() == t.GetSteamIDAsString();
  return (0, Y.jsxs)(`div`, {
    className: Cr,
    children: [
      (0, Y.jsx)(Ar, { role: n, persona: t, isSelf: i }),
      r &&
        (0, Y.jsx)(`div`, {
          className: `AlTotQVWTmI-`,
          children: k(`#FamilyManagement_InvitePending`),
        }),
      i &&
        (0, Y.jsx)(`span`, {
          className: `BeFK8ZlH3Wk-`,
          children: k(`#FamilyManagement_Me`),
        }),
    ],
  });
}
function Nr(e, t) {
  return new URLSearchParams(e.search).get(t);
}
var Pr = `invitation`,
  Fr = `nonce`;
function Ir(e) {
  let { cooldownSecondsRemaining: t } = e;
  return (0, Y.jsx)(`div`, {
    className: gr,
    children: k(
      `#FamilyManagement_CooldownAllowed`,
      Ct(Date.now() / 1e3 + t, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        weekday: void 0,
      }),
    ),
  });
}
function Lr(e) {
  let { inviterSteamID: n, familyGroupID: r, role: i, inviteID: a } = e,
    o = z(),
    s = Qt(r),
    c = en(r, o),
    l = S(n),
    d = Yt(r, a),
    [f, p] = (0, J.useState)(!1),
    [m, h] = (0, J.useState)(!1),
    [g, _] = (0, J.useState)(``),
    { setErrorMessage: v } = V();
  H(l, `#FamilyManagement_ErrorLoadFamilyInviteGeneric`);
  let b = t(),
    ee = !!Nr(u(), Pr);
  (K(s, `#FamilyManagement_ErrorAcceptInvite`, G.k_EFamilyQueryJoinFamily),
    K(
      c,
      `#FamilyManagement_ErrorDeclineInvite`,
      G.k_EFamilyQueryDeclineInvite,
    ));
  let x = W();
  if (
    (x.isSuccess &&
      (x.data.is_not_member_of_any_group() ||
        b.push(`/account/familymanagement`)),
    l.isError)
  )
    return null;
  if (l.isLoading)
    return (0, Y.jsx)(`div`, { className: hr, children: (0, Y.jsx)(y, {}) });
  let te = () => {
      (v(null),
        s.mutate(null, {
          onSuccess: (e) => {
            (e.cooldown_skip_granted() && h(!0),
              e.two_factor_method() === 1
                ? N.IN_MOBILE_WEBVIEW
                  ? (window.location.href = `steammobile://confirmations?first_of_type=11`)
                  : p(`awaitmobile2fa`)
                : e.two_factor_method() === 2
                  ? p(`awaitemail2fa`)
                  : b.push(`/account/familymanagement`));
          },
        }));
    },
    ne = () => {
      (v(null), c.mutate(), ee && b.push(`/account/familymanagement`));
    },
    C = l.data,
    w = () => p(!1),
    T = () => b.push(`/account/familymanagement`);
  return (0, Y.jsxs)(`div`, {
    className: ar,
    children: [
      (0, Y.jsxs)(P, {
        active: !!f,
        children: [
          f === `explanation` &&
            (0, Y.jsxs)(A, {
              title: k(`#FamilyManagement_RoleDescriptionLongHeader_${i}`),
              closeModal: w,
              children: [
                i === 1 ? (0, Y.jsx)(Rr, {}) : (0, Y.jsx)(zr, {}),
                (0, Y.jsx)(M, {
                  onClick: w,
                  children: k(`#FamilyManagement_Close`),
                }),
              ],
            }),
          f === `confirm` &&
            (0, Y.jsx)(I, {
              closeModal: w,
              onCancel: w,
              onOK: te,
              strTitle: k(`#FamilyManagement_ConfirmJoinDialog`),
              children: Ye(
                `#FamilyManagement_ConfirmJoin_${i}`,
                (0, Y.jsx)(`b`, {}),
              ),
            }),
          f === `awaitmobile2fa` &&
            (0, Y.jsxs)(A, {
              title: k(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: T,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: k(
                    ((e) =>
                      e
                        ? N.IN_MOBILE_WEBVIEW
                          ? `#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp`
                          : `#FamilyManagement_Await2FAForJoin_Description_Mobile`
                        : `#FamilyManagement_Await2FAForJoin_Description_Email`)(
                      f === `awaitmobile2fa`,
                    ),
                  ),
                }),
                m &&
                  (0, Y.jsx)(Ir, {
                    cooldownSecondsRemaining:
                      x.data.cooldown_seconds_remaining(),
                  }),
                m &&
                  (0, Y.jsx)(`div`, {
                    className: `NIvLAfv4LAU-`,
                    children: k(`#FamilyManagement_CooldownAllowed_2_Join`),
                  }),
                (0, Y.jsx)(M, {
                  onClick: T,
                  children: k(`#FamilyManagement_Close`),
                }),
              ],
            }),
          f === `awaitemail2fa` &&
            (0, Y.jsxs)(A, {
              title: k(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: T,
              children: [
                i === 2 &&
                  (0, Y.jsxs)(F, {
                    className: `PYI2fW8ZVOY-`,
                    children: [
                      (0, Y.jsx)(F, {
                        className: `NIvLAfv4LAU-`,
                        children: k(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_1`,
                        ),
                      }),
                      (0, Y.jsx)(F, {
                        className: `NIvLAfv4LAU-`,
                        children: Ye(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_2`,
                          (0, Y.jsx)(`a`, {
                            href: `${N.HELP_BASE_URL}/wizard/HelpChangePassword`,
                          }),
                        ),
                      }),
                    ],
                  }),
                (0, Y.jsx)(F, {
                  className: `NIvLAfv4LAU-`,
                  children: k(
                    `#FamilyManagement_Await2FAForJoin_Description_Email`,
                  ),
                }),
                (0, Y.jsx)(F, {
                  className: `e61iZLcZtvg-`,
                  children: (0, Y.jsx)(mt, {
                    className: void 0,
                    type: `text`,
                    onChange: (e) => {
                      (_(e.target.value), v(null));
                    },
                    value: g,
                    placeholder: k(
                      `#FamilyManagement_Await2FAForJoin_InputPlaceholder`,
                    ),
                    maxLength: 128,
                  }),
                }),
                (0, Y.jsxs)(F, {
                  className: `_5ru43GZ9T0M-`,
                  children: [
                    (0, Y.jsx)(L, {
                      onClick: async () => {
                        d.mutateAsync(g).then(T);
                      },
                      children: k(
                        `#FamilyManagement_AwaitCodeFromEmail_Confirm`,
                      ),
                    }),
                    (0, Y.jsx)(M, {
                      onClick: w,
                      children: k(
                        `#FamilyManagement_AwaitCodeFromEmail_Cancel`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          f == `alreadyaccepted` &&
            (0, Y.jsxs)(A, {
              title: k(`#FamilyManagement_AlreadyAccepted_Header`),
              closeModal: T,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: k(`#FamilyManagement_AlreadyAccepted_Text`),
                }),
                (0, Y.jsx)(M, {
                  onClick: T,
                  children: k(`#FamilyManagement_Close`),
                }),
              ],
            }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: or,
        children: [
          (0, Y.jsx)(`a`, {
            className: void 0,
            href: C.GetCommunityProfileURL(),
            children: (0, Y.jsx)(q, {
              className: sr,
              persona: C,
              size: `Large`,
              statusPosition: `right`,
            }),
          }),
          (0, Y.jsx)(`div`, {
            className: void 0,
            children: D(
              i === 1
                ? `#FamilyManagement_PendingFamilyInviteInviteText_Adult`
                : `#FamilyManagement_PendingFamilyInviteInviteText_Child`,
              (0, Y.jsx)(`a`, {
                className: void 0,
                href: C.GetCommunityProfileURL(),
                children: (0, Y.jsx)(`span`, {
                  className: cr,
                  children: C?.m_strPlayerName,
                }),
              }),
              (0, Y.jsxs)(`div`, {
                className: ur,
                children: [
                  (0, Y.jsx)(Or, { className: lr, role: i }),
                  (0, Y.jsx)(`span`, {
                    className: dr,
                    children: k(`#FamilyManagement_Role_${i}`),
                  }),
                ],
              }),
            ),
          }),
        ],
      }),
      i == 1 &&
        (0, Y.jsx)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: (0, Y.jsx)(`p`, {
            children: Ye(
              `#FamilyManagement_RoleDescriptionShort_Adult`,
              (0, Y.jsx)(`span`, { className: `iWLBT-TcMv4-` }),
              (0, Y.jsx)(`a`, {
                className: `fcwjI2x1EM0-`,
                onClick: () => p(`explanation`),
              }),
            ),
          }),
        }),
      i == 2 &&
        (0, Y.jsxs)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: [
            (0, Y.jsx)(`p`, {
              children: Ye(
                `#FamilyManagement_RoleDescriptionShort_Child`,
                (0, Y.jsx)(`span`, { className: `iWLBT-TcMv4-` }),
                (0, Y.jsx)(`a`, {
                  className: `fcwjI2x1EM0-`,
                  onClick: () => p(`explanation`),
                }),
              ),
            }),
            (0, Y.jsxs)(`ul`, {
              className: `y1l6NhH-DV4-`,
              children: [
                (0, Y.jsx)(`li`, {
                  children: k(`#FamilyManagement_RoleDescriptionShort_Child_1`),
                }),
                (0, Y.jsx)(`li`, {
                  children: k(`#FamilyManagement_RoleDescriptionShort_Child_2`),
                }),
                (0, Y.jsx)(`li`, {
                  children: k(`#FamilyManagement_RoleDescriptionShort_Child_3`),
                }),
              ],
            }),
          ],
        }),
      (0, Y.jsxs)(`div`, {
        className: fr,
        children: [
          (0, Y.jsx)(M, {
            className: pr,
            onClick: () => p(`confirm`),
            children: k(`#FamilyManagement_AcceptInviteButton`),
          }),
          (0, Y.jsx)(M, {
            className: mr,
            onClick: ne,
            children: k(`#FamilyManagement_DeclineInviteButton`),
          }),
        ],
      }),
    ],
  });
}
function Rr() {
  return (0, Y.jsxs)(`div`, {
    className: B(`account_settings_container`),
    children: [
      (0, Y.jsx)(`p`, { children: k(`#FamilyManagement_AdultDescription_1`) }),
      (0, Y.jsx)(`p`, { children: k(`#FamilyManagement_AdultDescription_2`) }),
      (0, Y.jsxs)(`ul`, {
        children: [
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_AdultDescription_3`),
          }),
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_AdultDescription_4`),
          }),
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_AdultDescription_5`),
          }),
        ],
      }),
    ],
  });
}
function zr() {
  return (0, Y.jsxs)(`div`, {
    className: B(`account_settings_container`),
    children: [
      (0, Y.jsx)(`p`, { children: k(`#FamilyManagement_ChildDescription_1`) }),
      (0, Y.jsxs)(`ul`, {
        children: [
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_ChildDescription_2`),
          }),
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_ChildDescription_3`),
          }),
          (0, Y.jsx)(`li`, {
            children: k(`#FamilyManagement_ChildDescription_4`),
          }),
        ],
      }),
      (0, Y.jsx)(`p`, { children: k(`#FamilyManagement_ChildDescription_5`) }),
    ],
  });
}
var Br = `familyid`,
  Vr = `invite`;
function Hr() {
  let e = t(),
    n = u(),
    r = Nr(n, Br),
    i = Nr(n, Vr),
    a = Nr(n, Fr);
  return (
    Ut(r, i, a).mutate(null, {
      onSuccess: () => e.push(`/account/familymanagement`),
    }),
    (0, Y.jsx)(y, {})
  );
}
var Ur = `GgRcoJkBp2M-`,
  Wr = `zQlOx4nbipE-`,
  Gr = `YbaWsmdnzFc-`,
  Kr = `b-MA-Yvg7Qo-`,
  qr = `_2YQN1GiqfGk-`,
  Jr = `TmhoSaLpJFQ-`,
  Yr = `xJTOQ481NXA-`,
  Xr = `KR6LcgQwd0A-`,
  Zr = `UUWCl9G6jT4-`,
  Qr = `h4of3OtdDco-`,
  $r = `GKpyofqaoJw-`,
  ei = `MBXSJd-rZFs-`,
  ti = `sOxlykuOBOQ-`,
  ni = `s7hRiIihIEs-`,
  ri = `_4suPU-6CM1E-`,
  ii = `Pjng-K5PwOk-`,
  ai = `sL-vIk-k1rQ-`,
  oi = `T5JpFOy8mno-`,
  si = `PXvDMnEMI9M-`,
  ci = `_4utYhFQr0cY-`,
  li = `_8tN8sPDXurg-`,
  ui = `FQcM42O2G1E-`;
function di(e) {
  return new URLSearchParams(e.search).get(`inviteuser`);
}
function fi(e) {
  let { familyGroupID: t } = e,
    n = u(),
    [r, i] = (0, J.useState)(di(n)),
    [a, o] = (0, J.useState)(r == null ? `splash` : `selectRole`),
    s = U(t),
    c =
      s.data.slot_cooldown_remaining_seconds() > 0 &&
      s.data.slot_cooldown_overrides() === 0,
    l = (e) => {
      (i(e), o(`selectRole`));
    };
  return a === `splash`
    ? (0, Y.jsx)(pi, { onClick: () => o(`selectMethod`) })
    : a === `selectMethod` && !c
      ? (0, Y.jsx)(hi, {
          familyGroupID: t,
          onCancel: () => o(`splash`),
          onSelect: l,
        })
      : a === `selectMethod` && c
        ? (0, Y.jsx)(gi, {
            slotCooldownSeconds: s.data.slot_cooldown_remaining_seconds(),
            familyGroupID: t,
            onCancel: () => o(`splash`),
            onSelect: l,
          })
        : a === `selectRole`
          ? (0, Y.jsx)(_i, {
              familyGroupID: t,
              steamid: r,
              onCancel: () => o(`splash`),
            })
          : null;
}
function pi(e) {
  return (0, Y.jsx)(`div`, {
    className: Ur,
    children: (0, Y.jsxs)(L, {
      noFocusRing: !1,
      className: Wr,
      onClick: e.onClick,
      children: [
        He({}),
        (0, Y.jsx)(`span`, { children: k(`#FamilyManagement_InviteAMember`) }),
      ],
    }),
  });
}
function mi(e) {
  let { familyGroupID: t, onSelect: n } = e,
    r = U(t),
    i = Jt(t),
    a = ae();
  K(
    i,
    `#FamilyManagement_ErrorLoadUsersSharingDevice`,
    G.k_EFamilyQueryGetUsersSharingDevice,
  );
  let o = i.data
    ?.users()
    .filter((e) => !r.data?.pending_invites().some((t) => t.steamid() == e))
    .filter((e) => a.data?.indexOf(e) === -1);
  return i.isError || o?.length == 0 || !a.isSuccess
    ? null
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, {
            className: Jr,
            children: k(`#FamilyManagement_PreviousUsers`),
          }),
          i.isLoading
            ? (0, Y.jsx)(`div`, { className: ui, children: (0, Y.jsx)(y, {}) })
            : (0, Y.jsx)(xi, { steamids: o, onSelect: n }),
        ],
      });
}
function hi(e) {
  let { familyGroupID: t, onSelect: n, onCancel: r } = e;
  return (0, Y.jsxs)(`div`, {
    className: Gr,
    children: [
      (0, Y.jsx)(ot, {
        className: qr,
        onClick: r,
        children: (0, Y.jsx)(At, {}),
      }),
      (0, Y.jsx)(`div`, {
        className: Yr,
        children: k(`#FamilyManagement_InviteAMember`),
      }),
      (0, Y.jsx)(`div`, {
        className: Jr,
        children: k(`#FamilyManagement_InviteMethodText`),
      }),
      (0, Y.jsx)(F, {
        className: Xr,
        children: (0, Y.jsx)(bi, { familyGroupID: t, onSelect: n }),
      }),
      (0, Y.jsx)(mi, { familyGroupID: t, onSelect: n }),
    ],
  });
}
function gi(e) {
  let {
      familyGroupID: t,
      onSelect: n,
      onCancel: r,
      slotCooldownSeconds: i,
    } = e,
    a = (0, J.useRef)(Ct(Math.floor(new Date().getTime() / 1e3) + i, !1, !0)),
    o = U(t),
    s = ae();
  if (!s.isSuccess) return null;
  let c = o.data
    .former_members()
    .map((e) => e.steamid())
    .filter((e) => s.data.indexOf(e) === -1);
  return (0, Y.jsxs)(`div`, {
    className: Gr,
    children: [
      (0, Y.jsx)(ot, {
        className: qr,
        noFocusRing: !1,
        onClick: r,
        children: (0, Y.jsx)(At, {}),
      }),
      (0, Y.jsx)(`div`, {
        className: Yr,
        children: k(`#FamilyManagement_InviteAMember`),
      }),
      (0, Y.jsx)(`div`, {
        className: Jr,
        children: k(`#FamilyManagement_CooldownAndReinvite`, a.current),
      }),
      (0, Y.jsx)(xi, { steamids: c, onSelect: n }),
    ],
  });
}
function _i(e) {
  let { familyGroupID: t, steamid: n, onCancel: r } = e,
    { setErrorMessage: i } = V(),
    a = S(n);
  H(a, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [o, s] = (0, J.useState)(0),
    [c, l] = (0, J.useState)(null),
    u = Gt(t, n, o);
  K(u, `#FamilyManagement_ErrorInvite`, G.k_EFamilyQueryInviteToFamily);
  let d = () => {
    u.mutateAsync(null, {
      onSuccess: (e) => {
        e.two_factor_method() === 0
          ? r()
          : e.two_factor_method() === 1
            ? l(`awaitmobile2fa`)
            : e.two_factor_method() === 2 && l(`awaitemail2fa`);
      },
    });
  };
  if (a.isLoading)
    return (0, Y.jsx)(`div`, { className: ui, children: (0, Y.jsx)(y, {}) });
  let f = a.data,
    p = (e) => {
      (i(``), s(e));
    };
  return (0, Y.jsxs)(`div`, {
    className: Kr,
    children: [
      (0, Y.jsx)(P, {
        active: o !== 0,
        children:
          c === `awaitmobile2fa` || c === `awaitemail2fa`
            ? (0, Y.jsx)(vi, {
                onClose: r,
                eMethod: c === `awaitemail2fa` ? 2 : 1,
              })
            : (0, Y.jsx)(yi, {
                steamid: n,
                role: o,
                onCancel: () => s(0),
                onConfirm: d,
              }),
      }),
      (0, Y.jsx)(F, {
        className: qr,
        onActivate: r,
        children: (0, Y.jsx)(At, {}),
      }),
      (0, Y.jsxs)(`div`, {
        className: Yr,
        children: [
          (0, Y.jsx)(`span`, {
            className: Zr,
            children: k(`#FamilyManagement_Invite`),
          }),
          (0, Y.jsx)(q, {
            className: ii,
            persona: f,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, Y.jsx)(`div`, { className: Qr, children: f?.m_strPlayerName }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: Jr,
        children: k(`#FamilyManagement_ChooseRole`),
      }),
      (0, Y.jsxs)(F, {
        className: Ur,
        children: [
          (0, Y.jsx)(Ci, { role: 1, onSelect: () => p(1) }),
          (0, Y.jsx)(Ci, { role: 2, onSelect: () => p(2) }),
        ],
      }),
    ],
  });
}
function vi(e) {
  let { eMethod: t, onClose: n } = e,
    r;
  if (t === 1 && N.IN_MOBILE_WEBVIEW)
    r = `#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp`;
  else if (t === 1) r = `#FamilyManagement_Await2FAForInvite_MobileAuth`;
  else if (t === 2) r = `#FamilyManagement_Await2FAForInvite_EmailAuth`;
  else return null;
  return (0, Y.jsxs)(I, {
    bAlertDialog: !0,
    onOK: n,
    closeModal: n,
    strTitle: k(`#FamilyManagement_ConfirmInviteTitle`),
    children: [
      (0, Y.jsx)(jr, {}),
      (0, Y.jsx)(`div`, { className: Jr, children: k(r) }),
    ],
  });
}
function yi(e) {
  let { onCancel: t, onConfirm: n, steamid: r, role: i } = e,
    a = S(r).data;
  return (0, Y.jsxs)(I, {
    onCancel: t,
    strTitle: k(`#FamilyManagement_ConfirmInviteTitle`),
    onOK: n,
    strOKButtonText: k(`#FamilyManagement_Invite`),
    children: [
      (0, Y.jsx)(jr, {}),
      (0, Y.jsxs)(`div`, {
        className: ei,
        children: [
          (0, Y.jsx)(q, {
            className: ii,
            persona: a,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, Y.jsx)(`div`, { className: Qr, children: a?.m_strPlayerName }),
          (0, Y.jsx)(Or, { className: $r, role: i }),
          (0, Y.jsx)(`div`, {
            className: ti,
            children: k(`#FamilyManagement_Role_${i}`),
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: Jr,
        children: k(`#FamilyManagement_ConfirmInvite`),
      }),
    ],
  });
}
function bi(e) {
  let { familyGroupID: t, onSelect: n } = e,
    [r, i] = (0, J.useState)(!1),
    a = U(t)
      .data.members()
      .map((e) => e.steamid());
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(P, {
        active: r,
        children: (0, Y.jsx)(A, {
          title: k(`#FamilyManagement_InviteMethodFriend`),
          className: ai,
          onCancel: () => i(!1),
          children: (0, Y.jsx)(wi, {
            setSelectedFriendSteamID: n,
            excludeSteamIDs: a,
          }),
        }),
      }),
      (0, Y.jsx)(M, {
        noFocusRing: !1,
        onClick: () => i(!0),
        children: k(`#FamilyManagement_InviteMethodFriend`),
      }),
    ],
  });
}
function xi(e) {
  let { steamids: t, onSelect: n } = e;
  return (0, Y.jsx)(F, {
    className: ni,
    "flow-children": `grid`,
    children: t.map((e) =>
      (0, Y.jsx)(Si, { steamid: e, onClick: () => n(e) }, e),
    ),
  });
}
function Si(e) {
  let { steamid: t, onClick: n } = e,
    r = new j(t),
    i = S(t),
    a = E(),
    o = X().data?.preferences().parenthesize_nicknames(),
    s = a.data?.get(r.GetAccountID());
  if ((H(i, `#FamilyManagement_ErrorLoadFamilyGeneric`), i.isLoading))
    return null;
  let c = i.data;
  return (0, Y.jsxs)(F, {
    className: ri,
    onActivate: n,
    children: [
      (0, Y.jsx)(`div`, {
        className: ii,
        children: (0, Y.jsx)(q, {
          className: ii,
          persona: c,
          size: `Large`,
          statusPosition: `right`,
        }),
      }),
      (0, Y.jsx)(on, {
        className: Qr,
        bParenthesizeNicknames: o,
        bIsSelf: !1,
        bHideStatus: !0,
        bHidePersona: !1,
        bCompactView: !1,
        persona: c,
        strNickname: s,
        eFriendRelationship: 3,
      }),
    ],
  });
}
function Ci(e) {
  let { role: t, onSelect: n } = e;
  return (0, Y.jsxs)(L, {
    className: B(Wr),
    noFocusRing: !1,
    onClick: () => n(t),
    children: [
      t == 2 ? (0, Y.jsx)(ye, {}) : (0, Y.jsx)(xe, {}),
      (0, Y.jsx)(`span`, {
        children: k(`#FamilyManagement_InviteAsRoleButton_${t}`),
      }),
    ],
  });
}
function wi(e) {
  let { setSelectedFriendSteamID: t, excludeSteamIDs: n } = e,
    r = oe();
  H(r, `#FamilyManagement_ErrorLoadFriendListGeneric`);
  let i = r.data;
  return r.isLoading
    ? (0, Y.jsx)(`div`, { className: ui, children: (0, Y.jsx)(y, {}) })
    : r.isError
      ? null
      : (0, Y.jsx)(Ti, {
          setSelectedFriendSteamID: t,
          steamIDs: i,
          excludeSteamIDs: n,
        });
}
function Ti(e) {
  let { setSelectedFriendSteamID: t, steamIDs: n, excludeSteamIDs: r } = e,
    i = ne(n),
    a = E(),
    o = X(),
    [s, c] = J.useState(``),
    l = o.data?.preferences().parenthesize_nicknames(),
    u = J.useCallback(
      (e, t) => {
        let n = e.persona.m_strPlayerName,
          r = t.persona.m_strPlayerName;
        return (
          l || (e.nickname && (n = e.nickname), t.nickname && (r = t.nickname)),
          b(n, r) ||
            e.persona.m_steamid.GetAccountID() -
              t.persona.m_steamid.GetAccountID()
        );
      },
      [l],
    ),
    d = (0, J.useMemo)(
      () =>
        i
          .map((e) => e.data)
          .filter((e) => !!e)
          .filter(
            (e) =>
              s == `` ||
              Di(
                s.toLowerCase(),
                e?.m_strPlayerName,
                a.data?.get(e?.m_steamid.GetAccountID()),
              ),
          )
          .filter((e) => r.indexOf(e?.m_steamid.ConvertTo64BitString()) == -1)
          .map((e) => ({
            persona: e,
            nickname: a.data?.get(e?.m_steamid.GetAccountID()),
          }))
          .sort(u),
      [r, i, a, s, u],
    ),
    f = J.useCallback(
      (e) =>
        (0, Y.jsx)(Oi, {
          persona: d[e].persona,
          nickname: d[e].nickname,
          setSelectedFriendSteamID: t,
        }),
      [d, t],
    ),
    p = i.some((e) => e.isLoading);
  return (0, Y.jsxs)(F, {
    className: oi,
    children: [
      (0, Y.jsx)(`p`, {
        className: li,
        children: k(`#FamilyManagement_SelectFriend`),
      }),
      p && (0, Y.jsx)(y, { size: `xlarge` }),
      !p &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(F, {
              className: `ea59pn3WsAg-`,
              children: (0, Y.jsx)(Ei, { strFilter: s, setFilter: c }),
            }),
            (0, Y.jsx)(F, {
              className: `_3xFGyRrcMG8-`,
              children: (0, Y.jsx)(Un, {
                nRows: d.length,
                nItemHeight: 84,
                renderItem: f,
              }),
            }),
          ],
        }),
    ],
  });
}
function Ei(e) {
  let { strFilter: t, setFilter: n } = e;
  return (0, Y.jsx)(rt, {
    autoFocus: !0,
    bShowClearAction: !0,
    className: si,
    type: `text`,
    onChange: (e) => n(e.target.value),
    value: t,
    placeholder: k(`#FamilyManagement_InviteFriendNamePlaceholder`),
  });
}
function Di(e, t, n) {
  return (
    !e ||
    (t && t.toLowerCase().includes(e)) ||
    (n && n.toLowerCase().includes(e))
  );
}
function Oi(e) {
  let { persona: t, nickname: n, setSelectedFriendSteamID: r } = e,
    i = X().data?.preferences().parenthesize_nicknames();
  return (0, Y.jsxs)(F, {
    className: ci,
    onActivate: (e) => {
      r(t.m_steamid.ConvertTo64BitString());
    },
    children: [
      (0, Y.jsx)(q, {
        className: ii,
        persona: t,
        size: `Large`,
        statusPosition: `right`,
      }),
      (0, Y.jsx)(on, {
        className: Qr,
        bIsSelf: !1,
        bHideStatus: !1,
        bHidePersona: !1,
        bParenthesizeNicknames: i,
        bCompactView: !1,
        persona: t,
        strNickname: n,
        eFriendRelationship: 3,
      }),
    ],
  });
}
var ki = `30px`,
  Ai = `#ffc82c`,
  ji = `_2wpmAkkROyw-`,
  Mi = `trHLHf35hJM-`,
  Ni = `l1-FlOrpK8g-`,
  Pi = `uESgUq6zgBE-`,
  Fi = `qZ72lYd3uVA-`,
  Ii = `yQG1LU0zHT0-`,
  Li = `PKLNf1vgmHk-`,
  Ri = `SXbNYxT3eQQ-`,
  zi = `RJ4OJA3v2bo-`,
  Bi = `_6U1pbqGKD-A-`,
  Vi = `ggTobEj7L-w-`,
  Hi = `TGL7HPcl79E-`,
  Ui = `eQfDz-t4EzA-`,
  Wi = `_-05gZFHjqbY-`,
  Gi = `tqBJiOQiMuM-`,
  Ki = `aeyjCdmvamw-`,
  qi = `nnZaN0IIE8s-`,
  Ji = `wCKd8tQhPGI-`,
  Yi = `pp6GqWM-FxI-`,
  Xi = `omHaP36p-tQ-`,
  Zi = `ekNC13HSWps-`,
  Qi = `_6fcLRK-WJ2A-`,
  $i = `WOi8Ki7cvjE-`,
  ea = `X9fUi3lkrv0-`,
  ta = `_4QmR-iOiLuc-`,
  na = `tf04-wL8lP4-`,
  ra = `nX45hTAJ35c-`,
  ia = `_2ZF7pqHzY1k-`,
  aa = `lBC51EASQcw-`,
  oa = `rtDwRYVllRQ-`,
  sa = `blhTghmSy3g-`,
  ca = `ndoIwncT2-g-`,
  la = `TXXyeTSgIA4-`,
  ua = `A6WFrEgT3pM-`,
  da = `t3dKX4zNIa4-`,
  fa = `QTzm4wcNnDQ-`,
  pa = `mEhxSyYlPAk-`,
  Z = `LQbzNANFyto-`,
  ma = `O1JgPqxFsiY-`,
  ha = `rHYCQ76LgEk-`,
  ga = `KeP-QVvyIIs-`;
function _a(e) {
  return typeof e.cooldown_seconds_remaining == `function`;
}
function va(e) {
  let { familyGroupID: t, member: n } = e,
    r = S(n.steamid());
  H(r, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [i, a, o] = ve(!1);
  if (!r.isSuccess) return null;
  let s = r.data,
    c = !1,
    l = null;
  return (
    _a(n)
      ? ((l = (0, Y.jsx)(xa, {
          active: i,
          onClose: o,
          familyGroupID: t,
          member: n,
          persona: s,
        })),
        (c = !0))
      : (l = (0, Y.jsx)(Ca, {
          active: i,
          onClose: o,
          familyGroupID: t,
          invited: n,
          persona: s,
        })),
    (0, Y.jsxs)(Y.Fragment, {
      children: [
        l,
        (0, Y.jsx)(F, {
          className: B(wr, fa),
          onActivate: a,
          children: (0, Y.jsx)(`div`, {
            className: pa,
            children: (0, Y.jsx)(Mr, {
              persona: s,
              role: n.role(),
              invitePending: !c,
            }),
          }),
        }),
      ],
    })
  );
}
function ya(e) {
  let t = new Date(e.time_joined() * 1e3);
  return (new Date().getTime() - t.getTime()) / 864e5 < 30;
}
function ba(e) {
  let {
      active: n,
      onClose: r,
      familyGroupID: i,
      member: a,
      persona: o,
      isSelf: s,
    } = e,
    { setErrorMessage: c } = V(),
    l = Bt(i, a.steamid()),
    d = t(),
    f = u(),
    p = Math.ceil(a.cooldown_seconds_remaining() / 86400 || 0),
    m = s
      ? k(`#FamilyManagement_RemoveMemberConfirmationText_Self`)
      : k(`#FamilyManagement_RemoveMemberConfirmationText`, o?.m_strPlayerName);
  p !== 0 &&
    (m +=
      ` ` +
      (s
        ? Be(`#FamilyManagement_CannotJoinFor_Self`, p)
        : k(`#FamilyManagement_CannotJoinFor`, p)));
  let h = k(
    s
      ? `#FamilyManagement_RemoveMemberConfirmationTitle_Self`
      : `#FamilyManagement_RemoveMemberConfirmationTitle`,
  );
  return (0, Y.jsx)(P, {
    active: n,
    children: (0, Y.jsx)(I, {
      strTitle: h,
      onOK: () => {
        (c(null), l.mutate(null, { onSuccess: () => d.push(f.pathname) }));
      },
      closeModal: r,
      children: (0, Y.jsx)(`div`, { className: ga, children: m }),
    }),
  });
}
function xa(e) {
  let { active: n, onClose: r, familyGroupID: i, member: a, persona: o } = e,
    [s, c, u] = ve(!1),
    d = Bt(i, a.steamid()),
    { setErrorMessage: f } = V();
  K(
    d,
    `#FamilyManagement_ErrorRemovingFromFamily`,
    G.k_EFamilyQueryRemoveFromFamily,
  );
  let p = z() == a.steamid(),
    m = ya(a),
    h = W().data?.role(),
    g = U(i).data.members().length === 1,
    _ = t(),
    { url: v } = l(),
    y = () => {
      (f(null), c(), r());
    },
    b = () => {
      let e = new j(a.steamid());
      window.location.href =
        N.HELP_BASE_URL +
        `wizard/HelpRecoverFamilyMember?childid=` +
        e.GetAccountID();
    },
    ee = () => {
      window.location.href = N.COMMUNITY_BASE_URL + `profiles/` + a.steamid();
    },
    x = () => {
      window.location.href =
        N.STORE_BASE_URL + `wishlist/profiles/` + a.steamid();
    },
    te = () => {
      let e = v.endsWith(`/`) ? v.slice(0, -1) : v;
      _.push(`${e}/parentalcontrols/${a.steamid()}`);
    },
    S = k(`#FamilyManagement_ManageDialogTitle`, o?.m_strPlayerName);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ba, {
        active: s,
        onClose: u,
        familyGroupID: i,
        member: a,
        persona: o,
        isSelf: p,
      }),
      (0, Y.jsx)(P, {
        active: n,
        children: (0, Y.jsx)(A, {
          className: ca,
          titleClassName: la,
          title: S,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: r,
          bHideCloseIcon: !0,
          children: (0, Y.jsxs)(`div`, {
            className: da,
            children: [
              (0, Y.jsx)(M, {
                className: Z,
                onClick: ee,
                children: k(`#FamilyManagement_ProfileLink`),
              }),
              (0, Y.jsx)(M, {
                className: Z,
                onClick: x,
                children: k(`#FamilyManagement_WishlistLink`),
              }),
              (0, Y.jsx)(Fe, { className: ua }),
              !p &&
                a.role() == 2 &&
                (0, Y.jsx)(M, {
                  className: `LQbzNANFyto-`,
                  onClick: te,
                  children: k(`#FamilyManagement_ParentalControls`),
                }),
              !m &&
                !p &&
                a.role() == 2 &&
                (0, Y.jsx)(M, {
                  className: `LQbzNANFyto-`,
                  disabled: m,
                  onClick: b,
                  children: k(`#FamilyManagement_RecoverMember`),
                }),
              !g &&
                h !== 2 &&
                (0, Y.jsx)(M, {
                  className: B(`LQbzNANFyto-`, `AtVQCBI7J-w-`),
                  onClick: y,
                  children: k(
                    p
                      ? `#FamilyManagement_RemoveMember_Self`
                      : `#FamilyManagement_RemoveMember`,
                  ),
                }),
              g && (0, Y.jsx)(wa, { familyGroupID: i }),
              (0, Y.jsx)(Fe, { className: ua }),
              (0, Y.jsx)(M, {
                className: Z,
                onClick: r,
                children: k(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Sa(e) {
  let { active: t, onClose: n, familyGroupID: r, invited: i, persona: a } = e,
    o = en(r, i.steamid()),
    { setErrorMessage: s } = V();
  K(o, `#FamilyManagement_ErrorCancelInvite`, G.k_EFamilyQueryDeclineInvite);
  let c = () => {
      (s(null), o.mutate());
    },
    l = k(
      `#FamilyManagement_CancelInvitationConfirmationText`,
      a?.m_strPlayerName,
    );
  return (0, Y.jsx)(P, {
    active: t,
    children: (0, Y.jsx)(I, {
      strTitle: k(`#FamilyManagement_CancelInvitationConfirmationTitle`),
      strDescription: l,
      onOK: c,
      closeModal: n,
    }),
  });
}
function Ca(e) {
  let { active: t, onClose: n, familyGroupID: r, invited: i, persona: a } = e,
    [o, s, c] = ve(!1),
    l = en(r, i.steamid()),
    { setErrorMessage: u } = V();
  K(l, `#FamilyManagement_ErrorCancelInvite`, G.k_EFamilyQueryDeclineInvite);
  let d = () => {
      window.location.href = N.COMMUNITY_BASE_URL + `profiles/` + i.steamid();
    },
    f = () => {
      (u(null), s(), n());
    },
    p = k(`#FamilyManagement_ManageDialogTitle`, a?.m_strPlayerName);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(Sa, {
        active: o,
        onClose: c,
        familyGroupID: r,
        invited: i,
        persona: a,
      }),
      (0, Y.jsx)(P, {
        active: t,
        children: (0, Y.jsx)(A, {
          className: ca,
          titleClassName: la,
          title: p,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: n,
          bHideCloseIcon: !0,
          children: (0, Y.jsxs)(`div`, {
            className: da,
            children: [
              (0, Y.jsx)(M, {
                className: Z,
                onClick: d,
                children: k(`#FamilyManagement_ProfileLink`),
              }),
              (0, Y.jsx)(Fe, { className: ua }),
              (0, Y.jsx)(M, {
                className: B(Z, ha),
                onClick: f,
                children: k(`#FamilyManagement_CancelInviteButton`),
              }),
              (0, Y.jsx)(Fe, { className: ua }),
              (0, Y.jsx)(M, {
                className: Z,
                onClick: n,
                children: k(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function wa(e) {
  let { familyGroupID: n } = e,
    [r, i, a] = ve(!1),
    o = Wt(n),
    { setErrorMessage: s } = V();
  K(o, `#FamilyManagement_ErrorDeleteFamily`, G.k_EFamilyQueryDeleteFamily);
  let c = W().data.cooldown_seconds_remaining(),
    l = Date.now() / 1e3 + c,
    u = Ct(l),
    d = t();
  return o.isPending
    ? (0, Y.jsx)(`div`, { className: void 0, children: (0, Y.jsx)(y, {}) })
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(P, {
            active: r,
            children: (0, Y.jsxs)(I, {
              strTitle: k(`#FamilyManagement_DeleteFamilyConfirmationTitle`),
              onOK: () => {
                (s(null),
                  o.mutate(null, {
                    onSuccess: () => d.push(`/account/familymanagement`),
                  }));
              },
              closeModal: a,
              children: [
                c > 0 &&
                  (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsx)(`p`, {
                        children: k(
                          `#FamilyManagement_DeleteFamilyConfirmationText_1`,
                        ),
                      }),
                      (0, Y.jsxs)(`ul`, {
                        children: [
                          (0, Y.jsx)(`li`, {
                            children: k(
                              `#FamilyManagement_DeleteFamilyConfirmationText_2`,
                              u,
                            ),
                          }),
                          (0, Y.jsx)(`li`, {
                            children: k(
                              `#FamilyManagement_DeleteFamilyConfirmationText_3`,
                            ),
                          }),
                          (0, Y.jsx)(`li`, {
                            children: k(
                              `#FamilyManagement_DeleteFamilyConfirmationText_4`,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                c === 0 &&
                  (0, Y.jsx)(`p`, {
                    children: k(
                      `#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown`,
                    ),
                  }),
              ],
            }),
          }),
          (0, Y.jsx)(M, {
            className: B(ma, Z),
            noFocusRing: !1,
            onClick: () => {
              (s(null), i());
            },
            children: k(`#FamilyManagement_DeleteFamilyButton`),
          }),
        ],
      });
}
function Ta(e) {
  let { familyGroupID: t, ...n } = e,
    r = Xt(t);
  K(r, `#FamilyManagement_ErrorLoadHistory`, G.k_EFamilyQueryLoadHistory);
  let i = (0, J.useMemo)(() => r.data?.slice(0).reverse() || [], [r]),
    a = parseInt(n.nFamilyHistoryRowHeight),
    o = J.useCallback(
      (t) =>
        (0, Y.jsx)(Ea, {
          entry: i[t],
          styleProps: n,
          fnRenderName: e.FnRenderName,
        }),
      [i, n, e.FnRenderName],
    );
  return (0, Y.jsx)(F, {
    className: n.FamilyHistory,
    children: (0, Y.jsx)(Un, {
      bDynamic: !0,
      nRows: i.length,
      nItemHeight: a,
      renderItem: o,
    }),
  });
}
function Ea(e) {
  let { entry: t, styleProps: n, fnRenderName: r, ...i } = e,
    a = Intl.DateTimeFormat(St.GetPreferredLocales(), {
      month: `numeric`,
      year: `numeric`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
    }),
    o = new Date(parseInt(t.timestamp()) * 1e3),
    s = a.format(o),
    c = k(`#FamilyHistory_SteamSupport`),
    l = S(t.actor_steamid()),
    u,
    d = r(t.actor_steamid());
  u = t.actor_steamid()
    ? t.by_support()
      ? (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(`b`, { children: l.data?.m_strPlayerName }),
            ` (`,
            c,
            `)`,
          ],
        })
      : d
    : c;
  let f = JSON.parse(t.body()),
    p = r(f.account),
    m = f.seconds && Ze(f.seconds),
    h = f.reason ? f.reason : ``,
    g;
  switch (t.type()) {
    case 1:
      g = D(`#FamilyHistory_FamilyCreated`, u, f.name);
      break;
    case 2:
      g = D(`#FamilyHistory_FamilyModified`, u, f.name);
      break;
    case 3:
      g = D(`#FamilyHistory_FamilyDeleted`, u);
      break;
    case 4:
      let e = k(`#FamilyManagement_Role_${f.role}`).toLocaleLowerCase();
      g = D(`#FamilyHistory_AccountInvited`, u, e, p);
      break;
    case 5:
      g = D(`#FamilyHistory_InviteDeniedByFamilySize`, u, p);
      break;
    case 6:
      g = D(`#FamilyHistory_JoinedFamily`, u);
      break;
    case 7:
      g = D(`#FamilyHistory_JoinDeniedByRegionMismatch`, u);
      break;
    case 24:
      g = D(`#FamilyHistory_JoinDenied`, u, h);
      break;
    case 8:
      g = D(`#FamilyHistory_JoinDeniedByMissingIpAddress`, u);
      break;
    case 9:
      g = D(`#FamilyHistory_JoinDeniedByFamilyCooldown`, u, m);
      break;
    case 10:
      g = D(`#FamilyHistory_JoinDeniedByUserCooldown`, u, m);
      break;
    case 11:
      g = D(`#FamilyHistory_JoinDeniedByOtherFamily`, u);
      break;
    case 12:
      g = D(`#FamilyHistory_AccountRemoved`, u, p);
      break;
    case 13:
      g =
        t.actor_steamid() === f.account
          ? D(`#FamilyHistory_InviteRejected`, u)
          : D(`#FamilyHistory_InviteCancelled`, u, p);
      break;
    case 14:
      g = D(`#FamilyHistory_PurchaseRequested`, u);
      break;
    case 16:
      g = D(`#FamilyHistory_ParentalSettingsDisabled`, u, p);
      break;
    case 15:
      g = D(`#FamilyHistory_ParentalSettingsEnabled`, u, p);
      break;
    case 17:
      g = D(`#FamilyHistory_ParentalSettingsChanged`, u, p);
      break;
    case 18:
      g = D(`#FamilyHistory_FamilyCooldownOverridesChanged`, u, f.count);
      break;
    case 19:
      g = D(`#FamilyHistory_PurchaseRequestCanceled`, u);
      break;
    case 20:
      g = D(`#FamilyHistory_PurchaseRequestApproved`, u, p);
      break;
    case 21:
      g = D(`#FamilyHistory_PurchaseRequestDeclined`, u, p);
      break;
    case 22:
      g = D(`#FamilyHistory_CooldownSkipConsumed`, u);
      break;
    case 23:
      g = D(`#FamilyHistory_FamilyRestored`, u);
      break;
    case 25:
      g = D(`#FamilyHistory_ForceAcceptedInvite`, u, p);
      break;
    default:
      g = D(`#FamilyHistory_UnknownChange`);
  }
  return (0, Y.jsxs)(F, {
    className: B(n.Entry),
    focusable: !0,
    ...i,
    children: [
      (0, Y.jsx)(`div`, { className: B(n.Timestamp), children: s }),
      (0, Y.jsx)(`div`, { className: B(n.EntryText), children: g }),
    ],
  });
}
var Da = `qF3oLbTunrs-`,
  Oa = `phiDicDWyos-`,
  ka = `CLDB0mS3ypU-`,
  Aa = `lG-sfWfbD88-`,
  ja = `_7ohp2MEUGzY-`,
  Ma = `AdHik7YD4go-`,
  Na = `_7XDMq4s1SiY-`,
  Pa = `WrqTEGgITTI-`,
  Fa = `a99hjle9o6E-`,
  Ia = `sPAXW0lw6qY-`,
  La = `_0Swl2LUBTBk-`,
  Ra = `l2KY-Q6SPTM-`,
  za = `SMvJOZVL8Cg-`,
  Ba = `gnF4b62Z-vI-`,
  Va = `AscbB7bZ43o-`,
  Ha = `u4A-Q-Hbc-g-`,
  Q = e(ee()),
  Ua = e(ln()),
  Wa = `40px`,
  Ga = `LF2R0QrVwr0-`,
  Ka = `a6XG5kmAneo-`,
  qa = `zEYhEEGdwfI-`,
  Ja = `CJeJJrjlpc4-`,
  Ya = `ojeW56-hyDo-`,
  Xa = `bdDbF19-IiU-`,
  Za = `NFlZs5BUV0g-`,
  Qa = `hkmjDaVtr-c-`,
  $a = `ZHsY2YrQN4g-`,
  eo = `A6rs7mUnxQQ-`,
  to = `hIZQaoRTEg4-`,
  no = `DXb9ZYXN5cw-`,
  ro = `euNsDY1STfk-`,
  io = `mKfANkRB-zk-`,
  ao = `jzHjQP8-K9M-`,
  oo = `YjhMqCkqLuc-`,
  so = `ywr-LwPJSJ4-`,
  co = `_9lbbJMJcIE0-`,
  lo = `-WR7BmwqGwc-`,
  uo = `TcEIS4khspQ-`,
  fo = `yXXC7D7U9JY-`,
  po = `xU1dPTLSNqA-`,
  mo = `_7jo-AdZx3sc-`,
  ho = `p9OB3qTRAgo-`,
  go = `UhkJlPPhlbI-`,
  _o = `beTZ0bQCTeo-`,
  vo = `k6JuSlfBGOU-`,
  yo = `pDLqdh2fdGY-`,
  bo = `LFajRuGr4GE-`,
  xo = `GUwMnXmhcys-`,
  So = `tka2yLdlWuw-`,
  Co = `j7B7-KYjCt8-`,
  wo = `USNIZMyYKxQ-`,
  To = `GCArileYweo-`,
  Eo = `FVQS2NH-D30-`,
  Do = `S7U5HG5G76o-`,
  Oo = `yGtCw2YCxXg-`,
  ko = `og-eU1fjmi4-`,
  Ao = `KX0hJhxrF2w-`,
  jo = `HXJO37-r-xg-`,
  Mo = `uoHre03qso0-`,
  No = `gYFO6tsY26k-`,
  Po = `bN7ZsBC6FNk-`,
  Fo = `fwx54ooQm-Q-`,
  Io = `O-RI4zs-zqM-`,
  Lo = `UfK8xzRh8DM-`,
  Ro = `lGkP5BiYu20-`,
  zo = `I2C2ZUEJv4U-`,
  Bo = `JnxJuW43sRo-`,
  Vo = `O4FEp-ReEQo-`,
  Ho = `_8zEmALGjutM-`,
  Uo = `_6b9Z3WITKss-`,
  Wo = `hdiCVW-TUIQ-`,
  Go = `QrOV5jeMP4E-`,
  Ko = `_4EAxpNwKsio-`,
  qo = `H1m92BJ--s4-`,
  Jo = `f0Tq89nyQe8-`,
  Yo = `xPZK11Sc1JQ-`,
  Xo = `b1MUSj1oHnw-`,
  Zo = `T8tJM1F3udo-`,
  Qo = `hW-hKolSoxE-`,
  $o = `aGZ-5Q30Ngk-`,
  es = `uB59PztRaCQ-`,
  ts = `en11dmsuJBY-`,
  ns = `xBRR1g0yEMI-`,
  rs = `oPgGHbh2NoY-`,
  is = `L6PbUyknlek-`,
  as = `bS0DIyS4a8A-`,
  os = `_33R6t1oxzWA-`,
  ss = `IlXaXZNRfqM-`,
  cs = `_-4jLfc3JHMk-`,
  ls = `i2KdgpD0ejQ-`,
  us = `_04yjrdfbuOE-`,
  ds = `kY8RkeLneFg-`,
  fs = `jtjrzYcH64A-`,
  ps = `DG4SF3Ttgvw-`,
  ms = `HSL873gT3pI-`,
  hs = `GuW88zLPj1E-`;
function gs(e, t) {
  Ue(e, `steam://open/games/details/${t}`);
}
function _s(e, t) {
  t && (N.IN_CLIENT ? (window.location.href = t) : Ue(e, t));
}
function vs(e) {
  let { app: t, sort: n } = e,
    r = z(),
    i = te(t.appid),
    a = t.owner_steamids.filter((e) => e != r),
    o = ne(a),
    s = E(),
    c = X().data?.preferences().parenthesize_nicknames(),
    l = null;
  switch (t.exclude_reason) {
    case 0:
      break;
    case 2:
      l = `#FamilyGame_Excluded_License`;
      break;
    case 3:
    case 29:
      l = `#FamilyGame_Excluded_FreeApp`;
      break;
    case 4:
      l = i
        ? `#FamilyGame_Excluded_Private`
        : `#FamilyGame_Excluded_PrivateLicense`;
      break;
    case 1:
    case 10:
      l = `#FamilyGame_Excluded_OptedOut`;
      break;
    case 7:
      l = `#FamilyGame_Excluded_Nonrefundable_DLC`;
      break;
    case 9:
      l = `#FamilyGame_Excluded_ParentAppExcluded`;
      break;
    case 8:
      l = `#FamilyGame_Excluded_UnreleasedApp`;
      break;
    case 6:
      l = `#FamilyGame_Excluded_WrongAppType`;
      break;
    case 12:
    case 23:
    case 27:
      l = `#FamilyGame_Excluded_DevPackage`;
      break;
    case 13:
      l = `#FamilyGame_Excluded_FreeWeekend`;
      break;
    case 15:
      l = `#FamilyGame_Excluded_InvalidPackage`;
      break;
    case 18:
    case 16:
    case 20:
      l = `#FamilyGame_Excluded_Subscription`;
      break;
    case 11:
      l = `#FamilyGame_Excluded_SpecialPackage`;
      break;
    case 17:
      l = `#FamilyGame_Excluded_WrongLicenseType`;
      break;
    case 19:
      l = `#FamilyGame_Excluded_NoShareableApps`;
      break;
    case 21:
    case 22:
    case 26:
      l = `#FamilyGame_Excluded_Borrowed`;
      break;
    case 24:
      l = `#FamilyGame_Excluded_LicensePending`;
      break;
    case 25:
      l = `#FamilyGame_Excluded_RefundPending`;
      break;
    case 28:
      l = `#FamilyGame_Excluded_TimedTrial`;
      break;
    case 30:
      l = `#FamilyGame_Excluded_LicenseInactive`;
      break;
    default:
      l = `#FamilyGame_Excluded_Unknown`;
  }
  let u;
  (n == `date_acquired-asc` || n == `date_acquired-desc`) &&
    t.rt_time_acquired &&
    (u = (0, Y.jsx)(`div`, {
      className: void 0,
      children: k(
        `#FamilyGame_DateAcquired`,
        Ct(t.rt_time_acquired, {
          month: `long`,
          day: `numeric`,
          year: `numeric`,
          weekday: void 0,
        }),
      ),
    }));
  let d = (e) => bs(o[e].data, s.data?.get(new j(a[e]).GetAccountID()), c),
    f,
    p;
  if (
    (l &&
      (f = (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, { className: void 0, children: k(l) }),
          (0, Y.jsx)(`div`, {
            className: hs,
            children: k(`#FamilyGame_ExcludedCode`, t.exclude_reason),
          }),
        ],
      })),
    t.exclude_reason != 3)
  ) {
    if (
      (i &&
        !f &&
        (f = (0, Y.jsx)(`div`, {
          className: void 0,
          children: k(`#FamilyGame_Excluded_Private`),
        })),
      a.length == 0 || o.some((e) => !e.isSuccess))
    )
      p = null;
    else {
      let e = a.length != t.owner_steamids.length && !i;
      p =
        a.length == 1
          ? (0, Y.jsx)(`div`, {
              className: void 0,
              children: k(
                e
                  ? `#FamilyGames_FromTheLibraryOf_Single_Owned`
                  : `#FamilyGames_FromTheLibraryOf_Single`,
                d(0),
              ),
            })
          : (0, Y.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Qo,
                  children: k(
                    e
                      ? `#FamilyGames_FromTheLibraryOf_Header_Owned`
                      : `#FamilyGames_FromTheLibraryOf_Header`,
                  ),
                }),
                (0, Y.jsx)(`ul`, {
                  children: a.map((e, t) =>
                    (0, Y.jsx)(`li`, { className: void 0, children: d(t) }, e),
                  ),
                }),
              ],
            });
    }
  }
  return (0, Y.jsxs)(`div`, { className: ms, children: [f, p, u] });
}
function ys(e) {
  let { item: t } = e,
    n = te(t.appid),
    r = z(),
    i = t.owner_steamids.length;
  return (
    n && t.owner_steamids.includes(r) && --i,
    i <= 1 ? null : (0, Y.jsx)(`div`, { className: ss, children: i })
  );
}
function bs(e, t, n) {
  let r = e.m_strPlayerName;
  return (t && (r = n ? `${e.m_strPlayerName} (${t})` : `${t}*`), r);
}
function xs(e) {
  let t = new j(e),
    n = S(e),
    r = E(),
    i = X(),
    a = r.data?.get(t.GetAccountID()),
    o = i.data?.preferences().parenthesize_nicknames();
  return !n.isSuccess || !r.isSuccess || !i.isSuccess ? null : bs(n.data, a, o);
}
function Ss(e) {
  let { item: t, strSteamID: n } = e,
    r = xs(n),
    i = t.appid,
    { settings: a, mapAppsAllowed: o } = Ie(n).data,
    s = o?.get(t.appid) || !1,
    c = O(n),
    l = J.useCallback(() => {
      (Ve(a, !s, [i]), c.mutate(a));
    }, [i, a, c, s]);
  return !r || !a || !a.is_enabled || a.applist_base_id == 0
    ? null
    : (0, Y.jsx)(Me, {
        onSelected: l,
        children: k(
          s ? `#FamilyGame_DenyForChild` : `#FamilyGame_AllowForChild`,
          r,
        ),
      });
}
function Cs(e) {
  let { item: t, bOwnsGame: n, familyContext: r } = e,
    i = z(),
    { familyGroup: a, invalidateGamesList: o } = r,
    s = a.members.find((e) => e.steamid == i).role == 1,
    { data: c } = Re({ appid: t.appid }),
    l = n || t.exclude_reason == 0,
    u = te(t.appid),
    { mutateAsync: d } = x(t.appid),
    f = N.IN_CLIENT,
    p = J.useCallback(async () => {
      (await d(!u), o());
    }, [d, u, o]),
    m = J.useCallback(
      (e) => {
        c && _s(Se(e), `${N.STORE_BASE_URL}${c.store_url_path}`);
      },
      [c],
    ),
    g = J.useCallback(
      (e) => {
        gs(Se(e), t.appid);
      },
      [t],
    ),
    _ = f && l;
  return (0, Y.jsxs)(Ae, {
    children: [
      l &&
        (0, Y.jsx)(Me, {
          onSelected: () => {
            h(t.appid, t.name);
          },
          children: k(`#FamilyGame_PlayGame`),
        }),
      _ &&
        (0, Y.jsx)(Me, {
          onSelected: g,
          children: k(`#FamilyGame_OpenAppDetails`),
        }),
      c?.visible &&
        (0, Y.jsx)(Me, { onSelected: m, children: k(`#FamilyGame_ViewStore`) }),
      (0, Y.jsx)(Me, {
        onSelected: p,
        children: k(
          u ? `#FamilyGame_UnmarkAsPrivate` : `#FamilyGame_MarkAsPrivate`,
        ),
      }),
      s &&
        a.members
          .filter((e) => e.role == 2)
          .map((e) =>
            (0, Y.jsx)(Ss, { item: t, strSteamID: e.steamid }, e.steamid),
          ),
    ],
  });
}
function ws(e) {
  let {
      app: t,
      item: n,
      bShowLicenseCount: r,
      sort: i,
      className: a,
      children: o,
      ...s
    } = e,
    c = z(),
    l = J.useContext(Fs),
    u = (0, Y.jsx)(vs, { app: n, sort: i }),
    d = { direction: `right`, style: { minWidth: `320px` } },
    f = m(n.appid),
    { data: p } = Re(f),
    h = n.exclude_reason == 0 || n.exclude_reason == 3,
    _ = n.owner_steamids.some((e) => e == c),
    v = N.IN_CLIENT,
    y = p && p.visible,
    b = J.useCallback(
      (e) => {
        (me((0, Y.jsx)(Cs, { item: n, bOwnsGame: _, familyContext: l }), e),
          e.stopPropagation(),
          e.preventDefault());
      },
      [n, _, l],
    ),
    ee = (v && (h || _)) || y,
    x = J.useCallback(
      (e) => {
        v && (h || _)
          ? gs(Se(e), t.appid)
          : y && _s(Se(e), `${N.STORE_BASE_URL}${p.store_url_path}`);
      },
      [t.appid, h, _, p, y, v],
    );
  return (0, Y.jsx)(g, {
    id: f,
    name: n.name,
    bPreventNavigation: _ || h,
    bHidePrice: _,
    bShowWishlistButton: !_,
    hoverProps: d,
    className: os,
    elElementToAppend: u,
    children: (0, Y.jsxs)(F, {
      className: B(a, as, ee && `_2kADWaqVyG8-`),
      focusable: !0,
      onActivate: ee ? x : void 0,
      onContextMenu: b,
      ...s,
      children: [o, r && (0, Y.jsx)(ys, { item: n })],
    }),
  });
}
function Ts() {
  let [e, t] = J.useState(7);
  return [
    e,
    J.useCallback((e, n) => {
      let r;
      ((r = e <= 500 ? 3 : e <= 620 ? 5 : 7), t(r));
    }, []),
  ];
}
function Es(e) {
  let { nRows: t, setShowAll: n, setRows: r, nIncrement: i = 2 } = e,
    a = J.useRef(void 0);
  return (
    J.useEffect(() => {
      a.current?.BHasFocus() &&
        (a.current
          .Node()
          ?.GetLastFocusElement()
          .scrollIntoView({ block: `end` }),
        a.current?.Node().ForceMeasureFocusRing());
    }, [t]),
    (0, Y.jsxs)(F, {
      className: $o,
      children: [
        (0, Y.jsx)(`div`, {
          className: es,
          children: (0, Y.jsx)(M, {
            className: ts,
            navRef: a,
            onClick: () => {
              r(t + i);
            },
            children: k(`#FamilyGames_ShowMore`),
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: es,
          children: (0, Y.jsx)(M, {
            className: ts,
            onClick: () => n(!0),
            children: k(`#FamilyGames_ShowAll`),
          }),
        }),
      ],
    })
  );
}
function Ds(e, t) {
  let [n, r] = Ts(),
    [i, a] = J.useState(2),
    [o, s] = J.useState(t),
    c = J.useMemo(
      () =>
        (o ? e : e.slice(0, n * i))?.map((e) => ({
          appid: e.appid,
          name: e.name,
        })),
      [o, e, i, n],
    ),
    l = Math.max(e.length - n * i, 0);
  return {
    rgApps: c,
    nRows: i,
    setRows: a,
    bDisplayingAll: o || l == 0,
    setShowAll: s,
    nColumns: n,
    OnWidthChanged: r,
  };
}
function Os(e) {
  let { rgSortedGames: t, strLabel: n, bShowLicenseCount: r = !0, sort: i } = e,
    {
      rgApps: a,
      nRows: o,
      setRows: s,
      bDisplayingAll: c,
      setShowAll: l,
      nColumns: u,
      OnWidthChanged: d,
    } = Ds(t, !1),
    f = J.useCallback(
      (e, n, a) =>
        (0, Y.jsx)(ws, {
          app: e,
          item: t[n],
          bShowLicenseCount: r,
          sort: i,
          ...a,
        }),
      [t, r, i],
    );
  return t?.length
    ? (0, Y.jsxs)(`div`, {
        className: ns,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Qo,
            children: [
              (0, Y.jsx)(`div`, { className: rs, children: n }),
              (0, Y.jsx)(`div`, {
                className: is,
                children: k(`#FamilyGames_Count`, t.length),
              }),
            ],
          }),
          (0, Y.jsx)(ir, {
            rgApps: a,
            nColumns: u,
            onWidthChanged: d,
            renderItem: f,
          }),
          !c && (0, Y.jsx)(Es, { nRows: o, setRows: s, setShowAll: l }),
        ],
      })
    : null;
}
function ks(e) {
  let { rgOptions: t, sort: n, setSort: r, bAscending: i, children: a } = e,
    o = t.findIndex((e) => e == n),
    s = o != -1,
    c = t[(o + 1) % t.length];
  return (0, Y.jsxs)(F, {
    className: B(fs, s && `pCRgxrY3i3Q-`),
    onActivate: () => r(c),
    children: [
      a,
      (0, Y.jsx)(`div`, {
        className: ps,
        children: s && (0, Y.jsx)(xt, { direction: i ? `up` : `down` }),
      }),
    ],
  });
}
function As(e) {
  let { sort: t, setSort: n } = e;
  return (0, Y.jsxs)(F, {
    className: ds,
    children: [
      (0, Y.jsx)(ks, {
        rgOptions: [`alpha-asc`, `alpha-desc`],
        sort: t,
        setSort: n,
        bAscending: t == `alpha-asc`,
        children: k(`#FamilyGames_Sort_Alphabetical`),
      }),
      (0, Y.jsx)(ks, {
        rgOptions: [`date_acquired-desc`, `date_acquired-asc`],
        sort: t,
        setSort: n,
        bAscending: t == `date_acquired-asc`,
        children: k(`#FamilyGames_Sort_DateAcquired`),
      }),
    ],
  });
}
function js(e) {
  let { strFilter: t, setFilter: n } = e,
    r = J.useCallback(
      (e) => {
        n(e.target.value);
      },
      [n],
    );
  return (0, Y.jsx)(F, {
    className: cs,
    children: (0, Y.jsx)(rt, {
      className: ls,
      value: t,
      onChange: r,
      placeholder: k(`#Parental_GameList_Search`),
    }),
  });
}
function Ms(e) {
  let { strFilter: t, setFilter: n, sort: r, setSort: i } = e;
  return (0, Y.jsxs)(F, {
    className: us,
    children: [
      (0, Y.jsx)(As, { sort: r, setSort: i }),
      (0, Y.jsx)(js, { strFilter: t, setFilter: n }),
    ],
  });
}
var Ns = { bIncludeOwn: !0, bIncludeExcluded: !0 };
function Ps(e) {
  let { familyGroupID: t, children: n } = e,
    r = Kt(t, Ns),
    i = U(t),
    a = J.useMemo(
      () => ({
        familyGroupID: t,
        familyGroup: i.data?.toObject(),
        invalidateGamesList: r,
      }),
      [t, i.data, r],
    );
  return (0, Y.jsx)(Fs.Provider, { value: a, children: n });
}
var Fs = J.createContext(void 0);
function Is(e) {
  let { familyGroupID: t } = e,
    [n, r] = J.useState(``),
    [i, a] = J.useState(`alpha-asc`),
    o = Rt(t, Ns),
    s = Lt(o.data, i, n),
    c = J.useMemo(() => s?.filter((e) => e.exclude_reason == 0), [s]),
    l = J.useMemo(
      () => s?.filter((e) => e.exclude_reason != 0 && e.exclude_reason != 3),
      [s],
    ),
    u = J.useMemo(() => s?.filter((e) => e.exclude_reason == 3), [s]);
  return (0, Y.jsxs)(Ps, {
    familyGroupID: t,
    children: [
      o.isFetching &&
        (0, Y.jsx)(`div`, {
          className: `J3pdogWCn-Q-`,
          children: (0, Y.jsx)(y, {}),
        }),
      o.isError &&
        (0, Y.jsx)(`div`, {
          className: `_5EqFKLlbQGM-`,
          children: k(`#FamilyGames_Error`, o.error),
        }),
      o.isSuccess &&
        (0, Y.jsxs)(`div`, {
          className: `uOFsQx3qEiM-`,
          children: [
            o.data?.length > 0 &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(Ms, {
                    strFilter: n,
                    setFilter: r,
                    sort: i,
                    setSort: a,
                  }),
                  (0, Y.jsx)(Os, {
                    rgSortedGames: c,
                    strLabel: k(`#FamilyGames_IncludedGames`),
                    sort: i,
                  }),
                  (0, Y.jsx)(Os, {
                    rgSortedGames: l,
                    bShowLicenseCount: !1,
                    strLabel: k(`#FamilyGames_ExcludedGames`),
                    sort: i,
                  }),
                  (0, Y.jsx)(Os, {
                    rgSortedGames: u,
                    bShowLicenseCount: !1,
                    strLabel: k(`#FamilyGames_FreeGames`),
                    sort: i,
                  }),
                  s?.length == 0 &&
                    (0, Y.jsx)(`div`, {
                      className: void 0,
                      children: k(`#FamilyGames_EmptySearch`),
                    }),
                ],
              }),
            o.data?.length == 0 &&
              (0, Y.jsx)(`div`, {
                className: void 0,
                children: k(`#FamilyGames_NoGames`),
              }),
          ],
        }),
    ],
  });
}
function Ls(e, t) {
  let n = (0, Q.default)()
      .startOf(`day`)
      .add(30 * e, `minutes`),
    r = (0, Q.default)()
      .startOf(`day`)
      .add(30 * t, `minutes`),
    i = Intl.DateTimeFormat(St.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    });
  return (
    i.format(n.toDate()).replace(` `, `\xA0`) +
    `-` +
    i.format(r.toDate()).replace(` `, `\xA0`)
  );
}
function Rs(e) {
  if (e == BigInt(0)) return k(`#Parental_Playtime_Never`);
  if (e == BigInt(0xffffffffffff)) return k(`#Parental_Playtime_AnyTime`);
  let t = [],
    n = -1;
  for (let r = 0; r < 48; r++)
    e & (BigInt(1) << BigInt(r))
      ? n == -1 && (n = r)
      : n != -1 && (t.push(Ls(n, r)), (n = -1));
  return (n != -1 && (t.push(Ls(n, 48)), (n = -1)), t.join(`, `));
}
function zs(e, t) {
  return t
    .members()
    .filter((t) => t.role() == 2 && t.steamid() != e)
    .map((e) => e.steamid());
}
function Bs(e) {
  let { steamid: t, settings: n, familyGroup: r } = e,
    i = pe(t, n),
    a = pt(t),
    { setErrorMessage: o } = V();
  (H(i, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`),
    H(a, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`));
  let [s, c] = (0, J.useState)(``),
    l = zs(t, r),
    u = ne(l),
    d = we(u, (e) => e.isSuccess),
    f = (0, J.useMemo)(() => {
      let e = [];
      if (
        (e.push({ label: k(`#Parental_EnabledSetting`), data: `enabled` }),
        e.push({ label: k(`#Parental_DisabledSetting`), data: `disabled` }),
        d > 0)
      ) {
        e.push({ bIsSeparator: !0 });
        for (let t of u) {
          if (!t.isSuccess) continue;
          let n = k(`#Parental_CopySettingsFrom`, t.data.m_strPlayerName);
          e.push({ label: n, data: `copy_${t.data.GetSteamIDAsString()}` });
        }
      }
      return e;
    }, [u, d]),
    p = J.useCallback(
      (e) => {
        o(null);
        let t = e.data;
        if (t == `enabled`) i.mutate();
        else if (t == `disabled`) a.mutate();
        else if (t.startsWith(`copy_`)) {
          let e = t.split(`_`);
          c(e[1]);
        }
      },
      [o, i, a],
    ),
    m = n.is_enabled ? `enabled` : `disabled`;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(Vs, {
        steamid: t,
        otherChildrenQuery: u,
        confirmCopy: s,
        setConfirmCopy: c,
      }),
      (0, Y.jsx)(Ot, {
        strClassName: Ka,
        controlled: !0,
        bottomSeparator: `none`,
        label: k(`#Parental_EnableDropdown`),
        rgOptions: f,
        selectedOption: m,
        onChange: p,
        bMatchWidth: !1,
      }),
    ],
  });
}
function Vs(e) {
  let {
      steamid: t,
      otherChildrenQuery: n,
      confirmCopy: r,
      setConfirmCopy: i,
    } = e,
    a = S(t),
    o = Ne(),
    s = J.useCallback(() => {
      r.length != 0 && (o.mutate({ steamidSrc: r, steamidDest: t }), i(``));
    }, [t, r, i, o]),
    c = ``;
  if (r.length > 0) {
    for (let e of n)
      e.isSuccess &&
        e.data.GetSteamIDAsString() == r &&
        (c = e.data.m_strPlayerName);
    c.length == 0 && (c = r);
  }
  let l = t;
  a.isSuccess && (l = a.data.m_strPlayerName);
  let u = k(`#Parental_CopySettingsConfirmation_Desc`, l, c);
  return (0, Y.jsx)(P, {
    active: r.length > 0,
    children: (0, Y.jsx)(I, {
      closeModal: () => i(``),
      onOK: s,
      strTitle: k(`#Parental_CopySettingsConfirmation_Title`),
      children: (0, Y.jsx)(`div`, { className: Qa, children: u }),
    }),
  });
}
function Hs(e) {
  let { steamid: t, settings: n } = e,
    r = O(t),
    { setErrorMessage: i } = V();
  H(r, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let a = J.useMemo(
      () => [
        { label: k(`#Parental_Baselist_AllGames`), data: 0 },
        { label: k(`#Parental_Baselist_NoGames`), data: 1 },
      ],
      [],
    ),
    o = J.useCallback(
      (e, t) => {
        (i(null), (n.applist_base_id = e.data), r.mutate(n));
      },
      [n, r, i],
    );
  return (0, Y.jsx)(Ot, {
    focusable: !0,
    strClassName: Ka,
    bottomSeparator: `none`,
    label: k(`#Parental_Baselist_Label`),
    rgOptions: a,
    selectedOption: n.applist_base_id,
    onChange: o,
  });
}
function Us(e) {
  let { steamid: t, settings: n, game: r, ...i } = e,
    a = O(t),
    o = r.appid,
    s = n.applist_custom.find((e) => e.appid == o),
    { setErrorMessage: c } = V();
  H(a, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let l = s?.is_allowed || !1,
    u =
      r.img_icon_url ||
      (r.img_icon_hash &&
        N.MEDIA_CDN_COMMUNITY_URL +
          `images/apps/` +
          o +
          `/` +
          r.img_icon_hash +
          `.jpg`),
    d = J.useCallback(() => {
      (c(null), Ve(n, !l, [o]), a.mutate(n));
    }, [o, n, a, c, l]);
  return (0, Y.jsxs)(F, {
    className: B(co, l && `WKEuj5y5CYU-`),
    onActivate: d,
    ...i,
    children: [
      u && (0, Y.jsx)(`img`, { className: `wQy1iBjpNNI-`, src: u }),
      !u && (0, Y.jsx)(`div`, { className: `wQy1iBjpNNI-` }),
      (0, Y.jsx)(`div`, { className: lo, children: r.name }),
      (0, Y.jsx)(lt, { className: uo, checked: l, onChange: d }),
    ],
  });
}
function Ws(e) {
  let {
      setContentDescriptors: t,
      selectedContentDescriptors: n,
      showFilter: r,
      setShowFilter: i,
      onDismiss: a,
    } = e,
    [o, s] = (0, J.useState)(n),
    c = (e) => (t) => {
      let n = [];
      if (t) {
        let t = [e].concat(fe(e));
        for (let e of se) (o.includes(e) || t.includes(e)) && n.push(e);
      } else {
        let t = [e].concat(le(e));
        for (let e of se) o.includes(e) && !t.includes(e) && n.push(e);
      }
      s(n);
    },
    l = [
      { label: k(`#Parental_GameList_ShowAllFilter`), data: `show_all` },
      {
        label: k(`#Parental_GameList_ShowAllowedOnlyFilter`),
        data: `show_allowed_only`,
      },
      {
        label: k(`#Parental_GameList_ShowDeniedOnlyFilter`),
        data: `show_denied_only`,
      },
    ];
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(Et, {
        children: k(`#Parental_GameList_ShowGamesThatAreFilterHeader`),
      }),
      (0, Y.jsx)(F, {
        className: No,
        children: (0, Y.jsx)(Je, {
          focusable: !0,
          rgOptions: l,
          selectedOption: r,
          onChange: (e) => i(e.data),
        }),
      }),
      (0, Y.jsx)(Et, {
        children: k(`#Parental_GameList_ContentDescriptorFilterHeader`),
      }),
      (0, Y.jsx)(F, {
        className: Po,
        children: se.map((e) => {
          let t = o.includes(e),
            n = c(e);
          return (0, Y.jsxs)(
            F,
            {
              className: Fo,
              children: [
                (0, Y.jsx)(F, { className: Io, children: ce(e) }),
                (0, Y.jsx)(F, {
                  className: Lo,
                  children: (0, Y.jsx)(gt, { checked: t, onChange: n }),
                }),
              ],
            },
            e,
          );
        }),
      }),
      (0, Y.jsx)(at, {
        onCancel: a,
        onOK: () => {
          (t(o), a());
        },
        strOKText: k(`#Parental_GameList_Button_Apply`),
        className: Ro,
      }),
    ],
  });
}
function Gs(e) {
  let {
      strFilter: t,
      setFilter: n,
      strView: r,
      setView: i,
      setContentDescriptors: a,
      selectedContentDescriptors: o,
      showFilter: s,
      setShowFilter: c,
    } = e,
    [l, u] = (0, J.useState)(!1);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(v, {
        active: l,
        onDismiss: () => u(!1),
        className: void 0,
        children: (0, Y.jsx)(Ws, {
          selectedContentDescriptors: o,
          setContentDescriptors: a,
          showFilter: s,
          setShowFilter: c,
          onDismiss: () => u(!1),
        }),
      }),
      (0, Y.jsxs)(F, {
        className: to,
        children: [
          (0, Y.jsx)(`div`, {
            className: eo,
            children: k(`#Parental_GameList_Header`),
          }),
          (0, Y.jsxs)(F, {
            className: no,
            children: [
              (0, Y.jsxs)(`div`, {
                className: ro,
                children: [
                  (0, Y.jsx)(F, {
                    className: B(Mo, r == `list` && `fVIhhOlMec8-`),
                    onActivate: () => i(`list`),
                    children: (0, Y.jsx)(Ge, {
                      toolTipContent: k(`#Parental_GameList_List`),
                      children: (0, Y.jsx)(vt, {}),
                    }),
                  }),
                  (0, Y.jsx)(F, {
                    className: B(Mo, r == `grid` && `fVIhhOlMec8-`),
                    onActivate: () => i(`grid`),
                    children: (0, Y.jsx)(Ge, {
                      toolTipContent: k(`#Parental_GameList_Grid`),
                      children: (0, Y.jsx)(Qe, {}),
                    }),
                  }),
                ],
              }),
              (0, Y.jsx)(js, { strFilter: t, setFilter: n }),
              (0, Y.jsx)(F, {
                className: zo,
                onActivate: () => u(!0),
                children: (0, Y.jsx)(Ge, {
                  toolTipContent: k(`#Parental_GameList_Filter`),
                  children: (0, Y.jsx)(Le, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ks(e) {
  let t = ht(),
    n = [`ParentalSearchSuggestions`, e];
  return f({
    queryKey: n,
    queryFn: async () => {
      if (e.length < 2) return [];
      let r = Pt.Init(_t);
      (r.Body().set_query_name(JSON.stringify(n)),
        r.Body().set_search_term(e),
        ut(r),
        st(r, { include_basic_info: !0, include_assets: !0 }),
        et(r, {
          type_filters: { include_games: !0 },
          price_filters: { only_free_items: !0 },
        }),
        r.Body().set_max_results(20),
        r.Body().set_use_spellcheck(!0));
      let i = await wt.SearchSuggestions(t, r);
      return i.BSuccess()
        ? i
            .Body()
            .store_items()
            .map((e) => {
              let t = e.name().replace(/^The |^A |^An /i, ``);
              return {
                appid: e.appid(),
                name: e.name(),
                sort_as: t,
                capsule_filename: e.assets().library_capsule(),
                img_icon_hash: e.assets().community_icon(),
                searchSuggestion: !0,
              };
            })
        : [];
    },
    placeholderData: p,
  });
}
function qs(e) {
  let t = e.applist_custom.map((e) => e.appid),
    n = C(t, { include_assets: !0 });
  return f({
    queryKey: [`ParentalStoreItems`, t],
    queryFn: async () =>
      t
        .map((e) => {
          let t = Ce.Get().GetApp(e);
          return (
            t && {
              appid: t.GetAppID(),
              name: t.GetName(),
              capsule_filename: t.GetAssets().GetLibraryCapsuleURL(),
              img_icon_url: t.GetAssets().GetCommunityIconURL(),
              parentalApp: !0,
            }
          );
        })
        .filter((e) => !!e),
    enabled: n != 1,
    placeholderData: p,
  });
}
function Js(e, t, n) {
  let r = W()?.data.family_groupid(),
    i = Rt(r, {
      bIncludeOwn: !0,
      bIncludeExcluded: !0,
      bIncludeNonGames: !0,
      for_account_id: parseInt(e.steamid),
    }).data,
    a = qs(e).data,
    o = Ks(t).data,
    [s, c] = J.useMemo(() => {
      let n = j
          .InitFromAccountID(parseInt(e.steamid), N.EUNIVERSE)
          .ConvertTo64BitString(),
        r = i?.filter(
          (e) =>
            e.app_type != 4 &&
            (e.exclude_reason == 0 || e.owner_steamids.includes(n)),
        ),
        a = i?.filter((e) => e.app_type == 4 && e.owner_steamids.includes(n));
      return [r, t ? o?.concat(a || []) : []];
    }, [i, o, t, e.steamid]);
  ((o = c?.filter((e) => s.findIndex((t) => t.appid == e.appid) == -1)),
    (a = a?.filter((e) => c.findIndex((t) => t.appid == e.appid) == -1)));
  let l = J.useMemo(() => {
    let e = new Map();
    return (
      a?.forEach((t) => e.set(t.appid, t)),
      s?.forEach((t) => e.set(t.appid, t)),
      Array.from(e.values())
    );
  }, [s, a]);
  return [Lt(l, `alpha-asc`, t, n), Lt(c, `alpha-asc`, t, n)];
}
function Ys(e) {
  let {
      strToken: t,
      steamid: n,
      nAllowed: r,
      nTotal: i,
      setAllowAllApps: a,
    } = e,
    o = xs(n);
  return (0, Y.jsxs)(`div`, {
    className: so,
    children: [
      (0, Y.jsx)(`div`, {
        className: eo,
        children: k(t + (i ? `_Count` : ``), r, i, o),
      }),
      a &&
        (0, Y.jsxs)(F, {
          className: `euNsDY1STfk-`,
          children: [
            (0, Y.jsx)(M, {
              onClick: () => a(!0),
              children: k(`#Parental_GameList_AllowAll`),
            }),
            (0, Y.jsx)(M, {
              onClick: () => a(!1),
              children: k(`#Parental_GameList_DenyAll`),
            }),
          ],
        }),
    ],
  });
}
function Xs(e) {
  let {
      strTitleToken: t,
      nAllowed: n,
      nTotal: r,
      setAllowAllApps: i,
      strView: a,
      steamid: o,
      settings: s,
      rgAllApps: c,
    } = e,
    {
      rgApps: l,
      bDisplayingAll: u,
      nColumns: d,
      OnWidthChanged: f,
    } = Ds(c, !0);
  return (
    ze(u, `Parental Control Library not displaying all`),
    c.length == 0
      ? null
      : (0, Y.jsxs)(`div`, {
          className: oo,
          children: [
            (0, Y.jsx)(Ys, {
              strToken: t,
              steamid: o,
              nAllowed: n,
              nTotal: r,
              setAllowAllApps: i,
            }),
            a == `list` &&
              (0, Y.jsx)(Qs, { steamid: o, settings: s, rgSortedGames: c }),
            a == `grid` &&
              (0, Y.jsx)(ec, {
                steamid: o,
                settings: s,
                rgSortedGames: l,
                nColumns: d,
                onWidthChanged: f,
              }),
          ],
        })
  );
}
function Zs(e) {
  let { steamid: t, settings: n, mapAppsAllowed: r } = e,
    i = O(t),
    [a, o] = J.useState(``),
    [s, c] = J.useState([]),
    [l, u] = J.useState(`show_all`),
    [d, f] = J.useState(`grid`),
    [p, m] = Js(n, a, s),
    h = p?.filter((e) => !he(e.appid, !0, n, r)),
    g = new Set(h.map((e) => e.appid)),
    _ = h?.length || 0,
    v = (!a && p?.length) || 0,
    y = J.useCallback(
      (e) => {
        (Ve(
          n,
          e,
          p.map((e) => e.appid),
        ),
          i.mutate(n));
      },
      [n, p, i],
    );
  return p.length == 0 && !a && s.length === 0
    ? null
    : (l === `show_allowed_only`
        ? (p = p.filter((e) => g.has(e.appid)))
        : l === `show_denied_only` && (p = p.filter((e) => !g.has(e.appid))),
      (0, Y.jsxs)(`div`, {
        className: io,
        children: [
          (0, Y.jsx)(Gs, {
            strFilter: a,
            setFilter: o,
            strView: d,
            setView: f,
            selectedContentDescriptors: s,
            setContentDescriptors: c,
            showFilter: l,
            setShowFilter: u,
          }),
          (0, Y.jsxs)(`div`, {
            className: ao,
            children: [
              (0, Y.jsx)(Xs, {
                strTitleToken: `#Parental_GameList_Library`,
                strView: d,
                nAllowed: _,
                nTotal: v,
                setAllowAllApps: !a && y,
                steamid: t,
                settings: n,
                rgAllApps: p,
              }),
              (0, Y.jsx)(Xs, {
                strTitleToken: `#Parental_GameList_Store`,
                strView: d,
                steamid: t,
                settings: n,
                rgAllApps: m,
              }),
              p.length + m.length == 0 &&
                (0, Y.jsx)(`div`, {
                  className: `VYrViP5dwRQ-`,
                  children: k(`#Parental_GameList_Empty`),
                }),
            ],
          }),
        ],
      }));
}
function Qs(e) {
  let { steamid: t, settings: n, rgSortedGames: r } = e,
    i = parseInt(Wa),
    a = J.useCallback(
      (e) => (0, Y.jsx)(Us, { steamid: t, settings: n, game: r[e] }, e),
      [t, n, r],
    );
  return (0, Y.jsx)(Un, {
    nRows: r?.length,
    nItemHeight: i,
    nRowGap: 0,
    renderItem: a,
  });
}
function $s(e) {
  let {
    app: t,
    item: n,
    bIsAllowed: r,
    setAllowed: i,
    className: a,
    children: o,
    ...s
  } = e;
  return (0, Y.jsx)(F, {
    className: B(a, jo, r && `WKEuj5y5CYU-`),
    focusable: !0,
    onActivate: () => i(t, !r),
    ...s,
    children: o,
  });
}
function ec(e) {
  let {
      steamid: t,
      settings: n,
      rgSortedGames: r,
      nColumns: i,
      onWidthChanged: a,
    } = e,
    o = O(t),
    s = J.useMemo(() => r?.map((e) => ({ appid: e.appid, name: e.name })), [r]),
    c = J.useCallback(
      (e, t) => {
        (Ve(n, t, [e.appid]), o.mutate(n));
      },
      [n, o],
    ),
    l = J.useCallback(
      (e, t, r) => {
        let i =
          n.applist_custom.find((t) => t.appid == e.appid)?.is_allowed || !1;
        return (0, Y.jsx)($s, {
          app: e,
          item: s[t],
          bIsAllowed: i,
          setAllowed: c,
          ...r,
        });
      },
      [s, n, c],
    );
  return (0, Y.jsx)(ir, {
    rgApps: s,
    nColumns: i,
    onWidthChanged: a,
    renderItem: l,
  });
}
function tc(e) {
  let { steamid: t, settings: n, mapAppsAllowed: r } = e;
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(Hs, { steamid: t, settings: n }),
      n.applist_base_id != 0 &&
        (0, Y.jsx)(Zs, { steamid: t, settings: n, mapAppsAllowed: r }),
    ],
  });
}
function nc(e) {
  let { steamid: t, settings: n, feature: r, label: i } = e,
    a = !!(n.enabled_features & (1 << r)),
    o = O(t),
    s = J.useCallback(
      (e) => {
        let t = n.enabled_features ^ (1 << r);
        ((n.enabled_features = t), o.mutate(n));
      },
      [o, n, r],
    );
  return (0, Y.jsx)(yt, {
    className: qa,
    bottomSeparator: `none`,
    label: k(i),
    checked: a,
    onChange: s,
  });
}
var rc = {
  0: null,
  1: {
    featureDescription: `#Parental_Feature_Store`,
    requestDescription: `#Parental_FeatureRequest_Store`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Store_Self`,
  },
  2: {
    featureDescription: `#Parental_Feature_Community`,
    requestDescription: `#Parental_FeatureRequest_Community`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Community_Self`,
  },
  3: {
    featureDescription: `#Parental_Feature_Profile`,
    requestDescription: `#Parental_FeatureRequest_Profile`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Profile_Self`,
  },
  4: {
    featureDescription: `#Parental_Feature_Friends`,
    requestDescription: `#Parental_FeatureRequest_Friends`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Friends_Self`,
  },
  5: {
    featureDescription: `#Parental_Feature_News`,
    requestDescription: `#Parental_FeatureRequest_News`,
    requestDescriptionSelf: `#Parental_FeatureRequest_News_Self`,
  },
  6: {
    featureDescription: `#Parental_Feature_Trading`,
    requestDescription: `#Parental_FeatureRequest_Trading`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Trading_Self`,
  },
  7: {
    featureDescription: `#Parental_Feature_Settings`,
    requestDescription: `#Parental_FeatureRequest_Settings`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Settings_Self`,
  },
  8: {
    featureDescription: `#Parental_Feature_Console`,
    requestDescription: `#Parental_FeatureRequest_Console`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Console_Self`,
  },
  9: {
    featureDescription: `#Parental_Feature_Browser`,
    requestDescription: `#Parental_FeatureRequest_Browser`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Browser_Self`,
  },
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: {
    featureDescription: `#Parental_Feature_Desktop`,
    requestDescription: `#Parental_FeatureRequest_Desktop`,
    requestDescriptionSelf: `#Parental_FeatureRequest_Desktop_Self`,
  },
  17: null,
};
function ic(e) {
  let { steamid: t, settings: n } = e,
    r = J.useRef(n.enabled_features),
    i = [1, 2, 3, 4],
    a = [10, 11, 12, 13, 14, 15],
    o = [];
  for (let e = 1; e < 17; e++)
    !a.includes(e) && (i.includes(e) || r.current & (1 << e)) && o.push(e);
  return (0, Y.jsxs)(`div`, {
    className: fo,
    children: [
      (0, Y.jsx)(`hr`, {}),
      o.map((e) =>
        rc[e]
          ? (0, Y.jsxs)(
              J.Fragment,
              {
                children: [
                  (0, Y.jsx)(nc, {
                    steamid: t,
                    settings: n,
                    feature: e,
                    label: rc[e].featureDescription,
                  }),
                  (0, Y.jsx)(`hr`, {}),
                ],
              },
              e,
            )
          : null,
      ),
    ],
  });
}
function ac(e) {
  let {
      className: t,
      enabled: n,
      locked: r,
      slotIndex: i,
      onToggle: a,
      dragState: o,
      setDragState: s,
      ...c
    } = e,
    [l, u] = (0, J.useState)(!1),
    d = (0, J.useRef)(void 0),
    f = (e) => {
      (o !== null && !r && n !== o && a(i),
        e.target.releasePointerCapture(e.pointerId));
    },
    p = (e) => {
      e.target.releasePointerCapture(e.pointerId);
    },
    m = (e) => {
      (s(!n), u(!0), a(i), e.target.releasePointerCapture(e.pointerId));
    },
    h = () => {
      s(null);
    },
    g = () => {
      (!r && !l && a(i), s(null), u(!1));
    };
  return (0, Y.jsx)(F, {
    ref: d,
    ...c,
    className: B(t, wo, n && `_0-foDtgz9l8-`, r && `_2A5i29Vzbts-`),
    onActivate: g,
    onPointerDown: m,
    onPointerEnter: f,
    onPointerLeave: p,
    onPointerUp: h,
  });
}
function oc(e) {
  let { className: t, nWindows: n, nLockedWindows: r, onToggle: i } = e,
    a = [],
    o = Intl.DateTimeFormat(St.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    }),
    [s, c] = (0, J.useState)(null);
  for (let e = 0; e < 48; e++) {
    let t = n & (BigInt(1) << BigInt(e)),
      o = r && r & (BigInt(1) << BigInt(e));
    a.push(
      (0, Y.jsx)(
        ac,
        {
          enabled: !!t,
          locked: !!o,
          slotIndex: e,
          onToggle: i,
          dragState: s,
          setDragState: c,
        },
        e,
      ),
    );
  }
  for (let e = 0; e < 48; e += 8) {
    let t = { gridColumnStart: e + 1, gridColumnEnd: e + 9 };
    a.push(
      (0, Y.jsx)(
        `div`,
        { className: B(Co, `HashMark` + e), style: t },
        `HashMark` + e,
      ),
    );
  }
  for (let e = 0; e <= 48; e += 8) {
    let t = (0, Q.default)()
        .startOf(`day`)
        .add(Math.floor(e / 2), `hours`),
      n = o.format(t.toDate()),
      r = e == 0 ? 0 : e - 4,
      i = e == 0 || e == 48 ? 4 : 8,
      s = { gridColumnStart: r + 1, gridColumnEnd: r + 1 + i };
    a.push(
      (0, Y.jsx)(
        `div`,
        { className: B(So, `Hour` + e), style: s, children: n },
        `Hour` + e,
      ),
    );
  }
  return (0, Y.jsx)(F, {
    className: B(xo, t),
    onMouseLeave: () => c(null),
    children: a,
  });
}
function sc(e) {
  let { steamid: t, settings: n, dayIndexStart: r, closeModal: i } = e,
    [a, o] = J.useState(r),
    s = J.useRef(Object.assign({}, n)),
    c = O(t);
  return (0, Y.jsx)(I, {
    className: vo,
    closeModal: i,
    onOK: () => {
      (c.mutate(s.current), i());
    },
    strTitle: (0, Y.jsx)(Et, {
      className: eo,
      children: k(`#Parental_PlaytimeWindows_Title`),
    }),
    children: (0, Y.jsx)(lc, {
      restrictions: s.current.playtime_restrictions?.playtime_days[a],
      dayIndex: a,
      setDayIndex: o,
    }),
  });
}
function cc(e) {
  let { dayIndex: t, onChange: n } = e,
    r = J.useCallback(
      (e) => {
        n(e.data);
      },
      [n],
    ),
    i = gc();
  return (0, Y.jsx)(Je, {
    rgOptions: i,
    selectedOption: t,
    onChange: r,
    strDropDownButtonClassName: Do,
    arrowClassName: void 0,
    contextMenuPositionOptions: {
      bMatchWidth: !0,
      bDisablePopTop: !0,
      bFitToWindow: !0,
    },
  });
}
function lc(e) {
  let { restrictions: t, dayIndex: n, setDayIndex: r } = e,
    [i, a] = J.useState(BigInt(parseInt(t?.allowed_time_windows) || 0)),
    o = Ke();
  J.useEffect(() => {
    a(BigInt(parseInt(t?.allowed_time_windows) || 0));
  }, [t]);
  let s = J.useCallback(
      (e) => {
        let n = i ^ (BigInt(1) << BigInt(e));
        ((t.allowed_time_windows = n.toString()), a(n));
      },
      [i, t],
    ),
    c = J.useCallback(
      (e) => {
        ((t.allowed_time_windows = e.toString()), a(e));
      },
      [t],
    ),
    l = J.useCallback(
      (e) => {
        t.allowed_daily_minutes = e;
      },
      [t],
    );
  return (0, Y.jsxs)(`div`, {
    className: To,
    children: [
      (0, Y.jsxs)(F, {
        className: Eo,
        children: [
          (0, Y.jsx)(cc, { dayIndex: n, onChange: r }),
          (0, Y.jsxs)(`div`, {
            className: Oo,
            children: [
              (0, Y.jsx)(`div`, { className: ko, children: Rs(i) }),
              (0, Y.jsxs)(F, {
                className: Ao,
                children: [
                  i == BigInt(0) &&
                    (0, Y.jsx)(R, {
                      onClick: () => c(BigInt(0xffffffffffff)),
                      children: k(`#Parental_PlaytimeWindows_AllowAll`),
                    }),
                  i != BigInt(0) &&
                    (0, Y.jsx)(R, {
                      onClick: () => c(BigInt(0)),
                      children: k(`#Parental_PlaytimeWindows_ClearAll`),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: yo,
        children: [
          (0, Y.jsx)(oc, { className: bo, nWindows: i, onToggle: s }),
          !o &&
            (0, Y.jsx)(dc, {
              className: `pFHGbAueY40-`,
              nWindows: i,
              onSet: c,
            }),
        ],
      }),
      (0, Y.jsx)(mc, {
        strLabel: `#Parental_Playtime_Limit`,
        nMinutes: t.allowed_daily_minutes || 0,
        onSelected: l,
      }),
    ],
  });
}
function uc(e, t) {
  let n = BigInt(0),
    r = BigInt(1) << BigInt(e);
  for (let i = e; i < t; i++) ((n |= r), (r <<= BigInt(1)));
  return n;
}
function dc(e) {
  let { className: t, nWindows: n, onSet: r, ...i } = e,
    [a, o] = J.useState((0, Q.default)().startOf(`day`)),
    [s, c] = J.useState((0, Q.default)().startOf(`day`).add(1, `day`)),
    l = a,
    u = (0, Q.default)(s),
    d = (l.hour() ?? 0) * 2 + (l.minute() ?? 0) / 30,
    f = (u.hour() ?? 0) * 2 + (u.minute() ?? 0) / 30 + (u.day() - l.day()) * 48,
    p = J.useCallback(() => {
      let e = uc(d, f);
      r(n | e);
    }, [r, n, d, f]),
    m = J.useCallback(() => {
      let e = uc(d, f);
      r(n & ~e);
    }, [r, n, d, f]),
    h = J.useCallback(
      (e) => {
        let t = e;
        (o(t), t > u && c(t));
      },
      [u],
    ),
    g = J.useCallback(
      (e) => {
        let t = e;
        ((t =
          t.hours() != 0 || t.minutes() != 0
            ? t.day(l.day())
            : t.day(l.day() + 1)),
          c(t >= l ? t : (0, Q.default)(l)));
      },
      [l],
    );
  return (0, Y.jsxs)(`div`, {
    className: B(Bo, t),
    ...i,
    children: [
      (0, Y.jsx)(`div`, { children: k(`#Parental_PlaytimeWindows_From`) }),
      (0, Y.jsx)(`div`, { children: k(`#Parental_PlaytimeWindows_To`) }),
      (0, Y.jsx)(`div`, {}),
      (0, Y.jsx)(Ua.default, {
        className: Uo,
        value: l,
        onChange: h,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
      }),
      (0, Y.jsx)(Ua.default, {
        className: Uo,
        value: u,
        onChange: g,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
      }),
      (0, Y.jsxs)(`div`, {
        className: Ja,
        children: [
          (0, Y.jsx)(`div`, {
            className: Ho,
            children: (0, Y.jsx)(M, {
              className: Vo,
              disabled: d >= f,
              onClick: p,
              children: `+`,
            }),
          }),
          (0, Y.jsx)(`div`, {
            className: Ho,
            children: (0, Y.jsx)(M, {
              className: Vo,
              disabled: d >= f,
              onClick: m,
              children: `-`,
            }),
          }),
        ],
      }),
    ],
  });
}
function fc(e) {
  let t = Be(`#Parental_Playtime_Hours`, e);
  return (
    e == 0
      ? (t = k(`#Parental_Playtime_Hours_None`))
      : e == 24 && (t = k(`#Parental_Playtime_Hours_NoRestriction`)),
    t
  );
}
function pc(e) {
  return fc(Math.floor(e / 60));
}
function mc(e) {
  let {
      strLabel: t,
      nMinutes: n,
      onSelected: r,
      nMin: i = 0,
      nMax: a = 25,
    } = e,
    o = un() === `mobile` ? `below` : `inline`,
    s = J.useCallback(
      (e) => {
        r(e.data * 60);
      },
      [r],
    ),
    c = [];
  for (let e = i; e < a; e++) c.push({ data: e, label: fc(e) });
  return (0, Y.jsx)(Ot, {
    layout: o,
    label: k(t),
    bottomSeparator: `none`,
    rgOptions: c,
    selectedOption: Math.floor(n / 60),
    onChange: s,
    strDropDownButtonClassName: void 0,
    arrowClassName: void 0,
    contextMenuPositionOptions: {
      bMatchWidth: !0,
      bDisablePopTop: !0,
      bFitToWindow: !0,
    },
  });
}
function hc(e) {
  let { steamid: t, settings: n, dayIndex: r, strDay: i } = e,
    [a, o] = J.useState(!1),
    s = BigInt(
      parseInt(
        n.playtime_restrictions?.playtime_days[r]?.allowed_time_windows,
      ) || 0,
    ),
    c = n.playtime_restrictions?.playtime_days[r]?.allowed_daily_minutes || 0;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(F, {
        className: mo,
        onActivate: () => o(!0),
        children: [
          (0, Y.jsx)(`div`, { className: ho, children: i }),
          (0, Y.jsx)(`div`, { className: go, children: Rs(s) }),
          (0, Y.jsxs)(`div`, {
            className: _o,
            children: [
              (0, Y.jsxs)(`div`, {
                children: [k(`#Parental_Playtime_Limit`), `:`],
              }),
              (0, Y.jsx)(`div`, { children: pc(c) }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(P, {
        active: a,
        children: (0, Y.jsx)(sc, {
          steamid: t,
          settings: n,
          dayIndexStart: r,
          closeModal: () => o(!1),
        }),
      }),
    ],
  });
}
function gc() {
  let e = Q.default.localeData(St.GetPreferredLocales()[0]).firstDayOfWeek(),
    t = Intl.DateTimeFormat(St.GetPreferredLocales(), { weekday: `long` });
  return Array.from({ length: 7 }, (n, r) => {
    let i = (r + e) % 7;
    return { data: i, label: t.format((0, Q.default)().day(i).toDate()) };
  });
}
function _c(e) {
  let { steamid: t, settings: n } = e,
    r = gc().map((e) =>
      (0, Y.jsx)(
        hc,
        { steamid: t, settings: n, dayIndex: e.data, strDay: e.label },
        e.data,
      ),
    );
  return (0, Y.jsx)(`div`, { className: po, children: r });
}
function vc(e) {
  let { steamid: t, settings: n } = e,
    r = O(t),
    i = J.useCallback(
      (e) => {
        if (
          ((n.playtime_restrictions.apply_playtime_restrictions = e),
          !n.playtime_restrictions.playtime_days?.length)
        ) {
          n.playtime_restrictions.playtime_days = [];
          for (let e = 0; e < 7; e++)
            n.playtime_restrictions.playtime_days.push({});
        }
        r.mutate(n);
      },
      [r, n],
    ),
    a = n.playtime_restrictions.apply_playtime_restrictions;
  return (0, Y.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, Y.jsx)(yt, {
        className: qa,
        bottomSeparator: `none`,
        label: k(`#Parental_EnablePlaytimeRestrictions`),
        checked: a,
        onChange: i,
      }),
      a && (0, Y.jsx)(_c, { steamid: t, settings: n }),
    ],
  });
}
function yc(e) {
  let {
      steamid: t,
      eContentDescriptor: n,
      settings: r,
      fnSelectContentDescriptor: i,
    } = e,
    a = O(t),
    o = ce(n),
    s = de(n, !0),
    c = (e) => e.excluded_store_content_descriptors,
    l = (e, t) => {
      e.excluded_store_content_descriptors = t;
    },
    u = (e) => e.excluded_community_content_descriptors,
    d = (e, t) => {
      e.excluded_community_content_descriptors = t;
    },
    f = (e, t) => (i) => {
      let o = !i,
        s = e(r);
      if (o) {
        let e = [n].concat(le(n));
        for (let t of e)
          s.findIndex((e) => e === t.valueOf()) === -1 && s.push(t.valueOf());
      } else {
        let e = [n].concat(fe(n));
        for (let t of e) {
          let e = s.findIndex((e) => e === t.valueOf());
          e !== -1 && s.splice(e, 1);
        }
      }
      (t(r, s), a.mutate(r));
    },
    p = !r.excluded_store_content_descriptors.includes(n.valueOf()),
    m = !r.excluded_community_content_descriptors.includes(n.valueOf());
  return (0, Y.jsxs)(F, {
    className: Ko,
    navEntryPreferPosition: $e.MAINTAIN_X,
    children: [
      (0, Y.jsxs)(F, {
        className: qo,
        children: [
          (0, Y.jsx)(`div`, { className: Jo, children: o }),
          (0, Y.jsxs)(`div`, {
            className: Yo,
            children: [
              s,
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(R, {
                className: void 0,
                onClick: () => i(n),
                children: k(`#ContentDescriptors_ViewExampleProducts`),
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(F, {
        className: Xo,
        children: (0, Y.jsx)(gt, { checked: p, onChange: f(c, l) }),
      }),
      (0, Y.jsx)(F, {
        className: Xo,
        children: (0, Y.jsx)(gt, { checked: m, onChange: f(u, d) }),
      }),
    ],
  });
}
function bc(e) {
  let { strName: t, strLogoUrl: n } = e;
  return (0, Y.jsxs)(F, {
    className: Zo,
    focusable: !0,
    children: [
      (0, Y.jsx)(`img`, { src: n }),
      (0, Y.jsx)(`div`, { children: t }),
    ],
  });
}
function xc(e) {
  let { eSelectedContentDescriptor: t, fnSelectDescriptor: n } = e,
    r = ue(t);
  return (0, Y.jsx)(P, {
    active: t !== null,
    children: (0, Y.jsxs)(A, {
      title: k(`#ContentDescriptor_ExampleProductsHeader`),
      closeModal: () => n(null),
      children: [
        !r.data && (0, Y.jsx)(y, {}),
        r.data?.length === 0 &&
          (0, Y.jsx)(`p`, { children: k(`#ContentDescriptorExample_NoGames`) }),
        r.data?.length > 0 &&
          r.data.map((e, t) =>
            (0, Y.jsx)(bc, { strName: e.name, strLogoUrl: e.logo }, t),
          ),
      ],
    }),
  });
}
function Sc(e) {
  let { steamid: t, settings: n } = e,
    [r, i] = (0, J.useState)(null);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(xc, { eSelectedContentDescriptor: r, fnSelectDescriptor: i }),
      (0, Y.jsxs)(F, {
        className: Wo,
        children: [
          (0, Y.jsx)(`p`, {
            children: k(`#Parental_ContentDescriptors_Intro`),
          }),
          (0, Y.jsxs)(F, {
            className: Go,
            children: [
              (0, Y.jsxs)(F, {
                className: Ko,
                children: [
                  (0, Y.jsx)(F, { className: qo }),
                  (0, Y.jsx)(F, {
                    className: Xo,
                    children: k(`#Parental_ContentDescriptors_Store`),
                  }),
                  (0, Y.jsx)(F, {
                    className: Xo,
                    children: k(`#Parental_ContentDescriptors_Community`),
                  }),
                ],
              }),
              se.map((e) =>
                (0, Y.jsx)(
                  yc,
                  {
                    steamid: t,
                    eContentDescriptor: e,
                    settings: n,
                    fnSelectContentDescriptor: i,
                  },
                  e,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
function Cc(e) {
  return (0, Y.jsx)(`div`, {
    className: Za,
    children: k(`#Parental_Settings_PageError`),
  });
}
function wc(e) {
  let n = r(),
    i = z(),
    a = n.steamid,
    o = t(),
    s = () => {
      o.push(`/account/familymanagement`);
    },
    c = W(!0),
    l = Ie(a),
    u = S(a),
    d = c.isLoading || l.isLoading || u.isLoading,
    f = c.isError || l.isError || u.isError;
  if (d && !f) return (0, Y.jsx)(y, { position: `center` });
  if (f || !l.data.settings) return (0, Y.jsx)(Cc, {});
  let p = c.data.family_group(),
    m = qt(p, i),
    h = qt(p, n.steamid);
  if (!m || !h || m.role() != 1 || h.role() != 2) return (0, Y.jsx)(Cc, {});
  let { settings: g, mapAppsAllowed: _ } = l.data,
    v = u.data;
  return (0, Y.jsxs)(`div`, {
    className: Ga,
    children: [
      (0, Y.jsx)(F, {
        className: Ya,
        onActivate: s,
        children: k(`#Parental_Settings_Return`),
      }),
      (0, Y.jsxs)(`div`, {
        className: Xa,
        children: [
          (0, Y.jsx)(Tc, { member: h, persona: v }),
          (0, Y.jsx)(Bs, { steamid: a, settings: g, familyGroup: p }),
        ],
      }),
      g.is_enabled &&
        (0, Y.jsx)(Ec, { steamID: a, settings: g, mapAppsAllowed: _ }),
    ],
  });
}
function Tc(e) {
  let { member: t, persona: n } = e;
  return (0, Y.jsxs)(`div`, {
    className: $a,
    children: [
      (0, Y.jsx)(`div`, {
        className: eo,
        children: k(`#Parental_Settings_For`),
      }),
      (0, Y.jsx)(Mr, { persona: n, role: t.role() }),
    ],
  });
}
function Ec(e) {
  let { steamID: t, settings: n, mapAppsAllowed: r } = e,
    i = (0, J.useMemo)(
      () => [
        {
          name: k(`#Parental_Tab_AllowedGames`),
          key: `games`,
          contents: (0, Y.jsx)(tc, {
            steamid: t,
            settings: n,
            mapAppsAllowed: r,
          }),
        },
        {
          name: k(`#Parental_Tab_Settings`),
          key: `settings`,
          contents: (0, Y.jsx)(Dc, { steamid: t, settings: n }),
        },
        {
          name: k(`#Parental_Tab_PlaytimeLimits`),
          key: `playtime`,
          contents: (0, Y.jsx)(vc, { steamid: t, settings: n }),
        },
      ],
      [t, n, r],
    );
  return (0, Y.jsx)(_, { tabs: i, classNameCtn: Pi, classNameTab: Fi });
}
function Dc(e) {
  let { steamid: t, settings: n } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ic, { steamid: t, settings: n }),
      (0, Y.jsx)(Sc, { steamid: t, settings: n }),
    ],
  });
}
function Oc(e) {
  z();
  let t = J.useRef(Math.floor(Date.now() / 1e3)).current - 2592e3,
    n = je(e, t),
    r = nn(e, t);
  if (!n.isSuccess || !r.isSuccess) return [];
  let i = n.data
    .feature_requests()
    .map((e) => ({
      type: 0,
      key: `parentalfeature_` + e.requestid(),
      data: e,
      requestTimestamp: e.time_requested(),
    }));
  return (
    (i = i.concat(
      n.data
        .playtime_requests()
        .map((e) => ({
          type: 1,
          key: `parentalplaytime_` + e.requestid(),
          data: e,
          requestTimestamp: e.time_requested(),
        })),
    )),
    (i = i.concat(
      r.data
        .requests()
        .map((e) => ({
          type: 2,
          key: `purchaserequest_` + e.request_id(),
          data: e,
          requestTimestamp: e.time_requested(),
        })),
    )),
    i.sort((e, t) => t.requestTimestamp - e.requestTimestamp),
    i
  );
}
function kc(e) {
  let { item: t, closeModal: n } = e,
    r = be(t),
    [i, a] = J.useState(3600),
    o = un() === `mobile` ? `below` : `inline`,
    s = J.useCallback(() => {
      r.mutateAsync({ bApprove: !0, durationSec: i });
    }, [r, i]),
    c = J.useCallback((e, t) => {
      a(e.data);
    }, []),
    l = [
      { label: k(`#FeatureRequest_AcceptDialog_1Hour`), data: 3600 },
      { label: k(`#FeatureRequest_AcceptDialog_4Hours`), data: 14400 },
      { label: k(`#FeatureRequest_AcceptDialog_24Hours`), data: 86400 },
      { label: k(`#FeatureRequest_AcceptDialog_Permanently`), data: 0 },
    ];
  return (0, Y.jsxs)(I, {
    className: void 0,
    closeModal: n,
    onOK: s,
    strTitle: (0, Y.jsx)(Et, {
      className: void 0,
      children: k(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: [
      (0, Y.jsx)(ft, { children: k(`#FeatureRequest_AcceptDialog_BodyText`) }),
      (0, Y.jsx)(Ot, {
        layout: o,
        bottomSeparator: `none`,
        label: k(`#FeatureRequest_AcceptDialog_AllowAccess`),
        rgOptions: l,
        selectedOption: i,
        onChange: c,
      }),
    ],
  });
}
function Ac(e) {
  let {
      currentMinutes: t,
      currentWindows: n,
      additionalMinutes: r,
      setAdditionalMinutes: i,
      nWindows: a,
      setWindows: o,
    } = e,
    s = n == BigInt(0xffffffffffff),
    c = t == 1440,
    l = J.useCallback(
      (e) => {
        let t = a ^ (BigInt(1) << BigInt(e));
        o(t);
      },
      [a, o],
    ),
    u = J.useCallback(
      (e) => {
        i(e);
      },
      [i],
    ),
    d = `#PlaytimeRequest_AcceptDialog_BodyText`;
  return (
    s && (d = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows`),
    c && (d = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours`),
    (0, Y.jsxs)(`div`, {
      className: Ha,
      children: [
        (0, Y.jsx)(ft, { children: k(d) }),
        !s &&
          (0, Y.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, Y.jsx)(`div`, { className: `EFhHT8zkCyk-`, children: Rs(a) }),
              (0, Y.jsx)(oc, { nWindows: a, nLockedWindows: n, onToggle: l }),
            ],
          }),
        !c &&
          (0, Y.jsxs)(`div`, {
            className: `w7tEMhTubis-`,
            children: [
              Be(
                `#PlaytimeRequest_AcceptDialog_CurrentHours`,
                Math.floor(t / 60),
              ),
              ` `,
            ],
          }),
        c &&
          (0, Y.jsx)(`div`, {
            className: `w7tEMhTubis-`,
            children: k(`#PlaytimeRequest_AcceptDialog_UnlimitedHours`),
          }),
        !c &&
          (0, Y.jsx)(mc, {
            strLabel: `#PlaytimeRequest_AcceptDialog_AdditionalTime`,
            nMinutes: r,
            onSelected: u,
            nMax: 25 - t / 60,
          }),
      ],
    })
  );
}
function jc(e) {
  let { item: t, closeModal: n } = e,
    r = ge(t),
    [i, a] = J.useState(!1),
    o = t.current_playtime_restrictions().allowed_daily_minutes(),
    s = BigInt(
      parseInt(t.current_playtime_restrictions().allowed_time_windows()),
    ),
    [c, l] = J.useState(60),
    [u, d] = J.useState(s);
  J.useEffect(() => {
    a(c == 0 && s == u);
  }, [c, s, u]);
  let f = J.useCallback(() => {
    let e = new De();
    (e.restrictions(!0).set_allowed_daily_minutes(o + c),
      e.restrictions(!0).set_allowed_time_windows(u.toString()),
      e.set_rtime_expires(t.time_expires()),
      r.mutateAsync({ bApprove: !0, restrictions: e }));
  }, [r, o, c, u, t]);
  return (0, Y.jsx)(I, {
    className: void 0,
    closeModal: n,
    onOK: f,
    bOKDisabled: i,
    strTitle: (0, Y.jsx)(Et, {
      className: void 0,
      children: k(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: (0, Y.jsx)(Ac, {
      currentMinutes: o,
      currentWindows: s,
      additionalMinutes: c,
      setAdditionalMinutes: l,
      nWindows: u,
      setWindows: d,
    }),
  });
}
function Mc(e) {
  let { steamIDResponder: t, resultMessage: n, timeResponded: r } = e,
    i = S(t.ConvertTo64BitString()),
    a = i?.data,
    o = cn(t.GetAccountID()),
    s = X();
  return (
    a || (n = k(`#ParentalRequest_Canceled`)),
    (0, Y.jsxs)(`div`, {
      className: Pa,
      children: [
        (0, Y.jsx)(`div`, { className: void 0, children: n }),
        !!a &&
          (0, Y.jsxs)(`div`, {
            className: `_7XDMq4s1SiY-`,
            children: [
              (0, Y.jsx)(q, {
                className: void 0,
                persona: a,
                size: `Medium`,
                statusPosition: `right`,
              }),
              (0, Y.jsx)(sn, {
                persona: i.data,
                bParenthesizeNicknames: s.data
                  ?.preferences()
                  .parenthesize_nicknames(),
                strNickname: o,
              }),
            ],
          }),
        (0, Y.jsx)(`div`, { className: ja, children: jt(r) }),
      ],
    })
  );
}
function Nc(e) {
  let { steamID: t, locToken: n, locTokenPlurality: r } = e,
    i = S(t.ConvertTo64BitString()),
    a = i?.data,
    o = cn(t.GetAccountID()),
    s = X();
  return i.isSuccess
    ? (0, Y.jsxs)(`div`, {
        className: Na,
        children: [
          (0, Y.jsx)(q, {
            className: void 0,
            persona: a,
            size: `Medium`,
            statusPosition: `right`,
          }),
          nt(
            n,
            r,
            (0, Y.jsx)(sn, {
              persona: i.data,
              bParenthesizeNicknames: s.data
                ?.preferences()
                .parenthesize_nicknames(),
              strNickname: o,
            }),
          ),
        ],
      })
    : null;
}
function Pc(e) {
  let { item: t, nFeatures: n, onReject: r, renderApproveDialog: i } = e,
    a = z(),
    o = t.steamid() == a,
    s = !n,
    [c, l] = J.useState(!1),
    u = J.useCallback(() => {
      l(!0);
    }, []),
    d = [],
    f = n;
  for (let e = 0; e < 32; e++)
    if (f & (1 << e)) {
      let t = e,
        n = o ? rc[t]?.requestDescriptionSelf : rc[t]?.requestDescription;
      n && d.push(k(n));
    }
  return d.length == 0 && !s
    ? null
    : (0, Y.jsxs)(`div`, {
        className: B(Da, Fa),
        children: [
          (0, Y.jsxs)(`div`, {
            className: Oa,
            children: [
              o &&
                (0, Y.jsx)(`div`, {
                  className: `hHB2RrlwISw-`,
                  children: k(
                    s
                      ? `#PlaytimeRequest_UserRequested_Self`
                      : `#FeatureRequest_UserRequested_Self`,
                  ),
                }),
              !o &&
                (0, Y.jsx)(Nc, {
                  steamID: new j(t.steamid()),
                  locToken: s
                    ? `#PlaytimeRequest_UserRequested`
                    : `#FeatureRequest_UserRequested`,
                  locTokenPlurality: 1,
                }),
              (0, Y.jsxs)(`ul`, {
                className: Aa,
                children: [
                  d.map((e) =>
                    (0, Y.jsx)(`li`, { className: ka, children: e }, e),
                  ),
                  (0, Y.jsx)(`div`, {
                    className: ja,
                    children: jt(t.time_requested()),
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Ma,
            children: [
              !o &&
                !t.time_responded() &&
                (0, Y.jsxs)(F, {
                  className: `_7KXfklfuGPw-`,
                  children: [
                    (0, Y.jsx)(L, {
                      noFocusRing: !1,
                      onClick: u,
                      children: k(`#ParentalRequest_Accept`),
                    }),
                    (0, Y.jsx)(M, {
                      noFocusRing: !1,
                      onClick: r,
                      children: k(`#ParentalRequest_Reject`),
                    }),
                  ],
                }),
              o &&
                !t.time_responded() &&
                (0, Y.jsx)(`div`, {
                  className: B(`_7KXfklfuGPw-`, `l-R1A4yiKt4-`),
                  children: k(`#ParentalRequest_Pending`),
                }),
              !!t.time_responded() &&
                (0, Y.jsx)(Mc, {
                  steamIDResponder: new j(t.steamid_responder()),
                  resultMessage: k(
                    t.approved()
                      ? `#ParentalRequest_AcceptedBy`
                      : `#ParentalRequest_RejectedBy`,
                  ),
                  timeResponded: t.time_responded(),
                }),
              !t.time_responded() &&
                (0, Y.jsx)(P, { active: c, children: i(() => l(!1)) }),
            ],
          }),
        ],
      });
}
function Fc(e) {
  let { item: t } = e,
    n = be(t),
    r = J.useCallback(() => {
      n.mutateAsync({ bApprove: !1, durationSec: 0 });
    }, [n]),
    i = J.useCallback((e) => (0, Y.jsx)(kc, { item: t, closeModal: e }), [t]),
    a = t.features();
  return (0, Y.jsx)(Pc, {
    item: t,
    nFeatures: a,
    onReject: r,
    renderApproveDialog: i,
  });
}
function Ic(e) {
  let { item: t } = e,
    n = ge(t),
    r = J.useCallback(() => {
      n.mutateAsync({ bApprove: !1, restrictions: null });
    }, [n]),
    i = J.useCallback((e) => (0, Y.jsx)(jc, { item: t, closeModal: e }), [t]);
  return (0, Y.jsx)(Pc, { item: t, onReject: r, renderApproveDialog: i });
}
function Lc(e) {
  let { packageIDs: t, bundleIDs: n } = e;
  return !t.length && !n.length
    ? null
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, {
            className: void 0,
            children: Be(`#PurchaseRequest_Purchased`, t.length + n.length),
          }),
          (0, Y.jsx)(Rc, { packageIDs: t, bundleIDs: n }),
        ],
      });
}
function Rc(e) {
  let { packageIDs: t, bundleIDs: n } = e,
    [r, i] = (0, J.useState)(!1);
  if (!t.length && !n.length) return null;
  let a = t.length + n.length,
    o = null;
  if (r || a <= 5) o = zc(t, n, a);
  else {
    ((o = zc(t, n, 5)),
      o.push(
        (0, Y.jsx)(
          `span`,
          { children: k(`#PurchaseRequest_PackageLinksFinalSeparator`) },
          `sepand`,
        ),
      ));
    let e = t.length + n.length - 5;
    o.push(
      (0, Y.jsx)(
        F,
        {
          onActivate: () => i(!0),
          className: B(Va, void 0),
          focusable: !0,
          children: k(`#PurchaseRequest_PackageLinksShowMore`, e),
        },
        `showMore`,
      ),
    );
  }
  return (0, Y.jsx)(`div`, { className: Ra, children: o });
}
function zc(e, t, n) {
  let r = [],
    i = 0;
  for (let t = 0; t < e.length && i < n; t++, i++) {
    let a = e[t];
    (r.push((0, Y.jsx)(Bc, { packageID: a }, a)),
      i < n - 1 &&
        r.push(
          (0, Y.jsx)(
            `span`,
            { children: k(`#PurchaseRequest_PackageLinksSeparator`) },
            `sep` + a,
          ),
        ));
  }
  for (let e = 0; e < t.length && i < n; e++, i++) {
    let a = t[e];
    (r.push((0, Y.jsx)(Vc, { bundleID: a }, a)),
      i < n - 1 &&
        r.push(
          (0, Y.jsx)(
            `span`,
            { children: k(`#PurchaseRequest_PackageLinksSeparator`) },
            `sep` + a,
          ),
        ));
  }
  return r;
}
function Bc(e) {
  let { packageID: t } = e,
    [n] = w(t, {});
  return (0, Y.jsx)(Hc, { storeItem: n });
}
function Vc(e) {
  let { bundleID: t } = e,
    [n] = ie(t, {});
  return (0, Y.jsx)(Hc, { storeItem: n });
}
function Hc(e) {
  let { storeItem: t } = e,
    n = { direction: `right`, style: { minWidth: `320px` } },
    r = ke(t),
    i = J.useCallback(
      (e) => {
        _s(Se(e), t.GetStorePageURL());
      },
      [t],
    );
  return t
    ? (t.GetStoreItemType(),
      (0, Y.jsx)(g, {
        id: r,
        name: t.GetName(),
        bPreventNavigation: !0,
        bHidePrice: !1,
        bShowWishlistButton: !1,
        hoverProps: n,
        className: La,
        children: (0, Y.jsx)(F, {
          className: B(za, void 0),
          focusable: !0,
          onActivate: i,
          children: (0, Y.jsx)(`div`, { className: Ba, children: t.GetName() }),
        }),
      }))
    : null;
}
function Uc(e) {
  let { item: t, familyGroupID: n } = e,
    r = z(),
    i = t.requester_steamid() === r,
    a = It(n, t.request_id(), i ? 4 : 1),
    { setErrorMessage: o } = V();
  K(
    a,
    i
      ? `#FamilyManagement_ErrorCancelPurchaseRequest`
      : `#FamilyManagement_ErrorDeclinePurchaseRequest`,
    G.k_EFamilyQueryDeclinePurchaseRequest,
  );
  let s = Ht(n, t.request_id()),
    c = () => {
      (o(null), a.mutate());
    },
    l = ``;
  if (t.is_completed())
    switch (t.response_action()) {
      case 0:
      case 5:
        break;
      case 1:
        l = k(`#PurchaseRequest_DeclinedBy`);
        break;
      case 2:
        l = k(`#PurchaseRequest_PurchasedBy`);
        break;
      case 3:
        l = k(`#PurchaseRequest_Abandoned`);
        break;
      case 4:
        l = k(`#PurchaseRequest_CanceledBy`);
    }
  let u = !1;
  return (
    t.purchased_packageids() &&
      t.requested_packageids() &&
      t.purchased_packageids().length == t.requested_packageids().length &&
      t.purchased_bundleids() &&
      t.requested_bundleids() &&
      t.purchased_bundleids().length == t.requested_bundleids().length &&
      (u = !0),
    (0, Y.jsxs)(`div`, {
      className: B(Da, Ia),
      children: [
        (0, Y.jsxs)(`div`, {
          className: Oa,
          children: [
            i &&
              (0, Y.jsx)(`div`, {
                className: `hHB2RrlwISw-`,
                children: Be(
                  `#PurchaseRequest_UserRequested_Self`,
                  t.requested_packageids()?.length,
                ),
              }),
            !i &&
              (0, Y.jsx)(Nc, {
                steamID: new j(t.requester_steamid()),
                locToken: `#PurchaseRequest_UserRequested`,
                locTokenPlurality: t.requested_packageids()?.length,
              }),
            (0, Y.jsx)(Rc, {
              packageIDs: t.requested_packageids(),
              bundleIDs: t.requested_bundleids(),
            }),
            !u &&
              (0, Y.jsx)(Lc, {
                packageIDs: t.purchased_packageids(),
                bundleIDs: t.purchased_bundleids(),
              }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: Ma,
          children: [
            !t.time_responded() &&
              (0, Y.jsxs)(F, {
                className: `_7KXfklfuGPw-`,
                children: [
                  !i &&
                    !t.time_responded() &&
                    (0, Y.jsx)(`a`, {
                      href: s,
                      children: (0, Y.jsx)(L, {
                        noFocusRing: !1,
                        children: k(`#PurchaseRequest_View`),
                      }),
                    }),
                  (0, Y.jsx)(M, {
                    noFocusRing: !1,
                    onClick: c,
                    children: k(
                      i
                        ? `#PurchaseRequest_Cancel`
                        : `#PurchaseRequest_Decline`,
                    ),
                  }),
                ],
              }),
            t.time_responded() &&
              (0, Y.jsx)(Mc, {
                steamIDResponder: new j(t.responder_steamid()),
                resultMessage: l,
                timeResponded: t.time_responded(),
              }),
          ],
        }),
      ],
    })
  );
}
function Wc(e) {
  let { item: t, familyGroupID: n } = e,
    r;
  switch (t.type) {
    case 0:
      r = (0, Y.jsx)(Fc, { item: t.data });
      break;
    case 1:
      r = (0, Y.jsx)(Ic, { item: t.data });
      break;
    case 2:
      r = (0, Y.jsx)(Uc, { item: t.data, familyGroupID: n });
      break;
    default:
      r = null;
  }
  return r;
}
function Gc(e) {
  let { rgRequests: t, familyGroupID: n } = e,
    r = t.length > 0;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      !r &&
        (0, Y.jsx)(`div`, {
          className: void 0,
          children: k(`#FamilyManagement_NoCurrentRequests`),
        }),
      r &&
        (0, Y.jsx)(`div`, {
          className: `woHeMzP52eU-`,
          children: t.map((e) =>
            (0, Y.jsx)(Wc, { item: e, familyGroupID: n }, e.key),
          ),
        }),
    ],
  });
}
var Kc = `_0-FZqOUzDlc-`,
  qc = `EVvaYNdNnEA-`,
  Jc = `#1a9fff`,
  Yc = `rgba(255, 255, 255, 0.1)`,
  Xc = `-B9JuEjgX1w-`,
  Zc = `QPAYDnk6EIg-`,
  Qc = `w0D3nFNatyk-`,
  $c = `UO--Fvrpn5c-`,
  el = `iHOuJ8etUNE-`,
  tl = `RFXvJWT1XBU-`,
  nl = `r351c7U-moI-`,
  rl = `AVoWfWXi0a8-`,
  il = `i0XsOg0rw-c-`,
  al = `yKr0aQXMsT4-`,
  ol = `a1R4qfWWLP0-`,
  sl = `QL0WsSH56Qc-`,
  cl = `qBByTNg5CCA-`,
  ll = `_7awDc8oYD5M-`,
  ul = `HaVgAD9hUMg-`,
  dl = `QHjYWVWP5ss-`,
  fl = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  $ = 1,
  pl = 24 / $,
  ml = 14;
function hl(e) {
  let { steamid: t } = e,
    n = an(t);
  if ((re(), n.isLoading))
    return (0, Y.jsx)(`div`, { className: Xc, children: (0, Y.jsx)(y, {}) });
  let r = (e) => {
      let t = e.getTime() / 1e3,
        r = new Date(e);
      r.setDate(r.getDate() + 1);
      let i = r.getTime() / 1e3;
      return n.isSuccess
        ? n.data.filter((e) => e.time_start <= i && e.time_end >= t)
        : [];
    },
    i = new Date();
  i.setHours(0, 0, 0, 0);
  let a = [...Array(ml).keys()].map((e) => {
    let t = new Date(i);
    return (t.setDate(t.getDate() - e), t);
  });
  return (0, Y.jsx)(
    `div`,
    {
      className: Zc,
      children: a.map((e, t) =>
        (0, Y.jsx)(gl, { date: e, vecSessions: r(e) }, t),
      ),
    },
    t,
  );
}
function gl(e) {
  let { date: t, vecSessions: n } = e,
    r = new Date(t);
  r.setDate(r.getDate() + 1);
  let i = t.getTime() / 1e3,
    a = r.getTime() / 1e3,
    o = ct(i, !0, !0, !1, !0),
    [s, c] = (0, J.useState)(!1),
    l = 0;
  for (let e of n) l += Math.min(e.time_end, a) - Math.max(e.time_start, i);
  let u = l === 0 ? k(`#FamilyPlaytime_NoPlaytime`) : it(l),
    d = (e) => {
      let t = i + $ * 3600 * e,
        r = i + $ * 3600 * (e + 1);
      return n.filter((e) => e.time_start <= r && e.time_end >= t);
    },
    f = new Map();
  for (let e of n) {
    f.has(e.appid) || f.set(e.appid, 0);
    let t = Math.min(e.time_end, a) - Math.max(e.time_start, i);
    f.set(e.appid, f.get(e.appid) + t);
  }
  let p = Array.from(f.entries());
  p.sort((e, t) => t[1] - e[1]);
  let m = n.length == 0;
  return (0, Y.jsxs)(F, {
    className: B(Qc, m && `PR1QBc3WtJ4-`),
    children: [
      (0, Y.jsxs)(F, {
        className: $c,
        onClick: m ? void 0 : () => c(!s),
        children: [
          (0, Y.jsxs)(F, {
            className: el,
            onActivate: m ? void 0 : () => c(!s),
            children: [
              o,
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`span`, { className: tl, children: u }),
            ],
          }),
          l > 0 &&
            [...Array(pl).keys()].map((e) =>
              (0, Y.jsx)(yl, { nDate: i, nBin: e, vecSessions: d(e) }, e),
            ),
          !m && (0, Y.jsx)(Ft, { bExpanded: s, setExpanded: c }),
        ],
      }),
      s &&
        !m &&
        (0, Y.jsx)(F, {
          className: `RUeYA1OokLE-`,
          children: p.map((e, t) =>
            (0, Y.jsx)(bl, { appid: e[0], nSecondsPlayed: e[1] }, t),
          ),
        }),
    ],
  });
}
function _l(e) {
  let { appid: t } = e,
    [n, r] = J.useState(0),
    [i, a] = J.useState(!1),
    [o] = T(t, Ce.k_DataRequest_Assets);
  if (!o) return null;
  let s = `${N.STORE_ITEM_BASE_URL}steam/apps/`,
    c = [`${s}${t}/library_600x900.jpg`, `${s}${t}/portrait.png`, fl];
  o.GetAssets()?.GetLibraryCapsuleURL() &&
    (c = [o.GetAssets()?.GetLibraryCapsuleURL(), ...c]);
  let l = () => {
      a(!0);
    },
    u = () => {
      n < c.length && r((e) => e + 1);
    },
    d = c[n];
  return (0, Y.jsx)(`img`, {
    className: B(dl, i && `oUbDv5hUlwY-`),
    onLoad: l,
    onError: u,
    src: d,
  });
}
function vl(e) {
  let { appid: t } = e,
    [n] = T(t, Ce.k_DataRequest_Assets);
  return n
    ? (0, Y.jsx)(R, {
        href: n.GetStorePageURL(),
        children: (0, Y.jsx)(_l, { appid: t }),
      })
    : null;
}
function yl(e) {
  let { nDate: t, nBin: n, vecSessions: r } = e,
    i = t + $ * 3600 * n,
    a = t + $ * 3600 * (n + 1),
    [o, s] = (0, J.useState)(!1),
    c = 0,
    l = new Set();
  for (let e of r)
    ((c += Math.min(e.time_end, a) - Math.max(e.time_start, i)),
      l.add(e.appid));
  let u = Jc,
    d = Yc,
    f = Math.round((100 * c) / ($ * 3600)),
    p = `linear-gradient(0deg, ${u} 0%, ${u} ${f}%, ${d} ${f}%, ${d} 100%)`,
    m = (e) => {
      if (e === 0 || e === pl) return ``;
      let t = Math.round(pl / 6);
      return e % t === t / 2
        ? new Date(i * 1e3).toLocaleTimeString(St.GetPreferredLocales(), {
            hour: `numeric`,
          })
        : ``;
    },
    h =
      l.size === 0
        ? null
        : (0, Y.jsx)(F, {
            className: ll,
            children: Array.from(l).map((e) => (0, Y.jsx)(vl, { appid: e }, e)),
          }),
    g = (0, Y.jsxs)(`div`, {
      className: ul,
      children: [
        (0, Y.jsxs)(`div`, { className: il, children: [Tt(i), ` - `, Tt(a)] }),
        h,
      ],
    });
  return (0, Y.jsxs)(F, {
    focusable: l.size > 0,
    onOKButton: () => s(!0),
    children: [
      (0, Y.jsxs)(v, {
        active: o,
        onDismiss: () => s(!1),
        children: [
          (0, Y.jsx)(`div`, {
            className: il,
            children: k(`#FamilyPlaytime_GamesPlayedBetween`, Tt(i), Tt(a)),
          }),
          h,
        ],
      }),
      (0, Y.jsx)(Ee, {
        toolTipContent: g,
        nDelayShowMS: 0,
        children: (0, Y.jsx)(`div`, {
          className: B(nl),
          style: { background: p },
          children: (0, Y.jsx)(`span`, { className: rl, children: m(n) }),
        }),
      }),
    ],
  });
}
function bl(e) {
  let { appid: t, nSecondsPlayed: n } = e,
    [r] = T(t, Ce.k_DataRequest_Assets);
  return r
    ? (0, Y.jsx)(R, {
        href: r.GetStorePageURL(),
        children: (0, Y.jsxs)(F, {
          className: al,
          children: [
            (0, Y.jsx)(`div`, {
              className: ol,
              children: (0, Y.jsx)(_l, { appid: t }),
            }),
            (0, Y.jsx)(`div`, { className: sl, children: it(n) }),
            (0, Y.jsx)(`div`, { className: cl, children: r.GetName() }),
          ],
        }),
      })
    : null;
}
function xl(e) {
  let { familyGroupID: t } = e,
    n = U(t),
    r = n.data
      ?.members()
      .filter((e) => e.role() === 2)
      .map((e) => e.steamid()),
    i = ne(r),
    a = E(),
    o = X(),
    [s, c] = (0, J.useState)(r ? r[0] : null);
  if (n.isLoading || i.some((e) => e.isLoading) || a.isLoading)
    return (0, Y.jsx)(`div`, { className: Kc, children: (0, Y.jsx)(y, {}) });
  if (r.length === 0)
    return (0, Y.jsx)(`p`, { children: k(`#FamilyPlaytime_NoChildren`) });
  let l = i.map((e) => ({
    label: (0, Y.jsx)(sn, {
      persona: e.data,
      bIgnorePersonaStatus: !0,
      bParenthesizeNicknames: o.data?.preferences().parenthesize_nicknames(),
      strNickname: a.data.get(e.data.m_steamid.GetAccountID()),
    }),
    data: e.data.m_steamid.ConvertTo64BitString(),
  }));
  return (0, Y.jsxs)(F, {
    className: qc,
    children: [
      (0, Y.jsx)(Ot, {
        rgOptions: l,
        selectedOption: s,
        onChange: (e) => c(e.data),
        label: k(`#FamilyPlaytime_ShowPlaytimeFor`),
        layout: `inline`,
        childrenContainerWidth: `max`,
      }),
      (0, Y.jsx)(hl, { steamid: s }),
    ],
  });
}
var Sl = function () {
  let [e, t] = (0, J.useState)(null),
    r = l(),
    i = W();
  if (i.isError) return null;
  let o = !i.data?.is_not_member_of_any_group(),
    s = N.HELP_BASE_URL + `faqs/view/054C-3167-DD7F-49D4`;
  return (0, Y.jsx)($t, {
    staleTimeMs: 3e3,
    children: (0, Y.jsxs)(Zt.Provider, {
      value: { errorMessage: e, setErrorMessage: t },
      children: [
        (0, Y.jsx)(jr, {}),
        (0, Y.jsxs)(Ml, {
          children: [
            (0, Y.jsx)(kt, {}),
            (0, Y.jsx)(`span`, {
              className: void 0,
              children: k(`#FamilyManagement_Title`),
            }),
            (0, Y.jsx)(R, {
              className: void 0,
              href: s,
              children: (0, Y.jsx)(Oe, {}),
            }),
          ],
        }),
        i.isLoading &&
          (0, Y.jsx)(`div`, {
            className: `yQG1LU0zHT0-`,
            children: (0, Y.jsx)(y, {}),
          }),
        !i.isLoading &&
          (0, Y.jsx)(`div`, {
            className: `j6sN-xNfa0w-`,
            children: (0, Y.jsx)(F, {
              className: `G56z-wA-GqE-`,
              children: (0, Y.jsxs)(a, {
                children: [
                  (0, Y.jsx)(n, { path: `${r.path}/create`, component: Ol }),
                  (0, Y.jsx)(n, { path: `${r.path}/join`, component: kl }),
                  (0, Y.jsx)(n, {
                    path: `${r.path}/confirm_invite`,
                    component: Hr,
                  }),
                  (0, Y.jsx)(n, {
                    path: `${r.path}/parentalcontrols/:steamid`,
                    component: wc,
                  }),
                  (0, Y.jsx)(n, {
                    children: o
                      ? (0, Y.jsx)(Il, {
                          familyGroupID: i.data.family_groupid(),
                        })
                      : (0, Y.jsx)(El, {}),
                  }),
                ],
              }),
            }),
          }),
      ],
    }),
  });
};
function Cl(e) {
  let t = [
    {
      name: k(`#FamilyManagement_SetupTab`),
      key: `setup`,
      contents: e.children,
    },
  ];
  return (0, Y.jsx)(_, { tabs: t, classNameCtn: Pi });
}
function wl(e) {
  let t = [
    {
      name: k(`#FamilyManagement_JoinAFamily`),
      key: `setup`,
      contents: e.children,
    },
  ];
  return (0, Y.jsx)(_, { tabs: t, classNameCtn: Pi });
}
function Tl(e) {
  let { familyGroupID: t } = e,
    { mutate: n } = zt(t);
  return (0, Y.jsx)(L, {
    className: Ji,
    onClick: () => n(),
    children: k(`#FamilyManagement_UndeleteButton`),
  });
}
function El(e) {
  let n = t(),
    r = W(),
    { setErrorMessage: i } = V();
  if (r.isLoading) return (0, Y.jsx)(y, {});
  let a = r.data?.pending_group_invites().length,
    o = () => {
      (i(``), n.push(`/account/familymanagement/create`));
    },
    s = () => {
      (i(``), n.push(`/account/familymanagement/join`));
    },
    c;
  c =
    a === 0
      ? null
      : a === 1
        ? k(`#FamilyManagement_SelectJoinButtonPendingInvite`)
        : k(`#FamilyManagement_SelectJoinButtonPendingInvites`, a);
  let l = r.data.cooldown_seconds_remaining() > 0,
    u = r.data.can_undelete_last_joined_family();
  return (0, Y.jsx)(Cl, {
    children: (0, Y.jsxs)(`div`, {
      className: Ki,
      children: [
        (0, Y.jsxs)(`div`, {
          className: qi,
          children: [
            (0, Y.jsx)(`p`, {
              children: k(`#FamilyManagement_CreateInstructions`),
            }),
            (0, Y.jsx)(`p`, {
              children: k(`#FamilyManagement_CreateInstructions_2`),
            }),
          ],
        }),
        (l || u) &&
          (0, Y.jsxs)(`div`, {
            className: `_4Igk3YwHgW0-`,
            children: [
              (0, Y.jsx)(Xe, { color: `#ffc82c` }),
              (0, Y.jsxs)(`div`, {
                children: [
                  !u && k(`#FamilyManagement_CanRejoin`),
                  u && k(`#FamilyManagement_CanUndelete`),
                ],
              }),
              u &&
                (0, Y.jsx)(Y.Fragment, {
                  children: (0, Y.jsx)(Tl, {
                    familyGroupID: r.data.latest_joined_family_groupid(),
                  }),
                }),
            ],
          }),
        (0, Y.jsxs)(`div`, {
          className: Yi,
          children: [
            (0, Y.jsxs)(L, {
              className: Xi,
              onClick: s,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Zi,
                  children: k(`#FamilyManagement_SelectJoinButton`),
                }),
                (0, Y.jsx)(`div`, {
                  className: void 0,
                  children: (0, Y.jsx)(Te, {}),
                }),
                a > 0 &&
                  (0, Y.jsx)(`div`, { className: `WXSieSksNro-`, children: c }),
              ],
            }),
            (0, Y.jsxs)(L, {
              className: Xi,
              onClick: o,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Zi,
                  children: k(`#FamilyManagement_SelectCreateButton`),
                }),
                (0, Y.jsx)(`div`, {
                  className: void 0,
                  children: (0, Y.jsx)(tt, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Dl(e) {
  let { active: t, isCreate: n, closeModal: r, cooldownSeconds: i } = e;
  return (0, Y.jsx)(P, {
    active: t,
    children: (0, Y.jsxs)(I, {
      bAlertDialog: !0,
      onOK: r,
      closeModal: r,
      strTitle: k(
        n
          ? `#FamilyManagement_FamilyCreated`
          : `#FamilyManagement_FamilyJoined`,
      ),
      children: [
        (0, Y.jsx)(Ir, { cooldownSecondsRemaining: i }),
        (0, Y.jsx)(`div`, {
          className: sa,
          children: k(
            n
              ? `#FamilyManagement_CooldownAllowed_2_Create`
              : `#FamilyManagement_CooldownAllowed_2_Join`,
          ),
        }),
      ],
    }),
  });
}
function Ol(e) {
  let [n, r] = (0, J.useState)(``),
    i = tn();
  t();
  let a = W(),
    [o, s, l] = ve(!1),
    { setErrorMessage: u } = V();
  return (
    K(i, `#FamilyManagement_ErrorCreateFamily`, G.k_EFamilyQueryCreateFamily),
    a.data && !a.data?.is_not_member_of_any_group() && !o
      ? (0, Y.jsx)(c, { to: `/account/familymanagement` })
      : i.isPending
        ? (0, Y.jsx)(`div`, { className: Ii, children: (0, Y.jsx)(y, {}) })
        : (0, Y.jsxs)(Cl, {
            children: [
              (0, Y.jsx)(Dl, {
                active: o,
                isCreate: !0,
                closeModal: l,
                cooldownSeconds: a.data.cooldown_seconds_remaining(),
              }),
              (0, Y.jsxs)(`div`, {
                className: ra,
                children: [
                  (0, Y.jsx)(jl, {
                    children: k(`#FamilyManagement_CreateAFamilyHeader`),
                  }),
                  (0, Y.jsx)(`p`, {
                    children: k(`#FamilyManagement_CreateAFamilyText`),
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: ia,
                    children: [
                      (0, Y.jsx)(mt, {
                        type: `text`,
                        onChange: (e) => {
                          (r(e.target.value), u(null));
                        },
                        value: n,
                        placeholder: k(
                          `#FamilyManagement_InputNamePlaceholder`,
                        ),
                      }),
                      (0, Y.jsx)(L, {
                        disabled: n.length === 0,
                        onClick: () => {
                          (u(null),
                            i.mutate(n, {
                              onSuccess: (e) => {
                                e.cooldown_skip_granted() && s();
                              },
                            }));
                        },
                        children: k(`#FamilyManagement_FinalizeCreateFamily`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
  );
}
function kl(e) {
  let n = W(),
    r = n.data?.pending_group_invites().length,
    [i, a] = (0, J.useState)(!1),
    o = t(),
    [s, l] = (0, J.useState)(!1),
    d = Nr(u(), Pr),
    f = Qt(d);
  if (n.data && !n.data?.is_not_member_of_any_group() && !i)
    return d
      ? (0, Y.jsx)(c, { to: `/account/familymanagement?invitation=${d}` })
      : (0, Y.jsx)(c, { to: `/account/familymanagement` });
  let p = null,
    m = n.data.pending_group_invites();
  if (d) {
    let e = m.findIndex((e) => e.family_groupid() === d);
    e !== -1 && ((p = m[e]), (m = m.slice()), m.splice(e, 1));
  }
  return (
    p !== null &&
      p.awaiting_2fa() &&
      N.IN_MOBILE_WEBVIEW &&
      (f.mutate(),
      (window.location.href = `steammobile://confirmations?first_of_type=11`)),
    i
      ? (0, Y.jsx)(wl, {
          children: (0, Y.jsx)(Dl, {
            active: i,
            isCreate: !1,
            closeModal: () => {
              (a(!1), o.push(`/account/familymanagement`));
            },
            cooldownSeconds: n.data?.cooldown_seconds_remaining(),
          }),
        })
      : p
        ? (0, Y.jsx)(wl, {
            children: (0, Y.jsxs)(`div`, {
              className: aa,
              children: [
                (0, Y.jsxs)(`p`, {
                  children: [
                    Ye(
                      `#FamilyManagement_PendingInvitesText`,
                      (0, Y.jsx)(`span`, { className: oa }),
                      (0, Y.jsx)(`b`, {}),
                    ),
                    ` `,
                  ],
                }),
                (0, Y.jsx)(
                  Lr,
                  {
                    inviteID: p.invite_id(),
                    inviterSteamID: p.inviter_steamid(),
                    familyGroupID: p.family_groupid(),
                    role: p.role(),
                    setCooldownModalActive: a,
                  },
                  d,
                ),
                m.length > 0 &&
                  !s &&
                  (0, Y.jsx)(Y.Fragment, {
                    children: (0, Y.jsxs)(`p`, {
                      children: [
                        k(
                          m.length === 1
                            ? `#FamilyManagement_OtherInvite`
                            : `#FamilyManagement_OtherInvites`,
                          m.length,
                        ),
                        ` `,
                        (0, Y.jsx)(`a`, {
                          onClick: () => l(!0),
                          children: k(`#FamilyManagement_Expand`),
                        }),
                      ],
                    }),
                  }),
                m.length > 0 &&
                  s &&
                  (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsxs)(`p`, {
                        children: [
                          k(
                            m.length === 1
                              ? `#FamilyManagement_OtherInvite`
                              : `#FamilyManagement_OtherInvites`,
                            m.length,
                          ),
                          ` `,
                          (0, Y.jsx)(`a`, {
                            onClick: () => l(!1),
                            children: k(`#FamilyManagement_Collapse`),
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`div`, {
                        children: m.map((e) =>
                          (0, Y.jsx)(
                            Lr,
                            {
                              inviterSteamID: e.inviter_steamid(),
                              inviteID: e.invite_id(),
                              familyGroupID: e.family_groupid(),
                              role: e.role(),
                              setCooldownModalActive: a,
                            },
                            e.family_groupid(),
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : (0, Y.jsx)(wl, {
            children: (0, Y.jsxs)(`div`, {
              className: aa,
              children: [
                d &&
                  (0, Y.jsx)(`div`, {
                    className: `tf04-wL8lP4-`,
                    children: k(`#FamilyManagement_IncomingInviteGone`),
                  }),
                (0, Y.jsx)(jl, {
                  children: k(`#FamilyManagement_JoinAFamily`),
                }),
                (0, Y.jsx)(`p`, {
                  children: k(`#FamilyManagement_ToJoinInstructions`),
                }),
                (0, Y.jsx)(`br`, {}),
                r > 0 &&
                  (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsx)(jl, {
                        children: k(`#FamilyManagement_PendingInvitesHeader`),
                      }),
                      (0, Y.jsxs)(`p`, {
                        children: [
                          Ye(
                            `#FamilyManagement_PendingInvitesText`,
                            (0, Y.jsx)(`span`, { className: `rtDwRYVllRQ-` }),
                            (0, Y.jsx)(`b`, {}),
                          ),
                          ` `,
                        ],
                      }),
                      n.data
                        ?.pending_group_invites()
                        .map((e) =>
                          (0, Y.jsx)(
                            Lr,
                            {
                              inviteID: e.invite_id(),
                              inviterSteamID: e.inviter_steamid(),
                              familyGroupID: e.family_groupid(),
                              role: e.role(),
                              setCooldownModalActive: a,
                            },
                            e.family_groupid(),
                          ),
                        ),
                    ],
                  }),
              ],
            }),
          })
  );
}
function Al(e) {
  let t = W(),
    n = t.data.family_groupid(),
    r = t.data.role() === 1,
    i = U(n);
  return (
    K(i, `#FamilyManagement_ErrorLoadFamily`, G.k_EFamilyQueryLoadFamily),
    i.isLoading
      ? (0, Y.jsx)(`div`, {
          className: Li,
          children: (0, Y.jsx)(`div`, {
            className: Ii,
            children: (0, Y.jsx)(y, {}),
          }),
        })
      : i.isError
        ? null
        : (0, Y.jsxs)(F, {
            className: Li,
            children: [
              (0, Y.jsx)(Nl, {}),
              (0, Y.jsx)(Pl, { familyGroupID: n, isAdult: r }),
              (0, Y.jsx)(Ll, { familyGroupID: n }),
            ],
          })
  );
}
function jl(e) {
  return (0, Y.jsx)(`div`, { className: Ni, children: e.children });
}
function Ml(e) {
  let n = t();
  function r() {
    n.push(`/account/familymanagement`);
  }
  return (0, Y.jsx)(`div`, {
    className: Mi,
    children: (0, Y.jsx)(`div`, {
      className: B(ji, `account_header_line noicon`),
      onClick: r,
      children: e.children,
    }),
  });
}
function Nl() {
  let e = Nr(u(), Pr),
    t = W(),
    n = !t.data.is_not_member_of_any_group();
  return !e || !n || e === t.data.family_groupid()
    ? null
    : (0, Y.jsxs)(`div`, {
        className: na,
        children: [
          (0, Y.jsx)(Xe, { color: Ai }),
          (0, Y.jsx)(`span`, {
            children: k(`#FamilyManagement_CannotJoinWhileAlreadyMember`),
          }),
        ],
      });
}
function Pl(e) {
  let { familyGroupID: t, isAdult: n } = e,
    r = U(t);
  K(r, `#FamilyManagement_ErrorLoadFamily`, G.k_EFamilyQueryLoadFamily);
  let i = r.data,
    a = i.members().length + i.pending_invites().length,
    o = i.free_spots() + i.members().length + i.pending_invites().length;
  return (0, Y.jsxs)(`div`, {
    className: Ri,
    children: [
      (0, Y.jsx)(Rl, { familyGroupID: t, isAdult: n }),
      n &&
        (0, Y.jsx)(`div`, {
          className: void 0,
          children: k(`#FamilyManagement_MemberCount`, a, o),
        }),
    ],
  });
}
function Fl(e) {
  let t = S(e),
    n = `${N.COMMUNITY_BASE_URL}profiles/${e}`;
  return t.isSuccess
    ? (0, Y.jsx)(R, {
        className: void 0,
        href: n,
        children: (0, Y.jsx)(`b`, { children: (0, Y.jsx)(kr, { steamid: e }) }),
      })
    : null;
}
function Il(e) {
  let { familyGroupID: t } = e,
    n = Oc(t),
    r = rn(t),
    i = [
      {
        name: k(`#FamilyManagement_ManageTab`),
        key: `manage`,
        contents: (0, Y.jsx)(Al, {}),
      },
    ];
  return (
    i.push({
      name: k(`#FamilyManagement_LibraryTab`),
      key: `library`,
      contents: (0, Y.jsx)(Is, { familyGroupID: t }),
    }),
    i.push({
      name: k(`#FamilyManagement_RequestsTab`),
      key: `requests`,
      contents: (0, Y.jsx)(Gc, { rgRequests: n, familyGroupID: t }),
    }),
    r === 1 &&
      (i.push({
        name: k(`#FamilyManagement_PlaytimeTab`),
        key: `playtime`,
        contents: (0, Y.jsx)(xl, { familyGroupID: t }),
      }),
      i.push({
        name: k(`#FamilyManagement_HistoryTab`),
        key: `history`,
        contents: (0, Y.jsx)(Ta, {
          familyGroupID: t,
          nFamilyHistoryRowHeight: ki,
          FamilyHistory: Qi,
          Entry: $i,
          Timestamp: ea,
          EntryText: ta,
          FnRenderName: Fl,
        }),
      })),
    (0, Y.jsx)(F, {
      autoFocus: !0,
      focusableIfEmpty: !0,
      children: (0, Y.jsx)(_, {
        tabs: i,
        classNameCtn: Pi,
        classNameTab: Fi,
        preferredFocus: !0,
      }),
    })
  );
}
function Ll(e) {
  let { familyGroupID: t } = e,
    n = rn(t),
    r = U(t);
  K(r, `#FamilyManagement_ErrorLoadFamily`, G.k_EFamilyQueryLoadFamily);
  let i = z();
  if (r.isLoading)
    return (0, Y.jsx)(`div`, { className: Ii, children: (0, Y.jsx)(y, {}) });
  if (r.isError) return null;
  let a = n == 1,
    o = r.data.members().findIndex((e) => e.steamid() === i),
    s = r.data.members()[o],
    c = r.data.members().slice();
  return (
    o !== -1 && c.splice(o, 1),
    (0, Y.jsxs)(Y.Fragment, {
      children: [
        o !== -1 &&
          (0, Y.jsx)(va, { familyGroupID: t, member: s }, s.steamid()),
        c.map((e) =>
          (0, Y.jsx)(va, { familyGroupID: t, member: e }, e.steamid()),
        ),
        a &&
          r.data
            ?.pending_invites()
            .map((e) =>
              (0, Y.jsx)(va, { familyGroupID: t, member: e }, e.steamid()),
            ),
        a && r.data.free_spots() > 0 && (0, Y.jsx)(fi, { familyGroupID: t }),
      ],
    })
  );
}
function Rl(e) {
  let { familyGroupID: t, isAdult: n } = e,
    [r, i] = (0, J.useState)(!1),
    a = U(t),
    { setErrorMessage: o } = V();
  K(a, `#FamilyManagement_ErrorLoadFamily`, G.k_EFamilyQueryLoadFamily);
  let [s, c] = (0, J.useState)(a.data?.name()),
    l = Vt(t);
  K(l, `#FamilyManagement_ErrorModifyFamily`, G.k_EFamilyQueryModifyFamily);
  let u = (e) => {
    (o(null), l.mutate(e), i(!1));
  };
  return r && n
    ? (0, Y.jsxs)(F, {
        className: zi,
        children: [
          (0, Y.jsx)(`span`, {
            className: Bi,
            children: k(`#FamilyManagement_YourFamily`),
          }),
          (0, Y.jsx)(mt, {
            className: Ui,
            type: `text`,
            onChange: (e) => {
              (c(e.target.value), o(null));
            },
            value: s,
            placeholder: k(`#FamilyManagement_InputNamePlaceholder`),
            maxLength: 128,
          }),
          (0, Y.jsx)(M, {
            className: Wi,
            noFocusRing: !1,
            onClick: () => u(s),
            children: k(`#FamilyManagement_EditFamilyNameSaveButton`),
          }),
          (0, Y.jsx)(M, {
            className: Gi,
            noFocusRing: !1,
            onClick: () => {
              (i(!1), o(null));
            },
            children: k(`#FamilyManagement_EditFamilyNameCancelButton`),
          }),
        ],
      })
    : (0, Y.jsxs)(`div`, {
        className: zi,
        children: [
          (0, Y.jsx)(`span`, {
            className: Bi,
            children: k(`#FamilyManagement_YourFamily`),
          }),
          (0, Y.jsxs)(F, {
            className: Hi,
            onActivate: n
              ? () => {
                  (i(!0), o(null));
                }
              : void 0,
            children: [
              (0, Y.jsx)(`div`, { className: Vi, children: s }),
              n &&
                (0, Y.jsx)(F, {
                  className: `_4pQtapRnbvg-`,
                  children: (0, Y.jsx)(Nt, {}),
                }),
            ],
          }),
        ],
      });
}
export {
  Il as FamilyTabContainer,
  Fl as GenerateNameElementForHistory,
  Sl as default,
};
