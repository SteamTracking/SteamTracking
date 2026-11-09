import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _ } from "./storelink.js";
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
} from "./saletags.js";
import { _ } from "./storeurl.js";
import { _, _, _, _, _ } from "./salestoreitemutils.js";
import { _, _ } from "./microtrailerdisplay.js";
import { _ } from "./storegamehover.js";
import { _ } from "./salewishlistbutton.js";
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
} from "./main.js";
function _() {
  return {
    width: 231,
    height: 87,
  };
}
var _ = _(_()),
  _ = `KPyQrAYKerM-`,
  _ = `wGsVN7BCL-8-`,
  _ = `_3k6zW2BR0Ec-`,
  _ = `ALwt1eWVvf0-`,
  _ = `_630lLH8fjII-`,
  _ = `_6lXwKbKQRZM-`,
  _ = `O2ZRoYfc1Qk-`,
  _ = `WVCDoL13yGg-`,
  _ = `pBwTyvQh7iI-`,
  _ = `lWa9AGKkKhU-`,
  _ = `_2w1L-tFibuk-`,
  _ = `FNsnxK3tYRI-`,
  _ = `XfQfXm4a0JE-`,
  _ = `_5IGBtrxnWJ0-`,
  _ = `bVbljBZi-wU-`,
  _ = `olyf0KJqJlE-`,
  _ = `v2ki0uInhRU-`,
  _ = `_7R6l0Of6MJ0-`,
  _ = `AYD-9JVfXTU-`,
  _ = `mjoUDFuJ0D8-`,
  _ = `_4cqzz9ahZPc-`,
  _ = `_4MdgvcokN4Y-`,
  _ = `oO24eF-LkHU-`,
  _ = `KTGJoQErGog-`,
  _ = `_1i4D-abW7us-`,
  _ = `InaZA4MxyUE-`,
  _ = `jPVI0mk1nqU-`,
  _ = `Ypr-OC7lYjM-`,
  _ = `RW-yCN2mjag-`,
  _ = `-GGXIbckfGw-`,
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
        (_.current = !0), _(!0);
      }, 500);
      return () => window.clearTimeout(_);
    }
    return _(_ || _), () => {};
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
          className: _(`fNtXEMzHz58-`, `CapsuleBottomBar`, _),
          children: [
            _ &&
              (0, _.jsx)(_, {
                creatorAccountID: _,
                ..._,
              }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
                className: _(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            _ &&
              `appid` in _ &&
              (0, _.jsx)(_, {
                appid: _.appid,
                className: _(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !_ &&
              (0, _.jsx)(_, {
                _: _,
                bMinimizePlatforms: _,
                bHideWindows: !0,
              }),
            !_ &&
              (0, _.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
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
export {
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
};
