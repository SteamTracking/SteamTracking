import "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~4c761eb6f4.js";
import { _ } from "./chunk~f57d770d64.js";
import { _, _ } from "./chunk~b980924b6a.js";
import { _ } from "./chunk~d43c81a658.js";
import { _ } from "./chunk~618fb52a90.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _ } from "./chunk~ffe4581a06.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
_();
function _(_) {
  return _.section_type === `crosspromotesalepage`
    ? (_.sale_page_cross_promo_sales ?? [])
    : [];
}
function _(_) {
  return _(_).map((_) => ({
    ..._,
    sale_page_cross_promo_sales: [_],
    capsules: _.capsules ?? [],
  }));
}
function _(_) {
  return _(_)[0]?.event_gid || void 0;
}
function _(_) {
  return _(_).flatMap((_) => _.event_gid || []);
}
function _(_) {
  return _(_)[0]?.featured_app_tagid || void 0;
}
function _(_) {
  let _ = _(_);
  return _.length > 0 && _.every((_) => (_.capsules?.length ?? 0) > 0);
}
function _(_, _) {
  return _(_) ? (_?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function _(_) {
  let _ = _(_)[0];
  return !!_?.event_gid && (!!_.featured_app_tagid || !!_.capsules?.length);
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function _(_, _) {
  let _ = _.GetELanguageFallback(_),
    _ =
      _.jsondata.localized_sale_cross_promo_logo_image?.findIndex((_) => !!_) ??
      -1;
  return (
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    (_ >= 0 ? _.GetImageURL(`sale_cross_promo_logo`, _) : void 0) ||
    _.GetImageURL(`sale_logo`, _) ||
    _.GetImageURL(`sale_logo`, _)
  );
}
function _(_) {
  return 3;
}
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
var _ = `Es-UANTRhdg-`,
  _ = `KNEaTOnJJWw-`,
  _ = `ypQ9RrTsvmE-`,
  _ = `aMHZOpwLiBw-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `oztjxXYIBAk-`,
  _ = `yT92BfNEvpw-`,
  _ = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  _ = `NjUCqxvhkHk-`,
  _ = `_6iUHDist0Jc-`,
  _ = `gxh8RxFKhr8-`,
  _ = `tYvCiFSJDdI-`,
  _ = `VCRuNjWNqVc-`,
  _ = `AmB85SkEC3Q-`,
  _ = `P5j4maR0i14-`,
  _ = _();
function _(_) {
  let {
      promotedSaleEvent: _,
      children: _,
      nItemsToFeature: _,
      bInGamepadUI: _,
    } = _,
    { bShowSeeMoreHint: _, panelProps: _ } = _(_ ? _?.strSaleURL : void 0);
  return (0, _.jsx)(_, {
    ..._,
    className: _,
    "flow-children": `row`,
    panelProps: _,
    children: (0, _.jsx)(_, {
      saleEvent: _,
      bShowExploreHint: _,
      children: (0, _.jsx)(_, {
        nItemsToFeature: _,
        children: _,
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
      children: _,
    } = _,
    _ = _?.strSaleURL,
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
      _ &&
        (0, _.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  url: _,
                  className: _,
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
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              label: _(`#Sale_CrossPromoSale_ExploreEvent`),
              shown: !!_,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: `oztjxXYIBAk-`,
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
        (0, _.jsx)(`div`, {
          className: _(`T1fHkhyvNkM-`, _ && `SAqjQ-F71kA-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
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
function _(_) {
  let { children: _, nItemsToFeature: _, strSaleURL: _ } = _,
    _ = _.logged_in
      ? _.Localize(`#Sale_CrossPromoSale_RecommendedFromEvent`)
      : _.LocalizePlural(
          `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
          _ ?? 0,
        );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _(`#Sale_CrossPromoSale_ExploreEvent`),
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
            children: _(`#Sale_CrossPromoSale_ExploreEvent`),
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
