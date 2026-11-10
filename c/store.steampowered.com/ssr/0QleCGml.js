function _() {
  return {
    width: 231,
    height: 87,
  };
}
var _ = _(_()),
  _ = `GsvFZwjeISc-`,
  _ = `_0Sa3FdxP3vM-`,
  _ = `Iach22CuzcQ-`,
  _ = `xiAYn036VxI-`,
  _ = `Xq09MwMAkS8-`,
  _ = `hHb5Jc7nhio-`,
  _ = _(),
  _ = `capsule_index_`;
function _(_) {
  let {
      capsule: _,
      bShowParentApp: _,
      elElementToAppendToHover: _,
      index: _,
      navKey: _,
      bHideStoreHover: _,
      onlyOneDiscountPct: _,
      bPreferDemoStorePage: _,
      bShowEarlyAccessBanner: _,
    } = _,
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _.useRef(!1);
  _.useEffect(() => {
    if (_ && !_.current) {
      let _ = window.setTimeout(() => {
        ((_.current = !0), _(!0));
      }, 500);
      return () => window.clearTimeout(_);
    }
    return (_(_ || _), () => {});
  }, [_, _]);
  let { data: _ } = _(),
    _ = !!_?.preferences?.disable_microtrailers,
    _ = _(_),
    { data: _ } = _(_),
    _ = _(_ ? _?.related_items?.parent_appid : void 0),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ = !!_ && !!_,
    _ = (0, _.jsx)(_, {
      ..._,
      strExtraParams: _.strExtraParams,
      _: _,
      bIsHovered: _ && !_,
      bHasParentAppToDisplay: _,
      onlyOneDiscountPct: _,
      bShowEarlyAccessBanner: _,
      bUsePanel: !_ && !_,
    });
  return (0, _.jsxs)(_, {
    className: _({
      [_]: !0,
      [_]: _ && !_ && _,
      [_ + _]: _ == 0,
    }),
    navEntryPreferPosition: _.PREFERRED_CHILD,
    navKey: _,
    onFocusWithin: _.imageType == `library` ? void 0 : _,
    children: [
      (0, _.jsxs)(_, {
        appid: _.appid,
        children: [
          _
            ? (0, _.jsx)(`div`, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                children: _,
              })
            : (0, _.jsx)(_, {
                className: _,
                _: _,
                elElementToAppend: _.elElementToAppendToHover,
                bShowDemoButton: _.bShowDemoButton,
                bPreferDemoStorePage: _.bPreferDemoStorePage,
                bShowDeckCompatibilityDialog: _.bShowDeckCompatibilityDialog,
                eHardwareCompatibilityDisplay: _.eHardwareCompatibilityDisplay,
                bHidePrice: _.bHidePrice,
                bUseSubscriptionLayout: _.bUseSubscriptionLayout,
                strExtraParams: _.strExtraParams,
                nCreatorAccountID: _.creatorAccountID,
                nWidthMultiplier: _.nWidthMultiplier,
                bShowIgnoreButton: _.bShowIgnoreButton,
                bShowDescription: _.bShowDescriptionInHover,
                children: _,
              }),
          !!_ &&
            (0, _.jsx)(_.Fragment, {
              children: _,
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          strExtraParams: _.strExtraParams,
          parentID: _,
          parentStoreItemDefaultInfo: _,
          childAppType: _.type,
          bPreferDemoStorePage: !!_,
        }),
    ],
  });
}
function _(_) {
  let {
      strExtraParams: _,
      parentID: _,
      parentStoreItemDefaultInfo: _,
      childAppType: _,
      bPreferDemoStorePage: _,
    } = _,
    _ = _(),
    _ = _(),
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        ..._(_, _, _, _, _),
        children: (0, _.jsxs)(_, {
          appid: _.appid,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(
                _ == 11
                  ? `#SalePage_ParentApp_SoundTrack`
                  : `#SalePage_ParentApp_DLC`,
              ),
            }),
            (0, _.jsx)(_, {
              _: _,
              strExtraParams: _,
              children: (0, _.jsx)(`img`, {
                loading: `lazy`,
                className: _,
                alt: _.name || ``,
                src: _(_, `small_capsule`),
                ..._(),
              }),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let {
      _: _,
      bHideStatusBanners: _,
      bUsePanel: _,
      strExtraParams: _,
      index: _,
      imageType: _,
      bHasParentAppToDisplay: _,
      bIsHovered: _,
      strDoubleCapsuleMessage: _,
      bPreferDemoStorePage: _,
      bShowEarlyAccessBanner: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_),
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _ ? void 0 : _(_(`${_(_, _)}${_ ? `?${_}` : ``}`, _, _)),
    _ = _ ? _ : _,
    _ = _ && _,
    _ = !!_;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _({
          [_]: _,
        }),
        children: [
          (0, _.jsxs)(_, {
            href: _,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: _ ? `relative` : void 0,
              zIndex: _ ? 4 : void 0,
            },
            className: _({
              [_]: _,
            }),
            preferredFocus: _,
            focusable: !0,
            noFocusRing: _,
            children: [
              (0, _.jsx)(_, {
                appids: _,
                hide_status_banners: _,
                show_early_access: _,
              }),
              _ != `none` &&
                (0, _.jsx)(_, {
                  imageType: _,
                  _: _,
                  bPreferAssetWithoutOverride: _,
                }),
              (0, _.jsx)(_, {
                _: _,
              }),
              (0, _.jsx)(`div`, {
                className: _({
                  [_]: _,
                }),
                children: (0, _.jsx)(_, {
                  _: _,
                  active: _,
                  bIsHoverMode: !0,
                  eGrowOnActivate: _ ? _.k_ETrailerGrowAmount_Implicit : void 0,
                }),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              _: _,
              strDoubleCapsuleMessage: _,
              index: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { _: _, strDoubleCapsuleMessage: _, index: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, `TwoWidthSideInfo`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`span`, {
          children: _ ? _(_) : ``,
        }),
      }),
      (0, _.jsx)(_, {
        bHideTitle: !0,
        rgTagIDs: _?.map((_) => _.tagid) || [],
        instanceNum: _,
      }),
    ],
  });
}
function _(_) {
  let {
      _: _,
      bHidePriceIfOwned: _,
      bHideStatusBanners: _,
      bUseSubscriptionLayout: _,
      elElementToAppendToHover: _,
      bHidePrice: _,
      bHidePlatforms: _,
      creatorAccountID: _,
      bIsHovered: _,
      onlyOneDiscountPct: _,
      strDoubleCapsuleMessage: _,
    } = _,
    { data: _ } = _(_),
    { bIsOwned: _ } = _(_);
  return _ && _ && _.item_type == 0 && _.appid
    ? (0, _.jsx)(_, {
        appid: _.appid,
        bIsMuted: _,
      })
    : _
      ? null
      : (0, _.jsx)(_, {
          _: _,
          bHidePrice: _,
          bShowInLibraryInsteadOfPrice: !!(_ && _),
          bHidePlatforms: _,
          creatorAccountID: _,
          bShowName: _.bShowName,
          onlyOneDiscountPct: _,
          bShowWishlistButton: !!_,
        });
}
function _(_) {
  let { appid: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    appid: _,
    bIsFree: !!_?.is_free,
    bIsComingSoon: !!_?.is_coming_soon,
    bTextMode: _,
    className: _,
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _(),
    { appid: _, bIsFree: _, bIsComingSoon: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { bIsOwned: _ } = _(_),
    _ = _(_),
    { mutateAsync: _ } = _(_, !_, _(_)),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = async () => {
      _.logged_in ? _ || (_(!0), await _(), _(!1)) : _();
    };
  if (_ || (!_ && _))
    return _
      ? (0, _.jsx)(_, {
          possibleDemoAppID: _,
        })
      : null;
  let _ = null;
  return (
    _ && !_
      ? (_ = (0, _.jsx)(_, {
          size: 18,
        }))
      : _
        ? _ && (_ = _ ? _(`#OnWishlist`) : (0, _.jsx)(_, {}))
        : (_ = _ ? _(`#wishlist_add_to_wishlist`) : (0, _.jsx)(_, {})),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _(`#AddToWishlist_ttip`),
          children: (0, _.jsx)(`div`, {
            className: _(_, _),
            onClick: _,
            children: _,
          }),
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let { possibleDemoAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return _ && (_.type == 1 || _.type == 12) && _.related_items?.parent_appid
    ? (0, _.jsx)(_, {
        parentAppID: _.related_items?.parent_appid,
        className: _,
      })
    : null;
}
function _(_) {
  let { parentAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        appid: _,
        bIsComingSoon: !!_.is_coming_soon,
        bIsFree: !!_.is_free,
        className: _,
      });
}
function _(_) {
  let {
      _: _,
      bHidePrice: _,
      bShowInLibraryInsteadOfPrice: _,
      bHidePlatforms: _,
      strClassName: _,
      creatorAccountID: _,
      bShowName: _,
      onlyOneDiscountPct: _,
      bShowAddToCart: _,
      bShowWishlistButton: _,
    } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    { data: _ } = _(_);
  if (
    ((0, _.useEffect)(() => {
      _.current && _(_.current.offsetWidth < 370);
    }, [_]),
    !_ || !(`appid` in _ || `bundleid` in _ || `packageid` in _))
  )
    return null;
  let _ = !!(_ && _?.item_type == 0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !(!_ && !_ && !_ && _ && _) &&
        (0, _.jsxs)(`div`, {
          ref: _,
          className: _(`_0uWyQeNM7D8-`, `CapsuleBottomBar`, _),
          children: [
            _ &&
              (0, _.jsx)(_, {
                creatorAccountID: _,
                ..._,
              }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
                className: _(`GjHvIm1Fq8E-`, `V5PfWwQuoso-`),
              }),
            _ &&
              `appid` in _ &&
              (0, _.jsx)(_, {
                appid: _.appid,
                className: _(`GjHvIm1Fq8E-`, `cvzLWRLoJLI-`),
              }),
            !_ &&
              (0, _.jsx)(_, {
                _: _,
                bMinimizePlatforms: _,
                bHideWindows: !0,
              }),
            !_ &&
              (0, _.jsx)(`span`, {
                className: `ezBcVPPFhXA-`,
                children: (0, _.jsx)(_, {
                  _: _,
                  bShowInLibrary: _,
                  onlyOneDiscountPct: _,
                }),
              }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          _: _,
        }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _?.name
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.name,
      })
    : null;
}
function _(_) {
  let { creatorAccountID: _, strClassName: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        creatorid: _,
      }),
      [_],
    ),
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _(_?.clan_avatar, `Medium`),
    _ = _.name || ``;
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`img`, {
        className: _(_),
        src: _,
        alt: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
    ],
  });
}
