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
      for (; _ && _ != null;) (_.observe(_), _.push(_), (_ = _.parentElement));
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
            (_ != `window` &&
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
              _ || _(_ ? `element` : `window`));
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
  ((_.current.bPositionKnown = _), (_.current.nMargin = _));
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
      return ((_.current.eRowWindow = _), _);
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
      (_.removeEventListener(`scroll`, _),
        _.removeEventListener(`scrollend`, _));
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
var _ = `jy2K6ICwK-c-`,
  _ = `_0k9PJY-Glp4-`,
  _ = `_7dn4G8UfNt0-`,
  _ = `ftVD-qISy6M-`,
  _ = `ZCnr2Om6zRM-`,
  _ = `_0bhCisa4G20-`,
  _ = `B9DCCkKopGY-`,
  _ = `JFMgmiOe8xk-`;
function _(_, _) {
  let _ = _(_, _.logged_in ? _.steamid : ``);
  return _.hidden
    ? !_.isSuccess || _.data?.achievements?.[_.internal_key]?.unlocked !== !0
    : !1;
}
function _(_) {
  let { appid: _, achievement: _, progress: _ } = _,
    { bForce24HourClock: _ } = _(),
    _ = _(_, _),
    _ = _(_, _.internal_key),
    _ = _?.unlocked,
    _ = (_ ? _.icon_achieved : _.icon_unachieved) ?? ``,
    _ = _(_),
    _ = _?.unlock_time
      ? _.Localize(`#Achievements_Row_UnlockedOnDate`, _(_.unlock_time, _))
      : _.Localize(`#Achievements_Row_UnlockedNoDate`),
    _ = _(`96`),
    { name: _, description: _ } = _(_, _);
  return (0, _.jsxs)(_, {
    direction: `column`,
    background: `dull-8`,
    className: _,
    style: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            imgURL: _,
            hidden: _,
          }),
        }),
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        padding: `3`,
        gap: `3`,
        minWidth: `calc(4 * var(--icon-size))`,
        maxWidth: `calc(4 * var(--icon-size))`,
        children: [
          (0, _.jsx)(_, {
            style: {
              flexShrink: `0`,
            },
            imgURL: _,
            glow: _ && _,
            hidden: _,
          }),
          (0, _.jsxs)(_, {
            direction: `column`,
            justify: `start`,
            gap: `3`,
            flexGrow: `1`,
            children: [
              (0, _.jsx)(_, {
                contrast: `title`,
                size: `4`,
                children: _,
              }),
              (0, _.jsx)(_, {
                contrast: `subtitle`,
                children: _,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        padding: `3`,
        gap: `2`,
        className: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              contrast: `description`,
              children: _,
            }),
          _ !== void 0 &&
            (0, _.jsx)(_, {
              contrast: _ ? void 0 : `subtitle`,
              color: _ ? `amber-9` : void 0,
              children: _(_),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      appid: _,
      achievement: _,
      progress: _,
      direction: _ = `bottom`,
      strTooltipClassname: _,
      bNavStop: _ = !0,
      ..._
    } = _,
    _ = (0, _.jsx)(_, {
      appid: _,
      achievement: _,
      progress: _,
    }),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    direction: _,
    strTooltipClassname: _,
    toolTipContent: _,
    bNavStop: _,
    ..._,
  });
}
function _(_) {
  if (_ !== void 0)
    return {
      "--icon-size": _ == `fill` ? `100%` : `${_}px`,
    };
}
function _(_) {
  let {
      imgURL: _,
      glow: _,
      pauseAnimation: _,
      hidden: _,
      alt: _,
      hideNativeTooltip: _ = !1,
      className: _,
      size: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback((_) => {
      _ &&
        (_.complete
          ? _(!0)
          : (_.onload = () => {
              _(!0);
            }));
    }, []),
    _ = _ && (_ || _),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _, _ && `_6xVzeN1-Z4k-`),
    style: _,
    ..._,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `Hb3hpVAGQj0-`,
          children: (0, _.jsx)(`div`, {
            className: `_2PS2Ytn2-1Y-`,
            children: (0, _.jsx)(`div`, {
              className: `R-6hLqU0dqY-`,
            }),
          }),
        }),
      _
        ? (0, _.jsx)(`div`, {
            className: _(_, _ && `JilMXjAHkZo-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: _,
            className: _(_, _ && `JilMXjAHkZo-`),
            src: _ == `` ? void 0 : _,
            loading: `lazy`,
            alt: _,
            title: _ ? void 0 : _,
          }),
    ],
  });
}
function _(_) {
  let {
      achievement: _,
      globalUnlockPercentage: _,
      unlocked: _,
      forceVisible: _ = !1,
      hidden: _,
      ..._
    } = _,
    _ = _ ?? (!_ && !_ && _.hidden),
    _ = (_ ? _.icon_achieved : _.icon_unachieved) ?? ``,
    _ = _ && _(_),
    _ = _ ? _.Localize(`#AchievementSpoilerName`) : (_.name ?? ` `);
  return (0, _.jsx)(_, {
    hidden: _,
    imgURL: _,
    glow: _,
    alt: _,
    ..._,
  });
}
function _(_) {
  let {
      hidden: _,
      forceVisible: _,
      size: _,
      className: _,
      style: _,
      onClick: _,
      unlocked: _,
      ..._
    } = _,
    { appid: _, achievement: _, progress: _ } = _,
    _ = _(_, _.internal_key);
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      achievement: _,
      globalUnlockPercentage: _,
      unlocked: _ ?? _?.unlocked ?? !1,
      hidden: _,
      forceVisible: _,
      size: _,
      className: _,
      style: _,
      onClick: _,
      hideNativeTooltip: !0,
    }),
  });
}
var _ = (0, _.createContext)(void 0);
function _(_) {
  let { children: _, value: _ } = _;
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _(
  _ = {
    initial: `2`,
    _: `4`,
  },
) {
  let { isPanel: _ } = _();
  return _
    ? _
    : {
        initial: `3`,
        _: `4`,
      };
}
function _() {
  let { isOverlayPinned: _ } = _();
  return {
    isPinned: _,
  };
}
var _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)({
    available: !1,
    showPinning: !1,
    setShowPinning: () => {},
    enabled: !1,
    isPinned: () => !1,
    pin: () => {},
    unpin: () => {},
  });
function _(_, _) {
  if (_.size !== _.size) return !1;
  for (let _ of _) if (!_.has(_)) return !1;
  return !0;
}
function _(_) {
  let {
      pinnedAchievements: _,
      setPinnedAchievements: _,
      showPinning: _ = !1,
      setShowPinning: _,
      children: _,
    } = _,
    _ = _ !== void 0 && _ !== void 0 && _ !== void 0,
    _ = _ && _,
    _ = (0, _.useRef)({
      pinnedAchievements: _,
      setPinnedAchievements: _,
    });
  _.current = {
    pinnedAchievements: _,
    setPinnedAchievements: _,
  };
  let _ = (0, _.useRef)(new Set()),
    _ = new Set(_ ?? []);
  _(_.current, _) || (_.current = _);
  let _ = _.current,
    _ = (0, _.useCallback)((_) => {
      let { pinnedAchievements: _, setPinnedAchievements: _ } = _.current;
      _ && _ && !_.includes(_) && _([..._, _]);
    }, []),
    _ = (0, _.useCallback)((_) => {
      let { pinnedAchievements: _, setPinnedAchievements: _ } = _.current;
      _ && _ && _(_.filter((_) => _ !== _));
    }, []),
    _ = (0, _.useMemo)(
      () => ({
        available: _,
        showPinning: _,
        setShowPinning: _ ?? (() => {}),
        enabled: _,
        isPinned: (_) => _.has(_),
        pin: _,
        unpin: _,
      }),
      [_, _, _, _, _, _, _],
    ),
    _ = (0, _.useMemo)(
      () =>
        _
          ? {
              pinnedAchievements: _,
              setPinnedAchievements: _,
            }
          : void 0,
      [_, _, _],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: (0, _.jsx)(_, {
      value: _,
      children: _,
    }),
  });
}
function _() {
  return (0, _.useContext)(_).enabled;
}
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return (0, _.useContext)(_);
}
var _ = `cJQvFpktOuY-`;
function _(_) {
  let { percent: _, className: _, small: _ = !1, dlc: _ = !1 } = _;
  return (0, _.jsx)(_, {
    animate: !1,
    nPercent: _,
    className: _(_, _ && `_-54QykMwyGc-`, _ && `_-4HvMTVx8TY-`, _),
  });
}
function _(_, _, _) {
  return [`FriendsGameplayInfo`, _, _, !!_];
}
async function _(_, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appid(_), _ && _.Body().set_include_family_licenses(!0));
  let _ = await _.GetFriendsGameplayInfo(_, _);
  return (
    _.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${_.GetEResult()}`),
    _.Body().toObject()
  );
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => await _(_, _, _),
    enabled: !!_,
    staleTime: 36e5,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _));
}
function _() {
  let _ = _(),
    _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: [`GetFriendNicknameMap`, _],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetNicknameList(_, _);
      return new Map(
        _.Body()
          .toObject()
          ?.nicknames?.map((_) => [_.accountid, _.nickname]),
      );
    },
  };
}
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
var _ = `JBVOsmSFhy0-`,
  _ = `l1wSWCoeS7E-`,
  _ = `bchpnxPSlAs-`,
  _ = `cr9bKvlkTNA-`,
  _ = `m4uP7aeVdTI-`,
  _ = `EhjTHu9pfZI-`,
  _ = `If1KrFqMrNg-`,
  _ = `_6ILG6QpXy3c-`,
  _ = `_5B8l2qB63X0-`,
  _ = `gNQvqtc2CPc-`;
function _(_) {
  let { viewersteamid: _, useOwnPlaytime: _ } = _(),
    _ = _(_, !0).data ?? {},
    _ = _?.(_),
    _ = _ ? _ : _.your_info?.steamid,
    _ = _(_);
  if (_ !== void 0) {
    if (_)
      return {
        steamid: _,
        name: _.data?.public_data?.persona_name,
        minutes_played_forever: _.minutesForever,
        owned: _.owned,
      };
    if (_.data)
      return {
        steamid: _,
        name: _.data.public_data?.persona_name,
        minutes_played_forever: _.your_info.minutes_played_forever,
        owned: _.your_info.owned ?? !1,
      };
  }
}
function _(_) {
  let _ = _(_, !0).data ?? {},
    _ = [
      ...(_.owns ?? []),
      ...(_.in_game ?? []),
      ...(_.played_ever ?? []),
      ...(_.played_recently ?? []),
    ].filter((_) => _.steamid !== void 0),
    _ = _.map((_) => _.steamid),
    _ = _(),
    _ = _(_),
    _ = _({
      queries: _.map((_) => _(_, _)),
    }),
    _ = _(),
    _ = _();
  return (0, _.useMemo)(() => {
    let _ = _.data?.preferences()?.parenthesize_nicknames() ?? !1,
      _ = _.reduce((_, _) => {
        if (!_.isSuccess) return _;
        let _ = _.data?.public_data?.steamid,
          _ = _.data?.public_data?.persona_name ?? ``;
        return (_ !== void 0 && (_[_] = _), _);
      }, {});
    return _.map((_) => ({
      steamid: _.steamid,
      name: _[_.steamid],
      nickname: _.data?.get(new _(_.steamid).GetAccountID()),
      minutes_played_forever: _.minutes_played_forever,
    })).sort((_, _) => {
      let _ = _.name ?? ``,
        _ = _.name ?? ``;
      if (_) return _.localeCompare(_);
      let _ = _.nickname,
        _ = _.nickname;
      return (_ ?? _).localeCompare(_ ?? _);
    });
  }, [_, _, _.data, _.data]);
}
function _(_, _) {
  return _ && _.nickname
    ? `${_.name} (${_.nickname})`
    : (_.nickname ?? _.name ?? ``);
}
function _(_, _, _) {
  let _ = _(_, _),
    _ = _(_, _);
  return _.localeCompare(_);
}
function _(_) {
  let _ = _(_),
    _ = _(),
    _ = _();
  if (_.isLoading) return;
  let _ = _.data?.preferences()?.parenthesize_nicknames() ?? !1,
    _ = _.data?.get(new _(_).GetAccountID()),
    _ = _.data?.public_data?.persona_name ?? _;
  return !_ || _.length == 0 ? _ : _ ? `${_} (${_})` : _;
}
function _(_, _) {
  let _ = _ ? void 0 : _,
    _ = _?.private_data?.persona_state === 1,
    _ = _?.private_data?.game_id !== void 0;
  return (_ && (_ ? (_ = _) : _ && (_ = _)), _(_, _));
}
function _(_, _) {
  let _ = _(_);
  if (!_.isLoading && _.data) return _(_.data, _);
}
function _(_) {
  let {
      playerLinkDetails: _,
      bParenthesizeNicknames: _,
      strNickname: _,
      bIgnorePersonaStatus: _,
      bIgnoreOffline: _,
      bDisableColoring: _,
      className: _,
      ..._
    } = _,
    _ =
      _ && !_
        ? _
        : (_?.public_data?.persona_name ?? _?.public_data?.steamid ?? ``);
  return (0, _.jsx)(`span`, {
    ..._,
    className: _(_, _ && `eMqYWYZQ6NU-`, !_ && _(_, _)),
    children: (0, _.jsxs)(`span`, {
      className: _,
      children: [
        _ || `\xA0`,
        _ &&
          _ &&
          (0, _.jsxs)(`span`, {
            className: `_4lwf89C-ehc-`,
            children: [`(`, _, `)`],
          }),
      ],
    }),
  });
}
function _(_) {
  let { steamid: _, showStatus: _ = !1 } = _,
    _ = new _(_),
    _ = _(_),
    _ = _(),
    _ = _().data?.preferences()?.parenthesize_nicknames() ?? !1,
    _ = _.data?.get(_.GetAccountID());
  return _.isLoading || _.data == null
    ? null
    : (0, _.jsx)(_, {
        bParenthesizeNicknames: _,
        playerLinkDetails: _?.data,
        strNickname: _,
        bIgnorePersonaStatus: !_,
        bIgnoreOffline: !0,
        className: _,
      });
}
function _(_) {
  let { steamid: _, size: _ = `X-Small` } = _,
    _ = _(_),
    _ = _(_);
  return _.data === void 0 || _.data === null
    ? null
    : (0, _.jsx)(_, {
        playerLinkDetails: _?.data,
        statusPosition: `right`,
        alt: _ ?? ``,
        size: _,
        className: _,
      });
}
function _(_) {
  let { steamid: _, children: _ } = _;
  return (0, _.jsx)(_, {
    direction: `bottom`,
    toolTipContent: (0, _.jsx)(_, {
      steamid: _,
    }),
    children: _,
  });
}
var _ = _,
  _ = _,
  _ = _,
  _ = `fjrcj-p1Lv8-`,
  _ = `d3-9lBPUi5A-`,
  _ = `TOzxj8kWusU-`,
  _ = `J1gNXqOLM6A-`,
  _ = `ZjBANX5ODfY-`,
  _ = `f1u34U8QYI0-`,
  _ = `ULM6eODO64c-`,
  _ = `pGNvcYx1XPk-`,
  _ = `m83ZyjFEwpA-`,
  _ = `_6sU0YMWRGaM-`,
  _ = `yIcVVz0KvxU-`,
  _ = `_26On4soke-0-`,
  _ = `greyneutral-10`;
function _(_) {
  let { steamid: _, achieved: _, alt: _ = `` } = _,
    _ = _(_);
  return _.data === void 0 || _.data === null
    ? (0, _.jsx)(`div`, {})
    : (0, _.jsx)(`div`, {
        className: _(_, !_ && `fVElmRK6xDA-`),
        children: (0, _.jsx)(_, {
          playerLinkDetails: _.data,
          alt: _,
          size: `X-Small`,
        }),
      });
}
function _(_) {
  let {
    achievement: _,
    progress: _,
    steamid: _,
    compareTo: _,
    compareProgress: _,
  } = _;
  if (!_) return null;
  let _ = [
    {
      steamid: _,
      unlocked: _?.unlocked == 1,
    },
    ...(_ ?? []).map((_, _) => ({
      steamid: _,
      unlocked: _?.[_]?.achievements?.[_.internal_key]?.unlocked == 1,
    })),
  ];
  return (0, _.jsx)(_, {
    direction: `row`,
    align: `end`,
    gap: `1`,
    padding: {
      initial: `1`,
      _: `2`,
    },
    radius: `sm`,
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          steamid: _.steamid,
          children: (0, _.jsx)(_, {
            steamid: _.steamid,
            achieved: _.unlocked,
          }),
        },
        _.steamid,
      ),
    ),
  });
}
function _(_) {
  let { achievement: _, progress: _, showProgress: _ } = _,
    { bForce24HourClock: _ } = _();
  if (_ === void 0) return null;
  if (_?.unlocked) {
    let _ = _(_.unlock_time)
      ? _.Localize(`#Achievements_Row_UnlockedOnDate`, _(_.unlock_time, _))
      : _.Localize(`#Achievements_Row_UnlockedNoDate`);
    return (0, _.jsx)(_, {
      contrast: `description`,
      children: _,
    });
  }
  let _ = _.max_progress !== void 0 && _.max_progress != _.min_progress;
  return _ && _
    ? (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        align: `end`,
        children: [
          (0, _.jsx)(_, {
            children: _.Localize(
              `#Achievements_Row_ProgressCount`,
              _(_?.progress ?? _.min_progress ?? 0),
              _(_.max_progress),
            ),
          }),
          (0, _.jsx)(_, {
            small: !0,
            percent:
              ((_?.progress ?? _.min_progress ?? 0) / _.max_progress) * 100,
          }),
        ],
      })
    : null;
}
function _() {
  return (0, _.jsx)(_, {
    direction: `top`,
    toolTipContent: _.Localize(`#Achievements_Archived_Tooltip`),
    children: (0, _.jsx)(_, {
      height: `20px`,
      width: `20px`,
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { isPinned: _, pin: _, unpin: _ } = _();
  return {
    pinned: _(_.api_name),
    setPinned: (_) => (_ ? _(_.api_name) : _(_.api_name)),
  };
}
function _(_) {
  let { achievement: _ } = _,
    { enabled: _ } = _(),
    { pinned: _, setPinned: _ } = _(_),
    { isPinned: _ } = _();
  if (!_) return null;
  let _ = _.Localize(_ ? `#Achievements_Pin_Unpin` : `#Achievements_Pin_Pin`);
  return (0, _.jsx)(_, {
    align: `center`,
    flexShrink: `0`,
    onClick: (_) => _.stopPropagation(),
    style: _
      ? {
          opacity: 0,
          pointerEvents: `none`,
        }
      : void 0,
    children: (0, _.jsx)(_, {
      direction: `top`,
      toolTipContent: _,
      children: (0, _.jsx)(_, {
        icon: _,
        variant: `outline`,
        checked: _,
        onChange: _,
      }),
    }),
  });
}
function _(_) {
  let {
      achievement: _,
      appid: _,
      progress: _,
      showProgress: _,
      unlockedForSelf: _,
      globalUnlockPercentage: _,
      compareTo: _,
      tableindex: _,
      focusable: _ = !0,
      alwaysPinnable: _ = !1,
      hideGlobalRate: _ = !1,
      isLast: _ = !1,
      groupArchived: _ = !1,
    } = _,
    { showGlobalRate: _, targetsteamid: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    { revealedAchievements: _, setRevealedAchievements: _ } = _(),
    _ = _.has(_.api_name),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _ || (_(!0), _(new Set([_.api_name, ..._])));
    },
    _ = _.archived || _,
    _ = _?.unlocked == 1,
    _ = _.hidden && !_,
    _ = _(_),
    _ = _(
      _,
      _ && `_3v3xN-id1YQ-`,
      _ && `KtCNJcs0grI-`,
      _ && !_ && `JiEV-RZVY6I-`,
    ),
    _ = _ && _,
    _ = !_ && !_ ? void 0 : () => _(),
    _ = _(_, _ ? _ : void 0),
    _ = _ && _ && _ ? _ : void 0,
    _ = _.Localize(
      _
        ? `#Achievements_Row_SelectToRevealSpoilers`
        : `#Achievements_Row_ClickToRevealSpoilers`,
    ),
    _ = _ !== void 0 && _.length > 0,
    _ = _ && (_ || !_),
    { pinned: _, setPinned: _ } = _(_),
    { isPinned: _ } = _(),
    _ =
      _ && _ && !_
        ? {
            onSecondaryButton: () => _(!_),
            actionDescriptionMap: {
              [_._]: null,
              [_.SECONDARY]: _.Localize(
                _ ? `#Achievements_Pin_Unpin` : `#Achievements_Pin_Pin`,
              ),
            },
          }
        : {
            actionDescriptionMap: {
              [_._]: null,
            },
          },
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _(_),
    }),
    _ = (_, _) =>
      (0, _.jsx)(_, {
        appid: _,
        achievement: _,
        progress: _,
        children: (0, _.jsx)(_, {
          achievement: _,
          globalUnlockPercentage: _,
          unlocked: _,
          hidden: _ ? !0 : void 0,
          forceVisible: !_,
          className: _,
          style: {
            flexShrink: `0`,
          },
          hideNativeTooltip: !0,
        }),
      });
  return (0, _.jsx)(
    _,
    {
      focusable: _,
      navProps: _,
      className: _,
      direction: `column`,
      "data-tableindex": _,
      cursor: _ && !_ ? `pointer` : void 0,
      onClick: _,
      children: (0, _.jsxs)(_, {
        direction: `row`,
        wrap: `wrap`,
        padding: {
          initial: `0`,
          _: `2`,
        },
        paddingTop: {
          initial: `3`,
        },
        paddingBottom: {
          initial: `3`,
        },
        paddingEnd: {
          initial: `0`,
          _: `3`,
        },
        gap: `2`,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `2`,
            flexGrow: `999`,
            flexBasis: `300px`,
            minWidth: `0`,
            align: `stretch`,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  achievement: _,
                }),
              (0, _.jsxs)(_, {
                width: `maxContent`,
                height: `maxContent`,
                style: {
                  position: `relative`,
                },
                children: [
                  _ && !_ && _(!0, _),
                  (!_ || _) &&
                    (0, _.jsx)(_, {
                      className: `i4FhctSXe0c-`,
                      children: _(!1, _),
                    }),
                ],
              }),
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  direction: `column`,
                  position: `relative`,
                  flexGrow: `1`,
                  children: (0, _.jsxs)(_, {
                    direction: `column`,
                    gap: `1`,
                    justify: `center`,
                    flexGrow: `1`,
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        contrast: `title`,
                        size: `4`,
                        weight: `heavy`,
                        children: _.Localize(`#AchievementSpoilerName`),
                      }),
                      (0, _.jsx)(_, {
                        contrast: `subtitle`,
                        children: _.Localize(`#AchievementSpoilerDescription`),
                      }),
                      (0, _.jsx)(_, {
                        direction: `row`,
                        justify: `start`,
                        align: `center`,
                        background: `dull-6`,
                        className: `ULM6eODO64c-`,
                        children: (0, _.jsx)(_, {
                          contrast: `title`,
                          size: `4`,
                          marginStart: `2`,
                          children: _,
                        }),
                      }),
                    ],
                  }),
                }),
              (!_ || _) &&
                (0, _.jsxs)(_, {
                  direction: `column`,
                  flexGrow: `1`,
                  gap: `1`,
                  justify: `center`,
                  className: _,
                  children: [
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `1`,
                      children: [
                        _ && (0, _.jsx)(_, {}),
                        ` `,
                        (0, _.jsx)(_, {
                          color: _ ? _ : void 0,
                          contrast: `title`,
                          size: `4`,
                          weight: `heavy`,
                          children: _.name,
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      color: _ ? _ : void 0,
                      contrast: `subtitle`,
                      children: _.description,
                    }),
                  ],
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `2`,
            justify: `end`,
            align: `center`,
            flexGrow: `1`,
            children: [
              !_ &&
                !!_ &&
                (0, _.jsx)(_, {
                  minWidth: `max-content`,
                  direction: `column`,
                  justify: `center`,
                  align: `end`,
                  flexShrink: `0`,
                  flexGrow: `1`,
                  children: (0, _.jsx)(_, {
                    achievement: _,
                    progress: _,
                    showProgress: _,
                  }),
                }),
              _ !== void 0 &&
                (0, _.jsxs)(_, {
                  className: _(
                    `YdwpRPPithE-`,
                    _ && `tQWKFb1QLD0-`,
                    _ == `initial` || _ == `xs` ? `Vdd-T2WCTiA-` : void 0,
                  ),
                  direction: `row`,
                  align: `center`,
                  wrap: `nowrap`,
                  children: [
                    (0, _.jsx)(_, {
                      className: `BAUq7IBFzgM-`,
                      children: (0, _.jsx)(_, {}),
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          toolTipContent: _.Localize(`#AchievementRareTooltip`),
                          direction: `top`,
                          usePointerEvents: !0,
                          children: _,
                        })
                      : _,
                  ],
                }),
              _ &&
                (0, _.jsx)(_, {
                  minWidth: `max-content`,
                  direction: `column`,
                  justify: `center`,
                  align: `end`,
                  flexShrink: `0`,
                  children: (0, _.jsx)(_, {
                    ..._,
                    steamid: _,
                  }),
                }),
            ],
          }),
        ],
      }),
    },
    _.api_name,
  );
}
function _(_) {
  let { count: _ } = _,
    { setFilter: _ } = _(),
    _ = _(),
    _ = _.Localize(
      _
        ? `#Achievements_Table_SelectToClearFilter`
        : `#Achievements_Table_ClickToClearFilter`,
    );
  return (0, _.jsxs)(_, {
    focusable: !0,
    direction: `row`,
    paddingX: `2`,
    paddingY: `3`,
    gap: `2`,
    align: `center`,
    background: `dull-6`,
    cursor: `pointer`,
    className: _,
    onClick: () => _(``),
    children: [
      (0, _.jsx)(_, {
        width: `27px`,
        height: `27px`,
        align: `center`,
        justify: `around`,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        direction: `row`,
        align: `center`,
        flexGrow: `1`,
        children: (0, _.jsx)(_, {
          contrast: `title`,
          children: _.LocalizePlural(
            `#Achievements_Table_HiddenByFilterCount`,
            _(_),
          ),
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          contrast: `subtitle`,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { title: _, dividerWhenEmpty: _ = !1, isEmpty: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        contrast: `description`,
        weight: `heavy`,
        children: _,
      }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          className: `sOai2Hr-ko0-`,
        }),
    ],
  });
}
function _(_) {
  let { count: _, onReveal: _ } = _,
    _ = _(),
    _ = _.Localize(
      _
        ? `#Achievements_Hidden_SelectToViewAll`
        : `#Achievements_Hidden_ClickToViewAll`,
    );
  return (0, _.jsxs)(_, {
    direction: `row`,
    paddingX: `2`,
    paddingY: `3`,
    gap: `2`,
    align: `center`,
    background: `dull-6`,
    cursor: `pointer`,
    onClick: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        hidden: !0,
        imgURL: ``,
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        flexGrow: `1`,
        style: {
          position: `relative`,
        },
        children: [
          (0, _.jsx)(_, {
            contrast: `title`,
            size: `4`,
            weight: `heavy`,
            children: _.LocalizePlural(`#Achievements_Hidden_Count`, _(_)),
          }),
          (0, _.jsx)(_, {
            contrast: `subtitle`,
            children: _.LocalizePlural(`#Achievements_Hidden_Description`, _),
          }),
          (0, _.jsx)(_, {
            direction: `row`,
            justify: `start`,
            align: `center`,
            background: `dull-6`,
            className: _,
            children: (0, _.jsx)(_, {
              contrast: `title`,
              size: `4`,
              children: _,
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let { sort: _, descending: _ } = _,
    _ = _ ? 1 : -1,
    _ = (_) => _?.percentages[_.internal_key] ?? 0;
  return _ == `globalrate`
    ? _.sort((_, _) => _ * (_(_) - _(_)))
    : _.sort((_, _) => {
        let _ = _?.achievements[_.internal_key],
          _ = _?.achievements[_.internal_key];
        return _ === void 0 && _ === void 0
          ? _(_) - _(_)
          : _ === void 0
            ? -1
            : _ === void 0
              ? 1
              : _ * (_.unlock_time - _.unlock_time);
      });
}
