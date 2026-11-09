import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _ } from "./carouselarrows.js";
import { _, _ } from "./seemorebutton.js";
import { _ } from "./bottomrow.js";
import { _, _ } from "./storeitemhooks.js";
import { _ } from "./storedisplayutils.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = `OmrgUJdrKyI-`,
  _ = `nKsKxQO2ePs-`,
  _ = `BRZXitJANxc-`,
  _ = `_1LCgJ96WPe4-`,
  _ = _(_()),
  _ = `168px`,
  _ = `_1iA0kFrL4Xs-`,
  _ = `miI44Dogivo-`,
  _ = `WM9RIZtVCp8-`,
  _ = `XVJo-PytpYs-`,
  _ = `_0ArQufkbR9k-`,
  _ = `T7JPI-q--Xw-`,
  _ = _(),
  _ = -1,
  _ = parseInt(_),
  _ = 250;
function _(_) {
  let {
      navKey: _,
      classes: _,
      appIDs: _,
      sortOrder: _,
      scorePenaltyIfOwned: _,
      capsuleSize: _,
      maxItemCount: _,
      mapAppToCreatorClan: _,
      strFeatureFirstAppMsg: _,
      setNumberVisibleItems: _,
    } = _,
    _ = _(910),
    _ = _(),
    [_, _] = _(),
    [_, _] = _.useState(_),
    _ = _(_, _),
    [_, _] = _.useState(null);
  _.useEffect(() => {
    if (_ == 1) return;
    let _ = _.filter((_) => !_.Get().BIsStoreItemMissing(_, 0));
    if (_ && _ && !_ && _.length > 0 && _[0] == _[0]) {
      let _ = [_[0], _, ..._.slice(1)];
      _(_), _(_), _?.(_.length);
    } else _(_), _?.(_.length);
  }, [_, _, _, _, _, _]);
  let _ = _;
  return (0, _.jsx)(_, {
    className: _(_, {
      SaleSectionCarousel: !0,
      [_]: !0,
    }),
    visibleElements: _,
    useTestScrollbar: !0,
    bLazyRenderChildren: !0,
    lazyRenderPlaceholderHeight: _,
    lazyRenderPlaceholderWidth: _,
    gap: 12,
    hideArrows: !1,
    screenIsWide: _,
    navKey: _,
    bForceSimpleCarousel: _,
    children: _(_, _, _ ?? `none`, _ ?? 3).map((_, _) =>
      (0, _.jsx)(
        _,
        {
          appID: _,
          size: _,
          creatorClanAccountID: _?.get(_),
          strFeaturingMsg: _ == 0 && _ ? _ : void 0,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { appID: _, size: _, creatorClanAccountID: _, strFeaturingMsg: _ } = _,
    [_] = _(_, 0, _);
  if (_ == _)
    return (0, _.jsx)(`div`, {
      className: _({
        [_]: !0,
        [_]: _ == `small`,
      }),
    });
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _(_, _),
    });
  let _ = _(_.GetStoreItemType(), _.GetAppType()),
    _ = {
      _: _.GetID(),
      type: _,
    },
    _ = !!_;
  return (0, _.jsx)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
      [_]: _ == `small`,
    }),
    children: (0, _.jsx)(_, {
      capsule: _,
      imageType: `header`,
      bHidePlatforms: !0,
      bHideStoreHover: _,
      creatorAccountID: _,
      strDoubleCapsuleMessage: _ ? _(_) : void 0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function _(_, _, _, _) {
  let _ = _.useMemo(() => _.filter((_) => !_.BIsGameIgnored(_)), [_, _]),
    _ = _.useMemo(
      () =>
        Array.from(
          {
            length: _.length,
          },
          () => Math.random(),
        ),
      [_.length],
    );
  return _ == `shuffle`
    ? _.map((_, _) => ({
        _: _,
        score:
          (_.BIsGameOwned(_) ? _ : 0) +
          (Math.sqrt(_) + 2) * _[_] +
          Math.sqrt(_),
      }))
        .sort((_, _) => _.score - _.score)
        .map((_) => _._)
    : _ == `scored`
      ? _.map((_, _) => ({
          _: _,
          score: _.BIsGameOwned(_) ? _ + _ : _,
        }))
          .sort((_, _) => _.score - _.score)
          .map((_) => _._)
      : _;
}
function _(_) {
  let { url: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        href: _,
        className: _(_, `btnv6_grey_black btn_medium`),
        children: (0, _.jsx)(`span`, {
          children: _(`#StoreApp_SeeAll`),
        }),
      })
    : void 0;
}
function _(_) {
  let {
      title: _,
      navKey: _,
      seeAllLink: _,
      appIDs: _,
      sortOrder: _,
      scorePenaltyIfOwned: _,
      capsuleSize: _,
      bFullWidth: _,
    } = _,
    _ = _(),
    { bShowSeeMoreHint: _, panelProps: _ } = _(_);
  return (0, _.jsx)(_, {
    className: _(_, _ && `YmSKmufcDTw-`),
    navEntryPreferPosition: _.PREFERRED_CHILD,
    ..._,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            !_ &&
              (0, _.jsx)(_, {
                url: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                label: _(`#StoreApp_SeeAll`),
                shown: _,
              }),
          ],
        }),
        (0, _.jsx)(_, {
          preferredFocus: !0,
          children: (0, _.jsx)(_, {
            navKey: _,
            classes: _,
            appIDs: _,
            maxItemCount: 4,
            sortOrder: _,
            scorePenaltyIfOwned: _,
            capsuleSize: _,
          }),
        }),
      ],
    }),
  });
}
export { _ as default, _, _ };
