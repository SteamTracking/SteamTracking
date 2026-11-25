import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _, _, _, _, _ } from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _, _ } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~726542bc75.js?contenthash=Pe9U2pKI";
import { _, _ } from "./chunk~971d501580.js?contenthash=CV-11tlz";
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
} from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var _ = _(_(), 1),
  _ = `hBLCLdn2tcs-`,
  _ = `bN6u4xtOHtc-`,
  _ = `U5fKIgoCxiI-`,
  _ = `QVhrOAytWng-`,
  _ = `OKiuZfoJJfo-`,
  _ = `_07VYh0-d89M-`,
  _ = `cHbz0FG1fVI-`,
  _ = _(),
  _ = 4;
function _(_) {
  let { appid: _, showGlobalRate: _ } = _(),
    { isPinned: _ } = _(),
    _ = _(),
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
          (_({
            basis: _,
            names: _,
          }),
            _(_));
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
        gap: _.length > 0 ? `0` : `2`,
        paddingTop: {
          initial: `2`,
          _: `4`,
        },
        className: _(_, _ && `Y7YR2ymN-Rk-`, _, _ && `eEtCL8zfSBU-`),
        navProps: {
          focusableIfEmpty: !0,
        },
        children: [
          (0, _.jsx)(_, {
            contrast: `description`,
            weight: `heavy`,
            marginX: _,
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
                marginX: _,
                marginBottom: {
                  initial: `2`,
                  _: `4`,
                },
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
    className: _(
      _,
      `noOpinionatedGlobalStyles`,
      _,
      _.closest(`.eEtCL8zfSBU-`) && `eEtCL8zfSBU-`,
    ),
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
      isLast: _,
      achievement: _,
      cloneRootProps: _,
      compareTo: _,
      compareProgress: _,
      globalPercentages: _,
      moveTo: _,
      moveBy: _,
      autoFocus: _,
    } = _,
    { appid: _, targetsteamid: _ } = _(),
    { data: _ } = _(_, _ ?? ``),
    _ = _?.achievements[_.internal_key],
    _ = _(),
    { isPinned: _ } = _(),
    _ = _(),
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
  let _ = (0, _.useId)(),
    _ = _
      ? {
          focusRingSizeElementID: _,
          onButtonDown: (_) => {
            let _ =
              _.detail?.button == _.BUMPER_LEFT
                ? -1
                : +(_.detail?.button == _.BUMPER_RIGHT);
            _ == 0 ||
              (_ < 0 && _ == 0) ||
              (_ > 0 && _) ||
              (_.stopPropagation(), _.preventDefault(), _(_.api_name, _));
          },
          actionDescriptionMap: {
            [_.BUMPER_LEFT]:
              _ > 0 ? _.Localize(`#Achievements_Pin_MoveUp`) : null,
            [_.BUMPER_RIGHT]: _
              ? null
              : _.Localize(`#Achievements_Pin_MoveDown`),
          },
        }
      : void 0,
    _ = {
      ..._(_.draggableProps.style ?? {}),
      marginBottom: _,
    },
    _ = (0, _.jsx)(`div`, {
      className: _(
        _,
        _ && `kcFDYe0O-0k-`,
        _.isDragging && `lLrSidtylZE-`,
        _.isDragging && !_.draggingOver && `SUzEIytDHSo-`,
        _ && `gRleWv2icIA-`,
      ),
      _: _ ? _ : void 0,
      ref: _.innerRef,
      ..._.draggableProps,
      ..._.dragHandleProps,
      style: _,
      onContextMenu: _,
      children: (0, _.jsx)(_, {
        paddingX: _,
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
          isLast: _ || _,
          navProps: _,
          autoFocus: _,
          dragHandle:
            !_ &&
            (0, _.jsx)(_, {
              align: `center`,
              flexShrink: `0`,
              alignSelf: `start`,
              height: `var(--icon-size, 48px)`,
              className: `RdF7WIlWeKA-`,
              children: (0, _.jsx)(_, {
                direction: `top`,
                toolTipContent: _.Localize(`#Achievements_Pin_DragToReorder`),
                style: {
                  cursor: `inherit`,
                },
                children: (0, _.jsx)(_, {
                  className: _(`ETIQ7fGYNMw-`, _ && `_07VYh0-d89M-`),
                }),
              }),
            }),
        }),
      }),
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
    [_, _] = (0, _.useState)(),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = _.indexOf(_);
        (_(_(_, _, _ + _)), _(_));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_, _, _) =>
        (0, _.jsx)(_, {
          provided: _,
          snapshot: _,
          index: _.source.index,
          isLast: !0,
          achievement: _[_.source.index],
          cloneRootProps: _.current ? _(_.current) : void 0,
          compareTo: _,
          compareProgress: _,
          globalPercentages: _,
          moveTo: _,
          moveBy: _,
        }),
      [_, _, _, _, _, _],
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
                    isLast: _ == _.length - 1,
                    achievement: _,
                    compareTo: _,
                    compareProgress: _,
                    globalPercentages: _,
                    moveTo: _,
                    moveBy: _,
                    autoFocus: _.api_name == _,
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
      [_, _, _, _, _, _, _],
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
            marginBottom: -4,
          },
          ref: (_) => {
            (_.innerRef(_), (_.current = _));
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
