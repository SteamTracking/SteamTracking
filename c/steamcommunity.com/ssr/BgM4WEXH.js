var _ = _(_(), 1);
function _(_, _, _) {
  let _ = Array.from(_),
    [_] = _.splice(_, 1);
  return _.splice(_, 0, _), _;
}
function _(_) {
  if (_?.transform) {
    let _ = `translate(0px, ${_.transform.split(`,`).pop()}`;
    return {
      ..._,
      transform: _,
    };
  }
  return _;
}
var _ = `LA5X8h-gJuY-`,
  _ = `nJ46WEhJyMA-`,
  _ = `YRai0hT9LCs-`,
  _ = `CSMVVJPIbgE-`,
  _ = `_4O8KHO5rPV4-`,
  _ = `_6xY1L1XcSAo-`,
  _ = `YMepsmIXZMY-`,
  _ = _(),
  _ = 8;
function _(_) {
  let { appid: _ } = _(),
    { isPinned: _ } = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      for (let _ of _?.groups ?? [])
        for (let _ of _.achievements) _.set(_.api_name, _);
      return _;
    }, [_]),
    [_, _] = (0, _.useState)();
  _ && _.basis !== _?.pinnedAchievements && _(void 0);
  let _ = _?.names ?? _?.pinnedAchievements,
    _ = _?.setPinnedAchievements,
    _ = _?.pinnedAchievements,
    _ = (0, _.useMemo)(
      () =>
        _ &&
        _ &&
        ((_) => {
          _({
            basis: _,
            names: _,
          }),
            _(_);
        }),
      [_, _],
    ),
    _ = (0, _.useMemo)(
      () => (_ ?? []).map((_) => _.get(_)).filter((_) => _ !== void 0),
      [_, _],
    );
  return !_ || !_
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        padding: {
          initial: `2`,
          _: `4`,
        },
        className: _(_, _ && `PSZWJ1Doo54-`),
        navProps: {
          focusableIfEmpty: !0,
        },
        children: [
          (0, _.jsx)(_, {
            contrast: `description`,
            weight: `heavy`,
            style: {
              lineHeight: `20px`,
            },
            className: _ ? _ : void 0,
            children: _.Localize(
              `#Achievements_Table_PinnedTitle`,
              _(_.length),
            ),
          }),
          _.length > 0
            ? (0, _.jsx)(_, {
                ..._,
                pinned: _,
                pinnedNames: _,
                setPinnedNames: _,
              })
            : (0, _.jsx)(_, {
                contrast: `description`,
                children: _.Localize(`#Achievements_Pin_Empty`),
              }),
        ],
      });
}
function _(_) {
  let _ = null;
  for (
    let _ = _.closest(`[data-accent-color]`);
    _;
    _ = _.parentElement?.closest(`[data-accent-color]`) ?? null
  )
    _ = _;
  return {
    className: _(_, `noOpinionatedGlobalStyles`),
    "data-accent-color": _?.getAttribute(`data-accent-color`) ?? void 0,
    "data-dull-color": _?.getAttribute(`data-dull-color`) ?? void 0,
    "data-body-text-color": _?.getAttribute(`data-body-text-color`) ?? void 0,
    style: {
      "--icon-size": window.getComputedStyle(_).getPropertyValue(`--icon-size`),
    },
  };
}
function _(_) {
  let {
      provided: _,
      snapshot: _,
      index: _,
      achievement: _,
      cloneRootProps: _,
      compareTo: _,
      compareProgress: _,
      globalPercentages: _,
      moveTo: _,
    } = _,
    { appid: _, targetsteamid: _ } = _(),
    { data: _ } = _(_, _ ?? ``),
    _ = _?.achievements[_.internal_key],
    _ = _(),
    { isPinned: _ } = _(),
    _ = (_) => {
      _(
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              onSelected: () => _(_.api_name, `top`),
              children: _.Localize(`#Achievements_Pin_MoveToTop`),
            }),
            (0, _.jsx)(_, {
              onSelected: () => _(_.api_name, `bottom`),
              children: _.Localize(`#Achievements_Pin_MoveToBottom`),
            }),
          ],
        }),
        _,
      );
    },
    _ = _.isDropAnimating,
    _ = _.draggableProps.onTransitionEnd;
  (0, _.useLayoutEffect)(() => {
    _ &&
      _?.({
        propertyName: `transform`,
      });
  }, [_, _]);
  let _ = {
      ..._(_.draggableProps.style ?? {}),
      marginBottom: _,
    },
    _ = (0, _.jsxs)(`div`, {
      className: _(
        _,
        _.isDragging && `Fe4rzygitjU-`,
        _.isDragging && !_.draggingOver && `b1iHPgOY78w-`,
      ),
      ref: _.innerRef,
      ..._.draggableProps,
      ..._.dragHandleProps,
      style: _,
      onContextMenu: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            appid: _,
            achievement: _,
            progress: _,
            unlockedForSelf: _?.unlocked ?? !1,
            globalUnlockPercentage: _?.percentages[_.internal_key] ?? void 0,
            showProgress: !0,
            compareTo: _,
            compareProgress: _,
            tableindex: _,
            alwaysPinnable: !0,
            hideGlobalRate: !0,
          }),
        }),
        !_ &&
          (0, _.jsx)(_, {
            className: _(`_07DHk4j5DyM-`, _ && `_6xY1L1XcSAo-`),
          }),
      ],
    });
  return _
    ? (0, _.jsx)(`div`, {
        ..._,
        children: _,
      })
    : _;
}
function _(_) {
  let { pinned: _, pinnedNames: _, setPinnedNames: _, compareTo: _ } = _,
    { isPanel: _, appid: _ } = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = _(_, _ ?? []),
    _ = _(),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(56);
  (0, _.useEffect)(() => {
    if (!_.current) return;
    let _ = parseInt(
      window.getComputedStyle(_.current).getPropertyValue(`--icon-size`),
    );
    isNaN(_) || _(_ + (_ ? 25 : 2));
  }, [_]);
  let _ = (0, _.useRef)(0),
    _ = (0, _.useCallback)((_) => {
      let _ = _.current?.querySelector(
        `[data-rfd-draggable-id="${CSS.escape(_.draggableId)}"]`,
      );
      _.current = _?.getBoundingClientRect().height ?? 0;
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.destination &&
          _.destination.index != _.source.index &&
          _(_(_, _.source.index, _.destination.index));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = _.filter((_) => _ !== _);
        _(_ == `top` ? [_, ..._] : [..._, _]);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_, _, _) =>
        (0, _.jsx)(_, {
          provided: _,
          snapshot: _,
          index: _.source.index,
          achievement: _[_.source.index],
          cloneRootProps: _.current ? _(_.current) : void 0,
          compareTo: _,
          compareProgress: _,
          globalPercentages: _,
          moveTo: _,
        }),
      [_, _, _, _, _],
    ),
    _ = (0, _.useCallback)(
      () => _?.ownerWindow?.document.body ?? window.document.body,
      [_],
    ),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = _[_];
        return (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(
              _,
              {
                draggableId: _.api_name,
                index: _,
                children: (_, _) =>
                  (0, _.jsx)(_, {
                    provided: _,
                    snapshot: _,
                    index: _,
                    achievement: _,
                    compareTo: _,
                    compareProgress: _,
                    globalPercentages: _,
                    moveTo: _,
                  }),
              },
              _.api_name,
            ),
            _ == _.api_name &&
              (0, _.jsx)(`div`, {
                style: {
                  height: _.current + _,
                },
              }),
          ],
        });
      },
      [_, _, _, _, _],
    );
  return (0, _.jsx)(_, {
    onBeforeCapture: _,
    onDragEnd: _,
    stylesInsertionPoint: _?.ownerWindow?.document?.head,
    children: (0, _.jsx)(_, {
      droppableId: `pinned-achievements`,
      mode: `virtual`,
      direction: `vertical`,
      isCombineEnabled: !1,
      renderClone: _,
      getContainerForClone: _,
      children: (_, _) =>
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            marginBottom: -8,
          },
          ref: (_) => {
            _.innerRef(_), (_.current = _);
          },
          ..._.droppableProps,
          children: (0, _.jsx)(_, {
            navKey: `PinnedAchievementsList`,
            hintVirtualizeType: _ ? `element` : `window`,
            bNativeScrollIntoView: !0,
            bBrowserScrollAnchoring: !0,
            nRows: _.length,
            nItemHeight: _ + _,
            nRowGap: 0,
            overscan: 5,
            bDynamic: !0,
            renderItem: (_) => _(_, _.draggingFromThisWith ?? null),
          }),
        }),
    }),
  });
}
export { _ as PinnedAchievementsList };
