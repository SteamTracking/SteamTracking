/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
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
} from "./libraries.js";
import { V as m } from "./storelink.js";
import { K as h, et as g, mr as _ } from "./saletags.js";
import { t as v } from "./modals.js";
import { t as y } from "./throbber.js";
import { u as b } from "./stringutils.js";
import { t as ee } from "./moment.js";
import { i as x, n as te } from "./privateapps.js";
import { n as S, t as ne } from "./playerstore.js";
import { a as C, i as w, n as T, o as re, r as ie } from "./storeitemhooks.js";
import { i as ae, n as oe, t as E } from "./friendsstore.js";
import {
  a as se,
  i as ce,
  n as le,
  o as ue,
  r as de,
  t as fe,
} from "./contentdescriptors.js";
import {
  A as pe,
  Ac as D,
  Ai as me,
  An as O,
  Ar as he,
  Av as ge,
  Bb as _e,
  Bl as ve,
  Br as ye,
  C as be,
  Cc as k,
  Co as xe,
  Cr as Se,
  D as Ce,
  Dc as we,
  Dn as A,
  E as Te,
  Ea as Ee,
  En as De,
  Eo as Oe,
  F as j,
  Fo as ke,
  Gr as Ae,
  Gy as je,
  Hl as Me,
  I as Ne,
  Jx as Pe,
  Jy as Fe,
  Ly as M,
  N as Ie,
  Na as Le,
  O as Re,
  Or as ze,
  P as Be,
  Qn as Ve,
  Sn as He,
  T as Ue,
  To as We,
  Ul as Ge,
  Uy as Ke,
  Vl as qe,
  Vo as Je,
  Vx as Ye,
  Wy as N,
  Xa as Xe,
  Xy as Ze,
  Yy as P,
  ay as Qe,
  bc as $e,
  cb as et,
  cr as tt,
  db as nt,
  di as rt,
  fr as F,
  fu as it,
  gl as at,
  hb as ot,
  hi as st,
  hn as ct,
  hx as lt,
  ir as ut,
  ix as I,
  jr as dt,
  ju as ft,
  k as pt,
  ly as L,
  ml as mt,
  mn as R,
  mr as ht,
  mu as gt,
  nr as _t,
  ny as vt,
  ob as yt,
  ol as bt,
  pb as xt,
  pr as St,
  pu as Ct,
  q as wt,
  qn as Tt,
  rb as Et,
  rl as z,
  rr as B,
  ry as Dt,
  uo as Ot,
  ur as kt,
  ut as At,
  vo as jt,
  wl as Mt,
  wo as Nt,
  zr as Pt,
} from "./main.js";
import { t as Ft } from "./expanderbutton.js";
import "./steammessages_familygroups_pb.js";
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
} from "./familymanagementstore.js";
import { i as q } from "./steamavatar.js";
import { n as on, t as sn } from "./personanameandstatus.js";
import { n as cn } from "./useavatarandpersona.js";
import { t as ln } from "./react-datetime.js";
import { s as un } from "./layout.js";
function J(e, t, n) {
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
function dn(e, t) {
  if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ``}`);
  return e;
}
var fn = (e, t) => Math.abs(e - t) < 1.01,
  pn = (e, t, n) => {
    let r;
    return function (...i) {
      (e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n)));
    };
  },
  mn = (e) => {
    let { offsetWidth: t, offsetHeight: n } = e;
    return { width: t, height: n };
  },
  hn = (e) => e,
  gn = (e) => {
    let t = Math.max(e.startIndex - e.overscan, 0),
      n = Math.min(e.endIndex + e.overscan, e.count - 1),
      r = [];
    for (let e = t; e <= n; e++) r.push(e);
    return r;
  },
  _n = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = (e) => {
      let { width: n, height: r } = e;
      t({ width: Math.round(n), height: Math.round(r) });
    };
    if ((i(mn(n)), !r.ResizeObserver)) return () => {};
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
        i(mn(n));
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
  vn = { passive: !0 },
  yn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = () => {
      t({ width: n.innerWidth, height: n.innerHeight });
    };
    return (
      r(),
      n.addEventListener(`resize`, r, vn),
      () => {
        n.removeEventListener(`resize`, r);
      }
    );
  },
  bn = typeof window > `u` || `onscrollend` in window,
  xn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && bn
          ? () => void 0
          : pn(
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
    (c(), n.addEventListener(`scroll`, s, vn));
    let l = e.options.useScrollendEvent && bn;
    return (
      l && n.addEventListener(`scrollend`, c, vn),
      () => {
        (n.removeEventListener(`scroll`, s),
          l && n.removeEventListener(`scrollend`, c));
      }
    );
  },
  Sn = (e, t) => {
    let n = e.scrollElement;
    if (!n) return;
    let r = e.targetWindow;
    if (!r) return;
    let i = 0,
      a =
        e.options.useScrollendEvent && bn
          ? () => void 0
          : pn(
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
    (c(), n.addEventListener(`scroll`, s, vn));
    let l = e.options.useScrollendEvent && bn;
    return (
      l && n.addEventListener(`scrollend`, c, vn),
      () => {
        (n.removeEventListener(`scroll`, s),
          l && n.removeEventListener(`scrollend`, c));
      }
    );
  },
  Cn = (e, t, n) => {
    if (t?.borderBoxSize) {
      let e = t.borderBoxSize[0];
      if (e)
        return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  wn = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  Tn = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, a;
    let o = e + t;
    (a = (i = r.scrollElement)?.scrollTo) == null ||
      a.call(i, { [r.options.horizontal ? `left` : `top`]: o, behavior: n });
  },
  En = class {
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
              getItemKey: hn,
              rangeExtractor: gn,
              onChange: () => {},
              measureElement: Cn,
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
        (this.maybeNotify = J(
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
        (this.getMeasurementOptions = J(
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
        (this.getMeasurements = J(
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
        (this.calculateRange = J(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (e, t, n, r) =>
            (this.range =
              e.length > 0 && t > 0
                ? On({
                    measurements: e,
                    outerSize: t,
                    scrollOffset: n,
                    lanes: r,
                  })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualIndexes = J(
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
        (this.getVirtualItems = J(
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
            return dn(t[Dn(0, t.length - 1, (e) => dn(t[e]).start, e)]);
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
                    ? fn(n[0], t) || a(o)
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
  Dn = (e, t, n, r) => {
    for (; e <= t;) {
      let i = ((e + t) / 2) | 0,
        a = n(i);
      if (a < r) e = i + 1;
      else if (a > r) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
function On({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  let i = e.length - 1,
    a = (t) => e[t].start;
  if (e.length <= r) return { startIndex: 0, endIndex: i };
  let o = Dn(0, i, a, n),
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
var Y = e(o(), 1),
  kn = e(i(), 1),
  An = typeof document < `u` ? Y.useLayoutEffect : Y.useEffect;
function jn(e) {
  let t = Y.useReducer(() => ({}), {})[1],
    n = {
      ...e,
      onChange: (n, r) => {
        var i;
        (r ? (0, kn.flushSync)(t) : t(),
          (i = e.onChange) == null || i.call(e, n, r));
      },
    },
    [r] = Y.useState(() => new En(n));
  return (
    r.setOptions(n), An(() => r._didMount(), []), An(() => r._willUpdate()), r
  );
}
function Mn(e) {
  return jn({
    observeElementRect: _n,
    observeElementOffset: xn,
    scrollToFn: Tn,
    ...e,
  });
}
function Nn(e) {
  return jn({
    getScrollElement: () => (typeof document < `u` ? window : null),
    observeElementRect: yn,
    observeElementOffset: Sn,
    scrollToFn: wn,
    initialOffset: () => (typeof document < `u` ? window.scrollY : 0),
    ...e,
  });
}
var Pn = `F0yrVzJ4EkQ-`,
  Fn = `EYebA7kYJcU-`,
  In = `kTBEffSCimA-`,
  Ln = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Rn = `k03Dln9WiwM-`,
  X = d(),
  zn = Y.memo(function (e) {
    let {
        virtualizer: t,
        bDynamic: n,
        scrollAlign: r,
        bNativeScrollIntoView: i,
        idx: a,
        rowGap: o,
        renderItem: s,
      } = e,
      c = Y.useCallback(
        (e, n, i) => (t.scrollToIndex(a, { align: r }), !0),
        [t, a, r],
      );
    return (0, X.jsx)(D, {
      ref: n ? t.measureElement : void 0,
      navKey: `VirtualizedListIndex-${a}`,
      "data-index": a,
      fnScrollIntoViewHandler: i ? void 0 : c,
      scrollIntoViewWhenChildFocused: `force`,
      style: { width: `100%`, paddingBottom: o },
      children: s(a),
    });
  });
function Bn(e) {
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
function Vn(e, t) {
  let n = e.getBoundingClientRect().top;
  return t
    ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
    : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
}
var Hn = Y.forwardRef(function (e, t) {
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
    [b, ee] = (0, Y.useState)(d ?? f),
    [x, te] = Y.useState(),
    [S, ne] = Y.useState(),
    [C, w] = Y.useState(),
    T = Y.useRef(null),
    re = Y.useCallback(
      (e) => {
        if (!e) return;
        let t = at(e, `y`),
          n = Vn(e, d == `window` ? null : t),
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
        h ? i() : (0, Y.startTransition)(i);
      },
      [d, h],
    ),
    ie = Y.useRef(x);
  ie.current = x;
  let ae = Bn(
      Y.useCallback(() => {
        if (!T.current) return;
        let e = Vn(T.current, ie.current);
        (0, Y.startTransition)(() => {
          w(e);
        });
      }, []),
    ),
    oe = ve(re, T, ae, t),
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
  return (0, X.jsx)(D, {
    className: u,
    ref: oe,
    ...y,
    children: (0, X.jsxs)(Y.Suspense, {
      children: [
        b === `element` &&
          (0, X.jsx)(qn, {
            ...E,
            nScrollMargin: C,
            elScrollable: x,
            rectScrollable: S,
          }),
        b === `window` && (0, X.jsx)(Kn, { ...E, nScrollMargin: C }),
      ],
    }),
  });
});
function Un(e, t, n) {
  Y.useEffect(() => {
    n ||
      (0, Y.startTransition)(() => {
        e.measure();
      });
  }, [e, t, n]);
}
function Wn(e, t, n) {
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
function Gn(e, t, n) {
  let [, r] = (0, Y.useState)(0),
    i = Y.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: `all` });
  ((i.current.bPositionKnown = t), (i.current.nMargin = n));
  let a = Y.useCallback(
    (e, t) =>
      Xn(e, (n, a) => {
        t(n, a);
        let { bPositionKnown: o, nMargin: s, eRowWindow: c } = i.current;
        Wn(e, o, s) != c && r((e) => e + 1);
      }),
    [],
  );
  return {
    observeElementOffset: e ? a : Xn,
    fnGetRowWindow: (r) => {
      let a = e ? Wn(r, t, n) : `all`;
      return ((i.current.eRowWindow = a), a);
    },
  };
}
function Kn(e) {
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
  Ee();
  let p = r + i,
    { observeElementOffset: m, fnGetRowWindow: h } = Gn(d, t !== void 0, a * p),
    g = Nn({
      count: n,
      scrollMargin: t,
      estimateSize: Y.useCallback(() => p, [p]),
      measureElement: c,
      getItemKey: l,
      overscan: a,
      initialOffset: o ?? (() => window.scrollY),
      initialRect: void 0,
      observeElementOffset: m,
      observeElementRect: Zn,
      onChange(e, t) {
        s?.(e.scrollOffset);
      },
    });
  return (
    (g.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !f && t !== void 0 && e.start < (g.scrollOffset ?? 0)),
    Un(g, p, u),
    (0, X.jsx)(Jn, { ...e, virtualizer: g, eRowWindow: h(g) })
  );
}
function qn(e) {
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
    g = Ee(),
    { observeElementOffset: _, fnGetRowWindow: v } = Gn(
      p,
      r !== void 0 && n !== void 0,
      s * h,
    ),
    y = Mn({
      count: t,
      scrollMargin: n ?? 0,
      getScrollElement: () => (
        r &&
          y.scrollElement !== r &&
          c === void 0 &&
          (y.scrollOffset = r.scrollTop),
        r ?? null
      ),
      estimateSize: Y.useCallback(() => h, [h]),
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
      observeElementRect: Qn,
      onChange(e, t) {
        l?.(e.scrollOffset);
      },
    });
  return (
    (y.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !m && r !== void 0 && e.start < (y.scrollOffset ?? 0)),
    Un(y, h, f),
    (0, X.jsx)(Jn, { ...e, virtualizer: y, eRowWindow: v(y) })
  );
}
function Jn(e) {
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
  return (0, X.jsx)(D, {
    "flow-children": `column`,
    navEntryPreferPosition: mt.MAINTAIN_Y,
    style: { height: `${f}px`, width: `100%`, position: `relative` },
    children: (0, X.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${d}px )`,
      },
      children: u.map((e) =>
        (0, X.jsx)(
          zn,
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
function Yn(e) {
  return (...t) => {
    queueMicrotask(() => {
      (0, Y.startTransition)(() => {
        e(...t);
      });
    });
  };
}
function Xn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r;
  r =
    `scrollX` in n
      ? Yn((r) => t(n[e.options.horizontal ? `scrollX` : `scrollY`], r))
      : Yn((r) => t(n[e.options.horizontal ? `scrollLeft` : `scrollTop`], r));
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
function Zn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Yn(() => t({ width: n.innerWidth, height: n.innerHeight }));
  return (
    r(),
    n.addEventListener(`resize`, r, { passive: !0 }),
    () => {
      n.removeEventListener(`resize`, r);
    }
  );
}
function Qn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Yn((e) =>
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
function $n(e) {
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
  return (0, X.jsx)(D, {
    className: Rn,
    style: { height: i, gap: o },
    children: s,
  });
}
function er(e) {
  let {
      nItems: t,
      renderItem: n,
      nAspectRatio: r,
      nColumns: i = 7,
      nColumnGap: a = 10,
      nRowGap: o = 10,
      onWidthChanged: s,
    } = e,
    [c, l] = Y.useState(0),
    u = Math.ceil(t / i),
    d = Math.max(0, Math.floor((c - (i - 1) * a) / i)),
    f = Math.floor(d / r),
    p = Y.useCallback(
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
    m = me(p);
  return (0, X.jsx)(Hn, {
    ref: m,
    nRows: u,
    nItemHeight: f,
    nRowGap: o,
    renderItem: (e) =>
      (0, X.jsx)(
        $n,
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
var tr = e(s(), 1);
function nr(e) {
  let { app: t, width: n, index: r, renderItem: i } = e,
    [a, o] = Y.useState(`loading`),
    s = we(t.appid);
  if (s === void 0) return null;
  let c = a == `error` || !s,
    l;
  return (
    (l = c
      ? (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`img`, {
              className: Fn,
              src: Ln,
              alt: t.name,
              loading: `lazy`,
            }),
            (0, X.jsx)(`div`, { className: In, children: t.name }),
          ],
        })
      : (0, X.jsx)(`img`, {
          className: Fn,
          src: s,
          alt: t.name,
          onLoad: () => o(`loaded`),
          onError: () => o(`error`),
        })),
    i(t, r, {
      className: (0, tr.default)(Pn, (c || a == `loaded`) && `VrF8YC9c1R8-`),
      style: { width: n },
      fnScrollIntoViewHandler: () => !0,
      children: l,
    })
  );
}
function rr(e) {
  let { rgApps: t, renderItem: n, ...r } = e,
    i = Y.useCallback(
      (e, r) => {
        let i = t[e];
        return (0, X.jsx)(
          nr,
          { app: i, width: r, index: e, renderItem: n },
          i.appid,
        );
      },
      [t, n],
    );
  return (0, X.jsx)(er, {
    nItems: t.length,
    renderItem: i,
    nAspectRatio: 600 / 900,
    ...r,
  });
}
var ir = `Y40SQPXX5oQ-`,
  ar = `zCRrFtmBzfE-`,
  or = `L5LbiQQqjag-`,
  sr = `qmn8k6ba2eU-`,
  cr = `KoZvs-2luog-`,
  lr = `cuyTu9NS4KM-`,
  ur = `iWLBT-TcMv4-`,
  dr = `niLIWmhI1js-`,
  fr = `oopo3Ku8mhg-`,
  pr = `CxU4ntOFsQQ-`,
  mr = `_9osVXUhcbdU-`,
  hr = `NIvLAfv4LAU-`,
  gr = `GlXtC9FjEn0-`,
  _r = `giqUsooCFVw-`,
  vr = `p3HBhguzwZk-`,
  yr = `j4i41f9JjvI-`,
  br = `O3Jk02D0k5M-`,
  xr = `lZjvDTc7fbY-`,
  Sr = `BWetszd5oQ8-`,
  Cr = `G57tn4BJPXw-`;
function wr(e) {
  return {
    queryKey: [`communitypreferences`],
    queryFn: async () => {
      let t = lt.Init(wt),
        n = await At.GetCommunityPreferences(e, t);
      if (n.GetEResult() != 1)
        throw Error(
          `Error from GetCommunityPreferences: ${n.GetEResult()} ${n.GetErrorMessage()}`,
        );
      return n.Body();
    },
    staleTime: 3e5,
  };
}
function Z() {
  let e = Qe();
  return f(wr(e));
}
function Tr(e) {
  return (0, X.jsx)(We, {});
}
function Er(e) {
  return (0, X.jsx)(Oe, {});
}
function Dr(e) {
  return (0, X.jsx)(`div`, {
    className: k(gr, e.className),
    children: e.role == 2 ? (0, X.jsx)(Er, {}) : (0, X.jsx)(Tr, {}),
  });
}
function Or(e) {
  let { steamid: t } = e,
    n = S(t),
    r = E(),
    i = Z(),
    a = r.data?.get(new M(t).GetAccountID()),
    o = i.data?.preferences().parenthesize_nicknames();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      n.data?.m_strPlayerName || `\xA0`,
      ` `,
      o &&
        a &&
        (0, X.jsxs)(`span`, { className: void 0, children: [`(`, a, `)`] }),
    ],
  });
}
function kr(e) {
  let { role: t, persona: n, isSelf: r } = e,
    i = e.size || `Large`,
    a = E(),
    o = Z(),
    s = a.data?.get(n.GetAccountID()),
    c = o.data?.preferences().parenthesize_nicknames();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(`div`, {
        className: _r,
        children: [
          (0, X.jsx)(q, {
            className: void 0,
            persona: n,
            size: i,
            statusPosition: `right`,
          }),
          (0, X.jsx)(on, {
            className: vr,
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
      (0, X.jsxs)(`div`, {
        className: yr,
        children: [
          (0, X.jsx)(Dr, { className: void 0, role: t }),
          (0, X.jsx)(`div`, {
            className: br,
            children: N(`#FamilyManagement_Role_${t}`),
          }),
        ],
      }),
    ],
  });
}
function Ar(e) {
  let t = (0, Y.useContext)(Zt);
  return t.errorMessage
    ? (0, X.jsx)(`div`, { className: xr, children: t.errorMessage })
    : null;
}
function jr(e) {
  let { persona: t, role: n, invitePending: r } = e,
    i = L() == t.GetSteamIDAsString();
  return (0, X.jsxs)(`div`, {
    className: Sr,
    children: [
      (0, X.jsx)(kr, { role: n, persona: t, isSelf: i }),
      r &&
        (0, X.jsx)(`div`, {
          className: `AlTotQVWTmI-`,
          children: N(`#FamilyManagement_InvitePending`),
        }),
      i &&
        (0, X.jsx)(`span`, {
          className: `BeFK8ZlH3Wk-`,
          children: N(`#FamilyManagement_Me`),
        }),
    ],
  });
}
function Mr(e, t) {
  return new URLSearchParams(e.search).get(t);
}
var Nr = `invitation`,
  Pr = `nonce`;
function Fr(e) {
  let { cooldownSecondsRemaining: t } = e;
  return (0, X.jsx)(`div`, {
    className: hr,
    children: N(
      `#FamilyManagement_CooldownAllowed`,
      Et(Date.now() / 1e3 + t, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        weekday: void 0,
      }),
    ),
  });
}
function Ir(e) {
  let { inviterSteamID: n, familyGroupID: r, role: i, inviteID: a } = e,
    o = L(),
    s = Qt(r),
    c = en(r, o),
    l = S(n),
    d = Yt(r, a),
    [f, p] = (0, Y.useState)(!1),
    [m, h] = (0, Y.useState)(!1),
    [g, _] = (0, Y.useState)(``),
    { setErrorMessage: v } = V();
  H(l, `#FamilyManagement_ErrorLoadFamilyInviteGeneric`);
  let b = t(),
    ee = !!Mr(u(), Nr);
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
    return (0, X.jsx)(`div`, { className: mr, children: (0, X.jsx)(y, {}) });
  let te = () => {
      (v(null),
        s.mutate(null, {
          onSuccess: (e) => {
            (e.cooldown_skip_granted() && h(!0),
              e.two_factor_method() === 1
                ? I.IN_MOBILE_WEBVIEW
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
  return (0, X.jsxs)(`div`, {
    className: ir,
    children: [
      (0, X.jsxs)(R, {
        active: !!f,
        children: [
          f === `explanation` &&
            (0, X.jsxs)(O, {
              title: N(`#FamilyManagement_RoleDescriptionLongHeader_${i}`),
              closeModal: w,
              children: [
                i === 1 ? (0, X.jsx)(Lr, {}) : (0, X.jsx)(Rr, {}),
                (0, X.jsx)(B, {
                  onClick: w,
                  children: N(`#FamilyManagement_Close`),
                }),
              ],
            }),
          f === `confirm` &&
            (0, X.jsx)(A, {
              closeModal: w,
              onCancel: w,
              onOK: te,
              strTitle: N(`#FamilyManagement_ConfirmJoinDialog`),
              children: je(
                `#FamilyManagement_ConfirmJoin_${i}`,
                (0, X.jsx)(`b`, {}),
              ),
            }),
          f === `awaitmobile2fa` &&
            (0, X.jsxs)(O, {
              title: N(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: T,
              children: [
                (0, X.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: N(
                    ((e) =>
                      e
                        ? I.IN_MOBILE_WEBVIEW
                          ? `#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp`
                          : `#FamilyManagement_Await2FAForJoin_Description_Mobile`
                        : `#FamilyManagement_Await2FAForJoin_Description_Email`)(
                      f === `awaitmobile2fa`,
                    ),
                  ),
                }),
                m &&
                  (0, X.jsx)(Fr, {
                    cooldownSecondsRemaining:
                      x.data.cooldown_seconds_remaining(),
                  }),
                m &&
                  (0, X.jsx)(`div`, {
                    className: `NIvLAfv4LAU-`,
                    children: N(`#FamilyManagement_CooldownAllowed_2_Join`),
                  }),
                (0, X.jsx)(B, {
                  onClick: T,
                  children: N(`#FamilyManagement_Close`),
                }),
              ],
            }),
          f === `awaitemail2fa` &&
            (0, X.jsxs)(O, {
              title: N(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: T,
              children: [
                i === 2 &&
                  (0, X.jsxs)(D, {
                    className: `PYI2fW8ZVOY-`,
                    children: [
                      (0, X.jsx)(D, {
                        className: `NIvLAfv4LAU-`,
                        children: N(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_1`,
                        ),
                      }),
                      (0, X.jsx)(D, {
                        className: `NIvLAfv4LAU-`,
                        children: je(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_2`,
                          (0, X.jsx)(`a`, {
                            href: `${I.HELP_BASE_URL}/wizard/HelpChangePassword`,
                          }),
                        ),
                      }),
                    ],
                  }),
                (0, X.jsx)(D, {
                  className: `NIvLAfv4LAU-`,
                  children: N(
                    `#FamilyManagement_Await2FAForJoin_Description_Email`,
                  ),
                }),
                (0, X.jsx)(D, {
                  className: `e61iZLcZtvg-`,
                  children: (0, X.jsx)(bt, {
                    className: void 0,
                    type: `text`,
                    onChange: (e) => {
                      (_(e.target.value), v(null));
                    },
                    value: g,
                    placeholder: N(
                      `#FamilyManagement_Await2FAForJoin_InputPlaceholder`,
                    ),
                    maxLength: 128,
                  }),
                }),
                (0, X.jsxs)(D, {
                  className: `_5ru43GZ9T0M-`,
                  children: [
                    (0, X.jsx)(F, {
                      onClick: async () => {
                        d.mutateAsync(g).then(T);
                      },
                      children: N(
                        `#FamilyManagement_AwaitCodeFromEmail_Confirm`,
                      ),
                    }),
                    (0, X.jsx)(B, {
                      onClick: w,
                      children: N(
                        `#FamilyManagement_AwaitCodeFromEmail_Cancel`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          f == `alreadyaccepted` &&
            (0, X.jsxs)(O, {
              title: N(`#FamilyManagement_AlreadyAccepted_Header`),
              closeModal: T,
              children: [
                (0, X.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: N(`#FamilyManagement_AlreadyAccepted_Text`),
                }),
                (0, X.jsx)(B, {
                  onClick: T,
                  children: N(`#FamilyManagement_Close`),
                }),
              ],
            }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: ar,
        children: [
          (0, X.jsx)(`a`, {
            className: void 0,
            href: C.GetCommunityProfileURL(),
            children: (0, X.jsx)(q, {
              className: or,
              persona: C,
              size: `Large`,
              statusPosition: `right`,
            }),
          }),
          (0, X.jsx)(`div`, {
            className: void 0,
            children: P(
              i === 1
                ? `#FamilyManagement_PendingFamilyInviteInviteText_Adult`
                : `#FamilyManagement_PendingFamilyInviteInviteText_Child`,
              (0, X.jsx)(`a`, {
                className: void 0,
                href: C.GetCommunityProfileURL(),
                children: (0, X.jsx)(`span`, {
                  className: sr,
                  children: C?.m_strPlayerName,
                }),
              }),
              (0, X.jsxs)(`div`, {
                className: lr,
                children: [
                  (0, X.jsx)(Dr, { className: cr, role: i }),
                  (0, X.jsx)(`span`, {
                    className: ur,
                    children: N(`#FamilyManagement_Role_${i}`),
                  }),
                ],
              }),
            ),
          }),
        ],
      }),
      i == 1 &&
        (0, X.jsx)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: (0, X.jsx)(`p`, {
            children: je(
              `#FamilyManagement_RoleDescriptionShort_Adult`,
              (0, X.jsx)(`span`, { className: `iWLBT-TcMv4-` }),
              (0, X.jsx)(`a`, {
                className: `fcwjI2x1EM0-`,
                onClick: () => p(`explanation`),
              }),
            ),
          }),
        }),
      i == 2 &&
        (0, X.jsxs)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: [
            (0, X.jsx)(`p`, {
              children: je(
                `#FamilyManagement_RoleDescriptionShort_Child`,
                (0, X.jsx)(`span`, { className: `iWLBT-TcMv4-` }),
                (0, X.jsx)(`a`, {
                  className: `fcwjI2x1EM0-`,
                  onClick: () => p(`explanation`),
                }),
              ),
            }),
            (0, X.jsxs)(`ul`, {
              className: `y1l6NhH-DV4-`,
              children: [
                (0, X.jsx)(`li`, {
                  children: N(`#FamilyManagement_RoleDescriptionShort_Child_1`),
                }),
                (0, X.jsx)(`li`, {
                  children: N(`#FamilyManagement_RoleDescriptionShort_Child_2`),
                }),
                (0, X.jsx)(`li`, {
                  children: N(`#FamilyManagement_RoleDescriptionShort_Child_3`),
                }),
              ],
            }),
          ],
        }),
      (0, X.jsxs)(`div`, {
        className: dr,
        children: [
          (0, X.jsx)(B, {
            className: fr,
            onClick: () => p(`confirm`),
            children: N(`#FamilyManagement_AcceptInviteButton`),
          }),
          (0, X.jsx)(B, {
            className: pr,
            onClick: ne,
            children: N(`#FamilyManagement_DeclineInviteButton`),
          }),
        ],
      }),
    ],
  });
}
function Lr() {
  return (0, X.jsxs)(`div`, {
    className: k(`account_settings_container`),
    children: [
      (0, X.jsx)(`p`, { children: N(`#FamilyManagement_AdultDescription_1`) }),
      (0, X.jsx)(`p`, { children: N(`#FamilyManagement_AdultDescription_2`) }),
      (0, X.jsxs)(`ul`, {
        children: [
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_AdultDescription_3`),
          }),
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_AdultDescription_4`),
          }),
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_AdultDescription_5`),
          }),
        ],
      }),
    ],
  });
}
function Rr() {
  return (0, X.jsxs)(`div`, {
    className: k(`account_settings_container`),
    children: [
      (0, X.jsx)(`p`, { children: N(`#FamilyManagement_ChildDescription_1`) }),
      (0, X.jsxs)(`ul`, {
        children: [
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_ChildDescription_2`),
          }),
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_ChildDescription_3`),
          }),
          (0, X.jsx)(`li`, {
            children: N(`#FamilyManagement_ChildDescription_4`),
          }),
        ],
      }),
      (0, X.jsx)(`p`, { children: N(`#FamilyManagement_ChildDescription_5`) }),
    ],
  });
}
var zr = `familyid`,
  Br = `invite`;
function Vr() {
  let e = t(),
    n = u(),
    r = Mr(n, zr),
    i = Mr(n, Br),
    a = Mr(n, Pr);
  return (
    Ut(r, i, a).mutate(null, {
      onSuccess: () => e.push(`/account/familymanagement`),
    }),
    (0, X.jsx)(y, {})
  );
}
var Hr = `GgRcoJkBp2M-`,
  Ur = `zQlOx4nbipE-`,
  Wr = `YbaWsmdnzFc-`,
  Gr = `b-MA-Yvg7Qo-`,
  Kr = `_2YQN1GiqfGk-`,
  qr = `TmhoSaLpJFQ-`,
  Jr = `xJTOQ481NXA-`,
  Yr = `KR6LcgQwd0A-`,
  Xr = `UUWCl9G6jT4-`,
  Zr = `h4of3OtdDco-`,
  Qr = `GKpyofqaoJw-`,
  $r = `MBXSJd-rZFs-`,
  ei = `sOxlykuOBOQ-`,
  ti = `s7hRiIihIEs-`,
  ni = `_4suPU-6CM1E-`,
  ri = `Pjng-K5PwOk-`,
  ii = `sL-vIk-k1rQ-`,
  ai = `T5JpFOy8mno-`,
  oi = `PXvDMnEMI9M-`,
  si = `_4utYhFQr0cY-`,
  ci = `_8tN8sPDXurg-`,
  li = `FQcM42O2G1E-`;
function ui(e) {
  return new URLSearchParams(e.search).get(`inviteuser`);
}
function di(e) {
  let { familyGroupID: t } = e,
    n = u(),
    [r, i] = (0, Y.useState)(ui(n)),
    [a, o] = (0, Y.useState)(r == null ? `splash` : `selectRole`),
    s = U(t),
    c =
      s.data.slot_cooldown_remaining_seconds() > 0 &&
      s.data.slot_cooldown_overrides() === 0,
    l = (e) => {
      (i(e), o(`selectRole`));
    };
  return a === `splash`
    ? (0, X.jsx)(fi, { onClick: () => o(`selectMethod`) })
    : a === `selectMethod` && !c
      ? (0, X.jsx)(mi, {
          familyGroupID: t,
          onCancel: () => o(`splash`),
          onSelect: l,
        })
      : a === `selectMethod` && c
        ? (0, X.jsx)(hi, {
            slotCooldownSeconds: s.data.slot_cooldown_remaining_seconds(),
            familyGroupID: t,
            onCancel: () => o(`splash`),
            onSelect: l,
          })
        : a === `selectRole`
          ? (0, X.jsx)(gi, {
              familyGroupID: t,
              steamid: r,
              onCancel: () => o(`splash`),
            })
          : null;
}
function fi(e) {
  return (0, X.jsx)(`div`, {
    className: Hr,
    children: (0, X.jsxs)(F, {
      noFocusRing: !1,
      className: Ur,
      onClick: e.onClick,
      children: [
        Nt({}),
        (0, X.jsx)(`span`, { children: N(`#FamilyManagement_InviteAMember`) }),
      ],
    }),
  });
}
function pi(e) {
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
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(`div`, {
            className: qr,
            children: N(`#FamilyManagement_PreviousUsers`),
          }),
          i.isLoading
            ? (0, X.jsx)(`div`, { className: li, children: (0, X.jsx)(y, {}) })
            : (0, X.jsx)(bi, { steamids: o, onSelect: n }),
        ],
      });
}
function mi(e) {
  let { familyGroupID: t, onSelect: n, onCancel: r } = e;
  return (0, X.jsxs)(`div`, {
    className: Wr,
    children: [
      (0, X.jsx)(ht, {
        className: Kr,
        onClick: r,
        children: (0, X.jsx)($e, {}),
      }),
      (0, X.jsx)(`div`, {
        className: Jr,
        children: N(`#FamilyManagement_InviteAMember`),
      }),
      (0, X.jsx)(`div`, {
        className: qr,
        children: N(`#FamilyManagement_InviteMethodText`),
      }),
      (0, X.jsx)(D, {
        className: Yr,
        children: (0, X.jsx)(yi, { familyGroupID: t, onSelect: n }),
      }),
      (0, X.jsx)(pi, { familyGroupID: t, onSelect: n }),
    ],
  });
}
function hi(e) {
  let {
      familyGroupID: t,
      onSelect: n,
      onCancel: r,
      slotCooldownSeconds: i,
    } = e,
    a = (0, Y.useRef)(Et(Math.floor(new Date().getTime() / 1e3) + i, !1, !0)),
    o = U(t),
    s = ae();
  if (!s.isSuccess) return null;
  let c = o.data
    .former_members()
    .map((e) => e.steamid())
    .filter((e) => s.data.indexOf(e) === -1);
  return (0, X.jsxs)(`div`, {
    className: Wr,
    children: [
      (0, X.jsx)(ht, {
        className: Kr,
        noFocusRing: !1,
        onClick: r,
        children: (0, X.jsx)($e, {}),
      }),
      (0, X.jsx)(`div`, {
        className: Jr,
        children: N(`#FamilyManagement_InviteAMember`),
      }),
      (0, X.jsx)(`div`, {
        className: qr,
        children: N(`#FamilyManagement_CooldownAndReinvite`, a.current),
      }),
      (0, X.jsx)(bi, { steamids: c, onSelect: n }),
    ],
  });
}
function gi(e) {
  let { familyGroupID: t, steamid: n, onCancel: r } = e,
    { setErrorMessage: i } = V(),
    a = S(n);
  H(a, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [o, s] = (0, Y.useState)(0),
    [c, l] = (0, Y.useState)(null),
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
    return (0, X.jsx)(`div`, { className: li, children: (0, X.jsx)(y, {}) });
  let f = a.data,
    p = (e) => {
      (i(``), s(e));
    };
  return (0, X.jsxs)(`div`, {
    className: Gr,
    children: [
      (0, X.jsx)(R, {
        active: o !== 0,
        children:
          c === `awaitmobile2fa` || c === `awaitemail2fa`
            ? (0, X.jsx)(_i, {
                onClose: r,
                eMethod: c === `awaitemail2fa` ? 2 : 1,
              })
            : (0, X.jsx)(vi, {
                steamid: n,
                role: o,
                onCancel: () => s(0),
                onConfirm: d,
              }),
      }),
      (0, X.jsx)(D, {
        className: Kr,
        onActivate: r,
        children: (0, X.jsx)($e, {}),
      }),
      (0, X.jsxs)(`div`, {
        className: Jr,
        children: [
          (0, X.jsx)(`span`, {
            className: Xr,
            children: N(`#FamilyManagement_Invite`),
          }),
          (0, X.jsx)(q, {
            className: ri,
            persona: f,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, X.jsx)(`div`, { className: Zr, children: f?.m_strPlayerName }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: qr,
        children: N(`#FamilyManagement_ChooseRole`),
      }),
      (0, X.jsxs)(D, {
        className: Hr,
        children: [
          (0, X.jsx)(Si, { role: 1, onSelect: () => p(1) }),
          (0, X.jsx)(Si, { role: 2, onSelect: () => p(2) }),
        ],
      }),
    ],
  });
}
function _i(e) {
  let { eMethod: t, onClose: n } = e,
    r;
  if (t === 1 && I.IN_MOBILE_WEBVIEW)
    r = `#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp`;
  else if (t === 1) r = `#FamilyManagement_Await2FAForInvite_MobileAuth`;
  else if (t === 2) r = `#FamilyManagement_Await2FAForInvite_EmailAuth`;
  else return null;
  return (0, X.jsxs)(A, {
    bAlertDialog: !0,
    onOK: n,
    closeModal: n,
    strTitle: N(`#FamilyManagement_ConfirmInviteTitle`),
    children: [
      (0, X.jsx)(Ar, {}),
      (0, X.jsx)(`div`, { className: qr, children: N(r) }),
    ],
  });
}
function vi(e) {
  let { onCancel: t, onConfirm: n, steamid: r, role: i } = e,
    a = S(r).data;
  return (0, X.jsxs)(A, {
    onCancel: t,
    strTitle: N(`#FamilyManagement_ConfirmInviteTitle`),
    onOK: n,
    strOKButtonText: N(`#FamilyManagement_Invite`),
    children: [
      (0, X.jsx)(Ar, {}),
      (0, X.jsxs)(`div`, {
        className: $r,
        children: [
          (0, X.jsx)(q, {
            className: ri,
            persona: a,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, X.jsx)(`div`, { className: Zr, children: a?.m_strPlayerName }),
          (0, X.jsx)(Dr, { className: Qr, role: i }),
          (0, X.jsx)(`div`, {
            className: ei,
            children: N(`#FamilyManagement_Role_${i}`),
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: qr,
        children: N(`#FamilyManagement_ConfirmInvite`),
      }),
    ],
  });
}
function yi(e) {
  let { familyGroupID: t, onSelect: n } = e,
    [r, i] = (0, Y.useState)(!1),
    a = U(t)
      .data.members()
      .map((e) => e.steamid());
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(R, {
        active: r,
        children: (0, X.jsx)(O, {
          title: N(`#FamilyManagement_InviteMethodFriend`),
          className: ii,
          onCancel: () => i(!1),
          children: (0, X.jsx)(Ci, {
            setSelectedFriendSteamID: n,
            excludeSteamIDs: a,
          }),
        }),
      }),
      (0, X.jsx)(B, {
        noFocusRing: !1,
        onClick: () => i(!0),
        children: N(`#FamilyManagement_InviteMethodFriend`),
      }),
    ],
  });
}
function bi(e) {
  let { steamids: t, onSelect: n } = e;
  return (0, X.jsx)(D, {
    className: ti,
    "flow-children": `grid`,
    children: t.map((e) =>
      (0, X.jsx)(xi, { steamid: e, onClick: () => n(e) }, e),
    ),
  });
}
function xi(e) {
  let { steamid: t, onClick: n } = e,
    r = new M(t),
    i = S(t),
    a = E(),
    o = Z().data?.preferences().parenthesize_nicknames(),
    s = a.data?.get(r.GetAccountID());
  if ((H(i, `#FamilyManagement_ErrorLoadFamilyGeneric`), i.isLoading))
    return null;
  let c = i.data;
  return (0, X.jsxs)(D, {
    className: ni,
    onActivate: n,
    children: [
      (0, X.jsx)(`div`, {
        className: ri,
        children: (0, X.jsx)(q, {
          className: ri,
          persona: c,
          size: `Large`,
          statusPosition: `right`,
        }),
      }),
      (0, X.jsx)(on, {
        className: Zr,
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
function Si(e) {
  let { role: t, onSelect: n } = e;
  return (0, X.jsxs)(F, {
    className: k(Ur),
    noFocusRing: !1,
    onClick: () => n(t),
    children: [
      t == 2 ? (0, X.jsx)(Oe, {}) : (0, X.jsx)(We, {}),
      (0, X.jsx)(`span`, {
        children: N(`#FamilyManagement_InviteAsRoleButton_${t}`),
      }),
    ],
  });
}
function Ci(e) {
  let { setSelectedFriendSteamID: t, excludeSteamIDs: n } = e,
    r = oe();
  H(r, `#FamilyManagement_ErrorLoadFriendListGeneric`);
  let i = r.data;
  return r.isLoading
    ? (0, X.jsx)(`div`, { className: li, children: (0, X.jsx)(y, {}) })
    : r.isError
      ? null
      : (0, X.jsx)(wi, {
          setSelectedFriendSteamID: t,
          steamIDs: i,
          excludeSteamIDs: n,
        });
}
function wi(e) {
  let { setSelectedFriendSteamID: t, steamIDs: n, excludeSteamIDs: r } = e,
    i = ne(n),
    a = E(),
    o = Z(),
    [s, c] = Y.useState(``),
    l = o.data?.preferences().parenthesize_nicknames(),
    u = Y.useCallback(
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
    d = (0, Y.useMemo)(
      () =>
        i
          .map((e) => e.data)
          .filter((e) => !!e)
          .filter(
            (e) =>
              s == `` ||
              Ei(
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
    f = Y.useCallback(
      (e) =>
        (0, X.jsx)(Di, {
          persona: d[e].persona,
          nickname: d[e].nickname,
          setSelectedFriendSteamID: t,
        }),
      [d, t],
    ),
    p = i.some((e) => e.isLoading);
  return (0, X.jsxs)(D, {
    className: ai,
    children: [
      (0, X.jsx)(`p`, {
        className: ci,
        children: N(`#FamilyManagement_SelectFriend`),
      }),
      p && (0, X.jsx)(y, { size: `xlarge` }),
      !p &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(D, {
              className: `ea59pn3WsAg-`,
              children: (0, X.jsx)(Ti, { strFilter: s, setFilter: c }),
            }),
            (0, X.jsx)(D, {
              className: `_3xFGyRrcMG8-`,
              children: (0, X.jsx)(Hn, {
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
function Ti(e) {
  let { strFilter: t, setFilter: n } = e;
  return (0, X.jsx)(Ve, {
    autoFocus: !0,
    bShowClearAction: !0,
    className: oi,
    type: `text`,
    onChange: (e) => n(e.target.value),
    value: t,
    placeholder: N(`#FamilyManagement_InviteFriendNamePlaceholder`),
  });
}
function Ei(e, t, n) {
  return (
    !e ||
    (t && t.toLowerCase().includes(e)) ||
    (n && n.toLowerCase().includes(e))
  );
}
function Di(e) {
  let { persona: t, nickname: n, setSelectedFriendSteamID: r } = e,
    i = Z().data?.preferences().parenthesize_nicknames();
  return (0, X.jsxs)(D, {
    className: si,
    onActivate: (e) => {
      r(t.m_steamid.ConvertTo64BitString());
    },
    children: [
      (0, X.jsx)(q, {
        className: ri,
        persona: t,
        size: `Large`,
        statusPosition: `right`,
      }),
      (0, X.jsx)(on, {
        className: Zr,
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
var Oi = `30px`,
  ki = `#ffc82c`,
  Ai = `_2wpmAkkROyw-`,
  ji = `trHLHf35hJM-`,
  Mi = `l1-FlOrpK8g-`,
  Ni = `uESgUq6zgBE-`,
  Pi = `qZ72lYd3uVA-`,
  Fi = `yQG1LU0zHT0-`,
  Ii = `PKLNf1vgmHk-`,
  Li = `SXbNYxT3eQQ-`,
  Ri = `RJ4OJA3v2bo-`,
  zi = `_6U1pbqGKD-A-`,
  Bi = `ggTobEj7L-w-`,
  Vi = `TGL7HPcl79E-`,
  Hi = `eQfDz-t4EzA-`,
  Ui = `_-05gZFHjqbY-`,
  Wi = `tqBJiOQiMuM-`,
  Gi = `aeyjCdmvamw-`,
  Ki = `nnZaN0IIE8s-`,
  qi = `wCKd8tQhPGI-`,
  Ji = `pp6GqWM-FxI-`,
  Yi = `omHaP36p-tQ-`,
  Xi = `ekNC13HSWps-`,
  Zi = `_6fcLRK-WJ2A-`,
  Qi = `WOi8Ki7cvjE-`,
  $i = `X9fUi3lkrv0-`,
  ea = `_4QmR-iOiLuc-`,
  ta = `tf04-wL8lP4-`,
  na = `nX45hTAJ35c-`,
  ra = `_2ZF7pqHzY1k-`,
  ia = `lBC51EASQcw-`,
  aa = `rtDwRYVllRQ-`,
  oa = `blhTghmSy3g-`,
  sa = `ndoIwncT2-g-`,
  ca = `TXXyeTSgIA4-`,
  la = `A6WFrEgT3pM-`,
  ua = `t3dKX4zNIa4-`,
  da = `QTzm4wcNnDQ-`,
  fa = `mEhxSyYlPAk-`,
  Q = `LQbzNANFyto-`,
  pa = `O1JgPqxFsiY-`,
  ma = `rHYCQ76LgEk-`,
  ha = `KeP-QVvyIIs-`;
function ga(e) {
  return typeof e.cooldown_seconds_remaining == `function`;
}
function _a(e) {
  let { familyGroupID: t, member: n } = e,
    r = S(n.steamid());
  H(r, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [i, a, o] = Mt(!1);
  if (!r.isSuccess) return null;
  let s = r.data,
    c = !1,
    l = null;
  return (
    ga(n)
      ? ((l = (0, X.jsx)(ba, {
          active: i,
          onClose: o,
          familyGroupID: t,
          member: n,
          persona: s,
        })),
        (c = !0))
      : (l = (0, X.jsx)(Sa, {
          active: i,
          onClose: o,
          familyGroupID: t,
          invited: n,
          persona: s,
        })),
    (0, X.jsxs)(X.Fragment, {
      children: [
        l,
        (0, X.jsx)(D, {
          className: k(Cr, da),
          onActivate: a,
          children: (0, X.jsx)(`div`, {
            className: fa,
            children: (0, X.jsx)(jr, {
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
function va(e) {
  let t = new Date(e.time_joined() * 1e3);
  return (new Date().getTime() - t.getTime()) / 864e5 < 30;
}
function ya(e) {
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
      ? N(`#FamilyManagement_RemoveMemberConfirmationText_Self`)
      : N(`#FamilyManagement_RemoveMemberConfirmationText`, o?.m_strPlayerName);
  p !== 0 &&
    (m +=
      ` ` +
      (s
        ? Fe(`#FamilyManagement_CannotJoinFor_Self`, p)
        : N(`#FamilyManagement_CannotJoinFor`, p)));
  let h = N(
    s
      ? `#FamilyManagement_RemoveMemberConfirmationTitle_Self`
      : `#FamilyManagement_RemoveMemberConfirmationTitle`,
  );
  return (0, X.jsx)(R, {
    active: n,
    children: (0, X.jsx)(A, {
      strTitle: h,
      onOK: () => {
        (c(null), l.mutate(null, { onSuccess: () => d.push(f.pathname) }));
      },
      closeModal: r,
      children: (0, X.jsx)(`div`, { className: ha, children: m }),
    }),
  });
}
function ba(e) {
  let { active: n, onClose: r, familyGroupID: i, member: a, persona: o } = e,
    [s, c, u] = Mt(!1),
    d = Bt(i, a.steamid()),
    { setErrorMessage: f } = V();
  K(
    d,
    `#FamilyManagement_ErrorRemovingFromFamily`,
    G.k_EFamilyQueryRemoveFromFamily,
  );
  let p = L() == a.steamid(),
    m = va(a),
    h = W().data?.role(),
    g = U(i).data.members().length === 1,
    _ = t(),
    { url: v } = l(),
    y = () => {
      (f(null), c(), r());
    },
    b = () => {
      let e = new M(a.steamid());
      window.location.href =
        I.HELP_BASE_URL +
        `wizard/HelpRecoverFamilyMember?childid=` +
        e.GetAccountID();
    },
    ee = () => {
      window.location.href = I.COMMUNITY_BASE_URL + `profiles/` + a.steamid();
    },
    x = () => {
      window.location.href =
        I.STORE_BASE_URL + `wishlist/profiles/` + a.steamid();
    },
    te = () => {
      let e = v.endsWith(`/`) ? v.slice(0, -1) : v;
      _.push(`${e}/parentalcontrols/${a.steamid()}`);
    },
    S = N(`#FamilyManagement_ManageDialogTitle`, o?.m_strPlayerName);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(ya, {
        active: s,
        onClose: u,
        familyGroupID: i,
        member: a,
        persona: o,
        isSelf: p,
      }),
      (0, X.jsx)(R, {
        active: n,
        children: (0, X.jsx)(O, {
          className: sa,
          titleClassName: ca,
          title: S,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: r,
          bHideCloseIcon: !0,
          children: (0, X.jsxs)(`div`, {
            className: ua,
            children: [
              (0, X.jsx)(B, {
                className: Q,
                onClick: ee,
                children: N(`#FamilyManagement_ProfileLink`),
              }),
              (0, X.jsx)(B, {
                className: Q,
                onClick: x,
                children: N(`#FamilyManagement_WishlistLink`),
              }),
              (0, X.jsx)(De, { className: la }),
              !p &&
                a.role() == 2 &&
                (0, X.jsx)(B, {
                  className: `LQbzNANFyto-`,
                  onClick: te,
                  children: N(`#FamilyManagement_ParentalControls`),
                }),
              !m &&
                !p &&
                a.role() == 2 &&
                (0, X.jsx)(B, {
                  className: `LQbzNANFyto-`,
                  disabled: m,
                  onClick: b,
                  children: N(`#FamilyManagement_RecoverMember`),
                }),
              !g &&
                h !== 2 &&
                (0, X.jsx)(B, {
                  className: k(`LQbzNANFyto-`, `AtVQCBI7J-w-`),
                  onClick: y,
                  children: N(
                    p
                      ? `#FamilyManagement_RemoveMember_Self`
                      : `#FamilyManagement_RemoveMember`,
                  ),
                }),
              g && (0, X.jsx)(Ca, { familyGroupID: i }),
              (0, X.jsx)(De, { className: la }),
              (0, X.jsx)(B, {
                className: Q,
                onClick: r,
                children: N(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function xa(e) {
  let { active: t, onClose: n, familyGroupID: r, invited: i, persona: a } = e,
    o = en(r, i.steamid()),
    { setErrorMessage: s } = V();
  K(o, `#FamilyManagement_ErrorCancelInvite`, G.k_EFamilyQueryDeclineInvite);
  let c = () => {
      (s(null), o.mutate());
    },
    l = N(
      `#FamilyManagement_CancelInvitationConfirmationText`,
      a?.m_strPlayerName,
    );
  return (0, X.jsx)(R, {
    active: t,
    children: (0, X.jsx)(A, {
      strTitle: N(`#FamilyManagement_CancelInvitationConfirmationTitle`),
      strDescription: l,
      onOK: c,
      closeModal: n,
    }),
  });
}
function Sa(e) {
  let { active: t, onClose: n, familyGroupID: r, invited: i, persona: a } = e,
    [o, s, c] = Mt(!1),
    l = en(r, i.steamid()),
    { setErrorMessage: u } = V();
  K(l, `#FamilyManagement_ErrorCancelInvite`, G.k_EFamilyQueryDeclineInvite);
  let d = () => {
      window.location.href = I.COMMUNITY_BASE_URL + `profiles/` + i.steamid();
    },
    f = () => {
      (u(null), s(), n());
    },
    p = N(`#FamilyManagement_ManageDialogTitle`, a?.m_strPlayerName);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(xa, {
        active: o,
        onClose: c,
        familyGroupID: r,
        invited: i,
        persona: a,
      }),
      (0, X.jsx)(R, {
        active: t,
        children: (0, X.jsx)(O, {
          className: sa,
          titleClassName: ca,
          title: p,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: n,
          bHideCloseIcon: !0,
          children: (0, X.jsxs)(`div`, {
            className: ua,
            children: [
              (0, X.jsx)(B, {
                className: Q,
                onClick: d,
                children: N(`#FamilyManagement_ProfileLink`),
              }),
              (0, X.jsx)(De, { className: la }),
              (0, X.jsx)(B, {
                className: k(Q, ma),
                onClick: f,
                children: N(`#FamilyManagement_CancelInviteButton`),
              }),
              (0, X.jsx)(De, { className: la }),
              (0, X.jsx)(B, {
                className: Q,
                onClick: n,
                children: N(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Ca(e) {
  let { familyGroupID: n } = e,
    [r, i, a] = Mt(!1),
    o = Wt(n),
    { setErrorMessage: s } = V();
  K(o, `#FamilyManagement_ErrorDeleteFamily`, G.k_EFamilyQueryDeleteFamily);
  let c = W().data.cooldown_seconds_remaining(),
    l = Date.now() / 1e3 + c,
    u = Et(l),
    d = t();
  return o.isPending
    ? (0, X.jsx)(`div`, { className: void 0, children: (0, X.jsx)(y, {}) })
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(R, {
            active: r,
            children: (0, X.jsxs)(A, {
              strTitle: N(`#FamilyManagement_DeleteFamilyConfirmationTitle`),
              onOK: () => {
                (s(null),
                  o.mutate(null, {
                    onSuccess: () => d.push(`/account/familymanagement`),
                  }));
              },
              closeModal: a,
              children: [
                c > 0 &&
                  (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`p`, {
                        children: N(
                          `#FamilyManagement_DeleteFamilyConfirmationText_1`,
                        ),
                      }),
                      (0, X.jsxs)(`ul`, {
                        children: [
                          (0, X.jsx)(`li`, {
                            children: N(
                              `#FamilyManagement_DeleteFamilyConfirmationText_2`,
                              u,
                            ),
                          }),
                          (0, X.jsx)(`li`, {
                            children: N(
                              `#FamilyManagement_DeleteFamilyConfirmationText_3`,
                            ),
                          }),
                          (0, X.jsx)(`li`, {
                            children: N(
                              `#FamilyManagement_DeleteFamilyConfirmationText_4`,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                c === 0 &&
                  (0, X.jsx)(`p`, {
                    children: N(
                      `#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown`,
                    ),
                  }),
              ],
            }),
          }),
          (0, X.jsx)(B, {
            className: k(pa, Q),
            noFocusRing: !1,
            onClick: () => {
              (s(null), i());
            },
            children: N(`#FamilyManagement_DeleteFamilyButton`),
          }),
        ],
      });
}
function wa(e) {
  let { familyGroupID: t, ...n } = e,
    r = Xt(t);
  K(r, `#FamilyManagement_ErrorLoadHistory`, G.k_EFamilyQueryLoadHistory);
  let i = (0, Y.useMemo)(() => r.data?.slice(0).reverse() || [], [r]),
    a = parseInt(n.nFamilyHistoryRowHeight),
    o = Y.useCallback(
      (t) =>
        (0, X.jsx)(Ta, {
          entry: i[t],
          styleProps: n,
          fnRenderName: e.FnRenderName,
        }),
      [i, n, e.FnRenderName],
    );
  return (0, X.jsx)(D, {
    className: n.FamilyHistory,
    children: (0, X.jsx)(Hn, {
      bDynamic: !0,
      nRows: i.length,
      nItemHeight: a,
      renderItem: o,
    }),
  });
}
function Ta(e) {
  let { entry: t, styleProps: n, fnRenderName: r, ...i } = e,
    a = Intl.DateTimeFormat(Ke.GetPreferredLocales(), {
      month: `numeric`,
      year: `numeric`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
    }),
    o = new Date(parseInt(t.timestamp()) * 1e3),
    s = a.format(o),
    c = N(`#FamilyHistory_SteamSupport`),
    l = S(t.actor_steamid()),
    u,
    d = r(t.actor_steamid());
  u = t.actor_steamid()
    ? t.by_support()
      ? (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`b`, { children: l.data?.m_strPlayerName }),
            ` (`,
            c,
            `)`,
          ],
        })
      : d
    : c;
  let f = JSON.parse(t.body()),
    p = r(f.account),
    m = f.seconds && xt(f.seconds),
    h = f.reason ? f.reason : ``,
    g;
  switch (t.type()) {
    case 1:
      g = P(`#FamilyHistory_FamilyCreated`, u, f.name);
      break;
    case 2:
      g = P(`#FamilyHistory_FamilyModified`, u, f.name);
      break;
    case 3:
      g = P(`#FamilyHistory_FamilyDeleted`, u);
      break;
    case 4:
      let e = N(`#FamilyManagement_Role_${f.role}`).toLocaleLowerCase();
      g = P(`#FamilyHistory_AccountInvited`, u, e, p);
      break;
    case 5:
      g = P(`#FamilyHistory_InviteDeniedByFamilySize`, u, p);
      break;
    case 6:
      g = P(`#FamilyHistory_JoinedFamily`, u);
      break;
    case 7:
      g = P(`#FamilyHistory_JoinDeniedByRegionMismatch`, u);
      break;
    case 24:
      g = P(`#FamilyHistory_JoinDenied`, u, h);
      break;
    case 8:
      g = P(`#FamilyHistory_JoinDeniedByMissingIpAddress`, u);
      break;
    case 9:
      g = P(`#FamilyHistory_JoinDeniedByFamilyCooldown`, u, m);
      break;
    case 10:
      g = P(`#FamilyHistory_JoinDeniedByUserCooldown`, u, m);
      break;
    case 11:
      g = P(`#FamilyHistory_JoinDeniedByOtherFamily`, u);
      break;
    case 12:
      g = P(`#FamilyHistory_AccountRemoved`, u, p);
      break;
    case 13:
      g =
        t.actor_steamid() === f.account
          ? P(`#FamilyHistory_InviteRejected`, u)
          : P(`#FamilyHistory_InviteCancelled`, u, p);
      break;
    case 14:
      g = P(`#FamilyHistory_PurchaseRequested`, u);
      break;
    case 16:
      g = P(`#FamilyHistory_ParentalSettingsDisabled`, u, p);
      break;
    case 15:
      g = P(`#FamilyHistory_ParentalSettingsEnabled`, u, p);
      break;
    case 17:
      g = P(`#FamilyHistory_ParentalSettingsChanged`, u, p);
      break;
    case 18:
      g = P(`#FamilyHistory_FamilyCooldownOverridesChanged`, u, f.count);
      break;
    case 19:
      g = P(`#FamilyHistory_PurchaseRequestCanceled`, u);
      break;
    case 20:
      g = P(`#FamilyHistory_PurchaseRequestApproved`, u, p);
      break;
    case 21:
      g = P(`#FamilyHistory_PurchaseRequestDeclined`, u, p);
      break;
    case 22:
      g = P(`#FamilyHistory_CooldownSkipConsumed`, u);
      break;
    case 23:
      g = P(`#FamilyHistory_FamilyRestored`, u);
      break;
    case 25:
      g = P(`#FamilyHistory_ForceAcceptedInvite`, u, p);
      break;
    default:
      g = P(`#FamilyHistory_UnknownChange`);
  }
  return (0, X.jsxs)(D, {
    className: k(n.Entry),
    focusable: !0,
    ...i,
    children: [
      (0, X.jsx)(`div`, { className: k(n.Timestamp), children: s }),
      (0, X.jsx)(`div`, { className: k(n.EntryText), children: g }),
    ],
  });
}
var Ea = `qF3oLbTunrs-`,
  Da = `phiDicDWyos-`,
  Oa = `CLDB0mS3ypU-`,
  ka = `lG-sfWfbD88-`,
  Aa = `_7ohp2MEUGzY-`,
  ja = `AdHik7YD4go-`,
  Ma = `_7XDMq4s1SiY-`,
  Na = `WrqTEGgITTI-`,
  Pa = `a99hjle9o6E-`,
  Fa = `sPAXW0lw6qY-`,
  Ia = `_0Swl2LUBTBk-`,
  La = `l2KY-Q6SPTM-`,
  Ra = `SMvJOZVL8Cg-`,
  za = `gnF4b62Z-vI-`,
  Ba = `AscbB7bZ43o-`,
  Va = `u4A-Q-Hbc-g-`,
  $ = e(ee()),
  Ha = e(ln()),
  Ua = `40px`,
  Wa = `LF2R0QrVwr0-`,
  Ga = `a6XG5kmAneo-`,
  Ka = `zEYhEEGdwfI-`,
  qa = `CJeJJrjlpc4-`,
  Ja = `ojeW56-hyDo-`,
  Ya = `bdDbF19-IiU-`,
  Xa = `NFlZs5BUV0g-`,
  Za = `hkmjDaVtr-c-`,
  Qa = `ZHsY2YrQN4g-`,
  $a = `A6rs7mUnxQQ-`,
  eo = `hIZQaoRTEg4-`,
  to = `DXb9ZYXN5cw-`,
  no = `euNsDY1STfk-`,
  ro = `mKfANkRB-zk-`,
  io = `jzHjQP8-K9M-`,
  ao = `YjhMqCkqLuc-`,
  oo = `ywr-LwPJSJ4-`,
  so = `_9lbbJMJcIE0-`,
  co = `-WR7BmwqGwc-`,
  lo = `TcEIS4khspQ-`,
  uo = `yXXC7D7U9JY-`,
  fo = `xU1dPTLSNqA-`,
  po = `_7jo-AdZx3sc-`,
  mo = `p9OB3qTRAgo-`,
  ho = `UhkJlPPhlbI-`,
  go = `beTZ0bQCTeo-`,
  _o = `k6JuSlfBGOU-`,
  vo = `pDLqdh2fdGY-`,
  yo = `LFajRuGr4GE-`,
  bo = `GUwMnXmhcys-`,
  xo = `tka2yLdlWuw-`,
  So = `j7B7-KYjCt8-`,
  Co = `USNIZMyYKxQ-`,
  wo = `GCArileYweo-`,
  To = `FVQS2NH-D30-`,
  Eo = `S7U5HG5G76o-`,
  Do = `yGtCw2YCxXg-`,
  Oo = `og-eU1fjmi4-`,
  ko = `KX0hJhxrF2w-`,
  Ao = `HXJO37-r-xg-`,
  jo = `uoHre03qso0-`,
  Mo = `gYFO6tsY26k-`,
  No = `bN7ZsBC6FNk-`,
  Po = `fwx54ooQm-Q-`,
  Fo = `O-RI4zs-zqM-`,
  Io = `UfK8xzRh8DM-`,
  Lo = `lGkP5BiYu20-`,
  Ro = `I2C2ZUEJv4U-`,
  zo = `JnxJuW43sRo-`,
  Bo = `O4FEp-ReEQo-`,
  Vo = `_8zEmALGjutM-`,
  Ho = `_6b9Z3WITKss-`,
  Uo = `hdiCVW-TUIQ-`,
  Wo = `QrOV5jeMP4E-`,
  Go = `_4EAxpNwKsio-`,
  Ko = `H1m92BJ--s4-`,
  qo = `f0Tq89nyQe8-`,
  Jo = `xPZK11Sc1JQ-`,
  Yo = `b1MUSj1oHnw-`,
  Xo = `T8tJM1F3udo-`,
  Zo = `hW-hKolSoxE-`,
  Qo = `aGZ-5Q30Ngk-`,
  $o = `uB59PztRaCQ-`,
  es = `en11dmsuJBY-`,
  ts = `xBRR1g0yEMI-`,
  ns = `oPgGHbh2NoY-`,
  rs = `L6PbUyknlek-`,
  is = `bS0DIyS4a8A-`,
  as = `_33R6t1oxzWA-`,
  os = `IlXaXZNRfqM-`,
  ss = `_-4jLfc3JHMk-`,
  cs = `i2KdgpD0ejQ-`,
  ls = `_04yjrdfbuOE-`,
  us = `kY8RkeLneFg-`,
  ds = `jtjrzYcH64A-`,
  fs = `DG4SF3Ttgvw-`,
  ps = `HSL873gT3pI-`,
  ms = `GuW88zLPj1E-`;
function hs(e, t) {
  Se(e, `steam://open/games/details/${t}`);
}
function gs(e, t) {
  t && (I.IN_CLIENT ? (window.location.href = t) : Se(e, t));
}
function _s(e) {
  let { app: t, sort: n } = e,
    r = L(),
    i = te(t.appid),
    a = t.owner_steamids.filter((e) => e != r),
    o = ne(a),
    s = E(),
    c = Z().data?.preferences().parenthesize_nicknames(),
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
    (u = (0, X.jsx)(`div`, {
      className: void 0,
      children: N(
        `#FamilyGame_DateAcquired`,
        Et(t.rt_time_acquired, {
          month: `long`,
          day: `numeric`,
          year: `numeric`,
          weekday: void 0,
        }),
      ),
    }));
  let d = (e) => ys(o[e].data, s.data?.get(new M(a[e]).GetAccountID()), c),
    f,
    p;
  if (
    (l &&
      (f = (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(`div`, { className: void 0, children: N(l) }),
          (0, X.jsx)(`div`, {
            className: ms,
            children: N(`#FamilyGame_ExcludedCode`, t.exclude_reason),
          }),
        ],
      })),
    t.exclude_reason != 3)
  ) {
    if (
      (i &&
        !f &&
        (f = (0, X.jsx)(`div`, {
          className: void 0,
          children: N(`#FamilyGame_Excluded_Private`),
        })),
      a.length == 0 || o.some((e) => !e.isSuccess))
    )
      p = null;
    else {
      let e = a.length != t.owner_steamids.length && !i;
      p =
        a.length == 1
          ? (0, X.jsx)(`div`, {
              className: void 0,
              children: N(
                e
                  ? `#FamilyGames_FromTheLibraryOf_Single_Owned`
                  : `#FamilyGames_FromTheLibraryOf_Single`,
                d(0),
              ),
            })
          : (0, X.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, X.jsx)(`div`, {
                  className: Zo,
                  children: N(
                    e
                      ? `#FamilyGames_FromTheLibraryOf_Header_Owned`
                      : `#FamilyGames_FromTheLibraryOf_Header`,
                  ),
                }),
                (0, X.jsx)(`ul`, {
                  children: a.map((e, t) =>
                    (0, X.jsx)(`li`, { className: void 0, children: d(t) }, e),
                  ),
                }),
              ],
            });
    }
  }
  return (0, X.jsxs)(`div`, { className: ps, children: [f, p, u] });
}
function vs(e) {
  let { item: t } = e,
    n = te(t.appid),
    r = L(),
    i = t.owner_steamids.length;
  return (
    n && t.owner_steamids.includes(r) && --i,
    i <= 1 ? null : (0, X.jsx)(`div`, { className: os, children: i })
  );
}
function ys(e, t, n) {
  let r = e.m_strPlayerName;
  return (t && (r = n ? `${e.m_strPlayerName} (${t})` : `${t}*`), r);
}
function bs(e) {
  let t = new M(e),
    n = S(e),
    r = E(),
    i = Z(),
    a = r.data?.get(t.GetAccountID()),
    o = i.data?.preferences().parenthesize_nicknames();
  return !n.isSuccess || !r.isSuccess || !i.isSuccess ? null : ys(n.data, a, o);
}
function xs(e) {
  let { item: t, strSteamID: n } = e,
    r = bs(n),
    i = t.appid,
    { settings: a, mapAppsAllowed: o } = Be(n).data,
    s = o?.get(t.appid) || !1,
    c = j(n),
    l = Y.useCallback(() => {
      (Ue(a, !s, [i]), c.mutate(a));
    }, [i, a, c, s]);
  return !r || !a || !a.is_enabled || a.applist_base_id == 0
    ? null
    : (0, X.jsx)(dt, {
        onSelected: l,
        children: N(
          s ? `#FamilyGame_DenyForChild` : `#FamilyGame_AllowForChild`,
          r,
        ),
      });
}
function Ss(e) {
  let { item: t, bOwnsGame: n, familyContext: r } = e,
    i = L(),
    { familyGroup: a, invalidateGamesList: o } = r,
    s = a.members.find((e) => e.steamid == i).role == 1,
    { data: c } = ge({ appid: t.appid }),
    l = n || t.exclude_reason == 0,
    u = te(t.appid),
    { mutateAsync: d } = x(t.appid),
    f = I.IN_CLIENT,
    p = Y.useCallback(async () => {
      (await d(!u), o());
    }, [d, u, o]),
    m = Y.useCallback(
      (e) => {
        c && gs(ft(e), `${I.STORE_BASE_URL}${c.store_url_path}`);
      },
      [c],
    ),
    g = Y.useCallback(
      (e) => {
        hs(ft(e), t.appid);
      },
      [t],
    ),
    _ = f && l;
  return (0, X.jsxs)(he, {
    children: [
      l &&
        (0, X.jsx)(dt, {
          onSelected: () => {
            h(t.appid, t.name);
          },
          children: N(`#FamilyGame_PlayGame`),
        }),
      _ &&
        (0, X.jsx)(dt, {
          onSelected: g,
          children: N(`#FamilyGame_OpenAppDetails`),
        }),
      c?.visible &&
        (0, X.jsx)(dt, { onSelected: m, children: N(`#FamilyGame_ViewStore`) }),
      (0, X.jsx)(dt, {
        onSelected: p,
        children: N(
          u ? `#FamilyGame_UnmarkAsPrivate` : `#FamilyGame_MarkAsPrivate`,
        ),
      }),
      s &&
        a.members
          .filter((e) => e.role == 2)
          .map((e) =>
            (0, X.jsx)(xs, { item: t, strSteamID: e.steamid }, e.steamid),
          ),
    ],
  });
}
function Cs(e) {
  let {
      app: t,
      item: n,
      bShowLicenseCount: r,
      sort: i,
      className: a,
      children: o,
      ...s
    } = e,
    c = L(),
    l = Y.useContext(Ps),
    u = (0, X.jsx)(_s, { app: n, sort: i }),
    d = { direction: `right`, style: { minWidth: `320px` } },
    f = m(n.appid),
    { data: p } = ge(f),
    h = n.exclude_reason == 0 || n.exclude_reason == 3,
    _ = n.owner_steamids.some((e) => e == c),
    v = I.IN_CLIENT,
    y = p && p.visible,
    b = Y.useCallback(
      (e) => {
        (ze((0, X.jsx)(Ss, { item: n, bOwnsGame: _, familyContext: l }), e),
          e.stopPropagation(),
          e.preventDefault());
      },
      [n, _, l],
    ),
    ee = (v && (h || _)) || y,
    x = Y.useCallback(
      (e) => {
        v && (h || _)
          ? hs(ft(e), t.appid)
          : y && gs(ft(e), `${I.STORE_BASE_URL}${p.store_url_path}`);
      },
      [t.appid, h, _, p, y, v],
    );
  return (0, X.jsx)(g, {
    id: f,
    name: n.name,
    bPreventNavigation: _ || h,
    bHidePrice: _,
    bShowWishlistButton: !_,
    hoverProps: d,
    className: as,
    elElementToAppend: u,
    children: (0, X.jsxs)(D, {
      className: k(a, is, ee && `_2kADWaqVyG8-`),
      focusable: !0,
      onActivate: ee ? x : void 0,
      onContextMenu: b,
      ...s,
      children: [o, r && (0, X.jsx)(vs, { item: n })],
    }),
  });
}
function ws() {
  let [e, t] = Y.useState(7);
  return [
    e,
    Y.useCallback((e, n) => {
      let r;
      ((r = e <= 500 ? 3 : e <= 620 ? 5 : 7), t(r));
    }, []),
  ];
}
function Ts(e) {
  let { nRows: t, setShowAll: n, setRows: r, nIncrement: i = 2 } = e,
    a = Y.useRef(void 0);
  return (
    Y.useEffect(() => {
      a.current?.BHasFocus() &&
        (a.current
          .Node()
          ?.GetLastFocusElement()
          .scrollIntoView({ block: `end` }),
        a.current?.Node().ForceMeasureFocusRing());
    }, [t]),
    (0, X.jsxs)(D, {
      className: Qo,
      children: [
        (0, X.jsx)(`div`, {
          className: $o,
          children: (0, X.jsx)(B, {
            className: es,
            navRef: a,
            onClick: () => {
              r(t + i);
            },
            children: N(`#FamilyGames_ShowMore`),
          }),
        }),
        (0, X.jsx)(`div`, {
          className: $o,
          children: (0, X.jsx)(B, {
            className: es,
            onClick: () => n(!0),
            children: N(`#FamilyGames_ShowAll`),
          }),
        }),
      ],
    })
  );
}
function Es(e, t) {
  let [n, r] = ws(),
    [i, a] = Y.useState(2),
    [o, s] = Y.useState(t),
    c = Y.useMemo(
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
function Ds(e) {
  let { rgSortedGames: t, strLabel: n, bShowLicenseCount: r = !0, sort: i } = e,
    {
      rgApps: a,
      nRows: o,
      setRows: s,
      bDisplayingAll: c,
      setShowAll: l,
      nColumns: u,
      OnWidthChanged: d,
    } = Es(t, !1),
    f = Y.useCallback(
      (e, n, a) =>
        (0, X.jsx)(Cs, {
          app: e,
          item: t[n],
          bShowLicenseCount: r,
          sort: i,
          ...a,
        }),
      [t, r, i],
    );
  return t?.length
    ? (0, X.jsxs)(`div`, {
        className: ts,
        children: [
          (0, X.jsxs)(`div`, {
            className: Zo,
            children: [
              (0, X.jsx)(`div`, { className: ns, children: n }),
              (0, X.jsx)(`div`, {
                className: rs,
                children: N(`#FamilyGames_Count`, t.length),
              }),
            ],
          }),
          (0, X.jsx)(rr, {
            rgApps: a,
            nColumns: u,
            onWidthChanged: d,
            renderItem: f,
          }),
          !c && (0, X.jsx)(Ts, { nRows: o, setRows: s, setShowAll: l }),
        ],
      })
    : null;
}
function Os(e) {
  let { rgOptions: t, sort: n, setSort: r, bAscending: i, children: a } = e,
    o = t.findIndex((e) => e == n),
    s = o != -1,
    c = t[(o + 1) % t.length];
  return (0, X.jsxs)(D, {
    className: k(ds, s && `pCRgxrY3i3Q-`),
    onActivate: () => r(c),
    children: [
      a,
      (0, X.jsx)(`div`, {
        className: fs,
        children: s && (0, X.jsx)(Ae, { direction: i ? `up` : `down` }),
      }),
    ],
  });
}
function ks(e) {
  let { sort: t, setSort: n } = e;
  return (0, X.jsxs)(D, {
    className: us,
    children: [
      (0, X.jsx)(Os, {
        rgOptions: [`alpha-asc`, `alpha-desc`],
        sort: t,
        setSort: n,
        bAscending: t == `alpha-asc`,
        children: N(`#FamilyGames_Sort_Alphabetical`),
      }),
      (0, X.jsx)(Os, {
        rgOptions: [`date_acquired-desc`, `date_acquired-asc`],
        sort: t,
        setSort: n,
        bAscending: t == `date_acquired-asc`,
        children: N(`#FamilyGames_Sort_DateAcquired`),
      }),
    ],
  });
}
function As(e) {
  let { strFilter: t, setFilter: n } = e,
    r = Y.useCallback(
      (e) => {
        n(e.target.value);
      },
      [n],
    );
  return (0, X.jsx)(D, {
    className: ss,
    children: (0, X.jsx)(Ve, {
      className: cs,
      value: t,
      onChange: r,
      placeholder: N(`#Parental_GameList_Search`),
    }),
  });
}
function js(e) {
  let { strFilter: t, setFilter: n, sort: r, setSort: i } = e;
  return (0, X.jsxs)(D, {
    className: ls,
    children: [
      (0, X.jsx)(ks, { sort: r, setSort: i }),
      (0, X.jsx)(As, { strFilter: t, setFilter: n }),
    ],
  });
}
var Ms = { bIncludeOwn: !0, bIncludeExcluded: !0 };
function Ns(e) {
  let { familyGroupID: t, children: n } = e,
    r = Kt(t, Ms),
    i = U(t),
    a = Y.useMemo(
      () => ({
        familyGroupID: t,
        familyGroup: i.data?.toObject(),
        invalidateGamesList: r,
      }),
      [t, i.data, r],
    );
  return (0, X.jsx)(Ps.Provider, { value: a, children: n });
}
var Ps = Y.createContext(void 0);
function Fs(e) {
  let { familyGroupID: t } = e,
    [n, r] = Y.useState(``),
    [i, a] = Y.useState(`alpha-asc`),
    o = Rt(t, Ms),
    s = Lt(o.data, i, n),
    c = Y.useMemo(() => s?.filter((e) => e.exclude_reason == 0), [s]),
    l = Y.useMemo(
      () => s?.filter((e) => e.exclude_reason != 0 && e.exclude_reason != 3),
      [s],
    ),
    u = Y.useMemo(() => s?.filter((e) => e.exclude_reason == 3), [s]);
  return (0, X.jsxs)(Ns, {
    familyGroupID: t,
    children: [
      o.isFetching &&
        (0, X.jsx)(`div`, {
          className: `J3pdogWCn-Q-`,
          children: (0, X.jsx)(y, {}),
        }),
      o.isError &&
        (0, X.jsx)(`div`, {
          className: `_5EqFKLlbQGM-`,
          children: N(`#FamilyGames_Error`, o.error),
        }),
      o.isSuccess &&
        (0, X.jsxs)(`div`, {
          className: `uOFsQx3qEiM-`,
          children: [
            o.data?.length > 0 &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(js, {
                    strFilter: n,
                    setFilter: r,
                    sort: i,
                    setSort: a,
                  }),
                  (0, X.jsx)(Ds, {
                    rgSortedGames: c,
                    strLabel: N(`#FamilyGames_IncludedGames`),
                    sort: i,
                  }),
                  (0, X.jsx)(Ds, {
                    rgSortedGames: l,
                    bShowLicenseCount: !1,
                    strLabel: N(`#FamilyGames_ExcludedGames`),
                    sort: i,
                  }),
                  (0, X.jsx)(Ds, {
                    rgSortedGames: u,
                    bShowLicenseCount: !1,
                    strLabel: N(`#FamilyGames_FreeGames`),
                    sort: i,
                  }),
                  s?.length == 0 &&
                    (0, X.jsx)(`div`, {
                      className: void 0,
                      children: N(`#FamilyGames_EmptySearch`),
                    }),
                ],
              }),
            o.data?.length == 0 &&
              (0, X.jsx)(`div`, {
                className: void 0,
                children: N(`#FamilyGames_NoGames`),
              }),
          ],
        }),
    ],
  });
}
function Is(e, t) {
  let n = (0, $.default)()
      .startOf(`day`)
      .add(30 * e, `minutes`),
    r = (0, $.default)()
      .startOf(`day`)
      .add(30 * t, `minutes`),
    i = Intl.DateTimeFormat(Ke.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    });
  return (
    i.format(n.toDate()).replace(` `, `\xA0`) +
    `-` +
    i.format(r.toDate()).replace(` `, `\xA0`)
  );
}
function Ls(e) {
  if (e == BigInt(0)) return N(`#Parental_Playtime_Never`);
  if (e == BigInt(0xffffffffffff)) return N(`#Parental_Playtime_AnyTime`);
  let t = [],
    n = -1;
  for (let r = 0; r < 48; r++)
    e & (BigInt(1) << BigInt(r))
      ? n == -1 && (n = r)
      : n != -1 && (t.push(Is(n, r)), (n = -1));
  return (n != -1 && (t.push(Is(n, 48)), (n = -1)), t.join(`, `));
}
function Rs(e, t) {
  return t
    .members()
    .filter((t) => t.role() == 2 && t.steamid() != e)
    .map((e) => e.steamid());
}
function zs(e) {
  let { steamid: t, settings: n, familyGroup: r } = e,
    i = pe(t, n),
    a = pt(t),
    { setErrorMessage: o } = V();
  (H(i, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`),
    H(a, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`));
  let [s, c] = (0, Y.useState)(``),
    l = Rs(t, r),
    u = ne(l),
    d = Ye(u, (e) => e.isSuccess),
    f = (0, Y.useMemo)(() => {
      let e = [];
      if (
        (e.push({ label: N(`#Parental_EnabledSetting`), data: `enabled` }),
        e.push({ label: N(`#Parental_DisabledSetting`), data: `disabled` }),
        d > 0)
      ) {
        e.push({ bIsSeparator: !0 });
        for (let t of u) {
          if (!t.isSuccess) continue;
          let n = N(`#Parental_CopySettingsFrom`, t.data.m_strPlayerName);
          e.push({ label: n, data: `copy_${t.data.GetSteamIDAsString()}` });
        }
      }
      return e;
    }, [u, d]),
    p = Y.useCallback(
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
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Bs, {
        steamid: t,
        otherChildrenQuery: u,
        confirmCopy: s,
        setConfirmCopy: c,
      }),
      (0, X.jsx)(He, {
        strClassName: Ga,
        controlled: !0,
        bottomSeparator: `none`,
        label: N(`#Parental_EnableDropdown`),
        rgOptions: f,
        selectedOption: m,
        onChange: p,
        bMatchWidth: !1,
      }),
    ],
  });
}
function Bs(e) {
  let {
      steamid: t,
      otherChildrenQuery: n,
      confirmCopy: r,
      setConfirmCopy: i,
    } = e,
    a = S(t),
    o = Re(),
    s = Y.useCallback(() => {
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
  let u = N(`#Parental_CopySettingsConfirmation_Desc`, l, c);
  return (0, X.jsx)(R, {
    active: r.length > 0,
    children: (0, X.jsx)(A, {
      closeModal: () => i(``),
      onOK: s,
      strTitle: N(`#Parental_CopySettingsConfirmation_Title`),
      children: (0, X.jsx)(`div`, { className: Za, children: u }),
    }),
  });
}
function Vs(e) {
  let { steamid: t, settings: n } = e,
    r = j(t),
    { setErrorMessage: i } = V();
  H(r, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let a = Y.useMemo(
      () => [
        { label: N(`#Parental_Baselist_AllGames`), data: 0 },
        { label: N(`#Parental_Baselist_NoGames`), data: 1 },
      ],
      [],
    ),
    o = Y.useCallback(
      (e, t) => {
        (i(null), (n.applist_base_id = e.data), r.mutate(n));
      },
      [n, r, i],
    );
  return (0, X.jsx)(He, {
    focusable: !0,
    strClassName: Ga,
    bottomSeparator: `none`,
    label: N(`#Parental_Baselist_Label`),
    rgOptions: a,
    selectedOption: n.applist_base_id,
    onChange: o,
  });
}
function Hs(e) {
  let { steamid: t, settings: n, game: r, ...i } = e,
    a = j(t),
    o = r.appid,
    s = n.applist_custom.find((e) => e.appid == o),
    { setErrorMessage: c } = V();
  H(a, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let l = s?.is_allowed || !1,
    u =
      r.img_icon_url ||
      (r.img_icon_hash &&
        I.MEDIA_CDN_COMMUNITY_URL +
          `images/apps/` +
          o +
          `/` +
          r.img_icon_hash +
          `.jpg`),
    d = Y.useCallback(() => {
      (c(null), Ue(n, !l, [o]), a.mutate(n));
    }, [o, n, a, c, l]);
  return (0, X.jsxs)(D, {
    className: k(so, l && `WKEuj5y5CYU-`),
    onActivate: d,
    ...i,
    children: [
      u && (0, X.jsx)(`img`, { className: `wQy1iBjpNNI-`, src: u }),
      !u && (0, X.jsx)(`div`, { className: `wQy1iBjpNNI-` }),
      (0, X.jsx)(`div`, { className: co, children: r.name }),
      (0, X.jsx)(St, { className: lo, checked: l, onChange: d }),
    ],
  });
}
function Us(e) {
  let {
      setContentDescriptors: t,
      selectedContentDescriptors: n,
      showFilter: r,
      setShowFilter: i,
      onDismiss: a,
    } = e,
    [o, s] = (0, Y.useState)(n),
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
      { label: N(`#Parental_GameList_ShowAllFilter`), data: `show_all` },
      {
        label: N(`#Parental_GameList_ShowAllowedOnlyFilter`),
        data: `show_allowed_only`,
      },
      {
        label: N(`#Parental_GameList_ShowDeniedOnlyFilter`),
        data: `show_denied_only`,
      },
    ];
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(tt, {
        children: N(`#Parental_GameList_ShowGamesThatAreFilterHeader`),
      }),
      (0, X.jsx)(D, {
        className: Mo,
        children: (0, X.jsx)(Tt, {
          focusable: !0,
          rgOptions: l,
          selectedOption: r,
          onChange: (e) => i(e.data),
        }),
      }),
      (0, X.jsx)(tt, {
        children: N(`#Parental_GameList_ContentDescriptorFilterHeader`),
      }),
      (0, X.jsx)(D, {
        className: No,
        children: se.map((e) => {
          let t = o.includes(e),
            n = c(e);
          return (0, X.jsxs)(
            D,
            {
              className: Po,
              children: [
                (0, X.jsx)(D, { className: Fo, children: ce(e) }),
                (0, X.jsx)(D, {
                  className: Io,
                  children: (0, X.jsx)(ut, { checked: t, onChange: n }),
                }),
              ],
            },
            e,
          );
        }),
      }),
      (0, X.jsx)(kt, {
        onCancel: a,
        onOK: () => {
          (t(o), a());
        },
        strOKText: N(`#Parental_GameList_Button_Apply`),
        className: Lo,
      }),
    ],
  });
}
function Ws(e) {
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
    [l, u] = (0, Y.useState)(!1);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(v, {
        active: l,
        onDismiss: () => u(!1),
        className: void 0,
        children: (0, X.jsx)(Us, {
          selectedContentDescriptors: o,
          setContentDescriptors: a,
          showFilter: s,
          setShowFilter: c,
          onDismiss: () => u(!1),
        }),
      }),
      (0, X.jsxs)(D, {
        className: eo,
        children: [
          (0, X.jsx)(`div`, {
            className: $a,
            children: N(`#Parental_GameList_Header`),
          }),
          (0, X.jsxs)(D, {
            className: to,
            children: [
              (0, X.jsxs)(`div`, {
                className: no,
                children: [
                  (0, X.jsx)(D, {
                    className: k(jo, r == `list` && `fVIhhOlMec8-`),
                    onActivate: () => i(`list`),
                    children: (0, X.jsx)(Pt, {
                      toolTipContent: N(`#Parental_GameList_List`),
                      children: (0, X.jsx)(rt, {}),
                    }),
                  }),
                  (0, X.jsx)(D, {
                    className: k(jo, r == `grid` && `fVIhhOlMec8-`),
                    onActivate: () => i(`grid`),
                    children: (0, X.jsx)(Pt, {
                      toolTipContent: N(`#Parental_GameList_Grid`),
                      children: (0, X.jsx)(st, {}),
                    }),
                  }),
                ],
              }),
              (0, X.jsx)(As, { strFilter: t, setFilter: n }),
              (0, X.jsx)(D, {
                className: Ro,
                onActivate: () => u(!0),
                children: (0, X.jsx)(Pt, {
                  toolTipContent: N(`#Parental_GameList_Filter`),
                  children: (0, X.jsx)(Le, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Gs(e) {
  let t = Qe(),
    n = [`ParentalSearchSuggestions`, e];
  return f({
    queryKey: n,
    queryFn: async () => {
      if (e.length < 2) return [];
      let r = lt.Init(vt);
      (r.Body().set_query_name(JSON.stringify(n)),
        r.Body().set_search_term(e),
        it(r),
        Ct(r, { include_basic_info: !0, include_assets: !0 }),
        gt(r, {
          type_filters: { include_games: !0 },
          price_filters: { only_free_items: !0 },
        }),
        r.Body().set_max_results(20),
        r.Body().set_use_spellcheck(!0));
      let i = await Dt.SearchSuggestions(t, r);
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
function Ks(e) {
  let t = e.applist_custom.map((e) => e.appid),
    n = C(t, { include_assets: !0 });
  return f({
    queryKey: [`ParentalStoreItems`, t],
    queryFn: async () =>
      t
        .map((e) => {
          let t = Me.Get().GetApp(e);
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
function qs(e, t, n) {
  let r = W()?.data.family_groupid(),
    i = Rt(r, {
      bIncludeOwn: !0,
      bIncludeExcluded: !0,
      bIncludeNonGames: !0,
      for_account_id: parseInt(e.steamid),
    }).data,
    a = Ks(e).data,
    o = Gs(t).data,
    [s, c] = Y.useMemo(() => {
      let n = M.InitFromAccountID(
          parseInt(e.steamid),
          I.EUNIVERSE,
        ).ConvertTo64BitString(),
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
  let l = Y.useMemo(() => {
    let e = new Map();
    return (
      a?.forEach((t) => e.set(t.appid, t)),
      s?.forEach((t) => e.set(t.appid, t)),
      Array.from(e.values())
    );
  }, [s, a]);
  return [Lt(l, `alpha-asc`, t, n), Lt(c, `alpha-asc`, t, n)];
}
function Js(e) {
  let {
      strToken: t,
      steamid: n,
      nAllowed: r,
      nTotal: i,
      setAllowAllApps: a,
    } = e,
    o = bs(n);
  return (0, X.jsxs)(`div`, {
    className: oo,
    children: [
      (0, X.jsx)(`div`, {
        className: $a,
        children: N(t + (i ? `_Count` : ``), r, i, o),
      }),
      a &&
        (0, X.jsxs)(D, {
          className: `euNsDY1STfk-`,
          children: [
            (0, X.jsx)(B, {
              onClick: () => a(!0),
              children: N(`#Parental_GameList_AllowAll`),
            }),
            (0, X.jsx)(B, {
              onClick: () => a(!1),
              children: N(`#Parental_GameList_DenyAll`),
            }),
          ],
        }),
    ],
  });
}
function Ys(e) {
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
    } = Es(c, !0);
  return (
    Pe(u, `Parental Control Library not displaying all`),
    c.length == 0
      ? null
      : (0, X.jsxs)(`div`, {
          className: ao,
          children: [
            (0, X.jsx)(Js, {
              strToken: t,
              steamid: o,
              nAllowed: n,
              nTotal: r,
              setAllowAllApps: i,
            }),
            a == `list` &&
              (0, X.jsx)(Zs, { steamid: o, settings: s, rgSortedGames: c }),
            a == `grid` &&
              (0, X.jsx)($s, {
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
function Xs(e) {
  let { steamid: t, settings: n, mapAppsAllowed: r } = e,
    i = j(t),
    [a, o] = Y.useState(``),
    [s, c] = Y.useState([]),
    [l, u] = Y.useState(`show_all`),
    [d, f] = Y.useState(`grid`),
    [p, m] = qs(n, a, s),
    h = p?.filter((e) => !be(e.appid, !0, n, r)),
    g = new Set(h.map((e) => e.appid)),
    _ = h?.length || 0,
    v = (!a && p?.length) || 0,
    y = Y.useCallback(
      (e) => {
        (Ue(
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
      (0, X.jsxs)(`div`, {
        className: ro,
        children: [
          (0, X.jsx)(Ws, {
            strFilter: a,
            setFilter: o,
            strView: d,
            setView: f,
            selectedContentDescriptors: s,
            setContentDescriptors: c,
            showFilter: l,
            setShowFilter: u,
          }),
          (0, X.jsxs)(`div`, {
            className: io,
            children: [
              (0, X.jsx)(Ys, {
                strTitleToken: `#Parental_GameList_Library`,
                strView: d,
                nAllowed: _,
                nTotal: v,
                setAllowAllApps: !a && y,
                steamid: t,
                settings: n,
                rgAllApps: p,
              }),
              (0, X.jsx)(Ys, {
                strTitleToken: `#Parental_GameList_Store`,
                strView: d,
                steamid: t,
                settings: n,
                rgAllApps: m,
              }),
              p.length + m.length == 0 &&
                (0, X.jsx)(`div`, {
                  className: `VYrViP5dwRQ-`,
                  children: N(`#Parental_GameList_Empty`),
                }),
            ],
          }),
        ],
      }));
}
function Zs(e) {
  let { steamid: t, settings: n, rgSortedGames: r } = e,
    i = parseInt(Ua),
    a = Y.useCallback(
      (e) => (0, X.jsx)(Hs, { steamid: t, settings: n, game: r[e] }, e),
      [t, n, r],
    );
  return (0, X.jsx)(Hn, {
    nRows: r?.length,
    nItemHeight: i,
    nRowGap: 0,
    renderItem: a,
  });
}
function Qs(e) {
  let {
    app: t,
    item: n,
    bIsAllowed: r,
    setAllowed: i,
    className: a,
    children: o,
    ...s
  } = e;
  return (0, X.jsx)(D, {
    className: k(a, Ao, r && `WKEuj5y5CYU-`),
    focusable: !0,
    onActivate: () => i(t, !r),
    ...s,
    children: o,
  });
}
function $s(e) {
  let {
      steamid: t,
      settings: n,
      rgSortedGames: r,
      nColumns: i,
      onWidthChanged: a,
    } = e,
    o = j(t),
    s = Y.useMemo(() => r?.map((e) => ({ appid: e.appid, name: e.name })), [r]),
    c = Y.useCallback(
      (e, t) => {
        (Ue(n, t, [e.appid]), o.mutate(n));
      },
      [n, o],
    ),
    l = Y.useCallback(
      (e, t, r) => {
        let i =
          n.applist_custom.find((t) => t.appid == e.appid)?.is_allowed || !1;
        return (0, X.jsx)(Qs, {
          app: e,
          item: s[t],
          bIsAllowed: i,
          setAllowed: c,
          ...r,
        });
      },
      [s, n, c],
    );
  return (0, X.jsx)(rr, {
    rgApps: s,
    nColumns: i,
    onWidthChanged: a,
    renderItem: l,
  });
}
function ec(e) {
  let { steamid: t, settings: n, mapAppsAllowed: r } = e;
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(Vs, { steamid: t, settings: n }),
      n.applist_base_id != 0 &&
        (0, X.jsx)(Xs, { steamid: t, settings: n, mapAppsAllowed: r }),
    ],
  });
}
function tc(e) {
  let { steamid: t, settings: n, feature: r, label: i } = e,
    a = !!(n.enabled_features & (1 << r)),
    o = j(t),
    s = Y.useCallback(
      (e) => {
        let t = n.enabled_features ^ (1 << r);
        ((n.enabled_features = t), o.mutate(n));
      },
      [o, n, r],
    );
  return (0, X.jsx)(ct, {
    className: Ka,
    bottomSeparator: `none`,
    label: N(i),
    checked: a,
    onChange: s,
  });
}
var nc = {
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
function rc(e) {
  let { steamid: t, settings: n } = e,
    r = Y.useRef(n.enabled_features),
    i = [1, 2, 3, 4],
    a = [10, 11, 12, 13, 14, 15],
    o = [];
  for (let e = 1; e < 17; e++)
    !a.includes(e) && (i.includes(e) || r.current & (1 << e)) && o.push(e);
  return (0, X.jsxs)(`div`, {
    className: uo,
    children: [
      (0, X.jsx)(`hr`, {}),
      o.map((e) =>
        nc[e]
          ? (0, X.jsxs)(
              Y.Fragment,
              {
                children: [
                  (0, X.jsx)(tc, {
                    steamid: t,
                    settings: n,
                    feature: e,
                    label: nc[e].featureDescription,
                  }),
                  (0, X.jsx)(`hr`, {}),
                ],
              },
              e,
            )
          : null,
      ),
    ],
  });
}
function ic(e) {
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
    [l, u] = (0, Y.useState)(!1),
    d = (0, Y.useRef)(void 0),
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
  return (0, X.jsx)(D, {
    ref: d,
    ...c,
    className: k(t, Co, n && `_0-foDtgz9l8-`, r && `_2A5i29Vzbts-`),
    onActivate: g,
    onPointerDown: m,
    onPointerEnter: f,
    onPointerLeave: p,
    onPointerUp: h,
  });
}
function ac(e) {
  let { className: t, nWindows: n, nLockedWindows: r, onToggle: i } = e,
    a = [],
    o = Intl.DateTimeFormat(Ke.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    }),
    [s, c] = (0, Y.useState)(null);
  for (let e = 0; e < 48; e++) {
    let t = n & (BigInt(1) << BigInt(e)),
      o = r && r & (BigInt(1) << BigInt(e));
    a.push(
      (0, X.jsx)(
        ic,
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
      (0, X.jsx)(
        `div`,
        { className: k(So, `HashMark` + e), style: t },
        `HashMark` + e,
      ),
    );
  }
  for (let e = 0; e <= 48; e += 8) {
    let t = (0, $.default)()
        .startOf(`day`)
        .add(Math.floor(e / 2), `hours`),
      n = o.format(t.toDate()),
      r = e == 0 ? 0 : e - 4,
      i = e == 0 || e == 48 ? 4 : 8,
      s = { gridColumnStart: r + 1, gridColumnEnd: r + 1 + i };
    a.push(
      (0, X.jsx)(
        `div`,
        { className: k(xo, `Hour` + e), style: s, children: n },
        `Hour` + e,
      ),
    );
  }
  return (0, X.jsx)(D, {
    className: k(bo, t),
    onMouseLeave: () => c(null),
    children: a,
  });
}
function oc(e) {
  let { steamid: t, settings: n, dayIndexStart: r, closeModal: i } = e,
    [a, o] = Y.useState(r),
    s = Y.useRef(Object.assign({}, n)),
    c = j(t);
  return (0, X.jsx)(A, {
    className: _o,
    closeModal: i,
    onOK: () => {
      (c.mutate(s.current), i());
    },
    strTitle: (0, X.jsx)(tt, {
      className: $a,
      children: N(`#Parental_PlaytimeWindows_Title`),
    }),
    children: (0, X.jsx)(cc, {
      restrictions: s.current.playtime_restrictions?.playtime_days[a],
      dayIndex: a,
      setDayIndex: o,
    }),
  });
}
function sc(e) {
  let { dayIndex: t, onChange: n } = e,
    r = Y.useCallback(
      (e) => {
        n(e.data);
      },
      [n],
    ),
    i = hc();
  return (0, X.jsx)(Tt, {
    rgOptions: i,
    selectedOption: t,
    onChange: r,
    strDropDownButtonClassName: Eo,
    arrowClassName: void 0,
    contextMenuPositionOptions: {
      bMatchWidth: !0,
      bDisablePopTop: !0,
      bFitToWindow: !0,
    },
  });
}
function cc(e) {
  let { restrictions: t, dayIndex: n, setDayIndex: r } = e,
    [i, a] = Y.useState(BigInt(parseInt(t?.allowed_time_windows) || 0)),
    o = _e();
  Y.useEffect(() => {
    a(BigInt(parseInt(t?.allowed_time_windows) || 0));
  }, [t]);
  let s = Y.useCallback(
      (e) => {
        let n = i ^ (BigInt(1) << BigInt(e));
        ((t.allowed_time_windows = n.toString()), a(n));
      },
      [i, t],
    ),
    c = Y.useCallback(
      (e) => {
        ((t.allowed_time_windows = e.toString()), a(e));
      },
      [t],
    ),
    l = Y.useCallback(
      (e) => {
        t.allowed_daily_minutes = e;
      },
      [t],
    );
  return (0, X.jsxs)(`div`, {
    className: wo,
    children: [
      (0, X.jsxs)(D, {
        className: To,
        children: [
          (0, X.jsx)(sc, { dayIndex: n, onChange: r }),
          (0, X.jsxs)(`div`, {
            className: Do,
            children: [
              (0, X.jsx)(`div`, { className: Oo, children: Ls(i) }),
              (0, X.jsxs)(D, {
                className: ko,
                children: [
                  i == BigInt(0) &&
                    (0, X.jsx)(z, {
                      onClick: () => c(BigInt(0xffffffffffff)),
                      children: N(`#Parental_PlaytimeWindows_AllowAll`),
                    }),
                  i != BigInt(0) &&
                    (0, X.jsx)(z, {
                      onClick: () => c(BigInt(0)),
                      children: N(`#Parental_PlaytimeWindows_ClearAll`),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: vo,
        children: [
          (0, X.jsx)(ac, { className: yo, nWindows: i, onToggle: s }),
          !o &&
            (0, X.jsx)(uc, {
              className: `pFHGbAueY40-`,
              nWindows: i,
              onSet: c,
            }),
        ],
      }),
      (0, X.jsx)(pc, {
        strLabel: `#Parental_Playtime_Limit`,
        nMinutes: t.allowed_daily_minutes || 0,
        onSelected: l,
      }),
    ],
  });
}
function lc(e, t) {
  let n = BigInt(0),
    r = BigInt(1) << BigInt(e);
  for (let i = e; i < t; i++) ((n |= r), (r <<= BigInt(1)));
  return n;
}
function uc(e) {
  let { className: t, nWindows: n, onSet: r, ...i } = e,
    [a, o] = Y.useState((0, $.default)().startOf(`day`)),
    [s, c] = Y.useState((0, $.default)().startOf(`day`).add(1, `day`)),
    l = a,
    u = (0, $.default)(s),
    d = (l.hour() ?? 0) * 2 + (l.minute() ?? 0) / 30,
    f = (u.hour() ?? 0) * 2 + (u.minute() ?? 0) / 30 + (u.day() - l.day()) * 48,
    p = Y.useCallback(() => {
      let e = lc(d, f);
      r(n | e);
    }, [r, n, d, f]),
    m = Y.useCallback(() => {
      let e = lc(d, f);
      r(n & ~e);
    }, [r, n, d, f]),
    h = Y.useCallback(
      (e) => {
        let t = e;
        (o(t), t > u && c(t));
      },
      [u],
    ),
    g = Y.useCallback(
      (e) => {
        let t = e;
        ((t =
          t.hours() != 0 || t.minutes() != 0
            ? t.day(l.day())
            : t.day(l.day() + 1)),
          c(t >= l ? t : (0, $.default)(l)));
      },
      [l],
    );
  return (0, X.jsxs)(`div`, {
    className: k(zo, t),
    ...i,
    children: [
      (0, X.jsx)(`div`, { children: N(`#Parental_PlaytimeWindows_From`) }),
      (0, X.jsx)(`div`, { children: N(`#Parental_PlaytimeWindows_To`) }),
      (0, X.jsx)(`div`, {}),
      (0, X.jsx)(Ha.default, {
        className: Ho,
        value: l,
        onChange: h,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
      }),
      (0, X.jsx)(Ha.default, {
        className: Ho,
        value: u,
        onChange: g,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
      }),
      (0, X.jsxs)(`div`, {
        className: qa,
        children: [
          (0, X.jsx)(`div`, {
            className: Vo,
            children: (0, X.jsx)(B, {
              className: Bo,
              disabled: d >= f,
              onClick: p,
              children: `+`,
            }),
          }),
          (0, X.jsx)(`div`, {
            className: Vo,
            children: (0, X.jsx)(B, {
              className: Bo,
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
function dc(e) {
  let t = Fe(`#Parental_Playtime_Hours`, e);
  return (
    e == 0
      ? (t = N(`#Parental_Playtime_Hours_None`))
      : e == 24 && (t = N(`#Parental_Playtime_Hours_NoRestriction`)),
    t
  );
}
function fc(e) {
  return dc(Math.floor(e / 60));
}
function pc(e) {
  let {
      strLabel: t,
      nMinutes: n,
      onSelected: r,
      nMin: i = 0,
      nMax: a = 25,
    } = e,
    o = un() === `mobile` ? `below` : `inline`,
    s = Y.useCallback(
      (e) => {
        r(e.data * 60);
      },
      [r],
    ),
    c = [];
  for (let e = i; e < a; e++) c.push({ data: e, label: dc(e) });
  return (0, X.jsx)(He, {
    layout: o,
    label: N(t),
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
function mc(e) {
  let { steamid: t, settings: n, dayIndex: r, strDay: i } = e,
    [a, o] = Y.useState(!1),
    s = BigInt(
      parseInt(
        n.playtime_restrictions?.playtime_days[r]?.allowed_time_windows,
      ) || 0,
    ),
    c = n.playtime_restrictions?.playtime_days[r]?.allowed_daily_minutes || 0;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(D, {
        className: po,
        onActivate: () => o(!0),
        children: [
          (0, X.jsx)(`div`, { className: mo, children: i }),
          (0, X.jsx)(`div`, { className: ho, children: Ls(s) }),
          (0, X.jsxs)(`div`, {
            className: go,
            children: [
              (0, X.jsxs)(`div`, {
                children: [N(`#Parental_Playtime_Limit`), `:`],
              }),
              (0, X.jsx)(`div`, { children: fc(c) }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(R, {
        active: a,
        children: (0, X.jsx)(oc, {
          steamid: t,
          settings: n,
          dayIndexStart: r,
          closeModal: () => o(!1),
        }),
      }),
    ],
  });
}
function hc() {
  let e = $.default.localeData(Ke.GetPreferredLocales()[0]).firstDayOfWeek(),
    t = Intl.DateTimeFormat(Ke.GetPreferredLocales(), { weekday: `long` });
  return Array.from({ length: 7 }, (n, r) => {
    let i = (r + e) % 7;
    return { data: i, label: t.format((0, $.default)().day(i).toDate()) };
  });
}
function gc(e) {
  let { steamid: t, settings: n } = e,
    r = hc().map((e) =>
      (0, X.jsx)(
        mc,
        { steamid: t, settings: n, dayIndex: e.data, strDay: e.label },
        e.data,
      ),
    );
  return (0, X.jsx)(`div`, { className: fo, children: r });
}
function _c(e) {
  let { steamid: t, settings: n } = e,
    r = j(t),
    i = Y.useCallback(
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
  return (0, X.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, X.jsx)(ct, {
        className: Ka,
        bottomSeparator: `none`,
        label: N(`#Parental_EnablePlaytimeRestrictions`),
        checked: a,
        onChange: i,
      }),
      a && (0, X.jsx)(gc, { steamid: t, settings: n }),
    ],
  });
}
function vc(e) {
  let {
      steamid: t,
      eContentDescriptor: n,
      settings: r,
      fnSelectContentDescriptor: i,
    } = e,
    a = j(t),
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
  return (0, X.jsxs)(D, {
    className: Go,
    navEntryPreferPosition: mt.MAINTAIN_X,
    children: [
      (0, X.jsxs)(D, {
        className: Ko,
        children: [
          (0, X.jsx)(`div`, { className: qo, children: o }),
          (0, X.jsxs)(`div`, {
            className: Jo,
            children: [
              s,
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(z, {
                className: void 0,
                onClick: () => i(n),
                children: N(`#ContentDescriptors_ViewExampleProducts`),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(D, {
        className: Yo,
        children: (0, X.jsx)(ut, { checked: p, onChange: f(c, l) }),
      }),
      (0, X.jsx)(D, {
        className: Yo,
        children: (0, X.jsx)(ut, { checked: m, onChange: f(u, d) }),
      }),
    ],
  });
}
function yc(e) {
  let { strName: t, strLogoUrl: n } = e;
  return (0, X.jsxs)(D, {
    className: Xo,
    focusable: !0,
    children: [
      (0, X.jsx)(`img`, { src: n }),
      (0, X.jsx)(`div`, { children: t }),
    ],
  });
}
function bc(e) {
  let { eSelectedContentDescriptor: t, fnSelectDescriptor: n } = e,
    r = ue(t);
  return (0, X.jsx)(R, {
    active: t !== null,
    children: (0, X.jsxs)(O, {
      title: N(`#ContentDescriptor_ExampleProductsHeader`),
      closeModal: () => n(null),
      children: [
        !r.data && (0, X.jsx)(y, {}),
        r.data?.length === 0 &&
          (0, X.jsx)(`p`, { children: N(`#ContentDescriptorExample_NoGames`) }),
        r.data?.length > 0 &&
          r.data.map((e, t) =>
            (0, X.jsx)(yc, { strName: e.name, strLogoUrl: e.logo }, t),
          ),
      ],
    }),
  });
}
function xc(e) {
  let { steamid: t, settings: n } = e,
    [r, i] = (0, Y.useState)(null);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(bc, { eSelectedContentDescriptor: r, fnSelectDescriptor: i }),
      (0, X.jsxs)(D, {
        className: Uo,
        children: [
          (0, X.jsx)(`p`, {
            children: N(`#Parental_ContentDescriptors_Intro`),
          }),
          (0, X.jsxs)(D, {
            className: Wo,
            children: [
              (0, X.jsxs)(D, {
                className: Go,
                children: [
                  (0, X.jsx)(D, { className: Ko }),
                  (0, X.jsx)(D, {
                    className: Yo,
                    children: N(`#Parental_ContentDescriptors_Store`),
                  }),
                  (0, X.jsx)(D, {
                    className: Yo,
                    children: N(`#Parental_ContentDescriptors_Community`),
                  }),
                ],
              }),
              se.map((e) =>
                (0, X.jsx)(
                  vc,
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
function Sc(e) {
  return (0, X.jsx)(`div`, {
    className: Xa,
    children: N(`#Parental_Settings_PageError`),
  });
}
function Cc(e) {
  let n = r(),
    i = L(),
    a = n.steamid,
    o = t(),
    s = () => {
      o.push(`/account/familymanagement`);
    },
    c = W(!0),
    l = Be(a),
    u = S(a),
    d = c.isLoading || l.isLoading || u.isLoading,
    f = c.isError || l.isError || u.isError;
  if (d && !f) return (0, X.jsx)(y, { position: `center` });
  if (f || !l.data.settings) return (0, X.jsx)(Sc, {});
  let p = c.data.family_group(),
    m = qt(p, i),
    h = qt(p, n.steamid);
  if (!m || !h || m.role() != 1 || h.role() != 2) return (0, X.jsx)(Sc, {});
  let { settings: g, mapAppsAllowed: _ } = l.data,
    v = u.data;
  return (0, X.jsxs)(`div`, {
    className: Wa,
    children: [
      (0, X.jsx)(D, {
        className: Ja,
        onActivate: s,
        children: N(`#Parental_Settings_Return`),
      }),
      (0, X.jsxs)(`div`, {
        className: Ya,
        children: [
          (0, X.jsx)(wc, { member: h, persona: v }),
          (0, X.jsx)(zs, { steamid: a, settings: g, familyGroup: p }),
        ],
      }),
      g.is_enabled &&
        (0, X.jsx)(Tc, { steamID: a, settings: g, mapAppsAllowed: _ }),
    ],
  });
}
function wc(e) {
  let { member: t, persona: n } = e;
  return (0, X.jsxs)(`div`, {
    className: Qa,
    children: [
      (0, X.jsx)(`div`, {
        className: $a,
        children: N(`#Parental_Settings_For`),
      }),
      (0, X.jsx)(jr, { persona: n, role: t.role() }),
    ],
  });
}
function Tc(e) {
  let { steamID: t, settings: n, mapAppsAllowed: r } = e,
    i = (0, Y.useMemo)(
      () => [
        {
          name: N(`#Parental_Tab_AllowedGames`),
          key: `games`,
          contents: (0, X.jsx)(ec, {
            steamid: t,
            settings: n,
            mapAppsAllowed: r,
          }),
        },
        {
          name: N(`#Parental_Tab_Settings`),
          key: `settings`,
          contents: (0, X.jsx)(Ec, { steamid: t, settings: n }),
        },
        {
          name: N(`#Parental_Tab_PlaytimeLimits`),
          key: `playtime`,
          contents: (0, X.jsx)(_c, { steamid: t, settings: n }),
        },
      ],
      [t, n, r],
    );
  return (0, X.jsx)(_, { tabs: i, classNameCtn: Ni, classNameTab: Pi });
}
function Ec(e) {
  let { steamid: t, settings: n } = e;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(rc, { steamid: t, settings: n }),
      (0, X.jsx)(xc, { steamid: t, settings: n }),
    ],
  });
}
function Dc(e) {
  L();
  let t = Y.useRef(Math.floor(Date.now() / 1e3)).current - 2592e3,
    n = Ie(e, t),
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
function Oc(e) {
  let { item: t, closeModal: n } = e,
    r = Te(t),
    [i, a] = Y.useState(3600),
    o = un() === `mobile` ? `below` : `inline`,
    s = Y.useCallback(() => {
      r.mutateAsync({ bApprove: !0, durationSec: i });
    }, [r, i]),
    c = Y.useCallback((e, t) => {
      a(e.data);
    }, []),
    l = [
      { label: N(`#FeatureRequest_AcceptDialog_1Hour`), data: 3600 },
      { label: N(`#FeatureRequest_AcceptDialog_4Hours`), data: 14400 },
      { label: N(`#FeatureRequest_AcceptDialog_24Hours`), data: 86400 },
      { label: N(`#FeatureRequest_AcceptDialog_Permanently`), data: 0 },
    ];
  return (0, X.jsxs)(A, {
    className: void 0,
    closeModal: n,
    onOK: s,
    strTitle: (0, X.jsx)(tt, {
      className: void 0,
      children: N(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: [
      (0, X.jsx)(_t, { children: N(`#FeatureRequest_AcceptDialog_BodyText`) }),
      (0, X.jsx)(He, {
        layout: o,
        bottomSeparator: `none`,
        label: N(`#FeatureRequest_AcceptDialog_AllowAccess`),
        rgOptions: l,
        selectedOption: i,
        onChange: c,
      }),
    ],
  });
}
function kc(e) {
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
    l = Y.useCallback(
      (e) => {
        let t = a ^ (BigInt(1) << BigInt(e));
        o(t);
      },
      [a, o],
    ),
    u = Y.useCallback(
      (e) => {
        i(e);
      },
      [i],
    ),
    d = `#PlaytimeRequest_AcceptDialog_BodyText`;
  return (
    s && (d = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows`),
    c && (d = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours`),
    (0, X.jsxs)(`div`, {
      className: Va,
      children: [
        (0, X.jsx)(_t, { children: N(d) }),
        !s &&
          (0, X.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, X.jsx)(`div`, { className: `EFhHT8zkCyk-`, children: Ls(a) }),
              (0, X.jsx)(ac, { nWindows: a, nLockedWindows: n, onToggle: l }),
            ],
          }),
        !c &&
          (0, X.jsxs)(`div`, {
            className: `w7tEMhTubis-`,
            children: [
              Fe(
                `#PlaytimeRequest_AcceptDialog_CurrentHours`,
                Math.floor(t / 60),
              ),
              ` `,
            ],
          }),
        c &&
          (0, X.jsx)(`div`, {
            className: `w7tEMhTubis-`,
            children: N(`#PlaytimeRequest_AcceptDialog_UnlimitedHours`),
          }),
        !c &&
          (0, X.jsx)(pc, {
            strLabel: `#PlaytimeRequest_AcceptDialog_AdditionalTime`,
            nMinutes: r,
            onSelected: u,
            nMax: 25 - t / 60,
          }),
      ],
    })
  );
}
function Ac(e) {
  let { item: t, closeModal: n } = e,
    r = Ce(t),
    [i, a] = Y.useState(!1),
    o = t.current_playtime_restrictions().allowed_daily_minutes(),
    s = BigInt(
      parseInt(t.current_playtime_restrictions().allowed_time_windows()),
    ),
    [c, l] = Y.useState(60),
    [u, d] = Y.useState(s);
  Y.useEffect(() => {
    a(c == 0 && s == u);
  }, [c, s, u]);
  let f = Y.useCallback(() => {
    let e = new Ne();
    (e.restrictions(!0).set_allowed_daily_minutes(o + c),
      e.restrictions(!0).set_allowed_time_windows(u.toString()),
      e.set_rtime_expires(t.time_expires()),
      r.mutateAsync({ bApprove: !0, restrictions: e }));
  }, [r, o, c, u, t]);
  return (0, X.jsx)(A, {
    className: void 0,
    closeModal: n,
    onOK: f,
    bOKDisabled: i,
    strTitle: (0, X.jsx)(tt, {
      className: void 0,
      children: N(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: (0, X.jsx)(kc, {
      currentMinutes: o,
      currentWindows: s,
      additionalMinutes: c,
      setAdditionalMinutes: l,
      nWindows: u,
      setWindows: d,
    }),
  });
}
function jc(e) {
  let { steamIDResponder: t, resultMessage: n, timeResponded: r } = e,
    i = S(t.ConvertTo64BitString()),
    a = i?.data,
    o = cn(t.GetAccountID()),
    s = Z();
  return (
    a || (n = N(`#ParentalRequest_Canceled`)),
    (0, X.jsxs)(`div`, {
      className: Na,
      children: [
        (0, X.jsx)(`div`, { className: void 0, children: n }),
        !!a &&
          (0, X.jsxs)(`div`, {
            className: `_7XDMq4s1SiY-`,
            children: [
              (0, X.jsx)(q, {
                className: void 0,
                persona: a,
                size: `Medium`,
                statusPosition: `right`,
              }),
              (0, X.jsx)(sn, {
                persona: i.data,
                bParenthesizeNicknames: s.data
                  ?.preferences()
                  .parenthesize_nicknames(),
                strNickname: o,
              }),
            ],
          }),
        (0, X.jsx)(`div`, { className: Aa, children: ot(r) }),
      ],
    })
  );
}
function Mc(e) {
  let { steamID: t, locToken: n, locTokenPlurality: r } = e,
    i = S(t.ConvertTo64BitString()),
    a = i?.data,
    o = cn(t.GetAccountID()),
    s = Z();
  return i.isSuccess
    ? (0, X.jsxs)(`div`, {
        className: Ma,
        children: [
          (0, X.jsx)(q, {
            className: void 0,
            persona: a,
            size: `Medium`,
            statusPosition: `right`,
          }),
          Ze(
            n,
            r,
            (0, X.jsx)(sn, {
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
function Nc(e) {
  let { item: t, nFeatures: n, onReject: r, renderApproveDialog: i } = e,
    a = L(),
    o = t.steamid() == a,
    s = !n,
    [c, l] = Y.useState(!1),
    u = Y.useCallback(() => {
      l(!0);
    }, []),
    d = [],
    f = n;
  for (let e = 0; e < 32; e++)
    if (f & (1 << e)) {
      let t = e,
        n = o ? nc[t]?.requestDescriptionSelf : nc[t]?.requestDescription;
      n && d.push(N(n));
    }
  return d.length == 0 && !s
    ? null
    : (0, X.jsxs)(`div`, {
        className: k(Ea, Pa),
        children: [
          (0, X.jsxs)(`div`, {
            className: Da,
            children: [
              o &&
                (0, X.jsx)(`div`, {
                  className: `hHB2RrlwISw-`,
                  children: N(
                    s
                      ? `#PlaytimeRequest_UserRequested_Self`
                      : `#FeatureRequest_UserRequested_Self`,
                  ),
                }),
              !o &&
                (0, X.jsx)(Mc, {
                  steamID: new M(t.steamid()),
                  locToken: s
                    ? `#PlaytimeRequest_UserRequested`
                    : `#FeatureRequest_UserRequested`,
                  locTokenPlurality: 1,
                }),
              (0, X.jsxs)(`ul`, {
                className: ka,
                children: [
                  d.map((e) =>
                    (0, X.jsx)(`li`, { className: Oa, children: e }, e),
                  ),
                  (0, X.jsx)(`div`, {
                    className: Aa,
                    children: ot(t.time_requested()),
                  }),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: ja,
            children: [
              !o &&
                !t.time_responded() &&
                (0, X.jsxs)(D, {
                  className: `_7KXfklfuGPw-`,
                  children: [
                    (0, X.jsx)(F, {
                      noFocusRing: !1,
                      onClick: u,
                      children: N(`#ParentalRequest_Accept`),
                    }),
                    (0, X.jsx)(B, {
                      noFocusRing: !1,
                      onClick: r,
                      children: N(`#ParentalRequest_Reject`),
                    }),
                  ],
                }),
              o &&
                !t.time_responded() &&
                (0, X.jsx)(`div`, {
                  className: k(`_7KXfklfuGPw-`, `l-R1A4yiKt4-`),
                  children: N(`#ParentalRequest_Pending`),
                }),
              !!t.time_responded() &&
                (0, X.jsx)(jc, {
                  steamIDResponder: new M(t.steamid_responder()),
                  resultMessage: N(
                    t.approved()
                      ? `#ParentalRequest_AcceptedBy`
                      : `#ParentalRequest_RejectedBy`,
                  ),
                  timeResponded: t.time_responded(),
                }),
              !t.time_responded() &&
                (0, X.jsx)(R, { active: c, children: i(() => l(!1)) }),
            ],
          }),
        ],
      });
}
function Pc(e) {
  let { item: t } = e,
    n = Te(t),
    r = Y.useCallback(() => {
      n.mutateAsync({ bApprove: !1, durationSec: 0 });
    }, [n]),
    i = Y.useCallback((e) => (0, X.jsx)(Oc, { item: t, closeModal: e }), [t]),
    a = t.features();
  return (0, X.jsx)(Nc, {
    item: t,
    nFeatures: a,
    onReject: r,
    renderApproveDialog: i,
  });
}
function Fc(e) {
  let { item: t } = e,
    n = Ce(t),
    r = Y.useCallback(() => {
      n.mutateAsync({ bApprove: !1, restrictions: null });
    }, [n]),
    i = Y.useCallback((e) => (0, X.jsx)(Ac, { item: t, closeModal: e }), [t]);
  return (0, X.jsx)(Nc, { item: t, onReject: r, renderApproveDialog: i });
}
function Ic(e) {
  let { packageIDs: t, bundleIDs: n } = e;
  return !t.length && !n.length
    ? null
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(`div`, {
            className: void 0,
            children: Fe(`#PurchaseRequest_Purchased`, t.length + n.length),
          }),
          (0, X.jsx)(Lc, { packageIDs: t, bundleIDs: n }),
        ],
      });
}
function Lc(e) {
  let { packageIDs: t, bundleIDs: n } = e,
    [r, i] = (0, Y.useState)(!1);
  if (!t.length && !n.length) return null;
  let a = t.length + n.length,
    o = null;
  if (r || a <= 5) o = Rc(t, n, a);
  else {
    ((o = Rc(t, n, 5)),
      o.push(
        (0, X.jsx)(
          `span`,
          { children: N(`#PurchaseRequest_PackageLinksFinalSeparator`) },
          `sepand`,
        ),
      ));
    let e = t.length + n.length - 5;
    o.push(
      (0, X.jsx)(
        D,
        {
          onActivate: () => i(!0),
          className: k(Ba, void 0),
          focusable: !0,
          children: N(`#PurchaseRequest_PackageLinksShowMore`, e),
        },
        `showMore`,
      ),
    );
  }
  return (0, X.jsx)(`div`, { className: La, children: o });
}
function Rc(e, t, n) {
  let r = [],
    i = 0;
  for (let t = 0; t < e.length && i < n; t++, i++) {
    let a = e[t];
    (r.push((0, X.jsx)(zc, { packageID: a }, a)),
      i < n - 1 &&
        r.push(
          (0, X.jsx)(
            `span`,
            { children: N(`#PurchaseRequest_PackageLinksSeparator`) },
            `sep` + a,
          ),
        ));
  }
  for (let e = 0; e < t.length && i < n; e++, i++) {
    let a = t[e];
    (r.push((0, X.jsx)(Bc, { bundleID: a }, a)),
      i < n - 1 &&
        r.push(
          (0, X.jsx)(
            `span`,
            { children: N(`#PurchaseRequest_PackageLinksSeparator`) },
            `sep` + a,
          ),
        ));
  }
  return r;
}
function zc(e) {
  let { packageID: t } = e,
    [n] = w(t, {});
  return (0, X.jsx)(Vc, { storeItem: n });
}
function Bc(e) {
  let { bundleID: t } = e,
    [n] = ie(t, {});
  return (0, X.jsx)(Vc, { storeItem: n });
}
function Vc(e) {
  let { storeItem: t } = e,
    n = { direction: `right`, style: { minWidth: `320px` } },
    r = Ge(t),
    i = Y.useCallback(
      (e) => {
        gs(ft(e), t.GetStorePageURL());
      },
      [t],
    );
  return t
    ? (t.GetStoreItemType(),
      (0, X.jsx)(g, {
        id: r,
        name: t.GetName(),
        bPreventNavigation: !0,
        bHidePrice: !1,
        bShowWishlistButton: !1,
        hoverProps: n,
        className: Ia,
        children: (0, X.jsx)(D, {
          className: k(Ra, void 0),
          focusable: !0,
          onActivate: i,
          children: (0, X.jsx)(`div`, { className: za, children: t.GetName() }),
        }),
      }))
    : null;
}
function Hc(e) {
  let { item: t, familyGroupID: n } = e,
    r = L(),
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
        l = N(`#PurchaseRequest_DeclinedBy`);
        break;
      case 2:
        l = N(`#PurchaseRequest_PurchasedBy`);
        break;
      case 3:
        l = N(`#PurchaseRequest_Abandoned`);
        break;
      case 4:
        l = N(`#PurchaseRequest_CanceledBy`);
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
    (0, X.jsxs)(`div`, {
      className: k(Ea, Fa),
      children: [
        (0, X.jsxs)(`div`, {
          className: Da,
          children: [
            i &&
              (0, X.jsx)(`div`, {
                className: `hHB2RrlwISw-`,
                children: Fe(
                  `#PurchaseRequest_UserRequested_Self`,
                  t.requested_packageids()?.length,
                ),
              }),
            !i &&
              (0, X.jsx)(Mc, {
                steamID: new M(t.requester_steamid()),
                locToken: `#PurchaseRequest_UserRequested`,
                locTokenPlurality: t.requested_packageids()?.length,
              }),
            (0, X.jsx)(Lc, {
              packageIDs: t.requested_packageids(),
              bundleIDs: t.requested_bundleids(),
            }),
            !u &&
              (0, X.jsx)(Ic, {
                packageIDs: t.purchased_packageids(),
                bundleIDs: t.purchased_bundleids(),
              }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: ja,
          children: [
            !t.time_responded() &&
              (0, X.jsxs)(D, {
                className: `_7KXfklfuGPw-`,
                children: [
                  !i &&
                    !t.time_responded() &&
                    (0, X.jsx)(`a`, {
                      href: s,
                      children: (0, X.jsx)(F, {
                        noFocusRing: !1,
                        children: N(`#PurchaseRequest_View`),
                      }),
                    }),
                  (0, X.jsx)(B, {
                    noFocusRing: !1,
                    onClick: c,
                    children: N(
                      i
                        ? `#PurchaseRequest_Cancel`
                        : `#PurchaseRequest_Decline`,
                    ),
                  }),
                ],
              }),
            t.time_responded() &&
              (0, X.jsx)(jc, {
                steamIDResponder: new M(t.responder_steamid()),
                resultMessage: l,
                timeResponded: t.time_responded(),
              }),
          ],
        }),
      ],
    })
  );
}
function Uc(e) {
  let { item: t, familyGroupID: n } = e,
    r;
  switch (t.type) {
    case 0:
      r = (0, X.jsx)(Pc, { item: t.data });
      break;
    case 1:
      r = (0, X.jsx)(Fc, { item: t.data });
      break;
    case 2:
      r = (0, X.jsx)(Hc, { item: t.data, familyGroupID: n });
      break;
    default:
      r = null;
  }
  return r;
}
function Wc(e) {
  let { rgRequests: t, familyGroupID: n } = e,
    r = t.length > 0;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      !r &&
        (0, X.jsx)(`div`, {
          className: void 0,
          children: N(`#FamilyManagement_NoCurrentRequests`),
        }),
      r &&
        (0, X.jsx)(`div`, {
          className: `woHeMzP52eU-`,
          children: t.map((e) =>
            (0, X.jsx)(Uc, { item: e, familyGroupID: n }, e.key),
          ),
        }),
    ],
  });
}
var Gc = `_0-FZqOUzDlc-`,
  Kc = `EVvaYNdNnEA-`,
  qc = `#1a9fff`,
  Jc = `rgba(255, 255, 255, 0.1)`,
  Yc = `-B9JuEjgX1w-`,
  Xc = `QPAYDnk6EIg-`,
  Zc = `w0D3nFNatyk-`,
  Qc = `UO--Fvrpn5c-`,
  $c = `iHOuJ8etUNE-`,
  el = `RFXvJWT1XBU-`,
  tl = `r351c7U-moI-`,
  nl = `AVoWfWXi0a8-`,
  rl = `i0XsOg0rw-c-`,
  il = `yKr0aQXMsT4-`,
  al = `a1R4qfWWLP0-`,
  ol = `QL0WsSH56Qc-`,
  sl = `qBByTNg5CCA-`,
  cl = `_7awDc8oYD5M-`,
  ll = `HaVgAD9hUMg-`,
  ul = `QHjYWVWP5ss-`,
  dl = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  fl = 1,
  pl = 24 / fl,
  ml = 14;
function hl(e) {
  let { steamid: t } = e,
    n = an(t);
  if ((re(), n.isLoading))
    return (0, X.jsx)(`div`, { className: Yc, children: (0, X.jsx)(y, {}) });
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
  return (0, X.jsx)(
    `div`,
    {
      className: Xc,
      children: a.map((e, t) =>
        (0, X.jsx)(gl, { date: e, vecSessions: r(e) }, t),
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
    o = nt(i, !0, !0, !1, !0),
    [s, c] = (0, Y.useState)(!1),
    l = 0;
  for (let e of n) l += Math.min(e.time_end, a) - Math.max(e.time_start, i);
  let u = l === 0 ? N(`#FamilyPlaytime_NoPlaytime`) : et(l),
    d = (e) => {
      let t = i + fl * 3600 * e,
        r = i + fl * 3600 * (e + 1);
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
  return (0, X.jsxs)(D, {
    className: k(Zc, m && `PR1QBc3WtJ4-`),
    children: [
      (0, X.jsxs)(D, {
        className: Qc,
        onClick: m ? void 0 : () => c(!s),
        children: [
          (0, X.jsxs)(D, {
            className: $c,
            onActivate: m ? void 0 : () => c(!s),
            children: [
              o,
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`span`, { className: el, children: u }),
            ],
          }),
          l > 0 &&
            [...Array(pl).keys()].map((e) =>
              (0, X.jsx)(yl, { nDate: i, nBin: e, vecSessions: d(e) }, e),
            ),
          !m && (0, X.jsx)(Ft, { bExpanded: s, setExpanded: c }),
        ],
      }),
      s &&
        !m &&
        (0, X.jsx)(D, {
          className: `RUeYA1OokLE-`,
          children: p.map((e, t) =>
            (0, X.jsx)(bl, { appid: e[0], nSecondsPlayed: e[1] }, t),
          ),
        }),
    ],
  });
}
function _l(e) {
  let { appid: t } = e,
    [n, r] = Y.useState(0),
    [i, a] = Y.useState(!1),
    [o] = T(t, Me.k_DataRequest_Assets);
  if (!o) return null;
  let s = `${I.STORE_ITEM_BASE_URL}steam/apps/`,
    c = [`${s}${t}/library_600x900.jpg`, `${s}${t}/portrait.png`, dl];
  o.GetAssets()?.GetLibraryCapsuleURL() &&
    (c = [o.GetAssets()?.GetLibraryCapsuleURL(), ...c]);
  let l = () => {
      a(!0);
    },
    u = () => {
      n < c.length && r((e) => e + 1);
    },
    d = c[n];
  return (0, X.jsx)(`img`, {
    className: k(ul, i && `oUbDv5hUlwY-`),
    onLoad: l,
    onError: u,
    src: d,
  });
}
function vl(e) {
  let { appid: t } = e,
    [n] = T(t, Me.k_DataRequest_Assets);
  return n
    ? (0, X.jsx)(z, {
        href: n.GetStorePageURL(),
        children: (0, X.jsx)(_l, { appid: t }),
      })
    : null;
}
function yl(e) {
  let { nDate: t, nBin: n, vecSessions: r } = e,
    i = t + fl * 3600 * n,
    a = t + fl * 3600 * (n + 1),
    [o, s] = (0, Y.useState)(!1),
    c = 0,
    l = new Set();
  for (let e of r)
    ((c += Math.min(e.time_end, a) - Math.max(e.time_start, i)),
      l.add(e.appid));
  let u = qc,
    d = Jc,
    f = Math.round((100 * c) / (fl * 3600)),
    p = `linear-gradient(0deg, ${u} 0%, ${u} ${f}%, ${d} ${f}%, ${d} 100%)`,
    m = (e) => {
      if (e === 0 || e === pl) return ``;
      let t = Math.round(pl / 6);
      return e % t === t / 2
        ? new Date(i * 1e3).toLocaleTimeString(Ke.GetPreferredLocales(), {
            hour: `numeric`,
          })
        : ``;
    },
    h =
      l.size === 0
        ? null
        : (0, X.jsx)(D, {
            className: cl,
            children: Array.from(l).map((e) => (0, X.jsx)(vl, { appid: e }, e)),
          }),
    g = (0, X.jsxs)(`div`, {
      className: ll,
      children: [
        (0, X.jsxs)(`div`, { className: rl, children: [yt(i), ` - `, yt(a)] }),
        h,
      ],
    });
  return (0, X.jsxs)(D, {
    focusable: l.size > 0,
    onOKButton: () => s(!0),
    children: [
      (0, X.jsxs)(v, {
        active: o,
        onDismiss: () => s(!1),
        children: [
          (0, X.jsx)(`div`, {
            className: rl,
            children: N(`#FamilyPlaytime_GamesPlayedBetween`, yt(i), yt(a)),
          }),
          h,
        ],
      }),
      (0, X.jsx)(ye, {
        toolTipContent: g,
        nDelayShowMS: 0,
        children: (0, X.jsx)(`div`, {
          className: k(tl),
          style: { background: p },
          children: (0, X.jsx)(`span`, { className: nl, children: m(n) }),
        }),
      }),
    ],
  });
}
function bl(e) {
  let { appid: t, nSecondsPlayed: n } = e,
    [r] = T(t, Me.k_DataRequest_Assets);
  return r
    ? (0, X.jsx)(z, {
        href: r.GetStorePageURL(),
        children: (0, X.jsxs)(D, {
          className: il,
          children: [
            (0, X.jsx)(`div`, {
              className: al,
              children: (0, X.jsx)(_l, { appid: t }),
            }),
            (0, X.jsx)(`div`, { className: ol, children: et(n) }),
            (0, X.jsx)(`div`, { className: sl, children: r.GetName() }),
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
    o = Z(),
    [s, c] = (0, Y.useState)(r ? r[0] : null);
  if (n.isLoading || i.some((e) => e.isLoading) || a.isLoading)
    return (0, X.jsx)(`div`, { className: Gc, children: (0, X.jsx)(y, {}) });
  if (r.length === 0)
    return (0, X.jsx)(`p`, { children: N(`#FamilyPlaytime_NoChildren`) });
  let l = i.map((e) => ({
    label: (0, X.jsx)(sn, {
      persona: e.data,
      bIgnorePersonaStatus: !0,
      bParenthesizeNicknames: o.data?.preferences().parenthesize_nicknames(),
      strNickname: a.data.get(e.data.m_steamid.GetAccountID()),
    }),
    data: e.data.m_steamid.ConvertTo64BitString(),
  }));
  return (0, X.jsxs)(D, {
    className: Kc,
    children: [
      (0, X.jsx)(He, {
        rgOptions: l,
        selectedOption: s,
        onChange: (e) => c(e.data),
        label: N(`#FamilyPlaytime_ShowPlaytimeFor`),
        layout: `inline`,
        childrenContainerWidth: `max`,
      }),
      (0, X.jsx)(hl, { steamid: s }),
    ],
  });
}
var Sl = function () {
  let [e, t] = (0, Y.useState)(null),
    r = l(),
    i = W();
  if (i.isError) return null;
  let o = !i.data?.is_not_member_of_any_group(),
    s = I.HELP_BASE_URL + `faqs/view/054C-3167-DD7F-49D4`;
  return (0, X.jsx)($t, {
    staleTimeMs: 3e3,
    children: (0, X.jsxs)(Zt.Provider, {
      value: { errorMessage: e, setErrorMessage: t },
      children: [
        (0, X.jsx)(Ar, {}),
        (0, X.jsxs)(Ml, {
          children: [
            (0, X.jsx)(xe, {}),
            (0, X.jsx)(`span`, {
              className: void 0,
              children: N(`#FamilyManagement_Title`),
            }),
            (0, X.jsx)(z, {
              className: void 0,
              href: s,
              children: (0, X.jsx)(ke, {}),
            }),
          ],
        }),
        i.isLoading &&
          (0, X.jsx)(`div`, {
            className: `yQG1LU0zHT0-`,
            children: (0, X.jsx)(y, {}),
          }),
        !i.isLoading &&
          (0, X.jsx)(`div`, {
            className: `j6sN-xNfa0w-`,
            children: (0, X.jsx)(D, {
              className: `G56z-wA-GqE-`,
              children: (0, X.jsxs)(a, {
                children: [
                  (0, X.jsx)(n, { path: `${r.path}/create`, component: Ol }),
                  (0, X.jsx)(n, { path: `${r.path}/join`, component: kl }),
                  (0, X.jsx)(n, {
                    path: `${r.path}/confirm_invite`,
                    component: Vr,
                  }),
                  (0, X.jsx)(n, {
                    path: `${r.path}/parentalcontrols/:steamid`,
                    component: Cc,
                  }),
                  (0, X.jsx)(n, {
                    children: o
                      ? (0, X.jsx)(Il, {
                          familyGroupID: i.data.family_groupid(),
                        })
                      : (0, X.jsx)(El, {}),
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
      name: N(`#FamilyManagement_SetupTab`),
      key: `setup`,
      contents: e.children,
    },
  ];
  return (0, X.jsx)(_, { tabs: t, classNameCtn: Ni });
}
function wl(e) {
  let t = [
    {
      name: N(`#FamilyManagement_JoinAFamily`),
      key: `setup`,
      contents: e.children,
    },
  ];
  return (0, X.jsx)(_, { tabs: t, classNameCtn: Ni });
}
function Tl(e) {
  let { familyGroupID: t } = e,
    { mutate: n } = zt(t);
  return (0, X.jsx)(F, {
    className: qi,
    onClick: () => n(),
    children: N(`#FamilyManagement_UndeleteButton`),
  });
}
function El(e) {
  let n = t(),
    r = W(),
    { setErrorMessage: i } = V();
  if (r.isLoading) return (0, X.jsx)(y, {});
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
        ? N(`#FamilyManagement_SelectJoinButtonPendingInvite`)
        : N(`#FamilyManagement_SelectJoinButtonPendingInvites`, a);
  let l = r.data.cooldown_seconds_remaining() > 0,
    u = r.data.can_undelete_last_joined_family();
  return (0, X.jsx)(Cl, {
    children: (0, X.jsxs)(`div`, {
      className: Gi,
      children: [
        (0, X.jsxs)(`div`, {
          className: Ki,
          children: [
            (0, X.jsx)(`p`, {
              children: N(`#FamilyManagement_CreateInstructions`),
            }),
            (0, X.jsx)(`p`, {
              children: N(`#FamilyManagement_CreateInstructions_2`),
            }),
          ],
        }),
        (l || u) &&
          (0, X.jsxs)(`div`, {
            className: `_4Igk3YwHgW0-`,
            children: [
              (0, X.jsx)(Xe, { color: `#ffc82c` }),
              (0, X.jsxs)(`div`, {
                children: [
                  !u && N(`#FamilyManagement_CanRejoin`),
                  u && N(`#FamilyManagement_CanUndelete`),
                ],
              }),
              u &&
                (0, X.jsx)(X.Fragment, {
                  children: (0, X.jsx)(Tl, {
                    familyGroupID: r.data.latest_joined_family_groupid(),
                  }),
                }),
            ],
          }),
        (0, X.jsxs)(`div`, {
          className: Ji,
          children: [
            (0, X.jsxs)(F, {
              className: Yi,
              onClick: s,
              children: [
                (0, X.jsx)(`div`, {
                  className: Xi,
                  children: N(`#FamilyManagement_SelectJoinButton`),
                }),
                (0, X.jsx)(`div`, {
                  className: void 0,
                  children: (0, X.jsx)(Je, {}),
                }),
                a > 0 &&
                  (0, X.jsx)(`div`, { className: `WXSieSksNro-`, children: c }),
              ],
            }),
            (0, X.jsxs)(F, {
              className: Yi,
              onClick: o,
              children: [
                (0, X.jsx)(`div`, {
                  className: Xi,
                  children: N(`#FamilyManagement_SelectCreateButton`),
                }),
                (0, X.jsx)(`div`, {
                  className: void 0,
                  children: (0, X.jsx)(Ot, {}),
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
  return (0, X.jsx)(R, {
    active: t,
    children: (0, X.jsxs)(A, {
      bAlertDialog: !0,
      onOK: r,
      closeModal: r,
      strTitle: N(
        n
          ? `#FamilyManagement_FamilyCreated`
          : `#FamilyManagement_FamilyJoined`,
      ),
      children: [
        (0, X.jsx)(Fr, { cooldownSecondsRemaining: i }),
        (0, X.jsx)(`div`, {
          className: oa,
          children: N(
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
  let [n, r] = (0, Y.useState)(``),
    i = tn();
  t();
  let a = W(),
    [o, s, l] = Mt(!1),
    { setErrorMessage: u } = V();
  return (
    K(i, `#FamilyManagement_ErrorCreateFamily`, G.k_EFamilyQueryCreateFamily),
    a.data && !a.data?.is_not_member_of_any_group() && !o
      ? (0, X.jsx)(c, { to: `/account/familymanagement` })
      : i.isPending
        ? (0, X.jsx)(`div`, { className: Fi, children: (0, X.jsx)(y, {}) })
        : (0, X.jsxs)(Cl, {
            children: [
              (0, X.jsx)(Dl, {
                active: o,
                isCreate: !0,
                closeModal: l,
                cooldownSeconds: a.data.cooldown_seconds_remaining(),
              }),
              (0, X.jsxs)(`div`, {
                className: na,
                children: [
                  (0, X.jsx)(jl, {
                    children: N(`#FamilyManagement_CreateAFamilyHeader`),
                  }),
                  (0, X.jsx)(`p`, {
                    children: N(`#FamilyManagement_CreateAFamilyText`),
                  }),
                  (0, X.jsxs)(`div`, {
                    className: ra,
                    children: [
                      (0, X.jsx)(bt, {
                        type: `text`,
                        onChange: (e) => {
                          (r(e.target.value), u(null));
                        },
                        value: n,
                        placeholder: N(
                          `#FamilyManagement_InputNamePlaceholder`,
                        ),
                      }),
                      (0, X.jsx)(F, {
                        disabled: n.length === 0,
                        onClick: () => {
                          (u(null),
                            i.mutate(n, {
                              onSuccess: (e) => {
                                e.cooldown_skip_granted() && s();
                              },
                            }));
                        },
                        children: N(`#FamilyManagement_FinalizeCreateFamily`),
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
    [i, a] = (0, Y.useState)(!1),
    o = t(),
    [s, l] = (0, Y.useState)(!1),
    d = Mr(u(), Nr),
    f = Qt(d);
  if (n.data && !n.data?.is_not_member_of_any_group() && !i)
    return d
      ? (0, X.jsx)(c, { to: `/account/familymanagement?invitation=${d}` })
      : (0, X.jsx)(c, { to: `/account/familymanagement` });
  let p = null,
    m = n.data.pending_group_invites();
  if (d) {
    let e = m.findIndex((e) => e.family_groupid() === d);
    e !== -1 && ((p = m[e]), (m = m.slice()), m.splice(e, 1));
  }
  return (
    p !== null &&
      p.awaiting_2fa() &&
      I.IN_MOBILE_WEBVIEW &&
      (f.mutate(),
      (window.location.href = `steammobile://confirmations?first_of_type=11`)),
    i
      ? (0, X.jsx)(wl, {
          children: (0, X.jsx)(Dl, {
            active: i,
            isCreate: !1,
            closeModal: () => {
              (a(!1), o.push(`/account/familymanagement`));
            },
            cooldownSeconds: n.data?.cooldown_seconds_remaining(),
          }),
        })
      : p
        ? (0, X.jsx)(wl, {
            children: (0, X.jsxs)(`div`, {
              className: ia,
              children: [
                (0, X.jsxs)(`p`, {
                  children: [
                    je(
                      `#FamilyManagement_PendingInvitesText`,
                      (0, X.jsx)(`span`, { className: aa }),
                      (0, X.jsx)(`b`, {}),
                    ),
                    ` `,
                  ],
                }),
                (0, X.jsx)(
                  Ir,
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
                  (0, X.jsx)(X.Fragment, {
                    children: (0, X.jsxs)(`p`, {
                      children: [
                        N(
                          m.length === 1
                            ? `#FamilyManagement_OtherInvite`
                            : `#FamilyManagement_OtherInvites`,
                          m.length,
                        ),
                        ` `,
                        (0, X.jsx)(`a`, {
                          onClick: () => l(!0),
                          children: N(`#FamilyManagement_Expand`),
                        }),
                      ],
                    }),
                  }),
                m.length > 0 &&
                  s &&
                  (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsxs)(`p`, {
                        children: [
                          N(
                            m.length === 1
                              ? `#FamilyManagement_OtherInvite`
                              : `#FamilyManagement_OtherInvites`,
                            m.length,
                          ),
                          ` `,
                          (0, X.jsx)(`a`, {
                            onClick: () => l(!1),
                            children: N(`#FamilyManagement_Collapse`),
                          }),
                        ],
                      }),
                      (0, X.jsx)(`div`, {
                        children: m.map((e) =>
                          (0, X.jsx)(
                            Ir,
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
        : (0, X.jsx)(wl, {
            children: (0, X.jsxs)(`div`, {
              className: ia,
              children: [
                d &&
                  (0, X.jsx)(`div`, {
                    className: `tf04-wL8lP4-`,
                    children: N(`#FamilyManagement_IncomingInviteGone`),
                  }),
                (0, X.jsx)(jl, {
                  children: N(`#FamilyManagement_JoinAFamily`),
                }),
                (0, X.jsx)(`p`, {
                  children: N(`#FamilyManagement_ToJoinInstructions`),
                }),
                (0, X.jsx)(`br`, {}),
                r > 0 &&
                  (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(jl, {
                        children: N(`#FamilyManagement_PendingInvitesHeader`),
                      }),
                      (0, X.jsxs)(`p`, {
                        children: [
                          je(
                            `#FamilyManagement_PendingInvitesText`,
                            (0, X.jsx)(`span`, { className: `rtDwRYVllRQ-` }),
                            (0, X.jsx)(`b`, {}),
                          ),
                          ` `,
                        ],
                      }),
                      n.data
                        ?.pending_group_invites()
                        .map((e) =>
                          (0, X.jsx)(
                            Ir,
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
      ? (0, X.jsx)(`div`, {
          className: Ii,
          children: (0, X.jsx)(`div`, {
            className: Fi,
            children: (0, X.jsx)(y, {}),
          }),
        })
      : i.isError
        ? null
        : (0, X.jsxs)(D, {
            className: Ii,
            children: [
              (0, X.jsx)(Nl, {}),
              (0, X.jsx)(Pl, { familyGroupID: n, isAdult: r }),
              (0, X.jsx)(Ll, { familyGroupID: n }),
            ],
          })
  );
}
function jl(e) {
  return (0, X.jsx)(`div`, { className: Mi, children: e.children });
}
function Ml(e) {
  let n = t();
  function r() {
    n.push(`/account/familymanagement`);
  }
  return (0, X.jsx)(`div`, {
    className: ji,
    children: (0, X.jsx)(`div`, {
      className: k(Ai, `account_header_line noicon`),
      onClick: r,
      children: e.children,
    }),
  });
}
function Nl() {
  let e = Mr(u(), Nr),
    t = W(),
    n = !t.data.is_not_member_of_any_group();
  return !e || !n || e === t.data.family_groupid()
    ? null
    : (0, X.jsxs)(`div`, {
        className: ta,
        children: [
          (0, X.jsx)(Xe, { color: ki }),
          (0, X.jsx)(`span`, {
            children: N(`#FamilyManagement_CannotJoinWhileAlreadyMember`),
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
  return (0, X.jsxs)(`div`, {
    className: Li,
    children: [
      (0, X.jsx)(Rl, { familyGroupID: t, isAdult: n }),
      n &&
        (0, X.jsx)(`div`, {
          className: void 0,
          children: N(`#FamilyManagement_MemberCount`, a, o),
        }),
    ],
  });
}
function Fl(e) {
  let t = S(e),
    n = `${I.COMMUNITY_BASE_URL}profiles/${e}`;
  return t.isSuccess
    ? (0, X.jsx)(z, {
        className: void 0,
        href: n,
        children: (0, X.jsx)(`b`, { children: (0, X.jsx)(Or, { steamid: e }) }),
      })
    : null;
}
function Il(e) {
  let { familyGroupID: t } = e,
    n = Dc(t),
    r = rn(t),
    i = [
      {
        name: N(`#FamilyManagement_ManageTab`),
        key: `manage`,
        contents: (0, X.jsx)(Al, {}),
      },
    ];
  return (
    i.push({
      name: N(`#FamilyManagement_LibraryTab`),
      key: `library`,
      contents: (0, X.jsx)(Fs, { familyGroupID: t }),
    }),
    i.push({
      name: N(`#FamilyManagement_RequestsTab`),
      key: `requests`,
      contents: (0, X.jsx)(Wc, { rgRequests: n, familyGroupID: t }),
    }),
    r === 1 &&
      (i.push({
        name: N(`#FamilyManagement_PlaytimeTab`),
        key: `playtime`,
        contents: (0, X.jsx)(xl, { familyGroupID: t }),
      }),
      i.push({
        name: N(`#FamilyManagement_HistoryTab`),
        key: `history`,
        contents: (0, X.jsx)(wa, {
          familyGroupID: t,
          nFamilyHistoryRowHeight: Oi,
          FamilyHistory: Zi,
          Entry: Qi,
          Timestamp: $i,
          EntryText: ea,
          FnRenderName: Fl,
        }),
      })),
    (0, X.jsx)(D, {
      autoFocus: !0,
      focusableIfEmpty: !0,
      children: (0, X.jsx)(_, {
        tabs: i,
        classNameCtn: Ni,
        classNameTab: Pi,
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
  let i = L();
  if (r.isLoading)
    return (0, X.jsx)(`div`, { className: Fi, children: (0, X.jsx)(y, {}) });
  if (r.isError) return null;
  let a = n == 1,
    o = r.data.members().findIndex((e) => e.steamid() === i),
    s = r.data.members()[o],
    c = r.data.members().slice();
  return (
    o !== -1 && c.splice(o, 1),
    (0, X.jsxs)(X.Fragment, {
      children: [
        o !== -1 &&
          (0, X.jsx)(_a, { familyGroupID: t, member: s }, s.steamid()),
        c.map((e) =>
          (0, X.jsx)(_a, { familyGroupID: t, member: e }, e.steamid()),
        ),
        a &&
          r.data
            ?.pending_invites()
            .map((e) =>
              (0, X.jsx)(_a, { familyGroupID: t, member: e }, e.steamid()),
            ),
        a && r.data.free_spots() > 0 && (0, X.jsx)(di, { familyGroupID: t }),
      ],
    })
  );
}
function Rl(e) {
  let { familyGroupID: t, isAdult: n } = e,
    [r, i] = (0, Y.useState)(!1),
    a = U(t),
    { setErrorMessage: o } = V();
  K(a, `#FamilyManagement_ErrorLoadFamily`, G.k_EFamilyQueryLoadFamily);
  let [s, c] = (0, Y.useState)(a.data?.name()),
    l = Vt(t);
  K(l, `#FamilyManagement_ErrorModifyFamily`, G.k_EFamilyQueryModifyFamily);
  let u = (e) => {
    (o(null), l.mutate(e), i(!1));
  };
  return r && n
    ? (0, X.jsxs)(D, {
        className: Ri,
        children: [
          (0, X.jsx)(`span`, {
            className: zi,
            children: N(`#FamilyManagement_YourFamily`),
          }),
          (0, X.jsx)(bt, {
            className: Hi,
            type: `text`,
            onChange: (e) => {
              (c(e.target.value), o(null));
            },
            value: s,
            placeholder: N(`#FamilyManagement_InputNamePlaceholder`),
            maxLength: 128,
          }),
          (0, X.jsx)(B, {
            className: Ui,
            noFocusRing: !1,
            onClick: () => u(s),
            children: N(`#FamilyManagement_EditFamilyNameSaveButton`),
          }),
          (0, X.jsx)(B, {
            className: Wi,
            noFocusRing: !1,
            onClick: () => {
              (i(!1), o(null));
            },
            children: N(`#FamilyManagement_EditFamilyNameCancelButton`),
          }),
        ],
      })
    : (0, X.jsxs)(`div`, {
        className: Ri,
        children: [
          (0, X.jsx)(`span`, {
            className: zi,
            children: N(`#FamilyManagement_YourFamily`),
          }),
          (0, X.jsxs)(D, {
            className: Vi,
            onActivate: n
              ? () => {
                  (i(!0), o(null));
                }
              : void 0,
            children: [
              (0, X.jsx)(`div`, { className: Bi, children: s }),
              n &&
                (0, X.jsx)(D, {
                  className: `_4pQtapRnbvg-`,
                  children: (0, X.jsx)(jt, {}),
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
