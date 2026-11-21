import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _, _ } from "./chunk~f57d770d64.js";
import { _, _, _ } from "./chunk~4eed35ad1f.js";
import { _, _ } from "./chunk~b980924b6a.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _ } from "./chunk~618fb52a90.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1);
function _(_, _) {
  return !_ || _.startsWith(`https://`) || _.startsWith(`http://`)
    ? _
    : `${_.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
}
var _ = `poster`,
  _ = `${_}.avif`,
  _ = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function _(_) {
  let _ = _.video_webm_src || _.video_mp4_src;
  if (!_ || _.image?.includes(`.${_}.`)) return _.image;
  let _ = _.exec(_);
  return _ ? `${_[1]}.${_}` : _.image;
}
function _(_) {
  if (!_?.clan_accountid || !_.clan_event_gid) return null;
  let _ = _.cross_promo;
  return {
    clanAccountID: _.clan_accountid,
    strEventGID: _.clan_event_gid,
    strName: _.event_name ?? ``,
    rtEndTime: _.rtime32_end_time || void 0,
    strSummary: _.summary || void 0,
    strCapsuleURL: _(_),
    strSaleURL: _.store_path ? _.STORE_BASE_URL + _.store_path : void 0,
    strBackgroundURL: _(_.clan_accountid, _?.background_image),
    strScrimColor: _?.scrim_color || void 0,
    strLogoURL: _(_.clan_accountid, _?.logo?.image),
    eDesktopLayout: _?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function _(_, _) {
  let _ = _(_ ?? void 0, `capsule`, _);
  if (!_) return;
  let _ = _.clanSteamID.GetAccountID();
  return {
    clanAccountID: _,
    strEventGID: _.GID ?? ``,
    strName: _.GetNameWithFallback(_) ?? ``,
    rtEndTime: _.endTime || void 0,
    strSummary: _.GetSummaryWithFallback(_) || void 0,
    strCapsuleURL: _,
    strSaleURL: _(_) ?? void 0,
    strBackgroundURL: _(
      _,
      _.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: _.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: _(_, _),
    eDesktopLayout:
      _.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function _(_, _) {
  if (_) return _.startsWith(`http`) ? _ : _.GenerateURLFromHashAndExt(_, _);
}
function _(_) {
  let _ = _.capsule_image?.image;
  if (_ && _.clan_accountid)
    return _.capsule_image?.from_body
      ? _.ReplacementTokenToClanImageURL(_)
      : _(_.clan_accountid, _);
}
function _(_) {
  return (_ ?? []).slice(0, 48).map((_) => ({
    appid: _,
  }));
}
var _ = `Es-UANTRhdg-`,
  _ = `dv9UZEOxkuA-`,
  _ = `KNEaTOnJJWw-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `oztjxXYIBAk-`,
  _ = `yT92BfNEvpw-`,
  _ = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  _ = `_6iUHDist0Jc-`,
  _ = `gxh8RxFKhr8-`,
  _ = `tYvCiFSJDdI-`,
  _ = `AZSEWyNPfhc-`,
  _ = `gZNFN-cKUHw-`,
  _ = `VCRuNjWNqVc-`,
  _ = `AmB85SkEC3Q-`,
  _ = `P5j4maR0i14-`,
  _ = _(),
  _ = _.createContext(!1),
  _ = _.createContext(null);
function _(_, _, _) {
  let { bShowSeeMoreHint: _, panelProps: _ } = _(_ ? _ : void 0, `X`),
    _ = _.useContext(_),
    _ = !!_ && _ && !!_;
  return (
    _.useEffect(() => {
      if (_ && _)
        return (
          _({
            strLabel: _,
            bShown: _,
          }),
          () => _(null)
        );
    }, [_, _, _, _]),
    {
      bShowSeeMoreHint: _,
      panelProps: _,
      bHintInHeading: _,
    }
  );
}
function _(_) {
  let {
      promotedSaleEvent: _,
      children: _,
      nItemsToFeature: _,
      bInGamepadUI: _,
      section: _,
    } = _,
    _ = _?.eCreatorRole ? _(_.eCreatorRole) : _(_),
    {
      bShowSeeMoreHint: _,
      panelProps: _,
      bHintInHeading: _,
    } = _(_?.strSaleURL, _, _);
  return (0, _.jsx)(_, {
    ..._,
    className: _,
    "flow-children": `row`,
    panelProps: {
      ..._,
      navEntryPreferPosition: _.PREFERRED_CHILD,
    },
    children: (0, _.jsx)(_, {
      saleEvent: _,
      bShowExploreHint: _,
      bExploreHintInHeading: _,
      strExploreLabel: _(_),
      children: (0, _.jsx)(_, {
        nItemsToFeature: _,
        eCreatorRole: _?.eCreatorRole,
        children: (0, _.jsx)(_, {
          preferredFocus: !0,
          children: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { event: _, language: _, strSaleURL: _ } = _,
    _ = _(_, _);
  if (!_) return null;
  let _ = _
    ? {
        ..._,
        strSaleURL: _,
      }
    : _;
  return _.strSaleURL
    ? (0, _.jsx)(_, {
        className: _(_, _, _),
        "flow-children": `row`,
        children: (0, _.jsx)(_, {
          saleEvent: _,
          bExploreButtonBelow: !0,
        }),
      })
    : null;
}
function _(_) {
  let {
      saleEvent: _,
      bExploreButtonBelow: _,
      bShowExploreHint: _,
      bExploreHintInHeading: _,
      children: _,
    } = _,
    _ = _?.strSaleURL,
    _ = _?.eCreatorRole,
    _ = _ || !_.strExploreLabel ? _(_) : _.strExploreLabel,
    _ = _?.strCapsuleURL,
    _ = _?.strSummary,
    _ = _(),
    _ = _(),
    _ = _ && _ !== void 0,
    _ = _?.rtEndTime
      ? _(_.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: _,
        })
      : void 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(`div`, {
              className: `qbRGxo4aWcc-`,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: _(`HgvxVtFlDis-`, _ && `Lp2CuPiW8Lo-`),
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
          _ &&
            (0, _.jsx)(_, {
              rgAppIDs: _?.rgCreatorAppIDs,
              strAvatarURL: _,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `-NAWu4CYrl8-`),
        children: [
          _ &&
            _ &&
            (0, _.jsx)(_, {
              url: _,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, _.jsx)(`img`, {
                src: _,
                alt: ``,
              }),
            }),
          !_ &&
            (0, _.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, _.jsx)(_, {
                    url: _,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: _?.strName,
                  }),
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                  }),
              ],
            }),
          _ &&
            !_ &&
            !_ &&
            !_ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _,
            }),
          _ &&
            _ &&
            !_ &&
            (0, _.jsx)(_, {
              label: _,
              shown: !!_,
              button: `X`,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `ZONqp3dzTMI-`),
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: _(`oztjxXYIBAk-`, _ && `CDF-2WDX3lg-`),
              bFocusable: !!_,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, _.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: _,
                    }),
                  }),
              ],
            }),
          _,
        ],
      }),
      _ &&
        !_ &&
        !_ &&
        (0, _.jsx)(`div`, {
          className: _(`T1fHkhyvNkM-`, _ && `SAqjQ-F71kA-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _,
          }),
        }),
    ],
  });
}
var _ = 60,
  _ = 4;
function _(_) {
  let { rgAppIDs: _, strAvatarURL: _ } = _,
    _ = _.useMemo(() => _(_), [_]),
    _ = _(_, !1),
    _ = _.useMemo(() => {
      let _ = (_ ?? []).slice(0, 24);
      return _.length < _
        ? []
        : Array.from(
            {
              length: _,
            },
            (_, _) => _[_ % _.length],
          );
    }, [_]);
  return _.length
    ? (0, _.jsxs)(`div`, {
        className: _,
        "aria-hidden": !0,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  _: _,
                },
                _,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  let _ = _(_._, `header`);
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
        loading: `lazy`,
      })
    : (0, _.jsx)(`div`, {});
}
function _(_) {
  let { children: _, nItemsToFeature: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
var _ = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function _(_) {
  return _(
    _
      ? `#Sale_CrossPromoCreator_Visit_${_}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function _(_) {
  let {
      children: _,
      nItemsToFeature: _,
      strSaleURL: _,
      eCreatorRole: _,
      exploreHint: _,
    } = _,
    _ = !!_ && !_,
    _ = _.useContext(_),
    _ = !_ && !_,
    _ = _ || !_.strExploreLabel ? _(_) : _.strExploreLabel,
    _ = _.logged_in
      ? _.Localize(_.strSignedIn)
      : _.LocalizePlural(_.strSignedOut, _ ?? 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (_ || _ || (_ && !_.bInHeading)) &&
        (0, _.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `aMHZOpwLiBw-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                url: _,
                className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: _,
                children: _,
              }),
            _ &&
              !_.bInHeading &&
              (0, _.jsx)(`div`, {
                className: `Ri7uYDYJ-bo-`,
                children: (0, _.jsx)(_, {
                  label: _,
                  shown: _.bShown,
                  button: `X`,
                }),
              }),
          ],
        }),
      _,
      _ &&
        (0, _.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _,
          }),
        }),
    ],
  });
}
function _(_) {
  let {
    section: _,
    bInGamepadUI: _,
    placeholderHeight: _,
    className: _,
    "flow-children": _,
    panelProps: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    placeholderHeight: _,
    className: _({
      [_]: !0,
      [_]: _(_),
      [_]: !0,
      SaleSectionForCustomCSS: !0,
      [_]: !0,
      [_]: !0,
    }),
    rootMargin: _,
    holdGamepadFocus: _,
    "flow-children": _,
    ..._,
    children: _,
  });
}
var _ = [1e3, 500, 250, 100, 50, 20];
function _(_) {
  let _ = _.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    _ = _.find((_) => _ >= _);
  return _
    ? _(`#Sale_CrossPromoSale_ExploreItems`, _(_))
    : _(`#Sale_CrossPromoSale_ExploreEvent`);
}
