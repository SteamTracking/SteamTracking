var _ = _(_(), 1),
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
    } = _,
    _ = _(),
    _ = _ + _,
    { observeElementOffset: _, fnGetRowWindow: _ } = _(_, _ !== void 0, _ * _),
    _ = _({
      count: _,
      scrollMargin: _,
      estimateSize: _.useCallback(() => _, [_]),
      measureElement: _,
      getItemKey: _,
      overscan: _,
      initialOffset: _ ?? (() => window.scrollY),
      initialRect: {
        height: _.viewportHeight?.value ?? 1e3,
        width: _.viewportWidth?.value ?? 1e3,
      },
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
      initialRect: {
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
    if (_[0]?.borderBoxSize[0]) {
      _({
        width: _[0].borderBoxSize[0].inlineSize,
        height: _[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    _(_.getBoundingClientRect());
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
export { _, _, _, _ };
