import { _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _ } from "./src.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./dialogs.js";
import { _, _, _, _, _ } from "./storebrowsequerycontext.js";
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
} from "./saletags.js";
import { _, _ } from "./storenaveventcontext.js";
import { _ } from "./react-router.js";
import { _ } from "./useQuery.js";
import { _, _ } from "./storeitem.js";
import { _, _ } from "./appidutils.js";
import { _, _, _, _, _ } from "./salestoreitemutils.js";
import { _ } from "./axios.js";
import { _ } from "./axiosutils.js";
import { _ } from "./throbber.js";
import { _, _ } from "./localization2.js";
import { _ } from "./eventdevfeaturestore.js";
import { _, _ } from "./partnereventshared.module.js";
import "./steamid.js";
import { _ } from "./partnereventdialog.module.js";
import { _ } from "./numberformats.js";
import { _ } from "./creatorhomestore.js";
import { _ } from "./loadingspinner.js";
import { _ } from "./storegamehover.js";
import { _ } from "./storeitemhooks.js";
import { _, _ } from "./clanstore.js";
function _(_) {
  return _;
}
var _ = _(_()),
  _ = _(_()),
  _ = _();
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._.GetDefaultParams(),
        ..._,
        ..._,
      }),
      [_, _.domain, _.controller, _.method, _.submethod, _.feature, _.depth],
    );
  return (0, _.jsx)(_, {
    ..._,
    children: _,
  });
}
function _() {
  return {
    width: 231,
    height: 87,
  };
}
var _ = `_4cqzz9ahZPc-`,
  _ = `_1i4D-abW7us-`,
  _ = `InaZA4MxyUE-`,
  _ = `jPVI0mk1nqU-`,
  _ = `Ypr-OC7lYjM-`,
  _ = `RW-yCN2mjag-`,
  _ = `-GGXIbckfGw-`,
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
var _ = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function _(_, _) {
  let _ = `0000000000000000000000000000000000000000`;
  typeof _ == `string` ? (_ = _) : _ && (_ = _(_) || _);
  let _ = `.jpg`;
  _ === `0000000000000000000000000000000000000000` && (_ = _),
    _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  switch (
    (_ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (_ += _.slice(0, 2) + `/`)),
    (_ += _),
    _)
  ) {
    case `X-Small`:
    case `Small`:
      break;
    case `Medium`:
    case `MediumLarge`:
      _ += `_medium`;
      break;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      _ += `_full`;
  }
  return (_ += _), _;
}
function _(_) {
  return _
    ? (typeof _[Symbol.iterator] == `function`
        ? Array.from(_)
        : Object.values(_).filter((_) => typeof _ == `number`)
      )
        .map((_) => _.toString(16).padStart(2, `0`))
        .join(``)
    : ``;
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
var _ = class _ {
  m_mapAppIDToPaymentPartners = new Map();
  m_mapAppIDToPromise = new Map();
  m_mapPackageIDToPaymentPartners = new Map();
  m_mapPackageIDToPromise = new Map();
  m_mapBundleIDToPaymentPartners = new Map();
  m_mapBundleIDToPromise = new Map();
  GetInfoForApp(_) {
    return this.m_mapAppIDToPaymentPartners.get(_);
  }
  BHasInfoForApp(_) {
    return this.m_mapAppIDToPaymentPartners.has(_);
  }
  GetInfoForPackage(_) {
    return this.m_mapPackageIDToPaymentPartners.get(_);
  }
  BHasInfoForPackage(_) {
    return this.m_mapPackageIDToPaymentPartners.has(_);
  }
  GetInfoForBundle(_) {
    return this.m_mapBundleIDToPaymentPartners.get(_);
  }
  BHasInfoForBundle(_) {
    return this.m_mapBundleIDToPaymentPartners.has(_);
  }
  GetInfoForStoreItem(_, _) {
    switch (_) {
      case 0:
        return this.GetInfoForApp(_);
      case 1:
        return this.GetInfoForPackage(_);
      case 2:
        return this.GetInfoForBundle(_);
      default:
        return null;
    }
  }
  BHasInfoForStoreItem(_, _) {
    switch (_) {
      case 0:
        return this.BHasInfoForApp(_);
      case 1:
        return this.BHasInfoForPackage(_);
      case 2:
        return this.BHasInfoForBundle(_);
      default:
        return !1;
    }
  }
  async LoadAppPartnerInfo(_) {
    return (
      this.m_mapAppIDToPromise.has(_) ||
        this.m_mapAppIDToPromise.set(
          _,
          this.InternalLoadAppPartnerInfo(_, null, null),
        ),
      this.m_mapAppIDToPromise.get(_)
    );
  }
  async LoadPackagePartnerInfo(_) {
    return (
      this.m_mapPackageIDToPromise.has(_) ||
        this.m_mapPackageIDToPromise.set(
          _,
          this.InternalLoadAppPartnerInfo(null, _, null),
        ),
      this.m_mapPackageIDToPromise.get(_)
    );
  }
  async LoadBundlePartnerInfo(_) {
    return (
      this.m_mapBundleIDToPromise.has(_) ||
        this.m_mapBundleIDToPromise.set(
          _,
          this.InternalLoadAppPartnerInfo(null, null, _),
        ),
      this.m_mapBundleIDToPromise.get(_)
    );
  }
  async LoadStoreItemPartnerInfo(_, _) {
    switch (_) {
      case 0:
        return this.LoadAppPartnerInfo(_);
      case 1:
        return this.LoadPackagePartnerInfo(_);
      case 2:
        return this.LoadBundlePartnerInfo(_);
      default:
        return null;
    }
  }
  async InternalLoadAppPartnerInfo(_, _, _) {
    let _ = null;
    try {
      let _ = {
          appid: _,
          packageid: _,
          bundleid: _,
        },
        _ = _.PARTNER_BASE_URL + `promotion/dailydeals/ajaxgetpartner`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
        });
      if (_?.status == 200 && _.data?.success == 1)
        return _
          ? (this.m_mapAppIDToPaymentPartners.set(_, _.data.partnerinfo),
            this.m_mapAppIDToPaymentPartners.get(_))
          : _
            ? (this.m_mapPackageIDToPaymentPartners.set(_, _.data.partnerinfo),
              this.m_mapPackageIDToPaymentPartners.get(_))
            : (this.m_mapBundleIDToPaymentPartners.set(_, _.data.partnerinfo),
              this.m_mapBundleIDToPaymentPartners.get(_));
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CPartnerPaymentStore.LoadAppPartnerInfo failed: ` + _?.strErrorMsg,
        _,
      ),
      null
    );
  }
  static s_Singleton;
  static Get() {
    return (_.s_Singleton ||= new _()), _.s_Singleton;
  }
  constructor() {}
};
function _(_) {
  return _(_, 0);
}
function _(_) {
  return _(_._, _(_));
}
function _(_, _) {
  let [_, _] = _.useState(() => _.Get().GetInfoForStoreItem(_, _));
  return (
    _.useEffect(() => {
      _
        ? !_.Get().BHasInfoForStoreItem(_, _) || _ == null
          ? _.Get().LoadStoreItemPartnerInfo(_, _).then(_)
          : _.Get().BHasInfoForStoreItem(_, _) &&
            _ != _.Get().GetInfoForStoreItem(_, _) &&
            _(_.Get().GetInfoForStoreItem(_, _))
        : _(null);
    }, [_, _, _]),
    _
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      if (_?.length > 0) {
        let _ = _.map((_) => _.Get().LoadStoreItemPartnerInfo(_, 0));
        Promise.all(_).then(() => {
          let _ = new Map();
          _.forEach((_) => {
            _.Get().BHasInfoForApp(_) && _.set(_, _.Get().GetInfoForApp(_));
          }),
            _(_);
        });
      }
    }, [_]),
    _
  );
}
function _(_) {
  let { href: _, children: _, bAllowFocuseableAnchor: _, ..._ } = _;
  return _.EREALM === _.k_ESteamRealmChina
    ? (0, _.jsx)(`div`, {
        ..._,
        children: _,
      })
    : _
      ? (0, _.jsx)(_, {
          href: _,
          ..._,
          children: _,
        })
      : (0, _.jsx)(`a`, {
          href: _,
          ..._,
          children: _,
        });
}
function _(_) {
  let {
    strURL: _,
    strName: _,
    strAvatarURL: _,
    nFollowers: _,
    strCreatorType: _,
    strTagLine: _,
    strMemberListURL: _,
    followButton: _,
    bSmallFormat: _,
    bMinimalDisplay: _,
    bCompact: _,
  } = _;
  return (0, _.jsx)(_, {
    feature: `salecreatorhome`,
    children: (0, _.jsxs)(_, {
      className: _(_, _ ? _ : _, _ ? _ : ``, _ ? _ : ``),
      "flow-children": `row`,
      children: [
        !!_ &&
          (0, _.jsx)(`span`, {
            className: `SG9Xn5tF5a0-`,
            children: _,
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                backgroundImage: `url(${_} )`,
              },
            }),
            (0, _.jsxs)(`div`, {
              className: _(_),
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      href: _(_),
                      className: _,
                      bAllowFocuseableAnchor: !0,
                      children: (0, _.jsx)(`img`, {
                        className: _(_, `Avatar_Trgt`),
                        src: _,
                        alt: ``,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _(_, _),
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: _(_, _),
                          children: [
                            (0, _.jsx)(_, {
                              href: _(_),
                              className: _,
                              children: _,
                            }),
                            !!_ &&
                              (0, _.jsx)(`div`, {
                                className: _(`_0UzWiVhBe8U-`, `ct7kvDppls0-`),
                                children: _,
                              }),
                          ],
                        }),
                        (0, _.jsx)(`div`, {
                          className: _({
                            [_]: _,
                            [_]: !_,
                            [_]: !0,
                          }),
                          children: (0, _.jsxs)(`div`, {
                            className: _(_),
                            children: [
                              _,
                              (0, _.jsxs)(`div`, {
                                className: _({
                                  [_]: !0,
                                }),
                                children: [
                                  (0, _.jsx)(`span`, {
                                    children: _(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, _.jsx)(`span`, {
                                    className: _,
                                    children: _(_),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !!_ &&
                  (0, _.jsx)(`a`, {
                    href: _,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `GEroszngeLM-`,
                    children: _(`#ClanMembershipList`),
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
  switch (_) {
    case `publisher`:
      return _(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return _(`#CreatorHome_InFranchise`);
  }
  return _(`#CreatorHome_DevelopedBy`);
}
function _(_) {
  let {
      creatorID: _,
      bShowTagline: _,
      bHideCreatorType: _,
      bSmallFormat: _,
      bHideFollowButton: _,
      bAddLinkToMemberList: _,
      bMinimalDisplay: _,
      bCompact: _,
    } = _,
    { creatorHome: _, isFetching: _ } = _(_.clan_account_id),
    [_] = _();
  return _ || (!_ && _)
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          string: _(`#Loading`),
          size: `medium`,
          position: `center`,
        }),
      })
    : _
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            strURL: _.GetCreatorHomeURL(_.type),
            strName: _.GetName(),
            strAvatarURL: _.GetAvatarURLFullSize(),
            nFollowers: _.GetNumFollowers(),
            strCreatorType: _ ? void 0 : _(_.type),
            strTagLine: _ ? _.GetTagLine() : void 0,
            strMemberListURL: _
              ? _.COMMUNITY_BASE_URL +
                `gid/` +
                _.GetClanSteamID().ConvertTo64BitString() +
                `/members/`
              : void 0,
            followButton: _
              ? void 0
              : (0, _.jsx)(_, {
                  clanAccountID: _.clan_account_id,
                  creatorID: _,
                }),
            bSmallFormat: _,
            bMinimalDisplay: _,
            bCompact: _,
          }),
        })
      : null;
}
function _(_) {
  let { clanInfo: _, bAddLinkToMemberList: _ } = _;
  if (
    (_(
      _ && _.clanAccountID,
      `CuratorHoverContent expect clanInfo, not supplied`,
    ),
    !_)
  )
    return null;
  let _ = {
    clan_account_id: _.clanAccountID,
    name: _.group_name,
    type: `developer`,
  };
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      creatorID: _,
      bSmallFormat: !0,
      bShowTagline: !0,
      bHideCreatorType: !0,
      bAddLinkToMemberList: _,
    }),
  });
}
var _ = `_9LqpNw7qjdM-`,
  _ = `_93Z4fzffJcU-`,
  _ = `dR6hKqARMhQ-`,
  _ = `JRk3rj5vGwI-`,
  _ = `iGL3Ei3Dyak-`,
  _ = `BFCBEAWk9Ws-`;
function _(_) {
  let {
      fnSetItemID: _,
      strLabel: _,
      itemType: _,
      fnFilterID: _,
      className: _,
      tooltip: _,
      autoFocus: _,
      bIncludeRetired: _,
      bShowDLCToggle: _,
      bOnlyDLC: _,
      bRunQueryOnLoad: _,
      rgParentAppIDs: _,
    } = _,
    [_, _] = _.useState(``),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_] = _.useState(new _()),
    [_, _] = _.useState([]),
    [_, _] = _.useState([]),
    [_, _] = _.useState([]),
    _ = _.createRef(),
    _ = _.createRef(),
    _ = (0, _.useCallback)(
      async (_, _) => {
        _(!0);
        let _ = {
            json: 1,
            term: _,
            bexcluderetired: !_,
          },
          _ = `${_.PARTNER_BASE_URL}appsearch/suggestapps`;
        switch (_) {
          case 1:
            _ = `${_.PARTNER_BASE_URL}admin/store/suggestpackage`;
            break;
          case 2:
            _ = `${_.PARTNER_BASE_URL}bundles/suggestbundle`;
            break;
          default:
            _ ? (_.includedlc = !0) : _ === !1 && (_.includedlc = !1),
              _ &&
                ((_.bfilterappids = !0),
                (_.rgParentAppIds = JSON.stringify(_)));
        }
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
        });
        _?.status == 200 && _.data?.success == 1
          ? _
            ? (_(_.data.matches?.filter((_) => _(_._)) || []),
              _(_.data.package_matches?.filter((_) => _(_.packageid)) || []),
              _(_.data.bundle_matches?.filter((_) => _(_.bundleid)) || []))
            : (_(_.data.matches || []),
              _(_.data.package_matches || []),
              _(_.data.bundle_matches || []))
          : (_([]), _([]), _([])),
          _(!1);
      },
      [_, _, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_), _(_.current?.value, _);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _?.target?.value?.toLocaleLowerCase() ?? ``;
        _(_);
        let _ = _.current?.checked;
        _.Schedule(1e3, () => _(_, _));
      },
      [_, _, _],
    );
  _.useEffect(() => {
    _ && _(_);
  }, []);
  let _;
  switch (_) {
    case 1:
      _ = _(`#StoreAdmin_Search_Placeholder_package`);
      break;
    case 2:
      _ = _(`#StoreAdmin_Search_Placeholder_bundle`);
      break;
    default:
      _ = _(`#StoreAdmin_Search_Placeholder`);
  }
  let _ = _ && !_ && _ == 0;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            type: `text`,
            ref: _,
            className: void 0,
            label: _,
            tooltip: _,
            placeholder: _,
            onChange: _,
            value: _,
            bAlwaysShowClearAction: _.length > 0,
            focusOnMount: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              ref: _,
              checked: _,
              onChange: _,
              className: `XvBYAJ74wLA-`,
              label: _(`#StoreAdmin_Search_IncludeDLC`),
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `dtnEhnhLM-A-`,
              children: (0, _.jsx)(_, {
                size: `small`,
              }),
            }),
          _?.length > 0 &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  name: _.match,
                  _: _._,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    _([]), _(_._, _.itemid);
                  },
                },
                _._,
              ),
            ),
          _?.length > 0 &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  name: _.name,
                  _: _.packageid,
                  type: 1,
                  is_visible: _.is_visible,
                  fnSetItemID: () => {
                    _([]), _(_.packageid);
                  },
                },
                _.packageid,
              ),
            ),
          _?.length > 0 &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  name: _.name,
                  _: _.bundleid,
                  type: 2,
                  is_visible: _.is_visible,
                  fnSetItemID: () => {
                    _([]), _(_.bundleid);
                  },
                },
                _.bundleid,
              ),
            ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { name: _, _: _, type: _, is_visible: _, fnSetItemID: _ } = _,
    [_] = _(_, _, {
      include_assets: !0,
    }),
    _ = `#DailyDeals_HeaderArtMissing`;
  switch (_) {
    case 1:
      _ = `#DailyDeals_PackageHeaderArtMissing`;
      break;
    case 2:
      _ = `#DailyDeals_BundleHeaderArtMissing`;
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: () => _(),
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, `AvatarImageCtn`),
        children: (0, _.jsx)(`img`, {
          src: _?.GetAssets()?.GetHeaderURL(),
          className: _,
          alt: _(_),
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsxs)(`span`, {
              children: [_(`#Sale_FeaturingHidden`), ` `],
            }),
          _,
          _ == 1 ? ` (${_})` : ``,
        ],
      }),
    ],
  });
}
function _(_, _) {
  let _ = _(_);
  return _ ? _[_] : ``;
}
function _(_, _, _) {
  let _ = _(_);
  return _[_] != _ && ((_[_] = _), !0);
}
function _(_, _) {
  let _ = _(_);
  return !!_?.[_];
}
function _(_) {
  if (!_) return 0;
  let _ = 0;
  for (let _ = 0; _ < 32; ++_) _[_(_)] && (_ += 1);
  return _;
}
function _(_) {
  let _ = [];
  for (let _ = 0; _ < 32; ++_) {
    let _ = _(_);
    _[_] && _.push([_, _[_]]);
  }
  return _;
}
var _ = `partnerevents/ajaxgetdraftandrecentsnippets`;
function _(_, _) {
  return _({
    queryKey: [`eventdraftrecent`, _, _],
    queryFn: () => _(_, _),
    select: _,
    enabled: !!_,
  });
}
function _(_, _) {
  return _(_(_, _));
}
async function _(_, _) {
  let _ = new URLSearchParams({
    clan_accountid: `` + _,
  });
  _ && _.set(`rtime_oldest`, `` + _);
  let _ = `${_.PARTNER_BASE_URL}${_}?${_}`,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered HTTP ${_.status}`);
  let _ = await _.json();
  if (_?.success != 1) throw Error(`${_} failed with result ${_?.success}`);
  return _.snippets ?? [];
}
function _(_) {
  return [..._].sort((_, _) =>
    _.hidden == _.hidden
      ? _.hidden && _.published != _.published
        ? _.published
          ? -1
          : 1
        : (_.rtime32_start_time ?? 0) - (_.rtime32_start_time ?? 0)
      : _.hidden
        ? -1
        : 1,
  );
}
function _(_, _) {
  let { data: _ } = _(_, _);
  return _ ?? null;
}
function _(_) {
  let { oEditableMessage: _ } = _,
    [_] = _(() => [_.GetStoreItemKey()]);
  return !_ || _.item_type != `app`
    ? (0, _.jsx)(`div`, {
        className: _,
        children: `Error: Major Update does not support anything but targeting app`,
      })
    : (0, _.jsx)(_, {
        oEditableMessage: _,
        idKey: _,
      });
}
function _(_) {
  let { oEditableMessage: _, idKey: _ } = _,
    [_, _] = _(() => [_.GetUpdateEventClanAccountID(), _.GetUpdateEventGID()]),
    { data: _ } = _(
      _({
        item_type: _(_.item_type),
        _: _._,
      }),
    ),
    _ = (0, _.useMemo)(() => _.InitFromClanID(_, _.EUNIVERSE), [_]),
    _ = _?.type == 12 ? void 0 : _?.related_items?.parent_appid;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        appid: _ || _._,
        selectedEventGID: _,
        fnSetUpdateEvent: _.SetUpdateEvent,
        label: _(`#EventDropDown_MM_FeaturedEvent`),
        tooltip: _(`#EventDropDown_MM_FeaturedEvent_ttip`),
        strUrlLearnMore: `https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates`,
      }),
      !!_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`a`, {
              href: `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${_}`,
              target: `_blank`,
              children: `open event for edit`,
            }),
            `\xA0 \xA0`,
            (0, _.jsx)(_, {
              toolTipContent: `Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library`,
              children: (0, _.jsx)(`a`, {
                href: `${_.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                target: `_blank`,
                children: `open event moderation tool`,
              }),
            }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`br`, {}),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
      appid: _,
      selectedEventGID: _,
      fnSetUpdateEvent: _,
      label: _,
      tooltip: _,
      strUrlLearnMore: _,
      bFilterOutDrafts: _,
    } = _,
    _ = _(),
    { clanInfo: _, bLoadingClanInfo: _ } = _(_),
    _ = _(_?.clanAccountID, _ - 2592e3),
    _ = (0, _.useMemo)(() => (_ ? _?.filter((_) => !_.hidden) : _), [_, _]),
    _ = (0, _.useMemo)(
      () =>
        _
          ? _.map((_) => {
              let _ = _.hidden
                ? _.published
                  ? `#EventDropDown_HiddenPublish`
                  : `#EventDropDown_Hidden`
                : `#EventDropDown_Visible`;
              return {
                label: _(_, _(_.rtime32_start_time), _.event_name),
                data: _,
              };
            })
          : [],
      [_],
    ),
    _ = _?.find((_) => _.gid === _);
  return !_ && (_ || _?.appid)
    ? (0, _.jsx)(_, {
        string: _(`#Loading`),
        size: `small`,
        position: `center`,
      })
    : !_ || _.length == 0
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              children: [
                _,
                ` `,
                (0, _.jsx)(_, {
                  tooltip: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _(_, `ErrorCtn`),
              children: _(
                `#EventDropDown_NoEventFound`,
                (0, _.jsx)(`a`, {
                  href: `${_.COMMUNITY_BASE_URL}ogg/${_}/partnerevents`,
                  target: `_blank`,
                }),
              ),
            }),
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            !!_ &&
              (0, _.jsx)(`a`, {
                href: _,
                target: `_blank`,
                style: {
                  float: `right`,
                },
                children: _(
                  `#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink`,
                ),
              }),
            (0, _.jsx)(_, {
              label: _,
              tooltip: _,
              selectedOption: _,
              onChange: (_) => _(_.clanAccountID, _.data.gid),
              rgOptions: _,
            }),
          ],
        });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
