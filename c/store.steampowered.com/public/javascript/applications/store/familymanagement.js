import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _, _, _ } from "./saletags.js";
import { _ } from "./modals.js";
import { _ } from "./throbber.js";
import { _ } from "./stringutils.js";
import { _ } from "./moment.js";
import { _, _ } from "./privateapps.js";
import { _, _ } from "./playerstore.js";
import { _, _, _, _, _ } from "./storeitemhooks.js";
import { _, _, _ } from "./friendsstore.js";
import { _, _, _, _, _, _ } from "./contentdescriptors.js";
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
} from "./main.js";
import { _ } from "./expanderbutton.js";
import "./steammessages_familygroups_pb.js";
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
} from "./familymanagementstore.js";
import { _ } from "./steamavatar.js";
import { _, _ } from "./personanameandstatus.js";
import { _ } from "./useavatarandpersona.js";
import { _ } from "./react-datetime.js";
import { _ } from "./layout.js";
function _(_, _, _) {
  let _ = _.initialDeps ?? [],
    _;
  function _() {
    var _;
    let _;
    _.key && _.debug?.call(_) && (_ = Date.now());
    let _ = _();
    if (!(_.length !== _.length || _.some((_, _) => _[_] !== _))) return _;
    _ = _;
    let _;
    if (
      (_.key && _.debug?.call(_) && (_ = Date.now()),
      (_ = _(..._)),
      _.key && _.debug?.call(_))
    ) {
      let _ = Math.round((Date.now() - _) * 100) / 100,
        _ = Math.round((Date.now() - _) * 100) / 100,
        _ = _ / 16,
        _ = (_, _) => {
          for (_ = String(_); _.length < _; ) _ = ` ` + _;
          return _;
        };
      console.info(
        `%c⏱ ${_(_, 5)} /${_(_, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
        _?.key,
      );
    }
    return (_ = _?.onChange) == null || _.call(_, _), _;
  }
  return (
    (_.updateDeps = (_) => {
      _ = _;
    }),
    _
  );
}
function _(_, _) {
  if (_ === void 0) throw Error(`Unexpected undefined${_ ? `: ${_}` : ``}`);
  return _;
}
var _ = (_, _) => Math.abs(_ - _) < 1.01,
  _ = (_, _, _) => {
    let _;
    return function (..._) {
      _.clearTimeout(_), (_ = _.setTimeout(() => _.apply(this, _), _));
    };
  },
  _ = (_) => {
    let { offsetWidth: _, offsetHeight: _ } = _;
    return {
      width: _,
      height: _,
    };
  },
  _ = (_) => _,
  _ = (_) => {
    let _ = Math.max(_.startIndex - _.overscan, 0),
      _ = Math.min(_.endIndex + _.overscan, _.count - 1),
      _ = [];
    for (let _ = _; _ <= _; _++) _.push(_);
    return _;
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = (_) => {
      let { width: _, height: _ } = _;
      _({
        width: Math.round(_),
        height: Math.round(_),
      });
    };
    if ((_(_(_)), !_.ResizeObserver)) return () => {};
    let _ = new _.ResizeObserver((_) => {
      let _ = () => {
        let _ = _[0];
        if (_?.borderBoxSize) {
          let _ = _.borderBoxSize[0];
          if (_) {
            _({
              width: _.inlineSize,
              height: _.blockSize,
            });
            return;
          }
        }
        _(_(_));
      };
      _.options.useAnimationFrameWithResizeObserver
        ? requestAnimationFrame(_)
        : _();
    });
    return (
      _.observe(_, {
        box: `border-box`,
      }),
      () => {
        _.unobserve(_);
      }
    );
  },
  _ = {
    passive: !0,
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = () => {
      _({
        width: _.innerWidth,
        height: _.innerHeight,
      });
    };
    return (
      _(),
      _.addEventListener(`resize`, _, _),
      () => {
        _.removeEventListener(`resize`, _);
      }
    );
  },
  _ = typeof window > `u` || `onscrollend` in window,
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => void 0
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        let { horizontal: _, isRtl: _ } = _.options;
        (_ = _ ? _.scrollLeft * ((_ && -1) || 1) : _.scrollTop), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener(`scroll`, _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener(`scrollend`, _, _),
      () => {
        _.removeEventListener(`scroll`, _),
          _ && _.removeEventListener(`scrollend`, _);
      }
    );
  },
  _ = (_, _) => {
    let _ = _.scrollElement;
    if (!_) return;
    let _ = _.targetWindow;
    if (!_) return;
    let _ = 0,
      _ =
        _.options.useScrollendEvent && _
          ? () => void 0
          : _(
              _,
              () => {
                _(_, !1);
              },
              _.options.isScrollingResetDelay,
            ),
      _ = (_) => () => {
        (_ = _[_.options.horizontal ? `scrollX` : `scrollY`]), _(), _(_, _);
      },
      _ = _(!0),
      _ = _(!1);
    _(), _.addEventListener(`scroll`, _, _);
    let _ = _.options.useScrollendEvent && _;
    return (
      _ && _.addEventListener(`scrollend`, _, _),
      () => {
        _.removeEventListener(`scroll`, _),
          _ && _.removeEventListener(`scrollend`, _);
      }
    );
  },
  _ = (_, _, _) => {
    if (_?.borderBoxSize) {
      let _ = _.borderBoxSize[0];
      if (_)
        return Math.round(_[_.options.horizontal ? `inlineSize` : `blockSize`]);
    }
    return _[_.options.horizontal ? `offsetWidth` : `offsetHeight`];
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement)?.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? `left` : `top`]: _,
        behavior: _,
      });
  },
  _ = (_, { adjustments: _ = 0, behavior: _ }, _) => {
    var _, _;
    let _ = _ + _;
    (_ = (_ = _.scrollElement)?.scrollTo) == null ||
      _.call(_, {
        [_.options.horizontal ? `left` : `top`]: _,
        behavior: _,
      });
  },
  _ = class {
    constructor(_) {
      (this.unsubs = []),
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
          let _ = null,
            _ = () =>
              _ ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (_ = new this.targetWindow.ResizeObserver((_) => {
                    _.forEach((_) => {
                      let _ = () => {
                        this._measureElement(_.target, _);
                      };
                      this.options.useAnimationFrameWithResizeObserver
                        ? requestAnimationFrame(_)
                        : _();
                    });
                  })));
          return {
            disconnect: () => {
              var _;
              (_ = _()) == null || _.disconnect(), (_ = null);
            },
            observe: (_) =>
              _()?.observe(_, {
                box: `border-box`,
              }),
            unobserve: (_) => _()?.unobserve(_),
          };
        })()),
        (this.range = null),
        (this.setOptions = (_) => {
          Object.entries(_).forEach(([_, _]) => {
            _ === void 0 && delete _[_];
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
              getItemKey: _,
              rangeExtractor: _,
              onChange: () => {},
              measureElement: _,
              initialRect: {
                width: 0,
                height: 0,
              },
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
              ..._,
            });
        }),
        (this.notify = (_) => {
          var _, _;
          (_ = (_ = this.options).onChange) == null || _.call(_, this, _);
        }),
        (this.maybeNotify = _(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          (_) => {
            this.notify(_);
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
          this.unsubs.filter(Boolean).forEach((_) => _()),
            (this.unsubs = []),
            this.observer.disconnect(),
            (this.scrollElement = null),
            (this.targetWindow = null);
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          let _ = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== _) {
            if ((this.cleanup(), !_)) {
              this.maybeNotify();
              return;
            }
            (this.scrollElement = _),
              (this.targetWindow =
                this.scrollElement && `ownerDocument` in this.scrollElement
                  ? this.scrollElement.ownerDocument.defaultView
                  : (this.scrollElement?.window ?? null)),
              this.elementsCache.forEach((_) => {
                this.observer.observe(_);
              }),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, (_) => {
                  (this.scrollRect = _), this.maybeNotify();
                }),
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (_, _) => {
                  (this.scrollAdjustments = 0),
                    (this.scrollDirection = _
                      ? this.getScrollOffset() < _
                        ? `forward`
                        : `backward`
                      : null),
                    (this.scrollOffset = _),
                    (this.isScrolling = _),
                    this.maybeNotify();
                }),
              );
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
        (this.getFurthestMeasurement = (_, _) => {
          let _ = new Map(),
            _ = new Map();
          for (let _ = _ - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.has(_.lane)) continue;
            let _ = _.get(_.lane);
            if (
              (_ == null || _.end > _.end
                ? _.set(_.lane, _)
                : _.end < _.end && _.set(_.lane, !0),
              _.size === this.options.lanes)
            )
              break;
          }
          return _.size === this.options.lanes
            ? Array.from(_.values()).sort((_, _) =>
                _.end === _.end ? _.index - _.index : _.end - _.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = _(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (_, _, _, _, _) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            }
          ),
          {
            key: !1,
          },
        )),
        (this.getMeasurements = _(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: _,
              paddingStart: _,
              scrollMargin: _,
              getItemKey: _,
              enabled: _,
            },
            _,
          ) => {
            if (!_)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((_) => {
                this.itemSizeCache.set(_.key, _.size);
              }));
            let _ =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let _ = this.measurementsCache.slice(0, _);
            for (let _ = _; _ < _; _++) {
              let _ = _(_),
                _ =
                  this.options.lanes === 1
                    ? _[_ - 1]
                    : this.getFurthestMeasurement(_, _),
                _ = _ ? _.end + this.options.gap : _ + _,
                _ = _.get(_),
                _ = typeof _ == `number` ? _ : this.options.estimateSize(_),
                _ = _ + _,
                _ = _ ? _.lane : _ % this.options.lanes;
              _[_] = {
                index: _,
                start: _,
                size: _,
                end: _,
                key: _,
                lane: _,
              };
            }
            return (this.measurementsCache = _), _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.calculateRange = _(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (_, _, _, _) =>
            (this.range =
              _.length > 0 && _ > 0
                ? _({
                    measurements: _,
                    outerSize: _,
                    scrollOffset: _,
                    lanes: _,
                  })
                : null),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualIndexes = _(
          () => {
            let _ = null,
              _ = null,
              _ = this.calculateRange();
            return (
              _ && ((_ = _.startIndex), (_ = _.endIndex)),
              this.maybeNotify.updateDeps([this.isScrolling, _, _]),
              [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                _,
                _,
              ]
            );
          },
          (_, _, _, _, _) =>
            _ === null || _ === null
              ? []
              : _({
                  startIndex: _,
                  endIndex: _,
                  overscan: _,
                  count: _,
                }),
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.indexFromElement = (_) => {
          let _ = this.options.indexAttribute,
            _ = _.getAttribute(_);
          return _
            ? parseInt(_, 10)
            : (console.warn(
                `Missing attribute name '${_}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (_, _) => {
          let _ = this.indexFromElement(_),
            _ = this.measurementsCache[_];
          if (!_) return;
          let _ = _.key,
            _ = this.elementsCache.get(_);
          _ !== _ &&
            (_ && this.observer.unobserve(_),
            this.observer.observe(_),
            this.elementsCache.set(_, _)),
            _.isConnected &&
              this.resizeItem(_, this.options.measureElement(_, _, this));
        }),
        (this.resizeItem = (_, _) => {
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = _ - (this.itemSizeCache.get(_.key) ?? _.size);
          _ !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0
              ? _.start < this.getScrollOffset() + this.scrollAdjustments
              : this.shouldAdjustScrollPositionOnItemSizeChange(_, _, this)) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += _),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(_.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(_.key, _))),
            this.notify(!1));
        }),
        (this.measureElement = (_) => {
          _
            ? this._measureElement(_, void 0)
            : this.elementsCache.forEach((_, _) => {
                _.isConnected ||
                  (this.observer.unobserve(_), this.elementsCache.delete(_));
              });
        }),
        (this.getVirtualItems = _(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (_, _) => {
            let _ = [];
            for (let _ = 0, _ = _.length; _ < _; _++) {
              let _ = _[_[_]];
              _.push(_);
            }
            return _;
          },
          {
            key: !1,
            debug: () => this.options.debug,
          },
        )),
        (this.getVirtualItemForOffset = (_) => {
          let _ = this.getMeasurements();
          if (_.length !== 0)
            return _(_[_(0, _.length - 1, (_) => _(_[_]).start, _)]);
        }),
        (this.getOffsetForAlignment = (_, _, _ = 0) => {
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          _ === `auto` && (_ = _ >= _ + _ ? `end` : `start`),
            _ === `center` ? (_ += (_ - _) / 2) : _ === `end` && (_ -= _);
          let _ = this.getTotalSize() + this.options.scrollMargin - _;
          return Math.max(Math.min(_, _), 0);
        }),
        (this.getOffsetForIndex = (_, _ = `auto`) => {
          _ = Math.max(0, Math.min(_, this.options.count - 1));
          let _ = this.measurementsCache[_];
          if (!_) return;
          let _ = this.getSize(),
            _ = this.getScrollOffset();
          if (_ === `auto`) {
            if (_.end >= _ + _ - this.options.scrollPaddingEnd) _ = `end`;
            else if (_.start <= _ + this.options.scrollPaddingStart)
              _ = `start`;
            else return [_, _];
          }
          let _ =
            _ === `end`
              ? _.end + this.options.scrollPaddingEnd
              : _.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(_, _, _.size), _];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.scrollToOffset = (
          _,
          { align: _ = `start`, behavior: _ } = {},
        ) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getOffsetForAlignment(_, _), {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.scrollToIndex = (_, { align: _ = `auto`, behavior: _ } = {}) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            (_ = Math.max(0, Math.min(_, this.options.count - 1)));
          let _ = 0,
            _ = (_) => {
              if (!this.targetWindow) return;
              let _ = this.getOffsetForIndex(_, _);
              if (!_) {
                console.warn(`Failed to get offset for index:`, _);
                return;
              }
              let [_, _] = _;
              this._scrollToOffset(_, {
                adjustments: void 0,
                behavior: _,
              }),
                this.targetWindow.requestAnimationFrame(() => {
                  let _ = this.getScrollOffset(),
                    _ = this.getOffsetForIndex(_, _);
                  _
                    ? _(_[0], _) || _(_)
                    : console.warn(`Failed to get offset for index:`, _);
                });
            },
            _ = (_) => {
              this.targetWindow &&
                (_++,
                _ < 10
                  ? this.targetWindow.requestAnimationFrame(() => _(_))
                  : console.warn(
                      `Failed to scroll to index ${_} after 10 attempts.`,
                    ));
            };
          _(_);
        }),
        (this.scrollBy = (_, { behavior: _ } = {}) => {
          _ === `smooth` &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
            this._scrollToOffset(this.getScrollOffset() + _, {
              adjustments: void 0,
              behavior: _,
            });
        }),
        (this.getTotalSize = () => {
          let _ = this.getMeasurements(),
            _;
          if (_.length === 0) _ = this.options.paddingStart;
          else if (this.options.lanes === 1) _ = _[_.length - 1]?.end ?? 0;
          else {
            let _ = Array(this.options.lanes).fill(null),
              _ = _.length - 1;
            for (; _ >= 0 && _.some((_) => _ === null); ) {
              let _ = _[_];
              _[_.lane] === null && (_[_.lane] = _.end), _--;
            }
            _ = Math.max(..._.filter((_) => _ !== null));
          }
          return Math.max(
            _ - this.options.scrollMargin + this.options.paddingEnd,
            0,
          );
        }),
        (this._scrollToOffset = (_, { adjustments: _, behavior: _ }) => {
          this.options.scrollToFn(
            _,
            {
              behavior: _,
              adjustments: _,
            },
            this,
          );
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(_);
    }
  },
  _ = (_, _, _, _) => {
    for (; _ <= _; ) {
      let _ = ((_ + _) / 2) | 0,
        _ = _(_);
      if (_ < _) _ = _ + 1;
      else if (_ > _) _ = _ - 1;
      else return _;
    }
    return _ > 0 ? _ - 1 : 0;
  };
function _({ measurements: _, outerSize: _, scrollOffset: _, lanes: _ }) {
  let _ = _.length - 1,
    _ = (_) => _[_].start;
  if (_.length <= _)
    return {
      startIndex: 0,
      endIndex: _,
    };
  let _ = _(0, _, _, _),
    _ = _;
  if (_ === 1) for (; _ < _ && _[_].end < _ + _; ) _++;
  else if (_ > 1) {
    let _ = Array(_).fill(0);
    for (; _ < _ && _.some((_) => _ < _ + _); ) {
      let _ = _[_];
      (_[_.lane] = _.end), _++;
    }
    let _ = Array(_).fill(_ + _);
    for (; _ >= 0 && _.some((_) => _ >= _); ) {
      let _ = _[_];
      (_[_.lane] = _.start), _--;
    }
    (_ = Math.max(0, _ - (_ % _))), (_ = Math.min(_, _ + (_ - 1 - (_ % _))));
  }
  return {
    startIndex: _,
    endIndex: _,
  };
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = typeof document < `u` ? _.useLayoutEffect : _.useEffect;
function _(_) {
  let _ = _.useReducer(() => ({}), {})[1],
    _ = {
      ..._,
      onChange: (_, _) => {
        var _;
        _ ? (0, _.flushSync)(_) : _(),
          (_ = _.onChange) == null || _.call(_, _, _);
      },
    },
    [_] = _.useState(() => new _(_));
  return (
    _.setOptions(_), _(() => _._didMount(), []), _(() => _._willUpdate()), _
  );
}
function _(_) {
  return _({
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    ..._,
  });
}
function _(_) {
  return _({
    getScrollElement: () => (typeof document < `u` ? window : null),
    observeElementRect: _,
    observeElementOffset: _,
    scrollToFn: _,
    initialOffset: () => (typeof document < `u` ? window.scrollY : 0),
    ..._,
  });
}
var _ = `F0yrVzJ4EkQ-`,
  _ = `EYebA7kYJcU-`,
  _ = `kTBEffSCimA-`,
  _ = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `k03Dln9WiwM-`,
  _ = _(),
  _ = _.memo(function (_) {
    let {
        virtualizer: _,
        bDynamic: _,
        scrollAlign: _,
        bNativeScrollIntoView: _,
        idx: _,
        rowGap: _,
        renderItem: _,
      } = _,
      _ = _.useCallback(
        (_, _, _) => (
          _.scrollToIndex(_, {
            align: _,
          }),
          !0
        ),
        [_, _, _],
      );
    return (0, _.jsx)(_, {
      ref: _ ? _.measureElement : void 0,
      navKey: `VirtualizedListIndex-${_}`,
      "data-index": _,
      fnScrollIntoViewHandler: _ ? void 0 : _,
      scrollIntoViewWhenChildFocused: `force`,
      style: {
        width: `100%`,
        paddingBottom: _,
      },
      children: _(_),
    });
  });
function _(_) {
  return _(
    (_) => {
      if (!_) return;
      let _ = new _.ownerDocument.defaultView.ResizeObserver((_) => {
          _(_[0]);
        }),
        _ = [],
        _ = _;
      for (; _ && _ != null; ) _.observe(_), _.push(_), (_ = _.parentElement);
      return () => {
        _.forEach((_) => _.unobserve(_));
      };
    },
    [_],
  );
}
function _(_, _) {
  let _ = _.getBoundingClientRect().top;
  return _
    ? _ - _.getBoundingClientRect().top - _.clientTop + _.scrollTop
    : _ + (_.ownerDocument.defaultView?.scrollY ?? 0);
}
var _ = _.forwardRef(function (_, _) {
  let {
      nRows: _,
      nItemHeight: _,
      nRowGap: _,
      overscan: _,
      renderItem: _,
      getItemKey: _,
      bDynamic: _,
      measureElement: _,
      className: _,
      forceVirtualizeType: _,
      hintVirtualizeType: _,
      scrollAlign: _,
      bNativeScrollIntoView: _,
      bNoOverscanOffscreen: _,
      bBrowserScrollAnchoring: _,
      initialOffset: _,
      onOffsetChange: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(_ ?? _),
    [_, _] = _.useState(),
    [_, _] = _.useState(),
    [_, _] = _.useState(),
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        if (!_) return;
        let _ = _(_, `y`),
          _ = _(_, _ == `window` ? null : _),
          _ = _?.getBoundingClientRect(),
          _ = () => {
            _ != `window` &&
              (_(_ || void 0),
              _((_) => {
                if (!_) return;
                let _ = Math.round(_.width),
                  _ = Math.round(_.height);
                return _?.width == _ && _?.height == _
                  ? _
                  : {
                      width: _,
                      height: _,
                    };
              })),
              _(_),
              _ || _(_ ? `element` : `window`);
          };
        _ ? _() : (0, _.startTransition)(_);
      },
      [_, _],
    ),
    _ = _.useRef(_);
  _.current = _;
  let _ = _(
      _.useCallback(() => {
        if (!_.current) return;
        let _ = _(_.current, _.current);
        (0, _.startTransition)(() => {
          _(_);
        });
      }, []),
    ),
    _ = _(_, _, _, _),
    _ = {
      nRows: _,
      nItemHeight: _,
      nRowGap: _,
      overscan: _,
      renderItem: _,
      getItemKey: _,
      bDynamic: _,
      measureElement: _,
      forceVirtualizeType: _,
      hintVirtualizeType: _,
      scrollAlign: _,
      bNativeScrollIntoView: _,
      bNoOverscanOffscreen: _,
      bBrowserScrollAnchoring: _,
      initialOffset: _,
      onOffsetChange: _,
    };
  return (0, _.jsx)(_, {
    className: _,
    ref: _,
    ..._,
    children: (0, _.jsxs)(_.Suspense, {
      children: [
        _ === `element` &&
          (0, _.jsx)(_, {
            ..._,
            nScrollMargin: _,
            elScrollable: _,
            rectScrollable: _,
          }),
        _ === `window` &&
          (0, _.jsx)(_, {
            ..._,
            nScrollMargin: _,
          }),
      ],
    }),
  });
});
function _(_, _, _) {
  _.useEffect(() => {
    _ ||
      (0, _.startTransition)(() => {
        _.measure();
      });
  }, [_, _, _]);
}
function _(_, _, _) {
  if (!_) return `first`;
  let _ = _.options.scrollMargin,
    _ = _ + _.getTotalSize(),
    _ = _.scrollOffset ?? 0;
  return _ > _ + (_.scrollRect ?? _.options.initialRect).height + _
    ? `first`
    : _ < _ - _
      ? `last`
      : `all`;
}
function _(_, _, _) {
  let [, _] = (0, _.useState)(0),
    _ = _.useRef({
      bPositionKnown: _,
      nMargin: _,
      eRowWindow: `all`,
    });
  (_.current.bPositionKnown = _), (_.current.nMargin = _);
  let _ = _.useCallback(
    (_, _) =>
      _(_, (_, _) => {
        _(_, _);
        let { bPositionKnown: _, nMargin: _, eRowWindow: _ } = _.current;
        _(_, _, _) != _ && _((_) => _ + 1);
      }),
    [],
  );
  return {
    observeElementOffset: _ ? _ : _,
    fnGetRowWindow: (_) => {
      let _ = _ ? _(_, _, _) : `all`;
      return (_.current.eRowWindow = _), _;
    },
  };
}
function _(_) {
  let {
    nScrollMargin: _,
    nRows: _,
    nItemHeight: _,
    nRowGap: _ = 10,
    overscan: _ = 6,
    initialOffset: _,
    onOffsetChange: _,
    measureElement: _,
    getItemKey: _,
    bDynamic: _,
    bNoOverscanOffscreen: _,
    bBrowserScrollAnchoring: _,
  } = _;
  _();
  let _ = _ + _,
    { observeElementOffset: _, fnGetRowWindow: _ } = _(_, _ !== void 0, _ * _),
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.useCallback(() => _, [_]),
      measureElement: _,
      getItemKey: _,
      overscan: _,
      initialOffset: _ ?? (() => window.scrollY),
      initialRect: void 0,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    (_.shouldAdjustScrollPositionOnItemSizeChange = (_) =>
      !_ && _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
    _(_, _, _),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
      eRowWindow: _(_),
    })
  );
}
function _(_) {
  let {
      nRows: _,
      nScrollMargin: _,
      elScrollable: _,
      rectScrollable: _,
      nItemHeight: _,
      nRowGap: _ = 10,
      overscan: _ = 6,
      initialOffset: _,
      onOffsetChange: _,
      measureElement: _,
      getItemKey: _,
      bDynamic: _,
      bNoOverscanOffscreen: _,
      bBrowserScrollAnchoring: _,
    } = _,
    _ = _ + _,
    _ = _(),
    { observeElementOffset: _, fnGetRowWindow: _ } = _(
      _,
      _ !== void 0 && _ !== void 0,
      _ * _,
    ),
    _ = _({
      count: _,
      scrollMargin: _ ?? 0,
      getScrollElement: () => (
        _ &&
          _.scrollElement !== _ &&
          _ === void 0 &&
          (_.scrollOffset = _.scrollTop),
        _ ?? null
      ),
      estimateSize: _.useCallback(() => _, [_]),
      measureElement: _,
      getItemKey: _,
      overscan: _,
      initialRect: _
        ? _
        : {
            height: _.viewportHeight?.value ?? 1e3,
            width: _.viewportWidth?.value ?? 1e3,
          },
      initialOffset: _,
      observeElementOffset: _,
      observeElementRect: _,
      onChange(_, _) {
        _?.(_.scrollOffset);
      },
    });
  return (
    (_.shouldAdjustScrollPositionOnItemSizeChange = (_) =>
      !_ && _ !== void 0 && _.start < (_.scrollOffset ?? 0)),
    _(_, _, _),
    (0, _.jsx)(_, {
      ..._,
      virtualizer: _,
      eRowWindow: _(_),
    })
  );
}
function _(_) {
  let {
      virtualizer: _,
      eRowWindow: _,
      nRowGap: _,
      renderItem: _,
      bDynamic: _,
      scrollAlign: _ = `center`,
      bNativeScrollIntoView: _,
    } = _,
    _ = _.getVirtualItems(),
    _ =
      _ == `first`
        ? _.measurementsCache[0]
        : _.measurementsCache[_.measurementsCache.length - 1],
    _ = _ == `all` ? _ : _ ? [_] : [],
    _ = _.length ? _[0].start - _.options.scrollMargin : 0,
    _ = Math.max(0, _.getTotalSize());
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    style: {
      height: `${_}px`,
      width: `100%`,
      position: `relative`,
    },
    children: (0, _.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${_}px )`,
      },
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            virtualizer: _,
            bDynamic: _,
            scrollAlign: _,
            bNativeScrollIntoView: _,
            idx: _.index,
            rowGap: _,
            renderItem: _,
          },
          _.key,
        ),
      ),
    }),
  });
}
function _(_) {
  return (..._) => {
    queueMicrotask(() => {
      (0, _.startTransition)(() => {
        _(..._);
      });
    });
  };
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _;
  _ =
    `scrollX` in _
      ? _((_) => _(_[_.options.horizontal ? `scrollX` : `scrollY`], _))
      : _((_) => _(_[_.options.horizontal ? `scrollLeft` : `scrollTop`], _));
  let _ = () => _(!0),
    _ = () => _(!1);
  return (
    _(),
    _.addEventListener(`scroll`, _, {
      passive: !0,
    }),
    _.addEventListener(`scrollend`, _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener(`scroll`, _), _.removeEventListener(`scrollend`, _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _(() =>
    _({
      width: _.innerWidth,
      height: _.innerHeight,
    }),
  );
  return (
    _(),
    _.addEventListener(`resize`, _, {
      passive: !0,
    }),
    () => {
      _.removeEventListener(`resize`, _);
    }
  );
}
function _(_, _) {
  let _ = _.scrollElement;
  if (!_) return;
  let _ = _((_) =>
    _({
      width: Math.round(_.width),
      height: Math.round(_.height),
    }),
  );
  _(_.getBoundingClientRect());
  let _ = _.ownerDocument.defaultView;
  if (!_?.ResizeObserver) return () => {};
  let _ = new _.ResizeObserver((_) => {
    _[0]?.borderBoxSize[0]
      ? _({
          width: _[0].borderBoxSize[0].inlineSize,
          height: _[0].borderBoxSize[0].blockSize,
        })
      : _(_.getBoundingClientRect());
  });
  return (
    _.observe(_, {
      box: `border-box`,
    }),
    () => {
      _.unobserve(_);
    }
  );
}
function _(_) {
  let {
      idxStart: _,
      idxEnd: _,
      renderItem: _,
      height: _,
      itemWidth: _,
      columnGap: _,
    } = _,
    _ = [];
  for (let _ = _; _ < _; _++) _.push(_(_, _));
  return (0, _.jsx)(_, {
    className: _,
    style: {
      height: _,
      gap: _,
    },
    children: _,
  });
}
function _(_) {
  let {
      nItems: _,
      renderItem: _,
      nAspectRatio: _,
      nColumns: _ = 7,
      nColumnGap: _ = 10,
      nRowGap: _ = 10,
      onWidthChanged: _,
    } = _,
    [_, _] = _.useState(0),
    _ = Math.ceil(_ / _),
    _ = Math.max(0, Math.floor((_ - (_ - 1) * _) / _)),
    _ = Math.floor(_ / _),
    _ = _.useCallback(
      (_) => {
        _(_.borderBoxSize[0].inlineSize),
          _ &&
            _(
              _.target.ownerDocument.defaultView?.innerWidth || 0,
              _.borderBoxSize[0].inlineSize,
            );
      },
      [_],
    ),
    _ = _(_);
  return (0, _.jsx)(_, {
    ref: _,
    nRows: _,
    nItemHeight: _,
    nRowGap: _,
    renderItem: (_) =>
      (0, _.jsx)(
        _,
        {
          idxStart: _ * _,
          idxEnd: Math.min(_, (_ + 1) * _),
          height: _,
          itemWidth: _,
          columnGap: _,
          renderItem: _,
        },
        _,
      ),
  });
}
var _ = _(_(), 1);
function _(_) {
  let { app: _, width: _, index: _, renderItem: _ } = _,
    [_, _] = _.useState(`loading`),
    _ = _(_.appid);
  if (_ === void 0) return null;
  let _ = _ == `error` || !_,
    _;
  return (
    (_ = _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: _,
              alt: _.name,
              loading: `lazy`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.name,
            }),
          ],
        })
      : (0, _.jsx)(`img`, {
          className: _,
          src: _,
          alt: _.name,
          onLoad: () => _(`loaded`),
          onError: () => _(`error`),
        })),
    _(_, _, {
      className: (0, _.default)(_, (_ || _ == `loaded`) && `VrF8YC9c1R8-`),
      style: {
        width: _,
      },
      fnScrollIntoViewHandler: () => !0,
      children: _,
    })
  );
}
function _(_) {
  let { rgApps: _, renderItem: _, ..._ } = _,
    _ = _.useCallback(
      (_, _) => {
        let _ = _[_];
        return (0, _.jsx)(
          _,
          {
            app: _,
            width: _,
            index: _,
            renderItem: _,
          },
          _.appid,
        );
      },
      [_, _],
    );
  return (0, _.jsx)(_, {
    nItems: _.length,
    renderItem: _,
    nAspectRatio: 600 / 900,
    ..._,
  });
}
var _ = `Y40SQPXX5oQ-`,
  _ = `zCRrFtmBzfE-`,
  _ = `L5LbiQQqjag-`,
  _ = `qmn8k6ba2eU-`,
  _ = `KoZvs-2luog-`,
  _ = `cuyTu9NS4KM-`,
  _ = `iWLBT-TcMv4-`,
  _ = `niLIWmhI1js-`,
  _ = `oopo3Ku8mhg-`,
  _ = `CxU4ntOFsQQ-`,
  _ = `_9osVXUhcbdU-`,
  _ = `NIvLAfv4LAU-`,
  _ = `GlXtC9FjEn0-`,
  _ = `giqUsooCFVw-`,
  _ = `p3HBhguzwZk-`,
  _ = `j4i41f9JjvI-`,
  _ = `O3Jk02D0k5M-`,
  _ = `lZjvDTc7fbY-`,
  _ = `BWetszd5oQ8-`,
  _ = `G57tn4BJPXw-`;
function _(_) {
  return {
    queryKey: [`communitypreferences`],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetCommunityPreferences(_, _);
      if (_.GetEResult() != 1)
        throw Error(
          `Error from GetCommunityPreferences: ${_.GetEResult()} ${_.GetErrorMessage()}`,
        );
      return _.Body();
    },
    staleTime: 3e5,
  };
}
function _() {
  let _ = _();
  return _(_(_));
}
function _(_) {
  return (0, _.jsx)(_, {});
}
function _(_) {
  return (0, _.jsx)(_, {});
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _(_, _.className),
    children: _.role == 2 ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.data?.get(new _(_).GetAccountID()),
    _ = _.data?.preferences().parenthesize_nicknames();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.data?.m_strPlayerName || `\xA0`,
      ` `,
      _ &&
        _ &&
        (0, _.jsxs)(`span`, {
          className: void 0,
          children: [`(`, _, `)`],
        }),
    ],
  });
}
function _(_) {
  let { role: _, persona: _, isSelf: _ } = _,
    _ = _.size || `Large`,
    _ = _(),
    _ = _(),
    _ = _.data?.get(_.GetAccountID()),
    _ = _.data?.preferences().parenthesize_nicknames();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: void 0,
            persona: _,
            size: _,
            statusPosition: `right`,
          }),
          (0, _.jsx)(_, {
            className: _,
            bIsSelf: _,
            bHideStatus: !1,
            bHidePersona: !1,
            bParenthesizeNicknames: _,
            bCompactView: !1,
            persona: _,
            strNickname: _,
            eFriendRelationship: 3,
            bEllipsisName: !0,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: void 0,
            role: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#FamilyManagement_Role_${_}`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = (0, _.useContext)(_);
  return _.errorMessage
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.errorMessage,
      })
    : null;
}
function _(_) {
  let { persona: _, role: _, invitePending: _ } = _,
    _ = _() == _.GetSteamIDAsString();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        role: _,
        persona: _,
        isSelf: _,
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `AlTotQVWTmI-`,
          children: _(`#FamilyManagement_InvitePending`),
        }),
      _ &&
        (0, _.jsx)(`span`, {
          className: `BeFK8ZlH3Wk-`,
          children: _(`#FamilyManagement_Me`),
        }),
    ],
  });
}
function _(_, _) {
  return new URLSearchParams(_.search).get(_);
}
var _ = `invitation`,
  _ = `nonce`;
function _(_) {
  let { cooldownSecondsRemaining: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(
      `#FamilyManagement_CooldownAllowed`,
      _(Date.now() / 1e3 + _, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        weekday: void 0,
      }),
    ),
  });
}
function _(_) {
  let { inviterSteamID: _, familyGroupID: _, role: _, inviteID: _ } = _,
    _ = _(),
    _ = _(_),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(``),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorLoadFamilyInviteGeneric`);
  let _ = _(),
    _ = !!_(_(), _);
  _(_, `#FamilyManagement_ErrorAcceptInvite`, _.k_EFamilyQueryJoinFamily),
    _(_, `#FamilyManagement_ErrorDeclineInvite`, _.k_EFamilyQueryDeclineInvite);
  let _ = _();
  if (
    (_.isSuccess &&
      (_.data.is_not_member_of_any_group() ||
        _.push(`/account/familymanagement`)),
    _.isError)
  )
    return null;
  if (_.isLoading)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}),
    });
  let _ = () => {
      _(null),
        _.mutate(null, {
          onSuccess: (_) => {
            _.cooldown_skip_granted() && _(!0),
              _.two_factor_method() === 1
                ? _.IN_MOBILE_WEBVIEW
                  ? (window.location.href = `steammobile://confirmations?first_of_type=11`)
                  : _(`awaitmobile2fa`)
                : _.two_factor_method() === 2
                  ? _(`awaitemail2fa`)
                  : _.push(`/account/familymanagement`);
          },
        });
    },
    _ = () => {
      _(null), _.mutate(), _ && _.push(`/account/familymanagement`);
    },
    _ = _.data,
    _ = () => _(!1),
    _ = () => _.push(`/account/familymanagement`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        active: !!_,
        children: [
          _ === `explanation` &&
            (0, _.jsxs)(_, {
              title: _(`#FamilyManagement_RoleDescriptionLongHeader_${_}`),
              closeModal: _,
              children: [
                _ === 1 ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _(`#FamilyManagement_Close`),
                }),
              ],
            }),
          _ === `confirm` &&
            (0, _.jsx)(_, {
              closeModal: _,
              onCancel: _,
              onOK: _,
              strTitle: _(`#FamilyManagement_ConfirmJoinDialog`),
              children: _(
                `#FamilyManagement_ConfirmJoin_${_}`,
                (0, _.jsx)(`b`, {}),
              ),
            }),
          _ === `awaitmobile2fa` &&
            (0, _.jsxs)(_, {
              title: _(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: _(
                    ((_) =>
                      _
                        ? _.IN_MOBILE_WEBVIEW
                          ? `#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp`
                          : `#FamilyManagement_Await2FAForJoin_Description_Mobile`
                        : `#FamilyManagement_Await2FAForJoin_Description_Email`)(
                      _ === `awaitmobile2fa`,
                    ),
                  ),
                }),
                _ &&
                  (0, _.jsx)(_, {
                    cooldownSecondsRemaining:
                      _.data.cooldown_seconds_remaining(),
                  }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `NIvLAfv4LAU-`,
                    children: _(`#FamilyManagement_CooldownAllowed_2_Join`),
                  }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _(`#FamilyManagement_Close`),
                }),
              ],
            }),
          _ === `awaitemail2fa` &&
            (0, _.jsxs)(_, {
              title: _(`#FamilyManagement_Await2FAForJoin_Header`),
              closeModal: _,
              children: [
                _ === 2 &&
                  (0, _.jsxs)(_, {
                    className: `PYI2fW8ZVOY-`,
                    children: [
                      (0, _.jsx)(_, {
                        className: `NIvLAfv4LAU-`,
                        children: _(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_1`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        className: `NIvLAfv4LAU-`,
                        children: _(
                          `#FamilyManagement_Await2FAForJoin_ChildWarning_2`,
                          (0, _.jsx)(`a`, {
                            href: `${_.HELP_BASE_URL}/wizard/HelpChangePassword`,
                          }),
                        ),
                      }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  className: `NIvLAfv4LAU-`,
                  children: _(
                    `#FamilyManagement_Await2FAForJoin_Description_Email`,
                  ),
                }),
                (0, _.jsx)(_, {
                  className: `e61iZLcZtvg-`,
                  children: (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    onChange: (_) => {
                      _(_.target.value), _(null);
                    },
                    value: _,
                    placeholder: _(
                      `#FamilyManagement_Await2FAForJoin_InputPlaceholder`,
                    ),
                    maxLength: 128,
                  }),
                }),
                (0, _.jsxs)(_, {
                  className: `_5ru43GZ9T0M-`,
                  children: [
                    (0, _.jsx)(_, {
                      onClick: async () => {
                        _.mutateAsync(_).then(_);
                      },
                      children: _(
                        `#FamilyManagement_AwaitCodeFromEmail_Confirm`,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      onClick: _,
                      children: _(
                        `#FamilyManagement_AwaitCodeFromEmail_Cancel`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          _ == `alreadyaccepted` &&
            (0, _.jsxs)(_, {
              title: _(`#FamilyManagement_AlreadyAccepted_Header`),
              closeModal: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: `NIvLAfv4LAU-`,
                  children: _(`#FamilyManagement_AlreadyAccepted_Text`),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _(`#FamilyManagement_Close`),
                }),
              ],
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`a`, {
            className: void 0,
            href: _.GetCommunityProfileURL(),
            children: (0, _.jsx)(_, {
              className: _,
              persona: _,
              size: `Large`,
              statusPosition: `right`,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _(
              _ === 1
                ? `#FamilyManagement_PendingFamilyInviteInviteText_Adult`
                : `#FamilyManagement_PendingFamilyInviteInviteText_Child`,
              (0, _.jsx)(`a`, {
                className: void 0,
                href: _.GetCommunityProfileURL(),
                children: (0, _.jsx)(`span`, {
                  className: _,
                  children: _?.m_strPlayerName,
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                    role: _,
                  }),
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _(`#FamilyManagement_Role_${_}`),
                  }),
                ],
              }),
            ),
          }),
        ],
      }),
      _ == 1 &&
        (0, _.jsx)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: (0, _.jsx)(`p`, {
            children: _(
              `#FamilyManagement_RoleDescriptionShort_Adult`,
              (0, _.jsx)(`span`, {
                className: `iWLBT-TcMv4-`,
              }),
              (0, _.jsx)(`a`, {
                className: `fcwjI2x1EM0-`,
                onClick: () => _(`explanation`),
              }),
            ),
          }),
        }),
      _ == 2 &&
        (0, _.jsxs)(`div`, {
          className: `zvWwBXuj4Us-`,
          children: [
            (0, _.jsx)(`p`, {
              children: _(
                `#FamilyManagement_RoleDescriptionShort_Child`,
                (0, _.jsx)(`span`, {
                  className: `iWLBT-TcMv4-`,
                }),
                (0, _.jsx)(`a`, {
                  className: `fcwjI2x1EM0-`,
                  onClick: () => _(`explanation`),
                }),
              ),
            }),
            (0, _.jsxs)(`ul`, {
              className: `y1l6NhH-DV4-`,
              children: [
                (0, _.jsx)(`li`, {
                  children: _(`#FamilyManagement_RoleDescriptionShort_Child_1`),
                }),
                (0, _.jsx)(`li`, {
                  children: _(`#FamilyManagement_RoleDescriptionShort_Child_2`),
                }),
                (0, _.jsx)(`li`, {
                  children: _(`#FamilyManagement_RoleDescriptionShort_Child_3`),
                }),
              ],
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            onClick: () => _(`confirm`),
            children: _(`#FamilyManagement_AcceptInviteButton`),
          }),
          (0, _.jsx)(_, {
            className: _,
            onClick: _,
            children: _(`#FamilyManagement_DeclineInviteButton`),
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _(`account_settings_container`),
    children: [
      (0, _.jsx)(`p`, {
        children: _(`#FamilyManagement_AdultDescription_1`),
      }),
      (0, _.jsx)(`p`, {
        children: _(`#FamilyManagement_AdultDescription_2`),
      }),
      (0, _.jsxs)(`ul`, {
        children: [
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_AdultDescription_3`),
          }),
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_AdultDescription_4`),
          }),
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_AdultDescription_5`),
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _(`account_settings_container`),
    children: [
      (0, _.jsx)(`p`, {
        children: _(`#FamilyManagement_ChildDescription_1`),
      }),
      (0, _.jsxs)(`ul`, {
        children: [
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_ChildDescription_2`),
          }),
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_ChildDescription_3`),
          }),
          (0, _.jsx)(`li`, {
            children: _(`#FamilyManagement_ChildDescription_4`),
          }),
        ],
      }),
      (0, _.jsx)(`p`, {
        children: _(`#FamilyManagement_ChildDescription_5`),
      }),
    ],
  });
}
var _ = `familyid`,
  _ = `invite`;
function _() {
  let _ = _(),
    _ = _(),
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_, _);
  return (
    _(_, _, _).mutate(null, {
      onSuccess: () => _.push(`/account/familymanagement`),
    }),
    (0, _.jsx)(_, {})
  );
}
var _ = `GgRcoJkBp2M-`,
  _ = `zQlOx4nbipE-`,
  _ = `YbaWsmdnzFc-`,
  _ = `b-MA-Yvg7Qo-`,
  _ = `_2YQN1GiqfGk-`,
  _ = `TmhoSaLpJFQ-`,
  _ = `xJTOQ481NXA-`,
  _ = `KR6LcgQwd0A-`,
  _ = `UUWCl9G6jT4-`,
  _ = `h4of3OtdDco-`,
  _ = `GKpyofqaoJw-`,
  _ = `MBXSJd-rZFs-`,
  _ = `sOxlykuOBOQ-`,
  _ = `s7hRiIihIEs-`,
  _ = `_4suPU-6CM1E-`,
  _ = `Pjng-K5PwOk-`,
  _ = `sL-vIk-k1rQ-`,
  _ = `T5JpFOy8mno-`,
  _ = `PXvDMnEMI9M-`,
  _ = `_4utYhFQr0cY-`,
  _ = `_8tN8sPDXurg-`,
  _ = `FQcM42O2G1E-`;
function _(_) {
  return new URLSearchParams(_.search).get(`inviteuser`);
}
function _(_) {
  let { familyGroupID: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(_(_)),
    [_, _] = (0, _.useState)(_ == null ? `splash` : `selectRole`),
    _ = _(_),
    _ =
      _.data.slot_cooldown_remaining_seconds() > 0 &&
      _.data.slot_cooldown_overrides() === 0,
    _ = (_) => {
      _(_), _(`selectRole`);
    };
  return _ === `splash`
    ? (0, _.jsx)(_, {
        onClick: () => _(`selectMethod`),
      })
    : _ === `selectMethod` && !_
      ? (0, _.jsx)(_, {
          familyGroupID: _,
          onCancel: () => _(`splash`),
          onSelect: _,
        })
      : _ === `selectMethod` && _
        ? (0, _.jsx)(_, {
            slotCooldownSeconds: _.data.slot_cooldown_remaining_seconds(),
            familyGroupID: _,
            onCancel: () => _(`splash`),
            onSelect: _,
          })
        : _ === `selectRole`
          ? (0, _.jsx)(_, {
              familyGroupID: _,
              steamid: _,
              onCancel: () => _(`splash`),
            })
          : null;
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(_, {
      noFocusRing: !1,
      className: _,
      onClick: _.onClick,
      children: [
        _({}),
        (0, _.jsx)(`span`, {
          children: _(`#FamilyManagement_InviteAMember`),
        }),
      ],
    }),
  });
}
function _(_) {
  let { familyGroupID: _, onSelect: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _();
  _(
    _,
    `#FamilyManagement_ErrorLoadUsersSharingDevice`,
    _.k_EFamilyQueryGetUsersSharingDevice,
  );
  let _ = _.data
    ?.users()
    .filter((_) => !_.data?.pending_invites().some((_) => _.steamid() == _))
    .filter((_) => _.data?.indexOf(_) === -1);
  return _.isError || _?.length == 0 || !_.isSuccess
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#FamilyManagement_PreviousUsers`),
          }),
          _.isLoading
            ? (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              })
            : (0, _.jsx)(_, {
                steamids: _,
                onSelect: _,
              }),
        ],
      });
}
function _(_) {
  let { familyGroupID: _, onSelect: _, onCancel: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onClick: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_InviteAMember`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_InviteMethodText`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          familyGroupID: _,
          onSelect: _,
        }),
      }),
      (0, _.jsx)(_, {
        familyGroupID: _,
        onSelect: _,
      }),
    ],
  });
}
function _(_) {
  let {
      familyGroupID: _,
      onSelect: _,
      onCancel: _,
      slotCooldownSeconds: _,
    } = _,
    _ = (0, _.useRef)(_(Math.floor(new Date().getTime() / 1e3) + _, !1, !0)),
    _ = _(_),
    _ = _();
  if (!_.isSuccess) return null;
  let _ = _.data
    .former_members()
    .map((_) => _.steamid())
    .filter((_) => _.data.indexOf(_) === -1);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        noFocusRing: !1,
        onClick: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_InviteAMember`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_CooldownAndReinvite`, _.current),
      }),
      (0, _.jsx)(_, {
        steamids: _,
        onSelect: _,
      }),
    ],
  });
}
function _(_) {
  let { familyGroupID: _, steamid: _, onCancel: _ } = _,
    { setErrorMessage: _ } = _(),
    _ = _(_);
  _(_, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(null),
    _ = _(_, _, _);
  _(_, `#FamilyManagement_ErrorInvite`, _.k_EFamilyQueryInviteToFamily);
  let _ = () => {
    _.mutateAsync(null, {
      onSuccess: (_) => {
        _.two_factor_method() === 0
          ? _()
          : _.two_factor_method() === 1
            ? _(`awaitmobile2fa`)
            : _.two_factor_method() === 2 && _(`awaitemail2fa`);
      },
    });
  };
  if (_.isLoading)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}),
    });
  let _ = _.data,
    _ = (_) => {
      _(``), _(_);
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        active: _ !== 0,
        children:
          _ === `awaitmobile2fa` || _ === `awaitemail2fa`
            ? (0, _.jsx)(_, {
                onClose: _,
                eMethod: _ === `awaitemail2fa` ? 2 : 1,
              })
            : (0, _.jsx)(_, {
                steamid: _,
                role: _,
                onCancel: () => _(0),
                onConfirm: _,
              }),
      }),
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#FamilyManagement_Invite`),
          }),
          (0, _.jsx)(_, {
            className: _,
            persona: _,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _?.m_strPlayerName,
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_ChooseRole`),
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            role: 1,
            onSelect: () => _(1),
          }),
          (0, _.jsx)(_, {
            role: 2,
            onSelect: () => _(2),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { eMethod: _, onClose: _ } = _,
    _;
  if (_ === 1 && _.IN_MOBILE_WEBVIEW)
    _ = `#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp`;
  else if (_ === 1) _ = `#FamilyManagement_Await2FAForInvite_MobileAuth`;
  else if (_ === 2) _ = `#FamilyManagement_Await2FAForInvite_EmailAuth`;
  else return null;
  return (0, _.jsxs)(_, {
    bAlertDialog: !0,
    onOK: _,
    closeModal: _,
    strTitle: _(`#FamilyManagement_ConfirmInviteTitle`),
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      }),
    ],
  });
}
function _(_) {
  let { onCancel: _, onConfirm: _, steamid: _, role: _ } = _,
    _ = _(_).data;
  return (0, _.jsxs)(_, {
    onCancel: _,
    strTitle: _(`#FamilyManagement_ConfirmInviteTitle`),
    onOK: _,
    strOKButtonText: _(`#FamilyManagement_Invite`),
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            persona: _,
            size: `Large`,
            statusPosition: `right`,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _?.m_strPlayerName,
          }),
          (0, _.jsx)(_, {
            className: _,
            role: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#FamilyManagement_Role_${_}`),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FamilyManagement_ConfirmInvite`),
      }),
    ],
  });
}
function _(_) {
  let { familyGroupID: _, onSelect: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_)
      .data.members()
      .map((_) => _.steamid());
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          title: _(`#FamilyManagement_InviteMethodFriend`),
          className: _,
          onCancel: () => _(!1),
          children: (0, _.jsx)(_, {
            setSelectedFriendSteamID: _,
            excludeSteamIDs: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        noFocusRing: !1,
        onClick: () => _(!0),
        children: _(`#FamilyManagement_InviteMethodFriend`),
      }),
    ],
  });
}
function _(_) {
  let { steamids: _, onSelect: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    "flow-children": `grid`,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          steamid: _,
          onClick: () => _(_),
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { steamid: _, onClick: _ } = _,
    _ = new _(_),
    _ = _(_),
    _ = _(),
    _ = _().data?.preferences().parenthesize_nicknames(),
    _ = _.data?.get(_.GetAccountID());
  if ((_(_, `#FamilyManagement_ErrorLoadFamilyGeneric`), _.isLoading))
    return null;
  let _ = _.data;
  return (0, _.jsxs)(_, {
    className: _,
    onActivate: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          className: _,
          persona: _,
          size: `Large`,
          statusPosition: `right`,
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        bParenthesizeNicknames: _,
        bIsSelf: !1,
        bHideStatus: !0,
        bHidePersona: !1,
        bCompactView: !1,
        persona: _,
        strNickname: _,
        eFriendRelationship: 3,
      }),
    ],
  });
}
function _(_) {
  let { role: _, onSelect: _ } = _;
  return (0, _.jsxs)(_, {
    className: _(_),
    noFocusRing: !1,
    onClick: () => _(_),
    children: [
      _ == 2 ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
      (0, _.jsx)(`span`, {
        children: _(`#FamilyManagement_InviteAsRoleButton_${_}`),
      }),
    ],
  });
}
function _(_) {
  let { setSelectedFriendSteamID: _, excludeSteamIDs: _ } = _,
    _ = _();
  _(_, `#FamilyManagement_ErrorLoadFriendListGeneric`);
  let _ = _.data;
  return _.isLoading
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : _.isError
      ? null
      : (0, _.jsx)(_, {
          setSelectedFriendSteamID: _,
          steamIDs: _,
          excludeSteamIDs: _,
        });
}
function _(_) {
  let { setSelectedFriendSteamID: _, steamIDs: _, excludeSteamIDs: _ } = _,
    _ = _(_),
    _ = _(),
    _ = _(),
    [_, _] = _.useState(``),
    _ = _.data?.preferences().parenthesize_nicknames(),
    _ = _.useCallback(
      (_, _) => {
        let _ = _.persona.m_strPlayerName,
          _ = _.persona.m_strPlayerName;
        return (
          _ || (_.nickname && (_ = _.nickname), _.nickname && (_ = _.nickname)),
          _(_, _) ||
            _.persona.m_steamid.GetAccountID() -
              _.persona.m_steamid.GetAccountID()
        );
      },
      [_],
    ),
    _ = (0, _.useMemo)(
      () =>
        _.map((_) => _.data)
          .filter((_) => !!_)
          .filter(
            (_) =>
              _ == `` ||
              _(
                _.toLowerCase(),
                _?.m_strPlayerName,
                _.data?.get(_?.m_steamid.GetAccountID()),
              ),
          )
          .filter((_) => _.indexOf(_?.m_steamid.ConvertTo64BitString()) == -1)
          .map((_) => ({
            persona: _,
            nickname: _.data?.get(_?.m_steamid.GetAccountID()),
          }))
          .sort(_),
      [_, _, _, _, _],
    ),
    _ = _.useCallback(
      (_) =>
        (0, _.jsx)(_, {
          persona: _[_].persona,
          nickname: _[_].nickname,
          setSelectedFriendSteamID: _,
        }),
      [_, _],
    ),
    _ = _.some((_) => _.isLoading);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`p`, {
        className: _,
        children: _(`#FamilyManagement_SelectFriend`),
      }),
      _ &&
        (0, _.jsx)(_, {
          size: `xlarge`,
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: `ea59pn3WsAg-`,
              children: (0, _.jsx)(_, {
                strFilter: _,
                setFilter: _,
              }),
            }),
            (0, _.jsx)(_, {
              className: `_3xFGyRrcMG8-`,
              children: (0, _.jsx)(_, {
                nRows: _.length,
                nItemHeight: 84,
                renderItem: _,
              }),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { strFilter: _, setFilter: _ } = _;
  return (0, _.jsx)(_, {
    autoFocus: !0,
    bShowClearAction: !0,
    className: _,
    type: `text`,
    onChange: (_) => _(_.target.value),
    value: _,
    placeholder: _(`#FamilyManagement_InviteFriendNamePlaceholder`),
  });
}
function _(_, _, _) {
  return (
    !_ ||
    (_ && _.toLowerCase().includes(_)) ||
    (_ && _.toLowerCase().includes(_))
  );
}
function _(_) {
  let { persona: _, nickname: _, setSelectedFriendSteamID: _ } = _,
    _ = _().data?.preferences().parenthesize_nicknames();
  return (0, _.jsxs)(_, {
    className: _,
    onActivate: (_) => {
      _(_.m_steamid.ConvertTo64BitString());
    },
    children: [
      (0, _.jsx)(_, {
        className: _,
        persona: _,
        size: `Large`,
        statusPosition: `right`,
      }),
      (0, _.jsx)(_, {
        className: _,
        bIsSelf: !1,
        bHideStatus: !1,
        bHidePersona: !1,
        bParenthesizeNicknames: _,
        bCompactView: !1,
        persona: _,
        strNickname: _,
        eFriendRelationship: 3,
      }),
    ],
  });
}
var _ = `30px`,
  _ = `#ffc82c`,
  _ = `_2wpmAkkROyw-`,
  _ = `trHLHf35hJM-`,
  _ = `l1-FlOrpK8g-`,
  _ = `uESgUq6zgBE-`,
  _ = `qZ72lYd3uVA-`,
  _ = `yQG1LU0zHT0-`,
  _ = `PKLNf1vgmHk-`,
  _ = `SXbNYxT3eQQ-`,
  _ = `RJ4OJA3v2bo-`,
  _ = `_6U1pbqGKD-A-`,
  _ = `ggTobEj7L-w-`,
  _ = `TGL7HPcl79E-`,
  _ = `eQfDz-t4EzA-`,
  _ = `_-05gZFHjqbY-`,
  _ = `tqBJiOQiMuM-`,
  _ = `aeyjCdmvamw-`,
  _ = `nnZaN0IIE8s-`,
  _ = `wCKd8tQhPGI-`,
  _ = `pp6GqWM-FxI-`,
  _ = `omHaP36p-tQ-`,
  _ = `ekNC13HSWps-`,
  _ = `_6fcLRK-WJ2A-`,
  _ = `WOi8Ki7cvjE-`,
  _ = `X9fUi3lkrv0-`,
  _ = `_4QmR-iOiLuc-`,
  _ = `tf04-wL8lP4-`,
  _ = `nX45hTAJ35c-`,
  _ = `_2ZF7pqHzY1k-`,
  _ = `lBC51EASQcw-`,
  _ = `rtDwRYVllRQ-`,
  _ = `blhTghmSy3g-`,
  _ = `ndoIwncT2-g-`,
  _ = `TXXyeTSgIA4-`,
  _ = `A6WFrEgT3pM-`,
  _ = `t3dKX4zNIa4-`,
  _ = `QTzm4wcNnDQ-`,
  _ = `mEhxSyYlPAk-`,
  _ = `LQbzNANFyto-`,
  _ = `O1JgPqxFsiY-`,
  _ = `rHYCQ76LgEk-`,
  _ = `KeP-QVvyIIs-`;
function _(_) {
  return typeof _.cooldown_seconds_remaining == `function`;
}
function _(_) {
  let { familyGroupID: _, member: _ } = _,
    _ = _(_.steamid());
  _(_, `#FamilyManagement_ErrorLoadFamilyGeneric`);
  let [_, _, _] = _(!1);
  if (!_.isSuccess) return null;
  let _ = _.data,
    _ = !1,
    _ = null;
  return (
    _(_)
      ? ((_ = (0, _.jsx)(_, {
          active: _,
          onClose: _,
          familyGroupID: _,
          member: _,
          persona: _,
        })),
        (_ = !0))
      : (_ = (0, _.jsx)(_, {
          active: _,
          onClose: _,
          familyGroupID: _,
          invited: _,
          persona: _,
        })),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          className: _(_, _),
          onActivate: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              persona: _,
              role: _.role(),
              invitePending: !_,
            }),
          }),
        }),
      ],
    })
  );
}
function _(_) {
  let _ = new Date(_.time_joined() * 1e3);
  return (new Date().getTime() - _.getTime()) / 864e5 < 30;
}
function _(_) {
  let {
      active: _,
      onClose: _,
      familyGroupID: _,
      member: _,
      persona: _,
      isSelf: _,
    } = _,
    { setErrorMessage: _ } = _(),
    _ = _(_, _.steamid()),
    _ = _(),
    _ = _(),
    _ = Math.ceil(_.cooldown_seconds_remaining() / 86400 || 0),
    _ = _
      ? _(`#FamilyManagement_RemoveMemberConfirmationText_Self`)
      : _(`#FamilyManagement_RemoveMemberConfirmationText`, _?.m_strPlayerName);
  _ !== 0 &&
    (_ +=
      ` ` +
      (_
        ? _(`#FamilyManagement_CannotJoinFor_Self`, _)
        : _(`#FamilyManagement_CannotJoinFor`, _)));
  let _ = _(
    _
      ? `#FamilyManagement_RemoveMemberConfirmationTitle_Self`
      : `#FamilyManagement_RemoveMemberConfirmationTitle`,
  );
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(_, {
      strTitle: _,
      onOK: () => {
        _(null),
          _.mutate(null, {
            onSuccess: () => _.push(_.pathname),
          });
      },
      closeModal: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { active: _, onClose: _, familyGroupID: _, member: _, persona: _ } = _,
    [_, _, _] = _(!1),
    _ = _(_, _.steamid()),
    { setErrorMessage: _ } = _();
  _(
    _,
    `#FamilyManagement_ErrorRemovingFromFamily`,
    _.k_EFamilyQueryRemoveFromFamily,
  );
  let _ = _() == _.steamid(),
    _ = _(_),
    _ = _().data?.role(),
    _ = _(_).data.members().length === 1,
    _ = _(),
    { url: _ } = _(),
    _ = () => {
      _(null), _(), _();
    },
    _ = () => {
      let _ = new _(_.steamid());
      window.location.href =
        _.HELP_BASE_URL +
        `wizard/HelpRecoverFamilyMember?childid=` +
        _.GetAccountID();
    },
    _ = () => {
      window.location.href = _.COMMUNITY_BASE_URL + `profiles/` + _.steamid();
    },
    _ = () => {
      window.location.href =
        _.STORE_BASE_URL + `wishlist/profiles/` + _.steamid();
    },
    _ = () => {
      let _ = _.endsWith(`/`) ? _.slice(0, -1) : _;
      _.push(`${_}/parentalcontrols/${_.steamid()}`);
    },
    _ = _(`#FamilyManagement_ManageDialogTitle`, _?.m_strPlayerName);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _,
        onClose: _,
        familyGroupID: _,
        member: _,
        persona: _,
        isSelf: _,
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          className: _,
          titleClassName: _,
          title: _,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: _,
          bHideCloseIcon: !0,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _(`#FamilyManagement_ProfileLink`),
              }),
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _(`#FamilyManagement_WishlistLink`),
              }),
              (0, _.jsx)(_, {
                className: _,
              }),
              !_ &&
                _.role() == 2 &&
                (0, _.jsx)(_, {
                  className: `LQbzNANFyto-`,
                  onClick: _,
                  children: _(`#FamilyManagement_ParentalControls`),
                }),
              !_ &&
                !_ &&
                _.role() == 2 &&
                (0, _.jsx)(_, {
                  className: `LQbzNANFyto-`,
                  disabled: _,
                  onClick: _,
                  children: _(`#FamilyManagement_RecoverMember`),
                }),
              !_ &&
                _ !== 2 &&
                (0, _.jsx)(_, {
                  className: _(`LQbzNANFyto-`, `AtVQCBI7J-w-`),
                  onClick: _,
                  children: _(
                    _
                      ? `#FamilyManagement_RemoveMember_Self`
                      : `#FamilyManagement_RemoveMember`,
                  ),
                }),
              _ &&
                (0, _.jsx)(_, {
                  familyGroupID: _,
                }),
              (0, _.jsx)(_, {
                className: _,
              }),
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { active: _, onClose: _, familyGroupID: _, invited: _, persona: _ } = _,
    _ = _(_, _.steamid()),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorCancelInvite`, _.k_EFamilyQueryDeclineInvite);
  let _ = () => {
      _(null), _.mutate();
    },
    _ = _(
      `#FamilyManagement_CancelInvitationConfirmationText`,
      _?.m_strPlayerName,
    );
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(_, {
      strTitle: _(`#FamilyManagement_CancelInvitationConfirmationTitle`),
      strDescription: _,
      onOK: _,
      closeModal: _,
    }),
  });
}
function _(_) {
  let { active: _, onClose: _, familyGroupID: _, invited: _, persona: _ } = _,
    [_, _, _] = _(!1),
    _ = _(_, _.steamid()),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorCancelInvite`, _.k_EFamilyQueryDeclineInvite);
  let _ = () => {
      window.location.href = _.COMMUNITY_BASE_URL + `profiles/` + _.steamid();
    },
    _ = () => {
      _(null), _(), _();
    },
    _ = _(`#FamilyManagement_ManageDialogTitle`, _?.m_strPlayerName);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _,
        onClose: _,
        familyGroupID: _,
        invited: _,
        persona: _,
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          className: _,
          titleClassName: _,
          title: _,
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: _,
          bHideCloseIcon: !0,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _(`#FamilyManagement_ProfileLink`),
              }),
              (0, _.jsx)(_, {
                className: _,
              }),
              (0, _.jsx)(_, {
                className: _(_, _),
                onClick: _,
                children: _(`#FamilyManagement_CancelInviteButton`),
              }),
              (0, _.jsx)(_, {
                className: _,
              }),
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _(`#FamilyManagement_Cancel`),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { familyGroupID: _ } = _,
    [_, _, _] = _(!1),
    _ = _(_),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorDeleteFamily`, _.k_EFamilyQueryDeleteFamily);
  let _ = _().data.cooldown_seconds_remaining(),
    _ = Date.now() / 1e3 + _,
    _ = _(_),
    _ = _();
  return _.isPending
    ? (0, _.jsx)(`div`, {
        className: void 0,
        children: (0, _.jsx)(_, {}),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsxs)(_, {
              strTitle: _(`#FamilyManagement_DeleteFamilyConfirmationTitle`),
              onOK: () => {
                _(null),
                  _.mutate(null, {
                    onSuccess: () => _.push(`/account/familymanagement`),
                  });
              },
              closeModal: _,
              children: [
                _ > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`p`, {
                        children: _(
                          `#FamilyManagement_DeleteFamilyConfirmationText_1`,
                        ),
                      }),
                      (0, _.jsxs)(`ul`, {
                        children: [
                          (0, _.jsx)(`li`, {
                            children: _(
                              `#FamilyManagement_DeleteFamilyConfirmationText_2`,
                              _,
                            ),
                          }),
                          (0, _.jsx)(`li`, {
                            children: _(
                              `#FamilyManagement_DeleteFamilyConfirmationText_3`,
                            ),
                          }),
                          (0, _.jsx)(`li`, {
                            children: _(
                              `#FamilyManagement_DeleteFamilyConfirmationText_4`,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                _ === 0 &&
                  (0, _.jsx)(`p`, {
                    children: _(
                      `#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown`,
                    ),
                  }),
              ],
            }),
          }),
          (0, _.jsx)(_, {
            className: _(_, _),
            noFocusRing: !1,
            onClick: () => {
              _(null), _();
            },
            children: _(`#FamilyManagement_DeleteFamilyButton`),
          }),
        ],
      });
}
function _(_) {
  let { familyGroupID: _, ..._ } = _,
    _ = _(_);
  _(_, `#FamilyManagement_ErrorLoadHistory`, _.k_EFamilyQueryLoadHistory);
  let _ = (0, _.useMemo)(() => _.data?.slice(0).reverse() || [], [_]),
    _ = parseInt(_.nFamilyHistoryRowHeight),
    _ = _.useCallback(
      (_) =>
        (0, _.jsx)(_, {
          entry: _[_],
          styleProps: _,
          fnRenderName: _.FnRenderName,
        }),
      [_, _, _.FnRenderName],
    );
  return (0, _.jsx)(_, {
    className: _.FamilyHistory,
    children: (0, _.jsx)(_, {
      bDynamic: !0,
      nRows: _.length,
      nItemHeight: _,
      renderItem: _,
    }),
  });
}
function _(_) {
  let { entry: _, styleProps: _, fnRenderName: _, ..._ } = _,
    _ = Intl.DateTimeFormat(_.GetPreferredLocales(), {
      month: `numeric`,
      year: `numeric`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
    }),
    _ = new Date(parseInt(_.timestamp()) * 1e3),
    _ = _.format(_),
    _ = _(`#FamilyHistory_SteamSupport`),
    _ = _(_.actor_steamid()),
    _,
    _ = _(_.actor_steamid());
  _ = _.actor_steamid()
    ? _.by_support()
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`b`, {
              children: _.data?.m_strPlayerName,
            }),
            ` (`,
            _,
            `)`,
          ],
        })
      : _
    : _;
  let _ = JSON.parse(_.body()),
    _ = _(_.account),
    _ = _.seconds && _(_.seconds),
    _ = _.reason ? _.reason : ``,
    _;
  switch (_.type()) {
    case 1:
      _ = _(`#FamilyHistory_FamilyCreated`, _, _.name);
      break;
    case 2:
      _ = _(`#FamilyHistory_FamilyModified`, _, _.name);
      break;
    case 3:
      _ = _(`#FamilyHistory_FamilyDeleted`, _);
      break;
    case 4:
      let _ = _(`#FamilyManagement_Role_${_.role}`).toLocaleLowerCase();
      _ = _(`#FamilyHistory_AccountInvited`, _, _, _);
      break;
    case 5:
      _ = _(`#FamilyHistory_InviteDeniedByFamilySize`, _, _);
      break;
    case 6:
      _ = _(`#FamilyHistory_JoinedFamily`, _);
      break;
    case 7:
      _ = _(`#FamilyHistory_JoinDeniedByRegionMismatch`, _);
      break;
    case 24:
      _ = _(`#FamilyHistory_JoinDenied`, _, _);
      break;
    case 8:
      _ = _(`#FamilyHistory_JoinDeniedByMissingIpAddress`, _);
      break;
    case 9:
      _ = _(`#FamilyHistory_JoinDeniedByFamilyCooldown`, _, _);
      break;
    case 10:
      _ = _(`#FamilyHistory_JoinDeniedByUserCooldown`, _, _);
      break;
    case 11:
      _ = _(`#FamilyHistory_JoinDeniedByOtherFamily`, _);
      break;
    case 12:
      _ = _(`#FamilyHistory_AccountRemoved`, _, _);
      break;
    case 13:
      _ =
        _.actor_steamid() === _.account
          ? _(`#FamilyHistory_InviteRejected`, _)
          : _(`#FamilyHistory_InviteCancelled`, _, _);
      break;
    case 14:
      _ = _(`#FamilyHistory_PurchaseRequested`, _);
      break;
    case 16:
      _ = _(`#FamilyHistory_ParentalSettingsDisabled`, _, _);
      break;
    case 15:
      _ = _(`#FamilyHistory_ParentalSettingsEnabled`, _, _);
      break;
    case 17:
      _ = _(`#FamilyHistory_ParentalSettingsChanged`, _, _);
      break;
    case 18:
      _ = _(`#FamilyHistory_FamilyCooldownOverridesChanged`, _, _.count);
      break;
    case 19:
      _ = _(`#FamilyHistory_PurchaseRequestCanceled`, _);
      break;
    case 20:
      _ = _(`#FamilyHistory_PurchaseRequestApproved`, _, _);
      break;
    case 21:
      _ = _(`#FamilyHistory_PurchaseRequestDeclined`, _, _);
      break;
    case 22:
      _ = _(`#FamilyHistory_CooldownSkipConsumed`, _);
      break;
    case 23:
      _ = _(`#FamilyHistory_FamilyRestored`, _);
      break;
    case 25:
      _ = _(`#FamilyHistory_ForceAcceptedInvite`, _, _);
      break;
    default:
      _ = _(`#FamilyHistory_UnknownChange`);
  }
  return (0, _.jsxs)(_, {
    className: _(_.Entry),
    focusable: !0,
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_.Timestamp),
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _(_.EntryText),
        children: _,
      }),
    ],
  });
}
var _ = `qF3oLbTunrs-`,
  _ = `phiDicDWyos-`,
  _ = `CLDB0mS3ypU-`,
  _ = `lG-sfWfbD88-`,
  _ = `_7ohp2MEUGzY-`,
  _ = `AdHik7YD4go-`,
  _ = `_7XDMq4s1SiY-`,
  _ = `WrqTEGgITTI-`,
  _ = `a99hjle9o6E-`,
  _ = `sPAXW0lw6qY-`,
  _ = `_0Swl2LUBTBk-`,
  _ = `l2KY-Q6SPTM-`,
  _ = `SMvJOZVL8Cg-`,
  _ = `gnF4b62Z-vI-`,
  _ = `AscbB7bZ43o-`,
  _ = `u4A-Q-Hbc-g-`,
  _ = _(_()),
  _ = _(_()),
  _ = `40px`,
  _ = `LF2R0QrVwr0-`,
  _ = `a6XG5kmAneo-`,
  _ = `zEYhEEGdwfI-`,
  _ = `CJeJJrjlpc4-`,
  _ = `ojeW56-hyDo-`,
  _ = `bdDbF19-IiU-`,
  _ = `NFlZs5BUV0g-`,
  _ = `hkmjDaVtr-c-`,
  _ = `ZHsY2YrQN4g-`,
  _ = `A6rs7mUnxQQ-`,
  _ = `hIZQaoRTEg4-`,
  _ = `DXb9ZYXN5cw-`,
  _ = `euNsDY1STfk-`,
  _ = `mKfANkRB-zk-`,
  _ = `jzHjQP8-K9M-`,
  _ = `YjhMqCkqLuc-`,
  _ = `ywr-LwPJSJ4-`,
  _ = `_9lbbJMJcIE0-`,
  _ = `-WR7BmwqGwc-`,
  _ = `TcEIS4khspQ-`,
  _ = `yXXC7D7U9JY-`,
  _ = `xU1dPTLSNqA-`,
  _ = `_7jo-AdZx3sc-`,
  _ = `p9OB3qTRAgo-`,
  _ = `UhkJlPPhlbI-`,
  _ = `beTZ0bQCTeo-`,
  _ = `k6JuSlfBGOU-`,
  _ = `pDLqdh2fdGY-`,
  _ = `LFajRuGr4GE-`,
  _ = `GUwMnXmhcys-`,
  _ = `tka2yLdlWuw-`,
  _ = `j7B7-KYjCt8-`,
  _ = `USNIZMyYKxQ-`,
  _ = `GCArileYweo-`,
  _ = `FVQS2NH-D30-`,
  _ = `S7U5HG5G76o-`,
  _ = `yGtCw2YCxXg-`,
  _ = `og-eU1fjmi4-`,
  _ = `KX0hJhxrF2w-`,
  _ = `HXJO37-r-xg-`,
  _ = `uoHre03qso0-`,
  _ = `gYFO6tsY26k-`,
  _ = `bN7ZsBC6FNk-`,
  _ = `fwx54ooQm-Q-`,
  _ = `O-RI4zs-zqM-`,
  _ = `UfK8xzRh8DM-`,
  _ = `lGkP5BiYu20-`,
  _ = `I2C2ZUEJv4U-`,
  _ = `JnxJuW43sRo-`,
  _ = `O4FEp-ReEQo-`,
  _ = `_8zEmALGjutM-`,
  _ = `_6b9Z3WITKss-`,
  _ = `hdiCVW-TUIQ-`,
  _ = `QrOV5jeMP4E-`,
  _ = `_4EAxpNwKsio-`,
  _ = `H1m92BJ--s4-`,
  _ = `f0Tq89nyQe8-`,
  _ = `xPZK11Sc1JQ-`,
  _ = `b1MUSj1oHnw-`,
  _ = `T8tJM1F3udo-`,
  _ = `hW-hKolSoxE-`,
  _ = `aGZ-5Q30Ngk-`,
  _ = `uB59PztRaCQ-`,
  _ = `en11dmsuJBY-`,
  _ = `xBRR1g0yEMI-`,
  _ = `oPgGHbh2NoY-`,
  _ = `L6PbUyknlek-`,
  _ = `bS0DIyS4a8A-`,
  _ = `_33R6t1oxzWA-`,
  _ = `IlXaXZNRfqM-`,
  _ = `_-4jLfc3JHMk-`,
  _ = `i2KdgpD0ejQ-`,
  _ = `_04yjrdfbuOE-`,
  _ = `kY8RkeLneFg-`,
  _ = `jtjrzYcH64A-`,
  _ = `DG4SF3Ttgvw-`,
  _ = `HSL873gT3pI-`,
  _ = `GuW88zLPj1E-`;
function _(_, _) {
  _(_, `steam://open/games/details/${_}`);
}
function _(_, _) {
  _ && (_.IN_CLIENT ? (window.location.href = _) : _(_, _));
}
function _(_) {
  let { app: _, sort: _ } = _,
    _ = _(),
    _ = _(_.appid),
    _ = _.owner_steamids.filter((_) => _ != _),
    _ = _(_),
    _ = _(),
    _ = _().data?.preferences().parenthesize_nicknames(),
    _ = null;
  switch (_.exclude_reason) {
    case 0:
      break;
    case 2:
      _ = `#FamilyGame_Excluded_License`;
      break;
    case 3:
    case 29:
      _ = `#FamilyGame_Excluded_FreeApp`;
      break;
    case 4:
      _ = _
        ? `#FamilyGame_Excluded_Private`
        : `#FamilyGame_Excluded_PrivateLicense`;
      break;
    case 1:
    case 10:
      _ = `#FamilyGame_Excluded_OptedOut`;
      break;
    case 7:
      _ = `#FamilyGame_Excluded_Nonrefundable_DLC`;
      break;
    case 9:
      _ = `#FamilyGame_Excluded_ParentAppExcluded`;
      break;
    case 8:
      _ = `#FamilyGame_Excluded_UnreleasedApp`;
      break;
    case 6:
      _ = `#FamilyGame_Excluded_WrongAppType`;
      break;
    case 12:
    case 23:
    case 27:
      _ = `#FamilyGame_Excluded_DevPackage`;
      break;
    case 13:
      _ = `#FamilyGame_Excluded_FreeWeekend`;
      break;
    case 15:
      _ = `#FamilyGame_Excluded_InvalidPackage`;
      break;
    case 18:
    case 16:
    case 20:
      _ = `#FamilyGame_Excluded_Subscription`;
      break;
    case 11:
      _ = `#FamilyGame_Excluded_SpecialPackage`;
      break;
    case 17:
      _ = `#FamilyGame_Excluded_WrongLicenseType`;
      break;
    case 19:
      _ = `#FamilyGame_Excluded_NoShareableApps`;
      break;
    case 21:
    case 22:
    case 26:
      _ = `#FamilyGame_Excluded_Borrowed`;
      break;
    case 24:
      _ = `#FamilyGame_Excluded_LicensePending`;
      break;
    case 25:
      _ = `#FamilyGame_Excluded_RefundPending`;
      break;
    case 28:
      _ = `#FamilyGame_Excluded_TimedTrial`;
      break;
    case 30:
      _ = `#FamilyGame_Excluded_LicenseInactive`;
      break;
    default:
      _ = `#FamilyGame_Excluded_Unknown`;
  }
  let _;
  (_ == `date_acquired-asc` || _ == `date_acquired-desc`) &&
    _.rt_time_acquired &&
    (_ = (0, _.jsx)(`div`, {
      className: void 0,
      children: _(
        `#FamilyGame_DateAcquired`,
        _(_.rt_time_acquired, {
          month: `long`,
          day: `numeric`,
          year: `numeric`,
          weekday: void 0,
        }),
      ),
    }));
  let _ = (_) => _(_[_].data, _.data?.get(new _(_[_]).GetAccountID()), _),
    _,
    _;
  if (
    (_ &&
      (_ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _(_),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#FamilyGame_ExcludedCode`, _.exclude_reason),
          }),
        ],
      })),
    _.exclude_reason != 3)
  ) {
    if (
      (_ &&
        !_ &&
        (_ = (0, _.jsx)(`div`, {
          className: void 0,
          children: _(`#FamilyGame_Excluded_Private`),
        })),
      _.length == 0 || _.some((_) => !_.isSuccess))
    )
      _ = null;
    else {
      let _ = _.length != _.owner_steamids.length && !_;
      _ =
        _.length == 1
          ? (0, _.jsx)(`div`, {
              className: void 0,
              children: _(
                _
                  ? `#FamilyGames_FromTheLibraryOf_Single_Owned`
                  : `#FamilyGames_FromTheLibraryOf_Single`,
                _(0),
              ),
            })
          : (0, _.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(
                    _
                      ? `#FamilyGames_FromTheLibraryOf_Header_Owned`
                      : `#FamilyGames_FromTheLibraryOf_Header`,
                  ),
                }),
                (0, _.jsx)(`ul`, {
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      `li`,
                      {
                        className: void 0,
                        children: _(_),
                      },
                      _,
                    ),
                  ),
                }),
              ],
            });
    }
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [_, _, _],
  });
}
function _(_) {
  let { item: _ } = _,
    _ = _(_.appid),
    _ = _(),
    _ = _.owner_steamids.length;
  return (
    _ && _.owner_steamids.includes(_) && --_,
    _ <= 1
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: _,
        })
  );
}
function _(_, _, _) {
  let _ = _.m_strPlayerName;
  return _ && (_ = _ ? `${_.m_strPlayerName} (${_})` : `${_}*`), _;
}
function _(_) {
  let _ = new _(_),
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.data?.get(_.GetAccountID()),
    _ = _.data?.preferences().parenthesize_nicknames();
  return !_.isSuccess || !_.isSuccess || !_.isSuccess ? null : _(_.data, _, _);
}
function _(_) {
  let { item: _, strSteamID: _ } = _,
    _ = _(_),
    _ = _.appid,
    { settings: _, mapAppsAllowed: _ } = _(_).data,
    _ = _?.get(_.appid) || !1,
    _ = _(_),
    _ = _.useCallback(() => {
      _(_, !_, [_]), _.mutate(_);
    }, [_, _, _, _]);
  return !_ || !_ || !_.is_enabled || _.applist_base_id == 0
    ? null
    : (0, _.jsx)(_, {
        onSelected: _,
        children: _(
          _ ? `#FamilyGame_DenyForChild` : `#FamilyGame_AllowForChild`,
          _,
        ),
      });
}
function _(_) {
  let { item: _, bOwnsGame: _, familyContext: _ } = _,
    _ = _(),
    { familyGroup: _, invalidateGamesList: _ } = _,
    _ = _.members.find((_) => _.steamid == _).role == 1,
    { data: _ } = _({
      appid: _.appid,
    }),
    _ = _ || _.exclude_reason == 0,
    _ = _(_.appid),
    { mutateAsync: _ } = _(_.appid),
    _ = _.IN_CLIENT,
    _ = _.useCallback(async () => {
      await _(!_), _();
    }, [_, _, _]),
    _ = _.useCallback(
      (_) => {
        _ && _(_(_), `${_.STORE_BASE_URL}${_.store_url_path}`);
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        _(_(_), _.appid);
      },
      [_],
    ),
    _ = _ && _;
  return (0, _.jsxs)(_, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onSelected: () => {
            _(_.appid, _.name);
          },
          children: _(`#FamilyGame_PlayGame`),
        }),
      _ &&
        (0, _.jsx)(_, {
          onSelected: _,
          children: _(`#FamilyGame_OpenAppDetails`),
        }),
      _?.visible &&
        (0, _.jsx)(_, {
          onSelected: _,
          children: _(`#FamilyGame_ViewStore`),
        }),
      (0, _.jsx)(_, {
        onSelected: _,
        children: _(
          _ ? `#FamilyGame_UnmarkAsPrivate` : `#FamilyGame_MarkAsPrivate`,
        ),
      }),
      _ &&
        _.members
          .filter((_) => _.role == 2)
          .map((_) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                strSteamID: _.steamid,
              },
              _.steamid,
            ),
          ),
    ],
  });
}
function _(_) {
  let {
      app: _,
      item: _,
      bShowLicenseCount: _,
      sort: _,
      className: _,
      children: _,
      ..._
    } = _,
    _ = _(),
    _ = _.useContext(_),
    _ = (0, _.jsx)(_, {
      app: _,
      sort: _,
    }),
    _ = {
      direction: `right`,
      style: {
        minWidth: `320px`,
      },
    },
    _ = _(_.appid),
    { data: _ } = _(_),
    _ = _.exclude_reason == 0 || _.exclude_reason == 3,
    _ = _.owner_steamids.some((_) => _ == _),
    _ = _.IN_CLIENT,
    _ = _ && _.visible,
    _ = _.useCallback(
      (_) => {
        _(
          (0, _.jsx)(_, {
            item: _,
            bOwnsGame: _,
            familyContext: _,
          }),
          _,
        ),
          _.stopPropagation(),
          _.preventDefault();
      },
      [_, _, _],
    ),
    _ = (_ && (_ || _)) || _,
    _ = _.useCallback(
      (_) => {
        _ && (_ || _)
          ? _(_(_), _.appid)
          : _ && _(_(_), `${_.STORE_BASE_URL}${_.store_url_path}`);
      },
      [_.appid, _, _, _, _, _],
    );
  return (0, _.jsx)(_, {
    _: _,
    name: _.name,
    bPreventNavigation: _ || _,
    bHidePrice: _,
    bShowWishlistButton: !_,
    hoverProps: _,
    className: _,
    elElementToAppend: _,
    children: (0, _.jsxs)(_, {
      className: _(_, _, _ && `_2kADWaqVyG8-`),
      focusable: !0,
      onActivate: _ ? _ : void 0,
      onContextMenu: _,
      ..._,
      children: [
        _,
        _ &&
          (0, _.jsx)(_, {
            item: _,
          }),
      ],
    }),
  });
}
function _() {
  let [_, _] = _.useState(7);
  return [
    _,
    _.useCallback((_, _) => {
      let _;
      (_ = _ <= 500 ? 3 : _ <= 620 ? 5 : 7), _(_);
    }, []),
  ];
}
function _(_) {
  let { nRows: _, setShowAll: _, setRows: _, nIncrement: _ = 2 } = _,
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      _.current?.BHasFocus() &&
        (_.current.Node()?.GetLastFocusElement().scrollIntoView({
          block: `end`,
        }),
        _.current?.Node().ForceMeasureFocusRing());
    }, [_]),
    (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            className: _,
            navRef: _,
            onClick: () => {
              _(_ + _);
            },
            children: _(`#FamilyGames_ShowMore`),
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            className: _,
            onClick: () => _(!0),
            children: _(`#FamilyGames_ShowAll`),
          }),
        }),
      ],
    })
  );
}
function _(_, _) {
  let [_, _] = _(),
    [_, _] = _.useState(2),
    [_, _] = _.useState(_),
    _ = _.useMemo(
      () =>
        (_ ? _ : _.slice(0, _ * _))?.map((_) => ({
          appid: _.appid,
          name: _.name,
        })),
      [_, _, _, _],
    ),
    _ = Math.max(_.length - _ * _, 0);
  return {
    rgApps: _,
    nRows: _,
    setRows: _,
    bDisplayingAll: _ || _ == 0,
    setShowAll: _,
    nColumns: _,
    OnWidthChanged: _,
  };
}
function _(_) {
  let { rgSortedGames: _, strLabel: _, bShowLicenseCount: _ = !0, sort: _ } = _,
    {
      rgApps: _,
      nRows: _,
      setRows: _,
      bDisplayingAll: _,
      setShowAll: _,
      nColumns: _,
      OnWidthChanged: _,
    } = _(_, !1),
    _ = _.useCallback(
      (_, _, _) =>
        (0, _.jsx)(_, {
          app: _,
          item: _[_],
          bShowLicenseCount: _,
          sort: _,
          ..._,
        }),
      [_, _, _],
    );
  return _?.length
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#FamilyGames_Count`, _.length),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgApps: _,
            nColumns: _,
            onWidthChanged: _,
            renderItem: _,
          }),
          !_ &&
            (0, _.jsx)(_, {
              nRows: _,
              setRows: _,
              setShowAll: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { rgOptions: _, sort: _, setSort: _, bAscending: _, children: _ } = _,
    _ = _.findIndex((_) => _ == _),
    _ = _ != -1,
    _ = _[(_ + 1) % _.length];
  return (0, _.jsxs)(_, {
    className: _(_, _ && `pCRgxrY3i3Q-`),
    onActivate: () => _(_),
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ &&
          (0, _.jsx)(_, {
            direction: _ ? `up` : `down`,
          }),
      }),
    ],
  });
}
function _(_) {
  let { sort: _, setSort: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        rgOptions: [`alpha-asc`, `alpha-desc`],
        sort: _,
        setSort: _,
        bAscending: _ == `alpha-asc`,
        children: _(`#FamilyGames_Sort_Alphabetical`),
      }),
      (0, _.jsx)(_, {
        rgOptions: [`date_acquired-desc`, `date_acquired-asc`],
        sort: _,
        setSort: _,
        bAscending: _ == `date_acquired-asc`,
        children: _(`#FamilyGames_Sort_DateAcquired`),
      }),
    ],
  });
}
function _(_) {
  let { strFilter: _, setFilter: _ } = _,
    _ = _.useCallback(
      (_) => {
        _(_.target.value);
      },
      [_],
    );
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      className: _,
      value: _,
      onChange: _,
      placeholder: _(`#Parental_GameList_Search`),
    }),
  });
}
function _(_) {
  let { strFilter: _, setFilter: _, sort: _, setSort: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        sort: _,
        setSort: _,
      }),
      (0, _.jsx)(_, {
        strFilter: _,
        setFilter: _,
      }),
    ],
  });
}
var _ = {
  bIncludeOwn: !0,
  bIncludeExcluded: !0,
};
function _(_) {
  let { familyGroupID: _, children: _ } = _,
    _ = _(_, _),
    _ = _(_),
    _ = _.useMemo(
      () => ({
        familyGroupID: _,
        familyGroup: _.data?.toObject(),
        invalidateGamesList: _,
      }),
      [_, _.data, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
var _ = _.createContext(void 0);
function _(_) {
  let { familyGroupID: _ } = _,
    [_, _] = _.useState(``),
    [_, _] = _.useState(`alpha-asc`),
    _ = _(_, _),
    _ = _(_.data, _, _),
    _ = _.useMemo(() => _?.filter((_) => _.exclude_reason == 0), [_]),
    _ = _.useMemo(
      () => _?.filter((_) => _.exclude_reason != 0 && _.exclude_reason != 3),
      [_],
    ),
    _ = _.useMemo(() => _?.filter((_) => _.exclude_reason == 3), [_]);
  return (0, _.jsxs)(_, {
    familyGroupID: _,
    children: [
      _.isFetching &&
        (0, _.jsx)(`div`, {
          className: `J3pdogWCn-Q-`,
          children: (0, _.jsx)(_, {}),
        }),
      _.isError &&
        (0, _.jsx)(`div`, {
          className: `_5EqFKLlbQGM-`,
          children: _(`#FamilyGames_Error`, _.error),
        }),
      _.isSuccess &&
        (0, _.jsxs)(`div`, {
          className: `uOFsQx3qEiM-`,
          children: [
            _.data?.length > 0 &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    strFilter: _,
                    setFilter: _,
                    sort: _,
                    setSort: _,
                  }),
                  (0, _.jsx)(_, {
                    rgSortedGames: _,
                    strLabel: _(`#FamilyGames_IncludedGames`),
                    sort: _,
                  }),
                  (0, _.jsx)(_, {
                    rgSortedGames: _,
                    bShowLicenseCount: !1,
                    strLabel: _(`#FamilyGames_ExcludedGames`),
                    sort: _,
                  }),
                  (0, _.jsx)(_, {
                    rgSortedGames: _,
                    bShowLicenseCount: !1,
                    strLabel: _(`#FamilyGames_FreeGames`),
                    sort: _,
                  }),
                  _?.length == 0 &&
                    (0, _.jsx)(`div`, {
                      className: void 0,
                      children: _(`#FamilyGames_EmptySearch`),
                    }),
                ],
              }),
            _.data?.length == 0 &&
              (0, _.jsx)(`div`, {
                className: void 0,
                children: _(`#FamilyGames_NoGames`),
              }),
          ],
        }),
    ],
  });
}
function _(_, _) {
  let _ = (0, _.default)()
      .startOf(`day`)
      .add(30 * _, `minutes`),
    _ = (0, _.default)()
      .startOf(`day`)
      .add(30 * _, `minutes`),
    _ = Intl.DateTimeFormat(_.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    });
  return (
    _.format(_.toDate()).replace(` `, `\xA0`) +
    `-` +
    _.format(_.toDate()).replace(` `, `\xA0`)
  );
}
function _(_) {
  if (_ == BigInt(0)) return _(`#Parental_Playtime_Never`);
  if (_ == BigInt(0xffffffffffff)) return _(`#Parental_Playtime_AnyTime`);
  let _ = [],
    _ = -1;
  for (let _ = 0; _ < 48; _++)
    _ & (BigInt(1) << BigInt(_))
      ? _ == -1 && (_ = _)
      : _ != -1 && (_.push(_(_, _)), (_ = -1));
  return _ != -1 && (_.push(_(_, 48)), (_ = -1)), _.join(`, `);
}
function _(_, _) {
  return _.members()
    .filter((_) => _.role() == 2 && _.steamid() != _)
    .map((_) => _.steamid());
}
function _(_) {
  let { steamid: _, settings: _, familyGroup: _ } = _,
    _ = _(_, _),
    _ = _(_),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`),
    _(_, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let [_, _] = (0, _.useState)(``),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, (_) => _.isSuccess),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      if (
        (_.push({
          label: _(`#Parental_EnabledSetting`),
          data: `enabled`,
        }),
        _.push({
          label: _(`#Parental_DisabledSetting`),
          data: `disabled`,
        }),
        _ > 0)
      ) {
        _.push({
          bIsSeparator: !0,
        });
        for (let _ of _) {
          if (!_.isSuccess) continue;
          let _ = _(`#Parental_CopySettingsFrom`, _.data.m_strPlayerName);
          _.push({
            label: _,
            data: `copy_${_.data.GetSteamIDAsString()}`,
          });
        }
      }
      return _;
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        _(null);
        let _ = _.data;
        if (_ == `enabled`) _.mutate();
        else if (_ == `disabled`) _.mutate();
        else if (_.startsWith(`copy_`)) {
          let _ = _.split(`_`);
          _(_[1]);
        }
      },
      [_, _, _],
    ),
    _ = _.is_enabled ? `enabled` : `disabled`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        steamid: _,
        otherChildrenQuery: _,
        confirmCopy: _,
        setConfirmCopy: _,
      }),
      (0, _.jsx)(_, {
        strClassName: _,
        controlled: !0,
        bottomSeparator: `none`,
        label: _(`#Parental_EnableDropdown`),
        rgOptions: _,
        selectedOption: _,
        onChange: _,
        bMatchWidth: !1,
      }),
    ],
  });
}
function _(_) {
  let {
      steamid: _,
      otherChildrenQuery: _,
      confirmCopy: _,
      setConfirmCopy: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _.useCallback(() => {
      _.length != 0 &&
        (_.mutate({
          steamidSrc: _,
          steamidDest: _,
        }),
        _(``));
    }, [_, _, _, _]),
    _ = ``;
  if (_.length > 0) {
    for (let _ of _)
      _.isSuccess &&
        _.data.GetSteamIDAsString() == _ &&
        (_ = _.data.m_strPlayerName);
    _.length == 0 && (_ = _);
  }
  let _ = _;
  _.isSuccess && (_ = _.data.m_strPlayerName);
  let _ = _(`#Parental_CopySettingsConfirmation_Desc`, _, _);
  return (0, _.jsx)(_, {
    active: _.length > 0,
    children: (0, _.jsx)(_, {
      closeModal: () => _(``),
      onOK: _,
      strTitle: _(`#Parental_CopySettingsConfirmation_Title`),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { steamid: _, settings: _ } = _,
    _ = _(_),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let _ = _.useMemo(
      () => [
        {
          label: _(`#Parental_Baselist_AllGames`),
          data: 0,
        },
        {
          label: _(`#Parental_Baselist_NoGames`),
          data: 1,
        },
      ],
      [],
    ),
    _ = _.useCallback(
      (_, _) => {
        _(null), (_.applist_base_id = _.data), _.mutate(_);
      },
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    focusable: !0,
    strClassName: _,
    bottomSeparator: `none`,
    label: _(`#Parental_Baselist_Label`),
    rgOptions: _,
    selectedOption: _.applist_base_id,
    onChange: _,
  });
}
function _(_) {
  let { steamid: _, settings: _, game: _, ..._ } = _,
    _ = _(_),
    _ = _.appid,
    _ = _.applist_custom.find((_) => _.appid == _),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorModifyParentalSettingsGeneric`);
  let _ = _?.is_allowed || !1,
    _ =
      _.img_icon_url ||
      (_.img_icon_hash &&
        _.MEDIA_CDN_COMMUNITY_URL +
          `images/apps/` +
          _ +
          `/` +
          _.img_icon_hash +
          `.jpg`),
    _ = _.useCallback(() => {
      _(null), _(_, !_, [_]), _.mutate(_);
    }, [_, _, _, _, _]);
  return (0, _.jsxs)(_, {
    className: _(_, _ && `WKEuj5y5CYU-`),
    onActivate: _,
    ..._,
    children: [
      _ &&
        (0, _.jsx)(`img`, {
          className: `wQy1iBjpNNI-`,
          src: _,
        }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `wQy1iBjpNNI-`,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.name,
      }),
      (0, _.jsx)(_, {
        className: _,
        checked: _,
        onChange: _,
      }),
    ],
  });
}
function _(_) {
  let {
      setContentDescriptors: _,
      selectedContentDescriptors: _,
      showFilter: _,
      setShowFilter: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(_),
    _ = (_) => (_) => {
      let _ = [];
      if (_) {
        let _ = [_].concat(_(_));
        for (let _ of _) (_.includes(_) || _.includes(_)) && _.push(_);
      } else {
        let _ = [_].concat(_(_));
        for (let _ of _) _.includes(_) && !_.includes(_) && _.push(_);
      }
      _(_);
    },
    _ = [
      {
        label: _(`#Parental_GameList_ShowAllFilter`),
        data: `show_all`,
      },
      {
        label: _(`#Parental_GameList_ShowAllowedOnlyFilter`),
        data: `show_allowed_only`,
      },
      {
        label: _(`#Parental_GameList_ShowDeniedOnlyFilter`),
        data: `show_denied_only`,
      },
    ];
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#Parental_GameList_ShowGamesThatAreFilterHeader`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          focusable: !0,
          rgOptions: _,
          selectedOption: _,
          onChange: (_) => _(_.data),
        }),
      }),
      (0, _.jsx)(_, {
        children: _(`#Parental_GameList_ContentDescriptorFilterHeader`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _.map((_) => {
          let _ = _.includes(_),
            _ = _(_);
          return (0, _.jsxs)(
            _,
            {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  children: _(_),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    checked: _,
                    onChange: _,
                  }),
                }),
              ],
            },
            _,
          );
        }),
      }),
      (0, _.jsx)(_, {
        onCancel: _,
        onOK: () => {
          _(_), _();
        },
        strOKText: _(`#Parental_GameList_Button_Apply`),
        className: _,
      }),
    ],
  });
}
function _(_) {
  let {
      strFilter: _,
      setFilter: _,
      strView: _,
      setView: _,
      setContentDescriptors: _,
      selectedContentDescriptors: _,
      showFilter: _,
      setShowFilter: _,
    } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _,
        onDismiss: () => _(!1),
        className: void 0,
        children: (0, _.jsx)(_, {
          selectedContentDescriptors: _,
          setContentDescriptors: _,
          showFilter: _,
          setShowFilter: _,
          onDismiss: () => _(!1),
        }),
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Parental_GameList_Header`),
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _(_, _ == `list` && `fVIhhOlMec8-`),
                    onActivate: () => _(`list`),
                    children: (0, _.jsx)(_, {
                      toolTipContent: _(`#Parental_GameList_List`),
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                  (0, _.jsx)(_, {
                    className: _(_, _ == `grid` && `fVIhhOlMec8-`),
                    onActivate: () => _(`grid`),
                    children: (0, _.jsx)(_, {
                      toolTipContent: _(`#Parental_GameList_Grid`),
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                strFilter: _,
                setFilter: _,
              }),
              (0, _.jsx)(_, {
                className: _,
                onActivate: () => _(!0),
                children: (0, _.jsx)(_, {
                  toolTipContent: _(`#Parental_GameList_Filter`),
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = [`ParentalSearchSuggestions`, _];
  return _({
    queryKey: _,
    queryFn: async () => {
      if (_.length < 2) return [];
      let _ = _.Init(_);
      _.Body().set_query_name(JSON.stringify(_)),
        _.Body().set_search_term(_),
        _(_),
        _(_, {
          include_basic_info: !0,
          include_assets: !0,
        }),
        _(_, {
          type_filters: {
            include_games: !0,
          },
          price_filters: {
            only_free_items: !0,
          },
        }),
        _.Body().set_max_results(20),
        _.Body().set_use_spellcheck(!0);
      let _ = await _.SearchSuggestions(_, _);
      return _.BSuccess()
        ? _.Body()
            .store_items()
            .map((_) => {
              let _ = _.name().replace(/^The |^A |^An /i, ``);
              return {
                appid: _.appid(),
                name: _.name(),
                sort_as: _,
                capsule_filename: _.assets().library_capsule(),
                img_icon_hash: _.assets().community_icon(),
                searchSuggestion: !0,
              };
            })
        : [];
    },
    placeholderData: _,
  });
}
function _(_) {
  let _ = _.applist_custom.map((_) => _.appid),
    _ = _(_, {
      include_assets: !0,
    });
  return _({
    queryKey: [`ParentalStoreItems`, _],
    queryFn: async () =>
      _.map((_) => {
        let _ = _.Get().GetApp(_);
        return (
          _ && {
            appid: _.GetAppID(),
            name: _.GetName(),
            capsule_filename: _.GetAssets().GetLibraryCapsuleURL(),
            img_icon_url: _.GetAssets().GetCommunityIconURL(),
            parentalApp: !0,
          }
        );
      }).filter((_) => !!_),
    enabled: _ != 1,
    placeholderData: _,
  });
}
function _(_, _, _) {
  let _ = _()?.data.family_groupid(),
    _ = _(_, {
      bIncludeOwn: !0,
      bIncludeExcluded: !0,
      bIncludeNonGames: !0,
      for_account_id: parseInt(_.steamid),
    }).data,
    _ = _(_).data,
    _ = _(_).data,
    [_, _] = _.useMemo(() => {
      let _ = _.InitFromAccountID(
          parseInt(_.steamid),
          _.EUNIVERSE,
        ).ConvertTo64BitString(),
        _ = _?.filter(
          (_) =>
            _.app_type != 4 &&
            (_.exclude_reason == 0 || _.owner_steamids.includes(_)),
        ),
        _ = _?.filter((_) => _.app_type == 4 && _.owner_steamids.includes(_));
      return [_, _ ? _?.concat(_ || []) : []];
    }, [_, _, _, _.steamid]);
  (_ = _?.filter((_) => _.findIndex((_) => _.appid == _.appid) == -1)),
    (_ = _?.filter((_) => _.findIndex((_) => _.appid == _.appid) == -1));
  let _ = _.useMemo(() => {
    let _ = new Map();
    return (
      _?.forEach((_) => _.set(_.appid, _)),
      _?.forEach((_) => _.set(_.appid, _)),
      Array.from(_.values())
    );
  }, [_, _]);
  return [_(_, `alpha-asc`, _, _), _(_, `alpha-asc`, _, _)];
}
function _(_) {
  let {
      strToken: _,
      steamid: _,
      nAllowed: _,
      nTotal: _,
      setAllowAllApps: _,
    } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(_ + (_ ? `_Count` : ``), _, _, _),
      }),
      _ &&
        (0, _.jsxs)(_, {
          className: `euNsDY1STfk-`,
          children: [
            (0, _.jsx)(_, {
              onClick: () => _(!0),
              children: _(`#Parental_GameList_AllowAll`),
            }),
            (0, _.jsx)(_, {
              onClick: () => _(!1),
              children: _(`#Parental_GameList_DenyAll`),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
      strTitleToken: _,
      nAllowed: _,
      nTotal: _,
      setAllowAllApps: _,
      strView: _,
      steamid: _,
      settings: _,
      rgAllApps: _,
    } = _,
    { rgApps: _, bDisplayingAll: _, nColumns: _, OnWidthChanged: _ } = _(_, !0);
  return (
    _(_, `Parental Control Library not displaying all`),
    _.length == 0
      ? null
      : (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              strToken: _,
              steamid: _,
              nAllowed: _,
              nTotal: _,
              setAllowAllApps: _,
            }),
            _ == `list` &&
              (0, _.jsx)(_, {
                steamid: _,
                settings: _,
                rgSortedGames: _,
              }),
            _ == `grid` &&
              (0, _.jsx)(_, {
                steamid: _,
                settings: _,
                rgSortedGames: _,
                nColumns: _,
                onWidthChanged: _,
              }),
          ],
        })
  );
}
function _(_) {
  let { steamid: _, settings: _, mapAppsAllowed: _ } = _,
    _ = _(_),
    [_, _] = _.useState(``),
    [_, _] = _.useState([]),
    [_, _] = _.useState(`show_all`),
    [_, _] = _.useState(`grid`),
    [_, _] = _(_, _, _),
    _ = _?.filter((_) => !_(_.appid, !0, _, _)),
    _ = new Set(_.map((_) => _.appid)),
    _ = _?.length || 0,
    _ = (!_ && _?.length) || 0,
    _ = _.useCallback(
      (_) => {
        _(
          _,
          _,
          _.map((_) => _.appid),
        ),
          _.mutate(_);
      },
      [_, _, _],
    );
  return _.length == 0 && !_ && _.length === 0
    ? null
    : (_ === `show_allowed_only`
        ? (_ = _.filter((_) => _.has(_.appid)))
        : _ === `show_denied_only` && (_ = _.filter((_) => !_.has(_.appid))),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            strFilter: _,
            setFilter: _,
            strView: _,
            setView: _,
            selectedContentDescriptors: _,
            setContentDescriptors: _,
            showFilter: _,
            setShowFilter: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                strTitleToken: `#Parental_GameList_Library`,
                strView: _,
                nAllowed: _,
                nTotal: _,
                setAllowAllApps: !_ && _,
                steamid: _,
                settings: _,
                rgAllApps: _,
              }),
              (0, _.jsx)(_, {
                strTitleToken: `#Parental_GameList_Store`,
                strView: _,
                steamid: _,
                settings: _,
                rgAllApps: _,
              }),
              _.length + _.length == 0 &&
                (0, _.jsx)(`div`, {
                  className: `VYrViP5dwRQ-`,
                  children: _(`#Parental_GameList_Empty`),
                }),
            ],
          }),
        ],
      }));
}
function _(_) {
  let { steamid: _, settings: _, rgSortedGames: _ } = _,
    _ = parseInt(_),
    _ = _.useCallback(
      (_) =>
        (0, _.jsx)(
          _,
          {
            steamid: _,
            settings: _,
            game: _[_],
          },
          _,
        ),
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    nRows: _?.length,
    nItemHeight: _,
    nRowGap: 0,
    renderItem: _,
  });
}
function _(_) {
  let {
    app: _,
    item: _,
    bIsAllowed: _,
    setAllowed: _,
    className: _,
    children: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    className: _(_, _, _ && `WKEuj5y5CYU-`),
    focusable: !0,
    onActivate: () => _(_, !_),
    ..._,
    children: _,
  });
}
function _(_) {
  let {
      steamid: _,
      settings: _,
      rgSortedGames: _,
      nColumns: _,
      onWidthChanged: _,
    } = _,
    _ = _(_),
    _ = _.useMemo(
      () =>
        _?.map((_) => ({
          appid: _.appid,
          name: _.name,
        })),
      [_],
    ),
    _ = _.useCallback(
      (_, _) => {
        _(_, _, [_.appid]), _.mutate(_);
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_, _, _) => {
        let _ =
          _.applist_custom.find((_) => _.appid == _.appid)?.is_allowed || !1;
        return (0, _.jsx)(_, {
          app: _,
          item: _[_],
          bIsAllowed: _,
          setAllowed: _,
          ..._,
        });
      },
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    rgApps: _,
    nColumns: _,
    onWidthChanged: _,
    renderItem: _,
  });
}
function _(_) {
  let { steamid: _, settings: _, mapAppsAllowed: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        steamid: _,
        settings: _,
      }),
      _.applist_base_id != 0 &&
        (0, _.jsx)(_, {
          steamid: _,
          settings: _,
          mapAppsAllowed: _,
        }),
    ],
  });
}
function _(_) {
  let { steamid: _, settings: _, feature: _, label: _ } = _,
    _ = !!(_.enabled_features & (1 << _)),
    _ = _(_),
    _ = _.useCallback(
      (_) => {
        let _ = _.enabled_features ^ (1 << _);
        (_.enabled_features = _), _.mutate(_);
      },
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    className: _,
    bottomSeparator: `none`,
    label: _(_),
    checked: _,
    onChange: _,
  });
}
var _ = {
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
function _(_) {
  let { steamid: _, settings: _ } = _,
    _ = _.useRef(_.enabled_features),
    _ = [1, 2, 3, 4],
    _ = [10, 11, 12, 13, 14, 15],
    _ = [];
  for (let _ = 1; _ < 17; _++)
    !_.includes(_) && (_.includes(_) || _.current & (1 << _)) && _.push(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`hr`, {}),
      _.map((_) =>
        _[_]
          ? (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  (0, _.jsx)(_, {
                    steamid: _,
                    settings: _,
                    feature: _,
                    label: _[_].featureDescription,
                  }),
                  (0, _.jsx)(`hr`, {}),
                ],
              },
              _,
            )
          : null,
      ),
    ],
  });
}
function _(_) {
  let {
      className: _,
      enabled: _,
      locked: _,
      slotIndex: _,
      onToggle: _,
      dragState: _,
      setDragState: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (_) => {
      _ !== null && !_ && _ !== _ && _(_),
        _.target.releasePointerCapture(_.pointerId);
    },
    _ = (_) => {
      _.target.releasePointerCapture(_.pointerId);
    },
    _ = (_) => {
      _(!_), _(!0), _(_), _.target.releasePointerCapture(_.pointerId);
    },
    _ = () => {
      _(null);
    },
    _ = () => {
      !_ && !_ && _(_), _(null), _(!1);
    };
  return (0, _.jsx)(_, {
    ref: _,
    ..._,
    className: _(_, _, _ && `_0-foDtgz9l8-`, _ && `_2A5i29Vzbts-`),
    onActivate: _,
    onPointerDown: _,
    onPointerEnter: _,
    onPointerLeave: _,
    onPointerUp: _,
  });
}
function _(_) {
  let { className: _, nWindows: _, nLockedWindows: _, onToggle: _ } = _,
    _ = [],
    _ = Intl.DateTimeFormat(_.GetPreferredLocales(), {
      hour: `numeric`,
      minute: `numeric`,
    }),
    [_, _] = (0, _.useState)(null);
  for (let _ = 0; _ < 48; _++) {
    let _ = _ & (BigInt(1) << BigInt(_)),
      _ = _ && _ & (BigInt(1) << BigInt(_));
    _.push(
      (0, _.jsx)(
        _,
        {
          enabled: !!_,
          locked: !!_,
          slotIndex: _,
          onToggle: _,
          dragState: _,
          setDragState: _,
        },
        _,
      ),
    );
  }
  for (let _ = 0; _ < 48; _ += 8) {
    let _ = {
      gridColumnStart: _ + 1,
      gridColumnEnd: _ + 9,
    };
    _.push(
      (0, _.jsx)(
        `div`,
        {
          className: _(_, `HashMark` + _),
          style: _,
        },
        `HashMark` + _,
      ),
    );
  }
  for (let _ = 0; _ <= 48; _ += 8) {
    let _ = (0, _.default)()
        .startOf(`day`)
        .add(Math.floor(_ / 2), `hours`),
      _ = _.format(_.toDate()),
      _ = _ == 0 ? 0 : _ - 4,
      _ = _ == 0 || _ == 48 ? 4 : 8,
      _ = {
        gridColumnStart: _ + 1,
        gridColumnEnd: _ + 1 + _,
      };
    _.push(
      (0, _.jsx)(
        `div`,
        {
          className: _(_, `Hour` + _),
          style: _,
          children: _,
        },
        `Hour` + _,
      ),
    );
  }
  return (0, _.jsx)(_, {
    className: _(_, _),
    onMouseLeave: () => _(null),
    children: _,
  });
}
function _(_) {
  let { steamid: _, settings: _, dayIndexStart: _, closeModal: _ } = _,
    [_, _] = _.useState(_),
    _ = _.useRef(Object.assign({}, _)),
    _ = _(_);
  return (0, _.jsx)(_, {
    className: _,
    closeModal: _,
    onOK: () => {
      _.mutate(_.current), _();
    },
    strTitle: (0, _.jsx)(_, {
      className: _,
      children: _(`#Parental_PlaytimeWindows_Title`),
    }),
    children: (0, _.jsx)(_, {
      restrictions: _.current.playtime_restrictions?.playtime_days[_],
      dayIndex: _,
      setDayIndex: _,
    }),
  });
}
function _(_) {
  let { dayIndex: _, onChange: _ } = _,
    _ = _.useCallback(
      (_) => {
        _(_.data);
      },
      [_],
    ),
    _ = _();
  return (0, _.jsx)(_, {
    rgOptions: _,
    selectedOption: _,
    onChange: _,
    strDropDownButtonClassName: _,
    arrowClassName: void 0,
    contextMenuPositionOptions: {
      bMatchWidth: !0,
      bDisablePopTop: !0,
      bFitToWindow: !0,
    },
  });
}
function _(_) {
  let { restrictions: _, dayIndex: _, setDayIndex: _ } = _,
    [_, _] = _.useState(BigInt(parseInt(_?.allowed_time_windows) || 0)),
    _ = _();
  _.useEffect(() => {
    _(BigInt(parseInt(_?.allowed_time_windows) || 0));
  }, [_]);
  let _ = _.useCallback(
      (_) => {
        let _ = _ ^ (BigInt(1) << BigInt(_));
        (_.allowed_time_windows = _.toString()), _(_);
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_) => {
        (_.allowed_time_windows = _.toString()), _(_);
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        _.allowed_daily_minutes = _;
      },
      [_],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            dayIndex: _,
            onChange: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_),
              }),
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  _ == BigInt(0) &&
                    (0, _.jsx)(_, {
                      onClick: () => _(BigInt(0xffffffffffff)),
                      children: _(`#Parental_PlaytimeWindows_AllowAll`),
                    }),
                  _ != BigInt(0) &&
                    (0, _.jsx)(_, {
                      onClick: () => _(BigInt(0)),
                      children: _(`#Parental_PlaytimeWindows_ClearAll`),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            nWindows: _,
            onToggle: _,
          }),
          !_ &&
            (0, _.jsx)(_, {
              className: `pFHGbAueY40-`,
              nWindows: _,
              onSet: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        strLabel: `#Parental_Playtime_Limit`,
        nMinutes: _.allowed_daily_minutes || 0,
        onSelected: _,
      }),
    ],
  });
}
function _(_, _) {
  let _ = BigInt(0),
    _ = BigInt(1) << BigInt(_);
  for (let _ = _; _ < _; _++) (_ |= _), (_ <<= BigInt(1));
  return _;
}
function _(_) {
  let { className: _, nWindows: _, onSet: _, ..._ } = _,
    [_, _] = _.useState((0, _.default)().startOf(`day`)),
    [_, _] = _.useState((0, _.default)().startOf(`day`).add(1, `day`)),
    _ = _,
    _ = (0, _.default)(_),
    _ = (_.hour() ?? 0) * 2 + (_.minute() ?? 0) / 30,
    _ = (_.hour() ?? 0) * 2 + (_.minute() ?? 0) / 30 + (_.day() - _.day()) * 48,
    _ = _.useCallback(() => {
      let _ = _(_, _);
      _(_ | _);
    }, [_, _, _, _]),
    _ = _.useCallback(() => {
      let _ = _(_, _);
      _(_ & ~_);
    }, [_, _, _, _]),
    _ = _.useCallback(
      (_) => {
        let _ = _;
        _(_), _ > _ && _(_);
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _;
        (_ =
          _.hours() != 0 || _.minutes() != 0
            ? _.day(_.day())
            : _.day(_.day() + 1)),
          _(_ >= _ ? _ : (0, _.default)(_));
      },
      [_],
    );
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        children: _(`#Parental_PlaytimeWindows_From`),
      }),
      (0, _.jsx)(`div`, {
        children: _(`#Parental_PlaytimeWindows_To`),
      }),
      (0, _.jsx)(`div`, {}),
      (0, _.jsx)(_.default, {
        className: _,
        value: _,
        onChange: _,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: {
          minutes: {
            min: 0,
            max: 59,
            step: 30,
          },
        },
      }),
      (0, _.jsx)(_.default, {
        className: _,
        value: _,
        onChange: _,
        dateFormat: !1,
        open: !0,
        input: !1,
        timeConstraints: {
          minutes: {
            min: 0,
            max: 59,
            step: 30,
          },
        },
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              disabled: _ >= _,
              onClick: _,
              children: `+`,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              disabled: _ >= _,
              onClick: _,
              children: `-`,
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(`#Parental_Playtime_Hours`, _);
  return (
    _ == 0
      ? (_ = _(`#Parental_Playtime_Hours_None`))
      : _ == 24 && (_ = _(`#Parental_Playtime_Hours_NoRestriction`)),
    _
  );
}
function _(_) {
  return _(Math.floor(_ / 60));
}
function _(_) {
  let {
      strLabel: _,
      nMinutes: _,
      onSelected: _,
      nMin: _ = 0,
      nMax: _ = 25,
    } = _,
    _ = _() === `mobile` ? `below` : `inline`,
    _ = _.useCallback(
      (_) => {
        _(_.data * 60);
      },
      [_],
    ),
    _ = [];
  for (let _ = _; _ < _; _++)
    _.push({
      data: _,
      label: _(_),
    });
  return (0, _.jsx)(_, {
    layout: _,
    label: _(_),
    bottomSeparator: `none`,
    rgOptions: _,
    selectedOption: Math.floor(_ / 60),
    onChange: _,
    strDropDownButtonClassName: void 0,
    arrowClassName: void 0,
    contextMenuPositionOptions: {
      bMatchWidth: !0,
      bDisablePopTop: !0,
      bFitToWindow: !0,
    },
  });
}
function _(_) {
  let { steamid: _, settings: _, dayIndex: _, strDay: _ } = _,
    [_, _] = _.useState(!1),
    _ = BigInt(
      parseInt(
        _.playtime_restrictions?.playtime_days[_]?.allowed_time_windows,
      ) || 0,
    ),
    _ = _.playtime_restrictions?.playtime_days[_]?.allowed_daily_minutes || 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        className: _,
        onActivate: () => _(!0),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(_),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                children: [_(`#Parental_Playtime_Limit`), `:`],
              }),
              (0, _.jsx)(`div`, {
                children: _(_),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          steamid: _,
          settings: _,
          dayIndexStart: _,
          closeModal: () => _(!1),
        }),
      }),
    ],
  });
}
function _() {
  let _ = _.default.localeData(_.GetPreferredLocales()[0]).firstDayOfWeek(),
    _ = Intl.DateTimeFormat(_.GetPreferredLocales(), {
      weekday: `long`,
    });
  return Array.from(
    {
      length: 7,
    },
    (_, _) => {
      let _ = (_ + _) % 7;
      return {
        data: _,
        label: _.format((0, _.default)().day(_).toDate()),
      };
    },
  );
}
function _(_) {
  let { steamid: _, settings: _ } = _,
    _ = _().map((_) =>
      (0, _.jsx)(
        _,
        {
          steamid: _,
          settings: _,
          dayIndex: _.data,
          strDay: _.label,
        },
        _.data,
      ),
    );
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  let { steamid: _, settings: _ } = _,
    _ = _(_),
    _ = _.useCallback(
      (_) => {
        if (
          ((_.playtime_restrictions.apply_playtime_restrictions = _),
          !_.playtime_restrictions.playtime_days?.length)
        ) {
          _.playtime_restrictions.playtime_days = [];
          for (let _ = 0; _ < 7; _++)
            _.playtime_restrictions.playtime_days.push({});
        }
        _.mutate(_);
      },
      [_, _],
    ),
    _ = _.playtime_restrictions.apply_playtime_restrictions;
  return (0, _.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, _.jsx)(_, {
        className: _,
        bottomSeparator: `none`,
        label: _(`#Parental_EnablePlaytimeRestrictions`),
        checked: _,
        onChange: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          steamid: _,
          settings: _,
        }),
    ],
  });
}
function _(_) {
  let {
      steamid: _,
      eContentDescriptor: _,
      settings: _,
      fnSelectContentDescriptor: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_, !0),
    _ = (_) => _.excluded_store_content_descriptors,
    _ = (_, _) => {
      _.excluded_store_content_descriptors = _;
    },
    _ = (_) => _.excluded_community_content_descriptors,
    _ = (_, _) => {
      _.excluded_community_content_descriptors = _;
    },
    _ = (_, _) => (_) => {
      let _ = !_,
        _ = _(_);
      if (_) {
        let _ = [_].concat(_(_));
        for (let _ of _)
          _.findIndex((_) => _ === _.valueOf()) === -1 && _.push(_.valueOf());
      } else {
        let _ = [_].concat(_(_));
        for (let _ of _) {
          let _ = _.findIndex((_) => _ === _.valueOf());
          _ !== -1 && _.splice(_, 1);
        }
      }
      _(_, _), _.mutate(_);
    },
    _ = !_.excluded_store_content_descriptors.includes(_.valueOf()),
    _ = !_.excluded_community_content_descriptors.includes(_.valueOf());
  return (0, _.jsxs)(_, {
    className: _,
    navEntryPreferPosition: _.MAINTAIN_X,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _,
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(_, {
                className: void 0,
                onClick: () => _(_),
                children: _(`#ContentDescriptors_ViewExampleProducts`),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          checked: _,
          onChange: _(_, _),
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          checked: _,
          onChange: _(_, _),
        }),
      }),
    ],
  });
}
function _(_) {
  let { strName: _, strLogoUrl: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    focusable: !0,
    children: [
      (0, _.jsx)(`img`, {
        src: _,
      }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { eSelectedContentDescriptor: _, fnSelectDescriptor: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    active: _ !== null,
    children: (0, _.jsxs)(_, {
      title: _(`#ContentDescriptor_ExampleProductsHeader`),
      closeModal: () => _(null),
      children: [
        !_.data && (0, _.jsx)(_, {}),
        _.data?.length === 0 &&
          (0, _.jsx)(`p`, {
            children: _(`#ContentDescriptorExample_NoGames`),
          }),
        _.data?.length > 0 &&
          _.data.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                strName: _.name,
                strLogoUrl: _.logo,
              },
              _,
            ),
          ),
      ],
    }),
  });
}
function _(_) {
  let { steamid: _, settings: _ } = _,
    [_, _] = (0, _.useState)(null);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        eSelectedContentDescriptor: _,
        fnSelectDescriptor: _,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#Parental_ContentDescriptors_Intro`),
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                  }),
                  (0, _.jsx)(_, {
                    className: _,
                    children: _(`#Parental_ContentDescriptors_Store`),
                  }),
                  (0, _.jsx)(_, {
                    className: _,
                    children: _(`#Parental_ContentDescriptors_Community`),
                  }),
                ],
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    steamid: _,
                    eContentDescriptor: _,
                    settings: _,
                    fnSelectContentDescriptor: _,
                  },
                  _,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#Parental_Settings_PageError`),
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _.steamid,
    _ = _(),
    _ = () => {
      _.push(`/account/familymanagement`);
    },
    _ = _(!0),
    _ = _(_),
    _ = _(_),
    _ = _.isLoading || _.isLoading || _.isLoading,
    _ = _.isError || _.isError || _.isError;
  if (_ && !_)
    return (0, _.jsx)(_, {
      position: `center`,
    });
  if (_ || !_.data.settings) return (0, _.jsx)(_, {});
  let _ = _.data.family_group(),
    _ = _(_, _),
    _ = _(_, _.steamid);
  if (!_ || !_ || _.role() != 1 || _.role() != 2) return (0, _.jsx)(_, {});
  let { settings: _, mapAppsAllowed: _ } = _.data,
    _ = _.data;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
        children: _(`#Parental_Settings_Return`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            member: _,
            persona: _,
          }),
          (0, _.jsx)(_, {
            steamid: _,
            settings: _,
            familyGroup: _,
          }),
        ],
      }),
      _.is_enabled &&
        (0, _.jsx)(_, {
          steamID: _,
          settings: _,
          mapAppsAllowed: _,
        }),
    ],
  });
}
function _(_) {
  let { member: _, persona: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Parental_Settings_For`),
      }),
      (0, _.jsx)(_, {
        persona: _,
        role: _.role(),
      }),
    ],
  });
}
function _(_) {
  let { steamID: _, settings: _, mapAppsAllowed: _ } = _,
    _ = (0, _.useMemo)(
      () => [
        {
          name: _(`#Parental_Tab_AllowedGames`),
          key: `games`,
          contents: (0, _.jsx)(_, {
            steamid: _,
            settings: _,
            mapAppsAllowed: _,
          }),
        },
        {
          name: _(`#Parental_Tab_Settings`),
          key: `settings`,
          contents: (0, _.jsx)(_, {
            steamid: _,
            settings: _,
          }),
        },
        {
          name: _(`#Parental_Tab_PlaytimeLimits`),
          key: `playtime`,
          contents: (0, _.jsx)(_, {
            steamid: _,
            settings: _,
          }),
        },
      ],
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    tabs: _,
    classNameCtn: _,
    classNameTab: _,
  });
}
function _(_) {
  let { steamid: _, settings: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        steamid: _,
        settings: _,
      }),
      (0, _.jsx)(_, {
        steamid: _,
        settings: _,
      }),
    ],
  });
}
function _(_) {
  _();
  let _ = _.useRef(Math.floor(Date.now() / 1e3)).current - 2592e3,
    _ = _(_, _),
    _ = _(_, _);
  if (!_.isSuccess || !_.isSuccess) return [];
  let _ = _.data.feature_requests().map((_) => ({
    type: 0,
    key: `parentalfeature_` + _.requestid(),
    data: _,
    requestTimestamp: _.time_requested(),
  }));
  return (
    (_ = _.concat(
      _.data.playtime_requests().map((_) => ({
        type: 1,
        key: `parentalplaytime_` + _.requestid(),
        data: _,
        requestTimestamp: _.time_requested(),
      })),
    )),
    (_ = _.concat(
      _.data.requests().map((_) => ({
        type: 2,
        key: `purchaserequest_` + _.request_id(),
        data: _,
        requestTimestamp: _.time_requested(),
      })),
    )),
    _.sort((_, _) => _.requestTimestamp - _.requestTimestamp),
    _
  );
}
function _(_) {
  let { item: _, closeModal: _ } = _,
    _ = _(_),
    [_, _] = _.useState(3600),
    _ = _() === `mobile` ? `below` : `inline`,
    _ = _.useCallback(() => {
      _.mutateAsync({
        bApprove: !0,
        durationSec: _,
      });
    }, [_, _]),
    _ = _.useCallback((_, _) => {
      _(_.data);
    }, []),
    _ = [
      {
        label: _(`#FeatureRequest_AcceptDialog_1Hour`),
        data: 3600,
      },
      {
        label: _(`#FeatureRequest_AcceptDialog_4Hours`),
        data: 14400,
      },
      {
        label: _(`#FeatureRequest_AcceptDialog_24Hours`),
        data: 86400,
      },
      {
        label: _(`#FeatureRequest_AcceptDialog_Permanently`),
        data: 0,
      },
    ];
  return (0, _.jsxs)(_, {
    className: void 0,
    closeModal: _,
    onOK: _,
    strTitle: (0, _.jsx)(_, {
      className: void 0,
      children: _(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: [
      (0, _.jsx)(_, {
        children: _(`#FeatureRequest_AcceptDialog_BodyText`),
      }),
      (0, _.jsx)(_, {
        layout: _,
        bottomSeparator: `none`,
        label: _(`#FeatureRequest_AcceptDialog_AllowAccess`),
        rgOptions: _,
        selectedOption: _,
        onChange: _,
      }),
    ],
  });
}
function _(_) {
  let {
      currentMinutes: _,
      currentWindows: _,
      additionalMinutes: _,
      setAdditionalMinutes: _,
      nWindows: _,
      setWindows: _,
    } = _,
    _ = _ == BigInt(0xffffffffffff),
    _ = _ == 1440,
    _ = _.useCallback(
      (_) => {
        let _ = _ ^ (BigInt(1) << BigInt(_));
        _(_);
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_) => {
        _(_);
      },
      [_],
    ),
    _ = `#PlaytimeRequest_AcceptDialog_BodyText`;
  return (
    _ && (_ = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows`),
    _ && (_ = `#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours`),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          children: _(_),
        }),
        !_ &&
          (0, _.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, _.jsx)(`div`, {
                className: `EFhHT8zkCyk-`,
                children: _(_),
              }),
              (0, _.jsx)(_, {
                nWindows: _,
                nLockedWindows: _,
                onToggle: _,
              }),
            ],
          }),
        !_ &&
          (0, _.jsxs)(`div`, {
            className: `w7tEMhTubis-`,
            children: [
              _(
                `#PlaytimeRequest_AcceptDialog_CurrentHours`,
                Math.floor(_ / 60),
              ),
              ` `,
            ],
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `w7tEMhTubis-`,
            children: _(`#PlaytimeRequest_AcceptDialog_UnlimitedHours`),
          }),
        !_ &&
          (0, _.jsx)(_, {
            strLabel: `#PlaytimeRequest_AcceptDialog_AdditionalTime`,
            nMinutes: _,
            onSelected: _,
            nMax: 25 - _ / 60,
          }),
      ],
    })
  );
}
function _(_) {
  let { item: _, closeModal: _ } = _,
    _ = _(_),
    [_, _] = _.useState(!1),
    _ = _.current_playtime_restrictions().allowed_daily_minutes(),
    _ = BigInt(
      parseInt(_.current_playtime_restrictions().allowed_time_windows()),
    ),
    [_, _] = _.useState(60),
    [_, _] = _.useState(_);
  _.useEffect(() => {
    _(_ == 0 && _ == _);
  }, [_, _, _]);
  let _ = _.useCallback(() => {
    let _ = new _();
    _.restrictions(!0).set_allowed_daily_minutes(_ + _),
      _.restrictions(!0).set_allowed_time_windows(_.toString()),
      _.set_rtime_expires(_.time_expires()),
      _.mutateAsync({
        bApprove: !0,
        restrictions: _,
      });
  }, [_, _, _, _, _]);
  return (0, _.jsx)(_, {
    className: void 0,
    closeModal: _,
    onOK: _,
    bOKDisabled: _,
    strTitle: (0, _.jsx)(_, {
      className: void 0,
      children: _(`#FeatureRequest_AcceptDialog_Title`),
    }),
    children: (0, _.jsx)(_, {
      currentMinutes: _,
      currentWindows: _,
      additionalMinutes: _,
      setAdditionalMinutes: _,
      nWindows: _,
      setWindows: _,
    }),
  });
}
function _(_) {
  let { steamIDResponder: _, resultMessage: _, timeResponded: _ } = _,
    _ = _(_.ConvertTo64BitString()),
    _ = _?.data,
    _ = _(_.GetAccountID()),
    _ = _();
  return (
    _ || (_ = _(`#ParentalRequest_Canceled`)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _,
        }),
        !!_ &&
          (0, _.jsxs)(`div`, {
            className: `_7XDMq4s1SiY-`,
            children: [
              (0, _.jsx)(_, {
                className: void 0,
                persona: _,
                size: `Medium`,
                statusPosition: `right`,
              }),
              (0, _.jsx)(_, {
                persona: _.data,
                bParenthesizeNicknames: _.data
                  ?.preferences()
                  .parenthesize_nicknames(),
                strNickname: _,
              }),
            ],
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(_),
        }),
      ],
    })
  );
}
function _(_) {
  let { steamID: _, locToken: _, locTokenPlurality: _ } = _,
    _ = _(_.ConvertTo64BitString()),
    _ = _?.data,
    _ = _(_.GetAccountID()),
    _ = _();
  return _.isSuccess
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: void 0,
            persona: _,
            size: `Medium`,
            statusPosition: `right`,
          }),
          _(
            _,
            _,
            (0, _.jsx)(_, {
              persona: _.data,
              bParenthesizeNicknames: _.data
                ?.preferences()
                .parenthesize_nicknames(),
              strNickname: _,
            }),
          ),
        ],
      })
    : null;
}
function _(_) {
  let { item: _, nFeatures: _, onReject: _, renderApproveDialog: _ } = _,
    _ = _(),
    _ = _.steamid() == _,
    _ = !_,
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => {
      _(!0);
    }, []),
    _ = [],
    _ = _;
  for (let _ = 0; _ < 32; _++)
    if (_ & (1 << _)) {
      let _ = _,
        _ = _ ? _[_]?.requestDescriptionSelf : _[_]?.requestDescription;
      _ && _.push(_(_));
    }
  return _.length == 0 && !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                (0, _.jsx)(`div`, {
                  className: `hHB2RrlwISw-`,
                  children: _(
                    _
                      ? `#PlaytimeRequest_UserRequested_Self`
                      : `#FeatureRequest_UserRequested_Self`,
                  ),
                }),
              !_ &&
                (0, _.jsx)(_, {
                  steamID: new _(_.steamid()),
                  locToken: _
                    ? `#PlaytimeRequest_UserRequested`
                    : `#FeatureRequest_UserRequested`,
                  locTokenPlurality: 1,
                }),
              (0, _.jsxs)(`ul`, {
                className: _,
                children: [
                  _.map((_) =>
                    (0, _.jsx)(
                      `li`,
                      {
                        className: _,
                        children: _,
                      },
                      _,
                    ),
                  ),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_.time_requested()),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                !_.time_responded() &&
                (0, _.jsxs)(_, {
                  className: `_7KXfklfuGPw-`,
                  children: [
                    (0, _.jsx)(_, {
                      noFocusRing: !1,
                      onClick: _,
                      children: _(`#ParentalRequest_Accept`),
                    }),
                    (0, _.jsx)(_, {
                      noFocusRing: !1,
                      onClick: _,
                      children: _(`#ParentalRequest_Reject`),
                    }),
                  ],
                }),
              _ &&
                !_.time_responded() &&
                (0, _.jsx)(`div`, {
                  className: _(`_7KXfklfuGPw-`, `l-R1A4yiKt4-`),
                  children: _(`#ParentalRequest_Pending`),
                }),
              !!_.time_responded() &&
                (0, _.jsx)(_, {
                  steamIDResponder: new _(_.steamid_responder()),
                  resultMessage: _(
                    _.approved()
                      ? `#ParentalRequest_AcceptedBy`
                      : `#ParentalRequest_RejectedBy`,
                  ),
                  timeResponded: _.time_responded(),
                }),
              !_.time_responded() &&
                (0, _.jsx)(_, {
                  active: _,
                  children: _(() => _(!1)),
                }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { item: _ } = _,
    _ = _(_),
    _ = _.useCallback(() => {
      _.mutateAsync({
        bApprove: !1,
        durationSec: 0,
      });
    }, [_]),
    _ = _.useCallback(
      (_) =>
        (0, _.jsx)(_, {
          item: _,
          closeModal: _,
        }),
      [_],
    ),
    _ = _.features();
  return (0, _.jsx)(_, {
    item: _,
    nFeatures: _,
    onReject: _,
    renderApproveDialog: _,
  });
}
function _(_) {
  let { item: _ } = _,
    _ = _(_),
    _ = _.useCallback(() => {
      _.mutateAsync({
        bApprove: !1,
        restrictions: null,
      });
    }, [_]),
    _ = _.useCallback(
      (_) =>
        (0, _.jsx)(_, {
          item: _,
          closeModal: _,
        }),
      [_],
    );
  return (0, _.jsx)(_, {
    item: _,
    onReject: _,
    renderApproveDialog: _,
  });
}
function _(_) {
  let { packageIDs: _, bundleIDs: _ } = _;
  return !_.length && !_.length
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _(`#PurchaseRequest_Purchased`, _.length + _.length),
          }),
          (0, _.jsx)(_, {
            packageIDs: _,
            bundleIDs: _,
          }),
        ],
      });
}
function _(_) {
  let { packageIDs: _, bundleIDs: _ } = _,
    [_, _] = (0, _.useState)(!1);
  if (!_.length && !_.length) return null;
  let _ = _.length + _.length,
    _ = null;
  if (_ || _ <= 5) _ = _(_, _, _);
  else {
    (_ = _(_, _, 5)),
      _.push(
        (0, _.jsx)(
          `span`,
          {
            children: _(`#PurchaseRequest_PackageLinksFinalSeparator`),
          },
          `sepand`,
        ),
      );
    let _ = _.length + _.length - 5;
    _.push(
      (0, _.jsx)(
        _,
        {
          onActivate: () => _(!0),
          className: _(_, void 0),
          focusable: !0,
          children: _(`#PurchaseRequest_PackageLinksShowMore`, _),
        },
        `showMore`,
      ),
    );
  }
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_, _, _) {
  let _ = [],
    _ = 0;
  for (let _ = 0; _ < _.length && _ < _; _++, _++) {
    let _ = _[_];
    _.push(
      (0, _.jsx)(
        _,
        {
          packageID: _,
        },
        _,
      ),
    ),
      _ < _ - 1 &&
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _(`#PurchaseRequest_PackageLinksSeparator`),
            },
            `sep` + _,
          ),
        );
  }
  for (let _ = 0; _ < _.length && _ < _; _++, _++) {
    let _ = _[_];
    _.push(
      (0, _.jsx)(
        _,
        {
          bundleID: _,
        },
        _,
      ),
    ),
      _ < _ - 1 &&
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _(`#PurchaseRequest_PackageLinksSeparator`),
            },
            `sep` + _,
          ),
        );
  }
  return _;
}
function _(_) {
  let { packageID: _ } = _,
    [_] = _(_, {});
  return (0, _.jsx)(_, {
    storeItem: _,
  });
}
function _(_) {
  let { bundleID: _ } = _,
    [_] = _(_, {});
  return (0, _.jsx)(_, {
    storeItem: _,
  });
}
function _(_) {
  let { storeItem: _ } = _,
    _ = {
      direction: `right`,
      style: {
        minWidth: `320px`,
      },
    },
    _ = _(_),
    _ = _.useCallback(
      (_) => {
        _(_(_), _.GetStorePageURL());
      },
      [_],
    );
  return _
    ? (_.GetStoreItemType(),
      (0, _.jsx)(_, {
        _: _,
        name: _.GetName(),
        bPreventNavigation: !0,
        bHidePrice: !1,
        bShowWishlistButton: !1,
        hoverProps: _,
        className: _,
        children: (0, _.jsx)(_, {
          className: _(_, void 0),
          focusable: !0,
          onActivate: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _.GetName(),
          }),
        }),
      }))
    : null;
}
function _(_) {
  let { item: _, familyGroupID: _ } = _,
    _ = _(),
    _ = _.requester_steamid() === _,
    _ = _(_, _.request_id(), _ ? 4 : 1),
    { setErrorMessage: _ } = _();
  _(
    _,
    _
      ? `#FamilyManagement_ErrorCancelPurchaseRequest`
      : `#FamilyManagement_ErrorDeclinePurchaseRequest`,
    _.k_EFamilyQueryDeclinePurchaseRequest,
  );
  let _ = _(_, _.request_id()),
    _ = () => {
      _(null), _.mutate();
    },
    _ = ``;
  if (_.is_completed())
    switch (_.response_action()) {
      case 0:
      case 5:
        break;
      case 1:
        _ = _(`#PurchaseRequest_DeclinedBy`);
        break;
      case 2:
        _ = _(`#PurchaseRequest_PurchasedBy`);
        break;
      case 3:
        _ = _(`#PurchaseRequest_Abandoned`);
        break;
      case 4:
        _ = _(`#PurchaseRequest_CanceledBy`);
    }
  let _ = !1;
  return (
    _.purchased_packageids() &&
      _.requested_packageids() &&
      _.purchased_packageids().length == _.requested_packageids().length &&
      _.purchased_bundleids() &&
      _.requested_bundleids() &&
      _.purchased_bundleids().length == _.requested_bundleids().length &&
      (_ = !0),
    (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `hHB2RrlwISw-`,
                children: _(
                  `#PurchaseRequest_UserRequested_Self`,
                  _.requested_packageids()?.length,
                ),
              }),
            !_ &&
              (0, _.jsx)(_, {
                steamID: new _(_.requester_steamid()),
                locToken: `#PurchaseRequest_UserRequested`,
                locTokenPlurality: _.requested_packageids()?.length,
              }),
            (0, _.jsx)(_, {
              packageIDs: _.requested_packageids(),
              bundleIDs: _.requested_bundleids(),
            }),
            !_ &&
              (0, _.jsx)(_, {
                packageIDs: _.purchased_packageids(),
                bundleIDs: _.purchased_bundleids(),
              }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !_.time_responded() &&
              (0, _.jsxs)(_, {
                className: `_7KXfklfuGPw-`,
                children: [
                  !_ &&
                    !_.time_responded() &&
                    (0, _.jsx)(`a`, {
                      href: _,
                      children: (0, _.jsx)(_, {
                        noFocusRing: !1,
                        children: _(`#PurchaseRequest_View`),
                      }),
                    }),
                  (0, _.jsx)(_, {
                    noFocusRing: !1,
                    onClick: _,
                    children: _(
                      _
                        ? `#PurchaseRequest_Cancel`
                        : `#PurchaseRequest_Decline`,
                    ),
                  }),
                ],
              }),
            _.time_responded() &&
              (0, _.jsx)(_, {
                steamIDResponder: new _(_.responder_steamid()),
                resultMessage: _,
                timeResponded: _.time_responded(),
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { item: _, familyGroupID: _ } = _,
    _;
  switch (_.type) {
    case 0:
      _ = (0, _.jsx)(_, {
        item: _.data,
      });
      break;
    case 1:
      _ = (0, _.jsx)(_, {
        item: _.data,
      });
      break;
    case 2:
      _ = (0, _.jsx)(_, {
        item: _.data,
        familyGroupID: _,
      });
      break;
    default:
      _ = null;
  }
  return _;
}
function _(_) {
  let { rgRequests: _, familyGroupID: _ } = _,
    _ = _.length > 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _(`#FamilyManagement_NoCurrentRequests`),
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `woHeMzP52eU-`,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                familyGroupID: _,
              },
              _.key,
            ),
          ),
        }),
    ],
  });
}
var _ = `_0-FZqOUzDlc-`,
  _ = `EVvaYNdNnEA-`,
  _ = `#1a9fff`,
  _ = `rgba(255, 255, 255, 0.1)`,
  _ = `-B9JuEjgX1w-`,
  _ = `QPAYDnk6EIg-`,
  _ = `w0D3nFNatyk-`,
  _ = `UO--Fvrpn5c-`,
  _ = `iHOuJ8etUNE-`,
  _ = `RFXvJWT1XBU-`,
  _ = `r351c7U-moI-`,
  _ = `AVoWfWXi0a8-`,
  _ = `i0XsOg0rw-c-`,
  _ = `yKr0aQXMsT4-`,
  _ = `a1R4qfWWLP0-`,
  _ = `QL0WsSH56Qc-`,
  _ = `qBByTNg5CCA-`,
  _ = `_7awDc8oYD5M-`,
  _ = `HaVgAD9hUMg-`,
  _ = `QHjYWVWP5ss-`,
  _ = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = 1,
  _ = 24 / _,
  _ = 14;
function _(_) {
  let { steamid: _ } = _,
    _ = _(_);
  if ((_(), _.isLoading))
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}),
    });
  let _ = (_) => {
      let _ = _.getTime() / 1e3,
        _ = new Date(_);
      _.setDate(_.getDate() + 1);
      let _ = _.getTime() / 1e3;
      return _.isSuccess
        ? _.data.filter((_) => _.time_start <= _ && _.time_end >= _)
        : [];
    },
    _ = new Date();
  _.setHours(0, 0, 0, 0);
  let _ = [...Array(_).keys()].map((_) => {
    let _ = new Date(_);
    return _.setDate(_.getDate() - _), _;
  });
  return (0, _.jsx)(
    `div`,
    {
      className: _,
      children: _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            date: _,
            vecSessions: _(_),
          },
          _,
        ),
      ),
    },
    _,
  );
}
function _(_) {
  let { date: _, vecSessions: _ } = _,
    _ = new Date(_);
  _.setDate(_.getDate() + 1);
  let _ = _.getTime() / 1e3,
    _ = _.getTime() / 1e3,
    _ = _(_, !0, !0, !1, !0),
    [_, _] = (0, _.useState)(!1),
    _ = 0;
  for (let _ of _) _ += Math.min(_.time_end, _) - Math.max(_.time_start, _);
  let _ = _ === 0 ? _(`#FamilyPlaytime_NoPlaytime`) : _(_),
    _ = (_) => {
      let _ = _ + _ * 3600 * _,
        _ = _ + _ * 3600 * (_ + 1);
      return _.filter((_) => _.time_start <= _ && _.time_end >= _);
    },
    _ = new Map();
  for (let _ of _) {
    _.has(_.appid) || _.set(_.appid, 0);
    let _ = Math.min(_.time_end, _) - Math.max(_.time_start, _);
    _.set(_.appid, _.get(_.appid) + _);
  }
  let _ = Array.from(_.entries());
  _.sort((_, _) => _[1] - _[1]);
  let _ = _.length == 0;
  return (0, _.jsxs)(_, {
    className: _(_, _ && `PR1QBc3WtJ4-`),
    children: [
      (0, _.jsxs)(_, {
        className: _,
        onClick: _ ? void 0 : () => _(!_),
        children: [
          (0, _.jsxs)(_, {
            className: _,
            onActivate: _ ? void 0 : () => _(!_),
            children: [
              _,
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`span`, {
                className: _,
                children: _,
              }),
            ],
          }),
          _ > 0 &&
            [...Array(_).keys()].map((_) =>
              (0, _.jsx)(
                _,
                {
                  nDate: _,
                  nBin: _,
                  vecSessions: _(_),
                },
                _,
              ),
            ),
          !_ &&
            (0, _.jsx)(_, {
              bExpanded: _,
              setExpanded: _,
            }),
        ],
      }),
      _ &&
        !_ &&
        (0, _.jsx)(_, {
          className: `RUeYA1OokLE-`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                appid: _[0],
                nSecondsPlayed: _[1],
              },
              _,
            ),
          ),
        }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_] = _(_, _.k_DataRequest_Assets);
  if (!_) return null;
  let _ = `${_.STORE_ITEM_BASE_URL}steam/apps/`,
    _ = [`${_}${_}/library_600x900.jpg`, `${_}${_}/portrait.png`, _];
  _.GetAssets()?.GetLibraryCapsuleURL() &&
    (_ = [_.GetAssets()?.GetLibraryCapsuleURL(), ..._]);
  let _ = () => {
      _(!0);
    },
    _ = () => {
      _ < _.length && _((_) => _ + 1);
    },
    _ = _[_];
  return (0, _.jsx)(`img`, {
    className: _(_, _ && `oUbDv5hUlwY-`),
    onLoad: _,
    onError: _,
    src: _,
  });
}
function _(_) {
  let { appid: _ } = _,
    [_] = _(_, _.k_DataRequest_Assets);
  return _
    ? (0, _.jsx)(_, {
        href: _.GetStorePageURL(),
        children: (0, _.jsx)(_, {
          appid: _,
        }),
      })
    : null;
}
function _(_) {
  let { nDate: _, nBin: _, vecSessions: _ } = _,
    _ = _ + _ * 3600 * _,
    _ = _ + _ * 3600 * (_ + 1),
    [_, _] = (0, _.useState)(!1),
    _ = 0,
    _ = new Set();
  for (let _ of _)
    (_ += Math.min(_.time_end, _) - Math.max(_.time_start, _)), _.add(_.appid);
  let _ = _,
    _ = _,
    _ = Math.round((100 * _) / (_ * 3600)),
    _ = `linear-gradient(0deg, ${_} 0%, ${_} ${_}%, ${_} ${_}%, ${_} 100%)`,
    _ = (_) => {
      if (_ === 0 || _ === _) return ``;
      let _ = Math.round(_ / 6);
      return _ % _ === _ / 2
        ? new Date(_ * 1e3).toLocaleTimeString(_.GetPreferredLocales(), {
            hour: `numeric`,
          })
        : ``;
    },
    _ =
      _.size === 0
        ? null
        : (0, _.jsx)(_, {
            className: _,
            children: Array.from(_).map((_) =>
              (0, _.jsx)(
                _,
                {
                  appid: _,
                },
                _,
              ),
            ),
          }),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [_(_), ` - `, _(_)],
        }),
        _,
      ],
    });
  return (0, _.jsxs)(_, {
    focusable: _.size > 0,
    onOKButton: () => _(!0),
    children: [
      (0, _.jsxs)(_, {
        active: _,
        onDismiss: () => _(!1),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#FamilyPlaytime_GamesPlayedBetween`, _(_), _(_)),
          }),
          _,
        ],
      }),
      (0, _.jsx)(_, {
        toolTipContent: _,
        nDelayShowMS: 0,
        children: (0, _.jsx)(`div`, {
          className: _(_),
          style: {
            background: _,
          },
          children: (0, _.jsx)(`span`, {
            className: _,
            children: _(_),
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, nSecondsPlayed: _ } = _,
    [_] = _(_, _.k_DataRequest_Assets);
  return _
    ? (0, _.jsx)(_, {
        href: _.GetStorePageURL(),
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                appid: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(_),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.GetName(),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { familyGroupID: _ } = _,
    _ = _(_),
    _ = _.data
      ?.members()
      .filter((_) => _.role() === 2)
      .map((_) => _.steamid()),
    _ = _(_),
    _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(_ ? _[0] : null);
  if (_.isLoading || _.some((_) => _.isLoading) || _.isLoading)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}),
    });
  if (_.length === 0)
    return (0, _.jsx)(`p`, {
      children: _(`#FamilyPlaytime_NoChildren`),
    });
  let _ = _.map((_) => ({
    label: (0, _.jsx)(_, {
      persona: _.data,
      bIgnorePersonaStatus: !0,
      bParenthesizeNicknames: _.data?.preferences().parenthesize_nicknames(),
      strNickname: _.data.get(_.data.m_steamid.GetAccountID()),
    }),
    data: _.data.m_steamid.ConvertTo64BitString(),
  }));
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        rgOptions: _,
        selectedOption: _,
        onChange: (_) => _(_.data),
        label: _(`#FamilyPlaytime_ShowPlaytimeFor`),
        layout: `inline`,
        childrenContainerWidth: `max`,
      }),
      (0, _.jsx)(_, {
        steamid: _,
      }),
    ],
  });
}
var _ = function () {
  let [_, _] = (0, _.useState)(null),
    _ = _(),
    _ = _();
  if (_.isError) return null;
  let _ = !_.data?.is_not_member_of_any_group(),
    _ = _.HELP_BASE_URL + `faqs/view/054C-3167-DD7F-49D4`;
  return (0, _.jsx)(_, {
    staleTimeMs: 3e3,
    children: (0, _.jsxs)(_.Provider, {
      value: {
        errorMessage: _,
        setErrorMessage: _,
      },
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`span`, {
              className: void 0,
              children: _(`#FamilyManagement_Title`),
            }),
            (0, _.jsx)(_, {
              className: void 0,
              href: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        _.isLoading &&
          (0, _.jsx)(`div`, {
            className: `yQG1LU0zHT0-`,
            children: (0, _.jsx)(_, {}),
          }),
        !_.isLoading &&
          (0, _.jsx)(`div`, {
            className: `j6sN-xNfa0w-`,
            children: (0, _.jsx)(_, {
              className: `G56z-wA-GqE-`,
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    path: `${_.path}/create`,
                    component: _,
                  }),
                  (0, _.jsx)(_, {
                    path: `${_.path}/join`,
                    component: _,
                  }),
                  (0, _.jsx)(_, {
                    path: `${_.path}/confirm_invite`,
                    component: _,
                  }),
                  (0, _.jsx)(_, {
                    path: `${_.path}/parentalcontrols/:steamid`,
                    component: _,
                  }),
                  (0, _.jsx)(_, {
                    children: _
                      ? (0, _.jsx)(_, {
                          familyGroupID: _.data.family_groupid(),
                        })
                      : (0, _.jsx)(_, {}),
                  }),
                ],
              }),
            }),
          }),
      ],
    }),
  });
};
function _(_) {
  let _ = [
    {
      name: _(`#FamilyManagement_SetupTab`),
      key: `setup`,
      contents: _.children,
    },
  ];
  return (0, _.jsx)(_, {
    tabs: _,
    classNameCtn: _,
  });
}
function _(_) {
  let _ = [
    {
      name: _(`#FamilyManagement_JoinAFamily`),
      key: `setup`,
      contents: _.children,
    },
  ];
  return (0, _.jsx)(_, {
    tabs: _,
    classNameCtn: _,
  });
}
function _(_) {
  let { familyGroupID: _ } = _,
    { mutate: _ } = _(_);
  return (0, _.jsx)(_, {
    className: _,
    onClick: () => _(),
    children: _(`#FamilyManagement_UndeleteButton`),
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    { setErrorMessage: _ } = _();
  if (_.isLoading) return (0, _.jsx)(_, {});
  let _ = _.data?.pending_group_invites().length,
    _ = () => {
      _(``), _.push(`/account/familymanagement/create`);
    },
    _ = () => {
      _(``), _.push(`/account/familymanagement/join`);
    },
    _;
  _ =
    _ === 0
      ? null
      : _ === 1
        ? _(`#FamilyManagement_SelectJoinButtonPendingInvite`)
        : _(`#FamilyManagement_SelectJoinButtonPendingInvites`, _);
  let _ = _.data.cooldown_seconds_remaining() > 0,
    _ = _.data.can_undelete_last_joined_family();
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`p`, {
              children: _(`#FamilyManagement_CreateInstructions`),
            }),
            (0, _.jsx)(`p`, {
              children: _(`#FamilyManagement_CreateInstructions_2`),
            }),
          ],
        }),
        (_ || _) &&
          (0, _.jsxs)(`div`, {
            className: `_4Igk3YwHgW0-`,
            children: [
              (0, _.jsx)(_, {
                color: `#ffc82c`,
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  !_ && _(`#FamilyManagement_CanRejoin`),
                  _ && _(`#FamilyManagement_CanUndelete`),
                ],
              }),
              _ &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    familyGroupID: _.data.latest_joined_family_groupid(),
                  }),
                }),
            ],
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(_, {
              className: _,
              onClick: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#FamilyManagement_SelectJoinButton`),
                }),
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: (0, _.jsx)(_, {}),
                }),
                _ > 0 &&
                  (0, _.jsx)(`div`, {
                    className: `WXSieSksNro-`,
                    children: _,
                  }),
              ],
            }),
            (0, _.jsxs)(_, {
              className: _,
              onClick: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#FamilyManagement_SelectCreateButton`),
                }),
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { active: _, isCreate: _, closeModal: _, cooldownSeconds: _ } = _;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsxs)(_, {
      bAlertDialog: !0,
      onOK: _,
      closeModal: _,
      strTitle: _(
        _
          ? `#FamilyManagement_FamilyCreated`
          : `#FamilyManagement_FamilyJoined`,
      ),
      children: [
        (0, _.jsx)(_, {
          cooldownSecondsRemaining: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(
            _
              ? `#FamilyManagement_CooldownAllowed_2_Create`
              : `#FamilyManagement_CooldownAllowed_2_Join`,
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(``),
    _ = _();
  _();
  let _ = _(),
    [_, _, _] = _(!1),
    { setErrorMessage: _ } = _();
  return (
    _(_, `#FamilyManagement_ErrorCreateFamily`, _.k_EFamilyQueryCreateFamily),
    _.data && !_.data?.is_not_member_of_any_group() && !_
      ? (0, _.jsx)(_, {
          _: `/account/familymanagement`,
        })
      : _.isPending
        ? (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          })
        : (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                active: _,
                isCreate: !0,
                closeModal: _,
                cooldownSeconds: _.data.cooldown_seconds_remaining(),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    children: _(`#FamilyManagement_CreateAFamilyHeader`),
                  }),
                  (0, _.jsx)(`p`, {
                    children: _(`#FamilyManagement_CreateAFamilyText`),
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        type: `text`,
                        onChange: (_) => {
                          _(_.target.value), _(null);
                        },
                        value: _,
                        placeholder: _(
                          `#FamilyManagement_InputNamePlaceholder`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        disabled: _.length === 0,
                        onClick: () => {
                          _(null),
                            _.mutate(_, {
                              onSuccess: (_) => {
                                _.cooldown_skip_granted() && _();
                              },
                            });
                        },
                        children: _(`#FamilyManagement_FinalizeCreateFamily`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
  );
}
function _(_) {
  let _ = _(),
    _ = _.data?.pending_group_invites().length,
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(_(), _),
    _ = _(_);
  if (_.data && !_.data?.is_not_member_of_any_group() && !_)
    return _
      ? (0, _.jsx)(_, {
          _: `/account/familymanagement?invitation=${_}`,
        })
      : (0, _.jsx)(_, {
          _: `/account/familymanagement`,
        });
  let _ = null,
    _ = _.data.pending_group_invites();
  if (_) {
    let _ = _.findIndex((_) => _.family_groupid() === _);
    _ !== -1 && ((_ = _[_]), (_ = _.slice()), _.splice(_, 1));
  }
  return (
    _ !== null &&
      _.awaiting_2fa() &&
      _.IN_MOBILE_WEBVIEW &&
      (_.mutate(),
      (window.location.href = `steammobile://confirmations?first_of_type=11`)),
    _
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            active: _,
            isCreate: !1,
            closeModal: () => {
              _(!1), _.push(`/account/familymanagement`);
            },
            cooldownSeconds: _.data?.cooldown_seconds_remaining(),
          }),
        })
      : _
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`p`, {
                  children: [
                    _(
                      `#FamilyManagement_PendingInvitesText`,
                      (0, _.jsx)(`span`, {
                        className: _,
                      }),
                      (0, _.jsx)(`b`, {}),
                    ),
                    ` `,
                  ],
                }),
                (0, _.jsx)(
                  _,
                  {
                    inviteID: _.invite_id(),
                    inviterSteamID: _.inviter_steamid(),
                    familyGroupID: _.family_groupid(),
                    role: _.role(),
                    setCooldownModalActive: _,
                  },
                  _,
                ),
                _.length > 0 &&
                  !_ &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)(`p`, {
                      children: [
                        _(
                          _.length === 1
                            ? `#FamilyManagement_OtherInvite`
                            : `#FamilyManagement_OtherInvites`,
                          _.length,
                        ),
                        ` `,
                        (0, _.jsx)(`a`, {
                          onClick: () => _(!0),
                          children: _(`#FamilyManagement_Expand`),
                        }),
                      ],
                    }),
                  }),
                _.length > 0 &&
                  _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)(`p`, {
                        children: [
                          _(
                            _.length === 1
                              ? `#FamilyManagement_OtherInvite`
                              : `#FamilyManagement_OtherInvites`,
                            _.length,
                          ),
                          ` `,
                          (0, _.jsx)(`a`, {
                            onClick: () => _(!1),
                            children: _(`#FamilyManagement_Collapse`),
                          }),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              inviterSteamID: _.inviter_steamid(),
                              inviteID: _.invite_id(),
                              familyGroupID: _.family_groupid(),
                              role: _.role(),
                              setCooldownModalActive: _,
                            },
                            _.family_groupid(),
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `tf04-wL8lP4-`,
                    children: _(`#FamilyManagement_IncomingInviteGone`),
                  }),
                (0, _.jsx)(_, {
                  children: _(`#FamilyManagement_JoinAFamily`),
                }),
                (0, _.jsx)(`p`, {
                  children: _(`#FamilyManagement_ToJoinInstructions`),
                }),
                (0, _.jsx)(`br`, {}),
                _ > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        children: _(`#FamilyManagement_PendingInvitesHeader`),
                      }),
                      (0, _.jsxs)(`p`, {
                        children: [
                          _(
                            `#FamilyManagement_PendingInvitesText`,
                            (0, _.jsx)(`span`, {
                              className: `rtDwRYVllRQ-`,
                            }),
                            (0, _.jsx)(`b`, {}),
                          ),
                          ` `,
                        ],
                      }),
                      _.data?.pending_group_invites().map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            inviteID: _.invite_id(),
                            inviterSteamID: _.inviter_steamid(),
                            familyGroupID: _.family_groupid(),
                            role: _.role(),
                            setCooldownModalActive: _,
                          },
                          _.family_groupid(),
                        ),
                      ),
                    ],
                  }),
              ],
            }),
          })
  );
}
function _(_) {
  let _ = _(),
    _ = _.data.family_groupid(),
    _ = _.data.role() === 1,
    _ = _(_);
  return (
    _(_, `#FamilyManagement_ErrorLoadFamily`, _.k_EFamilyQueryLoadFamily),
    _.isLoading
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        })
      : _.isError
        ? null
        : (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                familyGroupID: _,
                isAdult: _,
              }),
              (0, _.jsx)(_, {
                familyGroupID: _,
              }),
            ],
          })
  );
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _();
  function _() {
    _.push(`/account/familymanagement`);
  }
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _(_, `account_header_line noicon`),
      onClick: _,
      children: _.children,
    }),
  });
}
function _() {
  let _ = _(_(), _),
    _ = _(),
    _ = !_.data.is_not_member_of_any_group();
  return !_ || !_ || _ === _.data.family_groupid()
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            color: _,
          }),
          (0, _.jsx)(`span`, {
            children: _(`#FamilyManagement_CannotJoinWhileAlreadyMember`),
          }),
        ],
      });
}
function _(_) {
  let { familyGroupID: _, isAdult: _ } = _,
    _ = _(_);
  _(_, `#FamilyManagement_ErrorLoadFamily`, _.k_EFamilyQueryLoadFamily);
  let _ = _.data,
    _ = _.members().length + _.pending_invites().length,
    _ = _.free_spots() + _.members().length + _.pending_invites().length;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        familyGroupID: _,
        isAdult: _,
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _(`#FamilyManagement_MemberCount`, _, _),
        }),
    ],
  });
}
function _(_) {
  let _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}`;
  return _.isSuccess
    ? (0, _.jsx)(_, {
        className: void 0,
        href: _,
        children: (0, _.jsx)(`b`, {
          children: (0, _.jsx)(_, {
            steamid: _,
          }),
        }),
      })
    : null;
}
function _(_) {
  let { familyGroupID: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = [
      {
        name: _(`#FamilyManagement_ManageTab`),
        key: `manage`,
        contents: (0, _.jsx)(_, {}),
      },
    ];
  return (
    _.push({
      name: _(`#FamilyManagement_LibraryTab`),
      key: `library`,
      contents: (0, _.jsx)(_, {
        familyGroupID: _,
      }),
    }),
    _.push({
      name: _(`#FamilyManagement_RequestsTab`),
      key: `requests`,
      contents: (0, _.jsx)(_, {
        rgRequests: _,
        familyGroupID: _,
      }),
    }),
    _ === 1 &&
      (_.push({
        name: _(`#FamilyManagement_PlaytimeTab`),
        key: `playtime`,
        contents: (0, _.jsx)(_, {
          familyGroupID: _,
        }),
      }),
      _.push({
        name: _(`#FamilyManagement_HistoryTab`),
        key: `history`,
        contents: (0, _.jsx)(_, {
          familyGroupID: _,
          nFamilyHistoryRowHeight: _,
          FamilyHistory: _,
          Entry: _,
          Timestamp: _,
          EntryText: _,
          FnRenderName: _,
        }),
      })),
    (0, _.jsx)(_, {
      autoFocus: !0,
      focusableIfEmpty: !0,
      children: (0, _.jsx)(_, {
        tabs: _,
        classNameCtn: _,
        classNameTab: _,
        preferredFocus: !0,
      }),
    })
  );
}
function _(_) {
  let { familyGroupID: _ } = _,
    _ = _(_),
    _ = _(_);
  _(_, `#FamilyManagement_ErrorLoadFamily`, _.k_EFamilyQueryLoadFamily);
  let _ = _();
  if (_.isLoading)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}),
    });
  if (_.isError) return null;
  let _ = _ == 1,
    _ = _.data.members().findIndex((_) => _.steamid() === _),
    _ = _.data.members()[_],
    _ = _.data.members().slice();
  return (
    _ !== -1 && _.splice(_, 1),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _ !== -1 &&
          (0, _.jsx)(
            _,
            {
              familyGroupID: _,
              member: _,
            },
            _.steamid(),
          ),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              familyGroupID: _,
              member: _,
            },
            _.steamid(),
          ),
        ),
        _ &&
          _.data?.pending_invites().map((_) =>
            (0, _.jsx)(
              _,
              {
                familyGroupID: _,
                member: _,
              },
              _.steamid(),
            ),
          ),
        _ &&
          _.data.free_spots() > 0 &&
          (0, _.jsx)(_, {
            familyGroupID: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { familyGroupID: _, isAdult: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_),
    { setErrorMessage: _ } = _();
  _(_, `#FamilyManagement_ErrorLoadFamily`, _.k_EFamilyQueryLoadFamily);
  let [_, _] = (0, _.useState)(_.data?.name()),
    _ = _(_);
  _(_, `#FamilyManagement_ErrorModifyFamily`, _.k_EFamilyQueryModifyFamily);
  let _ = (_) => {
    _(null), _.mutate(_), _(!1);
  };
  return _ && _
    ? (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#FamilyManagement_YourFamily`),
          }),
          (0, _.jsx)(_, {
            className: _,
            type: `text`,
            onChange: (_) => {
              _(_.target.value), _(null);
            },
            value: _,
            placeholder: _(`#FamilyManagement_InputNamePlaceholder`),
            maxLength: 128,
          }),
          (0, _.jsx)(_, {
            className: _,
            noFocusRing: !1,
            onClick: () => _(_),
            children: _(`#FamilyManagement_EditFamilyNameSaveButton`),
          }),
          (0, _.jsx)(_, {
            className: _,
            noFocusRing: !1,
            onClick: () => {
              _(!1), _(null);
            },
            children: _(`#FamilyManagement_EditFamilyNameCancelButton`),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#FamilyManagement_YourFamily`),
          }),
          (0, _.jsxs)(_, {
            className: _,
            onActivate: _
              ? () => {
                  _(!0), _(null);
                }
              : void 0,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: `_4pQtapRnbvg-`,
                  children: (0, _.jsx)(_, {}),
                }),
            ],
          }),
        ],
      });
}
export {
  _ as FamilyTabContainer,
  _ as GenerateNameElementForHistory,
  _ as default,
};
